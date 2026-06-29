import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { a as r, o as i, t as a, z as o } from "./app-scope.js";
import { Pn as s, zs as c } from "./app-server-manager-signals.js";
import { v as l } from "./vscode-api.js";
import { n as u } from "./react.js";
import "./isEqual.js";
import "./src-2.js";
import "./react-dom.js";
import "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as d } from "./app-shell.js";
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
import "./regenerate.js";
import "./x.js";
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
import "./dropdown.js";
import "./search.js";
import "./app-intl-signal.js";
import "./modal-controller-state.js";
import "./dialog-layout-B.js";
import "./with-window.js";
import "./badge-C.js";
import "./folder.js";
import "./use-debounced-value-Dw-7BPJJ.js";
import "./toggle.js";
import "./experimental-features-queries.js";
import "./use-in-app-browser-use-availability.js";
import "./check-plugin-availability.js";
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
import "./plugin-detail-queries.js";
import "./mention-item.js";
import "./chrome.js";
import "./notion.js";
import "./openai-blossom.js";
import "./filesystem-media-src.js";
import "./apps-2.js";
import "./remote-projects.js";
import "./codex-api-error.js";
import "./chevron.js";
import "./core.esm.js";
import { m as f } from "./chunk-9.js";
import "./known-app-icon.js";
import "./branch-D.js";
import "./github-mark.js";
import "./google-drive.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./route-scope.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./chats.js";
import "./info-1.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./check-circle-filled.js";
import "./app-shell-tab-controller.js";
import "./browser-sidebar-manager.js";
import "./error-boundary.js";
import "./download.js";
import "./use-window-controls-safe-area.js";
import "./settings.cog.js";
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
import "./initial-route-atom.js";
import "./use-start-new-conversation.js";
import "./plugin-config-edits.js";
import "./plugin-prefill-prompt.js";
import "./bundled-plugin-auto-install-preference.js";
import "./upgrade-plan-dialog-launcher.js";
import "./electron-menu-shortcuts.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-row-signals.js";
import "./command-keybindings.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./arrow-left.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./app-shell-ref.js";
import "./links-p.js";
import "./use-codex-pricing-url.js";
import "./plan-management-state.js";
import "./check-circle.js";
import { i as p } from "./codex-mobile-setup-queries.js";
import "./use-plugin-install-flow.js";
import "./globe.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./copy.js";
import "./copy-button.js";
import "./lock.js";
import "./arrow-top-right.js";
import "./connected-apps.js";
import "./app-connect-oauth.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries.js";
import "./thread-page-header.js";
import "./plugins-availability-4A-24D7s.js";
import "./sun.js";
import "./local-remote-control-enabled-sync.js";
import "./chatgpt-token-auth.browser.js";
import { n as m, o as h } from "./codex-mobile-setup-dialog.js";
import { n as g, r as _, t as v } from "./codex-mobile-setup-flow.js";
import "./use-home-directory.js";
import "./cursor-vD-PzwIj.js";
import "./segmented-toggle.js";
var y = o(),
  b = e(t(), 1),
  x = n();
function S() {
  let e = (0, y.c)(8),
    t = i(a),
    n = r(s, c),
    [o] = u(h),
    d;
  e[0] === t ? (d = e[1]) : ((d = p(t)), (e[0] = t), (e[1] = d));
  let { data: f, isError: m, isFetching: g, isPending: _ } = l(d);
  if (_ || n == null) return null;
  let v;
  return (
    e[2] !== m || e[3] !== g || e[4] !== f || e[5] !== n.status || e[6] !== o
      ? ((v = (0, x.jsx)(C, {
          isMfaSetupRequiredError: m,
          isMfaSetupRequiredFetching: g,
          mfaSetupRequired: f,
          remoteControlStatus: n.status,
          setupStepDebugOverride: o,
        })),
        (e[2] = m),
        (e[3] = g),
        (e[4] = f),
        (e[5] = n.status),
        (e[6] = o),
        (e[7] = v))
      : (v = e[7]),
    v
  );
}
function C(e) {
  let t = (0, y.c)(13),
    {
      isMfaSetupRequiredError: n,
      isMfaSetupRequiredFetching: r,
      mfaSetupRequired: i,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    } = e,
    s = f(),
    [c] = (0, b.useState)(a);
  if (r) return null;
  if (
    _({
      isMfaSetupRequiredError: n,
      mfaSetupRequired: i,
      initialRemoteControlStatus: c,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    })
  ) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, x.jsx)(d.MainContentLayout, { layout: `full-bleed` })), (t[0] = e))
      : (e = t[0]);
    let r;
    t[1] !== n || t[2] !== i || t[3] !== a
      ? ((r = g({ isMfaSetupRequiredError: n, mfaSetupRequired: i, remoteControlStatus: a })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a),
        (t[4] = r))
      : (r = t[4]);
    let o;
    t[5] === s
      ? (o = t[6])
      : ((o = () => {
          s(`/`);
        }),
        (t[5] = s),
        (t[6] = o));
    let c;
    return (
      t[7] !== r || t[8] !== o
        ? ((c = (0, x.jsxs)(x.Fragment, {
            children: [e, (0, x.jsx)(v, { initialStep: r, onClose: o, variant: `page` })],
          })),
          (t[7] = r),
          (t[8] = o),
          (t[9] = c))
        : (c = t[9]),
      c
    );
  }
  let l;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, x.jsx)(d.MainContentLayout, { layout: `full-bleed` })), (t[10] = l))
    : (l = t[10]);
  let u;
  return (
    t[11] === s
      ? (u = t[12])
      : ((u = (0, x.jsxs)(x.Fragment, {
          children: [
            l,
            (0, x.jsx)(m, {
              onManageConnections: () => {
                s(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[11] = s),
        (t[12] = u)),
    u
  );
}
export { S as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
