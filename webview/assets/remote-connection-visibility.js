import { v as e } from "./app-server-manager-signals.js";
import { I as t, P as n, lt as r } from "./vscode-api.js";
import { o as i } from "./statsig.js";
import { C as a } from "./config-queries.js";
import { n as o } from "./selectable-remote-connections-signal.js";
var s = r();
function c() {
  let r = (0, s.c)(3),
    { data: o } = n(a, t(e)),
    c = i(`4114442250`);
  if (o?.config[`features.remote_connections`] === !0) return !0;
  let l = o?.config.features;
  if (typeof l != `object` || !l || Array.isArray(l)) return c;
  let u;
  return (
    r[0] !== l || r[1] !== c
      ? ((u = Object.getOwnPropertyDescriptor(l, `remote_connections`)?.value === !0 || c),
        (r[0] = l),
        (r[1] = c),
        (r[2] = u))
      : (u = r[2]),
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
