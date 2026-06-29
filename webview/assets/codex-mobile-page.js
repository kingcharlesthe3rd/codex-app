import { t as e } from "./jsx-runtime.js";
import { R as t, a as n, o as r, t as i } from "./app-scope.js";
import { _ as a } from "./vscode-api.js";
import { n as o } from "./react.js";
import "./isEqual.js";
import "./src-4.js";
import { An as s, us as c } from "./app-server-manager-signals.js";
import "./react-dom.js";
import "./lib-1.js";
import "./persisted-signal.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as l } from "./app-shell.js";
import "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./tooltip.js";
import "./context-menu.js";
import "./rpc-2.js";
import "./statsig-DoZ-0xit.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries-BHYT-TjG.js";
import "./selectable-remote-connections-signal-DJZ-ZbLr.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./toast-signal.js";
import "./remote-projects.js";
import "./check-circle-filled.js";
import "./core.esm.js";
import { m as u } from "./chunk-8.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./route-scope.js";
import "./mention-item.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./apps.js";
import "./chats.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store-Cl-MdpFm.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./app-shell-tab-controller.js";
import "./browser-sidebar-manager.js";
import "./app-intl-signal.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-window-controls-safe-area.js";
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
import "./select-project.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./use-skills.js";
import "./initial-route-atom.js";
import "./use-start-new-conversation.js";
import "./plugin-config-edits.js";
import "./plugin-prefill-prompt.js";
import "./bundled-plugin-auto-install-preference.js";
import "./upgrade-plan-dialog-launcher.js";
import "./electron-menu-shortcuts.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-row-signals.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./command-keybindings.js";
import "./expand-BJ-ybVqe.js";
import "./keyboard-modifier-state.js";
import "./arrow-left.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./app-shell-ref.js";
import "./codex-api-error.js";
import "./links.js";
import "./use-codex-pricing-url.js";
import "./plan-management-state.js";
import "./check-circle.js";
import "./local-remote-control-enabled-sync.js";
import "./badge.js";
import "./search.js";
import "./dropdown.js";
import "./globe.js";
import "./chevron.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./check-plugin-availability.js";
import "./toggle.js";
import "./lock.js";
import "./arrow-top-right.js";
import "./connected-apps.js";
import "./regenerate.js";
import "./app-connect-oauth.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries.js";
import "./thread-page-header.js";
import "./plugins-availability.js";
import "./sun.js";
import { h as d, n as f, s as p } from "./codex-mobile-setup-dialog.js";
import "./chatgpt-token-auth.browser.js";
import { t as m } from "./codex-mobile-setup-flow.js";
import "./use-home-directory.js";
import "./cursor.js";
import "./segmented-toggle.js";
var h = t(),
  g = e();
function _() {
  let e = (0, h.c)(11),
    t = r(i),
    _ = u(),
    v = n(s, c),
    [y] = o(d),
    b;
  e[0] === t ? (b = e[1]) : ((b = p(t)), (e[0] = t), (e[1] = b));
  let { data: x, isError: S, isFetching: C } = a(b);
  if (C || v == null) return null;
  if (S || x || v.status === `disabled` || y !== `auto`) {
    let t;
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, g.jsx)(l.MainContentLayout, { layout: `full-bleed` })), (e[2] = t))
      : (t = e[2]);
    let n = x ? `mfa-required` : void 0,
      r;
    e[3] === _
      ? (r = e[4])
      : ((r = () => {
          _(`/`);
        }),
        (e[3] = _),
        (e[4] = r));
    let i;
    return (
      e[5] !== n || e[6] !== r
        ? ((i = (0, g.jsxs)(g.Fragment, {
            children: [t, (0, g.jsx)(m, { initialStep: n, onClose: r, variant: `page` })],
          })),
          (e[5] = n),
          (e[6] = r),
          (e[7] = i))
        : (i = e[7]),
      i
    );
  }
  let w;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, g.jsx)(l.MainContentLayout, { layout: `full-bleed` })), (e[8] = w))
    : (w = e[8]);
  let T;
  return (
    e[9] === _
      ? (T = e[10])
      : ((T = (0, g.jsxs)(g.Fragment, {
          children: [
            w,
            (0, g.jsx)(f, {
              onManageConnections: () => {
                _(`/settings/connections`);
              },
            }),
          ],
        })),
        (e[9] = _),
        (e[10] = T)),
    T
  );
}
export { _ as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
