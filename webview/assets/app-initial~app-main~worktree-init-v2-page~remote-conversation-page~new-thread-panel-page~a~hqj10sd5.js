import { n as e, s as t } from "./rolldown-runtime.js";
import {
  kl as n,
  xl as r,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  am as i,
  im as a,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
function o({
  header: e,
  banner: t,
  children: n,
  className: r,
  bodyClassName: i,
  containerRef: o,
  tabIndex: l,
  ...u
}) {
  return (0, c.jsxs)(`div`, {
    ref: (0, s.useCallback)(
      (e) => {
        if (typeof o == `function`) {
          o(e);
          return;
        }
        o != null && (o.current = e);
      },
      [o],
    ),
    className: a(`relative flex h-full flex-col`, r),
    tabIndex: l,
    ...u,
    children: [
      (0, c.jsx)(`div`, { className: `sticky top-0 z-10`, children: e }),
      (0, c.jsx)(`div`, {
        className: a(`flex min-h-0 flex-1 flex-col`, i),
        children: (0, c.jsxs)(`div`, {
          className: `relative mx-auto flex min-h-0 w-full flex-1 flex-col`,
          children: [t, (0, c.jsx)(`div`, { className: `min-h-0 flex-1`, children: n })],
        }),
      }),
    ],
  });
}
var s,
  c,
  l,
  u,
  d = e(() => {
    (i(),
      (s = t(n(), 1)),
      (c = r()),
      (l = `px-toolbar`),
      (u = a(`mx-auto w-full max-w-(--thread-content-max-width)`, l)));
  });
export { o as n, d as r, u as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5.js.map
