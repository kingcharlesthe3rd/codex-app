import { l as e } from "./persisted-atom-store.js";
import { t } from "./persisted-atom.js";
import { t as n } from "./persisted-signal.js";
import { n as r } from "./browser-profile-import-query.js";
var i = `has-seen-browser-profile-import-nux-v1`,
  a = n(i, !1);
function o({
  baseGateEnabled: e,
  hasSeen: t,
  hasSettledOpen: n,
  isVisible: i,
  profiles: a,
  profilesQuerySucceeded: o,
  serviceAvailable: s,
}) {
  return i && n && e && s && o && a != null && r(a).length > 0 && t === !1;
}
var s = `browser-sidebar-comment-mode-coachmark-dismissed`,
  c = t(s, !1);
function l() {
  e(s, !0);
}
export { i as a, o as i, l as n, a as r, c as t };
//# sourceMappingURL=browser-sidebar-comment-mode-coachmark-state-Dlb-N6Y8.js.map
