import { n as e } from "./rolldown-runtime.js";
import {
  Bs as t,
  Gs as n,
  Js as r,
  Ol as i,
  Us as a,
  xs as o,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  oC as s,
  sC as c,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function l() {
  let e = (0, f.c)(2),
    { value: t } = c(p),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = u(t)), (e[0] = t), (e[1] = n)), n);
}
function u(e) {
  let t = {},
    n = h.parse(e);
  for (let [e, r] of Object.entries(n.skill_markdown_by_id ?? {})) {
    let n = m.safeParse(r);
    n.success && (t[e] = n.data);
  }
  return t;
}
function d(e, t) {
  return e[t];
}
var f,
  p,
  m,
  h,
  g = e(() => {
    ((f = i()),
      o(),
      s(),
      (p = `1852350085`),
      (m = n().refine((e) => e.trim().length > 0)),
      (h = t({ skill_markdown_by_id: a(n(), r()).optional() }).catch({
        skill_markdown_by_id: {},
      })));
  });
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides.js.map
