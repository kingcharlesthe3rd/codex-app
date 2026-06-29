import { s as e } from "./chunk-Bj-mKKzh.js";
import { Ya as t } from "./app-server-manager-signals.js";
import { n } from "./jsx-runtime.js";
import {
  F as r,
  I as i,
  L as a,
  W as o,
  c as s,
  g as c,
  h as l,
  lt as u,
  o as d,
  u as f,
  v as p,
} from "./vscode-api.js";
import { i as m, r as h } from "./react.js";
import { o as g } from "./statsig.js";
import { t as _ } from "./request.js";
import { t as v } from "./use-auth-CI-WraL2.js";
import { h as y } from "./codex-api.js";
import { c as b } from "./prompt-text.js";
import { t as x } from "./persisted-atom.js";
import { r as S } from "./skus.js";
import { r as C } from "./local-projects.js";
import { t as w } from "./sortBy.js";
import { t as T } from "./score-query-match.js";
var E = u(),
  D = e(n(), 1),
  O = x(`codexCloudAccess`, null),
  k = o(l, () => null);
function A() {
  let e = (0, E.c)(6),
    { authMethod: t } = v(),
    n = h(O),
    r = i(k);
  if (t !== `chatgpt`) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = { access: `disabled` }), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let a = r ?? `loading`;
  if ((a === `loading` || a === `error`) && n != null) {
    let t;
    return (e[2] === n ? (t = e[3]) : ((t = { access: n }), (e[2] = n), (e[3] = t)), t);
  }
  let o;
  return (e[4] === a ? (o = e[5]) : ((o = { access: a }), (e[4] = a), (e[5] = o)), o);
}
function j() {
  return (M(), null);
}
function M(e) {
  let t = (0, E.c)(14),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: i } = n,
    a = i === void 0 ? !0 : i,
    o = r(l),
    { authMethod: c } = v(),
    u = m(O),
    h = a && c === `chatgpt`,
    b;
  t[2] === h ? (b = t[3]) : ((b = { queryConfig: { enabled: h } }), (t[2] = h), (t[3] = b));
  let { data: x, isLoading: C, isError: w } = d(`account-info`, b),
    T = x?.plan ?? void 0,
    A = S(T),
    j;
  t[4] === x?.accountId
    ? (j = t[5])
    : ((j = async () =>
        _.safeGet(`/accounts/{account_id}/settings`, {
          parameters: { path: { account_id: x?.accountId ?? `` } },
        })),
      (t[4] = x?.accountId),
      (t[5] = j));
  let {
      data: M,
      isLoading: P,
      isError: F,
    } = p({
      queryKey: [`accounts`, `settings`, x?.accountId],
      enabled: a && !!x?.accountId && A && c === `chatgpt`,
      queryFn: j,
      staleTime: f.ONE_MINUTE,
    }),
    I = a && c === `chatgpt`,
    L;
  t[6] === I ? (L = t[7]) : ((L = { enabled: I }), (t[6] = I), (t[7] = L));
  let { data: R, isLoading: z, error: B } = y(L),
    V = g(`1907601843`),
    H = C || P || z,
    U = B instanceof s && B.status === 404,
    W = N(T, c, {
      isLoading: H,
      hasErrors: w || (A && F) || (!!B && !U),
      needsOnboarding: V ? U : R?.length === 0 || U,
      hasWorkspaceEnabledCodex: !A || (M?.beta_settings?.wham_access ?? !1),
    }),
    G,
    K;
  (t[8] !== W || t[9] !== a || t[10] !== o || t[11] !== u
    ? ((G = () => {
        a && (o.set(k, W), W !== `loading` && W !== `error` && u(W));
      }),
      (K = [W, a, o, u]),
      (t[8] = W),
      (t[9] = a),
      (t[10] = o),
      (t[11] = u),
      (t[12] = G),
      (t[13] = K))
    : ((G = t[12]), (K = t[13])),
    (0, D.useEffect)(G, K));
}
function N(
  e,
  t,
  {
    isLoading: n,
    hasErrors: r,
    needsOnboarding: i,
    hasWorkspaceEnabledCodex: a,
    hasLoggedDisabledRef: o,
  },
) {
  let s = S(e),
    l = (e) => {
      o && !o.current && (c.info(e), (o.current = !0));
    };
  return t === `chatgpt`
    ? n
      ? `loading`
      : r
        ? `error`
        : s && !a
          ? (l(`Codex Cloud access disabled because workspace has not enabled Codex.`), `disabled`)
          : i
            ? `enabled_needs_setup`
            : `enabled`
    : (l(`Codex Cloud access disabled because user is not logged in via ChatGPT.`), `disabled`);
}
var P = o(l, null);
function F(e, t) {
  let n = `~`;
  return (
    t != null && (n = t.projectKind === `remote` ? t.path : C.getThreadStartCwd(t)), e.set(P, n), n
  );
}
var I = e(w(), 1),
  L = e(t(), 1),
  R = o(l, []),
  z = o(b, []),
  B = o(b, !1),
  V = a(b, ({ get: e }) => q((0, L.default)([...e(z), ...e(R)], (e) => e.id))),
  H = /^\s*\/[^/\r\n]*\s*$/;
function U(e) {
  let t = (0, E.c)(7),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ dependencies: i, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a;
  t[3] === i ? (a = t[4]) : ((a = i === void 0 ? [] : i), (t[3] = i), (t[4] = a));
  let o = a,
    s = r(b),
    c;
  (t[5] === s
    ? (c = t[6])
    : ((c = (e) => {
        s.set(z, e);
      }),
      (t[5] = s),
      (t[6] = c)),
    G(c, n, o));
}
function W(e) {
  let t = (0, E.c)(7),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ dependencies: i, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a;
  t[3] === i ? (a = t[4]) : ((a = i === void 0 ? [] : i), (t[3] = i), (t[4] = a));
  let o = a,
    s = r(l),
    c;
  (t[5] === s
    ? (c = t[6])
    : ((c = (e) => {
        s.set(R, e);
      }),
      (t[5] = s),
      (t[6] = c)),
    G(c, n, o));
}
function G(e, t, n) {
  let r = (0, E.c)(17),
    i;
  r[0] !== t || r[1] !== e
    ? ((i = () => {
        e((e) => K(e, t));
      }),
      (r[0] = t),
      (r[1] = e),
      (r[2] = i))
    : (i = r[2]);
  let a;
  (r[3] !== t.description ||
  r[4] !== t.enabled ||
  r[5] !== t.group ||
  r[6] !== t.id ||
  r[7] !== t.presentation ||
  r[8] !== t.requiresEmptyComposer ||
  r[9] !== t.title ||
  r[10] !== n ||
  r[11] !== e
    ? ((a = [
        t.id,
        t.title,
        t.description,
        t.enabled,
        t.requiresEmptyComposer,
        t.presentation,
        e,
        t.group,
        ...n,
      ]),
      (r[3] = t.description),
      (r[4] = t.enabled),
      (r[5] = t.group),
      (r[6] = t.id),
      (r[7] = t.presentation),
      (r[8] = t.requiresEmptyComposer),
      (r[9] = t.title),
      (r[10] = n),
      (r[11] = e),
      (r[12] = a))
    : (a = r[12]),
    (0, D.useEffect)(i, a));
  let o, s;
  (r[13] !== t.id || r[14] !== e
    ? ((o = () => () => {
        e((e) => e.filter((e) => e.id !== t.id));
      }),
      (s = [t.id, e]),
      (r[13] = t.id),
      (r[14] = e),
      (r[15] = o),
      (r[16] = s))
    : ((o = r[15]), (s = r[16])),
    (0, D.useEffect)(o, s));
}
function K(e, t) {
  return q([...e.filter((e) => e.id !== t.id), t].filter((e) => e.enabled !== !1));
}
function q(e) {
  return (0, I.default)(e, [(e) => e.group ?? ``, (e) => e.title]);
}
function J(e, t) {
  let n = t.trim();
  if (n.length === 0) return e;
  let r = new Map();
  return (
    e.forEach((e) => {
      let t = e.group ?? null;
      r.has(t) || r.set(t, r.size);
    }),
    (0, I.default)(
      e.map((e) => ({ command: e, score: T(e.title, n) })).filter((e) => e.score > 0),
      [
        (e) => r.get(e.command.group ?? null) ?? 2 ** 53 - 1,
        (e) => -e.score,
        (e) => e.command.title,
      ],
    ).map((e) => e.command)
  );
}
function Y(e, t) {
  return t ? e.filter((e) => !e.requiresEmptyComposer) : e;
}
function X(e) {
  return e.trim().length === 0 ? !1 : !H.test(e);
}
function Z({
  attachedRemoteHostId: e,
  browserRemoteHostId: t,
  followUpType: n,
  selectedRemoteProjectHostId: r,
}) {
  return e ?? (n === `local` ? null : (r ?? t));
}
function Q({
  composerMode: e,
  draftRemoteHostId: t,
  followUpType: n,
  hasStartedBranchConversation: r,
}) {
  return e === `local` && t !== `local` && n !== `local` && (!r || n === `cloud`);
}
export {
  Y as a,
  W as c,
  F as d,
  j as f,
  J as i,
  U as l,
  Q as n,
  X as o,
  A as p,
  V as r,
  B as s,
  Z as t,
  P as u,
};
//# sourceMappingURL=local-remote-selection.js.map
