const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./upgrade-plan-dialog.js",
      "./app-server-manager-signals.js",
      "./chunk-Bj-mKKzh.js",
      "./preload-helper.js",
      "./vscode-api.js",
      "./src-2.js",
      "./jsx-runtime.js",
      "./lib-2.js",
      "./tslib.es6.js",
      "./statsig.js",
      "./rpc-1.js",
      "./lib-1.js",
      "./marked.esm-BR-H6018.js",
      "./v4.js",
      "./persisted-signal-CweW-bgN.js",
      "./request.js",
      "./dialog-layout.js",
      "./dist-3.js",
      "./react-dom.js",
      "./Combination.js",
      "./clsx.js",
      "./window-zoom-context.js",
      "./button.js",
      "./spinner.js",
      "./reduced-motion-preference.js",
      "./setting-storage.js",
      "./tooltip-dismiss.js",
      "./with-window.js",
      "./x.js",
      "./dialog-layout.css",
      "./proxy.js",
      "./single-value.js",
      "./_baseEach.js",
      "./_baseOrderBy.js",
      "./codex-api.js",
      "./fuse.js",
      "./use-auth-6.js",
      "./app-server-manager-hooks.js",
      "./remote-connection-visibility.js",
      "./config-queries.js",
      "./invalidate-queries-and-broadcast.js",
      "./thread-context-inputs.js",
      "./selectable-remote-connections-signal.js",
      "./sidebar-signals.js",
      "./use-is-copilot-api-available.js",
      "./use-global-state.js",
      "./parse-owner-repo.js",
      "./use-debounced-value.js",
      "./animated-segmented-toggle.js",
      "./links.js",
      "./conversation-starter-card.js",
      "./use-is-dark.js",
      "./use-codex-pricing-url.js",
      "./google-drive-CC-Egn92.js",
      "./lightning-bolt.js",
      "./get-codex-purchase-handoff-url.js",
      "./codex-api-error.js",
      "./plan-management-state.js",
      "./skus.js",
      "./plan-pricing.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk-Bj-mKKzh.js";
import { na as t, sa as n } from "./src-2.js";
import { t as r } from "./preload-helper.js";
import { n as i } from "./jsx-runtime.js";
import { V as a, f as o, h as s, lt as c, u as l } from "./vscode-api.js";
import { f as u, m as d } from "./chunk-12.js";
import { c as f, i as p } from "./statsig.js";
import { t as m } from "./request.js";
import { t as h } from "./use-auth-6.js";
import { r as g } from "./modal-controller-state.js";
var _ = `/pricing-plan`,
  v = (0, e(i(), 1).lazy)(async () => ({
    default: (
      await r(
        async () => {
          let { UpgradePlanDialogModal: e } = await import(`./upgrade-plan-dialog.js`);
          return { UpgradePlanDialogModal: e };
        },
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        ]),
        import.meta.url,
      )
    ).UpgradePlanDialogModal,
  })),
  y = c(),
  b = `1640366510`,
  x = `4066307019`,
  S = t({ email_domain_type: n() }),
  C = a(s, (e) => ({
    queryKey: [`professional-email-domain`, e],
    queryFn: async () => {
      let e = S.safeParse(await m.safeGet(`/me`));
      return e.success && e.data.email_domain_type === `professional`;
    },
    retry: !1,
    staleTime: l.INFINITE,
  }));
function w() {
  let e = (0, y.c)(5),
    { userId: t } = h(),
    n = f(),
    r = u(),
    i = d(),
    a;
  return (
    e[0] !== r || e[1] !== i || e[2] !== n || e[3] !== t
      ? ((a = (e) => {
          let { scope: a, currentPlan: o, defaultTab: s, source: c } = e;
          if (o == null) return !1;
          switch (p(n, b, { disableExposureLog: !1 }).get(`surface`, `web`)) {
            case `dialog`:
              return (
                s == null
                  ? E(a, n, t).then((e) => {
                      g(a, v, { currentPlan: o, defaultTab: e, source: c });
                    })
                  : g(a, v, { currentPlan: o, defaultTab: s, source: c }),
                !0
              );
            case `page`: {
              let e = (e) => {
                i(_, {
                  state: {
                    defaultTab: e,
                    returnPath: `${r.pathname}${r.search}${r.hash}`,
                    source: c,
                  },
                });
              };
              return (s == null ? E(a, n, t).then(e) : e(s), !0);
            }
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
function T() {
  let e = (0, y.c)(2),
    t = w(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let { scope: n, currentPlan: r, defaultTab: i, getPricingUrl: a, source: s } = e;
          t({ scope: n, currentPlan: r, defaultTab: i, source: s }) ||
            o.dispatchMessage(`open-in-browser`, { url: a() });
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
async function E(e, t, n) {
  if (n == null) return `personal`;
  try {
    if (!(await e.query.getOrFetch(C, n))) return `personal`;
  } catch {
    return `personal`;
  }
  return p(t, x, { disableExposureLog: !1 }).get(`enabled`, !1) ? `business` : `personal`;
}
export { w as n, _ as r, T as t };
//# sourceMappingURL=upgrade-plan-dialog-launcher.js.map
