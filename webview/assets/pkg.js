const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./auto-track.js",
      "./rolldown-runtime.js",
      "./esm.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.css",
      "./middleware.js",
      "./middleware-1.js",
      "./query-string.js",
      "./gracefulDecodeURIComponent.js",
      "./routing-middleware.js",
      "./ajs-destination.js",
      "./metric-helpers.js",
      "./load-script.js",
      "./is-plan-event-enabled.js",
      "./legacy-video-plugins.js",
      "./schema-filter-Q.js",
      "./remote-middleware.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime.js";
import {
  $P as t,
  QP as n,
  XP as r,
  ZP as i,
  eF as a,
  fL as o,
  nF as s,
  pL as c,
  tF as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  _ as u,
  a as d,
  c as f,
  d as p,
  f as m,
  g as h,
  h as g,
  i as _,
  l as v,
  n as y,
  p as b,
  r as x,
  t as S,
  u as C,
  v as w,
  y as T,
} from "./esm.js";
import { n as ee, t as E } from "./gracefulDecodeURIComponent.js";
import {
  c as te,
  d as ne,
  i as re,
  l as D,
  n as ie,
  o as ae,
  s as oe,
  t as se,
  u as ce,
} from "./load-script.js";
import {
  a as le,
  c as ue,
  d as O,
  i as de,
  l as fe,
  n as k,
  o as pe,
  r as me,
  s as he,
  t as ge,
  u as A,
} from "./metric-helpers.js";
import {
  _ as _e,
  a as ve,
  b as ye,
  c as j,
  d as be,
  f as xe,
  g as Se,
  h as Ce,
  i as we,
  l as Te,
  m as Ee,
  n as De,
  p as Oe,
  s as M,
  t as ke,
  u as Ae,
  v as N,
  y as je,
} from "./middleware-1.js";
function Me(e, t, n, r) {
  var i = [e, t, n, r],
    a = w(e) ? e.event : e;
  if (!a || !T(a)) throw Error(`Event missing`);
  var o = w(e) ? (e.properties ?? {}) : w(t) ? t : {},
    s = {};
  (h(n) || (s = n ?? {}), w(e) && !h(t) && (s = t ?? {}));
  var c = i.find(h);
  return [a, o, s, c];
}
function Ne(e, t, n, r, i) {
  var a,
    o,
    s = null,
    c = null,
    l = [e, t, n, r, i],
    u = l.filter(T);
  u.length === 1
    ? T(l[1])
      ? ((c = l[1]), (s = null))
      : ((c = u[0]), (s = null))
    : u.length === 2 &&
      (typeof l[0] == `string` && (s = l[0]), typeof l[1] == `string` && (c = l[1]));
  var d = l.find(h),
    f = l.filter(w);
  return (
    f.length === 1
      ? w(l[2])
        ? ((o = {}), (a = l[2]))
        : w(l[3])
          ? ((a = {}), (o = l[3]))
          : ((a = f[0]), (o = {}))
      : f.length === 2 && ((a = f[0]), (o = f[1])),
    [s, c, (a ??= {}), (o ??= {}), d]
  );
}
function Pe(e, t, n, r) {
  (u(e) && (e = e.toString()), u(t) && (t = t.toString()));
  var i = [e, t, n, r],
    a = i.filter(T),
    o = a[0],
    s = o === void 0 ? e : o,
    c = a[1],
    l = c === void 0 ? null : c,
    d = i.filter(w)[0];
  return [s, l, d === void 0 ? {} : d, i.find(h)];
}
var P,
  Fe = e(() => {
    (S(),
      (P = function (e) {
        return function () {
          for (
            var t = [...arguments],
              n = {},
              r = [`callback`, `options`, `traits`, `id`],
              i = 0,
              a = t;
            i < a.length;
            i++
          ) {
            var o = a[i],
              s = r.pop();
            if (s === `id`) {
              if (T(o) || u(o)) {
                n.id = o.toString();
                continue;
              }
              if (o == null) continue;
              s = r.pop();
            }
            if (((s === `traits` || s === `options`) && (o == null || w(o)) && (n[s] = o), h(o))) {
              n.callback = o;
              break;
            }
          }
          return [n.id ?? e.id(), n.traits ?? {}, n.options ?? {}, n.callback];
        };
      }));
  });
function Ie(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase() === `object`;
}
function Le(e) {
  if (!Ie(e) || e.__t !== `bpc`) return !1;
  for (var t in e) if (!ze.includes(t)) return !1;
  return !0;
}
var Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke = e(() => {
    ((Re = function (e, t, n, r, i, a) {
      return { __t: `bpc`, c: t, p: r, u: e, s: n, t: i, r: a };
    }),
      (ze = Object.keys(Re(``, ``, ``, ``, ``, ``))),
      (Be = function (e, t) {
        return e.indexOf(`?`) > -1 ? e : e + t;
      }),
      (Ve = function (e) {
        var t = e.indexOf(`#`);
        return t === -1 ? e : e.slice(0, t);
      }),
      (He = function (e) {
        try {
          return new URL(e).pathname;
        } catch {
          return e[0] === `/` ? e : `/` + e;
        }
      }),
      (Ue = function (e) {
        var t = e.c,
          n = e.p,
          r = e.s,
          i = e.u,
          a = e.r,
          o = e.t;
        return { path: t ? He(t) : n, referrer: a, search: r, title: o, url: t ? Be(t, r) : Ve(i) };
      }),
      (We = function () {
        var e = document.querySelector(`link[rel='canonical']`);
        return Re(
          location.href,
          (e && e.getAttribute(`href`)) || void 0,
          location.search,
          location.pathname,
          document.title,
          document.referrer,
        );
      }),
      (Ge = function () {
        return Ue(We());
      }));
  });
function qe(e, t) {
  return Object.assign.apply(
    Object,
    l(
      [{}],
      t.map(function (t) {
        var n;
        if (e && Object.prototype.hasOwnProperty.call(e, t)) return ((n = {}), (n[t] = e[t]), n);
      }),
      !1,
    ),
  );
}
var Je = e(() => {
    s();
  }),
  F,
  Ye = e(() => {
    (s(),
      Je(),
      Ke(),
      (F = function (e, t) {
        t === void 0 && (t = Ge());
        var n = e.context,
          i;
        (e.type === `page` &&
          ((i = e.properties && qe(e.properties, Object.keys(t))),
          (e.properties = r(r(r({}, t), e.properties), e.name ? { name: e.name } : {}))),
          (n.page = r(r(r({}, t), i), n.page)));
      }));
  }),
  Xe = e(() => {
    (Ke(), Ye());
  }),
  Ze = e(() => {}),
  Qe,
  $e = e(() => {
    (s(),
      f(),
      Xe(),
      S(),
      Ze(),
      (Qe = (function (e) {
        n(t, e);
        function t(t) {
          var n =
            e.call(this, {
              createMessageId: function () {
                return `ajs-next-${Date.now()}-${v()}`;
              },
              onEventMethodCall: function (e) {
                var t = e.options;
                n.maybeUpdateAnonId(t);
              },
              onFinishedEvent: function (e) {
                return (n.addIdentity(e), e);
              },
            }) || this;
          return ((n.user = t), n);
        }
        return (
          (t.prototype.maybeUpdateAnonId = function (e) {
            e != null && e.anonymousId && this.user.anonymousId(e.anonymousId);
          }),
          (t.prototype.addIdentity = function (e) {
            (this.user.id() && (e.userId = this.user.id()),
              this.user.anonymousId() && (e.anonymousId = this.user.anonymousId()));
          }),
          (t.prototype.track = function (t, n, r, i, a) {
            var o = e.prototype.track.call(this, t, n, r, i);
            return (F(o, a), o);
          }),
          (t.prototype.page = function (t, n, r, i, a, o) {
            var s = e.prototype.page.call(this, t, n, r, i, a);
            return (F(s, o), s);
          }),
          (t.prototype.screen = function (t, n, r, i, a, o) {
            var s = e.prototype.screen.call(this, t, n, r, i, a);
            return (F(s, o), s);
          }),
          (t.prototype.identify = function (t, n, r, i, a) {
            var o = e.prototype.identify.call(this, t, n, r, i);
            return (F(o, a), o);
          }),
          (t.prototype.group = function (t, n, r, i, a) {
            var o = e.prototype.group.call(this, t, n, r, i);
            return (F(o, a), o);
          }),
          (t.prototype.alias = function (t, n, r, i, a) {
            var o = e.prototype.alias.call(this, t, n, r, i);
            return (F(o, a), o);
          }),
          t
        );
      })(g)));
  }),
  et,
  tt = e(() => {
    et = function (e) {
      return `addMiddleware` in e && e.type === `destination`;
    };
  }),
  nt,
  rt = e(() => {
    (s(),
      ue(),
      S(),
      A(),
      (nt = (function (e) {
        n(r, e);
        function r(t) {
          return e.call(this, typeof t == `string` ? new he(4, t) : t) || this;
        }
        return (
          (r.prototype.flush = function () {
            return i(this, void 0, void 0, function () {
              return t(this, function (t) {
                return O() ? [2, []] : [2, e.prototype.flush.call(this)];
              });
            });
          }),
          r
        );
      })(x)));
  });
function it(e) {
  for (
    var t = e.constructor.prototype, n = 0, r = Object.getOwnPropertyNames(t);
    n < r.length;
    n++
  ) {
    var i = r[n];
    if (i !== `constructor`) {
      var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, i);
      a && typeof a.value == `function` && (e[i] = e[i].bind(e));
    }
  }
  return e;
}
var at = e(() => {});
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
function ot(e, t) {
  function n(n, r, i) {
    if (!(typeof document > `u`)) {
      ((i = I({}, t, i)),
        typeof i.expires == `number` && (i.expires = new Date(Date.now() + i.expires * 864e5)),
        (i.expires &&= i.expires.toUTCString()),
        (n = encodeURIComponent(n)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape)));
      var a = ``;
      for (var o in i) i[o] && ((a += `; ` + o), i[o] !== !0 && (a += `=` + i[o].split(`;`)[0]));
      return (document.cookie = n + `=` + e.write(r, n) + a);
    }
  }
  function r(t) {
    if (!(typeof document > `u` || (arguments.length && !t))) {
      for (
        var n = document.cookie ? document.cookie.split(`; `) : [], r = {}, i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i].split(`=`),
          o = a.slice(1).join(`=`);
        try {
          var s = decodeURIComponent(a[0]);
          if (((r[s] = e.read(o, s)), t === s)) break;
        } catch {}
      }
      return t ? r[t] : r;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (e, t) {
        n(e, ``, I({}, t, { expires: -1 }));
      },
      withAttributes: function (e) {
        return ot(this.converter, I({}, this.attributes, e));
      },
      withConverter: function (e) {
        return ot(I({}, this.converter, e), this.attributes);
      },
    },
    { attributes: { value: Object.freeze(t) }, converter: { value: Object.freeze(e) } },
  );
}
var st,
  L,
  ct = e(() => {
    ((st = {
      read: function (e) {
        return (
          e[0] === `"` && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent,
        );
      },
    }),
      (L = ot(st, { path: `/` })));
  });
function lt(e) {
  var t = e.hostname.split(`.`),
    n = t[t.length - 1],
    r = [];
  if ((t.length === 4 && parseInt(n, 10) > 0) || t.length <= 1) return r;
  for (var i = t.length - 2; i >= 0; --i) r.push(t.slice(i).join(`.`));
  return r;
}
function ut(e) {
  try {
    return new URL(e);
  } catch {
    return;
  }
}
function dt(e) {
  var t = ut(e);
  if (t)
    for (var n = lt(t), r = 0; r < n.length; ++r) {
      var i = `__tld__`,
        a = n[r],
        o = { domain: `.` + a };
      try {
        if ((L.set(i, `1`, o), L.get(i))) return (L.remove(i, o), a);
      } catch {
        return;
      }
    }
}
var ft = e(() => {
    ct();
  }),
  pt,
  mt,
  ht = e(() => {
    (s(),
      ct(),
      ft(),
      (pt = 365),
      (mt = (function () {
        function e(t) {
          (t === void 0 && (t = e.defaults), (this.options = r(r({}, e.defaults), t)));
        }
        return (
          Object.defineProperty(e, `defaults`, {
            get: function () {
              return { maxage: pt, domain: dt(window.location.href), path: `/`, sameSite: `Lax` };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.opts = function () {
            return {
              sameSite: this.options.sameSite,
              expires: this.options.maxage,
              domain: this.options.domain,
              path: this.options.path,
              secure: this.options.secure,
            };
          }),
          (e.prototype.get = function (e) {
            try {
              var t = L.get(e);
              if (t == null) return null;
              try {
                return JSON.parse(t) ?? null;
              } catch {
                return t ?? null;
              }
            } catch {
              return null;
            }
          }),
          (e.prototype.set = function (e, t) {
            typeof t == `string`
              ? L.set(e, t, this.opts())
              : t === null
                ? L.remove(e, this.opts())
                : L.set(e, JSON.stringify(t), this.opts());
          }),
          (e.prototype.remove = function (e) {
            return L.remove(e, this.opts());
          }),
          e
        );
      })()));
  }),
  gt,
  _t = e(() => {
    gt = (function () {
      function e() {}
      return (
        (e.prototype.localStorageWarning = function (e, t) {
          console.warn(`Unable to access ${e}, localStorage may be ${t}`);
        }),
        (e.prototype.get = function (e) {
          try {
            var t = localStorage.getItem(e);
            if (t === null) return null;
            try {
              return JSON.parse(t) ?? null;
            } catch {
              return t ?? null;
            }
          } catch {
            return (this.localStorageWarning(e, `unavailable`), null);
          }
        }),
        (e.prototype.set = function (e, t) {
          try {
            localStorage.setItem(e, JSON.stringify(t));
          } catch {
            this.localStorageWarning(e, `full`);
          }
        }),
        (e.prototype.remove = function (e) {
          try {
            return localStorage.removeItem(e);
          } catch {
            this.localStorageWarning(e, `unavailable`);
          }
        }),
        e
      );
    })();
  }),
  R,
  vt = e(() => {
    R = (function () {
      function e() {
        this.cache = {};
      }
      return (
        (e.prototype.get = function (e) {
          return this.cache[e] ?? null;
        }),
        (e.prototype.set = function (e, t) {
          this.cache[e] = t;
        }),
        (e.prototype.remove = function (e) {
          delete this.cache[e];
        }),
        e
      );
    })();
  }),
  z,
  yt = e(() => {
    z = { Cookie: `cookie`, LocalStorage: `localStorage`, Memory: `memory` };
  });
function bt(e) {
  return (
    e &&
    e.stores &&
    Array.isArray(e.stores) &&
    e.stores.every(function (e) {
      return Object.values(z).includes(e);
    })
  );
}
function xt(e) {
  return typeof e == `object` && e.name !== void 0;
}
var St = e(() => {
    yt();
  }),
  B,
  V,
  Ct = e(() => {
    ((B = function (e, t, n, r) {
      console.warn(`${e.constructor.name}: Can't ${t} key "${n}" | Err: ${r}`);
    }),
      (V = (function () {
        function e(e) {
          this.stores = e;
        }
        return (
          (e.prototype.get = function (e) {
            for (var t = null, n = 0, r = this.stores; n < r.length; n++) {
              var i = r[n];
              try {
                if (((t = i.get(e)), t != null)) return t;
              } catch (t) {
                B(i, `get`, e, t);
              }
            }
            return null;
          }),
          (e.prototype.set = function (e, t) {
            this.stores.forEach(function (n) {
              try {
                n.set(e, t);
              } catch (t) {
                B(n, `set`, e, t);
              }
            });
          }),
          (e.prototype.clear = function (e) {
            this.stores.forEach(function (t) {
              try {
                t.remove(e);
              } catch (n) {
                B(t, `remove`, e, n);
              }
            });
          }),
          (e.prototype.getAndSync = function (e) {
            var t = this.get(e),
              n = typeof t == `number` ? t.toString() : t;
            return (this.set(e, n), n);
          }),
          e
        );
      })()));
  });
function wt(e) {
  return e.map(function (e) {
    var t, n;
    switch ((xt(e) ? ((t = e.name), (n = e.settings)) : (t = e), t)) {
      case z.Cookie:
        return new mt(n);
      case z.LocalStorage:
        return new gt();
      case z.Memory:
        return new R();
      default:
        throw Error(`Unknown Store Type: ${e}`);
    }
  });
}
function Tt(e, t) {
  return e.map(function (e) {
    return t && e === z.Cookie ? { name: e, settings: t } : e;
  });
}
var H = e(() => {
    (ht(), _t(), vt(), St(), yt(), yt(), _t(), ht(), vt(), Ct(), St());
  }),
  U,
  W,
  Et,
  Dt,
  Ot = e(() => {
    (s(),
      f(),
      at(),
      H(),
      (U = {
        persist: !0,
        cookie: { key: `ajs_user_id`, oldKey: `ajs_user` },
        localStorage: { key: `ajs_user_traits` },
      }),
      (W = (function () {
        function e(e, t) {
          e === void 0 && (e = U);
          var n = this;
          ((this.options = {}),
            (this.id = function (e) {
              if (n.options.disable) return null;
              var t = n.identityStore.getAndSync(n.idKey);
              e !== void 0 &&
                (n.identityStore.set(n.idKey, e),
                e !== t && t !== null && e !== null && n.anonymousId(null));
              var r = n.identityStore.getAndSync(n.idKey);
              if (r) return r;
              var i = n.legacyUserStore.get(U.cookie.oldKey);
              return i ? (typeof i == `object` ? i.id : i) : null;
            }),
            (this.anonymousId = function (e) {
              if (n.options.disable) return null;
              if (e === void 0) {
                var t = n.identityStore.getAndSync(n.anonKey) ?? n.legacySIO()?.[0];
                if (t) return t;
              }
              return e === null
                ? (n.identityStore.set(n.anonKey, null), n.identityStore.getAndSync(n.anonKey))
                : (n.identityStore.set(n.anonKey, e ?? v()), n.identityStore.getAndSync(n.anonKey));
            }),
            (this.traits = function (e) {
              if (!n.options.disable)
                return (
                  e === null && (e = {}),
                  e && n.traitsStore.set(n.traitsKey, e ?? {}),
                  n.traitsStore.get(n.traitsKey) ?? {}
                );
            }),
            (this.options = r(r({}, U), e)),
            (this.cookieOptions = t),
            (this.idKey = e.cookie?.key ?? U.cookie.key),
            (this.traitsKey = e.localStorage?.key ?? U.localStorage.key),
            (this.anonKey = `ajs_anonymous_id`),
            (this.identityStore = this.createStorage(this.options, t)),
            (this.legacyUserStore = this.createStorage(this.options, t, function (e) {
              return e === z.Cookie;
            })),
            (this.traitsStore = this.createStorage(this.options, t, function (e) {
              return e !== z.Cookie;
            })));
          var i = this.legacyUserStore.get(U.cookie.oldKey);
          (i && typeof i == `object` && (i.id && this.id(i.id), i.traits && this.traits(i.traits)),
            it(this));
        }
        return (
          (e.prototype.legacySIO = function () {
            var e = this.legacyUserStore.get(`_sio`);
            if (!e) return null;
            var t = e.split(`----`);
            return [t[0], t[1]];
          }),
          (e.prototype.identify = function (e, t) {
            if (!this.options.disable) {
              t ??= {};
              var n = this.id();
              ((n === null || n === e) && (t = r(r({}, this.traits()), t)),
                e && this.id(e),
                this.traits(t));
            }
          }),
          (e.prototype.logout = function () {
            (this.anonymousId(null), this.id(null), this.traits({}));
          }),
          (e.prototype.reset = function () {
            (this.logout(),
              this.identityStore.clear(this.idKey),
              this.identityStore.clear(this.anonKey),
              this.traitsStore.clear(this.traitsKey));
          }),
          (e.prototype.load = function () {
            return new e(this.options, this.cookieOptions);
          }),
          (e.prototype.save = function () {
            return !0;
          }),
          (e.prototype.createStorage = function (e, t, n) {
            var r = [z.LocalStorage, z.Cookie, z.Memory];
            return e.disable
              ? new V([])
              : e.persist
                ? (e.storage !== void 0 &&
                    e.storage !== null &&
                    bt(e.storage) &&
                    (r = e.storage.stores),
                  e.localStorageFallbackDisabled &&
                    (r = r.filter(function (e) {
                      return e !== z.LocalStorage;
                    })),
                  n && (r = r.filter(n)),
                  new V(wt(Tt(r, t))))
                : new V([new R()]);
          }),
          (e.defaults = U),
          e
        );
      })()),
      (Et = {
        persist: !0,
        cookie: { key: `ajs_group_id` },
        localStorage: { key: `ajs_group_properties` },
      }),
      (Dt = (function (e) {
        n(t, e);
        function t(t, n) {
          t === void 0 && (t = Et);
          var i = e.call(this, r(r({}, Et), t), n) || this;
          return ((i.anonymousId = function (e) {}), it(i), i);
        }
        return t;
      })(W)));
  }),
  kt,
  At = e(() => {
    kt = function (e) {
      return typeof e == `object` && !!e && `then` in e && typeof e.then == `function`;
    };
  });
function G(e, n) {
  return i(this, void 0, void 0, function () {
    var r, i;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          return (
            t.trys.push([0, 3, , 4]),
            n.called
              ? [2, void 0]
              : ((n.called = !0), (r = e[n.method].apply(e, n.args)), kt(r) ? [4, r] : [3, 2])
          );
        case 1:
          (t.sent(), (t.label = 2));
        case 2:
          return (n.resolve(r), [3, 4]);
        case 3:
          return ((i = t.sent()), n.reject(i), [3, 4]);
        case 4:
          return [2];
      }
    });
  });
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  K,
  Lt,
  q,
  Rt,
  zt,
  Bt = e(() => {
    (s(),
      At(),
      Ce(),
      D(),
      Xe(),
      Ee(),
      (jt = function (e, t, n) {
        n.getAndRemove(e).forEach(function (e) {
          G(t, e).catch(console.error);
        });
      }),
      (Mt = function (e, n) {
        return i(void 0, void 0, void 0, function () {
          var r, i, a;
          return t(this, function (t) {
            switch (t.label) {
              case 0:
                ((r = 0), (i = n.getAndRemove(`addSourceMiddleware`)), (t.label = 1));
              case 1:
                return r < i.length ? ((a = i[r]), [4, G(e, a).catch(console.error)]) : [3, 4];
              case 2:
                (t.sent(), (t.label = 3));
              case 3:
                return (r++, [3, 1]);
              case 4:
                return [2];
            }
          });
        });
      }),
      (Nt = function (e, n) {
        return i(void 0, void 0, void 0, function () {
          var r, i, a;
          return t(this, function (t) {
            switch (t.label) {
              case 0:
                ((r = 0), (i = n.getAndRemove(`register`)), (t.label = 1));
              case 1:
                return r < i.length ? ((a = i[r]), [4, G(e, a).catch(console.error)]) : [3, 4];
              case 2:
                (t.sent(), (t.label = 3));
              case 3:
                return (r++, [3, 1]);
              case 4:
                return [2];
            }
          });
        });
      }),
      (Pt = jt.bind(void 0, `on`)),
      (Ft = jt.bind(void 0, `setAnonymousId`)),
      (It = function (e, t) {
        Object.keys(t.calls).forEach(function (n) {
          t.getAndRemove(n).forEach(function (t) {
            setTimeout(function () {
              G(e, t).catch(console.error);
            }, 0);
          });
        });
      }),
      (K = function (e) {
        if (Lt(e)) return Ue(e.pop());
      }),
      (Lt = function (e) {
        var t = e[e.length - 1];
        return Le(t);
      }),
      (q = (function () {
        function e(e, t, n, r) {
          (n === void 0 && (n = function () {}),
            r === void 0 && (r = console.error),
            (this.method = e),
            (this.resolve = n),
            (this.reject = r),
            (this.called = !1),
            (this.args = t));
        }
        return e;
      })()),
      (Rt = (function () {
        function e() {
          var e = [...arguments];
          ((this._callMap = {}), this.add.apply(this, e));
        }
        return (
          Object.defineProperty(e.prototype, `calls`, {
            get: function () {
              return (this._pushSnippetWindowBuffer(), this._callMap);
            },
            set: function (e) {
              this._callMap = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.get = function (e) {
            return this.calls[e] ?? [];
          }),
          (e.prototype.getAndRemove = function (e) {
            var t = this.get(e);
            return ((this.calls[e] = []), t);
          }),
          (e.prototype.add = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            t.forEach(function (t) {
              ([`track`, `screen`, `alias`, `group`, `page`, `identify`].includes(t.method) &&
                !Lt(t.args) &&
                (t.args = l(l([], t.args, !0), [We()], !1)),
                e.calls[t.method] ? e.calls[t.method].push(t) : (e.calls[t.method] = [t]));
            });
          }),
          (e.prototype.clear = function () {
            (this._pushSnippetWindowBuffer(), (this.calls = {}));
          }),
          (e.prototype.toArray = function () {
            var e;
            return (e = []).concat.apply(e, Object.values(this.calls));
          }),
          (e.prototype._pushSnippetWindowBuffer = function () {
            if (Oe() !== `npm`) {
              var e = te();
              if (Array.isArray(e)) {
                var t = e.splice(0, e.length).map(function (e) {
                  var t = e[0];
                  return new q(t, e.slice(1));
                });
                this.add.apply(this, t);
              }
            }
          }),
          e
        );
      })()),
      (zt = (function () {
        function e(e) {
          var t = this;
          ((this.trackSubmit = this._createMethod(`trackSubmit`)),
            (this.trackClick = this._createMethod(`trackClick`)),
            (this.trackLink = this._createMethod(`trackLink`)),
            (this.pageView = this._createMethod(`pageview`)),
            (this.identify = this._createMethod(`identify`)),
            (this.reset = this._createMethod(`reset`)),
            (this.group = this._createMethod(`group`)),
            (this.track = this._createMethod(`track`)),
            (this.ready = this._createMethod(`ready`)),
            (this.alias = this._createMethod(`alias`)),
            (this.debug = this._createChainableMethod(`debug`)),
            (this.page = this._createMethod(`page`)),
            (this.once = this._createChainableMethod(`once`)),
            (this.off = this._createChainableMethod(`off`)),
            (this.on = this._createChainableMethod(`on`)),
            (this.addSourceMiddleware = this._createMethod(`addSourceMiddleware`)),
            (this.setAnonymousId = this._createMethod(`setAnonymousId`)),
            (this.addDestinationMiddleware = this._createMethod(`addDestinationMiddleware`)),
            (this.screen = this._createMethod(`screen`)),
            (this.register = this._createMethod(`register`)),
            (this.deregister = this._createMethod(`deregister`)),
            (this.user = this._createMethod(`user`)),
            (this.VERSION = Se),
            (this._preInitBuffer = new Rt()),
            (this._promise = e(this._preInitBuffer)),
            this._promise
              .then(function (e) {
                var n = e[0],
                  r = e[1];
                ((t.instance = n), (t.ctx = r));
              })
              .catch(function () {}));
        }
        return (
          (e.prototype.then = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return (e = this._promise).then.apply(e, t);
          }),
          (e.prototype.catch = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return (e = this._promise).catch.apply(e, t);
          }),
          (e.prototype.finally = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return (e = this._promise).finally.apply(e, t);
          }),
          (e.prototype._createMethod = function (e) {
            var t = this;
            return function () {
              for (var n, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
              if (t.instance) {
                var a = (n = t.instance)[e].apply(n, r);
                return Promise.resolve(a);
              }
              return new Promise(function (n, i) {
                t._preInitBuffer.add(new q(e, r, n, i));
              });
            };
          }),
          (e.prototype._createChainableMethod = function (e) {
            var t = this;
            return function () {
              for (var n, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
              return t.instance
                ? ((n = t.instance)[e].apply(n, r), t)
                : (t._preInitBuffer.add(new q(e, r)), t);
            };
          }),
          e
        );
      })()));
  }),
  Vt,
  Ht = e(() => {
    Vt = function (e) {
      var t = !1;
      (window.addEventListener(`pagehide`, function () {
        t || ((t = !0), e(t));
      }),
        document.addEventListener(`visibilitychange`, function () {
          if (document.visibilityState == `hidden`) {
            if (t) return;
            t = !0;
          } else t = !1;
          e(t);
        }));
    };
  }),
  Ut,
  Wt = e(() => {
    (s(),
      (Ut = (function (e) {
        n(t, e);
        function t(t, n) {
          var r = e.call(this, t) || this;
          return ((r.retryTimeout = n), (r.name = `RateLimitError`), r);
        }
        return t;
      })(Error)));
  }),
  Gt,
  Kt = e(() => {
    (s(),
      (Gt = function (e) {
        return r({ "Content-Type": `text/plain` }, typeof e == `function` ? e() : e);
      }));
  });
function qt(e) {
  return (encodeURI(JSON.stringify(e)).split(/%..|./).length - 1) / 1024;
}
function Jt(e) {
  return qt(e) >= Qt - 50;
}
function Yt(e) {
  return qt(e) >= $t - 10;
}
function Xt(e) {
  var t = [],
    n = 0;
  return (
    e.forEach(function (e) {
      (qt(t[n]) >= 64 && n++, t[n] ? t[n].push(e) : (t[n] = [e]));
    }),
    t
  );
}
function Zt(e, n) {
  var o = [],
    s = !1,
    c = n?.size ?? 10,
    l = n?.timeout ?? 5e3,
    u = 0;
  function d(t) {
    if (t.length !== 0) {
      var r = t[0]?.writeKey,
        i = t.map(function (e) {
          var t = e;
          return (t.sentAt, a(t, [`sentAt`]));
        });
      return _e(`https://${e}/b`, {
        credentials: n?.credentials,
        keepalive: n?.keepalive || s,
        headers: Gt(n?.headers),
        method: `post`,
        body: JSON.stringify({ writeKey: r, batch: i, sentAt: new Date().toISOString() }),
        priority: n?.priority,
      }).then(function (e) {
        if (e.status >= 500) throw Error(`Bad response from server: ${e.status}`);
        if (e.status === 429) {
          var t = e.headers?.get(`x-ratelimit-reset`),
            n = typeof t == `string` ? parseInt(t) * 1e3 : l;
          throw new Ut(`Rate limit exceeded: ${e.status}`, n);
        }
      });
    }
  }
  function f(e) {
    return (
      e === void 0 && (e = 1),
      i(this, void 0, void 0, function () {
        var i;
        return t(this, function (t) {
          return o.length
            ? ((i = o),
              (o = []),
              [
                2,
                d(i)?.catch(function (t) {
                  (M.system().log(`error`, `Error sending batch`, t),
                    e <= (n?.maxRetries ?? 10) &&
                      (t.name === `RateLimitError` && (u = t.retryTimeout),
                      o.push.apply(o, i),
                      o.map(function (t) {
                        if (`_metadata` in t) {
                          var n = t;
                          n._metadata = r(r({}, n._metadata), { retryCount: e });
                        }
                      }),
                      m(e + 1)));
                }),
              ])
            : [2];
        });
      })
    );
  }
  var p;
  function m(e) {
    (e === void 0 && (e = 1),
      !p &&
        ((p = setTimeout(function () {
          ((p = void 0), f(e).catch(console.error));
        }, u || l)),
        (u = 0)));
  }
  Vt(function (e) {
    if (((s = e), s && o.length)) {
      var t = Xt(o).map(d);
      Promise.all(t).catch(console.error);
    }
  });
  function h(e, r) {
    return i(this, void 0, void 0, function () {
      var e;
      return t(this, function (t) {
        return (
          o.push(r),
          (e = o.length >= c || Jt(o) || (n?.keepalive && Yt(o))),
          [2, e || s ? f() : m()]
        );
      });
    });
  }
  return { dispatch: h };
}
var Qt,
  $t,
  en = e(() => {
    (s(), N(), Ht(), Wt(), j(), Kt(), (Qt = 500), ($t = 64));
  });
function tn(e) {
  function t(t, n) {
    return _e(t, {
      credentials: e?.credentials,
      keepalive: e?.keepalive,
      headers: Gt(e?.headers),
      method: `post`,
      body: JSON.stringify(n),
      priority: e?.priority,
    }).then(function (e) {
      if (e.status >= 500) throw Error(`Bad response from server: ${e.status}`);
      if (e.status === 429) {
        var t = e.headers?.get(`x-ratelimit-reset`),
          n = t ? parseInt(t) * 1e3 : 5e3;
        throw new Ut(`Rate limit exceeded: ${e.status}`, n);
      }
    });
  }
  return { dispatch: t };
}
var nn = e(() => {
  (N(), Wt(), Kt());
});
function rn(e, t, n, i, a) {
  var o = e.user();
  (delete t.options,
    (t.writeKey = n?.apiKey),
    (t.userId = t.userId || o.id()),
    (t.anonymousId = t.anonymousId || o.anonymousId()),
    (t.sentAt = new Date()));
  var s = e.queue.failedInitializations || [];
  (s.length > 0 && (t._metadata = { failedInitializations: s }),
    a != null &&
      (a.attempts > 1 && (t._metadata = r(r({}, t._metadata), { retryCount: a.attempts })),
      a.attempts++));
  var c = [],
    l = [];
  for (var u in i) {
    var d = i[u];
    (u === `Segment.io` && c.push(u),
      d.bundlingStatus === `bundled` && c.push(u),
      d.bundlingStatus === `unbundled` && l.push(u));
  }
  for (var f = 0, p = n?.unbundledIntegrations || []; f < p.length; f++) {
    var m = p[f];
    l.includes(m) || l.push(m);
  }
  var h = n?.maybeBundledConfigIds ?? {},
    g = [];
  return (
    c.sort().forEach(function (e) {
      (h[e] ?? []).forEach(function (e) {
        g.push(e);
      });
    }),
    n?.addBundledMetadata !== !1 &&
      (t._metadata = r(r({}, t._metadata), {
        bundled: c.sort(),
        unbundled: l.sort(),
        bundledIds: g,
      })),
    t
  );
}
var an = e(() => {
  s();
});
function on(e, n) {
  return i(this, void 0, void 0, function () {
    var r,
      a = this;
    return t(this, function (o) {
      switch (o.label) {
        case 0:
          return (
            (r = []),
            O()
              ? [2, n]
              : [
                  4,
                  pe(
                    function () {
                      return n.length > 0 && !O();
                    },
                    function () {
                      return i(a, void 0, void 0, function () {
                        var i, a, o;
                        return t(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return ((i = n.pop()), i ? [4, _(i, e)] : [2]);
                            case 1:
                              return ((a = t.sent()), (o = a instanceof M), o || r.push(i), [2]);
                          }
                        });
                      });
                    },
                  ),
                ]
          );
        case 1:
          return (
            o.sent(),
            r.map(function (e) {
              return n.pushWithBackoff(e);
            }),
            [2, n]
          );
      }
    });
  });
}
function J(e, n, r, a) {
  var o = this;
  e ||
    setTimeout(function () {
      return i(o, void 0, void 0, function () {
        var e, i;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return ((e = !0), [4, on(r, n)]);
            case 1:
              return ((i = t.sent()), (e = !1), n.todo > 0 && a(e, i, r, a), [2]);
          }
        });
      });
    }, Math.random() * 5e3);
}
var sn = e(() => {
  (s(), A(), j(), S(), le());
});
function cn(e, t) {
  var n = e.user();
  return (
    (t.previousId = t.previousId ?? t.from ?? n.id() ?? n.anonymousId()),
    (t.userId = t.userId ?? t.to),
    delete t.from,
    delete t.to,
    t
  );
}
function ln(e, n, r) {
  window.addEventListener(`pagehide`, function () {
    (o.push.apply(o, Array.from(s)), s.clear());
  });
  var a = n?.apiKey ?? ``,
    o = e.options.disableClientPersistence
      ? new C(e.queue.queue.maxAttempts, [])
      : new he(e.queue.queue.maxAttempts, `${a}:dest-Segment.io`),
    s = new Set(),
    c = !1,
    l = n?.apiHost ?? be,
    u = n?.protocol ?? `https`,
    d = `${u}://${l}`,
    f = n?.deliveryStrategy,
    p = f && `strategy` in f && f.strategy === `batching` ? Zt(l, f.config) : tn(f?.config);
  function m(a) {
    return i(this, void 0, void 0, function () {
      var i, l;
      return t(this, function (t) {
        return O()
          ? (o.push(a), J(c, o, h, J), [2, a])
          : (s.add(a),
            (i = a.event.type.charAt(0)),
            (l = ve(a.event).json()),
            a.event.type === `track` && delete l.traits,
            a.event.type === `alias` && (l = cn(e, l)),
            o.getAttempts(a) >= o.maxAttempts
              ? (s.delete(a), [2, a])
              : [
                  2,
                  p
                    .dispatch(`${d}/${i}`, rn(e, l, n, r, a))
                    .then(function () {
                      return a;
                    })
                    .catch(function (e) {
                      if ((a.log(`error`, `Error sending event`, e), e.name === `RateLimitError`)) {
                        var t = e.retryTimeout;
                        o.pushWithBackoff(a, t);
                      } else o.pushWithBackoff(a);
                      return (J(c, o, h, J), a);
                    })
                    .finally(function () {
                      s.delete(a);
                    }),
                ]);
      });
    });
  }
  var h = {
    metadata: { writeKey: a, apiHost: l, protocol: u },
    name: `Segment.io`,
    type: `destination`,
    version: `0.1.0`,
    isLoaded: function () {
      return !0;
    },
    load: function () {
      return Promise.resolve();
    },
    track: m,
    identify: m,
    page: m,
    alias: m,
    group: m,
    screen: m,
  };
  return (o.todo && J(c, o, h, J), h);
}
var un,
  dn = e(() => {
    (s(),
      A(),
      fe(),
      ue(),
      we(),
      en(),
      nn(),
      an(),
      sn(),
      xe(),
      (un = function (e) {
        return e.name === `Segment.io`;
      }));
  });
function fn(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = t ? 10 : 1;
  return new nt(n ? new C(r, []) : new he(r, e));
}
function Y() {
  console.warn(X);
}
var X,
  pn,
  mn,
  hn,
  Z,
  Q,
  gn = e(() => {
    (s(),
      Fe(),
      A(),
      j(),
      S(),
      p(),
      $e(),
      tt(),
      rt(),
      Ot(),
      at(),
      ue(),
      Ce(),
      fe(),
      ye(),
      H(),
      D(),
      Bt(),
      dn(),
      c(),
      (X = `This is being deprecated and will be not be available in future releases of Analytics JS`),
      (pn = je()),
      (mn = pn?.analytics),
      (hn = (function () {
        function e(e, t) {
          ((this.timeout = 300),
            (this._getSegmentPluginMetadata = function () {
              return t.plugins.find(un)?.metadata;
            }),
            (this.writeKey = e.writeKey),
            (this.cdnSettings = e.cdnSettings ?? {
              integrations: { "Segment.io": { apiKey: `` } },
            }),
            (this.cdnURL = e.cdnURL));
        }
        return (
          Object.defineProperty(e.prototype, `apiHost`, {
            get: function () {
              return this._getSegmentPluginMetadata?.call(this)?.apiHost;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })()),
      (Z = (function (e) {
        n(a, e);
        function a(t, n, i, a, o) {
          var s = this;
          ((s = e.call(this) || this),
            (s._debug = !1),
            (s.initialized = !1),
            (s.user = function () {
              return s._user;
            }),
            (s.init = s.initialize.bind(s)),
            (s.log = Y),
            (s.addIntegrationMiddleware = Y),
            (s.listeners = Y),
            (s.addEventListener = Y),
            (s.removeAllListeners = Y),
            (s.removeListener = Y),
            (s.removeEventListener = Y),
            (s.hasListeners = Y),
            (s.add = Y),
            (s.addIntegration = Y));
          var c = n?.cookie,
            l = n?.disableClientPersistence ?? !1;
          ((s.queue = i ?? fn(`${t.writeKey}:event-queue`, n?.retryQueue, l)),
            (s.settings = new hn(t, s.queue)));
          var u = n?.storage;
          return (
            (s._universalStorage = s.createStore(l, u, c)),
            (s._user = a ?? new W(r({ persist: !l, storage: n?.storage }, n?.user), c).load()),
            (s._group = o ?? new Dt(r({ persist: !l, storage: n?.storage }, n?.group), c).load()),
            (s.eventFactory = new Qe(s._user)),
            (s.integrations = n?.integrations ?? {}),
            (s.options = n ?? {}),
            it(s),
            s
          );
        }
        return (
          (a.prototype.createStore = function (e, t, n) {
            return e
              ? new V([new R()])
              : t && bt(t)
                ? new V(wt(Tt(t.stores, n)))
                : new V(wt([z.LocalStorage, { name: z.Cookie, settings: n }, z.Memory]));
          }),
          Object.defineProperty(a.prototype, `storage`, {
            get: function () {
              return this._universalStorage;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.track = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i,
                a,
                o,
                s,
                c,
                l = this;
              return t(this, function (t) {
                return (
                  (n = K(e)),
                  (r = Me.apply(void 0, e)),
                  (i = r[0]),
                  (a = r[1]),
                  (o = r[2]),
                  (s = r[3]),
                  (c = this.eventFactory.track(i, a, o, this.integrations, n)),
                  [
                    2,
                    this._dispatch(c, s).then(function (e) {
                      return (l.emit(`track`, i, e.event.properties, e.event.options), e);
                    }),
                  ]
                );
              });
            });
          }),
          (a.prototype.page = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i,
                a,
                o,
                s,
                c,
                l,
                u = this;
              return t(this, function (t) {
                return (
                  (n = K(e)),
                  (r = Ne.apply(void 0, e)),
                  (i = r[0]),
                  (a = r[1]),
                  (o = r[2]),
                  (s = r[3]),
                  (c = r[4]),
                  (l = this.eventFactory.page(i, a, o, s, this.integrations, n)),
                  [
                    2,
                    this._dispatch(l, c).then(function (e) {
                      return (u.emit(`page`, i, a, e.event.properties, e.event.options), e);
                    }),
                  ]
                );
              });
            });
          }),
          (a.prototype.identify = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i,
                a,
                o,
                s,
                c,
                l = this;
              return t(this, function (t) {
                return (
                  (n = K(e)),
                  (r = P(this._user).apply(void 0, e)),
                  (i = r[0]),
                  (a = r[1]),
                  (o = r[2]),
                  (s = r[3]),
                  this._user.identify(i, a),
                  (c = this.eventFactory.identify(
                    this._user.id(),
                    this._user.traits(),
                    o,
                    this.integrations,
                    n,
                  )),
                  [
                    2,
                    this._dispatch(c, s).then(function (e) {
                      return (
                        l.emit(`identify`, e.event.userId, e.event.traits, e.event.options), e
                      );
                    }),
                  ]
                );
              });
            });
          }),
          (a.prototype.group = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var r = K(t);
            if (t.length === 0) return this._group;
            var i = P(this._group).apply(void 0, t),
              a = i[0],
              o = i[1],
              s = i[2],
              c = i[3];
            this._group.identify(a, o);
            var l = this._group.id(),
              u = this._group.traits(),
              d = this.eventFactory.group(l, u, s, this.integrations, r);
            return this._dispatch(d, c).then(function (t) {
              return (e.emit(`group`, t.event.groupId, t.event.traits, t.event.options), t);
            });
          }),
          (a.prototype.alias = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i,
                a,
                o,
                s,
                c,
                l = this;
              return t(this, function (t) {
                return (
                  (n = K(e)),
                  (r = Pe.apply(void 0, e)),
                  (i = r[0]),
                  (a = r[1]),
                  (o = r[2]),
                  (s = r[3]),
                  (c = this.eventFactory.alias(i, a, o, this.integrations, n)),
                  [
                    2,
                    this._dispatch(c, s).then(function (e) {
                      return (l.emit(`alias`, i, a, e.event.options), e);
                    }),
                  ]
                );
              });
            });
          }),
          (a.prototype.screen = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i,
                a,
                o,
                s,
                c,
                l,
                u = this;
              return t(this, function (t) {
                return (
                  (n = K(e)),
                  (r = Ne.apply(void 0, e)),
                  (i = r[0]),
                  (a = r[1]),
                  (o = r[2]),
                  (s = r[3]),
                  (c = r[4]),
                  (l = this.eventFactory.screen(i, a, o, s, this.integrations, n)),
                  [
                    2,
                    this._dispatch(l, c).then(function (e) {
                      return (u.emit(`screen`, i, a, e.event.properties, e.event.options), e);
                    }),
                  ]
                );
              });
            });
          }),
          (a.prototype.trackClick = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n, r;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      o(
                        () => import(`./auto-track.js`),
                        __vite__mapDeps([0, 1, 2, 3, 4]),
                        import.meta.url,
                      ),
                    ];
                  case 1:
                    return ((n = t.sent()), [2, (r = n.link).call.apply(r, l([this], e, !1))]);
                }
              });
            });
          }),
          (a.prototype.trackLink = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n, r;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      o(
                        () => import(`./auto-track.js`),
                        __vite__mapDeps([0, 1, 2, 3, 4]),
                        import.meta.url,
                      ),
                    ];
                  case 1:
                    return ((n = t.sent()), [2, (r = n.link).call.apply(r, l([this], e, !1))]);
                }
              });
            });
          }),
          (a.prototype.trackSubmit = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n, r;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      o(
                        () => import(`./auto-track.js`),
                        __vite__mapDeps([0, 1, 2, 3, 4]),
                        import.meta.url,
                      ),
                    ];
                  case 1:
                    return ((n = t.sent()), [2, (r = n.form).call.apply(r, l([this], e, !1))]);
                }
              });
            });
          }),
          (a.prototype.trackForm = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n, r;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      o(
                        () => import(`./auto-track.js`),
                        __vite__mapDeps([0, 1, 2, 3, 4]),
                        import.meta.url,
                      ),
                    ];
                  case 1:
                    return ((n = t.sent()), [2, (r = n.form).call.apply(r, l([this], e, !1))]);
                }
              });
            });
          }),
          (a.prototype.register = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i = this;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (n = M.system()),
                      (r = e.map(function (e) {
                        return i.queue.register(n, e, i);
                      })),
                      [4, Promise.all(r)]
                    );
                  case 1:
                    return (t.sent(), [2, n]);
                }
              });
            });
          }),
          (a.prototype.deregister = function () {
            var e = [...arguments];
            return i(this, void 0, void 0, function () {
              var n,
                r,
                i = this;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (n = M.system()),
                      (r = e.map(function (e) {
                        var t = i.queue.plugins.find(function (t) {
                          return t.name === e;
                        });
                        if (t) return i.queue.deregister(n, t, i);
                        n.log(`warn`, `plugin ${e} not found`);
                      })),
                      [4, Promise.all(r)]
                    );
                  case 1:
                    return (t.sent(), [2, n]);
                }
              });
            });
          }),
          (a.prototype.debug = function (e) {
            return (
              e === !1 && localStorage.getItem(`debug`) && localStorage.removeItem(`debug`),
              (this._debug = e),
              this
            );
          }),
          (a.prototype.reset = function () {
            (this._user.reset(), this._group.reset(), this.emit(`reset`));
          }),
          (a.prototype.timeout = function (e) {
            this.settings.timeout = e;
          }),
          (a.prototype._dispatch = function (e, n) {
            return i(this, void 0, void 0, function () {
              var r;
              return t(this, function (t) {
                return (
                  (r = new M(e)),
                  r.stats.increment(`analytics_js.invoke`, 1, [e.type]),
                  O() && !this.options.retryQueue
                    ? [2, r]
                    : [
                        2,
                        y(r, this.queue, this, {
                          callback: n,
                          debug: this._debug,
                          timeout: this.settings.timeout,
                        }),
                      ]
                );
              });
            });
          }),
          (a.prototype.addSourceMiddleware = function (e) {
            return i(this, void 0, void 0, function () {
              var n = this;
              return t(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      this.queue.criticalTasks.run(function () {
                        return i(n, void 0, void 0, function () {
                          var n, r, i;
                          return t(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [
                                  4,
                                  o(
                                    () => import(`./middleware.js`),
                                    __vite__mapDeps([5, 6, 3, 1, 4, 2]),
                                    import.meta.url,
                                  ),
                                ];
                              case 1:
                                return (
                                  (n = t.sent().sourceMiddlewarePlugin),
                                  (r = {}),
                                  this.queue.plugins.forEach(function (e) {
                                    if (e.type === `destination`) return (r[e.name] = !0);
                                  }),
                                  (i = n(e, r)),
                                  [4, this.register(i)]
                                );
                              case 2:
                                return (t.sent(), [2]);
                            }
                          });
                        });
                      }),
                    ];
                  case 1:
                    return (r.sent(), [2, this]);
                }
              });
            });
          }),
          (a.prototype.addDestinationMiddleware = function (e) {
            var t = [...arguments].slice(1);
            return (
              this.queue.plugins.filter(et).forEach(function (n) {
                (e === `*` || n.name.toLowerCase() === e.toLowerCase()) &&
                  n.addMiddleware.apply(n, t);
              }),
              Promise.resolve(this)
            );
          }),
          (a.prototype.setAnonymousId = function (e) {
            return this._user.anonymousId(e);
          }),
          (a.prototype.queryString = function (e) {
            return i(this, void 0, void 0, function () {
              var n;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.options.useQueryString === !1
                      ? [2, []]
                      : [
                          4,
                          o(
                            () => import(`./query-string.js`),
                            __vite__mapDeps([7, 1, 2, 3, 4, 8]),
                            import.meta.url,
                          ),
                        ];
                  case 1:
                    return ((n = t.sent().queryString), [2, n(this, e)]);
                }
              });
            });
          }),
          (a.prototype.use = function (e) {
            return (e(this), this);
          }),
          (a.prototype.ready = function (e) {
            return (
              e === void 0 &&
                (e = function (e) {
                  return e;
                }),
              i(this, void 0, void 0, function () {
                return t(this, function (t) {
                  return [
                    2,
                    Promise.all(
                      this.queue.plugins.map(function (e) {
                        return e.ready ? e.ready() : Promise.resolve();
                      }),
                    ).then(function (t) {
                      return (e(t), t);
                    }),
                  ];
                });
              })
            );
          }),
          (a.prototype.noConflict = function () {
            return (console.warn(X), ce(mn ?? this), this);
          }),
          (a.prototype.normalize = function (e) {
            return (console.warn(X), this.eventFactory.normalize(e));
          }),
          Object.defineProperty(a.prototype, `failedInitializations`, {
            get: function () {
              return (console.warn(X), this.queue.failedInitializations);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(a.prototype, `VERSION`, {
            get: function () {
              return Se;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.initialize = function (e, n) {
            return i(this, void 0, void 0, function () {
              return t(this, function (e) {
                return (console.warn(X), [2, Promise.resolve(this)]);
              });
            });
          }),
          (a.prototype.pageview = function (e) {
            return i(this, void 0, void 0, function () {
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (console.warn(X), [4, this.page({ path: e })]);
                  case 1:
                    return (t.sent(), [2, this]);
                }
              });
            });
          }),
          Object.defineProperty(a.prototype, `plugins`, {
            get: function () {
              return (console.warn(X), this._plugins ?? {});
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(a.prototype, `Integrations`, {
            get: function () {
              return (
                console.warn(X),
                this.queue.plugins
                  .filter(function (e) {
                    return e.type === `destination`;
                  })
                  .reduce(function (e, t) {
                    var n = `${t.name.toLowerCase().replace(`.`, ``).split(` `).join(`-`)}Integration`,
                      r = window[n];
                    if (!r) return e;
                    var i = r.Integration;
                    return i ? ((e[t.name] = i), e) : ((e[t.name] = r), e);
                  }, {})
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.push = function (e) {
            var t = this,
              n = e.shift();
            (n && !t[n]) || t[n].apply(this, e);
          }),
          a
        );
      })(m)),
      (Q = (function (e) {
        n(t, e);
        function t() {
          var t = e.call(this, { writeKey: `` }, { disableClientPersistence: !0 }) || this;
          return ((t.initialized = !0), t);
        }
        return t;
      })(Z)));
  });
function _n() {
  return {};
}
var vn = e(() => {});
function yn(e) {
  return i(this, void 0, void 0, function () {
    var n;
    return t(this, function (t) {
      return (
        (n = navigator.userAgentData),
        n
          ? e
            ? [
                2,
                n.getHighEntropyValues(e).catch(function () {
                  return n.toJSON();
                }),
              ]
            : [2, n.toJSON()]
          : [2, void 0]
      );
    });
  });
}
var bn = e(() => {
  s();
});
function xn() {
  if ($) return $;
  var e = dt(window.location.href);
  return (($ = { expires: 31536e6, secure: !1, path: `/` }), e && ($.domain = e), $);
}
function Sn(e) {
  var t = { btid: `dataxu`, urid: `millennial-media` };
  (e.startsWith(`?`) && (e = e.substring(1)), (e = e.replace(/\?/g, `&`)));
  for (var n = e.split(`&`), r = 0, i = n; r < i.length; r++) {
    var a = i[r].split(`=`),
      o = a[0],
      s = a[1];
    if (t[o]) return { id: s, type: t[o] };
  }
}
function Cn(e) {
  return (
    e.startsWith(`?`) && (e = e.substring(1)),
    (e = e.replace(/\?/g, `&`)),
    e.split(`&`).reduce(function (e, t) {
      var n = t.split(`=`),
        r = n[0],
        i = n[1],
        a = i === void 0 ? `` : i;
      if (r.includes(`utm_`) && r.length > 4) {
        var o = r.slice(4);
        (o === `campaign` && (o = `name`), (e[o] = E(a)));
      }
      return e;
    }, {})
  );
}
function wn() {
  var e = L.get(`_ga`);
  if (e && e.startsWith(`amp`)) return e;
}
function Tn(e, t, n) {
  var i = new V(n ? [] : [new mt(xn())]),
    a = i.get(`s:context.referrer`),
    o = Sn(e) ?? a;
  o && (t && (t.referrer = r(r({}, t.referrer), o)), i.set(`s:context.referrer`, o));
}
var $,
  En,
  Dn,
  On,
  kn = e(() => {
    (s(),
      ct(),
      Ce(),
      Ee(),
      ft(),
      ee(),
      H(),
      bn(),
      (En = function (e) {
        try {
          var t = new URLSearchParams();
          return (
            Object.entries(e).forEach(function (e) {
              var n = e[0],
                r = e[1];
              Array.isArray(r)
                ? r.forEach(function (e) {
                    return t.append(n, e);
                  })
                : t.append(n, r);
            }),
            t.toString()
          );
        } catch {
          return ``;
        }
      }),
      (Dn = (function () {
        function e() {
          var e = this;
          ((this.name = `Page Enrichment`),
            (this.type = `before`),
            (this.version = `0.1.0`),
            (this.isLoaded = function () {
              return !0;
            }),
            (this.load = function (n, r) {
              return i(e, void 0, void 0, function () {
                var e;
                return t(this, function (t) {
                  switch (t.label) {
                    case 0:
                      ((this.instance = r), (t.label = 1));
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        (e = this),
                        [4, yn(this.instance.options.highEntropyValuesClientHints)]
                      );
                    case 2:
                      return ((e.userAgentData = t.sent()), [3, 4]);
                    case 3:
                      return (t.sent(), [3, 4]);
                    case 4:
                      return [2, Promise.resolve()];
                  }
                });
              });
            }),
            (this.enrich = function (t) {
              var n = t.event.context,
                r = n.page.search || ``,
                i = typeof r == `object` ? En(r) : r;
              ((n.userAgent = navigator.userAgent), (n.userAgentData = e.userAgentData));
              var a = navigator.userLanguage || navigator.language;
              (n.locale === void 0 && a !== void 0 && (n.locale = a),
                (n.library ??= {
                  name: `analytics.js`,
                  version: `${Oe() === `web` ? `next` : `npm:next`}-1.82.0`,
                }),
                i && !n.campaign && (n.campaign = Cn(i)));
              var o = wn();
              (o && (n.amp = { id: o }),
                Tn(i, n, e.instance.options.disableClientPersistence ?? !1));
              try {
                n.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
              } catch {}
              return t;
            }),
            (this.track = this.enrich),
            (this.identify = this.enrich),
            (this.page = this.enrich),
            (this.group = this.enrich),
            (this.alias = this.enrich),
            (this.screen = this.enrich));
        }
        return e;
      })()),
      (On = new Dn()));
  });
function An(e) {
  if (!Array.isArray(e)) throw Error(`Not a valid list of plugins`);
  var t = [`load`, `isLoaded`, `name`, `version`, `type`];
  return (
    e.forEach(function (e) {
      t.forEach(function (t) {
        if (e[t] === void 0)
          throw Error(`Plugin: ${e.name ?? `unknown`} missing required function ${t}`);
      });
    }),
    !0
  );
}
function jn(e, t) {
  var n = e[t.creationName],
    r = e[t.name];
  return (e.All === !1 && !n && !r) || n === !1 || r === !1;
}
function Mn(e, n) {
  return i(this, void 0, void 0, function () {
    var r, i, a, o, s, c;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          if (
            (t.trys.push([0, 9, , 10]),
            (r = RegExp(`https://cdn.segment.(com|build)`)),
            (i = re()),
            !n)
          )
            return [3, 6];
          ((a = e.url.split(`/`)),
            (o = a[a.length - 2]),
            (s = e.url.replace(o, btoa(o).replace(/=/g, ``))),
            (t.label = 1));
        case 1:
          return (t.trys.push([1, 3, , 5]), [4, ie(s.replace(r, i))]);
        case 2:
          return (t.sent(), [3, 5]);
        case 3:
          return (t.sent(), [4, ie(e.url.replace(r, i))]);
        case 4:
          return (t.sent(), [3, 5]);
        case 5:
          return [3, 8];
        case 6:
          return [4, ie(e.url.replace(r, i))];
        case 7:
          (t.sent(), (t.label = 8));
        case 8:
          return typeof window[e.libraryName] == `function` ? [2, window[e.libraryName]] : [3, 10];
        case 9:
          throw ((c = t.sent()), console.error(`Failed to create PluginFactory`, e), c);
        case 10:
          return [2];
      }
    });
  });
}
function Nn(e, n, a, o, s, c) {
  return i(this, void 0, void 0, function () {
    var l,
      u,
      d,
      f = this;
    return t(this, function (p) {
      switch (p.label) {
        case 0:
          return (
            (l = []),
            (u = e.middlewareSettings?.routingRules ?? []),
            (d = (e.remotePlugins ?? []).map(function (e) {
              return i(f, void 0, void 0, function () {
                var i, d, f, p, m, h, g;
                return t(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (jn(n, e)) return [2];
                      t.label = 1;
                    case 1:
                      return (
                        t.trys.push([1, 6, , 7]),
                        (d = c?.find(function (t) {
                          return t.pluginName === e.name;
                        })),
                        d ? [3, 3] : [4, Mn(e, o?.obfuscate)]
                      );
                    case 2:
                      ((d = t.sent()), (t.label = 3));
                    case 3:
                      return (
                        (i = d), i ? ((f = a[e.name]), [4, i(r(r({}, e.settings), f))]) : [3, 5]
                      );
                    case 4:
                      ((p = t.sent()),
                        (m = Array.isArray(p) ? p : [p]),
                        An(m),
                        (h = u.filter(function (t) {
                          return t.destinationName === e.creationName;
                        })),
                        m.forEach(function (t) {
                          var n = new Pn(e.creationName, t);
                          (h.length && s && n.addMiddleware(s), l.push(n));
                        }),
                        (t.label = 5));
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        (g = t.sent()),
                        console.warn(`Failed to load Remote Plugin`, g),
                        k(M.system(), {
                          integrationName: e.name,
                          methodName: `load`,
                          type: `action`,
                          didError: !0,
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            })),
            [4, Promise.all(d)]
          );
        case 1:
          return (p.sent(), [2, l.filter(Boolean)]);
      }
    });
  });
}
var Pn,
  Fn = e(() => {
    (s(),
      se(),
      ae(),
      De(),
      j(),
      ge(),
      p(),
      (Pn = (function () {
        function e(e, t) {
          ((this.version = `1.0.0`),
            (this.alternativeNames = []),
            (this.loadPromise = b()),
            (this.middleware = []),
            (this.alias = this._createMethod(`alias`)),
            (this.group = this._createMethod(`group`)),
            (this.identify = this._createMethod(`identify`)),
            (this.page = this._createMethod(`page`)),
            (this.screen = this._createMethod(`screen`)),
            (this.track = this._createMethod(`track`)),
            (this.action = t),
            (this.name = e),
            (this.type = t.type),
            this.alternativeNames.push(t.name));
        }
        return (
          (e.prototype.addMiddleware = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            this.type === `destination` && (e = this.middleware).push.apply(e, t);
          }),
          (e.prototype.transform = function (e) {
            return i(this, void 0, void 0, function () {
              var n;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, ke(this.name, e.event, this.middleware)];
                  case 1:
                    return (
                      (n = t.sent()),
                      n === null &&
                        e.cancel(new d({ retry: !1, reason: `dropped by destination middleware` })),
                      [2, new M(n)]
                    );
                }
              });
            });
          }),
          (e.prototype._createMethod = function (e) {
            var n = this;
            return function (r) {
              return i(n, void 0, void 0, function () {
                var n, i;
                return t(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.action[e]
                        ? ((n = r), this.type === `destination` ? [4, this.transform(r)] : [3, 2])
                        : [2, r];
                    case 1:
                      ((n = t.sent()), (t.label = 2));
                    case 2:
                      return (t.trys.push([2, 5, , 6]), [4, this.ready()]);
                    case 3:
                      if (!t.sent())
                        throw Error(`Something prevented the destination from getting ready`);
                      return (
                        k(r, { integrationName: this.action.name, methodName: e, type: `action` }),
                        [4, this.action[e](n)]
                      );
                    case 4:
                      return (t.sent(), [3, 6]);
                    case 5:
                      throw (
                        (i = t.sent()),
                        k(r, {
                          integrationName: this.action.name,
                          methodName: e,
                          type: `action`,
                          didError: !0,
                        }),
                        i
                      );
                    case 6:
                      return [2, r];
                  }
                });
              });
            };
          }),
          (e.prototype.isLoaded = function () {
            return this.action.isLoaded();
          }),
          (e.prototype.ready = function () {
            return i(this, void 0, void 0, function () {
              return t(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (e.trys.push([0, 2, , 3]), [4, this.loadPromise.promise]);
                  case 1:
                    return (e.sent(), [2, !0]);
                  case 2:
                    return (e.sent(), [2, !1]);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.load = function (e, n) {
            return i(this, void 0, void 0, function () {
              var r, i, a, o;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (this.loadPromise.isSettled()) return [2, this.loadPromise.promise];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      k(e, {
                        integrationName: this.action.name,
                        methodName: `load`,
                        type: `action`,
                      }),
                      (r = this.action.load(e, n)),
                      (a = (i = this.loadPromise).resolve),
                      [4, r]
                    );
                  case 2:
                    return (a.apply(i, [t.sent()]), [2, r]);
                  case 3:
                    throw (
                      (o = t.sent()),
                      k(e, {
                        integrationName: this.action.name,
                        methodName: `load`,
                        type: `action`,
                        didError: !0,
                      }),
                      this.loadPromise.reject(o),
                      o
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.unload = function (e, t) {
            var n;
            return (n = this.action).unload?.call(n, e, t);
          }),
          e
        );
      })()));
  }),
  In,
  Ln,
  Rn,
  zn = e(() => {
    (ye(),
      (Ln = (In = je()).__SEGMENT_INSPECTOR__ ?? (In.__SEGMENT_INSPECTOR__ = {})),
      (Rn = function (e) {
        return Ln.attach?.call(Ln, e);
      }));
  });
function Bn(e, t) {
  return _e(`${t}/v1/projects/${e}/settings`)
    .then(function (e) {
      return e.ok
        ? e.json()
        : e.text().then(function (e) {
            throw Error(e);
          });
    })
    .catch(function (e) {
      throw (console.error(e.message), e);
    });
}
function Vn(e) {
  return _n().NODE_ENV !== `test` && Object.keys(e.integrations).length > 1;
}
function Hn(e) {
  return _n().NODE_ENV !== `test` && (e.middlewareSettings?.routingRules?.length ?? 0) > 0;
}
function Un(e, t) {
  (Ft(e, t), Pt(e, t));
}
function Wn(e, n, r) {
  return i(this, void 0, void 0, function () {
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          return [4, Jn(e, n)];
        case 1:
          return (t.sent(), It(e, r), [2]);
      }
    });
  });
}
function Gn(e, n, r, a, s, c, u) {
  return (
    s === void 0 && (s = []),
    i(this, void 0, void 0, function () {
      var d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        ee = this;
      return t(this, function (E) {
        switch (E.label) {
          case 0:
            return (
              Un(r, u),
              (d = s?.filter(function (e) {
                return typeof e == `object`;
              })),
              (f = s?.filter(function (e) {
                return typeof e == `function` && typeof e.pluginName == `string`;
              })),
              Hn(n)
                ? [
                    4,
                    o(
                      () =>
                        import(`./routing-middleware.js`).then(function (e) {
                          return e.tsubMiddleware(n.middlewareSettings.routingRules);
                        }),
                      __vite__mapDeps([9, 1]),
                      import.meta.url,
                    ),
                  ]
                : [3, 2]
            );
          case 1:
            return ((m = E.sent()), [3, 3]);
          case 2:
            ((m = void 0), (E.label = 3));
          case 3:
            return (
              (p = m),
              Vn(n) || c.length > 0
                ? [
                    4,
                    o(
                      () =>
                        import(`./ajs-destination.js`).then(function (t) {
                          return t.ajsDestinations(e, n, r.integrations, a, p, c);
                        }),
                      __vite__mapDeps([10, 3, 1, 4, 2, 11, 6, 12, 13]),
                      import.meta.url,
                    ),
                  ]
                : [3, 5]
            );
          case 4:
            return ((g = E.sent()), [3, 6]);
          case 5:
            ((g = []), (E.label = 6));
          case 6:
            return (
              (h = g),
              n.legacyVideoPluginsEnabled
                ? [
                    4,
                    o(
                      () =>
                        import(`./legacy-video-plugins.js`).then(function (e) {
                          return e.loadLegacyVideoPlugins(r);
                        }),
                      __vite__mapDeps([14, 3, 1, 4]),
                      import.meta.url,
                    ),
                  ]
                : [3, 8]
            );
          case 7:
            (E.sent(), (E.label = 8));
          case 8:
            return a.plan?.track
              ? [
                  4,
                  o(
                    () =>
                      import(`./schema-filter-Q.js`).then(function (e) {
                        return e.schemaFilter(a.plan?.track, n);
                      }),
                    __vite__mapDeps([15, 3, 1, 4, 13]),
                    import.meta.url,
                  ),
                ]
              : [3, 10];
          case 9:
            return ((v = E.sent()), [3, 11]);
          case 10:
            ((v = void 0), (E.label = 11));
          case 11:
            return (
              (_ = v),
              (y = de(n, a)),
              [
                4,
                Nn(n, r.integrations, y, a, p, f).catch(function (e) {
                  return (console.error(`Failed to load remote plugins`, e), []);
                }),
              ]
            );
          case 12:
            return (
              (b = E.sent()),
              (x = l(l([On], h, !0), b, !0)),
              _ && x.push(_),
              (S =
                (a.integrations?.All === !1 && !a.integrations[`Segment.io`]) ||
                (a.integrations && a.integrations[`Segment.io`] === !1)),
              S ? [3, 14] : ((w = (C = x).push), [4, ln(r, y[`Segment.io`], n.integrations)])
            );
          case 13:
            (w.apply(C, [E.sent()]), (E.label = 14));
          case 14:
            return [4, r.register.apply(r, l(l([], x, !1), d, !1))];
          case 15:
            return ((T = E.sent()), [4, Nt(r, u)]);
          case 16:
            return (
              E.sent(),
              Object.entries(n.enabledMiddleware ?? {}).some(function (e) {
                return e[1];
              })
                ? [
                    4,
                    o(
                      () =>
                        import(`./remote-middleware.js`).then(function (e) {
                          var o = e.remoteMiddlewares;
                          return i(ee, void 0, void 0, function () {
                            var e, i;
                            return t(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [4, o(T, n, a.obfuscate)];
                                case 1:
                                  return (
                                    (e = t.sent()),
                                    (i = e.map(function (e) {
                                      return r.addSourceMiddleware(e);
                                    })),
                                    [2, Promise.all(i)]
                                  );
                              }
                            });
                          });
                        }),
                      __vite__mapDeps([16, 3, 1, 4, 12]),
                      import.meta.url,
                    ),
                  ]
                : [3, 18]
            );
          case 17:
            (E.sent(), (E.label = 18));
          case 18:
            return [4, Mt(r, u)];
          case 19:
            return (E.sent(), [2, T]);
        }
      });
    })
  );
}
function Kn(e, n, a) {
  var o;
  return (
    n === void 0 && (n = {}),
    i(this, void 0, void 0, function () {
      var i, s, c, l, u, d, f, p, m, h, g;
      return t(this, function (t) {
        switch (t.label) {
          case 0:
            return n.disable === !0
              ? [2, [new Q(), M.system()]]
              : (n.globalAnalyticsKey && ne(n.globalAnalyticsKey),
                e.cdnURL && oe(e.cdnURL),
                n.initialPageview && a.add(new q(`page`, [])),
                (i = qn()),
                (s = e.cdnURL ?? re()),
                (o = e.cdnSettings) == null ? [3, 1] : ((l = o), [3, 3]));
          case 1:
            return [4, Bn(e.writeKey, s)];
          case 2:
            ((l = t.sent()), (t.label = 3));
          case 3:
            return (
              (c = l),
              n.updateCDNSettings && (c = n.updateCDNSettings(c)),
              typeof n.disable == `function` ? [4, n.disable(c)] : [3, 5]
            );
          case 4:
            if (((u = t.sent()), u)) return [2, [new Q(), M.system()]];
            t.label = 5;
          case 5:
            return (
              (d = c.integrations[`Segment.io`]?.retryQueue ?? !0),
              (n = r({ retryQueue: d }, n)),
              (f = new Z(r(r({}, e), { cdnSettings: c, cdnURL: s }), n)),
              Rn(f),
              (p = e.plugins ?? []),
              (m = e.classicIntegrations ?? []),
              (h = n.integrations?.[`Segment.io`]),
              Te.initRemoteMetrics(
                r(r({}, c.metrics), { host: h?.apiHost ?? c.metrics?.host, protocol: h?.protocol }),
              ),
              [4, Gn(e.writeKey, c, f, n, p, m, a)]
            );
          case 6:
            return (
              (g = t.sent()), (f.initialized = !0), f.emit(`initialize`, e, n), [4, Wn(f, i, a)]
            );
          case 7:
            return (t.sent(), [2, [f, g]]);
        }
      });
    })
  );
}
var qn,
  Jn,
  Yn,
  Xn = e(() => {
    (s(),
      vn(),
      ae(),
      gn(),
      j(),
      me(),
      p(),
      kn(),
      Fn(),
      dn(),
      Bt(),
      zn(),
      Ae(),
      D(),
      N(),
      c(),
      (qn = function () {
        var e = window.location.hash ?? ``,
          t = window.location.search ?? ``;
        return t.length ? t : e.replace(/(?=#).*(?=\?)/, ``);
      }),
      (Jn = function (e, n) {
        return i(void 0, void 0, void 0, function () {
          return t(this, function (t) {
            switch (t.label) {
              case 0:
                return n.includes(`ajs_`) ? [4, e.queryString(n).catch(console.error)] : [3, 2];
              case 1:
                (t.sent(), (t.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (Yn = (function (e) {
        n(t, e);
        function t() {
          var t = this,
            n = b(),
            r = n.promise,
            i = n.resolve;
          return (
            (t =
              e.call(this, function (e) {
                return r.then(function (t) {
                  var n = t[0],
                    r = t[1];
                  return Kn(n, r, e);
                });
              }) || this),
            (t._resolveLoadStart = function (e, t) {
              return i([e, t]);
            }),
            t
          );
        }
        return (
          (t.prototype.load = function (e, t) {
            return (t === void 0 && (t = {}), this._resolveLoadStart(e, t), this);
          }),
          (t.load = function (e, n) {
            return (n === void 0 && (n = {}), new t().load(e, n));
          }),
          (t.standalone = function (e, n) {
            return t.load({ writeKey: e }, n).then(function (e) {
              return e[0];
            });
          }),
          t
        );
      })(zt)));
  }),
  Zn,
  Qn = e(() => {
    Zn = (function () {
      function e() {}
      return (
        (e.load = function () {
          return Promise.reject(Error(`AnalyticsNode is not available in browsers.`));
        }),
        e
      );
    })();
  });
e(() => {
  (gn(), Xn(), Qn(), j(), $e(), tt(), Ot(), D(), H(), dn(), Fe());
})();
export {
  Z as Analytics,
  Yn as AnalyticsBrowser,
  Zn as AnalyticsNode,
  M as Context,
  d as ContextCancelation,
  Qe as EventFactory,
  Dt as Group,
  V as UniversalStorage,
  W as User,
  te as getGlobalAnalytics,
  et as isDestinationPluginWithAddMiddleware,
  Pe as resolveAliasArguments,
  Me as resolveArguments,
  Ne as resolvePageArguments,
  P as resolveUserArguments,
  ln as segmentio,
};
//# sourceMappingURL=pkg.js.map
