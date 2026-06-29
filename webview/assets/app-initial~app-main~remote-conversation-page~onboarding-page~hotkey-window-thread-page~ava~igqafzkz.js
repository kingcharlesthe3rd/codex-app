import { n as e } from "./rolldown-runtime.js";
import {
  H as t,
  It as n,
  Lt as r,
  U as i,
  Wt as a,
  as as o,
  cs as s,
  hi as c,
  ho as l,
  ot as u,
  ut as d,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Fr as f,
  cr as p,
  dr as m,
  fr as h,
  sr as g,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Fo as _,
  Mo as v,
  No as y,
  Po as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Ca as x,
  Fa as S,
  If as C,
  Lb as w,
  Lf as T,
  Pa as E,
  Qy as D,
  Rb as O,
  Sa as k,
  Xi as A,
  Yi as j,
  Zy as M,
  _v as N,
  af as P,
  if as F,
  rf as I,
  yv as L,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { v as R } from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~eauejg03.js";
import {
  n as z,
  r as B,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~gox010hx.js";
import {
  n as V,
  t as H,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~miy2ua3n.js";
async function U({
  config: e,
  model: t,
  prompt: n,
  scope: r,
  sourceThreadId: i,
  target: a,
  thinking: o,
}) {
  if (e != null && i != null)
    throw Error(`createThread config is not supported for delegated thread creation`);
  if (a.type !== `projectless` && a.environment.type === `worktree`) {
    let e, s;
    if (a.type === `project`) {
      let t = await b({ projectId: a.projectId, prompt: n, validateProjectId: !0 });
      if (t?.projectlessOutputDirectory != null)
        throw Error(`Worktree threads require a project with exactly one directory`);
      ((e = t?.cwd ?? a.projectId),
        (s = v({ type: `assignment`, assignment: t?.projectAssignment, executionHostId: L })));
    } else {
      e = a.path;
      let { roots: t } = await u(`workspace-root-options`, { params: { hostId: a.hostId } });
      if (!t.includes(e))
        throw Error(
          `Unknown projectId: ${e}\nSaved projectIds:\n${t.join(`
`)}`,
        );
      s = v({ type: `remote-project`, projectId: a.projectId, hostId: a.hostId, path: a.path });
    }
    return G({
      hostId: a.type === `remoteProject` ? a.hostId : L,
      model: t,
      projectAssignment: s,
      projectPath: e,
      prompt: n,
      scope: r,
      sourceThreadId: i,
      startingState: a.environment.startingState,
      thinking: o,
    });
  }
  return W({ config: e, model: t, prompt: n, scope: r, sourceThreadId: i, target: a, thinking: o });
}
async function W({
  config: e,
  model: t,
  prompt: n,
  scope: r,
  sourceThreadId: i,
  target: a,
  thinking: o,
}) {
  let s,
    c,
    u,
    d,
    f,
    m = L;
  switch (a.type) {
    case `project`: {
      let e = await b({ projectId: a.projectId, prompt: n, validateProjectId: !0 });
      (e == null
        ? ((s = a.projectId), (u = [a.projectId]))
        : ((s = e.cwd),
          (u = e.workspaceRoots),
          (d = e.projectlessOutputDirectory),
          (f = e.projectAssignment)),
        (c = `project`));
      break;
    }
    case `remoteProject`:
      ((m = a.hostId),
        (s = a.path),
        (u = [a.path]),
        (c = `project`),
        (f = {
          projectKind: `remote`,
          projectId: a.projectId,
          path: a.path,
          hostId: a.hostId,
          pendingCoreUpdate: !1,
        }));
      break;
    case `projectless`: {
      let e = await z([`~`], { directoryName: a.directoryName, prompt: n });
      if (e.cwd == null) throw Error(`Missing projectless thread cwd`);
      ((s = e.cwd),
        (c = `projectless`),
        (u = e.workspaceRoots),
        (d = e.projectlessOutputDirectory));
      break;
    }
  }
  let h = await q(m, s, u, Y(r, i, m)),
    g = { type: `text`, text: n, text_elements: [] },
    _ = $(t, o),
    v = await O(`start-conversation`, {
      hostId: m,
      input: i == null ? [g] : M({ sourceThreadId: i, input: n }),
      cwd: s,
      workspaceRoots: u,
      collaborationMode: _,
      serviceTier: await p(r, m, _?.settings.model ?? null),
      threadSource: i == null ? `user` : `subagent`,
      permissions: h,
      approvalsReviewer: h.approvalsReviewer,
      config: e,
      projectAssignment: f,
      workspaceKind: c,
      projectlessOutputDirectory: d,
    });
  return (
    i == null || l(i),
    { threadId: v, ...(c === `projectless` ? { projectlessOutputDirectory: d } : {}) }
  );
}
async function G({
  hostId: e,
  model: t,
  projectAssignment: n,
  projectPath: r,
  prompt: i,
  scope: a,
  sourceThreadId: o,
  startingState: s,
  thinking: c,
}) {
  let l = [{ type: `text`, text: i, text_elements: [] }],
    u = o == null ? l : M({ sourceThreadId: o, input: i }),
    [d, f] = await Promise.all([
      J({
        input: u,
        hostId: e,
        model: t,
        projectAssignment: n,
        projectPath: r,
        scope: a,
        sourcePermissionSelection: Y(a, o, e),
        threadSource: o == null ? `user` : `subagent`,
        thinking: c,
      }),
      s ?? K(a, e, r),
    ]);
  return {
    pendingWorktreeId: H({
      hostId: e,
      label: m(l),
      sourceWorkspaceRoot: r,
      startingState: f,
      localEnvironmentConfigPath: null,
      launchMode: `start-conversation`,
      prompt: i,
      startConversationParamsInput: d,
      sourceConversationId: null,
      sourceCollaborationMode: null,
      navigateOnSuccess: !1,
    }),
  };
}
async function K(e, t, n) {
  let r = e.get(j, t),
    a = await i(`git`).request({
      method: `stable-metadata`,
      params: { cwd: c(n), hostConfig: r, operationSource: `worktree_pending_create` },
    });
  if (a == null) return { type: `branch`, branchName: `main` };
  let { branch: o } = await i(`git`).request({
    method: `default-branch`,
    params: { root: a.root, hostConfig: r, operationSource: `worktree_pending_create` },
  });
  return { type: `branch`, branchName: o ?? `main` };
}
async function q(e, t, n, r) {
  let { config: i } = await O(`read-config-for-host`, { hostId: e, includeLayers: !1, cwd: t }),
    a = Z(t, r);
  if (a?.sourceCwd === t) return Q(a.permissions, n);
  let s = o(X(e, a), n, i),
    c = a?.permissionProfileId;
  return (
    c != null &&
      ((s.activePermissionProfile = { extends: null, id: c }), (s.runtimeWorkspaceRoots = n)),
    s
  );
}
async function J({
  hostId: e,
  input: t,
  model: n,
  projectAssignment: r,
  projectPath: i,
  scope: a,
  sourcePermissionSelection: o,
  threadSource: s,
  thinking: c,
}) {
  let { config: l } = await O(`read-config-for-host`, { hostId: e, includeLayers: !1, cwd: i }),
    u = $(n, c),
    d = Z(i, o),
    f = d?.permissionProfileId;
  return {
    input: t,
    workspaceRoots: [i],
    cwd: i,
    fileAttachments: [],
    addedFiles: [],
    agentMode: X(e, d),
    permissionProfileId: f ?? void 0,
    shouldSendPermissionOverrides: !0,
    model: null,
    serviceTier: await p(a, e, u?.settings.model ?? null),
    reasoningEffort: null,
    collaborationMode: u,
    config: C(l),
    threadSource: s,
    workspaceKind: `project`,
    projectAssignment: r,
  };
}
function Y(e, t, n) {
  if (t == null) return null;
  let r = l(t);
  if (e.get(E, r) !== n) return null;
  let i = e.get(k, r);
  if (i == null) return null;
  let a = s(i);
  return a == null
    ? null
    : {
        agentMode: a,
        permissions: i,
        permissionProfileId: i.activePermissionProfile?.id ?? null,
        sourceCwd: e.get(x, r),
      };
}
function X(e, t) {
  return t?.agentMode ?? n(`agent-mode-by-host-id`, {})[e] ?? `auto`;
}
function Z(e, t) {
  if (t == null) return null;
  let n = t.permissionProfileId;
  return t.sourceCwd === e
    ? t
    : t.agentMode === `custom` || t.agentMode === `guardian-approvals`
      ? null
      : n?.startsWith(`:`) === !0
        ? t
        : null;
}
function Q(e, t) {
  return {
    ...e,
    runtimeWorkspaceRoots: F(e.runtimeWorkspaceRoots ?? [], t),
    sandboxPolicy: P(e.sandboxPolicy, t),
  };
}
function $(e, t) {
  return e == null && t == null
    ? null
    : {
        mode: `default`,
        settings: {
          model: e ?? `gpt-5.5`,
          reasoning_effort: t ?? `medium`,
          developer_instructions: null,
        },
      };
}
var ee = e(() => {
  (a(), S(), w(), h(), T(), g(), f(), R(), D(), B(), _(), A(), N(), I(), r(), d(), t(), y(), V());
});
export { ee as n, U as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~ava~igqafzkz.js.map
