const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index.umd.js", "./rolldown-runtime.js"]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime.js";
import {
  hi as n,
  mi as r,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Ax as i, Nx as a, Ox as o } from "./app-initial~app-main~new-thread-panel-page.js";
function s(e) {
  return o(this, void 0, void 0, function () {
    var n;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return [
            4,
            r(
              () => import(`./index.umd.js`).then((e) => t(e.default)),
              __vite__mapDeps([0, 1]),
              import.meta.url,
            ),
          ];
        case 1:
          return ((n = i.sent()), (e._plugins = n), [2]);
      }
    });
  });
}
e(() => {
  (a(), n());
})();
export { s as loadLegacyVideoPlugins };
//# sourceMappingURL=legacy-video-plugins.js.map
