import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Tl as r,
  vl as i,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  A as a,
  In as o,
  On as s,
  Rn as c,
  k as l,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import { nx as u, rx as d } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Gr as f,
  Wr as p,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
function m(e) {
  let t = (0, g.c)(60),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    d,
    f,
    m,
    h,
    y,
    b,
    x;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (d = t[9]),
      (f = t[10]),
      (m = t[11]),
      (h = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]))
    : (({
        icon: a,
        label: s,
        hideLabel: i,
        fullWidth: d,
        hoverBackground: f,
        onClick: c,
        isActive: m,
        disabled: h,
        className: r,
        weightClassName: x,
        iconClassName: y,
        trailing: b,
        interactiveTrailing: o,
        badge: n,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x));
  let S = d === void 0 ? !0 : d,
    C = f === void 0 ? !0 : f,
    w = m === void 0 ? !1 : m,
    T = h === void 0 ? !1 : h,
    E = y === void 0 ? `icon-xs` : y,
    D = typeof n == `number`,
    O = S ? `flex w-full` : `inline-flex w-auto`,
    k = w ? `bg-token-list-hover-background` : C && `hover:bg-token-list-hover-background`,
    A = D && `pr-10`,
    j;
  t[16] !== r || t[17] !== O || t[18] !== k || t[19] !== A || t[20] !== x
    ? ((j = u(
        `focus-visible:outline-token-border relative h-[var(--height-token-row)] px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y cursor-interaction shrink-0 items-center overflow-hidden rounded-[var(--radius-token-row)] text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-2`,
        O,
        k,
        A,
        x,
        r,
      )),
      (t[16] = r),
      (t[17] = O),
      (t[18] = k),
      (t[19] = A),
      (t[20] = x),
      (t[21] = j))
    : (j = t[21]);
  let M = j,
    N = S && `flex-1`,
    P = i !== void 0 && `min-h-6`,
    F = w ? `text-token-list-active-selection-foreground` : `text-token-foreground`,
    I;
  t[22] !== N || t[23] !== P || t[24] !== F
    ? ((I = u(`flex min-w-0 items-center text-base gap-2`, N, P, F)),
      (t[22] = N),
      (t[23] = P),
      (t[24] = F),
      (t[25] = I))
    : (I = t[25]);
  let L;
  t[26] !== a || t[27] !== E || t[28] !== w
    ? ((L = (0, _.isValidElement)(a)
        ? a
        : (0, _.createElement)(a, {
            className: u(E, w && `text-token-list-active-selection-icon-foreground`),
          })),
      (t[26] = a),
      (t[27] = E),
      (t[28] = w),
      (t[29] = L))
    : (L = t[29]);
  let R;
  t[30] !== i || t[31] !== s
    ? ((R = i ? null : (0, v.jsx)(`span`, { className: `truncate`, children: s })),
      (t[30] = i),
      (t[31] = s),
      (t[32] = R))
    : (R = t[32]);
  let z;
  t[33] !== I || t[34] !== L || t[35] !== R
    ? ((z = (0, v.jsxs)(`div`, { className: I, children: [L, R] })),
      (t[33] = I),
      (t[34] = L),
      (t[35] = R),
      (t[36] = z))
    : (z = t[36]);
  let B = z,
    V;
  t[37] !== n || t[38] !== D
    ? ((V = D
        ? (0, v.jsx)(p, {
            className: `disambiguated-digits absolute top-1/2 right-[var(--padding-row-cell-x,var(--padding-row-x))] -translate-y-1/2`,
            children: n,
          })
        : null),
      (t[37] = n),
      (t[38] = D),
      (t[39] = V))
    : (V = t[39]);
  let H = V;
  if (o != null) {
    let e = w ? `page` : void 0,
      n = l,
      r;
    t[40] !== B || t[41] !== T || t[42] !== c || t[43] !== e || t[44] !== n
      ? ((r = (0, v.jsx)(`button`, {
          type: `button`,
          className: `flex min-w-0 flex-1 cursor-interaction items-center text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border disabled:cursor-not-allowed`,
          onClick: c,
          "aria-current": e,
          disabled: T,
          ...n,
          children: B,
        })),
        (t[40] = B),
        (t[41] = T),
        (t[42] = c),
        (t[43] = e),
        (t[44] = n),
        (t[45] = r))
      : (r = t[45]);
    let i;
    return (
      t[46] !== H || t[47] !== M || t[48] !== o || t[49] !== r
        ? ((i = (0, v.jsxs)(`div`, { className: M, children: [r, o, H] })),
          (t[46] = H),
          (t[47] = M),
          (t[48] = o),
          (t[49] = r),
          (t[50] = i))
        : (i = t[50]),
      i
    );
  }
  let U = w ? `page` : void 0,
    W = l,
    G;
  return (
    t[51] !== H ||
    t[52] !== M ||
    t[53] !== B ||
    t[54] !== T ||
    t[55] !== c ||
    t[56] !== U ||
    t[57] !== W ||
    t[58] !== b
      ? ((G = (0, v.jsxs)(`button`, {
          type: `button`,
          className: M,
          onClick: c,
          "aria-current": U,
          disabled: T,
          ...W,
          children: [B, b, H],
        })),
        (t[51] = H),
        (t[52] = M),
        (t[53] = B),
        (t[54] = T),
        (t[55] = c),
        (t[56] = U),
        (t[57] = W),
        (t[58] = b),
        (t[59] = G))
      : (G = t[59]),
    G
  );
}
function h(e) {
  let t = (0, g.c)(18),
    {
      children: n,
      className: r,
      collapsed: i,
      title: a,
      titleActions: s,
      titleActionsOnHover: d,
      titleTrailing: f,
      titleRowClassName: p,
      titleClassName: m,
    } = e,
    h = d === void 0 ? !1 : d,
    _ = i == null && `gap-1`,
    y;
  t[0] !== r || t[1] !== _
    ? ((y = u(`flex flex-col`, _, r)), (t[0] = r), (t[1] = _), (t[2] = y))
    : (y = t[2]);
  let b;
  t[3] !== a || t[4] !== s || t[5] !== h || t[6] !== m || t[7] !== p || t[8] !== f
    ? ((b = a
        ? (0, v.jsxs)(`div`, {
            className: u(
              `group/nav-section-title flex items-center justify-between gap-2`,
              p ?? `pr-0.5 pl-2`,
            ),
            children: [
              (0, v.jsx)(`div`, {
                className: u(
                  `min-w-0 flex-1`,
                  m ?? `text-base text-token-input-placeholder-foreground opacity-75`,
                ),
                children: a,
              }),
              s != null || f != null
                ? (0, v.jsxs)(`div`, {
                    className: `flex shrink-0 items-center gap-1`,
                    children: [
                      s == null
                        ? null
                        : (0, v.jsx)(`div`, {
                            className: u(
                              `shrink-0`,
                              h &&
                                `pointer-events-none opacity-0 group-focus-within/nav-section-title:pointer-events-auto group-focus-within/nav-section-title:opacity-100 group-hover/nav-section-title:pointer-events-auto group-hover/nav-section-title:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
                            ),
                            children: s,
                          }),
                      f == null ? null : (0, v.jsx)(`div`, { className: `shrink-0`, children: f }),
                    ],
                  })
                : null,
            ],
          })
        : null),
      (t[3] = a),
      (t[4] = s),
      (t[5] = h),
      (t[6] = m),
      (t[7] = p),
      (t[8] = f),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== n || t[11] !== i || t[12] !== a
    ? ((x =
        i == null
          ? (0, v.jsx)(`div`, { className: `flex flex-col gap-px`, children: n })
          : (0, v.jsx)(c, {
              initial: !1,
              children: i
                ? null
                : (0, v.jsx)(o.div, {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: `auto`, opacity: 1, transitionEnd: { overflow: `visible` } },
                    exit: { height: 0, opacity: 0, overflow: `hidden` },
                    transition: l,
                    className: `overflow-hidden`,
                    children: (0, v.jsx)(`div`, {
                      className: u(`flex flex-col gap-px`, !!a && `pt-1`),
                      children: n,
                    }),
                  }),
            })),
      (t[10] = n),
      (t[11] = i),
      (t[12] = a),
      (t[13] = x))
    : (x = t[13]);
  let S;
  return (
    t[14] !== y || t[15] !== b || t[16] !== x
      ? ((S = (0, v.jsxs)(`div`, { className: y, children: [b, x] })),
        (t[14] = y),
        (t[15] = b),
        (t[16] = x),
        (t[17] = S))
      : (S = t[17]),
    S
  );
}
var g,
  _,
  v,
  y = e(() => {
    ((g = r()), d(), s(), (_ = t(n(), 1)), f(), a(), (v = i()));
  }),
  b,
  x,
  S = e(() => {
    (t(n()),
      (b = i()),
      (x = (e) =>
        (0, b.jsx)(`svg`, {
          width: 12,
          height: 12,
          viewBox: `0 0 12 12`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, b.jsx)(`path`, {
            d: `M3.75 3.63838L3.75 8.36129C3.75 8.85447 4.29447 9.15336 4.71055 8.88858L8.42137 6.52713C8.80732 6.28153 8.80732 5.71815 8.42137 5.47255L4.71055 3.11113C4.29447 2.84631 3.75 3.14518 3.75 3.63838Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  C,
  w = e(() => {
    C =
      (...e) =>
      (t) => {
        if (t == null) {
          e.forEach((e) => {
            if (typeof e == `function`) e(null);
            else if (e) {
              let t = e;
              t.current = null;
            }
          });
          return;
        }
        let n = [];
        if (
          (e.forEach((e) => {
            if (typeof e == `function`) {
              let r = e(t);
              typeof r == `function` ? n.push(r) : n.push(() => e(null));
            } else if (e) {
              let r = e;
              ((r.current = t),
                n.push(() => {
                  r.current = null;
                }));
            }
          }),
          n.length !== 0)
        )
          return () => {
            n.forEach((e) => e());
          };
      };
  });
export { m as a, S as i, C as n, h as o, x as r, y as s, w as t };
//# sourceMappingURL=app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel.js.map
