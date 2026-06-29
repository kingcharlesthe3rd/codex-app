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
      "./rpc-2.js",
      "./lib-1.js",
      "./marked.esm-BR-H6018.js",
      "./v4.js",
      "./persisted-signal.js",
      "./request.js",
      "./dialog-layout.js",
      "./dist-2.js",
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
      "./use-auth.js",
      "./app-server-manager-hooks.js",
      "./remote-connection-visibility.js",
      "./use-global-state.js",
      "./config-queries.js",
      "./invalidate-queries-and-broadcast.js",
      "./thread-context-inputs.js",
      "./device-connections.js",
      "./sidebar-signals.js",
      "./use-is-copilot-api-available.js",
      "./parse-owner-repo.js",
      "./use-debounced-value.js",
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
import { t } from "./preload-helper.js";
import { n } from "./jsx-runtime.js";
import { f as r, lt as i } from "./vscode-api.js";
import { c as a, i as o } from "./statsig.js";
import { r as s } from "./modal-controller-state.js";
var c = (0, e(n(), 1).lazy)(async () => ({
    default: (
      await t(
        async () => {
          let { UpgradePlanDialogModal: e } = await import(`./upgrade-plan-dialog.js`);
          return { UpgradePlanDialogModal: e };
        },
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        ]),
        import.meta.url,
      )
    ).UpgradePlanDialogModal,
  })),
  l = i(),
  u = `1640366510`;
function d() {
  let e = (0, l.c)(2),
    t = a(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let { scope: n, currentPlan: r, source: i } = e;
          return r == null || !o(t, u, { disableExposureLog: !1 }).get(`enabled`, !1)
            ? !1
            : (p(n, r, i), !0);
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function f() {
  let e = (0, l.c)(2),
    t = d(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let { scope: n, currentPlan: i, getPricingUrl: a, source: o } = e;
          t({ scope: n, currentPlan: i, source: o }) ||
            r.dispatchMessage(`open-in-browser`, { url: a() });
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function p(e, t, n) {
  s(e, c, { currentPlan: t, source: n });
}
export { f as n, d as r, p as t };
//# sourceMappingURL=upgrade-plan-dialog-launcher.js.map
