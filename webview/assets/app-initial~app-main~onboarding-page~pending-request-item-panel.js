import { n as e } from "./rolldown-runtime.js";
import {
  F as t,
  O as n,
  Rt as r,
  Xs as i,
  el as a,
  ol as o,
  zc as s,
  zt as c,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Dx as l, Ox as u } from "./app-initial~app-main~onboarding-page.js";
import {
  Xb as d,
  Zb as f,
  vx as p,
  yx as m,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Cu as h,
  Su as g,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
var _,
  v,
  y = e(() => {
    ((_ = `last_completed_onboarding`), (v = `electron:onboarding-projectless-completed`));
  });
function b({ hideFirstNewThreadOnboardingPromos: e, pathname: t }) {
  return e && t === `/`;
}
function x({
  projectlessOnboardingCompleted: e,
  workspaceRootsCount: t,
  workspaceRootsIsLoading: n,
}) {
  return e == null ? null : e ? !0 : n ? null : t > 0;
}
function S(e) {
  return e == null || e * 1e3 < z;
}
var C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (a(),
      i(),
      u(),
      c(),
      n(),
      g(),
      d(),
      y(),
      (C = `welcomeV2Onboarding`),
      (w = h(`electron:onboarding-override`, `auto`)),
      (T = h(`electron:onboarding-welcome-pending`, !1)),
      (E = h(v, !1)),
      (D = f(v, !1)),
      (O = s(r, ({ get: e }) => {
        let n = e(D),
          r = e(t);
        return x({
          projectlessOnboardingCompleted: n,
          workspaceRootsCount: r.data?.roots.length ?? 0,
          workspaceRootsIsLoading: r.data == null && r.isLoading,
        });
      })),
      (k = h(`electron:onboarding-hide-first-new-thread-promos`, !1)),
      (A = h(`electron:onboarding-plugin-checklist-active`, !1)),
      (j = h(`electron:onboarding-plugin-suggestions-v2-enabled-at-completion`, !1)),
      (M = h(`electron:homepage-onboarding-tiles-debug-override`, null)),
      (N = f(`electron:onboarding-mail-provider-debug-override`, null)),
      (P = f(`electron:onboarding-hide-google-tiles-debug-override`, !1)),
      (F = h(_, null)),
      (I = o(
        (e) => e(F),
        (e, t, n) => {
          (n != null && l(), t(F, n));
        },
      )),
      (L = h(`electron:onboarding-primary-runtime-install-requested`, !1)),
      (R = h(`electron:onboarding-primary-runtime-install-ready`, !1)),
      (z = new Date(2026, 3, 30).getTime()),
      (B = h(`electron:onboarding-workspace-experiment-assignment`, null)),
      (V = h(`electron:onboarding-workspace-autolaunch-applied`, !1)),
      (H = h(`electron:onboarding-welcome-v2-role-state`, {
        roles: [],
        personalizedSuggestionsEnabled: !0,
        workMode: null,
      })));
  });
function W(e) {
  return e.some((e) => Y.has(e)) ? `coding` : `non_coding`;
}
function G(e) {
  return e.some((e) => J.has(e));
}
function K(e = Math.random) {
  let t = X.filter((e) => e !== `something_else`);
  for (let n = t.length - 1; n > 0; --n) {
    let r = Math.floor(e() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return [...t, `something_else`];
}
function q(e, t) {
  return { ...e, roles: t, workMode: W(t) };
}
var J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (a(),
      m(),
      U(),
      (J = new Set([`engineering`, `data_science`])),
      (Y = new Set([`default`, ...J])),
      (X = [
        `engineering`,
        `data_science`,
        `product_management`,
        `design`,
        `marketing`,
        `sales`,
        `finance`,
        `operations`,
        `people_hr`,
        `legal`,
        `student`,
        `something_else`,
      ]),
      (Z = p({
        engineering: {
          id: `electron.onboarding.welcomeV2.role.engineering`,
          defaultMessage: `Engineering`,
          description: `Welcome v2 role option for engineering users`,
        },
        product_management: {
          id: `electron.onboarding.welcomeV2.role.product`,
          defaultMessage: `Product`,
          description: `Welcome v2 role option for product management users`,
        },
        data_science: {
          id: `electron.onboarding.welcomeV2.role.dataScience`,
          defaultMessage: `Data science`,
          description: `Welcome v2 role option for data science users`,
        },
        design: {
          id: `electron.onboarding.welcomeV2.role.design`,
          defaultMessage: `Design`,
          description: `Welcome v2 role option for design users`,
        },
        finance: {
          id: `electron.onboarding.welcomeV2.role.finance`,
          defaultMessage: `Finance`,
          description: `Welcome v2 role option for finance users`,
        },
        marketing: {
          id: `electron.onboarding.welcomeV2.role.marketing`,
          defaultMessage: `Marketing`,
          description: `Welcome v2 role option for marketing users`,
        },
        sales: {
          id: `electron.onboarding.welcomeV2.role.sales`,
          defaultMessage: `Sales`,
          description: `Welcome v2 role option for sales users`,
        },
        operations: {
          id: `electron.onboarding.welcomeV2.role.operations`,
          defaultMessage: `Operations`,
          description: `Welcome v2 role option for operations users`,
        },
        people_hr: {
          id: `electron.onboarding.welcomeV2.role.peopleHr`,
          defaultMessage: `People & HR`,
          description: `Welcome v2 role option for people and HR users`,
        },
        legal: {
          id: `electron.onboarding.welcomeV2.role.legal`,
          defaultMessage: `Legal`,
          description: `Welcome v2 role option for legal users`,
        },
        student: {
          id: `electron.onboarding.welcomeV2.role.student`,
          defaultMessage: `Student`,
          description: `Welcome v2 role option for student users`,
        },
        something_else: {
          id: `electron.onboarding.welcomeV2.role.somethingElse`,
          defaultMessage: `Something else`,
          description: `Welcome v2 role option for users who don't fit into the other categories`,
        },
      })),
      (Q = o(null, (e, t, n) => {
        t(H, q(e(H), n));
      })));
  });
export {
  y as A,
  P as C,
  S as D,
  b as E,
  _ as O,
  O as S,
  N as T,
  L as _,
  K as a,
  V as b,
  C as c,
  I as d,
  w as f,
  R as g,
  T as h,
  W as i,
  v as k,
  k as l,
  j as m,
  X as n,
  G as o,
  A as p,
  Q as r,
  $ as s,
  Z as t,
  M as u,
  E as v,
  U as w,
  B as x,
  H as y,
};
//# sourceMappingURL=app-initial~app-main~onboarding-page~pending-request-item-panel.js.map
