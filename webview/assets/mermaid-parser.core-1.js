const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./info-1.js",
      "./rolldown-runtime.js",
      "./chunk-81.js",
      "./isEmpty-1.js",
      "./merge-2.js",
      "./lodash-2.js",
      "./isEmpty-3.js",
      "./_baseFor-1.js",
      "./reduce.js",
      "./main.js",
      "./chunk-99.js",
      "./packet-5.js",
      "./chunk-39.js",
      "./pie-1.js",
      "./chunk-125.js",
      "./architecture-1.js",
      "./chunk-107.js",
      "./gitGraph-5.js",
      "./chunk-124.js",
      "./radar-1.js",
      "./chunk-100.js",
      "./treemap-1.js",
      "./chunk-82.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime.js";
import {
  XK as t,
  YK as n,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import { f as r, p as i } from "./chunk-81.js";
import { r as a } from "./chunk-107.js";
import { r as o } from "./chunk-124.js";
import { r as s } from "./chunk-99.js";
import { r as c } from "./chunk-39.js";
import { r as l } from "./chunk-125.js";
import { r as u } from "./chunk-100.js";
import { r as d } from "./chunk-82.js";
async function f(e, t) {
  let n = m[e];
  if (!n) throw Error(`Unknown diagram type: ${e}`);
  p[e] || (await n());
  let r = p[e].parse(t);
  if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new h(r);
  return r.value;
}
var p,
  m,
  h,
  g = e(() => {
    (o(),
      s(),
      c(),
      l(),
      a(),
      u(),
      d(),
      i(),
      t(),
      (p = {}),
      (m = {
        info: r(async () => {
          let { createInfoServices: e } = await n(
            async () => {
              let { createInfoServices: e } = await import(`./info-1.js`);
              return { createInfoServices: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            import.meta.url,
          );
          p.info = e().Info.parser.LangiumParser;
        }, `info`),
        packet: r(async () => {
          let { createPacketServices: e } = await n(
            async () => {
              let { createPacketServices: e } = await import(`./packet-5.js`);
              return { createPacketServices: e };
            },
            __vite__mapDeps([11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12]),
            import.meta.url,
          );
          p.packet = e().Packet.parser.LangiumParser;
        }, `packet`),
        pie: r(async () => {
          let { createPieServices: e } = await n(
            async () => {
              let { createPieServices: e } = await import(`./pie-1.js`);
              return { createPieServices: e };
            },
            __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14]),
            import.meta.url,
          );
          p.pie = e().Pie.parser.LangiumParser;
        }, `pie`),
        architecture: r(async () => {
          let { createArchitectureServices: e } = await n(
            async () => {
              let { createArchitectureServices: e } = await import(`./architecture-1.js`);
              return { createArchitectureServices: e };
            },
            __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16]),
            import.meta.url,
          );
          p.architecture = e().Architecture.parser.LangiumParser;
        }, `architecture`),
        gitGraph: r(async () => {
          let { createGitGraphServices: e } = await n(
            async () => {
              let { createGitGraphServices: e } = await import(`./gitGraph-5.js`);
              return { createGitGraphServices: e };
            },
            __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18]),
            import.meta.url,
          );
          p.gitGraph = e().GitGraph.parser.LangiumParser;
        }, `gitGraph`),
        radar: r(async () => {
          let { createRadarServices: e } = await n(
            async () => {
              let { createRadarServices: e } = await import(`./radar-1.js`);
              return { createRadarServices: e };
            },
            __vite__mapDeps([19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]),
            import.meta.url,
          );
          p.radar = e().Radar.parser.LangiumParser;
        }, `radar`),
        treemap: r(async () => {
          let { createTreemapServices: e } = await n(
            async () => {
              let { createTreemapServices: e } = await import(`./treemap-1.js`);
              return { createTreemapServices: e };
            },
            __vite__mapDeps([21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22]),
            import.meta.url,
          );
          p.treemap = e().Treemap.parser.LangiumParser;
        }, `treemap`),
      }),
      r(f, `parse`),
      (h = class extends Error {
        constructor(e) {
          let t = e.lexerErrors.map((e) => e.message).join(`
`),
            n = e.parserErrors.map((e) => e.message).join(`
`);
          (super(`Parsing failed: ${t} ${n}`), (this.result = e));
        }
        static {
          r(this, `MermaidParseError`);
        }
      }));
  });
export { f as n, g as t };
//# sourceMappingURL=mermaid-parser.core-1.js.map
