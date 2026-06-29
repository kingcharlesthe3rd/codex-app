import { t as e } from "./jsx-runtime.js";
import { t } from "./clsx.js";
import { lt as n } from "./vscode-api.js";
import { c as r, o as i } from "./lib-2.js";
var a = n(),
  o = e(),
  s = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`],
  c = {
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
  };
function l(e) {
  let n = (0, a.c)(26),
    { linesAdded: s, linesRemoved: c, variant: l, className: u } = e,
    d = l === void 0 ? `color` : l,
    f = r(),
    p;
  n[0] === u
    ? (p = n[1])
    : ((p = t(
        `inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight`,
        u,
      )),
      (n[0] = u),
      (n[1] = p));
  let m =
      d === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-added-resource-foreground`,
    h;
  n[2] === m ? (h = n[3]) : ((h = t(`flex shrink-0 items-center`, m)), (n[2] = m), (n[3] = h));
  let g;
  n[4] !== f || n[5] !== s
    ? ((g = f.formatNumber(s)), (n[4] = f), (n[5] = s), (n[6] = g))
    : (g = n[6]);
  let _;
  n[7] === g
    ? (_ = n[8])
    : ((_ = (0, o.jsx)(i, {
        id: `wham.message.modal.repoAndDiffStats.linesAdded`,
        defaultMessage: `+{linesAdded}`,
        description: `Number of lines added`,
        values: { linesAdded: g },
      })),
      (n[7] = g),
      (n[8] = _));
  let v;
  n[9] !== h || n[10] !== _
    ? ((v = (0, o.jsx)(`span`, { className: h, children: _ })),
      (n[9] = h),
      (n[10] = _),
      (n[11] = v))
    : (v = n[11]);
  let y =
      d === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-deleted-resource-foreground`,
    b;
  n[12] === y ? (b = n[13]) : ((b = t(`flex shrink-0 items-center`, y)), (n[12] = y), (n[13] = b));
  let x;
  n[14] !== f || n[15] !== c
    ? ((x = f.formatNumber(c)), (n[14] = f), (n[15] = c), (n[16] = x))
    : (x = n[16]);
  let S;
  n[17] === x
    ? (S = n[18])
    : ((S = (0, o.jsx)(i, {
        id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
        defaultMessage: `-{linesRemoved}`,
        description: `Number of lines removed`,
        values: { linesRemoved: x },
      })),
      (n[17] = x),
      (n[18] = S));
  let C;
  n[19] !== S || n[20] !== b
    ? ((C = (0, o.jsx)(`span`, { className: b, children: S })),
      (n[19] = S),
      (n[20] = b),
      (n[21] = C))
    : (C = n[21]);
  let w;
  return (
    n[22] !== C || n[23] !== p || n[24] !== v
      ? ((w = (0, o.jsxs)(`span`, { "data-thread-find-skip": !0, className: p, children: [v, C] })),
        (n[22] = C),
        (n[23] = p),
        (n[24] = v),
        (n[25] = w))
      : (w = n[25]),
    w
  );
}
function u(e) {
  let n = (0, a.c)(20),
    { linesAdded: r, linesRemoved: s, variant: c, className: l } = e,
    u = c === void 0 ? `color` : c,
    f;
  n[0] === l
    ? (f = n[1])
    : ((f = t(
        `inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight`,
        l,
      )),
      (n[0] = l),
      (n[1] = f));
  let p =
      u === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-added-resource-foreground`,
    m;
  n[2] === p ? (m = n[3]) : ((m = t(`flex shrink-0 items-center`, p)), (n[2] = p), (n[3] = m));
  let h;
  n[4] === r
    ? (h = n[5])
    : ((h = (0, o.jsx)(i, {
        id: `wham.message.modal.repoAndDiffStats.linesAdded`,
        defaultMessage: `+{linesAdded}`,
        description: `Number of lines added`,
        values: { linesAdded: (0, o.jsx)(d, { value: r }, `linesAdded`) },
      })),
      (n[4] = r),
      (n[5] = h));
  let g;
  n[6] !== m || n[7] !== h
    ? ((g = (0, o.jsx)(`span`, { className: m, children: h })), (n[6] = m), (n[7] = h), (n[8] = g))
    : (g = n[8]);
  let _ =
      u === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-deleted-resource-foreground`,
    v;
  n[9] === _ ? (v = n[10]) : ((v = t(`flex shrink-0 items-center`, _)), (n[9] = _), (n[10] = v));
  let y;
  n[11] === s
    ? (y = n[12])
    : ((y = (0, o.jsx)(i, {
        id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
        defaultMessage: `-{linesRemoved}`,
        description: `Number of lines removed`,
        values: { linesRemoved: (0, o.jsx)(d, { value: s }, `linesRemoved`) },
      })),
      (n[11] = s),
      (n[12] = y));
  let b;
  n[13] !== v || n[14] !== y
    ? ((b = (0, o.jsx)(`span`, { className: v, children: y })),
      (n[13] = v),
      (n[14] = y),
      (n[15] = b))
    : (b = n[15]);
  let x;
  return (
    n[16] !== b || n[17] !== f || n[18] !== g
      ? ((x = (0, o.jsxs)(`span`, { "data-thread-find-skip": !0, className: f, children: [g, b] })),
        (n[16] = b),
        (n[17] = f),
        (n[18] = g),
        (n[19] = x))
      : (x = n[19]),
    x
  );
}
function d(e) {
  let t = (0, a.c)(4),
    { value: n, variant: i } = e,
    s = i === void 0 ? `diff-stat` : i,
    c = r(),
    l;
  if (t[0] !== c || t[1] !== n || t[2] !== s) {
    let e = c.formatNumber(n, { useGrouping: !1 }),
      r = Array.from(e),
      i = r.filter(m).length;
    ((l = (0, o.jsx)(`span`, {
      "aria-label": e,
      className: `diff-stat-rolling-number`,
      children: r.map((e, t) =>
        m(e)
          ? (--i, (0, o.jsx)(f, { digit: e, variant: s }, `digit-${i}`))
          : (0, o.jsx)(
              `span`,
              { "aria-hidden": `true`, className: `diff-stat-number-separator`, children: e },
              `separator-${t}`,
            ),
      ),
    })),
      (t[0] = c),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l));
  } else l = t[3];
  return l;
}
function f(e) {
  let n = (0, a.c)(12),
    { digit: r, variant: i } = e,
    l = c[r],
    u;
  n[0] === l ? (u = n[1]) : ((u = t(`diff-stat-digit-stack`, l)), (n[0] = l), (n[1] = u));
  let d;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = s.map(p)), (n[2] = d)) : (d = n[2]);
  let f;
  n[3] === u
    ? (f = n[4])
    : ((f = (0, o.jsx)(`span`, { className: u, children: d })), (n[3] = u), (n[4] = f));
  let m = f,
    h = i === `inline` && `diff-stat-digit-column-inline`,
    g;
  n[5] === h ? (g = n[6]) : ((g = t(`diff-stat-digit-column`, h)), (n[5] = h), (n[6] = g));
  let _;
  n[7] === m
    ? (_ = n[8])
    : ((_ = (0, o.jsx)(`span`, { className: `diff-stat-digit-clip`, children: m })),
      (n[7] = m),
      (n[8] = _));
  let v;
  return (
    n[9] !== g || n[10] !== _
      ? ((v = (0, o.jsx)(`span`, { "aria-hidden": `true`, className: g, children: _ })),
        (n[9] = g),
        (n[10] = _),
        (n[11] = v))
      : (v = n[11]),
    v
  );
}
function p(e) {
  return (0, o.jsx)(`span`, { children: e }, e);
}
function m(e) {
  return e >= `0` && e <= `9`;
}
export { d as n, l as r, u as t };
//# sourceMappingURL=diff-stats.js.map
