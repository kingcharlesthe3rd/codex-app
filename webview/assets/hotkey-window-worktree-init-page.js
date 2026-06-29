import { t as e } from "./jsx-runtime.js";
import { R as t, s as n } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import { gt as r, ht as i, ut as a } from "./src-1.js";
import "./react-dom.js";
import { o } from "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import "./button-DO-oxX3-.js";
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
import "./context-menu-Cx-ZCB4Y.js";
import { n as s } from "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./platform-BrML-86Y.js";
import "./marked.esm.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./toast-signal.js";
import "./remote-projects.js";
import "./chevron.js";
import "./warning.js";
import { a as c, g as l } from "./chunk-109.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./_baseEach-BPh-9Ri0.js";
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
import "./prompt-text.js";
import "./mention-item-B.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./apps.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./terminal-C.js";
import "./download.js";
import "./with-window.js";
import "./plugin-detail-route-utils.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import "./json.js";
import "./folder.js";
import "./image-square.js";
import "./notebook.js";
import "./settings.cog.js";
import "./skills.js";
import "./mention-icons.js";
import "./mcp.js";
import "./get-skill-icon.js";
import "./bug.js";
import "./chrome.js";
import "./codex-Cx4-XOqq.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions.js";
import "./workspace-file-context-menu.js";
import "./use-register-command.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-skills-J.js";
import "./inline-mention-content.js";
import "./external-markdown-link.js";
import "./initial-route-atom.js";
import "./use-start-new-conversation-jDp-QANK.js";
import "./read-service-tier-for-request.js";
import "./pending-worktree-store.js";
import "./use-resize-observer.js";
import "./arrow-left.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./minus.js";
import "./globe.js";
import "./set-pinned-thread.js";
import "./external-link-favicon.js";
import "./copy.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./pull-request-open.js";
import "./use-is-background-subagents-enabled.js";
import "./sortBy.js";
import "./composer-controller.js";
/* empty css                    */ import "./attachment-remove-button.js";
import "./mention-metadata-syncer.js";
import "./composer-top-menu-chrome.js";
import "./use-enter-behavior.js";
import "./connected-apps.js";
import "./use-composer-controller.js";
import "./thread-resource-card.js";
import "./use-composer-top-menu-max-height.js";
import "./format-skill-scope.js";
import "./list-navigation.js";
import "./thread-layout.js";
import "./use-workspace-file-search-CG-eRM3a.js";
import "./at-mention-list-1.js";
import "./anchored-autocomplete-overlay.js";
import "./mcp-capability-client.js";
import "./prompt-editor.js";
import "./use-autocomplete-overlay-placement.js";
import "./use-measured-text-collapse.js";
import "./hooks.js";
import { n as u } from "./hotkey-window-state.js";
import "./pending-worktree-conversation.js";
import "./user-formatted-text.js";
import { n as d } from "./use-hotkey-window-detail-layout.js";
import "./thread-scroll-controller-context-value.js";
import "./thread-scroll-layout.js";
import "./hooks-settings-copy.js";
import "./user-message-attachments.js";
import { t as f } from "./worktree-init-v2-page-1.js";
var p = t(),
  m = e();
function h() {
  let e = (0, p.c)(8),
    { pendingWorktreeId: t } = l(),
    { data: s } = n(u),
    h = s == null || s.configuredHotkey != null,
    _;
  e[0] === h ? (_ = e[1]) : ((_ = r(h)), (e[0] = h), (e[1] = _));
  let v = _,
    y;
  if (
    (e[2] === t
      ? (y = e[3])
      : ((y =
          t == null
            ? null
            : {
                title: (0, m.jsx)(`span`, {
                  className: `max-w-full truncate`,
                  children: (0, m.jsx)(o, {
                    id: `worktreeInitV2.title`,
                    defaultMessage: `Creating worktree`,
                    description: `Title for the worktree init v2 page`,
                  }),
                }),
                mainWindowPath: i(t),
              }),
        (e[2] = t),
        (e[3] = y)),
    d(y),
    !t)
  ) {
    let t;
    return (
      e[4] === v
        ? (t = e[5])
        : ((t = (0, m.jsx)(c, { to: v, replace: !0 })), (e[4] = v), (e[5] = t)),
      t
    );
  }
  let b;
  return (
    e[6] === v
      ? (b = e[7])
      : ((b = (0, m.jsx)(f, { homePath: v, conversationPathBuilder: a, onConversationReady: g })),
        (e[6] = v),
        (e[7] = b)),
    b
  );
}
function g(e) {
  s.hotkeyWindowHotkeys?.open({ path: a(e) });
}
export { h as HotkeyWindowWorktreeInitPage };
//# sourceMappingURL=hotkey-window-worktree-init-page.js.map
