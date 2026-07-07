import { n as e, s as t } from "./rolldown-runtime.js";
import {
  At as n,
  El as r,
  Tl as i,
  kt as a,
  vl as o,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Xu as s, Zu as c } from "./app-initial~app-main~onboarding-page.js";
import {
  $ as l,
  tt as u,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Rs as d,
  Sx as f,
  Ws as p,
  Xy as m,
  Yy as h,
  vx as g,
  wx as _,
  yx as v,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { Rt as y, lt as b, ut as x, zt as S } from "./app-initial~app-main~automations-page.js";
import {
  F as C,
  P as w,
  Q as T,
  Z as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  d as D,
  u as O,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import { n as k, t as A } from "./use-hotkey-window-detail-layout.js";
import { n as j, t as M } from "./use-hotkey-window-dismiss-on-escape-DD3P--op.js";
function N(e) {
  let t = (0, L.c)(20),
    {
      title: n,
      onDismiss: r,
      showDismissButton: i,
      reserveWindowControlsSafeArea: a,
      rightActions: o,
    } = e,
    s = i === void 0 ? !0 : i,
    u = a === void 0 ? !1 : a,
    d = _(),
    p = c(),
    m = u ? p.left : 0,
    h = u ? p.right : 0,
    g = m + 12,
    v = h + 12,
    y = g + (s ? 52 : 0),
    b = v + 84,
    x;
  t[0] !== y || t[1] !== b
    ? ((x = { left: y, right: b }), (t[0] = y), (t[1] = b), (t[2] = x))
    : (x = t[2]);
  let S;
  t[3] !== x || t[4] !== n
    ? ((S = (0, R.jsx)(`div`, {
        className: `absolute inset-y-0 flex items-center justify-center text-base font-medium text-token-foreground/60 select-none`,
        style: x,
        children: n,
      })),
      (t[3] = x),
      (t[4] = n),
      (t[5] = S))
    : (S = t[5]);
  let C;
  t[6] !== d || t[7] !== g || t[8] !== r || t[9] !== s
    ? ((C = s
        ? (0, R.jsx)(`div`, {
            className: `absolute flex items-center gap-0`,
            style: { left: g },
            children: (0, R.jsx)(l, {
              tooltipContent: (0, R.jsx)(f, { ...z.dismiss }),
              delayOpen: !0,
              children: (0, R.jsx)(E, {
                size: `toolbar`,
                color: `ghost`,
                "aria-label": d.formatMessage(z.dismiss),
                onClick: r,
                children: (0, R.jsx)(w, { className: `icon-xs` }),
              }),
            }),
          })
        : null),
      (t[6] = d),
      (t[7] = g),
      (t[8] = r),
      (t[9] = s),
      (t[10] = C))
    : (C = t[10]);
  let T;
  t[11] === v ? (T = t[12]) : ((T = { right: v }), (t[11] = v), (t[12] = T));
  let D;
  t[13] !== o || t[14] !== T
    ? ((D = (0, R.jsx)(`div`, {
        className: `absolute flex items-center gap-0`,
        style: T,
        children: o,
      })),
      (t[13] = o),
      (t[14] = T),
      (t[15] = D))
    : (D = t[15]);
  let O;
  return (
    t[16] !== S || t[17] !== C || t[18] !== D
      ? ((O = (0, R.jsxs)(`div`, {
          className: `draggable relative flex h-toolbar-sm items-center justify-center px-3`,
          children: [S, C, D],
        })),
        (t[16] = S),
        (t[17] = C),
        (t[18] = D),
        (t[19] = O))
      : (O = t[19]),
    O
  );
}
function P(e) {
  let t = (0, L.c)(18),
    { title: r, mainWindowPath: i, canCollapseToHome: a } = e,
    o = a === void 0 ? !0 : a,
    s = _(),
    c;
  t[0] !== o || t[1] !== s
    ? ((c = o
        ? (0, R.jsx)(l, {
            tooltipContent: (0, R.jsx)(f, { ...z.newThread }),
            delayOpen: !0,
            children: (0, R.jsx)(E, {
              size: `toolbar`,
              color: `ghost`,
              "aria-label": s.formatMessage(z.newThread),
              onClick: F,
              children: (0, R.jsx)(O, { className: `icon-sm` }),
            }),
          })
        : null),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, R.jsx)(f, { ...z.openInMainWindow })), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === s ? (d = t[5]) : ((d = s.formatMessage(z.openInMainWindow)), (t[4] = s), (t[5] = d));
  let p;
  t[6] === i
    ? (p = t[7])
    : ((p = () => {
        n.dispatchMessage(`open-in-main-window`, { path: i });
      }),
      (t[6] = i),
      (t[7] = p));
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, R.jsx)(b, { className: `icon-sm` })), (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== d || t[10] !== p
    ? ((h = (0, R.jsx)(l, {
        tooltipContent: u,
        delayOpen: !0,
        children: (0, R.jsx)(E, {
          size: `toolbar`,
          color: `ghost`,
          "aria-label": d,
          onClick: p,
          children: m,
        }),
      })),
      (t[9] = d),
      (t[10] = p),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== c || t[13] !== h
    ? ((g = (0, R.jsxs)(R.Fragment, { children: [c, h] })), (t[12] = c), (t[13] = h), (t[14] = g))
    : (g = t[14]);
  let v;
  return (
    t[15] !== g || t[16] !== r
      ? ((v = (0, R.jsx)(N, { title: r, onDismiss: I, rightActions: g })),
        (t[15] = g),
        (t[16] = r),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
function F() {
  h.hotkeyWindowHotkeys?.collapseToHome();
}
function I() {
  h.hotkeyWindowHotkeys?.dismiss();
}
var L,
  R,
  z,
  B = e(() => {
    ((L = i()),
      v(),
      s(),
      T(),
      u(),
      D(),
      x(),
      C(),
      a(),
      m(),
      (R = o()),
      (z = g({
        dismiss: {
          id: `hotkeyWindow.dismiss`,
          defaultMessage: `Dismiss Popout Window`,
          description: `Tooltip label for dismissing the hotkey window`,
        },
        newThread: {
          id: `hotkeyWindow.threadPage.newButton`,
          defaultMessage: `Start New Chat`,
          description: `Tooltip label for the hotkey window header button that returns to hotkey window home`,
        },
        openInMainWindow: {
          id: `hotkeyWindow.threadPage.openInMainWindow`,
          defaultMessage: `Open in Main Window`,
          description: `Tooltip label for the hotkey window header button that opens the current page in the main app window`,
        },
      })));
  });
function V() {
  let e = (0, U.c)(7);
  j();
  let [t, n] = (0, W.useState)(null),
    r = t != null && t.canCollapseToHome !== !1,
    i;
  (e[0] === r
    ? (i = e[1])
    : ((i = { commandId: `newThread`, enabled: r, onKeyDown: H }), (e[0] = r), (e[1] = i)),
    S(i));
  let a;
  e[2] === t
    ? (a = e[3])
    : ((a =
        t == null
          ? null
          : (0, G.jsx)(P, {
              title: t.title,
              mainWindowPath: t.mainWindowPath,
              canCollapseToHome: t.canCollapseToHome !== !1,
            })),
      (e[2] = t),
      (e[3] = a));
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(`div`, { className: `min-h-0 flex-1`, children: (0, G.jsx)(p, {}) })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  return (
    e[5] === a
      ? (s = e[6])
      : ((s = (0, G.jsx)(A.Provider, {
          value: n,
          children: (0, G.jsxs)(`div`, {
            className: `flex h-full w-full flex-col overflow-hidden rounded-2xl border border-token-border-light bg-token-main-surface-primary`,
            children: [a, o],
          }),
        })),
        (e[5] = a),
        (e[6] = s)),
    s
  );
}
function H(e) {
  (e.preventDefault(), e.stopPropagation(), h.hotkeyWindowHotkeys?.collapseToHome());
}
var U, W, G;
e(() => {
  ((U = i()), (W = t(r(), 1)), d(), y(), m(), B(), k(), M(), (G = o()));
})();
export { V as HotkeyWindowDetailLayout };
//# sourceMappingURL=hotkey-window-detail-layout.js.map
