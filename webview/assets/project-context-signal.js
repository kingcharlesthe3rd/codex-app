import { U as e } from "./src-2.js";
import { cr as t, tr as n } from "./app-server-manager-signals.js";
import { H as r, L as i } from "./vscode-api.js";
import { t as a } from "./route-scope.js";
import { a as o, i as s, n as c, r as l, t as u } from "./thread-context.js";
import { t as d } from "./git-current-branch-query.js";
function f({ codexHome: t, cwd: n, gitMetadata: r, hostId: i }) {
  return n == null
    ? { kind: `none`, codexHome: t, cwd: null, git: null, hostId: i, isCodexWorktree: !1 }
    : r == null
      ? { kind: `plain`, codexHome: t, cwd: n, git: null, hostId: i, isCodexWorktree: !1 }
      : {
          kind: `git`,
          codexHome: t,
          cwd: n,
          git: r,
          hostId: i,
          isCodexWorktree: e(n, t ?? void 0),
        };
}
var p = r(a, ({ get: e }) =>
    t(e(c), e(o), e(l), `local_conversation_thread`, { watchForGitInit: !0 }),
  ),
  m = i(a, ({ get: e }) => {
    let t = e(p),
      r = t.data ?? null;
    return r == null
      ? n(t)
      : e(d, {
          commonDir: r.commonDir,
          enabled: !0,
          hostConfig: e(l),
          operationSource: `local_conversation_thread`,
          refetchOnWindowFocus: !1,
          root: r.root,
          staleTime: null,
        });
  }),
  h = i(a, ({ get: e }) => {
    let t = e(p).data ?? null;
    return f({ codexHome: e(u), cwd: e(c), gitMetadata: t, hostId: e(s) });
  });
export { m as n, p as r, h as t };
//# sourceMappingURL=project-context-signal.js.map
