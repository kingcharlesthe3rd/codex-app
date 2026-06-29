import { ji as e } from "./src-2.js";
import { l as t, p as n } from "./persisted-signal.js";
import { t as r } from "./persisted-atom.js";
var i = r(e, {}),
  a = r(`preferred-non-full-access-agent-mode-by-host-id`, {});
function o(r, i) {
  n(e, { ...t(e, {}), [r]: i });
}
function s(e, t) {
  return t[e] ?? null;
}
export { o as i, a as n, s as r, i as t };
//# sourceMappingURL=permissions-mode-defaults.js.map
