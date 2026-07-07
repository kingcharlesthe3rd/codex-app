import { n as e } from "./rolldown-runtime.js";
import {
  Bs as t,
  Fs as n,
  Rs as r,
  Tl as i,
  Us as a,
  gs as o,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Ib as s, Lb as c } from "./app-initial~app-main~new-thread-panel-page.js";
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
      (m = t().refine((e) => e.trim().length > 0)),
      (h = n({ skill_markdown_by_id: r(t(), a()).optional() }).catch({
        skill_markdown_by_id: {},
      })));
  });
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides.js.map
