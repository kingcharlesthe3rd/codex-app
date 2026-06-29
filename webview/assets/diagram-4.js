import { i as e, r as t } from "./src-4.js";
import { r as n } from "./chunk-50.js";
import "./chunk-101.js";
import "./chunk-59.js";
import "./chunk-55.js";
import "./chunk-106.js";
import "./chunk-90.js";
import "./chunk-64.js";
import "./chunk-23.js";
import "./chunk-115.js";
import "./chunk-110.js";
import "./chunk-73.js";
import {
  B as r,
  C as i,
  V as a,
  W as o,
  _ as s,
  a as c,
  c as l,
  d as u,
  v as d,
  y as f,
} from "./chunk-95.js";
import { t as p } from "./chunk-31.js";
import "./dist-2.js";
import { t as m } from "./chunk-32.js";
import { t as h } from "./mermaid-parser.core-4.js";
import { t as g } from "./chunk-121.js";
var _ = new g(() => ({ cnt: 1, stack: [{ id: 0, level: -1, name: `/`, children: [] }] })),
  v = t(() => {
    (_.reset(), c());
  }, `clear`),
  y = t(() => _.records.stack[0], `getRoot`),
  b = t(() => _.records.cnt, `getCount`),
  x = u.treeView,
  S = {
    clear: v,
    addNode: t((e, t) => {
      for (; e <= _.records.stack[_.records.stack.length - 1].level; ) _.records.stack.pop();
      let n = { id: _.records.cnt++, level: e, name: t, children: [] };
      (_.records.stack[_.records.stack.length - 1].children.push(n), _.records.stack.push(n));
    }, `addNode`),
    getRoot: y,
    getCount: b,
    getConfig: t(() => n(x, f().treeView), `getConfig`),
    getAccTitle: d,
    getAccDescription: s,
    getDiagramTitle: i,
    setAccDescription: r,
    setAccTitle: a,
    setDiagramTitle: o,
  },
  C = t((e) => {
    (m(e, S), e.nodes.map((e) => S.addNode(e.indent ? parseInt(e.indent) : 0, e.name)));
  }, `populate`),
  w = {
    parse: t(async (t) => {
      let n = await h(`treeView`, t);
      (e.debug(n), C(n));
    }, `parse`),
  },
  T = t((e, t, n, r, i) => {
    let a = r
        .append(`text`)
        .text(n.name)
        .attr(`dominant-baseline`, `middle`)
        .attr(`class`, `treeView-node-label`),
      { height: o, width: s } = a.node().getBBox(),
      c = o + i.paddingY * 2,
      l = s + i.paddingX * 2;
    (a.attr(`x`, e + i.paddingX),
      a.attr(`y`, t + c / 2),
      (n.BBox = { x: e, y: t, width: l, height: c }));
  }, `positionLabel`),
  E = t(
    (e, t, n, r, i, a) =>
      e
        .append(`line`)
        .attr(`x1`, t)
        .attr(`y1`, n)
        .attr(`x2`, r)
        .attr(`y2`, i)
        .attr(`stroke-width`, a)
        .attr(`class`, `treeView-node-line`),
    `positionLine`,
  ),
  D = t((e, n, r) => {
    let i = 0,
      a = 0,
      o = t((e, t, n, r) => {
        let o = r * (n.rowIndent + n.paddingX);
        T(o, i, t, e, n);
        let { height: s, width: c } = t.BBox;
        (E(e, o - n.rowIndent, i + s / 2, o, i + s / 2, n.lineThickness),
          (a = Math.max(a, o + c)),
          (i += s));
      }, `drawNode`),
      s = t((t, n = 0) => {
        (o(e, t, r, n),
          t.children.forEach((e) => {
            s(e, n + 1);
          }));
        let { x: i, y: a, height: c } = t.BBox;
        if (t.children.length) {
          let { y: n, height: o } = t.children[t.children.length - 1].BBox;
          E(
            e,
            i + r.paddingX,
            a + c,
            i + r.paddingX,
            n + o / 2 + r.lineThickness / 2,
            r.lineThickness,
          );
        }
      }, `processNode`);
    return (s(n), { totalHeight: i, totalWidth: a });
  }, `drawTree`),
  O = {
    draw: t((t, n, r, i) => {
      e.debug(
        `Rendering treeView diagram
` + t,
      );
      let a = i.db,
        o = a.getRoot(),
        s = a.getConfig(),
        c = p(n),
        u = c.append(`g`);
      u.attr(`class`, `tree-view`);
      let { totalHeight: d, totalWidth: f } = D(u, o, s);
      (c.attr(`viewBox`, `-${s.lineThickness / 2} 0 ${f} ${d}`), l(c, d, f, s.useMaxWidth));
    }, `draw`),
  },
  k = { labelFontSize: `16px`, labelColor: `black`, lineColor: `black` },
  A = {
    db: S,
    renderer: O,
    parser: w,
    styles: t(({ treeView: e }) => {
      let { labelFontSize: t, labelColor: r, lineColor: i } = n(k, e);
      return `
    .treeView-node-label {
        font-size: ${t};
        fill: ${r};
    }
    .treeView-node-line {
        stroke: ${i};
    }
    `;
    }, `styles`),
  };
export { A as diagram };
//# sourceMappingURL=diagram-4.js.map
