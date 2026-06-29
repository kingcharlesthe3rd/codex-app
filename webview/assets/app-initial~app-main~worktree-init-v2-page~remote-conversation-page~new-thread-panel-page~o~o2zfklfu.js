import { n as e } from "./rolldown-runtime.js";
import {
  Wt as t,
  as as n,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Fx as r,
  Lx as i,
  Yb as a,
  Zb as o,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function s({
  agentMode: e,
  permissionProfileId: t,
  shouldSendPermissionOverrides: i,
  workspaceRoots: o,
  config: s,
  configOverrides: c,
  input: l,
  commentAttachments: u,
  collaborationMode: d,
  serviceTier: f,
  cwd: p,
  fileAttachments: m,
  addedFiles: h,
  memoryPreferences: g,
  threadSource: _,
  threadStartKind: v,
  workspaceKind: y = `project`,
  projectlessOutputDirectory: b,
  projectAssignment: x,
  baseInstructions: S,
  additionalDeveloperInstructions: C,
}) {
  if (y === `projectless` && b == null)
    throw Error(`Projectless conversations require an output directory`);
  let w = a([...m, ...h]),
    T = i === !1 ? null : n(e, o, s);
  return (
    T != null &&
      t != null &&
      ((T.activePermissionProfile = { id: t, extends: null }), (T.runtimeWorkspaceRoots = o)),
    {
      input: l,
      commentAttachments: u,
      workspaceRoots: o,
      collaborationMode: d,
      multiAgentMode: r,
      serviceTier: f,
      ...(T == null
        ? { useAppServerPermissionDefault: !0 }
        : { permissions: T, approvalsReviewer: T.approvalsReviewer }),
      cwd: p,
      attachments: w,
      workspaceKind: y,
      projectAssignment: x,
      threadSource: _,
      threadStartKind: v,
      config: c,
      ...(y === `projectless` ? { projectlessOutputDirectory: b } : {}),
      memoryPreferences: g,
      baseInstructions: S,
      additionalDeveloperInstructions: C,
    }
  );
}
var c = e(() => {
  (t(), i(), o());
});
export { c as n, s as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~o2zfklfu.js.map
