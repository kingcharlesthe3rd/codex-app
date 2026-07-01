#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const defaultExtensions = new Set([".cjs", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const keywords = new Set([
  "as",
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "from",
  "function",
  "get",
  "if",
  "import",
  "in",
  "instanceof",
  "let",
  "new",
  "null",
  "of",
  "return",
  "set",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "undefined",
  "var",
  "void",
  "while",
  "with",
  "yield",
]);

function usage() {
  console.log(`Usage:
  node scripts/diff-ignore-identifiers.mjs [options] <old-ref> <new-ref> [-- <pathspec>...]

Options:
  --output=FILE                  Write the identifier-insensitive diff to FILE.
  --mode=line                    Rename identifiers to ID0, ID1, ... per line. Default.
  --mode=ordered                 Rename identifiers to ID0, ID1, ... by first use per file.
  --mode=all                     Rename every identifier to ID.
  --extensions=.js,.mjs          Comma-separated extensions to normalize.
  --exclude-postprocess-json     Exclude .codex-app-postprocess.json.
  --js-only                      Omit non-JS-like files from the normalized trees.
  --normalized-output            Show normalized placeholders in hunk lines.
  --keep-temp                    Keep temporary normalized trees for inspection.
  -h, --help                     Show this help.

The output is a diff of normalized temporary trees. JavaScript-family files keep
keywords, literals, punctuation, and line structure, but identifier names are
replaced before diffing. The default line mode resets placeholders at each line
so early minifier-name drift does not renumber the rest of the file. Hunk lines
are rendered from the original files unless --normalized-output is set. Non-JS
files are included as raw content unless --js-only is set.`);
}

function parseArgs(argv) {
  const options = {
    excludePostprocessJson: false,
    excludePathspecs: [],
    extensions: new Set(defaultExtensions),
    includePathspecs: [],
    jsOnly: false,
    keepTemp: false,
    mode: "line",
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

  if (!["all", "line", "ordered"].includes(options.mode)) {
    throw new Error("--mode must be all, line, or ordered.");
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

function isIdentifierStart(character) {
  return character === "$" ||
    character === "_" ||
    /[A-Za-z]/.test(character) ||
    character.codePointAt(0) > 0x7f;
}

function isIdentifierPart(character) {
  return isIdentifierStart(character) || /[0-9]/.test(character);
}

function isWordToken(token) {
  return /^[A-Za-z_$#]/.test(token);
}

function readQuoted(source, start) {
  const quote = source[start];
  let index = start + 1;

  while (index < source.length) {
    const character = source[index];

    if (character === "\\") {
      index += 2;
      continue;
    }

    index += 1;

    if (character === quote) {
      break;
    }
  }

  return { token: source.slice(start, index), next: index };
}

function skipTemplateLiteral(source, start) {
  let index = start + 1;

  while (index < source.length) {
    const character = source[index];

    if (character === "\\") {
      index += 2;
      continue;
    }

    if (character === "`") {
      return index + 1;
    }

    if (character === "$" && source[index + 1] === "{") {
      index = findBalancedBraceEnd(source, index + 2);
      continue;
    }

    index += 1;
  }

  return index;
}

function findBalancedBraceEnd(source, start) {
  let index = start;
  let depth = 1;

  while (index < source.length) {
    const character = source[index];

    if (character === "'" || character === "\"") {
      index = readQuoted(source, index).next;
      continue;
    }

    if (character === "`") {
      index = skipTemplateLiteral(source, index);
      continue;
    }

    if (character === "/" && source[index + 1] === "/") {
      index += 2;
      while (index < source.length && source[index] !== "\n") {
        index += 1;
      }
      continue;
    }

    if (character === "/" && source[index + 1] === "*") {
      index += 2;
      while (index < source.length && !(source[index] === "*" && source[index + 1] === "/")) {
        index += 1;
      }
      index = Math.min(source.length, index + 2);
      continue;
    }

    if (character === "{") {
      depth += 1;
    } else if (character === "}") {
      depth -= 1;

      if (depth === 0) {
        return index + 1;
      }
    }

    index += 1;
  }

  return index;
}

function stripFinalNewline(text) {
  return text.endsWith("\n") ? text.slice(0, -1) : text;
}

function readTemplateLiteral(source, start, options) {
  const output = ["`"];
  let index = start + 1;

  while (index < source.length) {
    const character = source[index];

    if (character === "\\") {
      output.push(source.slice(index, Math.min(source.length, index + 2)));
      index += 2;
      continue;
    }

    if (character === "`") {
      output.push("`");
      index += 1;
      break;
    }

    if (character === "$" && source[index + 1] === "{") {
      const expressionStart = index + 2;
      const expressionEnd = findBalancedBraceEnd(source, expressionStart);
      const expression = source.slice(expressionStart, Math.max(expressionStart, expressionEnd - 1));

      output.push("${", stripFinalNewline(normalizeJavaScript(expression, options)), "}");
      index = expressionEnd;
      continue;
    }

    output.push(character);
    index += 1;
  }

  return { token: output.join(""), next: index };
}

function readNumber(source, start) {
  const match = source.slice(start).match(
    /^(?:0[xX][0-9A-Fa-f_]+n?|0[bB][01_]+n?|0[oO][0-7_]+n?|\d[\d_]*(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?n?)/,
  );
  const index = match ? start + match[0].length : start + 1;

  return { token: source.slice(start, index), next: index };
}

function readIdentifier(source, start) {
  let index = start + 1;

  while (index < source.length && isIdentifierPart(source[index])) {
    index += 1;
  }

  return { token: source.slice(start, index), next: index };
}

function normalizeJavaScript(source, options) {
  let identifiers = new Map();
  const output = [];
  let lastWord = false;
  let index = 0;

  function endsWith(value) {
    return output.length > 0 && output.at(-1).endsWith(value);
  }

  function append(value) {
    if (value) output.push(value);
  }

  function removeTrailingSpace() {
    if (!endsWith(" ")) return;

    const last = output.at(-1);
    const trimmed = last.slice(0, -1);

    if (trimmed) {
      output[output.length - 1] = trimmed;
    } else {
      output.pop();
    }
  }

  function rename(identifier) {
    if (keywords.has(identifier)) return identifier;
    if (options.mode === "all") return "ID";
    if (!identifiers.has(identifier)) {
      identifiers.set(identifier, `ID${identifiers.size}`);
    }

    return identifiers.get(identifier);
  }

  function resetLocalIdentifiers() {
    if (options.mode === "line") {
      identifiers = new Map();
    }
  }

  function emit(token) {
    const word = isWordToken(token);

    if (lastWord && word && output.length > 0 && !endsWith("\n") && !endsWith(" ")) {
      append(" ");
    }

    append(token);
    lastWord = word;
  }

  function emitNewlines(count) {
    if (count === 0) return;

    removeTrailingSpace();

    if (!endsWith("\n")) {
      append("\n");
    }

    append("\n".repeat(Math.max(0, count - 1)));
    resetLocalIdentifiers();
    lastWord = false;
  }

  while (index < source.length) {
    const character = source[index];

    if (/\s/.test(character)) {
      const start = index;

      while (index < source.length && /\s/.test(source[index])) {
        index += 1;
      }

      const newlines = source.slice(start, index).match(/\n/g)?.length || 0;

      if (newlines > 0) {
        emitNewlines(newlines);
      } else if (output.length > 0 && !endsWith("\n") && !endsWith(" ")) {
        append(" ");
      }

      continue;
    }

    if (character === "/" && source[index + 1] === "/") {
      index += 2;
      while (index < source.length && source[index] !== "\n") {
        index += 1;
      }
      continue;
    }

    if (character === "/" && source[index + 1] === "*") {
      const start = index;

      index += 2;
      while (index < source.length && !(source[index] === "*" && source[index + 1] === "/")) {
        index += 1;
      }

      if (index < source.length) index += 2;

      emitNewlines(source.slice(start, index).match(/\n/g)?.length || 0);
      continue;
    }

    if (character === "`") {
      const { token, next } = readTemplateLiteral(source, index, options);

      emit(token);
      index = next;
      continue;
    }

    if (character === "'" || character === "\"") {
      const { token, next } = readQuoted(source, index);

      emit(token);
      index = next;
      continue;
    }

    if (/[0-9]/.test(character)) {
      const { token, next } = readNumber(source, index);

      emit(token);
      index = next;
      continue;
    }

    if (character === "#" && isIdentifierStart(source[index + 1] || "")) {
      const { token, next } = readIdentifier(source, index + 1);

      emit(`#${rename(token)}`);
      index = next;
      continue;
    }

    if (isIdentifierStart(character)) {
      const { token, next } = readIdentifier(source, index);

      emit(rename(token));
      index = next;
      continue;
    }

    emit(character);
    index += 1;
  }

  if (!endsWith("\n")) {
    append("\n");
  }

  return output.join("");
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
      normalizeJavaScript(buffer.toString("utf8"), options),
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
    const rawPatch = diff.stdout.toString("utf8");
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
