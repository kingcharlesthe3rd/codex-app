import { s as e } from "./chunk-Bj-mKKzh.js";
import { Yr as t, st as n } from "./src-2.js";
import { t as r } from "./react-dom.js";
import { lt as i } from "./vscode-api.js";
import { m as a } from "./chunk-9.js";
import { t as o } from "./use-stable-callback.js";
var s = i(),
  c = e(r(), 1);
function l() {
  let e = (0, s.c)(2),
    r = a(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = (e) => {
          let i = n(t(e));
          (0, c.flushSync)(() => {
            r(i);
          });
        }),
        (e[0] = r),
        (e[1] = i)),
    o(i)
  );
}
export { l as t };
//# sourceMappingURL=use-navigate-to-local-conversation.js.map
