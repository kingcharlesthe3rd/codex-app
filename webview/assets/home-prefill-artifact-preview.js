import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { Z as n, o as r } from "./app-scope-CWE-zIhQ.js";
import "./use-host-config-C.js";
import "./thread-context-inputs.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-1.js";
import "./lib-1.js";
import "./app-shell-state.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./markdown-to-search-text.js";
import "./marked.esm.js";
import "./product-logger.js";
import "./parse-directives.js";
import "./platform.js";
import { f as i } from "./persisted-signal.js";
import "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./use-global-state.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./experimental-features-queries-D.js";
import "./browser-sidebar-availability.js";
import "./file.js";
import "./app-shell-tab-controller.js";
import "./thread-context.js";
import "./focus-composer.js";
import "./thread-panel-state.js";
import "./terminal.js";
import "./get-file-icon.js";
import "./code.js";
import "./folder.js";
import "./json-2.js";
import "./notebook.js";
import "./settings.cog.js";
import "./skills.js";
import "./workspace-file-context-menu.js";
import { t as a } from "./open-artifact-side-panel-tab.js";
import "./artifact-tab-content-shell.js";
var o = n(),
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
    { hostId: n, locationKey: c, previewFiles: l } = e,
    u = r(i),
    d = (0, s.useRef)(null),
    f,
    p;
  (t[0] !== n || t[1] !== c || t[2] !== l || t[3] !== u
    ? ((f = () => {
        if (!(l == null || l.length === 0 || d.current === c)) {
          d.current = c;
          for (let e of l) {
            let t = e.fsPath || e.path;
            t == null || t.length === 0 || a(u, t, { hostId: n, title: e.label });
          }
        }
      }),
      (p = [n, c, l, u]),
      (t[0] = n),
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
