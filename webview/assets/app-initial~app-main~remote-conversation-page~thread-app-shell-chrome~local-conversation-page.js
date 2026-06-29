import { n as e, s as t } from "./rolldown-runtime.js";
import { kl as n } from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  T as r,
  w as i,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Nl as a,
  Pl as o,
  nc as s,
  tc as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  fl as l,
  pl as u,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  Dt as d,
  Et as f,
  Tt as p,
  wt as m,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
function h(e, t = `icon-xs`) {
  let n = (0, g.createElement)(a, { className: t });
  return e == null
    ? n
    : (0, g.createElement)(c, {
        alt: ``,
        className: t,
        fallback: n,
        logoDarkUrl: e.logoDarkUrl,
        logoUrl: e.logoUrl,
      });
}
var g,
  _ = e(() => {
    ((g = t(n(), 1)), s(), o());
  });
function v(
  e,
  t,
  {
    activate: n = !0,
    instanceId: r = crypto.randomUUID(),
    isPreview: a,
    readHostResource: o,
    tabId: s = y(t, r),
    target: c = `right`,
    title: u = t.title,
    toolArguments: f,
  } = {},
) {
  if (l(e.value) == null) return null;
  let g = p(e, s) ?? c;
  return (
    m(g).openTab(e, i, {
      icon: h(t.icon, `icon-xs shrink-0`),
      id: s,
      props: { instanceId: r, readHostResource: o, toolArguments: f, view: t },
      title: u,
      activate: n,
      isPreview: a,
    }),
    n && d(e, g),
    s
  );
}
function y(e, t) {
  return `mcp-capability:${e.hostId}:${e.server}:${e.tool.name}:${t}`;
}
var b = e(() => {
  (u(), f(), r(), _());
});
export { _ as i, v as n, h as r, b as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~thread-app-shell-chrome~local-conversation-page.js.map
