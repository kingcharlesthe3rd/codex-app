import { c as e, l as t, t as n } from "./app-scope.js";
import { v as r } from "./app-server-manager-signals.js";
import { f as i } from "./statsig-DoZ-0xit.js";
import { n as a } from "./platform.js";
import { c as o } from "./config-queries-BHYT-TjG.js";
var s = t(n, (e, { get: t }) => {
    if (t(a) !== `macOS` || !t(i, `1304276663`)) return !1;
    let { data: n } = t(o, { hostId: e });
    return n != null && n.requirements?.allowAppshots !== !1;
  }),
  c = e(n, ({ get: e }) => e(s, e(r)));
export { s as n, c as t };
//# sourceMappingURL=appshot-availability.js.map
