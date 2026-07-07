import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bt as n,
  El as r,
  Rt as i,
  Tl as a,
  Xn as o,
  Xs as s,
  tc as c,
  vl as l,
  zt as u,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Js as d,
  Qs as f,
  Rs as p,
  Sx as m,
  Xs as h,
  wx as g,
  yx as _,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Ft as v,
  It as y,
  Lt as b,
  Pt as x,
  ns as S,
  ts as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  $ as w,
  L as T,
  et as E,
  z as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
function O() {
  let e = (0, A.c)(22),
    t = c(i),
    n = g(),
    r = f(),
    a = h(),
    s = b(),
    { getPendingAppConnectForCallbackUrl: l } = y(),
    { markRequiredAppStatus: u, session: p } = S(),
    _ = (0, j.useRef)(null),
    v;
  e[0] !== u || e[1] !== p.app || e[2] !== p.kind
    ? ((v = (e) => {
        let { appId: t, status: n } = e;
        p.kind !== `connectAppBeforeInstall` ||
          (t != null && p.app.id !== t) ||
          u({ appId: p.app.id, status: n });
      }),
      (e[0] = u),
      (e[1] = p.app),
      (e[2] = p.kind),
      (e[3] = v))
    : (v = e[3]);
  let C = (0, j.useEffectEvent)(v),
    T;
  e[4] !== s || e[5] !== n || e[6] !== t
    ? ((T = async (e) => {
        let {
            appId: r,
            appName: i,
            fullRedirectUrl: a,
            shouldShowPendingToast: o,
            shouldShowSuccessToast: c,
          } = e,
          l = k(r);
        o &&
          a != null &&
          a.length > 0 &&
          t
            .get(D)
            .info(
              (0, M.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: (0, M.jsx)(m, {
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
        let u = await s({ fullRedirectUrl: a ?? `` });
        bb32: switch (u.kind) {
          case `missing-callback-data`:
            t.get(D).danger(
              (0, M.jsx)(m, {
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
            t.get(D).danger(e, { id: l });
            break bb32;
          }
          case `success`:
            if (!c) break bb32;
            t.get(D).success(
              (0, M.jsx)(m, {
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
      (e[4] = s),
      (e[5] = n),
      (e[6] = t),
      (e[7] = T))
    : (T = e[7]);
  let E = (0, j.useEffectEvent)(T),
    O;
  e[8] !== l || e[9] !== a.key || e[10] !== a.state || e[11] !== C || e[12] !== r || e[13] !== E
    ? ((O = () => {
        if (_.current === a.key) return;
        _.current = a.key;
        let e = x(a.state),
          t = e?.fullRedirectUrl?.trim(),
          n = t != null && t.length > 0 ? l(t) : null,
          i = n?.returnTo ?? e?.returnTo ?? `/skills`,
          s = n?.resumeTarget.kind === `plugin-install`,
          c = n?.resumeTarget.kind === `connector-auth-elicitation`;
        E({
          appId: n?.appId,
          appName: n?.appName,
          fullRedirectUrl: t ?? null,
          shouldShowPendingToast: !1,
          shouldShowSuccessToast: !s && !c,
        }).then((e) => {
          if (
            (e.kind === `success`
              ? C({ appId: e.appId, status: `connected` })
              : (s || n == null) && C({ appId: n?.appId, status: `pending` }),
            d(o, i) != null)
          ) {
            r(i, { replace: !0 });
            return;
          }
          switch (n?.resumeTarget.kind) {
            case `plugin-install`:
              r(i, { replace: !0, state: { initialHostId: n.hostId, initialTab: `plugins` } });
              return;
            case `connector-auth-elicitation`:
              r(i, { replace: !0 });
              return;
            case `apps-tab`:
            case void 0:
              r(i, {
                replace: !0,
                state: { connectAppId: n?.appId, initialHostId: n?.hostId, initialTab: `apps` },
              });
              return;
          }
        });
      }),
      (e[8] = l),
      (e[9] = a.key),
      (e[10] = a.state),
      (e[11] = C),
      (e[12] = r),
      (e[13] = E),
      (e[14] = O))
    : (O = e[14]);
  let N;
  (e[15] !== l || e[16] !== n || e[17] !== a.key || e[18] !== a.state || e[19] !== r
    ? ((N = [l, n, a.key, a.state, r]),
      (e[15] = l),
      (e[16] = n),
      (e[17] = a.key),
      (e[18] = a.state),
      (e[19] = r),
      (e[20] = N))
    : (N = e[20]),
    (0, j.useEffect)(O, N));
  let P;
  return (
    e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, M.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, M.jsx)(w, { className: `icon-sm` }),
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
  ((A = a()), s(), n(), (j = t(r(), 1)), _(), p(), v(), E(), T(), C(), u(), (M = l()));
})();
export { O as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page.js.map
