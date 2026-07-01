#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? process.cwd());
const renamedAt = new Date().toISOString();
const textFileByteLimit = 20 * 1024 * 1024;
const reportFileName = ".codex-app-postprocess.json";
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

  for (const match of stem.matchAll(/[-.]/g)) {
    const separator = match[0];
    const baseName = stem.slice(0, match.index);
    const hashSuffix = stem.slice(match.index + 1);

    if (!isLikelyHashSuffix(hashSuffix, separator, extension)) continue;
    if (!baseName || baseName.endsWith("-") || baseName.endsWith(".")) continue;

    return {
      baseName,
      extension,
      targetName: `${baseName}${extension}`,
    };
  }

  return null;
}

function isLikelyHashSuffix(hashSuffix, separator, extension) {
  if (separator === ".") {
    return isLikelyHashToken(hashSuffix, separator, extension);
  }

  const parts = hashSuffix.split("-").filter(Boolean);
  if (parts.length === 0) return false;
  if (parts.some((part) => !/^[A-Za-z0-9_]{1,32}$/.test(part))) return false;

  const [firstPart, ...remainingParts] = parts;
  const compactHash = parts.join("");
  if (!isLikelyHashToken(firstPart, separator, extension, {
    allowShortMixedCase: remainingParts.length > 0,
  })) {
    return false;
  }

  return isLikelyHashToken(compactHash, separator, extension, {
    allowShortMixedCase: remainingParts.length > 0,
  });
}

function isLikelyHashToken(hashToken, separator, extension, options = {}) {
  const minimumLength = options.allowShortMixedCase ? 5 : 6;
  if (!/^[A-Za-z0-9_]+$/.test(hashToken)) return false;
  if (hashToken.length < minimumLength || hashToken.length > 32) return false;

  if (/[0-9_]/.test(hashToken)) return true;

  if (extension === ".wasm" && separator === ".") {
    return /^[a-z]{10}$/.test(hashToken);
  }

  if (separator === "-") {
    return (
      /[A-Z]/.test(hashToken) && /[a-z]/.test(hashToken)
    ) || /^[A-Z]{7,12}$/.test(hashToken);
  }

  return false;
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

async function readExistingReport() {
  const reportPath = path.join(root, reportFileName);

  try {
    return JSON.parse(await fs.readFile(reportPath, "utf8"));
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }

    return null;
  }
}

function combineUniqueBy(items, key) {
  const combined = new Map();

  for (const item of items) {
    combined.set(key(item), item);
  }

  return [...combined.values()];
}

async function main() {
  const existingReport = await readExistingReport();
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
    renames: combineUniqueBy([
      ...(existingReport?.renames ?? []),
      ...renames.map((rename) => ({
        from: toPosix(path.relative(root, rename.from)),
        to: toPosix(path.relative(root, rename.to)),
      })),
    ], (rename) => `${rename.from}\0${rename.to}`),
    referenceUpdates: combineUniqueBy([
      ...(existingReport?.referenceUpdates ?? []),
      ...referenceUpdates,
    ], (filePath) => filePath),
  };

  await fs.writeFile(
    path.join(root, reportFileName),
    `${JSON.stringify(report, null, 2)}\n`,
  );

  console.log(`Normalized ${renames.length} hashed asset filename(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
