import { n as e } from "./rolldown-runtime.js";
import {
  Km as t,
  dv as n,
  qm as r,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function i({
  action: e,
  hasRunningCloudSession: n,
  hasRunningLocalSession: i,
  isNotificationTrayOpen: a,
  notification: o,
  notificationCount: s,
  selectedAvatar: c,
  source: l,
}) {
  let u = {
    action: e,
    source: l,
    petKind: c.id.startsWith(`custom:`)
      ? r.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM
      : r.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN,
  };
  return (
    c.id.startsWith(`custom:`) || (u.builtInPetId = c.id),
    s != null && (u.notificationCount = s),
    o != null &&
      (u.notificationSource =
        o.source === `cloud`
          ? t.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD
          : t.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL),
    i != null && (u.hasRunningLocalSession = i),
    n != null && (u.hasRunningCloudSession = n),
    a != null && (u.isNotificationTrayOpen = a),
    u
  );
}
var a = e(() => {
  n();
});
export { a as n, i as t };
//# sourceMappingURL=app-initial~app-main~avatar-overlay-page~avatar-overlay-native-page~pets-settings.js.map
