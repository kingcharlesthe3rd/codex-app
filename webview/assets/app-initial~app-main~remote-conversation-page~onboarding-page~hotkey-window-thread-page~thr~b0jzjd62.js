import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  AV as r,
  Ar as i,
  CV as a,
  FN as o,
  GP as s,
  Gh as c,
  HP as l,
  IP as u,
  LP as d,
  Qh as f,
  Qi as p,
  RN as m,
  RO as h,
  RV as g,
  TB as _,
  TP as v,
  Wh as y,
  Xh as b,
  Yj as x,
  Zh as S,
  bB as C,
  fN as w,
  hN as T,
  iF as E,
  jV as D,
  lL as O,
  mN as k,
  mP as A,
  oP as j,
  pN as ee,
  qP as M,
  qj as te,
  wP as N,
  wr as P,
  xV as F,
  zO as I,
  zV as L,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function R(e) {
  let t = (0, z.c)(31),
    { cwd: n, hostConfig: i, onErrorMessage: s, showErrorToast: c } = e,
    l = c === void 0 ? !1 : c,
    d = _(u),
    p = r(),
    m = M(),
    h;
  t[0] === i ? (h = t[1]) : ((h = y(i)), (t[0] = i), (t[1] = h));
  let g = h,
    v = n ?? ``,
    b;
  t[2] !== g || t[3] !== v
    ? ((b = [`git`, `init-repo`, g, v]), (t[2] = g), (t[3] = v), (t[4] = b))
    : (b = t[4]);
  let S;
  t[5] !== n || t[6] !== i
    ? ((S = async () => {
        if (n == null) throw Error(`Missing git context`);
        await f(`git`).request({
          method: `git-init-repo`,
          params: { cwd: O(n), hostConfig: i, operationSource: `review_model` },
        });
      }),
      (t[5] = n),
      (t[6] = i),
      (t[7] = S))
    : (S = t[7]);
  let C;
  t[8] !== n || t[9] !== g || t[10] !== m || t[11] !== p || t[12] !== d
    ? ((C = async () => {
        d.get(x).success(
          m.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [p.invalidateQueries({ queryKey: o(`git-origins`) })];
        (n != null && e.push(p.invalidateQueries({ queryKey: [`git`, `metadata`, g, n] })),
          await Promise.all(e));
      }),
      (t[8] = n),
      (t[9] = g),
      (t[10] = m),
      (t[11] = p),
      (t[12] = d),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== m || t[15] !== s || t[16] !== d || t[17] !== l
    ? ((w = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (l &&
          d
            .get(x)
            .danger(
              m.formatMessage(
                {
                  id: `codex.review.noDiff.gitInit.error`,
                  defaultMessage: `Git init failed: {message}`,
                  description: `Error text shown when git initialization fails from the diff empty state`,
                },
                { message: t },
              ),
            ),
          s?.(t));
      }),
      (t[14] = m),
      (t[15] = s),
      (t[16] = d),
      (t[17] = l),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== b || t[20] !== S || t[21] !== C || t[22] !== w
    ? ((T = { mutationKey: b, mutationFn: S, onSuccess: C, onError: w }),
      (t[19] = b),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T))
    : (T = t[23]);
  let E = a(T),
    D;
  t[24] !== n || t[25] !== E
    ? ((D = async () => {
        if (!(n == null || E.isPending))
          try {
            await E.mutateAsync();
          } catch {
            return;
          }
      }),
      (t[24] = n),
      (t[25] = E),
      (t[26] = D))
    : (D = t[26]);
  let k = D,
    A = n != null,
    j;
  return (
    t[27] !== k || t[28] !== E.isPending || t[29] !== A
      ? ((j = {
          canCreateGitRepository: A,
          createGitRepository: k,
          isCreatingGitRepository: E.isPending,
        }),
        (t[27] = k),
        (t[28] = E.isPending),
        (t[29] = A),
        (t[30] = j))
      : (j = t[30]),
    j
  );
}
var z,
  ne = e(() => {
    ((z = g()), F(), C(), E(), l(), te(), b(), c(), d(), m(), S());
  });
function B(e) {
  let t = (0, U.c)(26),
    { linesAdded: n, linesRemoved: r, variant: i, className: a } = e,
    o = i === void 0 ? `color` : i,
    c = M(),
    l;
  t[0] === a
    ? (l = t[1])
    : ((l = N(
        `inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight`,
        a,
      )),
      (t[0] = a),
      (t[1] = l));
  let u =
      o === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-added-resource-foreground`,
    d;
  t[2] === u ? (d = t[3]) : ((d = N(`flex shrink-0 items-center`, u)), (t[2] = u), (t[3] = d));
  let f;
  t[4] !== c || t[5] !== n
    ? ((f = c.formatNumber(n)), (t[4] = c), (t[5] = n), (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === f
    ? (p = t[8])
    : ((p = (0, W.jsx)(s, {
        id: `wham.message.modal.repoAndDiffStats.linesAdded`,
        defaultMessage: `+{linesAdded}`,
        description: `Number of lines added`,
        values: { linesAdded: f },
      })),
      (t[7] = f),
      (t[8] = p));
  let m;
  t[9] !== d || t[10] !== p
    ? ((m = (0, W.jsx)(`span`, { className: d, children: p })),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h =
      o === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-deleted-resource-foreground`,
    g;
  t[12] === h ? (g = t[13]) : ((g = N(`flex shrink-0 items-center`, h)), (t[12] = h), (t[13] = g));
  let _;
  t[14] !== c || t[15] !== r
    ? ((_ = c.formatNumber(r)), (t[14] = c), (t[15] = r), (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === _
    ? (v = t[18])
    : ((v = (0, W.jsx)(s, {
        id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
        defaultMessage: `-{linesRemoved}`,
        description: `Number of lines removed`,
        values: { linesRemoved: _ },
      })),
      (t[17] = _),
      (t[18] = v));
  let y;
  t[19] !== v || t[20] !== g
    ? ((y = (0, W.jsx)(`span`, { className: g, children: v })),
      (t[19] = v),
      (t[20] = g),
      (t[21] = y))
    : (y = t[21]);
  let b;
  return (
    t[22] !== y || t[23] !== l || t[24] !== m
      ? ((b = (0, W.jsxs)(`span`, { "data-thread-find-skip": !0, className: l, children: [m, y] })),
        (t[22] = y),
        (t[23] = l),
        (t[24] = m),
        (t[25] = b))
      : (b = t[25]),
    b
  );
}
function re(e) {
  let t = (0, U.c)(20),
    { linesAdded: n, linesRemoved: r, variant: i, className: a } = e,
    o = i === void 0 ? `color` : i,
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = N(
        `inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight`,
        a,
      )),
      (t[0] = a),
      (t[1] = c));
  let l =
      o === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-added-resource-foreground`,
    u;
  t[2] === l ? (u = t[3]) : ((u = N(`flex shrink-0 items-center`, l)), (t[2] = l), (t[3] = u));
  let d;
  t[4] === n
    ? (d = t[5])
    : ((d = (0, W.jsx)(s, {
        id: `wham.message.modal.repoAndDiffStats.linesAdded`,
        defaultMessage: `+{linesAdded}`,
        description: `Number of lines added`,
        values: { linesAdded: (0, W.jsx)(V, { value: n }, `linesAdded`) },
      })),
      (t[4] = n),
      (t[5] = d));
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, W.jsx)(`span`, { className: u, children: d })), (t[6] = u), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p =
      o === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-deleted-resource-foreground`,
    m;
  t[9] === p ? (m = t[10]) : ((m = N(`flex shrink-0 items-center`, p)), (t[9] = p), (t[10] = m));
  let h;
  t[11] === r
    ? (h = t[12])
    : ((h = (0, W.jsx)(s, {
        id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
        defaultMessage: `-{linesRemoved}`,
        description: `Number of lines removed`,
        values: { linesRemoved: (0, W.jsx)(V, { value: r }, `linesRemoved`) },
      })),
      (t[11] = r),
      (t[12] = h));
  let g;
  t[13] !== m || t[14] !== h
    ? ((g = (0, W.jsx)(`span`, { className: m, children: h })),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== g || t[17] !== c || t[18] !== f
      ? ((_ = (0, W.jsxs)(`span`, { "data-thread-find-skip": !0, className: c, children: [f, g] })),
        (t[16] = g),
        (t[17] = c),
        (t[18] = f),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function V(e) {
  let t = (0, U.c)(4),
    { value: n, variant: r } = e,
    i = r === void 0 ? `diff-stat` : r,
    a = M(),
    o;
  if (t[0] !== a || t[1] !== n || t[2] !== i) {
    let e = a.formatNumber(n, { useGrouping: !1 }),
      r = Array.from(e),
      s = r.filter(H).length;
    ((o = (0, W.jsx)(`span`, {
      "aria-label": e,
      className: `diff-stat-rolling-number`,
      children: r.map((e, t) =>
        H(e)
          ? (--s, (0, W.jsx)(ie, { digit: e, variant: i }, `digit-${s}`))
          : (0, W.jsx)(
              `span`,
              { "aria-hidden": `true`, className: `diff-stat-number-separator`, children: e },
              `separator-${t}`,
            ),
      ),
    })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o));
  } else o = t[3];
  return o;
}
function ie(e) {
  let t = (0, U.c)(12),
    { digit: n, variant: r } = e,
    i = K[n],
    a;
  t[0] === i ? (a = t[1]) : ((a = N(`diff-stat-digit-stack`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = G.map(ae)), (t[2] = o)) : (o = t[2]);
  let s;
  t[3] === a
    ? (s = t[4])
    : ((s = (0, W.jsx)(`span`, { className: a, children: o })), (t[3] = a), (t[4] = s));
  let c = s,
    l = r === `inline` && `diff-stat-digit-column-inline`,
    u;
  t[5] === l ? (u = t[6]) : ((u = N(`diff-stat-digit-column`, l)), (t[5] = l), (t[6] = u));
  let d;
  t[7] === c
    ? (d = t[8])
    : ((d = (0, W.jsx)(`span`, { className: `diff-stat-digit-clip`, children: c })),
      (t[7] = c),
      (t[8] = d));
  let f;
  return (
    t[9] !== u || t[10] !== d
      ? ((f = (0, W.jsx)(`span`, { "aria-hidden": `true`, className: u, children: d })),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function ae(e) {
  return (0, W.jsx)(`span`, { children: e }, e);
}
function H(e) {
  return e >= `0` && e <= `9`;
}
var U,
  W,
  G,
  K,
  q = e(() => {
    ((U = g()),
      v(),
      l(),
      (W = D()),
      (G = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]),
      (K = {
        0: `diff-stat-digit-stack-0`,
        1: `diff-stat-digit-stack-1`,
        2: `diff-stat-digit-stack-2`,
        3: `diff-stat-digit-stack-3`,
        4: `diff-stat-digit-stack-4`,
        5: `diff-stat-digit-stack-5`,
        6: `diff-stat-digit-stack-6`,
        7: `diff-stat-digit-stack-7`,
        8: `diff-stat-digit-stack-8`,
        9: `diff-stat-digit-stack-9`,
      }));
  });
function oe(e) {
  let t = (0, X.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r ? (a = t[5]) : ((a = N(`gap-3`, r)), (t[4] = r), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, Q.jsx)(P, { ...i, className: a, children: n })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function se(e) {
  let t = (0, X.c)(13),
    { icon: n, isRefreshing: r, iconBackgroundTone: i, className: a } = e,
    o = r === void 0 ? !1 : r,
    s = i === void 0 ? `neutral` : i,
    c = `bg-token-editor-background`;
  (s === `success` && (c = `bg-token-charts-green/20`),
    s === `failure` && (c = `bg-token-charts-red/10`));
  let l;
  t[0] === a
    ? (l = t[1])
    : ((l = N(`flex items-start justify-between`, a)), (t[0] = a), (t[1] = l));
  let u;
  t[2] === c
    ? (u = t[3])
    : ((u = N(`flex h-9 w-9 items-center justify-center rounded-xl`, c)), (t[2] = c), (t[3] = u));
  let d;
  t[4] !== n || t[5] !== u
    ? ((d = (0, Q.jsx)(`span`, { className: u, children: n })), (t[4] = n), (t[5] = u), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === o
    ? (f = t[8])
    : ((f = o
        ? (0, Q.jsx)(k, { className: `icon-xs mt-0.5 text-token-description-foreground` })
        : null),
      (t[7] = o),
      (t[8] = f));
  let p;
  return (
    t[9] !== l || t[10] !== d || t[11] !== f
      ? ((p = (0, Q.jsxs)(`div`, { className: l, children: [d, f] })),
        (t[9] = l),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function ce(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = N(`text-token-foreground heading-dialog font-semibold`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Q.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function le(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = N(`text-token-description-foreground flex flex-col gap-3`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Q.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function ue(e) {
  let t = (0, X.c)(18),
    { left: n, right: r, className: i } = e,
    a,
    o,
    s,
    c,
    l;
  if (t[0] !== i || t[1] !== n || t[2] !== r) {
    let e = (t, n) => {
        if (!Z.isValidElement(t)) return t;
        if (t.type === w) {
          let e = t;
          return e.props.size == null ? Z.cloneElement(e, { size: n }) : e;
        }
        if (t.props.children == null) return t;
        let r = !1,
          i = Z.Children.map(t.props.children, (t) => {
            let i = e(t, n);
            return (i !== t && (r = !0), i);
          });
        if (!r) return t;
        let a = i;
        return (i != null && i.length === 1 && ([a] = i), Z.cloneElement(t, { children: a }));
      },
      u = (t) => {
        let i = e(n, t),
          a = e(r, t);
        return (0, Q.jsxs)(Q.Fragment, { children: [i ?? null, a] });
      };
    (t[8] === i
      ? (c = t[9])
      : ((c = N(`flex flex-1 items-center justify-between gap-2`, i)), (t[8] = i), (t[9] = c)),
      (l = (0, Q.jsx)(p, { electron: !0, children: u(`medium`) })),
      (a = p),
      (o = !0),
      (s = u(`toolbar`)),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  } else ((a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let u;
  t[10] !== a || t[11] !== o || t[12] !== s
    ? ((u = (0, Q.jsx)(a, { extension: o, children: s })),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== c || t[15] !== l || t[16] !== u
      ? ((d = (0, Q.jsxs)(`div`, { className: c, children: [l, u] })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function de(e) {
  let t = (0, X.c)(15),
    { left: n, label: r, right: i, className: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = N(`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`, a)),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = (0, Q.jsx)(`span`, { className: `min-w-0`, children: r })), (t[4] = r), (t[5] = c));
  let l;
  t[6] !== s || t[7] !== c
    ? ((l = (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [s, c] })),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === i ? (u = t[10]) : ((u = i ?? (0, Q.jsx)(`span`, {})), (t[9] = i), (t[10] = u));
  let d;
  return (
    t[11] !== o || t[12] !== l || t[13] !== u
      ? ((d = (0, Q.jsxs)(`div`, { className: o, children: [l, u] })),
        (t[11] = o),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function J(e) {
  let t = (0, X.c)(16),
    { left: n, label: r, value: i, valueClassName: a, className: o } = e,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = N(`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6`, o)),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, Q.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] !== r || t[5] !== c
    ? ((l = (0, Q.jsxs)(`span`, {
        className: `flex items-center gap-2 whitespace-nowrap`,
        children: [c, r],
      })),
      (t[4] = r),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === a ? (u = t[8]) : ((u = N(`min-w-0 truncate text-right`, a)), (t[7] = a), (t[8] = u));
  let d;
  t[9] !== u || t[10] !== i
    ? ((d = (0, Q.jsx)(`div`, { className: u, children: i })), (t[9] = u), (t[10] = i), (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== s || t[13] !== l || t[14] !== d
      ? ((f = (0, Q.jsxs)(`div`, { className: s, children: [l, d] })),
        (t[12] = s),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function fe(e) {
  let t = (0, X.c)(8),
    { children: n, ariaLabel: r, onClick: i, disabled: a, className: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = N(`rounded-lg p-2`, o)), (t[0] = o), (t[1] = s));
  let c;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== s
      ? ((c = (0, Q.jsx)(w, {
          color: `secondary`,
          size: `icon`,
          "aria-label": r,
          disabled: a,
          className: s,
          onClick: i,
          children: n,
        })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = i),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Y(e) {
  let t = (0, X.c)(19),
    { file: n, workspaceRoot: r } = e,
    i,
    a;
  if (t[0] !== n.path || t[1] !== r) {
    let e = h(n.path, r),
      o = e.split(`/`);
    ((i = o.pop() ?? e), (a = o.join(`/`)), (t[0] = n.path), (t[1] = r), (t[2] = i), (t[3] = a));
  } else ((i = t[2]), (a = t[3]));
  let o = a,
    s = n.additions ?? 0,
    c = n.deletions ?? 0,
    l = n.additions != null || n.deletions != null,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = (0, Q.jsx)(`span`, {
        className: `flex-shrink-0 font-medium text-token-foreground`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = u));
  let d;
  t[6] === o
    ? (d = t[7])
    : ((d =
        o.length > 0
          ? (0, Q.jsx)(`span`, {
              className: `min-w-0 truncate text-token-description-foreground`,
              children: o,
            })
          : null),
      (t[6] = o),
      (t[7] = d));
  let f;
  t[8] !== u || t[9] !== d
    ? ((f = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-baseline gap-2 whitespace-nowrap`,
        children: [u, d],
      })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== s || t[12] !== c || t[13] !== l
    ? ((p = l
        ? (0, Q.jsx)(B, { variant: `color`, linesAdded: s, linesRemoved: c })
        : (0, Q.jsx)(`span`, {})),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== n.path || t[16] !== f || t[17] !== p
      ? ((m = (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`,
          title: n.path,
          children: [f, p],
        })),
        (t[15] = n.path),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
function pe(e) {
  let t = (0, X.c)(15),
    { title: n, files: r, workspaceRoot: i, className: a } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = N(`flex flex-col gap-2`, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`div`, { className: `text-token-description-foreground`, children: n })),
      (t[2] = n),
      (t[3] = s));
  let c;
  if (t[4] !== r || t[5] !== i) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e) => (0, Q.jsx)(Y, { file: e, workspaceRoot: i }, e.path)), (t[7] = i), (t[8] = e)),
      (c = r.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c));
  } else c = t[6];
  let l;
  t[9] === c
    ? (l = t[10])
    : ((l = (0, Q.jsx)(`div`, { className: `flex flex-col gap-2`, children: c })),
      (t[9] = c),
      (t[10] = l));
  let u;
  return (
    t[11] !== o || t[12] !== s || t[13] !== l
      ? ((u = (0, Q.jsxs)(`div`, { className: o, children: [s, l] })),
        (t[11] = o),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function me(e) {
  let t = (0, X.c)(12),
    { expanded: n, children: r, className: i, scrollClassName: a } = e,
    o = n ? `open` : `collapsed`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { open: { height: `auto`, opacity: 1 }, collapsed: { height: 0, opacity: 0 } }),
      (t[0] = s))
    : (s = t[0]);
  let c, l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { duration: 0.25, ease: [0.16, 1, 0.3, 1] }),
      (l = { overflow: `hidden` }),
      (t[1] = c),
      (t[2] = l))
    : ((c = t[1]), (l = t[2]));
  let u;
  t[3] === a
    ? (u = t[4])
    : ((u = N(`vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]`, a)),
      (t[3] = a),
      (t[4] = u));
  let d;
  t[5] !== r || t[6] !== u
    ? ((d = (0, Q.jsx)(`div`, { className: u, children: r })), (t[5] = r), (t[6] = u), (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== i || t[9] !== o || t[10] !== d
      ? ((f = (0, Q.jsx)(A.div, {
          initial: !1,
          animate: o,
          variants: s,
          transition: c,
          style: l,
          className: i,
          children: d,
        })),
        (t[8] = i),
        (t[9] = o),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var X,
  Z,
  Q,
  $,
  he = e(() => {
    ((X = g()),
      v(),
      j(),
      (Z = t(L(), 1)),
      ee(),
      i(),
      T(),
      n(),
      q(),
      I(),
      (Q = D()),
      ($ = {
        Root: oe,
        Header: se,
        Title: ce,
        RowContainer: le,
        Footer: ue,
        Row: de,
        KeyValueRow: J,
        IconButton: fe,
        FileRow: Y,
        FileSection: pe,
        Expanded: me,
      }));
  });
export { B as a, R as c, V as i, he as n, q as o, re as r, ne as s, $ as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62.js.map
