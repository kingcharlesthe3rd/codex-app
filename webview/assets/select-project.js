import { f as e } from "./vscode-api.js";
import { xr as t } from "./src-4.js";
import { pa as n } from "./app-server-manager-signals.js";
import { t as r } from "./thread-context-inputs.js";
import { i } from "./remote-projects.js";
import { r as a } from "./local-projects.js";
function o(t, n) {
  if (n?.projectKind === `local`) {
    a.select(t, n);
    return;
  }
  if ((s(t, n), n?.projectKind === `remote`)) {
    i(t, n.projectId);
    return;
  }
  (i(t, null), e.dispatchMessage(`electron-clear-active-workspace-root`, {}));
}
function s(e, i) {
  (e.query.setData(n, t.ACTIVE_REMOTE_PROJECT_ID, { value: i?.projectId }),
    e.query.setData(r, { roots: [] }));
}
export { o as t };
//# sourceMappingURL=select-project.js.map
