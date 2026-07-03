import { r as e, t } from "./src-4.js";
import { b as n } from "./chunk-84.js";
var r = e((e) => {
  let { securityLevel: r } = n(),
    i = t(`body`);
  return (
    r === `sandbox` && (i = t((t(`#i${e}`).node()?.contentDocument ?? document).body)),
    i.select(`#${e}`)
  );
}, `selectSvgElement`);
export { r as t };
//# sourceMappingURL=chunk-12.js.map
