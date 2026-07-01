import { n as e } from "./rolldown-runtime.js";
import {
  CP as t,
  GP as n,
  HP as r,
  RV as i,
  SP as a,
  TP as o,
  Xz as s,
  d as c,
  fB as l,
  gB as u,
  h as d,
  hB as f,
  jV as p,
  lB as m,
  mB as h,
  qP as g,
  tB as _,
  u as v,
  uB as y,
  wP as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  fp as x,
  nO as S,
  pp as C,
  tO as ee,
  vp as w,
  yp as T,
} from "./app-initial~app-main~onboarding-page.js";
import {
  f as E,
  p as te,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  O as ne,
  k as re,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~coa484up.js";
import { n as ie, t as ae } from "./artifact-preview-status-JB-mmcBf.js";
function D(e) {
  let t = B.safeParse(e);
  if (!t.success) throw Error(`Notebook must be a JSON object with a cells array`);
  return { cells: t.data.cells.map(O), title: k(t.data.metadata, `title`) };
}
function O(e) {
  let t = le(e.source),
    n = e.id ?? null,
    r = A(e.metadata, P);
  switch (e.cell_type) {
    case `code`:
      return {
        cellType: `code`,
        descriptionMarkdown: A(e.metadata, F),
        executionCount: e.execution_count ?? null,
        id: n,
        outputs: (e.outputs ?? []).flatMap((t, n) => oe(t, n, ue(e.metadata, n))),
        source: t,
        title: r,
      };
    case `markdown`:
      return { cellType: `markdown`, id: n, source: t, title: r };
    case `raw`:
      return { cellType: `raw`, id: n, source: t, title: r };
    default:
      return { cellType: `raw`, id: n, source: t, title: r };
  }
}
function oe(e, t, n) {
  switch (e.output_type) {
    case `stream`: {
      let t = M(e.text);
      return t == null
        ? []
        : [{ name: k(e, `name`) ?? `stdout`, summaryMarkdown: n, text: t, type: `stream` }];
    }
    case `error`:
      return [
        {
          ename: k(e, `ename`) ?? `Error`,
          evalue: k(e, `evalue`) ?? ``,
          summaryMarkdown: n,
          traceback: M(e.traceback) ?? ``,
          type: `error`,
        },
      ];
    case `display_data`:
    case `execute_result`:
      return se(e.data, t, n);
    default:
      return [];
  }
}
function se(e, t, n) {
  let r = I.safeParse(e);
  if (!r.success) return [];
  let i = ce(r.data, t);
  if (i != null) return [i];
  let a = M(r.data[`text/html`]);
  if (a != null && a.trim().length > 0) return [{ html: a, type: `html` }];
  let o = M(r.data[`text/markdown`]);
  if (o != null && o.trim().length > 0) return [{ markdown: o, type: `markdown` }];
  let s = M(r.data[`text/plain`]);
  if (s != null) return [{ summaryMarkdown: n, text: s, type: `text` }];
  let c = r.data[`application/json`] ?? r.data[`application/vnd.vega.v5+json`];
  return c == null ? [] : [{ summaryMarkdown: n, text: JSON.stringify(c, null, 2), type: `json` }];
}
function ce(e, t) {
  let n = M(e[`image/png`]);
  if (n != null)
    return {
      dataUrl: `data:image/png;base64,${n.replaceAll(/\s/g, ``)}`,
      outputNumber: t + 1,
      type: `image`,
    };
  let r = M(e[`image/jpeg`]);
  if (r != null)
    return {
      dataUrl: `data:image/jpeg;base64,${r.replaceAll(/\s/g, ``)}`,
      outputNumber: t + 1,
      type: `image`,
    };
  let i = M(e[`image/svg+xml`]);
  return i == null
    ? null
    : {
        dataUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,
        outputNumber: t + 1,
        type: `image`,
      };
}
function le(e) {
  return M(e) ?? ``;
}
function k(e, t) {
  let n = e?.[t];
  return typeof n == `string` ? n : null;
}
function A(e, t) {
  for (let n of j(e))
    for (let e of t) {
      let t = M(n[e]);
      if (t != null && t.trim().length > 0) return t;
    }
  return null;
}
function ue(e, t) {
  for (let n of j(e)) {
    let e = n.outputSummaries;
    if (!Array.isArray(e)) continue;
    let r = I.safeParse(e[t]);
    if (!r.success) continue;
    let i = M(r.data.summaryMarkdown);
    if (i != null && i.trim().length > 0) return i;
  }
  return null;
}
function j(e) {
  return e == null
    ? []
    : [
        ...N.flatMap((t) => {
          let n = I.safeParse(e[t]);
          return n.success ? [n.data] : [];
        }),
        e,
      ];
}
function M(e) {
  return typeof e == `string`
    ? e
    : Array.isArray(e) && e.every((e) => typeof e == `string`)
      ? e.join(``)
      : null;
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V = e(() => {
    (s(),
      (N = [`codex`, `codexNotebook`, `codex_notebook`, `codex-app`]),
      (P = [`title`, `cellTitle`, `cell_title`]),
      (F = [
        `codeDescriptionMarkdown`,
        `code_description_markdown`,
        `descriptionMarkdown`,
        `description_markdown`,
        `description`,
      ]),
      (I = l(h(), u())),
      (L = f([h(), _(h())]).optional()),
      (R = I),
      (z = y({
        cell_type: h(),
        execution_count: m().int().nullable().optional(),
        id: h().optional(),
        metadata: I.optional(),
        outputs: _(R).optional(),
        source: L,
      }).passthrough()),
      (B = y({ cells: _(z), metadata: I.optional() }).passthrough()));
  });
function H(e) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${U}"><meta name="color-scheme" content="light dark"><base target="_blank"><style>html,body{margin:0;background:transparent;color:CanvasText;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}body{padding:12px;}img,svg,canvas,video{max-width:100%;height:auto;}table{border-collapse:collapse;}th,td{border:1px solid color-mix(in srgb, CanvasText 18%, transparent);padding:4px 6px;}</style></head><body>${e}</body></html>`;
}
var U,
  de = e(() => {
    U = [
      `default-src 'none'`,
      `base-uri 'none'`,
      `connect-src 'none'`,
      `font-src data:`,
      `form-action 'none'`,
      `frame-src 'none'`,
      `img-src data: blob:`,
      `media-src data: blob:`,
      `object-src 'none'`,
      `script-src 'none'`,
      `style-src 'unsafe-inline'`,
    ].join(`; `);
  });
function fe(e) {
  let t = (0, Q.c)(30),
    { contentsBase64: r, headerRightContent: i, hostId: a, path: o, title: s } = e,
    l = g(),
    u;
  t[0] === r ? (u = t[1]) : ((u = xe(r)), (t[0] = r), (t[1] = u));
  let d = u,
    f;
  t[2] !== d.document || t[3] !== d.status || t[4] !== s
    ? ((f = d.status === `ready` ? (d.document.title ?? Z(s)) : Z(s)),
      (t[2] = d.document),
      (t[3] = d.status),
      (t[4] = s),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== l || t[7] !== d.document || t[8] !== d.status
    ? ((m =
        d.status === `ready`
          ? l.formatMessage(
              {
                id: `notebookPreview.cellCount`,
                defaultMessage: `{cellCount, plural, one {# cell} other {# cells}}`,
                description: `Cell count shown in the notebook artifact preview header`,
              },
              { cellCount: d.document.cells.length },
            )
          : null),
      (t[6] = l),
      (t[7] = d.document),
      (t[8] = d.status),
      (t[9] = m))
    : (m = t[9]);
  let h = m,
    _ = h == null ? `IPYNB` : `IPYNB · ${h}`,
    y;
  t[10] !== l || t[11] !== d.status
    ? ((y =
        d.status === `ready`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(pe, {}),
                (0, $.jsxs)(W, {
                  label: l.formatMessage({
                    id: `notebookPreview.runAllDisabledTooltip`,
                    defaultMessage: `Running is not available in this preview`,
                    description: `Tooltip for a disabled run-all control in the read-only notebook preview`,
                  }),
                  children: [
                    (0, $.jsx)(E, { className: `icon-2xs` }),
                    (0, $.jsx)(`span`, {
                      className: `hidden md:inline`,
                      children: (0, $.jsx)(n, {
                        id: `notebookPreview.runAllDisabled`,
                        defaultMessage: `Run all`,
                        description: `Disabled run-all control in the read-only notebook preview`,
                      }),
                    }),
                  ],
                }),
                (0, $.jsxs)(W, {
                  label: l.formatMessage({
                    id: `notebookPreview.restartKernelDisabledTooltip`,
                    defaultMessage: `Kernels are not connected in this preview`,
                    description: `Tooltip for a disabled restart-kernel control in the read-only notebook preview`,
                  }),
                  children: [
                    (0, $.jsx)(ee, { className: `icon-2xs` }),
                    (0, $.jsx)(`span`, {
                      className: `hidden lg:inline`,
                      children: (0, $.jsx)(n, {
                        id: `notebookPreview.restartKernelDisabled`,
                        defaultMessage: `Restart kernel`,
                        description: `Disabled restart-kernel control in the read-only notebook preview`,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (t[10] = l),
      (t[11] = d.status),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] !== a || t[14] !== o
    ? ((b = (0, $.jsx)(c, { hostId: a, path: o })), (t[13] = a), (t[14] = o), (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] !== i || t[17] !== y || t[18] !== b
    ? ((x = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center justify-end gap-1 overflow-hidden`,
        children: [y, b, i],
      })),
      (t[16] = i),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== p || t[21] !== _ || t[22] !== x
    ? ((S = (0, $.jsx)(v, { artifactType: _, centerContent: null, rightContent: x, title: p })),
      (t[20] = p),
      (t[21] = _),
      (t[22] = x),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== d.document || t[25] !== d.status
    ? ((C =
        d.status === `ready`
          ? (0, $.jsx)(me, { document: d.document })
          : (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: ie(`error`),
            })),
      (t[24] = d.document),
      (t[25] = d.status),
      (t[26] = C))
    : (C = t[26]);
  let w;
  return (
    t[27] !== S || t[28] !== C
      ? ((w = (0, $.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children: [S, C],
        })),
        (t[27] = S),
        (t[28] = C),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function pe() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`span`, {
          className: `bg-token-main-surface-secondary/30 inline-flex h-7 shrink-0 items-center rounded-full border border-token-border-light px-2 text-xs font-medium text-token-text-tertiary`,
          children: (0, $.jsx)(n, {
            id: `notebookPreview.readOnlyBadge`,
            defaultMessage: `Read only`,
            description: `Badge shown in the read-only notebook artifact preview`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function W(e) {
  let t = (0, Q.c)(3),
    { children: n, label: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, $.jsx)(`button`, {
          "aria-disabled": !0,
          className: `inline-flex h-7 shrink-0 cursor-default items-center gap-1 rounded-md px-2 text-xs font-medium text-token-text-tertiary/70`,
          disabled: !0,
          title: r,
          type: `button`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function me(e) {
  let t = (0, Q.c)(7),
    { document: r } = e;
  if (r.cells.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center px-6 text-center text-sm text-token-text-tertiary`,
            children: (0, $.jsx)(n, {
              id: `notebookPreview.empty`,
              defaultMessage: `This notebook does not contain any cells`,
              description: `Empty state shown for a notebook without cells`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  if (t[1] !== r.cells) {
    let e;
    (t[3] === r.cells.length
      ? (e = t[4])
      : ((e = (e, t) =>
          (0, $.jsx)(
            he,
            { cell: e, cellNumber: t + 1, totalCellCount: r.cells.length },
            e.id ?? t,
          )),
        (t[3] = r.cells.length),
        (t[4] = e)),
      (i = r.cells.map(e)),
      (t[1] = r.cells),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, $.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-auto bg-token-side-bar-background px-4 py-4 sm:px-6 sm:py-5`,
          children: (0, $.jsx)(`div`, {
            className: `mx-auto flex max-w-3xl flex-col gap-4`,
            children: i,
          }),
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function he(e) {
  let t = (0, Q.c)(9),
    { cell: n, cellNumber: r, totalCellCount: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = (0, $.jsx)(`summary`, {
        className: `flex cursor-interaction list-none items-center justify-between gap-3 border-b border-token-border-light px-4 py-2 [&::-webkit-details-marker]:hidden`,
        children: (0, $.jsx)(ge, { cell: n, cellNumber: r, totalCellCount: i }),
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === n ? (o = t[5]) : ((o = (0, $.jsx)(_e, { cell: n })), (t[4] = n), (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== o
      ? ((s = (0, $.jsxs)(`details`, {
          className: `group/notebook-cell overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary`,
          open: !0,
          children: [a, o],
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function ge(e) {
  let t = (0, Q.c)(25),
    { cell: r, cellNumber: i, totalCellCount: o } = e,
    s = g(),
    c;
  t[0] !== r || t[1] !== i || t[2] !== s
    ? ((c = Ce(s, r, i)), (t[0] = r), (t[1] = i), (t[2] = s), (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(a, {
        className: `icon-2xs shrink-0 -rotate-90 text-token-text-tertiary transition-transform duration-300 group-open/notebook-cell:rotate-0`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === l
    ? (d = t[6])
    : ((d = (0, $.jsx)(`div`, {
        className: `min-w-0 truncate text-sm font-medium text-token-text-primary`,
        title: l,
        children: l,
      })),
      (t[5] = l),
      (t[6] = d));
  let f;
  t[7] !== i || t[8] !== o
    ? ((f = (0, $.jsx)(`span`, {
        className: `shrink-0 text-xs text-token-text-tertiary`,
        children: (0, $.jsx)(n, {
          id: `notebookPreview.cellPosition`,
          defaultMessage: `Cell {cellNumber} of {totalCellCount}`,
          description: `Position label for a rendered notebook cell`,
          values: { cellNumber: i, totalCellCount: o },
        }),
      })),
      (t[7] = i),
      (t[8] = o),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== d || t[11] !== f
    ? ((p = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [u, d, f],
      })),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== r.cellType || t[14] !== r.executionCount
    ? ((m =
        r.cellType === `code` && r.executionCount != null
          ? (0, $.jsx)(`span`, {
              className: `tabular-nums`,
              children: (0, $.jsx)(n, {
                id: `notebookPreview.executionCount`,
                defaultMessage: `Run {executionCount}`,
                description: `Execution count label for a rendered notebook code cell`,
                values: { executionCount: r.executionCount },
              }),
            })
          : null),
      (t[13] = r.cellType),
      (t[14] = r.executionCount),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== r.cellType || t[17] !== s
    ? ((h =
        r.cellType === `code`
          ? (0, $.jsx)(`span`, {
              "aria-hidden": !0,
              className: `pointer-events-none inline-flex opacity-0 transition-opacity duration-150 group-focus-within/notebook-cell:opacity-60 group-hover/notebook-cell:opacity-60`,
              title: s.formatMessage({
                id: `notebookPreview.runCellDisabledTooltip`,
                defaultMessage: `Running is disabled in read-only preview`,
                description: `Tooltip for a disabled per-cell run affordance in the read-only notebook preview`,
              }),
              children: (0, $.jsx)(E, { className: `icon-2xs` }),
            })
          : null),
      (t[16] = r.cellType),
      (t[17] = s),
      (t[18] = h))
    : (h = t[18]);
  let _;
  t[19] !== m || t[20] !== h
    ? ((_ = (0, $.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-2 text-xs font-medium text-token-text-tertiary`,
        children: [m, h],
      })),
      (t[19] = m),
      (t[20] = h),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  return (
    t[22] !== p || t[23] !== _
      ? ((v = (0, $.jsxs)($.Fragment, { children: [p, _] })), (t[22] = p), (t[23] = _), (t[24] = v))
      : (v = t[24]),
    v
  );
}
function _e(e) {
  let t = (0, Q.c)(23),
    { cell: r } = e;
  if (r.cellType === `markdown`) {
    let e;
    return (
      t[0] === r.source
        ? (e = t[1])
        : ((e = (0, $.jsx)(`div`, {
            className: `px-4 py-3`,
            children:
              r.source.trim().length === 0
                ? (0, $.jsx)(G, {
                    children: (0, $.jsx)(n, {
                      id: `notebookPreview.emptyMarkdownCell`,
                      defaultMessage: `Empty Markdown cell`,
                      description: `Empty state shown for a Markdown notebook cell without source`,
                    }),
                  })
                : (0, $.jsx)(C, {
                    allowBasicHtml: !0,
                    className: `text-size-chat`,
                    children: r.source,
                  }),
          })),
          (t[0] = r.source),
          (t[1] = e)),
      e
    );
  }
  if (r.cellType === `raw`) {
    let e;
    return (
      t[2] === r.source
        ? (e = t[3])
        : ((e = (0, $.jsx)(`div`, {
            className: `px-4 py-3`,
            children:
              r.source.trim().length === 0
                ? (0, $.jsx)(G, {
                    children: (0, $.jsx)(n, {
                      id: `notebookPreview.emptyRawCell`,
                      defaultMessage: `Empty raw cell`,
                      description: `Empty state shown for a raw notebook cell without source`,
                    }),
                  })
                : (0, $.jsx)(w, {
                    content: r.source,
                    language: `text`,
                    shouldWrapCode: !0,
                    title: (0, $.jsx)(n, {
                      id: `notebookPreview.rawCodeTitle`,
                      defaultMessage: `Raw`,
                      description: `Code snippet title for a raw notebook cell`,
                    }),
                    wrapperClassName: `shadow-none`,
                  }),
          })),
          (t[2] = r.source),
          (t[3] = e)),
      e
    );
  }
  if (r.cellType === `code`) {
    let e;
    t[4] === r.descriptionMarkdown
      ? (e = t[5])
      : ((e = r.descriptionMarkdown?.trim() ?? ``), (t[4] = r.descriptionMarkdown), (t[5] = e));
    let i = e,
      a;
    t[6] === r.source ? (a = t[7]) : ((a = r.source.trim()), (t[6] = r.source), (t[7] = a));
    let o = a.length > 0,
      s;
    t[8] === i
      ? (s = t[9])
      : ((s =
          i.length > 0
            ? (0, $.jsx)(C, { allowBasicHtml: !0, className: `text-size-chat`, children: i })
            : null),
        (t[8] = i),
        (t[9] = s));
    let c;
    t[10] !== r.source || t[11] !== i.length || t[12] !== o
      ? ((c = o
          ? i.length > 0
            ? (0, $.jsx)(ye, { code: r.source })
            : (0, $.jsx)(w, {
                content: r.source,
                language: `python`,
                shouldWrapCode: !0,
                title: (0, $.jsx)(n, {
                  id: `notebookPreview.pythonCodeTitle`,
                  defaultMessage: `Python`,
                  description: `Code snippet title for a Python notebook cell`,
                }),
                wrapperClassName: `shadow-none`,
              })
          : (0, $.jsx)(G, {
              children: (0, $.jsx)(n, {
                id: `notebookPreview.emptyCodeCell`,
                defaultMessage: `Empty code cell`,
                description: `Empty state shown for a code notebook cell without source`,
              }),
            })),
        (t[10] = r.source),
        (t[11] = i.length),
        (t[12] = o),
        (t[13] = c))
      : (c = t[13]);
    let l;
    t[14] !== s || t[15] !== c
      ? ((l = (0, $.jsxs)(`div`, { className: `px-4 py-3`, children: [s, c] })),
        (t[14] = s),
        (t[15] = c),
        (t[16] = l))
      : (l = t[16]);
    let u;
    t[17] === r.outputs
      ? (u = t[18])
      : ((u =
          r.outputs.length > 0
            ? (0, $.jsx)(`div`, {
                className: `bg-token-main-surface-secondary/15 border-t border-token-border-light px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]`,
                children: (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: r.outputs.map(ve),
                }),
              })
            : null),
        (t[17] = r.outputs),
        (t[18] = u));
    let d;
    return (
      t[19] !== l || t[20] !== u
        ? ((d = (0, $.jsxs)($.Fragment, { children: [l, u] })),
          (t[19] = l),
          (t[20] = u),
          (t[21] = d))
        : (d = t[21]),
      d
    );
  }
  let i;
  return (
    t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(`div`, {
          className: `px-4 py-3`,
          children: (0, $.jsx)(G, {
            children: (0, $.jsx)(n, {
              id: `notebookPreview.emptyUnknownCell`,
              defaultMessage: `Empty notebook cell`,
              description: `Empty state shown for an unknown notebook cell without source`,
            }),
          }),
        })),
        (t[22] = i))
      : (i = t[22]),
    i
  );
}
function ve(e, t) {
  return (0, $.jsx)(be, { output: e }, t);
}
function ye(e) {
  let t = (0, Q.c)(4),
    { code: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsxs)(`summary`, {
        className: `flex cursor-interaction list-none items-center gap-2 rounded-md py-1 text-left text-xs font-medium text-token-text-tertiary transition-colors hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-text-tertiary [&::-webkit-details-marker]:hidden`,
        children: [
          (0, $.jsx)(a, {
            className: `icon-2xs shrink-0 -rotate-90 transition-transform duration-300 group-open/code:rotate-0`,
          }),
          (0, $.jsx)(ne, { className: `icon-2xs shrink-0` }),
          (0, $.jsx)(`span`, {
            children: (0, $.jsx)(n, {
              id: `notebookPreview.codeDisclosure`,
              defaultMessage: `Code`,
              description: `Disclosure label for notebook cell source code`,
            }),
          }),
        ],
      })),
      (t[0] = i))
    : (i = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(n, {
        id: `notebookPreview.pythonCodeTitle`,
        defaultMessage: `Python`,
        description: `Code snippet title for a Python notebook cell`,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  return (
    t[2] === r
      ? (s = t[3])
      : ((s = (0, $.jsxs)(`details`, {
          className: `group/code mt-3 border-t border-token-border-light pt-2`,
          children: [
            i,
            (0, $.jsx)(`div`, {
              className: `mt-2`,
              children: (0, $.jsx)(w, {
                content: r,
                language: `python`,
                shouldWrapCode: !0,
                title: o,
                wrapperClassName: `shadow-none`,
              }),
            }),
          ],
        })),
        (t[2] = r),
        (t[3] = s)),
    s
  );
}
function G(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`div`, {
          className: `rounded-md border border-token-border-light px-3 py-2 text-sm text-token-text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function be(e) {
  let t = (0, Q.c)(35),
    { output: r } = e,
    i = g();
  switch (r.type) {
    case `image`: {
      let e;
      t[0] !== i || t[1] !== r.outputNumber
        ? ((e = i.formatMessage(
            {
              id: `notebookPreview.imageOutputAlt`,
              defaultMessage: `Notebook output {outputNumber}`,
              description: `Alt text for an image output rendered in a notebook artifact preview`,
            },
            { outputNumber: r.outputNumber },
          )),
          (t[0] = i),
          (t[1] = r.outputNumber),
          (t[2] = e))
        : (e = t[2]);
      let n;
      return (
        t[3] !== r.dataUrl || t[4] !== e
          ? ((n = (0, $.jsx)(`div`, {
              className: `overflow-auto rounded-md bg-token-main-surface-primary/40 p-2`,
              children: (0, $.jsx)(`img`, {
                alt: e,
                className: `max-h-[640px] max-w-full`,
                src: r.dataUrl,
              }),
            })),
            (t[3] = r.dataUrl),
            (t[4] = e),
            (t[5] = n))
          : (n = t[5]),
        n
      );
    }
    case `html`: {
      let e;
      t[6] === r.html ? (e = t[7]) : ((e = H(r.html)), (t[6] = r.html), (t[7] = e));
      let n;
      t[8] === i
        ? (n = t[9])
        : ((n = i.formatMessage({
            id: `notebookPreview.htmlOutputTitle`,
            defaultMessage: `Notebook HTML output`,
            description: `Title for a sandboxed notebook HTML output frame`,
          })),
          (t[8] = i),
          (t[9] = n));
      let a;
      t[10] !== e || t[11] !== n
        ? ((a = (0, $.jsx)(`iframe`, {
            className: `h-72 w-full rounded-md bg-token-main-surface-primary`,
            sandbox: ``,
            srcDoc: e,
            title: n,
          })),
          (t[10] = e),
          (t[11] = n),
          (t[12] = a))
        : (a = t[12]);
      let o;
      t[13] === r.html
        ? (o = t[14])
        : ((o = (0, $.jsx)(q, { className: `mt-2`, children: r.html })),
          (t[13] = r.html),
          (t[14] = o));
      let s;
      return (
        t[15] !== a || t[16] !== o
          ? ((s = (0, $.jsxs)(`div`, { children: [a, o] })), (t[15] = a), (t[16] = o), (t[17] = s))
          : (s = t[17]),
        s
      );
    }
    case `markdown`: {
      let e;
      return (
        t[18] === r.markdown
          ? (e = t[19])
          : ((e = (0, $.jsx)(`div`, {
              className: `rounded-md bg-token-main-surface-primary/40 px-3 py-2`,
              children: (0, $.jsx)(C, {
                allowBasicHtml: !0,
                className: `text-size-chat`,
                children: r.markdown,
              }),
            })),
            (t[18] = r.markdown),
            (t[19] = e)),
        e
      );
    }
    case `json`: {
      let e;
      return (
        t[20] !== r.summaryMarkdown || t[21] !== r.text
          ? ((e = (0, $.jsx)(K, {
              language: `json`,
              rawText: r.text,
              summaryMarkdown: r.summaryMarkdown,
            })),
            (t[20] = r.summaryMarkdown),
            (t[21] = r.text),
            (t[22] = e))
          : (e = t[22]),
        e
      );
    }
    case `error`: {
      let e;
      t[23] !== r.ename || t[24] !== r.evalue || t[25] !== r.summaryMarkdown
        ? ((e =
            r.summaryMarkdown == null
              ? (0, $.jsx)(`div`, {
                  className: `text-sm font-medium text-token-charts-red`,
                  children:
                    r.evalue.length > 0
                      ? (0, $.jsx)(n, {
                          id: `notebookPreview.errorOutput`,
                          defaultMessage: `{name}: {message}`,
                          description: `Notebook error output label with error name and message`,
                          values: { message: r.evalue, name: r.ename },
                        })
                      : r.ename,
                })
              : (0, $.jsx)(C, {
                  allowBasicHtml: !0,
                  className: `text-size-chat`,
                  children: r.summaryMarkdown,
                })),
          (t[23] = r.ename),
          (t[24] = r.evalue),
          (t[25] = r.summaryMarkdown),
          (t[26] = e))
        : (e = t[26]);
      let i;
      t[27] === r
        ? (i = t[28])
        : ((i =
            Y(r).trim().length > 0 ? (0, $.jsx)(q, { className: `mt-2`, children: Y(r) }) : null),
          (t[27] = r),
          (t[28] = i));
      let a;
      return (
        t[29] !== e || t[30] !== i
          ? ((a = (0, $.jsxs)(`div`, {
              className: `rounded-md border border-token-charts-red/30 bg-token-charts-red/5 p-3`,
              children: [e, i],
            })),
            (t[29] = e),
            (t[30] = i),
            (t[31] = a))
          : (a = t[31]),
        a
      );
    }
    case `stream`:
    case `text`: {
      let e;
      return (
        t[32] !== r.summaryMarkdown || t[33] !== r.text
          ? ((e = (0, $.jsx)(K, { rawText: r.text, summaryMarkdown: r.summaryMarkdown })),
            (t[32] = r.summaryMarkdown),
            (t[33] = r.text),
            (t[34] = e))
          : (e = t[34]),
        e
      );
    }
  }
}
function K(e) {
  let t = (0, Q.c)(12),
    { language: n, rawText: r, summaryMarkdown: i } = e;
  if (i != null) {
    let e;
    t[0] === i
      ? (e = t[1])
      : ((e = (0, $.jsx)(C, { allowBasicHtml: !0, className: `text-size-chat`, children: i })),
        (t[0] = i),
        (t[1] = e));
    let n;
    t[2] === r
      ? (n = t[3])
      : ((n = (0, $.jsx)(q, { className: `mt-2`, children: r })), (t[2] = r), (t[3] = n));
    let a;
    return (
      t[4] !== e || t[5] !== n
        ? ((a = (0, $.jsxs)(`div`, {
            className: `rounded-md bg-token-main-surface-primary/40 p-3`,
            children: [e, n],
          })),
          (t[4] = e),
          (t[5] = n),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  if (n != null) {
    let e;
    return (
      t[7] !== n || t[8] !== r
        ? ((e = (0, $.jsx)(w, {
            content: r,
            language: n,
            shouldWrapCode: !0,
            showActionBar: !1,
            wrapperClassName: `shadow-none`,
          })),
          (t[7] = n),
          (t[8] = r),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let a;
  return (
    t[10] === r ? (a = t[11]) : ((a = (0, $.jsx)(J, { children: r })), (t[10] = r), (t[11] = a)), a
  );
}
function q(e) {
  let t = (0, Q.c)(6),
    { children: r, className: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`summary`, {
        className: `cursor-interaction text-xs font-medium text-token-text-tertiary marker:text-token-text-tertiary`,
        children: (0, $.jsx)(n, {
          id: `notebookPreview.rawOutputDisclosure`,
          defaultMessage: `Raw output`,
          description: `Disclosure label for a notebook cell's raw output`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === r
    ? (o = t[2])
    : ((o = (0, $.jsx)(J, { className: `mt-2`, children: r })), (t[1] = r), (t[2] = o));
  let s;
  return (
    t[3] !== i || t[4] !== o
      ? ((s = (0, $.jsxs)(`details`, { className: i, children: [a, o] })),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function J(e) {
  let t = (0, Q.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = b(
        `overflow-auto rounded-md bg-token-text-code-block-background/20 p-3 font-mono text-xs whitespace-pre-wrap text-token-text-primary`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, $.jsx)(`pre`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function xe(e) {
  try {
    return { document: D(JSON.parse(new TextDecoder().decode(Se(e)))), status: `ready` };
  } catch {
    return { status: `error` };
  }
}
function Se(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e += 1) n[e] = t.charCodeAt(e);
  return n;
}
function Y(e) {
  let t = `${e.ename}: ${e.evalue}`.trim();
  return e.traceback.trim().length === 0 ? t : `${t}\n${e.traceback}`;
}
function Ce(e, t, n) {
  let r = t.title?.trim();
  if (r != null && r.length > 0) return r;
  switch (t.cellType) {
    case `markdown`:
      return (
        we(t.source) ??
        e.formatMessage(
          {
            id: `notebookPreview.markdownCellTitle`,
            defaultMessage: `Markdown cell {cellNumber}`,
            description: `Fallback title for a Markdown notebook cell without a heading`,
          },
          { cellNumber: n },
        )
      );
    case `raw`:
      return e.formatMessage(
        {
          id: `notebookPreview.rawCellTitle`,
          defaultMessage: `Raw cell {cellNumber}`,
          description: `Fallback title for a raw notebook cell`,
        },
        { cellNumber: n },
      );
    case `code`: {
      let r = Te(t.descriptionMarkdown ?? ``);
      return r.length > 0
        ? X(r)
        : e.formatMessage(
            {
              id: `notebookPreview.codeCellTitle`,
              defaultMessage: `Code cell {cellNumber}`,
              description: `Fallback title for a code notebook cell without a description`,
            },
            { cellNumber: n },
          );
    }
  }
}
function we(e) {
  let t = e
    .split(/\r?\n/)
    .map((e) => e.trim())
    .find((e) => /^#{1,6}\s+/.test(e));
  return t == null ? null : X(t.replace(/^#{1,6}\s+/, ``));
}
function Te(e) {
  return e
    .replace(/`{1,3}([^`]+)`{1,3}/g, `$1`)
    .replace(/\[(.*?)\]\([^)]*\)/g, `$1`)
    .replace(/[*_~#>]/g, ``)
    .replace(/\s+/g, ` `)
    .trim();
}
function X(e) {
  let t = e.trim();
  return t.length <= 80 ? t : `${t.slice(0, 77).trimEnd()}…`;
}
function Z(e) {
  return e.replace(/\.ipynb$/i, ``);
}
var Q, $;
e(() => {
  ((Q = i()), o(), r(), d(), ae(), T(), x(), t(), re(), te(), S(), V(), de(), ($ = p()));
})();
export { fe as NotebookPreviewPanel };
//# sourceMappingURL=notebook-preview-panel.js.map
