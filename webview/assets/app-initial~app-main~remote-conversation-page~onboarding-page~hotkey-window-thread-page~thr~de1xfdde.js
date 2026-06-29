import { n as e } from "./rolldown-runtime.js";
import {
  Gs as t,
  Is as n,
  Ws as r,
  Ys as i,
  qs as a,
  ws as o,
  xs as s,
  zs as c,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  NS as l,
  zS as u,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
var d,
  f,
  p,
  m,
  h = e(() => {
    (s(),
      u(),
      (d = r({
        type: n(`review`),
        view: o([`last-turn`, `branch`, `unstaged`, `staged`]).optional(),
        path: t().min(1).optional(),
      })),
      (f = r({
        type: n(`review`),
        baseBranch: t()
          .min(1)
          .describe(
            `Git revision to compare with HEAD. Must resolve locally to a commit. Selects branch view.`,
          ),
        view: n(`branch`).optional(),
        path: t().min(1).optional(),
      })),
      (p = r({
        threadId: t()
          .min(1)
          .optional()
          .describe(
            `Visible thread whose Codex panel should receive the tab. Defaults to the calling thread, which must be visible in the targeted main window.`,
          ),
        target: a([
          r({ type: n(`file`), path: t().min(1), line: c().int().positive().optional() }),
          r({ type: n(`browser`), url: i().optional(), tabId: t().min(1).optional() }),
          r({ type: n(`terminal`), sessionId: t().min(1).optional() }),
          d,
          f,
        ]),
        placement: o([`right`, `bottom`]).optional(),
      })),
      (m = p.extend({ type: n(`windows.tabs.open`), windowId: l })));
  });
export { p as n, m as r, h as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~de1xfdde.js.map
