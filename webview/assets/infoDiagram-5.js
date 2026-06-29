import "./chunk-97.js";
import "./main-BDm-p1LA.js";
import "./chunk-17.js";
import "./chunk-21.js";
import "./chunk-12.js";
import "./chunk-2.js";
import "./chunk-22.js";
import "./chunk-14.js";
import "./chunk-98.js";
import "./src-3.js";
import { n as e, r as t } from "./chunk-70.js";
import { c as n } from "./chunk-3.js";
import { t as r } from "./chunk-8.js";
import { t as i } from "./mermaid-parser.core-1.js";
import { t as a } from "./chunk-11.js";
var o = {
    parse: e(async (e) => {
      let n = await i(`info`, e);
      t.debug(n);
    }, `parse`),
  },
  s = { version: a.version + `` },
  c = {
    parser: o,
    db: { getVersion: e(() => s.version, `getVersion`) },
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
export { c as diagram };
//# sourceMappingURL=infoDiagram-5.js.map
