import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, s as i } from "./app-scope-CWE-zIhQ.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-3.js";
import "./react-dom.js";
import { a, i as o, r as s, t as c } from "./app-shell-state.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import { n as l } from "./window-zoom-context.js";
import "./product-logger.js";
import { l as u } from "./persisted-signal.js";
import { t as d } from "./browser-sidebar-manager.js";
import { h as f, p, u as m } from "./browser-sidebar-open-source.js";
import { r as h, t as g } from "./app-shell-tab-controller.js";
import "./focus-composer.js";
import "./thread-panel-state.js";
import { i as _ } from "./thread-browser-panel-tabs.js";
import { t as v } from "./browser-sidebar-webview.js";
var y = r(),
  b = e(t(), 1),
  x = n();
function S(e) {
  let t = (0, y.c)(12),
    { conversationId: n } = e,
    r = i(g.activeTab$),
    l = i(h.activeTab$),
    u = i(g.tabs$),
    f = i(s),
    p = i(c),
    m,
    v;
  t[0] === p
    ? ((m = t[1]), (v = t[2]))
    : ((m = (e) => p.on(`change`, e)), (v = () => p.get()), (t[0] = p), (t[1] = m), (t[2] = v));
  let S = (0, b.useSyncExternalStore)(m, v, T),
    O = i(h.tabs$),
    k = i(a),
    A = i(o),
    j,
    M;
  t[3] === A
    ? ((j = t[4]), (M = t[5]))
    : ((j = (e) => A.on(`change`, e)), (M = () => A.get()), (t[3] = A), (t[4] = j), (t[5] = M));
  let N = (0, b.useSyncExternalStore)(j, M, w),
    P = _(n, { bottom: r, right: l }, { bottom: f || S > 0, right: k || N > 0 }),
    F;
  (t[6] === n
    ? (F = t[7])
    : ((F = () => d.getBrowserUseBrowserTabIdsKey(n)), (t[6] = n), (t[7] = F)),
    (0, b.useSyncExternalStore)(d.subscribe, F, C));
  let I = D({ conversationId: n, mountedBrowserTabIds: P, panelTabs: [...O, ...u] });
  if (I.length === 0) return null;
  let L;
  t[8] === n
    ? (L = t[9])
    : ((L = (e) => (0, x.jsx)(E, { browserTabId: e, conversationId: n }, e)),
      (t[8] = n),
      (t[9] = L));
  let R = I.map(L),
    z;
  return (
    t[10] === R
      ? (z = t[11])
      : ((z = (0, x.jsx)(x.Fragment, { children: R })), (t[10] = R), (t[11] = z)),
    z
  );
}
function C() {
  return ``;
}
function w() {
  return 0;
}
function T() {
  return 0;
}
function E(e) {
  let t = (0, y.c)(10),
    { browserTabId: n, conversationId: r } = e,
    i = l(),
    a = (0, b.useRef)(null),
    o;
  t[0] !== n || t[1] !== r ? ((o = k(r, n)), (t[0] = n), (t[1] = r), (t[2] = o)) : (o = t[2]);
  let s = o;
  if (s == null || !O(r, n)) return null;
  let c;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== s.adoptedWebContentsId ||
    t[6] !== s.adoptionLease ||
    t[7] !== s.initialUrl ||
    t[8] !== i
      ? ((c = (0, x.jsx)(v, {
          adoptionLease: s.adoptionLease,
          adoptedWebContentsId: s.adoptedWebContentsId,
          bounds: null,
          browserTabId: n,
          conversationId: r,
          initialUrl: s.initialUrl,
          isVisible: !1,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: a,
          windowZoom: i,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s.adoptedWebContentsId),
        (t[6] = s.adoptionLease),
        (t[7] = s.initialUrl),
        (t[8] = i),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function D({ conversationId: e, mountedBrowserTabIds: t, panelTabs: n }) {
  let r = new Set();
  for (let i of n) {
    let n = u(i, e) ?? null;
    n == null || d.isBrowserUseTab(e, n) || t.includes(n) || (O(e, n) && r.add(n));
  }
  return Array.from(r);
}
function O(e, t) {
  return d.isBrowserUseTab(e, t) ? !1 : k(e, t) != null;
}
function k(e, t) {
  let n = p(e, t),
    r = f(e, t),
    i = m(e, t);
  return n == null && (r == null || i == null)
    ? null
    : { adoptedWebContentsId: i, adoptionLease: r, initialUrl: n ?? `about:blank` };
}
export { S as HiddenBackgroundBrowserWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-background-webview-host.js.map
