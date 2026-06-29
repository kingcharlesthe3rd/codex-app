import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  Hv as i,
  IB as a,
  JV as o,
  QP as s,
  Uv as c,
  ZR as l,
  bF as u,
  bs as d,
  yV as f,
  ys as p,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function m(e) {
  return g(e, `editedFilePaths`);
}
function h(e) {
  return g(e, `referencedFilePaths`);
}
function g(e, t) {
  let n = [],
    r = new Set();
  for (let a of e) for (let e of i(a)[t]) r.has(e) || (r.add(e), n.push(e));
  return n;
}
var _ = e(() => {
  c();
});
function v() {
  return a(T);
}
function y() {
  return l.isInternal(p());
}
function b(e, t) {
  let n = `[non-serializable title]`;
  return (
    typeof t.title == `string` ? (n = t.title) : (0, w.isValidElement)(t.title) && (n = ``),
    { id: e, titleText: n, lines: t.lines }
  );
}
function x(e, t, n) {
  let r = b(t, n);
  e.set(T, (e) => [...e.filter((e) => e.id !== t), r]);
}
function S(e, t) {
  e.set(T, (e) => e.filter((e) => e.id !== t));
}
function C() {
  if (typeof crypto < `u` && typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = E;
  return ((E += 1), `debug-panel-${e}`);
}
var w,
  T,
  E,
  D = e(() => {
    (r(), u(), (w = t(o(), 1)), n(), d(), (T = f(s, [])), (E = 0));
  });
export { y as a, h as c, x as i, _ as l, D as n, v as o, S as r, m as s, C as t };
//# sourceMappingURL=use-debug-panel.js.map
