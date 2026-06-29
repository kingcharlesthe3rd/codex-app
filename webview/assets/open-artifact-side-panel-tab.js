import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { _ as n, t as r } from "./app-scope-CWE-zIhQ.js";
import { Bt as i, jt as a } from "./use-host-config.js";
import { r as o } from "./vscode-api.js";
import { _n as s, yn as c } from "./src-3.js";
import { G as l, tt as u } from "./app-shell-state.js";
import { A as d, I as f, M as p, O as m } from "./rpc-1.js";
import { l as h, o as g } from "./open-workspace-file.js";
import { n as _ } from "./app-shell-tab-controller.js";
import { n as v } from "./thread-context.js";
import { a as y, i as b } from "./thread-panel-state.js";
import { n as x } from "./get-file-icon.js";
import { a as S, t as C } from "./workspace-file-context-menu.js";
import { t as w } from "./artifact-tab-content-shell.js";
function T(e, { cwd: t, hostId: n, path: r }) {
  return C(e, { cwd: t, hostId: n, path: r });
}
function E(e, { cwd: t, hostId: n, path: r }) {
  S(e, { cwd: t, hostId: n, path: r });
}
function D({ cwd: e, path: t }) {
  if (e == null) return t;
  let n = a(t, e);
  return p(n) ? n : m({ root: e, relativePath: n, includeWorkspaceRootLabel: !0 });
}
function O({ cwd: e, path: t }) {
  return f(D({ cwd: e, path: t }))
    .split(`/`)
    .filter((e) => e.length > 0);
}
var k = `workspaceFile:`;
function A() {
  return {
    editor: { mode: `view`, pierreDraft: null, textDraft: null },
    scrollLeft: null,
    scrollTop: null,
  };
}
var j = n(r, (e) => !1);
function M(e) {
  return e.flatMap((e) => {
    let t = N(e);
    return t == null ? [] : [t];
  });
}
function N(e) {
  if (!e.kind?.startsWith(`workspaceFile:`)) return null;
  let { props: t } = e;
  if (
    !(`hostId` in t) ||
    typeof t.hostId != `string` ||
    !(`path` in t) ||
    typeof t.path != `string`
  )
    return null;
  let n = `artifactType` in t && P(t.artifactType);
  return { hostId: t.hostId, path: t.path, refreshMode: n ? `manual` : `auto` };
}
function P(e) {
  return e === `document` || e === `slides` || e === `spreadsheet` || e === `pdf`;
}
function F({ hostId: e, path: t }) {
  return `${e}\0${t}`;
}
function I(e, t) {
  e.set(j, F(t), !0);
}
function L(e, t) {
  e.set(j, F(t), !1);
}
async function R({ cacheKey: e, openFiles: t, queryClient: n, throwOnError: r = !1 }) {
  await Promise.all(
    t
      .flatMap(({ hostId: t, path: n }) => [
        o(
          `read-file-metadata`,
          { contentSampleByteLimit: c, contentSampleMaxFileBytes: h, hostId: t, path: n },
          e,
        ),
        o(`read-file`, { hostId: t, path: n }, e),
        o(`read-file`, { path: n, hostId: t }, e),
        o(`read-file-binary`, { path: n, hostId: t }, e),
        o(`read-file-binary`, { hostId: t, path: n }, e),
        o(`compile-latex-artifact`, { path: n, hostId: t }, e),
        o(`compile-latex-artifact`, { hostId: t, path: n }, e),
      ])
      .map((e) => n.refetchQueries({ exact: !0, queryKey: e, type: `all` }, { throwOnError: r })),
  );
}
function z(e, t = {}) {
  e.value.routeKind === `local-thread` &&
    i(`set-open-review-file-source-tabs`, {
      conversationId: e.value.conversationId,
      openFiles: M(_(e, t)),
    });
}
function B(e) {
  switch (e.value.routeKind) {
    case `home`:
    case `new-thread-panel`:
    case `local-thread`:
    case `remote-thread`: {
      let t = e.get(v);
      return t == null ? null : s(t);
    }
    case `chatgpt-thread`:
    case `other`:
      return null;
  }
}
var V = new Map();
function H(e) {
  return {
    navigateTo: (t) => {
      K(e, t);
    },
  };
}
function U(e, t) {
  let n = q(e);
  return (
    (n.handler = t),
    W(e),
    () => {
      n.handler === t && (n.handler = null);
    }
  );
}
function W(e) {
  let t = V.get(e);
  if (t?.pendingTarget == null || t.handler == null) return;
  let n = t.pendingTarget;
  t.handler(n) && (t.pendingTarget = null);
}
function G(e) {
  V.delete(e);
}
function K(e, t) {
  let n = q(e);
  if (n.handler?.(t)) {
    n.pendingTarget = null;
    return;
  }
  n.pendingTarget = t;
}
function q(e) {
  let t = V.get(e);
  if (t != null) return t;
  let n = { handler: null, pendingTarget: null };
  return (V.set(e, n), n);
}
var J = e(t(), 1);
function Y(e, t, n) {
  let {
      artifactNavigationTarget: r,
      hostId: i,
      icon: a,
      isPreview: o,
      target: s = `right`,
      tabId: c,
      title: f,
    } = n,
    p = g(t);
  if (p == null) return !1;
  let m = x(t),
    h = f ?? d(t),
    _ = c ?? `artifact:${i}:${t}`,
    v = b(y(e, _) ?? s),
    S = B(e),
    C = { ...p, hostId: i, path: t, tabId: _, title: h };
  return (
    E(e, { cwd: S, hostId: i, path: t }),
    v.openTab(e, w, {
      contextMenuItems: (e) => T(e, { cwd: S, hostId: i, path: t }),
      icon: a ?? (0, J.createElement)(m, { className: `icon-xs shrink-0` }),
      isPreview: o,
      kind: `${k}${i}`,
      props: C,
      onClose: (e, t) => {
        (G(_),
          t === `right` &&
            e.get(b(t).activeTab$)?.tabId === _ &&
            e.get(l) &&
            (e.set(l, !1), u(e, `main`)),
          z(e, { excludeTab: { panelId: t, tabId: _ } }));
      },
      id: _,
      title: h,
      tooltip: D({ cwd: S, path: t }),
    }),
    r != null && H(_).navigateTo(r),
    z(e),
    !0
  );
}
export {
  T as _,
  z as a,
  P as c,
  R as d,
  j as f,
  D as g,
  O as h,
  B as i,
  I as l,
  A as m,
  W as n,
  F as o,
  k as p,
  U as r,
  N as s,
  Y as t,
  L as u,
  E as v,
};
//# sourceMappingURL=open-artifact-side-panel-tab.js.map
