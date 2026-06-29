import { Lr as e, Rr as t } from "./src-2.js";
var n = `app://fs`,
  r = `/@fs`;
function i(e) {
  return `${n}${o(e)}`;
}
function a(e) {
  return o(e);
}
function o(n) {
  let i = e(t(n));
  return `${r}${encodeURI(i).replaceAll(`#`, `%23`).replaceAll(`?`, `%3F`)}`;
}
export { a as n, i as t };
//# sourceMappingURL=filesystem-media-src.js.map
