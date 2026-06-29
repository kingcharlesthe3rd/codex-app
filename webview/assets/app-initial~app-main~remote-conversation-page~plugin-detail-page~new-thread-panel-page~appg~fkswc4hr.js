const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./upgrade-plan-dialog.js",
      "./app-initial~app-main~onboarding-page~select-workspace-page.js",
      "./rolldown-runtime.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js",
      "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~gox010hx.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.css",
      "./subscription-update-plan.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~pricing-plan-page~appge~oa4i4ynf.js",
      "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~pric~dbjkmxsl.js",
      "./plan-pricing.js",
      "./app-initial~app-main~new-thread-panel-page~home-announcements~upgrade-plan-dialog.js",
      "./conversation-starter-card.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bs as n,
  Gs as r,
  Ht as i,
  Ol as a,
  Ut as o,
  Yc as s,
  _t as c,
  gt as l,
  kl as u,
  tc as d,
  vi as f,
  xs as p,
  yi as m,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ba as h,
  Hd as g,
  Ra as _,
  Ss as v,
  Ud as y,
  bs as b,
  xs as x,
  ys as S,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Hn as C,
  Kl as w,
  Un as T,
  aC as E,
  fS as D,
  iu as O,
  oC as k,
  ou as A,
  uC as j,
  uS as M,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
var N,
  P = e(() => {
    N = `/pricing-plan`;
  }),
  F,
  I,
  L = e(() => {
    ((F = t(u(), 1)),
      m(),
      (I = (0, F.lazy)(async () => ({
        default: (
          await f(
            async () => {
              let { UpgradePlanDialogModal: e } = await import(`./upgrade-plan-dialog.js`);
              return { UpgradePlanDialogModal: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
            import.meta.url,
          )
        ).UpgradePlanDialogModal,
      }))));
  });
function R() {
  let e = (0, H.c)(2),
    t = j(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = E(t, U, { disableExposureLog: !0 }).get(`surface`, `web`)), (e[0] = t), (e[1] = n));
  let r = n;
  return r === `dialog` || r === `page` ? r : `web`;
}
function z() {
  let e = (0, H.c)(5),
    { userId: t } = T(),
    n = j(),
    r = O(),
    i = A(),
    a;
  return (
    e[0] !== r || e[1] !== i || e[2] !== n || e[3] !== t
      ? ((a = (e) => {
          let { scope: a, currentPlan: o, defaultTab: s, source: c } = e;
          if (o == null) return !1;
          switch (E(n, U, { disableExposureLog: !1 }).get(`surface`, `web`)) {
            case `dialog`:
              return (
                V(a, n, t, o, s).then((e) => {
                  h(a, I, { currentPlan: o, defaultTab: e, source: c });
                }),
                !0
              );
            case `page`:
              return (
                V(a, n, t, o, s).then((e) => {
                  i(N, {
                    state: {
                      defaultTab: e,
                      returnPath: `${r.pathname}${r.search}${r.hash}`,
                      source: c,
                    },
                  });
                }),
                !0
              );
            default:
              return !1;
          }
        }),
        (e[0] = r),
        (e[1] = i),
        (e[2] = n),
        (e[3] = t),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
function B() {
  let e = (0, H.c)(2),
    t = z(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let {
            scope: n,
            currentPlan: r,
            defaultTab: i,
            event: a,
            getPricingUrl: o,
            source: s,
          } = e;
          if (a != null && b(a)) {
            x({ event: a, href: o(), initiator: `open_in_browser_bridge` });
            return;
          }
          t({ scope: n, currentPlan: r, defaultTab: i, source: s }) ||
            (a == null
              ? v({ href: o(), initiator: `open_in_browser_bridge` })
              : x({ event: a, href: o(), initiator: `open_in_browser_bridge` }));
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
async function V(e, t, n, r, i) {
  let a = i ?? `personal`;
  if (
    (r === g.PLUS &&
      (a = E(t, U, { disableExposureLog: !1 }).get(`default_plus_to_business`, !1)
        ? `business`
        : `personal`),
    n == null)
  )
    return a;
  try {
    return (await e.query.getOrFetch(G, n)) ? `business` : a;
  } catch {
    return a;
  }
}
var H,
  U,
  W,
  G,
  K = e(() => {
    ((H = a()),
      d(),
      w(),
      p(),
      C(),
      S(),
      _(),
      o(),
      k(),
      c(),
      D(),
      y(),
      P(),
      L(),
      (U = `1640366510`),
      (W = n({ email_domain_type: r() })),
      (G = s(i, (e) => ({
        queryKey: [`professional-email-domain`, e],
        queryFn: async () => {
          let e = W.safeParse(await M.safeGet(`/me`));
          return e.success && e.data.email_domain_type === `professional`;
        },
        retry: !1,
        staleTime: l.INFINITE,
      }))));
  });
export { N as a, R as i, B as n, P as o, z as r, K as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~fkswc4hr.js.map
