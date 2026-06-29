import { Yr as e } from "./src-2.js";
import { lt as t } from "./vscode-api.js";
import { p as n } from "./chunk-9.js";
var r = t();
function i() {
  let t = (0, r.c)(2),
    i = n(`/local/:conversationId`),
    a = n(`/remote/:conversationId`),
    o = n(`/hotkey-window/thread/:conversationId`),
    s = i?.params.conversationId ?? a?.params.conversationId ?? o?.params.conversationId,
    c;
  return (t[0] === s ? (c = t[1]) : ((c = s ? e(s) : null), (t[0] = s), (t[1] = c)), c);
}
export { i as t };
//# sourceMappingURL=use-active-conversation-id-CYU-XhL_.js.map
