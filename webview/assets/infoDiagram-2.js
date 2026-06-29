import { i as e, r as t } from "./src-1.js";
import "./chunk-103.js";
import "./chunk-57.js";
import "./chunk-52.js";
import "./chunk-109.js";
import "./chunk-92.js";
import "./chunk-61.js";
import "./chunk-19.js";
import "./chunk-119.js";
import "./chunk-113.js";
import "./chunk-72.js";
import { c as n } from "./chunk-98.js";
import { t as r } from "./chunk-28.js";
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
//# sourceMappingURL=infoDiagram-2.js.map
