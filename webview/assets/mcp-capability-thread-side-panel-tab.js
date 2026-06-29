import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { i as n } from "./route-scope.js";
import { t as r } from "./apps.js";
import { a as i, i as a, o } from "./thread-panel-state.js";
import { t as s } from "./mcp-capability-view-frame.js";
var c = e(t(), 1);
function l(
  e,
  t,
  {
    activate: l = !0,
    instanceId: d = crypto.randomUUID(),
    isPreview: f,
    readHostResource: p,
    tabId: m = u(t, d),
    target: h = `right`,
    title: g = t.title,
    toolArguments: _,
  } = {},
) {
  if (n(e.value) == null) return null;
  let v = i(e, m) ?? h;
  return (
    a(v).openTab(e, s, {
      icon: (0, c.createElement)(r, { className: `icon-xs shrink-0` }),
      id: m,
      props: {
        instanceId: d,
        ...(p == null ? {} : { readHostResource: p }),
        ...(_ == null ? {} : { toolArguments: _ }),
        view: t,
      },
      title: g,
      activate: l,
      ...(f == null ? {} : { isPreview: f }),
    }),
    l && o(e, v),
    m
  );
}
function u(e, t) {
  return `mcp-capability:${e.hostId}:${e.server}:${e.tool.name}:${t}`;
}
export { l as t };
//# sourceMappingURL=mcp-capability-thread-side-panel-tab.js.map
