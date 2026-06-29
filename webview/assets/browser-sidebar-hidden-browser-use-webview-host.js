import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Eo as n,
  Ol as r,
  Wt as i,
  ac as a,
  kl as o,
  lo as s,
  sc as c,
  tc as l,
  xl as u,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ep as d,
  wp as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  B as p,
  H as m,
  R as h,
  Sl as g,
  U as _,
  V as v,
  tt as y,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  ot as b,
  st as x,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import { C as S } from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  Fn as C,
  Ln as w,
  Rn as T,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  S as E,
  T as D,
  v as O,
  w as k,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~ntme6bea.js";
function A(e) {
  let t = (0, F.c)(25),
    { browserUseTabIdsKey: r, conversationId: i, persistedTabsEnabled: o } = e,
    s = a(g, i),
    l = c(C.activeTab$),
    u = c(T.activeTab$),
    d = c(p),
    f = c(h),
    y,
    b;
  t[0] === f
    ? ((y = t[1]), (b = t[2]))
    : ((y = (e) => f.on(`change`, e)), (b = () => f.get()), (t[0] = f), (t[1] = y), (t[2] = b));
  let x = (0, I.useSyncExternalStore)(y, b, M),
    S = c(m),
    w = c(_),
    E = c(v),
    D,
    k;
  t[3] === E
    ? ((D = t[4]), (k = t[5]))
    : ((D = (e) => E.on(`change`, e)), (k = () => E.get()), (t[3] = E), (t[4] = D), (t[5] = k));
  let A = (0, I.useSyncExternalStore)(D, k, j),
    P = d || x > 0,
    R = (S && w) || A > 0,
    z;
  t[6] !== l || t[7] !== u || t[8] !== i || t[9] !== P || t[10] !== R
    ? ((z = new Set(O(i, { bottom: l, right: u }, { bottom: P, right: R }))),
      (t[6] = l),
      (t[7] = u),
      (t[8] = i),
      (t[9] = P),
      (t[10] = R),
      (t[11] = z))
    : (z = t[11]);
  let B = z;
  if (!s && B.size > 0) return null;
  let V, H;
  if (t[12] !== r || t[13] !== i || t[14] !== o || t[15] !== B) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[18] === B ? (e = t[19]) : ((e = (e) => !B.has(e)), (t[18] = B), (t[19] = e));
      let a = r.split(`\0`).map(n).filter(e);
      if (a.length === 0) {
        H = null;
        break bb0;
      }
      let s;
      (t[20] !== i || t[21] !== o
        ? ((s = (e) =>
            (0, L.jsx)(N, { browserTabId: e, conversationId: i, persistedTabsEnabled: o }, e)),
          (t[20] = i),
          (t[21] = o),
          (t[22] = s))
        : (s = t[22]),
        (V = a.map(s)));
    }
    ((t[12] = r), (t[13] = i), (t[14] = o), (t[15] = B), (t[16] = V), (t[17] = H));
  } else ((V = t[16]), (H = t[17]));
  if (H !== Symbol.for(`react.early_return_sentinel`)) return H;
  let U;
  return (
    t[23] === V
      ? (U = t[24])
      : ((U = (0, L.jsx)(L.Fragment, { children: V })), (t[23] = V), (t[24] = U)),
    U
  );
}
function j() {
  return 0;
}
function M() {
  return 0;
}
function N(e) {
  let t = (0, F.c)(9),
    { browserTabId: n, conversationId: r, persistedTabsEnabled: i } = e,
    a = d(),
    o = (0, I.useRef)(null),
    c;
  t[0] !== n || t[1] !== r
    ? ((c = () => k.getSnapshot(r, n)), (t[0] = n), (t[1] = r), (t[2] = c))
    : (c = t[2]);
  let l = (0, I.useSyncExternalStore)(k.subscribe, c, P);
  if (l != null && l.tabType !== s.WEB) return null;
  let u = l == null || l.url.length === 0 ? `about:blank` : l.url,
    f;
  return (
    t[3] !== n || t[4] !== r || t[5] !== u || t[6] !== i || t[7] !== a
      ? ((f = (0, L.jsx)(b, {
          bounds: null,
          browserTabId: n,
          conversationId: r,
          hostKind: `hidden-browser-use`,
          initialUrl: u,
          isVisible: !1,
          persistedTabsEnabled: i,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: o,
          windowZoom: a,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = u),
        (t[6] = i),
        (t[7] = a),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function P() {
  return null;
}
var F, I, L;
e(() => {
  ((F = r()), l(), i(), (I = t(o(), 1)), f(), w(), y(), E(), S(), D(), x(), (L = u()));
})();
export { A as HiddenBrowserUseWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-browser-use-webview-host.js.map
