import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Tl as r,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Xy as i, Yy as a } from "./app-initial~app-main~new-thread-panel-page.js";
function o() {
  let e = (0, l.c)(1),
    t;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = []), (e[0] = t)) : (t = e[0]),
    (0, u.useEffect)(s, t));
}
function s() {
  let e = c;
  return (
    window.addEventListener(`keydown`, e),
    () => {
      window.removeEventListener(`keydown`, e);
    }
  );
}
function c(e) {
  e.key !== `Escape` ||
    e.defaultPrevented ||
    e.metaKey ||
    e.ctrlKey ||
    e.altKey ||
    e.shiftKey ||
    (e.preventDefault(), e.stopPropagation(), a.hotkeyWindowHotkeys?.dismiss());
}
var l,
  u,
  d = e(() => {
    ((l = r()), (u = t(n(), 1)), i());
  });
export { o as n, d as t };
//# sourceMappingURL=use-hotkey-window-dismiss-on-escape-DD3P--op.js.map
