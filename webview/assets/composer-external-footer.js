import { n as e, s as t } from "./rolldown-runtime.js";
import {
  D as n,
  E as r,
  Gc as i,
  Hn as a,
  Ht as o,
  Jt as s,
  M as c,
  Ol as l,
  P as u,
  Ut as d,
  Wt as f,
  Ya as p,
  _t as m,
  a as h,
  ac as g,
  gt as _,
  hi as v,
  j as y,
  kl as b,
  lt as x,
  oc as S,
  r as C,
  sc as w,
  tc as T,
  ut as E,
  xl as D,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  N as O,
  P as k,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Co as A,
  Dc as j,
  Dd as M,
  Ec as ee,
  Ed as te,
  Es as ne,
  Fd as re,
  Jp as ie,
  Js as ae,
  Mf as N,
  Nf as oe,
  Sp as se,
  Ts as ce,
  Vd as le,
  Vl as ue,
  Wl as de,
  Xa as P,
  Ya as F,
  Yp as I,
  _o as fe,
  am as L,
  au as pe,
  du as me,
  fp as R,
  im as he,
  mp as z,
  od as ge,
  qs as _e,
  sd as ve,
  uu as ye,
  xp as B,
  yo as V,
  zd as be,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  $n as xe,
  Ca as Se,
  Cv as Ce,
  Fa as we,
  Kl as H,
  Ma as Te,
  Po as Ee,
  Qn as De,
  Sv as Oe,
  To as ke,
  _v as Ae,
  aw as je,
  cC as Me,
  cw as U,
  go as Ne,
  iu as Pe,
  iw as Fe,
  mo as Ie,
  oC as W,
  ou as Le,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  Ct as Re,
  wt as ze,
  xn as Be,
  yn as Ve,
} from "./app-initial~app-main~automations-page.js";
import {
  Cr as He,
  Tr as Ue,
  wt as We,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  c as Ge,
  l as Ke,
  n as qe,
  o as Je,
  r as Ye,
  s as Xe,
  u as Ze,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4.js";
import {
  g as Qe,
  h as $e,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  M as et,
  N as tt,
  at as nt,
  dt as rt,
  it,
  ut as at,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  Kn as ot,
  qn as st,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  i as ct,
  r as lt,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62.js";
import {
  n as ut,
  t as G,
} from "./app-initial~app-main~projects-index-page~remote-connections-settings~composer-external-footer-D.js";
import { n as K, t as dt } from "./worktree-environment-dropdown-CE-onk6F.js";
import {
  a as ft,
  i as q,
  n as pt,
  o as mt,
  r as ht,
  t as gt,
} from "./composer-footer-branch-switcher.js";
import {
  a as _t,
  c as vt,
  i as yt,
  n as bt,
  o as xt,
  r as St,
  s as Ct,
  t as wt,
} from "./local-remote-dropdown.js";
function Tt(e) {
  let t = (0, Et.c)(35),
    { composerMode: r, setComposerMode: i } = e,
    a = S(re),
    o = w(ge),
    [s, c] = (0, J.useState)(!1),
    l = st(),
    { data: u, isLoading: d } = n(l.cwd, l.hostConfig, `cloud_follow_up_local_remote_dropdown`),
    f = u?.root != null,
    p = o?.type === `cloud` && o.hasAppliedCodeLocally,
    m,
    h;
  (t[0] !== p || t[1] !== a
    ? ((m = () => {
        p && me(a, `local`);
      }),
      (h = [p, a]),
      (t[0] = p),
      (t[1] = a),
      (t[2] = m),
      (t[3] = h))
    : ((m = t[2]), (h = t[3])),
    (0, J.useEffect)(m, h));
  let g, _;
  (t[4] !== f || t[5] !== d || t[6] !== a
    ? ((g = () => {
        d || f || me(a, `local`);
      }),
      (_ = [f, d, a]),
      (t[4] = f),
      (t[5] = d),
      (t[6] = a),
      (t[7] = g),
      (t[8] = _))
    : ((g = t[7]), (_ = t[8])),
    (0, J.useEffect)(g, _));
  let v;
  t[9] === r
    ? (v = t[10])
    : ((v = r === `local` ? (0, Y.jsx)(U, { ...X.local }) : (0, Y.jsx)(U, { ...X.cloud })),
      (t[9] = r),
      (t[10] = v));
  let y = v,
    b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(U, { ...X.tooltip })), (t[11] = b))
    : (b = t[11]);
  let x;
  t[12] === r
    ? (x = t[13])
    : ((x =
        r === `cloud`
          ? (0, Y.jsx)(et, { className: `icon-xs` })
          : (0, Y.jsx)(O, { className: `icon-xs` })),
      (t[12] = r),
      (t[13] = x));
  let C;
  t[14] !== y || t[15] !== x
    ? ((C = (0, Y.jsx)(R, {
        tooltipContent: b,
        children: (0, Y.jsx)(qe, {
          categoryLabel: null,
          collapse: `xs`,
          icon: x,
          indicator: `chevron`,
          value: y,
          valueClassName: `max-w-40`,
        }),
      })),
      (t[14] = y),
      (t[15] = x),
      (t[16] = C))
    : (C = t[16]);
  let T;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Y.jsx)(V.Title, {
        children: (0, Y.jsx)(U, {
          id: `composer.mode.newTask.header`,
          defaultMessage: `Continue in`,
          description: `Header label above agent mode options`,
        }),
      })),
      (t[17] = T))
    : (T = t[17]);
  let E = r === `local` ? B : void 0,
    D;
  t[18] === i
    ? (D = t[19])
    : ((D = () => {
        (i(`local`), c(!1));
      }),
      (t[18] = i),
      (t[19] = D));
  let k;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(U, { ...X.local })), (t[20] = k))
    : (k = t[20]);
  let A;
  t[21] !== E || t[22] !== D
    ? ((A = (0, Y.jsx)(V.Item, { LeftIcon: O, RightIcon: E, onClick: D, children: k })),
      (t[21] = E),
      (t[22] = D),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] !== r || t[25] !== f || t[26] !== i
    ? ((j = f
        ? (0, Y.jsx)(V.Item, {
            LeftIcon: et,
            RightIcon: r === `cloud` ? B : void 0,
            onClick: () => {
              (i(`cloud`), c(!1));
            },
            children: (0, Y.jsx)(U, { ...X.cloud }),
          })
        : null),
      (t[24] = r),
      (t[25] = f),
      (t[26] = i),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== A || t[29] !== j
    ? ((M = (0, Y.jsxs)(`div`, { className: `flex w-44 flex-col`, children: [T, A, j] })),
      (t[28] = A),
      (t[29] = j),
      (t[30] = M))
    : (M = t[30]);
  let ee;
  return (
    t[31] !== s || t[32] !== M || t[33] !== C
      ? ((ee = (0, Y.jsx)(fe, { open: s, onOpenChange: c, triggerButton: C, children: M })),
        (t[31] = s),
        (t[32] = M),
        (t[33] = C),
        (t[34] = ee))
      : (ee = t[34]),
    ee
  );
}
var Et,
  J,
  Y,
  X,
  Dt = e(() => {
    ((Et = l()),
      T(),
      (J = t(b(), 1)),
      je(),
      A(),
      z(),
      r(),
      ot(),
      se(),
      tt(),
      k(),
      le(),
      Ye(),
      ve(),
      pe(),
      (Y = D()),
      (X = Fe({
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
      })));
  });
function Ot(e) {
  let t = (0, At.c)(30),
    { startingState: n, setStartingState: r } = e,
    [i, a] = (0, jt.useState)(!1),
    o;
  t[0] === n
    ? (o = t[1])
    : ((o =
        n === `working-tree`
          ? (0, Z.jsx)(U, { ...Mt.workingTree })
          : (0, Z.jsx)(U, { ...Mt.directFollowUp })),
      (t[0] = n),
      (t[1] = o));
  let s = o,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, Z.jsx)(U, {
          id: `composer.remote.startingPoint`,
          defaultMessage: `What code should this task start from?`,
          description: `Section label for remote starting point selector`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(U, {
        id: `composer.followUpStartingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the follow-up starting state control in the composer footer`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u = n === `working-tree`,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(ee, { className: `icon-xs` })), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = (0, Z.jsx)(ft, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: u,
        children: d,
      })),
      (t[5] = u),
      (t[6] = f));
  let p;
  t[7] !== s || t[8] !== f
    ? ((p = (0, Z.jsx)(R, {
        tooltipContent: c,
        children: (0, Z.jsx)(qe, {
          categoryLabel: l,
          collapse: `none`,
          icon: f,
          indicator: `chevron`,
          value: s,
          valueClassName: `max-[440px]:hidden`,
        }),
      })),
      (t[7] = s),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(U, {
        id: `composer.remote.currentEditsSuffix.followUp`,
        defaultMessage: `Create a new task that references this cloud task.`,
        description: `Suffix text indicating the selection includes current edits`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h = n === `working-tree` ? B : void 0,
    g;
  t[11] === r
    ? (g = t[12])
    : ((g = () => {
        (r(`working-tree`), a(!1));
      }),
      (t[11] = r),
      (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(U, { ...Mt.workingTree })), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== g || t[15] !== h
    ? ((v = (0, Z.jsx)(R, {
        tooltipContent: m,
        children: (0, Z.jsx)(V.Item, { LeftIcon: kt, RightIcon: h, onClick: g, children: _ }),
      })),
      (t[14] = g),
      (t[15] = h),
      (t[16] = v))
    : (v = t[16]);
  let y = n === `direct-follow-up` ? B : void 0,
    b;
  t[17] === r
    ? (b = t[18])
    : ((b = () => {
        (r(`direct-follow-up`), a(!1));
      }),
      (t[17] = r),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(U, { ...Mt.directFollowUp })), (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b
    ? ((S = (0, Z.jsx)(V.Item, { LeftIcon: ee, RightIcon: y, onClick: b, children: x })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== v || t[24] !== S
    ? ((C = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-1 pt-1`, children: [v, S] })),
      (t[23] = v),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== i || t[27] !== C || t[28] !== p
      ? ((w = (0, Z.jsx)(fe, { open: i, onOpenChange: a, triggerButton: p, children: C })),
        (t[26] = i),
        (t[27] = C),
        (t[28] = p),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function kt(e) {
  let t = (0, At.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(ft, {
          borderColor: `border-token-dropdown-background`,
          children: (0, Z.jsx)(ee, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var At,
  jt,
  Z,
  Mt,
  Nt = e(() => {
    ((At = l()),
      (jt = t(b(), 1)),
      je(),
      mt(),
      A(),
      z(),
      j(),
      se(),
      We(),
      Ye(),
      (Z = D()),
      (Mt = Fe({
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
      })));
  });
function Pt() {
  let e = (0, Ft.c)(2),
    { data: t } = w(It);
  if (!(t?.hasCustomCliExecutable ?? !1)) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(U, {
        id: `composer.customCliTooltip`,
        defaultMessage: `Using a custom CLI executable`,
        description: `Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(R, {
          tooltipContent: n,
          children: (0, Q.jsx)(ie, {
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            className: `-mx-2`,
            children: (0, Q.jsx)(F, { className: `icon-xs text-token-editor-warning-foreground` }),
          }),
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var Ft,
  Q,
  It,
  Lt = e(() => {
    ((Ft = l()),
      T(),
      je(),
      I(),
      z(),
      P(),
      d(),
      m(),
      E(),
      (Q = D()),
      (It = x(o, `has-custom-cli-executable`, { staleTime: _.FIVE_SECONDS })));
  });
function Rt(e) {
  let t = (0, Bt.c)(190),
    {
      variant: n,
      composerMode: r,
      setComposerMode: i,
      isResponseInProgress: o,
      worktreeEnvironmentHostId: l,
      worktreeEnvironmentWorkspaceRoot: u,
      codexHome: d,
      showRuntimeControls: f,
      hideRunLocationDropdown: m,
      showWorkspaceDropdown: _,
      gitRootForStartingState: b,
      showFooterBranchWhen: x,
      freeUpsellButton: C,
      remoteConfig: T,
      activeProjectIdOverride: E,
      localRemoteExecutionTarget: D,
    } = e,
    O = S(re),
    k = Pe(),
    A = Le(),
    j = w(ge),
    te = w(ue),
    ne = w(de),
    ae = M(),
    N;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = Ue()), (t[0] = N)) : (N = t[0]);
  let se = N,
    le = r !== `cloud` && j?.type !== `cloud`,
    P;
  t[1] === O ? (P = t[2]) : ((P = be(O)), (t[1] = O), (t[2] = P));
  let F = P,
    I = g(Te, F),
    fe = F != null && !I,
    L = st(F),
    pe = g(Ne, F),
    me = g(ke, F),
    R = g(Vt, F),
    z = j != null || R,
    ve = T.currentHostId ?? `local`,
    B = j?.type,
    V;
  t[3] !== r || t[4] !== ve || t[5] !== R || t[6] !== B
    ? ((V = Qe({
        composerMode: r,
        draftRemoteHostId: ve,
        followUpType: B,
        hasStartedBranchConversation: R,
      })),
      (t[3] = r),
      (t[4] = ve),
      (t[5] = R),
      (t[6] = B),
      (t[7] = V))
    : (V = t[7]);
  let we = V,
    H = we ? ve : pe,
    Ee = !we && H !== `local`,
    De = g(Se, F),
    { data: Oe } = xe(p.THREAD_PROJECT_ASSIGNMENTS),
    Ae = a(s({ cwd: De, assignment: F == null ? void 0 : Oe?.[F] }), oe(L.hostId) ?? d),
    je = Me(`2700454473`),
    Fe = n === `home` && je,
    Ie = Me(`1115442235`),
    W = Ae,
    ze = g(rt, F),
    Be = Ce(),
    He;
  t[8] !== Be || t[9] !== H
    ? ((He = Be.find((e) => e.hostId === H) ?? null), (t[8] = Be), (t[9] = H), (t[10] = He))
    : (He = t[10]);
  let We = He,
    Ge;
  t[11] !== L.cwd || t[12] !== Ee || t[13] !== T || t[14] !== H
    ? ((Ge = H === `local` ? null : Ee ? L.cwd : T.getProjectPathForHostId(H)),
      (t[11] = L.cwd),
      (t[12] = Ee),
      (t[13] = T),
      (t[14] = H),
      (t[15] = Ge))
    : (Ge = t[15]);
  let qe = Ge,
    Ye;
  t[16] !== T.currentHostId || t[17] !== Be
    ? ((Ye = Be.find((e) => e.hostId === T.currentHostId) ?? null),
      (t[16] = T.currentHostId),
      (t[17] = Be),
      (t[18] = Ye))
    : (Ye = t[18]);
  let Ze = Ye,
    $e;
  t[19] === T
    ? ($e = t[20])
    : (($e = T.getProjectPathForHostId(T.currentHostId)), (t[19] = T), (t[20] = $e));
  let et = $e;
  (We?.displayName, Ze?.displayName);
  let tt = H === `local` ? null : (We?.displayName ?? null),
    it;
  t[21] !== qe || t[22] !== H || t[23] !== tt
    ? ((it = { hostId: H, connectionDisplayName: tt, projectPath: qe }),
      (t[21] = qe),
      (t[22] = H),
      (t[23] = tt),
      (t[24] = it))
    : (it = t[24]);
  let at = Ze?.displayName ?? null,
    ot;
  t[25] !== T.currentHostId || t[26] !== et || t[27] !== at
    ? ((ot = { hostId: T.currentHostId, connectionDisplayName: at, projectPath: et }),
      (t[25] = T.currentHostId),
      (t[26] = et),
      (t[27] = at),
      (t[28] = ot))
    : (ot = t[28]);
  let lt;
  t[29] !== z || t[30] !== it || t[31] !== ot
    ? ((lt = {
        isAttachedToStartedTask: z,
        existingRemoteThreadState: it,
        draftNewThreadRemoteSelectionState: ot,
      }),
      (t[29] = z),
      (t[30] = it),
      (t[31] = ot),
      (t[32] = lt))
    : (lt = t[32]);
  let ut = lt,
    G = L.hostConfig,
    K =
      g(_e, { hostConfig: G, operationSource: `composer_content` }).data?.available === !0 &&
      le &&
      !fe
        ? L.cwd
        : null,
    ft;
  t[33] !== K || t[34] !== G
    ? ((ft = {
        cwd: K,
        enabled: !0,
        hostConfig: G,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (t[33] = K),
      (t[34] = G),
      (t[35] = ft))
    : (ft = t[35]);
  let q = g(y, ft),
    pt;
  t[36] !== K || t[37] !== G
    ? ((pt = {
        cwd: K,
        enabled: !0,
        hostConfig: G,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (t[36] = K),
      (t[37] = G),
      (t[38] = pt))
    : (pt = t[38]);
  let mt = g(c, pt),
    yt;
  t[39] !== K || t[40] !== G
    ? ((yt = { cwd: K, hostConfig: G, showErrorToast: !0 }), (t[39] = K), (t[40] = G), (t[41] = yt))
    : (yt = t[41]);
  let { canCreateGitRepository: bt, createGitRepository: xt, isCreatingGitRepository: Ct } = ct(yt),
    Et = K != null && q != null,
    J = le && Et && q?.root == null,
    Y = !bt || Ct || !Et || mt,
    X = J ? null : C,
    Dt = r === `worktree`,
    kt = Dt ? u : null,
    At;
  t[42] !== kt || t[43] !== l
    ? ((At = { hostId: l, workspaceRoot: kt }), (t[42] = kt), (t[43] = l), (t[44] = At))
    : (At = t[44]);
  let {
      environments: jt,
      isLoading: Z,
      error: Mt,
      resolvedConfigPath: Nt,
      updateSelection: Ft,
    } = h(At),
    Q;
  t[45] !== j ||
  t[46] !== Dt ||
  t[47] !== Mt ||
  t[48] !== Z ||
  t[49] !== k ||
  t[50] !== A ||
  t[51] !== Nt ||
  t[52] !== O ||
  t[53] !== Ft ||
  t[54] !== l ||
  t[55] !== u ||
  t[56] !== jt
    ? ((Q =
        !j && Dt
          ? (0, $.jsx)(dt, {
              environments: jt,
              isLoading: Z,
              hasError: Mt != null,
              selectedConfigPath: Nt,
              onSelectConfigPath: Ft,
              onOpenSettings: () => {
                (nt(O, l),
                  A(Ve({ workspaceRoot: u }), {
                    state: { hostId: l, returnTo: `${k.pathname}${k.search}${k.hash}` },
                  }));
              },
            })
          : null),
      (t[45] = j),
      (t[46] = Dt),
      (t[47] = Mt),
      (t[48] = Z),
      (t[49] = k),
      (t[50] = A),
      (t[51] = Nt),
      (t[52] = O),
      (t[53] = Ft),
      (t[54] = l),
      (t[55] = u),
      (t[56] = jt),
      (t[57] = Q))
    : (Q = t[57]);
  let It = Q,
    Lt,
    Rt;
  if (
    t[58] !== E ||
    t[59] !== te ||
    t[60] !== me?.role ||
    t[61] !== ze ||
    t[62] !== ne ||
    t[63] !== r ||
    t[64] !== F ||
    t[65] !== xt ||
    t[66] !== L ||
    t[67] !== j ||
    t[68] !== ut ||
    t[69] !== q ||
    t[70] !== b ||
    t[71] !== m ||
    t[72] !== G ||
    t[73] !== fe ||
    t[74] !== Y ||
    t[75] !== Ct ||
    t[76] !== mt ||
    t[77] !== Fe ||
    t[78] !== o ||
    t[79] !== Ae ||
    t[80] !== D ||
    t[81] !== Ie ||
    t[82] !== H ||
    t[83] !== O ||
    t[84] !== ae ||
    t[85] !== i ||
    t[86] !== J ||
    t[87] !== W ||
    t[88] !== x ||
    t[89] !== f ||
    t[90] !== _ ||
    t[91] !== X ||
    t[92] !== we ||
    t[93] !== n ||
    t[94] !== It
  ) {
    Rt = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = he(
          `flex flex-nowrap items-center gap-1 overflow-hidden`,
          n === `home`
            ? he(
                `-mx-px -mt-4.5 rounded-b-2xl bg-token-side-bar-background px-2 pt-[25px] pb-2 dark:bg-token-bg-fog`,
                Fe ? `electron:mx-4 electron:rounded-b-xl` : `electron:mx-0`,
              )
            : `pr-2`,
        ),
        a;
      t[97] !== te ||
      t[98] !== r ||
      t[99] !== j ||
      t[100] !== b ||
      t[101] !== G ||
      t[102] !== O ||
      t[103] !== ae
        ? ((a =
            !j && (r === `cloud` || r === `worktree`)
              ? (0, $.jsx)(ce, {
                  electron: !0,
                  browser: ae != null,
                  children: (0, $.jsx)(ht, {
                    startingState: te,
                    setStartingState: (e) => {
                      ye(O, `asyncThreadStartingState`, e);
                    },
                    hostConfig: G,
                    gitRootOverride: b,
                    branchSource: r === `worktree` ? `worktree` : `cloud`,
                  }),
                })
              : null),
          (t[97] = te),
          (t[98] = r),
          (t[99] = j),
          (t[100] = b),
          (t[101] = G),
          (t[102] = O),
          (t[103] = ae),
          (t[104] = a))
        : (a = t[104]);
      let s = a,
        c;
      t[105] !== ze || t[106] !== F || t[107] !== L.cwd || t[108] !== Ae || t[109] !== Ie
        ? ((c =
            Ie && St({ isCompactWindow: se }) && F != null && L.cwd != null
              ? { conversationTitle: ze, cwd: v(L.cwd), isWorktreeConversation: Ae }
              : null),
          (t[105] = ze),
          (t[106] = F),
          (t[107] = L.cwd),
          (t[108] = Ae),
          (t[109] = Ie),
          (t[110] = c))
        : (c = t[110]);
      let l = c,
        u = F != null && H !== `local` && me?.role === `follower`,
        d = (x === `always` || r === `local`) && !u && !fe && !mt;
      q?.root;
      let p;
      t[111] !== F || t[112] !== q?.root || t[113] !== G || t[114] !== J || t[115] !== d
        ? ((p =
            d && !J
              ? (0, $.jsx)(gt, {
                  gitRoot: q?.root ?? null,
                  hostConfig: G,
                  localConversationId: F,
                  shouldShow: !0,
                  align: `start`,
                })
              : null),
          (t[111] = F),
          (t[112] = q?.root),
          (t[113] = G),
          (t[114] = J),
          (t[115] = d),
          (t[116] = p))
        : (p = t[116]);
      let h = p,
        g;
      t[117] !== r ||
      t[118] !== F ||
      t[119] !== j ||
      t[120] !== ut ||
      t[121] !== l ||
      t[122] !== m ||
      t[123] !== o ||
      t[124] !== D ||
      t[125] !== i ||
      t[126] !== W
        ? ((g =
            j?.type === `cloud`
              ? (0, $.jsx)(Tt, { composerMode: r, setComposerMode: i })
              : (0, $.jsx)(wt, {
                  composerMode: r,
                  setComposerMode: i,
                  conversationId: F,
                  executionTargetOverride: D,
                  footerRemoteState: ut,
                  disabled: W,
                  hideModeDropdown: m,
                  allowWorktree: !j && !o,
                  threadHandoff: l,
                  worktreeLabelOnly: W,
                })),
          (t[117] = r),
          (t[118] = F),
          (t[119] = j),
          (t[120] = ut),
          (t[121] = l),
          (t[122] = m),
          (t[123] = o),
          (t[124] = D),
          (t[125] = i),
          (t[126] = W),
          (t[127] = g))
        : (g = t[127]);
      let y = g,
        S;
      t[128] !== E || t[129] !== r || t[130] !== j || t[131] !== _ || t[132] !== n
        ? ((S =
            _ && vt(r) && !j
              ? (0, $.jsx)(ce, {
                  electron: !0,
                  browser: !0,
                  children: (0, $.jsx)(Re, {
                    activeProjectIdOverride: E,
                    allowLocalProjectActions: !0,
                    variant: n === `home` ? `home` : `default`,
                  }),
                })
              : null),
          (t[128] = E),
          (t[129] = r),
          (t[130] = j),
          (t[131] = _),
          (t[132] = n),
          (t[133] = S))
        : (S = t[133]);
      let C = S,
        w;
      t[134] !== r || t[135] !== j || t[136] !== X
        ? ((w = !!j || !1), (t[134] = r), (t[135] = j), (t[136] = X), (t[137] = w))
        : (w = t[137]);
      let T = w,
        k;
      t[138] === T
        ? (k = t[139])
        : ((k = T ? (0, $.jsx)(Pt, {}) : null), (t[138] = T), (t[139] = k));
      let A = k,
        M;
      t[140] !== ne || t[141] !== r || t[142] !== j || t[143] !== O
        ? ((M =
            r === `cloud` && j?.type === `cloud` && j.hasAppliedCodeLocally
              ? (0, $.jsx)(Ot, {
                  startingState: ne,
                  setStartingState: (e) => {
                    ye(O, `followUpCloudStartingState`, e);
                  },
                })
              : null),
          (t[140] = ne),
          (t[141] = r),
          (t[142] = j),
          (t[143] = O),
          (t[144] = M))
        : (M = t[144]);
      let re = M,
        N = we ? ut.draftNewThreadRemoteSelectionState : ut.existingRemoteThreadState,
        oe;
      t[145] !== xt || t[146] !== Y || t[147] !== Ct || t[148] !== J || t[149] !== d
        ? ((oe =
            d && J
              ? (0, $.jsxs)(ie, {
                  className: `px-0`,
                  color: `ghost`,
                  size: `composerSm`,
                  disabled: Y,
                  onClick: () => {
                    Y || xt();
                  },
                  children: [
                    (0, $.jsx)(ee, { className: `icon-xs` }),
                    (0, $.jsx)(Xe, {
                      collapse: `sm`,
                      className: `max-w-40 truncate text-sm`,
                      children: Ct
                        ? (0, $.jsx)(U, {
                            id: `codex.review.noDiff.gitInit.creating`,
                            defaultMessage: `Creating…`,
                            description: `Button label shown while git init is running from the diff empty state`,
                          })
                        : (0, $.jsx)(U, {
                            id: `codex.review.noDiff.gitInit.createRepository`,
                            defaultMessage: `Create git repository`,
                            description: `Button label to create a git repository from the diff empty state`,
                          }),
                    }),
                  ],
                })
              : null),
          (t[145] = xt),
          (t[146] = Y),
          (t[147] = Ct),
          (t[148] = J),
          (t[149] = d),
          (t[150] = oe))
        : (oe = t[150]);
      let le = oe,
        ue = r === `local` && N.hostId != null && N.hostId !== `local`,
        de;
      t[151] !== N || t[152] !== ue
        ? ((de = ue
            ? (0, $.jsx)(`div`, {
                className: `flex min-w-0 items-center gap-1`,
                children: (0, $.jsx)(zt, {
                  hostId: N.hostId,
                  connectionDisplayName: N.connectionDisplayName,
                  projectPath: N.projectPath,
                }),
              })
            : null),
          (t[151] = N),
          (t[152] = ue),
          (t[153] = de))
        : (de = t[153]);
      let P = de,
        I = f && !0,
        pe;
      t[154] !== r || t[155] !== F || t[156] !== i || t[157] !== W
        ? ((pe =
            r === `cloud`
              ? (0, $.jsx)(ce, {
                  electron: !0,
                  browser: !0,
                  children: (0, $.jsx)(_t, {
                    composerMode: r,
                    conversationId: F,
                    disabled: W,
                    setComposerMode: i,
                  }),
                })
              : null),
          (t[154] = r),
          (t[155] = F),
          (t[156] = i),
          (t[157] = W),
          (t[158] = pe))
        : (pe = t[158]);
      let R = pe,
        z;
      t[159] !== s ||
      t[160] !== R ||
      t[161] !== re ||
      t[162] !== j?.type ||
      t[163] !== h ||
      t[164] !== It
        ? ((z =
            j?.type === `cloud`
              ? (0, $.jsxs)($.Fragment, { children: [h, re] })
              : (0, $.jsxs)($.Fragment, { children: [h, R, It, s] })),
          (t[159] = s),
          (t[160] = R),
          (t[161] = re),
          (t[162] = j?.type),
          (t[163] = h),
          (t[164] = It),
          (t[165] = z))
        : (z = t[165]);
      let ge = z,
        _e;
      t[166] !== re ||
      t[167] !== j?.type ||
      t[168] !== h ||
      t[169] !== ge ||
      t[170] !== y ||
      t[171] !== n
        ? ((_e =
            j?.type === `cloud`
              ? (0, $.jsxs)($.Fragment, {
                  children: [n === `home` ? h : null, y, n === `default` ? h : null, re],
                })
              : (0, $.jsxs)($.Fragment, { children: [y, ge] })),
          (t[166] = re),
          (t[167] = j?.type),
          (t[168] = h),
          (t[169] = ge),
          (t[170] = y),
          (t[171] = n),
          (t[172] = _e))
        : (_e = t[172]);
      let ve = _e,
        B = !!(P || le || X || A),
        V = n === `home` ? C : null,
        be = I ? ve : null,
        xe = n === `default` ? C : null,
        Se;
      t[173] !== V || t[174] !== be || t[175] !== xe
        ? ((Se = (0, $.jsxs)($.Fragment, { children: [V, be, xe] })),
          (t[173] = V),
          (t[174] = be),
          (t[175] = xe),
          (t[176] = Se))
        : (Se = t[176]);
      let Ce = Se,
        Te = I ? y : null,
        Ee = I ? ge : null,
        De;
      t[177] !== Te || t[178] !== Ee || t[179] !== C
        ? ((De = (0, $.jsxs)($.Fragment, { children: [Te, C, Ee] })),
          (t[177] = Te),
          (t[178] = Ee),
          (t[179] = C),
          (t[180] = De))
        : (De = t[180]);
      let Oe = De,
        ke;
      t[181] !== le || t[182] !== A || t[183] !== B || t[184] !== P || t[185] !== I || t[186] !== X
        ? ((ke =
            I && B
              ? (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 shrink-0 items-center gap-3`,
                  children: [P, le, X, A],
                })
              : null),
          (t[181] = le),
          (t[182] = A),
          (t[183] = B),
          (t[184] = P),
          (t[185] = I),
          (t[186] = X),
          (t[187] = ke))
        : (ke = t[187]);
      let je = ke;
      if (Fe) {
        let n;
        (t[188] === Oe
          ? (n = t[189])
          : ((n = (0, $.jsx)(`div`, {
              className: `horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden pr-4 [--edge-fade-distance:1rem]`,
              children: Oe,
            })),
            (t[188] = Oe),
            (t[189] = n)),
          (Rt = (0, $.jsxs)(Je, {
            className: he(e, Ke.homeExternalFooter, `flex-nowrap gap-2 overflow-hidden`),
            responsive: !1,
            children: [n, je],
          })));
        break bb0;
      }
      Lt = (0, $.jsxs)(Je, {
        className: he(e, `flex-wrap gap-2 overflow-visible`, n === `default` && `pl-2`),
        children: [
          (0, $.jsx)(`div`, {
            className: `flex min-w-0 flex-1 flex-nowrap items-center gap-1`,
            children: Ce,
          }),
          je,
        ],
      });
    }
    ((t[58] = E),
      (t[59] = te),
      (t[60] = me?.role),
      (t[61] = ze),
      (t[62] = ne),
      (t[63] = r),
      (t[64] = F),
      (t[65] = xt),
      (t[66] = L),
      (t[67] = j),
      (t[68] = ut),
      (t[69] = q),
      (t[70] = b),
      (t[71] = m),
      (t[72] = G),
      (t[73] = fe),
      (t[74] = Y),
      (t[75] = Ct),
      (t[76] = mt),
      (t[77] = Fe),
      (t[78] = o),
      (t[79] = Ae),
      (t[80] = D),
      (t[81] = Ie),
      (t[82] = H),
      (t[83] = O),
      (t[84] = ae),
      (t[85] = i),
      (t[86] = J),
      (t[87] = W),
      (t[88] = x),
      (t[89] = f),
      (t[90] = _),
      (t[91] = X),
      (t[92] = we),
      (t[93] = n),
      (t[94] = It),
      (t[95] = Lt),
      (t[96] = Rt));
  } else ((Lt = t[95]), (Rt = t[96]));
  return Rt === Symbol.for(`react.early_return_sentinel`) ? Lt : Rt;
}
function zt(e) {
  let t = (0, Bt.c)(11),
    { hostId: n, connectionDisplayName: r, projectPath: i } = e;
  if (n == null) return null;
  let a = i == null,
    o = r ?? n,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = (0, $.jsx)(`span`, { className: `max-w-40 min-w-0 truncate`, children: o })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n ? (c = t[3]) : ((c = (0, $.jsx)(G, { hostId: n })), (t[2] = n), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, $.jsxs)(Xe, {
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
      ? ((u = (0, $.jsx)(R, { tooltipContent: i, disabled: a, children: l })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var Bt, $, Vt;
e(() => {
  ((Bt = l()),
    L(),
    T(),
    f(),
    je(),
    H(),
    ut(),
    we(),
    He(),
    I(),
    z(),
    ne(),
    ae(),
    u(),
    lt(),
    N(),
    De(),
    ot(),
    j(),
    at(),
    C(),
    Oe(),
    d(),
    le(),
    Be(),
    it(),
    Ae(),
    W(),
    te(),
    q(),
    xt(),
    Dt(),
    Nt(),
    ve(),
    Ge(),
    pt(),
    Ct(),
    pe(),
    Lt(),
    yt(),
    ze(),
    bt(),
    $e(),
    K(),
    Ze(),
    ($ = D()),
    (Vt = i(o, (e, { get: t }) => {
      let n = t(Ee, e) ?? 0,
        r = t(Ie, e) ?? 0;
      return n > 0 || r > 0;
    })));
})();
export { Rt as ComposerExternalFooter };
//# sourceMappingURL=composer-external-footer.js.map
