import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { Z as n, _ as r, g as i, o as a, t as o } from "./app-scope-CWE-zIhQ.js";
import { Bt as s, l as c, o as l } from "./use-host-config.js";
import { Hi as u, Mi as d } from "./thread-context-inputs.js";
import { h as f } from "./vscode-api.js";
import { Aa as p, Gi as m, ai as h, w as g } from "./src.js";
import { l as _ } from "./lib-1.js";
import { a as v } from "./setting-storage.js";
import { r as y } from "./toast-signal.js";
import { t as b } from "./use-recording-waveform-Cfd-Ecbb.js";
import { n as x } from "./rpc.js";
import { m as S } from "./chunk-13.js";
import { n as C } from "./persisted-signal.js";
import { n as w, r as T } from "./projectless-thread.js";
import { m as E } from "./use-plugins.js";
import { c as D } from "./apps-queries.js";
import { n as O } from "./use-skills.js";
import { b as k, t as A, v as j, w as M, x as N, y as P } from "./realtime-controller.js";
import { r as F } from "./realtime-conversation-config.js";
var I = i(o, () => null),
  L = r(o, (e) => null),
  R = r(o, (e) => null);
function z(e, t, n, r) {
  let i = n ?? d(r);
  (e.set(L, t, i.generateMemories), e.set(R, t, i.useMemories), e.set(I, null));
}
var B = n(),
  V = `realtime-voice-chat`,
  H = `New Realtime Voice Chat`,
  U = `new_thread_developer_instructions`,
  W = C((e) => `realtime-voice-singleton-orchestrator-thread-id:${e}`, null),
  G = `Realtime voice feedback:
- If the user asks to send feedback to the team or shares quick realtime voice feedback, including a bug, papercut, or positive note, call send_realtime_voice_feedback with the user's feedback.`,
  K = `You are coordinating a realtime voice session.

Your job is to keep the live conversation responsive while helping the user get work done. Think with the user in this thread, and use worker Codex threads for slow or independent work.

Do not dispatch work just because a request uses tools or touches a project. Also do not keep blocking work here just because the final decision is interactive.

Choose one of three modes:

1. Converse here.
Use this thread for brainstorming, prioritizing, clarifying, quick advice, lightweight planning, and interactive decision support. Stay here when the user is trying to think with you or build shared context.

2. Quick check here.
Use this thread for small, fast checks when the result immediately helps the live conversation. Examples: checking the current branch, doing a quick pass over today's open PRs to help choose one, reading a short status, or answering "what do you think?"

3. Delegate blocking mechanics.
Use the Codex thread tools for slow or multi-step work, especially browsing, app interactions, ordering flows, implementation, deep repo investigation, log collection, drafting, monitoring, or tasks that can proceed independently. If the task needs user choices, have the worker gather options and report back; keep the choice and confirmation in this coordinator thread.

When dispatching:
- For project-specific work, use create_thread with a project target in the applicable project, choosing a local or worktree environment.
- For general non-project work, such as checking Slack, Spotify, documents, calendar, browsing, shopping, or food ordering, use create_thread with a projectless target.
- For existing thread work, use list_threads, read_thread, and send_message_to_thread to inspect or steer the relevant thread.
- After create_thread succeeds, include ::created-thread{threadId="..."} or ::created-thread{pendingWorktreeId="..."} on its own line using the tool result.
- Every worker prompt must include a return-report instruction. Tell the worker: "When you finish or get blocked, send a short message back to this coordinator thread using send_message_to_thread. Include the outcome, current status, and any decision needed from the user."
- Treat the return report as part of the worker's task, not optional follow-up.

Examples:
- "What should we do today?" Stay here.
- "Look at my open PRs from today and help me pick one." Do a quick pass here unless it turns into deep investigation.
- "Implement the fix in that PR." Dispatch to a project worker thread.
- "Look through Uber Eats and find dinner options." Dispatch the browsing/searching to a projectless worker thread, then discuss options here.
- "Order the sushi place we picked." Dispatch the ordering flow only after the user has made the choice and any needed confirmations are clear.

If unsure, start with a brief answer or clarifying question here. Dispatch once the work becomes mostly waiting, navigating, gathering, executing, or otherwise blocking the live conversation.`,
  q = p()
    .refine((e) => e.trim().length > 0)
    .catch(K);
async function J({
  activeCollaborationMode: e,
  agentMode: t,
  currentLocalExecutionCwd: n,
  currentLocalExecutionHostId: r,
  memoryPreferences: i,
  newThreadBaseInstructions: a = null,
  newThreadDeveloperInstructions: o = K,
  newThreadModel: l = null,
  newThreadReasoningEffort: p = null,
  onCreateError: h,
  onLocalConversationCreated: g,
  permissionProfileId: _,
  realtimeVoiceToolsDeveloperInstructions: v = null,
  serviceTier: y,
  setSelectedCollaborationMode: b,
  shouldSendPermissionOverrides: x,
  shouldUseSingletonOrchestratorThread: S = !1,
  scope: C,
  startRealtimeConversationPage: E,
  threadToolsEnabled: D,
  workspaceRootsForLocalExecution: O,
}) {
  let k = T(O);
  try {
    let f = S ? await X(C, r) : null;
    if (f != null) {
      let { config: e } = await s(`read-config-for-host`, {
          hostId: r,
          includeLayers: !1,
          cwd: n.length > 0 ? n : null,
        }),
        t = i ?? d(e);
      if ((b(null), g)) {
        await g(f, t, { startRealtime: !0 });
        return;
      }
      E(f);
      return;
    }
    let h = await w(O, { directoryName: V }),
      T = h.workspaceRoots,
      A = h.cwd ?? n,
      { config: j } = await s(`read-config-for-host`, { hostId: r, includeLayers: !1, cwd: A }),
      M = i ?? d(j),
      N = x ? m(t, T, u(j)) : null;
    N != null &&
      _ != null &&
      ((N.activePermissionProfile = { id: _, extends: null }), (N.runtimeWorkspaceRoots = T));
    let P = Z({ activeCollaborationMode: e, newThreadModel: l, newThreadReasoningEffort: p }),
      F = [D ? o : null, v, G].filter((e) => e != null).join(`

`),
      I = await s(`start-conversation`, {
        hostId: r,
        input: [],
        cwd: A,
        workspaceRoots: T,
        collaborationMode: P,
        serviceTier: y,
        ...(N == null
          ? { useAppServerPermissionDefault: !0 }
          : { permissions: N, approvalsReviewer: N.approvalsReviewer }),
        threadSource: c,
        ...(i === void 0 ? {} : { memoryPreferences: i }),
        workspaceKind: k ? `projectless` : `project`,
        threadStartKind: `realtime_voice`,
        baseInstructions: a,
        ...(k ? { projectlessOutputDirectory: h.projectlessOutputDirectory } : {}),
        additionalDeveloperInstructions: F,
      });
    if (
      (await s(`set-thread-title`, { conversationId: I, title: H }),
      S && C.set(W, r, I),
      b(null),
      g)
    ) {
      await g(I, M, { startRealtime: !0 });
      return;
    }
    E(I);
  } catch (e) {
    (f.error(`Error creating realtime conversation`, { safe: {}, sensitive: { error: e } }), h());
  }
}
function Y(e) {
  let t = (0, B.c)(20),
    {
      activeCollaborationMode: n,
      agentMode: r,
      currentLocalExecutionCwd: i,
      currentLocalExecutionHostId: s,
      enabled: c,
      onLocalConversationCreated: u,
      permissionProfileId: d,
      serviceTier: p,
      setSelectedCollaborationMode: m,
      shouldSendPermissionOverrides: h,
      workspaceRootsForLocalExecution: b,
    } = e,
    C = a(o),
    w = _(),
    T = S(),
    [E] = l(`statsig_default_enable_features`),
    { value: D } = F(),
    O = v(g.realtimeVoiceUseSingletonOrchestratorThread);
  if (!c) return;
  let A;
  t[0] !== w || t[1] !== C
    ? ((A = () => {
        C.get(y).danger(
          w.formatMessage({
            id: `composer.realtime.createThreadError`,
            defaultMessage: `Unable to start realtime voice`,
            description: `Toast shown when creating a new thread for realtime voice fails`,
          }),
        );
      }),
      (t[0] = w),
      (t[1] = C),
      (t[2] = A))
    : (A = t[2]);
  let N = A,
    L;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== s ||
    t[7] !== E ||
    t[8] !== T ||
    t[9] !== u ||
    t[10] !== d ||
    t[11] !== D ||
    t[12] !== C ||
    t[13] !== p ||
    t[14] !== m ||
    t[15] !== h ||
    t[16] !== O ||
    t[17] !== N ||
    t[18] !== b
      ? ((L = async () => {
          let e = C.get(I),
            t = j(D),
            n = q.parse(D[U]),
            r = P(D),
            i = k(D),
            a = M(D);
          try {
            await x.avatarOverlay?.requestRealtimeStart({
              memoryPreferences: e ?? void 0,
              newThreadBaseInstructions: t,
              newThreadDeveloperInstructions: n,
              newThreadModel: r,
              newThreadReasoningEffort: i,
              realtimeSessionOverrides: void 0,
              realtimeVoiceToolsDeveloperInstructions: a,
              source: `composer_button_new_thread`,
            });
          } catch (e) {
            let t = e;
            (f.error(`Error requesting realtime from the avatar overlay`, {
              safe: {},
              sensitive: { error: t },
            }),
              N());
          }
        }),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = s),
        (t[7] = E),
        (t[8] = T),
        (t[9] = u),
        (t[10] = d),
        (t[11] = D),
        (t[12] = C),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h),
        (t[16] = O),
        (t[17] = N),
        (t[18] = b),
        (t[19] = L))
      : (L = t[19]),
    L
  );
}
async function X(e, t) {
  let n = e.get(W, t);
  if (n == null) return null;
  let r = h(n);
  return (
    await s(`load-recent-conversation-ids-for-host`, { hostId: t, conversationIds: [r] })
  ).includes(r)
    ? r
    : (e.set(W, t, null), null);
}
function Z({ activeCollaborationMode: e, newThreadModel: t, newThreadReasoningEffort: n }) {
  return t == null && n == null
    ? e
    : e == null
      ? t == null
        ? null
        : {
            mode: `default`,
            settings: { model: t, reasoning_effort: n, developer_instructions: null },
          }
      : {
          ...e,
          settings: {
            ...e.settings,
            ...(t == null ? {} : { model: t }),
            ...(n == null ? {} : { reasoning_effort: n }),
          },
        };
}
var Q = [],
  $ = { apps: [], plugins: [], skills: [] };
function ee(e) {
  let t = (0, B.c)(16),
    { enabled: n, hostId: r, root: i } = e,
    a = n === void 0 ? !0 : n,
    o = i ?? Q,
    s;
  t[0] === a ? (s = t[1]) : ((s = { enabled: a }), (t[0] = a), (t[1] = s));
  let { skills: c } = O(o, r, s),
    l;
  t[2] === a ? (l = t[3]) : ((l = { enabled: a }), (t[2] = a), (t[3] = l));
  let { availablePlugins: u } = E(r, o, l),
    d;
  t[4] !== a || t[5] !== r
    ? ((d = { enabled: a, hostId: r }), (t[4] = a), (t[5] = r), (t[6] = d))
    : (d = t[6]);
  let { data: f } = D(d),
    p,
    m;
  if (t[7] !== u || t[8] !== a || t[9] !== c || t[10] !== f) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = f === void 0 ? [] : f;
      if (!a) {
        let e;
        (t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = { capabilityNames: $ }), (t[13] = e))
          : (e = t[13]),
          (m = e));
        break bb0;
      }
      p = N({ apps: e, plugins: u, skills: c });
    }
    ((t[7] = u), (t[8] = a), (t[9] = c), (t[10] = f), (t[11] = p), (t[12] = m));
  } else ((p = t[11]), (m = t[12]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h = p,
    g;
  return (t[14] === h ? (g = t[15]) : ((g = { capabilityNames: h }), (t[14] = h), (t[15] = g)), g);
}
var te = e(t(), 1);
function ne(e) {
  let t = (0, B.c)(20),
    { conversationId: n, isActiveConversation: r, phase: i, sessionGeneration: a, variant: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = { variant: o }), (t[0] = o), (t[1] = s));
  let {
      recordingDurationMs: c,
      waveformCanvasRef: l,
      startWaveformCapture: u,
      stopWaveformCapture: d,
      resetWaveformDisplay: f,
    } = b(s),
    p;
  t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== f || t[6] !== u || t[7] !== d
    ? ((p = () => {
        if (n == null || !r || i === `inactive`) {
          f();
          return;
        }
        let e = A.getStream(n);
        if (e == null) {
          f();
          return;
        }
        return (
          u(e),
          () => {
            (d(), f());
          }
        );
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = f),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p))
    : (p = t[8]);
  let m;
  (t[9] !== n ||
  t[10] !== r ||
  t[11] !== i ||
  t[12] !== f ||
  t[13] !== a ||
  t[14] !== u ||
  t[15] !== d
    ? ((m = [n, r, i, f, a, u, d]),
      (t[9] = n),
      (t[10] = r),
      (t[11] = i),
      (t[12] = f),
      (t[13] = a),
      (t[14] = u),
      (t[15] = d),
      (t[16] = m))
    : (m = t[16]),
    (0, te.useEffect)(p, m));
  let h;
  return (
    t[17] !== c || t[18] !== l
      ? ((h = { recordingDurationMs: c, waveformCanvasRef: l }),
        (t[17] = c),
        (t[18] = l),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
export { I as a, R as c, Y as i, ee as n, z as o, J as r, L as s, ne as t };
//# sourceMappingURL=use-realtime-waveform.js.map
