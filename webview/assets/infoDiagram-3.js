import { i as e, r as t } from "./src-4.js";
import "./chunk-6.js";
import "./chunk-55.js";
import "./chunk-49.js";
import "./chunk-103.js";
import "./chunk-91.js";
import "./chunk-57.js";
import "./chunk-17.js";
import "./chunk-115.js";
import "./chunk-109.js";
import "./chunk-69.js";
import { c as n } from "./chunk-94.js";
import { t as r } from "./chunk-25.js";
import { t as i } from "./mermaid-parser.core-3.js";
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
