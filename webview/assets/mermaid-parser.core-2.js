const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./info-4.js",
      "./rolldown-runtime.js",
      "./chunk-90.js",
      "./isEmpty-2.js",
      "./_baseFor-1.js",
      "./reduce.js",
      "./main.js",
      "./chunk-95.js",
      "./packet-3.js",
      "./chunk-79.js",
      "./pie-4.js",
      "./chunk-45.js",
      "./treeView-3.js",
      "./chunk-108.js",
      "./architecture-4.js",
      "./chunk-43.js",
      "./gitGraph-3.js",
      "./chunk-36.js",
      "./radar-4.js",
      "./chunk-1.js",
      "./treemap-4.js",
      "./chunk-102.js",
      "./wardley-3.js",
      "./chunk-57.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime.js";
import {
  hi as t,
  mi as n,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { h as r, m as i } from "./chunk-90.js";
import { r as a } from "./chunk-43.js";
import { r as o } from "./chunk-36.js";
import { r as s } from "./chunk-95.js";
import { r as c } from "./chunk-79.js";
import { r as l } from "./chunk-45.js";
import { r as u } from "./chunk-1.js";
import { r as d } from "./chunk-108.js";
import { r as f } from "./chunk-102.js";
import { r as p } from "./chunk-57.js";
async function m(e, t) {
  let n = g[e];
  if (!n) throw Error(`Unknown diagram type: ${e}`);
  h[e] || (await n());
  let r = h[e].parse(t);
  if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new _(r);
  return r.value;
}
var h,
  g,
  _,
  v = e(() => {
    (f(),
      p(),
      o(),
      s(),
      c(),
      l(),
      d(),
      a(),
      u(),
      r(),
      t(),
      (h = {}),
      (g = {
        info: i(async () => {
          let { createInfoServices: e } = await n(
            async () => {
              let { createInfoServices: e } = await import(`./info-4.js`);
              return { createInfoServices: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
            import.meta.url,
          );
          h.info = e().Info.parser.LangiumParser;
        }, `info`),
        packet: i(async () => {
          let { createPacketServices: e } = await n(
            async () => {
              let { createPacketServices: e } = await import(`./packet-3.js`);
              return { createPacketServices: e };
            },
            __vite__mapDeps([8, 1, 2, 3, 4, 5, 6, 9]),
            import.meta.url,
          );
          h.packet = e().Packet.parser.LangiumParser;
        }, `packet`),
        pie: i(async () => {
          let { createPieServices: e } = await n(
            async () => {
              let { createPieServices: e } = await import(`./pie-4.js`);
              return { createPieServices: e };
            },
            __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 11]),
            import.meta.url,
          );
          h.pie = e().Pie.parser.LangiumParser;
        }, `pie`),
        treeView: i(async () => {
          let { createTreeViewServices: e } = await n(
            async () => {
              let { createTreeViewServices: e } = await import(`./treeView-3.js`);
              return { createTreeViewServices: e };
            },
            __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 13]),
            import.meta.url,
          );
          h.treeView = e().TreeView.parser.LangiumParser;
        }, `treeView`),
        architecture: i(async () => {
          let { createArchitectureServices: e } = await n(
            async () => {
              let { createArchitectureServices: e } = await import(`./architecture-4.js`);
              return { createArchitectureServices: e };
            },
            __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 15]),
            import.meta.url,
          );
          h.architecture = e().Architecture.parser.LangiumParser;
        }, `architecture`),
        gitGraph: i(async () => {
          let { createGitGraphServices: e } = await n(
            async () => {
              let { createGitGraphServices: e } = await import(`./gitGraph-3.js`);
              return { createGitGraphServices: e };
            },
            __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 17]),
            import.meta.url,
          );
          h.gitGraph = e().GitGraph.parser.LangiumParser;
        }, `gitGraph`),
        radar: i(async () => {
          let { createRadarServices: e } = await n(
            async () => {
              let { createRadarServices: e } = await import(`./radar-4.js`);
              return { createRadarServices: e };
            },
            __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 19]),
            import.meta.url,
          );
          h.radar = e().Radar.parser.LangiumParser;
        }, `radar`),
        treemap: i(async () => {
          let { createTreemapServices: e } = await n(
            async () => {
              let { createTreemapServices: e } = await import(`./treemap-4.js`);
              return { createTreemapServices: e };
            },
            __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 21]),
            import.meta.url,
          );
          h.treemap = e().Treemap.parser.LangiumParser;
        }, `treemap`),
        wardley: i(async () => {
          let { createWardleyServices: e } = await n(
            async () => {
              let { createWardleyServices: e } = await import(`./wardley-3.js`);
              return { createWardleyServices: e };
            },
            __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 23]),
            import.meta.url,
          );
          h.wardley = e().Wardley.parser.LangiumParser;
        }, `wardley`),
      }),
      i(m, `parse`),
      (_ = class extends Error {
        constructor(e) {
          let t = e.lexerErrors.map(
              (e) =>
                `Lexer error on line ${e.line !== void 0 && !isNaN(e.line) ? e.line : `?`}, column ${e.column !== void 0 && !isNaN(e.column) ? e.column : `?`}: ${e.message}`,
            ).join(`
`),
            n = e.parserErrors.map(
              (e) =>
                `Parse error on line ${e.token.startLine !== void 0 && !isNaN(e.token.startLine) ? e.token.startLine : `?`}, column ${e.token.startColumn !== void 0 && !isNaN(e.token.startColumn) ? e.token.startColumn : `?`}: ${e.message}`,
            ).join(`
`);
          (super(`Parsing failed: ${t} ${n}`), (this.result = e));
        }
        static {
          i(this, `MermaidParseError`);
        }
      }));
  });
export { m as n, v as t };
//# sourceMappingURL=mermaid-parser.core-2.js.map
