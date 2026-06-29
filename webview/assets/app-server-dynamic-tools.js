import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Bi as t,
  Hr as n,
  Ji as r,
  Ki as i,
  Kn as a,
  Pt as o,
  Qi as s,
  Qr as c,
  S as l,
  U as u,
  Un as d,
  na as f,
  oa as p,
  sa as m,
  ta as h,
  vn as g,
} from "./src-2.js";
import {
  Co as _,
  E as v,
  Eo as y,
  Ga as b,
  Gi as x,
  Ki as S,
  Kr as C,
  Qt as w,
  R as T,
  So as ee,
  To as te,
  Ua as ne,
  Wa as re,
  Wo as E,
  Ya as ie,
  _ as ae,
  as as oe,
  bo as se,
  fs as D,
  g as ce,
  ia as le,
  io as O,
  is as ue,
  lr as k,
  mo as de,
  nt as fe,
  pr as pe,
  sr as A,
  ss as me,
  us as he,
  vo as ge,
  w as _e,
  wo as ve,
  xo as ye,
  zr as be,
} from "./app-server-manager-signals.js";
import { t as xe } from "./v4.js";
import { G as Se, f as Ce, g as j, h as we, n as M } from "./vscode-api.js";
import { l as Te } from "./persisted-signal-CweW-bgN.js";
import { f as Ee } from "./statsig.js";
import { o as De } from "./thread-context-inputs.js";
import { t as Oe } from "./setting-storage.js";
import { i as ke } from "./models-and-reasoning-efforts.js";
import { t as Ae } from "./remote-projects.js";
import "./permissions-mode-defaults.js";
import { n as je } from "./projectless-thread.js";
import { t as N } from "./app-intl-signal-B.js";
import { t as Me } from "./local-projects.js";
import { t as Ne } from "./build-worktree-label-from-input.js";
import { t as Pe } from "./read-service-tier-for-request.js";
import { t as Fe } from "./pending-worktree-store.js";
import { r as Ie } from "./thread-actions.js";
import { t as Le } from "./workspace-dependencies-feature.js";
import { t as Re } from "./score-query-match.js";
import { r as ze } from "./thread-handoff-composer-block-state.js";
import { t as Be } from "./get-default-branch-name.js";
import { t as P } from "./worktree-query-keys-BT7X-Utw.js";
import { t as Ve } from "./get-move-to-local-targets.js";
async function He({
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
  return a.type === `project` && a.environment.type === `worktree`
    ? We({
        model: t,
        projectId: a.projectId,
        prompt: n,
        scope: r,
        sourceThreadId: i,
        startingState: a.environment.startingState,
        thinking: o,
      })
    : Ue({ config: e, model: t, prompt: n, scope: r, sourceThreadId: i, target: a, thinking: o });
}
async function Ue({
  config: e,
  model: t,
  prompt: n,
  scope: r,
  sourceThreadId: i,
  target: a,
  thinking: o,
}) {
  let s, c, l, u, d;
  switch (a.type) {
    case `project`: {
      let e = await Me({ projectId: a.projectId, prompt: n, validateProjectId: !0 });
      (e == null
        ? ((s = a.projectId), (l = [a.projectId]))
        : ((s = e.cwd),
          (l = e.workspaceRoots),
          (u = e.projectlessOutputDirectory),
          (d = e.projectAssignment)),
        (c = `project`));
      break;
    }
    case `projectless`: {
      let e = await je([`~`], { directoryName: a.directoryName, prompt: n });
      if (e.cwd == null) throw Error(`Missing projectless thread cwd`);
      ((s = e.cwd),
        (c = `projectless`),
        (l = e.workspaceRoots),
        (u = e.projectlessOutputDirectory));
      break;
    }
  }
  let f = await Ge(s, l),
    p = { type: `text`, text: n, text_elements: [] },
    m = qe(t, o);
  return {
    threadId: await D(`start-conversation`, {
      hostId: E,
      input: i == null ? [p] : re({ sourceThreadId: i, input: n }),
      cwd: s,
      workspaceRoots: l,
      collaborationMode: m,
      serviceTier: await Pe(r, E, m?.settings.model ?? null),
      threadSource: i == null ? `user` : `subagent`,
      permissions: f,
      approvalsReviewer: f.approvalsReviewer,
      ...(e == null ? {} : { config: e }),
      ...(d === void 0 ? {} : { projectAssignment: d }),
      workspaceKind: c,
      ...(u === void 0 ? {} : { projectlessOutputDirectory: u }),
    }),
    ...(c === `projectless` ? { projectlessOutputDirectory: u } : {}),
  };
}
async function We({
  model: e,
  projectId: t,
  prompt: n,
  scope: r,
  sourceThreadId: i,
  startingState: a,
  thinking: o,
}) {
  let { roots: s } = await M(`workspace-root-options`, { params: { hostId: E } });
  if (!s.includes(t))
    throw Error(
      `Unknown projectId: ${t}\nSaved projectIds:\n${s.join(`
`)}`,
    );
  let c = [{ type: `text`, text: n, text_elements: [] }],
    l = await Ke({
      input: i == null ? c : re({ sourceThreadId: i, input: n }),
      model: e,
      projectId: t,
      scope: r,
      threadSource: i == null ? `user` : `subagent`,
      thinking: o,
    });
  return {
    pendingWorktreeId: Fe({
      hostId: E,
      label: Ne(c),
      sourceWorkspaceRoot: t,
      startingState: a ?? { type: `working-tree` },
      localEnvironmentConfigPath: null,
      launchMode: `start-conversation`,
      prompt: n,
      startConversationParamsInput: l,
      sourceConversationId: null,
      sourceCollaborationMode: null,
      navigateOnSuccess: !1,
    }),
  };
}
async function Ge(e, t) {
  let { config: n } = await D(`read-config-for-host`, { hostId: E, includeLayers: !1, cwd: e });
  return o(Te(`agent-mode-by-host-id`, {}).local ?? `auto`, t, n);
}
async function Ke({ input: e, model: t, projectId: n, scope: r, threadSource: i, thinking: a }) {
  let { config: o } = await D(`read-config-for-host`, { hostId: E, includeLayers: !1, cwd: n }),
    s = qe(t, a);
  return {
    input: e,
    workspaceRoots: [n],
    cwd: n,
    fileAttachments: [],
    addedFiles: [],
    agentMode: Te(`agent-mode-by-host-id`, {}).local ?? `auto`,
    model: null,
    serviceTier: await Pe(r, E, s?.settings.model ?? null),
    reasoningEffort: null,
    collaborationMode: s,
    config: he(o),
    threadSource: i,
    workspaceKind: `project`,
  };
}
function qe(e, t) {
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
async function Je({ pinned: e, threadId: t }) {
  return (
    await M(`set-thread-pinned`, { params: { threadId: t, pinned: e } }), { threadId: t, pinned: e }
  );
}
async function Ye({ scope: e, archived: t, hostId: n, threadId: r }) {
  let i = c(r);
  return (
    t
      ? await D(`archive-conversation`, { conversationId: i, source: `dynamic_tool` })
      : await D(`unarchive-conversation`, { hostId: n ?? Ze(e, i), conversationId: i }),
    { threadId: r, archived: t }
  );
}
async function Xe({ threadId: e, title: t }) {
  return (
    await D(`set-thread-title`, { conversationId: c(e), title: t }), { threadId: e, title: t }
  );
}
function Ze(e, t) {
  if (!e.get(_e, t)) throw Error(`set_thread_archived requires hostId for unloaded thread ${t}`);
  return e.get(v, t) ?? `local`;
}
async function Qe({
  scope: e,
  cursor: t,
  includeOutputs: n,
  maxOutputCharsPerItem: r,
  threadId: i,
  turnLimit: a,
}) {
  let { thread: o } = await e.get(ae).readThread(i, { includeTurns: !0 }),
    s = t == null ? o.turns.length : o.turns.findIndex((e) => e.id === t);
  if (s < 0) throw Error(`Unknown cursor for thread ${i}: ${t}`);
  let c = o.turns.slice(0, s),
    l = c.slice(-a).reverse();
  return {
    schemaVersion: 1,
    thread: {
      id: o.id,
      title: o.name,
      preview: o.preview,
      status: $e(o.status),
      cwd: o.cwd,
      createdAt: o.createdAt,
      updatedAt: o.updatedAt,
    },
    page: {
      order: `newest_first`,
      limit: a,
      nextCursor: c.length > l.length ? (l.at(-1)?.id ?? null) : null,
      hasMore: c.length > l.length,
    },
    turns: l.map((e) => et(e, n, r)),
  };
}
function $e(e) {
  switch (e.type) {
    case `active`:
      return { type: `active`, activeFlags: e.activeFlags };
    case `idle`:
    case `notLoaded`:
    case `systemError`:
      return { type: e.type };
  }
}
function et(e, t, n) {
  return {
    id: e.id,
    status: e.status,
    error:
      e.error == null
        ? null
        : { message: e.error.message, additionalDetails: e.error.additionalDetails },
    startedAt: e.startedAt,
    completedAt: e.completedAt,
    durationMs: e.durationMs,
    items: e.items.map((e) => tt(e, t, n)),
  };
}
function tt(e, t, n) {
  switch (e.type) {
    case `userMessage`:
      return { type: e.type, id: e.id, content: e.content.map(nt) };
    case `agentMessage`:
      return { type: e.type, id: e.id, text: e.text, phase: e.phase };
    case `plan`:
      return { type: e.type, id: e.id, text: e.text };
    case `reasoning`:
      return {
        type: e.type,
        id: e.id,
        summary: e.summary,
        ...(t ? { content: e.content.map((e) => F(e, n)) } : {}),
      };
    case `commandExecution`:
      return {
        type: e.type,
        id: e.id,
        command: e.command,
        cwd: e.cwd,
        status: e.status,
        exitCode: e.exitCode,
        durationMs: e.durationMs,
        ...(t && e.aggregatedOutput != null ? { output: F(e.aggregatedOutput, n) } : {}),
      };
    case `fileChange`:
      return {
        type: e.type,
        id: e.id,
        status: e.status,
        changes: e.changes.map((e) => ({
          path: e.path,
          kind: e.kind,
          ...(t ? { diff: F(e.diff, n) } : {}),
        })),
      };
    case `mcpToolCall`:
      return {
        type: e.type,
        id: e.id,
        server: e.server,
        tool: e.tool,
        arguments: e.arguments,
        status: e.status,
        durationMs: e.durationMs,
      };
    case `dynamicToolCall`:
      return {
        type: e.type,
        id: e.id,
        tool: e.tool,
        arguments: e.arguments,
        status: e.status,
        success: e.success,
        durationMs: e.durationMs,
      };
    case `collabAgentToolCall`:
      return {
        type: e.type,
        id: e.id,
        tool: e.tool,
        status: e.status,
        senderThreadId: e.senderThreadId,
        receiverThreadIds: e.receiverThreadIds,
        prompt: e.prompt,
        model: e.model,
        reasoningEffort: e.reasoningEffort,
      };
    case `webSearch`:
      return { type: e.type, id: e.id, query: e.query, action: e.action };
    case `imageView`:
      return { type: e.type, id: e.id, path: e.path };
    case `imageGeneration`:
      return {
        type: e.type,
        id: e.id,
        status: e.status,
        revisedPrompt: e.revisedPrompt,
        result: e.result,
        savedPath: e.savedPath ?? null,
      };
    case `enteredReviewMode`:
    case `exitedReviewMode`:
      return { type: e.type, id: e.id, review: e.review };
    case `hookPrompt`:
      return { type: e.type, id: e.id, fragmentCount: e.fragments.length };
    case `contextCompaction`:
      return { type: e.type, id: e.id };
  }
}
function nt(e) {
  switch (e.type) {
    case `text`: {
      let t = b(e.text);
      return {
        type: e.type,
        text: e.text,
        ...(t == null
          ? {}
          : { codexDelegation: { sourceThreadId: t.sourceThreadId, input: t.input } }),
      };
    }
    case `image`:
      return { type: e.type, url: e.url };
    case `localImage`:
      return { type: e.type, path: e.path };
    case `skill`:
    case `mention`:
      return { type: e.type, name: e.name, path: e.path };
  }
}
function F(e, t) {
  return e.length <= t
    ? { text: e, truncated: !1 }
    : { text: e.slice(0, t), truncated: !0, originalChars: e.length };
}
function I({ sourceConversationId: e, targetConversationId: t, diffComments: n }) {
  if (e === t || n == null) return n;
  let r = n[e];
  if (r == null) return n;
  let i = { ...n };
  return ((i[t] = r), delete i[e], i);
}
function rt(e) {
  if (typeof window > `u`) return e === E;
  let t = window.electronBridge?.getSharedObjectSnapshotValue?.(`host_config`) ?? null;
  return t == null ? e === E : t.id === e && t.kind === `local`;
}
function it(e) {
  let t = e.name?.trim() || e.preview.trim();
  return t.length > 0 ? t : e.id;
}
function at(e, t, n) {
  return st(
    e.map((e) => ot(e)),
    t,
    n,
  );
}
function ot(e) {
  let t = Number(e.updatedAt) * 1e3;
  return { threadId: e.id, title: it(e), cwd: e.cwd, updatedAt: Number.isFinite(t) ? t : 0 };
}
function st(e, t, n) {
  if (n <= 0) return [];
  let r = t.trim();
  if (r.length === 0) return [];
  let i = [];
  for (let t of e) {
    let e = ct(t, r);
    if (!e) continue;
    let a = { candidate: t, match: e };
    if (i.length < n) {
      i.push(a);
      continue;
    }
    let o = lt(i);
    L(a, i[o]) < 0 && (i[o] = a);
  }
  return (i.sort(L), i.map(({ candidate: e }) => e));
}
function ct(e, t) {
  return R(e.title, t, 0) ?? R(e.branch ?? ``, t, 1) ?? R(e.cwd, t, 2);
}
function lt(e) {
  let t = 0;
  for (let n = 1; n < e.length; n += 1) L(e[t], e[n]) < 0 && (t = n);
  return t;
}
function L(e, t) {
  let n = e.match.fieldPriority - t.match.fieldPriority;
  if (n !== 0) return n;
  let r = t.match.score - e.match.score;
  return r === 0 ? t.candidate.updatedAt - e.candidate.updatedAt : r;
}
function R(e, t, n) {
  let r = Re(e, t);
  return r === 0 ? null : { fieldPriority: n, score: r };
}
var z = [
  `prepare-host-transfer`,
  `transfer-host-artifacts`,
  `create-new-worktree`,
  `reuse-existing-worktree`,
  `stash-source-changes`,
  `detach-worktree-branch`,
  `checkout-local-branch`,
  `stash-target-worktree-changes`,
  `checkout-worktree-branch`,
  `apply-changes-to-worktree`,
  `apply-changes-to-local`,
  `switching-thread`,
];
async function B({ scope: e, sourceConversationId: t, targetConversationId: n }) {
  t !== n && (await w(e, { sourceThreadId: t, targetThreadId: n }));
}
async function V({ sourceConversationId: e, targetConversationId: t }) {
  if (e === t) return;
  let { threadIds: n } = await M(`list-pinned-threads`, {});
  n.indexOf(e) !== -1 &&
    (await M(`set-pinned-threads-order`, {
      params: {
        threadIds: n.map((n) => (n === e ? t : n)).filter((e, t, n) => n.indexOf(e) === t),
      },
    }));
}
async function H({ sourceConversationId: e, targetConversationId: t, getTitle: n, setTitle: r }) {
  if (e === t) return;
  let i = n(e);
  i != null && (await r(t, i));
}
async function ut({
  conversationId: e,
  sourceBranch: t,
  cwd: n,
  destinationWorkspaceRoot: r,
  intl: i,
  appServerManager: a,
  sourceHostConfig: o,
  destinationHostConfig: s,
  transferBrowserState: c,
  setDiffComments: l,
  scope: u,
  queryClient: d,
  operationId: f,
  onSwitchingThreadStart: p,
  onSwitchingThreadDone: m,
  onSwitchingThreadFailed: h,
  onTargetConversationId: _,
  onStepStatus: v,
}) {
  let y = a.getConversation(e),
    b = y?.rolloutPath ?? null;
  if (b == null || b.trim().length === 0)
    return {
      status: `error`,
      message: i.formatMessage({
        id: `localConversation.moveToHostWorktree.error.rolloutMissing`,
        defaultMessage: `This chat does not have a rollout file to move`,
        description: `Error shown when cross-host handoff cannot find the source rollout file`,
      }),
      execOutput: null,
    };
  let x = null,
    S = null,
    C = !1;
  if (y?.forkedFromId != null)
    try {
      let e = await k(`git`).request({
        method: `resolve-worktree-for-thread`,
        params: {
          cwd: r,
          conversationId: y.forkedFromId,
          hostConfig: s,
          operationSource: `move_to_host_worktree`,
        },
      });
      ((x = e.worktreeGitRoot), (S = e.worktreeWorkspaceRoot), (C = e.hasUncommittedChanges));
    } catch {
      j.warning(
        `Failed to resolve a reusable cross-host worktree. Falling back to creating a new worktree.`,
      );
    }
  x != null &&
    S != null &&
    (v?.(`reuse-existing-worktree`, `running`), v?.(`reuse-existing-worktree`, `done`));
  let w = await k(`git`).request({
    method: `move-thread-to-host-worktree`,
    params: {
      operationId: f,
      hostConfig: o,
      operationSource: `move_to_host_worktree`,
      sourceCwd: n,
      sourceBranch: t,
      sourceRolloutPath: b,
      destinationHostConfig: s,
      destinationWorkspaceRoot: r,
      destinationWorktreeGitRoot: x,
      destinationWorktreeWorkspaceRoot: S,
      stashDestinationWorktree: C,
    },
  });
  if (w.status === `error`)
    return {
      status: `error`,
      message: i.formatMessage(
        {
          id: `localConversation.moveToHostWorktree.error.move`,
          defaultMessage: `Failed to continue on another host: {message}`,
          description: `Error shown when cross-host handoff git or artifact transfer fails`,
        },
        { message: w.message },
      ),
      execOutput: w.execOutput ?? null,
    };
  (d.invalidateQueries({ queryKey: P(A(s)) }), p?.());
  let T;
  try {
    T = await D(`fork-conversation-from-rollout-path`, {
      hostId: s.id,
      conversationId: e,
      rolloutPath: w.rolloutPath,
      cwd: w.worktreeWorkspaceRoot,
      workspaceRoots: [w.worktreeWorkspaceRoot],
      addForkedSyntheticItem: !1,
    });
  } catch (t) {
    try {
      await M(`worktree-set-owner-thread`, {
        params: { hostId: s.id, worktree: w.worktreeGitRoot, conversationId: e },
      });
    } catch {}
    return (
      j.warning(`Cross-host handoff moved git state, but conversation fork failed: {}`, {
        sensitive: { error: g(t) },
        safe: {},
      }),
      h?.(),
      { status: `success`, conversationId: e }
    );
  } finally {
    await U(`Cross-host handoff copied rollout cleanup failed: {}`, () =>
      k(`git`).request({
        method: `cleanup-host-handoff-transfer`,
        params: {
          hostConfig: s,
          operationSource: `move_to_host_worktree`,
          rolloutPath: w.rolloutPath,
        },
      }),
    );
  }
  return (
    _?.(T),
    await pe(T, t),
    await U(
      `Cross-host handoff succeeded, but worktree ownership metadata could not be updated: {}`,
      () =>
        M(`worktree-set-owner-thread`, {
          params: { hostId: s.id, worktree: w.worktreeGitRoot, conversationId: T },
        }),
    ),
    await U(`Cross-host handoff succeeded, but browser state could not be transferred: {}`, () =>
      c(e, T),
    ),
    await U(`Cross-host handoff succeeded, but thread title could not be transferred: {}`, () =>
      H({
        sourceConversationId: e,
        targetConversationId: T,
        getTitle: (e) => a.getConversation(e)?.title ?? null,
        setTitle: (e, t) => D(`set-thread-title`, { conversationId: e, title: t }),
      }),
    ),
    await U(
      `Cross-host handoff succeeded, but saved diff comments could not be transferred: {}`,
      () => {
        l((t) => I({ sourceConversationId: e, targetConversationId: T, diffComments: t }));
      },
    ),
    await U(
      `Cross-host handoff succeeded, but pinned-thread state could not be transferred: {}`,
      () => V({ sourceConversationId: e, targetConversationId: T }),
    ),
    await U(
      `Cross-host handoff succeeded, but custom sidebar sections could not be transferred: {}`,
      () => B({ scope: u, sourceConversationId: e, targetConversationId: T }),
    ),
    m?.(),
    { status: `success`, conversationId: T }
  );
}
async function U(e, t) {
  try {
    await t();
  } catch (t) {
    j.warning(e, { sensitive: { error: g(t) }, safe: {} });
  }
}
async function dt({
  scope: e,
  conversationId: t,
  currentBranch: n,
  cwd: r,
  localGitRoot: i,
  localWorkspaceRoot: o,
  worktreeRoot: s,
  branchCheckedOutElsewhere: c,
  intl: l,
  appServerManager: u,
  transferBrowserState: d,
  setDiffComments: f,
  hostConfig: p,
  operationId: m,
  onSwitchingThreadStart: h,
  onSwitchingThreadDone: _,
  onSwitchingThreadFailed: v,
  onTargetConversationId: y,
}) {
  if (i == null || o == null || s == null || c)
    return {
      status: `error`,
      message: l.formatMessage({
        id: `localConversation.moveToLocal.error.prerequisites`,
        defaultMessage: `Unable to move right now. Check local workspace state and retry.`,
        description: `Error shown when move-to-local cannot start due to missing prerequisites`,
      }),
    };
  let b = a(o);
  if (b == null)
    return {
      status: `error`,
      message: l.formatMessage(
        {
          id: `localConversation.moveToLocal.error.fork`,
          defaultMessage: `{message}`,
          description: `Error shown when Move to local fails`,
        },
        { message: `Invalid local workspace root` },
      ),
    };
  let x = await k(`git`).request({
    method: `move-thread-to-local`,
    params: {
      operationId: m,
      hostConfig: p,
      operationSource: `move_to_local_dialog`,
      sourceWorktreeCwd: r,
      sourceWorktreeRoot: s,
      localGitRoot: i,
      sourceBranch: n,
    },
  });
  if (x.status === `error`) {
    let e =
      x.rollbackErrors.length > 0
        ? l.formatMessage({
            id: `localConversation.moveToLocal.error.rollbackIssues`,
            defaultMessage: ` Some cleanup steps could not be completed`,
            description: `Suffix appended to move-to-local error message when rollback has issues`,
          })
        : ``;
    return {
      status: `error`,
      message: `${ft({ branch: n, error: x.error, intl: l })}${e}`,
      execOutput: x.execOutput,
    };
  }
  (x.warnings.includes(`drop-source-stash-failed`) &&
    j.warning(`Move to local succeeded, but source stash cleanup failed`),
    h?.());
  let S;
  try {
    S = await D(`fork-conversation-from-latest`, {
      hostId: u.getHostId(),
      conversationId: t,
      cwd: b,
      workspaceRoots: [b],
      addForkedSyntheticItem: !1,
    });
  } catch (e) {
    return (
      j.warning(`Move to local git operations succeeded, but conversation fork failed: {}`, {
        sensitive: { error: g(e) },
        safe: {},
      }),
      v?.(),
      { status: `success`, conversationId: t }
    );
  }
  y?.(S);
  try {
    await M(`worktree-set-owner-thread`, {
      params: { hostId: p.id, worktree: s, conversationId: S },
    });
  } catch (e) {
    j.warning(`Move to local succeeded, but worktree ownership metadata could not be updated: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    d(t, S);
  } catch (e) {
    j.warning(`Move to local succeeded, but browser state could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    await H({
      sourceConversationId: t,
      targetConversationId: S,
      getTitle: (e) => u.getConversation(e)?.title ?? null,
      setTitle: (e, t) => D(`set-thread-title`, { conversationId: e, title: t }),
    });
  } catch (e) {
    j.warning(`Move to local succeeded, but thread title could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    f((e) => I({ sourceConversationId: t, targetConversationId: S, diffComments: e }));
  } catch (e) {
    j.warning(`Move to local succeeded, but saved diff comments could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    await V({ sourceConversationId: t, targetConversationId: S });
  } catch (e) {
    j.warning(`Move to local succeeded, but pinned-thread state could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    await B({ scope: e, sourceConversationId: t, targetConversationId: S });
  } catch (e) {
    j.warning(`Move to local succeeded, but custom sidebar sections could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  return (_?.(), { status: `success`, conversationId: S });
}
function ft({ branch: e, error: t, intl: n }) {
  switch (t) {
    case `invalid-params`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.invalidParams`,
        defaultMessage: `Unable to move right now. Check local workspace state and retry`,
        description: `Error shown when move-to-local receives invalid worker parameters`,
      });
    case `branch-checked-out-elsewhere`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.branchCheckedOutElsewhere`,
        defaultMessage: `Branch is already checked out in another worktree`,
        description: `Error shown when move-to-local cannot use a branch that is checked out in another worktree`,
      });
    case `source-detach-failed`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.sourceDetachFailed`,
        defaultMessage: `Failed to detach the worktree branch`,
        description: `Error shown when move-to-local cannot detach the source worktree`,
      });
    case `local-status-check-failed`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.localStatusCheckFailed`,
        defaultMessage: `Unable to determine whether the local workspace is clean`,
        description: `Error shown when move-to-local cannot read the destination workspace status`,
      });
    case `local-destination-has-tracked-changes`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.localDestinationHasTrackedChanges`,
        defaultMessage: `Stash or commit your local changes to hand off`,
        description: `Error shown when move-to-local is blocked by local workspace changes`,
      });
    case `local-branch-head-mismatch`:
      return n.formatMessage(
        {
          id: `localConversation.moveToLocal.error.localBranchHeadMismatch`,
          defaultMessage: `Branch “{branch}” already exists at a different commit`,
          description: `Error shown when move-to-local finds that the requested local branch points at a different commit`,
        },
        { branch: e },
      );
    case `checkout-local-failed`:
      return n.formatMessage(
        {
          id: `localConversation.moveToLocal.error.checkoutLocalFailed`,
          defaultMessage: `Failed to check out branch “{branch}” locally`,
          description: `Error shown when move-to-local cannot check out the destination branch`,
        },
        { branch: e },
      );
    case `apply-source-stash-failed`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.applySourceStashFailed`,
        defaultMessage: `Failed to apply worktree changes locally`,
        description: `Error shown when move-to-local cannot apply the source worktree changes`,
      });
    case `rollback-failed`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.rollbackFailed`,
        defaultMessage: `Failed to restore state after the handoff failed`,
        description: `Error shown when move-to-local cannot restore state after a failed operation`,
      });
    case `unexpected-error`:
      return n.formatMessage({
        id: `localConversation.moveToLocal.error.unexpected`,
        defaultMessage: `Failed to move to local`,
        description: `Fallback error shown when move-to-local fails`,
      });
  }
}
async function pt({
  scope: e,
  conversationId: t,
  currentBranch: n,
  cwd: r,
  worktreeCheckoutBranch: i,
  selectedLocalCheckoutBranch: a,
  intl: o,
  appServerManager: s,
  defaultBranch: c,
  transferBrowserState: l,
  setDiffComments: u,
  hostConfig: d,
  queryClient: f,
  operationId: p,
  onStepStatus: m,
  onTargetConversationId: h,
}) {
  let _ = i.trim();
  if (_.length === 0)
    return {
      status: `error`,
      message: o.formatMessage({
        id: `localConversation.moveToWorktree.error.branchRequired`,
        defaultMessage: `Worktree branch name is required`,
        description: `Error shown when move-to-worktree is attempted without a target worktree branch name`,
      }),
      execOutput: null,
    };
  let v = null,
    y = null,
    b = !1,
    x = !1,
    S = `create-new-worktree`;
  try {
    let e = await k(`git`).request({
      method: `resolve-worktree-for-thread`,
      params: {
        cwd: r,
        conversationId: t,
        hostConfig: d,
        operationSource: `move_to_worktree_dialog`,
      },
    });
    ((v = e.worktreeGitRoot), (y = e.worktreeWorkspaceRoot), (x = e.hasUncommittedChanges));
  } catch {
    j.warning(
      `Failed to resolve an existing worktree for thread. Falling back to creating a new worktree.`,
    );
  }
  if (v != null && y != null) ((S = `reuse-existing-worktree`), m?.(S, `running`), m?.(S, `done`));
  else {
    m?.(S, `running`);
    try {
      let e = await M(`worktree-create-managed`, {
        params: {
          hostId: d.id,
          cwd: r,
          startingState: { type: `branch`, branchName: n },
          localEnvironmentConfigPath: null,
          streamId: xe(),
        },
      });
      ((v = e.worktreeGitRoot),
        (y = e.worktreeWorkspaceRoot),
        (b = !0),
        (x = !1),
        m?.(S, `done`),
        f.invalidateQueries({ queryKey: P(A(d)) }));
    } catch (e) {
      return (
        m?.(S, `failed`),
        {
          status: `error`,
          message: o.formatMessage(
            {
              id: `localConversation.moveToWorktree.error.createWorktree`,
              defaultMessage: `Failed to create worktree: {message}`,
              description: `Error shown when Move to worktree fails to create a worktree`,
            },
            { message: g(e) },
          ),
          execOutput: null,
        }
      );
    }
  }
  if (v == null || y == null)
    return {
      status: `error`,
      message: o.formatMessage({
        id: `localConversation.moveToWorktree.error.unknown`,
        defaultMessage: `Failed to move to worktree. Please retry.`,
        description: `Fallback error shown when move-to-worktree fails`,
      }),
      execOutput: null,
    };
  let C = await M(`git-create-branch`, {
    source: `move_to_worktree_dialog`,
    params: { cwd: y, branch: _, hostId: d.id, mode: `worktree` },
  });
  if (C.status === `error`) {
    if (b)
      try {
        await M(`worktree-delete`, {
          params: { hostId: d.id, worktree: v, reason: `new-branch-cleanup` },
        });
      } catch (e) {
        j.warning(`Failed to clean up the newly created worktree: {}`, {
          sensitive: { error: g(e) },
          safe: {},
        });
      } finally {
        f.invalidateQueries({ queryKey: P(A(d)) });
      }
    return {
      status: `error`,
      message: o.formatMessage(
        {
          id: `localConversation.moveToWorktree.error.prepareBranch`,
          defaultMessage: `Failed to prepare worktree branch “{branch}”: {message}`,
          description: `Error shown when move-to-worktree cannot create or resolve the target worktree branch`,
        },
        { branch: _, message: C.error },
      ),
      execOutput: C.execOutput,
    };
  }
  let w = await k(`git`).request({
    method: `move-thread-to-worktree`,
    params: {
      operationId: p,
      hostConfig: d,
      operationSource: `move_to_worktree_dialog`,
      localCwd: r,
      sourceBranch: n,
      defaultBranch: c,
      localCheckoutBranch: a,
      worktreeCheckoutBranch: _,
      worktreeGitRoot: v,
      worktreeWorkspaceRoot: y,
      stashTargetWorktree: x,
      createdWorktree: b,
    },
  });
  if (w.status === `error`) {
    let e =
      w.rollbackErrors.length > 0
        ? o.formatMessage(
            {
              id: `localConversation.moveToWorktree.error.rollbackIssues`,
              defaultMessage: ` Rollback issues: {issues}`,
              description: `Suffix appended to move-to-worktree error message when rollback has issues`,
            },
            { issues: w.rollbackErrors.join(`, `) },
          )
        : ``;
    return {
      status: `error`,
      message:
        (w.execOutput?.output.length ?? 0) > 0
          ? `${o.formatMessage({ id: `localConversation.moveToWorktree.error.moveWithTerminalOutput`, defaultMessage: `Failed to move to worktree`, description: `Error shown when Move to worktree git operations fail with command output shown separately` })}${e}`
          : o.formatMessage(
              {
                id: `localConversation.moveToWorktree.error.move`,
                defaultMessage: `Failed to move to worktree: {message}`,
                description: `Error shown when Move to worktree git operations fail in the worker`,
              },
              { message: `${w.message}${e}` },
            ),
      execOutput: w.execOutput,
    };
  }
  m?.(`switching-thread`, `running`);
  let T;
  try {
    T = await D(`fork-conversation-from-latest`, {
      hostId: s.getHostId(),
      conversationId: t,
      cwd: y,
      workspaceRoots: [y],
      addForkedSyntheticItem: !1,
    });
  } catch (e) {
    try {
      await M(`worktree-set-owner-thread`, {
        params: { hostId: d.id, worktree: v, conversationId: t },
      });
    } catch {}
    return (
      j.warning(`Move to worktree git operations succeeded, but conversation fork failed: {}`, {
        sensitive: { error: g(e) },
        safe: {},
      }),
      m?.(`switching-thread`, `failed`),
      { status: `success`, conversationId: t }
    );
  }
  h?.(T);
  try {
    await M(`worktree-set-owner-thread`, {
      params: { hostId: d.id, worktree: v, conversationId: T },
    });
  } catch (e) {
    j.warning(
      `Move to worktree succeeded, but worktree ownership metadata could not be updated: {}`,
      { sensitive: { error: g(e) }, safe: {} },
    );
  }
  try {
    l(t, T);
  } catch (e) {
    j.warning(`Move to worktree succeeded, but browser state could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    await H({
      sourceConversationId: t,
      targetConversationId: T,
      getTitle: (e) => s.getConversation(e)?.title ?? null,
      setTitle: (e, t) => D(`set-thread-title`, { conversationId: e, title: t }),
    });
  } catch (e) {
    j.warning(`Move to worktree succeeded, but thread title could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    u((e) => I({ sourceConversationId: t, targetConversationId: T, diffComments: e }));
  } catch (e) {
    j.warning(`Move to worktree succeeded, but saved diff comments could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  (w.warnings.includes(`stashed-target-worktree-changes`) &&
    j.warning(`Move to worktree stashed uncommitted changes in the reused worktree`),
    w.warnings.includes(`drop-source-stash-failed`) &&
      j.warning(`Move to worktree succeeded, but source stash cleanup failed`),
    w.warnings.includes(`drop-target-stash-failed`) &&
      j.warning(`Move to worktree succeeded, but target stash cleanup failed`));
  try {
    await V({ sourceConversationId: t, targetConversationId: T });
  } catch (e) {
    j.warning(`Move to worktree succeeded, but pinned-thread state could not be transferred: {}`, {
      sensitive: { error: g(e) },
      safe: {},
    });
  }
  try {
    await B({ scope: e, sourceConversationId: t, targetConversationId: T });
  } catch (e) {
    j.warning(
      `Move to worktree succeeded, but custom sidebar sections could not be transferred: {}`,
      { sensitive: { error: g(e) }, safe: {} },
    );
  }
  return (m?.(`switching-thread`, `done`), { status: `success`, conversationId: T });
}
var mt = `read_settings`,
  ht = `write_settings`,
  gt = {
    name: mt,
    description: `Read Codex settings, effective values after defaults, and the machine-readable setting definitions that Codex is allowed to inspect. Use this to learn how the app can be configured before suggesting or changing settings.`,
    inputSchema: { type: `object`, properties: {}, additionalProperties: !1 },
  },
  _t = {
    name: ht,
    description: `Update one or more Codex settings by writing a partial JSON settings object. Only ordinary settings marked writable for Codex can be changed.`,
    inputSchema: {
      type: `object`,
      properties: {
        settings: {
          type: `object`,
          description: `Partial JSON settings object to update.`,
          additionalProperties: !0,
        },
      },
      required: [`settings`],
      additionalProperties: !1,
    },
  },
  vt = `The fork contains completed history only. If the source thread was running, the active turn and unfinished response are not in the child. Send a follow-up message to threadId only if the task requires work to continue there.`,
  yt = `The worktree is being created asynchronously, so no child thread id exists yet. Wait for pendingWorktreeId to finish, then send a follow-up message to the child only if the task requires work to continue there.`;
async function bt({
  environment: e = { type: `same-directory` },
  scope: t,
  sourceThreadId: n,
  targetThreadId: r,
}) {
  let i = c(r ?? n),
    a = t.get(fe, i),
    o = t.get(ce, i),
    s = t.get(T, i);
  switch (e.type) {
    case `same-directory`:
      return {
        environment: e,
        sourceThreadId: i,
        threadId: await D(`fork-conversation-from-latest`, {
          hostId: a,
          conversationId: i,
          cwd: o ?? void 0,
          workspaceRoots: o == null ? void 0 : [o],
          collaborationMode: s,
        }),
        continuation: vt,
      };
    case `worktree`: {
      if (o == null)
        throw Error(
          `Cannot fork into a worktree because the source thread has no current directory.`,
        );
      let n = t.get(N);
      return {
        environment: { type: `worktree` },
        pendingWorktreeId: Fe({
          hostId: a,
          label: n.formatMessage(Ie.forkPendingWorktreeTitle),
          sourceWorkspaceRoot: o,
          startingState: e.startingState ?? { type: `working-tree` },
          localEnvironmentConfigPath: null,
          launchMode: `fork-conversation`,
          prompt: n.formatMessage(Ie.forkPendingWorktreePrompt),
          startConversationParamsInput: null,
          sourceConversationId: i,
          sourceCollaborationMode: s,
          targetTurnId: null,
          navigateOnSuccess: !1,
        }),
        sourceThreadId: i,
        threadId: null,
        continuation: yt,
      };
    }
  }
}
async function xt({ scope: e, limit: t, query: n }) {
  let r = n?.trim() ?? ``,
    i = await e.get(ae).listAllThreads({ modelProviders: null });
  return { schemaVersion: 1, query: r.length > 0 ? r : null, threads: St(i, r, t).map(Ct) };
}
function St(e, t, n) {
  if (t.length === 0) return e.slice(0, n);
  let r = new Map(e.map((e) => [e.id, e])),
    i = [];
  for (let a of at(e, t, n)) {
    let e = r.get(a.threadId);
    e != null && i.push(e);
  }
  return i;
}
function Ct(e) {
  return {
    id: e.id,
    title: wt(e),
    preview: e.preview,
    status: e.status.type,
    cwd: e.cwd,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,
  };
}
function wt(e) {
  let t = e.name?.trim() || e.preview.trim();
  return t.length > 0 ? t : e.id;
}
async function Tt({ model: e, prompt: t, scope: n, sourceThreadId: r, threadId: i, thinking: a }) {
  return (
    await D(`send-follow-up-message`, {
      conversationId: c(i),
      prompt: r == null ? t : ne({ sourceThreadId: r, input: t }),
      ...(e == null ? {} : { model: e }),
      ...(a == null ? {} : { reasoningEffort: a }),
      serviceTier: await Pe(n, E, e ?? null),
    }),
    { threadId: i }
  );
}
var W = Se(we, (e) => null),
  Et = e(ie(), 1),
  Dt = `codex_app`,
  G = `local_remote_dropdown`,
  Ot = { id: E, display_name: `Local`, kind: `local` },
  kt = p({ threadId: m().min(1), destinationHostId: m().min(1).optional() }),
  K = `handoff_thread`;
function At(e) {
  return (0, Et.default)([ue(e.get, `host_config`) ?? Ot, ...e.get(De).map(d)], ({ id: e }) => e);
}
function jt(e = [Ot], t = !1) {
  return {
    namespace: Dt,
    name: K,
    description:
      `Move another Codex thread and its associated git state between its checkout and Codex worktree on its current host. Omit destinationHostId for this current-host toggle. The calling thread cannot move itself, and cloud handoff is not supported.` +
      (t
        ? ` You can also choose another host to move the thread to a matching saved-project worktree.`
        : ``),
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Other thread id to hand off.` },
        ...(t
          ? {
              destinationHostId: {
                type: `string`,
                description: `Optional host that should run the thread after handoff. Omit to move between the source thread's checkout and Codex worktree on its current host. Choose another host to move to a matching saved-project worktree. Available hosts: ${e.map(({ display_name: e, id: t }) => `${e} (${t})`).join(`, `)}.`,
                enum: e.map(({ id: e }) => e),
              },
            }
          : {}),
      },
      required: [`threadId`],
    },
  };
}
async function Mt({
  scope: e,
  appServerRegistry: t,
  argumentsValue: n,
  callId: r,
  callingThreadId: i,
  crossHostHandoffEnabled: a = Ee(e, `2256010998`),
  queryClient: o,
}) {
  let s = kt.safeParse(n);
  if (!s.success) return O(`${K} received invalid arguments.`);
  let l = c(s.data.threadId);
  if (l === i) return O(`A thread cannot hand itself off. Choose another thread.`);
  try {
    let n = At(e),
      i = await Nt({
        scope: e,
        appServerRegistry: t,
        callId: r,
        hosts: n,
        queryClient: o,
        threadId: l,
      }),
      c =
        s.data.destinationHostId == null
          ? i.hostConfig
          : n.find(({ id: e }) => e === s.data.destinationHostId);
    if (c == null)
      throw Error(`Host ${s.data.destinationHostId} is not available for thread handoff.`);
    if (c.id !== i.hostConfig.id && !a) throw Error(`Cross-host thread handoff is not enabled.`);
    let u = k(`git`).subscribe(`thread-handoff-progress`, (e) => {
        if (e.operationId !== r) return;
        let t;
        switch (e.status) {
          case `completed`:
          case `skipped`:
            t = `done`;
            break;
          case `started`:
            t = `running`;
            break;
          case `failed`:
            t = `failed`;
            break;
        }
        J(i, e.step, t);
      }),
      d = await (c.id === i.hostConfig.id ? Pt(i) : Ft(i, c)).finally(u);
    return d.status === `error`
      ? O(d.message)
      : d.conversationId === l
        ? O(`Git handoff completed, but the destination thread could not be created.`)
        : (D(`archive-conversation`, {
            conversationId: l,
            cleanupWorktree: !1,
            source: `thread_handoff`,
          }).catch((e) => {
            j.warning(`Thread handoff succeeded, but source archive failed: {}`, {
              sensitive: { error: g(e) },
              safe: { threadId: l },
            });
          }),
          {
            contentItems: [
              {
                type: `inputText`,
                text: JSON.stringify({
                  destinationHostDisplayName: c.display_name,
                  threadId: d.conversationId,
                  threadTitle: i.threadTitle,
                }),
              },
            ],
            success: !0,
          });
  } catch (e) {
    return (
      j.warning(`Thread handoff dynamic tool failed: {}`, {
        sensitive: { error: g(e) },
        safe: { threadId: l },
      }),
      O(e instanceof Error ? e.message : `Thread handoff failed.`)
    );
  }
}
async function Nt({
  scope: e,
  appServerRegistry: t,
  callId: r,
  hosts: i,
  queryClient: o,
  threadId: s,
}) {
  let c = t.getMaybeForConversationId(s) ?? t.getDefault();
  await D(`maybe-resume-conversation`, {
    hostId: c.getHostId(),
    conversationId: s,
    model: null,
    serviceTier: null,
    reasoningEffort: null,
    workspaceRoots: [`/`],
    collaborationMode: null,
    showThreadGoalResumeConfirmation: !1,
  });
  let l = c.getConversation(s);
  if (l == null) throw Error(`Thread ${s} could not be loaded for handoff.`);
  if (me(l))
    throw Error(`Thread ${s} is still running. Wait for it to finish before handing it off.`);
  if (e.get(ze, s) > 0 || (le(e.get, n.QUEUED_FOLLOW_UPS)?.[s]?.length ?? 0) > 0)
    throw Error(
      `Thread ${s} has pending composer state. Send or remove it before handing the thread off.`,
    );
  let u = l.cwd?.trim() ?? ``;
  if (u.length === 0) throw Error(`Thread ${s} does not have a workspace to hand off.`);
  let d = i.find(({ id: e }) => e === c.getHostId());
  if (d == null) throw Error(`The source host for thread ${s} is not available.`);
  let f = a(u),
    p = await k(`git`).request({
      method: `stable-metadata`,
      params: { cwd: f, hostConfig: d, operationSource: G },
    });
  if (p == null) throw Error(`The source thread workspace is not a git repository.`);
  let { branch: m } = await k(`git`).request({
      method: `current-branch`,
      params: { root: p.root, hostConfig: d, operationSource: G },
    }),
    h = l.title?.trim() ?? ``;
  return {
    callId: r,
    scope: e,
    queryClient: o,
    threadId: s,
    threadTitle: h.length > 0 ? h : s,
    conversation: l,
    manager: c,
    hostConfig: d,
    cwd: f,
    gitRoot: p.root,
    currentBranch: m,
  };
}
async function Pt(e) {
  let { codexHome: t } = await M(`codex-home`, { params: { hostId: e.hostConfig.id } });
  if (u(e.cwd, t)) {
    let n = await It(e, t),
      r = q(e, e.currentBranch);
    return (
      e.scope.set(W, e.callId, {
        destinationHostDisplayName: e.hostConfig.display_name,
        direction: `to-local`,
        localBranch: r,
        sourceBranch: r,
        steps: zt([
          `stash-source-changes`,
          `detach-worktree-branch`,
          `checkout-local-branch`,
          `apply-changes-to-local`,
          `switching-thread`,
        ]),
        threadTitle: e.threadTitle,
        worktreeBranch: null,
      }),
      dt({
        scope: e.scope,
        conversationId: e.threadId,
        currentBranch: r,
        cwd: e.cwd,
        localGitRoot: n.gitRoot,
        localWorkspaceRoot: n.workspaceRoot,
        worktreeRoot: e.gitRoot,
        branchCheckedOutElsewhere: !1,
        intl: e.scope.get(N),
        appServerManager: e.manager,
        transferBrowserState: Rt,
        setDiffComments: (t) => oe(e.scope, `diff_comments`, t),
        hostConfig: e.hostConfig,
        operationId: e.callId,
        onSwitchingThreadStart: () => J(e, `switching-thread`, `running`),
        onSwitchingThreadDone: () => J(e, `switching-thread`, `done`),
        onSwitchingThreadFailed: () => J(e, `switching-thread`, `failed`),
      })
    );
  }
  let n = e.currentBranch?.trim() ?? ``;
  if (n.length === 0)
    throw Error(
      `The source checkout is detached. Check out a branch before handing it off to a worktree.`,
    );
  let { branch: r } = await k(`git`).request({
      method: `default-branch`,
      params: { root: e.gitRoot, hostConfig: e.hostConfig, operationSource: G },
    }),
    i = n === r ? q(e, null) : n,
    a = n === r ? null : await Lt(e, n, r);
  return (
    e.scope.set(W, e.callId, {
      destinationHostDisplayName: e.hostConfig.display_name,
      direction: `to-worktree`,
      localBranch: a,
      sourceBranch: n,
      steps: zt([
        `stash-source-changes`,
        `checkout-local-branch`,
        `stash-target-worktree-changes`,
        `checkout-worktree-branch`,
        `apply-changes-to-worktree`,
        `switching-thread`,
      ]),
      threadTitle: e.threadTitle,
      worktreeBranch: i,
    }),
    pt({
      scope: e.scope,
      conversationId: e.threadId,
      currentBranch: n,
      cwd: e.cwd,
      worktreeCheckoutBranch: i,
      selectedLocalCheckoutBranch: a,
      intl: e.scope.get(N),
      appServerManager: e.manager,
      defaultBranch: r,
      transferBrowserState: Rt,
      setDiffComments: (t) => oe(e.scope, `diff_comments`, t),
      hostConfig: e.hostConfig,
      queryClient: e.queryClient,
      operationId: e.callId,
      onStepStatus: (t, n) => J(e, t, n),
    })
  );
}
async function Ft(e, t) {
  let n = q(e, e.currentBranch);
  e.scope.set(W, e.callId, {
    destinationHostDisplayName: t.display_name,
    direction: `to-host-worktree`,
    localBranch: null,
    sourceBranch: n,
    steps: zt([
      `prepare-host-transfer`,
      `transfer-host-artifacts`,
      `apply-changes-to-worktree`,
      `switching-thread`,
    ]),
    threadTitle: e.threadTitle,
    worktreeBranch: null,
  });
  let { roots: r } = await M(`workspace-root-options`, { params: { hostId: t.id } }),
    { origins: i } = await M(`git-origins`, { params: { hostId: t.id, dirs: r }, source: G }),
    o = Ae({
      sourceWorkspaceRoot: e.cwd,
      sourceGitRoot: e.gitRoot,
      destinationWorkspaceRoots: r,
      destinationGitOrigins: i,
    });
  if (o == null) throw Error(`No matching saved project was found on ${t.display_name}.`);
  return ut({
    conversationId: e.threadId,
    sourceBranch: n,
    cwd: e.cwd,
    destinationWorkspaceRoot: a(o),
    intl: e.scope.get(N),
    appServerManager: e.manager,
    sourceHostConfig: e.hostConfig,
    destinationHostConfig: t,
    transferBrowserState: Rt,
    setDiffComments: (t) => oe(e.scope, `diff_comments`, t),
    scope: e.scope,
    queryClient: e.queryClient,
    operationId: e.callId,
    onSwitchingThreadStart: () => J(e, `switching-thread`, `running`),
    onSwitchingThreadDone: () => J(e, `switching-thread`, `done`),
    onSwitchingThreadFailed: () => J(e, `switching-thread`, `failed`),
    onStepStatus: (t, n) => J(e, t, n),
  });
}
async function It(e, t) {
  let [{ worktrees: n }, { worktrees: r }] = await Promise.all([
      k(`git`).request({
        method: `list-worktrees`,
        params: { cwd: e.cwd, hostConfig: e.hostConfig, operationSource: G },
      }),
      k(`git`).request({
        method: `codex-worktrees`,
        params: { hostConfig: e.hostConfig, operationSource: G },
      }),
    ]),
    i = new Set(r.map(({ dir: e }) => de(e))),
    o = Ve({
      cwd: e.cwd,
      sourceWorktreeRoot: a(e.gitRoot),
      repoWorktreeEntries: n.filter(({ root: e }) => !i.has(de(e)) && !u(e, t)),
    })[0];
  if (o == null) throw Error(`No checkout was found for the source worktree.`);
  return o;
}
async function Lt(e, t, n) {
  let { branches: r } = await k(`git`).request({
      method: `recent-branches`,
      params: { root: e.gitRoot, hostConfig: e.hostConfig, operationSource: G },
    }),
    i = [n, ...r].find((e) => e != null && e !== t);
  if (i == null)
    throw Error(
      `No other checkout branch is available before handing this thread off to a worktree.`,
    );
  return i;
}
function q(e, t) {
  let n = t?.trim() ?? ``;
  if (n.length > 0) return n;
  let r = Oe(e.scope.get, l.branchPrefix),
    i = Be({ branchPrefix: r, conversationTitle: e.conversation.title });
  return i.length > 0 && !i.endsWith(`/`)
    ? i
    : Be({ branchPrefix: r, conversationTitle: e.threadId });
}
function Rt(e, t) {
  Ce.dispatchMessage(`browser-sidebar-command`, {
    conversationId: e,
    command: { type: `transfer-conversation`, targetConversationId: t },
  });
}
function zt(e) {
  return e.map((e) => ({ id: e, status: `pending` }));
}
function J(e, t, n) {
  e.scope.set(W, e.callId, (e) => {
    if (e == null) return null;
    let r = { id: t, status: n },
      i =
        e.steps.find((e) => e.id === t) == null
          ? [...e.steps, r].sort(Bt)
          : e.steps.map((e) => (e.id === t ? r : e));
    return { ...e, steps: i };
  });
}
function Bt(e, t) {
  return z.indexOf(e.id) - z.indexOf(t.id);
}
var Y = `codex_app`,
  X = `received invalid arguments.`,
  Vt = 10,
  Ht = 1,
  Ut = 2e3,
  Wt = t([`low`, `medium`, `high`, `xhigh`]),
  Gt = r(`type`, [
    f({ type: s(`working-tree`) }),
    f({ type: s(`branch`), branchName: m().min(1) }),
  ]),
  Kt = r(`type`, [
    f({ type: s(`local`) }),
    f({ type: s(`worktree`), startingState: Gt.optional() }),
  ]),
  qt = r(`type`, [
    f({ type: s(`project`), projectId: m().min(1), environment: Kt }),
    f({ type: s(`projectless`), directoryName: m().min(1).optional() }),
  ]),
  Jt = r(`type`, [
    f({ type: s(`same-directory`) }),
    f({ type: s(`worktree`), startingState: Gt.optional() }),
  ]),
  Z = `fork_thread`,
  Yt = `create_thread`,
  Xt = `list_threads`,
  Q = `read_thread`,
  Zt = `send_message_to_thread`,
  Qt = `set_thread_pinned`,
  $t = `set_thread_archived`,
  en = `set_thread_title`,
  tn = p({ prompt: m().min(1), target: qt, model: m().min(1).optional(), thinking: Wt.optional() }),
  nn = p({ threadId: m().min(1).optional(), environment: Jt.optional() }),
  rn = p({ query: m().optional(), limit: h().int().min(1).max(50).optional() }),
  an = p({
    threadId: m().min(1),
    cursor: m().min(1).optional(),
    turnLimit: h().int().min(1).max(10).optional(),
    includeOutputs: i().optional(),
    maxOutputCharsPerItem: h().int().min(0).max(2e4).optional(),
  }),
  on = p({
    threadId: m().min(1),
    prompt: m().min(1),
    model: m().min(1).optional(),
    thinking: Wt.optional(),
  }),
  sn = p({ threadId: m().min(1), pinned: i() }),
  cn = p({ threadId: m().min(1), archived: i() }),
  ln = p({ threadId: m().min(1), title: m().min(1) });
function un({
  availableHandoffHosts: e,
  availableModelSlugs: t = [],
  crossHostHandoffEnabled: n = !1,
  deferLoading: r = !1,
} = {}) {
  let i = On(t);
  return [bn, jt(e, n), Dn(yn, i), xn, Sn, Dn(Cn, i), wn, Tn, En].map((e) =>
    r ? { ...e, deferLoading: !0 } : e,
  );
}
async function dn({ scope: e, argumentsValue: t, sourceThreadId: n }) {
  if (n == null) return O(`${Z} missing calling thread id.`);
  let r = nn.safeParse(t);
  if (!r.success) return O(`${Z} ${X}`);
  try {
    return $(
      await bt({
        scope: e,
        sourceThreadId: n,
        targetThreadId: r.data.threadId,
        environment: r.data.environment ?? { type: `same-directory` },
      }),
    );
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function fn({ argumentsValue: e, scope: t, sourceThreadId: n }) {
  let r = tn.safeParse(e);
  if (!r.success) return O(`${Yt} ${X}`);
  try {
    return $(
      await He({
        model: r.data.model,
        prompt: r.data.prompt,
        scope: t,
        sourceThreadId: n,
        target: r.data.target,
        thinking: r.data.thinking,
      }),
    );
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function pn({ scope: e, argumentsValue: t }) {
  let n = rn.safeParse(t);
  if (!n.success) return O(`${Xt} ${X}`);
  try {
    return $(await xt({ scope: e, limit: n.data.limit ?? Vt, query: n.data.query }));
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function mn({ scope: e, argumentsValue: t }) {
  let n = an.safeParse(t);
  if (!n.success) return O(`${Q} ${X}`);
  try {
    return $(
      await Qe({
        scope: e,
        cursor: n.data.cursor,
        includeOutputs: n.data.includeOutputs ?? !1,
        maxOutputCharsPerItem: n.data.maxOutputCharsPerItem ?? Ut,
        threadId: n.data.threadId,
        turnLimit: n.data.turnLimit ?? Ht,
      }),
    );
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function hn({ argumentsValue: e, scope: t, sourceThreadId: n }) {
  let r = on.safeParse(e);
  if (!r.success) return O(`${Zt} ${X}`);
  try {
    return $(
      await Tt({
        model: r.data.model,
        prompt: r.data.prompt,
        scope: t,
        sourceThreadId: n,
        threadId: r.data.threadId,
        thinking: r.data.thinking,
      }),
    );
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function gn({ argumentsValue: e }) {
  let t = sn.safeParse(e);
  if (!t.success) return O(`${Qt} ${X}`);
  try {
    return $(await Je(t.data));
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function _n({ scope: e, argumentsValue: t }) {
  let n = cn.safeParse(t);
  if (!n.success) return O(`${$t} ${X}`);
  try {
    return $(await Ye({ scope: e, ...n.data }));
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
async function vn({ argumentsValue: e }) {
  let t = ln.safeParse(e);
  if (!t.success) return O(`${en} ${X}`);
  try {
    return $(await Xe(t.data));
  } catch (e) {
    return O(e instanceof Error ? e.message : String(e));
  }
}
function $(e) {
  return { contentItems: [{ type: `inputText`, text: JSON.stringify(e ?? null) }], success: !0 };
}
var yn = {
    namespace: Y,
    name: Yt,
    description: `Create a separate Codex thread only when the user explicitly asks for a new or separate thread. Use project targets for repo-scoped work and projectless targets for general tasks. Project targets must choose a local or worktree environment.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        prompt: { type: `string`, description: `Initial prompt for the new thread.` },
        target: {
          description: `Where to create the thread.`,
          anyOf: [
            {
              type: `object`,
              additionalProperties: !1,
              properties: {
                type: { type: `string`, enum: [`project`] },
                projectId: { type: `string`, description: `Saved project id / workspace root.` },
                environment: {
                  description: `Where the project thread should run: directly in the saved project or in a new worktree.`,
                  anyOf: [
                    {
                      type: `object`,
                      additionalProperties: !1,
                      properties: { type: { type: `string`, enum: [`local`] } },
                      required: [`type`],
                    },
                    {
                      type: `object`,
                      additionalProperties: !1,
                      properties: {
                        type: { type: `string`, enum: [`worktree`] },
                        startingState: {
                          description: `Starting state for the new worktree.`,
                          anyOf: [
                            {
                              type: `object`,
                              additionalProperties: !1,
                              properties: { type: { type: `string`, enum: [`working-tree`] } },
                              required: [`type`],
                            },
                            {
                              type: `object`,
                              additionalProperties: !1,
                              properties: {
                                type: { type: `string`, enum: [`branch`] },
                                branchName: { type: `string` },
                              },
                              required: [`type`, `branchName`],
                            },
                          ],
                        },
                      },
                      required: [`type`],
                    },
                  ],
                },
              },
              required: [`type`, `projectId`, `environment`],
            },
            {
              type: `object`,
              additionalProperties: !1,
              properties: {
                type: { type: `string`, enum: [`projectless`] },
                directoryName: {
                  type: `string`,
                  description: `Optional projectless output directory name.`,
                },
              },
              required: [`type`],
            },
          ],
        },
        model: { type: `string`, description: `Optional model override.` },
        thinking: {
          type: `string`,
          description: `Optional reasoning effort override.`,
          enum: [`low`, `medium`, `high`, `xhigh`],
        },
      },
      required: [`prompt`, `target`],
    },
  },
  bn = {
    namespace: Y,
    name: Z,
    description: `Fork a Codex thread. Omit threadId to fork the calling thread, or pass a threadId to fork that specific thread. A same-directory fork returns a child threadId immediately; a worktree fork returns only a pendingWorktreeId until worktree setup creates the child. Forks contain completed history only: if the source thread is running, the active turn and unfinished response are not copied. Send a follow-up message to the child only if the task requires work to continue there.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: {
          type: `string`,
          description: `Optional source thread id to fork. Omit to fork the calling thread.`,
        },
        environment: {
          description: `Where the fork should run. Omit for a same-directory fork.`,
          anyOf: [
            {
              type: `object`,
              additionalProperties: !1,
              properties: { type: { type: `string`, enum: [`same-directory`] } },
              required: [`type`],
            },
            {
              type: `object`,
              additionalProperties: !1,
              properties: {
                type: { type: `string`, enum: [`worktree`] },
                startingState: {
                  description: `Starting state for the new worktree.`,
                  anyOf: [
                    {
                      type: `object`,
                      additionalProperties: !1,
                      properties: { type: { type: `string`, enum: [`working-tree`] } },
                      required: [`type`],
                    },
                    {
                      type: `object`,
                      additionalProperties: !1,
                      properties: {
                        type: { type: `string`, enum: [`branch`] },
                        branchName: { type: `string` },
                      },
                      required: [`type`, `branchName`],
                    },
                  ],
                },
              },
              required: [`type`],
            },
          ],
        },
      },
    },
  },
  xn = {
    namespace: Y,
    name: Xt,
    description: `List recent Codex threads. Use an optional query to find a specific thread before reading or steering it.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        query: { type: `string`, description: `Optional thread search query.` },
        limit: { type: `number`, description: `Maximum number of thread summaries to return.` },
      },
    },
  },
  Sn = {
    namespace: Y,
    name: Q,
    description: `Read recent status and turn summaries for one Codex thread without opening it. Use page cursors from earlier responses to read older turns.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to inspect.` },
        cursor: { type: `string`, description: `Optional cursor for older turns.` },
        turnLimit: { type: `number`, description: `Maximum number of turns to return.` },
        includeOutputs: {
          type: `boolean`,
          description: `Whether to include truncated tool or command outputs.`,
        },
        maxOutputCharsPerItem: {
          type: `number`,
          description: `Maximum output characters to keep for each included output item.`,
        },
      },
      required: [`threadId`],
    },
  },
  Cn = {
    namespace: Y,
    name: Zt,
    description: `Send a follow-up prompt to an existing Codex thread. Omit model and thinking to keep the thread's current settings.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to continue.` },
        prompt: { type: `string`, description: `Follow-up prompt to send.` },
        model: { type: `string`, description: `Optional model override.` },
        thinking: {
          type: `string`,
          description: `Optional reasoning effort override.`,
          enum: [`low`, `medium`, `high`, `xhigh`],
        },
      },
      required: [`threadId`, `prompt`],
    },
  },
  wn = {
    namespace: Y,
    name: Qt,
    description: `Pin or unpin a Codex thread.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to pin or unpin.` },
        pinned: { type: `boolean`, description: `Whether the thread should be pinned.` },
      },
      required: [`threadId`, `pinned`],
    },
  },
  Tn = {
    namespace: Y,
    name: $t,
    description: `Archive or unarchive a Codex thread.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to archive or unarchive.` },
        archived: { type: `boolean`, description: `Whether the thread should be archived.` },
      },
      required: [`threadId`, `archived`],
    },
  },
  En = {
    namespace: Y,
    name: en,
    description: `Rename a Codex thread.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to rename.` },
        title: { type: `string`, description: `New thread title.` },
      },
      required: [`threadId`, `title`],
    },
  };
function Dn(e, t) {
  return {
    ...e,
    inputSchema: {
      ...e.inputSchema,
      properties: { ...e.inputSchema.properties, model: { type: `string`, description: t } },
    },
  };
}
function On(e) {
  return e.length === 0
    ? `Optional model override.`
    : `Optional model override. Available models: ${e.join(`, `)}. You may supply a newer model id when explicitly requested.`;
}
var kn = 100,
  An = 100,
  jn = 1e3,
  Mn = `codex_app`,
  Nn = new Set([ge.name, be.name, ee, _, ve, y]);
async function Pn({
  availableHandoffHosts: e,
  authMethod: t,
  crossHostHandoffEnabled: n = !1,
  featureOverrides: r,
  hostId: i,
  isAuthLoading: a,
  listExperimentalFeatures: o,
  listModels: s,
  modelAvailabilityConfig: c,
}) {
  let l = rt(i),
    u = r?.[S] === !0,
    d = r?.[x] === !0,
    f = r?.[ye] === !0,
    [p, m] = await Promise.all([
      l ? Rn(o) : !1,
      l && u
        ? Fn({ authMethod: t, isAuthLoading: a, listModels: s, modelAvailabilityConfig: c })
        : [],
    ]);
  return [
    ...(l ? [C()] : []),
    ge,
    ...(l && p ? [be] : []),
    ...(l && u
      ? un({ availableHandoffHosts: e, availableModelSlugs: m, crossHostHandoffEnabled: n })
      : []),
    ...(l && d ? [gt, _t] : []),
    ...(f ? [...se, te] : []),
  ].map((e) => ({ ...e, namespace: Mn, ...(Nn.has(e.name) ? {} : { deferLoading: !0 }) }));
}
async function Fn({ authMethod: e, isAuthLoading: t, listModels: n, modelAvailabilityConfig: r }) {
  if (t) return [];
  try {
    let t = await In(n),
      { models: i } = ke({
        authMethod: e,
        availableModels: r.availableModels,
        defaultModel: r.defaultModel,
        models: t,
        useHiddenModels: r.useHiddenModels,
      });
    return i.map((e) => e.model);
  } catch {
    return [];
  }
}
function In(e) {
  return new Promise((t, n) => {
    let r = setTimeout(() => {
      n(Error(`Timed out loading thread tool model guidance.`));
    }, jn);
    Ln(e)
      .then(t, n)
      .finally(() => {
        clearTimeout(r);
      });
  });
}
async function Ln(e) {
  let t = [],
    n = null;
  do {
    let r = await e({ cursor: n, includeHidden: !0, limit: An });
    (t.push(...r.data), (n = r.nextCursor));
  } while (n != null);
  return t;
}
async function Rn(e, t = null) {
  try {
    let n = await e({ cursor: t, limit: kn });
    return Le(n.data) ? !0 : n.nextCursor == null ? !1 : await Rn(e, n.nextCursor);
  } catch {
    return !1;
  }
}
export {
  rt as A,
  mt as C,
  ut as D,
  dt as E,
  Qe as M,
  Ye as N,
  z as O,
  He as P,
  W as S,
  pt as T,
  gn as _,
  Xt as a,
  Mt as b,
  $t as c,
  fn as d,
  dn as f,
  _n as g,
  hn as h,
  Z as i,
  I as j,
  st as k,
  Qt as l,
  mn as m,
  Pn as n,
  Q as o,
  pn as p,
  Yt as r,
  Zt as s,
  Mn as t,
  en as u,
  vn as v,
  ht as w,
  At as x,
  K as y,
};
//# sourceMappingURL=app-server-dynamic-tools.js.map
