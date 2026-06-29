import { R as e } from "./app-scope.js";
import { gr as t, vr as n } from "./app-server-manager-signals.js";
import { _ as r, u as i } from "./vscode-api.js";
import { t as a } from "./worktree-query-keys.js";
var o = e();
function s(e, s) {
  let c = (0, o.c)(9),
    l,
    u;
  if (c[0] !== e) {
    let n = t(e);
    ((u = r), (l = a(n)), (c[0] = e), (c[1] = l), (c[2] = u));
  } else ((l = c[1]), (u = c[2]));
  let d;
  c[3] !== e || c[4] !== s
    ? ((d = (t) => {
        let { signal: r } = t;
        return n(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: s },
          signal: r,
        });
      }),
      (c[3] = e),
      (c[4] = s),
      (c[5] = d))
    : (d = c[5]);
  let f;
  return (
    c[6] !== l || c[7] !== d
      ? ((f = { queryKey: l, queryFn: d, staleTime: i.INFINITE, gcTime: 18e5 }),
        (c[6] = l),
        (c[7] = d),
        (c[8] = f))
      : (f = c[8]),
    u(f)
  );
}
export { s as t };
//# sourceMappingURL=use-codex-worktrees.js.map
