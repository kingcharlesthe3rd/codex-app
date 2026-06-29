import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  Wt as a,
  dl as o,
  dn as s,
  gn as c,
  kl as l,
  oc as u,
  pl as d,
  tc as f,
  xl as p,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as m,
  Es as h,
  Go as g,
  Ho as _,
  Ia as v,
  Jp as y,
  Ma as b,
  Na as x,
  Ts as ee,
  Yp as S,
  ja as C,
  vn as te,
  yn as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  FC as T,
  LC as E,
  MC as D,
  aw as O,
  cC as ne,
  cw as k,
  iw as A,
  oC as j,
  uw as re,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { gt as ie, vt as M } from "./app-initial~app-main~automations-page.js";
import {
  h as N,
  p as P,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import { Mt as F, jt as ae } from "./app-initial~app-main~onboarding-page.js";
import {
  b as oe,
  v as I,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  a as L,
  i as R,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as z,
  t as B,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as V,
  t as H,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as U, t as W } from "./segmented-toggle.js";
var G,
  K = e(() => {
    (O(),
      (G = A({
        branchPrefix: {
          id: `settings.git.branchPrefix.label`,
          defaultMessage: `Branch prefix`,
          description: `Label for git branch prefix setting`,
        },
        alwaysForcePush: {
          id: `settings.git.forcePush.label`,
          defaultMessage: `Always force push`,
          description: `Label for always force push toggle`,
        },
        createDraftPullRequests: {
          id: `settings.git.createDraftPullRequest.label`,
          defaultMessage: `Create draft pull requests`,
          description: `Label for create draft pull requests toggle`,
        },
        pullRequestMergeMethod: {
          id: `settings.git.pullRequestMergeMethod.label`,
          defaultMessage: `Pull request merge method`,
          description: `Label for pull request merge method setting`,
        },
        merge: {
          id: `settings.git.pullRequestMergeMethod.merge`,
          defaultMessage: `Merge`,
          description: `Merge option for pull request merge method`,
        },
        squash: {
          id: `settings.git.pullRequestMergeMethod.squash`,
          defaultMessage: `Squash`,
          description: `Squash option for pull request merge method`,
        },
        automaticWorktreeDeletion: {
          id: `settings.worktrees.autoCleanup.label`,
          defaultMessage: `Automatically delete old worktrees`,
          description: `Label for the automatic worktree deletion toggle`,
        },
        autoDeleteLimit: {
          id: `settings.worktrees.keepCount.label`,
          defaultMessage: `Auto-delete limit`,
          description: `Label for the worktree auto-delete limit setting`,
        },
        commitInstructions: {
          id: `settings.git.commitInstructions.label`,
          defaultMessage: `Commit instructions`,
          description: `Label for commit instructions`,
        },
        pullRequestInstructions: {
          id: `settings.git.prInstructions.label`,
          defaultMessage: `Pull request instructions`,
          description: `Label for pull request instructions`,
        },
      })));
  });
function se() {
  let e = (0, le.c)(66),
    t = u(n),
    r = re(),
    [i, a] = (0, ue.useState)(!1),
    [o, c] = (0, ue.useState)(null),
    l = E(s.autoCleanupEnabled),
    f = E(s.keepCount),
    p;
  e[0] === t ? (p = e[1]) : ((p = (e) => T(t, s.autoCleanupEnabled, e)), (e[0] = t), (e[1] = p));
  let m, h;
  e[2] !== r || e[3] !== t
    ? ((m = (e, n) => {
        if (n) {
          t.get(N).success(
            r.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        t.get(N).success(
          r.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (h = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
        );
      }),
      (e[2] = r),
      (e[3] = t),
      (e[4] = m),
      (e[5] = h))
    : ((m = e[4]), (h = e[5]));
  let g;
  e[6] !== p || e[7] !== m || e[8] !== h
    ? ((g = { mutationFn: p, onSuccess: m, onError: h }),
      (e[6] = p),
      (e[7] = m),
      (e[8] = h),
      (e[9] = g))
    : (g = e[9]);
  let _ = d(g),
    v;
  e[10] === t ? (v = e[11]) : ((v = (e) => T(t, s.keepCount, e)), (e[10] = t), (e[11] = v));
  let y, b;
  e[12] !== r || e[13] !== t
    ? ((y = () => {
        (c(null),
          t
            .get(N)
            .success(
              r.formatMessage({
                id: `settings.worktrees.keepCount.save.success`,
                defaultMessage: `Saved auto-delete limit`,
                description: `Toast shown when the worktree auto-delete limit is saved`,
              }),
            ));
      }),
      (b = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
        );
      }),
      (e[12] = r),
      (e[13] = t),
      (e[14] = y),
      (e[15] = b))
    : ((y = e[14]), (b = e[15]));
  let x;
  e[16] !== v || e[17] !== y || e[18] !== b
    ? ((x = { mutationFn: v, onSuccess: y, onError: b }),
      (e[16] = v),
      (e[17] = y),
      (e[18] = b),
      (e[19] = x))
    : (x = e[19]);
  let ee = d(x),
    S = String(f),
    C = o ?? S,
    w = _.isPending,
    D = ee.isPending || w || !l,
    O;
  e[20] !== w || e[21] !== _
    ? ((O = (e) => {
        if (!w) {
          if (e) {
            _.mutate(!0);
            return;
          }
          a(!0);
        }
      }),
      (e[20] = w),
      (e[21] = _),
      (e[22] = O))
    : (O = e[22]);
  let ne = O,
    A;
  e[23] === _
    ? (A = e[24])
    : ((A = () => {
        (c(null), a(!1), _.mutate(!1));
      }),
      (e[23] = _),
      (e[24] = A));
  let j = A,
    ie;
  e[25] !== D || e[26] !== f || e[27] !== o || e[28] !== ee
    ? ((ie = () => {
        if (D || o == null) return;
        let e = o.trim(),
          t = Number.parseInt(e, 10);
        if (e.length === 0 || Number.isNaN(t)) {
          c(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === f) {
          c(null);
          return;
        }
        ee.mutate(n);
      }),
      (e[25] = D),
      (e[26] = f),
      (e[27] = o),
      (e[28] = ee),
      (e[29] = ie))
    : (ie = e[29]);
  let M = ie,
    P,
    F;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, q.jsx)(k, { ...G.automaticWorktreeDeletion })),
      (F = (0, q.jsx)(k, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (e[30] = P),
      (e[31] = F))
    : ((P = e[30]), (F = e[31]));
  let oe;
  e[32] === r
    ? (oe = e[33])
    : ((oe = r.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (e[32] = r),
      (e[33] = oe));
  let I;
  e[34] !== l || e[35] !== ne || e[36] !== w || e[37] !== oe
    ? ((I = (0, q.jsx)(ae, {
        label: P,
        description: F,
        control: (0, q.jsx)(te, { checked: l, disabled: w, onChange: ne, ariaLabel: oe }),
      })),
      (e[34] = l),
      (e[35] = ne),
      (e[36] = w),
      (e[37] = oe),
      (e[38] = I))
    : (I = e[38]);
  let L;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, q.jsx)(k, { ...G.autoDeleteLimit })), (e[39] = L))
    : (L = e[39]);
  let R;
  e[40] === l
    ? (R = e[41])
    : ((R = l
        ? (0, q.jsx)(k, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of Codex worktrees to keep before older ones are pruned automatically. Codex snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, q.jsx)(k, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. Codex will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (e[40] = l),
      (e[41] = R));
  let z;
  e[42] !== D || e[43] !== S
    ? ((z = (e) => {
        if (D) return;
        let t = e.target.value;
        c(t === S ? null : t);
      }),
      (e[42] = D),
      (e[43] = S),
      (e[44] = z))
    : (z = e[44]);
  let B;
  e[45] === M
    ? (B = e[46])
    : ((B = (e) => {
        e.key === `Enter` && (e.preventDefault(), M());
      }),
      (e[45] = M),
      (e[46] = B));
  let V;
  e[47] === r
    ? (V = e[48])
    : ((V = r.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (e[47] = r),
      (e[48] = V));
  let H;
  e[49] !== M || e[50] !== D || e[51] !== C || e[52] !== z || e[53] !== B || e[54] !== V
    ? ((H = (0, q.jsx)(`div`, {
        className: `ml-6`,
        children: (0, q.jsx)(`input`, {
          className: `w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: C,
          onChange: z,
          onBlur: M,
          onKeyDown: B,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": V,
          disabled: D,
        }),
      })),
      (e[49] = M),
      (e[50] = D),
      (e[51] = C),
      (e[52] = z),
      (e[53] = B),
      (e[54] = V),
      (e[55] = H))
    : (H = e[55]);
  let U;
  e[56] !== R || e[57] !== H
    ? ((U = (0, q.jsx)(ae, { label: L, description: R, control: H })),
      (e[56] = R),
      (e[57] = H),
      (e[58] = U))
    : (U = e[58]);
  let W;
  e[59] !== j || e[60] !== i
    ? ((W = (0, q.jsx)(ce, { open: i, onOpenChange: a, onConfirm: j })),
      (e[59] = j),
      (e[60] = i),
      (e[61] = W))
    : (W = e[61]);
  let K;
  return (
    e[62] !== I || e[63] !== U || e[64] !== W
      ? ((K = (0, q.jsxs)(q.Fragment, { children: [I, U, W] })),
        (e[62] = I),
        (e[63] = U),
        (e[64] = W),
        (e[65] = K))
      : (K = e[65]),
    K
  );
}
function ce(e) {
  let t = (0, le.c)(19),
    { open: n, onOpenChange: r, onConfirm: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, q.jsx)(x, {
        children: (0, q.jsx)(b, {
          title: (0, q.jsx)(k, {
            id: `settings.worktrees.autoCleanup.confirm.title`,
            defaultMessage: `Disable automatic worktree deletion?`,
            description: `Title for the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, q.jsx)(x, {
        className: `text-token-description-foreground`,
        children: (0, q.jsx)(`p`, {
          children: (0, q.jsx)(k, {
            id: `settings.worktrees.autoCleanup.confirm.body`,
            defaultMessage: `We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and Codex will stop deleting them automatically.`,
            description: `Body copy in the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = () => {
        r(!1);
      }),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, q.jsx)(k, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === s
    ? (l = t[6])
    : ((l = (0, q.jsx)(y, { color: `ghost`, onClick: s, children: c })), (t[5] = s), (t[6] = l));
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = () => {
        i();
      }),
      (t[7] = i),
      (t[8] = u));
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsx)(k, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === u
    ? (f = t[11])
    : ((f = (0, q.jsx)(y, { color: `danger`, onClick: u, children: d })), (t[10] = u), (t[11] = f));
  let p;
  t[12] !== l || t[13] !== f
    ? ((p = (0, q.jsxs)(m, {
        children: [a, o, (0, q.jsx)(x, { children: (0, q.jsxs)(C, { children: [l, f] }) })],
      })),
      (t[12] = l),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let h;
  return (
    t[15] !== r || t[16] !== n || t[17] !== p
      ? ((h = (0, q.jsx)(_, { open: n, showDialogClose: !1, onOpenChange: r, children: p })),
        (t[15] = r),
        (t[16] = n),
        (t[17] = p),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var le,
  ue,
  q,
  J = e(() => {
    ((le = r()),
      o(),
      f(),
      a(),
      (ue = t(l(), 1)),
      O(),
      S(),
      g(),
      v(),
      P(),
      w(),
      i(),
      D(),
      K(),
      F(),
      (q = p()));
  });
function Y() {
  let e = (0, de.c)(193),
    t = u(n),
    r = re(),
    i = ne(`2764989143`),
    [a, o] = (0, fe.useState)(null),
    s = E(c.branchPrefix),
    l = E(c.alwaysForcePush),
    f = E(c.createPullRequestAsDraft),
    p = E(c.pullRequestMergeMethod),
    m = E(c.commitInstructions),
    h = E(c.pullRequestInstructions),
    g;
  e[0] === t ? (g = e[1]) : ((g = (e) => T(t, c.branchPrefix, e)), (e[0] = t), (e[1] = g));
  let _, v;
  e[2] !== r || e[3] !== t
    ? ((_ = () => {
        (o(null),
          t
            .get(N)
            .success(
              r.formatMessage({
                id: `settings.git.branchPrefix.save.success`,
                defaultMessage: `Saved branch prefix`,
                description: `Toast shown when git branch prefix is saved`,
              }),
            ));
      }),
      (v = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
        );
      }),
      (e[2] = r),
      (e[3] = t),
      (e[4] = _),
      (e[5] = v))
    : ((_ = e[4]), (v = e[5]));
  let b;
  e[6] !== g || e[7] !== _ || e[8] !== v
    ? ((b = { mutationFn: g, onSuccess: _, onError: v }),
      (e[6] = g),
      (e[7] = _),
      (e[8] = v),
      (e[9] = b))
    : (b = e[9]);
  let x = d(b),
    S;
  e[10] === t ? (S = e[11]) : ((S = (e) => T(t, c.alwaysForcePush, e)), (e[10] = t), (e[11] = S));
  let C, w;
  e[12] !== r || e[13] !== t
    ? ((C = (e, n) => {
        n
          ? t
              .get(N)
              .success(
                r.formatMessage({
                  id: `settings.git.forcePush.save.enabled`,
                  defaultMessage: `Always force push enabled`,
                  description: `Toast shown when the always force push toggle is enabled`,
                }),
              )
          : t
              .get(N)
              .success(
                r.formatMessage({
                  id: `settings.git.forcePush.save.disabled`,
                  defaultMessage: `Always force push disabled`,
                  description: `Toast shown when the always force push toggle is disabled`,
                }),
              );
      }),
      (w = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
        );
      }),
      (e[12] = r),
      (e[13] = t),
      (e[14] = C),
      (e[15] = w))
    : ((C = e[14]), (w = e[15]));
  let D;
  e[16] !== S || e[17] !== C || e[18] !== w
    ? ((D = { mutationFn: S, onSuccess: C, onError: w }),
      (e[16] = S),
      (e[17] = C),
      (e[18] = w),
      (e[19] = D))
    : (D = e[19]);
  let O = d(D),
    A;
  e[20] === t
    ? (A = e[21])
    : ((A = (e) => T(t, c.pullRequestMergeMethod, e)), (e[20] = t), (e[21] = A));
  let j, M;
  e[22] !== r || e[23] !== t
    ? ((M = () => {
        t.get(N).success(
          r.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (j = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
        );
      }),
      (e[22] = r),
      (e[23] = t),
      (e[24] = j),
      (e[25] = M))
    : ((j = e[24]), (M = e[25]));
  let P;
  e[26] !== j || e[27] !== A || e[28] !== M
    ? ((P = { mutationFn: A, onSuccess: M, onError: j }),
      (e[26] = j),
      (e[27] = A),
      (e[28] = M),
      (e[29] = P))
    : (P = e[29]);
  let F = d(P),
    I;
  e[30] === t
    ? (I = e[31])
    : ((I = (e) => T(t, c.createPullRequestAsDraft, e)), (e[30] = t), (e[31] = I));
  let L, z;
  e[32] !== r || e[33] !== t
    ? ((L = (e, n) => {
        n
          ? t
              .get(N)
              .success(
                r.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.enabled`,
                  defaultMessage: `Create draft pull requests enabled`,
                  description: `Toast shown when the draft pull request toggle is enabled`,
                }),
              )
          : t
              .get(N)
              .success(
                r.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.disabled`,
                  defaultMessage: `Create draft pull requests disabled`,
                  description: `Toast shown when the draft pull request toggle is disabled`,
                }),
              );
      }),
      (z = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
        );
      }),
      (e[32] = r),
      (e[33] = t),
      (e[34] = L),
      (e[35] = z))
    : ((L = e[34]), (z = e[35]));
  let V;
  e[36] !== I || e[37] !== L || e[38] !== z
    ? ((V = { mutationFn: I, onSuccess: L, onError: z }),
      (e[36] = I),
      (e[37] = L),
      (e[38] = z),
      (e[39] = V))
    : (V = e[39]);
  let U = d(V),
    [K, ce] = (0, fe.useState)(null),
    [le, ue] = (0, fe.useState)(null),
    q;
  e[40] === t
    ? (q = e[41])
    : ((q = (e) => T(t, c.commitInstructions, e)), (e[40] = t), (e[41] = q));
  let J, Y;
  e[42] !== r || e[43] !== t
    ? ((J = () => {
        (ce(null),
          t
            .get(N)
            .success(
              r.formatMessage({
                id: `settings.git.commitInstructions.save.success`,
                defaultMessage: `Saved commit instructions`,
                description: `Toast shown when commit instructions are saved`,
              }),
            ));
      }),
      (Y = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.git.commitInstructions.save.error`,
            defaultMessage: `Failed to save commit instructions`,
            description: `Toast shown when commit instructions save fails`,
          }),
        );
      }),
      (e[42] = r),
      (e[43] = t),
      (e[44] = J),
      (e[45] = Y))
    : ((J = e[44]), (Y = e[45]));
  let pe;
  e[46] !== q || e[47] !== J || e[48] !== Y
    ? ((pe = { mutationFn: q, onSuccess: J, onError: Y }),
      (e[46] = q),
      (e[47] = J),
      (e[48] = Y),
      (e[49] = pe))
    : (pe = e[49]);
  let me = d(pe),
    he;
  e[50] === t
    ? (he = e[51])
    : ((he = (e) => T(t, c.pullRequestInstructions, e)), (e[50] = t), (e[51] = he));
  let ge, _e;
  e[52] !== r || e[53] !== t
    ? ((ge = () => {
        (ue(null),
          t
            .get(N)
            .success(
              r.formatMessage({
                id: `settings.git.prInstructions.save.success`,
                defaultMessage: `Saved pull request instructions`,
                description: `Toast shown when pull request instructions are saved`,
              }),
            ));
      }),
      (_e = () => {
        t.get(N).danger(
          r.formatMessage({
            id: `settings.git.prInstructions.save.error`,
            defaultMessage: `Failed to save pull request instructions`,
            description: `Toast shown when pull request instructions save fails`,
          }),
        );
      }),
      (e[52] = r),
      (e[53] = t),
      (e[54] = ge),
      (e[55] = _e))
    : ((ge = e[54]), (_e = e[55]));
  let ve;
  e[56] !== he || e[57] !== ge || e[58] !== _e
    ? ((ve = { mutationFn: he, onSuccess: ge, onError: _e }),
      (e[56] = he),
      (e[57] = ge),
      (e[58] = _e),
      (e[59] = ve))
    : (ve = e[59]);
  let ye = d(ve),
    be = s,
    xe = a ?? be,
    Se = a != null && a !== be,
    Z = x.isPending,
    Ce = O.isPending,
    we = U.isPending,
    Te = F.isPending,
    Ee = m ?? ``,
    De = K ?? Ee,
    Oe = K != null && K !== Ee,
    Q = me.isPending,
    ke = h ?? ``,
    Ae = le ?? ke,
    je = le != null && le !== ke,
    $ = ye.isPending,
    Me;
  e[60] !== xe || e[61] !== Z || e[62] !== Se || e[63] !== x
    ? ((Me = () => {
        !Se || Z || x.mutate(xe);
      }),
      (e[60] = xe),
      (e[61] = Z),
      (e[62] = Se),
      (e[63] = x),
      (e[64] = Me))
    : (Me = e[64]);
  let Ne = Me,
    Pe;
  e[65] !== O || e[66] !== Ce
    ? ((Pe = (e) => {
        Ce || O.mutate(e);
      }),
      (e[65] = O),
      (e[66] = Ce),
      (e[67] = Pe))
    : (Pe = e[67]);
  let Fe = Pe,
    Ie;
  e[68] !== U || e[69] !== we
    ? ((Ie = (e) => {
        we || U.mutate(e);
      }),
      (e[68] = U),
      (e[69] = we),
      (e[70] = Ie))
    : (Ie = e[70]);
  let Le = Ie,
    Re;
  e[71] !== Te || e[72] !== p || e[73] !== F
    ? ((Re = (e) => {
        Te || (e !== p && F.mutate(e));
      }),
      (e[71] = Te),
      (e[72] = p),
      (e[73] = F),
      (e[74] = Re))
    : (Re = e[74]);
  let ze = Re,
    Be;
  e[75] !== De || e[76] !== Q || e[77] !== Oe || e[78] !== me
    ? ((Be = () => {
        Q || !Oe || me.mutate(De);
      }),
      (e[75] = De),
      (e[76] = Q),
      (e[77] = Oe),
      (e[78] = me),
      (e[79] = Be))
    : (Be = e[79]);
  let Ve = Be,
    He;
  e[80] !== $ || e[81] !== je || e[82] !== Ae || e[83] !== ye
    ? ((He = () => {
        $ || !je || ye.mutate(Ae);
      }),
      (e[80] = $),
      (e[81] = je),
      (e[82] = Ae),
      (e[83] = ye),
      (e[84] = He))
    : (He = e[84]);
  let Ue = He,
    We = (Se && !Z) || (Oe && !Q) || (je && !$),
    Ge;
  e[85] !== Ne || e[86] !== Ve || e[87] !== Ue
    ? ((Ge = (e) => {
        (e.preventDefault(), Ne(), Ve(), Ue());
      }),
      (e[85] = Ne),
      (e[86] = Ve),
      (e[87] = Ue),
      (e[88] = Ge))
    : (Ge = e[88]);
  let Ke;
  (e[89] !== We || e[90] !== Ge
    ? ((Ke = { accelerator: `CmdOrCtrl+S`, enabled: We, onKeyDown: Ge }),
      (e[89] = We),
      (e[90] = Ge),
      (e[91] = Ke))
    : (Ke = e[91]),
    oe(Ke));
  let qe;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, X.jsx)(R, { slug: `git-settings` })), (e[92] = qe))
    : (qe = e[92]);
  let Je, Ye;
  e[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, X.jsx)(k, { ...G.branchPrefix })),
      (Ye = (0, X.jsx)(k, {
        id: `settings.git.branchPrefix.description`,
        defaultMessage: `Prefix used when creating new branches in Codex`,
        description: `Description for git branch prefix setting`,
      })),
      (e[93] = Je),
      (e[94] = Ye))
    : ((Je = e[93]), (Ye = e[94]));
  let Xe;
  e[95] !== Z || e[96] !== be
    ? ((Xe = (e) => {
        if (Z) return;
        let t = e.target.value;
        o(t === be ? null : t);
      }),
      (e[95] = Z),
      (e[96] = be),
      (e[97] = Xe))
    : (Xe = e[97]);
  let Ze;
  e[98] === r
    ? (Ze = e[99])
    : ((Ze = r.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[98] = r),
      (e[99] = Ze));
  let Qe;
  e[100] === r
    ? (Qe = e[101])
    : ((Qe = r.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[100] = r),
      (e[101] = Qe));
  let $e;
  e[102] !== xe || e[103] !== Ne || e[104] !== Z || e[105] !== Xe || e[106] !== Ze || e[107] !== Qe
    ? (($e = (0, X.jsx)(ae, {
        label: Je,
        description: Ye,
        control: (0, X.jsx)(`input`, {
          className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: xe,
          onChange: Xe,
          onBlur: Ne,
          placeholder: Ze,
          "aria-label": Qe,
          disabled: Z,
        }),
      })),
      (e[102] = xe),
      (e[103] = Ne),
      (e[104] = Z),
      (e[105] = Xe),
      (e[106] = Ze),
      (e[107] = Qe),
      (e[108] = $e))
    : ($e = e[108]);
  let et;
  e[109] !== ze || e[110] !== r || e[111] !== Te || e[112] !== i || e[113] !== p
    ? ((et = i
        ? (0, X.jsx)(ae, {
            label: (0, X.jsx)(k, { ...G.pullRequestMergeMethod }),
            description: (0, X.jsx)(k, {
              id: `settings.git.pullRequestMergeMethod.description`,
              defaultMessage: `Choose how Codex merges pull requests`,
              description: `Description for pull request merge method setting`,
            }),
            control: (0, X.jsx)(W, {
              ariaLabel: r.formatMessage({
                id: `settings.git.pullRequestMergeMethod.ariaLabel`,
                defaultMessage: `Pull request merge method`,
                description: `Accessible label for pull request merge method selector`,
              }),
              selectedId: p,
              onSelect: ze,
              options: [
                {
                  id: `merge`,
                  label: (0, X.jsx)(k, { ...G.merge }),
                  ariaLabel: r.formatMessage(G.merge),
                  disabled: Te,
                },
                {
                  id: `squash`,
                  label: (0, X.jsx)(k, { ...G.squash }),
                  ariaLabel: r.formatMessage(G.squash),
                  disabled: Te,
                },
              ],
            }),
          })
        : null),
      (e[109] = ze),
      (e[110] = r),
      (e[111] = Te),
      (e[112] = i),
      (e[113] = p),
      (e[114] = et))
    : (et = e[114]);
  let tt, nt;
  e[115] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, X.jsx)(k, { ...G.alwaysForcePush })),
      (nt = (0, X.jsx)(k, {
        id: `settings.git.forcePush.description`,
        defaultMessage: `Use --force-with-lease when pushing from Codex`,
        description: `Description for always force push toggle`,
      })),
      (e[115] = tt),
      (e[116] = nt))
    : ((tt = e[115]), (nt = e[116]));
  let rt;
  e[117] === Fe
    ? (rt = e[118])
    : ((rt = (e) => {
        Fe(e);
      }),
      (e[117] = Fe),
      (e[118] = rt));
  let it;
  e[119] === r
    ? (it = e[120])
    : ((it = r.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Aria label for always force push toggle`,
      })),
      (e[119] = r),
      (e[120] = it));
  let at;
  e[121] !== l || e[122] !== Ce || e[123] !== rt || e[124] !== it
    ? ((at = (0, X.jsx)(ae, {
        label: tt,
        description: nt,
        control: (0, X.jsx)(te, { checked: l, disabled: Ce, onChange: rt, ariaLabel: it }),
      })),
      (e[121] = l),
      (e[122] = Ce),
      (e[123] = rt),
      (e[124] = it),
      (e[125] = at))
    : (at = e[125]);
  let ot, st;
  e[126] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, X.jsx)(k, { ...G.createDraftPullRequests })),
      (st = (0, X.jsx)(k, {
        id: `settings.git.createDraftPullRequest.description`,
        defaultMessage: `Use draft pull requests by default when creating PRs from Codex`,
        description: `Description for create draft pull requests toggle`,
      })),
      (e[126] = ot),
      (e[127] = st))
    : ((ot = e[126]), (st = e[127]));
  let ct;
  e[128] === Le
    ? (ct = e[129])
    : ((ct = (e) => {
        Le(e);
      }),
      (e[128] = Le),
      (e[129] = ct));
  let lt;
  e[130] === r
    ? (lt = e[131])
    : ((lt = r.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[130] = r),
      (e[131] = lt));
  let ut;
  e[132] !== f || e[133] !== we || e[134] !== ct || e[135] !== lt
    ? ((ut = (0, X.jsx)(ae, {
        label: ot,
        description: st,
        control: (0, X.jsx)(te, { checked: f, disabled: we, onChange: ct, ariaLabel: lt }),
      })),
      (e[132] = f),
      (e[133] = we),
      (e[134] = ct),
      (e[135] = lt),
      (e[136] = ut))
    : (ut = e[136]);
  let dt;
  e[137] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, X.jsx)(ee, { electron: !0, children: (0, X.jsx)(se, {}) })), (e[137] = dt))
    : (dt = e[137]);
  let ft;
  e[138] !== $e || e[139] !== et || e[140] !== at || e[141] !== ut
    ? ((ft = (0, X.jsx)(H, {
        children: (0, X.jsx)(H.Content, {
          children: (0, X.jsxs)(B, { children: [$e, et, at, ut, dt] }),
        }),
      })),
      (e[138] = $e),
      (e[139] = et),
      (e[140] = at),
      (e[141] = ut),
      (e[142] = ft))
    : (ft = e[142]);
  let pt, mt;
  e[143] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, X.jsx)(k, { ...G.commitInstructions })),
      (mt = (0, X.jsx)(k, {
        id: `settings.git.commitInstructions.description`,
        defaultMessage: `Added to commit message generation prompts`,
        description: `Description for commit instructions`,
      })),
      (e[143] = pt),
      (e[144] = mt))
    : ((pt = e[143]), (mt = e[144]));
  let ht = !Oe || Q,
    gt;
  e[145] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, X.jsx)(k, {
        id: `settings.git.commitInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save commit instructions`,
      })),
      (e[145] = gt))
    : (gt = e[145]);
  let _t;
  e[146] !== Ve || e[147] !== me.isPending || e[148] !== ht
    ? ((_t = (0, X.jsx)(H.Header, {
        title: pt,
        subtitle: mt,
        actions: (0, X.jsx)(y, {
          color: `secondary`,
          disabled: ht,
          loading: me.isPending,
          onClick: Ve,
          size: `toolbar`,
          children: gt,
        }),
      })),
      (e[146] = Ve),
      (e[147] = me.isPending),
      (e[148] = ht),
      (e[149] = _t))
    : (_t = e[149]);
  let vt;
  e[150] !== Q || e[151] !== Ee
    ? ((vt = (e) => {
        if (Q) return;
        let t = e.target.value;
        ce(t === Ee ? null : t);
      }),
      (e[150] = Q),
      (e[151] = Ee),
      (e[152] = vt))
    : (vt = e[152]);
  let yt;
  e[153] === r
    ? (yt = e[154])
    : ((yt = r.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[153] = r),
      (e[154] = yt));
  let bt;
  e[155] === r
    ? (bt = e[156])
    : ((bt = r.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[155] = r),
      (e[156] = bt));
  let xt;
  e[157] !== De || e[158] !== Q || e[159] !== vt || e[160] !== yt || e[161] !== bt
    ? ((xt = (0, X.jsx)(H.Content, {
        children: (0, X.jsx)(`textarea`, {
          className: `mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: De,
          onChange: vt,
          placeholder: yt,
          "aria-label": bt,
          disabled: Q,
          rows: 6,
        }),
      })),
      (e[157] = De),
      (e[158] = Q),
      (e[159] = vt),
      (e[160] = yt),
      (e[161] = bt),
      (e[162] = xt))
    : (xt = e[162]);
  let St;
  e[163] !== _t || e[164] !== xt
    ? ((St = (0, X.jsxs)(H, { children: [_t, xt] })), (e[163] = _t), (e[164] = xt), (e[165] = St))
    : (St = e[165]);
  let Ct, wt;
  e[166] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, X.jsx)(k, { ...G.pullRequestInstructions })),
      (wt = (0, X.jsx)(k, {
        id: `settings.git.prInstructions.description`,
        defaultMessage: `Added to PR title/description generation prompts`,
        description: `Description for pull request instructions`,
      })),
      (e[166] = Ct),
      (e[167] = wt))
    : ((Ct = e[166]), (wt = e[167]));
  let Tt = !je || $,
    Et;
  e[168] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, X.jsx)(k, {
        id: `settings.git.prInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save pull request instructions`,
      })),
      (e[168] = Et))
    : (Et = e[168]);
  let Dt;
  e[169] !== Ue || e[170] !== ye.isPending || e[171] !== Tt
    ? ((Dt = (0, X.jsx)(H.Header, {
        title: Ct,
        subtitle: wt,
        actions: (0, X.jsx)(y, {
          color: `secondary`,
          disabled: Tt,
          loading: ye.isPending,
          onClick: Ue,
          size: `toolbar`,
          children: Et,
        }),
      })),
      (e[169] = Ue),
      (e[170] = ye.isPending),
      (e[171] = Tt),
      (e[172] = Dt))
    : (Dt = e[172]);
  let Ot;
  e[173] !== $ || e[174] !== ke
    ? ((Ot = (e) => {
        if ($) return;
        let t = e.target.value;
        ue(t === ke ? null : t);
      }),
      (e[173] = $),
      (e[174] = ke),
      (e[175] = Ot))
    : (Ot = e[175]);
  let kt;
  e[176] === r
    ? (kt = e[177])
    : ((kt = r.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[176] = r),
      (e[177] = kt));
  let At;
  e[178] === r
    ? (At = e[179])
    : ((At = r.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[178] = r),
      (e[179] = At));
  let jt;
  e[180] !== $ || e[181] !== Ae || e[182] !== Ot || e[183] !== kt || e[184] !== At
    ? ((jt = (0, X.jsx)(H.Content, {
        children: (0, X.jsx)(`textarea`, {
          className: `mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: Ae,
          onChange: Ot,
          placeholder: kt,
          "aria-label": At,
          disabled: $,
          rows: 6,
        }),
      })),
      (e[180] = $),
      (e[181] = Ae),
      (e[182] = Ot),
      (e[183] = kt),
      (e[184] = At),
      (e[185] = jt))
    : (jt = e[185]);
  let Mt;
  e[186] !== Dt || e[187] !== jt
    ? ((Mt = (0, X.jsxs)(H, { children: [Dt, jt] })), (e[186] = Dt), (e[187] = jt), (e[188] = Mt))
    : (Mt = e[188]);
  let Nt;
  return (
    e[189] !== ft || e[190] !== St || e[191] !== Mt
      ? ((Nt = (0, X.jsxs)(ie, { title: qe, children: [ft, St, Mt] })),
        (e[189] = ft),
        (e[190] = St),
        (e[191] = Mt),
        (e[192] = Nt))
      : (Nt = e[192]),
    Nt
  );
}
var de, fe, X;
e(() => {
  ((de = r()),
    o(),
    f(),
    a(),
    (fe = t(l(), 1)),
    O(),
    S(),
    U(),
    P(),
    w(),
    h(),
    I(),
    i(),
    D(),
    M(),
    K(),
    J(),
    V(),
    F(),
    L(),
    z(),
    j(),
    (X = p()));
})();
export { Y as GitSettings };
//# sourceMappingURL=git-settings.js.map
