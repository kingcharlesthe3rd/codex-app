#!/usr/bin/env node
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const defaultDmgUrl = "https://persistent.oaistatic.com/codex-app-prod/Codex.dmg";
const dmgUrl = process.env.DMG_URL || defaultDmgUrl;
const defaultBranch = process.env.DEFAULT_BRANCH || "main";
const latestBranch = process.env.LATEST_BRANCH || "latest";

function log(message) {
  console.log(message);
}

function formatCommand(command, args) {
  return [command, ...args].join(" ");
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env || process.env,
      stdio: options.stdio || "inherit",
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${formatCommand(command, args)} exited with status ${code}`));
    });
  });
}

function capture(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env || process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve(options.trim === false ? stdout : stdout.trim());
        return;
      }

      if (options.allowFailure) {
        resolve("");
        return;
      }

      reject(
        new Error(
          `${formatCommand(command, args)} exited with status ${code}\n${stderr}`,
        ),
      );
    });
  });
}

async function commandSucceeds(command, args) {
  try {
    await run(command, args, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

async function setOutput(name, value) {
  if (!process.env.GITHUB_OUTPUT) return;

  await fs.appendFile(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
}

async function hashFile(filePath) {
  const hash = createHash("sha256");

  for await (const chunk of createReadStream(filePath)) {
    hash.update(chunk);
  }

  return hash.digest("hex");
}

function sanitizeBranchVersion(version) {
  const clean = version
    .replace(/^v/, "")
    .replace(/[^0-9A-Za-z._+-]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .replace(/^\.+/, "")
    .replace(/\.+$/, "");

  if (!clean) {
    throw new Error("Could not derive a branch-safe version from the app metadata.");
  }

  return `v${clean}`;
}

function parseVersionBranch(branch) {
  const match = branch.match(/^v(\d+)\.(\d+)\.(\d+)(?:-(\d+))?$/);

  if (!match) return null;

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    suffix: match[4] === undefined ? 0 : Number(match[4]),
  };
}

function compareVersionBranches(leftBranch, rightBranch) {
  const left = parseVersionBranch(leftBranch);
  const right = parseVersionBranch(rightBranch);

  if (!left || !right) return null;

  for (const key of ["major", "minor", "patch", "suffix"]) {
    if (left[key] > right[key]) return 1;
    if (left[key] < right[key]) return -1;
  }

  return 0;
}

async function remoteBranchExists(branch) {
  return commandSucceeds("git", [
    "show-ref",
    "--verify",
    "--quiet",
    `refs/remotes/origin/${branch}`,
  ]);
}

async function nextVersionBranch(baseBranch) {
  if (!await remoteBranchExists(baseBranch)) {
    return baseBranch;
  }

  let suffix = 1;

  while (await remoteBranchExists(`${baseBranch}-${suffix}`)) {
    suffix += 1;
  }

  return `${baseBranch}-${suffix}`;
}

async function readBranchMetadata(ref) {
  const metadataText = await capture("git", [
    "show",
    `${ref}:.codex-app-version.json`,
  ], { allowFailure: true, trim: false });

  if (!metadataText.trim()) {
    return null;
  }

  try {
    return JSON.parse(metadataText);
  } catch {
    return null;
  }
}

async function findBranchForHash(dmgSha256) {
  const refs = (await capture("git", [
    "for-each-ref",
    "--format=%(refname:short)",
    "refs/remotes/origin",
  ])).split(/\r?\n/).filter(Boolean);
  const skippedBranches = new Set(["HEAD", defaultBranch, latestBranch]);

  for (const ref of refs) {
    const branch = ref.replace(/^origin\//, "");

    if (skippedBranches.has(branch)) {
      continue;
    }

    const metadata = await readBranchMetadata(ref);

    if (metadata?.source?.sha256 === dmgSha256) {
      return branch;
    }
  }

  return "";
}

function branchNameFromMetadata(metadata) {
  if (metadata?.app?.branch) {
    return metadata.app.branch;
  }

  if (metadata?.app?.version) {
    return sanitizeBranchVersion(metadata.app.version);
  }

  return "";
}

async function pushLatestToRef(sourceRef) {
  await run("git", [
    "push",
    "--force-with-lease",
    "origin",
    `${sourceRef}:refs/heads/${latestBranch}`,
  ]);
}

async function updateLatestIfNewer(candidateBranch, sourceRef) {
  if (!await remoteBranchExists(latestBranch)) {
    log(`${latestBranch} does not exist yet; updating it to ${candidateBranch}.`);
    await pushLatestToRef(sourceRef);
    return;
  }

  const latestMetadata = await readBranchMetadata(`origin/${latestBranch}`);
  const latestVersionBranch = branchNameFromMetadata(latestMetadata);

  if (!latestVersionBranch) {
    log(`${latestBranch} has no comparable metadata; updating it to ${candidateBranch}.`);
    await pushLatestToRef(sourceRef);
    return;
  }

  const comparison = compareVersionBranches(candidateBranch, latestVersionBranch);

  if (comparison === null) {
    throw new Error(
      `Cannot compare candidate branch '${candidateBranch}' with latest branch metadata '${latestVersionBranch}'.`,
    );
  }

  if (comparison > 0) {
    log(`${candidateBranch} is newer than ${latestVersionBranch}; updating ${latestBranch}.`);
    await pushLatestToRef(sourceRef);
  } else {
    log(`${candidateBranch} is not newer than ${latestVersionBranch}; leaving ${latestBranch} unchanged.`);
  }
}

async function runOxfmt(root) {
  log("Formatting supported assets with oxfmt.");
  await run("npm", [
    "exec",
    "--yes",
    "--package=oxfmt",
    "--",
    "oxfmt",
    "--write",
    "--no-error-on-unmatched-pattern",
    "**/*.js",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.json",
    "**/*.css",
    "**/*.svg",
  ], { cwd: root });
}

async function plistValue(plistPath, key) {
  return capture("/usr/bin/plutil", [
    "-extract",
    key,
    "raw",
    "-o",
    "-",
    plistPath,
  ], { allowFailure: true });
}

async function findAppBundle(directory, maxDepth = 3, depth = 0) {
  if (depth > maxDepth) return [];

  let entries = [];

  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }

  const found = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const entryPath = path.join(directory, entry.name);

    if (entry.name.endsWith(".app")) {
      found.push(entryPath);
      continue;
    }

    if (depth < maxDepth) {
      found.push(...await findAppBundle(entryPath, maxDepth, depth + 1));
    }
  }

  return found;
}

async function readPackageJson(extractDir) {
  try {
    const packageJsonPath = path.join(extractDir, "package.json");
    return JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
  } catch {
    return {};
  }
}

async function detachMount(mountDir, attached) {
  if (!attached.value) return;

  try {
    await run("hdiutil", ["detach", mountDir, "-quiet"], { stdio: "ignore" });
  } catch {
    try {
      await run("hdiutil", ["detach", mountDir, "-force", "-quiet"], {
        stdio: "ignore",
      });
    } catch {
      // Nothing more to do during cleanup.
    }
  }
}

async function determineBaseCommit(baseRef) {
  const roots = (await capture("git", [
    "rev-list",
    "--max-parents=0",
    baseRef,
  ])).split(/\r?\n/).filter(Boolean);

  return roots.at(-1) || "";
}

async function main() {
  if (os.platform() !== "darwin") {
    throw new Error("This importer must run on macOS because it uses hdiutil to mount DMGs.");
  }

  const repoRoot = await capture("git", ["rev-parse", "--show-toplevel"]);
  const scriptPath = fileURLToPath(import.meta.url);
  const scriptDir = path.dirname(scriptPath);
  const tempRoot = process.env.RUNNER_TEMP || os.tmpdir();
  const workDir = await fs.mkdtemp(path.join(tempRoot, "codex-app-import."));
  const scriptWorkDir = path.join(workDir, "scripts");
  const mountDir = path.join(workDir, "mount");
  const dmgPath = path.join(workDir, "codex.dmg");
  const extractDir = path.join(workDir, "extracted");
  const attached = { value: false };

  await fs.mkdir(scriptWorkDir, { recursive: true });
  await fs.mkdir(mountDir, { recursive: true });
  await fs.mkdir(extractDir, { recursive: true });

  const postprocessScript = path.join(scriptWorkDir, "postprocess-normalize-assets.mjs");
  await fs.copyFile(
    path.join(scriptDir, "postprocess-normalize-assets.mjs"),
    postprocessScript,
  );

  try {
    process.chdir(repoRoot);

    log("Fetching branch refs from origin.");
    await run("git", [
      "fetch",
      "--prune",
      "origin",
      "+refs/heads/*:refs/remotes/origin/*",
    ]);

    log(`Downloading ${dmgUrl}`);
    await run("curl", [
      "--fail",
      "--location",
      "--retry",
      "5",
      "--retry-delay",
      "10",
      "--output",
      dmgPath,
      dmgUrl,
    ]);

    const dmgSha256 = await hashFile(dmgPath);
    log(`Downloaded DMG sha256: ${dmgSha256}`);

    const existingBranch = await findBranchForHash(dmgSha256);

    if (existingBranch) {
      log(`DMG hash already exists on ${existingBranch}; no import needed.`);
      const existingSha = await capture("git", ["rev-parse", `origin/${existingBranch}`]);
      await updateLatestIfNewer(existingBranch, existingSha);
      await setOutput("changed", "false");
      await setOutput("branch", existingBranch);
      await setOutput("sha256", dmgSha256);
      return;
    }

    log("Mounting DMG.");
    await run("hdiutil", [
      "attach",
      dmgPath,
      "-mountpoint",
      mountDir,
      "-nobrowse",
      "-readonly",
      "-noverify",
    ]);
    attached.value = true;

    const appBundles = (await findAppBundle(mountDir)).sort((left, right) => (
      left.localeCompare(right)
    ));
    const appPath = appBundles[0];

    if (!appPath) {
      throw new Error("Could not find a .app bundle in the DMG.");
    }

    const infoPlistPath = path.join(appPath, "Contents", "Info.plist");
    const asarPath = path.join(appPath, "Contents", "Resources", "app.asar");
    const asarUnpackedPath = path.join(
      appPath,
      "Contents",
      "Resources",
      "app.asar.unpacked",
    );

    if (!await commandSucceeds("test", ["-f", asarPath])) {
      throw new Error(`Could not find app.asar at ${asarPath}.`);
    }

    let appName = await plistValue(infoPlistPath, "CFBundleName");
    let appVersion = await plistValue(infoPlistPath, "CFBundleShortVersionString");
    const appBundleVersion = await plistValue(infoPlistPath, "CFBundleVersion");

    log("Extracting app.asar.");
    await run("npm", [
      "exec",
      "--yes",
      "--package=@electron/asar",
      "--",
      "asar",
      "extract",
      asarPath,
      extractDir,
    ]);

    if (await commandSucceeds("test", ["-d", asarUnpackedPath])) {
      log("Merging app.asar.unpacked into extracted root.");
      await run("ditto", [asarUnpackedPath, extractDir]);
    } else {
      log("No app.asar.unpacked directory found in the app bundle.");
    }

    const packageJson = await readPackageJson(extractDir);
    appVersion ||= packageJson.version || "";
    appName ||= packageJson.productName || packageJson.name || "";

    if (!appVersion) {
      throw new Error("Could not determine the app version from Info.plist or package.json.");
    }

    const baseBranch = sanitizeBranchVersion(appVersion);
    const branchName = await nextVersionBranch(baseBranch);

    if (!await commandSucceeds("git", ["check-ref-format", "--branch", branchName])) {
      throw new Error(`Derived branch name '${branchName}' is not a valid git branch.`);
    }

    let baseRef = `origin/${defaultBranch}`;

    if (!await commandSucceeds("git", ["rev-parse", "--verify", baseRef])) {
      baseRef = defaultBranch;
    }

    const baseCommit = await determineBaseCommit(baseRef);

    if (!baseCommit) {
      throw new Error(`Could not determine the initial README commit from ${baseRef}.`);
    }

    log(`Creating ${branchName} from root commit ${baseCommit}.`);
    await run("git", ["switch", "-C", branchName, baseCommit]);
    await run("git", ["rm", "-r", "--ignore-unmatch", "."], { stdio: "ignore" });
    await run("ditto", [extractDir, repoRoot]);

    const downloadedAt = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
    const metadata = {
      app: {
        name: appName || null,
        version: appVersion,
        bundleVersion: appBundleVersion || null,
        branch: branchName,
      },
      source: {
        url: dmgUrl,
        sha256: dmgSha256,
        downloadedAt,
      },
      import: {
        layout: "app.asar contents and app.asar.unpacked contents merged at repository root",
      },
    };

    await fs.writeFile(
      path.join(repoRoot, ".codex-app-version.json"),
      `${JSON.stringify(metadata, null, 2)}\n`,
    );

    await run("git", ["add", "-A"]);
    await run("git", [
      "commit",
      "-m",
      `Import Codex ${appVersion} (${dmgSha256.slice(0, 12)})`,
    ]);

    log("Running post-processors.");
    await run("node", [postprocessScript, repoRoot]);
    await runOxfmt(repoRoot);

    const status = await capture("git", ["status", "--porcelain"]);

    if (status) {
      await run("git", ["add", "-A"]);
      await run("git", ["commit", "-m", `Post-process Codex ${appVersion}`]);
    } else {
      log("Post-processing made no changes.");
    }

    log(`Pushing ${branchName}.`);
    await run("git", ["push", "origin", `HEAD:refs/heads/${branchName}`]);
    await updateLatestIfNewer(branchName, "HEAD");

    await setOutput("changed", "true");
    await setOutput("branch", branchName);
    await setOutput("sha256", dmgSha256);
  } finally {
    await detachMount(mountDir, attached);
    await fs.rm(workDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
