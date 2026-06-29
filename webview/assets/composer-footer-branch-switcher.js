import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  ac as r,
  kl as i,
  tc as a,
  xl as o,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Co as s,
  Dc as c,
  Dd as l,
  Ec as u,
  Ed as d,
  Es as f,
  Jp as p,
  Sp as m,
  Ts as ee,
  Xp as te,
  Yp as h,
  Zp as g,
  _o as _,
  am as v,
  fp as y,
  im as b,
  mp as x,
  wd as S,
  xp as C,
  yo as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  En as ne,
  Mn as T,
  Nn as re,
  aw as ie,
  cw as E,
  dn as ae,
  iw as D,
  uw as oe,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { wt as se } from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Dn as ce,
  On as O,
  R as le,
  z as ue,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  n as de,
  r as k,
  t as A,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4.js";
import {
  B as j,
  U as fe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  nt as M,
  rt as pe,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import { c as me, l as he, n as N, s as ge, t as P, u as _e } from "./git-branch-switcher.js";
import { n as ve, t as ye } from "./use-git-recent-branches.js";
function be(e) {
  let t = (0, xe.c)(11),
    { children: n, color: r, borderColor: i, badgeEnabled: a } = e,
    o = r === void 0 ? `bg-token-text-link-active-foreground` : r,
    s = a === void 0 ? !0 : a;
  if (!s) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, F.jsx)(F.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let c = !s && `hidden`,
    l;
  t[2] !== i || t[3] !== o || t[4] !== c
    ? ((l = b(
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
  t[6] === l ? (u = t[7]) : ((u = (0, F.jsx)(`div`, { className: l })), (t[6] = l), (t[7] = u));
  let d;
  return (
    t[8] !== n || t[9] !== u
      ? ((d = (0, F.jsxs)(`div`, { className: `relative`, children: [n, u] })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var xe,
  F,
  Se = e(() => {
    ((xe = n()), v(), (F = o()));
  });
function Ce(e) {
  let t = (0, L.c)(48),
    {
      startingState: n,
      setStartingState: i,
      hostConfig: a,
      className: o,
      side: s,
      gitRootOverride: c,
      branchSource: d,
    } = e,
    f = s === void 0 ? `top` : s,
    m = oe(),
    [h, g] = (0, R.useState)(!1),
    [v, x] = (0, R.useState)(!1),
    [T, ie] = (0, R.useState)(``),
    ae = l(),
    D;
  t[0] === v ? (D = t[1]) : ((D = { enabled: v }), (t[0] = v), (t[1] = D));
  let se = fe(D),
    O = c ?? se,
    le = S(ae),
    ue = le?.default_branch ?? `main`,
    k = le?.id ?? null,
    A = d === `worktree` || !!c,
    j = re(T, 300),
    M;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        (e && x(!0), g(e), e || ie(``));
      }),
      (t[2] = M))
    : (M = t[2]);
  let N = M,
    ge = !A && !!k && h && !!j,
    P;
  t[3] === ge ? (P = t[4]) : ((P = { enabled: ge }), (t[3] = ge), (t[4] = P));
  let {
      data: _e,
      isFetching: ve,
      error: ye,
      hasNextPage: xe,
      isFetchingNextPage: F,
      fetchNextPage: Se,
      refetch: Ce,
    } = ne(k, j, P),
    De = A && v,
    I;
  t[5] === De ? (I = t[6]) : ((I = { enabled: De }), (t[5] = De), (t[6] = I));
  let { data: B, isLoading: Oe, refetch: V } = pe(O, a, `async_task_starting_state_dropdown`, I),
    H = A && v && !!O,
    U;
  t[7] === H ? (U = t[8]) : ((U = { enabled: H }), (t[7] = H), (t[8] = U));
  let { data: W } = me(O, a, `async_task_starting_state_dropdown`, U),
    {
      branches: ke,
      defaultBranch: Ae,
      fetching: je,
      error: Me,
      refetch: G,
    } = Te({
      gitRoot: O,
      hostConfig: a,
      currentBranch: B ?? `main`,
      remoteDefaultBranch: ue,
      enabled: A && v,
    }),
    Ne = j.trim().toLowerCase(),
    K = Ne.length > 0,
    Pe = A && h && K,
    Fe;
  t[9] !== j || t[10] !== O || t[11] !== a || t[12] !== Pe
    ? ((Fe = {
        cwd: O,
        hostConfig: a,
        operationSource: `async_task_starting_state_dropdown`,
        query: j,
        enabled: Pe,
      }),
      (t[9] = j),
      (t[10] = O),
      (t[11] = a),
      (t[12] = Pe),
      (t[13] = Fe))
    : (Fe = t[13]);
  let { data: Ie, isFetching: Le, error: Re, refetch: ze } = r(he, Fe),
    Be = n.type === `branch` ? n.branchName : void 0,
    q = A ? Ae : ue,
    Ve = A ? (K ? Ie : ke) : K ? _e?.filter((e) => e.toLowerCase().includes(Ne)) : void 0,
    He = !K || q.toLowerCase().includes(Ne),
    Ue = Ve?.filter((e) => e !== q),
    We = A ? (K ? Le : je) : ve,
    Ge = A ? (K ? Re : Me) : ye,
    Ke = A ? (K ? ze : G) : Ce,
    qe = !A && xe,
    Je = B ?? q,
    Ye = n.type === `branch` ? n.branchName : Je,
    Xe = W?.type === `success` ? W.stagedCount + W.unstagedCount + W.untrackedCount > 0 : !1,
    Ze = A && Xe,
    Qe = n.type === `working-tree` && Xe,
    $e =
      n.type === `working-tree`
        ? (0, z.jsx)(E, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: B ?? q },
          })
        : (0, z.jsx)(E, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: n.branchName },
          }),
    et;
  t[14] === $e
    ? (et = t[15])
    : ((et = (0, z.jsx)(ee, { electron: !0, children: $e })), (t[14] = $e), (t[15] = et));
  let tt;
  t[16] === Ye
    ? (tt = t[17])
    : ((tt = (0, z.jsx)(ee, { browser: !0, children: Ye })), (t[16] = Ye), (t[17] = tt));
  let nt = (0, z.jsxs)(z.Fragment, {
      children: [
        et,
        (0, z.jsx)(ee, {
          extension: !0,
          children: Qe
            ? (0, z.jsx)(E, {
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
  (t[18] !== h || t[19] !== V || t[20] !== G || t[21] !== A
    ? ((rt = () => {
        h && (V(), A && G());
      }),
      (it = [h, V, G, A]),
      (t[18] = h),
      (t[19] = V),
      (t[20] = G),
      (t[21] = A),
      (t[22] = rt),
      (t[23] = it))
    : ((rt = t[22]), (it = t[23])),
    (0, R.useEffect)(rt, it));
  let J;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, z.jsx)(E, {
          id: `composer.remote.branchStartingPoint`,
          defaultMessage: `What branch should this task start from?`,
          description: `Section label for branch starting point selector`,
        }),
      })),
      (t[24] = J))
    : (J = t[24]);
  let at;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, z.jsx)(E, {
        id: `composer.startingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the starting state control in the composer footer`,
      })),
      (t[25] = at))
    : (at = t[25]);
  let ot;
  t[26] === o ? (ot = t[27]) : ((ot = b(`whitespace-nowrap`, o)), (t[26] = o), (t[27] = ot));
  let st = n.type === `working-tree` && Xe,
    ct;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, z.jsx)(u, { className: `icon-xs` })), (t[28] = ct))
    : (ct = t[28]);
  let lt;
  t[29] === st
    ? (lt = t[30])
    : ((lt = (0, z.jsx)(be, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: st,
        children: ct,
      })),
      (t[29] = st),
      (t[30] = lt));
  let Y;
  t[31] === m
    ? (Y = t[32])
    : ((Y = m.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[31] = m),
      (t[32] = Y));
  let ut;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (e) => {
        ie(e.currentTarget.value);
      }),
      (t[33] = ut))
    : (ut = t[33]);
  let X;
  t[34] === N
    ? (X = t[35])
    : ((X = (e) => {
        e.key === `Enter` && N(!1);
      }),
      (t[34] = N),
      (t[35] = X));
  let Z;
  t[36] !== T || t[37] !== Y || t[38] !== X
    ? ((Z = (0, z.jsx)(w.SearchInput, {
        autoFocus: !1,
        placeholder: Y,
        value: T,
        onChange: ut,
        onKeyDown: X,
      })),
      (t[36] = T),
      (t[37] = Y),
      (t[38] = X),
      (t[39] = Z))
    : (Z = t[39]);
  let dt = Ze
      ? (0, z.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, z.jsx)(Ee, {
              children: (0, z.jsx)(E, {
                id: `composer.remote.localFileStateHeading`,
                defaultMessage: `Local file state`,
                description: `Section heading for local working tree selection`,
              }),
            }),
            (0, z.jsx)(w.Item, {
              LeftIcon: we,
              RightIcon: n.type === `working-tree` ? C : void 0,
              SubText: Xe
                ? (0, z.jsx)(`span`, {
                    className: `text-token-description-foreground`,
                    children: (0, z.jsx)(E, {
                      id: `composer.remote.currentEditsSuffix.useLocal`,
                      defaultMessage: `with local code changes`,
                      description: `Suffix text indicating the selection includes current edits`,
                    }),
                  })
                : void 0,
              onClick: () => {
                (i({ type: `working-tree` }), N(!1));
              },
              children: Oe ? null : (0, z.jsx)(z.Fragment, { children: B ?? q }),
            }),
          ],
        })
      : null,
    Q;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, z.jsx)(Ee, {
        children: (0, z.jsx)(E, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[40] = Q))
    : (Q = t[40]);
  let ft =
      j && We
        ? (0, z.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, z.jsx)(te, { className: `icon-xxs` }),
          })
        : j && Ge
          ? (0, z.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground`,
              children: [
                (0, z.jsx)(E, {
                  id: `composer.remote.errorLoadingBranches`,
                  defaultMessage: `Error loading branches`,
                  description: `Error message for remote starting point selector`,
                }),
                (0, z.jsx)(p, {
                  color: `ghost`,
                  size: `icon`,
                  className: `text-token-description-foreground`,
                  onClick: () => {
                    Ke();
                  },
                  children: (0, z.jsx)(ce, { className: `icon-xxs` }),
                }),
              ],
            })
          : (0, z.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                He &&
                  (0, z.jsx)(w.Item, {
                    LeftIcon: u,
                    RightIcon: Be === q ? C : void 0,
                    onClick: () => {
                      (i({ type: `branch`, branchName: q }), N(!1));
                    },
                    children: q,
                  }),
                Ue?.map((e) =>
                  (0, z.jsx)(
                    w.Item,
                    {
                      LeftIcon: u,
                      RightIcon: e === Be ? C : void 0,
                      onClick: () => {
                        (i({ type: `branch`, branchName: e }), N(!1));
                      },
                      children: e,
                    },
                    e,
                  ),
                ),
                qe &&
                  (0, z.jsx)(w.Item, {
                    onClick: () => {
                      F || Se();
                    },
                    className: `w-full text-sm text-token-text-secondary`,
                    children: F
                      ? (0, z.jsx)(E, {
                          id: `composer.remote.loadingMoreBranches`,
                          defaultMessage: `Loading…`,
                          description: `Loading more branches`,
                        })
                      : null,
                  }),
              ],
            }),
    $;
  t[41] !== dt || t[42] !== Q || t[43] !== ft
    ? (($ = (0, z.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [dt, Q, ft],
      })),
      (t[41] = dt),
      (t[42] = Q),
      (t[43] = ft),
      (t[44] = $))
    : ($ = t[44]);
  let pt;
  return (
    t[45] !== Z || t[46] !== $
      ? ((pt = (0, z.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [Z, $],
        })),
        (t[45] = Z),
        (t[46] = $),
        (t[47] = pt))
      : (pt = t[47]),
    (0, z.jsx)(_, {
      side: f,
      open: h,
      onOpenChange: N,
      triggerButton: (0, z.jsx)(y, {
        tooltipContent: J,
        children: (0, z.jsx)(de, {
          categoryLabel: at,
          className: ot,
          collapse: `secondary`,
          icon: lt,
          indicator: `collapsible-chevron`,
          value: nt,
          valueClassName: `max-w-40`,
        }),
      }),
      children: pt,
    })
  );
}
function we(e) {
  let t = (0, L.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, z.jsx)(be, {
          borderColor: `border-token-side-bar-background`,
          children: (0, z.jsx)(u, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Te(e) {
  let t = (0, L.c)(18),
    { gitRoot: n, hostConfig: r, currentBranch: i, remoteDefaultBranch: a, enabled: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let {
      data: c,
      isLoading: l,
      isFetching: u,
      error: d,
      refetch: f,
    } = ue(n, r, `async_task_starting_state_dropdown`, s),
    p;
  t[2] === o ? (p = t[3]) : ((p = { enabled: o }), (t[2] = o), (t[3] = p));
  let {
      data: m,
      isLoading: ee,
      isFetching: te,
      error: h,
      refetch: g,
    } = ve(n, r, `async_task_starting_state_dropdown`, p),
    _;
  if (t[4] !== i || t[5] !== c || t[6] !== m || t[7] !== a) {
    let e = [
        c,
        i,
        De({ currentBranch: i, gitDefaultBranch: c, recentBranches: m, remoteDefaultBranch: a }),
        ...(m ?? []),
      ],
      n = new Set();
    ((_ = []),
      e.forEach((e) => {
        I({ branch: e, list: _, seen: n });
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
function Ee(e) {
  let t = (0, L.c)(5),
    { className: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = b(`text-sm text-token-description-foreground px-[var(--padding-row-x)] py-1`, n)),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, z.jsx)(`div`, { className: i, children: r })), (t[2] = r), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function De({ currentBranch: e, gitDefaultBranch: t, recentBranches: n, remoteDefaultBranch: r }) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function I({ branch: e, list: t, seen: n }) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var L,
  R,
  z,
  B = e(() => {
    ((L = n()),
      v(),
      a(),
      (R = t(i(), 1)),
      ie(),
      ae(),
      Se(),
      h(),
      s(),
      g(),
      x(),
      f(),
      _e(),
      M(),
      le(),
      ye(),
      ge(),
      c(),
      m(),
      O(),
      j(),
      T(),
      d(),
      k(),
      se(),
      (z = o()));
  });
function Oe(e) {
  let t = (0, U.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, W.jsx)(P, { ...e, renderStaticBranch: H, renderControl: V })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function V(e) {
  let { currentBranch: t, disabled: n, isPending: r, switchTooltipText: i } = e;
  return t == null
    ? null
    : (0, W.jsx)(y, {
        tooltipContent: i,
        children: (0, W.jsx)(de, {
          categoryLabel: (0, W.jsx)(E, { ...ke.branchCategory }),
          className: `px-0`,
          collapse: `sm`,
          disabled: n,
          icon: (0, W.jsx)(u, { className: `icon-xs` }),
          indicator: r ? `pending` : `collapsible-chevron`,
          value: t,
          valueClassName: `max-w-40 text-sm`,
        }),
      });
}
function H(e) {
  let { currentBranch: t } = e;
  return (0, W.jsx)(y, {
    tooltipContent: t,
    children: (0, W.jsx)(A, {
      categoryLabel: (0, W.jsx)(E, { ...ke.branchCategory }),
      className: `text-token-description-foreground`,
      collapse: `sm`,
      icon: (0, W.jsx)(u, { className: `icon-xs` }),
      value: t,
      valueClassName: `max-w-40 text-sm`,
    }),
  });
}
var U,
  W,
  ke,
  Ae = e(() => {
    ((U = n()),
      ie(),
      x(),
      c(),
      N(),
      k(),
      (W = o()),
      (ke = D({
        branchCategory: {
          id: `composer.footer.branchCategory`,
          defaultMessage: `Branch`,
          description: `Category label for the branch control in the composer footer`,
        },
      })));
  });
export { be as a, B as i, Ae as n, Se as o, Ce as r, Oe as t };
//# sourceMappingURL=composer-footer-branch-switcher.js.map
