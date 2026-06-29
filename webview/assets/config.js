import { p as e, t } from "./app-scope-CWE-zIhQ.js";
import { ht as n, zi as r } from "./thread-context-inputs.js";
import { u as i } from "./vscode-api.js";
import { t as a } from "./queryOptions.js";
import { l as o } from "./config-queries.js";
var s = [`user-saved-config`];
function c({ queryClient: e, hostId: t, cwd: n, enabled: c }) {
  return a({
    enabled: c,
    queryFn: async () => {
      try {
        return r((await o(e, t, n, !1)).config);
      } catch {
        return null;
      }
    },
    queryKey: [...s, t, n],
    staleTime: i.FIVE_MINUTES,
  });
}
var l = e(t, ({ cwd: e = null, hostId: t }, { get: r, queryClient: i }) =>
  c({ queryClient: i, hostId: t, cwd: e, enabled: r(n).includes(t) }),
);
export { l as n, c as r, s as t };
//# sourceMappingURL=config.js.map
