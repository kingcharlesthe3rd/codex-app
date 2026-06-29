import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { i as r, o as i, s as a, t as o, u as s, z as c } from "./app-scope.js";
import {
  Hr as l,
  Vr as u,
  uo as d,
  us as f,
  xr as p,
  yr as m,
  zs as h,
} from "./app-server-manager-signals.js";
import { A as g, h as _ } from "./vscode-api.js";
import { l as v, s as y } from "./lib.js";
import { t as b } from "./persisted-signal.js";
import { t as x } from "./clsx-Cir5-jBH.js";
import { t as ee } from "./proxy.js";
import { t as te } from "./AnimatePresence.js";
import { t as ne } from "./button.js";
import { t as S } from "./chevron-right.js";
import { t as C } from "./use-stable-callback.js";
import { t as re } from "./tooltip.js";
import { F as w, M as ie, S as ae, k as oe, x as se } from "./rpc-Hf-fxjh7.js";
import { t as ce } from "./undo.js";
import { t as le } from "./plus.js";
import { t as ue } from "./use-platform.js";
import { t as de } from "./link-external.js";
import { c as fe, n as pe } from "./shiki-highlight-provider-gate.js";
import { s as me } from "./diff-view-mode.js";
import { t as T } from "./iconResolver.js";
import { n as E, r as he } from "./parse-diff.js";
import { t as D } from "./file-diff.js";
import { t as ge } from "./hash-code.js";
import { t as _e } from "./error-boundary.js";
import { t as O } from "./copy-to-clipboard.js";
import { t as ve } from "./minus.js";
import {
  a as k,
  c as ye,
  d as A,
  f as be,
  i as xe,
  l as Se,
  n as Ce,
  o as we,
  r as Te,
  s as Ee,
  t as De,
  u as j,
} from "./use-diff-annotations.js";
import { r as Oe } from "./diff-stats.js";
var M = { loadingResultsShimmer: `_loadingResultsShimmer_1cbkl_1` },
  N = c(),
  P = n(),
  ke = { sm: `h-3`, md: `h-3.5`, lg: `h-4` },
  Ae = 120,
  F = 2147483647;
function I(e) {
  let t = (0, N.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, "aria-hidden": i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i === void 0 ? !0 : i,
    o;
  t[4] === n
    ? (o = t[5])
    : ((o = x(M.loadingResultsShimmer, `rounded-md`, n)), (t[4] = n), (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== r || t[8] !== o
      ? ((s = (0, P.jsx)(`div`, { ...r, "aria-hidden": a, className: o })),
        (t[6] = a),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function L(e) {
  let t = (0, N.c)(17),
    { className: n, lineClassName: r, lines: i, maxWidth: a, minWidth: o, seed: s, size: c } = e,
    l = i === void 0 ? 3 : i,
    u = a === void 0 ? 100 : a,
    d = o === void 0 ? 55 : o,
    f = s === void 0 ? `shimmer-lines` : s,
    p = c === void 0 ? `md` : c,
    m;
  t[0] !== l || t[1] !== u || t[2] !== d || t[3] !== f
    ? ((m = R({ count: l, maxWidth: u, minWidth: d, seed: f })),
      (t[0] = l),
      (t[1] = u),
      (t[2] = d),
      (t[3] = f),
      (t[4] = m))
    : (m = t[4]);
  let h = m,
    g;
  t[5] === n
    ? (g = t[6])
    : ((g = x(`flex w-full flex-col items-start gap-2`, n)), (t[5] = n), (t[6] = g));
  let _;
  if (t[7] !== r || t[8] !== h || t[9] !== p) {
    let e;
    (t[11] !== r || t[12] !== p
      ? ((e = (e, t) =>
          (0, P.jsx)(
            I,
            {
              className: x(ke[p], r),
              style: { width: `${z(e)}%`, "--loading-results-shimmer-delay": `${-t * Ae}ms` },
            },
            t,
          )),
        (t[11] = r),
        (t[12] = p),
        (t[13] = e))
      : (e = t[13]),
      (_ = h.map(e)),
      (t[7] = r),
      (t[8] = h),
      (t[9] = p),
      (t[10] = _));
  } else _ = t[10];
  let v;
  return (
    t[14] !== g || t[15] !== _
      ? ((v = (0, P.jsx)(`div`, { className: g, children: _ })),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
function R({ count: e, maxWidth: t, minWidth: n, seed: r }) {
  let i = z(Math.min(n, t)),
    a = z(Math.max(n, t)),
    o = a - i,
    s = B(`${r}:${e}:${i}:${a}`);
  return Array.from({ length: Math.max(0, e) }, () => ((s = V(s)), i + (s / F) * o));
}
function z(e) {
  return Math.max(1, Math.min(100, e));
}
function B(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1) t = (t * 31 + e.charCodeAt(n)) % F;
  return t === 0 ? 1 : t;
}
function V(e) {
  return (e * 48271) % F;
}
function je(e) {
  let t = (0, N.c)(22),
    {
      diffViewProps: n,
      filePath: r,
      previewPath: i,
      imagePreview: a,
      hasNoChanges: o,
      isBinary: s,
      isDeletion: c,
      isRenameWithoutChanges: d,
      richPreviewEnabled: f,
    } = e,
    p;
  t[0] === n ? (p = t[1]) : ((p = (0, P.jsx)(Me, { ...n })), (t[0] = n), (t[1] = p));
  let m = p,
    h = s ? `binary` : d ? `rename-without-changes` : `empty`,
    g;
  t[2] === h ? (g = t[3]) : ((g = (0, P.jsx)(Pe, { kind: h })), (t[2] = h), (t[3] = g));
  let _ = g,
    v,
    y;
  t[4] !== r || t[5] !== c || t[6] !== f
    ? ((v = l(r)),
      (y = u({ filePath: r, imagePreviewMode: v, isDeletion: c, richPreviewEnabled: f })),
      (t[4] = r),
      (t[5] = c),
      (t[6] = f),
      (t[7] = v),
      (t[8] = y))
    : ((v = t[7]), (y = t[8]));
  let b = y;
  if (b === `markdown`) {
    let e;
    return (
      t[9] !== m || t[10] !== n.diffViewClassName || t[11] !== i
        ? ((e = (0, P.jsx)(A, { className: n.diffViewClassName, path: i, fallback: m })),
          (t[9] = m),
          (t[10] = n.diffViewClassName),
          (t[11] = i),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (b === `image`) {
    let e = v === `always` ? _ : m,
      r = v === `always`,
      i;
    return (
      t[13] !== n.diffViewClassName || t[14] !== a || t[15] !== e || t[16] !== r
        ? ((i = (0, P.jsx)(be, {
            className: n.diffViewClassName,
            imagePreview: a,
            fallback: e,
            showMissingPreview: r,
          })),
          (t[13] = n.diffViewClassName),
          (t[14] = a),
          (t[15] = e),
          (t[16] = r),
          (t[17] = i))
        : (i = t[17]),
      i
    );
  }
  if (b === `pdf`) {
    let e;
    return (
      t[18] !== n.diffViewClassName || t[19] !== _ || t[20] !== a
        ? ((e = (0, P.jsx)(j, {
            className: n.diffViewClassName,
            imagePreview: a,
            fallback: _,
            showMissingPreview: !0,
          })),
          (t[18] = n.diffViewClassName),
          (t[19] = _),
          (t[20] = a),
          (t[21] = e))
        : (e = t[21]),
      e
    );
  }
  return o || s ? _ : m;
}
function Me(e) {
  let t = (0, N.c)(25),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]))
    : (({
        disableScrollAnchor: r,
        diffViewClassName: n,
        viewType: s,
        wrapLines: c,
        hunkSeparators: i,
        ...a
      } = e),
      (o = Fe(a.fileDiff, a.metrics)),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l = o,
    u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, P.jsx)(Ne, {})), (t[8] = u))
    : (u = t[8]);
  let d = r && `[overflow-anchor:none]`,
    f;
  t[9] !== n || t[10] !== d
    ? ((f = x(`relative overflow-clip [contain:content]`, d, n)),
      (t[9] = n),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p = s === `split` ? `split` : `unified`,
    m = c ? `wrap` : `scroll`,
    h = i ?? `simple`,
    g;
  t[12] !== l || t[13] !== a.fileDiff
    ? ((g = { ...a.fileDiff, cacheKey: l }), (t[12] = l), (t[13] = a.fileDiff), (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== a || t[16] !== f || t[17] !== p || t[18] !== m || t[19] !== h || t[20] !== g
    ? ((_ = (0, P.jsx)(D, {
        className: f,
        diffStyle: p,
        overflow: m,
        hunkSeparators: h,
        ...a,
        fileDiff: g,
      })),
      (t[15] = a),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m),
      (t[19] = h),
      (t[20] = g),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  return (
    t[22] !== l || t[23] !== _
      ? ((v = (0, P.jsx)(_e, { name: `FileDiff`, fallback: u, children: _ }, l)),
        (t[22] = l),
        (t[23] = _),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
function Ne() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, P.jsx)(`div`, {
          className: `flex items-center bg-token-main-surface-primary px-3 py-4 text-sm text-token-text-secondary`,
          children: (0, P.jsx)(y, {
            id: `codex.diff.renderFailed`,
            defaultMessage: `Diff failed to render`,
            description: `Placeholder text shown when a file diff renderer crashes`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe(e) {
  let t = (0, N.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, P.jsx)(`div`, {
          className: `flex h-full justify-center bg-token-editor-background py-4 text-sm text-token-text-secondary empty:hidden`,
          children:
            n === `binary`
              ? (0, P.jsx)(y, {
                  id: `wham.diff.binaryFile`,
                  defaultMessage: `Binary file not shown`,
                  description: `Text shown when a binary file is not shown.`,
                })
              : n === `rename-without-changes`
                ? (0, P.jsx)(y, {
                    id: `codex.diff.fileRenamedWithoutChanges`,
                    defaultMessage: `File renamed without changes`,
                    description: `Text shown when a file was renamed without content changes.`,
                  })
                : (0, P.jsx)(y, {
                    id: `wham.diff.noContent`,
                    defaultMessage: `No content`,
                    description: `Text shown when a file is empty.`,
                  }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Fe(e, t) {
  return [
    e.cacheKey,
    t?.hunkLineCount,
    t?.lineHeight,
    t?.diffHeaderHeight,
    t?.hunkSeparatorHeight,
    t?.fileGap,
    e.name,
    e.isPartial ? `partial` : `full`,
    e.additionLines.length,
    e.deletionLines.length,
    e.hunks.length,
    ...e.hunks.map(
      (e) =>
        `${e.additionStart}:${e.additionCount}:${e.additionLines}:${e.deletionStart}:${e.deletionCount}:${e.deletionLines}`,
    ),
    ge(
      [...e.additionLines, ...e.deletionLines].join(`
`),
    ),
  ].join(`:`);
}
var Ie = b(`load-full-files`, !0),
  Le = b(`skip-revert-confirmation`, !1),
  H = 250;
function Re(e) {
  let t = e.closest(ae.timelineScroll);
  if (t == null) return;
  let n = e.getBoundingClientRect().top,
    r = null,
    i = () => {
      e.isConnected && (t.scrollTop += e.getBoundingClientRect().top - n);
    },
    a = () => {
      r ??= window.requestAnimationFrame(() => {
        ((r = null), i());
      });
    },
    o = () => {
      (r != null && (window.cancelAnimationFrame(r), (r = null)), i());
    },
    s = e.closest(`[data-turn-key]`),
    c = null;
  (s != null && typeof ResizeObserver < `u` && ((c = new ResizeObserver(o)), c.observe(s)),
    a(),
    window.setTimeout(() => {
      (r != null && window.cancelAnimationFrame(r), c?.disconnect());
    }, H));
}
function U(e) {
  let t = (0, N.c)(32),
    { action: n, className: r, color: i, disabled: a, size: o, scope: s, onClick: c } = e,
    l = i === void 0 ? `ghost` : i,
    u = a === void 0 ? !1 : a,
    d = o === void 0 ? `composerSm` : o,
    f = v(),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, P.jsx)(ce, { className: `icon-2xs` })), (t[0] = p))
    : (p = t[0]);
  let m = p;
  if (n === `stage`) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(le, { className: `icon-2xs` })), (t[1] = e))
      : (e = t[1]),
      (m = e));
  } else if (n === `unstage`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(ve, { className: `icon-2xs` })), (t[2] = e))
      : (e = t[2]),
      (m = e));
  }
  let h;
  if (s === `file`)
    if (n === `stage`) {
      let e;
      (t[3] === f
        ? (e = t[4])
        : ((e = f.formatMessage({
            id: `diff.actionButton.stageFile`,
            defaultMessage: `Stage file`,
            description: `Tooltip to stage a file using a git action`,
          })),
          (t[3] = f),
          (t[4] = e)),
        (h = e));
    } else if (n === `unstage`) {
      let e;
      (t[5] === f
        ? (e = t[6])
        : ((e = f.formatMessage({
            id: `diff.actionButton.unstageFile`,
            defaultMessage: `Unstage file`,
            description: `Tooltip to unstage a file using a git action`,
          })),
          (t[5] = f),
          (t[6] = e)),
        (h = e));
    } else {
      let e;
      (t[7] === f
        ? (e = t[8])
        : ((e = f.formatMessage({
            id: `diff.actionButton.revertFile`,
            defaultMessage: `Revert file`,
            description: `Tooltip to revert a file using a git action`,
          })),
          (t[7] = f),
          (t[8] = e)),
        (h = e));
    }
  else if (s === `hunk`)
    if (n === `stage`) {
      let e;
      (t[9] === f
        ? (e = t[10])
        : ((e = f.formatMessage({
            id: `diff.actionButton.stageHunk`,
            defaultMessage: `Stage`,
            description: `Tooltip to stage a hunk using a git action`,
          })),
          (t[9] = f),
          (t[10] = e)),
        (h = e));
    } else if (n === `unstage`) {
      let e;
      (t[11] === f
        ? (e = t[12])
        : ((e = f.formatMessage({
            id: `diff.actionButton.unstageHunk`,
            defaultMessage: `Unstage`,
            description: `Tooltip to unstage a hunk using a git action`,
          })),
          (t[11] = f),
          (t[12] = e)),
        (h = e));
    } else {
      let e;
      (t[13] === f
        ? (e = t[14])
        : ((e = f.formatMessage({
            id: `diff.actionButton.revertHunk`,
            defaultMessage: `Revert`,
            description: `Tooltip to revert a hunk using a git action`,
          })),
          (t[13] = f),
          (t[14] = e)),
        (h = e));
    }
  else if (s === `section`)
    if (n === `stage`) {
      let e;
      (t[15] === f
        ? (e = t[16])
        : ((e = f.formatMessage({
            id: `diff.actionButton.stageSection`,
            defaultMessage: `Stage all`,
            description: `Tooltip to stage a section using a git action`,
          })),
          (t[15] = f),
          (t[16] = e)),
        (h = e));
    } else if (n === `unstage`) {
      let e;
      (t[17] === f
        ? (e = t[18])
        : ((e = f.formatMessage({
            id: `diff.actionButton.unstageSection`,
            defaultMessage: `Unstage all`,
            description: `Tooltip to unstage a section using a git action`,
          })),
          (t[17] = f),
          (t[18] = e)),
        (h = e));
    } else {
      let e;
      (t[19] === f
        ? (e = t[20])
        : ((e = f.formatMessage({
            id: `diff.actionButton.revertSection`,
            defaultMessage: `Revert all`,
            description: `Tooltip to revert a section using a git action`,
          })),
          (t[19] = f),
          (t[20] = e)),
        (h = e));
    }
  let g;
  t[21] !== r ||
  t[22] !== l ||
  t[23] !== u ||
  t[24] !== m ||
  t[25] !== c ||
  t[26] !== d ||
  t[27] !== h
    ? ((g = (0, P.jsx)(ne, {
        className: r,
        color: l,
        disabled: u,
        size: d,
        uniform: !0,
        "aria-label": h,
        onClick: c,
        children: m,
      })),
      (t[21] = r),
      (t[22] = l),
      (t[23] = u),
      (t[24] = m),
      (t[25] = c),
      (t[26] = d),
      (t[27] = h),
      (t[28] = g))
    : (g = t[28]);
  let _;
  return (
    t[29] !== g || t[30] !== h
      ? ((_ = (0, P.jsx)(re, { tooltipContent: h, children: g })),
        (t[29] = g),
        (t[30] = h),
        (t[31] = _))
      : (_ = t[31]),
    _
  );
}
var ze = /[ \t\r\n\f\v]/g;
function Be() {
  return { type: `success`, lines: [] };
}
function Ve(e, t, n, { ignoreWhitespace: r = !1 } = {}) {
  let i = He(e, t, n, r);
  return i == null
    ? null
    : {
        ...e,
        ...i,
        isPartial: !1,
        deletionLines: t,
        additionLines: n,
        cacheKey: `${e.cacheKey ?? e.name}:full:${e.prevObjectId ?? `none`}:${e.newObjectId ?? `none`}`,
      };
}
function He(e, t, n, r) {
  let i = t.length,
    a = n.length,
    o = [],
    s = 0,
    c = 0,
    l = 0,
    u = 0;
  for (let d of e.hunks) {
    let f = Math.max(d.additionStart - 1, 0),
      p = Math.max(d.deletionStart - 1, 0),
      m = f - l,
      h = p - u;
    if (m < 0 || h < 0 || m !== h || f + d.additionCount > a || p + d.deletionCount > i)
      return null;
    if (!We(t, n, u, l, m, r)) return (Ue(e, `collapsed_context_mismatch`), null);
    let g = f,
      _ = p,
      v = [];
    for (let i of d.hunkContent) {
      let a = i.type === `context` ? i.lines : i.additions,
        o = i.type === `context` ? i.lines : i.deletions;
      if (
        !We(e.deletionLines, t, i.deletionLineIndex, _, o, r) ||
        !We(e.additionLines, n, i.additionLineIndex, g, a, r)
      )
        return null;
      (v.push({ ...i, additionLineIndex: g, deletionLineIndex: _ }), (g += a), (_ += o));
    }
    (o.push({
      ...d,
      collapsedBefore: m,
      additionLineIndex: f,
      deletionLineIndex: p,
      hunkContent: v,
      splitLineStart: s + m,
      unifiedLineStart: c + m,
    }),
      (s += m + d.splitLineCount),
      (c += m + d.unifiedLineCount),
      (l = f + d.additionCount),
      (u = p + d.deletionCount));
  }
  if (o.length > 0) {
    let o = a - l,
      d = i - u;
    if (o < 0 || d < 0) return (Ue(e, `negative_trailing_context`), null);
    if (o !== d) return (Ue(e, `trailing_context_line_count_mismatch`), null);
    if (!We(t, n, u, l, o, r)) return (Ue(e, `trailing_context_mismatch`), null);
    ((s += o), (c += o));
  }
  return { hunks: o, splitLineCount: s, unifiedLineCount: c };
}
function Ue(e, t) {
  _.warning(`code_diff_full_content_metadata_rejected`, {
    safe: { reason: t },
    sensitive: { fileName: e.name },
  });
}
function We(e, t, n, r, i, a) {
  for (let o = 0; o < i; o += 1) {
    let i = e[n + o],
      s = t[r + o];
    if (i == null || s == null || !Ge(i, s, a)) return !1;
  }
  return !0;
}
function Ge(e, t, n) {
  return n ? e.replace(ze, ``) === t.replace(ze, ``) : e === t;
}
var Ke = s(o, (e, { signal: t }) => ({
  fullDiffMetadata$: t(null),
  fullContentLoadFailed$: t(!1),
  fullContentUnavailable$: t(!1),
  isLoadingFullContent$: t(!1),
  key: e,
}));
async function qe(e, t) {
  let n = e.get(Ke, t.key);
  if (
    !(
      n.fullDiffMetadata$.get() != null ||
      n.fullContentUnavailable$.get() ||
      n.isLoadingFullContent$.get()
    )
  ) {
    (n.isLoadingFullContent$.set(!0),
      n.fullContentLoadFailed$.set(!1),
      n.fullContentUnavailable$.set(!1));
    try {
      let e = await Ye({
        diff: t.diff,
        hostConfig: t.hostConfig,
        ignoreWhitespace: t.ignoreWhitespace,
        nextFallbackToDisk: t.nextFallbackToDisk,
        workspaceRoot: t.workspaceRoot,
      });
      switch (e.type) {
        case `success`:
          n.fullDiffMetadata$.set(e.metadata);
          break;
        case `unavailable`:
          n.fullContentUnavailable$.set(!0);
          break;
        case `error`:
          n.fullContentLoadFailed$.set(!0);
          break;
      }
    } catch {
      n.fullContentLoadFailed$.set(!0);
    } finally {
      n.isLoadingFullContent$.set(!1);
    }
  }
}
function Je({
  diff: e,
  hostConfig: t,
  ignoreWhitespace: n,
  loadFullFilesEnabled: r,
  nextFallbackToDisk: i,
  workspaceRoot: a,
}) {
  return `${e.metadata.cacheKey ?? `${e.metadata.name}:${e.metadata.prevObjectId ?? `none`}:${e.metadata.newObjectId ?? `none`}:${e.additions}:${e.deletions}`}:${a ?? ``}:${m(t)}:${i ? `next-disk-fallback` : `next-object-only`}:${n ? `ignore-whitespace` : `exact-whitespace`}:${r ? `full` : `partial`}`;
}
async function Ye({
  diff: e,
  hostConfig: t,
  ignoreWhitespace: n,
  nextFallbackToDisk: r,
  workspaceRoot: i,
}) {
  if (!i) return { type: `error` };
  let a = e.metadata.prevName ?? e.metadata.name,
    o = e.metadata.name,
    s = e.metadata.type !== `new` && a !== `/dev/null`,
    c = e.metadata.type !== `deleted` && o !== `/dev/null`,
    l = s
      ? p(`git`).request({
          method: `cat-file`,
          params: {
            cwd: i,
            path: a,
            oid: e.metadata.prevObjectId ?? null,
            fallbackToDisk: !1,
            hostConfig: t,
            operationSource: `thread_diff`,
          },
        })
      : Promise.resolve(Be()),
    u = c
      ? p(`git`).request({
          method: `cat-file`,
          params: {
            cwd: i,
            path: o,
            oid: e.metadata.newObjectId ?? null,
            fallbackToDisk: r || e.metadata.newObjectId == null,
            hostConfig: t,
            operationSource: `thread_diff`,
          },
        })
      : Promise.resolve(Be()),
    [d, f] = await Promise.all([l, u]);
  if (d.type === `error` || f.type === `error`) return { type: `error` };
  let m = Ve(e.metadata, d.lines, f.lines, { ignoreWhitespace: n });
  return m == null ? { type: `unavailable` } : { type: `success`, metadata: m };
}
function Xe(e) {
  let t = e.additionStart,
    n = e.deletionStart,
    r = null;
  for (let i of e.hunkContent) {
    if (i.type === `context`) {
      ((t += i.lines), (n += i.lines));
      continue;
    }
    let a = Ze({
        side: `additions`,
        start: t,
        count: i.additions,
        noEofLineNumber: e.noEOFCRAdditions ? e.additionStart + e.additionCount - 1 : null,
      }),
      o = Ze({
        side: `deletions`,
        start: n,
        count: i.deletions,
        noEofLineNumber: e.noEOFCRDeletions ? e.deletionStart + e.deletionCount - 1 : null,
      });
    ((t += i.additions), (n += i.deletions));
    let s = a ?? o;
    s != null && (r = s);
  }
  return r;
}
function Ze({ side: e, start: t, count: n, noEofLineNumber: r }) {
  if (n === 0) return null;
  let i = t + n - 1,
    a = i === r ? i - 1 : i;
  return a < t ? null : { side: e, lineNumber: a };
}
var W = e(t(), 1),
  Qe = `wham-toggle-all-diffs`;
function $e(e, t) {
  let n = (0, N.c)(6),
    r,
    i;
  (n[0] !== e || n[1] !== t
    ? ((r = () => {
        let n = function (n) {
          let r = n.detail.scope;
          (t && r !== t) || (!t && r) || e(n.detail.open);
        };
        return (
          window.addEventListener(Qe, n),
          () => {
            window.removeEventListener(Qe, n);
          }
        );
      }),
      (i = [e, t]),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r),
      (n[3] = i))
    : ((r = n[2]), (i = n[3])),
    (0, W.useEffect)(r, i));
  let a;
  return (
    n[4] === t
      ? (a = n[5])
      : ((a = (e) => {
          let n = { open: e, scope: t },
            r = new CustomEvent(Qe, { detail: n });
          window.dispatchEvent(r);
        }),
        (n[4] = t),
        (n[5] = a)),
    a
  );
}
var et = 2e3,
  tt = 3,
  nt = 3,
  G = 24,
  rt = ` -> `,
  it = {
    blue: `light-dark(#1a85d4, #69b1ff)`,
    cyan: `light-dark(#1ca1c7, #68cdf2)`,
    gray: `light-dark(#84848a, #adadb1)`,
    green: `light-dark(#199f43, #5ecc71)`,
    indigo: `light-dark(#693acf, #9d6afb)`,
    mauve: `light-dark(#594c5b, #79697b)`,
    orange: `light-dark(#d47628, #ffa359)`,
    pink: `light-dark(#d32a61, #ff678d)`,
    purple: `light-dark(#a631be, #d568ea)`,
    red: `light-dark(#d52c36, #ff6762)`,
    teal: `light-dark(#17a5af, #64d1db)`,
    vermilion: `light-dark(#ff8c5b, #d5512f)`,
    yellow: `light-dark(#d5a910, #ffd452)`,
  },
  at = {
    astro: `purple`,
    babel: `yellow`,
    bash: `green`,
    biome: `blue`,
    bootstrap: `indigo`,
    browserslist: `yellow`,
    bun: `mauve`,
    c: `blue`,
    claude: `orange`,
    cpp: `blue`,
    css: `indigo`,
    database: `purple`,
    default: `gray`,
    docker: `blue`,
    eslint: `indigo`,
    git: `vermilion`,
    go: `cyan`,
    graphql: `pink`,
    html: `orange`,
    image: `pink`,
    javascript: `yellow`,
    json: `orange`,
    markdown: `green`,
    mcp: `teal`,
    npm: `red`,
    oxc: `cyan`,
    postcss: `red`,
    prettier: `teal`,
    python: `blue`,
    react: `cyan`,
    ruby: `red`,
    rust: `orange`,
    sass: `pink`,
    svg: `orange`,
    svelte: `red`,
    svgo: `green`,
    swift: `orange`,
    table: `teal`,
    tailwind: `cyan`,
    terraform: `indigo`,
    text: `gray`,
    typescript: `blue`,
    vite: `purple`,
    vscode: `blue`,
    vue: `green`,
    wasm: `indigo`,
    webpack: `blue`,
    yml: `red`,
    zig: `orange`,
    zip: `orange`,
  },
  K = T();
function ot(e) {
  let t = (0, N.c)(178),
    {
      containerClassName: n,
      diffViewClassName: s,
      diff: c,
      viewType: l,
      stickyHeader: u,
      hunkSeparators: f,
      enableComments: p,
      allowCommentDrafts: m,
      comments: h,
      modelComments: _,
      readonlyComments: y,
      submittingCommentKeys: b,
      onCommentsChange: ee,
      commentAuthorLabel: ne,
      commentAuthorAvatarUrl: S,
      onReadonlyCommentReply: re,
      defaultOpen: ae,
      diffViewWrap: se,
      showHunkActions: ce,
      showFileActions: le,
      fileActionsDisabled: de,
      onHunkAction: fe,
      onPostRender: me,
      hunkActionsVariant: T,
      cwd: E,
      richPreviewEnabled: he,
      roundedCorners: D,
      background: ge,
      diffSurface: _e,
      disableNativeContextMenu: ve,
      onRequestChanges: A,
      onCopyPath: be,
      onToggleWrap: Te,
      expandScope: De,
      conversationId: j,
      hostConfig: Oe,
      loadFullContent: M,
      fullContentNextFallbackToDisk: ke,
      fullContentIgnoreWhitespace: Ae,
      metrics: F,
      displayPathOverride: I,
      isLoading: L,
      openFilePathOverride: R,
      onLoadRetry: z,
      showLoadError: B,
      headerEndContent: V,
      headerEndContentOpenOnClick: je,
      headerOpenAction: Me,
      headerVariant: Ne,
      showHeaderDiffStats: Pe,
      preserveHeaderPositionOnToggle: Fe,
    } = e,
    Ie = p === void 0 ? !1 : p,
    Le = m === void 0 ? Ie : m,
    H = ae === void 0 ? !0 : ae,
    U = se === void 0 ? !1 : se,
    ze = ce === void 0 ? !1 : ce,
    Be = le === void 0 ? ze : le,
    Ve = de === void 0 ? !1 : de,
    He = T === void 0 ? `unstaged` : T,
    Ue = he === void 0 ? !1 : he,
    We = D === void 0 ? !0 : D,
    Ge = ge === void 0 ? !0 : ge,
    Ke = _e === void 0 ? `main` : _e,
    qe = ve === void 0 ? !1 : ve,
    Je = M === void 0 ? !0 : M,
    Ye = ke === void 0 ? !1 : ke,
    Xe = Ae === void 0 ? !1 : Ae,
    Ze = L === void 0 ? !1 : L,
    Qe = B === void 0 ? !1 : B,
    et = Ne === void 0 ? `default` : Ne,
    tt = Pe === void 0 ? !0 : Pe,
    nt = Fe === void 0 ? !1 : Fe,
    G = i(o),
    it = et === `full-review`,
    at;
  t[0] !== H || t[1] !== c
    ? ((at = () => H && c.metadata.type !== `deleted`), (t[0] = H), (t[1] = c), (t[2] = at))
    : (at = t[2]);
  let [K, ot] = (0, W.useState)(at),
    [ut, dt] = (0, W.useState)(U),
    ft = (0, W.useRef)(null),
    mt = (0, W.useRef)(null),
    ht = (0, W.useRef)(ct),
    gt = g(),
    { platform: _t } = ue(),
    vt = $e(ot, De),
    yt = v(),
    bt = c.metadata.type === `deleted`,
    xt = c.metadata.name,
    St;
  t[3] !== E || t[4] !== xt
    ? ((St = xt && xt !== `/dev/null` ? d(xt, E) : xt), (t[3] = E), (t[4] = xt), (t[5] = St))
    : (St = t[5]);
  let q = St,
    J = I ?? q ?? xt ?? ``,
    Ct;
  t[6] === J ? (Ct = t[7]) : ((Ct = J && !ie(J) ? J : null), (t[6] = J), (t[7] = Ct));
  let wt = Ct,
    Y,
    Tt;
  t[8] !== E || t[9] !== c.metadata.prevName || t[10] !== c.metadata.type
    ? ((Y =
        (c.metadata.type === `rename-pure` || c.metadata.type === `rename-changed`) &&
        c.metadata.prevName != null
          ? d(c.metadata.prevName, E)
          : null),
      (Tt = Y == null ? null : (w(Y).split(`/`).pop() ?? Y)),
      (t[8] = E),
      (t[9] = c.metadata.prevName),
      (t[10] = c.metadata.type),
      (t[11] = Y),
      (t[12] = Tt))
    : ((Y = t[11]), (Tt = t[12]));
  let X = Tt,
    Z;
  bb0: {
    if (R !== void 0) {
      if (R == null) {
        Z = null;
        break bb0;
      }
      let e = _t === `windows`,
        n;
      (t[13] !== R || t[14] !== e
        ? ((n = oe(``, R, e)), (t[13] = R), (t[14] = e), (t[15] = n))
        : (n = t[15]),
        (Z = n));
      break bb0;
    }
    if (q === `/dev/null` || !E) {
      Z = q;
      break bb0;
    }
    let e = _t === `windows`,
      n;
    (t[16] !== E || t[17] !== e || t[18] !== q
      ? ((n = oe(E, q, e)), (t[16] = E), (t[17] = e), (t[18] = q), (t[19] = n))
      : (n = t[19]),
      (Z = n));
  }
  let Q = Z,
    Et;
  t[20] === J ? (Et = t[21]) : ((Et = w(J).split(`/`).pop() ?? J), (t[20] = J), (t[21] = Et));
  let Dt = Et,
    Ot = Y == null ? J : `${Y}${rt}${J}`,
    kt = X == null ? Dt : `${X}${rt}${Dt}`,
    At;
  t[22] !== Dt || t[23] !== J || t[24] !== X || t[25] !== Y
    ? ((At =
        Y == null || X == null
          ? [{ fileName: Dt, path: J }]
          : [
              { fileName: X, path: Y },
              { fileName: Dt, path: J },
            ]),
      (t[22] = Dt),
      (t[23] = J),
      (t[24] = X),
      (t[25] = Y),
      (t[26] = At))
    : (At = t[26]);
  let jt = At,
    $ = Oe?.id,
    Mt,
    Nt;
  (t[27] === U
    ? ((Mt = t[28]), (Nt = t[29]))
    : ((Mt = () => {
        dt(U);
      }),
      (Nt = [U]),
      (t[27] = U),
      (t[28] = Mt),
      (t[29] = Nt)),
    (0, W.useEffect)(Mt, Nt));
  let Pt = E ?? null,
    Ft;
  t[30] !== $ || t[31] !== Q || t[32] !== Pt
    ? ((Ft = { cwd: Pt, hostId: $, openPath: Q }),
      (t[30] = $),
      (t[31] = Q),
      (t[32] = Pt),
      (t[33] = Ft))
    : (Ft = t[33]);
  let It = a(r(xe, Ft).preferredTargetOverride$),
    Lt;
  t[34] !== E || t[35] !== $ || t[36] !== Q || t[37] !== gt
    ? ((Lt = async () => {
        try {
          return await k({ cwd: E ?? null, hostId: $, openPath: Q, queryClient: gt });
        } catch {
          return null;
        }
      }),
      (t[34] = E),
      (t[35] = $),
      (t[36] = Q),
      (t[37] = gt),
      (t[38] = Lt))
    : (Lt = t[38]);
  let Rt = C(Lt),
    zt = !!Q && Q !== `/dev/null`,
    Bt;
  t[39] !== be || t[40] !== Q
    ? ((Bt = () => {
        if (!(!Q || Q === `/dev/null`)) {
          if (be) {
            be(Q);
            return;
          }
          O(Q);
        }
      }),
      (t[39] = be),
      (t[40] = Q),
      (t[41] = Bt))
    : (Bt = t[41]);
  let Vt = Bt,
    Ht;
  t[42] === Te
    ? (Ht = t[43])
    : ((Ht = () => {
        if (Te) {
          Te();
          return;
        }
        dt(st);
      }),
      (t[42] = Te),
      (t[43] = Ht));
  let Ut = Ht,
    Wt = bt ? (c.firstDeletionLine ?? 1) : (c.firstAdditionLine ?? 1),
    Gt;
  t[44] !== E || t[45] !== $ || t[46] !== Q || t[47] !== G
    ? ((Gt = (e) => {
        let { lineNumber: t, event: n } = e;
        Q && (n.metaKey || n.ctrlKey) && Ee(G, { path: Q, line: t, cwd: E ?? null, hostId: $ });
      }),
      (t[44] = E),
      (t[45] = $),
      (t[46] = Q),
      (t[47] = G),
      (t[48] = Gt))
    : (Gt = t[48]);
  let Kt = C(Gt),
    qt;
  t[49] !== E || t[50] !== Wt || t[51] !== $ || t[52] !== Q || t[53] !== G
    ? ((qt = (e, t, n) => {
        if (!Q) return;
        let r = ft.current ?? Wt;
        ((ft.current = null),
          ye(G, {
            cwd: E ?? null,
            hostId: $,
            line: r,
            openPath: Q,
            appPath: n,
            persistPreferred: t,
            target: e,
          }));
      }),
      (t[49] = E),
      (t[50] = Wt),
      (t[51] = $),
      (t[52] = Q),
      (t[53] = G),
      (t[54] = qt))
    : (qt = t[54]);
  let Jt = C(qt),
    Yt;
  t[55] !== E ||
  t[56] !== Wt ||
  t[57] !== $ ||
  t[58] !== Rt ||
  t[59] !== Q ||
  t[60] !== It ||
  t[61] !== G
    ? ((Yt = () => {
        Q &&
          (async () => {
            let { primaryTarget: e } = we({ data: await Rt(), preferredTargetOverride: It });
            if (e != null) {
              ye(G, {
                cwd: E ?? null,
                hostId: $,
                line: Wt,
                openPath: Q,
                persistPreferred: !1,
                target: e.target,
                appPath: e.appPath,
              });
              return;
            }
            Ee(G, { cwd: E ?? null, hostId: $, line: Wt, path: Q });
          })();
      }),
      (t[55] = E),
      (t[56] = Wt),
      (t[57] = $),
      (t[58] = Rt),
      (t[59] = Q),
      (t[60] = It),
      (t[61] = G),
      (t[62] = Yt))
    : (Yt = t[62]);
  let Xt = Yt,
    Zt;
  t[63] === Kt
    ? (Zt = t[64])
    : ((Zt = (e) => {
        Kt(e);
      }),
      (t[63] = Kt),
      (t[64] = Zt));
  let Qt = Zt,
    $t;
  t[65] === Kt
    ? ($t = t[66])
    : (($t = (e) => {
        Kt(e);
      }),
      (t[65] = Kt),
      (t[66] = $t));
  let en = $t,
    tn;
  t[67] !== vt || t[68] !== K || t[69] !== nt
    ? ((tn = (e) => {
        let t = !K;
        if ((nt && e != null && Re(e.currentTarget), e?.altKey)) {
          vt(t);
          return;
        }
        ot(t);
      }),
      (t[67] = vt),
      (t[68] = K),
      (t[69] = nt),
      (t[70] = tn))
    : (tn = t[70]);
  let nn = C(tn),
    rn;
  t[71] !== E || t[72] !== Wt || t[73] !== $ || t[74] !== Q || t[75] !== G || t[76] !== nn
    ? ((rn = (e) => {
        (e.stopPropagation(), nn(e));
      }),
      (t[71] = E),
      (t[72] = Wt),
      (t[73] = $),
      (t[74] = Q),
      (t[75] = G),
      (t[76] = nn),
      (t[77] = rn))
    : (rn = t[77]);
  let an = C(rn),
    on;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((on = () => {
        ht.current();
      }),
      (t[78] = on))
    : (on = t[78]);
  let sn = on,
    cn;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((cn = (e) => {
        ft.current = Se(
          typeof e.nativeEvent.composedPath == `function`
            ? e.nativeEvent.composedPath()
            : [e.target],
        );
      }),
      (t[79] = cn))
    : (cn = t[79]);
  let ln = cn,
    un;
  t[80] === wt
    ? (un = t[81])
    : ((un =
        wt == null
          ? void 0
          : () => {
              O(wt);
            }),
      (t[80] = wt),
      (t[81] = un));
  let dn = We && `rounded-lg`,
    fn = it && K && `pb-0.5`,
    pn;
  t[82] !== n || t[83] !== dn || t[84] !== fn
    ? ((pn = x(`group/file-diff flex flex-col overflow-clip`, dn, fn, n)),
      (t[82] = n),
      (t[83] = dn),
      (t[84] = fn),
      (t[85] = pn))
    : (pn = t[85]);
  let mn;
  t[86] !== Ge || t[87] !== Ke
    ? ((mn = pe(Ge, Ke)), (t[86] = Ge), (t[87] = Ke), (t[88] = mn))
    : (mn = t[88]);
  let hn = `var(--codex-diffs-surface-override, ${mn})`,
    gn = Ge ? `var(--codex-diffs-surface)` : void 0,
    _n;
  t[89] !== hn || t[90] !== gn
    ? ((_n = { "--codex-diffs-surface": hn, backgroundColor: gn }),
      (t[89] = hn),
      (t[90] = gn),
      (t[91] = _n))
    : (_n = t[91]);
  let vn;
  t[92] === je
    ? (vn = t[93])
    : ((vn = (e) => {
        (e.stopPropagation(), je != null && ot(je));
      }),
      (t[92] = je),
      (t[93] = vn));
  let yn;
  t[94] !== c.metadata.name || t[95] !== fe
    ? ((yn = (e) => {
        fe?.({ path: c.metadata.name, action: e, scope: `file` });
      }),
      (t[94] = c.metadata.name),
      (t[95] = fe),
      (t[96] = yn))
    : (yn = t[96]);
  let bn = zt,
    xn;
  t[97] === yt
    ? (xn = t[98])
    : ((xn = yt.formatMessage({
        id: `diff.fileHeader.toggle`,
        defaultMessage: `Toggle file diff`,
        description: `Button label for toggling the file diff section`,
      })),
      (t[97] = yt),
      (t[98] = xn));
  let Sn;
  t[99] !== c ||
  t[100] !== Ve ||
  t[101] !== an ||
  t[102] !== Xt ||
  t[103] !== kt ||
  t[104] !== Ot ||
  t[105] !== jt ||
  t[106] !== V ||
  t[107] !== Me ||
  t[108] !== et ||
  t[109] !== He ||
  t[110] !== Ze ||
  t[111] !== K ||
  t[112] !== Be ||
  t[113] !== tt ||
  t[114] !== u ||
  t[115] !== vn ||
  t[116] !== yn ||
  t[117] !== bn ||
  t[118] !== xn ||
  t[119] !== nn ||
  t[120] !== q
    ? ((Sn = (0, P.jsx)(lt, {
        diff: c,
        displayFileName: kt,
        displayPath: Ot,
        displayPathParts: jt,
        onFileNameClick: an,
        onOpenInEditor: Xt,
        headerEndContent: V,
        onHeaderEndContentClick: vn,
        headerOpenAction: Me,
        fileActionsDisabled: Ve,
        onFileToggle: nn,
        onFileAction: yn,
        open: K,
        stickyHeader: u,
        showOpenInButton: bn,
        showDiffStats: tt,
        toggleAriaLabel: xn,
        workspaceRelativePath: q,
        showFileActions: Be,
        hunkActionsVariant: He,
        headerVariant: et,
        isLoading: Ze,
      })),
      (t[99] = c),
      (t[100] = Ve),
      (t[101] = an),
      (t[102] = Xt),
      (t[103] = kt),
      (t[104] = Ot),
      (t[105] = jt),
      (t[106] = V),
      (t[107] = Me),
      (t[108] = et),
      (t[109] = He),
      (t[110] = Ze),
      (t[111] = K),
      (t[112] = Be),
      (t[113] = tt),
      (t[114] = u),
      (t[115] = vn),
      (t[116] = yn),
      (t[117] = bn),
      (t[118] = xn),
      (t[119] = nn),
      (t[120] = q),
      (t[121] = Sn))
    : (Sn = t[121]);
  let Cn;
  t[122] !== Le ||
  t[123] !== zt ||
  t[124] !== S ||
  t[125] !== ne ||
  t[126] !== h ||
  t[127] !== j ||
  t[128] !== E ||
  t[129] !== c ||
  t[130] !== s ||
  t[131] !== Ie ||
  t[132] !== Xe ||
  t[133] !== Ye ||
  t[134] !== Qt ||
  t[135] !== en ||
  t[136] !== Xt ||
  t[137] !== Oe ||
  t[138] !== He ||
  t[139] !== f ||
  t[140] !== Ze ||
  t[141] !== Je ||
  t[142] !== F ||
  t[143] !== _ ||
  t[144] !== ee ||
  t[145] !== fe ||
  t[146] !== z ||
  t[147] !== me ||
  t[148] !== re ||
  t[149] !== A ||
  t[150] !== K ||
  t[151] !== Q ||
  t[152] !== y ||
  t[153] !== Ue ||
  t[154] !== ze ||
  t[155] !== Qe ||
  t[156] !== b ||
  t[157] !== it ||
  t[158] !== l ||
  t[159] !== ut
    ? ((Cn = K
        ? (0, P.jsx)(pt, {
            canOpenFile: zt,
            comments: h,
            modelComments: _,
            conversationId: j,
            cwd: E,
            diff: c,
            diffViewClassName: s,
            enableComments: Ie,
            allowCommentDrafts: Le,
            handleLineClick: Qt,
            handleLineNumberClick: en,
            hostConfig: Oe,
            hoveredLineRef: mt,
            hunkActionsVariant: He,
            hunkSeparators: f,
            loadFullContent: Je,
            fullContentNextFallbackToDisk: Ye,
            fullContentIgnoreWhitespace: Xe,
            readonlyComments: y,
            submittingCommentKeys: b,
            onCommentsChange: ee,
            commentAuthorLabel: ne,
            commentAuthorAvatarUrl: S,
            isLoading: Ze,
            onReadonlyCommentReply: re,
            onLoadRetry: z,
            onHunkAction: fe,
            onPostRender: me,
            onOpenInEditor: Xt,
            onRequestChanges: A,
            openFilePath: Q ?? null,
            open: K,
            requestChangesRef: ht,
            richPreviewEnabled: Ue,
            showHunkActions: ze,
            showLoadError: Qe,
            useReviewLineInfoSeparators: it,
            viewType: l,
            wrapLines: ut,
            metrics: F,
          })
        : null),
      (t[122] = Le),
      (t[123] = zt),
      (t[124] = S),
      (t[125] = ne),
      (t[126] = h),
      (t[127] = j),
      (t[128] = E),
      (t[129] = c),
      (t[130] = s),
      (t[131] = Ie),
      (t[132] = Xe),
      (t[133] = Ye),
      (t[134] = Qt),
      (t[135] = en),
      (t[136] = Xt),
      (t[137] = Oe),
      (t[138] = He),
      (t[139] = f),
      (t[140] = Ze),
      (t[141] = Je),
      (t[142] = F),
      (t[143] = _),
      (t[144] = ee),
      (t[145] = fe),
      (t[146] = z),
      (t[147] = me),
      (t[148] = re),
      (t[149] = A),
      (t[150] = K),
      (t[151] = Q),
      (t[152] = y),
      (t[153] = Ue),
      (t[154] = ze),
      (t[155] = Qe),
      (t[156] = b),
      (t[157] = it),
      (t[158] = l),
      (t[159] = ut),
      (t[160] = Cn))
    : (Cn = t[160]);
  let wn;
  t[161] === Cn
    ? (wn = t[162])
    : ((wn = (0, P.jsx)(te, { children: Cn })), (t[161] = Cn), (t[162] = wn));
  let Tn;
  t[163] !== pn || t[164] !== _n || t[165] !== Sn || t[166] !== wn
    ? ((Tn = (0, P.jsxs)(`div`, {
        onContextMenu: ln,
        className: pn,
        style: _n,
        children: [Sn, wn],
      })),
      (t[163] = pn),
      (t[164] = _n),
      (t[165] = Sn),
      (t[166] = wn),
      (t[167] = Tn))
    : (Tn = t[167]);
  let En;
  return (
    t[168] !== zt ||
    t[169] !== qe ||
    t[170] !== Jt ||
    t[171] !== Vt ||
    t[172] !== Ut ||
    t[173] !== Rt ||
    t[174] !== It ||
    t[175] !== un ||
    t[176] !== Tn
      ? ((En = (0, P.jsx)(Ce, {
          canOpenFile: zt,
          loadOpenTargets: Rt,
          preferredTargetOverride: It,
          onRequestChanges: sn,
          onCopyPath: Vt,
          onCopyRelativePath: un,
          onToggleWrap: Ut,
          handleOpenInTarget: Jt,
          disableNative: qe,
          children: Tn,
        })),
        (t[168] = zt),
        (t[169] = qe),
        (t[170] = Jt),
        (t[171] = Vt),
        (t[172] = Ut),
        (t[173] = Rt),
        (t[174] = It),
        (t[175] = un),
        (t[176] = Tn),
        (t[177] = En))
      : (En = t[177]),
    En
  );
}
function st(e) {
  return !e;
}
function ct() {}
function lt(e) {
  let t = (0, N.c)(107),
    {
      diff: n,
      displayFileName: r,
      displayPath: i,
      displayPathParts: a,
      fileActionsDisabled: o,
      headerEndContent: s,
      onHeaderEndContentClick: c,
      headerOpenAction: l,
      headerVariant: u,
      hunkActionsVariant: d,
      isLoading: f,
      onFileAction: p,
      onFileNameClick: m,
      onOpenInEditor: h,
      onFileToggle: g,
      open: _,
      showDiffStats: v,
      showOpenInButton: y,
      showFileActions: b,
      stickyHeader: ee,
      toggleAriaLabel: te,
      workspaceRelativePath: C,
    } = e,
    w = u === `full-review`,
    ie;
  t[0] === _ ? (ie = t[1]) : ((ie = se.reviewFileToggle(_)), (t[0] = _), (t[1] = ie));
  let ae = w ? `ghostMuted` : `ghost`,
    oe;
  t[2] === g
    ? (oe = t[3])
    : ((oe = (e) => {
        (e.stopPropagation(), g(e));
      }),
      (t[2] = g),
      (t[3] = oe));
  let ce = _ ? `rotate-90` : `rotate-0`,
    le;
  t[4] === ce
    ? (le = t[5])
    : ((le = x(`icon-2xs transition-transform duration-200`, ce)), (t[4] = ce), (t[5] = le));
  let ue;
  t[6] === le ? (ue = t[7]) : ((ue = (0, P.jsx)(S, { className: le })), (t[6] = le), (t[7] = ue));
  let de;
  t[8] !== ie || t[9] !== ae || t[10] !== oe || t[11] !== ue || t[12] !== te
    ? ((de = (0, P.jsx)(ne, {
        ...ie,
        className: `bg-transparent text-token-foreground`,
        color: ae,
        size: `toolbar`,
        uniform: !0,
        "aria-label": te,
        onClick: oe,
        children: ue,
      })),
      (t[8] = ie),
      (t[9] = ae),
      (t[10] = oe),
      (t[11] = ue),
      (t[12] = te),
      (t[13] = de))
    : (de = t[13]);
  let fe = de,
    pe = ee && `z-10 sticky top-0`,
    me = w && ee && `backdrop-blur-sm`,
    T;
  t[14] !== pe || t[15] !== me
    ? ((T = x(`cursor-interaction select-none focus-visible:outline-none`, pe, me)),
      (t[14] = pe),
      (t[15] = me),
      (t[16] = T))
    : (T = t[16]);
  let E =
      w && ee
        ? `color-mix(in srgb, var(--codex-diffs-surface) 88%, transparent)`
        : `var(--codex-diffs-surface)`,
    he;
  t[17] === E ? (he = t[18]) : ((he = { backgroundColor: E }), (t[17] = E), (t[18] = he));
  let D;
  t[19] === w
    ? (D = t[20])
    : ((D = w ? void 0 : { backgroundColor: `var(--codex-diffs-header-surface)` }),
      (t[19] = w),
      (t[20] = D));
  let ge;
  t[21] !== f || t[22] !== ee || t[23] !== w
    ? ((ge = x(
        `group/diff-header text-size-chat @container/diff-header relative flex items-center gap-2`,
        w
          ? x(
              `py-0.5 ps-3 pe-2 hover:bg-token-list-hover-background`,
              ee
                ? `bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_88%,transparent)] [.dark_&]:bg-[color-mix(in_srgb,var(--color-token-list-active-selection-background)_88%,transparent)] [.electron-dark_&]:bg-[color-mix(in_srgb,var(--color-token-list-active-selection-background)_88%,transparent)]`
                : `bg-token-main-surface-primary [.dark_&]:bg-[var(--color-token-list-active-selection-background)] [.electron-dark_&]:bg-[var(--color-token-list-active-selection-background)]`,
              f ? `mb-2` : `mb-0.5`,
            )
          : `px-[var(--codex-diffs-header-padding-x,1rem)] py-[var(--codex-diffs-header-padding-y,0.25rem)] hover:bg-token-list-hover-background/30`,
      )),
      (t[21] = f),
      (t[22] = ee),
      (t[23] = w),
      (t[24] = ge))
    : (ge = t[24]);
  let _e = w ? `gap-0.5` : `gap-2`,
    O;
  t[25] === _e
    ? (O = t[26])
    : ((O = x(`text-size-chat flex min-w-0 flex-1 items-center text-token-text-primary`, _e)),
      (t[25] = _e),
      (t[26] = O));
  let ve = w && `gap-2 pl-1`,
    k;
  t[27] === ve
    ? (k = t[28])
    : ((k = x(`flex min-w-0 items-center`, ve)), (t[27] = ve), (t[28] = k));
  let ye;
  t[29] !== i || t[30] !== w
    ? ((ye = w ? (0, P.jsx)(yt, { path: i }) : null), (t[29] = i), (t[30] = w), (t[31] = ye))
    : (ye = t[31]);
  let A;
  t[32] === i
    ? (A = t[33])
    : ((A = (0, P.jsx)(`span`, { className: `font-mono`, children: i })), (t[32] = i), (t[33] = A));
  let be = !w && `pl-[6px]`,
    xe;
  t[34] === be
    ? (xe = t[35])
    : ((xe = x(
        `min-w-0 cursor-interaction truncate text-start text-token-text-primary select-text [direction:rtl]`,
        be,
      )),
      (t[34] = be),
      (t[35] = xe));
  let Se = !C || C === `/dev/null`,
    Ce;
  t[36] === r
    ? (Ce = t[37])
    : ((Ce = (0, P.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-primary [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:hidden`,
        children: r,
      })),
      (t[36] = r),
      (t[37] = Ce));
  let we;
  t[38] !== i || t[39] !== a || t[40] !== w
    ? ((we = w
        ? (0, P.jsx)(`span`, {
            className: `hidden min-w-0 truncate text-token-text-tertiary [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: a.map(ut),
          })
        : (0, P.jsx)(`span`, {
            className: `hidden min-w-0 truncate [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: i,
          })),
      (t[38] = i),
      (t[39] = a),
      (t[40] = w),
      (t[41] = we))
    : (we = t[41]);
  let Te;
  t[42] !== m || t[43] !== xe || t[44] !== Se || t[45] !== Ce || t[46] !== we
    ? ((Te = (0, P.jsxs)(`button`, {
        type: `button`,
        className: xe,
        disabled: Se,
        onClick: m,
        children: [Ce, we],
      })),
      (t[42] = m),
      (t[43] = xe),
      (t[44] = Se),
      (t[45] = Ce),
      (t[46] = we),
      (t[47] = Te))
    : (Te = t[47]);
  let Ee;
  t[48] !== A || t[49] !== Te
    ? ((Ee = (0, P.jsx)(re, { tooltipContent: A, delayDuration: 200, children: Te })),
      (t[48] = A),
      (t[49] = Te),
      (t[50] = Ee))
    : (Ee = t[50]);
  let De;
  t[51] !== k || t[52] !== ye || t[53] !== Ee
    ? ((De = (0, P.jsxs)(`div`, { className: k, children: [ye, Ee] })),
      (t[51] = k),
      (t[52] = ye),
      (t[53] = Ee),
      (t[54] = De))
    : (De = t[54]);
  let j;
  t[55] !== fe || t[56] !== w
    ? ((j = w
        ? (0, P.jsx)(`span`, {
            className: `shrink-0 opacity-0 group-focus-within/diff-header:opacity-100 group-hover/diff-header:opacity-100`,
            children: fe,
          })
        : null),
      (t[55] = fe),
      (t[56] = w),
      (t[57] = j))
    : (j = t[57]);
  let M;
  t[58] !== O || t[59] !== De || t[60] !== j
    ? ((M = (0, P.jsxs)(`div`, { className: O, children: [De, j] })),
      (t[58] = O),
      (t[59] = De),
      (t[60] = j),
      (t[61] = M))
    : (M = t[61]);
  let ke = w ? `gap-0` : `gap-1`,
    Ae;
  t[62] === ke
    ? (Ae = t[63])
    : ((Ae = x(`ms-auto flex items-center`, ke)), (t[62] = ke), (t[63] = Ae));
  let F;
  t[64] !== n ||
  t[65] !== i ||
  t[66] !== s ||
  t[67] !== v ||
  t[68] !== b ||
  t[69] !== y ||
  t[70] !== w
    ? ((F = v
        ? (0, P.jsx)(
            `span`,
            {
              className: x(
                `flex shrink-0 items-center`,
                s == null ? w && (b || y) && `me-1` : w ? `me-3` : `me-2`,
              ),
              children: (0, P.jsx)(Oe, { linesAdded: n.additions, linesRemoved: n.deletions }),
            },
            i,
          )
        : null),
      (t[64] = n),
      (t[65] = i),
      (t[66] = s),
      (t[67] = v),
      (t[68] = b),
      (t[69] = y),
      (t[70] = w),
      (t[71] = F))
    : (F = t[71]);
  let I;
  t[72] !== o || t[73] !== d || t[74] !== p || t[75] !== b || t[76] !== w
    ? ((I = b
        ? (0, P.jsx)(q, { disabled: o, onFileAction: p, useMutedButtonStyle: w, variant: d })
        : null),
      (t[72] = o),
      (t[73] = d),
      (t[74] = p),
      (t[75] = b),
      (t[76] = w),
      (t[77] = I))
    : (I = t[77]);
  let L;
  t[78] !== s || t[79] !== c || t[80] !== y || t[81] !== w
    ? ((L =
        s == null
          ? null
          : (0, P.jsx)(`span`, {
              className: x(w ? `flex items-center` : `contents`, w && y && `me-1`),
              onClick: c,
              children: s,
            })),
      (t[78] = s),
      (t[79] = c),
      (t[80] = y),
      (t[81] = w),
      (t[82] = L))
    : (L = t[82]);
  let R;
  t[83] !== l || t[84] !== h || t[85] !== y || t[86] !== w
    ? ((R = y
        ? (0, P.jsx)(dt, { headerOpenAction: l, onOpenInEditor: h, useMutedButtonStyle: w })
        : null),
      (t[83] = l),
      (t[84] = h),
      (t[85] = y),
      (t[86] = w),
      (t[87] = R))
    : (R = t[87]);
  let z = w ? null : fe,
    B;
  t[88] !== Ae || t[89] !== F || t[90] !== I || t[91] !== L || t[92] !== R || t[93] !== z
    ? ((B = (0, P.jsxs)(`div`, { className: Ae, children: [F, I, L, R, z] })),
      (t[88] = Ae),
      (t[89] = F),
      (t[90] = I),
      (t[91] = L),
      (t[92] = R),
      (t[93] = z),
      (t[94] = B))
    : (B = t[94]);
  let V;
  t[95] !== ge || t[96] !== M || t[97] !== B
    ? ((V = (0, P.jsxs)(`div`, { className: ge, children: [M, B] })),
      (t[95] = ge),
      (t[96] = M),
      (t[97] = B),
      (t[98] = V))
    : (V = t[98]);
  let je;
  t[99] !== D || t[100] !== V
    ? ((je = (0, P.jsx)(`div`, { style: D, children: V })),
      (t[99] = D),
      (t[100] = V),
      (t[101] = je))
    : (je = t[101]);
  let Me;
  return (
    t[102] !== g || t[103] !== T || t[104] !== he || t[105] !== je
      ? ((Me = (0, P.jsx)(`div`, { onClick: g, className: T, style: he, children: je })),
        (t[102] = g),
        (t[103] = T),
        (t[104] = he),
        (t[105] = je),
        (t[106] = Me))
      : (Me = t[106]),
    Me
  );
}
function ut(e, t) {
  let { fileName: n, path: r } = e;
  return (0, P.jsxs)(
    `span`,
    {
      children: [
        t > 0 ? (0, P.jsx)(`span`, { className: `text-token-text-primary`, children: rt }) : null,
        (0, P.jsx)(`span`, { children: r.slice(0, Math.max(0, r.length - n.length)) }),
        (0, P.jsx)(`span`, { className: `text-token-text-primary`, children: n }),
      ],
    },
    `${r}:${t}`,
  );
}
function dt(e) {
  let t = (0, N.c)(23),
    { headerOpenAction: n, onOpenInEditor: r, useMutedButtonStyle: i } = e,
    a = v(),
    o;
  t[0] !== n?.ariaLabel || t[1] !== a
    ? ((o =
        n?.ariaLabel ??
        a.formatMessage({
          id: `codex.diff.fileHeader.openInIcon`,
          defaultMessage: `Open file`,
          description: `Accessible label for the icon button in the diff file header that opens the current file`,
        })),
      (t[0] = n?.ariaLabel),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== n?.tooltip || t[4] !== a
    ? ((c =
        n?.tooltip ??
        a.formatMessage({
          id: `codex.diff.fileHeader.openIn.tooltip`,
          defaultMessage: `Open in editor`,
          description: `Tooltip for the icon button in the diff file header that opens the current file`,
        })),
      (t[3] = n?.tooltip),
      (t[4] = a),
      (t[5] = c))
    : (c = t[5]);
  let l = c,
    u = n == null && `opacity-0 transition-opacity duration-200 group-hover/file-diff:opacity-100`,
    d;
  t[6] === u ? (d = t[7]) : ((d = x(`shrink-0`, u)), (t[6] = u), (t[7] = d));
  let f = i ? `text-token-text-tertiary hover:text-token-text-primary` : void 0,
    p = i ? `ghostMuted` : `ghost`,
    m;
  t[8] !== n || t[9] !== r
    ? ((m = (e) => {
        if ((e.stopPropagation(), n != null)) {
          n.onClick();
          return;
        }
        r();
      }),
      (t[8] = n),
      (t[9] = r),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, P.jsx)(de, { className: `icon-2xs` })), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== s || t[13] !== f || t[14] !== p || t[15] !== m
    ? ((g = (0, P.jsx)(ne, {
        className: f,
        color: p,
        size: `toolbar`,
        uniform: !0,
        "aria-label": s,
        onClick: m,
        children: h,
      })),
      (t[12] = s),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== l || t[18] !== g
    ? ((_ = (0, P.jsx)(re, { tooltipContent: l, children: g })),
      (t[17] = l),
      (t[18] = g),
      (t[19] = _))
    : (_ = t[19]);
  let y;
  return (
    t[20] !== _ || t[21] !== d
      ? ((y = (0, P.jsx)(`div`, { className: d, onClick: ft, children: _ })),
        (t[20] = _),
        (t[21] = d),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
function ft(e) {
  return e.stopPropagation();
}
function pt(e) {
  let t = (0, N.c)(137),
    {
      canOpenFile: n,
      comments: s,
      modelComments: c,
      conversationId: l,
      cwd: u,
      diff: d,
      diffViewClassName: p,
      enableComments: m,
      allowCommentDrafts: g,
      handleLineClick: _,
      handleLineNumberClick: v,
      hostConfig: y,
      hoveredLineRef: b,
      hunkActionsVariant: x,
      hunkSeparators: te,
      loadFullContent: ne,
      fullContentNextFallbackToDisk: S,
      fullContentIgnoreWhitespace: C,
      metrics: re,
      readonlyComments: w,
      submittingCommentKeys: ie,
      onCommentsChange: ae,
      commentAuthorLabel: oe,
      commentAuthorAvatarUrl: se,
      isLoading: ce,
      onReadonlyCommentReply: le,
      onLoadRetry: ue,
      onHunkAction: de,
      onPostRender: pe,
      onOpenInEditor: T,
      onRequestChanges: D,
      openFilePath: ge,
      open: _e,
      requestChangesRef: O,
      richPreviewEnabled: ve,
      showHunkActions: k,
      showLoadError: ye,
      useReviewLineInfoSeparators: A,
      viewType: be,
      wrapLines: xe,
    } = e,
    Se = i(o),
    Ce = fe(),
    we = a(me),
    Ee = a(Ie),
    [j, Oe] = (0, W.useState)(null),
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        Oe(null);
      }),
      (t[0] = M))
    : (M = t[0]);
  let ke = M,
    Ae = f(h),
    F = (0, W.useRef)(null),
    I = (0, W.useRef)(!1),
    L = y ?? Ae,
    R = d.additions + d.deletions,
    z;
  t[1] === d ? (z = t[2]) : ((z = E(d)), (t[1] = d), (t[2] = z));
  let B = z,
    V = R > et,
    Me = V || !we ? `none` : `word-alt`,
    Ne = d.additions === 0 && d.deletions === 0,
    Pe = Ne && d.metadata.type === `rename-pure`,
    Fe = B,
    Le;
  t[3] !== u || t[4] !== d || t[5] !== C || t[6] !== S || t[7] !== Ee || t[8] !== L
    ? ((Le = Je({
        diff: d,
        hostConfig: L,
        ignoreWhitespace: C,
        loadFullFilesEnabled: Ee,
        nextFallbackToDisk: S,
        workspaceRoot: u,
      })),
      (t[3] = u),
      (t[4] = d),
      (t[5] = C),
      (t[6] = S),
      (t[7] = Ee),
      (t[8] = L),
      (t[9] = Le))
    : (Le = t[9]);
  let H = r(Ke, Le),
    Re = a(H.fullDiffMetadata$),
    U = a(H.fullContentLoadFailed$),
    ze = a(H.fullContentUnavailable$),
    Be = a(H.isLoadingFullContent$),
    Ve =
      ne &&
      Ee &&
      u != null &&
      _e &&
      d.metadata.isPartial &&
      !d.isBinary &&
      !d.isGitlink &&
      !Ne &&
      !Fe &&
      Re == null &&
      !U &&
      !ze &&
      !Be,
    He;
  t[10] !== u ||
  t[11] !== d ||
  t[12] !== H.key ||
  t[13] !== C ||
  t[14] !== S ||
  t[15] !== L ||
  t[16] !== Se
    ? ((He = () => {
        ((I.current = !0),
          qe(Se, {
            diff: d,
            hostConfig: L,
            ignoreWhitespace: C,
            key: H.key,
            nextFallbackToDisk: S,
            workspaceRoot: u,
          }));
      }),
      (t[10] = u),
      (t[11] = d),
      (t[12] = H.key),
      (t[13] = C),
      (t[14] = S),
      (t[15] = L),
      (t[16] = Se),
      (t[17] = He))
    : (He = t[17]);
  let Ue = He,
    We;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = () => {
        I.current = !1;
      }),
      (t[18] = We))
    : (We = t[18]);
  let Ge;
  (t[19] === H.key ? (Ge = t[20]) : ((Ge = [H.key]), (t[19] = H.key), (t[20] = Ge)),
    (0, W.useEffect)(We, Ge));
  let Ye, Ze;
  (t[21] !== u ||
  t[22] !== d ||
  t[23] !== H.key ||
  t[24] !== C ||
  t[25] !== S ||
  t[26] !== L ||
  t[27] !== Se ||
  t[28] !== Ve
    ? ((Ye = () => {
        if (!Ve || I.current) return;
        let e = F.current;
        if (e == null) return;
        let t = new IntersectionObserver((e) => {
          e.some(ht) &&
            ((I.current = !0),
            t.disconnect(),
            qe(Se, {
              diff: d,
              hostConfig: L,
              ignoreWhitespace: C,
              key: H.key,
              nextFallbackToDisk: S,
              workspaceRoot: u,
            }));
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (Ze = [u, d, C, S, H.key, L, Se, Ve]),
      (t[21] = u),
      (t[22] = d),
      (t[23] = H.key),
      (t[24] = C),
      (t[25] = S),
      (t[26] = L),
      (t[27] = Se),
      (t[28] = Ve),
      (t[29] = Ye),
      (t[30] = Ze))
    : ((Ye = t[29]), (Ze = t[30])),
    (0, W.useEffect)(Ye, Ze));
  let Qe = Re ?? d.metadata,
    $e;
  t[31] !== B || t[32] !== Re
    ? (($e = Re == null ? B : he(Re)), (t[31] = B), (t[32] = Re), (t[33] = $e))
    : ($e = t[33]);
  let tt = $e,
    nt;
  t[34] !== V || t[35] !== Qe
    ? ((nt = V ? { ...Qe, lang: `text` } : Qe), (t[34] = V), (t[35] = Qe), (t[36] = nt))
    : (nt = t[36]);
  let G = nt,
    rt = x === `staged` ? null : ge,
    it;
  t[37] !== u || t[38] !== d || t[39] !== x || t[40] !== rt || t[41] !== L.id
    ? ((it = Ct({ diff: d, openFilePath: rt, cwd: u, hostId: L.id, hunkActionsVariant: x })),
      (t[37] = u),
      (t[38] = d),
      (t[39] = x),
      (t[40] = rt),
      (t[41] = L.id),
      (t[42] = it))
    : (it = t[42]);
  let at = it,
    K = d.metadata.type === `new`,
    ot = d.metadata.type === `deleted`,
    st;
  t[43] !== g ||
  t[44] !== se ||
  t[45] !== oe ||
  t[46] !== s ||
  t[47] !== l ||
  t[48] !== u ||
  t[49] !== d.metadata.name ||
  t[50] !== m ||
  t[51] !== c ||
  t[52] !== ae ||
  t[53] !== le ||
  t[54] !== w ||
  t[55] !== ie
    ? ((st = {
        diffPath: d.metadata.name,
        workspaceRoot: u,
        enableComments: m,
        allowCommentDrafts: g,
        comments: s,
        modelComments: c,
        readonlyComments: w,
        submittingCommentKeys: ie,
        onCommentsChange: ae,
        commentAuthorLabel: oe,
        commentAuthorAvatarUrl: se,
        onReadonlyCommentReply: le,
        onSelectionClear: ke,
        conversationId: l,
      }),
      (t[43] = g),
      (t[44] = se),
      (t[45] = oe),
      (t[46] = s),
      (t[47] = l),
      (t[48] = u),
      (t[49] = d.metadata.name),
      (t[50] = m),
      (t[51] = c),
      (t[52] = ae),
      (t[53] = le),
      (t[54] = w),
      (t[55] = ie),
      (t[56] = st))
    : (st = t[56]);
  let {
      annotations: ct,
      annotationKeys: lt,
      addDraftComment: ut,
      renderCommentAnnotation: dt,
    } = De(st),
    ft;
  bb0: {
    if (!k || K || ot) {
      let e;
      (t[57] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[57] = e)) : (e = t[57]),
        (ft = e));
      break bb0;
    }
    let e;
    (t[58] !== d.metadata.hunks || t[59] !== d.metadata.name
      ? ((e = []),
        d.metadata.hunks.forEach((t, n) => {
          let r = Xe(t);
          r &&
            e.push({
              side: r.side,
              lineNumber: r.lineNumber,
              metadata: { kind: `hunk-actions`, path: d.metadata.name, hunkIndex: n },
            });
        }),
        (t[58] = d.metadata.hunks),
        (t[59] = d.metadata.name),
        (t[60] = e))
      : (e = t[60]),
      (ft = e));
  }
  let pt = ft,
    yt;
  t[61] !== ct || t[62] !== m || t[63] !== pt || t[64] !== k
    ? ((yt = []),
      k && yt.push(...pt),
      m && yt.push(...ct),
      (t[61] = ct),
      (t[62] = m),
      (t[63] = pt),
      (t[64] = k),
      (t[65] = yt))
    : (yt = t[65]);
  let bt = yt,
    q;
  t[66] === b
    ? (q = t[67])
    : ((q = (e) => {
        let { annotationSide: t, lineNumber: n } = e;
        b.current = { lineNumber: n, side: t };
      }),
      (t[66] = b),
      (t[67] = q));
  let wt = q,
    Y;
  t[68] === b
    ? (Y = t[69])
    : ((Y = () => {
        b.current = null;
      }),
      (t[68] = b),
      (t[69] = Y));
  let X = Y,
    Z;
  t[70] !== ut || t[71] !== g || t[72] !== lt || t[73] !== d || t[74] !== b || t[75] !== D
    ? ((Z = () => {
        if (!g) return;
        let e = b.current;
        if (!e) return;
        let t = Te(e.side, e.lineNumber);
        lt.has(t) ||
          (ut({
            side: e.side,
            lineNumber: e.lineNumber,
            localDiffHunk: Tt(d, e.side, e.lineNumber),
          }),
          D?.());
      }),
      (t[70] = ut),
      (t[71] = g),
      (t[72] = lt),
      (t[73] = d),
      (t[74] = b),
      (t[75] = D),
      (t[76] = Z))
    : (Z = t[76]);
  let Q = Z,
    Et,
    Dt;
  (t[77] !== Q || t[78] !== O
    ? ((Et = () => (
        (O.current = Q),
        () => {
          O.current === Q && (O.current = mt);
        }
      )),
      (Dt = [Q, O]),
      (t[77] = Q),
      (t[78] = O),
      (t[79] = Et),
      (t[80] = Dt))
    : ((Et = t[79]), (Dt = t[80])),
    (0, W.useEffect)(Et, Dt));
  let Ot;
  t[81] !== x || t[82] !== de || t[83] !== dt
    ? ((Ot = (e) => {
        let t = e.metadata;
        return t
          ? t.kind === `hunk-actions`
            ? (0, P.jsx)(J, { path: t.path, hunkIndex: t.hunkIndex, onHunkAction: de, variant: x })
            : dt(e)
          : null;
      }),
      (t[81] = x),
      (t[82] = de),
      (t[83] = dt),
      (t[84] = Ot))
    : (Ot = t[84]);
  let kt = Ot,
    At;
  t[85] !== ut || t[86] !== g || t[87] !== lt || t[88] !== d
    ? ((At = (e) => {
        if (!g) return;
        let t = e,
          n = t.endSide ?? t.side;
        if (n == null) return;
        window.requestAnimationFrame(() => {
          Oe({ ...t });
        });
        let r = t.endSide != null && t.endSide !== t.side,
          i = r ? t.end : Math.max(t.start, t.end),
          a = Te(n, i);
        lt.has(a) ||
          ut({
            side: n,
            lineNumber: i,
            ...(t.start !== t.end || r
              ? { startLine: r ? t.start : Math.min(t.start, t.end) }
              : {}),
            ...(r && t.side != null ? { startSide: t.side } : {}),
            localDiffHunk: Tt(d, n, i),
          });
      }),
      (t[85] = ut),
      (t[86] = g),
      (t[87] = lt),
      (t[88] = d),
      (t[89] = At))
    : (At = t[89]);
  let jt = At,
    $;
  t[90] !== g ||
  t[91] !== bt ||
  t[92] !== n ||
  t[93] !== d ||
  t[94] !== p ||
  t[95] !== m ||
  t[96] !== G ||
  t[97] !== U ||
  t[98] !== Ue ||
  t[99] !== jt ||
  t[100] !== _ ||
  t[101] !== wt ||
  t[102] !== X ||
  t[103] !== v ||
  t[104] !== Ne ||
  t[105] !== te ||
  t[106] !== at ||
  t[107] !== ot ||
  t[108] !== ce ||
  t[109] !== Be ||
  t[110] !== Pe ||
  t[111] !== Me ||
  t[112] !== rt ||
  t[113] !== re ||
  t[114] !== ue ||
  t[115] !== T ||
  t[116] !== pe ||
  t[117] !== kt ||
  t[118] !== tt ||
  t[119] !== ve ||
  t[120] !== j ||
  t[121] !== k ||
  t[122] !== ye ||
  t[123] !== A ||
  t[124] !== be ||
  t[125] !== Ce ||
  t[126] !== xe
    ? (($ = ce
        ? (0, P.jsx)(_t, { diff: d, lines: vt(d) })
        : ye
          ? (0, P.jsx)(xt, { onRetry: ue })
          : tt
            ? (0, P.jsx)(gt, { canOpenFile: n, onOpenInEditor: T })
            : (0, P.jsxs)(P.Fragment, {
                children: [
                  U ? (0, P.jsx)(St, { onRetry: Ue }) : null,
                  (0, P.jsx)(je, {
                    diffViewProps: {
                      diffViewClassName: p,
                      disableScrollAnchor: Ce != null,
                      fileDiff: G,
                      isLoadingFullContent: Be,
                      metrics: re,
                      viewType: be,
                      wrapLines: xe,
                      hunkSeparators: te,
                      lineDiffType: Me,
                      expansionLineCount: 20,
                      enableLineSelection: g,
                      onLineEnter: wt,
                      onLineLeave: X,
                      onLineClick: _,
                      onLineNumberClick: v,
                      onLineSelected: Oe,
                      selectedLines: j,
                      lineAnnotations: bt,
                      renderAnnotation: k || m ? kt : void 0,
                      onGutterUtilityClick: g ? jt : void 0,
                      onPostRender: pe,
                      useReviewLineInfoSeparators: A,
                    },
                    filePath: d.metadata.name,
                    previewPath: rt,
                    imagePreview: at,
                    hasNoChanges: Ne,
                    isRenameWithoutChanges: Pe,
                    isBinary: d.isBinary,
                    isDeletion: ot,
                    richPreviewEnabled: ve,
                  }),
                ],
              })),
      (t[90] = g),
      (t[91] = bt),
      (t[92] = n),
      (t[93] = d),
      (t[94] = p),
      (t[95] = m),
      (t[96] = G),
      (t[97] = U),
      (t[98] = Ue),
      (t[99] = jt),
      (t[100] = _),
      (t[101] = wt),
      (t[102] = X),
      (t[103] = v),
      (t[104] = Ne),
      (t[105] = te),
      (t[106] = at),
      (t[107] = ot),
      (t[108] = ce),
      (t[109] = Be),
      (t[110] = Pe),
      (t[111] = Me),
      (t[112] = rt),
      (t[113] = re),
      (t[114] = ue),
      (t[115] = T),
      (t[116] = pe),
      (t[117] = kt),
      (t[118] = tt),
      (t[119] = ve),
      (t[120] = j),
      (t[121] = k),
      (t[122] = ye),
      (t[123] = A),
      (t[124] = be),
      (t[125] = Ce),
      (t[126] = xe),
      (t[127] = $))
    : ($ = t[127]);
  let Mt = $;
  if (Ce != null) {
    let e;
    return (
      t[128] !== Mt || t[129] !== X
        ? ((e = (0, P.jsx)(`div`, {
            ref: F,
            className: `relative overflow-hidden`,
            onMouseLeave: X,
            children: Mt,
          })),
          (t[128] = Mt),
          (t[129] = X),
          (t[130] = e))
        : (e = t[130]),
      e
    );
  }
  let Nt, Pt, Ft;
  t[131] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = { height: `auto`, opacity: 1 }),
      (Pt = { height: 0, opacity: 0 }),
      (Ft = { duration: 0, ease: `easeInOut` }),
      (t[131] = Nt),
      (t[132] = Pt),
      (t[133] = Ft))
    : ((Nt = t[131]), (Pt = t[132]), (Ft = t[133]));
  let It;
  return (
    t[134] !== Mt || t[135] !== X
      ? ((It = (0, P.jsx)(ee.div, {
          ref: F,
          initial: !1,
          animate: Nt,
          exit: Pt,
          transition: Ft,
          className: `relative overflow-hidden`,
          onMouseLeave: X,
          children: Mt,
        })),
        (t[134] = Mt),
        (t[135] = X),
        (t[136] = It))
      : (It = t[136]),
    It
  );
}
function mt() {}
function ht(e) {
  return e.isIntersecting;
}
function gt(e) {
  let t = (0, N.c)(6),
    { canOpenFile: n, onOpenInEditor: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, P.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, P.jsx)(y, {
          id: `codex.diff.openInEditorPrompt.singleLine`,
          defaultMessage: `This file is too large to display here.`,
          description: `Single-line prompt shown in the diff view when a file is too large to render in-panel`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = n
        ? (0, P.jsx)(ne, {
            className: `shrink-0 px-1.5`,
            color: `ghost`,
            size: `toolbar`,
            onClick: r,
            children: (0, P.jsx)(y, {
              id: `codex.diff.openInEditorPrompt.openButton`,
              defaultMessage: `Open in editor`,
              description: `Button label shown in the large-diff prompt to open the file in an editor`,
            }),
          })
        : null),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, P.jsxs)(`div`, {
          className: `text-size-chat flex items-center gap-2 bg-token-editor-background px-3 py-2 text-token-description-foreground`,
          children: [i, a],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function _t(e) {
  let t = (0, N.c)(4),
    { diff: n, lines: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, P.jsx)(`span`, {
        className: `sr-only`,
        children: (0, P.jsx)(y, {
          id: `codex.review.diff.loading`,
          defaultMessage: `Loading diff`,
          description: `Placeholder text shown while a review file diff is loading`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a = `diff-loading-${n.metadata.name}-${n.additions}-${n.deletions}`,
    o;
  return (
    t[1] !== r || t[2] !== a
      ? ((o = (0, P.jsx)(`div`, {
          className: `bg-token-main-surface-primary px-3 pt-2 pb-3 text-sm`,
          children: (0, P.jsxs)(`div`, {
            className: `w-full`,
            "aria-live": `polite`,
            role: `status`,
            children: [i, (0, P.jsx)(L, { lines: r, minWidth: 42, maxWidth: 96, seed: a })],
          }),
        })),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function vt(e) {
  return Math.min(G, Math.max(nt, e.additions + e.deletions + 2 * tt));
}
function yt(e) {
  let t = (0, N.c)(15),
    { path: n } = e,
    r,
    i,
    a;
  t[0] === n
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : ((r = K.resolveIcon(`file-tree-icon-file`, n)),
      (a = `size-4 shrink-0`),
      (i = bt(r.token)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  let o;
  t[4] === i ? (o = t[5]) : ((o = { color: i }), (t[4] = i), (t[5] = o));
  let s = r.viewBox ?? `0 0 16 16`,
    c = `#${r.name}`,
    l;
  t[6] === c ? (l = t[7]) : ((l = (0, P.jsx)(`use`, { href: c })), (t[6] = c), (t[7] = l));
  let u;
  t[8] !== s || t[9] !== l
    ? ((u = (0, P.jsx)(`svg`, {
        "aria-hidden": !0,
        className: `size-4 shrink-0`,
        viewBox: s,
        children: l,
      })),
      (t[8] = s),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== a || t[12] !== o || t[13] !== u
      ? ((d = (0, P.jsx)(`span`, { className: a, style: o, children: u })),
        (t[11] = a),
        (t[12] = o),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function bt(e) {
  if (e == null) return `var(--color-token-text-tertiary)`;
  let t = at[e];
  return t == null
    ? `var(--color-token-text-tertiary)`
    : `var(--trees-file-icon-color-${e}, var(--trees-file-icon-color, ${it[t]}))`;
}
function xt(e) {
  let t = (0, N.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, P.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, P.jsx)(y, {
          id: `codex.review.diff.loadFailedAfterRetrying`,
          defaultMessage: `Diff failed to load after retrying`,
          description: `Placeholder text shown when a review file diff failed to load after automatic retries`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i =
        n == null
          ? null
          : (0, P.jsx)(ne, {
              className: `shrink-0`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: (0, P.jsx)(y, {
                id: `codex.common.retry`,
                defaultMessage: `Retry`,
                description: `Retry button`,
              }),
            })),
      (t[1] = n),
      (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, P.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-token-main-surface-primary px-3 py-4 text-sm`,
          children: [r, i],
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function St(e) {
  let t = (0, N.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, P.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, P.jsx)(y, {
          id: `codex.review.diff.fullContentLoadFailed`,
          defaultMessage: `Full file content failed to load`,
          description: `Inline notice shown when a partial diff could not be expanded to full file content`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, P.jsx)(y, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, P.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-token-main-surface-primary px-3 py-2 text-sm`,
          children: [
            r,
            (0, P.jsx)(ne, {
              className: `shrink-0`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function q(e) {
  let t = (0, N.c)(24),
    { disabled: n, variant: r, onFileAction: i, useMutedButtonStyle: a } = e,
    o = r === `staged` ? `unstage` : `stage`,
    s = a ? `text-token-text-tertiary hover:text-token-text-primary` : void 0,
    c = a ? `ghostMuted` : `ghost`,
    l = a ? `toolbar` : void 0,
    u = !a && `opacity-0 group-hover/file-diff:opacity-100`,
    d;
  t[0] === u ? (d = t[1]) : ((d = x(`flex items-center`, u)), (t[0] = u), (t[1] = d));
  let f;
  t[2] === i
    ? (f = t[3])
    : ((f = (e) => {
        (e.stopPropagation(), i?.(`revert`));
      }),
      (t[2] = i),
      (t[3] = f));
  let p;
  t[4] !== s || t[5] !== c || t[6] !== n || t[7] !== l || t[8] !== f
    ? ((p = (0, P.jsx)(U, {
        action: `revert`,
        className: s,
        color: c,
        disabled: n,
        size: l,
        scope: `file`,
        onClick: f,
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = n),
      (t[7] = l),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== o || t[11] !== i
    ? ((m = (e) => {
        (e.stopPropagation(), i?.(o));
      }),
      (t[10] = o),
      (t[11] = i),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== o || t[14] !== s || t[15] !== c || t[16] !== n || t[17] !== l || t[18] !== m
    ? ((h = (0, P.jsx)(U, {
        scope: `file`,
        action: o,
        className: s,
        color: c,
        disabled: n,
        size: l,
        onClick: m,
      })),
      (t[13] = o),
      (t[14] = s),
      (t[15] = c),
      (t[16] = n),
      (t[17] = l),
      (t[18] = m),
      (t[19] = h))
    : (h = t[19]);
  let g;
  return (
    t[20] !== d || t[21] !== p || t[22] !== h
      ? ((g = (0, P.jsxs)(`div`, { className: d, children: [p, h] })),
        (t[20] = d),
        (t[21] = p),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
function J(e) {
  let t = (0, N.c)(15),
    { path: n, hunkIndex: r, onHunkAction: i, variant: a } = e,
    o = a === `staged` ? `unstage` : `stage`,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, P.jsx)(U, {
        action: `revert`,
        scope: `hunk`,
        onClick: (e) => {
          (e.stopPropagation(), i?.({ path: n, hunkIndex: r, action: `revert`, scope: `hunk` }));
        },
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== o || t[5] !== r || t[6] !== i || t[7] !== n
    ? ((c = (e) => {
        (e.stopPropagation(), i?.({ path: n, hunkIndex: r, action: o, scope: `hunk` }));
      }),
      (t[4] = o),
      (t[5] = r),
      (t[6] = i),
      (t[7] = n),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] !== o || t[10] !== c
    ? ((l = (0, P.jsx)(U, { scope: `hunk`, action: o, onClick: c })),
      (t[9] = o),
      (t[10] = c),
      (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== s || t[13] !== l
      ? ((u = (0, P.jsxs)(`div`, {
          className: `pointer-events-none absolute -top-8.5 right-0.5 z-20 flex items-center gap-1 rounded-full bg-token-side-bar-background/90 px-0.5 py-0.5 opacity-0 shadow-sm ring-1 ring-token-border/60 transition-opacity group-hover/file-diff:pointer-events-auto group-hover/file-diff:opacity-100`,
          children: [s, l],
        })),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function Ct({ diff: e, openFilePath: t, cwd: n, hostId: r, hunkActionsVariant: i }) {
  let a = wt(
      i === `unstaged`
        ? { cwd: n, hostId: r, path: e.oldPath, ref: `index` }
        : { cwd: n, hostId: r, path: e.oldPath, ref: `head` },
    ),
    o = i === `staged` ? wt({ cwd: n, hostId: r, path: e.newPath, ref: `index` }) : Y(t, r);
  return !a && !o ? null : { before: a, after: o };
}
function wt({ cwd: e, hostId: t, path: n, ref: r }) {
  return !e || !n || n === `/dev/null` ? null : { kind: `git`, cwd: e, hostId: t, path: n, ref: r };
}
function Y(e, t) {
  return !e || e === `/dev/null` ? null : { kind: `worktree`, path: e, hostId: t };
}
function Tt(e, t, n) {
  let r = e.metadata.hunks.find((e) =>
    t === `additions`
      ? X(n, e.additionStart, e.additionCount)
      : X(n, e.deletionStart, e.deletionCount),
  );
  if (!r) return;
  let i = [
    Z(
      r.hunkSpecs ??
        `@@ -${r.deletionStart ?? 0},${r.deletionCount ?? 0} +${r.additionStart ?? 0},${r.additionCount ?? 0} @@`,
    ),
  ];
  for (let t of r.hunkContent) {
    if (t.type === `context`) {
      let n = e.metadata.additionLines.slice(t.additionLineIndex, t.additionLineIndex + t.lines);
      i.push(...n.map((e) => ` ${Z(e)}`));
      continue;
    }
    let n = e.metadata.deletionLines.slice(t.deletionLineIndex, t.deletionLineIndex + t.deletions),
      r = e.metadata.additionLines.slice(t.additionLineIndex, t.additionLineIndex + t.additions);
    i.push(...n.map((e) => `-${Z(e)}`), ...r.map((e) => `+${Z(e)}`));
  }
  return i.join(`
`);
}
function X(e, t, n) {
  return t == null || n == null ? !1 : e >= t && e < t + n;
}
function Z(e) {
  return e.replace(/\r?\n$/, ``);
}
var Q = (e) =>
    (0, P.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, P.jsx)(`rect`, {
          x: 3.5,
          y: 4.5,
          width: 17,
          height: 15,
          rx: 3,
          stroke: `currentColor`,
          strokeWidth: 2,
        }),
        (0, P.jsx)(`path`, {
          d: `M6 8C6 7.44772 6.44772 7 7 7H10.25C10.8023 7 11.25 7.44772 11.25 8V16C11.25 16.5523 10.8023 17 10.25 17H7C6.44772 17 6 16.5523 6 16V8Z`,
          fill: `#F84E63`,
          fillOpacity: 0.5,
        }),
        (0, P.jsx)(`path`, {
          d: `M12.75 8C12.75 7.44772 13.1977 7 13.75 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H13.75C13.1977 17 12.75 16.5523 12.75 16V8Z`,
          fill: `#36D958`,
          fillOpacity: 0.5,
        }),
      ],
    }),
  Et = (e) =>
    (0, P.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, P.jsx)(`rect`, {
          x: 3.5,
          y: 4.5,
          width: 17,
          height: 15,
          rx: 3,
          stroke: `currentColor`,
          strokeWidth: 2,
        }),
        (0, P.jsx)(`path`, {
          d: `M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V10.25C18 10.8023 17.5523 11.25 17 11.25H7C6.44772 11.25 6 10.8023 6 10.25V8Z`,
          fill: `#F84E63`,
          fillOpacity: 0.5,
        }),
        (0, P.jsx)(`path`, {
          d: `M6 13.75C6 13.1977 6.44772 12.75 7 12.75H17C17.5523 12.75 18 13.1977 18 13.75V16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16V13.75Z`,
          fill: `#36D958`,
          fillOpacity: 0.5,
        }),
      ],
    });
export { Re as a, $e as i, Q as n, Ie as o, ot as r, Le as s, Et as t };
//# sourceMappingURL=diff-unified.js.map
