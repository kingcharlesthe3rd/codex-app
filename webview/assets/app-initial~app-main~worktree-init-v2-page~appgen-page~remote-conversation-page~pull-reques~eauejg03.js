import { n as e, s as t } from "./rolldown-runtime.js";
import {
  As as n,
  Gs as r,
  Ht as i,
  Ol as a,
  Os as o,
  Qc as s,
  Ut as c,
  Wc as l,
  Wt as u,
  Yc as d,
  _t as f,
  ac as ee,
  bt as te,
  cc as ne,
  dl as re,
  gl as ie,
  gt as p,
  hn as m,
  tc as h,
  xs as ae,
  yt as oe,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ea as g,
  Ei as se,
  FC as ce,
  Fa as _,
  Hn as le,
  If as v,
  Lb as y,
  Lf as ue,
  MC as de,
  Rb as b,
  Wn as fe,
  _v as pe,
  hC as me,
  jC as x,
  ki as S,
  mC as C,
  oC as he,
  po as w,
  sC as ge,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function T({ queryClient: e, hostId: t, cwd: n, enabled: r }) {
  return ie({
    enabled: r,
    queryFn: async () => {
      try {
        return v((await se(e, t, n, !1)).config);
      } catch {
        return null;
      }
    },
    queryKey: [...E, t, n],
    staleTime: p.FIVE_MINUTES,
  });
}
var E,
  D,
  O = e(() => {
    (re(),
      h(),
      _(),
      ue(),
      S(),
      c(),
      f(),
      (E = [`user-saved-config`]),
      (D = d(i, ({ cwd: e = null, hostId: t }, { get: n, queryClient: r }) =>
        T({ queryClient: r, hostId: t, cwd: e, enabled: n(w).includes(t) }),
      )));
  });
function k(e) {
  return (
    e === `none` ||
    e === `minimal` ||
    e === `low` ||
    e === `medium` ||
    e === `high` ||
    e === `xhigh` ||
    e === `max` ||
    e === `ultra`
  );
}
var A,
  j,
  M,
  N = e(() => {
    ((A = `gpt-5.5`), (j = `medium`), (M = [`minimal`, `low`, `medium`, `high`, `xhigh`, `max`]));
  });
function P({
  authMethod: e,
  availableModels: t,
  defaultModel: n,
  enabledReasoningEfforts: r,
  includeUltraReasoningEffort: i,
  models: a,
  useHiddenModels: o,
}) {
  let s = [],
    c = null,
    l = o && e !== `amazonBedrock`,
    u = a.some((e) => e.supportedReasoningEfforts.some(({ reasoningEffort: e }) => e === `max`)),
    d =
      i &&
      a.some((e) => e.supportedReasoningEfforts.some(({ reasoningEffort: e }) => e === `ultra`));
  return (
    a.forEach((n) => {
      if (l ? t.has(n.model) : !n.hidden) {
        let t = i
            ? n.supportedReasoningEfforts
            : n.supportedReasoningEfforts.filter(({ reasoningEffort: e }) => e !== `ultra`),
          a = (
            e === `copilot`
              ? [
                  t.find((e) => e.reasoningEffort === `medium`) ?? {
                    reasoningEffort: `medium`,
                    description: `medium effort`,
                  },
                ]
              : t
          ).filter(({ reasoningEffort: e }) => k(e) && r.has(e)),
          o = { ...n, supportedReasoningEfforts: a };
        (s.push(o), n.isDefault && (c = o));
      }
    }),
    (c ??= s.find((e) => e.model === n) ?? null),
    {
      models: s,
      defaultModel: c,
      hasModelSupportingMaxReasoningEffort: u,
      hasModelSupportingUltraReasoningEffort: d,
    }
  );
}
var F = e(() => {
  N();
});
async function I(e, { enabled: t, hostId: n, listModelsData: r, reasoningEffort: i }) {
  let a = x(e.get, m.enabledReasoningEfforts),
    o = a;
  (t && !a.includes(i) ? (o = [...a, i]) : !t && a.includes(i) && (o = a.filter((e) => e !== i)),
    o !== a &&
      (!t && (i === `max` || i === `ultra`) && (await _e(e, n, r, i)),
      await ce(e, m.enabledReasoningEfforts, o)));
}
async function _e(e, t, n, r) {
  let i = { hostId: t, cwd: null },
    a = e.query.snapshot(D, i),
    o = await a.getOrFetch(),
    s = e.get(g, i);
  if ((s?.reasoningEffort ?? o?.model_reasoning_effort ?? null) !== r) return;
  let c = s?.model ?? o?.model ?? n.defaultModel?.model,
    l = n.models.find((e) => e.model === c);
  if (l == null) return;
  let u = l.defaultReasoningEffort;
  if (!k(u)) return;
  let d = s?.profile ?? null;
  s == null && typeof o?.profile == `string` && (d = o.profile);
  let f = await b(`set-default-model-config-for-host`, {
    hostId: t,
    model: l.model,
    profile: d,
    reasoningEffort: u,
  });
  (await b(`clear-prewarmed-threads-for-host`, { hostId: t }),
    e.set(
      g,
      i,
      f.status === `okOverridden` ? { model: l.model, profile: d, reasoningEffort: u } : null,
    ),
    f.status !== `okOverridden` &&
      a.setData((e) =>
        e == null
          ? e
          : Object.assign(structuredClone(e), { model: l.model, model_reasoning_effort: u }),
      ),
    te.dispatchMessage(`query-cache-invalidate`, { queryKey: [...E, t, null] }));
}
var L,
  R,
  z = e(() => {
    (h(),
      u(),
      _(),
      y(),
      O(),
      N(),
      oe(),
      c(),
      de(),
      (L = [`low`, `medium`, `high`, `xhigh`]),
      (R = l(i, ({ get: e }) => new Set(x(e, m.enabledReasoningEfforts)))));
  });
function B(e) {
  let t = o(r()).safeParse(e.available_models),
    i = n().safeParse(e.use_hidden_models),
    a = r().safeParse(e.default_model);
  return {
    availableModels: new Set(t.success ? t.data : H),
    useHiddenModels: i.success ? i.data : U.useHiddenModels,
    defaultModel: a.success ? a.data : U.defaultModel,
  };
}
var V,
  H,
  U,
  W,
  G = e(() => {
    ((V = t(ne(), 1)),
      h(),
      ae(),
      N(),
      c(),
      (H = []),
      (U = { availableModels: new Set(H), useHiddenModels: !1, defaultModel: A }),
      (W = s(i, U, { isEqual: V.default })));
  });
function K() {
  let e = (0, q.c)(2),
    { value: t } = ge(`107580212`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = B(t)), (e[0] = t), (e[1] = n)), n);
}
var q,
  J = e(() => {
    ((q = a()), he(), G());
  });
function ve(e, t, n = Z) {
  return [...Q, e, t ?? `no-auth`, n];
}
function ye(e) {
  let t = (0, X.c)(12),
    n = e?.hostId ?? `local`,
    r = e?.limit ?? Z,
    i = fe(n),
    a = K(),
    o;
  t[0] === a.availableModels
    ? (o = t[1])
    : ((o = Array.from(a.availableModels).sort()), (t[0] = a.availableModels), (t[1] = o));
  let s = i?.authMethod ?? null,
    c = e?.includeUltraReasoningEffort !== !1,
    l;
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== a.defaultModel ||
  t[5] !== a.useHiddenModels ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== c
    ? ((l = {
        availableModels: o,
        authMethod: s,
        defaultModel: a.defaultModel,
        hostId: n,
        includeUltraReasoningEffort: c,
        limit: r,
        useHiddenModels: a.useHiddenModels,
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a.defaultModel),
      (t[5] = a.useHiddenModels),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u = i?.isLoading !== !0,
    d;
  return (
    t[10] === u ? (d = t[11]) : ((d = { enabled: u }), (t[10] = u), (t[11] = d)), ee($, l, d)
  );
}
function Y(e) {
  return e !== `pending`;
}
var X,
  Z,
  Q,
  $,
  be = e(() => {
    ((X = a()),
      h(),
      _(),
      y(),
      le(),
      c(),
      pe(),
      C(),
      f(),
      F(),
      z(),
      J(),
      (Z = 100),
      (Q = [`models`, `list`]),
      ($ = d(
        i,
        (
          {
            availableModels: e,
            authMethod: t,
            defaultModel: n,
            hostId: r,
            includeUltraReasoningEffort: i,
            limit: a,
            useHiddenModels: o,
          },
          { get: s },
        ) => {
          let c = s(R),
            l = i && s(me, `1186680773`);
          return {
            queryKey: ve(r, t, a),
            enabled: s(w).includes(r),
            staleTime: p.FIVE_MINUTES,
            queryFn: () =>
              b(`list-models-for-host`, { hostId: r, includeHidden: !0, cursor: null, limit: a }),
            select: ({ data: r }) =>
              P({
                authMethod: t,
                availableModels: new Set(e),
                defaultModel: n,
                enabledReasoningEfforts: c,
                includeUltraReasoningEffort: l,
                models: r,
                useHiddenModels: o,
              }),
          };
        },
      )));
  });
export {
  O as C,
  T as S,
  M as _,
  K as a,
  E as b,
  B as c,
  z as d,
  I as f,
  A as g,
  j as h,
  J as i,
  L as l,
  F as m,
  be as n,
  G as o,
  P as p,
  ye as r,
  W as s,
  Y as t,
  R as u,
  N as v,
  D as x,
  k as y,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~eauejg03.js.map
