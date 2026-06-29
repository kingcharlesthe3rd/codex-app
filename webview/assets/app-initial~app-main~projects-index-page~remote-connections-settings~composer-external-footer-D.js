import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  Wt as r,
  ac as i,
  kl as a,
  tc as o,
  xl as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  $p as c,
  Qp as l,
  am as u,
  fp as d,
  im as f,
  mp as p,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Fa as m,
  Ia as h,
  Kl as g,
  _v as _,
  aw as v,
  ca as y,
  fa as b,
  ga as x,
  iw as S,
  oa as C,
  ou as w,
  uw as T,
  vv as E,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
var D,
  O,
  k = e(() => {
    (t(a()),
      (D = s()),
      (O = (e) =>
        (0, D.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 16,
          height: 16,
          fill: `currentColor`,
          viewBox: `0 0 16 16`,
          ...e,
          children: [
            (0, D.jsx)(`path`, {
              d: `M8 9.8a.767.767 0 1 1 0 1.533A.767.767 0 0 1 8 9.8Zm0-5.134c.368 0 .667.299.667.667V8a.667.667 0 0 1-1.334 0V5.333c0-.368.299-.667.667-.667Z`,
            }),
            (0, D.jsx)(`path`, {
              fillRule: `evenodd`,
              d: `M8 1.333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 8 1.333Zm0 1.334a5.333 5.333 0 1 0 0 10.666A5.333 5.333 0 0 0 8 2.667Z`,
              clipRule: `evenodd`,
            }),
          ],
        })));
  });
function A(e) {
  let t = (0, j.c)(9),
    n = i(b, e),
    r = i(y, e),
    a = i(x, e),
    o = i(C, e),
    s = i(h, e);
  if (n == null) {
    let e;
    return (
      t[0] !== a || t[1] !== o || t[2] !== s
        ? ((e = { appServerVersion: a, error: o, installedCodexVersion: s, state: null }),
          (t[0] = a),
          (t[1] = o),
          (t[2] = s),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let c;
  return (
    t[4] !== a || t[5] !== o || t[6] !== s || t[7] !== r
      ? ((c = { appServerVersion: a, error: o, installedCodexVersion: s, state: r }),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = r),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
var j,
  M = e(() => {
    ((j = n()), o(), m());
  });
function N(e, t) {
  switch (t.code) {
    case `remote-codex-not-found`:
      return e.formatMessage({
        id: `appServer.error.remoteCodexNotFound`,
        defaultMessage: `Codex is not installed on this remote machine`,
        description: `Error shown when an SSH remote connection is reachable but the Codex CLI is missing`,
      });
    case `login-required`:
      return e.formatMessage({
        id: `appServer.error.loginRequired`,
        defaultMessage: `You are currently logged out.`,
        description: `Error shown when a remote app-server connection requires the user to authenticate`,
      });
    case `restart-required`:
      return t.currentVersion == null || t.installedVersion == null
        ? e.formatMessage({
            id: `appServer.error.genericRestartRequired`,
            defaultMessage: `Something went wrong connecting to Codex. Try restarting`,
            description: `Generic error shown when an app-server connection requires restarting but exact version details are unavailable`,
          })
        : e.formatMessage(
            {
              id: `appServer.error.restartAvailable`,
              defaultMessage: `Restart now to update to {installedVersion}. Currently running {currentVersion}`,
              description: `Error shown when a remote Codex update has been installed and the remote app-server needs a restart`,
            },
            { currentVersion: t.currentVersion, installedVersion: t.installedVersion },
          );
    case `update-required`:
      return e.formatMessage(
        {
          id: `appServer.error.unsupportedVersion`,
          defaultMessage: `Codex on this environment is out of date. Update to {minVersion} or newer. Current version: {currentVersion}`,
          description: `Error shown when an app-server connection is rejected because the remote Codex version is too old`,
        },
        { minVersion: t.minRequiredVersion, currentVersion: t.currentVersion },
      );
    case `connection-failed`:
      return t.message;
  }
}
var P = e(() => {});
function F(e, { canLogin: t, error: n, hostKind: r, state: i, surface: a }) {
  let o = e.formatMessage(I(i, n));
  if (i === `error` && n != null) {
    let i = N(e, n);
    switch (n.code) {
      case `login-required`:
        if (t)
          return {
            action: { kind: `login`, label: e.formatMessage(L.login) },
            label: o,
            message: i,
          };
        if (a === `connection-status-badge`) {
          let t = e.formatMessage(L.goToSettings);
          return { action: { kind: `settings`, label: t }, label: o, message: `${i} ${t}` };
        }
        return { action: null, label: o, message: i };
      case `remote-codex-not-found`:
        return {
          action: {
            kind: `install-codex`,
            label: e.formatMessage(L.installCodex),
            loadingLabel: e.formatMessage(L.installingCodex),
          },
          label: o,
          message: i,
        };
      case `restart-required`:
        return {
          action: {
            kind: `restart`,
            label: e.formatMessage(L.restartNow),
            tooltipText: e.formatMessage(L.restartNowTooltip),
          },
          label: o,
          message: i,
        };
      case `update-required`:
        return r === `wsl`
          ? {
              action: null,
              label: o,
              message: e.formatMessage(L.updateWslCodexMessage, {
                currentVersion: n.currentVersion,
                minRequiredVersion: n.minRequiredVersion,
              }),
            }
          : a === `connections-row`
            ? {
                action: {
                  kind: `install-codex`,
                  label: e.formatMessage(L.updateCodex),
                  loadingLabel: e.formatMessage(L.updatingCodex),
                  tooltipText: e.formatMessage(L.restartNowTooltip),
                },
                label: o,
                message: i,
              }
            : {
                action: { kind: `settings`, label: e.formatMessage(L.goToSettings) },
                label: o,
                message: i,
              };
      case `connection-failed`:
        return { action: null, label: o, message: i };
    }
  }
  return { action: null, label: o, message: o };
}
function I(e, t) {
  if (e === `error` && t != null)
    switch (t.code) {
      case `login-required`:
        return L[`login-required`];
      case `remote-codex-not-found`:
        return L[`remote-codex-not-found`];
      case `update-required`:
        return L[`update-required`];
      case `restart-required`:
        return L[`restart-required`];
      case `connection-failed`:
        return L.error;
    }
  return R[e];
}
var L,
  R,
  z = e(() => {
    (r(),
      v(),
      P(),
      (L = S({
        connecting: {
          id: `threadPage.remoteConnectionStatusBadge.connecting`,
          defaultMessage: `Connecting`,
          description: `Label shown when remote connection is in progress`,
        },
        restarting: {
          id: `threadPage.remoteConnectionStatusBadge.restarting`,
          defaultMessage: `Restarting`,
          description: `Label shown when a remote connection is restarting after a user action`,
        },
        "login-required": {
          id: `threadPage.remoteConnectionStatusBadge.unauthed`,
          defaultMessage: `Login required`,
          description: `Label shown when remote connection needs authentication`,
        },
        "remote-codex-not-found": {
          id: `threadPage.remoteConnectionStatusBadge.remoteCodexNotFound`,
          defaultMessage: `Codex not installed`,
          description: `Label shown when the Codex CLI is missing from an SSH remote connection`,
        },
        "update-required": {
          id: `threadPage.remoteConnectionStatusBadge.updateRequired`,
          defaultMessage: `Update required`,
          description: `Label shown when remote connection needs a newer Codex version`,
        },
        "restart-required": {
          id: `threadPage.remoteConnectionStatusBadge.restartRequired`,
          defaultMessage: `Restart required`,
          description: `Label shown when remote connection needs a restart to use a newer Codex version`,
        },
        restartNow: {
          id: `threadPage.remoteConnectionStatusBadge.restartNow`,
          defaultMessage: `Restart now`,
          description: `Action label shown when remote Codex has a newer installed version and can be restarted`,
        },
        restartNowTooltip: {
          id: `threadPage.remoteConnectionStatusBadge.restartNowTooltip`,
          defaultMessage: `Restarting will kill the currently running Codex process and stop any ongoing chats on this remote host`,
          description: `Tooltip warning for a remote Codex restart action`,
        },
        login: {
          id: `threadPage.remoteConnectionStatusBadge.login`,
          defaultMessage: `Log in to Codex`,
          description: `Action label shown when a remote connection needs login`,
        },
        installCodex: {
          id: `threadPage.remoteConnectionStatusBadge.installCodex`,
          defaultMessage: `Install Codex`,
          description: `Action label shown when the Codex CLI is missing from an SSH remote connection`,
        },
        installingCodex: {
          id: `threadPage.remoteConnectionStatusBadge.installingCodex`,
          defaultMessage: `Installing…`,
          description: `Action label shown while Codex is being installed on an SSH remote connection`,
        },
        updateCodex: {
          id: `threadPage.remoteConnectionStatusBadge.updateCodex`,
          defaultMessage: `Update Codex`,
          description: `Action label shown when an SSH remote connection needs a newer Codex version`,
        },
        updateWslCodexMessage: {
          id: `threadPage.remoteConnectionStatusBadge.updateWslCodexMessage`,
          defaultMessage: `Codex in WSL is out of date. Open your WSL distro and update Codex to {minRequiredVersion} or newer. Current version: {currentVersion}`,
          description: `Tooltip message shown when a WSL connection needs a newer Codex version`,
        },
        updatingCodex: {
          id: `threadPage.remoteConnectionStatusBadge.updatingCodex`,
          defaultMessage: `Updating…`,
          description: `Action label shown while Codex is being updated on an SSH remote connection`,
        },
        goToSettings: {
          id: `threadPage.remoteConnectionStatusBadge.goToSettings`,
          defaultMessage: `See Settings to connect`,
          description: `Label shown for a remote connection settings action`,
        },
        connected: {
          id: `threadPage.remoteConnectionStatusBadge.connected`,
          defaultMessage: `Connected`,
          description: `Label shown when remote connection is established`,
        },
        disconnected: {
          id: `threadPage.remoteConnectionStatusBadge.disconnected`,
          defaultMessage: `Disconnected`,
          description: `Label shown when remote connection is unavailable`,
        },
        error: {
          id: `threadPage.remoteConnectionStatusBadge.error`,
          defaultMessage: `Error`,
          description: `Label shown when remote connection is in error`,
        },
      })),
      (R = {
        connecting: L.connecting,
        restarting: L.restarting,
        connected: L.connected,
        disconnected: L.disconnected,
        error: L.error,
      }));
  });
function B(e) {
  let t = (0, V.c)(34),
    { hostId: n, onLoginRequiredClick: r } = e,
    i = T(),
    a = w(),
    { error: o, state: s } = A(n),
    c = E(n);
  if (s == null) return null;
  let l =
      o?.code === `update-required` ||
      o?.code === `restart-required` ||
      (o?.code === `login-required` && r == null),
    u = o?.code === `login-required` && r != null,
    p;
  t[0] !== o || t[1] !== c.kind || t[2] !== i || t[3] !== u || t[4] !== s
    ? ((p = F(i, {
        canLogin: u,
        error: o,
        hostKind: c.kind,
        state: s,
        surface: `connection-status-badge`,
      })),
      (t[0] = o),
      (t[1] = c.kind),
      (t[2] = i),
      (t[3] = u),
      (t[4] = s),
      (t[5] = p))
    : (p = t[5]);
  let { label: m, message: h } = p,
    g;
  t[6] === r
    ? (g = t[7])
    : ((g = (e) => {
        (e.preventDefault(), e.stopPropagation(), r?.());
      }),
      (t[6] = r),
      (t[7] = g));
  let _ = g,
    v;
  t[8] === a
    ? (v = t[9])
    : ((v = (e) => {
        (e.preventDefault(), e.stopPropagation(), a(`/settings/connections`));
      }),
      (t[8] = a),
      (t[9] = v));
  let y = v,
    b = W[s],
    x;
  t[10] === b.iconClassName
    ? (x = t[11])
    : ((x = f(`icon-2xs inline-flex shrink-0 items-center justify-center`, b.iconClassName)),
      (t[10] = b.iconClassName),
      (t[11] = x));
  let S = U[s],
    C;
  t[12] !== x || t[13] !== S
    ? ((C = (0, H.jsx)(`span`, { className: x, children: S })),
      (t[12] = x),
      (t[13] = S),
      (t[14] = C))
    : (C = t[14]);
  let D = C;
  if (l || u) {
    let e = W[s],
      n;
    t[15] === e.dotClassName
      ? (n = t[16])
      : ((n = f(
          `no-drag icon-2xs inline-flex shrink-0 cursor-interaction items-center justify-center self-center overflow-hidden rounded-full border-0 bg-transparent p-0 text-current`,
          e.dotClassName,
        )),
        (t[15] = e.dotClassName),
        (t[16] = n));
    let r = u ? _ : y,
      i;
    t[17] !== m || t[18] !== D || t[19] !== r || t[20] !== n
      ? ((i = (0, H.jsx)(`button`, {
          type: `button`,
          className: n,
          "aria-label": m,
          onClick: r,
          children: D,
        })),
        (t[17] = m),
        (t[18] = D),
        (t[19] = r),
        (t[20] = n),
        (t[21] = i))
      : (i = t[21]);
    let a;
    return (
      t[22] !== i || t[23] !== h
        ? ((a = (0, H.jsx)(d, { tooltipContent: h, children: i })),
          (t[22] = i),
          (t[23] = h),
          (t[24] = a))
        : (a = t[24]),
      a
    );
  }
  let O = W[s],
    k;
  t[25] === O.dotClassName
    ? (k = t[26])
    : ((k = f(
        `no-drag icon-2xs inline-flex shrink-0 items-center justify-center self-center overflow-hidden rounded-full`,
        O.dotClassName,
      )),
      (t[25] = O.dotClassName),
      (t[26] = k));
  let j;
  t[27] !== m || t[28] !== D || t[29] !== k
    ? ((j = (0, H.jsx)(`span`, { className: k, "aria-label": m, role: `img`, children: D })),
      (t[27] = m),
      (t[28] = D),
      (t[29] = k),
      (t[30] = j))
    : (j = t[30]);
  let M;
  return (
    t[31] !== j || t[32] !== h
      ? ((M = (0, H.jsx)(d, { tooltipContent: h, children: j })),
        (t[31] = j),
        (t[32] = h),
        (t[33] = M))
      : (M = t[33]),
    M
  );
}
var V,
  H,
  U,
  W,
  G = e(() => {
    ((V = n()),
      u(),
      v(),
      g(),
      M(),
      z(),
      p(),
      k(),
      c(),
      _(),
      (H = s()),
      (U = {
        connecting: (0, H.jsx)(l, {}),
        restarting: (0, H.jsx)(l, {}),
        connected: (0, H.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 rounded-full bg-green-500`,
        }),
        disconnected: (0, H.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 rounded-full bg-gray-400`,
        }),
        error: (0, H.jsx)(O, {}),
      }),
      (W = {
        connecting: {
          dotClassName: `text-token-description-foreground`,
          iconClassName: `motion-safe:animate-spin`,
        },
        restarting: {
          dotClassName: `text-token-charts-blue`,
          iconClassName: `motion-safe:animate-spin text-token-charts-blue`,
        },
        connected: { dotClassName: `text-token-charts-green` },
        disconnected: { dotClassName: `text-token-description-foreground` },
        error: { dotClassName: `text-token-charts-red`, iconClassName: `text-token-charts-red` },
      }));
  });
export { N as a, A as c, z as i, O as l, G as n, P as o, F as r, M as s, B as t, k as u };
//# sourceMappingURL=app-initial~app-main~projects-index-page~remote-connections-settings~composer-external-footer-D.js.map
