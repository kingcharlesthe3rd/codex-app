import { i as e, r as t } from "./src.js";
import "./chunk-97.js";
import "./chunk-48.js";
import "./chunk-47.js";
import "./chunk-102.js";
import "./chunk-82.js";
import "./chunk-54.js";
import "./chunk-13.js";
import "./chunk-112.js";
import "./chunk-107.js";
import "./chunk-65.js";
import { c as n } from "./chunk-89.js";
import { t as r } from "./chunk-20.js";
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
//# sourceMappingURL=infoDiagram-3.js.map
