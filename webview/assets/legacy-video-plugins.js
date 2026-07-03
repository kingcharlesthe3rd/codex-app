const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index.umd.js", "./rolldown-runtime.js"]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime.js";
import {
  KW as n,
  UW as r,
  VW as i,
  XK as a,
  YK as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
function s(e) {
  return i(this, void 0, void 0, function () {
    var n;
    return r(this, function (r) {
      switch (r.label) {
        case 0:
          return [
            4,
            o(
              () => import(`./index.umd.js`).then((e) => t(e.default)),
              __vite__mapDeps([0, 1]),
              import.meta.url,
            ),
          ];
        case 1:
          return ((n = r.sent()), (e._plugins = n), [2]);
      }
    });
  });
}
e(() => {
  (n(), a());
})();
export { s as loadLegacyVideoPlugins };
//# sourceMappingURL=legacy-video-plugins.js.map
