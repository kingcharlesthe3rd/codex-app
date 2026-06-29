import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  Wt as a,
  bt as o,
  ho as s,
  kl as c,
  lr as l,
  oc as u,
  tc as d,
  xl as f,
  yt as p,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ba as ee,
  Co as m,
  Jp as h,
  Ku as g,
  Ra as _,
  Uu as v,
  Yp as y,
  _o as te,
  am as b,
  fp as x,
  im as S,
  io as C,
  lf as w,
  mp as T,
  ro as ne,
  sf as E,
  yo as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Cd as O,
  Kl as k,
  aw as A,
  bd as j,
  cC as re,
  cw as M,
  hc as N,
  mc as P,
  oC as F,
  ou as ie,
  uw as ae,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  d as I,
  u as L,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Gt as R,
  Ti as z,
  Wt as oe,
  wi as B,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import { $r as V, Yr as H } from "./app-initial~app-main~onboarding-page.js";
import {
  c as U,
  o as se,
  s as ce,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page.js";
import {
  n as W,
  t as le,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~plugin-detail-page~onboarding-pag~f3o4q9dk.js";
import {
  n as ue,
  t as de,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~remote-conversation-page~plugin-detai~cz5yd1fx.js";
import {
  r as fe,
  t as pe,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~remote-conversation-page~plugin-detai~khj2lzqy.js";
import { n as me, t as he } from "./use-element-in-view.js";
import { n as ge, t as _e } from "./trending-topics.js";
import { n as ve, t as ye } from "./appgen-share-dialog-1.js";
function be() {
  let e = (0, xe.c)(5),
    [t, n] = (0, G.useState)(null),
    [r, i] = (0, G.useState)(null),
    a;
  e[0] !== t || e[1] !== r
    ? ((a = { container: t, target: r }), (e[0] = t), (e[1] = r), (e[2] = a))
    : (a = e[2]);
  let o = !me(a),
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
var xe,
  G,
  Se = e(() => {
    ((xe = r()), (G = t(c(), 1)), he());
  });
function Ce(e) {
  let t = (0, K.c)(10),
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
    o;
  t[4] !== n || t[5] !== a
    ? ((o = S(
        `relative grid min-w-0 items-center overflow-hidden rounded-xl hover:bg-token-list-hover-background/50`,
        a,
        n,
      )),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, q.jsx)(`div`, { className: o, ...r })), (t[7] = r), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function we(e) {
  let t = (0, K.c)(12),
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
  let o = a === `list` ? `h-[50px] w-20` : `aspect-square w-full`,
    s;
  t[5] !== r || t[6] !== o
    ? ((s = S(`relative shrink-0 overflow-hidden`, o, r)), (t[5] = r), (t[6] = o), (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== n || t[9] !== i || t[10] !== s
      ? ((c = (0, q.jsx)(`div`, { className: s, ...i, children: n })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Te(e) {
  let t = (0, K.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === `list` ? `text-sm leading-5` : `text-xs leading-[18px]`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = S(`truncate font-medium text-token-foreground`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, q.jsx)(`div`, { className: o, ...r })), (t[7] = r), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Ee(e) {
  let t = (0, K.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = S(`text-xs leading-[18px] text-token-text-secondary`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, q.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function De(e) {
  let t = (0, K.c)(5),
    { actions: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, q.jsx)(`div`, {
        className: `pointer-events-auto relative z-10 flex items-center gap-1 pr-2`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, q.jsxs)(`div`, {
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
function Oe(e) {
  let t = (0, K.c)(11),
    { disabled: n, itemName: r, onContinue: i, viewMode: a } = e,
    o = n === void 0 ? !1 : n,
    s = ae(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, q.jsx)(M, {
        id: `appgenPage.libraryItem.continueChat.tooltip`,
        defaultMessage: `Continue chat`,
        description: `Tooltip for continuing work on a Library item in chat`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] !== s || t[2] !== r
    ? ((l = s.formatMessage(
        {
          id: `appgenPage.libraryItem.continueChat`,
          defaultMessage: `Continue chat for {itemName}`,
          description: `Accessible label for continuing work on a Library item in chat`,
        },
        { itemName: r },
      )),
      (t[1] = s),
      (t[2] = r),
      (t[3] = l))
    : (l = t[3]);
  let u = a === `grid` ? `ghost` : `ghostTertiary`,
    d = a === `grid` ? `toolbar` : `composer`,
    f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(B, { "aria-hidden": !0, className: `icon-xs` })), (t[4] = f))
    : (f = t[4]);
  let p;
  return (
    t[5] !== o || t[6] !== i || t[7] !== l || t[8] !== u || t[9] !== d
      ? ((p = (0, q.jsx)(x, {
          tooltipContent: c,
          children: (0, q.jsx)(h, {
            "aria-label": l,
            color: u,
            disabled: o,
            size: d,
            uniform: !0,
            onClick: i,
            children: f,
          }),
        })),
        (t[5] = o),
        (t[6] = i),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
function ke(e) {
  let t = (0, K.c)(10),
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
    o;
  t[4] !== n || t[5] !== a
    ? ((o = S(`pl-4 text-xs leading-[18px] text-token-text-secondary`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, q.jsx)(`div`, { className: o, ...r })), (t[7] = r), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Ae(e) {
  let t = (0, K.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = S(
        `pointer-events-auto relative z-10 flex items-center gap-2 pl-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:pl-2`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, q.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
var K,
  q,
  J,
  je = e(() => {
    ((K = r()),
      b(),
      A(),
      y(),
      T(),
      z(),
      (q = f()),
      (J = `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`));
  });
function Me(e) {
  let t = (0, Ne.c)(55),
    { onEdit: r, projectId: i, projectTitle: a, surface: o, viewMode: s } = e,
    c = ae(),
    l = ie(),
    d = u(n),
    f = re(`262557526`),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(M, {
        id: `appgenPage.edit.tooltip`,
        defaultMessage: `Edit`,
        description: `Tooltip for starting a new conversation to edit a site`,
      })),
      (t[0] = p))
    : (p = t[0]);
  let m;
  t[1] !== c || t[2] !== a
    ? ((m = c.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: a },
      )),
      (t[1] = c),
      (t[2] = a),
      (t[3] = m))
    : (m = t[3]);
  let g = s === `grid` ? `ghost` : `ghostTertiary`,
    _ = s === `grid` ? `toolbar` : `composer`,
    v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(oe, { "aria-hidden": !0, className: `icon-xs` })), (t[4] = v))
    : (v = t[4]);
  let y;
  t[5] !== r || t[6] !== m || t[7] !== g || t[8] !== _
    ? ((y = (0, Y.jsx)(x, {
        tooltipContent: p,
        children: (0, Y.jsx)(h, {
          "aria-label": m,
          color: g,
          size: _,
          uniform: !0,
          onClick: r,
          children: v,
        }),
      })),
      (t[5] = r),
      (t[6] = m),
      (t[7] = g),
      (t[8] = _),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    S;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(M, {
        id: `appgenPage.settings.tooltip`,
        defaultMessage: `Settings`,
        description: `Tooltip for opening site settings from the sites list`,
      })),
      (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] !== c || t[12] !== a
    ? ((C = c.formatMessage(
        {
          id: `appgenPage.openSettings`,
          defaultMessage: `Open settings for {siteTitle}`,
          description: `Accessible label for opening site settings from the sites list`,
        },
        { siteTitle: a },
      )),
      (t[11] = c),
      (t[12] = a),
      (t[13] = C))
    : (C = t[13]);
  let w = s === `grid` ? `ghost` : `ghostTertiary`,
    T = s === `grid` ? `toolbar` : `composer`,
    E;
  t[14] !== l || t[15] !== i
    ? ((E = () => {
        l(ce(i));
      }),
      (t[14] = l),
      (t[15] = i),
      (t[16] = E))
    : (E = t[16]);
  let O;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(ne, { "aria-hidden": !0, className: `icon-xs` })), (t[17] = O))
    : (O = t[17]);
  let k;
  t[18] !== T || t[19] !== E || t[20] !== C || t[21] !== w
    ? ((k = (0, Y.jsx)(x, {
        tooltipContent: S,
        children: (0, Y.jsx)(h, {
          "aria-label": C,
          color: w,
          size: T,
          uniform: !0,
          onClick: E,
          children: O,
        }),
      })),
      (t[18] = T),
      (t[19] = E),
      (t[20] = C),
      (t[21] = w),
      (t[22] = k))
    : (k = t[22]);
  let A = k,
    j;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(M, {
        id: `appgenPage.share.tooltip`,
        defaultMessage: `Share`,
        description: `Tooltip for opening site sharing settings`,
      })),
      (t[23] = j))
    : (j = t[23]);
  let N =
      s === `list`
        ? `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`
        : void 0,
    P;
  t[24] !== c || t[25] !== a
    ? ((P = c.formatMessage(
        {
          id: `appgenPage.share`,
          defaultMessage: `Share {siteTitle}`,
          description: `Accessible label for opening site sharing settings from the sites list`,
        },
        { siteTitle: a },
      )),
      (t[24] = c),
      (t[25] = a),
      (t[26] = P))
    : (P = t[26]);
  let F = s === `grid` ? `ghost` : `outline`,
    I = s === `grid`,
    L;
  t[27] !== i || t[28] !== d
    ? ((L = () => ee(d, ye, { projectId: i })), (t[27] = i), (t[28] = d), (t[29] = L))
    : (L = t[29]);
  let R;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(de, { "aria-hidden": !0, className: `icon-xs` })), (t[30] = R))
    : (R = t[30]);
  let z;
  t[31] === s
    ? (z = t[32])
    : ((z =
        s === `list`
          ? (0, Y.jsx)(`span`, {
              className: `[@container_(max-width:420px)]:hidden`,
              children: (0, Y.jsx)(M, {
                id: `appgenPage.share.label`,
                defaultMessage: `Share`,
                description: `Button label for opening site sharing settings`,
              }),
            })
          : null),
      (t[31] = s),
      (t[32] = z));
  let B;
  t[33] !== N || t[34] !== P || t[35] !== F || t[36] !== I || t[37] !== L || t[38] !== z
    ? ((B = (0, Y.jsx)(x, {
        tooltipContent: j,
        children: (0, Y.jsxs)(h, {
          className: N,
          "aria-label": P,
          color: F,
          size: `toolbar`,
          uniform: I,
          onClick: L,
          children: [R, z],
        }),
      })),
      (t[33] = N),
      (t[34] = P),
      (t[35] = F),
      (t[36] = I),
      (t[37] = L),
      (t[38] = z),
      (t[39] = B))
    : (B = t[39]);
  let V;
  t[40] !== f ||
  t[41] !== b ||
  t[42] !== c ||
  t[43] !== l ||
  t[44] !== r ||
  t[45] !== i ||
  t[46] !== a ||
  t[47] !== A ||
  t[48] !== o
    ? ((V = f
        ? (0, Y.jsxs)(te, {
            align: `end`,
            contentWidth: `menu`,
            triggerButton: (0, Y.jsx)(le, {
              label: c.formatMessage(
                {
                  id: `appgenPage.actions.more`,
                  defaultMessage: `More actions for {siteTitle}`,
                  description: `Accessible label for opening the actions menu for a site`,
                },
                { siteTitle: a },
              ),
            }),
            children: [
              (0, Y.jsx)(D.Item, {
                LeftIcon: oe,
                onSelect: r,
                children: (0, Y.jsx)(M, {
                  id: `appgenPage.edit.label`,
                  defaultMessage: `Edit`,
                  description: `Menu item for starting a new conversation to edit a site`,
                }),
              }),
              (0, Y.jsx)(D.Item, {
                LeftIcon: _e,
                onSelect: () => {
                  l(se(i));
                },
                children: (0, Y.jsx)(M, {
                  id: `appgenPage.analytics.label`,
                  defaultMessage: `Analytics`,
                  description: `Menu item for opening site analytics`,
                }),
              }),
              (0, Y.jsx)(D.Item, {
                LeftIcon: ne,
                onSelect: () => {
                  l(ce(i));
                },
                children: (0, Y.jsx)(M, {
                  id: `appgenPage.settings.label`,
                  defaultMessage: `Settings`,
                  description: `Menu item for opening site settings`,
                }),
              }),
            ],
          })
        : (0, Y.jsxs)(Y.Fragment, { children: [o === `sites` ? b : A, o === `sites` ? A : b] })),
      (t[40] = f),
      (t[41] = b),
      (t[42] = c),
      (t[43] = l),
      (t[44] = r),
      (t[45] = i),
      (t[46] = a),
      (t[47] = A),
      (t[48] = o),
      (t[49] = V))
    : (V = t[49]);
  let H;
  t[50] !== B || t[51] !== V
    ? ((H = (0, Y.jsxs)(Y.Fragment, { children: [B, V] })), (t[50] = B), (t[51] = V), (t[52] = H))
    : (H = t[52]);
  let U = H;
  if (s === `grid`) return U;
  let W;
  return (
    t[53] === U ? (W = t[54]) : ((W = (0, Y.jsx)(Ae, { children: U })), (t[53] = U), (t[54] = W)), W
  );
}
var Ne,
  Y,
  Pe = e(() => {
    ((Ne = r()),
      d(),
      A(),
      k(),
      y(),
      m(),
      _(),
      W(),
      T(),
      R(),
      ge(),
      C(),
      ue(),
      i(),
      F(),
      je(),
      U(),
      ve(),
      (Y = f()));
  }),
  X,
  Fe,
  Ie = e(() => {
    (t(c()),
      (X = f()),
      (Fe = (e) =>
        (0, X.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`rect`, {
              width: 80,
              height: 50,
              fill: `var(--color-token-main-surface-primary)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, X.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, X.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M57.5 7H60.5`,
              stroke: `var(--color-token-border)`,
              strokeLinecap: `round`,
            }),
            (0, X.jsx)(`rect`, {
              x: 64,
              y: 7,
              width: 2,
              height: 2,
              rx: 0.5,
              fill: `var(--color-token-border)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M67.5 5C67.7761 5 68 5.22386 68 5.5V7.5C68 7.77614 67.7761 8 67.5 8H67V6H65V5.5C65 5.22386 65.2239 5 65.5 5H67.5Z`,
              fill: `var(--color-token-border)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M74.1464 5.14645C74.3417 4.95118 74.6582 4.95118 74.8535 5.14645C75.0487 5.34171 75.0487 5.65822 74.8535 5.85348L73.707 6.99996L74.8535 8.14645C75.0487 8.34171 75.0487 8.65822 74.8535 8.85348C74.6582 9.04874 74.3417 9.04874 74.1464 8.85348L73 7.70699L71.8535 8.85348C71.6582 9.04874 71.3417 9.04874 71.1464 8.85348C70.9512 8.65822 70.9512 8.34171 71.1464 8.14645L72.2929 6.99996L71.1464 5.85348C70.9512 5.65822 70.9512 5.34171 71.1464 5.14645C71.3417 4.95118 71.6582 4.95118 71.8535 5.14645L73 6.29293L74.1464 5.14645Z`,
              fill: `var(--color-token-border)`,
            }),
          ],
        })));
  }),
  Z,
  Q,
  Le = e(() => {
    (t(c()),
      (Z = f()),
      (Q = (e) =>
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
            (0, Z.jsx)(`rect`, {
              opacity: 0.7,
              x: 5,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FF5F57`,
            }),
            (0, Z.jsx)(`rect`, {
              opacity: 0.7,
              x: 11,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FEBC2E`,
            }),
            (0, Z.jsx)(`rect`, {
              opacity: 0.7,
              x: 17,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#28C840`,
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
  switch (E(e)) {
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
  (w(), V());
});
function Je(e, t, n, r, i) {
  if (i == null) return;
  let a = e
    .get(I)
    .formatMessage(
      {
        id: `appgenConversation.editFilePrompt`,
        defaultMessage: `{fileMention} make these changes…`,
        description: `Prompt for continuing work on a Library file in its original chat`,
      },
      { fileMention: N(n, r) },
    );
  t(l(s(i)), { state: { prefillPrompt: `${a} ` } });
}
function Ye(e, t, n) {
  let r = e.get(I),
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
        { siteMention: v({ projectId: n.projectId, title: n.projectTitle }) },
      );
      break;
  }
  let a;
  switch (n.type) {
    case `create`:
      a = pe({ defaultPrompt: i, pluginDisplayName: `Sites`, pluginId: j });
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
      o.dispatchMessage(`open-in-browser`, {
        initiator: `sites_library`,
        openTarget: `in-app-browser`,
        source: `manual`,
        url: n.liveUrl,
      }));
}
var Xe = e(() => {
  (a(), g(), P(), L(), p(), O(), fe());
});
export {
  je as C,
  ke as S,
  be as T,
  Ee as _,
  qe as a,
  Te as b,
  Q as c,
  Ie as d,
  Me as f,
  De as g,
  Oe as h,
  Re as i,
  Le as l,
  J as m,
  Xe as n,
  ze as o,
  Pe as p,
  Ye as r,
  He as s,
  Je as t,
  Fe as u,
  we as v,
  Se as w,
  Ae as x,
  Ce as y,
};
//# sourceMappingURL=start-appgen-conversation.js.map
