import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  AB as i,
  Al as a,
  Ao as o,
  BP as s,
  BV as c,
  DL as l,
  DN as u,
  Ev as d,
  FB as f,
  Ga as p,
  Gi as ee,
  Gj as m,
  Gu as h,
  Hh as g,
  IB as _,
  JV as v,
  KE as y,
  Ka as b,
  Ku as x,
  Mu as S,
  Nu as C,
  ON as w,
  Ol as T,
  Op as E,
  Ov as D,
  PB as O,
  QN as k,
  QP as A,
  Qh as j,
  SF as te,
  TM as M,
  Tm as ne,
  Tp as re,
  Uh as ie,
  VE as ae,
  VP as N,
  Wa as oe,
  XR as se,
  Xh as ce,
  Yh as le,
  Zi as ue,
  _m as de,
  aP as fe,
  bF as P,
  cm as pe,
  fV as F,
  gp as me,
  hM as I,
  iF as he,
  ko as ge,
  mv as L,
  oP as _e,
  om as ve,
  pI as ye,
  pM as R,
  qE as be,
  qV as z,
  qa as xe,
  qi as B,
  qj as Se,
  rF as Ce,
  sF as V,
  wM as H,
  wl as we,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Cn as U,
  Dd as Te,
  Gl as Ee,
  Od as De,
  Sn as Oe,
  So as ke,
  Wl as Ae,
  d as je,
  l as Me,
  wo as Ne,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  Ht as Pe,
  Ut as Fe,
  jn as W,
  kn as Ie,
} from "./app-initial~app-main~automations-page.js";
import {
  Hs as Le,
  Ro as Re,
  Ss as ze,
  Vo as Be,
  Vs as Ve,
  cs as He,
  da as Ue,
  ns as We,
  on as Ge,
  ss as Ke,
  ua as qe,
  xs as Je,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Bm as Ye,
  Bu as Xe,
  Hm as Ze,
  Rm as Qe,
  Vm as $e,
  Vu as et,
  nr as tt,
  rr as nt,
  zm as rt,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  _ as it,
  v as at,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  c as ot,
  s as st,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62.js";
import {
  a as ct,
  i as G,
  n as K,
  t as lt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D.js";
import { n as q, t as ut } from "./worktree-environment-dropdown.js";
import {
  a as dt,
  i as J,
  n as ft,
  o as pt,
  r as mt,
  t as ht,
} from "./composer-footer-branch-switcher.js";
import {
  a as gt,
  c as _t,
  i as vt,
  n as yt,
  o as bt,
  r as xt,
  s as St,
  t as Ct,
} from "./local-remote-dropdown.js";
function wt(e) {
  let t = (0, Tt.c)(35),
    { composerMode: n, setComposerMode: r } = e,
    i = f(we),
    a = _(Je),
    [o, s] = (0, Y.useState)(!1),
    c = De(),
    { data: l, isLoading: u } = ie(c.cwd, c.hostConfig, `cloud_follow_up_local_remote_dropdown`),
    d = l?.root != null,
    p = a?.type === `cloud` && a.hasAppliedCodeLocally,
    m,
    h;
  (t[0] !== p || t[1] !== i
    ? ((m = () => {
        p && He(i, `local`);
      }),
      (h = [p, i]),
      (t[0] = p),
      (t[1] = i),
      (t[2] = m),
      (t[3] = h))
    : ((m = t[2]), (h = t[3])),
    (0, Y.useEffect)(m, h));
  let g, v;
  (t[4] !== d || t[5] !== u || t[6] !== i
    ? ((g = () => {
        u || d || He(i, `local`);
      }),
      (v = [d, u, i]),
      (t[4] = d),
      (t[5] = u),
      (t[6] = i),
      (t[7] = g),
      (t[8] = v))
    : ((g = t[7]), (v = t[8])),
    (0, Y.useEffect)(g, v));
  let y;
  t[9] === n
    ? (y = t[10])
    : ((y = n === `local` ? (0, X.jsx)(V, { ...Z.local }) : (0, X.jsx)(V, { ...Z.cloud })),
      (t[9] = n),
      (t[10] = y));
  let b = y,
    x;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(V, { ...Z.tooltip })), (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] === n
    ? (S = t[13])
    : ((S =
        n === `cloud`
          ? (0, X.jsx)(tt, { className: `icon-xs` })
          : (0, X.jsx)(Oe, { className: `icon-xs` })),
      (t[12] = n),
      (t[13] = S));
  let C;
  t[14] !== b || t[15] !== S
    ? ((C = (0, X.jsx)(R, {
        tooltipContent: x,
        children: (0, X.jsx)(G, {
          categoryLabel: null,
          collapse: `xs`,
          icon: S,
          indicator: `chevron`,
          value: b,
          valueClassName: `max-w-40`,
        }),
      })),
      (t[14] = b),
      (t[15] = S),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(B.Title, {
        children: (0, X.jsx)(V, {
          id: `composer.mode.newTask.header`,
          defaultMessage: `Continue in`,
          description: `Header label above agent mode options`,
        }),
      })),
      (t[17] = w))
    : (w = t[17]);
  let T = n === `local` ? H : void 0,
    E;
  t[18] === r
    ? (E = t[19])
    : ((E = () => {
        (r(`local`), s(!1));
      }),
      (t[18] = r),
      (t[19] = E));
  let D;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(V, { ...Z.local })), (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] !== T || t[22] !== E
    ? ((O = (0, X.jsx)(B.Item, { LeftIcon: Oe, RightIcon: T, onClick: E, children: D })),
      (t[21] = T),
      (t[22] = E),
      (t[23] = O))
    : (O = t[23]);
  let k;
  t[24] !== n || t[25] !== d || t[26] !== r
    ? ((k = d
        ? (0, X.jsx)(B.Item, {
            LeftIcon: tt,
            RightIcon: n === `cloud` ? H : void 0,
            onClick: () => {
              (r(`cloud`), s(!1));
            },
            children: (0, X.jsx)(V, { ...Z.cloud }),
          })
        : null),
      (t[24] = n),
      (t[25] = d),
      (t[26] = r),
      (t[27] = k))
    : (k = t[27]);
  let A;
  t[28] !== O || t[29] !== k
    ? ((A = (0, X.jsxs)(`div`, { className: `flex w-44 flex-col`, children: [w, O, k] })),
      (t[28] = O),
      (t[29] = k),
      (t[30] = A))
    : (A = t[30]);
  let j;
  return (
    t[31] !== o || t[32] !== A || t[33] !== C
      ? ((j = (0, X.jsx)(ee, { open: o, onOpenChange: s, triggerButton: C, children: A })),
        (t[31] = o),
        (t[32] = A),
        (t[33] = C),
        (t[34] = j))
      : (j = t[34]),
    j
  );
}
var Tt,
  Y,
  X,
  Z,
  Et = e(() => {
    ((Tt = z()),
      i(),
      (Y = t(v(), 1)),
      he(),
      ue(),
      I(),
      g(),
      Te(),
      M(),
      nt(),
      U(),
      a(),
      ct(),
      ze(),
      We(),
      (X = c()),
      (Z = Ce({
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
function Dt(e) {
  let t = (0, kt.c)(30),
    { startingState: n, setStartingState: r } = e,
    [i, a] = (0, At.useState)(!1),
    o;
  t[0] === n
    ? (o = t[1])
    : ((o =
        n === `working-tree`
          ? (0, Q.jsx)(V, { ...jt.workingTree })
          : (0, Q.jsx)(V, { ...jt.directFollowUp })),
      (t[0] = n),
      (t[1] = o));
  let s = o,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, Q.jsx)(V, {
          id: `composer.remote.startingPoint`,
          defaultMessage: `What code should this task start from?`,
          description: `Section label for remote starting point selector`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(V, {
        id: `composer.followUpStartingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the follow-up starting state control in the composer footer`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u = n === `working-tree`,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(ge, { className: `icon-xs` })), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = (0, Q.jsx)(dt, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: u,
        children: d,
      })),
      (t[5] = u),
      (t[6] = f));
  let p;
  t[7] !== s || t[8] !== f
    ? ((p = (0, Q.jsx)(R, {
        tooltipContent: c,
        children: (0, Q.jsx)(G, {
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
    ? ((m = (0, Q.jsx)(V, {
        id: `composer.remote.currentEditsSuffix.followUp`,
        defaultMessage: `Create a new task that references this cloud task.`,
        description: `Suffix text indicating the selection includes current edits`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h = n === `working-tree` ? H : void 0,
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
    ? ((_ = (0, Q.jsx)(V, { ...jt.workingTree })), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== g || t[15] !== h
    ? ((v = (0, Q.jsx)(R, {
        tooltipContent: m,
        children: (0, Q.jsx)(B.Item, { LeftIcon: Ot, RightIcon: h, onClick: g, children: _ }),
      })),
      (t[14] = g),
      (t[15] = h),
      (t[16] = v))
    : (v = t[16]);
  let y = n === `direct-follow-up` ? H : void 0,
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
    ? ((x = (0, Q.jsx)(V, { ...jt.directFollowUp })), (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b
    ? ((S = (0, Q.jsx)(B.Item, { LeftIcon: ge, RightIcon: y, onClick: b, children: x })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== v || t[24] !== S
    ? ((C = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1 pt-1`, children: [v, S] })),
      (t[23] = v),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== i || t[27] !== C || t[28] !== p
      ? ((w = (0, Q.jsx)(ee, { open: i, onOpenChange: a, triggerButton: p, children: C })),
        (t[26] = i),
        (t[27] = C),
        (t[28] = p),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function Ot(e) {
  let t = (0, kt.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(dt, {
          borderColor: `border-token-dropdown-background`,
          children: (0, Q.jsx)(ge, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var kt,
  At,
  Q,
  jt,
  Mt = e(() => {
    ((kt = z()),
      (At = t(v(), 1)),
      he(),
      pt(),
      ue(),
      I(),
      o(),
      M(),
      Ge(),
      ct(),
      (Q = c()),
      (jt = Ce({
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
function Nt() {
  let e = (0, Pt.c)(2),
    { data: t } = _(It);
  if (!(t?.hasCustomCliExecutable ?? !1)) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Ft.jsx)(V, {
        id: `composer.customCliTooltip`,
        defaultMessage: `Using a custom CLI executable`,
        description: `Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Ft.jsx)(R, {
          tooltipContent: n,
          children: (0, Ft.jsx)(u, {
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            className: `-mx-2`,
            children: (0, Ft.jsx)(qe, {
              className: `icon-xs text-token-editor-warning-foreground`,
            }),
          }),
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var Pt,
  Ft,
  It,
  Lt = e(() => {
    ((Pt = z()),
      i(),
      he(),
      w(),
      I(),
      Ue(),
      r(),
      _e(),
      n(),
      (Ft = c()),
      (It = k(A, `has-custom-cli-executable`, { staleTime: fe.FIVE_SECONDS })));
  });
function Rt(e) {
  let t = (0, Bt.c)(190),
    {
      variant: n,
      composerMode: r,
      setComposerMode: i,
      isResponseInProgress: a,
      worktreeEnvironmentHostId: o,
      worktreeEnvironmentWorkspaceRoot: c,
      codexHome: p,
      showRuntimeControls: ee,
      hideRunLocationDropdown: m,
      showWorkspaceDropdown: h,
      gitRootForStartingState: g,
      showFooterBranchWhen: v,
      freeUpsellButton: y,
      remoteConfig: S,
      activeProjectIdOverride: w,
      localRemoteExecutionTarget: E,
    } = e,
    k = f(we),
    A = d(),
    j = D(),
    M = _(Je),
    ne = _(Re),
    ie = _(Be),
    ae = Le(),
    N;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = Ne()), (t[0] = N)) : (N = t[0]);
  let ue = N,
    fe = r !== `cloud` && M?.type !== `cloud`,
    P;
  t[1] === k ? (P = t[2]) : ((P = T(k)), (t[1] = k), (t[2] = P));
  let F = P,
    I = O(re, F),
    he = F != null && !I,
    L = De(F),
    _e = O(pe, F),
    ve = O(de, F),
    R = O(Vt, F),
    z = M != null || R,
    xe = S.currentHostId ?? `local`,
    B = M?.type,
    Ce;
  t[3] !== r || t[4] !== xe || t[5] !== R || t[6] !== B
    ? ((Ce = at({
        composerMode: r,
        draftRemoteHostId: xe,
        followUpType: B,
        hasStartedBranchConversation: R,
      })),
      (t[3] = r),
      (t[4] = xe),
      (t[5] = R),
      (t[6] = B),
      (t[7] = Ce))
    : (Ce = t[7]);
  let H = Ce,
    U = H ? xe : _e,
    Te = !H && U !== `local`,
    Oe = O(me, F),
    { data: ke } = x(se.THREAD_PROJECT_ASSIGNMENTS),
    Ae = ye(te({ cwd: Oe, assignment: F == null ? void 0 : ke?.[F] }), C(L.hostId) ?? p),
    Me = Se(`2700454473`),
    Pe = n === `home` && Me,
    Fe = Se(`1115442235`),
    W = Ae,
    ze = O(Ee, F),
    Ve = be(),
    He;
  t[8] !== Ve || t[9] !== U
    ? ((He = Ve.find((e) => e.hostId === U) ?? null), (t[8] = Ve), (t[9] = U), (t[10] = He))
    : (He = t[10]);
  let Ue = He,
    We;
  t[11] !== L.cwd || t[12] !== Te || t[13] !== S || t[14] !== U
    ? ((We = U === `local` ? null : Te ? L.cwd : S.getProjectPathForHostId(U)),
      (t[11] = L.cwd),
      (t[12] = Te),
      (t[13] = S),
      (t[14] = U),
      (t[15] = We))
    : (We = t[15]);
  let Ge = We,
    qe;
  t[16] !== S.currentHostId || t[17] !== Ve
    ? ((qe = Ve.find((e) => e.hostId === S.currentHostId) ?? null),
      (t[16] = S.currentHostId),
      (t[17] = Ve),
      (t[18] = qe))
    : (qe = t[18]);
  let Ye = qe,
    Xe;
  t[19] === S
    ? (Xe = t[20])
    : ((Xe = S.getProjectPathForHostId(S.currentHostId)), (t[19] = S), (t[20] = Xe));
  let Ze = Xe;
  (Ue?.displayName, Ye?.displayName);
  let tt = U === `local` ? null : (Ue?.displayName ?? null),
    nt;
  t[21] !== Ge || t[22] !== U || t[23] !== tt
    ? ((nt = { hostId: U, connectionDisplayName: tt, projectPath: Ge }),
      (t[21] = Ge),
      (t[22] = U),
      (t[23] = tt),
      (t[24] = nt))
    : (nt = t[24]);
  let it = Ye?.displayName ?? null,
    st;
  t[25] !== S.currentHostId || t[26] !== Ze || t[27] !== it
    ? ((st = { hostId: S.currentHostId, connectionDisplayName: it, projectPath: Ze }),
      (t[25] = S.currentHostId),
      (t[26] = Ze),
      (t[27] = it),
      (t[28] = st))
    : (st = t[28]);
  let ct;
  t[29] !== z || t[30] !== nt || t[31] !== st
    ? ((ct = {
        isAttachedToStartedTask: z,
        existingRemoteThreadState: nt,
        draftNewThreadRemoteSelectionState: st,
      }),
      (t[29] = z),
      (t[30] = nt),
      (t[31] = st),
      (t[32] = ct))
    : (ct = t[32]);
  let G = ct,
    K = L.hostConfig,
    q =
      O(b, { hostConfig: K, operationSource: `composer_content` }).data?.available === !0 &&
      fe &&
      !he
        ? L.cwd
        : null,
    dt;
  t[33] !== q || t[34] !== K
    ? ((dt = {
        cwd: q,
        enabled: !0,
        hostConfig: K,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (t[33] = q),
      (t[34] = K),
      (t[35] = dt))
    : (dt = t[35]);
  let J = O(le, dt),
    ft;
  t[36] !== q || t[37] !== K
    ? ((ft = {
        cwd: q,
        enabled: !0,
        hostConfig: K,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (t[36] = q),
      (t[37] = K),
      (t[38] = ft))
    : (ft = t[38]);
  let pt = O(ce, ft),
    vt;
  t[39] !== q || t[40] !== K
    ? ((vt = { cwd: q, hostConfig: K, showErrorToast: !0 }), (t[39] = q), (t[40] = K), (t[41] = vt))
    : (vt = t[41]);
  let { canCreateGitRepository: yt, createGitRepository: bt, isCreatingGitRepository: St } = ot(vt),
    Tt = q != null && J != null,
    Y = fe && Tt && J?.root == null,
    X = !yt || St || !Tt || pt,
    Z = Y ? null : y,
    Et = r === `worktree`,
    Ot = Et ? c : null,
    kt;
  t[42] !== Ot || t[43] !== o
    ? ((kt = { hostId: o, workspaceRoot: Ot }), (t[42] = Ot), (t[43] = o), (t[44] = kt))
    : (kt = t[44]);
  let {
      environments: At,
      isLoading: Q,
      error: jt,
      resolvedConfigPath: Mt,
      updateSelection: Pt,
    } = je(kt),
    Ft;
  t[45] !== M ||
  t[46] !== Et ||
  t[47] !== jt ||
  t[48] !== Q ||
  t[49] !== A ||
  t[50] !== j ||
  t[51] !== Mt ||
  t[52] !== k ||
  t[53] !== Pt ||
  t[54] !== o ||
  t[55] !== c ||
  t[56] !== At
    ? ((Ft =
        !M && Et
          ? (0, $.jsx)(ut, {
              environments: At,
              isLoading: Q,
              hasError: jt != null,
              selectedConfigPath: Mt,
              onSelectConfigPath: Pt,
              onOpenSettings: () => {
                (et(k, o),
                  j(Ie({ workspaceRoot: c }), {
                    state: { hostId: o, returnTo: `${A.pathname}${A.search}${A.hash}` },
                  }));
              },
            })
          : null),
      (t[45] = M),
      (t[46] = Et),
      (t[47] = jt),
      (t[48] = Q),
      (t[49] = A),
      (t[50] = j),
      (t[51] = Mt),
      (t[52] = k),
      (t[53] = Pt),
      (t[54] = o),
      (t[55] = c),
      (t[56] = At),
      (t[57] = Ft))
    : (Ft = t[57]);
  let It = Ft,
    Lt,
    Rt;
  if (
    t[58] !== w ||
    t[59] !== ne ||
    t[60] !== ve?.role ||
    t[61] !== ze ||
    t[62] !== ie ||
    t[63] !== r ||
    t[64] !== F ||
    t[65] !== bt ||
    t[66] !== L ||
    t[67] !== M ||
    t[68] !== G ||
    t[69] !== J ||
    t[70] !== g ||
    t[71] !== m ||
    t[72] !== K ||
    t[73] !== he ||
    t[74] !== X ||
    t[75] !== St ||
    t[76] !== pt ||
    t[77] !== Pe ||
    t[78] !== a ||
    t[79] !== Ae ||
    t[80] !== E ||
    t[81] !== Fe ||
    t[82] !== U ||
    t[83] !== k ||
    t[84] !== ae ||
    t[85] !== i ||
    t[86] !== Y ||
    t[87] !== W ||
    t[88] !== v ||
    t[89] !== ee ||
    t[90] !== h ||
    t[91] !== Z ||
    t[92] !== H ||
    t[93] !== n ||
    t[94] !== It
  ) {
    Rt = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = s(
          `flex flex-nowrap items-center gap-1 overflow-hidden`,
          n === `home`
            ? s(
                `-mx-px -mt-4.5 rounded-b-2xl bg-token-side-bar-background px-2 pt-[25px] pb-2 dark:bg-token-bg-fog`,
                Pe ? `electron:mx-4 electron:rounded-b-xl` : `electron:mx-0`,
              )
            : `pr-2`,
        ),
        o;
      t[97] !== ne ||
      t[98] !== r ||
      t[99] !== M ||
      t[100] !== g ||
      t[101] !== K ||
      t[102] !== k ||
      t[103] !== ae
        ? ((o =
            !M && (r === `cloud` || r === `worktree`)
              ? (0, $.jsx)(oe, {
                  electron: !0,
                  browser: ae != null,
                  children: (0, $.jsx)(mt, {
                    startingState: ne,
                    setStartingState: (e) => {
                      Ke(k, `asyncThreadStartingState`, e);
                    },
                    hostConfig: K,
                    gitRootOverride: g,
                    branchSource: r === `worktree` ? `worktree` : `cloud`,
                  }),
                })
              : null),
          (t[97] = ne),
          (t[98] = r),
          (t[99] = M),
          (t[100] = g),
          (t[101] = K),
          (t[102] = k),
          (t[103] = ae),
          (t[104] = o))
        : (o = t[104]);
      let c = o,
        d;
      t[105] !== ze || t[106] !== F || t[107] !== L.cwd || t[108] !== Ae || t[109] !== Fe
        ? ((d =
            Fe && xt({ isCompactWindow: ue }) && F != null && L.cwd != null
              ? { conversationTitle: ze, cwd: l(L.cwd), isWorktreeConversation: Ae }
              : null),
          (t[105] = ze),
          (t[106] = F),
          (t[107] = L.cwd),
          (t[108] = Ae),
          (t[109] = Fe),
          (t[110] = d))
        : (d = t[110]);
      let f = d,
        p = F != null && U !== `local` && ve?.role === `follower`,
        _ = (v === `always` || r === `local`) && !p && !he && !pt;
      J?.root;
      let y;
      t[111] !== F || t[112] !== J?.root || t[113] !== K || t[114] !== Y || t[115] !== _
        ? ((y =
            _ && !Y
              ? (0, $.jsx)(ht, {
                  gitRoot: J?.root ?? null,
                  hostConfig: K,
                  localConversationId: F,
                  shouldShow: !0,
                  align: `start`,
                })
              : null),
          (t[111] = F),
          (t[112] = J?.root),
          (t[113] = K),
          (t[114] = Y),
          (t[115] = _),
          (t[116] = y))
        : (y = t[116]);
      let b = y,
        x;
      t[117] !== r ||
      t[118] !== F ||
      t[119] !== M ||
      t[120] !== G ||
      t[121] !== f ||
      t[122] !== m ||
      t[123] !== a ||
      t[124] !== E ||
      t[125] !== i ||
      t[126] !== W
        ? ((x =
            M?.type === `cloud`
              ? (0, $.jsx)(wt, { composerMode: r, setComposerMode: i })
              : (0, $.jsx)(Ct, {
                  composerMode: r,
                  setComposerMode: i,
                  conversationId: F,
                  executionTargetOverride: E,
                  footerRemoteState: G,
                  disabled: W,
                  hideModeDropdown: m,
                  allowWorktree: !M && !a,
                  threadHandoff: f,
                  worktreeLabelOnly: W,
                })),
          (t[117] = r),
          (t[118] = F),
          (t[119] = M),
          (t[120] = G),
          (t[121] = f),
          (t[122] = m),
          (t[123] = a),
          (t[124] = E),
          (t[125] = i),
          (t[126] = W),
          (t[127] = x))
        : (x = t[127]);
      let S = x,
        C;
      t[128] !== w || t[129] !== r || t[130] !== M || t[131] !== h || t[132] !== n
        ? ((C =
            h && _t(r) && !M
              ? (0, $.jsx)(oe, {
                  electron: !0,
                  browser: !0,
                  children: (0, $.jsx)(lt, {
                    activeProjectIdOverride: w,
                    allowLocalProjectActions: !0,
                    variant: n === `home` ? `home` : `default`,
                  }),
                })
              : null),
          (t[128] = w),
          (t[129] = r),
          (t[130] = M),
          (t[131] = h),
          (t[132] = n),
          (t[133] = C))
        : (C = t[133]);
      let T = C,
        D;
      t[134] !== r || t[135] !== M || t[136] !== Z
        ? ((D = !!M || !1), (t[134] = r), (t[135] = M), (t[136] = Z), (t[137] = D))
        : (D = t[137]);
      let O = D,
        A;
      t[138] === O
        ? (A = t[139])
        : ((A = O ? (0, $.jsx)(Nt, {}) : null), (t[138] = O), (t[139] = A));
      let j = A,
        te;
      t[140] !== ie || t[141] !== r || t[142] !== M || t[143] !== k
        ? ((te =
            r === `cloud` && M?.type === `cloud` && M.hasAppliedCodeLocally
              ? (0, $.jsx)(Dt, {
                  startingState: ie,
                  setStartingState: (e) => {
                    Ke(k, `followUpCloudStartingState`, e);
                  },
                })
              : null),
          (t[140] = ie),
          (t[141] = r),
          (t[142] = M),
          (t[143] = k),
          (t[144] = te))
        : (te = t[144]);
      let re = te,
        N = H ? G.draftNewThreadRemoteSelectionState : G.existingRemoteThreadState,
        se;
      t[145] !== bt || t[146] !== X || t[147] !== St || t[148] !== Y || t[149] !== _
        ? ((se =
            _ && Y
              ? (0, $.jsxs)(u, {
                  className: `px-0`,
                  color: `ghost`,
                  size: `composerSm`,
                  disabled: X,
                  onClick: () => {
                    X || bt();
                  },
                  children: [
                    (0, $.jsx)(ge, { className: `icon-xs` }),
                    (0, $.jsx)(rt, {
                      collapse: `sm`,
                      className: `max-w-40 truncate text-sm`,
                      children: St
                        ? (0, $.jsx)(V, {
                            id: `codex.review.noDiff.gitInit.creating`,
                            defaultMessage: `Creating…`,
                            description: `Button label shown while git init is running from the diff empty state`,
                          })
                        : (0, $.jsx)(V, {
                            id: `codex.review.noDiff.gitInit.createRepository`,
                            defaultMessage: `Create git repository`,
                            description: `Button label to create a git repository from the diff empty state`,
                          }),
                    }),
                  ],
                })
              : null),
          (t[145] = bt),
          (t[146] = X),
          (t[147] = St),
          (t[148] = Y),
          (t[149] = _),
          (t[150] = se))
        : (se = t[150]);
      let ce = se,
        le = r === `local` && N.hostId != null && N.hostId !== `local`,
        de;
      t[151] !== N || t[152] !== le
        ? ((de = le
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
          (t[152] = le),
          (t[153] = de))
        : (de = t[153]);
      let fe = de,
        P = ee && !0,
        pe;
      t[154] !== r || t[155] !== F || t[156] !== i || t[157] !== W
        ? ((pe =
            r === `cloud`
              ? (0, $.jsx)(oe, {
                  electron: !0,
                  browser: !0,
                  children: (0, $.jsx)(gt, {
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
      let me = pe,
        I;
      t[159] !== c ||
      t[160] !== me ||
      t[161] !== re ||
      t[162] !== M?.type ||
      t[163] !== b ||
      t[164] !== It
        ? ((I =
            M?.type === `cloud`
              ? (0, $.jsxs)($.Fragment, { children: [b, re] })
              : (0, $.jsxs)($.Fragment, { children: [b, me, It, c] })),
          (t[159] = c),
          (t[160] = me),
          (t[161] = re),
          (t[162] = M?.type),
          (t[163] = b),
          (t[164] = It),
          (t[165] = I))
        : (I = t[165]);
      let _e = I,
        ye;
      t[166] !== re ||
      t[167] !== M?.type ||
      t[168] !== b ||
      t[169] !== _e ||
      t[170] !== S ||
      t[171] !== n
        ? ((ye =
            M?.type === `cloud`
              ? (0, $.jsxs)($.Fragment, {
                  children: [n === `home` ? b : null, S, n === `default` ? b : null, re],
                })
              : (0, $.jsxs)($.Fragment, { children: [S, _e] })),
          (t[166] = re),
          (t[167] = M?.type),
          (t[168] = b),
          (t[169] = _e),
          (t[170] = S),
          (t[171] = n),
          (t[172] = ye))
        : (ye = t[172]);
      let R = ye,
        be = !!(fe || ce || Z || j),
        z = n === `home` ? T : null,
        xe = P ? R : null,
        B = n === `default` ? T : null,
        Se;
      t[173] !== z || t[174] !== xe || t[175] !== B
        ? ((Se = (0, $.jsxs)($.Fragment, { children: [z, xe, B] })),
          (t[173] = z),
          (t[174] = xe),
          (t[175] = B),
          (t[176] = Se))
        : (Se = t[176]);
      let Ce = Se,
        we = P ? S : null,
        Te = P ? _e : null,
        Ee;
      t[177] !== we || t[178] !== Te || t[179] !== T
        ? ((Ee = (0, $.jsxs)($.Fragment, { children: [we, T, Te] })),
          (t[177] = we),
          (t[178] = Te),
          (t[179] = T),
          (t[180] = Ee))
        : (Ee = t[180]);
      let De = Ee,
        Oe;
      t[181] !== ce ||
      t[182] !== j ||
      t[183] !== be ||
      t[184] !== fe ||
      t[185] !== P ||
      t[186] !== Z
        ? ((Oe =
            P && be
              ? (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 shrink-0 items-center gap-3`,
                  children: [fe, ce, Z, j],
                })
              : null),
          (t[181] = ce),
          (t[182] = j),
          (t[183] = be),
          (t[184] = fe),
          (t[185] = P),
          (t[186] = Z),
          (t[187] = Oe))
        : (Oe = t[187]);
      let ke = Oe;
      if (Pe) {
        let n;
        (t[188] === De
          ? (n = t[189])
          : ((n = (0, $.jsx)(`div`, {
              className: `horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden pr-4 [--edge-fade-distance:1rem]`,
              children: De,
            })),
            (t[188] = De),
            (t[189] = n)),
          (Rt = (0, $.jsxs)(Qe, {
            className: s(e, $e.homeExternalFooter, `flex-nowrap gap-2 overflow-hidden`),
            responsive: !1,
            children: [n, ke],
          })));
        break bb0;
      }
      Lt = (0, $.jsxs)(Qe, {
        className: s(e, `flex-wrap gap-2 overflow-visible`, n === `default` && `pl-2`),
        children: [
          (0, $.jsx)(`div`, {
            className: `flex min-w-0 flex-1 flex-nowrap items-center gap-1`,
            children: Ce,
          }),
          ke,
        ],
      });
    }
    ((t[58] = w),
      (t[59] = ne),
      (t[60] = ve?.role),
      (t[61] = ze),
      (t[62] = ie),
      (t[63] = r),
      (t[64] = F),
      (t[65] = bt),
      (t[66] = L),
      (t[67] = M),
      (t[68] = G),
      (t[69] = J),
      (t[70] = g),
      (t[71] = m),
      (t[72] = K),
      (t[73] = he),
      (t[74] = X),
      (t[75] = St),
      (t[76] = pt),
      (t[77] = Pe),
      (t[78] = a),
      (t[79] = Ae),
      (t[80] = E),
      (t[81] = Fe),
      (t[82] = U),
      (t[83] = k),
      (t[84] = ae),
      (t[85] = i),
      (t[86] = Y),
      (t[87] = W),
      (t[88] = v),
      (t[89] = ee),
      (t[90] = h),
      (t[91] = Z),
      (t[92] = H),
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
  t[2] === n ? (c = t[3]) : ((c = (0, $.jsx)(Pe, { hostId: n })), (t[2] = n), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, $.jsxs)(rt, {
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
  ((Bt = z()),
    N(),
    i(),
    P(),
    he(),
    L(),
    Fe(),
    E(),
    ke(),
    w(),
    I(),
    p(),
    xe(),
    j(),
    st(),
    S(),
    h(),
    Te(),
    o(),
    Ae(),
    Me(),
    y(),
    r(),
    a(),
    W(),
    Xe(),
    ae(),
    m(),
    Ve(),
    J(),
    bt(),
    Et(),
    Mt(),
    ze(),
    Ye(),
    ft(),
    St(),
    We(),
    Lt(),
    vt(),
    K(),
    yt(),
    it(),
    q(),
    Ze(),
    ($ = c()),
    (Vt = F(A, (e, { get: t }) => {
      let n = t(ne, e) ?? 0,
        r = t(ve, e) ?? 0;
      return n > 0 || r > 0;
    })));
})();
export { Rt as ComposerExternalFooter };
//# sourceMappingURL=composer-external-footer.js.map
