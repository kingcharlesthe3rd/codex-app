import { n as e } from "./rolldown-runtime.js";
import {
  Tl as t,
  Xs as n,
  nc as r,
  vl as i,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Tu as a, dp as o, up as s, wu as c } from "./app-initial~app-main~onboarding-page.js";
import {
  Rs as l,
  Sx as u,
  ec as d,
  yx as f,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  hr as p,
  yr as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
function h() {
  let e = (0, _.c)(7),
    { server: t, toolName: n } = d(),
    i = r(m),
    a;
  e[0] !== t || e[1] !== n || e[2] !== i
    ? ((a =
        t == null || n == null
          ? null
          : (i.find((e) => e.server === t && e.tool.name === n) ?? null)),
      (e[0] = t),
      (e[1] = n),
      (e[2] = i),
      (e[3] = a))
    : (a = e[3]);
  let o = a;
  if (o == null) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, v.jsx)(g, {})), (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let s;
  return (e[5] === o ? (s = e[6]) : ((s = (0, v.jsx)(c, { view: o })), (e[5] = o), (e[6] = s)), s);
}
function g() {
  let e = (0, _.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, v.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center`,
          children: (0, v.jsx)(s, {
            title: (0, v.jsx)(u, {
              id: `openaiMcpCapabilities.view.notFound`,
              defaultMessage: `MCP app view not found`,
              description: `Title shown when an MCP app view route does not match an available server tool`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var _, v;
e(() => {
  ((_ = t()), n(), f(), l(), o(), p(), a(), (v = i()));
})();
export { h as McpCapabilityViewPage };
//# sourceMappingURL=mcp-capability-view-page.js.map
