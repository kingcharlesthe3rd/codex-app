import { n as e } from "./rolldown-runtime.js";
import { i as t, n, r } from "./chunk-2.js";
import { c as i, k as a } from "./chunk-1.js";
import { n as o, t as s } from "./chunk-83.js";
import { n as c, t as l } from "./mermaid-parser.core-2.js";
import { n as u, t as d } from "./chunk-7.js";
var f, p, m;
e(() => {
  (d(),
    s(),
    a(),
    r(),
    l(),
    (f = {
      parse: n(async (e) => {
        let n = await c(`info`, e);
        t.debug(n);
      }, `parse`),
    }),
    (p = { version: u.version + `` }),
    (m = {
      parser: f,
      db: { getVersion: n(() => p.version, `getVersion`) },
      renderer: {
        draw: n((e, n, r) => {
          t.debug(
            `rendering info diagram
` + e,
          );
          let a = o(n);
          (i(a, 100, 400, !0),
            a
              .append(`g`)
              .append(`text`)
              .attr(`x`, 100)
              .attr(`y`, 40)
              .attr(`class`, `version`)
              .attr(`font-size`, 32)
              .style(`text-anchor`, `middle`)
              .text(`v${r}`));
        }, `draw`),
      },
    }));
})();
export { m as diagram };
//# sourceMappingURL=infoDiagram.js.map
