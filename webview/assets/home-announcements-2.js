import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  AN as r,
  Az as i,
  CA as a,
  Cm as o,
  Du as s,
  EA as c,
  EB as l,
  EN as u,
  Em as d,
  Eu as f,
  Fl as p,
  GP as m,
  Gi as h,
  HP as g,
  IE as _,
  IP as v,
  Ij as y,
  Jm as b,
  Jo as x,
  Ka as S,
  Ko as C,
  LE as w,
  LP as T,
  MC as E,
  Mj as D,
  Mr as O,
  NC as k,
  NE as A,
  NF as j,
  Nm as M,
  Od as N,
  PC as P,
  Pj as F,
  Pr as I,
  Qi as L,
  RE as ee,
  RN as te,
  RV as R,
  Rj as ne,
  SA as z,
  TB as B,
  TP as re,
  Tl as ie,
  Tm as ae,
  Ua as oe,
  Vl as se,
  Ym as ce,
  _M as le,
  av as ue,
  bB as V,
  ei as de,
  es as fe,
  fN as pe,
  gM as me,
  gV as he,
  gv as ge,
  hS as H,
  hV as _e,
  hw as ve,
  iF as ye,
  jE as be,
  jV as U,
  jd as xe,
  kN as Se,
  lV as Ce,
  mw as we,
  nP as Te,
  pN as Ee,
  pS as De,
  pV as Oe,
  pw as ke,
  qP as W,
  qi as Ae,
  qo as je,
  rP as Me,
  sV as Ne,
  ti as Pe,
  ts as Fe,
  vv as Ie,
  wA as Le,
  wB as Re,
  wP as ze,
  wl as Be,
  yE as Ve,
  zE as He,
  zN as Ue,
  zV as We,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Mn as Ge,
  QD as Ke,
  Qw as qe,
  Xw as Je,
  ZD as Ye,
  Zw as Xe,
  _y as Ze,
  a_ as Qe,
  cr as $e,
  eT as et,
  fw as tt,
  jn as nt,
  lT as rt,
  nT as it,
  o_ as at,
  pw as ot,
  sr as st,
  tT as ct,
  uT as lt,
  vy as ut,
} from "./app-initial~app-main~onboarding-page.js";
import {
  C as dt,
  S as ft,
  T as pt,
  g as mt,
  h as ht,
  m as gt,
  p as _t,
  w as vt,
  x as yt,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import {
  cn as bt,
  ln as xt,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  _ as St,
  n as Ct,
  t as wt,
  y as Tt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~select-~cvtadpw5.js";
import { i as Et, r as Dt, t as Ot } from "./ambient-suggestions-connected-apps-consent.js";
import {
  h as kt,
  m as At,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j.js";
import {
  d as jt,
  u as Mt,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  n as Nt,
  t as Pt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~setting~fboddtaw.js";
import {
  a as Ft,
  i as It,
  n as Lt,
  r as Rt,
  t as zt,
} from "./app-initial~app-main~new-thread-panel-page~home-announcements~upgrade-plan-dialog.js";
import {
  n as Bt,
  r as Vt,
  t as Ht,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~hotkey-window-thread-pa~ewq0bkmq.js";
import {
  n as Ut,
  t as Wt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~h99fup20.js";
import { n as Gt, t as Kt } from "./team.js";
function qt(e) {
  let t = (0, Jt.c)(13),
    { action: n } = e,
    r = n.icon,
    i = n.color ?? `primary`,
    a = n.size ?? `composerSm`,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r ? (0, K.jsx)(r, { className: `icon-xs` }) : null), (t[0] = r), (t[1] = o));
  let s;
  return (
    t[2] !== n.ariaLabel ||
    t[3] !== n.className ||
    t[4] !== n.disabled ||
    t[5] !== n.label ||
    t[6] !== n.loading ||
    t[7] !== n.onClick ||
    t[8] !== n.uniform ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== o
      ? ((s = (0, K.jsxs)(pe, {
          "aria-label": n.ariaLabel,
          className: n.className,
          color: i,
          disabled: n.disabled,
          loading: n.loading,
          onClick: n.onClick,
          size: a,
          uniform: n.uniform,
          children: [o, n.label],
        })),
        (t[2] = n.ariaLabel),
        (t[3] = n.className),
        (t[4] = n.disabled),
        (t[5] = n.label),
        (t[6] = n.loading),
        (t[7] = n.onClick),
        (t[8] = n.uniform),
        (t[9] = i),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s))
      : (s = t[12]),
    s
  );
}
function G(e) {
  let t = (0, Jt.c)(51),
    {
      actionsClassName: n,
      actionsPlacement: r,
      badge: i,
      bodyClassName: a,
      className: o,
      description: s,
      dismissAction: c,
      leadingClassName: l,
      leadingVisual: u,
      primaryAction: d,
      secondaryAction: f,
      title: p,
    } = e,
    m = r === void 0 ? `aside` : r,
    h = d != null || f != null || c != null,
    g;
  t[0] !== n || t[1] !== m || t[2] !== c || t[3] !== d || t[4] !== f
    ? ((g = (e) =>
        (0, K.jsxs)(`div`, {
          className: ze(
            `flex items-center gap-2`,
            m === `body` || m === `bodyOnNarrow`
              ? `mt-3 justify-start`
              : `self-center max-[400px]:w-full max-[400px]:justify-center max-[400px]:self-stretch`,
            n,
            e,
          ),
          children: [
            f ? (0, K.jsx)(qt, { action: f }) : null,
            d ? (0, K.jsx)(qt, { action: d }) : null,
            c ? (0, K.jsx)(qt, { action: c }) : null,
          ],
        })),
      (t[0] = n),
      (t[1] = m),
      (t[2] = c),
      (t[3] = d),
      (t[4] = f),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v;
  t[6] !== m || t[7] !== h || t[8] !== _
    ? ((v = h && m === `body` ? _() : null), (t[6] = m), (t[7] = h), (t[8] = _), (t[9] = v))
    : (v = t[9]);
  let y = v,
    b;
  t[10] !== m || t[11] !== h || t[12] !== _
    ? ((b = h && m === `bodyOnNarrow` ? _(`hidden max-[400px]:flex`) : null),
      (t[10] = m),
      (t[11] = h),
      (t[12] = _),
      (t[13] = b))
    : (b = t[13]);
  let x = b,
    S;
  t[14] !== m || t[15] !== h || t[16] !== _
    ? ((S = h && m === `aside` ? _() : null), (t[14] = m), (t[15] = h), (t[16] = _), (t[17] = S))
    : (S = t[17]);
  let C = S,
    w;
  t[18] !== m || t[19] !== h || t[20] !== _
    ? ((w = h && m === `bodyOnNarrow` ? _(`max-[400px]:hidden`) : null),
      (t[18] = m),
      (t[19] = h),
      (t[20] = _),
      (t[21] = w))
    : (w = t[21]);
  let T = w,
    E;
  t[22] === o
    ? (E = t[23])
    : ((E = ze(
        `!rounded-3xl border-token-input-border bg-token-input-background/70 py-3 pr-3 text-sm dark:!border-token-input-border`,
        o,
      )),
      (t[22] = o),
      (t[23] = E));
  let D;
  t[24] !== l || t[25] !== u
    ? ((D = u
        ? (0, K.jsx)(`div`, {
            className: ze(
              `text-token-text-secondary ml-1 flex h-6 w-6 shrink-0 items-center justify-center self-center`,
              l,
            ),
            children: u,
          })
        : null),
      (t[24] = l),
      (t[25] = u),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] === p
    ? (O = t[28])
    : ((O = (0, K.jsx)(`div`, {
        className: `min-w-0 text-base font-medium text-token-text-primary`,
        children: p,
      })),
      (t[27] = p),
      (t[28] = O));
  let k;
  t[29] === i
    ? (k = t[30])
    : ((k = i
        ? (0, K.jsx)(Ye, {
            className: `border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary`,
            children: i,
          })
        : null),
      (t[29] = i),
      (t[30] = k));
  let A;
  t[31] !== k || t[32] !== O
    ? ((A = (0, K.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [O, k],
      })),
      (t[31] = k),
      (t[32] = O),
      (t[33] = A))
    : (A = t[33]);
  let j;
  t[34] === a
    ? (j = t[35])
    : ((j = ze(`text-token-text-secondary mt-0.5 text-base leading-relaxed text-pretty`, a)),
      (t[34] = a),
      (t[35] = j));
  let M;
  t[36] !== s || t[37] !== j
    ? ((M = (0, K.jsx)(`div`, { className: j, children: s })),
      (t[36] = s),
      (t[37] = j),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] !== y || t[40] !== x || t[41] !== A || t[42] !== M
    ? ((N = (0, K.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [A, M, y, x] })),
      (t[39] = y),
      (t[40] = x),
      (t[41] = A),
      (t[42] = M),
      (t[43] = N))
    : (N = t[43]);
  let P;
  t[44] !== N || t[45] !== D
    ? ((P = (0, K.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 max-[400px]:items-start`,
        children: [D, N],
      })),
      (t[44] = N),
      (t[45] = D),
      (t[46] = P))
    : (P = t[46]);
  let F = C ?? T ?? void 0,
    I;
  return (
    t[47] !== P || t[48] !== F || t[49] !== E
      ? ((I = (0, K.jsx)(nt, {
          layout: `horizontal`,
          stackOnNarrow: !0,
          className: E,
          content: P,
          customCtas: F,
        })),
        (t[47] = P),
        (t[48] = F),
        (t[49] = E),
        (t[50] = I))
      : (I = t[50]),
    I
  );
}
var Jt,
  K,
  q = e(() => {
    ((Jt = R()), re(), Ke(), Ge(), Ee(), (K = U()));
  });
function Yt(e) {
  let t = (0, Xt.c)(12),
    { onDismiss: n, onDisable: r } = e,
    i,
    a,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.title`,
        defaultMessage: `Personalize Codex`,
        description: `Title for the ambient suggestions connected apps home banner`,
      })),
      (a = (0, J.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.body`,
        defaultMessage: `Codex suggests what to do next by searching project files and connected apps`,
        description: `Body for the ambient suggestions connected apps home banner`,
      })),
      (o = (0, J.jsx)(Wt, { className: `icon-sm` })),
      (s = (0, J.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.disable`,
        defaultMessage: `Disable`,
        description: `Button label for disabling ambient suggestions from the home banner`,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s))
    : ((i = t[0]), (a = t[1]), (o = t[2]), (s = t[3]));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = {
        label: s,
        onClick: r,
        color: `ghost`,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[4] = r),
      (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.ok`,
        defaultMessage: `OK`,
        description: `Button label for accepting the ambient suggestions connected apps home banner`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n
    ? (u = t[8])
    : ((u = {
        label: l,
        onClick: n,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[7] = n),
      (t[8] = u));
  let d;
  return (
    t[9] !== c || t[10] !== u
      ? ((d = (0, J.jsx)(G, {
          title: i,
          description: a,
          leadingVisual: o,
          secondaryAction: c,
          primaryAction: u,
        })),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var Xt,
  J,
  Zt = e(() => {
    ((Xt = R()), g(), q(), Ut(), (J = U()));
  });
function Qt() {
  let e = (0, en.c)(13),
    t = B(v),
    { authMethod: n, email: a, isLoading: o, planAtLogin: c } = s(),
    u = n === `chatgpt`,
    d;
  e[0] === u ? (d = e[1]) : ((d = { queryConfig: { enabled: u } }), (e[0] = u), (e[1] = d));
  let { data: f, isLoading: p } = Ue(`account-info`, d),
    m = l(Dt),
    h = m != null,
    g = F(`2425897452`),
    _ = ne(),
    y = r(j.enabled),
    b = i({ authMethod: n, email: f?.email ?? a, plan: f?.plan ?? c }),
    x = g && b && y === !0 && m === !1,
    { data: C, isLoading: w } = S({ enabled: x, hostId: A }),
    T;
  e[2] === C ? (T = e[3]) : ((T = C === void 0 ? [] : C), (e[2] = C), (e[3] = T));
  let E = T,
    D;
  e[4] === E ? (D = e[5]) : ((D = Ot(E)), (e[4] = E), (e[5] = D));
  let O = $t({
      hasConnectedApps: D.length > 0,
      isLoadingApps: w,
      isLoadingEligibilityInputs: o || !h || _ || p,
      shouldLoadApps: x,
    }),
    k,
    M;
  e[6] === t
    ? ((k = e[7]), (M = e[8]))
    : ((k = () => {
        t.set(Dt, !0);
      }),
      (M = () => {
        (t.set(Dt, !0), Se(t, j.enabled, !1));
      }),
      (e[6] = t),
      (e[7] = k),
      (e[8] = M));
  let N;
  return (
    e[9] !== k || e[10] !== M || e[11] !== O
      ? ((N = { ...O, onDismiss: k, onDisable: M }),
        (e[9] = k),
        (e[10] = M),
        (e[11] = O),
        (e[12] = N))
      : (N = e[12]),
    N
  );
}
function $t({
  hasConnectedApps: e,
  isLoadingApps: t,
  isLoadingEligibilityInputs: n,
  shouldLoadApps: r,
}) {
  let i = n || (r && t);
  return { isEligible: !i && r && e, isLoading: i };
}
var en,
  tn = e(() => {
    ((en = R()), V(), ye(), f(), oe(), T(), u(), be(), D(), te(), Et());
  });
function nn({ actionId: e, beaconId: t }) {
  return `${t}:${e}`;
}
function rn(e) {
  let t = e.beacon_ui_response;
  return t?.ui_info.type === `beacon_banner_info` ? { ...t, ui_info: t.ui_info } : null;
}
function an({ accountId: e, response: t }) {
  return t.beacon_ui_response == null
    ? { accountId: e, beacon: null, shouldKeepLastServedBeacon: !0 }
    : { accountId: e, beacon: rn(t), shouldKeepLastServedBeacon: !1 };
}
function on(e) {
  let t = sn(e.action_v2);
  return t != null && cn(t) ? t : null;
}
function sn(e) {
  return `url` in e && e.url != null
    ? e.url
    : `web_url` in e && e.web_url != null
      ? e.web_url
      : null;
}
function cn(e) {
  return (
    e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    (e.startsWith(`/`) && !e.startsWith(`//`))
  );
}
function ln({ accountId: e, authMethod: t, isAuthLoading: n }) {
  return !n && t === `chatgpt` && e != null;
}
function un({ isAuthLoading: e }) {
  return e;
}
async function dn(e, t, n) {
  try {
    await Le.safePost(`/beacons/event`, {
      requestBody:
        n == null
          ? { beacon_id: e.beacon_id, event_type: t }
          : { beacon_id: e.beacon_id, event_type: t, event_cta_id: n },
    });
  } catch {}
}
function fn(e, t) {
  return `${e}:${t}`;
}
function pn(e, t, n) {
  let r = fn(t, n.beacon_id);
  e.get(bn).has(r) ||
    (e.set(bn, (e) => {
      let t = new Set(e);
      return (t.add(r), t);
    }),
    dn(n, `view`));
}
function mn(e, t, n) {
  let r = fn(t, n.beacon_id);
  (e.set(xn, (e) => {
    let t = new Set(e);
    return (t.add(r), t);
  }),
    dn(n, `dismiss`));
}
function hn() {
  let e = (0, gn.c)(30),
    t = B(v),
    { accountId: n, authMethod: r, isLoading: i, userId: a } = s(),
    { data: o } = se(),
    c = y(),
    u = l(xn),
    d = l(Cn),
    f = l(yn),
    p = l(Sn),
    m,
    h;
  if (e[0] !== n || e[1] !== r || e[2] !== o?.id || e[3] !== i || e[4] !== c || e[5] !== a) {
    let t = c.getContext().user?.customIDs?.account_id;
    ((m = n ?? o?.id ?? t ?? a ?? null),
      (h = ln({ accountId: m, authMethod: r, isAuthLoading: i })),
      (e[0] = n),
      (e[1] = r),
      (e[2] = o?.id),
      (e[3] = i),
      (e[4] = c),
      (e[5] = a),
      (e[6] = m),
      (e[7] = h));
  } else ((m = e[6]), (h = e[7]));
  let g = h,
    _;
  e[8] === i ? (_ = e[9]) : ((_ = un({ isAuthLoading: i })), (e[8] = i), (e[9] = _));
  let b = _,
    x,
    S;
  (e[10] !== m || e[11] !== t || e[12] !== g
    ? ((x = () => {
        (t.set(vn, m), t.set(yn, g));
      }),
      (S = [m, t, g]),
      (e[10] = m),
      (e[11] = t),
      (e[12] = g),
      (e[13] = x),
      (e[14] = S))
    : ((x = e[13]), (S = e[14])),
    (0, _n.useLayoutEffect)(x, S));
  let C, w;
  (e[15] !== d.data || e[16] !== t
    ? ((C = () => {
        d.data?.accountId != null &&
          d.data.beacon != null &&
          t.set(Sn, { accountId: d.data.accountId, beacon: d.data.beacon });
      }),
      (w = [d.data, t]),
      (e[15] = d.data),
      (e[16] = t),
      (e[17] = C),
      (e[18] = w))
    : ((C = e[17]), (w = e[18])),
    (0, _n.useLayoutEffect)(C, w));
  let T =
      d.data?.accountId === m
        ? (d.data.beacon ??
          (d.data.shouldKeepLastServedBeacon && p?.accountId === m ? p.beacon : null))
        : null,
    E;
  if (e[19] !== u || e[20] !== T || e[21] !== m || e[22] !== g) {
    let t = T != null && m != null ? fn(m, T.beacon_id) : null;
    ((E = g && T != null && t != null && !u.has(t) ? T : null),
      (e[19] = u),
      (e[20] = T),
      (e[21] = m),
      (e[22] = g),
      (e[23] = E));
  } else E = e[23];
  let D = E,
    O = b || D != null,
    k = D != null,
    A = b || (g && (!f || d.isLoading)),
    j;
  return (
    e[24] !== D || e[25] !== m || e[26] !== O || e[27] !== k || e[28] !== A
      ? ((j = {
          accountId: m,
          beacon: D,
          isEligible: k,
          isLoading: A,
          shouldSuppressVanillaPromos: O,
        }),
        (e[24] = D),
        (e[25] = m),
        (e[26] = O),
        (e[27] = k),
        (e[28] = A),
        (e[29] = j))
      : (j = e[29]),
    j
  );
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn = e(() => {
    ((gn = R()),
      V(),
      (_n = t(We(), 1)),
      f(),
      p(),
      Mt(),
      T(),
      D(),
      c(),
      (vn = Ce(v, null)),
      (yn = Ce(v, !1)),
      (bn = Ce(v, () => new Set())),
      (xn = Ce(v, () => new Set())),
      (Sn = Ce(v, null)),
      (Cn = Ne(v, ({ get: e }) => {
        let t = e(vn);
        return {
          queryKey: [`codex-app-home-beacon`, t, e(jt).locale],
          enabled: e(yn),
          refetchOnMount: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
          retry: !1,
          staleTime: 6e4,
          queryFn: async () => ({
            accountId: t,
            response: await Le.safeGet(`/beacons/home`, {
              additionalHeaders: { "Cache-Control": `no-store` },
              parameters: { query: { product: `codex` } },
            }),
          }),
          select: an,
        };
      })));
  });
function Tn(e) {
  let t = (0, kn.c)(13),
    { accountId: n, beacon: r, localActionHandlers: i } = e,
    a = B(v),
    o,
    s;
  (t[0] !== n || t[1] !== r || t[2] !== a
    ? ((o = () => {
        pn(a, n, r);
      }),
      (s = [n, r, a]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4])),
    (0, An.useEffect)(o, s));
  let c;
  t[5] !== n || t[6] !== r || t[7] !== a
    ? ((c = () => {
        mn(a, n, r);
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== i || t[11] !== c
      ? ((l = (0, jn.jsx)(En, { beacon: r, localActionHandlers: i, onDismiss: c })),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function En(e) {
  let t = (0, kn.c)(26),
    { beacon: n, localActionHandlers: r, onDismiss: i } = e,
    a = W(),
    o = Ie(),
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    let e = n.action_items.find(On),
      i = n.action_items.find(Dn),
      a = (e) => {
        if (e == null || e.text == null) return;
        let t = r?.[nn({ actionId: e.id, beaconId: n.beacon_id })],
          i = on(e);
        if (!(i == null && t == null))
          return {
            label: e.text,
            onClick: (r) => {
              if ((dn(n, `click`, e.id), t?.({ action: e, beacon: n }) !== !0 && i != null)) {
                if (!i.startsWith(`/`)) {
                  Ae({ event: r, href: i, initiator: `open_in_browser_bridge` });
                  return;
                }
                o(i);
              }
            },
            className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
          };
      };
    ((s = G),
      (c = n.ui_info.title),
      (l = n.ui_info.description),
      t[10] === n.ui_info.icon_image_url
        ? (u = t[11])
        : ((u = n.ui_info.icon_image_url
            ? (0, jn.jsx)(`img`, {
                alt: ``,
                src: n.ui_info.icon_image_url,
                className: `h-8 w-8 shrink-0`,
              })
            : void 0),
          (t[10] = n.ui_info.icon_image_url),
          (t[11] = u)),
      (d = `ml-0 h-8 w-8`),
      (f = a(e)),
      (p = a(i)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p));
  } else ((s = t[3]), (c = t[4]), (l = t[5]), (u = t[6]), (d = t[7]), (f = t[8]), (p = t[9]));
  let m;
  t[12] === a
    ? (m = t[13])
    : ((m = a.formatMessage(
        {
          id: `codexAppHomeBeaconAnnouncement.dismiss`,
          defaultMessage: `Dismiss {appName} beacon banner`,
          description: `Accessible label for dismissing the backend-driven Codex app home banner`,
        },
        { appName: At },
      )),
      (t[12] = a),
      (t[13] = m));
  let h;
  t[14] !== i || t[15] !== m
    ? ((h = {
        ariaLabel: m,
        color: `ghost`,
        icon: z,
        onClick: i,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[14] = i),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== s ||
    t[18] !== c ||
    t[19] !== l ||
    t[20] !== u ||
    t[21] !== d ||
    t[22] !== f ||
    t[23] !== p ||
    t[24] !== h
      ? ((g = (0, jn.jsx)(s, {
          title: c,
          description: l,
          leadingVisual: u,
          leadingClassName: d,
          primaryAction: f,
          secondaryAction: p,
          dismissAction: h,
        })),
        (t[17] = s),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u),
        (t[21] = d),
        (t[22] = f),
        (t[23] = p),
        (t[24] = h),
        (t[25] = g))
      : (g = t[25]),
    g
  );
}
function Dn(e) {
  return e.type === `secondary`;
}
function On(e) {
  return e.type == null || e.type === `primary`;
}
var kn,
  An,
  jn,
  Mn = e(() => {
    ((kn = R()), V(), (An = t(We(), 1)), g(), ue(), kt(), wn(), h(), q(), a(), T(), (jn = U()));
  });
function Nn(e) {
  let t = (0, Pn.c)(16),
    { message: n, setHasSeenAppUpsellBanner: r } = e,
    i = W(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Fn.jsx)(m, {
        id: `codex.appUpsellBanner.title`,
        defaultMessage: `Codex app`,
        description: `Title shown in the app upsell banner`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Fn.jsx)(`img`, { alt: ``, src: ht, className: `h-8 w-8 shrink-0` })), (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Fn.jsx)(m, {
        id: `codex.appUpsellBanner.download`,
        defaultMessage: `Download`,
        description: `Primary action label to download the Codex app`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = {
        label: s,
        onClick: (e) => {
          (r(!0),
            Ae({
              event: e,
              href: `https://persistent.oaistatic.com/codex-app-prod/Codex.dmg`,
              initiator: `open_in_browser_bridge`,
            }));
        },
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[3] = r),
      (t[4] = c));
  let l;
  t[5] === i
    ? (l = t[6])
    : ((l = i.formatMessage({
        id: `codex.appUpsellBanner.dismissLabel`,
        defaultMessage: `Dismiss Codex app banner`,
        description: `Accessible label for dismissing the Codex app upsell banner`,
      })),
      (t[5] = i),
      (t[6] = l));
  let u;
  t[7] === r
    ? (u = t[8])
    : ((u = () => {
        r(!0);
      }),
      (t[7] = r),
      (t[8] = u));
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = {
        ariaLabel: l,
        color: `ghost`,
        icon: z,
        onClick: u,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== n || t[13] !== c || t[14] !== d
      ? ((f = (0, Fn.jsx)(G, {
          title: a,
          description: n,
          leadingVisual: o,
          leadingClassName: `ml-0 h-8 w-8`,
          primaryAction: c,
          dismissAction: d,
        })),
        (t[12] = n),
        (t[13] = c),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
var Pn,
  Fn,
  In = e(() => {
    ((Pn = R()), g(), mt(), h(), q(), a(), (Fn = U()));
  });
function Ln(e) {
  let t = (0, zn.c)(6),
    { platform: n, isLoading: r } = Fe(),
    { authMethod: i, planAtLogin: a, isLoading: o } = s(),
    c = i === `chatgpt`,
    l = i === `apikey`,
    u = c || l,
    d;
  t[0] === u ? (d = t[1]) : ((d = { queryConfig: { enabled: u } }), (t[0] = u), (t[1] = d));
  let { data: f, isLoading: p } = Ue(`account-info`, d),
    h = i === `copilot`,
    g = n === `macOS`,
    _ = f?.plan ?? a,
    v = _ === Be.FREE || _ === Be.GO,
    y = !e && (o || r || (c && p)),
    b = null;
  if (!y && g && !e && !h && i && f && ((c && !v) || l)) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Bn.jsx)(m, {
          id: `codex.appUpsellBanner.cbpApi.message`,
          defaultMessage: `Build faster with the Codex app. Download now or {learnMoreLink}`,
          description: `Message shown in the app upsell banner for paid ChatGPT and API key users`,
          values: {
            learnMoreLink: (0, Bn.jsx)(`a`, {
              className: `text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none`,
              href: `https://chatgpt.com/codex`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: (0, Bn.jsx)(m, {
                id: `codex.appUpsellBanner.learnMoreLowercase`,
                defaultMessage: `learn more`,
                description: `Lowercase learn more link text in the app upsell banner`,
              }),
            }),
          },
        })),
        (t[2] = e))
      : (e = t[2]),
      (b = e));
  }
  let x;
  return (
    t[3] !== y || t[4] !== b
      ? ((x = { isLoading: y, message: b }), (t[3] = y), (t[4] = b), (t[5] = x))
      : (x = t[5]),
    x
  );
}
function Rn() {
  let e = (0, zn.c)(5),
    [t, n] = _e(Vn),
    { isLoading: r, message: i } = Ln(t),
    a = i != null,
    o;
  return (
    e[0] !== r || e[1] !== i || e[2] !== n || e[3] !== a
      ? ((o = { isEligible: a, isLoading: r, message: i, setHasSeenAppUpsellBanner: n }),
        (e[0] = r),
        (e[1] = i),
        (e[2] = n),
        (e[3] = a),
        (e[4] = o))
      : (o = e[4]),
    o
  );
}
var zn,
  Bn,
  Vn,
  Hn = e(() => {
    ((zn = R()),
      Oe(),
      g(),
      f(),
      fe(),
      Te(),
      ie(),
      te(),
      (Bn = U()),
      (Vn = Me(`has-seen-app-upsell-banner`, !1)));
  });
function Un(e) {
  let t = (0, Wn.c)(25),
    {
      content: n,
      fastModeModel: r,
      intl: i,
      isSubmitting: a,
      setHasSeenFastModeHomeBanner: o,
      setIsSubmitting: s,
      setServiceTier: c,
    } = e,
    l = B(v),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Gn.jsx)(m, {
        id: `codex.fastModeHomeBanner.title`,
        defaultMessage: `Enable Fast mode`,
        description: `Title shown in the Fast mode home banner`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d, f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Gn.jsx)(zt, { className: `icon-sm text-[#FFC93C]` })),
      (f = (0, Gn.jsx)(m, {
        id: `codex.fastModeHomeBanner.cta.primary`,
        defaultMessage: `Enable now`,
        description: `Primary CTA shown in the Fast mode home banner`,
      })),
      (t[1] = d),
      (t[2] = f))
    : ((d = t[1]), (f = t[2]));
  let p;
  t[3] !== r || t[4] !== l || t[5] !== o || t[6] !== s || t[7] !== c
    ? ((p = () => {
        r != null &&
          (s(!0),
          H(l, E, {}),
          c(ae(r)?.id ?? `priority`, `home_banner`).finally(() => {
            (o(!0), s(!1));
          }));
      }),
      (t[3] = r),
      (t[4] = l),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let h;
  t[9] !== a || t[10] !== p
    ? ((h = {
        label: f,
        onClick: p,
        disabled: a,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[9] = a),
      (t[10] = p),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === i
    ? (g = t[13])
    : ((g = i.formatMessage({
        id: `codex.fastModeHomeBanner.dismissLabel`,
        defaultMessage: `Dismiss Fast mode banner`,
        description: `Accessible label for dismissing the Fast mode home banner`,
      })),
      (t[12] = i),
      (t[13] = g));
  let _;
  t[14] !== l || t[15] !== o
    ? ((_ = () => {
        (H(l, k, {}), o(!0));
      }),
      (t[14] = l),
      (t[15] = o),
      (t[16] = _))
    : (_ = t[16]);
  let y;
  t[17] !== a || t[18] !== g || t[19] !== _
    ? ((y = {
        ariaLabel: g,
        color: `ghost`,
        icon: z,
        onClick: _,
        disabled: a,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[17] = a),
      (t[18] = g),
      (t[19] = _),
      (t[20] = y))
    : (y = t[20]);
  let b;
  return (
    t[21] !== n || t[22] !== h || t[23] !== y
      ? ((b = (0, Gn.jsx)(G, {
          title: u,
          description: n,
          leadingVisual: d,
          primaryAction: h,
          dismissAction: y,
        })),
        (t[21] = n),
        (t[22] = h),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
var Wn,
  Gn,
  Kn = e(() => {
    ((Wn = R()), Ve(), V(), g(), q(), Lt(), a(), De(), T(), M(), (Gn = U()));
  });
function qn() {
  let e = (0, Jn.c)(18),
    t = B(v),
    n = W(),
    { isServiceTierAllowed: r } = Xe(),
    { data: i } = lt(),
    [a, s] = _e(Zn),
    { modelSettings: c } = et(),
    { serviceTierSettings: l, setServiceTier: u } = ot(),
    [f, p] = (0, Yn.useState)(!1),
    h = (0, Yn.useRef)(!1),
    g = i?.models,
    _;
  e[0] !== c.model || e[1] !== g
    ? ((_ = d(g, c.model, o)), (e[0] = c.model), (e[1] = g), (e[2] = _))
    : (_ = e[2]);
  let y = _,
    b = r && y != null && !a && l.selectedServiceTier == null && !l.isLoading,
    { estimate: x, estimateStatus: S } = Ft(b),
    C = !a && b && S !== `ready` && S !== `failed`,
    w = b && S === `ready` && x != null,
    T,
    E;
  (e[3] !== w || e[4] !== t
    ? ((T = () => {
        !w || h.current || ((h.current = !0), H(t, P, {}));
      }),
      (E = [t, w]),
      (e[3] = w),
      (e[4] = t),
      (e[5] = T),
      (e[6] = E))
    : ((T = e[5]), (E = e[6])),
    (0, Yn.useEffect)(T, E));
  let D;
  e[7] === x
    ? (D = e[8])
    : ((D =
        x == null
          ? null
          : (0, Xn.jsx)(m, {
              ...Rt.bodyPersonalized,
              values: { threadCountLabel: x.threadCountLabel, duration: x.savedDuration },
            })),
      (e[7] = x),
      (e[8] = D));
  let O = D,
    k;
  return (
    e[9] !== O ||
    e[10] !== y ||
    e[11] !== n ||
    e[12] !== w ||
    e[13] !== C ||
    e[14] !== f ||
    e[15] !== s ||
    e[16] !== u
      ? ((k = {
          content: O,
          intl: n,
          isEligible: w,
          isLoading: C,
          isSubmitting: f,
          fastModeModel: y,
          setHasSeenFastModeHomeBanner: s,
          setIsSubmitting: p,
          setServiceTier: u,
        }),
        (e[9] = O),
        (e[10] = y),
        (e[11] = n),
        (e[12] = w),
        (e[13] = C),
        (e[14] = f),
        (e[15] = s),
        (e[16] = u),
        (e[17] = k))
      : (k = e[17]),
    k
  );
}
var Jn,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    ((Jn = R()),
      Ve(),
      Oe(),
      V(),
      (Yn = t(We(), 1)),
      g(),
      qe(),
      Je(),
      tt(),
      De(),
      rt(),
      T(),
      Te(),
      M(),
      It(),
      (Xn = U()),
      (Zn = Me(`has-seen-fast-mode-home-banner`, !1)));
  });
function $n() {
  let e = (0, tr.c)(5),
    { hostId: t } = it($e()),
    n = at(),
    [r] = _e(rr),
    { data: i, isLoading: a } = Re(C, t),
    o;
  e[0] === i ? (o = e[1]) : ((o = i?.some(er) ?? !1), (e[0] = i), (e[1] = o));
  let s = o,
    c = n && !r && a,
    l = n && !r && !s,
    u;
  return (
    e[2] !== c || e[3] !== l
      ? ((u = { isEligible: l, isLoading: c }), (e[2] = c), (e[3] = l), (e[4] = u))
      : (u = e[4]),
    u
  );
}
function er(e) {
  return e.name === nr && e.enabled;
}
var tr,
  nr,
  rr,
  ir = e(() => {
    ((tr = R()),
      Oe(),
      V(),
      st(),
      Qe(),
      ct(),
      je(),
      Te(),
      (nr = `multi_agent`),
      (rr = Me(`has-seen-multi-agent-composer-banner`, !1)));
  });
function ar(e) {
  let t = (0, or.c)(31),
    { onTryNow: n } = e,
    r = B(v),
    i = W(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { hostId: A }), (t[0] = a)) : (a = t[0]);
  let o = x(a),
    [, s] = He(`composer_prefill`),
    [c, l] = _e(rr),
    [u, d] = (0, sr.useState)(!1),
    f = (0, sr.useRef)(!1),
    p = !c,
    h,
    g;
  if (
    (t[1] !== p || t[2] !== r
      ? ((h = () => {
          !p || f.current || ((f.current = !0), H(r, ve, {}));
        }),
        (g = [r, p]),
        (t[1] = p),
        (t[2] = r),
        (t[3] = h),
        (t[4] = g))
      : ((h = t[3]), (g = t[4])),
    (0, sr.useEffect)(h, g),
    !p)
  )
    return null;
  let _, y, b, S;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(m, {
        id: `codex.multiAgentComposerBanner.title`,
        defaultMessage: `Subagents in Codex`,
        description: `Title shown in the multi-agent composer banner`,
      })),
      (y = (0, Y.jsx)(m, {
        id: `codex.multiAgentComposerBanner.body`,
        defaultMessage: `Delegate work to subagents that work in parallel. Note: may increase token usage.`,
        description: `Body shown in the multi-agent composer banner`,
      })),
      (b = (0, Y.jsx)(Kt, { className: `icon-sm` })),
      (S = (0, Y.jsx)(m, {
        id: `codex.multiAgentComposerBanner.cta.primary`,
        defaultMessage: `Try now`,
        description: `Primary CTA shown in the multi-agent composer banner`,
      })),
      (t[5] = _),
      (t[6] = y),
      (t[7] = b),
      (t[8] = S))
    : ((_ = t[5]), (y = t[6]), (b = t[7]), (S = t[8]));
  let C;
  t[9] !== i || t[10] !== n || t[11] !== r || t[12] !== s || t[13] !== o || t[14] !== l
    ? ((C = () => {
        d(!0);
        let e = i.formatMessage({
          id: `composer.multiAgentBanner.tryNow.prompt`,
          defaultMessage: `Spawn a subagent to explore this repo.`,
          description: `Prompt inserted when the user clicks Try now on the multi-agent composer banner`,
        });
        (H(r, ke, { action: `try_now` }),
          o.mutateAsync({ featureName: cr, enabled: !0 }).finally(() => {
            (n ? n() : s({ text: e }), l(!0), d(!1));
          }));
      }),
      (t[9] = i),
      (t[10] = n),
      (t[11] = r),
      (t[12] = s),
      (t[13] = o),
      (t[14] = l),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== u || t[17] !== C
    ? ((w = {
        label: S,
        onClick: C,
        disabled: u,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[16] = u),
      (t[17] = C),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === i
    ? (T = t[20])
    : ((T = i.formatMessage({
        id: `codex.multiAgentComposerBanner.dismissLabel`,
        defaultMessage: `Dismiss subagent banner`,
        description: `Accessible label for dismissing the multi-agent composer banner`,
      })),
      (t[19] = i),
      (t[20] = T));
  let E;
  t[21] !== r || t[22] !== l
    ? ((E = () => {
        (H(r, we, {}), l(!0));
      }),
      (t[21] = r),
      (t[22] = l),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== u || t[25] !== T || t[26] !== E
    ? ((D = {
        ariaLabel: T,
        color: `ghost`,
        icon: z,
        onClick: E,
        disabled: u,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[24] = u),
      (t[25] = T),
      (t[26] = E),
      (t[27] = D))
    : (D = t[27]);
  let O;
  return (
    t[28] !== D || t[29] !== w
      ? ((O = (0, Y.jsx)(G, {
          title: _,
          description: y,
          leadingVisual: b,
          primaryAction: w,
          dismissAction: D,
        })),
        (t[28] = D),
        (t[29] = w),
        (t[30] = O))
      : (O = t[30]),
    O
  );
}
var or,
  sr,
  Y,
  cr,
  lr = e(() => {
    ((or = R()),
      Ve(),
      Oe(),
      V(),
      (sr = t(We(), 1)),
      g(),
      q(),
      Gt(),
      a(),
      De(),
      je(),
      T(),
      be(),
      ee(),
      ir(),
      (Y = U()),
      (cr = `multi_agent`));
  });
function ur(e) {
  let t = (0, dr.c)(14),
    { onDismiss: n, onOpenGiftCredits: r } = e,
    i = W(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(`span`, {
        className: `text-sm`,
        children: (0, X.jsx)(m, {
          id: `codex.giftCredits.homeBanner.title`,
          defaultMessage: `Give the gift of Codex`,
          description: `Title shown in the Codex home banner promoting gift credits`,
        }),
      })),
      (o = (0, X.jsx)(m, {
        id: `codex.giftCredits.homeBanner.description`,
        defaultMessage: `Send Codex credits to a friend to help them turn their ideas into reality.`,
        description: `Description shown in the Codex home banner promoting gift credits`,
      })),
      (s = (0, X.jsx)(yt, { className: `icon-sm` })),
      (c = (0, X.jsx)(m, {
        id: `codex.giftCredits.homeBanner.action`,
        defaultMessage: `Gift credits`,
        description: `Button label that opens the ChatGPT gift credits purchase flow`,
      })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c))
    : ((a = t[0]), (o = t[1]), (s = t[2]), (c = t[3]));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = {
        label: c,
        onClick: r,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[4] = r),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u = i.formatMessage({
        id: `codex.giftCredits.homeBanner.dismiss`,
        defaultMessage: `Dismiss gift credits banner`,
        description: `Accessible label for dismissing the Codex gift credits home banner`,
      })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== n || t[9] !== u
    ? ((d = {
        ariaLabel: u,
        color: `ghost`,
        icon: z,
        onClick: n,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[8] = n),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, X.jsx)(G, {
          bodyClassName: `!text-sm !leading-5`,
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: l,
          dismissAction: d,
        })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var dr,
  X,
  fr = e(() => {
    ((dr = R()), g(), q(), ft(), a(), (X = U()));
  });
function pr() {
  let e = (0, mr.c)(9),
    t = F(dt),
    [n, r] = _e(Bt),
    [, i] = _e(Ht),
    a;
  e[0] !== i || e[1] !== r
    ? ((a = () => {
        (r(!0), i(!0));
      }),
      (e[0] = i),
      (e[1] = r),
      (e[2] = a))
    : (a = e[2]);
  let o = t && !n,
    s;
  e[3] === r
    ? (s = e[4])
    : ((s = () => {
        (r(!0), pt());
      }),
      (e[3] = r),
      (e[4] = s));
  let c;
  return (
    e[5] !== a || e[6] !== o || e[7] !== s
      ? ((c = { dismiss: a, isEligible: o, isLoading: !1, openGiftCredits: s }),
        (e[5] = a),
        (e[6] = o),
        (e[7] = s),
        (e[8] = c))
      : (c = e[8]),
    c
  );
}
var mr,
  hr = e(() => {
    ((mr = R()), Oe(), D(), vt(), Vt());
  });
function gr(e) {
  for (let [t, n] of e.entries()) {
    if (n.isEligible) return t;
    if (n.isLoading) return;
  }
  return null;
}
function _r({ entries: e }) {
  let t = (0, vr.useRef)(void 0),
    n = t.current;
  if (n === void 0) {
    let r = gr(e);
    r !== void 0 && ((t.current = r), (n = r));
  }
  if (n == null) return null;
  let r = e[n];
  return r == null || r.isLoading || !r.isEligible ? null : r.content;
}
var vr,
  yr = e(() => {
    vr = t(We(), 1);
  });
function br(e) {
  let t = (0, Cr.c)(6),
    { availableCount: n, onDismiss: r } = e,
    i = B(v),
    a;
  t[0] !== n || t[1] !== i
    ? ((a = () => {
        I(i, _t, { initialAvailableCount: n, isRateLimitReached: !1, onResetComplete: xr });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== r || t[4] !== a
      ? ((o = (0, Z.jsx)(Sr, { onDismiss: r, onSeeResets: a })), (t[3] = r), (t[4] = a), (t[5] = o))
      : (o = t[5]),
    o
  );
}
function xr() {}
function Sr(e) {
  let t = (0, Cr.c)(14),
    { onDismiss: n, onSeeResets: r } = e,
    i = W(),
    a,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(m, {
        id: `codex.rateLimitResetHomeBanner.title`,
        defaultMessage: `You have a new rate limit reset available`,
        description: `Title shown in the home banner when a Codex rate limit reset credit is available`,
      })),
      (o = (0, Z.jsx)(m, {
        id: `codex.rateLimitResetHomeBanner.description`,
        defaultMessage: `You were granted a rate limit reset that will expire in 30 days.`,
        description: `Description shown in the home banner when a Codex rate limit reset credit is available`,
      })),
      (s = (0, Z.jsx)(Ze, { className: `size-8` })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s))
    : ((a = t[0]), (o = t[1]), (s = t[2]));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(m, {
        id: `codex.rateLimitResetHomeBanner.seeResets`,
        defaultMessage: `See resets`,
        description: `Button label that opens the available Codex rate limit resets modal`,
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = {
        label: c,
        onClick: r,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[4] = r),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u = i.formatMessage({
        id: `codex.rateLimitResetHomeBanner.dismiss`,
        defaultMessage: `Dismiss rate limit reset banner`,
        description: `Accessible label for dismissing the Codex rate limit reset home banner`,
      })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== n || t[9] !== u
    ? ((d = {
        ariaLabel: u,
        color: `ghost`,
        icon: z,
        onClick: n,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[8] = n),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, Z.jsx)(G, {
          title: a,
          description: o,
          leadingVisual: s,
          leadingClassName: `ml-0 h-8 w-8`,
          primaryAction: l,
          dismissAction: d,
        })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var Cr,
  Z,
  wr = e(() => {
    ((Cr = R()), V(), g(), O(), q(), ut(), a(), gt(), T(), (Z = U()));
  });
function Tr() {
  let e = (0, Er.c)(9),
    t = B(v),
    { accountId: n, isLoading: r } = s(),
    i = l(Or),
    { data: a, isLoading: o } = l(ce),
    c = a?.rate_limit_reset_credits?.available_count ?? 0,
    u = n == null ? null : i?.[n],
    d = Date.now(),
    f;
  e[0] !== n || e[1] !== c || e[2] !== t
    ? ((f = () => {
        n != null &&
          t.set(Or, (e) => ({ ...e, [n]: { availableCount: c, dismissedAtMs: Date.now() } }));
      }),
      (e[0] = n),
      (e[1] = c),
      (e[2] = t),
      (e[3] = f))
    : (f = e[3]);
  let p = n != null && c > 0 && (u == null || u.availableCount < c || d - u.dismissedAtMs >= Dr),
    m = r || (a == null && o),
    h;
  return (
    e[4] !== c || e[5] !== f || e[6] !== p || e[7] !== m
      ? ((h = { availableCount: c, dismiss: f, isEligible: p, isLoading: m }),
        (e[4] = c),
        (e[5] = f),
        (e[6] = p),
        (e[7] = m),
        (e[8] = h))
      : (h = e[8]),
    h
  );
}
var Er,
  Dr,
  Or,
  kr = e(() => {
    ((Er = R()),
      V(),
      f(),
      b(),
      T(),
      me(),
      (Dr = 1440 * 60 * 1e3),
      (Or = le(`rate-limit-reset-home-announcement-dismissal-by-account-id`, {})));
  });
function Ar(e) {
  let t = (0, jr.c)(17),
    { navigate: n } = e,
    r = B(v),
    i = W(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(m, {
        id: `remoteConnections.homeBanner.title`,
        defaultMessage: `Let Codex work while you’re away`,
        description: `Title shown in the remote connections banner above the home composer`,
      })),
      (o = (0, Q.jsx)(m, {
        id: `remoteConnections.homeBanner.body`,
        defaultMessage: `Run your chats on a remote machine and pick back up when you return`,
        description: `Body shown in the remote connections banner above the home composer`,
      })),
      (s = (0, Q.jsx)(de, { className: `icon-sm` })),
      (c = (0, Q.jsx)(m, {
        id: `remoteConnections.homeBanner.primary`,
        defaultMessage: `Add Connections`,
        description: `Primary CTA shown in the remote connections banner above the home composer`,
      })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c))
    : ((a = t[0]), (o = t[1]), (s = t[2]), (c = t[3]));
  let l;
  t[4] !== n || t[5] !== r
    ? ((l = {
        label: c,
        onClick: () => {
          (r.set(bt, !0), n(`/settings/connections`));
        },
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = i.formatMessage({
        id: `remoteConnections.homeBanner.dismiss`,
        defaultMessage: `Dismiss remote connections banner`,
        description: `Accessible label for dismissing the remote connections banner above the home composer`,
      })),
      (t[7] = i),
      (t[8] = u));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = () => {
        r.set(bt, !0);
      }),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] !== u || t[12] !== d
    ? ((f = {
        ariaLabel: u,
        color: `ghost`,
        icon: z,
        onClick: d,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== l || t[15] !== f
      ? ((p = (0, Q.jsx)(G, {
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: l,
          dismissAction: f,
        })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
var jr,
  Q,
  Mr = e(() => {
    ((jr = R()), V(), g(), q(), Pe(), a(), T(), xt(), (Q = U()));
  });
function Nr() {
  let e = (0, Fr.c)(7),
    t = Ie(),
    n = l(bt) ?? !1,
    r = xe(),
    i = Nt(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { waitForRemoteSshConnections: !0 }), (e[0] = a))
    : (a = e[0]);
  let o = w(a),
    s;
  e[1] === o ? (s = e[2]) : ((s = o?.some(Pr) ?? !1), (e[1] = o), (e[2] = s));
  let c = s,
    u = !n && o === void 0,
    d = !u && r && !i && !n && c,
    f;
  return (
    e[3] !== u || e[4] !== t || e[5] !== d
      ? ((f = { isEligible: d, isLoading: u, navigate: t }),
        (e[3] = u),
        (e[4] = t),
        (e[5] = d),
        (e[6] = f))
      : (f = e[6]),
    f
  );
}
function Pr(e) {
  return e.source === `discovered`;
}
var Fr,
  Ir = e(() => {
    ((Fr = R()), V(), ue(), Pt(), N(), _(), xt());
  });
function Lr() {
  let e = (0, Br.c)(19),
    t = ge(),
    n = Ie(),
    r = he(Ct),
    i;
  e[0] !== r || e[1] !== t.pathname
    ? ((i = Tt({ hideFirstNewThreadOnboardingPromos: r, pathname: t.pathname })),
      (e[0] = r),
      (e[1] = t.pathname),
      (e[2] = i))
    : (i = e[2]);
  let a = i,
    o;
  e[3] === t.search
    ? (o = e[4])
    : ((o = new URLSearchParams(t.search)), (e[3] = t.search), (e[4] = o));
  let s = o,
    c;
  e[5] !== t.hash || e[6] !== t.pathname || e[7] !== t.state || e[8] !== n || e[9] !== s
    ? ((c = () => {
        if (!s.has(`welcomeV2Onboarding`)) return;
        s.delete(wt);
        let e = s.toString();
        n(
          { pathname: t.pathname, search: e === `` ? `` : `?${e}`, hash: t.hash },
          { replace: !0, state: t.state },
        );
      }),
      (e[5] = t.hash),
      (e[6] = t.pathname),
      (e[7] = t.state),
      (e[8] = n),
      (e[9] = s),
      (e[10] = c))
    : (c = e[10]);
  let l = c,
    u;
  e[11] !== l || e[12] !== a
    ? ((u = (0, $.jsx)(L, {
        electron: !0,
        children: (0, $.jsx)(Rr, {
          clearWelcomeV2OnboardingParam: l,
          shouldHideOnboardingPromos: a,
        }),
      })),
      (e[11] = l),
      (e[12] = a),
      (e[13] = u))
    : (u = e[13]);
  let d;
  e[14] === a
    ? (d = e[15])
    : ((d = (0, $.jsx)(L, {
        extension: !0,
        children: (0, $.jsx)(zr, { shouldHideOnboardingPromos: a }),
      })),
      (e[14] = a),
      (e[15] = d));
  let f;
  return (
    e[16] !== u || e[17] !== d
      ? ((f = (0, $.jsxs)($.Fragment, { children: [u, d] })), (e[16] = u), (e[17] = d), (e[18] = f))
      : (f = e[18]),
    f
  );
}
function Rr(e) {
  let t = (0, Br.c)(53),
    { clearWelcomeV2OnboardingParam: n, shouldHideOnboardingPromos: r } = e,
    i = Qt(),
    a = Tr(),
    o = pr(),
    s = hn(),
    c = Nr(),
    l = $n(),
    u = qn(),
    d = !s.shouldSuppressVanillaPromos,
    f = !r && i.isEligible,
    p = !r && i.isLoading,
    m;
  t[0] !== i || t[1] !== n
    ? ((m = (0, $.jsx)(Yt, {
        onDismiss: () => {
          (i.onDismiss(), n());
        },
        onDisable: () => {
          (i.onDisable(), n());
        },
      })),
      (t[0] = i),
      (t[1] = n),
      (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] !== f || t[4] !== p || t[5] !== m
    ? ((h = { isEligible: f, isLoading: p, content: m }),
      (t[3] = f),
      (t[4] = p),
      (t[5] = m),
      (t[6] = h))
    : (h = t[6]);
  let g = !r && o.isEligible,
    _ = !r && o.isLoading,
    v;
  t[7] !== o.dismiss || t[8] !== o.isEligible || t[9] !== o.openGiftCredits
    ? ((v = o.isEligible
        ? (0, $.jsx)(ur, { onDismiss: o.dismiss, onOpenGiftCredits: o.openGiftCredits })
        : null),
      (t[7] = o.dismiss),
      (t[8] = o.isEligible),
      (t[9] = o.openGiftCredits),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] !== g || t[12] !== _ || t[13] !== v
    ? ((y = { isEligible: g, isLoading: _, content: v }),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== a.availableCount || t[16] !== a.dismiss
    ? ((b = (0, $.jsx)(br, { availableCount: a.availableCount, onDismiss: a.dismiss })),
      (t[15] = a.availableCount),
      (t[16] = a.dismiss),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== a.isEligible || t[19] !== a.isLoading || t[20] !== b
    ? ((x = { isEligible: a.isEligible, isLoading: a.isLoading, content: b }),
      (t[18] = a.isEligible),
      (t[19] = a.isLoading),
      (t[20] = b),
      (t[21] = x))
    : (x = t[21]);
  let S = !r && s.isEligible,
    C = !r && s.isLoading,
    w;
  t[22] !== s.accountId || t[23] !== s.beacon
    ? ((w =
        s.beacon != null && s.accountId != null
          ? (0, $.jsx)(Tn, { accountId: s.accountId, beacon: s.beacon })
          : null),
      (t[22] = s.accountId),
      (t[23] = s.beacon),
      (t[24] = w))
    : (w = t[24]);
  let T;
  t[25] !== S || t[26] !== C || t[27] !== w
    ? ((T = { isEligible: S, isLoading: C, content: w }),
      (t[25] = S),
      (t[26] = C),
      (t[27] = w),
      (t[28] = T))
    : (T = t[28]);
  let E = !r && d && c.isEligible,
    D = !r && d && c.isLoading,
    O;
  t[29] === c.navigate
    ? (O = t[30])
    : ((O = (0, $.jsx)(Ar, { navigate: c.navigate })), (t[29] = c.navigate), (t[30] = O));
  let k;
  t[31] !== E || t[32] !== D || t[33] !== O
    ? ((k = { isEligible: E, isLoading: D, content: O }),
      (t[31] = E),
      (t[32] = D),
      (t[33] = O),
      (t[34] = k))
    : (k = t[34]);
  let A = !r && d && l.isEligible,
    j = !r && d && l.isLoading,
    M;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(ar, {})), (t[35] = M))
    : (M = t[35]);
  let N;
  t[36] !== A || t[37] !== j
    ? ((N = { isEligible: A, isLoading: j, content: M }), (t[36] = A), (t[37] = j), (t[38] = N))
    : (N = t[38]);
  let P = !r && d && u.isEligible,
    F = !r && d && u.isLoading,
    I;
  t[39] === u
    ? (I = t[40])
    : ((I = u.content == null ? null : (0, $.jsx)(Un, { ...u })), (t[39] = u), (t[40] = I));
  let L;
  t[41] !== P || t[42] !== F || t[43] !== I
    ? ((L = { isEligible: P, isLoading: F, content: I }),
      (t[41] = P),
      (t[42] = F),
      (t[43] = I),
      (t[44] = L))
    : (L = t[44]);
  let ee;
  return (
    t[45] !== x ||
    t[46] !== T ||
    t[47] !== k ||
    t[48] !== N ||
    t[49] !== L ||
    t[50] !== h ||
    t[51] !== y
      ? ((ee = (0, $.jsx)(_r, { entries: [h, y, x, T, k, N, L] })),
        (t[45] = x),
        (t[46] = T),
        (t[47] = k),
        (t[48] = N),
        (t[49] = L),
        (t[50] = h),
        (t[51] = y),
        (t[52] = ee))
      : (ee = t[52]),
    ee
  );
}
function zr(e) {
  let t = (0, Br.c)(21),
    { shouldHideOnboardingPromos: n } = e,
    r = Rn(),
    i = $n(),
    a = qn(),
    o = !n && r.isEligible,
    s = !n && r.isLoading,
    c;
  t[0] !== r.message || t[1] !== r.setHasSeenAppUpsellBanner
    ? ((c =
        r.message == null
          ? null
          : (0, $.jsx)(Nn, {
              message: r.message,
              setHasSeenAppUpsellBanner: r.setHasSeenAppUpsellBanner,
            })),
      (t[0] = r.message),
      (t[1] = r.setHasSeenAppUpsellBanner),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== o || t[4] !== s || t[5] !== c
    ? ((l = { isEligible: o, isLoading: s, content: c }),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u = !n && i.isEligible,
    d = !n && i.isLoading,
    f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(ar, {})), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = { isEligible: u, isLoading: d, content: f }), (t[8] = u), (t[9] = d), (t[10] = p))
    : (p = t[10]);
  let m = !n && a.isEligible,
    h = !n && a.isLoading,
    g;
  t[11] === a
    ? (g = t[12])
    : ((g = a.content == null ? null : (0, $.jsx)(Un, { ...a })), (t[11] = a), (t[12] = g));
  let _;
  t[13] !== h || t[14] !== g || t[15] !== m
    ? ((_ = { isEligible: m, isLoading: h, content: g }),
      (t[13] = h),
      (t[14] = g),
      (t[15] = m),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== _ || t[18] !== l || t[19] !== p
      ? ((v = (0, $.jsx)(_r, { entries: [l, p, _] })),
        (t[17] = _),
        (t[18] = l),
        (t[19] = p),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var Br,
  $,
  Vr = e(() => {
    ((Br = R()),
      Oe(),
      ue(),
      Zt(),
      tn(),
      Mn(),
      wn(),
      In(),
      Hn(),
      Kn(),
      Qn(),
      n(),
      lr(),
      ir(),
      fr(),
      hr(),
      yr(),
      St(),
      wr(),
      kr(),
      Mr(),
      Ir(),
      ($ = U()));
  });
export { Vr as n, Lr as t };
//# sourceMappingURL=home-announcements-2.js.map
