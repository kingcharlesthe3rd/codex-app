import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  AN as i,
  BV as a,
  Ev as o,
  FB as s,
  Gs as c,
  JV as l,
  Ov as u,
  QP as d,
  Sn as f,
  Ws as p,
  bF as m,
  bn as h,
  cM as g,
  iF as _,
  kN as v,
  lF as y,
  mv as b,
  qV as x,
  sF as S,
  uM as C,
  wv as w,
  xI as T,
  xn as E,
  yn as D,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function O() {
  let e = (0, A.c)(22),
    t = s(d),
    n = y(),
    r = u(),
    i = o(),
    a = f(),
    { getPendingAppConnectForCallbackUrl: l } = E(),
    { markRequiredAppStatus: p, session: m } = c(),
    h = (0, j.useRef)(null),
    g;
  e[0] !== p || e[1] !== m.app || e[2] !== m.kind
    ? ((g = (e) => {
        let { appId: t, status: n } = e;
        m.kind !== `connectAppBeforeInstall` ||
          (t != null && m.app.id !== t) ||
          p({ appId: m.app.id, status: n });
      }),
      (e[0] = p),
      (e[1] = m.app),
      (e[2] = m.kind),
      (e[3] = g))
    : (g = e[3]);
  let _ = (0, j.useEffectEvent)(g),
    b;
  e[4] !== a || e[5] !== n || e[6] !== t
    ? ((b = async (e) => {
        let {
            appId: r,
            appName: i,
            fullRedirectUrl: o,
            shouldShowPendingToast: s,
            shouldShowSuccessToast: c,
          } = e,
          l = k(r);
        s &&
          o != null &&
          o.length > 0 &&
          t
            .get(C)
            .info(
              (0, M.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: (0, M.jsx)(S, {
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
            );
        let u = await a({ fullRedirectUrl: o ?? `` });
        bb32: switch (u.kind) {
          case `missing-callback-data`:
            t.get(C).danger(
              (0, M.jsx)(S, {
                id: `apps.appConnectOAuthCallbackPage.missingData`,
                defaultMessage: `Missing OAuth callback data.`,
                description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
              }),
              { id: l },
            );
            break bb32;
          case `request-failed`: {
            let e =
              u.message ??
              n.formatMessage({
                id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                defaultMessage: `Failed to finish connecting app.`,
                description: `Toast shown when finishing an app connection OAuth callback fails`,
              });
            t.get(C).danger(e, { id: l });
            break bb32;
          }
          case `success`:
            if (!c) break bb32;
            t.get(C).success(
              (0, M.jsx)(S, {
                id: `apps.appConnectOAuthCallbackPage.success`,
                defaultMessage: `{appName} is now connected.`,
                description: `Toast shown when an app connection OAuth callback succeeds`,
                values: { appName: u.appName },
              }),
              { id: l },
            );
        }
        return u;
      }),
      (e[4] = a),
      (e[5] = n),
      (e[6] = t),
      (e[7] = b))
    : (b = e[7]);
  let x = (0, j.useEffectEvent)(b),
    O;
  e[8] !== l || e[9] !== i.key || e[10] !== i.state || e[11] !== _ || e[12] !== r || e[13] !== x
    ? ((O = () => {
        if (h.current === i.key) return;
        h.current = i.key;
        let e = D(i.state),
          t = e?.fullRedirectUrl?.trim(),
          n = t != null && t.length > 0 ? l(t) : null,
          a = n?.returnTo ?? e?.returnTo ?? `/skills`,
          o = n?.resumeTarget.kind === `plugin-install`,
          s = n?.resumeTarget.kind === `connector-auth-elicitation`;
        x({
          appId: n?.appId,
          appName: n?.appName,
          fullRedirectUrl: t ?? null,
          shouldShowPendingToast: !1,
          shouldShowSuccessToast: !o && !s,
        }).then((e) => {
          if (
            (e.kind === `success`
              ? _({ appId: e.appId, status: `connected` })
              : (o || n == null) && _({ appId: n?.appId, status: `pending` }),
            w(T, a) != null)
          ) {
            r(a, { replace: !0 });
            return;
          }
          switch (n?.resumeTarget.kind) {
            case `plugin-install`:
              r(a, { replace: !0, state: { initialHostId: n.hostId, initialTab: `plugins` } });
              return;
            case `connector-auth-elicitation`:
              r(a, { replace: !0 });
              return;
            case `apps-tab`:
            case void 0:
              r(a, {
                replace: !0,
                state: { connectAppId: n?.appId, initialHostId: n?.hostId, initialTab: `apps` },
              });
              return;
          }
        });
      }),
      (e[8] = l),
      (e[9] = i.key),
      (e[10] = i.state),
      (e[11] = _),
      (e[12] = r),
      (e[13] = x),
      (e[14] = O))
    : (O = e[14]);
  let N;
  (e[15] !== l || e[16] !== n || e[17] !== i.key || e[18] !== i.state || e[19] !== r
    ? ((N = [l, n, i.key, i.state, r]),
      (e[15] = l),
      (e[16] = n),
      (e[17] = i.key),
      (e[18] = i.state),
      (e[19] = r),
      (e[20] = N))
    : (N = e[20]),
    (0, j.useEffect)(O, N));
  let P;
  return (
    e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, M.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, M.jsx)(v, { className: `icon-sm` }),
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
  ((A = x()), r(), m(), (j = t(l(), 1)), _(), b(), h(), i(), g(), p(), n(), (M = a()));
})();
export { O as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page.js.map
