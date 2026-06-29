import { Z as e } from "./app-scope-CWE-zIhQ.js";
import { ai as t } from "./src-3.js";
import { p as n } from "./chunk-13.js";
var r = e();
function i() {
  let e = (0, r.c)(2),
    i = n(`/local/:conversationId`),
    a = n(`/remote/:conversationId`),
    o = n(`/hotkey-window/thread/:conversationId`),
    s = i?.params.conversationId ?? a?.params.conversationId ?? o?.params.conversationId,
    c;
  return (e[0] === s ? (c = e[1]) : ((c = s ? t(s) : null), (e[0] = s), (e[1] = c)), c);
}
export { i as t };
//# sourceMappingURL=use-active-conversation-id.js.map
