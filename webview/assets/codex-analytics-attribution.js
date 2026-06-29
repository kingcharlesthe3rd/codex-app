import { c as e } from "./app-scope.js";
import { q as t } from "./app-server-manager-signals.js";
import { t as n } from "./route-scope.js";
var r = e(n, ({ get: e, scope: n }) => {
  if (n.value.routeKind !== `local-thread`) return null;
  let r = e(t, n.value.conversationId);
  return r?.turnId == null ? null : { threadId: n.value.conversationId, turnId: r.turnId };
});
export { r as t };
//# sourceMappingURL=codex-analytics-attribution.js.map
