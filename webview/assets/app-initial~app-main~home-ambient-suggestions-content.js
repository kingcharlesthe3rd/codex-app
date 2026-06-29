import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  $j as i,
  AB as a,
  AV as o,
  Au as s,
  BN as c,
  BV as l,
  DN as u,
  Ev as d,
  Ex as f,
  FB as p,
  FV as m,
  Fu as h,
  GN as g,
  Gj as _,
  Gu as v,
  Hm as y,
  IA as b,
  IB as x,
  IV as S,
  Iu as C,
  JR as w,
  JV as T,
  Kj as E,
  Ku as D,
  LB as O,
  Lu as ee,
  Mm as te,
  Mu as ne,
  Nu as re,
  ON as ie,
  OV as ae,
  Op as k,
  Ou as oe,
  PA as se,
  PB as A,
  QP as j,
  Qf as ce,
  SV as le,
  Sf as ue,
  TV as de,
  Tp as fe,
  Tx as pe,
  UF as me,
  Up as he,
  VE as ge,
  VF as _e,
  VN as ve,
  WN as ye,
  Wm as be,
  YN as xe,
  Zf as Se,
  aP as Ce,
  ak as we,
  am as Te,
  bB as Ee,
  bF as De,
  bP as M,
  bV as Oe,
  cM as ke,
  cP as Ae,
  dB as je,
  dV as Me,
  eM as Ne,
  fB as Pe,
  fV as Fe,
  gB as Ie,
  gV as Le,
  iA as Re,
  iF as ze,
  ix as Be,
  ju as Ve,
  ku as He,
  lF as Ue,
  lP as We,
  mP as Ge,
  mv as Ke,
  nA as qe,
  oB as Je,
  oP as Ye,
  ok as N,
  pP as Xe,
  pV as Ze,
  qV as P,
  qj as Qe,
  rF as $e,
  rx as et,
  sF as tt,
  uM as nt,
  vf as rt,
  vp as it,
  wB as at,
  wV as F,
  wv as ot,
  yP as st,
  yV as ct,
  yf as lt,
  yp as I,
  zV as ut,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Dd as dt,
  Od as ft,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  _ as pt,
  v as mt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  C as L,
  b as ht,
  w as gt,
  x as _t,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps.js";
function vt({ queryClient: e, hostId: t, cwd: n, enabled: r }) {
  return m({
    enabled: r,
    queryFn: async () => {
      try {
        return et((await lt(e, t, n, !1)).config);
      } catch {
        return null;
      }
    },
    queryKey: [...R, t, n],
    staleTime: Ce.FIVE_MINUTES,
  });
}
var R,
  z,
  yt = e(() => {
    (o(),
      a(),
      k(),
      Be(),
      ue(),
      r(),
      Ye(),
      (R = [`user-saved-config`]),
      (z = Le(j, ({ cwd: e = null, hostId: t }, { get: n, queryClient: r }) =>
        vt({ queryClient: r, hostId: t, cwd: e, enabled: n(Te).includes(t) }),
      )));
  }),
  bt,
  xt = e(() => {
    (ze(),
      (bt = $e({
        openConfigToml: {
          id: `codex.profileDropdown.openConfigToml`,
          defaultMessage: `Open config.toml`,
          description: `Action to open the MCP configuration file`,
        },
        openConfigTomlWsl: {
          id: `codex.profileDropdown.openConfigToml.wsl`,
          defaultMessage: `Open config.toml in WSL environment`,
          description: `Action to open the MCP configuration file inside Windows Subsystem for Linux`,
        },
      })));
  });
async function St(e) {
  mt({
    path: e.path,
    cwd: null,
    hostId: e.hostId,
    target: await Ct(e.hostId),
    line: e.range?.start.line,
    column: e.range?.start.column,
  });
}
async function Ct(e) {
  try {
    return (await xe(`open-in-targets`, { params: { cwd: null, hostId: e } })).preferredTarget;
  } catch {
    return;
  }
}
var wt = e(() => {
  (pt(), n());
});
function Tt(e) {
  let t = (0, B.c)(7),
    { hostId: n } = e,
    { configPath: r, label: i } = Dt(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && St({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  return (
    t[3] !== i || t[4] !== a || t[5] !== o
      ? ((s = (0, V.jsx)(u, {
          color: `secondary`,
          size: `toolbar`,
          className: `inline-flex w-fit`,
          onClick: a,
          disabled: o,
          children: i,
        })),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Et(e) {
  let t = (0, B.c)(8),
    { hostId: n } = e,
    { configPath: r, label: i } = Dt(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && St({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, V.jsx)(oe, { className: `icon-xxs shrink-0`, "aria-hidden": !0 })), (t[3] = s))
    : (s = t[3]);
  let c;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((c = (0, V.jsxs)(`button`, {
          type: `button`,
          className: `inline-flex cursor-interaction items-center gap-1 text-start font-medium text-token-text-secondary hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-50`,
          onClick: a,
          disabled: o,
          children: [i, s],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Dt(e) {
  let t = (0, B.c)(7),
    { data: n } = Ve(),
    r = g(me.runCodexInWsl),
    i = re(e),
    a = n?.platform === `win32` && n?.hasWsl && r,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = i == null ? null : Ot.default.join(i, `config.toml`)), (t[0] = i), (t[1] = o));
  let s = o,
    c;
  t[2] === a
    ? (c = t[3])
    : ((c = a
        ? (0, V.jsx)(tt, { ...bt.openConfigTomlWsl })
        : (0, V.jsx)(tt, { ...bt.openConfigToml })),
      (t[2] = a),
      (t[3] = c));
  let l = c,
    u;
  return (
    t[4] !== s || t[5] !== l
      ? ((u = { configPath: s, label: l }), (t[4] = s), (t[5] = l), (t[6] = u))
      : (u = t[6]),
    u
  );
}
var B,
  Ot,
  V,
  kt = e(() => {
    ((B = P()), (Ot = t(w(), 1)), De(), ze(), ie(), ne(), s(), He(), ve(), xt(), wt(), (V = l()));
  });
function At(e, t, n, r) {
  return new Promise((i) => {
    e.get(Nt, JSON.stringify(t))({ resolve: i, selection: n, target: t, write: r });
  });
}
function jt({ conversationId: e, hasConversation: t, hostId: n, cwd: r }) {
  return e != null && t ? [`conversation`, e] : [`default`, n, r];
}
function Mt(e, t) {
  e.get(U, t.target) === t.selection &&
    (e.set(U, t.target, null),
    t.target[0] === `default` && e.get(H) === t.selection && e.set(H, null));
}
var H,
  U,
  Nt,
  Pt = e(() => {
    (a(),
      r(),
      (H = ct(j, null)),
      (U = Oe(j, (e) => null)),
      (Nt = Ze(j, (e, { scope: t }) => {
        let n = null,
          r = !1;
        async function i() {
          if (!r) {
            for (r = !0; n != null; ) {
              let e = n;
              n = null;
              try {
                await e.write();
              } catch {}
              (Mt(t, e), e.resolve());
            }
            r = !1;
          }
        }
        return (e) => {
          let r = n;
          (t.set(U, e.target, e.selection),
            e.target[0] === `default` && t.set(H, e.selection),
            (n = e),
            r != null && (Mt(t, r), r.resolve()),
            i());
        };
      })));
  });
function Ft({
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
          ).filter(({ reasoningEffort: e }) => gt(e) && r.has(e)),
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
var It = e(() => {
  L();
});
async function Lt(e, { enabled: t, hostId: n, listModelsData: r, reasoningEffort: i }) {
  let a = c(e.get, _e.enabledReasoningEfforts),
    o = a;
  (t && !a.includes(i) ? (o = [...a, i]) : !t && a.includes(i) && (o = a.filter((e) => e !== i)),
    o !== a &&
      (!t && (i === `max` || i === `ultra`) && (await Rt(e, n, r, i)),
      await ye(e, _e.enabledReasoningEfforts, o)));
}
async function Rt(e, t, n, r) {
  let i = { hostId: t, cwd: null },
    a = e.query.snapshot(z, i),
    o = await a.getOrFetch(),
    s = e.get(I, i);
  if ((s?.reasoningEffort ?? o?.model_reasoning_effort ?? null) !== r) return;
  let c = s?.model ?? o?.model ?? n.defaultModel?.model,
    l = n.models.find((e) => e.model === c);
  if (l == null) return;
  let u = l.defaultReasoningEffort;
  if (!gt(u)) return;
  let d = s?.profile ?? null;
  s == null && typeof o?.profile == `string` && (d = o.profile);
  let f = await N(`set-default-model-config-for-host`, {
    hostId: t,
    model: l.model,
    profile: d,
    reasoningEffort: u,
  });
  (await N(`clear-prewarmed-threads-for-host`, { hostId: t }),
    e.set(
      I,
      i,
      f.status === `okOverridden` ? { model: l.model, profile: d, reasoningEffort: u } : null,
    ),
    f.status !== `okOverridden` &&
      a.setData((e) =>
        e == null
          ? e
          : Object.assign(structuredClone(e), { model: l.model, model_reasoning_effort: u }),
      ),
    We.dispatchMessage(`query-cache-invalidate`, { queryKey: [...R, t, null] }));
}
var zt,
  Bt,
  Vt = e(() => {
    (a(),
      De(),
      k(),
      we(),
      yt(),
      L(),
      Ae(),
      r(),
      ve(),
      (zt = [`low`, `medium`, `high`, `xhigh`]),
      (Bt = Me(j, ({ get: e }) => new Set(c(e, _e.enabledReasoningEfforts)))));
  });
function Ht(e) {
  let t = je(at()).safeParse(e.available_models),
    n = Pe().safeParse(e.use_hidden_models),
    r = at().safeParse(e.default_model);
  return {
    availableModels: new Set(t.success ? t.data : Wt),
    useHiddenModels: n.success ? n.data : W.useHiddenModels,
    defaultModel: r.success ? r.data : W.defaultModel,
  };
}
var Ut,
  Wt,
  W,
  Gt,
  Kt = e(() => {
    ((Ut = t(O(), 1)),
      a(),
      Je(),
      L(),
      r(),
      (Wt = []),
      (W = { availableModels: new Set(Wt), useHiddenModels: !1, defaultModel: _t }),
      (Gt = ct(j, W, { isEqual: Ut.default })));
  });
function qt() {
  let e = (0, Jt.c)(2),
    { value: t } = E(`107580212`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = Ht(t)), (e[0] = t), (e[1] = n)), n);
}
var Jt,
  Yt = e(() => {
    ((Jt = P()), _(), Kt());
  });
function Xt(e, t, n = $t) {
  return [...en, e, t ?? `no-auth`, n];
}
function G(e) {
  let t = (0, Qt.c)(12),
    n = e?.hostId ?? `local`,
    r = e?.limit ?? $t,
    i = ee(n),
    a = qt(),
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
    t[10] === u ? (d = t[11]) : ((d = { enabled: u }), (t[10] = u), (t[11] = d)), A(tn, l, d)
  );
}
function Zt(e) {
  return e !== `pending`;
}
var Qt,
  $t,
  en,
  tn,
  nn = e(() => {
    ((Qt = P()),
      a(),
      k(),
      we(),
      h(),
      r(),
      ge(),
      i(),
      Ye(),
      It(),
      Vt(),
      Yt(),
      ($t = 100),
      (en = [`models`, `list`]),
      (tn = Le(
        j,
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
          let c = s(Bt),
            l = i && s(Ne, `1186680773`);
          return {
            queryKey: Xt(r, t, a),
            enabled: s(Te).includes(r),
            staleTime: Ce.FIVE_MINUTES,
            queryFn: () =>
              N(`list-models-for-host`, { hostId: r, includeHidden: !0, cursor: null, limit: a }),
            select: ({ data: r }) =>
              Ft({
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
function rn(e) {
  return an.safeParse(e).success;
}
var an,
  on = e(() => {
    (Je(), (an = Ee({ code: Ie(-32600), message: at().min(1) })));
  });
function sn(e, t) {
  return gt(e) && t.includes(e) ? e : ht;
}
function K(e, t) {
  return e?.find((e) => e.model === t);
}
function cn({ userSavedModelString: e, userSavedReasoningEffort: t, listModelsData: n }) {
  let r = e ? K(n?.models, e) : (n?.defaultModel ?? K(n?.models, `gpt-5.5`)),
    i = r?.supportedReasoningEfforts?.map((e) => e.reasoningEffort),
    a = t != null && i != null && i.includes(t) ? t : r?.defaultReasoningEffort;
  return {
    model: r ? r.model : (e ?? `gpt-5.5`),
    reasoningEffort: a ?? t ?? n?.defaultModel?.defaultReasoningEffort ?? `medium`,
    profile: null,
    isLoading: !1,
  };
}
var ln = e(() => {
  L();
});
function un(e, t) {
  return [...R, e, t];
}
function dn(e, t) {
  return t == null
    ? e
    : { ...e, model: t.model, reasoningEffort: t.reasoningEffort, profile: t.profile };
}
function fn() {
  let e = (0, q.c)(3),
    t = qt(),
    { data: n, isLoading: r } = D(`copilot-default-model`),
    i = n ?? t.defaultModel,
    a;
  return (
    e[0] !== r || e[1] !== i
      ? ((a = { model: i, reasoningEffort: `medium`, profile: null, isLoading: r }),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
function pn(e) {
  let t = (0, q.c)(50),
    { hostId: n, cwd: r, isHostRegistered: i, waitForModelList: a } = e,
    o = a === void 0 ? !1 : a,
    s = p(j).queryClient,
    c;
  t[0] === n ? (c = t[1]) : ((c = { hostId: n }), (t[0] = n), (t[1] = c));
  let { data: l, isLoading: u } = G(c),
    d;
  t[2] !== r || t[3] !== n
    ? ((d = { hostId: n, cwd: r }), (t[2] = r), (t[3] = n), (t[4] = d))
    : (d = t[4]);
  let f = A(I, d),
    m;
  t[5] !== r || t[6] !== n || t[7] !== i || t[8] !== s
    ? ((m = vt({ queryClient: s, hostId: n, cwd: r, enabled: i })),
      (t[5] = r),
      (t[6] = n),
      (t[7] = i),
      (t[8] = s),
      (t[9] = m))
    : (m = t[9]);
  let { data: h, dataUpdatedAt: g, isLoading: _ } = S(m),
    v;
  t[10] !== r || t[11] !== n
    ? ((v = { hostId: n, cwd: r }), (t[10] = r), (t[11] = n), (t[12] = v))
    : (v = t[12]);
  let { data: y, dataUpdatedAt: b, isLoading: x } = A(z, v),
    C;
  t[13] !== r ||
  t[14] !== n ||
  t[15] !== i ||
  t[16] !== x ||
  t[17] !== _ ||
  t[18] !== y?.model ||
  t[19] !== y?.model_reasoning_effort ||
  t[20] !== b ||
  t[21] !== s ||
  t[22] !== h?.model ||
  t[23] !== h?.model_reasoning_effort ||
  t[24] !== g
    ? ((C = () => {
        let e = s.getQueryCache().find({ exact: !0, queryKey: un(n, r) }),
          t = e?.state.dataUpdatedAt ?? 0,
          a = h?.model ?? null,
          o = h?.model_reasoning_effort ?? null,
          c = y?.model ?? null,
          l = y?.model_reasoning_effort ?? null;
        if (t === 0 || g !== t || b === t || (a === c && o === l)) return;
        let u = setTimeout(() => {
          Ge.warning(`model_settings.config_query_diverged`, {
            safe: {
              cacheDataUpdatedAt: t,
              directDataUpdatedAt: g,
              directIsLoading: _,
              isHostRegistered: i,
              maitaiDataUpdatedAt: b,
              maitaiIsLoading: x,
              observerCount: e?.getObserversCount() ?? 0,
            },
            sensitive: {
              cwd: r,
              directModel: a,
              directReasoningEffort: o,
              hostId: n,
              maitaiModel: c,
              maitaiReasoningEffort: l,
            },
          });
        });
        return () => {
          clearTimeout(u);
        };
      }),
      (t[13] = r),
      (t[14] = n),
      (t[15] = i),
      (t[16] = x),
      (t[17] = _),
      (t[18] = y?.model),
      (t[19] = y?.model_reasoning_effort),
      (t[20] = b),
      (t[21] = s),
      (t[22] = h?.model),
      (t[23] = h?.model_reasoning_effort),
      (t[24] = g),
      (t[25] = C))
    : (C = t[25]);
  let w;
  (t[26] !== r ||
  t[27] !== n ||
  t[28] !== i ||
  t[29] !== x ||
  t[30] !== _ ||
  t[31] !== y ||
  t[32] !== b ||
  t[33] !== s ||
  t[34] !== h ||
  t[35] !== g
    ? ((w = [r, n, i, x, _, y, b, s, h, g]),
      (t[26] = r),
      (t[27] = n),
      (t[28] = i),
      (t[29] = x),
      (t[30] = _),
      (t[31] = y),
      (t[32] = b),
      (t[33] = s),
      (t[34] = h),
      (t[35] = g),
      (t[36] = w))
    : (w = t[36]),
    (0, J.useEffect)(C, w));
  let T = h?.model ?? null,
    E;
  t[37] !== l?.models || t[38] !== T || t[39] !== o
    ? ((E = o && T != null && l?.models.some((e) => e.model === T) === !1),
      (t[37] = l?.models),
      (t[38] = T),
      (t[39] = o),
      (t[40] = E))
    : (E = t[40]);
  let D = E,
    O;
  if (
    t[41] !== u ||
    t[42] !== _ ||
    t[43] !== l ||
    t[44] !== h ||
    t[45] !== T ||
    t[46] !== f ||
    t[47] !== D ||
    t[48] !== o
  ) {
    let e = cn({
        userSavedModelString: D ? null : T,
        userSavedReasoningEffort: h?.model_reasoning_effort ?? null,
        listModelsData:
          o && l != null ? { ...l, defaultModel: l.defaultModel ?? l.models[0] ?? null } : l,
      }),
      n = h?.model == null || h.model_reasoning_effort == null;
    ((O = dn(
      {
        ...e,
        profile: typeof h?.profile == `string` ? h.profile : null,
        isLoading: _ || (o ? l?.models[0] == null : u && n),
      },
      f,
    )),
      (t[41] = u),
      (t[42] = _),
      (t[43] = l),
      (t[44] = h),
      (t[45] = T),
      (t[46] = f),
      (t[47] = D),
      (t[48] = o),
      (t[49] = O));
  } else O = t[49];
  return O;
}
function mn(e) {
  let t = (0, q.c)(4),
    { hostId: n, cwd: r } = e,
    i = A(vn, n),
    a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = { hostId: n, cwd: r, isHostRegistered: i, waitForModelList: !0 }),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    pn(a)
  );
}
function hn(e) {
  let t = (0, q.c)(5),
    { hostId: n, cwd: r } = e,
    i = ut(),
    a = ce(),
    o;
  return (
    t[0] !== r || t[1] !== n || t[2] !== a || t[3] !== i
      ? ((o = async () => {
          let e = un(n, r);
          (await i.cancelQueries({ queryKey: e, exact: !0 }), await a(e));
        }),
        (t[0] = r),
        (t[1] = n),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function gn(e, t) {
  return rn(t)
    ? e.formatMessage(
        {
          id: `composer.modelSettings.errorConfigValidation`,
          defaultMessage: `Couldn’t update model settings. Check your config.toml.{br}{br}{message}`,
          description: `Error shown when updating model settings fails because the configuration is invalid`,
        },
        { br: (0, J.createElement)(`br`), message: t.message },
      )
    : e.formatMessage({
        id: `composer.modelSettings.errorGeneric`,
        defaultMessage: `Couldn’t update model settings`,
        description: `Error shown when updating model settings fails for a non-auth reason`,
      });
}
function _n(e = null) {
  let t = p(j),
    n = t.queryClient,
    r = ft(e),
    i = r.hostId,
    a = A(vn, i),
    o = ee(i)?.authMethod === `copilot`,
    s = Ue(),
    c = r.cwd,
    l = pn({ hostId: i, cwd: c, isHostRegistered: a }),
    u = fn(),
    d = A(fe, e),
    m = A(U, jt({ conversationId: e, hasConversation: d, hostId: i, cwd: c })),
    h = A(he, e),
    g = h?.settings.model ?? null,
    _ = g != null && g.trim().length > 0 ? g : null,
    v = (0, J.useCallback)(
      async (t, n) =>
        e == null || !d
          ? !1
          : (await N(`update-thread-settings-for-next-turn`, {
              conversationId: e,
              threadSettings: { model: t, effort: n, multiAgentMode: qe },
            }),
            !0),
      [e, d],
    ),
    y = d
      ? {
          model: _ ?? l.model,
          reasoningEffort: h?.settings.reasoning_effort ?? null,
          profile: l.profile,
          isLoading: l.isLoading && _ == null,
        }
      : o
        ? u
        : l,
    b = m == null ? y : { ...y, ...m },
    x = hn({ hostId: i, cwd: c }),
    S = (0, J.useCallback)(
      (e) => {
        Ge.error(`Failed to update model and reasoning effort`, {
          safe: {},
          sensitive: { error: e },
        });
        let n = t.get(nt),
          r = gn(s, e);
        if (rn(e)) {
          n.danger(r, {
            id: `composer.modelSettings.updateError`,
            description: (0, J.createElement)(
              `div`,
              { className: `mt-4` },
              (0, J.createElement)(Et, { hostId: i }),
            ),
          });
          return;
        }
        n.danger(r, { id: `composer.modelSettings.updateError` });
      },
      [i, s, t],
    ),
    C = (0, J.useCallback)(
      async (e, t) => {
        try {
          if (!(await v(e, t))) throw Error(`No conversation available for next-turn model update`);
        } catch (e) {
          throw (S(e), e);
        }
      },
      [v, S],
    ),
    w = (0, J.useCallback)(
      async (e, r) => {
        let s = null,
          u;
        try {
          if (await v(e, r)) return;
          if (o) {
            await f(t, `copilot-default-model`, e, { throwOnFailure: !0 });
            return;
          }
          if (
            (Ge.info(`Setting default model and reasoning effort`, {
              safe: { newModel: e, newEffort: r, profile: l.profile },
            }),
            !a)
          )
            throw Error(`Model settings host is unavailable`);
          s = un(i, c);
          let d = { hostId: i, cwd: c };
          (await n.cancelQueries({ exact: !0, queryKey: s }),
            (u = n.getQueryData(s)),
            n.setQueryData(s, (t) =>
              t == null
                ? t
                : Object.assign(structuredClone(t), { model: e, model_reasoning_effort: r }),
            ));
          let p = await N(`set-default-model-config-for-host`, {
            hostId: i,
            model: e,
            reasoningEffort: r,
            profile: l.profile,
          });
          if (
            (await N(`clear-prewarmed-threads-for-host`, { hostId: i }),
            p?.status === `okOverridden`)
          ) {
            (n.setQueryData(s, u),
              t.set(I, d, { model: e, reasoningEffort: r, profile: l.profile }));
            return;
          }
          (t.set(I, d, null), await x(), await t.query.fetch(z, { hostId: i, cwd: c }));
        } catch (e) {
          (s != null && n.setQueryData(s, u), S(e));
        }
      },
      [o, v, l.profile, x, a, i, n, t, S, c],
    );
  return {
    setModelAndReasoningEffortForNextTurn: C,
    setModelAndReasoningEffort: (0, J.useCallback)(
      (n, r) =>
        At(
          t,
          jt({ conversationId: e, hasConversation: d, hostId: i, cwd: c }),
          { model: n, reasoningEffort: r },
          () => w(n, r),
        ),
      [e, d, i, t, c, w],
    ),
    modelSettings: b,
  };
}
var q,
  J,
  vn,
  yn = e(() => {
    ((q = P()),
      o(),
      a(),
      (J = t(T(), 1)),
      ze(),
      k(),
      we(),
      Re(),
      yt(),
      h(),
      kt(),
      ke(),
      Pt(),
      pe(),
      v(),
      Se(),
      nn(),
      Yt(),
      r(),
      Xe(),
      on(),
      ln(),
      dt(),
      (vn = Fe(j, (e, { get: t }) => t(Te).includes(e))));
  });
function bn(e) {
  let t = (0, xn.c)(6),
    n = x(it),
    r = e?.hostId ?? n,
    i = ee(r),
    a = i?.authMethod === `chatgpt`,
    o = i?.authMethod ?? null,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = { authMethod: o, hostId: r }), (t[0] = r), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let { data: c, isPending: l } = A(rt, s),
    u = !!i?.isLoading || (a && l),
    d = a && !u && c != null && c?.requirements?.featureRequirements?.fast_mode !== !1,
    f;
  return (
    t[3] !== u || t[4] !== d
      ? ((f = { isServiceTierAllowed: d, isLoading: u }), (t[3] = u), (t[4] = d), (t[5] = f))
      : (f = t[5]),
    f
  );
}
var xn,
  Sn = e(() => {
    ((xn = P()), a(), k(), h(), ue());
  });
function Y() {
  let e = (0, X.c)(2),
    t = d(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = Tn.some((e) => ot({ path: e, end: !0 }, t.pathname) != null)),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function Cn(e, t) {
  return e.includes(t) ? e : [...e, t];
}
var X,
  wn,
  Tn,
  En,
  Dn,
  Z,
  On,
  Q,
  kn,
  An,
  jn,
  Mn = e(() => {
    ((X = P()),
      le(),
      (wn = t(T(), 1)),
      Ke(),
      nn(),
      ln(),
      st(),
      y(),
      yn(),
      Sn(),
      (Tn = [`/`, `/local/:conversationId`]),
      (En = new Set([`gpt-5.4`, `gpt-5.5`])),
      (Dn = () => {}),
      (Z = M(`seen-model-upgrade-list`, [])),
      (On = M(`latest-model-seen`, null)),
      (Q = (e, t, n, r) => ({
        announcementContent: n,
        showAnnouncement: e && !t,
        dismissAnnouncement: r,
      })),
      (kn = () => {
        let e = (0, X.c)(9),
          t = Y(),
          { data: n, isLoading: r } = G(),
          [i, a] = F(Z),
          o;
        e[0] !== i || e[1] !== n?.models
          ? ((o =
              n?.models.find(
                (e) => e.availabilityNux != null && !En.has(e.model) && !i.includes(e.model),
              ) ?? null),
            (e[0] = i),
            (e[1] = n?.models),
            (e[2] = o))
          : (o = e[2]);
        let s = o,
          c;
        e[3] === s
          ? (c = e[4])
          : ((c =
              s == null
                ? null
                : {
                    defaultReasoningEffort: s.defaultReasoningEffort,
                    ...s.availabilityNux,
                    model: s.model,
                  }),
            (e[3] = s),
            (e[4] = c));
        let l = c,
          u;
        return (
          e[5] !== s || e[6] !== i || e[7] !== a
            ? ((u = () => {
                s != null && a(Cn(i, s.model));
              }),
              (e[5] = s),
              (e[6] = i),
              (e[7] = a),
              (e[8] = u))
            : (u = e[8]),
          Q(s != null && !r && t, !1, l, u)
        );
      }),
      (An = () => {
        let e = (0, X.c)(25),
          t = Y(),
          { modelSettings: n } = _n(),
          { data: r } = G(),
          [i, a] = F(Z),
          [o, s] = F(On),
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g;
        if (e[0] !== i || e[1] !== o || e[2] !== r?.models || e[3] !== n.model) {
          ((f = o == null ? i : Cn(i, o)), (h = f !== i), (m = o != null));
          let t = K(r?.models, n.model);
          ((l = t?.upgrade),
            (g = l == null ? void 0 : K(r?.models, l)),
            (c =
              t?.upgradeInfo == null || g == null
                ? null
                : {
                    ...t.upgradeInfo,
                    defaultReasoningEffort: g.defaultReasoningEffort,
                    model: g.model,
                  }),
            (d = g != null && En.has(g.model)),
            (u = !1),
            (p = null),
            l && ((p = l), (u = f.includes(p))),
            (e[0] = i),
            (e[1] = o),
            (e[2] = r?.models),
            (e[3] = n.model),
            (e[4] = c),
            (e[5] = l),
            (e[6] = u),
            (e[7] = d),
            (e[8] = f),
            (e[9] = p),
            (e[10] = m),
            (e[11] = h),
            (e[12] = g));
        } else
          ((c = e[4]),
            (l = e[5]),
            (u = e[6]),
            (d = e[7]),
            (f = e[8]),
            (p = e[9]),
            (m = e[10]),
            (h = e[11]),
            (g = e[12]));
        let _, v;
        (e[13] !== f || e[14] !== a || e[15] !== s || e[16] !== m || e[17] !== h
          ? ((_ = () => {
              (h && a(f), m && s(null));
            }),
            (v = [f, a, s, m, h]),
            (e[13] = f),
            (e[14] = a),
            (e[15] = s),
            (e[16] = m),
            (e[17] = h),
            (e[18] = _),
            (e[19] = v))
          : ((_ = e[18]), (v = e[19])),
          (0, wn.useEffect)(_, v));
        let y;
        e[20] !== f || e[21] !== p || e[22] !== a || e[23] !== s
          ? ((y = () => {
              p && (a(Cn(f, p)), s(null));
            }),
            (e[20] = f),
            (e[21] = p),
            (e[22] = a),
            (e[23] = s),
            (e[24] = y))
          : (y = e[24]);
        let b = y;
        return Q(!!l && !n.isLoading && g != null && !d && t, u, c, b);
      }),
      (jn = () => {
        let e = (0, X.c)(9),
          t = Y(),
          { isServiceTierAllowed: n } = bn(),
          { modelSettings: r } = _n(),
          { data: i } = G(),
          a = de(Z),
          o,
          s;
        e[0] !== i?.models || e[1] !== r.model
          ? ((o = K(i?.models, r.model)),
            (s = be(o, te)),
            (e[0] = i?.models),
            (e[1] = r.model),
            (e[2] = o),
            (e[3] = s))
          : ((o = e[2]), (s = e[3]));
        let c = s,
          l;
        e[4] !== a || e[5] !== i?.models
          ? ((l = i?.models.find((e) => be(e, `priority`) && a.includes(e.model)) ?? null),
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
          Q(n && !r.isLoading && t && d != null, !1, f, Dn)
        );
      }));
  });
function Nn(e, t) {
  return t == null ? null : (e[t] ?? null);
}
function Pn(e, t, n) {
  let r = Nn(e, t);
  return r != null && r >= n ? e : { ...e, [t]: n };
}
var Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn = e(() => {
    (le(),
      st(),
      (Fn = ae(!1)),
      (In = M(`has-seen-knowledge-work-announcement`, !1)),
      (Ln = M(`has-seen-fast-mode-announcement`, !1)),
      (Rn = M(`has-seen-work-plugins-announcement`, !1)),
      (zn = M(`workspace-message-last-seen-at-by-account`, {})));
  });
function Vn(e, t, n) {
  if (e == null) return null;
  let r =
    e.messages.find((e) => e.message_type === `announcement` && !t.has(e.message_id) && Un(e, n)) ??
    null;
  return r == null ? null : { message: r };
}
function Hn(e) {
  return e?.messages.find((e) => e.message_type === `headline`) ?? null;
}
function Un(e, t) {
  return t == null || e.created_at > t;
}
function Wn(e, t) {
  return t == null ? Qn : (e.get(t) ?? Qn);
}
function Gn(e, t, n) {
  let r = new Map(e),
    i = new Set(r.get(t) ?? []);
  for (let e of n) i.add(e);
  return (r.set(t, i), r);
}
function Kn() {
  let e = (0, $.c)(10),
    t = p(j),
    { accountId: n, data: r, isLoading: i, shouldFetch: a } = Jn(),
    o = Wn(x($n), n),
    [s, c] = F(zn),
    l = Nn(s, n),
    u = a ? Vn(r, o, l) : null,
    d;
  e[0] !== n || e[1] !== u || e[2] !== t || e[3] !== c || e[4] !== s
    ? ((d = () => {
        u == null || n == null || (Xn(t, n, u), c(Pn(s, n, u.message.created_at)));
      }),
      (e[0] = n),
      (e[1] = u),
      (e[2] = t),
      (e[3] = c),
      (e[4] = s),
      (e[5] = d))
    : (d = e[5]);
  let f;
  return (
    e[6] !== u || e[7] !== i || e[8] !== d
      ? ((f = { announcement: u, dismissAnnouncement: d, isLoading: i }),
        (e[6] = u),
        (e[7] = i),
        (e[8] = d),
        (e[9] = f))
      : (f = e[9]),
    f
  );
}
function qn() {
  let e = (0, $.c)(5),
    { data: t, shouldFetch: n } = Jn(),
    r;
  e[0] !== t || e[1] !== n
    ? ((r = n ? Hn(t) : null), (e[0] = t), (e[1] = n), (e[2] = r))
    : (r = e[2]);
  let i;
  return (e[3] === r ? (i = e[4]) : ((i = { headline: r }), (e[3] = r), (e[4] = i)), i);
}
function Jn() {
  let e = (0, $.c)(8),
    { accountId: t, authMethod: n, isLoading: r } = C(),
    i = Y(),
    a = Qe(`4285716042`) && i && !r && n === `chatgpt` && t != null,
    o;
  e[0] !== t || e[1] !== a
    ? ((o = { accountId: t, shouldFetch: a }), (e[0] = t), (e[1] = a), (e[2] = o))
    : (o = e[2]);
  let s = A(er, o),
    c = a && s.isLoading,
    l;
  return (
    e[3] !== t || e[4] !== s.data || e[5] !== a || e[6] !== c
      ? ((l = { accountId: t, data: s.data, isLoading: c, shouldFetch: a }),
        (e[3] = t),
        (e[4] = s.data),
        (e[5] = a),
        (e[6] = c),
        (e[7] = l))
      : (l = e[7]),
    l
  );
}
async function Yn() {
  return se.safeGet(`/wham/workspace-messages`, {
    additionalHeaders: { "Cache-Control": `no-store` },
  });
}
function Xn(e, t, n) {
  e.set($n, (e) => Gn(e, t, [n.message.message_id]));
}
var $,
  Zn,
  Qn,
  $n,
  er,
  tr = e(() => {
    (($ = P()),
      le(),
      a(),
      h(),
      Mn(),
      r(),
      _(),
      b(),
      Bn(),
      (Zn = 10 * 1e3),
      (Qn = new Set()),
      ($n = ct(j, () => new Map())),
      (er = Le(j, ({ accountId: e, shouldFetch: t }) => ({
        queryKey: [`codex-workspace-messages`, e],
        enabled: t,
        refetchOnMount: !1,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        refetchInterval: Zn,
        refetchIntervalInBackground: !0,
        staleTime: 6e4,
        queryFn: Yn,
      }))));
  });
export {
  Vt as A,
  yt as B,
  nn as C,
  Ht as D,
  Gt as E,
  kt as F,
  wt as I,
  St as L,
  Ft as M,
  It as N,
  zt as O,
  Tt as P,
  R,
  Zt as S,
  Kt as T,
  mn as _,
  In as a,
  ln as b,
  Bn as c,
  Y as d,
  An as f,
  yn as g,
  bn as h,
  Ln as i,
  Lt as j,
  Bt as k,
  Mn as l,
  Sn as m,
  Kn as n,
  Rn as o,
  kn as p,
  qn as r,
  Fn as s,
  tr as t,
  jn as u,
  _n as v,
  G as w,
  sn as x,
  K as y,
  z,
};
//# sourceMappingURL=app-initial~app-main~home-ambient-suggestions-content.js.map
