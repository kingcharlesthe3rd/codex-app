import { Hr as e } from "./src-2.js";
import {
  E as t,
  Ho as n,
  Wo as r,
  g as i,
  ia as a,
  n as o,
  qo as s,
  sa as c,
} from "./app-server-manager-signals.js";
import { I as l, L as u, P as d, g as f, h as p, lt as m } from "./vscode-api.js";
import { t as h } from "./thread-context-inputs.js";
import { n as g, t as _ } from "./selectable-remote-connections-signal.js";
import { a as v } from "./remote-projects.js";
var y = { connected: 0, restarting: 1, error: 2, connecting: 3, disconnected: 4 };
function b(e, t) {
  return [...e]
    .map((e, t) => ({ connection: e, index: t }))
    .sort((e, n) => {
      let r = y[t[e.connection.hostId] ?? `disconnected`],
        i = y[t[n.connection.hostId] ?? `disconnected`];
      return r === i ? e.index - n.index : r - i;
    })
    .map(({ connection: e }) => e);
}
var x = `[remote-connections/selection]`,
  S = u(p, ({ get: t }) => {
    let n = t(_),
      r = t(g) ?? [],
      i = b(r, Object.fromEntries(r.map((e) => [e.hostId, t(o, e.hostId)]))),
      s = a(t, e.SELECTED_REMOTE_HOST_ID) ?? null,
      c = n ? s : (i.find((e) => e.hostId === s)?.hostId ?? i[0]?.hostId ?? null);
    return {
      isRemoteConnectionsLoading: n,
      persistedSelectedRemoteHostId: s,
      remoteConnections: r,
      selectedRemoteConnection: i.find((e) => e.hostId === c) ?? null,
      selectedRemoteHostId: c,
      sortedRemoteConnections: i,
    };
  });
function C(t) {
  let n;
  return t.watch(({ get: r }) => {
    let i = r(S);
    if (
      (n === i.persistedSelectedRemoteHostId && (n = void 0),
      i.isRemoteConnectionsLoading ||
        i.persistedSelectedRemoteHostId === i.selectedRemoteHostId ||
        i.sortedRemoteConnections.length === 0 ||
        n === i.selectedRemoteHostId)
    )
      return;
    f.info(`${x} persisted_selection_reconciled`, {
      safe: {
        availableConnectionCount: i.sortedRemoteConnections.length,
        selectedConnectionState: i.selectedRemoteConnection == null ? `cleared` : `selected`,
      },
      sensitive: {
        persistedSelectedRemoteHostId: i.persistedSelectedRemoteHostId,
        selectedRemoteHostId: i.selectedRemoteHostId,
      },
    });
    let a = i.selectedRemoteHostId;
    ((n = a),
      c(t, e.SELECTED_REMOTE_HOST_ID, a ?? void 0).catch((e) => {
        throw (n === a && (n = void 0), e);
      }));
  });
}
var w = m();
function T({
  activeWorkspaceRoot: e,
  conversationCwd: t,
  conversationHostId: n,
  selectedRemoteProject: i,
}) {
  return t
    ? { cwd: t === `~` ? null : t, hostId: n ?? `local` }
    : i == null
      ? { cwd: e === `~` ? null : e, hostId: r }
      : { cwd: i.remotePath, hostId: i.hostId };
}
function E(e) {
  let r = (0, w.c)(14),
    a = e === void 0 ? null : e,
    o = d(i, a),
    c = d(t, a),
    { data: u, isLoading: f } = l(h),
    { remoteConnections: p } = l(S),
    { selectedRemoteProject: m } = v(),
    [g] = s(`host_config`),
    _ = u?.roots?.[0] ?? null,
    y;
  r[0] !== _ || r[1] !== o || r[2] !== c || r[3] !== m
    ? ((y = T({
        activeWorkspaceRoot: _,
        conversationCwd: o,
        conversationHostId: c,
        selectedRemoteProject: m,
      })),
      (r[0] = _),
      (r[1] = o),
      (r[2] = c),
      (r[3] = m),
      (r[4] = y))
    : (y = r[4]);
  let b = y,
    x;
  r[5] !== g || r[6] !== p || r[7] !== b
    ? ((x = g && b.hostId === g.id ? g : n(b.hostId, p)),
      (r[5] = g),
      (r[6] = p),
      (r[7] = b),
      (r[8] = x))
    : (x = r[8]);
  let C = x,
    E;
  return (
    r[9] !== _ || r[10] !== C || r[11] !== f || r[12] !== b
      ? ((E = { activeWorkspaceRoot: _, isActiveWorkspaceRootLoading: f, hostConfig: C, ...b }),
        (r[9] = _),
        (r[10] = C),
        (r[11] = f),
        (r[12] = b),
        (r[13] = E))
      : (E = r[13]),
    E
  );
}
export { C as i, E as n, S as r, T as t };
//# sourceMappingURL=use-webview-execution-target.js.map
