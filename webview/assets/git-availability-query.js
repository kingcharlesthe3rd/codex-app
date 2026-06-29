import { p as e, t } from "./app-scope-CWE-zIhQ.js";
import { Zn as n, er as r } from "./thread-context-inputs.js";
import { u as i } from "./vscode-api.js";
var a = e(
  t,
  ({ hostConfig: e, operationSource: t }) => ({
    queryKey: [`git`, `availability`, n(e)],
    queryFn: ({ signal: n }) =>
      r(`git`).request({
        method: `availability`,
        params: { hostConfig: e, operationSource: t },
        signal: n,
      }),
    refetchOnWindowFocus: !0,
    staleTime: i.THIRTY_SECONDS,
  }),
  { excludeFieldsFromKey: [`operationSource`] },
);
export { a as t };
//# sourceMappingURL=git-availability-query.js.map
