import { n as e } from "./rolldown-runtime.js";
import {
  GP as t,
  HP as n,
  MA as r,
  NA as i,
  RV as a,
  dI as o,
  iF as s,
  jV as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { Em as l, Tm as u } from "./app-initial~app-main~onboarding-page.js";
import {
  n as d,
  t as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  n as p,
  t as m,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import {
  a as h,
  i as g,
} from "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page.js";
import { n as _, r as v } from "./use-hotkey-window-detail-layout.js";
import { n as y, t as b } from "./thread-scroll-layout.js";
function x() {
  let e = (0, C.c)(4),
    n = S,
    r;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = {
        title: (0, w.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, w.jsx)(t, {
            id: `threadPage.newThread`,
            defaultMessage: `New chat`,
            description: `Header title for the home page`,
          }),
        }),
        mainWindowPath: `/`,
        canCollapseToHome: !1,
      }),
      (e[0] = r))
    : (r = e[0]),
    v(r));
  let i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, w.jsx)(f, { showWorkspaceDropdownInFooter: !1, onLocalConversationCreated: n })),
      (e[1] = i))
    : (i = e[1]);
  let a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, w.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, w.jsx)(u, { className: `h-12 w-12 text-token-foreground/20` }),
      })),
      (e[2] = a))
    : (a = e[2]);
  let o;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, w.jsx)(g, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, w.jsx)(b, {
            footer: i,
            children: (0, w.jsx)(`div`, {
              className: `flex h-full items-center justify-center px-panel`,
              children: (0, w.jsxs)(`div`, {
                className: `flex flex-col items-center gap-3 text-center`,
                children: [
                  a,
                  (0, w.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-1`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `heading-xl mt-2 font-normal text-token-foreground select-none`,
                        children: (0, w.jsx)(t, {
                          id: `home.hero.letsBuild`,
                          defaultMessage: `Let’s build`,
                          description: `Label above the workspace name on the electron home page`,
                        }),
                      }),
                      (0, w.jsx)(m, { variant: `hero` }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })),
        (e[3] = o))
      : (o = e[3]),
    o
  );
}
function S(e) {
  r.hotkeyWindowHotkeys?.open({ path: o(e) });
}
var C, w;
e(() => {
  ((C = a()), s(), n(), d(), p(), l(), i(), h(), y(), _(), (w = c()));
})();
export { x as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page.js.map
