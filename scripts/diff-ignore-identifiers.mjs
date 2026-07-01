#!/usr/bin/env node
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";

const traverse = traverseModule.default ?? traverseModule;
const defaultExtensions = new Set([".cjs", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const maxHashableBindingBytes = 8000;

function usage() {
  console.log(`Usage:
  node scripts/diff-ignore-identifiers.mjs [options] <old-ref> <new-ref> [-- <pathspec>...]

Options:
  --output=FILE                  Write the identifier-insensitive diff to FILE.
  --mode=hash                    Rename bindings using fixed-point content hashes. Default.
  --mode=line                    Rename unresolved identifiers to ID0, ID1, ... per line.
  --mode=ordered                 Rename unresolved identifiers to ID0, ID1, ... per file.
  --mode=all                     Rename every identifier/property to ID/PROP.
  --extensions=.js,.mjs          Comma-separated extensions to normalize.
  --exclude-added-deleted-files  Omit files not present at the same path on both sides.
  --exclude-postprocess-json     Exclude .codex-app-postprocess.json.
  --js-only                      Omit non-JS-like files from the normalized trees.
  --normalized-output            Show normalized placeholders in hunk lines.
  --keep-temp                    Keep temporary normalized trees for inspection.
  -h, --help                     Show this help.

The output is a diff of normalized temporary trees. JavaScript-family files are
parsed with Babel. Simple bindings are renamed to stable content hashes of their
initializer/body with external references canonicalized to structural
placeholders; unresolved bindings fall back to structural placeholders. Hunk
lines are rendered from the original files unless --normalized-output is set.
Non-JS files are included as raw content unless --js-only is passed.`);
}

function parseArgs(argv) {
  const options = {
    excludePostprocessJson: false,
    excludeAddedDeletedFiles: false,
    excludePathspecs: [],
    extensions: new Set(defaultExtensions),
    includePathspecs: [],
    jsOnly: false,
    keepTemp: false,
    mode: "hash",
    normalizedOutput: false,
    output: "",
    pathspecs: [],
    refs: [],
  };
  const dashDash = argv.indexOf("--");
  const args = dashDash === -1 ? argv : argv.slice(0, dashDash);

  options.pathspecs = dashDash === -1 ? [] : argv.slice(dashDash + 1);

  for (const arg of args) {
    if (arg === "-h" || arg === "--help") {
      options.help = true;
    } else if (arg === "--exclude-added-deleted-files") {
      options.excludeAddedDeletedFiles = true;
    } else if (arg === "--exclude-postprocess-json") {
      options.excludePostprocessJson = true;
    } else if (arg === "--js-only") {
      options.jsOnly = true;
    } else if (arg === "--keep-temp") {
      options.keepTemp = true;
    } else if (arg === "--normalized-output") {
      options.normalizedOutput = true;
    } else if (arg.startsWith("--output=")) {
      options.output = arg.slice("--output=".length);
    } else if (arg.startsWith("--mode=")) {
      options.mode = arg.slice("--mode=".length);
    } else if (arg.startsWith("--extensions=")) {
      options.extensions = new Set(
        arg
          .slice("--extensions=".length)
          .split(",")
          .map((extension) => extension.trim().toLowerCase())
          .filter(Boolean)
          .map((extension) => extension.startsWith(".") ? extension : `.${extension}`),
      );
    } else if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      options.refs.push(arg);
    }
  }

  if (!["all", "hash", "line", "ordered"].includes(options.mode)) {
    throw new Error("--mode must be all, hash, line, or ordered.");
  }

  if (options.excludePostprocessJson) {
    options.pathspecs.push(":(exclude).codex-app-postprocess.json");
  }

  const split = splitPathspecs(options.pathspecs);

  options.includePathspecs = split.includePathspecs;
  options.excludePathspecs = split.excludePathspecs;

  return options;
}

function splitPathspecs(pathspecs) {
  const includePathspecs = [];
  const excludePathspecs = [];

  for (const pathspec of pathspecs) {
    if (pathspec.startsWith(":(exclude)")) {
      excludePathspecs.push(pathspec.slice(":(exclude)".length));
    } else if (pathspec.startsWith(":(exclude,")) {
      const close = pathspec.indexOf(")");

      if (close === -1) {
        throw new Error(`Invalid exclude pathspec: ${pathspec}`);
      }

      excludePathspecs.push(pathspec.slice(close + 1));
    } else if (pathspec.startsWith(":!") || pathspec.startsWith(":^")) {
      excludePathspecs.push(pathspec.slice(2));
    } else {
      includePathspecs.push(pathspec);
    }
  }

  return { includePathspecs, excludePathspecs };
}

function globToRegExp(glob) {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  const source = escaped.replace(/\*/g, ".*").replace(/\?/g, ".");

  return new RegExp(`^${source}$`);
}

function matchesPathspec(filePath, pathspec) {
  if (!pathspec) return false;
  if (/[*?[]/.test(pathspec)) return globToRegExp(pathspec).test(filePath);
  if (filePath === pathspec) return true;

  const directory = pathspec.endsWith("/") ? pathspec : `${pathspec}/`;

  return filePath.startsWith(directory);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env || process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    const stdout = [];
    const stderr = [];

    child.stdout.on("data", (chunk) => stdout.push(chunk));
    child.stderr.on("data", (chunk) => stderr.push(chunk));
    child.on("error", reject);
    child.on("close", (code) => {
      const result = {
        code,
        stdout: Buffer.concat(stdout),
        stderr: Buffer.concat(stderr).toString("utf8"),
      };

      if ((options.allowedExitCodes || [0]).includes(code)) {
        resolve(result);
        return;
      }

      reject(
        new Error(
          `${[command, ...args].join(" ")} exited with status ${code}\n${result.stderr}`,
        ),
      );
    });
  });
}

async function captureText(command, args, options = {}) {
  const result = await run(command, args, options);
  return result.stdout.toString("utf8");
}

function parserPlugins(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const plugins = [
    "decorators-legacy",
    "explicitResourceManagement",
    "importAttributes",
  ];

  if (extension === ".jsx" || extension === ".tsx") {
    plugins.push("jsx");
  }

  if (extension === ".ts" || extension === ".tsx") {
    plugins.push("typescript");
  }

  return plugins;
}

function parseJavaScript(source, filePath) {
  return parse(source, {
    allowAwaitOutsideFunction: true,
    allowNewTargetOutsideFunction: true,
    allowReturnOutsideFunction: true,
    allowSuperOutsideMethod: true,
    attachComment: false,
    errorRecovery: true,
    plugins: parserPlugins(filePath),
    sourceType: "unambiguous",
  });
}

function hashText(text, prefix) {
  return `${prefix}_${createHash("sha256").update(text).digest("hex").slice(0, 16)}`;
}

function propertyNameHash(name) {
  return hashText(name, "PROP");
}

function globalNameHash(name) {
  return hashText(name, "GLOBAL");
}

function bindingHash(text) {
  return hashText(text, "H");
}

function offsetLineStarts(source) {
  const starts = [0];

  for (let index = 0; index < source.length; index += 1) {
    if (source[index] === "\n") {
      starts.push(index + 1);
    }
  }

  return starts;
}

function lineForOffset(lineStarts, offset) {
  let low = 0;
  let high = lineStarts.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (lineStarts[mid] <= offset) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high + 1;
}

function isPropertyName(path) {
  const parent = path.parentPath;

  if (!parent) return false;

  if (
    parent.isMemberExpression({ property: path.node }) ||
    parent.isOptionalMemberExpression?.({ property: path.node })
  ) {
    return !parent.node.computed;
  }

  if (
    parent.isObjectProperty?.({ key: path.node }) ||
    parent.isObjectMethod?.({ key: path.node }) ||
    parent.isClassMethod?.({ key: path.node }) ||
    parent.isClassProperty?.({ key: path.node }) ||
    parent.isClassPrivateProperty?.({ key: path.node }) ||
    parent.isClassPrivateMethod?.({ key: path.node })
  ) {
    return !parent.node.computed && !parent.node.shorthand;
  }

  return false;
}

function shouldNormalizeIdentifier(path) {
  if (!path.node || path.node.start == null || path.node.end == null) return false;

  if (path.parentPath?.isImportSpecifier?.({ imported: path.node })) return false;
  if (path.parentPath?.isExportSpecifier?.({ exported: path.node })) return false;

  return path.isIdentifier();
}

function bindingForIdentifier(path) {
  const name = path.node.name;

  if (path.isBindingIdentifier()) {
    return path.scope.getBinding(name) ?? path.scope.parent?.getBinding(name) ?? null;
  }

  if (path.isReferencedIdentifier()) {
    return path.scope.getBinding(name) ?? null;
  }

  return null;
}

function collectAllBindings(ast) {
  const bindings = new Set();

  traverse(ast, {
    Scopable(path) {
      for (const binding of Object.values(path.scope?.bindings ?? {})) {
        if (binding?.path) {
          bindings.add(binding);
        }
      }
    },
  });

  return [...bindings];
}

function bindingValuePath(binding) {
  const path = binding.path;
  const parent = path.parentPath;

  if (parent?.isVariableDeclarator?.({ id: path.node })) {
    const init = parent.get("init");
    return init?.node ? init : null;
  }

  if (
    parent?.isFunctionDeclaration?.({ id: path.node }) ||
    parent?.isFunctionExpression?.({ id: path.node }) ||
    parent?.isClassDeclaration?.({ id: path.node }) ||
    parent?.isClassExpression?.({ id: path.node })
  ) {
    return parent;
  }

  if (path.isFunctionDeclaration?.() || path.isClassDeclaration?.()) {
    return path;
  }

  return null;
}

function importBindingHash(binding) {
  const parent = binding.path.parentPath;
  const declaration = parent?.parentPath;

  if (!declaration?.isImportDeclaration?.()) return "";

  const source = declaration.node.source.value;

  if (parent.isImportDefaultSpecifier()) return bindingHash(`import:${source}:default`);
  if (parent.isImportNamespaceSpecifier()) return bindingHash(`import:${source}:*`);
  if (parent.isImportSpecifier()) {
    const imported = parent.node.imported?.name ?? parent.node.imported?.value ?? "";

    return bindingHash(`import:${source}:${imported}`);
  }

  return "";
}

function collectBindingsInside(path, candidateBinding) {
  const bindings = new Set([candidateBinding]);

  path.traverse({
    Scopable(childPath) {
      for (const binding of Object.values(childPath.scope?.bindings ?? {})) {
        if (binding?.path) {
          bindings.add(binding);
        }
      }
    },
  });

  return bindings;
}

function addReplacement(replacements, start, end, value) {
  if (start == null || end == null || start >= end) return;
  replacements.push({ end, start, value });
}

function applyReplacements(source, replacements) {
  if (replacements.length === 0) return source;

  const deduped = new Map();

  for (const replacement of replacements) {
    deduped.set(`${replacement.start}:${replacement.end}`, replacement);
  }

  const sorted = [...deduped.values()].sort((left, right) => left.start - right.start);
  const output = [];
  let offset = 0;

  for (const replacement of sorted) {
    if (replacement.start < offset) continue;

    output.push(source.slice(offset, replacement.start), replacement.value);
    offset = replacement.end;
  }

  output.push(source.slice(offset));

  return output.join("");
}

function normalizeBindingText(source, valuePath, candidateBinding) {
  const localBindings = collectBindingsInside(valuePath, candidateBinding);
  const externalBindings = new Map();
  const localNames = new Map();
  const localProperties = new Map();
  const replacements = [];

  function localName(binding) {
    if (!localNames.has(binding)) {
      localNames.set(binding, `LOCAL_${localNames.size}`);
    }

    return localNames.get(binding);
  }

  function externalName(binding) {
    if (!externalBindings.has(binding)) {
      externalBindings.set(binding, `EXT_${externalBindings.size}`);
    }

    return externalBindings.get(binding);
  }

  function localProperty(name) {
    if (!localProperties.has(name)) {
      localProperties.set(name, `PROP_${localProperties.size}`);
    }

    return localProperties.get(name);
  }

  valuePath.traverse({
    Identifier(path) {
      if (!shouldNormalizeIdentifier(path)) return;

      if (isPropertyName(path)) {
        addReplacement(replacements, path.node.start, path.node.end, localProperty(path.node.name));
        return;
      }

      const binding = bindingForIdentifier(path);
      let value;

      if (!binding) {
        value = globalNameHash(path.node.name);
      } else if (binding === candidateBinding) {
        value = "SELF";
      } else if (localBindings.has(binding)) {
        value = localName(binding);
      } else {
        value = externalName(binding);
      }

      addReplacement(replacements, path.node.start, path.node.end, value);
    },
  });

  const original = source.slice(valuePath.node.start, valuePath.node.end);
  const shifted = replacements.map((replacement) => ({
    ...replacement,
    end: replacement.end - valuePath.node.start,
    start: replacement.start - valuePath.node.start,
  }));

  return {
    text: applyReplacements(original, shifted),
  };
}

function computeBindingHashes(ast, source) {
  const bindings = collectAllBindings(ast);
  const infos = [];
  const hashes = new Map();

  for (const binding of bindings) {
    const imported = importBindingHash(binding);

    if (imported) {
      hashes.set(binding, imported);
      continue;
    }

    const valuePath = bindingValuePath(binding);

    if (
      valuePath?.node?.start != null &&
      valuePath.node.end != null &&
      valuePath.node.end - valuePath.node.start <= maxHashableBindingBytes
    ) {
      infos.push({ binding, valuePath });
    }
  }

  for (const info of infos) {
    const normalized = normalizeBindingText(source, info.valuePath, info.binding);
    const nextHash = bindingHash(normalized.text);

    hashes.set(info.binding, nextHash);
  }

  return hashes;
}

function createFallbackRenamer(mode, lineStarts) {
  const ordered = new Map();
  const lineMaps = new Map();
  const propertyLineMaps = new Map();

  function renameFrom(map, key, prefix) {
    if (!map.has(key)) {
      map.set(key, `${prefix}${map.size}`);
    }

    return map.get(key);
  }

  function lineMap(container, line) {
    if (!container.has(line)) {
      container.set(line, new Map());
    }

    return container.get(line);
  }

  return {
    bindingName(binding, node) {
      if (mode === "all") return "ID";
      if (mode === "ordered") return renameFrom(ordered, binding ?? `global:${node.name}`, "ID");

      const line = lineForOffset(lineStarts, node.start);
      return renameFrom(lineMap(lineMaps, line), binding ?? `global:${node.name}`, "ID");
    },

    propertyName(name, node) {
      if (mode === "all") return "PROP";
      if (mode === "ordered") return propertyNameHash(name);

      const line = lineForOffset(lineStarts, node.start);
      return renameFrom(lineMap(propertyLineMaps, line), name, "PROP");
    },
  };
}

function normalizeJavaScript(source, filePath, options) {
  let ast;

  try {
    ast = parseJavaScript(source, filePath);
  } catch (error) {
    console.warn(`${filePath}: Babel parse failed; leaving file unnormalized: ${error.message}`);
    return source;
  }

  const lineStarts = offsetLineStarts(source);
  const bindingHashes = options.mode === "hash" ? computeBindingHashes(ast, source) : new Map();
  const fallback = createFallbackRenamer(options.mode, lineStarts);
  const replacements = [];

  traverse(ast, {
    Identifier(path) {
      if (!shouldNormalizeIdentifier(path)) return;

      if (isPropertyName(path)) {
        addReplacement(
          replacements,
          path.node.start,
          path.node.end,
          fallback.propertyName(path.node.name, path.node),
        );
        return;
      }

      const binding = bindingForIdentifier(path);
      const value = path.isBindingIdentifier() && bindingHashes.has(binding)
        ? bindingHashes.get(binding)
        : fallback.bindingName(binding, path.node);

      addReplacement(replacements, path.node.start, path.node.end, value);
    },
  });

  return applyReplacements(source, replacements);
}

function isProbablyBinary(buffer) {
  return buffer.subarray(0, 8192).includes(0);
}

function isNormalizable(filePath, extensions) {
  return extensions.has(path.extname(filePath).toLowerCase());
}

function safeOutputPath(root, filePath) {
  const normalized = path.posix.normalize(filePath);

  if (normalized.startsWith("../") || normalized === ".." || path.isAbsolute(normalized)) {
    throw new Error(`Unsafe path in Git tree: ${filePath}`);
  }

  return path.join(root, normalized);
}

async function listFiles(ref, options) {
  const args = ["ls-tree", "-r", "-z", "--name-only", ref];

  if (options.includePathspecs.length > 0) {
    args.push("--", ...options.includePathspecs);
  }

  const output = await captureText("git", args);

  return output
    .split("\0")
    .filter(Boolean)
    .filter((filePath) =>
      !options.excludePathspecs.some((pathspec) => matchesPathspec(filePath, pathspec))
    );
}

async function readBlob(ref, filePath) {
  const result = await run("git", ["show", `${ref}:${filePath}`]);

  return result.stdout;
}

async function writeNormalizedFile(ref, targetRoot, originalRoot, filePath, options) {
  const buffer = await readBlob(ref, filePath);
  const shouldNormalize = isNormalizable(filePath, options.extensions) && !isProbablyBinary(buffer);

  if (options.jsOnly && !shouldNormalize) {
    return;
  }

  const target = safeOutputPath(targetRoot, filePath);
  const originalTarget = safeOutputPath(originalRoot, filePath);

  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.mkdir(path.dirname(originalTarget), { recursive: true });
  await fs.writeFile(originalTarget, buffer);

  if (shouldNormalize) {
    await fs.writeFile(
      target,
      normalizeJavaScript(buffer.toString("utf8"), filePath, options),
      "utf8",
    );
    return;
  }

  await fs.writeFile(target, buffer);
}

function splitLines(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
}

function lineAt(lines, lineNumber, fallback) {
  if (lineNumber <= 0) return fallback;

  return lines[lineNumber - 1] ?? fallback;
}

function filePathFromPatchPath(patchPath) {
  if (patchPath === "/dev/null") return "";

  for (const prefix of ["a/old/", "b/old/", "a/new/", "b/new/", "old/", "new/"]) {
    if (patchPath.startsWith(prefix)) {
      return patchPath.slice(prefix.length);
    }
  }

  return patchPath.replace(/^[ab]\//, "");
}

async function readOriginalLines(root, filePath, cache) {
  if (!filePath) return [];

  const key = `${root}\0${filePath}`;

  if (cache.has(key)) {
    return cache.get(key);
  }

  const file = safeOutputPath(root, filePath);
  const text = await fs.readFile(file, "utf8").catch(() => "");
  const lines = splitLines(text);

  cache.set(key, lines);
  return lines;
}

async function originalLine(root, filePath, lineNumber, cache, fallback) {
  const lines = await readOriginalLines(root, filePath, cache);

  return lineAt(lines, lineNumber, fallback);
}

function parseHunkHeader(line) {
  const match = line.match(/^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/);

  if (!match) return null;

  return {
    oldLine: Number(match[1]),
    newLine: Number(match[2]),
  };
}

function parsePatchFilePath(line) {
  const match = line.match(/^[+-]{3} (.+)$/);

  return match ? filePathFromPatchPath(match[1]) : "";
}

async function renderOriginalHunkLines(patch, oldRoot, newRoot) {
  const lines = patch.split("\n");
  const rendered = [];
  const cache = new Map();
  let oldFile = "";
  let newFile = "";
  let oldLine = 0;
  let newLine = 0;
  let inHunk = false;

  for (const line of lines) {
    if (line.startsWith("diff --git ")) {
      inHunk = false;
      rendered.push(line);
      continue;
    }

    if (line.startsWith("--- ")) {
      oldFile = parsePatchFilePath(line);
      inHunk = false;
      rendered.push(line);
      continue;
    }

    if (line.startsWith("+++ ")) {
      newFile = parsePatchFilePath(line);
      inHunk = false;
      rendered.push(line);
      continue;
    }

    if (line.startsWith("@@ ")) {
      const hunk = parseHunkHeader(line);

      if (hunk) {
        oldLine = hunk.oldLine;
        newLine = hunk.newLine;
        inHunk = true;
      }

      rendered.push(line);
      continue;
    }

    if (!inHunk || line.startsWith("\\ No newline")) {
      rendered.push(line);
      continue;
    }

    if (line.startsWith("-")) {
      rendered.push(`-${await originalLine(oldRoot, oldFile, oldLine, cache, line.slice(1))}`);
      oldLine += 1;
      continue;
    }

    if (line.startsWith("+")) {
      rendered.push(`+${await originalLine(newRoot, newFile, newLine, cache, line.slice(1))}`);
      newLine += 1;
      continue;
    }

    if (line.startsWith(" ")) {
      rendered.push(` ${await originalLine(oldRoot, oldFile, oldLine, cache, line.slice(1))}`);
      oldLine += 1;
      newLine += 1;
      continue;
    }

    rendered.push(line);
  }

  return rendered.join("\n");
}

function splitPatchSections(patch) {
  const lines = patch.split("\n");
  const sections = [];
  let current = [];

  for (const line of lines) {
    if (line.startsWith("diff --git ") && current.length > 0) {
      sections.push(current.join("\n"));
      current = [];
    }

    current.push(line);
  }

  if (current.length > 0 && current.some((line) => line.length > 0)) {
    sections.push(current.join("\n"));
  }

  return sections;
}

function parseSectionFilePaths(section) {
  let oldFile = "";
  let newFile = "";

  for (const line of section.split("\n")) {
    if (line.startsWith("--- ")) {
      oldFile = parsePatchFilePath(line);
    } else if (line.startsWith("+++ ")) {
      newFile = parsePatchFilePath(line);
    }
  }

  return { oldFile, newFile };
}

function filterAddedDeletedFileSections(patch, oldFileSet, newFileSet) {
  return splitPatchSections(patch)
    .filter((section) => {
      const { oldFile, newFile } = parseSectionFilePaths(section);

      return oldFile &&
        newFile &&
        oldFile === newFile &&
        oldFileSet.has(oldFile) &&
        newFileSet.has(newFile);
    })
    .join("\n");
}

function cleanPatchPaths(text) {
  function cleanGitPathPrefixes(line) {
    return line
      .replaceAll("a/old/", "a/")
      .replaceAll("a/new/", "a/")
      .replaceAll("b/old/", "b/")
      .replaceAll("b/new/", "b/");
  }

  return text
    .split("\n")
    .map((line) => {
      if (line.startsWith("diff --git ")) {
        return cleanGitPathPrefixes(line);
      }

      if (line.startsWith("--- a/old/")) return line.replace("--- a/old/", "--- a/");
      if (line.startsWith("--- a/new/")) return line.replace("--- a/new/", "--- a/");
      if (line.startsWith("+++ b/old/")) return line.replace("+++ b/old/", "+++ b/");
      if (line.startsWith("+++ b/new/")) return line.replace("+++ b/new/", "+++ b/");
      if (line.startsWith("rename from old/")) return line.replace("rename from old/", "rename from ");
      if (line.startsWith("rename to new/")) return line.replace("rename to new/", "rename to ");
      if (line.startsWith("copy from old/")) return line.replace("copy from old/", "copy from ");
      if (line.startsWith("copy to new/")) return line.replace("copy to new/", "copy to ");
      if (line.startsWith("Binary files old/")) {
        return line.replace("Binary files old/", "Binary files a/").replace(" and new/", " and b/");
      }

      return line;
    })
    .join("\n");
}

async function buildNormalizedTree(ref, files, targetRoot, originalRoot, options) {
  let index = 0;

  for (const filePath of files) {
    index += 1;

    if (index % 500 === 0) {
      console.error(`${ref}: normalized ${index}/${files.length} files`);
    }

    await writeNormalizedFile(ref, targetRoot, originalRoot, filePath, options);
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    usage();
    return;
  }

  if (options.refs.length !== 2) {
    usage();
    throw new Error("Expected exactly two refs.");
  }

  const [oldRef, newRef] = options.refs;
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "codex-id-diff."));
  const oldRoot = path.join(tempRoot, "old");
  const newRoot = path.join(tempRoot, "new");
  const oldOriginalRoot = path.join(tempRoot, "old-original");
  const newOriginalRoot = path.join(tempRoot, "new-original");

  await fs.mkdir(oldRoot, { recursive: true });
  await fs.mkdir(newRoot, { recursive: true });
  await fs.mkdir(oldOriginalRoot, { recursive: true });
  await fs.mkdir(newOriginalRoot, { recursive: true });

  try {
    const oldFiles = await listFiles(oldRef, options);
    const newFiles = await listFiles(newRef, options);

    await buildNormalizedTree(oldRef, oldFiles, oldRoot, oldOriginalRoot, options);
    await buildNormalizedTree(newRef, newFiles, newRoot, newOriginalRoot, options);

    const diff = await run("git", [
      "-c",
      "diff.renameLimit=10000",
      "diff",
      "--no-index",
      "--find-renames",
      "--find-copies",
      "--",
      "old",
      "new",
    ], { cwd: tempRoot, allowedExitCodes: [0, 1] });
    const rawPatch = options.excludeAddedDeletedFiles
      ? filterAddedDeletedFileSections(
        diff.stdout.toString("utf8"),
        new Set(oldFiles),
        new Set(newFiles),
      )
      : diff.stdout.toString("utf8");
    const renderedPatch = options.normalizedOutput
      ? rawPatch
      : await renderOriginalHunkLines(rawPatch, oldOriginalRoot, newOriginalRoot);
    const output = cleanPatchPaths(renderedPatch);

    if (options.output) {
      await fs.writeFile(options.output, output, "utf8");
    } else {
      process.stdout.write(output);
    }

    if (options.keepTemp) {
      console.error(`Kept normalized trees at ${tempRoot}`);
      return;
    }
  } finally {
    if (!options.keepTemp) {
      await fs.rm(tempRoot, { recursive: true, force: true });
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
