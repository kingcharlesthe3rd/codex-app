import "./chunk-93.js";
import "./main.js";
import "./chunk-11.js";
import "./chunk-14.js";
import "./chunk-7.js";
import "./chunk-2.js";
import "./chunk-15.js";
import "./chunk-9.js";
import "./chunk-94.js";
import "./src-2.js";
import { n as e, r as t } from "./chunk-65.js";
import { c as n } from "./chunk-3.js";
import { t as r } from "./chunk-6.js";
import { t as i } from "./mermaid-parser.core-D.js";
import { t as a } from "./chunk-110.js";
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
//# sourceMappingURL=infoDiagram.js.map
