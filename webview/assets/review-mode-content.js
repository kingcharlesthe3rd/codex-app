import { n as e, s as t } from "./rolldown-runtime.js";
import {
  B as n,
  Ht as r,
  Ol as i,
  T as a,
  Tt as o,
  Ut as s,
  Wt as c,
  _ as l,
  _n as u,
  dl as d,
  kl as f,
  oc as p,
  ot as m,
  pl as h,
  tc as g,
  ut as _,
  wt as v,
  xl as y,
  z as b,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  cr as x,
  sr as S,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  A as ee,
  Jp as C,
  Xp as w,
  Yp as te,
  Zp as ne,
  k as T,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  At as re,
  Fa as E,
  LC as ie,
  Lb as ae,
  MC as D,
  P_ as oe,
  Rb as O,
  am as se,
  aw as k,
  cr as ce,
  cw as A,
  dv as j,
  fb as M,
  go as N,
  ir as P,
  jt as le,
  ll as ue,
  ob as F,
  pl as I,
  rm as L,
  sb as R,
  uw as z,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  h as B,
  p as V,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  l as de,
  n as H,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  B as U,
  C as W,
  H as fe,
  w as G,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  nt as K,
  rt as pe,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  gn as q,
  hn as J,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  Ln as Y,
  Qt as me,
  Rn as he,
  Xt as ge,
  gn as _e,
  mn as ve,
  pn as ye,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import { n as be, t as xe } from "./use-git-recent-branches.js";
var Se,
  Ce = e(() => {
    Se = `# Review Guidelines

You are acting as a reviewer for a proposed code change made by another engineer.

Review the change and respond in normal Markdown. Do not return JSON, XML, a findings object, or any structured review schema.

When feedback should be attached directly to a changed line, emit one \`::code-comment{...}\` directive for that issue. The directive creates an inline code comment in the review UI; keep the visible response as normal Markdown. Emit no directives when there are no actionable inline comments.

Required \`code-comment\` attributes: \`title\`, \`body\`, and \`file\`. Optional attributes: \`start\`, \`end\`, and \`priority\`. Use the shortest useful line range. \`file\` should be an absolute path or include the workspace folder segment.

Focus on discrete, actionable issues the original author would likely fix if they knew about them. Prefer no issues over speculative or low-signal feedback.

General guidelines for whether to call out an issue:

1. It meaningfully impacts correctness, performance, security, or maintainability.
2. It is discrete and actionable.
3. It was introduced by the change under review.
4. The author would likely fix it once aware.
5. It does not rely on unstated assumptions about intent.
6. It identifies the affected behavior clearly rather than speculating broadly.

When you call out an issue, include the relevant file and line or function in prose, explain the scenario where it matters, and keep the explanation concise. Use priority labels such as \`[P1]\` or \`[P2]\` only when helpful to communicate severity.

If there are no actionable issues, say that directly and briefly.
`;
  });
function we({ reviewInstructions: e, requestMessage: t }) {
  return [F, Se.trim(), e.trim(), R, t].join(`
`);
}
async function Te({ context: e, hostId: t, intl: n }) {
  if (e.mode === `uncommitted`)
    return {
      diffFilter: `unstaged`,
      prompt: we({
        reviewInstructions: ke,
        requestMessage: n.formatMessage({
          id: `quickAction.request.codeReview.uncommitted`,
          defaultMessage: `Please review my uncommitted changes`,
          description: `User message used when reviewing uncommitted changes`,
        }),
      }),
      baseBranch: null,
    };
  let r = await m(`git-merge-base`, {
    source: `review_model`,
    params: { gitRoot: e.gitRoot, baseBranch: e.baseBranch, hostId: t },
  });
  if (!r.mergeBaseSha)
    throw Error(`Failed to resolve a merge base between HEAD and ${e.baseBranch}.`);
  let i = n.formatMessage(
    {
      id: `quickAction.request.codeReview.branches`,
      defaultMessage: `Please review changes on {from} against {to}`,
      description: `User message used when reviewing against a selected base branch`,
    },
    { from: e.sourceBranch, to: e.baseBranch },
  );
  return {
    diffFilter: `branch`,
    prompt: we({
      reviewInstructions: Oe.replaceAll(`{baseBranch}`, e.baseBranch).replaceAll(
        `{mergeBaseSha}`,
        r.mergeBaseSha.trim(),
      ),
      requestMessage: i,
    }),
    baseBranch: e.baseBranch,
  };
}
function Ee(e) {
  let t = (0, De.c)(13),
    { hostId: n, onError: i, onSuccess: a } = e,
    s = p(r),
    c = z(),
    l = ce(n),
    u;
  t[0] !== n || t[1] !== l || t[2] !== c || t[3] !== s
    ? ((u = async (e) => {
        let { context: t, conversationId: r, delivery: i } = e,
          { gitRoot: a, cwd: o } = t,
          u = await Te({ context: t, hostId: n, intl: c }),
          d = r == null ? null : s.get(N, r);
        if (i === `inline` && r != null && d === n) {
          if (l == null) throw Error(`Code review host is unavailable`);
          return (
            await O(`start-turn-for-host`, {
              hostId: l.getHostId(),
              conversationId: r,
              params: {
                cwd: o,
                input: [{ type: `text`, text: u.prompt, text_elements: [] }],
                approvalsReviewer: `user`,
                collaborationMode: null,
                inheritThreadSettings: !1,
                serviceTier: await x(s, n, null),
              },
            }),
            { delivery: `inline`, diffFilter: u.diffFilter, baseBranch: u.baseBranch }
          );
        }
        let f = await O(`start-conversation`, {
          hostId: n,
          input: [{ type: `text`, text: u.prompt, text_elements: [] }],
          cwd: o,
          workspaceRoots: [a],
          collaborationMode: null,
          serviceTier: await x(s, n, null),
          approvalsReviewer: `user`,
        });
        return {
          baseBranch: u.baseBranch,
          conversationId: f,
          delivery: `detached`,
          diffFilter: u.diffFilter,
        };
      }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = c),
      (t[3] = s),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === a
    ? (d = t[6])
    : ((d = (e) => {
        a(e);
      }),
      (t[5] = a),
      (t[6] = d));
  let f;
  t[7] === i
    ? (f = t[8])
    : ((f = (e) => {
        (o.error(`Failed to start quick review conversation`, {
          safe: {},
          sensitive: { error: e },
        }),
          i(e));
      }),
      (t[7] = i),
      (t[8] = f));
  let m;
  return (
    t[9] !== u || t[10] !== d || t[11] !== f
      ? ((m = { mutationFn: u, onSuccess: d, onError: f }),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f),
        (t[12] = m))
      : (m = t[12]),
    h(m)
  );
}
var De,
  Oe,
  ke,
  Ae = e(() => {
    ((De = i()),
      d(),
      g(),
      k(),
      P(),
      E(),
      ae(),
      S(),
      Ce(),
      M(),
      s(),
      v(),
      _(),
      (Oe =
        "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response."),
      (ke = `Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.`));
  });
function je(e, t, n, r) {
  let i = (0, Me.c)(2),
    o;
  return (
    i[0] === n
      ? (o = i[1])
      : ((o = (e) => {
          let { root: t } = e;
          return { operationSource: n, root: t };
        }),
        (i[0] = n),
        (i[1] = o)),
    a(e, t, `base-branch`, o, n, r)
  );
}
var Me,
  Ne = e(() => {
    ((Me = i()), l());
  });
function Pe({ currentBranch: e, defaultTargetBranch: t, recentBranches: n }) {
  let r = [],
    i = [t ?? X],
    a = new Set();
  return (
    e && a.add(e),
    n != null && i.push(...n),
    i.forEach((e) => {
      !e || a.has(e) || (r.push(e), a.add(e));
    }),
    r
  );
}
var X,
  Fe = e(() => {
    X = `main`;
  });
function Ie(e) {
  let t = (0, Z.c)(24),
    {
      onSelectUnstaged: n,
      onSelectBaseBranch: r,
      isSubmitting: i,
      isLoadingBaseBranch: a,
      requiresXcodeLicense: o,
      isRetryingGit: s,
      onRetryGit: c,
    } = e,
    l = z();
  if (o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(J, { className: `icon-xs shrink-0 text-token-charts-red` })), (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(`span`, {
          className: `font-medium text-token-foreground`,
          children: (0, Q.jsx)(A, {
            id: `composer.reviewMode.xcodeLicenseRequired.title`,
            defaultMessage: `Review the Xcode license to use Git`,
            description: `Title shown when Git cannot run until the user accepts the Xcode license`,
          }),
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [
            n,
            (0, Q.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Q.jsx)(A, {
                id: `composer.reviewMode.xcodeLicenseRequired.detail`,
                defaultMessage: `In your terminal, run <command>sudo xcodebuild -license</command>, follow the prompts, and try again.`,
                description: `Instructions shown when Git cannot run until the user accepts the Xcode license`,
                values: { command: Le },
              }),
            }),
          ],
        })),
        (t[2] = r))
      : (r = t[2]);
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(A, {
          id: `composer.reviewMode.xcodeLicenseRequired.retry`,
          defaultMessage: `Try again`,
          description: `Button label for retrying Git after accepting the Xcode license`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] !== s || t[5] !== c
        ? ((a = (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2 px-3 py-2 text-sm`,
            role: `alert`,
            children: [
              e,
              r,
              (0, Q.jsx)(C, {
                className: `shrink-0`,
                loading: s,
                onClick: c,
                size: `composerSm`,
                children: i,
              }),
            ],
          })),
          (t[4] = s),
          (t[5] = c),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = l.formatMessage({
        id: `composer.reviewMode.option.baseBranch.simple`,
        defaultMessage: `Review against a base branch`,
        description: `Button label for reviewing against a base branch`,
      })),
      (t[7] = l),
      (t[8] = u));
  let d = i || a,
    f = a ? w : void 0,
    p;
  t[9] !== r || t[10] !== u || t[11] !== d || t[12] !== f
    ? ((p = (0, Q.jsx)(W, {
        value: `base-branch`,
        title: u,
        onSelect: r,
        disabled: d,
        RightIcon: f,
      })),
      (t[9] = r),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === l
    ? (m = t[15])
    : ((m = l.formatMessage({
        id: `composer.reviewMode.option.unstaged.simple`,
        defaultMessage: `Review uncommitted changes`,
        description: `Button label for reviewing unstaged changes`,
      })),
      (t[14] = l),
      (t[15] = m));
  let h = i ? w : void 0,
    g;
  t[16] !== i || t[17] !== n || t[18] !== m || t[19] !== h
    ? ((g = (0, Q.jsx)(W, { value: `unstaged`, title: m, onSelect: n, disabled: i, RightIcon: h })),
      (t[16] = i),
      (t[17] = n),
      (t[18] = m),
      (t[19] = h),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== p || t[22] !== g
      ? ((_ = (0, Q.jsxs)(Q.Fragment, { children: [p, g] })), (t[21] = p), (t[22] = g), (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function Le(e) {
  return (0, Q.jsx)(`code`, { className: `font-mono`, children: e }, `command`);
}
function Re(e) {
  let t = (0, Z.c)(10),
    {
      onSelect: n,
      branchLines: r,
      isLoading: i,
      isError: a,
      refetchBranchOverview: o,
      submittingBranchName: s,
    } = e,
    c = s != null,
    l;
  t[0] !== r || t[1] !== a || t[2] !== i || t[3] !== c || t[4] !== n || t[5] !== o || t[6] !== s
    ? ((l = i
        ? (0, Q.jsx)(`div`, {
            className: `flex items-center justify-center gap-2 py-4 text-xs text-token-foreground/70`,
            children: (0, Q.jsx)(w, { className: `size-3` }),
          })
        : a
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-2 py-2`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `text-center text-xs text-token-foreground/70`,
                  children: (0, Q.jsx)(A, {
                    id: `composer.reviewMode.branches.error`,
                    defaultMessage: `Unable to load branches`,
                    description: `Error message when branch list could not be loaded`,
                  }),
                }),
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `text-xs font-medium text-token-text-link-foreground`,
                  onClick: o,
                  children: (0, Q.jsx)(A, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                }),
              ],
            })
          : r.map((e) =>
              (0, Q.jsx)(
                W,
                {
                  value: e.label,
                  title: e.label,
                  onSelect: n,
                  disabled: c,
                  RightIcon: s === e.key ? w : void 0,
                },
                e.key,
              ),
            )),
      (t[0] = r),
      (t[1] = a),
      (t[2] = i),
      (t[3] = c),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] === l
      ? (u = t[9])
      : ((u = (0, Q.jsx)(Q.Fragment, { children: l })), (t[8] = l), (t[9] = u)),
    u
  );
}
var Z,
  Q,
  ze = e(() => {
    ((Z = i()), k(), te(), ne(), q(), G(), (Q = y()));
  });
function Be(e) {
  let t = (0, He.c)(63),
    { conversationId: r, onItemsChanged: i, onClose: a, cwd: s, hostConfig: c } = e,
    l = p(ue),
    d = z(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { status: `choose-target` }), (t[0] = f))
    : (f = t[0]);
  let [m, h] = (0, Ue.useState)(f),
    g = ee(),
    _;
  t[1] === c.id
    ? (_ = t[2])
    : ((_ = { hostId: c.id, source: `review_mode_content` }), (t[1] = c.id), (t[2] = _));
  let { gitRoot: v } = fe(s, _),
    {
      data: y,
      error: b,
      isFetching: x,
      isLoading: S,
      refetch: C,
    } = pe(v, c, `review_mode_content`),
    { data: w, isLoading: te, isError: ne, refetch: T } = je(v, c, `review_mode_content`),
    { data: re, isLoading: E, isError: ae, refetch: D } = be(v, c, `review_mode_content`),
    O = ge(w ?? null),
    k = ie(u.reviewDelivery),
    ce = Pe({ currentBranch: y, defaultTargetBranch: O, recentBranches: re }),
    A = te || E,
    j = ne || ae,
    M;
  t[3] !== T || t[4] !== D
    ? ((M = () => {
        Promise.all([T(), D()]);
      }),
      (t[3] = T),
      (t[4] = D),
      (t[5] = M))
    : (M = t[5]);
  let N = M,
    P;
  t[6] !== d || t[7] !== l
    ? ((P = (e) => {
        (o.error(`Failed to start code review`, { safe: {}, sensitive: { error: e } }),
          l
            .get(B)
            .danger(
              d.formatMessage({
                id: `composer.reviewMode.quickReviewError`,
                defaultMessage: `Failed to start code review.`,
                description: `Toast shown when quick review action fails`,
              }),
            ));
      }),
      (t[6] = d),
      (t[7] = l),
      (t[8] = P))
    : (P = t[8]);
  let F;
  t[9] !== r || t[10] !== g || t[11] !== l
    ? ((F = (e) => {
        if ((_e(l, e.diffFilter), e.delivery === `detached`)) {
          (ye(l, e.conversationId, e.baseBranch), g(e.conversationId));
          return;
        }
        ye(l, r, e.baseBranch);
        let t = l.get(he.activeTab$)?.tabId;
        (de(l, !t?.startsWith(`sidechat:`)), l.set(le, !1));
      }),
      (t[9] = r),
      (t[10] = g),
      (t[11] = l),
      (t[12] = F))
    : (F = t[12]);
  let I;
  t[13] !== c.id || t[14] !== P || t[15] !== F
    ? ((I = { hostId: c.id, onError: P, onSuccess: F }),
      (t[13] = c.id),
      (t[14] = P),
      (t[15] = F),
      (t[16] = I))
    : (I = t[16]);
  let { mutate: L, isPending: R, variables: V } = Ee(I),
    H = R && V?.context.mode === `base-branch` ? V.context.baseBranch : null,
    U;
  t[17] !== r ||
  t[18] !== y ||
  t[19] !== s ||
  t[20] !== v ||
  t[21] !== d ||
  t[22] !== R ||
  t[23] !== a ||
  t[24] !== i ||
  t[25] !== k ||
  t[26] !== l ||
  t[27] !== L
    ? ((U = (e) => {
        if (!R) {
          if (!v) {
            l.get(B).danger(
              d.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          if (e === `base-branch`) {
            (se(l, oe, { target: `base_branch` }), h({ status: `choose-base` }), i());
            return;
          }
          (se(l, oe, { target: `unstaged` }),
            L(
              {
                conversationId: r,
                context: { mode: `uncommitted`, sourceBranch: y ?? `HEAD`, gitRoot: v, cwd: s },
                delivery: k ?? `inline`,
              },
              { onSuccess: a },
            ));
        }
      }),
      (t[17] = r),
      (t[18] = y),
      (t[19] = s),
      (t[20] = v),
      (t[21] = d),
      (t[22] = R),
      (t[23] = a),
      (t[24] = i),
      (t[25] = k),
      (t[26] = l),
      (t[27] = L),
      (t[28] = U))
    : (U = t[28]);
  let W = U,
    G;
  t[29] !== r ||
  t[30] !== y ||
  t[31] !== s ||
  t[32] !== v ||
  t[33] !== d ||
  t[34] !== R ||
  t[35] !== a ||
  t[36] !== k ||
  t[37] !== l ||
  t[38] !== L
    ? ((G = (e) => {
        if (!R) {
          if (!v) {
            l.get(B).danger(
              d.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          L(
            {
              conversationId: r,
              context: {
                mode: `base-branch`,
                sourceBranch: y ?? `HEAD`,
                baseBranch: e,
                gitRoot: v,
                cwd: s,
              },
              delivery: k ?? `inline`,
            },
            { onSuccess: a },
          );
        }
      }),
      (t[29] = r),
      (t[30] = y),
      (t[31] = s),
      (t[32] = v),
      (t[33] = d),
      (t[34] = R),
      (t[35] = a),
      (t[36] = k),
      (t[37] = l),
      (t[38] = L),
      (t[39] = G))
    : (G = t[39]);
  let K = G;
  if (m.status === `choose-target`) {
    let e, r;
    t[40] === W
      ? ((e = t[41]), (r = t[42]))
      : ((r = () => W(`unstaged`)),
        (e = () => W(`base-branch`)),
        (t[40] = W),
        (t[41] = e),
        (t[42] = r));
    let i;
    t[43] === b ? (i = t[44]) : ((i = n(b)), (t[43] = b), (t[44] = i));
    let a;
    t[45] === C
      ? (a = t[46])
      : ((a = () => {
          C();
        }),
        (t[45] = C),
        (t[46] = a));
    let o;
    return (
      t[47] !== x ||
      t[48] !== S ||
      t[49] !== R ||
      t[50] !== e ||
      t[51] !== i ||
      t[52] !== a ||
      t[53] !== r
        ? ((o = (0, $.jsx)(Ie, {
            onSelectUnstaged: r,
            onSelectBaseBranch: e,
            isSubmitting: R,
            isLoadingBaseBranch: S,
            requiresXcodeLicense: i,
            isRetryingGit: x,
            onRetryGit: a,
          })),
          (t[47] = x),
          (t[48] = S),
          (t[49] = R),
          (t[50] = e),
          (t[51] = i),
          (t[52] = a),
          (t[53] = r),
          (t[54] = o))
        : (o = t[54]),
      o
    );
  }
  let q = Re,
    J = ce.map(Ve),
    Y;
  return (
    t[55] !== q ||
    t[56] !== K ||
    t[57] !== j ||
    t[58] !== A ||
    t[59] !== N ||
    t[60] !== H ||
    t[61] !== J
      ? ((Y = (0, $.jsx)(q, {
          onSelect: K,
          branchLines: J,
          isLoading: A,
          isError: j,
          refetchBranchOverview: N,
          submittingBranchName: H,
        })),
        (t[55] = q),
        (t[56] = K),
        (t[57] = j),
        (t[58] = A),
        (t[59] = N),
        (t[60] = H),
        (t[61] = J),
        (t[62] = Y))
      : (Y = t[62]),
    Y
  );
}
function Ve(e) {
  return { key: e, label: e };
}
var He, Ue, $;
e(() => {
  ((He = i()),
    j(),
    g(),
    c(),
    (Ue = t(f(), 1)),
    k(),
    Ae(),
    re(),
    Y(),
    V(),
    b(),
    Ne(),
    K(),
    xe(),
    L(),
    ve(),
    me(),
    I(),
    D(),
    H(),
    U(),
    v(),
    T(),
    Fe(),
    ze(),
    ($ = y()));
})();
export { Be as ReviewModeContent };
//# sourceMappingURL=review-mode-content.js.map
