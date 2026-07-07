import { n as e } from "./rolldown-runtime.js";
import {
  Bc as t,
  Rt as n,
  Xs as r,
  zt as i,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { ab as a, ob as o } from "./app-initial~app-main~onboarding-page.js";
var s,
  c,
  l,
  u = e(() => {
    (r(),
      i(),
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
      (l = t(n, (e, { get: t }) => t(c, e).data ?? null)));
  });
export { l as n, u as r, c as t };
//# sourceMappingURL=git-submodule-paths-query.js.map
