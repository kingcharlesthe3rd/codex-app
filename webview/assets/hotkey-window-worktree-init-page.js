import { at as e, dt as t, ut as n } from "./src-C.js";
import "./app-server-manager-signals.js";
import { t as r } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import { U as i, Z as a, wt as o } from "./setting-storage.js";
import { a as s, g as c } from "./chunk-8.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./product-logger.js";
import { n as l } from "./rpc.js";
import "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks-DfDI-9lO.js";
import "./use-global-state.js";
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
import "./build-start-conversation-params.js";
import "./route-scope.js";
import "./prompt-text.js";
import "./mention-item.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info.js";
import "./use-os-info.js";
import "./open-workspace-file.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./remote-projects.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./apps.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./terminal.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./dialog-layout.js";
import "./local-projects.js";
import "./pending-worktree-store.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./open-project-setup-dialog.js";
import "./folder.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import "./_defineProperty.js";
import "./use-register-command-D7-mciT3.js";
import "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./arrow-left.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./select-project.js";
import "./use-start-new-conversation.js";
import "./minus.js";
import "./bug-B5-GWt65.js";
import "./skills.js";
import "./mcp-capability-signals.js";
import "./globe.js";
import "./set-pinned-thread.js";
import "./chevron.js";
import "./external-markdown-link.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import "./json.js";
import "./image-square.js";
import "./notebook.js";
import "./settings.cog.js";
import "./mcp.js";
import "./chrome-ZI-wJE1V.js";
import "./codex.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions-C8jF-sc9.js";
import "./workspace-file-context-menu.js";
import "./use-skills.js";
import "./copy.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./pull-request-open.js";
import "./use-is-background-subagents-enabled-B.js";
import "./sortBy.js";
import "./prompt-editor.js";
/* empty css                    */ import "./attachment-remove-button.js";
import "./mention-metadata-syncer.js";
import "./composer-top-menu-chrome.js";
import "./use-enter-behavior.js";
import "./at-mention-list.js";
import "./connected-apps.js";
import "./use-composer-controller.js";
import "./format-skill-scope.js";
import "./list-navigation.js";
import "./mcp-capability-client.js";
import "./use-workspace-file-search.js";
import "./anchored-autocomplete-overlay.js";
import "./use-autocomplete-overlay-placement.js";
import "./use-measured-text-collapse.js";
import "./thread-layout.js";
import "./hooks.js";
import { n as u } from "./hotkey-window-state.js";
import "./pending-worktree-conversation.js";
import "./user-formatted-text.js";
import { n as d } from "./use-hotkey-window-detail-layout.js";
import "./thread-scroll-layout.js";
import "./hooks-settings-copy.js";
import "./user-message-attachments.js";
import { t as f } from "./worktree-init-v2-page-1.js";
var p = o(),
  m = r();
function h() {
  let r = (0, p.c)(8),
    { pendingWorktreeId: o } = c(),
    { data: l } = a(u),
    h = l == null || l.configuredHotkey != null,
    _;
  r[0] === h ? (_ = r[1]) : ((_ = t(h)), (r[0] = h), (r[1] = _));
  let v = _,
    y;
  if (
    (r[2] === o
      ? (y = r[3])
      : ((y =
          o == null
            ? null
            : {
                title: (0, m.jsx)(`span`, {
                  className: `max-w-full truncate`,
                  children: (0, m.jsx)(i, {
                    id: `worktreeInitV2.title`,
                    defaultMessage: `Creating worktree`,
                    description: `Title for the worktree init v2 page`,
                  }),
                }),
                mainWindowPath: n(o),
              }),
        (r[2] = o),
        (r[3] = y)),
    d(y),
    !o)
  ) {
    let e;
    return (
      r[4] === v
        ? (e = r[5])
        : ((e = (0, m.jsx)(s, { to: v, replace: !0 })), (r[4] = v), (r[5] = e)),
      e
    );
  }
  let b;
  return (
    r[6] === v
      ? (b = r[7])
      : ((b = (0, m.jsx)(f, { homePath: v, conversationPathBuilder: e, onConversationReady: g })),
        (r[6] = v),
        (r[7] = b)),
    b
  );
}
function g(t) {
  l.hotkeyWindowHotkeys?.open({ path: e(t) });
}
export { h as HotkeyWindowWorktreeInitPage };
//# sourceMappingURL=hotkey-window-worktree-init-page.js.map
