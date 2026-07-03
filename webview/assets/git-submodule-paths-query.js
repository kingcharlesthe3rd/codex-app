import { n as e } from "./rolldown-runtime.js";
import {
  DW as t,
  DX as n,
  EW as r,
  GY as i,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import { Xh as a, Yh as o } from "./app-initial~app-main~onboarding-page.js";
var s,
  c,
  l,
  u = e(() => {
    (i(),
      t(),
      a(),
      (s = o({
        method: `submodule-paths`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({
          refetchOnWindowFocus: e.refetchOnWindowFocus,
          select: (e) => e.paths,
          staleTime: e.staleTime,
        }),
      })),
      (c = s.fromCwd$),
      (l = n(r, (e, { get: t }) => t(c, e).data ?? null)));
  });
export { l as n, u as r, c as t };
//# sourceMappingURL=git-submodule-paths-query.js.map
