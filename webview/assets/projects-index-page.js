import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bt as n,
  El as r,
  Ga as i,
  H as a,
  Rt as o,
  St as s,
  Tl as c,
  V as l,
  Xs as u,
  at as d,
  bt as f,
  di as p,
  ec as m,
  nc as h,
  st as g,
  tc as _,
  v,
  vl as y,
  vr as b,
  y as x,
  yr as S,
  zt as C,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Cr as w,
  Gu as T,
  Mf as E,
  Pf as D,
  Sr as ee,
  Tb as O,
  Wu as k,
  bg as A,
  do as j,
  fm as M,
  jf as N,
  pm as P,
  uo as F,
  wb as I,
  xg as L,
} from "./app-initial~app-main~onboarding-page.js";
import {
  $ as R,
  G as z,
  O as te,
  S as B,
  W as V,
  ct as ne,
  lt as H,
  tt as U,
  w as W,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Ib as G,
  Qr as re,
  Qs as ie,
  Rb as ae,
  Rs as oe,
  Sx as K,
  Xr as se,
  Yn as ce,
  nx as q,
  rx as le,
  wx as ue,
  yx as J,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Fn as de,
  Gt as fe,
  Ht as pe,
  In as me,
  Kt as he,
  Pn as ge,
  Ut as _e,
  Wt as ve,
  an as ye,
  bn as be,
  dn as xe,
  en as Se,
  fn as Ce,
  in as we,
  ln as Te,
  nn as Ee,
  pn as De,
  qt as Oe,
  rn as ke,
  tn as Ae,
  un as je,
  xn as Me,
} from "./app-initial~app-main~automations-page.js";
import {
  Br as Ne,
  Dn as Pe,
  Du as Fe,
  Eu as Ie,
  Ir as Le,
  Nn as Re,
  Rr as ze,
  Sr as Be,
  Tr as Ve,
  Un as He,
  Ur as Ue,
  Vr as We,
  Wn as Ge,
  Wr as Ke,
  ar as qe,
  br as Je,
  cr as Ye,
  jn as Xe,
  lr as Ze,
  or as Qe,
  pr as $e,
  sa as et,
  sr as tt,
  ua as nt,
  ur as rt,
  yr as it,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  F as at,
  P as ot,
  Q as st,
  Z as ct,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  $n as lt,
  Kn as ut,
  M as dt,
  N as ft,
  Qn as pt,
  qn as mt,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
import {
  i as ht,
  r as gt,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~plugin-detail-page~onboarding-pag~f3o4q9dk.js";
import {
  h as _t,
  i as vt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~5rsl7kw4.js";
import {
  c as yt,
  d as bt,
  l as xt,
  u as St,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import {
  _ as Ct,
  b as wt,
  g as Tt,
  h as Et,
  v as Dt,
  y as Ot,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  c as kt,
  n as At,
  s as jt,
  t as Mt,
} from "./app-initial~app-main~projects-index-page~remote-connections-settings~composer-external-footer.js";
import {
  n as Nt,
  t as Pt,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy.js";
import {
  i as Ft,
  r as It,
} from "./app-initial~app-main~hotkey-window-new-thread-page~hotkey-window-home-page~local-conversati~d7c9lerv-D7vX-KTi.js";
import {
  c as Lt,
  l as Rt,
  o as zt,
  s as Bt,
} from "./app-initial~app-main~projects-index-page~local-conversation-page.js";
import { n as Vt, t as Ht } from "./page-search-input-a2-XgvYV.js";
import { n as Ut, t as Wt } from "./use-element-in-view.js";
import { n as Gt } from "./infinite-scroll-pagination-spinner.js";
import { n as Kt, t as qt } from "./thread-overflow-menu.js";
function Jt({
  cloudRows: e = [],
  groups: t,
  projectWritableRoots: n,
  query: r,
  sortDirection: i,
  sortKey: a,
  tasks: o,
}) {
  let s = new Map(o.map((e) => [e.key, e])),
    c = r.trim().toLocaleLowerCase();
  return [...t.map((e) => Yt(e, n, s)), ...e]
    .filter((e) =>
      c.length === 0 ? !0 : `${e.name} ${e.sourceSearchText}`.toLocaleLowerCase().includes(c),
    )
    .sort((e, t) => {
      let n = Xt(e, t, a);
      return i === `ascending` ? n : -n;
    });
}
function Yt(e, t, n) {
  let r = e.threadKeys.flatMap((e) => {
      let t = n.get(e);
      return t == null ? [] : [t.at];
    }),
    i = e.projectUpdatedAt == null ? r : [...r, e.projectUpdatedAt],
    a = Qt(b({ projectId: e.projectId, projectWritableRoots: t, legacyRoot: e.path ?? null }));
  return {
    group: e,
    id: `codex:${e.projectId}`,
    kind: `codex`,
    modifiedAt: i.length === 0 ? null : Math.max(...i),
    name: e.label,
    projectId: e.projectId,
    recentThreadKeys: [...e.threadKeys].sort((e, t) => (n.get(t)?.at ?? 0) - (n.get(e)?.at ?? 0)),
    sourceCount: a.length,
    sources: a,
    sourceSearchText: a.map((e) => e.path ?? e.label).join(` `),
  };
}
function Xt(e, t, n) {
  switch (n) {
    case `modified`:
      return (e.modifiedAt ?? 0) - (t.modifiedAt ?? 0) || Zt(e, t);
    case `name`:
      return Zt(e, t);
    case `sources`:
      return (
        e.sourceCount - t.sourceCount ||
        (e.sources[0]?.label ?? ``).localeCompare(t.sources[0]?.label ?? ``, void 0, {
          sensitivity: `base`,
        }) ||
        Zt(e, t)
      );
  }
}
function Zt(e, t) {
  return e.name.localeCompare(t.name, void 0, { sensitivity: `base` }) || e.id.localeCompare(t.id);
}
function Qt(e) {
  return e.map((e) => ({ kind: `folder`, label: d(e), path: e }));
}
var $t = e(() => {
  (n(), g());
});
function en(e) {
  let t = (0, an.c)(12),
    { hostId: n, hostLabel: r, isRemote: i, sources: a } = e;
  if (a.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`span`, {
            className: `text-token-description-foreground`,
            children: (0, Y.jsx)(K, {
              id: `projectsIndex.sources.empty`,
              defaultMessage: `No sources`,
              description: `Empty source label in the projects index`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  if (t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a) {
    let e;
    (t[6] !== n || t[7] !== r || t[8] !== i
      ? ((e = (e, t) =>
          (0, Y.jsx)(
            tn,
            { hostId: n, hostLabel: r, isRemote: i, source: e },
            `${e.path ?? e.label}-${t}`,
          )),
        (t[6] = n),
        (t[7] = r),
        (t[8] = i),
        (t[9] = e))
      : (e = t[9]),
      (o = a.map(e)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  } else o = t[5];
  let s;
  return (
    t[10] === o
      ? (s = t[11])
      : ((s = (0, Y.jsx)(`div`, {
          className: `-ml-3 min-w-0 flex-1 overflow-visible`,
          children: (0, Y.jsx)(`div`, {
            className: `flex min-w-0 gap-1.5 overflow-x-auto [mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] py-0.5 pr-5 pl-3 [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
            children: o,
          }),
        })),
        (t[10] = o),
        (t[11] = s)),
    s
  );
}
function tn(e) {
  let t = (0, an.c)(28),
    { hostId: n, hostLabel: r, isRemote: i, source: a } = e,
    o = s(`open-file`),
    c = ue(),
    l = a.path,
    u;
  t[0] !== r || t[1] !== i || t[2] !== a.label || t[3] !== l
    ? ((u =
        i && l != null ? `${r ?? ``}${r == null ? `` : `: `}${l}` : l == null ? a.label : zt(l)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a.label),
      (t[3] = l),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f = l != null && !i,
    m;
  if (i && n != null) {
    let e;
    (t[5] === n
      ? (e = t[6])
      : ((e = (0, Y.jsx)(Ct, {
          className: `icon-xs shrink-0`,
          disableTooltip: !0,
          envType: `remote`,
          hostId: n,
        })),
        (t[5] = n),
        (t[6] = e)),
      (m = e));
  } else if (a.kind === `file`) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(ut, { className: `icon-xs shrink-0 text-token-description-foreground` })),
        (t[7] = e))
      : (e = t[7]),
      (m = e));
  } else {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(Lt, {
          className: `icon-xs group-hover/source-pill:opacity-0 group-focus-visible/source-pill:opacity-0`,
        })),
        (t[8] = e))
      : (e = t[8]);
    let n;
    t[9] === f
      ? (n = t[10])
      : ((n = f
          ? (0, Y.jsx)(A, {
              className: `icon-2xs absolute opacity-0 group-hover/source-pill:opacity-100 group-focus-visible/source-pill:opacity-100`,
              "aria-hidden": !0,
            })
          : null),
        (t[9] = f),
        (t[10] = n));
    let r;
    (t[11] === n
      ? (r = t[12])
      : ((r = (0, Y.jsxs)(`span`, {
          className: `relative flex h-4 w-4 shrink-0 items-center justify-center text-token-description-foreground`,
          children: [e, n],
        })),
        (t[11] = n),
        (t[12] = r)),
      (m = r));
  }
  let h;
  t[13] === a.label
    ? (h = t[14])
    : ((h = (0, Y.jsx)(`span`, { className: `min-w-0 truncate`, children: a.label })),
      (t[13] = a.label),
      (t[14] = h));
  let g;
  t[15] !== m || t[16] !== h
    ? ((g = (0, Y.jsxs)(Y.Fragment, { children: [m, h] })), (t[15] = m), (t[16] = h), (t[17] = g))
    : (g = t[17]);
  let _ = g,
    v;
  t[18] !== c || t[19] !== f || t[20] !== o || t[21] !== a.label || t[22] !== _ || t[23] !== l
    ? ((v = f
        ? (0, Y.jsx)(`button`, {
            type: `button`,
            className: `group/source-pill inline-flex max-w-56 shrink-0 cursor-interaction items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary hover:border-token-border-heavy focus-visible:border-token-focus-border focus-visible:outline-none`,
            "aria-label": c.formatMessage(
              {
                id: `projectsIndex.sources.openSource`,
                defaultMessage: `Reveal {source}`,
                description: `Accessible label for revealing a project source folder in the system file manager`,
              },
              { source: a.label },
            ),
            onClick: () => {
              lt({ path: l, cwd: p(l), target: `fileManager`, openFile: o.mutate });
            },
            children: _,
          })
        : (0, Y.jsx)(`div`, {
            className: `flex max-w-56 shrink-0 items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary`,
            children: _,
          })),
      (t[18] = c),
      (t[19] = f),
      (t[20] = o),
      (t[21] = a.label),
      (t[22] = _),
      (t[23] = l),
      (t[24] = v))
    : (v = t[24]);
  let y;
  return (
    t[25] !== d || t[26] !== v
      ? ((y = (0, Y.jsx)(R, { tooltipContent: d, children: v })),
        (t[25] = d),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function nn(e) {
  let t = (0, an.c)(8),
    { modifiedAt: n, now: r } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(K, {
            id: `projectsIndex.modified.never`,
            defaultMessage: `-`,
            description: `Projects index modified value when there are no chats`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  t[1] === n ? (i = t[2]) : ((i = new Date(rn(n)).toISOString()), (t[1] = n), (t[2] = i));
  let a;
  t[3] === i ? (a = t[4]) : ((a = (0, Y.jsx)(N, { dateString: i })), (t[3] = i), (t[4] = a));
  let o;
  return (
    t[5] !== r || t[6] !== a
      ? ((o = (0, Y.jsx)(E, { nowMs: r, children: a })), (t[5] = r), (t[6] = a), (t[7] = o))
      : (o = t[7]),
    o
  );
}
function rn(e) {
  return e < 0xe8d4a51000 ? e * 1e3 : e;
}
var an,
  Y,
  on,
  sn,
  cn,
  ln,
  un,
  X,
  dn = e(() => {
    ((an = c()),
      n(),
      J(),
      D(),
      U(),
      pt(),
      Dt(),
      L(),
      mt(),
      Rt(),
      Bt(),
      f(),
      (Y = y()),
      (on = `grid grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)_4rem_8rem] gap-x-4 max-[920px]:grid-cols-[minmax(0,1fr)_4rem_8rem] max-[680px]:grid-cols-[minmax(0,1fr)_8rem]`),
      (sn = `relative before:pointer-events-none before:absolute before:-inset-x-3 before:rounded-lg before:bg-token-list-hover-background before:opacity-0 hover:before:opacity-100`),
      (cn = `after:pointer-events-none after:absolute after:-top-px after:-inset-x-3 after:h-px after:bg-token-main-surface-primary after:opacity-0 hover:after:opacity-100`),
      (ln = `border-b border-token-border [&:has(+_[data-project-row-wrapper]:has(>_[data-project-row]:hover))]:border-b-transparent`),
      (un = `relative z-10`),
      (X = `h-8 w-8 shrink-0 rounded-lg !p-1 text-token-text-secondary hover:text-token-foreground focus-visible:text-token-foreground data-[state=open]:text-token-foreground`));
  });
function fn(e) {
  return (
    e instanceof Element && e.closest(`button,a,input,textarea,select,[role='button']`) != null
  );
}
var pn = e(() => {}),
  mn,
  hn,
  gn = e(() => {
    (t(r()),
      (mn = y()),
      (hn = (e) =>
        (0, mn.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, mn.jsx)(`path`, {
              d: `M12.667 9.4743C12.9567 9.47444 13.1922 9.70997 13.1924 9.99969V11.4743H14.667C14.9567 11.4744 15.1922 11.71 15.1924 11.9997C15.1924 12.2896 14.9568 12.525 14.667 12.5251H13.1924V13.9997C13.1924 14.2896 12.9568 14.525 12.667 14.5251C12.377 14.5251 12.1416 14.2896 12.1416 13.9997V12.5251H10.667C10.377 12.5251 10.1416 12.2896 10.1416 11.9997C10.1418 11.7099 10.3771 11.4743 10.667 11.4743H12.1416V9.99969C12.1418 9.70989 12.3771 9.4743 12.667 9.4743Z`,
              fill: `currentColor`,
            }),
            (0, mn.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M5.36914 2.1413C5.92368 2.14134 6.3602 2.23675 6.73242 2.38934C7.0975 2.53904 7.38153 2.73785 7.61816 2.90399C8.07606 3.22547 8.4207 3.47434 9.16602 3.4743H11.9473C13.3336 3.47453 14.4453 4.61186 14.4453 5.99969V7.06512C14.4452 7.48137 14.1212 7.85614 13.6562 7.85614H2.60547V11.3307C2.60547 12.1518 3.26027 12.8051 4.05371 12.8054H7.67578C7.96573 12.8054 8.20117 13.0408 8.20117 13.3307C8.20117 13.6207 7.96573 13.8561 7.67578 13.8561H4.05371C2.66737 13.8559 1.55566 12.7186 1.55566 11.3307V7.35028C1.55545 7.34411 1.55371 7.33795 1.55371 7.33173C1.55371 7.32523 1.55543 7.31864 1.55566 7.31219V4.66669C1.55566 3.27887 2.66737 2.14155 4.05371 2.1413H5.36914ZM4.05371 3.19208C3.26027 3.19233 2.60547 3.84568 2.60547 4.66669V6.80634H13.3955V5.99969C13.3955 5.17867 12.7407 4.52531 11.9473 4.52509H9.16699C8.07964 4.52528 7.50698 4.10834 7.01562 3.76337C6.77762 3.59627 6.57854 3.46129 6.33398 3.36102C6.09656 3.26369 5.79646 3.19212 5.36914 3.19208H4.05371Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function _n() {
  let e = ue(),
    t = h(Be),
    { data: n } = x(i.THREAD_PROJECT_ASSIGNMENTS),
    { data: r } = x(i.PROJECTLESS_THREAD_IDS),
    { data: a } = x(i.PROJECT_WRITABLE_ROOTS),
    { groups: o } = m(Ge, {
      enabled: !0,
      projectlessThreadIds: r,
      threadKeys: t,
      threadProjectAssignments: n,
    }),
    [s, c] = (0, Q.useState)(``),
    [l, u] = (0, Q.useState)(`modified`),
    [d, f] = (0, Q.useState)(`descending`),
    [p, g] = (0, Q.useState)(null),
    [_, v] = (0, Q.useState)(null),
    [y, b] = (0, Q.useState)(() => new Set()),
    [C, w] = (0, Q.useState)(() => new Set()),
    [T] = (0, Q.useState)(() => Date.now()),
    E = m(
      Ve,
      (0, Q.useMemo)(() => o.flatMap((e) => e.threadKeys), [o]),
    ),
    D = Jt({
      cloudRows: void 0,
      groups: o,
      projectWritableRoots: S(a),
      query: s,
      sortDirection: d,
      sortKey: l,
      tasks: E,
    }),
    ee = e.formatMessage({
      id: `projectsIndex.search.placeholder`,
      defaultMessage: `Search projects`,
      description: `Accessible label and placeholder for projects index search`,
    }),
    O = (0, $.jsx)(Pt, {
      start: Ut({ container: p, target: _ })
        ? null
        : (0, $.jsx)(K, {
            id: `projectsIndex.title`,
            defaultMessage: `Projects`,
            description: `Title for the projects index page`,
          }),
      trailing: (0, $.jsx)(pe, {
        chatGptProjectCrudStatus: void 0,
        customTriggerButton: (0, $.jsx)(ct, {
          color: `outline`,
          size: `toolbar`,
          children: (0, $.jsx)(K, {
            id: `projectsIndex.newProject`,
            defaultMessage: `New`,
            description: `Button label to create a new project from the projects index`,
          }),
        }),
        mode: `project`,
        onCreateChatGptProject: void 0,
        sidebarMode: `codex`,
        showOrganizeControl: !1,
      }),
    }),
    A = (e) => {
      if (l !== e) {
        (u(e), f(Nn[e]));
        return;
      }
      f(d === `ascending` ? `descending` : `ascending`);
    },
    j = (e) => {
      b((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    },
    M = (e, t) => {
      w((n) => {
        let r = new Set(n);
        return (t ? r.add(e) : r.delete(e), r);
      });
    },
    N;
  return (
    (N = (0, $.jsx)(K, {
      id: `projectsIndex.empty`,
      defaultMessage: `No projects`,
      description: `Empty state for projects index`,
    })),
    (0, $.jsxs)(`div`, {
      className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary text-token-foreground`,
      children: [
        (0, $.jsx)(V, { extension: !0, children: O }),
        (0, $.jsx)(V, {
          browser: !0,
          chromeExtension: !0,
          electron: !0,
          children: (0, $.jsx)(k.Header, { children: O }),
        }),
        (0, $.jsx)(`div`, {
          ref: g,
          className: `relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto [scrollbar-gutter:stable]`,
          children: (0, $.jsxs)(`div`, {
            className: `flex min-h-full w-full flex-col pb-panel`,
            children: [
              (0, $.jsx)(`div`, {
                className: `mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pt-6 pb-3 md:electron:px-toolbar md:extension:px-20`,
                children: (0, $.jsx)(`h1`, {
                  ref: v,
                  className: `heading-lg font-normal text-token-foreground`,
                  children: (0, $.jsx)(K, {
                    id: `projectsIndex.title`,
                    defaultMessage: `Projects`,
                    description: `Title for the projects index page`,
                  }),
                }),
              }),
              (0, $.jsx)(`div`, {
                className: jn,
                children: (0, $.jsx)(`div`, {
                  className: `mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pb-2 md:electron:px-toolbar md:extension:px-20`,
                  children: (0, $.jsx)(Ht, {
                    id: `projects-index-search`,
                    className: `w-full min-w-0`,
                    label: ee,
                    onSearchQueryChange: c,
                    placeholder: ee,
                    searchQuery: s,
                    variant: `composer`,
                  }),
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `mx-auto flex min-h-0 w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col px-panel pt-7 pb-panel md:electron:px-toolbar md:extension:px-20`,
                children: (0, $.jsxs)(`div`, {
                  className: `-mx-5 min-h-0 overflow-visible px-5`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      "data-projects-header": !0,
                      className: q(on, Mn),
                      children: [
                        (0, $.jsx)(vn, {
                          active: l === `name`,
                          direction: d,
                          onClick: () => A(`name`),
                          children: (0, $.jsx)(K, {
                            id: `projectsIndex.column.name`,
                            defaultMessage: `Name`,
                            description: `Projects index name column header`,
                          }),
                        }),
                        (0, $.jsx)(vn, {
                          active: l === `sources`,
                          className: `max-[920px]:hidden`,
                          direction: d,
                          onClick: () => A(`sources`),
                          children: (0, $.jsx)(K, {
                            id: `projectsIndex.column.sources`,
                            defaultMessage: `Sources`,
                            description: `Projects index sources column header`,
                          }),
                        }),
                        (0, $.jsx)(vn, {
                          active: l === `modified`,
                          className: `max-[680px]:hidden`,
                          direction: d,
                          onClick: () => A(`modified`),
                          children: (0, $.jsx)(K, {
                            id: `projectsIndex.column.modified`,
                            defaultMessage: `Updated`,
                            description: `Projects index modified column header`,
                          }),
                        }),
                        (0, $.jsx)(`span`, {}),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      "data-projects-rows": !0,
                      className: `min-w-0`,
                      children: [
                        D.length === 0
                          ? (0, $.jsx)(`div`, {
                              className: `px-0 py-10 text-center text-sm text-token-description-foreground`,
                              children: N,
                            })
                          : D.map((e) => {
                              let t = y.has(e.id);
                              return e.kind === `cloud`
                                ? (null?.projectsById.get(e.projectId), null)
                                : (0, $.jsx)(
                                    yn,
                                    {
                                      expanded: t,
                                      now: T,
                                      onShowAllChange: (t) => M(e.projectId, t),
                                      onToggleExpanded: () => j(e.id),
                                      row: e,
                                      showAll: C.has(e.projectId),
                                    },
                                    e.id,
                                  );
                            }),
                        (D.length, null),
                        (D.length, null),
                        null,
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function vn(e) {
  let t = (0, Z.c)(13),
    { active: n, children: r, className: i, direction: a, onClick: o } = e,
    s = n && `text-token-foreground`,
    c;
  t[0] !== i || t[1] !== s
    ? ((c = q(
        `cursor-interaction flex w-max min-w-0 items-center gap-1 text-left text-xs leading-[18px] text-token-text-tertiary hover:text-token-foreground`,
        s,
        i,
      )),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === r
    ? (l = t[4])
    : ((l = (0, $.jsx)(`span`, { className: `truncate`, children: r })), (t[3] = r), (t[4] = l));
  let u;
  t[5] !== n || t[6] !== a
    ? ((u = n
        ? (0, $.jsx)(Ie, {
            "aria-hidden": `true`,
            className: q(
              `icon-2xs shrink-0 transition-transform`,
              a === `ascending` && `rotate-180`,
            ),
          })
        : null),
      (t[5] = n),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== c || t[10] !== l || t[11] !== u
      ? ((d = (0, $.jsxs)(`button`, {
          type: `button`,
          className: c,
          onClick: o,
          children: [l, u],
        })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function yn(e) {
  let t = (0, Z.c)(119),
    { expanded: n, now: r, onShowAllChange: s, onToggleExpanded: c, row: l, showAll: u } = e,
    d = _(o),
    f = ue(),
    p = Me(),
    m = ae(yt),
    { data: h } = x(i.PINNED_PROJECT_IDS),
    { data: g } = x(i.PROJECT_WRITABLE_ROOTS),
    v;
  t[0] !== h || t[1] !== l.group.projectId
    ? ((v = h?.includes(l.group.projectId)), (t[0] = h), (t[1] = l.group.projectId), (t[2] = v))
    : (v = t[2]);
  let y = v === !0,
    C;
  t[3] !== g || t[4] !== l.group.path || t[5] !== l.group.projectId
    ? ((C = b({
        projectId: l.group.projectId,
        projectWritableRoots: S(g),
        legacyRoot: l.group.path ?? null,
      })),
      (t[3] = g),
      (t[4] = l.group.path),
      (t[5] = l.group.projectId),
      (t[6] = C))
    : (C = t[6]);
  let w = C,
    T = l.group.projectKind === `local` && (l.group.isLocalProject === !0 || l.group.path != null),
    E;
  t[7] === c
    ? (E = t[8])
    : ((E = (e) => {
        e.defaultPrevented || e.detail > 1 || fn(e.target) || c();
      }),
      (t[7] = c),
      (t[8] = E));
  let D = E,
    O;
  t[9] !== l.group || t[10] !== p
    ? ((O = (e) => {
        e.defaultPrevented || fn(e.target) || p(l.group);
      }),
      (t[9] = l.group),
      (t[10] = p),
      (t[11] = O))
    : (O = t[11]);
  let k = O,
    A = !n && `[&:has(>_[data-project-row]:hover)]:border-b-transparent`,
    j;
  t[12] === A ? (j = t[13]) : ((j = q(ln, A)), (t[12] = A), (t[13] = j));
  let M;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = q(
        on,
        sn,
        cn,
        `before:inset-y-0`,
        `group/project-row cursor-interaction min-h-[70px] items-center px-0 py-2 text-base`,
      )),
      (t[14] = M))
    : (M = t[14]);
  let N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = q(un, `flex min-w-0 items-center gap-3`)), (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] !== n || t[17] !== l.group.projectKind
    ? ((P =
        l.group.projectKind === `remote`
          ? (0, $.jsx)(It, { className: `icon-xs shrink-0` })
          : (0, $.jsx)(ve, { className: `icon-xs shrink-0`, open: n })),
      (t[16] = n),
      (t[17] = l.group.projectKind),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] !== l.group.projectId || t[20] !== l.name || t[21] !== P
    ? ((F = (0, $.jsx)(Ue, {
        projectId: l.group.projectId,
        projectName: l.name,
        buttonClassName: `!h-7 !w-7 !p-1 text-token-description-foreground [&>svg]:!h-4 [&>svg]:!w-4`,
        fallbackIcon: P,
        markerClassName: `h-4 w-4`,
      })),
      (t[19] = l.group.projectId),
      (t[20] = l.name),
      (t[21] = P),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] === l.name
    ? (I = t[24])
    : ((I = (0, $.jsx)(`span`, {
        className: `block min-w-0 truncate text-token-foreground`,
        children: l.name,
      })),
      (t[23] = l.name),
      (t[24] = I));
  let L;
  t[25] !== l.group.hostId || t[26] !== l.group.projectKind
    ? ((L =
        l.group.projectKind === `remote` && l.group.hostId != null
          ? (0, $.jsx)(bn, { hostId: l.group.hostId })
          : null),
      (t[25] = l.group.hostId),
      (t[26] = l.group.projectKind),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] === f
    ? (R = t[29])
    : ((R = f.formatMessage({
        id: `projectsIndex.toggleProject`,
        defaultMessage: `Toggle project`,
        description: `Accessible label for expanding or collapsing a project row`,
      })),
      (t[28] = f),
      (t[29] = R));
  let z;
  t[30] === c
    ? (z = t[31])
    : ((z = (e) => {
        (e.stopPropagation(), c());
      }),
      (t[30] = c),
      (t[31] = z));
  let te = n ? `rotate-0 opacity-100` : `-rotate-90`,
    B;
  t[32] === te
    ? (B = t[33])
    : ((B = q(
        `icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100`,
        te,
      )),
      (t[32] = te),
      (t[33] = B));
  let V;
  t[34] === B
    ? (V = t[35])
    : ((V = (0, $.jsx)(Ie, { "aria-hidden": `true`, className: B })), (t[34] = B), (t[35] = V));
  let ne;
  t[36] !== n || t[37] !== R || t[38] !== z || t[39] !== V
    ? ((ne = (0, $.jsx)(`button`, {
        type: `button`,
        className: `group/project-toggle cursor-interaction rounded-sm`,
        "aria-label": R,
        "aria-expanded": n,
        onClick: z,
        children: V,
      })),
      (t[36] = n),
      (t[37] = R),
      (t[38] = z),
      (t[39] = V),
      (t[40] = ne))
    : (ne = t[40]);
  let H;
  t[41] !== I || t[42] !== L || t[43] !== ne
    ? ((H = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [I, L, ne],
      })),
      (t[41] = I),
      (t[42] = L),
      (t[43] = ne),
      (t[44] = H))
    : (H = t[44]);
  let U;
  t[45] !== F || t[46] !== H
    ? ((U = (0, $.jsxs)(`div`, { className: N, children: [F, H] })),
      (t[45] = F),
      (t[46] = H),
      (t[47] = U))
    : (U = t[47]);
  let W;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = q(un, `flex min-w-0 items-center gap-2 text-token-text-secondary max-[920px]:hidden`)),
      (t[48] = W))
    : (W = t[48]);
  let G = l.group.projectKind === `remote` ? l.group.hostId : null,
    re =
      l.group.projectKind === `remote` ? (l.group.hostDisplayName ?? l.group.hostId ?? null) : null,
    ie = l.group.projectKind === `remote`,
    oe;
  t[49] !== l.sources || t[50] !== G || t[51] !== re || t[52] !== ie
    ? ((oe = (0, $.jsx)(en, { hostId: G, hostLabel: re, isRemote: ie, sources: l.sources })),
      (t[49] = l.sources),
      (t[50] = G),
      (t[51] = re),
      (t[52] = ie),
      (t[53] = oe))
    : (oe = t[53]);
  let se;
  t[54] !== T ||
  t[55] !== w ||
  t[56] !== f ||
  t[57] !== m ||
  t[58] !== l.group ||
  t[59] !== l.name ||
  t[60] !== d
    ? ((se =
        T && m
          ? (0, $.jsx)(ct, {
              "aria-label": f.formatMessage({
                id: `projectsIndex.sources.addSource`,
                defaultMessage: `Add source`,
                description: `Button label to add a source folder to a project from the projects index`,
              }),
              className: q(
                X,
                `opacity-0 group-hover/project-row:opacity-100 focus-visible:opacity-100`,
              ),
              color: `ghostMuted`,
              size: `icon`,
              onClick: () => {
                Xe(d, {
                  initialName: l.name,
                  initialSources: w,
                  project: An(l.group),
                  showDeleteAction: !0,
                });
              },
              children: (0, $.jsx)(hn, { className: `icon-xs` }),
            })
          : null),
      (t[54] = T),
      (t[55] = w),
      (t[56] = f),
      (t[57] = m),
      (t[58] = l.group),
      (t[59] = l.name),
      (t[60] = d),
      (t[61] = se))
    : (se = t[61]);
  let ce;
  t[62] !== oe || t[63] !== se
    ? ((ce = (0, $.jsxs)(`span`, { className: W, children: [oe, se] })),
      (t[62] = oe),
      (t[63] = se),
      (t[64] = ce))
    : (ce = t[64]);
  let le;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = q(un, `text-token-text-secondary max-[680px]:hidden`)), (t[65] = le))
    : (le = t[65]);
  let J;
  t[66] !== r || t[67] !== l.modifiedAt
    ? ((J = (0, $.jsx)(`span`, {
        className: le,
        children: (0, $.jsx)(nn, { modifiedAt: l.modifiedAt, now: r }),
      })),
      (t[66] = r),
      (t[67] = l.modifiedAt),
      (t[68] = J))
    : (J = t[68]);
  let de;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = q(un, `flex min-w-0 justify-end gap-1`)), (t[69] = de))
    : (de = t[69]);
  let fe;
  t[70] !== T || t[71] !== w || t[72] !== m || t[73] !== l
    ? ((fe = (0, $.jsx)(Dn, {
        canEditLocalProject: T,
        initialSources: w,
        localProjectSourcesEnabled: m,
        row: l,
      })),
      (t[70] = T),
      (t[71] = w),
      (t[72] = m),
      (t[73] = l),
      (t[74] = fe))
    : (fe = t[74]);
  let pe;
  t[75] !== f || t[76] !== y
    ? ((pe = y
        ? f.formatMessage({
            id: `projectsIndex.unpinProject`,
            defaultMessage: `Unpin project`,
            description: `Button label to unpin a project from the projects index`,
          })
        : f.formatMessage({
            id: `projectsIndex.pinProject`,
            defaultMessage: `Pin project`,
            description: `Button label to pin a project from the projects index`,
          })),
      (t[75] = f),
      (t[76] = y),
      (t[77] = pe))
    : (pe = t[77]);
  let me;
  t[78] !== h || t[79] !== l.group.projectId || t[80] !== d
    ? ((me = () => {
        a(d, i.PINNED_PROJECT_IDS, kn(h, l.group.projectId));
      }),
      (t[78] = h),
      (t[79] = l.group.projectId),
      (t[80] = d),
      (t[81] = me))
    : (me = t[81]);
  let ge;
  t[82] === y
    ? (ge = t[83])
    : ((ge = y
        ? (0, $.jsx)(Se, { className: `icon-xs` })
        : (0, $.jsx)(ee, { className: `icon-xs` })),
      (t[82] = y),
      (t[83] = ge));
  let _e;
  t[84] !== pe || t[85] !== me || t[86] !== ge
    ? ((_e = (0, $.jsx)(ct, {
        "aria-label": pe,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: me,
        children: ge,
      })),
      (t[84] = pe),
      (t[85] = me),
      (t[86] = ge),
      (t[87] = _e))
    : (_e = t[87]);
  let ye;
  t[88] === f
    ? (ye = t[89])
    : ((ye = f.formatMessage({
        id: `projectsIndex.startProjectChat`,
        defaultMessage: `Start new chat in project`,
        description: `Button label to start a new chat from the projects index`,
      })),
      (t[88] = f),
      (t[89] = ye));
  let be;
  t[90] !== l.group || t[91] !== p
    ? ((be = () => p(l.group)), (t[90] = l.group), (t[91] = p), (t[92] = be))
    : (be = t[92]);
  let xe;
  t[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, $.jsx)(St, { className: `icon-xs` })), (t[93] = xe))
    : (xe = t[93]);
  let Ce;
  t[94] !== ye || t[95] !== be
    ? ((Ce = (0, $.jsx)(ct, {
        "aria-label": ye,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: be,
        children: xe,
      })),
      (t[94] = ye),
      (t[95] = be),
      (t[96] = Ce))
    : (Ce = t[96]);
  let we;
  t[97] !== fe || t[98] !== _e || t[99] !== Ce
    ? ((we = (0, $.jsxs)(`span`, { className: de, children: [fe, _e, Ce] })),
      (t[97] = fe),
      (t[98] = _e),
      (t[99] = Ce),
      (t[100] = we))
    : (we = t[100]);
  let Te;
  t[101] !== D || t[102] !== k || t[103] !== U || t[104] !== ce || t[105] !== J || t[106] !== we
    ? ((Te = (0, $.jsxs)(`div`, {
        "data-project-row": !0,
        className: M,
        onClick: D,
        onDoubleClick: k,
        children: [U, ce, J, we],
      })),
      (t[101] = D),
      (t[102] = k),
      (t[103] = U),
      (t[104] = ce),
      (t[105] = J),
      (t[106] = we),
      (t[107] = Te))
    : (Te = t[107]);
  let Ee;
  t[108] !== n ||
  t[109] !== f ||
  t[110] !== s ||
  t[111] !== l.name ||
  t[112] !== l.recentThreadKeys ||
  t[113] !== u
    ? ((Ee = n
        ? (0, $.jsx)(`div`, {
            className: `pb-3`,
            children: (0, $.jsx)(he, {
              ariaLabel: f.formatMessage(
                {
                  id: `projectsIndex.recentChats.ariaLabel`,
                  defaultMessage: `Recent chats in {projectName}`,
                  description: `Accessible label for expanded project recent chats`,
                },
                { projectName: l.name },
              ),
              emptyState: (0, $.jsx)(K, {
                id: `projectsIndex.recentChats.empty`,
                defaultMessage: `No chats`,
                description: `Empty state for an expanded project in the projects index`,
              }),
              emptyStateClassName: `px-2 py-1 text-base text-token-text-secondary`,
              expanded: u,
              itemWrapper: xn,
              maxItems: 10,
              onExpandedChange: s,
              variant: `tableRow`,
              rowOptions: {
                canPin: !1,
                hideRemoteHostEnvIcon: !0,
                hideTimestamp: !0,
                variant: `tableRow`,
              },
              threadKeys: l.recentThreadKeys,
            }),
          })
        : null),
      (t[108] = n),
      (t[109] = f),
      (t[110] = s),
      (t[111] = l.name),
      (t[112] = l.recentThreadKeys),
      (t[113] = u),
      (t[114] = Ee))
    : (Ee = t[114]);
  let De;
  return (
    t[115] !== Te || t[116] !== Ee || t[117] !== j
      ? ((De = (0, $.jsxs)(`div`, {
          "data-project-row-wrapper": !0,
          className: j,
          children: [Te, Ee],
        })),
        (t[115] = Te),
        (t[116] = Ee),
        (t[117] = j),
        (t[118] = De))
      : (De = t[118]),
    De
  );
}
function bn(e) {
  let t = (0, Z.c)(2),
    { hostId: n } = e,
    { state: r } = kt(n);
  if (r == null) return null;
  let i;
  return (
    t[0] === n ? (i = t[1]) : ((i = (0, $.jsx)(Mt, { hostId: n })), (t[0] = n), (t[1] = i)), i
  );
}
function xn(e) {
  let t = (0, Z.c)(57),
    { children: n, className: r, threadKey: i } = e,
    a = _(o),
    s = ue(),
    c = ie(),
    l = ft(),
    [u] = (0, Q.useState)(Sn),
    d = m(Je, i),
    f = d?.kind === `local` ? d.conversationId : null,
    p = m(re, f),
    h = m(_t, i),
    g;
  t[0] === i ? (g = t[1]) : ((g = et(i)), (t[0] = i), (t[1] = g));
  let v = g,
    y = v != null,
    b =
      d?.kind === `local`
        ? (p ?? d.summary?.updatedAt ?? null)
        : d?.kind === `remote`
          ? (d.task.updated_at ?? d.task.created_at ?? null)
          : null,
    x;
  t[2] !== c || t[3] !== l || t[4] !== a || t[5] !== i
    ? ((x = () => {
        (ge(a, i), me(a, i, l, c));
      }),
      (t[2] = c),
      (t[3] = l),
      (t[4] = a),
      (t[5] = i),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C;
  t[7] === S
    ? (C = t[8])
    : ((C = (e) => {
        e.defaultPrevented || e.detail > 1 || fn(e.target) || S();
      }),
      (t[7] = S),
      (t[8] = C));
  let w = C,
    T;
  t[9] !== v || t[10] !== a
    ? ((T = (e) => {
        v != null && j(a, v, e);
      }),
      (t[9] = v),
      (t[10] = a),
      (t[11] = T))
    : (T = t[11]);
  let E = T,
    D;
  t[12] !== s || t[13] !== h
    ? ((D = s.formatMessage(h ? De : Ce)), (t[12] = s), (t[13] = h), (t[14] = D))
    : (D = t[14]);
  let O = D,
    k;
  t[15] === r
    ? (k = t[16])
    : ((k = q(
        on,
        sn,
        `before:inset-y-0`,
        `group/thread-row cursor-interaction h-9 items-center text-base leading-9`,
        r,
      )),
      (t[15] = r),
      (t[16] = k));
  let A;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = q(un, `col-span-2 flex min-w-0 items-center gap-3 max-[920px]:col-span-1`)),
      (t[17] = A))
    : (A = t[17]);
  let M = d ?? null,
    N;
  t[18] !== f || t[19] !== M
    ? ((N = (0, $.jsx)(Cn, { entry: M, localConversationId: f })),
      (t[18] = f),
      (t[19] = M),
      (t[20] = N))
    : (N = t[20]);
  let P;
  t[21] === n
    ? (P = t[22])
    : ((P = (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })),
      (t[21] = n),
      (t[22] = P));
  let F;
  t[23] !== P || t[24] !== N
    ? ((F = (0, $.jsxs)(`div`, { className: A, children: [N, P] })),
      (t[23] = P),
      (t[24] = N),
      (t[25] = F))
    : (F = t[25]);
  let I;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = q(un, `text-token-text-secondary max-[680px]:hidden`)), (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] !== b || t[28] !== u
    ? ((L = b == null ? null : (0, $.jsx)(nn, { modifiedAt: b, now: u })),
      (t[27] = b),
      (t[28] = u),
      (t[29] = L))
    : (L = t[29]);
  let R;
  t[30] === L
    ? (R = t[31])
    : ((R = (0, $.jsx)(`span`, { className: I, children: L })), (t[30] = L), (t[31] = R));
  let z;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = q(un, `flex min-w-0 justify-end gap-1`)), (t[32] = z))
    : (z = t[32]);
  let te = d ?? null,
    B;
  t[33] !== S || t[34] !== te
    ? ((B = (0, $.jsx)(wn, { entry: te, onOpenThread: S })), (t[33] = S), (t[34] = te), (t[35] = B))
    : (B = t[35]);
  let V;
  t[36] !== y || t[37] !== h || t[38] !== O || t[39] !== E
    ? ((V = y
        ? (0, $.jsx)(ct, {
            "aria-label": O,
            className: q(
              X,
              `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`,
            ),
            color: `ghostMuted`,
            size: `icon`,
            onClick: () => E(!h),
            children: h
              ? (0, $.jsx)(Se, { className: `icon-xs` })
              : (0, $.jsx)(ee, { className: `icon-xs` }),
          })
        : null),
      (t[36] = y),
      (t[37] = h),
      (t[38] = O),
      (t[39] = E),
      (t[40] = V))
    : (V = t[40]);
  let H;
  t[41] === s
    ? (H = t[42])
    : ((H = s.formatMessage({
        id: `projectsIndex.openThread`,
        defaultMessage: `Open chat`,
        description: `Button label to open a chat from an expanded project row`,
      })),
      (t[41] = s),
      (t[42] = H));
  let U;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(ne, { className: `icon-xs` })), (t[43] = U))
    : (U = t[43]);
  let W;
  t[44] !== S || t[45] !== H
    ? ((W = (0, $.jsx)(ct, {
        "aria-label": H,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: S,
        children: U,
      })),
      (t[44] = S),
      (t[45] = H),
      (t[46] = W))
    : (W = t[46]);
  let G;
  t[47] !== B || t[48] !== V || t[49] !== W
    ? ((G = (0, $.jsxs)(`span`, { className: z, children: [B, V, W] })),
      (t[47] = B),
      (t[48] = V),
      (t[49] = W),
      (t[50] = G))
    : (G = t[50]);
  let ae;
  return (
    t[51] !== w || t[52] !== F || t[53] !== R || t[54] !== G || t[55] !== k
      ? ((ae = (0, $.jsxs)(`div`, { className: k, onClick: w, children: [F, R, G] })),
        (t[51] = w),
        (t[52] = F),
        (t[53] = R),
        (t[54] = G),
        (t[55] = k),
        (t[56] = ae))
      : (ae = t[56]),
    ae
  );
}
function Sn() {
  return Date.now();
}
function Cn(e) {
  let t = (0, Z.c)(12),
    { entry: n, localConversationId: r } = e,
    i = m(we, r),
    a = n?.kind === `remote` ? n : null,
    o;
  t[0] === a ? (o = t[1]) : ((o = Ee(a)), (t[0] = a), (t[1] = o));
  let s = m(ye, o),
    c = m(ze, r),
    l = m(Ne, r),
    u = m(se, r),
    d = n?.kind === `remote` ? s?.iconBadge : i?.iconBadge,
    f;
  t[2] !== n || t[3] !== l || t[4] !== c || t[5] !== u
    ? ((f = On({
        entry: n,
        localHasUnreadTurn: l,
        localStatusType: c,
        localUnreadMessageCount: u,
      })),
      (t[2] = n),
      (t[3] = l),
      (t[4] = c),
      (t[5] = u),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    h;
  t[7] !== d || t[8] !== p
    ? ((h =
        d == null
          ? p == null
            ? null
            : (0, $.jsx)(Ot, { statusState: p })
          : (0, $.jsx)(Te, { badge: d })),
      (t[7] = d),
      (t[8] = p),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] === h
      ? (g = t[11])
      : ((g = (0, $.jsx)(`span`, {
          className: `flex h-7 w-7 shrink-0 items-center justify-center`,
          children: h,
        })),
        (t[10] = h),
        (t[11] = g)),
    g
  );
}
function wn(e) {
  let t = (0, Z.c)(4),
    { entry: n, onOpenThread: r } = e;
  if (n?.kind === `local`) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(En, { entry: n })), (t[0] = n), (t[1] = e)), e
    );
  }
  let i;
  return (
    t[2] === r ? (i = t[3]) : ((i = (0, $.jsx)(Tn, { onOpenThread: r })), (t[2] = r), (t[3] = i)), i
  );
}
function Tn(e) {
  let t = (0, Z.c)(17),
    { onOpenThread: n } = e,
    r = ue(),
    [i, a] = (0, Q.useState)(!1),
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r.formatMessage({
        id: `projectsIndex.threadActions`,
        defaultMessage: `Chat actions`,
        description: `Button label for expanded project chat row actions`,
      })),
      (t[0] = r),
      (t[1] = o));
  let s = i && `opacity-100`,
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = q(X, `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`, s)),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(gt, { className: `icon-xs` })), (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== o || t[6] !== c
    ? ((u = (0, $.jsx)(ct, {
        "aria-label": o,
        className: c,
        color: `ghostMuted`,
        size: `icon`,
        children: l,
      })),
      (t[5] = o),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === n
    ? (d = t[9])
    : ((d = () => {
        (n(), a(!1));
      }),
      (t[8] = n),
      (t[9] = d));
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(K, {
        id: `projectsIndex.openThreadMenuItem`,
        defaultMessage: `Open chat`,
        description: `Menu item to open a chat from an expanded project row`,
      })),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === d
    ? (p = t[12])
    : ((p = (0, $.jsx)(W.Item, { LeftIcon: ne, onSelect: d, children: f })),
      (t[11] = d),
      (t[12] = p));
  let m;
  return (
    t[13] !== i || t[14] !== u || t[15] !== p
      ? ((m = (0, $.jsx)(B, {
          align: `end`,
          contentWidth: `xs`,
          open: i,
          onOpenChange: a,
          triggerButton: u,
          children: p,
        })),
        (t[13] = i),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function En(e) {
  let t = (0, Z.c)(6),
    { entry: n } = e,
    r = n.conversationId,
    i = m(O, r) ?? n.summary?.title ?? null,
    a = n.cwd,
    o = n.workspaceKind === `projectless`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = q(
        X,
        `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100`,
      )),
      (t[0] = s))
    : (s = t[0]);
  let c;
  return (
    t[1] !== r || t[2] !== n.cwd || t[3] !== o || t[4] !== i
      ? ((c = (0, $.jsx)(qt, {
          archiveNavigation: `none`,
          archiveSource: `projects_index_thread_overflow_menu`,
          conversationId: r,
          cwd: a,
          dropdownAlign: `end`,
          hideForkActions: o,
          title: i,
          triggerButtonClassName: s,
          triggerButtonColor: `ghostMuted`,
          triggerIconClassName: `icon-xs`,
        })),
        (t[1] = r),
        (t[2] = n.cwd),
        (t[3] = o),
        (t[4] = i),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function Dn(e) {
  let t = (0, Z.c)(50),
    { canEditLocalProject: n, initialSources: r, localProjectSourcesEnabled: i, row: a } = e,
    s = _(o),
    c = ue(),
    l = h(He),
    u = m(it, a.group.threadKeys),
    d;
  t[0] === u ? (d = t[1]) : ((d = Ze(u)), (t[0] = u), (t[1] = d));
  let f = d,
    [p, g] = (0, Q.useState)(!1),
    [v, y] = (0, Q.useState)(!1),
    [b, x] = (0, Q.useState)(!1),
    S;
  t[2] === c
    ? (S = t[3])
    : ((S = c.formatMessage({
        id: `projectsIndex.projectActions`,
        defaultMessage: `Project actions`,
        description: `Button label for project row actions`,
      })),
      (t[2] = c),
      (t[3] = S));
  let C;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(gt, { className: `icon-xs` })), (t[4] = C))
    : (C = t[4]);
  let w;
  t[5] === S
    ? (w = t[6])
    : ((w = (0, $.jsx)(ct, {
        "aria-label": S,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        children: C,
      })),
      (t[5] = S),
      (t[6] = w));
  let T;
  t[7] !== n || t[8] !== r || t[9] !== a.group || t[10] !== a.name || t[11] !== s
    ? ((T = n
        ? (0, $.jsx)(W.Item, {
            LeftIcon: M,
            onSelect: () => {
              (g(!1),
                Xe(s, {
                  initialName: a.name,
                  initialSources: r,
                  project: An(a.group),
                  showDeleteAction: !0,
                }));
            },
            children: (0, $.jsx)(K, {
              id: `projectsIndex.editProject`,
              defaultMessage: `Edit project`,
              description: `Menu item to edit a project from the projects index`,
            }),
          })
        : null),
      (t[7] = n),
      (t[8] = r),
      (t[9] = a.group),
      (t[10] = a.name),
      (t[11] = s),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] !== n || t[14] !== r || t[15] !== i || t[16] !== a.group || t[17] !== a.name || t[18] !== s
    ? ((E =
        n && i
          ? (0, $.jsx)(W.Item, {
              LeftIcon: hn,
              onSelect: () => {
                (g(!1),
                  Xe(s, {
                    initialName: a.name,
                    initialSources: r,
                    project: An(a.group),
                    showDeleteAction: !0,
                  }));
              },
              children: (0, $.jsx)(K, {
                id: `projectsIndex.addSource`,
                defaultMessage: `Add source`,
                description: `Menu item to add a source folder from the projects index`,
              }),
            })
          : null),
      (t[13] = n),
      (t[14] = r),
      (t[15] = i),
      (t[16] = a.group),
      (t[17] = a.name),
      (t[18] = s),
      (t[19] = E))
    : (E = t[19]);
  let D = f.length === 0,
    ee,
    O;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = () => {
        (g(!1), y(!0));
      }),
      (O = (0, $.jsx)(K, {
        id: `projectsIndex.archiveProjectThreads`,
        defaultMessage: `Archive chats`,
        description: `Menu item to archive all archiveable chats in a project from the projects index`,
      })),
      (t[20] = ee),
      (t[21] = O))
    : ((ee = t[20]), (O = t[21]));
  let k;
  t[22] === D
    ? (k = t[23])
    : ((k = (0, $.jsx)(W.Item, { LeftIcon: Et, disabled: D, onSelect: ee, children: O })),
      (t[22] = D),
      (t[23] = k));
  let A;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(W.Item, {
        LeftIcon: ot,
        onSelect: () => {
          (g(!1), x(!0));
        },
        children: (0, $.jsx)(K, {
          id: `projectsIndex.removeProject`,
          defaultMessage: `Remove`,
          description: `Menu item to remove a project from the projects index`,
        }),
      })),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] !== p || t[26] !== k || t[27] !== w || t[28] !== T || t[29] !== E
    ? ((j = (0, $.jsxs)(B, {
        align: `end`,
        contentWidth: `xs`,
        open: p,
        onOpenChange: g,
        triggerButton: w,
        children: [T, E, k, A],
      })),
      (t[25] = p),
      (t[26] = k),
      (t[27] = w),
      (t[28] = T),
      (t[29] = E),
      (t[30] = j))
    : (j = t[30]);
  let N;
  t[31] !== v || t[32] !== a.group.threadKeys || t[33] !== a.name
    ? ((N = v
        ? (0, $.jsx)(qe, {
            projectLabel: a.name,
            threadKeys: a.group.threadKeys,
            currentThreadKey: null,
            onOpenChange: y,
          })
        : null),
      (t[31] = v),
      (t[32] = a.group.threadKeys),
      (t[33] = a.name),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] !== b || t[36] !== a.group || t[37] !== a.name || t[38] !== l
    ? ((P =
        b && a.group.projectKind === `local`
          ? (0, $.jsx)(Qe, {
              project: a.group,
              projectLabel: a.name,
              workspaceRootOptions: l ?? [],
              onOpenChange: x,
              onDropdownOpenChange: g,
            })
          : null),
      (t[35] = b),
      (t[36] = a.group),
      (t[37] = a.name),
      (t[38] = l),
      (t[39] = P))
    : (P = t[39]);
  let F;
  t[40] !== b || t[41] !== a.group.projectId || t[42] !== a.group.projectKind || t[43] !== a.name
    ? ((F =
        b && a.group.projectKind === `remote`
          ? (0, $.jsx)(tt, {
              projectId: a.group.projectId,
              projectLabel: a.name,
              onOpenChange: x,
              onDropdownOpenChange: g,
            })
          : null),
      (t[40] = b),
      (t[41] = a.group.projectId),
      (t[42] = a.group.projectKind),
      (t[43] = a.name),
      (t[44] = F))
    : (F = t[44]);
  let I;
  return (
    t[45] !== j || t[46] !== N || t[47] !== P || t[48] !== F
      ? ((I = (0, $.jsxs)($.Fragment, { children: [j, N, P, F] })),
        (t[45] = j),
        (t[46] = N),
        (t[47] = P),
        (t[48] = F),
        (t[49] = I))
      : (I = t[49]),
    I
  );
}
function On({ entry: e, localHasUnreadTurn: t, localStatusType: n, localUnreadMessageCount: r }) {
  switch (e?.kind) {
    case `local`:
      return { type: n ?? `idle`, unread: t === !0, unreadCount: r ?? 0 };
    case `remote`: {
      let t = e.task.task_status_display?.latest_turn_status_display?.turn_status;
      return {
        type:
          t === `in_progress` || t === `pending` ? `loading` : t === `failed` ? `error` : `idle`,
        unread: e.task.has_unread_turn,
      };
    }
    case `pending-worktree`:
      return {
        type:
          e.pendingWorktree.phase === `queued` || e.pendingWorktree.phase === `creating`
            ? `loading`
            : e.pendingWorktree.phase === `failed`
              ? `error`
              : `idle`,
        unread: e.pendingWorktree.needsAttention,
      };
    case void 0:
      return null;
  }
}
function kn(e, t) {
  return e?.includes(t) === !0 ? e.filter((e) => e !== t) : [...(e ?? []), t];
}
function An(e) {
  return e.isLocalProject === !0
    ? { isLocalProject: !0, projectId: e.projectId }
    : e.path == null
      ? { projectId: e.projectId }
      : { path: e.path, projectId: e.projectId };
}
var Z, Q, $, jn, Mn, Nn;
e(() => {
  ((Z = c()),
    le(),
    u(),
    n(),
    (Q = t(r(), 1)),
    J(),
    oe(),
    jt(),
    At(),
    ce(),
    T(),
    st(),
    te(),
    Gt(),
    fe(),
    Vt(),
    z(),
    l(),
    Le(),
    wt(),
    v(),
    be(),
    Tt(),
    H(),
    Fe(),
    bt(),
    P(),
    Ft(),
    Ae(),
    w(),
    ht(),
    at(),
    We(),
    I(),
    Kt(),
    Ke(),
    xt(),
    Pe(),
    $t(),
    dn(),
    pn(),
    C(),
    gn(),
    xe(),
    rt(),
    _e(),
    je(),
    Ye(),
    Re(),
    F(),
    ke(),
    $e(),
    nt(),
    de(),
    vt(),
    Oe(),
    G(),
    Nt(),
    Wt(),
    dt(),
    ($ = y()),
    (jn = `sticky top-0 z-30 bg-token-main-surface-primary after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:h-8 after:bg-linear-to-b after:from-token-main-surface-primary after:to-transparent after:content-['']`),
    (Mn = `min-h-10 items-center border-b border-token-border-light px-0 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-projects-rows]>[data-project-row-wrapper]:first-child>[data-project-row]:hover)]:border-b-transparent`),
    (Nn = { modified: `descending`, name: `ascending`, sources: `descending` }));
})();
export { _n as ProjectsIndexPage };
//# sourceMappingURL=projects-index-page.js.map
