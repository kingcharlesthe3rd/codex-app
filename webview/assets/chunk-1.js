import { t as e } from "./src-1.js";
import { n as t } from "./chunk-3.js";
import { b as n } from "./chunk-98.js";
var r = t((t) => {
  let { securityLevel: r } = n(),
    i = e(`body`);
  return (
    r === `sandbox` && (i = e((e(`#i${t}`).node()?.contentDocument ?? document).body)),
    i.select(`#${t}`)
  );
}, `selectSvgElement`);
export { r as t };
//# sourceMappingURL=chunk-1.js.map
