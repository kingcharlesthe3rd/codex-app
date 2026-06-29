import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { Z as n, o as r, t as i } from "./app-scope-CWE-zIhQ.js";
import { hi as a } from "./thread-context-inputs.js";
import { ln as o } from "./product-logger.js";
var s = n(),
  c = e(t(), 1);
function l(e, t) {
  let n = (0, s.c)(5),
    l = t === void 0 ? !0 : t,
    u = r(i),
    d = (0, c.useRef)(null),
    f,
    p;
  (n[0] !== l || n[1] !== e || n[2] !== u
    ? ((f = () => {
        !l ||
          d.current === e ||
          ((d.current = e), a(u, e, o.CODEX_ONBOARDING_WIZARD_ACTION_VIEWED));
      }),
      (p = [l, e, u]),
      (n[0] = l),
      (n[1] = e),
      (n[2] = u),
      (n[3] = f),
      (n[4] = p))
    : ((f = n[3]), (p = n[4])),
    (0, c.useEffect)(f, p));
}
export { l as t };
//# sourceMappingURL=setup-codex-wizard-step-view.js.map
