import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { R as r, o as i, t as a } from "./app-scope.js";
import "./vscode-api.js";
import "./isEqual.js";
import { et as o } from "./src-4.js";
import "./app-server-manager-signals.js";
import { c as s, o as c } from "./lib-1.js";
import "./persisted-signal.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import { t as l } from "./spinner.js";
import "./rpc-2.js";
import "./statsig-DoZ-0xit.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries-BHYT-TjG.js";
import "./selectable-remote-connections-signal-DJZ-ZbLr.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import { r as u } from "./toast-signal.js";
import { f as d, m as f, u as p } from "./chunk-8.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./codex-api-error.js";
import { n as m, r as h, t as g } from "./app-connect-oauth.js";
var _ = r(),
  v = e(t(), 1),
  y = n();
function b() {
  let e = (0, _.c)(17),
    t = i(a),
    n = s(),
    r = f(),
    b = d(),
    S = h(),
    { getPendingAppConnectForCallbackUrl: C } = m(),
    w = (0, v.useRef)(null),
    T;
  e[0] !== S || e[1] !== n || e[2] !== t
    ? ((T = (e) => {
        let {
            appId: r,
            appName: i,
            fullRedirectUrl: a,
            shouldShowPendingToast: o,
            shouldShowSuccessToast: s,
          } = e,
          l = x(r);
        (o &&
          a != null &&
          a.length > 0 &&
          t
            .get(u)
            .info(
              (0, y.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: (0, y.jsx)(c, {
                  id: `apps.appConnectOAuthCallbackPage.pending`,
                  defaultMessage: `Finishing {connector} setup`,
                  description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                  values: {
                    connector:
                      i ??
                      n.formatMessage({
                        id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                        defaultMessage: `App`,
                        description: `Fallback app name used in app connect callback pending toasts`,
                      }),
                  },
                }),
              }),
              { duration: 0, id: l },
            ),
          S({ fullRedirectUrl: a ?? `` }).then((e) => {
            bb21: switch (e.kind) {
              case `missing-callback-data`:
                t.get(u).danger(
                  (0, y.jsx)(c, {
                    id: `apps.appConnectOAuthCallbackPage.missingData`,
                    defaultMessage: `Missing OAuth callback data.`,
                    description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
                  }),
                  { id: l },
                );
                break bb21;
              case `request-failed`: {
                let r =
                  e.message ??
                  n.formatMessage({
                    id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                    defaultMessage: `Failed to finish connecting app.`,
                    description: `Toast shown when finishing an app connection OAuth callback fails`,
                  });
                t.get(u).danger(r, { id: l });
                break bb21;
              }
              case `success`:
                if (!s) break bb21;
                t.get(u).success(
                  (0, y.jsx)(c, {
                    id: `apps.appConnectOAuthCallbackPage.success`,
                    defaultMessage: `{appName} is now connected.`,
                    description: `Toast shown when an app connection OAuth callback succeeds`,
                    values: { appName: e.appName },
                  }),
                  { id: l },
                );
            }
          }));
      }),
      (e[0] = S),
      (e[1] = n),
      (e[2] = t),
      (e[3] = T))
    : (T = e[3]);
  let E = (0, v.useEffectEvent)(T),
    D;
  e[4] !== C || e[5] !== b.key || e[6] !== b.state || e[7] !== r || e[8] !== E
    ? ((D = () => {
        if (w.current === b.key) return;
        w.current = b.key;
        let e = g(b.state),
          t = e?.fullRedirectUrl?.trim(),
          n = t != null && t.length > 0 ? C(t) : null,
          i = n?.returnTo ?? e?.returnTo ?? `/skills`,
          a = n?.resumeTarget.kind === `plugin-install`;
        if (
          (E({
            appId: n?.appId,
            appName: n?.appName,
            fullRedirectUrl: t ?? null,
            shouldShowPendingToast: !1,
            shouldShowSuccessToast: !a,
          }),
          p(o, i) != null)
        ) {
          r(i, { replace: !0 });
          return;
        }
        switch (n?.resumeTarget.kind) {
          case `plugin-install`:
            r(i, { replace: !0, state: { initialHostId: n.hostId, initialTab: `plugins` } });
            return;
          case `apps-tab`:
          case void 0:
            r(i, {
              replace: !0,
              state: { connectAppId: n?.appId, initialHostId: n?.hostId, initialTab: `apps` },
            });
            return;
        }
      }),
      (e[4] = C),
      (e[5] = b.key),
      (e[6] = b.state),
      (e[7] = r),
      (e[8] = E),
      (e[9] = D))
    : (D = e[9]);
  let O;
  (e[10] !== C || e[11] !== n || e[12] !== b.key || e[13] !== b.state || e[14] !== r
    ? ((O = [C, n, b.key, b.state, r]),
      (e[10] = C),
      (e[11] = n),
      (e[12] = b.key),
      (e[13] = b.state),
      (e[14] = r),
      (e[15] = O))
    : (O = e[15]),
    (0, v.useEffect)(D, O));
  let k;
  return (
    e[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, y.jsx)(l, { className: `icon-sm` }),
        })),
        (e[16] = k))
      : (k = e[16]),
    k
  );
}
function x(e) {
  return e == null ? `app-connect-oauth-callback` : `app-connect-oauth-callback-${e}`;
}
export { b as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page.js.map
