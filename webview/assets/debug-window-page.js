import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { R as r } from "./app-scope.js";
import { p as i } from "./vscode-api.js";
import "./isEqual.js";
import { Cr as a } from "./src-4.js";
import "./app-server-manager-signals.js";
import "./react-dom.js";
import "./lib-1.js";
import "./persisted-signal.js";
import "./proxy.js";
import "./app-shell-state.js";
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
import "./use-collaboration-mode.js";
import "./use-model-settings.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./toast-signal.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import "./check-circle-filled.js";
import { a as o } from "./chunk-8.js";
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
import "./build-start-conversation-params.js";
import "./route-scope.js";
import "./mention-item.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./onboarding-state.js";
import "./use-service-tier-settings.js";
import "./apps.js";
import "./chats.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store-Cl-MdpFm.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import { y as s } from "./use-plugins.js";
import "./home-onboarding-assistant-tutorial-card.js";
import "./graduation-cap.js";
import "./recommended-skill-statsig-overrides.js";
import "./file-tree-search-input.js";
import "./info.js";
import "./download.js";
import { t as c } from "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./window-app-action-helpers.js";
import "./use-plugin-install-flow.js";
import "./app-server-notification-debug-signals.js";
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
import "./use-navigate-to-local-conversation.js";
import "./electron-menu-shortcuts.js";
import "./arrow-left.js";
import "./codex-api-error.js";
import "./minus.js";
import "./links.js";
import "./use-codex-pricing-url.js";
import "./plan-management-state.js";
import "./check-circle.js";
import "./local-remote-control-enabled-sync.js";
import "./badge.js";
import "./search.js";
import "./remote-connections-onboarding-signals.js";
import "./dropdown.js";
import "./chevron.js";
import "./code-snippet-Bu-o-Ykd.js";
import "./copy-D.js";
import "./copy-button.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./sortBy.js";
import "./check-plugin-availability.js";
import "./arrow-up-right-lg.js";
import "./toggle.js";
import "./lock.js";
import "./arrow-top-right.js";
import "./connected-apps.js";
import "./regenerate.js";
import "./app-connect-oauth.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries.js";
import "./use-is-thread-realtime-enabled.js";
import "./workspace-onboarding-experiment.js";
import "./use-workspace-file-search.js";
import "./browser-sidebar-comment-mode-coachmark-state.js";
import "./codex-analytics-attribution.js";
import "./use-target-apps.js";
import "./plugins-availability.js";
import "./workspace-directory-tree-CF-Bl6Oy.js";
import "./primary-runtime-query-keys.js";
import "./primary-runtime-install-state.js";
import "./sun.js";
import "./hotkey-window-state.js";
import "./codex-mobile-setup-dialog.js";
import "./chatgpt-token-auth.browser.js";
import "./use-home-directory.js";
import "./cursor.js";
import "./segmented-toggle.js";
import { n as l } from "./debug-modal-2.js";
import "./use-debug-panel.js";
var u = r(),
  d = e(t(), 1),
  f = n();
function p() {
  let e = (0, u.c)(4),
    [t, n] = (0, d.useState)(null),
    r;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (e) => {
          let { conversationId: t } = e;
          n(t);
        }),
        (e[0] = r))
      : (r = e[0]),
    i(`debug-window-origin-conversation-changed`, r),
    !a.allowDebugMenu(s()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, f.jsx)(o, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let p;
  return (
    e[2] === t
      ? (p = e[3])
      : ((p = (0, f.jsx)(c, {
          electron: !0,
          children: (0, f.jsx)(`main`, {
            className: `h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground`,
            children: (0, f.jsx)(l, {
              conversationIdOverride: t,
              onClose: m,
              showHeader: !1,
              showPopOutButton: !1,
            }),
          }),
        })),
        (e[2] = t),
        (e[3] = p)),
    p
  );
}
function m() {
  return window.close();
}
export { p as DebugWindowPage };
//# sourceMappingURL=debug-window-page.js.map
