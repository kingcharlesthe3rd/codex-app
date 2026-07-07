import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Tl as r,
  Xs as i,
  nc as a,
  vl as o,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Cx as s,
  Db as c,
  Hb as l,
  Mb as u,
  Nb as d,
  Ob as f,
  Ox as p,
  Rb as m,
  Sx as h,
  Ub as g,
  ay as _,
  fp as v,
  kb as y,
  ly as b,
  pp as x,
  xx as S,
  yx as C,
  zb as w,
} from "./app-initial~app-main~onboarding-page.js";
import {
  ht as T,
  pt as E,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import { Xo as D, Zo as O } from "./app-initial~app-main~new-thread-panel-page.js";
function k(e) {
  let t = (0, L.c)(13),
    { conversationId: n, persistedTabsEnabled: r } = e,
    i = a(c.activeTab$),
    o = a(y.activeTab$),
    l = a(c.tabs$),
    d = a(S),
    f = a(C),
    p,
    m;
  t[0] === f
    ? ((p = t[1]), (m = t[2]))
    : ((p = (e) => f.on(`change`, e)), (m = () => f.get()), (t[0] = f), (t[1] = p), (t[2] = m));
  let g = (0, R.useSyncExternalStore)(p, m, M),
    v = a(y.tabs$),
    b = a(s),
    x = a(h),
    w,
    T;
  t[3] === x
    ? ((w = t[4]), (T = t[5]))
    : ((w = (e) => x.on(`change`, e)), (T = () => x.get()), (t[3] = x), (t[4] = w), (t[5] = T));
  let E = (0, R.useSyncExternalStore)(w, T, j),
    D = _(n, { bottom: i, right: o }, { bottom: d || g > 0, right: b || E > 0 }),
    O;
  (t[6] === n
    ? (O = t[7])
    : ((O = () => u.getBrowserUseBrowserTabIdsKey(n)), (t[6] = n), (t[7] = O)),
    (0, R.useSyncExternalStore)(u.subscribe, O, A));
  let k = P({ conversationId: n, mountedBrowserTabIds: D, panelTabs: [...v, ...l] });
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
    a = T(),
    o = (0, R.useRef)(null),
    s;
  t[0] !== n || t[1] !== r ? ((s = I(r, n)), (t[0] = n), (t[1] = r), (t[2] = s)) : (s = t[2]);
  let c = s;
  if (c == null || !F(r, n)) return null;
  let l;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== c.adoptedWebContentsId ||
    t[7] !== c.adoptionLease ||
    t[8] !== c.initialUrl ||
    t[9] !== a
      ? ((l = (0, z.jsx)(v, {
          adoptionLease: c.adoptionLease,
          adoptedWebContentsId: c.adoptedWebContentsId,
          bounds: null,
          browserTabId: n,
          conversationId: r,
          initialUrl: c.initialUrl,
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
        (t[6] = c.adoptedWebContentsId),
        (t[7] = c.adoptionLease),
        (t[8] = c.initialUrl),
        (t[9] = a),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function P({ conversationId: e, mountedBrowserTabIds: t, panelTabs: n }) {
  let r = new Set();
  for (let i of n) {
    let n = D(i, e) ?? null;
    n == null || u.isBrowserUseTab(e, n) || t.includes(n) || (F(e, n) && r.add(n));
  }
  return Array.from(r);
}
function F(e, t) {
  return u.isBrowserUseTab(e, t) ? !1 : I(e, t) != null;
}
function I(e, t) {
  let n = w(e, t),
    r = l(e, t),
    i = m(e, t);
  return n == null && (r == null || i == null)
    ? null
    : { adoptedWebContentsId: i, adoptionLease: r, initialUrl: n ?? `about:blank` };
}
var L, R, z;
e(() => {
  ((L = r()), i(), (R = t(n(), 1)), E(), f(), p(), b(), O(), d(), g(), x(), (z = o()));
})();
export { k as HiddenBackgroundBrowserWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-background-webview-host.js.map
