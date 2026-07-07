import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Tl as r,
  Xs as i,
  ec as a,
  vl as o,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Hl as s,
  Vl as c,
  Xp as l,
  aT as u,
  bl as d,
  iT as ee,
  yl as f,
} from "./app-initial~app-main~onboarding-page.js";
import {
  $ as p,
  G as m,
  O as te,
  S as ne,
  W as re,
  dt as h,
  tt as g,
  ut as _,
  w as v,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Sx as y,
  nx as b,
  rx as x,
  vx as S,
  wx as ie,
  yx as ae,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  $l as oe,
  Al as C,
  Kl as se,
  Ql as ce,
  Xa as w,
  Ya as T,
  il as le,
  rl as ue,
  tl as de,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  $ as fe,
  Q as pe,
  Z as me,
  et as he,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  Q as ge,
  Y as E,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  a as D,
  i as _e,
  r as O,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import { c as ve, l as ye, n as k, s as A, t as j, u as be } from "./git-branch-switcher.js";
import { n as xe, t as Se } from "./use-git-recent-branches.js";
function Ce(e) {
  let t = (0, we.c)(11),
    { children: n, color: r, borderColor: i, badgeEnabled: a } = e,
    o = r === void 0 ? `bg-token-text-link-active-foreground` : r,
    s = a === void 0 ? !0 : a;
  if (!s) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, M.jsx)(M.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
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
  t[6] === l ? (u = t[7]) : ((u = (0, M.jsx)(`div`, { className: l })), (t[6] = l), (t[7] = u));
  let d;
  return (
    t[8] !== n || t[9] !== u
      ? ((d = (0, M.jsxs)(`div`, { className: `relative`, children: [n, u] })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var we,
  M,
  Te = e(() => {
    ((we = r()), x(), (M = o()));
  });
function Ee(e) {
  let t = (0, F.c)(48),
    {
      startingState: n,
      setStartingState: r,
      hostConfig: i,
      className: o,
      side: s,
      gitRootOverride: c,
      branchSource: l,
    } = e,
    u = s === void 0 ? `top` : s,
    f = ie(),
    [m, te] = (0, I.useState)(!1),
    [h, g] = (0, I.useState)(!1),
    [x, S] = (0, I.useState)(``),
    ae = le(),
    C;
  t[0] === h ? (C = t[1]) : ((C = { enabled: h }), (t[0] = h), (t[1] = C));
  let ce = ge(C),
    w = c ?? ce,
    ue = de(ae),
    pe = ue?.default_branch ?? `main`,
    he = ue?.id ?? null,
    E = l === `worktree` || !!c,
    D = oe(x, 300),
    O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e) => {
        (e && g(!0), te(e), e || S(``));
      }),
      (t[2] = O))
    : (O = t[2]);
  let k = O,
    A = !E && !!he && m && !!D,
    j;
  t[3] === A ? (j = t[4]) : ((j = { enabled: A }), (t[3] = A), (t[4] = j));
  let {
      data: be,
      isFetching: xe,
      error: Se,
      hasNextPage: we,
      isFetchingNextPage: M,
      fetchNextPage: Te,
      refetch: Ee,
    } = se(he, D, j),
    N = E && h,
    P;
  t[5] === N ? (P = t[6]) : ((P = { enabled: N }), (t[5] = N), (t[6] = P));
  let { data: R, isLoading: Ae, refetch: z } = d(w, i, `async_task_starting_state_dropdown`, P),
    B = E && h && !!w,
    V;
  t[7] === B ? (V = t[8]) : ((V = { enabled: B }), (t[7] = B), (t[8] = V));
  let { data: H } = ve(w, i, `async_task_starting_state_dropdown`, V),
    {
      branches: U,
      defaultBranch: je,
      fetching: Me,
      error: Ne,
      refetch: W,
    } = Oe({
      gitRoot: w,
      hostConfig: i,
      currentBranch: R ?? `main`,
      remoteDefaultBranch: pe,
      enabled: E && h,
    }),
    Pe = D.trim().toLowerCase(),
    G = Pe.length > 0,
    Fe = E && m && G,
    K;
  t[9] !== D || t[10] !== w || t[11] !== i || t[12] !== Fe
    ? ((K = {
        cwd: w,
        hostConfig: i,
        operationSource: `async_task_starting_state_dropdown`,
        query: D,
        enabled: Fe,
      }),
      (t[9] = D),
      (t[10] = w),
      (t[11] = i),
      (t[12] = Fe),
      (t[13] = K))
    : (K = t[13]);
  let { data: Ie, isFetching: Le, error: Re, refetch: ze } = a(ye, K),
    Be = n.type === `branch` ? n.branchName : void 0,
    q = E ? je : pe,
    Ve = E ? (G ? Ie : U) : G ? be?.filter((e) => e.toLowerCase().includes(Pe)) : void 0,
    He = !G || q.toLowerCase().includes(Pe),
    Ue = Ve?.filter((e) => e !== q),
    We = E ? (G ? Le : Me) : xe,
    Ge = E ? (G ? Re : Ne) : Se,
    Ke = E ? (G ? ze : W) : Ee,
    qe = !E && we,
    Je = R ?? q,
    Ye = n.type === `branch` ? n.branchName : Je,
    Xe = H?.type === `success` ? H.stagedCount + H.unstagedCount + H.untrackedCount > 0 : !1,
    Ze = E && Xe,
    Qe = n.type === `working-tree` && Xe,
    $e =
      n.type === `working-tree`
        ? (0, L.jsx)(y, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: R ?? q },
          })
        : (0, L.jsx)(y, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: n.branchName },
          }),
    et;
  t[14] === $e
    ? (et = t[15])
    : ((et = (0, L.jsx)(re, { electron: !0, children: $e })), (t[14] = $e), (t[15] = et));
  let tt;
  t[16] === Ye
    ? (tt = t[17])
    : ((tt = (0, L.jsx)(re, { browser: !0, children: Ye })), (t[16] = Ye), (t[17] = tt));
  let nt = (0, L.jsxs)(L.Fragment, {
      children: [
        et,
        (0, L.jsx)(re, {
          extension: !0,
          children: Qe
            ? (0, L.jsx)(y, {
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
  (t[18] !== m || t[19] !== z || t[20] !== W || t[21] !== E
    ? ((rt = () => {
        m && (z(), E && W());
      }),
      (it = [m, z, W, E]),
      (t[18] = m),
      (t[19] = z),
      (t[20] = W),
      (t[21] = E),
      (t[22] = rt),
      (t[23] = it))
    : ((rt = t[22]), (it = t[23])),
    (0, I.useEffect)(rt, it));
  let at;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, L.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, L.jsx)(y, {
          id: `composer.remote.branchStartingPoint`,
          defaultMessage: `What branch should this task start from?`,
          description: `Section label for branch starting point selector`,
        }),
      })),
      (t[24] = at))
    : (at = t[24]);
  let ot;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, L.jsx)(y, {
        id: `composer.startingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the starting state control in the composer footer`,
      })),
      (t[25] = ot))
    : (ot = t[25]);
  let st;
  t[26] === o ? (st = t[27]) : ((st = b(`whitespace-nowrap`, o)), (t[26] = o), (t[27] = st));
  let ct = n.type === `working-tree` && Xe,
    lt;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, L.jsx)(T, { className: `icon-xs` })), (t[28] = lt))
    : (lt = t[28]);
  let ut;
  t[29] === ct
    ? (ut = t[30])
    : ((ut = (0, L.jsx)(Ce, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: ct,
        children: lt,
      })),
      (t[29] = ct),
      (t[30] = ut));
  let J;
  t[31] === f
    ? (J = t[32])
    : ((J = f.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[31] = f),
      (t[32] = J));
  let dt;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        S(e.currentTarget.value);
      }),
      (t[33] = dt))
    : (dt = t[33]);
  let Y;
  t[34] === k
    ? (Y = t[35])
    : ((Y = (e) => {
        e.key === `Enter` && k(!1);
      }),
      (t[34] = k),
      (t[35] = Y));
  let X;
  t[36] !== x || t[37] !== J || t[38] !== Y
    ? ((X = (0, L.jsx)(v.SearchInput, {
        autoFocus: !1,
        placeholder: J,
        value: x,
        onChange: dt,
        onKeyDown: Y,
      })),
      (t[36] = x),
      (t[37] = J),
      (t[38] = Y),
      (t[39] = X))
    : (X = t[39]);
  let ft = Ze
      ? (0, L.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, L.jsx)(ke, {
              children: (0, L.jsx)(y, {
                id: `composer.remote.localFileStateHeading`,
                defaultMessage: `Local file state`,
                description: `Section heading for local working tree selection`,
              }),
            }),
            (0, L.jsx)(v.Item, {
              LeftIcon: De,
              RightIcon: n.type === `working-tree` ? _ : void 0,
              SubText: Xe
                ? (0, L.jsx)(`span`, {
                    className: `text-token-description-foreground`,
                    children: (0, L.jsx)(y, {
                      id: `composer.remote.currentEditsSuffix.useLocal`,
                      defaultMessage: `with local code changes`,
                      description: `Suffix text indicating the selection includes current edits`,
                    }),
                  })
                : void 0,
              onClick: () => {
                (r({ type: `working-tree` }), k(!1));
              },
              children: Ae ? null : (0, L.jsx)(L.Fragment, { children: R ?? q }),
            }),
          ],
        })
      : null,
    Z;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, L.jsx)(ke, {
        children: (0, L.jsx)(y, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[40] = Z))
    : (Z = t[40]);
  let pt =
      D && We
        ? (0, L.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, L.jsx)(fe, { className: `icon-xxs` }),
          })
        : D && Ge
          ? (0, L.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground`,
              children: [
                (0, L.jsx)(y, {
                  id: `composer.remote.errorLoadingBranches`,
                  defaultMessage: `Error loading branches`,
                  description: `Error message for remote starting point selector`,
                }),
                (0, L.jsx)(me, {
                  color: `ghost`,
                  size: `icon`,
                  className: `text-token-description-foreground`,
                  onClick: () => {
                    Ke();
                  },
                  children: (0, L.jsx)(ee, { className: `icon-xxs` }),
                }),
              ],
            })
          : (0, L.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                He &&
                  (0, L.jsx)(v.Item, {
                    LeftIcon: T,
                    RightIcon: Be === q ? _ : void 0,
                    onClick: () => {
                      (r({ type: `branch`, branchName: q }), k(!1));
                    },
                    children: q,
                  }),
                Ue?.map((e) =>
                  (0, L.jsx)(
                    v.Item,
                    {
                      LeftIcon: T,
                      RightIcon: e === Be ? _ : void 0,
                      onClick: () => {
                        (r({ type: `branch`, branchName: e }), k(!1));
                      },
                      children: e,
                    },
                    e,
                  ),
                ),
                qe &&
                  (0, L.jsx)(v.Item, {
                    onClick: () => {
                      M || Te();
                    },
                    className: `w-full text-sm text-token-text-secondary`,
                    children: M
                      ? (0, L.jsx)(y, {
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
    ? ((Q = (0, L.jsxs)(`div`, {
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
      ? (($ = (0, L.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [X, Q],
        })),
        (t[45] = X),
        (t[46] = Q),
        (t[47] = $))
      : ($ = t[47]),
    (0, L.jsx)(ne, {
      side: u,
      open: m,
      onOpenChange: k,
      triggerButton: (0, L.jsx)(p, {
        tooltipContent: at,
        children: (0, L.jsx)(_e, {
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
function De(e) {
  let t = (0, F.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, L.jsx)(Ce, {
          borderColor: `border-token-side-bar-background`,
          children: (0, L.jsx)(T, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Oe(e) {
  let t = (0, F.c)(18),
    { gitRoot: n, hostConfig: r, currentBranch: i, remoteDefaultBranch: a, enabled: o } = e,
    c;
  t[0] === o ? (c = t[1]) : ((c = { enabled: o }), (t[0] = o), (t[1] = c));
  let {
      data: l,
      isLoading: u,
      isFetching: d,
      error: ee,
      refetch: f,
    } = s(n, r, `async_task_starting_state_dropdown`, c),
    p;
  t[2] === o ? (p = t[3]) : ((p = { enabled: o }), (t[2] = o), (t[3] = p));
  let {
      data: m,
      isLoading: te,
      isFetching: ne,
      error: re,
      refetch: h,
    } = xe(n, r, `async_task_starting_state_dropdown`, p),
    g;
  if (t[4] !== i || t[5] !== l || t[6] !== m || t[7] !== a) {
    let e = [
        l,
        i,
        N({ currentBranch: i, gitDefaultBranch: l, recentBranches: m, remoteDefaultBranch: a }),
        ...(m ?? []),
      ],
      n = new Set();
    ((g = []),
      e.forEach((e) => {
        P({ branch: e, list: g, seen: n });
      }),
      (t[4] = i),
      (t[5] = l),
      (t[6] = m),
      (t[7] = a),
      (t[8] = g));
  } else g = t[8];
  let _ = g[0] ?? i ?? a,
    v = u || d || te || ne,
    y = ee ?? re,
    b;
  t[9] !== f || t[10] !== h
    ? ((b = async () => {
        await Promise.all([f(), h()]);
      }),
      (t[9] = f),
      (t[10] = h),
      (t[11] = b))
    : (b = t[11]);
  let x = b,
    S;
  return (
    t[12] !== g || t[13] !== _ || t[14] !== y || t[15] !== v || t[16] !== x
      ? ((S = { branches: g, defaultBranch: _, fetching: v, error: y, refetch: x }),
        (t[12] = g),
        (t[13] = _),
        (t[14] = y),
        (t[15] = v),
        (t[16] = x),
        (t[17] = S))
      : (S = t[17]),
    S
  );
}
function ke(e) {
  let t = (0, F.c)(5),
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
      ? ((a = (0, L.jsx)(`div`, { className: i, children: r })), (t[2] = r), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function N({ currentBranch: e, gitDefaultBranch: t, recentBranches: n, remoteDefaultBranch: r }) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function P({ branch: e, list: t, seen: n }) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var F,
  I,
  L,
  R = e(() => {
    ((F = r()),
      x(),
      i(),
      (I = t(n(), 1)),
      ae(),
      C(),
      Te(),
      pe(),
      te(),
      he(),
      g(),
      m(),
      be(),
      f(),
      c(),
      Se(),
      A(),
      w(),
      h(),
      u(),
      E(),
      ce(),
      ue(),
      D(),
      l(),
      (L = o()));
  });
function Ae(e) {
  let t = (0, V.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, H.jsx)(j, { ...e, renderStaticBranch: B, renderControl: z })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function z(e) {
  let { currentBranch: t, disabled: n, isPending: r, switchTooltipText: i } = e;
  return t == null
    ? null
    : (0, H.jsx)(p, {
        tooltipContent: i,
        children: (0, H.jsx)(_e, {
          categoryLabel: (0, H.jsx)(y, { ...U.branchCategory }),
          className: `px-0`,
          collapse: `sm`,
          disabled: n,
          icon: (0, H.jsx)(T, { className: `icon-xs` }),
          indicator: r ? `pending` : `collapsible-chevron`,
          value: t,
          valueClassName: `max-w-40 text-sm`,
        }),
      });
}
function B(e) {
  let { currentBranch: t } = e;
  return (0, H.jsx)(p, {
    tooltipContent: t,
    children: (0, H.jsx)(O, {
      categoryLabel: (0, H.jsx)(y, { ...U.branchCategory }),
      className: `text-token-description-foreground`,
      collapse: `sm`,
      icon: (0, H.jsx)(T, { className: `icon-xs` }),
      value: t,
      valueClassName: `max-w-40 text-sm`,
    }),
  });
}
var V,
  H,
  U,
  je = e(() => {
    ((V = r()),
      ae(),
      g(),
      w(),
      k(),
      D(),
      (H = o()),
      (U = S({
        branchCategory: {
          id: `composer.footer.branchCategory`,
          defaultMessage: `Branch`,
          description: `Category label for the branch control in the composer footer`,
        },
      })));
  });
export { Ce as a, R as i, je as n, Te as o, Ee as r, Ae as t };
//# sourceMappingURL=composer-footer-branch-switcher.js.map
