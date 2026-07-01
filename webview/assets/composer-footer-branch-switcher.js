import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  Fl as r,
  GP as i,
  Gr as a,
  HP as o,
  La as s,
  Qi as c,
  Qj as l,
  RV as u,
  Ra as d,
  TP as f,
  Ur as p,
  VP as m,
  Yr as ee,
  Zl as te,
  bB as h,
  cl as g,
  eM as _,
  fN as v,
  hN as y,
  iu as b,
  jV as x,
  lM as S,
  ll as C,
  mN as ne,
  ol as re,
  pN as w,
  qP as ie,
  ru as ae,
  uM as oe,
  wB as se,
  wP as ce,
  zV as T,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Kl as le,
  hu as E,
  mu as ue,
  nO as de,
  ph as fe,
  ql as pe,
  tO as me,
} from "./app-initial~app-main~onboarding-page.js";
import {
  R as D,
  V as he,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  a as O,
  i as ge,
  r as k,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import { c as _e, l as ve, n as A, s as j, t as M, u as ye } from "./git-branch-switcher.js";
import { n as be, t as xe } from "./use-git-recent-branches.js";
function Se(e) {
  let t = (0, Ce.c)(11),
    { children: n, color: r, borderColor: i, badgeEnabled: a } = e,
    o = r === void 0 ? `bg-token-text-link-active-foreground` : r,
    s = a === void 0 ? !0 : a;
  if (!s) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, N.jsx)(N.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let c = !s && `hidden`,
    l;
  t[2] !== i || t[3] !== o || t[4] !== c
    ? ((l = ce(
        `border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]`,
        o,
        i,
        c,
      )),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === l ? (u = t[7]) : ((u = (0, N.jsx)(`div`, { className: l })), (t[6] = l), (t[7] = u));
  let d;
  return (
    t[8] !== n || t[9] !== u
      ? ((d = (0, N.jsxs)(`div`, { className: `relative`, children: [n, u] })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var Ce,
  N,
  we = e(() => {
    ((Ce = u()), f(), (N = x()));
  });
function Te(e) {
  let t = (0, I.c)(48),
    {
      startingState: n,
      setStartingState: r,
      hostConfig: o,
      className: u,
      side: d,
      gitRootOverride: f,
      branchSource: m,
    } = e,
    ee = d === void 0 ? `top` : d,
    h = ie(),
    [g, _] = (0, L.useState)(!1),
    [y, x] = (0, L.useState)(!1),
    [w, ae] = (0, L.useState)(``),
    oe = C(),
    T;
  t[0] === y ? (T = t[1]) : ((T = { enabled: y }), (t[0] = y), (t[1] = T));
  let le = he(T),
    E = f ?? le,
    ue = re(oe),
    de = ue?.default_branch ?? `main`,
    fe = ue?.id ?? null,
    D = m === `worktree` || !!f,
    O = b(w, 300),
    k;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (e) => {
        (e && x(!0), _(e), e || ae(``));
      }),
      (t[2] = k))
    : (k = t[2]);
  let A = k,
    j = !D && !!fe && g && !!O,
    M;
  t[3] === j ? (M = t[4]) : ((M = { enabled: j }), (t[3] = j), (t[4] = M));
  let {
      data: ye,
      isFetching: be,
      error: xe,
      hasNextPage: Ce,
      isFetchingNextPage: N,
      fetchNextPage: we,
      refetch: Te,
    } = te(fe, O, M),
    P = D && y,
    F;
  t[5] === P ? (F = t[6]) : ((F = { enabled: P }), (t[5] = P), (t[6] = F));
  let { data: z, isLoading: ke, refetch: B } = pe(E, o, `async_task_starting_state_dropdown`, F),
    V = D && y && !!E,
    H;
  t[7] === V ? (H = t[8]) : ((H = { enabled: V }), (t[7] = V), (t[8] = H));
  let { data: U } = _e(E, o, `async_task_starting_state_dropdown`, H),
    {
      branches: W,
      defaultBranch: Ae,
      fetching: je,
      error: Me,
      refetch: G,
    } = De({
      gitRoot: E,
      hostConfig: o,
      currentBranch: z ?? `main`,
      remoteDefaultBranch: de,
      enabled: D && y,
    }),
    Ne = O.trim().toLowerCase(),
    K = Ne.length > 0,
    Pe = D && g && K,
    Fe;
  t[9] !== O || t[10] !== E || t[11] !== o || t[12] !== Pe
    ? ((Fe = {
        cwd: E,
        hostConfig: o,
        operationSource: `async_task_starting_state_dropdown`,
        query: O,
        enabled: Pe,
      }),
      (t[9] = O),
      (t[10] = E),
      (t[11] = o),
      (t[12] = Pe),
      (t[13] = Fe))
    : (Fe = t[13]);
  let { data: Ie, isFetching: Le, error: Re, refetch: ze } = se(ve, Fe),
    Be = n.type === `branch` ? n.branchName : void 0,
    q = D ? Ae : de,
    Ve = D ? (K ? Ie : W) : K ? ye?.filter((e) => e.toLowerCase().includes(Ne)) : void 0,
    He = !K || q.toLowerCase().includes(Ne),
    Ue = Ve?.filter((e) => e !== q),
    We = D ? (K ? Le : je) : be,
    Ge = D ? (K ? Re : Me) : xe,
    Ke = D ? (K ? ze : G) : Te,
    qe = !D && Ce,
    Je = z ?? q,
    Ye = n.type === `branch` ? n.branchName : Je,
    Xe = U?.type === `success` ? U.stagedCount + U.unstagedCount + U.untrackedCount > 0 : !1,
    Ze = D && Xe,
    Qe = n.type === `working-tree` && Xe,
    $e =
      n.type === `working-tree`
        ? (0, R.jsx)(i, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: z ?? q },
          })
        : (0, R.jsx)(i, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: n.branchName },
          }),
    et;
  t[14] === $e
    ? (et = t[15])
    : ((et = (0, R.jsx)(c, { electron: !0, children: $e })), (t[14] = $e), (t[15] = et));
  let tt;
  t[16] === Ye
    ? (tt = t[17])
    : ((tt = (0, R.jsx)(c, { browser: !0, children: Ye })), (t[16] = Ye), (t[17] = tt));
  let nt = (0, R.jsxs)(R.Fragment, {
      children: [
        et,
        (0, R.jsx)(c, {
          extension: !0,
          children: Qe
            ? (0, R.jsx)(i, {
                id: `composer.remote.localWorkingTree`,
                defaultMessage: `Use local changes`,
                description: `Label for local working tree selection in remote composer`,
              })
            : Ye,
        }),
        tt,
      ],
    }),
    rt,
    it;
  (t[18] !== g || t[19] !== B || t[20] !== G || t[21] !== D
    ? ((rt = () => {
        g && (B(), D && G());
      }),
      (it = [g, B, G, D]),
      (t[18] = g),
      (t[19] = B),
      (t[20] = G),
      (t[21] = D),
      (t[22] = rt),
      (t[23] = it))
    : ((rt = t[22]), (it = t[23])),
    (0, L.useEffect)(rt, it));
  let at;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, R.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, R.jsx)(i, {
          id: `composer.remote.branchStartingPoint`,
          defaultMessage: `What branch should this task start from?`,
          description: `Section label for branch starting point selector`,
        }),
      })),
      (t[24] = at))
    : (at = t[24]);
  let ot;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, R.jsx)(i, {
        id: `composer.startingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the starting state control in the composer footer`,
      })),
      (t[25] = ot))
    : (ot = t[25]);
  let st;
  t[26] === u ? (st = t[27]) : ((st = ce(`whitespace-nowrap`, u)), (t[26] = u), (t[27] = st));
  let ct = n.type === `working-tree` && Xe,
    lt;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, R.jsx)(s, { className: `icon-xs` })), (t[28] = lt))
    : (lt = t[28]);
  let ut;
  t[29] === ct
    ? (ut = t[30])
    : ((ut = (0, R.jsx)(Se, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: ct,
        children: lt,
      })),
      (t[29] = ct),
      (t[30] = ut));
  let J;
  t[31] === h
    ? (J = t[32])
    : ((J = h.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[31] = h),
      (t[32] = J));
  let dt;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        ae(e.currentTarget.value);
      }),
      (t[33] = dt))
    : (dt = t[33]);
  let Y;
  t[34] === A
    ? (Y = t[35])
    : ((Y = (e) => {
        e.key === `Enter` && A(!1);
      }),
      (t[34] = A),
      (t[35] = Y));
  let X;
  t[36] !== w || t[37] !== J || t[38] !== Y
    ? ((X = (0, R.jsx)(a.SearchInput, {
        autoFocus: !1,
        placeholder: J,
        value: w,
        onChange: dt,
        onKeyDown: Y,
      })),
      (t[36] = w),
      (t[37] = J),
      (t[38] = Y),
      (t[39] = X))
    : (X = t[39]);
  let ft = Ze
      ? (0, R.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, R.jsx)(Oe, {
              children: (0, R.jsx)(i, {
                id: `composer.remote.localFileStateHeading`,
                defaultMessage: `Local file state`,
                description: `Section heading for local working tree selection`,
              }),
            }),
            (0, R.jsx)(a.Item, {
              LeftIcon: Ee,
              RightIcon: n.type === `working-tree` ? S : void 0,
              SubText: Xe
                ? (0, R.jsx)(`span`, {
                    className: `text-token-description-foreground`,
                    children: (0, R.jsx)(i, {
                      id: `composer.remote.currentEditsSuffix.useLocal`,
                      defaultMessage: `with local code changes`,
                      description: `Suffix text indicating the selection includes current edits`,
                    }),
                  })
                : void 0,
              onClick: () => {
                (r({ type: `working-tree` }), A(!1));
              },
              children: ke ? null : (0, R.jsx)(R.Fragment, { children: z ?? q }),
            }),
          ],
        })
      : null,
    Z;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, R.jsx)(Oe, {
        children: (0, R.jsx)(i, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[40] = Z))
    : (Z = t[40]);
  let pt =
      O && We
        ? (0, R.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, R.jsx)(ne, { className: `icon-xxs` }),
          })
        : O && Ge
          ? (0, R.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground`,
              children: [
                (0, R.jsx)(i, {
                  id: `composer.remote.errorLoadingBranches`,
                  defaultMessage: `Error loading branches`,
                  description: `Error message for remote starting point selector`,
                }),
                (0, R.jsx)(v, {
                  color: `ghost`,
                  size: `icon`,
                  className: `text-token-description-foreground`,
                  onClick: () => {
                    Ke();
                  },
                  children: (0, R.jsx)(me, { className: `icon-xxs` }),
                }),
              ],
            })
          : (0, R.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                He &&
                  (0, R.jsx)(a.Item, {
                    LeftIcon: s,
                    RightIcon: Be === q ? S : void 0,
                    onClick: () => {
                      (r({ type: `branch`, branchName: q }), A(!1));
                    },
                    children: q,
                  }),
                Ue?.map((e) =>
                  (0, R.jsx)(
                    a.Item,
                    {
                      LeftIcon: s,
                      RightIcon: e === Be ? S : void 0,
                      onClick: () => {
                        (r({ type: `branch`, branchName: e }), A(!1));
                      },
                      children: e,
                    },
                    e,
                  ),
                ),
                qe &&
                  (0, R.jsx)(a.Item, {
                    onClick: () => {
                      N || we();
                    },
                    className: `w-full text-sm text-token-text-secondary`,
                    children: N
                      ? (0, R.jsx)(i, {
                          id: `composer.remote.loadingMoreBranches`,
                          defaultMessage: `Loading…`,
                          description: `Loading more branches`,
                        })
                      : null,
                  }),
              ],
            }),
    Q;
  t[41] !== ft || t[42] !== Z || t[43] !== pt
    ? ((Q = (0, R.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [ft, Z, pt],
      })),
      (t[41] = ft),
      (t[42] = Z),
      (t[43] = pt),
      (t[44] = Q))
    : (Q = t[44]);
  let $;
  return (
    t[45] !== X || t[46] !== Q
      ? (($ = (0, R.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [X, Q],
        })),
        (t[45] = X),
        (t[46] = Q),
        (t[47] = $))
      : ($ = t[47]),
    (0, R.jsx)(p, {
      side: ee,
      open: g,
      onOpenChange: A,
      triggerButton: (0, R.jsx)(l, {
        tooltipContent: at,
        children: (0, R.jsx)(ge, {
          categoryLabel: ot,
          className: st,
          collapse: `secondary`,
          icon: ut,
          indicator: `collapsible-chevron`,
          value: nt,
          valueClassName: `max-w-40`,
        }),
      }),
      children: $,
    })
  );
}
function Ee(e) {
  let t = (0, I.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, R.jsx)(Se, {
          borderColor: `border-token-side-bar-background`,
          children: (0, R.jsx)(s, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function De(e) {
  let t = (0, I.c)(18),
    { gitRoot: n, hostConfig: r, currentBranch: i, remoteDefaultBranch: a, enabled: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let {
      data: c,
      isLoading: l,
      isFetching: u,
      error: d,
      refetch: f,
    } = E(n, r, `async_task_starting_state_dropdown`, s),
    p;
  t[2] === o ? (p = t[3]) : ((p = { enabled: o }), (t[2] = o), (t[3] = p));
  let {
      data: m,
      isLoading: ee,
      isFetching: te,
      error: h,
      refetch: g,
    } = be(n, r, `async_task_starting_state_dropdown`, p),
    _;
  if (t[4] !== i || t[5] !== c || t[6] !== m || t[7] !== a) {
    let e = [
        c,
        i,
        P({ currentBranch: i, gitDefaultBranch: c, recentBranches: m, remoteDefaultBranch: a }),
        ...(m ?? []),
      ],
      n = new Set();
    ((_ = []),
      e.forEach((e) => {
        F({ branch: e, list: _, seen: n });
      }),
      (t[4] = i),
      (t[5] = c),
      (t[6] = m),
      (t[7] = a),
      (t[8] = _));
  } else _ = t[8];
  let v = _[0] ?? i ?? a,
    y = l || u || ee || te,
    b = d ?? h,
    x;
  t[9] !== f || t[10] !== g
    ? ((x = async () => {
        await Promise.all([f(), g()]);
      }),
      (t[9] = f),
      (t[10] = g),
      (t[11] = x))
    : (x = t[11]);
  let S = x,
    C;
  return (
    t[12] !== _ || t[13] !== v || t[14] !== b || t[15] !== y || t[16] !== S
      ? ((C = { branches: _, defaultBranch: v, fetching: y, error: b, refetch: S }),
        (t[12] = _),
        (t[13] = v),
        (t[14] = b),
        (t[15] = y),
        (t[16] = S),
        (t[17] = C))
      : (C = t[17]),
    C
  );
}
function Oe(e) {
  let t = (0, I.c)(5),
    { className: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = ce(`text-sm text-token-description-foreground px-[var(--padding-row-x)] py-1`, n)),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, R.jsx)(`div`, { className: i, children: r })), (t[2] = r), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function P({ currentBranch: e, gitDefaultBranch: t, recentBranches: n, remoteDefaultBranch: r }) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function F({ branch: e, list: t, seen: n }) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var I,
  L,
  R,
  z = e(() => {
    ((I = u()),
      f(),
      h(),
      (L = t(T(), 1)),
      o(),
      r(),
      we(),
      w(),
      ee(),
      y(),
      _(),
      n(),
      ye(),
      le(),
      ue(),
      xe(),
      j(),
      d(),
      oe(),
      de(),
      D(),
      ae(),
      g(),
      O(),
      fe(),
      (R = x()));
  });
function ke(e) {
  let t = (0, H.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, U.jsx)(M, { ...e, renderStaticBranch: V, renderControl: B })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function B(e) {
  let { currentBranch: t, disabled: n, isPending: r, switchTooltipText: a } = e;
  return t == null
    ? null
    : (0, U.jsx)(l, {
        tooltipContent: a,
        children: (0, U.jsx)(ge, {
          categoryLabel: (0, U.jsx)(i, { ...W.branchCategory }),
          className: `px-0`,
          collapse: `sm`,
          disabled: n,
          icon: (0, U.jsx)(s, { className: `icon-xs` }),
          indicator: r ? `pending` : `collapsible-chevron`,
          value: t,
          valueClassName: `max-w-40 text-sm`,
        }),
      });
}
function V(e) {
  let { currentBranch: t } = e;
  return (0, U.jsx)(l, {
    tooltipContent: t,
    children: (0, U.jsx)(k, {
      categoryLabel: (0, U.jsx)(i, { ...W.branchCategory }),
      className: `text-token-description-foreground`,
      collapse: `sm`,
      icon: (0, U.jsx)(s, { className: `icon-xs` }),
      value: t,
      valueClassName: `max-w-40 text-sm`,
    }),
  });
}
var H,
  U,
  W,
  Ae = e(() => {
    ((H = u()),
      o(),
      _(),
      d(),
      A(),
      O(),
      (U = x()),
      (W = m({
        branchCategory: {
          id: `composer.footer.branchCategory`,
          defaultMessage: `Branch`,
          description: `Category label for the branch control in the composer footer`,
        },
      })));
  });
export { Se as a, z as i, Ae as n, we as o, Te as r, ke as t };
//# sourceMappingURL=composer-footer-branch-switcher.js.map
