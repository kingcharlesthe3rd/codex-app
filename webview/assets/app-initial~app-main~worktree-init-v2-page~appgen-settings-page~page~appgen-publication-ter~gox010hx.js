import { n as e } from "./rolldown-runtime.js";
import {
  Wt as t,
  ot as n,
  ut as r,
  xr as i,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
function a(e) {
  return e.length === 0 || (e.length === 1 && e[0] === `~`);
}
async function o(e, { directoryName: t, prompt: r } = {}) {
  if (!a(e)) return { cwd: e[0] ?? null, projectlessOutputDirectory: null, workspaceRoots: e };
  let {
    cwd: i,
    outputDirectory: o,
    workspaceRoot: s,
  } = await n(`projectless-thread-cwd`, { params: { directoryName: t, prompt: r ?? null } });
  return { cwd: i, projectlessOutputDirectory: o, workspaceRoots: [s] };
}
async function s({ projectId: e, projectWritableRoots: t, legacyRoot: r = e, prompt: a }) {
  let o = i({ projectId: e, projectWritableRoots: t, legacyRoot: r });
  if (o.length === 1) return { cwd: o[0], workspaceRoots: o };
  let s = await n(`projectless-thread-cwd`, { params: { prompt: a ?? null } });
  return { cwd: s.cwd, workspaceRoots: [s.workspaceRoot, ...o], generatedWorkspace: s };
}
var c = e(() => {
  (t(), r());
});
export { a as i, o as n, c as r, s as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~gox010hx.js.map
