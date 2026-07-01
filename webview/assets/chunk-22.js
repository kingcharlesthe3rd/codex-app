const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-7.js",
      "./rolldown-runtime.js",
      "./dagre-3.js",
      "./graphlib-1.js",
      "./isEmpty.js",
      "./_baseFor.js",
      "./reduce.js",
      "./merge-2.js",
      "./lodash-1.js",
      "./chunk-64.js",
      "./chunk-96.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.css",
      "./dist-1.js",
      "./chunk-46.js",
      "./src-1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty.js",
      "./src-4.js",
      "./chunk-47.js",
      "./dist-3.js",
      "./chunk-16.js",
      "./esm-2.js",
      "./chunk-131.js",
      "./chunk-144.js",
      "./rough.esm-2.js",
      "./chunk-66.js",
      "./chunk-82.js",
      "./cose-bilkent-1.js",
      "./cytoscape-cose-bilkent.js",
      "./cytoscape.esm-1.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime.js";
import {
  fL as t,
  pL as n,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { i as r, n as i, r as a } from "./chunk-64.js";
import { A as o, s, y as c } from "./chunk-96.js";
import { d as l, u } from "./chunk-47.js";
import { a as d, c as f, i as p, o as m } from "./chunk-46.js";
import { a as h, i as g, n as _, o as v, r as y } from "./chunk-82.js";
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
                  () => import(`./dagre-7.js`),
                  __vite__mapDeps([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                    22, 23, 24, 25, 26,
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
                    () => import(`./cose-bilkent-1.js`),
                    __vite__mapDeps([27, 1, 28, 29, 15, 16, 17, 9]),
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
        if (e.diagramId)
          for (let t of e.nodes) {
            let n = t.domId || t.id;
            t.domId = `${e.diagramId}-${n}`;
          }
        let n = x[e.layoutAlgorithm],
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
            e
              .append(`svg:stop`)
              .attr(`offset`, `100%`)
              .attr(`stop-color`, c)
              .attr(`stop-opacity`, 1));
        }
        return r.render(e, t, b, { algorithm: n.algorithm });
      }, `render`)),
      (w = i((e = ``, { fallback: t = `dagre` } = {}) => {
        if (e in x) return e;
        if (t in x)
          return (r.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t);
        throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
      }, `getRegisteredLayoutAlgorithm`)));
  });
export { C as i, T as n, S as r, w as t };
//# sourceMappingURL=chunk-22.js.map
