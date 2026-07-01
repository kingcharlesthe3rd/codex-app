import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  BN as r,
  CA as i,
  CI as a,
  CP as o,
  Cn as s,
  EB as c,
  En as l,
  Fn as u,
  GP as d,
  Gr as f,
  HP as p,
  Hi as m,
  IP as h,
  In as g,
  Iu as _,
  LP as v,
  Lu as y,
  Mj as b,
  PR as x,
  Pj as S,
  Qi as C,
  Qj as w,
  Qn as T,
  RN as E,
  RV as D,
  Rn as O,
  SA as k,
  SP as A,
  Sn as j,
  TB as ee,
  TP as M,
  Tn as N,
  Ur as P,
  Ut as F,
  Vn as I,
  Yr as L,
  Yt as R,
  an as z,
  av as B,
  bB as V,
  bm as H,
  cM as U,
  cr as W,
  dj as G,
  eM as te,
  er as ne,
  fN as re,
  gx as ie,
  hx as ae,
  iF as oe,
  jV as K,
  kn as se,
  lL as ce,
  nr as le,
  on as ue,
  pN as de,
  pj as fe,
  qP as pe,
  qt as me,
  rr as he,
  sM as ge,
  sr as _e,
  vm as ve,
  vv as ye,
  wB as q,
  wI as be,
  wP as J,
  wn as xe,
  xn as Se,
  yp as Ce,
  zV as we,
  zi as Te,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Ah as Ee,
  Fo as De,
  Mr as Oe,
  Nr as ke,
  Po as Ae,
  Sd as je,
  Tp as Me,
  ap as Ne,
  dy as Pe,
  fy as Fe,
  gC as Ie,
  hC as Le,
  ip as Re,
  kh as ze,
  ny as Be,
  sp as Ve,
  ty as He,
  wp as Ue,
  xd as We,
} from "./app-initial~app-main~onboarding-page.js";
import { Ht as Ge, Ut as Ke } from "./app-initial~app-main~automations-page.js";
import {
  C as qe,
  S as Je,
  c as Ye,
  l as Xe,
  o as Ze,
  s as Qe,
} from "./app-initial~app-main~projects-index-page~local-conversation-page.js";
import {
  $ as $e,
  A as et,
  B as tt,
  L as nt,
  Mt as rt,
  Q as it,
  R as at,
  Z as ot,
  _ as st,
  _n as ct,
  ct as lt,
  dn as ut,
  dt,
  et as ft,
  fn as pt,
  g as mt,
  gn as ht,
  h as gt,
  i as _t,
  jt as vt,
  k as yt,
  lt as bt,
  m as xt,
  r as St,
  tt as Ct,
  ut as wt,
  v as Tt,
  vn as Et,
  y as Dt,
  z as Ot,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  m as kt,
  p as At,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  M as jt,
  N as Mt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~coa484up.js";
import {
  A as Nt,
  d as Pt,
  f as Ft,
  h as It,
  m as Lt,
  p as Rt,
  u as zt,
  y as Bt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import { n as Vt, t as Ht } from "./page-search-input.js";
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
    o = Qt(a({ projectId: e.projectId, projectWritableRoots: t, legacyRoot: e.path ?? null }));
  return {
    group: e,
    id: `codex:${e.projectId}`,
    kind: `codex`,
    modifiedAt: i.length === 0 ? null : Math.max(...i),
    name: e.label,
    projectId: e.projectId,
    recentThreadKeys: [...e.threadKeys].sort((e, t) => (n.get(t)?.at ?? 0) - (n.get(e)?.at ?? 0)),
    sourceCount: o.length,
    sources: o,
    sourceSearchText: o.map((e) => e.path ?? e.label).join(` `),
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
  return e.map((e) => ({ kind: `folder`, label: G(e), path: e }));
}
var $t = e(() => {
  (oe(), fe());
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
            children: (0, Y.jsx)(d, {
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
    { hostId: n, hostLabel: i, isRemote: a, source: o } = e,
    s = r(`open-file`),
    c = pe(),
    l = o.path,
    u;
  t[0] !== i || t[1] !== a || t[2] !== o.label || t[3] !== l
    ? ((u =
        a && l != null ? `${i ?? ``}${i == null ? `` : `: `}${l}` : l == null ? o.label : Ze(l)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o.label),
      (t[3] = l),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f = l != null && !a,
    p;
  if (a && n != null) {
    let e;
    (t[5] === n
      ? (e = t[6])
      : ((e = (0, Y.jsx)(wt, {
          className: `icon-xs shrink-0`,
          disableTooltip: !0,
          envType: `remote`,
          hostId: n,
        })),
        (t[5] = n),
        (t[6] = e)),
      (p = e));
  } else if (o.kind === `file`) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(jt, { className: `icon-xs shrink-0 text-token-description-foreground` })),
        (t[7] = e))
      : (e = t[7]),
      (p = e));
  } else {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(Ye, {
          className: `icon-xs group-hover/source-pill:opacity-0 group-focus-visible/source-pill:opacity-0`,
        })),
        (t[8] = e))
      : (e = t[8]);
    let n;
    t[9] === f
      ? (n = t[10])
      : ((n = f
          ? (0, Y.jsx)(He, {
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
      (p = r));
  }
  let m;
  t[13] === o.label
    ? (m = t[14])
    : ((m = (0, Y.jsx)(`span`, { className: `min-w-0 truncate`, children: o.label })),
      (t[13] = o.label),
      (t[14] = m));
  let h;
  t[15] !== p || t[16] !== m
    ? ((h = (0, Y.jsxs)(Y.Fragment, { children: [p, m] })), (t[15] = p), (t[16] = m), (t[17] = h))
    : (h = t[17]);
  let g = h,
    _;
  t[18] !== c || t[19] !== f || t[20] !== s || t[21] !== o.label || t[22] !== g || t[23] !== l
    ? ((_ = f
        ? (0, Y.jsx)(`button`, {
            type: `button`,
            className: `group/source-pill inline-flex max-w-56 shrink-0 cursor-interaction items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary hover:border-token-border-heavy focus-visible:border-token-focus-border focus-visible:outline-none`,
            "aria-label": c.formatMessage(
              {
                id: `projectsIndex.sources.openSource`,
                defaultMessage: `Reveal {source}`,
                description: `Accessible label for revealing a project source folder in the system file manager`,
              },
              { source: o.label },
            ),
            onClick: () => {
              kt({ path: l, cwd: ce(l), target: `fileManager`, openFile: s.mutate });
            },
            children: g,
          })
        : (0, Y.jsx)(`div`, {
            className: `flex max-w-56 shrink-0 items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary`,
            children: g,
          })),
      (t[18] = c),
      (t[19] = f),
      (t[20] = s),
      (t[21] = o.label),
      (t[22] = g),
      (t[23] = l),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  return (
    t[25] !== d || t[26] !== _
      ? ((v = (0, Y.jsx)(w, { tooltipContent: d, children: _ })),
        (t[25] = d),
        (t[26] = _),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function nn(e) {
  let t = (0, an.c)(8),
    { modifiedAt: n, now: r } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(d, {
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
  t[3] === i ? (a = t[4]) : ((a = (0, Y.jsx)(Re, { dateString: i })), (t[3] = i), (t[4] = a));
  let o;
  return (
    t[5] !== r || t[6] !== a
      ? ((o = (0, Y.jsx)(Ne, { nowMs: r, children: a })), (t[5] = r), (t[6] = a), (t[7] = o))
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
    ((an = D()),
      oe(),
      p(),
      Ve(),
      te(),
      At(),
      dt(),
      Be(),
      Mt(),
      Xe(),
      Qe(),
      E(),
      (Y = K()),
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
    (t(we()),
      (mn = K()),
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
  let e = pe(),
    t = c(O),
    { data: n } = y(x.THREAD_PROJECT_ASSIGNMENTS),
    { data: r } = y(x.PROJECTLESS_THREAD_IDS),
    { data: i } = y(x.PROJECT_WRITABLE_ROOTS),
    { groups: a } = q(ue, {
      enabled: !0,
      projectlessThreadIds: r,
      threadKeys: t,
      threadProjectAssignments: n,
    }),
    [o, s] = (0, Q.useState)(``),
    [l, u] = (0, Q.useState)(`modified`),
    [f, p] = (0, Q.useState)(`descending`),
    [m, h] = (0, Q.useState)(null),
    [g, _] = (0, Q.useState)(null),
    [v, b] = (0, Q.useState)(() => new Set()),
    [S, w] = (0, Q.useState)(() => new Set()),
    [T] = (0, Q.useState)(() => Date.now()),
    E = q(
      I,
      (0, Q.useMemo)(() => a.flatMap((e) => e.threadKeys), [a]),
    ),
    D = Jt({
      cloudRows: void 0,
      groups: a,
      projectWritableRoots: be(i),
      query: o,
      sortDirection: f,
      sortKey: l,
      tasks: E,
    }),
    k = e.formatMessage({
      id: `projectsIndex.search.placeholder`,
      defaultMessage: `Search projects`,
      description: `Accessible label and placeholder for projects index search`,
    }),
    A = (0, $.jsx)(Ge, {
      start: Ut({ container: m, target: g })
        ? null
        : (0, $.jsx)(d, {
            id: `projectsIndex.title`,
            defaultMessage: `Projects`,
            description: `Title for the projects index page`,
          }),
      trailing: (0, $.jsx)(St, {
        chatGptProjectCrudStatus: void 0,
        customTriggerButton: (0, $.jsx)(re, {
          color: `outline`,
          size: `toolbar`,
          children: (0, $.jsx)(d, {
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
    j = (e) => {
      if (l !== e) {
        (u(e), p(Nn[e]));
        return;
      }
      p(f === `ascending` ? `descending` : `ascending`);
    },
    ee = (e) => {
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
    (N = (0, $.jsx)(d, {
      id: `projectsIndex.empty`,
      defaultMessage: `No projects`,
      description: `Empty state for projects index`,
    })),
    (0, $.jsxs)(`div`, {
      className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary text-token-foreground`,
      children: [
        (0, $.jsx)(C, { extension: !0, children: A }),
        (0, $.jsx)(C, {
          browser: !0,
          chromeExtension: !0,
          electron: !0,
          children: (0, $.jsx)(We.Header, { children: A }),
        }),
        (0, $.jsx)(`div`, {
          ref: h,
          className: `relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto [scrollbar-gutter:stable]`,
          children: (0, $.jsxs)(`div`, {
            className: `flex min-h-full w-full flex-col pb-panel`,
            children: [
              (0, $.jsx)(`div`, {
                className: `mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pt-6 pb-3 md:electron:px-toolbar md:extension:px-20`,
                children: (0, $.jsx)(`h1`, {
                  ref: _,
                  className: `heading-lg font-normal text-token-foreground`,
                  children: (0, $.jsx)(d, {
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
                    label: k,
                    onSearchQueryChange: s,
                    placeholder: k,
                    searchQuery: o,
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
                      className: J(on, Mn),
                      children: [
                        (0, $.jsx)(vn, {
                          active: l === `name`,
                          direction: f,
                          onClick: () => j(`name`),
                          children: (0, $.jsx)(d, {
                            id: `projectsIndex.column.name`,
                            defaultMessage: `Name`,
                            description: `Projects index name column header`,
                          }),
                        }),
                        (0, $.jsx)(vn, {
                          active: l === `sources`,
                          className: `max-[920px]:hidden`,
                          direction: f,
                          onClick: () => j(`sources`),
                          children: (0, $.jsx)(d, {
                            id: `projectsIndex.column.sources`,
                            defaultMessage: `Sources`,
                            description: `Projects index sources column header`,
                          }),
                        }),
                        (0, $.jsx)(vn, {
                          active: l === `modified`,
                          className: `max-[680px]:hidden`,
                          direction: f,
                          onClick: () => j(`modified`),
                          children: (0, $.jsx)(d, {
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
                              let t = v.has(e.id);
                              return e.kind === `cloud`
                                ? (null?.projectsById.get(e.projectId), null)
                                : (0, $.jsx)(
                                    yn,
                                    {
                                      expanded: t,
                                      now: T,
                                      onShowAllChange: (t) => M(e.projectId, t),
                                      onToggleExpanded: () => ee(e.id),
                                      row: e,
                                      showAll: S.has(e.projectId),
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
    ? ((c = J(
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
        ? (0, $.jsx)(A, {
            "aria-hidden": `true`,
            className: J(
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
    { expanded: n, now: r, onShowAllChange: i, onToggleExpanded: o, row: s, showAll: c } = e,
    l = ee(h),
    u = pe(),
    f = pt(),
    p = S(Ft),
    { data: m } = y(x.PINNED_PROJECT_IDS),
    { data: g } = y(x.PROJECT_WRITABLE_ROOTS),
    _;
  t[0] !== m || t[1] !== s.group.projectId
    ? ((_ = m?.includes(s.group.projectId)), (t[0] = m), (t[1] = s.group.projectId), (t[2] = _))
    : (_ = t[2]);
  let v = _ === !0,
    b;
  t[3] !== g || t[4] !== s.group.path || t[5] !== s.group.projectId
    ? ((b = a({
        projectId: s.group.projectId,
        projectWritableRoots: be(g),
        legacyRoot: s.group.path ?? null,
      })),
      (t[3] = g),
      (t[4] = s.group.path),
      (t[5] = s.group.projectId),
      (t[6] = b))
    : (b = t[6]);
  let C = b,
    w = s.group.projectKind === `local` && (s.group.isLocalProject === !0 || s.group.path != null),
    T;
  t[7] === o
    ? (T = t[8])
    : ((T = (e) => {
        e.defaultPrevented || e.detail > 1 || fn(e.target) || o();
      }),
      (t[7] = o),
      (t[8] = T));
  let E = T,
    D;
  t[9] !== s.group || t[10] !== f
    ? ((D = (e) => {
        e.defaultPrevented || fn(e.target) || f(s.group);
      }),
      (t[9] = s.group),
      (t[10] = f),
      (t[11] = D))
    : (D = t[11]);
  let O = D,
    k = !n && `[&:has(>_[data-project-row]:hover)]:border-b-transparent`,
    j;
  t[12] === k ? (j = t[13]) : ((j = J(ln, k)), (t[12] = k), (t[13] = j));
  let M;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = J(
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
    ? ((N = J(un, `flex min-w-0 items-center gap-3`)), (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] !== n || t[17] !== s.group.projectKind
    ? ((P =
        s.group.projectKind === `remote`
          ? (0, $.jsx)(zt, { className: `icon-xs shrink-0` })
          : (0, $.jsx)(xt, { className: `icon-xs shrink-0`, open: n })),
      (t[16] = n),
      (t[17] = s.group.projectKind),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] !== s.group.projectId || t[20] !== s.name || t[21] !== P
    ? ((F = (0, $.jsx)(_e, {
        projectId: s.group.projectId,
        projectName: s.name,
        buttonClassName: `!h-7 !w-7 !p-1 text-token-description-foreground [&>svg]:!h-4 [&>svg]:!w-4`,
        fallbackIcon: P,
        markerClassName: `h-4 w-4`,
      })),
      (t[19] = s.group.projectId),
      (t[20] = s.name),
      (t[21] = P),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] === s.name
    ? (I = t[24])
    : ((I = (0, $.jsx)(`span`, {
        className: `block min-w-0 truncate text-token-foreground`,
        children: s.name,
      })),
      (t[23] = s.name),
      (t[24] = I));
  let L;
  t[25] !== s.group.hostId || t[26] !== s.group.projectKind
    ? ((L =
        s.group.projectKind === `remote` && s.group.hostId != null
          ? (0, $.jsx)(bn, { hostId: s.group.hostId })
          : null),
      (t[25] = s.group.hostId),
      (t[26] = s.group.projectKind),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] === u
    ? (R = t[29])
    : ((R = u.formatMessage({
        id: `projectsIndex.toggleProject`,
        defaultMessage: `Toggle project`,
        description: `Accessible label for expanding or collapsing a project row`,
      })),
      (t[28] = u),
      (t[29] = R));
  let z;
  t[30] === o
    ? (z = t[31])
    : ((z = (e) => {
        (e.stopPropagation(), o());
      }),
      (t[30] = o),
      (t[31] = z));
  let B = n ? `rotate-0 opacity-100` : `-rotate-90`,
    V;
  t[32] === B
    ? (V = t[33])
    : ((V = J(
        `icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100`,
        B,
      )),
      (t[32] = B),
      (t[33] = V));
  let H;
  t[34] === V
    ? (H = t[35])
    : ((H = (0, $.jsx)(A, { "aria-hidden": `true`, className: V })), (t[34] = V), (t[35] = H));
  let U;
  t[36] !== n || t[37] !== R || t[38] !== z || t[39] !== H
    ? ((U = (0, $.jsx)(`button`, {
        type: `button`,
        className: `group/project-toggle cursor-interaction rounded-sm`,
        "aria-label": R,
        "aria-expanded": n,
        onClick: z,
        children: H,
      })),
      (t[36] = n),
      (t[37] = R),
      (t[38] = z),
      (t[39] = H),
      (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== I || t[42] !== L || t[43] !== U
    ? ((W = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [I, L, U],
      })),
      (t[41] = I),
      (t[42] = L),
      (t[43] = U),
      (t[44] = W))
    : (W = t[44]);
  let G;
  t[45] !== F || t[46] !== W
    ? ((G = (0, $.jsxs)(`div`, { className: N, children: [F, W] })),
      (t[45] = F),
      (t[46] = W),
      (t[47] = G))
    : (G = t[47]);
  let te;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = J(un, `flex min-w-0 items-center gap-2 text-token-text-secondary max-[920px]:hidden`)),
      (t[48] = te))
    : (te = t[48]);
  let ne = s.group.projectKind === `remote` ? s.group.hostId : null,
    ae =
      s.group.projectKind === `remote` ? (s.group.hostDisplayName ?? s.group.hostId ?? null) : null,
    oe = s.group.projectKind === `remote`,
    K;
  t[49] !== s.sources || t[50] !== ne || t[51] !== ae || t[52] !== oe
    ? ((K = (0, $.jsx)(en, { hostId: ne, hostLabel: ae, isRemote: oe, sources: s.sources })),
      (t[49] = s.sources),
      (t[50] = ne),
      (t[51] = ae),
      (t[52] = oe),
      (t[53] = K))
    : (K = t[53]);
  let se;
  t[54] !== w ||
  t[55] !== C ||
  t[56] !== u ||
  t[57] !== p ||
  t[58] !== s.group ||
  t[59] !== s.name ||
  t[60] !== l
    ? ((se =
        w && p
          ? (0, $.jsx)(re, {
              "aria-label": u.formatMessage({
                id: `projectsIndex.sources.addSource`,
                defaultMessage: `Add source`,
                description: `Button label to add a source folder to a project from the projects index`,
              }),
              className: J(
                X,
                `opacity-0 group-hover/project-row:opacity-100 focus-visible:opacity-100`,
              ),
              color: `ghostMuted`,
              size: `icon`,
              onClick: () => {
                me(l, {
                  initialName: s.name,
                  initialSources: C,
                  project: An(s.group),
                  showDeleteAction: !0,
                });
              },
              children: (0, $.jsx)(hn, { className: `icon-xs` }),
            })
          : null),
      (t[54] = w),
      (t[55] = C),
      (t[56] = u),
      (t[57] = p),
      (t[58] = s.group),
      (t[59] = s.name),
      (t[60] = l),
      (t[61] = se))
    : (se = t[61]);
  let ce;
  t[62] !== K || t[63] !== se
    ? ((ce = (0, $.jsxs)(`span`, { className: te, children: [K, se] })),
      (t[62] = K),
      (t[63] = se),
      (t[64] = ce))
    : (ce = t[64]);
  let le;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = J(un, `text-token-text-secondary max-[680px]:hidden`)), (t[65] = le))
    : (le = t[65]);
  let ue;
  t[66] !== r || t[67] !== s.modifiedAt
    ? ((ue = (0, $.jsx)(`span`, {
        className: le,
        children: (0, $.jsx)(nn, { modifiedAt: s.modifiedAt, now: r }),
      })),
      (t[66] = r),
      (t[67] = s.modifiedAt),
      (t[68] = ue))
    : (ue = t[68]);
  let de;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = J(un, `flex min-w-0 justify-end gap-1`)), (t[69] = de))
    : (de = t[69]);
  let fe;
  t[70] !== w || t[71] !== C || t[72] !== p || t[73] !== s
    ? ((fe = (0, $.jsx)(Dn, {
        canEditLocalProject: w,
        initialSources: C,
        localProjectSourcesEnabled: p,
        row: s,
      })),
      (t[70] = w),
      (t[71] = C),
      (t[72] = p),
      (t[73] = s),
      (t[74] = fe))
    : (fe = t[74]);
  let he;
  t[75] !== u || t[76] !== v
    ? ((he = v
        ? u.formatMessage({
            id: `projectsIndex.unpinProject`,
            defaultMessage: `Unpin project`,
            description: `Button label to unpin a project from the projects index`,
          })
        : u.formatMessage({
            id: `projectsIndex.pinProject`,
            defaultMessage: `Pin project`,
            description: `Button label to pin a project from the projects index`,
          })),
      (t[75] = u),
      (t[76] = v),
      (t[77] = he))
    : (he = t[77]);
  let ge;
  t[78] !== m || t[79] !== s.group.projectId || t[80] !== l
    ? ((ge = () => {
        ie(l, x.PINNED_PROJECT_IDS, kn(m, s.group.projectId));
      }),
      (t[78] = m),
      (t[79] = s.group.projectId),
      (t[80] = l),
      (t[81] = ge))
    : (ge = t[81]);
  let ve;
  t[82] === v
    ? (ve = t[83])
    : ((ve = v
        ? (0, $.jsx)(yt, { className: `icon-xs` })
        : (0, $.jsx)(Oe, { className: `icon-xs` })),
      (t[82] = v),
      (t[83] = ve));
  let ye;
  t[84] !== he || t[85] !== ge || t[86] !== ve
    ? ((ye = (0, $.jsx)(re, {
        "aria-label": he,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: ge,
        children: ve,
      })),
      (t[84] = he),
      (t[85] = ge),
      (t[86] = ve),
      (t[87] = ye))
    : (ye = t[87]);
  let q;
  t[88] === u
    ? (q = t[89])
    : ((q = u.formatMessage({
        id: `projectsIndex.startProjectChat`,
        defaultMessage: `Start new chat in project`,
        description: `Button label to start a new chat from the projects index`,
      })),
      (t[88] = u),
      (t[89] = q));
  let xe;
  t[90] !== s.group || t[91] !== f
    ? ((xe = () => f(s.group)), (t[90] = s.group), (t[91] = f), (t[92] = xe))
    : (xe = t[92]);
  let Se;
  t[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, $.jsx)(Lt, { className: `icon-xs` })), (t[93] = Se))
    : (Se = t[93]);
  let Ce;
  t[94] !== q || t[95] !== xe
    ? ((Ce = (0, $.jsx)(re, {
        "aria-label": q,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: xe,
        children: Se,
      })),
      (t[94] = q),
      (t[95] = xe),
      (t[96] = Ce))
    : (Ce = t[96]);
  let we;
  t[97] !== fe || t[98] !== ye || t[99] !== Ce
    ? ((we = (0, $.jsxs)(`span`, { className: de, children: [fe, ye, Ce] })),
      (t[97] = fe),
      (t[98] = ye),
      (t[99] = Ce),
      (t[100] = we))
    : (we = t[100]);
  let Te;
  t[101] !== E || t[102] !== O || t[103] !== G || t[104] !== ce || t[105] !== ue || t[106] !== we
    ? ((Te = (0, $.jsxs)(`div`, {
        "data-project-row": !0,
        className: M,
        onClick: E,
        onDoubleClick: O,
        children: [G, ce, ue, we],
      })),
      (t[101] = E),
      (t[102] = O),
      (t[103] = G),
      (t[104] = ce),
      (t[105] = ue),
      (t[106] = we),
      (t[107] = Te))
    : (Te = t[107]);
  let Ee;
  t[108] !== n ||
  t[109] !== u ||
  t[110] !== i ||
  t[111] !== s.name ||
  t[112] !== s.recentThreadKeys ||
  t[113] !== c
    ? ((Ee = n
        ? (0, $.jsx)(`div`, {
            className: `pb-3`,
            children: (0, $.jsx)(Tt, {
              ariaLabel: u.formatMessage(
                {
                  id: `projectsIndex.recentChats.ariaLabel`,
                  defaultMessage: `Recent chats in {projectName}`,
                  description: `Accessible label for expanded project recent chats`,
                },
                { projectName: s.name },
              ),
              emptyState: (0, $.jsx)(d, {
                id: `projectsIndex.recentChats.empty`,
                defaultMessage: `No chats`,
                description: `Empty state for an expanded project in the projects index`,
              }),
              emptyStateClassName: `px-2 py-1 text-base text-token-text-secondary`,
              expanded: c,
              itemWrapper: xn,
              maxItems: 10,
              onExpandedChange: i,
              variant: `tableRow`,
              rowOptions: {
                canPin: !1,
                hideRemoteHostEnvIcon: !0,
                hideTimestamp: !0,
                variant: `tableRow`,
              },
              threadKeys: s.recentThreadKeys,
            }),
          })
        : null),
      (t[108] = n),
      (t[109] = u),
      (t[110] = i),
      (t[111] = s.name),
      (t[112] = s.recentThreadKeys),
      (t[113] = c),
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
    { state: r } = qe(n);
  if (r == null) return null;
  let i;
  return (
    t[0] === n ? (i = t[1]) : ((i = (0, $.jsx)(mt, { hostId: n })), (t[0] = n), (t[1] = i)), i
  );
}
function xn(e) {
  let t = (0, Z.c)(57),
    { children: n, className: r, threadKey: i } = e,
    a = ee(h),
    o = pe(),
    s = ye(),
    c = Me(),
    [l] = (0, Q.useState)(Sn),
    u = q(g, i),
    d = u?.kind === `local` ? u.conversationId : null,
    f = q(H, d),
    p = q(Nt, i),
    m;
  t[0] === i ? (m = t[1]) : ((m = Te(i)), (t[0] = i), (t[1] = m));
  let _ = m,
    v = _ != null,
    y =
      u?.kind === `local`
        ? (f ?? u.summary?.updatedAt ?? null)
        : u?.kind === `remote`
          ? (u.task.updated_at ?? u.task.created_at ?? null)
          : null,
    b;
  t[2] !== s || t[3] !== c || t[4] !== a || t[5] !== i
    ? ((b = () => {
        (ht(a, i), Et(a, i, c, s));
      }),
      (t[2] = s),
      (t[3] = c),
      (t[4] = a),
      (t[5] = i),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S;
  t[7] === x
    ? (S = t[8])
    : ((S = (e) => {
        e.defaultPrevented || e.detail > 1 || fn(e.target) || x();
      }),
      (t[7] = x),
      (t[8] = S));
  let C = S,
    w;
  t[9] !== _ || t[10] !== a
    ? ((w = (e) => {
        _ != null && De(a, _, e);
      }),
      (t[9] = _),
      (t[10] = a),
      (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] !== o || t[13] !== p
    ? ((E = o.formatMessage(p ? Ct : ft)), (t[12] = o), (t[13] = p), (t[14] = E))
    : (E = t[14]);
  let D = E,
    O;
  t[15] === r
    ? (O = t[16])
    : ((O = J(
        on,
        sn,
        `before:inset-y-0`,
        `group/thread-row cursor-interaction h-9 items-center text-base leading-9`,
        r,
      )),
      (t[15] = r),
      (t[16] = O));
  let k;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = J(un, `col-span-2 flex min-w-0 items-center gap-3 max-[920px]:col-span-1`)),
      (t[17] = k))
    : (k = t[17]);
  let A = u ?? null,
    j;
  t[18] !== d || t[19] !== A
    ? ((j = (0, $.jsx)(Cn, { entry: A, localConversationId: d })),
      (t[18] = d),
      (t[19] = A),
      (t[20] = j))
    : (j = t[20]);
  let M;
  t[21] === n
    ? (M = t[22])
    : ((M = (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })),
      (t[21] = n),
      (t[22] = M));
  let N;
  t[23] !== M || t[24] !== j
    ? ((N = (0, $.jsxs)(`div`, { className: k, children: [j, M] })),
      (t[23] = M),
      (t[24] = j),
      (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = J(un, `text-token-text-secondary max-[680px]:hidden`)), (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] !== y || t[28] !== l
    ? ((F = y == null ? null : (0, $.jsx)(nn, { modifiedAt: y, now: l })),
      (t[27] = y),
      (t[28] = l),
      (t[29] = F))
    : (F = t[29]);
  let I;
  t[30] === F
    ? (I = t[31])
    : ((I = (0, $.jsx)(`span`, { className: P, children: F })), (t[30] = F), (t[31] = I));
  let L;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = J(un, `flex min-w-0 justify-end gap-1`)), (t[32] = L))
    : (L = t[32]);
  let R = u ?? null,
    z;
  t[33] !== x || t[34] !== R
    ? ((z = (0, $.jsx)(wn, { entry: R, onOpenThread: x })), (t[33] = x), (t[34] = R), (t[35] = z))
    : (z = t[35]);
  let B;
  t[36] !== v || t[37] !== p || t[38] !== D || t[39] !== T
    ? ((B = v
        ? (0, $.jsx)(re, {
            "aria-label": D,
            className: J(
              X,
              `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`,
            ),
            color: `ghostMuted`,
            size: `icon`,
            onClick: () => T(!p),
            children: p
              ? (0, $.jsx)(yt, { className: `icon-xs` })
              : (0, $.jsx)(Oe, { className: `icon-xs` }),
          })
        : null),
      (t[36] = v),
      (t[37] = p),
      (t[38] = D),
      (t[39] = T),
      (t[40] = B))
    : (B = t[40]);
  let V;
  t[41] === o
    ? (V = t[42])
    : ((V = o.formatMessage({
        id: `projectsIndex.openThread`,
        defaultMessage: `Open chat`,
        description: `Button label to open a chat from an expanded project row`,
      })),
      (t[41] = o),
      (t[42] = V));
  let U;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(ge, { className: `icon-xs` })), (t[43] = U))
    : (U = t[43]);
  let W;
  t[44] !== x || t[45] !== V
    ? ((W = (0, $.jsx)(re, {
        "aria-label": V,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: x,
        children: U,
      })),
      (t[44] = x),
      (t[45] = V),
      (t[46] = W))
    : (W = t[46]);
  let G;
  t[47] !== z || t[48] !== B || t[49] !== W
    ? ((G = (0, $.jsxs)(`span`, { className: L, children: [z, B, W] })),
      (t[47] = z),
      (t[48] = B),
      (t[49] = W),
      (t[50] = G))
    : (G = t[50]);
  let te;
  return (
    t[51] !== C || t[52] !== N || t[53] !== I || t[54] !== G || t[55] !== O
      ? ((te = (0, $.jsxs)(`div`, { className: O, onClick: C, children: [N, I, G] })),
        (t[51] = C),
        (t[52] = N),
        (t[53] = I),
        (t[54] = G),
        (t[55] = O),
        (t[56] = te))
      : (te = t[56]),
    te
  );
}
function Sn() {
  return Date.now();
}
function Cn(e) {
  let t = (0, Z.c)(12),
    { entry: n, localConversationId: r } = e,
    i = q(Ot, r),
    a = n?.kind === `remote` ? n : null,
    o;
  t[0] === a ? (o = t[1]) : ((o = nt(a)), (t[0] = a), (t[1] = o));
  let s = q(tt, o),
    c = q(ne, r),
    l = q(le, r),
    u = q(ve, r),
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
    m;
  t[7] !== d || t[8] !== p
    ? ((m =
        d == null
          ? p == null
            ? null
            : (0, $.jsx)(vt, { statusState: p })
          : (0, $.jsx)(ot, { badge: d })),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  return (
    t[10] === m
      ? (h = t[11])
      : ((h = (0, $.jsx)(`span`, {
          className: `flex h-7 w-7 shrink-0 items-center justify-center`,
          children: m,
        })),
        (t[10] = m),
        (t[11] = h)),
    h
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
    r = pe(),
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
    : ((c = J(X, `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`, s)),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(Pe, { className: `icon-xs` })), (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== o || t[6] !== c
    ? ((u = (0, $.jsx)(re, {
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
  let p;
  t[8] === n
    ? (p = t[9])
    : ((p = () => {
        (n(), a(!1));
      }),
      (t[8] = n),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(d, {
        id: `projectsIndex.openThreadMenuItem`,
        defaultMessage: `Open chat`,
        description: `Menu item to open a chat from an expanded project row`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === p
    ? (h = t[12])
    : ((h = (0, $.jsx)(f.Item, { LeftIcon: ge, onSelect: p, children: m })),
      (t[11] = p),
      (t[12] = h));
  let g;
  return (
    t[13] !== i || t[14] !== u || t[15] !== h
      ? ((g = (0, $.jsx)(P, {
          align: `end`,
          contentWidth: `xs`,
          open: i,
          onOpenChange: a,
          triggerButton: u,
          children: h,
        })),
        (t[13] = i),
        (t[14] = u),
        (t[15] = h),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function En(e) {
  let t = (0, Z.c)(6),
    { entry: n } = e,
    r = n.conversationId,
    i = q(Ie, r) ?? n.summary?.title ?? null,
    a = n.cwd,
    o = n.workspaceKind === `projectless`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = J(
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
    o = ee(h),
    l = pe(),
    p = c(z),
    m = q(u, a.group.threadKeys),
    g;
  t[0] === m ? (g = t[1]) : ((g = N(m)), (t[0] = m), (t[1] = g));
  let _ = g,
    [v, y] = (0, Q.useState)(!1),
    [b, x] = (0, Q.useState)(!1),
    [S, C] = (0, Q.useState)(!1),
    w;
  t[2] === l
    ? (w = t[3])
    : ((w = l.formatMessage({
        id: `projectsIndex.projectActions`,
        defaultMessage: `Project actions`,
        description: `Button label for project row actions`,
      })),
      (t[2] = l),
      (t[3] = w));
  let T;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(Pe, { className: `icon-xs` })), (t[4] = T))
    : (T = t[4]);
  let E;
  t[5] === w
    ? (E = t[6])
    : ((E = (0, $.jsx)(re, {
        "aria-label": w,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        children: T,
      })),
      (t[5] = w),
      (t[6] = E));
  let D;
  t[7] !== n || t[8] !== r || t[9] !== a.group || t[10] !== a.name || t[11] !== o
    ? ((D = n
        ? (0, $.jsx)(f.Item, {
            LeftIcon: ze,
            onSelect: () => {
              (y(!1),
                me(o, {
                  initialName: a.name,
                  initialSources: r,
                  project: An(a.group),
                  showDeleteAction: !0,
                }));
            },
            children: (0, $.jsx)(d, {
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
      (t[11] = o),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] !== n || t[14] !== r || t[15] !== i || t[16] !== a.group || t[17] !== a.name || t[18] !== o
    ? ((O =
        n && i
          ? (0, $.jsx)(f.Item, {
              LeftIcon: hn,
              onSelect: () => {
                (y(!1),
                  me(o, {
                    initialName: a.name,
                    initialSources: r,
                    project: An(a.group),
                    showDeleteAction: !0,
                  }));
              },
              children: (0, $.jsx)(d, {
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
      (t[18] = o),
      (t[19] = O))
    : (O = t[19]);
  let A = _.length === 0,
    M,
    F;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        (y(!1), x(!0));
      }),
      (F = (0, $.jsx)(d, {
        id: `projectsIndex.archiveProjectThreads`,
        defaultMessage: `Archive chats`,
        description: `Menu item to archive all archiveable chats in a project from the projects index`,
      })),
      (t[20] = M),
      (t[21] = F))
    : ((M = t[20]), (F = t[21]));
  let I;
  t[22] === A
    ? (I = t[23])
    : ((I = (0, $.jsx)(f.Item, { LeftIcon: lt, disabled: A, onSelect: M, children: F })),
      (t[22] = A),
      (t[23] = I));
  let L;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(f.Item, {
        LeftIcon: k,
        onSelect: () => {
          (y(!1), C(!0));
        },
        children: (0, $.jsx)(d, {
          id: `projectsIndex.removeProject`,
          defaultMessage: `Remove`,
          description: `Menu item to remove a project from the projects index`,
        }),
      })),
      (t[24] = L))
    : (L = t[24]);
  let R;
  t[25] !== v || t[26] !== I || t[27] !== E || t[28] !== D || t[29] !== O
    ? ((R = (0, $.jsxs)(P, {
        align: `end`,
        contentWidth: `xs`,
        open: v,
        onOpenChange: y,
        triggerButton: E,
        children: [D, O, I, L],
      })),
      (t[25] = v),
      (t[26] = I),
      (t[27] = E),
      (t[28] = D),
      (t[29] = O),
      (t[30] = R))
    : (R = t[30]);
  let B;
  t[31] !== b || t[32] !== a.group.threadKeys || t[33] !== a.name
    ? ((B = b
        ? (0, $.jsx)(Se, {
            projectLabel: a.name,
            threadKeys: a.group.threadKeys,
            currentThreadKey: null,
            onOpenChange: x,
          })
        : null),
      (t[31] = b),
      (t[32] = a.group.threadKeys),
      (t[33] = a.name),
      (t[34] = B))
    : (B = t[34]);
  let V;
  t[35] !== S || t[36] !== a.group || t[37] !== a.name || t[38] !== p
    ? ((V =
        S && a.group.projectKind === `local`
          ? (0, $.jsx)(j, {
              project: a.group,
              projectLabel: a.name,
              workspaceRootOptions: p ?? [],
              onOpenChange: C,
              onDropdownOpenChange: y,
            })
          : null),
      (t[35] = S),
      (t[36] = a.group),
      (t[37] = a.name),
      (t[38] = p),
      (t[39] = V))
    : (V = t[39]);
  let H;
  t[40] !== S || t[41] !== a.group.projectId || t[42] !== a.group.projectKind || t[43] !== a.name
    ? ((H =
        S && a.group.projectKind === `remote`
          ? (0, $.jsx)(s, {
              projectId: a.group.projectId,
              projectLabel: a.name,
              onOpenChange: C,
              onDropdownOpenChange: y,
            })
          : null),
      (t[40] = S),
      (t[41] = a.group.projectId),
      (t[42] = a.group.projectKind),
      (t[43] = a.name),
      (t[44] = H))
    : (H = t[44]);
  let U;
  return (
    t[45] !== R || t[46] !== B || t[47] !== V || t[48] !== H
      ? ((U = (0, $.jsxs)($.Fragment, { children: [R, B, V, H] })),
        (t[45] = R),
        (t[46] = B),
        (t[47] = V),
        (t[48] = H),
        (t[49] = U))
      : (U = t[49]),
    U
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
  ((Z = D()),
    M(),
    V(),
    oe(),
    (Q = t(we(), 1)),
    p(),
    B(),
    Je(),
    st(),
    Ce(),
    je(),
    de(),
    L(),
    Gt(),
    gt(),
    Vt(),
    n(),
    ae(),
    T(),
    rt(),
    _(),
    ut(),
    bt(),
    U(),
    o(),
    It(),
    Ee(),
    Pt(),
    et(),
    ke(),
    Fe(),
    i(),
    he(),
    Le(),
    Kt(),
    W(),
    Rt(),
    F(),
    $t(),
    dn(),
    pn(),
    v(),
    gn(),
    $e(),
    l(),
    _t(),
    it(),
    xe(),
    R(),
    Ae(),
    at(),
    se(),
    m(),
    ct(),
    Bt(),
    Dt(),
    b(),
    Ke(),
    Wt(),
    Ue(),
    ($ = K()),
    (jn = `sticky top-0 z-30 bg-token-main-surface-primary after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:h-8 after:bg-linear-to-b after:from-token-main-surface-primary after:to-transparent after:content-['']`),
    (Mn = `min-h-10 items-center border-b border-token-border-light px-0 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-projects-rows]>[data-project-row-wrapper]:first-child>[data-project-row]:hover)]:border-b-transparent`),
    (Nn = { modified: `descending`, name: `ascending`, sources: `descending` }));
})();
export { _n as ProjectsIndexPage };
//# sourceMappingURL=projects-index-page.js.map
