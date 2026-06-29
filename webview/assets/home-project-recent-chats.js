import { kr as e } from "./src-C.js";
import { Pi as t } from "./app-server-manager-signals.js";
import { t as n } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./katex-1.js";
import "./marked.esm-BR-H6018.js";
import {
  G as r,
  Q as i,
  S as a,
  U as o,
  V as s,
  Y as c,
  et as l,
  wt as u,
} from "./setting-storage.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./product-logger.js";
import "./rpc.js";
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
import "./_baseEach.js";
import "./apps-queries.js";
import "./startCase-Bo0-xpFk.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./route-scope.js";
import "./mention-item.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info.js";
import "./use-os-info.js";
import "./link-external.js";
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
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./check-circle-filled.js";
import "./local-conversation-title-signals.js";
import "./git-current-branch-query.js";
import "./terminal.js";
import "./app-intl-signal.js";
import "./info.js";
import "./error-boundary.js";
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
import "./local-conversation-background-terminals-model.js";
import { t as d } from "./sidebar-thread-section-Be-PJHWS.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import "./use-navigate-to-local-conversation.js";
import "./local-task-row-signals.js";
import { l as f, v as p } from "./sidebar-project-group-signals.js";
import "./pinned-threads-query.js";
import { n as m } from "./sidebar-thread-list-signals.js";
import "./sidebar-project-groups-Bs-6klyU.js";
import "./_defineProperty.js";
import "./use-register-command-D7-mciT3.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./arrow-left.js";
import "./select-project.js";
import "./use-start-new-conversation.js";
import "./minus.js";
import "./sidebar-task-pr-chip-signals-B3uZ-qH9.js";
import "./badge.js";
import "./bug-B5-GWt65.js";
import "./chat.js";
import "./clock.js";
import "./search.js";
import "./skills.js";
import "./dropdown.js";
import "./globe.js";
import "./set-pinned-thread.js";
import "./thread-actions.js";
import "./archive.js";
import "./chevron.js";
import "./use-app-server-connection-state-B13v-ij1.js";
import "./use-relative-now.js";
import "./format-relative-date-time.js";
import "./local-task-row.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./workspace-root-icon.js";
import "./warning.js";
import "./format-automation-next-run-label.js";
import "./pull-request-status.js";
import "./markdown-1.js";
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
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./pull-request-readonly-comment.js";
import "./pull-request-open.js";
import "./gh-cli-status-query.js";
import "./automation-queries.js";
import "./get-attached-heartbeat-automation-for-thread.js";
import "./use-is-background-subagents-enabled-B.js";
import "./use-git-current-branch.js";
import "./stop.js";
import "./realtime-controller.js";
import "./local-environments.js";
import "./local-environment-selection.js";
import "./fork-conversation-actions.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./plugin-prefill-prompt.js";
import "./plugins-page-selectors.js";
var h = u(),
  g = { currentConversationId: null },
  _ = l(a, (n) => {
    let r = { group: null };
    return i(a, ({ get: i }) => {
      let { allSidebarThreadKeys: a } = i(i(m, g)),
        { groups: o } = i(f, {
          threadKeys: a,
          enabled: !0,
          threadProjectAssignments: t(i, e.THREAD_PROJECT_ASSIGNMENTS),
          projectlessThreadIds: t(i, e.PROJECTLESS_THREAD_IDS),
        }),
        s = o.find((e) => e.projectId === n) ?? null;
      if (s == null) return (r.group != null && (r = { group: null }), r);
      let c = s.threadKeys
          .flatMap((e, t) => {
            let n = i(p, e);
            return n == null ? [] : [{ at: y(n), index: t, threadKey: e }];
          })
          .sort((e, t) => t.at - e.at || e.index - t.index)
          .map((e) => e.threadKey),
        l = r.group == null ? c : v(r.threadKeys, c);
      return ((r.group === s && r.threadKeys === l) || (r = { group: s, threadKeys: l }), r);
    });
  });
function v(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return t;
  return e;
}
function y(e) {
  switch (e.kind) {
    case `local`:
      return e.conversation.updatedAt ?? e.conversation.createdAt ?? 0;
    case `remote`:
      return (e.task.updated_at ?? e.task.created_at ?? 0) * 1e3;
    case `pending-worktree`:
      return e.pendingWorktree.createdAt;
  }
}
var b = n();
function x(e) {
  let t = (0, h.c)(11),
    { projectId: n } = e,
    i = r(),
    a = c(_, n);
  if (a.group == null) return null;
  let s;
  t[0] === i ? (s = t[1]) : ((s = i.formatMessage(S.recentChats)), (t[0] = i), (t[1] = s));
  let l = s,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, b.jsx)(`h2`, {
        className: `px-2.5 text-base text-token-input-placeholder-foreground opacity-75`,
        children: (0, b.jsx)(o, { ...S.recentChats }),
      })),
      (t[2] = u))
    : (u = t[2]);
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, b.jsx)(o, { ...S.noRecentChats })), (t[3] = f))
    : (f = t[3]);
  let p = a.group.projectKind === `remote` ? (a.group.hostId ?? null) : null,
    m;
  t[4] !== a.group.projectId || t[5] !== p
    ? ((m = {
        disableHoverCard: !0,
        projectRouteContext: { hostId: p, projectId: a.group.projectId },
        showPinActionOnHover: !0,
      }),
      (t[4] = a.group.projectId),
      (t[5] = p),
      (t[6] = m))
    : (m = t[6]);
  let g;
  return (
    t[7] !== a.threadKeys || t[8] !== l || t[9] !== m
      ? ((g = (0, b.jsxs)(`section`, {
          className: `z-0 flex h-fit min-w-0 flex-col gap-2 pt-6 pb-6`,
          children: [
            u,
            (0, b.jsx)(d, {
              threadKeys: a.threadKeys,
              ariaLabel: l,
              itemClassName: `after:block after:h-px after:content-[''] last:after:hidden`,
              emptyState: f,
              emptyStateClassName: `p-2 text-base text-token-description-foreground opacity-50`,
              rowOptions: m,
            }),
          ],
        })),
        (t[7] = a.threadKeys),
        (t[8] = l),
        (t[9] = m),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
var S = s({
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
export { x as HomeProjectRecentChats };
//# sourceMappingURL=home-project-recent-chats.js.map
