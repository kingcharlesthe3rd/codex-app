import { s as e } from "./chunk-Bj-mKKzh.js";
import { Bi as t, Bn as n, Jn as r, Pr as i, br as a, na as o } from "./src-2.js";
import {
  Qr as s,
  Xr as c,
  Yr as l,
  Zr as u,
  go as d,
  uo as f,
} from "./app-server-manager-signals.js";
import { n as p } from "./vscode-api.js";
import { g as m } from "./persisted-signal-CweW-bgN.js";
import { r as h } from "./mcp-capability-signals.js";
import { t as g } from "./send-open-file-request-Dau-We3b.js";
import { t as _ } from "./mime-types.js";
var v = t([`blob`, `text`]),
  y = o({ "openai/resource": o({ representation: v.optional() }).optional() }).passthrough();
function b(e, t) {
  let n = f(e),
    r = null,
    i = 0;
  for (let e of t)
    for (let t of e.extensions) {
      let a = E(t);
      D(n, a) && a.length > i && ((r = e), (i = a.length));
    }
  return r;
}
function x(e, t) {
  return { primaryFile: { name: f(e), uri: t } };
}
function S({ fileViewer: e, path: t, readContents: n, resourceUri: r }) {
  return async (i) => (w(i.uri, r) ? { extension: T(t, e), ...(await n(C(i._meta))) } : null);
}
function C(e) {
  let t = y.safeParse(e ?? {});
  if (!t.success) throw Object.assign(Error(`Invalid MCP resource read params`), { code: -32602 });
  return t.data[`openai/resource`]?.representation ?? `text`;
}
function w(e, t) {
  return t.startsWith(`codex-resource://`) && (e === t || e.startsWith(`${t}/`));
}
function T(e, t) {
  return (
    t.extensions
      .map(E)
      .filter((t) => D(f(e), t))
      .sort((e, t) => t.length - e.length)[0] ?? ``
  );
}
function E(e) {
  return e.trim().replace(/^\.+/, ``).toLowerCase();
}
function D(e, t) {
  return t.length > 0 && e.toLowerCase().endsWith(`.${t}`);
}
var O = 10 * 1024 * 1024,
  k = null;
function A() {
  return k;
}
function j(e) {
  k = e;
}
var M = new Map([
  [`csv`, `csv`],
  [`docx`, `docx`],
  [`ipynb`, `ipynb`],
  [`pdf`, `pdf`],
  [`pptx`, `pptx`],
  [`tex`, `tex`],
  [`tsv`, `tsv`],
  [`xlsm`, `xlsx`],
  [`xlsx`, `xlsx`],
]);
function N(e) {
  let t = c(e);
  return t == null ? null : (M.get(t) ?? null);
}
function P(e) {
  switch (e) {
    case `csv`:
    case `ipynb`:
    case `tex`:
    case `tsv`:
      return !0;
    case `docx`:
    case `pdf`:
    case `pptx`:
    case `xlsx`:
      return !1;
  }
}
function F(e) {
  let t = N(e);
  if (t == null) return null;
  switch (t) {
    case `csv`:
    case `tsv`:
    case `xlsx`:
      return { artifactType: `spreadsheet`, importKind: t };
    case `docx`:
      return { artifactType: `document`, importKind: t };
    case `ipynb`:
      return { artifactType: `notebook`, importKind: t };
    case `pdf`:
    case `tex`:
      return { artifactType: `pdf`, importKind: t };
    case `pptx`:
      return { artifactType: `slides`, importKind: t };
  }
}
function I(e) {
  let t = e.toLowerCase(),
    n = Math.max(t.lastIndexOf(`/`), t.lastIndexOf(`\\`)),
    r = n >= 0 ? t.slice(n + 1) : t,
    i = r.lastIndexOf(`.`);
  return i > 0 && r.slice(i + 1) === `pdb`;
}
var L = new Map([
  [`doc`, `word-document`],
  [`docx`, `word-document`],
  [`key`, `keynote-deck`],
  [`numbers`, `numbers-spreadsheet`],
  [`odp`, `opendocument-presentation`],
  [`ods`, `opendocument-spreadsheet`],
  [`odt`, `opendocument-text`],
  [`pages`, `pages-document`],
  [`ppt`, `powerpoint-deck`],
  [`pptx`, `powerpoint-deck`],
  [`rtf`, `rich-text-document`],
  [`xls`, `excel-spreadsheet`],
  [`xlsm`, `excel-spreadsheet`],
  [`xlsx`, `excel-spreadsheet`],
]);
function R(e, t) {
  return t === `image`
    ? `image`
    : t === `pdf`
      ? `pdf`
      : t != null && t !== `text`
        ? null
        : t == null && l(e) !== `none`
          ? `image`
          : I(e)
            ? `pdb`
            : u(e)
              ? `markdown`
              : t == null && s(e)
                ? `pdf`
                : null;
}
function z(e, t) {
  if (t === `image` || t === `pdf`) return `always`;
  if (t != null && t !== `text`) return `none`;
  let n = l(e);
  return t == null && n === `always`
    ? `always`
    : (t == null && n === `toggle`) || u(e) || I(e)
      ? `toggle`
      : t == null && s(e)
        ? `always`
        : `none`;
}
function B(e, t) {
  if (t === `image` || t === `pdf`) return null;
  let n = c(e),
    r = n == null ? null : (L.get(n) ?? null);
  if (
    r != null &&
    (t == null || t === `archive` || t === `binary` || (t === `text` && n === `rtf`))
  )
    return r;
  if (t == null) return null;
  switch (t) {
    case `archive`:
    case `audio`:
    case `binary`:
    case `video`:
      return t;
    case `text`:
      return null;
  }
}
function V(e, { contentKind: t } = {}) {
  return R(e, t) != null || B(e, t) == null ? !0 : N(e) != null;
}
var H = e(_(), 1);
function U({
  contentKind: e,
  hasMcpCapabilityFileViewer: t = !1,
  hostConfig: n,
  modifiedClick: r,
  openedSidePanelTarget: i,
  path: a,
  windowType: o,
}) {
  let s = F(a),
    l = R(a, e),
    u = B(a, e),
    d = (0, H.lookup)(a);
  return {
    artifact_import_kind: s?.importKind ?? `none`,
    artifact_type: s?.artifactType ?? `none`,
    extension: c(a) ?? `none`,
    host_kind: W(n),
    mime_type: typeof d == `string` ? d : `unknown`,
    modified_click: r,
    outcome: K({
      artifactPresentationExists: s != null,
      hasMcpCapabilityFileViewer: t,
      hostConfig: n,
      modifiedClick: r,
      openedSidePanelTarget: i,
      path: a,
      reviewPreviewKind: l,
      contentKind: e,
      unsupportedPreviewType: u,
    }),
    review_preview_kind: l ?? `none`,
    unsupported_preview_type: u ?? `none`,
    window_type: o,
  };
}
function W(e) {
  return e == null ? `unknown` : n(e) ? `remote` : `local`;
}
function G({
  contentKind: e,
  hasMcpCapabilityFileViewer: t,
  hostConfig: r,
  modifiedClick: i,
  path: a,
}) {
  return r != null && !n(r) && !i && !t && !V(a, { contentKind: e });
}
function K({
  artifactPresentationExists: e,
  hasMcpCapabilityFileViewer: t,
  hostConfig: n,
  modifiedClick: r,
  openedSidePanelTarget: i,
  path: a,
  reviewPreviewKind: o,
  contentKind: s,
  unsupportedPreviewType: c,
}) {
  return G({
    contentKind: s,
    hasMcpCapabilityFileViewer: t,
    hostConfig: n,
    modifiedClick: r,
    path: a,
  })
    ? `external_file_manager`
    : i === `mcpCapabilityFileViewer`
      ? `review_rich_preview`
      : i === `artifact`
        ? `artifact_renderer`
        : i === `textFileEditor`
          ? `plain_text`
          : t && i == null
            ? `review_rich_preview`
            : e && i == null
              ? `artifact_renderer`
              : c == null
                ? o == null
                  ? `plain_text`
                  : `review_rich_preview`
                : `unsupported_message`;
}
function q({
  scope: e,
  appPath: t,
  browserSidebarEnabled: o = !1,
  column: s,
  cwd: c,
  endLine: l,
  hostConfig: u,
  hostId: f,
  icon: _,
  isPreview: v,
  line: y,
  modifiedClick: x = !1,
  onBeforeOpenSidePanelTab: S,
  openFile: C = g,
  openInSidePanel: w = !1,
  openMode: T,
  path: E,
  persistPreferredTargetPath: D,
  target: k,
  title: j,
}) {
  let M = {
    path: E,
    cwd: c,
    ...(k == null ? {} : { target: k }),
    ...(t == null ? {} : { appPath: t }),
    ...(y == null ? {} : { line: y }),
    ...(s == null ? {} : { column: s }),
    ...(T == null ? {} : { openMode: T }),
    ...(D == null ? {} : { persistPreferredTargetPath: D }),
    ...(f == null ? {} : { hostId: f }),
  };
  if (k != null || T === `workspace` || D != null) {
    C(M);
    return;
  }
  let N = J({ browserSidebarEnabled: o, hostConfig: u, path: E });
  if (!x && N) {
    C({ path: E, cwd: c, ...(f == null ? {} : { hostId: f }) });
    return;
  }
  if (e != null && w) {
    let t = A();
    if (t == null) {
      C(M);
      return;
    }
    let o = c == null ? E : d(c, E),
      g = u != null && !n(u) ? u : null,
      w = y == null && l == null && b(o, e.get(h, f ?? `local`)) != null,
      T = () => (
        S?.(e),
        t(e, o, {
          ...(f == null ? {} : { hostId: f }),
          ...(y == null ? {} : { line: y }),
          ...(l == null ? {} : { endLine: l }),
          ...(_ == null ? {} : { icon: _ }),
          ...(v == null ? {} : { isPreview: v }),
          ...(j == null ? {} : { title: j }),
        })
      ),
      D = (t) => {
        if (
          G({
            contentKind: t,
            hasMcpCapabilityFileViewer: w,
            hostConfig: u,
            modifiedClick: x,
            path: E,
          })
        ) {
          (m(e, {
            eventName: `codex_workspace_file_preview_attempted`,
            metadata: U({
              contentKind: t,
              hasMcpCapabilityFileViewer: w,
              hostConfig: u,
              modifiedClick: x,
              path: E,
              windowType: `electron`,
            }),
          }),
            C({ ...M, target: `fileManager` }));
          return;
        }
        m(e, {
          eventName: `codex_workspace_file_preview_attempted`,
          metadata: U({
            contentKind: t,
            hasMcpCapabilityFileViewer: w,
            hostConfig: u,
            modifiedClick: x,
            openedSidePanelTarget: T(),
            path: E,
            windowType: `electron`,
          }),
        });
      };
    if (g != null && y == null && s == null && l == null && !a(E) && i(o)) {
      p(`read-file-metadata`, {
        params: {
          contentSampleByteLimit: r,
          contentSampleMaxFileBytes: O,
          hostId: f ?? g.id,
          path: o,
        },
      })
        .then((e) => {
          if (e.isFile) {
            D(e.contentKind);
            return;
          }
          C(M);
        })
        .catch(() => {
          D();
        });
      return;
    }
    D();
    return;
  }
  C(M);
}
function J({ browserSidebarEnabled: e, hostConfig: t, path: r }) {
  return e && t != null && !n(t) && a(r);
}
export { F as a, O as c, x as d, B as i, S as l, R as n, P as o, z as r, j as s, q as t, b as u };
//# sourceMappingURL=open-workspace-file.js.map
