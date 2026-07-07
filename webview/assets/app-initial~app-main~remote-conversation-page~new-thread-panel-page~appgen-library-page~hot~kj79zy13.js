import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ct as n,
  Dt as r,
  El as i,
  Et as a,
  Ft as o,
  Pt as s,
  Rt as c,
  Tl as l,
  Tt as u,
  Xs as d,
  bt as f,
  cl as p,
  el as m,
  il as h,
  ml as g,
  nc as _,
  qc as v,
  rl as y,
  tc as b,
  xt as x,
  zt as S,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  By as C,
  Hy as w,
  Ib as T,
  Rb as E,
  b as D,
  x as O,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Al as k,
  Cu as A,
  Rl as j,
  Sl as M,
  Su as N,
  bl as P,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
function F() {
  let e = (0, z.c)(6),
    { authMethod: t } = O(),
    n = y(V),
    r = _(H);
  if (t !== `chatgpt`) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = { access: `disabled` }), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let i = r ?? `loading`;
  if ((i === `loading` || i === `error`) && n != null) {
    let t;
    return (e[2] === n ? (t = e[3]) : ((t = { access: n }), (e[2] = n), (e[3] = t)), t);
  }
  let a;
  return (e[4] === i ? (a = e[5]) : ((a = { access: i }), (e[4] = i), (e[5] = a)), a);
}
function I() {
  return (L(), null);
}
function L(e) {
  let t = (0, z.c)(14),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { enabled: i } = r,
    o = i === void 0 ? !0 : i,
    s = b(c),
    { authMethod: l } = O(),
    u = h(V),
    d = o && l === `chatgpt`,
    f;
  t[2] === d ? (f = t[3]) : ((f = { queryConfig: { enabled: d } }), (t[2] = d), (t[3] = f));
  let { data: p, isLoading: m, isError: _ } = x(`account-info`, f),
    v = p?.plan ?? void 0,
    y = M(v),
    S;
  t[4] === p?.accountId
    ? (S = t[5])
    : ((S = async () =>
        C.safeGet(`/accounts/{account_id}/settings`, {
          parameters: { path: { account_id: p?.accountId ?? `` } },
        })),
      (t[4] = p?.accountId),
      (t[5] = S));
  let {
      data: w,
      isLoading: T,
      isError: D,
    } = g({
      queryKey: [`accounts`, `settings`, p?.accountId],
      enabled: o && !!p?.accountId && y && l === `chatgpt`,
      queryFn: S,
      staleTime: a.ONE_MINUTE,
    }),
    k = o && l === `chatgpt`,
    A;
  t[6] === k ? (A = t[7]) : ((A = { enabled: k }), (t[6] = k), (t[7] = A));
  let { data: N, isLoading: P, error: F } = j(A),
    I = E(`1907601843`),
    L = m || T || P,
    U = F instanceof n && F.status === 404,
    W = R(v, l, {
      isLoading: L,
      hasErrors: _ || (y && D) || (!!F && !U),
      needsOnboarding: I ? U : N?.length === 0 || U,
      hasWorkspaceEnabledCodex: !y || (w?.beta_settings?.wham_access ?? !1),
    }),
    G,
    K;
  (t[8] !== W || t[9] !== o || t[10] !== s || t[11] !== u
    ? ((G = () => {
        o && (s.set(H, W), W !== `loading` && W !== `error` && u(W));
      }),
      (K = [W, o, s, u]),
      (t[8] = W),
      (t[9] = o),
      (t[10] = s),
      (t[11] = u),
      (t[12] = G),
      (t[13] = K))
    : ((G = t[12]), (K = t[13])),
    (0, B.useEffect)(G, K));
}
function R(
  e,
  t,
  {
    isLoading: n,
    hasErrors: r,
    needsOnboarding: i,
    hasWorkspaceEnabledCodex: a,
    hasLoggedDisabledRef: s,
  },
) {
  let c = M(e),
    l = (e) => {
      s && !s.current && (o.info(e), (s.current = !0));
    };
  return t === `chatgpt`
    ? n
      ? `loading`
      : r
        ? `error`
        : c && !a
          ? (l(`Codex Cloud access disabled because workspace has not enabled Codex.`), `disabled`)
          : i
            ? `enabled_needs_setup`
            : `enabled`
    : (l(`Codex Cloud access disabled because user is not logged in via ChatGPT.`), `disabled`);
}
var z,
  B,
  V,
  H,
  U = e(() => {
    ((z = l()),
      p(),
      m(),
      d(),
      (B = t(i(), 1)),
      k(),
      S(),
      T(),
      s(),
      N(),
      r(),
      w(),
      P(),
      f(),
      u(),
      D(),
      (V = A(`codexCloudAccess`, null)),
      (H = v(c, () => null)));
  });
function W({
  canCreateBrowserDefaultHostThreads: e,
  hasBrowserLocalExecutionHost: t,
  hasComposerModeGitRepo: n,
  hasFollowUp: r,
  isBrowser: i,
  isComposerModeGitMetadataLoading: a,
  isResponseInProgress: o,
  isStatsigLoading: s,
  isWorktreeExecutionTargetLoading: c,
  isWorktreePickerEnabled: l,
}) {
  if (i) {
    let n = e && !r;
    return {
      fallbackMode: n ? `local` : `cloud`,
      isAvailabilityLoading: !1,
      isCloudAvailable: !n,
      isLocalAvailable: t || e,
      isWorktreeAvailable: !1,
    };
  }
  return {
    fallbackMode: `local`,
    isAvailabilityLoading: a || s || c,
    isCloudAvailable: n,
    isLocalAvailable: !0,
    isWorktreeAvailable: n && !r && !o && l,
  };
}
function G({
  composerMode: e,
  cloudAccess: t,
  fallbackMode: n,
  isAvailabilityLoading: r,
  isCloudAvailable: i,
  isLocalAvailable: a,
  isWorktreeAvailable: o,
}) {
  if (e === `cloud` && t !== `enabled`) return n;
  if (r) return e;
  switch (e) {
    case `cloud`:
      return i ? `cloud` : n;
    case `local`:
      return a ? `local` : n;
    case `worktree`:
      return o ? `worktree` : n;
  }
}
var K = e(() => {});
export { U as a, I as i, G as n, F as o, K as r, W as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~kj79zy13.js.map
