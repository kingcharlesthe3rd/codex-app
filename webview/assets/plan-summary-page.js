import { t as e } from "./jsx-runtime.js";
import { Z as t } from "./app-scope-CWE-zIhQ.js";
import "./use-host-config.js";
import "./thread-context-inputs.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src.js";
import "./react-dom.js";
import "./lib-1.js";
import "./proxy.js";
import "./button-oF-qgtAS.js";
import "./setting-storage.js";
import "./reduced-motion-preference-BFM-v_UB.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./tooltip-B.js";
import "./context-menu.js";
import "./toast-signal.js";
import "./x.js";
import "./badge.js";
import "./plus.js";
import "./rpc.js";
import "./statsig.js";
import "./request.js";
import "./codex-api-error.js";
import "./chevron.js";
import "./markdown-to-search-text.js";
import "./katex-1.js";
import "./marked.esm.js";
import "./product-logger.js";
import { f as n } from "./chunk-13.js";
import "./parse-directives.js";
import "./platform.js";
import "./persisted-signal.js";
import "./app-server-manager-hooks-D4-J16ZL.js";
import "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./use-global-state.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./remote-projects.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./prompt-text.js";
import "./use-environment.js";
import "./composer-view-state.js";
import "./mention-item.js";
import "./apps.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled-Dn_J-WZf.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./uniq.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./info.js";
import "./check-circle-filled.js";
import "./arrow-left.js";
import "./file.js";
import "./git-availability-query.js";
import "./terminal.js";
import "./error-boundary.js";
import "./app-identity.js";
import "./download.js";
import "./with-window.js";
import "./sidebar-thread-keys.js";
import "./plugin-detail-route-utils.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import "./folder.js";
import "./json-2.js";
import "./notebook.js";
import "./settings.cog.js";
import "./skills.js";
import "./mention-icons.js";
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
import "./command-menu-state.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-register-command-T-86rz-c.js";
import "./use-skills.js";
import "./inline-mention-content-CTO-ayBF.js";
import "./external-link.js";
import "./initial-route-atom.js";
import "./sites-color.js";
import "./plugin-config-edits.js";
import "./plugins-availability.js";
import "./plugin-detail-queries.js";
import "./use-navigate-to-local-conversation.js";
import "./checkbox.js";
import "./minus.js";
import "./thinking-shimmer.js";
import "./chat.js";
import "./dropdown.js";
import "./globe.js";
import "./copy-button.js";
import "./markdown-2.js";
import "./toggle.js";
import "./arrow-top-right.js";
import "./connected-apps.js";
import "./app-connect-oauth.js";
import "./hooks-settings-queries.js";
import "./use-app-connect-flow.js";
import "./compound-button.js";
import "./image-preview-dialog.js";
import "./codex-analytics-attribution.js";
import "./external-link-favicon.js";
import "./external-markdown-link.js";
import "./code-snippet.js";
import "./copy.js";
import "./mermaid-diagram-shell-BO-t9BGx.js";
import "./markdown-surface.js";
import "./feedback-form-dialog-U7w-wHRu.js";
import { t as r } from "./plan-summary-item-content.js";
var i = t(),
  a = e();
function o() {
  let e = (0, i.c)(4),
    t = n().state;
  if (!t?.planContent || !t?.conversationId) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, a.jsx)(c, {})), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let r;
  return (
    e[1] !== t.conversationId || e[2] !== t.planContent
      ? ((r = (0, a.jsx)(s, { planContent: t.planContent, conversationId: t.conversationId })),
        (e[1] = t.conversationId),
        (e[2] = t.planContent),
        (e[3] = r))
      : (r = e[3]),
    r
  );
}
function s(e) {
  let t = (0, i.c)(5),
    { planContent: n, conversationId: o } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = {
        type: `assistant-message`,
        content: n,
        sentAtMs: null,
        completed: !0,
        phase: null,
        structuredOutput: void 0,
      }),
      (t[0] = n),
      (t[1] = s));
  let c;
  return (
    t[2] !== o || t[3] !== s
      ? ((c = (0, a.jsx)(`div`, {
          className: `overflow-y-auto p-[var(--padding-panel)]`,
          children: (0, a.jsx)(r, { item: s, conversationId: o, cwd: null, showOpenButton: !1 }),
        })),
        (t[2] = o),
        (t[3] = s),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function c() {
  let e = (0, i.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, a.jsxs)(`div`, {
        className: `flex items-center gap-3 border-b border-token-border/60 px-4 py-3`,
        children: [
          (0, a.jsx)(`div`, { className: `size-8 rounded-lg bg-token-foreground/10` }),
          (0, a.jsx)(`div`, { className: `h-4 w-24 rounded bg-token-foreground/20` }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, a.jsx)(`div`, {
          className: `p-[var(--padding-panel)]`,
          children: (0, a.jsxs)(`div`, {
            className: `animate-pulse overflow-hidden rounded-2xl border border-token-border bg-token-editor-background/50`,
            children: [
              t,
              (0, a.jsxs)(`div`, {
                className: `space-y-3 px-4 py-4`,
                children: [
                  (0, a.jsx)(`div`, { className: `h-3 w-5/6 rounded bg-token-foreground/10` }),
                  (0, a.jsx)(`div`, { className: `h-3 w-4/6 rounded bg-token-foreground/10` }),
                  (0, a.jsx)(`div`, { className: `h-3 w-3/6 rounded bg-token-foreground/10` }),
                ],
              }),
            ],
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
export { o as PlanSummaryPage };
//# sourceMappingURL=plan-summary-page.js.map
