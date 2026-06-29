import { p as e, t } from "./app-scope-CWE-zIhQ.js";
import { $n as n, Xn as r } from "./thread-context-inputs.js";
import { u as i } from "./vscode-api.js";
var a = e(
  t,
  ({ hostConfig: e, operationSource: t }) => ({
    queryKey: [`git`, `availability`, r(e)],
    queryFn: ({ signal: r }) =>
      n(`git`).request({
        method: `availability`,
        params: { hostConfig: e, operationSource: t },
        signal: r,
      }),
    refetchOnWindowFocus: !0,
    staleTime: i.THIRTY_SECONDS,
  }),
  { excludeFieldsFromKey: [`operationSource`] },
);
export { a as t };
//# sourceMappingURL=git-availability-query.js.map
