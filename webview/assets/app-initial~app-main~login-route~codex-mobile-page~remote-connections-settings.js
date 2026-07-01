import { n as e } from "./rolldown-runtime.js";
import {
  $m as t,
  HP as n,
  IP as r,
  KP as i,
  LP as a,
  NE as o,
  XO as s,
  Xm as c,
  YO as l,
  Yj as u,
  Zm as d,
  bB as f,
  jE as p,
  lV as m,
  qj as h,
  th as g,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
var _,
  v,
  y = e(() => {
    (f(), n(), a(), (_ = i({ locale: `en`, messages: {} })), (v = m(r, _)));
  }),
  b,
  x = e(() => {
    b = `client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR`;
  });
async function S(e, n, r, { shouldApplyStatus: i = () => !0 } = {}) {
  let a = e.get(t, n),
    o = await s(`set-remote-control-enabled-for-host`, { enabled: r, hostId: n }),
    c = e.get(t, n),
    l = c !== a && (c?.status === `connected` || c?.status === `errored`);
  return (i() && (!r || !l) && g(e, n, o), o);
}
var C = e(() => {
  (d(), l());
});
async function w(e, t, { force: n = !1 } = {}) {
  if (((E = t), O?.enabled === t)) return O.promise;
  if (!n && T === t) return null;
  let r = ++D,
    i = S(e, o, t, { shouldApplyStatus: () => r === D });
  O = { enabled: t, promise: i };
  try {
    let n = await i;
    return r === D ? ((T = t), n) : (E != null && E !== t && (await w(e, E, { force: !0 })), n);
  } catch (e) {
    throw (r === D && T === t && (T = void 0), e);
  } finally {
    O?.promise === i && (O = void 0);
  }
}
var T,
  E,
  D,
  O,
  k = e(() => {
    (C(), p(), (D = 0));
  });
function A(e) {
  return e instanceof Error && e.message.includes(N);
}
function j(e) {
  return A(e) || e instanceof c;
}
function M(e, t) {
  return t instanceof c
    ? (e
        .get(u)
        .danger(
          e
            .get(v)
            .formatMessage({
              id: `settings.remoteConnections.remoteControlServerAlreadyOnline`,
              defaultMessage: `Could not enable remote control. Please ensure only one instance of Codex is running.`,
              description: `Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.`,
            }),
          { id: `remote-control-server-already-online` },
        ),
      !0)
    : A(t)
      ? (e
          .get(u)
          .danger(
            e
              .get(v)
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
var N,
  P = e(() => {
    (d(), h(), y(), (N = `token_invalidated`));
  });
export { w as a, b as c, v as d, k as i, x as l, j as n, C as o, M as r, S as s, P as t, y as u };
//# sourceMappingURL=app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js.map
