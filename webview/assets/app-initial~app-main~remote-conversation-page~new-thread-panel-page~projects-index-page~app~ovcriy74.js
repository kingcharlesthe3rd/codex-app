import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $p as r,
  $t as i,
  Hi as a,
  IP as o,
  Jp as s,
  LP as c,
  Ln as l,
  PN as u,
  PR as d,
  Pf as ee,
  Pn as te,
  Pp as ne,
  QN as f,
  RN as p,
  XO as re,
  YO as ie,
  Yj as m,
  Yt as h,
  _M as g,
  ax as _,
  bB as ae,
  bn as v,
  fn as y,
  gM as b,
  hx as x,
  iF as S,
  jE as C,
  jV as w,
  kf as T,
  kn as E,
  ln as oe,
  mm as D,
  nd as O,
  on as se,
  pn as ce,
  px as k,
  qj as A,
  rx as le,
  tV as j,
  td as M,
  vn as ue,
  yd as de,
  yn as fe,
  yp as pe,
  zV as me,
  zi as he,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Ao as ge,
  Bo as _e,
  Go as ve,
  Ry as ye,
  Wo as be,
  cl as xe,
  jo as N,
  ll as Se,
  ul as Ce,
  zy as we,
} from "./app-initial~app-main~onboarding-page.js";
import {
  d as P,
  u as Te,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  G as Ee,
  J as De,
  _ as Oe,
  g as ke,
  q as Ae,
  v as je,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import {
  n as F,
  r as Me,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
var I,
  Ne = e(() => {
    (b(), (I = g(`codex-sidebar-chat-order-v1`, void 0)));
  });
function Pe(e) {
  return { threadIds: L(e) };
}
function Fe({ tasks: e, order: t }) {
  return t == null ? e : Ie(e, t.sortKey == null ? t : Be(e, t.sortKey));
}
function Ie(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = R(t);
    if (e != null) {
      let r = n.get(e);
      r == null ? n.set(e, [t]) : r.push(t);
    }
  }
  let r = Ue(t.threadIds, n),
    i = [],
    a = new Set(r),
    o = new Set(),
    s = 0;
  for (let t of e) {
    let e = R(t);
    if (e == null || !a.has(e)) {
      i.push(t);
      continue;
    }
    if (o.has(e)) continue;
    o.add(e);
    let c = r[s];
    if (((s += 1), c == null)) continue;
    let l = n.get(c);
    l != null && i.push(...l);
  }
  return i;
}
function Le({ order: e, tasks: t, visibleThreadIds: n, nextVisibleThreadIds: r }) {
  return {
    threadIds: Ce({
      threadIds: (e == null
        ? Pe(t)
        : e.sortKey == null
          ? ze({ order: e, tasks: t })
          : Be(t, e.sortKey)
      ).threadIds,
      visibleThreadIds: n,
      nextVisibleThreadIds: r,
    }),
  };
}
function Re({ order: e, tasks: t, threadId: n, beforeThreadId: r }) {
  let i = e == null ? L(t) : ze({ order: e, tasks: t }).threadIds,
    a = i.filter((e) => e !== n),
    o = r == null ? 0 : a.indexOf(r),
    s = o === -1 ? a.length : o,
    c = [...a.slice(0, s), n, ...a.slice(s)];
  return xe(i, c) ? { threadIds: i } : { threadIds: c };
}
function ze({ order: e, tasks: t }) {
  let n = He(e.threadIds, L(t));
  return n === e.threadIds ? e : { threadIds: n };
}
function Be(e, t) {
  return {
    threadIds: L(
      e
        .flatMap((e, n) => (R(e) == null ? [] : [{ task: e, timestamp: Ve(e, t), index: n }]))
        .sort((e, t) => t.timestamp - e.timestamp || e.index - t.index)
        .map(({ task: e }) => e),
    ),
  };
}
function L(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    let e = R(r);
    e == null || n.has(e) || (n.add(e), t.push(e));
  }
  return t;
}
function R(e) {
  return he(e.key);
}
function Ve(e, t) {
  switch (e.kind) {
    case `local`:
      return t === `updated_at`
        ? (e.conversation.recencyAt ?? e.conversation.updatedAt)
        : e.conversation.createdAt;
    case `remote`:
      return (
        ((t === `updated_at`
          ? (e.task.updated_at ?? e.task.created_at)
          : (e.task.created_at ?? e.task.updated_at)) ?? 0) * 1e3
      );
    case `pending-worktree`:
      return 0;
  }
}
function He(e, t) {
  let n = new Set(e),
    r = t.filter((e) => !n.has(e));
  return r.length === 0 ? e : [...e, ...r];
}
function Ue(e, t) {
  let n = new Set();
  return e.filter((e) => (!t.has(e) || n.has(e) ? !1 : (n.add(e), !0)));
}
var We = e(() => {
  (a(), Se());
});
function Ge(e) {
  return [...e].sort(
    (e, t) => z[e.attentionState] - z[t.attentionState] || t.recencyAt - e.recencyAt,
  );
}
var z,
  Ke = e(() => {
    z = { waiting: 0, unread: 1, active: 2, idle: 3 };
  });
function qe(e, t, n) {
  let r = {
    ...U,
    ...e,
    chatSortMode: e?.chatSortMode === `created_at` ? `updated_at` : (e?.chatSortMode ?? `priority`),
    projectSortMode:
      e?.projectSortMode === `created_at` ? `updated_at` : (e?.projectSortMode ?? `priority`),
  };
  return r.initialized || t == null
    ? r
    : t === `recent`
      ? { ...r, mode: n ? `project` : `list` }
      : { ...r, mode: t };
}
function Je(e, t, n) {
  if (e.initialized) return e;
  let r = e.mode;
  return (n ?? (r = t >= 2 ? `project` : `list`), { ...e, initialized: !0, mode: r });
}
function Ye(e, t) {
  let n = e.get(de),
    r = e.get(O);
  (!e.get(q).initialized && n === `recent` && !r && e.set(K, (e) => e ?? `updated_at`),
    e.set(G, (e) => Je(qe(e, n, r), t, n)));
}
function Xe({
  enabled: e,
  hasLoadedProjectSources: t,
  isWorkspaceRootOptionsLoading: n,
  preferences: r,
}) {
  return e && t && !n && !r.initialized;
}
function Ze(e, t) {
  e.set(G, (e) => ({ ...(e ?? U), initialized: !0, mode: t }));
}
function Qe(e, t) {
  e.set(G, (e) => ({ ...U, ...e, chatSortMode: t }));
}
function $e(e, t) {
  e.set(K, t);
}
function et(e, t) {
  let n = e.get(q).projectSortMode;
  (e.set(K, (e) => e ?? n), e.set(G, (e) => ({ ...U, ...e, projectSortMode: t })));
}
function tt({
  aeonThreadKeys: e,
  connectionThreadKeys: t,
  mode: n,
  pinnedProjectThreadKeys: r,
  pinnedThreadKeys: i,
  projectlessThreadKeys: a,
  projectThreadKeys: o,
  threadKeys: s,
}) {
  switch (n) {
    case `connection`:
      return [...i, ...r, ...e, ...(t ?? [])];
    case `list`:
      return [...i, ...e, ...s];
    case `project`:
      return [...i, ...r, ...e, ...o, ...a];
  }
}
function nt({ pinnedProjectGroups: e, threadKeys: t }) {
  let n = new Set(e.flatMap((e) => e.threadKeys));
  return t.filter((e) => !n.has(e));
}
function rt({ groups: e, items: t }) {
  let n = new Set(t.filter((e) => e.isPinned).map((e) => e.task.key));
  return n.size === 0
    ? e
    : e.map((e) => {
        let t = e.threadKeys.filter((e) => !n.has(e));
        return t.length === e.threadKeys.length ? e : { ...e, threadKeys: t };
      });
}
function it({ groups: e, items: t, projectOrder: n }) {
  let r = new Map(t.map((e) => [e.task.key, e.recencyAt]));
  return ce(
    e
      .map((e, t) => ({ group: e, index: t, recencyAt: st(e, r) }))
      .sort((e, t) => t.recencyAt - e.recencyAt || e.index - t.index)
      .map(({ group: e }) => e),
    n,
  );
}
function at({ items: e, attentionStateByThreadKey: t, unreadThreadKeys: n }) {
  return Ge(
    e.map((e) => ({
      item: e,
      attentionState: ot(t.get(e.task.key) ?? `idle`, n.has(e.task.key)),
      recencyAt: e.recencyAt,
    })),
  ).map(({ item: e }) => e.task.key);
}
function B({
  attentionStateByThreadKey: e,
  items: t,
  manualOrder: n,
  sortMode: r,
  unreadThreadKeys: i,
}) {
  return r === `priority`
    ? at({ attentionStateByThreadKey: e, items: t, unreadThreadKeys: i })
    : r === `manual`
      ? Fe({
          tasks: t.map((e) => e.task),
          order: n == null ? null : { threadIds: n.threadIds },
        }).map((e) => e.key)
      : t
          .map((e, t) => ({ index: t, item: e }))
          .sort((e, t) => t.item.recencyAt - e.item.recencyAt || e.index - t.index)
          .map(({ item: e }) => e.task.key);
}
function ot(e, t) {
  return e === `waiting` || !t ? e : `unread`;
}
function st(e, t) {
  let n = e.projectUpdatedAt ?? 0;
  for (let r of e.threadKeys) n = Math.max(n, t.get(r) ?? 0);
  return n;
}
function ct({ items: e, projectGroups: t, projectlessThreadIds: n }) {
  let r = new Set(t.flatMap((e) => e.threadKeys));
  return lt(e.filter((e) => !e.isPinned && mt(e, n) && !r.has(e.task.key)));
}
function lt(e) {
  return e
    .map((e, t) => ({ index: t, item: e, timestamp: e.recencyAt }))
    .sort((e, t) => t.timestamp - e.timestamp || e.index - t.index)
    .map(({ item: e }) => e.task.key);
}
function ut(e, t) {
  return e(Oe, t).map((t) => ({ ...t, recencyAt: dt(e, t) }));
}
function dt(e, t) {
  switch (t.task.kind) {
    case `local`:
      return (
        e(s, t.task.conversation.id) ??
        t.task.conversation.recencyAt ??
        t.task.conversation.updatedAt
      );
    case `remote`:
      return (t.task.task.updated_at ?? t.task.task.created_at ?? 0) * 1e3;
    case `pending-worktree`:
      return t.task.pendingWorktree.createdAt;
  }
}
function ft(e, t) {
  let n = t.connectionGroups;
  e.connectionGroups != null &&
    t.connectionGroups != null &&
    (n = fe(e.connectionGroups, t.connectionGroups));
  let r = V(e.projectGroups, t.projectGroups),
    i = V(e.pinnedProjectThreadKeys, t.pinnedProjectThreadKeys),
    a = V(e.projectlessThreadKeys, t.projectlessThreadKeys),
    o = V(e.shortcutThreadKeys, t.shortcutThreadKeys),
    s = V(e.threadKeys, t.threadKeys),
    c = pt(e.threadAttentionStateByKey, t.threadAttentionStateByKey),
    l = pt(e.threadRecencyAtByKey, t.threadRecencyAtByKey),
    u = V(e.navigationThreadKeys, t.navigationThreadKeys);
  return n === e.connectionGroups &&
    e.hasLoadedProjectSources === t.hasLoadedProjectSources &&
    e.isWorkspaceRootOptionsLoading === t.isWorkspaceRootOptionsLoading &&
    e.projectCount === t.projectCount &&
    u === e.navigationThreadKeys &&
    i === e.pinnedProjectThreadKeys &&
    r === e.projectGroups &&
    a === e.projectlessThreadKeys &&
    o === e.shortcutThreadKeys &&
    c === e.threadAttentionStateByKey &&
    l === e.threadRecencyAtByKey &&
    s === e.threadKeys
    ? e
    : {
        connectionGroups: n,
        hasLoadedProjectSources: t.hasLoadedProjectSources,
        isWorkspaceRootOptionsLoading: t.isWorkspaceRootOptionsLoading,
        navigationThreadKeys: u,
        pinnedProjectThreadKeys: i,
        projectCount: t.projectCount,
        projectGroups: r,
        projectlessThreadKeys: a,
        shortcutThreadKeys: o,
        threadAttentionStateByKey: c,
        threadRecencyAtByKey: l,
        threadKeys: s,
      };
}
function V(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return t;
  return e;
}
function pt(e, t) {
  return e.size !== t.size || Array.from(t).some(([t, n]) => e.get(t) !== n) ? t : e;
}
function mt(e, t) {
  switch (e.task.kind) {
    case `local`:
      return e.task.conversation.workspaceKind === `projectless` || t.has(e.task.conversation.id);
    case `remote`:
      return t.has(e.task.task.id);
    case `pending-worktree`:
      return !1;
  }
}
var ht,
  H,
  gt,
  _t,
  U,
  vt,
  W,
  yt,
  G,
  K,
  q,
  J,
  Y,
  bt,
  xt,
  St = e(() => {
    (ae(),
      S(),
      pe(),
      x(),
      c(),
      ee(),
      v(),
      Ne(),
      De(),
      h(),
      y(),
      We(),
      M(),
      E(),
      Ke(),
      ke(),
      _(),
      b(),
      (ht = []),
      (H = []),
      (gt = new Map()),
      (_t = new Map()),
      (U = {
        chatSortMode: `priority`,
        initialized: !1,
        mode: `project`,
        projectSortMode: `priority`,
      }),
      (vt = {
        connectionGroups: void 0,
        hasLoadedProjectSources: !1,
        isWorkspaceRootOptionsLoading: !1,
        navigationThreadKeys: H,
        pinnedProjectThreadKeys: H,
        projectCount: 0,
        projectGroups: ht,
        projectlessThreadKeys: H,
        shortcutThreadKeys: H,
        threadAttentionStateByKey: gt,
        threadRecencyAtByKey: _t,
        threadKeys: H,
      }),
      (W = new WeakMap()),
      (yt = 9),
      (G = g(`flat-project-sidebar-preferences-v1`, U)),
      (K = g(`codex-sidebar-sort-mode-v1`, void 0)),
      (q = j(o, ({ get: e }) => qe(e(G), e(de), e(O)))),
      (J = j(o, ({ get: e }) => e(K) ?? e(q).projectSortMode)),
      (Y = j(o, ({ get: e }) => {
        let t = e(q).mode;
        return t === `connection` && !e(Ae) ? `project` : t;
      })),
      (bt = j(
        o,
        ({ get: e }) => k(e, d.ACTIVE_REMOTE_PROJECT_ID) ?? e(T).data?.roots?.[0] ?? null,
      )),
      (xt = j(o, ({ get: e, scope: t }) => {
        let { allSidebarThreadKeys: n, pinnedThreadKeys: r } = e(je),
          a = H,
          o = n,
          s = ut(e, o),
          c = new Map(n.map((t) => [t, e(te, t)])),
          u = new Set(n.filter((t) => e(l, t))),
          ee = new Map(n.map((e) => [e, ot(c.get(e) ?? `idle`, u.has(e))])),
          ne = s.flatMap((e) => (e.task.kind === `local` ? [e.task.conversation.id] : [])),
          f = k(e, d.SIDEBAR_PROJECT_THREAD_ORDERS),
          { projectlessThreadIds: p, threadProjectAssignments: re } = le(e, {
            conversationIds: ne,
            projectlessThreadIds: k(e, d.PROJECTLESS_THREAD_IDS),
            threadProjectAssignments: k(e, d.THREAD_PROJECT_ASSIGNMENTS),
          }),
          ie = k(e, d.PINNED_PROJECT_IDS),
          m = e(se, {
            threadKeys: o,
            enabled: !0,
            threadProjectAssignments: re,
            projectlessThreadIds: p,
          }),
          { groups: h, isWorkspaceRootOptionsLoading: g } = m,
          { pinnedGroups: _, unpinnedGroups: ae } = oe(h, ie),
          v = rt({ groups: _, items: s }),
          y = it({
            groups: rt({ groups: ae, items: s }),
            items: s,
            projectOrder: k(e, d.PROJECT_ORDER),
          }),
          b = ct({ items: s, projectGroups: h, projectlessThreadIds: new Set(p ?? []) }),
          x = new Map(s.map((e) => [e.task.key, e])),
          S = e(J),
          C = e(I) ?? null;
        ((y = y.map((e) => {
          let t = B({
              items: e.threadKeys.flatMap((e) => {
                let t = x.get(e);
                return t == null ? [] : [t];
              }),
              attentionStateByThreadKey: c,
              manualOrder: f?.[e.projectId] ?? null,
              sortMode: S,
              unreadThreadKeys: u,
            }),
            n = V(e.threadKeys, t);
          return n === e.threadKeys ? e : { ...e, threadKeys: n };
        })),
          (b = B({
            items: b.flatMap((e) => {
              let t = x.get(e);
              return t == null ? [] : [t];
            }),
            attentionStateByThreadKey: c,
            manualOrder: C,
            sortMode: S,
            unreadThreadKeys: u,
          })));
        let w = B({
            items: s.filter((e) => !e.isPinned),
            attentionStateByThreadKey: c,
            manualOrder: C,
            sortMode: S,
            unreadThreadKeys: u,
          }),
          T = e(Y),
          E = nt({ pinnedProjectGroups: _, threadKeys: w }),
          D =
            T === `connection`
              ? ue({
                  connectionGroupOrder: k(e, d.CONNECTION_GROUP_ORDER),
                  groups: e(i, E),
                  includeEmptyGroup: e(Ee),
                })
              : void 0,
          O = v.flatMap((e) =>
            B({
              attentionStateByThreadKey: c,
              items: e.threadKeys.flatMap((e) => {
                let t = x.get(e);
                return t == null ? [] : [t];
              }),
              manualOrder: f?.[e.projectId] ?? null,
              sortMode: S,
              unreadThreadKeys: u,
            }),
          ),
          ce = y.slice(0, 5).flatMap((e) => e.threadKeys),
          A = tt({
            aeonThreadKeys: a,
            connectionThreadKeys: D?.flatMap((e) => e.threadKeys),
            mode: T,
            pinnedProjectThreadKeys: O,
            pinnedThreadKeys: r,
            projectlessThreadKeys: b,
            projectThreadKeys: ce,
            threadKeys: w,
          }),
          j = {
            connectionGroups: D,
            hasLoadedProjectSources: m.hasLoadedWorkspaceRootOptions,
            isWorkspaceRootOptionsLoading: g,
            navigationThreadKeys: A,
            pinnedProjectThreadKeys: O,
            projectCount: h.length,
            projectGroups: y,
            projectlessThreadKeys: b,
            shortcutThreadKeys: A.slice(0, yt),
            threadAttentionStateByKey: ee,
            threadRecencyAtByKey: new Map(s.map((e) => [e.task.key, e.recencyAt])),
            threadKeys: w,
          },
          M = ft(W.get(t.node) ?? vt, j);
        return (W.set(t.node, M), M);
      })));
  });
async function Ct(e, { sourceConversationId: t, sourceWorkspaceRoot: i }) {
  if (t == null) return null;
  try {
    let n = e.get(r, t),
      a = Tt(e, t),
      o = await re(`fork-conversation-from-latest`, {
        hostId: n,
        conversationId: t,
        cwd: i ?? void 0,
        workspaceRoots: i == null ? void 0 : [i],
        collaborationMode: a,
      });
    return (be(e, { sourceConversationId: t, targetConversationId: o }), o);
  } catch (t) {
    return (
      n.error(`Error forking local task`, { safe: {}, sensitive: { error: t } }),
      e.get(m).danger(e.get(P).formatMessage(N.forkThreadError)),
      null
    );
  }
}
async function wt(
  e,
  { localEnvironmentSelectionsByWorkspace: t, sourceConversationId: n, sourceWorkspaceRoot: i },
) {
  if (n == null || i == null) return null;
  let a = e.get(r, n),
    o = await u(`git-origins`, {
      params: { dirs: [i], hostId: a },
      source: `fork_conversation_actions`,
    });
  if ((o.origins.find((e) => e.dir === i)?.root ?? o.origins[0]?.root ?? null) == null)
    return (e.get(m).danger(e.get(P).formatMessage(N.forkThreadRequiresGitRepo)), null);
  let s = await Et({ hostId: a, localEnvironmentSelectionsByWorkspace: t, sourceWorkspaceRoot: i }),
    c = e.get(P),
    l = Tt(e, n),
    d = ye({
      hostId: a,
      label: c.formatMessage(N.forkPendingWorktreeTitle),
      sourceWorkspaceRoot: i,
      startingState: { type: `working-tree` },
      localEnvironmentConfigPath: s,
      launchMode: `fork-conversation`,
      prompt: c.formatMessage(N.forkPendingWorktreePrompt),
      startConversationParamsInput: null,
      sourceConversationId: n,
      sourceCollaborationMode: l,
      targetTurnId: null,
    });
  return (ve(e, { pendingWorktreeId: d, sourceConversationId: n, sourceWorkspaceRoot: i }), d);
}
function Tt(e, t) {
  return e.get(D, t) == null ? e.get(ne, t) : null;
}
async function Et({ hostId: e, localEnvironmentSelectionsByWorkspace: t, sourceWorkspaceRoot: n }) {
  let r = e ?? `local`;
  try {
    let { environments: e } = await u(`local-environments`, {
      params: { hostId: r, workspaceRoot: n },
    });
    return F({
      canValidateSelection: !0,
      environments: e,
      hostId: r,
      selectionsByWorkspace: t,
      workspaceRoot: n,
    }).resolvedConfigPath;
  } catch {
    return F({
      canValidateSelection: !1,
      environments: [],
      hostId: r,
      selectionsByWorkspace: t,
      workspaceRoot: n,
    }).resolvedConfigPath;
  }
}
var Dt = e(() => {
    (pe(), ie(), A(), _e(), Te(), Me(), C(), f(), p(), we(), ge());
  }),
  X,
  Z,
  Ot = e(() => {
    (t(me()),
      (X = w()),
      (Z = (e) =>
        (0, X.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M6.26467 8.45711L8.8135 8.85067C9.09938 8.8953 9.29582 9.16326 9.25197 9.4493C9.20773 9.73571 8.93876 9.93179 8.65237 9.88778L6.10451 9.49422C5.81797 9.44996 5.62179 9.18213 5.66604 8.89559C5.7105 8.60928 5.97827 8.41289 6.26467 8.45711Z`,
              fill: `currentColor`,
            }),
            (0, X.jsx)(`path`, {
              d: `M6.26272 5.89168L10.1221 6.47567C10.4085 6.51927 10.6058 6.78682 10.5625 7.07333C10.5189 7.35947 10.2511 7.55674 9.96486 7.51375L6.10647 6.93075C5.82003 6.88745 5.6222 6.61949 5.66506 6.33309C5.70838 6.04653 5.97617 5.84859 6.26272 5.89168Z`,
              fill: `currentColor`,
            }),
            (0, X.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M7.90139 1.19442C9.66502 0.358487 11.6981 1.64504 11.6983 3.59676V3.7325C12.6924 4.05721 13.3916 4.98984 13.3916 6.06844V12.5997C13.3916 14.0896 12.0768 15.2369 10.6006 15.0352L4.70803 14.2306C3.49039 14.0642 2.58229 13.0239 2.58205 11.795V11.2667L2.23244 11.2188C1.94536 11.1793 1.7439 10.9141 1.78322 10.627C1.82284 10.34 2.088 10.1385 2.37502 10.1778L2.58205 10.2061V8.76571L2.23244 8.71786C1.94541 8.67832 1.74403 8.41306 1.78322 8.12606C1.82277 7.83896 2.08794 7.63752 2.37502 7.67684L2.58205 7.70516V6.26375L2.23244 6.2159C1.94538 6.17632 1.7439 5.91116 1.78322 5.62411C1.82295 5.33723 2.08809 5.13563 2.37502 5.17489L2.58303 5.20321C2.60775 4.17582 3.25879 3.32177 4.14944 2.97372L7.90139 1.19442ZM5.23147 3.86825C4.99202 3.83553 4.76039 3.86629 4.5508 3.94442L4.5049 3.96688L4.50197 3.962C3.99633 4.17213 3.63289 4.67064 3.63283 5.26375V5.34774L3.9092 5.3868C4.19619 5.42646 4.39677 5.69158 4.35744 5.9786C4.31774 6.26568 4.05279 6.4664 3.76565 6.42684L3.63283 6.40829V7.84969L3.9092 7.88875C4.19632 7.92843 4.397 8.19339 4.35744 8.48055C4.31763 8.76751 4.05271 8.96833 3.76565 8.92879L3.63283 8.91024V10.3507L3.9092 10.3897C4.19627 10.4294 4.39692 10.6944 4.35744 10.9815C4.31774 11.2686 4.05279 11.4693 3.76565 11.4298L3.63283 11.4112V11.795C3.63307 12.4989 4.15311 13.0942 4.85061 13.1895L10.7432 13.9952C11.5887 14.1105 12.3418 13.4531 12.3418 12.5997V6.06844C12.3417 5.36441 11.8216 4.76828 11.124 4.67293L5.23147 3.86825ZM10.6446 3.54793C10.6113 2.39459 9.40385 1.64503 8.35158 2.14364L6.56447 2.98934L10.6446 3.54793Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  Q,
  $,
  kt = e(() => {
    (t(me()),
      (Q = w()),
      ($ = (e) =>
        (0, Q.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `currentColor`,
          viewBox: `0 0 20 20`,
          ...e,
          children: [
            (0, Q.jsx)(`path`, {
              d: `M3.165 10c0-3.51 3.024-6.418 6.835-6.418S16.835 6.49 16.835 10a6.138 6.138 0 0 1-1.388 3.877.667.667 0 0 0-.136.54c.095.508.23 1.003.384 1.487a12.883 12.883 0 0 1-1.823-.376l-.126-.022a.664.664 0 0 0-.369.076 7.145 7.145 0 0 1-3.377.837c-3.811 0-6.835-2.91-6.835-6.42Zm-1.33 0c0 4.314 3.692 7.749 8.165 7.749a8.487 8.487 0 0 0 3.766-.873c.92.242 1.865.393 2.86.455a.665.665 0 0 0 .661-.903l-.207-.565c-.162-.468-.3-.933-.402-1.402A7.45 7.45 0 0 0 18.165 10c0-4.315-3.692-7.748-8.165-7.748-4.473 0-8.165 3.433-8.165 7.748Z`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M10 6.335A.665.665 0 0 0 9.335 7v2.335L7 9.349l-.134.013a.665.665 0 0 0 0 1.303L7 10.68l2.335-.014V13a.665.665 0 0 0 1.33 0v-2.335L13 10.68a.665.665 0 0 0 0-1.33l-2.335-.014V7A.665.665 0 0 0 10 6.335Z`,
            }),
          ],
        })));
  });
export {
  We as C,
  Ne as D,
  I as E,
  Fe as S,
  Le as T,
  et as _,
  Ct as a,
  Ge as b,
  bt as c,
  q as d,
  St as f,
  $e as g,
  Qe as h,
  Ot as i,
  J as l,
  Ze as m,
  kt as n,
  wt as o,
  Ye as p,
  Z as r,
  Dt as s,
  $ as t,
  Y as u,
  Xe as v,
  Re as w,
  Ke as x,
  xt as y,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js.map
