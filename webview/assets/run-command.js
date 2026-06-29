const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./register-app-actions.js",
      "./app-server-manager-signals.js",
      "./chunk.js",
      "./preload-helper.js",
      "./app-scope.js",
      "./isEqual.js",
      "./jsx-runtime.js",
      "./lib-1.js",
      "./tslib.es6.js",
      "./persisted-signal.js",
      "./statsig-DoZ-0xit.js",
      "./vscode-api.js",
      "./src-4.js",
      "./rpc-2.js",
      "./lib-2.js",
      "./marked.esm.js",
      "./v4.js",
      "./format-skill-title.js",
      "./platform.js",
      "./request.js",
      "./review-navigation-model.js",
      "./store-1Wh-oeLs.js",
      "./app-shell-state.js",
      "./single-value.js",
      "./route-scope.js",
      "./chunk-8.js",
      "./reduced-motion-preference.js",
      "./setting-storage.js",
      "./sumBy.js",
      "./window-app-action-helpers.js",
      "./app-shell-tab-controller.js",
      "./parse-diff.js",
      "./parsePatchFiles.js",
      "./diff-view-mode.js",
      "./project-context-signal.js",
      "./git-current-branch-query.js",
      "./thread-context.js",
      "./use-webview-execution-target.js",
      "./remote-projects.js",
      "./use-global-state.js",
      "./thread-context-inputs.js",
      "./selectable-remote-connections-signal-DJZ-ZbLr.js",
      "./hash-code.js",
      "./error-boundary.js",
      "./button.js",
      "./clsx.js",
      "./spinner.js",
      "./use-reduced-motion-1.js",
      "./with-window.js",
      "./use-platform.js",
      "./use-os-info.js",
      "./download.js",
      "./info.js",
      "./thread-page-bottom-panel-state.js",
      "./xterm-display-helpers.js",
      "./xterm-display-helpers-kHJ-D0s7.css",
      "./focus-composer.js",
      "./terminal.js",
      "./app-intl-signal.js",
      "./local-conversation-title-signals.js",
      "./check-git-index-for-changes.js",
      "./font-settings.js",
      "./use-resolved-theme-variant.js",
      "./thread-panel-state.js",
      "./browser-sidebar-manager.js",
      "./browser-sidebar-open-source.js",
      "./thread-browser-panel-tabs.js",
    ]),
) => i.map((i) => d[i]);
import { f as e } from "./vscode-api.js";
import { Ki as t, Vi as n } from "./src-4.js";
import { t as r } from "./preload-helper.js";
import { t as i } from "./window-app-action-helpers.js";
import { a } from "./open-project-setup-dialog.js";
var o = n({ type: t() }).passthrough();
async function s(e, t = {}) {
  let n = c(e),
    { appActionRegistry: i } = await r(
      async () => {
        let { appActionRegistry: e } = await import(`./register-app-actions.js`);
        return { appActionRegistry: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      ]),
      import.meta.url,
    ),
    { type: a } = n,
    o = i.get(a);
  if (o == null) throw Error(`Unsupported app action: ${a}`);
  return o(n, t);
}
function c(e) {
  try {
    return o.parse(e);
  } catch (t) {
    throw Error(
      `Invalid app action envelope: ${JSON.stringify(e, null, 2)}\n${t instanceof Error ? t.message : String(t)}`,
    );
  }
}
var l = new Map([
    [
      `newThread`,
      () => {
        s({ type: `windows.show_home`, windowId: i });
      },
    ],
    [
      `quickChat`,
      () => {
        e.dispatchHostMessage({ type: `new-quick-chat` });
      },
    ],
    [
      `archiveThread`,
      (t) => {
        e.dispatchHostMessage({ type: `archive-thread`, source: t });
      },
    ],
    [
      `toggleThreadPin`,
      () => {
        e.dispatchHostMessage({ type: `toggle-thread-pin` });
      },
    ],
    [
      `openAvatarOverlay`,
      () => {
        e.dispatchMessage(`avatar-overlay-open`, {});
      },
    ],
    [
      `settings`,
      () => {
        e.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings` });
      },
    ],
    [
      `mcpSettings`,
      () => {
        e.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/mcp-settings` });
      },
    ],
    [
      `personalitySettings`,
      () => {
        e.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/personalization` });
      },
    ],
    [
      `keyboardShortcuts`,
      () => {
        e.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/keyboard-shortcuts` });
      },
    ],
    [
      `manageTasks`,
      () => {
        e.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/automations`,
          state: { automationMode: `create` },
        });
      },
    ],
    [
      `openSkills`,
      () => {
        e.dispatchHostMessage({ type: `navigate-to-route`, path: `/skills` });
      },
    ],
    [
      `openFolder`,
      () => {
        a();
      },
    ],
    [
      `toggleSidebar`,
      () => {
        s({ type: `windows.sidebar.toggle`, windowId: i });
      },
    ],
    [
      `toggleBottomPanel`,
      () => {
        e.dispatchHostMessage({ type: `toggle-bottom-panel` });
      },
    ],
    [
      `toggleTerminal`,
      () => {
        s({ type: `windows.terminal.toggle`, windowId: i });
      },
    ],
    [
      `openBrowserTab`,
      () => {
        e.dispatchHostMessage({
          type: `open-browser-tab`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      },
    ],
    [
      `toggleBrowserPanel`,
      () => {
        e.dispatchHostMessage({
          type: `toggle-browser-panel`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      },
    ],
    [
      `toggleSidePanel`,
      () => {
        s({ type: `windows.review.toggle`, windowId: i });
      },
    ],
    [
      `toggleFileTreePanel`,
      () => {
        e.dispatchHostMessage({ type: `toggle-file-tree-panel` });
      },
    ],
    [
      `findInThread`,
      () => {
        e.dispatchHostMessage({ type: `find-in-thread` });
      },
    ],
    [
      `navigateBack`,
      () => {
        e.dispatchHostMessage({ type: `navigate-back` });
      },
    ],
    [
      `navigateForward`,
      () => {
        e.dispatchHostMessage({ type: `navigate-forward` });
      },
    ],
    [
      `logOut`,
      () => {
        e.dispatchHostMessage({ type: `log-out` });
      },
    ],
  ]),
  u = new Map();
function d(e, t, { isActive: n }) {
  let r = { handler: t, isActive: n },
    i = u.get(e) ?? [];
  return (
    i.push(r),
    u.set(e, i),
    () => {
      let t = u.get(e);
      if (!t) return;
      let n = t.lastIndexOf(r);
      n !== -1 && (t.splice(n, 1), t.length === 0 && u.delete(e));
    }
  );
}
function f(e, t) {
  h(e, void 0, t);
}
function p(e, t) {
  return h(e, t, `keyboard_shortcut`);
}
function m(e) {
  return g(e) != null;
}
function h(e, t, n) {
  let r = u.get(e);
  for (let e = (r?.length ?? 0) - 1; e >= 0; e--) {
    let n = r?.[e];
    if (n != null && n.isActive()) return n.handler(t) !== !1;
  }
  let i = g(e);
  return i == null ? !1 : (i(n), !0);
}
function g(e) {
  for (let [t, n] of l) if (t === e) return n;
}
export { s as a, p as i, d as n, f as r, m as t };
//# sourceMappingURL=run-command.js.map
