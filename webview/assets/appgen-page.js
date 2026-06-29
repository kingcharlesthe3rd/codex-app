import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  kl as a,
  oc as o,
  tc as s,
  xl as c,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  $ as l,
  et as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Ba as d,
  Es as f,
  Jp as p,
  Ra as m,
  Ts as h,
  Xp as g,
  Yp as _,
  Zp as v,
  _n as y,
  fp as b,
  gn as ee,
  it as x,
  mp as S,
  rt as te,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  _d as C,
  aw as w,
  cw as T,
  gd as ne,
  hd as E,
  uw as re,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { At as D, kt as ie } from "./app-initial~app-main~automations-page.js";
import {
  f as O,
  p as k,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js";
import {
  C as A,
  E as j,
  Xn as M,
  Yn as N,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Dn as ae,
  On as oe,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  vn as P,
  yn as se,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import {
  Sn as ce,
  xn as le,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  $r as F,
  Gr as I,
  Kr as L,
  Wr as R,
  Yr as z,
  qr as B,
} from "./app-initial~app-main~onboarding-page.js";
import {
  n as V,
  t as H,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  n as U,
  t as W,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page.js";
import { n as ue, r as G } from "./searchable-page-layout.js";
import {
  T as de,
  a as K,
  c as q,
  d as J,
  f as Y,
  l as X,
  n as Z,
  p as fe,
  r as pe,
  s as me,
  u as he,
  w as ge,
} from "./start-appgen-conversation.js";
import { n as _e, t as ve } from "./infinite-scroll-pagination-spinner.js";
import { n as ye, t as be } from "./appgen-share-dialog-1.js";
function xe() {
  let e = (0, Q.c)(67),
    t = o(n),
    r = re(),
    {
      data: i,
      fetchNextPage: a,
      hasNextPage: s,
      isFetchNextPageError: c,
      isFetchingNextPage: u,
      isLoading: d,
      isRefetching: f,
      refetch: m,
    } = ne(),
    { setSelectedMode: g } = se(),
    _ = ce(),
    [v, y] = (0, Ae.useState)(``),
    { scrollContainerRef: ee, showTitleInToolbar: x, titleRef: S } = de(),
    te = d || f || u,
    C,
    w;
  e[0] !== i || e[1] !== v
    ? ((C = v.trim().toLowerCase()),
      (w = i?.filter((e) => me(e, C)) ?? null),
      (e[0] = i),
      (e[1] = v),
      (e[2] = C),
      (e[3] = w))
    : ((C = e[2]), (w = e[3]));
  let E = w,
    D;
  e[4] === r
    ? (D = e[5])
    : ((D = r.formatMessage({
        id: `appgenPage.refresh`,
        defaultMessage: `Refresh sites`,
        description: `Accessible label for refreshing the Sites project list`,
      })),
      (e[4] = r),
      (e[5] = D));
  let O = D,
    k;
  e[6] === r
    ? (k = e[7])
    : ((k = r.formatMessage({
        id: `appgenPage.sites.search`,
        defaultMessage: `Search sites`,
        description: `Accessible label and placeholder for searching Sites`,
      })),
      (e[6] = r),
      (e[7] = k));
  let A = k,
    j;
  e[8] !== t || e[9] !== g || e[10] !== _
    ? ((j = () => {
        pe(t, _, { type: `create`, setSelectedMode: g });
      }),
      (e[8] = t),
      (e[9] = g),
      (e[10] = _),
      (e[11] = j))
    : (j = e[11]);
  let M = j,
    N;
  e[12] !== t || e[13] !== _
    ? ((N = (e, n, r) => {
        pe(t, _, { type: `edit`, liveUrl: r, projectId: e, projectTitle: n });
      }),
      (e[12] = t),
      (e[13] = _),
      (e[14] = N))
    : (N = e[14]);
  let oe = N,
    P;
  e[15] === m
    ? (P = e[16])
    : ((P = () => {
        m();
      }),
      (e[15] = m),
      (e[16] = P));
  let le = P,
    F;
  e[17] === x
    ? (F = e[18])
    : ((F = x
        ? (0, $.jsx)(T, {
            id: `appgenPage.title`,
            defaultMessage: `Sites`,
            description: `Header title for the Sites page`,
          })
        : null),
      (e[17] = x),
      (e[18] = F));
  let I;
  e[19] === f
    ? (I = e[20])
    : ((I = f ? null : (0, $.jsx)(ae, { className: `icon-xs` })), (e[19] = f), (e[20] = I));
  let L;
  e[21] !== le || e[22] !== f || e[23] !== te || e[24] !== O || e[25] !== I
    ? ((L = (0, $.jsx)(p, {
        "aria-label": O,
        color: `ghost`,
        disabled: te,
        loading: f,
        onClick: le,
        size: `toolbar`,
        uniform: !0,
        children: I,
      })),
      (e[21] = le),
      (e[22] = f),
      (e[23] = te),
      (e[24] = O),
      (e[25] = I),
      (e[26] = L))
    : (L = e[26]);
  let R;
  e[27] !== O || e[28] !== L
    ? ((R = (0, $.jsx)(b, { tooltipContent: O, children: L })),
      (e[27] = O),
      (e[28] = L),
      (e[29] = R))
    : (R = e[29]);
  let z;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(T, {
        id: `appgenPage.create`,
        defaultMessage: `Create`,
        description: `Button label for starting a new site from the Sites page`,
      })),
      (e[30] = z))
    : (z = e[30]);
  let B;
  e[31] === M
    ? (B = e[32])
    : ((B = (0, $.jsx)(p, { color: `outline`, size: `toolbar`, onClick: M, children: z })),
      (e[31] = M),
      (e[32] = B));
  let V;
  e[33] !== B || e[34] !== R
    ? ((V = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [R, B] })),
      (e[33] = B),
      (e[34] = R),
      (e[35] = V))
    : (V = e[35]);
  let H;
  e[36] !== V || e[37] !== F
    ? ((H = (0, $.jsx)(ie, { start: F, trailing: V })), (e[36] = V), (e[37] = F), (e[38] = H))
    : (H = e[38]);
  let U = H,
    W;
  e[39] === U
    ? (W = e[40])
    : ((W = (0, $.jsx)(h, { extension: !0, children: U })), (e[39] = U), (e[40] = W));
  let G;
  e[41] === U
    ? (G = e[42])
    : ((G = (0, $.jsx)(h, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(l.Header, { children: U }),
      })),
      (e[41] = U),
      (e[42] = G));
  let K, q;
  e[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(T, {
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (q = (0, $.jsx)(T, {
        id: `codexAppgenAnnouncementModal.title`,
        defaultMessage: `Turn your ideas into live websites`,
        description: `Title for the Sites announcement modal`,
      })),
      (e[43] = K),
      (e[44] = q))
    : ((K = e[43]), (q = e[44]));
  let J;
  e[45] !== A || e[46] !== v
    ? ((J = {
        id: `appgen-site-search`,
        label: A,
        onSearchQueryChange: y,
        placeholder: A,
        searchQuery: v,
      }),
      (e[45] = A),
      (e[46] = v),
      (e[47] = J))
    : (J = e[47]);
  let Y;
  e[48] !== a ||
  e[49] !== M ||
  e[50] !== oe ||
  e[51] !== s ||
  e[52] !== c ||
  e[53] !== u ||
  e[54] !== d ||
  e[55] !== C ||
  e[56] !== E
    ? ((Y = (0, $.jsx)(`div`, {
        className: `mx-auto flex min-h-full w-full max-w-[760px] flex-col`,
        children: d
          ? (0, $.jsx)(Se, {})
          : E == null
            ? (0, $.jsx)(we, {})
            : E.length === 0 && (!s || c)
              ? C.length > 0
                ? (0, $.jsx)(Te, {})
                : (0, $.jsx)(Ce, { onCreate: M })
              : (0, $.jsx)(Ee, {
                  projects: E,
                  hasNextPage: s && !c,
                  isFetchingNextPage: u,
                  onEdit: oe,
                  onLoadNextPage: () => {
                    a();
                  },
                }),
      })),
      (e[48] = a),
      (e[49] = M),
      (e[50] = oe),
      (e[51] = s),
      (e[52] = c),
      (e[53] = u),
      (e[54] = d),
      (e[55] = C),
      (e[56] = E),
      (e[57] = Y))
    : (Y = e[57]);
  let X;
  e[58] !== ee || e[59] !== J || e[60] !== Y || e[61] !== S
    ? ((X = (0, $.jsx)(ue, {
        contentClassName: `!pt-6`,
        headerVariant: `inset`,
        scrollContainerRef: ee,
        title: K,
        subtitle: q,
        titleRef: S,
        search: J,
        children: Y,
      })),
      (e[58] = ee),
      (e[59] = J),
      (e[60] = Y),
      (e[61] = S),
      (e[62] = X))
    : (X = e[62]);
  let Z;
  return (
    e[63] !== W || e[64] !== G || e[65] !== X
      ? ((Z = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [W, G, X],
        })),
        (e[63] = W),
        (e[64] = G),
        (e[65] = X),
        (e[66] = Z))
      : (Z = e[66]),
    Z
  );
}
function Se() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(g, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ce(e) {
  let t = (0, Q.c)(5),
    { onCreate: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(W, { className: `icon-lg text-token-foreground` })), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children: (0, $.jsx)(T, {
          id: `appgenPage.empty.title`,
          defaultMessage: `Nothing here yet`,
          description: `Empty state title for the Sites page`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(T, {
        id: `appgenPage.empty.create`,
        defaultMessage: `Create new site`,
        description: `Button label for creating a new site from the empty state`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4 text-center`,
            children: [
              r,
              i,
              (0, $.jsx)(p, { color: `outline`, size: `medium`, onClick: n, children: a }),
            ],
          }),
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
function we() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, $.jsx)(T, {
              id: `appgenPage.error.title`,
              defaultMessage: `Unable to load sites`,
              description: `Error state title for the Sites page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Te() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center text-sm font-medium text-token-text-secondary`,
          children: (0, $.jsx)(T, {
            id: `appgenPage.sites.search.empty`,
            defaultMessage: `No sites found`,
            description: `Empty state shown when no Sites match the search query`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ee(e) {
  let t = (0, Q.c)(16),
    { hasNextPage: n, isFetchingNextPage: r, onEdit: i, onLoadNextPage: a, projects: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(T, {
          id: `appgenPage.list.site`,
          defaultMessage: `Site`,
          description: `Column header for a site in the Sites list`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsxs)(`div`, {
        className: `col-span-full grid grid-cols-subgrid border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-appgen-row]:hover)]:border-transparent`,
        children: [
          s,
          (0, $.jsx)(`span`, {
            className: `pl-4 [@container_(max-width:520px)]:sr-only`,
            children: (0, $.jsx)(T, {
              id: `appgenPage.list.sharedWith`,
              defaultMessage: `Shared with`,
              description: `Column header for who can access a site in the Sites list`,
            }),
          }),
        ],
      })),
      (t[1] = c))
    : (c = t[1]);
  let l;
  if (t[2] !== i || t[3] !== o) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, $.jsx)(De, { project: e, onEdit: i }, e.id)), (t[5] = i), (t[6] = e)),
      (l = o.map(e)),
      (t[2] = i),
      (t[3] = o),
      (t[4] = l));
  } else l = t[4];
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, $.jsxs)(`div`, {
        className: `grid grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto_auto]`,
        children: [c, l],
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  t[9] !== n || t[10] !== r || t[11] !== a
    ? ((d = (0, $.jsx)(ve, { hasNextPage: n, isFetchingNextPage: r, onLoadNextPage: a })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = a),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, $.jsxs)(`div`, { className: `@container pb-3`, children: [u, d] })),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function De(e) {
  let t = (0, Q.c)(48),
    { onEdit: n, project: r } = e,
    i = re(),
    a = r.current_live_url,
    { data: o } = C(r.screenshot_url),
    s;
  t[0] !== i || t[1] !== a || t[2] !== r.title
    ? ((s =
        a == null
          ? null
          : (0, $.jsx)(te, {
              "aria-label": i.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites list`,
                },
                { siteTitle: r.title },
              ),
              className: `peer/appgen-row absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
              href: a,
              initiator: `sites_library`,
              openTarget: `in-app-browser`,
            })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r.title),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c =
        o == null
          ? (0, $.jsx)(Oe, {})
          : (0, $.jsxs)(`div`, {
              className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
              children: [
                (0, $.jsx)(`img`, {
                  alt: ``,
                  className: `size-full object-cover`,
                  loading: `lazy`,
                  src: o,
                }),
                (0, $.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
                }),
              ],
            })),
      (t[4] = o),
      (t[5] = c));
  let l;
  t[6] === r.title
    ? (l = t[7])
    : ((l = (0, $.jsx)(`span`, {
        className: `truncate text-sm leading-5 font-medium text-token-foreground`,
        children: r.title,
      })),
      (t[6] = r.title),
      (t[7] = l));
  let u;
  t[8] === r.updated_at
    ? (u = t[9])
    : ((u = (0, $.jsx)(A, { dateString: r.updated_at })), (t[8] = r.updated_at), (t[9] = u));
  let d;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== a || t[12] !== r.slug
    ? ((f = N(a) ?? r.slug), (t[11] = a), (t[12] = r.slug), (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] === f
    ? (p = t[15])
    : ((p = (0, $.jsx)(`span`, { className: `truncate`, children: f })), (t[14] = f), (t[15] = p));
  let m;
  t[16] !== u || t[17] !== p
    ? ((m = (0, $.jsxs)(`span`, {
        className: `appgen-row-default-subtitle flex min-w-0 items-center gap-1.5`,
        children: [u, d, p],
      })),
      (t[16] = u),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  t[19] === a
    ? (h = t[20])
    : ((h =
        a == null
          ? null
          : (0, $.jsxs)(`span`, {
              className: `appgen-row-hover-subtitle hidden items-center gap-1`,
              children: [
                (0, $.jsx)(T, {
                  id: `appgenPage.openInBrowserSubtitle`,
                  defaultMessage: `Open in browser`,
                  description: `Hover subtitle for opening a live site`,
                }),
                (0, $.jsx)(H, { className: `icon-2xs`, ExternalIcon: ee, href: a }),
              ],
            })),
      (t[19] = a),
      (t[20] = h));
  let g;
  t[21] !== m || t[22] !== h
    ? ((g = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-xs leading-[18px] text-token-text-secondary`,
        children: [m, h],
      })),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] !== g || t[25] !== l
    ? ((_ = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-px`, children: [l, g] })),
      (t[24] = g),
      (t[25] = l),
      (t[26] = _))
    : (_ = t[26]);
  let v;
  t[27] !== _ || t[28] !== c
    ? ((v = (0, $.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-6 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex`,
        children: [c, _],
      })),
      (t[27] = _),
      (t[28] = c),
      (t[29] = v))
    : (v = t[29]);
  let y;
  t[30] !== r.access_policy || t[31] !== r.id || t[32] !== r.title
    ? ((y = (0, $.jsx)(ke, {
        accessPolicy: r.access_policy,
        projectId: r.id,
        projectTitle: r.title,
      })),
      (t[30] = r.access_policy),
      (t[31] = r.id),
      (t[32] = r.title),
      (t[33] = y))
    : (y = t[33]);
  let b;
  t[34] !== a || t[35] !== n || t[36] !== r.id || t[37] !== r.title
    ? ((b = () => n(r.id, r.title, a)),
      (t[34] = a),
      (t[35] = n),
      (t[36] = r.id),
      (t[37] = r.title),
      (t[38] = b))
    : (b = t[38]);
  let x;
  t[39] !== r.id || t[40] !== r.title || t[41] !== b
    ? ((x = (0, $.jsx)(Y, {
        projectId: r.id,
        projectTitle: r.title,
        surface: `sites`,
        viewMode: `list`,
        onEdit: b,
      })),
      (t[39] = r.id),
      (t[40] = r.title),
      (t[41] = b),
      (t[42] = x))
    : (x = t[42]);
  let S;
  return (
    t[43] !== s || t[44] !== v || t[45] !== y || t[46] !== x
      ? ((S = (0, $.jsxs)(`div`, {
          className: `relative col-span-full grid grid-cols-subgrid items-center overflow-hidden rounded-xl p-3 hover:bg-token-list-hover-background/50`,
          "data-appgen-row": !0,
          children: [s, v, y, x],
        })),
        (t[43] = s),
        (t[44] = v),
        (t[45] = y),
        (t[46] = x),
        (t[47] = S))
      : (S = t[47]),
    S
  );
}
function Oe() {
  let e = (0, Q.c)(5),
    { platform: t } = k(),
    n = t === `windows` ? he : q,
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = (0, $.jsx)(n, { "aria-hidden": !0, className: `size-full` })), (e[0] = n), (e[1] = r));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  return (
    e[3] === r
      ? (a = e[4])
      : ((a = (0, $.jsxs)(`div`, {
          className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
          children: [r, i],
        })),
        (e[3] = r),
        (e[4] = a)),
    a
  );
}
function ke(e) {
  let t = (0, Q.c)(16),
    { accessPolicy: r, projectId: i, projectTitle: a } = e,
    s = z(r),
    c = o(n),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = () => d(c, be, { projectId: i })), (t[0] = i), (t[1] = c), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === r
    ? (u = t[4])
    : ((u = (0, $.jsx)(L, { className: `icon-xs shrink-0`, accessPolicy: r, "aria-hidden": !0 })),
      (t[3] = r),
      (t[4] = u));
  let f = T,
    p = R(s),
    m;
  t[5] !== f || t[6] !== s || t[7] !== p
    ? ((m = (0, $.jsx)(`span`, {
        className: `truncate [@container_(max-width:520px)]:sr-only`,
        children: (0, $.jsx)(f, { ...p, values: s }),
      })),
      (t[5] = f),
      (t[6] = s),
      (t[7] = p),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === a
    ? (h = t[10])
    : ((h = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(T, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: a },
        }),
      })),
      (t[9] = a),
      (t[10] = h));
  let g;
  return (
    t[11] !== l || t[12] !== u || t[13] !== m || t[14] !== h
      ? ((g = (0, $.jsxs)(`button`, {
          className: `pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 pl-4 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline [@container_(max-width:520px)]:pl-2`,
          type: `button`,
          onClick: l,
          children: [u, m, h],
        })),
        (t[11] = l),
        (t[12] = u),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
var Q, Ae, $;
e(() => {
  ((Q = r()),
    s(),
    (Ae = t(a(), 1)),
    w(),
    u(),
    _(),
    x(),
    V(),
    j(),
    _e(),
    m(),
    G(),
    v(),
    S(),
    f(),
    P(),
    O(),
    le(),
    y(),
    oe(),
    U(),
    i(),
    D(),
    ge(),
    F(),
    B(),
    I(),
    fe(),
    E(),
    ye(),
    M(),
    K(),
    J(),
    X(),
    Z(),
    ($ = c()));
})();
export { xe as AppgenPage };
//# sourceMappingURL=appgen-page.js.map
