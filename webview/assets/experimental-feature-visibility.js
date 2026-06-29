import { n as e } from "./rolldown-runtime.js";
import {
  Bs as t,
  Rs as n,
  bF as r,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
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
  (r(), t(), n());
});
export { i as n, a as t };
//# sourceMappingURL=experimental-feature-visibility.js.map
