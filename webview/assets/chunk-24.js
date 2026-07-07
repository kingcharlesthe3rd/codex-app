import { n as e } from "./rolldown-runtime.js";
import { n as t, t as n } from "./src-3.js";
import { n as r, r as i } from "./chunk-50.js";
var a,
  o = e(() => {
    (i(),
      n(),
      (a = r((e, n) => {
        let r;
        return (
          n === `sandbox` && (r = t(`#i` + e)),
          t(n === `sandbox` ? r.nodes()[0].contentDocument.body : `body`).select(`[id="${e}"]`)
        );
      }, `getDiagramElement`)));
  });
export { o as n, a as t };
//# sourceMappingURL=chunk-24.js.map
