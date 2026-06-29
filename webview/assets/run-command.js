const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./register-app-actions.js",
      "./app-server-manager-signals.js",
      "./chunk-Bj-mKKzh.js",
      "./preload-helper.js",
      "./vscode-api.js",
      "./src-2.js",
      "./jsx-runtime.js",
      "./lib-2.js",
      "./tslib.es6.js",
      "./statsig.js",
      "./rpc-1.js",
      "./lib-1.js",
      "./marked.esm-BR-H6018.js",
      "./v4.js",
      "./persisted-signal-CweW-bgN.js",
      "./request.js",
      "./error-boundary.js",
      "./chunk-12.js",
      "./button.js",
      "./clsx.js",
      "./spinner.js",
      "./reduced-motion-preference.js",
      "./setting-storage.js",
      "./with-window.js",
      "./use-platform.js",
      "./use-os-info.js",
      "./os-info-Dm-v1Nm8.js",
      "./platform.js",
      "./download.js",
      "./info.js",
      "./thread-page-bottom-panel-state.js",
      "./xterm-display-helpers.js",
      "./xterm-display-helpers-kHJ-D0s7.css",
      "./app-shell-state.js",
      "./single-value.js",
      "./route-scope.js",
      "./app-shell-tab-controller.js",
      "./focus-composer.js",
      "./diff-view-mode.js",
      "./terminal.js",
      "./app-intl-signal-B.js",
      "./local-conversation-title-signals.js",
      "./check-git-index-for-changes.js",
      "./thread-context.js",
      "./use-webview-execution-target.js",
      "./remote-projects.js",
      "./use-global-state.js",
      "./thread-context-inputs.js",
      "./selectable-remote-connections-signal.js",
      "./font-settings.js",
      "./use-resolved-theme-variant.js",
      "./thread-panel-state.js",
      "./sumBy-BCSe-07a.js",
      "./window-app-action-helpers.js",
      "./browser-sidebar-manager.js",
      "./browser-sidebar-open-source.js",
      "./review-navigation-model.js",
      "./parse-diff.js",
      "./parsePatchFiles-Dx-HvB-f.js",
      "./project-context-signal.js",
      "./git-current-branch-query.js",
      "./hash-code.js",
    ]),
) => i.map((i) => d[i]);
import { na as e, sa as t } from "./src-2.js";
import { t as n } from "./preload-helper.js";
import { f as r } from "./vscode-api.js";
import { t as i } from "./window-app-action-helpers.js";
import { i as a } from "./open-project-setup-dialog.js";
var o = e({ type: t() }).passthrough();
async function s(e, t = {}) {
  let r = c(e),
    { appActionRegistry: i } = await n(
      async () => {
        let { appActionRegistry: e } = await import(`./register-app-actions.js`);
        return { appActionRegistry: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
      ]),
      import.meta.url,
    ),
    { type: a } = r,
    o = i.get(a);
  if (o == null) throw Error(`Unsupported app action: ${a}`);
  return o(r, t);
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
        r.dispatchHostMessage({ type: `new-quick-chat` });
      },
    ],
    [
      `archiveThread`,
      (e) => {
        r.dispatchHostMessage({ type: `archive-thread`, source: e });
      },
    ],
    [
      `toggleThreadPin`,
      () => {
        r.dispatchHostMessage({ type: `toggle-thread-pin` });
      },
    ],
    [
      `openAvatarOverlay`,
      () => {
        r.dispatchMessage(`avatar-overlay-open`, {});
      },
    ],
    [
      `settings`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings` });
      },
    ],
    [
      `mcpSettings`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/mcp-settings` });
      },
    ],
    [
      `personalitySettings`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/personalization` });
      },
    ],
    [
      `keyboardShortcuts`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/keyboard-shortcuts` });
      },
    ],
    [
      `manageTasks`,
      () => {
        r.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/automations`,
          state: { automationMode: `create` },
        });
      },
    ],
    [
      `openSkills`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/skills` });
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
        r.dispatchHostMessage({ type: `toggle-bottom-panel` });
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
        r.dispatchHostMessage({
          type: `open-browser-tab`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      },
    ],
    [
      `toggleBrowserPanel`,
      () => {
        r.dispatchHostMessage({
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
        r.dispatchHostMessage({ type: `toggle-file-tree-panel` });
      },
    ],
    [
      `findInThread`,
      () => {
        r.dispatchHostMessage({ type: `find-in-thread` });
      },
    ],
    [
      `navigateBack`,
      () => {
        r.dispatchHostMessage({ type: `navigate-back` });
      },
    ],
    [
      `navigateForward`,
      () => {
        r.dispatchHostMessage({ type: `navigate-forward` });
      },
    ],
    [
      `logOut`,
      () => {
        r.dispatchHostMessage({ type: `log-out` });
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
