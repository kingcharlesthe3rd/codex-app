import { t as e } from "./jsx-runtime.js";
import { Z as t, o as n, t as r } from "./app-scope-CWE-zIhQ.js";
import "./use-host-config-C.js";
import { ci as i, si as a } from "./thread-context-inputs.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-1.js";
import "./react-dom.js";
import { l as o, s } from "./lib-1.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as c } from "./app-shell.js";
import { t as l } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import { t as u } from "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import { t as d } from "./tooltip-B.js";
import "./context-menu.js";
import "./toast-signal.js";
import { t as f } from "./regenerate.js";
import "./x.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./chevron.js";
import "./markdown-to-search-text.js";
import "./core.esm.js";
import "./marked.esm.js";
import "./product-logger.js";
import { m as p } from "./chunk-13.js";
import "./parse-directives.js";
import "./platform.js";
import "./persisted-signal.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./use-global-state.js";
import "./model-queries.js";
import "./use-model-settings.js";
import "./config.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./mention-item.js";
import { t as m } from "./use-collaboration-mode.js";
import "./collaboration-mode-queries.js";
import "./use-permissions-mode-DcMQ-DVc.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./projectless-thread.js";
import { t as h } from "./use-platform.js";
import "./experimental-features-queries-D.js";
import "./browser-sidebar-availability.js";
import "./uniq.js";
import "./info.js";
import "./arrow-left.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller.js";
import "./git-availability-query.js";
import "./app-intl-signal.js";
import "./error-boundary-DOI-M2iu.js";
import "./app-identity.js";
import "./download.js";
import { t as g } from "./with-window.js";
import "./sidebar-thread-keys.js";
import "./use-window-controls-safe-area.js";
import "./folder.js";
import { t as _ } from "./settings.cog.js";
import "./command-menu-state.js";
import { r as v } from "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-register-command.js";
import { t as y } from "./external-link.js";
import "./initial-route-atom.js";
import { n as b } from "./use-start-new-conversation.js";
import "./sites-color.js";
import "./plugin-config-edits.js";
import "./plugin-prefill-prompt.js";
import { i as x, o as S, t as C } from "./sites-GBPP-jT9.js";
import "./electron-menu-shortcuts.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-row-signals.js";
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
import "./dropdown.js";
import "./globe.js";
import { t as w } from "./edit.js";
import { t as T } from "./format-relative-date-time.js";
import "./remote-host-globe-icon-B5-baJXK.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./arrow-up-right-lg.js";
import "./building.js";
import "./lock.js";
import { t as E } from "./arrow-top-right.js";
import "./list-navigation.js";
import { t as D } from "./thread-page-header.js";
import { n as O } from "./appgen-url-n_yb-0uU.js";
import "./link.js";
import { t as k } from "./infinite-scroll-pagination-spinner.js";
import { t as A } from "./share.js";
import { n as j } from "./appgen-access.js";
import { i as M, n as N } from "./appgen-access-state-messages.js";
import "./use-workspace-users.js";
import { t as P } from "./appgen-share-dialog-1.js";
import { n as F, t as I } from "./sites-default-thumbnail.js";
var L = t(),
  R = e();
function z() {
  let e = (0, L.c)(46),
    t = n(r),
    i = o(),
    {
      data: u,
      fetchNextPage: p,
      hasNextPage: h,
      isFetchNextPageError: _,
      isFetchingNextPage: v,
      isLoading: y,
      isRefetching: x,
      refetch: C,
    } = a(),
    { setSelectedMode: w } = m(),
    T = b(),
    E = y || x || v,
    O;
  e[0] === i
    ? (O = e[1])
    : ((O = i.formatMessage({
        id: `appgenPage.refresh`,
        defaultMessage: `Refresh sites`,
        description: `Accessible label for refreshing the Sites project list`,
      })),
      (e[0] = i),
      (e[1] = O));
  let k = O,
    A;
  e[2] !== t || e[3] !== w || e[4] !== T
    ? ((A = () => {
        S(t, T, { type: `create`, setSelectedMode: w });
      }),
      (e[2] = t),
      (e[3] = w),
      (e[4] = T),
      (e[5] = A))
    : (A = e[5]);
  let j = A,
    M;
  e[6] !== t || e[7] !== T
    ? ((M = (e, n, r) => {
        S(t, T, { type: `edit`, liveUrl: r, projectId: e, projectTitle: n });
      }),
      (e[6] = t),
      (e[7] = T),
      (e[8] = M))
    : (M = e[8]);
  let N = M,
    P;
  e[9] === C
    ? (P = e[10])
    : ((P = () => {
        C();
      }),
      (e[9] = C),
      (e[10] = P));
  let F = P,
    I;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, R.jsx)(s, {
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (e[11] = I))
    : (I = e[11]);
  let z;
  e[12] === x
    ? (z = e[13])
    : ((z = x ? null : (0, R.jsx)(f, { className: `icon-xs` })), (e[12] = x), (e[13] = z));
  let W;
  e[14] !== F || e[15] !== x || e[16] !== E || e[17] !== k || e[18] !== z
    ? ((W = (0, R.jsx)(l, {
        "aria-label": k,
        color: `ghost`,
        disabled: E,
        loading: x,
        onClick: F,
        size: `toolbar`,
        uniform: !0,
        children: z,
      })),
      (e[14] = F),
      (e[15] = x),
      (e[16] = E),
      (e[17] = k),
      (e[18] = z),
      (e[19] = W))
    : (W = e[19]);
  let G;
  e[20] !== k || e[21] !== W
    ? ((G = (0, R.jsx)(d, { tooltipContent: k, children: W })),
      (e[20] = k),
      (e[21] = W),
      (e[22] = G))
    : (G = e[22]);
  let K;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, R.jsx)(s, {
        id: `appgenPage.create`,
        defaultMessage: `Create`,
        description: `Button label for starting a new site from the Sites page`,
      })),
      (e[23] = K))
    : (K = e[23]);
  let q;
  e[24] === j
    ? (q = e[25])
    : ((q = (0, R.jsx)(l, { color: `outline`, size: `toolbar`, onClick: j, children: K })),
      (e[24] = j),
      (e[25] = q));
  let J;
  e[26] !== G || e[27] !== q
    ? ((J = (0, R.jsx)(D, {
        start: I,
        trailing: (0, R.jsxs)(`div`, { className: `flex items-center gap-2`, children: [G, q] }),
      })),
      (e[26] = G),
      (e[27] = q),
      (e[28] = J))
    : (J = e[28]);
  let Y = J,
    X;
  e[29] === Y
    ? (X = e[30])
    : ((X = (0, R.jsx)(g, { extension: !0, children: Y })), (e[29] = Y), (e[30] = X));
  let Z;
  e[31] === Y
    ? (Z = e[32])
    : ((Z = (0, R.jsx)(g, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, R.jsx)(c.Header, { children: Y }),
      })),
      (e[31] = Y),
      (e[32] = Z));
  let Q;
  e[33] !== p ||
  e[34] !== j ||
  e[35] !== N ||
  e[36] !== h ||
  e[37] !== _ ||
  e[38] !== v ||
  e[39] !== y ||
  e[40] !== u
    ? ((Q = (0, R.jsx)(`div`, {
        className: `flex min-h-0 flex-1 overflow-y-auto px-panel pb-panel`,
        children: (0, R.jsx)(`div`, {
          className: `mx-auto flex min-h-full w-full max-w-[760px] flex-col pt-10`,
          children: y
            ? (0, R.jsx)(B, {})
            : u == null
              ? (0, R.jsx)(H, {})
              : u.length === 0 && (!h || _)
                ? (0, R.jsx)(V, { onCreate: j })
                : (0, R.jsx)(U, {
                    projects: u,
                    hasNextPage: h && !_,
                    isFetchingNextPage: v,
                    onEdit: N,
                    onLoadNextPage: () => {
                      p();
                    },
                  }),
        }),
      })),
      (e[33] = p),
      (e[34] = j),
      (e[35] = N),
      (e[36] = h),
      (e[37] = _),
      (e[38] = v),
      (e[39] = y),
      (e[40] = u),
      (e[41] = Q))
    : (Q = e[41]);
  let $;
  return (
    e[42] !== X || e[43] !== Z || e[44] !== Q
      ? (($ = (0, R.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [X, Z, Q],
        })),
        (e[42] = X),
        (e[43] = Z),
        (e[44] = Q),
        (e[45] = $))
      : ($ = e[45]),
    $
  );
}
function B() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, R.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, R.jsx)(u, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function V(e) {
  let t = (0, L.c)(5),
    { onCreate: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(C, { className: `icon-lg text-token-foreground` })), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, R.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children: (0, R.jsx)(s, {
          id: `appgenPage.empty.title`,
          defaultMessage: `Nothing here yet`,
          description: `Empty state title for the Sites page`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, R.jsx)(s, {
        id: `appgenPage.empty.create`,
        defaultMessage: `Create new site`,
        description: `Button label for creating a new site from the empty state`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, R.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, R.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4 text-center`,
            children: [
              r,
              i,
              (0, R.jsx)(l, { color: `outline`, size: `medium`, onClick: n, children: a }),
            ],
          }),
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
function H() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, R.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, R.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, R.jsx)(s, {
              id: `appgenPage.error.title`,
              defaultMessage: `Unable to load sites`,
              description: `Error state title for the Sites page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function U(e) {
  let t = (0, L.c)(16),
    { hasNextPage: n, isFetchingNextPage: r, onEdit: i, onLoadNextPage: a, projects: o } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, R.jsx)(`span`, {
        children: (0, R.jsx)(s, {
          id: `appgenPage.list.site`,
          defaultMessage: `Site`,
          description: `Column header for a site in the Sites list`,
        }),
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, R.jsxs)(`div`, {
        className: `col-span-full grid grid-cols-subgrid border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-appgen-row]:hover)]:border-transparent`,
        children: [
          c,
          (0, R.jsx)(`span`, {
            className: `pl-4 [@container_(max-width:520px)]:sr-only`,
            children: (0, R.jsx)(s, {
              id: `appgenPage.list.sharedWith`,
              defaultMessage: `Shared with`,
              description: `Column header for who can access a site in the Sites list`,
            }),
          }),
        ],
      })),
      (t[1] = l))
    : (l = t[1]);
  let u;
  if (t[2] !== i || t[3] !== o) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, R.jsx)(W, { project: e, onEdit: i }, e.id)), (t[5] = i), (t[6] = e)),
      (u = o.map(e)),
      (t[2] = i),
      (t[3] = o),
      (t[4] = u));
  } else u = t[4];
  let d;
  t[7] === u
    ? (d = t[8])
    : ((d = (0, R.jsxs)(`div`, {
        className: `grid grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto_auto]`,
        children: [l, u],
      })),
      (t[7] = u),
      (t[8] = d));
  let f;
  t[9] !== n || t[10] !== r || t[11] !== a
    ? ((f = (0, R.jsx)(k, { hasNextPage: n, isFetchingNextPage: r, onLoadNextPage: a })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = a),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== d || t[14] !== f
      ? ((p = (0, R.jsxs)(`div`, { className: `@container pb-3`, children: [d, f] })),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function W(e) {
  let t = (0, L.c)(46),
    { onEdit: n, project: r } = e,
    a = o(),
    c = r.current_live_url,
    { data: l } = i(r.screenshot_url),
    u;
  t[0] !== a || t[1] !== c || t[2] !== r.title
    ? ((u =
        c == null
          ? null
          : (0, R.jsx)(y, {
              "aria-label": a.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites list`,
                },
                { siteTitle: r.title },
              ),
              className: `peer/appgen-row absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
              href: c,
              initiator: `sites_library`,
              openTarget: `in-app-browser`,
            })),
      (t[0] = a),
      (t[1] = c),
      (t[2] = r.title),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d =
        l == null
          ? (0, R.jsx)(G, {})
          : (0, R.jsxs)(`div`, {
              className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
              children: [
                (0, R.jsx)(`img`, {
                  alt: ``,
                  className: `size-full object-cover`,
                  loading: `lazy`,
                  src: l,
                }),
                (0, R.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
                }),
              ],
            })),
      (t[4] = l),
      (t[5] = d));
  let f;
  t[6] === r.title
    ? (f = t[7])
    : ((f = (0, R.jsx)(`span`, {
        className: `truncate text-sm leading-5 font-medium text-token-foreground`,
        children: r.title,
      })),
      (t[6] = r.title),
      (t[7] = f));
  let p;
  t[8] === r.updated_at
    ? (p = t[9])
    : ((p = (0, R.jsx)(T, { dateString: r.updated_at })), (t[8] = r.updated_at), (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, R.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== c || t[12] !== r.slug
    ? ((h = O(c) ?? r.slug), (t[11] = c), (t[12] = r.slug), (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === h
    ? (g = t[15])
    : ((g = (0, R.jsx)(`span`, { className: `truncate`, children: h })), (t[14] = h), (t[15] = g));
  let _;
  t[16] !== p || t[17] !== g
    ? ((_ = (0, R.jsxs)(`span`, {
        className: `appgen-row-default-subtitle flex min-w-0 items-center gap-1.5`,
        children: [p, m, g],
      })),
      (t[16] = p),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, R.jsxs)(`span`, {
        className: `appgen-row-hover-subtitle hidden items-center gap-1`,
        children: [
          (0, R.jsx)(s, {
            id: `appgenPage.openInBrowserSubtitle`,
            defaultMessage: `Open in browser`,
            description: `Hover subtitle for opening a live site`,
          }),
          (0, R.jsx)(E, { "aria-hidden": !0, className: `icon-2xs` }),
        ],
      })),
      (t[19] = v))
    : (v = t[19]);
  let b;
  t[20] === _
    ? (b = t[21])
    : ((b = (0, R.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-xs leading-[18px] text-token-text-secondary`,
        children: [_, v],
      })),
      (t[20] = _),
      (t[21] = b));
  let x;
  t[22] !== b || t[23] !== f
    ? ((x = (0, R.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-px`, children: [f, b] })),
      (t[22] = b),
      (t[23] = f),
      (t[24] = x))
    : (x = t[24]);
  let S;
  t[25] !== x || t[26] !== d
    ? ((S = (0, R.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-6 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex`,
        children: [d, x],
      })),
      (t[25] = x),
      (t[26] = d),
      (t[27] = S))
    : (S = t[27]);
  let C;
  t[28] !== r.access_policy || t[29] !== r.id || t[30] !== r.title
    ? ((C = (0, R.jsx)(K, {
        accessPolicy: r.access_policy,
        projectId: r.id,
        projectTitle: r.title,
      })),
      (t[28] = r.access_policy),
      (t[29] = r.id),
      (t[30] = r.title),
      (t[31] = C))
    : (C = t[31]);
  let w;
  t[32] !== c || t[33] !== n || t[34] !== r.id || t[35] !== r.title
    ? ((w = () => n(r.id, r.title, c)),
      (t[32] = c),
      (t[33] = n),
      (t[34] = r.id),
      (t[35] = r.title),
      (t[36] = w))
    : (w = t[36]);
  let D;
  t[37] !== r.id || t[38] !== r.title || t[39] !== w
    ? ((D = (0, R.jsx)(q, { projectId: r.id, projectTitle: r.title, onEdit: w })),
      (t[37] = r.id),
      (t[38] = r.title),
      (t[39] = w),
      (t[40] = D))
    : (D = t[40]);
  let k;
  return (
    t[41] !== u || t[42] !== S || t[43] !== C || t[44] !== D
      ? ((k = (0, R.jsxs)(`div`, {
          className: `relative col-span-full grid grid-cols-subgrid items-center overflow-hidden rounded-xl p-3 hover:bg-token-list-hover-background/50`,
          "data-appgen-row": !0,
          children: [u, S, C, D],
        })),
        (t[41] = u),
        (t[42] = S),
        (t[43] = C),
        (t[44] = D),
        (t[45] = k))
      : (k = t[45]),
    k
  );
}
function G() {
  let e = (0, L.c)(5),
    { platform: t } = h(),
    n = t === `windows` ? F : I,
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = (0, R.jsx)(n, { "aria-hidden": !0, className: `size-full` })), (e[0] = n), (e[1] = r));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, R.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  return (
    e[3] === r
      ? (a = e[4])
      : ((a = (0, R.jsxs)(`div`, {
          className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
          children: [r, i],
        })),
        (e[3] = r),
        (e[4] = a)),
    a
  );
}
function K(e) {
  let t = (0, L.c)(16),
    { accessPolicy: i, projectId: a, projectTitle: o } = e,
    c = j(i),
    l = n(r),
    u;
  t[0] !== a || t[1] !== l
    ? ((u = () => v(l, P, { projectId: a })), (t[0] = a), (t[1] = l), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === i
    ? (d = t[4])
    : ((d = (0, R.jsx)(M, { className: `icon-xs shrink-0`, accessPolicy: i, "aria-hidden": !0 })),
      (t[3] = i),
      (t[4] = d));
  let f = s,
    p = N(c),
    m;
  t[5] !== f || t[6] !== c || t[7] !== p
    ? ((m = (0, R.jsx)(`span`, {
        className: `truncate [@container_(max-width:520px)]:sr-only`,
        children: (0, R.jsx)(f, { ...p, values: c }),
      })),
      (t[5] = f),
      (t[6] = c),
      (t[7] = p),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === o
    ? (h = t[10])
    : ((h = (0, R.jsx)(`span`, {
        className: `sr-only`,
        children: (0, R.jsx)(s, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: o },
        }),
      })),
      (t[9] = o),
      (t[10] = h));
  let g;
  return (
    t[11] !== u || t[12] !== d || t[13] !== m || t[14] !== h
      ? ((g = (0, R.jsxs)(`button`, {
          className: `pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 pl-4 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline [@container_(max-width:520px)]:pl-2`,
          type: `button`,
          onClick: u,
          children: [d, m, h],
        })),
        (t[11] = u),
        (t[12] = d),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
function q(e) {
  let t = (0, L.c)(35),
    { onEdit: i, projectId: a, projectTitle: c } = e,
    u = o(),
    f = p(),
    m = n(r),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, R.jsx)(s, {
        id: `appgenPage.share.tooltip`,
        defaultMessage: `Share`,
        description: `Tooltip for opening site sharing settings`,
      })),
      (t[0] = h))
    : (h = t[0]);
  let g;
  t[1] !== u || t[2] !== c
    ? ((g = u.formatMessage(
        {
          id: `appgenPage.share`,
          defaultMessage: `Share {siteTitle}`,
          description: `Accessible label for opening site sharing settings from the sites list`,
        },
        { siteTitle: c },
      )),
      (t[1] = u),
      (t[2] = c),
      (t[3] = g))
    : (g = t[3]);
  let y;
  t[4] !== a || t[5] !== m
    ? ((y = () => v(m, P, { projectId: a })), (t[4] = a), (t[5] = m), (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, R.jsx)(A, { "aria-hidden": !0, className: `icon-xs` })), (t[7] = b))
    : (b = t[7]);
  let S;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, R.jsx)(`span`, {
        className: `[@container_(max-width:420px)]:hidden`,
        children: (0, R.jsx)(s, {
          id: `appgenPage.share.label`,
          defaultMessage: `Share`,
          description: `Button label for opening site sharing settings`,
        }),
      })),
      (t[8] = S))
    : (S = t[8]);
  let C;
  t[9] !== g || t[10] !== y
    ? ((C = (0, R.jsx)(d, {
        tooltipContent: h,
        children: (0, R.jsxs)(l, {
          className: `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`,
          "aria-label": g,
          color: `outline`,
          size: `toolbar`,
          onClick: y,
          children: [b, S],
        }),
      })),
      (t[9] = g),
      (t[10] = y),
      (t[11] = C))
    : (C = t[11]);
  let T;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, R.jsx)(s, {
        id: `appgenPage.edit.tooltip`,
        defaultMessage: `Edit`,
        description: `Tooltip for starting a new conversation to edit a site`,
      })),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] !== u || t[14] !== c
    ? ((E = u.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: c },
      )),
      (t[13] = u),
      (t[14] = c),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, R.jsx)(w, { "aria-hidden": !0, className: `icon-xs` })), (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] !== i || t[18] !== E
    ? ((O = (0, R.jsx)(d, {
        tooltipContent: T,
        children: (0, R.jsx)(l, {
          "aria-label": E,
          color: `ghostTertiary`,
          size: `composer`,
          uniform: !0,
          onClick: i,
          children: D,
        }),
      })),
      (t[17] = i),
      (t[18] = E),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, R.jsx)(s, {
        id: `appgenPage.settings.tooltip`,
        defaultMessage: `Settings`,
        description: `Tooltip for opening site settings from the sites list`,
      })),
      (t[20] = k))
    : (k = t[20]);
  let j;
  t[21] !== u || t[22] !== c
    ? ((j = u.formatMessage(
        {
          id: `appgenPage.openSettings`,
          defaultMessage: `Open settings for {siteTitle}`,
          description: `Accessible label for opening site settings from the sites list`,
        },
        { siteTitle: c },
      )),
      (t[21] = u),
      (t[22] = c),
      (t[23] = j))
    : (j = t[23]);
  let M;
  t[24] !== f || t[25] !== a
    ? ((M = () => {
        f(x(a));
      }),
      (t[24] = f),
      (t[25] = a),
      (t[26] = M))
    : (M = t[26]);
  let N;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, R.jsx)(_, { "aria-hidden": !0, className: `icon-xs` })), (t[27] = N))
    : (N = t[27]);
  let F;
  t[28] !== j || t[29] !== M
    ? ((F = (0, R.jsx)(d, {
        tooltipContent: k,
        children: (0, R.jsx)(l, {
          "aria-label": j,
          color: `ghostTertiary`,
          size: `composer`,
          uniform: !0,
          onClick: M,
          children: N,
        }),
      })),
      (t[28] = j),
      (t[29] = M),
      (t[30] = F))
    : (F = t[30]);
  let I;
  return (
    t[31] !== O || t[32] !== F || t[33] !== C
      ? ((I = (0, R.jsxs)(`div`, {
          className: `pointer-events-auto relative z-10 flex items-center gap-2 pl-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:pl-2`,
          children: [C, O, F],
        })),
        (t[31] = O),
        (t[32] = F),
        (t[33] = C),
        (t[34] = I))
      : (I = t[34]),
    I
  );
}
export { z as AppgenPage };
//# sourceMappingURL=appgen-page.js.map
