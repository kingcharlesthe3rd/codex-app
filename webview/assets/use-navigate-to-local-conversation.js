import { s as e } from "./chunk.js";
import { z as t } from "./app-scope.js";
import { Ur as n, ft as r } from "./src-2.js";
import { t as i } from "./react-dom.js";
import { t as a } from "./use-stable-callback.js";
import { m as o } from "./chunk-9.js";
var s = t(),
  c = e(i(), 1);
function l() {
  let e = (0, s.c)(2),
    t = o(),
    i;
  return (
    e[0] === t
      ? (i = e[1])
      : ((i = (e) => {
          let i = r(n(e));
          (0, c.flushSync)(() => {
            t(i);
          });
        }),
        (e[0] = t),
        (e[1] = i)),
    a(i)
  );
}
export { l as t };
//# sourceMappingURL=use-navigate-to-local-conversation.js.map
