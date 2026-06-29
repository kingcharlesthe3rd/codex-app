import "./thread-context-inputs.js";
import "./src-3.js";
import "./experimental-features-queries.js";
function e(e) {
  return e.stage === `beta`
    ? e.name !== `memories` &&
        e.name !== `multi_agent` &&
        e.name !== `plugins` &&
        e.name !== `plugin` &&
        e.name !== `remote_control` &&
        e.name !== `realtime_conversation` &&
        e.name !== `chronicle` &&
        e.name !== `workspace_dependencies`
    : !1;
}
export { e as t };
//# sourceMappingURL=experimental-feature-visibility.js.map
