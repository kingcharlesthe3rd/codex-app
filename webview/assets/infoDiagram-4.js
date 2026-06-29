import { i as e, r as t } from "./src-3.js";
import "./chunk-103.js";
import "./chunk-59.js";
import "./chunk-54.js";
import "./chunk-105.js";
import "./chunk-92.js";
import "./chunk-61.js";
import "./chunk-20.js";
import "./chunk-14.js";
import "./chunk-110.js";
import "./chunk-71.js";
import { c as n } from "./chunk-97.js";
import { t as r } from "./chunk-29.js";
import { t as i } from "./mermaid-parser.core-2.js";
var a = {
    parse: t(async (t) => {
      let n = await i(`info`, t);
      e.debug(n);
    }, `parse`),
  },
  o = { version: `11.14.0` },
  s = {
    parser: a,
    db: { getVersion: t(() => o.version, `getVersion`) },
    renderer: {
      draw: t((t, i, a) => {
        e.debug(
          `rendering info diagram
` + t,
        );
        let o = r(i);
        (n(o, 100, 400, !0),
          o
            .append(`g`)
            .append(`text`)
            .attr(`x`, 100)
            .attr(`y`, 40)
            .attr(`class`, `version`)
            .attr(`font-size`, 32)
            .style(`text-anchor`, `middle`)
            .text(`v${a}`));
      }, `draw`),
    },
  };
export { s as diagram };
//# sourceMappingURL=infoDiagram-4.js.map
