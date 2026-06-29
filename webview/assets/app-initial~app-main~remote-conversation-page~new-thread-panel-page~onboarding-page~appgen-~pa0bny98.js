import { n as e, s as t } from "./rolldown-runtime.js";
import {
  bt as n,
  yt as r,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import { Uc as i } from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  _b as a,
  gb as o,
  hb as s,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function c({
  browserTabId: e,
  browserConversationId: t,
  fallbackBrowserConversationId: r,
  comments: i,
  onCommentsChange: o,
}) {
  if (i.length === 0) return !1;
  o([]);
  let c = t ?? r,
    u = i.filter(a);
  if (c == null || u.length === 0) return !0;
  let d = (0, l.default)(u.map(s).filter((e) => e != null)),
    f = u.some((e) => s(e) == null);
  if ((e != null && f && !d.includes(e) && d.push(e), d.length === 0))
    return (
      n.dispatchMessage(`browser-sidebar-command`, {
        browserTabId: e ?? void 0,
        conversationId: c,
        command: { type: `clear-comments` },
      }),
      !0
    );
  for (let e of d)
    n.dispatchMessage(`browser-sidebar-command`, {
      browserTabId: e,
      conversationId: c,
      command: { type: `clear-comments` },
    });
  return !0;
}
var l,
  u,
  d = e(() => {
    ((l = t(i(), 1)), r(), o(), (u = { BROWSE: `browse`, COMMENT: `comment` }));
  });
export { c as n, d as r, u as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~pa0bny98.js.map
