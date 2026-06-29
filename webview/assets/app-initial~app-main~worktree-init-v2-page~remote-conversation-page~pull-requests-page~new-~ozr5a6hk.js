import { n as e, s as t, t as n } from "./rolldown-runtime.js";
import {
  Ac as r,
  J as i,
  Lc as a,
  Ol as o,
  Sc as s,
  Tt as c,
  Uc as l,
  Vc as u,
  Z as d,
  kc as f,
  kl as p,
  mc as m,
  q as h,
  sc as g,
  tc as _,
  wc as v,
  wt as y,
  zc as b,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Bu as x,
  Hu as S,
  Ln as C,
  Uu as w,
  ir as ee,
  lr as te,
  rS as T,
  zu as ne,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function re() {
  let e = D?.H;
  return e != null && e.useState !== e.useReducer;
}
var E,
  D,
  ie = e(() => {
    if (
      ((E = t(p(), 1)), (D = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE), !D)
    )
      throw Error(`Missing react shared internals. Check version.`);
  });
function ae(e) {
  let t = (0, se.c)(4),
    n = (0, O.useRef)(e),
    r,
    i;
  (t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : ((r = () => {
        n.current = e;
      }),
      (i = [e]),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i)),
    (0, O.useInsertionEffect)(r, i));
  let a;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (...e) => {
          let t = e;
          re() && oe();
          let { current: r } = n;
          return r(...t);
        }),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function oe() {
  throw Error(`A function wrapped in useStableCallback can't be called during rendering.`);
}
var se,
  O,
  ce = e(() => {
    ((se = o()), (O = t(p(), 1)), ie());
  });
function le() {
  let e = (0, k.c)(3),
    t = g(w),
    n;
  return (
    e[0] !== t.data || e[1] !== t.isLoading
      ? ((n = { data: t.data, isLoading: t.isLoading }),
        (e[0] = t.data),
        (e[1] = t.isLoading),
        (e[2] = n))
      : (n = e[2]),
    n
  );
}
var k,
  A = e(() => {
    ((k = o()), _(), S());
  });
function j() {
  let e = (0, M.c)(7),
    { data: t, isLoading: n } = le(),
    r,
    i;
  if (e[0] !== t?.platform) {
    let n = ne(t?.platform);
    ((r = n), (i = ue(n)), (e[0] = t?.platform), (e[1] = r), (e[2] = i));
  } else ((r = e[1]), (i = e[2]));
  let a;
  return (
    e[3] !== n || e[4] !== r || e[5] !== i
      ? ((a = { platform: r, modifierSymbol: i, isLoading: n }),
        (e[3] = n),
        (e[4] = r),
        (e[5] = i),
        (e[6] = a))
      : (a = e[6]),
    a
  );
}
function ue(e) {
  return e === `macOS` ? `⌘` : `^`;
}
var M,
  N = e(() => {
    ((M = o()), A(), x());
  }),
  P = n((e, t) => {
    var n = a();
    t.exports = (function () {
      try {
        var e = n(Object, `defineProperty`);
        return (e({}, ``, {}), e);
      } catch {}
    })();
  });
function F(e, t) {
  let n = t.trim();
  if (n.length === 0) return 0;
  let r = de(n),
    i = I(n) ? me(e) : e,
    a = r.matchingDegree(i);
  if (a === q) return 0;
  let o = a * 10 - e.length;
  return o <= 0 ? 1 : o;
}
function de(e) {
  let t = I(e),
    n = t ? fe(e) : `*${e}`,
    r = pe(e);
  return new Te(
    new X(n, `IGNORE_CASE`, Y.join(``)),
    t && e !== r ? new X(r, `IGNORE_CASE`, Y.join(``)) : null,
  );
}
function fe(e) {
  let t = `*${e}`;
  for (let e of Y) t = t.split(e).join(`*${J}*`);
  return t;
}
function pe(e) {
  let t = -1;
  for (let n of Y) {
    let r = e.lastIndexOf(n);
    r >= 0 && r < e.length - 1 && (t = Math.max(t, r));
  }
  return e.slice(t + 1);
}
function me(e) {
  let t = e;
  for (let e of Y) t = t.split(e).join(J);
  return t;
}
function I(e) {
  for (let t of Y) if (e.includes(t)) return !0;
  return !1;
}
function L(e, t) {
  return t.length === 0 ? e : t[0].startOffset === 0 ? e + we : e;
}
function he(e) {
  return (
    e.trim().length === 0 ||
    e === `_` ||
    e === `-` ||
    e === `:` ||
    e === `+` ||
    e === `.` ||
    e === `/` ||
    e === `\\`
  );
}
function ge(e, t) {
  return t < e.length && G(e[t]) ? t + 1 : _e(e, t);
}
function _e(e, t) {
  for (let n = t + 1; n <= e.length; n += 1) {
    if (n >= e.length) return e.length + 1;
    if (R(e, n)) return n;
  }
  return e.length + 1;
}
function R(e, t) {
  if (t < 0 || t >= e.length) return !1;
  let n = e[t];
  if (!K(n)) return !1;
  if (t === 0) return !0;
  let r = e[t - 1];
  return !!(!K(r) || (U(n) && W(r)) || (G(n) && !G(r)));
}
function ve(e, t, n, r, i) {
  if (!i) {
    for (let i = n; i < r; i += 1) if (e[i] === t) return i;
    return -1;
  }
  let a = t.toLowerCase(),
    o = t.toUpperCase();
  for (let t = n; t < r; t += 1) {
    let n = e[t];
    if (n === a || n === o) return t;
  }
  return -1;
}
function z(e) {
  return e === ` ` || e === `*`;
}
function B(e, t, n, r) {
  for (let i = n; i < r; i += 1) if (t.includes(e[i])) return i;
  return -1;
}
function V(e, t, n, r) {
  for (let i = n; i < r; i += 1) if (e[i] === t) return i;
  return -1;
}
function ye(e, t, n, r) {
  let i = e.toLowerCase(),
    a = t.toLowerCase(),
    o = i.indexOf(a, n);
  return o < 0 || o + t.length > r ? -1 : o;
}
function be(e, t, n, r) {
  return t + n > e.length ? !1 : e.slice(t, t + n).toLowerCase() === r.toLowerCase();
}
function xe(e) {
  let t = ``;
  for (let n of e) n !== `*` && (t += n);
  return t;
}
function H(e, t, n) {
  if (e.length === 0) return [{ startOffset: t, endOffset: t + n }];
  let r = e[e.length - 1];
  return (
    r.startOffset === t + n
      ? (e[e.length - 1] = { startOffset: t, endOffset: r.endOffset })
      : e.push({ startOffset: t, endOffset: t + n }),
    e
  );
}
function Se(e) {
  return e.length === 1 && e.charCodeAt(0) <= 127;
}
function U(e) {
  return e.toUpperCase() === e && e.toLowerCase() !== e;
}
function W(e) {
  return e.toLowerCase() === e && e.toUpperCase() !== e;
}
function G(e) {
  return e >= `0` && e <= `9`;
}
function K(e) {
  return /[a-z0-9]/i.test(e);
}
var Ce,
  q,
  J,
  Y,
  we,
  Te,
  X,
  Ee = e(() => {
    ((Ce = 100),
      (q = -2147483648),
      (J = `\0`),
      (Y = [`/`, `\\`]),
      (we = 1e4),
      (Te = class {
        mainMatcher;
        fallbackMatcher;
        constructor(e, t) {
          ((this.mainMatcher = e), (this.fallbackMatcher = t));
        }
        matchingDegree(e) {
          let t = this.mainMatcher.match(e);
          if (t != null) return L(this.mainMatcher.matchingDegree(e, !1, t), t);
          if (this.fallbackMatcher == null) return q;
          let n = this.fallbackMatcher.match(e);
          return n == null ? q : L(this.fallbackMatcher.matchingDegree(e, !1, n), n);
        }
      }),
      (X = class {
        myPattern;
        isLowerCase;
        isUpperCase;
        isWordSeparator;
        toUpperCase;
        toLowerCase;
        hardSeparators;
        matchingMode;
        mixedCase;
        hasSeparators;
        hasDots;
        meaningfulCharacters;
        minNameLength;
        constructor(e, t, n) {
          let r = e.endsWith(`* `) ? e.slice(0, -2) : e;
          ((this.myPattern = Array.from(r)),
            (this.isLowerCase = Array.from({ length: this.myPattern.length }, () => !1)),
            (this.isUpperCase = Array.from({ length: this.myPattern.length }, () => !1)),
            (this.isWordSeparator = Array.from({ length: this.myPattern.length }, () => !1)),
            (this.toUpperCase = Array.from({ length: this.myPattern.length }, () => ``)),
            (this.toLowerCase = Array.from({ length: this.myPattern.length }, () => ``)),
            (this.hardSeparators = Array.from(n)),
            (this.matchingMode = t));
          let i = [],
            a = !1,
            o = !1,
            s = !1,
            c = !1,
            l = !1;
          for (let e = 0; e < this.myPattern.length; e += 1) {
            let t = this.myPattern[e],
              n = he(t),
              r = U(t),
              u = W(t),
              d = t.toUpperCase(),
              f = t.toLowerCase();
            (u && (o = !0),
              t === `.` && (c = !0),
              a && r && (s = !0),
              z(t) || ((a = !0), i.push(f), i.push(d)),
              a && n && (l = !0),
              (this.isWordSeparator[e] = n),
              (this.isUpperCase[e] = r),
              (this.isLowerCase[e] = u),
              (this.toUpperCase[e] = d),
              (this.toLowerCase[e] = f));
          }
          ((this.hasDots = c),
            (this.mixedCase = o && s),
            (this.hasSeparators = l),
            (this.meaningfulCharacters = i),
            (this.minNameLength = i.length / 2));
        }
        get pattern() {
          return this.myPattern.join(``);
        }
        matchingDegree(e, t = !1, n = this.match(e)) {
          if (n == null) return q;
          if (n.length === 0) return 0;
          let r = n[0],
            i = r.startOffset === 0,
            a = i && t,
            o = 0,
            s = -1,
            c = 0,
            l = 0,
            u = !1;
          for (let t of n)
            for (let n = t.startOffset; n < t.endOffset; n += 1) {
              let i = n === t.startOffset && t !== r,
                d = !1;
              for (; l <= n; ) (l === n ? (d = !0) : i && (c += 1), (l = ge(e, l)));
              let f = e[n];
              if (((s = ve(this.myPattern, f, s + 1, this.myPattern.length, !0)), s < 0)) break;
              (d && (u = f === this.myPattern[s] && this.isUpperCase[s]),
                (o += this.evaluateCaseMatching(a, s, u, n, i, d, f)));
            }
          let d = r.startOffset,
            f = B(e, this.hardSeparators, 0, d) >= 0,
            p = d === 0 || (R(e, d) && !R(e, d - 1)),
            m = n[n.length - 1].endOffset === e.length;
          return (p ? 1e3 : 0) + o - n.length + -c * 10 + (f ? 0 : 2) + (i ? 1 : 0) + (m ? 1 : 0);
        }
        match(e) {
          if (e.length < this.minNameLength) return null;
          if (this.myPattern.length > Ce) return this.matchBySubstring(e);
          let t = 0;
          for (let n = 0; n < e.length && t < this.meaningfulCharacters.length; n += 1) {
            let r = e[n];
            (r === this.meaningfulCharacters[t] || r === this.meaningfulCharacters[t + 1]) &&
              (t += 2);
          }
          if (t < this.minNameLength * 2) return null;
          let n = this.matchWildcards(e, 0, 0);
          return n == null ? null : n.reverse();
        }
        evaluateCaseMatching(e, t, n, r, i, a, o) {
          return i && a && this.isLowerCase[t]
            ? -10
            : o === this.myPattern[t]
              ? this.isUpperCase[t]
                ? 50
                : r === 0 && e
                  ? 150
                  : a
                    ? 1
                    : 0
              : a || (this.isLowerCase[t] && n)
                ? -1
                : 0;
        }
        matchBySubstring(e) {
          let t = this.isPatternChar(0, `*`),
            n = xe(this.myPattern);
          if (e.length < n.length) return null;
          if (t) {
            let t = ye(e, n, 0, e.length);
            return t >= 0 ? [{ startOffset: t, endOffset: t + n.length }] : null;
          }
          return be(e, 0, n.length, n) ? [{ startOffset: 0, endOffset: n.length }] : null;
        }
        matchWildcards(e, t, n) {
          let r = t;
          if (n < 0) return null;
          if (!this.isWildcard(r))
            return r === this.myPattern.length ? [] : this.matchFragment(e, r, n);
          do r += 1;
          while (this.isWildcard(r));
          if (r === this.myPattern.length) {
            if (
              this.isTrailingSpacePattern() &&
              n !== e.length &&
              (r < 2 || !this.isUpperCaseOrDigit(r - 2))
            ) {
              let t = e.indexOf(` `, n);
              return t >= 0 ? [{ startOffset: t, endOffset: t + 1 }] : null;
            }
            return [];
          }
          return this.matchSkippingWords(e, r, this.findNextPatternCharOccurrence(e, n, r), !0);
        }
        isTrailingSpacePattern() {
          return this.isPatternChar(this.myPattern.length - 1, ` `);
        }
        isUpperCaseOrDigit(e) {
          return this.isUpperCase[e] || G(this.myPattern[e]);
        }
        matchSkippingWords(e, t, n, r) {
          let i = n,
            a = 0;
          for (; i >= 0; ) {
            let n = this.seemsLikeFragmentStart(e, t, i) ? this.maxMatchingFragment(e, t, i) : 0;
            if (n > a || (i + n === e.length && this.isTrailingSpacePattern())) {
              this.isMiddleMatch(e, t, i) || (a = n);
              let r = this.matchInsideFragment(e, t, i, n);
              if (r != null) return r;
            }
            let o = this.findNextPatternCharOccurrence(e, i + 1, t);
            i = r ? o : this.checkForSpecialChars(e, i + 1, o, t);
          }
          return null;
        }
        findNextPatternCharOccurrence(e, t, n) {
          return !this.isPatternChar(n - 1, `*`) && !this.isWordSeparator[n]
            ? this.indexOfWordStart(e, n, t)
            : this.indexOfIgnoreCase(e, t, n);
        }
        checkForSpecialChars(e, t, n, r) {
          return n < 0 ||
            (!this.hasSeparators && !this.mixedCase && B(e, this.hardSeparators, t, n) !== -1) ||
            (this.hasDots && !this.isPatternChar(r - 1, `.`) && V(e, `.`, t, n) !== -1)
            ? -1
            : n;
        }
        seemsLikeFragmentStart(e, t, n) {
          return !this.isUpperCase[t] || U(e[n]) || R(e, n)
            ? !0
            : !this.mixedCase && this.matchingMode !== `MATCH_CASE`;
        }
        charEquals(e, t, n, r) {
          return e === n ? !0 : r ? this.toLowerCase[t] === n || this.toUpperCase[t] === n : !1;
        }
        matchFragment(e, t, n) {
          let r = this.maxMatchingFragment(e, t, n);
          return r === 0 ? null : this.matchInsideFragment(e, t, n, r);
        }
        maxMatchingFragment(e, t, n) {
          if (!this.isFirstCharMatching(e, n, t)) return 0;
          let r = 1,
            i = this.matchingMode !== `MATCH_CASE`;
          for (; n + r < e.length && t + r < this.myPattern.length; ) {
            let a = e[n + r];
            if (!this.charEquals(this.myPattern[t + r], t + r, a, i)) {
              if (this.isSkippingDigitBetweenPatternDigits(t + r, a)) return 0;
              break;
            }
            r += 1;
          }
          return r;
        }
        isSkippingDigitBetweenPatternDigits(e, t) {
          return G(this.myPattern[e]) && G(this.myPattern[e - 1]) && G(t);
        }
        matchInsideFragment(e, t, n, r) {
          let i = this.isMiddleMatch(e, t, n) ? 3 : 1;
          return (
            this.improveCamelHumps(e, t, n, r, i) ?? this.findLongestMatchingPrefix(e, t, n, r, i)
          );
        }
        isMiddleMatch(e, t, n) {
          return !this.isPatternChar(t - 1, `*`) || this.isWildcard(t + 1) || !K(e[n])
            ? !1
            : !R(e, n);
        }
        findLongestMatchingPrefix(e, t, n, r, i) {
          if (t + r >= this.myPattern.length) return [{ startOffset: n, endOffset: n + r }];
          let a = r;
          for (; a >= i || (a > 0 && this.isWildcard(t + a)); ) {
            let r = null;
            if (this.isWildcard(t + a)) r = this.matchWildcards(e, t + a, n + a);
            else {
              let i = this.findNextPatternCharOccurrence(e, n + a + 1, t + a);
              ((i = this.checkForSpecialChars(e, n + a, i, t + a)),
                i >= 0 && (r = this.matchSkippingWords(e, t + a, i, !1)));
            }
            if (r != null) return H(r, n, a);
            --a;
          }
          return null;
        }
        improveCamelHumps(e, t, n, r, i) {
          for (let a = i; a < r; a += 1)
            if (this.isUppercasePatternVsLowercaseNameChar(e, t + a, n + a)) {
              let r = this.findUppercaseMatchFurther(e, t + a, n + a);
              if (r != null) return H(r, n, a);
            }
          return null;
        }
        isUppercasePatternVsLowercaseNameChar(e, t, n) {
          return this.isUpperCase[t] && this.myPattern[t] !== e[n];
        }
        findUppercaseMatchFurther(e, t, n) {
          let r = this.indexOfWordStart(e, t, n);
          return this.matchWildcards(e, t, r);
        }
        isFirstCharMatching(e, t, n) {
          if (t >= e.length) return !1;
          let r = this.matchingMode !== `MATCH_CASE`,
            i = this.myPattern[n];
          return this.charEquals(i, n, e[t], r)
            ? this.matchingMode === `FIRST_LETTER` &&
              (n === 0 || (n === 1 && this.isWildcard(0))) &&
              this.hasCase(n)
              ? this.isUpperCase[n] === U(e[0])
              : !0
            : !1;
        }
        hasCase(e) {
          return this.isUpperCase[e] || this.isLowerCase[e];
        }
        isWildcard(e) {
          return e >= 0 && e < this.myPattern.length && z(this.myPattern[e]);
        }
        isPatternChar(e, t) {
          return e < 0 || e >= this.myPattern.length ? !1 : this.myPattern[e] === t;
        }
        indexOfWordStart(e, t, n) {
          let r = this.myPattern[t];
          if (
            n >= e.length ||
            (this.mixedCase && this.isLowerCase[t] && !(t > 0 && this.isWordSeparator[t - 1]))
          )
            return -1;
          let i = n,
            a = !K(r);
          for (;;) {
            if (((i = this.indexOfIgnoreCase(e, i, t)), i < 0)) return -1;
            if (a || R(e, i)) return i;
            i += 1;
          }
        }
        indexOfIgnoreCase(e, t, n) {
          let r = this.myPattern[n];
          if (Se(r)) {
            let r = this.toUpperCase[n],
              i = this.toLowerCase[n];
            for (let n = t; n < e.length; n += 1) {
              let t = e[n];
              if (t === r || t === i) return n;
            }
            return -1;
          }
          return V(e, r, t, e.length);
        }
      }));
  }),
  De = n((e, t) => {
    var n = u(),
      r = v(),
      i = f(),
      a = n ? n.isConcatSpreadable : void 0;
    function o(e) {
      return i(e) || r(e) || !!(a && e && e[a]);
    }
    t.exports = o;
  }),
  Oe = n((e, t) => {
    var n = r(),
      i = De();
    function a(e, t, r, o, s) {
      var c = -1,
        l = e.length;
      for (r ||= i, s ||= []; ++c < l; ) {
        var u = e[c];
        t > 0 && r(u) ? (t > 1 ? a(u, t - 1, r, o, s) : n(s, u)) : o || (s[s.length] = u);
      }
      return s;
    }
    t.exports = a;
  }),
  ke = n((e, t) => {
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
  Ae = n((e, t) => {
    var n = ke(),
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
  je = n((e, t) => {
    function n(e) {
      return function () {
        return e;
      };
    }
    t.exports = n;
  }),
  Me = n((e, t) => {
    var n = je(),
      r = P(),
      i = T();
    t.exports = r
      ? function (e, t) {
          return r(e, `toString`, { configurable: !0, enumerable: !1, value: n(t), writable: !0 });
        }
      : i;
  }),
  Ne = n((e, t) => {
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
  Pe = n((e, t) => {
    var n = Me();
    t.exports = Ne()(n);
  }),
  Fe = n((e, t) => {
    var n = T(),
      r = Ae(),
      i = Pe();
    function a(e, t) {
      return i(r(e, t, n), e + ``);
    }
    t.exports = a;
  }),
  Ie = n((e, t) => {
    var n = l(),
      r = m(),
      i = s(),
      a = b();
    function o(e, t, o) {
      if (!a(o)) return !1;
      var s = typeof t;
      return (s == `number` ? r(o) && i(t, o.length) : s == `string` && t in o) ? n(o[t], e) : !1;
    }
    t.exports = o;
  }),
  Z = n((e, t) => {
    var n = Oe(),
      r = C(),
      i = Fe(),
      a = Ie();
    t.exports = i(function (e, t) {
      if (e == null) return [];
      var i = t.length;
      return (
        i > 1 && a(e, t[0], t[1]) ? (t = []) : i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]),
        r(e, n(t, 1), [])
      );
    });
  });
function Le(e) {
  let t = (0, Q.c)(14),
    { hostId: n, includeDirectories: r, onFiles: i, query: a, roots: o } = e,
    s = r === void 0 ? !1 : r,
    { platform: c } = j(),
    l;
  t[0] !== s || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((l = (e) => {
        o != null &&
          i?.({
            files: ze({
              files: e.files,
              includeDirectories: s,
              isWindowsHost: c === `windows`,
              query: e.query,
              roots: o,
            }),
            query: e.query,
          });
      }),
      (t[0] = s),
      (t[1] = i),
      (t[2] = c),
      (t[3] = o),
      (t[4] = l))
    : (l = t[4]);
  let { response: u, isLoading: d } = Ge(n, o, a, ae(l)),
    f = a.trim(),
    p = u != null && f.length > 0 ? u : null,
    m;
  bb0: {
    if (p == null || o == null) {
      m = null;
      break bb0;
    }
    let e = c === `windows`,
      n;
    (t[5] !== s || t[6] !== o || t[7] !== e || t[8] !== p.files || t[9] !== p.query
      ? ((n = ze({
          files: p.files,
          includeDirectories: s,
          isWindowsHost: e,
          query: p.query,
          roots: o,
        })),
        (t[5] = s),
        (t[6] = o),
        (t[7] = e),
        (t[8] = p.files),
        (t[9] = p.query),
        (t[10] = n))
      : (n = t[10]),
      (m = n));
  }
  let h = m,
    g;
  return (
    t[11] !== h || t[12] !== d
      ? ((g = { files: h, isLoading: d }), (t[11] = h), (t[12] = d), (t[13] = g))
      : (g = t[13]),
    g
  );
}
function Re(e, t) {
  return (
    (e.match_type === `file` || (t && e.match_type === `directory`)) &&
    !e.path.split(/[\\/]+/).some((e) => We.has(e))
  );
}
function ze({ files: e, includeDirectories: t, isWindowsHost: n, query: r, roots: i }) {
  return Ve(
    e.filter((e) => Re(e, t)).map((e) => Be(e, i.length > 1, n)),
    r,
  );
}
function Be({ file_name: e, match_type: t, path: n, root: r }, a, o) {
  let s = h({ root: r, relativePath: n, includeWorkspaceRootLabel: a }),
    c = s.lastIndexOf(`/`);
  return {
    label: e,
    matchType: t,
    path: a ? i(r, n, o) : s,
    relativePathWithoutFileName: s.substring(0, c),
    fsPath: i(r, n, o),
  };
}
function Ve(e, t) {
  let n = t.trim();
  return n.length === 0
    ? e
    : (0, Ue.default)(
        e.map((e, t) => ({ file: e, score: F(e.label, n), index: t })),
        [(e) => -e.score, (e) => e.file.label, (e) => e.index],
      ).map((e) => e.file);
}
function He(e) {
  c.warning(`Failed to close fuzzy file search session`, { safe: {}, sensitive: { error: e } });
}
var Q,
  Ue,
  $,
  We,
  Ge,
  Ke = e(() => {
    ((Q = o()),
      (Ue = t(Z(), 1)),
      ($ = t(p(), 1)),
      ee(),
      Ee(),
      N(),
      y(),
      d(),
      ce(),
      (We = new Set([
        `.git`,
        `.hg`,
        `.next`,
        `.pnpm-store`,
        `.svn`,
        `.turbo`,
        `.yarn`,
        `build`,
        `coverage`,
        `dist`,
        `node_modules`,
      ])),
      (Ge = (e, t, n, r) => {
        let i = (0, Q.c)(24),
          a = te(e),
          [o, s] = (0, $.useState)(null),
          [l, u] = (0, $.useState)(!1),
          d = (0, $.useRef)(null),
          f = (0, $.useRef)(null),
          p = t != null && t.length > 0,
          m;
        i[0] === t ? (m = i[1]) : ((m = t?.join(`\0`) ?? ``), (i[0] = t), (i[1] = m));
        let h = m,
          g;
        i[2] !== a || i[3] !== r || i[4] !== t
          ? ((g = async () => {
              if (t == null || t.length === 0) return null;
              if (d.current != null) return d.current;
              let e = {};
              f.current = e;
              let n = a
                .createFuzzyFileSearchSession({
                  roots: t,
                  onUpdated: (t) => {
                    if (f.current !== e) return;
                    let n = { query: t.query, files: t.files };
                    (s(n), r(n), u(!0));
                  },
                  onCompleted: () => {
                    f.current === e && u(!1);
                  },
                })
                .catch((t) => {
                  throw (
                    d.current === n && (d.current = null), f.current === e && (f.current = null), t
                  );
                });
              return ((d.current = n), n);
            }),
            (i[2] = a),
            (i[3] = r),
            (i[4] = t),
            (i[5] = g))
          : (g = i[5]);
        let _ = (0, $.useEffectEvent)(g),
          v;
        i[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((v = async () => {
              let e = d.current;
              e != null && ((d.current = null), (f.current = null), await (await e).stop());
            }),
            (i[6] = v))
          : (v = i[6]);
        let y = (0, $.useEffectEvent)(v),
          b;
        i[7] === y
          ? (b = i[8])
          : ((b = () => (
              s(null),
              u(!1),
              () => {
                y().catch(He);
              }
            )),
            (i[7] = y),
            (i[8] = b));
        let x;
        (i[9] !== a || i[10] !== h
          ? ((x = [a, h]), (i[9] = a), (i[10] = h), (i[11] = x))
          : (x = i[11]),
          (0, $.useEffect)(b, x));
        let S;
        i[12] !== _ || i[13] !== p || i[14] !== n
          ? ((S = () => {
              let e = !1;
              return (
                (async () => {
                  if (!p || n.length === 0) {
                    (s(null), u(!1));
                    return;
                  }
                  try {
                    u(!0);
                    let t = await _();
                    if (e || t == null) return;
                    await t.update(n);
                  } catch (t) {
                    let n = t;
                    e ||
                      (c.error(`Error fetching fuzzy file search`, {
                        safe: {},
                        sensitive: { error: n },
                      }),
                      u(!1));
                  }
                })(),
                () => {
                  e = !0;
                }
              );
            }),
            (i[12] = _),
            (i[13] = p),
            (i[14] = n),
            (i[15] = S))
          : (S = i[15]);
        let C;
        (i[16] !== p || i[17] !== a || i[18] !== n || i[19] !== h
          ? ((C = [p, a, n, h]), (i[16] = p), (i[17] = a), (i[18] = n), (i[19] = h), (i[20] = C))
          : (C = i[20]),
          (0, $.useEffect)(S, C));
        let w;
        return (
          i[21] !== l || i[22] !== o
            ? ((w = { response: o, isLoading: l }), (i[21] = l), (i[22] = o), (i[23] = w))
            : (w = i[23]),
          w
        );
      }));
  });
export {
  ae as _,
  Fe as a,
  Oe as c,
  P as d,
  N as f,
  ce as g,
  le as h,
  Ie as i,
  Ee as l,
  A as m,
  Le as n,
  Pe as o,
  j as p,
  Z as r,
  Ae as s,
  Ke as t,
  F as u,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js.map
