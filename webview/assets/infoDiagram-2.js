import "./main-BDm-p1LA.js";
import "./chunk-104.js";
import "./chunk-64.js";
import "./chunk-58.js";
import "./chunk-110.js";
import "./chunk-96.js";
import "./chunk-66.js";
import "./chunk-26.js";
import "./chunk-118.js";
import "./chunk-112.js";
import "./chunk-76.js";
import "./src-3.js";
import { n as e, r as t } from "./chunk-4.js";
import { c as n } from "./chunk-100.js";
import { t as r } from "./chunk-36.js";
import { t as i } from "./mermaid-parser.core-4.js";
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
