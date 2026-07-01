import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $i as r,
  $x as i,
  Bt as a,
  CA as o,
  CP as s,
  Du as c,
  EB as l,
  Ed as u,
  Eu as d,
  Fi as f,
  Fl as p,
  GP as m,
  Gi as h,
  Gr as g,
  HP as _,
  Hi as v,
  Hl as y,
  Hu as b,
  Ii as x,
  JN as S,
  Ji as C,
  Jx as w,
  Li as T,
  Mj as E,
  Pj as D,
  QN as O,
  Qi as k,
  Qj as A,
  Ql as j,
  RV as M,
  SA as N,
  SP as P,
  TP as F,
  UD as I,
  UN as L,
  Ur as ee,
  VN as R,
  VP as z,
  Vt as B,
  XR as V,
  Yk as H,
  Yr as U,
  Yu as te,
  Zk as W,
  _v as G,
  aM as K,
  aa as ne,
  av as re,
  bB as ie,
  cl as ae,
  dr as oe,
  eM as se,
  eS as ce,
  fN as q,
  gp as le,
  gr as ue,
  gv as de,
  hN as fe,
  hV as pe,
  hr as me,
  iF as he,
  ia as ge,
  jV as _e,
  lM as ve,
  ll as ye,
  mN as be,
  nP as xe,
  nu as Se,
  oM as Ce,
  pN as we,
  pV as Te,
  pr as Ee,
  qD as De,
  qN as Oe,
  qP as ke,
  qr as Ae,
  qx as je,
  rP as Me,
  td as Ne,
  tu as Pe,
  uM as Fe,
  uk as Ie,
  vv as Le,
  wB as Re,
  wP as ze,
  yp as Be,
  zV as Ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Hy as He,
  Uy as Ue,
  Zh as We,
  _C as Ge,
  a_ as Ke,
  bf as qe,
  dy as Je,
  fy as Ye,
  hC as Xe,
  ip as Ze,
  ny as Qe,
  o_ as $e,
  qh as et,
  sp as tt,
  ty as nt,
  yf as rt,
  zy as it,
} from "./app-initial~app-main~onboarding-page.js";
import {
  n as at,
  t as ot,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import {
  M as st,
  at as ct,
  it as lt,
  j as ut,
  ot as dt,
  st as ft,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  r as pt,
  s as mt,
  t as ht,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf.js";
import {
  h as gt,
  m as _t,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import { n as vt, t as yt } from "./dock-5J4-9xT8.js";
function bt(e) {
  let t = (0, Dt.c)(27),
    { conversationId: n } = e,
    r = ke(),
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
    l = o == null ? c : `${c} ${o}`,
    u = Ct,
    d = St,
    f = xt,
    p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(m, { ...jt.moreActionsTrigger })), (t[5] = p))
    : (p = t[5]);
  let h;
  t[6] === r ? (h = t[7]) : ((h = r.formatMessage(jt.moreActionsTrigger)), (t[6] = r), (t[7] = h));
  let _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(Je, { className: `icon-xs` })), (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === h
    ? (v = t[10])
    : ((v = (0, J.jsx)(A, {
        tooltipContent: p,
        children: (0, J.jsx)(q, { color: `ghost`, size: `icon`, "aria-label": h, children: _ }),
      })),
      (t[9] = h),
      (t[10] = v));
  let y;
  t[11] === n
    ? (y = t[12])
    : ((y =
        n == null
          ? null
          : (0, J.jsx)(g.Item, {
              RightIcon: nt,
              onSelect: () => {
                wt(`codex://threads/${n}`);
              },
              children: (0, J.jsx)(m, {
                id: `header.openInApp`,
                defaultMessage: `Open in app`,
                description: `Menu item label for opening the active Chrome extension thread in the Codex desktop app`,
              }),
            })),
      (t[11] = n),
      (t[12] = y));
  let b;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsx)(g.Item, {
        RightIcon: nt,
        onSelect: d,
        children: (0, J.jsx)(m, { ...jt.appSettings }),
      })),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, J.jsx)(g.Item, {
        RightIcon: nt,
        onSelect: f,
        children: (0, J.jsx)(m, { ...jt.chromeComputerUseSettings }),
      })),
      (t[14] = x))
    : (x = t[14]);
  let S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, J.jsx)(m, { ...jt.codexForChrome })), (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === i
    ? (C = t[17])
    : ((C =
        i == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, J.jsx)(m, { ...jt.extensionVersion, values: { version: i } }),
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
  t[20] !== l || t[21] !== w
    ? ((T = (0, J.jsx)(g.Item, {
        "aria-label": l,
        className: `text-token-foreground/50 hover:!bg-transparent focus:!bg-transparent`,
        onSelect: u,
        children: w,
      })),
      (t[20] = l),
      (t[21] = w),
      (t[22] = T))
    : (T = t[22]);
  let E;
  return (
    t[23] !== T || t[24] !== v || t[25] !== y
      ? ((E = (0, J.jsxs)(ee, {
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
  C({ href: e, initiator: `open_in_browser_bridge` });
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
    ((Dt = M()),
      _(),
      we(),
      U(),
      h(),
      se(),
      Qe(),
      Ye(),
      (J = _e()),
      (Ot = `codex://settings`),
      (kt = `codex://settings/computer-use/google-chrome`),
      (At = `popup.html`),
      (jt = z({
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
    t = pt(),
    n = ke(),
    r = Re(et, `newThread`),
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
    ? ((o = (0, Ft.jsx)(m, { ...It.newChat })), (e[2] = o))
    : (o = e[2]);
  let s;
  e[3] === n ? (s = e[4]) : ((s = n.formatMessage(It.newChat)), (e[3] = n), (e[4] = s));
  let c;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Ft.jsx)(_t, { className: `icon-xs` })), (e[5] = c))
    : (c = e[5]);
  let l;
  e[6] !== a || e[7] !== s
    ? ((l = (0, Ft.jsx)(q, {
        color: `ghost`,
        size: `icon`,
        onClick: a,
        "aria-label": s,
        children: c,
      })),
      (e[6] = a),
      (e[7] = s),
      (e[8] = l))
    : (l = e[8]);
  let u;
  return (
    e[9] !== r || e[10] !== l
      ? ((u = (0, Ft.jsx)(A, { tooltipContent: o, shortcut: r, children: l })),
        (e[9] = r),
        (e[10] = l),
        (e[11] = u))
      : (u = e[11]),
    u
  );
}
var Pt,
  Ft,
  It,
  Lt = e(() => {
    ((Pt = M()),
      ie(),
      _(),
      We(),
      we(),
      se(),
      ht(),
      gt(),
      (Ft = _e()),
      (It = z({
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
    i = Le(),
    a = de(),
    { cancelPendingWorktree: o } = He();
  if (r.isLoading && n.length === 0) return null;
  let s = r.error instanceof R && r.error.status === 404;
  if (r.isError && n.length === 0 && !s) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(m, {
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
      ? ((i = (0, Wt.jsx)(m, {
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
              (0, Wt.jsx)(q, { size: `default`, color: `outline`, onClick: n, children: i }),
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
  let l = c,
    u;
  if (t[8] !== o || t[9] !== a || t[10] !== i || t[11] !== l) {
    let e;
    (t[13] !== o || t[14] !== a || t[15] !== i
      ? ((e = (e) =>
          Rt(e, {
            remote: (e) =>
              (0, Wt.jsx)(
                dt,
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
                ut,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/local/${e.conversation.id}`,
                  conversationId: e.conversation.id,
                  statusIndicatorReplacesMeta: !0,
                  metaContent:
                    e.conversation.createdAt == null
                      ? void 0
                      : (0, Wt.jsx)(Ze, {
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
                lt,
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
      (u = l.map(e)),
      (t[8] = o),
      (t[9] = a),
      (t[10] = i),
      (t[11] = l),
      (t[12] = u));
  } else u = t[12];
  let d;
  t[17] !== n.length || t[18] !== !1
    ? ((d = !1), (t[17] = n.length), (t[18] = !1), (t[19] = d))
    : (d = t[19]);
  let f;
  return (
    t[20] !== u || t[21] !== d
      ? ((f = (0, Wt.jsxs)(`div`, {
          className: `group/inline -mx-[var(--padding-row-x)] flex flex-col gap-px rounded-xl pb-1 transition-colors [--task-row-trailing-inset:calc(var(--spacing)*1.5)]`,
          children: [u, d],
        })),
        (t[20] = u),
        (t[21] = d),
        (t[22] = f))
      : (f = t[22]),
    f
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
      ? w(e.conversation)
      : e.kind === `pending-worktree`;
}
var Ut,
  Wt,
  Gt = e(() => {
    ((Ut = M()),
      t(Ie(), 1),
      _(),
      re(),
      je(),
      we(),
      tt(),
      L(),
      it(),
      ft(),
      st(),
      zt(),
      ct(),
      (Wt = _e()));
  });
function Kt(e, t) {
  return typeof e == `string` && e.toLowerCase().includes(t);
}
var qt = e(() => {}),
  Jt,
  Yt = e(() => {
    (xe(), (Jt = Me(`cloudTasksEnvironmentFilterId`, null)));
  });
function Xt(e) {
  let t = (0, Zt.c)(15),
    { searchQuery: n, onQueryChange: r, autoFocus: i } = e,
    a = i === void 0 ? !1 : i,
    o = ke(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Qt.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `recent-tasks-search`,
        children: (0, Qt.jsx)(m, {
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
              children: (0, Qt.jsx)(N, { className: `icon-2xs` }),
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
            (0, Qt.jsx)(Ae, {
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
    ((Zt = M()), _(), U(), o(), (Qt = _e()));
  });
function en() {
  let e = (0, tn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, nn.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, nn.jsx)(m, {
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
    ((tn = M()), _(), (nn = _e()));
  }),
  an,
  on = e(() => {
    an = `w-full justify-between !px-[var(--padding-row-x)] !py-[var(--padding-row-y)] text-left`;
  });
function sn(e) {
  let t = (0, ln.c)(64),
    { className: n } = e,
    r = ke(),
    [i, a] = (0, un.useState)(!1),
    [o, s] = (0, un.useState)(``),
    [c, l] = pe(Jt),
    u = ye(),
    { data: d, isLoading: f, isError: p, refetch: h } = Se(),
    _;
  t[0] === o ? (_ = t[1]) : ((_ = o.trim()), (t[0] = o), (t[1] = _));
  let v = _.length > 0,
    b;
  t[2] === v ? (b = t[3]) : ((b = { enabled: v }), (t[2] = v), (t[3] = b));
  let { data: x, isLoading: S, isError: C, refetch: w } = y(o, b),
    T;
  if (t[4] !== o || t[5] !== d || t[6] !== x || t[7] !== u) {
    bb0: {
      let e = o.trim(),
        n = e.length > 0 ? (x ?? []) : (d ?? []);
      if (e.length === 0 && u) {
        let e;
        t[9] === u ? (e = t[10]) : ((e = (e) => e.id === u.id), (t[9] = u), (t[10] = e));
        let r = n.find(e);
        if (!r) {
          T = n;
          break bb0;
        }
        let i;
        (t[11] === u ? (i = t[12]) : ((i = (e) => e.id !== u.id), (t[11] = u), (t[12] = i)),
          (T = [r, ...n.filter(i)]));
        break bb0;
      }
      T = n;
    }
    ((t[4] = o), (t[5] = d), (t[6] = x), (t[7] = u), (t[8] = T));
  } else T = t[8];
  let E = T,
    D;
  t[13] !== c || t[14] !== d
    ? ((D = d?.find((e) => e.id === c) ?? null), (t[13] = c), (t[14] = d), (t[15] = D))
    : (D = t[15]);
  let O = D,
    k;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(m, {
        id: `codex.recentTasksMenu.filterTooltip`,
        defaultMessage: `Filter tasks by environment`,
        description: `Tooltip explaining the environment filter button`,
      })),
      (t[16] = k))
    : (k = t[16]);
  let j = c ? `default` : `icon`,
    M;
  t[17] === n ? (M = t[18]) : ((M = ze(`mr-1`, n)), (t[17] = n), (t[18] = M));
  let N;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Y.jsx)(yt, { className: `icon-2xs` })), (t[19] = N))
    : (N = t[19]);
  let P;
  t[20] !== c || t[21] !== O
    ? ((P = !!c && O?.label && (0, Y.jsx)(`span`, { className: `text-sm`, children: O.label })),
      (t[20] = c),
      (t[21] = O),
      (t[22] = P))
    : (P = t[22]);
  let F;
  t[23] === P
    ? (F = t[24])
    : ((F = (0, Y.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [N, P] })),
      (t[23] = P),
      (t[24] = F));
  let I;
  t[25] !== F || t[26] !== j || t[27] !== M
    ? ((I = (0, Y.jsx)(me, {
        asChild: !0,
        children: (0, Y.jsx)(A, {
          tooltipContent: k,
          children: (0, Y.jsx)(q, { color: `ghost`, size: j, className: M, children: F }),
        }),
      })),
      (t[25] = F),
      (t[26] = j),
      (t[27] = M),
      (t[28] = I))
    : (I = t[28]);
  let L;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Y.jsx)(`div`, {
        className: `pb-1 text-xs tracking-wide text-token-input-placeholder-foreground uppercase`,
        children: (0, Y.jsx)(m, {
          id: `codex.recentTasksMenu.filterCloudTasks`,
          defaultMessage: `Filter cloud tasks`,
          description: `Title for environment filter menu in recent tasks`,
        }),
      })),
      (t[29] = L))
    : (L = t[29]);
  let ee = !c,
    R;
  t[30] === l
    ? (R = t[31])
    : ((R = () => {
        (l(null), a(!1));
      }),
      (t[30] = l),
      (t[31] = R));
  let z;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Y.jsx)(m, {
        id: `codex.recentTasksMenu.filterAll`,
        defaultMessage: `All`,
        description: `All environments filter option`,
      })),
      (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] !== ee || t[34] !== R
    ? ((B = (0, Y.jsx)(cn, { isSelected: ee, onClick: R, children: z })),
      (t[33] = ee),
      (t[34] = R),
      (t[35] = B))
    : (B = t[35]);
  let V;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Y.jsx)(g.Separator, {})), (t[36] = V))
    : (V = t[36]);
  let H;
  t[37] === r
    ? (H = t[38])
    : ((H = r.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[37] = r),
      (t[38] = H));
  let U;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => s(e.currentTarget.value)), (t[39] = U))
    : (U = t[39]);
  let te;
  t[40] !== o || t[41] !== H
    ? ((te = (0, Y.jsx)(g.Section, {
        className: `my-1`,
        children: (0, Y.jsx)(g.SearchInput, { placeholder: H, value: o, onChange: U }),
      })),
      (t[40] = o),
      (t[41] = H),
      (t[42] = te))
    : (te = t[42]);
  let W;
  t[43] !== c ||
  t[44] !== o ||
  t[45] !== p ||
  t[46] !== f ||
  t[47] !== C ||
  t[48] !== S ||
  t[49] !== E ||
  t[50] !== h ||
  t[51] !== w ||
  t[52] !== l
    ? ((W =
        o.trim().length > 0 && C
          ? (0, Y.jsxs)(g.Message, {
              className: `flex w-full items-center justify-center gap-2`,
              children: [
                (0, Y.jsx)(`span`, {
                  children: (0, Y.jsx)(m, {
                    id: `codex.environments.searchError`,
                    defaultMessage: `Failed to search environments.`,
                    description: `Error shown when environment search fails`,
                  }),
                }),
                (0, Y.jsx)(q, {
                  size: `default`,
                  color: `outline`,
                  onClick: () => {
                    w();
                  },
                  children: (0, Y.jsx)(m, {
                    id: `codex.common.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button`,
                  }),
                }),
              ],
            })
          : o.trim().length === 0 && p
            ? (0, Y.jsxs)(g.Message, {
                className: `flex w-full items-center justify-center gap-2`,
                children: [
                  (0, Y.jsx)(`span`, {
                    children: (0, Y.jsx)(m, {
                      id: `codex.environments.listError`,
                      defaultMessage: `Failed to load environments.`,
                      description: `Error shown when listing environments fails`,
                    }),
                  }),
                  (0, Y.jsx)(q, {
                    size: `default`,
                    color: `outline`,
                    onClick: () => {
                      h();
                    },
                    children: (0, Y.jsx)(m, {
                      id: `codex.common.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry button`,
                    }),
                  }),
                ],
              })
            : E?.length > 0
              ? E.map((e) =>
                  (0, Y.jsx)(
                    cn,
                    {
                      isSelected: e.id === c,
                      onClick: () => {
                        (l(e.id), a(!1));
                      },
                      children: e.label,
                    },
                    e.id,
                  ),
                )
              : S || f
                ? (0, Y.jsx)(be, {
                    className: `icon-xxs my-2 self-center text-token-description-foreground`,
                  })
                : (0, Y.jsx)(g.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(m, {
                      id: `codex.environments.noEnvironmentsFound`,
                      defaultMessage: `No environments found`,
                      description: `Message shown when no Codex environments were found`,
                    }),
                  })),
      (t[43] = c),
      (t[44] = o),
      (t[45] = p),
      (t[46] = f),
      (t[47] = C),
      (t[48] = S),
      (t[49] = E),
      (t[50] = h),
      (t[51] = w),
      (t[52] = l),
      (t[53] = W))
    : (W = t[53]);
  let G;
  t[54] === W
    ? (G = t[55])
    : ((G = (0, Y.jsx)(g.Section, {
        className: `flex max-h-[140px] flex-col overflow-y-auto pb-1`,
        children: W,
      })),
      (t[54] = W),
      (t[55] = G));
  let K;
  t[56] !== B || t[57] !== te || t[58] !== G
    ? ((K = (0, Y.jsx)(Ee, {
        className: `w-[240px]`,
        side: `top`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex max-w-full flex-col py-1`,
          children: [L, B, V, te, G],
        }),
      })),
      (t[56] = B),
      (t[57] = te),
      (t[58] = G),
      (t[59] = K))
    : (K = t[59]);
  let ne;
  return (
    t[60] !== i || t[61] !== I || t[62] !== K
      ? ((ne = (0, Y.jsxs)(oe, { open: i, onOpenChange: a, children: [I, K] })),
        (t[60] = i),
        (t[61] = I),
        (t[62] = K),
        (t[63] = ne))
      : (ne = t[63]),
    ne
  );
}
function cn(e) {
  let t = (0, ln.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = ze(an, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Y.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: n })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r ? (0, Y.jsx)(ve, { className: `icon-2xs shrink-0 opacity-75` }) : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, Y.jsxs)(q, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var ln,
  un,
  Y,
  dn = e(() => {
    ((ln = M()),
      F(),
      Te(),
      (un = t(Ve(), 1)),
      _(),
      p(),
      we(),
      U(),
      ue(),
      fe(),
      se(),
      Fe(),
      vt(),
      ae(),
      Yt(),
      on(),
      (Y = _e()));
  });
function fn(e) {
  let t = (0, hn.c)(31),
    { filter: n, onSelect: r } = e,
    i = _n[n],
    [a, o] = (0, gn.useState)(!1),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, X.jsx)(`span`, { children: (0, X.jsx)(m, { ...i }) })), (t[0] = i), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(P, { className: `icon-2xs` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === s
    ? (l = t[4])
    : ((l = (0, X.jsx)(me, {
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
    ? ((f = (0, X.jsx)(m, {
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
  let h = n === `cloud`,
    g;
  t[11] === r
    ? (g = t[12])
    : ((g = () => {
        (r(`cloud`), o(!1));
      }),
      (t[11] = r),
      (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(m, {
        id: `codex.recentTasksMenu.cloud`,
        defaultMessage: `Cloud tasks`,
        description: `Menu title for cloud Codex tasks`,
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== h || t[15] !== g
    ? ((v = (0, X.jsx)(mn, { isSelected: h, onClick: g, children: _ })),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v))
    : (v = t[16]);
  let y = n === `local`,
    b;
  t[17] === r
    ? (b = t[18])
    : ((b = () => {
        (r(`local`), o(!1));
      }),
      (t[17] = r),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(m, {
        id: `codex.recentTasksMenu.local`,
        defaultMessage: `Local tasks`,
        description: `Menu title for local Codex tasks`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b
    ? ((S = (0, X.jsx)(mn, { isSelected: y, onClick: b, children: x })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== v || t[24] !== S || t[25] !== p
    ? ((C = (0, X.jsx)(Ee, {
        className: `w-[220px]`,
        onOpenAutoFocus: pn,
        children: (0, X.jsxs)(`div`, { className: `flex flex-col`, children: [p, v, S] }),
      })),
      (t[23] = v),
      (t[24] = S),
      (t[25] = p),
      (t[26] = C))
    : (C = t[26]);
  let w;
  return (
    t[27] !== a || t[28] !== C || t[29] !== l
      ? ((w = (0, X.jsxs)(oe, { open: a, onOpenChange: o, children: [l, C] })),
        (t[27] = a),
        (t[28] = C),
        (t[29] = l),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
function pn(e) {
  e.preventDefault();
}
function mn(e) {
  let t = (0, hn.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = ze(an, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, X.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: n })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r ? (0, X.jsx)(ve, { className: `icon-2xs shrink-0 opacity-75` }) : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, X.jsxs)(q, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var hn,
  gn,
  X,
  _n,
  vn = e(() => {
    ((hn = M()),
      F(),
      (gn = t(Ve(), 1)),
      _(),
      we(),
      ue(),
      Fe(),
      s(),
      on(),
      (X = _e()),
      (_n = z({
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
          children: (0, xn.jsx)(m, {
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
    ((bn = M()), _(), (xn = _e()));
  });
function Cn({ conversation: e, isBackgroundSubagentsEnabled: t }) {
  return !W(e, t);
}
var wn = e(() => {
  H();
});
function Tn(e, t, n) {
  let r = Ue(),
    a = D(`12346831`),
    o = l(u),
    s = a ? i : o,
    c = $e(),
    d = (0, kn.useRef)(new Map());
  return (0, kn.useMemo)(() => {
    let i = Dn(
      En({
        tasks: e,
        localConversations: t,
        pendingWorktrees: r,
        envForFilter: n,
        threadSortKey: s,
        isBackgroundSubagentsEnabled: c,
      }),
      d.current,
    );
    return ((d.current = new Map(i.map((e) => [e.key, e]))), i);
  }, [e, n, c, t, r, s]);
}
function En({
  tasks: e,
  localConversations: t,
  pendingWorktrees: r,
  envForFilter: i,
  threadSortKey: a,
  isBackgroundSubagentsEnabled: o,
}) {
  let s = e ?? [],
    c = t.filter((e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: o })),
    l = (0, On.default)(
      i ? s.filter((e) => e.task_status_display?.environment_label === i.label) : s,
      `id`,
    ).map((e) => {
      let t =
        a === `updated_at`
          ? (e.updated_at ?? e.created_at ?? 0)
          : (e.created_at ?? e.updated_at ?? 0);
      return { kind: `remote`, key: T(e.id), at: t * 1e3, task: e };
    }),
    u = c.map((e) => {
      let t = a === `updated_at` ? (e.recencyAt ?? e.updatedAt) : e.createdAt;
      Number.isFinite(t) || n.error(`local conversation has invalid createdAt or updatedAt`);
      let r = Number.isFinite(t) ? t : Number.isFinite(e.createdAt) ? e.createdAt : 0;
      return { kind: `local`, key: f(e.id), at: r, conversation: e };
    }),
    d = r.map((e) => ({
      kind: `pending-worktree`,
      key: x(e.id),
      at: e.createdAt,
      pendingWorktree: e,
    }));
  return [...l, ...u, ...d].sort((e, t) => t.at - e.at);
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
    ((On = t(Ie(), 1)), ie(), (kn = t(Ve(), 1)), Ke(), Ne(), v(), E(), ce(), O(), it(), wn());
  });
function jn(e) {
  let t = (0, In.c)(33),
    {
      cloudtasksQuery: n,
      localConversations: r,
      onClose: i,
      autoFocusSearch: a,
      showFilters: o,
    } = e,
    s = a === void 0 ? !1 : a,
    l = o === void 0 ? !0 : o,
    u = ke(),
    { authMethod: d } = c(),
    [f, p] = pe(Rn),
    [h] = pe(Jt),
    _ = l ? f : `recent`,
    v = G(`/local/:conversationId`)?.params?.conversationId ?? null,
    { data: y } = Se(),
    b = $e(),
    x;
  t[0] !== h || t[1] !== l || t[2] !== y
    ? ((x = l ? (y?.find((e) => e.id === h) ?? null) : null),
      (t[0] = h),
      (t[1] = l),
      (t[2] = y),
      (t[3] = x))
    : (x = t[3]);
  let S = x,
    C;
  t[4] === b
    ? (C = t[5])
    : ((C = (e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: b })),
      (t[4] = b),
      (t[5] = C));
  let w = r.filter(C),
    T = Tn(n.data, r, S),
    [E, D] = (0, Ln.useState)(``),
    O = (0, Ln.useDeferredValue)(E).trim().toLowerCase(),
    k = O.length > 0,
    A = T.filter(Mn),
    j = k
      ? A.filter((e) => {
          let { task: t } = e;
          return Kt(t.title, O);
        })
      : A,
    M = k ? w.filter((e) => Kt(I(e), O)) : w,
    N = k
      ? T.filter((e) =>
          e.kind === `remote`
            ? Kt(e.task.title, O)
            : e.kind === `local`
              ? Kt(I(e.conversation), O)
              : Kt(Nn(e.pendingWorktree, u), O),
        )
      : T,
    P;
  t[6] !== s || t[7] !== E
    ? ((P = (0, Z.jsx)(g.Section, {
        children: (0, Z.jsx)(Xt, { searchQuery: E, onQueryChange: D, autoFocus: s }),
      })),
      (t[6] = s),
      (t[7] = E),
      (t[8] = P))
    : (P = t[8]);
  let F;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(`div`, {
        className: `mx-2 border-t-[0.5px] border-token-border`,
        "aria-hidden": !0,
      })),
      (t[9] = F))
    : (F = t[9]);
  let L;
  t[10] !== d || t[11] !== f || t[12] !== p || t[13] !== l
    ? ((L =
        l &&
        d === `chatgpt` &&
        (0, Z.jsxs)(g.Section, {
          className: `flex items-center justify-between px-[var(--padding-row-x)]`,
          children: [
            (0, Z.jsx)(fn, { filter: f, onSelect: p }),
            f !== `local` && (0, Z.jsx)(sn, {}),
          ],
        })),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = l),
      (t[14] = L))
    : (L = t[14]);
  let ee = g,
    R =
      _ === `cloud` &&
      (n.isError
        ? (0, Z.jsx)(Fn, {
            onRetry: () => {
              n.refetch();
            },
          })
        : n.isLoading
          ? (0, Z.jsx)(Pn, {})
          : j.length === 0
            ? k
              ? (0, Z.jsx)(yn, {})
              : (0, Z.jsx)(en, {})
            : j.map((e) => (0, Z.jsx)(dt, { task: e.task, onClose: i }, e.key))),
    z =
      _ === `local` &&
      (M.length
        ? M.map((e) =>
            (0, Z.jsx)(
              zn,
              {
                conversationId: e.id,
                updatedAt: e.recencyAt ?? e.updatedAt,
                isActive: v === e.id,
                onClose: i,
              },
              e.id,
            ),
          )
        : k
          ? (0, Z.jsx)(yn, {})
          : (0, Z.jsx)(en, {})),
    B;
  t[15] !== v ||
  t[16] !== n ||
  t[17] !== N ||
  t[18] !== k ||
  t[19] !== T.length ||
  t[20] !== i ||
  t[21] !== _
    ? ((B =
        _ === `recent` &&
        (n.isError && T.length === 0
          ? (0, Z.jsx)(Fn, {
              onRetry: () => {
                n.refetch();
              },
            })
          : n.isLoading && T.length === 0
            ? (0, Z.jsx)(Pn, {})
            : N.length === 0
              ? k
                ? (0, Z.jsx)(yn, {})
                : (0, Z.jsx)(en, {})
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    n.isError &&
                      (0, Z.jsxs)(`div`, {
                        className: `mx-1 my-1 flex items-center justify-between gap-2 px-1 text-base text-token-foreground`,
                        children: [
                          (0, Z.jsx)(m, {
                            id: `codex.recentTasksMenu.errorCloud.inline`,
                            defaultMessage: `Failed to load cloud tasks.`,
                            description: `Inline error indicator for cloud tasks in recent feed`,
                          }),
                          (0, Z.jsx)(q, {
                            size: `default`,
                            color: `outline`,
                            onClick: () => {
                              n.refetch();
                            },
                            children: (0, Z.jsx)(m, {
                              id: `codex.common.retry`,
                              defaultMessage: `Retry`,
                              description: `Retry button`,
                            }),
                          }),
                        ],
                      }),
                    n.isPending &&
                      !T.length &&
                      (0, Z.jsx)(`div`, {
                        className: `mx-1 my-1 flex items-center gap-2 text-sm text-token-input-placeholder-foreground`,
                        children: (0, Z.jsx)(be, { className: `icon-xs` }),
                      }),
                    N.map((e) =>
                      (0, Z.jsx)(
                        Bn,
                        {
                          item: e,
                          isActive: e.kind === `local` && v === e.conversation.id,
                          onClose: i,
                        },
                        e.key,
                      ),
                    ),
                  ],
                }))),
      (t[15] = v),
      (t[16] = n),
      (t[17] = N),
      (t[18] = k),
      (t[19] = T.length),
      (t[20] = i),
      (t[21] = _),
      (t[22] = B))
    : (B = t[22]);
  let V;
  t[23] !== ee.Section || t[24] !== R || t[25] !== z || t[26] !== B
    ? ((V = (0, Z.jsxs)(ee.Section, {
        className: `vertical-scroll-fade-mask flex max-h-[60vh] flex-col gap-0 overflow-y-auto pb-1`,
        children: [R, z, B],
      })),
      (t[23] = ee.Section),
      (t[24] = R),
      (t[25] = z),
      (t[26] = B),
      (t[27] = V))
    : (V = t[27]);
  let H;
  return (
    t[28] !== V || t[29] !== P || t[30] !== F || t[31] !== L
      ? ((H = (0, Z.jsxs)(`div`, {
          className: `flex max-h-[300px] w-[calc(var(--radix-popper-available-width)_-_var(--padding-panel))] flex-col gap-1`,
          children: [P, F, L, V],
        })),
        (t[28] = V),
        (t[29] = P),
        (t[30] = F),
        (t[31] = L),
        (t[32] = H))
      : (H = t[32]),
    H
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
          children: (0, Z.jsx)(be, { className: `icon-xs` }),
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
    ? ((r = (0, Z.jsx)(m, {
        id: `codex.recentTasksMenu.errorCloud`,
        defaultMessage: `Failed to load tasks.`,
        description: `Error state for cloud tasks in recent tasks menu`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(m, {
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
            (0, Z.jsx)(q, { size: `default`, color: `outline`, onClick: n, children: i }),
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
    ((In = M()),
      Te(),
      (Ln = t(Ve(), 1)),
      _(),
      re(),
      d(),
      p(),
      we(),
      U(),
      tt(),
      fe(),
      Ke(),
      De(),
      Oe(),
      qt(),
      xe(),
      it(),
      ft(),
      st(),
      Yt(),
      $t(),
      rn(),
      dn(),
      vn(),
      Sn(),
      wn(),
      An(),
      ct(),
      (Z = _e()),
      (Rn = Me(`recent-tasks-filter`, `recent`)),
      (zn = (0, Ln.memo)(function (e) {
        let t = (0, In.c)(7),
          { conversationId: n, updatedAt: r, isActive: i, onClose: a } = e,
          o;
        t[0] === r
          ? (o = t[1])
          : ((o = r == null ? void 0 : (0, Z.jsx)(Ze, { dateString: new Date(r).toISOString() })),
            (t[0] = r),
            (t[1] = o));
        let s;
        return (
          t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o
            ? ((s = (0, Z.jsx)(ut, { conversationId: n, isActive: i, metaContent: o, onClick: a })),
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
          { cancelPendingWorktree: a } = He();
        switch (n.kind) {
          case `remote`: {
            let e;
            return (
              t[0] !== n.task || t[1] !== i
                ? ((e = (0, Z.jsx)(dt, { task: n.task, onClose: i })),
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
                    : (0, Z.jsx)(Ze, {
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
                ? ((a = (0, Z.jsx)(ut, {
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
                  (S.dispatchHostMessage({
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
                ? ((o = (0, Z.jsx)(lt, {
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
    a = i === void 0 ? !0 : i,
    o = ke(),
    { authMethod: s } = c(),
    l = de(),
    { data: u } = te(),
    d = $e(),
    [f, p] = (0, Kn.useState)(!1),
    h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        p(!1);
      }),
      (t[2] = h))
    : (h = t[2]);
  let g = Ce(h),
    _ = f && s === `chatgpt`,
    v;
  t[3] === _
    ? (v = t[4])
    : ((v = { taskFilter: `current`, limit: 20, enabled: _ }), (t[3] = _), (t[4] = v));
  let y = Pe(v),
    b;
  t[5] === y.data ? (b = t[6]) : ((b = y.data ?? []), (t[5] = y.data), (t[6] = b));
  let x;
  t[7] === b ? (x = t[8]) : ((x = b.filter(Wn)), (t[7] = b), (t[8] = x));
  let S = x,
    C,
    w,
    T,
    E;
  if (t[9] !== u || t[10] !== d || t[11] !== r || t[12] !== l.pathname || t[13] !== S.length) {
    let e;
    t[18] === d
      ? (e = t[19])
      : ((e = (e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: d })),
        (t[18] = d),
        (t[19] = e));
    let n = (u ?? []).filter(e).filter(Un);
    ((C = S.length + n.length),
      (T = l.pathname !== `/` && C > 0),
      (w = r != null),
      (E = !1),
      (t[9] = u),
      (t[10] = d),
      (t[11] = r),
      (t[12] = l.pathname),
      (t[13] = S.length),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T),
      (t[17] = E));
  } else ((C = t[14]), (w = t[15]), (T = t[16]), (E = t[17]));
  let D = E,
    O;
  t[20] !== D || t[21] !== C || t[22] !== o
    ? ((O = D
        ? o.formatMessage(
            {
              id: `codex.recentTasksMenu.triggerWithUnread`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}. Unread task updates`,
              description: `Accessible label for opening the recent tasks menu when unread task updates are present`,
            },
            { count: C },
          )
        : o.formatMessage(
            {
              id: `codex.recentTasksMenu.trigger`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}`,
              description: `Accessible label for opening the recent tasks menu`,
            },
            { count: C },
          )),
      (t[20] = D),
      (t[21] = C),
      (t[22] = o),
      (t[23] = O))
    : (O = t[23]);
  let k = O,
    j;
  t[24] !== s || t[25] !== f || t[26] !== y
    ? ((j = () => {
        f && s === `chatgpt` && y.refetch();
      }),
      (t[24] = s),
      (t[25] = f),
      (t[26] = y),
      (t[27] = j))
    : (j = t[27]);
  let M;
  (t[28] === f ? (M = t[29]) : ((M = [f]), (t[28] = f), (t[29] = M)), (0, Kn.useEffect)(j, M));
  let N, F;
  (t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => {
        let e = (e) => p(!0);
        return (
          window.addEventListener(`open-recent-tasks-menu`, e),
          () => window.removeEventListener(`open-recent-tasks-menu`, e)
        );
      }),
      (F = []),
      (t[30] = N),
      (t[31] = F))
    : ((N = t[30]), (F = t[31])),
    (0, Kn.useEffect)(N, F));
  let I;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(m, {
        id: `codex.recentTasksMenu.tooltip`,
        defaultMessage: `Task history`,
        description: `Tooltip text for recent tasks menu`,
      })),
      (t[32] = I))
    : (I = t[32]);
  let L = w ? `ghostActive` : `ghost`,
    R = w ? `default` : `icon`,
    z = w && `max-w-full min-w-0 !px-0 !py-0 hover:!bg-transparent hover:opacity-80`,
    B;
  t[33] === z ? (B = t[34]) : ((B = ze(`relative`, z)), (t[33] = z), (t[34] = B));
  let V = w ? void 0 : k,
    H;
  t[35] === D
    ? (H = t[36])
    : ((H = D
        ? (0, Q.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `absolute top-0.5 right-0.5 size-1.5 rounded-full`,
            style: { backgroundColor: `var(--vscode-textLink-foreground)` },
          })
        : null),
      (t[35] = D),
      (t[36] = H));
  let U;
  t[37] !== r || t[38] !== w || t[39] !== T
    ? ((U = w
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`span`, { className: ze(`min-w-0 truncate`, !1), children: r }),
              (0, Q.jsx)(P, { className: `icon-2xs shrink-0 text-token-text-tertiary` }),
            ],
          })
        : T
          ? (0, Q.jsx)(`span`, {
              className: `relative inline-flex size-4 justify-center`,
              children: (0, Q.jsx)(be, { className: `icon-xs` }),
            })
          : (0, Q.jsx)(rt, { className: `icon-xs hover:opacity-80` })),
      (t[37] = r),
      (t[38] = w),
      (t[39] = T),
      (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== C || t[42] !== o
    ? ((W = o.formatMessage(
        {
          id: `codex.recentTasksMenu.count`,
          defaultMessage: `{count, plural, =0 {No tasks in progress} one {# task in progress} other {# tasks in progress}}`,
          description: `Live region text announcing in-progress task count for recent tasks trigger`,
        },
        { count: C },
      )),
      (t[41] = C),
      (t[42] = o),
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
  let K;
  t[46] !== w ||
  t[47] !== L ||
  t[48] !== R ||
  t[49] !== B ||
  t[50] !== V ||
  t[51] !== H ||
  t[52] !== U ||
  t[53] !== G
    ? ((K = (0, Q.jsx)(A, {
        tooltipContent: I,
        children: (0, Q.jsxs)(q, {
          color: L,
          size: R,
          className: B,
          allowShrink: w,
          "aria-label": V,
          children: [H, U, G],
        }),
      })),
      (t[46] = w),
      (t[47] = L),
      (t[48] = R),
      (t[49] = B),
      (t[50] = V),
      (t[51] = H),
      (t[52] = U),
      (t[53] = G),
      (t[54] = K))
    : (K = t[54]);
  let ne;
  t[55] === u ? (ne = t[56]) : ((ne = u ?? []), (t[55] = u), (t[56] = ne));
  let re;
  t[57] !== g || t[58] !== f || t[59] !== y || t[60] !== a || t[61] !== ne
    ? ((re = (0, Q.jsx)(jn, {
        cloudtasksQuery: y,
        localConversations: ne,
        onClose: g,
        autoFocusSearch: f,
        showFilters: a,
      })),
      (t[57] = g),
      (t[58] = f),
      (t[59] = y),
      (t[60] = a),
      (t[61] = ne),
      (t[62] = re))
    : (re = t[62]);
  let ie;
  return (
    t[63] !== f || t[64] !== K || t[65] !== re
      ? ((ie = (0, Q.jsx)(ee, {
          contentClassName: `!pb-0 mt-[9px]`,
          triggerButton: K,
          open: f,
          onOpenChange: p,
          children: re,
        })),
        (t[63] = f),
        (t[64] = K),
        (t[65] = re),
        (t[66] = ie))
      : (ie = t[66]),
    ie
  );
}
function Un(e) {
  return w(e);
}
function Wn(e) {
  let t = e.task_status_display?.latest_turn_status_display?.turn_status;
  return t === `in_progress` || t === `pending`;
}
var Gn,
  Kn,
  Q,
  qn = e(() => {
    ((Gn = M()),
      F(),
      (Kn = t(Ve(), 1)),
      _(),
      re(),
      b(),
      je(),
      d(),
      p(),
      we(),
      U(),
      fe(),
      se(),
      Ke(),
      s(),
      qe(),
      K(),
      Vn(),
      wn(),
      (Q = _e()));
  });
function Jn(e) {
  let t = (0, $n.c)(66),
    { className: n, desktopDeepLinkConversationId: r, title: i, onBack: a, trailing: o } = e,
    s = de(),
    c = a ?? Xn,
    l = s.pathname === `/`,
    u = Yn,
    { data: d } = te(),
    f = l,
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = { taskFilter: `current`, limit: 20, enabled: f }), (t[0] = f), (t[1] = p));
  let m = Pe(p),
    h;
  t[2] === d ? (h = t[3]) : ((h = d ?? []), (t[2] = d), (t[3] = h));
  let g = Tn(m.data, h, null),
    _;
  t[28] === n
    ? (_ = t[29])
    : ((_ = ze(`draggable extension:px-panel`, n)), (t[28] = n), (t[29] = _));
  let v = `justify-between`,
    y;
  t[30] === v
    ? (y = t[31])
    : ((y = ze(`flex items-center electron:h-toolbar extension:py-row-y`, v)),
      (t[30] = v),
      (t[31] = y));
  let b;
  t[32] !== a || t[33] !== !1 ? ((b = null), (t[32] = a), (t[33] = !1), (t[34] = b)) : (b = t[34]);
  let x;
  t[35] !== c || t[36] !== g || t[37] !== i
    ? ((x = (0, $.jsx)(`div`, {
        className: `mr-3 line-clamp-1 flex min-w-0 flex-1 items-center gap-1 truncate`,
        style: { viewTransitionName: `header-title` },
        children: i
          ? (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 items-center gap-1`,
              children: [
                (0, $.jsx)(Qn, { onClick: c }),
                (0, $.jsx)(q, {
                  color: `ghostActive`,
                  type: `button`,
                  onClick: u,
                  className: `min-w-0 flex-1 truncate !px-0 !py-0 text-left text-sm text-token-foreground hover:!bg-transparent hover:opacity-80 electron:font-medium`,
                  children: (0, $.jsx)(`span`, { className: `truncate`, children: i }),
                }),
              ],
            })
          : (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, $.jsx)(Zn, { mergedTasks: g, onBack: c, showBackButton: !0 }),
            }),
      })),
      (t[35] = c),
      (t[36] = g),
      (t[37] = i),
      (t[38] = x))
    : (x = t[38]);
  let S;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(Hn, {})), (t[39] = S))
    : (S = t[39]);
  let C;
  t[40] === r
    ? (C = t[41])
    : ((C = (0, $.jsx)(k, {
        chromeExtension: !0,
        children: (0, $.jsx)(bt, { conversationId: r }),
      })),
      (t[40] = r),
      (t[41] = C));
  let w;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(k, { extension: !0, children: (0, $.jsx)(ot, {}) })), (t[42] = w))
    : (w = t[42]);
  let T;
  t[43] === !0 ? (T = t[44]) : ((T = (0, $.jsx)(Nt, {})), (t[43] = !0), (t[44] = T));
  let E;
  t[45] !== C || t[46] !== T
    ? ((E = (0, $.jsx)(k, {
        chromeExtension: !0,
        extension: !0,
        children: (0, $.jsx)(`div`, {
          className: `flex flex-shrink-0 items-center`,
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [S, C, w, T],
          }),
        }),
      })),
      (t[45] = C),
      (t[46] = T),
      (t[47] = E))
    : (E = t[47]);
  let D;
  t[48] !== E || t[49] !== o
    ? ((D = (0, $.jsxs)(`div`, {
        className: `flex flex-shrink-0 items-center gap-1`,
        children: [o, E],
      })),
      (t[48] = E),
      (t[49] = o),
      (t[50] = D))
    : (D = t[50]);
  let O;
  t[51] !== D || t[52] !== y || t[53] !== b || t[54] !== x
    ? ((O = (0, $.jsxs)(`div`, { className: y, children: [b, x, D] })),
      (t[51] = D),
      (t[52] = y),
      (t[53] = b),
      (t[54] = x),
      (t[55] = O))
    : (O = t[55]);
  let A;
  t[56] !== l || t[57] !== g || t[58] !== m
    ? ((A =
        l && (0, $.jsx)(`div`, { children: (0, $.jsx)(Bt, { tasksQuery: m, mergedTasks: g }) })),
      (t[56] = l),
      (t[57] = g),
      (t[58] = m),
      (t[59] = A))
    : (A = t[59]);
  let j;
  t[60] === A
    ? (j = t[61])
    : ((j = (0, $.jsx)(k, { extension: !0, children: A })), (t[60] = A), (t[61] = j));
  let M;
  return (
    t[62] !== O || t[63] !== j || t[64] !== _
      ? ((M = (0, $.jsxs)(`div`, { className: _, children: [O, j] })),
        (t[62] = O),
        (t[63] = j),
        (t[64] = _),
        (t[65] = M))
      : (M = t[65]),
    M
  );
}
function Yn() {
  window.dispatchEvent(new CustomEvent(`open-recent-tasks-menu`));
}
function Xn() {
  B(`newThread`, `header_new_thread`);
}
function Zn(e) {
  let t = (0, $n.c)(21),
    { mergedTasks: n, onBack: r, showBackButton: i } = e,
    a = de().pathname === `/`,
    o = G(`/local/:conversationId`)?.params?.conversationId ?? null,
    s;
  t[0] === o ? (s = t[1]) : ((s = o == null ? null : V(o)), (t[0] = o), (t[1] = s));
  let c = s,
    l = G(`/remote/:taskId`)?.params?.taskId ?? null,
    { data: u } = j(l),
    d = Re(le, c),
    f = Re(Ge, c);
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
  if (c && d) {
    let e;
    t[10] !== r || t[11] !== i
      ? ((e = i ? (0, $.jsx)(Qn, { onClick: r }) : null), (t[10] = r), (t[11] = i), (t[12] = e))
      : (e = t[12]);
    let n;
    t[13] === f
      ? (n = t[14])
      : ((n =
          f ||
          (0, $.jsx)(m, {
            id: `codex.taskRow.title`,
            defaultMessage: `New chat`,
            description: `Default title for a Codex thread that doesn't have a title`,
          })),
        (t[13] = f),
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
        ? ((e = (0, $.jsx)(m, {
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
    r = ke(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(m, { ...er.backButton })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r ? (a = t[2]) : ((a = r.formatMessage(er.backButton)), (t[1] = r), (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(ge, { className: `size-3` })), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== n || t[5] !== a
      ? ((s = (0, $.jsx)(k, {
          chromeExtension: !0,
          extension: !0,
          children: (0, $.jsx)(A, {
            tooltipContent: i,
            children: (0, $.jsx)(q, {
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
    (($n = M()),
      F(),
      ie(),
      he(),
      _(),
      re(),
      b(),
      Be(),
      p(),
      a(),
      we(),
      se(),
      r(),
      ne(),
      mt(),
      Xe(),
      at(),
      Mt(),
      Lt(),
      Gt(),
      qn(),
      An(),
      ($ = _e()),
      (er = z({
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
