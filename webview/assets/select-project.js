import { $i as e, n as t } from "./thread-context-inputs.js";
import { f as n } from "./vscode-api.js";
import { Br as r } from "./src.js";
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
  (n.query.setData(e, r.ACTIVE_REMOTE_PROJECT_ID, { value: i?.projectId }),
    n.query.setData(t, { roots: [] }));
}
export { o as t };
//# sourceMappingURL=select-project.js.map
