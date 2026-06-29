import { n as e } from "./rolldown-runtime.js";
import { L as t } from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp.js";
import {
  Hs as n,
  Js as r,
  g as i,
  h as a,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk.js";
import {
  eo as o,
  oo as s,
  so as c,
  to as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r.js";
import {
  o as u,
  s as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj.js";
function f(e, t) {
  let n = (0, p.c)(9),
    i,
    s;
  if (n[0] !== e) {
    let t = o(e);
    ((s = r), (i = u(t)), (n[0] = e), (n[1] = i), (n[2] = s));
  } else ((i = n[1]), (s = n[2]));
  let l;
  n[3] !== e || n[4] !== t
    ? ((l = (n) => {
        let { signal: r } = n;
        return c(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: t },
          signal: r,
        });
      }),
      (n[3] = e),
      (n[4] = t),
      (n[5] = l))
    : (l = n[5]);
  let d;
  return (
    n[6] !== i || n[7] !== l
      ? ((d = { queryKey: i, queryFn: l, staleTime: a.INFINITE, gcTime: 18e5 }),
        (n[6] = i),
        (n[7] = l),
        (n[8] = d))
      : (d = n[8]),
    s(d)
  );
}
var p,
  m = e(() => {
    ((p = t()), n(), i(), s(), d(), l());
  });
export { f as n, m as t };
//# sourceMappingURL=use-codex-worktrees.js.map
