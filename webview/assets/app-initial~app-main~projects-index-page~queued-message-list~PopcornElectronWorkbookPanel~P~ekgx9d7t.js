import { n as e, s as t } from "./rolldown-runtime.js";
import { kl as n } from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
function r() {
  var e = [...arguments];
  return (0, w.useMemo)(
    () => (t) => {
      e.forEach((e) => e(t));
    },
    e,
  );
}
function i(e) {
  let t = Object.prototype.toString.call(e);
  return t === `[object Window]` || t === `[object global]`;
}
function a(e) {
  return `nodeType` in e;
}
function o(e) {
  return e ? (i(e) ? e : a(e) ? (e.ownerDocument?.defaultView ?? window) : window) : window;
}
function s(e) {
  let { Document: t } = o(e);
  return e instanceof t;
}
function c(e) {
  return i(e) ? !1 : e instanceof o(e).HTMLElement;
}
function l(e) {
  return e instanceof o(e).SVGElement;
}
function u(e) {
  return e
    ? i(e)
      ? e.document
      : a(e)
        ? s(e)
          ? e
          : c(e) || l(e)
            ? e.ownerDocument
            : document
        : document
    : document;
}
function d(e) {
  let t = (0, w.useRef)(e);
  return (
    E(() => {
      t.current = e;
    }),
    (0, w.useCallback)(function () {
      var e = [...arguments];
      return t.current == null ? void 0 : t.current(...e);
    }, [])
  );
}
function f() {
  let e = (0, w.useRef)(null);
  return [
    (0, w.useCallback)((t, n) => {
      e.current = setInterval(t, n);
    }, []),
    (0, w.useCallback)(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []),
  ];
}
function p(e, t) {
  t === void 0 && (t = [e]);
  let n = (0, w.useRef)(e);
  return (
    E(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function m(e, t) {
  let n = (0, w.useRef)();
  return (0, w.useMemo)(() => {
    let t = e(n.current);
    return ((n.current = t), t);
  }, [...t]);
}
function h(e) {
  let t = d(e),
    n = (0, w.useRef)(null);
  return [
    n,
    (0, w.useCallback)((e) => {
      (e !== n.current && t?.(e, n.current), (n.current = e));
    }, []),
  ];
}
function g(e) {
  let t = (0, w.useRef)();
  return (
    (0, w.useEffect)(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
function _(e, t) {
  return (0, w.useMemo)(() => {
    if (t) return t;
    let n = D[e] == null ? 0 : D[e] + 1;
    return ((D[e] = n), e + `-` + n);
  }, [e, t]);
}
function v(e) {
  return function (t) {
    return [...arguments].slice(1).reduce(
      (t, n) => {
        let r = Object.entries(n);
        for (let [n, i] of r) {
          let r = t[n];
          r != null && (t[n] = r + e * i);
        }
        return t;
      },
      { ...t },
    );
  };
}
function y(e) {
  return `clientX` in e && `clientY` in e;
}
function b(e) {
  if (!e) return !1;
  let { KeyboardEvent: t } = o(e.target);
  return t && e instanceof t;
}
function x(e) {
  if (!e) return !1;
  let { TouchEvent: t } = o(e.target);
  return t && e instanceof t;
}
function S(e) {
  if (x(e)) {
    if (e.touches && e.touches.length) {
      let { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      let { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return y(e) ? { x: e.clientX, y: e.clientY } : null;
}
function C(e) {
  return e.matches(j) ? e : e.querySelector(j);
}
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M = e(() => {
    ((w = t(n())),
      (T =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0),
      (E = T ? w.useLayoutEffect : w.useEffect),
      (D = {}),
      (O = v(1)),
      (k = v(-1)),
      (A = Object.freeze({
        Translate: {
          toString(e) {
            if (!e) return;
            let { x: t, y: n } = e;
            return (
              `translate3d(` + (t ? Math.round(t) : 0) + `px, ` + (n ? Math.round(n) : 0) + `px, 0)`
            );
          },
        },
        Scale: {
          toString(e) {
            if (!e) return;
            let { scaleX: t, scaleY: n } = e;
            return `scaleX(` + t + `) scaleY(` + n + `)`;
          },
        },
        Transform: {
          toString(e) {
            if (e) return [A.Translate.toString(e), A.Scale.toString(e)].join(` `);
          },
        },
        Transition: {
          toString(e) {
            let { property: t, duration: n, easing: r } = e;
            return t + ` ` + n + `ms ` + r;
          },
        },
      })),
      (j = `a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`));
  });
function N(e, t, n) {
  let r = { ...e };
  return (
    t.top + e.y <= n.top
      ? (r.y = n.top - t.top)
      : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom),
    t.left + e.x <= n.left
      ? (r.x = n.left - t.left)
      : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right),
    r
  );
}
var P,
  F,
  I,
  L = e(() => {
    (M(),
      (P = (e) => {
        let { transform: t } = e;
        return { ...t, y: 0 };
      }),
      (F = (e) => {
        let { draggingNodeRect: t, transform: n, scrollableAncestorRects: r } = e,
          i = r[0];
        return !t || !i ? n : N(n, t, i);
      }),
      (I = (e) => {
        let { transform: t } = e;
        return { ...t, x: 0 };
      }));
  });
export {
  E as C,
  g as D,
  h as E,
  _ as O,
  f as S,
  m as T,
  l as _,
  A as a,
  r as b,
  C as c,
  o as d,
  M as f,
  a as g,
  b as h,
  I as i,
  S as l,
  c as m,
  F as n,
  O as o,
  s as p,
  P as r,
  T as s,
  L as t,
  u,
  i as v,
  p as w,
  d as x,
  k as y,
};
//# sourceMappingURL=app-initial~app-main~projects-index-page~queued-message-list~PopcornElectronWorkbookPanel~P~ekgx9d7t.js.map
