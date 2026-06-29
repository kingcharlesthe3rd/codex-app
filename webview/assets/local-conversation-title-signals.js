import { Ci as e, _t as t, dt as n, ht as r, wi as i } from "./app-server-manager-signals.js";
import { R as a, h as o } from "./vscode-api.js";
var s = a(o, (n, { get: i }) => (n == null ? null : e({ id: n, title: i(r, n), turns: i(t, n) }))),
  c = a(o, (e, { get: r }) => (e == null ? null : (r(s, e) ?? i(e, r(t, r(n, e))))));
export { c as n, s as t };
//# sourceMappingURL=local-conversation-title-signals.js.map
