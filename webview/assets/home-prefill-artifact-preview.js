import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Tl as r,
  Xs as i,
  tc as a,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Kd as o, qd as s } from "./app-initial~app-main~onboarding-page.js";
import { as as c, ts as l } from "./app-initial~app-main~new-thread-panel-page.js";
function u(e) {
  let t = (0, f.c)(4),
    { hostId: n, locationKey: r, previewFiles: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = { hostId: n, locationKey: r, previewFiles: i }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    d(a),
    null
  );
}
function d(e) {
  let t = (0, f.c)(6),
    { hostId: n, locationKey: r, previewFiles: i } = e,
    o = a(l),
    c = (0, p.useRef)(null),
    u,
    d;
  (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o
    ? ((u = () => {
        if (!(i == null || i.length === 0 || c.current === r)) {
          c.current = r;
          for (let e of i) {
            let t = e.fsPath || e.path;
            t == null || t.length === 0 || s(o, t, { hostId: n, title: e.label });
          }
        }
      }),
      (d = [n, r, i, o]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = u),
      (t[5] = d))
    : ((u = t[4]), (d = t[5])),
    (0, p.useEffect)(u, d));
}
var f, p;
e(() => {
  ((f = r()), i(), (p = t(n(), 1)), o(), c());
})();
export { u as HomePrefillArtifactPreview };
//# sourceMappingURL=home-prefill-artifact-preview.js.map
