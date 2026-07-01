import { n as e, s as t } from "./rolldown-runtime.js";
import {
  EB as n,
  F_ as r,
  Lo as i,
  RV as a,
  bB as o,
  fM as s,
  iF as c,
  jV as l,
  mM as u,
  qR as d,
  rz as f,
  wB as p,
  zV as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  CC as h,
  Cw as g,
  Dm as _,
  Om as v,
  Qx as y,
  _w as b,
  bC as x,
  gw as S,
  mw as C,
  nS as w,
  vC as T,
  vw as E,
  wC as D,
  yC as O,
  yw as k,
} from "./app-initial~app-main~onboarding-page.js";
function A(e) {
  let t = (0, F.c)(25),
    { browserUseTabIdsKey: i, conversationId: a, persistedTabsEnabled: o } = e,
    s = p(r, a),
    c = n(T.activeTab$),
    l = n(x.activeTab$),
    u = n(S),
    d = n(C),
    m,
    h;
  t[0] === d
    ? ((m = t[1]), (h = t[2]))
    : ((m = (e) => d.on(`change`, e)), (h = () => d.get()), (t[0] = d), (t[1] = m), (t[2] = h));
  let g = (0, I.useSyncExternalStore)(m, h, M),
    _ = n(E),
    v = n(k),
    w = n(b),
    D,
    O;
  t[3] === w
    ? ((D = t[4]), (O = t[5]))
    : ((D = (e) => w.on(`change`, e)), (O = () => w.get()), (t[3] = w), (t[4] = D), (t[5] = O));
  let A = (0, I.useSyncExternalStore)(D, O, j),
    P = u || g > 0,
    R = (_ && v) || A > 0,
    z;
  t[6] !== c || t[7] !== l || t[8] !== a || t[9] !== P || t[10] !== R
    ? ((z = new Set(y(a, { bottom: c, right: l }, { bottom: P, right: R }))),
      (t[6] = c),
      (t[7] = l),
      (t[8] = a),
      (t[9] = P),
      (t[10] = R),
      (t[11] = z))
    : (z = t[11]);
  let B = z;
  if (!s && B.size > 0) return null;
  let V, H;
  if (t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== B) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[18] === B ? (e = t[19]) : ((e = (e) => !B.has(e)), (t[18] = B), (t[19] = e));
      let n = i.split(`\0`).map(f).filter(e);
      if (n.length === 0) {
        H = null;
        break bb0;
      }
      let r;
      (t[20] !== a || t[21] !== o
        ? ((r = (e) =>
            (0, L.jsx)(N, { browserTabId: e, conversationId: a, persistedTabsEnabled: o }, e)),
          (t[20] = a),
          (t[21] = o),
          (t[22] = r))
        : (r = t[22]),
        (V = n.map(r)));
    }
    ((t[12] = i), (t[13] = a), (t[14] = o), (t[15] = B), (t[16] = V), (t[17] = H));
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
    a = u(),
    o = (0, I.useRef)(null),
    s;
  t[0] !== n || t[1] !== r
    ? ((s = () => h.getSnapshot(r, n)), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c = (0, I.useSyncExternalStore)(h.subscribe, s, P);
  if (c != null && c.tabType !== d.WEB) return null;
  let l = c == null || c.url.length === 0 ? `about:blank` : c.url,
    f;
  return (
    t[3] !== n || t[4] !== r || t[5] !== l || t[6] !== i || t[7] !== a
      ? ((f = (0, L.jsx)(_, {
          bounds: null,
          browserTabId: n,
          conversationId: r,
          hostKind: `hidden-browser-use`,
          initialUrl: l,
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
        (t[5] = l),
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
  ((F = a()), o(), c(), (I = t(m(), 1)), s(), O(), g(), w(), i(), D(), v(), (L = l()));
})();
export { A as HiddenBrowserUseWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-browser-use-webview-host.js.map
