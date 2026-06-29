import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  $h as i,
  AB as a,
  AV as o,
  Ai as s,
  BV as c,
  DL as l,
  DN as u,
  Di as d,
  Ei as f,
  FB as p,
  GN as m,
  Gi as h,
  HF as g,
  Hh as _,
  JV as v,
  Lj as y,
  Nh as b,
  ON as x,
  Op as S,
  PB as C,
  QP as w,
  Rj as T,
  Ti as ee,
  Uh as E,
  VN as D,
  Vh as O,
  Zi as k,
  aP as te,
  bF as A,
  cM as j,
  eg as M,
  fu as N,
  gV as P,
  gg as F,
  hg as I,
  iF as L,
  jh as R,
  lF as ne,
  ng as z,
  oP as B,
  pu as re,
  qV as V,
  qi as ie,
  sF as H,
  tP as U,
  tg as W,
  uM as ae,
  va as G,
  wi as K,
  wm as q,
  xa as J,
  zV as Y,
  zh as oe,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Dl as se,
  Tl as ce,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  Dl as X,
  Jl as le,
  Kl as ue,
  Ol as de,
  Xl as fe,
  Yl as pe,
  Zl as me,
  au as he,
  bl as ge,
  cu as _e,
  ou as ve,
  ql as ye,
  ru as be,
  su as xe,
  yl as Se,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  a as Ce,
  o as we,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62.js";
function Te({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) {
  return JSON.stringify({ cwd: e ?? null, enabled: t, hostConfig: n, operationSource: r });
}
function Ee({ cwd: e, enabled: t, hostConfig: n, operationSource: r, query: i }) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
    query: i,
  });
}
var De,
  Oe,
  ke = e(() => {
    (a(),
      r(),
      B(),
      b(),
      z(),
      M(),
      (De = P(
        w,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) =>
          W(e, i(n), n, r, { enabled: t }),
        { key: Te },
      )),
      (Oe = P(
        w,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r, query: a }, { get: o }) => {
          let s = o(De, { cwd: e, enabled: t, hostConfig: n, operationSource: r }).data;
          return R(
            `search-branches`,
            s,
            s == null ? null : { root: s.root, operationSource: r, query: a, limit: 20 },
            i(n),
            n,
            { enabled: t, select: (e) => e.branches, staleTime: te.FIVE_SECONDS },
          );
        },
        { key: Ee },
      )));
  });
function Ae(e, t, n, r) {
  let i = (0, je.c)(13),
    a;
  i[0] === r ? (a = i[1]) : ((a = r === void 0 ? {} : r), (i[0] = r), (i[1] = a));
  let o, s;
  i[2] === a
    ? ((o = i[3]), (s = i[4]))
    : (({ staleTime: s, ...o } = a), (i[2] = a), (i[3] = o), (i[4] = s));
  let c = String(e),
    u;
  i[5] === c ? (u = i[6]) : ((u = l(c)), (i[5] = c), (i[6] = u));
  let d;
  i[7] !== n || i[8] !== u
    ? ((d = { cwd: u, operationSource: n }), (i[7] = n), (i[8] = u), (i[9] = d))
    : (d = i[9]);
  let f = s ?? te.FIVE_SECONDS,
    p;
  return (
    i[10] !== o || i[11] !== f
      ? ((p = { staleTime: f, ...o }), (i[10] = o), (i[11] = f), (i[12] = p))
      : (p = i[12]),
    O(e, t, `status-summary`, d, n, p)
  );
}
var je,
  Me = e(() => {
    ((je = V()), A(), B(), b());
  });
function Ne(e, t, n, r) {
  let i = (0, Fe.c)(4),
    a;
  i[0] === n
    ? (a = i[1])
    : ((a = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (i[0] = n),
      (i[1] = a));
  let o;
  return (
    i[2] === r
      ? (o = i[3])
      : ((o = { select: Pe, staleTime: te.FIVE_SECONDS, ...r }), (i[2] = r), (i[3] = o)),
    O(e, t, `recent-branches`, a, n, o)
  );
}
function Pe(e) {
  return e.branches;
}
var Fe,
  Ie = e(() => {
    ((Fe = V()), B(), b());
  });
function Le(e, t, n, r) {
  let a = (0, Re.c)(23),
    o = Y(),
    { data: s } = E(e, t, n),
    c;
  a[0] === t ? (c = a[1]) : ((c = i(t)), (a[0] = t), (a[1] = c));
  let l = c,
    u = e ?? null,
    d;
  a[2] !== t.id || a[3] !== u
    ? ((d = [`vscode`, `git-checkout-branch`, u, t.id]), (a[2] = t.id), (a[3] = u), (a[4] = d))
    : (d = a[4]);
  let f;
  a[5] !== s || a[6] !== l || a[7] !== r || a[8] !== o
    ? ((f = async (e, t, n, i, a) => {
        (s &&
          e?.status === `success` &&
          oe(o, { commonDir: s.commonDir, root: s.root }, { changeType: `head`, hostKey: l }),
          r?.onSettled && (await r.onSettled(e, t, n, i, a)));
      }),
      (a[5] = s),
      (a[6] = l),
      (a[7] = r),
      (a[8] = o),
      (a[9] = f))
    : (f = a[9]);
  let p;
  a[10] !== n || a[11] !== r || a[12] !== d || a[13] !== f
    ? ((p = { source: n, mutationKey: d, ...r, onSettled: f }),
      (a[10] = n),
      (a[11] = r),
      (a[12] = d),
      (a[13] = f),
      (a[14] = p))
    : (p = a[14]);
  let m = U(`git-checkout-branch`, p),
    h,
    g;
  a[15] !== t.id || a[16] !== m
    ? ((h = (e, n) => {
        m.mutate({ ...e, hostId: t.id }, n);
      }),
      (g = (e, n) => m.mutateAsync({ ...e, hostId: t.id }, n)),
      (a[15] = t.id),
      (a[16] = m),
      (a[17] = h),
      (a[18] = g))
    : ((h = a[17]), (g = a[18]));
  let _;
  return (
    a[19] !== m || a[20] !== h || a[21] !== g
      ? ((_ = { ...m, mutate: h, mutateAsync: g }),
        (a[19] = m),
        (a[20] = h),
        (a[21] = g),
        (a[22] = _))
      : (_ = a[22]),
    _
  );
}
var Re,
  ze = e(() => {
    ((Re = V()), o(), b(), M(), _(), n());
  });
function Be(e, t, n, r) {
  let a = (0, Ve.c)(23),
    o = Y(),
    { data: s } = E(e, t, n),
    c;
  a[0] === t ? (c = a[1]) : ((c = i(t)), (a[0] = t), (a[1] = c));
  let l = c,
    u = e ?? null,
    d;
  a[2] !== t.id || a[3] !== u
    ? ((d = [`vscode`, `git-create-branch`, u, t.id]), (a[2] = t.id), (a[3] = u), (a[4] = d))
    : (d = a[4]);
  let f;
  a[5] !== s || a[6] !== l || a[7] !== r || a[8] !== o
    ? ((f = async (e, t, n, i, a) => {
        (s && oe(o, s, { changeType: n?.mode === `synced` ? `synced-branch` : `head`, hostKey: l }),
          r?.onSettled && (await r.onSettled(e, t, n, i, a)));
      }),
      (a[5] = s),
      (a[6] = l),
      (a[7] = r),
      (a[8] = o),
      (a[9] = f))
    : (f = a[9]);
  let p;
  a[10] !== n || a[11] !== r || a[12] !== d || a[13] !== f
    ? ((p = { source: n, mutationKey: d, ...r, onSettled: f }),
      (a[10] = n),
      (a[11] = r),
      (a[12] = d),
      (a[13] = f),
      (a[14] = p))
    : (p = a[14]);
  let m = U(`git-create-branch`, p),
    h,
    g;
  a[15] !== t.id || a[16] !== m
    ? ((h = (e, n) => {
        m.mutate({ ...e, hostId: t.id }, n);
      }),
      (g = (e, n) => m.mutateAsync({ ...e, hostId: t.id }, n)),
      (a[15] = t.id),
      (a[16] = m),
      (a[17] = h),
      (a[18] = g))
    : ((h = a[17]), (g = a[18]));
  let _;
  return (
    a[19] !== m || a[20] !== h || a[21] !== g
      ? ((_ = { ...m, mutate: h, mutateAsync: g }),
        (a[19] = m),
        (a[20] = h),
        (a[21] = g),
        (a[22] = _))
      : (_ = a[22]),
    _
  );
}
var Ve,
  He = e(() => {
    ((Ve = V()), o(), b(), M(), _(), n());
  });
function Ue(e) {
  return Array.from(e)
    .filter((e) => !/\s/u.test(e) && !We.has(e))
    .join(``);
}
var We,
  Ge = e(() => {
    We = new Set([`~`, `^`, `:`, `?`, `*`, `[`, `]`, `\\`]);
  });
function Ke(e) {
  let t = (0, et.c)(86),
    {
      gitRoot: n,
      hostConfig: r,
      localConversationId: i,
      shouldShow: a,
      side: o,
      align: s,
      renderStaticBranch: c,
      renderControl: u,
      onOpenChange: d,
    } = e,
    f = o === void 0 ? `top` : o,
    m = s === void 0 ? `end` : s,
    g = p(w),
    _ = ne(),
    [v, y] = (0, Z.useState)(!1),
    [b, x] = (0, Z.useState)(!1),
    [S, T] = (0, Z.useState)(!1),
    [ee, E] = (0, Z.useState)(!1),
    [D, O] = (0, Z.useState)(!1),
    [k, te] = (0, Z.useState)(0),
    [A, j] = (0, Z.useState)(null),
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = []), (t[0] = M)) : (M = t[0]);
  let [N, P] = (0, Z.useState)(M),
    [I, L] = (0, Z.useState)(`idle`),
    R;
  t[1] !== n || t[2] !== r || t[3] !== a
    ? ((R = {
        cwd: n,
        enabled: a,
        hostConfig: r,
        operationSource: $,
        refetchOnWindowFocus: `always`,
        staleTime: null,
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = R))
    : (R = t[4]);
  let z = C(ce, R),
    B = z.data?.trim() ?? ``,
    re = a && B.length > 0,
    V = C(q, i),
    ie = D || I !== `idle`,
    H = Le(n, r, $),
    U = Be(n, r, $),
    W;
  t[5] === n ? (W = t[6]) : ((W = n == null ? null : l(n)), (t[5] = n), (t[6] = W));
  let G = W,
    K;
  t[7] !== G || t[8] !== r
    ? ((K = G == null ? null : { cwd: G, hostId: r.id }), (t[7] = G), (t[8] = r), (t[9] = K))
    : (K = t[9]);
  let J = K,
    Y = H.isPending || U.isPending,
    oe = _.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    se;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = () => {
        y(!1);
      }),
      (t[10] = se))
    : (se = t[10]);
  let X = se,
    ue;
  t[11] !== _ || t[12] !== g
    ? ((ue = (e) => {
        g.get(ae).danger(
          _.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[11] = _),
      (t[12] = g),
      (t[13] = ue))
    : (ue = t[13]);
  let de = ue,
    fe;
  t[14] !== _ || t[15] !== g
    ? ((fe = (e) => {
        g.get(ae).danger(
          _.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[14] = _),
      (t[15] = g),
      (t[16] = fe))
    : (fe = t[16]);
  let pe = fe,
    me;
  t[17] === X
    ? (me = t[18])
    : ((me = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return t === `blocked-by-working-tree-changes`
          ? (P(n ?? []), j(r), X(), E(!1), T(!0), !0)
          : !1;
      }),
      (t[17] = X),
      (t[18] = me));
  let he = me,
    ge = async (e) => {
      if (!(Y || n == null)) {
        if (e === B) {
          X();
          return;
        }
        try {
          let t = await H.mutateAsync({ cwd: n, branch: e });
          if (t.status === `error`) {
            if (
              he({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            de(t.error);
            return;
          }
          (i != null && F(i, e), X());
        } catch (e) {
          let t = e;
          de(t instanceof Error ? t.message : String(t));
        }
      }
    },
    _e;
  t[19] !== H ||
  t[20] !== U ||
  t[21] !== n ||
  t[22] !== Y ||
  t[23] !== i ||
  t[24] !== he ||
  t[25] !== de ||
  t[26] !== pe
    ? ((_e = async (e) => {
        if (!(Y || n == null))
          try {
            let t = await U.mutateAsync({ cwd: n, branch: e, mode: `worktree`, failIfExists: !0 });
            if (t.status === `error`) {
              pe(t.error);
              return;
            }
            let r = await H.mutateAsync({ cwd: n, branch: e });
            if (r.status === `error`) {
              if (
                he({
                  errorType: r.errorType,
                  conflictedPaths: r.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (de(r.error), E(!1));
              return;
            }
            (i != null && F(i, e), E(!1));
          } catch (e) {
            let t = e;
            pe(t instanceof Error ? t.message : String(t));
          }
      }),
      (t[19] = H),
      (t[20] = U),
      (t[21] = n),
      (t[22] = Y),
      (t[23] = i),
      (t[24] = he),
      (t[25] = de),
      (t[26] = pe),
      (t[27] = _e))
    : (_e = t[27]);
  let ve = _e,
    ye;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = () => {
        (O(!1), L(`idle`), P([]), j(null));
      }),
      (t[28] = ye))
    : (ye = t[28]);
  let xe = ye,
    Se;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (e) => {
        (T(e), e || (P([]), j(null)));
      }),
      (t[29] = Se))
    : (Se = t[29]);
  let Ce = Se,
    we;
  t[30] !== J || t[31] !== g
    ? ((we = () => {
        J != null && (g.set(be, J, ``), L(`idle`), te(qe), T(!1), O(!0));
      }),
      (t[30] = J),
      (t[31] = g),
      (t[32] = we))
    : (we = t[32]);
  let Te = we,
    Ee;
  t[33] !== ge || t[34] !== ve || t[35] !== xe || t[36] !== A
    ? ((Ee = (e) => {
        if (e === `success` && A != null) {
          let e = A;
          if ((xe(), e.type === `checkout`)) {
            ge(e.branch);
            return;
          }
          ve(e.branch);
          return;
        }
        L(e);
      }),
      (t[33] = ge),
      (t[34] = ve),
      (t[35] = xe),
      (t[36] = A),
      (t[37] = Ee))
    : (Ee = t[37]);
  let De = Ee;
  if (!re)
    return a && z.isSuccess
      ? u({ currentBranch: null, disabled: !1, isPending: !1, switchTooltipText: oe })
      : null;
  if (n == null) return c?.({ currentBranch: B }) ?? null;
  let Oe = h,
    ke;
  t[38] === d
    ? (ke = t[39])
    : ((ke = (e) => {
        (e && x(!0), y(e), d?.(e));
      }),
      (t[38] = d),
      (t[39] = ke));
  let Ae = u({ currentBranch: B, disabled: Y, isPending: Y, switchTooltipText: oe }),
    je;
  t[40] !== ge ||
  t[41] !== X ||
  t[42] !== B ||
  t[43] !== n ||
  t[44] !== b ||
  t[45] !== r ||
  t[46] !== Y ||
  t[47] !== v
    ? ((je = b
        ? (0, Q.jsx)(Je, {
            currentBranch: B,
            gitRoot: n,
            hostConfig: r,
            isOpen: v,
            disabled: Y,
            onCheckout: ge,
            onClose: X,
            onOpenCreate: () => {
              (X(), E(!0));
            },
          })
        : null),
      (t[40] = ge),
      (t[41] = X),
      (t[42] = B),
      (t[43] = n),
      (t[44] = b),
      (t[45] = r),
      (t[46] = Y),
      (t[47] = v),
      (t[48] = je))
    : (je = t[48]);
  let Me;
  t[49] !== Oe ||
  t[50] !== m ||
  t[51] !== v ||
  t[52] !== f ||
  t[53] !== ke ||
  t[54] !== Ae ||
  t[55] !== je
    ? ((Me = (0, Q.jsx)(Oe, {
        side: f,
        open: v,
        align: m,
        onOpenChange: ke,
        triggerButton: Ae,
        children: je,
      })),
      (t[49] = Oe),
      (t[50] = m),
      (t[51] = v),
      (t[52] = f),
      (t[53] = ke),
      (t[54] = Ae),
      (t[55] = je),
      (t[56] = Me))
    : (Me = t[56]);
  let Ne;
  t[57] !== V || t[58] !== ve || t[59] !== n || t[60] !== r || t[61] !== ee || t[62] !== Y
    ? ((Ne = ee
        ? (0, Q.jsx)(Ye, {
            open: ee,
            onOpenChange: E,
            conversationTitle: V,
            gitRoot: n,
            hostConfig: r,
            isPending: Y,
            onSubmit: ve,
          })
        : null),
      (t[57] = V),
      (t[58] = ve),
      (t[59] = n),
      (t[60] = r),
      (t[61] = ee),
      (t[62] = Y),
      (t[63] = Ne))
    : (Ne = t[63]);
  let Pe;
  t[64] !== N ||
  t[65] !== n ||
  t[66] !== Te ||
  t[67] !== Ce ||
  t[68] !== r ||
  t[69] !== S ||
  t[70] !== A?.branch
    ? ((Pe =
        S && n != null
          ? (0, Q.jsx)(Xe, {
              open: S,
              onOpenChange: Ce,
              conflictFiles: N,
              gitRoot: n,
              hostConfig: r,
              targetBranch: A?.branch ?? null,
              onContinue: Te,
            })
          : null),
      (t[64] = N),
      (t[65] = n),
      (t[66] = Te),
      (t[67] = Ce),
      (t[68] = r),
      (t[69] = S),
      (t[70] = A?.branch),
      (t[71] = Pe))
    : (Pe = t[71]);
  let Fe;
  t[72] !== k ||
  t[73] !== G ||
  t[74] !== xe ||
  t[75] !== De ||
  t[76] !== r ||
  t[77] !== ie ||
  t[78] !== D ||
  t[79] !== i
    ? ((Fe =
        ie && G != null
          ? (0, Q.jsx)(
              le,
              {
                open: D,
                onOpenChange: O,
                conversationId: i,
                cwd: G,
                hostConfig: r,
                onStatusChange: De,
                onRequestReset: xe,
              },
              k,
            )
          : null),
      (t[72] = k),
      (t[73] = G),
      (t[74] = xe),
      (t[75] = De),
      (t[76] = r),
      (t[77] = ie),
      (t[78] = D),
      (t[79] = i),
      (t[80] = Fe))
    : (Fe = t[80]);
  let Ie;
  return (
    t[81] !== Me || t[82] !== Ne || t[83] !== Pe || t[84] !== Fe
      ? ((Ie = (0, Q.jsxs)(Q.Fragment, { children: [Me, Ne, Pe, Fe] })),
        (t[81] = Me),
        (t[82] = Ne),
        (t[83] = Pe),
        (t[84] = Fe),
        (t[85] = Ie))
      : (Ie = t[85]),
    Ie
  );
}
function qe(e) {
  return e + 1;
}
function Je(e) {
  let t = (0, et.c)(53),
    {
      currentBranch: n,
      gitRoot: r,
      hostConfig: i,
      isOpen: a,
      disabled: o,
      onCheckout: s,
      onClose: c,
      onOpenCreate: l,
    } = e,
    u = ne(),
    [d, f] = (0, Z.useState)(``),
    p = re(d, 200),
    { data: m, refetch: h } = Ae(r, i, $),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { enabled: !0 }), (t[0] = g))
    : (g = t[0]);
  let { data: _, isLoading: v, isFetching: b, isError: x, refetch: S } = Ne(r, i, $, g),
    w = _ === void 0 ? [] : _,
    T;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { enabled: !0 }), (t[1] = T))
    : (T = t[1]);
  let { data: ee, refetch: E } = ye(r, i, $, T),
    D,
    O;
  (t[2] !== a || t[3] !== S || t[4] !== E || t[5] !== h
    ? ((D = () => {
        a && Promise.all([S(), E(), h()]);
      }),
      (O = [a, S, E, h]),
      (t[2] = a),
      (t[3] = S),
      (t[4] = E),
      (t[5] = h),
      (t[6] = D),
      (t[7] = O))
    : ((D = t[6]), (O = t[7])),
    (0, Z.useEffect)(D, O));
  let k;
  t[8] === d ? (k = t[9]) : ((k = d.trim()), (t[8] = d), (t[9] = k));
  let te = k,
    A;
  t[10] === p ? (A = t[11]) : ((A = p.trim()), (t[10] = p), (t[11] = A));
  let j = A,
    M = te !== j,
    N = j.length > 0,
    P;
  t[12] !== r || t[13] !== i || t[14] !== j || t[15] !== N
    ? ((P = { cwd: r, hostConfig: i, operationSource: $, query: j, enabled: N }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = j),
      (t[15] = N),
      (t[16] = P))
    : (P = t[16]);
  let { data: F, isFetching: I, isError: L, refetch: R } = C(Oe, P),
    z = Ze({ branches: w, currentBranch: n, defaultBranch: ee }),
    B = !v && !b && !x && w.length === 0,
    V = $e(m),
    U;
  t[17] !== B || t[18] !== u
    ? ((U = B
        ? u.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[17] = B),
      (t[18] = u),
      (t[19] = U))
    : (U = t[19]);
  let W = U,
    ae = v || (b && z.length === 0),
    G = M || I,
    K;
  t[20] === S
    ? (K = t[21])
    : ((K = () => {
        S();
      }),
      (t[20] = S),
      (t[21] = K));
  let q;
  t[22] === R
    ? (q = t[23])
    : ((q = () => {
        R();
      }),
      (t[22] = R),
      (t[23] = q));
  let J;
  t[24] !== n || t[25] !== V
    ? ((J = (e) =>
        e === n && V > 0
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground`,
              children: (0, Q.jsx)(H, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: V },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = V),
      (t[26] = J))
    : (J = t[26]);
  let Y;
  t[27] !== n ||
  t[28] !== o ||
  t[29] !== x ||
  t[30] !== L ||
  t[31] !== s ||
  t[32] !== c ||
  t[33] !== z ||
  t[34] !== d ||
  t[35] !== F ||
  t[36] !== ae ||
  t[37] !== G ||
  t[38] !== K ||
  t[39] !== q ||
  t[40] !== J
    ? ((Y = (0, Q.jsx)(Se, {
        branches: z,
        selectedBranch: n,
        disabled: o,
        isError: x,
        isLoading: ae,
        isSearchError: L,
        isSearchLoading: G,
        onClose: c,
        onRetry: K,
        onRetrySearch: q,
        onSearchQueryChange: f,
        onSelectBranch: s,
        renderBranchSubText: J,
        searchedBranches: F,
        searchQuery: d,
      })),
      (t[27] = n),
      (t[28] = o),
      (t[29] = x),
      (t[30] = L),
      (t[31] = s),
      (t[32] = c),
      (t[33] = z),
      (t[34] = d),
      (t[35] = F),
      (t[36] = ae),
      (t[37] = G),
      (t[38] = K),
      (t[39] = q),
      (t[40] = J),
      (t[41] = Y))
    : (Y = t[41]);
  let oe;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, Q.jsx)(ie.Separator, {})), (t[42] = oe))
    : (oe = t[42]);
  let se = B || o,
    ce;
  t[43] === l
    ? (ce = t[44])
    : ((ce = (e) => {
        (e.preventDefault(), l());
      }),
      (t[43] = l),
      (t[44] = ce));
  let X;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Q.jsx)(H, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[45] = X))
    : (X = t[45]);
  let le;
  t[46] !== W || t[47] !== se || t[48] !== ce
    ? ((le = (0, Q.jsx)(ie.Item, {
        LeftIcon: y,
        disabled: se,
        tooltipText: W,
        onSelect: ce,
        children: X,
      })),
      (t[46] = W),
      (t[47] = se),
      (t[48] = ce),
      (t[49] = le))
    : (le = t[49]);
  let ue;
  return (
    t[50] !== Y || t[51] !== le
      ? ((ue = (0, Q.jsxs)(Q.Fragment, { children: [Y, oe, le] })),
        (t[50] = Y),
        (t[51] = le),
        (t[52] = ue))
      : (ue = t[52]),
    ue
  );
}
function Ye(e) {
  let t = (0, et.c)(57),
    {
      open: n,
      onOpenChange: r,
      conversationTitle: i,
      gitRoot: a,
      hostConfig: o,
      isPending: s,
      onSubmit: c,
    } = e,
    l = ne(),
    p = m(g.branchPrefix),
    h;
  t[0] !== p || t[1] !== i
    ? ((h = fe({ branchPrefix: p, conversationTitle: i })), (t[0] = p), (t[1] = i), (t[2] = h))
    : (h = t[2]);
  let [_, v] = (0, Z.useState)(h),
    y = n && a != null,
    b;
  t[3] === y ? (b = t[4]) : ((b = { enabled: y }), (t[3] = y), (t[4] = b));
  let { data: x, isLoading: S, isFetching: C, isError: w } = Ne(a, o, $, b),
    T,
    E,
    D,
    O;
  if (t[5] !== _ || t[6] !== x) {
    T = x === void 0 ? [] : x;
    let e = Ze({ branches: T, currentBranch: ``, defaultBranch: null });
    ((O = _.trim()),
      (E = O.endsWith(`/`)),
      (D = O.length > 0 && e.includes(O)),
      (t[5] = _),
      (t[6] = x),
      (t[7] = T),
      (t[8] = E),
      (t[9] = D),
      (t[10] = O));
  } else ((T = t[7]), (E = t[8]), (D = t[9]), (O = t[10]));
  let k = D,
    te = !S && !C && !w && T.length === 0,
    A = !s && !S && !C && !te && O.length > 0 && !E && !k && a != null,
    j;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(d, {
        children: (0, Q.jsx)(f, {
          title: (0, Q.jsx)(H, {
            id: `composer.footer.branchSwitch.createDialog.title`,
            defaultMessage: `Create and checkout branch`,
            description: `Title for dialog that creates and checks out a new branch from the composer footer`,
          }),
        }),
      })),
      (t[11] = j))
    : (j = t[11]);
  let M;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(X, {})), (t[12] = M))
    : (M = t[12]);
  let N;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        v(Ue(e.target.value));
      }),
      (t[13] = N))
    : (N = t[13]);
  let P;
  t[14] !== A || t[15] !== c || t[16] !== O
    ? ((P = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), !A)) return;
          c(O);
        }
      }),
      (t[14] = A),
      (t[15] = c),
      (t[16] = O),
      (t[17] = P))
    : (P = t[17]);
  let F;
  t[18] === l
    ? (F = t[19])
    : ((F = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[18] = l),
      (t[19] = F));
  let I;
  t[20] === l
    ? (I = t[21])
    : ((I = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[20] = l),
      (t[21] = I));
  let L;
  t[22] !== _ || t[23] !== F || t[24] !== I || t[25] !== P
    ? ((L = (0, Q.jsx)(`input`, {
        autoFocus: !0,
        className: `h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground`,
        value: _,
        onChange: N,
        onKeyDown: P,
        placeholder: F,
        "aria-label": I,
      })),
      (t[22] = _),
      (t[23] = F),
      (t[24] = I),
      (t[25] = P),
      (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] !== k || t[28] !== E || t[29] !== s
    ? ((R = E
        ? (0, Q.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, Q.jsx)(H, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : k && !s
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-token-error-foreground`,
              children: (0, Q.jsx)(H, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (t[27] = k),
      (t[28] = E),
      (t[29] = s),
      (t[30] = R))
    : (R = t[30]);
  let z;
  t[31] !== L || t[32] !== R
    ? ((z = (0, Q.jsxs)(d, { className: `flex flex-col gap-2`, children: [M, L, R] })),
      (t[31] = L),
      (t[32] = R),
      (t[33] = z))
    : (z = t[33]);
  let B;
  t[34] === r
    ? (B = t[35])
    : ((B = () => {
        r(!1);
      }),
      (t[34] = r),
      (t[35] = B));
  let re;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Q.jsx)(H, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[36] = re))
    : (re = t[36]);
  let V;
  t[37] === B
    ? (V = t[38])
    : ((V = (0, Q.jsx)(u, { color: `secondary`, onClick: B, children: re })),
      (t[37] = B),
      (t[38] = V));
  let ie = !A,
    U;
  t[39] !== c || t[40] !== O
    ? ((U = () => {
        c(O);
      }),
      (t[39] = c),
      (t[40] = O),
      (t[41] = U))
    : (U = t[41]);
  let W;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Q.jsx)(H, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[42] = W))
    : (W = t[42]);
  let ae;
  t[43] !== s || t[44] !== ie || t[45] !== U
    ? ((ae = (0, Q.jsx)(u, {
        color: `primary`,
        disabled: ie,
        loading: s,
        onClick: U,
        children: W,
      })),
      (t[43] = s),
      (t[44] = ie),
      (t[45] = U),
      (t[46] = ae))
    : (ae = t[46]);
  let q;
  t[47] !== V || t[48] !== ae
    ? ((q = (0, Q.jsx)(d, { children: (0, Q.jsxs)(ee, { children: [V, ae] }) })),
      (t[47] = V),
      (t[48] = ae),
      (t[49] = q))
    : (q = t[49]);
  let J;
  t[50] !== z || t[51] !== q
    ? ((J = (0, Q.jsxs)(K, { "data-codex-branch-create-dialog": ``, children: [j, z, q] })),
      (t[50] = z),
      (t[51] = q),
      (t[52] = J))
    : (J = t[52]);
  let Y;
  return (
    t[53] !== r || t[54] !== n || t[55] !== J
      ? ((Y = (0, Q.jsx)(G, { size: `feature`, open: n, onOpenChange: r, children: J })),
        (t[53] = r),
        (t[54] = n),
        (t[55] = J),
        (t[56] = Y))
      : (Y = t[56]),
    Y
  );
}
function Xe(e) {
  let t = (0, et.c)(61),
    {
      open: n,
      onOpenChange: r,
      conflictFiles: i,
      gitRoot: a,
      hostConfig: o,
      targetBranch: s,
      onContinue: c,
    } = e,
    p = ne(),
    { data: m } = Ae(a, o, $),
    h;
  t[0] === a ? (h = t[1]) : ((h = l(a)), (t[0] = a), (t[1] = h));
  let g;
  t[2] === h
    ? (g = t[3])
    : ((g = { cwd: h, includeUntrackedFiles: !1, operationSource: $, source: `staged` }),
      (t[2] = h),
      (t[3] = g));
  let _;
  t[4] === n
    ? (_ = t[5])
    : ((_ = { enabled: n, staleTime: te.FIVE_SECONDS }), (t[4] = n), (t[5] = _));
  let { data: v } = O(a, o, `review-summary`, g, $, _),
    y;
  t[6] === a ? (y = t[7]) : ((y = l(a)), (t[6] = a), (t[7] = y));
  let b;
  t[8] === y
    ? (b = t[9])
    : ((b = { cwd: y, operationSource: $, source: `unstaged` }), (t[8] = y), (t[9] = b));
  let x;
  t[10] === n
    ? (x = t[11])
    : ((x = { enabled: n, staleTime: te.FIVE_SECONDS }), (t[10] = n), (t[11] = x));
  let { data: S } = O(a, o, `review-summary`, b, $, x),
    C,
    w,
    T,
    E,
    D,
    k,
    A,
    j,
    M;
  if (
    t[12] !== i ||
    t[13] !== p ||
    t[14] !== r ||
    t[15] !== n ||
    t[16] !== v ||
    t[17] !== m ||
    t[18] !== s ||
    t[19] !== S
  ) {
    let e = [v, S],
      a = xe(e),
      o = a?.totalAdditions ?? 0,
      c = a?.totalDeletions ?? 0,
      l = o + c > 0,
      u = i.length > 0,
      h;
    t[29] === m ? (h = t[30]) : ((h = $e(m)), (t[29] = m), (t[30] = h));
    let g = h,
      _;
    t[31] !== p || t[32] !== s
      ? ((_ =
          s ??
          p.formatMessage({
            id: `composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback`,
            defaultMessage: `the selected branch`,
            description: `Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable`,
          })),
        (t[31] = p),
        (t[32] = s),
        (t[33] = _))
      : (_ = t[33]);
    let y = _;
    ((T = G),
      (E = `feature`),
      (D = n),
      (k = r),
      (w = K),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, Q.jsx)(d, {
            children: (0, Q.jsx)(f, {
              title: (0, Q.jsx)(H, {
                id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                defaultMessage: `Commit changes to switch branch`,
                description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
              }),
            }),
          })),
          (t[34] = M))
        : (M = t[34]),
      (C = d),
      (A = `text-token-description-foreground`),
      (j = u
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, Q.jsx)(H, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: i.map((t, n) => {
                  let r = ve(t, e);
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-token-foreground`,
                      children: [
                        (0, Q.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, Q.jsx)(Ce, {
                              className: `inline-flex align-middle`,
                              linesAdded: r.linesAdded,
                              linesRemoved: r.linesRemoved,
                            }),
                      ],
                    },
                    `${t}:${n}`,
                  );
                }),
              }),
              (0, Q.jsx)(H, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : l
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children: [
                (0, Q.jsx)(H, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff`,
                  defaultMessage: `Commit`,
                  description: `Body prefix in the uncommitted changes dialog before diff stats`,
                }),
                (0, Q.jsx)(Ce, {
                  className: `inline-flex align-middle`,
                  linesAdded: o,
                  linesRemoved: c,
                }),
                (0, Q.jsx)(H, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff`,
                  defaultMessage: `changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                  description: `Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch`,
                  values: { fileCount: g, branchName: y },
                }),
              ],
            })
          : (0, Q.jsx)(H, {
              id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff`,
              defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
              description: `Body text in the uncommitted changes dialog when diff stats are unavailable`,
              values: { fileCount: g, branchName: y },
            })),
      (t[12] = i),
      (t[13] = p),
      (t[14] = r),
      (t[15] = n),
      (t[16] = v),
      (t[17] = m),
      (t[18] = s),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D),
      (t[25] = k),
      (t[26] = A),
      (t[27] = j),
      (t[28] = M));
  } else
    ((C = t[20]),
      (w = t[21]),
      (T = t[22]),
      (E = t[23]),
      (D = t[24]),
      (k = t[25]),
      (A = t[26]),
      (j = t[27]),
      (M = t[28]));
  let N;
  t[35] !== C || t[36] !== A || t[37] !== j
    ? ((N = (0, Q.jsx)(C, { className: A, children: j })),
      (t[35] = C),
      (t[36] = A),
      (t[37] = j),
      (t[38] = N))
    : (N = t[38]);
  let P;
  t[39] === r
    ? (P = t[40])
    : ((P = () => {
        r(!1);
      }),
      (t[39] = r),
      (t[40] = P));
  let F;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(H, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[41] = F))
    : (F = t[41]);
  let I;
  t[42] === P
    ? (I = t[43])
    : ((I = (0, Q.jsx)(u, { color: `secondary`, onClick: P, children: F })),
      (t[42] = P),
      (t[43] = I));
  let L;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(H, {
        id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
        defaultMessage: `Commit and switch branch…`,
        description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[44] = L))
    : (L = t[44]);
  let R;
  t[45] === c
    ? (R = t[46])
    : ((R = (0, Q.jsx)(u, { color: `primary`, onClick: c, children: L })),
      (t[45] = c),
      (t[46] = R));
  let z;
  t[47] !== I || t[48] !== R
    ? ((z = (0, Q.jsx)(d, { children: (0, Q.jsxs)(ee, { children: [I, R] }) })),
      (t[47] = I),
      (t[48] = R),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] !== w || t[51] !== N || t[52] !== z || t[53] !== M
    ? ((B = (0, Q.jsxs)(w, { children: [M, N, z] })),
      (t[50] = w),
      (t[51] = N),
      (t[52] = z),
      (t[53] = M),
      (t[54] = B))
    : (B = t[54]);
  let re;
  return (
    t[55] !== T || t[56] !== E || t[57] !== D || t[58] !== k || t[59] !== B
      ? ((re = (0, Q.jsx)(T, { size: E, open: D, onOpenChange: k, children: B })),
        (t[55] = T),
        (t[56] = E),
        (t[57] = D),
        (t[58] = k),
        (t[59] = B),
        (t[60] = re))
      : (re = t[60]),
    re
  );
}
function Ze({ branches: e, currentBranch: t, defaultBranch: n }) {
  let r = new Set(),
    i = [];
  return (
    Qe(n, i, r),
    Qe(t, i, r),
    e.forEach((e) => {
      Qe(e, i, r);
    }),
    i
  );
}
function Qe(e, t, n) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
function $e(e) {
  return e?.type === `success` ? Math.max(e.stagedCount, e.unstagedCount) + e.untrackedCount : 0;
}
var et,
  Z,
  Q,
  $,
  tt = e(() => {
    ((et = V()),
      a(),
      A(),
      (Z = t(v(), 1)),
      L(),
      S(),
      I(),
      x(),
      J(),
      s(),
      k(),
      ge(),
      j(),
      we(),
      b(),
      ke(),
      se(),
      Ie(),
      ue(),
      Me(),
      ze(),
      He(),
      T(),
      pe(),
      he(),
      de(),
      me(),
      r(),
      D(),
      B(),
      N(),
      _e(),
      Ge(),
      (Q = c()),
      ($ = `composer_branch_switcher`));
  });
export { Ie as a, Ae as c, Ue as i, Oe as l, tt as n, Ne as o, Ge as r, Me as s, Ke as t, ke as u };
//# sourceMappingURL=git-branch-switcher.js.map
