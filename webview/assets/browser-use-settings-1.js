import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  B as t,
  Dr as n,
  E as r,
  Er as i,
  L as a,
  R as o,
  Wr as s,
  _r as c,
  dr as l,
  fr as u,
  gr as d,
  kr as f,
  lr as p,
  mr as m,
  pr as h,
  ur as g,
  vr as _,
  z as v,
} from "./src-2.js";
import { Uo as y, _i as b } from "./app-server-manager-signals.js";
import { n as x, t as S } from "./jsx-runtime.js";
import { t as C } from "./clsx.js";
import {
  F as w,
  I as T,
  P as E,
  W as D,
  f as O,
  g as k,
  h as A,
  lt as j,
} from "./vscode-api.js";
import { c as M, n as N, o as P } from "./lib-2.js";
import { a as F, m as ee, n as I, p as L } from "./chunk-12.js";
import { a as R } from "./statsig.js";
import { c as te } from "./config-queries.js";
import { t as ne } from "./connector-logo.js";
import { r as z } from "./toast-signal.js";
import { t as re } from "./tooltip.js";
import { t as ie } from "./route-scope.js";
import { D as ae } from "./mention-item-C.js";
import { t as B } from "./button.js";
import { a as oe, i as se } from "./setting-storage.js";
import { t as ce } from "./spinner.js";
import { t as le } from "./apps.js";
import { t as ue } from "./chats-K.js";
import { a as de, n as fe, r as pe } from "./use-is-plugins-enabled.js";
import { c as me, m as he, y as ge } from "./use-plugins.js";
import { t as _e } from "./with-window.js";
import { n as ve, r as ye } from "./use-resolved-theme-variant.js";
import { o as be } from "./plugin-detail-route-utils.js";
import { n as xe, t as Se } from "./use-plugin-install-flow.js";
import { a as V, i as Ce, l as we, n as Te, r as Ee } from "./dialog-layout.js";
import { t as De } from "./check-md.js";
import { t as Oe } from "./chevron-right.js";
import { n as ke } from "./use-start-new-conversation.js";
import { n as Ae, t as je } from "./plugin-prefill-prompt.js";
import { o as H } from "./bundled-plugin-auto-install-preference.js";
import { r as U, t as W } from "./dropdown.js";
import { t as Me } from "./trash.js";
import { t as Ne } from "./chevron.js";
import { t as Pe } from "./plus-d3DP-DMx.js";
import { o as Fe } from "./check-plugin-availability.js";
import { t as Ie } from "./toggle.js";
import { t as Le } from "./shield-exclamation.js";
import { t as Re } from "./settings-shared.js";
import { t as G } from "./settings-host-context.js";
import { t as ze } from "./settings-content-layout.js";
import { t as Be } from "./more-menu-trigger.js";
import {
  a as Ve,
  c as He,
  d as Ue,
  i as We,
  o as Ge,
  r as Ke,
  s as qe,
  t as K,
  u as Je,
} from "./browser-use-origin-state-queries.js";
import { n as Ye, r as Xe } from "./plugins-availability.js";
import { n as q } from "./settings-row.js";
import { n as J, t as Y } from "./settings-group.js";
import { t as Ze } from "./settings-empty-state.js";
import { t as Qe } from "./use-home-directory.js";
import { t as $e } from "./browser-use.js";
import { n as et, t as tt } from "./browser-use-elevated-risk-learn-more-url.js";
import { t as nt } from "./plugin-uninstall-dialog.js";
var rt = `browser_use_developer_mode_full_cdp`,
  X = j(),
  Z = e(x(), 1),
  Q = S(),
  it = {
    extensions: {
      partition: l,
      url: g,
      webviewLabel: N({
        id: `settings.browserUse.extensions.webviewLabel`,
        defaultMessage: `Extensions settings`,
        description: `Accessible label for embedded extension settings`,
      }),
    },
    passwordManager: {
      partition: m,
      url: h,
      webviewLabel: N({
        id: `settings.browserUse.passwordManager.webviewLabel`,
        defaultMessage: `Password manager settings`,
        description: `Accessible label for embedded password manager settings`,
      }),
    },
    siteSettings: {
      partition: _,
      url: c,
      webviewLabel: N({
        id: `settings.browserUse.siteSettings.webviewLabel`,
        defaultMessage: `Site settings`,
        description: `Accessible label for embedded site settings`,
      }),
    },
  };
function at() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(ct, { kind: `extensions` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ot() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(ct, { kind: `passwordManager` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function st() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(ct, { kind: `siteSettings` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ct(e) {
  let t = (0, X.c)(3),
    { kind: n } = e,
    r;
  return (t[1] === n ? (r = t[2]) : ((r = (0, Q.jsx)(lt, { kind: n })), (t[1] = n), (t[2] = r)), r);
}
function lt(e) {
  let t = (0, X.c)(20),
    { kind: n } = e,
    r = M(),
    i = (0, Z.useRef)(null),
    a = it[n],
    o;
  t[0] !== r || t[1] !== a.webviewLabel
    ? ((o = r.formatMessage(a.webviewLabel)), (t[0] = r), (t[1] = a.webviewLabel), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c = ye(ve()),
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = async (e) => {
        let t = window.electronBridge?.sendMessageFromView;
        return t == null
          ? !1
          : (await t({ mountId: e, themeVariant: c, type: `browser-settings-webview-mounted` }),
            !0);
      }),
      (t[3] = c),
      (t[4] = l));
  let u = (0, Z.useEffectEvent)(l),
    d;
  t[5] !== n || t[6] !== u || t[7] !== a.partition || t[8] !== a.url || t[9] !== s
    ? ((d = () => {
        let e = i.current;
        if (e == null) return;
        let t = window.electronBridge?.sendMessageFromView,
          r = crypto.randomUUID(),
          o = !1,
          c = !1,
          l = null,
          d = () => {
            !o ||
              t == null ||
              ((o = !1),
              t({ mountId: r, type: `browser-settings-webview-unmounted` }).catch((e) => {
                k.warning(`Failed to unmount browser settings webview`, {
                  safe: { kind: n },
                  sensitive: { error: e },
                });
              }));
          };
        return (
          (async () => {
            try {
              if (((o = await u(r)), c)) {
                d();
                return;
              }
              ((l = document.createElement(`webview`)),
                (l.className = `no-drag h-full w-full bg-token-main-surface-primary`),
                l.setAttribute(`aria-label`, s),
                l.setAttribute(`partition`, a.partition),
                l.setAttribute(`src`, a.url),
                e.append(l));
            } catch (e) {
              let t = e;
              k.error(`Failed to mount browser settings webview`, {
                safe: { kind: n },
                sensitive: { error: t },
              });
            }
          })(),
          () => {
            ((c = !0), l?.remove(), l != null && dt(l), d());
          }
        );
      }),
      (t[5] = n),
      (t[6] = u),
      (t[7] = a.partition),
      (t[8] = a.url),
      (t[9] = s),
      (t[10] = d))
    : (d = t[10]);
  let f;
  (t[11] !== n || t[12] !== a || t[13] !== s
    ? ((f = [n, a, s]), (t[11] = n), (t[12] = a), (t[13] = s), (t[14] = f))
    : (f = t[14]),
    (0, Z.useLayoutEffect)(d, f));
  let p, m;
  (t[15] !== n || t[16] !== c
    ? ((p = () => {
        let e = window.electronBridge?.sendMessageFromView;
        e?.({ themeVariant: c, type: `browser-settings-webview-theme-changed` }).catch((e) => {
          k.warning(`Failed to sync browser settings webview theme`, {
            safe: { kind: n },
            sensitive: { error: e },
          });
        });
      }),
      (m = [n, c]),
      (t[15] = n),
      (t[16] = c),
      (t[17] = p),
      (t[18] = m))
    : ((p = t[17]), (m = t[18])),
    (0, Z.useLayoutEffect)(p, m));
  let h;
  return (
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, Q.jsxs)(`div`, {
          className: `main-surface flex h-full min-h-0 flex-col overflow-hidden`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `relative flex h-toolbar shrink-0 items-center border-b border-token-border px-panel`,
              children: [
                (0, Q.jsx)(`div`, { "aria-hidden": !0, className: `draggable absolute inset-0` }),
                (0, Q.jsx)(ut, {}),
              ],
            }),
            (0, Q.jsx)(`div`, {
              ref: i,
              className: `no-drag min-h-0 w-full flex-1 bg-token-main-surface-primary`,
            }),
          ],
        })),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function ut() {
  let e = (0, X.c)(17),
    t = M(),
    n = ee(),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = t.formatMessage({
        id: `settings.browserUse.browserSettings.breadcrumb.ariaLabel`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for embedded browser settings breadcrumbs`,
      })),
      (e[0] = t),
      (e[1] = r));
  let i;
  e[2] === n
    ? (i = e[3])
    : ((i = () => {
        n(`/settings/general-settings`);
      }),
      (e[2] = n),
      (e[3] = i));
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(P, {
        id: `settings.browserUse.browserSettings.breadcrumb.settings`,
        defaultMessage: `Settings`,
        description: `Settings breadcrumb label for embedded browser settings`,
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === i
    ? (o = e[6])
    : ((o = (0, Q.jsx)(`button`, {
        className: `cursor-interaction rounded-sm hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border`,
        onClick: i,
        type: `button`,
        children: a,
      })),
      (e[5] = i),
      (e[6] = o));
  let s;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(Oe, { className: `icon-xs text-token-text-secondary` })), (e[7] = s))
    : (s = e[7]);
  let c;
  e[8] === n
    ? (c = e[9])
    : ((c = () => {
        n(`/settings/browser-use`);
      }),
      (e[8] = n),
      (e[9] = c));
  let l;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(P, {
        id: `settings.browserUse.browserSettings.breadcrumb.browser`,
        defaultMessage: `Browser`,
        description: `Browser breadcrumb label for embedded browser settings`,
      })),
      (e[10] = l))
    : (l = e[10]);
  let u;
  e[11] === c
    ? (u = e[12])
    : ((u = (0, Q.jsx)(`button`, {
        className: `cursor-interaction rounded-sm hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border`,
        onClick: c,
        type: `button`,
        children: l,
      })),
      (e[11] = c),
      (e[12] = u));
  let d;
  return (
    e[13] !== r || e[14] !== o || e[15] !== u
      ? ((d = (0, Q.jsxs)(`nav`, {
          "aria-label": r,
          className: `no-drag pointer-events-auto relative z-10 flex items-center gap-1 text-sm font-medium text-token-text-secondary`,
          children: [o, s, u],
        })),
        (e[13] = r),
        (e[14] = o),
        (e[15] = u),
        (e[16] = d))
      : (d = e[16]),
    d
  );
}
function dt(e) {
  ft(e) && e.destroy();
}
function ft(e) {
  return `destroy` in e && typeof e.destroy == `function`;
}
function pt() {
  let e = (0, X.c)(3),
    { selectedHostId: t } = G(),
    n = y(t).kind === `local`;
  if (!s.isInternal(ge()) || !n) return null;
  let r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(Y.Header, {
        title: (0, Q.jsx)(P, {
          id: `settings.browserUse.developerMode.title`,
          defaultMessage: `Developer mode`,
          description: `Title for full CDP developer mode settings`,
        }),
      })),
      (e[0] = r))
    : (r = e[0]);
  let i;
  return (
    e[1] === t
      ? (i = e[2])
      : ((i = (0, Q.jsx)(_e, {
          electron: !0,
          children: (0, Q.jsxs)(Y, {
            children: [
              r,
              (0, Q.jsx)(Y.Content, {
                children: (0, Q.jsx)(J, { children: (0, Q.jsx)(mt, { hostId: t }) }),
              }),
            ],
          }),
        })),
        (e[1] = t),
        (e[2] = i)),
    i
  );
}
function mt(e) {
  let t = (0, X.c)(22),
    { hostId: n } = e,
    r = M(),
    { data: i, isLoading: a } = T(K),
    o;
  t[0] === n ? (o = t[1]) : ((o = { hostId: n }), (t[0] = n), (t[1] = o));
  let { data: s, isPending: c } = E(te, o),
    l;
  t[2] === n ? (l = t[3]) : ((l = { hostId: n }), (t[2] = n), (t[3] = l));
  let u = Je(l),
    d = s?.requirements?.featureRequirements?.[rt] === !1,
    f = a || c,
    p = i?.fullCdpAccessEnabled === !0 && !f && !d,
    m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, Q.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-token-editor-warning-foreground`,
            children: [
              (0, Q.jsx)(Le, { className: `icon-xs shrink-0` }),
              (0, Q.jsx)(P, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, Q.jsx)(`span`, {
            children: (0, Q.jsx)(P, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(`div`, {
        children: (0, Q.jsx)(P, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow Codex to use full Chrome DevTools Protocol access in connected Browser Use sessions. Full CDP access lets Codex inspect and control sensitive browser internals that standard access cannot reach.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] === d
    ? (g = t[7])
    : ((g = d
        ? (0, Q.jsx)(`div`, {
            children: (0, Q.jsx)(P, {
              id: `settings.browserUse.fullCdp.disabledByPolicy`,
              defaultMessage: `Your organization has disabled this setting`,
              description: `Message shown when full CDP developer mode is disabled by policy`,
            }),
          })
        : null),
      (t[6] = d),
      (t[7] = g));
  let _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [h, g] })),
      (t[8] = g),
      (t[9] = _));
  let v;
  t[10] === r
    ? (v = t[11])
    : ((v = r.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[10] = r),
      (t[11] = v));
  let y = f || d || u.isPending,
    b;
  t[12] === u
    ? (b = t[13])
    : ((b = (e) => {
        u.mutate(e);
      }),
      (t[12] = u),
      (t[13] = b));
  let x;
  t[14] !== p || t[15] !== v || t[16] !== y || t[17] !== b
    ? ((x = (0, Q.jsx)(Ie, { ariaLabel: v, checked: p, disabled: y, onChange: b })),
      (t[14] = p),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x))
    : (x = t[18]);
  let S;
  return (
    t[19] !== x || t[20] !== _
      ? ((S = (0, Q.jsx)(q, { label: m, description: _, control: x })),
        (t[19] = x),
        (t[20] = _),
        (t[21] = S))
      : (S = t[21]),
    S
  );
}
function ht(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDomains.title`,
            defaultMessage: `Allowed domains`,
            description: `Title for browser allowed domains list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDomains.title`,
            defaultMessage: `Blocked domains`,
            description: `Title for browser blocked domains list`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.title`,
            defaultMessage: `Allowed download domains`,
            description: `Title for browser allowed download domains list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.title`,
            defaultMessage: `Blocked download domains`,
            description: `Title for browser blocked download domains list`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.title`,
            defaultMessage: `Allowed upload domains`,
            description: `Title for browser allowed upload domains list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.title`,
            defaultMessage: `Blocked upload domains`,
            description: `Title for browser blocked upload domains list`,
          });
  }
}
function gt(e, t, n) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDomains.subtitle`,
            defaultMessage: `Domains that open without asking`,
            description: `Subtitle for browser allowed domains list`,
          })
        : n === `googleChrome`
          ? (0, Q.jsx)(P, {
              id: `settings.browserUse.blockedDomains.chromeSubtitle`,
              defaultMessage: `Codex will never open these sites in your browser`,
              description: `Subtitle for browser blocked domains list on Google Chrome settings`,
            })
          : (0, Q.jsx)(P, {
              id: `settings.browserUse.blockedDomains.subtitle`,
              defaultMessage: `Codex will never open these sites`,
              description: `Subtitle for browser blocked domains list`,
            });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.subtitle`,
            defaultMessage: `Domains that can download files without asking`,
            description: `Subtitle for browser allowed download domains list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.subtitle`,
            defaultMessage: `Codex will never download files from these sites`,
            description: `Subtitle for browser blocked download domains list`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.subtitle`,
            defaultMessage: `Domains that can receive file uploads without asking`,
            description: `Subtitle for browser allowed upload domains list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.subtitle`,
            defaultMessage: `Codex will never upload files to these sites`,
            description: `Subtitle for browser blocked upload domains list`,
          });
  }
}
function _t(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDomains.added`,
            defaultMessage: `Allowed domain added`,
            description: `Toast shown after adding an allowed browser domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDomains.added`,
            defaultMessage: `Blocked domain added`,
            description: `Toast shown after adding a blocked browser domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.added`,
            defaultMessage: `Allowed download domain added`,
            description: `Toast shown after adding an allowed browser download domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.added`,
            defaultMessage: `Blocked download domain added`,
            description: `Toast shown after adding a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.added`,
            defaultMessage: `Allowed upload domain added`,
            description: `Toast shown after adding an allowed browser upload domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.added`,
            defaultMessage: `Blocked upload domain added`,
            description: `Toast shown after adding a blocked browser upload domain`,
          });
  }
}
function vt(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedWebsites.saved`,
            defaultMessage: `Allowed domain removed`,
            description: `Toast shown after removing an allowed browser domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.deniedWebsites.saved`,
            defaultMessage: `Blocked domain removed`,
            description: `Toast shown after removing a blocked browser domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.removed`,
            defaultMessage: `Allowed download domain removed`,
            description: `Toast shown after removing an allowed browser download domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.removed`,
            defaultMessage: `Blocked download domain removed`,
            description: `Toast shown after removing a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.removed`,
            defaultMessage: `Allowed upload domain removed`,
            description: `Toast shown after removing an allowed browser upload domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.removed`,
            defaultMessage: `Blocked upload domain removed`,
            description: `Toast shown after removing a blocked browser upload domain`,
          });
  }
}
function yt(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDomains.addDialogTitle`,
            defaultMessage: `Add allowed domain`,
            description: `Title for dialog adding an allowed browser use domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDomains.addDialogTitle`,
            defaultMessage: `Add blocked domain`,
            description: `Title for dialog adding a blocked browser use domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.addDialogTitle`,
            defaultMessage: `Add allowed download domain`,
            description: `Title for dialog adding an allowed browser download domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.addDialogTitle`,
            defaultMessage: `Add blocked download domain`,
            description: `Title for dialog adding a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.addDialogTitle`,
            defaultMessage: `Add allowed upload domain`,
            description: `Title for dialog adding an allowed browser upload domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.addDialogTitle`,
            defaultMessage: `Add blocked upload domain`,
            description: `Title for dialog adding a blocked browser upload domain`,
          });
  }
}
function bt(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex can open this URL without asking first`,
            description: `Subtitle for dialog adding an allowed browser use domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex will not open this URL`,
            description: `Subtitle for dialog adding a blocked browser use domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex can download files from this URL without asking first`,
            description: `Subtitle for dialog adding an allowed browser download domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex will not download files from this URL`,
            description: `Subtitle for dialog adding a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex can upload files to this URL without asking first`,
            description: `Subtitle for dialog adding an allowed browser upload domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex will not upload files to this URL`,
            description: `Subtitle for dialog adding a blocked browser upload domain`,
          });
  }
}
function xt(e, t, n) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedWebsites.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from allowed domains?`,
            description: `Title for dialog confirming removal of an allowed browser domain`,
            values: { origin: n },
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.deniedWebsites.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from blocked domains?`,
            description: `Title for dialog confirming removal of a blocked browser domain`,
            values: { origin: n },
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from allowed download domains?`,
            description: `Title for dialog confirming removal of an allowed browser download domain`,
            values: { origin: n },
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from blocked download domains?`,
            description: `Title for dialog confirming removal of a blocked browser download domain`,
            values: { origin: n },
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from allowed upload domains?`,
            description: `Title for dialog confirming removal of an allowed browser upload domain`,
            values: { origin: n },
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from blocked upload domains?`,
            description: `Title for dialog confirming removal of a blocked browser upload domain`,
            values: { origin: n },
          });
  }
}
function St(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedWebsites.removeDialogSubtitle`,
            defaultMessage: `Codex will ask before opening this domain`,
            description: `Subtitle for dialog confirming removal of an allowed browser domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.deniedWebsites.removeDialogSubtitle`,
            defaultMessage: `Codex can ask again before opening this domain`,
            description: `Subtitle for dialog confirming removal of a blocked browser domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex will ask before downloading files from this domain`,
            description: `Subtitle for dialog confirming removal of an allowed browser download domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex can ask again before downloading files from this domain`,
            description: `Subtitle for dialog confirming removal of a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex will ask before uploading files to this domain`,
            description: `Subtitle for dialog confirming removal of an allowed browser upload domain`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex can ask again before uploading files to this domain`,
            description: `Subtitle for dialog confirming removal of a blocked browser upload domain`,
          });
  }
}
function Ct(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDomains.emptyTitle`,
            defaultMessage: `No allowed domains`,
            description: `Empty state title for browser allowed domain list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDomains.emptyTitle`,
            defaultMessage: `No blocked domains`,
            description: `Empty state title for browser blocked domain list`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedDownloadDomains.emptyTitle`,
            defaultMessage: `No allowed download domains`,
            description: `Empty state title for browser allowed download domain list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedDownloadDomains.emptyTitle`,
            defaultMessage: `No blocked download domains`,
            description: `Empty state title for browser blocked download domain list`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.allowedUploadDomains.emptyTitle`,
            defaultMessage: `No allowed upload domains`,
            description: `Empty state title for browser allowed upload domain list`,
          })
        : (0, Q.jsx)(P, {
            id: `settings.browserUse.blockedUploadDomains.emptyTitle`,
            defaultMessage: `No blocked upload domains`,
            description: `Empty state title for browser blocked upload domain list`,
          });
  }
}
function wt(e) {
  let t = (0, X.c)(57),
    {
      emptyStateTitle: n,
      installButtonLabel: r,
      items: i,
      pluginsQuery: a,
      selectedHostId: o,
      unavailableItems: s,
    } = e,
    c;
  t[0] === s ? (c = t[1]) : ((c = s === void 0 ? [] : s), (t[0] = s), (t[1] = c));
  let l = c,
    u = ee(),
    d;
  t[2] !== a.forceReload || t[3] !== o
    ? ((d = { forceReloadPlugins: a.forceReload, hostId: o }),
      (t[2] = a.forceReload),
      (t[3] = o),
      (t[4] = d))
    : (d = t[4]);
  let {
      closePluginInstall: f,
      connectRequiredApp: p,
      handleRequiredAppConnected: m,
      handleRequiredAppOAuthStarted: h,
      installPlugin: g,
      isInstalling: _,
      openPluginInstall: v,
      session: y,
    } = Se(d),
    b;
  t[5] === o ? (b = t[6]) : ((b = { hostId: o }), (t[5] = o), (t[6] = b));
  let { pendingPluginId: x, setPluginEnabled: S } = Xe(b),
    C;
  t[7] === o ? (C = t[8]) : ((C = { hostId: o }), (t[7] = o), (t[8] = C));
  let { pendingUninstallPluginId: w, uninstallPlugin: T } = Ye(C),
    [E, D] = (0, Z.useState)(null),
    O = _ && y.kind !== `closed` ? y.plugin.plugin.id : null,
    k = x ?? O ?? w,
    A = i.length + l.length;
  if (a.isLoading && A === 0) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`div`, {
            className: `flex min-h-[62px] items-center justify-center rounded-lg border border-token-border text-token-text-secondary`,
            children: (0, Q.jsx)(ce, { className: `icon-xs` }),
          })),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (a.errorMessage != null) {
    let e;
    return (
      t[10] === a.errorMessage
        ? (e = t[11])
        : ((e = (0, Q.jsx)(J, {
            children: (0, Q.jsx)(`div`, {
              className: `p-4 text-sm text-token-text-secondary`,
              children: a.errorMessage,
            }),
          })),
          (t[10] = a.errorMessage),
          (t[11] = e)),
      e
    );
  }
  if (A === 0) {
    let e;
    return (
      t[12] === n
        ? (e = t[13])
        : ((e = (0, Q.jsx)(J, { children: (0, Q.jsx)(Ze, { children: n }) })),
          (t[12] = n),
          (t[13] = e)),
      e
    );
  }
  let j;
  if (
    t[14] !== r ||
    t[15] !== i ||
    t[16] !== u ||
    t[17] !== v ||
    t[18] !== k ||
    t[19] !== o ||
    t[20] !== S
  ) {
    let e;
    (t[22] !== r || t[23] !== u || t[24] !== v || t[25] !== k || t[26] !== o || t[27] !== S
      ? ((e = (e) =>
          (0, Q.jsx)(
            Ot,
            {
              installButtonLabel: r,
              isPending: k === e.plugin.plugin.id,
              item: e,
              onInstallPlugin: v,
              onOpenPluginDetails: (e) => {
                u(be(e, { hostId: o }));
              },
              onToggleInstalledPluginEnabled: (e, t) => {
                S({ pluginId: e.plugin.id, pluginDisplayName: H(e), enabled: t });
              },
              onUninstallPlugin: D,
            },
            e.plugin.plugin.id,
          )),
        (t[22] = r),
        (t[23] = u),
        (t[24] = v),
        (t[25] = k),
        (t[26] = o),
        (t[27] = S),
        (t[28] = e))
      : (e = t[28]),
      (j = i.map(e)),
      (t[14] = r),
      (t[15] = i),
      (t[16] = u),
      (t[17] = v),
      (t[18] = k),
      (t[19] = o),
      (t[20] = S),
      (t[21] = j));
  } else j = t[21];
  let M;
  t[29] === l ? (M = t[30]) : ((M = l.map(Tt)), (t[29] = l), (t[30] = M));
  let N;
  t[31] !== j || t[32] !== M
    ? ((N = (0, Q.jsxs)(J, { className: `overflow-hidden`, children: [j, M] })),
      (t[31] = j),
      (t[32] = M),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] !== u || t[35] !== o
    ? ((P = (e) => {
        u(be(e, { hostId: o }));
      }),
      (t[34] = u),
      (t[35] = o),
      (t[36] = P))
    : (P = t[36]);
  let F;
  t[37] === f
    ? (F = t[38])
    : ((F = (e) => {
        e || f();
      }),
      (t[37] = f),
      (t[38] = F));
  let I;
  t[39] !== p ||
  t[40] !== m ||
  t[41] !== h ||
  t[42] !== g ||
  t[43] !== _ ||
  t[44] !== y ||
  t[45] !== o ||
  t[46] !== F ||
  t[47] !== P
    ? ((I = (0, Q.jsx)(xe, {
        hostId: o,
        isInstalling: _,
        onConnectRequiredApp: p,
        onInstall: g,
        onRequiredAppConnected: m,
        onRequiredAppOAuthStarted: h,
        onViewDetails: P,
        onOpenChange: F,
        session: y,
      })),
      (t[39] = p),
      (t[40] = m),
      (t[41] = h),
      (t[42] = g),
      (t[43] = _),
      (t[44] = y),
      (t[45] = o),
      (t[46] = F),
      (t[47] = P),
      (t[48] = I))
    : (I = t[48]);
  let L;
  t[49] !== w || t[50] !== E || t[51] !== T
    ? ((L =
        E == null
          ? null
          : (0, Q.jsx)(nt, {
              isUninstalling: w === E.plugin.id,
              open: !0,
              pluginDisplayName: H(E),
              onConfirm: async () => {
                (await T({
                  marketplaceName: E.marketplaceName,
                  pluginDisplayName: H(E),
                  pluginId: E.plugin.id,
                  pluginName: E.plugin.name,
                  requestPluginId: me(E),
                }),
                  D(null));
              },
              onOpenChange: (e) => {
                e || D(null);
              },
            })),
      (t[49] = w),
      (t[50] = E),
      (t[51] = T),
      (t[52] = L))
    : (L = t[52]);
  let R;
  return (
    t[53] !== I || t[54] !== L || t[55] !== N
      ? ((R = (0, Q.jsxs)(Q.Fragment, { children: [N, I, L] })),
        (t[53] = I),
        (t[54] = L),
        (t[55] = N),
        (t[56] = R))
      : (R = t[56]),
    R
  );
}
function Tt(e) {
  return (0, Q.jsx)(Et, { item: e }, e.id);
}
function Et(e) {
  let t = (0, X.c)(21),
    { item: n } = e,
    r = M(),
    i;
  t[0] === n.icon
    ? (i = t[1])
    : ((i = n.icon ?? (0, Q.jsx)(le, { className: `icon-md text-token-text-secondary` })),
      (t[0] = n.icon),
      (t[1] = i));
  let a;
  t[2] === i
    ? (a = t[3])
    : ((a = (0, Q.jsx)(`span`, {
        className: `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border-default bg-transparent`,
        children: i,
      })),
      (t[2] = i),
      (t[3] = a));
  let o;
  t[4] === n.title
    ? (o = t[5])
    : ((o = (0, Q.jsx)(`span`, {
        className: `truncate font-medium text-token-foreground`,
        children: n.title,
      })),
      (t[4] = n.title),
      (t[5] = o));
  let s;
  t[6] === n.description
    ? (s = t[7])
    : ((s =
        n.description == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `min-w-0 truncate text-sm leading-relaxed text-token-text-secondary`,
              children: n.description,
            })),
      (t[6] = n.description),
      (t[7] = s));
  let c;
  t[8] !== o || t[9] !== s
    ? ((c = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 flex-col gap-0.5`,
        children: [o, s],
      })),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c))
    : (c = t[10]);
  let l;
  t[11] !== a || t[12] !== c
    ? ((l = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-center gap-3`,
        children: [a, c],
      })),
      (t[11] = a),
      (t[12] = c),
      (t[13] = l))
    : (l = t[13]);
  let u;
  t[14] === r
    ? (u = t[15])
    : ((u = r.formatMessage({
        id: `settings.pluginControls.unavailableToggleAria`,
        defaultMessage: `Unavailable plugin toggle`,
        description: `Accessible label for the disabled toggle shown for unavailable plugins in settings`,
      })),
      (t[14] = r),
      (t[15] = u));
  let d;
  t[16] === u
    ? (d = t[17])
    : ((d = (0, Q.jsx)(Ie, { ariaLabel: u, checked: !1, disabled: !0, onChange: Dt })),
      (t[16] = u),
      (t[17] = d));
  let f;
  return (
    t[18] !== l || t[19] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
          className: `flex min-h-[60px] items-center gap-3 p-2.5 text-sm opacity-60 max-sm:flex-wrap`,
          children: [l, d],
        })),
        (t[18] = l),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function Dt() {}
function Ot(e) {
  let t = (0, X.c)(41),
    {
      installButtonLabel: n,
      isPending: r,
      item: i,
      onInstallPlugin: a,
      onOpenPluginDetails: o,
      onToggleInstalledPluginEnabled: s,
      onUninstallPlugin: c,
    } = e,
    l = M(),
    u,
    d,
    f,
    p,
    m;
  if (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c
  ) {
    let e = H(i.plugin),
      h = i.plugin.plugin.installed;
    p = `group flex min-h-[60px] items-center gap-3 p-2.5 text-sm hover:bg-token-foreground/5 max-sm:flex-wrap`;
    let g;
    t[13] !== i.plugin || t[14] !== o
      ? ((g = () => {
          o(i.plugin);
        }),
        (t[13] = i.plugin),
        (t[14] = o),
        (t[15] = g))
      : (g = t[15]);
    let _ = i.showIconBorder === !1 ? `border-0` : `border border-token-border-default`,
      v;
    t[16] === _
      ? (v = t[17])
      : ((v = C(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          _,
        )),
        (t[16] = _),
        (t[17] = v));
    let y =
        i.icon ??
        (0, Q.jsx)(ne, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoUrl: i.plugin.logoPath,
          fallback: (0, Q.jsx)(le, { className: `icon-md text-token-text-secondary` }),
        }),
      b;
    t[18] !== v || t[19] !== y
      ? ((b = (0, Q.jsx)(`span`, { className: v, children: y })),
        (t[18] = v),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]);
    let x;
    t[21] === i.title
      ? (x = t[22])
      : ((x = (0, Q.jsx)(`div`, {
          className: `truncate font-medium text-token-foreground`,
          children: i.title,
        })),
        (t[21] = i.title),
        (t[22] = x));
    let S;
    t[23] !== i.description || t[24] !== i.descriptionIndicator
      ? ((S =
          i.description == null
            ? null
            : (0, Q.jsx)(`div`, {
                className: `min-w-0 truncate text-sm leading-relaxed text-token-text-secondary`,
                children:
                  i.descriptionIndicator == null
                    ? i.description
                    : (0, Q.jsxs)(`span`, {
                        className: `inline-flex max-w-full items-center gap-2`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: C(
                              `h-2 w-2 shrink-0 rounded-full`,
                              i.descriptionIndicator === `success`
                                ? `bg-[var(--color-icon-success)]`
                                : `bg-[var(--color-icon-error)]`,
                            ),
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `min-w-0 truncate`,
                            children: i.description,
                          }),
                        ],
                      }),
              })),
        (t[23] = i.description),
        (t[24] = i.descriptionIndicator),
        (t[25] = S))
      : (S = t[25]);
    let w;
    (t[26] !== x || t[27] !== S
      ? ((w = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [x, S],
        })),
        (t[26] = x),
        (t[27] = S),
        (t[28] = w))
      : (w = t[28]),
      t[29] !== b || t[30] !== w || t[31] !== g
        ? ((m = (0, Q.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-left text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
            type: `button`,
            onClick: g,
            children: [b, w],
          })),
          (t[29] = b),
          (t[30] = w),
          (t[31] = g),
          (t[32] = m))
        : (m = t[32]),
      (u = `flex shrink-0 items-center gap-2`),
      (d = i.action),
      (f = h
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              i.showManageActions === !0
                ? (0, Q.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, Q.jsxs)(W, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, Q.jsx)(Be, {
                        label: l.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        i.onTryInChat == null
                          ? null
                          : (0, Q.jsx)(U.Item, {
                              LeftIcon: ue,
                              leftIconClassName: `icon-xs`,
                              onSelect: () => {
                                i.onTryInChat?.(i.plugin);
                              },
                              children: (0, Q.jsx)(P, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try it now`,
                                description: `Menu item label for trying a plugin in chat from settings`,
                              }),
                            }),
                        (0, Q.jsx)(U.Item, {
                          LeftIcon: Me,
                          className: `!text-token-error-foreground`,
                          leftIconClassName: `icon-xs text-token-error-foreground`,
                          disabled: r,
                          onSelect: () => {
                            c(i.plugin);
                          },
                          children: (0, Q.jsx)(P, {
                            id: `settings.pluginControls.delete`,
                            defaultMessage: `Delete`,
                            description: `Menu item label for deleting a plugin from settings`,
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
              (0, Q.jsx)(re, {
                tooltipContent: i.plugin.plugin.enabled
                  ? (0, Q.jsx)(P, {
                      id: `settings.pluginControls.disableToggleTooltip`,
                      defaultMessage: `Disable {pluginName}`,
                      description: `Tooltip label for disabling a plugin from settings`,
                      values: { pluginName: e },
                    })
                  : (0, Q.jsx)(P, {
                      id: `settings.pluginControls.enableToggleTooltip`,
                      defaultMessage: `Enable {pluginName}`,
                      description: `Tooltip label for enabling a plugin from settings`,
                      values: { pluginName: e },
                    }),
                children: (0, Q.jsx)(Ie, {
                  checked: i.plugin.plugin.enabled,
                  disabled: r,
                  ariaLabel: l.formatMessage(
                    {
                      id: `settings.pluginControls.toggleAria`,
                      defaultMessage: `Toggle {pluginName}`,
                      description: `Accessible label for toggling a plugin from settings`,
                    },
                    { pluginName: e },
                  ),
                  onChange: (e) => {
                    s(i.plugin, e);
                  },
                }),
              }),
            ],
          })
        : (0, Q.jsx)(re, {
            tooltipContent: (0, Q.jsx)(P, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, Q.jsx)(`div`, {
              children: (0, Q.jsx)(B, {
                "aria-label": l.formatMessage(
                  {
                    id: `settings.pluginControls.installTooltip`,
                    defaultMessage: `Install {pluginName}`,
                    description: `Tooltip label for installing a plugin from settings`,
                  },
                  { pluginName: e },
                ),
                color: `secondary`,
                disabled: r,
                loading: r,
                onClick: () => {
                  a(i.plugin);
                },
                size: `toolbar`,
                children: n,
              }),
            }),
          })),
      (t[0] = n),
      (t[1] = l),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  } else ((u = t[8]), (d = t[9]), (f = t[10]), (p = t[11]), (m = t[12]));
  let h;
  t[33] !== u || t[34] !== d || t[35] !== f
    ? ((h = (0, Q.jsxs)(`div`, { className: u, children: [d, f] })),
      (t[33] = u),
      (t[34] = d),
      (t[35] = f),
      (t[36] = h))
    : (h = t[36]);
  let g;
  return (
    t[37] !== p || t[38] !== m || t[39] !== h
      ? ((g = (0, Q.jsxs)(`div`, { className: p, children: [m, h] })),
        (t[37] = p),
        (t[38] = m),
        (t[39] = h),
        (t[40] = g))
      : (g = t[40]),
    g
  );
}
function kt(e, t, r) {
  let a = e.filter((e) => e.plugin.name === t || e.plugin.id.split(`@`)[0] === t),
    o = i(ge());
  return (
    (o == null ? void 0 : a.find((e) => e.marketplaceName === o)) ??
    a.find((e) => n(e.marketplaceName)) ??
    a.find((e) => e.marketplaceName === `openai-curated`) ??
    a.find((e) => Fe(r, e.marketplacePath)) ??
    null
  );
}
var At = `browser-browsing-data-options`,
  jt = [`cookies`, `siteData`, `cache`],
  Mt = D(ie, null);
function Nt() {
  let e = (0, X.c)(14),
    t = w(ie),
    n = T(Mt),
    r = Bt(),
    { selectedHostId: i } = G(),
    a;
  e[0] === i ? (a = e[1]) : ((a = { hostId: i }), (e[0] = i), (e[1] = a));
  let o = Ht(a),
    s;
  e[2] === i ? (s = e[3]) : ((s = { hostId: i }), (e[2] = i), (e[3] = s));
  let c = pe(s);
  if (r != null) {
    let i = o[r],
      a = i.isLoading && n === r;
    if (!i.enabled && !a) {
      if (i.isLoading) {
        let t;
        return (
          e[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((t = (0, Q.jsx)(Q.Fragment, {})), (e[4] = t))
            : (t = e[4]),
          t
        );
      }
      let t;
      return (
        e[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, Q.jsx)(F, { to: `/settings/browser-use`, replace: !0 })), (e[5] = t))
          : (t = e[5]),
        t
      );
    }
    n !== r && t.set(Mt, r);
    let s;
    return (e[6] === r ? (s = e[7]) : ((s = Vt(r)), (e[6] = r), (e[7] = s)), s);
  }
  n != null && t.set(Mt, null);
  let l;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(P, {
        id: `settings.browserUse.title`,
        defaultMessage: `Browser`,
        description: `Title for in-app browser settings`,
      })),
      (e[8] = l))
    : (l = e[8]);
  let u;
  e[9] === c.available
    ? (u = e[10])
    : ((u = c.available
        ? (0, Q.jsx)(P, {
            id: `settings.browserUse.subtitle`,
            defaultMessage: `Manage Codex's browser. Google Chrome can be set up in <computerUseSettingsLink>computer use settings</computerUseSettingsLink>`,
            description: `Subtitle for in-app browser settings`,
            values: { computerUseSettingsLink: Pt },
          })
        : void 0),
      (e[9] = c.available),
      (e[10] = u));
  let d;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(Ft, {})), (e[11] = d))
    : (d = e[11]);
  let f;
  return (
    e[12] === u
      ? (f = e[13])
      : ((f = (0, Q.jsx)(ze, {
          title: l,
          subtitle: u,
          subtitleClassName: `text-pretty`,
          children: d,
        })),
        (e[12] = u),
        (e[13] = f)),
    f
  );
}
function Pt(e) {
  return (0, Q.jsx)(I, {
    className: `text-token-text-link-foreground hover:underline`,
    to: `/settings/computer-use`,
    children: e,
  });
}
function Ft() {
  let e = (0, X.c)(41),
    { selectedHostId: t } = G(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = []), (e[0] = n)) : (n = e[0]);
  let r = he(t, n),
    i = Qe(t),
    a;
  e[1] !== i || e[2] !== r.availablePlugins
    ? ((a = kt(r.availablePlugins, f, i)), (e[1] = i), (e[2] = r.availablePlugins), (e[3] = a))
    : (a = e[3]);
  let o = a,
    s;
  e[4] === o ? (s = e[5]) : ((s = o == null ? [] : [o]), (e[4] = o), (e[5] = s));
  let c = s,
    l;
  e[6] === t
    ? (l = e[7])
    : ((l = { featureName: `in_app_browser`, hostId: t }), (e[6] = t), (e[7] = l));
  let u = de(l),
    d;
  e[8] === t ? (d = e[9]) : ((d = { hostId: t }), (e[8] = t), (e[9] = d));
  let p = Ht(d),
    m;
  e[10] === t ? (m = e[11]) : ((m = { hostId: t }), (e[10] = t), (e[11] = m));
  let h = fe(m),
    g;
  e[12] === t ? (g = e[13]) : ((g = { hostId: t }), (e[12] = t), (e[13] = g));
  let _ = pe(g),
    v = u.enabled && !u.isLoading,
    y = p.passwordManager.enabled,
    b = p.siteSettings.enabled,
    x = p.extensions.enabled,
    S = h.available || _.available,
    C = b || S,
    w;
  e[14] !== o || e[15] !== h
    ? ((w =
        o == null && tn(h)
          ? [
              {
                description: (0, Q.jsx)(P, { ...ae.restrictedAvailabilityDescription }),
                icon: (0, Q.jsx)($e, { className: `h-full w-full text-token-foreground` }),
                id: `browser-use-unavailable`,
                title: (0, Q.jsx)(P, { ...ae.label }),
              },
            ]
          : []),
      (e[14] = o),
      (e[15] = h),
      (e[16] = w))
    : (w = e[16]);
  let T = w,
    E;
  e[17] !== c || e[18] !== r || e[19] !== t || e[20] !== T
    ? ((E = (0, Q.jsx)(Y, {
        children: (0, Q.jsx)(Y.Content, {
          children: (0, Q.jsx)(en, {
            browserUsePlugins: c,
            pluginsQuery: r,
            selectedHostId: t,
            unavailableBrowserUsePlugins: T,
          }),
        }),
      })),
      (e[17] = c),
      (e[18] = r),
      (e[19] = t),
      (e[20] = T),
      (e[21] = E))
    : (E = e[21]);
  let D;
  e[22] === y
    ? (D = e[23])
    : ((D = y
        ? (0, Q.jsxs)(Y, {
            children: [
              (0, Q.jsx)(Y.Header, {
                title: (0, Q.jsx)(P, {
                  id: `settings.browserUse.passwords.title`,
                  defaultMessage: `Passwords`,
                  description: `Title for browser password settings section`,
                }),
              }),
              (0, Q.jsx)(Y.Content, { children: (0, Q.jsx)(J, { children: (0, Q.jsx)(It, {}) }) }),
            ],
          })
        : null),
      (e[22] = y),
      (e[23] = D));
  let O;
  e[24] === x
    ? (O = e[25])
    : ((O = x
        ? (0, Q.jsxs)(Y, {
            children: [
              (0, Q.jsx)(Y.Header, {
                title: (0, Q.jsx)(P, {
                  id: `settings.browserUse.extensions.title`,
                  defaultMessage: `Extensions`,
                  description: `Title for browser extension settings section`,
                }),
              }),
              (0, Q.jsx)(Y.Content, { children: (0, Q.jsx)(J, { children: (0, Q.jsx)(Lt, {}) }) }),
            ],
          })
        : null),
      (e[24] = x),
      (e[25] = O));
  let k;
  e[26] === v
    ? (k = e[27])
    : ((k = v
        ? (0, Q.jsxs)(Y, {
            children: [
              (0, Q.jsx)(Y.Header, {
                title: (0, Q.jsx)(P, {
                  id: `settings.browserUse.browser.title`,
                  defaultMessage: `Data`,
                  description: `Title for browser data settings section`,
                }),
              }),
              (0, Q.jsx)(Y.Content, {
                children: (0, Q.jsxs)(J, { children: [(0, Q.jsx)(Kt, {}), (0, Q.jsx)(Gt, {})] }),
              }),
            ],
          })
        : null),
      (e[26] = v),
      (e[27] = k));
  let A;
  e[28] !== C || e[29] !== S || e[30] !== b
    ? ((A = C
        ? (0, Q.jsxs)(Y, {
            children: [
              (0, Q.jsx)(Y.Header, {
                title: (0, Q.jsx)(P, {
                  id: `settings.browserUse.permissions.title`,
                  defaultMessage: `Permissions`,
                  description: `Title for browser use permissions settings section`,
                }),
              }),
              (0, Q.jsx)(Y.Content, {
                children: (0, Q.jsxs)(J, {
                  children: [b ? (0, Q.jsx)(Rt, {}) : null, S ? (0, Q.jsx)(Qt, {}) : null],
                }),
              }),
            ],
          })
        : null),
      (e[28] = C),
      (e[29] = S),
      (e[30] = b),
      (e[31] = A))
    : (A = e[31]);
  let j;
  e[32] === S
    ? (j = e[33])
    : ((j = S
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)($, { kind: `denied` }),
              (0, Q.jsx)($, { kind: `allowed` }),
              (0, Q.jsx)(pt, {}),
            ],
          })
        : null),
      (e[32] = S),
      (e[33] = j));
  let M;
  return (
    e[34] !== O || e[35] !== k || e[36] !== A || e[37] !== j || e[38] !== E || e[39] !== D
      ? ((M = (0, Q.jsxs)(Q.Fragment, { children: [E, D, O, k, A, j] })),
        (e[34] = O),
        (e[35] = k),
        (e[36] = A),
        (e[37] = j),
        (e[38] = E),
        (e[39] = D),
        (e[40] = M))
      : (M = e[40]),
    M
  );
}
function It() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(zt, {
          description: (0, Q.jsx)(P, {
            id: `settings.browserUse.passwordManager.description`,
            defaultMessage: `Add, delete and edit saved passwords`,
            description: `Description for browser password manager settings row`,
          }),
          label: (0, Q.jsx)(P, {
            id: `settings.browserUse.passwordManager.label`,
            defaultMessage: `Password manager`,
            description: `Label for browser password manager settings row`,
          }),
          path: u,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Lt() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(zt, {
          description: (0, Q.jsx)(P, {
            id: `settings.browserUse.extensions.description`,
            defaultMessage: `Install, remove and configure browser extensions`,
            description: `Description for browser extension settings row`,
          }),
          label: (0, Q.jsx)(P, {
            id: `settings.browserUse.extensions.label`,
            defaultMessage: `Extension manager`,
            description: `Label for browser extension settings row`,
          }),
          path: p,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Rt() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(zt, {
          description: (0, Q.jsx)(P, {
            id: `settings.browserUse.siteSettings.description`,
            defaultMessage: `Control camera and microphone permissions in Codex's browser`,
            description: `Description for browser site settings row`,
          }),
          label: (0, Q.jsx)(P, {
            id: `settings.browserUse.siteSettings.label`,
            defaultMessage: `Site settings`,
            description: `Label for browser site settings row`,
          }),
          path: d,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function zt(e) {
  let t = (0, X.c)(10),
    { description: n, label: r, path: i } = e,
    a = ee(),
    o;
  t[0] !== a || t[1] !== i
    ? ((o = () => {
        a(i);
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(P, {
        id: `settings.browserUse.browserSettings.manage`,
        defaultMessage: `Manage`,
        description: `Button label for browser settings row`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = (0, Q.jsx)(B, { color: `secondary`, onClick: o, size: `toolbar`, children: s })),
      (t[4] = o),
      (t[5] = c));
  let l;
  return (
    t[6] !== n || t[7] !== r || t[8] !== c
      ? ((l = (0, Q.jsx)(q, { label: r, description: n, control: c })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Bt() {
  let e = L(p) != null,
    t = L(u) != null,
    n = L(d) != null;
  return e ? `extensions` : t ? `passwordManager` : n ? `siteSettings` : null;
}
function Vt(e) {
  switch (e) {
    case `extensions`:
      return (0, Q.jsx)(at, {});
    case `passwordManager`:
      return (0, Q.jsx)(ot, {});
    case `siteSettings`:
      return (0, Q.jsx)(st, {});
  }
}
function Ht(e) {
  let t = (0, X.c)(18),
    { hostId: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = de(r),
    a = Ut(),
    o;
  t[2] !== i || t[3] !== a.extensions.enabled || t[4] !== a.extensions.isLoading
    ? ((o = Wt({
        featureEnabled: a.extensions.enabled,
        isFeatureLoading: a.extensions.isLoading,
        inAppBrowser: i,
      })),
      (t[2] = i),
      (t[3] = a.extensions.enabled),
      (t[4] = a.extensions.isLoading),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== i || t[7] !== a.passwordManager.enabled || t[8] !== a.passwordManager.isLoading
    ? ((s = Wt({
        featureEnabled: a.passwordManager.enabled,
        isFeatureLoading: a.passwordManager.isLoading,
        inAppBrowser: i,
      })),
      (t[6] = i),
      (t[7] = a.passwordManager.enabled),
      (t[8] = a.passwordManager.isLoading),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] !== i || t[11] !== a.siteSettings.enabled || t[12] !== a.siteSettings.isLoading
    ? ((c = Wt({
        featureEnabled: a.siteSettings.enabled,
        isFeatureLoading: a.siteSettings.isLoading,
        inAppBrowser: i,
      })),
      (t[10] = i),
      (t[11] = a.siteSettings.enabled),
      (t[12] = a.siteSettings.isLoading),
      (t[13] = c))
    : (c = t[13]);
  let l;
  return (
    t[14] !== o || t[15] !== s || t[16] !== c
      ? ((l = { extensions: o, passwordManager: s, siteSettings: c }),
        (t[14] = o),
        (t[15] = s),
        (t[16] = c),
        (t[17] = l))
      : (l = t[17]),
    l
  );
}
function Ut() {
  let e = (0, X.c)(13),
    n = E(b, t),
    r = E(b, o),
    i = E(b, a),
    s = E(b, v),
    c = n.data === !0 && r.data === !0,
    l = n.isLoading || r.isLoading,
    u;
  e[0] !== c || e[1] !== l
    ? ((u = { enabled: c, isLoading: l }), (e[0] = c), (e[1] = l), (e[2] = u))
    : (u = e[2]);
  let d = n.data === !0 && i.data === !0,
    f = n.isLoading || i.isLoading,
    p;
  e[3] !== d || e[4] !== f
    ? ((p = { enabled: d, isLoading: f }), (e[3] = d), (e[4] = f), (e[5] = p))
    : (p = e[5]);
  let m = n.data === !0 && s.data === !0,
    h = n.isLoading || s.isLoading,
    g;
  e[6] !== m || e[7] !== h
    ? ((g = { enabled: m, isLoading: h }), (e[6] = m), (e[7] = h), (e[8] = g))
    : (g = e[8]);
  let _;
  return (
    e[9] !== u || e[10] !== p || e[11] !== g
      ? ((_ = { extensions: u, passwordManager: p, siteSettings: g }),
        (e[9] = u),
        (e[10] = p),
        (e[11] = g),
        (e[12] = _))
      : (_ = e[12]),
    _
  );
}
function Wt({ featureEnabled: e, inAppBrowser: t, isFeatureLoading: n }) {
  return { enabled: t.enabled && !t.isLoading && e, isLoading: t.isLoading || n };
}
function Gt() {
  let e = (0, X.c)(14),
    t = w(A),
    n = oe(r.annotationScreenshotsMode),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = {
        id: `always`,
        label: (0, Q.jsx)(P, {
          id: `settings.browserUse.browser.annotationScreenshots.always.label`,
          defaultMessage: `Always include`,
          description: `Label for always including browser annotation screenshots`,
        }),
      }),
      (e[0] = i))
    : (i = e[0]);
  let a;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = [
        i,
        {
          id: `necessary`,
          label: (0, Q.jsx)(P, {
            id: `settings.browserUse.browser.annotationScreenshots.necessary.label`,
            defaultMessage: `Only on drag selection`,
            description: `Label for including browser annotation screenshots only for drag-selected regions`,
          }),
        },
      ]),
      (e[1] = a))
    : (a = e[1]);
  let o = a,
    s;
  e[2] === n ? (s = e[3]) : ((s = o.find((e) => e.id === n) ?? o[0]), (e[2] = n), (e[3] = s));
  let c = s,
    l,
    u;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.annotationScreenshots.label`,
        defaultMessage: `Annotation screenshots`,
        description: `Label for browser annotation screenshots setting`,
      })),
      (u = (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.annotationScreenshots.description`,
        defaultMessage: `Screenshots help Codex better understand and address comments, but increase plan usage`,
        description: `Description for browser annotation screenshots setting`,
      })),
      (e[4] = l),
      (e[5] = u))
    : ((l = e[4]), (u = e[5]));
  let d;
  e[6] === c.label
    ? (d = e[7])
    : ((d = (0, Q.jsx)(Re, {
        className: `w-[168px]`,
        children: (0, Q.jsx)(`span`, { className: `truncate`, children: c.label }),
      })),
      (e[6] = c.label),
      (e[7] = d));
  let f;
  e[8] !== t || e[9] !== n
    ? ((f = (0, Q.jsx)(`div`, {
        className: `flex flex-col`,
        children: o.map((e) => {
          let i = e.id === n;
          return (0, Q.jsx)(
            U.Item,
            {
              allowWrap: !0,
              RightIcon: i ? De : void 0,
              onSelect: () => {
                se(t, r.annotationScreenshotsMode, e.id);
              },
              children: (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
            },
            e.id,
          );
        }),
      })),
      (e[8] = t),
      (e[9] = n),
      (e[10] = f))
    : (f = e[10]);
  let p;
  return (
    e[11] !== d || e[12] !== f
      ? ((p = (0, Q.jsx)(q, {
          label: l,
          description: u,
          control: (0, Q.jsx)(W, {
            contentWidth: `menuWide`,
            align: `end`,
            triggerButton: d,
            children: f,
          }),
        })),
        (e[11] = d),
        (e[12] = f),
        (e[13] = p))
      : (p = e[13]),
    p
  );
}
function Kt() {
  let e = w(A),
    [t, n] = (0, Z.useState)(!1),
    [r, i] = (0, Z.useState)(null),
    a = Ve(),
    o = a.isPending,
    s = async (t, n) => {
      if (!o) {
        i(t);
        try {
          (await a.mutateAsync(n), e.get(z).success(Xt(t)));
        } catch {
          e.get(z).danger(Zt(t));
        } finally {
          i(null);
        }
      }
    };
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(q, {
        className: `gap-3 max-sm:flex-col max-sm:items-stretch`,
        label: (0, Q.jsx)(P, {
          id: `settings.browserUse.browser.clearBrowsingData.label`,
          defaultMessage: `Browsing data`,
          description: `Label for clearing all browser browsing data`,
        }),
        description: (0, Q.jsx)(P, {
          id: `settings.browserUse.browser.clearBrowsingData.description`,
          defaultMessage: `Clear site data and cache from the in-app browser`,
          description: `Description for clearing all browser browsing data`,
        }),
        control: (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, Q.jsx)(B, {
              color: `secondary`,
              disabled: o && r !== `all`,
              loading: r === `all`,
              onClick: () => {
                s(`all`, jt);
              },
              size: `toolbar`,
              children: (0, Q.jsx)(P, {
                id: `settings.browserUse.browser.clearBrowsingData`,
                defaultMessage: `Clear all browsing data`,
                description: `Button label to clear all browser browsing data`,
              }),
            }),
            (0, Q.jsxs)(B, {
              "aria-controls": At,
              "aria-expanded": t,
              color: `ghost`,
              disabled: o,
              onClick: () => {
                n(!t);
              },
              size: `icon`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `sr-only`,
                  children: t
                    ? (0, Q.jsx)(P, {
                        id: `settings.browserUse.browser.hideClearOptions`,
                        defaultMessage: `Hide individual browsing data options`,
                        description: `Accessible label for hiding individual browser data clearing options`,
                      })
                    : (0, Q.jsx)(P, {
                        id: `settings.browserUse.browser.showClearOptions`,
                        defaultMessage: `Show individual browsing data options`,
                        description: `Accessible label for showing individual browser data clearing options`,
                      }),
                }),
                (0, Q.jsx)(Ne, {
                  className: C(
                    `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
                    t && `rotate-180`,
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      t
        ? (0, Q.jsx)(`div`, {
            id: At,
            className: `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`,
            children: jt.map((e) =>
              (0, Q.jsx)(
                qt,
                {
                  dataType: e,
                  disabled: o && r !== e,
                  loading: r === e,
                  onClear: (e) => {
                    s(e, [e]);
                  },
                },
                e,
              ),
            ),
          })
        : null,
    ],
  });
}
function qt(e) {
  let t = (0, X.c)(17),
    { disabled: n, loading: r, onClear: i, dataType: a } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = Jt(a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === o
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`div`, {
        className: `min-w-0 text-sm text-token-text-secondary`,
        children: o,
      })),
      (t[2] = o),
      (t[3] = s));
  let c;
  t[4] !== a || t[5] !== i
    ? ((c = () => {
        i(a);
      }),
      (t[4] = a),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === a ? (l = t[8]) : ((l = Yt(a)), (t[7] = a), (t[8] = l));
  let u;
  t[9] !== n || t[10] !== r || t[11] !== c || t[12] !== l
    ? ((u = (0, Q.jsx)(B, {
        className: `max-w-full justify-self-end text-left whitespace-normal max-md:-ml-2 max-md:justify-self-start`,
        color: `ghost`,
        disabled: n,
        loading: r,
        onClick: c,
        size: `toolbar`,
        children: l,
      })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== s || t[15] !== u
      ? ((d = (0, Q.jsxs)(`div`, {
          className: `grid min-h-10 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-0.5 max-md:grid-cols-1 max-md:items-start max-md:gap-1 max-md:py-2`,
          children: [s, u],
        })),
        (t[14] = s),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
function Jt(e) {
  switch (e) {
    case `cookies`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.cookies.label`,
        defaultMessage: `Cookies`,
        description: `Label for browser cookies setting`,
      });
    case `siteData`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.siteData.label`,
        defaultMessage: `Site data`,
        description: `Label for browser site data setting`,
      });
    case `cache`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.cache.label`,
        defaultMessage: `Cached images and files`,
        description: `Label for browser cached images and files setting`,
      });
  }
}
function Yt(e) {
  switch (e) {
    case `cookies`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearCookies`,
        defaultMessage: `Delete cookies`,
        description: `Button label to delete browser cookies`,
      });
    case `siteData`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearSiteData`,
        defaultMessage: `Delete site data`,
        description: `Button label to delete browser site data`,
      });
    case `cache`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearCache`,
        defaultMessage: `Delete cached images and files`,
        description: `Button label to delete browser cached images and files`,
      });
  }
}
function Xt(e) {
  switch (e) {
    case `all`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.browsingDataCleared`,
        defaultMessage: `Browsing data cleared`,
        description: `Toast shown after clearing all browser browsing data`,
      });
    case `cookies`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.cookiesCleared`,
        defaultMessage: `Browser cookies cleared`,
        description: `Toast shown after clearing browser cookies`,
      });
    case `siteData`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.siteDataCleared`,
        defaultMessage: `Browser site data cleared`,
        description: `Toast shown after clearing browser site data`,
      });
    case `cache`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.cacheCleared`,
        defaultMessage: `Browser cache cleared`,
        description: `Toast shown after clearing browser cached images and files`,
      });
  }
}
function Zt(e) {
  switch (e) {
    case `all`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearBrowsingDataError`,
        defaultMessage: `Unable to clear browsing data`,
        description: `Toast shown when clearing all browser browsing data fails`,
      });
    case `cookies`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearCookiesError`,
        defaultMessage: `Unable to clear browser cookies`,
        description: `Toast shown when clearing browser cookies fails`,
      });
    case `siteData`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearSiteDataError`,
        defaultMessage: `Unable to clear browser site data`,
        description: `Toast shown when clearing browser site data fails`,
      });
    case `cache`:
      return (0, Q.jsx)(P, {
        id: `settings.browserUse.browser.clearCacheError`,
        defaultMessage: `Unable to clear browser cache`,
        description: `Toast shown when clearing browser cached images and files fails`,
      });
  }
}
function Qt() {
  let e = (0, X.c)(35),
    t = w(A),
    { data: n, isLoading: r } = T(K),
    i = n?.approvalMode,
    a = He(),
    { value: o } = R(tt),
    s;
  e[0] === o ? (s = e[1]) : ((s = et(o)), (e[0] = o), (e[1] = s));
  let c = s,
    l;
  e[2] === c
    ? (l = e[3])
    : ((l = (e) => {
        (e.preventDefault(), O.dispatchMessage(`open-in-browser`, { url: c }));
      }),
      (e[2] = c),
      (e[3] = l));
  let u = l,
    d;
  e[4] !== c || e[5] !== u
    ? ((d = (e) =>
        (0, Q.jsx)(`a`, {
          className: `text-token-text-link-foreground hover:underline`,
          href: c,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: u,
          children: e,
        })),
      (e[4] = c),
      (e[5] = u),
      (e[6] = d))
    : (d = e[6]);
  let f = d,
    p;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = {
        id: `alwaysAsk`,
        label: (0, Q.jsx)(P, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Q.jsx)(P, {
          id: `settings.browserUse.approval.alwaysAsk.description`,
          defaultMessage: `Ask before opening websites`,
          description: `Description for browser use always ask approval mode`,
        }),
      }),
      (e[7] = p))
    : (p = e[7]);
  let m;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [
        p,
        {
          id: `neverAsk`,
          label: (0, Q.jsx)(P, {
            id: `settings.browserUse.approval.neverAsk.label`,
            defaultMessage: `Always allow`,
            description: `Label for browser use never ask approval mode`,
          }),
          description: (0, Q.jsx)(P, {
            id: `settings.browserUse.approval.neverAsk.description`,
            defaultMessage: `Open websites without asking`,
            description: `Description for browser use never ask approval mode`,
          }),
          elevatedRiskDisclaimer: (0, Q.jsx)(P, {
            id: `settings.browserUse.approval.neverAsk.elevatedRiskDisclaimer`,
            defaultMessage: `This setting has elevated risks for your data.`,
            description: `Elevated risk warning for the browser use always allow website approval mode`,
          }),
        },
      ]),
      (e[8] = m))
    : (m = e[8]);
  let h = m,
    g;
  e[9] === i ? (g = e[10]) : ((g = h.find((e) => e.id === i) ?? h[0]), (e[9] = i), (e[10] = g));
  let _ = g,
    v = a.isPending,
    y;
  e[11] !== i || e[12] !== v || e[13] !== t || e[14] !== a
    ? ((y = async (e) => {
        if (!(e === i || v))
          try {
            await a.mutateAsync(e);
          } catch {
            t.get(z).danger(
              (0, Q.jsx)(P, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving browser use approval mode fails`,
              }),
            );
          }
      }),
      (e[11] = i),
      (e[12] = v),
      (e[13] = t),
      (e[14] = a),
      (e[15] = y))
    : (y = e[15]);
  let b = y,
    x;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(P, {
        id: `settings.browserUse.approval.label`,
        defaultMessage: `Approval`,
        description: `Label for browser use approval mode setting`,
      })),
      (e[16] = x))
    : (x = e[16]);
  let S;
  e[17] === f
    ? (S = e[18])
    : ((S = (0, Q.jsx)(P, {
        id: `settings.browserUse.approval.description`,
        defaultMessage: `Choose if Codex asks for approval before opening websites. <learnMoreLink>Learn more</learnMoreLink>`,
        description: `Description for browser use approval mode setting`,
        values: { learnMoreLink: f },
      })),
      (e[17] = f),
      (e[18] = S));
  let C = r || v,
    E = r || v,
    D = _?.label,
    k;
  e[19] === D
    ? (k = e[20])
    : ((k = (0, Q.jsx)(`span`, { className: `truncate`, children: D })), (e[19] = D), (e[20] = k));
  let j;
  e[21] !== E || e[22] !== k
    ? ((j = (0, Q.jsx)(Re, { className: `w-[152px]`, disabled: E, children: k })),
      (e[21] = E),
      (e[22] = k),
      (e[23] = j))
    : (j = e[23]);
  let M;
  e[24] !== i || e[25] !== b || e[26] !== v
    ? ((M = (0, Q.jsx)(`div`, {
        className: `flex flex-col`,
        children: h.map((e) => {
          let t = e.id === i;
          return (0, Q.jsx)(
            U.Item,
            {
              allowWrap: !0,
              disabled: v,
              RightIcon: t ? De : void 0,
              onSelect: () => {
                b(e.id);
              },
              children: (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Q.jsx)(`span`, {
                    className: `truncate text-sm text-token-text-secondary`,
                    children: e.description,
                  }),
                  e.elevatedRiskDisclaimer
                    ? (0, Q.jsxs)(`span`, {
                        className: `mt-0.5 flex min-w-0 items-start gap-1 text-sm leading-4 text-token-description-foreground`,
                        children: [
                          (0, Q.jsx)(Le, {
                            className: `icon-xs shrink-0 text-token-editor-warning-foreground`,
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `min-w-0 whitespace-normal`,
                            children: e.elevatedRiskDisclaimer,
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (e[24] = i),
      (e[25] = b),
      (e[26] = v),
      (e[27] = M))
    : (M = e[27]);
  let N;
  e[28] !== j || e[29] !== M || e[30] !== C
    ? ((N = (0, Q.jsx)(W, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: C,
        triggerButton: j,
        children: M,
      })),
      (e[28] = j),
      (e[29] = M),
      (e[30] = C),
      (e[31] = N))
    : (N = e[31]);
  let F;
  return (
    e[32] !== N || e[33] !== S
      ? ((F = (0, Q.jsx)(q, { label: x, description: S, control: N })),
        (e[32] = N),
        (e[33] = S),
        (e[34] = F))
      : (F = e[34]),
    F
  );
}
function $t() {
  let e = (0, X.c)(24),
    t = w(A),
    { data: n, isLoading: r } = T(K),
    i = n?.historyApprovalMode,
    a = Ue(),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = {
        id: `alwaysAsk`,
        label: (0, Q.jsx)(P, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Q.jsx)(P, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (e[0] = o))
    : (o = e[0]);
  let s;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = [
        o,
        {
          id: `neverAsk`,
          label: (0, Q.jsx)(P, {
            id: `settings.browserUse.approval.neverAsk.label`,
            defaultMessage: `Always allow`,
            description: `Label for browser use never ask approval mode`,
          }),
          description: (0, Q.jsx)(P, {
            id: `settings.browserUse.historyApproval.neverAsk.description`,
            defaultMessage: `Access history without asking`,
            description: `Description for browser use never ask history approval mode`,
          }),
        },
      ]),
      (e[1] = s))
    : (s = e[1]);
  let c = s,
    l;
  e[2] === i ? (l = e[3]) : ((l = c.find((e) => e.id === i) ?? c[0]), (e[2] = i), (e[3] = l));
  let u = l,
    d = a.isPending,
    f;
  e[4] !== i || e[5] !== d || e[6] !== t || e[7] !== a
    ? ((f = async (e) => {
        if (!(e === i || d))
          try {
            await a.mutateAsync(e);
          } catch {
            t.get(z).danger(
              (0, Q.jsx)(P, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
            );
          }
      }),
      (e[4] = i),
      (e[5] = d),
      (e[6] = t),
      (e[7] = a),
      (e[8] = f))
    : (f = e[8]);
  let p = f,
    m,
    h;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(P, {
        id: `settings.browserUse.historyApproval.label`,
        defaultMessage: `History`,
        description: `Label for browser use history approval mode setting`,
      })),
      (h = (0, Q.jsx)(P, {
        id: `settings.browserUse.historyApproval.description`,
        defaultMessage: `Choose if Codex asks for approval before accessing your browser's history`,
        description: `Description for browser use history approval mode setting`,
      })),
      (e[9] = m),
      (e[10] = h))
    : ((m = e[9]), (h = e[10]));
  let g = r || d,
    _ = r || d,
    v = u?.label,
    y;
  e[11] === v
    ? (y = e[12])
    : ((y = (0, Q.jsx)(`span`, { className: `truncate`, children: v })), (e[11] = v), (e[12] = y));
  let b;
  e[13] !== _ || e[14] !== y
    ? ((b = (0, Q.jsx)(Re, { className: `w-[152px]`, disabled: _, children: y })),
      (e[13] = _),
      (e[14] = y),
      (e[15] = b))
    : (b = e[15]);
  let x;
  e[16] !== p || e[17] !== i || e[18] !== d
    ? ((x = (0, Q.jsx)(`div`, {
        className: `flex flex-col`,
        children: c.map((e) => {
          let t = e.id === i;
          return (0, Q.jsx)(
            U.Item,
            {
              allowWrap: !0,
              disabled: d,
              RightIcon: t ? De : void 0,
              onSelect: () => {
                p(e.id);
              },
              children: (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Q.jsx)(`span`, {
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
      (e[16] = p),
      (e[17] = i),
      (e[18] = d),
      (e[19] = x))
    : (x = e[19]);
  let S;
  return (
    e[20] !== b || e[21] !== x || e[22] !== g
      ? ((S = (0, Q.jsx)(q, {
          label: m,
          description: h,
          control: (0, Q.jsx)(W, {
            contentWidth: `menuWide`,
            align: `end`,
            disabled: g,
            triggerButton: b,
            children: x,
          }),
        })),
        (e[20] = b),
        (e[21] = x),
        (e[22] = g),
        (e[23] = S))
      : (S = e[23]),
    S
  );
}
function en(e) {
  let t = (0, X.c)(12),
    {
      browserUsePlugins: n,
      pluginsQuery: r,
      selectedHostId: i,
      unavailableBrowserUsePlugins: a,
    } = e,
    o = ke(),
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(P, {
        id: `settings.browserUse.install.empty`,
        defaultMessage: `In-app browser plugin unavailable`,
        description: `Empty state shown when the in-app browser plugin cannot be found`,
      })),
      (c = (0, Q.jsx)(P, {
        id: `settings.browserUse.install.button`,
        defaultMessage: `Install`,
        description: `Button label for installing the browser plugin`,
      })),
      (t[0] = s),
      (t[1] = c))
    : ((s = t[0]), (c = t[1]));
  let l;
  if (t[2] !== n || t[3] !== o) {
    let e;
    (t[5] === o
      ? (e = t[6])
      : ((e = (e) => ({
          icon: (0, Q.jsx)($e, { className: `h-full w-full text-token-foreground` }),
          onTryInChat: () => {
            o({
              prefillPrompt: je({
                defaultPrompt: Ae(e.plugin.interface?.defaultPrompt),
                pluginDisplayName: H(e),
                pluginId: e.plugin.id,
              }),
              startInSidebar: !0,
            });
          },
          plugin: e,
          showManageActions: !0,
          showIconBorder: !1,
          title: (0, Q.jsx)(P, { ...ae.label }),
          description: (0, Q.jsx)(P, {
            id: `settings.browserUse.control.description`,
            defaultMessage: `Let Codex control the built-in browser`,
            description: `Description for the Browser plugin control row`,
          }),
        })),
        (t[5] = o),
        (t[6] = e)),
      (l = n.map(e)),
      (t[2] = n),
      (t[3] = o),
      (t[4] = l));
  } else l = t[4];
  let u;
  return (
    t[7] !== r || t[8] !== i || t[9] !== l || t[10] !== a
      ? ((u = (0, Q.jsx)(wt, {
          emptyStateTitle: s,
          installButtonLabel: c,
          items: l,
          pluginsQuery: r,
          selectedHostId: i,
          unavailableItems: a,
        })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = l),
        (t[10] = a),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function tn(e) {
  return (
    !e.isLoading && (e.reason === `statsig-disabled` || e.reason === `config-requirement-disabled`)
  );
}
function $(e) {
  let t = (0, X.c)(37),
    { kind: n, resource: r, surface: i } = e,
    a = r === void 0 ? `origins` : r,
    o = i === void 0 ? `inAppBrowser` : i,
    s = w(A),
    { data: c, isLoading: l } = T(K),
    [u, d] = (0, Z.useState)(!1),
    f = We(),
    p = Ke(),
    m;
  t[0] !== n || t[1] !== c || t[2] !== a
    ? ((m = c == null ? [] : sn(c, a, n)), (t[0] = n), (t[1] = c), (t[2] = a), (t[3] = m))
    : (m = t[3]);
  let h = m,
    g = a === `origins` ? f.isPending : p.isPending,
    _;
  t[4] !== p || t[5] !== f || t[6] !== n || t[7] !== h || t[8] !== a || t[9] !== s
    ? ((_ = async (e) => {
        let t = e.trim();
        if (t.length === 0 || h.includes(t)) return !0;
        try {
          return (
            a === `origins`
              ? await f.mutateAsync({ kind: n, origin: t })
              : await p.mutateAsync({
                  kind: n,
                  origin: t,
                  transferKind: a === `downloads` ? `download` : `upload`,
                }),
            s.get(z).success(_t(a, n)),
            !0
          );
        } catch {
          return (
            s
              .get(z)
              .danger(
                (0, Q.jsx)(P, {
                  id: `settings.browserUse.domains.addError`,
                  defaultMessage: `Unable to add domain`,
                  description: `Toast shown when adding a browser domain fails`,
                }),
              ),
            !1
          );
        }
      }),
      (t[4] = p),
      (t[5] = f),
      (t[6] = n),
      (t[7] = h),
      (t[8] = a),
      (t[9] = s),
      (t[10] = _))
    : (_ = t[10]);
  let v = _,
    y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(nn, {
        onClick: () => {
          d(!0);
        },
      })),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== n || t[13] !== a
    ? ((b = ht(a, n)), (t[12] = n), (t[13] = a), (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] !== n || t[16] !== a || t[17] !== o
    ? ((x = gt(a, n, o)), (t[15] = n), (t[16] = a), (t[17] = o), (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] !== b || t[20] !== x
    ? ((S = (0, Q.jsx)(Y.Header, { actions: y, title: b, subtitle: x })),
      (t[19] = b),
      (t[20] = x),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== l || t[23] !== n || t[24] !== h || t[25] !== a
    ? ((C = (0, Q.jsx)(Y.Content, {
        children: (0, Q.jsx)(J, {
          children: l
            ? (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2 p-4 text-sm text-token-text-secondary`,
                children: [
                  (0, Q.jsx)(ce, { className: `icon-xs` }),
                  (0, Q.jsx)(P, {
                    id: `settings.browserUse.origins.loading`,
                    defaultMessage: `Loading websites`,
                    description: `Message shown while loading browser website origin settings`,
                  }),
                ],
              })
            : (0, Q.jsx)(an, { kind: n, origins: h, resource: a }),
        }),
      })),
      (t[22] = l),
      (t[23] = n),
      (t[24] = h),
      (t[25] = a),
      (t[26] = C))
    : (C = t[26]);
  let E;
  t[27] !== v || t[28] !== u || t[29] !== g || t[30] !== n || t[31] !== a
    ? ((E = (0, Q.jsx)(rn, {
        kind: n,
        isSaving: g,
        open: u,
        resource: a,
        onAddOrigin: v,
        onOpenChange: d,
      })),
      (t[27] = v),
      (t[28] = u),
      (t[29] = g),
      (t[30] = n),
      (t[31] = a),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== E || t[34] !== S || t[35] !== C
      ? ((D = (0, Q.jsxs)(Y, { children: [S, C, E] })),
        (t[33] = E),
        (t[34] = S),
        (t[35] = C),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
function nn(e) {
  let t = (0, X.c)(4),
    { onClick: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(Pe, { className: `icon-xs` })),
      (i = (0, Q.jsx)(P, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Q.jsxs)(B, {
          color: `secondary`,
          size: `toolbar`,
          onClick: n,
          children: [r, i],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function rn(e) {
  let t = (0, X.c)(52),
    { isSaving: n, kind: r, onAddOrigin: i, onOpenChange: a, open: o, resource: s } = e,
    c = M(),
    [l, u] = (0, Z.useState)(``),
    d;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== l
    ? ((d = async () => {
        let e = l.trim();
        e.length === 0 || n || ((await i(e)) && (u(``), a(!1)));
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = l),
      (t[4] = d))
    : (d = t[4]);
  let f = d,
    p;
  t[5] === a
    ? (p = t[6])
    : ((p = (e) => {
        (e || u(``), a(e));
      }),
      (t[5] = a),
      (t[6] = p));
  let m;
  t[7] === f
    ? (m = t[8])
    : ((m = (e) => {
        (e.preventDefault(), f());
      }),
      (t[7] = f),
      (t[8] = m));
  let h;
  t[9] !== r || t[10] !== s ? ((h = yt(s, r)), (t[9] = r), (t[10] = s), (t[11] = h)) : (h = t[11]);
  let g;
  t[12] !== r || t[13] !== s
    ? ((g = bt(s, r)), (t[12] = r), (t[13] = s), (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== h || t[16] !== g
    ? ((_ = (0, Q.jsx)(V, { children: (0, Q.jsx)(Ce, { title: h, subtitle: g }) })),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] === c
    ? (v = t[19])
    : ((v = c.formatMessage({
        id: `settings.browserUse.domains.addDialogAriaLabel`,
        defaultMessage: `Domain`,
        description: `Aria label for browser use domain input`,
      })),
      (t[18] = c),
      (t[19] = v));
  let y;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (e) => {
        u(e.currentTarget.value);
      }),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === c
    ? (b = t[22])
    : ((b = c.formatMessage({
        id: `settings.browserUse.domains.addDialogPlaceholder`,
        defaultMessage: `example.com`,
        description: `Placeholder for browser use domain input`,
      })),
      (t[21] = c),
      (t[22] = b));
  let x;
  t[23] !== l || t[24] !== v || t[25] !== b
    ? ((x = (0, Q.jsx)(V, {
        className: `gap-2`,
        children: (0, Q.jsx)(`input`, {
          autoFocus: !0,
          "aria-label": v,
          className: `rounded-xl border border-token-border px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none`,
          onChange: y,
          placeholder: b,
          value: l,
        }),
      })),
      (t[23] = l),
      (t[24] = v),
      (t[25] = b),
      (t[26] = x))
    : (x = t[26]);
  let S;
  t[27] === a
    ? (S = t[28])
    : ((S = () => {
        (u(``), a(!1));
      }),
      (t[27] = a),
      (t[28] = S));
  let C;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(P, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (t[29] = C))
    : (C = t[29]);
  let w;
  t[30] !== n || t[31] !== S
    ? ((w = (0, Q.jsx)(B, {
        color: `outline`,
        disabled: n,
        onClick: S,
        type: `button`,
        children: C,
      })),
      (t[30] = n),
      (t[31] = S),
      (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] !== n || t[34] !== l
    ? ((T = l.trim().length === 0 || n), (t[33] = n), (t[34] = l), (t[35] = T))
    : (T = t[35]);
  let E;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(P, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (t[36] = E))
    : (E = t[36]);
  let D;
  t[37] !== n || t[38] !== T
    ? ((D = (0, Q.jsx)(B, {
        color: `primary`,
        disabled: T,
        loading: n,
        type: `submit`,
        children: E,
      })),
      (t[37] = n),
      (t[38] = T),
      (t[39] = D))
    : (D = t[39]);
  let O;
  t[40] !== w || t[41] !== D
    ? ((O = (0, Q.jsx)(V, { children: (0, Q.jsxs)(Ee, { children: [w, D] }) })),
      (t[40] = w),
      (t[41] = D),
      (t[42] = O))
    : (O = t[42]);
  let k;
  t[43] !== x || t[44] !== O || t[45] !== m || t[46] !== _
    ? ((k = (0, Q.jsxs)(Te, { as: `form`, onSubmit: m, children: [_, x, O] })),
      (t[43] = x),
      (t[44] = O),
      (t[45] = m),
      (t[46] = _),
      (t[47] = k))
    : (k = t[47]);
  let A;
  return (
    t[48] !== o || t[49] !== k || t[50] !== p
      ? ((A = (0, Q.jsx)(we, { open: o, onOpenChange: p, size: `compact`, children: k })),
        (t[48] = o),
        (t[49] = k),
        (t[50] = p),
        (t[51] = A))
      : (A = t[51]),
    A
  );
}
function an(e) {
  let t = (0, X.c)(46),
    { kind: n, origins: r, resource: i } = e,
    a = w(A),
    o = M(),
    [s, c] = (0, Z.useState)(null),
    l = qe(),
    u = Ge(),
    d = i === `origins` ? l.isPending : u.isPending,
    f;
  t[0] !== n || t[1] !== s || t[2] !== u || t[3] !== l || t[4] !== i || t[5] !== a
    ? ((f = async () => {
        if (s != null)
          try {
            (i === `origins`
              ? await l.mutateAsync({ kind: n, origin: s })
              : await u.mutateAsync({
                  kind: n,
                  origin: s,
                  transferKind: i === `downloads` ? `download` : `upload`,
                }),
              c(null),
              a.get(z).success(vt(i, n)));
          } catch {
            a.get(z).danger(
              (0, Q.jsx)(P, {
                id: `settings.browserUse.origins.saveError`,
                defaultMessage: `Unable to save domains`,
                description: `Toast shown when saving browser domain settings fails`,
              }),
            );
          }
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = u),
      (t[3] = l),
      (t[4] = i),
      (t[5] = a),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] !== o || t[8] !== d || t[9] !== n || t[10] !== r || t[11] !== i
    ? ((m = (0, Q.jsx)(on, {
        kind: n,
        intl: o,
        isSaving: d,
        onRequestRemoval: c,
        origins: r,
        resource: i,
      })),
      (t[7] = o),
      (t[8] = d),
      (t[9] = n),
      (t[10] = r),
      (t[11] = i),
      (t[12] = m))
    : (m = t[12]);
  let h = s != null,
    g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        e || c(null);
      }),
      (t[13] = g))
    : (g = t[13]);
  let _ = s ?? ``,
    v;
  t[14] !== n || t[15] !== i || t[16] !== _
    ? ((v = xt(i, n, _)), (t[14] = n), (t[15] = i), (t[16] = _), (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== n || t[19] !== i
    ? ((y = St(i, n)), (t[18] = n), (t[19] = i), (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== v || t[22] !== y
    ? ((b = (0, Q.jsx)(V, { children: (0, Q.jsx)(Ce, { title: v, subtitle: y }) })),
      (t[21] = v),
      (t[22] = y),
      (t[23] = b))
    : (b = t[23]);
  let x, S;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        c(null);
      }),
      (x = (0, Q.jsx)(P, {
        id: `settings.browserUse.origins.removeDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for remove browser website dialog`,
      })),
      (t[24] = x),
      (t[25] = S))
    : ((x = t[24]), (S = t[25]));
  let C;
  t[26] === d
    ? (C = t[27])
    : ((C = (0, Q.jsx)(B, { color: `ghost`, disabled: d, onClick: S, children: x })),
      (t[26] = d),
      (t[27] = C));
  let T;
  t[28] === p
    ? (T = t[29])
    : ((T = () => {
        p();
      }),
      (t[28] = p),
      (t[29] = T));
  let E;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(P, {
        id: `settings.browserUse.origins.removeDialogConfirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for remove browser website dialog`,
      })),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] !== d || t[32] !== T
    ? ((D = (0, Q.jsx)(B, { color: `danger`, loading: d, onClick: T, children: E })),
      (t[31] = d),
      (t[32] = T),
      (t[33] = D))
    : (D = t[33]);
  let O;
  t[34] !== C || t[35] !== D
    ? ((O = (0, Q.jsx)(V, { children: (0, Q.jsxs)(Ee, { children: [C, D] }) })),
      (t[34] = C),
      (t[35] = D),
      (t[36] = O))
    : (O = t[36]);
  let k;
  t[37] !== O || t[38] !== b
    ? ((k = (0, Q.jsxs)(Te, { children: [b, O] })), (t[37] = O), (t[38] = b), (t[39] = k))
    : (k = t[39]);
  let j;
  t[40] !== k || t[41] !== h
    ? ((j = (0, Q.jsx)(we, { open: h, onOpenChange: g, size: `compact`, children: k })),
      (t[40] = k),
      (t[41] = h),
      (t[42] = j))
    : (j = t[42]);
  let N;
  return (
    t[43] !== j || t[44] !== m
      ? ((N = (0, Q.jsxs)(Q.Fragment, { children: [m, j] })), (t[43] = j), (t[44] = m), (t[45] = N))
      : (N = t[45]),
    N
  );
}
function on(e) {
  let t = (0, X.c)(16),
    { intl: n, isSaving: r, kind: i, onRequestRemoval: a, origins: o, resource: s } = e;
  if (o.length === 0) {
    let e;
    t[0] !== i || t[1] !== s ? ((e = Ct(s, i)), (t[0] = i), (t[1] = s), (t[2] = e)) : (e = t[2]);
    let n;
    return (
      t[3] === e
        ? (n = t[4])
        : ((n = (0, Q.jsx)(q, {
            className: `justify-center`,
            label: (0, Q.jsx)(`span`, { className: `text-token-text-secondary`, children: e }),
            control: null,
          })),
          (t[3] = e),
          (t[4] = n)),
      n
    );
  }
  let c;
  if (t[5] !== n || t[6] !== r || t[7] !== a || t[8] !== o) {
    let e;
    (t[10] !== n || t[11] !== r || t[12] !== a
      ? ((e = (e) =>
          (0, Q.jsx)(
            q,
            {
              label: (0, Q.jsx)(`span`, { className: `font-medium`, children: e }),
              description: null,
              control: (0, Q.jsx)(B, {
                "aria-label": n.formatMessage(
                  {
                    id: `settings.browserUse.origins.removeAriaLabel`,
                    defaultMessage: `Remove {origin}`,
                    description: `Aria label for button that removes a browser website origin`,
                  },
                  { origin: e },
                ),
                color: `ghost`,
                disabled: r,
                onClick: () => {
                  a(e);
                },
                size: `icon`,
                children: (0, Q.jsx)(Me, { className: `icon-2xs` }),
              }),
            },
            e,
          )),
        (t[10] = n),
        (t[11] = r),
        (t[12] = a),
        (t[13] = e))
      : (e = t[13]),
      (c = o.map(e)),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = c));
  } else c = t[9];
  let l;
  return (
    t[14] === c
      ? (l = t[15])
      : ((l = (0, Q.jsx)(Q.Fragment, { children: c })), (t[14] = c), (t[15] = l)),
    l
  );
}
function sn(e, t, n) {
  switch (t) {
    case `origins`:
      return n === `allowed` ? e.allowedOrigins : e.deniedOrigins;
    case `downloads`:
      return n === `allowed` ? e.allowedDownloadOrigins : e.deniedDownloadOrigins;
    case `uploads`:
      return n === `allowed` ? e.allowedUploadOrigins : e.deniedUploadOrigins;
  }
}
export {
  Qt as a,
  Nt as c,
  wt as d,
  pt as f,
  Rt as i,
  Ft as l,
  Lt as n,
  $ as o,
  It as r,
  $t as s,
  Kt as t,
  kt as u,
};
//# sourceMappingURL=browser-use-settings-1.js.map
