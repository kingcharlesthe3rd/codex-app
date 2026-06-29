import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $D as n,
  AB as r,
  AN as i,
  BP as a,
  BV as o,
  Ba as s,
  Bn as c,
  DN as l,
  Da as u,
  Dv as d,
  Ev as f,
  Fd as p,
  Fu as m,
  Ga as h,
  Gi as g,
  Gj as _,
  IB as v,
  It as y,
  Iu as b,
  JV as x,
  La as S,
  MA as C,
  NA as w,
  ON as T,
  Oa as E,
  Op as D,
  Ov as O,
  PB as k,
  Pa as A,
  RP as j,
  Rt as M,
  SV as N,
  TM as P,
  Tp as F,
  VP as I,
  Vn as L,
  Wa as R,
  Wl as z,
  Wt as ee,
  Yi as B,
  Zi as V,
  Zl as te,
  Zu as H,
  aA as U,
  bF as W,
  bM as G,
  bP as ne,
  bk as re,
  cP as ie,
  di as ae,
  du as oe,
  gi as se,
  hM as ce,
  hi as le,
  iF as ue,
  iP as de,
  iS as fe,
  id as pe,
  kN as me,
  ka as he,
  lF as ge,
  lP as _e,
  lS as ve,
  mP as ye,
  mv as be,
  nP as xe,
  pM as Se,
  pP as Ce,
  pi as we,
  pz as Te,
  qV as Ee,
  qi as K,
  qj as De,
  rF as Oe,
  rO as ke,
  rS as Ae,
  sA as je,
  sF as q,
  su as Me,
  uS as Ne,
  ud as Pe,
  uu as Fe,
  wM as Ie,
  wV as Le,
  xM as Re,
  yP as ze,
  zP as Be,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  $i as Ve,
  Ga as He,
  Hr as Ue,
  Ka as We,
  Kl as Ge,
  Vr as Ke,
  Wl as qe,
  Yi as Je,
  Za as Ye,
  eo as Xe,
  to as Ze,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import { bt as Qe, yt as $e } from "./app-initial~app-main~automations-page.js";
import {
  Ai as et,
  Hs as tt,
  Oo as nt,
  Vs as rt,
  h as it,
  ji as at,
  ko as ot,
  v as st,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import { Gd as ct, Wd as lt } from "./app-initial~app-main~onboarding-page~profile.js";
import {
  f as ut,
  p as dt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D.js";
import {
  c as ft,
  l as pt,
  n as mt,
  s as ht,
  t as gt,
  u as _t,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import { n as vt, t as yt } from "./dock.js";
function bt(e) {
  let t = (0, Dt.c)(27),
    { conversationId: n } = e,
    r = ge(),
    i,
    a;
  t[0] === r
    ? ((i = t[1]), (a = t[2]))
    : ((i = Et()),
      (a = i == null ? null : r.formatMessage(jt.extensionVersion, { version: i })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a));
  let o = a,
    s;
  t[3] === r ? (s = t[4]) : ((s = r.formatMessage(jt.codexForChrome)), (t[3] = r), (t[4] = s));
  let c = s,
    u = o == null ? c : `${c} ${o}`,
    d = Ct,
    f = St,
    p = xt,
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, J.jsx)(q, { ...jt.moreActionsTrigger })), (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === r ? (h = t[7]) : ((h = r.formatMessage(jt.moreActionsTrigger)), (t[6] = r), (t[7] = h));
  let _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(He, { className: `icon-xs` })), (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === h
    ? (v = t[10])
    : ((v = (0, J.jsx)(Se, {
        tooltipContent: m,
        children: (0, J.jsx)(l, { color: `ghost`, size: `icon`, "aria-label": h, children: _ }),
      })),
      (t[9] = h),
      (t[10] = v));
  let y;
  t[11] === n
    ? (y = t[12])
    : ((y =
        n == null
          ? null
          : (0, J.jsx)(K.Item, {
              RightIcon: lt,
              onSelect: () => {
                wt(`codex://threads/${n}`);
              },
              children: (0, J.jsx)(q, {
                id: `header.openInApp`,
                defaultMessage: `Open in app`,
                description: `Menu item label for opening the active Chrome extension thread in the Codex desktop app`,
              }),
            })),
      (t[11] = n),
      (t[12] = y));
  let b;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsx)(K.Item, {
        RightIcon: lt,
        onSelect: f,
        children: (0, J.jsx)(q, { ...jt.appSettings }),
      })),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, J.jsx)(K.Item, {
        RightIcon: lt,
        onSelect: p,
        children: (0, J.jsx)(q, { ...jt.chromeComputerUseSettings }),
      })),
      (t[14] = x))
    : (x = t[14]);
  let S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, J.jsx)(q, { ...jt.codexForChrome })), (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === i
    ? (C = t[17])
    : ((C =
        i == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, J.jsx)(q, { ...jt.extensionVersion, values: { version: i } }),
            })),
      (t[16] = i),
      (t[17] = C));
  let w;
  t[18] === C
    ? (w = t[19])
    : ((w = (0, J.jsxs)(`span`, {
        className: `flex w-full items-center justify-between gap-4`,
        children: [S, C],
      })),
      (t[18] = C),
      (t[19] = w));
  let T;
  t[20] !== u || t[21] !== w
    ? ((T = (0, J.jsx)(K.Item, {
        "aria-label": u,
        className: `text-token-foreground/50 hover:!bg-transparent focus:!bg-transparent`,
        onSelect: d,
        children: w,
      })),
      (t[20] = u),
      (t[21] = w),
      (t[22] = T))
    : (T = t[22]);
  let E;
  return (
    t[23] !== T || t[24] !== v || t[25] !== y
      ? ((E = (0, J.jsxs)(g, {
          align: `end`,
          contentWidth: `menuBounded`,
          triggerButton: v,
          children: [y, b, x, T],
        })),
        (t[23] = T),
        (t[24] = v),
        (t[25] = y),
        (t[26] = E))
      : (E = t[26]),
    E
  );
}
function xt() {
  wt(kt);
}
function St() {
  wt(Ot);
}
function Ct() {
  wt(Tt());
}
function wt(e) {
  s({ href: e, initiator: `open_in_browser_bridge` });
}
function Tt() {
  return globalThis.chrome?.runtime?.getURL(At) ?? At;
}
function Et() {
  return globalThis.chrome?.runtime?.getManifest?.().version ?? null;
}
var Dt,
  J,
  Ot,
  kt,
  At,
  jt,
  Mt = e(() => {
    ((Dt = Ee()),
      ue(),
      T(),
      V(),
      S(),
      ce(),
      ct(),
      We(),
      (J = o()),
      (Ot = `codex://settings`),
      (kt = `codex://settings/computer-use/google-chrome`),
      (At = `popup.html`),
      (jt = Oe({
        moreActionsTrigger: {
          id: `header.moreActionsTrigger`,
          defaultMessage: `More actions`,
          description: `Button label for opening more actions from the Chrome extension side panel header`,
        },
        appSettings: {
          id: `header.appSettings`,
          defaultMessage: `App settings`,
          description: `Menu item label for opening app settings in the Codex desktop app from the Chrome extension`,
        },
        chromeComputerUseSettings: {
          id: `header.chromeComputerUseSettings`,
          defaultMessage: `Chrome computer use settings`,
          description: `Menu item label for opening Chrome computer use settings in the Codex desktop app from the Chrome extension`,
        },
        codexForChrome: {
          id: `header.codexForChrome`,
          defaultMessage: `Codex for Chrome`,
          description: `Footer label for the Chrome extension in the more actions menu`,
        },
        extensionVersion: {
          id: `header.extensionVersion`,
          defaultMessage: `v{version}`,
          description: `Footer label for the Chrome extension version in the settings menu`,
        },
      })));
  });
function Nt() {
  let e = (0, Pt.c)(12),
    t = M(),
    n = ge(),
    r = k(Je, `newThread`),
    i;
  e[0] === t
    ? (i = e[1])
    : ((i = (e) => {
        e.defaultPrevented || t();
      }),
      (e[0] = t),
      (e[1] = i));
  let a = i,
    o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Ft.jsx)(q, { ...It.newChat })), (e[2] = o))
    : (o = e[2]);
  let s;
  e[3] === n ? (s = e[4]) : ((s = n.formatMessage(It.newChat)), (e[3] = n), (e[4] = s));
  let c;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Ft.jsx)(ut, { className: `icon-xs` })), (e[5] = c))
    : (c = e[5]);
  let u;
  e[6] !== a || e[7] !== s
    ? ((u = (0, Ft.jsx)(l, {
        color: `ghost`,
        size: `icon`,
        onClick: a,
        "aria-label": s,
        children: c,
      })),
      (e[6] = a),
      (e[7] = s),
      (e[8] = u))
    : (u = e[8]);
  let d;
  return (
    e[9] !== r || e[10] !== u
      ? ((d = (0, Ft.jsx)(Se, { tooltipContent: o, shortcut: r, children: u })),
        (e[9] = r),
        (e[10] = u),
        (e[11] = d))
      : (d = e[11]),
    d
  );
}
var Pt,
  Ft,
  It,
  Lt = e(() => {
    ((Pt = Ee()),
      r(),
      ue(),
      Ve(),
      T(),
      ce(),
      y(),
      dt(),
      (Ft = o()),
      (It = Oe({
        newChat: {
          id: `localConversationPage.newChat`,
          defaultMessage: `New chat`,
          description: `Label for starting a new chat`,
        },
      })));
  });
function Rt(e, t) {
  switch (e.kind) {
    case `remote`:
      return t.remote(e);
    case `local`:
      return t.local(e);
    case `pending-worktree`:
      return t[`pending-worktree`](e);
  }
}
var zt = e(() => {});
function Bt(e) {
  let t = (0, Ut.c)(23),
    { mergedTasks: n, tasksQuery: r } = e,
    i = O(),
    a = f(),
    { cancelPendingWorktree: o } = Xe();
  if (r.isLoading && n.length === 0) return null;
  let s = r.error instanceof xe && r.error.status === 404;
  if (r.isError && n.length === 0 && !s) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(q, {
          id: `codex.recentTasksMenu.errorCloud.inline`,
          defaultMessage: `Failed to load cloud tasks.`,
          description: `Inline error indicator for cloud tasks in recent feed`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === r
      ? (n = t[2])
      : ((n = () => {
          r.refetch();
        }),
        (t[1] = r),
        (t[2] = n));
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Wt.jsx)(q, {
          id: `codex.common.retry`,
          defaultMessage: `Retry`,
          description: `Retry button`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] === n
        ? (a = t[5])
        : ((a = (0, Wt.jsxs)(`div`, {
            className: `mb-2 flex items-center gap-2 text-base text-token-input-placeholder-foreground`,
            children: [
              e,
              (0, Wt.jsx)(l, { size: `default`, color: `outline`, onClick: n, children: i }),
            ],
          })),
          (t[4] = n),
          (t[5] = a)),
      a
    );
  }
  if (n.length === 0) return null;
  let c;
  t[6] === n ? (c = t[7]) : (n.filter(Ht), (c = n), (t[6] = n), (t[7] = c));
  let u = c,
    d;
  if (t[8] !== o || t[9] !== a || t[10] !== i || t[11] !== u) {
    let e;
    (t[13] !== o || t[14] !== a || t[15] !== i
      ? ((e = (e) =>
          Rt(e, {
            remote: (e) =>
              (0, Wt.jsx)(
                pt,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/remote/${e.task.id}`,
                  task: e.task,
                  onClose: Vt,
                },
                e.key,
              ),
            local: (e) =>
              (0, Wt.jsx)(
                gt,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/local/${e.conversation.id}`,
                  conversationId: e.conversation.id,
                  statusIndicatorReplacesMeta: !0,
                  metaContent:
                    e.conversation.createdAt == null
                      ? void 0
                      : (0, Wt.jsx)(it, {
                          dateString: new Date(e.conversation.createdAt).toISOString(),
                        }),
                  onClick: () => {
                    i(`/local/${e.conversation.id}`);
                  },
                },
                e.key,
              ),
            "pending-worktree": (e) =>
              (0, Wt.jsx)(
                ht,
                {
                  useStableTrailingRail: !0,
                  task: e.pendingWorktree,
                  hasAttention: e.pendingWorktree.needsAttention,
                  statusIndicatorReplacesMeta: !0,
                  onClick: () => {
                    i(`/worktree-init-v2/${e.pendingWorktree.id}`);
                  },
                  onArchive: () => {
                    o(e.pendingWorktree.id);
                  },
                },
                e.key,
              ),
          })),
        (t[13] = o),
        (t[14] = a),
        (t[15] = i),
        (t[16] = e))
      : (e = t[16]),
      (d = u.map(e)),
      (t[8] = o),
      (t[9] = a),
      (t[10] = i),
      (t[11] = u),
      (t[12] = d));
  } else d = t[12];
  let p;
  t[17] !== n.length || t[18] !== !1
    ? ((p = !1), (t[17] = n.length), (t[18] = !1), (t[19] = p))
    : (p = t[19]);
  let m;
  return (
    t[20] !== d || t[21] !== p
      ? ((m = (0, Wt.jsxs)(`div`, {
          className: `group/inline -mx-[var(--padding-row-x)] flex flex-col gap-px rounded-xl pb-1 transition-colors [--task-row-trailing-inset:calc(var(--spacing)*1.5)]`,
          children: [d, p],
        })),
        (t[20] = d),
        (t[21] = p),
        (t[22] = m))
      : (m = t[22]),
    m
  );
}
function Vt() {}
function Ht(e) {
  if (e.kind === `remote`) {
    let t = e.task.task_status_display?.latest_turn_status_display?.turn_status;
    return e.task.has_unread_turn === !0 || t === `in_progress` || t === `pending`;
  }
  return e.kind === `local` && e.conversation.hasUnreadTurn
    ? !0
    : e.kind === `local`
      ? fe(e.conversation)
      : e.kind === `pending-worktree`;
}
var Ut,
  Wt,
  Gt = e(() => {
    ((Ut = Ee()),
      t(re(), 1),
      ue(),
      be(),
      Ae(),
      T(),
      st(),
      de(),
      Ye(),
      _t(),
      mt(),
      zt(),
      ft(),
      (Wt = o()));
  });
function Kt(e, t) {
  return typeof e == `string` && e.toLowerCase().includes(t);
}
var qt = e(() => {}),
  Jt,
  Yt = e(() => {
    (ze(), (Jt = ne(`cloudTasksEnvironmentFilterId`, null)));
  });
function Xt(e) {
  let t = (0, Zt.c)(15),
    { searchQuery: n, onQueryChange: r, autoFocus: i } = e,
    a = i === void 0 ? !1 : i,
    o = ge(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Qt.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `recent-tasks-search`,
        children: (0, Qt.jsx)(q, {
          id: `codex.recentTasksMenu.search`,
          defaultMessage: `Search recent tasks`,
          description: `Label for the recent tasks menu search input`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === r ? (c = t[2]) : ((c = (e) => r(e.target.value)), (t[1] = r), (t[2] = c));
  let l;
  t[3] === o
    ? (l = t[4])
    : ((l = o.formatMessage({
        id: `codex.recentTasksMenu.search`,
        defaultMessage: `Search recent tasks`,
        description: `Label for the recent tasks menu search input`,
      })),
      (t[3] = o),
      (t[4] = l));
  let u;
  t[5] !== o || t[6] !== r || t[7] !== n.length
    ? ((u =
        n.length > 0
          ? (0, Qt.jsx)(`button`, {
              type: `button`,
              className: `flex items-center justify-center text-token-input-placeholder-foreground transition-colors hover:text-token-foreground`,
              onClick: () => r(``),
              "aria-label": o.formatMessage({
                id: `codex.recentTasksMenu.clearSearch`,
                defaultMessage: `Clear search`,
                description: `Button label to clear the recent tasks menu search input`,
              }),
              children: (0, Qt.jsx)(C, { className: `icon-2xs` }),
            })
          : null),
      (t[5] = o),
      (t[6] = r),
      (t[7] = n.length),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== a || t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, Qt.jsxs)(`div`, {
          children: [
            s,
            (0, Qt.jsx)(B, {
              id: `recent-tasks-search`,
              autoFocus: a,
              value: n,
              onChange: c,
              placeholder: l,
              trailingContent: u,
            }),
          ],
        })),
        (t[9] = a),
        (t[10] = n),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
var Zt,
  Qt,
  $t = e(() => {
    ((Zt = Ee()), ue(), V(), w(), (Qt = o()));
  });
function en() {
  let e = (0, tn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, nn.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, nn.jsx)(q, {
            id: `codex.recentTasksMenu.empty`,
            defaultMessage: `No chats yet`,
            description: `Empty state for recent tasks menu`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var tn,
  nn,
  rn = e(() => {
    ((tn = Ee()), ue(), (nn = o()));
  }),
  an,
  on = e(() => {
    an = `w-full justify-between !px-[var(--padding-row-x)] !py-[var(--padding-row-y)] text-left`;
  });
function sn(e) {
  let t = (0, ln.c)(64),
    { className: n } = e,
    r = ge(),
    [i, o] = (0, un.useState)(!1),
    [s, c] = (0, un.useState)(``),
    [u, d] = Le(Jt),
    f = tt(),
    { data: p, isLoading: m, isError: h, refetch: g } = oe(),
    _;
  t[0] === s ? (_ = t[1]) : ((_ = s.trim()), (t[0] = s), (t[1] = _));
  let v = _.length > 0,
    y;
  t[2] === v ? (y = t[3]) : ((y = { enabled: v }), (t[2] = v), (t[3] = y));
  let { data: b, isLoading: x, isError: S, refetch: C } = te(s, y),
    w;
  if (t[4] !== s || t[5] !== p || t[6] !== b || t[7] !== f) {
    bb0: {
      let e = s.trim(),
        n = e.length > 0 ? (b ?? []) : (p ?? []);
      if (e.length === 0 && f) {
        let e;
        t[9] === f ? (e = t[10]) : ((e = (e) => e.id === f.id), (t[9] = f), (t[10] = e));
        let r = n.find(e);
        if (!r) {
          w = n;
          break bb0;
        }
        let i;
        (t[11] === f ? (i = t[12]) : ((i = (e) => e.id !== f.id), (t[11] = f), (t[12] = i)),
          (w = [r, ...n.filter(i)]));
        break bb0;
      }
      w = n;
    }
    ((t[4] = s), (t[5] = p), (t[6] = b), (t[7] = f), (t[8] = w));
  } else w = t[8];
  let T = w,
    E;
  t[13] !== u || t[14] !== p
    ? ((E = p?.find((e) => e.id === u) ?? null), (t[13] = u), (t[14] = p), (t[15] = E))
    : (E = t[15]);
  let D = E,
    O;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(q, {
        id: `codex.recentTasksMenu.filterTooltip`,
        defaultMessage: `Filter tasks by environment`,
        description: `Tooltip explaining the environment filter button`,
      })),
      (t[16] = O))
    : (O = t[16]);
  let k = u ? `default` : `icon`,
    A;
  t[17] === n ? (A = t[18]) : ((A = a(`mr-1`, n)), (t[17] = n), (t[18] = A));
  let j;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(yt, { className: `icon-2xs` })), (t[19] = j))
    : (j = t[19]);
  let M;
  t[20] !== u || t[21] !== D
    ? ((M = !!u && D?.label && (0, Y.jsx)(`span`, { className: `text-sm`, children: D.label })),
      (t[20] = u),
      (t[21] = D),
      (t[22] = M))
    : (M = t[22]);
  let N;
  t[23] === M
    ? (N = t[24])
    : ((N = (0, Y.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [j, M] })),
      (t[23] = M),
      (t[24] = N));
  let P;
  t[25] !== N || t[26] !== k || t[27] !== A
    ? ((P = (0, Y.jsx)(le, {
        asChild: !0,
        children: (0, Y.jsx)(Se, {
          tooltipContent: O,
          children: (0, Y.jsx)(l, { color: `ghost`, size: k, className: A, children: N }),
        }),
      })),
      (t[25] = N),
      (t[26] = k),
      (t[27] = A),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Y.jsx)(`div`, {
        className: `pb-1 text-xs tracking-wide text-token-input-placeholder-foreground uppercase`,
        children: (0, Y.jsx)(q, {
          id: `codex.recentTasksMenu.filterCloudTasks`,
          defaultMessage: `Filter cloud tasks`,
          description: `Title for environment filter menu in recent tasks`,
        }),
      })),
      (t[29] = F))
    : (F = t[29]);
  let I = !u,
    L;
  t[30] === d
    ? (L = t[31])
    : ((L = () => {
        (d(null), o(!1));
      }),
      (t[30] = d),
      (t[31] = L));
  let R;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(q, {
        id: `codex.recentTasksMenu.filterAll`,
        defaultMessage: `All`,
        description: `All environments filter option`,
      })),
      (t[32] = R))
    : (R = t[32]);
  let z;
  t[33] !== I || t[34] !== L
    ? ((z = (0, Y.jsx)(cn, { isSelected: I, onClick: L, children: R })),
      (t[33] = I),
      (t[34] = L),
      (t[35] = z))
    : (z = t[35]);
  let ee;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Y.jsx)(K.Separator, {})), (t[36] = ee))
    : (ee = t[36]);
  let B;
  t[37] === r
    ? (B = t[38])
    : ((B = r.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[37] = r),
      (t[38] = B));
  let V;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => c(e.currentTarget.value)), (t[39] = V))
    : (V = t[39]);
  let H;
  t[40] !== s || t[41] !== B
    ? ((H = (0, Y.jsx)(K.Section, {
        className: `my-1`,
        children: (0, Y.jsx)(K.SearchInput, { placeholder: B, value: s, onChange: V }),
      })),
      (t[40] = s),
      (t[41] = B),
      (t[42] = H))
    : (H = t[42]);
  let U;
  t[43] !== u ||
  t[44] !== s ||
  t[45] !== h ||
  t[46] !== m ||
  t[47] !== S ||
  t[48] !== x ||
  t[49] !== T ||
  t[50] !== g ||
  t[51] !== C ||
  t[52] !== d
    ? ((U =
        s.trim().length > 0 && S
          ? (0, Y.jsxs)(K.Message, {
              className: `flex w-full items-center justify-center gap-2`,
              children: [
                (0, Y.jsx)(`span`, {
                  children: (0, Y.jsx)(q, {
                    id: `codex.environments.searchError`,
                    defaultMessage: `Failed to search environments.`,
                    description: `Error shown when environment search fails`,
                  }),
                }),
                (0, Y.jsx)(l, {
                  size: `default`,
                  color: `outline`,
                  onClick: () => {
                    C();
                  },
                  children: (0, Y.jsx)(q, {
                    id: `codex.common.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button`,
                  }),
                }),
              ],
            })
          : s.trim().length === 0 && h
            ? (0, Y.jsxs)(K.Message, {
                className: `flex w-full items-center justify-center gap-2`,
                children: [
                  (0, Y.jsx)(`span`, {
                    children: (0, Y.jsx)(q, {
                      id: `codex.environments.listError`,
                      defaultMessage: `Failed to load environments.`,
                      description: `Error shown when listing environments fails`,
                    }),
                  }),
                  (0, Y.jsx)(l, {
                    size: `default`,
                    color: `outline`,
                    onClick: () => {
                      g();
                    },
                    children: (0, Y.jsx)(q, {
                      id: `codex.common.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry button`,
                    }),
                  }),
                ],
              })
            : T?.length > 0
              ? T.map((e) =>
                  (0, Y.jsx)(
                    cn,
                    {
                      isSelected: e.id === u,
                      onClick: () => {
                        (d(e.id), o(!1));
                      },
                      children: e.label,
                    },
                    e.id,
                  ),
                )
              : x || m
                ? (0, Y.jsx)(me, {
                    className: `icon-xxs my-2 self-center text-token-description-foreground`,
                  })
                : (0, Y.jsx)(K.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(q, {
                      id: `codex.environments.noEnvironmentsFound`,
                      defaultMessage: `No environments found`,
                      description: `Message shown when no Codex environments were found`,
                    }),
                  })),
      (t[43] = u),
      (t[44] = s),
      (t[45] = h),
      (t[46] = m),
      (t[47] = S),
      (t[48] = x),
      (t[49] = T),
      (t[50] = g),
      (t[51] = C),
      (t[52] = d),
      (t[53] = U))
    : (U = t[53]);
  let W;
  t[54] === U
    ? (W = t[55])
    : ((W = (0, Y.jsx)(K.Section, {
        className: `flex max-h-[140px] flex-col overflow-y-auto pb-1`,
        children: U,
      })),
      (t[54] = U),
      (t[55] = W));
  let G;
  t[56] !== z || t[57] !== H || t[58] !== W
    ? ((G = (0, Y.jsx)(we, {
        className: `w-[240px]`,
        side: `top`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex max-w-full flex-col py-1`,
          children: [F, z, ee, H, W],
        }),
      })),
      (t[56] = z),
      (t[57] = H),
      (t[58] = W),
      (t[59] = G))
    : (G = t[59]);
  let ne;
  return (
    t[60] !== i || t[61] !== P || t[62] !== G
      ? ((ne = (0, Y.jsxs)(ae, { open: i, onOpenChange: o, children: [P, G] })),
        (t[60] = i),
        (t[61] = P),
        (t[62] = G),
        (t[63] = ne))
      : (ne = t[63]),
    ne
  );
}
function cn(e) {
  let t = (0, ln.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    o = r && `font-medium`,
    s;
  t[0] === o ? (s = t[1]) : ((s = a(an, o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, Y.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: n })),
      (t[2] = n),
      (t[3] = c));
  let u;
  t[4] === r
    ? (u = t[5])
    : ((u = r ? (0, Y.jsx)(Ie, { className: `icon-2xs shrink-0 opacity-75` }) : null),
      (t[4] = r),
      (t[5] = u));
  let d;
  return (
    t[6] !== i || t[7] !== s || t[8] !== c || t[9] !== u
      ? ((d = (0, Y.jsxs)(l, {
          color: `ghostActive`,
          size: `medium`,
          className: s,
          onClick: i,
          children: [c, u],
        })),
        (t[6] = i),
        (t[7] = s),
        (t[8] = c),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var ln,
  un,
  Y,
  dn = e(() => {
    ((ln = Ee()),
      I(),
      N(),
      (un = t(x(), 1)),
      ue(),
      z(),
      T(),
      V(),
      se(),
      i(),
      ce(),
      P(),
      vt(),
      rt(),
      Yt(),
      on(),
      (Y = o()));
  });
function fn(e) {
  let t = (0, hn.c)(31),
    { filter: n, onSelect: r } = e,
    i = _n[n],
    [a, o] = (0, gn.useState)(!1),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, X.jsx)(`span`, { children: (0, X.jsx)(q, { ...i }) })), (t[0] = i), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(j, { className: `icon-2xs` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === s
    ? (l = t[4])
    : ((l = (0, X.jsx)(le, {
        asChild: !0,
        children: (0, X.jsxs)(`button`, {
          type: `button`,
          className: `flex items-center gap-1 px-2 pt-2 text-sm font-medium text-token-input-placeholder-foreground hover:text-token-foreground`,
          children: [s, c],
        }),
      })),
      (t[3] = s),
      (t[4] = l));
  let u = n === `recent`,
    d;
  t[5] === r
    ? (d = t[6])
    : ((d = () => {
        (r(`recent`), o(!1));
      }),
      (t[5] = r),
      (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(q, {
        id: `codex.recentTasksMenu.recent`,
        defaultMessage: `All tasks`,
        description: `Menu title for recent Codex tasks`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = (0, X.jsx)(mn, { isSelected: u, onClick: d, children: f })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = n === `cloud`,
    h;
  t[11] === r
    ? (h = t[12])
    : ((h = () => {
        (r(`cloud`), o(!1));
      }),
      (t[11] = r),
      (t[12] = h));
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(q, {
        id: `codex.recentTasksMenu.cloud`,
        defaultMessage: `Cloud tasks`,
        description: `Menu title for cloud Codex tasks`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== m || t[15] !== h
    ? ((_ = (0, X.jsx)(mn, { isSelected: m, onClick: h, children: g })),
      (t[14] = m),
      (t[15] = h),
      (t[16] = _))
    : (_ = t[16]);
  let v = n === `local`,
    y;
  t[17] === r
    ? (y = t[18])
    : ((y = () => {
        (r(`local`), o(!1));
      }),
      (t[17] = r),
      (t[18] = y));
  let b;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(q, {
        id: `codex.recentTasksMenu.local`,
        defaultMessage: `Local tasks`,
        description: `Menu title for local Codex tasks`,
      })),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== v || t[21] !== y
    ? ((x = (0, X.jsx)(mn, { isSelected: v, onClick: y, children: b })),
      (t[20] = v),
      (t[21] = y),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== _ || t[24] !== x || t[25] !== p
    ? ((S = (0, X.jsx)(we, {
        className: `w-[220px]`,
        onOpenAutoFocus: pn,
        children: (0, X.jsxs)(`div`, { className: `flex flex-col`, children: [p, _, x] }),
      })),
      (t[23] = _),
      (t[24] = x),
      (t[25] = p),
      (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== a || t[28] !== S || t[29] !== l
      ? ((C = (0, X.jsxs)(ae, { open: a, onOpenChange: o, children: [l, S] })),
        (t[27] = a),
        (t[28] = S),
        (t[29] = l),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function pn(e) {
  e.preventDefault();
}
function mn(e) {
  let t = (0, hn.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    o = r && `font-medium`,
    s;
  t[0] === o ? (s = t[1]) : ((s = a(an, o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, X.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: n })),
      (t[2] = n),
      (t[3] = c));
  let u;
  t[4] === r
    ? (u = t[5])
    : ((u = r ? (0, X.jsx)(Ie, { className: `icon-2xs shrink-0 opacity-75` }) : null),
      (t[4] = r),
      (t[5] = u));
  let d;
  return (
    t[6] !== i || t[7] !== s || t[8] !== c || t[9] !== u
      ? ((d = (0, X.jsxs)(l, {
          color: `ghostActive`,
          size: `medium`,
          className: s,
          onClick: i,
          children: [c, u],
        })),
        (t[6] = i),
        (t[7] = s),
        (t[8] = c),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var hn,
  gn,
  X,
  _n,
  vn = e(() => {
    ((hn = Ee()),
      I(),
      (gn = t(x(), 1)),
      ue(),
      T(),
      se(),
      P(),
      Be(),
      on(),
      (X = o()),
      (_n = Oe({
        recent: {
          id: `codex.recentTasksMenu.recent`,
          defaultMessage: `All tasks`,
          description: `Menu title for recent Codex tasks`,
        },
        cloud: {
          id: `codex.recentTasksMenu.cloud`,
          defaultMessage: `Cloud tasks`,
          description: `Menu title for cloud Codex tasks`,
        },
        local: {
          id: `codex.recentTasksMenu.local`,
          defaultMessage: `Local tasks`,
          description: `Menu title for local Codex tasks`,
        },
      })));
  });
function yn() {
  let e = (0, bn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, xn.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, xn.jsx)(q, {
            id: `codex.recentTasksMenu.searchEmpty`,
            defaultMessage: `No result`,
            description: `Empty state for recent tasks menu search results`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var bn,
  xn,
  Sn = e(() => {
    ((bn = Ee()), ue(), (xn = o()));
  });
function Cn({ conversation: e, isBackgroundSubagentsEnabled: t }) {
  return !je(e, t);
}
var wn = e(() => {
  U();
});
function Tn(e, t, n) {
  let r = Ze(),
    i = De(`12346831`),
    a = v(p),
    o = i ? ve : a,
    s = at(),
    c = (0, kn.useRef)(new Map());
  return (0, kn.useMemo)(() => {
    let i = Dn(
      En({
        tasks: e,
        localConversations: t,
        pendingWorktrees: r,
        envForFilter: n,
        threadSortKey: o,
        isBackgroundSubagentsEnabled: s,
      }),
      c.current,
    );
    return ((c.current = new Map(i.map((e) => [e.key, e]))), i);
  }, [e, n, s, t, r, o]);
}
function En({
  tasks: e,
  localConversations: t,
  pendingWorktrees: n,
  envForFilter: r,
  threadSortKey: i,
  isBackgroundSubagentsEnabled: a,
}) {
  let o = e ?? [],
    s = t.filter((e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: a })),
    c = (0, On.default)(
      r ? o.filter((e) => e.task_status_display?.environment_label === r.label) : o,
      `id`,
    ).map((e) => {
      let t =
        i === `updated_at`
          ? (e.updated_at ?? e.created_at ?? 0)
          : (e.created_at ?? e.updated_at ?? 0);
      return { kind: `remote`, key: he(e.id), at: t * 1e3, task: e };
    }),
    l = s.map((e) => {
      let t = i === `updated_at` ? (e.recencyAt ?? e.updatedAt) : e.createdAt;
      Number.isFinite(t) || ye.error(`local conversation has invalid createdAt or updatedAt`);
      let n = Number.isFinite(t) ? t : Number.isFinite(e.createdAt) ? e.createdAt : 0;
      return { kind: `local`, key: u(e.id), at: n, conversation: e };
    }),
    d = n.map((e) => ({
      kind: `pending-worktree`,
      key: E(e.id),
      at: e.createdAt,
      pendingWorktree: e,
    }));
  return [...c, ...l, ...d].sort((e, t) => t.at - e.at);
}
function Dn(e, t) {
  return e.map((e) => {
    let n = t.get(e.key);
    if (n == null || n.at !== e.at) return e;
    switch (e.kind) {
      case `remote`:
        return n.kind === `remote` && n.task === e.task ? n : e;
      case `local`:
        return n.kind === `local` && n.conversation === e.conversation ? n : e;
      case `pending-worktree`:
        return n.kind === `pending-worktree` && n.pendingWorktree === e.pendingWorktree ? n : e;
    }
  });
}
var On,
  kn,
  An = e(() => {
    ((On = t(re(), 1)), r(), (kn = t(x(), 1)), et(), Pe(), A(), _(), Ne(), Ce(), Ye(), wn());
  });
function jn(e) {
  let t = (0, In.c)(33),
    {
      cloudtasksQuery: r,
      localConversations: i,
      onClose: a,
      autoFocusSearch: o,
      showFilters: s,
    } = e,
    c = o === void 0 ? !1 : o,
    u = s === void 0 ? !0 : s,
    f = ge(),
    { authMethod: p } = b(),
    [m, h] = Le(Rn),
    [g] = Le(Jt),
    _ = u ? m : `recent`,
    v = d(`/local/:conversationId`)?.params?.conversationId ?? null,
    { data: y } = oe(),
    x = at(),
    S;
  t[0] !== g || t[1] !== u || t[2] !== y
    ? ((S = u ? (y?.find((e) => e.id === g) ?? null) : null),
      (t[0] = g),
      (t[1] = u),
      (t[2] = y),
      (t[3] = S))
    : (S = t[3]);
  let C = S,
    w;
  t[4] === x
    ? (w = t[5])
    : ((w = (e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: x })),
      (t[4] = x),
      (t[5] = w));
  let T = i.filter(w),
    E = Tn(r.data, i, C),
    [D, O] = (0, Ln.useState)(``),
    k = (0, Ln.useDeferredValue)(D).trim().toLowerCase(),
    A = k.length > 0,
    j = E.filter(Mn),
    M = A
      ? j.filter((e) => {
          let { task: t } = e;
          return Kt(t.title, k);
        })
      : j,
    N = A ? T.filter((e) => Kt(n(e), k)) : T,
    P = A
      ? E.filter((e) =>
          e.kind === `remote`
            ? Kt(e.task.title, k)
            : e.kind === `local`
              ? Kt(n(e.conversation), k)
              : Kt(Nn(e.pendingWorktree, f), k),
        )
      : E,
    F;
  t[6] !== c || t[7] !== D
    ? ((F = (0, Z.jsx)(K.Section, {
        children: (0, Z.jsx)(Xt, { searchQuery: D, onQueryChange: O, autoFocus: c }),
      })),
      (t[6] = c),
      (t[7] = D),
      (t[8] = F))
    : (F = t[8]);
  let I;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Z.jsx)(`div`, {
        className: `mx-2 border-t-[0.5px] border-token-border`,
        "aria-hidden": !0,
      })),
      (t[9] = I))
    : (I = t[9]);
  let L;
  t[10] !== p || t[11] !== m || t[12] !== h || t[13] !== u
    ? ((L =
        u &&
        p === `chatgpt` &&
        (0, Z.jsxs)(K.Section, {
          className: `flex items-center justify-between px-[var(--padding-row-x)]`,
          children: [
            (0, Z.jsx)(fn, { filter: m, onSelect: h }),
            m !== `local` && (0, Z.jsx)(sn, {}),
          ],
        })),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = u),
      (t[14] = L))
    : (L = t[14]);
  let R = K,
    z =
      _ === `cloud` &&
      (r.isError
        ? (0, Z.jsx)(Fn, {
            onRetry: () => {
              r.refetch();
            },
          })
        : r.isLoading
          ? (0, Z.jsx)(Pn, {})
          : M.length === 0
            ? A
              ? (0, Z.jsx)(yn, {})
              : (0, Z.jsx)(en, {})
            : M.map((e) => (0, Z.jsx)(pt, { task: e.task, onClose: a }, e.key))),
    ee =
      _ === `local` &&
      (N.length
        ? N.map((e) =>
            (0, Z.jsx)(
              zn,
              {
                conversationId: e.id,
                updatedAt: e.recencyAt ?? e.updatedAt,
                isActive: v === e.id,
                onClose: a,
              },
              e.id,
            ),
          )
        : A
          ? (0, Z.jsx)(yn, {})
          : (0, Z.jsx)(en, {})),
    B;
  t[15] !== v ||
  t[16] !== r ||
  t[17] !== P ||
  t[18] !== A ||
  t[19] !== E.length ||
  t[20] !== a ||
  t[21] !== _
    ? ((B =
        _ === `recent` &&
        (r.isError && E.length === 0
          ? (0, Z.jsx)(Fn, {
              onRetry: () => {
                r.refetch();
              },
            })
          : r.isLoading && E.length === 0
            ? (0, Z.jsx)(Pn, {})
            : P.length === 0
              ? A
                ? (0, Z.jsx)(yn, {})
                : (0, Z.jsx)(en, {})
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    r.isError &&
                      (0, Z.jsxs)(`div`, {
                        className: `mx-1 my-1 flex items-center justify-between gap-2 px-1 text-base text-token-foreground`,
                        children: [
                          (0, Z.jsx)(q, {
                            id: `codex.recentTasksMenu.errorCloud.inline`,
                            defaultMessage: `Failed to load cloud tasks.`,
                            description: `Inline error indicator for cloud tasks in recent feed`,
                          }),
                          (0, Z.jsx)(l, {
                            size: `default`,
                            color: `outline`,
                            onClick: () => {
                              r.refetch();
                            },
                            children: (0, Z.jsx)(q, {
                              id: `codex.common.retry`,
                              defaultMessage: `Retry`,
                              description: `Retry button`,
                            }),
                          }),
                        ],
                      }),
                    r.isPending &&
                      !E.length &&
                      (0, Z.jsx)(`div`, {
                        className: `mx-1 my-1 flex items-center gap-2 text-sm text-token-input-placeholder-foreground`,
                        children: (0, Z.jsx)(me, { className: `icon-xs` }),
                      }),
                    P.map((e) =>
                      (0, Z.jsx)(
                        Bn,
                        {
                          item: e,
                          isActive: e.kind === `local` && v === e.conversation.id,
                          onClose: a,
                        },
                        e.key,
                      ),
                    ),
                  ],
                }))),
      (t[15] = v),
      (t[16] = r),
      (t[17] = P),
      (t[18] = A),
      (t[19] = E.length),
      (t[20] = a),
      (t[21] = _),
      (t[22] = B))
    : (B = t[22]);
  let V;
  t[23] !== R.Section || t[24] !== z || t[25] !== ee || t[26] !== B
    ? ((V = (0, Z.jsxs)(R.Section, {
        className: `vertical-scroll-fade-mask flex max-h-[60vh] flex-col gap-0 overflow-y-auto pb-1`,
        children: [z, ee, B],
      })),
      (t[23] = R.Section),
      (t[24] = z),
      (t[25] = ee),
      (t[26] = B),
      (t[27] = V))
    : (V = t[27]);
  let te;
  return (
    t[28] !== V || t[29] !== F || t[30] !== I || t[31] !== L
      ? ((te = (0, Z.jsxs)(`div`, {
          className: `flex max-h-[300px] w-[calc(var(--radix-popper-available-width)_-_var(--padding-panel))] flex-col gap-1`,
          children: [F, I, L, V],
        })),
        (t[28] = V),
        (t[29] = F),
        (t[30] = I),
        (t[31] = L),
        (t[32] = te))
      : (te = t[32]),
    te
  );
}
function Mn(e) {
  return e.kind === `remote`;
}
function Nn(e, t) {
  let n = e.label?.trim();
  return n && n.length > 0
    ? n
    : e.phase === `failed`
      ? t.formatMessage({
          id: `recentTasks.worktreeInitFailedTitle`,
          defaultMessage: `Worktree init failed`,
          description: `Worktree row title when the init script fails`,
        })
      : t.formatMessage({
          id: `recentTasks.worktreeSettingUpTitle`,
          defaultMessage: `Setting up worktree`,
          description: `Worktree row title while init is pending`,
        });
}
function Pn() {
  let e = (0, In.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          className: `flex h-48 items-center justify-center gap-2 text-sm text-token-input-placeholder-foreground`,
          children: (0, Z.jsx)(me, { className: `icon-xs` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fn(e) {
  let t = (0, In.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(q, {
        id: `codex.recentTasksMenu.errorCloud`,
        defaultMessage: `Failed to load tasks.`,
        description: `Error state for cloud tasks in recent tasks menu`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(q, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Z.jsxs)(`div`, {
          className: `flex h-48 items-center justify-center gap-3 text-sm text-token-input-placeholder-foreground`,
          children: [
            r,
            (0, Z.jsx)(l, { size: `default`, color: `outline`, onClick: n, children: i }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var In,
  Ln,
  Z,
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    ((In = Ee()),
      N(),
      (Ln = t(x(), 1)),
      ue(),
      be(),
      m(),
      z(),
      T(),
      V(),
      st(),
      i(),
      et(),
      ke(),
      ie(),
      qt(),
      ze(),
      Ye(),
      _t(),
      mt(),
      Yt(),
      $t(),
      rn(),
      dn(),
      vn(),
      Sn(),
      wn(),
      An(),
      ft(),
      (Z = o()),
      (Rn = ne(`recent-tasks-filter`, `recent`)),
      (zn = (0, Ln.memo)(function (e) {
        let t = (0, In.c)(7),
          { conversationId: n, updatedAt: r, isActive: i, onClose: a } = e,
          o;
        t[0] === r
          ? (o = t[1])
          : ((o = r == null ? void 0 : (0, Z.jsx)(it, { dateString: new Date(r).toISOString() })),
            (t[0] = r),
            (t[1] = o));
        let s;
        return (
          t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o
            ? ((s = (0, Z.jsx)(gt, { conversationId: n, isActive: i, metaContent: o, onClick: a })),
              (t[2] = n),
              (t[3] = i),
              (t[4] = a),
              (t[5] = o),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      })),
      (Bn = (0, Ln.memo)(function (e) {
        let t = (0, In.c)(21),
          { item: n, isActive: r, onClose: i } = e,
          { cancelPendingWorktree: a } = Xe();
        switch (n.kind) {
          case `remote`: {
            let e;
            return (
              t[0] !== n.task || t[1] !== i
                ? ((e = (0, Z.jsx)(pt, { task: n.task, onClose: i })),
                  (t[0] = n.task),
                  (t[1] = i),
                  (t[2] = e))
                : (e = t[2]),
              e
            );
          }
          case `local`: {
            let e;
            t[3] !== n.conversation.recencyAt || t[4] !== n.conversation.updatedAt
              ? ((e =
                  (n.conversation.recencyAt ?? n.conversation.updatedAt) == null
                    ? void 0
                    : (0, Z.jsx)(it, {
                        dateString: new Date(
                          n.conversation.recencyAt ?? n.conversation.updatedAt,
                        ).toISOString(),
                      })),
                (t[3] = n.conversation.recencyAt),
                (t[4] = n.conversation.updatedAt),
                (t[5] = e))
              : (e = t[5]);
            let a;
            return (
              t[6] !== r || t[7] !== n.conversation.id || t[8] !== i || t[9] !== e
                ? ((a = (0, Z.jsx)(gt, {
                    conversationId: n.conversation.id,
                    isActive: r,
                    metaContent: e,
                    onClick: i,
                  })),
                  (t[6] = r),
                  (t[7] = n.conversation.id),
                  (t[8] = i),
                  (t[9] = e),
                  (t[10] = a))
                : (a = t[10]),
              a
            );
          }
          case `pending-worktree`: {
            let e;
            t[11] !== n.pendingWorktree.id || t[12] !== i
              ? ((e = () => {
                  (_e.dispatchHostMessage({
                    type: `navigate-to-route`,
                    path: `/worktree-init-v2/${n.pendingWorktree.id}`,
                  }),
                    i());
                }),
                (t[11] = n.pendingWorktree.id),
                (t[12] = i),
                (t[13] = e))
              : (e = t[13]);
            let r;
            t[14] !== a || t[15] !== n.pendingWorktree.id
              ? ((r = () => {
                  a(n.pendingWorktree.id);
                }),
                (t[14] = a),
                (t[15] = n.pendingWorktree.id),
                (t[16] = r))
              : (r = t[16]);
            let o;
            return (
              t[17] !== n.pendingWorktree || t[18] !== e || t[19] !== r
                ? ((o = (0, Z.jsx)(ht, {
                    task: n.pendingWorktree,
                    hasAttention: n.pendingWorktree.needsAttention,
                    onClick: e,
                    onArchive: r,
                  })),
                  (t[17] = n.pendingWorktree),
                  (t[18] = e),
                  (t[19] = r),
                  (t[20] = o))
                : (o = t[20]),
              o
            );
          }
        }
      })));
  });
function Hn(e) {
  let t = (0, Gn.c)(67),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { label: r, showFilters: i } = n,
    o = i === void 0 ? !0 : i,
    s = ge(),
    { authMethod: c } = b(),
    u = f(),
    { data: d } = pe(),
    p = at(),
    [m, h] = (0, Kn.useState)(!1),
    _;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        h(!1);
      }),
      (t[2] = _))
    : (_ = t[2]);
  let v = Re(_),
    y = m && c === `chatgpt`,
    x;
  t[3] === y
    ? (x = t[4])
    : ((x = { taskFilter: `current`, limit: 20, enabled: y }), (t[3] = y), (t[4] = x));
  let S = Fe(x),
    C;
  t[5] === S.data ? (C = t[6]) : ((C = S.data ?? []), (t[5] = S.data), (t[6] = C));
  let w;
  t[7] === C ? (w = t[8]) : ((w = C.filter(Wn)), (t[7] = C), (t[8] = w));
  let T = w,
    E,
    D,
    O,
    k;
  if (t[9] !== d || t[10] !== p || t[11] !== r || t[12] !== u.pathname || t[13] !== T.length) {
    let e;
    t[18] === p
      ? (e = t[19])
      : ((e = (e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: p })),
        (t[18] = p),
        (t[19] = e));
    let n = (d ?? []).filter(e).filter(Un);
    ((E = T.length + n.length),
      (O = u.pathname !== `/` && E > 0),
      (D = r != null),
      (k = !1),
      (t[9] = d),
      (t[10] = p),
      (t[11] = r),
      (t[12] = u.pathname),
      (t[13] = T.length),
      (t[14] = E),
      (t[15] = D),
      (t[16] = O),
      (t[17] = k));
  } else ((E = t[14]), (D = t[15]), (O = t[16]), (k = t[17]));
  let A = k,
    M;
  t[20] !== A || t[21] !== E || t[22] !== s
    ? ((M = A
        ? s.formatMessage(
            {
              id: `codex.recentTasksMenu.triggerWithUnread`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}. Unread task updates`,
              description: `Accessible label for opening the recent tasks menu when unread task updates are present`,
            },
            { count: E },
          )
        : s.formatMessage(
            {
              id: `codex.recentTasksMenu.trigger`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}`,
              description: `Accessible label for opening the recent tasks menu`,
            },
            { count: E },
          )),
      (t[20] = A),
      (t[21] = E),
      (t[22] = s),
      (t[23] = M))
    : (M = t[23]);
  let N = M,
    P;
  t[24] !== c || t[25] !== m || t[26] !== S
    ? ((P = () => {
        m && c === `chatgpt` && S.refetch();
      }),
      (t[24] = c),
      (t[25] = m),
      (t[26] = S),
      (t[27] = P))
    : (P = t[27]);
  let F;
  (t[28] === m ? (F = t[29]) : ((F = [m]), (t[28] = m), (t[29] = F)), (0, Kn.useEffect)(P, F));
  let I, L;
  (t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        let e = (e) => h(!0);
        return (
          window.addEventListener(`open-recent-tasks-menu`, e),
          () => window.removeEventListener(`open-recent-tasks-menu`, e)
        );
      }),
      (L = []),
      (t[30] = I),
      (t[31] = L))
    : ((I = t[30]), (L = t[31])),
    (0, Kn.useEffect)(I, L));
  let R;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(q, {
        id: `codex.recentTasksMenu.tooltip`,
        defaultMessage: `Task history`,
        description: `Tooltip text for recent tasks menu`,
      })),
      (t[32] = R))
    : (R = t[32]);
  let z = D ? `ghostActive` : `ghost`,
    ee = D ? `default` : `icon`,
    B = D && `max-w-full min-w-0 !px-0 !py-0 hover:!bg-transparent hover:opacity-80`,
    V;
  t[33] === B ? (V = t[34]) : ((V = a(`relative`, B)), (t[33] = B), (t[34] = V));
  let te = D ? void 0 : N,
    H;
  t[35] === A
    ? (H = t[36])
    : ((H = A
        ? (0, Q.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `absolute top-0.5 right-0.5 size-1.5 rounded-full`,
            style: { backgroundColor: `var(--vscode-textLink-foreground)` },
          })
        : null),
      (t[35] = A),
      (t[36] = H));
  let U;
  t[37] !== r || t[38] !== D || t[39] !== O
    ? ((U = D
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`span`, { className: a(`min-w-0 truncate`, !1), children: r }),
              (0, Q.jsx)(j, { className: `icon-2xs shrink-0 text-token-text-tertiary` }),
            ],
          })
        : O
          ? (0, Q.jsx)(`span`, {
              className: `relative inline-flex size-4 justify-center`,
              children: (0, Q.jsx)(me, { className: `icon-xs` }),
            })
          : (0, Q.jsx)(Ke, { className: `icon-xs hover:opacity-80` })),
      (t[37] = r),
      (t[38] = D),
      (t[39] = O),
      (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== E || t[42] !== s
    ? ((W = s.formatMessage(
        {
          id: `codex.recentTasksMenu.count`,
          defaultMessage: `{count, plural, =0 {No tasks in progress} one {# task in progress} other {# tasks in progress}}`,
          description: `Live region text announcing in-progress task count for recent tasks trigger`,
        },
        { count: E },
      )),
      (t[41] = E),
      (t[42] = s),
      (t[43] = W))
    : (W = t[43]);
  let G;
  t[44] === W
    ? (G = t[45])
    : ((G = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: W,
      })),
      (t[44] = W),
      (t[45] = G));
  let ne;
  t[46] !== D ||
  t[47] !== z ||
  t[48] !== ee ||
  t[49] !== V ||
  t[50] !== te ||
  t[51] !== H ||
  t[52] !== U ||
  t[53] !== G
    ? ((ne = (0, Q.jsx)(Se, {
        tooltipContent: R,
        children: (0, Q.jsxs)(l, {
          color: z,
          size: ee,
          className: V,
          allowShrink: D,
          "aria-label": te,
          children: [H, U, G],
        }),
      })),
      (t[46] = D),
      (t[47] = z),
      (t[48] = ee),
      (t[49] = V),
      (t[50] = te),
      (t[51] = H),
      (t[52] = U),
      (t[53] = G),
      (t[54] = ne))
    : (ne = t[54]);
  let re;
  t[55] === d ? (re = t[56]) : ((re = d ?? []), (t[55] = d), (t[56] = re));
  let ie;
  t[57] !== v || t[58] !== m || t[59] !== S || t[60] !== o || t[61] !== re
    ? ((ie = (0, Q.jsx)(jn, {
        cloudtasksQuery: S,
        localConversations: re,
        onClose: v,
        autoFocusSearch: m,
        showFilters: o,
      })),
      (t[57] = v),
      (t[58] = m),
      (t[59] = S),
      (t[60] = o),
      (t[61] = re),
      (t[62] = ie))
    : (ie = t[62]);
  let ae;
  return (
    t[63] !== m || t[64] !== ne || t[65] !== ie
      ? ((ae = (0, Q.jsx)(g, {
          contentClassName: `!pb-0 mt-[9px]`,
          triggerButton: ne,
          open: m,
          onOpenChange: h,
          children: ie,
        })),
        (t[63] = m),
        (t[64] = ne),
        (t[65] = ie),
        (t[66] = ae))
      : (ae = t[66]),
    ae
  );
}
function Un(e) {
  return fe(e);
}
function Wn(e) {
  let t = e.task_status_display?.latest_turn_status_display?.turn_status;
  return t === `in_progress` || t === `pending`;
}
var Gn,
  Kn,
  Q,
  qn = e(() => {
    ((Gn = Ee()),
      I(),
      (Kn = t(x(), 1)),
      ue(),
      be(),
      H(),
      Ae(),
      m(),
      z(),
      T(),
      V(),
      i(),
      ce(),
      et(),
      Be(),
      Ue(),
      G(),
      Vn(),
      wn(),
      (Q = o()));
  });
function Jn(e) {
  let t = (0, $n.c)(66),
    { className: n, desktopDeepLinkConversationId: r, title: i, onBack: o, trailing: s } = e,
    c = f(),
    u = o ?? Xn,
    d = c.pathname === `/`,
    p = Yn,
    { data: m } = pe(),
    h = d,
    g;
  t[0] === h
    ? (g = t[1])
    : ((g = { taskFilter: `current`, limit: 20, enabled: h }), (t[0] = h), (t[1] = g));
  let _ = Fe(g),
    v;
  t[2] === m ? (v = t[3]) : ((v = m ?? []), (t[2] = m), (t[3] = v));
  let y = Tn(_.data, v, null),
    b;
  t[28] === n
    ? (b = t[29])
    : ((b = a(`draggable extension:px-panel`, n)), (t[28] = n), (t[29] = b));
  let x = `justify-between`,
    S;
  t[30] === x
    ? (S = t[31])
    : ((S = a(`flex items-center electron:h-toolbar extension:py-row-y`, x)),
      (t[30] = x),
      (t[31] = S));
  let C;
  t[32] !== o || t[33] !== !1 ? ((C = null), (t[32] = o), (t[33] = !1), (t[34] = C)) : (C = t[34]);
  let w;
  t[35] !== u || t[36] !== y || t[37] !== i
    ? ((w = (0, $.jsx)(`div`, {
        className: `mr-3 line-clamp-1 flex min-w-0 flex-1 items-center gap-1 truncate`,
        style: { viewTransitionName: `header-title` },
        children: i
          ? (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 items-center gap-1`,
              children: [
                (0, $.jsx)(Qn, { onClick: u }),
                (0, $.jsx)(l, {
                  color: `ghostActive`,
                  type: `button`,
                  onClick: p,
                  className: `min-w-0 flex-1 truncate !px-0 !py-0 text-left text-sm text-token-foreground hover:!bg-transparent hover:opacity-80 electron:font-medium`,
                  children: (0, $.jsx)(`span`, { className: `truncate`, children: i }),
                }),
              ],
            })
          : (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, $.jsx)(Zn, { mergedTasks: y, onBack: u, showBackButton: !0 }),
            }),
      })),
      (t[35] = u),
      (t[36] = y),
      (t[37] = i),
      (t[38] = w))
    : (w = t[38]);
  let T;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(Hn, {})), (t[39] = T))
    : (T = t[39]);
  let E;
  t[40] === r
    ? (E = t[41])
    : ((E = (0, $.jsx)(R, {
        chromeExtension: !0,
        children: (0, $.jsx)(bt, { conversationId: r }),
      })),
      (t[40] = r),
      (t[41] = E));
  let D;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(R, { extension: !0, children: (0, $.jsx)($e, {}) })), (t[42] = D))
    : (D = t[42]);
  let O;
  t[43] === !0 ? (O = t[44]) : ((O = (0, $.jsx)(Nt, {})), (t[43] = !0), (t[44] = O));
  let k;
  t[45] !== E || t[46] !== O
    ? ((k = (0, $.jsx)(R, {
        chromeExtension: !0,
        extension: !0,
        children: (0, $.jsx)(`div`, {
          className: `flex flex-shrink-0 items-center`,
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [T, E, D, O],
          }),
        }),
      })),
      (t[45] = E),
      (t[46] = O),
      (t[47] = k))
    : (k = t[47]);
  let A;
  t[48] !== k || t[49] !== s
    ? ((A = (0, $.jsxs)(`div`, {
        className: `flex flex-shrink-0 items-center gap-1`,
        children: [s, k],
      })),
      (t[48] = k),
      (t[49] = s),
      (t[50] = A))
    : (A = t[50]);
  let j;
  t[51] !== A || t[52] !== S || t[53] !== C || t[54] !== w
    ? ((j = (0, $.jsxs)(`div`, { className: S, children: [C, w, A] })),
      (t[51] = A),
      (t[52] = S),
      (t[53] = C),
      (t[54] = w),
      (t[55] = j))
    : (j = t[55]);
  let M;
  t[56] !== d || t[57] !== y || t[58] !== _
    ? ((M =
        d && (0, $.jsx)(`div`, { children: (0, $.jsx)(Bt, { tasksQuery: _, mergedTasks: y }) })),
      (t[56] = d),
      (t[57] = y),
      (t[58] = _),
      (t[59] = M))
    : (M = t[59]);
  let N;
  t[60] === M
    ? (N = t[61])
    : ((N = (0, $.jsx)(R, { extension: !0, children: M })), (t[60] = M), (t[61] = N));
  let P;
  return (
    t[62] !== j || t[63] !== N || t[64] !== b
      ? ((P = (0, $.jsxs)(`div`, { className: b, children: [j, N] })),
        (t[62] = j),
        (t[63] = N),
        (t[64] = b),
        (t[65] = P))
      : (P = t[65]),
    P
  );
}
function Yn() {
  window.dispatchEvent(new CustomEvent(`open-recent-tasks-menu`));
}
function Xn() {
  L(`newThread`, `header_new_thread`);
}
function Zn(e) {
  let t = (0, $n.c)(21),
    { mergedTasks: n, onBack: r, showBackButton: i } = e,
    a = f().pathname === `/`,
    o = d(`/local/:conversationId`)?.params?.conversationId ?? null,
    s;
  t[0] === o ? (s = t[1]) : ((s = o == null ? null : Te(o)), (t[0] = o), (t[1] = s));
  let c = s,
    l = d(`/remote/:taskId`)?.params?.taskId ?? null,
    { data: u } = Me(l),
    p = k(F, c),
    m = k(Ge, c);
  if (l && u?.task?.title) {
    let e;
    t[2] !== r || t[3] !== i
      ? ((e = i ? (0, $.jsx)(Qn, { onClick: r }) : null), (t[2] = r), (t[3] = i), (t[4] = e))
      : (e = t[4]);
    let n;
    t[5] === u.task.title
      ? (n = t[6])
      : ((n = (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: u.task.title,
        })),
        (t[5] = u.task.title),
        (t[6] = n));
    let a;
    return (
      t[7] !== e || t[8] !== n
        ? ((a = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, n],
          })),
          (t[7] = e),
          (t[8] = n),
          (t[9] = a))
        : (a = t[9]),
      a
    );
  }
  if (c && p) {
    let e;
    t[10] !== r || t[11] !== i
      ? ((e = i ? (0, $.jsx)(Qn, { onClick: r }) : null), (t[10] = r), (t[11] = i), (t[12] = e))
      : (e = t[12]);
    let n;
    t[13] === m
      ? (n = t[14])
      : ((n =
          m ||
          (0, $.jsx)(q, {
            id: `codex.taskRow.title`,
            defaultMessage: `New chat`,
            description: `Default title for a Codex thread that doesn't have a title`,
          })),
        (t[13] = m),
        (t[14] = n));
    let a;
    t[15] === n
      ? (a = t[16])
      : ((a = (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: n,
        })),
        (t[15] = n),
        (t[16] = a));
    let o;
    return (
      t[17] !== e || t[18] !== a
        ? ((o = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, a],
          })),
          (t[17] = e),
          (t[18] = a),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  if (a) {
    if (n.length === 0) return null;
    let e;
    return (
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(q, {
            id: `header.recentChats`,
            defaultMessage: `Tasks`,
            description: `Header label for recent tasks`,
          })),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  return null;
}
function Qn(e) {
  let t = (0, $n.c)(7),
    { onClick: n } = e,
    r = ge(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(q, { ...er.backButton })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r ? (a = t[2]) : ((a = r.formatMessage(er.backButton)), (t[1] = r), (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(nt, { className: `size-3` })), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== n || t[5] !== a
      ? ((s = (0, $.jsx)(R, {
          chromeExtension: !0,
          extension: !0,
          children: (0, $.jsx)(Se, {
            tooltipContent: i,
            children: (0, $.jsx)(l, {
              color: `ghost`,
              size: `icon`,
              onClick: n,
              className: `opacity-70 hover:bg-transparent hover:opacity-100 focus:bg-transparent active:bg-transparent`,
              "aria-label": a,
              children: o,
            }),
          }),
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var $n,
  $,
  er,
  tr = e(() => {
    (($n = Ee()),
      I(),
      r(),
      W(),
      ue(),
      be(),
      H(),
      D(),
      z(),
      c(),
      T(),
      ce(),
      h(),
      ot(),
      ee(),
      qe(),
      Qe(),
      Mt(),
      Lt(),
      Gt(),
      qn(),
      An(),
      ($ = o()),
      (er = Oe({
        backButton: {
          id: `header.back`,
          defaultMessage: `Back`,
          description: `Back button label for returning to the previous screen`,
        },
        newChatTitle: {
          id: `header.newChatTitle`,
          defaultMessage: `New chat`,
          description: `Fallback title shown in the Chrome extension side panel header before a chat exists`,
        },
      })));
  });
export { tr as n, Jn as t };
//# sourceMappingURL=header.js.map
