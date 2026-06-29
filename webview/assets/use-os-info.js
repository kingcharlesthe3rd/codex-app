import { R as e, s as t } from "./app-scope.js";
import { r as n } from "./platform.js";
var r = e();
function i() {
  let e = (0, r.c)(3),
    i = t(n),
    a;
  return (
    e[0] !== i.data || e[1] !== i.isLoading
      ? ((a = { data: i.data, isLoading: i.isLoading }),
        (e[0] = i.data),
        (e[1] = i.isLoading),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
export { i as t };
//# sourceMappingURL=use-os-info.js.map
