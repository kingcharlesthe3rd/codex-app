import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $i as r,
  $x as i,
  AV as a,
  Ar as o,
  At as s,
  BP as c,
  CV as l,
  DV as u,
  Dr as d,
  Dt as f,
  Er as p,
  Et as m,
  FN as h,
  GP as g,
  HP as _,
  IP as v,
  LP as y,
  NE as b,
  PN as x,
  QN as S,
  QR as C,
  Qi as w,
  Qj as T,
  RN as E,
  RV as D,
  Sz as O,
  TB as k,
  TP as A,
  Tr as j,
  U as M,
  W as N,
  XO as P,
  YO as F,
  bB as I,
  dd as L,
  dj as R,
  eM as z,
  eS as B,
  es as ee,
  fN as V,
  gi as te,
  hN as ne,
  hi as re,
  iF as H,
  if as ie,
  jE as ae,
  jV as U,
  kt as oe,
  mN as se,
  mi as ce,
  oa as le,
  of as ue,
  pN as de,
  pf as fe,
  pi as pe,
  pj as me,
  qP as W,
  sa as he,
  sf as ge,
  td as _e,
  ts as ve,
  uo as ye,
  vj as be,
  vo as xe,
  wP as G,
  wr as Se,
  xV as Ce,
  zV as K,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Sf as we,
  _a as Te,
  d_ as Ee,
  dw as De,
  ga as Oe,
  im as ke,
  rm as Ae,
  uw as je,
  xf as Me,
} from "./app-initial~app-main~onboarding-page.js";
import {
  b as Ne,
  y as Pe,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j.js";
import {
  A as Fe,
  C as Ie,
  M as Le,
  N as Re,
  S as ze,
  _ as Be,
  g as Ve,
  j as He,
  v as Ue,
  y as We,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~coa484up.js";
import {
  c as Ge,
  l as Ke,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d4gukj65.js";
import {
  n as qe,
  t as Je,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~app~c482ypdv.js";
function Ye(e, t) {
  switch (t.itemType) {
    case `AGENTS_MD`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.agentsMd`,
        defaultMessage: `Instructions`,
        description: `Label for instruction file external agent config migration item`,
      });
    case `CONFIG`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.config`,
        defaultMessage: `Settings`,
        description: `Label for config external agent config migration item`,
      });
    case `SKILLS`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.skills`,
        defaultMessage: `Skills`,
        description: `Label for skills external agent config migration item`,
      });
    case `PLUGINS`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.plugins`,
        defaultMessage: `Plugins`,
        description: `Label for plugins external agent config migration item`,
      });
    case `SUBAGENTS`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.subagents`,
        defaultMessage: `Agents`,
        description: `Label for subagents external agent config migration item`,
      });
    case `HOOKS`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.hooks`,
        defaultMessage: `Hooks`,
        description: `Label for hooks external agent config migration item`,
      });
    case `COMMANDS`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.commands`,
        defaultMessage: `Commands`,
        description: `Label for commands external agent config migration item`,
      });
    case `SESSIONS`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.sessions`,
        defaultMessage: `Sessions`,
        description: `Label for sessions external agent config migration item`,
      });
    case `MCP_SERVER_CONFIG`:
      return e.formatMessage({
        id: `externalAgentConfig.itemType.mcpServerConfig`,
        defaultMessage: `MCP servers`,
        description: `Label for MCP server config external agent config migration item`,
      });
  }
}
function Xe(e) {
  return (0, $e.default)(e, ({ itemType: e }) => {
    switch (e) {
      case `CONFIG`:
        return 0;
      case `AGENTS_MD`:
        return 1;
      case `SKILLS`:
        return 2;
      case `COMMANDS`:
        return 3;
      case `SUBAGENTS`:
        return 4;
      case `HOOKS`:
        return 5;
      case `PLUGINS`:
        return 6;
      case `MCP_SERVER_CONFIG`:
        return 7;
      case `SESSIONS`:
        return 8;
    }
  });
}
function Ze(e) {
  return e.itemType !== `SESSIONS`;
}
function Qe(e) {
  return e.filter(Ze);
}
var $e,
  et = e(() => {
    $e = t(Ee(), 1);
  }),
  tt,
  nt,
  rt = e(() => {
    (t(K()),
      (tt = U()),
      (nt = (e) =>
        (0, tt.jsx)(`svg`, {
          width: 40,
          height: 40,
          viewBox: `0 0 40 40`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, tt.jsx)(`path`, {
            d: `M21.1025 15.1483C21.2658 14.8857 21.5961 14.7644 21.8974 14.8759C22.2418 15.0034 22.4175 15.3869 22.29 15.7313L18.957 24.7313L18.8974 24.8514C18.7341 25.1141 18.4038 25.2354 18.1025 25.1239C17.7581 24.9963 17.5823 24.6128 17.7099 24.2684L21.0429 15.2684L21.1025 15.1483ZM14.4189 15.1766C14.5973 14.8558 15.0022 14.7405 15.3232 14.9188C15.644 15.0973 15.7593 15.5022 15.581 15.8231L13.2597 19.9999L15.581 24.1766L15.6347 24.3007C15.7276 24.5955 15.6039 24.9248 15.3232 25.0809C15.0422 25.237 14.6964 25.1684 14.4951 24.9335L14.4189 24.8231L11.9189 20.3231C11.8073 20.1223 11.8073 19.8775 11.9189 19.6766L14.4189 15.1766ZM24.6767 14.9188C24.9577 14.7627 25.3035 14.8313 25.5048 15.0663L25.581 15.1766L28.081 19.6766C28.1926 19.8775 28.1926 20.1223 28.081 20.3231L25.581 24.8231C25.4025 25.1439 24.9976 25.2592 24.6767 25.0809C24.3559 24.9025 24.2406 24.4976 24.4189 24.1766L26.7392 19.9999L24.4189 15.8231L24.3652 15.6991C24.2723 15.4042 24.396 15.075 24.6767 14.9188Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  q,
  it,
  at = e(() => {
    (t(K()),
      (q = U()),
      (it = (e) =>
        (0, q.jsxs)(`svg`, {
          width: 40,
          height: 40,
          viewBox: `0 0 40 40`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, q.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M15.4997 21.1346C16.9715 21.1346 18.1646 22.3279 18.1647 23.7996C18.1647 25.2714 16.9715 26.4646 15.4997 26.4646C14.028 26.4645 12.8347 25.2713 12.8347 23.7996C12.8348 22.328 14.0281 21.1347 15.4997 21.1346ZM15.4997 22.4646C14.7626 22.4648 14.1649 23.0625 14.1647 23.7996C14.1647 24.5368 14.7625 25.1344 15.4997 25.1346C16.237 25.1346 16.8347 24.5369 16.8347 23.7996C16.8345 23.0624 16.2369 22.4646 15.4997 22.4646Z`,
              fill: `currentColor`,
            }),
            (0, q.jsx)(`path`, {
              d: `M27.1335 23.1482C27.4365 23.2101 27.6646 23.4783 27.6647 23.7996C27.6647 24.121 27.4366 24.389 27.1335 24.451L26.9997 24.4646H20.9997C20.6326 24.4645 20.3347 24.1668 20.3347 23.7996C20.3348 23.4325 20.6327 23.1347 20.9997 23.1346H26.9997L27.1335 23.1482Z`,
              fill: `currentColor`,
            }),
            (0, q.jsx)(`path`, {
              d: `M17.2975 13.6002C17.5179 13.3066 17.9354 13.2473 18.2292 13.4674C18.5229 13.6878 18.5823 14.1052 18.362 14.399L15.362 18.399C15.2463 18.5531 15.0689 18.649 14.8766 18.6627C14.6845 18.6762 14.4953 18.6065 14.3591 18.4703L12.8591 16.9703L12.7741 16.8658C12.6038 16.6077 12.6319 16.2561 12.8591 16.0289C13.0862 15.8017 13.4379 15.7737 13.696 15.9439L13.8005 16.0289L14.7575 16.9859L17.2975 13.6002Z`,
              fill: `currentColor`,
            }),
            (0, q.jsx)(`path`, {
              d: `M27.1335 15.5482C27.4365 15.6101 27.6646 15.8783 27.6647 16.1996C27.6647 16.521 27.4366 16.789 27.1335 16.851L26.9997 16.8646H20.9997C20.6326 16.8645 20.3347 16.5668 20.3347 16.1996C20.3348 15.8325 20.6327 15.5347 20.9997 15.5346H26.9997L27.1335 15.5482Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  ot,
  st,
  ct = e(() => {
    (t(K()),
      (ot = U()),
      (st = (e) =>
        (0, ot.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 40,
          height: 48,
          fill: `none`,
          viewBox: `0 0 40 48`,
          ...e,
          children: (0, ot.jsx)(`path`, {
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: 1.67,
            d: `m38.963 18.927-3.072-5.963m3.072 5.963L33 22m5.963-3.073C24.132 13.427 10.5 15.5 1.11 22.47`,
            opacity: 0.2,
          }),
        })));
  }),
  lt,
  ut,
  dt = e(() => {
    (t(K()),
      (lt = U()),
      (ut = (e) =>
        (0, lt.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `none`,
          viewBox: `0 0 20 20`,
          ...e,
          children: (0, lt.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            d: `m7.584 2.874.251.026c.58.085 1.125.338 1.565.73l.244.238c.111.113.15.15.186.183l.112.093q.138.102.291.175l2.09-.443.226-.037c.7-.076 1.373.182 1.844.66q.369.005.668.028c.436.036.821.112 1.18.294l.206.116c.471.288.855.703 1.107 1.198l.063.136c.137.319.2.662.23 1.042.036.428.035.957.035 1.612V12.7c0 .655 0 1.184-.034 1.612-.031.38-.094.723-.23 1.043l-.064.135c-.252.495-.636.91-1.107 1.199l-.207.115c-.358.182-.743.258-1.178.294-.428.035-.957.034-1.612.034h-6.9c-.655 0-1.184 0-1.612-.034-.38-.031-.723-.094-1.042-.23l-.136-.064a3 3 0 0 1-1.198-1.107l-.116-.207c-.182-.358-.258-.743-.294-1.178-.035-.428-.034-.957-.034-1.612V7.3c0-.655 0-1.184.034-1.612.036-.435.112-.82.294-1.178l.116-.207A3 3 0 0 1 3.76 3.196l.136-.063c.319-.137.662-.2 1.042-.23.428-.036.957-.035 1.612-.035h.695c.144 0 .242 0 .339.006M3.382 12.7c0 .675 0 1.144.03 1.508.03.357.083.558.16.708l.067.12c.167.273.408.496.695.643l.123.052c.137.05.317.085.585.107.364.03.833.03 1.508.03h6.9c.675 0 1.144 0 1.508-.03.357-.03.558-.083.708-.16l.12-.067c.273-.167.496-.408.643-.695l.052-.123c.05-.137.085-.317.107-.585.03-.364.03-.833.03-1.508V9.332H3.382zm12.132-4.632h1.1a10 10 0 0 0-.026-.651 2.3 2.3 0 0 0-.107-.585l-.052-.123a1.75 1.75 0 0 0-.643-.695l-.12-.068c-.14-.07-.324-.12-.636-.151zM12.69 5.162l-.092.015-6.204 1.318a.92.92 0 0 0-.71 1.092l.103.481h8.366l-.464-2.182a.92.92 0 0 0-.999-.724M6.55 4.132c-.675 0-1.144 0-1.508.03a2.3 2.3 0 0 0-.585.107l-.123.052c-.287.147-.528.37-.695.643l-.068.12c-.076.15-.13.351-.159.708-.03.364-.03.833-.03 1.508v.768h1.047l-.044-.205a2.25 2.25 0 0 1 1.733-2.669l2.527-.537-.085-.083a1.75 1.75 0 0 0-.909-.424l-.144-.015c-.05-.003-.103-.003-.262-.003z`,
            clipRule: `evenodd`,
          }),
        })));
  }),
  ft,
  pt = e(() => {
    ft = `` + new URL(`codex-app-ga-logo--UgmJjKM.png`, import.meta.url).href;
  }),
  J,
  mt,
  ht = e(() => {
    (t(K()),
      (J = U()),
      (mt = (e) =>
        (0, J.jsxs)(`svg`, {
          width: 36,
          height: 36,
          viewBox: `0 0 36 36`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, J.jsx)(`g`, {
              clipPath: `url(#clip0_1683_12416)`,
              children: (0, J.jsx)(`path`, {
                d: `M13.8076 13.1477V9.75825C13.8076 9.47278 13.9147 9.25859 14.1644 9.11603L20.9792 5.1914C21.9069 4.65627 23.013 4.40661 24.1545 4.40661C28.4359 4.40661 31.1477 7.72483 31.1477 11.2569C31.1477 11.5065 31.1477 11.792 31.1119 12.0775L24.0474 7.93867C23.6194 7.68901 23.191 7.68901 22.763 7.93867L13.8076 13.1477ZM29.7203 26.349V18.2497C29.7203 17.7501 29.5061 17.3933 29.0781 17.1437L20.1228 11.9346L23.0484 10.2576C23.2981 10.115 23.5123 10.115 23.7619 10.2576L30.5767 14.1822C32.5392 15.3241 33.8591 17.7501 33.8591 20.1048C33.8591 22.8162 32.2537 25.3138 29.7203 26.3486V26.349ZM11.7026 19.2132L8.77694 17.5007C8.52728 17.3582 8.42019 17.144 8.42019 16.8585V9.00927C8.42019 5.19174 11.3458 2.30157 15.3063 2.30157C16.8049 2.30157 18.1961 2.80122 19.3738 3.69311L12.3452 7.76064C11.9171 8.0103 11.7029 8.36705 11.7029 8.86671V19.2136L11.7026 19.2132ZM18 22.8524L13.8076 20.4977V15.5028L18 13.1481L22.192 15.5028V20.4977L18 22.8524ZM20.6937 33.6989C19.1951 33.6989 17.8039 33.1992 16.6262 32.3074L23.6548 28.2398C24.0829 27.9902 24.2971 27.6334 24.2971 27.1338V16.7869L27.2585 18.4994C27.5082 18.6419 27.6153 18.8561 27.6153 19.1416V26.9909C27.6153 30.8084 24.6538 33.6986 20.6937 33.6986V33.6989ZM12.2377 25.7426L5.42292 21.8179C3.46044 20.6761 2.14052 18.2501 2.14052 15.8954C2.14052 13.1481 3.78172 10.6863 6.3148 9.6515V17.7862C6.3148 18.2859 6.52899 18.6426 6.95703 18.8923L15.8769 24.0655L12.9512 25.7426C12.7016 25.8851 12.4874 25.8851 12.2377 25.7426ZM11.8455 31.5939C7.81378 31.5939 4.85232 28.5611 4.85232 24.8149C4.85232 24.5294 4.88813 24.2439 4.9236 23.9585L11.9523 28.026C12.3803 28.2756 12.8087 28.2756 13.2367 28.026L22.192 22.8527V26.2422C22.192 26.5277 22.0849 26.7419 21.8353 26.8844L15.0205 30.8091C14.0928 31.3442 12.9867 31.5939 11.8452 31.5939H11.8455ZM20.6937 35.8394C25.0109 35.8394 28.6143 32.7712 29.4352 28.7037C33.4311 27.6689 36 23.9226 36 20.1051C36 17.6075 34.9297 15.1815 33.0031 13.4332C33.1814 12.6839 33.2885 11.9346 33.2885 11.1856C33.2885 6.08363 29.1497 2.26575 24.3687 2.26575C23.4055 2.26575 22.4778 2.40832 21.5501 2.7296C19.9444 1.15968 17.7323 0.160706 15.3063 0.160706C10.9891 0.160706 7.38574 3.22892 6.5648 7.29645C2.56889 8.33124 0 12.0775 0 15.895C0 18.3926 1.07026 20.8186 2.99693 22.5669C2.81855 23.3162 2.71146 24.0655 2.71146 24.8145C2.71146 29.9165 6.85027 33.7344 11.6313 33.7344C12.5945 33.7344 13.5222 33.5918 14.4499 33.2705C16.0553 34.8405 18.2674 35.8394 20.6937 35.8394Z`,
                fill: `currentColor`,
              }),
            }),
            (0, J.jsx)(`defs`, {
              children: (0, J.jsx)(`clipPath`, {
                id: `clip0_1683_12416`,
                children: (0, J.jsx)(`rect`, { width: 36, height: 36, fill: `white` }),
              }),
            }),
          ],
        })));
  });
function gt(e) {
  let t = (0, _t.c)(3),
    { appBrand: n, className: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i =
          n === O.ChatGPT
            ? (0, vt.jsx)(mt, { "aria-hidden": `true`, className: r })
            : (0, vt.jsx)(`img`, {
                alt: ``,
                "aria-hidden": `true`,
                className: r,
                draggable: !1,
                src: ft,
              })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var _t,
  vt,
  yt = e(() => {
    ((_t = D()), H(), pt(), ht(), (vt = U()));
  });
function bt(e) {
  let t = (0, St.c)(16),
    { appBrand: n, sourceIconVariant: r, title: i, subtitle: a } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = (0, Y.jsx)(xt, { variant: r })), (t[0] = r), (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(st, { className: `h-12 w-10 text-token-foreground` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === n
    ? (c = t[4])
    : ((c = (0, Y.jsx)(gt, { appBrand: n, className: `size-12` })), (t[3] = n), (t[4] = c));
  let l;
  t[5] !== o || t[6] !== c
    ? ((l = (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-4`,
        "aria-hidden": `true`,
        children: [o, s, c],
      })),
      (t[5] = o),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === i
    ? (u = t[9])
    : ((u = (0, Y.jsx)(`h1`, {
        className: `mt-6 text-[28px] leading-[34px] font-normal text-token-foreground`,
        children: i,
      })),
      (t[8] = i),
      (t[9] = u));
  let d;
  t[10] === a
    ? (d = t[11])
    : ((d = (0, Y.jsx)(`p`, {
        className: `mt-2 text-[16px] leading-6 text-token-description-foreground`,
        children: a,
      })),
      (t[10] = a),
      (t[11] = d));
  let f;
  return (
    t[12] !== l || t[13] !== u || t[14] !== d
      ? ((f = (0, Y.jsxs)(`div`, {
          className: `flex flex-col items-center text-center`,
          children: [l, u, d],
        })),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function xt(e) {
  let t = (0, St.c)(5),
    { variant: n } = e,
    r =
      n === `orange`
        ? `bg-[#DA6A44] text-token-button-foreground`
        : `bg-[color-mix(in_srgb,var(--color-token-foreground)_4%,transparent)] text-token-text-secondary`,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = G(`flex size-12 shrink-0 items-center justify-center rounded-xl`, r)),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(ut, { className: `size-6` })), (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === i
      ? (o = t[4])
      : ((o = (0, Y.jsx)(`div`, { className: i, children: a })), (t[3] = i), (t[4] = o)),
    o
  );
}
var St,
  Y,
  Ct = e(() => {
    ((St = D()), A(), ct(), dt(), yt(), (Y = U()));
  });
function wt(e) {
  let t = (0, Et.c)(49),
    { appBrand: n, providerIds: r, variant: i, onCustomize: a, onContinue: o, onSkip: s } = e,
    c = i === void 0 ? `onboarding` : i,
    l = W(),
    [u, f] = (0, Dt.useState)(r),
    m = c === `dialog`,
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = m
        ? (0, X.jsx)(g, {
            id: `electron.onboarding.welcomeV2.externalAgentImport.providers.dialogTitle`,
            defaultMessage: `Import from other AI apps`,
            description: `Title for the external agent provider selection dialog`,
          })
        : (0, X.jsx)(g, {
            id: `electron.onboarding.welcomeV2.externalAgentImport.providers.title`,
            defaultMessage: `Import work from other AI apps`,
            description: `Title for the external agent provider selection step`,
          })),
      (t[0] = m),
      (t[1] = h));
  let _ = h,
    v;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(g, {
        id: `electron.onboarding.welcomeV2.externalAgentImport.providers.subtitle`,
        defaultMessage: `Bring over your setup, projects, and recent chats`,
        description: `Subtitle for the external agent provider selection step`,
      })),
      (t[2] = v))
    : (v = t[2]);
  let y = v,
    b;
  t[3] !== o || t[4] !== s || t[5] !== u
    ? ((b = () => {
        if (u.length === 0) {
          s();
          return;
        }
        o(u);
      }),
      (t[3] = o),
      (t[4] = s),
      (t[5] = u),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S;
  t[7] !== a || t[8] !== s || t[9] !== u
    ? ((S = () => {
        if (u.length === 0) {
          s();
          return;
        }
        a?.(u);
      }),
      (t[7] = a),
      (t[8] = s),
      (t[9] = u),
      (t[10] = S))
    : (S = t[10]);
  let C = S,
    w;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (e) => {
        f((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
      }),
      (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] === x
    ? (E = t[13])
    : ((E = (e) => {
        (e.preventDefault(), x());
      }),
      (t[12] = x),
      (t[13] = E));
  let D = E,
    O;
  t[14] !== n || t[15] !== m || t[16] !== _
    ? ((O = m
        ? (0, X.jsx)(d, {
            children: (0, X.jsx)(p, {
              title: (0, X.jsx)(re, { className: `contents`, children: _ }),
              subtitle: (0, X.jsx)(ce, { className: `sr-only`, children: y }),
            }),
          })
        : (0, X.jsx)(bt, { appBrand: n, sourceIconVariant: `neutral`, title: _, subtitle: y })),
      (t[14] = n),
      (t[15] = m),
      (t[16] = _),
      (t[17] = O))
    : (O = t[17]);
  let k = m ? `mt-4 flex w-full flex-col` : `mt-8 flex w-full max-w-xs flex-col`,
    A;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, X.jsx)(`div`, {
        className: `mb-2 text-xs leading-4 font-medium text-token-description-foreground`,
        children: (0, X.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.providers.appsFound`,
          defaultMessage: `Apps found`,
          description: `Label above the external agent apps found list`,
        }),
      })),
      (t[18] = A))
    : (A = t[18]);
  let M;
  t[19] === l
    ? (M = t[20])
    : ((M = l.formatMessage({
        id: `electron.onboarding.welcomeV2.externalAgentImport.providers.list`,
        defaultMessage: `Apps found`,
        description: `Accessible label for the external agent provider list`,
      })),
      (t[19] = l),
      (t[20] = M));
  let N;
  if (t[21] !== r || t[22] !== u) {
    let e;
    t[24] === r ? (e = t[25]) : ((e = (e) => r.includes(e)), (t[24] = r), (t[25] = e));
    let n;
    (t[26] === u
      ? (n = t[27])
      : ((n = (e) =>
          (0, X.jsx)(Tt, { providerId: e, selected: u.includes(e), onToggle: () => T(e) }, e)),
        (t[26] = u),
        (t[27] = n)),
      (N = Ot.filter(e).map(n)),
      (t[21] = r),
      (t[22] = u),
      (t[23] = N));
  } else N = t[23];
  let P;
  t[28] !== M || t[29] !== N
    ? ((P = (0, X.jsx)(`div`, {
        role: `list`,
        "aria-label": M,
        className: `overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary`,
        children: N,
      })),
      (t[28] = M),
      (t[29] = N),
      (t[30] = P))
    : (P = t[30]);
  let F;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(`div`, {
        className: `mt-2 text-center text-xs leading-4 text-token-text-secondary`,
        children: (0, X.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.providers.standardChatsUnsupported`,
          defaultMessage: `Your existing Claude setup won’t be affected. Standard Claude Chat data cannot be imported.`,
          description: `Note below the external agent provider selection list`,
        }),
      })),
      (t[31] = F))
    : (F = t[31]);
  let I;
  t[32] !== P || t[33] !== k
    ? ((I = (0, X.jsxs)(`div`, { className: k, children: [A, P, F] })),
      (t[32] = P),
      (t[33] = k),
      (t[34] = I))
    : (I = t[34]);
  let L;
  t[35] !== x || t[36] !== C || t[37] !== m || t[38] !== a || t[39] !== s
    ? ((L = m
        ? (0, X.jsx)(`div`, {
            className: `mt-4`,
            children: (0, X.jsxs)(j, {
              children: [
                (0, X.jsx)(V, {
                  color: `ghost`,
                  onClick: s,
                  children: (0, X.jsx)(g, {
                    id: `common.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Cancel button label`,
                  }),
                }),
                a == null
                  ? null
                  : (0, X.jsx)(V, {
                      type: `button`,
                      color: `secondary`,
                      onClick: C,
                      children: (0, X.jsx)(g, {
                        id: `electron.onboarding.welcomeV2.externalAgentImport.customize`,
                        defaultMessage: `Customize`,
                        description: `Customize button label on the external agent import step`,
                      }),
                    }),
                (0, X.jsx)(V, {
                  type: `submit`,
                  color: `primary`,
                  children: (0, X.jsx)(g, {
                    id: `electron.onboarding.welcomeV2.continue`,
                    defaultMessage: `Continue`,
                    description: `Welcome v2 continue button label`,
                  }),
                }),
              ],
            }),
          })
        : (0, X.jsxs)(`div`, {
            className: `mt-8 flex w-full max-w-xs flex-col items-center gap-2`,
            children: [
              (0, X.jsx)(V, {
                className: `w-full justify-center`,
                size: `large`,
                onClick: x,
                children: (0, X.jsx)(g, {
                  id: `electron.onboarding.welcomeV2.continue`,
                  defaultMessage: `Continue`,
                  description: `Welcome v2 continue button label`,
                }),
              }),
              (0, X.jsx)(V, {
                className: `w-full justify-center`,
                color: `ghost`,
                size: `large`,
                onClick: s,
                children: (0, X.jsx)(g, {
                  id: `electron.onboarding.welcomeV2.skip`,
                  defaultMessage: `Skip`,
                  description: `Welcome v2 skip button label`,
                }),
              }),
            ],
          })),
      (t[35] = x),
      (t[36] = C),
      (t[37] = m),
      (t[38] = a),
      (t[39] = s),
      (t[40] = L))
    : (L = t[40]);
  let R;
  t[41] !== I || t[42] !== L || t[43] !== O
    ? ((R = (0, X.jsxs)(X.Fragment, { children: [O, I, L] })),
      (t[41] = I),
      (t[42] = L),
      (t[43] = O),
      (t[44] = R))
    : (R = t[44]);
  let z = R,
    B;
  return (
    t[45] !== z || t[46] !== D || t[47] !== m
      ? ((B = m
          ? (0, X.jsx)(Se, { as: `form`, className: `gap-0`, onSubmit: D, children: z })
          : (0, X.jsx)(`div`, {
              className: `flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10`,
              children: z,
            })),
        (t[45] = z),
        (t[46] = D),
        (t[47] = m),
        (t[48] = B))
      : (B = t[48]),
    B
  );
}
function Tt(e) {
  let t = (0, Et.c)(18),
    { providerId: n, selected: r, onToggle: i } = e,
    a = W(),
    { Icon: o, label: s } = kt[n],
    c;
  t[0] !== a || t[1] !== s
    ? ((c = a.formatMessage(s)), (t[0] = a), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === o
    ? (u = t[4])
    : ((u = (0, X.jsx)(`div`, {
        className: `flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#DA6A44] text-token-button-foreground`,
        "aria-hidden": `true`,
        children: (0, X.jsx)(o, { className: `size-10` }),
      })),
      (t[3] = o),
      (t[4] = u));
  let d;
  t[5] === l
    ? (d = t[6])
    : ((d = (0, X.jsx)(`div`, {
        className: `min-w-0 flex-1 text-base leading-6 text-token-foreground`,
        children: l,
      })),
      (t[5] = l),
      (t[6] = d));
  let f;
  t[7] !== a || t[8] !== l
    ? ((f = a.formatMessage(
        {
          id: `electron.onboarding.welcomeV2.externalAgentImport.providers.toggle`,
          defaultMessage: `Import {provider}`,
          description: `Accessible label for an external agent provider toggle`,
        },
        { provider: l },
      )),
      (t[7] = a),
      (t[8] = l),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== i || t[11] !== r || t[12] !== f
    ? ((p = (0, X.jsx)(M, { checked: r, ariaLabel: f, onChange: i })),
      (t[10] = i),
      (t[11] = r),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== u || t[15] !== d || t[16] !== p
      ? ((m = (0, X.jsxs)(`div`, {
          role: `listitem`,
          className: `flex min-h-[64px] items-center gap-3 border-b border-token-border px-3 py-3 last:border-b-0`,
          children: [u, d, p],
        })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var Et,
  Dt,
  X,
  Ot,
  kt,
  At = e(() => {
    ((Et = D()),
      (Dt = t(K(), 1)),
      _(),
      de(),
      te(),
      o(),
      N(),
      rt(),
      at(),
      Ct(),
      (X = U()),
      (Ot = [`claude-code`, `claude-cowork`]),
      (kt = {
        "claude-code": {
          Icon: nt,
          label: c({
            id: `electron.onboarding.welcomeV2.externalAgentImport.providers.claudeCode`,
            defaultMessage: `Claude Code`,
            description: `Claude Code provider name in onboarding import`,
          }),
        },
        "claude-cowork": {
          Icon: it,
          label: c({
            id: `electron.onboarding.welcomeV2.externalAgentImport.providers.claudeCowork`,
            defaultMessage: `Claude Cowork`,
            description: `Claude Cowork provider name in onboarding import`,
          }),
        },
      }));
  });
function jt(e) {
  let t = (0, Ft.c)(6),
    { children: n, ariaLabel: r, className: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = G(
        `flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-token-border bg-token-surface-primary px-5 py-4`,
        i,
      )),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((o = (0, Z.jsx)(`div`, { className: a, role: `list`, "aria-label": r, children: n })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Mt(e) {
  let t = (0, Ft.c)(45),
    {
      checkboxId: n,
      checked: r,
      disabled: i,
      onCheckedChange: a,
      control: o,
      label: s,
      description: c,
      leadingContent: l,
      trailingContent: u,
      trailingControl: d,
      controlPlacement: f,
      className: p,
      checkboxClassName: m,
      labelClassName: h,
      descriptionClassName: g,
      trailingClassName: _,
    } = e,
    v = i === void 0 ? !1 : i,
    y = f === void 0 ? `left` : f,
    b = m === void 0 ? It : m,
    x = o == null && n != null && r != null && a != null,
    S;
  t[0] !== b || t[1] !== n || t[2] !== r || t[3] !== o || t[4] !== v || t[5] !== a || t[6] !== x
    ? ((S = x
        ? (0, Z.jsx)(Ae, {
            id: n,
            className: b,
            checked: r,
            disabled: v,
            onCheckedChange: (e) => {
              a(e);
            },
          })
        : o),
      (t[0] = b),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = v),
      (t[5] = a),
      (t[6] = x),
      (t[7] = S))
    : (S = t[7]);
  let C = S,
    w;
  t[8] === p
    ? (w = t[9])
    : ((w = G(`relative flex items-start gap-2 last:border-b-0`, p)), (t[8] = p), (t[9] = w));
  let T;
  t[10] !== C || t[11] !== y
    ? ((T = y === `left` ? (0, Z.jsx)(`div`, { children: C }) : null),
      (t[10] = C),
      (t[11] = y),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] === l
    ? (E = t[14])
    : ((E = l == null ? null : (0, Z.jsx)(`div`, { children: l })), (t[13] = l), (t[14] = E));
  let D = x ? n : void 0,
    O;
  t[15] === h
    ? (O = t[16])
    : ((O = G(`truncate text-base leading-5 text-token-foreground`, h)), (t[15] = h), (t[16] = O));
  let k;
  t[17] !== s || t[18] !== O
    ? ((k = (0, Z.jsx)(`div`, { className: O, children: s })),
      (t[17] = s),
      (t[18] = O),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== c || t[21] !== g
    ? ((A =
        c == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: G(`truncate text-xs leading-4 text-token-text-secondary`, g),
              children: c,
            })),
      (t[20] = c),
      (t[21] = g),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] !== k || t[24] !== A
    ? ((j = (0, Z.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [k, A] })),
      (t[23] = k),
      (t[24] = A),
      (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] !== _ || t[27] !== u
    ? ((M =
        u == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: G(
                `max-w-[45%] shrink truncate text-right text-sm leading-5 text-token-description-foreground`,
                _,
              ),
              children: u,
            })),
      (t[26] = _),
      (t[27] = u),
      (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] !== j || t[30] !== M || t[31] !== D
    ? ((N = (0, Z.jsxs)(`label`, {
        className: `flex min-w-0 flex-1 items-start gap-2 text-left`,
        htmlFor: D,
        children: [j, M],
      })),
      (t[29] = j),
      (t[30] = M),
      (t[31] = D),
      (t[32] = N))
    : (N = t[32]);
  let P;
  t[33] === d
    ? (P = t[34])
    : ((P = d == null ? null : (0, Z.jsx)(`div`, { children: d })), (t[33] = d), (t[34] = P));
  let F;
  t[35] !== C || t[36] !== y
    ? ((F = y === `right` ? (0, Z.jsx)(`div`, { children: C }) : null),
      (t[35] = C),
      (t[36] = y),
      (t[37] = F))
    : (F = t[37]);
  let I;
  return (
    t[38] !== N || t[39] !== P || t[40] !== F || t[41] !== w || t[42] !== T || t[43] !== E
      ? ((I = (0, Z.jsxs)(`div`, { className: w, role: `listitem`, children: [T, E, N, P, F] })),
        (t[38] = N),
        (t[39] = P),
        (t[40] = F),
        (t[41] = w),
        (t[42] = T),
        (t[43] = E),
        (t[44] = I))
      : (I = t[44]),
    I
  );
}
function Nt(e) {
  let t = (0, Ft.c)(21),
    {
      children: n,
      icon: r,
      title: i,
      subtitle: a,
      className: o,
      textClassName: s,
      titleClassName: c,
      subtitleClassName: l,
    } = e,
    u;
  t[0] === o
    ? (u = t[1])
    : ((u = G(`flex w-full flex-col items-center gap-6`, o)), (t[0] = o), (t[1] = u));
  let d = r ?? null,
    f;
  t[2] === s
    ? (f = t[3])
    : ((f = G(`flex w-full flex-col items-center text-center`, s)), (t[2] = s), (t[3] = f));
  let p;
  t[4] === c
    ? (p = t[5])
    : ((p = G(`text-heading-lg font-semibold text-token-foreground`, c)), (t[4] = c), (t[5] = p));
  let m;
  t[6] !== p || t[7] !== i
    ? ((m = (0, Z.jsx)(`span`, { className: p, children: i })), (t[6] = p), (t[7] = i), (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== a || t[10] !== l
    ? ((h =
        a == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: G(`text-lg leading-6 text-token-description-foreground`, l),
              children: a,
            })),
      (t[9] = a),
      (t[10] = l),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== f || t[13] !== m || t[14] !== h
    ? ((g = (0, Z.jsxs)(`div`, { className: f, children: [m, h] })),
      (t[12] = f),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== n || t[17] !== u || t[18] !== d || t[19] !== g
      ? ((_ = (0, Z.jsxs)(`div`, { className: u, children: [d, g, n] })),
        (t[16] = n),
        (t[17] = u),
        (t[18] = d),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function Pt(e) {
  let t = (0, Ft.c)(16),
    { children: n, fullBleed: r, hideHeader: i, showBrandIcon: a } = e,
    o = r === void 0 ? !1 : r,
    s = i === void 0 ? !1 : i,
    c = a === void 0 ? !1 : a,
    { platform: l } = ve(),
    u = !s && l !== `windows`,
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(`div`, {
        className: `absolute inset-0 bg-token-bg-primary electron:bg-transparent`,
      })),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] !== u || t[2] !== c
    ? ((f =
        u && !c
          ? (0, Z.jsx)(`div`, {
              className: `draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none`,
            })
          : null),
      (t[1] = u),
      (t[2] = c),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === c
    ? (p = t[5])
    : ((p = c
        ? (0, Z.jsx)(`div`, {
            className: `draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none`,
            children: (0, Z.jsx)(oe, {
              "aria-hidden": `true`,
              className: `pointer-events-none size-6 text-token-foreground`,
            }),
          })
        : null),
      (t[4] = c),
      (t[5] = p));
  let m;
  t[6] !== o || t[7] !== u
    ? ((m = o
        ? `fixed inset-0`
        : G(
            `fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8`,
            u ? `top-toolbar-sm pt-2` : `top-0 pt-8`,
          )),
      (t[6] = o),
      (t[7] = u),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== n || t[10] !== m
    ? ((h = (0, Z.jsx)(`div`, { className: m, children: n })), (t[9] = n), (t[10] = m), (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== f || t[13] !== p || t[14] !== h
      ? ((g = (0, Z.jsxs)(`div`, {
          className: `fixed inset-0 overflow-hidden select-none`,
          children: [d, (0, Z.jsxs)(w, { browser: !0, electron: !0, children: [f, p, h] })],
        })),
        (t[12] = f),
        (t[13] = p),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
var Ft,
  Z,
  It,
  Lt = e(() => {
    ((Ft = D()),
      A(),
      ke(),
      r(),
      ee(),
      s(),
      (Z = U()),
      (It = `h-[18px] w-[18px] rounded-[3px] border-[1px]`));
  });
function Rt(e) {
  let t = (0, Vt.c)(10),
    { open: n, items: r, selectedItemIds: i, onOpenChange: a, onConfirm: o } = e,
    s;
  t[0] !== r || t[1] !== o || t[2] !== a || t[3] !== n || t[4] !== i
    ? ((s = n
        ? (0, Q.jsx)(zt, {
            items: r,
            selectedItemIds: i,
            onConfirm: (e) => {
              (o(e), a(!1));
            },
          })
        : null),
      (t[0] = r),
      (t[1] = o),
      (t[2] = a),
      (t[3] = n),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== a || t[7] !== n || t[8] !== s
      ? ((c = (0, Q.jsx)(pe, {
          open: n,
          onOpenChange: a,
          size: `compact`,
          contentClassName: `w-[400px] rounded-[20px]`,
          children: s,
        })),
        (t[6] = a),
        (t[7] = n),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function zt(e) {
  let t = (0, Vt.c)(23),
    { items: n, selectedItemIds: r, onConfirm: i } = e,
    a = W(),
    o;
  t[0] === r ? (o = t[1]) : ((o = () => new Set(r)), (t[0] = r), (t[1] = o));
  let [s, c] = (0, Ht.useState)(o),
    l = s.size,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(re, {
        className: `pr-10 text-[18px] leading-8 font-normal text-token-foreground`,
        children: (0, Q.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.customize.title`,
          defaultMessage: `Choose what to import`,
          description: `Title for the external agent onboarding customize dialog`,
        }),
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(ce, {
        className: `sr-only`,
        children: (0, Q.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.customize.description`,
          defaultMessage: `Select which detected items to import`,
          description: `Accessible description for the external agent onboarding customize dialog`,
        }),
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  if (t[4] !== s || t[5] !== a || t[6] !== n) {
    let e;
    (t[8] !== s || t[9] !== a
      ? ((e = (e) => {
          let t = `external-agent-import-customize-${e.id}`,
            n = s.has(e.id);
          return (0, Q.jsxs)(
            `div`,
            {
              className: `relative flex h-12 items-center`,
              children: [
                (0, Q.jsxs)(`label`, {
                  className: `flex min-w-0 flex-1 cursor-interaction items-center gap-3`,
                  htmlFor: t,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `flex size-10 shrink-0 items-center justify-center rounded-xl bg-token-foreground/5 text-token-text-secondary`,
                      children: (0, Q.jsx)(Bt, { icon: e.icon }),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `truncate text-[14px] leading-[17px] font-normal text-token-foreground`,
                          children: e.title,
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `mt-1 truncate text-[12px] leading-[14px] text-token-description-foreground`,
                          children: e.description,
                        }),
                      ],
                    }),
                  ],
                }),
                e.tooltip == null
                  ? null
                  : (0, Q.jsx)(T, {
                      tooltipContent: e.tooltip.text,
                      tooltipClassName: `!border-transparent !bg-black !text-white shadow-lg`,
                      side: `top`,
                      sideOffset: 8,
                      delayDuration: 0,
                      children: (0, Q.jsx)(`button`, {
                        type: `button`,
                        "aria-label": a.formatMessage(
                          {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.customize.itemInfo`,
                            defaultMessage: `What will be imported for {item}`,
                            description: `Accessible label for an import customize item info tooltip`,
                          },
                          { item: e.title },
                        ),
                        className: `ml-3 flex size-5 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
                        children: (0, Q.jsx)(Pe, { className: `size-4`, "aria-hidden": `true` }),
                      }),
                    }),
                (0, Q.jsx)(`div`, {
                  className: `relative ml-3 flex size-4 shrink-0 items-center justify-center`,
                  children: (0, Q.jsx)(Ae, {
                    id: t,
                    "aria-label": e.title,
                    checked: n,
                    className: `flex h-4 w-4 items-center justify-center rounded-[3px] border-[1px] !border-token-border-heavy focus-visible:!border-token-border-heavy data-[state=checked]:!border-token-charts-blue data-[state=checked]:!bg-token-charts-blue data-[state=checked]:!text-white`,
                    onCheckedChange: (t) => {
                      c((n) => {
                        let r = new Set(n);
                        return (t ? r.add(e.id) : r.delete(e.id), r);
                      });
                    },
                  }),
                }),
              ],
            },
            e.id,
          );
        }),
        (t[8] = s),
        (t[9] = a),
        (t[10] = e))
      : (e = t[10]),
      (f = n.map(e)),
      (t[4] = s),
      (t[5] = a),
      (t[6] = n),
      (t[7] = f));
  } else f = t[7];
  let p;
  t[11] === f
    ? (p = t[12])
    : ((p = (0, Q.jsx)(`div`, { className: `flex flex-col gap-2`, children: f })),
      (t[11] = f),
      (t[12] = p));
  let m = l === 0,
    h;
  t[13] !== s || t[14] !== i
    ? ((h = () => {
        i(s);
      }),
      (t[13] = s),
      (t[14] = i),
      (t[15] = h))
    : (h = t[15]);
  let _;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(g, {
        id: `electron.onboarding.welcomeV2.externalAgentImport.customize.confirm`,
        defaultMessage: `Confirm`,
        description: `Confirm button label in the external agent onboarding customize dialog`,
      })),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== m || t[18] !== h
    ? ((v = (0, Q.jsx)(`div`, {
        className: `flex h-7 items-center justify-end`,
        children: (0, Q.jsx)(V, {
          color: `primary`,
          disabled: m,
          className: `h-7 rounded-[10px] px-2 text-[13px] leading-6 font-medium`,
          onClick: h,
          children: _,
        }),
      })),
      (t[17] = m),
      (t[18] = h),
      (t[19] = v))
    : (v = t[19]);
  let y;
  return (
    t[20] !== p || t[21] !== v
      ? ((y = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-4 p-4`, children: [u, d, p, v] })),
        (t[20] = p),
        (t[21] = v),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
function Bt(e) {
  let t = (0, Vt.c)(9),
    { icon: n } = e;
  switch (n) {
    case `instructions`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Le, { className: `icon-base` })), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `settings`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(ze, { className: `icon-base` })), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `skills`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Ve, { className: `icon-base` })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `plugins`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(je, { className: `icon-base` })), (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `projects`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Me, { className: `icon-base` })), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `chats`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Je, { className: `icon-base` })), (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `hooks`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Oe, { className: `icon-base` })), (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `commands`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Fe, { className: `icon-base` })), (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `agents`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Ge, { className: `icon-base` })), (t[8] = e))
          : (e = t[8]),
        e
      );
    }
  }
}
var Vt,
  Ht,
  Q,
  Ut = e(() => {
    ((Vt = D()),
      (Ht = t(K(), 1)),
      _(),
      de(),
      ke(),
      te(),
      z(),
      Ke(),
      De(),
      qe(),
      Re(),
      we(),
      Te(),
      Ne(),
      Ie(),
      Be(),
      He(),
      (Q = U()));
  });
async function Wt({
  hostId: e,
  invalidateWorkspaceRootQueries: t,
  onImportedProjectRootsReady: n,
  projectRoots: r,
  refreshRecentConversations: i,
}) {
  let a = await Gt({
    hostId: e,
    invalidateWorkspaceRootQueries: t,
    onImportedProjectRootsReady: n,
    projectRoots: r,
  });
  return (i != null && (await Yt(i)), { importedProjectRoots: a });
}
async function Gt({
  hostId: e,
  invalidateWorkspaceRootQueries: t,
  onImportedProjectRootsReady: r,
  projectRoots: i,
}) {
  try {
    let n = await Kt({ hostId: e, projectRoots: i });
    return n.length === 0 ? [] : (r?.(n), await qt(n), await t?.(), n);
  } catch (t) {
    return (
      n.warning(`Failed to add imported project roots after import`, {
        safe: { hostId: e },
        sensitive: { error: t },
      }),
      []
    );
  }
}
async function Kt({ hostId: e, projectRoots: t }) {
  if (t.length === 0) return [];
  let n = await x(`paths-exist`, { params: { hostId: e, paths: t } }),
    r = new Set(n.existingPaths);
  return t.filter((e) => r.has(e));
}
async function qt(e) {
  let t = (
    await Promise.allSettled(
      [...e]
        .reverse()
        .map(
          async (e) => (
            await x(`add-workspace-root-option`, { params: { root: e, setActive: !1 } }),
            e
          ),
        ),
    )
  ).filter((e) => e.status === `rejected`);
  t.length > 0 &&
    n.warning(`Failed to add some imported project roots after import`, {
      safe: { failedRootCount: t.length, totalRootCount: e.length },
      sensitive: { errors: t.map((e) => e.reason) },
    });
}
function Jt(e = b) {
  return P(`refresh-recent-conversations-for-host`, { hostId: e });
}
async function Yt(e) {
  try {
    await e();
  } catch (e) {
    n.warning(`Failed to refresh recent conversations after import`, {
      safe: {},
      sensitive: { error: e },
    });
  }
}
var Xt = e(() => {
  (F(), ae(), S(), E());
});
function Zt({ homeItems: e, projectItems: t }) {
  let n = e.filter((e) => e.cwd == null || e.cwd === ``),
    r = e.filter((e) => e.cwd != null && e.cwd !== ``),
    i = Xe(Qe(n)),
    a = Xe(Qe([...r, ...t])),
    o = n.filter((e) => e.itemType === `SESSIONS`);
  return i.length === 0 && a.length === 0 && o.length === 0
    ? null
    : { projectItems: a, sessionItems: o, toolsAndSetupItems: i };
}
function Qt(e) {
  let t = C(e.sessionItems),
    n = C(e.projectItems),
    r = [...new Set([...t, ...n])].sort((e, t) => e.localeCompare(t));
  return [
    ...e.toolsAndSetupItems.map((e, t) => ({
      key: tn(e, t),
      kind: `migrationItem`,
      item: e,
      items: [e],
    })),
    ...(e.projectItems.length > 0 || r.length > 0
      ? [{ key: `projects`, kind: `projects`, count: r.length, items: e.projectItems }]
      : []),
    ...(e.sessionItems.length > 0
      ? [{ key: `chats`, kind: `chats`, count: nn(e.sessionItems), items: e.sessionItems }]
      : []),
  ];
}
function $t({ model: e, selection: t }) {
  let n = e.projectItems.some((e, n) => Object.prototype.hasOwnProperty.call(t, en(e, n))),
    r = Qt(e).filter((e) => t[e.key] ?? !1);
  return [
    ...r
      .filter((e) => e.kind !== `chats`)
      .flatMap((e) =>
        e.kind !== `projects` || !n ? e.items : e.items.filter((e, n) => t[en(e, n)] ?? !1),
      ),
    ...r.filter((e) => e.kind === `chats`).flatMap((e) => e.items),
  ];
}
function en(e, t) {
  return `projects:${e.itemType}:${e.cwd ?? `project`}:${t}`;
}
function tn(e, t) {
  return `${e.itemType}:${e.cwd ?? `home`}:${t}`;
}
function nn(e) {
  return e.reduce((e, t) => e + (t.details?.sessions.length ?? 0), 0);
}
var rn = e(() => {
  (H(), et());
});
function an({ hostId: e, workspaceRoots: t }) {
  return [`external-agent-config`, `import-model`, `detected`, e, t];
}
async function on({ hostId: e, includeHome: t, workspaceRoots: n }) {
  return x(`external-agent-import-detect`, {
    params: {
      hostId: e,
      includeHome: t,
      providers: cn,
      workspaceRoots: n == null || n.length === 0 ? void 0 : n,
    },
  });
}
async function sn({ hostId: e, items: t }) {
  return t.length === 0
    ? { projectRoots: [] }
    : x(`external-agent-import-import`, { params: { hostId: e, items: t } });
}
var cn,
  ln = e(() => {
    (E(), (cn = [`claude-code`, `claude-cowork`]));
  });
async function un(e) {
  await Promise.all([
    e.invalidateQueries({ queryKey: ye }),
    e.invalidateQueries({ queryKey: m }),
    e.invalidateQueries({ queryKey: ue }),
    e.invalidateQueries({ queryKey: ie }),
    e.invalidateQueries({ queryKey: ge }),
    e.invalidateQueries({ queryKey: h(`local-custom-agents`) }),
    e.invalidateQueries({ queryKey: h(`external-agent-import-status`) }),
    e.invalidateQueries({ queryKey: h(`external-agent-imported-connectors`) }),
  ]);
}
var dn = e(() => {
  (xe(), fe(), f(), E());
});
function fn({ items: e, surface: t }) {
  n.info(`external_agent_import_user_flow_started`, { safe: { surface: t, ...hn(e) } });
}
function pn({
  durationMs: e,
  error: t,
  failedStage: r,
  items: i,
  projectRootsReturnedCount: a,
  status: o,
  surface: s,
}) {
  let c = {
    status: o,
    surface: s,
    durationMs: e,
    projectRootsReturnedCount: a,
    failedStage: r,
    failureKind: r == null ? void 0 : mn(r),
    ...hn(i),
  };
  if (o === `success`) {
    n.info(`external_agent_import_user_flow_finished`, { safe: c });
    return;
  }
  n.warning(`external_agent_import_user_flow_finished`, { safe: c, sensitive: { error: t } });
}
function mn(e) {
  switch (e) {
    case `import`:
      return `import_failed`;
    case `complete_import`:
      return `post_import_failed`;
    case `refetch_detected_items`:
      return `detect_failed`;
    case `invalidate_queries`:
      return `query_invalidation_failed`;
  }
}
function hn(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = 0,
    a = 0,
    o = new Set();
  for (let s of e)
    (o.add(s.providerId),
      s.providerId === `claude-code` && (t += 1),
      s.providerId === `claude-cowork` && (n += 1),
      s.cwd == null || s.cwd === `` ? (r += 1) : (i += 1),
      s.itemType === `SESSIONS` && (a += 1));
  return {
    claudeCodeItemCount: t,
    claudeCoworkItemCount: n,
    homeItemCount: r,
    itemCount: e.length,
    projectItemCount: i,
    providerIds: [...o].sort().join(`,`),
    sessionItemCount: a,
  };
}
var gn = e(() => {
  S();
});
function _n(e) {
  let t = (0, bn.c)(40),
    { enabled: n, hostId: r, workspaceRoots: i } = e,
    a = r === void 0 ? b : r,
    o;
  t[0] !== a || t[1] !== i
    ? ((o = an({ hostId: a, workspaceRoots: i })), (t[0] = a), (t[1] = i), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== a || t[4] !== i
    ? ((s = () => on({ hostId: a, includeHome: !0, workspaceRoots: i })),
      (t[3] = a),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] !== n || t[7] !== o || t[8] !== s
    ? ((c = { queryKey: o, staleTime: 0, enabled: n, queryFn: s }),
      (t[6] = n),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c))
    : (c = t[9]);
  let d = u(c),
    f = d.data?.items ?? xn,
    p = d.data?.unsupportedProjects ?? Sn,
    m;
  t[10] === f ? (m = t[11]) : ((m = f.filter(yn)), (t[10] = f), (t[11] = m));
  let h = m,
    g;
  t[12] === f ? (g = t[13]) : ((g = f.filter(vn)), (t[12] = f), (t[13] = g));
  let _ = g,
    v;
  t[14] !== h || t[15] !== _
    ? ((v = Zt({ homeItems: h, projectItems: _ })), (t[14] = h), (t[15] = _), (t[16] = v))
    : (v = t[16]);
  let y = v,
    x;
  t[17] === y ? (x = t[18]) : ((x = y == null ? [] : Qt(y)), (t[17] = y), (t[18] = x));
  let S = x,
    C = n && d.isLoading,
    w;
  t[19] === y
    ? (w = t[20])
    : ((w = (e) => (y == null ? [] : $t({ model: y, selection: e }))), (t[19] = y), (t[20] = w));
  let T = w,
    E;
  t[21] === a
    ? (E = t[22])
    : ((E = { mutationFn: (e) => sn({ hostId: a, items: e }) }), (t[21] = a), (t[22] = E));
  let D = l(E),
    O = y != null || p.length > 0,
    k = y != null,
    A;
  t[23] !== T || t[24] !== D
    ? ((A = (e) => D.mutateAsync(T(e))), (t[23] = T), (t[24] = D), (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] === d
    ? (j = t[27])
    : ((j = async () => (await d.refetch()).data?.items ?? xn), (t[26] = d), (t[27] = j));
  let M;
  return (
    t[28] !== S ||
    t[29] !== f ||
    t[30] !== T ||
    t[31] !== D.isPending ||
    t[32] !== D.mutateAsync ||
    t[33] !== C ||
    t[34] !== O ||
    t[35] !== k ||
    t[36] !== A ||
    t[37] !== j ||
    t[38] !== p
      ? ((M = {
          choices: S,
          detectedItems: f,
          unsupportedProjects: p,
          getSelectedItems: T,
          hasDetectedItems: O,
          hasImportableItems: k,
          importSelected: A,
          importItems: D.mutateAsync,
          isDetecting: C,
          isImporting: D.isPending,
          refetchDetectedItems: j,
        }),
        (t[28] = S),
        (t[29] = f),
        (t[30] = T),
        (t[31] = D.isPending),
        (t[32] = D.mutateAsync),
        (t[33] = C),
        (t[34] = O),
        (t[35] = k),
        (t[36] = A),
        (t[37] = j),
        (t[38] = p),
        (t[39] = M))
      : (M = t[39]),
    M
  );
}
function vn(e) {
  return e.cwd != null && e.cwd !== ``;
}
function yn(e) {
  return e.cwd == null || e.cwd === ``;
}
var bn,
  xn,
  Sn,
  Cn = e(() => {
    ((bn = D()), Ce(), ae(), rn(), ln(), (xn = []), (Sn = []));
  });
function wn(e) {
  let t = (0, ir.c)(30),
    { enabled: n } = e,
    r = k(v),
    i = W(),
    o = a(),
    s;
  t[0] === n ? (s = t[1]) : ((s = { enabled: n }), (t[0] = n), (t[1] = s));
  let {
      detectedItems: c,
      getSelectedItems: l,
      hasImportableItems: u,
      importItems: d,
      importSelected: f,
      isDetecting: p,
      isImporting: g,
    } = _n(s),
    _;
  t[2] === c ? (_ = t[3]) : ((_ = Dn(c)), (t[2] = c), (t[3] = _));
  let y = _,
    x;
  bb0: {
    if (!n) {
      x = null;
      break bb0;
    }
    let e;
    (t[4] !== c || t[5] !== i || t[6] !== y
      ? ((e = On({ detectedItems: c, intl: i, providerIds: y })),
        (t[4] = c),
        (t[5] = i),
        (t[6] = y),
        (t[7] = e))
      : (e = t[7]),
      (x = e));
  }
  let S = x,
    C = n && p,
    w = n && g,
    T = n && S != null,
    E;
  t[8] !== c || t[9] !== i
    ? ((E = (e) => On({ detectedItems: c, intl: i, providerIds: e })),
      (t[8] = c),
      (t[9] = i),
      (t[10] = E))
    : (E = t[10]);
  let D;
  t[11] !== c ||
  t[12] !== n ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== d ||
  t[16] !== f ||
  t[17] !== i ||
  t[18] !== o ||
  t[19] !== r ||
  t[20] !== S
    ? ((D = async (e, t) => {
        if (!n || (t == null && !u)) return;
        let a = t == null ? S : On({ detectedItems: c, intl: i, providerIds: t }),
          s = t == null ? l(e) : kn({ detectedItems: c, providerIds: t, selection: e }),
          p = Date.now(),
          g = `import`,
          _ = 0;
        fn({ items: s, surface: `first_time_onboarding` });
        let v = a?.chatChoiceKey != null && e[a.chatChoiceKey];
        try {
          g = `import`;
          let { projectRoots: n } = t == null ? await f(e) : await d(s);
          ((_ = n.length),
            (g = `invalidate_queries`),
            await un(o),
            (g = `complete_import`),
            await Wt({
              hostId: b,
              onImportedProjectRootsReady: (e) => {
                L(r, { importedProjectRoots: e });
              },
              projectRoots: n,
              invalidateWorkspaceRootQueries: async () => {
                await Promise.all([
                  o.invalidateQueries({ queryKey: h(`workspace-root-options`) }),
                  o.invalidateQueries({ queryKey: h(`active-workspace-roots`) }),
                ]);
              },
              refreshRecentConversations: v ? Tn : void 0,
            }),
            (g = `invalidate_queries`),
            await Promise.all([
              o.invalidateQueries({ queryKey: h(`codex-agents-md`) }),
              o.invalidateQueries({ queryKey: m }),
            ]),
            pn({
              durationMs: Date.now() - p,
              items: s,
              projectRootsReturnedCount: _,
              status: `success`,
              surface: `first_time_onboarding`,
            }));
        } catch (e) {
          let t = e;
          throw (
            pn({
              durationMs: Date.now() - p,
              error: t,
              failedStage: g,
              items: s,
              projectRootsReturnedCount: _,
              status: `failure`,
              surface: `first_time_onboarding`,
            }),
            t
          );
        }
      }),
      (t[11] = c),
      (t[12] = n),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d),
      (t[16] = f),
      (t[17] = i),
      (t[18] = o),
      (t[19] = r),
      (t[20] = S),
      (t[21] = D))
    : (D = t[21]);
  let O;
  return (
    t[22] !== y ||
    t[23] !== S ||
    t[24] !== C ||
    t[25] !== w ||
    t[26] !== T ||
    t[27] !== E ||
    t[28] !== D
      ? ((O = {
          isLoading: C,
          isImporting: w,
          providerIds: y,
          shouldShowImportStep: T,
          summary: S,
          getSummaryForProviders: E,
          importSelection: D,
        }),
        (t[22] = y),
        (t[23] = S),
        (t[24] = C),
        (t[25] = w),
        (t[26] = T),
        (t[27] = E),
        (t[28] = D),
        (t[29] = O))
      : (O = t[29]),
    O
  );
}
function Tn() {
  return P(`refresh-recent-conversations-for-host`, { hostId: b, sortKey: i });
}
async function En({ queryClient: e }) {
  try {
    return (
      Dn(
        (
          await e.fetchQuery({
            queryKey: an({ hostId: b }),
            queryFn: () => on({ hostId: b, includeHome: !0 }),
            staleTime: 0,
          })
        ).items,
      ).length > 0
    );
  } catch {
    return !1;
  }
}
function Dn(e) {
  return ar.filter((t) => An(e, [t]) != null);
}
function On({ detectedItems: e, intl: t, providerIds: n }) {
  let r = An(e, n),
    i = r == null ? [] : Qt(r);
  return i.length === 0 ? null : jn(t, i);
}
function kn({ detectedItems: e, providerIds: t, selection: n }) {
  let r = An(e, t);
  return r == null ? [] : $t({ model: r, selection: n });
}
function An(e, t) {
  let n = e.filter((e) => t.includes(e.providerId));
  return Zt({
    homeItems: n.filter((e) => e.cwd == null || e.cwd === ``),
    projectItems: n.filter((e) => e.cwd != null && e.cwd !== ``),
  });
}
function jn(e, t) {
  let n = t.filter((e) => e.kind === `migrationItem`),
    r = t.find((e) => e.kind === `projects`),
    i = t.find((e) => e.kind === `chats`),
    a = Wn([...(r?.items ?? []), ...(i?.items ?? [])]),
    o = Pn(i, r, n),
    s = i == null ? void 0 : Vn(e, i),
    c = n.map((t) => Gn(e, t, `toolsAndSetup`));
  return (
    r != null &&
      r.count > 0 &&
      c.push({
        id: r.key,
        title: e.formatMessage(
          {
            id: `electron.onboarding.welcomeV2.externalAgentImport.customize.projects`,
            defaultMessage: `Projects ({count})`,
            description: `Customize dialog item title for external agent project imports`,
          },
          { count: r.count },
        ),
        description: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.customize.projectsDescription`,
          defaultMessage: `Work inside your existing projects`,
          description: `Customize dialog item description for external agent project imports`,
        }),
        group: `projects`,
        icon: `projects`,
        ...(a.length === 0 ? {} : { tooltip: { text: Qn(e, a) } }),
      }),
    i != null &&
      i.count > 0 &&
      c.push({
        id: i.key,
        title: e.formatMessage(
          {
            id: `electron.onboarding.welcomeV2.externalAgentImport.customize.chats`,
            defaultMessage: `Chat sessions ({count})`,
            description: `Customize dialog item title for external agent chat session imports`,
          },
          { count: i.count },
        ),
        description: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.customize.chatsDescription`,
          defaultMessage: `Last 30 days of chats`,
          description: `Customize dialog item description for external agent chat session imports`,
        }),
        group: `chats`,
        icon: `chats`,
        tooltip: s,
      }),
    {
      chatChoiceKey: i?.key ?? null,
      ...(a.length === 0 ? {} : { projectTooltip: { text: Qn(e, a) } }),
      projectChoiceKey: r?.key ?? null,
      providerBreakdowns: o,
      recentChatTooltip: s,
      toolsAndSetupCount: n.length,
      ...(n.length === 0 ? {} : { toolsAndSetupTooltip: zn(e, n) }),
      projectCount: r?.count ?? 0,
      recentChatCount: i?.count ?? 0,
      customizeItems: c,
    }
  );
}
function Mn(e, t, n = Rn(e)) {
  let r = {
      agentsSelectedCount: 0,
      commandsSelectedCount: 0,
      hooksSelectedCount: 0,
      instructionsSelectedCount: 0,
      mcpServersSelectedCount: 0,
      pluginsSelectedCount: 0,
      settingsSelectedCount: 0,
      skillsSelectedCount: 0,
    },
    i = {
      AGENTS_MD: `instructionsSelectedCount`,
      COMMANDS: `commandsSelectedCount`,
      CONFIG: `settingsSelectedCount`,
      HOOKS: `hooksSelectedCount`,
      MCP_SERVER_CONFIG: `mcpServersSelectedCount`,
      PLUGINS: `pluginsSelectedCount`,
      SKILLS: `skillsSelectedCount`,
      SUBAGENTS: `agentsSelectedCount`,
    },
    a = 0;
  e.customizeItems.forEach((e) => {
    let n = i[e.id.split(`:`)[0]];
    n != null && ((a += 1), (t[e.id] ?? !1) && (r[n] += 1));
  });
  let o = Object.values(r).reduce((e, t) => e + t, 0),
    s = e.chatChoiceKey == null ? !1 : (t[e.chatChoiceKey] ?? !1),
    c = e.projectChoiceKey == null ? !1 : (t[e.projectChoiceKey] ?? !1),
    l = Fn(e, t, c, s),
    u = In(`claude-code`, e, t, c, s),
    d = In(`claude-cowork`, e, t, c, s);
  return {
    ...r,
    chatsCount: e.recentChatCount,
    chatsSelected: s,
    claudeCodeChatsCount: u.chatsCount,
    claudeCodeChatsSelected: u.chatsSelected,
    claudeCodeProjectsCount: u.projectsCount,
    claudeCodeProjectsSelected: u.projectsSelected,
    claudeCodeToolsAndSetupSelectedCount: u.toolsAndSetupSelectedCount,
    claudeCodeToolsAndSetupTotalCount: u.toolsAndSetupTotalCount,
    claudeCoworkChatsCount: d.chatsCount,
    claudeCoworkChatsSelected: d.chatsSelected,
    claudeCoworkProjectsCount: d.projectsCount,
    claudeCoworkProjectsSelected: d.projectsSelected,
    claudeCoworkToolsAndSetupSelectedCount: d.toolsAndSetupSelectedCount,
    claudeCoworkToolsAndSetupTotalCount: d.toolsAndSetupTotalCount,
    detectedProviderCount: n.length,
    detectedProviderIds: n.join(`,`),
    projectsCount: e.projectCount,
    projectsSelected: c,
    selectedProviderCount: l.length,
    selectedProviderIds: l.join(`,`),
    selectedItemsCount: o,
    totalItemsCount: a,
  };
}
function Nn(e) {
  return {
    ...Object.fromEntries(e.customizeItems.map((e) => [e.id, !0])),
    ...(e.projectChoiceKey == null ? {} : { [e.projectChoiceKey]: !0 }),
    ...(e.chatChoiceKey == null ? {} : { [e.chatChoiceKey]: !0 }),
  };
}
function Pn(e, t, n) {
  let r = e?.items ?? [],
    i = [...(t?.items ?? []), ...r];
  return ar.flatMap((e) => {
    let t = Wn(i.filter((t) => t.providerId === e)).length,
      a = Ln(r.filter((t) => t.providerId === e)),
      o = n.filter((t) => t.item.providerId === e).length;
    return t === 0 && a === 0 && o === 0
      ? []
      : [{ providerId: e, projectCount: t, recentChatCount: a, toolsAndSetupCount: o }];
  });
}
function Fn(e, t, n, r) {
  return (e.providerBreakdowns ?? []).flatMap((i) => {
    let a = In(i.providerId, e, t, n, r);
    return a.toolsAndSetupSelectedCount === 0 && !a.projectsSelected && !a.chatsSelected
      ? []
      : [i.providerId];
  });
}
function In(e, t, n, r, i) {
  let a = t.providerBreakdowns?.find((t) => t.providerId === e),
    o = t.customizeItems.filter((t) => t.group === `toolsAndSetup` && t.providerId === e);
  return {
    chatsCount: a?.recentChatCount ?? 0,
    chatsSelected: i && (a?.recentChatCount ?? 0) > 0,
    projectsCount: a?.projectCount ?? 0,
    projectsSelected: r && (a?.projectCount ?? 0) > 0,
    toolsAndSetupSelectedCount: o.filter((e) => n[e.id] ?? !1).length,
    toolsAndSetupTotalCount: o.length,
  };
}
function Ln(e) {
  return e.reduce((e, t) => e + (t.details?.sessions.length ?? 0), 0);
}
function Rn(e) {
  return e.providerBreakdowns?.map((e) => e.providerId) ?? [];
}
function zn(e, t) {
  let n = [...t]
    .sort((e, t) => Bn(e.item) - Bn(t.item))
    .flatMap((t) => {
      let n = Jn(e, t.item);
      return n == null ? [] : [n];
    });
  if (n.length !== 0)
    return {
      text: e.formatMessage(
        {
          id: `electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.tooltip`,
          defaultMessage: `{items} will be imported`,
          description: `Tooltip describing tools and setup import contents`,
        },
        { items: e.formatList(n, { type: `conjunction` }) },
      ),
    };
}
function Bn(e) {
  switch (e.itemType) {
    case `AGENTS_MD`:
      return 0;
    case `CONFIG`:
      return 1;
    case `SKILLS`:
      return 2;
    case `COMMANDS`:
      return 3;
    case `SUBAGENTS`:
      return 4;
    case `HOOKS`:
      return 5;
    case `PLUGINS`:
      return 6;
    case `MCP_SERVER_CONFIG`:
      return 7;
    case `SESSIONS`:
      return 8;
  }
}
function Vn(e, t) {
  let n = Hn(e, t.items);
  return {
    text: e.formatMessage(
      {
        id: `electron.onboarding.welcomeV2.externalAgentImport.recentChats.tooltip`,
        defaultMessage: `{count, plural, one {# chat from {providers} from the last 30 days will be imported} other {# chats from {providers} from the last 30 days will be imported}}`,
        description: `Tooltip describing recent chat import contents`,
      },
      { count: t.count, providers: e.formatList(n, { type: `conjunction` }) },
    ),
  };
}
function Hn(e, t) {
  return [...new Set(t.map((e) => e.providerId))].map((t) => Un(e, t));
}
function Un(e, t) {
  switch (t) {
    case `claude-code`:
      return e.formatMessage({
        id: `electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCode`,
        defaultMessage: `Claude Code`,
        description: `Claude Code provider name in import tooltips`,
      });
    case `claude-cowork`:
      return e.formatMessage({
        id: `electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCowork`,
        defaultMessage: `Claude Cowork`,
        description: `Claude Cowork provider name in import tooltips`,
      });
  }
}
function Wn(e) {
  return C(e).map(R);
}
function Gn(e, t, n) {
  let { item: r } = t;
  return {
    id: t.key,
    title: nr(e, r),
    description: er(r.description),
    group: n,
    providerId: r.providerId,
    icon: rr(r),
    ...Kn(e, r),
  };
}
function Kn(e, t) {
  let n = qn(e, t);
  if (n != null) return { tooltip: n };
  let r = Xn(t);
  if (r.length > 0) return { tooltip: { text: Qn(e, r) } };
  let i = Jn(e, t);
  return i == null ? {} : { tooltip: { text: i } };
}
function qn(e, t) {
  switch (t.itemType) {
    case `AGENTS_MD`:
      return {
        text: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.customize.instructionsTooltip`,
          defaultMessage: `CLAUDE.md will be imported as AGENTS.md`,
          description: `Tooltip explaining how Claude instructions are imported into Codex`,
        }),
      };
    case `CONFIG`:
      return t.providerId === `claude-cowork`
        ? null
        : {
            text: e.formatMessage({
              id: `electron.onboarding.welcomeV2.externalAgentImport.customize.settingsTooltip`,
              defaultMessage: `settings.json will be imported as config.toml`,
              description: `Tooltip explaining how Claude settings are imported into Codex`,
            }),
          };
    case `COMMANDS`:
    case `HOOKS`:
    case `MCP_SERVER_CONFIG`:
    case `PLUGINS`:
    case `SESSIONS`:
    case `SKILLS`:
    case `SUBAGENTS`:
      return null;
  }
}
function Jn(e, t) {
  switch (t.itemType) {
    case `AGENTS_MD`:
      return `CLAUDE.md`;
    case `CONFIG`:
      return t.providerId === `claude-cowork` ? er(t.description) : `settings.json`;
    case `SKILLS`:
      return e.formatMessage({
        id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.skills`,
        defaultMessage: `skills`,
        description: `Lowercase skills label in import tooltip lists`,
      });
    case `PLUGINS`:
      return Yn({
        count: Zn(t).length,
        fallback: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.plugins`,
          defaultMessage: `plugins`,
          description: `Lowercase plugins label in import tooltip lists`,
        }),
        formatCount: (t) =>
          e.formatMessage(
            {
              id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.pluginCount`,
              defaultMessage: `{count, plural, one {# plugin} other {# plugins}}`,
              description: `Plugin count in import tooltip lists`,
            },
            { count: t },
          ),
      });
    case `MCP_SERVER_CONFIG`:
      return Yn({
        count: t.details?.mcpServers.length ?? 0,
        fallback: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.mcpServers`,
          defaultMessage: `MCP servers`,
          description: `MCP servers label in import tooltip lists`,
        }),
        formatCount: (t) =>
          e.formatMessage(
            {
              id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.mcpServerCount`,
              defaultMessage: `{count, plural, one {# MCP server} other {# MCP servers}}`,
              description: `MCP server count in import tooltip lists`,
            },
            { count: t },
          ),
      });
    case `SUBAGENTS`:
      return Yn({
        count: t.details?.subagents.length ?? 0,
        fallback: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.agents`,
          defaultMessage: `agents`,
          description: `Lowercase agents label in import tooltip lists`,
        }),
        formatCount: (t) =>
          e.formatMessage(
            {
              id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.agentCount`,
              defaultMessage: `{count, plural, one {# agent} other {# agents}}`,
              description: `Agent count in import tooltip lists`,
            },
            { count: t },
          ),
      });
    case `HOOKS`:
      return Yn({
        count: t.details?.hooks.length ?? 0,
        fallback: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.hooks`,
          defaultMessage: `hooks`,
          description: `Lowercase hooks label in import tooltip lists`,
        }),
        formatCount: (t) =>
          e.formatMessage(
            {
              id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.hookCount`,
              defaultMessage: `{count, plural, one {# hook} other {# hooks}}`,
              description: `Hook count in import tooltip lists`,
            },
            { count: t },
          ),
      });
    case `COMMANDS`:
      return Yn({
        count: t.details?.commands.length ?? 0,
        fallback: e.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.commands`,
          defaultMessage: `commands`,
          description: `Lowercase commands label in import tooltip lists`,
        }),
        formatCount: (t) =>
          e.formatMessage(
            {
              id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.commandCount`,
              defaultMessage: `{count, plural, one {# command} other {# commands}}`,
              description: `Command count in import tooltip lists`,
            },
            { count: t },
          ),
      });
    case `SESSIONS`:
      return null;
  }
}
function Yn({ count: e, fallback: t, formatCount: n }) {
  return e > 0 ? n(e) : t;
}
function Xn(e) {
  switch (e.itemType) {
    case `PLUGINS`:
      return Zn(e);
    case `MCP_SERVER_CONFIG`:
      return e.details?.mcpServers.map((e) => e.name) ?? [];
    case `SUBAGENTS`:
      return e.details?.subagents.map((e) => `$${e.name}`) ?? [];
    case `HOOKS`:
      return e.details?.hooks.map((e) => e.name) ?? [];
    case `COMMANDS`:
      return e.details?.commands.map((e) => e.name) ?? [];
    case `AGENTS_MD`:
    case `CONFIG`:
    case `SKILLS`:
    case `SESSIONS`:
      return [];
  }
}
function Zn(e) {
  return e.details?.plugins.flatMap((e) => e.pluginNames) ?? [];
}
function Qn(e, t) {
  let n = t.slice(0, or),
    r = t.length - n.length;
  return r <= 0
    ? $n(n)
    : e.formatMessage(
        {
          id: `electron.onboarding.welcomeV2.externalAgentImport.tooltip.itemListWithRemaining`,
          defaultMessage: `{items}, and {remainingCount, plural, one {# more} other {# more}}`,
          description: `Tooltip list when only the first detected external agent import items can be shown`,
        },
        { items: $n(n), remainingCount: r },
      );
}
function $n(e) {
  return e.join(`, `);
}
function er(e) {
  return tr(
    e
      .replace(/^Migrate [A-Za-z ]+ from (.+?) (?:to|into) (.+)$/, `$1 to $2`)
      .replace(/^Migrate (.+?) (?:to|into) (.+)$/, `$1 to $2`)
      .replace(/^Migrate [A-Za-z ]+ from (.+)$/, `$1`)
      .replace(/^Migrate /, ``)
      .replace(/\binto\b/g, `to`),
  );
}
function tr(e) {
  return be(
    e
      .replace(
        /\/(?:private\/)?var\/folders\/\S+?\/T\/codex-claude-import\/\.claude(?=\/|\s|$)/g,
        `~/.claude`,
      )
      .replace(
        /\/(?:private\/)?var\/folders\/\S+?\/T\/codex-claude-import\/\.codex(?=\/|\s|$)/g,
        `~/.codex`,
      )
      .replace(
        /\/(?:private\/)?var\/folders\/\S+?\/T\/codex-claude-import\/\.agents(?=\/|\s|$)/g,
        `~/.agents`,
      )
      .replace(/\/(?:private\/)?tmp\/codex-claude-import\/\.claude(?=\/|\s|$)/g, `~/.claude`)
      .replace(/\/(?:private\/)?tmp\/codex-claude-import\/\.codex(?=\/|\s|$)/g, `~/.codex`)
      .replace(/\/(?:private\/)?tmp\/codex-claude-import\/\.agents(?=\/|\s|$)/g, `~/.agents`)
      .replace(/\/Users\/[^/\s]+\/\S+?\/\.stage\/home\/\.claude(?=\/|\s|$)/g, `~/.claude`)
      .replace(/\/Users\/[^/\s]+\/\S+?\/\.stage\/codex-home(?=\/|\s|$)/g, `~/.codex`)
      .replace(/\/Users\/[^/\s]+\/\S+?\/\.stage\/\.agents(?=\/|\s|$)/g, `~/.agents`)
      .replace(/\/Users\/[^/\s]+\/\.claude(?=\/|\s|$)/g, `~/.claude`)
      .replace(/\/Users\/[^/\s]+\/\.codex(?=\/|\s|$)/g, `~/.codex`)
      .replace(/\/Users\/[^/\s]+\/\.agents(?=\/|\s|$)/g, `~/.agents`)
      .replace(/\/Users\/[^/\s]+(?=\/|\s|$)/g, `~`)
      .replace(/[A-Za-z]:\\Users\\[^\\]+\\\.claude(?=\\|\s|$)/g, `~/.claude`)
      .replace(/[A-Za-z]:\\Users\\[^\\]+\\\.codex(?=\\|\s|$)/g, `~/.codex`)
      .replace(/[A-Za-z]:\\Users\\[^\\]+\\\.agents(?=\\|\s|$)/g, `~/.agents`)
      .replace(/[A-Za-z]:\\Users\\[^\\]+(?=\\|\s|$)/g, `~`),
  );
}
function nr(e, t) {
  if (
    `providerId` in t &&
    t.providerId === `claude-cowork` &&
    (t.cwd == null || t.cwd === ``) &&
    t.itemType === `CONFIG`
  )
    return `Tools & Setup`;
  if (t.itemType === `PLUGINS`) {
    let n = t.details?.plugins.reduce((e, t) => e + t.pluginNames.length, 0) ?? 0;
    if (n > 0)
      return e.formatMessage(
        {
          id: `electron.onboarding.welcomeV2.externalAgentImport.customize.pluginsWithCount`,
          defaultMessage: `Plugins ({count})`,
          description: `Customize dialog item title for external agent plugin imports`,
        },
        { count: n },
      );
  }
  return Ye(e, t);
}
function rr(e) {
  switch (e.itemType) {
    case `AGENTS_MD`:
      return `instructions`;
    case `CONFIG`:
    case `MCP_SERVER_CONFIG`:
      return `settings`;
    case `SKILLS`:
      return `skills`;
    case `PLUGINS`:
      return `plugins`;
    case `SUBAGENTS`:
      return `agents`;
    case `HOOKS`:
      return `hooks`;
    case `COMMANDS`:
      return `commands`;
    case `SESSIONS`:
      return `projects`;
  }
}
var ir,
  ar,
  or,
  sr = e(() => {
    ((ir = D()),
      Ce(),
      I(),
      H(),
      _(),
      F(),
      Xt(),
      rn(),
      ln(),
      dn(),
      et(),
      gn(),
      Cn(),
      y(),
      ae(),
      _e(),
      f(),
      B(),
      me(),
      E(),
      (ar = [`claude-code`, `claude-cowork`]),
      (or = 6));
  });
function cr({
  appBrand: e,
  continueLabel: t,
  hasError: n = !1,
  eventSource: r = `first_time_onboarding`,
  isComplete: i = !1,
  isPending: a = !1,
  logShownOnMount: o = !0,
  subtitle: s,
  title: c,
  variant: l = `onboarding`,
  providerIds: u = [],
  detectedProviderIds: f = u,
  summary: m,
  onCustomize: h,
  onContinue: _,
  onEvent: v,
  onSkip: y,
}) {
  let b = W(),
    [x, S] = (0, Sr.useState)(() => Nn(m)),
    [C, w] = (0, Sr.useState)(!1),
    [T, E] = (0, Sr.useState)(() => new Set(m.customizeItems.map((e) => e.id))),
    D = l === `dialog`,
    O = a || i,
    k = a || i,
    A = _r({ summary: m, selection: x }),
    M = gr({ items: m.customizeItems, selection: x, group: `toolsAndSetup` }),
    N = gr({ items: m.customizeItems, selection: x, group: `projects` }),
    P = m.chatChoiceKey != null && (x[m.chatChoiceKey] ?? !1),
    F = fr({ isComplete: i, isSelected: M !== !1 }),
    I = fr({ isComplete: i, isSelected: N !== !1 }),
    L = fr({ isComplete: i, isSelected: P }),
    R = (e) => {
      v?.({ source: r, ...e });
    };
  (0, Sr.useEffect)(() => {
    o && R({ action: `shown`, ...Mn(m, x, f) });
  }, []);
  let z = () => {
      (h?.(), w(!0));
    },
    B = () => {
      a || !A || (i || R({ action: `continue`, ...Mn(m, x, f) }), _(x));
    },
    ee = () => {
      O || (R({ action: `skipped`, ...Mn(m, x, f) }), y());
    },
    te = a
      ? (0, $.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.importingButton`,
          defaultMessage: `Importing`,
          description: `Button label shown while external agent onboarding import is running`,
        })
      : (t ??
        (0, $.jsx)(g, {
          id: `electron.onboarding.welcomeV2.continue`,
          defaultMessage: `Continue`,
          description: `Welcome v2 continue button label`,
        })),
    ne = c ?? (0, $.jsx)(lr, {}),
    H = s === void 0 ? (0, $.jsx)(ur, {}) : s,
    ie = (e) => {
      (e.preventDefault(), !(a || !A) && B());
    },
    ae = (0, $.jsxs)($.Fragment, {
      children: [
        D
          ? (0, $.jsx)(d, {
              children: (0, $.jsx)(p, {
                title: (0, $.jsx)(re, { className: `contents`, children: ne }),
                subtitle: H == null ? null : (0, $.jsx)(ce, { children: H }),
              }),
            })
          : (0, $.jsx)(bt, { appBrand: e, sourceIconVariant: `orange`, title: ne, subtitle: H }),
        (0, $.jsxs)(`div`, {
          className: G(`flex w-full flex-col`, D ? `mt-4` : `mt-8 max-w-sm`),
          children: [
            hr(m)
              ? (0, $.jsxs)(jt, {
                  ariaLabel: b.formatMessage({
                    id: `electron.onboarding.welcomeV2.externalAgentImport.items.list`,
                    defaultMessage: `Import options`,
                    description: `Accessible label for external agent import options`,
                  }),
                  className: `h-auto gap-0 border-token-border-default !px-3 !py-0`,
                  children: [
                    m.toolsAndSetupCount > 0
                      ? (0, $.jsx)(Mt, {
                          checkboxId: `external-agent-import-tools-and-setup`,
                          checked: M,
                          control: k ? (0, $.jsx)(dr, { status: F }) : void 0,
                          disabled: O,
                          leadingContent: (0, $.jsx)(Ue, { className: `icon-base` }),
                          label: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.title`,
                            defaultMessage: `Tools & setup`,
                            description: `Tools and setup import row title`,
                          }),
                          description: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.description`,
                            defaultMessage: `Settings, instructions, plugins, skills`,
                            description: `Tools and setup import row description`,
                          }),
                          trailingControl:
                            m.toolsAndSetupTooltip == null
                              ? null
                              : (0, $.jsx)(pr, {
                                  ariaLabel: b.formatMessage({
                                    id: `electron.onboarding.welcomeV2.externalAgentImport.toolsAndSetup.info`,
                                    defaultMessage: `What will be imported for Tools & setup`,
                                    description: `Accessible label for the tools and setup import info tooltip`,
                                  }),
                                  tooltip: m.toolsAndSetupTooltip.text,
                                }),
                          className: wr,
                          checkboxClassName: Cr,
                          controlPlacement: `right`,
                          onCheckedChange: (e) => {
                            (S((t) =>
                              br({
                                current: t,
                                items: m.customizeItems,
                                group: `toolsAndSetup`,
                                checked: e,
                              }),
                            ),
                              E((t) =>
                                yr({
                                  current: t,
                                  items: m.customizeItems,
                                  group: `toolsAndSetup`,
                                  checked: e,
                                }),
                              ));
                          },
                        })
                      : null,
                    m.projectCount > 0
                      ? (0, $.jsx)(Mt, {
                          checkboxId: `external-agent-import-projects`,
                          checked: N,
                          control: k ? (0, $.jsx)(dr, { status: I }) : void 0,
                          disabled: O,
                          leadingContent: (0, $.jsx)(Me, { className: `icon-base` }),
                          label: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.projects.title`,
                            defaultMessage: `Projects ({count})`,
                            description: `Projects import row title`,
                            values: { count: m.projectCount },
                          }),
                          description: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.projects.description`,
                            defaultMessage: `Use your existing project folders`,
                            description: `Projects import row description`,
                          }),
                          trailingControl:
                            m.projectTooltip == null
                              ? null
                              : (0, $.jsx)(pr, {
                                  ariaLabel: b.formatMessage({
                                    id: `electron.onboarding.welcomeV2.externalAgentImport.projects.info`,
                                    defaultMessage: `What will be imported for Projects`,
                                    description: `Accessible label for the projects import info tooltip`,
                                  }),
                                  tooltip: m.projectTooltip.text,
                                }),
                          className: wr,
                          checkboxClassName: Cr,
                          controlPlacement: `right`,
                          onCheckedChange: (e) => {
                            (S((t) =>
                              br({
                                current: t,
                                items: m.customizeItems,
                                group: `projects`,
                                checked: e,
                              }),
                            ),
                              E((t) =>
                                yr({
                                  current: t,
                                  items: m.customizeItems,
                                  group: `projects`,
                                  checked: e,
                                }),
                              ));
                          },
                        })
                      : null,
                    m.recentChatCount > 0
                      ? (0, $.jsx)(Mt, {
                          checkboxId: `external-agent-import-recent-chats`,
                          checked: P,
                          control: k ? (0, $.jsx)(dr, { status: L }) : void 0,
                          disabled: O || m.chatChoiceKey == null,
                          leadingContent: (0, $.jsx)(Je, { className: `icon-base` }),
                          label: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.recentChats.title`,
                            defaultMessage: `Chat sessions ({count})`,
                            description: `Recent chats toggle title`,
                            values: { count: m.recentChatCount },
                          }),
                          description: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.recentChats.description`,
                            defaultMessage: `Last 30 days of chats`,
                            description: `Recent chats row description`,
                          }),
                          trailingControl:
                            m.recentChatTooltip == null
                              ? null
                              : (0, $.jsx)(pr, {
                                  ariaLabel: b.formatMessage({
                                    id: `electron.onboarding.welcomeV2.externalAgentImport.recentChats.info`,
                                    defaultMessage: `What will be imported for Chat sessions`,
                                    description: `Accessible label for the recent chats import info tooltip`,
                                  }),
                                  tooltip: m.recentChatTooltip.text,
                                }),
                          className: wr,
                          checkboxClassName: Cr,
                          controlPlacement: `right`,
                          onCheckedChange: (e) => {
                            let t = m.chatChoiceKey;
                            t != null &&
                              (S((n) => ({ ...n, [t]: e })),
                              E((n) => {
                                let r = new Set(n);
                                return (e ? r.add(t) : r.delete(t), r);
                              }));
                          },
                        })
                      : null,
                  ],
                })
              : null,
            u.length > 0
              ? (0, $.jsx)(`div`, {
                  className: `mt-2 text-center text-xs leading-4 text-token-text-secondary`,
                  children: (0, $.jsx)(g, {
                    id: `electron.onboarding.welcomeV2.externalAgentImport.items.setupPreservedNote`,
                    defaultMessage: `Your existing Claude setup will not be affected`,
                    description: `Note below external agent import items explaining the source setup is preserved`,
                  }),
                })
              : null,
          ],
        }),
        (0, $.jsx)(Rt, {
          open: C,
          items: m.customizeItems,
          selectedItemIds: T,
          onOpenChange: w,
          onConfirm: (e) => {
            let t = m.customizeItems.filter((t) => T.has(t.id) !== e.has(t.id)).length;
            E(e);
            let n = vr({ current: x, items: m.customizeItems, selectedItemIds: e });
            (S(n), R({ action: `customized`, changedItemsCount: t, ...Mn(m, n, f) }));
          },
        }),
        (0, $.jsxs)(`div`, {
          className: G(
            D
              ? `mt-4 flex w-full flex-col gap-3`
              : `mt-8 flex w-full max-w-sm flex-col items-center gap-4`,
          ),
          children: [
            n
              ? (0, $.jsx)(`div`, {
                  role: `alert`,
                  className: `text-center text-[13px] leading-5 text-token-error-foreground`,
                  children: (0, $.jsx)(g, {
                    id: `electron.onboarding.welcomeV2.externalAgentImport.error`,
                    defaultMessage: `Couldn't finish the import. Try again, or skip for now.`,
                    description: `Error message shown when external agent onboarding import fails`,
                  }),
                })
              : null,
            D
              ? (0, $.jsxs)(j, {
                  children: [
                    (0, $.jsx)(V, {
                      color: `ghost`,
                      disabled: O,
                      onClick: ee,
                      children: (0, $.jsx)(g, {
                        id: `common.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button label`,
                      }),
                    }),
                    m.customizeItems.length === 0
                      ? null
                      : (0, $.jsx)(V, {
                          type: `button`,
                          color: `secondary`,
                          disabled: O,
                          onClick: z,
                          children: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.customize`,
                            defaultMessage: `Customize`,
                            description: `Customize button label on the external agent import step`,
                          }),
                        }),
                    (0, $.jsx)(V, {
                      type: `submit`,
                      color: `primary`,
                      disabled: a || !A,
                      children: te,
                    }),
                  ],
                })
              : (0, $.jsxs)($.Fragment, {
                  children: [
                    m.customizeItems.length === 0
                      ? null
                      : (0, $.jsx)(V, {
                          className: `w-full justify-center`,
                          color: `ghost`,
                          size: `large`,
                          type: `button`,
                          disabled: O,
                          onClick: z,
                          children: (0, $.jsx)(g, {
                            id: `electron.onboarding.welcomeV2.externalAgentImport.customize`,
                            defaultMessage: `Customize`,
                            description: `Customize button label on the external agent import step`,
                          }),
                        }),
                    (0, $.jsx)(V, {
                      className: `w-full justify-center`,
                      size: `large`,
                      type: `button`,
                      disabled: a || !A,
                      onClick: B,
                      children: te,
                    }),
                    (0, $.jsx)(V, {
                      className: `w-full justify-center`,
                      color: `ghost`,
                      size: `large`,
                      type: `button`,
                      disabled: O,
                      onClick: ee,
                      children: (0, $.jsx)(g, {
                        id: `electron.onboarding.welcomeV2.skip`,
                        defaultMessage: `Skip`,
                        description: `Welcome v2 skip button label`,
                      }),
                    }),
                  ],
                }),
          ],
        }),
      ],
    });
  return D
    ? (0, $.jsx)(Se, { as: `form`, className: `gap-0`, onSubmit: ie, children: ae })
    : (0, $.jsx)(`div`, {
        className: `flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10`,
        children: ae,
      });
}
function lr() {
  let e = (0, xr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.items.title`,
          defaultMessage: `Select items to import`,
          description: `Title for the external agent item selection step in welcome onboarding`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ur() {
  let e = (0, xr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(g, {
          id: `electron.onboarding.welcomeV2.externalAgentImport.items.subtitle`,
          defaultMessage: `Import all your work or handpick what to bring over`,
          description: `Subtitle for the external agent item selection step in welcome onboarding`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function dr(e) {
  let t = (0, xr.c)(11),
    { status: n } = e,
    r = W();
  if (n === `idle`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`span`, { "aria-hidden": !0, className: `block h-5 w-5 shrink-0` })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `complete`) {
    let e;
    t[1] === r
      ? (e = t[2])
      : ((e = r.formatMessage({
          id: `electron.onboarding.welcomeV2.externalAgentImport.importedStatus`,
          defaultMessage: `Imported`,
          description: `Accessible label for an external agent import row that has finished importing`,
        })),
        (t[1] = r),
        (t[2] = e));
    let n;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(le, { className: `h-5 w-5 text-token-charts-green` })), (t[3] = n))
      : (n = t[3]);
    let i;
    return (
      t[4] === e
        ? (i = t[5])
        : ((i = (0, $.jsx)(`span`, {
            role: `img`,
            "aria-label": e,
            className: `flex h-5 w-5 shrink-0 items-center justify-center`,
            children: n,
          })),
          (t[4] = e),
          (t[5] = i)),
      i
    );
  }
  let i;
  t[6] === r
    ? (i = t[7])
    : ((i = r.formatMessage({
        id: `electron.onboarding.welcomeV2.externalAgentImport.importingStatus`,
        defaultMessage: `Importing`,
        description: `Accessible label for an external agent import row that is importing`,
      })),
      (t[6] = r),
      (t[7] = i));
  let a;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(se, { className: `h-5 w-5` })), (t[8] = a))
    : (a = t[8]);
  let o;
  return (
    t[9] === i
      ? (o = t[10])
      : ((o = (0, $.jsx)(`span`, {
          role: `img`,
          "aria-label": i,
          className: `flex h-5 w-5 shrink-0 items-center justify-center text-token-description-foreground`,
          children: a,
        })),
        (t[9] = i),
        (t[10] = o)),
    o
  );
}
function fr({ isComplete: e, isSelected: t }) {
  return t ? (e ? `complete` : `importing`) : `idle`;
}
function pr(e) {
  let t = (0, xr.c)(6),
    { ariaLabel: n, tooltip: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Pe, { className: `size-4`, "aria-hidden": `true` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n
    ? (a = t[2])
    : ((a = (0, $.jsx)(`button`, {
        type: `button`,
        "aria-label": n,
        className: `flex size-5 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
        onClick: mr,
        children: i,
      })),
      (t[1] = n),
      (t[2] = a));
  let o;
  return (
    t[3] !== a || t[4] !== r
      ? ((o = (0, $.jsx)(T, {
          tooltipContent: r,
          tooltipClassName: `!border-transparent !bg-black !text-white shadow-lg`,
          side: `top`,
          sideOffset: 8,
          delayDuration: 0,
          children: a,
        })),
        (t[3] = a),
        (t[4] = r),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function mr(e) {
  e.stopPropagation();
}
function hr(e) {
  return e.toolsAndSetupCount > 0 || e.projectCount > 0 || e.recentChatCount > 0;
}
function gr({ items: e, selection: t, group: n }) {
  let r = e.filter((e) => e.group === n),
    i = r.filter((e) => t[e.id]).length;
  return r.length === 0 || i === 0 ? !1 : i === r.length ? !0 : `indeterminate`;
}
function _r({ summary: e, selection: t }) {
  return [...e.customizeItems.map((e) => e.id), e.projectChoiceKey, e.chatChoiceKey].some(
    (e) => e != null && (t[e] ?? !1),
  );
}
function vr({ current: e, items: t, selectedItemIds: n }) {
  let r = { ...e };
  return (
    t.forEach((e) => {
      r[e.id] = n.has(e.id);
    }),
    r
  );
}
function yr({ current: e, items: t, group: n, checked: r }) {
  let i = new Set(e);
  return (
    t
      .filter((e) => e.group === n)
      .forEach((e) => {
        r ? i.add(e.id) : i.delete(e.id);
      }),
    i
  );
}
function br({ current: e, items: t, group: n, checked: r }) {
  let i = { ...e };
  return (
    t
      .filter((e) => e.group === n)
      .forEach((e) => {
        i[e.id] = r;
      }),
    i
  );
}
var xr,
  Sr,
  $,
  Cr,
  wr,
  Tr = e(() => {
    ((xr = D()),
      A(),
      (Sr = t(K(), 1)),
      _(),
      de(),
      te(),
      o(),
      ne(),
      z(),
      qe(),
      he(),
      we(),
      Ne(),
      We(),
      Lt(),
      Ut(),
      Ct(),
      sr(),
      ($ = U()),
      (Cr = `h-4 w-4 rounded-[3px] border-[1px] !border-token-border-heavy data-[state=checked]:!border-token-charts-blue data-[state=checked]:!bg-token-charts-blue data-[state=checked]:!text-white data-[state=indeterminate]:!border-token-charts-blue data-[state=indeterminate]:!bg-token-charts-blue data-[state=indeterminate]:!text-white focus-visible:!border-token-border-heavy`),
      (wr = `-mx-3 !items-center gap-3 border-b border-token-border px-3 py-3`));
  });
export {
  Pt as A,
  Ye as B,
  Wt as C,
  jt as D,
  It as E,
  yt as F,
  et as H,
  mt as I,
  ht as L,
  wt as M,
  At as N,
  Mt as O,
  gt as P,
  ft as R,
  ln as S,
  Jt as T,
  Xe as U,
  Qe as V,
  dn as _,
  kn as a,
  on as b,
  Dn as c,
  wn as d,
  Cn as f,
  fn as g,
  pn as h,
  Nn as i,
  Lt as j,
  Nt as k,
  En as l,
  gn as m,
  Tr as n,
  Mn as o,
  _n as p,
  jn as r,
  On as s,
  cr as t,
  sr as u,
  un as v,
  Xt as w,
  sn as x,
  cn as y,
  pt as z,
};
//# sourceMappingURL=app-initial~app-main~onboarding-page~appearance-settings~general-settings.js.map
