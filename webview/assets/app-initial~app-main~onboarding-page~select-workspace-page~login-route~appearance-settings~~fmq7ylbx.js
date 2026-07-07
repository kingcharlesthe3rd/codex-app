import { n as e } from "./rolldown-runtime.js";
import {
  Tl as t,
  vl as n,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  G as r,
  W as i,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import { m as a, nx as o, p as s, rx as c } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  A as l,
  j as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  ht as d,
  mt as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
function p(e) {
  let t = (0, _.c)(6),
    { children: n, ariaLabel: r, className: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = o(
        `flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-token-border bg-token-surface-primary px-5 py-4`,
        i,
      )),
      (t[0] = i),
      (t[1] = a));
  let s;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((s = (0, v.jsx)(`div`, { className: a, role: `list`, "aria-label": r, children: n })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function m(e) {
  let t = (0, _.c)(45),
    {
      checkboxId: n,
      checked: r,
      disabled: i,
      onCheckedChange: a,
      control: s,
      label: c,
      description: l,
      leadingContent: u,
      trailingContent: d,
      trailingControl: p,
      controlPlacement: m,
      className: h,
      checkboxClassName: g,
      labelClassName: b,
      descriptionClassName: x,
      trailingClassName: S,
    } = e,
    C = i === void 0 ? !1 : i,
    w = m === void 0 ? `left` : m,
    T = g === void 0 ? y : g,
    E = s == null && n != null && r != null && a != null,
    D;
  t[0] !== T || t[1] !== n || t[2] !== r || t[3] !== s || t[4] !== C || t[5] !== a || t[6] !== E
    ? ((D = E
        ? (0, v.jsx)(f, {
            id: n,
            className: T,
            checked: r,
            disabled: C,
            onCheckedChange: (e) => {
              a(e);
            },
          })
        : s),
      (t[0] = T),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s),
      (t[4] = C),
      (t[5] = a),
      (t[6] = E),
      (t[7] = D))
    : (D = t[7]);
  let O = D,
    k;
  t[8] === h
    ? (k = t[9])
    : ((k = o(`relative flex items-start gap-2 last:border-b-0`, h)), (t[8] = h), (t[9] = k));
  let A;
  t[10] !== O || t[11] !== w
    ? ((A = w === `left` ? (0, v.jsx)(`div`, { children: O }) : null),
      (t[10] = O),
      (t[11] = w),
      (t[12] = A))
    : (A = t[12]);
  let j;
  t[13] === u
    ? (j = t[14])
    : ((j = u == null ? null : (0, v.jsx)(`div`, { children: u })), (t[13] = u), (t[14] = j));
  let M = E ? n : void 0,
    N;
  t[15] === b
    ? (N = t[16])
    : ((N = o(`truncate text-base leading-5 text-token-foreground`, b)), (t[15] = b), (t[16] = N));
  let P;
  t[17] !== c || t[18] !== N
    ? ((P = (0, v.jsx)(`div`, { className: N, children: c })),
      (t[17] = c),
      (t[18] = N),
      (t[19] = P))
    : (P = t[19]);
  let F;
  t[20] !== l || t[21] !== x
    ? ((F =
        l == null
          ? null
          : (0, v.jsx)(`div`, {
              className: o(`truncate text-xs leading-4 text-token-text-secondary`, x),
              children: l,
            })),
      (t[20] = l),
      (t[21] = x),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] !== P || t[24] !== F
    ? ((I = (0, v.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [P, F] })),
      (t[23] = P),
      (t[24] = F),
      (t[25] = I))
    : (I = t[25]);
  let L;
  t[26] !== S || t[27] !== d
    ? ((L =
        d == null
          ? null
          : (0, v.jsx)(`span`, {
              className: o(
                `max-w-[45%] shrink truncate text-right text-sm leading-5 text-token-description-foreground`,
                S,
              ),
              children: d,
            })),
      (t[26] = S),
      (t[27] = d),
      (t[28] = L))
    : (L = t[28]);
  let R;
  t[29] !== I || t[30] !== L || t[31] !== M
    ? ((R = (0, v.jsxs)(`label`, {
        className: `flex min-w-0 flex-1 items-start gap-2 text-left`,
        htmlFor: M,
        children: [I, L],
      })),
      (t[29] = I),
      (t[30] = L),
      (t[31] = M),
      (t[32] = R))
    : (R = t[32]);
  let z;
  t[33] === p
    ? (z = t[34])
    : ((z = p == null ? null : (0, v.jsx)(`div`, { children: p })), (t[33] = p), (t[34] = z));
  let B;
  t[35] !== O || t[36] !== w
    ? ((B = w === `right` ? (0, v.jsx)(`div`, { children: O }) : null),
      (t[35] = O),
      (t[36] = w),
      (t[37] = B))
    : (B = t[37]);
  let V;
  return (
    t[38] !== R || t[39] !== z || t[40] !== B || t[41] !== k || t[42] !== A || t[43] !== j
      ? ((V = (0, v.jsxs)(`div`, { className: k, role: `listitem`, children: [A, j, R, z, B] })),
        (t[38] = R),
        (t[39] = z),
        (t[40] = B),
        (t[41] = k),
        (t[42] = A),
        (t[43] = j),
        (t[44] = V))
      : (V = t[44]),
    V
  );
}
function h(e) {
  let t = (0, _.c)(21),
    {
      children: n,
      icon: r,
      title: i,
      subtitle: a,
      className: s,
      textClassName: c,
      titleClassName: l,
      subtitleClassName: u,
    } = e,
    d;
  t[0] === s
    ? (d = t[1])
    : ((d = o(`flex w-full flex-col items-center gap-6`, s)), (t[0] = s), (t[1] = d));
  let f = r ?? null,
    p;
  t[2] === c
    ? (p = t[3])
    : ((p = o(`flex w-full flex-col items-center text-center`, c)), (t[2] = c), (t[3] = p));
  let m;
  t[4] === l
    ? (m = t[5])
    : ((m = o(`text-heading-lg font-semibold text-token-foreground`, l)), (t[4] = l), (t[5] = m));
  let h;
  t[6] !== m || t[7] !== i
    ? ((h = (0, v.jsx)(`span`, { className: m, children: i })), (t[6] = m), (t[7] = i), (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== a || t[10] !== u
    ? ((g =
        a == null
          ? null
          : (0, v.jsx)(`span`, {
              className: o(`text-lg leading-6 text-token-description-foreground`, u),
              children: a,
            })),
      (t[9] = a),
      (t[10] = u),
      (t[11] = g))
    : (g = t[11]);
  let y;
  t[12] !== p || t[13] !== h || t[14] !== g
    ? ((y = (0, v.jsxs)(`div`, { className: p, children: [h, g] })),
      (t[12] = p),
      (t[13] = h),
      (t[14] = g),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== n || t[17] !== d || t[18] !== f || t[19] !== y
      ? ((b = (0, v.jsxs)(`div`, { className: d, children: [f, y, n] })),
        (t[16] = n),
        (t[17] = d),
        (t[18] = f),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
function g(e) {
  let t = (0, _.c)(16),
    { children: n, fullBleed: r, hideHeader: a, showBrandIcon: c } = e,
    l = r === void 0 ? !1 : r,
    d = a === void 0 ? !1 : a,
    f = c === void 0 ? !1 : c,
    { platform: p } = u(),
    m = !d && p !== `windows`,
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, v.jsx)(`div`, {
        className: `absolute inset-0 bg-token-bg-primary electron:bg-transparent`,
      })),
      (t[0] = h))
    : (h = t[0]);
  let g;
  t[1] !== m || t[2] !== f
    ? ((g =
        m && !f
          ? (0, v.jsx)(`div`, {
              className: `draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none`,
            })
          : null),
      (t[1] = m),
      (t[2] = f),
      (t[3] = g))
    : (g = t[3]);
  let y;
  t[4] === f
    ? (y = t[5])
    : ((y = f
        ? (0, v.jsx)(`div`, {
            className: `draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none`,
            children: (0, v.jsx)(s, {
              "aria-hidden": `true`,
              className: `pointer-events-none size-6 text-token-foreground`,
            }),
          })
        : null),
      (t[4] = f),
      (t[5] = y));
  let b;
  t[6] !== l || t[7] !== m
    ? ((b = l
        ? `fixed inset-0`
        : o(
            `fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8`,
            m ? `top-toolbar-sm pt-2` : `top-0 pt-8`,
          )),
      (t[6] = l),
      (t[7] = m),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] !== n || t[10] !== b
    ? ((x = (0, v.jsx)(`div`, { className: b, children: n })), (t[9] = n), (t[10] = b), (t[11] = x))
    : (x = t[11]);
  let S;
  return (
    t[12] !== g || t[13] !== y || t[14] !== x
      ? ((S = (0, v.jsxs)(`div`, {
          className: `fixed inset-0 overflow-hidden select-none`,
          children: [h, (0, v.jsxs)(i, { browser: !0, electron: !0, children: [g, y, x] })],
        })),
        (t[12] = g),
        (t[13] = y),
        (t[14] = x),
        (t[15] = S))
      : (S = t[15]),
    S
  );
}
var _,
  v,
  y,
  b = e(() => {
    ((_ = t()),
      c(),
      d(),
      r(),
      l(),
      a(),
      (v = n()),
      (y = `h-[18px] w-[18px] rounded-[3px] border-[1px]`));
  });
export { g as a, h as i, p as n, b as o, m as r, y as t };
//# sourceMappingURL=app-initial~app-main~onboarding-page~select-workspace-page~login-route~appearance-settings~~fmq7ylbx.js.map
