import { n as e } from "./rolldown-runtime.js";
import { i as t, n, r } from "./chunk-64.js";
import { A as i, c as a } from "./chunk-96.js";
import { n as o, t as s } from "./chunk-27.js";
import { n as c, t as l } from "./mermaid-parser.core-3.js";
var u, d, f;
e(() => {
  (s(),
    i(),
    r(),
    l(),
    (u = {
      parse: n(async (e) => {
        let n = await c(`info`, e);
        t.debug(n);
      }, `parse`),
    }),
    (d = { version: `11.14.0` }),
    (f = {
      parser: u,
      db: { getVersion: n(() => d.version, `getVersion`) },
      renderer: {
        draw: n((e, n, r) => {
          t.debug(
            `rendering info diagram
` + e,
          );
          let i = o(n);
          (a(i, 100, 400, !0),
            i
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
export { f as diagram };
//# sourceMappingURL=infoDiagram-2.js.map
