const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./info-1.js",
      "./chunk-91.js",
      "./chunk-Bj-mKKzh.js",
      "./isEmpty-2.js",
      "./isArrayLikeObject.js",
      "./_baseUniq-1.js",
      "./_basePickBy.js",
      "./clone-4.js",
      "./isEmpty-1.js",
      "./_baseFor.js",
      "./reduce.js",
      "./flatten.js",
      "./main.js",
      "./chunk-11.js",
      "./packet-4.js",
      "./chunk-2.js",
      "./pie-1.js",
      "./chunk-18.js",
      "./architecture.js",
      "./chunk-112.js",
      "./gitGraph-2.js",
      "./chunk-17.js",
      "./radar.js",
      "./chunk-107.js",
      "./treemap-1.js",
      "./chunk-92.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper.js";
import { f as t } from "./chunk-91.js";
var n = {},
  r = {
    info: t(async () => {
      let { createInfoServices: t } = await e(
        async () => {
          let { createInfoServices: e } = await import(`./info-1.js`);
          return { createInfoServices: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        import.meta.url,
      );
      n.info = t().Info.parser.LangiumParser;
    }, `info`),
    packet: t(async () => {
      let { createPacketServices: t } = await e(
        async () => {
          let { createPacketServices: e } = await import(`./packet-4.js`);
          return { createPacketServices: e };
        },
        __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15]),
        import.meta.url,
      );
      n.packet = t().Packet.parser.LangiumParser;
    }, `packet`),
    pie: t(async () => {
      let { createPieServices: t } = await e(
        async () => {
          let { createPieServices: e } = await import(`./pie-1.js`);
          return { createPieServices: e };
        },
        __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17]),
        import.meta.url,
      );
      n.pie = t().Pie.parser.LangiumParser;
    }, `pie`),
    architecture: t(async () => {
      let { createArchitectureServices: t } = await e(
        async () => {
          let { createArchitectureServices: e } = await import(`./architecture.js`);
          return { createArchitectureServices: e };
        },
        __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19]),
        import.meta.url,
      );
      n.architecture = t().Architecture.parser.LangiumParser;
    }, `architecture`),
    gitGraph: t(async () => {
      let { createGitGraphServices: t } = await e(
        async () => {
          let { createGitGraphServices: e } = await import(`./gitGraph-2.js`);
          return { createGitGraphServices: e };
        },
        __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21]),
        import.meta.url,
      );
      n.gitGraph = t().GitGraph.parser.LangiumParser;
    }, `gitGraph`),
    radar: t(async () => {
      let { createRadarServices: t } = await e(
        async () => {
          let { createRadarServices: e } = await import(`./radar.js`);
          return { createRadarServices: e };
        },
        __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23]),
        import.meta.url,
      );
      n.radar = t().Radar.parser.LangiumParser;
    }, `radar`),
    treemap: t(async () => {
      let { createTreemapServices: t } = await e(
        async () => {
          let { createTreemapServices: e } = await import(`./treemap-1.js`);
          return { createTreemapServices: e };
        },
        __vite__mapDeps([24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25]),
        import.meta.url,
      );
      n.treemap = t().Treemap.parser.LangiumParser;
    }, `treemap`),
  };
async function i(e, t) {
  let i = r[e];
  if (!i) throw Error(`Unknown diagram type: ${e}`);
  n[e] || (await i());
  let o = n[e].parse(t);
  if (o.lexerErrors.length > 0 || o.parserErrors.length > 0) throw new a(o);
  return o.value;
}
t(i, `parse`);
var a = class extends Error {
  constructor(e) {
    let t = e.lexerErrors.map((e) => e.message).join(`
`),
      n = e.parserErrors.map((e) => e.message).join(`
`);
    (super(`Parsing failed: ${t} ${n}`), (this.result = e));
  }
  static {
    t(this, `MermaidParseError`);
  }
};
export { i as t };
//# sourceMappingURL=mermaid-parser.core-2.js.map
