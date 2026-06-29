import { n as e } from "./rolldown-runtime.js";
import {
  F as t,
  H as n,
  I as r,
  Ol as i,
  U as a,
  _l as o,
  _t as s,
  dl as c,
  gt as l,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  o as u,
  s as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj.js";
function f(e, n) {
  let r = (0, p.c)(9),
    i,
    s;
  if (r[0] !== e) {
    let n = t(e);
    ((s = o), (i = u(n)), (r[0] = e), (r[1] = i), (r[2] = s));
  } else ((i = r[1]), (s = r[2]));
  let c;
  r[3] !== e || r[4] !== n
    ? ((c = (t) => {
        let { signal: r } = t;
        return a(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: n },
          signal: r,
        });
      }),
      (r[3] = e),
      (r[4] = n),
      (r[5] = c))
    : (c = r[5]);
  let d;
  return (
    r[6] !== i || r[7] !== c
      ? ((d = { queryKey: i, queryFn: c, staleTime: l.INFINITE, gcTime: 18e5 }),
        (r[6] = i),
        (r[7] = c),
        (r[8] = d))
      : (d = r[8]),
    s(d)
  );
}
var p,
  m = e(() => {
    ((p = i()), c(), s(), n(), d(), r());
  });
export { f as n, m as t };
//# sourceMappingURL=use-codex-worktrees-f0l-RbO2.js.map
