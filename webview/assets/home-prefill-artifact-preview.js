import { n as e, s as t } from "./rolldown-runtime.js";
import {
  C_ as n,
  D_ as r,
  RV as i,
  TB as a,
  bB as o,
  zV as s,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { Cf as c, wf as l } from "./app-initial~app-main~onboarding-page.js";
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
    { hostId: r, locationKey: i, previewFiles: o } = e,
    s = a(n),
    c = (0, p.useRef)(null),
    u,
    d;
  (t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s
    ? ((u = () => {
        if (!(o == null || o.length === 0 || c.current === i)) {
          c.current = i;
          for (let e of o) {
            let t = e.fsPath || e.path;
            t == null || t.length === 0 || l(s, t, { hostId: r, title: e.label });
          }
        }
      }),
      (d = [r, i, o, s]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s),
      (t[4] = u),
      (t[5] = d))
    : ((u = t[4]), (d = t[5])),
    (0, p.useEffect)(u, d));
}
var f, p;
e(() => {
  ((f = i()), o(), (p = t(s(), 1)), c(), r());
})();
export { u as HomePrefillArtifactPreview };
//# sourceMappingURL=home-prefill-artifact-preview.js.map
