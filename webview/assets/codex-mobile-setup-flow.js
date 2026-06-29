import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hr as t } from "./src-2.js";
import { Ut as n, Wo as r, sa as i } from "./app-server-manager-signals.js";
import { n as a, t as o } from "./jsx-runtime.js";
import {
  F as ee,
  H as s,
  I as c,
  P as l,
  V as u,
  _ as d,
  f,
  h as p,
  lt as m,
  n as h,
} from "./vscode-api.js";
import { n as g } from "./react.js";
import { o as _ } from "./lib-2.js";
import { m as te } from "./chunk-12.js";
import { g as ne } from "./persisted-signal-CweW-bgN.js";
import { t as v } from "./app-shell.js";
import { t as y } from "./thread-page-header.js";
import { n as b, t as x } from "./local-remote-control-enabled-sync.js";
import {
  c as S,
  f as C,
  m as re,
  o as ie,
  p as w,
  r as T,
  s as ae,
  t as oe,
  u as E,
} from "./codex-mobile-setup-dialog.js";
function D(e, t) {
  if (e != null) return t == null ? e : e.filter((e) => e.client_id !== t);
}
function O(e, t) {
  return e?.some((e) => !t.has(e.client_id)) === !0
    ? t.size === 0 && e.length === 1
      ? `connected`
      : `dismiss`
    : null;
}
var se = 3e4,
  k = s(p, () => ({ queryKey: [`remote-control-clients`], queryFn: w, staleTime: se })),
  ce = u(p, (e) => ({
    enabled: e,
    queryKey: [`remote-control-clients`],
    queryFn: w,
    refetchInterval: e ? 1e3 : !1,
    staleTime: 0,
  })),
  A = u(
    p,
    ({ existingClientIds: e, localRemoteControlClientId: t, waiting: n }) => ({
      enabled: n,
      queryKey: [`remote-control-clients`],
      queryFn: w,
      refetchInterval: (r) => (!n || e == null ? !1 : O(D(r.state.data, t), e) == null ? 1e3 : !1),
      staleTime: 0,
    }),
    { key: j },
  );
function j({ existingClientIds: e, localRemoteControlClientId: t, waiting: n }) {
  return JSON.stringify({
    existingClientIds: e == null ? null : Array.from(e).sort(),
    localRemoteControlClientId: t,
    waiting: n,
  });
}
var le = m();
function ue(e) {
  let t = (0, le.c)(3),
    { hostId: n } = e,
    r = ee(p),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = {
          mutationFn: async (e) =>
            n === `local`
              ? (await h(`set-local-remote-control-enabled`, { params: { enabled: e } }),
                x(r, e, { force: !0 }))
              : b(r, n, e),
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    d(i)
  );
}
function de({ remoteControlHostEnabled: e, hasEnrolledRemoteControlClient: t }) {
  return e ? (t ? `connected` : `waiting`) : `initial`;
}
function fe(e) {
  return e.some((e) => e instanceof E);
}
var M = e(a(), 1),
  N = o();
function P(e) {
  let a = (0, le.c)(75),
    { onClose: o, variant: s } = e,
    u = ee(p),
    f = te(),
    m = (0, M.useRef)(null),
    h;
  a[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = { hostId: r }), (a[0] = h)) : (h = a[0]);
  let _ = ue(h),
    v = l(n, r),
    [y] = g(re),
    b = c(ie),
    [x, w] = (0, M.useState)(null),
    T;
  a[1] !== v || a[2] !== x || a[3] !== b.data
    ? ((T = x ?? de({ remoteControlHostEnabled: v, hasEnrolledRemoteControlClient: b.data })),
      (a[1] = v),
      (a[2] = x),
      (a[3] = b.data),
      (a[4] = T))
    : (T = a[4]);
  let E = T,
    D = l(ce, E === `waiting`),
    O = c(S),
    se = E === `waiting` && D.data?.length ? `connected` : E,
    k = c(ae),
    A = y === `auto` ? (E === `mfa-required` && k.data ? `allow-host` : se) : y,
    j;
  a[5] !== A || a[6] !== u || a[7] !== s
    ? ((j = (e) => {
        ne(u, {
          eventName: `codex_remote_control_onboarding_action_clicked`,
          metadata: { action: e, step: A, surface: s },
        });
      }),
      (a[5] = A),
      (a[6] = u),
      (a[7] = s),
      (a[8] = j))
    : (j = a[8]);
  let P = j,
    F,
    I;
  (a[9] !== A || a[10] !== u || a[11] !== s
    ? ((F = () => {
        let e = `${s}:${A}`;
        m.current !== e &&
          ((m.current = e),
          ne(u, {
            eventName: `codex_remote_control_onboarding_step_viewed`,
            metadata: { step: A, surface: s },
          }));
      }),
      (I = [A, u, s]),
      (a[9] = A),
      (a[10] = u),
      (a[11] = s),
      (a[12] = F),
      (a[13] = I))
    : ((F = a[12]), (I = a[13])),
    (0, M.useEffect)(F, I));
  let L, R;
  (a[14] !== A || a[15] !== u
    ? ((L = () => {
        A === `connected` && i(u, t.CODEX_MOBILE_SETUP_COMPLETED, !0);
      }),
      (R = [A, u]),
      (a[14] = A),
      (a[15] = u),
      (a[16] = L),
      (a[17] = R))
    : ((L = a[16]), (R = a[17])),
    (0, M.useEffect)(L, R));
  let z;
  a[18] !== k || a[19] !== u
    ? ((z = async () => ((await u.query.fetch(S)) === `required` ? k.data === !1 : !1)),
      (a[18] = k),
      (a[19] = u),
      (a[20] = z))
    : (z = a[20]);
  let B;
  a[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        w(e ? `mfa-required` : `allow-host`);
      }),
      (a[21] = B))
    : (B = a[21]);
  let V;
  a[22] === z ? (V = a[23]) : ((V = { mutationFn: z, onSuccess: B }), (a[22] = z), (a[23] = V));
  let H = d(V),
    U;
  a[24] === _
    ? (U = a[25])
    : ((U = async () => {
        let e = await C();
        return (await _.mutateAsync(!0), e ? `connected` : `waiting`);
      }),
      (a[24] = _),
      (a[25] = U));
  let W;
  a[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        w(e);
      }),
      (a[26] = W))
    : (W = a[26]);
  let G;
  a[27] === U ? (G = a[28]) : ((G = { mutationFn: U, onSuccess: W }), (a[27] = U), (a[28] = G));
  let K = d(G),
    q;
  a[29] !== K.error ||
  a[30] !== H.error ||
  a[31] !== O.error ||
  a[32] !== D.error ||
  a[33] !== b.error
    ? ((q = fe([b.error, D.error, O.error, H.error, K.error])),
      (a[29] = K.error),
      (a[30] = H.error),
      (a[31] = O.error),
      (a[32] = D.error),
      (a[33] = b.error),
      (a[34] = q))
    : (q = a[34]);
  let J = q,
    Y,
    me;
  (a[35] !== f || a[36] !== J
    ? ((Y = () => {
        J && f(`/login`, { replace: !0 });
      }),
      (me = [f, J]),
      (a[35] = f),
      (a[36] = J),
      (a[37] = Y),
      (a[38] = me))
    : ((Y = a[37]), (me = a[38])),
    (0, M.useEffect)(Y, me));
  let X = H.isPending || K.isPending || _.isPending || (O.data === `required` && k.isLoading);
  if ((y === `auto` && x == null && v && b.isLoading) || J) return null;
  if (s === `dialog`) {
    let e;
    a[39] !== K || a[40] !== P
      ? ((e = () => {
          (P(`allow_host`), K.mutate());
        }),
        (a[39] = K),
        (a[40] = P),
        (a[41] = e))
      : (e = a[41]);
    let t;
    a[42] === o
      ? (t = a[43])
      : ((t = (e) => {
          e || o();
        }),
        (a[42] = o),
        (a[43] = t));
    let n;
    a[44] !== o || a[45] !== P
      ? ((n = () => {
          (P(`skip`), o());
        }),
        (a[44] = o),
        (a[45] = P),
        (a[46] = n))
      : (n = a[46]);
    let r;
    a[47] !== H || a[48] !== P
      ? ((r = () => {
          (P(`start_setup`), H.mutate());
        }),
        (a[47] = H),
        (a[48] = P),
        (a[49] = r))
      : (r = a[49]);
    let i;
    return (
      a[50] !== H.isError ||
      a[51] !== A ||
      a[52] !== X ||
      a[53] !== e ||
      a[54] !== t ||
      a[55] !== n ||
      a[56] !== r
        ? ((i = (0, N.jsx)(oe, {
            open: !0,
            showStartSetupError: H.isError,
            setupInProgress: X,
            step: A,
            onAllowHost: e,
            onOpenChange: t,
            onSkip: n,
            onStartSetup: r,
          })),
          (a[50] = H.isError),
          (a[51] = A),
          (a[52] = X),
          (a[53] = e),
          (a[54] = t),
          (a[55] = n),
          (a[56] = r),
          (a[57] = i))
        : (i = a[57]),
      i
    );
  }
  let Z;
  a[58] !== K || a[59] !== P
    ? ((Z = () => {
        (P(`allow_host`), K.mutate());
      }),
      (a[58] = K),
      (a[59] = P),
      (a[60] = Z))
    : (Z = a[60]);
  let Q;
  a[61] !== o || a[62] !== P
    ? ((Q = () => {
        (P(`skip`), o());
      }),
      (a[61] = o),
      (a[62] = P),
      (a[63] = Q))
    : (Q = a[63]);
  let $;
  a[64] !== H || a[65] !== P
    ? (($ = () => {
        (P(`start_setup`), H.mutate());
      }),
      (a[64] = H),
      (a[65] = P),
      (a[66] = $))
    : ($ = a[66]);
  let he;
  return (
    a[67] !== H.isError ||
    a[68] !== o ||
    a[69] !== A ||
    a[70] !== X ||
    a[71] !== Z ||
    a[72] !== Q ||
    a[73] !== $
      ? ((he = (0, N.jsx)(pe, {
          showStartSetupError: H.isError,
          setupInProgress: X,
          step: A,
          onAllowHost: Z,
          onFinishSetup: o,
          onSkip: Q,
          onStartSetup: $,
        })),
        (a[67] = H.isError),
        (a[68] = o),
        (a[69] = A),
        (a[70] = X),
        (a[71] = Z),
        (a[72] = Q),
        (a[73] = $),
        (a[74] = he))
      : (he = a[74]),
    he
  );
}
function pe(e) {
  let t = (0, le.c)(26),
    {
      onAllowHost: n,
      onFinishSetup: r,
      onSkip: i,
      onStartSetup: a,
      setupInProgress: o,
      showStartSetupError: s,
      step: c,
    } = e,
    l = ee(p),
    u = te(),
    d;
  t[0] !== l || t[1] !== c
    ? ((d = (e) => {
        ne(l, {
          eventName: `codex_remote_control_onboarding_action_clicked`,
          metadata: { action: e, step: c, surface: `page` },
        });
      }),
      (t[0] = l),
      (t[1] = c),
      (t[2] = d))
    : (d = t[2]);
  let m = d,
    h;
  t[3] === c
    ? (h = t[4])
    : ((h =
        c === `allow-host` || c === `mfa-required` || c === `waiting`
          ? (0, N.jsx)(v.Header, {
              children: (0, N.jsx)(y, {
                start: (0, N.jsx)(_, {
                  id: `codexMobile.setupPage.title`,
                  defaultMessage: `Set up Codex Mobile`,
                  description: `Toolbar title shown during Codex mobile setup`,
                }),
              }),
            })
          : null),
      (t[3] = c),
      (t[4] = h));
  let g;
  t[5] === m
    ? (g = t[6])
    : ((g = () => {
        (m(`continue_on_chatgpt`),
          f.dispatchMessage(`open-in-browser`, { url: `https://chatgpt.com/#settings/Security` }));
      }),
      (t[5] = m),
      (t[6] = g));
  let b;
  t[7] !== r || t[8] !== m
    ? ((b = () => {
        (m(`finish_setup`), r());
      }),
      (t[7] = r),
      (t[8] = m),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== u || t[11] !== m
    ? ((x = () => {
        (m(`manage_connections`), u(`/settings/connections`));
      }),
      (t[10] = u),
      (t[11] = m),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== n ||
  t[14] !== i ||
  t[15] !== a ||
  t[16] !== o ||
  t[17] !== s ||
  t[18] !== c ||
  t[19] !== g ||
  t[20] !== b ||
  t[21] !== x
    ? ((S = (0, N.jsx)(T, {
        onAllowHost: n,
        onContinueOnChatGPT: g,
        onFinishSetup: b,
        onManageConnections: x,
        onSkip: i,
        onStartSetup: a,
        setupInProgress: o,
        showStartSetupError: s,
        step: c,
        variant: `page`,
      })),
      (t[13] = n),
      (t[14] = i),
      (t[15] = a),
      (t[16] = o),
      (t[17] = s),
      (t[18] = c),
      (t[19] = g),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let C;
  return (
    t[23] !== h || t[24] !== S
      ? ((C = (0, N.jsxs)(N.Fragment, { children: [h, S] })), (t[23] = h), (t[24] = S), (t[25] = C))
      : (C = t[25]),
    C
  );
}
export { O as a, A as i, ue as n, D as o, k as r, P as t };
//# sourceMappingURL=codex-mobile-setup-flow.js.map
