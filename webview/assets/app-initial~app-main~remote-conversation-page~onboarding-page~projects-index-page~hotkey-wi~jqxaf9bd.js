import { n as e } from "./rolldown-runtime.js";
import {
  $c as t,
  Ht as n,
  Ut as r,
  tc as i,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
function a(e, t, n) {
  let r = { conversationId: n.conversationId, hostId: t };
  switch (n.kind) {
    case `removed`:
      e.get(o, r)?.requestId === n.requestId && e.set(o, r, null);
      break;
    case `updated`:
      e.set(o, r, { requestId: n.requestId, resolutionState: n.resolutionState });
      break;
  }
}
var o,
  s = e(() => {
    (i(),
      r(),
      (o = t(n, (e) => null, void 0, {
        key: ({ conversationId: e, hostId: t }) => JSON.stringify([t, e]),
      })));
  }),
  c,
  l = e(() => {
    c = 6e4;
  });
export { o as a, s as i, l as n, a as r, c as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~jqxaf9bd.js.map
