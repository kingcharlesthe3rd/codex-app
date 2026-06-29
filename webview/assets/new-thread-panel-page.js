import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  xl as n,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  am as r,
  im as i,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Kl as a,
  Zl as o,
  aw as s,
  uw as c,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { bt as l, yt as u } from "./app-initial~app-main~automations-page.js";
import {
  n as d,
  t as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  r as p,
  t as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5.js";
import { n as h, t as g } from "./home-announcements-2.js";
function _() {
  let e = (0, v.c)(10),
    t = c();
  {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, y.jsx)(o, { to: `/`, replace: !0 })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let n;
  e[1] === t
    ? (n = e[2])
    : ((n = t.formatMessage({
        id: `homePage.mainContent`,
        defaultMessage: `Main content`,
        description: `Main landmark label for the home page`,
      })),
      (e[1] = t),
      (e[2] = n));
  let r;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, y.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-3xl flex-col gap-3 px-panel`,
        children: (0, y.jsx)(`div`, { className: `flex-1` }),
      })),
      (e[3] = r))
    : (r = e[3]);
  let a;
  e[4] === n
    ? (a = e[5])
    : ((a = (0, y.jsx)(`div`, {
        className: `[container-type:size] relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden [container-name:home-main-content]`,
        role: `main`,
        "aria-label": n,
        children: r,
      })),
      (e[4] = n),
      (e[5] = a));
  let s;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = i(m, `z-10 -mt-[var(--thread-footer-overlap)] flex flex-col gap-2 pb-2`)), (e[6] = s))
    : (s = e[6]);
  let l;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, y.jsxs)(`div`, {
        className: s,
        children: [
          (0, y.jsx)(`div`, {
            className: `home-banners mt-2 flex flex-col gap-2 empty:hidden`,
            children: (0, y.jsx)(g, {}),
          }),
          (0, y.jsx)(f, { className: `electron:hidden` }),
        ],
      })),
      (e[7] = l))
    : (l = e[7]);
  let d;
  return (
    e[8] === a
      ? (d = e[9])
      : ((d = (0, y.jsx)(u, {
          children: (0, y.jsx)(`div`, {
            className: `flex h-full flex-col`,
            "data-vscode-context": `{"chatgpt.supportsNewChatMenu": true}`,
            tabIndex: 0,
            children: (0, y.jsxs)(`div`, {
              className: `relative flex h-full flex-col`,
              children: [a, l],
            }),
          }),
        })),
        (e[8] = a),
        (e[9] = d)),
    d
  );
}
var v, y;
e(() => {
  ((v = t()), r(), s(), a(), d(), h(), l(), p(), (y = n()));
})();
export { _ as NewThreadPanelPage };
//# sourceMappingURL=new-thread-panel-page.js.map
