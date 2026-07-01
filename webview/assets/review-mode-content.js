import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $p as r,
  AN as i,
  CV as a,
  C_ as o,
  DF as s,
  D_ as c,
  EN as l,
  GP as u,
  HP as d,
  HT as f,
  Hu as p,
  IP as m,
  Jh as h,
  Ku as g,
  LP as _,
  Mh as v,
  PN as y,
  QN as b,
  RN as x,
  RV as S,
  TB as ee,
  XO as C,
  YO as w,
  Yh as te,
  Yj as T,
  bB as E,
  fN as ne,
  hN as re,
  hS as ie,
  iF as D,
  jV as O,
  mN as k,
  pN as ae,
  pS as A,
  qP as j,
  qj as oe,
  vO as M,
  wO as se,
  wh as N,
  xV as P,
  yE as F,
  yO as I,
  yp as L,
  zV as R,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  AS as ce,
  HS as z,
  Kl as B,
  LS as le,
  Mw as V,
  Nw as ue,
  Tp as de,
  WS as fe,
  bC as pe,
  bl as me,
  fs as H,
  jS as U,
  nb as W,
  pl as G,
  ps as K,
  ql as he,
  rb as q,
  wp as J,
  yC as Y,
} from "./app-initial~app-main~onboarding-page.js";
import {
  B as ge,
  R as X,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import { c as _e, s as Z } from "./app-initial~app-main~local-conversation-page.js";
import { n as ve, t as ye } from "./use-git-recent-branches.js";
var be,
  xe = e(() => {
    be = `# Review Guidelines

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
function Se({ reviewInstructions: e, requestMessage: t }) {
  return [M, be.trim(), e.trim(), I, t].join(`
`);
}
async function Ce({ context: e, hostId: t, intl: n }) {
  if (e.mode === `uncommitted`)
    return {
      diffFilter: `unstaged`,
      prompt: Se({
        reviewInstructions: De,
        requestMessage: n.formatMessage({
          id: `quickAction.request.codeReview.uncommitted`,
          defaultMessage: `Please review my uncommitted changes`,
          description: `User message used when reviewing uncommitted changes`,
        }),
      }),
      baseBranch: null,
    };
  let r = await y(`git-merge-base`, {
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
    prompt: Se({
      reviewInstructions: Ee.replaceAll(`{baseBranch}`, e.baseBranch).replaceAll(
        `{mergeBaseSha}`,
        r.mergeBaseSha.trim(),
      ),
      requestMessage: i,
    }),
    baseBranch: e.baseBranch,
  };
}
function we(e) {
  let t = (0, Te.c)(13),
    { hostId: i, onError: o, onSuccess: s } = e,
    c = ee(m),
    l = j(),
    u = g(i),
    d;
  t[0] !== i || t[1] !== u || t[2] !== l || t[3] !== c
    ? ((d = async (e) => {
        let { context: t, conversationId: n, delivery: a } = e,
          { gitRoot: o, cwd: s } = t,
          d = await Ce({ context: t, hostId: i, intl: l }),
          f = n == null ? null : c.get(r, n);
        if (a === `inline` && n != null && f === i) {
          if (u == null) throw Error(`Code review host is unavailable`);
          return (
            await C(`start-turn-for-host`, {
              hostId: u.getHostId(),
              conversationId: n,
              params: {
                cwd: s,
                input: [{ type: `text`, text: d.prompt, text_elements: [] }],
                approvalsReviewer: `user`,
                collaborationMode: null,
                inheritThreadSettings: !1,
                serviceTier: await q(c, i, null),
              },
            }),
            { delivery: `inline`, diffFilter: d.diffFilter, baseBranch: d.baseBranch }
          );
        }
        let p = await C(`start-conversation`, {
          hostId: i,
          input: [{ type: `text`, text: d.prompt, text_elements: [] }],
          cwd: s,
          workspaceRoots: [o],
          collaborationMode: null,
          serviceTier: await q(c, i, null),
          approvalsReviewer: `user`,
        });
        return {
          baseBranch: d.baseBranch,
          conversationId: p,
          delivery: `detached`,
          diffFilter: d.diffFilter,
        };
      }),
      (t[0] = i),
      (t[1] = u),
      (t[2] = l),
      (t[3] = c),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === s
    ? (f = t[6])
    : ((f = (e) => {
        s(e);
      }),
      (t[5] = s),
      (t[6] = f));
  let p;
  t[7] === o
    ? (p = t[8])
    : ((p = (e) => {
        (n.error(`Failed to start quick review conversation`, {
          safe: {},
          sensitive: { error: e },
        }),
          o(e));
      }),
      (t[7] = o),
      (t[8] = p));
  let h;
  return (
    t[9] !== d || t[10] !== f || t[11] !== p
      ? ((h = { mutationFn: d, onSuccess: f, onError: p }),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p),
        (t[12] = h))
      : (h = t[12]),
    a(h)
  );
}
var Te,
  Ee,
  De,
  Oe = e(() => {
    ((Te = S()),
      P(),
      E(),
      d(),
      p(),
      L(),
      w(),
      W(),
      xe(),
      se(),
      _(),
      b(),
      x(),
      (Ee =
        "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response."),
      (De = `Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.`));
  });
function ke(e, t, n, r) {
  let i = (0, Ae.c)(2),
    a;
  return (
    i[0] === n
      ? (a = i[1])
      : ((a = (e) => {
          let { root: t } = e;
          return { operationSource: n, root: t };
        }),
        (i[0] = n),
        (i[1] = a)),
    v(e, t, `base-branch`, a, n, r)
  );
}
var Ae,
  je = e(() => {
    ((Ae = S()), N());
  });
function Me({ currentBranch: e, defaultTargetBranch: t, recentBranches: n }) {
  let r = [],
    i = [t ?? Ne],
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
var Ne,
  Pe = e(() => {
    Ne = `main`;
  });
function Fe(e) {
  let t = (0, Q.c)(24),
    {
      onSelectUnstaged: n,
      onSelectBaseBranch: r,
      isSubmitting: i,
      isLoadingBaseBranch: a,
      requiresXcodeLicense: o,
      isRetryingGit: s,
      onRetryGit: c,
    } = e,
    l = j();
  if (o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(H, { className: `icon-xs shrink-0 text-token-charts-red` })), (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(`span`, {
          className: `font-medium text-token-foreground`,
          children: (0, $.jsx)(u, {
            id: `composer.reviewMode.xcodeLicenseRequired.title`,
            defaultMessage: `Review the Xcode license to use Git`,
            description: `Title shown when Git cannot run until the user accepts the Xcode license`,
          }),
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [
            n,
            (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, $.jsx)(u, {
                id: `composer.reviewMode.xcodeLicenseRequired.detail`,
                defaultMessage: `In your terminal, run <command>sudo xcodebuild -license</command>, follow the prompts, and try again.`,
                description: `Instructions shown when Git cannot run until the user accepts the Xcode license`,
                values: { command: Ie },
              }),
            }),
          ],
        })),
        (t[2] = r))
      : (r = t[2]);
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(u, {
          id: `composer.reviewMode.xcodeLicenseRequired.retry`,
          defaultMessage: `Try again`,
          description: `Button label for retrying Git after accepting the Xcode license`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] !== s || t[5] !== c
        ? ((a = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2 px-3 py-2 text-sm`,
            role: `alert`,
            children: [
              e,
              r,
              (0, $.jsx)(ne, {
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
  let d;
  t[7] === l
    ? (d = t[8])
    : ((d = l.formatMessage({
        id: `composer.reviewMode.option.baseBranch.simple`,
        defaultMessage: `Review against a base branch`,
        description: `Button label for reviewing against a base branch`,
      })),
      (t[7] = l),
      (t[8] = d));
  let f = i || a,
    p = a ? k : void 0,
    m;
  t[9] !== r || t[10] !== d || t[11] !== f || t[12] !== p
    ? ((m = (0, $.jsx)(Z, {
        value: `base-branch`,
        title: d,
        onSelect: r,
        disabled: f,
        RightIcon: p,
      })),
      (t[9] = r),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === l
    ? (h = t[15])
    : ((h = l.formatMessage({
        id: `composer.reviewMode.option.unstaged.simple`,
        defaultMessage: `Review uncommitted changes`,
        description: `Button label for reviewing unstaged changes`,
      })),
      (t[14] = l),
      (t[15] = h));
  let g = i ? k : void 0,
    _;
  t[16] !== i || t[17] !== n || t[18] !== h || t[19] !== g
    ? ((_ = (0, $.jsx)(Z, { value: `unstaged`, title: h, onSelect: n, disabled: i, RightIcon: g })),
      (t[16] = i),
      (t[17] = n),
      (t[18] = h),
      (t[19] = g),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== m || t[22] !== _
      ? ((v = (0, $.jsxs)($.Fragment, { children: [m, _] })), (t[21] = m), (t[22] = _), (t[23] = v))
      : (v = t[23]),
    v
  );
}
function Ie(e) {
  return (0, $.jsx)(`code`, { className: `font-mono`, children: e }, `command`);
}
function Le(e) {
  let t = (0, Q.c)(10),
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
        ? (0, $.jsx)(`div`, {
            className: `flex items-center justify-center gap-2 py-4 text-xs text-token-foreground/70`,
            children: (0, $.jsx)(k, { className: `size-3` }),
          })
        : a
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2 py-2`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `text-center text-xs text-token-foreground/70`,
                  children: (0, $.jsx)(u, {
                    id: `composer.reviewMode.branches.error`,
                    defaultMessage: `Unable to load branches`,
                    description: `Error message when branch list could not be loaded`,
                  }),
                }),
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `text-xs font-medium text-token-text-link-foreground`,
                  onClick: o,
                  children: (0, $.jsx)(u, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                }),
              ],
            })
          : r.map((e) =>
              (0, $.jsx)(
                Z,
                {
                  value: e.label,
                  title: e.label,
                  onSelect: n,
                  disabled: c,
                  RightIcon: s === e.key ? k : void 0,
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
  let d;
  return (
    t[8] === l
      ? (d = t[9])
      : ((d = (0, $.jsx)($.Fragment, { children: l })), (t[8] = l), (t[9] = d)),
    d
  );
}
var Q,
  $,
  Re = e(() => {
    ((Q = S()), d(), ae(), re(), K(), _e(), ($ = O()));
  });
function ze(e) {
  let t = (0, Ve.c)(63),
    { conversationId: r, onItemsChanged: a, onClose: c, cwd: l, hostConfig: u } = e,
    d = ee(o),
    p = j(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { status: `choose-target` }), (t[0] = m))
    : (m = t[0]);
  let [h, g] = (0, He.useState)(m),
    _ = de(),
    v;
  t[1] === u.id
    ? (v = t[2])
    : ((v = { hostId: u.id, source: `review_mode_content` }), (t[1] = u.id), (t[2] = v));
  let { gitRoot: y } = ge(l, v),
    {
      data: b,
      error: x,
      isFetching: S,
      isLoading: C,
      refetch: w,
    } = he(y, u, `review_mode_content`),
    { data: E, isLoading: ne, isError: re, refetch: D } = ke(y, u, `review_mode_content`),
    { data: O, isLoading: k, isError: ae, refetch: A } = ve(y, u, `review_mode_content`),
    oe = ce(E ?? null),
    M = i(s.reviewDelivery),
    se = Me({ currentBranch: b, defaultTargetBranch: oe, recentBranches: O }),
    N = ne || k,
    P = re || ae,
    F;
  t[3] !== D || t[4] !== A
    ? ((F = () => {
        Promise.all([D(), A()]);
      }),
      (t[3] = D),
      (t[4] = A),
      (t[5] = F))
    : (F = t[5]);
  let I = F,
    L;
  t[6] !== p || t[7] !== d
    ? ((L = (e) => {
        (n.error(`Failed to start code review`, { safe: {}, sensitive: { error: e } }),
          d
            .get(T)
            .danger(
              p.formatMessage({
                id: `composer.reviewMode.quickReviewError`,
                defaultMessage: `Failed to start code review.`,
                description: `Toast shown when quick review action fails`,
              }),
            ));
      }),
      (t[6] = p),
      (t[7] = d),
      (t[8] = L))
    : (L = t[8]);
  let R;
  t[9] !== r || t[10] !== _ || t[11] !== d
    ? ((R = (e) => {
        if ((fe(d, e.diffFilter), e.delivery === `detached`)) {
          (le(d, e.conversationId, e.baseBranch), _(e.conversationId));
          return;
        }
        le(d, r, e.baseBranch);
        let t = d.get(pe.activeTab$)?.tabId;
        (me(d, !t?.startsWith(`sidechat:`)), d.set(ue, !1));
      }),
      (t[9] = r),
      (t[10] = _),
      (t[11] = d),
      (t[12] = R))
    : (R = t[12]);
  let z;
  t[13] !== u.id || t[14] !== L || t[15] !== R
    ? ((z = { hostId: u.id, onError: L, onSuccess: R }),
      (t[13] = u.id),
      (t[14] = L),
      (t[15] = R),
      (t[16] = z))
    : (z = t[16]);
  let { mutate: B, isPending: V, variables: H } = we(z),
    U = V && H?.context.mode === `base-branch` ? H.context.baseBranch : null,
    W;
  t[17] !== r ||
  t[18] !== b ||
  t[19] !== l ||
  t[20] !== y ||
  t[21] !== p ||
  t[22] !== V ||
  t[23] !== c ||
  t[24] !== a ||
  t[25] !== M ||
  t[26] !== d ||
  t[27] !== B
    ? ((W = (e) => {
        if (!V) {
          if (!y) {
            d.get(T).danger(
              p.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          if (e === `base-branch`) {
            (ie(d, f, { target: `base_branch` }), g({ status: `choose-base` }), a());
            return;
          }
          (ie(d, f, { target: `unstaged` }),
            B(
              {
                conversationId: r,
                context: { mode: `uncommitted`, sourceBranch: b ?? `HEAD`, gitRoot: y, cwd: l },
                delivery: M ?? `inline`,
              },
              { onSuccess: c },
            ));
        }
      }),
      (t[17] = r),
      (t[18] = b),
      (t[19] = l),
      (t[20] = y),
      (t[21] = p),
      (t[22] = V),
      (t[23] = c),
      (t[24] = a),
      (t[25] = M),
      (t[26] = d),
      (t[27] = B),
      (t[28] = W))
    : (W = t[28]);
  let G = W,
    K;
  t[29] !== r ||
  t[30] !== b ||
  t[31] !== l ||
  t[32] !== y ||
  t[33] !== p ||
  t[34] !== V ||
  t[35] !== c ||
  t[36] !== M ||
  t[37] !== d ||
  t[38] !== B
    ? ((K = (e) => {
        if (!V) {
          if (!y) {
            d.get(T).danger(
              p.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          B(
            {
              conversationId: r,
              context: {
                mode: `base-branch`,
                sourceBranch: b ?? `HEAD`,
                baseBranch: e,
                gitRoot: y,
                cwd: l,
              },
              delivery: M ?? `inline`,
            },
            { onSuccess: c },
          );
        }
      }),
      (t[29] = r),
      (t[30] = b),
      (t[31] = l),
      (t[32] = y),
      (t[33] = p),
      (t[34] = V),
      (t[35] = c),
      (t[36] = M),
      (t[37] = d),
      (t[38] = B),
      (t[39] = K))
    : (K = t[39]);
  let q = K;
  if (h.status === `choose-target`) {
    let e, n;
    t[40] === G
      ? ((e = t[41]), (n = t[42]))
      : ((n = () => G(`unstaged`)),
        (e = () => G(`base-branch`)),
        (t[40] = G),
        (t[41] = e),
        (t[42] = n));
    let r;
    t[43] === x ? (r = t[44]) : ((r = te(x)), (t[43] = x), (t[44] = r));
    let i;
    t[45] === w
      ? (i = t[46])
      : ((i = () => {
          w();
        }),
        (t[45] = w),
        (t[46] = i));
    let a;
    return (
      t[47] !== S ||
      t[48] !== C ||
      t[49] !== V ||
      t[50] !== e ||
      t[51] !== r ||
      t[52] !== i ||
      t[53] !== n
        ? ((a = (0, Ue.jsx)(Fe, {
            onSelectUnstaged: n,
            onSelectBaseBranch: e,
            isSubmitting: V,
            isLoadingBaseBranch: C,
            requiresXcodeLicense: r,
            isRetryingGit: S,
            onRetryGit: i,
          })),
          (t[47] = S),
          (t[48] = C),
          (t[49] = V),
          (t[50] = e),
          (t[51] = r),
          (t[52] = i),
          (t[53] = n),
          (t[54] = a))
        : (a = t[54]),
      a
    );
  }
  let J = Le,
    Y = se.map(Be),
    X;
  return (
    t[55] !== J ||
    t[56] !== q ||
    t[57] !== P ||
    t[58] !== N ||
    t[59] !== I ||
    t[60] !== U ||
    t[61] !== Y
      ? ((X = (0, Ue.jsx)(J, {
          onSelect: q,
          branchLines: Y,
          isLoading: N,
          isError: P,
          refetchBranchOverview: I,
          submittingBranchName: U,
        })),
        (t[55] = J),
        (t[56] = q),
        (t[57] = P),
        (t[58] = N),
        (t[59] = I),
        (t[60] = U),
        (t[61] = Y),
        (t[62] = X))
      : (X = t[62]),
    X
  );
}
function Be(e) {
  return { key: e, label: e };
}
var Ve, He, Ue;
e(() => {
  ((Ve = S()),
    F(),
    E(),
    D(),
    (He = t(R(), 1)),
    d(),
    Oe(),
    V(),
    Y(),
    oe(),
    h(),
    je(),
    B(),
    ye(),
    A(),
    z(),
    U(),
    c(),
    l(),
    G(),
    X(),
    b(),
    J(),
    Pe(),
    Re(),
    (Ue = O()));
})();
export { ze as ReviewModeContent };
//# sourceMappingURL=review-mode-content.js.map
