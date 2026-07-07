import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bt as n,
  El as r,
  Ka as i,
  Tl as a,
  jt as o,
  kt as s,
  vl as c,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  G as l,
  W as u,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import { Rs as d, Us as f } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Uo as p,
  Wo as m,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import { n as h, r as g } from "./debug-modal-2.js";
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
    o(`debug-window-origin-conversation-changed`, r),
    !i.allowDebugMenu(p()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, x.jsx)(f, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let a;
  return (
    e[2] === t
      ? (a = e[3])
      : ((a = (0, x.jsx)(u, {
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
        (e[3] = a)),
    a
  );
}
function v() {
  return window.close();
}
var y, b, x;
e(() => {
  ((y = a()), n(), (b = t(r(), 1)), d(), l(), s(), m(), g(), (x = c()));
})();
export { _ as DebugWindowPage };
//# sourceMappingURL=debug-window-page.js.map
