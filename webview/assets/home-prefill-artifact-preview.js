import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { o as n, z as r } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-2.js";
import "./lib.js";
import "./persisted-signal.js";
import "./app-shell-state.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./mime-types.js";
import "./product-logger.js";
import "./format-skill-title.js";
import "./rpc-2.js";
import "./statsig.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./file.js";
import "./folder.js";
import "./experimental-features-queries.js";
import "./image-square.js";
import "./selectable-remote-connections-signal.js";
import "./use-global-state.js";
import "./browser-sidebar-availability.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import { t as i } from "./route-scope.js";
import "./app-shell-tab-controller.js";
import "./thread-context-BQm-6r7t.js";
import "./focus-composer.js";
import "./thread-panel-state.js";
import "./terminal.js";
import "./get-file-icon.js";
import "./code-CBI-Jt6Z.js";
import "./json.js";
import "./notebook.js";
import "./settings.cog.js";
import "./skills.js";
import "./workspace-file-context-menu.js";
import { t as a } from "./open-artifact-side-panel-tab.js";
var o = r(),
  s = e(t(), 1);
function c(e) {
  let t = (0, o.c)(4),
    { hostId: n, locationKey: r, previewFiles: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = { hostId: n, locationKey: r, previewFiles: i }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    l(a),
    null
  );
}
function l(e) {
  let t = (0, o.c)(6),
    { hostId: r, locationKey: c, previewFiles: l } = e,
    u = n(i),
    d = (0, s.useRef)(null),
    f,
    p;
  (t[0] !== r || t[1] !== c || t[2] !== l || t[3] !== u
    ? ((f = () => {
        if (!(l == null || l.length === 0 || d.current === c)) {
          d.current = c;
          for (let e of l) {
            let t = e.fsPath || e.path;
            t == null || t.length === 0 || a(u, t, { hostId: r, title: e.label });
          }
        }
      }),
      (p = [r, c, l, u]),
      (t[0] = r),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u),
      (t[4] = f),
      (t[5] = p))
    : ((f = t[4]), (p = t[5])),
    (0, s.useEffect)(f, p));
}
export { c as HomePrefillArtifactPreview };
//# sourceMappingURL=home-prefill-artifact-preview.js.map
