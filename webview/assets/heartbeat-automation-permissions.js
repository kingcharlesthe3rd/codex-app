import { l as e, t } from "./app-scope.js";
import { J as n, K as r } from "./app-server-manager-signals.js";
import { t as i } from "./persisted-signal.js";
var a = i(`heartbeat-thread-permissions-by-id`, {});
function o(e) {
  return e?.approvalPolicy == null || e.approvalsReviewer == null || e.sandboxPolicy == null
    ? null
    : {
        approvalPolicy: e.approvalPolicy,
        approvalsReviewer: e.approvalsReviewer,
        sandboxPolicy: e.sandboxPolicy,
      };
}
function s(e, t) {
  return o(t) ?? (e?.turnId == null || e.params.collaborationMode == null ? null : o(e.params));
}
function c(e, t, n) {
  return s(e, t) ?? n ?? null;
}
var l = e(t, (e, { get: t }) => {
  let i = s(t(n, e), t(r, e));
  return i == null ? null : JSON.stringify(i);
});
function u(e, t, n) {
  return n == null || JSON.stringify(e[t]) === JSON.stringify(n) ? e : { ...e, [t]: n };
}
export { l as a, a as i, s as n, c as r, u as t };
//# sourceMappingURL=heartbeat-automation-permissions.js.map
