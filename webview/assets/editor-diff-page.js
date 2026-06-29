import { Kn as e } from "./src-2.js";
import "./app-server-manager-signals.js";
import { t } from "./jsx-runtime.js";
import "./shiki-highlight-provider-gate.js";
import "./react-dom.js";
import "./Combination.js";
import "./katex-1.js";
import "./marked.esm-BR-H6018.js";
import "./pdf-1.js";
import { F as n, I as r, lt as i } from "./vscode-api.js";
import { c as a, o } from "./lib-2.js";
import { f as s } from "./chunk-12.js";
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
import { t as ee } from "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth-CI-WraL2.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import { t as c } from "./tooltip.js";
import { t as te } from "./route-scope.js";
import "./prompt-text.js";
import "./mention-item-C.js";
import { t as ne } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-Dm-v1Nm8.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-workspace-file-CJcJ-CWR.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request-Dau-We3b.js";
import "./mime-types.js";
import "./remote-projects.js";
import "./proxy.js";
import "./apps.js";
import "./x.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import "./platform.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import { i as l, t as u } from "./diff-view-mode.js";
import { t as d } from "./parse-diff.js";
import "./file-diff.js";
import "./sumBy-BCSe-07a.js";
import "./focus-composer.js";
import "./terminal.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./window-app-action-helpers.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code-Dj-8G3VY.js";
import { t as re } from "./json-2.js";
import "./folder.js";
import { t as f } from "./image-square.js";
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
import "./_defineProperty.js";
import "./use-resize-observer.js";
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./badge-Bpp-zYoJ.js";
import "./chat.js";
import "./globe.js";
import "./chevron.js";
import "./format-relative-date-time.js";
import "./markdown-2.js";
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./plus-d3DP-DMx.js";
import "./image-preview-dialog.js";
import "./pull-request-readonly-comment.js";
import "./gh-cli-status-query.js";
import "./use-is-background-subagents-enabled.js";
import "./arrow-up.js";
import "./sortBy.js";
import "./composer-controller.js";
/* empty css                    */ import "./composer-top-menu-chrome.js";
import "./connected-apps.js";
import "./undo.js";
import "./use-composer-controller.js";
import "./use-composer-top-menu-max-height-CLH9-I0L.js";
import "./diff-stats.js";
import "./format-skill-scope.js";
import "./list-navigation.js";
import "./use-workspace-file-search.js";
import "./at-mention-list-1.js";
import "./anchored-autocomplete-overlay.js";
import "./mcp-capability-client.js";
import "./prompt-editor.js";
import { t as ie } from "./use-diff-comment-sources.js";
import { n as p, r as m, t as h } from "./diff-unified.js";
import "./use-diff-annotations.js";
import "./rich-preview-primitives.js";
import "./markdown-surface.js";
import "./use-autocomplete-overlay-placement.js";
import "./gh-pull-request-status-query-Do-O_y_F.js";
import { t as g } from "./segmented-toggle-BGk-vwSF.js";
import { t as ae } from "./diff-summary.js";
var _ = i(),
  v = t(),
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
function b(t) {
  let i = (0, _.c)(61),
    { diffContent: p, conversationId: h } = t,
    y = n(te),
    b;
  i[0] === h
    ? (b = i[1])
    : ((b = { conversationId: h, enablePullRequestComments: !1 }), (i[0] = h), (i[1] = b));
  let { commentProps: x } = ie(b),
    C;
  i[2] === p ? (C = i[3]) : ((C = d(p)), (i[2] = p), (i[3] = C));
  let w = C,
    T;
  i[4] === w ? (T = i[5]) : ((T = ae(w)), (i[4] = w), (i[5] = T));
  let le = T,
    E = r(u),
    D = r(l),
    O = a(),
    { data: k } = r(ee),
    A = s().state?.cwd || k?.roots?.[0],
    { fileCount: j, linesAdded: M, linesDeleted: N } = le,
    P = j <= oe && M + N <= se,
    F;
  i[6] === j
    ? (F = i[7])
    : ((F = (0, v.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, v.jsx)(o, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: j },
        }),
      })),
      (i[6] = j),
      (i[7] = F));
  let I;
  i[8] !== M || i[9] !== N
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
      (i[8] = M),
      (i[9] = N),
      (i[10] = I))
    : (I = i[10]);
  let L;
  i[11] !== F || i[12] !== I
    ? ((L = (0, v.jsxs)(`div`, { className: `flex items-center gap-2 text-sm`, children: [F, I] })),
      (i[11] = F),
      (i[12] = I),
      (i[13] = L))
    : (L = i[13]);
  let R;
  i[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { id: `left`, label: (0, v.jsx)(S, { className: `icon-xs` }) }), (i[14] = R))
    : (R = i[14]);
  let z;
  i[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [R, { id: `right`, label: (0, v.jsx)(ce, { className: `icon-xs` }) }]), (i[15] = z))
    : (z = i[15]);
  let B = E === `unified` ? `left` : `right`,
    V;
  i[16] === y
    ? (V = i[17])
    : ((V = (e) => y.set(u, e === `left` ? `unified` : `split`)), (i[16] = y), (i[17] = V));
  let H;
  i[18] !== V || i[19] !== B
    ? ((H = (0, v.jsx)(g, { options: z, selectedId: B, onSelect: V, size: `toolbar` })),
      (i[18] = V),
      (i[19] = B),
      (i[20] = H))
    : (H = i[20]);
  let U;
  i[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, v.jsx)(o, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (i[21] = U))
    : (U = i[21]);
  let W;
  i[22] === O
    ? (W = i[23])
    : ((W = O.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (i[22] = O),
      (i[23] = W));
  let G = D ? `ghostActive` : `ghost`,
    K;
  i[24] !== D || i[25] !== y
    ? ((K = () => y.set(l, !D)), (i[24] = D), (i[25] = y), (i[26] = K))
    : (K = i[26]);
  let q;
  i[27] === D
    ? (q = i[28])
    : ((q = D
        ? (0, v.jsx)(f, { className: `icon-xs text-token-description-foreground` })
        : (0, v.jsx)(re, { className: `icon-xs text-token-description-foreground` })),
      (i[27] = D),
      (i[28] = q));
  let J;
  i[29] !== D || i[30] !== W || i[31] !== G || i[32] !== K || i[33] !== q
    ? ((J = (0, v.jsx)(c, {
        tooltipContent: U,
        children: (0, v.jsx)(ne, {
          "aria-label": W,
          "aria-pressed": D,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (i[29] = D),
      (i[30] = W),
      (i[31] = G),
      (i[32] = K),
      (i[33] = q),
      (i[34] = J))
    : (J = i[34]);
  let Y;
  i[35] !== H || i[36] !== J
    ? ((Y = (0, v.jsxs)(`div`, { className: `flex items-center gap-1`, children: [H, J] })),
      (i[35] = H),
      (i[36] = J),
      (i[37] = Y))
    : (Y = i[37]);
  let X;
  i[38] !== Y || i[39] !== L
    ? ((X = (0, v.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [L, Y],
      })),
      (i[38] = Y),
      (i[39] = L),
      (i[40] = X))
    : (X = i[40]);
  let Z;
  if (
    i[41] !== x ||
    i[42] !== h ||
    i[43] !== A ||
    i[44] !== w ||
    i[45] !== E ||
    i[46] !== D ||
    i[47] !== P
  ) {
    let t;
    (i[49] !== x || i[50] !== h || i[51] !== A || i[52] !== E || i[53] !== D || i[54] !== P
      ? ((t = (t, n) =>
          (0, v.jsx)(
            m,
            {
              diff: t,
              hunkSeparators: `line-info`,
              viewType: E,
              richPreviewEnabled: D,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: P,
              cwd: A == null ? void 0 : e(A),
              conversationId: h,
              fullContentNextFallbackToDisk: !0,
              ...x,
            },
            n,
          )),
        (i[49] = x),
        (i[50] = h),
        (i[51] = A),
        (i[52] = E),
        (i[53] = D),
        (i[54] = P),
        (i[55] = t))
      : (t = i[55]),
      (Z = w.map(t)),
      (i[41] = x),
      (i[42] = h),
      (i[43] = A),
      (i[44] = w),
      (i[45] = E),
      (i[46] = D),
      (i[47] = P),
      (i[48] = Z));
  } else Z = i[48];
  let Q;
  i[56] === Z
    ? (Q = i[57])
    : ((Q = (0, v.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (i[56] = Z),
      (i[57] = Q));
  let $;
  return (
    i[58] !== X || i[59] !== Q
      ? (($ = (0, v.jsxs)(`div`, { className: `flex h-full flex-col`, children: [X, Q] })),
        (i[58] = X),
        (i[59] = Q),
        (i[60] = $))
      : ($ = i[60]),
    $
  );
}
function x() {
  let e = (0, _.c)(11),
    t = a(),
    n = s(),
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
      : ((i = (0, v.jsx)(c, { tooltipContent: r, children: (0, v.jsx)(h, { className: n }) })),
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
      : ((i = (0, v.jsx)(c, { tooltipContent: r, children: (0, v.jsx)(p, { className: n }) })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
export { y as EditorDiffPage };
//# sourceMappingURL=editor-diff-page.js.map
