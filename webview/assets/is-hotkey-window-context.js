import { bt as e } from "./src-3.js";
function t({ pathname: t, initialRoute: n }) {
  return e(t) || e(n);
}
function n() {
  return t(r());
}
function r() {
  if (typeof window > `u`) return { pathname: ``, initialRoute: null };
  let e = new URL(window.location.href);
  return { pathname: e.pathname, initialRoute: e.searchParams.get(`initialRoute`) };
}
export { n as t };
//# sourceMappingURL=is-hotkey-window-context.js.map
