import { t as e } from "./jsx-runtime.js";
import { z as t } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-2.js";
import "./react-dom.js";
import "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-2.js";
import "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./tooltip.js";
import "./context-menu.js";
import "./toast-signal.js";
import "./x.js";
import "./mime-types.js";
import "./product-logger.js";
import "./format-skill-title.js";
import "./rpc-2.js";
import "./statsig.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./modal-controller-state.js";
import "./dialog-layout-B.js";
import "./with-window.js";
import "./badge-C.js";
import "./file.js";
import "./folder.js";
import "./experimental-features-queries.js";
import "./use-in-app-browser-use-availability.js";
import "./image-square.js";
import "./plus.js";
import "./app-server-manager-hooks.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./use-platform.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./startCase.js";
import "./mention-item.js";
import "./mcp.js";
import "./get-skill-icon.js";
import "./bug.js";
import "./chrome.js";
import "./codex-Dw-qSlib.js";
import "./notion.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./plugin-mention-utils.js";
import "./apps-2.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./remote-projects.js";
import "./chevron.js";
import "./katex-3.js";
import { f as n } from "./chunk-9.js";
import "./known-app-icon.js";
import "./branch-D.js";
import "./github-mark.js";
import "./google-drive.js";
import "./_baseEach.js";
import "./use-is-dark.js";
import "./route-scope.js";
import "./info-1.js";
import "./projectless-thread.js";
import "./terminal.js";
import "./error-boundary.js";
import "./download.js";
import "./plugin-detail-route-utils.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code-CBI-Jt6Z.js";
import "./json.js";
import "./notebook.js";
import "./settings.cog.js";
import "./skills.js";
import "./mention-icons.js";
import "./inline-mentions.js";
import "./workspace-file-context-menu.js";
import "./command-menu-state.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-register-command.js";
import "./use-skills.js";
import "./inline-mention-content.js";
import "./external-link.js";
import "./sites-color.js";
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./thinking-shimmer.js";
import "./chat.js";
import "./globe.js";
import "./markdown-1.js";
import "./external-link-favicon.js";
import "./external-markdown-link.js";
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./image-preview-dialog.js";
import "./arrow-top-right.js";
import "./markdown-surface.js";
import "./feedback-form-dialog.js";
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
