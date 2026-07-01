import { n as e } from "./rolldown-runtime.js";
import {
  Gp as t,
  Hp as n,
  IP as r,
  LP as i,
  Up as a,
  bB as o,
  em as s,
  gp as c,
  nV as l,
  vp as u,
  yp as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  n as f,
  t as p,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq.js";
function m({
  hasConversation: e,
  hostId: t,
  latestTurnId: n,
  latestTurnStatus: r,
  pendingRequestType: i,
  resumeState: a,
}) {
  return e
    ? t == null || !f(t)
      ? { isEligible: !1, reason: `unsupported_host` }
      : a === `resuming` || (a !== `resumed` && n == null)
        ? { isEligible: !1, reason: `resuming` }
        : i === `userInput`
          ? { isEligible: !1, reason: `waiting_on_user_input` }
          : i === `approval` || i === `mcpServerElicitation`
            ? { isEligible: !1, reason: `waiting_on_approval` }
            : i == null
              ? r == null
                ? { isEligible: !1, reason: `missing_turn` }
                : r === `inProgress`
                  ? { isEligible: !1, reason: `turn_in_progress` }
                  : { isEligible: !0, reason: null }
              : { isEligible: !1, reason: `pending_request` }
    : { isEligible: !1, reason: `missing_conversation` };
}
var h,
  g,
  _ = e(() => {
    (o(),
      d(),
      i(),
      p(),
      (h = l(r, (e, { get: n }) => n(t, e)?.type ?? null)),
      (g = l(r, (e, { get: t }) =>
        m({
          hasConversation: t(c, e),
          hostId: t(u, e),
          latestTurnId: t(n, e),
          latestTurnStatus: t(a, e),
          pendingRequestType: t(h, e),
          resumeState: t(s, e),
        }),
      )));
  });
export { _ as n, g as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3.js.map
