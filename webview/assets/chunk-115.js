const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre.js",
      "./dist-5.js",
      "./chunk.js",
      "./src-2.js",
      "./string.js",
      "./dagre-C_o-JfPY.js",
      "./graphlib-2.js",
      "./isEmpty.js",
      "./isArrayLikeObject.js",
      "./_baseUniq-2.js",
      "./chunk-129.js",
      "./step.js",
      "./math-2.js",
      "./monotone.js",
      "./chunk-65.js",
      "./chunk-3.js",
      "./preload-helper.js",
      "./invert.js",
      "./_basePickBy.js",
      "./clone-1.js",
      "./marked.esm.js",
      "./chunk-4.js",
      "./chunk-75.js",
      "./chunk-95.js",
      "./chunk-100.js",
      "./esm.js",
      "./chunk-101.js",
      "./rough.esm-2.js",
      "./chunk-13.js",
      "./line.js",
      "./path-1.js",
      "./array-1.js",
      "./cose-bilkent-2.js",
      "./cytoscape-cose-bilkent.js",
      "./cytoscape.esm-2.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper.js";
import { u as t } from "./chunk-129.js";
import { n, r } from "./chunk-65.js";
import { s as i, y as a } from "./chunk-3.js";
import { a as o, i as s, s as c } from "./chunk-101.js";
import { a as l, i as u, n as d, r as f } from "./chunk-13.js";
var p = {
    common: i,
    getConfig: a,
    insertCluster: s,
    insertEdge: d,
    insertEdgeLabel: f,
    insertMarkers: u,
    insertNode: o,
    interpolateToCurve: t,
    labelHelper: c,
    log: r,
    positionEdgeLabel: l,
  },
  m = {},
  h = n((e) => {
    for (let t of e) m[t.name] = t;
  }, `registerLayoutLoaders`);
n(() => {
  h([
    {
      name: `dagre`,
      loader: n(
        async () =>
          await e(
            () => import(`./dagre.js`),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
              24, 25, 26, 27, 28, 29, 30, 31,
            ]),
            import.meta.url,
          ),
        `loader`,
      ),
    },
    ...[
      {
        name: `cose-bilkent`,
        loader: n(
          async () =>
            await e(
              () => import(`./cose-bilkent-2.js`),
              __vite__mapDeps([32, 2, 33, 34, 3, 4, 14]),
              import.meta.url,
            ),
          `loader`,
        ),
      },
    ],
  ]);
}, `registerDefaultLayoutLoaders`)();
var g = n(async (e, t) => {
    if (!(e.layoutAlgorithm in m)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
    let n = m[e.layoutAlgorithm];
    return (await n.loader()).render(e, t, p, { algorithm: n.algorithm });
  }, `render`),
  _ = n((e = ``, { fallback: t = `dagre` } = {}) => {
    if (e in m) return e;
    if (t in m)
      return (r.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t);
    throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
  }, `getRegisteredLayoutAlgorithm`);
export { h as n, g as r, _ as t };
//# sourceMappingURL=chunk-115.js.map
