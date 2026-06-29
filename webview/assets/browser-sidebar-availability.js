import { c as e, t } from "./app-scope-CWE-zIhQ.js";
import { j as n } from "./thread-context-inputs.js";
import { n as r } from "./experimental-features-queries.js";
var i = `in_app_browser`,
  a = e(t, ({ get: e }) => {
    let { data: t } = e(r, e(n)),
      a = t?.find((e) => e.name === i);
    return t != null && a?.enabled !== !1;
  });
export { a as t };
//# sourceMappingURL=browser-sidebar-availability.js.map
