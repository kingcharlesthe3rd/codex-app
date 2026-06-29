import { n as e } from "./rolldown-runtime.js";
import { _ as t } from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk.js";
import {
  ho as n,
  po as r,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
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
  (t(), n(), r());
});
export { i as n, a as t };
//# sourceMappingURL=experimental-feature-visibility.js.map
