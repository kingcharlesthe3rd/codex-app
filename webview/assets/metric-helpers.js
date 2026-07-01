import { n as e } from "./rolldown-runtime.js";
import {
  $P as t,
  QP as n,
  XP as r,
  ZP as i,
  nF as a,
  tF as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { t as s, u as c } from "./esm.js";
import { f as l, p as u } from "./load-script.js";
import { c as d, s as f } from "./middleware-1.js";
function p() {
  return u() ? window.navigator.onLine : !0;
}
function m() {
  return !p();
}
var h = e(() => {
    l();
  }),
  g = e(() => {
    s();
  });
function _(e) {
  var t = C.getItem(e);
  return (t ? JSON.parse(t) : []).map(function (e) {
    return new f(e.event, e.id);
  });
}
function v(e, t) {
  var n = _(e),
    i = o(o([], t, !0), n, !0).reduce(function (e, t) {
      var n;
      return r(r({}, e), ((n = {}), (n[t.id] = t), n));
    }, {});
  C.setItem(e, JSON.stringify(Object.values(i)));
}
function y(e) {
  var t = C.getItem(e);
  return t ? JSON.parse(t) : {};
}
function b(e, t) {
  var n = y(e);
  C.setItem(e, JSON.stringify(r(r({}, n), t)));
}
function x(e) {
  C.removeItem(e);
}
function S(e, t, n) {
  n === void 0 && (n = 0);
  var r = 50,
    i = `persisted-queue:v1:${e}:lock`,
    a = function (e) {
      return new Date().getTime() > e;
    },
    o = C.getItem(i),
    s = o ? JSON.parse(o) : null,
    c = s === null || a(s);
  if (c) {
    (C.setItem(i, JSON.stringify(w() + r)), t(), C.removeItem(i));
    return;
  }
  !c && n < 3
    ? setTimeout(function () {
        S(e, t, n + 1);
      }, r)
    : console.error(`Unable to retrieve lock`);
}
var C,
  w,
  T,
  E = e(() => {
    (a(),
      g(),
      d(),
      l(),
      (C = { getItem: function () {}, setItem: function () {}, removeItem: function () {} }));
    try {
      C = u() && window.localStorage ? window.localStorage : C;
    } catch (e) {
      console.warn(`Unable to access localStorage`, e);
    }
    ((w = function () {
      return new Date().getTime();
    }),
      (T = (function (e) {
        n(t, e);
        function t(t, n) {
          var i = e.call(this, t, []) || this,
            a = `persisted-queue:v1:${n}:items`,
            s = `persisted-queue:v1:${n}:seen`,
            c = [],
            l = {};
          return (
            S(n, function () {
              try {
                ((c = _(a)),
                  (l = y(s)),
                  x(a),
                  x(s),
                  (i.queue = o(o([], c, !0), i.queue, !0)),
                  (i.seen = r(r({}, l), i.seen)));
              } catch (e) {
                console.error(e);
              }
            }),
            window.addEventListener(`pagehide`, function () {
              if (i.todo > 0) {
                var e = o(o([], i.queue, !0), i.future, !0);
                try {
                  S(n, function () {
                    (v(a, e), b(s, i.seen));
                  });
                } catch (e) {
                  console.error(e);
                }
              }
            }),
            i
          );
        }
        return t;
      })(c)));
  }),
  D,
  O = e(() => {
    (a(),
      (D = function (e, n) {
        return i(void 0, void 0, void 0, function () {
          var r;
          return t(this, function (a) {
            return (
              (r = function (a) {
                return i(void 0, void 0, void 0, function () {
                  var i;
                  return t(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return e(a) ? ((i = r), [4, n()]) : [3, 2];
                      case 1:
                        return [2, i.apply(void 0, [t.sent()])];
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              [2, r(void 0)]
            );
          });
        });
      }));
  });
function k(e, t) {
  var n = Object.entries(t.integrations ?? {}).reduce(function (e, t) {
    var n,
      i,
      a = t[0],
      o = t[1];
    return typeof o == `object`
      ? r(r({}, e), ((n = {}), (n[a] = o), n))
      : r(r({}, e), ((i = {}), (i[a] = {}), i));
  }, {});
  return Object.entries(e.integrations).reduce(function (e, t) {
    var i,
      a = t[0],
      o = t[1];
    return r(r({}, e), ((i = {}), (i[a] = r(r({}, o), n[a])), i));
  }, {});
}
var A = e(() => {
  a();
});
function j(e, t) {
  var n = t.methodName,
    r = t.integrationName,
    i = t.type,
    a = t.didError,
    o = a === void 0 ? !1 : a;
  e.stats.increment(`analytics_js.integration.invoke${o ? `.error` : ``}`, 1, [
    `method:${n}`,
    `integration_name:${r}`,
    `type:${i}`,
  ]);
}
var M = e(() => {});
export {
  O as a,
  E as c,
  m as d,
  p as f,
  k as i,
  g as l,
  j as n,
  D as o,
  A as r,
  T as s,
  M as t,
  h as u,
};
//# sourceMappingURL=metric-helpers.js.map
