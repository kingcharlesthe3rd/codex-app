import { n as e } from "./rolldown-runtime.js";
import {
  _ as t,
  b as n,
  g as r,
  h as i,
  i as a,
  m as o,
  o as s,
  s as c,
  t as l,
  v as u,
  y as d,
} from "./chunk-91.js";
function f(e = t) {
  let r = u(n(e), c),
    i = u(d({ shared: r }), s, m);
  return (r.ServiceRegistry.register(i), { shared: r, Info: i });
}
var p,
  m,
  h = e(() => {
    (i(),
      r(),
      (p = class extends l {
        static {
          o(this, `InfoTokenBuilder`);
        }
        constructor() {
          super([`info`, `showInfo`]);
        }
      }),
      (m = {
        parser: {
          TokenBuilder: o(() => new p(), `TokenBuilder`),
          ValueConverter: o(() => new a(), `ValueConverter`),
        },
      }),
      o(f, `createInfoServices`));
  });
export { f as n, h as r, m as t };
//# sourceMappingURL=chunk-95.js.map
