import { Q as e, Qr as t, X as n, Y as r, Z as i, rt as a } from "./src-2.js";
import { U as o, h as s } from "./vscode-api.js";
import { u as c } from "./chunk-12.js";
var l = `/projects`;
function u(e) {
  return `${l}?projectId=${encodeURIComponent(e)}`;
}
function d(e) {
  return new URLSearchParams(e).get(`projectId`);
}
var f = o(`RouteScope`, {
  key: (e) => `${e.pathname}${e.search ?? ``}`,
  parent: s,
  retain: { max: 20 },
});
function p(e) {
  return e.routeKind === `local-thread` ? e.conversationId : null;
}
function m(e) {
  switch (e.routeKind) {
    case `home`:
      return t(`new-conversation`);
    case `new-thread-panel`:
      return t(`panel-new-conversation`);
    case `local-thread`:
      return e.conversationId;
    case `remote-thread`:
      return e.taskId;
    case `other`:
      return null;
  }
}
function h({ pathname: o, routeTemplate: s, search: l = `` }) {
  let u = c(e, o)?.params.conversationId ?? c(i, o)?.params.conversationId;
  if (u != null) {
    let e = new URLSearchParams(l),
      n = e.get(`projectId`),
      r = e.get(`hostId`);
    return {
      conversationId: t(u),
      pathname: o,
      projectContext: n == null ? null : { hostId: r, projectId: n },
      routeKind: `local-thread`,
      routeTemplate: s,
      search: l,
    };
  }
  let d = c(a, o)?.params.taskId ?? c(n, o)?.params.taskId;
  return d == null
    ? o === `/` || o === `/projects` || o === `/hotkey-window`
      ? { pathname: o, routeKind: `home`, routeTemplate: s, search: l }
      : o === `/extension/panel/new` || o === r
        ? { pathname: o, routeKind: `new-thread-panel`, routeTemplate: s, search: l }
        : { pathname: o, routeKind: `other`, routeTemplate: s, search: l }
    : { pathname: o, routeKind: `remote-thread`, routeTemplate: s, search: l, taskId: d };
}
export { l as a, m as i, h as n, u as o, p as r, d as s, f as t };
//# sourceMappingURL=route-scope.js.map
