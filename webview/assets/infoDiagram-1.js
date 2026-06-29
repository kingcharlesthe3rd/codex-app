import "./main.js";
import "./chunk-101.js";
import "./chunk-56.js";
import "./chunk-52.js";
import "./chunk-105.js";
import "./chunk-87.js";
import "./chunk-57.js";
import "./chunk-16.js";
import "./chunk-115.js";
import "./chunk-110.js";
import "./chunk-68.js";
import "./src-2.js";
import { n as e, r as t } from "./chunk-2.js";
import { c as n } from "./chunk-94.js";
import { t as r } from "./chunk-25.js";
import { t as i } from "./mermaid-parser.core.js";
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
