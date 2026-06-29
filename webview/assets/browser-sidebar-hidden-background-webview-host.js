import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  kl as r,
  sc as i,
  tc as a,
  xl as o,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ep as s,
  wp as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  B as l,
  H as u,
  R as d,
  V as f,
  al as p,
  il as m,
  tt as h,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  ot as g,
  st as _,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  Fn as v,
  Ln as y,
  Rn as b,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  F as x,
  H as S,
  R as C,
  S as w,
  T,
  V as E,
  v as D,
  w as O,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~ntme6bea.js";
function k(e) {
  let t = (0, L.c)(13),
    { conversationId: n, persistedTabsEnabled: r } = e,
    a = i(v.activeTab$),
    o = i(b.activeTab$),
    s = i(v.tabs$),
    c = i(l),
    p = i(d),
    m,
    h;
  t[0] === p
    ? ((m = t[1]), (h = t[2]))
    : ((m = (e) => p.on(`change`, e)), (h = () => p.get()), (t[0] = p), (t[1] = m), (t[2] = h));
  let g = (0, R.useSyncExternalStore)(m, h, M),
    _ = i(b.tabs$),
    y = i(u),
    x = i(f),
    S,
    C;
  t[3] === x
    ? ((S = t[4]), (C = t[5]))
    : ((S = (e) => x.on(`change`, e)), (C = () => x.get()), (t[3] = x), (t[4] = S), (t[5] = C));
  let w = (0, R.useSyncExternalStore)(S, C, j),
    T = D(n, { bottom: a, right: o }, { bottom: c || g > 0, right: y || w > 0 }),
    E;
  (t[6] === n
    ? (E = t[7])
    : ((E = () => O.getBrowserUseBrowserTabIdsKey(n)), (t[6] = n), (t[7] = E)),
    (0, R.useSyncExternalStore)(O.subscribe, E, A));
  let k = P({ conversationId: n, mountedBrowserTabIds: T, panelTabs: [..._, ...s] });
  if (k.length === 0) return null;
  let F;
  t[8] !== n || t[9] !== r
    ? ((F = (e) =>
        (0, z.jsx)(N, { browserTabId: e, conversationId: n, persistedTabsEnabled: r }, e)),
      (t[8] = n),
      (t[9] = r),
      (t[10] = F))
    : (F = t[10]);
  let I = k.map(F),
    B;
  return (
    t[11] === I
      ? (B = t[12])
      : ((B = (0, z.jsx)(z.Fragment, { children: I })), (t[11] = I), (t[12] = B)),
    B
  );
}
function A() {
  return ``;
}
function j() {
  return 0;
}
function M() {
  return 0;
}
function N(e) {
  let t = (0, L.c)(11),
    { browserTabId: n, conversationId: r, persistedTabsEnabled: i } = e,
    a = s(),
    o = (0, R.useRef)(null),
    c;
  t[0] !== n || t[1] !== r ? ((c = I(r, n)), (t[0] = n), (t[1] = r), (t[2] = c)) : (c = t[2]);
  let l = c;
  if (l == null || !F(r, n)) return null;
  let u;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== l.adoptedWebContentsId ||
    t[7] !== l.adoptionLease ||
    t[8] !== l.initialUrl ||
    t[9] !== a
      ? ((u = (0, z.jsx)(g, {
          adoptionLease: l.adoptionLease,
          adoptedWebContentsId: l.adoptedWebContentsId,
          bounds: null,
          browserTabId: n,
          conversationId: r,
          initialUrl: l.initialUrl,
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
        (t[5] = i),
        (t[6] = l.adoptedWebContentsId),
        (t[7] = l.adoptionLease),
        (t[8] = l.initialUrl),
        (t[9] = a),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function P({ conversationId: e, mountedBrowserTabIds: t, panelTabs: n }) {
  let r = new Set();
  for (let i of n) {
    let n = m(i, e) ?? null;
    n == null || O.isBrowserUseTab(e, n) || t.includes(n) || (F(e, n) && r.add(n));
  }
  return Array.from(r);
}
function F(e, t) {
  return O.isBrowserUseTab(e, t) ? !1 : I(e, t) != null;
}
function I(e, t) {
  let n = C(e, t),
    r = E(e, t),
    i = x(e, t);
  return n == null && (r == null || i == null)
    ? null
    : { adoptedWebContentsId: i, adoptionLease: r, initialUrl: n ?? `about:blank` };
}
var L, R, z;
e(() => {
  ((L = n()), a(), (R = t(r(), 1)), c(), y(), h(), w(), p(), T(), S(), _(), (z = o()));
})();
export { k as HiddenBackgroundBrowserWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-background-webview-host.js.map
