import { t as e } from "./jsx-runtime.js";
import { R as t, o as n, s as r } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import { mn as i } from "./src-1.js";
import "./react-dom.js";
import { c as a, o } from "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import { t as s } from "./button-DO-oxX3-.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import { t as c } from "./tooltip.js";
import "./context-menu-Cx-ZCB4Y.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./platform-BrML-86Y.js";
import "./marked.esm.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import { t as ee } from "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./toast-signal.js";
import "./remote-projects.js";
import "./arrow-up.js";
import "./chevron.js";
import "./shiki-highlight-provider-gate.js";
import "./katex-1.js";
import "./pdf-1.js";
import { f as l } from "./chunk-109.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./_baseEach-BPh-9Ri0.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import { t as te } from "./route-scope.js";
import "./prompt-text.js";
import "./mention-item-B.js";
import "./apps.js";
import "./info.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import { i as u, t as d } from "./diff-view-mode.js";
import { t as f } from "./parse-diff.js";
import "./file-diff.js";
import "./sumBy.js";
import "./focus-composer.js";
import "./terminal-C.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./plugin-detail-route-utils.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import { t as ne } from "./json.js";
import "./folder.js";
import { t as p } from "./image-square.js";
import "./notebook.js";
import "./settings.cog.js";
import "./skills.js";
import "./mention-icons.js";
import "./mcp.js";
import "./get-skill-icon.js";
import "./bug.js";
import "./chrome.js";
import "./codex-Cx4-XOqq.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions.js";
import "./workspace-file-context-menu.js";
import "./use-register-command.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-skills-J.js";
import "./inline-mention-content.js";
import "./external-markdown-link.js";
import "./use-resize-observer.js";
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./badge.js";
import "./chat.js";
import "./globe.js";
import "./format-relative-date-time.js";
import "./markdown-DuQ7-Xtp.js";
import "./external-link-favicon.js";
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./use-diff-annotations.js";
import "./gh-pull-request-status-query.js";
import "./use-is-background-subagents-enabled.js";
import "./sortBy.js";
import "./composer-controller.js";
/* empty css                    */ import "./composer-top-menu-chrome.js";
import "./connected-apps.js";
import "./undo-C_qr-caq.js";
import "./use-composer-controller.js";
import "./use-composer-top-menu-max-height.js";
import "./diff-stats.js";
import "./format-skill-scope.js";
import "./list-navigation.js";
import "./use-workspace-file-search-CG-eRM3a.js";
import "./at-mention-list-1.js";
import "./anchored-autocomplete-overlay.js";
import "./mcp-capability-client.js";
import "./prompt-editor.js";
import { t as re } from "./use-diff-comment-sources.js";
import { n as m, r as h, t as g } from "./diff-unified.js";
import "./rich-preview-primitives.js";
import "./markdown-surface.js";
import "./use-autocomplete-overlay-placement.js";
import { t as ie } from "./segmented-toggle.js";
import { t as ae } from "./diff-summary.js";
var _ = t(),
  v = e(),
  oe = 25,
  se = 2e3;
function y() {
  let e = (0, _.c)(5),
    t = x();
  if (`error` in t) {
    let n;
    return (
      e[0] === t.error
        ? (n = e[1])
        : ((n = (0, v.jsx)(`div`, {
            className: `p-4 text-token-error-foreground`,
            children: t.error,
          })),
          (e[0] = t.error),
          (e[1] = n)),
      n
    );
  }
  let n;
  return (
    e[2] !== t.conversationId || e[3] !== t.diffContent
      ? ((n = (0, v.jsx)(b, { diffContent: t.diffContent, conversationId: t.conversationId })),
        (e[2] = t.conversationId),
        (e[3] = t.diffContent),
        (e[4] = n))
      : (n = e[4]),
    n
  );
}
function b(e) {
  let t = (0, _.c)(61),
    { diffContent: m, conversationId: g } = e,
    y = n(te),
    b;
  t[0] === g
    ? (b = t[1])
    : ((b = { conversationId: g, enablePullRequestComments: !1 }), (t[0] = g), (t[1] = b));
  let { commentProps: x } = re(b),
    C;
  t[2] === m ? (C = t[3]) : ((C = f(m)), (t[2] = m), (t[3] = C));
  let w = C,
    T;
  t[4] === w ? (T = t[5]) : ((T = ae(w)), (t[4] = w), (t[5] = T));
  let le = T,
    E = r(d),
    D = r(u),
    O = a(),
    { data: k } = r(ee),
    A = l().state?.cwd || k?.roots?.[0],
    { fileCount: j, linesAdded: M, linesDeleted: N } = le,
    P = j <= oe && M + N <= se,
    F;
  t[6] === j
    ? (F = t[7])
    : ((F = (0, v.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, v.jsx)(o, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: j },
        }),
      })),
      (t[6] = j),
      (t[7] = F));
  let I;
  t[8] !== M || t[9] !== N
    ? ((I =
        (M > 0 || N > 0) &&
        (0, v.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, v.jsx)(`span`, {
              className: `text-token-charts-green`,
              children: (0, v.jsx)(o, {
                id: `codex.diffView.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                description: `Label for lines added in DiffView`,
                values: { linesAdded: M },
              }),
            }),
            (0, v.jsx)(`span`, {
              className: `text-token-charts-red`,
              children: (0, v.jsx)(o, {
                id: `codex.diffView.linesDeleted`,
                defaultMessage: `-{linesDeleted}`,
                description: `Label for lines deleted in DiffView`,
                values: { linesDeleted: N },
              }),
            }),
          ],
        })),
      (t[8] = M),
      (t[9] = N),
      (t[10] = I))
    : (I = t[10]);
  let L;
  t[11] !== F || t[12] !== I
    ? ((L = (0, v.jsxs)(`div`, { className: `flex items-center gap-2 text-sm`, children: [F, I] })),
      (t[11] = F),
      (t[12] = I),
      (t[13] = L))
    : (L = t[13]);
  let R;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { id: `left`, label: (0, v.jsx)(S, { className: `icon-xs` }) }), (t[14] = R))
    : (R = t[14]);
  let z;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [R, { id: `right`, label: (0, v.jsx)(ce, { className: `icon-xs` }) }]), (t[15] = z))
    : (z = t[15]);
  let B = E === `unified` ? `left` : `right`,
    V;
  t[16] === y
    ? (V = t[17])
    : ((V = (e) => y.set(d, e === `left` ? `unified` : `split`)), (t[16] = y), (t[17] = V));
  let H;
  t[18] !== V || t[19] !== B
    ? ((H = (0, v.jsx)(ie, { options: z, selectedId: B, onSelect: V, size: `toolbar` })),
      (t[18] = V),
      (t[19] = B),
      (t[20] = H))
    : (H = t[20]);
  let U;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, v.jsx)(o, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (t[21] = U))
    : (U = t[21]);
  let W;
  t[22] === O
    ? (W = t[23])
    : ((W = O.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (t[22] = O),
      (t[23] = W));
  let G = D ? `ghostActive` : `ghost`,
    K;
  t[24] !== D || t[25] !== y
    ? ((K = () => y.set(u, !D)), (t[24] = D), (t[25] = y), (t[26] = K))
    : (K = t[26]);
  let q;
  t[27] === D
    ? (q = t[28])
    : ((q = D
        ? (0, v.jsx)(p, { className: `icon-xs text-token-description-foreground` })
        : (0, v.jsx)(ne, { className: `icon-xs text-token-description-foreground` })),
      (t[27] = D),
      (t[28] = q));
  let J;
  t[29] !== D || t[30] !== W || t[31] !== G || t[32] !== K || t[33] !== q
    ? ((J = (0, v.jsx)(c, {
        tooltipContent: U,
        children: (0, v.jsx)(s, {
          "aria-label": W,
          "aria-pressed": D,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (t[29] = D),
      (t[30] = W),
      (t[31] = G),
      (t[32] = K),
      (t[33] = q),
      (t[34] = J))
    : (J = t[34]);
  let Y;
  t[35] !== H || t[36] !== J
    ? ((Y = (0, v.jsxs)(`div`, { className: `flex items-center gap-1`, children: [H, J] })),
      (t[35] = H),
      (t[36] = J),
      (t[37] = Y))
    : (Y = t[37]);
  let X;
  t[38] !== Y || t[39] !== L
    ? ((X = (0, v.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [L, Y],
      })),
      (t[38] = Y),
      (t[39] = L),
      (t[40] = X))
    : (X = t[40]);
  let Z;
  if (
    t[41] !== x ||
    t[42] !== g ||
    t[43] !== A ||
    t[44] !== w ||
    t[45] !== E ||
    t[46] !== D ||
    t[47] !== P
  ) {
    let e;
    (t[49] !== x || t[50] !== g || t[51] !== A || t[52] !== E || t[53] !== D || t[54] !== P
      ? ((e = (e, t) =>
          (0, v.jsx)(
            h,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: E,
              richPreviewEnabled: D,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: P,
              cwd: A == null ? void 0 : i(A),
              conversationId: g,
              fullContentNextFallbackToDisk: !0,
              ...x,
            },
            t,
          )),
        (t[49] = x),
        (t[50] = g),
        (t[51] = A),
        (t[52] = E),
        (t[53] = D),
        (t[54] = P),
        (t[55] = e))
      : (e = t[55]),
      (Z = w.map(e)),
      (t[41] = x),
      (t[42] = g),
      (t[43] = A),
      (t[44] = w),
      (t[45] = E),
      (t[46] = D),
      (t[47] = P),
      (t[48] = Z));
  } else Z = t[48];
  let Q;
  t[56] === Z
    ? (Q = t[57])
    : ((Q = (0, v.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (t[56] = Z),
      (t[57] = Q));
  let $;
  return (
    t[58] !== X || t[59] !== Q
      ? (($ = (0, v.jsxs)(`div`, { className: `flex h-full flex-col`, children: [X, Q] })),
        (t[58] = X),
        (t[59] = Q),
        (t[60] = $))
      : ($ = t[60]),
    $
  );
}
function x() {
  let e = (0, _.c)(11),
    t = a(),
    n = l(),
    r;
  bb0: {
    let i = n.state;
    if (i?.unifiedDiff && i.conversationId)
      try {
        let t = i.conversationId ?? null,
          n;
        (e[0] !== i.unifiedDiff || e[1] !== t
          ? ((n = { diffContent: i.unifiedDiff, conversationId: t }),
            (e[0] = i.unifiedDiff),
            (e[1] = t),
            (e[2] = n))
          : (n = e[2]),
          (r = n));
        break bb0;
      } catch {
        let n;
        e[3] === t
          ? (n = e[4])
          : ((n = t.formatMessage({
              id: `codex.diffView.failedToDecodeBase64Diff`,
              defaultMessage: `Couldn’t load this diff`,
              description: `Error message displayed when the diff cannot be decoded`,
            })),
            (e[3] = t),
            (e[4] = n));
        let i;
        (e[5] === n ? (i = e[6]) : ((i = { error: n }), (e[5] = n), (e[6] = i)), (r = i));
        break bb0;
      }
    let a;
    e[7] === t
      ? (a = e[8])
      : ((a = t.formatMessage({
          id: `codex.diffView.noDiffData`,
          defaultMessage: `No diff available`,
          description: `Error message displayed when there is no diff data`,
        })),
        (e[7] = t),
        (e[8] = a));
    let o;
    (e[9] === a ? (o = e[10]) : ((o = { error: a }), (e[9] = a), (e[10] = o)), (r = o));
  }
  return r;
}
function S(e) {
  let t = (0, _.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, v.jsx)(o, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, v.jsx)(c, { tooltipContent: r, children: (0, v.jsx)(g, { className: n }) })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function ce(e) {
  let t = (0, _.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, v.jsx)(o, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, v.jsx)(c, { tooltipContent: r, children: (0, v.jsx)(m, { className: n }) })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
export { y as EditorDiffPage };
//# sourceMappingURL=editor-diff-page.js.map
