import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { o as n, t as r, z as i } from "./app-scope.js";
import { Qi as a } from "./app-server-manager-signals.js";
import { tn as o } from "./product-logger.js";
var s = i(),
  c = e(t(), 1);
function l(e, t) {
  let i = (0, s.c)(5),
    l = t === void 0 ? !0 : t,
    u = n(r),
    d = (0, c.useRef)(null),
    f,
    p;
  (i[0] !== l || i[1] !== e || i[2] !== u
    ? ((f = () => {
        !l ||
          d.current === e ||
          ((d.current = e), a(u, e, o.CODEX_ONBOARDING_WIZARD_ACTION_VIEWED));
      }),
      (p = [l, e, u]),
      (i[0] = l),
      (i[1] = e),
      (i[2] = u),
      (i[3] = f),
      (i[4] = p))
    : ((f = i[3]), (p = i[4])),
    (0, c.useEffect)(f, p));
}
export { l as t };
//# sourceMappingURL=setup-codex-wizard-step-view.js.map
