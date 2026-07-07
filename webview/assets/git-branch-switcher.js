import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bt as n,
  Dt as r,
  El as i,
  Et as a,
  Rt as o,
  St as s,
  Tl as c,
  Wc as l,
  Xs as u,
  _l as d,
  bt as f,
  cl as p,
  di as m,
  ec as h,
  pn as g,
  tc as _,
  vl as v,
  zt as y,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Gl as ee,
  Hl as te,
  Kl as b,
  Lf as x,
  Ql as S,
  Rf as C,
  Ul as ne,
  Vl as w,
  Wl as T,
  cl as E,
  eu as D,
  gl as O,
  hl as re,
  ib as k,
  nb as A,
  nu as j,
  ru as M,
  sl as N,
  tu as P,
} from "./app-initial~app-main~onboarding-page.js";
import {
  O as F,
  S as I,
  w as L,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Ca as R,
  Ra as z,
  Sa as B,
  Sx as V,
  Ta as H,
  Yn as U,
  ca as W,
  da as G,
  ea as ie,
  fa as K,
  na as q,
  qr as ae,
  ua as J,
  wa as Y,
  wx as oe,
  yx as se,
  za as ce,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  $l as le,
  Fi as X,
  Ql as ue,
  Ri as de,
  bu as fe,
  ci as pe,
  fi as me,
  li as he,
  oi as ge,
  si as _e,
  xu as ve,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  L as ye,
  Q as be,
  Z as xe,
  dt as Se,
  gt as Ce,
  z as we,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
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
    (u(),
      y(),
      r(),
      q(),
      H(),
      R(),
      (De = l(
        o,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) =>
          Y(e, B(n), n, r, { enabled: t }),
        { key: Te },
      )),
      (Oe = l(
        o,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r, query: i }, { get: o }) => {
          let s = o(De, { cwd: e, enabled: t, hostConfig: n, operationSource: r }).data;
          return ie(
            `search-branches`,
            s,
            s == null ? null : { root: s.root, operationSource: r, query: i, limit: 20 },
            B(n),
            n,
            { enabled: t, select: (e) => e.branches, staleTime: a.FIVE_SECONDS },
          );
        },
        { key: Ee },
      )));
  });
function Ae(e, t, n, r) {
  let i = (0, je.c)(13),
    o;
  i[0] === r ? (o = i[1]) : ((o = r === void 0 ? {} : r), (i[0] = r), (i[1] = o));
  let s, c;
  i[2] === o
    ? ((s = i[3]), (c = i[4]))
    : (({ staleTime: c, ...s } = o), (i[2] = o), (i[3] = s), (i[4] = c));
  let l = String(e),
    u;
  i[5] === l ? (u = i[6]) : ((u = m(l)), (i[5] = l), (i[6] = u));
  let d;
  i[7] !== n || i[8] !== u
    ? ((d = { cwd: u, operationSource: n }), (i[7] = n), (i[8] = u), (i[9] = d))
    : (d = i[9]);
  let f = c ?? a.FIVE_SECONDS,
    p;
  return (
    i[10] !== s || i[11] !== f
      ? ((p = { staleTime: f, ...s }), (i[10] = s), (i[11] = f), (i[12] = p))
      : (p = i[12]),
    J(e, t, `status-summary`, d, n, p)
  );
}
var je,
  Me = e(() => {
    ((je = c()), n(), r(), q());
  });
function Ne(e, t, n, r) {
  let i = (0, Fe.c)(4),
    o;
  i[0] === n
    ? (o = i[1])
    : ((o = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (i[0] = n),
      (i[1] = o));
  let s;
  return (
    i[2] === r
      ? (s = i[3])
      : ((s = { select: Pe, staleTime: a.FIVE_SECONDS, ...r }), (i[2] = r), (i[3] = s)),
    J(e, t, `recent-branches`, o, n, s)
  );
}
function Pe(e) {
  return e.branches;
}
var Fe,
  Ie = e(() => {
    ((Fe = c()), r(), q());
  });
function Le(e, t, n, r) {
  let i = (0, Re.c)(23),
    a = d(),
    { data: o } = K(e, t, n),
    c;
  i[0] === t ? (c = i[1]) : ((c = B(t)), (i[0] = t), (i[1] = c));
  let l = c,
    u = e ?? null,
    f;
  i[2] !== t.id || i[3] !== u
    ? ((f = [`vscode`, `git-checkout-branch`, u, t.id]), (i[2] = t.id), (i[3] = u), (i[4] = f))
    : (f = i[4]);
  let p;
  i[5] !== o || i[6] !== l || i[7] !== r || i[8] !== a
    ? ((p = async (e, t, n, i, s) => {
        (o &&
          e?.status === `success` &&
          W(a, { commonDir: o.commonDir, root: o.root }, { changeType: `head`, hostKey: l }),
          r?.onSettled && (await r.onSettled(e, t, n, i, s)));
      }),
      (i[5] = o),
      (i[6] = l),
      (i[7] = r),
      (i[8] = a),
      (i[9] = p))
    : (p = i[9]);
  let m;
  i[10] !== n || i[11] !== r || i[12] !== f || i[13] !== p
    ? ((m = { source: n, mutationKey: f, ...r, onSettled: p }),
      (i[10] = n),
      (i[11] = r),
      (i[12] = f),
      (i[13] = p),
      (i[14] = m))
    : (m = i[14]);
  let h = s(`git-checkout-branch`, m),
    g,
    _;
  i[15] !== t.id || i[16] !== h
    ? ((g = (e, n) => {
        h.mutate({ ...e, hostId: t.id }, n);
      }),
      (_ = (e, n) => h.mutateAsync({ ...e, hostId: t.id }, n)),
      (i[15] = t.id),
      (i[16] = h),
      (i[17] = g),
      (i[18] = _))
    : ((g = i[17]), (_ = i[18]));
  let v;
  return (
    i[19] !== h || i[20] !== g || i[21] !== _
      ? ((v = { ...h, mutate: g, mutateAsync: _ }),
        (i[19] = h),
        (i[20] = g),
        (i[21] = _),
        (i[22] = v))
      : (v = i[22]),
    v
  );
}
var Re,
  ze = e(() => {
    ((Re = c()), p(), q(), R(), G(), f());
  });
function Be(e, t, n, r) {
  let i = (0, Ve.c)(23),
    a = d(),
    { data: o } = K(e, t, n),
    c;
  i[0] === t ? (c = i[1]) : ((c = B(t)), (i[0] = t), (i[1] = c));
  let l = c,
    u = e ?? null,
    f;
  i[2] !== t.id || i[3] !== u
    ? ((f = [`vscode`, `git-create-branch`, u, t.id]), (i[2] = t.id), (i[3] = u), (i[4] = f))
    : (f = i[4]);
  let p;
  i[5] !== o || i[6] !== l || i[7] !== r || i[8] !== a
    ? ((p = async (e, t, n, i, s) => {
        (o && W(a, o, { changeType: n?.mode === `synced` ? `synced-branch` : `head`, hostKey: l }),
          r?.onSettled && (await r.onSettled(e, t, n, i, s)));
      }),
      (i[5] = o),
      (i[6] = l),
      (i[7] = r),
      (i[8] = a),
      (i[9] = p))
    : (p = i[9]);
  let m;
  i[10] !== n || i[11] !== r || i[12] !== f || i[13] !== p
    ? ((m = { source: n, mutationKey: f, ...r, onSettled: p }),
      (i[10] = n),
      (i[11] = r),
      (i[12] = f),
      (i[13] = p),
      (i[14] = m))
    : (m = i[14]);
  let h = s(`git-create-branch`, m),
    g,
    _;
  i[15] !== t.id || i[16] !== h
    ? ((g = (e, n) => {
        h.mutate({ ...e, hostId: t.id }, n);
      }),
      (_ = (e, n) => h.mutateAsync({ ...e, hostId: t.id }, n)),
      (i[15] = t.id),
      (i[16] = h),
      (i[17] = g),
      (i[18] = _))
    : ((g = i[17]), (_ = i[18]));
  let v;
  return (
    i[19] !== h || i[20] !== g || i[21] !== _
      ? ((v = { ...h, mutate: g, mutateAsync: _ }),
        (i[19] = h),
        (i[20] = g),
        (i[21] = _),
        (i[22] = v))
      : (v = i[22]),
    v
  );
}
var Ve,
  He = e(() => {
    ((Ve = c()), p(), q(), R(), G(), f());
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
      side: s,
      align: c,
      renderStaticBranch: l,
      renderControl: u,
      onOpenChange: d,
    } = e,
    f = s === void 0 ? `top` : s,
    p = c === void 0 ? `end` : c,
    g = _(o),
    v = oe(),
    [y, ee] = (0, Z.useState)(!1),
    [te, b] = (0, Z.useState)(!1),
    [x, C] = (0, Z.useState)(!1),
    [w, T] = (0, Z.useState)(!1),
    [E, D] = (0, Z.useState)(!1),
    [O, re] = (0, Z.useState)(0),
    [k, j] = (0, Z.useState)(null),
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = []), (t[0] = M)) : (M = t[0]);
  let [N, P] = (0, Z.useState)(M),
    [F, L] = (0, Z.useState)(`idle`),
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
  let z = h(A, R),
    B = z.data?.trim() ?? ``,
    V = a && B.length > 0,
    H = h(ae, i),
    U = E || F !== `idle`,
    W = Le(n, r, $),
    G = Be(n, r, $),
    ie;
  t[5] === n ? (ie = t[6]) : ((ie = n == null ? null : m(n)), (t[5] = n), (t[6] = ie));
  let K = ie,
    q;
  t[7] !== K || t[8] !== r
    ? ((q = K == null ? null : { cwd: K, hostId: r.id }), (t[7] = K), (t[8] = r), (t[9] = q))
    : (q = t[9]);
  let J = q,
    Y = W.isPending || G.isPending,
    se = v.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    le;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = () => {
        ee(!1);
      }),
      (t[10] = le))
    : (le = t[10]);
  let X = le,
    ue;
  t[11] !== v || t[12] !== g
    ? ((ue = (e) => {
        g.get(we).danger(
          v.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[11] = v),
      (t[12] = g),
      (t[13] = ue))
    : (ue = t[13]);
  let de = ue,
    fe;
  t[14] !== v || t[15] !== g
    ? ((fe = (e) => {
        g.get(we).danger(
          v.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[14] = v),
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
          ? (P(n ?? []), j(r), X(), T(!1), C(!0), !0)
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
          let t = await W.mutateAsync({ cwd: n, branch: e });
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
          (i != null && ce(i, e), X());
        } catch (e) {
          let t = e;
          de(t instanceof Error ? t.message : String(t));
        }
      }
    },
    _e;
  t[19] !== W ||
  t[20] !== G ||
  t[21] !== n ||
  t[22] !== Y ||
  t[23] !== i ||
  t[24] !== he ||
  t[25] !== de ||
  t[26] !== pe
    ? ((_e = async (e) => {
        if (!(Y || n == null))
          try {
            let t = await G.mutateAsync({ cwd: n, branch: e, mode: `worktree`, failIfExists: !0 });
            if (t.status === `error`) {
              pe(t.error);
              return;
            }
            let r = await W.mutateAsync({ cwd: n, branch: e });
            if (r.status === `error`) {
              if (
                he({
                  errorType: r.errorType,
                  conflictedPaths: r.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (de(r.error), T(!1));
              return;
            }
            (i != null && ce(i, e), T(!1));
          } catch (e) {
            let t = e;
            pe(t instanceof Error ? t.message : String(t));
          }
      }),
      (t[19] = W),
      (t[20] = G),
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
        (D(!1), L(`idle`), P([]), j(null));
      }),
      (t[28] = ye))
    : (ye = t[28]);
  let be = ye,
    xe;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (e) => {
        (C(e), e || (P([]), j(null)));
      }),
      (t[29] = xe))
    : (xe = t[29]);
  let Se = xe,
    Ce;
  t[30] !== J || t[31] !== g
    ? ((Ce = () => {
        J != null && (g.set(S, J, ``), L(`idle`), re(qe), C(!1), D(!0));
      }),
      (t[30] = J),
      (t[31] = g),
      (t[32] = Ce))
    : (Ce = t[32]);
  let Te = Ce,
    Ee;
  t[33] !== ge || t[34] !== ve || t[35] !== be || t[36] !== k
    ? ((Ee = (e) => {
        if (e === `success` && k != null) {
          let e = k;
          if ((be(), e.type === `checkout`)) {
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
      (t[35] = be),
      (t[36] = k),
      (t[37] = Ee))
    : (Ee = t[37]);
  let De = Ee;
  if (!V)
    return a && z.isSuccess
      ? u({ currentBranch: null, disabled: !1, isPending: !1, switchTooltipText: se })
      : null;
  if (n == null) return l?.({ currentBranch: B }) ?? null;
  let Oe = I,
    ke;
  t[38] === d
    ? (ke = t[39])
    : ((ke = (e) => {
        (e && b(!0), ee(e), d?.(e));
      }),
      (t[38] = d),
      (t[39] = ke));
  let Ae = u({ currentBranch: B, disabled: Y, isPending: Y, switchTooltipText: se }),
    je;
  t[40] !== ge ||
  t[41] !== X ||
  t[42] !== B ||
  t[43] !== n ||
  t[44] !== te ||
  t[45] !== r ||
  t[46] !== Y ||
  t[47] !== y
    ? ((je = te
        ? (0, Q.jsx)(Je, {
            currentBranch: B,
            gitRoot: n,
            hostConfig: r,
            isOpen: y,
            disabled: Y,
            onCheckout: ge,
            onClose: X,
            onOpenCreate: () => {
              (X(), T(!0));
            },
          })
        : null),
      (t[40] = ge),
      (t[41] = X),
      (t[42] = B),
      (t[43] = n),
      (t[44] = te),
      (t[45] = r),
      (t[46] = Y),
      (t[47] = y),
      (t[48] = je))
    : (je = t[48]);
  let Me;
  t[49] !== Oe ||
  t[50] !== p ||
  t[51] !== y ||
  t[52] !== f ||
  t[53] !== ke ||
  t[54] !== Ae ||
  t[55] !== je
    ? ((Me = (0, Q.jsx)(Oe, {
        side: f,
        open: y,
        align: p,
        onOpenChange: ke,
        triggerButton: Ae,
        children: je,
      })),
      (t[49] = Oe),
      (t[50] = p),
      (t[51] = y),
      (t[52] = f),
      (t[53] = ke),
      (t[54] = Ae),
      (t[55] = je),
      (t[56] = Me))
    : (Me = t[56]);
  let Ne;
  t[57] !== H || t[58] !== ve || t[59] !== n || t[60] !== r || t[61] !== w || t[62] !== Y
    ? ((Ne = w
        ? (0, Q.jsx)(Ye, {
            open: w,
            onOpenChange: T,
            conversationTitle: H,
            gitRoot: n,
            hostConfig: r,
            isPending: Y,
            onSubmit: ve,
          })
        : null),
      (t[57] = H),
      (t[58] = ve),
      (t[59] = n),
      (t[60] = r),
      (t[61] = w),
      (t[62] = Y),
      (t[63] = Ne))
    : (Ne = t[63]);
  let Pe;
  t[64] !== N ||
  t[65] !== n ||
  t[66] !== Te ||
  t[67] !== Se ||
  t[68] !== r ||
  t[69] !== x ||
  t[70] !== k?.branch
    ? ((Pe =
        x && n != null
          ? (0, Q.jsx)(Xe, {
              open: x,
              onOpenChange: Se,
              conflictFiles: N,
              gitRoot: n,
              hostConfig: r,
              targetBranch: k?.branch ?? null,
              onContinue: Te,
            })
          : null),
      (t[64] = N),
      (t[65] = n),
      (t[66] = Te),
      (t[67] = Se),
      (t[68] = r),
      (t[69] = x),
      (t[70] = k?.branch),
      (t[71] = Pe))
    : (Pe = t[71]);
  let Fe;
  t[72] !== O ||
  t[73] !== K ||
  t[74] !== be ||
  t[75] !== De ||
  t[76] !== r ||
  t[77] !== U ||
  t[78] !== E ||
  t[79] !== i
    ? ((Fe =
        U && K != null
          ? (0, Q.jsx)(
              ne,
              {
                open: E,
                onOpenChange: D,
                conversationId: i,
                cwd: K,
                hostConfig: r,
                onStatusChange: De,
                onRequestReset: be,
              },
              O,
            )
          : null),
      (t[72] = O),
      (t[73] = K),
      (t[74] = be),
      (t[75] = De),
      (t[76] = r),
      (t[77] = U),
      (t[78] = E),
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
    u = oe(),
    [d, f] = (0, Z.useState)(``),
    p = le(d, 200),
    { data: m, refetch: g } = Ae(r, i, $),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { enabled: !0 }), (t[0] = _))
    : (_ = t[0]);
  let { data: v, isLoading: y, isFetching: ee, isError: b, refetch: x } = Ne(r, i, $, _),
    S = v === void 0 ? [] : v,
    C;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { enabled: !0 }), (t[1] = C))
    : (C = t[1]);
  let { data: ne, refetch: w } = te(r, i, $, C),
    T,
    E;
  (t[2] !== a || t[3] !== x || t[4] !== w || t[5] !== g
    ? ((T = () => {
        a && Promise.all([x(), w(), g()]);
      }),
      (E = [a, x, w, g]),
      (t[2] = a),
      (t[3] = x),
      (t[4] = w),
      (t[5] = g),
      (t[6] = T),
      (t[7] = E))
    : ((T = t[6]), (E = t[7])),
    (0, Z.useEffect)(T, E));
  let D;
  t[8] === d ? (D = t[9]) : ((D = d.trim()), (t[8] = d), (t[9] = D));
  let O = D,
    re;
  t[10] === p ? (re = t[11]) : ((re = p.trim()), (t[10] = p), (t[11] = re));
  let k = re,
    A = O !== k,
    j = k.length > 0,
    M;
  t[12] !== r || t[13] !== i || t[14] !== k || t[15] !== j
    ? ((M = { cwd: r, hostConfig: i, operationSource: $, query: k, enabled: j }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = k),
      (t[15] = j),
      (t[16] = M))
    : (M = t[16]);
  let { data: P, isFetching: F, isError: I, refetch: R } = h(Oe, M),
    z = Ze({ branches: S, currentBranch: n, defaultBranch: ne }),
    B = !y && !ee && !b && S.length === 0,
    H = $e(m),
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
    G = y || (ee && z.length === 0),
    ie = A || F,
    K;
  t[20] === x
    ? (K = t[21])
    : ((K = () => {
        x();
      }),
      (t[20] = x),
      (t[21] = K));
  let q;
  t[22] === R
    ? (q = t[23])
    : ((q = () => {
        R();
      }),
      (t[22] = R),
      (t[23] = q));
  let ae;
  t[24] !== n || t[25] !== H
    ? ((ae = (e) =>
        e === n && H > 0
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground`,
              children: (0, Q.jsx)(V, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: H },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = H),
      (t[26] = ae))
    : (ae = t[26]);
  let J;
  t[27] !== n ||
  t[28] !== o ||
  t[29] !== b ||
  t[30] !== I ||
  t[31] !== s ||
  t[32] !== c ||
  t[33] !== z ||
  t[34] !== d ||
  t[35] !== P ||
  t[36] !== G ||
  t[37] !== ie ||
  t[38] !== K ||
  t[39] !== q ||
  t[40] !== ae
    ? ((J = (0, Q.jsx)(N, {
        branches: z,
        selectedBranch: n,
        disabled: o,
        isError: b,
        isLoading: G,
        isSearchError: I,
        isSearchLoading: ie,
        onClose: c,
        onRetry: K,
        onRetrySearch: q,
        onSearchQueryChange: f,
        onSelectBranch: s,
        renderBranchSubText: ae,
        searchedBranches: P,
        searchQuery: d,
      })),
      (t[27] = n),
      (t[28] = o),
      (t[29] = b),
      (t[30] = I),
      (t[31] = s),
      (t[32] = c),
      (t[33] = z),
      (t[34] = d),
      (t[35] = P),
      (t[36] = G),
      (t[37] = ie),
      (t[38] = K),
      (t[39] = q),
      (t[40] = ae),
      (t[41] = J))
    : (J = t[41]);
  let Y;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Q.jsx)(L.Separator, {})), (t[42] = Y))
    : (Y = t[42]);
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
    ? ((X = (0, Q.jsx)(V, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[45] = X))
    : (X = t[45]);
  let ue;
  t[46] !== W || t[47] !== se || t[48] !== ce
    ? ((ue = (0, Q.jsx)(L.Item, {
        LeftIcon: fe,
        disabled: se,
        tooltipText: W,
        onSelect: ce,
        children: X,
      })),
      (t[46] = W),
      (t[47] = se),
      (t[48] = ce),
      (t[49] = ue))
    : (ue = t[49]);
  let de;
  return (
    t[50] !== J || t[51] !== ue
      ? ((de = (0, Q.jsxs)(Q.Fragment, { children: [J, Y, ue] })),
        (t[50] = J),
        (t[51] = ue),
        (t[52] = de))
      : (de = t[52]),
    de
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
    l = oe(),
    u = Ce(g.branchPrefix),
    d;
  t[0] !== u || t[1] !== i
    ? ((d = ee({ branchPrefix: u, conversationTitle: i })), (t[0] = u), (t[1] = i), (t[2] = d))
    : (d = t[2]);
  let [f, p] = (0, Z.useState)(d),
    m = n && a != null,
    h;
  t[3] === m ? (h = t[4]) : ((h = { enabled: m }), (t[3] = m), (t[4] = h));
  let { data: _, isLoading: v, isFetching: y, isError: te } = Ne(a, o, $, h),
    b,
    x,
    S,
    C;
  if (t[5] !== f || t[6] !== _) {
    b = _ === void 0 ? [] : _;
    let e = Ze({ branches: b, currentBranch: ``, defaultBranch: null });
    ((C = f.trim()),
      (x = C.endsWith(`/`)),
      (S = C.length > 0 && e.includes(C)),
      (t[5] = f),
      (t[6] = _),
      (t[7] = b),
      (t[8] = x),
      (t[9] = S),
      (t[10] = C));
  } else ((b = t[7]), (x = t[8]), (S = t[9]), (C = t[10]));
  let ne = S,
    w = !v && !y && !te && b.length === 0,
    T = !s && !v && !y && !w && C.length > 0 && !x && !ne && a != null,
    E;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(he, {
        children: (0, Q.jsx)(pe, {
          title: (0, Q.jsx)(V, {
            id: `composer.footer.branchSwitch.createDialog.title`,
            defaultMessage: `Create and checkout branch`,
            description: `Title for dialog that creates and checks out a new branch from the composer footer`,
          }),
        }),
      })),
      (t[11] = E))
    : (E = t[11]);
  let D;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(re, {})), (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e) => {
        p(Ue(e.target.value));
      }),
      (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] !== T || t[15] !== c || t[16] !== C
    ? ((k = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), !T)) return;
          c(C);
        }
      }),
      (t[14] = T),
      (t[15] = c),
      (t[16] = C),
      (t[17] = k))
    : (k = t[17]);
  let A;
  t[18] === l
    ? (A = t[19])
    : ((A = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[18] = l),
      (t[19] = A));
  let j;
  t[20] === l
    ? (j = t[21])
    : ((j = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[20] = l),
      (t[21] = j));
  let M;
  t[22] !== f || t[23] !== A || t[24] !== j || t[25] !== k
    ? ((M = (0, Q.jsx)(`input`, {
        autoFocus: !0,
        className: `h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground`,
        value: f,
        onChange: O,
        onKeyDown: k,
        placeholder: A,
        "aria-label": j,
      })),
      (t[22] = f),
      (t[23] = A),
      (t[24] = j),
      (t[25] = k),
      (t[26] = M))
    : (M = t[26]);
  let N;
  t[27] !== ne || t[28] !== x || t[29] !== s
    ? ((N = x
        ? (0, Q.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, Q.jsx)(V, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : ne && !s
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-token-error-foreground`,
              children: (0, Q.jsx)(V, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (t[27] = ne),
      (t[28] = x),
      (t[29] = s),
      (t[30] = N))
    : (N = t[30]);
  let P;
  t[31] !== M || t[32] !== N
    ? ((P = (0, Q.jsxs)(he, { className: `flex flex-col gap-2`, children: [D, M, N] })),
      (t[31] = M),
      (t[32] = N),
      (t[33] = P))
    : (P = t[33]);
  let F;
  t[34] === r
    ? (F = t[35])
    : ((F = () => {
        r(!1);
      }),
      (t[34] = r),
      (t[35] = F));
  let I;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(V, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] === F
    ? (L = t[38])
    : ((L = (0, Q.jsx)(xe, { color: `secondary`, onClick: F, children: I })),
      (t[37] = F),
      (t[38] = L));
  let R = !T,
    z;
  t[39] !== c || t[40] !== C
    ? ((z = () => {
        c(C);
      }),
      (t[39] = c),
      (t[40] = C),
      (t[41] = z))
    : (z = t[41]);
  let B;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(V, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[42] = B))
    : (B = t[42]);
  let H;
  t[43] !== s || t[44] !== R || t[45] !== z
    ? ((H = (0, Q.jsx)(xe, { color: `primary`, disabled: R, loading: s, onClick: z, children: B })),
      (t[43] = s),
      (t[44] = R),
      (t[45] = z),
      (t[46] = H))
    : (H = t[46]);
  let U;
  t[47] !== L || t[48] !== H
    ? ((U = (0, Q.jsx)(he, { children: (0, Q.jsxs)(_e, { children: [L, H] }) })),
      (t[47] = L),
      (t[48] = H),
      (t[49] = U))
    : (U = t[49]);
  let W;
  t[50] !== P || t[51] !== U
    ? ((W = (0, Q.jsxs)(ge, { "data-codex-branch-create-dialog": ``, children: [E, P, U] })),
      (t[50] = P),
      (t[51] = U),
      (t[52] = W))
    : (W = t[52]);
  let G;
  return (
    t[53] !== r || t[54] !== n || t[55] !== W
      ? ((G = (0, Q.jsx)(X, { size: `feature`, open: n, onOpenChange: r, children: W })),
        (t[53] = r),
        (t[54] = n),
        (t[55] = W),
        (t[56] = G))
      : (G = t[56]),
    G
  );
}
function Xe(e) {
  let t = (0, et.c)(61),
    {
      open: n,
      onOpenChange: r,
      conflictFiles: i,
      gitRoot: o,
      hostConfig: s,
      targetBranch: c,
      onContinue: l,
    } = e,
    u = oe(),
    { data: d } = Ae(o, s, $),
    f;
  t[0] === o ? (f = t[1]) : ((f = m(o)), (t[0] = o), (t[1] = f));
  let p;
  t[2] === f
    ? (p = t[3])
    : ((p = { cwd: f, includeUntrackedFiles: !1, operationSource: $, source: `staged` }),
      (t[2] = f),
      (t[3] = p));
  let h;
  t[4] === n
    ? (h = t[5])
    : ((h = { enabled: n, staleTime: a.FIVE_SECONDS }), (t[4] = n), (t[5] = h));
  let { data: g } = J(o, s, `review-summary`, p, $, h),
    _;
  t[6] === o ? (_ = t[7]) : ((_ = m(o)), (t[6] = o), (t[7] = _));
  let v;
  t[8] === _
    ? (v = t[9])
    : ((v = { cwd: _, operationSource: $, source: `unstaged` }), (t[8] = _), (t[9] = v));
  let y;
  t[10] === n
    ? (y = t[11])
    : ((y = { enabled: n, staleTime: a.FIVE_SECONDS }), (t[10] = n), (t[11] = y));
  let { data: ee } = J(o, s, `review-summary`, v, $, y),
    te,
    b,
    S,
    C,
    ne,
    w,
    T,
    E,
    D;
  if (
    t[12] !== i ||
    t[13] !== u ||
    t[14] !== r ||
    t[15] !== n ||
    t[16] !== g ||
    t[17] !== d ||
    t[18] !== c ||
    t[19] !== ee
  ) {
    let e = [g, ee],
      a = j(e),
      o = a?.totalAdditions ?? 0,
      s = a?.totalDeletions ?? 0,
      l = o + s > 0,
      f = i.length > 0,
      p;
    t[29] === d ? (p = t[30]) : ((p = $e(d)), (t[29] = d), (t[30] = p));
    let m = p,
      h;
    t[31] !== u || t[32] !== c
      ? ((h =
          c ??
          u.formatMessage({
            id: `composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback`,
            defaultMessage: `the selected branch`,
            description: `Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable`,
          })),
        (t[31] = u),
        (t[32] = c),
        (t[33] = h))
      : (h = t[33]);
    let _ = h;
    ((S = X),
      (C = `feature`),
      (ne = n),
      (w = r),
      (b = ge),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((D = (0, Q.jsx)(he, {
            children: (0, Q.jsx)(pe, {
              title: (0, Q.jsx)(V, {
                id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                defaultMessage: `Commit changes to switch branch`,
                description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
              }),
            }),
          })),
          (t[34] = D))
        : (D = t[34]),
      (te = he),
      (T = `text-token-description-foreground`),
      (E = f
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, Q.jsx)(V, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: i.map((t, n) => {
                  let r = P(t, e);
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-token-foreground`,
                      children: [
                        (0, Q.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, Q.jsx)(x, {
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
              (0, Q.jsx)(V, {
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
                (0, Q.jsx)(V, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff`,
                  defaultMessage: `Commit`,
                  description: `Body prefix in the uncommitted changes dialog before diff stats`,
                }),
                (0, Q.jsx)(x, {
                  className: `inline-flex align-middle`,
                  linesAdded: o,
                  linesRemoved: s,
                }),
                (0, Q.jsx)(V, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff`,
                  defaultMessage: `changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                  description: `Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch`,
                  values: { fileCount: m, branchName: _ },
                }),
              ],
            })
          : (0, Q.jsx)(V, {
              id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff`,
              defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
              description: `Body text in the uncommitted changes dialog when diff stats are unavailable`,
              values: { fileCount: m, branchName: _ },
            })),
      (t[12] = i),
      (t[13] = u),
      (t[14] = r),
      (t[15] = n),
      (t[16] = g),
      (t[17] = d),
      (t[18] = c),
      (t[19] = ee),
      (t[20] = te),
      (t[21] = b),
      (t[22] = S),
      (t[23] = C),
      (t[24] = ne),
      (t[25] = w),
      (t[26] = T),
      (t[27] = E),
      (t[28] = D));
  } else
    ((te = t[20]),
      (b = t[21]),
      (S = t[22]),
      (C = t[23]),
      (ne = t[24]),
      (w = t[25]),
      (T = t[26]),
      (E = t[27]),
      (D = t[28]));
  let O;
  t[35] !== te || t[36] !== T || t[37] !== E
    ? ((O = (0, Q.jsx)(te, { className: T, children: E })),
      (t[35] = te),
      (t[36] = T),
      (t[37] = E),
      (t[38] = O))
    : (O = t[38]);
  let re;
  t[39] === r
    ? (re = t[40])
    : ((re = () => {
        r(!1);
      }),
      (t[39] = r),
      (t[40] = re));
  let k;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(V, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[41] = k))
    : (k = t[41]);
  let A;
  t[42] === re
    ? (A = t[43])
    : ((A = (0, Q.jsx)(xe, { color: `secondary`, onClick: re, children: k })),
      (t[42] = re),
      (t[43] = A));
  let M;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(V, {
        id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
        defaultMessage: `Commit and switch branch…`,
        description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[44] = M))
    : (M = t[44]);
  let N;
  t[45] === l
    ? (N = t[46])
    : ((N = (0, Q.jsx)(xe, { color: `primary`, onClick: l, children: M })),
      (t[45] = l),
      (t[46] = N));
  let F;
  t[47] !== A || t[48] !== N
    ? ((F = (0, Q.jsx)(he, { children: (0, Q.jsxs)(_e, { children: [A, N] }) })),
      (t[47] = A),
      (t[48] = N),
      (t[49] = F))
    : (F = t[49]);
  let I;
  t[50] !== b || t[51] !== O || t[52] !== F || t[53] !== D
    ? ((I = (0, Q.jsxs)(b, { children: [D, O, F] })),
      (t[50] = b),
      (t[51] = O),
      (t[52] = F),
      (t[53] = D),
      (t[54] = I))
    : (I = t[54]);
  let L;
  return (
    t[55] !== S || t[56] !== C || t[57] !== ne || t[58] !== w || t[59] !== I
      ? ((L = (0, Q.jsx)(S, { size: C, open: ne, onOpenChange: w, children: I })),
        (t[55] = S),
        (t[56] = C),
        (t[57] = ne),
        (t[58] = w),
        (t[59] = I),
        (t[60] = L))
      : (L = t[60]),
    L
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
    ((et = c()),
      u(),
      n(),
      (Z = t(i(), 1)),
      se(),
      U(),
      z(),
      be(),
      de(),
      me(),
      F(),
      E(),
      ye(),
      C(),
      q(),
      ke(),
      k(),
      Ie(),
      w(),
      Me(),
      ze(),
      He(),
      ve(),
      T(),
      D(),
      O(),
      b(),
      y(),
      Se(),
      r(),
      ue(),
      M(),
      Ge(),
      (Q = v()),
      ($ = `composer_branch_switcher`));
  });
export { Ie as a, Ae as c, Ue as i, Oe as l, tt as n, Ne as o, Ge as r, Me as s, Ke as t, ke as u };
//# sourceMappingURL=git-branch-switcher.js.map
