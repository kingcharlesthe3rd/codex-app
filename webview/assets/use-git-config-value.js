import { Z as e, a as t } from "./app-scope-CWE-zIhQ.js";
import { Hn as n } from "./thread-context-inputs.js";
import { n as r } from "./git-config-value-query.js";
var i = e();
function a(e, a, o, s, c, l) {
  let u = (0, i.c)(9),
    d = e ?? null,
    f;
  u[0] === l ? (f = u[1]) : ((f = n(l, null)), (u[0] = l), (u[1] = f));
  let p;
  return (
    u[2] !== a || u[3] !== o || u[4] !== c || u[5] !== s || u[6] !== d || u[7] !== f
      ? ((p = { cwd: d, hostConfig: a, key: o, operationSource: c, scope: s, ...f }),
        (u[2] = a),
        (u[3] = o),
        (u[4] = c),
        (u[5] = s),
        (u[6] = d),
        (u[7] = f),
        (u[8] = p))
      : (p = u[8]),
    t(r, p)
  );
}
export { a as t };
//# sourceMappingURL=use-git-config-value.js.map
