import { n as e, s as t } from "./rolldown-runtime.js";
import {
  C_ as n,
  D_ as r,
  EB as i,
  TB as a,
  TP as o,
  bB as s,
  b_ as c,
  jV as l,
  rF as u,
  wP as d,
  y_ as f,
  zV as p,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Cd as m,
  Mw as h,
  Nw as g,
  _v as _,
  bC as v,
  bv as y,
  fv as b,
  gv as x,
  hv as S,
  lv as C,
  mv as w,
  pv as T,
  uv as E,
  vv as D,
  wd as O,
  yC as k,
  yv as A,
} from "./app-initial~app-main~onboarding-page.js";
function j({
  header: e,
  banner: t,
  children: n,
  className: r,
  bodyClassName: i,
  containerRef: a,
  tabIndex: o,
  ...s
}) {
  return (0, N.jsxs)(`div`, {
    ref: (0, M.useCallback)(
      (e) => {
        if (typeof a == `function`) {
          a(e);
          return;
        }
        a != null && (a.current = e);
      },
      [a],
    ),
    className: d(`relative flex h-full flex-col`, r),
    tabIndex: o,
    ...s,
    children: [
      (0, N.jsx)(`div`, { className: `sticky top-0 z-10`, children: e }),
      (0, N.jsx)(`div`, {
        className: d(`flex min-h-0 flex-1 flex-col`, i),
        children: (0, N.jsxs)(`div`, {
          className: `relative mx-auto flex min-h-0 w-full flex-1 flex-col`,
          children: [t, (0, N.jsx)(`div`, { className: `min-h-0 flex-1`, children: n })],
        }),
      }),
    ],
  });
}
var M,
  N,
  P,
  F,
  I = e(() => {
    (o(),
      (M = t(p(), 1)),
      (N = l()),
      (P = `px-toolbar`),
      (F = d(`mx-auto w-full max-w-(--thread-content-max-width)`, P)));
  });
function L({ children: e, onPointerDownOutside: t }) {
  let r = a(n),
    o = (0, z.useContext)(m),
    s = i(v.activeTab$),
    l = i(g),
    u = i(A),
    f = i(D),
    p = i(x),
    h = (0, z.useRef)(null),
    S = (0, z.useRef)(null),
    O = (0, z.useRef)(0),
    [k, j] = (0, z.useState)(102),
    M = t != null,
    N = !c(s) || !l || u,
    P = R(N, f),
    I = w(k),
    L = N ? I : 0,
    H = P !== `hidden`,
    U = P === `visible`,
    W = P === `entering` || P === `exiting`,
    G = W ? p : L;
  O.current = G;
  let K = (0, z.useEffectEvent)(() => {
      t?.();
    }),
    q = (0, z.useCallback)(() => {
      let e = h.current,
        t = Math.max(102, e?.offsetHeight ?? 0);
      j((e) => (e === t ? e : t));
      let n =
        o == null || e == null ? 0 : Math.max(0, o.offsetWidth - e.offsetLeft - e.offsetWidth);
      r.get(_) !== n && r.set(_, n);
    }, [o, r]);
  if (
    ((0, z.useLayoutEffect)(
      () => () => {
        (b(r), r.get(x) !== 0 && r.set(x, 0), r.get(_) !== 0 && r.set(_, 0));
      },
      [r],
    ),
    (0, z.useLayoutEffect)(() => {
      if (!H) {
        r.get(_) !== 0 && r.set(_, 0);
        return;
      }
      q();
      let e = h.current;
      if (e == null || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(q);
      return (
        t.observe(e),
        o != null && t.observe(o),
        () => {
          t.disconnect();
        }
      );
    }, [o, q, r, H]),
    (0, z.useLayoutEffect)(() => {
      if (!(!H || o == null))
        return (
          o.style.setProperty(C, `${k}px`),
          o.style.setProperty(E, `${O.current}px`),
          () => {
            (o.style.removeProperty(C), o.style.removeProperty(E));
          }
        );
    }, [o, k, H]),
    (0, z.useLayoutEffect)(() => {
      P === `entering` ? y(r, L, { direction: `enter`, shouldAnimate: !0 }) : W || y(r, L);
    }, [P, W, r, L]),
    (0, z.useLayoutEffect)(() => {
      !H || o == null || o.style.setProperty(E, `${G}px`);
    }, [o, H, G]),
    (0, z.useEffect)(() => {
      if (!M || !U) return;
      let e = (e) => {
        let t = e.target;
        t instanceof Node && (S.current?.contains(t) || K());
      };
      return (
        document.addEventListener(`pointerdown`, e, !0),
        () => {
          document.removeEventListener(`pointerdown`, e, !0);
        }
      );
    }, [M, U]),
    !H)
  )
    return null;
  let J = (0, V.jsx)(`div`, {
    "aria-hidden": !U,
    "data-testid": `right-panel-composer-overlay`,
    onAnimationEnd: (e) => {
      e.currentTarget === e.target && P === `entering` && T(r, `entering`);
    },
    onTransitionEnd: (e) => {
      e.currentTarget === e.target && P === `exiting` && T(r, `exiting`);
    },
    className: d(
      `pointer-events-none absolute inset-x-0 z-[42] transition-opacity duration-[120ms] motion-reduce:transition-none`,
      P === `entering` && `right-panel-composer-overlay-enter opacity-100`,
      P === `visible` && `opacity-100 ease-in`,
      P === `exiting` && `opacity-0 ease-out`,
    ),
    style: {
      bottom: `var(--app-shell-bottom-panel-height, 0px)`,
      transform: `translateY(calc(${I}px - var(${E}, 0px)))`,
    },
    children: (0, V.jsx)(`div`, {
      ref: h,
      "data-right-panel-composer-overlay-content": `true`,
      className: d(F, `pb-6`),
      children: (0, V.jsx)(`div`, {
        ref: S,
        className: U ? `pointer-events-auto` : `pointer-events-none`,
        children: e,
      }),
    }),
  });
  return o == null ? J : (0, B.createPortal)(J, o);
}
function R(e, t) {
  return e ? (t === `entering` ? `entering` : `visible`) : t === `exiting` ? `exiting` : `hidden`;
}
var z,
  B,
  V,
  H = e(() => {
    (o(), s(), (z = t(p(), 1)), (B = t(u(), 1)), O(), h(), k(), r(), S(), f(), I(), (V = l()));
  });
export { I as a, j as i, H as n, F as r, L as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page.js.map
