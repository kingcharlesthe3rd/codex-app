import { i as e, r as t } from "./src.js";
import "./chunk-99.js";
import "./chunk-58.js";
import "./chunk-51.js";
import "./chunk-103.js";
import "./chunk-88.js";
import "./chunk-60.js";
import "./chunk-17.js";
import "./chunk-115.js";
import "./chunk-107.js";
import "./chunk-70.js";
import { c as n } from "./chunk-95.js";
import { t as r } from "./chunk-25.js";
import { t as i } from "./mermaid-parser.core-1.js";
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
//# sourceMappingURL=infoDiagram-1.js.map
