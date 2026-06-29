import { n as e } from "./rolldown-runtime.js";
import {
  AB as t,
  AI as n,
  Av as r,
  BV as i,
  DL as a,
  FB as o,
  IB as s,
  I_ as c,
  M_ as l,
  Op as u,
  PB as d,
  PI as f,
  bF as p,
  gp as m,
  iF as h,
  lF as g,
  mv as _,
  qV as v,
  yv as y,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Gl as b,
  Wl as x,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  en as S,
  tn as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  n as w,
  r as T,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu.js";
import { n as E, r as D } from "./use-hotkey-window-detail-layout.js";
import { i as O, n as k, r as A, t as j } from "./local-conversation-stream-role-product-event.js";
import { D as M, E as N, a as P, i as F } from "./local-conversation-thread.js";
function I() {
  let e = (0, L.c)(20),
    t = o(l),
    i = g(),
    { conversationId: c } = r(),
    { data: u } = s(w),
    p = u == null || u.configuredHotkey != null,
    h;
  e[0] === p ? (h = e[1]) : ((h = f(p)), (e[0] = p), (e[1] = h));
  let _ = h,
    v = d(b, c ?? null),
    x = d(m, c ?? null),
    C;
  e[2] === x ? (C = e[3]) : ((C = S(x ? a(x) : null)), (e[2] = x), (e[3] = C));
  let T = C;
  M(t);
  let E;
  if (
    (e[4] !== c || e[5] !== i || e[6] !== T || e[7] !== v
      ? ((E =
          c == null
            ? null
            : {
                title: (0, R.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, R.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-token-foreground`,
                      children:
                        v ??
                        i.formatMessage({
                          id: `hotkeyWindow.defaultTitle`,
                          defaultMessage: `Codex`,
                          description: `Fallback title for hotkey window thread header`,
                        }),
                    }),
                    T == null
                      ? null
                      : (0, R.jsx)(`div`, {
                          className: `flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground`,
                          children: (0, R.jsx)(`span`, { className: `truncate`, children: T }),
                        }),
                  ],
                }),
                mainWindowPath: n(c),
              }),
        (e[4] = c),
        (e[5] = i),
        (e[6] = T),
        (e[7] = v),
        (e[8] = E))
      : (E = e[8]),
    D(E),
    !c)
  ) {
    let t;
    return (
      e[9] === _
        ? (t = e[10])
        : ((t = (0, R.jsx)(y, { to: _, replace: !0 })), (e[9] = _), (e[10] = t)),
      t
    );
  }
  let O, k;
  e[11] === c
    ? ((O = e[12]), (k = e[13]))
    : ((O = (0, R.jsx)(j, { conversationId: c })),
      (k = (0, R.jsx)(A, { conversationId: c })),
      (e[11] = c),
      (e[12] = O),
      (e[13] = k));
  let N;
  e[14] === c
    ? (N = e[15])
    : ((N = (0, R.jsx)(`div`, {
        className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
        children: (0, R.jsx)(F, {
          conversationId: c,
          allowMissingConversation: !0,
          showExternalFooter: !0,
        }),
      })),
      (e[14] = c),
      (e[15] = N));
  let P;
  return (
    e[16] !== O || e[17] !== k || e[18] !== N
      ? ((P = (0, R.jsxs)(R.Fragment, { children: [O, k, N] })),
        (e[16] = O),
        (e[17] = k),
        (e[18] = N),
        (e[19] = P))
      : (P = e[19]),
    P
  );
}
var L, R;
e(() => {
  ((L = v()), t(), p(), h(), _(), u(), O(), k(), P(), x(), c(), C(), N(), T(), E(), (R = i()));
})();
export { I as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page.js.map
