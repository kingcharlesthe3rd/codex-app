import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  kl as r,
  xt as i,
  yt as a,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
function o(e, t) {
  if (e !== `electron`) return `native`;
  switch (t) {
    case `win32`:
    case `linux`:
      return `application-menu`;
    case `darwin`:
    case `unknown`:
      return `native`;
  }
}
function s() {
  return document.documentElement.dataset.codexWindowChrome === `application-menu`;
}
var c = e(() => {});
function l(e) {
  let t = v.exec(e);
  if (!t) return _.mac.modern;
  let n = Number.parseInt(t[1] ?? ``, 10),
    r = Number.parseInt(t[2] ?? ``, 10);
  return Number.isNaN(n) || Number.isNaN(r)
    ? _.mac.modern
    : n === 10 && r <= 15
      ? _.mac.legacy
      : _.mac.modern;
}
function u() {
  if (typeof window > `u` || typeof navigator > `u`) return null;
  let e = navigator.windowControlsOverlay;
  if (!e?.visible) return null;
  let t = e.getTitlebarAreaRect();
  return {
    left: Math.max(0, Math.round(t.x)),
    right: Math.max(0, Math.round(window.innerWidth - (t.x + t.width))),
  };
}
function d(e, t) {
  if (e) return _.default;
  if (s()) return t ?? _.applicationMenu;
  if (typeof navigator > `u`) return _.default;
  let n = navigator,
    r = (n.userAgent ?? ``).toLowerCase(),
    i = n.userAgentData?.platform?.toLowerCase() ?? n.platform?.toLowerCase() ?? r;
  return i.includes(`darwin`) ||
    i.includes(`mac`) ||
    r.includes(`mac os x`) ||
    r.includes(`macintosh`)
    ? l(r)
    : i.includes(`win`) || r.includes(`windows`) || i.includes(`linux`)
      ? (t ?? _.applicationMenu)
      : _.default;
}
function f() {
  let e = (0, m.c)(9),
    [t, n] = (0, h.useState)(!1),
    [r, a] = (0, h.useState)(p),
    o,
    s;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (e) => {
        n(e.isFullScreen);
      }),
      (s = []),
      (e[0] = o),
      (e[1] = s))
    : ((o = e[0]), (s = e[1])),
    i(`window-fullscreen-changed`, o, s));
  let c, l;
  (e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        if (typeof window > `u`) {
          a(null);
          return;
        }
        let e = navigator.windowControlsOverlay;
        if (!e) {
          a(null);
          return;
        }
        let t = () => {
          a(u());
        };
        return (
          t(),
          e.addEventListener(`geometrychange`, t),
          window.addEventListener(`resize`, t),
          () => {
            (e.removeEventListener(`geometrychange`, t), window.removeEventListener(`resize`, t));
          }
        );
      }),
      (l = []),
      (e[2] = c),
      (e[3] = l))
    : ((c = e[2]), (l = e[3])),
    (0, h.useEffect)(c, l));
  let f, g;
  (e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => {
        let e = window.matchMedia(`(display-mode: fullscreen)`);
        n(e.matches);
        let t = (e) => {
          n(e.matches);
        };
        return (
          e.addEventListener(`change`, t),
          () => {
            e.removeEventListener(`change`, t);
          }
        );
      }),
      (g = []),
      (e[4] = f),
      (e[5] = g))
    : ((f = e[4]), (g = e[5])),
    (0, h.useEffect)(f, g));
  let _;
  return (
    e[6] !== t || e[7] !== r ? ((_ = d(t, r)), (e[6] = t), (e[7] = r), (e[8] = _)) : (_ = e[8]), _
  );
}
function p() {
  return u();
}
var m,
  h,
  g,
  _,
  v,
  y = e(() => {
    ((m = n()),
      (h = t(r(), 1)),
      c(),
      a(),
      (g = 16),
      (_ = Object.freeze({
        default: Object.freeze({ left: 0, right: 0 }),
        mac: Object.freeze({
          legacy: Object.freeze({ left: 66 + g, right: 0 }),
          modern: Object.freeze({ left: 76 + g, right: 0 }),
        }),
        applicationMenu: Object.freeze({ left: 0, right: 0 }),
      })),
      (v = /mac os x (\d+)[_.](\d+)/i));
  });
export { s as a, c as i, f as n, o as r, y as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~iaodc20q.js.map
