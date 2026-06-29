import { n as e } from "./rolldown-runtime.js";
import {
  UE as t,
  VE as n,
  ah as r,
  ak as i,
  cM as a,
  ch as o,
  oh as s,
  ok as c,
  uM as l,
  uh as u,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  nc as d,
  tc as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
var p,
  m = e(() => {
    p = `client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR`;
  });
async function h(e, t, n, { shouldApplyStatus: r = () => !0 } = {}) {
  let i = e.get(o, t),
    a = await c(`set-remote-control-enabled-for-host`, { enabled: n, hostId: t }),
    s = e.get(o, t),
    l = s !== i && (s?.status === `connected` || s?.status === `errored`);
  return (r() && (!n || !l) && u(e, t, a), a);
}
var g = e(() => {
  (s(), i());
});
async function _(e, n, { force: r = !1 } = {}) {
  if (((y = n), x?.enabled === n)) return x.promise;
  if (!r && v === n) return null;
  let i = ++b,
    a = h(e, t, n, { shouldApplyStatus: () => i === b });
  x = { enabled: n, promise: a };
  try {
    let t = await a;
    return i === b ? ((v = n), t) : (y != null && y !== n && (await _(e, y, { force: !0 })), t);
  } catch (e) {
    throw (i === b && v === n && (v = void 0), e);
  } finally {
    x?.promise === a && (x = void 0);
  }
}
var v,
  y,
  b,
  x,
  S = e(() => {
    (g(), n(), (b = 0));
  });
function C(e) {
  return e instanceof Error && e.message.includes(E);
}
function w(e) {
  return C(e) || e instanceof r;
}
function T(e, t) {
  return t instanceof r
    ? (e
        .get(l)
        .danger(
          e
            .get(d)
            .formatMessage({
              id: `settings.remoteConnections.remoteControlServerAlreadyOnline`,
              defaultMessage: `Could not enable remote control. Please ensure only one instance of Codex is running.`,
              description: `Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.`,
            }),
          { id: `remote-control-server-already-online` },
        ),
      !0)
    : C(t)
      ? (e
          .get(l)
          .danger(
            e
              .get(d)
              .formatMessage({
                id: `settings.remoteConnections.remoteControlTokenInvalidated`,
                defaultMessage: `Your Codex session on this device has expired. Sign in again and try again.`,
                description: `Error shown when enabling remote control fails because the device's Codex authentication token was invalidated`,
              }),
            { id: `remote-control-token-invalidated` },
          ),
        !0)
      : !1;
}
var E,
  D = e(() => {
    (s(), a(), f(), (E = `token_invalidated`));
  });
export { _ as a, p as c, S as i, m as l, w as n, g as o, T as r, h as s, D as t };
//# sourceMappingURL=app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js.map
