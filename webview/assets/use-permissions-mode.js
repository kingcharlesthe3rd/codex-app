import {
  Z as e,
  a as t,
  g as n,
  l as r,
  o as i,
  p as a,
  s as o,
  t as s,
  v as c,
  x as l,
} from "./app-scope-CWE-zIhQ.js";
import { Bt as u, o as d } from "./use-host-config.js";
import { A as f, Lt as p, at as m, n as h } from "./thread-context-inputs.js";
import { h as g, u as _ } from "./vscode-api.js";
import { n as v } from "./react.js";
import {
  $i as y,
  Gi as b,
  Ji as x,
  Qi as S,
  Xi as C,
  Yi as w,
  aa as T,
  ea as E,
  ia as D,
  na as O,
  ra as k,
} from "./src.js";
import { o as A, u as ee } from "./statsig.js";
import { c as j, v as te } from "./config-queries.js";
import { i as M } from "./thread-detail-level.js";
import { n as N, r as P, t as ne } from "./permissions-mode-defaults.js";
var re = 100,
  ie = `:read-only`,
  ae = `:workspace`;
async function oe(e, t) {
  let n = [],
    r = null;
  do {
    let i = await u(`list-permission-profiles`, { hostId: e, cursor: r, limit: re, cwd: t });
    (n.push(...i.data), (r = i.nextCursor));
  } while (r != null);
  return n;
}
function se(e, t) {
  return [`permission-profiles`, `list`, e, t ?? `no-cwd`];
}
function ce(e, t, n) {
  let r = t?.allowedPermissionProfiles,
    i = r == null ? e : e.filter(({ id: e }) => r[e] === !0),
    a = i.some(({ id: e }) => e === n) ? n : null,
    o = t?.defaultPermissions ?? a ?? (r?.[ie] === !0 && r[ae] === !0 ? ae : null);
  return { profiles: i, defaultProfileId: o != null && i.some(({ id: e }) => e === o) ? o : null };
}
var le = a(s, ({ hostId: e, cwd: t }) => ({
  queryKey: se(e, t),
  queryFn: () => oe(e, t),
  staleTime: _.ONE_MINUTE,
}));
function ue(e) {
  let t = T(e);
  return t === `custom` ? `read-only` : t;
}
function F(e, t, n, r) {
  return e == null ||
    (r === `granular` && e === `auto`) ||
    (r === `auto` && e === `granular`) ||
    !t.includes(e) ||
    (e === `guardian-approvals` && !n)
    ? null
    : e;
}
function I({
  isConfigDataPending: e,
  requirements: t,
  resolvedConfig: n,
  isGuardianApprovalEnabledByStatsig: r,
  defaultWorkspaceWriteMode: i = `auto`,
}) {
  let a = e ? [`read-only`, `auto`, `granular`, `full-access`, `custom`] : D(t, n),
    o = O(n ?? void 0) ?? !0,
    s = r,
    c = a.filter((e) => e !== `guardian-approvals`),
    l = a.includes(`guardian-approvals`) && c.length === 0,
    u = (s && o) || l ? a : c,
    d = u.includes(`guardian-approvals`),
    f = u.filter((e) => e !== `custom`),
    p = C(n ?? void 0, i),
    m = p === `full-access` ? null : p,
    h = d && p === `auto` && E(w(n ?? void 0)),
    g = ue(f);
  return (
    h ? (g = `guardian-approvals`) : m != null && f.includes(m) && (g = m),
    {
      availableAgentModes: u,
      canShowCustom: u.includes(`custom`),
      canUnlock: u.includes(`full-access`),
      customEquivalentMode: h ? `guardian-approvals` : p,
      isGuardianModeAvailable: d,
      isConfigDataPending: e,
      configNonFullAccessMode: g,
      showGuardianOption: s,
    }
  );
}
function de(e, t, n = null) {
  return (e === `custom` && n != null) || !t.includes(e)
    ? !1
    : e === `guardian-approvals` || e === `full-access` || e === `custom`;
}
function fe(e, t) {
  switch (e) {
    case `:read-only`:
      return `read-only`;
    case `:workspace`:
      return t;
    case `:danger-full-access`:
      return `full-access`;
    case null:
    case void 0:
    default:
      return null;
  }
}
function L(e, t) {
  return !e && t !== `not-thread` && t !== `empty`;
}
function pe({ defaultWorkspaceWriteMode: e, isWindowsSandboxRequired: t }) {
  return t ? `read-only` : e;
}
function me(e, t, n, r = null) {
  return r != null && e.includes(r)
    ? r
    : e.includes(`custom`)
      ? `custom`
      : !R(e) && e.includes(`full-access`)
        ? `full-access`
        : t != null && e.includes(t)
          ? t
          : n;
}
function he(e, t, n, r, i = null, a, o) {
  return t == null
    ? de(e, r, i)
      ? null
      : o && r.includes(a) && e !== `guardian-approvals` && e !== `full-access` && e !== `custom`
        ? e === a
          ? null
          : a
        : !R(r) && r.includes(`full-access`)
          ? e === `full-access`
            ? null
            : `full-access`
          : i == null && r.includes(`custom`)
            ? e === `custom`
              ? null
              : `custom`
            : e === n
              ? null
              : n
    : e === t
      ? null
      : t;
}
function R(e) {
  return e.some((e) => e !== `full-access` && e !== `custom`);
}
function z({
  availableAgentModes: e,
  preferredNonFullAccessMode: t,
  isGuardianModeAvailable: n,
  isConfigDataPending: r,
  configNonFullAccessMode: i,
}) {
  let a = F(t, e, n, i);
  return {
    canSelectGuardianMode: n,
    resolvedNonFullAccessMode: a ?? i,
    validPreferredNonFullAccessMode: a,
    shouldClearPreferredNonFullAccessMode:
      !r && ((t != null && a == null) || (!e.includes(`custom`) && a != null && a === i)),
  };
}
var ge = e(),
  B = { isSet: !1, value: null },
  _e = { isSet: !1, value: null },
  ve = l(null),
  ye = n(s, () => ({})),
  be = l(!1),
  V = l(B),
  H = c((e) => l(B)),
  xe = c((e) => l(null)),
  U = r(s, (e, { get: t }) => t(p, e)?.at(-1)?.params ?? null);
function Se(e, { requirements: t, resolvedConfig: n }) {
  switch (e) {
    case `STEPS_PROSE`:
      return y(`granular`, t) && C(n ?? void 0, `granular`) === `granular` ? `granular` : `auto`;
    case `STEPS_COMMANDS`:
      return `auto`;
  }
}
function Ce(e) {
  if (e == null) return !0;
  let t =
      (e.allowedPermissionProfiles == null || e.allowedPermissionProfiles[`:workspace`] === !0) &&
      (e.allowedSandboxModes == null || e.allowedSandboxModes.includes(`workspace-write`)),
    n = e.allowedApprovalPolicies == null || e.allowedApprovalPolicies.includes(`on-request`),
    r =
      e.allowedApprovalsReviewers == null ||
      e.allowedApprovalsReviewers.includes(`user`) ||
      e.allowedApprovalsReviewers.includes(`auto_review`);
  return t && n && r;
}
function we(e, t) {
  let n = Se(e, t);
  if (Ce(t.requirements)) return n;
  let r = k(t.requirements);
  return r.find((e) => e !== `full-access`) ?? (r.includes(`full-access`) ? `full-access` : n);
}
function Te(e, t, n) {
  let r = t[e];
  return r === `auto` || r === `granular` ? n : (r ?? n);
}
function Ee(e) {
  let { conversationId: t, stateScope: n } = e,
    r = n === void 0 ? `composer` : n;
  return !W() || r === `global-default` ? `global-default` : (t ?? `draft`);
}
function De(e) {
  let n = (0, ge.c)(11),
    r = t(m, e),
    i = t(U, e),
    a = r ?? i,
    o = r?.sandboxPolicy ?? i?.sandboxPolicy ?? null,
    s = r?.approvalPolicy ?? i?.approvalPolicy ?? void 0,
    c = r?.approvalsReviewer ?? i?.approvalsReviewer ?? void 0,
    l = o ?? void 0,
    u;
  n[0] !== s || n[1] !== c || n[2] !== l
    ? ((u = x({ approvalPolicy: s, approvalsReviewer: c, sandboxPolicy: l })),
      (n[0] = s),
      (n[1] = c),
      (n[2] = l),
      (n[3] = u))
    : (u = n[3]);
  let d = u,
    f = null;
  d != null && d !== `full-access` && d !== `custom` && (f = d);
  let p = d != null,
    h =
      r?.activePermissionProfile === void 0
        ? (i?.permissions ?? null)
        : (r.activePermissionProfile?.id ?? null),
    g;
  return (
    n[4] !== a || n[5] !== p || n[6] !== h || n[7] !== d || n[8] !== f || n[9] !== o
      ? ((g = {
          hasThreadSelection: p,
          selectionSource: a,
          threadPermissionProfileId: h,
          threadSandboxPolicy: o,
          threadMode: d,
          threadPreferredNonFullAccessMode: f,
        }),
        (n[4] = a),
        (n[5] = p),
        (n[6] = h),
        (n[7] = d),
        (n[8] = f),
        (n[9] = o),
        (n[10] = g))
      : (g = n[10]),
    g
  );
}
function W() {
  return A(`3736891373`);
}
function Oe() {
  return A(`2846336681`);
}
function ke(e) {
  let n = (0, ge.c)(19),
    { conversationId: r, hostId: i, cwdOverride: a } = e,
    s = t(f, r),
    { data: c } = o(h),
    l = a !== void 0,
    u = l ? (a ?? null) : (s ?? c?.roots?.[0] ?? null),
    p = l && u == null,
    [m] = d(`statsig_default_enable_features`),
    g = ee(),
    _ = l ? `preserve-null` : `fallback-to-workspace`,
    v = !p,
    b;
  n[0] !== i || n[1] !== _ || n[2] !== v
    ? ((b = { hostId: i, cwdMode: _, enabled: v }), (n[0] = i), (n[1] = _), (n[2] = v), (n[3] = b))
    : (b = n[3]);
  let { data: x, isPending: S } = te(u, b),
    C;
  n[4] === i ? (C = n[5]) : ((C = { hostId: i }), (n[4] = i), (n[5] = C));
  let { data: w, isPending: T } = t(j, C),
    E = w?.requirements ?? null,
    D = x?.config ?? null,
    k;
  n[6] !== T || n[7] !== E
    ? ((k = T || y(`auto`, E) || y(`guardian-approvals`, E)), (n[6] = T), (n[7] = E), (n[8] = k))
    : (k = n[8]);
  let A = k,
    M;
  n[9] !== m || n[10] !== A || n[11] !== g || n[12] !== D
    ? ((M = A && O(D ?? void 0) !== !1 && (m === void 0 || g)),
      (n[9] = m),
      (n[10] = A),
      (n[11] = g),
      (n[12] = D),
      (n[13] = M))
    : (M = n[13]);
  let N = p || T || S || M,
    P = m?.guardian_approval === !0,
    ne;
  return (
    n[14] !== E || n[15] !== D || n[16] !== N || n[17] !== P
      ? ((ne = {
          isConfigDataPending: N,
          isGuardianApprovalEnabledByStatsig: P,
          requirements: E,
          resolvedConfig: D,
        }),
        (n[14] = E),
        (n[15] = D),
        (n[16] = N),
        (n[17] = P),
        (n[18] = ne))
      : (ne = n[18]),
    ne
  );
}
function Ae(e) {
  let n = (0, ge.c)(95),
    { conversationId: r, cwdOverride: a, hostId: c, stateScope: l } = e,
    d = l === void 0 ? `composer` : l,
    p = i(s),
    m = t(f, r),
    { data: _ } = o(h),
    y = a !== void 0,
    x = y ? (a ?? null) : (m ?? _?.roots?.[0] ?? null),
    C = y && x == null,
    w = M(),
    T;
  n[0] !== r || n[1] !== a || n[2] !== c
    ? ((T = { conversationId: r, cwdOverride: a, hostId: c }),
      (n[0] = r),
      (n[1] = a),
      (n[2] = c),
      (n[3] = T))
    : (T = n[3]);
  let E = ke(T),
    O;
  n[4] !== x || n[5] !== c
    ? ((O = { hostId: c, cwd: x }), (n[4] = x), (n[5] = c), (n[6] = O))
    : (O = n[6]);
  let A = t(le, O),
    ee = A.isPending || A.isError,
    j =
      A.data == null
        ? null
        : ce(
            A.data,
            E.requirements,
            typeof E.resolvedConfig?.default_permissions == `string`
              ? E.resolvedConfig.default_permissions
              : null,
          ),
    te = we(w, E),
    N = fe(j?.defaultProfileId, Se(w, E)),
    P = N == null ? (j?.defaultProfileId ?? null) : null,
    re = N ?? te,
    ie = D(E.requirements, E.resolvedConfig),
    ae =
      j != null &&
      j.profiles.length > 1 &&
      E.requirements?.allowedPermissionProfiles != null &&
      k(E.requirements).length === 0 &&
      P == null,
    oe = !E.isConfigDataPending && !ae && P == null && ie.length === 0,
    se;
  n[7] !== r || n[8] !== d
    ? ((se = { conversationId: r, stateScope: d }), (n[7] = r), (n[8] = d), (n[9] = se))
    : (se = n[9]);
  let ue = Ee(se),
    F = r == null && d === `composer`,
    [I, L] = v(ne),
    [pe, me] = v(ve),
    he = o(ye),
    R;
  n[10] !== x || n[11] !== c
    ? ((R = JSON.stringify([c, x])), (n[10] = x), (n[11] = c), (n[12] = R))
    : (R = n[12]);
  let z = R,
    B = he[z] ?? _e,
    V = B.isSet ? B.value : P,
    H;
  n[13] !== z || n[14] !== p
    ? ((H = (e) => {
        p.set(ye, (t) => ({ ...t, [z]: { isSet: !0, value: e } }));
      }),
      (n[13] = z),
      (n[14] = p),
      (n[15] = H))
    : (H = n[15]);
  let U = H,
    [Ce, W] = v(be),
    Oe;
  n[16] === r ? (Oe = n[17]) : ((Oe = xe(r)), (n[16] = r), (n[17] = Oe));
  let [Ae, G] = v(Oe),
    {
      hasThreadSelection: Me,
      selectionSource: Ne,
      threadPermissionProfileId: K,
      threadMode: q,
      threadSandboxPolicy: Pe,
    } = De(r),
    Fe = Ae?.selectionSource === Ne ? Ae.mode : null,
    J = I[c],
    Ie;
  n[18] !== I || n[19] !== c
    ? ((Ie = Object.hasOwn(I, c)), (n[18] = I), (n[19] = c), (n[20] = Ie))
    : (Ie = n[20]);
  let Le = Ie,
    Re = Te(c, I, te),
    Y = N != null && (!F || !B.isSet) && (J == null || !de(J, ie)) ? N : Re,
    ze = E.isConfigDataPending || ie.includes(Y),
    Be = (C || E.isConfigDataPending) && (J == null || J === `auto` || J === `granular`),
    Ve =
      r != null &&
      q != null &&
      q !== `custom` &&
      (K == null || K.startsWith(`:`)) &&
      (N != null || (J != null && de(J, ie))) &&
      q !== Y,
    He;
  n[21] !== r || n[22] !== x || n[23] !== E.resolvedConfig || n[24] !== Pe
    ? ((He = (e) => {
        if (r == null) return null;
        let t = b(
          e,
          Pe?.type === `workspaceWrite` ? Pe.writableRoots : x == null ? [] : [x],
          E.resolvedConfig,
        );
        return u(`update-thread-settings-for-next-turn`, {
          conversationId: r,
          threadSettings: {
            approvalPolicy: t.approvalPolicy,
            approvalsReviewer: t.approvalsReviewer,
            ...S(t),
          },
        });
      }),
      (n[21] = r),
      (n[22] = x),
      (n[23] = E.resolvedConfig),
      (n[24] = Pe),
      (n[25] = He))
    : (He = n[25]);
  let X = He,
    Ue;
  n[26] === r
    ? (Ue = n[27])
    : ((Ue = (e) => {
        g.error(`Failed to set thread permissions mode`, {
          safe: { conversationId: r },
          sensitive: { error: e },
        });
      }),
      (n[26] = r),
      (n[27] = Ue));
  let Z = Ue;
  if (ue === `draft`) {
    let e = pe ?? Y,
      t = Ce || Le,
      r = (pe == null && (Be || (!B.isSet && ee))) || (!oe && V == null && ae),
      i = !oe,
      a;
    n[28] !== me || n[29] !== U || n[30] !== W
      ? ((a = (e) => {
          (U(null), me(e), W(!0));
        }),
        (n[28] = me),
        (n[29] = U),
        (n[30] = W),
        (n[31] = a))
      : (a = n[31]);
    let o;
    n[32] !== U || n[33] !== W
      ? ((o = (e) => {
          (U(e), W(!0));
        }),
        (n[32] = U),
        (n[33] = W),
        (n[34] = o))
      : (o = n[34]);
    let s;
    return (
      n[35] !== V ||
      n[36] !== W ||
      n[37] !== e ||
      n[38] !== t ||
      n[39] !== r ||
      n[40] !== i ||
      n[41] !== a ||
      n[42] !== o
        ? ((s = {
            agentMode: e,
            hasSetInitialAgentMode: t,
            isAgentModePending: r,
            permissionProfileId: V,
            shouldSendPermissionOverrides: i,
            setAgentMode: a,
            setHasSetInitialAgentMode: W,
            setPermissionProfileId: o,
          }),
          (n[35] = V),
          (n[36] = W),
          (n[37] = e),
          (n[38] = t),
          (n[39] = r),
          (n[40] = i),
          (n[41] = a),
          (n[42] = o),
          (n[43] = s))
        : (s = n[43]),
      s
    );
  }
  if (ue === `global-default`) {
    let e;
    n[44] !== I ||
    n[45] !== c ||
    n[46] !== F ||
    n[47] !== Z ||
    n[48] !== L ||
    n[49] !== U ||
    n[50] !== X
      ? ((e = (e) => {
          (F && U(null), I[c] !== e && L({ ...I, [c]: e }), X(e)?.catch(Z));
        }),
        (n[44] = I),
        (n[45] = c),
        (n[46] = F),
        (n[47] = Z),
        (n[48] = L),
        (n[49] = U),
        (n[50] = X),
        (n[51] = e))
      : (e = n[51]);
    let t = e,
      i;
    n[52] !== I || n[53] !== Re || n[54] !== c || n[55] !== L
      ? ((i = (e) => {
          e && L({ ...I, [c]: Re });
        }),
        (n[52] = I),
        (n[53] = Re),
        (n[54] = c),
        (n[55] = L),
        (n[56] = i))
      : (i = n[56]);
    let a = i,
      o;
    n[57] !== r || n[58] !== F || n[59] !== Z || n[60] !== U || n[61] !== W
      ? ((o = (e) => {
          if (F) {
            (U(e), W(!0));
            return;
          }
          r != null &&
            u(`update-thread-settings-for-next-turn`, {
              conversationId: r,
              threadSettings: { permissions: e },
            }).catch(Z);
        }),
        (n[57] = r),
        (n[58] = F),
        (n[59] = Z),
        (n[60] = U),
        (n[61] = W),
        (n[62] = o))
      : (o = n[62]);
    let s = o;
    if (r != null && q != null && !ze) {
      let e;
      return (
        n[63] !== t || n[64] !== s || n[65] !== a || n[66] !== q || n[67] !== K
          ? ((e = {
              agentMode: q,
              hasSetInitialAgentMode: !0,
              isAgentModePending: !1,
              permissionProfileId: K,
              shouldSendPermissionOverrides: !1,
              setAgentMode: t,
              setHasSetInitialAgentMode: a,
              setPermissionProfileId: s,
            }),
            (n[63] = t),
            (n[64] = s),
            (n[65] = a),
            (n[66] = q),
            (n[67] = K),
            (n[68] = e))
          : (e = n[68]),
        e
      );
    }
    let l = Le || (F && (B.isSet || P != null)),
      d = Be || (F && !B.isSet && ee) || (F && !oe && V == null && ae),
      f = F ? V : Ve ? null : K,
      p = Ve || (!oe && (F || (K == null && q !== `custom`))),
      m;
    return (
      n[69] !== Y ||
      n[70] !== t ||
      n[71] !== s ||
      n[72] !== a ||
      n[73] !== l ||
      n[74] !== d ||
      n[75] !== f ||
      n[76] !== p
        ? ((m = {
            agentMode: Y,
            hasSetInitialAgentMode: l,
            isAgentModePending: d,
            permissionProfileId: f,
            shouldSendPermissionOverrides: p,
            setAgentMode: t,
            setHasSetInitialAgentMode: a,
            setPermissionProfileId: s,
          }),
          (n[69] = Y),
          (n[70] = t),
          (n[71] = s),
          (n[72] = a),
          (n[73] = l),
          (n[74] = d),
          (n[75] = f),
          (n[76] = p),
          (n[77] = m))
        : (m = n[77]),
      m
    );
  }
  if (r == null) throw Error(`Thread permission state requires a conversation ID`);
  let We = Fe ?? q ?? re,
    Ge = Fe != null || Me,
    Ke = Fe == null && q == null && (C || E.isConfigDataPending),
    qe = Fe != null,
    Q;
  n[78] !== Z || n[79] !== Ne || n[80] !== G || n[81] !== X
    ? ((Q = (e) => {
        (G({ mode: e, selectionSource: Ne }),
          X(e)?.catch((e) => {
            (G(null), Z(e));
          }));
      }),
      (n[78] = Z),
      (n[79] = Ne),
      (n[80] = G),
      (n[81] = X),
      (n[82] = Q))
    : (Q = n[82]);
  let $;
  n[83] !== r || n[84] !== Z || n[85] !== G
    ? (($ = (e) => {
        (G(null),
          u(`update-thread-settings-for-next-turn`, {
            conversationId: r,
            threadSettings: { permissions: e },
          }).catch(Z));
      }),
      (n[83] = r),
      (n[84] = Z),
      (n[85] = G),
      (n[86] = $))
    : ($ = n[86]);
  let Je;
  return (
    n[87] !== We ||
    n[88] !== Ge ||
    n[89] !== Ke ||
    n[90] !== qe ||
    n[91] !== Q ||
    n[92] !== $ ||
    n[93] !== K
      ? ((Je = {
          agentMode: We,
          hasSetInitialAgentMode: Ge,
          isAgentModePending: Ke,
          permissionProfileId: K,
          shouldSendPermissionOverrides: qe,
          setAgentMode: Q,
          setHasSetInitialAgentMode: je,
          setPermissionProfileId: $,
        }),
        (n[87] = We),
        (n[88] = Ge),
        (n[89] = Ke),
        (n[90] = qe),
        (n[91] = Q),
        (n[92] = $),
        (n[93] = K),
        (n[94] = Je))
      : (Je = n[94]),
    Je
  );
}
function je() {}
function G(e) {
  let t = (0, ge.c)(30),
    { conversationId: n, cwdOverride: r, hostId: i, stateScope: a } = e,
    o = a === void 0 ? `composer` : a,
    s;
  t[0] !== n || t[1] !== o
    ? ((s = { conversationId: n, stateScope: o }), (t[0] = n), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let c = Ee(s),
    [l, u] = v(N),
    [d, f] = v(V),
    p;
  t[3] === n ? (p = t[4]) : ((p = n == null ? V : H(n)), (t[3] = n), (t[4] = p));
  let [m, h] = v(p),
    { hasThreadSelection: g, threadMode: _, threadPreferredNonFullAccessMode: y } = De(n),
    b;
  t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== o
    ? ((b = { conversationId: n, cwdOverride: r, hostId: i, stateScope: o }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = o),
      (t[9] = b))
    : (b = t[9]);
  let { agentMode: x } = Ae(b),
    S;
  t[10] !== i || t[11] !== l ? ((S = P(i, l)), (t[10] = i), (t[11] = l), (t[12] = S)) : (S = t[12]);
  let C = S;
  if (c === `draft`) {
    let e = d.isSet ? d.value : C,
      n;
    t[13] === f
      ? (n = t[14])
      : ((n = (e) => {
          f({ isSet: !0, value: e });
        }),
        (t[13] = f),
        (t[14] = n));
    let r;
    return (
      t[15] !== e || t[16] !== n
        ? ((r = { preferredNonFullAccessMode: e, setPreferredNonFullAccessMode: n }),
          (t[15] = e),
          (t[16] = n),
          (t[17] = r))
        : (r = t[17]),
      r
    );
  }
  if (c === `global-default`) {
    let e;
    t[18] !== i || t[19] !== l || t[20] !== u
      ? ((e = (e) => {
          u({ ...l, [i]: e });
        }),
        (t[18] = i),
        (t[19] = l),
        (t[20] = u),
        (t[21] = e))
      : (e = t[21]);
    let n;
    return (
      t[22] !== C || t[23] !== e
        ? ((n = { preferredNonFullAccessMode: C, setPreferredNonFullAccessMode: e }),
          (t[22] = C),
          (t[23] = e),
          (t[24] = n))
        : (n = t[24]),
      n
    );
  }
  let w = m.isSet ? m.value : g && x === _ ? y : null,
    T;
  t[25] === h
    ? (T = t[26])
    : ((T = (e) => {
        h({ isSet: !0, value: e });
      }),
      (t[25] = h),
      (t[26] = T));
  let E;
  return (
    t[27] !== w || t[28] !== T
      ? ((E = { preferredNonFullAccessMode: w, setPreferredNonFullAccessMode: T }),
        (t[27] = w),
        (t[28] = T),
        (t[29] = E))
      : (E = t[29]),
    E
  );
}
function Me(e, t) {
  (t.set(ve, null), e.set(ye, {}), t.set(V, B), t.set(be, !1));
}
function Ne(e, t, n) {
  e.set(H(t), { isSet: !0, value: K(e, n) });
}
function K(e, t) {
  let n = e.get(V);
  return n.isSet ? n.value : P(t, e.get(N));
}
export {
  ce as _,
  Oe as a,
  Ae as c,
  me as d,
  he as f,
  L as g,
  de as h,
  Me as i,
  fe as l,
  z as m,
  Ne as n,
  ke as o,
  I as p,
  Se as r,
  G as s,
  Ce as t,
  pe as u,
  le as v,
};
//# sourceMappingURL=use-permissions-mode.js.map
