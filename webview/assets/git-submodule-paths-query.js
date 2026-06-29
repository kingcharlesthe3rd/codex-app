import { n as e } from "./rolldown-runtime.js";
import {
  Ao as t,
  bs as n,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk.js";
import { Nv as r, Pv as i } from "./app-initial~app-main~onboarding-page.js";
import {
  _ as a,
  g as o,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq.js";
var s,
  c,
  l,
  u = e(() => {
    (t(),
      a(),
      i(),
      (s = r({
        method: `submodule-paths`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({
          refetchOnWindowFocus: e.refetchOnWindowFocus,
          select: (e) => e.paths,
          staleTime: e.staleTime,
        }),
      })),
      (c = s.fromCwd$),
      (l = n(o, (e, { get: t }) => t(c, e).data ?? null)));
  });
export { l as n, u as r, c as t };
//# sourceMappingURL=git-submodule-paths-query.js.map
