import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  Wt as n,
  fr as r,
  pr as i,
  sc as a,
  sr as o,
  tc as s,
  xl as c,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Kl as l,
  Zl as u,
  aw as d,
  bS as f,
  cu as p,
  cw as m,
  yS as h,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { d as g, f as _ } from "./app-initial~app-main~automations-page.js";
import { n as v, r as y } from "./use-hotkey-window-detail-layout.js";
import { n as b, t as x } from "./worktree-init-v2-page-1.js";
function S() {
  let e = (0, w.c)(8),
    { pendingWorktreeId: t } = p(),
    { data: n } = a(g),
    s = n == null || n.configuredHotkey != null,
    c;
  e[0] === s ? (c = e[1]) : ((c = i(s)), (e[0] = s), (e[1] = c));
  let l = c,
    d;
  if (
    (e[2] === t
      ? (d = e[3])
      : ((d =
          t == null
            ? null
            : {
                title: (0, T.jsx)(`span`, {
                  className: `max-w-full truncate`,
                  children: (0, T.jsx)(m, {
                    id: `worktreeInitV2.title`,
                    defaultMessage: `Creating worktree`,
                    description: `Title for the worktree init v2 page`,
                  }),
                }),
                mainWindowPath: r(t),
              }),
        (e[2] = t),
        (e[3] = d)),
    y(d),
    !t)
  ) {
    let t;
    return (
      e[4] === l
        ? (t = e[5])
        : ((t = (0, T.jsx)(u, { to: l, replace: !0 })), (e[4] = l), (e[5] = t)),
      t
    );
  }
  let f;
  return (
    e[6] === l
      ? (f = e[7])
      : ((f = (0, T.jsx)(x, { homePath: l, conversationPathBuilder: o, onConversationReady: C })),
        (e[6] = l),
        (e[7] = f)),
    f
  );
}
function C(e) {
  h.hotkeyWindowHotkeys?.open({ path: o(e) });
}
var w, T;
e(() => {
  ((w = t()), s(), n(), d(), l(), f(), b(), _(), v(), (T = c()));
})();
export { S as HotkeyWindowWorktreeInitPage };
//# sourceMappingURL=hotkey-window-worktree-init-page.js.map
