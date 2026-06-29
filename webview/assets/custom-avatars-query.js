import { n as e } from "./rolldown-runtime.js";
import {
  Ht as t,
  Ut as n,
  Xc as r,
  Yc as i,
  _t as a,
  gt as o,
  tc as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  bS as c,
  yS as l,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
var u,
  d,
  f,
  p = e(() => {
    (s(),
      c(),
      n(),
      a(),
      (u = [`custom-avatars`]),
      (d = r(t, () => ({
        queryKey: u,
        queryFn: () => l.customAvatars.load(),
        enabled: !0,
        networkMode: `always`,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        staleTime: o.INFINITE,
      }))),
      (f = i(t, (e, { get: t, scope: n }) => ({
        queryKey: [...u, `selected`, e],
        queryFn: async () => (
          await n.query.invalidate(d, { exact: !0, refetchType: `none` }),
          n.query.fetch(d)
        ),
        enabled: e.startsWith(`custom:`) && t(d).data?.avatars.some(({ id: t }) => t === e) !== !0,
        gcTime: 0,
        networkMode: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: o.INFINITE,
      }))));
  });
export { f as i, d as n, p as r, u as t };
//# sourceMappingURL=custom-avatars-query.js.map
