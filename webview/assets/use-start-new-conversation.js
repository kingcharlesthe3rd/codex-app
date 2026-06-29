import { o as e, t, z as n } from "./app-scope.js";
import { f as r } from "./vscode-api.js";
import { a as i } from "./react.js";
import { i as a } from "./use-permissions-mode.js";
import { t as o } from "./select-project.js";
var s = n();
function c() {
  let n = (0, s.c)(3),
    r = e(t),
    a = i(),
    o;
  return (
    n[0] !== r || n[1] !== a
      ? ((o = (e) => {
          l(r, a, e);
        }),
        (n[0] = r),
        (n[1] = a),
        (n[2] = o))
      : (o = n[2]),
    o
  );
}
function l(e, t, n) {
  a(t);
  let { activeProject: i, startInSidebar: s, ...c } = n ?? {};
  i !== void 0 && o(e, i);
  let l = { ...c, focusComposerNonce: Date.now() };
  r.dispatchHostMessage({ type: `navigate-to-route`, path: `/`, state: l });
}
export { c as n, l as t };
//# sourceMappingURL=use-start-new-conversation.js.map
