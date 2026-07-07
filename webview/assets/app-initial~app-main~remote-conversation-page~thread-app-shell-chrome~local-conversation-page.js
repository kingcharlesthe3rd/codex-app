import { n as e, s as t } from "./rolldown-runtime.js";
import { El as n } from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Tu as r,
  _y as i,
  gy as a,
  hy as o,
  my as s,
  wu as c,
} from "./app-initial~app-main~onboarding-page.js";
import { as as l, is as u } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  ba as d,
  xa as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  Xn as p,
  Zn as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
function h(e, t = `icon-xs`) {
  let n = (0, g.createElement)(p, { className: t });
  return e == null
    ? n
    : (0, g.createElement)(d, {
        alt: ``,
        className: t,
        fallback: n,
        logoDarkUrl: e.logoDarkUrl,
        logoUrl: e.logoUrl,
      });
}
var g,
  _ = e(() => {
    ((g = t(n(), 1)), f(), m());
  });
function v(
  e,
  t,
  {
    activate: n = !0,
    instanceId: r = crypto.randomUUID(),
    isPreview: a,
    readHostResource: l,
    tabId: d = y(t, r),
    target: f = `right`,
    title: p = t.title,
    toolArguments: m,
  } = {},
) {
  if (u(e.value) == null) return null;
  let g = o(e, d) ?? f;
  return (
    s(g).openTab(e, c, {
      icon: h(t.icon, `icon-xs shrink-0`),
      id: d,
      props: { instanceId: r, readHostResource: l, toolArguments: m, view: t },
      title: p,
      activate: n,
      isPreview: a,
    }),
    n && i(e, g),
    d
  );
}
function y(e, t) {
  return `mcp-capability:${e.hostId}:${e.server}:${e.tool.name}:${t}`;
}
var b = e(() => {
  (l(), a(), r(), _());
});
export { _ as i, v as n, h as r, b as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~thread-app-shell-chrome~local-conversation-page.js.map
