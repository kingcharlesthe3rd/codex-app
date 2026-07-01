import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  Aa as r,
  CA as i,
  CP as a,
  C_ as o,
  Ca as s,
  Cl as c,
  D_ as l,
  Da as u,
  Dy as d,
  EB as f,
  Ea as p,
  Ey as m,
  GN as h,
  GP as g,
  Gi as _,
  Gr as v,
  H as y,
  HP as b,
  IP as x,
  J as S,
  LP as C,
  MA as w,
  Mr as T,
  NA as E,
  NE as D,
  Oa as O,
  Oy as k,
  Pr as A,
  Qi as j,
  Qj as M,
  RV as N,
  SA as ee,
  SB as P,
  SP as F,
  SV as I,
  TB as te,
  TP as L,
  Ta as ne,
  Ur as R,
  V as re,
  WN as ie,
  Xv as z,
  Yj as ae,
  Yr as oe,
  Yv as se,
  _l as ce,
  av as le,
  bB as B,
  da as ue,
  eM as de,
  es as V,
  fN as fe,
  hN as H,
  iF as pe,
  iu as me,
  jE as he,
  jV as U,
  ka as ge,
  lM as W,
  mN as _e,
  n as ve,
  oV as ye,
  pI as be,
  pN as xe,
  q as Se,
  qP as Ce,
  qi as we,
  qj as Te,
  ru as Ee,
  sV as De,
  t as Oe,
  ts as ke,
  uM as Ae,
  ua as je,
  vv as Me,
  wB as Ne,
  wP as G,
  wa as Pe,
  xV as Fe,
  yl as Ie,
  zV as Le,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  As as Re,
  Bw as ze,
  Cn as Be,
  Cw as Ve,
  Ef as He,
  Ew as Ue,
  Ms as We,
  Mu as Ge,
  Mw as Ke,
  Ns as qe,
  Nw as Je,
  Sd as Ye,
  Tf as Xe,
  Tg as Ze,
  Us as Qe,
  Vw as $e,
  at as et,
  c_ as tt,
  ip as nt,
  it as rt,
  js as it,
  ju as at,
  kg as ot,
  l_ as st,
  nO as ct,
  s_ as lt,
  sp as ut,
  tO as dt,
  u_ as ft,
  wg as pt,
  wn as mt,
  xd as ht,
  zs as gt,
} from "./app-initial~app-main~onboarding-page.js";
import { En as _t, Ht as vt, Tn as yt, Ut as bt } from "./app-initial~app-main~automations-page.js";
import {
  n as xt,
  t as St,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  b as Ct,
  x as wt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  r as Tt,
  t as Et,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf.js";
import {
  M as Dt,
  N as Ot,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~coa484up.js";
import {
  n as kt,
  t as At,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page.js";
import {
  r as jt,
  t as Mt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~k7k1x9vf.js";
import {
  n as Nt,
  t as Pt,
} from "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page.js";
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
import { n as pn, t as mn } from "./appgen-share-dialog-Ca-VUEmz.js";
import { n as hn, t as gn } from "./segmented-toggle.js";
import { n as _n, t as vn } from "./filter.js";
function yn(e) {
  return G(
    `border border-token-border-light shadow-md`,
    e === `list` ? `rounded-md` : `rounded-xl`,
  );
}
var bn = e(() => {
  L();
});
function xn(e) {
  let t = (0, Dn.c)(35),
    { item: n, onOpenPreview: r, thumbnailResolver: i, viewMode: a } = e,
    o = Ce(),
    s;
  t[0] === n.cloudFile.name
    ? (s = t[1])
    : ((s = Tn(n.cloudFile.name)), (t[0] = n.cloudFile.name), (t[1] = s));
  let c = s,
    l;
  t[2] !== o || t[3] !== n || t[4] !== r
    ? ((l =
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
              className: G(Zt, `z-0`),
              type: `button`,
              onClick: () => r(n),
            })),
      (t[2] = o),
      (t[3] = n),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u = a === `list` ? `gap-6` : `justify-center`,
    d;
  t[6] === u
    ? (d = t[7])
    : ((d = G(`pointer-events-none relative z-[1] flex min-w-0 items-center`, u)),
      (t[6] = u),
      (t[7] = d));
  let f;
  t[8] !== n || t[9] !== i || t[10] !== a
    ? ((f = (0, K.jsx)(Cn, { item: n, thumbnailResolver: i, viewMode: a })),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== f || t[13] !== a
    ? ((p = (0, K.jsx)(an, {
        className: `bg-token-main-surface-secondary flex items-center justify-center has-[img]:bg-transparent`,
        viewMode: a,
        children: f,
      })),
      (t[12] = f),
      (t[13] = a),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] !== c || t[16] !== n.cloudFile.mimeType || t[17] !== r || t[18] !== a
    ? ((m =
        a === `list`
          ? (0, K.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, K.jsx)(Ut, { viewMode: a, children: c }),
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
                          children: (0, K.jsx)(g, {
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
      (t[15] = c),
      (t[16] = n.cloudFile.mimeType),
      (t[17] = r),
      (t[18] = a),
      (t[19] = m))
    : (m = t[19]);
  let h;
  t[20] !== d || t[21] !== p || t[22] !== m
    ? ((h = (0, K.jsxs)(`div`, { className: d, children: [p, m] })),
      (t[20] = d),
      (t[21] = p),
      (t[22] = m),
      (t[23] = h))
    : (h = t[23]);
  let _;
  t[24] !== c || t[25] !== n.fileType || t[26] !== n.modifiedAt || t[27] !== r || t[28] !== a
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
                  children: (0, K.jsx)(nt, { dateString: n.modifiedAt }),
                }),
                (0, K.jsx)(`div`, { className: `pointer-events-none relative z-[1] pl-4` }),
              ],
            })
          : (0, K.jsx)(qt, {
              actions: null,
              children: (0, K.jsxs)(`div`, {
                className: `min-w-0 px-3 py-3`,
                children: [
                  (0, K.jsx)(Ut, { viewMode: a, children: c }),
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
                          (0, K.jsx)(nt, { dateString: n.modifiedAt }),
                        ],
                      }),
                      r == null
                        ? null
                        : (0, K.jsx)(`span`, {
                            className: `hidden group-hover/cloud-file-row:inline-flex`,
                            children: (0, K.jsx)(g, {
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
      (t[24] = c),
      (t[25] = n.fileType),
      (t[26] = n.modifiedAt),
      (t[27] = r),
      (t[28] = a),
      (t[29] = _))
    : (_ = t[29]);
  let v;
  return (
    t[30] !== l || t[31] !== h || t[32] !== _ || t[33] !== a
      ? ((v = (0, K.jsxs)(cn, {
          className: `group/cloud-file-row`,
          viewMode: a,
          children: [l, h, _],
        })),
        (t[30] = l),
        (t[31] = h),
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
    : ((s = G(`pointer-events-none relative z-[1] flex min-w-0 items-center`, o)),
      (t[2] = o),
      (t[3] = s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, K.jsx)(_e, { className: `icon-sm` })), (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === r
    ? (l = t[6])
    : ((l = (0, K.jsx)(an, {
        className: `bg-token-main-surface-secondary flex items-center justify-center`,
        viewMode: r,
        children: c,
      })),
      (t[5] = r),
      (t[6] = l));
  let u;
  t[7] !== a || t[8] !== n.file.mimeType || t[9] !== r
    ? ((u =
        r === `list`
          ? (0, K.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, K.jsx)(Ut, { viewMode: r, children: a }),
                (0, K.jsx)(Vt, {
                  className: `truncate`,
                  children:
                    n.file.mimeType ??
                    (0, K.jsx)(g, {
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
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== s || t[12] !== l || t[13] !== u
    ? ((d = (0, K.jsxs)(`div`, { className: s, children: [l, u] })),
      (t[11] = s),
      (t[12] = l),
      (t[13] = u),
      (t[14] = d))
    : (d = t[14]);
  let f;
  t[15] !== a || t[16] !== n.fileType || t[17] !== r
    ? ((f =
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
                  children: (0, K.jsx)(g, {
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
                      (0, K.jsx)(g, {
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
      (t[18] = f))
    : (f = t[18]);
  let p;
  return (
    t[19] !== d || t[20] !== f || t[21] !== r
      ? ((p = (0, K.jsxs)(cn, { viewMode: r, children: [d, f] })),
        (t[19] = d),
        (t[20] = f),
        (t[21] = r),
        (t[22] = p))
      : (p = t[22]),
    p
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
  let c;
  t[5] !== o || t[6] !== s
    ? ((c = { cacheKey: o, getDownloadRequest: s }), (t[5] = o), (t[6] = s), (t[7] = c))
    : (c = t[7]);
  let { src: l } = mt(a ? n.cloudFile.id : ``, c),
    u;
  return (
    t[8] !== n || t[9] !== l || t[10] !== i
      ? ((u =
          l == null
            ? (0, K.jsx)(wn, { item: n, viewMode: i })
            : (0, K.jsx)(`img`, {
                alt: ``,
                className: G(
                  yn(i),
                  i === `grid` ? `max-h-[72%] max-w-[72%]` : `max-h-full max-w-full`,
                  `object-contain`,
                ),
                loading: `lazy`,
                src: l,
              })),
        (t[8] = n),
        (t[9] = l),
        (t[10] = i),
        (t[11] = u))
      : (u = t[11]),
    u
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
  return se(t === -1 ? e : e.slice(0, t), { style: `sentence` });
}
function En(e) {
  let t = (0, Dn.c)(9),
    { fileType: n } = e;
  switch (n) {
    case `audio`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
          ? ((e = (0, K.jsx)(g, {
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
    ((Dn = N()), L(), b(), dn(), ut(), H(), Be(), z(), bn(), Rt(), (K = U()));
  }),
  kn,
  An = e(() => {
    (B(),
      E(),
      C(),
      h(),
      (kn = ye(x, ({ modifiedAt: e, path: t, size: n }) => ({
        queryFn: async () => {
          let e = w.libraryFiles;
          if (e == null) throw Error(`Library thumbnails are unavailable`);
          return e.getThumbnailDataUrl({ size: n, sourcePath: t });
        },
        queryKey: [`library-file`, t, e, n, `thumbnail`],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: ie.INFINITE,
      }))));
  });
function jn(e) {
  let t = (0, Ln.c)(47),
    { item: n, onEdit: r, onOpenPreview: i, viewMode: a } = e,
    o = Ce(),
    [s, c] = (0, Rn.useState)(null),
    [l, u] = (0, Rn.useState)(Nn),
    d;
  if (t[0] !== n.file.name) {
    let e = n.file.name.lastIndexOf(`.`);
    ((d = se(e === -1 ? n.file.name : n.file.name.slice(0, e), { style: `sentence` })),
      (t[0] = n.file.name),
      (t[1] = d));
  } else d = t[1];
  let f = d,
    p,
    m;
  (t[2] === s
    ? ((p = t[3]), (m = t[4]))
    : ((p = () => {
        if (s == null || !zn) return;
        let e,
          t = new IntersectionObserver(
            (t) => {
              t.some(Mn)
                ? (e ??= window.setTimeout(() => {
                    ((e = void 0), u(!0));
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
      (m = [s]),
      (t[2] = s),
      (t[3] = p),
      (t[4] = m)),
    (0, Rn.useEffect)(p, m));
  let h;
  t[5] !== o || t[6] !== n.file.name
    ? ((h = o.formatMessage(
        {
          id: `appgenPage.file.openPreviewLabel`,
          defaultMessage: `Open preview of {fileName}`,
          description: `Accessible label for opening a Library file preview`,
        },
        { fileName: n.file.name },
      )),
      (t[5] = o),
      (t[6] = n.file.name),
      (t[7] = h))
    : (h = t[7]);
  let _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = G(Zt, `z-0`)), (t[8] = _)) : (_ = t[8]);
  let v;
  t[9] !== n || t[10] !== i
    ? ((v = () => i(n)), (t[9] = n), (t[10] = i), (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] !== h || t[13] !== v
    ? ((y = (0, q.jsx)(`button`, { "aria-label": h, className: _, type: `button`, onClick: v })),
      (t[12] = h),
      (t[13] = v),
      (t[14] = y))
    : (y = t[14]);
  let b = a === `list` ? `gap-6` : `justify-center`,
    x;
  t[15] === b
    ? (x = t[16])
    : ((x = G(`pointer-events-none relative z-[1] flex min-w-0 items-center`, b)),
      (t[15] = b),
      (t[16] = x));
  let S;
  t[17] !== n || t[18] !== l || t[19] !== a
    ? ((S = l
        ? (0, q.jsx)(Pn, { item: n, viewMode: a })
        : (0, q.jsx)(Fn, { item: n, viewMode: a })),
      (t[17] = n),
      (t[18] = l),
      (t[19] = a),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== S || t[22] !== a
    ? ((C = (0, q.jsx)(an, {
        ref: c,
        className: `bg-token-main-surface-secondary flex items-center justify-center has-[img]:bg-transparent`,
        viewMode: a,
        children: S,
      })),
      (t[21] = S),
      (t[22] = a),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== f || t[25] !== n.file.relativePath || t[26] !== a
    ? ((w =
        a === `list`
          ? (0, q.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, q.jsx)(Ut, { viewMode: a, children: f }),
                (0, q.jsxs)(Vt, {
                  className: `truncate`,
                  children: [
                    (0, q.jsx)(`span`, {
                      className: `group-hover/file-row:hidden`,
                      children: n.file.relativePath,
                    }),
                    (0, q.jsx)(`span`, {
                      className: `hidden group-hover/file-row:inline-flex`,
                      children: (0, q.jsx)(g, {
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
      (t[24] = f),
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
  t[32] !== f || t[33] !== n || t[34] !== r || t[35] !== a
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
                  children: (0, q.jsx)(nt, { dateString: n.modifiedAt }),
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
                  (0, q.jsx)(Ut, { viewMode: a, children: f }),
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
                          (0, q.jsx)(nt, { dateString: n.modifiedAt }),
                        ],
                      }),
                      (0, q.jsx)(`span`, {
                        className: `hidden group-hover/file-row:inline-flex`,
                        children: (0, q.jsx)(g, {
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
      (t[32] = f),
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
  let { data: o } = Ne(kn, a),
    s;
  return (
    t[4] !== n || t[5] !== o || t[6] !== r
      ? ((s =
          o?.dataUrl == null
            ? (0, q.jsx)(Fn, { item: n, viewMode: r })
            : (0, q.jsx)(`img`, {
                alt: ``,
                className: G(
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
          ? ((e = (0, q.jsx)(g, {
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
          ? ((e = (0, q.jsx)(g, {
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
          ? ((e = (0, q.jsx)(g, {
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
          ? ((e = (0, q.jsx)(g, {
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
    ((Ln = N()),
      L(),
      B(),
      (Rn = t(Le(), 1)),
      b(),
      dn(),
      ut(),
      z(),
      bn(),
      Rt(),
      An(),
      (q = U()),
      (zn = typeof IntersectionObserver < `u`));
  });
function Vn(e) {
  let t = (0, Hn.c)(50),
    { item: n, onEdit: r, onOpenPreview: i, src: a, viewMode: o } = e,
    s = Ce(),
    c,
    l,
    u,
    d,
    f;
  if (t[0] !== s || t[1] !== n.image.name || t[2] !== o) {
    let e = n.image.name.lastIndexOf(`.`);
    ((l = se(e === -1 ? n.image.name : n.image.name.slice(0, e), { style: `sentence` })),
      (c = cn),
      (d = `group/image-row`),
      (f = o),
      (u = s.formatMessage(
        {
          id: `appgenPage.image.open`,
          defaultMessage: `Open {imageName}`,
          description: `Accessible label for opening a generated Library image`,
        },
        { imageName: l },
      )),
      (t[0] = s),
      (t[1] = n.image.name),
      (t[2] = o),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f));
  } else ((c = t[3]), (l = t[4]), (u = t[5]), (d = t[6]), (f = t[7]));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = G(Zt, `z-0`)), (t[8] = p)) : (p = t[8]);
  let m;
  t[9] !== n || t[10] !== i
    ? ((m = () => i(n)), (t[9] = n), (t[10] = i), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] !== u || t[13] !== m
    ? ((h = (0, J.jsx)(`button`, { "aria-label": u, className: p, type: `button`, onClick: m })),
      (t[12] = u),
      (t[13] = m),
      (t[14] = h))
    : (h = t[14]);
  let _ = o === `list` ? `gap-6` : `justify-center`,
    v;
  t[15] === _
    ? (v = t[16])
    : ((v = G(`pointer-events-none relative z-[1] flex min-w-0 items-center`, _)),
      (t[15] = _),
      (t[16] = v));
  let y;
  t[17] === o
    ? (y = t[18])
    : ((y = G(
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
  t[25] !== l || t[26] !== n.image.relativePath || t[27] !== o
    ? ((S =
        o === `list`
          ? (0, J.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, J.jsx)(Ut, { viewMode: o, children: l }),
                (0, J.jsx)(Vt, { className: `truncate`, children: n.image.relativePath }),
              ],
            })
          : null),
      (t[25] = l),
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
  t[33] !== l || t[34] !== n || t[35] !== r || t[36] !== o
    ? ((w =
        o === `list`
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  children: (0, J.jsx)(g, {
                    id: `appgenPage.image.type`,
                    defaultMessage: `Image`,
                    description: `Type label for a generated image in the Library`,
                  }),
                }),
                (0, J.jsx)(zt, {
                  className: `pointer-events-none relative z-[1]`,
                  hideWhenCompact: !0,
                  children: (0, J.jsx)(nt, { dateString: n.modifiedAt }),
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
                  (0, J.jsx)(Ut, { viewMode: o, children: l }),
                  (0, J.jsxs)(Vt, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, J.jsx)(g, {
                        id: `appgenPage.image.type`,
                        defaultMessage: `Image`,
                        description: `Type label for a generated image in the Library`,
                      }),
                      (0, J.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
                      }),
                      (0, J.jsx)(nt, { dateString: n.modifiedAt }),
                    ],
                  }),
                ],
              }),
            })),
      (t[33] = l),
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
    t[42] !== c ||
    t[43] !== C ||
    t[44] !== w ||
    t[45] !== T ||
    t[46] !== d ||
    t[47] !== f ||
    t[48] !== h
      ? ((E = (0, J.jsxs)(c, { className: d, viewMode: f, children: [h, C, w, T] })),
        (t[42] = c),
        (t[43] = C),
        (t[44] = w),
        (t[45] = T),
        (t[46] = d),
        (t[47] = f),
        (t[48] = h),
        (t[49] = E))
      : (E = t[49]),
    E
  );
}
var Hn,
  J,
  Un = e(() => {
    ((Hn = N()), L(), b(), ut(), z(), bn(), Rt(), (J = U()));
  });
function Wn(e) {
  let t = (0, Jn.c)(31),
    { onEdit: n, project: r, viewMode: i } = e,
    a = Ce(),
    o = r.current_live_url,
    { data: s } = k(r.screenshot_url),
    c;
  t[0] !== a || t[1] !== o || t[2] !== r.title
    ? ((c =
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
              className: G(Zt, `peer/appgen-row`),
              onClick: (e) => {
                we({ event: e, href: o, initiator: `mcp_app_resource` });
              },
              type: `button`,
            })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = r.title),
      (t[3] = c))
    : (c = t[3]);
  let l = i === `list` ? `items-center gap-6` : `flex-col items-stretch`,
    u;
  t[4] === l
    ? (u = t[5])
    : ((u = G(
        `pointer-events-none relative z-10 flex min-w-0 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex`,
        l,
      )),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] !== s || t[7] !== i
    ? ((d =
        s == null
          ? (0, Y.jsx)(Kn, { viewMode: i })
          : (0, Y.jsx)(an, {
              className: `flex items-center justify-center`,
              viewMode: i,
              children: (0, Y.jsx)(`img`, {
                alt: ``,
                className: G(
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
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== o || t[10] !== r.slug || t[11] !== r.title || t[12] !== i
    ? ((f =
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
                      children: lt(o) ?? r.slug,
                    }),
                    (0, Y.jsxs)(`span`, {
                      className: `appgen-row-hover-subtitle hidden items-center gap-1`,
                      children: [
                        (0, Y.jsx)(g, {
                          id: `appgenPage.openInBrowserSubtitle`,
                          defaultMessage: `Open in browser`,
                          description: `Hover subtitle for opening a live site`,
                        }),
                        o == null
                          ? null
                          : (0, Y.jsx)(Se, { className: `icon-2xs`, ExternalIcon: re, href: o }),
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
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] !== u || t[15] !== d || t[16] !== f
    ? ((p = (0, Y.jsxs)(`div`, { className: u, children: [d, f] })),
      (t[14] = u),
      (t[15] = d),
      (t[16] = f),
      (t[17] = p))
    : (p = t[17]);
  let m;
  t[18] !== o ||
  t[19] !== n ||
  t[20] !== r.access_policy ||
  t[21] !== r.id ||
  t[22] !== r.title ||
  t[23] !== r.updated_at ||
  t[24] !== i
    ? ((m =
        i === `list`
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(zt, {
                  children: (0, Y.jsx)(g, {
                    id: `appgenPage.itemType.site`,
                    defaultMessage: `Site`,
                    description: `Type label for a site in the Library`,
                  }),
                }),
                (0, Y.jsx)(zt, {
                  hideWhenCompact: !0,
                  children: (0, Y.jsx)(nt, { dateString: r.updated_at }),
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
      (t[25] = m))
    : (m = t[25]);
  let h;
  return (
    t[26] !== c || t[27] !== p || t[28] !== m || t[29] !== i
      ? ((h = (0, Y.jsxs)(cn, { "data-appgen-row": !0, viewMode: i, children: [c, p, m] })),
        (t[26] = c),
        (t[27] = p),
        (t[28] = m),
        (t[29] = i),
        (t[30] = h))
      : (h = t[30]),
    h
  );
}
function Gn(e) {
  return G(
    `border border-token-border-light shadow-md`,
    e === `list` ? `rounded-md` : `rounded-xl`,
  );
}
function Kn(e) {
  let t = (0, Jn.c)(8),
    { viewMode: n } = e,
    { platform: r } = ke(),
    i = r === `windows` ? rn : Wt,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = G(Gn(n), n === `list` ? `size-full` : `h-auto w-[72%]`)), (t[0] = n), (t[1] = a));
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
    o = gt(n),
    s = te(x),
    c;
  t[0] !== r || t[1] !== s
    ? ((c = () => A(s, mn, { projectId: r })), (t[0] = r), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === n
    ? (l = t[4])
    : ((l = (0, Y.jsx)(We, { className: `icon-xs shrink-0`, accessPolicy: n, "aria-hidden": !0 })),
      (t[3] = n),
      (t[4] = l));
  let u = g,
    d = Re(o),
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
  let p;
  t[9] === i
    ? (p = t[10])
    : ((p = (0, Y.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Y.jsx)(g, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: i },
        }),
      })),
      (t[9] = i),
      (t[10] = p));
  let m;
  t[11] !== c || t[12] !== l || t[13] !== f || t[14] !== p
    ? ((m = (0, Y.jsxs)(`button`, {
        className: `pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline`,
        type: `button`,
        onClick: c,
        children: [l, f, p],
      })),
      (t[11] = c),
      (t[12] = l),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (t[16] = h))
    : (h = t[16]);
  let _;
  t[17] === a ? (_ = t[18]) : ((_ = (0, Y.jsx)(nt, { dateString: a })), (t[17] = a), (t[18] = _));
  let v;
  return (
    t[19] !== m || t[20] !== _
      ? ((v = (0, Y.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1.5 px-3 pt-0 pb-3 text-xs leading-[18px] text-token-text-secondary`,
          children: [m, h, _],
        })),
        (t[19] = m),
        (t[20] = _),
        (t[21] = v))
      : (v = t[21]),
    v
  );
}
var Jn,
  Y,
  Yn = e(() => {
    ((Jn = N()),
      L(),
      B(),
      b(),
      _(),
      S(),
      ut(),
      T(),
      V(),
      y(),
      C(),
      Qe(),
      qe(),
      it(),
      Rt(),
      en(),
      m(),
      pn(),
      tt(),
      Gt(),
      Xt(),
      (Y = U()));
  }),
  Xn,
  Zn,
  Qn = e(() => {
    (B(),
      E(),
      C(),
      h(),
      (Xn = [`generated-images`]),
      (Zn = De(x, () => ({
        queryFn: async () => {
          let e = w.libraryFiles;
          if (e == null) throw Error(`Library images are unavailable`);
          return e.listGeneratedImages();
        },
        queryKey: Xn,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: ie.FIVE_SECONDS,
      }))));
  }),
  $n,
  er = e(() => {
    (B(),
      E(),
      C(),
      h(),
      ($n = De(x, () => ({
        queryFn: async () => {
          let e = w.libraryFiles;
          if (e == null) throw Error(`Library files are unavailable`);
          return e.listOutputFiles();
        },
        queryKey: [`projectless-output-files`],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: ie.FIVE_SECONDS,
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
      onFileEdit: p,
      onImageEdit: m,
      onPreview: h,
      searchQuery: g,
      viewMode: _,
    } = e,
    v = c === void 0 ? !0 : c,
    { data: y, isError: b, isLoading: x } = f($n),
    { data: S, isError: C, isLoading: w } = f(Zn),
    T = v && (o === `sites` || (o === `all` && s === `all`)),
    E = v && (o === `files` || o === `all`),
    D = v && (o === `images` || (o === `all` && s === `all`)),
    O;
  t[0] === T ? (O = t[1]) : ((O = { enabled: T }), (t[0] = T), (t[1] = O));
  let {
      data: k,
      fetchNextPage: A,
      hasNextPage: j,
      isFetchNextPageError: M,
      isFetchingNextPage: N,
      isError: ee,
      isLoading: P,
    } = d(O),
    F = i?.files,
    I = E ? y : void 0,
    te = D ? S : void 0,
    L = T ? k : void 0,
    ne;
  t[2] !== n ||
  t[3] !== a ||
  t[4] !== o ||
  t[5] !== s ||
  t[6] !== g ||
  t[7] !== F ||
  t[8] !== I ||
  t[9] !== te ||
  t[10] !== L
    ? ((ne = Yt({
        accessFilter: n,
        cloudFiles: F,
        cloudUploadingFiles: a,
        contentType: o,
        fileFilter: s,
        files: I,
        images: te,
        projects: L,
        searchQuery: g,
      })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = g),
      (t[7] = F),
      (t[8] = I),
      (t[9] = te),
      (t[10] = L),
      (t[11] = ne))
    : (ne = t[11]);
  let R = ne,
    re = (T && P) || (E && x) || (D && w) || i?.isLoading === !0,
    ie =
      (T && k == null) ||
      (E && y == null) ||
      (D && S == null) ||
      (i?.isEnabled === !0 && i.files == null),
    z;
  t[12] !== n || t[13] !== o || t[14] !== s || t[15] !== g
    ? ((z =
        g.trim().length > 0 ||
        (o === `sites` && n !== `all`) ||
        ((o === `all` || o === `files`) && s !== `all`)),
      (t[12] = n),
      (t[13] = o),
      (t[14] = s),
      (t[15] = g),
      (t[16] = z))
    : (z = t[16]);
  let ae = z,
    oe = (!T || !j || M) && (i == null || !i.hasNextPage || i.hasLoadError);
  if (re) {
    let e;
    return (
      t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(nr, {})), (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  if (R.length === 0) {
    if (ie) {
      let e;
      return (
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(ir, {})), (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    if (oe) {
      let e;
      return (
        t[19] !== o || t[20] !== ae || t[21] !== l
          ? ((e = ae ? (0, X.jsx)(ar, {}) : (0, X.jsx)(rr, { contentType: o, onCreate: l })),
            (t[19] = o),
            (t[20] = ae),
            (t[21] = l),
            (t[22] = e))
          : (e = t[22]),
        e
      );
    }
  }
  let se = (T && ee) || (E && b) || (D && C) || i?.hasLoadError === !0,
    ce = (T && j && !M) || i?.hasNextPage === !0,
    le = N || i?.isFetchingNextPage === !0,
    B;
  t[23] !== i || t[24] !== A || t[25] !== j || t[26] !== M || t[27] !== T
    ? ((B = () =>
        Promise.all([
          ...(T && j && !M ? [A()] : []),
          ...(i?.hasNextPage === !0 ? [i.fetchNextPage()] : []),
        ])),
      (t[23] = i),
      (t[24] = A),
      (t[25] = j),
      (t[26] = M),
      (t[27] = T),
      (t[28] = B))
    : (B = t[28]);
  let ue;
  return (
    t[29] !== r ||
    t[30] !== R ||
    t[31] !== u ||
    t[32] !== p ||
    t[33] !== m ||
    t[34] !== h ||
    t[35] !== ce ||
    t[36] !== le ||
    t[37] !== B ||
    t[38] !== se ||
    t[39] !== _
      ? ((ue = (0, X.jsx)(or, {
          hasLoadError: se,
          hasNextPage: ce,
          isFetchingNextPage: le,
          items: R,
          cloudFileThumbnailResolver: r,
          viewMode: _,
          onEdit: u,
          onFileEdit: p,
          onImageEdit: m,
          onLoadNextPage: B,
          onPreview: h,
        })),
        (t[29] = r),
        (t[30] = R),
        (t[31] = u),
        (t[32] = p),
        (t[33] = m),
        (t[34] = h),
        (t[35] = ce),
        (t[36] = le),
        (t[37] = B),
        (t[38] = se),
        (t[39] = _),
        (t[40] = ue))
      : (ue = t[40]),
    ue
  );
}
function nr() {
  let e = (0, cr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, X.jsx)(_e, {}),
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
          ? (0, X.jsx)(Dt, { className: `icon-lg text-token-foreground` })
          : n === `images`
            ? (0, X.jsx)(rt, { className: `icon-lg text-token-foreground` })
            : (0, X.jsx)(At, { className: `icon-lg text-token-foreground` })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, X.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children:
          n === `files`
            ? (0, X.jsx)(g, {
                id: `appgenPage.empty.filesTitle`,
                defaultMessage: `No files yet`,
                description: `Empty state title for the Library Files tab`,
              })
            : n === `images`
              ? (0, X.jsx)(g, {
                  id: `appgenPage.empty.imagesTitle`,
                  defaultMessage: `No images yet`,
                  description: `Empty state title for the Library Images tab`,
                })
              : (0, X.jsx)(g, {
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
          : (0, X.jsx)(fe, {
              color: `outline`,
              size: `medium`,
              onClick: r,
              children: (0, X.jsx)(g, {
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
            children: (0, X.jsx)(g, {
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
          children: (0, X.jsx)(g, {
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
      onFileEdit: c,
      onImageEdit: l,
      onPreview: u,
      onLoadNextPage: d,
      viewMode: f,
    } = e,
    p =
      f === `list`
        ? `grid-cols-[minmax(0,1fr)_minmax(90px,120px)_minmax(90px,120px)_auto] [@container_(max-width:620px)]:grid-cols-[minmax(0,1fr)_minmax(90px,120px)_auto]`
        : `grid-cols-3 gap-3 [@container_(max-width:680px)]:grid-cols-2 [@container_(max-width:440px)]:grid-cols-1`,
    m;
  t[0] === p ? (m = t[1]) : ((m = G(`grid`, p)), (t[0] = p), (t[1] = m));
  let h;
  t[2] === f
    ? (h = t[3])
    : ((h =
        f === `list`
          ? (0, X.jsxs)(`div`, {
              className: `col-span-full grid grid-cols-subgrid items-center border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary`,
              children: [
                (0, X.jsx)(`span`, {
                  children: (0, X.jsx)(g, {
                    id: `appgenPage.list.name`,
                    defaultMessage: `Name`,
                    description: `Name column header in the Library list`,
                  }),
                }),
                (0, X.jsx)(`span`, {
                  className: `pl-4`,
                  children: (0, X.jsx)(g, {
                    id: `appgenPage.list.type`,
                    defaultMessage: `Type`,
                    description: `Type column header in the Library list`,
                  }),
                }),
                (0, X.jsx)(`span`, {
                  className: `pl-4 [@container_(max-width:620px)]:sr-only`,
                  children: (0, X.jsx)(g, {
                    id: `appgenPage.list.modified`,
                    defaultMessage: `Modified`,
                    description: `Modified column header in the Library list`,
                  }),
                }),
                (0, X.jsx)(`span`, {}),
              ],
            })
          : null),
      (t[2] = f),
      (t[3] = h));
  let _;
  if (
    t[4] !== n ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== l ||
    t[9] !== u ||
    t[10] !== f
  ) {
    let e;
    (t[12] !== n || t[13] !== s || t[14] !== c || t[15] !== l || t[16] !== u || t[17] !== f
      ? ((e = (e) =>
          (0, X.jsx)(
            sr,
            {
              cloudFileThumbnailResolver: n,
              item: e,
              viewMode: f,
              onEdit: s,
              onFileEdit: c,
              onImageEdit: l,
              onPreview: u,
            },
            e.id,
          )),
        (t[12] = n),
        (t[13] = s),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u),
        (t[17] = f),
        (t[18] = e))
      : (e = t[18]),
      (_ = o.map(e)),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = f),
      (t[11] = _));
  } else _ = t[11];
  let v;
  t[19] !== m || t[20] !== h || t[21] !== _
    ? ((v = (0, X.jsxs)(`div`, { className: m, children: [h, _] })),
      (t[19] = m),
      (t[20] = h),
      (t[21] = _),
      (t[22] = v))
    : (v = t[22]);
  let y;
  t[23] === r
    ? (y = t[24])
    : ((y = r
        ? (0, X.jsx)(`div`, {
            className: `px-3 py-2 text-xs text-token-text-secondary`,
            children: (0, X.jsx)(g, {
              id: `appgenPage.partialError`,
              defaultMessage: `Some library items couldn't be loaded`,
              description: `Inline warning shown when one Library source fails to load`,
            }),
          })
        : null),
      (t[23] = r),
      (t[24] = y));
  let b;
  t[25] === d
    ? (b = t[26])
    : ((b = () => {
        d();
      }),
      (t[25] = d),
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
        : ((e = Mt(r.image.desktopPath)), (t[17] = r.image.desktopPath), (t[18] = e));
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
    ((cr = N()),
      L(),
      B(),
      b(),
      xe(),
      ln(),
      H(),
      Ot(),
      et(),
      kt(),
      jt(),
      On(),
      Bn(),
      Un(),
      Yn(),
      m(),
      Qn(),
      Ht(),
      er(),
      (X = U()));
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
                    children: (0, Z.jsx)(g, {
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
    : ((l = Mt(r.image.desktopPath)), (t[7] = r.image.desktopPath), (t[8] = l));
  let u;
  t[9] !== r.image.name || t[10] !== r.image.path || t[11] !== l
    ? ((u = { image: { filename: o, id: s, localPath: c, src: l }, kind: `image` }),
      (t[9] = r.image.name),
      (t[10] = r.image.path),
      (t[11] = l),
      (t[12] = u))
    : (u = t[12]);
  let d = r.image.name,
    f;
  t[13] === r.image.desktopPath
    ? (f = t[14])
    : ((f = Mt(r.image.desktopPath)), (t[13] = r.image.desktopPath), (t[14] = f));
  let p;
  t[15] !== r.image.name || t[16] !== f
    ? ((p = (0, Z.jsx)(Oe, {
        alt: d,
        inline: !0,
        open: !0,
        src: f,
        zoomControlsPlacement: `header`,
        onOpenChange: mr,
      })),
      (t[15] = r.image.name),
      (t[16] = f),
      (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== r.image.name || t[19] !== i || t[20] !== u || t[21] !== p
      ? ((m = (0, Z.jsx)(gr, { assetName: a, previewAttachment: u, onClose: i, children: p })),
        (t[18] = r.image.name),
        (t[19] = i),
        (t[20] = u),
        (t[21] = p),
        (t[22] = m))
      : (m = t[22]),
    m
  );
}
function mr() {}
function hr(e) {
  let t = (0, yr.c)(21),
    { item: n, onClose: r } = e,
    { data: i, isError: a } = Ne(Sr, n.file.path),
    o = i?.previewPath,
    s,
    c;
  (t[0] === o
    ? ((s = t[1]), (c = t[2]))
    : ((s = () => {
        if (o != null)
          return () => {
            w.libraryFiles?.releaseFilePreview({ previewPath: o });
          };
      }),
      (c = [o]),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c)),
    (0, br.useEffect)(s, c));
  let l;
  t[3] === n.file.path ? (l = t[4]) : ((l = Ct(n.file.path)), (t[3] = n.file.path), (t[4] = l));
  let u = l,
    d;
  if (a) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(vr, {
          children: (0, Z.jsx)(g, {
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
          children: (0, Z.jsx)(g, {
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
          children: (0, Z.jsx)(g, {
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
      ? ((e = (0, Z.jsx)(Xe, {
          artifactType: u.artifactType,
          chromeMode: `standalone`,
          hostId: D,
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
    { assetName: n, children: r, onClose: i, previewAttachment: a } = e,
    o = Ce(),
    s = Me(),
    c;
  t[0] !== s || t[1] !== i
    ? ((c = (e, t) => {
        (i(), s(be(e), { state: t }));
      }),
      (t[0] = s),
      (t[1] = i),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] !== l || t[4] !== o || t[5] !== a
    ? ((u =
        a == null
          ? null
          : (0, Z.jsx)(P, {
              scope: ce,
              value: Ie(a),
              children: (0, Z.jsx)(Pt, {
                children: (0, Z.jsx)(St, {
                  composerLayoutMode: `auto-single-line`,
                  composerModeAvailability: xr,
                  defaultCwd: `~`,
                  hideRunLocationDropdownOverride: !0,
                  onLocalConversationCreated: l,
                  placeholderText: o.formatMessage({
                    id: `appgenPage.filePreview.composerPlaceholder`,
                    defaultMessage: `Ask about this file`,
                    description: `Placeholder for the composer beneath a Library file preview`,
                  }),
                  showPlanKeywordSuggestion: !1,
                  showWorkspaceDropdownInFooter: !1,
                }),
              }),
            })),
      (t[3] = l),
      (t[4] = o),
      (t[5] = a),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== u
      ? ((d = (0, Z.jsx)(_r, { assetName: n, bottomContent: u, onClose: i, children: r })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = i),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function _r(e) {
  let t = (0, yr.c)(28),
    { assetName: n, bottomContent: r, children: i, endContent: a, onClose: o } = e,
    s = Ce(),
    c;
  t[0] === o ? (c = t[1]) : ((c = () => o()), (t[0] = o), (t[1] = c));
  let l = (0, br.useEffectEvent)(c),
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = () => {
        let e = (e) => {
          e.key !== `Escape` || e.defaultPrevented || l();
        };
        return (
          window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e)
        );
      }),
      (t[2] = l),
      (t[3] = u));
  let d;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = []), (t[4] = d)) : (d = t[4]),
    (0, br.useEffect)(u, d));
  let f;
  t[5] === s
    ? (f = t[6])
    : ((f = s.formatMessage({
        id: `appgenPage.filePreview.close`,
        defaultMessage: `Close preview`,
        description: `Accessible label for closing a Library file preview`,
      })),
      (t[5] = s),
      (t[6] = f));
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(ee, { "aria-hidden": !0, className: `icon-xs` })), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== o || t[9] !== f
    ? ((m = (0, Z.jsx)(fe, {
        "aria-label": f,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: o,
        children: p,
      })),
      (t[8] = o),
      (t[9] = f),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === n
    ? (h = t[12])
    : ((h = (0, Z.jsx)(`div`, {
        className: `truncate text-sm font-medium text-token-foreground`,
        children: n,
      })),
      (t[11] = n),
      (t[12] = h));
  let g;
  t[13] !== m || t[14] !== h
    ? ((g = (0, Z.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [m, h] })),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] !== a || t[17] !== g
    ? ((_ = (0, Z.jsxs)(`div`, {
        className: `flex h-toolbar shrink-0 items-center justify-between gap-4 border-b border-token-border-light px-3`,
        children: [g, a],
      })),
      (t[16] = a),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v = r == null ? `h-full` : `h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))]`,
    y;
  t[19] === v ? (y = t[20]) : ((y = G(`min-h-0`, v)), (t[19] = v), (t[20] = y));
  let b;
  t[21] !== i || t[22] !== y
    ? ((b = (0, Z.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, Z.jsx)(`div`, { className: y, children: i }),
      })),
      (t[21] = i),
      (t[22] = y),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== r || t[25] !== b || t[26] !== _
      ? ((x = (0, Z.jsxs)(`div`, {
          className: `relative flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [_, b, r],
        })),
        (t[24] = r),
        (t[25] = b),
        (t[26] = _),
        (t[27] = x))
      : (x = t[27]),
    x
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
    ((yr = N()),
      L(),
      B(),
      pe(),
      (br = t(Le(), 1)),
      b(),
      le(),
      He(),
      wt(),
      xe(),
      ve(),
      xt(),
      i(),
      E(),
      C(),
      c(),
      he(),
      Nt(),
      jt(),
      fr(),
      (Z = U()),
      (xr = {
        fallbackMode: `local`,
        isAvailabilityLoading: !1,
        isCloudAvailable: !1,
        isLocalAvailable: !0,
        isWorktreeAvailable: !1,
      }),
      (Sr = ye(x, (e) => ({
        gcTime: 0,
        queryKey: [`library-file-preview`, e],
        queryFn: ({ signal: t }) => {
          let n = w.libraryFiles;
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
    (t(Le()),
      (wr = U()),
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
    (t(Le()),
      (Dr = U()),
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
    (t(Le()),
      (Ar = U()),
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
    (t(Le()),
      (Nr = U()),
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
    u = Ce(),
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
        label: (0, Q.jsx)(g, {
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
        label: (0, Q.jsx)(g, {
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
        label: (0, Q.jsx)(g, {
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
          label: (0, Q.jsx)(g, {
            id: `appgenPage.type.images`,
            defaultMessage: `Images`,
            description: `Library tab that shows generated images`,
          }),
        },
      ]),
      (t[5] = h))
    : (h = t[5]);
  let _;
  t[6] !== r || t[7] !== o || t[8] !== d
    ? ((_ = (0, Q.jsx)(gn, {
        ariaLabel: d,
        options: h,
        selectedId: r,
        size: `toolbar`,
        onSelect: o,
      })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = d),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== n || t[11] !== r || t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== s
    ? ((v = (0, Q.jsx)(Lr, {
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
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== c || t[18] !== l
    ? ((y = (0, Q.jsx)(Br, { viewMode: l, onViewModeChange: c })),
      (t[17] = c),
      (t[18] = l),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] !== v || t[21] !== y
    ? ((b = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [v, y] })),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b))
    : (b = t[22]);
  let x;
  return (
    t[23] !== _ || t[24] !== b
      ? ((x = (0, Q.jsxs)(Lt, { children: [_, b] })), (t[23] = _), (t[24] = b), (t[25] = x))
      : (x = t[25]),
    x
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
    c = Ce(),
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
  let u = (r === `sites` && n !== `all`) || r !== `all` || i !== `all` ? `secondary` : `ghost`,
    d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(vn, { "aria-hidden": !0, className: `icon-sm text-token-text-secondary` })),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== l || t[4] !== u
    ? ((f = (0, Q.jsx)(fe, {
        "aria-label": l,
        color: u,
        size: `toolbar`,
        uniform: !0,
        children: d,
      })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== r || t[7] !== i || t[8] !== o || t[9] !== s
    ? ((p = (0, Q.jsx)(zr, {
        contentType: r,
        fileFilter: i,
        onContentTypeChange: o,
        onFileFilterChange: s,
      })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((m =
        r === `sites`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(v.Separator, {}),
                (0, Q.jsx)(Rr, { accessFilter: n, onAccessFilterChange: a }),
              ],
            })
          : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== f || t[16] !== p || t[17] !== m
      ? ((h = (0, Q.jsxs)(R, {
          align: `end`,
          contentWidth: `menuNarrow`,
          triggerButton: f,
          children: [p, m],
        })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function Rr(e) {
  let t = (0, Vr.c)(23),
    { accessFilter: n, onAccessFilterChange: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(v.Title, {
        children: (0, Q.jsx)(g, {
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
    ? ((s = (0, Q.jsx)(g, {
        id: `appgenPage.filter.all`,
        defaultMessage: `All`,
        description: `Filter option that shows all sites`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== a || t[5] !== o
    ? ((c = (0, Q.jsx)(v.Item, { RightIcon: a, onSelect: o, children: s })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let l = n === `private` ? W : void 0,
    u;
  t[7] === r ? (u = t[8]) : ((u = () => r(`private`)), (t[7] = r), (t[8] = u));
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(g, {
        id: `appgenPage.filter.private`,
        defaultMessage: `Private`,
        description: `Filter option that shows private sites`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== l || t[11] !== u
    ? ((f = (0, Q.jsx)(v.Item, { RightIcon: l, onSelect: u, children: d })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = f))
    : (f = t[12]);
  let p = n === `shared` ? W : void 0,
    m;
  t[13] === r ? (m = t[14]) : ((m = () => r(`shared`)), (t[13] = r), (t[14] = m));
  let h;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(g, {
        id: `appgenPage.filter.shared`,
        defaultMessage: `Shared`,
        description: `Filter option that shows shared sites`,
      })),
      (t[15] = h))
    : (h = t[15]);
  let _;
  t[16] !== p || t[17] !== m
    ? ((_ = (0, Q.jsx)(v.Item, { RightIcon: p, onSelect: m, children: h })),
      (t[16] = p),
      (t[17] = m),
      (t[18] = _))
    : (_ = t[18]);
  let y;
  return (
    t[19] !== _ || t[20] !== c || t[21] !== f
      ? ((y = (0, Q.jsxs)(Q.Fragment, { children: [i, c, f, _] })),
        (t[19] = _),
        (t[20] = c),
        (t[21] = f),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
function zr(e) {
  let t = (0, Vr.c)(55),
    { contentType: n, fileFilter: r, onContentTypeChange: i, onFileFilterChange: a } = e,
    o = ue() ? Tr : Or,
    c;
  t[0] !== i || t[1] !== a
    ? ((c = (e) => {
        (i(`all`), a(e));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(v.Title, {
        children: (0, Q.jsx)(g, {
          id: `appgenPage.filter.library`,
          defaultMessage: `View`,
          description: `Heading for content filters in the Library`,
        }),
      })),
      (t[3] = d))
    : (d = t[3]);
  let f = n === `all` && r === `all` ? W : void 0,
    p;
  t[4] === l ? (p = t[5]) : ((p = () => l(`all`)), (t[4] = l), (t[5] = p));
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(g, {
        id: `appgenPage.filter.allFiles`,
        defaultMessage: `All`,
        description: `Filter option that shows every Library item`,
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== f || t[8] !== p
    ? ((h = (0, Q.jsx)(v.Item, { LeftIcon: yt, RightIcon: f, onSelect: p, children: m })),
      (t[7] = f),
      (t[8] = p),
      (t[9] = h))
    : (h = t[9]);
  let _ = n === `sites` ? W : void 0,
    y;
  t[10] === i ? (y = t[11]) : ((y = () => i(`sites`)), (t[10] = i), (t[11] = y));
  let b;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(g, {
        id: `appgenPage.filter.sites`,
        defaultMessage: `Sites`,
        description: `Filter option that shows sites in the Library`,
      })),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== _ || t[14] !== y
    ? ((x = (0, Q.jsx)(v.Item, { LeftIcon: st, RightIcon: _, onSelect: y, children: b })),
      (t[13] = _),
      (t[14] = y),
      (t[15] = x))
    : (x = t[15]);
  let S = n === `images` ? W : void 0,
    C;
  t[16] === i ? (C = t[17]) : ((C = () => i(`images`)), (t[16] = i), (t[17] = C));
  let w;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(g, {
        id: `appgenPage.filter.images`,
        defaultMessage: `Images`,
        description: `Filter option that shows images in the Library`,
      })),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== o || t[20] !== S || t[21] !== C
    ? ((T = (0, Q.jsx)(v.Item, { LeftIcon: o, RightIcon: S, onSelect: C, children: w })),
      (t[19] = o),
      (t[20] = S),
      (t[21] = C),
      (t[22] = T))
    : (T = t[22]);
  let E = n === `all` && r === `document` ? W : void 0,
    D;
  t[23] === l ? (D = t[24]) : ((D = () => l(`document`)), (t[23] = l), (t[24] = D));
  let O;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(g, {
        id: `appgenPage.filter.documents`,
        defaultMessage: `Documents`,
        description: `Filter option that shows documents in the Library`,
      })),
      (t[25] = O))
    : (O = t[25]);
  let k;
  t[26] !== E || t[27] !== D
    ? ((k = (0, Q.jsx)(v.Item, { LeftIcon: s, RightIcon: E, onSelect: D, children: O })),
      (t[26] = E),
      (t[27] = D),
      (t[28] = k))
    : (k = t[28]);
  let A = n === `all` && r === `spreadsheet` ? W : void 0,
    j;
  t[29] === l ? (j = t[30]) : ((j = () => l(`spreadsheet`)), (t[29] = l), (t[30] = j));
  let M;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(g, {
        id: `appgenPage.filter.spreadsheets`,
        defaultMessage: `Spreadsheets`,
        description: `Filter option that shows spreadsheets in the Library`,
      })),
      (t[31] = M))
    : (M = t[31]);
  let N;
  t[32] !== A || t[33] !== j
    ? ((N = (0, Q.jsx)(v.Item, { LeftIcon: ne, RightIcon: A, onSelect: j, children: M })),
      (t[32] = A),
      (t[33] = j),
      (t[34] = N))
    : (N = t[34]);
  let ee = n === `all` && r === `presentation` ? W : void 0,
    P;
  t[35] === l ? (P = t[36]) : ((P = () => l(`presentation`)), (t[35] = l), (t[36] = P));
  let F;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(g, {
        id: `appgenPage.filter.presentations`,
        defaultMessage: `Presentations`,
        description: `Filter option that shows presentations in the Library`,
      })),
      (t[37] = F))
    : (F = t[37]);
  let I;
  t[38] !== ee || t[39] !== P
    ? ((I = (0, Q.jsx)(v.Item, { LeftIcon: u, RightIcon: ee, onSelect: P, children: F })),
      (t[38] = ee),
      (t[39] = P),
      (t[40] = I))
    : (I = t[40]);
  let te = n === `all` && r === `pdf` ? W : void 0,
    L;
  t[41] === l ? (L = t[42]) : ((L = () => l(`pdf`)), (t[41] = l), (t[42] = L));
  let R;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(g, {
        id: `appgenPage.filter.pdfs`,
        defaultMessage: `PDFs`,
        description: `Filter option that shows PDFs in the Library`,
      })),
      (t[43] = R))
    : (R = t[43]);
  let re;
  t[44] !== te || t[45] !== L
    ? ((re = (0, Q.jsx)(v.Item, { LeftIcon: ge, RightIcon: te, onSelect: L, children: R })),
      (t[44] = te),
      (t[45] = L),
      (t[46] = re))
    : (re = t[46]);
  let ie;
  return (
    t[47] !== x ||
    t[48] !== T ||
    t[49] !== k ||
    t[50] !== N ||
    t[51] !== I ||
    t[52] !== re ||
    t[53] !== h
      ? ((ie = (0, Q.jsxs)(Q.Fragment, { children: [d, h, x, T, k, N, I, re] })),
        (t[47] = x),
        (t[48] = T),
        (t[49] = k),
        (t[50] = N),
        (t[51] = I),
        (t[52] = re),
        (t[53] = h),
        (t[54] = ie))
      : (ie = t[54]),
    ie
  );
}
function Br(e) {
  let t = (0, Vr.c)(20),
    { onViewModeChange: n, viewMode: r } = e,
    i = Ce(),
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
    ((Vr = N()),
      b(),
      xe(),
      oe(),
      It(),
      hn(),
      Ae(),
      Er(),
      kr(),
      r(),
      O(),
      p(),
      Pe(),
      _n(),
      Mr(),
      _t(),
      Fr(),
      ft(),
      je(),
      (Q = U()));
  });
function Ur(e) {
  let t = (0, oi.c)(133),
    {
      cloudFilesApi: n,
      cloudFileThumbnailResolver: r,
      cloudFileUploader: i,
      cloudPreviewRenderer: a,
      localSourcesEnabled: s,
    } = e,
    c = s === void 0 ? !0 : s,
    l = te(o),
    u = Ce(),
    d = Me(),
    [f, p] = (0, si.useState)(``),
    { scrollContainerRef: m, showTitleInToolbar: h, titleRef: _ } = Bt(),
    [v, y] = (0, si.useState)(`list`),
    [b, x] = (0, si.useState)(`all`),
    [S, C] = (0, si.useState)(`all`),
    [w, T] = (0, si.useState)(`all`),
    [E, D] = (0, si.useState)(null),
    [O, k] = (0, si.useState)(0),
    A;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = []), (t[0] = A)) : (A = t[0]);
  let [M, N] = (0, si.useState)(A),
    ee = (0, si.useRef)(null),
    P = c && (S === `sites` || (S === `all` && w === `all`)),
    F = c && (S === `files` || S === `all`),
    L = c && (S === `images` || (S === `all` && w === `all`)),
    ne;
  t[1] !== S || t[2] !== w ? ((ne = ti(S, w)), (t[1] = S), (t[2] = w), (t[3] = ne)) : (ne = t[3]);
  let R = ne,
    re;
  t[4] === f ? (re = t[5]) : ((re = f.trim()), (t[4] = f), (t[5] = re));
  let z = me(re, 300),
    oe;
  t[6] !== S || t[7] !== z || t[8] !== w
    ? ((oe = [`appgen-library-cloud-files`, S, w, z]),
      (t[6] = S),
      (t[7] = z),
      (t[8] = w),
      (t[9] = oe))
    : (oe = t[9]);
  let se;
  t[10] !== R || t[11] !== n || t[12] !== z
    ? ((se = (e) => {
        let { pageParam: t } = e;
        if (n == null || R === void 0) throw Error(`Cloud Library files are unavailable`);
        return n.search({ categories: R, cursor: t, limit: ci, query: z });
      }),
      (t[10] = R),
      (t[11] = n),
      (t[12] = z),
      (t[13] = se))
    : (se = t[13]);
  let ce = n != null && R !== void 0,
    le;
  t[14] !== oe || t[15] !== se || t[16] !== ce
    ? ((le = {
        queryKey: oe,
        initialPageParam: null,
        queryFn: se,
        enabled: ce,
        getNextPageParam: $r,
        retry: !1,
        select: Zr,
        staleTime: ie.FIVE_SECONDS,
      }),
      (t[14] = oe),
      (t[15] = se),
      (t[16] = ce),
      (t[17] = le))
    : (le = t[17]);
  let B = I(le),
    ue;
  t[18] !== R || t[19] !== n || t[20] !== B
    ? ((ue =
        n == null || R === void 0
          ? void 0
          : {
              files: B.data,
              fetchNextPage: B.fetchNextPage,
              hasLoadError: B.isError || B.isFetchNextPageError,
              hasNextPage: B.hasNextPage === !0 && !B.isFetchNextPageError,
              isEnabled: !0,
              isFetchingNextPage: B.isFetchingNextPage,
              isLoading: B.isLoading,
              isRefetching: B.isRefetching,
              refetch: B.refetch,
            }),
      (t[18] = R),
      (t[19] = n),
      (t[20] = B),
      (t[21] = ue))
    : (ue = t[21]);
  let de = ue,
    V = i != null && n != null && R !== void 0,
    H = M.length > 0,
    { setSelectedMode: pe } = $e(),
    he = Tt(),
    U,
    ge;
  (t[22] === l
    ? ((U = t[23]), (ge = t[24]))
    : ((U = () => () => {
        (l.set(Je, !1), Ue(l, !1));
      }),
      (ge = [l]),
      (t[22] = l),
      (t[23] = U),
      (t[24] = ge)),
    (0, si.useLayoutEffect)(U, ge));
  let W;
  t[25] !== l || t[26] !== pe || t[27] !== he
    ? ((W = () => {
        tn(l, he, { type: `create`, setSelectedMode: pe });
      }),
      (t[25] = l),
      (t[26] = pe),
      (t[27] = he),
      (t[28] = W))
    : (W = t[28]);
  let _e = W,
    ve;
  t[29] !== l || t[30] !== he
    ? ((ve = (e) => {
        tn(l, he, { type: `create-asset`, assetType: e });
      }),
      (t[29] = l),
      (t[30] = he),
      (t[31] = ve))
    : (ve = t[31]);
  let ye = ve,
    be;
  t[32] !== l || t[33] !== he
    ? ((be = (e, t, n) => {
        tn(l, he, { type: `edit`, liveUrl: n, projectId: e, projectTitle: t });
      }),
      (t[32] = l),
      (t[33] = he),
      (t[34] = be))
    : (be = t[34]);
  let xe = be,
    Se;
  t[35] !== d || t[36] !== l
    ? ((Se = (e) => {
        nn(l, d, e.file.name, e.file.path, e.file.threadId);
      }),
      (t[35] = d),
      (t[36] = l),
      (t[37] = Se))
    : (Se = t[37]);
  let we = Se,
    Te;
  t[38] !== d || t[39] !== l
    ? ((Te = (e) => {
        nn(l, d, e.image.name, e.image.path, e.image.threadId);
      }),
      (t[38] = d),
      (t[39] = l),
      (t[40] = Te))
    : (Te = t[40]);
  let Ee = Te,
    De;
  t[41] === l
    ? (De = t[42])
    : ((De = (e) => {
        (D(e), l.set(Je, !0), Ue(l, !0));
      }),
      (t[41] = l),
      (t[42] = De));
  let Oe = De,
    ke;
  t[43] === l
    ? (ke = t[44])
    : ((ke = () => {
        (D(null), l.set(Je, !1), Ue(l, !1));
      }),
      (t[43] = l),
      (t[44] = ke));
  let Ae = ke,
    je;
  t[45] !== V || t[46] !== H
    ? ((je = (e) => {
        if (!(!V || !pt(e.dataTransfer))) {
          if ((e.preventDefault(), e.stopPropagation(), H)) {
            e.dataTransfer.dropEffect = `none`;
            return;
          }
          ((e.dataTransfer.dropEffect = `copy`), k(Xr));
        }
      }),
      (t[45] = V),
      (t[46] = H),
      (t[47] = je))
    : (je = t[47]);
  let Ne = je,
    G;
  t[48] !== V || t[49] !== H
    ? ((G = (e) => {
        !V ||
          !pt(e.dataTransfer) ||
          (e.preventDefault(),
          e.stopPropagation(),
          (e.dataTransfer.dropEffect = H ? `none` : `copy`));
      }),
      (t[48] = V),
      (t[49] = H),
      (t[50] = G))
    : (G = t[50]);
  let Pe = G,
    Fe;
  t[51] === V
    ? (Fe = t[52])
    : ((Fe = (e) => {
        !V || !pt(e.dataTransfer) || k(Yr);
      }),
      (t[51] = V),
      (t[52] = Fe));
  let Ie = Fe,
    Le,
    Re;
  if (
    t[53] !== V ||
    t[54] !== i ||
    t[55] !== B ||
    t[56] !== S ||
    t[57] !== z ||
    t[58] !== w ||
    t[59] !== u ||
    t[60] !== H ||
    t[61] !== l
  ) {
    ((Le = (t) => {
      if (!V || !pt(t.dataTransfer) || (t.preventDefault(), t.stopPropagation(), k(0), H)) return;
      let n = ei(t.dataTransfer);
      n.length > 0 && e(n);
    }),
      (Re = (t) => {
        let n = Array.from(t.currentTarget.files ?? []);
        ((t.currentTarget.value = ``), !(n.length === 0 || H) && e(n));
      }));
    let e = async (e) => {
      if (i == null) return;
      let t = e.map(Jr);
      N(t);
      let n = 0,
        r = 0,
        a = [];
      for (let [o, s] of e.entries()) {
        let e = t[o];
        try {
          let t = await i(s);
          if (
            ((r += 1), e != null && $t({ contentType: S, file: e, fileFilter: w, searchQuery: z }))
          ) {
            (a.push(t.fileId),
              N((n) => n.map((n) => (n.id === e.id ? { ...n, uploadedFileId: t.fileId } : n))));
            continue;
          }
          e != null && N((t) => t.filter((t) => t.id !== e.id));
        } catch {
          ((n += 1), N((t) => t.filter((t) => t.id !== e?.id)));
        }
      }
      let o = a.length === 0;
      if (a.length > 0) {
        let e = new Set(a);
        for (let t = 0; t < ui; t += 1) {
          let t = await B.refetch(),
            n = new Set((t.data ?? []).map(qr).filter((t) => e.has(t))),
            r = Math.min(a.length, Math.max(t.data?.length ?? 0, ci)),
            i = n.size >= r,
            s = i ? e : n;
          if (
            (N((e) => e.filter((e) => e.uploadedFileId == null || !s.has(e.uploadedFileId))), i)
          ) {
            o = !0;
            break;
          }
          await new Promise(Kr);
        }
      } else r > 0 && (await B.refetch(), (o = !0));
      if ((o || N(Wr), n === 0)) {
        if (!o) {
          l.get(ae).warning(
            u.formatMessage({
              id: `appgenPage.cloudUpload.delayed`,
              defaultMessage: `Upload complete. Files may take a moment to appear`,
              description: `Toast shown when cloud Library uploads finish but the uploaded files are not visible in the refreshed Library list yet`,
            }),
          );
          return;
        }
        l.get(ae).success(
          u.formatMessage(
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
        l.get(ae).warning(
          u.formatMessage(
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
      l.get(ae).danger(
        u.formatMessage({
          id: `appgenPage.cloudUpload.failure`,
          defaultMessage: `Unable to upload files`,
          description: `Toast shown when every cloud Library upload fails`,
        }),
      );
    };
    ((t[53] = V),
      (t[54] = i),
      (t[55] = B),
      (t[56] = S),
      (t[57] = z),
      (t[58] = w),
      (t[59] = u),
      (t[60] = H),
      (t[61] = l),
      (t[62] = Le),
      (t[63] = Re));
  } else ((Le = t[62]), (Re = t[63]));
  let ze;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (e) => {
        (C(e), T(`all`));
      }),
      (t[64] = ze))
    : (ze = t[64]);
  let Be = ze,
    Ve;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (e) => {
        (C(`all`), T(e));
      }),
      (t[65] = Ve))
    : (Ve = t[65]);
  let He = Ve,
    We;
  t[66] !== V || t[67] !== Re || t[68] !== u || t[69] !== H
    ? ((We = V
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`input`, {
                ref: ee,
                "aria-label": u.formatMessage({
                  id: `appgenPage.cloudUpload.inputLabel`,
                  defaultMessage: `Upload library files`,
                  description: `Accessible label for the hidden cloud Library file upload input`,
                }),
                className: `hidden`,
                disabled: H,
                multiple: !0,
                type: `file`,
                onChange: Re,
              }),
              (0, $.jsxs)(fe, {
                color: `outline`,
                disabled: H,
                size: `toolbar`,
                onClick: () => {
                  ee.current?.click();
                },
                children: [
                  (0, $.jsx)(at, { className: `icon-sm` }),
                  (0, $.jsx)(g, {
                    id: `appgenPage.cloudUpload.button`,
                    defaultMessage: `Upload`,
                    description: `Button label for uploading files to the cloud Library`,
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[66] = V),
      (t[67] = Re),
      (t[68] = u),
      (t[69] = H),
      (t[70] = We))
    : (We = t[70]);
  let Ge = We,
    Ke;
  t[71] !== de ||
  t[72] !== Ge ||
  t[73] !== _e ||
  t[74] !== ye ||
  t[75] !== F ||
  t[76] !== L ||
  t[77] !== P ||
  t[78] !== h
    ? ((Ke = (0, $.jsx)(ri, {
        cloudSource: de,
        cloudUploadAction: Ge,
        showTitle: h,
        showFiles: F,
        showImages: L,
        showSites: P,
        onCreateAsset: ye,
        onCreateSite: _e,
      })),
      (t[71] = de),
      (t[72] = Ge),
      (t[73] = _e),
      (t[74] = ye),
      (t[75] = F),
      (t[76] = L),
      (t[77] = P),
      (t[78] = h),
      (t[79] = Ke))
    : (Ke = t[79]);
  let qe = Ke,
    Ye;
  t[80] === u
    ? (Ye = t[81])
    : ((Ye = u.formatMessage({
        id: `appgenPage.search`,
        defaultMessage: `Search library`,
        description: `Accessible label and placeholder for searching the Library`,
      })),
      (t[80] = u),
      (t[81] = Ye));
  let Xe = Ye,
    Ze;
  t[82] === qe
    ? (Ze = t[83])
    : ((Ze = (0, $.jsx)(j, { extension: !0, children: qe })), (t[82] = qe), (t[83] = Ze));
  let Qe;
  t[84] === qe
    ? (Qe = t[85])
    : ((Qe = (0, $.jsx)(j, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(ht.Header, { children: qe }),
      })),
      (t[84] = qe),
      (t[85] = Qe));
  let et;
  t[86] !== a || t[87] !== Ae || t[88] !== E
    ? ((et =
        E == null
          ? null
          : (0, $.jsx)(ht.RightPanelOutlet, {
              children: (0, $.jsx)(pr, { cloudPreviewRenderer: a, item: E, onClose: Ae }),
            })),
      (t[86] = a),
      (t[87] = Ae),
      (t[88] = E),
      (t[89] = et))
    : (et = t[89]);
  let tt, nt;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, $.jsx)(g, {
        id: `appgenPage.library.title`,
        defaultMessage: `Library`,
        description: `Title shown at the top of the Library page`,
      })),
      (nt = (0, $.jsx)(g, {
        id: `appgenPage.library.subtitle`,
        defaultMessage: `Organize and reuse files, images and sites created across chats`,
        description: `Subtitle shown at the top of the Library page`,
      })),
      (t[90] = tt),
      (t[91] = nt))
    : ((tt = t[90]), (nt = t[91]));
  let rt;
  t[92] !== Xe || t[93] !== f
    ? ((rt = {
        autoFocus: !0,
        id: `appgen-site-search`,
        label: Xe,
        onSearchQueryChange: p,
        placeholder: Xe,
        searchQuery: f,
      }),
      (t[92] = Xe),
      (t[93] = f),
      (t[94] = rt))
    : (rt = t[94]);
  let it;
  t[95] !== b || t[96] !== S || t[97] !== w || t[98] !== v
    ? ((it = (0, $.jsx)(Ir, {
        accessFilter: b,
        contentType: S,
        fileFilter: w,
        viewMode: v,
        onAccessFilterChange: x,
        onContentTypeChange: Be,
        onFileFilterChange: He,
        onViewModeChange: y,
      })),
      (t[95] = b),
      (t[96] = S),
      (t[97] = w),
      (t[98] = v),
      (t[99] = it))
    : (it = t[99]);
  let ot;
  t[100] !== b ||
  t[101] !== r ||
  t[102] !== de ||
  t[103] !== S ||
  t[104] !== w ||
  t[105] !== _e ||
  t[106] !== xe ||
  t[107] !== we ||
  t[108] !== Ee ||
  t[109] !== Oe ||
  t[110] !== c ||
  t[111] !== f ||
  t[112] !== M ||
  t[113] !== v
    ? ((ot = (0, $.jsx)(tr, {
        accessFilter: b,
        cloudFileThumbnailResolver: r,
        cloudSource: de,
        cloudUploadingFiles: M,
        contentType: S,
        fileFilter: w,
        localSourcesEnabled: c,
        searchQuery: f,
        viewMode: v,
        onCreate: _e,
        onEdit: xe,
        onFileEdit: we,
        onImageEdit: Ee,
        onPreview: Oe,
      })),
      (t[100] = b),
      (t[101] = r),
      (t[102] = de),
      (t[103] = S),
      (t[104] = w),
      (t[105] = _e),
      (t[106] = xe),
      (t[107] = we),
      (t[108] = Ee),
      (t[109] = Oe),
      (t[110] = c),
      (t[111] = f),
      (t[112] = M),
      (t[113] = v),
      (t[114] = ot))
    : (ot = t[114]);
  let st;
  t[115] !== m || t[116] !== rt || t[117] !== it || t[118] !== ot || t[119] !== _
    ? ((st = (0, $.jsx)(Ft, {
        scrollContainerRef: m,
        title: tt,
        subtitle: nt,
        titleRef: _,
        search: rt,
        controls: it,
        children: ot,
      })),
      (t[115] = m),
      (t[116] = rt),
      (t[117] = it),
      (t[118] = ot),
      (t[119] = _),
      (t[120] = st))
    : (st = t[120]);
  let ct;
  t[121] === O
    ? (ct = t[122])
    : ((ct = O > 0 ? (0, $.jsx)(ii, {}) : null), (t[121] = O), (t[122] = ct));
  let lt;
  return (
    t[123] !== Ne ||
    t[124] !== Ie ||
    t[125] !== Pe ||
    t[126] !== Le ||
    t[127] !== Ze ||
    t[128] !== Qe ||
    t[129] !== et ||
    t[130] !== st ||
    t[131] !== ct
      ? ((lt = (0, $.jsxs)(`div`, {
          className: `relative flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          onDragEnter: Ne,
          onDragOver: Pe,
          onDragLeave: Ie,
          onDrop: Le,
          children: [Ze, Qe, et, st, ct],
        })),
        (t[123] = Ne),
        (t[124] = Ie),
        (t[125] = Pe),
        (t[126] = Le),
        (t[127] = Ze),
        (t[128] = Qe),
        (t[129] = et),
        (t[130] = st),
        (t[131] = ct),
        (t[132] = lt))
      : (lt = t[132]),
    lt
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
  let t = Ze(e, { includeDirectories: !1 });
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
      showTitle: s,
      showFiles: c,
      showImages: l,
      showSites: u,
    } = e,
    p = te(o),
    m = Ce(),
    h;
  t[0] === u ? (h = t[1]) : ((h = { enabled: u }), (t[0] = u), (t[1] = h));
  let { isFetchingNextPage: _, isLoading: v, isRefetching: y, refetch: b } = d(h),
    { isLoading: x, isRefetching: S } = f($n),
    { isLoading: C, isRefetching: w } = f(Zn),
    T = y || S || w || n?.isRefetching === !0,
    E;
  t[2] === m
    ? (E = t[3])
    : ((E = m.formatMessage({
        id: `appgenPage.library.refresh`,
        defaultMessage: `Refresh library`,
        description: `Accessible label for refreshing the Library`,
      })),
      (t[2] = m),
      (t[3] = E));
  let D = E,
    O;
  t[4] === s
    ? (O = t[5])
    : ((O = s
        ? (0, $.jsx)(g, {
            id: `appgenPage.library.title`,
            defaultMessage: `Library`,
            description: `Title shown at the top of the Library page`,
          })
        : null),
      (t[4] = s),
      (t[5] = O));
  let k = (u && v) || (c && x) || (l && C) || n?.isLoading === !0 || T || _,
    A;
  t[6] !== n || t[7] !== b || t[8] !== p || t[9] !== c || t[10] !== l || t[11] !== u
    ? ((A = () => {
        Promise.all([
          ...(u ? [b()] : []),
          ...(c ? [p.query.invalidate($n)] : []),
          ...(l ? [p.query.invalidate(Zn)] : []),
          ...(n?.isEnabled === !0 ? [n.refetch()] : []),
        ]);
      }),
      (t[6] = n),
      (t[7] = b),
      (t[8] = p),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = A))
    : (A = t[12]);
  let j;
  t[13] === T
    ? (j = t[14])
    : ((j = T ? null : (0, $.jsx)(dt, { className: `icon-xs` })), (t[13] = T), (t[14] = j));
  let N;
  t[15] !== T || t[16] !== D || t[17] !== k || t[18] !== A || t[19] !== j
    ? ((N = (0, $.jsx)(fe, {
        "aria-label": D,
        color: `ghost`,
        disabled: k,
        loading: T,
        onClick: A,
        size: `toolbar`,
        uniform: !0,
        children: j,
      })),
      (t[15] = T),
      (t[16] = D),
      (t[17] = k),
      (t[18] = A),
      (t[19] = j),
      (t[20] = N))
    : (N = t[20]);
  let ee;
  t[21] !== D || t[22] !== N
    ? ((ee = (0, $.jsx)(M, { tooltipContent: D, children: N })),
      (t[21] = D),
      (t[22] = N),
      (t[23] = ee))
    : (ee = t[23]);
  let P;
  t[24] !== i || t[25] !== a
    ? ((P = (0, $.jsx)(ai, { onCreateAsset: i, onCreateSite: a })),
      (t[24] = i),
      (t[25] = a),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] !== r || t[28] !== ee || t[29] !== P
    ? ((F = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [ee, r, P] })),
      (t[27] = r),
      (t[28] = ee),
      (t[29] = P),
      (t[30] = F))
    : (F = t[30]);
  let I;
  return (
    t[31] !== F || t[32] !== O
      ? ((I = (0, $.jsx)(vt, { start: O, trailing: F })), (t[31] = F), (t[32] = O), (t[33] = I))
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
        children: (0, $.jsx)(at, { className: `size-12` }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(`div`, {
        className: `text-2xl leading-8 font-medium text-token-foreground`,
        children: (0, $.jsx)(g, {
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
                children: (0, $.jsx)(g, {
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
    i = Ce(),
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
  let o, c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.trigger`,
        defaultMessage: `Create`,
        description: `Button label for opening the Library create menu`,
      })),
      (c = (0, $.jsx)(F, { "aria-hidden": !0, className: `icon-xs text-token-text-secondary` })),
      (t[2] = o),
      (t[3] = c))
    : ((o = t[2]), (c = t[3]));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = (0, $.jsxs)(fe, {
        "aria-label": a,
        color: `outline`,
        size: `toolbar`,
        children: [o, c],
      })),
      (t[4] = a),
      (t[5] = l));
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.site`,
        defaultMessage: `Create site`,
        description: `Menu item for creating a site from the Library`,
      })),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === r
    ? (f = t[8])
    : ((f = (0, $.jsx)(v.Item, { LeftIcon: st, onSelect: r, children: d })),
      (t[7] = r),
      (t[8] = f));
  let p;
  t[9] === n ? (p = t[10]) : ((p = () => n(`document`)), (t[9] = n), (t[10] = p));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.document`,
        defaultMessage: `Create document`,
        description: `Menu item for creating a document from the Library`,
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === p
    ? (h = t[13])
    : ((h = (0, $.jsx)(v.Item, { LeftIcon: s, onSelect: p, children: m })),
      (t[12] = p),
      (t[13] = h));
  let _;
  t[14] === n ? (_ = t[15]) : ((_ = () => n(`spreadsheet`)), (t[14] = n), (t[15] = _));
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.spreadsheet`,
        defaultMessage: `Create spreadsheet`,
        description: `Menu item for creating a spreadsheet from the Library`,
      })),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] === _
    ? (b = t[18])
    : ((b = (0, $.jsx)(v.Item, { LeftIcon: ne, onSelect: _, children: y })),
      (t[17] = _),
      (t[18] = b));
  let x;
  t[19] === n ? (x = t[20]) : ((x = () => n(`presentation`)), (t[19] = n), (t[20] = x));
  let S;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.presentation`,
        defaultMessage: `Create presentation`,
        description: `Menu item for creating a presentation from the Library`,
      })),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === x
    ? (C = t[23])
    : ((C = (0, $.jsx)(v.Item, { LeftIcon: u, onSelect: x, children: S })),
      (t[22] = x),
      (t[23] = C));
  let w;
  t[24] === n ? (w = t[25]) : ((w = () => n(`pdf`)), (t[24] = n), (t[25] = w));
  let T;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.pdf`,
        defaultMessage: `Create PDF`,
        description: `Menu item for creating a PDF from the Library`,
      })),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] === w
    ? (E = t[28])
    : ((E = (0, $.jsx)(v.Item, { LeftIcon: ge, onSelect: w, children: T })),
      (t[27] = w),
      (t[28] = E));
  let D;
  t[29] === n ? (D = t[30]) : ((D = () => n(`image`)), (t[29] = n), (t[30] = D));
  let O;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(g, {
        id: `appgenPage.createMenu.image`,
        defaultMessage: `Create image`,
        description: `Menu item for creating an image from the Library`,
      })),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] === D
    ? (k = t[33])
    : ((k = (0, $.jsx)(v.Item, { LeftIcon: rt, onSelect: D, children: O })),
      (t[32] = D),
      (t[33] = k));
  let A;
  return (
    t[34] !== b ||
    t[35] !== C ||
    t[36] !== E ||
    t[37] !== k ||
    t[38] !== l ||
    t[39] !== f ||
    t[40] !== h
      ? ((A = (0, $.jsxs)(R, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: l,
          children: [f, h, b, C, E, k],
        })),
        (t[34] = b),
        (t[35] = C),
        (t[36] = E),
        (t[37] = k),
        (t[38] = l),
        (t[39] = f),
        (t[40] = h),
        (t[41] = A))
      : (A = t[41]),
    A
  );
}
var oi, si, $, ci, li, ui, di, fi, pi;
e(() => {
  ((oi = N()),
    Fe(),
    B(),
    (si = t(Le(), 1)),
    b(),
    le(),
    Ye(),
    Ke(),
    Ve(),
    xe(),
    oe(),
    It(),
    Te(),
    de(),
    n(),
    ot(),
    ze(),
    Et(),
    a(),
    r(),
    O(),
    p(),
    Pe(),
    et(),
    ct(),
    Ge(),
    ft(),
    l(),
    bt(),
    h(),
    Ee(),
    on(),
    lr(),
    Cr(),
    Hr(),
    m(),
    Qn(),
    Ht(),
    er(),
    Qt(),
    ($ = U()),
    (ci = 25),
    (li = 2e3),
    (ui = 30),
    (di = [`video`, `audio`, `pdf`, `text`, `other`]),
    (fi = [`other`]),
    (pi = [`text`, `other`]));
})();
export { Ur as AppgenLibraryPage };
//# sourceMappingURL=appgen-library-page.js.map
