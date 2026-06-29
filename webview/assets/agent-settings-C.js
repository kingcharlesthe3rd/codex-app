import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  $t as i,
  AB as a,
  AV as o,
  BV as s,
  CS as c,
  Cf as l,
  Ct as u,
  DL as d,
  DN as f,
  Ef as p,
  Ev as m,
  FB as h,
  Ff as g,
  Fs as _,
  Ft as v,
  Ga as y,
  Gi as b,
  Gj as x,
  HE as S,
  Ht as C,
  IB as w,
  IV as T,
  Is as E,
  JV as D,
  La as O,
  MA as k,
  MV as A,
  Mu as ee,
  NA as j,
  NL as te,
  Nu as ne,
  ON as re,
  PB as ie,
  Ps as ae,
  QP as oe,
  Qt as se,
  Qu as M,
  Sf as N,
  TM as P,
  TS as ce,
  UA as F,
  Uf as le,
  Ut as I,
  VE as ue,
  WA as de,
  Wa as L,
  X as fe,
  Xt as pe,
  YN as R,
  Yj as me,
  Z as he,
  Zi as z,
  Zt as ge,
  Zu as B,
  _f as _e,
  aP as ve,
  ak as V,
  bB as H,
  bF as U,
  bf as ye,
  cM as be,
  ea as xe,
  en as W,
  ff as Se,
  iF as G,
  iT as Ce,
  kE as we,
  kf as Te,
  lF as Ee,
  mv as De,
  nT as Oe,
  oB as ke,
  oP as Ae,
  ok as je,
  pf as Me,
  qV as Ne,
  qi as K,
  qj as Pe,
  rF as Fe,
  sF as q,
  tP as Ie,
  ta as Le,
  tn as Re,
  uM as ze,
  vf as Be,
  wB as Ve,
  wM as He,
  xf as Ue,
  zV as We,
  za as Ge,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  F as Ke,
  I as qe,
  J as Je,
  K as Ye,
  L as Xe,
  M as Ze,
  N as Qe,
  P as $e,
  R as et,
  z as tt,
} from "./app-initial~app-main~automations-page.js";
import {
  H as nt,
  Qa as rt,
  W as it,
  Za as at,
  co as ot,
  lo as st,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Bu as ct,
  Cs as lt,
  Es as ut,
  Hu as dt,
  Os as ft,
  Ss as pt,
  Ts as mt,
  Ur as J,
  Wr as ht,
  Xn as gt,
  Zn as _t,
  _i as vt,
  bs as yt,
  gi as bt,
  mm as xt,
  pm as St,
  vs as Ct,
  ws as wt,
  ys as Tt,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as Et,
  H as Dt,
  K as Ot,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  A as kt,
  C as At,
  F as jt,
  I as Mt,
  L as Nt,
  O as Pt,
  P as Ft,
  j as It,
  k as Lt,
  w as Rt,
} from "./app-initial~app-main~home-ambient-suggestions-content.js";
import {
  _ as zt,
  v as Bt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  g as Vt,
  h as Ht,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  a as Ut,
  n as Wt,
  r as Gt,
  s as Kt,
} from "./app-initial~app-main~debug-window-page~agent-settings~debug-modal.js";
import {
  n as qt,
  t as Y,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as Jt, t as Yt } from "./open-in-targets-query.js";
import { n as Xt, t as Zt } from "./experimental-feature-visibility.js";
var X,
  Qt = e(() => {
    (G(),
      (X = Fe({
        customConfig: {
          id: `settings.agent.customConfig.sectionTitle`,
          defaultMessage: `Custom config.toml settings`,
          description: `Heading for the custom config.toml settings section`,
        },
        projectConfig: {
          id: `settings.agent.configuration.scope.projectGroup`,
          defaultMessage: `Project config`,
          description: `Section label for project config scopes`,
        },
        globalConfig: {
          id: `settings.agent.configuration.scope.globalGroup`,
          defaultMessage: `Global config`,
          description: `Section label for user and admin config scopes`,
        },
        userConfig: {
          id: `settings.agent.configuration.scope.user`,
          defaultMessage: `User config`,
          description: `Label for the user config scope in configuration settings`,
        },
        adminConfig: {
          id: `settings.agent.configuration.scope.managed`,
          defaultMessage: `Admin config`,
          description: `Label for the admin config scope in configuration settings`,
        },
        approvalPolicy: {
          id: `settings.agent.configuration.approval.label`,
          defaultMessage: `Approval policy`,
          description: `Label for approval policy in configuration settings`,
        },
        untrusted: {
          id: `settings.agent.configuration.approval.option.untrusted`,
          defaultMessage: `Untrusted`,
          description: `Label for the untrusted approval policy option`,
        },
        onFailure: {
          id: `settings.agent.configuration.approval.option.onFailure`,
          defaultMessage: `On failure`,
          description: `Label for the on failure approval policy option`,
        },
        onRequest: {
          id: `settings.agent.configuration.approval.option.onRequest`,
          defaultMessage: `On request`,
          description: `Label for the on request approval policy option`,
        },
        never: {
          id: `settings.agent.configuration.approval.option.never`,
          defaultMessage: `Never`,
          description: `Label for the never approval policy option`,
        },
        sandboxSettings: {
          id: `settings.agent.configuration.sandbox.label`,
          defaultMessage: `Sandbox settings`,
          description: `Label for sandbox settings in configuration settings`,
        },
        readOnly: {
          id: `settings.agent.configuration.sandbox.option.readOnly`,
          defaultMessage: `Read only`,
          description: `Label for the read only sandbox option`,
        },
        workspaceWrite: {
          id: `settings.agent.configuration.sandbox.option.workspaceWrite`,
          defaultMessage: `Workspace write`,
          description: `Label for the workspace write sandbox option`,
        },
        fullAccess: {
          id: `settings.agent.configuration.sandbox.option.fullAccess`,
          defaultMessage: `Full access`,
          description: `Label for the full access sandbox option`,
        },
        networkAccess: {
          id: `settings.agent.configuration.network.label`,
          defaultMessage: `Allow network access`,
          description: `Label for network access in configuration settings`,
        },
        workspaceDependencies: {
          id: `settings.agent.dependencies.sectionTitle`,
          defaultMessage: `Workspace Dependencies`,
          description: `Heading for the Codex dependencies settings section`,
        },
        currentDependencyVersion: {
          id: `settings.agent.dependencies.bundleVersion.label`,
          defaultMessage: `Current version`,
          description: `Label for the installed Codex dependency bundle version`,
        },
        codexDependencies: {
          id: `settings.agent.dependencies.enabled.label`,
          defaultMessage: `Codex dependencies`,
          description: `Label for the Codex dependencies enabled toggle`,
        },
        diagnoseWorkspaceDependencies: {
          id: `settings.agent.dependencies.diagnose.label`,
          defaultMessage: `Diagnose issues in Codex Workspace`,
          description: `Label for dependency diagnostics in settings`,
        },
        resetWorkspaceDependencies: {
          id: `settings.agent.dependencies.reset.label`,
          defaultMessage: `Reset and install Workspace`,
          description: `Label for resetting and reinstalling dependencies in settings`,
        },
        experimentalFeatures: {
          id: `settings.general.experimentalFeatures`,
          defaultMessage: `Experimental features (Beta)`,
          description: `Heading for beta experimental features settings group`,
        },
      })));
  });
async function $t({ filePath: e, keyPath: t, value: n }) {
  let r = tn(t, n);
  if (r == null) throw Error(`Unsupported config key for project config write.`);
  await en({ filePath: e, field: r });
}
async function en({ filePath: e, field: t }) {
  let n = ``;
  try {
    n = (await R(`read-file`, { params: { path: e } })).contents;
  } catch (e) {
    if (!cn(e)) throw Error(`Failed to read project config.`);
  }
  let r = nn(n, t.name, t.value);
  if (r !== n)
    try {
      await R(`local-environment-config-save`, { params: { configPath: e, raw: r } });
    } catch {
      throw Error(`Failed to save project config.`);
    }
}
function tn(e, t) {
  return e === `approval_policy` && typeof t == `string`
    ? { name: `approval_policy`, value: t }
    : e === `sandbox_mode` && typeof t == `string`
      ? { name: `sandbox_mode`, value: t }
      : e === `sandbox_workspace_write.network_access` && typeof t == `boolean`
        ? { name: `network_access`, value: t }
        : null;
}
function nn(e, t, n) {
  return t === `network_access` ? an(e, n === !0) : rn(e, t, String(n));
}
function rn(e, t, n) {
  let r =
      e.length > 0
        ? e.split(`
`)
        : [],
    i = null,
    a = !1;
  for (let [e, o] of r.entries()) {
    let s = sn(o);
    if (s != null) {
      i = s;
      continue;
    }
    if (i == null && RegExp(`^\\s*${t}\\s*=`).test(o)) {
      ((r[e] = `${t} = "${n}"`), (a = !0));
      break;
    }
  }
  if (!a) {
    let e = r.findIndex((e) => sn(e) != null),
      i = e === -1 ? r.length : e;
    r.splice(i, 0, `${t} = "${n}"`);
  }
  return on(
    r.join(`
`),
  );
}
function an(e, t) {
  let n =
      e.length > 0
        ? e.split(`
`)
        : [],
    r = !1,
    i = n.length,
    a = !1;
  for (let [e, o] of n.entries()) {
    let s = sn(o);
    if (s != null) {
      if (r) {
        i = e;
        break;
      }
      s === `sandbox_workspace_write` && (r = !0);
      continue;
    }
    if (r && /^\s*network_access\s*=/.test(o)) {
      ((n[e] = `network_access = ${t ? `true` : `false`}`), (a = !0));
      break;
    }
  }
  if (r && !a)
    return (
      n.splice(i, 0, `network_access = ${t ? `true` : `false`}`),
      on(
        n.join(`
`),
      )
    );
  if (a)
    return on(
      n.join(`
`),
    );
  let o =
    e.length > 0 &&
    !e.endsWith(`
`)
      ? `${e}\n`
      : e;
  return `${o}${
    o.trim().length === 0
      ? ``
      : `
`
  }[sandbox_workspace_write]\nnetwork_access = ${t ? `true` : `false`}\n`;
}
function on(e) {
  return e.endsWith(`
`)
    ? e
    : `${e}\n`;
}
function sn(e) {
  let t = e.match(/^\s*\[([^\]]+)\]\s*(?:#.*)?$/);
  return t?.[1] == null ? null : t[1].trim();
}
function cn(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.message.trim().toLowerCase();
  return t === `enoent` || t.includes(`no such file`) || t.includes(`not found`);
}
var ln = e(() => {
  n();
});
function un(e) {
  let t = (0, mn.c)(26),
    { hostId: n } = e,
    r = Ee(),
    [i, a] = (0, hn.useState)(!1),
    { data: o, isLoading: s } = ie(ae, n),
    c = o === void 0 ? [] : o,
    l;
  t[0] === n ? (l = t[1]) : ((l = { hostId: n }), (t[0] = n), (t[1] = l));
  let u = E(l),
    d = c.filter(pn),
    f = c.some(fn),
    p = c.find(dn),
    m;
  t[2] === u
    ? (m = t[3])
    : ((m = (e) => ({
        key: e.name,
        label: e.displayName ?? e.name,
        description: e.description ?? void 0,
        enabled: e.enabled,
        onChange: (t) => {
          u.mutate(
            { featureName: e.name, enabled: t },
            {
              onSuccess: () => {
                a(!0);
              },
            },
          );
        },
      })),
      (t[2] = u),
      (t[3] = m));
  let h = [
      ...(f
        ? [
            {
              key: `plugins`,
              label: r.formatMessage({
                id: `settings.general.experimentalFeatures.plugins.label`,
                defaultMessage: `Plugins`,
                description: `Label for the plugins experimental feature toggle`,
              }),
              description:
                p?.description ??
                r.formatMessage({
                  id: `settings.general.experimentalFeatures.plugins.description`,
                  defaultMessage: `Enable the plugins experience in Codex`,
                  description: `Description for the plugins experimental feature toggle`,
                }),
              enabled: p?.enabled ?? !0,
              onChange: (e) => {
                u.mutate(
                  { featureName: `plugins`, enabled: e },
                  {
                    onSuccess: () => {
                      a(!0);
                    },
                  },
                );
              },
            },
          ]
        : []),
      ...d.map(m),
    ],
    g = h.length > 0,
    _ = Y,
    v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(q, {
        id: `settings.general.experimentalFeatures`,
        defaultMessage: `Experimental features (Beta)`,
        description: `Heading for beta experimental features settings group`,
      })),
      (t[4] = v))
    : (v = t[4]);
  let y;
  t[5] === i
    ? (y = t[6])
    : ((y = i
        ? (0, Z.jsx)(`div`, {
            className: `mb-2 block font-medium text-token-error-foreground`,
            children: (0, Z.jsx)(q, {
              id: `settings.general.experimentalFeatures.restartNote`,
              defaultMessage: `Restart {appName} to apply experimental feature changes`,
              description: `Notice shown after changing an experimental feature to indicate restart is required`,
              values: { appName: ot },
            }),
          })
        : void 0),
      (t[5] = i),
      (t[6] = y));
  let b;
  t[7] === y
    ? (b = t[8])
    : ((b = (0, Z.jsx)(Y.Header, { title: v, subtitle: y })), (t[7] = y), (t[8] = b));
  let x = Y,
    S = Ht,
    C;
  t[9] === s
    ? (C = t[10])
    : ((C = s
        ? (0, Z.jsx)(J, {
            label: (0, Z.jsx)(q, {
              id: `settings.general.experimentalFeatures.loading`,
              defaultMessage: `Loading experimental features…`,
              description: `Loading label for beta experimental features settings group`,
            }),
            control: (0, Z.jsx)(`span`, { className: `h-5 w-8` }),
          })
        : null),
      (t[9] = s),
      (t[10] = C));
  let w;
  t[11] !== g || t[12] !== s
    ? ((w =
        !s && !g
          ? (0, Z.jsx)(J, {
              label: (0, Z.jsx)(q, {
                id: `settings.general.experimentalFeatures.empty`,
                defaultMessage: `No beta experimental features available`,
                description: `Empty label for beta experimental features settings group`,
              }),
              control: (0, Z.jsx)(`span`, { className: `h-5 w-8` }),
            })
          : null),
      (t[11] = g),
      (t[12] = s),
      (t[13] = w))
    : (w = t[13]);
  let T = h.map((e) =>
      (0, Z.jsx)(
        J,
        {
          label: e.label,
          description: e.description,
          control: (0, Z.jsx)(se, {
            checked: e.enabled,
            disabled: u.isPending,
            onChange: e.onChange,
            ariaLabel: r.formatMessage(
              {
                id: `settings.general.experimentalFeatures.toggle`,
                defaultMessage: `Toggle {featureName}`,
                description: `Aria label for toggling a beta experimental feature`,
              },
              { featureName: e.label },
            ),
          }),
        },
        e.key,
      ),
    ),
    D;
  t[14] !== S || t[15] !== T || t[16] !== C || t[17] !== w
    ? ((D = (0, Z.jsxs)(S, { children: [C, w, T] })),
      (t[14] = S),
      (t[15] = T),
      (t[16] = C),
      (t[17] = w),
      (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] !== D || t[20] !== x.Content
    ? ((O = (0, Z.jsx)(x.Content, { children: D })), (t[19] = D), (t[20] = x.Content), (t[21] = O))
    : (O = t[21]);
  let k;
  return (
    t[22] !== _ || t[23] !== O || t[24] !== b
      ? ((k = (0, Z.jsxs)(_, { children: [b, O] })),
        (t[22] = _),
        (t[23] = O),
        (t[24] = b),
        (t[25] = k))
      : (k = t[25]),
    k
  );
}
function dn(e) {
  return e.name === `plugins`;
}
function fn(e) {
  return e.name === `apps` && e.enabled;
}
function pn(e) {
  return Xt(e);
}
var mn,
  hn,
  Z,
  gn = e(() => {
    ((mn = Ne()), a(), (hn = t(D(), 1)), G(), st(), i(), _(), Zt(), qt(), ht(), Vt(), (Z = s()));
  });
function _n(e) {
  let t = (0, yn.c)(53),
    { hostId: n } = e,
    r = h(oe),
    i = w(Lt),
    a;
  t[0] === n ? (a = t[1]) : ((a = { hostId: n }), (t[0] = n), (t[1] = a));
  let { data: o } = Rt(a),
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    g,
    _,
    v,
    y,
    x,
    S;
  if (t[2] !== i || t[3] !== n || t[4] !== o || t[5] !== r) {
    f = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[20] !== o?.hasModelSupportingMaxReasoningEffort ||
      t[21] !== o?.hasModelSupportingUltraReasoningEffort
        ? ((e = (e) =>
            e === `max`
              ? o?.hasModelSupportingMaxReasoningEffort === !0
              : o?.hasModelSupportingUltraReasoningEffort === !0),
          (t[20] = o?.hasModelSupportingMaxReasoningEffort),
          (t[21] = o?.hasModelSupportingUltraReasoningEffort),
          (t[22] = e))
        : (e = t[22]);
      let a = bn.filter(e);
      if (o == null || a.length === 0) {
        f = null;
        break bb0;
      }
      let h;
      t[23] === i ? (h = t[24]) : ((h = (e) => i.has(e)), (t[23] = i), (t[24] = h));
      let C = Pt.length + a.filter(h).length;
      ((d = Y),
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((S = (0, Q.jsx)(Y.Header, {
              title: (0, Q.jsx)(q, {
                id: `settings.agent.modelFeatures.title`,
                defaultMessage: `Model features`,
                description: `Title for model feature settings`,
              }),
            })),
            (t[25] = S))
          : (S = t[25]),
        (u = Y.Content),
        (l = Ht),
        (c = J),
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((y = (0, Q.jsx)(q, {
              id: `settings.agent.modelFeatures.reasoningEfforts.label`,
              defaultMessage: `Available reasoning efforts`,
              description: `Label for the available reasoning efforts setting`,
            })),
            (x = (0, Q.jsx)(q, {
              id: `settings.agent.modelFeatures.reasoningEfforts.description`,
              defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
              description: `Description for the available reasoning efforts setting`,
            })),
            (t[26] = y),
            (t[27] = x))
          : ((y = t[26]), (x = t[27])),
        (s = b),
        (p = `end`),
        (m = `menuWide`),
        t[28] === C
          ? (g = t[29])
          : ((g = (0, Q.jsx)(Dt, {
              children: (0, Q.jsx)(q, {
                id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                description: `Number of available reasoning efforts selected`,
                values: { count: C },
              }),
            })),
            (t[28] = C),
            (t[29] = g)),
        t[30] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((_ = Pt.map(vn)), (t[30] = _))
          : (_ = t[30]),
        (v = a.map((e) =>
          (0, Q.jsx)(
            K.CheckboxItem,
            {
              checked: i.has(e),
              onCheckedChange: (t) => {
                It(r, { enabled: t, hostId: n, listModelsData: o, reasoningEffort: e });
              },
              children: (0, Q.jsx)(bt, { effort: e }),
            },
            e,
          ),
        )));
    }
    ((t[2] = i),
      (t[3] = n),
      (t[4] = o),
      (t[5] = r),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = x),
      (t[19] = S));
  } else
    ((s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]),
      (g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (x = t[18]),
      (S = t[19]));
  if (f !== Symbol.for(`react.early_return_sentinel`)) return f;
  let C;
  t[31] !== s || t[32] !== p || t[33] !== m || t[34] !== g || t[35] !== _ || t[36] !== v
    ? ((C = (0, Q.jsxs)(s, { align: p, contentWidth: m, triggerButton: g, children: [_, v] })),
      (t[31] = s),
      (t[32] = p),
      (t[33] = m),
      (t[34] = g),
      (t[35] = _),
      (t[36] = v),
      (t[37] = C))
    : (C = t[37]);
  let T;
  t[38] !== c || t[39] !== C || t[40] !== y || t[41] !== x
    ? ((T = (0, Q.jsx)(c, { label: y, description: x, control: C })),
      (t[38] = c),
      (t[39] = C),
      (t[40] = y),
      (t[41] = x),
      (t[42] = T))
    : (T = t[42]);
  let E;
  t[43] !== l || t[44] !== T
    ? ((E = (0, Q.jsx)(l, { children: T })), (t[43] = l), (t[44] = T), (t[45] = E))
    : (E = t[45]);
  let D;
  t[46] !== u || t[47] !== E
    ? ((D = (0, Q.jsx)(u, { children: E })), (t[46] = u), (t[47] = E), (t[48] = D))
    : (D = t[48]);
  let O;
  return (
    t[49] !== d || t[50] !== D || t[51] !== S
      ? ((O = (0, Q.jsxs)(d, { children: [S, D] })),
        (t[49] = d),
        (t[50] = D),
        (t[51] = S),
        (t[52] = O))
      : (O = t[52]),
    O
  );
}
function vn(e) {
  return (0, Q.jsx)(
    K.CheckboxItem,
    { checked: !0, disabled: !0, children: (0, Q.jsx)(bt, { effort: e }) },
    e,
  );
}
var yn,
  Q,
  bn,
  xn = e(() => {
    ((yn = Ne()),
      a(),
      G(),
      z(),
      vt(),
      At(),
      kt(),
      r(),
      qt(),
      ht(),
      Ot(),
      Vt(),
      (Q = s()),
      (bn = [`max`, `ultra`]));
  });
function Sn(e) {
  let t = Cn.safeParse(e);
  return !t.success || !Object.hasOwn(t.data, `workspaceRoot`)
    ? { hasValue: !1, workspaceRoot: null }
    : { hasValue: !0, workspaceRoot: t.data.workspaceRoot ?? null };
}
var Cn,
  wn = e(() => {
    (ke(), (Cn = H({ workspaceRoot: Ve().min(1).nullable().optional() }).passthrough()));
  });
function Tn() {
  let e = (0, Un.c)(41),
    { selectedHostId: t } = dt(),
    n = S(t),
    r = M(t),
    i = Pe(et),
    a = Pe(`2106641128`),
    o = Pe(`3693343337`),
    s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(Et, { slug: `agent` })), (e[0] = s))
    : (s = e[0]);
  let c;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(q, {
        id: `settings.agent.configuration.subtitle.summary`,
        defaultMessage: `Configure approval policy and sandbox settings <a>Learn more</a>`,
        description: `Summary text for the configuration settings subtitle`,
        values: { a: Dn },
      })),
      (e[1] = c))
    : (c = e[1]);
  let l;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(Y.Header, { title: (0, $.jsx)(q, { ...X.customConfig }) })), (e[2] = l))
    : (l = e[2]);
  let d;
  if (e[3] !== r || e[4] !== t) {
    let n;
    (e[6] !== r.length || e[7] !== t
      ? ((n = (e, n) =>
          (0, $.jsx)(
            C,
            {
              fullWidth: !0,
              icon: gt,
              level: e.level,
              className: n === r.length - 1 ? `mb-3` : `mb-2`,
              children: (0, $.jsx)(`div`, {
                className: `flex min-w-0 flex-col gap-2`,
                children: (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 items-start justify-between gap-2`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex min-w-0 flex-col gap-1`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `min-w-0 text-sm text-token-text-primary`,
                          children: (0, $.jsx)(it, {
                            cwd: null,
                            className: `[&>p]:my-0`,
                            textStyle: { kind: `small` },
                            children: e.summary,
                          }),
                        }),
                        e.details != null && e.details.length > 0
                          ? (0, $.jsx)(`div`, {
                              className: `min-w-0 text-sm text-token-text-secondary`,
                              children: (0, $.jsx)(it, {
                                cwd: null,
                                className: `[&>p]:my-0`,
                                textStyle: { kind: `small` },
                                children: e.details,
                              }),
                            })
                          : null,
                        e.path == null
                          ? null
                          : (0, $.jsx)(`div`, {
                              className: `min-w-0 text-sm text-token-text-secondary`,
                              children: (0, $.jsx)(q, {
                                id: `settings.agent.configuration.notice.fileContext`,
                                defaultMessage: `File: {path}{location}`,
                                description: `File path and optional location for a config or rules warning shown in settings`,
                                values: {
                                  path: (0, $.jsx)(`code`, { children: e.path }),
                                  location:
                                    e.range == null
                                      ? ``
                                      : (0, $.jsx)(q, {
                                          id: `settings.agent.configuration.notice.fileLocationSuffix`,
                                          defaultMessage: ` (line {line}, column {column})`,
                                          description: `Suffix showing the line and column for a config warning in settings`,
                                          values: {
                                            line: e.range.start.line,
                                            column: e.range.start.column,
                                          },
                                        }),
                                },
                              }),
                            }),
                      ],
                    }),
                    e.path == null
                      ? null
                      : (0, $.jsx)(f, {
                          color: `secondary`,
                          size: `toolbar`,
                          className: `inline-flex w-fit shrink-0`,
                          onClick: () => {
                            e.path != null && Nt({ hostId: t, path: e.path, range: e.range });
                          },
                          children: (0, $.jsx)(q, {
                            id: `settings.agent.configuration.notice.openFile`,
                            defaultMessage: `Open file`,
                            description: `Button label to open the file associated with a config or rules warning`,
                          }),
                        }),
                  ],
                }),
              }),
            },
            `${n}:${e.kind}:${e.summary}:${e.path ?? ``}`,
          )),
        (e[6] = r.length),
        (e[7] = t),
        (e[8] = n))
      : (n = e[8]),
      (d = r.map(n)),
      (e[3] = r),
      (e[4] = t),
      (e[5] = d));
  } else d = e[5];
  let p;
  e[9] === t
    ? (p = e[10])
    : ((p = (0, $.jsx)(L, { electron: !0, children: (0, $.jsx)(jn, { hostId: t }) })),
      (e[9] = t),
      (e[10] = p));
  let m, h;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(q, {
        id: `settings.agent.configuration.configToml`,
        defaultMessage: `config.toml`,
        description: `Label for config.toml open button`,
      })),
      (h = (0, $.jsx)(q, {
        id: `settings.agent.configuration.configToml.description`,
        defaultMessage: `Edit your config to customize agent behavior`,
        description: `Description for config.toml open row`,
      })),
      (e[11] = m),
      (e[12] = h))
    : ((m = e[11]), (h = e[12]));
  let g, _;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(`span`, { className: `block` })),
      (_ = (0, $.jsx)(q, {
        id: `settings.agent.configuration.configToml.restartNote`,
        defaultMessage: `Restart Codex after editing to apply changes`,
        description: `Note that config.toml changes require a restart`,
      })),
      (e[13] = g),
      (e[14] = _))
    : ((g = e[13]), (_ = e[14]));
  let v;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsxs)($.Fragment, {
        children: [
          h,
          ` `,
          g,
          _,
          ` `,
          (0, $.jsxs)(`a`, {
            className: `inline-flex items-center gap-1 text-token-text-secondary hover:text-token-text-primary`,
            href: u,
            target: `_blank`,
            rel: `noreferrer`,
            onClick: En,
            children: [
              (0, $.jsx)(q, {
                id: `settings.agent.configuration.configToml.docs`,
                defaultMessage: `Docs`,
                description: `Link label for config documentation`,
              }),
              (0, $.jsx)(W, { href: u, className: `icon-xxs` }),
            ],
          }),
        ],
      })),
      (e[15] = v))
    : (v = e[15]);
  let y;
  e[16] === t
    ? (y = e[17])
    : ((y = (0, $.jsx)(L, {
        extension: !0,
        children: (0, $.jsx)(Ht, {
          children: (0, $.jsx)(J, {
            label: m,
            description: v,
            control: (0, $.jsx)(Ft, { hostId: t }),
          }),
        }),
      })),
      (e[16] = t),
      (e[17] = y));
  let b;
  e[18] !== y || e[19] !== d || e[20] !== p
    ? ((b = (0, $.jsxs)(Y, {
        className: `gap-2`,
        children: [l, (0, $.jsxs)(Y.Content, { children: [d, p, y] })],
      })),
      (e[18] = y),
      (e[19] = d),
      (e[20] = p),
      (e[21] = b))
    : (b = e[21]);
  let x;
  e[22] !== o || e[23] !== t
    ? ((x = o ? (0, $.jsx)(_n, { hostId: t }) : null), (e[22] = o), (e[23] = t), (e[24] = x))
    : (x = e[24]);
  let w;
  e[25] !== a || e[26] !== t
    ? ((w = a ? (0, $.jsx)(`div`, { children: (0, $.jsx)(un, { hostId: t }) }) : null),
      (e[25] = a),
      (e[26] = t),
      (e[27] = w))
    : (w = e[27]);
  let T;
  e[28] === w
    ? (T = e[29])
    : ((T = (0, $.jsx)(L, { electron: !0, children: w })), (e[28] = w), (e[29] = T));
  let E;
  e[30] !== i || e[31] !== n || e[32] !== t
    ? ((E = i && n.kind === `local` ? (0, $.jsx)(On, { hostId: t }) : null),
      (e[30] = i),
      (e[31] = n),
      (e[32] = t),
      (e[33] = E))
    : (E = e[33]);
  let D;
  e[34] === E
    ? (D = e[35])
    : ((D = (0, $.jsx)(L, { electron: !0, children: E })), (e[34] = E), (e[35] = D));
  let O;
  return (
    e[36] !== b || e[37] !== x || e[38] !== T || e[39] !== D
      ? ((O = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(Ye, { title: s, subtitle: c, children: [b, x, T, D] }),
        })),
        (e[36] = b),
        (e[37] = x),
        (e[38] = T),
        (e[39] = D),
        (e[40] = O))
      : (O = e[40]),
    O
  );
}
function En(e) {
  Ge({ event: e, href: u, initiator: `open_in_browser_bridge` });
}
function Dn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: u,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function On(e) {
  let t = (0, Un.c)(2),
    { hostId: n } = e,
    r = F.primaryRuntime;
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(kn, { hostId: n, primaryRuntime: r })), (t[0] = n), (t[1] = i)),
    i
  );
}
function kn(e) {
  let t = (0, Un.c)(96),
    { hostId: n, primaryRuntime: r } = e,
    i = h(oe),
    a = Ee(),
    o = me(),
    { data: s, isLoading: c } = ie(ae, n),
    l;
  t[0] === n ? (l = t[1]) : ((l = { hostId: n }), (t[0] = n), (t[1] = l));
  let u = E(l),
    d;
  t[2] === s ? (d = t[3]) : ((d = s?.find(An)), (t[2] = s), (t[3] = d));
  let p = d,
    m = p?.enabled === !0,
    g;
  t[4] !== n || t[5] !== r
    ? ((g = () => r.diagnoseDependencies({ hostId: n })), (t[4] = n), (t[5] = r), (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === n ? (_ = t[8]) : ((_ = Wt(n)), (t[7] = n), (t[8] = _));
  let v;
  t[9] !== g || t[10] !== _
    ? ((v = { queryFn: g, queryKey: _, staleTime: ve.FIVE_SECONDS }),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v))
    : (v = t[11]);
  let y = T(v),
    b;
  t[12] !== n || t[13] !== r
    ? ((b = { mutationFn: () => r.diagnoseDependencies({ hostId: n }) }),
      (t[12] = n),
      (t[13] = r),
      (t[14] = b))
    : (b = t[14]);
  let x = A(b),
    S;
  t[15] !== r || t[16] !== o
    ? ((S = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Kt(o), r.runUpdateNow({ release: t }));
        },
      }),
      (t[15] = r),
      (t[16] = o),
      (t[17] = S))
    : (S = t[17]);
  let C = A(S),
    D;
  t[18] !== n || t[19] !== r || t[20] !== o
    ? ((D = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Kt(o), r.resetDependencies({ hostId: n, release: t }));
        },
      }),
      (t[18] = n),
      (t[19] = r),
      (t[20] = o),
      (t[21] = D))
    : (D = t[21]);
  let O = A(D),
    ee;
  t[22] === n
    ? (ee = t[23])
    : ((ee = { mutationFn: () => ut({ hostId: n }) }), (t[22] = n), (t[23] = ee));
  let j = A(ee),
    ne = w(mt),
    re = w(wt),
    M = ne?.hostId === n ? ne : null,
    N;
  t[24] === i ? (N = t[25]) : ((N = i.get(ze)), (t[24] = i), (t[25] = N));
  let P = N,
    F = c || u.isPending || x.isPending || C.isPending || O.isPending || j.isPending,
    le;
  t[26] === M ? (le = t[27]) : ((le = lt(M)), (t[26] = M), (t[27] = le));
  let I = le,
    ue =
      y.data?.bundleVersion == null || y.data.bundleVersion.length === 0
        ? null
        : y.data.bundleVersion,
    de;
  t[28] !== x || t[29] !== y || t[30] !== a || t[31] !== i || t[32] !== P
    ? ((de = () => {
        let e = Date.now();
        x.mutateAsync()
          .then((t) => {
            if (
              (ce(i, Oe, $e({ diagnostics: t, durationMs: Date.now() - e })),
              y.refetch(),
              t.installed)
            ) {
              P.success(
                a.formatMessage({
                  id: `settings.agent.dependencies.diagnose.ok`,
                  defaultMessage: `Codex dependencies look healthy`,
                  description: `Toast shown when dependency diagnostics find no problems`,
                }),
              );
              return;
            }
            P.warning(
              a.formatMessage({
                id: `settings.agent.dependencies.diagnose.problem`,
                defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
                description: `Toast shown when dependency diagnostics find problems`,
              }),
            );
          })
          .catch(() => {
            (ce(i, Oe, Ke({ durationMs: Date.now() - e })),
              P.danger(
                a.formatMessage({
                  id: `settings.agent.dependencies.diagnose.failed`,
                  defaultMessage: `Couldn’t diagnose Codex dependencies`,
                  description: `Toast shown when dependency diagnostics fail`,
                }),
              ));
          });
      }),
      (t[28] = x),
      (t[29] = y),
      (t[30] = a),
      (t[31] = i),
      (t[32] = P),
      (t[33] = de))
    : (de = t[33]);
  let L = de,
    fe;
  t[34] !== y || t[35] !== a || t[36] !== re || t[37] !== O || t[38] !== i || t[39] !== P
    ? ((fe = () => {
        let e = Date.now();
        O.mutateAsync({ release: re })
          .then((t) => {
            (ce(
              i,
              Ce,
              qe({ bundleVersion: t.bundleVersion, durationMs: Date.now() - e, status: t.status }),
            ),
              y.refetch(),
              P.success(
                a.formatMessage({
                  id: `settings.agent.dependencies.reset.installed`,
                  defaultMessage: `Codex dependencies were reinstalled`,
                  description: `Toast shown when dependency reset and reinstall succeeds`,
                }),
              ));
          })
          .catch((t) => {
            if (Qe(t)) {
              (i.set(mt, null),
                y.refetch(),
                ce(
                  i,
                  Ce,
                  qe({ bundleVersion: null, durationMs: Date.now() - e, status: `canceled` }),
                ),
                P.info(
                  a.formatMessage({
                    id: `settings.agent.dependencies.reset.canceled`,
                    defaultMessage: `Codex dependency download canceled`,
                    description: `Toast shown when dependency reset and reinstall is canceled`,
                  }),
                  { id: `install-primary-runtime` },
                ));
              return;
            }
            (ce(i, Ce, qe({ bundleVersion: null, durationMs: Date.now() - e, status: `failed` })),
              P.danger(
                a.formatMessage({
                  id: `settings.agent.dependencies.reset.failed`,
                  defaultMessage: `Couldn’t reinstall Codex dependencies`,
                  description: `Toast shown when dependency reset fails`,
                }),
              ));
          });
      }),
      (t[34] = y),
      (t[35] = a),
      (t[36] = re),
      (t[37] = O),
      (t[38] = i),
      (t[39] = P),
      (t[40] = fe))
    : (fe = t[40]);
  let pe = fe,
    R;
  t[41] !== j || t[42] !== y || t[43] !== a || t[44] !== i || t[45] !== P
    ? ((R = () => {
        j.mutateAsync()
          .then((e) => {
            let { canceled: t } = e;
            if ((i.set(mt, null), y.refetch(), !t)) {
              P.info(
                a.formatMessage({
                  id: `settings.agent.dependencies.cancel.noop`,
                  defaultMessage: `No Codex dependency download is running`,
                  description: `Toast shown when canceling a Codex dependency download but no download is running`,
                }),
              );
              return;
            }
            P.info(
              a.formatMessage({
                id: `settings.agent.dependencies.cancel.canceled`,
                defaultMessage: `Canceling Codex dependency download`,
                description: `Toast shown after requesting cancellation of a Codex dependency download`,
              }),
              { id: `install-primary-runtime` },
            );
          })
          .catch(() => {
            P.danger(
              a.formatMessage({
                id: `settings.agent.dependencies.cancel.failed`,
                defaultMessage: `Couldn’t cancel Codex dependency download`,
                description: `Toast shown when canceling a Codex dependency download fails`,
              }),
            );
          });
      }),
      (t[41] = j),
      (t[42] = y),
      (t[43] = a),
      (t[44] = i),
      (t[45] = P),
      (t[46] = R))
    : (R = t[46]);
  let he = R,
    z;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(Y.Header, { title: (0, $.jsx)(q, { ...X.workspaceDependencies }) })),
      (t[47] = z))
    : (z = t[47]);
  let ge;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(q, { ...X.currentDependencyVersion })), (t[48] = ge))
    : (ge = t[48]);
  let B;
  t[49] === y.data?.problems.length
    ? (B = t[50])
    : ((B = y.data?.problems.length
        ? (0, $.jsx)(q, {
            id: `settings.agent.dependencies.bundleVersion.problemDescription`,
            defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
            description: `Description shown when dependency diagnostics have problems`,
          })
        : null),
      (t[49] = y.data?.problems.length),
      (t[50] = B));
  let _e;
  t[51] !== ue || t[52] !== y.isLoading || t[53] !== I || t[54] !== M
    ? ((_e = I
        ? Tt(M, Ct(M))
        : y.isLoading
          ? (0, $.jsx)(q, {
              id: `settings.agent.dependencies.bundleVersion.loading`,
              defaultMessage: `Checking…`,
              description: `Status while loading the current dependency bundle version`,
            })
          : (ue ??
            (0, $.jsx)(q, {
              id: `settings.agent.dependencies.bundleVersion.notInstalled`,
              defaultMessage: `Not installed`,
              description: `Status when dependency bundle version is unavailable`,
            }))),
      (t[51] = ue),
      (t[52] = y.isLoading),
      (t[53] = I),
      (t[54] = M),
      (t[55] = _e))
    : (_e = t[55]);
  let V;
  t[56] === _e
    ? (V = t[57])
    : ((V = (0, $.jsx)(`span`, { className: `text-sm text-token-text-secondary`, children: _e })),
      (t[56] = _e),
      (t[57] = V));
  let H;
  t[58] !== B || t[59] !== V
    ? ((H = (0, $.jsx)(J, { label: ge, description: B, control: V })),
      (t[58] = B),
      (t[59] = V),
      (t[60] = H))
    : (H = t[60]);
  let U, ye;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(q, { ...X.codexDependencies })),
      (ye = (0, $.jsx)(q, {
        id: `settings.agent.dependencies.enabled.description`,
        defaultMessage: `Allow Codex to install and expose bundled Node.js and Python tools`,
        description: `Description for the Codex dependencies enabled toggle`,
      })),
      (t[61] = U),
      (t[62] = ye))
    : ((U = t[61]), (ye = t[62]));
  let be = c || u.isPending || p == null,
    W;
  t[63] !== re || t[64] !== C || t[65] !== u
    ? ((W = (e) => {
        u.mutate(
          { enabled: e, featureName: te },
          {
            onSuccess: () => {
              e && C.mutate({ release: re });
            },
          },
        );
      }),
      (t[63] = re),
      (t[64] = C),
      (t[65] = u),
      (t[66] = W))
    : (W = t[66]);
  let Se;
  t[67] === a
    ? (Se = t[68])
    : ((Se = a.formatMessage({
        id: `settings.agent.dependencies.enabled.ariaLabel`,
        defaultMessage: `Enable Codex dependencies`,
        description: `Aria label for the Codex dependencies enabled toggle`,
      })),
      (t[67] = a),
      (t[68] = Se));
  let G;
  t[69] !== m || t[70] !== be || t[71] !== W || t[72] !== Se
    ? ((G = (0, $.jsx)(J, {
        label: U,
        description: ye,
        control: (0, $.jsx)(se, { checked: m, disabled: be, onChange: W, ariaLabel: Se }),
      })),
      (t[69] = m),
      (t[70] = be),
      (t[71] = W),
      (t[72] = Se),
      (t[73] = G))
    : (G = t[73]);
  let we, Te;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, $.jsx)(q, { ...X.diagnoseWorkspaceDependencies })),
      (Te = (0, $.jsx)(q, {
        id: `settings.agent.dependencies.diagnose.description`,
        defaultMessage: `Checks the current bundle and records diagnostic logs`,
        description: `Description for dependency diagnostics in settings`,
      })),
      (t[74] = we),
      (t[75] = Te))
    : ((we = t[74]), (Te = t[75]));
  let De, ke;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, $.jsx)(xe, { className: `icon-2xs` })),
      (ke = (0, $.jsx)(q, {
        id: `settings.agent.dependencies.diagnose.button`,
        defaultMessage: `Diagnose`,
        description: `Button label for dependency diagnostics`,
      })),
      (t[76] = De),
      (t[77] = ke))
    : ((De = t[76]), (ke = t[77]));
  let Ae;
  t[78] !== x.isPending || t[79] !== L || t[80] !== O.isPending
    ? ((Ae = (0, $.jsx)(J, {
        label: we,
        description: Te,
        control: (0, $.jsxs)(f, {
          color: `secondary`,
          size: `toolbar`,
          loading: x.isPending,
          disabled: O.isPending,
          onClick: L,
          children: [De, ke],
        }),
      })),
      (t[78] = x.isPending),
      (t[79] = L),
      (t[80] = O.isPending),
      (t[81] = Ae))
    : (Ae = t[81]);
  let je, Me;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(q, { ...X.resetWorkspaceDependencies })),
      (Me = (0, $.jsx)(q, {
        id: `settings.agent.dependencies.reset.description`,
        defaultMessage: `Deletes the local bundle, downloads it again, and reloads tools`,
        description: `Description for resetting and reinstalling dependencies in settings`,
      })),
      (t[82] = je),
      (t[83] = Me))
    : ((je = t[82]), (Me = t[83]));
  let Ne = I ? j.isPending : O.isPending,
    K = !m || (I ? j.isPending : F),
    Pe = I ? he : pe,
    Fe;
  t[84] === I
    ? (Fe = t[85])
    : ((Fe = I
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(k, { className: `icon-2xs` }),
              (0, $.jsx)(q, {
                id: `settings.agent.dependencies.cancel.button`,
                defaultMessage: `Cancel download`,
                description: `Button label for canceling dependency download`,
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(at, { className: `icon-2xs` }),
              (0, $.jsx)(q, {
                id: `settings.agent.dependencies.reset.button`,
                defaultMessage: `Reinstall`,
                description: `Button label for resetting and reinstalling dependencies`,
              }),
            ],
          })),
      (t[84] = I),
      (t[85] = Fe));
  let Ie;
  t[86] !== Ne || t[87] !== K || t[88] !== Pe || t[89] !== Fe
    ? ((Ie = (0, $.jsx)(J, {
        label: je,
        description: Me,
        control: (0, $.jsx)(f, {
          color: `danger`,
          size: `toolbar`,
          loading: Ne,
          disabled: K,
          onClick: Pe,
          children: Fe,
        }),
      })),
      (t[86] = Ne),
      (t[87] = K),
      (t[88] = Pe),
      (t[89] = Fe),
      (t[90] = Ie))
    : (Ie = t[90]);
  let Le;
  return (
    t[91] !== H || t[92] !== G || t[93] !== Ae || t[94] !== Ie
      ? ((Le = (0, $.jsxs)(Y, {
          className: `gap-2`,
          children: [
            z,
            (0, $.jsx)(Y.Content, { children: (0, $.jsxs)(Ht, { children: [H, G, Ae, Ie] }) }),
          ],
        })),
        (t[91] = H),
        (t[92] = G),
        (t[93] = Ae),
        (t[94] = Ie),
        (t[95] = Le))
      : (Le = t[95]),
    Le
  );
}
function An(e) {
  return e.name === te;
}
function jn({ hostId: e }) {
  let t = Ee(),
    n = m(),
    r = We(),
    [i, a] = (0, Wn.useState)(null),
    [o, s] = (0, Wn.useState)(null),
    [c, u] = (0, Wn.useState)({}),
    h = w(g),
    _ = Sn(n.state),
    v = _.hasValue ? (e === `local` ? _.workspaceRoot : null) : e === `local` ? h : null,
    y = ne(e),
    { data: x, isPending: S } = Te(v, {
      hostId: e,
      cwdMode: e === `local` ? `fallback-to-workspace` : `preserve-null`,
    }),
    { data: C, isPending: T } = ie(Be, { hostId: e }),
    E = Ie(`open-file`),
    D = x?.config ?? null,
    O = x?.layers ?? null,
    k = x?.origins ?? null,
    A = C?.requirements ?? null,
    ee = Pn(O, t),
    j = O?.find((e) => e.name.type === `user`) ?? null,
    te = O?.find((e) => l(e.name)) ?? null,
    re = y == null ? null : `${y}/config.toml`,
    ae = j == null ? re : Ue(j.name),
    oe = {
      key: `user`,
      kind: `user`,
      label: t.formatMessage(X.userConfig),
      tooltipText: ae ?? `~/.codex/config.toml`,
      filePath: ae,
      expectedVersion: j?.version ?? null,
      workspaceRoot: null,
      layer: j,
    },
    M =
      te == null
        ? null
        : {
            key: `managed`,
            kind: `managed`,
            label: t.formatMessage(X.adminConfig),
            tooltipText: t.formatMessage({
              id: `settings.agent.configuration.scope.managedDescription`,
              defaultMessage: `Managed by admin policy`,
              description: `Tooltip text for the admin config scope in configuration settings`,
            }),
            filePath: Ue(te.name),
            expectedVersion: te.version,
            workspaceRoot: null,
            layer: te,
          },
    N = [...ee, oe, ...(M == null ? [] : [M])],
    P = ee.length > 0,
    ce = v == null ? (N[0]?.key ?? null) : `project:${v}`,
    F = N.find((e) => e.key === i) ?? N.find((e) => e.key === ce) ?? N[0] ?? null,
    { data: le } = ie(Jt, {
      cwd: F?.workspaceRoot == null ? (v == null ? null : d(v)) : d(F.workspaceRoot),
      hostId: e,
    }),
    I = Ln(F?.layer?.config ?? null),
    ue = Hn(D?.approval_policy ?? null) ?? `on-request`,
    de = D?.sandbox_mode == null ? `read-only` : D.sandbox_mode,
    L = I.sandboxMode == null && de === `workspace-write`,
    fe = I.sandboxMode === `workspace-write` || L,
    R = I.approvalPolicy ?? ue,
    me = I.sandboxMode ?? de,
    he = Bn(R),
    z = Vn(me),
    ge = I.networkAccess ?? D?.sandbox_workspace_write?.network_access ?? !1,
    B = k == null ? null : p(k, `approval_policy`, [`approvalPolicy`]),
    ve = k == null ? null : p(k, `sandbox_mode`),
    V = k == null ? null : p(k, `sandbox_workspace_write`, [`network_access`]),
    H = F?.kind === `project` ? (F.layer?.disabledReason ?? null) : null,
    U = Rn(F, t),
    be = Gn.filter((e) =>
      A?.allowedApprovalPolicies == null || A.allowedApprovalPolicies.length === 0
        ? !0
        : A.allowedApprovalPolicies.includes(e.value),
    ),
    xe = Kn.filter((e) =>
      A?.allowedSandboxModes == null || A.allowedSandboxModes.length === 0
        ? !0
        : A.allowedSandboxModes.includes(e.value),
    );
  async function W(t, n, i) {
    if (!(F == null || F.filePath == null) && o == null) {
      (s(t), u((e) => ({ ...e, [t]: void 0 })));
      try {
        if (F.kind === `project`) await $t({ filePath: F.filePath, keyPath: n, value: i });
        else {
          let t = F.kind === `user` ? await ye(r, e) : null;
          await je(`write-config-value`, {
            hostId: e,
            keyPath: n,
            value: i,
            mergeStrategy: `upsert`,
            filePath: t ? t.filePath : F.filePath,
            expectedVersion: t == null ? F.expectedVersion : t.expectedVersion,
          });
        }
        (await r.invalidateQueries({ queryKey: [...Me, e] }),
          await Promise.all([
            r.invalidateQueries({ queryKey: [...Se, e] }),
            r.invalidateQueries({ queryKey: [..._e, e] }),
          ]));
      } catch (e) {
        u((n) => ({ ...n, [t]: e instanceof Error ? e.message : `Unable to save` }));
      } finally {
        s(null);
      }
    }
  }
  let G = S || T,
    Ce = zn({
      intl: t,
      scopeLockReason: U,
      origin: B,
      selectedScope: F,
      hasOptions: be.length > 0,
      restrictedMessage: t.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    we = zn({
      intl: t,
      scopeLockReason: U,
      origin: ve,
      selectedScope: F,
      hasOptions: xe.length > 0,
      restrictedMessage: t.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    De = zn({
      intl: t,
      scopeLockReason: U,
      origin: V,
      selectedScope: F,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    Oe = G || o != null || H != null,
    ke = (e) => {
      (a(e), u({}));
    };
  return (0, $.jsxs)(Y, {
    children: [
      (0, $.jsx)(Y.Header, {
        title: (0, $.jsxs)(b, {
          align: `start`,
          contentWidth: `menuWide`,
          disabled: N.length === 0,
          triggerButton: (0, $.jsx)(Dt, {
            disabled: N.length === 0,
            contentClassName: `truncate`,
            children:
              F?.label ??
              t.formatMessage({
                id: `settings.agent.configuration.scope.loading`,
                defaultMessage: `Loading…`,
                description: `Fallback label while config scope options are loading`,
              }),
          }),
          children: [
            P
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(K.Section, {
                      children: [
                        (0, $.jsx)(K.SectionLabel, {
                          children: (0, $.jsx)(q, { ...X.projectConfig }),
                        }),
                        ee.map((e) =>
                          (0, $.jsx)(
                            Mn,
                            {
                              scopeOption: e,
                              selected: F?.key === e.key,
                              onSelect: () => {
                                ke(e.key);
                              },
                            },
                            e.key,
                          ),
                        ),
                      ],
                    }),
                    (0, $.jsx)(K.Separator, {}),
                  ],
                })
              : null,
            (0, $.jsxs)(K.Section, {
              children: [
                (0, $.jsx)(K.SectionLabel, { children: (0, $.jsx)(q, { ...X.globalConfig }) }),
                (0, $.jsx)(Mn, {
                  scopeOption: oe,
                  selected: F?.key === oe.key,
                  onSelect: () => {
                    ke(oe.key);
                  },
                }),
                M == null
                  ? null
                  : (0, $.jsx)(Mn, {
                      scopeOption: M,
                      selected: F?.key === M.key,
                      onSelect: () => {
                        ke(M.key);
                      },
                    }),
              ],
            }),
          ],
        }),
        actions: (0, $.jsxs)(f, {
          color: `ghost`,
          size: `toolbar`,
          disabled: F?.filePath == null,
          onClick: () => {
            F?.filePath != null &&
              Bt({
                path: F.filePath,
                cwd: F.workspaceRoot == null ? null : d(F.workspaceRoot),
                hostId: e,
                target: le?.preferredTarget,
                openFile: E.mutate,
              });
          },
          children: [
            (0, $.jsx)(q, {
              id: `settings.agent.configuration.scope.open`,
              defaultMessage: `Open config.toml`,
              description: `Button label to open the selected config file`,
            }),
            (0, $.jsx)(pe, { className: `icon-2xs` }),
          ],
        }),
      }),
      (0, $.jsx)(Y.Content, {
        children: (0, $.jsxs)(Ht, {
          children: [
            H == null
              ? null
              : (0, $.jsxs)(`div`, {
                  className: `flex items-start gap-2 p-3`,
                  children: [
                    (0, $.jsx)(St, {
                      className: `icon-xs mt-0.5 shrink-0 text-token-editor-warning-foreground`,
                    }),
                    (0, $.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: H,
                    }),
                  ],
                }),
            (0, $.jsx)(J, {
              label: (0, $.jsx)(q, { ...X.approvalPolicy }),
              description: (0, $.jsx)(Nn, {
                error: c.approval,
                lockReason: Ce,
                children: (0, $.jsx)(q, {
                  id: `settings.agent.configuration.approval.definition`,
                  defaultMessage: `Choose when Codex asks for approval`,
                  description: `Definition for approval policy in configuration settings`,
                }),
              }),
              control: (0, $.jsx)(b, {
                align: `end`,
                contentWidth: `panelWide`,
                disabled: Oe || Ce != null,
                triggerButton: (0, $.jsx)(Dt, {
                  disabled: Oe || Ce != null,
                  contentClassName: `truncate`,
                  children: he == null ? R : t.formatMessage(he.label),
                }),
                children: be.map((e) =>
                  (0, $.jsx)(
                    K.Item,
                    {
                      RightIcon: e.value === R ? He : void 0,
                      subTextAllowWrap: !0,
                      onSelect: () => {
                        W(`approval`, `approval_policy`, e.value);
                      },
                      SubText: (0, $.jsx)(`div`, {
                        className: `pt-1 text-sm text-token-text-secondary`,
                        children: e.description,
                      }),
                      children: (0, $.jsx)(`span`, {
                        className: `text-sm`,
                        children: t.formatMessage(e.label),
                      }),
                    },
                    e.value,
                  ),
                ),
              }),
            }),
            (0, $.jsx)(J, {
              label: (0, $.jsx)(q, { ...X.sandboxSettings }),
              description: (0, $.jsx)(Nn, {
                error: c.sandbox,
                lockReason: we,
                children: (0, $.jsx)(q, {
                  id: `settings.agent.configuration.sandbox.definition`,
                  defaultMessage: `Choose how much Codex can do when running commands`,
                  description: `Definition for sandbox settings in configuration settings`,
                }),
              }),
              control: (0, $.jsx)(b, {
                align: `end`,
                contentWidth: `panelWide`,
                disabled: Oe || we != null,
                triggerButton: (0, $.jsx)(Dt, {
                  disabled: Oe || we != null,
                  contentClassName: `truncate`,
                  children: z == null ? me : t.formatMessage(z.label),
                }),
                children: xe.map((e) =>
                  (0, $.jsx)(
                    K.Item,
                    {
                      RightIcon: e.value === me ? He : void 0,
                      subTextAllowWrap: !0,
                      onSelect: () => {
                        W(`sandbox`, `sandbox_mode`, e.value);
                      },
                      SubText: (0, $.jsx)(`div`, {
                        className: `pt-1 text-sm text-token-text-secondary`,
                        children: e.description,
                      }),
                      children: (0, $.jsx)(`span`, {
                        className: `text-sm`,
                        children: t.formatMessage(e.label),
                      }),
                    },
                    e.value,
                  ),
                ),
              }),
            }),
            fe
              ? (0, $.jsx)(J, {
                  label: (0, $.jsx)(q, { ...X.networkAccess }),
                  description: (0, $.jsx)(Nn, {
                    error: c.network,
                    lockReason: De,
                    children: (0, $.jsx)(q, {
                      id: `settings.agent.configuration.network.definition`,
                      defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                      description: `Definition for network access in configuration settings`,
                    }),
                  }),
                  control: (0, $.jsx)(se, {
                    checked: ge,
                    disabled: Oe || De != null,
                    onChange: (e) => {
                      W(`network`, `sandbox_workspace_write.network_access`, e);
                    },
                    ariaLabel: t.formatMessage({
                      id: `settings.agent.configuration.network.ariaLabel`,
                      defaultMessage: `Allow network access`,
                      description: `Aria label for network access toggle in configuration settings`,
                    }),
                  }),
                })
              : null,
          ],
        }),
      }),
    ],
  });
}
function Mn(e) {
  let t = (0, Un.c)(7),
    { onSelect: n, scopeOption: r, selected: i } = e,
    a = i ? He : void 0,
    o;
  t[0] === r.label
    ? (o = t[1])
    : ((o = (0, $.jsx)(`span`, { className: `truncate text-sm`, children: r.label })),
      (t[0] = r.label),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r.tooltipText || t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(K.Item, {
          RightIcon: a,
          tooltipText: r.tooltipText,
          tooltipSide: `right`,
          onSelect: n,
          children: o,
        })),
        (t[2] = n),
        (t[3] = r.tooltipText),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Nn(e) {
  let t = (0, Un.c)(10),
    { children: n, error: r, lockReason: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, $.jsx)(`div`, { children: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `inline-flex items-center gap-1 text-sm text-token-editor-warning-foreground`,
              children: [
                (0, $.jsx)(fe, { className: `icon-2xs` }),
                (0, $.jsx)(`span`, { children: i }),
              ],
            })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === r
    ? (s = t[5])
    : ((s =
        r == null
          ? null
          : (0, $.jsx)(`div`, { className: `text-sm text-token-error-foreground`, children: r })),
      (t[4] = r),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [a, o, s] })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Pn(e, t) {
  if (e == null) return [];
  let n = [];
  for (let r of e) {
    if (r.name.type !== `project`) continue;
    let e = Fn(r.name.dotCodexFolder);
    n.push({
      key: `project:${e ?? r.name.dotCodexFolder}`,
      kind: `project`,
      label: t.formatMessage(
        {
          id: `settings.agent.configuration.scope.project`,
          defaultMessage: `{repoName}`,
          description: `Label for a project config scope in configuration settings`,
        },
        { repoName: In(e ?? r.name.dotCodexFolder) },
      ),
      tooltipText: Ue(r.name) ?? r.name.dotCodexFolder,
      filePath: Ue(r.name),
      expectedVersion: r.version,
      workspaceRoot: e,
      layer: r,
    });
  }
  return n;
}
function Fn(e) {
  return e.endsWith(`/.codex`) || e.endsWith(`\\.codex`) ? e.slice(0, -7) : null;
}
function In(e) {
  return e.split(/[/\\]/).at(-1) || e;
}
function Ln(e) {
  if (typeof e != `object` || !e || Array.isArray(e))
    return { approvalPolicy: null, sandboxMode: null, networkAccess: null };
  let t = e.approval_policy,
    n = e.sandbox_mode,
    r = e.sandbox_workspace_write;
  return {
    approvalPolicy: Hn(t ?? null),
    sandboxMode:
      n === `read-only` || n === `workspace-write` || n === `danger-full-access` ? n : null,
    networkAccess:
      typeof r == `object` && r && !Array.isArray(r) && typeof r.network_access == `boolean`
        ? r.network_access
        : null,
  };
}
function Rn(e, t) {
  return e == null
    ? t.formatMessage({
        id: `settings.agent.configuration.scope.unavailable`,
        defaultMessage: `Config scope unavailable.`,
        description: `Message shown when no config scope is available in configuration settings`,
      })
    : e.filePath == null
      ? t.formatMessage({
          id: `settings.agent.configuration.scope.readOnly`,
          defaultMessage: `This config source cannot be edited here.`,
          description: `Message shown when the selected config scope cannot be edited`,
        })
      : null;
}
function zn({
  intl: e,
  scopeLockReason: t,
  origin: n,
  selectedScope: r,
  hasOptions: i,
  restrictedMessage: a,
}) {
  return (
    t ??
    (i
      ? r?.kind !== `managed` && n != null && l(n.name)
        ? e.formatMessage({
            id: `settings.agent.configuration.control.managed`,
            defaultMessage: `This value is managed by admin policy.`,
            description: `Message shown when a configuration control is managed by admin policy`,
          })
        : null
      : a)
  );
}
function Bn(e) {
  return Gn.find((t) => t.value === e) ?? null;
}
function Vn(e) {
  return Kn.find((t) => t.value === e) ?? null;
}
function Hn(e) {
  return e === `untrusted` || e === `on-failure` || e === `on-request` || e === `never` ? e : null;
}
var Un, Wn, $, Gn, Kn;
e(() => {
  ((Un = Ne()),
    we(),
    o(),
    a(),
    U(),
    (Wn = t(D(), 1)),
    G(),
    De(),
    B(),
    V(),
    Xe(),
    Ze(),
    tt(),
    ft(),
    pt(),
    yt(),
    Gt(),
    re(),
    z(),
    O(),
    Re(),
    nt(),
    jt(),
    I(),
    be(),
    i(),
    y(),
    v(),
    Yt(),
    zt(),
    ee(),
    _t(),
    ge(),
    P(),
    rt(),
    he(),
    Le(),
    xt(),
    j(),
    c(),
    N(),
    _(),
    de(),
    r(),
    le(),
    Je(),
    Qt(),
    ln(),
    gn(),
    xn(),
    qt(),
    ct(),
    wn(),
    ht(),
    Ot(),
    Vt(),
    ue(),
    Ut(),
    x(),
    Mt(),
    Ae(),
    n(),
    ($ = s()),
    (Gn = [
      { value: `untrusted`, label: X.untrusted, description: `Always ask before taking action` },
      { value: `on-failure`, label: X.onFailure, description: `Ask only when a command fails` },
      { value: `on-request`, label: X.onRequest, description: `Ask when escalation is requested` },
      { value: `never`, label: X.never, description: `Run without asking for approval` },
    ]),
    (Kn = [
      {
        value: `read-only`,
        label: X.readOnly,
        description: `Can read files, but cannot edit them`,
      },
      {
        value: `workspace-write`,
        label: X.workspaceWrite,
        description: `Can edit files, but only in this workspace`,
      },
      {
        value: `danger-full-access`,
        label: X.fullAccess,
        description: `Can edit files outside this workspace`,
      },
    ]));
})();
export { Tn as AgentSettings };
//# sourceMappingURL=agent-settings-C.js.map
