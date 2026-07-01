import { n as e } from "./rolldown-runtime.js";
import {
  Fh as t,
  RV as n,
  Uh as r,
  bB as i,
  wB as a,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  d as o,
  u as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
function c(e, n, r, i, o, c) {
  let u = (0, l.c)(9),
    d = e ?? null,
    f;
  u[0] === c ? (f = u[1]) : ((f = t(c, null)), (u[0] = c), (u[1] = f));
  let p;
  return (
    u[2] !== n || u[3] !== r || u[4] !== o || u[5] !== i || u[6] !== d || u[7] !== f
      ? ((p = { cwd: d, hostConfig: n, key: r, operationSource: o, scope: i, ...f }),
        (u[2] = n),
        (u[3] = r),
        (u[4] = o),
        (u[5] = i),
        (u[6] = d),
        (u[7] = f),
        (u[8] = p))
      : (p = u[8]),
    a(s, p)
  );
}
var l,
  u = e(() => {
    ((l = n()), i(), o(), r());
  });
export { c as n, u as t };
//# sourceMappingURL=use-git-config-value.js.map
