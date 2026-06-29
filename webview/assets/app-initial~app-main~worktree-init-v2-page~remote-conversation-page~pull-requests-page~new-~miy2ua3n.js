import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $ as n,
  Ol as r,
  Z as i,
  bt as a,
  kl as o,
  ot as s,
  ut as c,
  yt as l,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Lb as u,
  Rb as d,
  Tv as f,
  _S as p,
  _v as m,
  fv as h,
  gS as g,
  pv as _,
  wv as v,
  yv as y,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  d as b,
  h as x,
  p as S,
  u as C,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
async function w({
  scope: e,
  appendTranscriptItem: t,
  conversationId: n,
  hostId: r,
  intl: i,
  objective: a,
  threadSettings: o,
}) {
  try {
    return (
      await d(`set-thread-goal`, {
        conversationId: n,
        hostId: r,
        objective: a,
        appendTranscriptItem: t,
        threadSettings: o,
      }),
      !0
    );
  } catch {
    return (
      e
        .get(x)
        .danger(
          i.formatMessage({
            id: `composer.threadGoal.setError`,
            defaultMessage: `Failed to set goal`,
            description: `Toast shown when setting a thread goal fails`,
          }),
        ),
      !1
    );
  }
}
async function T({ scope: e, conversationId: t, hostId: n, status: r, threadSettings: i }) {
  try {
    return (
      await d(`set-thread-goal-status`, {
        conversationId: t,
        hostId: n,
        status: r,
        threadSettings: i,
      }),
      !0
    );
  } catch {
    return (
      e
        .get(x)
        .danger(
          e
            .get(b)
            .formatMessage({
              id: `composer.threadGoal.statusUpdateError`,
              defaultMessage: `Failed to update goal`,
              description: `Toast shown when updating a thread goal fails`,
            }),
        ),
      !1
    );
  }
}
async function ee({ scope: e, conversationId: t, hostId: n, intl: r }) {
  try {
    return (await d(`clear-thread-goal`, { conversationId: t, hostId: n }), !0);
  } catch {
    return (
      e
        .get(x)
        .danger(
          r.formatMessage({
            id: `composer.threadGoal.clearError`,
            defaultMessage: `Failed to clear goal`,
            description: `Toast shown when clearing a thread goal fails`,
          }),
        ),
      !1
    );
  }
}
var E,
  D = e(() => {
    (u(), S(), C(), (E = 4e3));
  });
async function O({ draft: e, hostId: t }) {
  let r = e.objective.trim(),
    i = null;
  try {
    let a = await Promise.all(
        e.pastedTextAttachments.map(async (e, n) => ({
          contentsBase64: await j(e.file.fsPath, e.hostId ?? t),
          filename: `pasted-text-${n + 1}.txt`,
        })),
      ),
      o = [],
      s = [];
    for (let [n, r] of e.imageAttachments.entries()) {
      let e = n + 1;
      if (ce(r.src)) s.push({ position: e, url: r.src });
      else {
        let n = await M(r, t);
        o.push({ contentsBase64: n, filename: `image-${e}.${se(r)}`, position: e });
      }
    }
    if (r.length === 0 && a.length === 0 && o.length === 0 && s.length === 0)
      throw Error(`Goal objective must not be empty`);
    let c = async () => {
        if (i != null) return i;
        let e = await d(`create-thread-goal-attachment-directory-for-host`, { hostId: t });
        return ((i = e.path), e.path);
      },
      l = async ({ contentsBase64: e, filename: n }) =>
        d(`write-thread-goal-attachment-for-host`, {
          contentsBase64: e,
          directoryPath: await c(),
          filename: n,
          hostId: t,
        }),
      u = [];
    for (let e of a) {
      let t = await l({ contentsBase64: e.contentsBase64, filename: e.filename });
      u.push(`- pasted text file: ${t.path}. Read this file before continuing.`);
    }
    r = N(r, `Referenced pasted text files:`, u);
    let f = [];
    for (let e of o) {
      let t = await l({ contentsBase64: e.contentsBase64, filename: e.filename });
      f.push(`- [Image #${e.position}]: ${t.path}`);
    }
    if (
      ((r = N(r, `Referenced image files:`, f)),
      (r = N(
        r,
        `Referenced image URLs:`,
        s.map(({ position: e, url: t }) => `- [Image #${e}]: ${t}`),
      )),
      Array.from(r).length <= 4e3)
    )
      return { objective: r, attachmentDirectory: i };
    let p = ae(n(await c(), I));
    return (
      await l({ contentsBase64: g(r), filename: I }), { objective: p, attachmentDirectory: i }
    );
  } catch (e) {
    throw (i != null && (await A(t, i)), e);
  }
}
async function te({ hostId: e, materialized: t }) {
  t.attachmentDirectory != null && (await A(e, t.attachmentDirectory));
}
async function k({ draft: e, fallbackHostId: t }) {
  await Promise.allSettled(
    e.pastedTextAttachments.map((e) =>
      d(`remove-pasted-text-attachment-for-host`, { hostId: e.hostId ?? t, path: e.file.path }),
    ),
  );
}
async function ne({ hostId: e, objective: t }) {
  let n = ie(t);
  if (n == null) return null;
  let { codexHome: r } = await s(`codex-home`, { params: { hostId: e } });
  return oe(n, r) ? n : null;
}
async function re({ hostId: e, objective: t }) {
  let n = await ne({ hostId: e, objective: t });
  if (n == null) return t;
  let { contents: r } = await s(`read-file`, { params: { hostId: e, path: n } });
  return r;
}
function ie(e) {
  if (!e.startsWith(P) || !e.endsWith(F)) return null;
  let t = e.slice(38, -19);
  return t.length > 0 ? t : null;
}
function ae(e) {
  let t = `${P}${e}${F}`;
  if (Array.from(t).length > 4e3)
    throw Error(`Goal objective file reference exceeds ${E} characters`);
  return t;
}
function oe(e, t) {
  let r = e.split(/[\\/]/u).filter(Boolean).at(-2);
  return r == null || !L.test(r) ? !1 : e === n(t, `attachments`, r, I);
}
async function A(e, t) {
  await d(`remove-thread-goal-attachment-directory-for-host`, { hostId: e, path: t }).catch(
    () => void 0,
  );
}
async function j(e, t) {
  let { contentsBase64: n } = await s(`read-file-binary`, { params: { hostId: t, path: e } });
  if (n == null) throw Error(`Unable to read goal attachment ${e}`);
  return n;
}
async function M(e, t) {
  if (e.src.startsWith(`data:`)) {
    let t = e.src.match(/^data:[^,]*?(;base64)?,(.*)$/is);
    if (t == null) throw Error(`Unable to decode goal image`);
    return t[1] == null ? g(decodeURIComponent(t[2] ?? ``)) : (t[2] ?? ``);
  }
  let n = e.localPath ?? e.src.replace(/^file:\/\//i, ``);
  return j(e.localPath == null ? decodeURIComponent(n) : n, e.localPath == null ? y : t);
}
function se(e) {
  let t = (e.filename ?? e.localPath)?.match(/\.([a-z0-9]{1,8})$/i)?.[1];
  if (t != null) return t.toLowerCase();
  let n = e.src.match(/^data:image\/([a-z0-9.+-]+);/i)?.[1];
  return n === `jpeg` ? `jpg` : n?.replace(/[^a-z0-9]/gi, ``).slice(0, 8) || `png`;
}
function ce(e) {
  return /^https?:\/\//i.test(e);
}
function N(e, t, n) {
  return n.length === 0
    ? e
    : `${e.length > 0 ? `${e}\n\n` : ``}${t}\n${n.join(`
`)}`;
}
var P,
  F,
  I,
  L,
  R = e(() => {
    (u(),
      m(),
      p(),
      i(),
      c(),
      D(),
      (P = `Read the Codex goal objective file at `),
      (F = ` before continuing.`),
      (I = `goal-objective.md`),
      (L = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i));
  });
function le() {
  return (0, U.useSyncExternalStore)(ue, V);
}
function z() {
  return {
    addPendingWorktreeConversationStart: B,
    beginPendingWorktreeConversationStart: (e) =>
      G.get(e)?.state === `waiting` ? (G.set(e, { state: `starting` }), H(), !0) : !1,
    failPendingWorktreeConversationStart: (e) => {
      G.has(e) && (G.set(e, { state: `failed` }), H());
    },
    succeedPendingWorktreeConversationStart: (e, t) => {
      G.has(e) && (G.set(e, { state: `succeeded`, conversationId: t }), H());
    },
    retryPendingWorktreeConversationStart: (e) => {
      G.has(e) && (G.set(e, { state: `waiting` }), H());
    },
    removePendingWorktreeConversationStart: (e) => {
      G.delete(e) && H();
    },
  };
}
function B(e) {
  (G.set(e, { state: `waiting` }), H());
}
function ue(e) {
  return (
    W.add(e),
    () => {
      W.delete(e);
    }
  );
}
function V() {
  return K;
}
function H() {
  ((K = Array.from(G, ([e, t]) => ({ pendingWorktreeId: e, ...t }))),
    W.forEach((e) => {
      e();
    }));
}
var U,
  W,
  G,
  K,
  q = e(() => {
    ((U = t(o(), 1)), (W = new Set()), (G = new Map()), (K = []));
  });
function J(e) {
  return `${e}:${_()}`;
}
function Y(e) {
  let t = e.lastIndexOf(`:`);
  return t <= 0 || t === e.length - 1 ? y : e.slice(0, t);
}
function de(e) {
  switch (e) {
    case `queued`:
    case `creating`:
    case `setting-up`:
      return !0;
    case `worktree-ready`:
    case `failed`:
      return !1;
  }
}
function fe() {
  let [e] = f(`pending_worktrees`);
  return e ?? $;
}
function pe(e) {
  let t = (0, Q.c)(3),
    [n] = f(`pending_worktrees`);
  if (!e) return null;
  if (n === void 0) return;
  let r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = n.find((t) => t.id === e) ?? null), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function me() {
  let e = (0, Q.c)(32),
    [t, n] = f(`pending_worktrees`),
    { removePendingWorktreeConversationStart: r, retryPendingWorktreeConversationStart: i } = z(),
    o;
  e[0] === n
    ? (o = e[1])
    : ((o = (e) => {
        let t = J(e.hostId),
          r = X(t, e);
        return window.electronBridge == null
          ? (r.launchMode !== `create-stable-worktree` && B(t),
            n((e) => [...(e === void 0 ? [] : e), r]),
            t)
          : Z(t, e);
      }),
      (e[0] = n),
      (e[1] = o));
  let s = o,
    c;
  e[2] === n
    ? (c = e[3])
    : ((c = (e, t) => {
        if (t.length !== 0) {
          if (window.electronBridge == null) {
            n((n) => (n === void 0 ? [] : n).map((n) => (n.id === e ? _e(n, t) : n)));
            return;
          }
          t.forEach((t) => {
            a.dispatchMessage(`pending-worktree-update-metadata`, {
              hostId: Y(e),
              id: e,
              update: t,
            });
          });
        }
      }),
      (e[2] = n),
      (e[3] = c));
  let l = c,
    u;
  e[4] === l
    ? (u = e[5])
    : ((u = (e, t) => {
        l(e, [
          { type: `label`, label: t },
          { type: `labelEdited`, labelEdited: !0 },
        ]);
      }),
      (e[4] = l),
      (e[5] = u));
  let d = u,
    p;
  e[6] === l
    ? (p = e[7])
    : ((p = (e, t) => {
        l(
          e,
          t
            ? [{ type: `isPinned`, isPinned: t }]
            : [
                { type: `isPinned`, isPinned: t },
                { type: `pinnedBeforeThreadId`, beforeThreadId: null },
              ],
        );
      }),
      (e[6] = l),
      (e[7] = p));
  let m = p,
    h;
  e[8] === l
    ? (h = e[9])
    : ((h = (e, t) => {
        l(e, [{ type: `pinnedBeforeThreadId`, beforeThreadId: t }]);
      }),
      (e[8] = l),
      (e[9] = h));
  let g = h,
    _;
  e[10] === l
    ? (_ = e[11])
    : ((_ = (e) => {
        l(e, [{ type: `needsAttention`, needsAttention: !1 }]);
      }),
      (e[10] = l),
      (e[11] = _));
  let v = _,
    y;
  e[12] !== i || e[13] !== n
    ? ((y = (e) => {
        if ((i(e), window.electronBridge == null)) {
          n((t) =>
            (t === void 0 ? [] : t).map((t) =>
              t.id === e
                ? {
                    ...t,
                    attempt: t.attempt + 1,
                    phase: `queued`,
                    worktreeOutputText: ``,
                    setupOutputText: ``,
                    errorMessage: null,
                    worktreeWorkspaceRoot: null,
                    worktreeGitRoot: null,
                    needsAttention: !1,
                  }
                : t,
            ),
          );
          return;
        }
        a.dispatchMessage(`pending-worktree-retry`, { hostId: Y(e), id: e });
      }),
      (e[12] = i),
      (e[13] = n),
      (e[14] = y))
    : (y = e[14]);
  let b = y,
    x;
  e[15] === n
    ? (x = e[16])
    : ((x = (e) => {
        if ((B(e), window.electronBridge == null)) {
          n((t) =>
            (t === void 0 ? [] : t).map((t) =>
              t.id === e &&
              t.phase === `failed` &&
              t.worktreeGitRoot != null &&
              t.worktreeWorkspaceRoot != null
                ? { ...t, phase: `worktree-ready`, needsAttention: !1 }
                : t,
            ),
          );
          return;
        }
        a.dispatchMessage(`pending-worktree-continue`, { hostId: Y(e), id: e });
      }),
      (e[15] = n),
      (e[16] = x));
  let S = x,
    C,
    w;
  if (e[17] !== t || e[18] !== r || e[19] !== n) {
    ((C = (e) => {
      if ((r(e), i(e), window.electronBridge == null)) {
        n((t) => (t === void 0 ? [] : t).filter((t) => t.id !== e));
        return;
      }
      a.dispatchMessage(`pending-worktree-cancel`, { hostId: Y(e), id: e });
    }),
      (w = (e) => {
        if ((r(e), i(e), window.electronBridge == null)) {
          n((t) => (t === void 0 ? [] : t).filter((t) => t.id !== e));
          return;
        }
        a.dispatchMessage(`pending-worktree-dismiss`, { hostId: Y(e), id: e });
      }));
    function i(e) {
      let n = t?.find((t) => t.id === e);
      n?.launchMode !== `start-conversation` ||
        n.threadGoalDraft == null ||
        k({ draft: n.threadGoalDraft, fallbackHostId: n.hostId });
    }
    ((e[17] = t), (e[18] = r), (e[19] = n), (e[20] = C), (e[21] = w));
  } else ((C = e[20]), (w = e[21]));
  let T;
  return (
    e[22] !== C ||
    e[23] !== v ||
    e[24] !== S ||
    e[25] !== s ||
    e[26] !== w ||
    e[27] !== d ||
    e[28] !== b ||
    e[29] !== m ||
    e[30] !== g
      ? ((T = {
          createPendingWorktree: s,
          renamePendingWorktree: d,
          setPendingWorktreePinned: m,
          setPendingWorktreePinnedBeforeThreadId: g,
          clearPendingWorktreeAttention: v,
          retryPendingWorktree: b,
          continuePendingWorktree: S,
          cancelPendingWorktree: C,
          dismissPendingWorktree: w,
        }),
        (e[22] = C),
        (e[23] = v),
        (e[24] = S),
        (e[25] = s),
        (e[26] = w),
        (e[27] = d),
        (e[28] = b),
        (e[29] = m),
        (e[30] = g),
        (e[31] = T))
      : (T = e[31]),
    T
  );
}
function he(e) {
  return Z(J(e.hostId), e);
}
function X(e, t) {
  let n = {
    id: e,
    clientThreadId: t.clientThreadId,
    hostId: t.hostId,
    createdAt: Date.now(),
    attempt: 1,
    phase: `queued`,
    labelEdited: !1,
    worktreeOutputText: ``,
    setupOutputText: ``,
    errorMessage: null,
    worktreeWorkspaceRoot: null,
    worktreeGitRoot: null,
    needsAttention: !1,
    isPinned: !1,
    pinnedBeforeThreadId: null,
    label: t.label,
    initialThreadTitle: t.initialThreadTitle,
    browserTransferSourceBrowserTabId: t.browserTransferSourceBrowserTabId,
    browserTransferSourceBrowserTabIds: t.browserTransferSourceBrowserTabIds,
    browserTransferSourceConversationId: t.browserTransferSourceConversationId,
    sourceWorkspaceRoot: t.sourceWorkspaceRoot,
    startingState: t.startingState,
    localEnvironmentConfigPath: t.localEnvironmentConfigPath,
    prompt: t.prompt,
  };
  switch (t.launchMode) {
    case `create-stable-worktree`:
      return {
        ...n,
        launchMode: `create-stable-worktree`,
        startConversationParamsInput: null,
        sourceConversationId: null,
        sourceCollaborationMode: null,
      };
    case `fork-conversation`:
      return {
        ...n,
        launchMode: `fork-conversation`,
        startConversationParamsInput: null,
        sourceConversationId: t.sourceConversationId,
        sourceCollaborationMode: t.sourceCollaborationMode,
        targetTurnId: t.targetTurnId,
        threadSource: t.threadSource,
      };
    case `start-conversation`:
      return {
        ...n,
        launchMode: `start-conversation`,
        startConversationParamsInput: t.startConversationParamsInput,
        threadStartHostId: t.threadStartHostId,
        threadGoalDraft: t.threadGoalDraft,
        sourceConversationId: null,
        sourceCollaborationMode: null,
      };
  }
}
function Z(e, t) {
  if (window.electronBridge == null)
    throw Error(`Worktree app actions require the Codex desktop app`);
  return (
    X(e, t).launchMode !== `create-stable-worktree` && B(e),
    a.dispatchMessage(`pending-worktree-create`, { hostId: t.hostId, request: ge(e, t) }),
    e
  );
}
function ge(e, t) {
  return { id: e, ...t };
}
function _e(e, t) {
  return t.reduce((e, t) => {
    switch (t.type) {
      case `isPinned`:
        return { ...e, isPinned: t.isPinned };
      case `pinnedBeforeThreadId`:
        return { ...e, pinnedBeforeThreadId: t.beforeThreadId };
      case `label`:
        return { ...e, label: t.label };
      case `labelEdited`:
        return { ...e, labelEdited: t.labelEdited };
      case `needsAttention`:
        return { ...e, needsAttention: t.needsAttention };
    }
  }, e);
}
var Q,
  $,
  ve = e(() => {
    ((Q = r()), h(), R(), l(), m(), v(), q(), ($ = []));
  });
export {
  w as _,
  me as a,
  z as c,
  k as d,
  R as f,
  D as g,
  ee as h,
  pe as i,
  le as l,
  re as m,
  ve as n,
  fe as o,
  O as p,
  de as r,
  q as s,
  he as t,
  te as u,
  T as v,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~miy2ua3n.js.map
