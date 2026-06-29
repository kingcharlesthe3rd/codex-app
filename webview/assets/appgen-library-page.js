import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  AI as i,
  AN as a,
  AV as o,
  Al as s,
  BP as c,
  BV as l,
  DN as u,
  El as d,
  En as f,
  FB as p,
  Ga as m,
  Gi as h,
  Hs as g,
  IB as _,
  I_ as v,
  It as y,
  Iy as b,
  JV as x,
  La as S,
  Ly as C,
  MA as w,
  MB as T,
  M_ as E,
  Mi as D,
  NA as O,
  ON as k,
  On as A,
  Ov as j,
  PB as M,
  Pi as N,
  QP as P,
  RP as F,
  Rt as ee,
  Ry as I,
  So as te,
  TM as ne,
  UA as re,
  UE as L,
  Us as ie,
  VE as ae,
  VP as R,
  WA as oe,
  Wa as se,
  Xt as ce,
  Zi as le,
  Zt as z,
  _V as ue,
  _o as de,
  aM as B,
  aP as fe,
  ay as V,
  bF as pe,
  bo as me,
  cM as he,
  en as ge,
  fu as _e,
  gV as ve,
  go as ye,
  hM as be,
  ho as xe,
  iF as Se,
  jV as Ce,
  kN as we,
  lF as Te,
  mv as Ee,
  no as De,
  oM as Oe,
  oP as ke,
  oy as Ae,
  pM as je,
  pu as Me,
  qV as Ne,
  qi as H,
  ro as Pe,
  sF as U,
  tn as Fe,
  uM as Ie,
  vo as Le,
  wM as W,
  wl as Re,
  xo as ze,
  yo as Be,
  zP as Ve,
  za as He,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Bn as Ue,
  Jr as We,
  Vn as Ge,
  qr as Ke,
  sd as qe,
  ud as Je,
  vd as Ye,
  yd as Xe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  cn as Ze,
  it as Qe,
  rt as $e,
  sn as et,
} from "./app-initial~app-main~automations-page.js";
import {
  Do as tt,
  Eo as nt,
  Fi as rt,
  Ii as it,
  Ni as at,
  Pi as ot,
  fr as st,
  h as G,
  mr as ct,
  or as lt,
  pr as ut,
  sr as dt,
  v as ft,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Ct as pt,
  Hn as mt,
  Hs as ht,
  Mf as gt,
  Ms as _t,
  Nf as vt,
  Ns as yt,
  Ps as bt,
  Rs as xt,
  Un as St,
  js as Ct,
  lu as wt,
  uu as Tt,
  wt as Et,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  n as Dt,
  t as Ot,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  T as kt,
  w as At,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  n as jt,
  t as Mt,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page.js";
import {
  n as Nt,
  t as Pt,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy.js";
import { n as Ft, r as It, t as Lt } from "./searchable-page-layout.js";
import {
  C as Rt,
  S as zt,
  T as Bt,
  _ as Vt,
  a as Ht,
  b as Ut,
  c as Wt,
  d as Gt,
  f as Kt,
  g as qt,
  h as Jt,
  i as Yt,
  l as Xt,
  m as Zt,
  n as Qt,
  o as $t,
  p as en,
  r as tn,
  t as nn,
  u as rn,
  v as an,
  w as on,
  x as sn,
  y as cn,
} from "./start-appgen-conversation.js";
import { n as ln, t as un } from "./infinite-scroll-pagination-spinner.js";
import { n as dn, t as fn } from "./artifact-file-preview-icon.js";
import { n as pn, t as mn } from "./appgen-share-dialog-2.js";
import { n as hn, t as gn } from "./segmented-toggle.js";
import { n as _n, t as vn } from "./filter.js";
function yn(e) {
  return c(
    `border border-token-border-light shadow-md`,
    e === `list` ? `rounded-md` : `rounded-xl`,
  );
}
var bn = e(() => {
  R();
});
function xn(e) {
  let t = (0, Dn.c)(35),
    { item: n, onOpenPreview: r, thumbnailResolver: i, viewMode: a } = e,
    o = Te(),
    s;
  t[0] === n.cloudFile.name
    ? (s = t[1])
    : ((s = Tn(n.cloudFile.name)), (t[0] = n.cloudFile.name), (t[1] = s));
  let l = s,
    u;
  t[2] !== o || t[3] !== n || t[4] !== r
    ? ((u =
        r == null
          ? null
          : (0, K.jsx)(`button`, {
              "aria-label": o.formatMessage(
                {
                  id: `appgenPage.cloudFile.openPreviewLabel`,
                  defaultMessage: `Open preview of {fileName}`,
                  description: `Accessible label for opening a cloud Library file preview`,
                },
                { fileName: n.cloudFile.name },
              ),
              className: c(Zt, `z-0`),
              type: `button`,
              onClick: () => r(n),
            })),
      (t[2] = o),
      (t[3] = n),
      (t[4] = r),
      (t[5] = u))
    : (u = t[5]);
  let d = a === `list` ? `gap-6` : `justify-center`,
    f;
  t[6] === d
    ? (f = t[7])
    : ((f = c(`pointer-events-none relative z-[1] flex min-w-0 items-center`, d)),
      (t[6] = d),
      (t[7] = f));
  let p;
  t[8] !== n || t[9] !== i || t[10] !== a
    ? ((p = (0, K.jsx)(Cn, { item: n, thumbnailResolver: i, viewMode: a })),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== p || t[13] !== a
    ? ((m = (0, K.jsx)(an, {
        className: `bg-token-main-surface-secondary flex items-center justify-center has-[img]:bg-transparent`,
        viewMode: a,
        children: p,
      })),
      (t[12] = p),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] !== l || t[16] !== n.cloudFile.mimeType || t[17] !== r || t[18] !== a
    ? ((h =
        a === `list`
          ? (0, K.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, K.jsx)(Ut, { viewMode: a, children: l }),
                (0, K.jsxs)(Vt, {
                  className: `truncate`,
                  children: [
                    (0, K.jsx)(`span`, {
                      className: `group-hover/cloud-file-row:hidden`,
                      children: n.cloudFile.mimeType,
                    }),
                    r == null
                      ? null
                      : (0, K.jsx)(`span`, {
                          className: `hidden group-hover/cloud-file-row:inline-flex`,
                          children: (0, K.jsx)(U, {
                            id: `appgenPage.file.openPreview`,
                            defaultMessage: `Open preview`,
                            description: `Hover subtitle for opening a Library file preview`,
                          }),
                        }),
                  ],
                }),
              ],
            })
          : null),
      (t[15] = l),
      (t[16] = n.cloudFile.mimeType),
      (t[17] = r),
      (t[18] = a),
      (t[19] = h))
    : (h = t[19]);
  let g;
  t[20] !== f || t[21] !== m || t[22] !== h
    ? ((g = (0, K.jsxs)(`div`, { className: f, children: [m, h] })),
      (t[20] = f),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] !== l || t[25] !== n.fileType || t[26] !== n.modifiedAt || t[27] !== r || t[28] !== a
    ? ((_ =
        a === `list`
          ? (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  children: (0, K.jsx)(En, { fileType: n.fileType }),
                }),
                (0, K.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  hideWhenCompact: !0,
                  children: (0, K.jsx)(G, { dateString: n.modifiedAt }),
                }),
                (0, K.jsx)(`div`, { className: `pointer-events-none relative z-[1] pl-4` }),
              ],
            })
          : (0, K.jsx)(qt, {
              actions: null,
              children: (0, K.jsxs)(`div`, {
                className: `min-w-0 px-3 py-3`,
                children: [
                  (0, K.jsx)(Ut, { viewMode: a, children: l }),
                  (0, K.jsxs)(Vt, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, K.jsxs)(`span`, {
                        className: `contents group-hover/cloud-file-row:hidden`,
                        children: [
                          (0, K.jsx)(En, { fileType: n.fileType }),
                          (0, K.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
                          }),
                          (0, K.jsx)(G, { dateString: n.modifiedAt }),
                        ],
                      }),
                      r == null
                        ? null
                        : (0, K.jsx)(`span`, {
                            className: `hidden group-hover/cloud-file-row:inline-flex`,
                            children: (0, K.jsx)(U, {
                              id: `appgenPage.file.openPreview`,
                              defaultMessage: `Open preview`,
                              description: `Hover subtitle for opening a Library file preview`,
                            }),
                          }),
                    ],
                  }),
                ],
              }),
            })),
      (t[24] = l),
      (t[25] = n.fileType),
      (t[26] = n.modifiedAt),
      (t[27] = r),
      (t[28] = a),
      (t[29] = _))
    : (_ = t[29]);
  let v;
  return (
    t[30] !== u || t[31] !== g || t[32] !== _ || t[33] !== a
      ? ((v = (0, K.jsxs)(cn, {
          className: `group/cloud-file-row`,
          viewMode: a,
          children: [u, g, _],
        })),
        (t[30] = u),
        (t[31] = g),
        (t[32] = _),
        (t[33] = a),
        (t[34] = v))
      : (v = t[34]),
    v
  );
}
function Sn(e) {
  let t = (0, Dn.c)(23),
    { item: n, viewMode: r } = e,
    i;
  t[0] === n.file.name ? (i = t[1]) : ((i = Tn(n.file.name)), (t[0] = n.file.name), (t[1] = i));
  let a = i,
    o = r === `list` ? `gap-6` : `justify-center`,
    s;
  t[2] === o
    ? (s = t[3])
    : ((s = c(`pointer-events-none relative z-[1] flex min-w-0 items-center`, o)),
      (t[2] = o),
      (t[3] = s));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, K.jsx)(we, { className: `icon-sm` })), (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === r
    ? (u = t[6])
    : ((u = (0, K.jsx)(an, {
        className: `bg-token-main-surface-secondary flex items-center justify-center`,
        viewMode: r,
        children: l,
      })),
      (t[5] = r),
      (t[6] = u));
  let d;
  t[7] !== a || t[8] !== n.file.mimeType || t[9] !== r
    ? ((d =
        r === `list`
          ? (0, K.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, K.jsx)(Ut, { viewMode: r, children: a }),
                (0, K.jsx)(Vt, {
                  className: `truncate`,
                  children:
                    n.file.mimeType ??
                    (0, K.jsx)(U, {
                      id: `appgenPage.cloudUpload.fileFallback`,
                      defaultMessage: `Uploading`,
                      description: `Fallback subtext for a cloud Library upload row without a MIME type`,
                    }),
                }),
              ],
            })
          : null),
      (t[7] = a),
      (t[8] = n.file.mimeType),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== s || t[12] !== u || t[13] !== d
    ? ((f = (0, K.jsxs)(`div`, { className: s, children: [u, d] })),
      (t[11] = s),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] !== a || t[16] !== n.fileType || t[17] !== r
    ? ((p =
        r === `list`
          ? (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  children: (0, K.jsx)(En, { fileType: n.fileType }),
                }),
                (0, K.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  hideWhenCompact: !0,
                  children: (0, K.jsx)(U, {
                    id: `appgenPage.cloudUpload.status`,
                    defaultMessage: `Uploading…`,
                    description: `Status shown while a cloud Library file upload is in progress`,
                  }),
                }),
                (0, K.jsx)(sn, {}),
              ],
            })
          : (0, K.jsx)(qt, {
              actions: null,
              children: (0, K.jsxs)(`div`, {
                className: `min-w-0 px-3 py-3`,
                children: [
                  (0, K.jsx)(Ut, { viewMode: r, children: a }),
                  (0, K.jsxs)(Vt, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, K.jsx)(En, { fileType: n.fileType }),
                      (0, K.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
                      }),
                      (0, K.jsx)(U, {
                        id: `appgenPage.cloudUpload.status`,
                        defaultMessage: `Uploading…`,
                        description: `Status shown while a cloud Library file upload is in progress`,
                      }),
                    ],
                  }),
                ],
              }),
            })),
      (t[15] = a),
      (t[16] = n.fileType),
      (t[17] = r),
      (t[18] = p))
    : (p = t[18]);
  let m;
  return (
    t[19] !== f || t[20] !== p || t[21] !== r
      ? ((m = (0, K.jsxs)(cn, { viewMode: r, children: [f, p] })),
        (t[19] = f),
        (t[20] = p),
        (t[21] = r),
        (t[22] = m))
      : (m = t[22]),
    m
  );
}
function Cn(e) {
  let t = (0, Dn.c)(12),
    { item: n, thumbnailResolver: r, viewMode: i } = e,
    a = n.cloudFile.category === `image` && r != null,
    o;
  t[0] === n.cloudFile.id
    ? (o = t[1])
    : ((o = [`library-cloud-file-thumbnail`, n.cloudFile.id]), (t[0] = n.cloudFile.id), (t[1] = o));
  let s;
  t[2] !== n.cloudFile || t[3] !== r
    ? ((s = () => {
        if (r == null) throw Error(`Cloud Library thumbnails are unavailable`);
        return r(n.cloudFile);
      }),
      (t[2] = n.cloudFile),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let l;
  t[5] !== o || t[6] !== s
    ? ((l = { cacheKey: o, getDownloadRequest: s }), (t[5] = o), (t[6] = s), (t[7] = l))
    : (l = t[7]);
  let { src: u } = St(a ? n.cloudFile.id : ``, l),
    d;
  return (
    t[8] !== n || t[9] !== u || t[10] !== i
      ? ((d =
          u == null
            ? (0, K.jsx)(wn, { item: n, viewMode: i })
            : (0, K.jsx)(`img`, {
                alt: ``,
                className: c(
                  yn(i),
                  i === `grid` ? `max-h-[72%] max-w-[72%]` : `max-h-full max-w-full`,
                  `object-contain`,
                ),
                loading: `lazy`,
                src: u,
              })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = i),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function wn(e) {
  let t = (0, Dn.c)(3),
    { item: n, viewMode: r } = e,
    i = r === `list` ? `icon-lg` : `size-12`,
    a;
  return (
    t[0] !== n.cloudFile.name || t[1] !== i
      ? ((a = (0, K.jsx)(fn, { iconClassName: i, path: n.cloudFile.name })),
        (t[0] = n.cloudFile.name),
        (t[1] = i),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function Tn(e) {
  let t = e.lastIndexOf(`.`);
  return V(t === -1 ? e : e.slice(0, t), { style: `sentence` });
}
function En(e) {
  let t = (0, Dn.c)(9),
    { fileType: n } = e;
  switch (n) {
    case `audio`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.cloudFileType.audio`,
              defaultMessage: `Audio`,
              description: `Type label for an audio file in the Library`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `document`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.fileType.document`,
              defaultMessage: `Document`,
              description: `Type label for a document in the Library`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `image`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.cloudFileType.image`,
              defaultMessage: `Image`,
              description: `Type label for an image file in the Library`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `other`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.cloudFileType.other`,
              defaultMessage: `File`,
              description: `Type label for a generic file in the Library`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `pdf`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.fileType.pdf`,
              defaultMessage: `PDF`,
              description: `Type label for a PDF in the Library`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.fileType.presentation`,
              defaultMessage: `Presentation`,
              description: `Type label for a presentation in the Library`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.fileType.spreadsheet`,
              defaultMessage: `Spreadsheet`,
              description: `Type label for a spreadsheet in the Library`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `text`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.cloudFileType.text`,
              defaultMessage: `Text`,
              description: `Type label for a text file in the Library`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `video`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(U, {
              id: `appgenPage.cloudFileType.video`,
              defaultMessage: `Video`,
              description: `Type label for a video file in the Library`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
  }
}
var Dn,
  K,
  On = e(() => {
    ((Dn = Ne()), R(), Se(), dn(), ft(), a(), mt(), Ae(), bn(), Rt(), (K = l()));
  }),
  kn,
  An = e(() => {
    (r(),
      oe(),
      n(),
      ke(),
      (kn = ve(P, ({ modifiedAt: e, path: t, size: n }) => ({
        queryFn: async () => {
          let e = re.libraryFiles;
          if (e == null) throw Error(`Library thumbnails are unavailable`);
          return e.getThumbnailDataUrl({ size: n, sourcePath: t });
        },
        queryKey: [`library-file`, t, e, n, `thumbnail`],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: fe.INFINITE,
      }))));
  });
function jn(e) {
  let t = (0, Ln.c)(47),
    { item: n, onEdit: r, onOpenPreview: i, viewMode: a } = e,
    o = Te(),
    [s, l] = (0, Rn.useState)(null),
    [u, d] = (0, Rn.useState)(Nn),
    f;
  if (t[0] !== n.file.name) {
    let e = n.file.name.lastIndexOf(`.`);
    ((f = V(e === -1 ? n.file.name : n.file.name.slice(0, e), { style: `sentence` })),
      (t[0] = n.file.name),
      (t[1] = f));
  } else f = t[1];
  let p = f,
    m,
    h;
  (t[2] === s
    ? ((m = t[3]), (h = t[4]))
    : ((m = () => {
        if (s == null || !zn) return;
        let e,
          t = new IntersectionObserver(
            (t) => {
              t.some(Mn)
                ? (e ??= window.setTimeout(() => {
                    ((e = void 0), d(!0));
                  }, 150))
                : (window.clearTimeout(e), (e = void 0));
            },
            { rootMargin: `200px` },
          );
        return (
          t.observe(s),
          () => {
            (window.clearTimeout(e), t.disconnect());
          }
        );
      }),
      (h = [s]),
      (t[2] = s),
      (t[3] = m),
      (t[4] = h)),
    (0, Rn.useEffect)(m, h));
  let g;
  t[5] !== o || t[6] !== n.file.name
    ? ((g = o.formatMessage(
        {
          id: `appgenPage.file.openPreviewLabel`,
          defaultMessage: `Open preview of {fileName}`,
          description: `Accessible label for opening a Library file preview`,
        },
        { fileName: n.file.name },
      )),
      (t[5] = o),
      (t[6] = n.file.name),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = c(Zt, `z-0`)), (t[8] = _)) : (_ = t[8]);
  let v;
  t[9] !== n || t[10] !== i
    ? ((v = () => i(n)), (t[9] = n), (t[10] = i), (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] !== g || t[13] !== v
    ? ((y = (0, q.jsx)(`button`, { "aria-label": g, className: _, type: `button`, onClick: v })),
      (t[12] = g),
      (t[13] = v),
      (t[14] = y))
    : (y = t[14]);
  let b = a === `list` ? `gap-6` : `justify-center`,
    x;
  t[15] === b
    ? (x = t[16])
    : ((x = c(`pointer-events-none relative z-[1] flex min-w-0 items-center`, b)),
      (t[15] = b),
      (t[16] = x));
  let S;
  t[17] !== n || t[18] !== u || t[19] !== a
    ? ((S = u
        ? (0, q.jsx)(Pn, { item: n, viewMode: a })
        : (0, q.jsx)(Fn, { item: n, viewMode: a })),
      (t[17] = n),
      (t[18] = u),
      (t[19] = a),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== S || t[22] !== a
    ? ((C = (0, q.jsx)(an, {
        ref: l,
        className: `bg-token-main-surface-secondary flex items-center justify-center has-[img]:bg-transparent`,
        viewMode: a,
        children: S,
      })),
      (t[21] = S),
      (t[22] = a),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== p || t[25] !== n.file.relativePath || t[26] !== a
    ? ((w =
        a === `list`
          ? (0, q.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, q.jsx)(Ut, { viewMode: a, children: p }),
                (0, q.jsxs)(Vt, {
                  className: `truncate`,
                  children: [
                    (0, q.jsx)(`span`, {
                      className: `group-hover/file-row:hidden`,
                      children: n.file.relativePath,
                    }),
                    (0, q.jsx)(`span`, {
                      className: `hidden group-hover/file-row:inline-flex`,
                      children: (0, q.jsx)(U, {
                        id: `appgenPage.file.openPreview`,
                        defaultMessage: `Open preview`,
                        description: `Hover subtitle for opening a Library file preview`,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (t[24] = p),
      (t[25] = n.file.relativePath),
      (t[26] = a),
      (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] !== C || t[29] !== w || t[30] !== x
    ? ((T = (0, q.jsxs)(`div`, { className: x, children: [C, w] })),
      (t[28] = C),
      (t[29] = w),
      (t[30] = x),
      (t[31] = T))
    : (T = t[31]);
  let E;
  t[32] !== p || t[33] !== n || t[34] !== r || t[35] !== a
    ? ((E =
        a === `list`
          ? (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  children: (0, q.jsx)(In, { fileType: n.fileType }),
                }),
                (0, q.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  hideWhenCompact: !0,
                  children: (0, q.jsx)(G, { dateString: n.modifiedAt }),
                }),
              ],
            })
          : (0, q.jsx)(qt, {
              actions: (0, q.jsx)(Jt, {
                disabled: n.file.threadId == null,
                itemName: n.file.name,
                viewMode: a,
                onContinue: () => r(n),
              }),
              children: (0, q.jsxs)(`div`, {
                className: `min-w-0 px-3 py-3`,
                children: [
                  (0, q.jsx)(Ut, { viewMode: a, children: p }),
                  (0, q.jsxs)(Vt, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, q.jsxs)(`span`, {
                        className: `contents group-hover/file-row:hidden`,
                        children: [
                          (0, q.jsx)(In, { fileType: n.fileType }),
                          (0, q.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
                          }),
                          (0, q.jsx)(G, { dateString: n.modifiedAt }),
                        ],
                      }),
                      (0, q.jsx)(`span`, {
                        className: `hidden group-hover/file-row:inline-flex`,
                        children: (0, q.jsx)(U, {
                          id: `appgenPage.file.openPreview`,
                          defaultMessage: `Open preview`,
                          description: `Hover subtitle for opening a Library file preview`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })),
      (t[32] = p),
      (t[33] = n),
      (t[34] = r),
      (t[35] = a),
      (t[36] = E))
    : (E = t[36]);
  let D;
  t[37] !== n || t[38] !== r || t[39] !== a
    ? ((D =
        a === `list`
          ? (0, q.jsx)(sn, {
              className: `justify-end`,
              children: (0, q.jsx)(Jt, {
                disabled: n.file.threadId == null,
                itemName: n.file.name,
                viewMode: a,
                onContinue: () => r(n),
              }),
            })
          : null),
      (t[37] = n),
      (t[38] = r),
      (t[39] = a),
      (t[40] = D))
    : (D = t[40]);
  let O;
  return (
    t[41] !== T || t[42] !== E || t[43] !== D || t[44] !== y || t[45] !== a
      ? ((O = (0, q.jsxs)(cn, {
          className: `group/file-row`,
          viewMode: a,
          children: [y, T, E, D],
        })),
        (t[41] = T),
        (t[42] = E),
        (t[43] = D),
        (t[44] = y),
        (t[45] = a),
        (t[46] = O))
      : (O = t[46]),
    O
  );
}
function Mn(e) {
  return e.isIntersecting;
}
function Nn() {
  return !zn;
}
function Pn(e) {
  let t = (0, Ln.c)(8),
    { item: n, viewMode: r } = e,
    i = r === `list` ? `compact` : `large`,
    a;
  t[0] !== n.file.path || t[1] !== n.modifiedAt || t[2] !== i
    ? ((a = { modifiedAt: n.modifiedAt, path: n.file.path, size: i }),
      (t[0] = n.file.path),
      (t[1] = n.modifiedAt),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let { data: o } = M(kn, a),
    s;
  return (
    t[4] !== n || t[5] !== o || t[6] !== r
      ? ((s =
          o?.dataUrl == null
            ? (0, q.jsx)(Fn, { item: n, viewMode: r })
            : (0, q.jsx)(`img`, {
                alt: ``,
                className: c(
                  yn(r),
                  r === `grid` ? `max-h-[72%] max-w-[72%]` : `max-h-full max-w-full`,
                  `object-contain`,
                ),
                "data-testid": `library-file-thumbnail`,
                loading: `lazy`,
                src: o.dataUrl,
              })),
        (t[4] = n),
        (t[5] = o),
        (t[6] = r),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Fn(e) {
  let t = (0, Ln.c)(3),
    { item: n, viewMode: r } = e,
    i = r === `list` ? `icon-lg` : `size-12`,
    a;
  return (
    t[0] !== n.file.path || t[1] !== i
      ? ((a = (0, q.jsx)(fn, { iconClassName: i, path: n.file.path })),
        (t[0] = n.file.path),
        (t[1] = i),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function In(e) {
  let t = (0, Ln.c)(4),
    { fileType: n } = e;
  switch (n) {
    case `document`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(U, {
              id: `appgenPage.fileType.document`,
              defaultMessage: `Document`,
              description: `Type label for a document in the Library`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `pdf`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(U, {
              id: `appgenPage.fileType.pdf`,
              defaultMessage: `PDF`,
              description: `Type label for a PDF in the Library`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(U, {
              id: `appgenPage.fileType.presentation`,
              defaultMessage: `Presentation`,
              description: `Type label for a presentation in the Library`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(U, {
              id: `appgenPage.fileType.spreadsheet`,
              defaultMessage: `Spreadsheet`,
              description: `Type label for a spreadsheet in the Library`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
var Ln,
  Rn,
  q,
  zn,
  Bn = e(() => {
    ((Ln = Ne()),
      R(),
      r(),
      (Rn = t(x(), 1)),
      Se(),
      dn(),
      ft(),
      Ae(),
      bn(),
      Rt(),
      An(),
      (q = l()),
      (zn = typeof IntersectionObserver < `u`));
  });
function Vn(e) {
  let t = (0, Hn.c)(50),
    { item: n, onEdit: r, onOpenPreview: i, src: a, viewMode: o } = e,
    s = Te(),
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== s || t[1] !== n.image.name || t[2] !== o) {
    let e = n.image.name.lastIndexOf(`.`);
    ((u = V(e === -1 ? n.image.name : n.image.name.slice(0, e), { style: `sentence` })),
      (l = cn),
      (f = `group/image-row`),
      (p = o),
      (d = s.formatMessage(
        {
          id: `appgenPage.image.open`,
          defaultMessage: `Open {imageName}`,
          description: `Accessible label for opening a generated Library image`,
        },
        { imageName: u },
      )),
      (t[0] = s),
      (t[1] = n.image.name),
      (t[2] = o),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p));
  } else ((l = t[3]), (u = t[4]), (d = t[5]), (f = t[6]), (p = t[7]));
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = c(Zt, `z-0`)), (t[8] = m)) : (m = t[8]);
  let h;
  t[9] !== n || t[10] !== i
    ? ((h = () => i(n)), (t[9] = n), (t[10] = i), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== d || t[13] !== h
    ? ((g = (0, J.jsx)(`button`, { "aria-label": d, className: m, type: `button`, onClick: h })),
      (t[12] = d),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _ = o === `list` ? `gap-6` : `justify-center`,
    v;
  t[15] === _
    ? (v = t[16])
    : ((v = c(`pointer-events-none relative z-[1] flex min-w-0 items-center`, _)),
      (t[15] = _),
      (t[16] = v));
  let y;
  t[17] === o
    ? (y = t[18])
    : ((y = c(
        yn(o),
        o === `grid` ? `max-h-[72%] max-w-[72%]` : `max-h-full max-w-full`,
        `object-contain`,
      )),
      (t[17] = o),
      (t[18] = y));
  let b;
  t[19] !== a || t[20] !== y
    ? ((b = (0, J.jsx)(`img`, { alt: ``, className: y, loading: `lazy`, src: a })),
      (t[19] = a),
      (t[20] = y),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== b || t[23] !== o
    ? ((x = (0, J.jsx)(an, {
        className: `flex items-center justify-center`,
        viewMode: o,
        children: b,
      })),
      (t[22] = b),
      (t[23] = o),
      (t[24] = x))
    : (x = t[24]);
  let S;
  t[25] !== u || t[26] !== n.image.relativePath || t[27] !== o
    ? ((S =
        o === `list`
          ? (0, J.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, J.jsx)(Ut, { viewMode: o, children: u }),
                (0, J.jsx)(Vt, { className: `truncate`, children: n.image.relativePath }),
              ],
            })
          : null),
      (t[25] = u),
      (t[26] = n.image.relativePath),
      (t[27] = o),
      (t[28] = S))
    : (S = t[28]);
  let C;
  t[29] !== x || t[30] !== S || t[31] !== v
    ? ((C = (0, J.jsxs)(`div`, { className: v, children: [x, S] })),
      (t[29] = x),
      (t[30] = S),
      (t[31] = v),
      (t[32] = C))
    : (C = t[32]);
  let w;
  t[33] !== u || t[34] !== n || t[35] !== r || t[36] !== o
    ? ((w =
        o === `list`
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  children: (0, J.jsx)(U, {
                    id: `appgenPage.image.type`,
                    defaultMessage: `Image`,
                    description: `Type label for a generated image in the Library`,
                  }),
                }),
                (0, J.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  hideWhenCompact: !0,
                  children: (0, J.jsx)(G, { dateString: n.modifiedAt }),
                }),
              ],
            })
          : (0, J.jsx)(qt, {
              actions: (0, J.jsx)(Jt, {
                disabled: n.image.threadId == null,
                itemName: n.image.name,
                viewMode: o,
                onContinue: () => r(n),
              }),
              children: (0, J.jsxs)(`div`, {
                className: `min-w-0 px-3 py-3`,
                children: [
                  (0, J.jsx)(Ut, { viewMode: o, children: u }),
                  (0, J.jsxs)(Vt, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, J.jsx)(U, {
                        id: `appgenPage.image.type`,
                        defaultMessage: `Image`,
                        description: `Type label for a generated image in the Library`,
                      }),
                      (0, J.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
                      }),
                      (0, J.jsx)(G, { dateString: n.modifiedAt }),
                    ],
                  }),
                ],
              }),
            })),
      (t[33] = u),
      (t[34] = n),
      (t[35] = r),
      (t[36] = o),
      (t[37] = w))
    : (w = t[37]);
  let T;
  t[38] !== n || t[39] !== r || t[40] !== o
    ? ((T =
        o === `list`
          ? (0, J.jsx)(sn, {
              className: `justify-end`,
              children: (0, J.jsx)(Jt, {
                disabled: n.image.threadId == null,
                itemName: n.image.name,
                viewMode: o,
                onContinue: () => r(n),
              }),
            })
          : null),
      (t[38] = n),
      (t[39] = r),
      (t[40] = o),
      (t[41] = T))
    : (T = t[41]);
  let E;
  return (
    t[42] !== l ||
    t[43] !== C ||
    t[44] !== w ||
    t[45] !== T ||
    t[46] !== f ||
    t[47] !== p ||
    t[48] !== g
      ? ((E = (0, J.jsxs)(l, { className: f, viewMode: p, children: [g, C, w, T] })),
        (t[42] = l),
        (t[43] = C),
        (t[44] = w),
        (t[45] = T),
        (t[46] = f),
        (t[47] = p),
        (t[48] = g),
        (t[49] = E))
      : (E = t[49]),
    E
  );
}
var Hn,
  J,
  Un = e(() => {
    ((Hn = Ne()), R(), Se(), ft(), Ae(), bn(), Rt(), (J = l()));
  });
function Wn(e) {
  let t = (0, Jn.c)(31),
    { onEdit: n, project: r, viewMode: i } = e,
    a = Te(),
    o = r.current_live_url,
    { data: s } = I(r.screenshot_url),
    l;
  t[0] !== a || t[1] !== o || t[2] !== r.title
    ? ((l =
        o == null
          ? null
          : (0, Y.jsx)(`button`, {
              "aria-label": a.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites list`,
                },
                { siteTitle: r.title },
              ),
              className: c(Zt, `peer/appgen-row`),
              onClick: (e) => {
                He({ event: e, href: o, initiator: `mcp_app_resource` });
              },
              type: `button`,
            })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = r.title),
      (t[3] = l))
    : (l = t[3]);
  let u = i === `list` ? `items-center gap-6` : `flex-col items-stretch`,
    d;
  t[4] === u
    ? (d = t[5])
    : ((d = c(
        `pointer-events-none relative z-10 flex min-w-0 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex`,
        u,
      )),
      (t[4] = u),
      (t[5] = d));
  let f;
  t[6] !== s || t[7] !== i
    ? ((f =
        s == null
          ? (0, Y.jsx)(Kn, { viewMode: i })
          : (0, Y.jsx)(an, {
              className: `flex items-center justify-center`,
              viewMode: i,
              children: (0, Y.jsx)(`img`, {
                alt: ``,
                className: c(
                  Gn(i),
                  i === `grid` ? `max-h-[72%] max-w-[72%]` : `max-h-full max-w-full`,
                  `object-contain`,
                ),
                loading: `lazy`,
                src: s,
              }),
            })),
      (t[6] = s),
      (t[7] = i),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== o || t[10] !== r.slug || t[11] !== r.title || t[12] !== i
    ? ((p =
        i === `list`
          ? (0, Y.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-px`,
              children: [
                (0, Y.jsx)(Ut, { viewMode: i, children: r.title }),
                (0, Y.jsxs)(Vt, {
                  className: `flex min-w-0 items-center gap-1.5`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `appgen-row-default-subtitle min-w-0 truncate`,
                      children: at(o) ?? r.slug,
                    }),
                    (0, Y.jsxs)(`span`, {
                      className: `appgen-row-hover-subtitle hidden items-center gap-1`,
                      children: [
                        (0, Y.jsx)(U, {
                          id: `appgenPage.openInBrowserSubtitle`,
                          defaultMessage: `Open in browser`,
                          description: `Hover subtitle for opening a live site`,
                        }),
                        o == null
                          ? null
                          : (0, Y.jsx)(ge, { className: `icon-2xs`, ExternalIcon: ce, href: o }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null),
      (t[9] = o),
      (t[10] = r.slug),
      (t[11] = r.title),
      (t[12] = i),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== d || t[15] !== f || t[16] !== p
    ? ((m = (0, Y.jsxs)(`div`, { className: d, children: [f, p] })),
      (t[14] = d),
      (t[15] = f),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] !== o ||
  t[19] !== n ||
  t[20] !== r.access_policy ||
  t[21] !== r.id ||
  t[22] !== r.title ||
  t[23] !== r.updated_at ||
  t[24] !== i
    ? ((h =
        i === `list`
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(zt, {
                  children: (0, Y.jsx)(U, {
                    id: `appgenPage.itemType.site`,
                    defaultMessage: `Site`,
                    description: `Type label for a site in the Library`,
                  }),
                }),
                (0, Y.jsx)(zt, {
                  hideWhenCompact: !0,
                  children: (0, Y.jsx)(G, { dateString: r.updated_at }),
                }),
                (0, Y.jsx)(Kt, {
                  projectId: r.id,
                  projectTitle: r.title,
                  surface: `library`,
                  viewMode: i,
                  onEdit: () => n(r.id, r.title, o),
                }),
              ],
            })
          : (0, Y.jsx)(qt, {
              actions: (0, Y.jsx)(Kt, {
                projectId: r.id,
                projectTitle: r.title,
                surface: `library`,
                viewMode: i,
                onEdit: () => n(r.id, r.title, o),
              }),
              children: (0, Y.jsxs)(`div`, {
                className: `min-w-0`,
                children: [
                  (0, Y.jsx)(Ut, { className: `px-3 pt-3`, viewMode: i, children: r.title }),
                  (0, Y.jsx)(qn, {
                    accessPolicy: r.access_policy,
                    projectId: r.id,
                    projectTitle: r.title,
                    updatedAt: r.updated_at,
                  }),
                ],
              }),
            })),
      (t[18] = o),
      (t[19] = n),
      (t[20] = r.access_policy),
      (t[21] = r.id),
      (t[22] = r.title),
      (t[23] = r.updated_at),
      (t[24] = i),
      (t[25] = h))
    : (h = t[25]);
  let g;
  return (
    t[26] !== l || t[27] !== m || t[28] !== h || t[29] !== i
      ? ((g = (0, Y.jsxs)(cn, { "data-appgen-row": !0, viewMode: i, children: [l, m, h] })),
        (t[26] = l),
        (t[27] = m),
        (t[28] = h),
        (t[29] = i),
        (t[30] = g))
      : (g = t[30]),
    g
  );
}
function Gn(e) {
  return c(
    `border border-token-border-light shadow-md`,
    e === `list` ? `rounded-md` : `rounded-xl`,
  );
}
function Kn(e) {
  let t = (0, Jn.c)(8),
    { viewMode: n } = e,
    { platform: r } = ie(),
    i = r === `windows` ? rn : Wt,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = c(Gn(n), n === `list` ? `size-full` : `h-auto w-[72%]`)), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== i || t[3] !== a
    ? ((o = (0, Y.jsx)(i, { "aria-hidden": !0, className: a })), (t[2] = i), (t[3] = a), (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== o || t[6] !== n
      ? ((s = (0, Y.jsx)(an, {
          className: `flex items-center justify-center`,
          viewMode: n,
          children: o,
        })),
        (t[5] = o),
        (t[6] = n),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function qn(e) {
  let t = (0, Jn.c)(22),
    { accessPolicy: n, projectId: r, projectTitle: i, updatedAt: a } = e,
    o = xt(n),
    s = p(P),
    c;
  t[0] !== r || t[1] !== s
    ? ((c = () => N(s, mn, { projectId: r })), (t[0] = r), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === n
    ? (l = t[4])
    : ((l = (0, Y.jsx)(yt, { className: `icon-xs shrink-0`, accessPolicy: n, "aria-hidden": !0 })),
      (t[3] = n),
      (t[4] = l));
  let u = U,
    d = Ct(o),
    f;
  t[5] !== u || t[6] !== o || t[7] !== d
    ? ((f = (0, Y.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Y.jsx)(u, { ...d, values: o }),
      })),
      (t[5] = u),
      (t[6] = o),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let m;
  t[9] === i
    ? (m = t[10])
    : ((m = (0, Y.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Y.jsx)(U, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: i },
        }),
      })),
      (t[9] = i),
      (t[10] = m));
  let h;
  t[11] !== c || t[12] !== l || t[13] !== f || t[14] !== m
    ? ((h = (0, Y.jsxs)(`button`, {
        className: `pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline`,
        type: `button`,
        onClick: c,
        children: [l, f, m],
      })),
      (t[11] = c),
      (t[12] = l),
      (t[13] = f),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] === a ? (_ = t[18]) : ((_ = (0, Y.jsx)(G, { dateString: a })), (t[17] = a), (t[18] = _));
  let v;
  return (
    t[19] !== h || t[20] !== _
      ? ((v = (0, Y.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1.5 px-3 pt-0 pb-3 text-xs leading-[18px] text-token-text-secondary`,
          children: [h, g, _],
        })),
        (t[19] = h),
        (t[20] = _),
        (t[21] = v))
      : (v = t[21]),
    v
  );
}
var Jn,
  Y,
  Yn = e(() => {
    ((Jn = Ne()),
      R(),
      r(),
      Se(),
      S(),
      Fe(),
      ft(),
      D(),
      g(),
      z(),
      n(),
      ht(),
      bt(),
      _t(),
      Rt(),
      en(),
      b(),
      pn(),
      ot(),
      Gt(),
      Xt(),
      (Y = l()));
  }),
  Xn,
  Zn,
  Qn = e(() => {
    (r(),
      oe(),
      n(),
      ke(),
      (Xn = [`generated-images`]),
      (Zn = ue(P, () => ({
        queryFn: async () => {
          let e = re.libraryFiles;
          if (e == null) throw Error(`Library images are unavailable`);
          return e.listGeneratedImages();
        },
        queryKey: Xn,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: fe.FIVE_SECONDS,
      }))));
  }),
  $n,
  er = e(() => {
    (r(),
      oe(),
      n(),
      ke(),
      ($n = ue(P, () => ({
        queryFn: async () => {
          let e = re.libraryFiles;
          if (e == null) throw Error(`Library files are unavailable`);
          return e.listOutputFiles();
        },
        queryKey: [`projectless-output-files`],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: fe.FIVE_SECONDS,
      }))));
  });
function tr(e) {
  let t = (0, cr.c)(41),
    {
      accessFilter: n,
      cloudFileThumbnailResolver: r,
      cloudSource: i,
      cloudUploadingFiles: a,
      contentType: o,
      fileFilter: s,
      localSourcesEnabled: c,
      onCreate: l,
      onEdit: u,
      onFileEdit: d,
      onImageEdit: f,
      onPreview: p,
      searchQuery: m,
      viewMode: h,
    } = e,
    g = c === void 0 ? !0 : c,
    { data: v, isError: y, isLoading: b } = _($n),
    { data: x, isError: S, isLoading: w } = _(Zn),
    T = g && (o === `sites` || (o === `all` && s === `all`)),
    E = g && (o === `files` || o === `all`),
    D = g && (o === `images` || (o === `all` && s === `all`)),
    O;
  t[0] === T ? (O = t[1]) : ((O = { enabled: T }), (t[0] = T), (t[1] = O));
  let {
      data: k,
      fetchNextPage: A,
      hasNextPage: j,
      isFetchNextPageError: M,
      isFetchingNextPage: N,
      isError: P,
      isLoading: F,
    } = C(O),
    ee = i?.files,
    I = E ? v : void 0,
    te = D ? x : void 0,
    ne = T ? k : void 0,
    re;
  t[2] !== n ||
  t[3] !== a ||
  t[4] !== o ||
  t[5] !== s ||
  t[6] !== m ||
  t[7] !== ee ||
  t[8] !== I ||
  t[9] !== te ||
  t[10] !== ne
    ? ((re = Yt({
        accessFilter: n,
        cloudFiles: ee,
        cloudUploadingFiles: a,
        contentType: o,
        fileFilter: s,
        files: I,
        images: te,
        projects: ne,
        searchQuery: m,
      })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = m),
      (t[7] = ee),
      (t[8] = I),
      (t[9] = te),
      (t[10] = ne),
      (t[11] = re))
    : (re = t[11]);
  let L = re,
    ie = (T && F) || (E && b) || (D && w) || i?.isLoading === !0,
    ae =
      (T && k == null) ||
      (E && v == null) ||
      (D && x == null) ||
      (i?.isEnabled === !0 && i.files == null),
    R;
  t[12] !== n || t[13] !== o || t[14] !== s || t[15] !== m
    ? ((R =
        m.trim().length > 0 ||
        (o === `sites` && n !== `all`) ||
        ((o === `all` || o === `files`) && s !== `all`)),
      (t[12] = n),
      (t[13] = o),
      (t[14] = s),
      (t[15] = m),
      (t[16] = R))
    : (R = t[16]);
  let oe = R,
    se = (!T || !j || M) && (i == null || !i.hasNextPage || i.hasLoadError);
  if (ie) {
    let e;
    return (
      t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(nr, {})), (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  if (L.length === 0) {
    if (ae) {
      let e;
      return (
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(ir, {})), (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    if (se) {
      let e;
      return (
        t[19] !== o || t[20] !== oe || t[21] !== l
          ? ((e = oe ? (0, X.jsx)(ar, {}) : (0, X.jsx)(rr, { contentType: o, onCreate: l })),
            (t[19] = o),
            (t[20] = oe),
            (t[21] = l),
            (t[22] = e))
          : (e = t[22]),
        e
      );
    }
  }
  let ce = (T && P) || (E && y) || (D && S) || i?.hasLoadError === !0,
    le = (T && j && !M) || i?.hasNextPage === !0,
    z = N || i?.isFetchingNextPage === !0,
    ue;
  t[23] !== i || t[24] !== A || t[25] !== j || t[26] !== M || t[27] !== T
    ? ((ue = () =>
        Promise.all([
          ...(T && j && !M ? [A()] : []),
          ...(i?.hasNextPage === !0 ? [i.fetchNextPage()] : []),
        ])),
      (t[23] = i),
      (t[24] = A),
      (t[25] = j),
      (t[26] = M),
      (t[27] = T),
      (t[28] = ue))
    : (ue = t[28]);
  let de;
  return (
    t[29] !== r ||
    t[30] !== L ||
    t[31] !== u ||
    t[32] !== d ||
    t[33] !== f ||
    t[34] !== p ||
    t[35] !== le ||
    t[36] !== z ||
    t[37] !== ue ||
    t[38] !== ce ||
    t[39] !== h
      ? ((de = (0, X.jsx)(or, {
          hasLoadError: ce,
          hasNextPage: le,
          isFetchingNextPage: z,
          items: L,
          cloudFileThumbnailResolver: r,
          viewMode: h,
          onEdit: u,
          onFileEdit: d,
          onImageEdit: f,
          onLoadNextPage: ue,
          onPreview: p,
        })),
        (t[29] = r),
        (t[30] = L),
        (t[31] = u),
        (t[32] = d),
        (t[33] = f),
        (t[34] = p),
        (t[35] = le),
        (t[36] = z),
        (t[37] = ue),
        (t[38] = ce),
        (t[39] = h),
        (t[40] = de))
      : (de = t[40]),
    de
  );
}
function nr() {
  let e = (0, cr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, X.jsx)(we, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function rr(e) {
  let t = (0, cr.c)(11),
    { contentType: n, onCreate: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i =
        n === `files`
          ? (0, X.jsx)(nt, { className: `icon-lg text-token-foreground` })
          : n === `images`
            ? (0, X.jsx)(pt, { className: `icon-lg text-token-foreground` })
            : (0, X.jsx)(Mt, { className: `icon-lg text-token-foreground` })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, X.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children:
          n === `files`
            ? (0, X.jsx)(U, {
                id: `appgenPage.empty.filesTitle`,
                defaultMessage: `No files yet`,
                description: `Empty state title for the Library Files tab`,
              })
            : n === `images`
              ? (0, X.jsx)(U, {
                  id: `appgenPage.empty.imagesTitle`,
                  defaultMessage: `No images yet`,
                  description: `Empty state title for the Library Images tab`,
                })
              : (0, X.jsx)(U, {
                  id: `appgenPage.library.empty.title`,
                  defaultMessage: `Nothing here yet`,
                  description: `Empty state title for the Library page`,
                }),
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  t[4] !== n || t[5] !== r
    ? ((o =
        n === `files` || n === `images`
          ? null
          : (0, X.jsx)(u, {
              color: `outline`,
              size: `medium`,
              onClick: r,
              children: (0, X.jsx)(U, {
                id: `appgenPage.empty.create`,
                defaultMessage: `Create new site`,
                description: `Button label for creating a new site from the empty state`,
              }),
            })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== i || t[8] !== a || t[9] !== o
      ? ((s = (0, X.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, X.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4 text-center`,
            children: [i, a, o],
          }),
        })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
function ir() {
  let e = (0, cr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, X.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, X.jsx)(U, {
              id: `appgenPage.library.error.title`,
              defaultMessage: `Unable to load library`,
              description: `Error state title for the Library page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ar() {
  let e = (0, cr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center text-sm font-medium text-token-text-secondary`,
          children: (0, X.jsx)(U, {
            id: `appgenPage.search.empty`,
            defaultMessage: `No library items found`,
            description: `Empty state shown when no Library items match the search query`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function or(e) {
  let t = (0, cr.c)(35),
    {
      cloudFileThumbnailResolver: n,
      hasLoadError: r,
      hasNextPage: i,
      isFetchingNextPage: a,
      items: o,
      onEdit: s,
      onFileEdit: l,
      onImageEdit: u,
      onPreview: d,
      onLoadNextPage: f,
      viewMode: p,
    } = e,
    m =
      p === `list`
        ? `grid-cols-[minmax(0,1fr)_minmax(90px,120px)_minmax(90px,120px)_auto] [@container_(max-width:620px)]:grid-cols-[minmax(0,1fr)_minmax(90px,120px)_auto]`
        : `grid-cols-3 gap-3 [@container_(max-width:680px)]:grid-cols-2 [@container_(max-width:440px)]:grid-cols-1`,
    h;
  t[0] === m ? (h = t[1]) : ((h = c(`grid`, m)), (t[0] = m), (t[1] = h));
  let g;
  t[2] === p
    ? (g = t[3])
    : ((g =
        p === `list`
          ? (0, X.jsxs)(`div`, {
              className: `col-span-full grid grid-cols-subgrid items-center border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary`,
              children: [
                (0, X.jsx)(`span`, {
                  children: (0, X.jsx)(U, {
                    id: `appgenPage.list.name`,
                    defaultMessage: `Name`,
                    description: `Name column header in the Library list`,
                  }),
                }),
                (0, X.jsx)(`span`, {
                  className: `pl-4`,
                  children: (0, X.jsx)(U, {
                    id: `appgenPage.list.type`,
                    defaultMessage: `Type`,
                    description: `Type column header in the Library list`,
                  }),
                }),
                (0, X.jsx)(`span`, {
                  className: `pl-4 [@container_(max-width:620px)]:sr-only`,
                  children: (0, X.jsx)(U, {
                    id: `appgenPage.list.modified`,
                    defaultMessage: `Modified`,
                    description: `Modified column header in the Library list`,
                  }),
                }),
                (0, X.jsx)(`span`, {}),
              ],
            })
          : null),
      (t[2] = p),
      (t[3] = g));
  let _;
  if (
    t[4] !== n ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== d ||
    t[10] !== p
  ) {
    let e;
    (t[12] !== n || t[13] !== s || t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== p
      ? ((e = (e) =>
          (0, X.jsx)(
            sr,
            {
              cloudFileThumbnailResolver: n,
              item: e,
              viewMode: p,
              onEdit: s,
              onFileEdit: l,
              onImageEdit: u,
              onPreview: d,
            },
            e.id,
          )),
        (t[12] = n),
        (t[13] = s),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = p),
        (t[18] = e))
      : (e = t[18]),
      (_ = o.map(e)),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p),
      (t[11] = _));
  } else _ = t[11];
  let v;
  t[19] !== h || t[20] !== g || t[21] !== _
    ? ((v = (0, X.jsxs)(`div`, { className: h, children: [g, _] })),
      (t[19] = h),
      (t[20] = g),
      (t[21] = _),
      (t[22] = v))
    : (v = t[22]);
  let y;
  t[23] === r
    ? (y = t[24])
    : ((y = r
        ? (0, X.jsx)(`div`, {
            className: `px-3 py-2 text-xs text-token-text-secondary`,
            children: (0, X.jsx)(U, {
              id: `appgenPage.partialError`,
              defaultMessage: `Some library items couldn't be loaded`,
              description: `Inline warning shown when one Library source fails to load`,
            }),
          })
        : null),
      (t[23] = r),
      (t[24] = y));
  let b;
  t[25] === f
    ? (b = t[26])
    : ((b = () => {
        f();
      }),
      (t[25] = f),
      (t[26] = b));
  let x;
  t[27] !== i || t[28] !== a || t[29] !== b
    ? ((x = (0, X.jsx)(un, { hasNextPage: i, isFetchingNextPage: a, onLoadNextPage: b })),
      (t[27] = i),
      (t[28] = a),
      (t[29] = b),
      (t[30] = x))
    : (x = t[30]);
  let S;
  return (
    t[31] !== v || t[32] !== y || t[33] !== x
      ? ((S = (0, X.jsxs)(`div`, { className: `@container pb-3`, children: [v, y, x] })),
        (t[31] = v),
        (t[32] = y),
        (t[33] = x),
        (t[34] = S))
      : (S = t[34]),
    S
  );
}
function sr(e) {
  let t = (0, cr.c)(25),
    {
      cloudFileThumbnailResolver: n,
      item: r,
      onEdit: i,
      onFileEdit: a,
      onImageEdit: o,
      onPreview: s,
      viewMode: c,
    } = e;
  switch (r.kind) {
    case `site`: {
      let e;
      return (
        t[0] !== r.project || t[1] !== i || t[2] !== c
          ? ((e = (0, X.jsx)(Wn, { project: r.project, viewMode: c, onEdit: i })),
            (t[0] = r.project),
            (t[1] = i),
            (t[2] = c),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `file`: {
      let e;
      return (
        t[4] !== r || t[5] !== a || t[6] !== s || t[7] !== c
          ? ((e = (0, X.jsx)(jn, { item: r, viewMode: c, onEdit: a, onOpenPreview: s })),
            (t[4] = r),
            (t[5] = a),
            (t[6] = s),
            (t[7] = c),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `cloud-file`: {
      let e;
      return (
        t[9] !== n || t[10] !== r || t[11] !== s || t[12] !== c
          ? ((e = (0, X.jsx)(xn, { item: r, thumbnailResolver: n, viewMode: c, onOpenPreview: s })),
            (t[9] = n),
            (t[10] = r),
            (t[11] = s),
            (t[12] = c),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `cloud-upload`: {
      let e;
      return (
        t[14] !== r || t[15] !== c
          ? ((e = (0, X.jsx)(Sn, { item: r, viewMode: c })), (t[14] = r), (t[15] = c), (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    case `image`: {
      let e;
      t[17] === r.image.desktopPath
        ? (e = t[18])
        : ((e = f(r.image.desktopPath)), (t[17] = r.image.desktopPath), (t[18] = e));
      let n;
      return (
        t[19] !== r || t[20] !== o || t[21] !== s || t[22] !== e || t[23] !== c
          ? ((n = (0, X.jsx)(Vn, { item: r, onEdit: o, onOpenPreview: s, src: e, viewMode: c })),
            (t[19] = r),
            (t[20] = o),
            (t[21] = s),
            (t[22] = e),
            (t[23] = c),
            (t[24] = n))
          : (n = t[24]),
        n
      );
    }
  }
}
var cr,
  X,
  lr = e(() => {
    ((cr = Ne()),
      R(),
      r(),
      Se(),
      k(),
      ln(),
      a(),
      tt(),
      Et(),
      jt(),
      A(),
      On(),
      Bn(),
      Un(),
      Yn(),
      b(),
      Qn(),
      Ht(),
      er(),
      (X = l()));
  });
function ur(e) {
  return { fsPath: e.path, label: e.name, path: e.path };
}
async function dr(e, t, n) {
  let r = await e.prepareFilePreview({ sourcePath: t });
  return n.aborted ? (await e.releaseFilePreview(r), n.throwIfAborted(), r) : r;
}
var fr = e(() => {});
function pr(e) {
  let t = (0, yr.c)(23),
    { cloudPreviewRenderer: n, item: r, onClose: i } = e;
  if (r.kind === `file`) {
    let e;
    return (
      t[0] !== r || t[1] !== i
        ? ((e = (0, Z.jsx)(hr, { item: r, onClose: i })), (t[0] = r), (t[1] = i), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (r.kind === `cloud-file`) {
    let e;
    return (
      t[3] !== n || t[4] !== r || t[5] !== i
        ? ((e =
            n == null
              ? (0, Z.jsx)(_r, {
                  assetName: r.cloudFile.name,
                  onClose: i,
                  children: (0, Z.jsx)(vr, {
                    children: (0, Z.jsx)(U, {
                      id: `appgenPage.cloudFilePreview.unavailable`,
                      defaultMessage: `This file can't be previewed`,
                      description: `Message shown when a cloud Library file preview renderer is unavailable`,
                    }),
                  }),
                })
              : n({ item: r, onClose: i })),
          (t[3] = n),
          (t[4] = r),
          (t[5] = i),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let a = r.image.name,
    o = r.image.name,
    s = r.image.path,
    c = r.image.path,
    l;
  t[7] === r.image.desktopPath
    ? (l = t[8])
    : ((l = f(r.image.desktopPath)), (t[7] = r.image.desktopPath), (t[8] = l));
  let u;
  t[9] !== r.image.name || t[10] !== r.image.path || t[11] !== l
    ? ((u = { image: { filename: o, id: s, localPath: c, src: l }, kind: `image` }),
      (t[9] = r.image.name),
      (t[10] = r.image.path),
      (t[11] = l),
      (t[12] = u))
    : (u = t[12]);
  let d = r.image.name,
    p;
  t[13] === r.image.desktopPath
    ? (p = t[14])
    : ((p = f(r.image.desktopPath)), (t[13] = r.image.desktopPath), (t[14] = p));
  let m;
  t[15] !== r.image.name || t[16] !== p
    ? ((m = (0, Z.jsx)(ut, {
        alt: d,
        inline: !0,
        open: !0,
        src: p,
        zoomControlsPlacement: `header`,
        onOpenChange: mr,
      })),
      (t[15] = r.image.name),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let h;
  return (
    t[18] !== r.image.name || t[19] !== i || t[20] !== u || t[21] !== m
      ? ((h = (0, Z.jsx)(gr, { assetName: a, previewAttachment: u, onClose: i, children: m })),
        (t[18] = r.image.name),
        (t[19] = i),
        (t[20] = u),
        (t[21] = m),
        (t[22] = h))
      : (h = t[22]),
    h
  );
}
function mr() {}
function hr(e) {
  let t = (0, yr.c)(21),
    { item: n, onClose: r } = e,
    { data: i, isError: a } = M(Sr, n.file.path),
    o = i?.previewPath,
    s,
    c;
  (t[0] === o
    ? ((s = t[1]), (c = t[2]))
    : ((s = () => {
        if (o != null)
          return () => {
            re.libraryFiles?.releaseFilePreview({ previewPath: o });
          };
      }),
      (c = [o]),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c)),
    (0, br.useEffect)(s, c));
  let l;
  t[3] === n.file.path ? (l = t[4]) : ((l = At(n.file.path)), (t[3] = n.file.path), (t[4] = l));
  let u = l,
    d;
  if (a) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(vr, {
          children: (0, Z.jsx)(U, {
            id: `appgenPage.filePreview.unavailable`,
            defaultMessage: `This file is unavailable`,
            description: `Message shown when a Library file can't be read securely for preview`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]),
      (d = e));
  } else if (o == null) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(vr, {
          children: (0, Z.jsx)(U, {
            id: `appgenPage.filePreview.loading`,
            defaultMessage: `Loading preview…`,
            description: `Loading message shown while preparing a Library file preview`,
          }),
        })),
        (t[6] = e))
      : (e = t[6]),
      (d = e));
  } else if (u == null) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(vr, {
          children: (0, Z.jsx)(U, {
            id: `appgenPage.filePreview.unsupported`,
            defaultMessage: `This file can't be previewed`,
            description: `Message shown when a Library file preview is unavailable`,
          }),
        })),
        (t[7] = e))
      : (e = t[7]),
      (d = e));
  } else {
    let e;
    (t[8] !== n.file.name || t[9] !== u.artifactType || t[10] !== u.importKind || t[11] !== o
      ? ((e = (0, Z.jsx)(Ke, {
          artifactType: u.artifactType,
          chromeMode: `standalone`,
          hostId: L,
          importKind: u.importKind,
          path: o,
          title: n.file.name,
        })),
        (t[8] = n.file.name),
        (t[9] = u.artifactType),
        (t[10] = u.importKind),
        (t[11] = o),
        (t[12] = e))
      : (e = t[12]),
      (d = e));
  }
  let f;
  t[13] !== n.file || t[14] !== o
    ? ((f = o == null ? void 0 : { file: ur(n.file), kind: `file` }),
      (t[13] = n.file),
      (t[14] = o),
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== d || t[17] !== n.file.name || t[18] !== r || t[19] !== f
      ? ((p = (0, Z.jsx)(gr, {
          assetName: n.file.name,
          previewAttachment: f,
          onClose: r,
          children: d,
        })),
        (t[16] = d),
        (t[17] = n.file.name),
        (t[18] = r),
        (t[19] = f),
        (t[20] = p))
      : (p = t[20]),
    p
  );
}
function gr(e) {
  let t = (0, yr.c)(12),
    { assetName: n, children: r, onClose: a, previewAttachment: o } = e,
    s = Te(),
    c = j(),
    l;
  t[0] !== c || t[1] !== a
    ? ((l = (e, t) => {
        (a(), c(i(e), { state: t }));
      }),
      (t[0] = c),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    f;
  t[3] !== u || t[4] !== s || t[5] !== o
    ? ((f =
        o == null
          ? null
          : (0, Z.jsx)(T, {
              scope: Re,
              value: d(o),
              children: (0, Z.jsx)($e, {
                children: (0, Z.jsx)(Ot, {
                  composerLayoutMode: `auto-single-line`,
                  composerModeAvailability: xr,
                  defaultCwd: `~`,
                  hideRunLocationDropdownOverride: !0,
                  onLocalConversationCreated: u,
                  placeholderText: s.formatMessage({
                    id: `appgenPage.filePreview.composerPlaceholder`,
                    defaultMessage: `Ask about this file`,
                    description: `Placeholder for the composer beneath a Library file preview`,
                  }),
                  showPlanKeywordSuggestion: !1,
                  showWorkspaceDropdownInFooter: !1,
                }),
              }),
            })),
      (t[3] = u),
      (t[4] = s),
      (t[5] = o),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== n || t[8] !== r || t[9] !== a || t[10] !== f
      ? ((p = (0, Z.jsx)(_r, { assetName: n, bottomContent: f, onClose: a, children: r })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = a),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function _r(e) {
  let t = (0, yr.c)(28),
    { assetName: n, bottomContent: r, children: i, endContent: a, onClose: o } = e,
    s = Te(),
    l;
  t[0] === o ? (l = t[1]) : ((l = () => o()), (t[0] = o), (t[1] = l));
  let d = (0, br.useEffectEvent)(l),
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = () => {
        let e = (e) => {
          e.key !== `Escape` || e.defaultPrevented || d();
        };
        return (
          window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e)
        );
      }),
      (t[2] = d),
      (t[3] = f));
  let p;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = []), (t[4] = p)) : (p = t[4]),
    (0, br.useEffect)(f, p));
  let m;
  t[5] === s
    ? (m = t[6])
    : ((m = s.formatMessage({
        id: `appgenPage.filePreview.close`,
        defaultMessage: `Close preview`,
        description: `Accessible label for closing a Library file preview`,
      })),
      (t[5] = s),
      (t[6] = m));
  let h;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(w, { "aria-hidden": !0, className: `icon-xs` })), (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== o || t[9] !== m
    ? ((g = (0, Z.jsx)(u, {
        "aria-label": m,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: o,
        children: h,
      })),
      (t[8] = o),
      (t[9] = m),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === n
    ? (_ = t[12])
    : ((_ = (0, Z.jsx)(`div`, {
        className: `truncate text-sm font-medium text-token-foreground`,
        children: n,
      })),
      (t[11] = n),
      (t[12] = _));
  let v;
  t[13] !== g || t[14] !== _
    ? ((v = (0, Z.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [g, _] })),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== a || t[17] !== v
    ? ((y = (0, Z.jsxs)(`div`, {
        className: `flex h-toolbar shrink-0 items-center justify-between gap-4 border-b border-token-border-light px-3`,
        children: [v, a],
      })),
      (t[16] = a),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b = r == null ? `h-full` : `h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))]`,
    x;
  t[19] === b ? (x = t[20]) : ((x = c(`min-h-0`, b)), (t[19] = b), (t[20] = x));
  let S;
  t[21] !== i || t[22] !== x
    ? ((S = (0, Z.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, Z.jsx)(`div`, { className: x, children: i }),
      })),
      (t[21] = i),
      (t[22] = x),
      (t[23] = S))
    : (S = t[23]);
  let C;
  return (
    t[24] !== r || t[25] !== S || t[26] !== y
      ? ((C = (0, Z.jsxs)(`div`, {
          className: `relative flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [y, S, r],
        })),
        (t[24] = r),
        (t[25] = S),
        (t[26] = y),
        (t[27] = C))
      : (C = t[27]),
    C
  );
}
function vr(e) {
  let t = (0, yr.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, {
          className: `flex h-full items-center justify-center px-6 text-sm text-token-text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var yr,
  br,
  Z,
  xr,
  Sr,
  Cr = e(() => {
    ((yr = Ne()),
      R(),
      r(),
      pe(),
      (br = t(x(), 1)),
      Se(),
      Ee(),
      We(),
      kt(),
      k(),
      ct(),
      Dt(),
      O(),
      oe(),
      n(),
      s(),
      ae(),
      Qe(),
      A(),
      fr(),
      (Z = l()),
      (xr = {
        fallbackMode: `local`,
        isAvailabilityLoading: !1,
        isCloudAvailable: !1,
        isLocalAvailable: !0,
        isWorktreeAvailable: !1,
      }),
      (Sr = ve(P, (e) => ({
        gcTime: 0,
        queryKey: [`library-file-preview`, e],
        queryFn: ({ signal: t }) => {
          let n = re.libraryFiles;
          if (n == null) throw Error(`Library file previews are unavailable`);
          return dr(n, e, t);
        },
        refetchOnMount: `always`,
        retry: !1,
        staleTime: 0,
      }))));
  }),
  wr,
  Tr,
  Er = e(() => {
    (t(x()),
      (wr = l()),
      (Tr = (e) =>
        (0, wr.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 24,
          height: 24,
          fill: `none`,
          viewBox: `0 0 24 24`,
          ...e,
          children: [
            (0, wr.jsx)(`path`, {
              fill: `#43D0FB`,
              d: `M7 21.005c-2.211 0-4-1.789-4-4v-10c0-2.211 1.789-4 4-4h10c2.211 0 4 1.789 4 4v10c0 2.211-1.789 4-4 4H7Z`,
            }),
            (0, wr.jsx)(`path`, {
              fill: `#FFF282`,
              d: `M17.744 9.116a2.845 2.845 0 0 1-2.855 2.844 2.836 2.836 0 0 1-2.845-2.844A2.845 2.845 0 0 1 14.89 6.26a2.855 2.855 0 0 1 2.855 2.856Z`,
            }),
            (0, wr.jsx)(`path`, {
              fill: `#A6F546`,
              d: `M5.533 12.682c1.367-1.366 3.134-1.366 4.5 0l8.153 8.144a4.007 4.007 0 0 1-1.186.179H7c-2.211 0-4-1.79-4-4v-2.072l2.533-2.25Z`,
            }),
          ],
        })));
  }),
  Dr,
  Or,
  kr = e(() => {
    (t(x()),
      (Dr = l()),
      (Or = (e) =>
        (0, Dr.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 24,
          height: 24,
          fill: `none`,
          viewBox: `0 0 24 24`,
          ...e,
          children: [
            (0, Dr.jsx)(`path`, {
              fill: `#43D0FB`,
              d: `M7 21.005c-2.211 0-4-1.789-4-4v-10c0-2.211 1.789-4 4-4h10c2.211 0 4 1.789 4 4v10c0 2.211-1.789 4-4 4H7Z`,
            }),
            (0, Dr.jsx)(`path`, {
              fill: `#FFF6DD`,
              d: `M17.744 9.116a2.845 2.845 0 0 1-2.855 2.844 2.836 2.836 0 0 1-2.845-2.844A2.845 2.845 0 0 1 14.89 6.26a2.855 2.855 0 0 1 2.855 2.856Z`,
            }),
            (0, Dr.jsx)(`path`, {
              fill: `#FFDE83`,
              d: `M5.533 12.682c1.367-1.366 3.134-1.366 4.5 0l8.153 8.144a4.007 4.007 0 0 1-1.186.179H7c-2.211 0-4-1.79-4-4v-2.072l2.533-2.25Z`,
            }),
          ],
        })));
  }),
  Ar,
  jr,
  Mr = e(() => {
    (t(x()),
      (Ar = l()),
      (jr = (e) =>
        (0, Ar.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          ...e,
          children: [
            (0, Ar.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M5.93152 8.88086C6.62157 8.881 7.18122 9.44085 7.18152 10.1309V13.2646C7.18138 13.9548 6.62167 14.5145 5.93152 14.5146H2.79773C2.10755 14.5145 1.54787 13.9548 1.54773 13.2646V10.1309C1.54803 9.44083 2.10765 8.88096 2.79773 8.88086H5.93152ZM2.79773 9.78125C2.60471 9.78136 2.44842 9.93788 2.44812 10.1309V13.2646C2.44826 13.4578 2.60461 13.6142 2.79773 13.6143H5.93152C6.12461 13.6141 6.28099 13.4577 6.28113 13.2646V10.1309C6.28083 9.9379 6.12451 9.78139 5.93152 9.78125H2.79773Z`,
              fill: `currentColor`,
            }),
            (0, Ar.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M13.2665 8.87988C13.9565 8.88002 14.5162 9.43984 14.5165 10.1299V13.2637C14.5163 13.9538 13.9566 14.5135 13.2665 14.5137H10.1327C9.44271 14.5133 8.88283 13.9537 8.88269 13.2637V10.1299C8.88296 9.43996 9.44279 8.88022 10.1327 8.87988H13.2665ZM10.1327 9.78027C9.93984 9.78061 9.78335 9.93702 9.78308 10.1299V13.2637C9.78322 13.4566 9.93976 13.6129 10.1327 13.6133H13.2665C13.4596 13.6131 13.6159 13.4568 13.6161 13.2637V10.1299C13.6158 9.9369 13.4595 9.78041 13.2665 9.78027H10.1327Z`,
              fill: `currentColor`,
            }),
            (0, Ar.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M5.93152 1.54785C6.62167 1.54799 7.18138 2.1077 7.18152 2.79785V5.93164C7.18138 6.62179 6.62167 7.1815 5.93152 7.18164H2.79773C2.10755 7.18154 1.54787 6.62181 1.54773 5.93164V2.79785C1.54787 2.10768 2.10755 1.54796 2.79773 1.54785H5.93152ZM2.79773 2.44824C2.6046 2.44835 2.44826 2.60474 2.44812 2.79785V5.93164C2.44826 6.12476 2.60461 6.28114 2.79773 6.28125H5.93152C6.12461 6.28111 6.28099 6.12473 6.28113 5.93164V2.79785C6.28099 2.60476 6.12461 2.44838 5.93152 2.44824H2.79773Z`,
              fill: `currentColor`,
            }),
            (0, Ar.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M13.2665 1.54688C13.9567 1.54702 14.5164 2.1067 14.5165 2.79688V5.93066C14.5163 6.62081 13.9566 7.18052 13.2665 7.18066H10.1327C9.44271 7.18033 8.88283 6.62069 8.88269 5.93066V2.79688C8.8828 2.10682 9.44269 1.54721 10.1327 1.54688H13.2665ZM10.1327 2.44727C9.93974 2.4476 9.78319 2.60387 9.78308 2.79688V5.93066C9.78322 6.12364 9.93976 6.27994 10.1327 6.28027H13.2665C13.4596 6.28013 13.6159 6.12376 13.6161 5.93066V2.79688C13.616 2.60375 13.4596 2.44741 13.2665 2.44727H10.1327Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  Nr,
  Pr,
  Fr = e(() => {
    (t(x()),
      (Nr = l()),
      (Pr = (e) =>
        (0, Nr.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          ...e,
          children: [
            (0, Nr.jsx)(`path`, {
              d: `M13.3336 11.4766C13.6234 11.4767 13.858 11.7121 13.858 12.002C13.8579 12.2917 13.6233 12.5272 13.3336 12.5273H6.66663C6.37678 12.5273 6.1414 12.2918 6.14124 12.002C6.14124 11.712 6.37668 11.4766 6.66663 11.4766H13.3336Z`,
              fill: `currentColor`,
            }),
            (0, Nr.jsx)(`path`, {
              d: `M3.07874 10.9844C3.50002 10.9844 3.84226 11.3258 3.84241 11.7471C3.84241 12.1684 3.50011 12.5107 3.07874 12.5107C2.65748 12.5106 2.31604 12.1684 2.31604 11.7471C2.31619 11.3259 2.65758 10.9845 3.07874 10.9844Z`,
              fill: `currentColor`,
            }),
            (0, Nr.jsx)(`path`, {
              d: `M13.3336 7.47656C13.6234 7.47674 13.858 7.71211 13.858 8.00195C13.8579 8.29165 13.6233 8.52717 13.3336 8.52734H6.66663C6.37678 8.52734 6.1414 8.29176 6.14124 8.00195C6.14124 7.712 6.37668 7.47656 6.66663 7.47656H13.3336Z`,
              fill: `currentColor`,
            }),
            (0, Nr.jsx)(`path`, {
              d: `M3.07874 6.98438C3.50002 6.98438 3.84226 7.32582 3.84241 7.74707C3.84241 8.16845 3.50011 8.51074 3.07874 8.51074C2.65748 8.51059 2.31604 8.16836 2.31604 7.74707C2.31619 7.32591 2.65758 6.98452 3.07874 6.98438Z`,
              fill: `currentColor`,
            }),
            (0, Nr.jsx)(`path`, {
              d: `M13.3336 3.47656C13.6234 3.47674 13.858 3.71211 13.858 4.00195C13.8579 4.29165 13.6233 4.52717 13.3336 4.52734H6.66663C6.37678 4.52734 6.1414 4.29176 6.14124 4.00195C6.14124 3.712 6.37668 3.47656 6.66663 3.47656H13.3336Z`,
              fill: `currentColor`,
            }),
            (0, Nr.jsx)(`path`, {
              d: `M3.07874 2.98438C3.50002 2.98438 3.84226 3.32582 3.84241 3.74707C3.84241 4.16845 3.50011 4.51074 3.07874 4.51074C2.65748 4.51059 2.31604 4.16836 2.31604 3.74707C2.31619 3.32591 2.65758 2.98452 3.07874 2.98438Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function Ir(e) {
  let t = (0, Vr.c)(26),
    {
      accessFilter: n,
      contentType: r,
      fileFilter: i,
      onAccessFilterChange: a,
      onContentTypeChange: o,
      onFileFilterChange: s,
      onViewModeChange: c,
      viewMode: l,
    } = e,
    u = Te(),
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u.formatMessage({
        id: `appgenPage.type.ariaLabel`,
        defaultMessage: `Library type`,
        description: `Accessible label for filtering Library content by type`,
      })),
      (t[0] = u),
      (t[1] = d));
  let f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = {
        id: `all`,
        label: (0, Q.jsx)(U, {
          id: `appgenPage.type.all`,
          defaultMessage: `All`,
          description: `Library tab that shows every content type`,
        }),
      }),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = {
        id: `sites`,
        label: (0, Q.jsx)(U, {
          id: `appgenPage.type.sites`,
          defaultMessage: `Sites`,
          description: `Library tab that shows sites`,
        }),
      }),
      (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = {
        id: `files`,
        label: (0, Q.jsx)(U, {
          id: `appgenPage.type.files`,
          defaultMessage: `Files`,
          description: `Library tab that shows output files`,
        }),
      }),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = [
        f,
        p,
        m,
        {
          id: `images`,
          label: (0, Q.jsx)(U, {
            id: `appgenPage.type.images`,
            defaultMessage: `Images`,
            description: `Library tab that shows generated images`,
          }),
        },
      ]),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] !== r || t[7] !== o || t[8] !== d
    ? ((g = (0, Q.jsx)(gn, {
        ariaLabel: d,
        options: h,
        selectedId: r,
        size: `toolbar`,
        onSelect: o,
      })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = d),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== n || t[11] !== r || t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== s
    ? ((_ = (0, Q.jsx)(Lr, {
        accessFilter: n,
        contentType: r,
        fileFilter: i,
        onAccessFilterChange: a,
        onContentTypeChange: o,
        onFileFilterChange: s,
      })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = i),
      (t[13] = a),
      (t[14] = o),
      (t[15] = s),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== c || t[18] !== l
    ? ((v = (0, Q.jsx)(Br, { viewMode: l, onViewModeChange: c })),
      (t[17] = c),
      (t[18] = l),
      (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] !== _ || t[21] !== v
    ? ((y = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [_, v] })),
      (t[20] = _),
      (t[21] = v),
      (t[22] = y))
    : (y = t[22]);
  let b;
  return (
    t[23] !== g || t[24] !== y
      ? ((b = (0, Q.jsxs)(Lt, { children: [g, y] })), (t[23] = g), (t[24] = y), (t[25] = b))
      : (b = t[25]),
    b
  );
}
function Lr(e) {
  let t = (0, Vr.c)(19),
    {
      accessFilter: n,
      contentType: r,
      fileFilter: i,
      onAccessFilterChange: a,
      onContentTypeChange: o,
      onFileFilterChange: s,
    } = e,
    c = Te(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `appgenPage.filter.libraryAriaLabel`,
        defaultMessage: `Filter library`,
        description: `Accessible label for the Library filter dropdown`,
      })),
      (t[0] = c),
      (t[1] = l));
  let d = (r === `sites` && n !== `all`) || r !== `all` || i !== `all` ? `secondary` : `ghost`,
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(vn, { "aria-hidden": !0, className: `icon-sm text-token-text-secondary` })),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== l || t[4] !== d
    ? ((p = (0, Q.jsx)(u, {
        "aria-label": l,
        color: d,
        size: `toolbar`,
        uniform: !0,
        children: f,
      })),
      (t[3] = l),
      (t[4] = d),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] !== r || t[7] !== i || t[8] !== o || t[9] !== s
    ? ((m = (0, Q.jsx)(zr, {
        contentType: r,
        fileFilter: i,
        onContentTypeChange: o,
        onFileFilterChange: s,
      })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s),
      (t[10] = m))
    : (m = t[10]);
  let g;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((g =
        r === `sites`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(H.Separator, {}),
                (0, Q.jsx)(Rr, { accessFilter: n, onAccessFilterChange: a }),
              ],
            })
          : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== p || t[16] !== m || t[17] !== g
      ? ((_ = (0, Q.jsxs)(h, {
          align: `end`,
          contentWidth: `menuNarrow`,
          triggerButton: p,
          children: [m, g],
        })),
        (t[15] = p),
        (t[16] = m),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function Rr(e) {
  let t = (0, Vr.c)(23),
    { accessFilter: n, onAccessFilterChange: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(H.Title, {
        children: (0, Q.jsx)(U, {
          id: `appgenPage.filter.access`,
          defaultMessage: `Access`,
          description: `Heading for site access filters in the Library`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a = n === `all` ? W : void 0,
    o;
  t[1] === r ? (o = t[2]) : ((o = () => r(`all`)), (t[1] = r), (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(U, {
        id: `appgenPage.filter.all`,
        defaultMessage: `All`,
        description: `Filter option that shows all sites`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== a || t[5] !== o
    ? ((c = (0, Q.jsx)(H.Item, { RightIcon: a, onSelect: o, children: s })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let l = n === `private` ? W : void 0,
    u;
  t[7] === r ? (u = t[8]) : ((u = () => r(`private`)), (t[7] = r), (t[8] = u));
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(U, {
        id: `appgenPage.filter.private`,
        defaultMessage: `Private`,
        description: `Filter option that shows private sites`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== l || t[11] !== u
    ? ((f = (0, Q.jsx)(H.Item, { RightIcon: l, onSelect: u, children: d })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = f))
    : (f = t[12]);
  let p = n === `shared` ? W : void 0,
    m;
  t[13] === r ? (m = t[14]) : ((m = () => r(`shared`)), (t[13] = r), (t[14] = m));
  let h;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(U, {
        id: `appgenPage.filter.shared`,
        defaultMessage: `Shared`,
        description: `Filter option that shows shared sites`,
      })),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== p || t[17] !== m
    ? ((g = (0, Q.jsx)(H.Item, { RightIcon: p, onSelect: m, children: h })),
      (t[16] = p),
      (t[17] = m),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== g || t[20] !== c || t[21] !== f
      ? ((_ = (0, Q.jsxs)(Q.Fragment, { children: [i, c, f, g] })),
        (t[19] = g),
        (t[20] = c),
        (t[21] = f),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
function zr(e) {
  let t = (0, Vr.c)(55),
    { contentType: n, fileFilter: r, onContentTypeChange: i, onFileFilterChange: a } = e,
    o = Pe() ? Tr : Or,
    s;
  t[0] !== i || t[1] !== a
    ? ((s = (e) => {
        (i(`all`), a(e));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(H.Title, {
        children: (0, Q.jsx)(U, {
          id: `appgenPage.filter.library`,
          defaultMessage: `View`,
          description: `Heading for content filters in the Library`,
        }),
      })),
      (t[3] = l))
    : (l = t[3]);
  let u = n === `all` && r === `all` ? W : void 0,
    d;
  t[4] === c ? (d = t[5]) : ((d = () => c(`all`)), (t[4] = c), (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(U, {
        id: `appgenPage.filter.allFiles`,
        defaultMessage: `All`,
        description: `Filter option that shows every Library item`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== u || t[8] !== d
    ? ((p = (0, Q.jsx)(H.Item, { LeftIcon: et, RightIcon: u, onSelect: d, children: f })),
      (t[7] = u),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m = n === `sites` ? W : void 0,
    h;
  t[10] === i ? (h = t[11]) : ((h = () => i(`sites`)), (t[10] = i), (t[11] = h));
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(U, {
        id: `appgenPage.filter.sites`,
        defaultMessage: `Sites`,
        description: `Filter option that shows sites in the Library`,
      })),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== m || t[14] !== h
    ? ((_ = (0, Q.jsx)(H.Item, { LeftIcon: rt, RightIcon: m, onSelect: h, children: g })),
      (t[13] = m),
      (t[14] = h),
      (t[15] = _))
    : (_ = t[15]);
  let v = n === `images` ? W : void 0,
    y;
  t[16] === i ? (y = t[17]) : ((y = () => i(`images`)), (t[16] = i), (t[17] = y));
  let b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(U, {
        id: `appgenPage.filter.images`,
        defaultMessage: `Images`,
        description: `Filter option that shows images in the Library`,
      })),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== o || t[20] !== v || t[21] !== y
    ? ((x = (0, Q.jsx)(H.Item, { LeftIcon: o, RightIcon: v, onSelect: y, children: b })),
      (t[19] = o),
      (t[20] = v),
      (t[21] = y),
      (t[22] = x))
    : (x = t[22]);
  let S = n === `all` && r === `document` ? W : void 0,
    C;
  t[23] === c ? (C = t[24]) : ((C = () => c(`document`)), (t[23] = c), (t[24] = C));
  let w;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(U, {
        id: `appgenPage.filter.documents`,
        defaultMessage: `Documents`,
        description: `Filter option that shows documents in the Library`,
      })),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] !== S || t[27] !== C
    ? ((T = (0, Q.jsx)(H.Item, { LeftIcon: xe, RightIcon: S, onSelect: C, children: w })),
      (t[26] = S),
      (t[27] = C),
      (t[28] = T))
    : (T = t[28]);
  let E = n === `all` && r === `spreadsheet` ? W : void 0,
    D;
  t[29] === c ? (D = t[30]) : ((D = () => c(`spreadsheet`)), (t[29] = c), (t[30] = D));
  let O;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(U, {
        id: `appgenPage.filter.spreadsheets`,
        defaultMessage: `Spreadsheets`,
        description: `Filter option that shows spreadsheets in the Library`,
      })),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== E || t[33] !== D
    ? ((k = (0, Q.jsx)(H.Item, { LeftIcon: de, RightIcon: E, onSelect: D, children: O })),
      (t[32] = E),
      (t[33] = D),
      (t[34] = k))
    : (k = t[34]);
  let A = n === `all` && r === `presentation` ? W : void 0,
    j;
  t[35] === c ? (j = t[36]) : ((j = () => c(`presentation`)), (t[35] = c), (t[36] = j));
  let M;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(U, {
        id: `appgenPage.filter.presentations`,
        defaultMessage: `Presentations`,
        description: `Filter option that shows presentations in the Library`,
      })),
      (t[37] = M))
    : (M = t[37]);
  let N;
  t[38] !== A || t[39] !== j
    ? ((N = (0, Q.jsx)(H.Item, { LeftIcon: Be, RightIcon: A, onSelect: j, children: M })),
      (t[38] = A),
      (t[39] = j),
      (t[40] = N))
    : (N = t[40]);
  let P = n === `all` && r === `pdf` ? W : void 0,
    F;
  t[41] === c ? (F = t[42]) : ((F = () => c(`pdf`)), (t[41] = c), (t[42] = F));
  let ee;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Q.jsx)(U, {
        id: `appgenPage.filter.pdfs`,
        defaultMessage: `PDFs`,
        description: `Filter option that shows PDFs in the Library`,
      })),
      (t[43] = ee))
    : (ee = t[43]);
  let I;
  t[44] !== P || t[45] !== F
    ? ((I = (0, Q.jsx)(H.Item, { LeftIcon: ze, RightIcon: P, onSelect: F, children: ee })),
      (t[44] = P),
      (t[45] = F),
      (t[46] = I))
    : (I = t[46]);
  let te;
  return (
    t[47] !== _ ||
    t[48] !== x ||
    t[49] !== T ||
    t[50] !== k ||
    t[51] !== N ||
    t[52] !== I ||
    t[53] !== p
      ? ((te = (0, Q.jsxs)(Q.Fragment, { children: [l, p, _, x, T, k, N, I] })),
        (t[47] = _),
        (t[48] = x),
        (t[49] = T),
        (t[50] = k),
        (t[51] = N),
        (t[52] = I),
        (t[53] = p),
        (t[54] = te))
      : (te = t[54]),
    te
  );
}
function Br(e) {
  let t = (0, Vr.c)(20),
    { onViewModeChange: n, viewMode: r } = e,
    i = Te(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `appgenPage.view.list`,
        defaultMessage: `List view`,
        description: `Accessible label for showing Library items in a list`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o = a,
    s;
  t[2] === i
    ? (s = t[3])
    : ((s = i.formatMessage({
        id: `appgenPage.view.grid`,
        defaultMessage: `Grid view`,
        description: `Accessible label for showing Library items in a grid`,
      })),
      (t[2] = i),
      (t[3] = s));
  let c = s,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = i.formatMessage({
        id: `appgenPage.view.ariaLabel`,
        defaultMessage: `Library view`,
        description: `Accessible label for the Library view selector`,
      })),
      (t[4] = i),
      (t[5] = l));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(Pr, { "aria-hidden": !0, className: `icon-xs` })), (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === o
    ? (d = t[8])
    : ((d = { id: `list`, ariaLabel: o, label: u, tooltipContent: o }), (t[7] = o), (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(jr, { "aria-hidden": !0, className: `icon-xs` })), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === c
    ? (p = t[11])
    : ((p = { id: `grid`, ariaLabel: c, label: f, tooltipContent: c }), (t[10] = c), (t[11] = p));
  let m;
  t[12] !== d || t[13] !== p ? ((m = [d, p]), (t[12] = d), (t[13] = p), (t[14] = m)) : (m = t[14]);
  let h;
  return (
    t[15] !== n || t[16] !== l || t[17] !== m || t[18] !== r
      ? ((h = (0, Q.jsx)(gn, {
          ariaLabel: l,
          className: `justify-self-end`,
          options: m,
          selectedId: r,
          size: `toolbar`,
          uniform: !0,
          onSelect: n,
        })),
        (t[15] = n),
        (t[16] = l),
        (t[17] = m),
        (t[18] = r),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
var Vr,
  Q,
  Hr = e(() => {
    ((Vr = Ne()),
      Se(),
      k(),
      le(),
      It(),
      hn(),
      ne(),
      Er(),
      kr(),
      te(),
      me(),
      Le(),
      ye(),
      _n(),
      Mr(),
      Ze(),
      Fr(),
      it(),
      De(),
      (Q = l()));
  });
function Ur(e) {
  let t = (0, oi.c)(133),
    {
      cloudFilesApi: n,
      cloudFileThumbnailResolver: r,
      cloudFileUploader: i,
      cloudPreviewRenderer: a,
      localSourcesEnabled: o,
    } = e,
    s = o === void 0 ? !0 : o,
    c = p(E),
    l = Te(),
    d = j(),
    [f, m] = (0, si.useState)(``),
    { scrollContainerRef: h, showTitleInToolbar: g, titleRef: _ } = Bt(),
    [v, y] = (0, si.useState)(`list`),
    [b, x] = (0, si.useState)(`all`),
    [S, C] = (0, si.useState)(`all`),
    [w, T] = (0, si.useState)(`all`),
    [D, O] = (0, si.useState)(null),
    [k, A] = (0, si.useState)(0),
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = []), (t[0] = M)) : (M = t[0]);
  let [N, P] = (0, si.useState)(M),
    F = (0, si.useRef)(null),
    I = s && (S === `sites` || (S === `all` && w === `all`)),
    te = s && (S === `files` || S === `all`),
    ne = s && (S === `images` || (S === `all` && w === `all`)),
    re;
  t[1] !== S || t[2] !== w ? ((re = ti(S, w)), (t[1] = S), (t[2] = w), (t[3] = re)) : (re = t[3]);
  let L = re,
    ie;
  t[4] === f ? (ie = t[5]) : ((ie = f.trim()), (t[4] = f), (t[5] = ie));
  let ae = Me(ie, 300),
    R;
  t[6] !== S || t[7] !== ae || t[8] !== w
    ? ((R = [`appgen-library-cloud-files`, S, w, ae]),
      (t[6] = S),
      (t[7] = ae),
      (t[8] = w),
      (t[9] = R))
    : (R = t[9]);
  let oe;
  t[10] !== L || t[11] !== n || t[12] !== ae
    ? ((oe = (e) => {
        let { pageParam: t } = e;
        if (n == null || L === void 0) throw Error(`Cloud Library files are unavailable`);
        return n.search({ categories: L, cursor: t, limit: ci, query: ae });
      }),
      (t[10] = L),
      (t[11] = n),
      (t[12] = ae),
      (t[13] = oe))
    : (oe = t[13]);
  let ce = n != null && L !== void 0,
    le;
  t[14] !== R || t[15] !== oe || t[16] !== ce
    ? ((le = {
        queryKey: R,
        initialPageParam: null,
        queryFn: oe,
        enabled: ce,
        getNextPageParam: $r,
        retry: !1,
        select: Zr,
        staleTime: fe.FIVE_SECONDS,
      }),
      (t[14] = R),
      (t[15] = oe),
      (t[16] = ce),
      (t[17] = le))
    : (le = t[17]);
  let z = Ce(le),
    ue;
  t[18] !== L || t[19] !== n || t[20] !== z
    ? ((ue =
        n == null || L === void 0
          ? void 0
          : {
              files: z.data,
              fetchNextPage: z.fetchNextPage,
              hasLoadError: z.isError || z.isFetchNextPageError,
              hasNextPage: z.hasNextPage === !0 && !z.isFetchNextPageError,
              isEnabled: !0,
              isFetchingNextPage: z.isFetchingNextPage,
              isLoading: z.isLoading,
              isRefetching: z.isRefetching,
              refetch: z.refetch,
            }),
      (t[18] = L),
      (t[19] = n),
      (t[20] = z),
      (t[21] = ue))
    : (ue = t[21]);
  let de = ue,
    B = i != null && n != null && L !== void 0,
    V = N.length > 0,
    { setSelectedMode: pe } = vt(),
    me = ee(),
    he,
    ge;
  (t[22] === c
    ? ((he = t[23]), (ge = t[24]))
    : ((he = () => () => {
        (c.set(Xe, !1), Je(c, !1));
      }),
      (ge = [c]),
      (t[22] = c),
      (t[23] = he),
      (t[24] = ge)),
    (0, si.useLayoutEffect)(he, ge));
  let _e;
  t[25] !== c || t[26] !== pe || t[27] !== me
    ? ((_e = () => {
        tn(c, me, { type: `create`, setSelectedMode: pe });
      }),
      (t[25] = c),
      (t[26] = pe),
      (t[27] = me),
      (t[28] = _e))
    : (_e = t[28]);
  let ve = _e,
    ye;
  t[29] !== c || t[30] !== me
    ? ((ye = (e) => {
        tn(c, me, { type: `create-asset`, assetType: e });
      }),
      (t[29] = c),
      (t[30] = me),
      (t[31] = ye))
    : (ye = t[31]);
  let be = ye,
    xe;
  t[32] !== c || t[33] !== me
    ? ((xe = (e, t, n) => {
        tn(c, me, { type: `edit`, liveUrl: n, projectId: e, projectTitle: t });
      }),
      (t[32] = c),
      (t[33] = me),
      (t[34] = xe))
    : (xe = t[34]);
  let Se = xe,
    we;
  t[35] !== d || t[36] !== c
    ? ((we = (e) => {
        nn(c, d, e.file.name, e.file.path, e.file.threadId);
      }),
      (t[35] = d),
      (t[36] = c),
      (t[37] = we))
    : (we = t[37]);
  let Ee = we,
    De;
  t[38] !== d || t[39] !== c
    ? ((De = (e) => {
        nn(c, d, e.image.name, e.image.path, e.image.threadId);
      }),
      (t[38] = d),
      (t[39] = c),
      (t[40] = De))
    : (De = t[40]);
  let Oe = De,
    ke;
  t[41] === c
    ? (ke = t[42])
    : ((ke = (e) => {
        (O(e), c.set(Xe, !0), Je(c, !0));
      }),
      (t[41] = c),
      (t[42] = ke));
  let Ae = ke,
    je;
  t[43] === c
    ? (je = t[44])
    : ((je = () => {
        (O(null), c.set(Xe, !1), Je(c, !1));
      }),
      (t[43] = c),
      (t[44] = je));
  let Ne = je,
    H;
  t[45] !== B || t[46] !== V
    ? ((H = (e) => {
        if (!(!B || !lt(e.dataTransfer))) {
          if ((e.preventDefault(), e.stopPropagation(), V)) {
            e.dataTransfer.dropEffect = `none`;
            return;
          }
          ((e.dataTransfer.dropEffect = `copy`), A(Xr));
        }
      }),
      (t[45] = B),
      (t[46] = V),
      (t[47] = H))
    : (H = t[47]);
  let Pe = H,
    Fe;
  t[48] !== B || t[49] !== V
    ? ((Fe = (e) => {
        !B ||
          !lt(e.dataTransfer) ||
          (e.preventDefault(),
          e.stopPropagation(),
          (e.dataTransfer.dropEffect = V ? `none` : `copy`));
      }),
      (t[48] = B),
      (t[49] = V),
      (t[50] = Fe))
    : (Fe = t[50]);
  let Le = Fe,
    W;
  t[51] === B
    ? (W = t[52])
    : ((W = (e) => {
        !B || !lt(e.dataTransfer) || A(Yr);
      }),
      (t[51] = B),
      (t[52] = W));
  let Re = W,
    ze,
    Be;
  if (
    t[53] !== B ||
    t[54] !== i ||
    t[55] !== z ||
    t[56] !== S ||
    t[57] !== ae ||
    t[58] !== w ||
    t[59] !== l ||
    t[60] !== V ||
    t[61] !== c
  ) {
    ((ze = (t) => {
      if (!B || !lt(t.dataTransfer) || (t.preventDefault(), t.stopPropagation(), A(0), V)) return;
      let n = ei(t.dataTransfer);
      n.length > 0 && e(n);
    }),
      (Be = (t) => {
        let n = Array.from(t.currentTarget.files ?? []);
        ((t.currentTarget.value = ``), !(n.length === 0 || V) && e(n));
      }));
    let e = async (e) => {
      if (i == null) return;
      let t = e.map(Jr);
      P(t);
      let n = 0,
        r = 0,
        a = [];
      for (let [o, s] of e.entries()) {
        let e = t[o];
        try {
          let t = await i(s);
          if (
            ((r += 1), e != null && $t({ contentType: S, file: e, fileFilter: w, searchQuery: ae }))
          ) {
            (a.push(t.fileId),
              P((n) => n.map((n) => (n.id === e.id ? { ...n, uploadedFileId: t.fileId } : n))));
            continue;
          }
          e != null && P((t) => t.filter((t) => t.id !== e.id));
        } catch {
          ((n += 1), P((t) => t.filter((t) => t.id !== e?.id)));
        }
      }
      let o = a.length === 0;
      if (a.length > 0) {
        let e = new Set(a);
        for (let t = 0; t < ui; t += 1) {
          let t = await z.refetch(),
            n = new Set((t.data ?? []).map(qr).filter((t) => e.has(t))),
            r = Math.min(a.length, Math.max(t.data?.length ?? 0, ci)),
            i = n.size >= r,
            s = i ? e : n;
          if (
            (P((e) => e.filter((e) => e.uploadedFileId == null || !s.has(e.uploadedFileId))), i)
          ) {
            o = !0;
            break;
          }
          await new Promise(Kr);
        }
      } else r > 0 && (await z.refetch(), (o = !0));
      if ((o || P(Wr), n === 0)) {
        if (!o) {
          c.get(Ie).warning(
            l.formatMessage({
              id: `appgenPage.cloudUpload.delayed`,
              defaultMessage: `Upload complete. Files may take a moment to appear`,
              description: `Toast shown when cloud Library uploads finish but the uploaded files are not visible in the refreshed Library list yet`,
            }),
          );
          return;
        }
        c.get(Ie).success(
          l.formatMessage(
            {
              id: `appgenPage.cloudUpload.success`,
              defaultMessage: `{count, plural, one {Added # file to Library} other {Added # files to Library}}`,
              description: `Toast shown after files are successfully uploaded to cloud Library`,
            },
            { count: r },
          ),
        );
        return;
      }
      if (r > 0) {
        c.get(Ie).warning(
          l.formatMessage(
            {
              id: `appgenPage.cloudUpload.partialFailure`,
              defaultMessage: `{uploadedCount, plural, one {Added # file} other {Added # files}}, {failedCount} failed`,
              description: `Toast shown after a cloud Library upload partially succeeds`,
            },
            { failedCount: n, uploadedCount: r },
          ),
        );
        return;
      }
      c.get(Ie).danger(
        l.formatMessage({
          id: `appgenPage.cloudUpload.failure`,
          defaultMessage: `Unable to upload files`,
          description: `Toast shown when every cloud Library upload fails`,
        }),
      );
    };
    ((t[53] = B),
      (t[54] = i),
      (t[55] = z),
      (t[56] = S),
      (t[57] = ae),
      (t[58] = w),
      (t[59] = l),
      (t[60] = V),
      (t[61] = c),
      (t[62] = ze),
      (t[63] = Be));
  } else ((ze = t[62]), (Be = t[63]));
  let Ve;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (e) => {
        (C(e), T(`all`));
      }),
      (t[64] = Ve))
    : (Ve = t[64]);
  let He = Ve,
    We;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => {
        (C(`all`), T(e));
      }),
      (t[65] = We))
    : (We = t[65]);
  let Ge = We,
    Ke;
  t[66] !== B || t[67] !== Be || t[68] !== l || t[69] !== V
    ? ((Ke = B
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`input`, {
                ref: F,
                "aria-label": l.formatMessage({
                  id: `appgenPage.cloudUpload.inputLabel`,
                  defaultMessage: `Upload library files`,
                  description: `Accessible label for the hidden cloud Library file upload input`,
                }),
                className: `hidden`,
                disabled: V,
                multiple: !0,
                type: `file`,
                onChange: Be,
              }),
              (0, $.jsxs)(u, {
                color: `outline`,
                disabled: V,
                size: `toolbar`,
                onClick: () => {
                  F.current?.click();
                },
                children: [
                  (0, $.jsx)(wt, { className: `icon-sm` }),
                  (0, $.jsx)(U, {
                    id: `appgenPage.cloudUpload.button`,
                    defaultMessage: `Upload`,
                    description: `Button label for uploading files to the cloud Library`,
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[66] = B),
      (t[67] = Be),
      (t[68] = l),
      (t[69] = V),
      (t[70] = Ke))
    : (Ke = t[70]);
  let qe = Ke,
    Ye;
  t[71] !== de ||
  t[72] !== qe ||
  t[73] !== ve ||
  t[74] !== be ||
  t[75] !== te ||
  t[76] !== ne ||
  t[77] !== I ||
  t[78] !== g
    ? ((Ye = (0, $.jsx)(ri, {
        cloudSource: de,
        cloudUploadAction: qe,
        showTitle: g,
        showFiles: te,
        showImages: ne,
        showSites: I,
        onCreateAsset: be,
        onCreateSite: ve,
      })),
      (t[71] = de),
      (t[72] = qe),
      (t[73] = ve),
      (t[74] = be),
      (t[75] = te),
      (t[76] = ne),
      (t[77] = I),
      (t[78] = g),
      (t[79] = Ye))
    : (Ye = t[79]);
  let Ze = Ye,
    Qe;
  t[80] === l
    ? (Qe = t[81])
    : ((Qe = l.formatMessage({
        id: `appgenPage.search`,
        defaultMessage: `Search library`,
        description: `Accessible label and placeholder for searching the Library`,
      })),
      (t[80] = l),
      (t[81] = Qe));
  let $e = Qe,
    et;
  t[82] === Ze
    ? (et = t[83])
    : ((et = (0, $.jsx)(se, { extension: !0, children: Ze })), (t[82] = Ze), (t[83] = et));
  let tt;
  t[84] === Ze
    ? (tt = t[85])
    : ((tt = (0, $.jsx)(se, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(Ue.Header, { children: Ze }),
      })),
      (t[84] = Ze),
      (t[85] = tt));
  let nt;
  t[86] !== a || t[87] !== Ne || t[88] !== D
    ? ((nt =
        D == null
          ? null
          : (0, $.jsx)(Ue.RightPanelOutlet, {
              children: (0, $.jsx)(pr, { cloudPreviewRenderer: a, item: D, onClose: Ne }),
            })),
      (t[86] = a),
      (t[87] = Ne),
      (t[88] = D),
      (t[89] = nt))
    : (nt = t[89]);
  let rt, it;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, $.jsx)(U, {
        id: `appgenPage.library.title`,
        defaultMessage: `Library`,
        description: `Title shown at the top of the Library page`,
      })),
      (it = (0, $.jsx)(U, {
        id: `appgenPage.library.subtitle`,
        defaultMessage: `Organize and reuse files, images and sites created across chats`,
        description: `Subtitle shown at the top of the Library page`,
      })),
      (t[90] = rt),
      (t[91] = it))
    : ((rt = t[90]), (it = t[91]));
  let at;
  t[92] !== $e || t[93] !== f
    ? ((at = {
        autoFocus: !0,
        id: `appgen-site-search`,
        label: $e,
        onSearchQueryChange: m,
        placeholder: $e,
        searchQuery: f,
      }),
      (t[92] = $e),
      (t[93] = f),
      (t[94] = at))
    : (at = t[94]);
  let ot;
  t[95] !== b || t[96] !== S || t[97] !== w || t[98] !== v
    ? ((ot = (0, $.jsx)(Ir, {
        accessFilter: b,
        contentType: S,
        fileFilter: w,
        viewMode: v,
        onAccessFilterChange: x,
        onContentTypeChange: He,
        onFileFilterChange: Ge,
        onViewModeChange: y,
      })),
      (t[95] = b),
      (t[96] = S),
      (t[97] = w),
      (t[98] = v),
      (t[99] = ot))
    : (ot = t[99]);
  let st;
  t[100] !== b ||
  t[101] !== r ||
  t[102] !== de ||
  t[103] !== S ||
  t[104] !== w ||
  t[105] !== ve ||
  t[106] !== Se ||
  t[107] !== Ee ||
  t[108] !== Oe ||
  t[109] !== Ae ||
  t[110] !== s ||
  t[111] !== f ||
  t[112] !== N ||
  t[113] !== v
    ? ((st = (0, $.jsx)(tr, {
        accessFilter: b,
        cloudFileThumbnailResolver: r,
        cloudSource: de,
        cloudUploadingFiles: N,
        contentType: S,
        fileFilter: w,
        localSourcesEnabled: s,
        searchQuery: f,
        viewMode: v,
        onCreate: ve,
        onEdit: Se,
        onFileEdit: Ee,
        onImageEdit: Oe,
        onPreview: Ae,
      })),
      (t[100] = b),
      (t[101] = r),
      (t[102] = de),
      (t[103] = S),
      (t[104] = w),
      (t[105] = ve),
      (t[106] = Se),
      (t[107] = Ee),
      (t[108] = Oe),
      (t[109] = Ae),
      (t[110] = s),
      (t[111] = f),
      (t[112] = N),
      (t[113] = v),
      (t[114] = st))
    : (st = t[114]);
  let G;
  t[115] !== h || t[116] !== at || t[117] !== ot || t[118] !== st || t[119] !== _
    ? ((G = (0, $.jsx)(Ft, {
        scrollContainerRef: h,
        title: rt,
        subtitle: it,
        titleRef: _,
        search: at,
        controls: ot,
        children: st,
      })),
      (t[115] = h),
      (t[116] = at),
      (t[117] = ot),
      (t[118] = st),
      (t[119] = _),
      (t[120] = G))
    : (G = t[120]);
  let ct;
  t[121] === k
    ? (ct = t[122])
    : ((ct = k > 0 ? (0, $.jsx)(ii, {}) : null), (t[121] = k), (t[122] = ct));
  let ut;
  return (
    t[123] !== Pe ||
    t[124] !== Re ||
    t[125] !== Le ||
    t[126] !== ze ||
    t[127] !== et ||
    t[128] !== tt ||
    t[129] !== nt ||
    t[130] !== G ||
    t[131] !== ct
      ? ((ut = (0, $.jsxs)(`div`, {
          className: `relative flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          onDragEnter: Pe,
          onDragOver: Le,
          onDragLeave: Re,
          onDrop: ze,
          children: [et, tt, nt, G, ct],
        })),
        (t[123] = Pe),
        (t[124] = Re),
        (t[125] = Le),
        (t[126] = ze),
        (t[127] = et),
        (t[128] = tt),
        (t[129] = nt),
        (t[130] = G),
        (t[131] = ct),
        (t[132] = ut))
      : (ut = t[132]),
    ut
  );
}
function Wr(e) {
  return e.filter(Gr);
}
function Gr(e) {
  return e.uploadedFileId == null;
}
function Kr(e) {
  window.setTimeout(e, li);
}
function qr(e) {
  return e.fileId;
}
function Jr(e, t) {
  return {
    category: ni(e),
    id: `${e.name}:${e.size}:${e.lastModified}:${t}`,
    mimeType: e.type.length > 0 ? e.type : null,
    modifiedAt: new Date().toISOString(),
    name: e.name,
    sizeBytes: e.size,
    uploadedFileId: null,
  };
}
function Yr(e) {
  return Math.max(0, e - 1);
}
function Xr(e) {
  return e + 1;
}
function Zr(e) {
  return e.pages.flatMap(Qr);
}
function Qr(e) {
  return e.items;
}
function $r(e) {
  return e.cursor ?? null;
}
function ei(e) {
  let t = dt(e, { includeDirectories: !1 });
  return [...t.imageFiles, ...t.otherFiles];
}
function ti(e, t) {
  if (e !== `sites`) {
    if (e === `images`) return [`image`];
    switch (t) {
      case `document`:
      case `presentation`:
        return fi;
      case `pdf`:
        return [`pdf`];
      case `spreadsheet`:
        return pi;
      case `all`:
        break;
    }
    return e === `files` ? di : null;
  }
}
function ni(e) {
  let t = e.type.toLowerCase();
  return t.startsWith(`image/`)
    ? `image`
    : t.startsWith(`video/`)
      ? `video`
      : t.startsWith(`audio/`)
        ? `audio`
        : t === `application/pdf` || e.name.toLowerCase().endsWith(`.pdf`)
          ? `pdf`
          : t.startsWith(`text/`) ||
              t === `application/json` ||
              e.name.toLowerCase().endsWith(`.md`) ||
              e.name.toLowerCase().endsWith(`.mdx`)
            ? `text`
            : `other`;
}
function ri(e) {
  let t = (0, oi.c)(34),
    {
      cloudSource: n,
      cloudUploadAction: r,
      onCreateAsset: i,
      onCreateSite: a,
      showTitle: o,
      showFiles: s,
      showImages: c,
      showSites: l,
    } = e,
    d = p(E),
    f = Te(),
    m;
  t[0] === l ? (m = t[1]) : ((m = { enabled: l }), (t[0] = l), (t[1] = m));
  let { isFetchingNextPage: h, isLoading: g, isRefetching: v, refetch: y } = C(m),
    { isLoading: b, isRefetching: x } = _($n),
    { isLoading: S, isRefetching: w } = _(Zn),
    T = v || x || w || n?.isRefetching === !0,
    D;
  t[2] === f
    ? (D = t[3])
    : ((D = f.formatMessage({
        id: `appgenPage.library.refresh`,
        defaultMessage: `Refresh library`,
        description: `Accessible label for refreshing the Library`,
      })),
      (t[2] = f),
      (t[3] = D));
  let O = D,
    k;
  t[4] === o
    ? (k = t[5])
    : ((k = o
        ? (0, $.jsx)(U, {
            id: `appgenPage.library.title`,
            defaultMessage: `Library`,
            description: `Title shown at the top of the Library page`,
          })
        : null),
      (t[4] = o),
      (t[5] = k));
  let A = (l && g) || (s && b) || (c && S) || n?.isLoading === !0 || T || h,
    j;
  t[6] !== n || t[7] !== y || t[8] !== d || t[9] !== s || t[10] !== c || t[11] !== l
    ? ((j = () => {
        Promise.all([
          ...(l ? [y()] : []),
          ...(s ? [d.query.invalidate($n)] : []),
          ...(c ? [d.query.invalidate(Zn)] : []),
          ...(n?.isEnabled === !0 ? [n.refetch()] : []),
        ]);
      }),
      (t[6] = n),
      (t[7] = y),
      (t[8] = d),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = j))
    : (j = t[12]);
  let M;
  t[13] === T
    ? (M = t[14])
    : ((M = T ? null : (0, $.jsx)(B, { className: `icon-xs` })), (t[13] = T), (t[14] = M));
  let N;
  t[15] !== T || t[16] !== O || t[17] !== A || t[18] !== j || t[19] !== M
    ? ((N = (0, $.jsx)(u, {
        "aria-label": O,
        color: `ghost`,
        disabled: A,
        loading: T,
        onClick: j,
        size: `toolbar`,
        uniform: !0,
        children: M,
      })),
      (t[15] = T),
      (t[16] = O),
      (t[17] = A),
      (t[18] = j),
      (t[19] = M),
      (t[20] = N))
    : (N = t[20]);
  let P;
  t[21] !== O || t[22] !== N
    ? ((P = (0, $.jsx)(je, { tooltipContent: O, children: N })),
      (t[21] = O),
      (t[22] = N),
      (t[23] = P))
    : (P = t[23]);
  let F;
  t[24] !== i || t[25] !== a
    ? ((F = (0, $.jsx)(ai, { onCreateAsset: i, onCreateSite: a })),
      (t[24] = i),
      (t[25] = a),
      (t[26] = F))
    : (F = t[26]);
  let ee;
  t[27] !== r || t[28] !== P || t[29] !== F
    ? ((ee = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [P, r, F] })),
      (t[27] = r),
      (t[28] = P),
      (t[29] = F),
      (t[30] = ee))
    : (ee = t[30]);
  let I;
  return (
    t[31] !== ee || t[32] !== k
      ? ((I = (0, $.jsx)(Pt, { start: k, trailing: ee })), (t[31] = ee), (t[32] = k), (t[33] = I))
      : (I = t[33]),
    I
  );
}
function ii() {
  let e = (0, oi.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`div`, {
        className: `flex size-24 items-center justify-center rounded-3xl bg-token-editor-background text-token-foreground shadow-lg`,
        children: (0, $.jsx)(wt, { className: `size-12` }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(`div`, {
        className: `text-2xl leading-8 font-medium text-token-foreground`,
        children: (0, $.jsx)(U, {
          id: `appgenPage.cloudUpload.dropTitle`,
          defaultMessage: `Add anything`,
          description: `Primary heading in the cloud Library drag-and-drop overlay`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-token-main-surface-primary/85`,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col items-center gap-3 text-center`,
            children: [
              t,
              n,
              (0, $.jsx)(`div`, {
                className: `text-base text-token-description-foreground`,
                children: (0, $.jsx)(U, {
                  id: `appgenPage.cloudUpload.dropDescription`,
                  defaultMessage: `Drop any file here to add it to your library`,
                  description: `Instruction text in the cloud Library drag-and-drop overlay`,
                }),
              }),
            ],
          }),
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function ai(e) {
  let t = (0, oi.c)(42),
    { onCreateAsset: n, onCreateSite: r } = e,
    i = Te(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `appgenPage.createMenu.ariaLabel`,
        defaultMessage: `Create`,
        description: `Accessible label for opening the Library create menu`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o, s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.trigger`,
        defaultMessage: `Create`,
        description: `Button label for opening the Library create menu`,
      })),
      (s = (0, $.jsx)(F, { "aria-hidden": !0, className: `icon-xs text-token-text-secondary` })),
      (t[2] = o),
      (t[3] = s))
    : ((o = t[2]), (s = t[3]));
  let c;
  t[4] === a
    ? (c = t[5])
    : ((c = (0, $.jsxs)(u, {
        "aria-label": a,
        color: `outline`,
        size: `toolbar`,
        children: [o, s],
      })),
      (t[4] = a),
      (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.site`,
        defaultMessage: `Create site`,
        description: `Menu item for creating a site from the Library`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let d;
  t[7] === r
    ? (d = t[8])
    : ((d = (0, $.jsx)(H.Item, { LeftIcon: rt, onSelect: r, children: l })),
      (t[7] = r),
      (t[8] = d));
  let f;
  t[9] === n ? (f = t[10]) : ((f = () => n(`document`)), (t[9] = n), (t[10] = f));
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.document`,
        defaultMessage: `Create document`,
        description: `Menu item for creating a document from the Library`,
      })),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === f
    ? (m = t[13])
    : ((m = (0, $.jsx)(H.Item, { LeftIcon: xe, onSelect: f, children: p })),
      (t[12] = f),
      (t[13] = m));
  let g;
  t[14] === n ? (g = t[15]) : ((g = () => n(`spreadsheet`)), (t[14] = n), (t[15] = g));
  let _;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.spreadsheet`,
        defaultMessage: `Create spreadsheet`,
        description: `Menu item for creating a spreadsheet from the Library`,
      })),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === g
    ? (v = t[18])
    : ((v = (0, $.jsx)(H.Item, { LeftIcon: de, onSelect: g, children: _ })),
      (t[17] = g),
      (t[18] = v));
  let y;
  t[19] === n ? (y = t[20]) : ((y = () => n(`presentation`)), (t[19] = n), (t[20] = y));
  let b;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.presentation`,
        defaultMessage: `Create presentation`,
        description: `Menu item for creating a presentation from the Library`,
      })),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] === y
    ? (x = t[23])
    : ((x = (0, $.jsx)(H.Item, { LeftIcon: Be, onSelect: y, children: b })),
      (t[22] = y),
      (t[23] = x));
  let S;
  t[24] === n ? (S = t[25]) : ((S = () => n(`pdf`)), (t[24] = n), (t[25] = S));
  let C;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.pdf`,
        defaultMessage: `Create PDF`,
        description: `Menu item for creating a PDF from the Library`,
      })),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] === S
    ? (w = t[28])
    : ((w = (0, $.jsx)(H.Item, { LeftIcon: ze, onSelect: S, children: C })),
      (t[27] = S),
      (t[28] = w));
  let T;
  t[29] === n ? (T = t[30]) : ((T = () => n(`image`)), (t[29] = n), (t[30] = T));
  let E;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(U, {
        id: `appgenPage.createMenu.image`,
        defaultMessage: `Create image`,
        description: `Menu item for creating an image from the Library`,
      })),
      (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] === T
    ? (D = t[33])
    : ((D = (0, $.jsx)(H.Item, { LeftIcon: pt, onSelect: T, children: E })),
      (t[32] = T),
      (t[33] = D));
  let O;
  return (
    t[34] !== v ||
    t[35] !== x ||
    t[36] !== w ||
    t[37] !== D ||
    t[38] !== c ||
    t[39] !== d ||
    t[40] !== m
      ? ((O = (0, $.jsxs)(h, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: c,
          children: [d, m, v, x, w, D],
        })),
        (t[34] = v),
        (t[35] = x),
        (t[36] = w),
        (t[37] = D),
        (t[38] = c),
        (t[39] = d),
        (t[40] = m),
        (t[41] = O))
      : (O = t[41]),
    O
  );
}
var oi, si, $, ci, li, ui, di, fi, pi;
e(() => {
  ((oi = Ne()),
    o(),
    r(),
    (si = t(x(), 1)),
    Se(),
    Ee(),
    Ge(),
    Ye(),
    qe(),
    k(),
    le(),
    It(),
    he(),
    be(),
    m(),
    st(),
    gt(),
    y(),
    Ve(),
    te(),
    me(),
    Le(),
    ye(),
    Et(),
    Oe(),
    Tt(),
    it(),
    v(),
    Nt(),
    ke(),
    _e(),
    on(),
    lr(),
    Cr(),
    Hr(),
    b(),
    Qn(),
    Ht(),
    er(),
    Qt(),
    ($ = l()),
    (ci = 25),
    (li = 2e3),
    (ui = 30),
    (di = [`video`, `audio`, `pdf`, `text`, `other`]),
    (fi = [`other`]),
    (pi = [`text`, `other`]));
})();
export { Ur as AppgenLibraryPage };
//# sourceMappingURL=appgen-library-page.js.map
