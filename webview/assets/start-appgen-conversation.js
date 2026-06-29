import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  $a as r,
  AB as i,
  AI as a,
  BP as o,
  BV as s,
  C as c,
  DN as l,
  FB as u,
  Gi as d,
  Gj as f,
  Hi as p,
  JV as m,
  Lg as h,
  Mi as g,
  ON as _,
  Ov as ee,
  Pi as te,
  QP as ne,
  Qa as v,
  Qc as y,
  Rg as b,
  T as x,
  VP as S,
  Vi as re,
  Vy as C,
  Wy as w,
  Yc as T,
  Zi as E,
  bF as D,
  cP as O,
  hM as k,
  iF as A,
  lF as ie,
  lP as j,
  mv as M,
  pM as N,
  pz as P,
  qV as F,
  qi as I,
  qj as ae,
  sF as L,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  nc as R,
  tc as z,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  Dn as B,
  En as oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Hs as V,
  Rs as H,
  _t as se,
  od as ce,
  sd as U,
  vt as W,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  C as le,
  T as ue,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  c as de,
  o as fe,
  s as G,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page.js";
import { n as pe, t as me } from "./use-element-in-view.js";
import { n as he, t as ge } from "./trending-topics.js";
import { n as _e, t as ve } from "./appgen-share-dialog-2.js";
function ye() {
  let e = (0, be.c)(5),
    [t, n] = (0, K.useState)(null),
    [r, i] = (0, K.useState)(null),
    a;
  e[0] !== t || e[1] !== r
    ? ((a = { container: t, target: r }), (e[0] = t), (e[1] = r), (e[2] = a))
    : (a = e[2]);
  let o = !pe(a),
    s;
  return (
    e[3] === o
      ? (s = e[4])
      : ((s = { scrollContainerRef: n, showTitleInToolbar: o, titleRef: i }),
        (e[3] = o),
        (e[4] = s)),
    s
  );
}
var be,
  K,
  xe = e(() => {
    ((be = F()), (K = t(m(), 1)), me());
  });
function Se(e) {
  let t = (0, q.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a =
      i === `list`
        ? `col-span-full grid-cols-subgrid p-3`
        : `grid-rows-[auto_auto] border border-token-border-light bg-token-bg-fog`,
    s;
  t[4] !== n || t[5] !== a
    ? ((s = o(
        `relative grid min-w-0 items-center overflow-hidden rounded-xl hover:bg-token-list-hover-background/50`,
        a,
        n,
      )),
      (t[4] = n),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== s
      ? ((c = (0, J.jsx)(`div`, { className: s, ...r })), (t[7] = r), (t[8] = s), (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Ce(e) {
  let t = (0, q.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, viewMode: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let s = a === `list` ? `h-[50px] w-20` : `aspect-square w-full`,
    c;
  t[5] !== r || t[6] !== s
    ? ((c = o(`relative shrink-0 overflow-hidden`, s, r)), (t[5] = r), (t[6] = s), (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== n || t[9] !== i || t[10] !== c
      ? ((l = (0, J.jsx)(`div`, { className: c, ...i, children: n })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function we(e) {
  let t = (0, q.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === `list` ? `text-sm leading-5` : `text-xs leading-[18px]`,
    s;
  t[4] !== n || t[5] !== a
    ? ((s = o(`truncate font-medium text-token-foreground`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== s
      ? ((c = (0, J.jsx)(`div`, { className: s, ...r })), (t[7] = r), (t[8] = s), (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Te(e) {
  let t = (0, q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = o(`text-xs leading-[18px] text-token-text-secondary`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, J.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Ee(e) {
  let t = (0, q.c)(5),
    { actions: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, J.jsx)(`div`, {
        className: `pointer-events-auto relative z-10 flex items-center gap-1 pr-2`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, J.jsxs)(`div`, {
          className: `pointer-events-none relative z-10 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center border-t border-token-border-light`,
          children: [r, i],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function De(e) {
  let t = (0, q.c)(11),
    { disabled: n, itemName: r, onContinue: i, viewMode: a } = e,
    o = n === void 0 ? !1 : n,
    s = ie(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(L, {
        id: `appgenPage.libraryItem.continueChat.tooltip`,
        defaultMessage: `Continue chat`,
        description: `Tooltip for continuing work on a Library item in chat`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let u;
  t[1] !== s || t[2] !== r
    ? ((u = s.formatMessage(
        {
          id: `appgenPage.libraryItem.continueChat`,
          defaultMessage: `Continue chat for {itemName}`,
          description: `Accessible label for continuing work on a Library item in chat`,
        },
        { itemName: r },
      )),
      (t[1] = s),
      (t[2] = r),
      (t[3] = u))
    : (u = t[3]);
  let d = a === `grid` ? `ghost` : `ghostTertiary`,
    f = a === `grid` ? `toolbar` : `composer`,
    p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(v, { "aria-hidden": !0, className: `icon-xs` })), (t[4] = p))
    : (p = t[4]);
  let m;
  return (
    t[5] !== o || t[6] !== i || t[7] !== u || t[8] !== d || t[9] !== f
      ? ((m = (0, J.jsx)(N, {
          tooltipContent: c,
          children: (0, J.jsx)(l, {
            "aria-label": u,
            color: d,
            disabled: o,
            size: f,
            uniform: !0,
            onClick: i,
            children: p,
          }),
        })),
        (t[5] = o),
        (t[6] = i),
        (t[7] = u),
        (t[8] = d),
        (t[9] = f),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function Oe(e) {
  let t = (0, q.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, hideWhenCompact: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = (i === void 0 ? !1 : i) && `[@container_(max-width:620px)]:hidden`,
    s;
  t[4] !== n || t[5] !== a
    ? ((s = o(`pl-4 text-xs leading-[18px] text-token-text-secondary`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== s
      ? ((c = (0, J.jsx)(`div`, { className: s, ...r })), (t[7] = r), (t[8] = s), (t[9] = c))
      : (c = t[9]),
    c
  );
}
function ke(e) {
  let t = (0, q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = o(
        `pointer-events-auto relative z-10 flex items-center gap-2 pl-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:pl-2`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, J.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
var q,
  J,
  Y,
  Ae = e(() => {
    ((q = F()),
      S(),
      A(),
      _(),
      k(),
      r(),
      (J = s()),
      (Y = `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`));
  });
function je(e) {
  let t = (0, Me.c)(55),
    { onEdit: n, projectId: r, projectTitle: i, surface: a, viewMode: o } = e,
    s = ie(),
    c = ee(),
    f = u(ne),
    p = ae(`262557526`),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(L, {
        id: `appgenPage.edit.tooltip`,
        defaultMessage: `Edit`,
        description: `Tooltip for starting a new conversation to edit a site`,
      })),
      (t[0] = m))
    : (m = t[0]);
  let h;
  t[1] !== s || t[2] !== i
    ? ((h = s.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: i },
      )),
      (t[1] = s),
      (t[2] = i),
      (t[3] = h))
    : (h = t[3]);
  let g = o === `grid` ? `ghost` : `ghostTertiary`,
    _ = o === `grid` ? `toolbar` : `composer`,
    v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(oe, { "aria-hidden": !0, className: `icon-xs` })), (t[4] = v))
    : (v = t[4]);
  let y;
  t[5] !== n || t[6] !== h || t[7] !== g || t[8] !== _
    ? ((y = (0, X.jsx)(N, {
        tooltipContent: m,
        children: (0, X.jsx)(l, {
          "aria-label": h,
          color: g,
          size: _,
          uniform: !0,
          onClick: n,
          children: v,
        }),
      })),
      (t[5] = n),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(L, {
        id: `appgenPage.settings.tooltip`,
        defaultMessage: `Settings`,
        description: `Tooltip for opening site settings from the sites list`,
      })),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== s || t[12] !== i
    ? ((S = s.formatMessage(
        {
          id: `appgenPage.openSettings`,
          defaultMessage: `Open settings for {siteTitle}`,
          description: `Accessible label for opening site settings from the sites list`,
        },
        { siteTitle: i },
      )),
      (t[11] = s),
      (t[12] = i),
      (t[13] = S))
    : (S = t[13]);
  let C = o === `grid` ? `ghost` : `ghostTertiary`,
    w = o === `grid` ? `toolbar` : `composer`,
    T;
  t[14] !== c || t[15] !== r
    ? ((T = () => {
        c(G(r));
      }),
      (t[14] = c),
      (t[15] = r),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(re, { "aria-hidden": !0, className: `icon-xs` })), (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] !== w || t[19] !== T || t[20] !== S || t[21] !== C
    ? ((D = (0, X.jsx)(N, {
        tooltipContent: x,
        children: (0, X.jsx)(l, {
          "aria-label": S,
          color: C,
          size: w,
          uniform: !0,
          onClick: T,
          children: E,
        }),
      })),
      (t[18] = w),
      (t[19] = T),
      (t[20] = S),
      (t[21] = C),
      (t[22] = D))
    : (D = t[22]);
  let O = D,
    k;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, X.jsx)(L, {
        id: `appgenPage.share.tooltip`,
        defaultMessage: `Share`,
        description: `Tooltip for opening site sharing settings`,
      })),
      (t[23] = k))
    : (k = t[23]);
  let A =
      o === `list`
        ? `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`
        : void 0,
    j;
  t[24] !== s || t[25] !== i
    ? ((j = s.formatMessage(
        {
          id: `appgenPage.share`,
          defaultMessage: `Share {siteTitle}`,
          description: `Accessible label for opening site sharing settings from the sites list`,
        },
        { siteTitle: i },
      )),
      (t[24] = s),
      (t[25] = i),
      (t[26] = j))
    : (j = t[26]);
  let M = o === `grid` ? `ghost` : `outline`,
    P = o === `grid`,
    F;
  t[27] !== r || t[28] !== f
    ? ((F = () => te(f, ve, { projectId: r })), (t[27] = r), (t[28] = f), (t[29] = F))
    : (F = t[29]);
  let R;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(se, { "aria-hidden": !0, className: `icon-xs` })), (t[30] = R))
    : (R = t[30]);
  let z;
  t[31] === o
    ? (z = t[32])
    : ((z =
        o === `list`
          ? (0, X.jsx)(`span`, {
              className: `[@container_(max-width:420px)]:hidden`,
              children: (0, X.jsx)(L, {
                id: `appgenPage.share.label`,
                defaultMessage: `Share`,
                description: `Button label for opening site sharing settings`,
              }),
            })
          : null),
      (t[31] = o),
      (t[32] = z));
  let B;
  t[33] !== A || t[34] !== j || t[35] !== M || t[36] !== P || t[37] !== F || t[38] !== z
    ? ((B = (0, X.jsx)(N, {
        tooltipContent: k,
        children: (0, X.jsxs)(l, {
          className: A,
          "aria-label": j,
          color: M,
          size: `toolbar`,
          uniform: P,
          onClick: F,
          children: [R, z],
        }),
      })),
      (t[33] = A),
      (t[34] = j),
      (t[35] = M),
      (t[36] = P),
      (t[37] = F),
      (t[38] = z),
      (t[39] = B))
    : (B = t[39]);
  let V;
  t[40] !== p ||
  t[41] !== b ||
  t[42] !== s ||
  t[43] !== c ||
  t[44] !== n ||
  t[45] !== r ||
  t[46] !== i ||
  t[47] !== O ||
  t[48] !== a
    ? ((V = p
        ? (0, X.jsxs)(d, {
            align: `end`,
            contentWidth: `menu`,
            triggerButton: (0, X.jsx)(ce, {
              label: s.formatMessage(
                {
                  id: `appgenPage.actions.more`,
                  defaultMessage: `More actions for {siteTitle}`,
                  description: `Accessible label for opening the actions menu for a site`,
                },
                { siteTitle: i },
              ),
            }),
            children: [
              (0, X.jsx)(I.Item, {
                LeftIcon: oe,
                onSelect: n,
                children: (0, X.jsx)(L, {
                  id: `appgenPage.edit.label`,
                  defaultMessage: `Edit`,
                  description: `Menu item for starting a new conversation to edit a site`,
                }),
              }),
              (0, X.jsx)(I.Item, {
                LeftIcon: ge,
                onSelect: () => {
                  c(fe(r));
                },
                children: (0, X.jsx)(L, {
                  id: `appgenPage.analytics.label`,
                  defaultMessage: `Analytics`,
                  description: `Menu item for opening site analytics`,
                }),
              }),
              (0, X.jsx)(I.Item, {
                LeftIcon: re,
                onSelect: () => {
                  c(G(r));
                },
                children: (0, X.jsx)(L, {
                  id: `appgenPage.settings.label`,
                  defaultMessage: `Settings`,
                  description: `Menu item for opening site settings`,
                }),
              }),
            ],
          })
        : (0, X.jsxs)(X.Fragment, { children: [a === `sites` ? b : O, a === `sites` ? O : b] })),
      (t[40] = p),
      (t[41] = b),
      (t[42] = s),
      (t[43] = c),
      (t[44] = n),
      (t[45] = r),
      (t[46] = i),
      (t[47] = O),
      (t[48] = a),
      (t[49] = V))
    : (V = t[49]);
  let H;
  t[50] !== B || t[51] !== V
    ? ((H = (0, X.jsxs)(X.Fragment, { children: [B, V] })), (t[50] = B), (t[51] = V), (t[52] = H))
    : (H = t[52]);
  let U = H;
  if (o === `grid`) return U;
  let W;
  return (
    t[53] === U ? (W = t[54]) : ((W = (0, X.jsx)(ke, { children: U })), (t[53] = U), (t[54] = W)), W
  );
}
var Me,
  X,
  Ne = e(() => {
    ((Me = F()),
      i(),
      A(),
      M(),
      _(),
      E(),
      g(),
      U(),
      k(),
      B(),
      he(),
      p(),
      W(),
      n(),
      f(),
      Ae(),
      de(),
      _e(),
      (X = s()));
  }),
  Z,
  Pe,
  Fe = e(() => {
    (t(m()),
      (Z = s()),
      (Pe = (e) =>
        (0, Z.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Z.jsx)(`rect`, {
              width: 80,
              height: 50,
              fill: `var(--color-token-main-surface-primary)`,
            }),
            (0, Z.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, Z.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, Z.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, Z.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, Z.jsx)(`path`, {
              d: `M57.5 7H60.5`,
              stroke: `var(--color-token-border)`,
              strokeLinecap: `round`,
            }),
            (0, Z.jsx)(`rect`, {
              x: 64,
              y: 7,
              width: 2,
              height: 2,
              rx: 0.5,
              fill: `var(--color-token-border)`,
            }),
            (0, Z.jsx)(`path`, {
              d: `M67.5 5C67.7761 5 68 5.22386 68 5.5V7.5C68 7.77614 67.7761 8 67.5 8H67V6H65V5.5C65 5.22386 65.2239 5 65.5 5H67.5Z`,
              fill: `var(--color-token-border)`,
            }),
            (0, Z.jsx)(`path`, {
              d: `M74.1464 5.14645C74.3417 4.95118 74.6582 4.95118 74.8535 5.14645C75.0487 5.34171 75.0487 5.65822 74.8535 5.85348L73.707 6.99996L74.8535 8.14645C75.0487 8.34171 75.0487 8.65822 74.8535 8.85348C74.6582 9.04874 74.3417 9.04874 74.1464 8.85348L73 7.70699L71.8535 8.85348C71.6582 9.04874 71.3417 9.04874 71.1464 8.85348C70.9512 8.65822 70.9512 8.34171 71.1464 8.14645L72.2929 6.99996L71.1464 5.85348C70.9512 5.65822 70.9512 5.34171 71.1464 5.14645C71.3417 4.95118 71.6582 4.95118 71.8535 5.14645L73 6.29293L74.1464 5.14645Z`,
              fill: `var(--color-token-border)`,
            }),
          ],
        })));
  }),
  Q,
  Ie,
  Le = e(() => {
    (t(m()),
      (Q = s()),
      (Ie = (e) =>
        (0, Q.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Q.jsx)(`rect`, {
              width: 80,
              height: 50,
              fill: `var(--color-token-main-surface-primary)`,
            }),
            (0, Q.jsx)(`rect`, {
              opacity: 0.7,
              x: 5,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FF5F57`,
            }),
            (0, Q.jsx)(`rect`, {
              opacity: 0.7,
              x: 11,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FEBC2E`,
            }),
            (0, Q.jsx)(`rect`, {
              opacity: 0.7,
              x: 17,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#28C840`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, Q.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, Q.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-token-primary)`,
            }),
          ],
        })));
  });
function Re({
  accessFilter: e,
  cloudFiles: t,
  cloudUploadingFiles: n,
  contentType: r,
  fileFilter: i,
  files: a,
  images: o,
  projects: s,
  searchQuery: c,
}) {
  let l = c.trim().toLowerCase(),
    u = [];
  if ((r === `sites` || r === `all`) && (r === `sites` || i === `all`) && s != null)
    for (let t of s)
      He(t, l) &&
        (r !== `sites` || Ke(t, e)) &&
        u.push({ id: t.id, kind: `site`, modifiedAt: t.updated_at, project: t });
  if ((r === `files` || r === `all`) && a != null) {
    let e = new Set();
    for (let t of a) {
      if (e.has(t.path)) continue;
      e.add(t.path);
      let n = Be(t.path);
      n != null &&
        (i === `all` || n === i) &&
        Ue(t, l) &&
        u.push({ file: t, fileType: n, id: t.path, kind: `file`, modifiedAt: t.modifiedAt });
    }
  }
  if ((r === `images` || (r === `all` && i === `all`)) && o != null)
    for (let e of o)
      We(e, l) && u.push({ id: e.path, image: e, kind: `image`, modifiedAt: e.modifiedAt });
  if (n != null)
    for (let e of n) {
      let t = $(e);
      ze({ contentType: r, file: e, fileFilter: i, searchQuery: c }) &&
        u.push({
          file: e,
          fileType: t,
          id: `cloud-upload:${e.id}`,
          kind: `cloud-upload`,
          modifiedAt: e.modifiedAt,
        });
    }
  if (t != null)
    for (let e of t) {
      let t = $(e);
      Ve(e, t, r, i) &&
        u.push({
          cloudFile: e,
          fileType: t,
          id: `cloud:${e.id}`,
          kind: `cloud-file`,
          modifiedAt: e.modifiedAt,
        });
    }
  return u.sort(
    (e, t) => Date.parse(t.modifiedAt) - Date.parse(e.modifiedAt) || e.id.localeCompare(t.id),
  );
}
function ze({ contentType: e, file: t, fileFilter: n, searchQuery: r }) {
  return Ge(t, r.trim().toLowerCase()) && Ve(t, $(t), e, n);
}
function Be(e) {
  switch (le(e)) {
    case `docx`:
      return `document`;
    case `pdf`:
      return `pdf`;
    case `pptx`:
      return `presentation`;
    case `csv`:
    case `tsv`:
    case `xlsx`:
      return `spreadsheet`;
    case `ipynb`:
    case `tex`:
    case null:
      return null;
  }
}
function $(e) {
  let t = Be(e.name);
  if (t != null) return t;
  switch (e.category) {
    case `audio`:
      return `audio`;
    case `image`:
      return `image`;
    case `other`:
      return `other`;
    case `pdf`:
      return `pdf`;
    case `text`:
      return `text`;
    case `video`:
      return `video`;
  }
}
function Ve(e, t, n, r) {
  return n === `sites`
    ? !1
    : n === `images`
      ? e.category === `image`
      : r === `all`
        ? n === `files`
          ? e.category !== `image`
          : !0
        : t === r;
}
function He(e, t) {
  return (
    e.title.toLowerCase().includes(t) ||
    e.slug.toLowerCase().includes(t) ||
    e.description?.toLowerCase().includes(t) === !0
  );
}
function Ue(e, t) {
  return e.name.toLowerCase().includes(t) || e.relativePath.toLowerCase().includes(t);
}
function We(e, t) {
  return e.name.toLowerCase().includes(t) || e.relativePath.toLowerCase().includes(t);
}
function Ge(e, t) {
  return t.length === 0 || e.name.toLowerCase().includes(t);
}
function Ke(e, t) {
  if (t === `all`) return !0;
  let { accessMode: n, groupCount: r, userCount: i } = H(e.access_policy),
    a = (n === `admins_only` || n === `custom`) && r === 0 && i === 0;
  return t === `private` ? a : !a;
}
var qe = e(() => {
  (ue(), V());
});
function Je(e, t, n, r, i) {
  if (i == null) return;
  let o = e
    .get(R)
    .formatMessage(
      {
        id: `appgenConversation.editFilePrompt`,
        defaultMessage: `{fileMention} make these changes…`,
        description: `Prompt for continuing work on a Library file in its original chat`,
      },
      { fileMention: b(n, r) },
    );
  t(a(P(i)), { state: { prefillPrompt: `${o} ` } });
}
function Ye(e, t, n) {
  let r = e.get(R),
    i;
  switch (n.type) {
    case `create-asset`:
      switch (n.assetType) {
        case `document`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.documentPrompt`,
            defaultMessage: `Create a document that …`,
            description: `Prefill prompt for creating a document from the Library`,
          });
          break;
        case `spreadsheet`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.spreadsheetPrompt`,
            defaultMessage: `Create a spreadsheet that …`,
            description: `Prefill prompt for creating a spreadsheet from the Library`,
          });
          break;
        case `presentation`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.presentationPrompt`,
            defaultMessage: `Create a presentation that …`,
            description: `Prefill prompt for creating a presentation from the Library`,
          });
          break;
        case `pdf`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.pdfPrompt`,
            defaultMessage: `Create a PDF that …`,
            description: `Prefill prompt for creating a PDF from the Library`,
          });
          break;
        case `image`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.imagePrompt`,
            defaultMessage: `Create an image of …`,
            description: `Prefill prompt for creating an image from the Library`,
          });
          break;
      }
      break;
    case `create`:
      i = r.formatMessage({
        id: `appgenConversation.createPrompt`,
        defaultMessage: `Create a website that …`,
        description: `Prompt for starting a new site from the Sites page`,
      });
      break;
    case `edit`:
      i = r.formatMessage(
        {
          id: `appgenConversation.editPrompt`,
          defaultMessage: `{siteMention} make these changes…`,
          description: `Prompt for continuing work on an existing site from the Sites page`,
        },
        { siteMention: T({ projectId: n.projectId, title: n.projectTitle }) },
      );
      break;
  }
  let a;
  switch (n.type) {
    case `create`:
      a = c({ defaultPrompt: i, pluginDisplayName: `Sites`, pluginId: C });
      break;
    case `edit`:
      a = `${i} `;
      break;
    case `create-asset`:
      a = i;
      break;
  }
  (t({ activeProject: null, prefillPrompt: a, startInSidebar: !0 }),
    n.type === `edit` &&
      n.liveUrl != null &&
      j.dispatchMessage(`open-in-browser`, {
        initiator: `sites_library`,
        openTarget: `in-app-browser`,
        source: `manual`,
        url: n.liveUrl,
      }));
}
var Xe = e(() => {
  (D(), y(), h(), z(), O(), w(), x());
});
export {
  Ae as C,
  Oe as S,
  ye as T,
  Te as _,
  qe as a,
  we as b,
  Ie as c,
  Fe as d,
  je as f,
  Ee as g,
  De as h,
  Re as i,
  Le as l,
  Y as m,
  Xe as n,
  ze as o,
  Ne as p,
  Ye as r,
  He as s,
  Je as t,
  Pe as u,
  Ce as v,
  xe as w,
  ke as x,
  Se as y,
};
//# sourceMappingURL=start-appgen-conversation.js.map
