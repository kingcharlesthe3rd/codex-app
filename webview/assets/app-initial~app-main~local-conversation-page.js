import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $r as n,
  BN as r,
  C_ as i,
  D_ as a,
  EB as o,
  GP as s,
  HP as c,
  IP as l,
  JN as u,
  LP as d,
  Qj as f,
  Qr as p,
  RN as m,
  RV as h,
  Rr as g,
  TB as _,
  TP as v,
  YN as y,
  _V as b,
  aM as x,
  bB as S,
  eM as C,
  iF as w,
  iM as T,
  jV as E,
  lL as D,
  lV as O,
  oM as k,
  pV as A,
  qN as j,
  qP as M,
  rM as N,
  wB as P,
  wP as F,
  yV as I,
  zV as L,
  zr as R,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  A_ as z,
  GS as B,
  JS as V,
  O_ as H,
  Zh as U,
  aC as W,
  d_ as G,
  k_ as K,
  n_ as q,
  qh as J,
  rC as ee,
  t_ as te,
} from "./app-initial~app-main~onboarding-page.js";
import {
  m as ne,
  p as re,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
function ie(e) {
  let t = (0, ue.c)(16),
    n = b(fe),
    r;
  t[0] === e.dependencies
    ? (r = t[1])
    : ((r = e.dependencies ? e.dependencies.map(ce).join(`|`) : ``),
      (t[0] = e.dependencies),
      (t[1] = r));
  let i = r,
    a;
  t[2] !== e || t[3] !== n
    ? ((a = () => {
        n((t) => {
          let n = !1,
            r = [...t].map((t) => (t.id === e.id ? ((n = !0), e) : t));
          return (n || r.push(e), (0, de.default)(r.filter(se), [oe, ae]));
        });
      }),
      (t[2] = e),
      (t[3] = n),
      (t[4] = a))
    : (a = t[4]);
  let o = (0, Y.useEffectEvent)(a),
    s;
  t[5] === o
    ? (s = t[6])
    : ((s = () => {
        o();
      }),
      (t[5] = o),
      (t[6] = s));
  let c;
  (t[7] !== i || t[8] !== e.enabled || t[9] !== e.id || t[10] !== e.order
    ? ((c = [e.id, e.enabled, e.order, i]),
      (t[7] = i),
      (t[8] = e.enabled),
      (t[9] = e.id),
      (t[10] = e.order),
      (t[11] = c))
    : (c = t[11]),
    (0, Y.useEffect)(s, c));
  let l, u;
  (t[12] !== e.id || t[13] !== n
    ? ((l = () => () => {
        n((t) => t.filter((t) => t.id !== e.id));
      }),
      (u = [e.id, n]),
      (t[12] = e.id),
      (t[13] = n),
      (t[14] = l),
      (t[15] = u))
    : ((l = t[14]), (u = t[15])),
    (0, Y.useEffect)(l, u));
}
function ae(e) {
  return e.id;
}
function oe(e) {
  return e.order ?? 0;
}
function se(e) {
  return e.enabled !== !1;
}
function ce(e) {
  return le(e);
}
function le(e) {
  return e == null ? `` : String(e);
}
var ue,
  de,
  Y,
  fe,
  pe = e(() => {
    ((ue = h()), A(), (de = t(G(), 1)), (Y = t(L(), 1)), (fe = I([])));
  });
function me(e, t, n = `fuzzy`) {
  let r = Array.from(e),
    i = t.trim();
  if (i.length === 0) return r.map((e) => ({ text: e, isMatch: !0 }));
  let a = e.toLowerCase(),
    o = i.toLowerCase(),
    s = a.indexOf(o);
  if (s >= 0) {
    let e = s,
      t = s + o.length;
    return r.map((n, r) => ({ text: n, isMatch: r >= e && r < t }));
  }
  if (n === `substring`) return r.map((e) => ({ text: e, isMatch: !1 }));
  let c = 0;
  return r.map((e) => {
    let t = c < o.length && e.toLowerCase() === o[c];
    return (t && (c += 1), { text: e, isMatch: t });
  });
}
var he = e(() => {});
function ge(e) {
  let t = (0, Ce.c)(66),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]))
    : (({
        title: f,
        description: i,
        leftAccessory: c,
        LeftIcon: n,
        RightIcon: r,
        titleTooltipContent: p,
        descriptionTooltipContent: o,
        descriptionClassName: a,
        highlightMode: s,
        secondaryContent: d,
        tooltipDelayDuration: m,
        rightAccessory: u,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  let h = (0, we.useRef)(null),
    g;
  t[14] === f ? (g = t[15]) : ((g = xe(f)), (t[14] = f), (t[15] = g));
  let _ = g,
    v;
  t[16] === i ? (v = t[17]) : ((v = i == null ? void 0 : xe(i)), (t[16] = i), (t[17] = v));
  let y = v,
    b;
  t[18] === p ? (b = t[19]) : ((b = Se(p)), (t[18] = p), (t[19] = b));
  let x = b,
    S;
  t[20] === o ? (S = t[21]) : ((S = Se(o)), (t[20] = o), (t[21] = S));
  let C = S,
    w = H(ye),
    T = H(ve),
    E;
  t[22] !== s || t[23] !== w || t[24] !== _
    ? ((E = me(_, w, s)), (t[22] = s), (t[23] = w), (t[24] = _), (t[25] = E))
    : (E = t[25]);
  let D = E,
    O = D.some(_e),
    k;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => {
        h.current?.dataset.selected === `true` && h.current.scrollIntoView({ block: `nearest` });
      }),
      (t[26] = k))
    : (k = t[26]);
  let A;
  (t[27] === T ? (A = t[28]) : ((A = [T]), (t[27] = T), (t[28] = A)), (0, we.useEffect)(k, A));
  let j = K,
    M = d == null ? `items-center` : `items-start`,
    N;
  t[29] === M ? (N = t[30]) : ((N = F(`flex w-full min-w-0 gap-2`, M)), (t[29] = M), (t[30] = N));
  let P;
  t[31] !== n || t[32] !== c
    ? ((P = c ?? (n ? (0, X.jsx)(n, { className: `icon-xs shrink-0` }) : null)),
      (t[31] = n),
      (t[32] = c),
      (t[33] = P))
    : (P = t[33]);
  let I = be,
    L = i ? (a ? `min-w-0 flex-1` : `max-w-[60%] flex-none`) : `min-w-0 flex-1`,
    R;
  t[34] === L ? (R = t[35]) : ((R = F(`truncate`, L)), (t[34] = L), (t[35] = R));
  let z = D.map((e, t) =>
      (0, X.jsx)(
        `span`,
        { className: F(!e.isMatch && O && `text-token-description-foreground`), children: e.text },
        t,
      ),
    ),
    B;
  t[36] !== I || t[37] !== R || t[38] !== z || t[39] !== m || t[40] !== x
    ? ((B = (0, X.jsx)(I, { tooltipContent: x, delayDuration: m, className: R, children: z })),
      (t[36] = I),
      (t[37] = R),
      (t[38] = z),
      (t[39] = m),
      (t[40] = x),
      (t[41] = B))
    : (B = t[41]);
  let V;
  t[42] !== r ||
  t[43] !== i ||
  t[44] !== a ||
  t[45] !== u ||
  t[46] !== m ||
  t[47] !== y ||
  t[48] !== C
    ? ((V =
        i || u || r
          ? (0, X.jsxs)(`div`, {
              className: `ml-auto flex min-w-0 items-center gap-2`,
              children: [
                i
                  ? (0, X.jsx)(be, {
                      tooltipContent: C,
                      delayDuration: m,
                      className: F(
                        `truncate text-sm text-token-description-foreground`,
                        a ?? `min-w-0 flex-1`,
                      ),
                      children: y,
                    })
                  : null,
                u ? (0, X.jsx)(`span`, { className: `shrink-0 opacity-80`, children: u }) : null,
                r ? (0, X.jsx)(r, { className: `icon-xs shrink-0` }) : null,
              ],
            })
          : null),
      (t[42] = r),
      (t[43] = i),
      (t[44] = a),
      (t[45] = u),
      (t[46] = m),
      (t[47] = y),
      (t[48] = C),
      (t[49] = V))
    : (V = t[49]);
  let U;
  t[50] !== B || t[51] !== V
    ? ((U = (0, X.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [B, V],
      })),
      (t[50] = B),
      (t[51] = V),
      (t[52] = U))
    : (U = t[52]);
  let W;
  t[53] === d
    ? (W = t[54])
    : ((W =
        d == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `truncate pt-0.5 text-xs text-token-description-foreground`,
              children: d,
            })),
      (t[53] = d),
      (t[54] = W));
  let G;
  t[55] !== U || t[56] !== W
    ? ((G = (0, X.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [U, W] })),
      (t[55] = U),
      (t[56] = W),
      (t[57] = G))
    : (G = t[57]);
  let q;
  t[58] !== N || t[59] !== P || t[60] !== G
    ? ((q = (0, X.jsxs)(`div`, { className: N, children: [P, G] })),
      (t[58] = N),
      (t[59] = P),
      (t[60] = G),
      (t[61] = q))
    : (q = t[61]);
  let J;
  return (
    t[62] !== l || t[63] !== q || t[64] !== j.Item
      ? ((J = (0, X.jsx)(j.Item, { ref: h, ...l, children: q })),
        (t[62] = l),
        (t[63] = q),
        (t[64] = j.Item),
        (t[65] = J))
      : (J = t[65]),
    J
  );
}
function _e(e) {
  return e.isMatch;
}
function ve(e) {
  return e.value;
}
function ye(e) {
  return e.search;
}
function be(e) {
  let t = (0, Ce.c)(8),
    { children: n, className: r, tooltipContent: i, delayDuration: a } = e,
    o = i == null,
    s;
  t[0] !== n || t[1] !== r
    ? ((s = (0, X.jsx)(`div`, { className: r, children: n })), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== i
      ? ((c = (0, X.jsx)(f, {
          tooltipContent: i,
          delayDuration: a,
          disabled: o,
          openWhen: `trigger-overflows`,
          children: s,
        })),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = i),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function xe(e) {
  return e.length <= Te ? e : `${e.slice(0, Te - 1).trimEnd()}…`;
}
function Se(e) {
  return typeof e == `string` ? xe(e) : e;
}
var Ce,
  we,
  X,
  Te,
  Ee = e(() => {
    ((Ce = h()), v(), z(), (we = t(L(), 1)), C(), he(), (X = E()), (Te = 100));
  }),
  Z,
  De,
  Q,
  Oe = e(() => {
    (S(),
      d(),
      (Z = `command-menu-first-file-item`),
      (De = `command-menu-first-chat-item`),
      (Q = O(l, `root`)));
  });
function ke(e) {
  let t = (0, Me.c)(31),
    { clearSearch: n, close: r, hostId: i, onSelectFile: a, workspaceRoot: c } = e,
    u = _(l),
    d = M(),
    f = P(J, `searchFiles`),
    m = H(je),
    h = o(R),
    g = o(Q),
    v = g === `files` ? m : ``,
    y;
  t[0] === c ? (y = t[1]) : ((y = [c]), (t[0] = c), (t[1] = y));
  let b;
  t[2] !== i || t[3] !== v || t[4] !== y
    ? ((b = { hostId: i, query: v, roots: y }), (t[2] = i), (t[3] = v), (t[4] = y), (t[5] = b))
    : (b = t[5]);
  let { sections: x } = q(b),
    S = x[0],
    C,
    w;
  if (
    (t[6] !== h || t[7] !== u
      ? ((C = () => {
          h || u.set(Q, `root`);
        }),
        (w = [h, u]),
        (t[6] = h),
        (t[7] = u),
        (t[8] = C),
        (t[9] = w))
      : ((C = t[8]), (w = t[9])),
    (0, Ne.useEffect)(C, w),
    g !== `files`)
  ) {
    let e;
    t[10] === d
      ? (e = t[11])
      : ((e = d.formatMessage({
          id: `thread.fileCommandMenu.searchFiles`,
          defaultMessage: `Search files`,
          description: `Command menu item that opens workspace file search`,
        })),
        (t[10] = d),
        (t[11] = e));
    let r = f ?? ``,
      i;
    t[12] === r ? (i = t[13]) : ((i = (0, $.jsx)(N, { keysLabel: r })), (t[12] = r), (t[13] = i));
    let a;
    t[14] !== n || t[15] !== u
      ? ((a = () => {
          (n(), u.set(Q, `files`));
        }),
        (t[14] = n),
        (t[15] = u),
        (t[16] = a))
      : (a = t[16]);
    let o;
    return (
      t[17] !== e || t[18] !== i || t[19] !== a
        ? ((o = (0, $.jsx)(
            ge,
            {
              value: `search files workspace project cmd+p`,
              title: e,
              LeftIcon: p,
              rightAccessory: i,
              onSelect: a,
            },
            `search-files`,
          )),
          (t[17] = e),
          (t[18] = i),
          (t[19] = a),
          (t[20] = o))
        : (o = t[20]),
      o
    );
  }
  if (S == null || (S.items.length === 0 && S.emptyState == null)) return null;
  let T;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-token-description-foreground`,
        children: (0, $.jsx)(s, {
          id: `thread.fileCommandMenu.filesGroup`,
          defaultMessage: `Files`,
          description: `Group label for workspace file search results`,
        }),
      })),
      (t[21] = T))
    : (T = t[21]);
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { gap: `var(--spacing)` }), (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] !== r || t[24] !== S.emptyState || t[25] !== S.items || t[26] !== d || t[27] !== a
    ? ((D =
        S.items.length > 0
          ? S.items.map((e, t) =>
              (0, $.jsx)(
                ge,
                {
                  description: e.detail ?? void 0,
                  forceMount: !0,
                  LeftIcon: e.icon,
                  onSelect: () => {
                    (a(e.key.replace(/^file:/, ``)), r());
                  },
                  title: e.label,
                  value: t === 0 ? Z : [e.label, e.detail].join(` `),
                },
                e.key,
              ),
            )
          : S.emptyState == null
            ? null
            : (0, $.jsx)(K.Item, {
                "data-command-menu-loading": !0,
                forceMount: !0,
                onSelect: Ae,
                value: Z,
                children: (0, $.jsx)(`div`, {
                  className: `flex w-full min-w-0 items-center gap-2`,
                  children: (0, $.jsx)(`div`, {
                    className: `min-w-0 flex-1 truncate`,
                    children: d.formatMessage(S.emptyState),
                  }),
                }),
              })),
      (t[23] = r),
      (t[24] = S.emptyState),
      (t[25] = S.items),
      (t[26] = d),
      (t[27] = a),
      (t[28] = D))
    : (D = t[28]);
  let O;
  return (
    t[29] === D
      ? (O = t[30])
      : ((O = (0, $.jsx)(
          K.Group,
          { forceMount: !0, heading: T, className: `flex flex-col`, style: E, children: D },
          `group-files`,
        )),
        (t[29] = D),
        (t[30] = O)),
    O
  );
}
function Ae() {}
function je(e) {
  return e.search;
}
var Me,
  Ne,
  $,
  Pe = e(() => {
    ((Me = h()),
      z(),
      S(),
      (Ne = t(L(), 1)),
      c(),
      U(),
      Oe(),
      g(),
      T(),
      Ee(),
      te(),
      n(),
      d(),
      ($ = E()));
  });
function Fe() {
  let e = (0, Ie.c)(23),
    t = _(i),
    n = o(Q),
    a = r(`open-file`),
    s = o(W),
    c = o(V),
    l = c != null,
    d;
  e[0] !== l || e[1] !== s || e[2] !== a || e[3] !== t || e[4] !== c
    ? ((d = (e) => {
        !l ||
          c == null ||
          ne({
            scope: t,
            path: e,
            cwd: D(c),
            hostConfig: s,
            hostId: s.id,
            openFile: a.mutate,
            openInSidePanel: !0,
          });
      }),
      (e[0] = l),
      (e[1] = s),
      (e[2] = a),
      (e[3] = t),
      (e[4] = c),
      (e[5] = d))
    : (d = e[5]);
  let f = d,
    p;
  (e[6] !== l || e[7] !== t
    ? ((p = () => {
        l &&
          (u.dispatchHostMessage({ type: `command-menu`, query: `` }),
          t.set(Q, `files`),
          t.set(R, !0));
      }),
      (e[6] = l),
      (e[7] = t),
      (e[8] = p))
    : (p = e[8]),
    y(`file-search-command-menu`, k(p)));
  let m;
  e[9] !== l || e[10] !== n || e[11] !== s.id || e[12] !== c
    ? ((m = [l, n, s.id, c]), (e[9] = l), (e[10] = n), (e[11] = s.id), (e[12] = c), (e[13] = m))
    : (m = e[13]);
  let h = n === `files`,
    g;
  e[14] !== s.id || e[15] !== f || e[16] !== c
    ? ((g = (e, t) =>
        c == null
          ? null
          : (0, Le.jsx)(ke, {
              clearSearch: t,
              close: e,
              hostId: s.id,
              onSelectFile: f,
              workspaceRoot: c,
            })),
      (e[14] = s.id),
      (e[15] = f),
      (e[16] = c),
      (e[17] = g))
    : (g = e[17]);
  let v;
  return (
    e[18] !== l || e[19] !== m || e[20] !== h || e[21] !== g
      ? ((v = {
          dependencies: m,
          enabled: l,
          exclusive: h,
          groupKey: `suggested`,
          id: `thread-file-search`,
          order: -1e3,
          render: g,
        }),
        (e[18] = l),
        (e[19] = m),
        (e[20] = h),
        (e[21] = g),
        (e[22] = v))
      : (v = e[22]),
    ie(v),
    null
  );
}
var Ie,
  Le,
  Re = e(() => {
    ((Ie = h()), S(), w(), pe(), Oe(), g(), re(), j(), B(), a(), ee(), x(), m(), Pe(), (Le = E()));
  });
export {
  Q as a,
  Ee as c,
  fe as d,
  pe as f,
  Z as i,
  me as l,
  Re as n,
  Oe as o,
  ie as p,
  De as r,
  ge as s,
  Fe as t,
  he as u,
};
//# sourceMappingURL=app-initial~app-main~local-conversation-page.js.map
