import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  It as r,
  Lt as i,
  Ol as a,
  Tt as o,
  Ut as s,
  Wt as c,
  dl as l,
  fr as ee,
  kl as u,
  lr as te,
  oc as ne,
  pl as re,
  tc as ie,
  wt as d,
  xl as f,
  xt as ae,
  yt as p,
  za as oe,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Fr as se,
  cr as ce,
  sr as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Jp as h,
  Yp as le,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Al as ue,
  If as g,
  Kl as _,
  Lb as v,
  Lf as y,
  Ll as b,
  Ly as x,
  Ml as de,
  Rb as S,
  Zl as C,
  aw as w,
  cu as fe,
  cw as T,
  db as E,
  fb as D,
  iu as pe,
  ou as me,
  uw as he,
  zy as O,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  c as ge,
  l as _e,
  s as k,
  xn as A,
  yn as ve,
} from "./app-initial~app-main~automations-page.js";
import {
  h as ye,
  p as j,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Ft as M,
  Pt as N,
  c as P,
  l as F,
  n as I,
  t as L,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import {
  at as be,
  it as R,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  Sn as xe,
  cn as Se,
  dn as Ce,
  ln as z,
  xn as B,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  a as we,
  c as Te,
  i as Ee,
  l as De,
  n as V,
  r as Oe,
  s as H,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~miy2ua3n.js";
import {
  n as ke,
  r as U,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5.js";
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
      ? ((s = (0, X.jsx)(L, { activities: o, children: a })), (t[4] = a), (t[5] = o), (t[6] = s))
      : (s = t[6]),
    s
  );
}
var Y,
  X,
  Me = e(() => {
    ((Y = a()), I(), J(), (X = f()));
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
  let i = [{ type: `text`, text: t, text_elements: [] }];
  if (e.launchMode === `start-conversation`)
    return {
      ...e.startConversationParamsInput,
      input: i,
      commentAttachments: [],
      workspaceRoots: [e.sourceWorkspaceRoot],
      cwd: e.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: `system`,
      serviceTier: n,
    };
  let { config: a } = await S(`read-config-for-host`, {
    hostId: e.hostId,
    includeLayers: !1,
    cwd: e.sourceWorkspaceRoot,
  });
  return {
    input: i,
    commentAttachments: [],
    workspaceRoots: [e.sourceWorkspaceRoot],
    cwd: e.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode: r(`agent-mode-by-host-id`, {})[e.hostId] ?? `auto`,
    shouldSendPermissionOverrides: !0,
    model: null,
    serviceTier: n,
    reasoningEffort: null,
    collaborationMode: e.launchMode === `fork-conversation` ? e.sourceCollaborationMode : null,
    config: g(a),
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
  (v(), y(), se(), i());
});
function Le(e) {
  let t = (0, Z.c)(54),
    {
      homePath: r,
      pendingWorktreeId: i,
      conversationPathBuilder: a,
      onConversationReady: s,
      stayOnClientThread: c,
    } = e === void 0 ? {} : e,
    l = r === void 0 ? `/` : r,
    u = a === void 0 ? te : a,
    ie = c === void 0 ? !1 : c,
    d = ne(n),
    f = pe(),
    p = me(),
    se = xe(),
    m = he(),
    { pendingWorktreeId: le } = fe(),
    g = i ?? le,
    {
      cancelPendingWorktree: _,
      clearPendingWorktreeAttention: v,
      continuePendingWorktree: y,
      createPendingWorktree: b,
      retryPendingWorktree: x,
      setPendingWorktreePinned: S,
    } = we(),
    { retryPendingWorktreeConversationStart: w } = Te(),
    E = Ee(g),
    D = De().find((e) => e.pendingWorktreeId === g),
    O = re({
      mutationFn: async (e) => {
        let { continueLocally: t } = e;
        if (E)
          if ((_(E.id), t))
            try {
              let e = await ge({ entry: E, workspaceRoot: E.sourceWorkspaceRoot });
              (Ce(d, {
                pendingWorktreeId: E.id,
                targetConversationId: e,
                targetWorkspaceRoot: E.sourceWorkspaceRoot,
              }),
                E.clientThreadId == null
                  ? de(d, { conversationId: e, pendingWorktreeId: E.id }) || _e(E, e)
                  : ue(d, { clientThreadId: E.clientThreadId, conversationId: e }),
                s?.(e),
                s == null && E.clientThreadId == null && p(u(e)));
            } catch (e) {
              let t = e;
              throw (
                _(E.id),
                o.error(`Error creating local task from worktree`, {
                  safe: {},
                  sensitive: { error: t },
                }),
                d
                  .get(ye)
                  .danger(
                    m.formatMessage(
                      {
                        id: `composer.localTaskError.v2`,
                        defaultMessage: `Error starting chat{br}{error}`,
                        description: `Toast text shown when we failed to start a thread`,
                      },
                      { br: (0, $.jsx)(`br`, {}), error: oe(t) },
                    ),
                  ),
                t
              );
            }
          else (Se(d, E.id), se(Re(E)));
      },
    }),
    k;
  t[0] !== b || t[1] !== m || t[2] !== p || t[3] !== E || t[4] !== d
    ? ((k = async () => {
        if (!E) return;
        let e =
          E.launchMode === `start-conversation`
            ? (E.startConversationParamsInput.collaborationMode?.settings.model ?? null)
            : (E.sourceCollaborationMode?.settings.model ?? null);
        p(
          ee(
            await Ne({
              createPendingWorktree: b,
              intl: m,
              pendingWorktree: E,
              serviceTier: await ce(d, E.hostId, e),
            }),
          ),
        );
      }),
      (t[0] = b),
      (t[1] = m),
      (t[2] = p),
      (t[3] = E),
      (t[4] = d),
      (t[5] = k))
    : (k = t[5]);
  let A;
  t[6] !== m || t[7] !== d
    ? ((A = (e) => {
        (o.error(`Error starting worktree setup repair thread`, {
          safe: {},
          sensitive: { error: e },
        }),
          d
            .get(ye)
            .danger(
              m.formatMessage(
                {
                  id: `composer.localTaskError.v2`,
                  defaultMessage: `Error starting chat{br}{error}`,
                  description: `Toast text shown when we failed to start a thread`,
                },
                { br: (0, $.jsx)(`br`, {}), error: oe(e) },
              ),
            ));
      }),
      (t[6] = m),
      (t[7] = d),
      (t[8] = A))
    : (A = t[8]);
  let j;
  t[9] !== k || t[10] !== A
    ? ((j = { mutationFn: k, onError: A }), (t[9] = k), (t[10] = A), (t[11] = j))
    : (j = t[11]);
  let M = re(j),
    N,
    P;
  (t[12] !== E || t[13] !== S
    ? ((P = () => {
        E && S(E.id, !E.isPinned);
      }),
      (N = [E, S]),
      (t[12] = E),
      (t[13] = S),
      (t[14] = N),
      (t[15] = P))
    : ((N = t[14]), (P = t[15])),
    ae(`toggle-thread-pin`, P, N));
  let F = (0, Q.useEffectEvent)(() => {
      g && v(g);
    }),
    I;
  t[16] === F
    ? (I = t[17])
    : ((I = () => {
        F();
      }),
      (t[16] = F),
      (t[17] = I));
  let L;
  if (
    (t[18] === g ? (L = t[19]) : ((L = [g]), (t[18] = g), (t[19] = L)),
    (0, Q.useEffect)(I, L),
    O.isPending || O.isSuccess || E === void 0)
  )
    return null;
  if (D?.state === `succeeded` && !ie)
    return (0, $.jsx)(C, { to: u(D.conversationId), replace: !0 });
  if (E == null && D != null) return null;
  if (!E) {
    let e;
    return (
      t[20] === l
        ? (e = t[21])
        : ((e = (0, $.jsx)(C, { to: l, replace: !0 })), (t[20] = l), (t[21] = e)),
      e
    );
  }
  let R;
  t[22] === E.phase ? (R = t[23]) : ((R = Oe(E.phase)), (t[22] = E.phase), (t[23] = R));
  let z = R,
    B = D?.state === `failed`,
    V = D?.state === `starting`,
    H = E.phase === `failed` || B,
    U = E.launchMode === `create-stable-worktree`,
    W = E.phase === `failed` && E.worktreeGitRoot != null && E.worktreeWorkspaceRoot != null,
    G = W && !U,
    K = W && E.localEnvironmentConfigPath != null,
    q;
  t[24] !== E.hostId || t[25] !== E.prompt
    ? ((q = (0, $.jsx)(ze, { hostId: E.hostId, prompt: E.prompt })),
      (t[24] = E.hostId),
      (t[25] = E.prompt),
      (t[26] = q))
    : (q = t[26]);
  let J;
  t[27] !== M ||
  t[28] !== K ||
  t[29] !== G ||
  t[30] !== O ||
  t[31] !== y ||
  t[32] !== z ||
  t[33] !== H ||
  t[34] !== U ||
  t[35] !== f ||
  t[36] !== p ||
  t[37] !== E.hostId ||
  t[38] !== E.id ||
  t[39] !== E.localEnvironmentConfigPath ||
  t[40] !== E.phase ||
  t[41] !== E.sourceWorkspaceRoot ||
  t[42] !== x ||
  t[43] !== w ||
  t[44] !== d
    ? ((J =
        z || H
          ? (0, $.jsxs)($.Fragment, {
              children: [
                z && !U
                  ? (0, $.jsx)(h, {
                      color: `secondary`,
                      loading: O.isPending,
                      onClick: () => {
                        O.mutate({ continueLocally: !0 });
                      },
                      children: (0, $.jsx)(T, {
                        id: `worktreeInitV2.workLocallyInstead`,
                        defaultMessage: `Work locally`,
                        description: `Button that cancels worktree setup and starts a local conversation`,
                      }),
                    })
                  : null,
                z
                  ? (0, $.jsx)(h, {
                      color: `secondary`,
                      loading: O.isPending,
                      onClick: () => {
                        O.mutate({ continueLocally: !1 });
                      },
                      children: (0, $.jsx)(T, {
                        id: `worktreeInitV2.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for worktree creation`,
                      }),
                    })
                  : null,
                H &&
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      E.phase === `failed` &&
                        (0, $.jsx)(h, {
                          color: `secondary`,
                          onClick: () => {
                            if ((be(d, E.hostId), E.localEnvironmentConfigPath != null)) {
                              p(
                                ve({
                                  configPath: E.localEnvironmentConfigPath,
                                  workspaceRoot: E.sourceWorkspaceRoot,
                                }),
                                {
                                  state: {
                                    hostId: E.hostId,
                                    returnTo: `${f.pathname}${f.search}${f.hash}`,
                                  },
                                },
                              );
                              return;
                            }
                            p(
                              `/settings/local-environments?${new URLSearchParams({ workspaceRoot: E.sourceWorkspaceRoot }).toString()}`,
                            );
                          },
                          children: (0, $.jsx)(T, {
                            id: `worktreeInitV2.editEnvironment`,
                            defaultMessage: `Edit environment`,
                            description: `Button label to open local environment settings after worktree setup fails`,
                          }),
                        }),
                      K &&
                        (0, $.jsx)(h, {
                          color: `secondary`,
                          loading: M.isPending,
                          onClick: () => {
                            M.mutate();
                          },
                          children: (0, $.jsx)(T, {
                            id: `worktreeInitV2.autoFix`,
                            defaultMessage: `Auto-fix`,
                            description: `Button label to start a repair thread after worktree setup fails`,
                          }),
                        }),
                      (0, $.jsx)(h, {
                        color: `secondary`,
                        onClick: () => {
                          if (E.phase === `failed`) {
                            x(E.id);
                            return;
                          }
                          w(E.id);
                        },
                        children: (0, $.jsx)(T, {
                          id: `codex.common.retry`,
                          defaultMessage: `Retry`,
                          description: `Retry button`,
                        }),
                      }),
                      G &&
                        (0, $.jsx)(h, {
                          color: `primary`,
                          onClick: () => {
                            y(E.id);
                          },
                          children: (0, $.jsx)(T, {
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
      (t[27] = M),
      (t[28] = K),
      (t[29] = G),
      (t[30] = O),
      (t[31] = y),
      (t[32] = z),
      (t[33] = H),
      (t[34] = U),
      (t[35] = f),
      (t[36] = p),
      (t[37] = E.hostId),
      (t[38] = E.id),
      (t[39] = E.localEnvironmentConfigPath),
      (t[40] = E.phase),
      (t[41] = E.sourceWorkspaceRoot),
      (t[42] = x),
      (t[43] = w),
      (t[44] = d),
      (t[45] = J))
    : (J = t[45]);
  let Y;
  t[46] !== B || t[47] !== V || t[48] !== E || t[49] !== J
    ? ((Y = (0, $.jsx)(je, {
        pendingWorktree: E,
        isConversationStarting: V,
        isConversationStartFailed: B,
        children: J,
      })),
      (t[46] = B),
      (t[47] = V),
      (t[48] = E),
      (t[49] = J),
      (t[50] = Y))
    : (Y = t[50]);
  let X;
  return (
    t[51] !== q || t[52] !== Y
      ? ((X = (0, $.jsx)(ke, {
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
  let t = E(e.prompt).trim();
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
  t[0] === r ? (i = t[1]) : ((i = x(r)), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = a && (0, $.jsx)(P, { pullRequestNumber: a })), (t[2] = a), (t[3] = o));
  let s;
  t[4] !== n || t[5] !== r
    ? ((s = (0, $.jsx)(N, { message: r, sentAtMs: null, hostId: n, alwaysShowActions: !0 })),
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
    ((Z = a()),
      l(),
      ie(),
      c(),
      (Q = t(u(), 1)),
      w(),
      _(),
      m(),
      le(),
      j(),
      M(),
      z(),
      B(),
      F(),
      O(),
      p(),
      D(),
      s(),
      b(),
      A(),
      R(),
      U(),
      W(),
      d(),
      k(),
      H(),
      V(),
      Me(),
      Ie(),
      ($ = f()));
  });
export { Be as n, Le as t };
//# sourceMappingURL=worktree-init-v2-page-1.js.map
