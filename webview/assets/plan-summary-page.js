import "./src-2.js";
import "./app-server-manager-signals.js";
import { t as e } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./katex-1.js";
import "./marked.esm-BR-H6018.js";
import { lt as t } from "./vscode-api.js";
import "./lib-2.js";
import { f as n } from "./chunk-12.js";
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
import "./open-workspace-file-CJcJ-CWR.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request-Dau-We3b.js";
import "./mime-types.js";
import "./remote-projects.js";
import "./proxy.js";
import "./apps.js";
import "./x.js";
import "./projectless-thread.js";
import "./platform.js";
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
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./thinking-shimmer.js";
import "./badge-Bpp-zYoJ.js";
import "./chat.js";
import "./globe.js";
import "./chevron.js";
import "./markdown-2.js";
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./plus-d3DP-DMx.js";
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
