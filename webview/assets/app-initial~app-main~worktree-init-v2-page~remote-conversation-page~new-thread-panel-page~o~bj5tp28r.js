import { n as e, s as t, t as n } from "./rolldown-runtime.js";
import {
  $s as r,
  Bc as i,
  Bt as a,
  Dt as o,
  El as s,
  Et as c,
  Ft as l,
  Ic as u,
  Jc as d,
  Pc as f,
  Pt as p,
  Rc as m,
  Rt as h,
  Sl as g,
  St as ee,
  Tc as _,
  Tl as v,
  Xs as y,
  _c as b,
  bt as x,
  cl as S,
  ct as C,
  di as te,
  dt as ne,
  ec as re,
  ft as w,
  it as ie,
  lc as T,
  nc as ae,
  pt as oe,
  rt as se,
  st as E,
  tc as ce,
  vl as le,
  vt as ue,
  wc as de,
  yc as fe,
  zt as pe,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  ot as me,
  st as D,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  My as O,
  P as he,
  Sx as k,
  as as ge,
  ts as _e,
  yx as A,
  z as ve,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  ru as ye,
  tr as j,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  A as be,
  a as M,
  i as N,
  j as P,
  n as F,
  o as I,
  r as L,
  t as xe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  ln as R,
  un as Se,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
var z = n((e, t) => {
    var n = u(),
      r = fe(),
      i = de(),
      a = n ? n.isConcatSpreadable : void 0;
    function o(e) {
      return i(e) || r(e) || !!(a && e && e[a]);
    }
    t.exports = o;
  }),
  B = n((e, t) => {
    var n = _(),
      r = z();
    function i(e, t, a, o, s) {
      var c = -1,
        l = e.length;
      for (a ||= r, s ||= []; ++c < l;) {
        var u = e[c];
        t > 0 && a(u) ? (t > 1 ? i(u, t - 1, a, o, s) : n(s, u)) : o || (s[s.length] = u);
      }
      return s;
    }
    t.exports = i;
  }),
  V = n((e, t) => {
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
  Ce = n((e, t) => {
    var n = V(),
      r = Math.max;
    function i(e, t, i) {
      return (
        (t = r(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s); ++o < s;)
            c[o] = a[t + o];
          o = -1;
          for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
          return ((l[t] = i(c)), n(e, this, l));
        }
      );
    }
    t.exports = i;
  }),
  we = n((e, t) => {
    function n(e) {
      return function () {
        return e;
      };
    }
    t.exports = n;
  }),
  H = n((e, t) => {
    var n = we(),
      r = j(),
      i = O();
    t.exports = r
      ? function (e, t) {
          return r(e, `toString`, { configurable: !0, enumerable: !1, value: n(t), writable: !0 });
        }
      : i;
  }),
  Te = n((e, t) => {
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
  Ee = n((e, t) => {
    var n = H();
    t.exports = Te()(n);
  }),
  U = n((e, t) => {
    var n = O(),
      r = Ce(),
      i = Ee();
    function a(e, t) {
      return i(r(e, t, n), e + ``);
    }
    t.exports = a;
  }),
  De = n((e, t) => {
    var n = m(),
      r = T(),
      i = b(),
      a = f();
    function o(e, t, o) {
      if (!a(o)) return !1;
      var s = typeof t;
      return (s == `number` ? r(o) && i(t, o.length) : s == `string` && t in o) ? n(o[t], e) : !1;
    }
    t.exports = o;
  }),
  W = n((e, t) => {
    var n = B(),
      r = ye(),
      i = U(),
      a = De();
    t.exports = i(function (e, t) {
      if (e == null) return [];
      var i = t.length;
      return (
        i > 1 && a(e, t[0], t[1]) ? (t = []) : i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]),
        r(e, n(t, 1), [])
      );
    });
  });
function Oe(e) {
  let t = (0, K.c)(14),
    { hostId: n, includeDirectories: r, onFiles: i, query: a, roots: o } = e,
    s = r === void 0 ? !1 : r,
    { platform: c } = P(),
    l;
  t[0] !== s || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((l = (e) => {
        o != null &&
          i?.({
            files: G({
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
  let { response: u, isLoading: d } = X(n, o, a, D(l)),
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
      ? ((n = G({
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
function ke(e, t) {
  return (
    (e.match_type === `file` || (t && e.match_type === `directory`)) &&
    !e.path.split(/[\\/]+/).some((e) => Y.has(e))
  );
}
function G({ files: e, includeDirectories: t, isWindowsHost: n, query: r, roots: i }) {
  return je(
    e.filter((e) => ke(e, t)).map((e) => Ae(e, i.length > 1, n)),
    r,
  );
}
function Ae({ file_name: e, match_type: t, path: n, root: r }, i, a) {
  let o = se({ root: r, relativePath: n, includeWorkspaceRootLabel: i }),
    s = o.lastIndexOf(`/`);
  return {
    label: e,
    matchType: t,
    path: i ? ie(r, n, a) : o,
    relativePathWithoutFileName: o.substring(0, s),
    fsPath: ie(r, n, a),
  };
}
function je(e, t) {
  let n = t.trim();
  return n.length === 0
    ? e
    : (0, q.default)(
        e.map((e, t) => ({ file: e, score: Se(e.label, n), index: t })),
        [(e) => -e.score, (e) => e.file.label, (e) => e.index],
      ).map((e) => e.file);
}
function Me(e) {
  l.warning(`Failed to close fuzzy file search session`, { safe: {}, sensitive: { error: e } });
}
var K,
  q,
  J,
  Y,
  X,
  Ne = e(() => {
    ((K = v()),
      (q = t(W(), 1)),
      (J = t(s(), 1)),
      he(),
      R(),
      be(),
      p(),
      E(),
      me(),
      (Y = new Set([
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
      (X = (e, t, n, r) => {
        let i = (0, K.c)(24),
          a = ve(e),
          [o, s] = (0, J.useState)(null),
          [c, u] = (0, J.useState)(!1),
          d = (0, J.useRef)(null),
          f = (0, J.useRef)(null),
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
        let ee = (0, J.useEffectEvent)(g),
          _;
        i[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((_ = async () => {
              let e = d.current;
              e != null && ((d.current = null), (f.current = null), await (await e).stop());
            }),
            (i[6] = _))
          : (_ = i[6]);
        let v = (0, J.useEffectEvent)(_),
          y;
        i[7] === v
          ? (y = i[8])
          : ((y = () => (
              s(null),
              u(!1),
              () => {
                v().catch(Me);
              }
            )),
            (i[7] = v),
            (i[8] = y));
        let b;
        (i[9] !== a || i[10] !== h
          ? ((b = [a, h]), (i[9] = a), (i[10] = h), (i[11] = b))
          : (b = i[11]),
          (0, J.useEffect)(y, b));
        let x;
        i[12] !== ee || i[13] !== p || i[14] !== n
          ? ((x = () => {
              let e = !1;
              return (
                (async () => {
                  if (!p || n.length === 0) {
                    (s(null), u(!1));
                    return;
                  }
                  try {
                    u(!0);
                    let t = await ee();
                    if (e || t == null) return;
                    await t.update(n);
                  } catch (t) {
                    let n = t;
                    e ||
                      (l.error(`Error fetching fuzzy file search`, {
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
            (i[12] = ee),
            (i[13] = p),
            (i[14] = n),
            (i[15] = x))
          : (x = i[15]);
        let S;
        (i[16] !== p || i[17] !== a || i[18] !== n || i[19] !== h
          ? ((S = [p, a, n, h]), (i[16] = p), (i[17] = a), (i[18] = n), (i[19] = h), (i[20] = S))
          : (S = i[20]),
          (0, J.useEffect)(x, S));
        let C;
        return (
          i[21] !== c || i[22] !== o
            ? ((C = { response: o, isLoading: c }), (i[21] = c), (i[22] = o), (i[23] = C))
            : (C = i[23]),
          C
        );
      }));
  });
function Pe(e) {
  return [null, ...e.filter((e) => e.length > 0)];
}
var Fe = e(() => {});
function Ie(e) {
  return e.map((e) => ({ displayPath: e.path, path: e.path }));
}
var Le = e(() => {});
function Re(e, t) {
  return Ge(e, t)
    ? e
    : {
        expandedPaths: t.expandedPaths,
        scrollTop: t.scrollTop,
        searchQuery: e.searchQuery,
        selectedPath: t.selectedPath,
      };
}
function ze(e, t) {
  return e.searchQuery === t
    ? e
    : {
        expandedPaths: e.expandedPaths,
        scrollTop: e.scrollTop,
        searchQuery: t,
        selectedPath: e.selectedPath,
      };
}
function Be(e, t) {
  if (t == null) return e;
  let n = He(e.expandedPaths, t);
  return e.selectedPath === t && n === e.expandedPaths
    ? e
    : { expandedPaths: n, scrollTop: e.scrollTop, searchQuery: e.searchQuery, selectedPath: t };
}
function Ve({ filePath: e, root: t }) {
  let n = w(e).replace(/\/+$/, ``);
  if (n.length === 0) return null;
  if (!C(n)) return n;
  let r = w(t).replace(/\/+$/, ``),
    i = ne(n).replace(/\/+$/, ``),
    a = ne(r).replace(/\/+$/, ``);
  return a.length === 0 || !i.startsWith(`${a}/`) ? null : n.slice(r.length + 1);
}
function He(e, t) {
  let n = e;
  for (let r of We(t)) n.includes(r) || (n === e && (n = [...e]), n.push(r));
  return n;
}
function Ue(e, t, n) {
  return e ?? (t?.query === n ? t.files : null);
}
function We(e) {
  let t = e.split(`/`).filter(Boolean),
    n = [];
  for (let e = 1; e < t.length; e += 1) n.push(t.slice(0, e).join(`/`));
  return n;
}
function Ge(e, t) {
  return (
    e.scrollTop === t.scrollTop &&
    e.selectedPath === t.selectedPath &&
    Ke(e.expandedPaths, t.expandedPaths)
  );
}
function Ke(e, t) {
  return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
var qe = e(() => {
  E();
});
function Je(e) {
  let t = (0, Z.c)(108),
    {
      activeFilePath: n,
      autoFocusSearch: i,
      root: a,
      includeHidden: o,
      hostId: s,
      onSelectFile: c,
      refreshKey: l,
    } = e,
    u = ce(_e),
    d;
  t[0] !== s || t[1] !== o || t[2] !== a
    ? ((d = { hostId: s, includeHidden: o, root: a }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = a),
      (t[3] = d))
    : (d = t[3]);
  let f = r(lt, d),
    p = ae(f),
    m;
  t[4] !== s || t[5] !== o || t[6] !== a
    ? ((m = { hostId: s, includeHidden: o, root: a }),
      (t[4] = s),
      (t[5] = o),
      (t[6] = a),
      (t[7] = m))
    : (m = t[7]);
  let h = r(ut, m),
    g = ae(h),
    _ = ee(`open-file`),
    v;
  t[8] === a ? (v = t[9]) : ((v = te(a)), (t[8] = a), (t[9] = v));
  let y = v,
    b,
    x;
  t[10] !== n || t[11] !== p || t[12] !== a
    ? ((b = n == null ? null : Ve({ filePath: n, root: a })),
      (x = Be(p, b)),
      (t[10] = n),
      (t[11] = p),
      (t[12] = a),
      (t[13] = b),
      (t[14] = x))
    : ((b = t[13]), (x = t[14]));
  let S = x,
    [C, ne] = (0, Q.useState)(S.expandedPaths),
    [w, ie] = (0, Q.useState)(S.selectedPath),
    T = (0, Q.useRef)(C),
    se = (0, Q.useRef)(null),
    E = (0, Q.useRef)(null),
    le = (0, Q.useRef)(w),
    ue;
  t[15] !== C || t[16] !== s || t[17] !== o || t[18] !== l || t[19] !== a
    ? ((ue = { expandedItems: C, hostId: s, includeHidden: o, refreshKey: l, root: a }),
      (t[15] = C),
      (t[16] = s),
      (t[17] = o),
      (t[18] = l),
      (t[19] = a),
      (t[20] = ue))
    : (ue = t[20]);
  let { error: de, files: fe, isEmpty: pe, isLoading: me } = re(ft, ue),
    O;
  t[21] === a ? (O = t[22]) : ((O = [a]), (t[21] = a), (t[22] = O));
  let he = O,
    k;
  t[23] !== h || t[24] !== u
    ? ((k = (e) => {
        let { files: t, query: n } = e;
        n.trim().length !== 0 && u.set(h, { files: t, query: n });
      }),
      (t[23] = h),
      (t[24] = u),
      (t[25] = k))
    : (k = t[25]);
  let ge = D(k),
    A;
  t[26] !== ge || t[27] !== s || t[28] !== p.searchQuery || t[29] !== he
    ? ((A = { hostId: s, onFiles: ge, query: p.searchQuery, roots: he }),
      (t[26] = ge),
      (t[27] = s),
      (t[28] = p.searchQuery),
      (t[29] = he),
      (t[30] = A))
    : (A = t[30]);
  let { files: ve, isLoading: ye } = Oe(A),
    j;
  t[31] === p.searchQuery
    ? (j = t[32])
    : ((j = p.searchQuery.trim()), (t[31] = p.searchQuery), (t[32] = j));
  let be = j,
    M;
  t[33] !== g || t[34] !== p.searchQuery || t[35] !== ve
    ? ((M = Ue(ve, g, p.searchQuery)),
      (t[33] = g),
      (t[34] = p.searchQuery),
      (t[35] = ve),
      (t[36] = M))
    : (M = t[36]);
  let N = M,
    P;
  t[37] !== y || t[38] !== c || t[39] !== _ || t[40] !== a
    ? ((P = (e, t) => {
        if (c != null) {
          c(oe(a, e), t);
          return;
        }
        _.mutate({ cwd: y, path: e });
      }),
      (t[37] = y),
      (t[38] = c),
      (t[39] = _),
      (t[40] = a),
      (t[41] = P))
    : (P = t[41]);
  let F = D(P),
    I;
  t[42] === F
    ? (I = t[43])
    : ((I = (e) => {
        Qe(e, (e) => {
          F(e, { isPreview: !0 });
        });
      }),
      (t[42] = F),
      (t[43] = I));
  let L = D(I),
    R;
  t[44] === F
    ? (R = t[45])
    : ((R = (e) => {
        F(e, { isPreview: !1 });
      }),
      (t[44] = F),
      (t[45] = R));
  let Se = D(R),
    z;
  t[46] !== h || t[47] !== p.searchQuery || t[48] !== u || t[49] !== F || t[50] !== N
    ? ((z = (e) => {
        (N != null && u.set(h, { files: N, query: p.searchQuery }), F(e, { isPreview: !0 }));
      }),
      (t[46] = h),
      (t[47] = p.searchQuery),
      (t[48] = u),
      (t[49] = F),
      (t[50] = N),
      (t[51] = z))
    : (z = t[51]);
  let B = D(z),
    V;
  t[52] === F
    ? (V = t[53])
    : ((V = (e) => {
        F(e, { isPreview: !1 });
      }),
      (t[52] = F),
      (t[53] = V));
  let Ce = D(V),
    we;
  t[54] !== f || t[55] !== u
    ? ((we = () => {
        let e = se.current;
        e != null && ((se.current = null), u.set(f, (t) => Re(t, e)));
      }),
      (t[54] = f),
      (t[55] = u),
      (t[56] = we))
    : (we = t[56]);
  let H = D(we),
    Te;
  t[57] !== f || t[58] !== u
    ? ((Te = (e) => {
        u.set(f, (t) => ze(t, e));
      }),
      (t[57] = f),
      (t[58] = u),
      (t[59] = Te))
    : (Te = t[59]);
  let Ee = D(Te),
    U;
  t[60] === H
    ? (U = t[61])
    : ((U = (e) => {
        ((se.current = e),
          E.current != null && window.clearTimeout(E.current),
          (E.current = window.setTimeout(() => {
            ((E.current = null), H());
          }, st)));
      }),
      (t[60] = H),
      (t[61] = U));
  let De = D(U),
    W;
  t[62] === De
    ? (W = t[63])
    : ((W = (e) => {
        (it(T.current, e.expandedPaths) || ((T.current = e.expandedPaths), ne(e.expandedPaths)),
          le.current !== e.selectedPath && ((le.current = e.selectedPath), ie(e.selectedPath)),
          De(e));
      }),
      (t[62] = De),
      (t[63] = W));
  let ke = D(W),
    G,
    Ae;
  (t[64] !== b || t[65] !== f || t[66] !== u
    ? ((G = () => {
        if (b == null) return;
        let e = He(T.current, b);
        (it(T.current, e) || ((T.current = e), ne(e)),
          le.current !== b && ((le.current = b), ie(b)),
          (se.current = null),
          E.current != null && (window.clearTimeout(E.current), (E.current = null)),
          u.set(f, (e) => Be(e, b)));
      }),
      (Ae = [b, f, u]),
      (t[64] = b),
      (t[65] = f),
      (t[66] = u),
      (t[67] = G),
      (t[68] = Ae))
    : ((G = t[67]), (Ae = t[68])),
    (0, Q.useEffect)(G, Ae));
  let je, Me;
  (t[69] !== C || t[70] !== s || t[71] !== o || t[72] !== l || t[73] !== a || t[74] !== u
    ? ((je = () => {
        tt(u, { expandedItems: C, hostId: s, includeHidden: o, refreshKey: l, root: a });
      }),
      (Me = [C, s, o, l, a, u]),
      (t[69] = C),
      (t[70] = s),
      (t[71] = o),
      (t[72] = l),
      (t[73] = a),
      (t[74] = u),
      (t[75] = je),
      (t[76] = Me))
    : ((je = t[75]), (Me = t[76])),
    (0, Q.useEffect)(je, Me));
  let K, q;
  (t[77] === H
    ? ((K = t[78]), (q = t[79]))
    : ((K = () => () => {
        (E.current != null && (window.clearTimeout(E.current), (E.current = null)), H());
      }),
      (q = [H]),
      (t[77] = H),
      (t[78] = K),
      (t[79] = q)),
    (0, Q.useEffect)(K, q));
  let J;
  t[80] !== i || t[81] !== Ee || t[82] !== p.searchQuery
    ? ((J = (0, $.jsx)(`div`, {
        className: `shrink-0 px-2 pt-2 pb-px`,
        children: (0, $.jsx)(xe, {
          autoFocus: i,
          inputId: `workspace-directory-tree-search`,
          onQueryChange: Ee,
          searchQuery: p.searchQuery,
        }),
      })),
      (t[80] = i),
      (t[81] = Ee),
      (t[82] = p.searchQuery),
      (t[83] = J))
    : (J = t[83]);
  let Y;
  t[84] !== b ||
  t[85] !== de ||
  t[86] !== C ||
  t[87] !== fe ||
  t[88] !== y ||
  t[89] !== Se ||
  t[90] !== Ce ||
  t[91] !== B ||
  t[92] !== L ||
  t[93] !== ke ||
  t[94] !== s ||
  t[95] !== pe ||
  t[96] !== me ||
  t[97] !== ye ||
  t[98] !== p.scrollTop ||
  t[99] !== p.searchQuery ||
  t[100] !== a ||
  t[101] !== w ||
  t[102] !== be.length ||
  t[103] !== N
    ? ((Y = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children:
          be.length > 0
            ? (0, $.jsx)(Xe, {
                files: N,
                hostId: s,
                isLoading: ye,
                onOpenFile: Ce,
                onSelectFile: B,
                query: p.searchQuery,
                root: a,
              })
            : (0, $.jsx)(Ye, {
                error: de,
                files: fe,
                gitCwd: y,
                hostId: s,
                initialExpandedPaths: C,
                initialScrollTop: p.scrollTop,
                isEmpty: pe,
                isLoading: me,
                onOpenFile: Se,
                onSelectionChange: L,
                onStateChange: ke,
                revealSelectedPath: b != null,
                selectedPath: w,
              }),
      })),
      (t[84] = b),
      (t[85] = de),
      (t[86] = C),
      (t[87] = fe),
      (t[88] = y),
      (t[89] = Se),
      (t[90] = Ce),
      (t[91] = B),
      (t[92] = L),
      (t[93] = ke),
      (t[94] = s),
      (t[95] = pe),
      (t[96] = me),
      (t[97] = ye),
      (t[98] = p.scrollTop),
      (t[99] = p.searchQuery),
      (t[100] = a),
      (t[101] = w),
      (t[102] = be.length),
      (t[103] = N),
      (t[104] = Y))
    : (Y = t[104]);
  let X;
  return (
    t[105] !== J || t[106] !== Y
      ? ((X = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col`,
          children: [J, Y],
        })),
        (t[105] = J),
        (t[106] = Y),
        (t[107] = X))
      : (X = t[107]),
    X
  );
}
function Ye(e) {
  let t = (0, Z.c)(17),
    {
      error: n,
      files: r,
      gitCwd: i,
      hostId: a,
      initialExpandedPaths: o,
      initialScrollTop: s,
      isEmpty: c,
      isLoading: l,
      onOpenFile: u,
      onSelectionChange: d,
      onStateChange: f,
      revealSelectedPath: p,
      selectedPath: m,
    } = e;
  if (n != null) {
    let e;
    return (
      t[0] === n.message
        ? (e = t[1])
        : ((e = (0, $.jsx)(`div`, {
            className: `px-3 py-2 text-xs text-token-error-foreground`,
            children: n.message,
          })),
          (t[0] = n.message),
          (t[1] = e)),
      e
    );
  }
  if (l) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(nt, {
            children: (0, $.jsx)(k, {
              id: `threadSidePanel.workspaceBrowser.loading`,
              defaultMessage: `Loading directory entries…`,
              description: `Loading message shown while the workspace file browser is fetching a directory`,
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (c) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(nt, {
            children: (0, $.jsx)(k, {
              id: `threadSidePanel.workspaceBrowser.empty`,
              defaultMessage: `No files in this folder`,
              description: `Empty state shown when a workspace directory contains no visible entries`,
            }),
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let h;
  t[4] === u
    ? (h = t[5])
    : ((h = (e) => {
        let t = $e(e.nativeEvent);
        t != null && u(t);
      }),
      (t[4] = u),
      (t[5] = h));
  let g;
  return (
    t[6] !== r ||
    t[7] !== i ||
    t[8] !== a ||
    t[9] !== o ||
    t[10] !== s ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== p ||
    t[14] !== m ||
    t[15] !== h
      ? ((g = (0, $.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          children: (0, $.jsx)(L, {
            cwd: i,
            hostId: a,
            initialExpandedPaths: o,
            initialScrollTop: s,
            onDoubleClick: h,
            onSelectionChange: d,
            onStateChange: f,
            paths: r,
            revealSelectedPath: p,
            selectedPath: m,
          }),
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Xe(e) {
  let t = (0, Z.c)(22),
    { files: n, hostId: r, isLoading: i, onOpenFile: a, onSelectFile: o, query: s, root: c } = e,
    l;
  t[0] === n ? (l = t[1]) : ((l = n == null ? null : Ie(n)), (t[0] = n), (t[1] = l));
  let u = l,
    d;
  t[2] === u ? (d = t[3]) : ((d = u == null ? ot : rt(u.map(Ze))), (t[2] = u), (t[3] = d));
  let f = d;
  if (u == null || (i && u.length === 0)) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(nt, {
            children: (0, $.jsx)(k, {
              id: `thread.fileTreePanel.searchingFiles`,
              defaultMessage: `Searching files…`,
              description: `Loading state shown while searching workspace files`,
            }),
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (u.length === 0) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(nt, {
            children: (0, $.jsx)(k, {
              id: `thread.fileTreePanel.noMatchingFiles`,
              defaultMessage: `No matching files`,
              description: `Empty state shown when workspace file search has no results`,
            }),
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let p;
  t[6] === c ? (p = t[7]) : ((p = te(c)), (t[6] = c), (t[7] = p));
  let m;
  t[8] !== o || t[9] !== u
    ? ((m = (e) => {
        let t = u.find((t) => e.includes(t.displayPath));
        t != null && o(t.path);
      }),
      (t[8] = o),
      (t[9] = u),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== a || t[12] !== u
    ? ((h = (e) => {
        let t = $e(e.nativeEvent),
          n = u.find((e) => e.displayPath === t);
        n != null && a(n.path);
      }),
      (t[11] = a),
      (t[12] = u),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] !== r ||
    t[15] !== f ||
    t[16] !== s ||
    t[17] !== u ||
    t[18] !== p ||
    t[19] !== m ||
    t[20] !== h
      ? ((g = (0, $.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          children: (0, $.jsx)(L, {
            flattenEmptyDirectories: !0,
            cwd: p,
            hostId: r,
            initialExpandedPaths: f,
            onSelectionChange: m,
            onDoubleClick: h,
            paths: u,
            resetKey: s,
          }),
        })),
        (t[14] = r),
        (t[15] = f),
        (t[16] = s),
        (t[17] = u),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function Ze(e) {
  return e.displayPath;
}
function Qe(e, t) {
  let n = e.find((e) => !e.endsWith(at));
  n != null && t(n);
}
function $e(e) {
  let t = M(e);
  return t == null || t.endsWith(at) ? null : t;
}
function et(e, t) {
  if (t != null)
    for (let n of t) {
      if (n.type === `directory`) {
        e.add(`${n.path}${at}`);
        continue;
      }
      e.add(n.path);
    }
}
async function tt(e, { expandedItems: t, hostId: n, includeHidden: r, refreshKey: i, root: a }) {
  await Promise.all(
    Pe(t).map(async (t) => {
      await e.query
        .fetch(dt, { directoryPath: t, hostId: n, includeHidden: r, refreshKey: i, root: a })
        .catch(() => void 0);
    }),
  );
}
function nt(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`div`, {
          className: `px-2 py-2 text-left text-base text-token-description-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function rt(e) {
  let t = new Set();
  for (let n of e) {
    let e = (n.endsWith(`/`) ? n.slice(0, -1) : n).split(`/`);
    for (let n = 1; n < e.length; n += 1) t.add(e.slice(0, n).join(`/`));
  }
  return Array.from(t);
}
function it(e, t) {
  return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
var Z,
  Q,
  $,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt = e(() => {
    ((Z = v()),
      S(),
      y(),
      a(),
      (Q = t(s(), 1)),
      A(),
      N(),
      I(),
      F(),
      Fe(),
      Le(),
      qe(),
      Ne(),
      pe(),
      ge(),
      E(),
      o(),
      me(),
      x(),
      ($ = le()),
      (at = `/`),
      (ot = []),
      (st = 100),
      (ct = { expandedPaths: ot, scrollTop: 0, searchQuery: ``, selectedPath: null }),
      (lt = d(_e, (e) => ct)),
      (ut = d(_e, (e) => null)),
      (dt = ue(
        h,
        `workspace-directory-entries`,
        ({ directoryPath: e, hostId: t, includeHidden: n, refreshKey: r, root: i }) => ({
          cacheKey: r,
          params: { hostId: t, workspaceRoot: i, directoryPath: e, includeHidden: n },
          placeholderData: g,
          staleTime: c.FIVE_SECONDS,
        }),
      )),
      (ft = i(h, (e, { get: t }) => {
        let n = t(dt, {
            directoryPath: null,
            hostId: e.hostId,
            includeHidden: e.includeHidden,
            refreshKey: e.refreshKey,
            root: e.root,
          }),
          r = new Set();
        et(r, n.data?.entries);
        for (let n of e.expandedItems)
          n.length !== 0 &&
            et(
              r,
              t(dt, {
                directoryPath: n,
                hostId: e.hostId,
                includeHidden: e.includeHidden,
                refreshKey: e.refreshKey,
                root: e.root,
              }).data?.entries,
            );
        return {
          error: n.error,
          files: Array.from(r),
          isEmpty: n.data != null && n.data.entries.length === 0,
          isLoading: n.isLoading && n.data == null,
        };
      })));
  });
export { W as a, Ee as c, Oe as i, Ce as l, pt as n, De as o, Ne as r, U as s, Je as t, B as u };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r.js.map
