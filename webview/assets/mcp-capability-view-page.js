import "./src-C.js";
import "./app-server-manager-signals.js";
import { t as e } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm-BR-H6018.js";
import { U as t, Z as n, wt as r } from "./setting-storage.js";
import { g as i } from "./chunk-8.js";
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
import "./route-scope.js";
import "./prompt-text.js";
import "./use-environment.js";
import "./composer-view-state.js";
import "./mention-item.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./os-info.js";
import "./use-os-info.js";
import "./remote-projects.js";
import "./permissions-mode-defaults.js";
import "./proxy.js";
import "./app-shell-state.js";
import "./app-shell.js";
import "./apps.js";
import "./chats.js";
import "./x.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./browser-sidebar-availability.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./thread-panel-state-fkSg-C_s.js";
import "./window-app-action-helpers.js";
import "./dialog-layout.js";
import "./build-worktree-label-from-input.js";
import "./local-projects.js";
import "./pending-worktree-store.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./open-project-setup-dialog.js";
import "./folder.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import "./local-task-row-signals.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups-Bs-6klyU.js";
import "./_defineProperty.js";
import "./use-register-command-D7-mciT3.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./command-keybindings.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./checkbox.js";
import "./minus.js";
import "./search.js";
import { s as a } from "./mcp-capability-signals.js";
import "./dropdown.js";
import "./chevron.js";
import "./macbook.js";
import "./worktree.js";
import "./sortBy.js";
import "./use-connected-remote-connections.js";
import { t as o } from "./mcp-capability-view-frame.js";
import "./mcp-capability-client.js";
import { t as s } from "./large-empty-state-C2F-IvSK.js";
import "./project-dropdown-options.js";
import "./alert-1.js";
import "./mcp-tool-item-content-utils.js";
var c = r(),
  l = e();
function u() {
  let e = (0, c.c)(8),
    { pluginId: t, server: r, toolName: s } = i(),
    u = n(a),
    f;
  e[0] !== t || e[1] !== r || e[2] !== s || e[3] !== u
    ? ((f =
        t == null || r == null || s == null
          ? null
          : (u.find((e) => e.pluginId === t && e.server === r && e.tool.name === s) ?? null)),
      (e[0] = t),
      (e[1] = r),
      (e[2] = s),
      (e[3] = u),
      (e[4] = f))
    : (f = e[4]);
  let p = f;
  if (p == null) {
    let t;
    return (
      e[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, l.jsx)(d, {})), (e[5] = t))
        : (t = e[5]),
      t
    );
  }
  let m;
  return (e[6] === p ? (m = e[7]) : ((m = (0, l.jsx)(o, { view: p })), (e[6] = p), (e[7] = m)), m);
}
function d() {
  let e = (0, c.c)(1),
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, l.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center`,
          children: (0, l.jsx)(s, {
            title: (0, l.jsx)(t, {
              id: `openaiMcpCapabilities.view.notFound`,
              defaultMessage: `Plugin view not found`,
              description: `Title shown when a plugin capability view route does not match an installed plugin`,
            }),
          }),
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
export { u as McpCapabilityViewPage };
//# sourceMappingURL=mcp-capability-view-page.js.map
