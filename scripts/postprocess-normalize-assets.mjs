#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? process.cwd());
const renamedAt = new Date().toISOString();
const textFileByteLimit = 20 * 1024 * 1024;
const hashedAssetSuffixes = [
  ".js.map",
  ".mjs.map",
  ".cjs.map",
  ".css.map",
  ".js",
  ".mjs",
  ".cjs",
  ".css",
  ".wasm",
  ".map",
];

function toPosix(relativePath) {
  return relativePath.split(path.sep).join("/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function exists(filePath) {
  try {
    await fs.stat(filePath);
    return true;
  } catch (error) {
    if (error && error.code === "ENOENT") return false;
    throw error;
  }
}

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git") continue;

    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }

  return files;
}

function parseHashedAssetName(fileName) {
  const extension = hashedAssetSuffixes.find((suffix) => fileName.endsWith(suffix));

  if (!extension) return null;

  const stem = fileName.slice(0, -extension.length);
  const match = stem.match(/^(.*?)([-.])([A-Za-z0-9_]{6,32})$/);
  if (!match) return null;

  const [, baseName, , hashToken] = match;

  if (!/[0-9]/.test(hashToken)) return null;
  if (!baseName || baseName.endsWith("-") || baseName.endsWith(".")) return null;

  return {
    baseName,
    extension,
    targetName: `${baseName}${extension}`,
  };
}

function groupCandidates(candidates) {
  const groups = new Map();

  for (const candidate of candidates) {
    const key = `${candidate.directory}\0${candidate.targetName}`;
    const group = groups.get(key) ?? [];
    group.push(candidate);
    groups.set(key, group);
  }

  return groups;
}

async function planRenames(candidates) {
  const planned = [];
  const groups = groupCandidates(candidates);

  for (const group of groups.values()) {
    group.sort((left, right) => left.fileName.localeCompare(right.fileName));

    const { directory, baseName, extension, targetName } = group[0];
    const directTargetPath = path.join(directory, targetName);
    const directTargetExists = await exists(directTargetPath);
    const needsNumberedNames = group.length > 1 || directTargetExists;
    const reserved = new Set(group.map((candidate) => candidate.fileName));

    if (!needsNumberedNames) {
      planned.push({
        from: group[0].filePath,
        to: directTargetPath,
      });
      continue;
    }

    let suffix = 1;

    for (const candidate of group) {
      let targetFileName;

      do {
        targetFileName = `${baseName}-${suffix}${extension}`;
        suffix += 1;
      } while (
        reserved.has(targetFileName) ||
        await exists(path.join(directory, targetFileName))
      );

      reserved.add(targetFileName);
      planned.push({
        from: candidate.filePath,
        to: path.join(directory, targetFileName),
      });
    }
  }

  return planned.filter((rename) => rename.from !== rename.to);
}

async function applyRenames(renames) {
  const staged = [];

  for (const [index, rename] of renames.entries()) {
    const temporaryPath = path.join(
      path.dirname(rename.from),
      `.codex-rename-${process.pid}-${index}-${path.basename(rename.from)}`,
    );

    await fs.rename(rename.from, temporaryPath);
    staged.push({ ...rename, temporaryPath });
  }

  for (const rename of staged) {
    await fs.rename(rename.temporaryPath, rename.to);
  }
}

function buildReplacementMap(renames) {
  const replacementMap = new Map();
  const ambiguous = new Set();

  for (const rename of renames) {
    const fromName = path.basename(rename.from);
    const toName = path.basename(rename.to);
    const existing = replacementMap.get(fromName);

    if (existing && existing !== toName) {
      ambiguous.add(fromName);
    } else {
      replacementMap.set(fromName, toName);
    }
  }

  for (const fromName of ambiguous) {
    replacementMap.delete(fromName);
  }

  return replacementMap;
}

async function isProbablyText(filePath) {
  const stat = await fs.stat(filePath);
  if (stat.size > textFileByteLimit) return false;

  const buffer = await fs.readFile(filePath);
  return !buffer.includes(0);
}

async function rewriteReferences(replacementMap) {
  if (replacementMap.size === 0) return [];

  const files = await walk(root);
  const patterns = [...replacementMap.entries()].map(([fromName, toName]) => ({
    expression: new RegExp(escapeRegExp(fromName), "g"),
    toName,
  }));
  const changedFiles = [];

  for (const filePath of files) {
    if (!await isProbablyText(filePath)) continue;

    const original = await fs.readFile(filePath, "utf8");
    let next = original;

    for (const pattern of patterns) {
      next = next.replace(pattern.expression, pattern.toName);
    }

    if (next !== original) {
      await fs.writeFile(filePath, next);
      changedFiles.push(toPosix(path.relative(root, filePath)));
    }
  }

  return changedFiles;
}

async function main() {
  const files = await walk(root);
  const candidates = [];

  for (const filePath of files) {
    const fileName = path.basename(filePath);
    const parsed = parseHashedAssetName(fileName);

    if (!parsed) continue;

    candidates.push({
      filePath,
      fileName,
      directory: path.dirname(filePath),
      ...parsed,
    });
  }

  const renames = await planRenames(candidates);

  if (renames.length === 0) {
    console.log("No hashed asset filenames found.");
    return;
  }

  await applyRenames(renames);
  const replacementMap = buildReplacementMap(renames);
  const referenceUpdates = await rewriteReferences(replacementMap);

  const report = {
    renamedAt,
    renames: renames.map((rename) => ({
      from: toPosix(path.relative(root, rename.from)),
      to: toPosix(path.relative(root, rename.to)),
    })),
    referenceUpdates,
  };

  await fs.writeFile(
    path.join(root, ".codex-app-postprocess.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );

  console.log(`Normalized ${renames.length} hashed asset filename(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
