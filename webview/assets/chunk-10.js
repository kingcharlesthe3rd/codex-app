const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-5.js",
      "./rolldown-runtime.js",
      "./dagre-4.js",
      "./graphlib-DwAx-mHa.js",
      "./isEmpty-1.js",
      "./merge-1.js",
      "./lodash-2.js",
      "./chunk-2.js",
      "./chunk-1.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.css",
      "./dist-1.js",
      "./chunk-65.js",
      "./chunk-74.js",
      "./chunk-5.js",
      "./chunk-99.js",
      "./esm-2.js",
      "./src-1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty.js",
      "./src-4.js",
      "./chunk-14.js",
      "./dist-3.js",
      "./chunk-100.js",
      "./rough.esm-2.js",
      "./chunk-120.js",
      "./cose-bilkent-2.js",
      "./cytoscape-cose-bilkent.js",
      "./cytoscape.esm-1.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime.js";
import {
  fL as t,
  pL as n,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { i as r, n as i, r as a } from "./chunk-2.js";
import { k as o, s, y as c } from "./chunk-1.js";
import { d as l, u } from "./chunk-14.js";
import { a as d, c as f, i as p, o as m } from "./chunk-100.js";
import { a as h, i as g, n as _, o as v, r as y } from "./chunk-120.js";
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
      n(),
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
                await t(
                  () => import(`./dagre-5.js`),
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
                  await t(
                    () => import(`./cose-bilkent-2.js`),
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
//# sourceMappingURL=chunk-10.js.map
