import { n as e } from "./rolldown-runtime.js";
import {
  EB as t,
  GP as n,
  HP as r,
  MA as i,
  NA as a,
  RV as o,
  _I as s,
  av as c,
  bB as l,
  bv as u,
  dI as d,
  gI as f,
  iF as p,
  jV as m,
  lv as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { d as g, f as _ } from "./app-initial~app-main~automations-page.js";
import { n as v, r as y } from "./use-hotkey-window-detail-layout.js";
import { n as b, t as x } from "./worktree-init-v2-page.js";
function S() {
  let e = (0, w.c)(8),
    { pendingWorktreeId: r } = u(),
    { data: i } = t(g),
    a = i == null || i.configuredHotkey != null,
    o;
  e[0] === a ? (o = e[1]) : ((o = s(a)), (e[0] = a), (e[1] = o));
  let c = o,
    l;
  if (
    (e[2] === r
      ? (l = e[3])
      : ((l =
          r == null
            ? null
            : {
                title: (0, T.jsx)(`span`, {
                  className: `max-w-full truncate`,
                  children: (0, T.jsx)(n, {
                    id: `worktreeInitV2.title`,
                    defaultMessage: `Creating worktree`,
                    description: `Title for the worktree init v2 page`,
                  }),
                }),
                mainWindowPath: f(r),
              }),
        (e[2] = r),
        (e[3] = l)),
    y(l),
    !r)
  ) {
    let t;
    return (
      e[4] === c
        ? (t = e[5])
        : ((t = (0, T.jsx)(h, { to: c, replace: !0 })), (e[4] = c), (e[5] = t)),
      t
    );
  }
  let p;
  return (
    e[6] === c
      ? (p = e[7])
      : ((p = (0, T.jsx)(x, { homePath: c, conversationPathBuilder: d, onConversationReady: C })),
        (e[6] = c),
        (e[7] = p)),
    p
  );
}
function C(e) {
  i.hotkeyWindowHotkeys?.open({ path: d(e) });
}
var w, T;
e(() => {
  ((w = o()), l(), p(), r(), c(), a(), b(), _(), v(), (T = m()));
})();
export { S as HotkeyWindowWorktreeInitPage };
//# sourceMappingURL=hotkey-window-worktree-init-page.js.map
