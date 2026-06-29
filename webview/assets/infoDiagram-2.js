import { i as e, r as t } from "./src-5.js";
import "./chunk-101.js";
import "./chunk-54.js";
import "./chunk-51.js";
import "./chunk-105.js";
import "./chunk-87.js";
import "./chunk-60.js";
import "./chunk-19.js";
import "./chunk-114.js";
import "./chunk-111.js";
import "./chunk-69.js";
import { c as n } from "./chunk-94.js";
import { t as r } from "./chunk-26.js";
import { t as i } from "./mermaid-parser.core-4.js";
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
//# sourceMappingURL=infoDiagram-2.js.map
