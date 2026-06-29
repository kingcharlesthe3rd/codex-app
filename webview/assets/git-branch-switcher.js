import { n as e, s as t } from "./rolldown-runtime.js";
import {
  C as n,
  D as r,
  E as i,
  F as a,
  Ht as o,
  I as s,
  L as c,
  Ol as l,
  R as u,
  T as d,
  Ut as f,
  Wt as p,
  Yc as m,
  _ as h,
  _t as g,
  ac as _,
  bl as v,
  dl as y,
  ft as b,
  gn as x,
  gt as S,
  h as C,
  hi as w,
  kl as T,
  oc as E,
  tc as D,
  ut as O,
  xl as k,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as ee,
  Co as A,
  Go as j,
  Ho as te,
  Ia as M,
  Jp as N,
  Ma as ne,
  Na as P,
  Yp as F,
  _o as I,
  ja as re,
  op as L,
  sp as R,
  yo as z,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Fa as B,
  Ks as V,
  LC as ie,
  MC as H,
  Mn as U,
  Nn as ae,
  No as W,
  aw as G,
  cw as K,
  qs as q,
  uw as oe,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  h as J,
  p as se,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  B as ce,
  z as Y,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  $ as le,
  A as X,
  B as ue,
  H as de,
  Q as fe,
  R as pe,
  S as me,
  U as he,
  V as ge,
  Y as _e,
  Z as ve,
  et as ye,
  k as be,
  x as xe,
  z as Se,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  Cn as Ce,
  Tn as we,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
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
    (D(),
      f(),
      g(),
      h(),
      u(),
      s(),
      (De = m(
        o,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) =>
          c(e, a(n), n, r, { enabled: t }),
        { key: Te },
      )),
      (Oe = m(
        o,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r, query: i }, { get: o }) => {
          let s = o(De, { cwd: e, enabled: t, hostConfig: n, operationSource: r }).data;
          return C(
            `search-branches`,
            s,
            s == null ? null : { root: s.root, operationSource: r, query: i, limit: 20 },
            a(n),
            n,
            { enabled: t, select: (e) => e.branches, staleTime: S.FIVE_SECONDS },
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
    l;
  i[5] === c ? (l = i[6]) : ((l = w(c)), (i[5] = c), (i[6] = l));
  let u;
  i[7] !== n || i[8] !== l
    ? ((u = { cwd: l, operationSource: n }), (i[7] = n), (i[8] = l), (i[9] = u))
    : (u = i[9]);
  let f = s ?? S.FIVE_SECONDS,
    p;
  return (
    i[10] !== o || i[11] !== f
      ? ((p = { staleTime: f, ...o }), (i[10] = o), (i[11] = f), (i[12] = p))
      : (p = i[12]),
    d(e, t, `status-summary`, u, n, p)
  );
}
var je,
  Me = e(() => {
    ((je = l()), p(), g(), h());
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
      : ((o = { select: Pe, staleTime: S.FIVE_SECONDS, ...r }), (i[2] = r), (i[3] = o)),
    d(e, t, `recent-branches`, a, n, o)
  );
}
function Pe(e) {
  return e.branches;
}
var Fe,
  Ie = e(() => {
    ((Fe = l()), g(), h());
  });
function Le(e, t, i, o) {
  let s = (0, Re.c)(23),
    c = v(),
    { data: l } = r(e, t, i),
    u;
  s[0] === t ? (u = s[1]) : ((u = a(t)), (s[0] = t), (s[1] = u));
  let d = u,
    f = e ?? null,
    p;
  s[2] !== t.id || s[3] !== f
    ? ((p = [`vscode`, `git-checkout-branch`, f, t.id]), (s[2] = t.id), (s[3] = f), (s[4] = p))
    : (p = s[4]);
  let m;
  s[5] !== l || s[6] !== d || s[7] !== o || s[8] !== c
    ? ((m = async (e, t, r, i, a) => {
        (l &&
          e?.status === `success` &&
          n(c, { commonDir: l.commonDir, root: l.root }, { changeType: `head`, hostKey: d }),
          o?.onSettled && (await o.onSettled(e, t, r, i, a)));
      }),
      (s[5] = l),
      (s[6] = d),
      (s[7] = o),
      (s[8] = c),
      (s[9] = m))
    : (m = s[9]);
  let h;
  s[10] !== i || s[11] !== o || s[12] !== p || s[13] !== m
    ? ((h = { source: i, mutationKey: p, ...o, onSettled: m }),
      (s[10] = i),
      (s[11] = o),
      (s[12] = p),
      (s[13] = m),
      (s[14] = h))
    : (h = s[14]);
  let g = b(`git-checkout-branch`, h),
    _,
    y;
  s[15] !== t.id || s[16] !== g
    ? ((_ = (e, n) => {
        g.mutate({ ...e, hostId: t.id }, n);
      }),
      (y = (e, n) => g.mutateAsync({ ...e, hostId: t.id }, n)),
      (s[15] = t.id),
      (s[16] = g),
      (s[17] = _),
      (s[18] = y))
    : ((_ = s[17]), (y = s[18]));
  let x;
  return (
    s[19] !== g || s[20] !== _ || s[21] !== y
      ? ((x = { ...g, mutate: _, mutateAsync: y }),
        (s[19] = g),
        (s[20] = _),
        (s[21] = y),
        (s[22] = x))
      : (x = s[22]),
    x
  );
}
var Re,
  ze = e(() => {
    ((Re = l()), y(), h(), s(), i(), O());
  });
function Be(e, t, i, o) {
  let s = (0, Ve.c)(23),
    c = v(),
    { data: l } = r(e, t, i),
    u;
  s[0] === t ? (u = s[1]) : ((u = a(t)), (s[0] = t), (s[1] = u));
  let d = u,
    f = e ?? null,
    p;
  s[2] !== t.id || s[3] !== f
    ? ((p = [`vscode`, `git-create-branch`, f, t.id]), (s[2] = t.id), (s[3] = f), (s[4] = p))
    : (p = s[4]);
  let m;
  s[5] !== l || s[6] !== d || s[7] !== o || s[8] !== c
    ? ((m = async (e, t, r, i, a) => {
        (l && n(c, l, { changeType: r?.mode === `synced` ? `synced-branch` : `head`, hostKey: d }),
          o?.onSettled && (await o.onSettled(e, t, r, i, a)));
      }),
      (s[5] = l),
      (s[6] = d),
      (s[7] = o),
      (s[8] = c),
      (s[9] = m))
    : (m = s[9]);
  let h;
  s[10] !== i || s[11] !== o || s[12] !== p || s[13] !== m
    ? ((h = { source: i, mutationKey: p, ...o, onSettled: m }),
      (s[10] = i),
      (s[11] = o),
      (s[12] = p),
      (s[13] = m),
      (s[14] = h))
    : (h = s[14]);
  let g = b(`git-create-branch`, h),
    _,
    y;
  s[15] !== t.id || s[16] !== g
    ? ((_ = (e, n) => {
        g.mutate({ ...e, hostId: t.id }, n);
      }),
      (y = (e, n) => g.mutateAsync({ ...e, hostId: t.id }, n)),
      (s[15] = t.id),
      (s[16] = g),
      (s[17] = _),
      (s[18] = y))
    : ((_ = s[17]), (y = s[18]));
  let x;
  return (
    s[19] !== g || s[20] !== _ || s[21] !== y
      ? ((x = { ...g, mutate: _, mutateAsync: y }),
        (s[19] = g),
        (s[20] = _),
        (s[21] = y),
        (s[22] = x))
      : (x = s[22]),
    x
  );
}
var Ve,
  He = e(() => {
    ((Ve = l()), y(), h(), s(), i(), O());
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
    m = E(o),
    h = oe(),
    [g, v] = (0, Z.useState)(!1),
    [y, b] = (0, Z.useState)(!1),
    [x, S] = (0, Z.useState)(!1),
    [C, T] = (0, Z.useState)(!1),
    [D, O] = (0, Z.useState)(!1),
    [k, ee] = (0, Z.useState)(0),
    [A, j] = (0, Z.useState)(null),
    te;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((te = []), (t[0] = te)) : (te = t[0]);
  let [M, N] = (0, Z.useState)(te),
    [ne, P] = (0, Z.useState)(`idle`),
    F;
  t[1] !== n || t[2] !== r || t[3] !== a
    ? ((F = {
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
      (t[4] = F))
    : (F = t[4]);
  let re = _(Ce, F),
    L = re.data?.trim() ?? ``,
    R = a && L.length > 0,
    z = _(W, i),
    B = D || ne !== `idle`,
    V = Le(n, r, $),
    ie = Be(n, r, $),
    H;
  t[5] === n ? (H = t[6]) : ((H = n == null ? null : w(n)), (t[5] = n), (t[6] = H));
  let U = H,
    ae;
  t[7] !== U || t[8] !== r
    ? ((ae = U == null ? null : { cwd: U, hostId: r.id }), (t[7] = U), (t[8] = r), (t[9] = ae))
    : (ae = t[9]);
  let G = ae,
    K = V.isPending || ie.isPending,
    se = h.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    ce;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = () => {
        v(!1);
      }),
      (t[10] = ce))
    : (ce = t[10]);
  let Y = ce,
    le;
  t[11] !== h || t[12] !== m
    ? ((le = (e) => {
        m.get(J).danger(
          h.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[11] = h),
      (t[12] = m),
      (t[13] = le))
    : (le = t[13]);
  let X = le,
    de;
  t[14] !== h || t[15] !== m
    ? ((de = (e) => {
        m.get(J).danger(
          h.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[14] = h),
      (t[15] = m),
      (t[16] = de))
    : (de = t[16]);
  let fe = de,
    pe;
  t[17] === Y
    ? (pe = t[18])
    : ((pe = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return t === `blocked-by-working-tree-changes`
          ? (N(n ?? []), j(r), Y(), T(!1), S(!0), !0)
          : !1;
      }),
      (t[17] = Y),
      (t[18] = pe));
  let me = pe,
    he = async (e) => {
      if (!(K || n == null)) {
        if (e === L) {
          Y();
          return;
        }
        try {
          let t = await V.mutateAsync({ cwd: n, branch: e });
          if (t.status === `error`) {
            if (
              me({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            X(t.error);
            return;
          }
          (i != null && q(i, e), Y());
        } catch (e) {
          let t = e;
          X(t instanceof Error ? t.message : String(t));
        }
      }
    },
    ge;
  t[19] !== V ||
  t[20] !== ie ||
  t[21] !== n ||
  t[22] !== K ||
  t[23] !== i ||
  t[24] !== me ||
  t[25] !== X ||
  t[26] !== fe
    ? ((ge = async (e) => {
        if (!(K || n == null))
          try {
            let t = await ie.mutateAsync({ cwd: n, branch: e, mode: `worktree`, failIfExists: !0 });
            if (t.status === `error`) {
              fe(t.error);
              return;
            }
            let r = await V.mutateAsync({ cwd: n, branch: e });
            if (r.status === `error`) {
              if (
                me({
                  errorType: r.errorType,
                  conflictedPaths: r.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (X(r.error), T(!1));
              return;
            }
            (i != null && q(i, e), T(!1));
          } catch (e) {
            let t = e;
            fe(t instanceof Error ? t.message : String(t));
          }
      }),
      (t[19] = V),
      (t[20] = ie),
      (t[21] = n),
      (t[22] = K),
      (t[23] = i),
      (t[24] = me),
      (t[25] = X),
      (t[26] = fe),
      (t[27] = ge))
    : (ge = t[27]);
  let ve = ge,
    ye;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = () => {
        (O(!1), P(`idle`), N([]), j(null));
      }),
      (t[28] = ye))
    : (ye = t[28]);
  let be = ye,
    xe;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (e) => {
        (S(e), e || (N([]), j(null)));
      }),
      (t[29] = xe))
    : (xe = t[29]);
  let Se = xe,
    we;
  t[30] !== G || t[31] !== m
    ? ((we = () => {
        G != null && (m.set(_e, G, ``), P(`idle`), ee(qe), S(!1), O(!0));
      }),
      (t[30] = G),
      (t[31] = m),
      (t[32] = we))
    : (we = t[32]);
  let Te = we,
    Ee;
  t[33] !== he || t[34] !== ve || t[35] !== be || t[36] !== A
    ? ((Ee = (e) => {
        if (e === `success` && A != null) {
          let e = A;
          if ((be(), e.type === `checkout`)) {
            he(e.branch);
            return;
          }
          ve(e.branch);
          return;
        }
        P(e);
      }),
      (t[33] = he),
      (t[34] = ve),
      (t[35] = be),
      (t[36] = A),
      (t[37] = Ee))
    : (Ee = t[37]);
  let De = Ee;
  if (!R)
    return a && re.isSuccess
      ? u({ currentBranch: null, disabled: !1, isPending: !1, switchTooltipText: se })
      : null;
  if (n == null) return l?.({ currentBranch: L }) ?? null;
  let Oe = I,
    ke;
  t[38] === d
    ? (ke = t[39])
    : ((ke = (e) => {
        (e && b(!0), v(e), d?.(e));
      }),
      (t[38] = d),
      (t[39] = ke));
  let Ae = u({ currentBranch: L, disabled: K, isPending: K, switchTooltipText: se }),
    je;
  t[40] !== he ||
  t[41] !== Y ||
  t[42] !== L ||
  t[43] !== n ||
  t[44] !== y ||
  t[45] !== r ||
  t[46] !== K ||
  t[47] !== g
    ? ((je = y
        ? (0, Q.jsx)(Je, {
            currentBranch: L,
            gitRoot: n,
            hostConfig: r,
            isOpen: g,
            disabled: K,
            onCheckout: he,
            onClose: Y,
            onOpenCreate: () => {
              (Y(), T(!0));
            },
          })
        : null),
      (t[40] = he),
      (t[41] = Y),
      (t[42] = L),
      (t[43] = n),
      (t[44] = y),
      (t[45] = r),
      (t[46] = K),
      (t[47] = g),
      (t[48] = je))
    : (je = t[48]);
  let Me;
  t[49] !== Oe ||
  t[50] !== p ||
  t[51] !== g ||
  t[52] !== f ||
  t[53] !== ke ||
  t[54] !== Ae ||
  t[55] !== je
    ? ((Me = (0, Q.jsx)(Oe, {
        side: f,
        open: g,
        align: p,
        onOpenChange: ke,
        triggerButton: Ae,
        children: je,
      })),
      (t[49] = Oe),
      (t[50] = p),
      (t[51] = g),
      (t[52] = f),
      (t[53] = ke),
      (t[54] = Ae),
      (t[55] = je),
      (t[56] = Me))
    : (Me = t[56]);
  let Ne;
  t[57] !== z || t[58] !== ve || t[59] !== n || t[60] !== r || t[61] !== C || t[62] !== K
    ? ((Ne = C
        ? (0, Q.jsx)(Ye, {
            open: C,
            onOpenChange: T,
            conversationTitle: z,
            gitRoot: n,
            hostConfig: r,
            isPending: K,
            onSubmit: ve,
          })
        : null),
      (t[57] = z),
      (t[58] = ve),
      (t[59] = n),
      (t[60] = r),
      (t[61] = C),
      (t[62] = K),
      (t[63] = Ne))
    : (Ne = t[63]);
  let Pe;
  t[64] !== M ||
  t[65] !== n ||
  t[66] !== Te ||
  t[67] !== Se ||
  t[68] !== r ||
  t[69] !== x ||
  t[70] !== A?.branch
    ? ((Pe =
        x && n != null
          ? (0, Q.jsx)(Xe, {
              open: x,
              onOpenChange: Se,
              conflictFiles: M,
              gitRoot: n,
              hostConfig: r,
              targetBranch: A?.branch ?? null,
              onContinue: Te,
            })
          : null),
      (t[64] = M),
      (t[65] = n),
      (t[66] = Te),
      (t[67] = Se),
      (t[68] = r),
      (t[69] = x),
      (t[70] = A?.branch),
      (t[71] = Pe))
    : (Pe = t[71]);
  let Fe;
  t[72] !== k ||
  t[73] !== U ||
  t[74] !== be ||
  t[75] !== De ||
  t[76] !== r ||
  t[77] !== B ||
  t[78] !== D ||
  t[79] !== i
    ? ((Fe =
        B && U != null
          ? (0, Q.jsx)(
              ue,
              {
                open: D,
                onOpenChange: O,
                conversationId: i,
                cwd: U,
                hostConfig: r,
                onStatusChange: De,
                onRequestReset: be,
              },
              k,
            )
          : null),
      (t[72] = k),
      (t[73] = U),
      (t[74] = be),
      (t[75] = De),
      (t[76] = r),
      (t[77] = B),
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
    u = oe(),
    [d, f] = (0, Z.useState)(``),
    p = ae(d, 200),
    { data: m, refetch: h } = Ae(r, i, $),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { enabled: !0 }), (t[0] = g))
    : (g = t[0]);
  let { data: v, isLoading: y, isFetching: b, isError: x, refetch: S } = Ne(r, i, $, g),
    C = v === void 0 ? [] : v,
    w;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { enabled: !0 }), (t[1] = w))
    : (w = t[1]);
  let { data: T, refetch: E } = Se(r, i, $, w),
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
  let ee = k,
    A;
  t[10] === p ? (A = t[11]) : ((A = p.trim()), (t[10] = p), (t[11] = A));
  let j = A,
    te = ee !== j,
    M = j.length > 0,
    N;
  t[12] !== r || t[13] !== i || t[14] !== j || t[15] !== M
    ? ((N = { cwd: r, hostConfig: i, operationSource: $, query: j, enabled: M }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = j),
      (t[15] = M),
      (t[16] = N))
    : (N = t[16]);
  let { data: ne, isFetching: P, isError: F, refetch: I } = _(Oe, N),
    re = Ze({ branches: C, currentBranch: n, defaultBranch: T }),
    R = !y && !b && !x && C.length === 0,
    B = $e(m),
    V;
  t[17] !== R || t[18] !== u
    ? ((V = R
        ? u.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[17] = R),
      (t[18] = u),
      (t[19] = V))
    : (V = t[19]);
  let ie = V,
    H = y || (b && re.length === 0),
    U = te || P,
    W;
  t[20] === S
    ? (W = t[21])
    : ((W = () => {
        S();
      }),
      (t[20] = S),
      (t[21] = W));
  let G;
  t[22] === I
    ? (G = t[23])
    : ((G = () => {
        I();
      }),
      (t[22] = I),
      (t[23] = G));
  let q;
  t[24] !== n || t[25] !== B
    ? ((q = (e) =>
        e === n && B > 0
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground`,
              children: (0, Q.jsx)(K, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: B },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = B),
      (t[26] = q))
    : (q = t[26]);
  let J;
  t[27] !== n ||
  t[28] !== o ||
  t[29] !== x ||
  t[30] !== F ||
  t[31] !== s ||
  t[32] !== c ||
  t[33] !== re ||
  t[34] !== d ||
  t[35] !== ne ||
  t[36] !== H ||
  t[37] !== U ||
  t[38] !== W ||
  t[39] !== G ||
  t[40] !== q
    ? ((J = (0, Q.jsx)(xe, {
        branches: re,
        selectedBranch: n,
        disabled: o,
        isError: x,
        isLoading: H,
        isSearchError: F,
        isSearchLoading: U,
        onClose: c,
        onRetry: W,
        onRetrySearch: G,
        onSearchQueryChange: f,
        onSelectBranch: s,
        renderBranchSubText: q,
        searchedBranches: ne,
        searchQuery: d,
      })),
      (t[27] = n),
      (t[28] = o),
      (t[29] = x),
      (t[30] = F),
      (t[31] = s),
      (t[32] = c),
      (t[33] = re),
      (t[34] = d),
      (t[35] = ne),
      (t[36] = H),
      (t[37] = U),
      (t[38] = W),
      (t[39] = G),
      (t[40] = q),
      (t[41] = J))
    : (J = t[41]);
  let se;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(z.Separator, {})), (t[42] = se))
    : (se = t[42]);
  let ce = R || o,
    Y;
  t[43] === l
    ? (Y = t[44])
    : ((Y = (e) => {
        (e.preventDefault(), l());
      }),
      (t[43] = l),
      (t[44] = Y));
  let le;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Q.jsx)(K, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[45] = le))
    : (le = t[45]);
  let X;
  t[46] !== ie || t[47] !== ce || t[48] !== Y
    ? ((X = (0, Q.jsx)(z.Item, {
        LeftIcon: L,
        disabled: ce,
        tooltipText: ie,
        onSelect: Y,
        children: le,
      })),
      (t[46] = ie),
      (t[47] = ce),
      (t[48] = Y),
      (t[49] = X))
    : (X = t[49]);
  let ue;
  return (
    t[50] !== J || t[51] !== X
      ? ((ue = (0, Q.jsxs)(Q.Fragment, { children: [J, se, X] })),
        (t[50] = J),
        (t[51] = X),
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
    l = oe(),
    u = ie(x.branchPrefix),
    d;
  t[0] !== u || t[1] !== i
    ? ((d = de({ branchPrefix: u, conversationTitle: i })), (t[0] = u), (t[1] = i), (t[2] = d))
    : (d = t[2]);
  let [f, p] = (0, Z.useState)(d),
    m = n && a != null,
    h;
  t[3] === m ? (h = t[4]) : ((h = { enabled: m }), (t[3] = m), (t[4] = h));
  let { data: g, isLoading: _, isFetching: v, isError: y } = Ne(a, o, $, h),
    b,
    S,
    C,
    w;
  if (t[5] !== f || t[6] !== g) {
    b = g === void 0 ? [] : g;
    let e = Ze({ branches: b, currentBranch: ``, defaultBranch: null });
    ((w = f.trim()),
      (S = w.endsWith(`/`)),
      (C = w.length > 0 && e.includes(w)),
      (t[5] = f),
      (t[6] = g),
      (t[7] = b),
      (t[8] = S),
      (t[9] = C),
      (t[10] = w));
  } else ((b = t[7]), (S = t[8]), (C = t[9]), (w = t[10]));
  let T = C,
    E = !_ && !v && !y && b.length === 0,
    D = !s && !_ && !v && !E && w.length > 0 && !S && !T && a != null,
    O;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(P, {
        children: (0, Q.jsx)(ne, {
          title: (0, Q.jsx)(K, {
            id: `composer.footer.branchSwitch.createDialog.title`,
            defaultMessage: `Create and checkout branch`,
            description: `Title for dialog that creates and checks out a new branch from the composer footer`,
          }),
        }),
      })),
      (t[11] = O))
    : (O = t[11]);
  let k;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(be, {})), (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        p(Ue(e.target.value));
      }),
      (t[13] = A))
    : (A = t[13]);
  let j;
  t[14] !== D || t[15] !== c || t[16] !== w
    ? ((j = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), !D)) return;
          c(w);
        }
      }),
      (t[14] = D),
      (t[15] = c),
      (t[16] = w),
      (t[17] = j))
    : (j = t[17]);
  let M;
  t[18] === l
    ? (M = t[19])
    : ((M = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[18] = l),
      (t[19] = M));
  let F;
  t[20] === l
    ? (F = t[21])
    : ((F = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[20] = l),
      (t[21] = F));
  let I;
  t[22] !== f || t[23] !== M || t[24] !== F || t[25] !== j
    ? ((I = (0, Q.jsx)(`input`, {
        autoFocus: !0,
        className: `h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground`,
        value: f,
        onChange: A,
        onKeyDown: j,
        placeholder: M,
        "aria-label": F,
      })),
      (t[22] = f),
      (t[23] = M),
      (t[24] = F),
      (t[25] = j),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] !== T || t[28] !== S || t[29] !== s
    ? ((L = S
        ? (0, Q.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, Q.jsx)(K, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : T && !s
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-token-error-foreground`,
              children: (0, Q.jsx)(K, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (t[27] = T),
      (t[28] = S),
      (t[29] = s),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] !== I || t[32] !== L
    ? ((R = (0, Q.jsxs)(P, { className: `flex flex-col gap-2`, children: [k, I, L] })),
      (t[31] = I),
      (t[32] = L),
      (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] === r
    ? (z = t[35])
    : ((z = () => {
        r(!1);
      }),
      (t[34] = r),
      (t[35] = z));
  let B;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(K, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[36] = B))
    : (B = t[36]);
  let V;
  t[37] === z
    ? (V = t[38])
    : ((V = (0, Q.jsx)(N, { color: `secondary`, onClick: z, children: B })),
      (t[37] = z),
      (t[38] = V));
  let H = !D,
    U;
  t[39] !== c || t[40] !== w
    ? ((U = () => {
        c(w);
      }),
      (t[39] = c),
      (t[40] = w),
      (t[41] = U))
    : (U = t[41]);
  let ae;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Q.jsx)(K, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[42] = ae))
    : (ae = t[42]);
  let W;
  t[43] !== s || t[44] !== H || t[45] !== U
    ? ((W = (0, Q.jsx)(N, { color: `primary`, disabled: H, loading: s, onClick: U, children: ae })),
      (t[43] = s),
      (t[44] = H),
      (t[45] = U),
      (t[46] = W))
    : (W = t[46]);
  let G;
  t[47] !== V || t[48] !== W
    ? ((G = (0, Q.jsx)(P, { children: (0, Q.jsxs)(re, { children: [V, W] }) })),
      (t[47] = V),
      (t[48] = W),
      (t[49] = G))
    : (G = t[49]);
  let q;
  t[50] !== R || t[51] !== G
    ? ((q = (0, Q.jsxs)(ee, { "data-codex-branch-create-dialog": ``, children: [O, R, G] })),
      (t[50] = R),
      (t[51] = G),
      (t[52] = q))
    : (q = t[52]);
  let J;
  return (
    t[53] !== r || t[54] !== n || t[55] !== q
      ? ((J = (0, Q.jsx)(te, { size: `feature`, open: n, onOpenChange: r, children: q })),
        (t[53] = r),
        (t[54] = n),
        (t[55] = q),
        (t[56] = J))
      : (J = t[56]),
    J
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
    l = oe(),
    { data: u } = Ae(a, o, $),
    f;
  t[0] === a ? (f = t[1]) : ((f = w(a)), (t[0] = a), (t[1] = f));
  let p;
  t[2] === f
    ? (p = t[3])
    : ((p = { cwd: f, includeUntrackedFiles: !1, operationSource: $, source: `staged` }),
      (t[2] = f),
      (t[3] = p));
  let m;
  t[4] === n
    ? (m = t[5])
    : ((m = { enabled: n, staleTime: S.FIVE_SECONDS }), (t[4] = n), (t[5] = m));
  let { data: h } = d(a, o, `review-summary`, p, $, m),
    g;
  t[6] === a ? (g = t[7]) : ((g = w(a)), (t[6] = a), (t[7] = g));
  let _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = { cwd: g, operationSource: $, source: `unstaged` }), (t[8] = g), (t[9] = _));
  let v;
  t[10] === n
    ? (v = t[11])
    : ((v = { enabled: n, staleTime: S.FIVE_SECONDS }), (t[10] = n), (t[11] = v));
  let { data: y } = d(a, o, `review-summary`, _, $, v),
    b,
    x,
    C,
    T,
    E,
    D,
    O,
    k,
    A;
  if (
    t[12] !== i ||
    t[13] !== l ||
    t[14] !== r ||
    t[15] !== n ||
    t[16] !== h ||
    t[17] !== u ||
    t[18] !== s ||
    t[19] !== y
  ) {
    let e = [h, y],
      a = le(e),
      o = a?.totalAdditions ?? 0,
      c = a?.totalDeletions ?? 0,
      d = o + c > 0,
      f = i.length > 0,
      p;
    t[29] === u ? (p = t[30]) : ((p = $e(u)), (t[29] = u), (t[30] = p));
    let m = p,
      g;
    t[31] !== l || t[32] !== s
      ? ((g =
          s ??
          l.formatMessage({
            id: `composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback`,
            defaultMessage: `the selected branch`,
            description: `Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable`,
          })),
        (t[31] = l),
        (t[32] = s),
        (t[33] = g))
      : (g = t[33]);
    let _ = g;
    ((C = te),
      (T = `feature`),
      (E = n),
      (D = r),
      (x = ee),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((A = (0, Q.jsx)(P, {
            children: (0, Q.jsx)(ne, {
              title: (0, Q.jsx)(K, {
                id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                defaultMessage: `Commit changes to switch branch`,
                description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
              }),
            }),
          })),
          (t[34] = A))
        : (A = t[34]),
      (b = P),
      (O = `text-token-description-foreground`),
      (k = f
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, Q.jsx)(K, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: i.map((t, n) => {
                  let r = fe(t, e);
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-token-foreground`,
                      children: [
                        (0, Q.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, Q.jsx)(Y, {
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
              (0, Q.jsx)(K, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : d
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children: [
                (0, Q.jsx)(K, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff`,
                  defaultMessage: `Commit`,
                  description: `Body prefix in the uncommitted changes dialog before diff stats`,
                }),
                (0, Q.jsx)(Y, {
                  className: `inline-flex align-middle`,
                  linesAdded: o,
                  linesRemoved: c,
                }),
                (0, Q.jsx)(K, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff`,
                  defaultMessage: `changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                  description: `Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch`,
                  values: { fileCount: m, branchName: _ },
                }),
              ],
            })
          : (0, Q.jsx)(K, {
              id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff`,
              defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
              description: `Body text in the uncommitted changes dialog when diff stats are unavailable`,
              values: { fileCount: m, branchName: _ },
            })),
      (t[12] = i),
      (t[13] = l),
      (t[14] = r),
      (t[15] = n),
      (t[16] = h),
      (t[17] = u),
      (t[18] = s),
      (t[19] = y),
      (t[20] = b),
      (t[21] = x),
      (t[22] = C),
      (t[23] = T),
      (t[24] = E),
      (t[25] = D),
      (t[26] = O),
      (t[27] = k),
      (t[28] = A));
  } else
    ((b = t[20]),
      (x = t[21]),
      (C = t[22]),
      (T = t[23]),
      (E = t[24]),
      (D = t[25]),
      (O = t[26]),
      (k = t[27]),
      (A = t[28]));
  let j;
  t[35] !== b || t[36] !== O || t[37] !== k
    ? ((j = (0, Q.jsx)(b, { className: O, children: k })),
      (t[35] = b),
      (t[36] = O),
      (t[37] = k),
      (t[38] = j))
    : (j = t[38]);
  let M;
  t[39] === r
    ? (M = t[40])
    : ((M = () => {
        r(!1);
      }),
      (t[39] = r),
      (t[40] = M));
  let F;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(K, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[41] = F))
    : (F = t[41]);
  let I;
  t[42] === M
    ? (I = t[43])
    : ((I = (0, Q.jsx)(N, { color: `secondary`, onClick: M, children: F })),
      (t[42] = M),
      (t[43] = I));
  let L;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(K, {
        id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
        defaultMessage: `Commit and switch branch…`,
        description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[44] = L))
    : (L = t[44]);
  let R;
  t[45] === c
    ? (R = t[46])
    : ((R = (0, Q.jsx)(N, { color: `primary`, onClick: c, children: L })),
      (t[45] = c),
      (t[46] = R));
  let z;
  t[47] !== I || t[48] !== R
    ? ((z = (0, Q.jsx)(P, { children: (0, Q.jsxs)(re, { children: [I, R] }) })),
      (t[47] = I),
      (t[48] = R),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] !== x || t[51] !== j || t[52] !== z || t[53] !== A
    ? ((B = (0, Q.jsxs)(x, { children: [A, j, z] })),
      (t[50] = x),
      (t[51] = j),
      (t[52] = z),
      (t[53] = A),
      (t[54] = B))
    : (B = t[54]);
  let V;
  return (
    t[55] !== C || t[56] !== T || t[57] !== E || t[58] !== D || t[59] !== B
      ? ((V = (0, Q.jsx)(C, { size: T, open: E, onOpenChange: D, children: B })),
        (t[55] = C),
        (t[56] = T),
        (t[57] = E),
        (t[58] = D),
        (t[59] = B),
        (t[60] = V))
      : (V = t[60]),
    V
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
    ((et = l()),
      D(),
      p(),
      (Z = t(T(), 1)),
      G(),
      B(),
      V(),
      F(),
      j(),
      M(),
      A(),
      me(),
      se(),
      ce(),
      h(),
      ke(),
      we(),
      Ie(),
      pe(),
      Me(),
      ze(),
      He(),
      R(),
      ge(),
      ve(),
      X(),
      he(),
      f(),
      H(),
      g(),
      U(),
      ye(),
      Ge(),
      (Q = k()),
      ($ = `composer_branch_switcher`));
  });
export { Ie as a, Ae as c, Ue as i, Oe as l, tt as n, Ne as o, Ge as r, Me as s, Ke as t, ke as u };
//# sourceMappingURL=git-branch-switcher.js.map
