import { n as e } from "./rolldown-runtime.js";
import {
  Dt as t,
  Et as n,
  Rt as r,
  bt as i,
  gt as a,
  vt as o,
  yt as s,
  zt as c,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
async function l(e) {
  return a(`computer-use-app-approval-remove`, { params: { bundleIdentifier: e } });
}
async function u(e) {
  return (await a(`computer-use-sound-mode-write`, { params: { value: e } })).value;
}
async function d(e) {
  return (await a(`computer-use-background-auth-write`, { params: { enabled: e } })).enabled;
}
var f,
  p,
  m,
  h,
  g = e(() => {
    (c(),
      t(),
      i(),
      (f = s(r, `computer-use-app-approvals-visibility`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: n.FIVE_SECONDS,
      })),
      (p = s(r, `computer-use-app-approvals-read`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: n.ONE_MINUTE,
      })),
      (m = s(r, `computer-use-sound-mode-read`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        select: ({ value: e }) => e,
        staleTime: n.FIVE_SECONDS,
      })),
      (h = s(r, `computer-use-background-auth-read`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: n.FIVE_SECONDS,
      })),
      o(r, `chrome-extension-installed-read`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { extensionId: e },
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        staleTime: n.FIVE_SECONDS,
      })));
  });
export { g as a, u as c, m as i, f as n, l as o, h as r, d as s, p as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~sett~hteyajeh-oQ-75cQ4.js.map
