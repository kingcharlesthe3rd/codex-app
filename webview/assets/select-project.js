import { Pa as e } from "./app-server-manager-signals.js";
import { f as t } from "./vscode-api.js";
import { wr as n } from "./src-2.js";
import { t as r } from "./thread-context-inputs.js";
import { i } from "./remote-projects.js";
import { r as a } from "./local-projects.js";
function o(e, n) {
  if (n?.projectKind === `local`) {
    a.select(e, n);
    return;
  }
  if ((s(e, n), n?.projectKind === `remote`)) {
    i(e, n.projectId);
    return;
  }
  (i(e, null), t.dispatchMessage(`electron-clear-active-workspace-root`, {}));
}
function s(t, i) {
  (t.query.setData(e, n.ACTIVE_REMOTE_PROJECT_ID, { value: i?.projectId }),
    t.query.setData(r, { roots: [] }));
}
export { o as t };
//# sourceMappingURL=select-project.js.map
