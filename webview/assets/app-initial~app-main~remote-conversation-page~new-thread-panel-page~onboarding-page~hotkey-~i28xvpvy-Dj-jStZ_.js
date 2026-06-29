import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  Wt as n,
  ho as r,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Kl as i,
  au as a,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function o() {
  let e = (0, s.c)(2),
    t = a(`/local/:conversationId`),
    n = a(`/remote/:conversationId`),
    i = a(`/hotkey-window/thread/:conversationId`),
    o = t?.params.conversationId ?? n?.params.conversationId ?? i?.params.conversationId,
    c;
  return (e[0] === o ? (c = e[1]) : ((c = o ? r(o) : null), (e[0] = o), (e[1] = c)), c);
}
var s,
  c = e(() => {
    ((s = t()), n(), i());
  });
export { o as n, c as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~hotkey-~i28xvpvy-Dj-jStZ_.js.map
