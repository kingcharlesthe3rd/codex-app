import { n as e } from "./rolldown-runtime.js";
import {
  BV as t,
  OI as n,
  UA as r,
  WA as i,
  bF as a,
  iF as o,
  qV as s,
  sF as c,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import { Au as l, ju as u } from "./app-initial~app-main~onboarding-page~profile.js";
import {
  n as d,
  t as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  n as p,
  t as m,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D.js";
import {
  n as h,
  r as g,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5.js";
import { n as _, r as v } from "./use-hotkey-window-detail-layout.js";
import { n as y, t as b } from "./thread-scroll-layout.js";
function x() {
  let e = (0, C.c)(4),
    t = S,
    n;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = {
        title: (0, w.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, w.jsx)(c, {
            id: `threadPage.newThread`,
            defaultMessage: `New chat`,
            description: `Header title for the home page`,
          }),
        }),
        mainWindowPath: `/`,
        canCollapseToHome: !1,
      }),
      (e[0] = n))
    : (n = e[0]),
    v(n));
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, w.jsx)(f, { showWorkspaceDropdownInFooter: !1, onLocalConversationCreated: t })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, w.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, w.jsx)(l, { className: `h-12 w-12 text-token-foreground/20` }),
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, w.jsx)(h, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, w.jsx)(b, {
            footer: r,
            children: (0, w.jsx)(`div`, {
              className: `flex h-full items-center justify-center px-panel`,
              children: (0, w.jsxs)(`div`, {
                className: `flex flex-col items-center gap-3 text-center`,
                children: [
                  i,
                  (0, w.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-1`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `heading-xl mt-2 font-normal text-token-foreground select-none`,
                        children: (0, w.jsx)(c, {
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
        (e[3] = a))
      : (a = e[3]),
    a
  );
}
function S(e) {
  r.hotkeyWindowHotkeys?.open({ path: n(e) });
}
var C, w;
e(() => {
  ((C = s()), a(), o(), d(), p(), u(), i(), g(), y(), _(), (w = t()));
})();
export { x as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page.js.map
