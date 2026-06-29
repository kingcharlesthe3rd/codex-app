import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  AB as i,
  BP as a,
  BV as o,
  Bd as s,
  Bj as c,
  CS as l,
  DN as u,
  Ev as d,
  Ew as f,
  FB as p,
  Fm as m,
  Fs as h,
  Fu as g,
  GN as _,
  Ga as v,
  Gj as y,
  HC as b,
  Hm as x,
  Hs as S,
  IA as C,
  IB as w,
  Io as T,
  Is as E,
  Iu as D,
  JE as O,
  JV as k,
  KE as A,
  La as j,
  Ld as M,
  MA as N,
  MM as P,
  Mi as F,
  Ml as I,
  Mm as L,
  NA as R,
  ON as ee,
  Ov as te,
  PA as ne,
  PB as re,
  Pi as ie,
  Pm as ae,
  Ps as oe,
  QP as z,
  SV as B,
  TS as V,
  TV as se,
  Tw as ce,
  UC as le,
  UE as ue,
  Us as de,
  VC as fe,
  VE as pe,
  VN as me,
  VP as he,
  WN as ge,
  Wa as _e,
  Wl as ve,
  Xl as ye,
  YE as be,
  YF as xe,
  Yj as Se,
  Zj as Ce,
  _V as we,
  bF as Te,
  bP as Ee,
  eP as De,
  iF as H,
  ih as Oe,
  jM as ke,
  jl as Ae,
  kE as je,
  lF as U,
  mv as Me,
  na as Ne,
  qE as Pe,
  qV as W,
  qj as Fe,
  qz as Ie,
  ra as Le,
  rh as Re,
  sF as G,
  wV as K,
  ww as ze,
  yP as Be,
  yV as Ve,
  za as He,
  zj as Ue,
  zo as We,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Dd as Ge,
  Od as Ke,
  nc as qe,
  tc as Je,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  Ft as Ye,
  Mt as Xe,
  Nt as Ze,
  Pt as Qe,
  jt as $e,
} from "./app-initial~app-main~automations-page.js";
import {
  Ai as et,
  co as tt,
  da as nt,
  ji as rt,
  lo as it,
  ua as at,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  $n as ot,
  Af as st,
  Or as ct,
  Qn as lt,
  jf as ut,
  kr as dt,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  $t as ft,
  Ar as pt,
  E as mt,
  Jr as ht,
  Kr as gt,
  Or as _t,
  Qt as vt,
  T as yt,
  Xt as bt,
  Zt as xt,
  jr as St,
  kr as Ct,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  C as wt,
  g as Tt,
  h as Et,
  m as Dt,
  v as Ot,
  w as kt,
} from "./app-initial~app-main~home-ambient-suggestions-content.js";
import {
  i as At,
  r as jt,
  t as Mt,
} from "./ambient-suggestions-connected-apps-consent.js";
import {
  a as Nt,
  i as Pt,
  n as Ft,
  r as It,
  t as Lt,
} from "./app-initial~app-main~new-thread-panel-page~home-announcements~upgrade-plan-dialog.js";
import {
  n as Rt,
  t as zt,
} from "./app-initial~app-main~new-thread-panel-page~projects-index-page~debug-window-page~home-annou~i1bnl0q1.js";
import {
  n as Bt,
  r as Vt,
  t as Ht,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~hotkey-window-thread-pa~ewq0bkmq.js";
import { n as Ut, t as Wt } from "./team.js";
function Gt(e) {
  let t = (0, Kt.c)(13),
    { action: n } = e,
    r = n.icon,
    i = n.color ?? `primary`,
    a = n.size ?? `composerSm`,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r ? (0, J.jsx)(r, { className: `icon-xs` }) : null), (t[0] = r), (t[1] = o));
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
      ? ((s = (0, J.jsxs)(u, {
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
function q(e) {
  let t = (0, Kt.c)(51),
    {
      actionsClassName: n,
      actionsPlacement: r,
      badge: i,
      bodyClassName: o,
      className: s,
      description: c,
      dismissAction: l,
      leadingClassName: u,
      leadingVisual: d,
      primaryAction: f,
      secondaryAction: p,
      title: m,
    } = e,
    h = r === void 0 ? `aside` : r,
    g = f != null || p != null || l != null,
    _;
  t[0] !== n || t[1] !== h || t[2] !== l || t[3] !== f || t[4] !== p
    ? ((_ = (e) =>
        (0, J.jsxs)(`div`, {
          className: a(
            `flex items-center gap-2`,
            h === `body` || h === `bodyOnNarrow`
              ? `mt-3 justify-start`
              : `self-center max-[400px]:w-full max-[400px]:justify-center max-[400px]:self-stretch`,
            n,
            e,
          ),
          children: [
            p ? (0, J.jsx)(Gt, { action: p }) : null,
            f ? (0, J.jsx)(Gt, { action: f }) : null,
            l ? (0, J.jsx)(Gt, { action: l }) : null,
          ],
        })),
      (t[0] = n),
      (t[1] = h),
      (t[2] = l),
      (t[3] = f),
      (t[4] = p),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    y;
  t[6] !== h || t[7] !== g || t[8] !== v
    ? ((y = g && h === `body` ? v() : null), (t[6] = h), (t[7] = g), (t[8] = v), (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] !== h || t[11] !== g || t[12] !== v
    ? ((x = g && h === `bodyOnNarrow` ? v(`hidden max-[400px]:flex`) : null),
      (t[10] = h),
      (t[11] = g),
      (t[12] = v),
      (t[13] = x))
    : (x = t[13]);
  let S = x,
    C;
  t[14] !== h || t[15] !== g || t[16] !== v
    ? ((C = g && h === `aside` ? v() : null), (t[14] = h), (t[15] = g), (t[16] = v), (t[17] = C))
    : (C = t[17]);
  let w = C,
    T;
  t[18] !== h || t[19] !== g || t[20] !== v
    ? ((T = g && h === `bodyOnNarrow` ? v(`max-[400px]:hidden`) : null),
      (t[18] = h),
      (t[19] = g),
      (t[20] = v),
      (t[21] = T))
    : (T = t[21]);
  let E = T,
    D;
  t[22] === s
    ? (D = t[23])
    : ((D = a(
        `!rounded-3xl border-token-input-border bg-token-input-background/70 py-3 pr-3 text-sm dark:!border-token-input-border`,
        s,
      )),
      (t[22] = s),
      (t[23] = D));
  let O;
  t[24] !== u || t[25] !== d
    ? ((O = d
        ? (0, J.jsx)(`div`, {
            className: a(
              `text-token-text-secondary ml-1 flex h-6 w-6 shrink-0 items-center justify-center self-center`,
              u,
            ),
            children: d,
          })
        : null),
      (t[24] = u),
      (t[25] = d),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] === m
    ? (k = t[28])
    : ((k = (0, J.jsx)(`div`, {
        className: `min-w-0 text-base font-medium text-token-text-primary`,
        children: m,
      })),
      (t[27] = m),
      (t[28] = k));
  let A;
  t[29] === i
    ? (A = t[30])
    : ((A = i
        ? (0, J.jsx)(Ue, {
            className: `border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary`,
            children: i,
          })
        : null),
      (t[29] = i),
      (t[30] = A));
  let j;
  t[31] !== A || t[32] !== k
    ? ((j = (0, J.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [k, A],
      })),
      (t[31] = A),
      (t[32] = k),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] === o
    ? (M = t[35])
    : ((M = a(`text-token-text-secondary mt-0.5 text-base leading-relaxed text-pretty`, o)),
      (t[34] = o),
      (t[35] = M));
  let N;
  t[36] !== c || t[37] !== M
    ? ((N = (0, J.jsx)(`div`, { className: M, children: c })),
      (t[36] = c),
      (t[37] = M),
      (t[38] = N))
    : (N = t[38]);
  let P;
  t[39] !== b || t[40] !== S || t[41] !== j || t[42] !== N
    ? ((P = (0, J.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [j, N, b, S] })),
      (t[39] = b),
      (t[40] = S),
      (t[41] = j),
      (t[42] = N),
      (t[43] = P))
    : (P = t[43]);
  let F;
  t[44] !== P || t[45] !== O
    ? ((F = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 max-[400px]:items-start`,
        children: [O, P],
      })),
      (t[44] = P),
      (t[45] = O),
      (t[46] = F))
    : (F = t[46]);
  let I = w ?? E ?? void 0,
    L;
  return (
    t[47] !== F || t[48] !== I || t[49] !== D
      ? ((L = (0, J.jsx)(lt, {
          layout: `horizontal`,
          stackOnNarrow: !0,
          className: D,
          content: F,
          customCtas: I,
        })),
        (t[47] = F),
        (t[48] = I),
        (t[49] = D),
        (t[50] = L))
      : (L = t[50]),
    L
  );
}
var Kt,
  J,
  Y = e(() => {
    ((Kt = W()), he(), c(), ot(), ee(), (J = o()));
  });
function qt(e) {
  let t = (0, Jt.c)(12),
    { onDismiss: n, onDisable: r } = e,
    i,
    a,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(G, {
        id: `home.ambientSuggestions.connectedAppsConsent.title`,
        defaultMessage: `Personalize Codex`,
        description: `Title for the ambient suggestions connected apps home banner`,
      })),
      (a = (0, X.jsx)(G, {
        id: `home.ambientSuggestions.connectedAppsConsent.body`,
        defaultMessage: `Codex suggests what to do next by searching project files and connected apps`,
        description: `Body for the ambient suggestions connected apps home banner`,
      })),
      (o = (0, X.jsx)(yt, { className: `icon-sm` })),
      (s = (0, X.jsx)(G, {
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
    ? ((l = (0, X.jsx)(G, {
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
      ? ((d = (0, X.jsx)(q, {
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
var Jt,
  X,
  Yt = e(() => {
    ((Jt = W()), H(), Y(), mt(), (X = o()));
  });
function Xt() {
  let e = (0, Qt.c)(13),
    t = p(z),
    { authMethod: n, email: r, isLoading: i, planAtLogin: a } = D(),
    o = n === `chatgpt`,
    s;
  e[0] === o ? (s = e[1]) : ((s = { queryConfig: { enabled: o } }), (e[0] = o), (e[1] = s));
  let { data: c, isLoading: l } = De(`account-info`, s),
    u = w(jt),
    d = u != null,
    f = Fe(`2425897452`),
    m = Ce(),
    h = _(xe.enabled),
    g = Ie({ authMethod: n, email: c?.email ?? r, plan: c?.plan ?? a }),
    v = f && g && h === !0 && u === !1,
    { data: y, isLoading: b } = We({ enabled: v, hostId: ue }),
    x;
  e[2] === y ? (x = e[3]) : ((x = y === void 0 ? [] : y), (e[2] = y), (e[3] = x));
  let S = x,
    C;
  e[4] === S ? (C = e[5]) : ((C = Mt(S)), (e[4] = S), (e[5] = C));
  let T = Zt({
      hasConnectedApps: C.length > 0,
      isLoadingApps: b,
      isLoadingEligibilityInputs: i || !d || m || l,
      shouldLoadApps: v,
    }),
    E,
    O;
  e[6] === t
    ? ((E = e[7]), (O = e[8]))
    : ((E = () => {
        t.set(jt, !0);
      }),
      (O = () => {
        (t.set(jt, !0), ge(t, xe.enabled, !1));
      }),
      (e[6] = t),
      (e[7] = E),
      (e[8] = O));
  let k;
  return (
    e[9] !== E || e[10] !== O || e[11] !== T
      ? ((k = { ...T, onDismiss: E, onDisable: O }),
        (e[9] = E),
        (e[10] = O),
        (e[11] = T),
        (e[12] = k))
      : (k = e[12]),
    k
  );
}
function Zt({
  hasConnectedApps: e,
  isLoadingApps: t,
  isLoadingEligibilityInputs: n,
  shouldLoadApps: r,
}) {
  let i = n || (r && t);
  return { isEligible: !i && r && e, isLoading: i };
}
var Qt,
  $t = e(() => {
    ((Qt = W()), i(), Te(), g(), T(), r(), me(), pe(), y(), n(), At());
  });
function en({ actionId: e, beaconId: t }) {
  return `${t}:${e}`;
}
function tn(e) {
  let t = e.beacon_ui_response;
  return t?.ui_info.type === `beacon_banner_info` ? { ...t, ui_info: t.ui_info } : null;
}
function nn({ accountId: e, response: t }) {
  return t.beacon_ui_response == null
    ? { accountId: e, beacon: null, shouldKeepLastServedBeacon: !0 }
    : { accountId: e, beacon: tn(t), shouldKeepLastServedBeacon: !1 };
}
function rn(e) {
  let t = an(e.action_v2);
  return t != null && on(t) ? t : null;
}
function an(e) {
  return `url` in e && e.url != null
    ? e.url
    : `web_url` in e && e.web_url != null
      ? e.web_url
      : null;
}
function on(e) {
  return (
    e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    (e.startsWith(`/`) && !e.startsWith(`//`))
  );
}
function sn({ accountId: e, authMethod: t, isAuthLoading: n }) {
  return !n && t === `chatgpt` && e != null;
}
function cn({ isAuthLoading: e }) {
  return e;
}
async function ln(e, t, n) {
  try {
    await ne.safePost(`/beacons/event`, {
      requestBody:
        n == null
          ? { beacon_id: e.beacon_id, event_type: t }
          : { beacon_id: e.beacon_id, event_type: t, event_cta_id: n },
    });
  } catch {}
}
function un(e, t) {
  return `${e}:${t}`;
}
function dn(e, t, n) {
  let r = un(t, n.beacon_id);
  e.get(vn).has(r) ||
    (e.set(vn, (e) => {
      let t = new Set(e);
      return (t.add(r), t);
    }),
    ln(n, `view`));
}
function fn(e, t, n) {
  let r = un(t, n.beacon_id);
  (e.set(yn, (e) => {
    let t = new Set(e);
    return (t.add(r), t);
  }),
    ln(n, `dismiss`));
}
function pn() {
  let e = (0, mn.c)(30),
    t = p(z),
    { accountId: n, authMethod: r, isLoading: i, userId: a } = D(),
    { data: o } = ye(),
    s = Se(),
    c = w(yn),
    l = w(xn),
    u = w(_n),
    d = w(bn),
    f,
    m;
  if (e[0] !== n || e[1] !== r || e[2] !== o?.id || e[3] !== i || e[4] !== s || e[5] !== a) {
    let t = s.getContext().user?.customIDs?.account_id;
    ((f = n ?? o?.id ?? t ?? a ?? null),
      (m = sn({ accountId: f, authMethod: r, isAuthLoading: i })),
      (e[0] = n),
      (e[1] = r),
      (e[2] = o?.id),
      (e[3] = i),
      (e[4] = s),
      (e[5] = a),
      (e[6] = f),
      (e[7] = m));
  } else ((f = e[6]), (m = e[7]));
  let h = m,
    g;
  e[8] === i ? (g = e[9]) : ((g = cn({ isAuthLoading: i })), (e[8] = i), (e[9] = g));
  let _ = g,
    v,
    y;
  (e[10] !== f || e[11] !== t || e[12] !== h
    ? ((v = () => {
        (t.set(gn, f), t.set(_n, h));
      }),
      (y = [f, t, h]),
      (e[10] = f),
      (e[11] = t),
      (e[12] = h),
      (e[13] = v),
      (e[14] = y))
    : ((v = e[13]), (y = e[14])),
    (0, hn.useLayoutEffect)(v, y));
  let b, x;
  (e[15] !== l.data || e[16] !== t
    ? ((b = () => {
        l.data?.accountId != null &&
          l.data.beacon != null &&
          t.set(bn, { accountId: l.data.accountId, beacon: l.data.beacon });
      }),
      (x = [l.data, t]),
      (e[15] = l.data),
      (e[16] = t),
      (e[17] = b),
      (e[18] = x))
    : ((b = e[17]), (x = e[18])),
    (0, hn.useLayoutEffect)(b, x));
  let S =
      l.data?.accountId === f
        ? (l.data.beacon ??
          (l.data.shouldKeepLastServedBeacon && d?.accountId === f ? d.beacon : null))
        : null,
    C;
  if (e[19] !== c || e[20] !== S || e[21] !== f || e[22] !== h) {
    let t = S != null && f != null ? un(f, S.beacon_id) : null;
    ((C = h && S != null && t != null && !c.has(t) ? S : null),
      (e[19] = c),
      (e[20] = S),
      (e[21] = f),
      (e[22] = h),
      (e[23] = C));
  } else C = e[23];
  let T = C,
    E = _ || T != null,
    O = T != null,
    k = _ || (h && (!u || l.isLoading)),
    A;
  return (
    e[24] !== T || e[25] !== f || e[26] !== E || e[27] !== O || e[28] !== k
      ? ((A = {
          accountId: f,
          beacon: T,
          isEligible: O,
          isLoading: k,
          shouldSuppressVanillaPromos: E,
        }),
        (e[24] = T),
        (e[25] = f),
        (e[26] = E),
        (e[27] = O),
        (e[28] = k),
        (e[29] = A))
      : (A = e[29]),
    A
  );
}
var mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn = e(() => {
    ((mn = W()),
      i(),
      (hn = t(k(), 1)),
      g(),
      ve(),
      Je(),
      r(),
      y(),
      C(),
      (gn = Ve(z, null)),
      (_n = Ve(z, !1)),
      (vn = Ve(z, () => new Set())),
      (yn = Ve(z, () => new Set())),
      (bn = Ve(z, null)),
      (xn = we(z, ({ get: e }) => {
        let t = e(gn);
        return {
          queryKey: [`codex-app-home-beacon`, t, e(qe).locale],
          enabled: e(_n),
          refetchOnMount: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
          retry: !1,
          staleTime: 6e4,
          queryFn: async () => ({
            accountId: t,
            response: await ne.safeGet(`/beacons/home`, {
              additionalHeaders: { "Cache-Control": `no-store` },
              parameters: { query: { product: `codex` } },
            }),
          }),
          select: nn,
        };
      })));
  });
function Cn(e) {
  let t = (0, Dn.c)(13),
    { accountId: n, beacon: r, localActionHandlers: i } = e,
    a = p(z),
    o,
    s;
  (t[0] !== n || t[1] !== r || t[2] !== a
    ? ((o = () => {
        dn(a, n, r);
      }),
      (s = [n, r, a]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4])),
    (0, On.useEffect)(o, s));
  let c;
  t[5] !== n || t[6] !== r || t[7] !== a
    ? ((c = () => {
        fn(a, n, r);
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== i || t[11] !== c
      ? ((l = (0, kn.jsx)(wn, { beacon: r, localActionHandlers: i, onDismiss: c })),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function wn(e) {
  let t = (0, Dn.c)(26),
    { beacon: n, localActionHandlers: r, onDismiss: i } = e,
    a = U(),
    o = te(),
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    let e = n.action_items.find(En),
      i = n.action_items.find(Tn),
      a = (e) => {
        if (e == null || e.text == null) return;
        let t = r?.[en({ actionId: e.id, beaconId: n.beacon_id })],
          i = rn(e);
        if (!(i == null && t == null))
          return {
            label: e.text,
            onClick: (r) => {
              if ((ln(n, `click`, e.id), t?.({ action: e, beacon: n }) !== !0 && i != null)) {
                if (!i.startsWith(`/`)) {
                  He({ event: r, href: i, initiator: `open_in_browser_bridge` });
                  return;
                }
                o(i);
              }
            },
            className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
          };
      };
    ((s = q),
      (c = n.ui_info.title),
      (l = n.ui_info.description),
      t[10] === n.ui_info.icon_image_url
        ? (u = t[11])
        : ((u = n.ui_info.icon_image_url
            ? (0, kn.jsx)(`img`, {
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
        { appName: tt },
      )),
      (t[12] = a),
      (t[13] = m));
  let h;
  t[14] !== i || t[15] !== m
    ? ((h = {
        ariaLabel: m,
        color: `ghost`,
        icon: N,
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
      ? ((g = (0, kn.jsx)(s, {
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
function Tn(e) {
  return e.type === `secondary`;
}
function En(e) {
  return e.type == null || e.type === `primary`;
}
var Dn,
  On,
  kn,
  An = e(() => {
    ((Dn = W()), i(), (On = t(k(), 1)), H(), Me(), it(), Sn(), j(), Y(), R(), r(), (kn = o()));
  });
function jn(e) {
  let t = (0, Mn.c)(16),
    { message: n, setHasSeenAppUpsellBanner: r } = e,
    i = U(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Nn.jsx)(G, {
        id: `codex.appUpsellBanner.title`,
        defaultMessage: `Codex app`,
        description: `Title shown in the app upsell banner`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Nn.jsx)(`img`, { alt: ``, src: vt, className: `h-8 w-8 shrink-0` })), (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Nn.jsx)(G, {
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
            He({
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
        icon: N,
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
      ? ((f = (0, Nn.jsx)(q, {
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
var Mn,
  Nn,
  Pn = e(() => {
    ((Mn = W()), H(), ft(), j(), Y(), R(), (Nn = o()));
  });
function Fn(e) {
  let t = (0, Ln.c)(6),
    { platform: n, isLoading: r } = de(),
    { authMethod: i, planAtLogin: a, isLoading: o } = D(),
    s = i === `chatgpt`,
    c = i === `apikey`,
    l = s || c,
    u;
  t[0] === l ? (u = t[1]) : ((u = { queryConfig: { enabled: l } }), (t[0] = l), (t[1] = u));
  let { data: d, isLoading: f } = De(`account-info`, u),
    p = i === `copilot`,
    m = n === `macOS`,
    h = d?.plan ?? a,
    g = h === Ae.FREE || h === Ae.GO,
    _ = !e && (o || r || (s && f)),
    v = null;
  if (!_ && m && !e && !p && i && d && ((s && !g) || c)) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Rn.jsx)(G, {
          id: `codex.appUpsellBanner.cbpApi.message`,
          defaultMessage: `Build faster with the Codex app. Download now or {learnMoreLink}`,
          description: `Message shown in the app upsell banner for paid ChatGPT and API key users`,
          values: {
            learnMoreLink: (0, Rn.jsx)(`a`, {
              className: `text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none`,
              href: `https://chatgpt.com/codex`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: (0, Rn.jsx)(G, {
                id: `codex.appUpsellBanner.learnMoreLowercase`,
                defaultMessage: `learn more`,
                description: `Lowercase learn more link text in the app upsell banner`,
              }),
            }),
          },
        })),
        (t[2] = e))
      : (e = t[2]),
      (v = e));
  }
  let y;
  return (
    t[3] !== _ || t[4] !== v
      ? ((y = { isLoading: _, message: v }), (t[3] = _), (t[4] = v), (t[5] = y))
      : (y = t[5]),
    y
  );
}
function In() {
  let e = (0, Ln.c)(5),
    [t, n] = K(zn),
    { isLoading: r, message: i } = Fn(t),
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
var Ln,
  Rn,
  zn,
  Bn = e(() => {
    ((Ln = W()),
      B(),
      H(),
      g(),
      S(),
      Be(),
      I(),
      n(),
      (Rn = o()),
      (zn = Ee(`has-seen-app-upsell-banner`, !1)));
  });
function Vn(e) {
  let t = (0, Hn.c)(25),
    {
      content: n,
      fastModeModel: r,
      intl: i,
      isSubmitting: a,
      setHasSeenFastModeHomeBanner: o,
      setIsSubmitting: s,
      setServiceTier: c,
    } = e,
    l = p(z),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Un.jsx)(G, {
        id: `codex.fastModeHomeBanner.title`,
        defaultMessage: `Enable Fast mode`,
        description: `Title shown in the Fast mode home banner`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d, f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Un.jsx)(Lt, { className: `icon-sm text-[#FFC93C]` })),
      (f = (0, Un.jsx)(G, {
        id: `codex.fastModeHomeBanner.cta.primary`,
        defaultMessage: `Enable now`,
        description: `Primary CTA shown in the Fast mode home banner`,
      })),
      (t[1] = d),
      (t[2] = f))
    : ((d = t[1]), (f = t[2]));
  let m;
  t[3] !== r || t[4] !== l || t[5] !== o || t[6] !== s || t[7] !== c
    ? ((m = () => {
        r != null &&
          (s(!0),
          V(l, fe, {}),
          c(ae(r)?.id ?? `priority`, `home_banner`).finally(() => {
            (o(!0), s(!1));
          }));
      }),
      (t[3] = r),
      (t[4] = l),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== a || t[10] !== m
    ? ((h = {
        label: f,
        onClick: m,
        disabled: a,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[9] = a),
      (t[10] = m),
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
        (V(l, b, {}), o(!0));
      }),
      (t[14] = l),
      (t[15] = o),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== a || t[18] !== g || t[19] !== _
    ? ((v = {
        ariaLabel: g,
        color: `ghost`,
        icon: N,
        onClick: _,
        disabled: a,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[17] = a),
      (t[18] = g),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== n || t[22] !== h || t[23] !== v
      ? ((y = (0, Un.jsx)(q, {
          title: u,
          description: n,
          leadingVisual: d,
          primaryAction: h,
          dismissAction: v,
        })),
        (t[21] = n),
        (t[22] = h),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
var Hn,
  Un,
  Wn = e(() => {
    ((Hn = W()), je(), i(), H(), Y(), Ft(), R(), l(), r(), x(), (Un = o()));
  });
function Gn() {
  let e = (0, Kn.c)(18),
    t = p(z),
    n = U(),
    { isServiceTierAllowed: r } = Et(),
    { data: i } = kt(),
    [a, o] = K(Yn),
    { modelSettings: s } = Ot(),
    { serviceTierSettings: c, setServiceTier: l } = ut(),
    [u, d] = (0, qn.useState)(!1),
    f = (0, qn.useRef)(!1),
    h = i?.models,
    g;
  e[0] !== s.model || e[1] !== h
    ? ((g = m(h, s.model, L)), (e[0] = s.model), (e[1] = h), (e[2] = g))
    : (g = e[2]);
  let _ = g,
    v = r && _ != null && !a && c.selectedServiceTier == null && !c.isLoading,
    { estimate: y, estimateStatus: b } = Nt(v),
    x = !a && v && b !== `ready` && b !== `failed`,
    S = v && b === `ready` && y != null,
    C,
    w;
  (e[3] !== S || e[4] !== t
    ? ((C = () => {
        !S || f.current || ((f.current = !0), V(t, le, {}));
      }),
      (w = [t, S]),
      (e[3] = S),
      (e[4] = t),
      (e[5] = C),
      (e[6] = w))
    : ((C = e[5]), (w = e[6])),
    (0, qn.useEffect)(C, w));
  let T;
  e[7] === y
    ? (T = e[8])
    : ((T =
        y == null
          ? null
          : (0, Jn.jsx)(G, {
              ...It.bodyPersonalized,
              values: { threadCountLabel: y.threadCountLabel, duration: y.savedDuration },
            })),
      (e[7] = y),
      (e[8] = T));
  let E = T,
    D;
  return (
    e[9] !== E ||
    e[10] !== _ ||
    e[11] !== n ||
    e[12] !== S ||
    e[13] !== x ||
    e[14] !== u ||
    e[15] !== o ||
    e[16] !== l
      ? ((D = {
          content: E,
          intl: n,
          isEligible: S,
          isLoading: x,
          isSubmitting: u,
          fastModeModel: _,
          setHasSeenFastModeHomeBanner: o,
          setIsSubmitting: d,
          setServiceTier: l,
        }),
        (e[9] = E),
        (e[10] = _),
        (e[11] = n),
        (e[12] = S),
        (e[13] = x),
        (e[14] = u),
        (e[15] = o),
        (e[16] = l),
        (e[17] = D))
      : (D = e[17]),
    D
  );
}
var Kn,
  qn,
  Jn,
  Yn,
  Xn = e(() => {
    ((Kn = W()),
      je(),
      B(),
      i(),
      (qn = t(k(), 1)),
      H(),
      Tt(),
      Dt(),
      st(),
      l(),
      wt(),
      r(),
      Be(),
      x(),
      Pt(),
      (Jn = o()),
      (Yn = Ee(`has-seen-fast-mode-home-banner`, !1)));
  });
function Zn() {
  let e = (0, $n.c)(5),
    { hostId: t } = Ke(dt()),
    n = rt(),
    [r] = K(tr),
    { data: i, isLoading: a } = re(oe, t),
    o;
  e[0] === i ? (o = e[1]) : ((o = i?.some(Qn) ?? !1), (e[0] = i), (e[1] = o));
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
function Qn(e) {
  return e.name === er && e.enabled;
}
var $n,
  er,
  tr,
  nr = e(() => {
    (($n = W()),
      B(),
      i(),
      ct(),
      et(),
      Ge(),
      h(),
      Be(),
      (er = `multi_agent`),
      (tr = Ee(`has-seen-multi-agent-composer-banner`, !1)));
  });
function rr(e) {
  let t = (0, ir.c)(31),
    { onTryNow: n } = e,
    r = p(z),
    i = U(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { hostId: ue }), (t[0] = a))
    : (a = t[0]);
  let o = E(a),
    [, s] = be(`composer_prefill`),
    [c, l] = K(tr),
    [u, d] = (0, ar.useState)(!1),
    m = (0, ar.useRef)(!1),
    h = !c,
    g,
    _;
  if (
    (t[1] !== h || t[2] !== r
      ? ((g = () => {
          !h || m.current || ((m.current = !0), V(r, f, {}));
        }),
        (_ = [r, h]),
        (t[1] = h),
        (t[2] = r),
        (t[3] = g),
        (t[4] = _))
      : ((g = t[3]), (_ = t[4])),
    (0, ar.useEffect)(g, _),
    !h)
  )
    return null;
  let v, y, b, x;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, or.jsx)(G, {
        id: `codex.multiAgentComposerBanner.title`,
        defaultMessage: `Subagents in Codex`,
        description: `Title shown in the multi-agent composer banner`,
      })),
      (y = (0, or.jsx)(G, {
        id: `codex.multiAgentComposerBanner.body`,
        defaultMessage: `Delegate work to subagents that work in parallel. Note: may increase token usage.`,
        description: `Body shown in the multi-agent composer banner`,
      })),
      (b = (0, or.jsx)(Wt, { className: `icon-sm` })),
      (x = (0, or.jsx)(G, {
        id: `codex.multiAgentComposerBanner.cta.primary`,
        defaultMessage: `Try now`,
        description: `Primary CTA shown in the multi-agent composer banner`,
      })),
      (t[5] = v),
      (t[6] = y),
      (t[7] = b),
      (t[8] = x))
    : ((v = t[5]), (y = t[6]), (b = t[7]), (x = t[8]));
  let S;
  t[9] !== i || t[10] !== n || t[11] !== r || t[12] !== s || t[13] !== o || t[14] !== l
    ? ((S = () => {
        d(!0);
        let e = i.formatMessage({
          id: `composer.multiAgentBanner.tryNow.prompt`,
          defaultMessage: `Spawn a subagent to explore this repo.`,
          description: `Prompt inserted when the user clicks Try now on the multi-agent composer banner`,
        });
        (V(r, ze, { action: `try_now` }),
          o.mutateAsync({ featureName: sr, enabled: !0 }).finally(() => {
            (n ? n() : s({ text: e }), l(!0), d(!1));
          }));
      }),
      (t[9] = i),
      (t[10] = n),
      (t[11] = r),
      (t[12] = s),
      (t[13] = o),
      (t[14] = l),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] !== u || t[17] !== S
    ? ((C = {
        label: x,
        onClick: S,
        disabled: u,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[16] = u),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] === i
    ? (w = t[20])
    : ((w = i.formatMessage({
        id: `codex.multiAgentComposerBanner.dismissLabel`,
        defaultMessage: `Dismiss subagent banner`,
        description: `Accessible label for dismissing the multi-agent composer banner`,
      })),
      (t[19] = i),
      (t[20] = w));
  let T;
  t[21] !== r || t[22] !== l
    ? ((T = () => {
        (V(r, ce, {}), l(!0));
      }),
      (t[21] = r),
      (t[22] = l),
      (t[23] = T))
    : (T = t[23]);
  let D;
  t[24] !== u || t[25] !== w || t[26] !== T
    ? ((D = {
        ariaLabel: w,
        color: `ghost`,
        icon: N,
        onClick: T,
        disabled: u,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[24] = u),
      (t[25] = w),
      (t[26] = T),
      (t[27] = D))
    : (D = t[27]);
  let O;
  return (
    t[28] !== D || t[29] !== C
      ? ((O = (0, or.jsx)(q, {
          title: v,
          description: y,
          leadingVisual: b,
          primaryAction: C,
          dismissAction: D,
        })),
        (t[28] = D),
        (t[29] = C),
        (t[30] = O))
      : (O = t[30]),
    O
  );
}
var ir,
  ar,
  or,
  sr,
  cr = e(() => {
    ((ir = W()),
      je(),
      B(),
      i(),
      (ar = t(k(), 1)),
      H(),
      Y(),
      Ut(),
      R(),
      l(),
      h(),
      r(),
      pe(),
      O(),
      nr(),
      (or = o()),
      (sr = `multi_agent`));
  });
function lr(e) {
  let t = (0, ur.c)(14),
    { onDismiss: n, onOpenGiftCredits: r } = e,
    i = U(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `text-sm`,
        children: (0, Z.jsx)(G, {
          id: `codex.giftCredits.homeBanner.title`,
          defaultMessage: `Give the gift of Codex`,
          description: `Title shown in the Codex home banner promoting gift credits`,
        }),
      })),
      (o = (0, Z.jsx)(G, {
        id: `codex.giftCredits.homeBanner.description`,
        defaultMessage: `Send Codex credits to a friend to help them turn their ideas into reality.`,
        description: `Description shown in the Codex home banner promoting gift credits`,
      })),
      (s = (0, Z.jsx)($e, { className: `icon-sm` })),
      (c = (0, Z.jsx)(G, {
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
        icon: N,
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
      ? ((f = (0, Z.jsx)(q, {
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
var ur,
  Z,
  dr = e(() => {
    ((ur = W()), H(), Y(), Xe(), R(), (Z = o()));
  });
function fr() {
  let e = (0, pr.c)(9),
    t = Fe(Ze),
    [n, r] = K(Bt),
    [, i] = K(Ht),
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
        (r(!0), Ye());
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
var pr,
  mr = e(() => {
    ((pr = W()), B(), y(), Qe(), Vt());
  });
function hr(e) {
  for (let [t, n] of e.entries()) {
    if (n.isEligible) return t;
    if (n.isLoading) return;
  }
  return null;
}
function gr({ entries: e }) {
  let t = (0, _r.useRef)(void 0),
    n = t.current;
  if (n === void 0) {
    let r = hr(e);
    r !== void 0 && ((t.current = r), (n = r));
  }
  if (n == null) return null;
  let r = e[n];
  return r == null || r.isLoading || !r.isEligible ? null : r.content;
}
var _r,
  vr = e(() => {
    _r = t(k(), 1);
  });
function yr(e) {
  let t = (0, Sr.c)(6),
    { availableCount: n, onDismiss: r } = e,
    i = p(z),
    a;
  t[0] !== n || t[1] !== i
    ? ((a = () => {
        ie(i, bt, { initialAvailableCount: n, isRateLimitReached: !1, onResetComplete: br });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== r || t[4] !== a
      ? ((o = (0, Q.jsx)(xr, { onDismiss: r, onSeeResets: a })), (t[3] = r), (t[4] = a), (t[5] = o))
      : (o = t[5]),
    o
  );
}
function br() {}
function xr(e) {
  let t = (0, Sr.c)(14),
    { onDismiss: n, onSeeResets: r } = e,
    i = U(),
    a,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(G, {
        id: `codex.rateLimitResetHomeBanner.title`,
        defaultMessage: `You have a new rate limit reset available`,
        description: `Title shown in the home banner when a Codex rate limit reset credit is available`,
      })),
      (o = (0, Q.jsx)(G, {
        id: `codex.rateLimitResetHomeBanner.description`,
        defaultMessage: `You were granted a rate limit reset that will expire in 30 days.`,
        description: `Description shown in the home banner when a Codex rate limit reset credit is available`,
      })),
      (s = (0, Q.jsx)(at, { className: `size-8` })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s))
    : ((a = t[0]), (o = t[1]), (s = t[2]));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(G, {
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
        icon: N,
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
      ? ((f = (0, Q.jsx)(q, {
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
var Sr,
  Q,
  Cr = e(() => {
    ((Sr = W()), i(), H(), F(), Y(), nt(), R(), xt(), r(), (Q = o()));
  });
function wr() {
  let e = (0, Tr.c)(9),
    t = p(z),
    { accountId: n, isLoading: r } = D(),
    i = w(Dr),
    { data: a, isLoading: o } = w(Oe),
    s = a?.rate_limit_reset_credits?.available_count ?? 0,
    c = n == null ? null : i?.[n],
    l = Date.now(),
    u;
  e[0] !== n || e[1] !== s || e[2] !== t
    ? ((u = () => {
        n != null &&
          t.set(Dr, (e) => ({ ...e, [n]: { availableCount: s, dismissedAtMs: Date.now() } }));
      }),
      (e[0] = n),
      (e[1] = s),
      (e[2] = t),
      (e[3] = u))
    : (u = e[3]);
  let d = n != null && s > 0 && (c == null || c.availableCount < s || l - c.dismissedAtMs >= Er),
    f = r || (a == null && o),
    m;
  return (
    e[4] !== s || e[5] !== u || e[6] !== d || e[7] !== f
      ? ((m = { availableCount: s, dismiss: u, isEligible: d, isLoading: f }),
        (e[4] = s),
        (e[5] = u),
        (e[6] = d),
        (e[7] = f),
        (e[8] = m))
      : (m = e[8]),
    m
  );
}
var Tr,
  Er,
  Dr,
  Or = e(() => {
    ((Tr = W()),
      i(),
      g(),
      Re(),
      r(),
      ke(),
      (Er = 1440 * 60 * 1e3),
      (Dr = P(`rate-limit-reset-home-announcement-dismissal-by-account-id`, {})));
  });
function kr(e) {
  let t = (0, Ar.c)(17),
    { navigate: n } = e,
    r = p(z),
    i = U(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, jr.jsx)(G, {
        id: `remoteConnections.homeBanner.title`,
        defaultMessage: `Let Codex work while you’re away`,
        description: `Title shown in the remote connections banner above the home composer`,
      })),
      (o = (0, jr.jsx)(G, {
        id: `remoteConnections.homeBanner.body`,
        defaultMessage: `Run your chats on a remote machine and pick back up when you return`,
        description: `Body shown in the remote connections banner above the home composer`,
      })),
      (s = (0, jr.jsx)(Ne, { className: `icon-sm` })),
      (c = (0, jr.jsx)(G, {
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
          (r.set(zt, !0), n(`/settings/connections`));
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
        r.set(zt, !0);
      }),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] !== u || t[12] !== d
    ? ((f = {
        ariaLabel: u,
        color: `ghost`,
        icon: N,
        onClick: d,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let m;
  return (
    t[14] !== l || t[15] !== f
      ? ((m = (0, jr.jsx)(q, {
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: l,
          dismissAction: f,
        })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
var Ar,
  jr,
  Mr = e(() => {
    ((Ar = W()), i(), H(), Y(), Le(), R(), r(), Rt(), (jr = o()));
  });
function Nr() {
  let e = (0, Fr.c)(7),
    t = te(),
    n = w(zt) ?? !1,
    r = s(),
    i = Ct(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { waitForRemoteSshConnections: !0 }), (e[0] = a))
    : (a = e[0]);
  let o = Pe(a),
    c;
  e[1] === o ? (c = e[2]) : ((c = o?.some(Pr) ?? !1), (e[1] = o), (e[2] = c));
  let l = c,
    u = !n && o === void 0,
    d = !u && r && !i && !n && l,
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
    ((Fr = W()), i(), Me(), _t(), M(), A(), Rt());
  });
function Lr() {
  let e = (0, Br.c)(19),
    t = d(),
    n = te(),
    r = se(St),
    i;
  e[0] !== r || e[1] !== t.pathname
    ? ((i = ht({ hideFirstNewThreadOnboardingPromos: r, pathname: t.pathname })),
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
        s.delete(pt);
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
    ? ((u = (0, $.jsx)(_e, {
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
  let f;
  e[14] === a
    ? (f = e[15])
    : ((f = (0, $.jsx)(_e, {
        extension: !0,
        children: (0, $.jsx)(zr, { shouldHideOnboardingPromos: a }),
      })),
      (e[14] = a),
      (e[15] = f));
  let p;
  return (
    e[16] !== u || e[17] !== f
      ? ((p = (0, $.jsxs)($.Fragment, { children: [u, f] })), (e[16] = u), (e[17] = f), (e[18] = p))
      : (p = e[18]),
    p
  );
}
function Rr(e) {
  let t = (0, Br.c)(53),
    { clearWelcomeV2OnboardingParam: n, shouldHideOnboardingPromos: r } = e,
    i = Xt(),
    a = wr(),
    o = fr(),
    s = pn(),
    c = Nr(),
    l = Zn(),
    u = Gn(),
    d = !s.shouldSuppressVanillaPromos,
    f = !r && i.isEligible,
    p = !r && i.isLoading,
    m;
  t[0] !== i || t[1] !== n
    ? ((m = (0, $.jsx)(qt, {
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
        ? (0, $.jsx)(lr, { onDismiss: o.dismiss, onOpenGiftCredits: o.openGiftCredits })
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
    ? ((b = (0, $.jsx)(yr, { availableCount: a.availableCount, onDismiss: a.dismiss })),
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
          ? (0, $.jsx)(Cn, { accountId: s.accountId, beacon: s.beacon })
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
    : ((O = (0, $.jsx)(kr, { navigate: c.navigate })), (t[29] = c.navigate), (t[30] = O));
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
    ? ((M = (0, $.jsx)(rr, {})), (t[35] = M))
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
    : ((I = u.content == null ? null : (0, $.jsx)(Vn, { ...u })), (t[39] = u), (t[40] = I));
  let L;
  t[41] !== P || t[42] !== F || t[43] !== I
    ? ((L = { isEligible: P, isLoading: F, content: I }),
      (t[41] = P),
      (t[42] = F),
      (t[43] = I),
      (t[44] = L))
    : (L = t[44]);
  let R;
  return (
    t[45] !== x ||
    t[46] !== T ||
    t[47] !== k ||
    t[48] !== N ||
    t[49] !== L ||
    t[50] !== h ||
    t[51] !== y
      ? ((R = (0, $.jsx)(gr, { entries: [h, y, x, T, k, N, L] })),
        (t[45] = x),
        (t[46] = T),
        (t[47] = k),
        (t[48] = N),
        (t[49] = L),
        (t[50] = h),
        (t[51] = y),
        (t[52] = R))
      : (R = t[52]),
    R
  );
}
function zr(e) {
  let t = (0, Br.c)(21),
    { shouldHideOnboardingPromos: n } = e,
    r = In(),
    i = Zn(),
    a = Gn(),
    o = !n && r.isEligible,
    s = !n && r.isLoading,
    c;
  t[0] !== r.message || t[1] !== r.setHasSeenAppUpsellBanner
    ? ((c =
        r.message == null
          ? null
          : (0, $.jsx)(jn, {
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
    ? ((f = (0, $.jsx)(rr, {})), (t[7] = f))
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
    : ((g = a.content == null ? null : (0, $.jsx)(Vn, { ...a })), (t[11] = a), (t[12] = g));
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
      ? ((v = (0, $.jsx)(gr, { entries: [l, p, _] })),
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
    ((Br = W()),
      B(),
      Me(),
      Yt(),
      $t(),
      An(),
      Sn(),
      Pn(),
      Bn(),
      Wn(),
      Xn(),
      v(),
      cr(),
      nr(),
      dr(),
      mr(),
      vr(),
      gt(),
      Cr(),
      Or(),
      Mr(),
      Ir(),
      ($ = o()));
  });
export { Vr as n, Lr as t };
//# sourceMappingURL=home-announcements-2.js.map
