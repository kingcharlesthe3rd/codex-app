import { a as e, s as t, z as n } from "./app-scope.js";
import { y as r } from "./app-server-manager-signals.js";
import { o as i } from "./statsig.js";
import { w as a } from "./config-queries.js";
import { n as o } from "./selectable-remote-connections-signal.js";
var s = n();
function c() {
  let n = (0, s.c)(3),
    { data: o } = e(a, t(r)),
    c = i(`4114442250`);
  if (o?.config[`features.remote_connections`] === !0) return !0;
  let l = o?.config.features;
  if (typeof l != `object` || !l || Array.isArray(l)) return c;
  let u;
  return (
    n[0] !== l || n[1] !== c
      ? ((u = Object.getOwnPropertyDescriptor(l, `remote_connections`)?.value === !0 || c),
        (n[0] = l),
        (n[1] = c),
        (n[2] = u))
      : (u = n[2]),
    u
  );
}
function l() {
  return i(`1042620455`);
}
function u() {
  let e = t(o) ?? [];
  return { remoteConnections: e, enabledRemoteHostIdSet: new Set(e.flatMap(d)) };
}
function d(e) {
  return e.autoConnect ? [e.hostId] : [];
}
export { c as n, l as r, u as t };
//# sourceMappingURL=remote-connection-visibility.js.map
