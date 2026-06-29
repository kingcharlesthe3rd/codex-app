import { s as e } from "./chunk-Bj-mKKzh.js";
import { Gn as t, U as n, r, zr as i } from "./src-2.js";
import {
  Ho as a,
  Qn as o,
  Vo as s,
  ar as c,
  et as l,
  g as u,
  gt as d,
  ir as f,
  j as p,
  nt as m,
  ut as h,
  w as g,
} from "./app-server-manager-signals.js";
import { n as _, t as v } from "./jsx-runtime.js";
import { t as y } from "./clsx.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import { I as b, P as x, R as S, a as C, h as w, lt as T, u as E } from "./vscode-api.js";
import { i as D } from "./react.js";
import { o as O, r as k } from "./lib-2.js";
import { m as A } from "./chunk-9.js";
import { t as j } from "./branch.js";
import "./persisted-signal.js";
import "./rpc-2.js";
import { o as M } from "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks.js";
import { t as N } from "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-auth.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import { t as ee } from "./tooltip.js";
import "./route-scope.js";
import "./prompt-text-CsQ_-ZN9.js";
import "./use-environment.js";
import { k as te, t as ne } from "./composer-view-state.js";
import "./mention-item.js";
import "./use-collaboration-mode.js";
import "./use-model-settings.js";
import { t as re } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import { t as P } from "./use-codex-home.js";
import "./os-info.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./file-kind.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request-D.js";
import "./mime-types.js";
import "./model-queries.js";
import { n as ie } from "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries-d92z-WnW.js";
import { n as ae, t as oe } from "./composer-footer-CY-87K58.js";
import "./home-row-layout.js";
import "./proxy.js";
import "./x.js";
import "./projectless-thread.js";
import { t as se } from "./local-conversation-title-signals.js";
import "./sumBy.js";
import "./git-current-branch-query.js";
import "./app-intl-signal.js";
import { t as ce } from "./with-window.js";
import { n as le } from "./is-compact-window-context.js";
import "./use-is-remote-host.js";
import "./folder.js";
import "./notebook.js";
import "./settings.cog.js";
import { t as ue } from "./codex.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import { t as F } from "./check-md.js";
import "./chevron-right.js";
import "./select-project.js";
import "./electron-menu-shortcuts.js";
import "./local-task-row-signals.js";
import "./sidebar-project-group-signals.js";
import "./pinned-threads-query.js";
import "./sidebar-thread-list-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty-b.js";
import "./arrow-left.js";
import "./compose.js";
import "./checkbox.js";
import "./minus.js";
import "./use-rate-limit.js";
import "./plan-management-state.js";
import "./upgrade-plan-dialog-launcher.js";
import "./x-circle.js";
import "./search.js";
import "./add-project-menu-items.js";
import { t as de } from "./local-active-workspace-root-dropdown.js";
import { r as fe, t as pe } from "./dropdown.js";
import "./globe.js";
import { t as I } from "./chevron.js";
import "./use-app-server-connection-state.js";
import { t as L } from "./cloud.js";
import { t as R } from "./macbook.js";
import "./worktree.js";
import "./workspace-root-icon.js";
import "./copy.js";
import "./plus.js";
import "./gh-cli-status-query.js";
import "./use-git-current-branch.js";
import "./local-environments.js";
import { r as me } from "./local-environment-selection.js";
import { t as he } from "./app-server-connection-state.js";
import "./alert-1.js";
import "./star.js";
import "./bullet-separator.js";
import "./speedometer.js";
import "./rate-limit-summary.js";
import "./sortBy.js";
/* empty css                    */ import "./use-connected-remote-connections.js";
import { a as ge } from "./thread-handoff-composer-block-state.js";
import "./use-git-default-branch.js";
import "./regenerate.js";
import "./slash-command-item.js";
import "./diff-stats.js";
import "./send-to-cloud.js";
import { X as _e } from "./git-branch-picker-dropdown-content.js";
import "./codex-analytics-attribution.js";
import "./gh-pull-request-status-query.js";
import "./summary-panel-row.js";
import "./thread-handoff-store-VUgc-kO5.js";
import "./git-submodule-paths-query.js";
import { t as ve } from "./worktree-environment-dropdown.js";
import { n as ye, r as be, t as xe } from "./composer-footer-branch-switcher.js";
import "./git-branch-switcher.js";
import "./use-git-recent-branches.js";
import { n as Se, t as Ce } from "./local-remote-dropdown-0_tW-3uQ.js";
import "./dock.js";
import "./use-codex-worktrees.js";
var we = T(),
  z = e(_(), 1),
  B = v();
function Te(e) {
  let t = (0, we.c)(41),
    { composerMode: n, setComposerMode: r } = e,
    i = b(te),
    [a, s] = (0, z.useState)(!1),
    c = D(ne),
    l = ie(),
    { data: u, isLoading: d } = o(l.cwd, l.hostConfig, `cloud_follow_up_local_remote_dropdown`),
    f = u?.root != null,
    p = i?.type === `cloud` && i.hasAppliedCodeLocally,
    m,
    h;
  (t[0] !== p || t[1] !== r
    ? ((m = () => {
        p && r(`local`);
      }),
      (h = [p, r]),
      (t[0] = p),
      (t[1] = r),
      (t[2] = m),
      (t[3] = h))
    : ((m = t[2]), (h = t[3])),
    (0, z.useEffect)(m, h));
  let g, _;
  (t[4] !== n || t[5] !== f || t[6] !== d || t[7] !== r
    ? ((g = () => {
        d || f || (n !== `local` && r(`local`));
      }),
      (_ = [n, f, d, r]),
      (t[4] = n),
      (t[5] = f),
      (t[6] = d),
      (t[7] = r),
      (t[8] = g),
      (t[9] = _))
    : ((g = t[8]), (_ = t[9])),
    (0, z.useEffect)(g, _));
  let v;
  t[10] === n
    ? (v = t[11])
    : ((v = n === `local` ? (0, B.jsx)(O, { ...V.local }) : (0, B.jsx)(O, { ...V.cloud })),
      (t[10] = n),
      (t[11] = v));
  let y = v,
    x;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, B.jsx)(O, { ...V.tooltip })), (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] === n
    ? (S = t[14])
    : ((S =
        n === `cloud`
          ? (0, B.jsx)(L, { className: `icon-xs` })
          : (0, B.jsx)(R, { className: `icon-xs` })),
      (t[13] = n),
      (t[14] = S));
  let C;
  t[15] === y
    ? (C = t[16])
    : ((C = (0, B.jsx)(ae, { collapse: `xs`, className: `max-w-40 truncate`, children: y })),
      (t[15] = y),
      (t[16] = C));
  let w;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, B.jsx)(I, { className: `icon-2xs text-token-input-placeholder-foreground` })),
      (t[17] = w))
    : (w = t[17]);
  let T;
  t[18] !== S || t[19] !== C
    ? ((T = (0, B.jsx)(ee, {
        tooltipContent: x,
        children: (0, B.jsxs)(re, {
          size: `composerSm`,
          color: `ghost`,
          className: `min-w-0`,
          children: [S, C, w],
        }),
      })),
      (t[18] = S),
      (t[19] = C),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, B.jsx)(fe.Title, {
        children: (0, B.jsx)(O, {
          id: `composer.mode.newTask.header`,
          defaultMessage: `Continue in`,
          description: `Header label above agent mode options`,
        }),
      })),
      (t[21] = E))
    : (E = t[21]);
  let k = n === `local` ? F : void 0,
    A;
  t[22] !== r || t[23] !== c
    ? ((A = () => {
        (c(`local`), r(`local`), s(!1));
      }),
      (t[22] = r),
      (t[23] = c),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, B.jsx)(O, { ...V.local })), (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] !== k || t[27] !== A
    ? ((M = (0, B.jsx)(fe.Item, { LeftIcon: R, RightIcon: k, onClick: A, children: j })),
      (t[26] = k),
      (t[27] = A),
      (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] !== n || t[30] !== f || t[31] !== r || t[32] !== c
    ? ((N = f
        ? (0, B.jsx)(fe.Item, {
            LeftIcon: L,
            RightIcon: n === `cloud` ? F : void 0,
            onClick: () => {
              (c(`cloud`), r(`cloud`), s(!1));
            },
            children: (0, B.jsx)(O, { ...V.cloud }),
          })
        : null),
      (t[29] = n),
      (t[30] = f),
      (t[31] = r),
      (t[32] = c),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] !== M || t[35] !== N
    ? ((P = (0, B.jsxs)(`div`, { className: `flex w-44 flex-col`, children: [E, M, N] })),
      (t[34] = M),
      (t[35] = N),
      (t[36] = P))
    : (P = t[36]);
  let oe;
  return (
    t[37] !== a || t[38] !== T || t[39] !== P
      ? ((oe = (0, B.jsx)(pe, { open: a, onOpenChange: s, triggerButton: T, children: P })),
        (t[37] = a),
        (t[38] = T),
        (t[39] = P),
        (t[40] = oe))
      : (oe = t[40]),
    oe
  );
}
var V = k({
  local: {
    id: `composer.cloudFollowUp.local`,
    defaultMessage: `Local`,
    description: `Local follow-up option`,
  },
  cloud: {
    id: `composer.cloudFollowUp.cloud`,
    defaultMessage: `Cloud`,
    description: `Cloud follow-up option`,
  },
  tooltip: {
    id: `composer.cloudFollowUp.whereRun`,
    defaultMessage: `Where should this follow-up run?`,
    description: `Tooltip for choosing between local and cloud follow-ups`,
  },
});
function Ee(e) {
  let t = (0, we.c)(32),
    { startingState: n, setStartingState: r } = e,
    [i, a] = (0, z.useState)(!1),
    o;
  t[0] === n
    ? (o = t[1])
    : ((o =
        n === `working-tree`
          ? (0, B.jsx)(O, { ...H.workingTree })
          : (0, B.jsx)(O, { ...H.directFollowUp })),
      (t[0] = n),
      (t[1] = o));
  let s = o,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, B.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, B.jsx)(O, {
          id: `composer.remote.startingPoint`,
          defaultMessage: `What code should this task start from?`,
          description: `Section label for remote starting point selector`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l = n === `working-tree`,
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, B.jsx)(j, { className: `icon-xs` })), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d = (0, B.jsx)(be, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: l,
        children: u,
      })),
      (t[4] = l),
      (t[5] = d));
  let f;
  t[6] === s
    ? (f = t[7])
    : ((f = (0, B.jsx)(`span`, { className: `truncate max-[440px]:hidden`, children: s })),
      (t[6] = s),
      (t[7] = f));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, B.jsx)(I, { className: `icon-2xs text-token-input-placeholder-foreground` })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== d || t[10] !== f
    ? ((m = (0, B.jsx)(ee, {
        tooltipContent: c,
        children: (0, B.jsxs)(re, { size: `composerSm`, color: `ghost`, children: [d, f, p] }),
      })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, B.jsx)(O, {
        id: `composer.remote.currentEditsSuffix.followUp`,
        defaultMessage: `Create a new task that references this cloud task.`,
        description: `Suffix text indicating the selection includes current edits`,
      })),
      (t[12] = h))
    : (h = t[12]);
  let g = n === `working-tree` ? F : void 0,
    _;
  t[13] === r
    ? (_ = t[14])
    : ((_ = () => {
        (r(`working-tree`), a(!1));
      }),
      (t[13] = r),
      (t[14] = _));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, B.jsx)(O, { ...H.workingTree })), (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== g || t[17] !== _
    ? ((y = (0, B.jsx)(ee, {
        tooltipContent: h,
        children: (0, B.jsx)(fe.Item, { LeftIcon: De, RightIcon: g, onClick: _, children: v }),
      })),
      (t[16] = g),
      (t[17] = _),
      (t[18] = y))
    : (y = t[18]);
  let b = n === `direct-follow-up` ? F : void 0,
    x;
  t[19] === r
    ? (x = t[20])
    : ((x = () => {
        (r(`direct-follow-up`), a(!1));
      }),
      (t[19] = r),
      (t[20] = x));
  let S;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, B.jsx)(O, { ...H.directFollowUp })), (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== b || t[23] !== x
    ? ((C = (0, B.jsx)(fe.Item, { LeftIcon: j, RightIcon: b, onClick: x, children: S })),
      (t[22] = b),
      (t[23] = x),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] !== y || t[26] !== C
    ? ((w = (0, B.jsxs)(`div`, { className: `flex flex-col gap-1 pt-1`, children: [y, C] })),
      (t[25] = y),
      (t[26] = C),
      (t[27] = w))
    : (w = t[27]);
  let T;
  return (
    t[28] !== i || t[29] !== w || t[30] !== m
      ? ((T = (0, B.jsx)(pe, { open: i, onOpenChange: a, triggerButton: m, children: w })),
        (t[28] = i),
        (t[29] = w),
        (t[30] = m),
        (t[31] = T))
      : (T = t[31]),
    T
  );
}
function De(e) {
  let t = (0, we.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, B.jsx)(be, {
          borderColor: `border-token-dropdown-background`,
          children: (0, B.jsx)(j, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var H = k({
  workingTree: {
    id: `composer.remote.localWorkingTree`,
    defaultMessage: `Use local changes`,
    description: `Label for local working tree selection in remote composer`,
  },
  directFollowUp: {
    id: `composer.remote.directFollowUp`,
    defaultMessage: `Don't use local changes`,
    description: `Label for direct follow-up selection in remote composer`,
  },
});
function Oe(e) {
  return e !== `cloud`;
}
var U = C(w, `has-custom-cli-executable`, { staleTime: E.FIVE_SECONDS });
function ke() {
  let e = (0, we.c)(2),
    { data: t } = b(U);
  if (!(t?.hasCustomCliExecutable ?? !1)) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, B.jsx)(O, {
        id: `composer.customCliTooltip`,
        defaultMessage: `Using a custom CLI executable`,
        description: `Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, B.jsx)(ee, {
          tooltipContent: n,
          children: (0, B.jsx)(re, {
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            className: `-mx-2`,
            children: (0, B.jsx)(ue, { className: `icon-xs text-token-editor-warning-foreground` }),
          }),
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var Ae = S(w, (e, { get: t }) => {
  let n = t(d, e) ?? 0,
    r = t(l, e) ?? 0;
  return n > 0 || r > 0;
});
function je(e) {
  let o = (0, we.c)(185),
    {
      variant: l,
      composerMode: d,
      setComposerMode: _,
      conversationId: v,
      isResponseInProgress: S,
      asyncThreadStartingState: C,
      setStartingState: w,
      cloudFollowUpStartingState: T,
      setCloudFollowUpStartingState: E,
      worktreeEnvironmentHostId: D,
      worktreeEnvironmentWorkspaceRoot: k,
      codexHome: ee,
      hideRunLocationDropdown: ne,
      showWorkspaceDropdown: ue,
      gitRootForStartingState: F,
      showFooterBranchWhen: fe,
      freeUpsellButton: pe,
      remoteConfig: I,
      activeProjectIdOverride: L,
    } = e,
    R = l === void 0 ? `default` : l,
    he = D === void 0 ? a : D,
    be = k === void 0 ? null : k,
    z = ne === void 0 ? !1 : ne,
    V = ue === void 0 ? !0 : ue,
    De = fe === void 0 ? `local` : fe,
    H = A(),
    U = b(te),
    je;
  o[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((je = le()), (o[0] = je)) : (je = o[0]);
  let Ne = je,
    Pe = d !== `cloud` && U?.type !== `cloud`,
    W = U?.type === `local` ? U.localConversationId : null,
    G = W ?? v,
    Fe = x(g, G),
    Ie = G != null && !Fe,
    K = ie(G),
    Le = x(m, G),
    Re = x(h, G),
    ze = x(Ae, G),
    Be = U != null || ze,
    Ve = I?.currentHostId ?? `local`,
    He = U?.type,
    Ue;
  o[1] !== d || o[2] !== Ve || o[3] !== ze || o[4] !== He
    ? ((Ue = ge({
        composerMode: d,
        draftRemoteHostId: Ve,
        followUpType: He,
        hasStartedBranchConversation: ze,
      })),
      (o[1] = d),
      (o[2] = Ve),
      (o[3] = ze),
      (o[4] = He),
      (o[5] = Ue))
    : (Ue = o[5]);
  let We = Ue,
    q = We ? Ve : Le,
    Ge = !We && q !== `local`,
    Ke = x(u, W),
    { data: qe } = N(i.THREAD_PROJECT_ASSIGNMENTS),
    Je = r({ cwd: Ke, assignment: W == null ? void 0 : qe?.[W] }),
    Ye = P(K.hostId) ?? ee,
    Xe = W ?? v,
    Ze = n(Je, Ye),
    Qe = M(`1115442235`),
    $e = Ze,
    et = x(p, G) ?? !1,
    tt = x(se, G),
    [nt] = s(`remote_connections`),
    [rt] = s(`remote_control_connections`),
    it;
  o[6] === nt ? (it = o[7]) : ((it = nt ?? []), (o[6] = nt), (o[7] = it));
  let at;
  o[8] === rt ? (at = o[9]) : ((at = rt ?? []), (o[8] = rt), (o[9] = at));
  let ot;
  o[10] !== it || o[11] !== at
    ? ((ot = [...it, ...at]), (o[10] = it), (o[11] = at), (o[12] = ot))
    : (ot = o[12]);
  let st = ot,
    ct;
  o[13] !== st || o[14] !== q
    ? ((ct = st.find((e) => e.hostId === q) ?? null), (o[13] = st), (o[14] = q), (o[15] = ct))
    : (ct = o[15]);
  let lt = ct,
    ut;
  o[16] !== K.cwd || o[17] !== Ge || o[18] !== I || o[19] !== q
    ? ((ut = q === `local` ? null : Ge ? K.cwd : (I?.getProjectPathForHostId(q) ?? null)),
      (o[16] = K.cwd),
      (o[17] = Ge),
      (o[18] = I),
      (o[19] = q),
      (o[20] = ut))
    : (ut = o[20]);
  let dt = ut,
    ft;
  o[21] !== I?.currentHostId || o[22] !== st
    ? ((ft = st.find((e) => e.hostId === I?.currentHostId) ?? null),
      (o[21] = I?.currentHostId),
      (o[22] = st),
      (o[23] = ft))
    : (ft = o[23]);
  let pt = ft,
    mt;
  o[24] === I
    ? (mt = o[25])
    : ((mt = I?.getProjectPathForHostId(I?.currentHostId ?? null) ?? null),
      (o[24] = I),
      (o[25] = mt));
  let ht = mt;
  (lt?.displayName, I?.currentHostId, pt?.displayName);
  let gt = q === `local` ? null : (lt?.displayName ?? null),
    _t;
  o[26] !== dt || o[27] !== q || o[28] !== gt
    ? ((_t = { hostId: q, connectionDisplayName: gt, projectPath: dt }),
      (o[26] = dt),
      (o[27] = q),
      (o[28] = gt),
      (o[29] = _t))
    : (_t = o[29]);
  let vt = I?.currentHostId ?? null,
    yt = pt?.displayName ?? null,
    bt;
  o[30] !== ht || o[31] !== vt || o[32] !== yt
    ? ((bt = { hostId: vt, connectionDisplayName: yt, projectPath: ht }),
      (o[30] = ht),
      (o[31] = vt),
      (o[32] = yt),
      (o[33] = bt))
    : (bt = o[33]);
  let xt;
  o[34] !== Be || o[35] !== _t || o[36] !== bt
    ? ((xt = {
        isAttachedToStartedTask: Be,
        existingRemoteThreadState: _t,
        draftNewThreadRemoteSelectionState: bt,
      }),
      (o[34] = Be),
      (o[35] = _t),
      (o[36] = bt),
      (o[37] = xt))
    : (xt = o[37]);
  let J = xt,
    Y = Pe && !Ie ? K.cwd : null,
    X = K.hostConfig,
    St;
  o[38] !== Y || o[39] !== X
    ? ((St = {
        cwd: Y,
        enabled: !0,
        hostConfig: X,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (o[38] = Y),
      (o[39] = X),
      (o[40] = St))
    : (St = o[40]);
  let Z = x(f, St),
    Ct;
  o[41] !== Y || o[42] !== X
    ? ((Ct = {
        cwd: Y,
        enabled: !0,
        hostConfig: X,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (o[41] = Y),
      (o[42] = X),
      (o[43] = Ct))
    : (Ct = o[43]);
  let wt = x(c, Ct),
    Tt;
  o[44] !== Y || o[45] !== X
    ? ((Tt = { cwd: Y, hostConfig: X, showErrorToast: !0 }), (o[44] = Y), (o[45] = X), (o[46] = Tt))
    : (Tt = o[46]);
  let { canCreateGitRepository: Et, createGitRepository: Dt, isCreatingGitRepository: Ot } = _e(Tt),
    kt = Y != null && Z != null,
    Q = Pe && kt && Z?.root == null,
    At = !Et || Ot || !kt || wt,
    $ = Q ? null : pe,
    jt = d === `worktree`,
    Mt = jt ? be : null,
    Nt;
  o[47] !== Mt || o[48] !== he
    ? ((Nt = { hostId: he, workspaceRoot: Mt }), (o[47] = Mt), (o[48] = he), (o[49] = Nt))
    : (Nt = o[49]);
  let {
      environments: Pt,
      isLoading: Ft,
      error: It,
      resolvedConfigPath: Lt,
      updateSelection: Rt,
    } = me(Nt),
    zt;
  o[50] !== U ||
  o[51] !== jt ||
  o[52] !== It ||
  o[53] !== Ft ||
  o[54] !== H ||
  o[55] !== Lt ||
  o[56] !== Rt ||
  o[57] !== Pt
    ? ((zt =
        !U && jt
          ? (0, B.jsx)(ve, {
              environments: Pt,
              isLoading: Ft,
              hasError: It != null,
              selectedConfigPath: Lt,
              onSelectConfigPath: Rt,
              onOpenSettings: () => {
                H(`/settings/local-environments`);
              },
            })
          : null),
      (o[50] = U),
      (o[51] = jt),
      (o[52] = It),
      (o[53] = Ft),
      (o[54] = H),
      (o[55] = Lt),
      (o[56] = Rt),
      (o[57] = Pt),
      (o[58] = zt))
    : (zt = o[58]);
  let Bt = zt,
    Vt,
    Ht,
    Ut,
    Wt,
    Gt,
    Kt,
    qt,
    Jt,
    Yt;
  if (
    o[59] !== L ||
    o[60] !== C ||
    o[61] !== G ||
    o[62] !== Re?.role ||
    o[63] !== tt ||
    o[64] !== T ||
    o[65] !== d ||
    o[66] !== Dt ||
    o[67] !== K ||
    o[68] !== U ||
    o[69] !== W ||
    o[70] !== J ||
    o[71] !== Z ||
    o[72] !== F ||
    o[73] !== z ||
    o[74] !== X ||
    o[75] !== Ie ||
    o[76] !== et ||
    o[77] !== At ||
    o[78] !== Ot ||
    o[79] !== wt ||
    o[80] !== S ||
    o[81] !== Ze ||
    o[82] !== Qe ||
    o[83] !== Xe ||
    o[84] !== q ||
    o[85] !== E ||
    o[86] !== _ ||
    o[87] !== w ||
    o[88] !== Q ||
    o[89] !== $e ||
    o[90] !== De ||
    o[91] !== V ||
    o[92] !== $ ||
    o[93] !== We ||
    o[94] !== R ||
    o[95] !== Bt
  ) {
    let e = y(
        `flex flex-nowrap items-center gap-1 overflow-hidden`,
        R === `home`
          ? `-mx-px -mt-4.5 rounded-b-2xl bg-token-side-bar-background dark:bg-token-bg-fog px-2 pt-[25px] pb-2`
          : `pr-2`,
      ),
      n;
    o[105] !== C || o[106] !== d || o[107] !== U || o[108] !== F || o[109] !== X || o[110] !== w
      ? ((n =
          !U && (d === `cloud` || d === `worktree`)
            ? (0, B.jsx)(ye, {
                startingState: C,
                setStartingState: w,
                hostConfig: X,
                gitRootOverride: F,
                branchSource: d === `worktree` ? `worktree` : `cloud`,
              })
            : null),
        (o[105] = C),
        (o[106] = d),
        (o[107] = U),
        (o[108] = F),
        (o[109] = X),
        (o[110] = w),
        (o[111] = n))
      : (n = o[111]);
    let r = n,
      i;
    o[112] !== d || o[113] !== r || o[114] !== Bt
      ? ((i =
          d === `worktree` && Bt
            ? (0, B.jsxs)(`div`, {
                className: `flex flex-nowrap items-center gap-1`,
                children: [Bt, r],
              })
            : r),
        (o[112] = d),
        (o[113] = r),
        (o[114] = Bt),
        (o[115] = i))
      : (i = o[115]);
    let a = i,
      s;
    o[116] !== G ||
    o[117] !== tt ||
    o[118] !== K.cwd ||
    o[119] !== et ||
    o[120] !== Ze ||
    o[121] !== Qe
      ? ((s =
          Qe && Se({ isCompactWindow: Ne }) && G != null && K.cwd != null
            ? { conversationTitle: tt, cwd: t(K.cwd), disabled: et, isWorktreeConversation: Ze }
            : null),
        (o[116] = G),
        (o[117] = tt),
        (o[118] = K.cwd),
        (o[119] = et),
        (o[120] = Ze),
        (o[121] = Qe),
        (o[122] = s))
      : (s = o[122]);
    let c = s,
      l = G != null && q !== `local` && Re?.role === `follower`,
      u = (De === `always` || d === `local`) && !l && !Ie && !wt;
    Z?.root;
    let f;
    (o[123] !== W || o[124] !== Z?.root || o[125] !== X || o[126] !== Q || o[127] !== u
      ? ((f =
          u && !Q
            ? (0, B.jsx)(xe, {
                gitRoot: Z?.root ?? null,
                hostConfig: X,
                localConversationId: W,
                shouldShow: !0,
                align: `start`,
              })
            : null),
        (o[123] = W),
        (o[124] = Z?.root),
        (o[125] = X),
        (o[126] = Q),
        (o[127] = u),
        (o[128] = f))
      : (f = o[128]),
      (Wt = f));
    let p;
    (o[129] !== d ||
    o[130] !== U ||
    o[131] !== Wt ||
    o[132] !== J ||
    o[133] !== c ||
    o[134] !== z ||
    o[135] !== S ||
    o[136] !== Xe ||
    o[137] !== _ ||
    o[138] !== $e ||
    o[139] !== a
      ? ((p =
          U?.type === `cloud`
            ? (0, B.jsx)(Te, { composerMode: d, setComposerMode: _ })
            : (0, B.jsx)(Ce, {
                composerMode: d,
                setComposerMode: _,
                conversationId: Xe,
                footerRemoteState: J,
                disabled: $e,
                hideModeDropdown: z,
                allowWorktree: !U && !S,
                threadHandoff: c,
                worktreeLabelOnly: $e,
                secondaryControls: a,
                modeAdjacentControl: Wt,
              })),
        (o[129] = d),
        (o[130] = U),
        (o[131] = Wt),
        (o[132] = J),
        (o[133] = c),
        (o[134] = z),
        (o[135] = S),
        (o[136] = Xe),
        (o[137] = _),
        (o[138] = $e),
        (o[139] = a),
        (o[140] = p))
      : (p = o[140]),
      (Ut = p));
    let m;
    (o[141] !== L || o[142] !== d || o[143] !== U || o[144] !== V || o[145] !== R
      ? ((m =
          V && Oe(d) && !U
            ? (0, B.jsx)(ce, {
                electron: !0,
                children: (0, B.jsx)(de, {
                  activeProjectIdOverride: L,
                  variant: R === `home` ? `home` : `default`,
                }),
              })
            : null),
        (o[141] = L),
        (o[142] = d),
        (o[143] = U),
        (o[144] = V),
        (o[145] = R),
        (o[146] = m))
      : (m = o[146]),
      (Yt = m));
    let h;
    o[147] !== d || o[148] !== U || o[149] !== $
      ? ((h = !1), (o[147] = d), (o[148] = U), (o[149] = $), (o[150] = h))
      : (h = o[150]);
    let g = !!U || h,
      v;
    (o[151] === g
      ? (v = o[152])
      : ((v = g ? (0, B.jsx)(ke, {}) : null), (o[151] = g), (o[152] = v)),
      (Jt = v));
    let b;
    (o[153] !== T || o[154] !== d || o[155] !== U || o[156] !== E
      ? ((b =
          d === `cloud` && U?.type === `cloud` && U.hasAppliedCodeLocally
            ? (0, B.jsx)(Ee, { startingState: T, setStartingState: E })
            : null),
        (o[153] = T),
        (o[154] = d),
        (o[155] = U),
        (o[156] = E),
        (o[157] = b))
      : (b = o[157]),
      (Gt = b));
    let x = We ? J.draftNewThreadRemoteSelectionState : J.existingRemoteThreadState,
      D;
    (o[158] !== Dt || o[159] !== At || o[160] !== Ot || o[161] !== Q || o[162] !== u
      ? ((D =
          u && Q
            ? (0, B.jsxs)(re, {
                className: `px-0`,
                color: `ghost`,
                size: `composerSm`,
                disabled: At,
                onClick: () => {
                  At || Dt();
                },
                children: [
                  (0, B.jsx)(j, { className: `icon-xs` }),
                  (0, B.jsx)(ae, {
                    collapse: `sm`,
                    className: `max-w-40 truncate text-sm`,
                    children: Ot
                      ? (0, B.jsx)(O, {
                          id: `codex.review.noDiff.gitInit.creating`,
                          defaultMessage: `Creating…`,
                          description: `Button label shown while git init is running from the diff empty state`,
                        })
                      : (0, B.jsx)(O, {
                          id: `codex.review.noDiff.gitInit.createRepository`,
                          defaultMessage: `Create git repository`,
                          description: `Button label to create a git repository from the diff empty state`,
                        }),
                  }),
                ],
              })
            : null),
        (o[158] = Dt),
        (o[159] = At),
        (o[160] = Ot),
        (o[161] = Q),
        (o[162] = u),
        (o[163] = D))
      : (D = o[163]),
      (Ht = D));
    let k = d === `local` && x.hostId != null && x.hostId !== `local`,
      A;
    (o[164] !== x || o[165] !== k
      ? ((A = k
          ? (0, B.jsx)(`div`, {
              className: `flex min-w-0 items-center gap-1`,
              children: (0, B.jsx)(Me, {
                hostId: x.hostId,
                connectionDisplayName: x.connectionDisplayName,
                projectPath: x.projectPath,
              }),
            })
          : null),
        (o[164] = x),
        (o[165] = k),
        (o[166] = A))
      : (A = o[166]),
      (Kt = A),
      (Vt = oe),
      (qt = y(e, `flex-wrap gap-2 overflow-visible`, R === `default` && `pl-2`)),
      (o[59] = L),
      (o[60] = C),
      (o[61] = G),
      (o[62] = Re?.role),
      (o[63] = tt),
      (o[64] = T),
      (o[65] = d),
      (o[66] = Dt),
      (o[67] = K),
      (o[68] = U),
      (o[69] = W),
      (o[70] = J),
      (o[71] = Z),
      (o[72] = F),
      (o[73] = z),
      (o[74] = X),
      (o[75] = Ie),
      (o[76] = et),
      (o[77] = At),
      (o[78] = Ot),
      (o[79] = wt),
      (o[80] = S),
      (o[81] = Ze),
      (o[82] = Qe),
      (o[83] = Xe),
      (o[84] = q),
      (o[85] = E),
      (o[86] = _),
      (o[87] = w),
      (o[88] = Q),
      (o[89] = $e),
      (o[90] = De),
      (o[91] = V),
      (o[92] = $),
      (o[93] = We),
      (o[94] = R),
      (o[95] = Bt),
      (o[96] = Vt),
      (o[97] = Ht),
      (o[98] = Ut),
      (o[99] = Wt),
      (o[100] = Gt),
      (o[101] = Kt),
      (o[102] = qt),
      (o[103] = Jt),
      (o[104] = Yt));
  } else
    ((Vt = o[96]),
      (Ht = o[97]),
      (Ut = o[98]),
      (Wt = o[99]),
      (Gt = o[100]),
      (Kt = o[101]),
      (qt = o[102]),
      (Jt = o[103]),
      (Yt = o[104]));
  let Xt = R === `home` ? Yt : Ut,
    Zt = U?.type === `cloud` ? Wt : null,
    Qt = R === `home` ? Ut : Yt,
    $t;
  o[167] !== Xt || o[168] !== Zt || o[169] !== Qt
    ? (($t = (0, B.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-nowrap items-center gap-1`,
        children: [Xt, Zt, Qt],
      })),
      (o[167] = Xt),
      (o[168] = Zt),
      (o[169] = Qt),
      (o[170] = $t))
    : ($t = o[170]);
  let en;
  o[171] !== d || o[172] !== Gt
    ? ((en =
        d === `cloud`
          ? (0, B.jsx)(`div`, { className: `flex min-w-0 items-center gap-1`, children: Gt })
          : null),
      (o[171] = d),
      (o[172] = Gt),
      (o[173] = en))
    : (en = o[173]);
  let tn;
  o[174] !== Ht || o[175] !== Kt || o[176] !== $ || o[177] !== Jt
    ? ((tn =
        Kt || Ht || $ || Jt
          ? (0, B.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-3`,
              children: [Kt, Ht, $, Jt],
            })
          : null),
      (o[174] = Ht),
      (o[175] = Kt),
      (o[176] = $),
      (o[177] = Jt),
      (o[178] = tn))
    : (tn = o[178]);
  let nn;
  return (
    o[179] !== Vt || o[180] !== qt || o[181] !== $t || o[182] !== en || o[183] !== tn
      ? ((nn = (0, B.jsxs)(Vt, { className: qt, children: [$t, en, tn] })),
        (o[179] = Vt),
        (o[180] = qt),
        (o[181] = $t),
        (o[182] = en),
        (o[183] = tn),
        (o[184] = nn))
      : (nn = o[184]),
    nn
  );
}
function Me(e) {
  let t = (0, we.c)(11),
    { hostId: n, connectionDisplayName: r, projectPath: i } = e;
  if (n == null) return null;
  let a = i == null,
    o = r ?? n,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = (0, B.jsx)(`span`, { className: `max-w-40 min-w-0 truncate`, children: o })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n ? (c = t[3]) : ((c = (0, B.jsx)(he, { hostId: n })), (t[2] = n), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, B.jsxs)(ae, {
        collapse: `sm`,
        className: `flex min-w-0 items-center gap-1 text-sm`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== i || t[8] !== a || t[9] !== l
      ? ((u = (0, B.jsx)(ee, { tooltipContent: i, disabled: a, children: l })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
export { je as ComposerExternalFooter };
//# sourceMappingURL=composer-external-footer.js.map
