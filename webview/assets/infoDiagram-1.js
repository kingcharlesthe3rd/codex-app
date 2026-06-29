import "./main.js";
import "./chunk-102.js";
import "./chunk-59.js";
import "./chunk-55.js";
import "./chunk-106.js";
import "./chunk-91.js";
import "./chunk-60.js";
import "./chunk-21.js";
import "./chunk-116.js";
import "./chunk-112.js";
import "./chunk-71.js";
import "./src-2.js";
import { n as e, r as t } from "./chunk-64.js";
import { c as n } from "./chunk-99.js";
import { t as r } from "./chunk-26.js";
import { t as i } from "./mermaid-parser.core-2.js";
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
//# sourceMappingURL=infoDiagram-1.js.map
