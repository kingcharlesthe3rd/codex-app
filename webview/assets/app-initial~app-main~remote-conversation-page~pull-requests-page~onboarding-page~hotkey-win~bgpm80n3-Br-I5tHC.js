import { n as e } from "./rolldown-runtime.js";
import {
  BP as t,
  BV as n,
  VP as r,
  qV as i,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function a(e) {
  let n = (0, o.c)(66),
    r,
    i,
    a,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  n[0] === e
    ? ((r = n[1]),
      (i = n[2]),
      (a = n[3]),
      (c = n[4]),
      (l = n[5]),
      (u = n[6]),
      (d = n[7]),
      (f = n[8]),
      (p = n[9]),
      (m = n[10]),
      (h = n[11]),
      (g = n[12]),
      (_ = n[13]),
      (v = n[14]),
      (y = n[15]),
      (b = n[16]),
      (x = n[17]),
      (S = n[18]),
      (C = n[19]),
      (w = n[20]))
    : (({
        "aria-expanded": a,
        ariaExpanded: i,
        className: c,
        disabled: l,
        density: v,
        icon: u,
        interactive: y,
        label: d,
        labelClassName: f,
        ref: g,
        actions: r,
        actionsAlwaysFocusable: b,
        actionsVisible: x,
        trailing: w,
        trailingVisible: S,
        title: C,
        onClick: p,
        onKeyDown: m,
        onPointerDown: h,
        ..._
      } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = c),
      (n[5] = l),
      (n[6] = u),
      (n[7] = d),
      (n[8] = f),
      (n[9] = p),
      (n[10] = m),
      (n[11] = h),
      (n[12] = g),
      (n[13] = _),
      (n[14] = v),
      (n[15] = y),
      (n[16] = b),
      (n[17] = x),
      (n[18] = S),
      (n[19] = C),
      (n[20] = w));
  let ne = v === void 0 ? `compact` : v,
    T = y === void 0 ? !1 : y,
    E = b === void 0 ? !1 : b,
    D = x === void 0 ? !1 : x,
    O = S === void 0 ? !1 : S,
    k = p != null || h != null || m != null,
    A = !l && k,
    j = !l && (T || k),
    M = ne === `comfortable` ? `min-h-8 py-1.5` : `h-7 py-1`,
    N = j ? `cursor-interaction text-token-foreground` : `text-token-text-secondary`,
    P =
      j &&
      `before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-token-list-hover-background`,
    F = l && `cursor-not-allowed`,
    I;
  n[21] !== c || n[22] !== M || n[23] !== N || n[24] !== P || n[25] !== F
    ? ((I = t(
        `group/summary-panel-row relative isolate flex w-full min-w-0 items-center gap-2 rounded-sm border-0 bg-transparent px-0 text-left`,
        M,
        N,
        P,
        F,
        c,
      )),
      (n[21] = c),
      (n[22] = M),
      (n[23] = N),
      (n[24] = P),
      (n[25] = F),
      (n[26] = I))
    : (I = n[26]);
  let L = I,
    R = f ?? `truncate`,
    z;
  n[27] === R ? (z = n[28]) : ((z = t(`text-base`, R)), (n[27] = R), (n[28] = z));
  let B;
  n[29] !== d || n[30] !== z
    ? ((B = (0, s.jsx)(`span`, { className: z, children: d })),
      (n[29] = d),
      (n[30] = z),
      (n[31] = B))
    : (B = n[31]);
  let V;
  n[32] !== r || n[33] !== E || n[34] !== D
    ? ((V =
        r == null
          ? null
          : (0, s.jsx)(`span`, {
              className: t(
                `shrink-0 items-center`,
                (D || !E) && `ms-auto`,
                D
                  ? `flex`
                  : E
                    ? `pointer-events-none absolute inset-y-0 end-0 flex opacity-0 group-focus-within/summary-panel-row:pointer-events-auto group-focus-within/summary-panel-row:opacity-100 group-hover/summary-panel-row:pointer-events-auto group-hover/summary-panel-row:opacity-100`
                    : `hidden group-focus-within/summary-panel-row:flex group-hover/summary-panel-row:flex`,
              ),
              onClick: te,
              onKeyDown: ee,
              children: r,
            })),
      (n[32] = r),
      (n[33] = E),
      (n[34] = D),
      (n[35] = V))
    : (V = n[35]);
  let H;
  n[36] !== r || n[37] !== D || n[38] !== w || n[39] !== O
    ? ((H =
        w == null
          ? null
          : (0, s.jsx)(`span`, {
              className: t(
                `shrink-0 leading-none opacity-0 group-focus-visible/summary-panel-row:opacity-100 group-focus-within/summary-panel-row:opacity-100 group-hover/summary-panel-row:opacity-100`,
                (r == null || !D || O) && `ms-auto`,
                r != null &&
                  !D &&
                  `group-focus-within/summary-panel-row:ms-0 group-hover/summary-panel-row:ms-0`,
                O && `opacity-100`,
              ),
              children: w,
            })),
      (n[36] = r),
      (n[37] = D),
      (n[38] = w),
      (n[39] = O),
      (n[40] = H))
    : (H = n[40]);
  let U;
  n[41] !== B || n[42] !== V || n[43] !== H
    ? ((U = (0, s.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-center gap-2`,
        children: [B, V, H],
      })),
      (n[41] = B),
      (n[42] = V),
      (n[43] = H),
      (n[44] = U))
    : (U = n[44]);
  let W;
  n[45] !== u || n[46] !== U
    ? ((W = (0, s.jsxs)(s.Fragment, { children: [u, U] })), (n[45] = u), (n[46] = U), (n[47] = W))
    : (W = n[47]);
  let G = W,
    K = l || void 0,
    q = i ?? a,
    J = A ? p : void 0,
    Y;
  n[48] !== l || n[49] !== A || n[50] !== p || n[51] !== m
    ? ((Y = (e) => {
        (l || m?.(e),
          !(!A || p == null || e.defaultPrevented || (e.key !== `Enter` && e.key !== ` `)) &&
            (e.preventDefault(), e.currentTarget.click()));
      }),
      (n[48] = l),
      (n[49] = A),
      (n[50] = p),
      (n[51] = m),
      (n[52] = Y))
    : (Y = n[52]);
  let X = A ? h : void 0,
    Z = k ? `button` : void 0,
    Q = A ? 0 : void 0,
    $;
  return (
    n[53] !== L ||
    n[54] !== G ||
    n[55] !== g ||
    n[56] !== _ ||
    n[57] !== K ||
    n[58] !== q ||
    n[59] !== J ||
    n[60] !== Y ||
    n[61] !== X ||
    n[62] !== Z ||
    n[63] !== Q ||
    n[64] !== C
      ? (($ = (0, s.jsx)(`div`, {
          ..._,
          "aria-disabled": K,
          "aria-expanded": q,
          className: L,
          onClick: J,
          onKeyDown: Y,
          onPointerDown: X,
          ref: g,
          role: Z,
          tabIndex: Q,
          title: C,
          children: G,
        })),
        (n[53] = L),
        (n[54] = G),
        (n[55] = g),
        (n[56] = _),
        (n[57] = K),
        (n[58] = q),
        (n[59] = J),
        (n[60] = Y),
        (n[61] = X),
        (n[62] = Z),
        (n[63] = Q),
        (n[64] = C),
        (n[65] = $))
      : ($ = n[65]),
    $
  );
}
function ee(e) {
  return e.stopPropagation();
}
function te(e) {
  return e.stopPropagation();
}
var o,
  s,
  c = e(() => {
    ((o = i()), r(), (s = n()));
  });
export { c as n, a as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~bgpm80n3-Br-I5tHC.js.map
