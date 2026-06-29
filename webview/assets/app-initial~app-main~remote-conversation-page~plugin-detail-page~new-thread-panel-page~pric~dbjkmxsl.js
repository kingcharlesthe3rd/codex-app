import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  Wt as n,
  ec as r,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Hd as i,
  Ud as a,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  aC as o,
  oC as s,
  uC as c,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
var l,
  u,
  d,
  f,
  p,
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x,
  S,
  C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j = e(() => {
    (n(),
      (l = `https://developers.openai.com/codex/skills/`),
      (u = `https://developers.openai.com/codex/mcp/`),
      (d = `https://developers.openai.com/codex/hooks`),
      (f = `https://github.com/openai/plugins`),
      (p = `https://developers.openai.com/codex/ide`),
      (m = `https://developers.openai.com/codex/config-basic`),
      (h = `https://developers.openai.com/codex/concepts/sandboxing#how-you-control-it`),
      (g = `https://developers.openai.com/codex/rules`),
      (_ = `https://developers.openai.com/codex/app/local-environments`),
      (v = `https://developers.openai.com/codex/guides/agents-md/#create-global-guidance`),
      (y = `https://developers.openai.com/codex/app/automations`),
      (b = `https://developers.openai.com/codex/app/chrome-extension`),
      (x = `https://developers.openai.com/codex/app/computer-use#locked-use`),
      (S = `${r}/settings/usage`),
      (C = `${S}?credits_modal=true`),
      (w = `https://chatgpt.com/pricing/`),
      (T = `https://chatgpt.com/#pricing`),
      (E = `https://chatgpt.com/admin`),
      (D = `https://chatgpt.com/admin/billing`),
      (O = `https://chatgpt.com/admin/usage-limits/workspace`),
      (k = `${D}?codex_credit_action=add_credits`),
      (A = `https://developers.openai.com/apps-sdk`));
  });
function M(e) {
  let t = (0, N.c)(3),
    { logExposure: n } = e,
    r = c(),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => (o(r, `337040058`, { disableExposureLog: !n }).get(P, !1) ? T : w)),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var N,
  P,
  F = e(() => {
    ((N = t()), j(), s(), (P = `show_logged_in_pricing_page`));
  });
function I(e) {
  return e === `chatgpt_mobile_ios` || e === `sora_mobile_ios`
    ? `ios`
    : e === `chatgpt_mobile_android`
      ? `android`
      : null;
}
function L(e) {
  if (!H(e)) return null;
  switch (e) {
    case i.FREE:
      return { displayPlan: `free`, pricePlan: e, cta: `upgrade` };
    case i.GO:
      return { displayPlan: `go`, pricePlan: e, cta: `upgrade` };
    case i.PLUS:
      return { displayPlan: `plus`, pricePlan: e, cta: `view` };
    case i.PROLITE:
    case i.PRO:
      return { displayPlan: `pro`, pricePlan: e, cta: `view` };
  }
}
function R(e) {
  return e === i.GO || e === i.PLUS || e === i.PROLITE || e === i.PRO;
}
function z(e) {
  return R(e) && e !== i.GO;
}
function B({ currentPlan: e, targetPlan: t }) {
  return e === t ? `current` : Q[t] < Q[e] ? `downgrade` : `upgrade`;
}
function V({ currentPlan: e, targetPlan: t }) {
  let n = B({ currentPlan: e, targetPlan: t });
  return n === `current`
    ? null
    : n === `downgrade`
      ? `https://chatgpt.com/codex/downgrade/${t === i.PROLITE ? `pro5x` : t}`
      : t === i.PLUS
        ? U
        : t === i.GO
          ? W
          : t === i.PROLITE
            ? G
            : K;
}
function H(e) {
  return e === i.FREE || e === i.GO || e === i.PLUS || e === i.PROLITE || e === i.PRO;
}
var U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (a(),
      (U = `https://chatgpt.com/codex/purchase/plus?checkout_from=codex_app`),
      (W = `https://chatgpt.com/codex/purchase/go?checkout_from=codex_app`),
      (G = `https://chatgpt.com/codex/purchase/pro5x?checkout_from=codex_app`),
      (K = `https://chatgpt.com/codex/purchase/pro?checkout_from=codex_app`),
      (q = `https://chatgpt.com/codex/purchase/codex_team?checkout_from=codex_app`),
      (J = `https://chatgpt.com/codex/purchase/team?checkout_from=codex_app`),
      (Y = `https://chatgpt.com/#settings/Billing`),
      (X = `https://help.openai.com/en/articles/7905690-how-to-cancel-your-apple-subscription-for-chatgpt-in-the-chatgpt-ios-app`),
      (Z = `https://help.openai.com/en/articles/8258076-how-to-cancel-a-subscription-in-the-chatgpt-android-app`),
      (Q = { [i.FREE]: 0, [i.GO]: 1, [i.PLUS]: 2, [i.PROLITE]: 3, [i.PRO]: 4 }));
  });
export {
  g as A,
  v as C,
  x as D,
  p as E,
  l as M,
  S as N,
  u as O,
  j as P,
  m as S,
  d as T,
  A as _,
  X as a,
  y as b,
  B as c,
  $ as d,
  R as f,
  O as g,
  k as h,
  q as i,
  h as j,
  f as k,
  L as l,
  M as m,
  Y as n,
  z as o,
  F as p,
  J as r,
  I as s,
  Z as t,
  V as u,
  E as v,
  _ as w,
  b as x,
  C as y,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~pric~dbjkmxsl.js.map
