import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  _t as n,
  dt as r,
  gt as i,
  ut as a,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Hd as o,
  Ud as s,
  Wd as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Hn as l,
  Un as u,
  _n as d,
  cC as f,
  dC as p,
  dn as m,
  fC as h,
  oC as g,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  d as _,
  o as v,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~pric~dbjkmxsl.js";
function y() {
  let e = (0, S.c)(21),
    { authMethod: t, isLoading: n } = u(),
    a = t === `chatgpt`,
    o = p(C),
    s = f(`3909937021`),
    l = h(),
    { data: m, isLoading: g, hasEverErrored: _ } = d(),
    v;
  e[0] === a
    ? (v = e[1])
    : ((v = { queryConfig: { enabled: a, staleTime: i.ONE_MINUTE } }), (e[0] = a), (e[1] = v));
  let { data: y, isLoading: T } = r(`account-info`, v),
    E = m?.plan_type ?? (!g || _ ? y?.plan : void 0),
    D;
  e[2] === E ? (D = e[3]) : ((D = x(E)), (e[2] = E), (e[3] = D));
  let O = D,
    k,
    A,
    j,
    M;
  if (
    e[4] !== t ||
    e[5] !== _ ||
    e[6] !== a ||
    e[7] !== g ||
    e[8] !== O ||
    e[9] !== s ||
    e[10] !== l ||
    e[11] !== E ||
    e[12] !== o
  ) {
    let n = c(E),
      r = a && O && !l ? o.get(w, !1) : !1,
      i = a && n && s;
    ((k = a && g && !_),
      (j = a && O && l),
      (A = a && n && l),
      (M = b({
        authMethod: t,
        plan: E,
        isFreeGoUsageSettingsEnabled: r,
        isEnterpriseUsageSettingsEnabled: i,
      })),
      (e[4] = t),
      (e[5] = _),
      (e[6] = a),
      (e[7] = g),
      (e[8] = O),
      (e[9] = s),
      (e[10] = l),
      (e[11] = E),
      (e[12] = o),
      (e[13] = k),
      (e[14] = A),
      (e[15] = j),
      (e[16] = M));
  } else ((k = e[13]), (A = e[14]), (j = e[15]), (M = e[16]));
  let N = n || (a && T) || k || j || A,
    P;
  return (
    e[17] !== E || e[18] !== M || e[19] !== N
      ? ((P = { ...M, isUsageSettingsAccessLoading: N, plan: E }),
        (e[17] = E),
        (e[18] = M),
        (e[19] = N),
        (e[20] = P))
      : (P = e[20]),
    P
  );
}
function b({
  authMethod: e,
  plan: t,
  isFreeGoUsageSettingsEnabled: n,
  isEnterpriseUsageSettingsEnabled: r = !1,
}) {
  let i = e === `chatgpt`,
    a = i && v(t),
    o = x(t),
    s = c(t);
  return {
    canManageCreditSettings: a,
    isUsageSettingsVisible: a || (i && o && n) || (i && s && r),
  };
}
function x(e) {
  return e === o.FREE || e === o.GO;
}
var S,
  C,
  w,
  T = e(() => {
    ((S = t()),
      l(),
      m(),
      _(),
      g(),
      n(),
      s(),
      a(),
      (C = `1636924626`),
      (w = `enable_free_go_usage_settings`));
  });
export { y as n, T as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~settings-page~hotkey-window-thread-page~usage~hc2m5m0u.js.map
