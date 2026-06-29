const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index.umd.js", "./rolldown-runtime.js"]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AL as n,
  hF as r,
  jL as i,
  pF as a,
  vF as o,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function s(e) {
  return a(this, void 0, void 0, function () {
    var i;
    return r(this, function (r) {
      switch (r.label) {
        case 0:
          return [
            4,
            n(
              () => import(`./index.umd.js`).then((e) => t(e.default)),
              __vite__mapDeps([0, 1]),
              import.meta.url,
            ),
          ];
        case 1:
          return ((i = r.sent()), (e._plugins = i), [2]);
      }
    });
  });
}
e(() => {
  (o(), i());
})();
export { s as loadLegacyVideoPlugins };
//# sourceMappingURL=legacy-video-plugins.js.map
