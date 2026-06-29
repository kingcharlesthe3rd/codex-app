import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Dr as n,
  Ol as r,
  Wt as i,
  co as a,
  kl as o,
  xl as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  am as c,
  im as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import { _b as u } from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  or as d,
  sr as f,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import { r as p } from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~pa0bny98.js";
function m(e) {
  let t = [],
    r = [],
    i = [];
  for (let o of e) {
    if (o.localBrowserDesignChange != null) {
      r.push(o);
      continue;
    }
    a(o) || u(o) || n(o) ? t.push(o) : i.push(o);
  }
  return {
    annotationCommentAttachments: t,
    designTweakCommentAttachments: r,
    diffCommentAttachments: i,
  };
}
function h(e) {
  return m(e).diffCommentAttachments;
}
function g(e) {
  let { annotationCommentAttachments: t, designTweakCommentAttachments: n } = m(e);
  return [...t, ...n];
}
var _ = e(() => {
  (i(), p());
});
function v(e) {
  let t = (0, b.c)(13),
    { className: n, expandedTopTray: r, children: i } = e,
    a = r === void 0 ? !1 : r,
    o;
  t[0] === n ? (o = t[1]) : ((o = l(`order-2 flex min-w-0 flex-col`, n)), (t[0] = n), (t[1] = o));
  let s;
  t[2] !== i || t[3] !== o
    ? ((s = (0, S.jsx)(`div`, { className: o, children: i })), (t[2] = i), (t[3] = o), (t[4] = s))
    : (s = t[4]);
  let c = s,
    u;
  t[5] === a ? (u = t[6]) : ((u = { expandedTopTray: a }), (t[5] = a), (t[6] = u));
  let f;
  t[7] !== a || t[8] !== c
    ? ((f = a ? (0, S.jsx)(d, { expandedTopTray: !0, inFlow: !0, children: c }) : c),
      (t[7] = a),
      (t[8] = c),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== u || t[11] !== f
      ? ((p = (0, S.jsx)(C.Provider, { value: u, children: f })),
        (t[10] = u),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function y(e) {
  let t = (0, b.c)(7),
    { className: n, children: r } = e,
    { expandedTopTray: i } = (0, x.useContext)(C),
    a =
      !i &&
      `bg-token-input-background/70 border-token-border/80 border-x border-t backdrop-blur-sm`,
    o = !i && `first:rounded-t-2xl`,
    s;
  t[0] !== n || t[1] !== a || t[2] !== o
    ? ((s = l(`relative min-w-0 overflow-clip text-token-foreground`, a, o, n)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let c;
  return (
    t[4] !== r || t[5] !== s
      ? ((c = (0, S.jsx)(`div`, { className: s, children: r })), (t[4] = r), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
var b,
  x,
  S,
  C,
  w = e(() => {
    ((b = r()),
      c(),
      (x = t(o(), 1)),
      f(),
      (S = s()),
      (C = (0, x.createContext)({ expandedTopTray: !1 })));
  });
function T(e) {
  let t = (0, E.c)(32),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    u;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (u = t[8]))
    : (({
        actions: n,
        className: r,
        icon: i,
        meta: a,
        title: s,
        titleClassName: c,
        trailing: u,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = l(`group flex min-w-0 items-center justify-between gap-2 py-0.5 text-sm`, r)),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === i
    ? (f = t[12])
    : ((f =
        i == null
          ? null
          : (0, D.jsx)(`span`, {
              className: `flex h-4 shrink-0 items-center justify-center`,
              children: i,
            })),
      (t[11] = i),
      (t[12] = f));
  let p;
  t[13] === c ? (p = t[14]) : ((p = l(`min-w-0 flex-1 leading-4`, c)), (t[13] = c), (t[14] = p));
  let m;
  t[15] === a
    ? (m = t[16])
    : ((m =
        a == null
          ? null
          : (0, D.jsx)(`span`, {
              className: `ml-1 text-token-description-foreground`,
              children: a,
            })),
      (t[15] = a),
      (t[16] = m));
  let h;
  t[17] !== p || t[18] !== m || t[19] !== s
    ? ((h = (0, D.jsxs)(`div`, { className: p, children: [s, m] })),
      (t[17] = p),
      (t[18] = m),
      (t[19] = s),
      (t[20] = h))
    : (h = t[20]);
  let g;
  t[21] !== f || t[22] !== h
    ? ((g = (0, D.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 items-center gap-1.5`,
        children: [f, h],
      })),
      (t[21] = f),
      (t[22] = h),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] !== n || t[25] !== u
    ? ((_ =
        u != null || n != null
          ? (0, D.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [u, n] })
          : null),
      (t[24] = n),
      (t[25] = u),
      (t[26] = _))
    : (_ = t[26]);
  let v;
  return (
    t[27] !== o || t[28] !== d || t[29] !== g || t[30] !== _
      ? ((v = (0, D.jsxs)(`div`, { ...o, className: d, children: [g, _] })),
        (t[27] = o),
        (t[28] = d),
        (t[29] = g),
        (t[30] = _),
        (t[31] = v))
      : (v = t[31]),
    v
  );
}
var E,
  D,
  O = e(() => {
    ((E = r()), c(), (D = s()));
  });
export { w as a, _ as c, y as i, m as l, O as n, h as o, v as r, g as s, T as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~ji9pfk68.js.map
