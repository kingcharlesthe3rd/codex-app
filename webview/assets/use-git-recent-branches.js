import { n as e } from "./rolldown-runtime.js";
import { gc as t } from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w.js";
import {
  qn as n,
  zn as r,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d.js";
function i(e, t, r, i) {
  let s = (0, o.c)(10),
    c;
  s[0] === i ? (c = s[1]) : ((c = i ?? {}), (s[0] = i), (s[1] = c));
  let l, u;
  s[2] === c
    ? ((l = s[3]), (u = s[4]))
    : (({ limit: u, ...l } = c), (s[2] = c), (s[3] = l), (s[4] = u));
  let d = u === void 0 ? 100 : u,
    f;
  s[5] !== d || s[6] !== r
    ? ((f = (e) => {
        let { root: t } = e;
        return { operationSource: r, root: t, limit: d };
      }),
      (s[5] = d),
      (s[6] = r),
      (s[7] = f))
    : (f = s[7]);
  let p;
  return (
    s[8] === l ? (p = s[9]) : ((p = { select: a, ...l }), (s[8] = l), (s[9] = p)),
    n(e, t, `recent-branches`, f, r, p)
  );
}
function a(e) {
  return e.branches;
}
var o,
  s = e(() => {
    ((o = t()), r());
  });
export { i as n, s as t };
//# sourceMappingURL=use-git-recent-branches.js.map
