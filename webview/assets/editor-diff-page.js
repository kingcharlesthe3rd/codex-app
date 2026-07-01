import { n as e } from "./rolldown-runtime.js";
import {
  C_ as t,
  D_ as n,
  EB as r,
  GP as i,
  HP as a,
  Pf as o,
  Qj as s,
  RV as c,
  TB as l,
  av as u,
  bB as d,
  eM as f,
  fN as ee,
  gv as p,
  iF as m,
  jV as h,
  kf as te,
  lL as g,
  pN as _,
  qP as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  $S as y,
  Al as b,
  Dn as ne,
  Gf as x,
  Hf as S,
  Ml as C,
  Nl as w,
  On as T,
  QS as E,
  Uf as re,
  Wf as ie,
  cC as ae,
  eC as D,
  jl as O,
  sC as k,
} from "./app-initial~app-main~onboarding-page.js";
import {
  C as A,
  S as j,
  T as M,
  w as oe,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~coa484up.js";
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
  let n = (0, L.c)(61),
    { diffContent: a, conversationId: o } = e,
    c = l(t),
    u;
  n[0] === o
    ? (u = n[1])
    : ((u = { conversationId: o, enablePullRequestComments: !1 }), (n[0] = o), (n[1] = u));
  let { commentProps: d } = re(u),
    f;
  n[2] === a ? (f = n[3]) : ((f = ae(a)), (n[2] = a), (n[3] = f));
  let m = f,
    h;
  n[4] === m ? (h = n[5]) : ((h = ne(m)), (n[4] = m), (n[5] = h));
  let _ = h,
    y = r(E),
    b = r(D),
    x = v(),
    { data: S } = r(te),
    C = p().state?.cwd || S?.roots?.[0],
    { fileCount: w, linesAdded: T, linesDeleted: O } = _,
    k = w <= z && T + O <= B,
    A;
  n[6] === w
    ? (A = n[7])
    : ((A = (0, R.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, R.jsx)(i, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: w },
        }),
      })),
      (n[6] = w),
      (n[7] = A));
  let M;
  n[8] !== T || n[9] !== O
    ? ((M =
        (T > 0 || O > 0) &&
        (0, R.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, R.jsx)(`span`, {
              className: `text-token-charts-green`,
              children: (0, R.jsx)(i, {
                id: `codex.diffView.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                description: `Label for lines added in DiffView`,
                values: { linesAdded: T },
              }),
            }),
            (0, R.jsx)(`span`, {
              className: `text-token-charts-red`,
              children: (0, R.jsx)(i, {
                id: `codex.diffView.linesDeleted`,
                defaultMessage: `-{linesDeleted}`,
                description: `Label for lines deleted in DiffView`,
                values: { linesDeleted: O },
              }),
            }),
          ],
        })),
      (n[8] = T),
      (n[9] = O),
      (n[10] = M))
    : (M = n[10]);
  let N;
  n[11] !== A || n[12] !== M
    ? ((N = (0, R.jsxs)(`div`, { className: `flex items-center gap-2 text-sm`, children: [A, M] })),
      (n[11] = A),
      (n[12] = M),
      (n[13] = N))
    : (N = n[13]);
  let P;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { id: `left`, label: (0, R.jsx)(ce, { className: `icon-xs` }) }), (n[14] = P))
    : (P = n[14]);
  let F;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = [P, { id: `right`, label: (0, R.jsx)(le, { className: `icon-xs` }) }]), (n[15] = F))
    : (F = n[15]);
  let I = y === `unified` ? `left` : `right`,
    V;
  n[16] === c
    ? (V = n[17])
    : ((V = (e) => c.set(E, e === `left` ? `unified` : `split`)), (n[16] = c), (n[17] = V));
  let H;
  n[18] !== V || n[19] !== I
    ? ((H = (0, R.jsx)(se, { options: F, selectedId: I, onSelect: V, size: `toolbar` })),
      (n[18] = V),
      (n[19] = I),
      (n[20] = H))
    : (H = n[20]);
  let U;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, R.jsx)(i, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (n[21] = U))
    : (U = n[21]);
  let W;
  n[22] === x
    ? (W = n[23])
    : ((W = x.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (n[22] = x),
      (n[23] = W));
  let G = b ? `ghostActive` : `ghost`,
    K;
  n[24] !== b || n[25] !== c
    ? ((K = () => c.set(D, !b)), (n[24] = b), (n[25] = c), (n[26] = K))
    : (K = n[26]);
  let q;
  n[27] === b
    ? (q = n[28])
    : ((q = b
        ? (0, R.jsx)(oe, { className: `icon-xs text-token-description-foreground` })
        : (0, R.jsx)(j, { className: `icon-xs text-token-description-foreground` })),
      (n[27] = b),
      (n[28] = q));
  let J;
  n[29] !== b || n[30] !== W || n[31] !== G || n[32] !== K || n[33] !== q
    ? ((J = (0, R.jsx)(s, {
        tooltipContent: U,
        children: (0, R.jsx)(ee, {
          "aria-label": W,
          "aria-pressed": b,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (n[29] = b),
      (n[30] = W),
      (n[31] = G),
      (n[32] = K),
      (n[33] = q),
      (n[34] = J))
    : (J = n[34]);
  let Y;
  n[35] !== H || n[36] !== J
    ? ((Y = (0, R.jsxs)(`div`, { className: `flex items-center gap-1`, children: [H, J] })),
      (n[35] = H),
      (n[36] = J),
      (n[37] = Y))
    : (Y = n[37]);
  let X;
  n[38] !== Y || n[39] !== N
    ? ((X = (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [N, Y],
      })),
      (n[38] = Y),
      (n[39] = N),
      (n[40] = X))
    : (X = n[40]);
  let Z;
  if (
    n[41] !== d ||
    n[42] !== o ||
    n[43] !== C ||
    n[44] !== m ||
    n[45] !== y ||
    n[46] !== b ||
    n[47] !== k
  ) {
    let e;
    (n[49] !== d || n[50] !== o || n[51] !== C || n[52] !== y || n[53] !== b || n[54] !== k
      ? ((e = (e, t) =>
          (0, R.jsx)(
            ie,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: y,
              richPreviewEnabled: b,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: k,
              cwd: C == null ? void 0 : g(C),
              conversationId: o,
              fullContentNextFallbackToDisk: !0,
              ...d,
            },
            t,
          )),
        (n[49] = d),
        (n[50] = o),
        (n[51] = C),
        (n[52] = y),
        (n[53] = b),
        (n[54] = k),
        (n[55] = e))
      : (e = n[55]),
      (Z = m.map(e)),
      (n[41] = d),
      (n[42] = o),
      (n[43] = C),
      (n[44] = m),
      (n[45] = y),
      (n[46] = b),
      (n[47] = k),
      (n[48] = Z));
  } else Z = n[48];
  let Q;
  n[56] === Z
    ? (Q = n[57])
    : ((Q = (0, R.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (n[56] = Z),
      (n[57] = Q));
  let $;
  return (
    n[58] !== X || n[59] !== Q
      ? (($ = (0, R.jsxs)(`div`, { className: `flex h-full flex-col`, children: [X, Q] })),
        (n[58] = X),
        (n[59] = Q),
        (n[60] = $))
      : ($ = n[60]),
    $
  );
}
function I() {
  let e = (0, L.c)(11),
    t = v(),
    n = p(),
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
    ? ((r = (0, R.jsx)(i, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a = (0, R.jsx)(s, { tooltipContent: r, children: (0, R.jsx)(b, { className: n }) })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
function le(e) {
  let t = (0, L.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(i, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a = (0, R.jsx)(s, { tooltipContent: r, children: (0, R.jsx)(C, { className: n }) })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
var L, R, z, B;
e(() => {
  ((L = c()),
    d(),
    m(),
    a(),
    u(),
    _(),
    N(),
    f(),
    w(),
    O(),
    M(),
    A(),
    n(),
    o(),
    x(),
    T(),
    y(),
    k(),
    S(),
    (R = h()),
    (z = 25),
    (B = 2e3));
})();
export { P as EditorDiffPage };
//# sourceMappingURL=editor-diff-page.js.map
