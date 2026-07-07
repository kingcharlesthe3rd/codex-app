import { n as e } from "./rolldown-runtime.js";
import {
  Bc as t,
  Bt as n,
  D as r,
  Ga as i,
  Gt as a,
  O as o,
  R as s,
  Rt as c,
  V as ee,
  Xs as l,
  at as u,
  st as d,
  uo as te,
  vl as ne,
  zc as f,
  zn as re,
  zt as p,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { $v as ie, Dc as ae, Ec as oe, Qv as se } from "./app-initial~app-main~onboarding-page.js";
import {
  Gb as m,
  Jr as ce,
  Sn as le,
  Sx as h,
  Wb as ue,
  Yn as de,
  _n as fe,
  an as pe,
  br as me,
  jr as he,
  q as ge,
  ut as _e,
  yx as ve,
  zn as ye,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Ar as be,
  Nn as xe,
  Sr as g,
  Wn as Se,
  _r as Ce,
  aa as we,
  da as _,
  eu as Te,
  jr as v,
  mr as Ee,
  oa as y,
  pr as b,
  ra as De,
  sa as x,
  tu as Oe,
  ua as S,
  wr as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j = e(() => {
    (l(),
      de(),
      pe(),
      p(),
      o(),
      ge(),
      b(),
      ue(),
      (w = f(c, () => !0)),
      (T = f(c, ({ get: e }) => e(w) && e(r, e(ye)).kind === `local`)),
      (E = f(c, ({ get: e }) => e(m, `824038554`) || e(m, `12346831`))),
      (D = f(c, ({ get: e }) => {
        let t = e(fe, e(ye)).data?.config,
          n = e(m, `4114442250`);
        if (t?.[`features.remote_connections`] === !0) return !0;
        let r = t?.features;
        return typeof r != `object` || !r || Array.isArray(r)
          ? n
          : Object.getOwnPropertyDescriptor(r, `remote_connections`)?.value === !0 || n;
      })),
      (O = f(c, ({ get: e }) =>
        e(D) ? e(Ce).filter((t) => e(le, t.hostId) === `connected`) : [],
      )),
      (k = f(c, ({ get: e }) => e(O).length > 0)),
      (A = t(c, ({ localProjectActionsEnabled: e }, { get: t }) => {
        let n = t(k),
          r = t(_e);
        return r === `project` && !e && n ? `connection` : r;
      })));
  });
function ke({ projectSidebarEnabled: e, organizeMode: t, showProjectsTitle: n, showRecent: r }) {
  return e
    ? r
      ? (0, F.jsx)(h, {
          id: `sidebarElectron.allChatsNavLink`,
          defaultMessage: `All chats`,
          description: `Section label above the chronological list of all chats in the sidebar`,
        })
      : t === `connection`
        ? (0, F.jsx)(h, {
            id: `sidebarElectron.connectionsNavLink`,
            defaultMessage: `Connections`,
            description: `Section label above connection thread groups in the sidebar`,
          })
        : n
          ? (0, F.jsx)(h, {
              id: `sidebarElectron.projectsNavLink`,
              defaultMessage: `Projects`,
              description: `Section label above project thread groups in the sidebar`,
            })
          : (0, F.jsx)(h, {
              id: `sidebarElectron.recentNavLink`,
              defaultMessage: `Chats`,
              description: `Section label above recent threads list in the sidebar`,
            })
    : (0, F.jsx)(h, {
        id: `sidebarElectron.cloudTasksNavLink`,
        defaultMessage: `Codex Cloud`,
        description: `Section label above cloud tasks in the browser sidebar`,
      });
}
function Ae({ projectSidebarEnabled: e, organizeMode: t, showProjectsTitle: n, showRecent: r }) {
  return e
    ? r
      ? `All chats`
      : t === `connection`
        ? `Connections`
        : n
          ? `Projects`
          : `Chats`
    : `Codex Cloud`;
}
function je({
  intl: e,
  organizeMode: t,
  projectSidebarEnabled: n,
  showProjectsTitle: r,
  showRecent: i,
}) {
  return n
    ? i
      ? e.formatMessage({
          id: `sidebarElectron.allChatsNavLink`,
          defaultMessage: `All chats`,
          description: `Section label above the chronological list of all chats in the sidebar`,
        })
      : t === `connection`
        ? e.formatMessage({
            id: `sidebarElectron.connectionsNavLink`,
            defaultMessage: `Connections`,
            description: `Section label above connection thread groups in the sidebar`,
          })
        : r
          ? e.formatMessage({
              id: `sidebarElectron.projectsNavLink`,
              defaultMessage: `Projects`,
              description: `Section label above project thread groups in the sidebar`,
            })
          : e.formatMessage({
              id: `sidebarElectron.recentNavLink`,
              defaultMessage: `Chats`,
              description: `Section label above recent threads list in the sidebar`,
            })
    : `Codex Cloud`;
}
function M(e, t) {
  return e
    .map((e, t) => ({ group: e, index: t }))
    .sort((e, n) => {
      let r = P(e.group.threadKeys, t)[0]?.at ?? -1 / 0,
        i = P(n.group.threadKeys, t)[0]?.at ?? -1 / 0;
      return r === i ? e.index - n.index : i - r;
    })
    .map(({ group: e }) => e);
}
function Me(e, t, n) {
  let r = new Map(t.map((e) => [e.projectId, e]));
  return M(
    e.map((e) => r.get(e.projectId) ?? e),
    n,
  );
}
function N(e, t) {
  return e.flatMap((e) => {
    let n = t.get(e);
    return n == null ? [] : [n];
  });
}
function P(e, t) {
  return N(e, t).map((e) => e.task);
}
function Ne({ defaultProjectLabel: e, projectLabel: t, repositoryLabel: n }) {
  if (e == null || t == null || n == null) return null;
  let r = t.trim(),
    i = n.trim();
  return i !== `` && i !== r && r !== e.trim() ? i : null;
}
function Pe({
  chatLabel: e,
  task: t,
  projectLabelByThreadKey: n,
  projectlessThreadIds: r,
  showProjectlessHoverCard: i = !1,
}) {
  let a = n.get(t.key)?.trim();
  if (a) return { isProjectless: !1, label: a };
  if (
    (t.kind === `local` &&
      (t.conversation.workspaceKind === `projectless` || r?.has(t.conversation.id) === !0)) ||
    (t.kind === `remote` && r?.has(t.task.id) === !0)
  )
    return { isProjectless: !0, label: i ? e : null };
  if (t.kind === `local`)
    return { isProjectless: !1, label: (t.conversation.cwd ? u(t.conversation.cwd) : ``) || e };
  if (t.kind === `remote`)
    return { isProjectless: !1, label: t.task.task_status_display?.environment_label ?? e };
  let o =
    t.pendingWorktree.sourceWorkspaceRoot ??
    t.pendingWorktree.worktreeWorkspaceRoot ??
    t.pendingWorktree.worktreeGitRoot;
  return { isProjectless: !1, label: o ? u(o) : e };
}
var F,
  I = e(() => {
    (ve(), d(), (F = ne()));
  });
function Fe(e) {
  return e.map((e) => ({
    task: e,
    isPinned: !1,
    isAutomationRun: !1,
    automationDisplayName: null,
  }));
}
function Ie({ items: e, projectlessThreadIds: t }) {
  return e.filter((e) => {
    switch (e.task.kind) {
      case `local`:
        return (
          e.task.conversation.workspaceKind === `projectless` ||
          t?.has(e.task.conversation.id) === !0
        );
      case `remote`:
        return t?.has(e.task.task.id) === !0;
      case `pending-worktree`:
        return !1;
    }
  });
}
function L(e) {
  return new Map(e.flatMap((e) => e.threadKeys.map((t) => [t, e.label])));
}
var R = e(() => {});
function Le(e, t) {
  let n = e(he, t);
  if (n == null || n === `needs_resume`) return !1;
  let r = e(ce, t);
  return r == null ? !1 : r === 0 ? n === `resuming` : e(me, t) === `inProgress`;
}
var Re,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  ze,
  Be,
  Ve,
  q,
  He,
  J,
  Ue,
  We = e(() => {
    (l(),
      n(),
      de(),
      ee(),
      se(),
      oe(),
      p(),
      o(),
      be(),
      I(),
      j(),
      xe(),
      b(),
      R(),
      S(),
      Te(),
      d(),
      (Re = []),
      (z = f(c, ({ get: e }) => e(ae).data?.threadIds ?? Re)),
      (B = f(c, ({ get: e }) => {
        let t = s(e, i.THREAD_PROJECT_ASSIGNMENTS),
          n = s(e, i.PROJECTLESS_THREAD_IDS);
        return e(Se, {
          threadKeys: e(g),
          enabled: !0,
          threadProjectAssignments: t,
          projectlessThreadIds: n,
        }).groups;
      })),
      (V = t(c, (e, { get: t }) => t(B).find((t) => t.threadKeys.includes(e)) ?? null)),
      (H = t(c, (e, { get: t }) => {
        let n = t(C, e);
        return n?.kind === `local`
          ? s(t, i.THREAD_PROJECT_ASSIGNMENTS)?.[n.conversation.id]
          : void 0;
      })),
      (U = f(c, ({ get: e }) => L(e(B)))),
      (W = t(c, (e, { get: t }) => {
        let n = _(e);
        switch (n?.kind) {
          case `pending-worktree`:
            return t(Ee, n.pendingWorktreeId)?.isPinned === !0;
          case `local`:
          case `remote`: {
            let n = x(e);
            return n != null && t(z).includes(n);
          }
          case void 0:
            return !1;
        }
      })),
      (G = t(c, (e, { get: t }) => {
        let n = y(e);
        return n != null && t(v).automationThreadIds.has(n);
      })),
      (K = t(c, (e, { get: t }) => {
        let n = y(e);
        return n == null ? null : (t(v).automationDisplayNames.get(n) ?? null);
      })),
      (ze = t(
        c,
        (e, { get: t }) => {
          let n = t(C, e);
          if (n == null) return null;
          let r = s(t, i.PROJECTLESS_THREAD_IDS);
          return Pe({
            chatLabel: t(ie).formatMessage({
              id: `sidebarElectron.threadHoverCardChatProject`,
              defaultMessage: `Chat`,
              description: `Fallback project label for a sidebar thread hover card when it does not belong to a project or workspace`,
            }),
            task: n,
            projectLabelByThreadKey: t(U),
            projectlessThreadIds: r == null ? void 0 : new Set(r),
            showProjectlessHoverCard: t(E),
          });
        },
        { isEqual: (e, t) => e?.isProjectless === t?.isProjectless && e?.label === t?.label },
      )),
      (Be = t(c, (e, { get: t }) => t(V, e)?.projectId ?? null)),
      (Ve = t(c, (e, { get: t }) => {
        let n = t(V, e)?.hostId;
        if (n == null) return null;
        let i = t(r, n);
        return i.id === n ? i : null;
      })),
      (q = t(c, (e, { get: t }) => {
        let n = t(C, e);
        return n?.kind === `local`
          ? a({ cwd: n.conversation.cwd ?? null, assignment: t(H, e) })
          : null;
      })),
      (He = t(c, (e, { get: t }) => {
        let n = t(V, e),
          r = t(C, e),
          i = n?.repositoryData?.rootFolder ?? null;
        if (
          i == null &&
          n?.projectKind === `local` &&
          r?.kind === `local` &&
          r.conversation.gitInfo != null &&
          t(H, e)?.pendingCoreUpdate !== !0
        ) {
          let n = r.conversation.gitInfo.originUrl,
            a = t(q, e);
          (n != null && (i = Oe(n)?.repoName ?? null),
            i == null && a != null && !re(a) && (i = u(a)));
        }
        return Ne({
          defaultProjectLabel: n?.path == null ? i : u(n.path),
          projectLabel: n?.label ?? null,
          repositoryLabel: i,
        });
      })),
      (J = t(c, (e, { get: t }) =>
        e == null ? null : (s(t, i.THREAD_WORKSPACE_ROOT_HINTS)?.[e] ?? null),
      )),
      (Ue = t(c, (e, { get: t }) =>
        e == null ? null : (s(t, i.SIDEBAR_THREAD_METADATA)?.[e]?.labelColor ?? null),
      )));
  });
function Ge(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < t.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (
      r == null ||
      i == null ||
      r.task !== i.task ||
      r.isPinned !== i.isPinned ||
      r.isAutomationRun !== i.isAutomationRun ||
      r.automationDisplayName !== i.automationDisplayName
    )
      return !1;
  }
  return !0;
}
function Ke(e, t) {
  let n = Y(e.allSidebarThreadKeys, t.allSidebarThreadKeys),
    r = Y(e.pinnedThreadKeys, t.pinnedThreadKeys),
    i = Y(e.unpinnedThreadKeys, t.unpinnedThreadKeys);
  return n === e.allSidebarThreadKeys && r === e.pinnedThreadKeys && i === e.unpinnedThreadKeys
    ? e
    : { allSidebarThreadKeys: n, pinnedThreadKeys: r, unpinnedThreadKeys: i };
}
function Y(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return t;
  return e;
}
function qe({ get: e, threadKeys: t, pinnedThreadIds: n }) {
  if (t.length === 0) return Z;
  let r = new Set(t),
    i = [];
  for (let n of t) _(n)?.kind === `pending-worktree` && e(W, n) && i.push(n);
  for (let e of n) {
    let t = De(te(e));
    if (r.has(t)) {
      i.push(t);
      continue;
    }
    let n = we(e);
    r.has(n) && i.push(n);
  }
  let a = new Set(i),
    o = new Set(n),
    s = t.filter((e) => {
      if (a.has(e)) return !1;
      let t = x(e);
      return t == null || !o.has(t);
    });
  return { allSidebarThreadKeys: [...i, ...s], pinnedThreadKeys: i, unpinnedThreadKeys: s };
}
var Je,
  X,
  Z,
  Q,
  Ye,
  $,
  Xe = e(() => {
    (l(),
      n(),
      p(),
      b(),
      S(),
      We(),
      (Je = []),
      (X = []),
      (Z = { allSidebarThreadKeys: X, pinnedThreadKeys: X, unpinnedThreadKeys: X }),
      (Q = new WeakMap()),
      (Ye = f(c, ({ get: e, scope: t }) => {
        let n = Ke(Q.get(t.node) ?? Z, qe({ get: e, threadKeys: e(g), pinnedThreadIds: e(z) }));
        return (Q.set(t.node, n), n);
      })),
      ($ = t(
        c,
        (e, { get: t }) =>
          e.length === 0
            ? Je
            : e.flatMap((e) => {
                let n = t(C, e);
                return n == null
                  ? []
                  : [
                      {
                        task: n,
                        isPinned: t(W, e),
                        isAutomationRun: t(G, e),
                        automationDisplayName: t(K, e),
                      },
                    ];
              }),
        { isEqual: Ge },
      )));
  });
export {
  Me as A,
  N as C,
  ke as D,
  je as E,
  w as F,
  A as M,
  k as N,
  I as O,
  j as P,
  R as S,
  Ae as T,
  V as _,
  Le as a,
  L as b,
  K as c,
  ze as d,
  Be as f,
  Ue as g,
  W as h,
  We as i,
  T as j,
  M as k,
  q as l,
  G as m,
  $ as n,
  z as o,
  He as p,
  Ye as r,
  U as s,
  Xe as t,
  Ve as u,
  J as v,
  P as w,
  Ie as x,
  Fe as y,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~5rsl7kw4.js.map
