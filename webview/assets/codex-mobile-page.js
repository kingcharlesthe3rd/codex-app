import { s as e } from "./chunk-Bj-mKKzh.js";
import { zr as t } from "./src-2.js";
import "./app-server-manager-signals.js";
import { n, t as r } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm-BR-H6018.js";
import { lt as i } from "./vscode-api.js";
import { n as a } from "./react.js";
import "./lib-2.js";
import { m as o } from "./chunk-9.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive-CC-Egn92.js";
import "./notion.js";
import "./persisted-signal.js";
import "./rpc-2.js";
import "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks.js";
import { t as s } from "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-auth.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./route-scope.js";
import "./mention-item.js";
import "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info.js";
import "./use-os-info.js";
import "./remote-projects.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as c } from "./app-shell.js";
import "./apps.js";
import "./chats-K.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./check-circle-filled.js";
import "./app-shell-tab-controller.js";
import "./browser-sidebar-manager.js";
import "./info-BV-snsxq.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-plugin-install-flow.js";
import "./folder.js";
import "./settings.cog.js";
import "./chrome.js";
import "./openai-blossom.js";
import "./filesystem-media-src.js";
import "./use-register-command.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./use-skills.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./context-menu.js";
import "./plugin-config-edits.js";
import "./plugin-prefill-prompt.js";
import "./plugins-availability.js";
import "./electron-menu-shortcuts.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./command-keybindings.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./codex-api-error.js";
import "./plan-management-state.js";
import "./links.js";
import "./upgrade-plan-dialog-launcher.js";
import "./check-circle.js";
import "./phone.js";
import "./badge.js";
import "./search.js";
import "./dropdown.js";
import "./globe.js";
import "./segmented-toggle.js";
import "./chevron.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./use-codex-pricing-url.js";
import "./log-out.js";
import "./toggle.js";
import "./lock.js";
import "./arrow-top-right.js";
import "./connected-apps.js";
import "./regenerate.js";
import "./app-connect-oauth.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries.js";
import "./thread-page-header.js";
import "./sun.js";
import "./local-remote-control-enabled-sync.js";
import { n as l, o as u } from "./codex-mobile-setup-dialog.js";
import "./chatgpt-token-auth.browser.js";
import { t as d } from "./codex-mobile-setup-flow.js";
import "./use-home-directory-fhl-Q5x2.js";
import "./cursor.js";
var f = i(),
  p = e(n(), 1),
  m = r();
function h() {
  let e = (0, f.c)(2),
    { data: n, isLoading: r } = s(t.CODEX_MOBILE_SETUP_COMPLETED);
  if (r) return null;
  let i;
  return (
    e[0] === n
      ? (i = e[1])
      : ((i = (0, m.jsx)(g, { hasCompletedCodexMobileSetup: n })), (e[0] = n), (e[1] = i)),
    i
  );
}
function g(e) {
  let t = (0, f.c)(6),
    { hasCompletedCodexMobileSetup: n } = e,
    r = o(),
    [i] = a(u),
    [s] = (0, p.useState)(!n);
  if (s || i !== `auto`) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, m.jsx)(c.MainContentLayout, { layout: `full-bleed` })), (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] === r
        ? (n = t[2])
        : ((n = (0, m.jsxs)(m.Fragment, {
            children: [
              e,
              (0, m.jsx)(d, {
                onClose: () => {
                  r(`/`);
                },
                variant: `page`,
              }),
            ],
          })),
          (t[1] = r),
          (t[2] = n)),
      n
    );
  }
  let h;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, m.jsx)(c.MainContentLayout, { layout: `full-bleed` })), (t[3] = h))
    : (h = t[3]);
  let g;
  return (
    t[4] === r
      ? (g = t[5])
      : ((g = (0, m.jsxs)(m.Fragment, {
          children: [
            h,
            (0, m.jsx)(l, {
              onManageConnections: () => {
                r(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[4] = r),
        (t[5] = g)),
    g
  );
}
export { h as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
