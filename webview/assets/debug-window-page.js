import { n as e, s as t } from "./rolldown-runtime.js";
import {
  BV as n,
  Ga as r,
  JV as i,
  Wa as a,
  ZR as o,
  bF as s,
  bs as c,
  cP as l,
  mv as u,
  qV as d,
  uP as f,
  ys as p,
  yv as m,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import { n as h, r as g } from "./debug-modal-1.js";
function _() {
  let e = (0, y.c)(4),
    [t, n] = (0, b.useState)(null),
    r;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (e) => {
          let { conversationId: t } = e;
          n(t);
        }),
        (e[0] = r))
      : (r = e[0]),
    f(`debug-window-origin-conversation-changed`, r),
    !o.allowDebugMenu(p()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, x.jsx)(m, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let i;
  return (
    e[2] === t
      ? (i = e[3])
      : ((i = (0, x.jsx)(a, {
          electron: !0,
          children: (0, x.jsx)(`main`, {
            className: `h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground`,
            children: (0, x.jsx)(h, {
              conversationIdOverride: t,
              onClose: v,
              showHeader: !1,
              showPopOutButton: !1,
            }),
          }),
        })),
        (e[2] = t),
        (e[3] = i)),
    i
  );
}
function v() {
  return window.close();
}
var y, b, x;
e(() => {
  ((y = d()), s(), (b = t(i(), 1)), u(), r(), l(), c(), g(), (x = n()));
})();
export { _ as DebugWindowPage };
//# sourceMappingURL=debug-window-page.js.map
