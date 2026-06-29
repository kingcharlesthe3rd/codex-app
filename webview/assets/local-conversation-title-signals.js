import { l as e, t } from "./app-scope.js";
import {
  Hi as n,
  St as r,
  Vi as i,
  bt as a,
  mt as o,
} from "./app-server-manager-signals.js";
var s = e(t, (e, { get: t }) => (e == null ? null : i({ id: e, title: t(a, e), turns: t(r, e) }))),
  c = e(t, (e, { get: t }) => (e == null ? null : (t(s, e) ?? n(e, t(r, t(o, e))))));
export { c as n, s as t };
//# sourceMappingURL=local-conversation-title-signals.js.map
