import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  FR as r,
  Mo as i,
  Qi as a,
  RV as o,
  YN as s,
  av as c,
  iF as l,
  jV as u,
  jo as d,
  lv as f,
  qN as p,
  zV as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { n as h, r as g } from "./debug-modal.js";
function _() {
  let e = (0, y.c)(4),
    [t, n] = (0, b.useState)(null),
    i;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (e) => {
          let { conversationId: t } = e;
          n(t);
        }),
        (e[0] = i))
      : (i = e[0]),
    s(`debug-window-origin-conversation-changed`, i),
    !r.allowDebugMenu(d()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, x.jsx)(f, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let o;
  return (
    e[2] === t
      ? (o = e[3])
      : ((o = (0, x.jsx)(a, {
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
        (e[3] = o)),
    o
  );
}
function v() {
  return window.close();
}
var y, b, x;
e(() => {
  ((y = o()), l(), (b = t(m(), 1)), c(), n(), p(), i(), g(), (x = u()));
})();
export { _ as DebugWindowPage };
//# sourceMappingURL=debug-window-page.js.map
