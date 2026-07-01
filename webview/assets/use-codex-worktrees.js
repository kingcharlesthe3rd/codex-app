import { n as e } from "./rolldown-runtime.js";
import {
  DV as t,
  GN as n,
  Gh as r,
  Qh as i,
  RV as a,
  WN as o,
  Wh as s,
  Zh as c,
  xV as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  o as u,
  s as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj.js";
function f(e, n) {
  let r = (0, p.c)(9),
    a,
    c;
  if (r[0] !== e) {
    let n = s(e);
    ((c = t), (a = u(n)), (r[0] = e), (r[1] = a), (r[2] = c));
  } else ((a = r[1]), (c = r[2]));
  let l;
  r[3] !== e || r[4] !== n
    ? ((l = (t) => {
        let { signal: r } = t;
        return i(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: n },
          signal: r,
        });
      }),
      (r[3] = e),
      (r[4] = n),
      (r[5] = l))
    : (l = r[5]);
  let d;
  return (
    r[6] !== a || r[7] !== l
      ? ((d = { queryKey: a, queryFn: l, staleTime: o.INFINITE, gcTime: 18e5 }),
        (r[6] = a),
        (r[7] = l),
        (r[8] = d))
      : (d = r[8]),
    c(d)
  );
}
var p,
  m = e(() => {
    ((p = a()), l(), n(), c(), d(), r());
  });
export { f as n, m as t };
//# sourceMappingURL=use-codex-worktrees.js.map
