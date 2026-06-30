import { n as e } from "./rolldown-runtime.js";
import { n as t, r as n } from "./chunk-57.js";
import { b as r, k as i } from "./chunk-56.js";
import { n as a, t as o } from "./src-3.js";
var s,
  c = e(() => {
    (i(),
      n(),
      o(),
      (s = t((e) => {
        let { securityLevel: t } = r(),
          n = a(`body`);
        return (
          t === `sandbox` && (n = a((a(`#i${e}`).node()?.contentDocument ?? document).body)),
          n.select(`#${e}`)
        );
      }, `selectSvgElement`)));
  });
export { s as n, c as t };
//# sourceMappingURL=chunk-4.js.map
