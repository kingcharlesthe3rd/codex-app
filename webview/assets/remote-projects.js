import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { Z as n, l as r, o as i, p as a, t as o } from "./app-scope-CWE-zIhQ.js";
import { t as s } from "./use-host-config.js";
import { Qi as c, c as l, s as u } from "./thread-context-inputs.js";
import { n as d, r as f, u as p } from "./vscode-api.js";
import { Aa as m, Br as h, Lt as g, Ta as _, d as v, jr as y, pa as b } from "./src-3.js";
import { t as x } from "./use-global-state.js";
var S = _({ dirs: b(m()).optional(), hostId: m().optional() }),
  C = a(o, ({ params: e, source: t }, { queryClient: n }) => ({
    enabled: e?.dirs == null || e.dirs.length > 0,
    meta: { gitOrigins: { dirs: e?.dirs, hostId: e?.hostId } },
    placeholderData: () => w(n, e),
    queryFn: () => d(`git-origins`, { params: e, source: t }),
    queryKey: f(`git-origins`, e),
    staleTime: p.FIVE_SECONDS,
  }));
function w(e, t) {
  if (!(t?.dirs == null || t.dirs.length === 0))
    for (let n of e.getQueryCache().findAll({ queryKey: f(`git-origins`) })) {
      let r = S.safeParse(n.meta?.gitOrigins);
      if (!r.success || r.data.hostId !== t.hostId || r.data.dirs == null) continue;
      let i = new Set(r.data.dirs);
      if (!t.dirs.every((e) => i.has(e))) continue;
      let a = e.getQueryData(n.queryKey);
      if (a != null) return a;
    }
}
var T = n(),
  E = e(t(), 1);
function D(e, t, n) {
  if (t == null || e == null) return null;
  let r = v(n);
  return e.find((e) => e.hostId === t && v(e.remotePath) === r) ?? null;
}
function O({
  sourceWorkspaceRoot: e,
  sourceGitRoot: t,
  sourceGitOriginUrl: n,
  destinationWorkspaceRoot: r,
  destinationGitRoot: i,
  destinationGitOriginUrl: a,
}) {
  let o = j(e, t),
    s = N(n);
  return o != null && s != null && N(a) === s && j(r, i) === o;
}
function k({
  sourceWorkspaceRoot: e,
  sourceGitRoot: t,
  sourceGitOrigins: n,
  destinationWorkspaceRoots: r,
  destinationGitOrigins: i,
}) {
  let a = M(e, n);
  return (
    r.find((n) => {
      let r = M(n, i);
      return O({
        sourceWorkspaceRoot: e,
        sourceGitRoot: t,
        sourceGitOriginUrl: a?.originUrl ?? null,
        destinationWorkspaceRoot: n,
        destinationGitRoot: r?.root ?? null,
        destinationGitOriginUrl: r?.originUrl ?? null,
      });
    }) ?? null
  );
}
var A = r(o, ({ sourceHostId: e, sourceGitRoot: t, sourceWorkspaceRoot: n }, { get: r }) => {
  if (e !== `local` || t == null || n == null) return [];
  let i = r(u),
    a = r(C, { params: { hostId: e, dirs: [n] }, source: `local_remote_dropdown` }),
    o = new Map();
  for (let e of r(l)) {
    if (i.find((t) => t.hostId === e.hostId) == null) continue;
    let t = o.get(e.hostId);
    if (t != null) {
      t.projects.push(e);
      continue;
    }
    o.set(e.hostId, {
      hostId: e.hostId,
      hostDisplayName: s(e.hostId, i).display_name,
      projects: [e],
    });
  }
  let c = [];
  for (let { hostDisplayName: e, hostId: i, projects: s } of o.values()) {
    let o = r(C, {
      params: { hostId: i, dirs: s.map((e) => e.remotePath) },
      source: `local_remote_dropdown`,
    });
    if (a?.isPending || o?.isPending) {
      c.push({ status: `loading`, hostDisplayName: e, hostId: i });
      continue;
    }
    if (a?.isError || o?.isError) {
      c.push({ status: `error`, hostDisplayName: e, hostId: i });
      continue;
    }
    let l = k({
        sourceWorkspaceRoot: n,
        sourceGitRoot: t,
        sourceGitOrigins: a?.data?.origins,
        destinationWorkspaceRoots: s.map((e) => e.remotePath),
        destinationGitOrigins: o?.data?.origins,
      }),
      u = s.find(({ remotePath: e }) => e === l);
    u != null && c.push({ status: `ready`, hostDisplayName: e, project: u });
  }
  return c;
});
function j(e, t) {
  if (e == null || t == null) return null;
  let n = P(e),
    r = P(t);
  if (n === r) return ``;
  let i = r === `/` ? r : `${r}/`;
  return n.startsWith(i) ? n.slice(i.length) : null;
}
function M(e, t) {
  if (e == null) return null;
  let n = v(e);
  return t?.find((e) => v(e.dir) === n) ?? null;
}
function N(e) {
  let t = e == null ? null : g(e);
  return t == null ? null : `${t.host}/${t.owner}/${t.repo}`.toLowerCase();
}
function P(e) {
  let t = y(e.trim()).replace(/\/+/g, `/`);
  return t === `/` ? t : t.replace(/\/+$/, ``);
}
function F(e, t) {
  c(e, h.ACTIVE_REMOTE_PROJECT_ID, t ?? void 0);
}
function I(e, t) {
  return c(e, h.REMOTE_PROJECTS, t);
}
function L() {
  let e = (0, T.c)(21),
    t = i(o),
    { data: n, isLoading: r } = x(h.REMOTE_PROJECTS),
    { data: a } = x(h.ACTIVE_REMOTE_PROJECT_ID),
    s;
  e[0] === n ? (s = e[1]) : ((s = n ?? []), (e[0] = n), (e[1] = s));
  let l = s,
    u;
  e[2] !== l || e[3] !== a
    ? ((u = l.find((e) => e.id === a) ?? null), (e[2] = l), (e[3] = a), (e[4] = u))
    : (u = e[4]);
  let d = u,
    f,
    p;
  (e[5] !== r || e[6] !== t || e[7] !== d || e[8] !== a
    ? ((f = () => {
        r || a == null || d != null || c(t, h.ACTIVE_REMOTE_PROJECT_ID, void 0);
      }),
      (p = [r, t, d, a]),
      (e[5] = r),
      (e[6] = t),
      (e[7] = d),
      (e[8] = a),
      (e[9] = f),
      (e[10] = p))
    : ((f = e[9]), (p = e[10])),
    (0, E.useEffect)(f, p));
  let m = a ?? null,
    g;
  e[11] === t ? (g = e[12]) : ((g = (e) => F(t, e)), (e[11] = t), (e[12] = g));
  let _;
  e[13] === t ? (_ = e[14]) : ((_ = (e) => I(t, e)), (e[13] = t), (e[14] = _));
  let v;
  return (
    e[15] !== l || e[16] !== d || e[17] !== m || e[18] !== g || e[19] !== _
      ? ((v = {
          selectedRemoteProject: d,
          selectedRemoteProjectId: m,
          setSelectedRemoteProjectId: g,
          remoteProjects: l,
          setRemoteProjects: _,
        }),
        (e[15] = l),
        (e[16] = d),
        (e[17] = m),
        (e[18] = g),
        (e[19] = _),
        (e[20] = v))
      : (v = e[20]),
    v
  );
}
export { L as a, F as i, D as n, C as o, A as r, k as t };
//# sourceMappingURL=remote-projects.js.map
