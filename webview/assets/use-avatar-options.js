import { n as e } from "./rolldown-runtime.js";
import {
  AB as t,
  IB as n,
  qV as r,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  a as i,
  o as a,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js";
import { n as o, r as s } from "./custom-avatars-query.js";
function c() {
  let e = (0, l.c)(8),
    { data: t, isError: r, isFetching: a, isLoading: s } = n(o),
    c = t?.avatarDirectory ?? null,
    u = t?.avatars,
    d;
  e[0] === u ? (d = e[1]) : ((d = i(u)), (e[0] = u), (e[1] = d));
  let f;
  return (
    e[2] !== r || e[3] !== a || e[4] !== s || e[5] !== c || e[6] !== d
      ? ((f = { avatarDirectory: c, avatarOptions: d, isError: r, isFetching: a, isLoading: s }),
        (e[2] = r),
        (e[3] = a),
        (e[4] = s),
        (e[5] = c),
        (e[6] = d),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
var l,
  u = e(() => {
    ((l = r()), t(), a(), s());
  });
export { c as n, u as t };
//# sourceMappingURL=use-avatar-options.js.map
