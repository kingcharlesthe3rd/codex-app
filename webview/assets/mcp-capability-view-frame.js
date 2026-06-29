import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  $i as t,
  Bi as n,
  Cn as r,
  Ki as i,
  Kn as a,
  Pt as o,
  Qi as s,
  Qr as c,
  Sn as l,
  Vi as u,
  Wi as d,
  Zi as f,
  aa as p,
  bn as m,
  la as h,
  na as g,
  qt as _,
  sa as v,
  st as y,
  ta as b,
  wn as x,
  yn as S,
} from "./src-2.js";
import { fs as C, us as w } from "./app-server-manager-signals.js";
import { n as T, t as E } from "./jsx-runtime.js";
import { t as D } from "./clsx.js";
import { t as O } from "./react-dom.js";
import {
  F as ee,
  I as te,
  L as k,
  P as A,
  R as j,
  V as M,
  W as N,
  f as P,
  g as F,
  h as I,
  lt as L,
} from "./vscode-api.js";
import { c as ne, o as R, r as z } from "./lib-2.js";
import { m as re } from "./chunk-12.js";
import { l as B } from "./persisted-signal-CweW-bgN.js";
import { o as V } from "./statsig.js";
import "./config-queries.js";
import { t as H } from "./connector-logo.js";
import { t as ie } from "./tooltip.js";
import { t as U } from "./route-scope.js";
import { O as ae } from "./composer-view-state.js";
import { t as oe } from "./button.js";
import { c as se, d as ce, f as le, h as ue, m as de, u as fe } from "./mcp-capability-signals.js";
import "./permissions-mode-defaults.js";
import { st as pe } from "./app-shell-state.js";
import { t as me } from "./app-shell.js";
import { t as W } from "./apps.js";
import { n as he } from "./projectless-thread.js";
import { l as G, n as ge } from "./app-shell-tab-controller.js";
import { i as _e, n as ve } from "./thread-panel-state.js";
import { t as ye } from "./use-stable-callback.js";
import { d as be, i as xe, l as Se, n as Ce, r as we, u as Te } from "./dialog-layout.js";
import { t as Ee } from "./check-md.js";
import { t as De } from "./build-worktree-label-from-input.js";
import { t as Oe } from "./read-service-tier-for-request.js";
import { r as ke } from "./pending-worktree-store.js";
import { u as Ae } from "./sidebar-project-group-signals.js";
import { t as je } from "./arrow-left.js";
import { t as Me } from "./checkbox.js";
import { r as Ne, t as Pe } from "./dropdown.js";
import { t as Fe } from "./chevron.js";
import { t as Ie } from "./macbook.js";
import { t as Le } from "./worktree.js";
import { n as Re, t as ze } from "./project-dropdown-options.js";
import { n as Be, t as Ve } from "./mcp-capability-client.js";
import { t as He } from "./alert-2.js";
import {
  a as Ue,
  c as We,
  i as Ge,
  n as Ke,
  r as qe,
  s as Je,
} from "./mcp-tool-item-content-utils.js";
var Ye = N(I, Symbol());
function Xe(e) {
  e.set(Ye, Symbol());
}
function Ze(e, t) {
  return _e(e, `right`, t);
}
function Qe(e) {
  ve(e, `right`);
}
var K = L(),
  q = E();
function $e(e) {
  let t = (0, K.c)(13),
    { backLabel: n, canGoBack: r, canGoForward: i, forwardLabel: a, onBack: o, onForward: s } = e,
    c = !r,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, q.jsx)(je, { className: `icon-xs` })), (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== n || t[2] !== o || t[3] !== c
    ? ((u = (0, q.jsx)(oe, {
        "aria-label": n,
        color: `ghost`,
        disabled: c,
        onClick: o,
        size: `toolbar`,
        title: n,
        uniform: !0,
        children: l,
      })),
      (t[1] = n),
      (t[2] = o),
      (t[3] = c),
      (t[4] = u))
    : (u = t[4]);
  let d = !i,
    f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(je, { className: `icon-xs -scale-x-100 transform` })), (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== a || t[7] !== s || t[8] !== d
    ? ((p = (0, q.jsx)(oe, {
        "aria-label": a,
        color: `ghost`,
        disabled: d,
        onClick: s,
        size: `toolbar`,
        title: a,
        uniform: !0,
        children: f,
      })),
      (t[6] = a),
      (t[7] = s),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== u || t[11] !== p
      ? ((m = (0, q.jsxs)(q.Fragment, { children: [u, p] })), (t[10] = u), (t[11] = p), (t[12] = m))
      : (m = t[12]),
    m
  );
}
function et(e) {
  let t = (0, K.c)(2),
    { onPanelElementChange: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, q.jsx)(`div`, {
          className: `bg-token-background relative h-full min-h-0`,
          children: (0, q.jsx)(`div`, {
            ref: n,
            "data-mcp-app-side-panel-frame-container": `true`,
            className: `h-full min-h-0 w-full`,
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var J = e(T(), 1);
function tt(
  e,
  {
    activate: t = !0,
    connectorIcon: n,
    mcpAppId: r,
    onExitFullScreen: i,
    onPanelElementChange: a,
    title: o,
  },
) {
  let s = rt(r);
  (ge.openTab(e, et, {
    icon:
      n == null
        ? (0, J.createElement)(W, { className: `icon-xs shrink-0 text-token-text-secondary` })
        : (0, J.createElement)(H, {
            alt: n.alt,
            className: `icon-xs shrink-0 object-contain`,
            logoUrl: n.logoUrl,
            logoDarkUrl: n.logoDarkUrl,
            fallback: (0, J.createElement)(W, {
              className: `icon-xs shrink-0 text-token-text-secondary`,
            }),
          }),
    props: { onPanelElementChange: a },
    id: s,
    title: o,
    activate: t,
    onClose: i,
  }),
    t && Ze(e));
}
function nt(e, t) {
  let n = rt(t);
  e.get(ge.tabs$).some((e) => e.tabId === n) &&
    (ge.closeTab(e, n), e.get(ge.tabs$).length === 0 && Qe(e));
}
function rt(e) {
  return `${G.MCP_APP}:${e}`;
}
var it = e(_(), 1),
  at = { intrinsicHeight: null, isFullScreen: !1, isInlineExpanded: !1, sandboxError: null },
  ot = N(U, () => new Map()),
  st = N(U, () => new Map()),
  ct = N(U, () => new Set()),
  lt = k(U, ({ get: e }) => {
    let t = e(st),
      n = e(ct);
    for (let r of e(ot).values()) {
      if (!r.hostedInThreadScrollLayout) continue;
      let { mcpAppId: e } = r,
        i = t.get(e);
      if (i?.isInlineExpanded === !0 || i?.isFullScreen === !0 || n.has(e)) return !0;
    }
    return !1;
  }),
  ut = j(U, (e, { get: t }) => t(ot).get(e) ?? null),
  dt = j(U, (e, { get: t }) => t(st).get(e) ?? at),
  ft = j(U, (e, { get: t }) => t(ct).has(e));
function pt(e) {
  return e;
}
function mt(e, t, n) {
  e.set(ot, (e) => {
    let r = e.get(t);
    if (r == null || r.inlineFrameContainer == null || r.inlineFrameContainer !== n) return e;
    let i = new Map(e);
    return (i.set(t, { ...r, inlineFrameContainer: null }), i);
  });
}
function ht(e, t, n) {
  e.set(ot, (e) => {
    let r = e.get(t);
    if (r == null || r.inlineFrameContainer === n) return e;
    let i = new Map(e);
    return (i.set(t, { ...r, inlineFrameContainer: n }), i);
  });
}
function gt(e, t) {
  e.set(ot, (e) => {
    let n = e.get(t);
    if (n == null || (n.sidePanelFrameContent == null && n.sidePanelSourceMcpAppId == null))
      return e;
    let r = new Map(e);
    return (r.set(t, { ...n, sidePanelFrameContent: null, sidePanelSourceMcpAppId: null }), r);
  });
}
function _t(e, t) {
  let n = null;
  (e.set(ot, (r) => {
    let i = e.get(st),
      a = r.get(t.mcpAppId),
      o = Ct(t),
      s = {
        hostedInThreadScrollLayout: t.hostedInThreadScrollLayout,
        inlineFrameContainer: t.inlineFrameContainer ?? a?.inlineFrameContainer ?? null,
        inlineFrameContent: o,
        mcpAppId: t.mcpAppId,
        sidePanelFrameContent: a?.sidePanelFrameContent ?? null,
        sidePanelSourceMcpAppId: a?.sidePanelSourceMcpAppId ?? null,
      },
      c = r;
    (a == null || !(0, it.default)(a, s)) && ((c = new Map(r)), c.set(t.mcpAppId, s));
    let l = St({
      activeSidePanelTabId: e.get(ge.activeTab$)?.tabId ?? null,
      frameStates: i,
      registration: t,
      registrations: c,
    });
    if (
      l == null ||
      l.mcpAppId === t.mcpAppId ||
      (a != null && l.sidePanelSourceMcpAppId !== t.mcpAppId)
    )
      return c;
    let u = { ...l, sidePanelFrameContent: o, sidePanelSourceMcpAppId: t.mcpAppId };
    return (0, it.default)(l, u)
      ? c
      : (c === r && (c = new Map(r)), c.set(l.mcpAppId, u), (n = t.mcpAppId), c);
  }),
    n != null && xt(e, n));
}
function vt(e, t, n) {
  if (e.get(t.mcpAppId)?.isFullScreen === !0 || n.has(t.mcpAppId)) return t.mcpAppId;
  for (let r of n.values())
    if (
      (e.get(r.mcpAppId)?.isFullScreen === !0 ||
        (t.inlineFrameContainer != null && r.inlineFrameContainer === t.inlineFrameContainer)) &&
      wt(r.sidePanelFrameContent ?? r.inlineFrameContent, t)
    )
      return r.mcpAppId;
  return t.mcpAppId;
}
function yt(e, t, n) {
  (n.isFullScreen === !0 && xt(e, t),
    e.set(st, (e) => {
      let r = e.get(t) ?? at,
        i = { ...r, ...n };
      if (
        r.intrinsicHeight === i.intrinsicHeight &&
        r.isFullScreen === i.isFullScreen &&
        r.isInlineExpanded === i.isInlineExpanded &&
        r.sandboxError === i.sandboxError
      )
        return e;
      let a = new Map(e);
      return (a.set(t, i), a);
    }));
}
function bt(e, t, n) {
  yt(e, t, { isInlineExpanded: n });
}
function xt(e, t) {
  e.set(ct, (e) => {
    if (e.has(t)) return e;
    let n = new Set(e);
    return (n.add(t), n);
  });
}
function St({ activeSidePanelTabId: e, frameStates: t, registration: n, registrations: r }) {
  for (let i of r.values())
    if (
      e === rt(i.mcpAppId) &&
      t.get(i.mcpAppId)?.isFullScreen === !0 &&
      wt(i.sidePanelFrameContent ?? i.inlineFrameContent, n)
    )
      return i;
  return null;
}
function Ct({ hostedInThreadScrollLayout: e, inlineFrameContainer: t, mcpAppId: n, ...r }) {
  return r;
}
function wt(e, t) {
  return (
    e.conversationId === t.conversationId &&
    e.server === t.server &&
    (0, it.default)(e.mcpAppScope, t.mcpAppScope) &&
    Tt(e.sandboxOriginScope, t.sandboxOriginScope)
  );
}
function Tt(e, t) {
  if (e.kind !== t.kind) return !1;
  switch (e.kind) {
    case `codex_app`:
      return (
        t.kind === `codex_app` &&
        e.connectorId === t.connectorId &&
        (e.connectorId != null || e.instanceFallbackId === t.instanceFallbackId)
      );
    case `mcp_server`:
      return t.kind === `mcp_server` && e.server === t.server;
  }
}
var Et = `codex_apps`;
function Y(e) {
  return e === Et;
}
function Dt({ server: e, tool: t }) {
  return Y(e) ? Je(t) : null;
}
function Ot({ mcpAppScope: e, server: t, tools: n }) {
  return Y(t) ? Je(n.find((t) => t.name === e.originTool) ?? null) : null;
}
function kt({ connectorId: e, server: t, toolName: n, tools: r }) {
  let i = Nt({ server: t, toolName: n, tools: r });
  if ((Pt({ connectorId: e, server: t, tool: i, toolName: n }), Ft(i)))
    throw Error(`MCP app cannot call tools that accept file parameters: ${i?.name ?? n}`);
  return { name: i?.name ?? n, tool: i };
}
function At({ connectorId: e, server: t, tools: n }) {
  let r = Y(t) ? n.filter((t) => Je(t) === e) : n;
  if (Y(t) && e == null) throw Error(`MCP app requests require a trusted connector scope`);
  return r.filter((e) => !Ft(e));
}
function jt({ mcpAppScope: e, server: t, uri: n }) {
  if (Y(t) && (e.originResourceUri == null || n !== e.originResourceUri))
    throw Error(`MCP app cannot read resource outside its widget scope: ${n}`);
}
function Mt({ connectorId: e, instanceFallbackId: t, server: n }) {
  return Y(n)
    ? { connectorId: e, instanceFallbackId: t, kind: `codex_app` }
    : { kind: `mcp_server`, server: n };
}
function Nt({ server: e, toolName: t, tools: n }) {
  let r = n.find((e) => e.name === t) ?? null;
  return r != null || !Y(e) ? r : (n.find((e) => e.title === t) ?? null);
}
function Pt({ connectorId: e, server: t, tool: n, toolName: r }) {
  if (!Y(t)) return;
  let i = Je(n);
  if (e == null || i == null || i !== e)
    throw Error(`MCP app cannot call tool outside its connector scope: ${r}`);
}
function Ft(e) {
  return (
    typeof e?._meta == `object` && e._meta != null && Object.hasOwn(e._meta, `openai/fileParams`)
  );
}
var It = k(I, ({ get: e }) => (e(Ye), Lt()));
function Lt() {
  let e = getComputedStyle(document.documentElement),
    t = document.createElement(`div`);
  ((t.style.display = `none`), t.setAttribute(`aria-hidden`, `true`), document.body.appendChild(t));
  let n = (n, r) => Rt(e, t, n, r),
    r = (t) => {
      let n = e.getPropertyValue(t).trim();
      return n.length > 0 ? n : void 0;
    },
    i = (e) => n(e, `color`),
    a = (e) => {
      let t = i(e),
        n = i(`--vscode-editor-background`);
      if (!(t == null || n == null)) return `color-mix(in srgb, ${t} 12%, ${n})`;
    };
  try {
    return {
      "--color-background-primary": i(`--vscode-editor-background`),
      "--color-background-secondary": i(`--vscode-editorWidget-background`),
      "--color-background-tertiary": i(`--vscode-sideBar-background`),
      "--color-background-inverse": i(`--vscode-foreground`),
      "--color-background-ghost": `transparent`,
      "--color-background-info": i(`--vscode-editorGroup-dropBackground`),
      "--color-background-danger": i(`--vscode-inputValidation-errorBackground`),
      "--color-background-success": a(`--vscode-gitDecoration-addedResourceForeground`),
      "--color-background-warning": a(`--vscode-editorWarning-foreground`),
      "--color-background-disabled": i(`--vscode-button-secondaryBackground`),
      "--color-text-primary": i(`--vscode-foreground`),
      "--color-text-secondary": i(`--vscode-descriptionForeground`),
      "--color-text-tertiary": i(`--vscode-descriptionForeground`),
      "--color-text-inverse": i(`--vscode-editor-background`),
      "--color-text-ghost": i(`--vscode-descriptionForeground`),
      "--color-text-info": i(`--vscode-textLink-foreground`),
      "--color-text-danger": i(`--vscode-errorForeground`),
      "--color-text-success": i(`--vscode-gitDecoration-addedResourceForeground`),
      "--color-text-warning": i(`--vscode-editorWarning-foreground`),
      "--color-text-disabled": i(`--vscode-descriptionForeground`),
      "--color-border-primary": i(`--vscode-input-border`),
      "--color-border-secondary": i(`--vscode-editorWidget-border`),
      "--color-border-tertiary": i(`--vscode-textBlockQuote-border`),
      "--color-border-inverse": i(`--vscode-foreground`),
      "--color-border-ghost": `transparent`,
      "--color-border-info": i(`--vscode-focusBorder`),
      "--color-border-danger": i(`--vscode-errorForeground`),
      "--color-border-success": i(`--vscode-gitDecoration-addedResourceForeground`),
      "--color-border-warning": i(`--vscode-editorWarning-foreground`),
      "--color-border-disabled": i(`--vscode-input-border`),
      "--color-ring-primary": i(`--vscode-focusBorder`),
      "--color-ring-secondary": i(`--vscode-focusBorder`),
      "--color-ring-inverse": i(`--vscode-focusBorder`),
      "--color-ring-info": i(`--vscode-focusBorder`),
      "--color-ring-danger": i(`--vscode-errorForeground`),
      "--color-ring-success": i(`--vscode-gitDecoration-addedResourceForeground`),
      "--color-ring-warning": i(`--vscode-editorWarning-foreground`),
      "--font-sans": n(`--font-sans`, `fontFamily`),
      "--font-mono": n(`--font-mono`, `fontFamily`),
      "--font-weight-normal": n(`--vscode-font-weight`, `fontWeight`),
      "--font-weight-medium": n(`--font-weight-medium`, `fontWeight`),
      "--font-weight-semibold": n(`--font-weight-semibold`, `fontWeight`),
      "--font-weight-bold": n(`--font-weight-bold`, `fontWeight`),
      "--font-text-xs-size": n(`--text-xs`, `fontSize`),
      "--font-text-sm-size": n(`--text-sm`, `fontSize`),
      "--font-text-md-size": n(`--text-base`, `fontSize`),
      "--font-text-lg-size": n(`--text-lg`, `fontSize`),
      "--font-heading-xs-size": n(`--text-heading-sm`, `fontSize`),
      "--font-heading-sm-size": n(`--text-heading-md`, `fontSize`),
      "--font-heading-md-size": n(`--text-heading-lg`, `fontSize`),
      "--font-heading-lg-size": n(`--text-xl`, `fontSize`),
      "--font-heading-xl-size": n(`--text-2xl`, `fontSize`),
      "--font-heading-2xl-size": n(`--text-3xl`, `fontSize`),
      "--font-heading-3xl-size": n(`--text-4xl`, `fontSize`),
      "--font-text-xs-line-height": r(`--text-xs--line-height`),
      "--font-text-sm-line-height": r(`--text-sm--line-height`),
      "--font-text-md-line-height": r(`--text-base--line-height`),
      "--font-text-lg-line-height": r(`--text-lg--line-height`),
      "--font-heading-xs-line-height": `1.33`,
      "--font-heading-sm-line-height": `1.33`,
      "--font-heading-md-line-height": `1.2`,
      "--font-heading-lg-line-height": `1.2`,
      "--font-heading-xl-line-height": `1`,
      "--font-heading-2xl-line-height": `1`,
      "--font-heading-3xl-line-height": `1`,
      "--border-radius-xs": n(`--radius-xs`, `borderRadius`),
      "--border-radius-sm": n(`--radius-sm`, `borderRadius`),
      "--border-radius-md": n(`--radius-md`, `borderRadius`),
      "--border-radius-lg": n(`--radius-lg`, `borderRadius`),
      "--border-radius-xl": n(`--radius-xl`, `borderRadius`),
      "--border-radius-full": n(`--radius-full`, `borderRadius`),
      "--border-width-regular": `1px`,
      "--shadow-hairline": n(`--shadow-hairline`, `boxShadow`),
      "--shadow-sm": n(`--shadow-sm`, `boxShadow`),
      "--shadow-md": n(`--shadow-md`, `boxShadow`),
      "--shadow-lg": n(`--shadow-lg`, `boxShadow`),
    };
  } finally {
    t.remove();
  }
}
function Rt(e, t, n, r) {
  let i = e.getPropertyValue(n).trim();
  if (i.length === 0) return;
  t.style[r] = `var(${n})`;
  let a = getComputedStyle(t)[r].trim();
  return a.length === 0 || a === `var(${n})` ? i : a;
}
var zt = `CALL`,
  Bt = `GENERATOR_GENERATE`,
  Vt = `REJECT`,
  Ht = `RESOLVE`,
  Ut = 1e4,
  Wt = 3e4,
  Gt = S;
async function Kt({
  hostApiHandlers: e,
  origin: t,
  sandboxId: n,
  signal: r,
  sourceUrl: i,
  webview: a,
}) {
  let o = crypto.randomUUID(),
    { ports: s, replyPort: c } = await new Promise((e, s) => {
      if (r.aborted) {
        s(en());
        return;
      }
      let c,
        l = () => {
          (window.removeEventListener(`message`, u),
            r.removeEventListener(`abort`, d),
            c != null && clearTimeout(c));
        },
        u = (r) => {
          let i = r.data;
          if (
            i?.type !== `init` ||
            i.origin !== t ||
            i.sandboxId !== n ||
            i.initId !== o ||
            !Array.isArray(i.portNames)
          )
            return;
          let a = i.portNames;
          if (!x(a) || r.ports.length !== a.length + 1) return;
          let s = qt(a, r.ports);
          if (s == null) return;
          let c = r.ports[a.length];
          c != null && (l(), e({ ports: s, replyPort: c }));
        },
        d = () => {
          (l(), s(en()));
        };
      (window.addEventListener(`message`, u),
        r.addEventListener(`abort`, d, { once: !0 }),
        (c = setTimeout(() => {
          (l(), s(tn()));
        }, Ut)));
      let f = m({ initId: o, sourceUrl: i });
      a.getAttribute(`src`) !== f && a.setAttribute(`src`, f);
    }),
    l = Zt(e);
  return (c.postMessage(l, Object.values(l)), c.start(), Xt(s, r));
}
function qt(e, t) {
  let n = {};
  for (let r of Gt) {
    let i = t[e.indexOf(r)];
    if (!Yt(i)) return null;
    n[r] = i;
  }
  return n;
}
function Jt(e) {
  return typeof e == `object` && !!e;
}
function Yt(e) {
  return Jt(e) ? typeof e.postMessage == `function` && typeof e.start == `function` : !1;
}
function Xt(e, t) {
  return {
    navigate: Z(e.navigate),
    notifyMcpAppsHostContext: Z(e.notifyMcpAppsHostContext),
    notifyMcpAppsToolCancelled: Z(e.notifyMcpAppsToolCancelled),
    notifyMcpAppsToolInput: Z(e.notifyMcpAppsToolInput),
    notifyMcpAppsToolResult: Z(e.notifyMcpAppsToolResult),
    requestMcpAppsResourceTeardown: Z(e.requestMcpAppsResourceTeardown),
    runWidgetCode: nn(e.runWidgetCode, t),
    setAdditionalGlobals: Z(e.setAdditionalGlobals),
    setSafeArea: Z(e.setSafeArea),
    setTheme: Z(e.setTheme),
    setWidgetData: Z(e.setWidgetData),
    setWidgetView: Z(e.setWidgetView),
  };
}
function Zt(e) {
  return {
    callMcp: X(e.callMcp),
    callTool: X(e.callTool),
    notifyBackgroundColor: X(e.notifyBackgroundColor),
    notifyEnvironmentError: X(e.notifyEnvironmentError),
    notifyIntrinsicHeight: X(e.notifyIntrinsicHeight),
    notifyIntrinsicWidth: X(e.notifyIntrinsicWidth),
    notifyNavigation: X(e.notifyNavigation),
    notifySecurityPolicyViolation: X(e.notifySecurityPolicyViolation),
    openExternal: X(e.openExternal),
    requestDisplayMode: X(e.requestDisplayMode),
    sendFollowUpMessage: X(e.sendFollowUpMessage),
    sendInstrument: X(e.sendInstrument),
    updateWidgetState: X(e.updateWidgetState),
  };
}
function X(e) {
  let { port1: t, port2: n } = new MessageChannel();
  return (
    (t.onmessage = async (t) => {
      let [n, ...r] = t.data,
        [i] = t.ports;
      if (!(n !== zt || i == null))
        try {
          i.postMessage([Ht, await e(...r)]);
        } catch (e) {
          i.postMessage([Vt, Qt(e)]);
        } finally {
          i.close();
        }
    }),
    t.start(),
    n
  );
}
function Qt(e) {
  return e instanceof Error
    ? { ...$t(e), message: e.message || `MCP sandbox host call failed.`, name: e.name }
    : typeof e == `object` &&
        e &&
        `message` in e &&
        typeof e.message == `string` &&
        e.message.length > 0
      ? { ...$t(e), message: e.message }
      : { message: `MCP sandbox host call failed.` };
}
function $t(e) {
  return {
    ...(`code` in e && typeof e.code == `number` ? { code: e.code } : {}),
    ...(`name` in e && typeof e.name == `string` ? { name: e.name } : {}),
  };
}
function en() {
  let e = Error(`MCP sandbox RPC aborted.`);
  return ((e.name = `AbortError`), e);
}
function tn() {
  let e = Error(`MCP sandbox RPC timed out.`);
  return ((e.name = `TimeoutError`), e);
}
function Z(e, t = {}) {
  return (
    e.start(),
    (n) =>
      new Promise((r, i) => {
        let a = t.signal,
          o = t.timeoutMs === void 0 ? Wt : t.timeoutMs;
        if (a?.aborted) {
          i(en());
          return;
        }
        let { port1: s, port2: c } = new MessageChannel(),
          l,
          u = !1,
          d = () => {
            (l != null && clearTimeout(l),
              a?.removeEventListener(`abort`, p),
              (s.onmessage = null),
              s.close());
          },
          f = (e, t) => {
            u || ((u = !0), d(), e(t));
          },
          p = () => {
            f(i, en());
          };
        ((s.onmessage = (e) => {
          let t = e.data;
          t[0] === Ht ? f(r, t[1]) : f(i, t[1]);
        }),
          a?.addEventListener(`abort`, p, { once: !0 }),
          o != null &&
            (l = setTimeout(() => {
              f(i, tn());
            }, o)));
        try {
          e.postMessage([zt, n], [c]);
        } catch (e) {
          f(i, e);
        }
      })
  );
}
function nn(e, t) {
  return (
    e.start(),
    async function* (n) {
      let { port1: r, port2: i } = new MessageChannel(),
        { port1: a, port2: o } = new MessageChannel(),
        { port1: s, port2: c } = new MessageChannel(),
        { port1: l, port2: u } = new MessageChannel(),
        d = Z(r),
        f = Z(a, { signal: t, timeoutMs: null }),
        p = Z(s),
        m = Z(l);
      e.postMessage([Bt, { asyncDispose: i, next: o, return: c, throw: u }, n], [i, o, c, u]);
      try {
        let e = await f(void 0);
        for (; !e.done; ) (yield e.value, (e = await f(void 0)));
        return e.value;
      } catch (e) {
        if (t.aborted) return;
        throw (await m(e).catch(() => {}), e);
      } finally {
        (t.aborted || (await Promise.allSettled([d(void 0), p(void 0)])),
          [r, a, s, l].forEach((e) => {
            e.close();
          }));
      }
    }
  );
}
var rn = e(O(), 1),
  an = -32e3,
  on = f(),
  sn = p(v(), h()),
  cn = g({ text: v(), type: s(`text`) }).strip(),
  ln = g({ data: v(), mimeType: v(), type: s(`image`) }).strip(),
  un = g({ type: n([`audio`, `image`, `resource`, `resource_link`, `text`]) }).passthrough(),
  dn = g({ status: s(2), type: s(`environment_status`) }).passthrough(),
  fn = v(),
  pn = g({ mode: n([`inline`, `fullscreen`]) }),
  mn = g({ canGoBack: i(), canGoForward: i() }).passthrough(),
  hn = g({ prompt: v().trim().min(1) }).strip(),
  gn = g({ method: v(), params: p(v(), h()).optional() }).strip(),
  _n = g({ blob: u(Blob), name: v().trim().min(1) }).strip(),
  vn = t({ [ce]: de.optional(), progressToken: fe.optional() }),
  yn = g({
    name: v().min(1),
    arguments: p(v(), on).optional(),
    _meta: vn.optional(),
  }).passthrough(),
  bn = g({ uri: v().min(1) }).passthrough(),
  xn = g({ code: b().optional(), message: v().min(1) }).passthrough(),
  Sn = b().finite().positive(),
  Cn = g({ href: v().refine(br) }),
  wn = p(v(), on),
  Tn = g({ content: d(h()).optional() }).passthrough(),
  En = g({ content: d(un), structuredContent: sn.optional() }).strict(),
  Dn = { insets: { bottom: 0, left: 0, right: 0, top: 0 } },
  On = { insets: { ...Dn.insets, top: 48 } },
  kn = 240,
  An = 200,
  jn = 720,
  Mn = { canGoBack: !1, canGoForward: !1 },
  Nn = [],
  Pn = [],
  Fn = z({
    workLocally: {
      id: `codex.mcpTool.confirmFollowUp.workLocally`,
      defaultMessage: `Work locally`,
      description: `Dropdown option for starting an MCP app follow-up thread in the selected local project`,
    },
    newWorktree: {
      id: `codex.mcpTool.confirmFollowUp.newWorktree`,
      defaultMessage: `New worktree`,
      description: `Dropdown option for starting an MCP app follow-up thread in a new worktree`,
    },
    newWorktreeRequiresGitProject: {
      id: `codex.mcpTool.confirmFollowUp.newWorktreeRequiresGitProject`,
      defaultMessage: `New worktree requires a local git project`,
      description: `Tooltip for a disabled MCP app follow-up worktree option when no local git project is available`,
    },
    newWorktreeDesktopOnly: {
      id: `codex.mcpTool.confirmFollowUp.newWorktreeDesktopOnly`,
      defaultMessage: `New worktree is only available in the Codex desktop app`,
      description: `Tooltip for a disabled MCP app follow-up worktree option outside the Codex desktop app`,
    },
  });
function In(e) {
  let t = (0, K.c)(5),
    { isInlineExpanded: n, mcpAppId: r } = e,
    i = ee(U),
    a,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = () => {
          bt(i, r, n);
        }),
        (o = [n, r, i]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : ((a = t[3]), (o = t[4])),
    (0, J.useLayoutEffect)(a, o),
    null
  );
}
function Ln(e) {
  let t = (0, K.c)(39),
    {
      conversationId: n,
      csp: r,
      error: i,
      fullSurface: a,
      hostId: o,
      hostedInThreadScrollLayout: s,
      html: c,
      isLoading: l,
      mcpAppId: u,
      mcpAppScope: d,
      mcpServerStatuses: f,
      overrideMcpRequest: p,
      prefersBorder: m,
      sandboxOriginScope: h,
      server: g,
      sidePanelConnectorIcon: _,
      sidePanelTitle: v,
      title: y,
      toolArguments: b,
      toolResult: x,
      widgetDomain: S,
    } = e,
    C = a === void 0 ? !1 : a,
    w = ee(U),
    T = te(st),
    E = te(ot),
    D = te(ge.tabs$),
    O;
  t[0] === c ? (O = t[1]) : ((O = c == null ? 0 : new Blob([c]).size), (t[0] = c), (t[1] = O));
  let k = O,
    A,
    j;
  t[2] !== n ||
  t[3] !== T ||
  t[4] !== u ||
  t[5] !== d ||
  t[6] !== E ||
  t[7] !== D ||
  t[8] !== h ||
  t[9] !== g
    ? ((A = vt(
        T,
        {
          conversationId: n,
          inlineFrameContainer: null,
          mcpAppId: u,
          mcpAppScope: d,
          sandboxOriginScope: h,
          server: g,
        },
        E,
      )),
      (j = D.some((e) => e.tabId === rt(A))),
      (t[2] = n),
      (t[3] = T),
      (t[4] = u),
      (t[5] = d),
      (t[6] = E),
      (t[7] = D),
      (t[8] = h),
      (t[9] = g),
      (t[10] = A),
      (t[11] = j))
    : ((A = t[10]), (j = t[11]));
  let M = j,
    N,
    P;
  return (
    t[12] !== n ||
    t[13] !== r ||
    t[14] !== i ||
    t[15] !== C ||
    t[16] !== M ||
    t[17] !== o ||
    t[18] !== s ||
    t[19] !== c ||
    t[20] !== k ||
    t[21] !== l ||
    t[22] !== A ||
    t[23] !== u ||
    t[24] !== d ||
    t[25] !== f ||
    t[26] !== p ||
    t[27] !== m ||
    t[28] !== h ||
    t[29] !== w ||
    t[30] !== g ||
    t[31] !== _ ||
    t[32] !== v ||
    t[33] !== y ||
    t[34] !== b ||
    t[35] !== x ||
    t[36] !== S
      ? ((N = () => {
          i != null ||
            c == null ||
            k > 1e7 ||
            l ||
            x == null ||
            (M && yt(w, A, { isFullScreen: !0 }),
            _t(w, {
              conversationId: n,
              csp: r,
              fullSurface: C,
              hostId: o,
              hostedInThreadScrollLayout: s,
              html: c,
              inlineFrameContainer: null,
              mcpAppId: u,
              mcpAppScope: d,
              mcpServerStatuses: f,
              prefersBorder: m,
              overrideMcpRequest: p,
              sandboxOriginScope: h,
              server: g,
              sidePanelConnectorIcon: _,
              sidePanelTitle: v,
              title: y,
              toolArguments: b,
              toolResult: x,
              widgetDomain: S,
            }));
        }),
        (P = [n, r, i, C, o, s, M, c, k, l, u, A, d, f, p, m, h, w, g, _, v, y, b, x, S]),
        (t[12] = n),
        (t[13] = r),
        (t[14] = i),
        (t[15] = C),
        (t[16] = M),
        (t[17] = o),
        (t[18] = s),
        (t[19] = c),
        (t[20] = k),
        (t[21] = l),
        (t[22] = A),
        (t[23] = u),
        (t[24] = d),
        (t[25] = f),
        (t[26] = p),
        (t[27] = m),
        (t[28] = h),
        (t[29] = w),
        (t[30] = g),
        (t[31] = _),
        (t[32] = v),
        (t[33] = y),
        (t[34] = b),
        (t[35] = x),
        (t[36] = S),
        (t[37] = N),
        (t[38] = P))
      : ((N = t[37]), (P = t[38])),
    (0, J.useLayoutEffect)(N, P),
    null
  );
}
function Rn(e) {
  let t = (0, K.c)(30),
    { error: n, fullSurface: r, heightHint: i, html: a, isLoading: o, mcpAppId: s } = e,
    c = r === void 0 ? !1 : r,
    l = ee(U),
    u = ne(),
    d = A(ut, s),
    f = A(dt, s),
    [p, m] = (0, J.useState)(null),
    h = a == null ? 0 : new Blob([a]).size,
    g = d != null,
    _;
  t[0] !== f.intrinsicHeight || t[1] !== i
    ? ((_ = yr(f.intrinsicHeight, i)), (t[0] = f.intrinsicHeight), (t[1] = i), (t[2] = _))
    : (_ = t[2]);
  let v = _,
    y = n ?? f.sandboxError,
    b,
    x;
  if (
    (t[3] !== g || t[4] !== p || t[5] !== s || t[6] !== l
      ? ((b = () => {
          if (g)
            return (
              ht(l, s, p),
              () => {
                mt(l, s, p);
              }
            );
        }),
        (x = [p, g, s, l]),
        (t[3] = g),
        (t[4] = p),
        (t[5] = s),
        (t[6] = l),
        (t[7] = b),
        (t[8] = x))
      : ((b = t[7]), (x = t[8])),
    (0, J.useLayoutEffect)(b, x),
    h > 1e7)
  ) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(He, {
            className: `w-full`,
            fullWidth: !0,
            level: `danger`,
            children: (0, q.jsx)(`div`, {
              className: `text-size-chat max-h-48 overflow-auto whitespace-pre-wrap`,
              children: (0, q.jsx)(R, {
                id: `codex.mcpTool.mcpAppTooLarge`,
                defaultMessage: `Failed to load MCP app: HTML exceeds the maximum supported size.`,
                description: `Error shown when an MCP app resource is too large to render`,
              }),
            }),
          })),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (o) {
    let e;
    t[10] === u
      ? (e = t[11])
      : ((e = u.formatMessage({
          id: `codex.mcpTool.mcpAppLoading`,
          defaultMessage: `Loading MCP app`,
          description: `Accessible label for the MCP app loading placeholder`,
        })),
        (t[10] = u),
        (t[11] = e));
    let n = c ? `h-full border-t` : `rounded-lg border`,
      r;
    t[12] === n
      ? (r = t[13])
      : ((r = D(`mcp-app-loading-pulse w-full overflow-hidden border-token-border-light`, n)),
        (t[12] = n),
        (t[13] = r));
    let i = c ? `100%` : kn,
      a;
    t[14] === i ? (a = t[15]) : ((a = { height: i }), (t[14] = i), (t[15] = a));
    let o;
    return (
      t[16] !== e || t[17] !== r || t[18] !== a
        ? ((o = (0, q.jsx)(`div`, {
            role: `status`,
            "aria-label": e,
            "data-mcp-app-loading": `true`,
            className: r,
            style: a,
          })),
          (t[16] = e),
          (t[17] = r),
          (t[18] = a),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  if (y != null) {
    let e;
    return (
      t[20] === y.message
        ? (e = t[21])
        : ((e = (0, q.jsx)(He, {
            className: `w-full`,
            fullWidth: !0,
            level: `danger`,
            children: (0, q.jsx)(`div`, {
              className: `text-size-chat max-h-48 overflow-auto whitespace-pre-wrap`,
              children: (0, q.jsx)(R, {
                id: `codex.mcpTool.mcpAppLoadFailed`,
                defaultMessage: `Failed to load MCP app: {message}`,
                description: `Error shown when an MCP app resource fails to load`,
                values: { message: y.message },
              }),
            }),
          })),
          (t[20] = y.message),
          (t[21] = e)),
      e
    );
  }
  if (a == null) {
    let e;
    return (
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(`p`, {
            className: `text-token-description-foreground/80`,
            children: (0, q.jsx)(R, {
              id: `codex.mcpTool.mcpAppNoContent`,
              defaultMessage: `MCP app returned no HTML content`,
              description: `Message shown when an MCP app resource has no renderable HTML`,
            }),
          })),
          (t[22] = e))
        : (e = t[22]),
      e
    );
  }
  let S = c && `h-full`,
    C;
  t[23] === S ? (C = t[24]) : ((C = D(`w-full overflow-hidden`, S)), (t[23] = S), (t[24] = C));
  let w = f.isFullScreen ? 0 : c ? `100%` : v,
    T;
  t[25] === w ? (T = t[26]) : ((T = { height: w }), (t[25] = w), (t[26] = T));
  let E;
  return (
    t[27] !== C || t[28] !== T
      ? ((E = (0, q.jsx)(`div`, {
          ref: m,
          "data-mcp-app-expanded": `true`,
          className: C,
          style: T,
        })),
        (t[27] = C),
        (t[28] = T),
        (t[29] = E))
      : (E = t[29]),
    E
  );
}
function zn(e) {
  let t = (0, K.c)(9),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { mcpAppId: r } = n,
    i = te(ot),
    a;
  t[2] === i ? (a = t[3]) : ((a = Array.from(i.keys())), (t[2] = i), (t[3] = a));
  let o = a;
  if (r != null) {
    let e;
    (t[4] !== r || t[5] !== i
      ? ((e = i.has(r) ? [r] : []), (t[4] = r), (t[5] = i), (t[6] = e))
      : (e = t[6]),
      (o = e));
  }
  let s;
  return (
    t[7] === o
      ? (s = t[8])
      : ((s = (0, q.jsx)(q.Fragment, { children: o.map(Bn) })), (t[7] = o), (t[8] = s)),
    s
  );
}
function Bn(e) {
  return (0, q.jsx)(Vn, { mcpAppId: e }, e);
}
function Vn(e) {
  let t = (0, K.c)(5),
    { mcpAppId: n } = e,
    r = A(ut, n),
    i = A(dt, n),
    a = A(ft, n);
  if (r == null || (!i.isInlineExpanded && !i.isFullScreen && !a)) return null;
  let o =
      i.isFullScreen || (!i.isInlineExpanded && r.inlineFrameContainer?.isConnected !== !0 && a)
        ? (r.sidePanelFrameContent ?? r.inlineFrameContent)
        : r.inlineFrameContent,
    s;
  return (
    t[0] !== o || t[1] !== i || t[2] !== r.inlineFrameContainer || t[3] !== r.mcpAppId
      ? ((s = (0, q.jsx)(Hn, {
          ...o,
          inlineFrameContainer: r.inlineFrameContainer,
          mcpAppId: r.mcpAppId,
          frameState: i,
        })),
        (t[0] = o),
        (t[1] = i),
        (t[2] = r.inlineFrameContainer),
        (t[3] = r.mcpAppId),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function Hn({
  conversationId: e,
  csp: t,
  fullSurface: n,
  hostId: i,
  html: a,
  inlineFrameContainer: o,
  mcpAppId: s,
  mcpAppScope: c,
  mcpServerStatuses: u,
  prefersBorder: d,
  overrideMcpRequest: f,
  sandboxOriginScope: p,
  server: m,
  sidePanelConnectorIcon: h,
  sidePanelTitle: g,
  title: _,
  toolArguments: v,
  toolResult: b,
  widgetDomain: x,
  frameState: S,
}) {
  let w = ee(U),
    T = ne(),
    E = re(),
    O = ae(e),
    { createPendingWorktree: k } = ke(),
    A = te(ge.activeTab$),
    { rightPanelLayoutTick: j } = pe(),
    M = te(It),
    { isFullScreen: N } = S,
    I = (0, J.useRef)(!1),
    L = (0, J.useRef)(null),
    [z, B] = (0, J.useState)(null),
    [V, H] = (0, J.useState)(null),
    [se, ce] = (0, J.useState)(!1),
    [le, ue] = (0, J.useState)(null),
    [de, fe] = (0, J.useState)(null),
    [W, he] = (0, J.useState)(null),
    [G, _e] = (0, J.useState)(Mn),
    [ve, ye] = (0, J.useState)(null),
    [be, xe] = (0, J.useState)(!1),
    [Se, Ce] = (0, J.useState)(null),
    [we, Te] = (0, J.useState)(null),
    Ee = (0, J.useMemo)(() => rr(v), [v]),
    De = (0, J.useMemo)(() => ir(b), [b]),
    Ae = (0, J.useMemo)(() => We({ toolResult: b }), [b]),
    je = (0, J.useEffectEvent)(() => ({
      toolInput: Ee,
      toolOutput: De,
      toolResponseMetadata: Ae,
      toolResult: b,
    })),
    Me = Ue({ locale: T.locale, originScope: p, widgetDomain: x }),
    Ne = (0, J.useMemo)(() => Ge({ originScope: p, sourceUrl: Me }), [Me, p]),
    Pe = (0, J.useEffectEvent)(() => {
      let e = r(Me);
      return e == null
        ? null
        : { csp: t, html: a, locale: T.locale, sandboxOrigin: e, sourceUrl: Me };
    }),
    Fe = le?.isConnected === !0 ? le : null,
    Ie = o?.isConnected === !0 ? o : null,
    Le = z?.parentElement,
    Re =
      Ie?.closest(`[data-mcp-app-portal-target='true']`) ??
      (Le instanceof HTMLElement && Le.dataset.mcpAppPortalTarget === `true`
        ? Le
        : document.querySelector(`[data-mcp-app-portal-target='true']`)),
    ze = (0, J.useEffectEvent)((e) => {
      let t = fn.safeParse(e);
      t.success && fe(t.data);
    }),
    Be = (0, J.useEffectEvent)(() => {
      yt(w, s, { sandboxError: Error(`The MCP app sandbox failed to load.`) });
    }),
    Ve = (0, J.useEffectEvent)((e) => {
      let t = Sn.safeParse(e);
      t.success && yt(w, s, { intrinsicHeight: t.data });
    }),
    He = (0, J.useEffectEvent)((e) => {
      Sn.safeParse(e);
    }),
    Ke = (0, J.useEffectEvent)((e) => {
      let t = mn.safeParse(e);
      t.success && _e({ canGoBack: t.data.canGoBack, canGoForward: t.data.canGoForward });
    }),
    qe = (0, J.useEffectEvent)((e) => {
      let t = Cn.safeParse(e);
      t.success && P.dispatchMessage(`open-in-browser`, { url: t.data.href });
    }),
    Je = (0, J.useEffectEvent)((e) => {
      let t = pn.safeParse(e);
      if (t.success) {
        let e = t.data.mode === `fullscreen`,
          n = t.data.mode;
        return (
          e && gt(w, s),
          yt(w, s, { isFullScreen: e }),
          W != null &&
            ve != null &&
            (Q(W.setWidgetView({ displayMode: n, isTombstone: !1, viewParams: De, widgetId: ve })),
            z != null &&
              Q(
                W.notifyMcpAppsHostContext({
                  hostContext: pr({
                    containerDimensions: hr(z),
                    displayMode: n,
                    locale: T.locale,
                    safeAreaInsets: mr({
                      displayMode: n,
                      hasNavigationHistory: G.canGoBack || G.canGoForward,
                    }).insets,
                    styleVariables: M,
                    theme: gr(),
                    userAgent: _r(),
                  }),
                }),
              )),
          { mode: n }
        );
      }
      return { mode: N ? `fullscreen` : `inline` };
    }),
    Ye = (0, J.useEffectEvent)(() => (N ? `fullscreen` : `inline`)),
    Xe = (0, J.useEffectEvent)(() => Se),
    Ze = (e) => {
      let t = tr(e.content);
      O({ id: s, imageAttachments: nr(e.content), text: t, title: _ });
    },
    Qe = (0, J.useEffectEvent)((e, t) => {
      let n = wn.safeParse(t);
      Ce(n.success ? n.data : null);
      let r = En.safeParse(t);
      r.success && Ze(r.data);
    }),
    K = (0, J.useEffectEvent)((e) => {
      W != null && Q(W.navigate({ delta: e }));
    }),
    $e = (0, J.useEffectEvent)(async (t) => {
      let n = hn.safeParse(t);
      if (!n.success) throw $(`Invalid follow-up message`, -32602);
      if (we != null) throw $(`A follow-up message is already awaiting confirmation`, an);
      let { prompt: r } = n.data,
        a = await new Promise((e, t) => {
          Te({ prompt: r, reject: t, resolve: e });
        });
      switch (a.type) {
        case `current-thread`:
          await C(`send-follow-up-message`, {
            conversationId: e,
            prompt: a.prompt,
            serviceTier: await Oe(w, i, null),
          });
          return;
        case `new-thread`:
          if (a.executionMode === `worktree`) {
            await E(
              `/worktree-init-v2/${await Qn({ createPendingWorktree: k, hostId: i, prompt: a.prompt, projectRoot: a.projectRoot, scope: w })}`,
            );
            return;
          }
          await E(
            y(await Zn({ hostId: i, prompt: a.prompt, projectRoot: a.projectRoot, scope: w })),
          );
          return;
      }
    }),
    et = async (e, t) => (f == null ? t() : f(e)),
    at = (t) =>
      et({ method: `tools/call`, params: t }, () =>
        or({
          conversationId: e,
          hostId: i,
          mcpAppScope: c,
          mcpServerStatuses: u,
          server: m,
          toolCallParams: t,
        }),
      ),
    ot = (0, J.useEffectEvent)(async (e, t) => {
      let n = yn.safeParse({ arguments: t, name: e });
      if (!n.success) throw $(`Invalid MCP tool call params`, -32602);
      return at(n.data);
    }),
    st = (0, J.useEffectEvent)(async (t) => {
      let n = gn.safeParse(t);
      if (!n.success) throw $(`Invalid MCP proxy request`, -32602);
      let { method: r, params: a } = n.data;
      switch (r) {
        case `ping`:
          return {};
        case `ui/download-file`: {
          let e = _n.safeParse(a);
          if (!e.success) throw $(`Invalid MCP file download params`, -32602);
          return (er(e.data), {});
        }
        case `ui/update-model-context`: {
          let e = Tn.safeParse(a);
          if (!e.success) throw $(`Invalid MCP model context params`, -32602);
          return (Ze(e.data), {});
        }
        case `tools/call`: {
          let e = yn.safeParse(a);
          if (!e.success) throw $(`Invalid MCP tool call params`, -32602);
          return at(e.data);
        }
        case `resources/read`: {
          let t = bn.safeParse(a);
          if (!t.success) throw $(`Invalid MCP resource read params`, -32602);
          return et({ method: r, params: t.data }, async () => {
            lr(() => {
              jt({ mcpAppScope: c, server: m, uri: t.data.uri });
            });
            try {
              return await C(`read-mcp-resource`, {
                hostId: i,
                threadId: e,
                server: m,
                uri: t.data.uri,
              });
            } catch (e) {
              throw fr(e, `MCP resource read failed`);
            }
          });
        }
        case `tools/list`:
          return et(n.data, async () => {
            let e = cr(await ar({ hostId: i, mcpServerStatuses: Y(m) ? u : void 0, server: m })),
              t = Ot({ mcpAppScope: c, server: m, tools: e });
            return { tools: lr(() => At({ connectorId: t, server: m, tools: e })) };
          });
        case `resources/list`:
          return et(n.data, async () =>
            Y(m)
              ? { resources: [] }
              : { resources: (await ar({ hostId: i, server: m })).resources },
          );
        case `resources/templates/list`:
          return et(n.data, async () =>
            Y(m)
              ? { resourceTemplates: [] }
              : { resourceTemplates: (await ar({ hostId: i, server: m })).resourceTemplates },
          );
        case `prompts/list`:
          return et(n.data, async () => ({ prompts: [] }));
        default:
          return et(n.data, async () => {
            throw $(`Unsupported MCP proxy method: ${r}`, -32601);
          });
      }
    });
  ((0, J.useLayoutEffect)(() => {
    let e = document.createElement(`div`),
      t = document.createElement(`webview`);
    return (
      t.setAttribute(`partition`, l(Ne)),
      B(e),
      H(t),
      () => {
        (e.remove(), B((t) => (t === e ? null : t)), H((e) => (e === t ? null : e)), ce(!1));
      }
    );
  }, [s, Me, Ne]),
    (0, J.useLayoutEffect)(() => {
      z == null ||
        V == null ||
        ((z.className = D(
          `group/mcp-app relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden bg-token-background`,
          !N && (n ? `border-t border-token-border-light` : `rounded-lg border shadow-sm`),
          !N && !n && (d ? `border-token-border` : `border-token-border-light`),
        )),
        (V.className = D(
          `bg-token-background h-full min-h-0 min-w-0 w-full overflow-hidden`,
          !N && !n && `rounded-lg`,
          N && `min-h-0 flex-1`,
        )),
        (V.style.backgroundColor = de ?? ``),
        (V.title = _));
    }, [de, n, z, N, d, V, _]),
    (0, J.useLayoutEffect)(() => {
      if (z == null || V == null) return;
      let e = N ? Fe : Ie;
      if (e == null || Re == null) {
        z.style.display = `none`;
        return;
      }
      (V.parentElement !== z && z.appendChild(V),
        z.parentElement !== Re && Re.appendChild(z),
        (z.style.display = ``),
        se || ce(!0));
      let t = () => {
        $n({ frameElement: z, isFullScreen: N, targetFrameContainer: e, threadFrameContainer: Re });
      };
      if ((t(), typeof ResizeObserver > `u`)) return;
      let n = new ResizeObserver(t);
      (n.observe(e), n.observe(Re));
      let r = j.on(`change`, t);
      return () => {
        (n.disconnect(), r());
      };
    }, [z, Ie, N, se, j, V, Fe, Re]),
    (0, J.useLayoutEffect)(
      () => (
        (I.current = !1),
        () => {
          ((I.current = !0), nt(w, s));
        }
      ),
      [s, w],
    ));
  let ct = (0, J.useEffectEvent)((e) => {
      tt(w, {
        activate: !w.get(ge.tabs$).some((e) => e.tabId === rt(s)),
        connectorIcon: h,
        mcpAppId: s,
        onExitFullScreen: e,
        onPanelElementChange: ue,
        title: g,
      });
    }),
    lt = (0, J.useEffectEvent)(() => {
      I.current || (gt(w, s), yt(w, s, { isFullScreen: !1 }));
    });
  ((0, J.useLayoutEffect)(() => {
    if (N) {
      ct(lt);
      return;
    }
    nt(w, s);
  }, [N, s, w, h?.alt, h?.logoDarkUrl, h?.logoUrl, g]),
    (0, J.useLayoutEffect)(() => {
      if (V == null || z == null || !se) return;
      (yt(w, s, { sandboxError: null }), xe(!1), _e(Mn), (L.current = null));
      let e = Pe();
      if (e == null) {
        (F.warning(`mcp_app_sandbox.init_config_missing`, { safe: {}, sensitive: { mcpAppId: s } }),
          yt(w, s, { sandboxError: Error(`The MCP app sandbox failed to load.`) }));
        return;
      }
      let t = new AbortController(),
        n = null,
        r = crypto.randomUUID(),
        i = Xe(),
        { toolInput: a, toolOutput: o, toolResponseMetadata: c } = je();
      return (
        Kt({
          hostApiHandlers: {
            callMcp: st,
            callTool: ot,
            notifyBackgroundColor: ze,
            notifyEnvironmentError: Be,
            notifyIntrinsicHeight: Ve,
            notifyIntrinsicWidth: He,
            notifyNavigation: (e) => {
              t.signal.aborted || Ke(e);
            },
            notifySecurityPolicyViolation: () => {},
            openExternal: qe,
            requestDisplayMode: Je,
            sendFollowUpMessage: $e,
            sendInstrument: () => {},
            updateWidgetState: Qe,
          },
          origin: e.sandboxOrigin,
          sandboxId: Ne,
          signal: t.signal,
          sourceUrl: e.sourceUrl,
          webview: V,
        })
          .then(async (s) => {
            if (t.signal.aborted) return;
            ((n = s), he(s), ye(r));
            let l = Ye(),
              u = gr(),
              d = hr(z),
              f = _r(),
              p = pr({
                containerDimensions: d,
                displayMode: l,
                locale: e.locale,
                safeAreaInsets: Dn.insets,
                styleVariables: w.get(It),
                theme: u,
                userAgent: f,
              }),
              m = s.runWidgetCode({
                csp: e.csp,
                displayMode: l,
                features: [`fullscreen`],
                html: e.html,
                isFirstParty: !1,
                isSidebarOpen: !1,
                isTombstone: !1,
                maxHeight: d.maxHeight,
                maxWidth: d.maxWidth,
                measureWidth: !1,
                mcpApps: {
                  hostCapabilities: {
                    logging: {},
                    message: {},
                    openLinks: {},
                    serverResources: {},
                    serverTools: {},
                    updateModelContext: { image: {}, text: {} },
                    ...(e.csp == null
                      ? {}
                      : {
                          sandbox: {
                            csp: {
                              baseUriDomains: e.csp.baseUriDomains,
                              connectDomains: e.csp.connectDomains,
                              frameDomains: e.csp.frameDomains,
                              resourceDomains: e.csp.resourceDomains,
                            },
                          },
                        }),
                  },
                  hostContext: p,
                  hostInfo: { name: `chatgpt` },
                },
                safeArea: Dn,
                theme: u,
                toolInput: a,
                toolOutput: o,
                toolResponseMetadata: c,
                userAgent: f,
                viewParams: o,
                widgetId: r,
                widgetState: i,
              }),
              h = !1;
            for await (let e of m) {
              if (t.signal.aborted) break;
              h ||
                !dn.safeParse(e).success ||
                ((h = !0),
                xe(!0),
                Q(s.setWidgetView({ displayMode: l, isTombstone: !1, viewParams: o, widgetId: r })),
                Q(s.setTheme({ theme: u })),
                Q(s.setSafeArea({ safeArea: Dn })),
                Q(
                  s.setAdditionalGlobals({
                    additionalGlobals: {
                      isSidebarOpen: !1,
                      maxHeight: d.maxHeight,
                      maxWidth: d.maxWidth,
                    },
                  }),
                ),
                Q(s.notifyMcpAppsHostContext({ hostContext: p })));
            }
          })
          .catch((e) => {
            t.signal.aborted ||
              (F.warning(`mcp_app_sandbox.init_failed`, {
                safe: {
                  errorMessage: e instanceof Error ? e.message : String(e),
                  errorName: e instanceof Error ? e.name : `UnknownError`,
                },
                sensitive: { mcpAppId: s },
              }),
              xe(!1),
              yt(w, s, { sandboxError: Error(`The MCP app sandbox failed to load.`) }));
          }),
        () => {
          (t.abort(),
            (L.current = null),
            xe(!1),
            he(null),
            _e(Mn),
            ye(null),
            n != null && Q(n.requestMcpAppsResourceTeardown({ timeoutMs: 500 })),
            V.removeAttribute(`src`));
        }
      );
    }, [z, se, s, w, V, Ne]),
    (0, J.useEffect)(() => {
      if (!be || W == null || ve == null) return;
      let e = {
        toolInput: Ee,
        toolOutput: De,
        toolResponseMetadata: Ae,
        toolResult: { content: b.content, structuredContent: b.structuredContent ?? void 0 },
      };
      if ((0, it.default)(L.current, e)) return;
      L.current = e;
      let t = Xe();
      (Q(
        W.setWidgetData({
          toolInput: Ee,
          toolOutput: De,
          toolResponseMetadata: Ae,
          widgetId: ve,
          widgetState: t,
        }),
      ),
        Ee != null && Q(W.notifyMcpAppsToolInput({ arguments: Ee })),
        Q(
          W.notifyMcpAppsToolResult({
            content: b.content,
            ...(b.structuredContent == null ? {} : { structuredContent: b.structuredContent }),
            ...(Ae == null ? {} : { _meta: Ae }),
          }),
        ));
    }, [be, W, Ee, De, Ae, b, ve]),
    (0, J.useEffect)(() => {
      if (z == null || W == null || ve == null || (N && Fe == null)) return;
      let e = null,
        t = N ? `fullscreen` : `inline`,
        n = () => {
          let e = hr(z),
            n = mr({ displayMode: t, hasNavigationHistory: G.canGoBack || G.canGoForward });
          (Q(
            W.setAdditionalGlobals({
              additionalGlobals: {
                isSidebarOpen: !1,
                maxHeight: e.maxHeight,
                maxWidth: e.maxWidth,
              },
            }),
          ),
            Q(W.setSafeArea({ safeArea: n })),
            Q(W.setWidgetView({ displayMode: t, isTombstone: !1, viewParams: De, widgetId: ve })),
            Q(
              W.notifyMcpAppsHostContext({
                hostContext: pr({
                  containerDimensions: e,
                  displayMode: t,
                  locale: T.locale,
                  safeAreaInsets: n.insets,
                  styleVariables: M,
                  theme: gr(),
                  userAgent: _r(),
                }),
              }),
            ));
        },
        r = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), n());
          });
        };
      if ((r(), typeof ResizeObserver > `u`))
        return () => {
          e != null && window.cancelAnimationFrame(e);
        };
      let i = new ResizeObserver(r);
      i.observe(z);
      let a = j.on(`change`, r);
      return () => {
        (i.disconnect(), a(), e != null && window.cancelAnimationFrame(e));
      };
    }, [z, T.locale, M, N, G.canGoBack, G.canGoForward, j, W, Fe, De, ve]));
  let ut = (e) => {
      let t = we;
      t != null && (Te(null), t.resolve(e));
    },
    dt = () => {
      let e = we;
      e != null && (Te(null), e.reject($(`Follow-up message was not confirmed`, an)));
    },
    ft = V?.tagName === `WEBVIEW`,
    pt = z != null && W != null && ft && xr(),
    mt = G.canGoBack || G.canGoForward,
    ht = W != null && mt,
    _t = ht && !N,
    vt = ht && N && A?.tabId === rt(s);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(Gn, { confirmation: we, onCancel: dt, onConfirm: ut }),
      vt
        ? (0, q.jsx)(me.RightPanelTabListBefore, {
            children: (0, q.jsx)(Un, {
              canGoBack: G.canGoBack,
              canGoForward: G.canGoForward,
              className: `h-full px-1`,
              onBack: () => K(-1),
              onForward: () => K(1),
            }),
          })
        : null,
      _t && z != null && !N
        ? (0, rn.createPortal)(
            (0, q.jsx)(Un, {
              canGoBack: G.canGoBack,
              canGoForward: G.canGoForward,
              className: `absolute top-2 left-2 z-50 rounded-md border border-token-border bg-token-main-surface-primary/95 p-0.5 shadow-sm`,
              onBack: () => K(-1),
              onForward: () => K(1),
            }),
            z,
          )
        : null,
      pt
        ? (0, rn.createPortal)(
            (0, q.jsx)(ie, {
              side: `top`,
              align: `end`,
              tooltipContent: (0, q.jsx)(R, {
                id: `codex.mcpTool.mcpAppSandboxDevtoolsTooltip`,
                defaultMessage: `Open app DevTools`,
                description: `Tooltip for a development-only button that opens DevTools for an MCP app sandbox webview`,
              }),
              children: (0, q.jsx)(`div`, {
                className: `absolute top-2 right-2 z-50 inline-flex w-fit`,
                children: (0, q.jsx)(oe, {
                  color: `secondary`,
                  size: `default`,
                  className: `cursor-interaction border border-token-border bg-token-main-surface-primary/95 px-2 py-0.5 text-xs shadow-sm`,
                  "aria-label": T.formatMessage({
                    id: `codex.mcpTool.mcpAppSandboxDevtoolsAriaLabel`,
                    defaultMessage: `Open app DevTools`,
                    description: `Aria label for a development-only button that opens DevTools for an MCP app sandbox webview`,
                  }),
                  onClick: (e) => {
                    (e.stopPropagation(),
                      P.dispatchMessage(`open-mcp-app-sandbox-devtools`, { sandboxId: Ne }));
                  },
                  onPointerDown: (e) => e.stopPropagation(),
                  children: (0, q.jsx)(R, {
                    id: `codex.mcpTool.mcpAppSandboxDevtoolsButton`,
                    defaultMessage: `DevTools`,
                    description: `Label for a development-only button that opens DevTools for an MCP app sandbox webview`,
                  }),
                }),
              }),
            }),
            z,
          )
        : null,
    ],
  });
}
function Un(e) {
  let t = (0, K.c)(20),
    { canGoBack: n, canGoForward: r, className: i, onBack: a, onForward: o } = e,
    s = ne(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `codex.mcpTool.mcpAppNavigationBack`,
        defaultMessage: `Back`,
        description: `Button label to navigate back inside an MCP app`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u;
  t[2] === s
    ? (u = t[3])
    : ((u = s.formatMessage({
        id: `codex.mcpTool.mcpAppNavigationForward`,
        defaultMessage: `Next`,
        description: `Button label to navigate forward inside an MCP app`,
      })),
      (t[2] = s),
      (t[3] = u));
  let d = u,
    f;
  t[4] === i ? (f = t[5]) : ((f = D(`flex items-center gap-px`, i)), (t[4] = i), (t[5] = f));
  let p;
  t[6] === a
    ? (p = t[7])
    : ((p = (e) => {
        (e.stopPropagation(), a());
      }),
      (t[6] = a),
      (t[7] = p));
  let m;
  t[8] === o
    ? (m = t[9])
    : ((m = (e) => {
        (e.stopPropagation(), o());
      }),
      (t[8] = o),
      (t[9] = m));
  let h;
  t[10] !== l || t[11] !== n || t[12] !== r || t[13] !== d || t[14] !== p || t[15] !== m
    ? ((h = (0, q.jsx)($e, {
        backLabel: l,
        canGoBack: n,
        canGoForward: r,
        forwardLabel: d,
        onBack: p,
        onForward: m,
      })),
      (t[10] = l),
      (t[11] = n),
      (t[12] = r),
      (t[13] = d),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== f || t[18] !== h
      ? ((g = (0, q.jsx)(`div`, {
          className: f,
          "data-mcp-app-navigation-controls": `true`,
          onPointerDown: Wn,
          children: h,
        })),
        (t[17] = f),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Wn(e) {
  return e.stopPropagation();
}
function Gn(e) {
  let t = (0, K.c)(10),
    { confirmation: n, onCancel: r, onConfirm: i } = e,
    a = n != null,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = o));
  let s;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((s = n == null ? null : (0, q.jsx)(Kn, { confirmation: n, onCancel: r, onConfirm: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, q.jsx)(Se, { open: a, onOpenChange: o, size: `wide`, children: s })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Kn(e) {
  let t = (0, K.c)(57),
    { confirmation: n, onCancel: r, onConfirm: i } = e,
    o = ne(),
    s = (0, J.useId)(),
    c = te(Ae),
    [l, u] = (0, J.useState)(n.prompt),
    [d, f] = (0, J.useState)(!1),
    [p, m] = (0, J.useState)(`local`),
    [h, g] = (0, J.useState)(null),
    _;
  t[0] === l ? (_ = t[1]) : ((_ = l.trim()), (t[0] = l), (t[1] = _));
  let v = _,
    y,
    b,
    x;
  if (t[2] !== p || t[3] !== h || t[4] !== c) {
    let e = a(`~`);
    ((b = ze({ workspaceGroups: c, roots: [], formatRootLabel: Yn })),
      (x = ze({ workspaceGroups: c?.filter(Jn), roots: [], formatRootLabel: qn })));
    let n = h === e ? e : (b.find((e) => e.value === h)?.value ?? e),
      r = x.find((e) => e.value === h)?.value ?? x[0]?.value ?? null;
    ((y = p === `local` ? a(n) : r == null ? null : a(r)),
      (t[2] = p),
      (t[3] = h),
      (t[4] = c),
      (t[5] = y),
      (t[6] = b),
      (t[7] = x));
  } else ((y = t[5]), (b = t[6]), (x = t[7]));
  let S = y,
    C = x.length > 0,
    w = v.length > 0 && (!d || (S != null && (p === `local` || C))),
    T;
  t[8] !== C || t[9] !== d || t[10] !== p || t[11] !== i || t[12] !== S || t[13] !== v
    ? ((T = (e) => {
        if ((e.preventDefault(), v.length !== 0)) {
          if (d) {
            if (S == null || (p === `worktree` && !C)) return;
            i({ executionMode: p, prompt: v, type: `new-thread`, projectRoot: S });
            return;
          }
          i({ prompt: v, type: `current-thread` });
        }
      }),
      (t[8] = C),
      (t[9] = d),
      (t[10] = p),
      (t[11] = i),
      (t[12] = S),
      (t[13] = v),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, q.jsx)(be, {
        children: (0, q.jsx)(R, {
          id: `codex.mcpTool.confirmFollowUp.title`,
          defaultMessage: `Send follow-up?`,
          description: `Title for a dialog asking whether an MCP app may send a follow-up prompt`,
        }),
      })),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, q.jsx)(xe, {
        title: E,
        subtitle: (0, q.jsx)(Te, {
          children: (0, q.jsx)(R, {
            id: `codex.mcpTool.confirmFollowUp.description`,
            defaultMessage: `An app wants to send this prompt`,
            description: `Description for a dialog asking whether an MCP app may send a follow-up prompt`,
          }),
        }),
      })),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] === o
    ? (O = t[18])
    : ((O = o.formatMessage({
        id: `codex.mcpTool.confirmFollowUp.promptAriaLabel`,
        defaultMessage: `Prompt`,
        description: `Aria label for the editable prompt field in the MCP app follow-up confirmation dialog`,
      })),
      (t[17] = o),
      (t[18] = O));
  let ee;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (e) => {
        u(e.target.value);
      }),
      (t[19] = ee))
    : (ee = t[19]);
  let k;
  t[20] !== l || t[21] !== O
    ? ((k = (0, q.jsx)(`textarea`, {
        "aria-label": O,
        autoFocus: !0,
        className: `max-h-60 min-h-32 resize-y rounded-md border border-token-border bg-token-bg-fog px-3 py-2 text-sm whitespace-pre-wrap text-token-text-primary outline-none focus:border-token-focus-border`,
        value: l,
        onChange: ee,
      })),
      (t[20] = l),
      (t[21] = O),
      (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] !== s || t[24] !== d
    ? ((A = (0, q.jsx)(Me, { id: s, checked: d, onCheckedChange: f })),
      (t[23] = s),
      (t[24] = d),
      (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, q.jsx)(R, {
        id: `codex.mcpTool.confirmFollowUp.createNewThread`,
        defaultMessage: `Create new thread`,
        description: `Checkbox label for sending an MCP app follow-up prompt to a new thread`,
      })),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] === s
    ? (M = t[28])
    : ((M = (0, q.jsx)(`label`, {
        htmlFor: s,
        className: `cursor-interaction text-sm text-token-foreground`,
        children: j,
      })),
      (t[27] = s),
      (t[28] = M));
  let N;
  t[29] !== M || t[30] !== A
    ? ((N = (0, q.jsxs)(`div`, {
        className: `relative flex min-w-0 items-center gap-2`,
        children: [A, M],
      })),
      (t[29] = M),
      (t[30] = A),
      (t[31] = N))
    : (N = t[31]);
  let P;
  t[32] !== C ||
  t[33] !== o ||
  t[34] !== d ||
  t[35] !== p ||
  t[36] !== S ||
  t[37] !== b ||
  t[38] !== x
    ? ((P = d
        ? (0, q.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [
              (0, q.jsx)(Xn, { mode: p, canCreateWorktree: C, onChange: m }),
              (0, q.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, q.jsx)(R, {
                  id: `codex.mcpTool.confirmFollowUp.runsIn`,
                  defaultMessage: `in`,
                  description: `Short label before the project dropdown after the Create new thread checkbox in the MCP app follow-up confirmation dialog`,
                }),
              }),
              (0, q.jsx)(Re, {
                selectedRoots: S == null ? Nn : [S],
                options: p === `worktree` ? x : b,
                placeholder: o.formatMessage({
                  id: `codex.mcpTool.confirmFollowUp.projectPlaceholder`,
                  defaultMessage: `Select project`,
                  description: `Placeholder text for the project dropdown in the MCP app follow-up confirmation dialog`,
                }),
                className: `max-w-56 shrink`,
                includeChats: p === `local`,
                localOnlyTooltip: o.formatMessage({
                  id: `codex.mcpTool.confirmFollowUp.localProjectsOnlyTooltip`,
                  defaultMessage: `Remote projects aren't available for new threads from MCP app follow-ups`,
                  description: `Tooltip explaining why MCP app follow-up new thread project options only include Chats and local projects when remote connections are connected`,
                }),
                selectionMode: `single`,
                onChange: (e) => {
                  g(e[0] ?? null);
                },
              }),
            ],
          })
        : null),
      (t[32] = C),
      (t[33] = o),
      (t[34] = d),
      (t[35] = p),
      (t[36] = S),
      (t[37] = b),
      (t[38] = x),
      (t[39] = P))
    : (P = t[39]);
  let F;
  t[40] !== N || t[41] !== P
    ? ((F = (0, q.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-start gap-2`,
        children: [N, P],
      })),
      (t[40] = N),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, q.jsx)(R, {
        id: `codex.mcpTool.confirmFollowUp.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for a dialog asking whether an MCP app may send a follow-up prompt`,
      })),
      (t[43] = I))
    : (I = t[43]);
  let L;
  t[44] === r
    ? (L = t[45])
    : ((L = (0, q.jsx)(oe, { color: `secondary`, className: `ml-auto`, onClick: r, children: I })),
      (t[44] = r),
      (t[45] = L));
  let z = !w,
    re;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, q.jsx)(R, {
        id: `codex.mcpTool.confirmFollowUp.confirm`,
        defaultMessage: `Send`,
        description: `Confirm button for a dialog asking whether an MCP app may send a follow-up prompt`,
      })),
      (t[46] = re))
    : (re = t[46]);
  let B;
  t[47] === z
    ? (B = t[48])
    : ((B = (0, q.jsx)(oe, { type: `submit`, disabled: z, children: re })),
      (t[47] = z),
      (t[48] = B));
  let V;
  t[49] !== F || t[50] !== L || t[51] !== B
    ? ((V = (0, q.jsxs)(we, { className: `justify-start gap-2`, children: [F, L, B] })),
      (t[49] = F),
      (t[50] = L),
      (t[51] = B),
      (t[52] = V))
    : (V = t[52]);
  let H;
  return (
    t[53] !== V || t[54] !== T || t[55] !== k
      ? ((H = (0, q.jsxs)(Ce, {
          as: `form`,
          className: `gap-4`,
          onSubmit: T,
          children: [D, k, V],
        })),
        (t[53] = V),
        (t[54] = T),
        (t[55] = k),
        (t[56] = H))
      : (H = t[56]),
    H
  );
}
function qn(e) {
  return e;
}
function Jn(e) {
  return e.projectKind === `local` && e.repositoryData != null;
}
function Yn(e) {
  return e;
}
function Xn(e) {
  let t = (0, K.c)(28),
    { mode: n, canCreateWorktree: r, onChange: i } = e,
    a = ne(),
    o = n === `worktree` ? Le : Ie,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a.formatMessage(Fn.newWorktreeRequiresGitProject)), (t[0] = a), (t[1] = s));
  let c = s,
    l;
  t[2] === o
    ? (l = t[3])
    : ((l = (0, q.jsx)(o, { className: `icon-2xs shrink-0` })), (t[2] = o), (t[3] = l));
  let u = n === `worktree` ? Fn.newWorktree : Fn.workLocally,
    d;
  t[4] === u
    ? (d = t[5])
    : ((d = (0, q.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: (0, q.jsx)(R, { ...u }),
      })),
      (t[4] = u),
      (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(Fe, {
        className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== l || t[8] !== d
    ? ((p = (0, q.jsxs)(oe, {
        size: `composerSm`,
        color: `ghost`,
        className: `min-w-0`,
        children: [l, d, f],
      })),
      (t[7] = l),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m = n === `local` ? Ee : void 0,
    h;
  t[10] === i
    ? (h = t[11])
    : ((h = () => {
        i(`local`);
      }),
      (t[10] = i),
      (t[11] = h));
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsx)(R, { ...Fn.workLocally })), (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== m || t[14] !== h
    ? ((_ = (0, q.jsx)(Ne.Item, { LeftIcon: Ie, RightIcon: m, onSelect: h, children: g })),
      (t[13] = m),
      (t[14] = h),
      (t[15] = _))
    : (_ = t[15]);
  let v = n === `worktree` ? Ee : void 0,
    y = !r,
    b = r ? void 0 : c,
    x;
  t[16] === i
    ? (x = t[17])
    : ((x = () => {
        i(`worktree`);
      }),
      (t[16] = i),
      (t[17] = x));
  let S;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, q.jsx)(R, { ...Fn.newWorktree })), (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] !== v || t[20] !== y || t[21] !== b || t[22] !== x
    ? ((C = (0, q.jsx)(Ne.Item, {
        LeftIcon: Le,
        RightIcon: v,
        disabled: y,
        tooltipText: b,
        onSelect: x,
        children: S,
      })),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x),
      (t[23] = C))
    : (C = t[23]);
  let w;
  return (
    t[24] !== _ || t[25] !== C || t[26] !== p
      ? ((w = (0, q.jsxs)(Pe, { contentWidth: `menuNarrow`, triggerButton: p, children: [_, C] })),
        (t[24] = _),
        (t[25] = C),
        (t[26] = p),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
async function Zn({ hostId: e, prompt: t, projectRoot: n, scope: r }) {
  let i = n === `~`,
    a = i
      ? await he([`~`], { prompt: t })
      : { cwd: n, projectlessOutputDirectory: null, workspaceRoots: [n] };
  if (a.cwd == null) throw $(`Missing project root`, an);
  if (i && a.projectlessOutputDirectory == null)
    throw $(`Missing projectless thread output directory`, an);
  let { config: s } = await C(`read-config-for-host`, { hostId: e, includeLayers: !1, cwd: a.cwd }),
    c = o(B(`agent-mode-by-host-id`, {})[e] ?? `auto`, a.workspaceRoots, s);
  return C(`start-conversation`, {
    hostId: e,
    input: [{ type: `text`, text: t, text_elements: [] }],
    cwd: a.cwd,
    workspaceRoots: a.workspaceRoots,
    collaborationMode: null,
    serviceTier: await Oe(r, e, null),
    permissions: c,
    approvalsReviewer: c.approvalsReviewer,
    ...(i
      ? { workspaceKind: `projectless`, projectlessOutputDirectory: a.projectlessOutputDirectory }
      : { workspaceKind: `project` }),
  });
}
async function Qn({ createPendingWorktree: e, hostId: t, prompt: n, projectRoot: r, scope: i }) {
  if (r === `~`) throw $(`Missing project root`, an);
  let { config: a } = await C(`read-config-for-host`, { hostId: t, includeLayers: !1, cwd: r }),
    o = [{ type: `text`, text: n, text_elements: [] }],
    s = {
      input: o,
      workspaceRoots: [r],
      cwd: r,
      fileAttachments: Pn,
      addedFiles: Pn,
      agentMode: B(`agent-mode-by-host-id`, {})[t] ?? `auto`,
      model: null,
      serviceTier: await Oe(i, t, null),
      reasoningEffort: null,
      collaborationMode: null,
      config: w(a),
      workspaceKind: `project`,
    };
  return e({
    hostId: t,
    label: De(o),
    sourceWorkspaceRoot: r,
    startingState: { type: `working-tree` },
    localEnvironmentConfigPath: null,
    launchMode: `start-conversation`,
    prompt: n,
    startConversationParamsInput: s,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
function Q(e) {
  Promise.resolve(e).catch((e) => {
    F.debug(`MCP sandbox RPC failed`, { safe: {}, sensitive: { error: e } });
  });
}
function $n({
  frameElement: e,
  isFullScreen: t,
  targetFrameContainer: n,
  threadFrameContainer: r,
}) {
  let i = r.currentCSSZoom ?? 1,
    a = n.getBoundingClientRect();
  if (t) {
    ((e.style.position = `fixed`),
      (e.style.top = `${a.top / i}px`),
      (e.style.left = `${a.left / i}px`),
      (e.style.width = `${a.width / i}px`),
      (e.style.height = `${a.height / i}px`),
      (e.style.zIndex = `43`));
    return;
  }
  let o = r.getBoundingClientRect();
  ((e.style.position = `absolute`),
    (e.style.top = `${(a.top - o.top) / i + r.scrollTop}px`),
    (e.style.left = `${(a.left - o.left) / i + r.scrollLeft}px`),
    (e.style.width = `${a.width / i}px`),
    (e.style.height = `${a.height / i}px`),
    (e.style.zIndex = `1`));
}
function er({ blob: e, name: t }) {
  let n = URL.createObjectURL(e),
    r = document.createElement(`a`);
  ((r.href = n),
    (r.download = t),
    (r.style.display = `none`),
    document.body.append(r),
    r.click(),
    r.remove(),
    window.setTimeout(() => URL.revokeObjectURL(n), 0));
}
function tr(e) {
  let t =
    e
      ?.map((e) => cn.safeParse(e))
      .flatMap((e) => (e.success ? [e.data.text.trim()] : []))
      .filter((e) => e.length > 0) ?? [];
  return t.length > 0
    ? t.join(`

`)
    : null;
}
function nr(e) {
  return (
    e
      ?.map((e) => ln.safeParse(e))
      .flatMap((e) =>
        e.success ? [{ src: `data:${e.data.mimeType};base64,${e.data.data}` }] : [],
      ) ?? []
  );
}
function rr(e) {
  return typeof e == `object` && e ? e : null;
}
function ir(e) {
  let t = sn.safeParse(e.structuredContent);
  if (t.success) return t.data;
  if (e.content.length !== 1) return null;
  let [n] = e.content,
    r = cn.safeParse(n);
  if (!r.success) return null;
  try {
    let e = JSON.parse(r.data.text);
    return typeof e == `object` && e ? e : null;
  } catch {
    return null;
  }
}
async function ar({ hostId: e, mcpServerStatuses: t, server: n }) {
  let r = t?.data.find(({ name: e }) => e === n) ?? null;
  if (r != null) return r;
  let i =
    (await C(`list-mcp-server-status`, { hostId: e, cursor: null, limit: 100 })).data.find(
      ({ name: e }) => e === n,
    ) ?? null;
  if (i == null) throw $(`MCP server not found: ${n}`, an);
  return i;
}
async function or({
  conversationId: e,
  hostId: t,
  mcpAppScope: n,
  mcpServerStatuses: r,
  server: i,
  toolCallParams: a,
}) {
  let o = await sr({
      hostId: t,
      mcpAppScope: n,
      mcpServerStatuses: r,
      server: i,
      toolName: a.name,
    }),
    s = ur(i, a._meta),
    c = {
      hostId: t,
      threadId: e,
      server: i,
      tool: o.name,
      arguments: a.arguments ?? {},
      ...(s === void 0 ? {} : { _meta: s }),
    };
  try {
    return await C(`call-mcp-tool`, c);
  } catch (e) {
    throw fr(e, `MCP tool call failed`);
  }
}
async function sr({ hostId: e, mcpAppScope: t, mcpServerStatuses: n, server: r, toolName: i }) {
  let a = n?.data.find(({ name: e }) => e === r) ?? (await ar({ hostId: e, server: r })),
    o = cr(a),
    s = Ot({ mcpAppScope: t, server: r, tools: o });
  return { ...lr(() => kt({ connectorId: s, server: r, toolName: i, tools: o })), serverStatus: a };
}
function cr(e) {
  return Object.values(e.tools).filter((e) => e != null);
}
function lr(e) {
  try {
    return e();
  } catch (e) {
    throw e instanceof Error ? $(e.message, -32603) : e;
  }
}
function ur(e, t) {
  if (!Y(e) || !dr(t)) return t;
  let n = { ...t };
  return (
    delete n.connector_id,
    delete n.connector_name,
    delete n.connector_display_name,
    delete n.connector_description,
    delete n._codex_apps,
    n
  );
}
function dr(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function $(e, t, n) {
  let r = Error(e);
  return ((r.code = t), n !== void 0 && (r.cause = n), r);
}
function fr(e, t) {
  let n = xn.safeParse(e);
  return n.success
    ? $(n.data.message, n.data.code ?? an, e)
    : e instanceof Error && e.message.length > 0
      ? $(e.message, an, e)
      : $(t, an, e);
}
function pr({
  containerDimensions: e,
  displayMode: t,
  locale: n,
  safeAreaInsets: r,
  styleVariables: i,
  theme: a,
  userAgent: o,
}) {
  return {
    availableDisplayModes: [`inline`, `fullscreen`],
    containerDimensions: e,
    deviceCapabilities: { hover: o.capabilities.hover, touch: o.capabilities.touch },
    displayMode: t,
    locale: n,
    platform: `desktop`,
    safeAreaInsets: r,
    styles: { variables: i },
    theme: a,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: `chatgpt`,
  };
}
function mr({ displayMode: e, hasNavigationHistory: t }) {
  return e === `inline` && t ? On : Dn;
}
function hr(e) {
  return { maxHeight: e.clientHeight, maxWidth: e.clientWidth };
}
function gr() {
  return getComputedStyle(document.documentElement).colorScheme === `dark` ? `dark` : `light`;
}
function _r() {
  return {
    capabilities: {
      hover: window.matchMedia?.(`(hover: hover)`)?.matches ?? !1,
      touch: window.matchMedia?.(`(pointer: coarse)`)?.matches ?? !1,
    },
    device: { os: vr(), platform: `native`, type: `desktop` },
  };
}
function vr() {
  let e = window.navigator.platform.toLowerCase();
  return e.includes(`mac`) ? `macos` : e.includes(`win`) ? `windows` : `unknown`;
}
function yr(e, t) {
  let n = e == null ? (t ?? kn) : Math.max(e, t ?? 0);
  return Math.min(Math.max(n, An), jn);
}
function br(e) {
  try {
    return new URL(e).protocol === `https:`;
  } catch {
    return !1;
  }
}
function xr() {
  return !1;
}
var Sr = f(),
  Cr = p(v(), Sr),
  wr = se.shape.params,
  Tr = le.shape.params,
  Er = M(
    I,
    (e, { scope: t }) => ({
      queryKey: [`mcp-capability-view-resource`, e.hostId, e.resourceUri, e.server, e.tool.name],
      queryFn: () => Be(t, e.hostId, e.server, e.resourceUri),
      staleTime: 0,
    }),
    { key: Or },
  ),
  Dr = M(
    I,
    ({ toolArguments: e, view: t }, { scope: n }) => ({
      queryKey: [`mcp-capability-view-tool-result`, t.hostId, t.server, t.tool.name, e],
      queryFn: async () => Ve(n, t.hostId, t.server, t.tool.name, e),
      staleTime: 0,
    }),
    { key: kr },
  );
function Or(e) {
  return JSON.stringify([e.hostId, e.resourceUri, e.server, e.tool.name]);
}
function kr({ toolArguments: e, view: t }) {
  return JSON.stringify([t.hostId, t.resourceUri, t.server, t.tool.name, e]);
}
var Ar = {};
function jr(e) {
  let t = (0, K.c)(73),
    { className: n, instanceId: r, readHostResource: i, toolArguments: a, view: o } = e,
    s = a === void 0 ? Ar : a,
    l = ee(I),
    u = ee(U),
    { data: d, error: f, isLoading: p } = A(Er, o),
    m;
  t[0] !== s || t[1] !== o
    ? ((m = { toolArguments: s, view: o }), (t[0] = s), (t[1] = o), (t[2] = m))
    : (m = t[2]);
  let { data: h, error: g, isLoading: _ } = A(Dr, m),
    v = qe(d);
  V(`2957382457`);
  let y = Ke({
      isDilEnabled: !1,
      renderData: v,
      resourceUri: o.resourceUri,
      shouldRenderMcpApp: !0,
    }),
    b = y.kind === `html` ? y.renderData : null,
    x;
  t[3] !== o.server || t[4] !== o.tool
    ? ((x = Dt({ server: o.server, tool: o.tool })), (t[3] = o.server), (t[4] = o.tool), (t[5] = x))
    : (x = t[5]);
  let S = x,
    C;
  t[6] !== S ||
  t[7] !== i ||
  t[8] !== l ||
  t[9] !== o.hostId ||
  t[10] !== o.resourceUri ||
  t[11] !== o.server ||
  t[12] !== o.serverTools
    ? ((C = async (e) => {
        let t = ue.parse(e);
        switch (t.method) {
          case `tools/call`: {
            let e = wr.parse(t.params),
              n = kt({ connectorId: S, server: o.server, toolName: e.name, tools: o.serverTools });
            return Ve(l, o.hostId, o.server, n.name, Cr.parse(e.arguments ?? {}));
          }
          case `resources/read`: {
            let e = Tr.parse(t.params),
              n = await i?.(e);
            return n == null
              ? (jt({
                  mcpAppScope: { originResourceUri: o.resourceUri },
                  server: o.server,
                  uri: e.uri,
                }),
                Be(l, o.hostId, o.server, e.uri))
              : { contents: [{ ...n, uri: e.uri }] };
          }
          case `tools/list`:
            return { tools: At({ connectorId: S, server: o.server, tools: o.serverTools }) };
          case `resources/list`:
            return { resources: [] };
          case `resources/templates/list`:
            return { resourceTemplates: [] };
          case `prompts/list`:
            return { prompts: [] };
          default:
            throw Error(`Unsupported OpenAI MCP capability request: ${t.method}`);
        }
      }),
      (t[6] = S),
      (t[7] = i),
      (t[8] = l),
      (t[9] = o.hostId),
      (t[10] = o.resourceUri),
      (t[11] = o.server),
      (t[12] = o.serverTools),
      (t[13] = C))
    : (C = t[13]);
  let w = ye(C),
    T,
    E,
    O;
  if (
    t[14] !== r ||
    t[15] !== S ||
    t[16] !== u.value.conversationId ||
    t[17] !== u.value.routeKind ||
    t[18] !== o.hostId ||
    t[19] !== o.server ||
    t[20] !== o.tool.name
  ) {
    let e;
    t[24] === r ? (e = t[25]) : ((e = r == null ? [] : [r]), (t[24] = r), (t[25] = e));
    let n;
    (t[26] !== e || t[27] !== o.hostId || t[28] !== o.server || t[29] !== o.tool.name
      ? ((n = [`openai-mcp-capability`, o.hostId, o.server, o.tool.name, ...e]),
        (t[26] = e),
        (t[27] = o.hostId),
        (t[28] = o.server),
        (t[29] = o.tool.name),
        (t[30] = n))
      : (n = t[30]),
      (E = pt(n.join(`:`))),
      (T = u.value.routeKind === `local-thread` ? u.value.conversationId : c(E)),
      (O = Mt({ connectorId: S, instanceFallbackId: E, server: o.server })),
      (t[14] = r),
      (t[15] = S),
      (t[16] = u.value.conversationId),
      (t[17] = u.value.routeKind),
      (t[18] = o.hostId),
      (t[19] = o.server),
      (t[20] = o.tool.name),
      (t[21] = T),
      (t[22] = E),
      (t[23] = O));
  } else ((T = t[21]), (E = t[22]), (O = t[23]));
  let te = O,
    k;
  t[31] === n ? (k = t[32]) : ((k = D(`h-full min-h-0`, n)), (t[31] = n), (t[32] = k));
  let j;
  t[33] === E
    ? (j = t[34])
    : ((j = (0, q.jsx)(In, { isInlineExpanded: !0, mcpAppId: E })), (t[33] = E), (t[34] = j));
  let M = b?.csp ?? null,
    N = f ?? g,
    P = b?.html ?? null,
    F = p || _,
    L;
  t[35] !== o.resourceUri || t[36] !== o.tool.name
    ? ((L = { originResourceUri: o.resourceUri, originTool: o.tool.name }),
      (t[35] = o.resourceUri),
      (t[36] = o.tool.name),
      (t[37] = L))
    : (L = t[37]);
  let ne = b?.prefersBorder ?? !1,
    R = h ?? null,
    z = b?.widgetDomain ?? null,
    re;
  t[38] !== T ||
  t[39] !== E ||
  t[40] !== w ||
  t[41] !== te ||
  t[42] !== P ||
  t[43] !== F ||
  t[44] !== L ||
  t[45] !== ne ||
  t[46] !== R ||
  t[47] !== z ||
  t[48] !== M ||
  t[49] !== N ||
  t[50] !== s ||
  t[51] !== o.hostId ||
  t[52] !== o.server ||
  t[53] !== o.title
    ? ((re = (0, q.jsx)(Ln, {
        conversationId: T,
        csp: M,
        error: N,
        fullSurface: !0,
        hostId: o.hostId,
        hostedInThreadScrollLayout: !1,
        html: P,
        isLoading: F,
        mcpAppId: E,
        mcpAppScope: L,
        mcpServerStatuses: void 0,
        prefersBorder: ne,
        overrideMcpRequest: w,
        sandboxOriginScope: te,
        server: o.server,
        sidePanelConnectorIcon: null,
        sidePanelTitle: o.title,
        title: o.title,
        toolArguments: s,
        toolResult: R,
        widgetDomain: z,
      })),
      (t[38] = T),
      (t[39] = E),
      (t[40] = w),
      (t[41] = te),
      (t[42] = P),
      (t[43] = F),
      (t[44] = L),
      (t[45] = ne),
      (t[46] = R),
      (t[47] = z),
      (t[48] = M),
      (t[49] = N),
      (t[50] = s),
      (t[51] = o.hostId),
      (t[52] = o.server),
      (t[53] = o.title),
      (t[54] = re))
    : (re = t[54]);
  let B;
  t[55] !== y.kind ||
  t[56] !== y.source ||
  t[57] !== b?.heightHint ||
  t[58] !== b?.html ||
  t[59] !== _ ||
  t[60] !== p ||
  t[61] !== E ||
  t[62] !== g ||
  t[63] !== f
    ? ((B = (0, q.jsx)(Rn, {
        error: f ?? g,
        fullSurface: !0,
        heightHint: b?.heightHint ?? null,
        html: b?.html ?? null,
        isLoading: p || _,
        mcpAppId: E,
      })),
      (t[55] = y.kind),
      (t[56] = y.source),
      (t[57] = b?.heightHint),
      (t[58] = b?.html),
      (t[59] = _),
      (t[60] = p),
      (t[61] = E),
      (t[62] = g),
      (t[63] = f),
      (t[64] = B))
    : (B = t[64]);
  let H;
  t[65] === E ? (H = t[66]) : ((H = (0, q.jsx)(zn, { mcpAppId: E })), (t[65] = E), (t[66] = H));
  let ie;
  return (
    t[67] !== re || t[68] !== B || t[69] !== H || t[70] !== k || t[71] !== j
      ? ((ie = (0, q.jsxs)(`div`, {
          "data-mcp-app-portal-target": `true`,
          className: k,
          children: [j, re, B, H],
        })),
        (t[67] = re),
        (t[68] = B),
        (t[69] = H),
        (t[70] = k),
        (t[71] = j),
        (t[72] = ie))
      : (ie = t[72]),
    ie
  );
}
export {
  $e as _,
  zn as a,
  Xe as b,
  pt as c,
  ft as d,
  ct as f,
  tt as g,
  rt as h,
  Rn as i,
  lt as l,
  nt as m,
  Ln as n,
  Mt as o,
  yt as p,
  In as r,
  Y as s,
  jr as t,
  dt as u,
  Qe as v,
  Ze as y,
};
//# sourceMappingURL=mcp-capability-view-frame.js.map
