import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $r as n,
  AV as r,
  Ar as i,
  CV as a,
  DV as o,
  Dr as s,
  EA as c,
  EB as l,
  Er as u,
  FN as d,
  GN as f,
  GP as p,
  Gr as m,
  HP as h,
  Hr as g,
  IP as _,
  JD as v,
  LP as y,
  NE as b,
  PN as x,
  Pf as S,
  Qj as C,
  Qr as w,
  RN as T,
  RV as E,
  SV as D,
  TB as O,
  TR as k,
  Tr as A,
  UN as j,
  Ur as M,
  VN as N,
  VP as P,
  Vr as F,
  WN as I,
  XO as L,
  XR as ee,
  Xx as te,
  YO as R,
  Yj as z,
  Yr as B,
  Yt as ne,
  Yx as re,
  _x as ie,
  av as V,
  bB as H,
  cj as ae,
  du as oe,
  eM as se,
  en as ce,
  fN as le,
  gi as U,
  iF as ue,
  jE as de,
  jV as W,
  lM as G,
  pN as K,
  pi as fe,
  pj as pe,
  qD as q,
  qP as me,
  qj as J,
  sn as he,
  tn as ge,
  uM as _e,
  uu as ve,
  vv as ye,
  vx as be,
  wA as xe,
  wr as Se,
  xV as Ce,
  yp as we,
  zV as Te,
  zf as Ee,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Cr as De,
  Fh as Oe,
  Fm as ke,
  Fn as Ae,
  Ih as je,
  In as Me,
  Lm as Ne,
  Rm as Pe,
  SD as Fe,
  Sr as Ie,
  Tp as Le,
  ah as Re,
  hp as ze,
  mp as Be,
  oh as Ve,
  wp as He,
  xD as Ue,
  zm as We,
} from "./app-initial~app-main~onboarding-page.js";
import { lt as Ge, ut as Ke } from "./app-initial~app-main~automations-page.js";
import {
  O as qe,
  T as Je,
  k as Ye,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  i as Xe,
  r as Ze,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n.js";
import {
  r as Qe,
  t as $e,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as et,
  t as tt,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as nt, t as rt } from "./infinite-scroll-pagination-spinner.js";
import { n as it, t as at } from "./filter.js";
import { n as ot, t as st } from "./control-group.js";
var Y,
  ct = e(() => {
    (h(),
      (Y = P({
        delete: {
          id: `settings.dataControls.archivedChats.delete`,
          defaultMessage: `Delete`,
          description: `Button label to permanently delete an archived chat`,
        },
        deleteAll: {
          id: `settings.dataControls.archivedChats.deleteAll`,
          defaultMessage: `Delete all`,
          description: `Button label to permanently delete all archived local chats`,
        },
        deleteAllError: {
          id: `settings.dataControls.archivedChats.deleteAllError`,
          defaultMessage: `Failed to delete archived chats`,
          description: `Error message when deleting all archived chats fails`,
        },
        deleteError: {
          id: `settings.dataControls.archivedChats.deleteError`,
          defaultMessage: `Failed to delete archived chat`,
          description: `Error message when deleting an archived chat fails`,
        },
        deleteUnsupported: {
          id: `settings.dataControls.archivedChats.deleteUnsupported`,
          defaultMessage: `This host doesn’t support deleting chats. Update Codex on the host and try again.`,
          description: `Error message when a Codex host does not support deleting archived chats`,
        },
        deleteSuccessPlain: {
          id: `settings.dataControls.archivedChats.deleteSuccessPlain`,
          defaultMessage: `Deleted archived chat`,
          description: `Success toast after deleting an archived chat`,
        },
        deleting: {
          id: `settings.dataControls.archivedChats.deleting`,
          defaultMessage: `Deleting archived chat…`,
          description: `Toast shown while deleting an archived chat`,
        },
        deletingAll: {
          id: `settings.dataControls.archivedChats.deletingAll`,
          defaultMessage: `Deleting archived chats…`,
          description: `Toast shown while deleting all archived chats`,
        },
        unarchiveError: {
          id: `settings.dataControls.archivedChats.unarchiveError`,
          defaultMessage: `Failed to unarchive chat`,
          description: `Error message when unarchiving a chat`,
        },
        openError: {
          id: `settings.dataControls.archivedChats.openError`,
          defaultMessage: `Unarchived chat, but failed to open it`,
          description: `Error message when an archived chat was unarchived but could not be opened`,
        },
        unarchiveSuccessPlain: {
          id: `settings.dataControls.archivedChats.unarchiveSuccessPlain`,
          defaultMessage: `Unarchived chat`,
          description: `Success toast after unarchiving a chat`,
        },
        viewNow: {
          id: `settings.dataControls.archivedChats.viewNow`,
          defaultMessage: `View now`,
          description: `Action label to open an unarchived chat from the success toast`,
        },
        unarchive: {
          id: `settings.dataControls.archivedChats.unarchive`,
          defaultMessage: `Unarchive`,
          description: `Button label to unarchive a chat`,
        },
      })));
  });
function lt(e) {
  return `project:${e.projectKind}:${e.hostId ?? ``}:${e.projectId}`;
}
function ut({
  automationThreadIds: e = new Set(),
  cloudTasks: t,
  localThreads: n,
  projects: r = [],
  projectlessThreadIds: i = new Set(),
  threadProjectAssignments: a,
  threadWorkspaceRootHints: o,
}) {
  return [
    ...(t ?? []).map((e) => {
      let t = v(e.title ?? ``).trim(),
        n = e.task_status_display?.environment_label?.trim() ?? ``,
        o = Ze(n),
        s = mt({ assignment: a?.[e.id], projects: r }),
        c = s?.label ?? o;
      return {
        kind: `cloud`,
        createdAt: ht(e.created_at, e.updated_at),
        filterGroupId: i.has(e.id) ? bt : (s?.groupId ?? `special:none`),
        projectId: o == null ? null : n,
        projectLabel: c,
        searchValues: [t, c ?? ``, n],
        task: e,
        title: t,
        updatedAt: ht(e.updated_at, e.created_at),
      };
    }),
    ...(n ?? []).map((t) => {
      let n = v(t.name?.trim() || t.preview).trim(),
        s = Ze(t.cwd),
        c = Ze(t.path),
        l = mt({ assignment: a?.[t.id], fallbackPaths: [o?.[t.id], t.cwd], projects: r }),
        u = l?.label ?? s ?? c;
      return {
        kind: `local`,
        createdAt: ht(t.createdAt, t.updatedAt),
        filterGroupId: e.has(t.id) ? yt : i.has(t.id) ? bt : (l?.groupId ?? `special:none`),
        projectId: s == null ? (c == null ? null : t.path) : t.cwd,
        projectLabel: u,
        searchValues: [n, u ?? ``, s ?? ``, c ?? ``],
        thread: t,
        title: n,
        updatedAt: ht(t.updatedAt, t.createdAt),
      };
    }),
  ].sort((e, t) => t.updatedAt - e.updatedAt);
}
function dt(e) {
  let t = new ve(e, { ignoreLocation: !0, keys: [`searchValues`], threshold: 0.4 });
  return (n) => {
    let r = n.trim();
    return r.length === 0 ? e : t.search(r).map(({ item: e }) => e);
  };
}
function ft({
  entries: e,
  groupKey: t,
  kindFilter: n,
  projectFilter: r = { kind: `all` },
  searchQuery: i,
  sortKey: a,
}) {
  let o = dt(
    e.filter(
      (e) => (n === `all` || e.kind === n) && (r.kind === `all` || e.filterGroupId === r.groupId),
    ),
  )(i);
  if (t === `none`)
    return o.length === 0
      ? []
      : [{ id: `all`, projectLabel: null, entries: [...o].sort((e, t) => _t(e, t, a)) }];
  let s = new Map();
  for (let e of o) {
    let t = e.projectId ?? ``,
      n = s.get(t);
    if (n != null) {
      n.entries.push(e);
      continue;
    }
    s.set(t, { id: t, projectLabel: e.projectLabel, entries: [e] });
  }
  let c = [...s.values()];
  for (let e of c) e.entries.sort((e, t) => _t(e, t, a));
  return c.sort((e, t) => {
    if (a === `alphabetical`) {
      let n = (e.projectLabel ?? ``).localeCompare(t.projectLabel ?? ``);
      return n === 0 ? e.id.localeCompare(t.id) : n;
    }
    let n = vt(t, a) - vt(e, a);
    if (n !== 0) return n;
    let r = (e.projectLabel ?? ``).localeCompare(t.projectLabel ?? ``);
    return r === 0 ? e.id.localeCompare(t.id) : r;
  });
}
function pt(e, t) {
  return e.flatMap((e) => (e.kind === `local` && (e.projectId ?? ``) === t ? [e.thread] : []));
}
function mt({ assignment: e, fallbackPaths: t = [], projects: n }) {
  if (e != null) {
    let t = n.find((t) =>
      t.projectId !== e.projectId || t.projectKind !== e.projectKind
        ? !1
        : e.projectKind === `local`
          ? !0
          : t.hostId === e.hostId && t.path === e.path,
    );
    if (t != null) return t;
  }
  for (let e of t) {
    if (e == null || e.trim().length === 0) continue;
    let t = k(e).replace(/\/+$/, ``),
      r = n.filter(
        (e) => e.projectKind === `local` && e.path != null && k(e.path).replace(/\/+$/, ``) === t,
      );
    if (r.length === 1) return r[0] ?? null;
  }
  return null;
}
function ht(e, t) {
  return e != null && Number.isFinite(e) ? e : t != null && Number.isFinite(t) ? t : 0;
}
function gt(e, t) {
  switch (t) {
    case `alphabetical`:
      return 0;
    case `created`:
      return e.createdAt;
    case `updated`:
      return e.updatedAt;
  }
}
function _t(e, t, n) {
  if (n === `alphabetical`) {
    let n = e.title.localeCompare(t.title);
    return n === 0 ? t.updatedAt - e.updatedAt : n;
  }
  let r = gt(t, n) - gt(e, n);
  return r === 0 ? e.title.localeCompare(t.title) : r;
}
function vt(e, t) {
  let n = 0;
  for (let r of e.entries) n = Math.max(n, gt(r, t));
  return n;
}
var yt,
  bt,
  xt = e(() => {
    (oe(), q(), Xe(), pe(), (yt = `special:automations`), (bt = `special:none`));
  });
function St(e) {
  let t = (0, wt.c)(55),
    { archivedTask: n, showProjectName: i } = e,
    o = O(_),
    s = r(),
    c = me(),
    l = ye(),
    u,
    d;
  t[0] === n.id
    ? ((u = t[1]), (d = t[2]))
    : ((u = [`recover-cloud-task`, n.id]),
      (d = () =>
        xe.safePost(`/wham/tasks/{task_id}/recover`, { parameters: { path: { task_id: n.id } } })),
      (t[0] = n.id),
      (t[1] = u),
      (t[2] = d));
  let f;
  t[3] !== c || t[4] !== o
    ? ((f = () => {
        o.get(z).danger(c.formatMessage(Y.unarchiveError));
      }),
      (t[3] = c),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let m;
  t[6] !== n.id || t[7] !== l || t[8] !== s || t[9] !== o
    ? ((m = () => {
        (s.setQueryData([`tasks`, `archived`], (e) =>
          e == null
            ? e
            : {
                ...e,
                pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== n.id) })),
              },
        ),
          o.get(z).info(
            (0, X.jsxs)(`span`, {
              children: [
                (0, X.jsx)(p, { ...Y.unarchiveSuccessPlain }),
                (0, X.jsx)(`button`, {
                  className: `pointer-events-auto ml-1 cursor-interaction text-token-link underline-offset-2 hover:underline`,
                  type: `button`,
                  onClick: () => {
                    l(`/remote/${n.id}`);
                  },
                  children: (0, X.jsx)(p, { ...Y.viewNow }),
                }),
              ],
            }),
            { id: `recover-cloud-task-${n.id}` },
          ));
      }),
      (t[6] = n.id),
      (t[7] = l),
      (t[8] = s),
      (t[9] = o),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === s
    ? (h = t[12])
    : ((h = () => {
        s.invalidateQueries({ queryKey: [`tasks`] });
      }),
      (t[11] = s),
      (t[12] = h));
  let g;
  t[13] !== u || t[14] !== d || t[15] !== f || t[16] !== m || t[17] !== h
    ? ((g = { mutationKey: u, mutationFn: d, onError: f, onSuccess: m, onSettled: h }),
      (t[13] = u),
      (t[14] = d),
      (t[15] = f),
      (t[16] = m),
      (t[17] = h),
      (t[18] = g))
    : (g = t[18]);
  let y = a(g),
    b;
  t[19] === n.title ? (b = t[20]) : ((b = v(n.title ?? ``).trim()), (t[19] = n.title), (t[20] = b));
  let x = b,
    S,
    C,
    w,
    T;
  if (t[21] !== n || t[22] !== c || t[23] !== i) {
    let e = Ct(n),
      r;
    (t[28] !== n.task_status_display?.environment_label || t[29] !== i
      ? ((r = i ? n.task_status_display?.environment_label?.trim() : null),
        (t[28] = n.task_status_display?.environment_label),
        (t[29] = i),
        (t[30] = r))
      : (r = t[30]),
      (C = r),
      (w = e != null),
      (S = w ? c.formatDate(e, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (T = w ? c.formatTime(e, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[21] = n),
      (t[22] = c),
      (t[23] = i),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T));
  } else ((S = t[24]), (C = t[25]), (w = t[26]), (T = t[27]));
  let E = T,
    D;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(Ae, { className: `icon-sm shrink-0` })), (t[31] = D))
    : (D = t[31]);
  let k;
  t[32] === x
    ? (k = t[33])
    : ((k =
        x.length > 0
          ? x
          : (0, X.jsx)(p, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[32] = x),
      (t[33] = k));
  let A;
  t[34] === k
    ? (A = t[35])
    : ((A = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 text-base font-medium`,
        children: [D, (0, X.jsx)(`span`, { className: `truncate`, children: k })],
      })),
      (t[34] = k),
      (t[35] = A));
  let j;
  t[36] !== S || t[37] !== C || t[38] !== w || t[39] !== E
    ? ((j = w
        ? C
          ? (0, X.jsx)(p, {
              id: `settings.dataControls.archivedChats.dateTimeWithEnvironment`,
              defaultMessage: `{date}, {time} • {environment}`,
              description: `Date, time, and environment name for an archived cloud chat`,
              values: { date: S, time: E, environment: C },
            })
          : (0, X.jsx)(p, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: S, time: E },
            })
        : null),
      (t[36] = S),
      (t[37] = C),
      (t[38] = w),
      (t[39] = E),
      (t[40] = j))
    : (j = t[40]);
  let M;
  t[41] === j
    ? (M = t[42])
    : ((M = (0, X.jsx)(`div`, {
        className: `mt-1 flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, X.jsx)(`div`, {
          className: `truncate text-token-text-secondary`,
          children: j,
        }),
      })),
      (t[41] = j),
      (t[42] = M));
  let N;
  t[43] !== A || t[44] !== M
    ? ((N = (0, X.jsxs)(`div`, {
        className: `min-w-0 flex-1 text-left text-token-text-primary`,
        children: [A, M],
      })),
      (t[43] = A),
      (t[44] = M),
      (t[45] = N))
    : (N = t[45]);
  let P;
  t[46] === y
    ? (P = t[47])
    : ((P = () => {
        y.isPending || y.mutate();
      }),
      (t[46] = y),
      (t[47] = P));
  let F;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(p, { ...Y.unarchive })), (t[48] = F))
    : (F = t[48]);
  let I;
  t[49] !== P || t[50] !== y.isPending
    ? ((I = (0, X.jsx)(le, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: y.isPending,
        loading: y.isPending,
        onClick: P,
        children: F,
      })),
      (t[49] = P),
      (t[50] = y.isPending),
      (t[51] = I))
    : (I = t[51]);
  let L;
  return (
    t[52] !== N || t[53] !== I
      ? ((L = (0, X.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-3 border-b border-token-border bg-[var(--color-background-panel,var(--color-token-bg-fog))] px-4 py-3 last:border-b-0 hover:bg-token-list-hover-background`,
          children: [N, I],
        })),
        (t[52] = N),
        (t[53] = I),
        (t[54] = L))
      : (L = t[54]),
    L
  );
}
function Ct(e) {
  let t = e.updated_at ?? e.created_at;
  if (t == null) return null;
  let n = new Date(t * 1e3);
  return Number.isFinite(n.getTime()) ? n : null;
}
var wt,
  X,
  Tt = e(() => {
    ((wt = E()), Ce(), H(), h(), V(), K(), J(), Me(), q(), y(), c(), ct(), (X = W()));
  });
function Et() {
  let e = (0, Mt.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = [`tasks`, `archived`]), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = {
          queryKey: t,
          initialPageParam: null,
          queryFn: At,
          getNextPageParam: kt,
          select: Dt,
          staleTime: I.FIVE_SECONDS,
        }),
        (e[1] = n))
      : (n = e[1]),
    D(n)
  );
}
function Dt(e) {
  return e.pages.flatMap(Ot);
}
function Ot(e) {
  return e.items;
}
function kt(e) {
  return e.cursor ?? null;
}
function At(e) {
  let { pageParam: t } = e;
  return jt(t);
}
async function jt(e) {
  try {
    return await xe.safeGet(`/wham/tasks/list`, {
      parameters: { query: { limit: 20, cursor: e, task_filter: `archived` } },
    });
  } catch (e) {
    if (e instanceof N && (e.status === 401 || e.status === 403 || e.status === 404))
      return { items: [], cursor: null };
    throw e;
  }
}
var Mt,
  Nt = e(() => {
    ((Mt = E()), Ce(), f(), c(), j());
  });
function Pt() {
  let e = (0, Z.c)(32),
    { selectedHostId: t } = Ne(),
    n = l(he),
    r = l(ce),
    i = l(Ee),
    a = l(ge),
    s;
  e[0] === t
    ? (s = e[1])
    : ((s = {
        queryKey: [`archived-threads`, t],
        queryFn: () => L(`list-archived-threads`, { hostId: t }),
        enabled: !0,
        staleTime: I.FIVE_SECONDS,
      }),
      (e[0] = t),
      (e[1] = s));
  let { data: c, isLoading: u, isError: f } = o(s),
    {
      data: p,
      fetchNextPage: m,
      hasNextPage: h,
      isLoading: g,
      isFetchNextPageError: _,
      isFetchingNextPage: v,
      isError: y,
    } = Et(),
    x;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = d(`inbox-items`, { limit: $t })), (e[2] = x))
    : (x = e[2]);
  let S = t === b,
    C;
  e[3] === S
    ? (C = e[4])
    : ((C = { queryKey: x, queryFn: Lt, enabled: S, staleTime: I.FIVE_SECONDS }),
      (e[3] = S),
      (e[4] = C));
  let { data: w, isLoading: T } = o(C),
    E,
    D;
  if (
    e[5] !== w ||
    e[6] !== p ||
    e[7] !== c ||
    e[8] !== r ||
    e[9] !== t ||
    e[10] !== i ||
    e[11] !== a ||
    e[12] !== n
  ) {
    let o = t === `local` ? c : [],
      s;
    if (e[15] !== t || e[16] !== n) {
      let r = new Map();
      for (let e of Pe(n, t)) {
        let t = {
          groupId: lt(e),
          hostId: e.hostId,
          label: e.label,
          path: e.path,
          projectId: e.projectId,
          projectKind: e.projectKind,
        };
        r.set(t.groupId, t);
      }
      ((s = [...r.values()]), (e[15] = t), (e[16] = n), (e[17] = s));
    } else s = e[17];
    E = s;
    let l;
    (e[18] === w?.items
      ? (l = e[19])
      : ((l = new Set(w?.items.flatMap(It) ?? [])), (e[18] = w?.items), (e[19] = l)),
      (D = ut({
        automationThreadIds: l,
        cloudTasks: p,
        localThreads: o,
        projects: E,
        projectlessThreadIds: new Set(r ?? []),
        threadProjectAssignments: i,
        threadWorkspaceRootHints: a,
      })),
      (e[5] = w),
      (e[6] = p),
      (e[7] = c),
      (e[8] = r),
      (e[9] = t),
      (e[10] = i),
      (e[11] = a),
      (e[12] = n),
      (e[13] = E),
      (e[14] = D));
  } else ((E = e[13]), (D = e[14]));
  let O = D,
    k;
  e[20] === E ? (k = e[21]) : ((k = E.map(Ft)), (e[20] = E), (e[21] = k));
  let A = `${t}:${k.join(`,`)}`,
    j = h && !_,
    M = u || g || (t === `local` && T),
    N = f || (p == null && y),
    P;
  return (
    e[22] !== E ||
    e[23] !== O ||
    e[24] !== m ||
    e[25] !== v ||
    e[26] !== t ||
    e[27] !== A ||
    e[28] !== j ||
    e[29] !== M ||
    e[30] !== N
      ? ((P = (0, Q.jsx)(
          Rt,
          {
            archivedChats: O,
            projects: E,
            hostId: t,
            hasNextPage: j,
            isLoading: M,
            isFetchingNextPage: v,
            isError: N,
            onLoadNextPage: m,
          },
          A,
        )),
        (e[22] = E),
        (e[23] = O),
        (e[24] = m),
        (e[25] = v),
        (e[26] = t),
        (e[27] = A),
        (e[28] = j),
        (e[29] = M),
        (e[30] = N),
        (e[31] = P))
      : (P = e[31]),
    P
  );
}
function Ft(e) {
  let { groupId: t } = e;
  return t;
}
function It(e) {
  return e.automationId != null && e.threadId != null ? [e.threadId] : [];
}
function Lt() {
  return x(`inbox-items`, { params: { limit: $t } });
}
function Rt(e) {
  let t = (0, Z.c)(121),
    {
      archivedChats: n,
      projects: i,
      hostId: o,
      hasNextPage: s,
      isLoading: c,
      isFetchingNextPage: l,
      isError: u,
      onLoadNextPage: d,
    } = e,
    f = O(_),
    m = r(),
    h = me(),
    g = ye(),
    v = Le(),
    [y, b] = (0, Zt.useState)(null),
    [x, S] = (0, Zt.useState)(``),
    [C, w] = (0, Zt.useState)(`all`),
    [T, E] = (0, Zt.useState)(Qt),
    [D, k] = (0, Zt.useState)(`updated`),
    A = new Set([...i.map(Ht), bt, yt]),
    j = T.kind === `all` || A.has(T.groupId) ? T : Qt,
    M = j.kind === `all` ? `project` : `none`,
    N;
  t[0] !== j || t[1] !== n || t[2] !== C || t[3] !== x || t[4] !== D || t[5] !== M
    ? ((N = ft({
        entries: n,
        groupKey: M,
        kindFilter: C,
        projectFilter: j,
        searchQuery: x,
        sortKey: D,
      })),
      (t[0] = j),
      (t[1] = n),
      (t[2] = C),
      (t[3] = x),
      (t[4] = D),
      (t[5] = M),
      (t[6] = N))
    : (N = t[6]);
  let P = N,
    F = C !== `local` && s,
    I;
  t[7] !== n || t[8] !== o
    ? ((I = o === `local` && n.some(Vt)), (t[7] = n), (t[8] = o), (t[9] = I))
    : (I = t[9]);
  let R = I,
    B;
  t[10] !== o || t[11] !== g || t[12] !== v || t[13] !== f
    ? ((B = (e) => {
        (ee(e.id), o === `local` && v(e.id));
      }),
      (t[10] = o),
      (t[11] = g),
      (t[12] = v),
      (t[13] = f),
      (t[14] = B))
    : (B = t[14]);
  let ne = B,
    re,
    V;
  t[15] === o
    ? ((re = t[16]), (V = t[17]))
    : ((re = [`unarchive-thread`, o]),
      (V = async (e) => (
        await L(`unarchive-conversation`, { hostId: o, conversationId: ee(e.id) }),
        e
      )),
      (t[15] = o),
      (t[16] = re),
      (t[17] = V));
  let H;
  t[18] !== o || t[19] !== m || t[20] !== f
    ? ((H = async (e) => {
        (f
          .get(z)
          .info(
            (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.unarchiving`,
              defaultMessage: `Unarchiving chat…`,
              description: `Toast shown while unarchiving a chat`,
            }),
            { id: `unarchive-thread-${e.id}`, duration: 0, hasCloseButton: !1 },
          ),
          await m.cancelQueries({ queryKey: [`archived-threads`, o] }));
        let t = m.getQueryData([`archived-threads`, o]) ?? [];
        return (
          m.setQueryData(
            [`archived-threads`, o],
            t.filter((t) => t.id !== e.id),
          ),
          { previousThreads: t }
        );
      }),
      (t[18] = o),
      (t[19] = m),
      (t[20] = f),
      (t[21] = H))
    : (H = t[21]);
  let ae;
  t[22] !== o || t[23] !== h || t[24] !== m || t[25] !== f
    ? ((ae = (e, t, n) => {
        let r = e instanceof ie;
        (!r && n?.previousThreads && m.setQueryData([`archived-threads`, o], n.previousThreads),
          f
            .get(z)
            .danger(h.formatMessage(r ? Y.openError : Y.unarchiveError), {
              id: `unarchive-thread-${t.id}`,
            }));
      }),
      (t[22] = o),
      (t[23] = h),
      (t[24] = m),
      (t[25] = f),
      (t[26] = ae))
    : (ae = t[26]);
  let oe;
  t[27] !== ne || t[28] !== f
    ? ((oe = (e) => {
        f.get(z).info(
          (0, Q.jsxs)(`span`, {
            children: [
              (0, Q.jsx)(p, { ...Y.unarchiveSuccessPlain }),
              (0, Q.jsx)(`button`, {
                className: `pointer-events-auto ml-1 cursor-interaction text-token-link underline-offset-2 hover:underline`,
                type: `button`,
                onClick: () => {
                  ne(e);
                },
                children: (0, Q.jsx)(p, { ...Y.viewNow }),
              }),
            ],
          }),
          { id: `unarchive-thread-${e.id}` },
        );
      }),
      (t[27] = ne),
      (t[28] = f),
      (t[29] = oe))
    : (oe = t[29]);
  let se;
  t[30] !== o || t[31] !== m
    ? ((se = () => {
        m.invalidateQueries({ queryKey: [`archived-threads`, o] });
      }),
      (t[30] = o),
      (t[31] = m),
      (t[32] = se))
    : (se = t[32]);
  let ce;
  t[33] !== se || t[34] !== re || t[35] !== V || t[36] !== H || t[37] !== ae || t[38] !== oe
    ? ((ce = {
        mutationKey: re,
        mutationFn: V,
        onMutate: H,
        onError: ae,
        onSuccess: oe,
        onSettled: se,
      }),
      (t[33] = se),
      (t[34] = re),
      (t[35] = V),
      (t[36] = H),
      (t[37] = ae),
      (t[38] = oe),
      (t[39] = ce))
    : (ce = t[39]);
  let U = a(ce),
    ue,
    de;
  t[40] === o
    ? ((ue = t[41]), (de = t[42]))
    : ((ue = [`delete-archived-conversations`, o]),
      (de = async (e) =>
        e.kind === `all`
          ? L(`delete-all-archived-conversations`, { hostId: o })
          : e.kind === `project`
            ? (
                await Promise.all(
                  e.threadIds.map((e) =>
                    L(`delete-archived-conversation`, { hostId: o, conversationId: ee(e) }),
                  ),
                )
              ).flat()
            : L(`delete-archived-conversation`, { hostId: o, conversationId: ee(e.thread.id) })),
      (t[40] = o),
      (t[41] = ue),
      (t[42] = de));
  let W;
  t[43] !== o || t[44] !== m || t[45] !== f
    ? ((W = async (e) => {
        let t = e.kind === `single` ? [e.thread.id] : e.threadIds;
        (f
          .get(z)
          .info(
            e.kind === `single`
              ? (0, Q.jsx)(p, { ...Y.deleting })
              : (0, Q.jsx)(p, { ...Y.deletingAll }),
            { id: Xt(e), duration: 0, hasCloseButton: !1 },
          ),
          await m.cancelQueries({ queryKey: [`archived-threads`, o] }));
        let n = m.getQueryData([`archived-threads`, o]) ?? [];
        return (
          m.setQueryData(
            [`archived-threads`, o],
            n.filter((e) => !t.includes(e.id)),
          ),
          { deletingThreadIds: t, previousThreads: n }
        );
      }),
      (t[43] = o),
      (t[44] = m),
      (t[45] = f),
      (t[46] = W))
    : (W = t[46]);
  let G;
  t[47] !== o || t[48] !== h || t[49] !== m || t[50] !== f
    ? ((G = (e, t, n) => {
        (n?.previousThreads && m.setQueryData([`archived-threads`, o], n.previousThreads),
          f
            .get(z)
            .danger(
              h.formatMessage(
                te(e, `thread/delete`)
                  ? Y.deleteUnsupported
                  : t.kind === `single`
                    ? Y.deleteError
                    : Y.deleteAllError,
              ),
              { id: Xt(t) },
            ));
      }),
      (t[47] = o),
      (t[48] = h),
      (t[49] = m),
      (t[50] = f),
      (t[51] = G))
    : (G = t[51]);
  let K;
  t[52] !== h || t[53] !== f
    ? ((K = (e, t) => {
        if (t.kind !== `single`) {
          f.get(z).success(
            h.formatMessage(
              {
                id: `settings.dataControls.archivedChats.deleteAllSuccess`,
                defaultMessage: `Deleted {count, plural, one {# archived chat} other {# archived chats}}`,
                description: `Success toast after deleting archived chats`,
              },
              { count: e.length || t.threadIds.length },
            ),
            { id: Xt(t) },
          );
          return;
        }
        f.get(z).success(h.formatMessage(Y.deleteSuccessPlain), { id: Xt(t) });
      }),
      (t[52] = h),
      (t[53] = f),
      (t[54] = K))
    : (K = t[54]);
  let fe;
  t[55] !== o || t[56] !== m
    ? ((fe = () => {
        m.invalidateQueries({ queryKey: [`archived-threads`, o] });
      }),
      (t[55] = o),
      (t[56] = m),
      (t[57] = fe))
    : (fe = t[57]);
  let pe;
  t[58] !== ue || t[59] !== de || t[60] !== W || t[61] !== G || t[62] !== K || t[63] !== fe
    ? ((pe = {
        mutationKey: ue,
        mutationFn: de,
        onMutate: W,
        onError: G,
        onSuccess: K,
        onSettled: fe,
      }),
      (t[58] = ue),
      (t[59] = de),
      (t[60] = W),
      (t[61] = G),
      (t[62] = K),
      (t[63] = fe),
      (t[64] = pe))
    : (pe = t[64]);
  let q = a(pe),
    J = U.isPending || q.isPending,
    he;
  if (c) {
    let e;
    (t[65] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(tt, {
          children: (0, Q.jsx)(Ie, {
            label: (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.loading`,
              defaultMessage: `Loading archived chats…`,
              description: `Loading state label for archived chats list`,
            }),
            control: null,
          }),
        })),
        (t[65] = e))
      : (e = t[65]),
      (he = e));
  } else if (u) {
    let e;
    (t[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(tt, {
          children: (0, Q.jsx)(Ie, {
            label: (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.error`,
              defaultMessage: `Could not load archived chats.`,
              description: `Error state label for archived chats list`,
            }),
            control: null,
          }),
        })),
        (t[66] = e))
      : (e = t[66]),
      (he = e));
  } else if (n.length === 0) {
    let e;
    (t[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(tt, {
          children: (0, Q.jsx)(Ie, {
            label: (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.empty`,
              defaultMessage: `No archived chats.`,
              description: `Empty state label for archived chats list`,
            }),
            control: null,
          }),
        })),
        (t[67] = e))
      : (e = t[67]),
      (he = e));
  } else {
    let e;
    t[68] !== j || t[69] !== C || t[70] !== i || t[71] !== D
      ? ((e = (0, Q.jsx)(`div`, {
          className: `rounded-t-[7px] bg-token-main-surface-primary p-3`,
          children: (0, Q.jsx)(Ut, {
            kindFilter: C,
            projectFilter: j,
            projects: i,
            sortKey: D,
            onKindFilterChange: w,
            onProjectFilterChange: E,
            onSearchQueryChange: S,
            onSortKeyChange: k,
          }),
        })),
        (t[68] = j),
        (t[69] = C),
        (t[70] = i),
        (t[71] = D),
        (t[72] = e))
      : (e = t[72]);
    let n;
    t[73] !== F || t[74] !== l || t[75] !== P.length
      ? ((n =
          P.length === 0 && !F && !l
            ? (0, Q.jsx)(`div`, {
                className: `px-4 py-3 text-base text-token-text-secondary`,
                children: (0, Q.jsx)(`span`, {
                  children: (0, Q.jsx)(p, {
                    id: `settings.dataControls.archivedChats.noMatches`,
                    defaultMessage: `No matching archived chats`,
                    description: `Empty state shown when archived chat search has no matches`,
                  }),
                }),
              })
            : null),
        (t[73] = F),
        (t[74] = l),
        (t[75] = P.length),
        (t[76] = n))
      : (n = t[76]);
    let r;
    if (t[77] !== j.kind || t[78] !== J || t[79] !== o || t[80] !== U || t[81] !== P) {
      let e;
      (t[83] !== j.kind || t[84] !== J || t[85] !== o || t[86] !== U
        ? ((e = (e) =>
            (0, Q.jsx)(
              Kt,
              {
                group: e,
                hostId: o,
                isDeleteDisabled: J,
                projectArchivedThreads: pt(e.entries, e.id),
                unarchivingThreadId: U.variables?.id ?? null,
                isUnarchiving: U.isPending,
                showHeader: j.kind === `all`,
                onDelete: (e) => {
                  b({ kind: `single`, thread: e });
                },
                onUnarchive: (e) => {
                  U.mutate(e);
                },
                onDeleteProject: (e, t) => {
                  b({ kind: `project`, projectLabel: e, threads: t });
                },
              },
              e.id,
            )),
          (t[83] = j.kind),
          (t[84] = J),
          (t[85] = o),
          (t[86] = U),
          (t[87] = e))
        : (e = t[87]),
        (r = P.map(e)),
        (t[77] = j.kind),
        (t[78] = J),
        (t[79] = o),
        (t[80] = U),
        (t[81] = P),
        (t[82] = r));
    } else r = t[82];
    let a;
    t[88] === d
      ? (a = t[89])
      : ((a = () => {
          d();
        }),
        (t[88] = d),
        (t[89] = a));
    let s;
    t[90] !== F || t[91] !== l || t[92] !== a
      ? ((s = (0, Q.jsx)(rt, { hasNextPage: F, isFetchingNextPage: l, onLoadNextPage: a })),
        (t[90] = F),
        (t[91] = l),
        (t[92] = a),
        (t[93] = s))
      : (s = t[93]);
    let c;
    t[94] !== n || t[95] !== r || t[96] !== s
      ? ((c = (0, Q.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto`,
          children: (0, Q.jsxs)(`div`, { className: `flex flex-col`, children: [n, r, s] }),
        })),
        (t[94] = n),
        (t[95] = r),
        (t[96] = s),
        (t[97] = c))
      : (c = t[97]);
    let u;
    (t[98] !== e || t[99] !== c
      ? ((u = (0, Q.jsxs)(tt, { className: `max-h-[min(80vh)]`, children: [e, c] })),
        (t[98] = e),
        (t[99] = c),
        (t[100] = u))
      : (u = t[100]),
      (he = u));
  }
  let ge;
  t[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Q.jsx)(qe, { slug: `data-controls` })), (t[101] = ge))
    : (ge = t[101]);
  let _e;
  t[102] !== J || t[103] !== R || t[104] !== u || t[105] !== c
    ? ((_e =
        R && !c && !u
          ? (0, Q.jsxs)(le, {
              color: `danger`,
              size: `toolbar`,
              disabled: J,
              onClick: () => {
                b({ kind: `all` });
              },
              children: [
                (0, Q.jsx)(Oe, { className: `icon-xs shrink-0` }),
                (0, Q.jsx)(p, { ...Y.deleteAll }),
              ],
            })
          : null),
      (t[102] = J),
      (t[103] = R),
      (t[104] = u),
      (t[105] = c),
      (t[106] = _e))
    : (_e = t[106]);
  let ve;
  t[107] === he
    ? (ve = t[108])
    : ((ve = (0, Q.jsx)(Ge, {
        className: `gap-2`,
        children: (0, Q.jsx)(Ge.Content, { children: he }),
      })),
      (t[107] = he),
      (t[108] = ve));
  let be;
  t[109] !== n || t[110] !== q || t[111] !== y
    ? ((be = () => {
        if (y != null) {
          if ((b(null), y.kind === `all`)) {
            q.mutate({ kind: `all`, threadIds: n.flatMap(Bt) });
            return;
          }
          if (y.kind === `project`) {
            q.mutate({
              kind: `project`,
              projectLabel: y.projectLabel,
              threadIds: y.threads.map(zt),
            });
            return;
          }
          q.mutate({ kind: `single`, thread: y.thread });
        }
      }),
      (t[109] = n),
      (t[110] = q),
      (t[111] = y),
      (t[112] = be))
    : (be = t[112]);
  let xe;
  t[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (e) => {
        e || b(null);
      }),
      (t[113] = xe))
    : (xe = t[113]);
  let Se;
  t[114] !== y || t[115] !== be
    ? ((Se = (0, Q.jsx)(Jt, { state: y, onConfirm: be, onOpenChange: xe })),
      (t[114] = y),
      (t[115] = be),
      (t[116] = Se))
    : (Se = t[116]);
  let Ce;
  return (
    t[117] !== _e || t[118] !== ve || t[119] !== Se
      ? ((Ce = (0, Q.jsxs)($e, {
          title: ge,
          titleStackClassName: `gap-1.5`,
          action: _e,
          children: [ve, Se],
        })),
        (t[117] = _e),
        (t[118] = ve),
        (t[119] = Se),
        (t[120] = Ce))
      : (Ce = t[120]),
    Ce
  );
}
function zt(e) {
  return e.id;
}
function Bt(e) {
  return e.kind === `local` ? [e.thread.id] : [];
}
function Vt(e) {
  return e.kind === `local`;
}
function Ht(e) {
  return e.groupId;
}
function Ut(e) {
  let t = (0, Z.c)(27),
    {
      kindFilter: n,
      projectFilter: r,
      projects: i,
      sortKey: a,
      onKindFilterChange: o,
      onProjectFilterChange: s,
      onSearchQueryChange: c,
      onSortKeyChange: l,
    } = e,
    u = me(),
    [d, f] = (0, Zt.useState)(``),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(w, {
        className: `icon-xs shrink-0 text-token-input-placeholder-foreground`,
      })),
      (t[0] = p))
    : (p = t[0]);
  let m;
  t[1] === u ? (m = t[2]) : ((m = u.formatMessage($.searchArchivedChats)), (t[1] = u), (t[2] = m));
  let h;
  t[3] === u ? (h = t[4]) : ((h = u.formatMessage($.searchArchivedChats)), (t[3] = u), (t[4] = h));
  let g;
  t[5] === c
    ? (g = t[6])
    : ((g = (e) => {
        let t = e.currentTarget.value;
        (f(t),
          (0, Zt.startTransition)(() => {
            c(t);
          }));
      }),
      (t[5] = c),
      (t[6] = g));
  let _;
  t[7] !== d || t[8] !== m || t[9] !== h || t[10] !== g
    ? ((_ = (0, Q.jsxs)(`div`, {
        className: `flex h-[28px] min-h-[28px] min-w-0 flex-1 items-center gap-2 rounded-lg border border-transparent bg-token-foreground/5 px-2 text-base leading-[18px] text-token-foreground`,
        children: [
          p,
          (0, Q.jsx)(`input`, {
            className: `min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground`,
            "aria-label": m,
            placeholder: h,
            value: d,
            onChange: g,
          }),
        ],
      })),
      (t[7] = d),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== n || t[13] !== o || t[14] !== l || t[15] !== a
    ? ((v = (0, Q.jsx)(Wt, {
        kindFilter: n,
        sortKey: a,
        onKindFilterChange: o,
        onSortKeyChange: l,
      })),
      (t[12] = n),
      (t[13] = o),
      (t[14] = l),
      (t[15] = a),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== s || t[18] !== r || t[19] !== i
    ? ((y = (0, Q.jsx)(Gt, { projectFilter: r, projects: i, onProjectFilterChange: s })),
      (t[17] = s),
      (t[18] = r),
      (t[19] = i),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== v || t[22] !== y
    ? ((b = (0, Q.jsxs)(st, { className: `shrink-0`, children: [v, y] })),
      (t[21] = v),
      (t[22] = y),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== _ || t[25] !== b
      ? ((x = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 md:flex-row md:items-center`,
          children: [_, b],
        })),
        (t[24] = _),
        (t[25] = b),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
function Wt(e) {
  let t = (0, Z.c)(57),
    { kindFilter: n, sortKey: r, onKindFilterChange: i, onSortKeyChange: a } = e,
    o = me(),
    s;
  t[0] === o ? (s = t[1]) : ((s = o.formatMessage($.filterArchivedChats)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(at, { className: `icon-xs shrink-0` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === n ? (l = t[4]) : ((l = Yt(n)), (t[3] = n), (t[4] = l));
  let u;
  t[5] === l
    ? (u = t[6])
    : ((u = (0, Q.jsx)(`span`, { className: `truncate`, children: (0, Q.jsx)(p, { ...l }) })),
      (t[5] = l),
      (t[6] = u));
  let d;
  t[7] !== s || t[8] !== u
    ? ((d = (0, Q.jsxs)(Je, { className: `w-[150px] md:w-36`, "aria-label": s, children: [c, u] })),
      (t[7] = s),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(m.SectionLabel, { children: (0, Q.jsx)(p, { ...$.type }) })), (t[10] = f))
    : (f = t[10]);
  let h = n === `all` ? G : void 0,
    g;
  t[11] === i
    ? (g = t[12])
    : ((g = () => {
        i(`all`);
      }),
      (t[11] = i),
      (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(p, { ...$.allChats })), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== h || t[15] !== g
    ? ((v = (0, Q.jsx)(m.Item, { RightIcon: h, onSelect: g, children: _ })),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v))
    : (v = t[16]);
  let y = n === `local` ? G : void 0,
    b;
  t[17] === i
    ? (b = t[18])
    : ((b = () => {
        i(`local`);
      }),
      (t[17] = i),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(p, { ...$.local })), (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b
    ? ((S = (0, Q.jsx)(m.Item, { RightIcon: y, onSelect: b, children: x })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C = n === `cloud` ? G : void 0,
    w;
  t[23] === i
    ? (w = t[24])
    : ((w = () => {
        i(`cloud`);
      }),
      (t[23] = i),
      (t[24] = w));
  let T;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(p, { ...$.cloud })), (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] !== C || t[27] !== w
    ? ((E = (0, Q.jsx)(m.Item, { RightIcon: C, onSelect: w, children: T })),
      (t[26] = C),
      (t[27] = w),
      (t[28] = E))
    : (E = t[28]);
  let D;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(m.Separator, {})), (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(m.SectionLabel, { children: (0, Q.jsx)(p, { ...$.sortBy }) })), (t[30] = O))
    : (O = t[30]);
  let k = r === `updated` ? G : void 0,
    A;
  t[31] === a
    ? (A = t[32])
    : ((A = () => {
        a(`updated`);
      }),
      (t[31] = a),
      (t[32] = A));
  let j;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(p, { ...$.updated })), (t[33] = j))
    : (j = t[33]);
  let N;
  t[34] !== k || t[35] !== A
    ? ((N = (0, Q.jsx)(m.Item, { RightIcon: k, onSelect: A, children: j })),
      (t[34] = k),
      (t[35] = A),
      (t[36] = N))
    : (N = t[36]);
  let P = r === `created` ? G : void 0,
    F;
  t[37] === a
    ? (F = t[38])
    : ((F = () => {
        a(`created`);
      }),
      (t[37] = a),
      (t[38] = F));
  let I;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(p, { ...$.created })), (t[39] = I))
    : (I = t[39]);
  let L;
  t[40] !== P || t[41] !== F
    ? ((L = (0, Q.jsx)(m.Item, { RightIcon: P, onSelect: F, children: I })),
      (t[40] = P),
      (t[41] = F),
      (t[42] = L))
    : (L = t[42]);
  let ee = r === `alphabetical` ? G : void 0,
    te;
  t[43] === a
    ? (te = t[44])
    : ((te = () => {
        a(`alphabetical`);
      }),
      (t[43] = a),
      (t[44] = te));
  let R;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(p, { ...$.alphabetical })), (t[45] = R))
    : (R = t[45]);
  let z;
  t[46] !== ee || t[47] !== te
    ? ((z = (0, Q.jsx)(m.Item, { RightIcon: ee, onSelect: te, children: R })),
      (t[46] = ee),
      (t[47] = te),
      (t[48] = z))
    : (z = t[48]);
  let B;
  return (
    t[49] !== v ||
    t[50] !== S ||
    t[51] !== E ||
    t[52] !== N ||
    t[53] !== L ||
    t[54] !== z ||
    t[55] !== d
      ? ((B = (0, Q.jsxs)(M, {
          side: `bottom`,
          align: `end`,
          contentWidth: `menuNarrow`,
          triggerButton: d,
          children: [f, v, S, E, D, O, N, L, z],
        })),
        (t[49] = v),
        (t[50] = S),
        (t[51] = E),
        (t[52] = N),
        (t[53] = L),
        (t[54] = z),
        (t[55] = d),
        (t[56] = B))
      : (B = t[56]),
    B
  );
}
function Gt(e) {
  let t = (0, Z.c)(63),
    { projectFilter: n, projects: r, onProjectFilterChange: i } = e,
    a = me(),
    o;
  t[0] !== n.groupId || t[1] !== n.kind || t[2] !== r
    ? ((o = n.kind === `group` ? r.find((e) => e.groupId === n.groupId) : null),
      (t[0] = n.groupId),
      (t[1] = n.kind),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c,
    l,
    u,
    d,
    f,
    h,
    g,
    _,
    v;
  if (
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== n.groupId ||
    t[7] !== n.kind ||
    t[8] !== r ||
    t[9] !== s
  ) {
    let e = new Map();
    for (let t of r) {
      let n = e.get(t.label) ?? [];
      (n.push(t.path ?? t.projectId), e.set(t.label, n));
    }
    ((c = M), (l = `bottom`), (u = `end`), (d = `workspace`), (f = `tall`));
    let o;
    t[19] === a
      ? (o = t[20])
      : ((o = a.formatMessage($.filterArchivedChatsByProject)), (t[19] = a), (t[20] = o));
    let y;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, Q.jsx)(F, { className: `icon-xs shrink-0` })), (t[21] = y))
      : (y = t[21]);
    let b;
    t[22] !== n.groupId || t[23] !== n.kind || t[24] !== s
      ? ((b =
          n.kind === `all`
            ? (0, Q.jsx)(p, { ...$.allProjects })
            : n.groupId === `special:automations`
              ? (0, Q.jsx)(p, { ...$.automations })
              : n.groupId === `special:none`
                ? (0, Q.jsx)(p, { ...$.chats })
                : s == null
                  ? (0, Q.jsx)(p, { ...$.allProjects })
                  : s.label),
        (t[22] = n.groupId),
        (t[23] = n.kind),
        (t[24] = s),
        (t[25] = b))
      : (b = t[25]);
    let x;
    (t[26] === b
      ? (x = t[27])
      : ((x = (0, Q.jsx)(`span`, { className: `truncate`, children: b })),
        (t[26] = b),
        (t[27] = x)),
      t[28] !== o || t[29] !== x
        ? ((h = (0, Q.jsxs)(Je, {
            className: `w-[180px] md:w-44`,
            "aria-label": o,
            children: [y, x],
          })),
          (t[28] = o),
          (t[29] = x),
          (t[30] = h))
        : (h = t[30]));
    let S = n.kind === `all` ? G : void 0,
      C;
    t[31] === i
      ? (C = t[32])
      : ((C = () => {
          i({ kind: `all` });
        }),
        (t[31] = i),
        (t[32] = C));
    let w;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (0, Q.jsx)(p, { ...$.allProjects })), (t[33] = w))
      : (w = t[33]),
      t[34] !== S || t[35] !== C
        ? ((g = (0, Q.jsx)(m.Item, { RightIcon: S, onSelect: C, children: w })),
          (t[34] = S),
          (t[35] = C),
          (t[36] = g))
        : (g = t[36]),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, Q.jsx)(m.Separator, {})), (t[37] = _))
        : (_ = t[37]),
      (v = r.map((t) => {
        let r = e.get(t.label) ?? [],
          a = r.length > 1 ? ae(t.path ?? t.projectId, r) : void 0,
          o = n.kind === `group` && n.groupId === t.groupId;
        return (0, Q.jsx)(
          m.Item,
          {
            LeftIcon: F,
            RightIcon: o ? G : void 0,
            tooltipText: a,
            tooltipAlign: `center`,
            onSelect: () => {
              i({ kind: `group`, groupId: t.groupId });
            },
            children: t.label,
          },
          t.groupId,
        );
      })),
      (t[4] = a),
      (t[5] = i),
      (t[6] = n.groupId),
      (t[7] = n.kind),
      (t[8] = r),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v));
  } else
    ((c = t[10]),
      (l = t[11]),
      (u = t[12]),
      (d = t[13]),
      (f = t[14]),
      (h = t[15]),
      (g = t[16]),
      (_ = t[17]),
      (v = t[18]));
  let y;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(m.Separator, {})), (t[38] = y))
    : (y = t[38]);
  let b = n.kind === `group` && n.groupId === `special:none` ? G : void 0,
    x;
  t[39] === i
    ? (x = t[40])
    : ((x = () => {
        i({ kind: `group`, groupId: bt });
      }),
      (t[39] = i),
      (t[40] = x));
  let S;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(p, { ...$.chats })), (t[41] = S))
    : (S = t[41]);
  let C;
  t[42] !== b || t[43] !== x
    ? ((C = (0, Q.jsx)(m.Item, { LeftIcon: Be, RightIcon: b, onSelect: x, children: S })),
      (t[42] = b),
      (t[43] = x),
      (t[44] = C))
    : (C = t[44]);
  let w = n.kind === `group` && n.groupId === `special:automations` ? G : void 0,
    T;
  t[45] === i
    ? (T = t[46])
    : ((T = () => {
        i({ kind: `group`, groupId: yt });
      }),
      (t[45] = i),
      (t[46] = T));
  let E;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(p, { ...$.automations })), (t[47] = E))
    : (E = t[47]);
  let D;
  t[48] !== w || t[49] !== T
    ? ((D = (0, Q.jsx)(m.Item, { LeftIcon: Ue, RightIcon: w, onSelect: T, children: E })),
      (t[48] = w),
      (t[49] = T),
      (t[50] = D))
    : (D = t[50]);
  let O;
  return (
    t[51] !== c ||
    t[52] !== C ||
    t[53] !== D ||
    t[54] !== l ||
    t[55] !== u ||
    t[56] !== d ||
    t[57] !== f ||
    t[58] !== h ||
    t[59] !== g ||
    t[60] !== _ ||
    t[61] !== v
      ? ((O = (0, Q.jsxs)(c, {
          side: l,
          align: u,
          contentWidth: d,
          contentMaxHeight: f,
          triggerButton: h,
          children: [g, _, v, y, C, D],
        })),
        (t[51] = c),
        (t[52] = C),
        (t[53] = D),
        (t[54] = l),
        (t[55] = u),
        (t[56] = d),
        (t[57] = f),
        (t[58] = h),
        (t[59] = g),
        (t[60] = _),
        (t[61] = v),
        (t[62] = O))
      : (O = t[62]),
    O
  );
}
function Kt(e) {
  let t = (0, Z.c)(29),
    {
      group: n,
      hostId: r,
      isDeleteDisabled: i,
      projectArchivedThreads: a,
      unarchivingThreadId: o,
      isUnarchiving: s,
      showHeader: c,
      onDelete: l,
      onDeleteProject: u,
      onUnarchive: d,
    } = e,
    f = me(),
    h = r === `local` && a.length > 0,
    g;
  t[0] !== h ||
  t[1] !== n.entries.length ||
  t[2] !== n.projectLabel ||
  t[3] !== f ||
  t[4] !== i ||
  t[5] !== u ||
  t[6] !== a ||
  t[7] !== c
    ? ((g = c
        ? (0, Q.jsxs)(`div`, {
            className: `sticky top-0 z-10 flex items-center justify-between gap-3 bg-token-main-surface-primary px-4 py-1.5`,
            children: [
              (0, Q.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2 text-base text-token-description-foreground`,
                children: [
                  (0, Q.jsx)(F, { className: `icon-xs shrink-0` }),
                  (0, Q.jsx)(`span`, {
                    className: `truncate`,
                    children:
                      n.projectLabel == null
                        ? (0, Q.jsx)(p, {
                            id: `settings.dataControls.archivedChats.noProject`,
                            defaultMessage: `No project`,
                            description: `Fallback project header for archived chats without a project`,
                          })
                        : n.projectLabel,
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `ml-auto flex shrink-0 items-center gap-1`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `text-base text-token-description-foreground`,
                    children: (0, Q.jsx)(p, {
                      id: `settings.dataControls.archivedChats.groupCount`,
                      defaultMessage: `{count, plural, one {# chat} other {# chats}}`,
                      description: `Archived chat count shown in a project group header`,
                      values: { count: n.entries.length },
                    }),
                  }),
                  h
                    ? (0, Q.jsx)(M, {
                        align: `end`,
                        contentWidth: `menu`,
                        triggerButton: (0, Q.jsx)(Re, {
                          className: `text-token-description-foreground hover:bg-token-list-hover-background hover:text-token-foreground`,
                          label: f.formatMessage({
                            id: `settings.dataControls.archivedChats.projectActions`,
                            defaultMessage: `Project actions`,
                            description: `Accessible label for the project archived chats actions menu`,
                          }),
                          size: `toolbar`,
                        }),
                        children: (0, Q.jsx)(m.Item, {
                          LeftIcon: Oe,
                          className: `!text-token-error-foreground`,
                          leftIconClassName: `icon-xs text-token-error-foreground`,
                          disabled: i,
                          onSelect: () => {
                            u(n.projectLabel, a);
                          },
                          children: (0, Q.jsx)(p, { ...$.deleteProjectChats }),
                        }),
                      })
                    : null,
                ],
              }),
            ],
          })
        : null),
      (t[0] = h),
      (t[1] = n.entries.length),
      (t[2] = n.projectLabel),
      (t[3] = f),
      (t[4] = i),
      (t[5] = u),
      (t[6] = a),
      (t[7] = c),
      (t[8] = g))
    : (g = t[8]);
  let _;
  if (
    t[9] !== n.entries ||
    t[10] !== r ||
    t[11] !== i ||
    t[12] !== s ||
    t[13] !== l ||
    t[14] !== d ||
    t[15] !== c ||
    t[16] !== o
  ) {
    let e;
    (t[18] !== r ||
    t[19] !== i ||
    t[20] !== s ||
    t[21] !== l ||
    t[22] !== d ||
    t[23] !== c ||
    t[24] !== o
      ? ((e = (e) => {
          switch (e.kind) {
            case `cloud`:
              return (0, Q.jsx)(
                St,
                { archivedTask: e.task, showProjectName: !c },
                `cloud:${e.task.id}`,
              );
            case `local`:
              return (0, Q.jsx)(
                qt,
                {
                  archivedThread: e.thread,
                  isDeleteDisabled: i,
                  isUnarchiving: s && o === e.thread.id,
                  showDeleteButton: r === b,
                  showProjectName: !c,
                  onDelete: () => {
                    l(e.thread);
                  },
                  onUnarchive: () => {
                    d(e.thread);
                  },
                },
                `local:${e.thread.id}`,
              );
          }
        }),
        (t[18] = r),
        (t[19] = i),
        (t[20] = s),
        (t[21] = l),
        (t[22] = d),
        (t[23] = c),
        (t[24] = o),
        (t[25] = e))
      : (e = t[25]),
      (_ = n.entries.map(e)),
      (t[9] = n.entries),
      (t[10] = r),
      (t[11] = i),
      (t[12] = s),
      (t[13] = l),
      (t[14] = d),
      (t[15] = c),
      (t[16] = o),
      (t[17] = _));
  } else _ = t[17];
  let v;
  return (
    t[26] !== g || t[27] !== _
      ? ((v = (0, Q.jsxs)(`div`, { className: `flex flex-col`, children: [g, _] })),
        (t[26] = g),
        (t[27] = _),
        (t[28] = v))
      : (v = t[28]),
    v
  );
}
function qt(e) {
  let t = (0, Z.c)(52),
    {
      archivedThread: n,
      isDeleteDisabled: r,
      isUnarchiving: i,
      showDeleteButton: a,
      showProjectName: o,
      onDelete: s,
      onUnarchive: c,
    } = e,
    l = me(),
    u;
  t[0] !== n.name || t[1] !== n.preview
    ? ((u = v(n.name?.trim() || n.preview).trim()), (t[0] = n.name), (t[1] = n.preview), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f,
    m,
    h,
    g;
  if (
    t[3] !== n.createdAt ||
    t[4] !== n.cwd ||
    t[5] !== n.path ||
    t[6] !== n.updatedAt ||
    t[7] !== l ||
    t[8] !== o
  ) {
    let e = new Date(Number(n.updatedAt) * 1e3),
      r = new Date(Number(n.createdAt) * 1e3),
      i = Number.isFinite(e.getTime()) ? e : Number.isFinite(r.getTime()) ? r : null,
      a;
    (t[13] !== n.cwd || t[14] !== n.path || t[15] !== o
      ? ((a = o ? (Ze(n.cwd) ?? Ze(n.path)) : null),
        (t[13] = n.cwd),
        (t[14] = n.path),
        (t[15] = o),
        (t[16] = a))
      : (a = t[16]),
      (h = a),
      (m = i != null),
      (f = m ? l.formatDate(i, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (g = m ? l.formatTime(i, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[3] = n.createdAt),
      (t[4] = n.cwd),
      (t[5] = n.path),
      (t[6] = n.updatedAt),
      (t[7] = l),
      (t[8] = o),
      (t[9] = f),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g));
  } else ((f = t[9]), (m = t[10]), (h = t[11]), (g = t[12]));
  let _ = g,
    y;
  t[17] === l
    ? (y = t[18])
    : ((y = l.formatMessage({
        id: `settings.dataControls.archivedChats.deleteAriaLabel`,
        defaultMessage: `Delete archived chat`,
        description: `Aria label for deleting an archived chat`,
      })),
      (t[17] = l),
      (t[18] = y));
  let b = y,
    x;
  t[19] === d
    ? (x = t[20])
    : ((x =
        d.length > 0
          ? d
          : (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[19] = d),
      (t[20] = x));
  let S;
  t[21] === x
    ? (S = t[22])
    : ((S = (0, Q.jsx)(`div`, { className: `truncate text-base font-medium`, children: x })),
      (t[21] = x),
      (t[22] = S));
  let w;
  t[23] !== f || t[24] !== m || t[25] !== h || t[26] !== _
    ? ((w = m
        ? h
          ? (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.dateTimeWithRepo`,
              defaultMessage: `{date}, {time} • {repo}`,
              description: `Date, time, and repo name for an archived chat`,
              values: { date: f, time: _, repo: h },
            })
          : (0, Q.jsx)(p, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: f, time: _ },
            })
        : null),
      (t[23] = f),
      (t[24] = m),
      (t[25] = h),
      (t[26] = _),
      (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] === w
    ? (T = t[29])
    : ((T = (0, Q.jsx)(`div`, {
        className: `mt-1 flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, Q.jsx)(`div`, {
          className: `truncate text-token-text-secondary`,
          children: w,
        }),
      })),
      (t[28] = w),
      (t[29] = T));
  let E;
  t[30] !== S || t[31] !== T
    ? ((E = (0, Q.jsxs)(`div`, {
        className: `min-w-0 flex-1 text-left text-token-text-primary`,
        children: [S, T],
      })),
      (t[30] = S),
      (t[31] = T),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== b || t[34] !== r || t[35] !== s || t[36] !== a
    ? ((D = a
        ? (0, Q.jsx)(C, {
            tooltipContent: b,
            children: (0, Q.jsx)(le, {
              "aria-label": b,
              className: `text-token-charts-red enabled:hover:bg-token-charts-red/10`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: r,
              onClick: s,
              children: (0, Q.jsx)(Oe, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[33] = b),
      (t[34] = r),
      (t[35] = s),
      (t[36] = a),
      (t[37] = D))
    : (D = t[37]);
  let O;
  t[38] !== r || t[39] !== c
    ? ((O = () => {
        r || c();
      }),
      (t[38] = r),
      (t[39] = c),
      (t[40] = O))
    : (O = t[40]);
  let k;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(p, { ...Y.unarchive })), (t[41] = k))
    : (k = t[41]);
  let A;
  t[42] !== r || t[43] !== i || t[44] !== O
    ? ((A = (0, Q.jsx)(le, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: r,
        loading: i,
        onClick: O,
        children: k,
      })),
      (t[42] = r),
      (t[43] = i),
      (t[44] = O),
      (t[45] = A))
    : (A = t[45]);
  let j;
  t[46] !== A || t[47] !== D
    ? ((j = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-2 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
        children: [D, A],
      })),
      (t[46] = A),
      (t[47] = D),
      (t[48] = j))
    : (j = t[48]);
  let M;
  return (
    t[49] !== j || t[50] !== E
      ? ((M = (0, Q.jsxs)(`div`, {
          className: `group flex w-full items-center justify-between gap-3 border-b border-token-border bg-[var(--color-background-panel,var(--color-token-bg-fog))] px-4 py-3 last:border-b-0 hover:bg-token-list-hover-background`,
          children: [E, j],
        })),
        (t[49] = j),
        (t[50] = E),
        (t[51] = M))
      : (M = t[51]),
    M
  );
}
function Jt(e) {
  let t = (0, Z.c)(23),
    { state: n, onConfirm: r, onOpenChange: i } = e;
  if (n == null) return null;
  let a;
  t[0] === n.kind
    ? (a = t[1])
    : ((a = (0, Q.jsx)(s, {
        children: (0, Q.jsx)(u, {
          title:
            n.kind === `all`
              ? (0, Q.jsx)(p, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.title`,
                  defaultMessage: `Delete all archived local chats?`,
                  description: `Title for confirming deletion of all archived local chats`,
                })
              : n.kind === `project`
                ? (0, Q.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteProjectConfirm.title`,
                    defaultMessage: `Delete all in project?`,
                    description: `Title for confirming deletion of archived local chats in one project`,
                  })
                : (0, Q.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteConfirm.title`,
                    defaultMessage: `Delete archived chat?`,
                    description: `Title for confirming deletion of an archived chat`,
                  }),
        }),
      })),
      (t[0] = n.kind),
      (t[1] = a));
  let o;
  t[2] !== n.kind || t[3] !== n.threads
    ? ((o = (0, Q.jsx)(s, {
        className: `text-token-description-foreground`,
        children: (0, Q.jsx)(`p`, {
          children:
            n.kind === `all`
              ? (0, Q.jsx)(p, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.body`,
                  defaultMessage: `This permanently deletes all local archived chats`,
                  description: `Body copy in the delete all archived local chats confirmation dialog`,
                })
              : n.kind === `project`
                ? (0, Q.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteProjectConfirm.body`,
                    defaultMessage: `This permanently deletes {count, plural, one {# local archived chat} other {# local archived chats}} in this project`,
                    description: `Body copy in the delete archived local chats in project confirmation dialog`,
                    values: { count: n.threads.length },
                  })
                : (0, Q.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteConfirm.body`,
                    defaultMessage: `This permanently deletes the archived chat`,
                    description: `Body copy in the delete archived chat confirmation dialog`,
                  }),
        }),
      })),
      (t[2] = n.kind),
      (t[3] = n.threads),
      (t[4] = o))
    : (o = t[4]);
  let c;
  t[5] === i
    ? (c = t[6])
    : ((c = () => {
        i(!1);
      }),
      (t[5] = i),
      (t[6] = c));
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(p, {
        id: `settings.dataControls.archivedChats.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for deleting archived chats`,
      })),
      (t[7] = l))
    : (l = t[7]);
  let d;
  t[8] === c
    ? (d = t[9])
    : ((d = (0, Q.jsx)(le, { color: `ghost`, onClick: c, children: l })), (t[8] = c), (t[9] = d));
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(p, { ...Y.delete })), (t[10] = f))
    : (f = t[10]);
  let m;
  t[11] === r
    ? (m = t[12])
    : ((m = (0, Q.jsx)(le, { color: `danger`, onClick: r, children: f })),
      (t[11] = r),
      (t[12] = m));
  let h;
  t[13] !== d || t[14] !== m
    ? ((h = (0, Q.jsx)(s, { children: (0, Q.jsxs)(A, { children: [d, m] }) })),
      (t[13] = d),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== a || t[17] !== o || t[18] !== h
    ? ((g = (0, Q.jsxs)(Se, { children: [a, o, h] })),
      (t[16] = a),
      (t[17] = o),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== i || t[21] !== g
      ? ((_ = (0, Q.jsx)(fe, { open: !0, showDialogClose: !1, onOpenChange: i, children: g })),
        (t[20] = i),
        (t[21] = g),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
function Yt(e) {
  switch (e) {
    case `all`:
      return $.allChats;
    case `cloud`:
      return $.cloud;
    case `local`:
      return $.local;
  }
}
function Xt(e) {
  return e.kind === `all`
    ? `delete-archived-chats`
    : e.kind === `project`
      ? `delete-archived-project-${e.projectLabel ?? `no-project`}`
      : `delete-archived-thread-${e.thread.id}`;
}
var Z, Zt, Q, $, Qt, $t;
e(() => {
  ((Z = E()),
    Ce(),
    H(),
    ue(),
    (Zt = t(Te(), 1)),
    h(),
    V(),
    we(),
    R(),
    be(),
    re(),
    K(),
    U(),
    i(),
    B(),
    nt(),
    Ve(),
    J(),
    se(),
    ze(),
    _e(),
    Fe(),
    it(),
    g(),
    n(),
    je(),
    q(),
    y(),
    S(),
    ot(),
    Qe(),
    Ke(),
    ke(),
    We(),
    De(),
    Ye(),
    et(),
    de(),
    ne(),
    Xe(),
    pe(),
    f(),
    He(),
    T(),
    ct(),
    xt(),
    Tt(),
    Nt(),
    (Q = W()),
    ($ = P({
      searchArchivedChats: {
        id: `settings.dataControls.archivedChats.search.placeholder`,
        defaultMessage: `Search archived chats`,
        description: `Placeholder for the archived chats search input`,
      },
      filterArchivedChats: {
        id: `settings.dataControls.archivedChats.filter.ariaLabel`,
        defaultMessage: `Filter archived chats`,
        description: `Accessible label for the archived chats filter dropdown`,
      },
      groupArchivedChats: {
        id: `settings.dataControls.archivedChats.group.ariaLabel`,
        defaultMessage: `Group archived chats`,
        description: `Accessible label for the archived chats grouping dropdown`,
      },
      filterArchivedChatsByProject: {
        id: `settings.dataControls.archivedChats.projectFilter.ariaLabel`,
        defaultMessage: `Filter archived chats by project`,
        description: `Accessible label for the archived chats project dropdown`,
      },
      allProjects: {
        id: `settings.dataControls.archivedChats.projectFilter.allProjects`,
        defaultMessage: `All projects`,
        description: `Project filter option showing archived chats from all projects`,
      },
      chats: {
        id: `settings.dataControls.archivedChats.projectFilter.chats`,
        defaultMessage: `Chats`,
        description: `Project filter option showing projectless archived chats`,
      },
      automations: {
        id: `settings.dataControls.archivedChats.projectFilter.automations`,
        defaultMessage: `Scheduled tasks`,
        description: `Project filter option showing archived scheduled task chats`,
      },
      type: {
        id: `settings.dataControls.archivedChats.filter.section.type`,
        defaultMessage: `Type`,
        description: `Section label for archived chat type filter options`,
      },
      sortBy: {
        id: `settings.dataControls.archivedChats.filter.section.sort`,
        defaultMessage: `Sort by`,
        description: `Section label for archived chat sort options`,
      },
      allChats: {
        id: `settings.dataControls.archivedChats.filter.all`,
        defaultMessage: `All chats`,
        description: `Filter option showing every archived chat`,
      },
      local: {
        id: `settings.dataControls.archivedChats.filter.local`,
        defaultMessage: `Local`,
        description: `Filter option showing local archived chats`,
      },
      cloud: {
        id: `settings.dataControls.archivedChats.filter.cloud`,
        defaultMessage: `Cloud`,
        description: `Filter option showing cloud archived chats`,
      },
      project: {
        id: `settings.dataControls.archivedChats.group.project`,
        defaultMessage: `Project`,
        description: `Grouping option that groups archived chats by project`,
      },
      none: {
        id: `settings.dataControls.archivedChats.group.none`,
        defaultMessage: `None`,
        description: `Grouping option that shows archived chats in one list`,
      },
      updated: {
        id: `settings.dataControls.archivedChats.sort.updated`,
        defaultMessage: `Updated`,
        description: `Sort option for archived chats by last updated time`,
      },
      created: {
        id: `settings.dataControls.archivedChats.sort.created`,
        defaultMessage: `Created`,
        description: `Sort option for archived chats by creation time`,
      },
      alphabetical: {
        id: `settings.dataControls.archivedChats.sort.alphabetical`,
        defaultMessage: `Alphabetical`,
        description: `Sort option for archived chats by title`,
      },
      deleteProjectChats: {
        id: `settings.dataControls.archivedChats.deleteProjectChats`,
        defaultMessage: `Delete all in project`,
        description: `Menu item label for deleting local archived chats in a project`,
      },
    })),
    (Qt = { kind: `all` }),
    ($t = 1e5));
})();
export { Pt as DataControlsSettings };
//# sourceMappingURL=data-controls.js.map
