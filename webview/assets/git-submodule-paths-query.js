import { n as e } from "./rolldown-runtime.js";
import {
  $P as t,
  AB as n,
  QP as r,
  fV as i,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Ol as a,
  kl as o,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
var s,
  c,
  l,
  u = e(() => {
    (n(),
      t(),
      o(),
      (s = a({
        method: `submodule-paths`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({
          refetchOnWindowFocus: e.refetchOnWindowFocus,
          select: (e) => e.paths,
          staleTime: e.staleTime,
        }),
      })),
      (c = s.fromCwd$),
      (l = i(r, (e, { get: t }) => t(c, e).data ?? null)));
  });
export { l as n, u as r, c as t };
//# sourceMappingURL=git-submodule-paths-query.js.map
