import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, a as i, o as a, t as o } from "./app-scope-CWE-zIhQ.js";
import { r as s } from "./use-host-config.js";
import { dn as c } from "./thread-context-inputs.js";
import { v as l } from "./vscode-api.js";
import { n as u } from "./react.js";
import "./isEqual.js";
import "./src.js";
import "./react-dom.js";
import "./lib-1.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as d } from "./app-shell-0b-x_r3Z.js";
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
import "./regenerate.js";
import "./x.js";
import "./badge.js";
import "./rpc.js";
import "./statsig.js";
import "./request.js";
import "./codex-api-error.js";
import "./chevron.js";
import "./markdown-to-search-text.js";
import "./core.esm.js";
import "./marked.esm.js";
import "./product-logger.js";
import { m as f } from "./chunk-13.js";
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
import "./remote-projects.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./mention-item.js";
import "./use-permissions-mode.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
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
import "./chats.js";
import "./info.js";
import "./check-circle-filled.js";
import "./arrow-left.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller.js";
import "./git-availability-query.js";
import "./app-intl-signal.js";
import "./error-boundary.js";
import "./app-identity.js";
import "./download.js";
import "./with-window.js";
import "./sidebar-thread-keys.js";
import "./use-window-controls-safe-area.js";
import "./folder.js";
import "./settings.cog.js";
import "./chrome.js";
import "./openai-blossom.js";
import "./filesystem-media-src.js";
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
import "./initial-route-atom.js";
import "./use-start-new-conversation.js";
import "./plugin-config-edits.js";
import "./plugin-prefill-prompt.js";
import "./plugins-availability.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./upgrade-plan-dialog-launcher.js";
import "./electron-menu-shortcuts.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-row-signals-ZqNv-_WT.js";
import "./command-keybindings.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./collapse.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./app-shell-ref.js";
import "./links.js";
import "./use-codex-pricing-url.js";
import "./plan-management-state.js";
import "./check-circle.js";
import { i as p } from "./codex-mobile-setup-queries.js";
import "./dropdown.js";
import "./use-plugin-install-flow.js";
import "./globe.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./copy-button.js";
import "./progression-donut-BTBWT-Q8.js";
import "./toggle.js";
import "./lock.js";
import "./arrow-top-right.js";
import "./connected-apps.js";
import "./app-connect-oauth.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries.js";
import "./alert-1.js";
import "./copy.js";
import "./thread-page-header.js";
import "./sun.js";
import "./local-remote-control-enabled-sync.js";
import "./chatgpt-token-auth.browser.js";
import "./segmented-toggle.js";
import { n as m, o as h } from "./codex-mobile-setup-dialog.js";
import { n as g, r as _, t as v } from "./codex-mobile-setup-flow.js";
import "./use-home-directory.js";
import "./cursor-CY-4WWCc.js";
var y = r(),
  b = e(t(), 1),
  x = n();
function S() {
  let e = (0, y.c)(8),
    t = a(o),
    n = i(c, s),
    [r] = u(h),
    d;
  e[0] === t ? (d = e[1]) : ((d = p(t)), (e[0] = t), (e[1] = d));
  let { data: f, isError: m, isFetching: g, isPending: _ } = l(d);
  if (_ || n == null) return null;
  let v;
  return (
    e[2] !== m || e[3] !== g || e[4] !== f || e[5] !== n.status || e[6] !== r
      ? ((v = (0, x.jsx)(C, {
          isMfaSetupRequiredError: m,
          isMfaSetupRequiredFetching: g,
          mfaSetupRequired: f,
          remoteControlStatus: n.status,
          setupStepDebugOverride: r,
        })),
        (e[2] = m),
        (e[3] = g),
        (e[4] = f),
        (e[5] = n.status),
        (e[6] = r),
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
