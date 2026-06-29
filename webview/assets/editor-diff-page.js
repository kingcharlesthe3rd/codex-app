import { n as e } from "./rolldown-runtime.js";
import {
  AB as t,
  BV as n,
  DL as r,
  DN as i,
  Ev as a,
  FB as o,
  IB as s,
  I_ as c,
  M_ as ee,
  ON as l,
  Rf as te,
  Uf as u,
  bF as d,
  hM as f,
  iF as p,
  lF as m,
  mv as h,
  pM as g,
  qV as _,
  sF as v,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Al as y,
  Ml as b,
  Nl as x,
  di as ne,
  ui as S,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  Ca as C,
  Sa as re,
  ba as ie,
  xa as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Kn as ae,
  gl as T,
  hl as E,
  hu as D,
  ml as O,
  mu as k,
  pl as A,
  qn as j,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  i as oe,
  r as M,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281.js";
import { n as N, t as se } from "./segmented-toggle.js";
function P() {
  let e = (0, L.c)(5),
    t = I();
  if (`error` in t) {
    let n;
    return (
      e[0] === t.error
        ? (n = e[1])
        : ((n = (0, R.jsx)(`div`, {
            className: `p-4 text-token-error-foreground`,
            children: t.error,
          })),
          (e[0] = t.error),
          (e[1] = n)),
      n
    );
  }
  let n;
  return (
    e[2] !== t.conversationId || e[3] !== t.diffContent
      ? ((n = (0, R.jsx)(F, { diffContent: t.diffContent, conversationId: t.conversationId })),
        (e[2] = t.conversationId),
        (e[3] = t.diffContent),
        (e[4] = n))
      : (n = e[4]),
    n
  );
}
function F(e) {
  let t = (0, L.c)(61),
    { diffContent: n, conversationId: c } = e,
    l = o(ee),
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = { conversationId: c, enablePullRequestComments: !1 }), (t[0] = c), (t[1] = u));
  let { commentProps: d } = ne(u),
    f;
  t[2] === n ? (f = t[3]) : ((f = oe(n)), (t[2] = n), (t[3] = f));
  let p = f,
    h;
  t[4] === p ? (h = t[5]) : ((h = ae(p)), (t[4] = p), (t[5] = h));
  let _ = h,
    b = s(y),
    S = s(x),
    C = m(),
    { data: w } = s(te),
    T = a().state?.cwd || w?.roots?.[0],
    { fileCount: E, linesAdded: D, linesDeleted: O } = _,
    A = E <= z && D + O <= B,
    j;
  t[6] === E
    ? (j = t[7])
    : ((j = (0, R.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, R.jsx)(v, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: E },
        }),
      })),
      (t[6] = E),
      (t[7] = j));
  let M;
  t[8] !== D || t[9] !== O
    ? ((M =
        (D > 0 || O > 0) &&
        (0, R.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, R.jsx)(`span`, {
              className: `text-token-charts-green`,
              children: (0, R.jsx)(v, {
                id: `codex.diffView.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                description: `Label for lines added in DiffView`,
                values: { linesAdded: D },
              }),
            }),
            (0, R.jsx)(`span`, {
              className: `text-token-charts-red`,
              children: (0, R.jsx)(v, {
                id: `codex.diffView.linesDeleted`,
                defaultMessage: `-{linesDeleted}`,
                description: `Label for lines deleted in DiffView`,
                values: { linesDeleted: O },
              }),
            }),
          ],
        })),
      (t[8] = D),
      (t[9] = O),
      (t[10] = M))
    : (M = t[10]);
  let N;
  t[11] !== j || t[12] !== M
    ? ((N = (0, R.jsxs)(`div`, { className: `flex items-center gap-2 text-sm`, children: [j, M] })),
      (t[11] = j),
      (t[12] = M),
      (t[13] = N))
    : (N = t[13]);
  let P;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { id: `left`, label: (0, R.jsx)(ce, { className: `icon-xs` }) }), (t[14] = P))
    : (P = t[14]);
  let F;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = [P, { id: `right`, label: (0, R.jsx)(le, { className: `icon-xs` }) }]), (t[15] = F))
    : (F = t[15]);
  let I = b === `unified` ? `left` : `right`,
    V;
  t[16] === l
    ? (V = t[17])
    : ((V = (e) => l.set(y, e === `left` ? `unified` : `split`)), (t[16] = l), (t[17] = V));
  let H;
  t[18] !== V || t[19] !== I
    ? ((H = (0, R.jsx)(se, { options: F, selectedId: I, onSelect: V, size: `toolbar` })),
      (t[18] = V),
      (t[19] = I),
      (t[20] = H))
    : (H = t[20]);
  let U;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, R.jsx)(v, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (t[21] = U))
    : (U = t[21]);
  let W;
  t[22] === C
    ? (W = t[23])
    : ((W = C.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (t[22] = C),
      (t[23] = W));
  let G = S ? `ghostActive` : `ghost`,
    K;
  t[24] !== S || t[25] !== l
    ? ((K = () => l.set(x, !S)), (t[24] = S), (t[25] = l), (t[26] = K))
    : (K = t[26]);
  let q;
  t[27] === S
    ? (q = t[28])
    : ((q = S
        ? (0, R.jsx)(re, { className: `icon-xs text-token-description-foreground` })
        : (0, R.jsx)(ie, { className: `icon-xs text-token-description-foreground` })),
      (t[27] = S),
      (t[28] = q));
  let J;
  t[29] !== S || t[30] !== W || t[31] !== G || t[32] !== K || t[33] !== q
    ? ((J = (0, R.jsx)(g, {
        tooltipContent: U,
        children: (0, R.jsx)(i, {
          "aria-label": W,
          "aria-pressed": S,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (t[29] = S),
      (t[30] = W),
      (t[31] = G),
      (t[32] = K),
      (t[33] = q),
      (t[34] = J))
    : (J = t[34]);
  let Y;
  t[35] !== H || t[36] !== J
    ? ((Y = (0, R.jsxs)(`div`, { className: `flex items-center gap-1`, children: [H, J] })),
      (t[35] = H),
      (t[36] = J),
      (t[37] = Y))
    : (Y = t[37]);
  let X;
  t[38] !== Y || t[39] !== N
    ? ((X = (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [N, Y],
      })),
      (t[38] = Y),
      (t[39] = N),
      (t[40] = X))
    : (X = t[40]);
  let Z;
  if (
    t[41] !== d ||
    t[42] !== c ||
    t[43] !== T ||
    t[44] !== p ||
    t[45] !== b ||
    t[46] !== S ||
    t[47] !== A
  ) {
    let e;
    (t[49] !== d || t[50] !== c || t[51] !== T || t[52] !== b || t[53] !== S || t[54] !== A
      ? ((e = (e, t) =>
          (0, R.jsx)(
            k,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: b,
              richPreviewEnabled: S,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: A,
              cwd: T == null ? void 0 : r(T),
              conversationId: c,
              fullContentNextFallbackToDisk: !0,
              ...d,
            },
            t,
          )),
        (t[49] = d),
        (t[50] = c),
        (t[51] = T),
        (t[52] = b),
        (t[53] = S),
        (t[54] = A),
        (t[55] = e))
      : (e = t[55]),
      (Z = p.map(e)),
      (t[41] = d),
      (t[42] = c),
      (t[43] = T),
      (t[44] = p),
      (t[45] = b),
      (t[46] = S),
      (t[47] = A),
      (t[48] = Z));
  } else Z = t[48];
  let Q;
  t[56] === Z
    ? (Q = t[57])
    : ((Q = (0, R.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (t[56] = Z),
      (t[57] = Q));
  let $;
  return (
    t[58] !== X || t[59] !== Q
      ? (($ = (0, R.jsxs)(`div`, { className: `flex h-full flex-col`, children: [X, Q] })),
        (t[58] = X),
        (t[59] = Q),
        (t[60] = $))
      : ($ = t[60]),
    $
  );
}
function I() {
  let e = (0, L.c)(11),
    t = m(),
    n = a(),
    r;
  bb0: {
    let i = n.state;
    if (i?.unifiedDiff && i.conversationId)
      try {
        let t = i.conversationId ?? null,
          n;
        (e[0] !== i.unifiedDiff || e[1] !== t
          ? ((n = { diffContent: i.unifiedDiff, conversationId: t }),
            (e[0] = i.unifiedDiff),
            (e[1] = t),
            (e[2] = n))
          : (n = e[2]),
          (r = n));
        break bb0;
      } catch {
        let n;
        e[3] === t
          ? (n = e[4])
          : ((n = t.formatMessage({
              id: `codex.diffView.failedToDecodeBase64Diff`,
              defaultMessage: `Couldn’t load this diff`,
              description: `Error message displayed when the diff cannot be decoded`,
            })),
            (e[3] = t),
            (e[4] = n));
        let i;
        (e[5] === n ? (i = e[6]) : ((i = { error: n }), (e[5] = n), (e[6] = i)), (r = i));
        break bb0;
      }
    let a;
    e[7] === t
      ? (a = e[8])
      : ((a = t.formatMessage({
          id: `codex.diffView.noDiffData`,
          defaultMessage: `No diff available`,
          description: `Error message displayed when there is no diff data`,
        })),
        (e[7] = t),
        (e[8] = a));
    let o;
    (e[9] === a ? (o = e[10]) : ((o = { error: a }), (e[9] = a), (e[10] = o)), (r = o));
  }
  return r;
}
function ce(e) {
  let t = (0, L.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(v, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, R.jsx)(g, { tooltipContent: r, children: (0, R.jsx)(A, { className: n }) })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function le(e) {
  let t = (0, L.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(v, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, R.jsx)(g, { tooltipContent: r, children: (0, R.jsx)(E, { className: n }) })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var L, R, z, B;
e(() => {
  ((L = _()),
    t(),
    d(),
    p(),
    h(),
    l(),
    N(),
    f(),
    T(),
    O(),
    C(),
    w(),
    c(),
    u(),
    D(),
    j(),
    b(),
    M(),
    S(),
    (R = n()),
    (z = 25),
    (B = 2e3));
})();
export { P as EditorDiffPage };
//# sourceMappingURL=editor-diff-page.js.map
