import { v as e } from "./app-server-manager-signals.js";
import { L as t, R as n, h as r } from "./vscode-api.js";
import { p as i } from "./statsig.js";
import { c as a } from "./config-queries.js";
import { n as o } from "./platform.js";
var s = n(r, (e, { get: t }) => {
    if (t(o) !== `macOS` || !t(i, `1304276663`)) return !1;
    let { data: n } = t(a, { hostId: e });
    return n != null && n.requirements?.allowAppshots !== !1;
  }),
  c = t(r, ({ get: t }) => t(s, t(e)));
export { s as n, c as t };
//# sourceMappingURL=appshot-availability.js.map
