import { s as e } from "./chunk-Bj-mKKzh.js";
import { Vr as t } from "./src-2.js";
import { Fr as n } from "./app-server-manager-signals.js";
import { n as r } from "./jsx-runtime.js";
import { I as i, W as a, h as o } from "./vscode-api.js";
import { y as s } from "./use-plugins.js";
function c(e) {
  return u(e, `editedFilePaths`);
}
function l(e) {
  return u(e, `referencedFilePaths`);
}
function u(e, t) {
  let r = [],
    i = new Set();
  for (let a of e) for (let e of n(a)[t]) i.has(e) || (i.add(e), r.push(e));
  return r;
}
var d = e(r(), 1),
  f = a(o, []),
  p = 0;
function m() {
  return i(f);
}
function h() {
  return t.isInternal(s());
}
function g(e, t) {
  let n = `[non-serializable title]`;
  return (
    typeof t.title == `string` ? (n = t.title) : (0, d.isValidElement)(t.title) && (n = ``),
    { id: e, titleText: n, lines: t.lines }
  );
}
function _(e, t, n) {
  let r = g(t, n);
  e.set(f, (e) => [...e.filter((e) => e.id !== t), r]);
}
function v(e, t) {
  e.set(f, (e) => e.filter((e) => e.id !== t));
}
function y() {
  if (typeof crypto < `u` && typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = p;
  return ((p += 1), `debug-panel-${e}`);
}
export { m as a, h as i, v as n, c as o, _ as r, l as s, y as t };
//# sourceMappingURL=use-debug-panel.js.map
