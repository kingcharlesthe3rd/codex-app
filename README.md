# Codex App Versions

This repository tracks unpacked releases of the Codex macOS desktop app.

The `main` branch contains the polling workflow and helper scripts. Version
branches start from this initial README commit, then add the unpacked Electron
application contents for a specific downloaded DMG.

The `latest` branch points to the highest imported version branch.

## Branch Layout

- `main` contains only repository automation.
- `latest` points at the highest imported version branch. Versions are compared
  by major, minor, patch, then duplicate suffix.
- `vX.Y.Z` contains the imported contents for version `X.Y.Z`.
- `vX.Y.Z-1`, `vX.Y.Z-2`, and so on are used when a different DMG hash is
  published for an already-seen friendly version.

Each version branch has two import phases:

1. A raw import commit that deletes this README, extracts `app.asar` into the
   repository root, merges `app.asar.unpacked` into that same root when present,
   and writes
   `.codex-app-version.json`.
2. A post-process commit when normalizers make additional changes, such as
   renaming bundle-hashed assets like `filepicker-c342jd.js` to
   `filepicker.js`. If multiple files would collide, numbered names such as
   `filepicker-1.js` and `filepicker-2.js` are used instead. The post-process
   phase also runs `oxfmt` over supported JavaScript, JSON, CSS, and SVG assets.

## Polling

The workflow runs every six hours on macOS and can also be started manually from
GitHub Actions. By default it imports the Apple Silicon DMG:

```text
https://persistent.oaistatic.com/codex-app-prod/Codex.dmg
```

Manual runs can override the DMG URL, for example to import the Intel build:

```text
https://persistent.oaistatic.com/codex-app-prod/Codex-latest-x64.dmg
```
