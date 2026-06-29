import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  $t as i,
  AB as a,
  AN as o,
  AV as s,
  Ai as c,
  As as l,
  BP as u,
  BV as d,
  CM as f,
  DN as p,
  Di as m,
  Ds as h,
  Dv as g,
  Ei as _,
  FB as v,
  Ft as y,
  G as b,
  Gi as x,
  Gj as S,
  HE as C,
  Hs as w,
  IB as T,
  Io as E,
  JV as D,
  K as O,
  La as k,
  M as A,
  MV as j,
  N as M,
  ON as N,
  Os as P,
  Ot as F,
  Ov as ee,
  P as I,
  PB as te,
  QP as L,
  Qt as R,
  SM as z,
  TM as ne,
  Ti as re,
  Us as ie,
  VE as ae,
  VP as oe,
  XN as se,
  YN as ce,
  ZR as le,
  Zi as ue,
  bF as de,
  bs as fe,
  c as pe,
  cM as me,
  d as he,
  f as ge,
  fl as _e,
  fs as ve,
  iF as ye,
  j as be,
  jo as xe,
  kN as Se,
  ks as Ce,
  l as we,
  lF as Te,
  mv as Ee,
  o as De,
  p as Oe,
  pl as ke,
  qV as B,
  qi as Ae,
  qj as je,
  rF as Me,
  sF as V,
  u as Ne,
  uM as H,
  us as Pe,
  va as Fe,
  wM as Ie,
  wi as Le,
  xa as Re,
  ys as ze,
  yv as Be,
  zV as Ve,
  za as He,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import { J as Ue, K as We } from "./app-initial~app-main~automations-page.js";
import {
  Ci as Ge,
  Oo as Ke,
  Si as qe,
  bi as Je,
  ko as Ye,
  xi as Xe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Bu as Ze,
  Hu as Qe,
  Ju as $e,
  Ur as U,
  Wr as et,
  Yu as tt,
  hd as nt,
  md as rt,
  nd as it,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as at,
  H as ot,
  K as st,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as ct,
  h as lt,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as ut,
  t as W,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as dt, t as ft } from "./use-home-directory.js";
import { n as pt, t as mt } from "./apps-availability.js";
import {
  _ as ht,
  c as gt,
  g as _t,
  h as G,
  m as vt,
  p as yt,
  s as bt,
  u as xt,
  v as St,
  y as Ct,
} from "./browser-use-settings.js";
var wt,
  Tt = e(() => {
    wt = `` + new URL(`microsoft-excel-large-CY0bRHcJ.png`, import.meta.url).href;
  }),
  Et,
  Dt = e(() => {
    Et = `` + new URL(`microsoft-powerpoint-large-DlJg6gsJ.png`, import.meta.url).href;
  });
function Ot(e) {
  let t = (0, kt.c)(7),
    { computerImageDataUrl: n, lockImageDataUrl: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, K.jsx)(`img`, {
        alt: ``,
        className: `absolute top-0 left-1 h-[53px] w-[53px] object-contain`,
        draggable: !1,
        src: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, K.jsx)(`img`, {
        alt: ``,
        className: `absolute right-0 bottom-0 h-[33px] w-[27px] object-contain`,
        draggable: !1,
        src: r,
      })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, K.jsxs)(`span`, {
          className: `relative inline-block h-[57px] w-[62px] shrink-0`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var kt,
  K,
  At = e(() => {
    ((kt = B()), (K = d()));
  });
function jt(e) {
  let t = (0, Mt.c)(10),
    { status: n } = e;
  if (n.isLoading) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(V, { ...J.loading })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r = n.isConnected ? `bg-[var(--color-icon-success)]` : `bg-[var(--color-icon-error)]`,
    i;
  t[1] === r ? (i = t[2]) : ((i = u(`h-2 w-2 shrink-0 rounded-full`, r)), (t[1] = r), (t[2] = i));
  let a;
  t[3] === i ? (a = t[4]) : ((a = (0, q.jsx)(`span`, { className: i })), (t[3] = i), (t[4] = a));
  let o;
  t[5] === n.isConnected
    ? (o = t[6])
    : ((o = (0, q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: n.isConnected
          ? (0, q.jsx)(V, { ...J.connected })
          : (0, q.jsx)(V, { ...J.disconnected }),
      })),
      (t[5] = n.isConnected),
      (t[6] = o));
  let s;
  return (
    t[7] !== a || t[8] !== o
      ? ((s = (0, q.jsxs)(`span`, {
          className: `inline-flex max-w-full items-center gap-2`,
          children: [a, o],
        })),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
var Mt,
  q,
  J,
  Nt = e(() => {
    ((Mt = B()),
      oe(),
      ye(),
      (q = d()),
      (J = Me({
        connected: {
          id: `plugins.browserExtension.connected`,
          defaultMessage: `Connected to browser extension for additional control`,
          description: `Status text shown when the Chrome browser extension is installed`,
        },
        disconnected: {
          id: `plugins.browserExtension.disconnected`,
          defaultMessage: `Browser extension not connected`,
          description: `Status text shown when the Chrome browser extension is not installed`,
        },
        loading: {
          id: `plugins.browserExtension.loading`,
          defaultMessage: `Use the browser extension for additional control`,
          description: `Status text shown while the Chrome browser extension install state is loading`,
        },
      })));
  }),
  Y,
  Pt = e(() => {
    (ye(),
      (Y = Me({
        control: {
          id: `settings.computerUse.install.title`,
          defaultMessage: `Control`,
          description: `Title for computer use plugin install settings section`,
        },
        anyApp: {
          id: `settings.computerUse.anyApp.title`,
          defaultMessage: `Any App`,
          description: `Label for the Computer Use plugin row that lets Codex control 'Any App' on the user's computer`,
        },
        googleChrome: {
          id: `settings.computerUse.chrome.pluginTitle`,
          defaultMessage: `Google Chrome`,
          description: `Title for the Google Chrome plugin control row`,
        },
        microsoftExcel: {
          id: `settings.computerUse.microsoftExcel.pluginTitle`,
          defaultMessage: `Microsoft Excel`,
          description: `Title for the Microsoft Excel plugin control row`,
        },
        microsoftExcelDescription: {
          id: `settings.computerUse.microsoftExcel.description`,
          defaultMessage: `Let Codex use Microsoft Excel add-in for additional control`,
          description: `Description for the Microsoft Excel plugin control row`,
        },
        microsoftExcelToggleAria: {
          id: `settings.computerUse.microsoftExcel.appToggleAria`,
          defaultMessage: `Toggle Microsoft Excel live control`,
          description: `Accessible label for toggling Microsoft Excel live control from Computer Use settings`,
        },
        microsoftExcelDisableTooltip: {
          id: `settings.computerUse.microsoftExcel.disableToggleTooltip`,
          defaultMessage: `Disable Microsoft Excel live control`,
          description: `Tooltip label for disabling Microsoft Excel live control`,
        },
        microsoftExcelEnableTooltip: {
          id: `settings.computerUse.microsoftExcel.enableToggleTooltip`,
          defaultMessage: `Enable Microsoft Excel live control`,
          description: `Tooltip label for enabling Microsoft Excel live control`,
        },
        microsoftPowerPoint: {
          id: `settings.computerUse.microsoftPowerPoint.pluginTitle`,
          defaultMessage: `Microsoft PowerPoint`,
          description: `Title for the Microsoft PowerPoint plugin control row`,
        },
        microsoftPowerPointDescription: {
          id: `settings.computerUse.microsoftPowerPoint.description`,
          defaultMessage: `Let Codex use Microsoft PowerPoint add-in for additional control`,
          description: `Description for the Microsoft PowerPoint plugin control row`,
        },
        microsoftPowerPointToggleAria: {
          id: `settings.computerUse.microsoftPowerPoint.appToggleAria`,
          defaultMessage: `Toggle Microsoft PowerPoint live control`,
          description: `Accessible label for toggling Microsoft PowerPoint live control from Computer Use settings`,
        },
        microsoftPowerPointDisableTooltip: {
          id: `settings.computerUse.microsoftPowerPoint.disableToggleTooltip`,
          defaultMessage: `Disable Microsoft PowerPoint live control`,
          description: `Tooltip label for disabling Microsoft PowerPoint live control`,
        },
        microsoftPowerPointEnableTooltip: {
          id: `settings.computerUse.microsoftPowerPoint.enableToggleTooltip`,
          defaultMessage: `Enable Microsoft PowerPoint live control`,
          description: `Tooltip label for enabling Microsoft PowerPoint live control`,
        },
        alwaysAllowedApps: {
          id: `settings.computerUse.allowedApps.title`,
          defaultMessage: `Always-allowed apps`,
          description: `Title for computer use always allowed apps list`,
        },
        foregroundClickSounds: {
          id: `settings.computerUse.sounds.foregroundClicks`,
          defaultMessage: `Play sounds for foreground clicks`,
          description: `Computer use sound setting option for foreground click sounds`,
        },
        foregroundAndBackgroundClickSounds: {
          id: `settings.computerUse.sounds.foregroundAndBackgroundClicks`,
          defaultMessage: `Play sounds for foreground and background clicks`,
          description: `Computer use sound setting option for foreground and background click sounds`,
        },
        noClickSounds: {
          id: `settings.computerUse.sounds.off`,
          defaultMessage: `Don’t play sounds`,
          description: `Computer use sound setting option for no sounds`,
        },
      })));
  }),
  Ft,
  It = e(() => {
    Ft = `` + new URL(`chrome-production-large-BLPyHeGg.png`, import.meta.url).href;
  });
function Lt() {
  let e = (0, X.c)(21),
    { selectedHostId: t } = Qe(),
    n = te(b, t),
    r;
  e[0] === t ? (r = e[1]) : ((r = { hostId: t }), (e[0] = t), (e[1] = r));
  let i = l(r),
    { platform: a } = ie();
  if (g(un) != null) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(Ht, {})), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  let o, s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(at, { slug: an })),
      (s = (0, Z.jsx)(V, {
        id: `settings.computerUse.subtitle`,
        defaultMessage: `Manage how Codex uses other applications on your computer`,
        description: `Subtitle for computer use settings`,
      })),
      (e[3] = o),
      (e[4] = s))
    : ((o = e[3]), (s = e[4]));
  let c;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(W.Header, { title: (0, Z.jsx)(V, { ...Y.control }) })), (e[5] = c))
    : (c = e[5]);
  let u;
  e[6] !== i || e[7] !== a
    ? ((u = (0, Z.jsx)(Rt, { computerUseAvailability: i, platform: a })),
      (e[6] = i),
      (e[7] = a),
      (e[8] = u))
    : (u = e[8]);
  let d;
  e[9] !== n || e[10] !== i.available || e[11] !== a
    ? ((d = a === `macOS` && i.available && n ? (0, Z.jsx)(Jt, {}) : null),
      (e[9] = n),
      (e[10] = i.available),
      (e[11] = a),
      (e[12] = d))
    : (d = e[12]);
  let f;
  e[13] !== u || e[14] !== d
    ? ((f = (0, Z.jsxs)(W, { children: [c, (0, Z.jsxs)(W.Content, { children: [u, d] })] })),
      (e[13] = u),
      (e[14] = d),
      (e[15] = f))
    : (f = e[15]);
  let p;
  e[16] === i.available
    ? (p = e[17])
    : ((p = i.available
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(W, {
                children: [
                  (0, Z.jsx)(W.Header, { title: (0, Z.jsx)(V, { ...Y.alwaysAllowedApps }) }),
                  (0, Z.jsx)(W.Content, {
                    children: (0, Z.jsx)(lt, { children: (0, Z.jsx)(Zt, {}) }),
                  }),
                ],
              }),
              (0, Z.jsx)(Kt, {}),
            ],
          })
        : null),
      (e[16] = i.available),
      (e[17] = p));
  let m;
  return (
    e[18] !== f || e[19] !== p
      ? ((m = (0, Z.jsxs)(We, { title: o, subtitle: s, children: [f, p] })),
        (e[18] = f),
        (e[19] = p),
        (e[20] = m))
      : (m = e[20]),
    m
  );
}
function Rt(e) {
  let t = (0, X.c)(35),
    { computerUseAvailability: n, platform: r } = e,
    i = Te(),
    a = ee(),
    { selectedHostId: o } = Qe(),
    s = C(o).kind === `local`,
    { data: c } = te(xe, o),
    l;
  t[0] === o ? (l = t[1]) : ((l = { hostId: o }), (t[0] = o), (t[1] = l));
  let u = P(l),
    d;
  t[2] === o ? (d = t[3]) : ((d = { hostId: o }), (t[2] = o), (t[3] = d));
  let { isUpdating: f, setAppEnabled: m, updatingAppId: h } = pt(d),
    g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = []), (t[4] = g)) : (g = t[4]);
  let _ = ve(o, g),
    v = dt(o),
    y = je(Je),
    b;
  t[5] !== v || t[6] !== _.availablePlugins
    ? ((b = G(_.availablePlugins, on, v)), (t[5] = v), (t[6] = _.availablePlugins), (t[7] = b))
    : (b = t[7]);
  let x = b,
    S;
  t[8] !== v || t[9] !== _.availablePlugins
    ? ((S = en(_.availablePlugins, v)), (t[8] = v), (t[9] = _.availablePlugins), (t[10] = S))
    : (S = t[10]);
  let w = S,
    T = _.availablePlugins.find(qe) ?? null,
    E = _.availablePlugins.find(Ge) ?? null,
    D = [
      {
        appControlId: `microsoft-excel-document-control-app`,
        description: Y.microsoftExcelDescription,
        disableTooltip: Y.microsoftExcelDisableTooltip,
        enableTooltip: Y.microsoftExcelEnableTooltip,
        icon: wt,
        plugin: T,
        title: Y.microsoftExcel,
        toggleAriaLabel: Y.microsoftExcelToggleAria,
      },
      {
        appControlId: `microsoft-powerpoint-document-control-app`,
        description: Y.microsoftPowerPointDescription,
        disableTooltip: Y.microsoftPowerPointDisableTooltip,
        enableTooltip: Y.microsoftPowerPointEnableTooltip,
        icon: Et,
        plugin: E,
        title: Y.microsoftPowerPoint,
        toggleAriaLabel: Y.microsoftPowerPointToggleAria,
      },
    ],
    O = w?.plugin.installed === !0,
    k = O && w.plugin.enabled,
    A = c?.find(Bt)?.isEnabled ?? !0,
    j = f && h === Q,
    M;
  t[11] !== w || t[12] !== O || t[13] !== o
    ? ((M = { hostId: o, plugin: w, shouldReadBrowserExtension: O }),
      (t[11] = w),
      (t[12] = O),
      (t[13] = o),
      (t[14] = M))
    : (M = t[14]);
  let N = Vt(M),
    F = [],
    I;
  t[15] !== w || t[16] !== u || t[17] !== s
    ? ((I =
        w == null && s && !u.isLoading && !u.allowed
          ? [
              {
                description: (0, Z.jsx)(V, { ..._e.restrictedAvailabilityDescription }),
                icon: (0, Z.jsx)(`img`, {
                  alt: ``,
                  className: `h-full w-full object-contain`,
                  src: Ft,
                }),
                id: `chrome-unavailable`,
                title: (0, Z.jsx)(V, { ...Y.googleChrome }),
              },
            ]
          : []),
      (t[15] = w),
      (t[16] = u),
      (t[17] = s),
      (t[18] = I))
    : (I = t[18]);
  let L = I;
  if (n.available && x != null) {
    let e, n;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(V, { ...Y.anyApp })),
        (n = (0, Z.jsx)(V, {
          id: `settings.computerUse.anyApp.description`,
          defaultMessage: `Let Codex control apps on your computer`,
          description: `Description for the Computer Use plugin control row`,
        })),
        (t[19] = e),
        (t[20] = n))
      : ((e = t[19]), (n = t[20]));
    let r;
    (t[21] === x
      ? (r = t[22])
      : ((r = { plugin: x, title: e, description: n }), (t[21] = x), (t[22] = r)),
      F.push(r));
  }
  if (w != null) {
    let e;
    t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(V, { ...Y.googleChrome })), (t[23] = e))
      : (e = t[23]);
    let n;
    t[24] === N ? (n = t[25]) : ((n = (0, Z.jsx)(jt, { status: N })), (t[24] = N), (t[25] = n));
    let r;
    t[26] !== k || t[27] !== a
      ? ((r = k
          ? (0, Z.jsx)(p, {
              color: `secondary`,
              onClick: () => {
                a(un);
              },
              size: `toolbar`,
              children: (0, Z.jsx)(V, {
                id: `settings.computerUse.chrome.manage`,
                defaultMessage: `Manage`,
                description: `Button label to manage Google Chrome settings`,
              }),
            })
          : null),
        (t[26] = k),
        (t[27] = a),
        (t[28] = r))
      : (r = t[28]);
    let i;
    (t[29] !== w || t[30] !== r || t[31] !== n
      ? ((i = { plugin: w, title: e, description: n, action: r }),
        (t[29] = w),
        (t[30] = r),
        (t[31] = n),
        (t[32] = i))
      : (i = t[32]),
      F.push(i));
  }
  if (y && (r === `macOS` || r === `windows`))
    for (let e of D) {
      if (e.plugin == null) continue;
      let t = e.plugin;
      F.push({
        ...(t.plugin.installed && t.plugin.enabled
          ? {
              kind: `app`,
              enabled: A,
              id: e.appControlId,
              isPending: j,
              onToggleEnabled: (t) => {
                m({ appId: Q, appName: i.formatMessage(e.title), enabled: t }).catch(zt);
              },
              toggleAriaLabel: i.formatMessage(e.toggleAriaLabel),
              toggleTooltip: A
                ? (0, Z.jsx)(V, { ...e.disableTooltip })
                : (0, Z.jsx)(V, { ...e.enableTooltip }),
            }
          : { displayName: i.formatMessage(e.title), plugin: t }),
        icon: (0, Z.jsx)(`img`, {
          alt: ``,
          className: `h-full w-full object-contain`,
          src: e.icon,
        }),
        title: (0, Z.jsx)(V, { ...e.title }),
        description: (0, Z.jsx)(V, { ...e.description }),
      });
    }
  let R, z;
  return (
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((R = (0, Z.jsx)(V, {
          id: `settings.computerUse.install.empty`,
          defaultMessage: `Computer Use plugins unavailable`,
          description: `Empty state shown when computer use plugins cannot be found`,
        })),
        (z = (0, Z.jsx)(V, {
          id: `settings.computerUse.install.button`,
          defaultMessage: `Install`,
          description: `Button label for installing a computer use plugin`,
        })),
        (t[33] = R),
        (t[34] = z))
      : ((R = t[33]), (z = t[34])),
    (0, Z.jsx)(_t, {
      emptyStateTitle: R,
      installButtonLabel: z,
      items: F,
      pluginsQuery: _,
      selectedHostId: o,
      unavailableItems: L,
    })
  );
}
function zt() {}
function Bt(e) {
  return e.id === Q;
}
function Vt(e) {
  let t = (0, X.c)(10),
    { hostId: n, plugin: r, shouldReadBrowserExtension: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = { enabled: i, hostId: n, plugin: r }), (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a))
    : (a = t[3]);
  let o = A(a),
    s = o?.[0] ?? null,
    c = i && o === void 0,
    l = s?.id ?? null,
    u;
  t[4] === l ? (u = t[5]) : ((u = { browserExtensionId: l }), (t[4] = l), (t[5] = u));
  let d = I(u),
    f = c || d.isLoading,
    p;
  return (
    t[6] !== s || t[7] !== d.isConnected || t[8] !== f
      ? ((p = {
          browserExtension: s,
          isConnected: d.isConnected,
          isInstalled: d.isConnected,
          isLoading: f,
        }),
        (t[6] = s),
        (t[7] = d.isConnected),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function Ht() {
  let e = (0, X.c)(39),
    t = v(L),
    { platform: n } = ie(),
    { selectedHostId: r } = Qe(),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = []), (e[0] = i)) : (i = e[0]);
  let a = ve(r, i),
    o = dt(r),
    s;
  e[1] !== o || e[2] !== a.installedPlugins
    ? ((s = en(a.installedPlugins, o)), (e[1] = o), (e[2] = a.installedPlugins), (e[3] = s))
    : (s = e[3]);
  let c = s,
    l = c?.plugin.installed === !0,
    u = l && c.plugin.enabled,
    d;
  e[4] !== c || e[5] !== l || e[6] !== r
    ? ((d = { hostId: r, plugin: c, shouldReadBrowserExtension: l }),
      (e[4] = c),
      (e[5] = l),
      (e[6] = r),
      (e[7] = d))
    : (d = e[7]);
  let f = Vt(d),
    m = f.browserExtension,
    h = m?.id,
    g = f.isInstalled,
    _ = f.isLoading;
  if (a.isLoading && c == null) {
    let t, n;
    e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(Gt, {})),
        (n = (0, Z.jsx)(V, {
          id: `settings.computerUse.chrome.title`,
          defaultMessage: `Google Chrome`,
          description: `Title for Google Chrome computer use settings`,
        })),
        (e[8] = t),
        (e[9] = n))
      : ((t = e[8]), (n = e[9]));
    let r;
    return (
      e[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(We, {
            backSlot: t,
            title: n,
            children: (0, Z.jsx)(`div`, {
              className: `flex min-h-[120px] items-center justify-center text-token-text-secondary`,
              children: (0, Z.jsx)(Se, { className: `icon-xs` }),
            }),
          })),
          (e[10] = r))
        : (r = e[10]),
      r
    );
  }
  if (!a.isLoading && !u) {
    let t;
    return (
      e[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(Be, { to: `/settings/computer-use`, replace: !0 })), (e[11] = t))
        : (t = e[11]),
      t
    );
  }
  let y = m?.url == null,
    b;
  e[12] === m
    ? (b = e[13])
    : ((b = (e) => {
        m?.url != null &&
          He({
            event: e,
            href: m.url,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
      }),
      (e[12] = m),
      (e[13] = b));
  let x;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(V, {
        id: `settings.computerUse.chrome.reinstallExtension`,
        defaultMessage: `Reinstall extension`,
        description: `Button label to reinstall the Google Chrome extension`,
      })),
      (e[14] = x))
    : (x = e[14]);
  let S;
  e[15] !== y || e[16] !== b
    ? ((S = (0, Z.jsx)(p, {
        color: `secondary`,
        disabled: y,
        onClick: b,
        size: `toolbar`,
        children: x,
      })),
      (e[15] = y),
      (e[16] = b),
      (e[17] = S))
    : (S = e[17]);
  let C;
  e[18] !== h || e[19] !== g || e[20] !== _ || e[21] !== n || e[22] !== t
    ? ((C =
        n === `macOS` || n === `windows`
          ? (0, Z.jsx)(p, {
              color: `danger`,
              disabled: h == null || _ || !g,
              onClick: () => {
                h != null &&
                  ce(`chrome-extension-settings-open`, { params: { extensionId: h } }).catch(() => {
                    t.get(H).danger(
                      (0, Z.jsx)(V, {
                        id: `settings.computerUse.chrome.openExtensionSettingsError`,
                        defaultMessage: `Unable to open Chrome extension settings`,
                        description: `Toast shown when the app fails to open Chrome extension settings`,
                      }),
                    );
                  });
              },
              size: `toolbar`,
              children: (0, Z.jsx)(V, {
                id: `settings.computerUse.chrome.removeExtension`,
                defaultMessage: `Remove extension`,
                description: `Button label to remove the Google Chrome extension`,
              }),
            })
          : null),
      (e[18] = h),
      (e[19] = g),
      (e[20] = _),
      (e[21] = n),
      (e[22] = t),
      (e[23] = C))
    : (C = e[23]);
  let w;
  e[24] !== S || e[25] !== C
    ? ((w = (0, Z.jsxs)(`div`, { className: `flex items-center gap-2`, children: [S, C] })),
      (e[24] = S),
      (e[25] = C),
      (e[26] = w))
    : (w = e[26]);
  let T;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(Gt, {})), (e[27] = T))
    : (T = e[27]);
  let E;
  e[28] !== g || e[29] !== _
    ? ((E = _ ? null : (0, Z.jsx)(Wt, { installed: g })), (e[28] = g), (e[29] = _), (e[30] = E))
    : (E = e[30]);
  let D;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(V, {
        id: `settings.computerUse.chrome.title`,
        defaultMessage: `Google Chrome`,
        description: `Title for Google Chrome computer use settings`,
      })),
      (e[31] = D))
    : (D = e[31]);
  let O;
  e[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(W.Header, {
        title: (0, Z.jsx)(V, {
          id: `settings.computerUse.chrome.permissions.title`,
          defaultMessage: `Permissions`,
          description: `Title for Google Chrome browser permissions settings section`,
        }),
      })),
      (e[32] = O))
    : (O = e[32]);
  let k, A, j;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsxs)(W, {
        children: [
          O,
          (0, Z.jsx)(W.Content, {
            children: (0, Z.jsxs)(lt, {
              children: [
                (0, Z.jsx)(bt, {}),
                (0, Z.jsx)(xt, {}),
                (0, Z.jsx)(Ut, { kind: `download` }),
                (0, Z.jsx)(Ut, { kind: `upload` }),
              ],
            }),
          }),
        ],
      })),
      (A = (0, Z.jsx)(gt, { surface: `googleChrome` })),
      (j = (0, Z.jsx)(St, {})),
      (e[33] = k),
      (e[34] = A),
      (e[35] = j))
    : ((k = e[33]), (A = e[34]), (j = e[35]));
  let M;
  return (
    e[36] !== E || e[37] !== w
      ? ((M = (0, Z.jsxs)(We, {
          action: w,
          backSlot: T,
          subtitle: E,
          subtitleClassName: `flex`,
          title: D,
          children: [k, A, j],
        })),
        (e[36] = E),
        (e[37] = w),
        (e[38] = M))
      : (M = e[38]),
    M
  );
}
function Ut(e) {
  let t = (0, X.c)(39),
    { kind: n } = e,
    r = v(L),
    { data: i, isLoading: a } = T($e),
    o = it(),
    s = n === `download` ? i?.downloadApprovalMode : i?.uploadApprovalMode,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(V, {
        id: `settings.browserUse.approval.alwaysAsk.label`,
        defaultMessage: `Always ask`,
        description: `Label for browser use always ask approval mode`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === n
    ? (l = t[2])
    : ((l = {
        id: `alwaysAsk`,
        label: c,
        description:
          n === `download`
            ? (0, Z.jsx)(V, {
                id: `settings.browserUse.downloadApproval.alwaysAsk.description`,
                defaultMessage: `Ask before downloading files`,
                description: `Description for browser use always ask download approval mode`,
              })
            : (0, Z.jsx)(V, {
                id: `settings.browserUse.uploadApproval.alwaysAsk.description`,
                defaultMessage: `Ask before uploading files`,
                description: `Description for browser use always ask upload approval mode`,
              }),
      }),
      (t[1] = n),
      (t[2] = l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(V, {
        id: `settings.browserUse.approval.neverAsk.label`,
        defaultMessage: `Always allow`,
        description: `Label for browser use never ask approval mode`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === n
    ? (d = t[5])
    : ((d = {
        id: `neverAsk`,
        label: u,
        description:
          n === `download`
            ? (0, Z.jsx)(V, {
                id: `settings.browserUse.downloadApproval.neverAsk.description`,
                defaultMessage: `Download files without asking`,
                description: `Description for browser use never ask download approval mode`,
              })
            : (0, Z.jsx)(V, {
                id: `settings.browserUse.uploadApproval.neverAsk.description`,
                defaultMessage: `Upload files without asking`,
                description: `Description for browser use never ask upload approval mode`,
              }),
      }),
      (t[4] = n),
      (t[5] = d));
  let f;
  t[6] !== l || t[7] !== d ? ((f = [l, d]), (t[6] = l), (t[7] = d), (t[8] = f)) : (f = t[8]);
  let p = f,
    m;
  t[9] !== s || t[10] !== p
    ? ((m = p.find((e) => e.id === s) ?? p[0]), (t[9] = s), (t[10] = p), (t[11] = m))
    : (m = t[11]);
  let h = m,
    g = o.isPending,
    _;
  t[12] !== s || t[13] !== g || t[14] !== n || t[15] !== r || t[16] !== o
    ? ((_ = async (e) => {
        if (!(e === s || g))
          try {
            await o.mutateAsync({ approvalMode: e, kind: n });
          } catch {
            r.get(H).danger(
              n === `download`
                ? (0, Z.jsx)(V, {
                    id: `settings.browserUse.downloadApproval.saveError`,
                    defaultMessage: `Unable to save download setting`,
                    description: `Toast shown when saving browser use download approval mode fails`,
                  })
                : (0, Z.jsx)(V, {
                    id: `settings.browserUse.uploadApproval.saveError`,
                    defaultMessage: `Unable to save upload setting`,
                    description: `Toast shown when saving browser use upload approval mode fails`,
                  }),
            );
          }
      }),
      (t[12] = s),
      (t[13] = g),
      (t[14] = n),
      (t[15] = r),
      (t[16] = o),
      (t[17] = _))
    : (_ = t[17]);
  let y = _,
    b,
    S;
  t[18] === n
    ? ((b = t[19]), (S = t[20]))
    : ((b =
        n === `download`
          ? (0, Z.jsx)(V, {
              id: `settings.browserUse.downloadApproval.label`,
              defaultMessage: `Downloads`,
              description: `Label for browser use download approval mode setting`,
            })
          : (0, Z.jsx)(V, {
              id: `settings.browserUse.uploadApproval.label`,
              defaultMessage: `Uploads`,
              description: `Label for browser use upload approval mode setting`,
            })),
      (S =
        n === `download`
          ? (0, Z.jsx)(V, {
              id: `settings.browserUse.downloadApproval.description`,
              defaultMessage: `Choose if Codex asks before downloading files from websites`,
              description: `Description for browser use download approval mode setting`,
            })
          : (0, Z.jsx)(V, {
              id: `settings.browserUse.uploadApproval.description`,
              defaultMessage: `Choose if Codex asks before uploading files to websites`,
              description: `Description for browser use upload approval mode setting`,
            })),
      (t[18] = n),
      (t[19] = b),
      (t[20] = S));
  let C = a || g,
    w = a || g,
    E = h?.label,
    D;
  t[21] === E
    ? (D = t[22])
    : ((D = (0, Z.jsx)(`span`, { className: `truncate`, children: E })), (t[21] = E), (t[22] = D));
  let O;
  t[23] !== w || t[24] !== D
    ? ((O = (0, Z.jsx)(ot, { className: `w-[152px]`, disabled: w, children: D })),
      (t[23] = w),
      (t[24] = D),
      (t[25] = O))
    : (O = t[25]);
  let k;
  t[26] !== s || t[27] !== y || t[28] !== g || t[29] !== p
    ? ((k = (0, Z.jsx)(`div`, {
        className: `flex flex-col`,
        children: p.map((e) => {
          let t = e.id === s;
          return (0, Z.jsx)(
            Ae.Item,
            {
              allowWrap: !0,
              disabled: g,
              RightIcon: t ? Ie : void 0,
              onSelect: () => {
                y(e.id);
              },
              children: (0, Z.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Z.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Z.jsx)(`span`, {
                    className: `truncate text-sm text-token-text-secondary`,
                    children: e.description,
                  }),
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (t[26] = s),
      (t[27] = y),
      (t[28] = g),
      (t[29] = p),
      (t[30] = k))
    : (k = t[30]);
  let A;
  t[31] !== C || t[32] !== O || t[33] !== k
    ? ((A = (0, Z.jsx)(x, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: C,
        triggerButton: O,
        children: k,
      })),
      (t[31] = C),
      (t[32] = O),
      (t[33] = k),
      (t[34] = A))
    : (A = t[34]);
  let j;
  return (
    t[35] !== A || t[36] !== b || t[37] !== S
      ? ((j = (0, Z.jsx)(U, { label: b, description: S, control: A })),
        (t[35] = A),
        (t[36] = b),
        (t[37] = S),
        (t[38] = j))
      : (j = t[38]),
    j
  );
}
function Wt(e) {
  let t = (0, X.c)(12),
    { installed: n } = e,
    r = n
      ? `bg-[var(--color-background-status-success)] text-[var(--color-text-success)]`
      : `bg-token-charts-red/10 text-token-charts-red`,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = u(`inline-flex w-max items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium`, r)),
      (t[0] = r),
      (t[1] = i));
  let a = n ? `bg-[var(--color-icon-success)]` : `bg-token-charts-red`,
    o;
  t[2] === a ? (o = t[3]) : ((o = u(`h-2 w-2 rounded-full`, a)), (t[2] = a), (t[3] = o));
  let s;
  t[4] === o ? (s = t[5]) : ((s = (0, Z.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s));
  let c;
  t[6] === n
    ? (c = t[7])
    : ((c = n
        ? (0, Z.jsx)(V, {
            id: `settings.computerUse.chrome.connected`,
            defaultMessage: `Connected`,
            description: `Status badge for connected Google Chrome extension`,
          })
        : (0, Z.jsx)(V, {
            id: `settings.computerUse.chrome.notConnected`,
            defaultMessage: `Not connected`,
            description: `Status badge for a Google Chrome extension that is not connected`,
          })),
      (t[6] = n),
      (t[7] = c));
  let l;
  return (
    t[8] !== i || t[9] !== s || t[10] !== c
      ? ((l = (0, Z.jsxs)(`span`, { className: i, children: [s, c] })),
        (t[8] = i),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Gt() {
  let e = (0, X.c)(11),
    t = ee(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = () => {
        t(`/settings/computer-use`);
      }),
      (e[0] = t),
      (e[1] = n));
  let r, i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(Ke, { className: `icon-xs` })),
      (i = (0, Z.jsx)(V, {
        id: `settings.computerUse.chrome.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to Computer use settings`,
      })),
      (e[2] = r),
      (e[3] = i))
    : ((r = e[2]), (i = e[3]));
  let a;
  e[4] === n
    ? (a = e[5])
    : ((a = (0, Z.jsxs)(p, { color: `ghost`, size: `toolbar`, onClick: n, children: [r, i] })),
      (e[4] = n),
      (e[5] = a));
  let o, s;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(V, {
        id: `settings.computerUse.breadcrumb.computerUse`,
        defaultMessage: `Computer use`,
        description: `Computer use breadcrumb label`,
      })),
      (s = (0, Z.jsx)(z, { className: `icon-xs text-token-text-secondary` })),
      (e[6] = o),
      (e[7] = s))
    : ((o = e[6]), (s = e[7]));
  let c;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [
          o,
          s,
          (0, Z.jsx)(`span`, {
            className: `text-token-text-primary`,
            children: (0, Z.jsx)(V, {
              id: `settings.computerUse.chrome.breadcrumb.googleChrome`,
              defaultMessage: `Google Chrome`,
              description: `Google Chrome breadcrumb label`,
            }),
          }),
        ],
      })),
      (e[8] = c))
    : (c = e[8]);
  let l;
  return (
    e[9] === a
      ? (l = e[10])
      : ((l = (0, Z.jsxs)(`nav`, {
          className: `flex items-center gap-2 text-sm font-medium text-token-text-secondary`,
          children: [a, c],
        })),
        (e[9] = a),
        (e[10] = l)),
    l
  );
}
function Kt() {
  let e = (0, X.c)(20),
    t = T(we),
    n = Ve(),
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = {
        mutationFn: Oe,
        onSuccess: (e) => {
          n.setQueryData(se(`computer-use-sound-mode-read`), e);
        },
      }),
      (e[0] = n),
      (e[1] = r));
  let i = j(r);
  if (t.data == null) return null;
  let a;
  e[2] === t.data ? (a = e[3]) : ((a = Xt(t.data) ? t.data : dn), (e[2] = t.data), (e[3] = a));
  let o = a,
    s;
  e[4] === o
    ? (s = e[5])
    : ((s = $.find((e) => e.value === o) ?? $.find(qt) ?? $[0]), (e[4] = o), (e[5] = s));
  let c = s,
    l = t.isLoading || i.isPending,
    u;
  e[6] === c.label
    ? (u = e[7])
    : ((u = (0, Z.jsx)(V, { ...c.label })), (e[6] = c.label), (e[7] = u));
  let d;
  e[8] !== l || e[9] !== u
    ? ((d = (0, Z.jsx)(ot, {
        className: `w-max max-w-full`,
        contentClassName: `flex-none`,
        disabled: l,
        children: u,
      })),
      (e[8] = l),
      (e[9] = u),
      (e[10] = d))
    : (d = e[10]);
  let f = t.isLoading || i.isPending,
    p;
  e[11] !== o || e[12] !== i
    ? ((p = $.map((e) =>
        (0, Z.jsx)(
          Ae.Item,
          {
            onSelect: () => {
              i.mutate(e.value);
            },
            RightIcon: o === e.value ? Ie : void 0,
            children: (0, Z.jsx)(`span`, {
              className: `text-sm`,
              children: (0, Z.jsx)(V, { ...e.label }),
            }),
          },
          e.value,
        ),
      )),
      (e[11] = o),
      (e[12] = i),
      (e[13] = p))
    : (p = e[13]);
  let m;
  e[14] === p
    ? (m = e[15])
    : ((m = (0, Z.jsx)(`div`, { className: `w-max max-w-[calc(100vw-2rem)]`, children: p })),
      (e[14] = p),
      (e[15] = m));
  let h;
  return (
    e[16] !== d || e[17] !== f || e[18] !== m
      ? ((h = (0, Z.jsx)(x, { triggerButton: d, align: `start`, disabled: f, children: m })),
        (e[16] = d),
        (e[17] = f),
        (e[18] = m),
        (e[19] = h))
      : (h = e[19]),
    h
  );
}
function qt(e) {
  return e.value === dn;
}
function Jt() {
  let e = (0, X.c)(25),
    t = v(L),
    n = Te(),
    r = Ve(),
    i = T(pe),
    a;
  e[0] !== r || e[1] !== t
    ? ((a = (e) => {
        if (
          (r.setQueryData(se(`computer-use-background-auth-read`), (t) => ({
            computerIconDataURL: t?.computerIconDataURL ?? null,
            enabled: e,
            lockIconDataURL: t?.lockIconDataURL ?? null,
          })),
          e != null)
        ) {
          if (e) {
            t.get(H).success(
              (0, Z.jsx)(V, {
                id: `settings.computerUse.backgroundAuth.enabled`,
                defaultMessage: `Locked use enabled`,
                description: `Toast shown after enabling Locked use`,
              }),
            );
            return;
          }
          t.get(H).success(
            (0, Z.jsx)(V, {
              id: `settings.computerUse.backgroundAuth.disabled`,
              defaultMessage: `Locked use disabled`,
              description: `Toast shown after disabling Locked use`,
            }),
          );
        }
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = a))
    : (a = e[2]);
  let o;
  e[3] === t
    ? (o = e[4])
    : ((o = () => {
        t.get(H).danger(
          (0, Z.jsx)(V, {
            id: `settings.computerUse.backgroundAuth.saveError`,
            defaultMessage: `Unable to update Locked use`,
            description: `Toast shown when updating Locked use fails`,
          }),
        );
      }),
      (e[3] = t),
      (e[4] = o));
  let s;
  e[5] !== a || e[6] !== o
    ? ((s = { mutationFn: ge, onSuccess: a, onError: o }), (e[5] = a), (e[6] = o), (e[7] = s))
    : (s = e[7]);
  let c = j(s);
  if (i.data?.enabled == null) return null;
  let l;
  e[8] !== i.data.computerIconDataURL || e[9] !== i.data.lockIconDataURL
    ? ((l =
        i.data.computerIconDataURL != null && i.data.lockIconDataURL != null
          ? (0, Z.jsx)(`span`, {
              className: `flex h-10 w-10 items-center justify-center`,
              children: (0, Z.jsx)(`span`, {
                className: `origin-center scale-[0.65]`,
                children: (0, Z.jsx)(Ot, {
                  computerImageDataUrl: i.data.computerIconDataURL,
                  lockImageDataUrl: i.data.lockIconDataURL,
                }),
              }),
            })
          : null),
      (e[8] = i.data.computerIconDataURL),
      (e[9] = i.data.lockIconDataURL),
      (e[10] = l))
    : (l = e[10]);
  let u;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(V, {
        id: `settings.computerUse.backgroundAuth.label`,
        defaultMessage: `Locked use`,
        description: `Label for the Locked use toggle`,
      })),
      (e[11] = u))
    : (u = e[11]);
  let d;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(V, {
        id: `settings.computerUse.backgroundAuth.description`,
        defaultMessage: `Let Codex use your Mac when it's locked. <a>Learn more</a>`,
        description: `Description for the Locked use toggle`,
        values: { a: Yt },
      })),
      (e[12] = d))
    : (d = e[12]);
  let f;
  e[13] === n
    ? (f = e[14])
    : ((f = n.formatMessage({
        id: `settings.computerUse.backgroundAuth.ariaLabel`,
        defaultMessage: `Enable Locked use`,
        description: `Accessible label for the Locked use toggle`,
      })),
      (e[13] = n),
      (e[14] = f));
  let p = i.isLoading || c.isPending,
    m;
  e[15] === c
    ? (m = e[16])
    : ((m = (e) => {
        c.mutate(e);
      }),
      (e[15] = c),
      (e[16] = m));
  let h;
  e[17] !== i.data.enabled || e[18] !== f || e[19] !== p || e[20] !== m
    ? ((h = (0, Z.jsx)(R, { ariaLabel: f, checked: i.data.enabled, disabled: p, onChange: m })),
      (e[17] = i.data.enabled),
      (e[18] = f),
      (e[19] = p),
      (e[20] = m),
      (e[21] = h))
    : (h = e[21]);
  let g;
  return (
    e[22] !== l || e[23] !== h
      ? ((g = (0, Z.jsx)(lt, {
          children: (0, Z.jsx)(U, { icon: l, label: u, description: d, control: h }),
        })),
        (e[22] = l),
        (e[23] = h),
        (e[24] = g))
      : (g = e[24]),
    g
  );
}
function Yt(e) {
  return (0, Z.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: F,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Xt(e) {
  return $.some((t) => t.value === e);
}
function Zt() {
  let e = (0, X.c)(7),
    t = v(L),
    n = T(De),
    r,
    i;
  if (
    (e[0] === t
      ? ((r = e[1]), (i = e[2]))
      : ((r = () => {
          t.get(De).refetch();
        }),
        (i = [t]),
        (e[0] = t),
        (e[1] = r),
        (e[2] = i)),
    (0, rn.useEffect)(r, i),
    n.isLoading)
  ) {
    let t;
    return (
      e[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 p-4 text-sm text-token-text-secondary`,
            children: [
              (0, Z.jsx)(Se, { className: `icon-xs` }),
              (0, Z.jsx)(V, {
                id: `settings.computerUse.allowedApps.loading`,
                defaultMessage: `Loading allowed apps`,
                description: `Message shown while loading computer use allowed apps`,
              }),
            ],
          })),
          (e[3] = t))
        : (t = e[3]),
      t
    );
  }
  if (n.isError) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(`div`, {
            className: `p-4 text-sm text-token-text-secondary`,
            children: (0, Z.jsx)(V, {
              id: `settings.computerUse.allowedApps.loadError`,
              defaultMessage: `Unable to load allowed apps.`,
              description: `Message shown when computer use allowed apps fail to load`,
            }),
          })),
          (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let a;
  return (
    e[5] === n.data
      ? (a = e[6])
      : ((a = (0, Z.jsx)(Qt, { approvals: n.data })), (e[5] = n.data), (e[6] = a)),
    a
  );
}
function Qt(e) {
  let t = (0, X.c)(41),
    { approvals: n } = e,
    r = v(L),
    i = Te(),
    [a, o] = (0, rn.useState)(null),
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = {
        mutationFn: $t,
        onSuccess: (e) => {
          (r.query.setData(De, e),
            r
              .get(H)
              .success(
                (0, Z.jsx)(V, {
                  id: `settings.computerUse.allowedApps.saved`,
                  defaultMessage: `Allowed app removed`,
                  description: `Toast shown after removing a computer use allowed app`,
                }),
              ));
        },
        onError: () => {
          r.get(H).danger(
            (0, Z.jsx)(V, {
              id: `settings.computerUse.allowedApps.saveError`,
              defaultMessage: `Unable to save allowed apps`,
              description: `Toast shown when saving computer use allowed apps fails`,
            }),
          );
        },
      }),
      (t[0] = r),
      (t[1] = s));
  let c = j(s),
    l;
  t[2] !== a || t[3] !== c
    ? ((l = async () => {
        a != null && (await c.mutateAsync(a.bundleIdentifier), o(null));
      }),
      (t[2] = a),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u = l,
    d;
  t[5] === n?.approvedApps
    ? (d = t[6])
    : ((d = n?.approvedApps ?? []), (t[5] = n?.approvedApps), (t[6] = d));
  let f;
  t[7] !== i || t[8] !== c.isPending || t[9] !== d
    ? ((f = (0, Z.jsx)(tn, {
        approvedApps: d,
        intl: i,
        isSaving: c.isPending,
        onRequestRemoval: o,
      })),
      (t[7] = i),
      (t[8] = c.isPending),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let h = a != null,
    g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        e || o(null);
      }),
      (t[11] = g))
    : (g = t[11]);
  let y = a?.displayName ?? ``,
    b;
  t[12] === y
    ? (b = t[13])
    : ((b = (0, Z.jsx)(V, {
        id: `settings.computerUse.allowedApps.removeDialogTitle`,
        defaultMessage: `Remove “{displayName}” from always allowed apps?`,
        description: `Title for dialog confirming removal of a computer use allowed app`,
        values: { displayName: y },
      })),
      (t[12] = y),
      (t[13] = b));
  let x = a?.displayName ?? ``,
    S;
  t[14] === x
    ? (S = t[15])
    : ((S = (0, Z.jsx)(V, {
        id: `settings.computerUse.allowedApps.removeDialogSubtitle`,
        defaultMessage: `Codex will ask to use “{displayName}” in the next computer use session.`,
        description: `Subtitle for dialog confirming removal of a computer use allowed app`,
        values: { displayName: x },
      })),
      (t[14] = x),
      (t[15] = S));
  let C;
  t[16] !== S || t[17] !== b
    ? ((C = (0, Z.jsx)(m, { children: (0, Z.jsx)(_, { title: b, subtitle: S }) })),
      (t[16] = S),
      (t[17] = b),
      (t[18] = C))
    : (C = t[18]);
  let w, T;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => {
        o(null);
      }),
      (T = (0, Z.jsx)(V, {
        id: `settings.computerUse.allowedApps.removeDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for remove allowed app dialog`,
      })),
      (t[19] = w),
      (t[20] = T))
    : ((w = t[19]), (T = t[20]));
  let E;
  t[21] === c.isPending
    ? (E = t[22])
    : ((E = (0, Z.jsx)(p, { color: `ghost`, disabled: c.isPending, onClick: w, children: T })),
      (t[21] = c.isPending),
      (t[22] = E));
  let D;
  t[23] === u
    ? (D = t[24])
    : ((D = () => {
        u();
      }),
      (t[23] = u),
      (t[24] = D));
  let O;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(V, {
        id: `settings.computerUse.allowedApps.removeDialogConfirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for remove allowed app dialog`,
      })),
      (t[25] = O))
    : (O = t[25]);
  let k;
  t[26] !== c.isPending || t[27] !== D
    ? ((k = (0, Z.jsx)(p, { color: `danger`, loading: c.isPending, onClick: D, children: O })),
      (t[26] = c.isPending),
      (t[27] = D),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== E || t[30] !== k
    ? ((A = (0, Z.jsx)(m, { children: (0, Z.jsxs)(re, { children: [E, k] }) })),
      (t[29] = E),
      (t[30] = k),
      (t[31] = A))
    : (A = t[31]);
  let M;
  t[32] !== C || t[33] !== A
    ? ((M = (0, Z.jsxs)(Le, { children: [C, A] })), (t[32] = C), (t[33] = A), (t[34] = M))
    : (M = t[34]);
  let N;
  t[35] !== M || t[36] !== h
    ? ((N = (0, Z.jsx)(Fe, { open: h, onOpenChange: g, size: `compact`, children: M })),
      (t[35] = M),
      (t[36] = h),
      (t[37] = N))
    : (N = t[37]);
  let P;
  return (
    t[38] !== N || t[39] !== f
      ? ((P = (0, Z.jsxs)(Z.Fragment, { children: [f, N] })), (t[38] = N), (t[39] = f), (t[40] = P))
      : (P = t[40]),
    P
  );
}
async function $t(e) {
  let t = await he(e);
  if (t == null) throw Error(`Computer use app approvals are unavailable`);
  return t;
}
function en(e, t) {
  let n = ze();
  return (
    (n === le.Dev ? G(e, cn, t) : le.isInternal(n) ? (G(e, ln, t) ?? G(e, cn, t)) : null) ??
    G(e, sn, t)
  );
}
function tn(e) {
  let t = (0, X.c)(12),
    { approvedApps: n, intl: r, isSaving: i, onRequestRemoval: a } = e;
  if (n.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(U, {
            className: `justify-center`,
            label: (0, Z.jsx)(`span`, {
              className: `text-token-text-secondary`,
              children: (0, Z.jsx)(V, {
                id: `settings.computerUse.allowedApps.emptyTitle`,
                defaultMessage: `None yet`,
                description: `Empty state title for computer use allowed apps`,
              }),
            }),
            control: null,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  if (t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a) {
    let e;
    (t[6] !== r || t[7] !== i || t[8] !== a
      ? ((e = (e) =>
          (0, Z.jsx)(
            U,
            {
              icon: (0, Z.jsx)(nn, { approvedApp: e }),
              label: (0, Z.jsx)(`span`, { className: `font-medium`, children: e.displayName }),
              description: null,
              control: (0, Z.jsx)(p, {
                "aria-label": r.formatMessage(
                  {
                    id: `settings.computerUse.allowedApps.removeAriaLabel`,
                    defaultMessage: `Remove {displayName}`,
                    description: `Aria label for button that removes a computer use allowed app`,
                  },
                  { displayName: e.displayName },
                ),
                color: `ghost`,
                disabled: i,
                onClick: () => {
                  a(e);
                },
                size: `icon`,
                children: (0, Z.jsx)(rt, { className: `icon-2xs` }),
              }),
            },
            e.bundleIdentifier,
          )),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = e))
      : (e = t[9]),
      (o = n.map(e)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  } else o = t[5];
  let s;
  return (
    t[10] === o
      ? (s = t[11])
      : ((s = (0, Z.jsx)(Z.Fragment, { children: o })), (t[10] = o), (t[11] = s)),
    s
  );
}
function nn(e) {
  let t = (0, X.c)(6),
    { approvedApp: n } = e;
  if (n.iconDataURL != null) {
    let e;
    return (
      t[0] === n.iconDataURL
        ? (e = t[1])
        : ((e = (0, Z.jsx)(`img`, {
            alt: ``,
            className: `h-9 w-9 shrink-0 rounded-md`,
            draggable: !1,
            src: n.iconDataURL,
          })),
          (t[0] = n.iconDataURL),
          (t[1] = e)),
      e
    );
  }
  let r;
  t[2] === n.displayName
    ? (r = t[3])
    : ((r = n.displayName.slice(0, 1).toUpperCase()), (t[2] = n.displayName), (t[3] = r));
  let i;
  return (
    t[4] === r
      ? (i = t[5])
      : ((i = (0, Z.jsx)(`div`, {
          className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-token-foreground/10 text-sm font-semibold text-token-description-foreground`,
          children: r,
        })),
        (t[4] = r),
        (t[5] = i)),
    i
  );
}
var X, rn, Z, an, on, sn, cn, ln, Q, un, dn, $;
e(() => {
  ((X = B()),
    s(),
    oe(),
    a(),
    de(),
    (rn = t(D(), 1)),
    ye(),
    Ee(),
    mt(),
    Tt(),
    Dt(),
    N(),
    Re(),
    c(),
    ue(),
    k(),
    At(),
    o(),
    me(),
    i(),
    y(),
    O(),
    Ce(),
    h(),
    ft(),
    w(),
    Ye(),
    ne(),
    f(),
    nt(),
    M(),
    Nt(),
    be(),
    ke(),
    Xe(),
    Pe(),
    E(),
    r(),
    tt(),
    Ne(),
    Ue(),
    Ct(),
    yt(),
    Pt(),
    ut(),
    Ze(),
    ht(),
    vt(),
    et(),
    st(),
    ct(),
    ae(),
    S(),
    fe(),
    n(),
    It(),
    (Z = d()),
    (an = `computer-use`),
    (on = `computer-use`),
    (sn = `chrome`),
    (cn = `chrome-dev`),
    (ln = `chrome-internal`),
    (Q = `connector_openai_codex_document_control`),
    (un = `/settings/computer-use/google-chrome`),
    (dn = `foregroundClicks`),
    ($ = [
      { value: `foregroundClicks`, label: Y.foregroundClickSounds },
      { value: `foregroundAndBackgroundClicks`, label: Y.foregroundAndBackgroundClickSounds },
      { value: `off`, label: Y.noClickSounds },
    ]));
})();
export { Lt as ComputerUseSettings };
//# sourceMappingURL=computer-use-settings-BV0n-LWm.js.map
