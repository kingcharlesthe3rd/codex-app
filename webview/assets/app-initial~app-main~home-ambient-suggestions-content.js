import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Rt as r,
  Tl as i,
  Wc as a,
  Xs as o,
  ec as s,
  el as c,
  nc as l,
  nl as u,
  ol as d,
  qc as f,
  rl as p,
  tc as m,
  zt as h,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  CS as g,
  MS as _,
  NS as v,
  SS as y,
  TS as b,
  xS as x,
} from "./app-initial~app-main~onboarding-page.js";
import {
  J as S,
  K as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  By as w,
  Hy as ee,
  Ib as te,
  Js as ne,
  Rb as re,
  Rs as ie,
  Xs as ae,
  b as T,
  di as oe,
  pi as se,
  ti as ce,
  x as E,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Cu as D,
  Su as O,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
function k() {
  let e = (0, j.c)(2),
    t = ae(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = N.some((e) => ne({ path: e, end: !0 }, t.pathname) != null)), (e[0] = t), (e[1] = n)),
    n
  );
}
function A(e, t) {
  return e.includes(t) ? e : [...e, t];
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    ((j = i()),
      c(),
      (M = t(n(), 1)),
      ie(),
      T(),
      _(),
      S(),
      O(),
      oe(),
      g(),
      x(),
      (N = [`/`, `/local/:conversationId`]),
      (P = new Set([`gpt-5.4`, `gpt-5.5`])),
      (F = () => {}),
      (I = D(`seen-model-upgrade-list`, [])),
      (L = D(`latest-model-seen`, null)),
      (R = (e, t, n, r) => ({
        announcementContent: n,
        showAnnouncement: e && !t,
        dismissAnnouncement: r,
      })),
      (z = () => {
        let e = (0, j.c)(10),
          t = k(),
          { authMethod: n } = E(),
          { data: r, isLoading: i } = v(),
          [a, o] = u(I),
          s = n === `amazonBedrock` || n === `bedrockApiKey`,
          c;
        e[0] !== a || e[1] !== r?.models || e[2] !== s
          ? ((c =
              r?.models.find(
                (e) => !s && e.availabilityNux != null && !P.has(e.model) && !a.includes(e.model),
              ) ?? null),
            (e[0] = a),
            (e[1] = r?.models),
            (e[2] = s),
            (e[3] = c))
          : (c = e[3]);
        let l = c,
          d;
        e[4] === l
          ? (d = e[5])
          : ((d =
              l == null
                ? null
                : {
                    defaultReasoningEffort: l.defaultReasoningEffort,
                    ...l.availabilityNux,
                    model: l.model,
                  }),
            (e[4] = l),
            (e[5] = d));
        let f = d,
          p;
        return (
          e[6] !== l || e[7] !== a || e[8] !== o
            ? ((p = () => {
                l != null && o(A(a, l.model));
              }),
              (e[6] = l),
              (e[7] = a),
              (e[8] = o),
              (e[9] = p))
            : (p = e[9]),
          R(l != null && !i && t, !1, f, p)
        );
      }),
      (B = () => {
        let e = (0, j.c)(25),
          t = k(),
          { modelSettings: n } = b(),
          { data: r } = v(),
          [i, a] = u(I),
          [o, s] = u(L),
          c,
          l,
          d,
          f,
          p,
          m,
          h,
          g,
          _;
        if (e[0] !== i || e[1] !== o || e[2] !== r?.models || e[3] !== n.model) {
          ((p = o == null ? i : A(i, o)), (g = p !== i), (h = o != null));
          let t = C(r?.models, n.model);
          ((l = t?.upgrade),
            (_ = l == null ? void 0 : C(r?.models, l)),
            (c =
              t?.upgradeInfo == null || _ == null
                ? null
                : {
                    ...t.upgradeInfo,
                    defaultReasoningEffort: _.defaultReasoningEffort,
                    model: _.model,
                  }),
            (f = _ != null && P.has(_.model)),
            (d = !1),
            (m = null),
            l && ((m = l), (d = p.includes(m))),
            (e[0] = i),
            (e[1] = o),
            (e[2] = r?.models),
            (e[3] = n.model),
            (e[4] = c),
            (e[5] = l),
            (e[6] = d),
            (e[7] = f),
            (e[8] = p),
            (e[9] = m),
            (e[10] = h),
            (e[11] = g),
            (e[12] = _));
        } else
          ((c = e[4]),
            (l = e[5]),
            (d = e[6]),
            (f = e[7]),
            (p = e[8]),
            (m = e[9]),
            (h = e[10]),
            (g = e[11]),
            (_ = e[12]));
        let y, x;
        (e[13] !== p || e[14] !== a || e[15] !== s || e[16] !== h || e[17] !== g
          ? ((y = () => {
              (g && a(p), h && s(null));
            }),
            (x = [p, a, s, h, g]),
            (e[13] = p),
            (e[14] = a),
            (e[15] = s),
            (e[16] = h),
            (e[17] = g),
            (e[18] = y),
            (e[19] = x))
          : ((y = e[18]), (x = e[19])),
          (0, M.useEffect)(y, x));
        let S;
        e[20] !== p || e[21] !== m || e[22] !== a || e[23] !== s
          ? ((S = () => {
              m && (a(A(p, m)), s(null));
            }),
            (e[20] = p),
            (e[21] = m),
            (e[22] = a),
            (e[23] = s),
            (e[24] = S))
          : (S = e[24]);
        let w = S;
        return R(!!l && !n.isLoading && _ != null && !f && t, d, c, w);
      }),
      (V = () => {
        let e = (0, j.c)(9),
          t = k(),
          { isServiceTierAllowed: n } = y(),
          { modelSettings: r } = b(),
          { data: i } = v(),
          a = p(I),
          o,
          s;
        e[0] !== i?.models || e[1] !== r.model
          ? ((o = C(i?.models, r.model)),
            (s = se(o, ce)),
            (e[0] = i?.models),
            (e[1] = r.model),
            (e[2] = o),
            (e[3] = s))
          : ((o = e[2]), (s = e[3]));
        let c = s,
          l;
        e[4] !== a || e[5] !== i?.models
          ? ((l = i?.models.find((e) => se(e, `priority`) && a.includes(e.model)) ?? null),
            (e[4] = a),
            (e[5] = i?.models),
            (e[6] = l))
          : (l = e[6]);
        let u = l,
          d = c ? (o ?? u) : u,
          f;
        return (
          e[7] === d
            ? (f = e[8])
            : ((f = d == null ? null : { model: d.model }), (e[7] = d), (e[8] = f)),
          R(n && !r.isLoading && t && d != null, !1, f, F)
        );
      }));
  });
function U(e, t) {
  return t == null ? null : (e[t] ?? null);
}
function le(e, t, n) {
  let r = U(e, t);
  return r != null && r >= n ? e : { ...e, [t]: n };
}
var W,
  G,
  K,
  q,
  J,
  Y = e(() => {
    (c(),
      O(),
      (W = d(!1)),
      (G = D(`has-seen-knowledge-work-announcement`, !1)),
      (K = D(`has-seen-fast-mode-announcement`, !1)),
      (q = D(`has-seen-work-plugins-announcement`, !1)),
      (J = D(`workspace-message-last-seen-at-by-account`, {})));
  });
function ue(e, t, n) {
  if (e == null) return null;
  let r =
    e.messages.find((e) => e.message_type === `announcement` && !t.has(e.message_id) && fe(e, n)) ??
    null;
  return r == null ? null : { message: r };
}
function de(e) {
  return e?.messages.find((e) => e.message_type === `headline`) ?? null;
}
function fe(e, t) {
  return t == null || e.created_at > t;
}
function pe(e, t) {
  return t == null ? Q : (e.get(t) ?? Q);
}
function me(e, t, n) {
  let r = new Map(e),
    i = new Set(r.get(t) ?? []);
  for (let e of n) i.add(e);
  return (r.set(t, i), r);
}
function he() {
  let e = (0, Z.c)(10),
    t = m(r),
    { accountId: n, data: i, isLoading: a, shouldFetch: o } = X(),
    s = pe(l($), n),
    [c, d] = u(J),
    f = U(c, n),
    p = o ? ue(i, s, f) : null,
    h;
  e[0] !== n || e[1] !== p || e[2] !== t || e[3] !== d || e[4] !== c
    ? ((h = () => {
        p == null || n == null || (ve(t, n, p), d(le(c, n, p.message.created_at)));
      }),
      (e[0] = n),
      (e[1] = p),
      (e[2] = t),
      (e[3] = d),
      (e[4] = c),
      (e[5] = h))
    : (h = e[5]);
  let g;
  return (
    e[6] !== p || e[7] !== a || e[8] !== h
      ? ((g = { announcement: p, dismissAnnouncement: h, isLoading: a }),
        (e[6] = p),
        (e[7] = a),
        (e[8] = h),
        (e[9] = g))
      : (g = e[9]),
    g
  );
}
function ge() {
  let e = (0, Z.c)(5),
    { data: t, shouldFetch: n } = X(),
    r;
  e[0] !== t || e[1] !== n
    ? ((r = n ? de(t) : null), (e[0] = t), (e[1] = n), (e[2] = r))
    : (r = e[2]);
  let i;
  return (e[3] === r ? (i = e[4]) : ((i = { headline: r }), (e[3] = r), (e[4] = i)), i);
}
function X() {
  let e = (0, Z.c)(8),
    { accountId: t, authMethod: n, isLoading: r } = E(),
    i = k(),
    a = re(`4285716042`) && i && !r && n === `chatgpt` && t != null,
    o;
  e[0] !== t || e[1] !== a
    ? ((o = { accountId: t, shouldFetch: a }), (e[0] = t), (e[1] = a), (e[2] = o))
    : (o = e[2]);
  let c = s(be, o),
    l = a && c.isLoading,
    u;
  return (
    e[3] !== t || e[4] !== c.data || e[5] !== a || e[6] !== l
      ? ((u = { accountId: t, data: c.data, isLoading: l, shouldFetch: a }),
        (e[3] = t),
        (e[4] = c.data),
        (e[5] = a),
        (e[6] = l),
        (e[7] = u))
      : (u = e[7]),
    u
  );
}
async function _e() {
  return w.safeGet(`/wham/workspace-messages`, {
    additionalHeaders: { "Cache-Control": `no-store` },
  });
}
function ve(e, t, n) {
  e.set($, (e) => me(e, t, [n.message.message_id]));
}
var Z,
  ye,
  Q,
  $,
  be,
  xe = e(() => {
    ((Z = i()),
      c(),
      o(),
      T(),
      H(),
      h(),
      te(),
      ee(),
      Y(),
      (ye = 10 * 1e3),
      (Q = new Set()),
      ($ = f(r, () => new Map())),
      (be = a(r, ({ accountId: e, shouldFetch: t }) => ({
        queryKey: [`codex-workspace-messages`, e],
        enabled: t,
        refetchOnMount: !1,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        refetchInterval: ye,
        refetchIntervalInBackground: !0,
        staleTime: 6e4,
        queryFn: _e,
      }))));
  });
export {
  G as a,
  Y as c,
  k as d,
  B as f,
  K as i,
  H as l,
  he as n,
  q as o,
  z as p,
  ge as r,
  W as s,
  xe as t,
  V as u,
};
//# sourceMappingURL=app-initial~app-main~home-ambient-suggestions-content.js.map
