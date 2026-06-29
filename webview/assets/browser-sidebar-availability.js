import { v as e } from "./app-server-manager-signals.js";
import { L as t, h as n } from "./vscode-api.js";
import { n as r } from "./experimental-features-queries.js";
var i = `in_app_browser`,
  a = t(n, ({ get: t }) => {
    let { data: n } = t(r, t(e)),
      a = n?.find((e) => e.name === i);
    return n != null && a?.enabled !== !1;
  });
export { a as t };
//# sourceMappingURL=browser-sidebar-availability.js.map
