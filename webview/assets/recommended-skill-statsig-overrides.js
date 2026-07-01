import { n as e } from "./rolldown-runtime.js";
import {
  Mj as t,
  Nj as n,
  RV as r,
  Xz as i,
  fB as a,
  gB as o,
  mB as s,
  uB as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function l() {
  let e = (0, f.c)(2),
    { value: t } = n(p),
    r;
  return (e[0] === t ? (r = e[1]) : ((r = u(t)), (e[0] = t), (e[1] = r)), r);
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
    ((f = r()),
      i(),
      t(),
      (p = `1852350085`),
      (m = s().refine((e) => e.trim().length > 0)),
      (h = c({ skill_markdown_by_id: a(s(), o()).optional() }).catch({
        skill_markdown_by_id: {},
      })));
  });
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides.js.map
