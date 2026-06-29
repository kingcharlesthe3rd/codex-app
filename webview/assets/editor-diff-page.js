import { t as e } from "./jsx-runtime.js";
import { o as t, s as n, z as r } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import { pn as i } from "./src-2.js";
import "./react-dom.js";
import { l as a, s as o } from "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import { t as s } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-2.js";
import "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import { t as c } from "./tooltip.js";
import "./context-menu.js";
import "./toast-signal.js";
import "./arrow-up.js";
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
import { t as ee } from "./thread-context-inputs.js";
import "./config-queries.js";
import "./modal-controller-state.js";
import "./dialog-layout-B.js";
import "./with-window.js";
import "./badge-C.js";
import "./file.js";
import "./folder.js";
import "./undo.js";
import "./use-debounced-value-Dw-7BPJJ.js";
import "./experimental-features-queries.js";
import "./use-in-app-browser-use-availability.js";
import { t as te } from "./image-square.js";
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
import "./use-composer-controller.js";
import "./apps-2.js";
import "./link-external.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./remote-projects.js";
import "./chevron.js";
import "./shiki-highlight-provider-gate.js";
import "./katex-3.js";
import "./pdf.js";
import { f as l } from "./chunk-9.js";
import "./known-app-icon.js";
import "./branch-D.js";
import "./github-mark.js";
import "./google-drive.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import { t as ne } from "./route-scope.js";
import "./prompt-text.js";
import "./info-1.js";
import "./projectless-thread.js";
import "./plugin-install-store.js";
import { i as u, t as d } from "./diff-view-mode.js";
import { t as re } from "./parse-diff-BMY7-MEq.js";
import "./file-diff.js";
import "./sumBy-DDE-KTtd.js";
import "./focus-composer.js";
import "./terminal.js";
import "./error-boundary.js";
import "./download.js";
import "./use-resolved-theme-variant.js";
import "./appgen-gating.js";
import "./plugin-detail-route-utils.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code-CBI-Jt6Z.js";
import { t as f } from "./json.js";
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
import "./use-composer-top-menu-max-height.js";
import "./use-resize-observer.js";
import "./arrow-left.js";
import "./checkbox.js";
import "./minus.js";
import "./chat.js";
import "./globe.js";
import "./format-relative-date-time.js";
import "./markdown-1.js";
import "./external-link-favicon.js";
import "./external-markdown-link.js";
import "./code-snippet.js";
import "./copy.js";
import "./copy-button.js";
import "./image-preview-dialog.js";
import "./use-diff-annotations.js";
import "./gh-pull-request-status-query.js";
import "./use-is-background-subagents-enabled.js";
import "./sortBy.js";
import "./composer-controller.js";
/* empty css                    */ import "./composer-top-menu-chrome.js";
import "./connected-apps.js";
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
import "./rich-preview-primitives.js";
import "./markdown-surface.js";
import "./use-autocomplete-overlay-placement.js";
import { t as g } from "./segmented-toggle.js";
import { t as ae } from "./diff-summary.js";
var _ = r(),
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
  let r = (0, _.c)(61),
    { diffContent: p, conversationId: h } = e,
    y = t(ne),
    b;
  r[0] === h
    ? (b = r[1])
    : ((b = { conversationId: h, enablePullRequestComments: !1 }), (r[0] = h), (r[1] = b));
  let { commentProps: x } = ie(b),
    C;
  r[2] === p ? (C = r[3]) : ((C = re(p)), (r[2] = p), (r[3] = C));
  let w = C,
    T;
  r[4] === w ? (T = r[5]) : ((T = ae(w)), (r[4] = w), (r[5] = T));
  let le = T,
    E = n(d),
    D = n(u),
    O = a(),
    { data: k } = n(ee),
    A = l().state?.cwd || k?.roots?.[0],
    { fileCount: j, linesAdded: M, linesDeleted: N } = le,
    P = j <= oe && M + N <= se,
    F;
  r[6] === j
    ? (F = r[7])
    : ((F = (0, v.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, v.jsx)(o, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: j },
        }),
      })),
      (r[6] = j),
      (r[7] = F));
  let I;
  r[8] !== M || r[9] !== N
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
      (r[8] = M),
      (r[9] = N),
      (r[10] = I))
    : (I = r[10]);
  let L;
  r[11] !== F || r[12] !== I
    ? ((L = (0, v.jsxs)(`div`, { className: `flex items-center gap-2 text-sm`, children: [F, I] })),
      (r[11] = F),
      (r[12] = I),
      (r[13] = L))
    : (L = r[13]);
  let R;
  r[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { id: `left`, label: (0, v.jsx)(S, { className: `icon-xs` }) }), (r[14] = R))
    : (R = r[14]);
  let z;
  r[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [R, { id: `right`, label: (0, v.jsx)(ce, { className: `icon-xs` }) }]), (r[15] = z))
    : (z = r[15]);
  let B = E === `unified` ? `left` : `right`,
    V;
  r[16] === y
    ? (V = r[17])
    : ((V = (e) => y.set(d, e === `left` ? `unified` : `split`)), (r[16] = y), (r[17] = V));
  let H;
  r[18] !== V || r[19] !== B
    ? ((H = (0, v.jsx)(g, { options: z, selectedId: B, onSelect: V, size: `toolbar` })),
      (r[18] = V),
      (r[19] = B),
      (r[20] = H))
    : (H = r[20]);
  let U;
  r[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, v.jsx)(o, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (r[21] = U))
    : (U = r[21]);
  let W;
  r[22] === O
    ? (W = r[23])
    : ((W = O.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (r[22] = O),
      (r[23] = W));
  let G = D ? `ghostActive` : `ghost`,
    K;
  r[24] !== D || r[25] !== y
    ? ((K = () => y.set(u, !D)), (r[24] = D), (r[25] = y), (r[26] = K))
    : (K = r[26]);
  let q;
  r[27] === D
    ? (q = r[28])
    : ((q = D
        ? (0, v.jsx)(te, { className: `icon-xs text-token-description-foreground` })
        : (0, v.jsx)(f, { className: `icon-xs text-token-description-foreground` })),
      (r[27] = D),
      (r[28] = q));
  let J;
  r[29] !== D || r[30] !== W || r[31] !== G || r[32] !== K || r[33] !== q
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
      (r[29] = D),
      (r[30] = W),
      (r[31] = G),
      (r[32] = K),
      (r[33] = q),
      (r[34] = J))
    : (J = r[34]);
  let Y;
  r[35] !== H || r[36] !== J
    ? ((Y = (0, v.jsxs)(`div`, { className: `flex items-center gap-1`, children: [H, J] })),
      (r[35] = H),
      (r[36] = J),
      (r[37] = Y))
    : (Y = r[37]);
  let X;
  r[38] !== Y || r[39] !== L
    ? ((X = (0, v.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [L, Y],
      })),
      (r[38] = Y),
      (r[39] = L),
      (r[40] = X))
    : (X = r[40]);
  let Z;
  if (
    r[41] !== x ||
    r[42] !== h ||
    r[43] !== A ||
    r[44] !== w ||
    r[45] !== E ||
    r[46] !== D ||
    r[47] !== P
  ) {
    let e;
    (r[49] !== x || r[50] !== h || r[51] !== A || r[52] !== E || r[53] !== D || r[54] !== P
      ? ((e = (e, t) =>
          (0, v.jsx)(
            m,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: E,
              richPreviewEnabled: D,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: P,
              cwd: A == null ? void 0 : i(A),
              conversationId: h,
              fullContentNextFallbackToDisk: !0,
              ...x,
            },
            t,
          )),
        (r[49] = x),
        (r[50] = h),
        (r[51] = A),
        (r[52] = E),
        (r[53] = D),
        (r[54] = P),
        (r[55] = e))
      : (e = r[55]),
      (Z = w.map(e)),
      (r[41] = x),
      (r[42] = h),
      (r[43] = A),
      (r[44] = w),
      (r[45] = E),
      (r[46] = D),
      (r[47] = P),
      (r[48] = Z));
  } else Z = r[48];
  let Q;
  r[56] === Z
    ? (Q = r[57])
    : ((Q = (0, v.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (r[56] = Z),
      (r[57] = Q));
  let $;
  return (
    r[58] !== X || r[59] !== Q
      ? (($ = (0, v.jsxs)(`div`, { className: `flex h-full flex-col`, children: [X, Q] })),
        (r[58] = X),
        (r[59] = Q),
        (r[60] = $))
      : ($ = r[60]),
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
