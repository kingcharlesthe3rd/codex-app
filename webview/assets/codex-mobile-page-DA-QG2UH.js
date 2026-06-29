import { s as e } from "./chunk-Bj-mKKzh.js";
import { kr as t } from "./src-C.js";
import { $s as n } from "./app-server-manager-signals.js";
import { n as r, t as i } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm-BR-H6018.js";
import { wt as a } from "./setting-storage.js";
import { m as o } from "./chunk-8.js";
import "./product-logger.js";
import "./rpc.js";
import "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks-DfDI-9lO.js";
import { t as s } from "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./codex-api-B.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase-Bo0-xpFk.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./route-scope.js";
import "./button.js";
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
import "./chats.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store-CS-dd4DH.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-plugin-install-flow.js";
import "./dialog-layout.js";
import "./plugins-availability.js";
import "./plugin-config-edits.js";
import "./local-projects.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./open-project-setup-dialog.js";
import "./folder.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import "./use-register-command.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./command-keybindings.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./codex-api-error.js";
import "./links.js";
import "./check-circle.js";
import "./phone.js";
import "./badge.js";
import "./globe.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./chrome-ZI-wJE1V.js";
import "./openai-blossom.js";
import "./filesystem-media-src.js";
import "./use-skills.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./toggle.js";
import "./app-connect-oauth.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries.js";
import "./thread-page-header.js";
import "./sun.js";
import "./local-remote-control-enabled-sync.js";
import { n as l, o as u } from "./codex-mobile-setup-dialog.js";
import "./chatgpt-token-auth.browser.js";
import { t as d } from "./codex-mobile-setup-flow.js";
import "./use-home-directory.js";
import "./cursor.js";
import "./segmented-toggle.js";
var f = a(),
  p = e(r(), 1),
  m = i();
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
    { hasCompletedCodexMobileSetup: r } = e,
    i = o(),
    [a] = n(u),
    [s] = (0, p.useState)(!r);
  if (s || a !== `auto`) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, m.jsx)(c.MainContentLayout, { layout: `full-bleed` })), (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] === i
        ? (n = t[2])
        : ((n = (0, m.jsxs)(m.Fragment, {
            children: [
              e,
              (0, m.jsx)(d, {
                onClose: () => {
                  i(`/`);
                },
                variant: `page`,
              }),
            ],
          })),
          (t[1] = i),
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
    t[4] === i
      ? (g = t[5])
      : ((g = (0, m.jsxs)(m.Fragment, {
          children: [
            h,
            (0, m.jsx)(l, {
              onManageConnections: () => {
                i(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[4] = i),
        (t[5] = g)),
    g
  );
}
export { h as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page-DA-QG2UH.js.map
