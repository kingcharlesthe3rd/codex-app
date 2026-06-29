import { n as e } from "./rolldown-runtime.js";
import {
  D as t,
  L as n,
  O as r,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp.js";
import {
  Ao as i,
  Fo as a,
  Ps as o,
  zs as s,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk.js";
import { $y as c, Qy as l } from "./app-initial~app-main~onboarding-page.js";
import {
  _ as u,
  g as d,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq.js";
import {
  Ac as f,
  Xn as p,
  Yn as m,
  kc as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { jt as g } from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  _,
  g as v,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
function y() {
  let e = (0, x.c)(3),
    t = a(d),
    n = s(),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = (e) => {
          b(t, n, e);
        }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function b(e, t, n) {
  c(e, t);
  let {
    activeProject: i,
    prefillAeonStartTarget: a = null,
    prefillComposerMode: o = null,
    startInSidebar: s,
    ...l
  } = n ?? {};
  i !== void 0 && (e.set(v, null), p(e, i));
  let u = Date.now(),
    d = { ...l, focusComposerNonce: u, ...(a == null ? {} : { prefillAeonStartTarget: a }) };
  (f(e, u, o), r.dispatchHostMessage({ type: `navigate-to-route`, path: `/`, state: d }));
}
var x,
  S = e(() => {
    ((x = n()), o(), i(), h(), _(), l(), g(), t(), m(), u());
  });
export { b as n, y as r, S as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf.js.map
