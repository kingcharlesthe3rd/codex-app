import { l as e, t } from "./app-scope-CWE-zIhQ.js";
import { G as n, W as r } from "./use-host-config.js";
import { Dt as i, Pt as a, Rt as o, T as s } from "./thread-context-inputs.js";
var c = e(t, (e, { get: t }) =>
    e == null ? null : r({ id: e, title: t(a, e), turns: t(s, e) ?? t(o, e) }),
  ),
  l = e(t, (e, { get: t }) => {
    if (e == null) return null;
    let r = t(c, e);
    if (r != null) return r;
    let a = t(i, e);
    return n(e, t(s, a) ?? t(o, a));
  });
export { l as n, c as t };
//# sourceMappingURL=local-conversation-title-signals.js.map
