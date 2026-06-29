import { t as e } from "./rolldown-runtime.js";
import {
  JB as t,
  VB as n,
  XB as r,
  _r as i,
  _u as a,
  cV as o,
  nV as s,
  oV as c,
  tV as l,
  uV as u,
  wA as d,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
var f = e((e, t) => {
    var n = o(),
      i = r(),
      a = l(),
      s = n ? n.isConcatSpreadable : void 0;
    function c(e) {
      return a(e) || i(e) || !!(s && e && e[s]);
    }
    t.exports = c;
  }),
  p = e((e, t) => {
    var n = s(),
      r = f();
    function i(e, t, a, o, s) {
      var c = -1,
        l = e.length;
      for (a ||= r, s ||= []; ++c < l; ) {
        var u = e[c];
        t > 0 && a(u) ? (t > 1 ? i(u, t - 1, a, o, s) : n(s, u)) : o || (s[s.length] = u);
      }
      return s;
    }
    t.exports = i;
  }),
  m = e((e, t) => {
    function n(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    t.exports = n;
  }),
  h = e((e, t) => {
    var n = m(),
      r = Math.max;
    function i(e, t, i) {
      return (
        (t = r(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s); ++o < s; )
            c[o] = a[t + o];
          o = -1;
          for (var l = Array(t + 1); ++o < t; ) l[o] = a[o];
          return ((l[t] = i(c)), n(e, this, l));
        }
      );
    }
    t.exports = i;
  }),
  g = e((e, t) => {
    function n(e) {
      return function () {
        return e;
      };
    }
    t.exports = n;
  }),
  _ = e((e, t) => {
    var n = g(),
      r = i(),
      a = d();
    t.exports = r
      ? function (e, t) {
          return r(e, `toString`, { configurable: !0, enumerable: !1, value: n(t), writable: !0 });
        }
      : a;
  }),
  v = e((e, t) => {
    var n = 800,
      r = 16,
      i = Date.now;
    function a(e) {
      var t = 0,
        a = 0;
      return function () {
        var o = i(),
          s = r - (o - a);
        if (((a = o), s > 0)) {
          if (++t >= n) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    t.exports = a;
  }),
  y = e((e, t) => {
    var n = _();
    t.exports = v()(n);
  }),
  b = e((e, t) => {
    var n = d(),
      r = h(),
      i = y();
    function a(e, t) {
      return i(r(e, t, n), e + ``);
    }
    t.exports = a;
  }),
  x = e((e, r) => {
    var i = u(),
      a = n(),
      o = t(),
      s = c();
    function l(e, t, n) {
      if (!s(n)) return !1;
      var r = typeof t;
      return (r == `number` ? a(n) && o(t, n.length) : r == `string` && t in n) ? i(n[t], e) : !1;
    }
    r.exports = l;
  }),
  S = e((e, t) => {
    var n = p(),
      r = a(),
      i = b(),
      o = x();
    t.exports = i(function (e, t) {
      if (e == null) return [];
      var i = t.length;
      return (
        i > 1 && o(e, t[0], t[1]) ? (t = []) : i > 2 && o(t[0], t[1], t[2]) && (t = [t[0]]),
        r(e, n(t, 1), [])
      );
    });
  });
export { h as a, y as i, x as n, p as o, b as r, S as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~page~remote-conversation-page~pull-requests-page~iwrno211.js.map
