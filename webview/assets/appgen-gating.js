import { c as e, p as t, t as n } from "./app-scope.js";
import { u as r } from "./vscode-api.js";
import { f as i, o as a } from "./statsig.js";
import { t as o } from "./request.js";
var s = t(n, ({ get: e }) => ({
    enabled: e(i, `637432221`),
    queryKey: [`appgen`, `access`],
    queryFn: () => o.safeGet(`/wham/sites/access`),
    retry: !1,
    staleTime: r.TEN_MINUTES,
  })),
  c = e(n, ({ get: e }) => {
    if (!e(i, `637432221`)) return `unavailable`;
    let { data: t, isError: n } = e(s);
    return n || t?.enabled === !1 ? `unavailable` : t?.enabled === !0 ? `available` : `loading`;
  });
function l() {
  let e = a(`637432221`),
    t = a(`1741944562`);
  return e && t;
}
export { l as n, c as t };
//# sourceMappingURL=appgen-gating.js.map
