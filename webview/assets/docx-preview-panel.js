const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview.js", "./rolldown-runtime.js"]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  AL as i,
  BP as a,
  BV as o,
  DM as s,
  FB as c,
  F_ as l,
  I_ as u,
  JV as d,
  M_ as f,
  PB as p,
  QP as m,
  VP as h,
  bF as g,
  cP as _,
  cz as v,
  fv as y,
  iF as b,
  jL as x,
  kM as ee,
  lF as te,
  lP as ne,
  pv as S,
  qV as C,
  sz as re,
  yF as w,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Ba as T,
  Ha as ie,
  Va as ae,
  na as oe,
  oa as se,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  Ar as E,
  Cr as ce,
  Dr as D,
  Mr as le,
  Nr as O,
  Or as ue,
  Sr as de,
  Tr as fe,
  jr as k,
  kr as A,
  xr as pe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  $t as j,
  Qt as me,
  Xt as he,
  Yt as ge,
  Zt as M,
  an as _e,
  cd as N,
  cn as P,
  en as ve,
  fd as ye,
  in as be,
  ld as xe,
  ln as F,
  on as Se,
  pd as Ce,
  rn as we,
  sn as Te,
  tn as I,
  un as Ee,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  r as L,
  t as De,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb.js";
import {
  n as R,
  t as z,
} from "./app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel.js";
import { i as Oe, r as ke, t as B } from "./artifact-analytics.js";
import { a as Ae, n as V, r as je } from "./artifact-annotation-comment.js";
import { n as H, t as Me } from "./artifact-preview-status.js";
var U = e(() => {});
function Ne({ anchor: e, editorScale: t, layer: n, pageSize: r }) {
  return e.kind === `region` && e.selectionKind != null
    ? Se({ editorScale: t, layer: n, pageSize: r, rect: e.rect })
    : Te({
        editorScale: t,
        layer: n,
        markerPoint: e.kind === `region` ? P(e.rect) : e.point,
        pageSize: r,
      });
}
var W = e(() => {
  F();
});
function Pe(e, t) {
  let n = e.currentTarget.getBoundingClientRect();
  return n.width <= 0 || n.height <= 0
    ? null
    : {
        x: He(((e.clientX - n.left) / n.width) * t.width, 0, t.width),
        y: He(((e.clientY - n.top) / n.height) * t.height, 0, t.height),
      };
}
function G({ clientRects: e, pageElement: t, pageSize: n }) {
  let r = t.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  let i = Ke(e);
  if (i == null) return null;
  let a = He(((i.left - r.left) / r.width) * n.width, 0, n.width),
    o = He(((i.top - r.top) / r.height) * n.height, 0, n.height),
    s = He(((i.right - r.left) / r.width) * n.width, 0, n.width),
    c = He(((i.bottom - r.top) / r.height) * n.height, 0, n.height);
  return s <= a || c <= o ? null : { x: a, y: o, width: s - a, height: c - o };
}
function Fe({ clientRects: e, pageElement: t, pageSize: n }) {
  let r = [];
  for (let i of Ue(e)) {
    let e = G({ clientRects: [i], pageElement: t, pageSize: n });
    e != null && r.push(e);
  }
  return r;
}
function Ie(e) {
  return e.askForEditAnchor?.point ?? Ge(e.rect);
}
function Le({ clientRects: e, pageElement: t, pageSize: n, selection: r }) {
  let i = t.getBoundingClientRect();
  if (i.width <= 0 || i.height <= 0 || e.length === 0) return null;
  let a = Ke(e);
  if (a == null) return null;
  let o = qe(r),
    s = o ? e[e.length - 1] : e[0];
  if (s == null) return null;
  let c = s.top + s.height / 2,
    l = a.top + a.height / 2,
    u = s.top - 6 - 28 >= i.top,
    d = s.bottom + 6 + 28 <= i.bottom,
    f = c > l && d ? `below` : u ? `above` : `below`;
  return {
    placement: f,
    point: Re({
      clientX: o ? s.right : s.left,
      clientY: f === `above` ? s.top : s.bottom,
      pageElement: t,
      pageSize: n,
    }),
  };
}
function Re({ clientX: e, clientY: t, pageElement: n, pageSize: r }) {
  let i = n.getBoundingClientRect();
  return {
    x: He(((e - i.left) / i.width) * r.width, 0, r.width),
    y: He(((t - i.top) / i.height) * r.height, 0, r.height),
  };
}
function ze(e) {
  return (
    Math.abs(e.clientCurrent.x - e.clientStart.x) >= 3 ||
    Math.abs(e.clientCurrent.y - e.clientStart.y) >= 3
  );
}
function Be(e, t = !1) {
  let n = Ve(e.start, e.current);
  return !t && n.width < 8 && n.height < 8
    ? { kind: `point`, point: e.current }
    : { kind: `region`, rect: n };
}
function Ve(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    width: Math.abs(e.x - t.x),
    height: Math.abs(e.y - t.y),
  };
}
function He(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ue(e) {
  let t = [],
    n = e
      .filter((e) => e.width > 0 && e.height > 0)
      .sort((e, t) => e.top - t.top || e.left - t.left);
  for (let e of n) {
    let n = t.find((t) => We(t, e));
    if (n == null) {
      t.push({
        bottom: e.bottom,
        height: e.height,
        left: e.left,
        right: e.right,
        top: e.top,
        width: e.width,
      });
      continue;
    }
    ((n.left = Math.min(n.left, e.left)),
      (n.top = Math.min(n.top, e.top)),
      (n.right = Math.max(n.right, e.right)),
      (n.bottom = Math.max(n.bottom, e.bottom)),
      (n.width = n.right - n.left),
      (n.height = n.bottom - n.top));
  }
  return t;
}
function We(e, t) {
  return (
    Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) * 0.5
  );
}
function Ge(e) {
  return { x: e.x + e.width / 2, y: e.y };
}
function Ke(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let a of e)
    a.width <= 0 ||
      a.height <= 0 ||
      ((t = Math.min(t, a.left)),
      (n = Math.min(n, a.top)),
      (r = Math.max(r, a.right)),
      (i = Math.max(i, a.bottom)));
  return !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i)
    ? null
    : { bottom: i, height: i - n, left: t, right: r, top: n, width: r - t };
}
function qe(e) {
  if (e.anchorNode == null || e.focusNode == null) return !0;
  if (e.anchorNode === e.focusNode) return e.focusOffset >= e.anchorOffset;
  let t = e.anchorNode.compareDocumentPosition(e.focusNode);
  return t === Node.DOCUMENT_POSITION_FOLLOWING ? !0 : t !== Node.DOCUMENT_POSITION_PRECEDING;
}
var Je = e(() => {
  (U(), F());
});
function Ye({
  anchor: e,
  body: t,
  conversationId: n,
  pageNumber: r,
  pageSize: i,
  path: a,
  target: o,
  title: s,
}) {
  let c = e.kind === `region` ? e.rect : { x: e.point.x, y: e.point.y, width: 1, height: 1 },
    l = e.kind === `region` ? (e.selectionKind == null ? P(e.rect) : Ie(e)) : e.point;
  return {
    sessionId:
      o.mode === `edit`
        ? `docx-comment-edit:${o.commentId}`
        : e.kind === `region`
          ? [`docx-comment`, r, `region`, e.rect.x, e.rect.y, e.rect.width, e.rect.height].join(`:`)
          : [`docx-comment`, r, `point`, e.point.x, e.point.y].join(`:`),
    conversationId: n,
    target: o,
    anchorState: {
      anchor: {
        kind: `region`,
        pageUrl: a,
        frameUrl: null,
        title: s,
        elementPath: `docx-page-${r}`,
        point: { xPercent: i.width === 0 ? 0 : (l.x / i.width) * 100, y: l.y },
        rect: c,
        isFixed: !1,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null,
      },
      viewportRect: c,
      viewportPoint: l,
      viewportSize: i,
    },
    body: t,
    cwd: null,
    placementStrategy: `anchored`,
    previewAlignment: `end`,
    surfaceMode: `editor`,
  };
}
function Xe({ anchor: e, pageCount: t, pageNumber: n, pageSize: r }) {
  return e.kind === `region`
    ? e.selectionKind == null
      ? {
          target: {
            type: `document-page-region`,
            anchorPoint: P(e.rect),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
          },
        }
      : {
          contentPreview: e.contentPreview,
          target: {
            type: `document-element-selection`,
            selectionKind: e.selectionKind,
            anchorPoint: Ie(e),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
            selectionRects: e.selectionRects,
            selectedText: e.selectedText,
            nearbyText: e.nearbyText,
          },
        }
    : {
        target: {
          type: `document-page-point`,
          pageCount: t,
          pageNumber: n,
          pageSize: r,
          point: e.point,
        },
      };
}
function Ze(e, t) {
  return e.kind === `region` && e.selectionKind != null
    ? `Page ${t} ${e.selectionKind}`
    : e.kind === `region`
      ? `Page ${t} region`
      : `Page ${t} point`;
}
function Qe(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageNumber
    : null;
}
function $e(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageSize
    : null;
}
function et(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-region`
    ? { kind: `region`, rect: t.rect }
    : t?.type === `document-element-selection`
      ? {
          kind: `region`,
          ...(t.selectionKind === `text`
            ? { askForEditAnchor: { placement: `above`, point: t.anchorPoint } }
            : {}),
          rect: t.rect,
          contentPreview: e.localArtifactAnnotationMetadata?.contentPreview,
          selectionRects: t.selectionRects,
          selectionKind: t.selectionKind,
          selectedText: t.selectedText,
          nearbyText: t.nearbyText,
        }
      : t?.type === `document-page-point`
        ? { kind: `point`, point: t.point }
        : null;
}
function tt(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : [])).join(`
`);
}
function nt(e) {
  return [e.position.path, e.position.line, e.localArtifactAnnotationContext?.label ?? ``].join(
    `:`,
  );
}
var rt = e(() => {
  (Je(), F());
});
function it(e) {
  let t = (0, ct.c)(9),
    {
      bordered: n,
      borderWidth: r,
      paddingPx: i,
      paddingX: a,
      paddingY: o,
      pageSize: s,
      rect: c,
      testId: l,
    } = e,
    u = n === void 0 ? !1 : n,
    d = r === void 0 ? (u ? 1 : 0) : r,
    f = i === void 0 ? 0 : i,
    p = a === void 0 ? f : a,
    m = o === void 0 ? f : o,
    h;
  return (
    t[0] !== d ||
    t[1] !== u ||
    t[2] !== f ||
    t[3] !== p ||
    t[4] !== m ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l
      ? ((h = (0, q.jsx)(me, {
          bordered: u,
          borderWidth: d,
          paddingPx: f,
          paddingX: p,
          paddingY: m,
          pageSize: s,
          rect: c,
          testId: l,
        })),
        (t[0] = d),
        (t[1] = u),
        (t[2] = f),
        (t[3] = p),
        (t[4] = m),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = h))
      : (h = t[8]),
    h
  );
}
function at(e) {
  let t = (0, ct.c)(39),
    { comment: n, isSelected: r, onEdit: i, onPreviewChange: a, zoomScale: o } = e,
    s = te(),
    c,
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== n || t[1] !== s) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      c = et(n);
      let e;
      if (
        (t[8] === n ? (e = t[9]) : ((e = $e(n)), (t[8] = n), (t[9] = e)),
        (d = e),
        c == null || d == null)
      ) {
        p = null;
        break bb0;
      }
      let r;
      (t[10] === n ? (r = t[11]) : ((r = nt(n)), (t[10] = n), (t[11] = r)), (u = r));
      let i;
      (t[12] !== n.position.line || t[13] !== s
        ? ((i = s.formatMessage(
            {
              id: `artifactDocxPreview.commentMarkerLabel`,
              defaultMessage: `Document annotation {commentNumber}`,
              description: `Accessible label for a placed DOCX annotation marker`,
            },
            { commentNumber: n.position.line },
          )),
          (t[12] = n.position.line),
          (t[13] = s),
          (t[14] = i))
        : (i = t[14]),
        (l = i),
        (f = c.kind === `region` ? P(c.rect) : c.point));
    }
    ((t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p));
  } else ((c = t[2]), (l = t[3]), (u = t[4]), (d = t[5]), (f = t[6]), (p = t[7]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m = f,
    h;
  t[15] !== u || t[16] !== a
    ? ((h = () => a(u)), (t[15] = u), (t[16] = a), (t[17] = h))
    : (h = t[17]);
  let g = h,
    _;
  t[18] === a ? (_ = t[19]) : ((_ = () => a(null)), (t[18] = a), (t[19] = _));
  let v = _,
    y;
  t[20] !== c || t[21] !== d
    ? ((y =
        c.kind === `region`
          ? c.selectionKind == null
            ? (0, q.jsx)(ve, {
                pageSize: d,
                rect: c.rect,
                testId: `artifact-docx-comment-region-outline`,
              })
            : (0, q.jsx)(K, {
                bordered: !0,
                pageSize: d,
                anchor: c,
                testId: `artifact-docx-comment-region-outline`,
              })
          : null),
      (t[20] = c),
      (t[21] = d),
      (t[22] = y))
    : (y = t[22]);
  let b;
  t[23] !== u || t[24] !== i
    ? ((b = () => i(u)), (t[23] = u), (t[24] = i), (t[25] = b))
    : (b = t[25]);
  let x;
  t[26] !== n.position.line ||
  t[27] !== l ||
  t[28] !== v ||
  t[29] !== r ||
  t[30] !== d ||
  t[31] !== m ||
  t[32] !== g ||
  t[33] !== b ||
  t[34] !== o
    ? ((x = (0, q.jsx)(j, {
        ariaLabel: l,
        isSelected: r,
        label: n.position.line,
        pageSize: d,
        point: m,
        testId: `artifact-docx-comment-marker`,
        zoomScale: o,
        onClick: b,
        onPreviewHide: v,
        onPreviewShow: g,
      })),
      (t[26] = n.position.line),
      (t[27] = l),
      (t[28] = v),
      (t[29] = r),
      (t[30] = d),
      (t[31] = m),
      (t[32] = g),
      (t[33] = b),
      (t[34] = o),
      (t[35] = x))
    : (x = t[35]);
  let ee;
  return (
    t[36] !== y || t[37] !== x
      ? ((ee = (0, q.jsxs)(q.Fragment, { children: [y, x] })),
        (t[36] = y),
        (t[37] = x),
        (t[38] = ee))
      : (ee = t[38]),
    ee
  );
}
function ot(e) {
  let t = (0, ct.c)(14),
    { comment: n, layer: r } = e,
    i,
    a,
    o;
  if (t[0] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = et(n);
      if (((i = $e(n)), e == null || i == null)) {
        o = null;
        break bb0;
      }
      a = e.kind === `region` ? P(e.rect) : e.point;
    }
    ((t[0] = n), (t[1] = i), (t[2] = a), (t[3] = o));
  } else ((i = t[1]), (a = t[2]), (o = t[3]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s = a,
    c;
  t[4] === n ? (c = t[5]) : ((c = nt(n)), (t[4] = n), (t[5] = c));
  let l;
  t[6] === n ? (l = t[7]) : ((l = tt(n)), (t[6] = n), (t[7] = l));
  let u;
  return (
    t[8] !== r || t[9] !== i || t[10] !== s || t[11] !== c || t[12] !== l
      ? ((u = (0, q.jsx)(
          M,
          { body: l, layer: r, pageSize: i, point: s, testId: `artifact-docx-comment-preview` },
          c,
        )),
        (t[8] = r),
        (t[9] = i),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function st(e) {
  let t = (0, ct.c)(18),
    { anchor: n, label: r, pageSize: i, zoomScale: a } = e;
  if (n.kind === `region`) {
    let e;
    t[0] !== n || t[1] !== i
      ? ((e =
          n.selectionKind == null
            ? (0, q.jsx)(ve, {
                pageSize: i,
                rect: n.rect,
                testId: `artifact-docx-comment-region-outline`,
              })
            : (0, q.jsx)(K, {
                bordered: !0,
                pageSize: i,
                anchor: n,
                testId: `artifact-docx-comment-region-outline`,
              })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = e))
      : (e = t[2]);
    let o;
    t[3] === n.rect ? (o = t[4]) : ((o = P(n.rect)), (t[3] = n.rect), (t[4] = o));
    let s;
    t[5] !== r || t[6] !== i || t[7] !== o || t[8] !== a
      ? ((s = (0, q.jsx)(j, {
          draft: !0,
          draftTestId: `artifact-docx-comment-draft-marker`,
          label: r,
          pageSize: i,
          point: o,
          testId: `artifact-docx-comment-marker`,
          zoomScale: a,
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o),
        (t[8] = a),
        (t[9] = s))
      : (s = t[9]);
    let c;
    return (
      t[10] !== e || t[11] !== s
        ? ((c = (0, q.jsxs)(q.Fragment, { children: [e, s] })),
          (t[10] = e),
          (t[11] = s),
          (t[12] = c))
        : (c = t[12]),
      c
    );
  }
  let o;
  return (
    t[13] !== n.point || t[14] !== r || t[15] !== i || t[16] !== a
      ? ((o = (0, q.jsx)(j, {
          draft: !0,
          draftTestId: `artifact-docx-comment-draft-marker`,
          label: r,
          pageSize: i,
          point: n.point,
          testId: `artifact-docx-comment-marker`,
          zoomScale: a,
        })),
        (t[13] = n.point),
        (t[14] = r),
        (t[15] = i),
        (t[16] = a),
        (t[17] = o))
      : (o = t[17]),
    o
  );
}
function K(e) {
  let t = (0, ct.c)(18),
    { bordered: n, pageSize: r, anchor: i, testId: a } = e,
    o = n === void 0 ? !1 : n;
  if (i.selectionKind === `text`) {
    let e;
    t[0] !== i.rect || t[1] !== i.selectionRects
      ? ((e =
          i.selectionRects == null || i.selectionRects.length === 0 ? [i.rect] : i.selectionRects),
        (t[0] = i.rect),
        (t[1] = i.selectionRects),
        (t[2] = e))
      : (e = t[2]);
    let n = e,
      o;
    if (t[3] !== r || t[4] !== a || t[5] !== n) {
      let e;
      (t[7] !== r || t[8] !== a
        ? ((e = (e, t) =>
            (0, q.jsx)(
              it,
              { paddingX: 4, paddingY: 0, pageSize: r, rect: e, testId: a },
              `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
            )),
          (t[7] = r),
          (t[8] = a),
          (t[9] = e))
        : (e = t[9]),
        (o = n.map(e)),
        (t[3] = r),
        (t[4] = a),
        (t[5] = n),
        (t[6] = o));
    } else o = t[6];
    let s;
    return (
      t[10] === o
        ? (s = t[11])
        : ((s = (0, q.jsx)(q.Fragment, { children: o })), (t[10] = o), (t[11] = s)),
      s
    );
  }
  let s = o ? (i.selectionKind === `paragraph` ? 2 : 1) : 0,
    c;
  return (
    t[12] !== i.rect || t[13] !== o || t[14] !== r || t[15] !== s || t[16] !== a
      ? ((c = (0, q.jsx)(it, {
          bordered: o,
          borderWidth: s,
          paddingPx: 4,
          pageSize: r,
          rect: i.rect,
          testId: a,
        })),
        (t[12] = i.rect),
        (t[13] = o),
        (t[14] = r),
        (t[15] = s),
        (t[16] = a),
        (t[17] = c))
      : (c = t[17]),
    c
  );
}
var ct,
  q,
  lt = e(() => {
    ((ct = C()), b(), U(), rt(), I(), F(), (q = o()));
  });
function ut({ pageElement: e, pageSize: t }) {
  let n = e.ownerDocument.getSelection();
  if (n == null || n.isCollapsed || n.rangeCount === 0 || !bt(n, e)) return null;
  let r = Ct(n.toString());
  if (r.length === 0) return null;
  let i = n.getRangeAt(0);
  if (!e.contains(i.commonAncestorContainer)) return null;
  let a = Array.from(i.getClientRects()),
    o = G({ clientRects: a, pageElement: e, pageSize: t });
  if (o == null) return null;
  let s = Fe({ clientRects: a, pageElement: e, pageSize: t });
  return {
    askForEditAnchor: Le({ clientRects: a, pageElement: e, pageSize: t, selection: n }) ?? void 0,
    contentPreview: { type: `text`, text: r },
    kind: `region`,
    rect: o,
    ...(s.length <= 1 ? {} : { selectionRects: s }),
    selectedText: r,
    selectionKind: `text`,
  };
}
function dt({
  clientX: e,
  clientY: t,
  includePreviewMetadata: n,
  layerElement: r,
  pageElement: i,
  pageSize: a,
  selectionKindFilter: o,
}) {
  let s = (i.ownerDocument.elementsFromPoint?.(e, t) ?? []).find(
    (e) => e !== r && !r.contains(e) && i.contains(e),
  );
  return s == null
    ? null
    : ft({
        includePreviewMetadata: n,
        pageElement: i,
        pageSize: a,
        selectionKindFilter: o,
        target: s,
      });
}
function ft({
  includePreviewMetadata: e,
  pageElement: t,
  pageSize: n,
  selectionKindFilter: r,
  target: i,
}) {
  let a = pt(i, t);
  if (a == null || (r != null && !r(a.selectionKind))) return null;
  let o = G({ clientRects: [a.element.getBoundingClientRect()], pageElement: t, pageSize: n });
  if (o == null) return null;
  let s = e ? xt(a.element) : ``,
    c = e ? mt({ element: a.element, nearbyText: s, selectionKind: a.selectionKind }) : null;
  return {
    askForEditAnchor:
      a.selectionKind === `image` || a.selectionKind === `drawing`
        ? { alignment: `end`, placement: `below`, point: { x: o.x + o.width, y: o.y + o.height } }
        : void 0,
    contentPreview: c ?? void 0,
    kind: `region`,
    rect: o,
    selectionKind: a.selectionKind,
    ...(s.length === 0 ? {} : { nearbyText: s }),
  };
}
function pt(e, t) {
  let n = vt(e, t, (e) => e.matches(`img`));
  if (n != null) return { element: n, selectionKind: `image` };
  let r = vt(e, t, yt);
  if (r != null) return { element: r, selectionKind: `drawing` };
  let i = vt(e, t, (e) => e.matches(`table`));
  if (i != null) return { element: i, selectionKind: `table` };
  let a = vt(e, t, (e) => e.matches(`p`));
  return a == null ? null : { element: a, selectionKind: `paragraph` };
}
function mt({ element: e, nearbyText: t, selectionKind: n }) {
  if (n === `image` || n === `drawing`) {
    let t = ht(e);
    if (t != null) return t;
  }
  return t.length === 0 ? null : { type: `text`, text: t };
}
function ht(e) {
  let t = gt(e);
  if (t != null) {
    let e = t.currentSrc.trim() || t.getAttribute(`src`)?.trim() || t.src.trim();
    if (e) {
      let n = t.alt.trim();
      return { type: `image`, src: e, ...(n.length === 0 ? {} : { alt: n }) };
    }
  }
  let n = _t(e);
  return n == null
    ? null
    : {
        type: `image`,
        src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(n))}`,
      };
}
function gt(e) {
  return e instanceof HTMLImageElement ? e : e.querySelector(`img`);
}
function _t(e) {
  return e instanceof SVGSVGElement ? e : e.querySelector(`svg`);
}
function vt(e, t, n) {
  let r = e;
  for (; r != null && r !== t; ) {
    if (n(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function yt(e) {
  return (
    e.matches(`svg`) ||
    (e instanceof HTMLElement &&
      e.tagName === `DIV` &&
      e.style.display === `inline-block` &&
      e.style.position === `relative` &&
      e.querySelector(`img, svg`) != null)
  );
}
function bt(e, t) {
  return (
    e.anchorNode != null &&
    e.focusNode != null &&
    t.contains(e.anchorNode) &&
    t.contains(e.focusNode)
  );
}
function xt(e) {
  let t = [];
  return (St(e, t), Ct(t.join(` `)));
}
function St(e, t) {
  if (e.nodeType === Node.TEXT_NODE) {
    let n = Ct(e.textContent ?? ``);
    n.length > 0 && t.push(n);
    return;
  }
  for (let n of e.childNodes) St(n, t);
}
function Ct(e) {
  return e.replace(/\s+/g, ` `).trim().slice(0, 500);
}
var wt = e(() => {
  (U(), Je());
});
function Tt(e) {
  let t = (0, Ot.c)(244),
    {
      comments: n,
      conversationId: r,
      isCommentMode: i,
      nextCommentNumber: o,
      onCommentsChange: s,
      onTouchCancel: l,
      onTouchEnd: u,
      onTouchMove: d,
      onTouchStart: f,
      onWheel: p,
      pageCount: h,
      pageNumber: g,
      pageSize: _,
      path: v,
      tabId: y,
      threadId: b,
      title: x,
      zoomScale: ee,
    } = e,
    S = ee === void 0 ? 1 : ee,
    C = c(m),
    w = te(),
    [T, ie] = (0, J.useState)(null),
    ae = (0, J.useRef)(null),
    oe = (0, J.useRef)(null),
    se = (0, J.useRef)(!1),
    [E, ce] = (0, J.useState)(null),
    [D, le] = (0, J.useState)(null),
    [O, ue] = (0, J.useState)(null),
    [de, fe] = (0, J.useState)(null),
    k = 1 / (Math.max(S, 2 ** -52) / 0.9),
    [A, pe] = (0, J.useState)(``),
    [j, me] = (0, J.useState)(null),
    [M, N] = (0, J.useState)(null),
    [P, F] = (0, J.useState)(null),
    [Se, Ce] = (0, J.useState)(!1),
    Te;
  if (t[0] !== n || t[1] !== g || t[2] !== v) {
    let e;
    (t[4] !== g || t[5] !== v
      ? ((e = (e) => e.localArtifactAnnotationContext?.path === v && Qe(e) === g),
        (t[4] = g),
        (t[5] = v),
        (t[6] = e))
      : (e = t[6]),
      (Te = n.filter(e)),
      (t[0] = n),
      (t[1] = g),
      (t[2] = v),
      (t[3] = Te));
  } else Te = t[3];
  let I = Te,
    L;
  t[7] !== I || t[8] !== P
    ? ((L = P == null ? null : (I.find((e) => nt(e) === P) ?? null)),
      (t[7] = I),
      (t[8] = P),
      (t[9] = L))
    : (L = t[9]);
  let De = L,
    R,
    z,
    B,
    Ae;
  t[10] !== I || t[11] !== E || t[12] !== D || t[13] !== M || t[14] !== _
    ? ((B = M == null ? null : (I.find((e) => nt(e) === M) ?? null)),
      (z = B == null ? null : et(B)),
      (R = E ?? z),
      (Ae = E == null ? ((B == null ? null : ($e(B) ?? _)) ?? _) : (D ?? _)),
      (t[10] = I),
      (t[11] = E),
      (t[12] = D),
      (t[13] = M),
      (t[14] = _),
      (t[15] = R),
      (t[16] = z),
      (t[17] = B),
      (t[18] = Ae))
    : ((R = t[15]), (z = t[16]), (B = t[17]), (Ae = t[18]));
  let V = Ae,
    je;
  bb0: {
    if (E != null) {
      let e;
      (t[19] !== V ||
      t[20] !== r ||
      t[21] !== E ||
      t[22] !== A ||
      t[23] !== g ||
      t[24] !== v ||
      t[25] !== x
        ? ((e = Ye({
            anchor: E,
            body: A,
            conversationId: r,
            pageNumber: g,
            pageSize: V,
            path: v,
            target: { mode: `create` },
            title: x,
          })),
          (t[19] = V),
          (t[20] = r),
          (t[21] = E),
          (t[22] = A),
          (t[23] = g),
          (t[24] = v),
          (t[25] = x),
          (t[26] = e))
        : (e = t[26]),
        (je = e));
      break bb0;
    }
    if (z == null || B == null || M == null) {
      je = null;
      break bb0;
    }
    let e;
    (t[27] !== V ||
    t[28] !== r ||
    t[29] !== z ||
    t[30] !== B ||
    t[31] !== M ||
    t[32] !== g ||
    t[33] !== v ||
    t[34] !== x
      ? ((e = Ye({
          anchor: z,
          body: tt(B),
          conversationId: r,
          pageNumber: g,
          pageSize: V,
          path: v,
          target: { mode: `edit`, commentId: M },
          title: x,
        })),
        (t[27] = V),
        (t[28] = r),
        (t[29] = z),
        (t[30] = B),
        (t[31] = M),
        (t[32] = g),
        (t[33] = v),
        (t[34] = x),
        (t[35] = e))
      : (e = t[35]),
      (je = e));
  }
  let H = je,
    Me;
  t[36] !== R || t[37] !== V || t[38] !== k || t[39] !== T
    ? ((Me = R == null ? null : Ne({ anchor: R, editorScale: k, layer: T, pageSize: V })),
      (t[36] = R),
      (t[37] = V),
      (t[38] = k),
      (t[39] = T),
      (t[40] = Me))
    : (Me = t[40]);
  let U = Me,
    W = R != null,
    G;
  t[41] === w
    ? (G = t[42])
    : ((G = w.formatMessage({
        id: `artifactDocxPreview.commentInput`,
        defaultMessage: `Document annotation comment`,
        description: `Aria label for the DOCX annotation comment input`,
      })),
      (t[41] = w),
      (t[42] = G));
  let Fe = G,
    Ie;
  t[43] === w
    ? (Ie = t[44])
    : ((Ie = w.formatMessage({
        id: `artifactAnnotationComment.placeholder`,
        defaultMessage: `Describe a change or ask a question`,
        description: `Placeholder text for an artifact annotation comment editor`,
      })),
      (t[43] = w),
      (t[44] = Ie));
  let Le = Ie,
    Re;
  t[45] === w
    ? (Re = t[46])
    : ((Re = w.formatMessage({
        id: `artifactDocxPreview.askCodex`,
        defaultMessage: `Ask Codex`,
        description: `Button label for starting a contextual DOCX annotation from the selected document element`,
      })),
      (t[45] = w),
      (t[46] = Re));
  let He = Re,
    Ue;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = () => {
        (ce(null), le(null), ue(null), fe(null), pe(``), N(null), Ce(!1));
      }),
      (t[47] = Ue))
    : (Ue = t[47]);
  let We = Ue,
    Ge;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (e) => {
        (pe(e), Ce(!1));
      }),
      (t[48] = Ge))
    : (Ge = t[48]);
  let Ke = Ge,
    qe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = () => {
        typeof window > `u` ||
          xe({ animationFrameRef: oe, animationWindow: window, editorWrapper: ae.current });
      }),
      (t[49] = qe))
    : (qe = t[49]);
  let Je = qe,
    rt;
  t[50] !== H || t[51] !== A || t[52] !== Se
    ? ((rt = () =>
        H == null
          ? !1
          : H.target.mode === `create` && A.trim().length > 0
            ? Se
              ? (We(), !0)
              : (Ce(!0), Je(), !1)
            : (We(), !0)),
      (t[50] = H),
      (t[51] = A),
      (t[52] = Se),
      (t[53] = rt))
    : (rt = t[53]);
  let K = rt,
    ct;
  t[54] !== R || t[55] !== V || t[56] !== k || t[57] !== T
    ? ((ct = () => {
        if (R == null) return;
        let e = Ne({ anchor: R, editorScale: k, layer: T, pageSize: V });
        e != null && _e(ae.current, e);
      }),
      (t[54] = R),
      (t[55] = V),
      (t[56] = k),
      (t[57] = T),
      (t[58] = ct))
    : (ct = t[58]);
  let q = (0, J.useEffectEvent)(ct),
    lt;
  t[59] !== q || t[60] !== W || t[61] !== T
    ? ((lt = () => {
        if (!W || T == null) return;
        let e = T.ownerDocument,
          t = e.defaultView,
          n = () => {
            q();
          };
        (e.addEventListener(`scroll`, n, { capture: !0 }), t?.addEventListener(`resize`, n));
        let r = typeof ResizeObserver > `u` ? null : new ResizeObserver(n);
        return (
          r?.observe(T),
          n(),
          () => {
            (e.removeEventListener(`scroll`, n, { capture: !0 }),
              t?.removeEventListener(`resize`, n),
              r?.disconnect());
          }
        );
      }),
      (t[59] = q),
      (t[60] = W),
      (t[61] = T),
      (t[62] = lt))
    : (lt = t[62]);
  let ft;
  (t[63] !== V.height || t[64] !== V.width || t[65] !== k || t[66] !== W || t[67] !== T
    ? ((ft = [V.height, V.width, k, W, T]),
      (t[63] = V.height),
      (t[64] = V.width),
      (t[65] = k),
      (t[66] = W),
      (t[67] = T),
      (t[68] = ft))
    : (ft = t[68]),
    (0, J.useEffect)(lt, ft));
  let pt;
  t[69] !== T?.ownerDocument || t[70] !== K
    ? ((pt = (e) => {
        let t = e.target;
        (t instanceof Node && ae.current?.contains(t)) ||
          (e.preventDefault(),
          e.stopPropagation(),
          K() &&
            (t instanceof Node ? t.ownerDocument : T?.ownerDocument)
              ?.getSelection()
              ?.removeAllRanges());
      }),
      (t[69] = T?.ownerDocument),
      (t[70] = K),
      (t[71] = pt))
    : (pt = t[71]);
  let mt = (0, J.useEffectEvent)(pt),
    ht;
  t[72] !== H?.target.mode || t[73] !== mt || t[74] !== i || t[75] !== T
    ? ((ht = () => {
        if (i || H?.target.mode !== `create` || T == null) return;
        let e = T.ownerDocument,
          t = (e) => {
            mt(e);
          };
        return (
          e.addEventListener(`pointerdown`, t, { capture: !0 }),
          () => {
            e.removeEventListener(`pointerdown`, t, { capture: !0 });
          }
        );
      }),
      (t[72] = H?.target.mode),
      (t[73] = mt),
      (t[74] = i),
      (t[75] = T),
      (t[76] = ht))
    : (ht = t[76]);
  let gt = H?.target.mode,
    _t;
  (t[77] !== i || t[78] !== T || t[79] !== gt
    ? ((_t = [gt, i, T]), (t[77] = i), (t[78] = T), (t[79] = gt), (t[80] = _t))
    : (_t = t[80]),
    (0, J.useEffect)(ht, _t));
  let vt;
  t[81] !== E || t[82] !== M || t[83] !== i || t[84] !== T || t[85] !== _ || t[86] !== K
    ? ((vt = () => {
        if (i || T == null) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = ut({ pageElement: e, pageSize: _ });
        if (t == null) {
          ue(null);
          return;
        }
        ((E != null || M != null) && !K()) ||
          (ue(t), ce(null), le(null), pe(``), N(null), F(null), Ce(!1));
      }),
      (t[81] = E),
      (t[82] = M),
      (t[83] = i),
      (t[84] = T),
      (t[85] = _),
      (t[86] = K),
      (t[87] = vt))
    : (vt = t[87]);
  let yt = (0, J.useEffectEvent)(vt),
    bt;
  t[88] !== i || t[89] !== T || t[90] !== yt
    ? ((bt = () => {
        if (T == null || i) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = () => {
          yt();
        };
        return (
          e.addEventListener(`mouseup`, t),
          e.addEventListener(`keyup`, t),
          () => {
            (e.removeEventListener(`mouseup`, t), e.removeEventListener(`keyup`, t));
          }
        );
      }),
      (t[88] = i),
      (t[89] = T),
      (t[90] = yt),
      (t[91] = bt))
    : (bt = t[91]);
  let xt;
  (t[92] !== i || t[93] !== T
    ? ((xt = [i, T]), (t[92] = i), (t[93] = T), (t[94] = xt))
    : (xt = t[94]),
    (0, J.useEffect)(bt, xt));
  let St;
  t[95] !== E || t[96] !== M || t[97] !== i || t[98] !== T || t[99] !== _ || t[100] !== K
    ? ((St = (e) => {
        if (i || T == null || e.defaultPrevented) return;
        let t = e.target;
        if (t instanceof Node && T.contains(t)) return;
        let n = T.parentElement;
        if (n == null) return;
        let r = dt({
          clientX: e.clientX,
          clientY: e.clientY,
          includePreviewMetadata: !0,
          layerElement: T,
          pageElement: n,
          pageSize: _,
          selectionKindFilter: Dt,
        });
        r != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          !((E != null || M != null) && !K()) &&
            (n.ownerDocument.getSelection()?.removeAllRanges(),
            ue(r),
            ce(null),
            le(null),
            pe(``),
            N(null),
            F(null),
            Ce(!1)));
      }),
      (t[95] = E),
      (t[96] = M),
      (t[97] = i),
      (t[98] = T),
      (t[99] = _),
      (t[100] = K),
      (t[101] = St))
    : (St = t[101]);
  let Ct = (0, J.useEffectEvent)(St),
    wt;
  t[102] !== i || t[103] !== T || t[104] !== Ct
    ? ((wt = () => {
        if (T == null || i) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = (e) => {
          Ct(e);
        };
        return (
          e.addEventListener(`click`, t),
          () => {
            e.removeEventListener(`click`, t);
          }
        );
      }),
      (t[102] = i),
      (t[103] = T),
      (t[104] = Ct),
      (t[105] = wt))
    : (wt = t[105]);
  let Tt;
  (t[106] !== i || t[107] !== T
    ? ((Tt = [i, T]), (t[106] = i), (t[107] = T), (t[108] = Tt))
    : (Tt = t[108]),
    (0, J.useEffect)(wt, Tt));
  let At;
  t[109] !== i || t[110] !== T || t[111] !== _
    ? ((At = (e, t, n) => {
        if (!i || T == null) return null;
        let r = T.parentElement;
        return r == null
          ? null
          : dt({
              clientX: e,
              clientY: t,
              includePreviewMetadata: n,
              layerElement: T,
              pageElement: r,
              pageSize: _,
            });
      }),
      (t[109] = i),
      (t[110] = T),
      (t[111] = _),
      (t[112] = At))
    : (At = t[112]);
  let jt = At,
    Mt;
  t[113] !== i || t[114] !== _ || t[115] !== C || t[116] !== y || t[117] !== b
    ? ((Mt = (e, t) => {
        (ke(
          C,
          { artifactTabId: y, artifactType: `document`, importKind: `docx`, threadId: b },
          { annotationModeEnabled: i, startSource: t },
        ),
          ce(e),
          le(_),
          ue(null),
          fe(null),
          pe(``),
          N(null),
          F(null),
          Ce(!1));
      }),
      (t[113] = i),
      (t[114] = _),
      (t[115] = C),
      (t[116] = y),
      (t[117] = b),
      (t[118] = Mt))
    : (Mt = t[118]);
  let X = Mt,
    Nt;
  t[119] !== E || t[120] !== M || t[121] !== X || t[122] !== _ || t[123] !== O
    ? ((Nt = (e, t) => {
        if (E != null || M != null || !Ee(e)) return;
        let n = ut({ pageElement: t, pageSize: _ }) ?? (O?.selectionKind === `text` ? null : O);
        n != null && (e.preventDefault(), e.stopPropagation(), X(n, `ask_codex_shortcut`));
      }),
      (t[119] = E),
      (t[120] = M),
      (t[121] = X),
      (t[122] = _),
      (t[123] = O),
      (t[124] = Nt))
    : (Nt = t[124]);
  let Pt = (0, J.useEffectEvent)(Nt),
    Ft;
  t[125] !== i || t[126] !== T || t[127] !== Pt
    ? ((Ft = () => {
        if (T == null || i) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = (t) => {
          Pt(t, e);
        };
        return (
          e.ownerDocument.addEventListener(`keydown`, t, { capture: !0 }),
          () => {
            e.ownerDocument.removeEventListener(`keydown`, t, { capture: !0 });
          }
        );
      }),
      (t[125] = i),
      (t[126] = T),
      (t[127] = Pt),
      (t[128] = Ft))
    : (Ft = t[128]);
  let It;
  (t[129] !== i || t[130] !== T
    ? ((It = [i, T]), (t[129] = i), (t[130] = T), (t[131] = It))
    : (It = t[131]),
    (0, J.useEffect)(Ft, It));
  let Lt;
  t[132] !== E || t[133] !== M || t[134] !== X || t[135] !== K
    ? ((Lt = (e) => {
        ((E != null || M != null) && !K()) || X(e, `annotation_mode_pointer`);
      }),
      (t[132] = E),
      (t[133] = M),
      (t[134] = X),
      (t[135] = K),
      (t[136] = Lt))
    : (Lt = t[136]);
  let Rt = Lt,
    zt;
  t[137] !== i || t[138] !== _
    ? ((zt = (e) => {
        if (!i || !e.isPrimary || e.pointerType === `touch` || e.button !== 0) return;
        let t = Pe(e, _);
        t != null &&
          ((se.current = !1),
          e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.setPointerCapture(e.pointerId),
          ue(null),
          fe(null),
          F(null),
          me({
            pointerId: e.pointerId,
            start: t,
            current: t,
            clientStart: { x: e.clientX, y: e.clientY },
            clientCurrent: { x: e.clientX, y: e.clientY },
          }));
      }),
      (t[137] = i),
      (t[138] = _),
      (t[139] = zt))
    : (zt = t[139]);
  let Bt = zt,
    Vt;
  t[140] !== E || t[141] !== j || t[142] !== M || t[143] !== jt || t[144] !== _
    ? ((Vt = (e) => {
        if (j == null) {
          if (E != null || M != null) {
            fe(null);
            return;
          }
          fe(jt(e.clientX, e.clientY, !1));
          return;
        }
        if (e.pointerId !== j.pointerId) return;
        let t = Pe(e, _);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          me((n) =>
            n == null || n.pointerId !== e.pointerId
              ? n
              : { ...n, current: t, clientCurrent: { x: e.clientX, y: e.clientY } },
          ));
      }),
      (t[140] = E),
      (t[141] = j),
      (t[142] = M),
      (t[143] = jt),
      (t[144] = _),
      (t[145] = Vt))
    : (Vt = t[145]);
  let Ht = Vt,
    Ut;
  t[146] !== E ||
  t[147] !== j ||
  t[148] !== jt ||
  t[149] !== Rt ||
  t[150] !== X ||
  t[151] !== _ ||
  t[152] !== K
    ? ((Ut = (e) => {
        if (j == null || e.pointerId !== j.pointerId) return;
        let t = Pe(e, _) ?? j.current;
        (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId));
        let n = { ...j, current: t, clientCurrent: { x: e.clientX, y: e.clientY } },
          r = ze(n),
          i = Be(n, r);
        if (((se.current = r), !r)) {
          let t = jt(e.clientX, e.clientY, !0);
          if (t != null) {
            ((se.current = !0), me(null), Rt(t));
            return;
          }
        }
        if (E != null && i.kind === `point`) {
          (K(), me(null));
          return;
        }
        (X(i, `annotation_mode_pointer`), me(null));
      }),
      (t[146] = E),
      (t[147] = j),
      (t[148] = jt),
      (t[149] = Rt),
      (t[150] = X),
      (t[151] = _),
      (t[152] = K),
      (t[153] = Ut))
    : (Ut = t[153]);
  let Wt = Ut,
    Z;
  t[154] !== jt || t[155] !== Rt
    ? ((Z = (e) => {
        if (se.current) {
          ((se.current = !1), e.preventDefault(), e.stopPropagation());
          return;
        }
        let t = jt(e.clientX, e.clientY, !0);
        t != null && (e.preventDefault(), e.stopPropagation(), Rt(t));
      }),
      (t[154] = jt),
      (t[155] = Rt),
      (t[156] = Z))
    : (Z = t[156]);
  let Gt = Z,
    Q;
  t[157] !== r ||
  t[158] !== E ||
  t[159] !== D ||
  t[160] !== M ||
  t[161] !== i ||
  t[162] !== o ||
  t[163] !== s ||
  t[164] !== h ||
  t[165] !== g ||
  t[166] !== _ ||
  t[167] !== v ||
  t[168] !== C ||
  t[169] !== y ||
  t[170] !== b ||
  t[171] !== x
    ? ((Q = (e, t) => {
        let { submitDirectly: n } = t === void 0 ? {} : t,
          a = n === void 0 ? !1 : n,
          c = e.body.trim();
        if (M != null) {
          if (c.length === 0) return;
          (s((e) =>
            e.map((e) =>
              nt(e) === M ? { ...e, content: [{ content_type: `text`, text: c }] } : e,
            ),
          ),
            We());
          return;
        }
        if (E == null || c.length === 0) return;
        let l = Xe({ anchor: E, pageCount: h, pageNumber: g, pageSize: D ?? _ }),
          u = re({
            artifactKind: `document`,
            body: c,
            label: Ze(E, g),
            line: o,
            metadata: l,
            path: v,
            title: x,
          });
        (Oe(
          C,
          { artifactTabId: y, artifactType: `document`, importKind: `docx`, threadId: b },
          {
            annotationModeEnabled: i,
            annotationTargetKind: l.target.type,
            submitMode: a ? `direct` : `saved`,
            submitSource: e.submitSource,
          },
        ),
          a
            ? ne.dispatchHostMessage({
                type: `artifact-direct-comment`,
                body: c,
                comment: u,
                conversationId: r,
                sessionId: crypto.randomUUID(),
              })
            : s((e) => [...e, u]),
          We());
      }),
      (t[157] = r),
      (t[158] = E),
      (t[159] = D),
      (t[160] = M),
      (t[161] = i),
      (t[162] = o),
      (t[163] = s),
      (t[164] = h),
      (t[165] = g),
      (t[166] = _),
      (t[167] = v),
      (t[168] = C),
      (t[169] = y),
      (t[170] = b),
      (t[171] = x),
      (t[172] = Q))
    : (Q = t[172]);
  let $ = Q,
    Kt = i ? `pointer-events-auto` : `pointer-events-none`,
    qt;
  t[173] === Kt
    ? (qt = t[174])
    : ((qt = a(`absolute inset-0 z-[3]`, Kt)), (t[173] = Kt), (t[174] = qt));
  let Jt;
  t[175] === i ? (Jt = t[176]) : ((Jt = i ? { cursor: we } : void 0), (t[175] = i), (t[176] = Jt));
  let Yt, Xt;
  t[177] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = () => {
        (me(null), fe(null));
      }),
      (Xt = () => fe(null)),
      (t[177] = Yt),
      (t[178] = Xt))
    : ((Yt = t[177]), (Xt = t[178]));
  let Zt;
  if (t[179] !== I || t[180] !== M || t[181] !== S) {
    let e;
    (t[183] !== M || t[184] !== S
      ? ((e = (e) =>
          (0, Y.jsx)(
            at,
            {
              comment: e,
              isSelected: nt(e) === M,
              onEdit: (e) => {
                (ce(null), le(null), pe(``), Ce(!1), F(null), fe(null), N(e));
              },
              onPreviewChange: F,
              zoomScale: S,
            },
            nt(e),
          )),
        (t[183] = M),
        (t[184] = S),
        (t[185] = e))
      : (e = t[185]),
      (Zt = I.map(e)),
      (t[179] = I),
      (t[180] = M),
      (t[181] = S),
      (t[182] = Zt));
  } else Zt = t[182];
  let Qt;
  t[186] !== M || t[187] !== De || t[188] !== T
    ? ((Qt = De == null || M != null ? null : (0, Y.jsx)(ot, { comment: De, layer: T })),
      (t[186] = M),
      (t[187] = De),
      (t[188] = T),
      (t[189] = Qt))
    : (Qt = t[189]);
  let $t;
  t[190] !== E || t[191] !== M || t[192] !== de || t[193] !== _
    ? (($t =
        de != null && E == null && M == null
          ? (0, Y.jsx)(it, {
              paddingPx: 4,
              pageSize: _,
              rect: de.rect,
              testId: `artifact-docx-element-hover-highlight`,
            })
          : null),
      (t[190] = E),
      (t[191] = M),
      (t[192] = de),
      (t[193] = _),
      (t[194] = $t))
    : ($t = t[194]);
  let en;
  t[195] !== He || t[196] !== E || t[197] !== X || t[198] !== _ || t[199] !== O || t[200] !== S
    ? ((en =
        O != null && E == null
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                O.selectionKind === `text`
                  ? null
                  : (0, Y.jsx)(it, {
                      bordered: !0,
                      paddingPx: 4,
                      pageSize: _,
                      rect: O.rect,
                      testId: `artifact-docx-selection-outline`,
                    }),
                (0, Y.jsx)(he, {
                  anchor: O.askForEditAnchor,
                  label: He,
                  pageSize: _,
                  rect: O.rect,
                  testId: `artifact-docx-ask-for-edit-button`,
                  zoomScale: S,
                  onClick: () => X(O, `ask_codex_button`),
                }),
              ],
            })
          : null),
      (t[195] = He),
      (t[196] = E),
      (t[197] = X),
      (t[198] = _),
      (t[199] = O),
      (t[200] = S),
      (t[201] = en))
    : (en = t[201]);
  let tn;
  t[202] !== j || t[203] !== _
    ? ((tn =
        j == null
          ? null
          : (0, Y.jsx)(ve, {
              pageSize: _,
              rect: Ve(j.start, j.current),
              testId: `artifact-docx-comment-region-outline`,
            })),
      (t[202] = j),
      (t[203] = _),
      (t[204] = tn))
    : (tn = t[204]);
  let nn;
  t[205] !== E || t[206] !== D || t[207] !== o || t[208] !== _ || t[209] !== S
    ? ((nn =
        E == null ? null : (0, Y.jsx)(st, { anchor: E, label: o, pageSize: D ?? _, zoomScale: S })),
      (t[205] = E),
      (t[206] = D),
      (t[207] = o),
      (t[208] = _),
      (t[209] = S),
      (t[210] = nn))
    : (nn = t[210]);
  let rn;
  t[211] !== R ||
  t[212] !== U ||
  t[213] !== H ||
  t[214] !== Fe ||
  t[215] !== Le ||
  t[216] !== k ||
  t[217] !== $ ||
  t[218] !== s ||
  t[219] !== l ||
  t[220] !== u ||
  t[221] !== d ||
  t[222] !== f ||
  t[223] !== p
    ? ((rn =
        R == null || U == null || H == null
          ? null
          : (0, Y.jsx)(`div`, {
              ref: ae,
              className: ge,
              style: {
                scale: `${k}`,
                transformOrigin: `top left`,
                left: U.x,
                top: U.y,
                height: be,
                width: 294,
              },
              onPointerDown: Et,
              onTouchCancel: (e) => {
                (e.stopPropagation(), l?.());
              },
              onTouchEnd: (e) => {
                (e.stopPropagation(), u?.());
              },
              onTouchMove: (e) => {
                (e.stopPropagation(), d?.(e));
              },
              onTouchStart: (e) => {
                (e.stopPropagation(), f?.(e));
              },
              onWheel: (e) => {
                (e.stopPropagation(), p?.(e));
              },
              children: (0, Y.jsx)(
                ye,
                {
                  allowImageAttachments: !1,
                  defaultCreateSubmitMode: `direct`,
                  inputAriaLabel: Fe,
                  keyboardEventTarget: typeof window > `u` ? void 0 : window,
                  placeholder: Le,
                  session: H,
                  windowHeight: be,
                  onCancel: We,
                  onDelete: (e) => {
                    (s((t) => t.filter((t) => nt(t) !== e)), We());
                  },
                  onEscape: We,
                  onBodyChange: H.target.mode === `create` ? Ke : void 0,
                  onLightDismissibilityChange: kt,
                  onMounted: kt,
                  onDirectSubmit: (e) => {
                    $(e, { submitDirectly: !0 });
                  },
                  onSubmit: $,
                },
                H.sessionId,
              ),
            })),
      (t[211] = R),
      (t[212] = U),
      (t[213] = H),
      (t[214] = Fe),
      (t[215] = Le),
      (t[216] = k),
      (t[217] = $),
      (t[218] = s),
      (t[219] = l),
      (t[220] = u),
      (t[221] = d),
      (t[222] = f),
      (t[223] = p),
      (t[224] = rn))
    : (rn = t[224]);
  let an;
  return (
    t[225] !== Gt ||
    t[226] !== Bt ||
    t[227] !== Ht ||
    t[228] !== Wt ||
    t[229] !== l ||
    t[230] !== u ||
    t[231] !== d ||
    t[232] !== f ||
    t[233] !== p ||
    t[234] !== qt ||
    t[235] !== Jt ||
    t[236] !== Zt ||
    t[237] !== Qt ||
    t[238] !== $t ||
    t[239] !== en ||
    t[240] !== tn ||
    t[241] !== nn ||
    t[242] !== rn
      ? ((an = (0, Y.jsxs)(`div`, {
          ref: ie,
          className: qt,
          "data-testid": `artifact-docx-comment-layer`,
          style: Jt,
          onPointerDown: Bt,
          onPointerMove: Ht,
          onPointerUp: Wt,
          onPointerCancel: Yt,
          onPointerLeave: Xt,
          onClick: Gt,
          onTouchCancel: l,
          onTouchEnd: u,
          onTouchMove: d,
          onTouchStart: f,
          onWheel: p,
          children: [Zt, Qt, $t, en, tn, nn, rn],
        })),
        (t[225] = Gt),
        (t[226] = Bt),
        (t[227] = Ht),
        (t[228] = Wt),
        (t[229] = l),
        (t[230] = u),
        (t[231] = d),
        (t[232] = f),
        (t[233] = p),
        (t[234] = qt),
        (t[235] = Jt),
        (t[236] = Zt),
        (t[237] = Qt),
        (t[238] = $t),
        (t[239] = en),
        (t[240] = tn),
        (t[241] = nn),
        (t[242] = rn),
        (t[243] = an))
      : (an = t[243]),
    an
  );
}
function Et(e) {
  return e.stopPropagation();
}
function Dt(e) {
  return e === `image` || e === `drawing`;
}
var Ot,
  J,
  Y,
  kt,
  At = e(() => {
    ((Ot = C()),
      h(),
      r(),
      g(),
      (J = t(d(), 1)),
      b(),
      N(),
      Ce(),
      _(),
      n(),
      B(),
      U(),
      W(),
      Je(),
      rt(),
      lt(),
      wt(),
      I(),
      F(),
      (Y = o()),
      (kt = () => {}));
  });
function jt(e) {
  let t = (0, Wt.c)(82),
    {
      bytes: n,
      chromeMode: r,
      disableAnnotations: i,
      disableFileActions: a,
      hostId: o,
      onBeforeOpen: s,
      path: u,
      ref: d,
      tabId: m,
      title: h,
    } = e,
    g = r === void 0 ? `default` : r,
    _ = i === void 0 ? !1 : i,
    v = a === void 0 ? !1 : a,
    b = c(f),
    x = (0, Z.use)(Zt),
    te = ee(),
    ne = (0, Z.useRef)(null),
    S = (0, Z.useRef)(null),
    C;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        S.current != null && (window.cancelAnimationFrame(S.current), (S.current = null));
      }),
      (t[0] = C))
    : (C = t[0]);
  let re = C,
    w;
  t[1] === te
    ? (w = t[2])
    : ((w = (e) => {
        let t = ne.current;
        t != null && zt(e, t, S, te) && (ne.current = null);
      }),
      (t[1] = te),
      (t[2] = w));
  let ae = w,
    oe;
  t[3] !== n || t[4] !== x || t[5] !== ae
    ? ((oe = { bytes: n, onPagesRendered: ae, renderAsync: x }),
      (t[3] = n),
      (t[4] = x),
      (t[5] = ae),
      (t[6] = oe))
    : (oe = t[6]);
  let {
      bodyContainerElementRef: se,
      bodyContainerRef: E,
      loadState: D,
      pageElements: le,
      styleContainerRef: O,
      totalPages: k,
    } = X(oe),
    A;
  t[7] === b.value ? (A = t[8]) : ((A = l(b.value)), (t[7] = b.value), (t[8] = A));
  let j = A,
    me;
  t[9] === j ? (me = t[10]) : ((me = j ?? y({ entrypoint: `home` })), (t[9] = j), (t[10] = me));
  let he = me,
    ge = p(T, he),
    M;
  t[11] !== he || t[12] !== b
    ? ((M = (e) => {
        ie(b, he, e);
      }),
      (t[11] = he),
      (t[12] = b),
      (t[13] = M))
    : (M = t[13]);
  let _e = M,
    N,
    P;
  t[14] !== ge || t[15] !== u
    ? ((N = V(ge, u).filter(Mt)), (P = je(N)), (t[14] = ge), (t[15] = u), (t[16] = N), (t[17] = P))
    : ((N = t[16]), (P = t[17]));
  let ve = P,
    {
      handleTouchCancel: ye,
      handleTouchEnd: be,
      handleTouchMove: xe,
      handleTouchStart: F,
      handleWheel: Se,
      fitToWidth: Ce,
      isZoomToFitSelected: we,
      previewStyle: Te,
      resizeRef: I,
      setZoomPercent: Ee,
      zoomPercent: L,
    } = Nt(se),
    De = D === `ready`,
    z;
  t[18] !== se || t[19] !== te
    ? ((z = (e) => {
        let t = se.current;
        if (t == null || !zt(t, e, S, te)) {
          ne.current = e;
          return;
        }
        ne.current = null;
      }),
      (t[18] = se),
      (t[19] = te),
      (t[20] = z))
    : (z = t[20]);
  let Oe = z,
    ke,
    B;
  (t[21] === Oe
    ? ((ke = t[22]), (B = t[23]))
    : ((ke = () => ({ navigateToPage: Oe })), (B = [Oe]), (t[21] = Oe), (t[22] = ke), (t[23] = B)),
    (0, Z.useImperativeHandle)(d, ke, B));
  let Ae, Me;
  (t[24] !== u || t[25] !== _e
    ? ((Ae = () => () => {
        (re(),
          _e((e) => {
            let t = e.filter((e) => !Ht(e, u));
            return t.length === e.length ? e : t;
          }));
      }),
      (Me = [re, u, _e]),
      (t[24] = u),
      (t[25] = _e),
      (t[26] = Ae),
      (t[27] = Me))
    : ((Ae = t[26]), (Me = t[27])),
    (0, Z.useEffect)(Ae, Me));
  let U;
  t[28] === O
    ? (U = t[29])
    : ((U = (0, Q.jsx)(`div`, { ref: O, "aria-hidden": !0, className: `hidden` })),
      (t[28] = O),
      (t[29] = U));
  let Ne;
  t[30] !== g ||
  t[31] !== v ||
  t[32] !== Ce ||
  t[33] !== o ||
  t[34] !== De ||
  t[35] !== we ||
  t[36] !== s ||
  t[37] !== u ||
  t[38] !== Ee ||
  t[39] !== h ||
  t[40] !== L
    ? ((Ne = De
        ? (0, Q.jsx)(de, {
            artifactType: `DOC`,
            hideMetadata: g === `standalone`,
            title: It(h),
            centerContent: null,
            rightContent: (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Q.jsx)(fe, {
                  triggerTestId: `docx-preview-zoom-trigger`,
                  zoomPercent: L,
                  zoomOptions: ue,
                  onZoomPercentChange: Ee,
                  fitOption: { selected: we, onSelect: Ce },
                }),
                g === `default` && !v
                  ? (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(pe, { hostId: o, path: u }),
                        (0, Q.jsx)(ce, { hostId: o, onBeforeOpen: s, path: u, showLabel: !0 }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[30] = g),
      (t[31] = v),
      (t[32] = Ce),
      (t[33] = o),
      (t[34] = De),
      (t[35] = we),
      (t[36] = s),
      (t[37] = u),
      (t[38] = Ee),
      (t[39] = h),
      (t[40] = L),
      (t[41] = Ne))
    : (Ne = t[41]);
  let W;
  t[42] !== E || t[43] !== I ? ((W = R(E, I)), (t[42] = E), (t[43] = I), (t[44] = W)) : (W = t[44]);
  let Pe = De ? Kt : `hidden`,
    G;
  t[45] !== ye ||
  t[46] !== be ||
  t[47] !== xe ||
  t[48] !== F ||
  t[49] !== Se ||
  t[50] !== Te ||
  t[51] !== W ||
  t[52] !== Pe ||
  t[53] !== h
    ? ((G = (0, Q.jsx)(`div`, {
        ref: W,
        "aria-label": h,
        className: Pe,
        "data-testid": `docx-preview-panel`,
        onTouchCancel: ye,
        onTouchEnd: be,
        onTouchMove: xe,
        onTouchStart: F,
        onWheel: Se,
        style: Te,
      })),
      (t[45] = ye),
      (t[46] = be),
      (t[47] = xe),
      (t[48] = F),
      (t[49] = Se),
      (t[50] = Te),
      (t[51] = W),
      (t[52] = Pe),
      (t[53] = h),
      (t[54] = G))
    : (G = t[54]);
  let Fe;
  t[55] !== he ||
  t[56] !== _ ||
  t[57] !== N ||
  t[58] !== ye ||
  t[59] !== be ||
  t[60] !== xe ||
  t[61] !== F ||
  t[62] !== Se ||
  t[63] !== De ||
  t[64] !== ve ||
  t[65] !== le ||
  t[66] !== u ||
  t[67] !== _e ||
  t[68] !== m ||
  t[69] !== j ||
  t[70] !== h ||
  t[71] !== k ||
  t[72] !== L
    ? ((Fe =
        De && !_
          ? le.map((e, t) => {
              let n = t + 1;
              return (0, Gt.createPortal)(
                (0, Q.jsx)(Tt, {
                  comments: N,
                  conversationId: he,
                  isCommentMode: !1,
                  nextCommentNumber: ve,
                  onCommentsChange: _e,
                  onTouchCancel: ye,
                  onTouchEnd: be,
                  onTouchMove: xe,
                  onTouchStart: F,
                  onWheel: Se,
                  pageCount: k,
                  pageNumber: n,
                  pageSize: Vt(e, L),
                  path: u,
                  tabId: m,
                  threadId: j,
                  title: h,
                  zoomScale: L / 100,
                }),
                e,
                `${u}:${n}:browse`,
              );
            })
          : null),
      (t[55] = he),
      (t[56] = _),
      (t[57] = N),
      (t[58] = ye),
      (t[59] = be),
      (t[60] = xe),
      (t[61] = F),
      (t[62] = Se),
      (t[63] = De),
      (t[64] = ve),
      (t[65] = le),
      (t[66] = u),
      (t[67] = _e),
      (t[68] = m),
      (t[69] = j),
      (t[70] = h),
      (t[71] = k),
      (t[72] = L),
      (t[73] = Fe))
    : (Fe = t[73]);
  let Ie;
  t[74] === D ? (Ie = t[75]) : ((Ie = H(D)), (t[74] = D), (t[75] = Ie));
  let Le;
  return (
    t[76] !== U || t[77] !== Ne || t[78] !== G || t[79] !== Fe || t[80] !== Ie
      ? ((Le = (0, Q.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children: [U, Ne, G, Fe, Ie],
        })),
        (t[76] = U),
        (t[77] = Ne),
        (t[78] = G),
        (t[79] = Fe),
        (t[80] = Ie),
        (t[81] = Le))
      : (Le = t[81]),
    Le
  );
}
function Mt(e) {
  return e.localArtifactAnnotationContext?.artifactKind === `document`;
}
function X(e) {
  let t = (0, Wt.c)(17),
    { bytes: n, onPagesRendered: r, renderAsync: i } = e,
    a = (0, Z.useRef)(null),
    o = (0, Z.useRef)(null),
    s = (0, Z.useRef)(0),
    c = (0, Z.useRef)(!1),
    [l, u] = (0, Z.useState)(i == null ? `error` : `loading`),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = []), (t[0] = d)) : (d = t[0]);
  let [f, p] = (0, Z.useState)(d),
    [m, h] = (0, Z.useState)(0),
    g;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        let e = a.current,
          t = o.current;
        e == null || t == null || (Ft({ bodyContainer: e, styleContainer: t }), p([]), h(0));
      }),
      (t[1] = g))
    : (g = t[1]);
  let _ = g,
    v;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((v = () => {
        let e = a.current,
          t = o.current;
        if (e == null || t == null || c.current) return;
        if (((c.current = !0), _(), i == null)) {
          u(`error`);
          return;
        }
        let l = s.current + 1;
        ((s.current = l),
          u(`loading`),
          Pt({ bytes: n, bodyContainer: e, renderAsync: i, styleContainer: t }).then((n) => {
            if (s.current !== l) return;
            if (!n) {
              (Ft({ bodyContainer: e, styleContainer: t }), u(`error`));
              return;
            }
            let i = Rt(e);
            (p(i), h(Math.max(i.length, 1)), u(`ready`), r(e));
          }));
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => {
        ((s.current += 1), (c.current = !1), _());
      }),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    ee;
  t[7] === y
    ? (ee = t[8])
    : ((ee = (e) => {
        if (e == null) {
          (x(), (a.current = null));
          return;
        }
        ((a.current = e), y());
      }),
      (t[7] = y),
      (t[8] = ee));
  let te = ee,
    ne;
  t[9] === y
    ? (ne = t[10])
    : ((ne = (e) => {
        if (e == null) {
          (x(), (o.current = null));
          return;
        }
        ((o.current = e), y());
      }),
      (t[9] = y),
      (t[10] = ne));
  let S = ne,
    C;
  return (
    t[11] !== l || t[12] !== f || t[13] !== te || t[14] !== S || t[15] !== m
      ? ((C = {
          bodyContainerElementRef: a,
          bodyContainerRef: te,
          loadState: l,
          pageElements: f,
          styleContainerRef: S,
          totalPages: m,
        }),
        (t[11] = l),
        (t[12] = f),
        (t[13] = te),
        (t[14] = S),
        (t[15] = m),
        (t[16] = C))
      : (C = t[16]),
    C
  );
}
function Nt(e) {
  let t = (0, Z.useRef)(null),
    [n, r] = (0, Z.useState)(null),
    [i, a] = (0, Z.useState)({ kind: `fit-width` }),
    o =
      i.kind === `fit-width`
        ? (Lt({ bodyContainer: e.current, bodyContainerWidth: n, zoomPercent: Jt }) ?? Jt)
        : i.zoomPercent,
    s = L((e) => {
      let t = Math.floor(e.contentRect.width);
      r((e) => (e === t ? e : t));
    }),
    c = () => {
      t.current = null;
    },
    l = (e) => {
      a({ kind: `percentage`, zoomPercent: A(e) });
    };
  return {
    fitToWidth: () => {
      let t = i.kind === `fit-width` ? null : Bt(e.current);
      Lt({ bodyContainer: e.current, bodyContainerWidth: n, zoomPercent: o }) != null &&
        (a({ kind: `fit-width` }),
        t != null &&
          window.requestAnimationFrame(() => {
            t.scrollIntoView({ block: `center`, inline: `center` });
          }));
    },
    handleTouchCancel: c,
    handleTouchEnd: c,
    handleTouchMove: (e) => {
      let n = t.current;
      if (e.touches.length !== 2 || n == null) return;
      e.preventDefault();
      let r = le(
        e.touches[0].clientX,
        e.touches[0].clientY,
        e.touches[1].clientX,
        e.touches[1].clientY,
      );
      r <= 0 ||
        n.distance <= 0 ||
        a({
          kind: `percentage`,
          zoomPercent: E({
            initialDistance: n.distance,
            initialZoomPercent: n.zoomPercent,
            nextDistance: r,
          }),
        });
    },
    handleTouchStart: (e) => {
      if (e.touches.length !== 2) {
        c();
        return;
      }
      (e.preventDefault(),
        (t.current = {
          distance: le(
            e.touches[0].clientX,
            e.touches[0].clientY,
            e.touches[1].clientX,
            e.touches[1].clientY,
          ),
          zoomPercent: o,
        }));
    },
    handleWheel: (e) => {
      e.ctrlKey &&
        (e.preventDefault(),
        a((t) => ({
          kind: `percentage`,
          zoomPercent: k(t.kind === `percentage` ? t.zoomPercent : o, e.deltaY),
        })));
    },
    isZoomToFitSelected: i.kind === `fit-width`,
    previewStyle: { "--codex-docx-preview-zoom": `${o / 100}` },
    resizeRef: s,
    setZoomPercent: l,
    zoomPercent: o,
  };
}
async function Pt({ bytes: e, bodyContainer: t, renderAsync: n, styleContainer: r }) {
  try {
    return (await n(e, t, r, { className: $, renderAltChunks: !1, useBase64URL: !0 }), Ut(r), !0);
  } catch {
    return !1;
  }
}
function Ft({ bodyContainer: e, styleContainer: t }) {
  (e.replaceChildren(), t.replaceChildren());
}
function It(e) {
  return e.replace(/\.docx$/i, ``);
}
function Lt({ bodyContainer: e, bodyContainerWidth: t, zoomPercent: n }) {
  if (e == null) return null;
  let r = e.querySelector(Xt);
  if (r == null) return null;
  let i = r.parentElement ?? e,
    a = window.getComputedStyle(i),
    o = Number.parseFloat(a.paddingLeft) + Number.parseFloat(a.paddingRight),
    s = Math.max(1, ((t ?? i.clientWidth) || e.clientWidth) - (Number.isFinite(o) ? o : 0)),
    c = Number.parseFloat(window.getComputedStyle(r).width),
    l = c > 0 ? c : r.getBoundingClientRect().width / Math.max(n / 100, 2 ** -52);
  return !Number.isFinite(l) || l <= 0 ? null : A(Math.round((s / l) * 100));
}
function Rt(e) {
  return Array.from(e.querySelectorAll(Xt));
}
function zt(e, t, n, r) {
  if (!Number.isInteger(t) || t < 1) return !1;
  let i = Rt(e)[t - 1];
  if (i == null) return !1;
  n.current != null && (window.cancelAnimationFrame(n.current), (n.current = null));
  let a = Yt,
    o = () => {
      let t = e.getBoundingClientRect(),
        s = i.getBoundingClientRect(),
        c = e.scrollTop + (s.top - t.top) / Math.max(r, 2 ** -52);
      if ((e.scrollTo({ top: c }), --a, a > 0)) {
        n.current = window.requestAnimationFrame(o);
        return;
      }
      n.current = null;
    };
  return ((n.current = window.requestAnimationFrame(o)), !0);
}
function Bt(e) {
  if (e == null) return null;
  let t = Rt(e);
  if (t.length === 0) return null;
  let n = e.getBoundingClientRect(),
    r = n.top + n.height / 2,
    i = t[0],
    a = 1 / 0;
  for (let e of t) {
    let t = e.getBoundingClientRect(),
      n = t.top + t.height / 2,
      o = Math.abs(n - r);
    o < a && ((i = e), (a = o));
  }
  return i;
}
function Vt(e, t) {
  let n = window.getComputedStyle(e),
    r = Number.parseFloat(n.width),
    i = Number.parseFloat(n.height),
    a = e.getBoundingClientRect(),
    o = Math.max(t / 100, 2 ** -52);
  return {
    height: Number.isFinite(i) && i > 0 ? i : a.height / o,
    width: Number.isFinite(r) && r > 0 ? r : a.width / o,
  };
}
function Ht(e, t) {
  return (
    v(e) &&
    e.localArtifactAnnotationContext?.artifactKind === `document` &&
    e.localArtifactAnnotationContext.path === t
  );
}
function Ut(e) {
  let t = document.createElement(`style`);
  ((t.textContent = qt), e.appendChild(t));
}
var Wt, Z, Gt, Q, $, Kt, qt, Jt, Yt, Xt, Zt;
e(() => {
  ((Wt = C()),
    r(),
    g(),
    (Z = t(d(), 1)),
    (Gt = t(w(), 1)),
    s(),
    ae(),
    S(),
    De(),
    u(),
    se(),
    z(),
    Ae(),
    D(),
    Me(),
    O(),
    At(),
    (Q = o()),
    x(),
    ($ = `codex-docx-preview`),
    (Kt = `h-full min-h-0 overflow-auto bg-token-side-bar-background overscroll-contain`),
    (qt = `
  .${$}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.5rem 1.5rem ${oe};
    background: var(--color-token-side-bar-background) !important;
  }

  .${$}-wrapper > section.${$} {
    margin: 0 !important;
    border: 1px solid var(--color-token-border-default);
    background: white !important;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transform-origin: top center;
    border-radius: 0;
    zoom: var(--codex-docx-preview-zoom, 1);
    position: relative;
    overflow: hidden;
  }

  :root:where(
    [data-codex-window-type="browser"],
    [data-codex-window-type="chrome-extension"],
    [data-codex-window-type="electron"]
  ) .${$}-wrapper > section.${$} {
    border-color: transparent;
    box-shadow: var(--elevation-prominent);
  }

  .${$} [data-paged-annotation-ask-for-edit="true"],
  .${$} [data-paged-annotation-ask-for-edit="true"] * {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif !important;
    font-size: 12px !important;
    letter-spacing: -0.3px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-label="true"] {
    font-weight: 400 !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-shortcut="true"] {
    font-weight: 500 !important;
  }
`),
    (Jt = 75),
    (Yt = 12),
    (Xt = `section.${$}`),
    (Zt = i(
      async () => {
        let { renderAsync: e } = await import(`./docx-preview.js`);
        return { renderAsync: e };
      },
      __vite__mapDeps([0, 1]),
      import.meta.url,
    ).then(
      ({ renderAsync: e }) => e,
      () => null,
    )));
})();
export { jt as DocxPreviewPanel };
//# sourceMappingURL=docx-preview-panel.js.map
