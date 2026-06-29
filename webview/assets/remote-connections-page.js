import { t as e } from "./jsx-runtime.js";
import { z as t } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-2.js";
import "./lib.js";
import "./persisted-signal.js";
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
import "./selectable-remote-connections-signal.js";
import { n } from "./remote-connection-visibility.js";
import { a as r } from "./chunk-9.js";
var i = t(),
  a = e();
function o() {
  let e = (0, i.c)(2);
  if (!n()) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, a.jsx)(r, { to: `/`, replace: !0 })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let t;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, a.jsx)(r, { to: `/settings/connections`, replace: !0 })), (e[1] = t))
      : (t = e[1]),
    t
  );
}
export { o as RemoteConnectionsPage };
//# sourceMappingURL=remote-connections-page.js.map
