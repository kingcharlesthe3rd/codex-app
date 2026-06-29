import "./main.js";
import "./chunk-102.js";
import "./chunk-59.js";
import "./chunk-55.js";
import "./chunk-103.js";
import "./chunk-87.js";
import "./chunk-60.js";
import "./chunk-20.js";
import "./chunk-113.js";
import "./chunk-111.js";
import "./chunk-70.js";
import "./src-1.js";
import { n as e, r as t } from "./chunk-4.js";
import { c as n } from "./chunk-97.js";
import { t as r } from "./chunk-1.js";
import { t as i } from "./mermaid-parser.core-3.js";
var a = {
    parse: e(async (e) => {
      let n = await i(`info`, e);
      t.debug(n);
    }, `parse`),
  },
  o = { version: `11.14.0` },
  s = {
    parser: a,
    db: { getVersion: e(() => o.version, `getVersion`) },
    renderer: {
      draw: e((e, i, a) => {
        t.debug(
          `rendering info diagram
` + e,
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
