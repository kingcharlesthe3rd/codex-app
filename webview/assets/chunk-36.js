import { t as e } from "./src-3.js";
import { n as t } from "./chunk-4.js";
import { b as n } from "./chunk-100.js";
var r = t((t) => {
  let { securityLevel: r } = n(),
    i = e(`body`);
  return (
    r === `sandbox` && (i = e((e(`#i${t}`).node()?.contentDocument ?? document).body)),
    i.select(`#${t}`)
  );
}, `selectSvgElement`);
export { r as t };
//# sourceMappingURL=chunk-36.js.map
