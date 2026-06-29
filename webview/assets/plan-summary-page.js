import { t as e } from "./jsx-runtime.js";
import { R as t } from "./app-scope.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-4.js";
import "./app-server-manager-signals.js";
import "./react-dom.js";
import "./lib-1.js";
import "./persisted-signal.js";
import "./proxy.js";
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
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./toast-signal.js";
import "./remote-projects.js";
import "./katex-2.js";
import { f as n } from "./chunk-8.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./_baseEach.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./route-scope.js";
import "./mention-item.js";
import "./apps.js";
import "./x.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./terminal.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import "./json-1.js";
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
import "./codex.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions.js";
import "./workspace-file-context-menu.js";
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
import "./inline-mention-content.js";
import "./external-markdown-link-B.js";
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./thinking-shimmer.js";
import "./badge.js";
import "./chat.js";
import "./globe.js";
import "./chevron.js";
import "./markdown.js";
import "./external-link-favicon.js";
import "./code-snippet-Bu-o-Ykd.js";
import "./copy-D.js";
import "./copy-button.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./arrow-top-right.js";
import "./markdown-surface.js";
import "./feedback-form-dialog.js";
import { t as r } from "./plan-summary-item-content-Ga-g5w1x.js";
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
