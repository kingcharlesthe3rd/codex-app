import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  Xc as a,
  Yc as o,
  ac as s,
  al as c,
  dl as l,
  kl as u,
  oc as ee,
  ot as d,
  pl as f,
  rl as p,
  sc as m,
  tc as h,
  ut as g,
  xl as _,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  $ as te,
  et as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  xs as y,
  ys as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Dv as x,
  Ev as S,
  Kl as ne,
  Tv as re,
  __ as ie,
  _s as C,
  _v as ae,
  ai as oe,
  am as w,
  aw as se,
  bs as T,
  cC as E,
  cw as D,
  dv as O,
  fi as k,
  g_ as ce,
  gs as le,
  hC as A,
  hs as j,
  ii as M,
  li as N,
  mC as P,
  mi as F,
  ni as ue,
  oC as I,
  oi as de,
  ou as fe,
  rm as L,
  si as pe,
  ui as R,
  vs as z,
  wv as B,
  yv as me,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { At as V, kt as H } from "./app-initial~app-main~automations-page.js";
import {
  a as U,
  i as W,
  n as he,
  o as G,
  r as ge,
  s as K,
  t as q,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import { a as J, d as Y, i as X, n as _e, t as ve, u as ye } from "./codex-mobile-setup-dialog.js";
function Z(e, t) {
  if (e != null) return t == null ? e : e.filter((e) => e.clientId !== t);
}
function be(e, t) {
  return e?.some((e) => !t.has(e.clientId)) === !0;
}
function xe(e, t) {
  return e == null || !be(e, t) ? null : t.size === 0 && e.length === 1 ? `connected` : `dismiss`;
}
var Se = e(() => {});
function Ce({ existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r }) {
  return JSON.stringify({
    existingClientIds: e == null ? null : Array.from(e).sort(),
    hostId: t,
    localRemoteControlClientId: n,
    waiting: r,
  });
}
var we,
  Te,
  Ee,
  De,
  Oe,
  ke = e(() => {
    (h(),
      j(),
      i(),
      x(),
      P(),
      N(),
      Se(),
      (we = 3e4),
      (Te = a(n, ({ get: e }) => {
        let t = S(e, `local_remote_control_environment_id`) ?? null,
          n = !e(A, `2055603567`);
        return {
          queryKey: [`remote-control-clients`, t, n],
          queryFn: () => R(t, { includeBrowserClients: n }),
          staleTime: we,
        };
      })),
      (Ee = o(n, (e, { get: t }) => {
        let n = t(C, e),
          r = n?.environmentId;
        return {
          enabled: r != null,
          queryKey: [`remote-control-clients`, `app-server`, e, n?.installationId],
          queryFn: () => (r == null ? Promise.resolve([]) : R(r, { appServerHostId: e })),
          staleTime: we,
        };
      })),
      (De = o(n, (e, { get: t }) => {
        let n = S(t, `local_remote_control_environment_id`) ?? null,
          r = !t(A, `2055603567`);
        return {
          enabled: e,
          queryKey: [`remote-control-clients`, n, r],
          queryFn: () => R(n, { includeBrowserClients: r }),
          refetchInterval: e ? 1e3 : !1,
          staleTime: 0,
        };
      })),
      (Oe = o(
        n,
        (
          { existingClientIds: e, hostId: t, localRemoteControlClientId: n, waiting: r },
          { get: i, queryClient: a },
        ) => {
          let o = null,
            s = null,
            c = !i(A, `2055603567`);
          if (r && t == null) o = S(i, `local_remote_control_environment_id`) ?? null;
          else if (r) {
            let e = i(C, t);
            ((o = e?.environmentId), (s = e?.installationId));
          }
          let l = [
            `remote-control-clients`,
            `waiting-for-added`,
            t,
            c,
            t == null ? o : s,
            e == null ? null : Array.from(e).sort(),
            n,
          ];
          return {
            enabled: r && e != null && (t == null || o != null),
            gcTime: 0,
            queryKey: l,
            queryFn: async () => {
              let r = a.getQueryData(l);
              if (r != null || e == null) return r ?? null;
              let i = await R(o ?? null, {
                appServerHostId: t ?? void 0,
                includeBrowserClients: c,
              });
              return (
                t != null && a.setQueryData([`remote-control-clients`, `app-server`, t, s], i),
                xe(Z(i, n), e)
              );
            },
            refetchInterval: (e) => (r && e.state.data == null ? 1e3 : !1),
            staleTime: 0,
          };
        },
        { key: Ce },
      )));
  });
async function Ae(e, t, n) {
  if (!n) return je(e, t, !1);
  z(e, t, !1);
  let r = T(e, t, { ignoreCurrentError: !0 });
  try {
    let n = je(e, t, !0);
    return await Promise.race([r, n.then(() => r)]);
  } catch (n) {
    throw (z(e, t, !0), n);
  }
}
async function je(e, t, n) {
  return t === `local`
    ? (await d(`set-local-remote-control-enabled`, { params: { enabled: n } }),
      U(e, n, { force: !0 }))
    : K(e, t, n);
}
var Me = e(() => {
  (G(), j(), ae(), g(), W());
});
function Ne({ isMfaSetupRequiredError: e, mfaSetupRequired: t, remoteControlStatus: n }) {
  return Le(n) || e ? `initial` : t ? `mfa-required` : void 0;
}
function Pe({
  initialRemoteControlStatus: e,
  isMfaSetupRequiredError: t,
  mfaSetupRequired: n,
  remoteControlStatus: r,
  setupStepDebugOverride: i,
}) {
  return t || !!n || Le(r) || Le(e) || i !== `auto`;
}
function Fe({ remoteControlHostEnabled: e, hasEnrolledRemoteControlClient: t }) {
  return e ? (t ? `connected` : `waiting`) : `initial`;
}
function Ie(e) {
  return e.some((e) => e instanceof k);
}
function Le(e) {
  switch (e) {
    case `disabled`:
    case `errored`:
      return !0;
    case `connecting`:
    case `connected`:
      return !1;
  }
}
var Re = e(() => {
  F();
});
function ze(e) {
  let t = (0, He.c)(76),
    { initialStep: r, onClose: i, variant: a } = e,
    o = ee(n),
    l = fe(),
    u = (0, Q.useRef)(null),
    d = s(le, me),
    [p] = c(ye),
    h = m(ue),
    [g, _] = (0, Q.useState)(r ?? null),
    [te, v] = (0, Q.useState)(null),
    [y] = re(`local_remote_control_client_id`),
    b;
  t[0] !== d || t[1] !== g || t[2] !== h.data
    ? ((b = g ?? Fe({ remoteControlHostEnabled: d, hasEnrolledRemoteControlClient: h.data })),
      (t[0] = d),
      (t[1] = g),
      (t[2] = h.data),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    S = s(De, x === `waiting`),
    ne = Z(S.data, y),
    C = m(pe),
    ae = x === `waiting` && (te == null ? ne?.length : be(ne, te)) ? `connected` : x,
    se = m(de),
    T = p === `auto` ? (x === `mfa-required` && se.data ? `allow-host` : ae) : p,
    E;
  t[4] !== T || t[5] !== o || t[6] !== a
    ? ((E = (e) => {
        w(o, ce, { action: e, step: T, surface: a });
      }),
      (t[4] = T),
      (t[5] = o),
      (t[6] = a),
      (t[7] = E))
    : (E = t[7]);
  let D = E,
    O,
    k;
  (t[8] !== T || t[9] !== o || t[10] !== a
    ? ((O = () => {
        let e = `${a}:${T}`;
        u.current !== e && ((u.current = e), w(o, ie, { step: T, surface: a }));
      }),
      (k = [T, o, a]),
      (t[8] = T),
      (t[9] = o),
      (t[10] = a),
      (t[11] = O),
      (t[12] = k))
    : ((O = t[11]), (k = t[12])),
    (0, Q.useEffect)(O, k));
  let A;
  t[13] === o ? (A = t[14]) : ((A = () => oe(o)), (t[13] = o), (t[14] = A));
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        _(e ? `mfa-required` : `allow-host`);
      }),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === A ? (M = t[17]) : ((M = { mutationFn: A, onSuccess: j }), (t[16] = A), (t[17] = M));
  let N = f(M),
    P;
  t[18] === o
    ? (P = t[19])
    : ((P = async () => {
        await Ae(o, me, !0);
        let e = o.query.snapshot(Te);
        return (await e.invalidate({ exact: !0, refetchType: `none` }), e.fetch());
      }),
      (t[18] = o),
      (t[19] = P));
  let F;
  t[20] === y
    ? (F = t[21])
    : ((F = (e) => {
        (v(new Set(Z(e, y)?.map(Be))), _(`waiting`));
      }),
      (t[20] = y),
      (t[21] = F));
  let I;
  t[22] === o
    ? (I = t[23])
    : ((I = (e) => {
        ge(o, e);
      }),
      (t[22] = o),
      (t[23] = I));
  let L;
  t[24] !== I || t[25] !== P || t[26] !== F
    ? ((L = { mutationFn: P, onSuccess: F, onError: I }),
      (t[24] = I),
      (t[25] = P),
      (t[26] = F),
      (t[27] = L))
    : (L = t[27]);
  let R = f(L),
    z;
  t[28] !== R || t[29] !== D
    ? ((z = () => {
        (D(`allow_host`), R.mutate());
      }),
      (t[28] = R),
      (t[29] = D),
      (t[30] = z))
    : (z = t[30]);
  let B = z,
    V;
  t[31] !== R.error ||
  t[32] !== N.error ||
  t[33] !== C.error ||
  t[34] !== S.error ||
  t[35] !== h.error
    ? ((V = Ie([h.error, S.error, C.error, N.error, R.error])),
      (t[31] = R.error),
      (t[32] = N.error),
      (t[33] = C.error),
      (t[34] = S.error),
      (t[35] = h.error),
      (t[36] = V))
    : (V = t[36]);
  let H = V,
    U,
    W;
  (t[37] !== l || t[38] !== H
    ? ((U = () => {
        H && l(`/login`, { replace: !0 });
      }),
      (W = [l, H]),
      (t[37] = l),
      (t[38] = H),
      (t[39] = U),
      (t[40] = W))
    : ((U = t[39]), (W = t[40])),
    (0, Q.useEffect)(U, W));
  let G = N.isPending || R.isPending || (C.data === `required` && se.isLoading),
    K;
  t[41] !== R.error || t[42] !== R.isError
    ? ((K = R.isError && !he(R.error)), (t[41] = R.error), (t[42] = R.isError), (t[43] = K))
    : (K = t[43]);
  let q = K;
  if ((p === `auto` && g == null && d && h.isLoading) || H) return null;
  if (a === `dialog`) {
    let e;
    t[44] === i
      ? (e = t[45])
      : ((e = (e) => {
          e || i();
        }),
        (t[44] = i),
        (t[45] = e));
    let n;
    t[46] !== i || t[47] !== D
      ? ((n = () => {
          (D(`skip`), i());
        }),
        (t[46] = i),
        (t[47] = D),
        (t[48] = n))
      : (n = t[48]);
    let r;
    t[49] !== N || t[50] !== D
      ? ((r = () => {
          (D(`start_setup`), N.mutate());
        }),
        (t[49] = N),
        (t[50] = D),
        (t[51] = r))
      : (r = t[51]);
    let a;
    return (
      t[52] !== B ||
      t[53] !== N.isError ||
      t[54] !== T ||
      t[55] !== G ||
      t[56] !== q ||
      t[57] !== e ||
      t[58] !== n ||
      t[59] !== r
        ? ((a = (0, $.jsx)(ve, {
            open: !0,
            showAllowHostError: q,
            showStartSetupError: N.isError,
            setupInProgress: G,
            step: T,
            onAllowHost: B,
            onOpenChange: e,
            onSkip: n,
            onStartSetup: r,
          })),
          (t[52] = B),
          (t[53] = N.isError),
          (t[54] = T),
          (t[55] = G),
          (t[56] = q),
          (t[57] = e),
          (t[58] = n),
          (t[59] = r),
          (t[60] = a))
        : (a = t[60]),
      a
    );
  }
  let J;
  t[61] !== i || t[62] !== D
    ? ((J = () => {
        (D(`skip`), i());
      }),
      (t[61] = i),
      (t[62] = D),
      (t[63] = J))
    : (J = t[63]);
  let Y;
  t[64] !== N || t[65] !== D
    ? ((Y = () => {
        (D(`start_setup`), N.mutate());
      }),
      (t[64] = N),
      (t[65] = D),
      (t[66] = Y))
    : (Y = t[66]);
  let X;
  return (
    t[67] !== B ||
    t[68] !== N.isError ||
    t[69] !== i ||
    t[70] !== T ||
    t[71] !== G ||
    t[72] !== q ||
    t[73] !== J ||
    t[74] !== Y
      ? ((X = (0, $.jsx)(Ve, {
          showAllowHostError: q,
          showStartSetupError: N.isError,
          setupInProgress: G,
          step: T,
          onAllowHost: B,
          onFinishSetup: i,
          onSkip: J,
          onStartSetup: Y,
        })),
        (t[67] = B),
        (t[68] = N.isError),
        (t[69] = i),
        (t[70] = T),
        (t[71] = G),
        (t[72] = q),
        (t[73] = J),
        (t[74] = Y),
        (t[75] = X))
      : (X = t[75]),
    X
  );
}
function Be(e) {
  return e.clientId;
}
function Ve(e) {
  let t = (0, He.c)(28),
    {
      onAllowHost: r,
      onFinishSetup: i,
      onSkip: a,
      onStartSetup: o,
      setupInProgress: s,
      showAllowHostError: c,
      showStartSetupError: l,
      step: u,
    } = e,
    d = ee(n),
    f = E(`824038554`),
    p = fe(),
    m;
  t[0] !== d || t[1] !== u
    ? ((m = (e) => {
        w(d, ce, { action: e, step: u, surface: `page` });
      }),
      (t[0] = d),
      (t[1] = u),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] !== f || t[4] !== u
    ? ((g =
        u === `allow-host` || u === `mfa-required` || u === `waiting`
          ? (0, $.jsx)(te.Header, {
              children: (0, $.jsx)(H, {
                start: f
                  ? (0, $.jsx)(D, {
                      id: `codexMobile.setupPage.remoteTitle`,
                      defaultMessage: `Set up Remote`,
                      description: `Toolbar title shown during Remote setup`,
                    })
                  : (0, $.jsx)(D, {
                      id: `codexMobile.setupPage.title`,
                      defaultMessage: `Set up Codex Mobile`,
                      description: `Toolbar title shown during Codex mobile setup`,
                    }),
              }),
            })
          : null),
      (t[3] = f),
      (t[4] = u),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] === h
    ? (_ = t[7])
    : ((_ = (e) => {
        (h(`continue_on_chatgpt`),
          y({
            event: e,
            href: `https://chatgpt.com/#settings/Security`,
            initiator: `open_in_browser_bridge`,
          }));
      }),
      (t[6] = h),
      (t[7] = _));
  let v;
  t[8] !== i || t[9] !== h
    ? ((v = () => {
        (h(`finish_setup`), i());
      }),
      (t[8] = i),
      (t[9] = h),
      (t[10] = v))
    : (v = t[10]);
  let b;
  t[11] !== p || t[12] !== h
    ? ((b = () => {
        (h(`manage_connections`), p(`/settings/connections`));
      }),
      (t[11] = p),
      (t[12] = h),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] !== r ||
  t[15] !== a ||
  t[16] !== o ||
  t[17] !== s ||
  t[18] !== c ||
  t[19] !== l ||
  t[20] !== u ||
  t[21] !== _ ||
  t[22] !== v ||
  t[23] !== b
    ? ((x = (0, $.jsx)(X, {
        onAllowHost: r,
        onContinueOnChatGPT: _,
        onFinishSetup: v,
        onManageConnections: b,
        onSkip: a,
        onStartSetup: o,
        setupInProgress: s,
        showAllowHostError: c,
        showStartSetupError: l,
        step: u,
        variant: `page`,
      })),
      (t[14] = r),
      (t[15] = a),
      (t[16] = o),
      (t[17] = s),
      (t[18] = c),
      (t[19] = l),
      (t[20] = u),
      (t[21] = _),
      (t[22] = v),
      (t[23] = b),
      (t[24] = x))
    : (x = t[24]);
  let S;
  return (
    t[25] !== g || t[26] !== x
      ? ((S = (0, $.jsxs)($.Fragment, { children: [g, x] })), (t[25] = g), (t[26] = x), (t[27] = S))
      : (S = t[27]),
    S
  );
}
var He,
  Q,
  $,
  Ue = e(() => {
    ((He = r()),
      O(),
      l(),
      p(),
      h(),
      (Q = t(u(), 1)),
      se(),
      ne(),
      j(),
      v(),
      b(),
      L(),
      ke(),
      Se(),
      q(),
      Me(),
      i(),
      ae(),
      B(),
      I(),
      V(),
      Y(),
      _e(),
      M(),
      Re(),
      J(),
      ($ = _()));
  });
export {
  Pe as a,
  Ee as c,
  Oe as d,
  Z as f,
  Re as i,
  ke as l,
  Ue as n,
  Me as o,
  Se as p,
  Ne as r,
  Ae as s,
  ze as t,
  Te as u,
};
//# sourceMappingURL=codex-mobile-setup-flow.js.map
