import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bt as n,
  El as r,
  Fa as i,
  Ft as a,
  Pt as o,
  Rt as s,
  Tl as c,
  Xs as l,
  cl as u,
  jt as ee,
  kt as d,
  lr as te,
  or as ne,
  tc as re,
  ul as ie,
  vl as f,
  zt as p,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  a_ as ae,
  b_ as m,
  bi as h,
  bp as oe,
  cS as g,
  c_ as se,
  ct as _,
  go as v,
  ho as ce,
  i_ as le,
  it as ue,
  l_ as de,
  o_ as fe,
  r_ as y,
  rt as b,
  st as x,
  u_ as pe,
  vo as me,
  x_ as he,
  xi as S,
  xp as ge,
} from "./app-initial~app-main~onboarding-page.js";
import {
  B_ as C,
  Ou as w,
  Qs as _e,
  Rs as T,
  Ss as ve,
  Sx as E,
  Us as ye,
  V_ as D,
  Xs as be,
  cx as O,
  ec as xe,
  f_ as k,
  fv as A,
  ks as j,
  ku as M,
  lx as N,
  m_ as P,
  pv as F,
  ws as Se,
  wx as Ce,
  yx as I,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { Bn as we, Hn as L } from "./app-initial~app-main~automations-page.js";
import {
  L as R,
  Q as z,
  Z as B,
  z as Te,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  H as V,
  W as Ee,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  a as H,
  i as De,
} from "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page.js";
import {
  i as Oe,
  n as U,
  r as ke,
} from "./app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page.js";
import { n as W, t as Ae } from "./thread-scroll-layout.js";
function G({ pendingWorktree: e, isConversationStarting: t, isConversationStartFailed: n }) {
  let r = e.worktreeGitRoot != null && e.worktreeWorkspaceRoot != null,
    i = [
      {
        id: `${e.id}:${e.attempt}:worktree`,
        kind: `worktree`,
        status: K(e.phase, r),
        outputText: e.worktreeOutputText,
      },
    ],
    a = q(e, r);
  return (
    a != null &&
      i.push({
        id: `${e.id}:${e.attempt}:setup`,
        kind: `setup`,
        status: a,
        outputText: e.setupOutputText,
      }),
    (t || n) &&
      i.push({
        id: `${e.id}:${e.attempt}:conversation`,
        kind: `conversation`,
        status: n ? `failed` : `running`,
        outputText: ``,
      }),
    i
  );
}
function K(e, t) {
  switch (e) {
    case `queued`:
    case `creating`:
      return `running`;
    case `setting-up`:
    case `worktree-ready`:
      return `completed`;
    case `failed`:
      return t ? `completed` : `failed`;
  }
}
function q(e, t) {
  switch (e.phase) {
    case `queued`:
    case `creating`:
      return null;
    case `setting-up`:
      return `running`;
    case `worktree-ready`:
      return e.localEnvironmentConfigPath == null
        ? null
        : e.errorMessage == null
          ? `completed`
          : `skipped`;
    case `failed`:
      return t ? `failed` : null;
  }
}
var J = e(() => {});
function je(e) {
  let t = (0, Y.c)(7),
    {
      pendingWorktree: n,
      isConversationStarting: r,
      isConversationStartFailed: i,
      children: a,
    } = e,
    o;
  t[0] !== i || t[1] !== r || t[2] !== n
    ? ((o = G({ pendingWorktree: n, isConversationStarting: r, isConversationStartFailed: i })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = n),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, X.jsx)(b, { activities: o, children: a })), (t[4] = a), (t[5] = o), (t[6] = s))
      : (s = t[6]),
    s
  );
}
var Y,
  X,
  Me = e(() => {
    ((Y = c()), ue(), J(), (X = f()));
  });
async function Ne({ createPendingWorktree: e, intl: t, pendingWorktree: n, serviceTier: r }) {
  let i = Fe(n, t),
    a = await Pe(n, i, r),
    o = t.formatMessage({
      id: `worktreeInitV2.autoFix.label`,
      defaultMessage: `Fix worktree setup`,
      description: `Pending worktree label for a repair thread created after local environment setup fails`,
    });
  return e({
    hostId: n.hostId,
    label: o,
    initialThreadTitle: o,
    sourceWorkspaceRoot: n.sourceWorkspaceRoot,
    startingState: n.startingState,
    localEnvironmentConfigPath: null,
    launchMode: `start-conversation`,
    prompt: i,
    startConversationParamsInput: a,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
async function Pe(e, t, n) {
  let r = [{ type: `text`, text: t, text_elements: [] }];
  if (e.launchMode === `start-conversation`)
    return {
      ...e.startConversationParamsInput,
      input: r,
      commentAttachments: [],
      workspaceRoots: [e.sourceWorkspaceRoot],
      cwd: e.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: `system`,
      serviceTier: n,
    };
  let { config: i } = await F(`read-config-for-host`, {
    hostId: e.hostId,
    includeLayers: !1,
    cwd: e.sourceWorkspaceRoot,
  });
  return {
    input: r,
    commentAttachments: [],
    workspaceRoots: [e.sourceWorkspaceRoot],
    cwd: e.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode: O(`agent-mode-by-host-id`, {})[e.hostId] ?? `auto`,
    shouldSendPermissionOverrides: !0,
    model: null,
    serviceTier: n,
    reasoningEffort: null,
    collaborationMode: e.launchMode === `fork-conversation` ? e.sourceCollaborationMode : null,
    config: w(i),
    threadSource: `system`,
    workspaceKind: `project`,
  };
}
function Fe(e, t) {
  return t.formatMessage(
    {
      id: `worktreeInitV2.autoFix.prompt`,
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description: `Prompt sent to a repair thread created after local environment setup fails`,
    },
    {
      configPath: e.localEnvironmentConfigPath ?? ``,
      errorMessage: e.errorMessage ?? ``,
      lineBreak: `
`,
      outputText: e.setupOutputText,
      paragraphBreak: `

`,
    },
  );
}
var Ie = e(() => {
  (A(), M(), g(), N());
});
function Le(e) {
  let t = (0, Z.c)(54),
    {
      homePath: n,
      pendingWorktreeId: r,
      conversationPathBuilder: o,
      onConversationReady: c,
      stayOnClientThread: l,
    } = e === void 0 ? {} : e,
    u = n === void 0 ? `/` : n,
    d = o === void 0 ? ne : o,
    f = l === void 0 ? !1 : l,
    p = re(s),
    m = be(),
    h = _e(),
    oe = Ee(),
    g = Ce(),
    { pendingWorktreeId: se } = xe(),
    _ = r ?? se,
    {
      cancelPendingWorktree: v,
      clearPendingWorktreeAttention: ue,
      continuePendingWorktree: y,
      createPendingWorktree: b,
      retryPendingWorktree: x,
      setPendingWorktreePinned: S,
    } = fe(),
    { retryPendingWorktreeConversationStart: C } = de(),
    w = ae(_),
    T = pe().find((e) => e.pendingWorktreeId === _),
    D = ie({
      mutationFn: async (e) => {
        let { continueLocally: t } = e;
        if (w)
          if ((v(w.id), t))
            try {
              let e = await ke({ entry: w, workspaceRoot: w.sourceWorkspaceRoot });
              (me(p, {
                pendingWorktreeId: w.id,
                targetConversationId: e,
                targetWorkspaceRoot: w.sourceWorkspaceRoot,
              }),
                w.clientThreadId == null
                  ? Se(p, { conversationId: e, pendingWorktreeId: w.id }) || Oe(w, e)
                  : ve(p, { clientThreadId: w.clientThreadId, conversationId: e }),
                c?.(e),
                c == null && w.clientThreadId == null && h(d(e)));
            } catch (e) {
              let t = e;
              throw (
                v(w.id),
                a.error(`Error creating local task from worktree`, {
                  safe: {},
                  sensitive: { error: t },
                }),
                p
                  .get(Te)
                  .danger(
                    g.formatMessage(
                      {
                        id: `composer.localTaskError.v2`,
                        defaultMessage: `Error starting chat{br}{error}`,
                        description: `Toast text shown when we failed to start a thread`,
                      },
                      { br: (0, $.jsx)(`br`, {}), error: i(t) },
                    ),
                  ),
                t
              );
            }
          else (ce(p, w.id), oe(Re(w)));
      },
    }),
    O;
  t[0] !== b || t[1] !== g || t[2] !== h || t[3] !== w || t[4] !== p
    ? ((O = async () => {
        if (!w) return;
        let e =
          w.launchMode === `start-conversation`
            ? (w.startConversationParamsInput.collaborationMode?.settings.model ?? null)
            : (w.sourceCollaborationMode?.settings.model ?? null);
        h(
          te(
            await Ne({
              createPendingWorktree: b,
              intl: g,
              pendingWorktree: w,
              serviceTier: await he(p, w.hostId, e),
            }),
          ),
        );
      }),
      (t[0] = b),
      (t[1] = g),
      (t[2] = h),
      (t[3] = w),
      (t[4] = p),
      (t[5] = O))
    : (O = t[5]);
  let k;
  t[6] !== g || t[7] !== p
    ? ((k = (e) => {
        (a.error(`Error starting worktree setup repair thread`, {
          safe: {},
          sensitive: { error: e },
        }),
          p
            .get(Te)
            .danger(
              g.formatMessage(
                {
                  id: `composer.localTaskError.v2`,
                  defaultMessage: `Error starting chat{br}{error}`,
                  description: `Toast text shown when we failed to start a thread`,
                },
                { br: (0, $.jsx)(`br`, {}), error: i(e) },
              ),
            ));
      }),
      (t[6] = g),
      (t[7] = p),
      (t[8] = k))
    : (k = t[8]);
  let A;
  t[9] !== O || t[10] !== k
    ? ((A = { mutationFn: O, onError: k }), (t[9] = O), (t[10] = k), (t[11] = A))
    : (A = t[11]);
  let j = ie(A),
    M,
    N;
  (t[12] !== w || t[13] !== S
    ? ((N = () => {
        w && S(w.id, !w.isPinned);
      }),
      (M = [w, S]),
      (t[12] = w),
      (t[13] = S),
      (t[14] = M),
      (t[15] = N))
    : ((M = t[14]), (N = t[15])),
    ee(`toggle-thread-pin`, N, M));
  let P = (0, Q.useEffectEvent)(() => {
      _ && ue(_);
    }),
    F;
  t[16] === P
    ? (F = t[17])
    : ((F = () => {
        P();
      }),
      (t[16] = P),
      (t[17] = F));
  let I;
  if (
    (t[18] === _ ? (I = t[19]) : ((I = [_]), (t[18] = _), (t[19] = I)),
    (0, Q.useEffect)(F, I),
    D.isPending || D.isSuccess || w === void 0)
  )
    return null;
  if (T?.state === `succeeded` && !f)
    return (0, $.jsx)(ye, { to: d(T.conversationId), replace: !0 });
  if (w == null && T != null) return null;
  if (!w) {
    let e;
    return (
      t[20] === u
        ? (e = t[21])
        : ((e = (0, $.jsx)(ye, { to: u, replace: !0 })), (t[20] = u), (t[21] = e)),
      e
    );
  }
  let L;
  t[22] === w.phase ? (L = t[23]) : ((L = le(w.phase)), (t[22] = w.phase), (t[23] = L));
  let R = L,
    z = T?.state === `failed`,
    V = T?.state === `starting`,
    H = w.phase === `failed` || z,
    U = w.launchMode === `create-stable-worktree`,
    W = w.phase === `failed` && w.worktreeGitRoot != null && w.worktreeWorkspaceRoot != null,
    G = W && !U,
    K = W && w.localEnvironmentConfigPath != null,
    q;
  t[24] !== w.hostId || t[25] !== w.prompt
    ? ((q = (0, $.jsx)(ze, { hostId: w.hostId, prompt: w.prompt })),
      (t[24] = w.hostId),
      (t[25] = w.prompt),
      (t[26] = q))
    : (q = t[26]);
  let J;
  t[27] !== j ||
  t[28] !== K ||
  t[29] !== G ||
  t[30] !== D ||
  t[31] !== y ||
  t[32] !== R ||
  t[33] !== H ||
  t[34] !== U ||
  t[35] !== m ||
  t[36] !== h ||
  t[37] !== w.hostId ||
  t[38] !== w.id ||
  t[39] !== w.localEnvironmentConfigPath ||
  t[40] !== w.phase ||
  t[41] !== w.sourceWorkspaceRoot ||
  t[42] !== x ||
  t[43] !== C ||
  t[44] !== p
    ? ((J =
        R || H
          ? (0, $.jsxs)($.Fragment, {
              children: [
                R && !U
                  ? (0, $.jsx)(B, {
                      color: `secondary`,
                      loading: D.isPending,
                      onClick: () => {
                        D.mutate({ continueLocally: !0 });
                      },
                      children: (0, $.jsx)(E, {
                        id: `worktreeInitV2.workLocallyInstead`,
                        defaultMessage: `Work locally`,
                        description: `Button that cancels worktree setup and starts a local conversation`,
                      }),
                    })
                  : null,
                R
                  ? (0, $.jsx)(B, {
                      color: `secondary`,
                      loading: D.isPending,
                      onClick: () => {
                        D.mutate({ continueLocally: !1 });
                      },
                      children: (0, $.jsx)(E, {
                        id: `worktreeInitV2.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for worktree creation`,
                      }),
                    })
                  : null,
                H &&
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      w.phase === `failed` &&
                        (0, $.jsx)(B, {
                          color: `secondary`,
                          onClick: () => {
                            if ((ge(p, w.hostId), w.localEnvironmentConfigPath != null)) {
                              h(
                                we({
                                  configPath: w.localEnvironmentConfigPath,
                                  workspaceRoot: w.sourceWorkspaceRoot,
                                }),
                                {
                                  state: {
                                    hostId: w.hostId,
                                    returnTo: `${m.pathname}${m.search}${m.hash}`,
                                  },
                                },
                              );
                              return;
                            }
                            h(
                              `/settings/local-environments?${new URLSearchParams({ workspaceRoot: w.sourceWorkspaceRoot }).toString()}`,
                            );
                          },
                          children: (0, $.jsx)(E, {
                            id: `worktreeInitV2.editEnvironment`,
                            defaultMessage: `Edit environment`,
                            description: `Button label to open local environment settings after worktree setup fails`,
                          }),
                        }),
                      K &&
                        (0, $.jsx)(B, {
                          color: `secondary`,
                          loading: j.isPending,
                          onClick: () => {
                            j.mutate();
                          },
                          children: (0, $.jsx)(E, {
                            id: `worktreeInitV2.autoFix`,
                            defaultMessage: `Auto-fix`,
                            description: `Button label to start a repair thread after worktree setup fails`,
                          }),
                        }),
                      (0, $.jsx)(B, {
                        color: `secondary`,
                        onClick: () => {
                          if (w.phase === `failed`) {
                            x(w.id);
                            return;
                          }
                          C(w.id);
                        },
                        children: (0, $.jsx)(E, {
                          id: `codex.common.retry`,
                          defaultMessage: `Retry`,
                          description: `Retry button`,
                        }),
                      }),
                      G &&
                        (0, $.jsx)(B, {
                          color: `primary`,
                          onClick: () => {
                            y(w.id);
                          },
                          children: (0, $.jsx)(E, {
                            id: `worktreeInitV2.continueAnyway`,
                            defaultMessage: `Continue anyway`,
                            description: `Button label to continue starting a thread after local environment setup fails`,
                          }),
                        }),
                    ],
                  }),
              ],
            })
          : null),
      (t[27] = j),
      (t[28] = K),
      (t[29] = G),
      (t[30] = D),
      (t[31] = y),
      (t[32] = R),
      (t[33] = H),
      (t[34] = U),
      (t[35] = m),
      (t[36] = h),
      (t[37] = w.hostId),
      (t[38] = w.id),
      (t[39] = w.localEnvironmentConfigPath),
      (t[40] = w.phase),
      (t[41] = w.sourceWorkspaceRoot),
      (t[42] = x),
      (t[43] = C),
      (t[44] = p),
      (t[45] = J))
    : (J = t[45]);
  let Y;
  t[46] !== z || t[47] !== V || t[48] !== w || t[49] !== J
    ? ((Y = (0, $.jsx)(je, {
        pendingWorktree: w,
        isConversationStarting: V,
        isConversationStartFailed: z,
        children: J,
      })),
      (t[46] = z),
      (t[47] = V),
      (t[48] = w),
      (t[49] = J),
      (t[50] = Y))
    : (Y = t[50]);
  let X;
  return (
    t[51] !== q || t[52] !== Y
      ? ((X = (0, $.jsx)(De, {
          children: (0, $.jsx)(Ae, {
            children: (0, $.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [q, Y] }),
          }),
        })),
        (t[51] = q),
        (t[52] = Y),
        (t[53] = X))
      : (X = t[53]),
    X
  );
}
function Re(e) {
  let t = C(e.prompt).trim();
  if (e.launchMode !== `start-conversation`) return { prefillPrompt: t };
  let n = e.startConversationParamsInput.commentAttachments;
  return n == null || n.length === 0
    ? { prefillPrompt: t }
    : { prefillPrompt: t, prefillCommentAttachments: n };
}
function ze(e) {
  let t = (0, Z.c)(10),
    { hostId: n, prompt: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = k(r)), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = a && (0, $.jsx)(x, { pullRequestNumber: a })), (t[2] = a), (t[3] = o));
  let s;
  t[4] !== n || t[5] !== r
    ? ((s = (0, $.jsx)(h, { message: r, sentAtMs: null, hostId: n, alwaysShowActions: !0 })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, { className: `flex flex-col items-end gap-2`, children: [o, s] })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var Z,
  Q,
  $,
  Be = e(() => {
    ((Z = c()),
      u(),
      l(),
      n(),
      (Q = t(r(), 1)),
      I(),
      T(),
      m(),
      z(),
      R(),
      S(),
      v(),
      V(),
      _(),
      P(),
      d(),
      D(),
      p(),
      j(),
      L(),
      oe(),
      H(),
      W(),
      o(),
      U(),
      se(),
      y(),
      Me(),
      Ie(),
      ($ = f()));
  });
export { Be as n, Le as t };
//# sourceMappingURL=worktree-init-v2-page-2.js.map
