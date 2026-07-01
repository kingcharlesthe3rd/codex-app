import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ct as n,
  GP as r,
  HP as i,
  IP as a,
  LP as o,
  RV as s,
  St as c,
  TB as l,
  Tt as u,
  Yj as d,
  aI as f,
  av as p,
  bB as m,
  gv as h,
  hN as g,
  iF as _,
  jV as v,
  mN as y,
  mv as b,
  ns as x,
  qP as S,
  qj as C,
  rs as w,
  vv as T,
  wt as E,
  zV as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function O() {
  let e = (0, A.c)(22),
    t = l(a),
    n = S(),
    i = T(),
    o = h(),
    s = u(),
    { getPendingAppConnectForCallbackUrl: p } = E(),
    { markRequiredAppStatus: m, session: g } = w(),
    _ = (0, j.useRef)(null),
    v;
  e[0] !== m || e[1] !== g.app || e[2] !== g.kind
    ? ((v = (e) => {
        let { appId: t, status: n } = e;
        g.kind !== `connectAppBeforeInstall` ||
          (t != null && g.app.id !== t) ||
          m({ appId: g.app.id, status: n });
      }),
      (e[0] = m),
      (e[1] = g.app),
      (e[2] = g.kind),
      (e[3] = v))
    : (v = e[3]);
  let x = (0, j.useEffectEvent)(v),
    C;
  e[4] !== s || e[5] !== n || e[6] !== t
    ? ((C = async (e) => {
        let {
            appId: i,
            appName: a,
            fullRedirectUrl: o,
            shouldShowPendingToast: c,
            shouldShowSuccessToast: l,
          } = e,
          u = k(i);
        c &&
          o != null &&
          o.length > 0 &&
          t
            .get(d)
            .info(
              (0, M.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: (0, M.jsx)(r, {
                  id: `apps.appConnectOAuthCallbackPage.pending`,
                  defaultMessage: `Finishing {connector} setup`,
                  description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                  values: {
                    connector:
                      a ??
                      n.formatMessage({
                        id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                        defaultMessage: `App`,
                        description: `Fallback app name used in app connect callback pending toasts`,
                      }),
                  },
                }),
              }),
              { duration: 0, id: u },
            );
        let f = await s({ fullRedirectUrl: o ?? `` });
        bb32: switch (f.kind) {
          case `missing-callback-data`:
            t.get(d).danger(
              (0, M.jsx)(r, {
                id: `apps.appConnectOAuthCallbackPage.missingData`,
                defaultMessage: `Missing OAuth callback data.`,
                description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
              }),
              { id: u },
            );
            break bb32;
          case `request-failed`: {
            let e =
              f.message ??
              n.formatMessage({
                id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                defaultMessage: `Failed to finish connecting app.`,
                description: `Toast shown when finishing an app connection OAuth callback fails`,
              });
            t.get(d).danger(e, { id: u });
            break bb32;
          }
          case `success`:
            if (!l) break bb32;
            t.get(d).success(
              (0, M.jsx)(r, {
                id: `apps.appConnectOAuthCallbackPage.success`,
                defaultMessage: `{appName} is now connected.`,
                description: `Toast shown when an app connection OAuth callback succeeds`,
                values: { appName: f.appName },
              }),
              { id: u },
            );
        }
        return f;
      }),
      (e[4] = s),
      (e[5] = n),
      (e[6] = t),
      (e[7] = C))
    : (C = e[7]);
  let D = (0, j.useEffectEvent)(C),
    O;
  e[8] !== p || e[9] !== o.key || e[10] !== o.state || e[11] !== x || e[12] !== i || e[13] !== D
    ? ((O = () => {
        if (_.current === o.key) return;
        _.current = o.key;
        let e = c(o.state),
          t = e?.fullRedirectUrl?.trim(),
          n = t != null && t.length > 0 ? p(t) : null,
          r = n?.returnTo ?? e?.returnTo ?? `/skills`,
          a = n?.resumeTarget.kind === `plugin-install`,
          s = n?.resumeTarget.kind === `connector-auth-elicitation`;
        D({
          appId: n?.appId,
          appName: n?.appName,
          fullRedirectUrl: t ?? null,
          shouldShowPendingToast: !1,
          shouldShowSuccessToast: !a && !s,
        }).then((e) => {
          if (
            (e.kind === `success`
              ? x({ appId: e.appId, status: `connected` })
              : (a || n == null) && x({ appId: n?.appId, status: `pending` }),
            b(f, r) != null)
          ) {
            i(r, { replace: !0 });
            return;
          }
          switch (n?.resumeTarget.kind) {
            case `plugin-install`:
              i(r, { replace: !0, state: { initialHostId: n.hostId, initialTab: `plugins` } });
              return;
            case `connector-auth-elicitation`:
              i(r, { replace: !0 });
              return;
            case `apps-tab`:
            case void 0:
              i(r, {
                replace: !0,
                state: { connectAppId: n?.appId, initialHostId: n?.hostId, initialTab: `apps` },
              });
              return;
          }
        });
      }),
      (e[8] = p),
      (e[9] = o.key),
      (e[10] = o.state),
      (e[11] = x),
      (e[12] = i),
      (e[13] = D),
      (e[14] = O))
    : (O = e[14]);
  let N;
  (e[15] !== p || e[16] !== n || e[17] !== o.key || e[18] !== o.state || e[19] !== i
    ? ((N = [p, n, o.key, o.state, i]),
      (e[15] = p),
      (e[16] = n),
      (e[17] = o.key),
      (e[18] = o.state),
      (e[19] = i),
      (e[20] = N))
    : (N = e[20]),
    (0, j.useEffect)(O, N));
  let P;
  return (
    e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, M.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, M.jsx)(y, { className: `icon-sm` }),
        })),
        (e[21] = P))
      : (P = e[21]),
    P
  );
}
function k(e) {
  return e == null ? `app-connect-oauth-callback` : `app-connect-oauth-callback-${e}`;
}
var A, j, M;
e(() => {
  ((A = s()), m(), _(), (j = t(D(), 1)), i(), p(), n(), g(), C(), x(), o(), (M = v()));
})();
export { O as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page.js.map
