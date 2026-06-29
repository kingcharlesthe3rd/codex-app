import { t as e } from "./jsx-runtime.js";
import { R as t, s as n } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-1.js";
import "./react-dom.js";
import { o as r } from "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import "./app-shell-state.js";
import "./app-shell.js";
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
import "./rpc-1.js";
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
import "./use-os-info.js";
import { i } from "./mcp-capability-signals.js";
import "./toast-signal.js";
import "./remote-projects.js";
import "./chevron.js";
import "./core.esm.js";
import { g as a } from "./chunk-109.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./_baseEach-BPh-9Ri0.js";
import "./_baseOrderBy-Cz-sT1AW.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./route-scope.js";
import "./prompt-text.js";
import "./use-environment.js";
import "./composer-view-state.js";
import "./mention-item-B.js";
import "./permissions-mode-defaults.js";
import "./apps.js";
import "./chats.js";
import "./info.js";
import "./x.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./browser-sidebar-availability.js";
import "./app-shell-tab-controller.js";
import "./browser-sidebar-manager.js";
import "./focus-composer.js";
import "./thread-panel-state.js";
import "./app-intl-signal-D.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./use-window-controls-safe-area.js";
import "./folder.js";
import "./use-register-command.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./build-worktree-label-from-input.js";
import "./read-service-tier-for-request.js";
import "./pending-worktree-store.js";
import "./electron-menu-shortcuts.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-row-signals.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./command-keybindings.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./arrow-left.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./app-shell-ref.js";
import "./checkbox.js";
import "./minus.js";
import "./search.js";
import "./dropdown.js";
import "./macbook.js";
import "./worktree.js";
import "./sortBy.js";
import "./use-connected-remote-connections.js";
import { t as o } from "./mcp-capability-view-frame.js";
import "./project-dropdown-options.js";
import "./mcp-capability-client.js";
import { t as s } from "./large-empty-state.js";
import "./alert-1.js";
import "./mcp-tool-item-content-utils.js";
var c = t(),
  l = e();
function u() {
  let e = (0, c.c)(7),
    { server: t, toolName: r } = a(),
    s = n(i),
    u;
  e[0] !== t || e[1] !== r || e[2] !== s
    ? ((u =
        t == null || r == null
          ? null
          : (s.find((e) => e.server === t && e.tool.name === r) ?? null)),
      (e[0] = t),
      (e[1] = r),
      (e[2] = s),
      (e[3] = u))
    : (u = e[3]);
  let f = u;
  if (f == null) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, l.jsx)(d, {})), (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let p;
  return (e[5] === f ? (p = e[6]) : ((p = (0, l.jsx)(o, { view: f })), (e[5] = f), (e[6] = p)), p);
}
function d() {
  let e = (0, c.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, l.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center`,
          children: (0, l.jsx)(s, {
            title: (0, l.jsx)(r, {
              id: `openaiMcpCapabilities.view.notFound`,
              defaultMessage: `MCP app view not found`,
              description: `Title shown when an MCP app view route does not match an available server tool`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { u as McpCapabilityViewPage };
//# sourceMappingURL=mcp-capability-view-page.js.map
