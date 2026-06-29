import { n as e } from "./rolldown-runtime.js";
import {
  BP as t,
  BV as n,
  VP as r,
  qV as i,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function a({ onSelect: e, isDisabled: t = !1 }) {
  let n = t || e == null,
    r = (t) => {
      n || t.defaultPrevented || e?.();
    },
    i = (t) => {
      n ||
        t.defaultPrevented ||
        (t.currentTarget === t.target &&
          (t.key === `Enter` || t.key === ` `) &&
          (t.preventDefault(), e?.()));
    };
  return { role: `button`, tabIndex: n ? -1 : 0, "aria-disabled": n, onClick: r, onKeyDown: i };
}
var o = e(() => {});
function s(e) {
  let n = (0, c.c)(53),
    {
      ariaDescribedBy: r,
      ariaLabel: i,
      className: o,
      compactSecondLine: s,
      hasInteractiveContent: u,
      icon: d,
      isSelected: f,
      onSelect: p,
      onContextMenu: m,
      rightText: h,
      secondaryTitle: g,
      secondLine: _,
      secondLineRightText: v,
      title: y,
      titleAdornment: b,
    } = e,
    x = s === void 0 ? !1 : s,
    S = u === void 0 ? !1 : u,
    C;
  n[0] === p ? (C = n[1]) : ((C = { onSelect: p }), (n[0] = p), (n[1] = C));
  let w = a(C),
    T;
  n[2] === d
    ? (T = n[3])
    : ((T =
        d && (0, l.jsx)(`span`, { className: `flex min-h-6 shrink-0 items-center`, children: d })),
      (n[2] = d),
      (n[3] = T));
  let E = x ? `gap-0` : `gap-1`,
    D;
  n[4] === E ? (D = n[5]) : ((D = t(`flex min-w-0 flex-1 flex-col`, E)), (n[4] = E), (n[5] = D));
  let O;
  n[6] === y
    ? (O = n[7])
    : ((O = (0, l.jsx)(`span`, {
        className: `min-w-0 truncate text-token-foreground`,
        children: y,
      })),
      (n[6] = y),
      (n[7] = O));
  let k;
  n[8] === g
    ? (k = n[9])
    : ((k =
        g == null
          ? null
          : (0, l.jsx)(`span`, {
              className: `max-w-48 shrink-0 truncate text-token-description-foreground`,
              children: g,
            })),
      (n[8] = g),
      (n[9] = k));
  let A;
  n[10] === b
    ? (A = n[11])
    : ((A =
        b == null
          ? null
          : (0, l.jsx)(`span`, { className: `flex min-w-0 shrink self-center`, children: b })),
      (n[10] = b),
      (n[11] = A));
  let j;
  n[12] !== O || n[13] !== k || n[14] !== A
    ? ((j = (0, l.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 items-baseline gap-2 text-base leading-6`,
        children: [O, k, A],
      })),
      (n[12] = O),
      (n[13] = k),
      (n[14] = A),
      (n[15] = j))
    : (j = n[15]);
  let M;
  n[16] === h
    ? (M = n[17])
    : ((M =
        h == null
          ? null
          : (0, l.jsx)(`div`, {
              className: `flex min-h-6 shrink-0 items-center text-base text-token-description-foreground`,
              children: h,
            })),
      (n[16] = h),
      (n[17] = M));
  let N;
  n[18] !== j || n[19] !== M
    ? ((N = (0, l.jsxs)(`div`, {
        className: `flex min-w-0 items-baseline gap-3`,
        children: [j, M],
      })),
      (n[18] = j),
      (n[19] = M),
      (n[20] = N))
    : (N = n[20]);
  let P;
  n[21] !== _ || n[22] !== v
    ? ((P =
        _ &&
        (0, l.jsxs)(`div`, {
          className: `flex min-w-0 items-center justify-between gap-3 text-sm leading-[22px] text-token-description-foreground`,
          children: [
            (0, l.jsx)(`div`, { className: `min-w-0 flex-1`, children: _ }),
            v &&
              (0, l.jsx)(`div`, {
                className: `flex min-h-[22px] shrink-0 items-center`,
                children: v,
              }),
          ],
        })),
      (n[21] = _),
      (n[22] = v),
      (n[23] = P))
    : (P = n[23]);
  let F;
  n[24] !== N || n[25] !== P || n[26] !== D
    ? ((F = (0, l.jsxs)(`div`, { className: D, children: [N, P] })),
      (n[24] = N),
      (n[25] = P),
      (n[26] = D),
      (n[27] = F))
    : (F = n[27]);
  let I;
  n[28] !== F || n[29] !== T
    ? ((I = (0, l.jsxs)(`div`, { className: `flex min-w-0 items-start gap-2`, children: [T, F] })),
      (n[28] = F),
      (n[29] = T),
      (n[30] = I))
    : (I = n[30]);
  let L = I,
    R,
    z;
  if (
    n[31] !== r ||
    n[32] !== i ||
    n[33] !== o ||
    n[34] !== L ||
    n[35] !== S ||
    n[36] !== f ||
    n[37] !== m ||
    n[38] !== p
  ) {
    z = Symbol.for(`react.early_return_sentinel`);
    bb0: if (
      ((R = t(
        `group min-h-10 w-full cursor-interaction rounded-lg px-3 py-3 text-left text-base`,
        f
          ? `bg-token-list-active-selection-background`
          : `hover:bg-token-list-active-selection-background`,
        o,
      )),
      S)
    ) {
      let e;
      n[41] !== r || n[42] !== i || n[43] !== p
        ? ((e = (0, l.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:ring-token-border-focus absolute inset-0 cursor-interaction rounded-lg outline-none focus-visible:ring-2`,
            "aria-label": i,
            "aria-describedby": r,
            onClick: p,
          })),
          (n[41] = r),
          (n[42] = i),
          (n[43] = p),
          (n[44] = e))
        : (e = n[44]);
      let a;
      (n[45] === L
        ? (a = n[46])
        : ((a = (0, l.jsx)(`div`, { className: `pointer-events-none relative`, children: L })),
          (n[45] = L),
          (n[46] = a)),
        (z = (0, l.jsxs)(`div`, {
          className: t(`relative`, R),
          onContextMenu: m,
          children: [e, a],
        })));
      break bb0;
    }
    ((n[31] = r),
      (n[32] = i),
      (n[33] = o),
      (n[34] = L),
      (n[35] = S),
      (n[36] = f),
      (n[37] = m),
      (n[38] = p),
      (n[39] = R),
      (n[40] = z));
  } else ((R = n[39]), (z = n[40]));
  if (z !== Symbol.for(`react.early_return_sentinel`)) return z;
  let B;
  return (
    n[47] !== i || n[48] !== w || n[49] !== L || n[50] !== m || n[51] !== R
      ? ((B = (0, l.jsx)(`div`, {
          "aria-label": i,
          className: R,
          onContextMenu: m,
          ...w,
          children: L,
        })),
        (n[47] = i),
        (n[48] = w),
        (n[49] = L),
        (n[50] = m),
        (n[51] = R),
        (n[52] = B))
      : (B = n[52]),
    B
  );
}
var c,
  l,
  u = e(() => {
    ((c = i()), r(), o(), (l = n()));
  });
export { a as i, u as n, o as r, s as t };
//# sourceMappingURL=selectable-list-row.js.map
