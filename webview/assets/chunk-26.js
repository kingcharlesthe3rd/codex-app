import { t as e } from "./src-2.js";
import { n as t } from "./chunk-64.js";
import { b as n } from "./chunk-99.js";
var r = t((t) => {
  let { securityLevel: r } = n(),
    i = e(`body`);
  return (
    r === `sandbox` && (i = e((e(`#i${t}`).node()?.contentDocument ?? document).body)),
    i.select(`#${t}`)
  );
}, `selectSvgElement`);
export { r as t };
//# sourceMappingURL=chunk-26.js.map
