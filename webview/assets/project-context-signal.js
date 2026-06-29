import { c as e, m as t } from "./app-scope-CWE-zIhQ.js";
import { Gn as n, Qn as r } from "./thread-context-inputs.js";
import { J as i } from "./src-1.js";
import { f as a } from "./persisted-signal.js";
import { a as o, i as s, n as c, r as l, t as u } from "./thread-context.js";
import { t as d } from "./git-availability-query.js";
import { t as f } from "./git-current-branch-query.js";
function p({ codexHome: e, cwd: t, gitMetadata: n, hostId: r }) {
  return t == null
    ? { kind: `none`, codexHome: e, cwd: null, git: null, hostId: r, isCodexWorktree: !1 }
    : n == null
      ? { kind: `plain`, codexHome: e, cwd: t, git: null, hostId: r, isCodexWorktree: !1 }
      : {
          kind: `git`,
          codexHome: e,
          cwd: t,
          git: n,
          hostId: r,
          isCodexWorktree: i(t, e ?? void 0),
        };
}
var m = t(a, ({ get: e }) => {
    let t = e(l),
      n =
        e(d, { hostConfig: t, operationSource: `local_conversation_thread` }).data?.available ===
        !0;
    return r(e(c), e(o), t, `local_conversation_thread`, { enabled: n, watchForGitInit: !0 });
  }),
  h = e(a, ({ get: e }) => {
    let t = e(m),
      r = t.data ?? null;
    return r == null
      ? n(t)
      : e(f, {
          commonDir: r.commonDir,
          enabled: !0,
          hostConfig: e(l),
          operationSource: `local_conversation_thread`,
          refetchOnWindowFocus: !1,
          root: r.root,
          staleTime: null,
        });
  }),
  g = e(a, ({ get: e }) => {
    let t = e(m).data ?? null;
    return p({ codexHome: e(u), cwd: e(c), gitMetadata: t, hostId: e(s) });
  });
export { h as n, m as r, g as t };
//# sourceMappingURL=project-context-signal.js.map
