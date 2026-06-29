import "./main.js";
import "./chunk-100.js";
import "./chunk-56.js";
import "./chunk-2.js";
import "./chunk-107.js";
import "./chunk-91.js";
import "./chunk-62.js";
import "./chunk-22.js";
import "./chunk-114.js";
import "./chunk-111.js";
import "./chunk-73.js";
import "./src-4.js";
import { n as e, r as t } from "./chunk-64.js";
import { c as n } from "./chunk-98.js";
import { t as r } from "./chunk-30.js";
import { t as i } from "./mermaid-parser.core-Cpt-mObg.js";
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
//# sourceMappingURL=infoDiagram-2.js.map
