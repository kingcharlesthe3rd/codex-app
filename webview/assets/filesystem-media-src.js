import { _r as e, gr as t } from "./src-4.js";
var n = `app://fs`,
  r = `/@fs`;
function i(e) {
  return `${n}${o(e)}`;
}
function a(e) {
  return o(e);
}
function o(n) {
  let i = t(e(n));
  return `${r}${encodeURI(i).replaceAll(`#`, `%23`).replaceAll(`?`, `%3F`)}`;
}
export { a as n, i as t };
//# sourceMappingURL=filesystem-media-src.js.map
