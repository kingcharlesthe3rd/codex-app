import { Wi as e } from "./src-3.js";
import { a as t, l as n } from "./persisted-atom-store.js";
import { t as r } from "./persisted-atom.js";
var i = `preferred-non-full-access-agent-mode-by-host-id`,
  a = r(e, {}),
  o = r(i, {});
function s(r, i) {
  n(e, { ...t(e, {}), [r]: i });
}
function c(e, t) {
  return t[e] ?? null;
}
export { s as i, o as n, c as r, a as t };
//# sourceMappingURL=permissions-mode-defaults.js.map
