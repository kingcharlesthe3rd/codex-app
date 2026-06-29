import "./src-2.js";
import "./app-server-manager-signals.js";
import { t as e } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./katex-1.js";
import "./marked.esm-BR-H6018.js";
import { P as t, lt as n } from "./vscode-api.js";
import { c as r, o as i, r as a } from "./lib-2.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive-CC-Egn92.js";
import "./notion.js";
import "./persisted-signal-CweW-bgN.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth-CI-WraL2.js";
import "./_baseEach.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./route-scope.js";
import "./mention-item-C.js";
import "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-Dm-v1Nm8.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-workspace-file-CJcJ-CWR.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request-Dau-We3b.js";
import "./mime-types.js";
import "./remote-projects.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./apps.js";
import "./x.js";
import "./projectless-thread.js";
import "./platform.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./check-circle-filled.js";
import "./local-conversation-title-signals.js";
import "./git-current-branch-query.js";
import "./terminal.js";
import "./app-intl-signal-B.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code-Dj-8G3VY.js";
import "./json-2.js";
import "./folder.js";
import "./image-square.js";
import "./notebook-Y9bM-BJu.js";
import "./settings.cog.js";
import "./skills.js";
import "./mcp.js";
import "./get-skill-icon.js";
import "./bug.js";
import "./chrome.js";
import "./codex.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions.js";
import "./workspace-file-context-menu.js";
import "./use-stable-callback.js";
import "./use-register-command.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./use-skills.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./external-markdown-link.js";
import "./initial-route-atom.js";
import "./select-project.js";
import "./use-start-new-conversation.js";
import "./plugin-prefill-prompt.js";
import "./pending-worktree-store-B7c-n7Re.js";
import "./local-conversation-background-terminals-model.js";
import { s as o, t as s } from "./home-project-recent-chats-signals.js";
import "./use-navigate-to-local-conversation.js";
import "./local-task-row-signals-n.js";
import "./sidebar-project-group-signals.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-list-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./sidebar-task-pr-chip-signals-Bs-djlnq.js";
import "./badge-Bpp-zYoJ.js";
import "./chat.js";
import "./clock.js";
import "./search-C0nm-Ej1.js";
import "./dropdown.js";
import "./globe.js";
import "./set-pinned-thread.js";
import "./thread-actions.js";
import "./archive.js";
import "./chevron.js";
import "./use-app-server-connection-state.js";
import "./format-relative-date-time.js";
import "./local-task-row.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon-Du5P-cuF.js";
import "./workspace-root-icon-B5yk-HQ7.js";
import "./warning.js";
import "./format-automation-next-run-label.js";
import "./unselected-circle-BN-IdXY-.js";
import "./pull-request-status.js";
import "./x-circle-filled.js";
import "./markdown-2.js";
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./plus-d3DP-DMx.js";
import "./image-preview-dialog.js";
import "./pull-request-readonly-comment.js";
import "./pull-request-open.js";
import "./gh-cli-status-query.js";
import "./automation-queries.js";
import "./get-attached-heartbeat-automation-for-thread.js";
import "./use-is-background-subagents-enabled.js";
import "./use-git-current-branch.js";
import "./stop.js";
import "./realtime-controller.js";
import "./local-environments.js";
import "./local-environment-selection.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./plugins-page-selectors.js";
var c = n(),
  l = e();
function u(e) {
  let n = (0, c.c)(8),
    { projectId: a } = e,
    u = r(),
    f = t(s, a);
  if (f.group == null) return null;
  let p;
  n[0] === u ? (p = n[1]) : ((p = u.formatMessage(d.recentChats)), (n[0] = u), (n[1] = p));
  let m = p,
    h;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, l.jsx)(`h2`, {
        className: `px-2.5 text-base text-token-input-placeholder-foreground opacity-75`,
        children: (0, l.jsx)(i, { ...d.recentChats }),
      })),
      (n[2] = h))
    : (h = n[2]);
  let g;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, l.jsx)(i, { ...d.noRecentChats })), (n[3] = g))
    : (g = n[3]);
  let _;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { canPin: !1, disableHoverCard: !0 }), (n[4] = _))
    : (_ = n[4]);
  let v;
  return (
    n[5] !== f.threadKeys || n[6] !== m
      ? ((v = (0, l.jsxs)(`section`, {
          className: `z-0 flex h-fit min-w-0 flex-col gap-2 pt-6 pb-6`,
          children: [
            h,
            (0, l.jsx)(o, {
              threadKeys: f.threadKeys,
              ariaLabel: m,
              itemClassName: `after:block after:h-px after:content-[''] last:after:hidden`,
              emptyState: g,
              emptyStateClassName: `p-2 text-base text-token-description-foreground opacity-50`,
              rowOptions: _,
            }),
          ],
        })),
        (n[5] = f.threadKeys),
        (n[6] = m),
        (n[7] = v))
      : (v = n[7]),
    v
  );
}
var d = a({
  recentChats: {
    id: `home.projectPage.recentChats`,
    defaultMessage: `Recent chats`,
    description: `Section label above recent chats on a project page`,
  },
  noRecentChats: {
    id: `home.projectPage.noRecentChats`,
    defaultMessage: `No recent chats`,
    description: `Empty state for recent chats on a project page`,
  },
});
export { u as HomeProjectRecentChats };
//# sourceMappingURL=home-project-recent-chats.js.map
