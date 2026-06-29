import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { R as r, a as i, s as a } from "./app-scope.js";
import { $r as o } from "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import { Br as s, Tr as c } from "./src-1.js";
import "./react-dom.js";
import "./lib.js";
import "./persisted-signal.js";
import { a as l, i as u, o as d, r as f, t as p } from "./app-shell-state.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import { n as m } from "./window-zoom-context.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./platform-BrML-86Y.js";
import "./marked.esm.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./experimental-features-queries.js";
import "./route-scope.js";
import "./browser-sidebar-availability.js";
import { n as h, t as g } from "./app-shell-tab-controller.js";
import { t as _ } from "./browser-sidebar-manager.js";
import "./focus-composer.js";
import "./thread-panel-state.js";
import { i as v } from "./thread-browser-panel-tabs.js";
import { t as y } from "./browser-sidebar-webview.js";
var b = r(),
  x = e(t(), 1),
  S = n();
function C(e) {
  let t = (0, b.c)(23),
    { browserUseTabIdsKey: n, conversationId: r } = e,
    c = i(o, r),
    m = a(g.activeTab$),
    _ = a(h.activeTab$),
    y = a(f),
    C = a(p),
    D,
    O;
  t[0] === C
    ? ((D = t[1]), (O = t[2]))
    : ((D = (e) => C.on(`change`, e)), (O = () => C.get()), (t[0] = C), (t[1] = D), (t[2] = O));
  let k = (0, x.useSyncExternalStore)(D, O, T),
    A = a(l),
    j = a(d),
    M = a(u),
    N,
    P;
  t[3] === M
    ? ((N = t[4]), (P = t[5]))
    : ((N = (e) => M.on(`change`, e)), (P = () => M.get()), (t[3] = M), (t[4] = N), (t[5] = P));
  let F = (0, x.useSyncExternalStore)(N, P, w),
    I = y || k > 0,
    L = (A && j) || F > 0,
    R;
  t[6] !== m || t[7] !== _ || t[8] !== r || t[9] !== I || t[10] !== L
    ? ((R = new Set(v(r, { bottom: m, right: _ }, { bottom: I, right: L }))),
      (t[6] = m),
      (t[7] = _),
      (t[8] = r),
      (t[9] = I),
      (t[10] = L),
      (t[11] = R))
    : (R = t[11]);
  let z = R;
  if (!c && z.size > 0) return null;
  let B, V;
  if (t[12] !== n || t[13] !== r || t[14] !== z) {
    V = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[17] === z ? (e = t[18]) : ((e = (e) => !z.has(e)), (t[17] = z), (t[18] = e));
      let i = n.split(`\0`).map(s).filter(e);
      if (i.length === 0) {
        V = null;
        break bb0;
      }
      let a;
      (t[19] === r
        ? (a = t[20])
        : ((a = (e) => (0, S.jsx)(E, { browserTabId: e, conversationId: r }, e)),
          (t[19] = r),
          (t[20] = a)),
        (B = i.map(a)));
    }
    ((t[12] = n), (t[13] = r), (t[14] = z), (t[15] = B), (t[16] = V));
  } else ((B = t[15]), (V = t[16]));
  if (V !== Symbol.for(`react.early_return_sentinel`)) return V;
  let H;
  return (
    t[21] === B
      ? (H = t[22])
      : ((H = (0, S.jsx)(S.Fragment, { children: B })), (t[21] = B), (t[22] = H)),
    H
  );
}
function w() {
  return 0;
}
function T() {
  return 0;
}
function E(e) {
  let t = (0, b.c)(8),
    { browserTabId: n, conversationId: r } = e,
    i = m(),
    a = (0, x.useRef)(null),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = () => _.getSnapshot(r, n)), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = (0, x.useSyncExternalStore)(_.subscribe, o, D);
  if (s != null && s.tabType !== c.WEB) return null;
  let l = s == null || s.url.length === 0 ? `about:blank` : s.url,
    u;
  return (
    t[3] !== n || t[4] !== r || t[5] !== l || t[6] !== i
      ? ((u = (0, S.jsx)(y, {
          bounds: null,
          browserTabId: n,
          conversationId: r,
          hostKind: `hidden-browser-use`,
          initialUrl: l,
          isVisible: !1,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: a,
          windowZoom: i,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = l),
        (t[6] = i),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function D() {
  return null;
}
export { C as HiddenBrowserUseWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-browser-use-webview-host.js.map
