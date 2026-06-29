const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-10.js",
      "./dist-4.js",
      "./chunk.js",
      "./src-4.js",
      "./string.js",
      "./dagre-2.js",
      "./graphlib-1.js",
      "./isEmpty.js",
      "./_baseFor-2.js",
      "./reduce.js",
      "./merge.js",
      "./union.js",
      "./zipObject.js",
      "./flatten.js",
      "./chunk-4.js",
      "./chunk-100.js",
      "./preload-helper.js",
      "./invert.js",
      "./clone-1.js",
      "./marked.esm.js",
      "./chunk-51.js",
      "./chunk-56.js",
      "./step.js",
      "./math-2.js",
      "./monotone.js",
      "./chunk-130.js",
      "./esm.js",
      "./chunk-134.js",
      "./chunk-147.js",
      "./rough.esm-2.js",
      "./chunk-73.js",
      "./chunk-86.js",
      "./line-DIsP-Yv_.js",
      "./path-1.js",
      "./array-1.js",
      "./cose-bilkent-2.js",
      "./cytoscape-cose-bilkent.js",
      "./cytoscape.esm-2.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper.js";
import { n as t, r as n } from "./chunk-4.js";
import { s as r, y as i } from "./chunk-100.js";
import { u as a } from "./chunk-56.js";
import { a as o, i as s, s as c } from "./chunk-51.js";
import { a as l, i as u, n as d, r as f } from "./chunk-86.js";
var p = {
    common: r,
    getConfig: i,
    insertCluster: s,
    insertEdge: d,
    insertEdgeLabel: f,
    insertMarkers: u,
    insertNode: o,
    interpolateToCurve: a,
    labelHelper: c,
    log: n,
    positionEdgeLabel: l,
  },
  m = {},
  h = t((e) => {
    for (let t of e) m[t.name] = t;
  }, `registerLayoutLoaders`);
t(() => {
  h([
    {
      name: `dagre`,
      loader: t(
        async () =>
          await e(
            () => import(`./dagre-10.js`),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
              24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
            ]),
            import.meta.url,
          ),
        `loader`,
      ),
    },
    ...[
      {
        name: `cose-bilkent`,
        loader: t(
          async () =>
            await e(
              () => import(`./cose-bilkent-2.js`),
              __vite__mapDeps([35, 2, 36, 37, 3, 4, 14]),
              import.meta.url,
            ),
          `loader`,
        ),
      },
    ],
  ]);
}, `registerDefaultLayoutLoaders`)();
var g = t(async (e, t) => {
    if (!(e.layoutAlgorithm in m)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
    if (e.diagramId)
      for (let t of e.nodes) {
        let n = t.domId || t.id;
        t.domId = `${e.diagramId}-${n}`;
      }
    let n = m[e.layoutAlgorithm],
      r = await n.loader(),
      { theme: i, themeVariables: a } = e.config,
      { useGradient: o, gradientStart: s, gradientStop: c } = a,
      l = t.attr(`id`);
    if (
      (t
        .append(`defs`)
        .append(`filter`)
        .attr(`id`, `${l}-drop-shadow`)
        .attr(`height`, `130%`)
        .attr(`width`, `130%`)
        .append(`feDropShadow`)
        .attr(`dx`, `4`)
        .attr(`dy`, `4`)
        .attr(`stdDeviation`, 0)
        .attr(`flood-opacity`, `0.06`)
        .attr(`flood-color`, `${i?.includes(`dark`) ? `#FFFFFF` : `#000000`}`),
      t
        .append(`defs`)
        .append(`filter`)
        .attr(`id`, `${l}-drop-shadow-small`)
        .attr(`height`, `150%`)
        .attr(`width`, `150%`)
        .append(`feDropShadow`)
        .attr(`dx`, `2`)
        .attr(`dy`, `2`)
        .attr(`stdDeviation`, 0)
        .attr(`flood-opacity`, `0.06`)
        .attr(`flood-color`, `${i?.includes(`dark`) ? `#FFFFFF` : `#000000`}`),
      o)
    ) {
      let e = t
        .append(`linearGradient`)
        .attr(`id`, t.attr(`id`) + `-gradient`)
        .attr(`gradientUnits`, `objectBoundingBox`)
        .attr(`x1`, `0%`)
        .attr(`y1`, `0%`)
        .attr(`x2`, `100%`)
        .attr(`y2`, `0%`);
      (e.append(`svg:stop`).attr(`offset`, `0%`).attr(`stop-color`, s).attr(`stop-opacity`, 1),
        e.append(`svg:stop`).attr(`offset`, `100%`).attr(`stop-color`, c).attr(`stop-opacity`, 1));
    }
    return r.render(e, t, p, { algorithm: n.algorithm });
  }, `render`),
  _ = t((e = ``, { fallback: t = `dagre` } = {}) => {
    if (e in m) return e;
    if (t in m)
      return (n.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t);
    throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
  }, `getRegisteredLayoutAlgorithm`);
export { h as n, g as r, _ as t };
//# sourceMappingURL=chunk-31.js.map
