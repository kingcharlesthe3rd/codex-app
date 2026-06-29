import { c as e } from "./app-scope-CWE-zIhQ.js";
import { st as t } from "./thread-context-inputs.js";
import { f as n } from "./persisted-signal.js";
var r = e(n, ({ get: e, scope: n }) => {
  if (n.value.routeKind !== `local-thread`) return null;
  let r = e(t, n.value.conversationId);
  return r?.turnId == null ? null : { threadId: n.value.conversationId, turnId: r.turnId };
});
export { r as t };
//# sourceMappingURL=codex-analytics-attribution.js.map
