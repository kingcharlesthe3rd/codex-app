const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./upgrade-plan-dialog.js",
      "./thread-context-inputs.js",
      "./chunk.js",
      "./preload-helper.js",
      "./app-scope-CWE-zIhQ.js",
      "./isEqual.js",
      "./jsx-runtime.js",
      "./lib-1.js",
      "./tslib.es6.js",
      "./product-logger.js",
      "./statsig.js",
      "./use-host-config.js",
      "./vscode-api.js",
      "./src-3.js",
      "./rpc-1.js",
      "./markdown-to-search-text.js",
      "./lib-2.js",
      "./parse-directives.js",
      "./marked.esm.js",
      "./v4.js",
      "./persisted-signal.js",
      "./chunk-13.js",
      "./persisted-atom-store.js",
      "./platform.js",
      "./base64.js",
      "./request.js",
      "./dialog-layout.js",
      "./dist-12.js",
      "./react-dom.js",
      "./Combination.js",
      "./clsx.js",
      "./window-zoom-context.js",
      "./button.js",
      "./spinner.js",
      "./use-reduced-motion-1.js",
      "./reduced-motion-preference.js",
      "./setting-storage.js",
      "./tooltip-dismiss.js",
      "./with-window.js",
      "./x.js",
      "./dialog-layout.css",
      "./proxy.js",
      "./single-value.js",
      "./reduced-motion.js",
      "./_baseEach.js",
      "./_baseOrderBy.js",
      "./codex-api-C.js",
      "./fuse.js",
      "./use-auth.js",
      "./app-server-manager-hooks.js",
      "./remote-connection-visibility.js",
      "./config-queries.js",
      "./invalidate-queries-and-broadcast.js",
      "./selectable-remote-connections-signal.js",
      "./sidebar-signals.js",
      "./use-global-state.js",
      "./parse-owner-repo.js",
      "./use-debounced-value.js",
      "./subscription-update-plan.js",
      "./plan-pricing.js",
      "./format-currency.js",
      "./skus.js",
      "./toast-signal.js",
      "./links.js",
      "./conversation-starter-card-D5-kwyZS.js",
      "./use-is-dark.js",
      "./use-codex-pricing-url.js",
      "./google-drive.js",
      "./lightning-bolt.js",
      "./usage-queries.js",
      "./queryOptions.js",
      "./codex-api-error.js",
      "./plan-management-state.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { Z as n, p as r, t as i } from "./app-scope-CWE-zIhQ.js";
import { f as a, u as o } from "./vscode-api.js";
import { Aa as s, Ta as c } from "./src-3.js";
import { t as l } from "./preload-helper.js";
import { c as u, i as d } from "./statsig.js";
import { t as f } from "./request.js";
import { f as p, m } from "./chunk-13.js";
import { t as h } from "./use-auth.js";
import { t as g } from "./skus.js";
import { r as _ } from "./modal-controller-state.js";
var v = `/pricing-plan`,
  y = (0, e(t(), 1).lazy)(async () => ({
    default: (
      await l(
        async () => {
          let { UpgradePlanDialogModal: e } = await import(`./upgrade-plan-dialog.js`);
          return { UpgradePlanDialogModal: e };
        },
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
          69, 70, 71, 72,
        ]),
        import.meta.url,
      )
    ).UpgradePlanDialogModal,
  })),
  b = n(),
  x = `1640366510`,
  S = c({ email_domain_type: s() }),
  C = r(i, (e) => ({
    queryKey: [`professional-email-domain`, e],
    queryFn: async () => {
      let e = S.safeParse(await f.safeGet(`/me`));
      return e.success && e.data.email_domain_type === `professional`;
    },
    retry: !1,
    staleTime: o.INFINITE,
  }));
function w() {
  let e = (0, b.c)(5),
    { userId: t } = h(),
    n = u(),
    r = p(),
    i = m(),
    a;
  return (
    e[0] !== r || e[1] !== i || e[2] !== n || e[3] !== t
      ? ((a = (e) => {
          let { scope: a, currentPlan: o, defaultTab: s, source: c } = e;
          if (o == null) return !1;
          switch (d(n, x, { disableExposureLog: !1 }).get(`surface`, `web`)) {
            case `dialog`:
              return (
                E(a, n, t, o, s).then((e) => {
                  _(a, y, { currentPlan: o, defaultTab: e, source: c });
                }),
                !0
              );
            case `page`:
              return (
                E(a, n, t, o, s).then((e) => {
                  i(v, {
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
function T() {
  let e = (0, b.c)(2),
    t = w(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let { scope: n, currentPlan: r, defaultTab: i, getPricingUrl: o, source: s } = e;
          t({ scope: n, currentPlan: r, defaultTab: i, source: s }) ||
            a.dispatchMessage(`open-in-browser`, { url: o() });
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
async function E(e, t, n, r, i) {
  let a = i ?? `personal`;
  if (
    (r === g.PLUS &&
      (a = d(t, x, { disableExposureLog: !1 }).get(`default_plus_to_business`, !1)
        ? `business`
        : `personal`),
    n == null)
  )
    return a;
  try {
    return (await e.query.getOrFetch(C, n)) ? `business` : a;
  } catch {
    return a;
  }
}
export { w as n, v as r, T as t };
//# sourceMappingURL=upgrade-plan-dialog-launcher.js.map
