import "./chunk-91.js";
import "./main.js";
import "./chunk-113.js";
import "./chunk-13.js";
import "./chunk-7.js";
import "./chunk-1.js";
import "./chunk-14.js";
import "./chunk-107.js";
import "./chunk-92.js";
import "./src-2.js";
import { n as e, r as t } from "./chunk-62.js";
import { c as n } from "./chunk-61.js";
import { t as r } from "./chunk-81.js";
import { t as i } from "./mermaid-parser.core-4.js";
import { t as a } from "./chunk-6.js";
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
