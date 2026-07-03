const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./upgrade-plan-dialog.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js",
      "./rolldown-runtime.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.css",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5.js",
      "./app-initial~app-main~onboarding-page.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~lblzrcac.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~lblzrcac.css",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~deb~f7pffoin.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~cr83yrz8-D.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~n1rtl5kd.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~dacyny7u.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~eli049gd.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~bro~d842tpfk.js",
      "./app-initial~app-main~onboarding-page.css",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5.css",
      "./subscription-update-plan.js",
      "./plan-pricing.js",
      "./app-initial~app-main~new-thread-panel-page~home-announcements~upgrade-plan-dialog.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~setting~fboddtaw-R.js",
      "./conversation-starter-card.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime.js";
import {
  BV as n,
  DB as r,
  DW as i,
  EO as a,
  EW as o,
  FV as s,
  FY as c,
  GY as l,
  IU as u,
  IV as d,
  LO as f,
  LU as p,
  SY as m,
  TB as h,
  XK as g,
  YK as _,
  _f as v,
  cZ as y,
  dx as b,
  fx as x,
  gf as S,
  hf as C,
  jX as w,
  ju as T,
  ku as E,
  lZ as D,
  ny as O,
  ty as k,
  vf as A,
  zO as j,
  zY as M,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
var N,
  P = e(() => {
    N = `/pricing-plan`;
  }),
  F,
  I,
  L = e(() => {
    ((F = t(D(), 1)),
      g(),
      (I = (0, F.lazy)(async () => ({
        default: (
          await _(
            async () => {
              let { UpgradePlanDialogModal: e } = await import(`./upgrade-plan-dialog.js`);
              return { UpgradePlanDialogModal: e };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            ]),
            import.meta.url,
          )
        ).UpgradePlanDialogModal,
      }))));
  });
function R() {
  let e = (0, H.c)(2),
    t = n(),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = s(t, U, { disableExposureLog: !0 }).get(`surface`, `web`)), (e[0] = t), (e[1] = r));
  let i = r;
  return i === `dialog` || i === `page` ? i : `web`;
}
function z() {
  let e = (0, H.c)(5),
    { userId: t } = x(),
    r = n(),
    i = f(),
    a = j(),
    o;
  return (
    e[0] !== i || e[1] !== a || e[2] !== r || e[3] !== t
      ? ((o = (e) => {
          let { scope: n, currentPlan: o, defaultTab: c, source: l } = e;
          if (o == null) return !1;
          switch (s(r, U, { disableExposureLog: !1 }).get(`surface`, `web`)) {
            case `dialog`:
              return (
                V(n, r, t, o, c).then((e) => {
                  T(n, I, { currentPlan: o, defaultTab: e, source: l });
                }),
                !0
              );
            case `page`:
              return (
                V(n, r, t, o, c).then((e) => {
                  a(N, {
                    state: {
                      defaultTab: e,
                      returnPath: `${i.pathname}${i.search}${i.hash}`,
                      source: l,
                    },
                  });
                }),
                !0
              );
            default:
              return !1;
          }
        }),
        (e[0] = i),
        (e[1] = a),
        (e[2] = r),
        (e[3] = t),
        (e[4] = o))
      : (o = e[4]),
    o
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
          if (a != null && S(a)) {
            v({ event: a, href: o(), initiator: `open_in_browser_bridge` });
            return;
          }
          t({ scope: n, currentPlan: r, defaultTab: i, source: s }) ||
            (a == null
              ? A({ href: o(), initiator: `open_in_browser_bridge` })
              : v({ event: a, href: o(), initiator: `open_in_browser_bridge` }));
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
async function V(e, t, n, r, i) {
  let a = i ?? `personal`;
  if (
    (r === k.PLUS &&
      (a = s(t, U, { disableExposureLog: !1 }).get(`default_plus_to_business`, !1)
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
    ((H = y()),
      l(),
      a(),
      m(),
      b(),
      C(),
      E(),
      i(),
      d(),
      p(),
      r(),
      O(),
      P(),
      L(),
      (U = `1640366510`),
      (W = c({ email_domain_type: M() })),
      (G = w(o, (e) => ({
        queryKey: [`professional-email-domain`, e],
        queryFn: async () => {
          let e = W.safeParse(await h.safeGet(`/me`));
          return e.success && e.data.email_domain_type === `professional`;
        },
        retry: !1,
        staleTime: u.INFINITE,
      }))));
  });
export { N as a, R as i, B as n, P as o, z as r, K as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~fkswc4hr.js.map
