import { n as e } from "./rolldown-runtime.js";
import {
  Gm as t,
  JW as n,
  qm as r,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
function i(e) {
  return e.stage === `beta`
    ? e.name !== `memories` &&
        e.name !== `multi_agent` &&
        e.name !== `plugins` &&
        e.name !== `plugin` &&
        e.name !== `remote_control` &&
        !e.name.startsWith(`realtime_`) &&
        e.name !== `chronicle` &&
        e.name !== `workspace_dependencies`
    : !1;
}
var a = e(() => {
  (n(), r(), t());
});
export { i as n, a as t };
//# sourceMappingURL=experimental-feature-visibility.js.map
