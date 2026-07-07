import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Rt as r,
  Tl as i,
  Xs as a,
  tc as o,
  zt as s,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  $h as c,
  Bl as l,
  Fl as u,
  am as d,
} from "./app-initial~app-main~new-thread-panel-page.js";
function f(e, t) {
  let n = (0, p.c)(5),
    i = t === void 0 ? !0 : t,
    a = o(r),
    s = (0, m.useRef)(null),
    c,
    u;
  (n[0] !== i || n[1] !== e || n[2] !== a
    ? ((c = () => {
        !i ||
          s.current === e ||
          ((s.current = e), l(a, e, d.CODEX_ONBOARDING_WIZARD_ACTION_VIEWED));
      }),
      (u = [i, e, a]),
      (n[0] = i),
      (n[1] = e),
      (n[2] = a),
      (n[3] = c),
      (n[4] = u))
    : ((c = n[3]), (u = n[4])),
    (0, m.useEffect)(c, u));
}
var p,
  m,
  h = e(() => {
    ((p = i()), c(), a(), (m = t(n(), 1)), u(), s());
  });
export { f as n, h as t };
//# sourceMappingURL=setup-codex-wizard-step-view.js.map
