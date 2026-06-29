import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AP as n,
  BP as r,
  BV as i,
  EP as a,
  JV as o,
  Mj as s,
  Nj as c,
  Pj as l,
  SP as u,
  VP as d,
  bM as f,
  hj as ee,
  vj as p,
  xM as m,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Gn as h,
  Wn as g,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  l as _,
  r as te,
  t as v,
  u as y,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb.js";
import {
  r as b,
  t as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5.js";
import { n as S, t as ne } from "./thread-scroll-controller-context-value.js";
var C = e(() => {});
function w({
  contentX: e,
  children: t,
  footer: i,
  hasLiveMcpAppFrame: o = !1,
  onScroll: c,
  onUserScrollToTop: u,
  ref: d,
  initialOffset: f = 0,
  remoteHostedPIPAnchorHostId: p,
}) {
  let h = a(() => `${Math.abs(e?.get() ?? 0)}px`),
    v = (0, O.useRef)(null),
    [y, b] = (0, O.useState)(!1),
    S = (0, O.useRef)(null),
    C = (0, O.useRef)(f ?? 0),
    w = (0, O.useRef)(new Set()),
    j = (0, O.useRef)(new Set()),
    N = (0, O.useRef)(null),
    P = (0, O.useRef)(!1),
    F = (0, O.useRef)(!1),
    I = (0, O.useRef)(!1),
    L = (0, O.useRef)(null),
    R = (0, O.useRef)(null),
    z = (0, O.useContext)(g),
    ie = (0, O.useCallback)(
      (e) => {
        if (((v.current = e), !(e == null || z == null)))
          return z((t) => {
            F.current || T(e) || l(e, s(e) + t);
          });
      },
      [z],
    ),
    B = m(() => v.current),
    V = (0, O.useCallback)(() => C.current, []),
    H = m(
      (e) => (
        w.current.add(e),
        e(C.current),
        () => {
          w.current.delete(e);
        }
      ),
    ),
    U = m(
      (e) => (
        j.current.add(e),
        () => {
          j.current.delete(e);
        }
      ),
    ),
    W = m((e) => {
      C.current = e;
      let t = e <= 24;
      c?.(e, t);
      for (let t of w.current) t(e);
      b(!t);
    }),
    G = m(() => {
      ((F.current = !1),
        R.current != null && (window.cancelAnimationFrame(R.current), (R.current = null)));
    }),
    K = m(() => {
      ((F.current = !0),
        R.current != null && (window.cancelAnimationFrame(R.current), (R.current = null)));
    }),
    q = m(() => {
      L.current = null;
    }),
    J = m((e, t) => {
      let n = v.current;
      if (n == null) return;
      q();
      let r = Math.max(0, t(n));
      (n.scrollTo({ behavior: e, top: r === 0 ? 0 : -r }), W(r));
    }),
    Y = m((e, t) => {
      (e > 24 && G(), J(t, () => e));
    }),
    X = m((e) => {
      I.current = e;
    }),
    Z = m(() => {
      let e = v.current;
      if (e == null || L.current != null) return;
      let t = {
        distanceFromBottomPx: C.current,
        scrollHeightPx: e.scrollHeight,
        wheelDistanceFromBottomPx: 0,
      };
      ((L.current = t),
        window.requestAnimationFrame(() => {
          if (L.current === t) {
            if (v.current !== e) {
              q();
              return;
            }
            if (e.scrollHeight === t.scrollHeightPx) {
              q();
              return;
            }
            J(`instant`, () => t.distanceFromBottomPx + t.wheelDistanceFromBottomPx);
          }
        }));
    }),
    Q = m(async () => {
      if (!(P.current || u == null)) {
        P.current = !0;
        try {
          for (; v.current != null && E(v.current) && (await u()) !== `stop`; );
        } catch {
        } finally {
          P.current = !1;
        }
      }
    }),
    $ = m(() => {
      let e = v.current;
      if (e == null) return;
      q();
      let t = s(e);
      if (t <= 24) {
        (J(`instant`, () => 0), G());
        return;
      }
      K();
      let n = performance.now(),
        r = (e) => {
          let i = v.current;
          if (i == null) {
            G();
            return;
          }
          let a = Math.min(1, (e - n) / A);
          if ((l(i, t * (1 - (1 - (1 - a) ** 3))), a < 1 && !T(i))) {
            R.current = window.requestAnimationFrame(r);
            return;
          }
          (l(i, 0), G());
        };
      R.current = window.requestAnimationFrame(r);
    });
  ((0, O.useLayoutEffect)(() => {
    let e = v.current;
    if (e == null) return;
    let t = f ?? 0;
    (l(e, t), W(t));
  }, [f, W]),
    (0, O.useEffect)(() => {
      let e = v.current;
      if (e == null) return;
      let t = () => {
          let t = s(e);
          (t <= 24 && G(), W(t));
        },
        n = () => {
          let n = L.current;
          n != null &&
            e.scrollHeight !== n.scrollHeightPx &&
            (q(), l(e, n.distanceFromBottomPx + n.wheelDistanceFromBottomPx));
          let r = C.current,
            i = N.current;
          if (i == null) {
            t();
            return;
          }
          let a = performance.now();
          if (a - i > M) {
            ((N.current = null), t());
            return;
          }
          (t(), (N.current = a));
          let o = s(e);
          o > r && E(e) && Q();
          for (let e of j.current) e(o, r);
        },
        r = (t) => {
          let n = L.current;
          (n != null && `deltaY` in t
            ? (n.wheelDistanceFromBottomPx -= re(t, e.clientHeight))
            : q(),
            `deltaY` in t && t.deltaY < 0 && D(e) <= 0 && Q(),
            (N.current = performance.now()),
            G());
        };
      return (
        e.addEventListener(`pointerdown`, r, { passive: !0 }),
        e.addEventListener(`wheel`, r, { passive: !0 }),
        e.addEventListener(`scroll`, n, { passive: !0 }),
        () => {
          (e.removeEventListener(`pointerdown`, r),
            e.removeEventListener(`wheel`, r),
            e.removeEventListener(`scroll`, n));
        }
      );
    }, [q, G, Q, W]),
    (0, O.useEffect)(
      () => () => {
        G();
      },
      [G],
    ),
    (0, O.useImperativeHandle)(d, () => ({ scrollToBottom: $ })));
  let ae = (0, O.useMemo)(
      () => ({
        addScrollListener: H,
        addUserScrollListener: U,
        getLastScrollDistanceFromBottomPx: V,
        getScrollElement: B,
        isScrolledFromBottom: y,
        preserveScrollPositionForNextLayout: Z,
        scrollToBottom: $,
        scrollToDistanceFromBottomPx: Y,
        setFooterResizeViewportPreserveDisabled: X,
      }),
      [H, U, V, B, y, Z, $, Y, X],
    ),
    oe = te((e) => {
      let { height: t } = _(e),
        n = v.current;
      if (n == null) return;
      let r = S.current;
      r !== t &&
        (n.style.setProperty(`--thread-scroll-padding-bottom`, `${t + 16}px`),
        (S.current = t),
        !(F.current || I.current) && (r == null || T(n) || J(`instant`, (e) => s(e) + t - r)));
    }),
    se = e == null ? void 0 : { x: e, "--thread-wide-block-inline-shift": h };
  return (0, k.jsx)(ne, {
    value: ae,
    children: (0, k.jsx)(`div`, {
      className: r(
        `relative h-full flex-1`,
        o ? `[content-visibility:visible]` : `[content-visibility:auto]`,
      ),
      children: (0, k.jsx)(`div`, {
        ref: ie,
        "data-pip-anchor-host": p,
        ...ee.timelineScroll,
        tabIndex: 0,
        className: r(
          `thread-scroll-container relative h-full overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] electron:[scrollbar-gutter:stable_both-edges] pt-(--thread-content-top-inset) [container-name:thread-content] [container-type:inline-size]`,
          `focus:outline-none`,
          `[&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px]`,
          `flex flex-col-reverse`,
        ),
        children: (0, k.jsxs)(n.div, {
          style: se,
          className: `flex min-h-full shrink-0 flex-col justify-start`,
          children: [
            (0, k.jsx)(`div`, {
              "data-mcp-app-portal-target": `true`,
              className: r(x, `relative flex flex-1 shrink-0 flex-col pb-8`),
              children: t,
            }),
            i
              ? (0, k.jsxs)(`div`, {
                  "data-thread-scroll-footer": `true`,
                  ref: oe,
                  className: `sticky bottom-0 z-10 mt-auto w-full pb-4`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-full w-full justify-center pt-4`,
                      children: (0, k.jsx)(`div`, {
                        className: `z-0 h-full w-full bg-gradient-to-t from-token-main-surface-primary via-token-main-surface-primary extension:from-token-bg-primary extension:via-token-bg-primary`,
                      }),
                    }),
                    (0, k.jsx)(`div`, {
                      "data-pip-obstacle": `thread-footer`,
                      className: r(`relative z-10 flex flex-col`, x),
                      children: i,
                    }),
                  ],
                })
              : null,
          ],
        }),
      }),
    }),
  });
}
function T(e) {
  return s(e) <= 24;
}
function E(e) {
  return D(e) <= j;
}
function D(e) {
  return e.scrollHeight - e.clientHeight - s(e);
}
function re(e, t) {
  return e.deltaMode === P ? e.deltaY * N : e.deltaMode === F ? e.deltaY * t : e.deltaY;
}
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I = e(() => {
    (d(),
      u(),
      (O = t(o(), 1)),
      p(),
      h(),
      y(),
      v(),
      f(),
      C(),
      b(),
      S(),
      c(),
      (k = i()),
      (A = 260),
      (j = 64),
      (M = 1e3),
      (N = 16),
      (P = 1),
      (F = 2));
  });
export { I as n, C as r, w as t };
//# sourceMappingURL=thread-scroll-layout.js.map
