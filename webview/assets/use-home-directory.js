import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  ac as n,
  tc as r,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ji as i,
  Xi as a,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function o(e) {
  let t = (0, c.c)(2),
    r;
  return (
    t[0] === e ? (r = t[1]) : ((r = e == null ? void 0 : { hostId: e }), (t[0] = e), (t[1] = r)),
    n(i, r)
  );
}
function s(e) {
  return o(e).data?.homeDirectory;
}
var c,
  l = e(() => {
    ((c = t()), r(), a());
  });
export { s as n, o as r, l as t };
//# sourceMappingURL=use-home-directory.js.map
