const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-1.js",
      "./rolldown-runtime.js",
      "./dagre-4.js",
      "./graphlib-1.js",
      "./isEmpty-1.js",
      "./merge-1.js",
      "./lodash-1.js",
      "./chunk-49.js",
      "./chunk-48.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js",
      "./dist-3.js",
      "./chunk-51.js",
      "./chunk-61.js",
      "./chunk-83.js",
      "./chunk-88.js",
      "./app-initial~app-main~new-thread-panel-page.js",
      "./esm-2.js",
      "./src-3.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty.js",
      "./src-4.js",
      "./chunk-123.js",
      "./dist-2.js",
      "./chunk-89.js",
      "./rough.esm-2.js",
      "./chunk-117.js",
      "./cose-bilkent-3.js",
      "./cytoscape-cose-bilkent.js",
      "./cytoscape.esm-2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime.js";
import {
  hi as t,
  mi as n,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { i as r, n as i, r as a } from "./chunk-49.js";
import { k as o, s, y as c } from "./chunk-48.js";
import { d as l, u } from "./chunk-123.js";
import { a as d, c as f, i as p, o as m } from "./chunk-89.js";
import { a as h, i as g, n as _, o as v, r as y } from "./chunk-117.js";
var b,
  x,
  S,
  C,
  w,
  T = e(() => {
    (_(),
      p(),
      u(),
      o(),
      a(),
      t(),
      (b = {
        common: s,
        getConfig: c,
        insertCluster: d,
        insertEdge: y,
        insertEdgeLabel: g,
        insertMarkers: h,
        insertNode: m,
        interpolateToCurve: l,
        labelHelper: f,
        log: r,
        positionEdgeLabel: v,
      }),
      (x = {}),
      (S = i((e) => {
        for (let t of e) x[t.name] = t;
      }, `registerLayoutLoaders`)),
      i(() => {
        S([
          {
            name: `dagre`,
            loader: i(
              async () =>
                await n(
                  () => import(`./dagre-1.js`),
                  __vite__mapDeps([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                    22, 23, 24,
                  ]),
                  import.meta.url,
                ),
              `loader`,
            ),
          },
          ...[
            {
              name: `cose-bilkent`,
              loader: i(
                async () =>
                  await n(
                    () => import(`./cose-bilkent-3.js`),
                    __vite__mapDeps([25, 1, 26, 27, 17, 18, 19, 7]),
                    import.meta.url,
                  ),
                `loader`,
              ),
            },
          ],
        ]);
      }, `registerDefaultLayoutLoaders`)(),
      (C = i(async (e, t) => {
        if (!(e.layoutAlgorithm in x))
          throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
        let n = x[e.layoutAlgorithm];
        return (await n.loader()).render(e, t, b, { algorithm: n.algorithm });
      }, `render`)),
      (w = i((e = ``, { fallback: t = `dagre` } = {}) => {
        if (e in x) return e;
        if (t in x)
          return (r.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t);
        throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
      }, `getRegisteredLayoutAlgorithm`)));
  });
export { C as i, T as n, S as r, w as t };
//# sourceMappingURL=chunk-106.js.map
