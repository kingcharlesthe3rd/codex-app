import { s as e } from "./chunk-Bj-mKKzh.js";
import { Ht as t, S as n } from "./src-2.js";
import {
  C as r,
  Hn as i,
  U as a,
  Un as o,
  Vn as s,
  Yn as c,
  cr as l,
  ht as u,
  lr as d,
  mo as f,
  or as p,
  pr as m,
  sr as h,
  tr as g,
} from "./app-server-manager-signals.js";
import { n as _, t as v } from "./jsx-runtime.js";
import {
  B as y,
  F as ee,
  G as b,
  I as te,
  L as x,
  P as S,
  R as C,
  U as w,
  V as T,
  W as E,
  f as D,
  h as O,
  lt as k,
  n as A,
  r as j,
  u as M,
} from "./vscode-api.js";
import { c as ne, o as N, r as re } from "./lib-2.js";
import { m as ie } from "./chunk-12.js";
import { t as ae } from "./branch.js";
import { g as oe, t as se, v as ce } from "./persisted-signal-CweW-bgN.js";
import { a as le } from "./thread-context-inputs.js";
import { t as ue } from "./use-debounced-value.js";
import { r as P } from "./toast-signal.js";
import { r as de, t as fe } from "./tooltip.js";
import { t as F } from "./route-scope.js";
import { c as pe } from "./prompt-text.js";
import { a as me } from "./use-model-settings.js";
import { a as he, t as ge } from "./setting-storage.js";
import { t as _e } from "./spinner.js";
import { t as I } from "./x.js";
import { t as ve } from "./sumBy-BCSe-07a.js";
import { i as L, n as ye } from "./git-current-branch-query.js";
import { t as R } from "./app-intl-signal-B.js";
import { n as be } from "./check-git-index-for-changes.js";
import { t as xe } from "./copy-to-clipboard.js";
import { d as Se, l as Ce } from "./dialog-layout.js";
import { t as we } from "./check-md.js";
import { n as Te } from "./electron-menu-shortcuts.js";
import { t as Ee } from "./checkbox.js";
import { r as z, t as De } from "./dropdown.js";
import { t as Oe } from "./chevron.js";
import { t as ke } from "./copy.js";
import { t as Ae } from "./plus-d3DP-DMx.js";
import { n as je, t as Me } from "./gh-cli-status-query.js";
import { n as Ne } from "./dist-12.js";
import { n as B } from "./use-git-default-branch-CNI-XiEj.js";
import { r as Pe } from "./diff-stats.js";
import { t as Fe } from "./send-to-cloud.js";
import { t as Ie } from "./cmdk.js";
import { t as Le } from "./codex-analytics-attribution.js";
import { i as Re, r as V, t as ze } from "./gh-pull-request-status-query-Do-O_y_F.js";
import { t as Be } from "./get-default-branch-name.js";
var Ve = L({
    method: `branch-exists`,
    getParams: (e) => ({ branch: e.branch, operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({ select: (e) => e.exists, staleTime: M.FIVE_SECONDS }),
  }).fromCwd$,
  He = { type: `loading` },
  Ue = { type: `error` },
  We = L({
    method: `upstream-branch`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({ refetchOnWindowFocus: !0, staleTime: 3e4 }),
  }),
  Ge = L({
    method: `branch-ahead-count`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({ refetchOnWindowFocus: !0, staleTime: 3e4 }),
  }),
  Ke = L({
    method: `default-branch`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({ refetchOnWindowFocus: !0, select: (e) => e.branch, staleTime: 3e4 }),
  }),
  H = C(
    O,
    (e, { get: t }) => {
      let n = { ...e, enabled: !0 },
        r = t(p, { ...n, watchForGitInit: !1 }),
        i = t(We.fromCwd$, n),
        a = t(Ge.fromCwd$, n),
        o = t(Ke.fromCwd$, n);
      if (r.isError || i.isError || a.isError || o.isError) return Ue;
      if (!r.isSuccess || !i.isSuccess || !a.isSuccess || !o.isSuccess) return He;
      let s = r.data,
        c = i.data,
        l = a.data;
      return s == null || c == null || l == null
        ? Ue
        : {
            type: `success`,
            data: {
              gitRoot: s.root,
              branch: c.branch ?? null,
              defaultBranch: o.data ?? null,
              commitsAhead: l.commitsAhead,
              upstreamRef: c.upstream?.branch ?? null,
              isMainWorktree: Je(s),
            },
          };
    },
    { excludeFieldsFromKey: [`operationSource`] },
  );
function qe(e, t) {
  let n = { ...t, enabled: !0 };
  return Promise.all([e.get(We.fromCwd$, n).refetch(), e.get(Ge.fromCwd$, n).refetch()]);
}
function Je(e) {
  let t = f(e.root).replace(/\/+$/, ``),
    n = f(e.commonDir).replace(/\/+$/, ``);
  return n === t ? !0 : n === `${t}/.git`;
}
var Ye = e(_()),
  U = v(),
  Xe = (e) =>
    (0, U.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, U.jsx)(`path`, {
          d: `M13.5013 10.0003C13.5013 8.06653 11.9341 6.49856 10.0003 6.49838C8.06641 6.49838 6.49837 8.06642 6.49837 10.0003C6.49855 11.9341 8.06652 13.5013 10.0003 13.5013C11.934 13.5011 13.5011 11.934 13.5013 10.0003ZM14.8314 10.0003C14.8312 12.6685 12.6685 14.8312 10.0003 14.8314C7.33198 14.8314 5.16847 12.6686 5.16829 10.0003C5.16829 7.33188 7.33187 5.1683 10.0003 5.1683C12.6686 5.16848 14.8314 7.33199 14.8314 10.0003Z`,
          fill: `currentColor`,
        }),
        (0, U.jsx)(`path`, {
          d: `M5 9.33497C5.36727 9.33497 5.66504 9.63274 5.66504 10C5.66504 10.3673 5.36727 10.665 5 10.665H1.25C0.882731 10.665 0.584961 10.3673 0.584961 10C0.584961 9.63274 0.882731 9.33497 1.25 9.33497H5Z`,
          fill: `currentColor`,
        }),
        (0, U.jsx)(`path`, {
          d: `M18.75 9.33497C19.1173 9.33497 19.415 9.63274 19.415 10C19.415 10.3673 19.1173 10.665 18.75 10.665H15C14.6327 10.665 14.335 10.3673 14.335 10C14.335 9.63274 14.6327 9.33497 15 9.33497H18.75Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  W = k();
function Ze(e) {
  let t = (0, W.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `changes-loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `review.commit.disabled.loadingDiff`,
              defaultMessage: `Loading diff…`,
              description: `Tooltip shown on the commit button while changes are loading`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `changes-unavailable`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `review.commit.disabled.unavailable`,
              defaultMessage: `Commit is unavailable right now`,
              description: `Fallback tooltip shown when commit is disabled for an unknown reason`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `no-changes`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `review.commit.disabled.noChanges`,
              defaultMessage: `No changes to commit`,
              description: `Tooltip shown when there are no changes to commit`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function Qe(e) {
  let t = (0, W.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.pushBranchMissing`,
              defaultMessage: `Branch information unavailable`,
              description: `Tooltip shown when branch info cannot be resolved`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `nothing-to-push`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.pushNothingToPush`,
              defaultMessage: `No new commits to push`,
              description: `Tooltip shown when there are no commits ahead of the remote`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `push-status-loading`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.pushStatusMissing`,
              defaultMessage: `Loading push status…`,
              description: `Tooltip shown when push status is loading`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function $e(e) {
  let t = (0, W.c)(11),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestBranchMissing`,
              defaultMessage: `Branch information unavailable`,
              description: `Tooltip shown when create PR is disabled because the current branch cannot be determined`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `checking-existing-pr`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.viewPullRequestButtonLabel.loading`,
              defaultMessage: `Loading pull request…`,
              description: `Tooltip shown while the pull request URL is loading`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `default-branch-checked-out`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestSwitchBranch`,
              defaultMessage: `Checkout a feature branch before creating a PR`,
              description: `Tooltip shown when create PR is disabled because the default branch is active`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `default-branch-missing`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestDefaultBranchMissing`,
              defaultMessage: `Default branch information unavailable`,
              description: `Tooltip shown when create PR is disabled because the default branch cannot be determined`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `gh-auth-required`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestAuthGh`,
              defaultMessage: "Authenticate GitHub CLI: run `gh auth login`",
              description: `Tooltip shown when create PR is disabled because GitHub CLI is not authenticated`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `gh-cli-missing`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestInstallGh`,
              defaultMessage: `Install GitHub CLI (gh) to create PRs`,
              description: `Tooltip shown when create PR is disabled because GitHub CLI is missing`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `gh-status-loading`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestGhStatusMissing`,
              defaultMessage: `Loading GitHub CLI status…`,
              description: `Tooltip shown when create PR is disabled because the GitHub CLI status is loading`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `no-git-repository`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestNoRepo`,
              defaultMessage: `No git repository found`,
              description: `Tooltip shown when create PR is disabled because no git repository is detected`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `pull-request-exists`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestExistingPullRequest`,
              defaultMessage: `A pull request already exists for this branch`,
              description: `Tooltip shown when create PR is disabled because a PR already exists`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `push-status-loading`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestPushStatusMissing`,
              defaultMessage: `Loading push status…`,
              description: `Tooltip shown when create PR is disabled because the push status is loading`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `upstream-missing`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(N, {
              id: `localConversationPage.createPullRequestSetUpstream`,
              defaultMessage: `Push this branch before creating a PR`,
              description: `Tooltip shown when create PR is disabled because the branch has no upstream`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
  }
}
function et(e) {
  let t = (0, W.c)(6),
    { blockedStep: n } = e;
  if (n == null) return null;
  switch (n.kind) {
    case `commit`: {
      let e;
      return (
        t[0] === n.reason
          ? (e = t[1])
          : ((e = (0, U.jsx)(Ze, { reason: n.reason })), (t[0] = n.reason), (t[1] = e)),
        e
      );
    }
    case `push`: {
      let e;
      return (
        t[2] === n.reason
          ? (e = t[3])
          : ((e = (0, U.jsx)(Qe, { reason: n.reason })), (t[2] = n.reason), (t[3] = e)),
        e
      );
    }
    case `create-pr`: {
      let e;
      return (
        t[4] === n.reason
          ? (e = t[5])
          : ((e = (0, U.jsx)($e, { reason: n.reason })), (t[4] = n.reason), (t[5] = e)),
        e
      );
    }
  }
}
function tt({
  commitsAhead: e,
  commitBlockedReason: t,
  createPullRequestAfterPushBlockedReason: n,
  createPullRequestBlockedReason: r,
  createsBranch: i,
  pushAfterCommitBlockedReason: a,
  pushBlockedReason: o,
}) {
  return i
    ? {
        canCommitPushAndCreatePullRequest: t == null && rt(a) && rt(n),
        canCreatePullRequest: !1,
        canPushAndCreatePullRequest: e > 0 && rt(o) && rt(n),
      }
    : {
        canCommitPushAndCreatePullRequest: t == null && a == null && n == null,
        canCreatePullRequest: r == null,
        canPushAndCreatePullRequest:
          (o == null || (o === `nothing-to-push` && r === `upstream-missing`)) && n == null,
      };
}
function nt({
  canCommitPushAndCreatePullRequest: e,
  canCreatePullRequest: t,
  canPushAndCreatePullRequest: n,
  createsBranch: r,
  includeLocalChanges: i,
}) {
  return i
    ? e
      ? `commit-push-and-create-pr`
      : n
        ? `push-and-create-pr`
        : t
          ? `create-pr`
          : `commit-push-and-create-pr`
    : r
      ? `push-and-create-pr`
      : `create-pr`;
}
function rt(e) {
  return (
    e == null ||
    e === `branch-missing` ||
    e === `checking-existing-pr` ||
    e === `default-branch-checked-out` ||
    e === `push-status-loading`
  );
}
function it({ hasSomeUncommittedChanges: e, isChangesLoading: t, isChangesUnavailable: n }) {
  switch (!0) {
    case t:
      return `changes-loading`;
    case n:
      return `changes-unavailable`;
    case !e:
      return `no-changes`;
    case !0:
      return null;
  }
  return null;
}
function G({ pushStatus: e, ignoreNothingToPush: t = !1 }) {
  switch (!0) {
    case !e:
      return `push-status-loading`;
    case !e?.branch:
      return `branch-missing`;
    case !t && e?.commitsAhead === 0:
      return `nothing-to-push`;
    case !0:
      return null;
  }
  return null;
}
function at({
  ghCliAvailability: e,
  pushStatus: t,
  allowMissingUpstream: n = !1,
  hasOpenPr: r,
  isLoadingPRStatus: i,
}) {
  switch (!0) {
    case r:
      return `pull-request-exists`;
    case i:
      return `checking-existing-pr`;
    case e === `loading` || e === `error`:
      return `gh-status-loading`;
    case e === `missing`:
      return `gh-cli-missing`;
    case e === `unauthenticated`:
      return `gh-auth-required`;
    case !t:
      return `push-status-loading`;
    case !t?.gitRoot:
      return `no-git-repository`;
    case !t?.defaultBranch:
      return `default-branch-missing`;
    case !t?.branch:
      return `branch-missing`;
    case t?.branch === t?.defaultBranch:
      return `default-branch-checked-out`;
    case !n && !t?.upstreamRef:
      return `upstream-missing`;
    case !0:
      return null;
  }
  return null;
}
var ot = e(ve(), 1);
function st(e) {
  let t = e.flatMap((e) => (e?.type === `success` ? e.files : []));
  return t.length === 0
    ? null
    : {
        files: t.map((e) => ({
          path: e.path,
          additions: e.additions ?? 0,
          deletions: e.deletions ?? 0,
        })),
        totalAdditions: (0, ot.default)(t, (e) => e.additions ?? 0),
        totalDeletions: (0, ot.default)(t, (e) => e.deletions ?? 0),
      };
}
function ct(e, t) {
  let n = lt(e),
    r = t.flatMap((e) =>
      e?.type === `success`
        ? e.files.filter((e) => [e.path, e.previousPath].some((e) => e != null && lt(e) === n))
        : [],
    );
  return r.length === 0
    ? null
    : {
        linesAdded: (0, ot.default)(r, (e) => e.additions ?? 0),
        linesRemoved: (0, ot.default)(r, (e) => e.deletions ?? 0),
      };
}
function lt(e) {
  let t = e.trim(),
    n =
      (t.startsWith(`"`) && t.endsWith(`"`)) || (t.startsWith(`'`) && t.endsWith(`'`))
        ? t.slice(1, -1)
        : t,
    r = n.startsWith(`./`) ? n.slice(2) : n;
  return r.startsWith(`a/`) || r.startsWith(`b/`) ? r.slice(2) : r;
}
var ut = T(F, (e) =>
    i(
      `review-summary`,
      { commonDir: e.commonDir, root: e.root },
      e.source === `staged`
        ? {
            cwd: e.cwd,
            includeUntrackedFiles: !1,
            operationSource: `local_conversation_git_actions`,
            source: `staged`,
          }
        : { cwd: e.cwd, operationSource: `local_conversation_git_actions`, source: `unstaged` },
      h(e.hostConfig),
      e.hostConfig,
      { staleTime: M.FIVE_SECONDS },
    ),
  ),
  dt = T(F, (e) =>
    i(
      `status-summary`,
      { commonDir: e.commonDir, root: e.root },
      { cwd: e.cwd, operationSource: `local_conversation_git_actions` },
      h(e.hostConfig),
      e.hostConfig,
      { staleTime: M.FIVE_SECONDS },
    ),
  ),
  ft = C(F, (e, { get: t }) =>
    t(p, {
      cwd: e.cwd,
      enabled: !0,
      hostConfig: e.hostConfig,
      operationSource: `local_conversation_git_actions`,
      watchForGitInit: !1,
    }),
  ),
  pt = C(F, (e, { get: t }) => {
    let n = t(ft, e),
      r = n.data ?? null;
    return r == null
      ? g(n)
      : t(ut, {
          commonDir: r.commonDir,
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          root: r.root,
          source: e.source,
        });
  }),
  mt = C(F, (e, { get: t }) => {
    let n = t(ft, e),
      r = n.data ?? null;
    return r == null
      ? g(n)
      : t(dt, { commonDir: r.commonDir, cwd: e.cwd, hostConfig: e.hostConfig, root: r.root });
  }),
  ht = C(F, (e, { get: t }) => {
    let n = t(pt, { cwd: e.cwd, hostConfig: e.hostConfig, source: `staged` }),
      r = e.includeUnstaged
        ? t(pt, { cwd: e.cwd, hostConfig: e.hostConfig, source: `unstaged` })
        : null,
      i = st(r == null ? [n.data] : [n.data, r.data]);
    return {
      hasSelectedChanges: (i?.files.length ?? 0) > 0,
      isFetching: n.isFetching || (r?.isFetching ?? !1),
      isLoading: n.isLoading || (r?.isLoading ?? !1),
      isUnavailable: n.data?.type === `error` || r?.data?.type === `error`,
      selectionSummary: i,
    };
  }),
  gt = C(F, (e, { get: t }) => {
    let n = t(mt, e),
      r = n.data;
    if (r?.type === `error`) {
      let n = t(ht, e);
      return it({
        hasSomeUncommittedChanges: n.hasSelectedChanges,
        isChangesLoading: n.isLoading,
        isChangesUnavailable: n.isUnavailable,
      });
    }
    return it({
      hasSomeUncommittedChanges:
        r?.type === `success` &&
        r.stagedCount + (e.includeUnstaged ? r.unstagedCount + r.untrackedCount : 0) > 0,
      isChangesLoading: n.isLoading,
      isChangesUnavailable: !1,
    });
  }),
  _t = C(F, (e, { get: t }) => {
    let n = t(H, bt(e));
    return G({ pushStatus: n.type === `success` ? n.data : void 0 });
  }),
  vt = C(F, (e, { get: t }) => {
    let n = t(H, bt(e));
    return G({ pushStatus: n.type === `success` ? n.data : void 0, ignoreNothingToPush: !0 });
  }),
  yt = C(F, (e, { get: t }) => {
    let n = t(H, bt(e)),
      r = n.type === `success` ? n.data : void 0,
      i = t(gt, { ...e, includeUnstaged: e.includeLocalChanges }),
      a = t(_t, e),
      o = t(vt, e),
      s = xt(e, r?.branch ?? ``),
      c = t(V, s),
      l = t(Me, e.hostConfig.id),
      u = t(ze, s),
      d = at({ ghCliAvailability: l, hasOpenPr: u, isLoadingPRStatus: c.isLoading, pushStatus: r }),
      f = at({
        allowMissingUpstream: !0,
        ghCliAvailability: l,
        hasOpenPr: u,
        isLoadingPRStatus: c.isLoading,
        pushStatus: r,
      }),
      p = tt({
        commitsAhead: r?.commitsAhead ?? 0,
        commitBlockedReason: i,
        createPullRequestAfterPushBlockedReason: f,
        createPullRequestBlockedReason: d,
        createsBranch: e.createsBranch,
        pushAfterCommitBlockedReason: o,
        pushBlockedReason: a,
      }),
      m = nt({ ...p, createsBranch: e.createsBranch, includeLocalChanges: e.includeLocalChanges });
    return {
      blockedStep: St({
        ...p,
        commitBlockedReason: i,
        createPullRequestAfterPushBlockedReason: f,
        createPullRequestBlockedReason: d,
        nextStep: m,
        pushAfterCommitBlockedReason: o,
        pushBlockedReason: a,
      }),
      nextStep: m,
    };
  });
function bt(e) {
  return {
    cwd: e.cwd,
    hostConfig: e.hostConfig,
    operationSource: `local_conversation_git_actions`,
  };
}
function xt(e, t) {
  return {
    cwd: e.cwd,
    headBranch: t,
    hostId: e.hostConfig.id,
    operationSource: `local_conversation_git_actions`,
  };
}
function St({
  canCommitPushAndCreatePullRequest: e,
  canCreatePullRequest: t,
  canPushAndCreatePullRequest: n,
  commitBlockedReason: r,
  createPullRequestAfterPushBlockedReason: i,
  createPullRequestBlockedReason: a,
  nextStep: o,
  pushAfterCommitBlockedReason: s,
  pushBlockedReason: c,
}) {
  if (i === `gh-auth-required` || i === `gh-cli-missing` || i === `gh-status-loading`)
    return { kind: `create-pr`, reason: i };
  switch (o) {
    case `create-pr`:
      return !t && a != null ? { kind: `create-pr`, reason: a } : null;
    case `push-and-create-pr`:
      return n
        ? null
        : c == null
          ? i == null
            ? null
            : { kind: `create-pr`, reason: i }
          : { kind: `push`, reason: c };
    case `commit-push-and-create-pr`:
      return e
        ? null
        : r == null
          ? s == null
            ? i == null
              ? null
              : { kind: `create-pr`, reason: i }
            : { kind: `push`, reason: s }
          : { kind: `commit`, reason: r };
  }
}
var K = new Map(),
  q = b(O, (e) => null),
  J = b(O, (e) => ``),
  Ct = se(`git-action-include-unstaged-changes`, !0),
  Y = b(O, (e) => ``),
  X = b(O, (e) => ``),
  wt = b(O, (e) => !0);
function Tt(e, t) {
  (e.set(Y, t, ``), e.set(X, t, ``), e.set(wt, t, !0));
}
function Et(e) {
  let t = new AbortController();
  return (K.set(kt(e), t), t.signal);
}
function Dt(e) {
  K.get(kt(e))?.abort();
}
function Ot(e, t) {
  K.get(kt(e))?.signal === t && K.delete(kt(e));
}
function kt(e) {
  return JSON.stringify([e.hostId, e.cwd]);
}
function At({ currentBranch: e, storedThreadBranch: t }) {
  let n = e?.trim() ?? ``,
    r = t?.trim() ?? ``;
  return {
    currentBranchName: n,
    hasThreadBranchMismatch: n.length > 0 && r.length > 0 && n !== r,
    storedThreadBranchName: r,
  };
}
var Z = w(`LocalGitActionsScope`, {
    key: ({ cwd: e, hostId: t }) => JSON.stringify([t, e]),
    parent: pe,
  }),
  jt = E(Z, null),
  Mt = E(Z, null),
  Nt = C(F, (e, { get: t }) =>
    t(ye, {
      cwd: e.cwd,
      enabled: !0,
      hostConfig: e.hostConfig,
      operationSource: `local_conversation_git_actions`,
      refetchOnWindowFocus: `always`,
      staleTime: null,
    }),
  ),
  Pt = C(F, (e, { get: t }) =>
    t(B, {
      cwd: e.cwd,
      enabled: !0,
      hostConfig: e.hostConfig,
      operationSource: `local_conversation_git_actions`,
      refetchOnWindowFocus: !0,
      staleTime: 3e4,
    }),
  ),
  Ft = C(F, (e, { get: t }) => {
    let n = t(Nt, e),
      i = t(H, {
        cwd: e.cwd,
        hostConfig: e.hostConfig,
        operationSource: `local_conversation_git_actions`,
      });
    return At({
      currentBranch: n.data ?? (i.type === `success` ? (i.data.branch ?? null) : null),
      storedThreadBranch: t(r, e.conversationId),
    }).currentBranchName;
  }),
  It = C(F, (e, { get: t }) => t(Re, en(e, t(Ft, e)))),
  Lt = C(F, (e, { get: t }) => t(ze, en(e, t(Ft, e)))),
  Rt = C(
    F,
    (e, { get: t }) =>
      At({ currentBranch: t(Ft, e), storedThreadBranch: t(r, e.conversationId) })
        .hasThreadBranchMismatch,
  ),
  zt = C(F, (e, { get: t }) => {
    let n = t(Nt, e);
    return n.isSuccess && n.data == null;
  }),
  Bt = x(Z, ({ get: e, scope: t }) => ({
    codexWorktree: t.value.codexWorktree,
    conversationId: t.value.conversationId,
    cwd: t.value.cwd,
    hostConfig: e(le, t.value.hostId),
  })),
  Vt = x(Z, ({ get: e, scope: t }) => e(q, { cwd: t.value.cwd, hostId: t.value.hostId })),
  Ht = x(Z, ({ get: e }) => e(gt, { ...e(Bt), includeUnstaged: !0 })),
  Ut = C(F, (e, { get: t }) => {
    let n = t(Nt, e);
    if (!n.isSuccess) return `hidden`;
    let r = n.data?.trim() ?? ``,
      i = r.length === 0;
    if (i) {
      let n = t(H, {
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          operationSource: `local_conversation_git_actions`,
        }),
        r = n.type === `success` ? n.data : null;
      if (t(gt, { ...e, includeUnstaged: !0 }) != null && (r?.commitsAhead ?? 0) === 0)
        return `hidden`;
    } else {
      let n = t(Pt, e).data;
      if (n == null || r === n) return `hidden`;
    }
    return t(yt, {
      cwd: e.cwd,
      hostConfig: e.hostConfig,
      createsBranch: i,
      includeLocalChanges: t(wt, { cwd: e.cwd, hostId: e.hostConfig.id }),
    }).blockedStep == null
      ? `enabled`
      : `disabled`;
  }),
  Wt = x(Z, ({ get: e }) => e(Ut, e(Bt))),
  Gt = x(Z, ({ get: e }) => {
    let t = e(Bt),
      n = e(H, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: `local_conversation_git_actions`,
      }),
      r = n.type === `success` ? n.data : void 0,
      i = e(Nt, t),
      a = i.isSuccess ? i.data : r?.branch;
    return t.codexWorktree && r != null && (!a || a === r.defaultBranch);
  }),
  Kt = x(Z, ({ get: e }) => e(Gt) && !e(zt, e(Bt))),
  qt = x(Z, ({ get: e }) => {
    let t = e(Bt),
      n = e(Ht),
      r = e(_t, t),
      i = e(vt, t);
    return r == null || (n == null && i == null) || (e(Gt) && n == null) ? null : r;
  }),
  Jt = x(Z, ({ get: e }) => {
    let t = e(Bt);
    return e(yt, {
      cwd: t.cwd,
      hostConfig: t.hostConfig,
      createsBranch: e(Gt) || e(zt, t),
      includeLocalChanges: e(wt, { cwd: t.cwd, hostId: t.hostConfig.id }),
    }).blockedStep;
  }),
  Yt = x(Z, ({ get: e }) => {
    let t = e(Bt);
    return t.codexWorktree && e(Nt, t).isLoading;
  });
function Xt(e) {
  if (e.get(Gt)) {
    (e.set(Mt, `commit`), e.set(jt, `worktree-branch-setup`));
    return;
  }
  e.set(jt, `commit`);
}
function Zt(e) {
  if (e.get(Kt)) {
    (e.set(Mt, `create-pr`), e.set(jt, `worktree-branch-setup`));
    return;
  }
  e.set(jt, `create-pr`);
}
function Qt(e) {
  (e.set(Mt, null), e.set(jt, `worktree-branch-setup`));
}
function $t(e) {
  let t = e.get(Mt) ?? `commit`;
  (e.set(Mt, null), e.set(jt, t));
}
function en(e, t) {
  return {
    cwd: e.cwd,
    headBranch: t,
    hostId: e.hostConfig.id,
    operationSource: `local_conversation_git_actions`,
  };
}
function tn(
  e,
  { branch: t, cwd: n, hostConfig: r, operationSource: i, refetchPullRequestStatus: a },
) {
  if ((qe(e, { cwd: n, hostConfig: r, operationSource: i }), a != null)) {
    a();
    return;
  }
  t != null &&
    e.queryClient.invalidateQueries({
      queryKey: j(`gh-pr-status`, { cwd: n, headBranch: t, hostId: r.id }),
    });
}
var nn = `Testing note: If you mention tests, include unit tests or UI testing frameworks only. Skip lint/tsc since CI runs those.`,
  rn = `Untracked changes are not included.`;
function an({
  commitInstructions: e,
  diffError: t = null,
  draftMessage: n,
  oversizedDiffSummary: r = null,
  uncommittedDiff: i,
}) {
  let a = [],
    o = n.trim();
  o.length > 0 && a.push(`Draft message:\n${o}`);
  let s = on({ diffError: t, oversizedDiffSummary: r, uncommittedDiff: i });
  (s != null && a.push(s), a.length > 0 && a.push(nn));
  let c = e?.trim() ?? ``;
  return (
    c.length > 0 &&
      a.push(
        `Custom commit instructions (apply these to the commit message text only; do not change the required output format):\n${c}`,
      ),
    a.length === 0
      ? `Use the current thread context to infer the commit message.`
      : a.join(`

`)
  );
}
function on({ diffError: e, oversizedDiffSummary: t, uncommittedDiff: n }) {
  if (t != null)
    return [
      `Changes:`,
      `Diff too large to include inline.`,
      `Summary: ${t.filesChanged} changed files, +${t.linesAdded}/-${t.linesRemoved} lines.`,
      ``,
      rn,
    ].join(`
`);
  if (e?.type === `diff-too-large`)
    return [`Changes:`, `Diff too large to include inline.`, ``, rn].join(`
`);
  if (!n || n.trim().length === 0) return null;
  let r = [`Changes:`];
  return (
    r.push(n),
    r.push(rn),
    r.join(`
`)
  );
}
function sn(e) {
  return !e || e.type !== `success` ? null : e.unifiedDiff;
}
function cn(e) {
  if (e == null || e.trim().length === 0) return null;
  let t = 0,
    n = 0,
    r = 0,
    i = !1;
  for (let a of e.split(/\r?\n/)) {
    if (a.startsWith(`diff --git `)) {
      ((t += 1), (i = !1));
      continue;
    }
    if (a.startsWith(`@@`)) {
      i = !0;
      continue;
    }
    if (i) {
      if (a.startsWith(`+`)) {
        n += 1;
        continue;
      }
      a.startsWith(`-`) && (r += 1);
    }
  }
  return { filesChanged: t, linesAdded: n, linesRemoved: r };
}
var ln = 1e3,
  un = 100;
function dn({
  pullRequestInstructions: e,
  uncommittedDiff: t,
  filePaths: n,
  baseBranch: r,
  headBranch: i,
}) {
  let a = [];
  (r || i) &&
    a.push(
      [`Branches:`, `- Head: ${i ?? `-`}`, `- Base: ${r ?? `-`}`].join(`
`),
    );
  let o = e?.trim() ?? ``;
  return (
    o.length > 0 &&
      a.push(`Pull request instructions (apply these to the title/body content only):\n${hn(o)}`),
    a.push(fn({ uncommittedDiff: t, filePaths: n })),
    a.join(`

`)
  );
}
function fn({ uncommittedDiff: e, filePaths: t }) {
  let n = e?.trim() ?? ``,
    r = (n.length > 0 ? pn(n) : 0) > ln,
    i = [`Changes:`];
  return n.length === 0 || r
    ? (i.push(mn(t)),
      i.join(`
`))
    : (i.push(n),
      i.join(`
`));
}
function pn(e) {
  return e.split(/\r?\n/).length;
}
function mn(e) {
  if (e.length === 0) return `- (no files listed)`;
  let t = e.slice(0, un),
    n = e.length - t.length,
    r = t.map((e) => `- ${e}`);
  return (
    n > 0 && r.push(`\u2026and ${n} more`),
    r.join(`
`)
  );
}
function hn(e) {
  let t = e.match(/```/g);
  return t == null || t.length % 2 == 0 ? e : `${e}\n\`\`\``;
}
var gn = 80;
function _n({ conversationId: e, tokenUsageInfo: t }) {
  if (e == null) return null;
  let { percent: n } = Ie(t);
  return n == null || n < gn ? e : null;
}
function vn(e) {
  let t = (0, W.c)(18),
    { command: n, output: r, message: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = r?.trim() ?? ``), (t[0] = r), (t[1] = a));
  let o = a,
    s;
  t[2] === i ? (s = t[3]) : ((s = i?.trim() ?? ``), (t[2] = i), (t[3] = s));
  let c = s,
    l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = `$`), (t[4] = l)) : (l = t[4]);
  let u = l,
    d = n != null && n.length > 0,
    f = o.length > 0,
    p = c.length > 0 && c !== o;
  if (!d && !f && !p) return null;
  let m;
  t[5] !== n || t[6] !== d
    ? ((m = d
        ? (0, U.jsxs)(`div`, {
            className: `font-vscode-editor text-size-code-sm flex items-start gap-1.5 leading-5 text-token-description-foreground`,
            children: [
              (0, U.jsx)(`span`, {
                className: `shrink-0 select-none`,
                "aria-hidden": `true`,
                children: u,
              }),
              (0, U.jsx)(`pre`, { className: `m-0 whitespace-pre-wrap`, children: n }),
            ],
          })
        : null),
      (t[5] = n),
      (t[6] = d),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== f || t[9] !== o
    ? ((h = f
        ? (0, U.jsx)(`div`, {
            className: `max-h-20 overflow-auto`,
            children: (0, U.jsx)(`pre`, {
              className: `font-vscode-editor text-size-code-sm m-0 whitespace-pre-wrap text-token-terminal-foreground`,
              children: o,
            }),
          })
        : null),
      (t[8] = f),
      (t[9] = o),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== p || t[12] !== c
    ? ((g = p
        ? (0, U.jsx)(`div`, {
            className: `text-size-chat-sm text-token-input-validation-error-foreground/85`,
            children: c,
          })
        : null),
      (t[11] = p),
      (t[12] = c),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== m || t[15] !== h || t[16] !== g
      ? ((_ = (0, U.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-token-terminal-border bg-token-terminal-background px-2.5 py-1.5 pr-8`,
          children: [m, h, g],
        })),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function yn(e) {
  let t = (0, W.c)(35),
    { title: n, message: r, execOutput: i, actions: a, onClose: o } = e,
    s = ne(),
    c;
  t[0] === i?.output ? (c = t[1]) : ((c = i?.output?.trim() ?? ``), (t[0] = i?.output), (t[1] = c));
  let l = c,
    u;
  t[2] === r ? (u = t[3]) : ((u = r?.trim() ?? ``), (t[2] = r), (t[3] = u));
  let d = u,
    f = i?.command != null && i.command.length > 0 ? `$ ${i.command}` : null,
    p = l.length > 0 ? l : null,
    m = d.length > 0 && d !== l ? d : null,
    h;
  t[4] !== f || t[5] !== p || t[6] !== m
    ? ((h = [f, p, m].filter(bn)), (t[4] = f), (t[5] = p), (t[6] = m), (t[7] = h))
    : (h = t[7]);
  let g = h.join(`
`),
    _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, U.jsx)(`span`, {
        className: `h-2 w-2 shrink-0 rounded-full bg-token-input-validation-error-border`,
        "aria-hidden": `true`,
      })),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === n
    ? (v = t[10])
    : ((v = (0, U.jsx)(`div`, {
        className: `text-size-chat-sm min-w-0 flex-1 font-medium text-token-foreground`,
        children: n,
      })),
      (t[9] = n),
      (t[10] = v));
  let y;
  t[11] !== s || t[12] !== o
    ? ((y = o
        ? (0, U.jsx)(`button`, {
            type: `button`,
            onClick: o,
            className: `flex shrink-0 cursor-interaction rounded-full opacity-50 transition-opacity hover:bg-token-button-secondary-hover-background/5 hover:opacity-80`,
            "aria-label": s.formatMessage({
              id: `codex.alert.closeAriaLabel`,
              defaultMessage: `Close`,
              description: `Aria label for the close button on an alert/toast component`,
            }),
            children: (0, U.jsx)(I, { className: `icon-xs` }),
          })
        : null),
      (t[11] = s),
      (t[12] = o),
      (t[13] = y))
    : (y = t[13]);
  let ee;
  t[14] !== v || t[15] !== y
    ? ((ee = (0, U.jsxs)(`div`, {
        className: `flex items-center gap-2.5 px-3 py-2.5`,
        children: [_, v, y],
      })),
      (t[14] = v),
      (t[15] = y),
      (t[16] = ee))
    : (ee = t[16]);
  let b = i?.command,
    te = i?.output,
    x;
  t[17] !== r || t[18] !== b || t[19] !== te
    ? ((x = (0, U.jsx)(vn, { command: b, output: te, message: r })),
      (t[17] = r),
      (t[18] = b),
      (t[19] = te),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== g || t[22] !== s
    ? ((S =
        g.length > 0
          ? (0, U.jsx)(`button`, {
              type: `button`,
              className: `absolute top-1 right-1 flex h-6 w-6 cursor-interaction items-center justify-center rounded-md text-token-description-foreground opacity-80 hover:bg-token-list-hover-background hover:opacity-100`,
              "aria-label": s.formatMessage({
                id: `codex.terminalToast.copyError`,
                defaultMessage: `Copy error`,
                description: `Aria label for copying terminal error content from a toast`,
              }),
              onClick: (e) => {
                xe(g, e);
              },
              children: (0, U.jsx)(ke, { className: `icon-2xs` }),
            })
          : null),
      (t[21] = g),
      (t[22] = s),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== x || t[25] !== S
    ? ((C = (0, U.jsxs)(`div`, { className: `relative`, children: [x, S] })),
      (t[24] = x),
      (t[25] = S),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] === a
    ? (w = t[28])
    : ((w = a
        ? (0, U.jsx)(`div`, { className: `mt-2 flex items-center justify-end gap-2`, children: a })
        : null),
      (t[27] = a),
      (t[28] = w));
  let T;
  t[29] !== C || t[30] !== w
    ? ((T = (0, U.jsxs)(`div`, {
        className: `border-t border-token-border/60 px-3 pt-2 pb-2.5`,
        children: [C, w],
      })),
      (t[29] = C),
      (t[30] = w),
      (t[31] = T))
    : (T = t[31]);
  let E;
  return (
    t[32] !== ee || t[33] !== T
      ? ((E = (0, U.jsxs)(`div`, {
          className: `pointer-events-auto w-[min(390px,calc(100vw-32px))] overflow-hidden rounded-xl border border-token-border bg-token-dropdown-background text-start shadow-lg`,
          children: [ee, T],
        })),
        (t[32] = ee),
        (t[33] = T),
        (t[34] = E))
      : (E = t[34]),
    E
  );
}
function bn(e) {
  return e != null;
}
var xn = 7,
  Q = re({
    commitErrorTitle: {
      id: `review.commit.error`,
      defaultMessage: `Failed to commit changes`,
      description: `Toast shown when a commit fails`,
    },
    commitSuccess: {
      id: `review.commit.successToast`,
      defaultMessage: `Committed to {branch}`,
      description: `Toast shown when a commit succeeds`,
    },
    commitMessageEmpty: {
      id: `review.commit.generate.emptyResponse`,
      defaultMessage: `Couldn't generate a commit message`,
      description: `Toast shown when commit message generation returns no result`,
    },
    createBranchErrorTitle: {
      id: `review.commit.createBranchError`,
      defaultMessage: `Failed to create branch`,
      description: `Title for the error toast shown when creating a branch from a git action modal fails`,
    },
    checkoutBranchErrorTitle: {
      id: `review.commit.checkoutBranchError`,
      defaultMessage: `Failed to check out branch`,
      description: `Title for the error toast shown when checking out a branch from a git action modal fails`,
    },
    forcePushErrorTitle: {
      id: `localConversationPage.forcePushError`,
      defaultMessage: `Failed to force push`,
      description: `Error message when force push fails`,
    },
    pushErrorTitle: {
      id: `localConversationPage.pushError`,
      defaultMessage: `Failed to push changes`,
      description: `Error message when git push fails`,
    },
    createPullRequestErrorTitle: {
      id: `localConversationPage.createPullRequestError`,
      defaultMessage: `Failed to create pull request`,
      description: `Error message when creating a pull request fails`,
    },
    pullRequestGenerationError: {
      id: `localConversationPage.generatePullRequestMessageError`,
      defaultMessage: `Failed to generate pull request title and body`,
      description: `Error message shown when pull request generation fails in commit modal`,
    },
    pushSuccess: {
      id: `localConversationPage.commitAndPushToast`,
      defaultMessage: `Pushed {branch}`,
      description: `Toast shown when commit and push succeeds`,
    },
    unknownBranch: {
      id: `localConversationPage.gitAction.unknownBranch`,
      defaultMessage: `your branch`,
      description: `Fallback branch name for git action success toasts`,
    },
    committing: {
      id: `review.commit.disabled.committing`,
      defaultMessage: `Committing…`,
      description: `Tooltip shown on the commit button while committing`,
    },
    creatingBranch: {
      id: `localConversation.gitActions.creatingBranch`,
      defaultMessage: `Creating branch…`,
      description: `Label for a git action while creating a branch`,
    },
    creatingPullRequest: {
      id: `localConversationPage.createPullRequestButtonLabel.loading`,
      defaultMessage: `Creating PR…`,
      description: `Label for create pull request action while it is running`,
    },
    pushing: {
      id: `localConversationPage.pushButtonLabel.loading`,
      defaultMessage: `Pushing changes…`,
      description: `Label for git push action while a push is running`,
    },
  });
function $({ toaster: e, title: t, message: n, execOutput: r }) {
  e.custom({
    duration: xn,
    content: ({ close: e }) => (0, U.jsx)(yn, { title: t, message: n, execOutput: r, onClose: e }),
  });
}
function Sn(e, t) {
  let n = t?.trim() ?? ``;
  return n.length > 0 ? n : e.formatMessage(Q.unknownBranch);
}
function Cn(e) {
  switch (e) {
    case `committing`:
    case `generating-commit-message`:
      return Q.committing;
    case `creating-branch`:
      return Q.creatingBranch;
    case `creating-pr`:
    case `generating-pr-message`:
      return Q.creatingPullRequest;
    case `pushing`:
      return Q.pushing;
  }
}
var wn = 1e3,
  Tn = `local_conversation_git_actions`,
  En = y(O, (e, { get: t, scope: n }) => {
    let r = { cwd: e.cwd, hostId: e.hostConfig.id },
      i = _n({ conversationId: e.conversationId, tokenUsageInfo: t(a, e.conversationId) }),
      o = t(R),
      s = t(P);
    return {
      mutationKey: [`vscode`, `generate-commit-message`, e.cwd, e.hostConfig.id, i],
      mutationFn: async ({ signal: t } = {}) => {
        let a = n.get(q, r);
        if (a?.phase === `generating-commit-message`) return null;
        let c = n.get(J, r),
          l = a == null || a.workflow === `commit`;
        l && n.set(q, r, { workflow: `commit`, phase: `generating-commit-message` });
        let u;
        try {
          u = await A(`generate-commit-message`, {
            params: {
              hostId: e.hostConfig.id,
              prompt: await An(n, e, c, t),
              cwd: e.cwd,
              conversationId: i,
            },
            signal: t,
          });
        } catch (e) {
          return (
            t?.aborted ||
              s.danger(
                o.formatMessage(
                  {
                    id: `review.commit.generate.failed`,
                    defaultMessage: `Failed to generate commit message: {error}`,
                    description: `Toast shown when commit message generation fails`,
                  },
                  { error: e instanceof Error ? e.message : String(e) },
                ),
              ),
            null
          );
        } finally {
          l && n.get(q, r)?.phase === `generating-commit-message` && n.set(q, r, a);
        }
        let d = u.message?.trim() ?? ``;
        return t?.aborted
          ? null
          : d.length === 0
            ? (s.danger(o.formatMessage(Q.commitMessageEmpty)), null)
            : (jn(n, r, c, d), d);
      },
    };
  }),
  Dn = y(O, (e, { get: t, scope: n }) => {
    let r = { cwd: e.cwd, hostId: e.hostConfig.id },
      i = _n({ conversationId: e.conversationId, tokenUsageInfo: t(a, e.conversationId) }),
      o = t(R),
      s = t(P);
    return {
      mutationKey: [`vscode`, `generate-commit-pull-request-message`, e.cwd, e.hostConfig.id, i],
      mutationFn: async ({ headBranch: t, signal: a } = {}) => {
        let c = n.get(J, r),
          l = n.get(Y, r).trim(),
          u = n.get(X, r).trim(),
          d = c.trim();
        if (d.length > 0 && l.length > 0 && u.length > 0) return { body: u, message: d, title: l };
        let f;
        try {
          let [r, o] = await Promise.all([An(n, e, c, a), kn(n, e, { headBranch: t, signal: a })]);
          if (o.trim().length === 0) return null;
          f = await A(`generate-commit-pull-request-message`, {
            params: {
              hostId: e.hostConfig.id,
              prompt: [`Commit message context:`, r, ``, `Pull request context:`, o].join(`
`),
              cwd: e.cwd,
              conversationId: i,
            },
            signal: a,
          });
        } catch (e) {
          return (
            a?.aborted ||
              s.danger(
                o.formatMessage(
                  {
                    id: `review.commitPullRequest.generate.failed`,
                    defaultMessage: `Failed to generate commit and pull request messages: {error}`,
                    description: `Toast shown when combined commit and pull request message generation fails`,
                  },
                  { error: e instanceof Error ? e.message : String(e) },
                ),
              ),
            null
          );
        }
        let p = d || f.message?.trim() || ``,
          m = l || f.title?.trim() || ``,
          h = u || f.body?.trim() || ``;
        return a?.aborted
          ? null
          : p.length === 0 || m.length === 0 || h.length === 0
            ? (s.danger(
                o.formatMessage({
                  id: `review.commitPullRequest.generate.emptyResponse`,
                  defaultMessage: `Couldn't generate commit and pull request messages`,
                  description: `Toast shown when combined commit and pull request message generation returns no result`,
                }),
              ),
              null)
            : (jn(n, r, c, p),
              l.length === 0 && n.set(Y, r, (e) => (e.trim().length === 0 ? m : e)),
              u.length === 0 && n.set(X, r, (e) => (e.trim().length === 0 ? h : e)),
              { body: h, message: p, title: m });
      },
    };
  }),
  On = y(O, (e, { get: t, scope: n }) => {
    let r = _n({ conversationId: e.conversationId, tokenUsageInfo: t(a, e.conversationId) }),
      i = t(R),
      o = t(P);
    return {
      mutationKey: [`vscode`, `generate-pull-request-message`, e.cwd, e.hostConfig.id, r],
      mutationFn: async ({ body: t, headBranch: a, signal: s, title: c }) => {
        let l = t.trim(),
          u = c.trim();
        if (l.length > 0 && u.length > 0) return { body: l, title: u };
        let d;
        try {
          let t = (await kn(n, e, { headBranch: a, signal: s })).trim();
          if (s?.aborted) return null;
          if (t.length === 0)
            return (o.danger(i.formatMessage(Q.pullRequestGenerationError)), null);
          d = await A(`generate-pull-request-message`, {
            params: { hostId: e.hostConfig.id, prompt: t, cwd: e.cwd, conversationId: r },
            signal: s,
          });
        } catch {
          return (s?.aborted || o.danger(i.formatMessage(Q.pullRequestGenerationError)), null);
        }
        let f = l || d.body?.trim() || ``,
          p = u || d.title?.trim() || ``;
        return s?.aborted
          ? null
          : f.length > 0 && p.length > 0
            ? { body: f, title: p }
            : (o.danger(i.formatMessage(Q.pullRequestGenerationError)), null);
      },
    };
  });
async function kn(e, t, { headBranch: r, signal: i } = {}) {
  let [a, o, s] = await Promise.all([
      d(`git`).request({
        method: `review-patch`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Tn, source: `branch` },
        signal: i,
      }),
      d(`git`).request({
        method: `branch-metadata`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Tn },
        signal: i,
      }),
      d(`git`).request({
        method: `review-summary`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Tn, source: `branch` },
        signal: i,
      }),
    ]),
    c = e.get(H, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Tn }),
    l = c.type === `success` ? c.data : void 0;
  return dn({
    pullRequestInstructions: ge(e.get, n.pullRequestInstructions) ?? null,
    uncommittedDiff: a.diff.type === `success` ? a.diff.unifiedDiff : null,
    filePaths: s.type === `success` ? s.files.map((e) => e.path) : [],
    baseBranch: o.baseBranch ?? l?.defaultBranch ?? null,
    headBranch: r ?? o.branch ?? l?.branch ?? null,
  });
}
async function An(e, t, r, i) {
  let a = e.get(Ct),
    o = await d(`git`).request({
      method: `commit-message-diff`,
      params: { cwd: t.cwd, hostConfig: t.hostConfig, includeUnstaged: a, operationSource: Tn },
      signal: i,
    }),
    s = sn(o),
    c = o.type === `error` ? o.error : null,
    l = cn(s),
    u = l?.linesAdded ?? 0,
    f = l?.linesRemoved ?? 0,
    p = u + f > wn ? { filesChanged: l?.filesChanged ?? 0, linesAdded: u, linesRemoved: f } : null;
  return an({
    commitInstructions: ge(e.get, n.commitInstructions) ?? null,
    diffError: c,
    draftMessage: r,
    oversizedDiffSummary: p,
    uncommittedDiff: p == null ? s : null,
  });
}
function jn(e, t, n, r) {
  let i = e.get(J, t);
  (i.trim().length === 0 || i === n) && e.set(J, t, r);
}
function Mn(e, t, n, r, i) {
  if (!t) return;
  let a = s({
    metadata: t,
    method: `branch-ahead-count`,
    params: { operationSource: r, root: t.root },
    hostKey: n,
  });
  (e.setQueryData(a, (e) => e && { ...e, commitsAhead: i(e.commitsAhead) }),
    e.invalidateQueries({ queryKey: a }));
}
function Nn(e, t, n, r) {
  Mn(e, t, n, r, (e) => e + 1);
}
function Pn(e, t, n, r) {
  Mn(e, t, n, r, () => 0);
}
var Fn = y(
    O,
    (e, { queryClient: t, scope: n }) => {
      let r = h(e.hostConfig);
      return {
        mutationKey: [`git`, `commit`, e.cwd],
        mutationFn: (t) =>
          d(`git`).request({
            method: `commit`,
            signal: t.signal,
            params: {
              cwd: e.cwd,
              hostConfig: e.hostConfig,
              message: t.message,
              includeUnstaged: n.get(Ct),
              commitAttribution: t.commitAttribution,
              operationSource: t.operationSource,
            },
          }),
        onSuccess: async (i, a) => {
          if (i.status !== `success`) return;
          oe(n, { eventName: `codex_git_commit_succeeded` });
          let s = t.getQueryData(l(e.cwd, r, e.hostConfig, a.operationSource).queryKey);
          (Nn(t, s, r, a.operationSource),
            be(),
            n.set(J, { cwd: e.cwd, hostId: e.hostConfig.id }, ``),
            s != null && (await t.invalidateQueries({ queryKey: o(s.commonDir, s.root, r) })));
        },
      };
    },
    { excludeFieldsFromKey: [`operationSource`] },
  ),
  In = y(
    O,
    (e, { scope: t }) => ({
      mutationKey: [`vscode`, `gh-pr-create`, e.cwd, e.hostId],
      mutationFn: (t) =>
        A(`gh-pr-create`, {
          params: {
            cwd: t.cwd,
            headBranch: t.headBranch,
            baseBranch: t.baseBranch,
            hostId: e.hostId,
            isDraft: t.isDraft,
            openInBrowser: t.openInBrowser,
            titleOverride: t.titleOverride,
            bodyOverride: t.bodyOverride,
          },
          signal: t.signal,
          source: t.operationSource,
        }),
      onSuccess: async (n, r) => {
        if (n.status !== `success`) {
          je(t, e.hostId);
          return;
        }
        if (r.openInBrowser === !0) return;
        oe(t, { eventName: `codex_git_create_pr_succeeded` });
        let i = t.query.snapshot(V, {
          cwd: r.cwd,
          headBranch: r.headBranch,
          hostId: e.hostId,
          operationSource: r.operationSource,
        });
        (await i.cancel(),
          i.setData({
            activityItems: [],
            boardItem: null,
            body: r.bodyOverride?.trim() || ``,
            canMerge: !1,
            checks: [],
            ciStatus: `pending`,
            commentAttachments: [],
            hasOpenPr: !0,
            isDraft: r.isDraft ?? !1,
            mergeBlocker: `unknown`,
            number: n.number,
            repo: null,
            reviewers: {
              approved: [],
              commentCounts: [],
              commented: [],
              changesRequested: [],
              requested: [],
              unresolvedCommentCount: 0,
            },
            reviewStatus: `none`,
            status: `success`,
            title: r.titleOverride?.trim() || null,
            url: n.url,
          }),
          r.conversationId != null &&
            r.headBranch.trim().length > 0 &&
            m(r.conversationId, r.headBranch));
      },
      onSettled: (n, r, i) => {
        i.signal?.aborted &&
          i.openInBrowser !== !0 &&
          t.queryClient.invalidateQueries({
            queryKey: j(`gh-pr-status`, { cwd: i.cwd, headBranch: i.headBranch, hostId: e.hostId }),
          });
      },
      networkMode: `always`,
    }),
    { excludeFieldsFromKey: [`operationSource`] },
  ),
  Ln = y(
    O,
    (e, { queryClient: t, scope: n }) => {
      let r = h(e.hostConfig);
      return {
        mutationKey: [`vscode`, `git-push`, e.cwd, e.hostConfig.id],
        mutationFn: (t) =>
          A(`git-push`, {
            params: {
              cwd: t.cwd,
              force: t.force,
              hostId: e.hostConfig.id,
              refspec: t.refspec,
              setUpstream: t.setUpstream,
            },
            signal: t.signal,
            source: t.operationSource,
          }),
        onSuccess: (i, a) => {
          i.status === `success` &&
            (oe(n, { eventName: `codex_git_push_succeeded`, metadata: { forced: a.force ?? !1 } }),
            a.analyticsAttribution != null &&
              n
                .get(ce)
                .submitCodexAnalyticsEvent?.({
                  ...a.analyticsAttribution,
                  action: `push`,
                  eventKind: `action`,
                  metadata: { forced: a.force ?? !1 },
                }),
            Pn(
              t,
              t.getQueryData(l(e.cwd, r, e.hostConfig, a.operationSource).queryKey),
              r,
              a.operationSource,
            ));
        },
        networkMode: `always`,
      };
    },
    { excludeFieldsFromKey: [`operationSource`] },
  ),
  Rn = y(O, (e, { queryClient: t }) => {
    let n = h(e.hostConfig);
    return {
      mutationKey: [
        `vscode`,
        `git-create-and-checkout-branch`,
        e.cwd,
        e.hostConfig.id,
        e.operationSource,
      ],
      mutationFn: async ({ signal: t, ...n }) => {
        let r = await A(`git-create-branch`, {
          params: { ...n, cwd: e.cwd, hostId: e.hostConfig.id },
          signal: t,
          source: e.operationSource,
        });
        if (r.status === `error`)
          return { status: `create-error`, error: r.error, execOutput: r.execOutput };
        let i = await A(`git-checkout-branch`, {
          params: { branch: n.branch, cwd: e.cwd, hostId: e.hostConfig.id },
          signal: t,
          source: e.operationSource,
        });
        return i.status === `error`
          ? {
              status: `checkout-error`,
              error: i.error,
              errorType: i.errorType,
              conflictedPaths: i.conflictedPaths,
              execOutput: i.execOutput,
            }
          : { status: `success`, branch: i.branch };
      },
      onSettled: (r, i, a) => {
        let o = t.getQueryData(l(e.cwd, n, e.hostConfig, e.operationSource).queryKey);
        o != null &&
          (c(t, o, { changeType: a.mode === `synced` ? `synced-branch` : `head`, hostKey: n }),
          r?.status === `success` &&
            a.mode === `synced` &&
            c(t, o, { changeType: `head`, hostKey: n }));
      },
      networkMode: `always`,
    };
  });
async function zn({
  scope: e,
  conversationId: t,
  cwd: n,
  hostConfig: r,
  operationSource: i,
  branch: a,
  mode: o,
  signal: s,
}) {
  if (s?.aborted) return !1;
  let c = e.get(P),
    l = e.get(R),
    u = l.formatMessage(Q.createBranchErrorTitle);
  try {
    let d = await e
      .get(Rn, { cwd: n, hostConfig: r, operationSource: i })
      .mutateAsync({ branch: a, failIfExists: !0, mode: o, signal: s });
    switch (d.status) {
      case `success`:
        return (t != null && m(t, a), !s?.aborted);
      case `create-error`:
        return (
          s?.aborted ||
            $({
              toaster: c,
              title: u,
              message: d.execOutput == null ? d.error : null,
              execOutput: d.execOutput,
            }),
          !1
        );
      case `checkout-error`:
        return (
          s?.aborted ||
            $({
              toaster: c,
              title: l.formatMessage(Q.checkoutBranchErrorTitle),
              message: d.execOutput == null ? d.error : null,
              execOutput: d.execOutput,
            }),
          !1
        );
    }
  } catch {
    return (s?.aborted || $({ toaster: c, title: u, message: u }), !1);
  }
}
async function Bn({
  scope: e,
  cwd: t,
  hostConfig: n,
  resolveCommitMessage: r,
  commitAttribution: i,
  operationSource: a,
  allowNothingToCommit: o = !1,
  signal: s,
}) {
  if (s?.aborted) return !1;
  let c = e.get(P),
    l = e.get(R),
    u = await r();
  if (s?.aborted || u == null) return !1;
  let d = u.trim();
  if (d.length === 0) return (c.danger(l.formatMessage(Q.commitMessageEmpty)), !1);
  try {
    let r = await e
      .get(Fn, { cwd: t, hostConfig: n, operationSource: a })
      .mutateAsync({ message: d, commitAttribution: i, operationSource: a, signal: s });
    if (s?.aborted) return !1;
    if (r.status === `error`)
      return o && r.errorType === `nothing-to-commit`
        ? !0
        : ($({
            toaster: c,
            title: l.formatMessage(Q.commitErrorTitle),
            message: r.execOutput == null ? r.error : null,
            execOutput: r.execOutput,
          }),
          !1);
  } catch {
    return (
      s?.aborted || $({ toaster: c, title: l.formatMessage(Q.commitErrorTitle), message: null }), !1
    );
  }
  return !0;
}
async function Vn({
  scope: e,
  cwd: t,
  hostConfig: n,
  pushStatus: r,
  analyticsAttribution: i,
  operationSource: a,
  forcePush: o = !1,
  signal: s,
}) {
  if (s?.aborted) return !1;
  let c = e.get(P),
    l = e.get(R),
    u = l.formatMessage(o ? Q.forcePushErrorTitle : Q.pushErrorTitle);
  if (r == null) return ($({ toaster: c, title: u, message: null }), !1);
  let d = { cwd: t, force: o };
  !r.upstreamRef && r.branch && ((d.refspec = `HEAD:refs/heads/${r.branch}`), (d.setUpstream = !0));
  try {
    let r = await e
      .get(Ln, { cwd: t, hostConfig: n, operationSource: a })
      .mutateAsync({ ...d, analyticsAttribution: i, operationSource: a, signal: s });
    if (r.status === `error`)
      return (
        s?.aborted ||
          $({
            toaster: c,
            title: u,
            message: r.execOutput == null ? l.formatMessage(Q.pushErrorTitle) : null,
            execOutput: r.execOutput,
          }),
        !1
      );
  } catch {
    return (s?.aborted || $({ toaster: c, title: u, message: null }), !1);
  }
  return !0;
}
async function Hn({
  scope: e,
  conversationId: t,
  cwd: n,
  hostConfig: r,
  pushStatus: i,
  createPullRequestAsDraft: a,
  operationSource: o,
  openInBrowser: s = !1,
  title: c,
  body: l,
  signal: u,
}) {
  if (u?.aborted) return null;
  let d = e.get(P),
    f = e.get(R);
  if (i?.branch == null || i.defaultBranch == null)
    return (
      $({ toaster: d, title: f.formatMessage(Q.createPullRequestErrorTitle), message: null }), null
    );
  try {
    let p = await e
      .get(In, { cwd: n, hostId: r.id, operationSource: o })
      .mutateAsync({
        cwd: n,
        headBranch: i.branch,
        baseBranch: i.defaultBranch,
        isDraft: a,
        openInBrowser: s,
        titleOverride: c,
        bodyOverride: l,
        conversationId: t,
        operationSource: o,
        signal: u,
      });
    return u?.aborted
      ? null
      : p.status === `success`
        ? (s &&
            p.url != null &&
            D.dispatchMessage(`open-in-browser`, { url: p.url, useExternalBrowser: !0 }),
          { url: p.url })
        : ($({
            toaster: d,
            title: f.formatMessage(Q.createPullRequestErrorTitle),
            message: p.execOutput == null ? p.error : null,
            execOutput: p.execOutput,
          }),
          null);
  } catch {
    return (
      u?.aborted ||
        $({ toaster: d, title: f.formatMessage(Q.createPullRequestErrorTitle), message: null }),
      null
    );
  }
}
function Un(e) {
  if (t(e, `codex_git_commit`) !== !0) return null;
  let n = e?.commit_attribution;
  if (n == null) return n;
  if (typeof n != `string`) return;
  let r = n.trim();
  return r.length > 0 ? r : null;
}
async function Wn(e, t, n) {
  let r = { cwd: t.cwd, hostId: t.hostConfig.id };
  if (e.get(q, r) != null) return !1;
  let i = Et(r);
  e.set(q, r, {
    workflow: `commit`,
    phase:
      n.newBranch == null ? (n.nextStep === `push` ? `pushing` : `committing`) : `creating-branch`,
  });
  try {
    let a = e.get(H, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
      o = a.type === `success` ? a.data : void 0,
      s = n.newBranch ?? o?.branch,
      c;
    if (
      n.newBranch != null &&
      n.nextStep !== `push` &&
      e.get(J, r).trim().length === 0 &&
      ((c = await e
        .get(En, { conversationId: t.conversationId, cwd: t.cwd, hostConfig: t.hostConfig })
        .mutateAsync({ signal: i })),
      c == null)
    )
      return !1;
    if (n.newBranch != null) {
      if (
        !(await zn({
          scope: e,
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
          branch: n.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
          signal: i,
        }))
      )
        return !1;
      await qe(e, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
    }
    if (n.nextStep !== `push`) {
      if (
        n.newBranch == null &&
        t.operationSource === `local_conversation_git_actions` &&
        t.conversationId != null &&
        e.get(Rt, t)
      ) {
        let n = e.get(Ft, t);
        n.length > 0 && m(t.conversationId, n);
      }
      if (
        (e.set(q, r, { workflow: `commit`, phase: `committing` }),
        !(await Bn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          resolveCommitMessage: async () => {
            if (c != null) return c;
            let n = e.get(J, r).trim();
            return n.length > 0
              ? n
              : e
                  .get(En, {
                    conversationId: t.conversationId,
                    cwd: t.cwd,
                    hostConfig: t.hostConfig,
                  })
                  .mutateAsync({ signal: i });
          },
          commitAttribution: Un(e.get(me, { cwd: t.cwd, hostId: t.hostConfig.id }).data),
          operationSource: t.operationSource,
          signal: i,
        })))
      )
        return !1;
    }
    if (n.nextStep !== `commit`) {
      e.set(q, r, { workflow: `commit`, phase: `pushing` });
      let n = e.get(H, {
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
        }),
        a = n.type === `success` ? n.data : void 0;
      if (
        ((s = a?.branch ?? s),
        !(await Vn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          pushStatus: a,
          analyticsAttribution: e.get(Le),
          operationSource: t.operationSource,
          signal: i,
        })) ||
          (tn(e, {
            branch: s,
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            operationSource: t.operationSource,
          }),
          i.aborted))
      )
        return !1;
    }
    let l = e.get(R);
    return (
      e
        .get(P)
        .success(
          l.formatMessage(n.nextStep === `commit` ? Q.commitSuccess : Q.pushSuccess, {
            branch: Sn(l, s),
          }),
        ),
      !0
    );
  } finally {
    (Ot(r, i), e.set(q, r, null));
  }
}
async function Gn(e, t, n) {
  let r = { cwd: t.cwd, hostId: t.hostConfig.id };
  if (e.get(q, r) != null) return !1;
  let i = Et(r);
  e.set(q, r, {
    workflow: `create-pr`,
    phase:
      n.nextStep === `commit-push-and-create-pr`
        ? `generating-commit-message`
        : `generating-pr-message`,
  });
  try {
    let a = e.get(wt, r);
    e.set(Ct, a);
    let o = e.get(H, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
      s = o.type === `success` ? o.data : void 0,
      c = n.newBranch ?? s?.branch,
      l = s,
      u =
        n.nextStep === `commit-push-and-create-pr`
          ? await e
              .get(Dn, { conversationId: t.conversationId, cwd: t.cwd, hostConfig: t.hostConfig })
              .mutateAsync({ headBranch: n.newBranch, signal: i })
          : null;
    if (n.nextStep === `commit-push-and-create-pr` && u == null) return !1;
    let d =
      u ??
      (await e
        .get(On, { conversationId: t.conversationId, cwd: t.cwd, hostConfig: t.hostConfig })
        .mutateAsync({
          body: e.get(X, r),
          headBranch: n.newBranch,
          signal: i,
          title: e.get(Y, r),
        }));
    if (d == null) return !1;
    if (n.newBranch != null) {
      if (
        (e.set(q, r, { workflow: `create-pr`, phase: `creating-branch` }),
        !(await zn({
          scope: e,
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
          branch: n.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
          signal: i,
        })))
      )
        return !1;
      await qe(e, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
    }
    if (n.nextStep === `commit-push-and-create-pr`) {
      if (n.newBranch == null && t.conversationId != null && e.get(Rt, t)) {
        let n = e.get(Ft, t);
        n.length > 0 && m(t.conversationId, n);
      }
      if (
        (e.set(q, r, { workflow: `create-pr`, phase: `committing` }),
        !(await Bn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          resolveCommitMessage: async () => u?.message ?? null,
          commitAttribution: Un(e.get(me, { cwd: t.cwd, hostId: t.hostConfig.id }).data),
          operationSource: t.operationSource,
          allowNothingToCommit: !0,
          signal: i,
        })))
      )
        return !1;
    }
    if (n.nextStep !== `create-pr`) {
      e.set(q, r, { workflow: `create-pr`, phase: `pushing` });
      let n = e.get(H, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
      if (
        ((l = n.type === `success` ? n.data : void 0),
        (c = l?.branch ?? c),
        !(await Vn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          pushStatus: l,
          analyticsAttribution: e.get(Le),
          operationSource: t.operationSource,
          signal: i,
        })) ||
          (tn(e, {
            branch: c,
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            operationSource: t.operationSource,
          }),
          i.aborted))
      )
        return !1;
    }
    e.set(q, r, { workflow: `create-pr`, phase: `creating-pr` });
    let f = await Hn({
      scope: e,
      conversationId: t.conversationId,
      cwd: t.cwd,
      hostConfig: t.hostConfig,
      pushStatus: l,
      createPullRequestAsDraft: n.createPullRequestAsDraft,
      operationSource: t.operationSource,
      openInBrowser: n.openInBrowser,
      title: d.title,
      body: d.body,
      signal: i,
    });
    return f == null || n.openInBrowser ? f != null : (Kn(e, c, f.url), !0);
  } finally {
    (Ot(r, i), e.set(q, r, null));
  }
}
function Kn(e, t, n) {
  e.get(P).success(
    (0, U.jsx)(N, {
      id: `localConversationPage.createPullRequestSuccessToast`,
      defaultMessage: `Created {prLabel} for {branch}`,
      description: `Toast shown when creating a pull request succeeds`,
      values: {
        branch: Sn(e.get(R), t),
        prLabel:
          n == null
            ? `PR`
            : (0, U.jsx)(`a`, {
                href: n,
                className: `cursor-interaction underline decoration-current decoration-[0.5px]`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                onClick: (e) => {
                  (e.preventDefault(), D.dispatchMessage(`open-in-browser`, { url: n }));
                },
                children: `PR`,
              }),
      },
    }),
  );
}
var qn = y(F, (e, { scope: t }) => ({
  mutationKey: [`local-git-workflow`, e.cwd, e.hostConfig.id],
  mutationFn: (n) => {
    switch (n.kind) {
      case `commit`:
        return Wn(t, e, n);
      case `create-pr`:
        return Gn(t, e, n);
    }
  },
  networkMode: `always`,
}));
function Jn(e) {
  let t = (0, W.c)(15),
    { branchAlreadyExists: n, disabled: r, placeholder: i, value: a, onChange: o } = e,
    s = ne(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `localConversationPage.gitActions.branchNameLabel`,
        defaultMessage: `Branch name`,
        description: `Accessible label for a new Git action branch field`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l = (e) => {
        o(e.target.value);
      }),
      (t[2] = o),
      (t[3] = l));
  let u;
  t[4] !== r || t[5] !== i || t[6] !== c || t[7] !== l || t[8] !== a
    ? ((u = (0, U.jsx)(`input`, {
        autoFocus: !0,
        className: `w-full bg-transparent text-token-input-foreground outline-none placeholder:text-token-description-foreground`,
        "aria-label": c,
        placeholder: i,
        value: a,
        disabled: r,
        onKeyDown: Yn,
        onChange: l,
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = l),
      (t[8] = a),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === n
    ? (d = t[11])
    : ((d = n
        ? (0, U.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, U.jsx)(N, {
              id: `localConversationPage.gitActions.branchExistsError`,
              defaultMessage: `Branch already exists`,
              description: `Validation message shown when a new Git action branch already exists`,
            }),
          })
        : null),
      (t[10] = n),
      (t[11] = d));
  let f;
  return (
    t[12] !== u || t[13] !== d
      ? ((f = (0, U.jsxs)(`div`, { className: `flex flex-col gap-1 px-3 pt-2`, children: [u, d] })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function Yn(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
function Xn(e) {
  let t = (0, W.c)(137),
    {
      open: r,
      onOpenChange: i,
      conversationId: a,
      cwd: o,
      hostConfig: s,
      codexWorktree: c,
      enablePushActions: l,
      operationSource: d,
      onStatusChange: f,
      onRequestReset: p,
    } = e,
    m = c === void 0 ? !1 : c,
    h = l === void 0 ? !1 : l,
    g = d === void 0 ? `commit_modal` : d,
    _ = ee(O),
    v = ne(),
    [y, b] = (0, Ye.useState)(null),
    [x, C] = (0, Ye.useState)(null),
    w;
  t[0] !== o || t[1] !== s.id
    ? ((w = { cwd: o, hostId: s.id }), (t[0] = o), (t[1] = s.id), (t[2] = w))
    : (w = t[2]);
  let T = w,
    E = he(n.branchPrefix),
    D = S(u, a),
    k = te(Ct),
    A = S(J, T),
    j = a ?? null,
    M;
  t[3] !== m || t[4] !== o || t[5] !== s || t[6] !== j
    ? ((M = { codexWorktree: m, conversationId: j, cwd: o, hostConfig: s }),
      (t[3] = m),
      (t[4] = o),
      (t[5] = s),
      (t[6] = j),
      (t[7] = M))
    : (M = t[7]);
  let re = M,
    ie = S(Ft, re),
    oe = S(zt, re),
    se;
  t[8] !== o || t[9] !== s
    ? ((se = { cwd: o, hostConfig: s }), (t[8] = o), (t[9] = s), (t[10] = se))
    : (se = t[10]);
  let ce = S(_t, se),
    le;
  t[11] !== o || t[12] !== s
    ? ((le = { cwd: o, hostConfig: s }), (t[11] = o), (t[12] = s), (t[13] = le))
    : (le = t[13]);
  let P = S(vt, le),
    de;
  t[14] !== g || t[15] !== re
    ? ((de = { ...re, operationSource: g }), (t[14] = g), (t[15] = re), (t[16] = de))
    : (de = t[16]);
  let fe = S(qn, de),
    F;
  t[17] !== o || t[18] !== s || t[19] !== g
    ? ((F = { cwd: o, hostConfig: s, operationSource: g }),
      (t[17] = o),
      (t[18] = s),
      (t[19] = g),
      (t[20] = F))
    : (F = t[20]);
  let pe = S(H, F),
    me = pe.type === `success` ? pe.data : void 0,
    ge = S(q, T),
    I = fe.isPending || ge != null,
    ve;
  t[21] !== o || t[22] !== s || t[23] !== k
    ? ((ve = { cwd: o, hostConfig: s, includeUnstaged: k }),
      (t[21] = o),
      (t[22] = s),
      (t[23] = k),
      (t[24] = ve))
    : (ve = t[24]);
  let L = S(ht, ve),
    ye;
  t[25] !== o || t[26] !== s || t[27] !== k
    ? ((ye = { cwd: o, hostConfig: s, includeUnstaged: k }),
      (t[25] = o),
      (t[26] = s),
      (t[27] = k),
      (t[28] = ye))
    : (ye = t[28]);
  let R = S(gt, ye),
    be;
  t[29] !== o || t[30] !== s
    ? ((be = { cwd: o, hostConfig: s, includeUnstaged: !0 }),
      (t[29] = o),
      (t[30] = s),
      (t[31] = be))
    : (be = t[31]);
  let xe = S(gt, be),
    Te = null;
  me && (Te = me.branch ?? me.upstreamRef ?? null);
  let ke;
  t[32] !== ie || t[33] !== Te || t[34] !== oe
    ? ((ke = !oe && ie?.trim() ? ie.trim() : oe ? null : Te),
      (t[32] = ie),
      (t[33] = Te),
      (t[34] = oe),
      (t[35] = ke))
    : (ke = t[35]);
  let je = ke,
    Me = h,
    B = Me && (y ?? oe),
    Pe;
  t[36] !== E || t[37] !== D
    ? ((Pe = Be({ branchPrefix: E, conversationTitle: D })), (t[36] = E), (t[37] = D), (t[38] = Pe))
    : (Pe = t[38]);
  let Ie = x ?? Pe,
    Le;
  t[39] === Ie ? (Le = t[40]) : ((Le = Ie.trim()), (t[39] = Ie), (t[40] = Le));
  let Re = Le,
    V = ue(Re, 200),
    ze;
  t[41] !== B || t[42] !== V || t[43] !== r
    ? ((ze = r && B && V.length > 0 && !V.endsWith(`/`)),
      (t[41] = B),
      (t[42] = V),
      (t[43] = r),
      (t[44] = ze))
    : (ze = t[44]);
  let He = ze,
    Ue;
  t[45] !== o || t[46] !== V || t[47] !== s || t[48] !== g || t[49] !== He
    ? ((Ue = { branch: V, cwd: o, enabled: He, hostConfig: s, operationSource: g }),
      (t[45] = o),
      (t[46] = V),
      (t[47] = s),
      (t[48] = g),
      (t[49] = He),
      (t[50] = Ue))
    : (Ue = t[50]);
  let { data: We } = S(Ve, Ue),
    Ge = V === Re && We === !0,
    Ke;
  t[51] !== Ge || t[52] !== B || t[53] !== Re
    ? ((Ke = B && (Re.length === 0 || Re.endsWith(`/`) || Ge)),
      (t[51] = Ge),
      (t[52] = B),
      (t[53] = Re),
      (t[54] = Ke))
    : (Ke = t[54]);
  let qe = Ke,
    Je = xe == null || xe === `changes-loading`,
    $e = R == null && !I && !qe,
    et = !I && !qe && (B ? (me?.commitsAhead ?? 0) > 0 : ce == null),
    tt = $e && (B || P == null),
    nt;
  t[55] !== h || t[56] !== v
    ? ((nt = h
        ? v.formatMessage({
            id: `review.commit.form.commitAndPushTitle`,
            defaultMessage: `Commit or push`,
            description: `Title for the commit modal when commit and push actions are available`,
          })
        : v.formatMessage({
            id: `review.commit.form.commitTitle`,
            defaultMessage: `Commit`,
            description: `Title for the commit modal when only commit is available`,
          })),
      (t[55] = h),
      (t[56] = v),
      (t[57] = nt))
    : (nt = t[57]);
  let rt = nt,
    it;
  t[58] !== R ||
  t[59] !== B ||
  t[60] !== qe ||
  t[61] !== I ||
  t[62] !== i ||
  t[63] !== p ||
  t[64] !== f ||
  t[65] !== Re ||
  t[66] !== fe
    ? ((it = (e) => {
        if (I || qe || (e !== `push` && R != null)) return;
        (i(!1), f?.(`loading`));
        let t = B
          ? { kind: `commit`, newBranch: Re, nextStep: e }
          : { kind: `commit`, nextStep: e };
        fe.mutate(t, {
          onSuccess: (e) => {
            f?.(e ? `success` : `error`);
          },
          onSettled: p,
        });
      }),
      (t[58] = R),
      (t[59] = B),
      (t[60] = qe),
      (t[61] = I),
      (t[62] = i),
      (t[63] = p),
      (t[64] = f),
      (t[65] = Re),
      (t[66] = fe),
      (t[67] = it))
    : (it = t[67]);
  let G = it,
    at;
  t[68] !== I || t[69] !== i || t[70] !== p
    ? ((at = (e) => {
        if (!e && !I) {
          p();
          return;
        }
        i(e);
      }),
      (t[68] = I),
      (t[69] = i),
      (t[70] = p),
      (t[71] = at))
    : (at = t[71]);
  let ot = at,
    st;
  t[72] === rt
    ? (st = t[73])
    : ((st = (0, U.jsx)(Se, { className: `sr-only`, children: rt })), (t[72] = rt), (t[73] = st));
  let ct;
  t[74] !== Me || t[75] !== Te || t[76] !== B || t[77] !== je || t[78] !== I
    ? ((ct = (0, U.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-token-description-foreground`,
        children: Me
          ? (0, U.jsxs)(De, {
              align: `start`,
              contentWidth: `xs`,
              disabled: I,
              triggerButton: (0, U.jsxs)(`button`, {
                type: `button`,
                className: `flex min-w-0 cursor-interaction items-center gap-2 text-token-description-foreground`,
                children: [
                  (0, U.jsx)(ae, { className: `icon-xs shrink-0` }),
                  (0, U.jsx)(`span`, {
                    className: `truncate`,
                    children: B
                      ? (0, U.jsx)(N, {
                          id: `review.commit.branchTarget.newBranch`,
                          defaultMessage: `New branch`,
                          description: `Label for selecting a new commit branch`,
                        })
                      : (je ??
                        (0, U.jsx)(N, {
                          id: `review.commit.form.commitTo.none`,
                          defaultMessage: `-`,
                          description: `Placeholder shown when no commit target is available`,
                        })),
                  }),
                  (0, U.jsx)(Oe, { className: `icon-2xs shrink-0` }),
                ],
              }),
              children: [
                (0, U.jsx)(z.SectionLabel, {
                  children: (0, U.jsx)(N, {
                    id: `review.commit.branchTarget.title`,
                    defaultMessage: `Commit to`,
                    description: `Heading for commit branch target options`,
                  }),
                }),
                je == null
                  ? null
                  : (0, U.jsx)(z.Item, {
                      LeftIcon: ae,
                      RightIcon: B ? void 0 : we,
                      onSelect: () => {
                        b(!1);
                      },
                      children: je,
                    }),
                (0, U.jsx)(z.Item, {
                  LeftIcon: Ae,
                  RightIcon: B ? we : void 0,
                  onSelect: () => {
                    b(!0);
                  },
                  children: (0, U.jsx)(N, {
                    id: `review.commit.branchTarget.newBranch`,
                    defaultMessage: `New branch`,
                    description: `Label for selecting a new commit branch`,
                  }),
                }),
              ],
            })
          : (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(ae, { className: `icon-xs shrink-0` }),
                (0, U.jsx)(`span`, {
                  className: `truncate`,
                  children:
                    Te ??
                    (0, U.jsx)(N, {
                      id: `review.commit.form.commitTo.none`,
                      defaultMessage: `-`,
                      description: `Placeholder shown when no commit target is available`,
                    }),
                }),
              ],
            }),
      })),
      (t[74] = Me),
      (t[75] = Te),
      (t[76] = B),
      (t[77] = je),
      (t[78] = I),
      (t[79] = ct))
    : (ct = t[79]);
  let lt;
  t[80] !== L || t[81] !== Je
    ? ((lt = Je
        ? (0, U.jsxs)(`span`, {
            className: `flex shrink-0 items-center gap-2`,
            children: [
              (0, U.jsx)(`span`, {
                className: `inline-flex size-4 shrink-0 items-center justify-center`,
                children:
                  L.isLoading || L.isFetching
                    ? (0, U.jsx)(_e, { className: `icon-xs text-token-description-foreground` })
                    : null,
              }),
              (0, U.jsx)(Qn, {
                isLoading: L.isLoading,
                isUnavailable: L.isUnavailable,
                selectionSummary: L.selectionSummary,
              }),
            ],
          })
        : null),
      (t[80] = L),
      (t[81] = Je),
      (t[82] = lt))
    : (lt = t[82]);
  let ut;
  t[83] !== ct || t[84] !== lt
    ? ((ut = (0, U.jsxs)(`div`, {
        className: `flex h-9 items-center justify-between gap-3 px-3`,
        children: [ct, lt],
      })),
      (t[83] = ct),
      (t[84] = lt),
      (t[85] = ut))
    : (ut = t[85]);
  let dt;
  t[86] !== Ge || t[87] !== Ie || t[88] !== E || t[89] !== B || t[90] !== I
    ? ((dt = B
        ? (0, U.jsx)(Jn, {
            branchAlreadyExists: Ge,
            disabled: I,
            placeholder: E?.trim(),
            value: Ie,
            onChange: C,
          })
        : null),
      (t[86] = Ge),
      (t[87] = Ie),
      (t[88] = E),
      (t[89] = B),
      (t[90] = I),
      (t[91] = dt))
    : (dt = t[91]);
  let ft;
  t[92] !== B ||
  t[93] !== T ||
  t[94] !== k ||
  t[95] !== v ||
  t[96] !== I ||
  t[97] !== A ||
  t[98] !== _ ||
  t[99] !== Je
    ? ((ft = Je
        ? (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(`textarea`, {
                autoFocus: !B,
                rows: 3,
                className: `h-20 w-full resize-none bg-transparent px-3 py-2 text-token-input-foreground outline-none`,
                "aria-label": v.formatMessage({
                  id: `review.commit.messageLabel`,
                  defaultMessage: `Commit message`,
                  description: `Label for commit message textarea`,
                }),
                placeholder: v.formatMessage({
                  id: `review.commit.autoGeneratePlaceholder`,
                  defaultMessage: `Commit message (leave blank to generate)…`,
                  description: `Placeholder for commit message fields that can be generated automatically`,
                }),
                value: A,
                disabled: I,
                onKeyDown: Zn,
                onChange: (e) => {
                  _.set(J, T, e.target.value);
                },
              }),
              (0, U.jsxs)(`div`, {
                className: `relative flex items-center gap-2 px-3 pt-2 pb-3`,
                children: [
                  (0, U.jsx)(Ee, {
                    id: `commit-include-unstaged-changes`,
                    checked: k,
                    disabled: I,
                    onCheckedChange: (e) => {
                      _.set(Ct, e);
                    },
                  }),
                  (0, U.jsx)(`label`, {
                    htmlFor: `commit-include-unstaged-changes`,
                    className: `text-token-foreground`,
                    children: (0, U.jsx)(N, {
                      id: `review.commit.selection.includeUnstagedChanges`,
                      defaultMessage: `Include unstaged changes`,
                      description: `Label for selecting unstaged changes in the commit modal`,
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[92] = B),
      (t[93] = T),
      (t[94] = k),
      (t[95] = v),
      (t[96] = I),
      (t[97] = A),
      (t[98] = _),
      (t[99] = Je),
      (t[100] = ft))
    : (ft = t[100]);
  let pt = !$e,
    mt;
  t[101] === R
    ? (mt = t[102])
    : ((mt = (0, U.jsx)(Ze, { reason: R })), (t[101] = R), (t[102] = mt));
  let yt;
  t[103] === G ? (yt = t[104]) : ((yt = () => G(`commit`)), (t[103] = G), (t[104] = yt));
  let bt;
  t[105] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, U.jsx)(N, {
        id: `review.commit.nextSteps.commit`,
        defaultMessage: `Commit`,
        description: `Label for the commit-only option`,
      })),
      (t[105] = bt))
    : (bt = t[105]);
  let xt;
  t[106] !== I || t[107] !== pt || t[108] !== mt || t[109] !== yt
    ? ((xt = (0, U.jsx)($n, {
        Icon: Xe,
        disabled: pt,
        loading: I,
        tooltipContent: mt,
        value: `commit`,
        onSelect: yt,
        children: bt,
      })),
      (t[106] = I),
      (t[107] = pt),
      (t[108] = mt),
      (t[109] = yt),
      (t[110] = xt))
    : (xt = t[110]);
  let St;
  t[111] !== tt || t[112] !== R || t[113] !== h || t[114] !== P || t[115] !== G
    ? ((St = h
        ? (0, U.jsx)($n, {
            Icon: Fe,
            disabled: !tt,
            loading: !1,
            tooltipContent:
              R == null ? (0, U.jsx)(Qe, { reason: P }) : (0, U.jsx)(Ze, { reason: R }),
            value: `commit-and-push`,
            onSelect: () => G(`commit-and-push`),
            children: (0, U.jsx)(N, {
              id: `review.commit.nextSteps.commitAndPush`,
              defaultMessage: `Commit and push`,
              description: `Label for the commit and push option`,
            }),
          })
        : null),
      (t[111] = tt),
      (t[112] = R),
      (t[113] = h),
      (t[114] = P),
      (t[115] = G),
      (t[116] = St))
    : (St = t[116]);
  let K;
  t[117] !== et || t[118] !== h || t[119] !== ce || t[120] !== G
    ? ((K = h
        ? (0, U.jsx)($n, {
            Icon: Fe,
            disabled: !et,
            loading: !1,
            tooltipContent: (0, U.jsx)(Qe, { reason: ce }),
            value: `push`,
            onSelect: () => G(`push`),
            children: (0, U.jsx)(N, {
              id: `review.commit.nextSteps.push`,
              defaultMessage: `Push`,
              description: `Label for the push-only option`,
            }),
          })
        : null),
      (t[117] = et),
      (t[118] = h),
      (t[119] = ce),
      (t[120] = G),
      (t[121] = K))
    : (K = t[121]);
  let Y;
  t[122] !== xt || t[123] !== St || t[124] !== K
    ? ((Y = (0, U.jsx)(`div`, {
        className: `border-t border-token-border-default py-1`,
        children: (0, U.jsx)(Ne.List, {
          children: (0, U.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [xt, St, K] }),
        }),
      })),
      (t[122] = xt),
      (t[123] = St),
      (t[124] = K),
      (t[125] = Y))
    : (Y = t[125]);
  let X;
  t[126] !== rt || t[127] !== ut || t[128] !== dt || t[129] !== ft || t[130] !== Y
    ? ((X = (0, U.jsx)(`div`, {
        className: `command-menu-dialog contents`,
        children: (0, U.jsxs)(Ne, {
          "data-codex-shortcut-capture": !0,
          className: `w-[420px] max-w-[92vw]`,
          label: rt,
          shouldFilter: !1,
          loop: !0,
          children: [ut, dt, ft, Y],
        }),
      })),
      (t[126] = rt),
      (t[127] = ut),
      (t[128] = dt),
      (t[129] = ft),
      (t[130] = Y),
      (t[131] = X))
    : (X = t[131]);
  let wt;
  return (
    t[132] !== ot || t[133] !== r || t[134] !== st || t[135] !== X
      ? ((wt = (0, U.jsxs)(Ce, {
          open: r,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: ot,
          children: [st, X],
        })),
        (t[132] = ot),
        (t[133] = r),
        (t[134] = st),
        (t[135] = X),
        (t[136] = wt))
      : (wt = t[136]),
    wt
  );
}
function Zn(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
function Qn(e) {
  let t = (0, W.c)(2),
    { isLoading: n, isUnavailable: r, selectionSummary: i } = e;
  if (n || r) return null;
  let a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, U.jsx)(`span`, {
          className: `flex shrink-0 items-center gap-1 text-token-description-foreground`,
          children:
            i == null
              ? (0, U.jsx)(N, {
                  id: `localConversation.sync.modal.noChanges`,
                  defaultMessage: `No changes`,
                  description: `Label shown when there are no changes to sync`,
                })
              : (0, U.jsx)(Pe, {
                  variant: `color`,
                  linesAdded: i.totalAdditions,
                  linesRemoved: i.totalDeletions,
                }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function $n(e) {
  let t = (0, W.c)(19),
    { children: n, Icon: r, disabled: i, loading: a, tooltipContent: o, value: s, onSelect: c } = e,
    l;
  t[0] !== r || t[1] !== a
    ? ((l = a
        ? (0, U.jsx)(_e, { className: `icon-xs shrink-0` })
        : (0, U.jsx)(r, { className: `icon-xs shrink-0` })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, U.jsx)(`span`, { className: `truncate`, children: n })), (t[3] = n), (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, U.jsx)(`span`, {
        className: `invisible ml-auto flex shrink-0 items-center opacity-80 group-aria-[selected=true]:visible group-data-[selected=true]:visible`,
        children: (0, U.jsx)(de, { keysLabel: Te(`CmdOrCtrl+Enter`), variant: `button` }),
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== l || t[7] !== u
    ? ((f = (0, U.jsxs)(`span`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [l, u, d],
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== i || t[10] !== c || t[11] !== f || t[12] !== s
    ? ((p = (0, U.jsx)(Ne.Item, {
        className: `group`,
        disabled: i,
        value: s,
        onSelect: c,
        children: f,
      })),
      (t[9] = i),
      (t[10] = c),
      (t[11] = f),
      (t[12] = s),
      (t[13] = p))
    : (p = t[13]);
  let m = p;
  if (!i || o == null) return m;
  let h;
  t[14] === m ? (h = t[15]) : ((h = (0, U.jsx)(`div`, { children: m })), (t[14] = m), (t[15] = h));
  let g;
  return (
    t[16] !== h || t[17] !== o
      ? ((g = (0, U.jsx)(fe, { tooltipContent: o, children: h })),
        (t[16] = h),
        (t[17] = o),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function er(e) {
  let t = (0, W.c)(6),
    { showSetPrefix: n } = e,
    r = n === void 0 ? !0 : n,
    i = ie(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, U.jsx)(`span`, {
        className: `text-sm font-medium text-token-foreground`,
        children: (0, U.jsx)(N, {
          id: `localConversation.syncSetup.branchName`,
          defaultMessage: `Branch name`,
          description: `Title for the branch name input in the sync setup modal`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== r
    ? ((o = r
        ? (0, U.jsx)(`button`, {
            type: `button`,
            className: `text-sm text-token-description-foreground hover:text-token-foreground`,
            onClick: () => {
              i(`/settings/git-settings`);
            },
            children: (0, U.jsx)(N, {
              id: `localConversation.syncSetup.setPrefix`,
              defaultMessage: `Set prefix`,
              description: `Label for branch prefix configuration`,
            }),
          })
        : null),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, U.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [a, o],
        })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
function tr(e) {
  let t = (0, W.c)(52),
    {
      branches: n,
      selectedBranch: r,
      disabled: i,
      isError: a,
      isLoading: o,
      isSearchError: s,
      isSearchLoading: c,
      onClose: l,
      onRetry: u,
      onRetrySearch: d,
      onSearchQueryChange: f,
      onSelectBranch: p,
      renderBranchSubText: m,
      searchedBranches: h,
      searchQuery: g,
    } = e,
    _ = i === void 0 ? !1 : i,
    v = s === void 0 ? !1 : s,
    y = c === void 0 ? !1 : c,
    ee = ne(),
    [b, te] = (0, Ye.useState)(``),
    x = g ?? b,
    S,
    C,
    w,
    T;
  if (
    t[0] !== n ||
    t[1] !== _ ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== v ||
    t[5] !== y ||
    t[6] !== u ||
    t[7] !== d ||
    t[8] !== p ||
    t[9] !== m ||
    t[10] !== x ||
    t[11] !== h ||
    t[12] !== r
  ) {
    let e = x.trim().toLowerCase();
    ((w = e.length > 0),
      (C = n == null ? void 0 : w ? (h ?? n.filter((t) => t.toLowerCase().includes(e))) : n),
      (T = w ? y : o));
    let i = w ? v : a,
      s = w ? d : u;
    if (T) {
      let e;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(z.Item, {
            disabled: !0,
            children: (0, U.jsxs)(`span`, {
              className: `inline-flex items-center gap-2`,
              children: [
                (0, U.jsx)(_e, { className: `icon-xxs` }),
                (0, U.jsx)(N, {
                  id: `localConversation.syncSetup.branchesLoading`,
                  defaultMessage: `Loading branches…`,
                  description: `Label shown while loading branches`,
                }),
              ],
            }),
          })),
          (t[17] = e))
        : (e = t[17]),
        (S = e));
    } else if (i) {
      let e;
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(z.SectionLabel, {
            children: (0, U.jsx)(N, {
              id: `composer.reviewMode.branches.error`,
              defaultMessage: `Unable to load branches`,
              description: `Error message when branch list could not be loaded`,
            }),
          })),
          (t[18] = e))
        : (e = t[18]);
      let n;
      t[19] === s
        ? (n = t[20])
        : ((n =
            s == null
              ? null
              : (0, U.jsx)(z.Item, {
                  onSelect: () => {
                    s();
                  },
                  children: (0, U.jsx)(N, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                })),
          (t[19] = s),
          (t[20] = n));
      let r;
      (t[21] === n
        ? (r = t[22])
        : ((r = (0, U.jsxs)(z.Section, { className: `flex flex-col gap-1`, children: [e, n] })),
          (t[21] = n),
          (t[22] = r)),
        (S = r));
    } else if (C == null || C.length === 0) {
      let e;
      (t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(z.Item, {
            disabled: !0,
            children: (0, U.jsx)(N, {
              id: `localConversation.syncSetup.noBranches`,
              defaultMessage: `No branches found`,
              description: `Label shown when no branches are available`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]),
        (S = e));
    } else {
      let e;
      (t[24] !== _ || t[25] !== p || t[26] !== m || t[27] !== r
        ? ((e = (e) =>
            (0, U.jsx)(
              nr,
              {
                branch: e,
                disabled: _,
                selected: e === r,
                subText: m?.(e) ?? null,
                onSelect: () => p(e),
              },
              e,
            )),
          (t[24] = _),
          (t[25] = p),
          (t[26] = m),
          (t[27] = r),
          (t[28] = e))
        : (e = t[28]),
        (S = (0, U.jsx)(z.Section, { className: `flex flex-col`, children: C.map(e) })));
    }
    ((t[0] = n),
      (t[1] = _),
      (t[2] = a),
      (t[3] = o),
      (t[4] = v),
      (t[5] = y),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m),
      (t[10] = x),
      (t[11] = h),
      (t[12] = r),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T));
  } else ((S = t[13]), (C = t[14]), (w = t[15]), (T = t[16]));
  let E;
  t[29] === ee
    ? (E = t[30])
    : ((E = ee.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[29] = ee),
      (t[30] = E));
  let D;
  t[31] === f
    ? (D = t[32])
    : ((D = (e) => {
        let t = e.currentTarget.value;
        (te(t), f?.(t));
      }),
      (t[31] = f),
      (t[32] = D));
  let O;
  t[33] !== _ ||
  t[34] !== C ||
  t[35] !== w ||
  t[36] !== l ||
  t[37] !== p ||
  t[38] !== r ||
  t[39] !== T
    ? ((O = (e) => {
        if (e.key !== `Enter`) return;
        if ((e.preventDefault(), !w)) {
          l?.();
          return;
        }
        if (_ || T || C == null) return;
        let t = C.find((e) => e !== r) ?? C[0];
        t != null && p(t);
      }),
      (t[33] = _),
      (t[34] = C),
      (t[35] = w),
      (t[36] = l),
      (t[37] = p),
      (t[38] = r),
      (t[39] = T),
      (t[40] = O))
    : (O = t[40]);
  let k;
  t[41] !== x || t[42] !== E || t[43] !== D || t[44] !== O
    ? ((k = (0, U.jsx)(z.SearchInput, {
        autoFocus: !1,
        placeholder: E,
        value: x,
        onChange: D,
        onKeyDown: O,
      })),
      (t[41] = x),
      (t[42] = E),
      (t[43] = D),
      (t[44] = O),
      (t[45] = k))
    : (k = t[45]);
  let A;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, U.jsx)(z.SectionLabel, {
        children: (0, U.jsx)(N, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[46] = A))
    : (A = t[46]);
  let j;
  t[47] === S
    ? (j = t[48])
    : ((j = (0, U.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [A, S],
      })),
      (t[47] = S),
      (t[48] = j));
  let M;
  return (
    t[49] !== k || t[50] !== j
      ? ((M = (0, U.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [k, j],
        })),
        (t[49] = k),
        (t[50] = j),
        (t[51] = M))
      : (M = t[51]),
    M
  );
}
function nr(e) {
  let t = (0, W.c)(6),
    { branch: n, disabled: r, onSelect: i, selected: a, subText: o } = e,
    s = a ? we : void 0,
    c;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== s
      ? ((c = (0, U.jsx)(z.Item, {
          LeftIcon: ae,
          tooltipText: n,
          tooltipSide: `top`,
          tooltipAlign: `start`,
          tooltipOpenWhen: `trigger-overflows`,
          disabled: r,
          RightIcon: s,
          subTextAllowWrap: !0,
          SubText: o,
          onSelect: i,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
export {
  At as A,
  ct as B,
  Ut as C,
  Zt as D,
  Qt as E,
  Y as F,
  Xe as G,
  Ze as H,
  q as I,
  H as K,
  wt as L,
  Tt as M,
  J as N,
  Xt as O,
  X as P,
  ht as R,
  Wt as S,
  Vt as T,
  et as U,
  st as V,
  Qe as W,
  Jt as _,
  qn as a,
  Kt as b,
  yn as c,
  Ft as d,
  It as f,
  Ht as g,
  zt as h,
  Jn as i,
  Dt as j,
  Z as k,
  jt as l,
  Rt as m,
  er as n,
  Rn as o,
  Lt as p,
  Ve as q,
  Xn as r,
  Cn as s,
  tr as t,
  $t as u,
  Yt as v,
  Bt as w,
  qt as x,
  Gt as y,
  yt as z,
};
//# sourceMappingURL=git-branch-picker-dropdown-content.js.map
