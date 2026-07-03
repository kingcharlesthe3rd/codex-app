import { i as e, r as t } from "./src-5.js";
import "./chunk-93.js";
import "./chunk-42.js";
import "./chunk-38.js";
import "./chunk-94.js";
import "./chunk-80.js";
import "./chunk-44.js";
import "./chunk-4.js";
import "./chunk-110.js";
import "./chunk-104.js";
import "./chunk-57.js";
import { c as n } from "./chunk-86.js";
import { t as r } from "./chunk-11.js";
import { t as i } from "./mermaid-parser.core-5.js";
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
//# sourceMappingURL=infoDiagram-4.js.map
