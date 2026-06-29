import { Hr as e } from "./src-2.js";
import { aa as t } from "./app-server-manager-signals.js";
import { f as n } from "./vscode-api.js";
import { t as r } from "./thread-context-inputs.js";
import { i } from "./remote-projects.js";
import { r as a } from "./local-projects.js";
function o(e, t) {
  if (t?.projectKind === `local`) {
    a.select(e, t);
    return;
  }
  if ((s(e, t), t?.projectKind === `remote`)) {
    i(e, t.projectId);
    return;
  }
  (i(e, null), n.dispatchMessage(`electron-clear-active-workspace-root`, {}));
}
function s(n, i) {
  (n.query.setData(t, e.ACTIVE_REMOTE_PROJECT_ID, { value: i?.projectId }),
    n.query.setData(r, { roots: [] }));
}
export { o as t };
//# sourceMappingURL=select-project.js.map
