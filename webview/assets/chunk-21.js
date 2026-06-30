import { n as e } from "./rolldown-runtime.js";
import { n as t, t as n } from "./src-3.js";
import { n as r, r as i } from "./chunk-58.js";
import { A as a, b as o } from "./chunk-90.js";
var s,
  c = e(() => {
    (a(),
      i(),
      n(),
      (s = r((e) => {
        let { securityLevel: n } = o(),
          r = t(`body`);
        return (
          n === `sandbox` && (r = t((t(`#i${e}`).node()?.contentDocument ?? document).body)),
          r.select(`#${e}`)
        );
      }, `selectSvgElement`)));
  });
export { s as n, c as t };
//# sourceMappingURL=chunk-21.js.map
