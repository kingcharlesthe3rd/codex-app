import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  AN as r,
  Ar as i,
  CV as a,
  Dr as o,
  EF as s,
  EN as c,
  Er as l,
  GP as u,
  HP as d,
  IP as f,
  LP as p,
  Mj as m,
  Pj as h,
  Qi as g,
  RV as _,
  TB as ee,
  Tr as v,
  U as te,
  VP as y,
  W as b,
  Yj as x,
  bB as S,
  fN as C,
  gi as w,
  iF as T,
  jV as E,
  kN as D,
  pN as O,
  pi as k,
  qP as ne,
  qj as A,
  wr as j,
  xF as M,
  xV as N,
  zV as P,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Cr as F,
  Dv as I,
  Sr as re,
  kv as ie,
} from "./app-initial~app-main~onboarding-page.js";
import { lt as L, ut as R } from "./app-initial~app-main~automations-page.js";
import {
  O as ae,
  k as z,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  r as B,
  t as V,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as H,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as W, t as G } from "./segmented-toggle.js";
var K,
  q = e(() => {
    (d(),
      (K = y({
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
function oe() {
  let e = (0, ce.c)(66),
    t = ee(f),
    n = ne(),
    [i, o] = (0, le.useState)(!1),
    [s, c] = (0, le.useState)(null),
    l = r(M.autoCleanupEnabled),
    d = r(M.keepCount),
    p;
  e[0] === t ? (p = e[1]) : ((p = (e) => D(t, M.autoCleanupEnabled, e)), (e[0] = t), (e[1] = p));
  let m, h;
  e[2] !== n || e[3] !== t
    ? ((m = (e, r) => {
        if (r) {
          t.get(x).success(
            n.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        t.get(x).success(
          n.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (h = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
        );
      }),
      (e[2] = n),
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
  let _ = a(g),
    v;
  e[10] === t ? (v = e[11]) : ((v = (e) => D(t, M.keepCount, e)), (e[10] = t), (e[11] = v));
  let y, b;
  e[12] !== n || e[13] !== t
    ? ((y = () => {
        (c(null),
          t
            .get(x)
            .success(
              n.formatMessage({
                id: `settings.worktrees.keepCount.save.success`,
                defaultMessage: `Saved auto-delete limit`,
                description: `Toast shown when the worktree auto-delete limit is saved`,
              }),
            ));
      }),
      (b = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = y),
      (e[15] = b))
    : ((y = e[14]), (b = e[15]));
  let S;
  e[16] !== v || e[17] !== y || e[18] !== b
    ? ((S = { mutationFn: v, onSuccess: y, onError: b }),
      (e[16] = v),
      (e[17] = y),
      (e[18] = b),
      (e[19] = S))
    : (S = e[19]);
  let C = a(S),
    w = String(d),
    T = s ?? w,
    E = _.isPending,
    O = C.isPending || E || !l,
    k;
  e[20] !== E || e[21] !== _
    ? ((k = (e) => {
        if (!E) {
          if (e) {
            _.mutate(!0);
            return;
          }
          o(!0);
        }
      }),
      (e[20] = E),
      (e[21] = _),
      (e[22] = k))
    : (k = e[22]);
  let A = k,
    j;
  e[23] === _
    ? (j = e[24])
    : ((j = () => {
        (c(null), o(!1), _.mutate(!1));
      }),
      (e[23] = _),
      (e[24] = j));
  let N = j,
    P;
  e[25] !== O || e[26] !== d || e[27] !== s || e[28] !== C
    ? ((P = () => {
        if (O || s == null) return;
        let e = s.trim(),
          t = Number.parseInt(e, 10);
        if (e.length === 0 || Number.isNaN(t)) {
          c(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === d) {
          c(null);
          return;
        }
        C.mutate(n);
      }),
      (e[25] = O),
      (e[26] = d),
      (e[27] = s),
      (e[28] = C),
      (e[29] = P))
    : (P = e[29]);
  let F = P,
    I,
    ie;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, J.jsx)(u, { ...K.automaticWorktreeDeletion })),
      (ie = (0, J.jsx)(u, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (e[30] = I),
      (e[31] = ie))
    : ((I = e[30]), (ie = e[31]));
  let L;
  e[32] === n
    ? (L = e[33])
    : ((L = n.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (e[32] = n),
      (e[33] = L));
  let R;
  e[34] !== l || e[35] !== A || e[36] !== E || e[37] !== L
    ? ((R = (0, J.jsx)(re, {
        label: I,
        description: ie,
        control: (0, J.jsx)(te, { checked: l, disabled: E, onChange: A, ariaLabel: L }),
      })),
      (e[34] = l),
      (e[35] = A),
      (e[36] = E),
      (e[37] = L),
      (e[38] = R))
    : (R = e[38]);
  let ae;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, J.jsx)(u, { ...K.autoDeleteLimit })), (e[39] = ae))
    : (ae = e[39]);
  let z;
  e[40] === l
    ? (z = e[41])
    : ((z = l
        ? (0, J.jsx)(u, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of Codex worktrees to keep before older ones are pruned automatically. Codex snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, J.jsx)(u, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. Codex will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (e[40] = l),
      (e[41] = z));
  let B;
  e[42] !== O || e[43] !== w
    ? ((B = (e) => {
        if (O) return;
        let t = e.target.value;
        c(t === w ? null : t);
      }),
      (e[42] = O),
      (e[43] = w),
      (e[44] = B))
    : (B = e[44]);
  let V;
  e[45] === F
    ? (V = e[46])
    : ((V = (e) => {
        e.key === `Enter` && (e.preventDefault(), F());
      }),
      (e[45] = F),
      (e[46] = V));
  let H;
  e[47] === n
    ? (H = e[48])
    : ((H = n.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (e[47] = n),
      (e[48] = H));
  let U;
  e[49] !== F || e[50] !== O || e[51] !== T || e[52] !== B || e[53] !== V || e[54] !== H
    ? ((U = (0, J.jsx)(`div`, {
        className: `ml-6`,
        children: (0, J.jsx)(`input`, {
          className: `w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: T,
          onChange: B,
          onBlur: F,
          onKeyDown: V,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": H,
          disabled: O,
        }),
      })),
      (e[49] = F),
      (e[50] = O),
      (e[51] = T),
      (e[52] = B),
      (e[53] = V),
      (e[54] = H),
      (e[55] = U))
    : (U = e[55]);
  let W;
  e[56] !== z || e[57] !== U
    ? ((W = (0, J.jsx)(re, { label: ae, description: z, control: U })),
      (e[56] = z),
      (e[57] = U),
      (e[58] = W))
    : (W = e[58]);
  let G;
  e[59] !== N || e[60] !== i
    ? ((G = (0, J.jsx)(se, { open: i, onOpenChange: o, onConfirm: N })),
      (e[59] = N),
      (e[60] = i),
      (e[61] = G))
    : (G = e[61]);
  let q;
  return (
    e[62] !== R || e[63] !== W || e[64] !== G
      ? ((q = (0, J.jsxs)(J.Fragment, { children: [R, W, G] })),
        (e[62] = R),
        (e[63] = W),
        (e[64] = G),
        (e[65] = q))
      : (q = e[65]),
    q
  );
}
function se(e) {
  let t = (0, ce.c)(19),
    { open: n, onOpenChange: r, onConfirm: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(o, {
        children: (0, J.jsx)(l, {
          title: (0, J.jsx)(u, {
            id: `settings.worktrees.autoCleanup.confirm.title`,
            defaultMessage: `Disable automatic worktree deletion?`,
            description: `Title for the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(o, {
        className: `text-token-description-foreground`,
        children: (0, J.jsx)(`p`, {
          children: (0, J.jsx)(u, {
            id: `settings.worktrees.autoCleanup.confirm.body`,
            defaultMessage: `We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and Codex will stop deleting them automatically.`,
            description: `Body copy in the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[1] = s))
    : (s = t[1]);
  let c;
  t[2] === r
    ? (c = t[3])
    : ((c = () => {
        r(!1);
      }),
      (t[2] = r),
      (t[3] = c));
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(u, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === c
    ? (f = t[6])
    : ((f = (0, J.jsx)(C, { color: `ghost`, onClick: c, children: d })), (t[5] = c), (t[6] = f));
  let p;
  t[7] === i
    ? (p = t[8])
    : ((p = () => {
        i();
      }),
      (t[7] = i),
      (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, J.jsx)(u, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === p
    ? (h = t[11])
    : ((h = (0, J.jsx)(C, { color: `danger`, onClick: p, children: m })), (t[10] = p), (t[11] = h));
  let g;
  t[12] !== f || t[13] !== h
    ? ((g = (0, J.jsxs)(j, {
        children: [a, s, (0, J.jsx)(o, { children: (0, J.jsxs)(v, { children: [f, h] }) })],
      })),
      (t[12] = f),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== r || t[16] !== n || t[17] !== g
      ? ((_ = (0, J.jsx)(k, { open: n, showDialogClose: !1, onOpenChange: r, children: g })),
        (t[15] = r),
        (t[16] = n),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
var ce,
  le,
  J,
  Y = e(() => {
    ((ce = _()),
      N(),
      S(),
      T(),
      (le = t(P(), 1)),
      d(),
      O(),
      w(),
      i(),
      A(),
      b(),
      p(),
      c(),
      q(),
      F(),
      (J = E()));
  });
function ue() {
  let e = (0, de.c)(193),
    t = ee(f),
    n = ne(),
    i = h(`2764989143`),
    [o, c] = (0, fe.useState)(null),
    l = r(s.branchPrefix),
    d = r(s.alwaysForcePush),
    p = r(s.createPullRequestAsDraft),
    m = r(s.pullRequestMergeMethod),
    _ = r(s.commitInstructions),
    v = r(s.pullRequestInstructions),
    y;
  e[0] === t ? (y = e[1]) : ((y = (e) => D(t, s.branchPrefix, e)), (e[0] = t), (e[1] = y));
  let b, S;
  e[2] !== n || e[3] !== t
    ? ((b = () => {
        (c(null),
          t
            .get(x)
            .success(
              n.formatMessage({
                id: `settings.git.branchPrefix.save.success`,
                defaultMessage: `Saved branch prefix`,
                description: `Toast shown when git branch prefix is saved`,
              }),
            ));
      }),
      (S = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = b),
      (e[5] = S))
    : ((b = e[4]), (S = e[5]));
  let w;
  e[6] !== y || e[7] !== b || e[8] !== S
    ? ((w = { mutationFn: y, onSuccess: b, onError: S }),
      (e[6] = y),
      (e[7] = b),
      (e[8] = S),
      (e[9] = w))
    : (w = e[9]);
  let T = a(w),
    E;
  e[10] === t ? (E = e[11]) : ((E = (e) => D(t, s.alwaysForcePush, e)), (e[10] = t), (e[11] = E));
  let O, k;
  e[12] !== n || e[13] !== t
    ? ((O = (e, r) => {
        r
          ? t
              .get(x)
              .success(
                n.formatMessage({
                  id: `settings.git.forcePush.save.enabled`,
                  defaultMessage: `Always force push enabled`,
                  description: `Toast shown when the always force push toggle is enabled`,
                }),
              )
          : t
              .get(x)
              .success(
                n.formatMessage({
                  id: `settings.git.forcePush.save.disabled`,
                  defaultMessage: `Always force push disabled`,
                  description: `Toast shown when the always force push toggle is disabled`,
                }),
              );
      }),
      (k = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = O),
      (e[15] = k))
    : ((O = e[14]), (k = e[15]));
  let A;
  e[16] !== E || e[17] !== O || e[18] !== k
    ? ((A = { mutationFn: E, onSuccess: O, onError: k }),
      (e[16] = E),
      (e[17] = O),
      (e[18] = k),
      (e[19] = A))
    : (A = e[19]);
  let j = a(A),
    M;
  e[20] === t
    ? (M = e[21])
    : ((M = (e) => D(t, s.pullRequestMergeMethod, e)), (e[20] = t), (e[21] = M));
  let N, P;
  e[22] !== n || e[23] !== t
    ? ((P = () => {
        t.get(x).success(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (N = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
        );
      }),
      (e[22] = n),
      (e[23] = t),
      (e[24] = N),
      (e[25] = P))
    : ((N = e[24]), (P = e[25]));
  let F;
  e[26] !== N || e[27] !== M || e[28] !== P
    ? ((F = { mutationFn: M, onSuccess: P, onError: N }),
      (e[26] = N),
      (e[27] = M),
      (e[28] = P),
      (e[29] = F))
    : (F = e[29]);
  let I = a(F),
    R;
  e[30] === t
    ? (R = e[31])
    : ((R = (e) => D(t, s.createPullRequestAsDraft, e)), (e[30] = t), (e[31] = R));
  let z, B;
  e[32] !== n || e[33] !== t
    ? ((z = (e, r) => {
        r
          ? t
              .get(x)
              .success(
                n.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.enabled`,
                  defaultMessage: `Create draft pull requests enabled`,
                  description: `Toast shown when the draft pull request toggle is enabled`,
                }),
              )
          : t
              .get(x)
              .success(
                n.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.disabled`,
                  defaultMessage: `Create draft pull requests disabled`,
                  description: `Toast shown when the draft pull request toggle is disabled`,
                }),
              );
      }),
      (B = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
        );
      }),
      (e[32] = n),
      (e[33] = t),
      (e[34] = z),
      (e[35] = B))
    : ((z = e[34]), (B = e[35]));
  let H;
  e[36] !== R || e[37] !== z || e[38] !== B
    ? ((H = { mutationFn: R, onSuccess: z, onError: B }),
      (e[36] = R),
      (e[37] = z),
      (e[38] = B),
      (e[39] = H))
    : (H = e[39]);
  let W = a(H),
    [q, se] = (0, fe.useState)(null),
    [ce, le] = (0, fe.useState)(null),
    J;
  e[40] === t
    ? (J = e[41])
    : ((J = (e) => D(t, s.commitInstructions, e)), (e[40] = t), (e[41] = J));
  let Y, ue;
  e[42] !== n || e[43] !== t
    ? ((Y = () => {
        (se(null),
          t
            .get(x)
            .success(
              n.formatMessage({
                id: `settings.git.commitInstructions.save.success`,
                defaultMessage: `Saved commit instructions`,
                description: `Toast shown when commit instructions are saved`,
              }),
            ));
      }),
      (ue = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.commitInstructions.save.error`,
            defaultMessage: `Failed to save commit instructions`,
            description: `Toast shown when commit instructions save fails`,
          }),
        );
      }),
      (e[42] = n),
      (e[43] = t),
      (e[44] = Y),
      (e[45] = ue))
    : ((Y = e[44]), (ue = e[45]));
  let pe;
  e[46] !== J || e[47] !== Y || e[48] !== ue
    ? ((pe = { mutationFn: J, onSuccess: Y, onError: ue }),
      (e[46] = J),
      (e[47] = Y),
      (e[48] = ue),
      (e[49] = pe))
    : (pe = e[49]);
  let me = a(pe),
    he;
  e[50] === t
    ? (he = e[51])
    : ((he = (e) => D(t, s.pullRequestInstructions, e)), (e[50] = t), (e[51] = he));
  let ge, _e;
  e[52] !== n || e[53] !== t
    ? ((ge = () => {
        (le(null),
          t
            .get(x)
            .success(
              n.formatMessage({
                id: `settings.git.prInstructions.save.success`,
                defaultMessage: `Saved pull request instructions`,
                description: `Toast shown when pull request instructions are saved`,
              }),
            ));
      }),
      (_e = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.prInstructions.save.error`,
            defaultMessage: `Failed to save pull request instructions`,
            description: `Toast shown when pull request instructions save fails`,
          }),
        );
      }),
      (e[52] = n),
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
  let ye = a(ve),
    be = l,
    xe = o ?? be,
    Se = o != null && o !== be,
    Z = T.isPending,
    Ce = j.isPending,
    we = W.isPending,
    Te = I.isPending,
    Ee = _ ?? ``,
    De = q ?? Ee,
    Oe = q != null && q !== Ee,
    Q = me.isPending,
    ke = v ?? ``,
    Ae = ce ?? ke,
    je = ce != null && ce !== ke,
    $ = ye.isPending,
    Me;
  e[60] !== xe || e[61] !== Z || e[62] !== Se || e[63] !== T
    ? ((Me = () => {
        !Se || Z || T.mutate(xe);
      }),
      (e[60] = xe),
      (e[61] = Z),
      (e[62] = Se),
      (e[63] = T),
      (e[64] = Me))
    : (Me = e[64]);
  let Ne = Me,
    Pe;
  e[65] !== j || e[66] !== Ce
    ? ((Pe = (e) => {
        Ce || j.mutate(e);
      }),
      (e[65] = j),
      (e[66] = Ce),
      (e[67] = Pe))
    : (Pe = e[67]);
  let Fe = Pe,
    Ie;
  e[68] !== W || e[69] !== we
    ? ((Ie = (e) => {
        we || W.mutate(e);
      }),
      (e[68] = W),
      (e[69] = we),
      (e[70] = Ie))
    : (Ie = e[70]);
  let Le = Ie,
    Re;
  e[71] !== Te || e[72] !== m || e[73] !== I
    ? ((Re = (e) => {
        Te || (e !== m && I.mutate(e));
      }),
      (e[71] = Te),
      (e[72] = m),
      (e[73] = I),
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
    ie(Ke));
  let qe;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, X.jsx)(ae, { slug: `git-settings` })), (e[92] = qe))
    : (qe = e[92]);
  let Je, Ye;
  e[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, X.jsx)(u, { ...K.branchPrefix })),
      (Ye = (0, X.jsx)(u, {
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
        c(t === be ? null : t);
      }),
      (e[95] = Z),
      (e[96] = be),
      (e[97] = Xe))
    : (Xe = e[97]);
  let Ze;
  e[98] === n
    ? (Ze = e[99])
    : ((Ze = n.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[98] = n),
      (e[99] = Ze));
  let Qe;
  e[100] === n
    ? (Qe = e[101])
    : ((Qe = n.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[100] = n),
      (e[101] = Qe));
  let $e;
  e[102] !== xe || e[103] !== Ne || e[104] !== Z || e[105] !== Xe || e[106] !== Ze || e[107] !== Qe
    ? (($e = (0, X.jsx)(re, {
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
  e[109] !== ze || e[110] !== n || e[111] !== Te || e[112] !== i || e[113] !== m
    ? ((et = i
        ? (0, X.jsx)(re, {
            label: (0, X.jsx)(u, { ...K.pullRequestMergeMethod }),
            description: (0, X.jsx)(u, {
              id: `settings.git.pullRequestMergeMethod.description`,
              defaultMessage: `Choose how Codex merges pull requests`,
              description: `Description for pull request merge method setting`,
            }),
            control: (0, X.jsx)(G, {
              ariaLabel: n.formatMessage({
                id: `settings.git.pullRequestMergeMethod.ariaLabel`,
                defaultMessage: `Pull request merge method`,
                description: `Accessible label for pull request merge method selector`,
              }),
              selectedId: m,
              onSelect: ze,
              options: [
                {
                  id: `merge`,
                  label: (0, X.jsx)(u, { ...K.merge }),
                  ariaLabel: n.formatMessage(K.merge),
                  disabled: Te,
                },
                {
                  id: `squash`,
                  label: (0, X.jsx)(u, { ...K.squash }),
                  ariaLabel: n.formatMessage(K.squash),
                  disabled: Te,
                },
              ],
            }),
          })
        : null),
      (e[109] = ze),
      (e[110] = n),
      (e[111] = Te),
      (e[112] = i),
      (e[113] = m),
      (e[114] = et))
    : (et = e[114]);
  let tt, nt;
  e[115] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, X.jsx)(u, { ...K.alwaysForcePush })),
      (nt = (0, X.jsx)(u, {
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
  e[119] === n
    ? (it = e[120])
    : ((it = n.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Aria label for always force push toggle`,
      })),
      (e[119] = n),
      (e[120] = it));
  let at;
  e[121] !== d || e[122] !== Ce || e[123] !== rt || e[124] !== it
    ? ((at = (0, X.jsx)(re, {
        label: tt,
        description: nt,
        control: (0, X.jsx)(te, { checked: d, disabled: Ce, onChange: rt, ariaLabel: it }),
      })),
      (e[121] = d),
      (e[122] = Ce),
      (e[123] = rt),
      (e[124] = it),
      (e[125] = at))
    : (at = e[125]);
  let ot, st;
  e[126] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, X.jsx)(u, { ...K.createDraftPullRequests })),
      (st = (0, X.jsx)(u, {
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
  e[130] === n
    ? (lt = e[131])
    : ((lt = n.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[130] = n),
      (e[131] = lt));
  let ut;
  e[132] !== p || e[133] !== we || e[134] !== ct || e[135] !== lt
    ? ((ut = (0, X.jsx)(re, {
        label: ot,
        description: st,
        control: (0, X.jsx)(te, { checked: p, disabled: we, onChange: ct, ariaLabel: lt }),
      })),
      (e[132] = p),
      (e[133] = we),
      (e[134] = ct),
      (e[135] = lt),
      (e[136] = ut))
    : (ut = e[136]);
  let dt;
  e[137] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, X.jsx)(g, { electron: !0, children: (0, X.jsx)(oe, {}) })), (e[137] = dt))
    : (dt = e[137]);
  let ft;
  e[138] !== $e || e[139] !== et || e[140] !== at || e[141] !== ut
    ? ((ft = (0, X.jsx)(L, {
        children: (0, X.jsx)(L.Content, {
          children: (0, X.jsxs)(U, { children: [$e, et, at, ut, dt] }),
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
    ? ((pt = (0, X.jsx)(u, { ...K.commitInstructions })),
      (mt = (0, X.jsx)(u, {
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
    ? ((gt = (0, X.jsx)(u, {
        id: `settings.git.commitInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save commit instructions`,
      })),
      (e[145] = gt))
    : (gt = e[145]);
  let _t;
  e[146] !== Ve || e[147] !== me.isPending || e[148] !== ht
    ? ((_t = (0, X.jsx)(L.Header, {
        title: pt,
        subtitle: mt,
        actions: (0, X.jsx)(C, {
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
        se(t === Ee ? null : t);
      }),
      (e[150] = Q),
      (e[151] = Ee),
      (e[152] = vt))
    : (vt = e[152]);
  let yt;
  e[153] === n
    ? (yt = e[154])
    : ((yt = n.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[153] = n),
      (e[154] = yt));
  let bt;
  e[155] === n
    ? (bt = e[156])
    : ((bt = n.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[155] = n),
      (e[156] = bt));
  let xt;
  e[157] !== De || e[158] !== Q || e[159] !== vt || e[160] !== yt || e[161] !== bt
    ? ((xt = (0, X.jsx)(L.Content, {
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
    ? ((St = (0, X.jsxs)(L, { children: [_t, xt] })), (e[163] = _t), (e[164] = xt), (e[165] = St))
    : (St = e[165]);
  let Ct, wt;
  e[166] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, X.jsx)(u, { ...K.pullRequestInstructions })),
      (wt = (0, X.jsx)(u, {
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
    ? ((Et = (0, X.jsx)(u, {
        id: `settings.git.prInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save pull request instructions`,
      })),
      (e[168] = Et))
    : (Et = e[168]);
  let Dt;
  e[169] !== Ue || e[170] !== ye.isPending || e[171] !== Tt
    ? ((Dt = (0, X.jsx)(L.Header, {
        title: Ct,
        subtitle: wt,
        actions: (0, X.jsx)(C, {
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
        le(t === ke ? null : t);
      }),
      (e[173] = $),
      (e[174] = ke),
      (e[175] = Ot))
    : (Ot = e[175]);
  let kt;
  e[176] === n
    ? (kt = e[177])
    : ((kt = n.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[176] = n),
      (e[177] = kt));
  let At;
  e[178] === n
    ? (At = e[179])
    : ((At = n.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[178] = n),
      (e[179] = At));
  let jt;
  e[180] !== $ || e[181] !== Ae || e[182] !== Ot || e[183] !== kt || e[184] !== At
    ? ((jt = (0, X.jsx)(L.Content, {
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
    ? ((Mt = (0, X.jsxs)(L, { children: [Dt, jt] })), (e[186] = Dt), (e[187] = jt), (e[188] = Mt))
    : (Mt = e[188]);
  let Nt;
  return (
    e[189] !== ft || e[190] !== St || e[191] !== Mt
      ? ((Nt = (0, X.jsxs)(V, { title: qe, children: [ft, St, Mt] })),
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
  ((de = _()),
    N(),
    S(),
    T(),
    (fe = t(P(), 1)),
    d(),
    O(),
    W(),
    A(),
    b(),
    n(),
    I(),
    p(),
    c(),
    B(),
    q(),
    Y(),
    R(),
    F(),
    z(),
    H(),
    m(),
    (X = E()));
})();
export { ue as GitSettings };
//# sourceMappingURL=git-settings.js.map
