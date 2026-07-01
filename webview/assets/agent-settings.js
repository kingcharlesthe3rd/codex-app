import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $i as n,
  $r as r,
  AV as i,
  BN as a,
  CA as o,
  CV as s,
  Cu as c,
  DV as l,
  EB as u,
  Ef as d,
  GN as f,
  GP as p,
  Gi as m,
  Gr as h,
  Gw as g,
  H as _,
  HP as v,
  Hu as y,
  IP as b,
  Ij as x,
  J as S,
  Jo as C,
  Ko as w,
  LP as T,
  MA as E,
  ME as D,
  Mj as O,
  NA as k,
  PN as A,
  Pf as j,
  Pj as M,
  Qi as N,
  Qr as ee,
  RN as P,
  RV as F,
  SA as te,
  TB as ne,
  U as re,
  Ur as I,
  Uu as L,
  V as ie,
  VP as R,
  W as ae,
  WN as oe,
  XO as se,
  Xz as z,
  YO as ce,
  Yj as le,
  Yr as B,
  _f as ue,
  av as V,
  bB as de,
  bf as fe,
  cf as pe,
  df as me,
  ea as he,
  fN as ge,
  ff as H,
  gv as _e,
  hL as ve,
  hS as ye,
  iF as U,
  if as be,
  jE as W,
  jV as G,
  lL as xe,
  lM as Se,
  lf as Ce,
  mB as K,
  mf as we,
  pN as Te,
  pS as Ee,
  pf as De,
  q as Oe,
  qP as ke,
  qi as q,
  qj as Ae,
  qo as je,
  qw as Me,
  rf as Ne,
  ta as Pe,
  uB as Fe,
  uM as Ie,
  wB as Le,
  wu as Re,
  xV as ze,
  yE as Be,
  zV as Ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  CT as He,
  Cr as Ue,
  Ds as We,
  Es as Ge,
  Fm as Ke,
  Fs as qe,
  Lm as Je,
  Os as Ye,
  Ps as Xe,
  Qr as Ze,
  ST as Qe,
  Sr as J,
  Ts as $e,
  Zr as et,
  _T as tt,
  bD as nt,
  bd as rt,
  fp as it,
  gT as at,
  hT as ot,
  lT as st,
  mT as ct,
  pp as lt,
  uT as ut,
  wT as dt,
  xT as ft,
  yD as pt,
  yd as mt,
} from "./app-initial~app-main~onboarding-page.js";
import {
  Ct as ht,
  St as gt,
  bt as _t,
  lt as Y,
  ut as vt,
  xt as yt,
} from "./app-initial~app-main~automations-page.js";
import {
  O as bt,
  T as xt,
  k as St,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  m as Ct,
  p as wt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  h as Tt,
  m as Et,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j.js";
import {
  S as Dt,
  u as Ot,
} from "./app-initial~app-main~first-run~page~remote-conversation-page~plugin-detail-page~new-thread-~o67ur2ib.js";
import {
  a as kt,
  d as At,
  i as jt,
  l as Mt,
  n as Nt,
  o as Pt,
  p as Ft,
  s as It,
  t as Lt,
  u as Rt,
} from "./app-initial~app-main~agent-settings.js";
import {
  a as zt,
  i as Bt,
  n as Vt,
  r as Ht,
  t as Ut,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~abrx06l0.js";
import {
  r as Wt,
  t as Gt,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as Kt,
  t as qt,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as Jt, t as Yt } from "./open-in-targets-query.js";
import { n as Xt, t as Zt } from "./experimental-feature-visibility.js";
var X,
  Qt = e(() => {
    (v(),
      (X = R({
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
    n = (await A(`read-file`, { params: { path: e } })).contents;
  } catch (e) {
    if (!cn(e)) throw Error(`Failed to read project config.`);
  }
  let r = nn(n, t.name, t.value);
  if (r !== n)
    try {
      await A(`local-environment-config-save`, { params: { configPath: e, raw: r } });
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
  P();
});
function un(e) {
  let t = (0, mn.c)(26),
    { hostId: n } = e,
    r = ke(),
    [i, a] = (0, hn.useState)(!1),
    { data: o, isLoading: s } = Le(w, n),
    c = o === void 0 ? [] : o,
    l;
  t[0] === n ? (l = t[1]) : ((l = { hostId: n }), (t[0] = n), (t[1] = l));
  let u = C(l),
    d = c.filter(pn),
    f = c.some(fn),
    m = c.find(dn),
    h;
  t[2] === u
    ? (h = t[3])
    : ((h = (e) => ({
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
      (t[3] = h));
  let g = [
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
                m?.description ??
                r.formatMessage({
                  id: `settings.general.experimentalFeatures.plugins.description`,
                  defaultMessage: `Enable the plugins experience in Codex`,
                  description: `Description for the plugins experimental feature toggle`,
                }),
              enabled: m?.enabled ?? !0,
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
      ...d.map(h),
    ],
    _ = g.length > 0,
    v = Y,
    y;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(p, {
        id: `settings.general.experimentalFeatures`,
        defaultMessage: `Experimental features (Beta)`,
        description: `Heading for beta experimental features settings group`,
      })),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] === i
    ? (b = t[6])
    : ((b = i
        ? (0, Z.jsx)(`div`, {
            className: `mb-2 block font-medium text-token-error-foreground`,
            children: (0, Z.jsx)(p, {
              id: `settings.general.experimentalFeatures.restartNote`,
              defaultMessage: `Restart {appName} to apply experimental feature changes`,
              description: `Notice shown after changing an experimental feature to indicate restart is required`,
              values: { appName: Et },
            }),
          })
        : void 0),
      (t[5] = i),
      (t[6] = b));
  let x;
  t[7] === b
    ? (x = t[8])
    : ((x = (0, Z.jsx)(Y.Header, { title: y, subtitle: b })), (t[7] = b), (t[8] = x));
  let S = Y,
    T = qt,
    E;
  t[9] === s
    ? (E = t[10])
    : ((E = s
        ? (0, Z.jsx)(J, {
            label: (0, Z.jsx)(p, {
              id: `settings.general.experimentalFeatures.loading`,
              defaultMessage: `Loading experimental features…`,
              description: `Loading label for beta experimental features settings group`,
            }),
            control: (0, Z.jsx)(`span`, { className: `h-5 w-8` }),
          })
        : null),
      (t[9] = s),
      (t[10] = E));
  let D;
  t[11] !== _ || t[12] !== s
    ? ((D =
        !s && !_
          ? (0, Z.jsx)(J, {
              label: (0, Z.jsx)(p, {
                id: `settings.general.experimentalFeatures.empty`,
                defaultMessage: `No beta experimental features available`,
                description: `Empty label for beta experimental features settings group`,
              }),
              control: (0, Z.jsx)(`span`, { className: `h-5 w-8` }),
            })
          : null),
      (t[11] = _),
      (t[12] = s),
      (t[13] = D))
    : (D = t[13]);
  let O = g.map((e) =>
      (0, Z.jsx)(
        J,
        {
          label: e.label,
          description: e.description,
          control: (0, Z.jsx)(re, {
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
    k;
  t[14] !== T || t[15] !== O || t[16] !== E || t[17] !== D
    ? ((k = (0, Z.jsxs)(T, { children: [E, D, O] })),
      (t[14] = T),
      (t[15] = O),
      (t[16] = E),
      (t[17] = D),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== k || t[20] !== S.Content
    ? ((A = (0, Z.jsx)(S.Content, { children: k })), (t[19] = k), (t[20] = S.Content), (t[21] = A))
    : (A = t[21]);
  let j;
  return (
    t[22] !== v || t[23] !== A || t[24] !== x
      ? ((j = (0, Z.jsxs)(v, { children: [x, A] })),
        (t[22] = v),
        (t[23] = A),
        (t[24] = x),
        (t[25] = j))
      : (j = t[25]),
    j
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
    ((mn = F()), de(), (hn = t(Ve(), 1)), v(), Tt(), ae(), je(), Zt(), vt(), Ue(), Kt(), (Z = G()));
  });
function _n(e) {
  let t = (0, yn.c)(53),
    { hostId: n } = e,
    r = ne(b),
    i = u(ot),
    a;
  t[0] === n ? (a = t[1]) : ((a = { hostId: n }), (t[0] = n), (t[1] = a));
  let { data: o } = ut(a),
    s,
    c,
    l,
    d,
    f,
    m,
    g,
    _,
    v,
    y,
    x,
    S,
    C,
    w;
  if (t[2] !== i || t[3] !== n || t[4] !== o || t[5] !== r) {
    m = Symbol.for(`react.early_return_sentinel`);
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
        m = null;
        break bb0;
      }
      let u;
      t[23] === i ? (u = t[24]) : ((u = (e) => i.has(e)), (t[23] = i), (t[24] = u));
      let b = ct.length + a.filter(u).length;
      ((f = Y),
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((w = (0, Q.jsx)(Y.Header, {
              title: (0, Q.jsx)(p, {
                id: `settings.agent.modelFeatures.title`,
                defaultMessage: `Model features`,
                description: `Title for model feature settings`,
              }),
            })),
            (t[25] = w))
          : (w = t[25]),
        (d = Y.Content),
        (l = qt),
        (c = J),
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((S = (0, Q.jsx)(p, {
              id: `settings.agent.modelFeatures.reasoningEfforts.label`,
              defaultMessage: `Available reasoning efforts`,
              description: `Label for the available reasoning efforts setting`,
            })),
            (C = (0, Q.jsx)(p, {
              id: `settings.agent.modelFeatures.reasoningEfforts.description`,
              defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
              description: `Description for the available reasoning efforts setting`,
            })),
            (t[26] = S),
            (t[27] = C))
          : ((S = t[26]), (C = t[27])),
        (s = I),
        (g = `end`),
        (_ = `menuWide`),
        t[28] === b
          ? (v = t[29])
          : ((v = (0, Q.jsx)(xt, {
              children: (0, Q.jsx)(p, {
                id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                description: `Number of available reasoning efforts selected`,
                values: { count: b },
              }),
            })),
            (t[28] = b),
            (t[29] = v)),
        t[30] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((y = ct.map(vn)), (t[30] = y))
          : (y = t[30]),
        (x = a.map((e) =>
          (0, Q.jsx)(
            h.CheckboxItem,
            {
              checked: i.has(e),
              onCheckedChange: (t) => {
                tt(r, { enabled: t, hostId: n, listModelsData: o, reasoningEffort: e });
              },
              children: (0, Q.jsx)(et, { effort: e }),
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
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w));
  } else
    ((s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (d = t[9]),
      (f = t[10]),
      (m = t[11]),
      (g = t[12]),
      (_ = t[13]),
      (v = t[14]),
      (y = t[15]),
      (x = t[16]),
      (S = t[17]),
      (C = t[18]),
      (w = t[19]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let T;
  t[31] !== s || t[32] !== g || t[33] !== _ || t[34] !== v || t[35] !== y || t[36] !== x
    ? ((T = (0, Q.jsxs)(s, { align: g, contentWidth: _, triggerButton: v, children: [y, x] })),
      (t[31] = s),
      (t[32] = g),
      (t[33] = _),
      (t[34] = v),
      (t[35] = y),
      (t[36] = x),
      (t[37] = T))
    : (T = t[37]);
  let E;
  t[38] !== c || t[39] !== T || t[40] !== S || t[41] !== C
    ? ((E = (0, Q.jsx)(c, { label: S, description: C, control: T })),
      (t[38] = c),
      (t[39] = T),
      (t[40] = S),
      (t[41] = C),
      (t[42] = E))
    : (E = t[42]);
  let D;
  t[43] !== l || t[44] !== E
    ? ((D = (0, Q.jsx)(l, { children: E })), (t[43] = l), (t[44] = E), (t[45] = D))
    : (D = t[45]);
  let O;
  t[46] !== d || t[47] !== D
    ? ((O = (0, Q.jsx)(d, { children: D })), (t[46] = d), (t[47] = D), (t[48] = O))
    : (O = t[48]);
  let k;
  return (
    t[49] !== f || t[50] !== O || t[51] !== w
      ? ((k = (0, Q.jsxs)(f, { children: [w, O] })),
        (t[49] = f),
        (t[50] = O),
        (t[51] = w),
        (t[52] = k))
      : (k = t[52]),
    k
  );
}
function vn(e) {
  return (0, Q.jsx)(
    h.CheckboxItem,
    { checked: !0, disabled: !0, children: (0, Q.jsx)(et, { effort: e }) },
    e,
  );
}
var yn,
  Q,
  bn,
  xn = e(() => {
    ((yn = F()),
      de(),
      v(),
      B(),
      Ze(),
      st(),
      at(),
      T(),
      vt(),
      Ue(),
      St(),
      Kt(),
      (Q = G()),
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
    (z(), (Cn = Fe({ workspaceRoot: K().min(1).nullable().optional() }).passthrough()));
  });
function Tn() {
  let e = (0, Un.c)(41),
    { selectedHostId: t } = Je(),
    n = D(t),
    r = L(t),
    i = M(Mt),
    a = M(`2106641128`),
    o = M(`3693343337`),
    s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(bt, { slug: `agent` })), (e[0] = s))
    : (s = e[0]);
  let c;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(p, {
        id: `settings.agent.configuration.subtitle.summary`,
        defaultMessage: `Configure approval policy and sandbox settings <a>Learn more</a>`,
        description: `Summary text for the configuration settings subtitle`,
        values: { a: Dn },
      })),
      (e[1] = c))
    : (c = e[1]);
  let l;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(Y.Header, { title: (0, $.jsx)(p, { ...X.customConfig }) })), (e[2] = l))
    : (l = e[2]);
  let u;
  if (e[3] !== r || e[4] !== t) {
    let n;
    (e[6] !== r.length || e[7] !== t
      ? ((n = (e, n) =>
          (0, $.jsx)(
            mt,
            {
              fullWidth: !0,
              icon: Ut,
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
                          children: (0, $.jsx)(lt, {
                            cwd: null,
                            className: `[&>p]:my-0`,
                            textStyle: { kind: `small` },
                            children: e.summary,
                          }),
                        }),
                        e.details != null && e.details.length > 0
                          ? (0, $.jsx)(`div`, {
                              className: `min-w-0 text-sm text-token-text-secondary`,
                              children: (0, $.jsx)(lt, {
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
                              children: (0, $.jsx)(p, {
                                id: `settings.agent.configuration.notice.fileContext`,
                                defaultMessage: `File: {path}{location}`,
                                description: `File path and optional location for a config or rules warning shown in settings`,
                                values: {
                                  path: (0, $.jsx)(`code`, { children: e.path }),
                                  location:
                                    e.range == null
                                      ? ``
                                      : (0, $.jsx)(p, {
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
                      : (0, $.jsx)(ge, {
                          color: `secondary`,
                          size: `toolbar`,
                          className: `inline-flex w-fit shrink-0`,
                          onClick: () => {
                            e.path != null && dt({ hostId: t, path: e.path, range: e.range });
                          },
                          children: (0, $.jsx)(p, {
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
      (u = r.map(n)),
      (e[3] = r),
      (e[4] = t),
      (e[5] = u));
  } else u = e[5];
  let d;
  e[9] === t
    ? (d = e[10])
    : ((d = (0, $.jsx)(N, { electron: !0, children: (0, $.jsx)(jn, { hostId: t }) })),
      (e[9] = t),
      (e[10] = d));
  let f, m;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(p, {
        id: `settings.agent.configuration.configToml`,
        defaultMessage: `config.toml`,
        description: `Label for config.toml open button`,
      })),
      (m = (0, $.jsx)(p, {
        id: `settings.agent.configuration.configToml.description`,
        defaultMessage: `Edit your config to customize agent behavior`,
        description: `Description for config.toml open row`,
      })),
      (e[11] = f),
      (e[12] = m))
    : ((f = e[11]), (m = e[12]));
  let h, g;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(`span`, { className: `block` })),
      (g = (0, $.jsx)(p, {
        id: `settings.agent.configuration.configToml.restartNote`,
        defaultMessage: `Restart Codex after editing to apply changes`,
        description: `Note that config.toml changes require a restart`,
      })),
      (e[13] = h),
      (e[14] = g))
    : ((h = e[13]), (g = e[14]));
  let _;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsxs)($.Fragment, {
        children: [
          m,
          ` `,
          h,
          g,
          ` `,
          (0, $.jsxs)(`a`, {
            className: `inline-flex items-center gap-1 text-token-text-secondary hover:text-token-text-primary`,
            href: Ot,
            target: `_blank`,
            rel: `noreferrer`,
            onClick: En,
            children: [
              (0, $.jsx)(p, {
                id: `settings.agent.configuration.configToml.docs`,
                defaultMessage: `Docs`,
                description: `Link label for config documentation`,
              }),
              (0, $.jsx)(Oe, { href: Ot, className: `icon-xxs` }),
            ],
          }),
        ],
      })),
      (e[15] = _))
    : (_ = e[15]);
  let v;
  e[16] === t
    ? (v = e[17])
    : ((v = (0, $.jsx)(N, {
        extension: !0,
        children: (0, $.jsx)(qt, {
          children: (0, $.jsx)(J, {
            label: f,
            description: _,
            control: (0, $.jsx)(ft, { hostId: t }),
          }),
        }),
      })),
      (e[16] = t),
      (e[17] = v));
  let y;
  e[18] !== v || e[19] !== u || e[20] !== d
    ? ((y = (0, $.jsxs)(Y, {
        className: `gap-2`,
        children: [l, (0, $.jsxs)(Y.Content, { children: [u, d, v] })],
      })),
      (e[18] = v),
      (e[19] = u),
      (e[20] = d),
      (e[21] = y))
    : (y = e[21]);
  let b;
  e[22] !== o || e[23] !== t
    ? ((b = o ? (0, $.jsx)(_n, { hostId: t }) : null), (e[22] = o), (e[23] = t), (e[24] = b))
    : (b = e[24]);
  let x;
  e[25] !== a || e[26] !== t
    ? ((x = a ? (0, $.jsx)(`div`, { children: (0, $.jsx)(un, { hostId: t }) }) : null),
      (e[25] = a),
      (e[26] = t),
      (e[27] = x))
    : (x = e[27]);
  let S;
  e[28] === x
    ? (S = e[29])
    : ((S = (0, $.jsx)(N, { electron: !0, children: x })), (e[28] = x), (e[29] = S));
  let C;
  e[30] !== i || e[31] !== n || e[32] !== t
    ? ((C = i && n.kind === `local` ? (0, $.jsx)(On, { hostId: t }) : null),
      (e[30] = i),
      (e[31] = n),
      (e[32] = t),
      (e[33] = C))
    : (C = e[33]);
  let w;
  e[34] === C
    ? (w = e[35])
    : ((w = (0, $.jsx)(N, { electron: !0, children: C })), (e[34] = C), (e[35] = w));
  let T;
  return (
    e[36] !== y || e[37] !== b || e[38] !== S || e[39] !== w
      ? ((T = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(Gt, { title: s, subtitle: c, children: [y, b, S, w] }),
        })),
        (e[36] = y),
        (e[37] = b),
        (e[38] = S),
        (e[39] = w),
        (e[40] = T))
      : (T = e[40]),
    T
  );
}
function En(e) {
  q({ event: e, href: Ot, initiator: `open_in_browser_bridge` });
}
function Dn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: Ot,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function On(e) {
  let t = (0, Un.c)(2),
    { hostId: n } = e,
    r = E.primaryRuntime;
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
    i = ne(b),
    a = ke(),
    o = x(),
    { data: c, isLoading: d } = Le(w, n),
    f;
  t[0] === n ? (f = t[1]) : ((f = { hostId: n }), (t[0] = n), (t[1] = f));
  let m = C(f),
    h;
  t[2] === c ? (h = t[3]) : ((h = c?.find(An)), (t[2] = c), (t[3] = h));
  let _ = h,
    v = _?.enabled === !0,
    y;
  t[4] !== n || t[5] !== r
    ? ((y = () => r.diagnoseDependencies({ hostId: n })), (t[4] = n), (t[5] = r), (t[6] = y))
    : (y = t[6]);
  let S;
  t[7] === n ? (S = t[8]) : ((S = _t(n)), (t[7] = n), (t[8] = S));
  let T;
  t[9] !== y || t[10] !== S
    ? ((T = { queryFn: y, queryKey: S, staleTime: oe.FIVE_SECONDS }),
      (t[9] = y),
      (t[10] = S),
      (t[11] = T))
    : (T = t[11]);
  let E = l(T),
    D;
  t[12] !== n || t[13] !== r
    ? ((D = { mutationFn: () => r.diagnoseDependencies({ hostId: n }) }),
      (t[12] = n),
      (t[13] = r),
      (t[14] = D))
    : (D = t[14]);
  let O = s(D),
    k;
  t[15] !== r || t[16] !== o
    ? ((k = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await ht(o), r.runUpdateNow({ release: t }));
        },
      }),
      (t[15] = r),
      (t[16] = o),
      (t[17] = k))
    : (k = t[17]);
  let A = s(k),
    j;
  t[18] !== n || t[19] !== r || t[20] !== o
    ? ((j = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await ht(o), r.resetDependencies({ hostId: n, release: t }));
        },
      }),
      (t[18] = n),
      (t[19] = r),
      (t[20] = o),
      (t[21] = j))
    : (j = t[21]);
  let M = s(j),
    N;
  t[22] === n
    ? (N = t[23])
    : ((N = { mutationFn: () => At({ hostId: n }) }), (t[22] = n), (t[23] = N));
  let P = s(N),
    F = u(Ye),
    I = u(We),
    L = F?.hostId === n ? F : null,
    ie;
  t[24] === i ? (ie = t[25]) : ((ie = i.get(le)), (t[24] = i), (t[25] = ie));
  let R = ie,
    ae = d || m.isPending || O.isPending || A.isPending || M.isPending || P.isPending,
    se;
  t[26] === L ? (se = t[27]) : ((se = Ge(L)), (t[26] = L), (t[27] = se));
  let z = se,
    ce =
      E.data?.bundleVersion == null || E.data.bundleVersion.length === 0
        ? null
        : E.data.bundleVersion,
    B;
  t[28] !== O || t[29] !== E || t[30] !== a || t[31] !== i || t[32] !== R
    ? ((B = () => {
        let e = Date.now();
        O.mutateAsync()
          .then((t) => {
            if (
              (ye(i, g, jt({ diagnostics: t, durationMs: Date.now() - e })),
              E.refetch(),
              t.installed)
            ) {
              R.success(
                a.formatMessage({
                  id: `settings.agent.dependencies.diagnose.ok`,
                  defaultMessage: `Codex dependencies look healthy`,
                  description: `Toast shown when dependency diagnostics find no problems`,
                }),
              );
              return;
            }
            R.warning(
              a.formatMessage({
                id: `settings.agent.dependencies.diagnose.problem`,
                defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
                description: `Toast shown when dependency diagnostics find problems`,
              }),
            );
          })
          .catch(() => {
            (ye(i, g, kt({ durationMs: Date.now() - e })),
              R.danger(
                a.formatMessage({
                  id: `settings.agent.dependencies.diagnose.failed`,
                  defaultMessage: `Couldn’t diagnose Codex dependencies`,
                  description: `Toast shown when dependency diagnostics fail`,
                }),
              ));
          });
      }),
      (t[28] = O),
      (t[29] = E),
      (t[30] = a),
      (t[31] = i),
      (t[32] = R),
      (t[33] = B))
    : (B = t[33]);
  let ue = B,
    V;
  t[34] !== E || t[35] !== a || t[36] !== I || t[37] !== M || t[38] !== i || t[39] !== R
    ? ((V = () => {
        let e = Date.now();
        M.mutateAsync({ release: I })
          .then((t) => {
            (ye(
              i,
              Me,
              Pt({ bundleVersion: t.bundleVersion, durationMs: Date.now() - e, status: t.status }),
            ),
              E.refetch(),
              R.success(
                a.formatMessage({
                  id: `settings.agent.dependencies.reset.installed`,
                  defaultMessage: `Codex dependencies were reinstalled`,
                  description: `Toast shown when dependency reset and reinstall succeeds`,
                }),
              ));
          })
          .catch((t) => {
            if (Nt(t)) {
              (i.set(Ye, null),
                E.refetch(),
                ye(
                  i,
                  Me,
                  Pt({ bundleVersion: null, durationMs: Date.now() - e, status: `canceled` }),
                ),
                R.info(
                  a.formatMessage({
                    id: `settings.agent.dependencies.reset.canceled`,
                    defaultMessage: `Codex dependency download canceled`,
                    description: `Toast shown when dependency reset and reinstall is canceled`,
                  }),
                  { id: `install-primary-runtime` },
                ));
              return;
            }
            (ye(i, Me, Pt({ bundleVersion: null, durationMs: Date.now() - e, status: `failed` })),
              R.danger(
                a.formatMessage({
                  id: `settings.agent.dependencies.reset.failed`,
                  defaultMessage: `Couldn’t reinstall Codex dependencies`,
                  description: `Toast shown when dependency reset fails`,
                }),
              ));
          });
      }),
      (t[34] = E),
      (t[35] = a),
      (t[36] = I),
      (t[37] = M),
      (t[38] = i),
      (t[39] = R),
      (t[40] = V))
    : (V = t[40]);
  let de = V,
    fe;
  t[41] !== P || t[42] !== E || t[43] !== a || t[44] !== i || t[45] !== R
    ? ((fe = () => {
        P.mutateAsync()
          .then((e) => {
            let { canceled: t } = e;
            if ((i.set(Ye, null), E.refetch(), !t)) {
              R.info(
                a.formatMessage({
                  id: `settings.agent.dependencies.cancel.noop`,
                  defaultMessage: `No Codex dependency download is running`,
                  description: `Toast shown when canceling a Codex dependency download but no download is running`,
                }),
              );
              return;
            }
            R.info(
              a.formatMessage({
                id: `settings.agent.dependencies.cancel.canceled`,
                defaultMessage: `Canceling Codex dependency download`,
                description: `Toast shown after requesting cancellation of a Codex dependency download`,
              }),
              { id: `install-primary-runtime` },
            );
          })
          .catch(() => {
            R.danger(
              a.formatMessage({
                id: `settings.agent.dependencies.cancel.failed`,
                defaultMessage: `Couldn’t cancel Codex dependency download`,
                description: `Toast shown when canceling a Codex dependency download fails`,
              }),
            );
          });
      }),
      (t[41] = P),
      (t[42] = E),
      (t[43] = a),
      (t[44] = i),
      (t[45] = R),
      (t[46] = fe))
    : (fe = t[46]);
  let pe = fe,
    me;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(Y.Header, { title: (0, $.jsx)(p, { ...X.workspaceDependencies }) })),
      (t[47] = me))
    : (me = t[47]);
  let H;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(p, { ...X.currentDependencyVersion })), (t[48] = H))
    : (H = t[48]);
  let _e;
  t[49] === E.data?.problems.length
    ? (_e = t[50])
    : ((_e = E.data?.problems.length
        ? (0, $.jsx)(p, {
            id: `settings.agent.dependencies.bundleVersion.problemDescription`,
            defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
            description: `Description shown when dependency diagnostics have problems`,
          })
        : null),
      (t[49] = E.data?.problems.length),
      (t[50] = _e));
  let U;
  t[51] !== ce || t[52] !== E.isLoading || t[53] !== z || t[54] !== L
    ? ((U = z
        ? Bt(L, Ht(L))
        : E.isLoading
          ? (0, $.jsx)(p, {
              id: `settings.agent.dependencies.bundleVersion.loading`,
              defaultMessage: `Checking…`,
              description: `Status while loading the current dependency bundle version`,
            })
          : (ce ??
            (0, $.jsx)(p, {
              id: `settings.agent.dependencies.bundleVersion.notInstalled`,
              defaultMessage: `Not installed`,
              description: `Status when dependency bundle version is unavailable`,
            }))),
      (t[51] = ce),
      (t[52] = E.isLoading),
      (t[53] = z),
      (t[54] = L),
      (t[55] = U))
    : (U = t[55]);
  let be;
  t[56] === U
    ? (be = t[57])
    : ((be = (0, $.jsx)(`span`, { className: `text-sm text-token-text-secondary`, children: U })),
      (t[56] = U),
      (t[57] = be));
  let W;
  t[58] !== _e || t[59] !== be
    ? ((W = (0, $.jsx)(J, { label: H, description: _e, control: be })),
      (t[58] = _e),
      (t[59] = be),
      (t[60] = W))
    : (W = t[60]);
  let G, xe;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(p, { ...X.codexDependencies })),
      (xe = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.enabled.description`,
        defaultMessage: `Allow Codex to install and expose bundled Node.js and Python tools`,
        description: `Description for the Codex dependencies enabled toggle`,
      })),
      (t[61] = G),
      (t[62] = xe))
    : ((G = t[61]), (xe = t[62]));
  let Se = d || m.isPending || _ == null,
    Ce;
  t[63] !== I || t[64] !== A || t[65] !== m
    ? ((Ce = (e) => {
        m.mutate(
          { enabled: e, featureName: ve },
          {
            onSuccess: () => {
              e && A.mutate({ release: I });
            },
          },
        );
      }),
      (t[63] = I),
      (t[64] = A),
      (t[65] = m),
      (t[66] = Ce))
    : (Ce = t[66]);
  let K;
  t[67] === a
    ? (K = t[68])
    : ((K = a.formatMessage({
        id: `settings.agent.dependencies.enabled.ariaLabel`,
        defaultMessage: `Enable Codex dependencies`,
        description: `Aria label for the Codex dependencies enabled toggle`,
      })),
      (t[67] = a),
      (t[68] = K));
  let we;
  t[69] !== v || t[70] !== Se || t[71] !== Ce || t[72] !== K
    ? ((we = (0, $.jsx)(J, {
        label: G,
        description: xe,
        control: (0, $.jsx)(re, { checked: v, disabled: Se, onChange: Ce, ariaLabel: K }),
      })),
      (t[69] = v),
      (t[70] = Se),
      (t[71] = Ce),
      (t[72] = K),
      (t[73] = we))
    : (we = t[73]);
  let Te, Ee;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(p, { ...X.diagnoseWorkspaceDependencies })),
      (Ee = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.diagnose.description`,
        defaultMessage: `Checks the current bundle and records diagnostic logs`,
        description: `Description for dependency diagnostics in settings`,
      })),
      (t[74] = Te),
      (t[75] = Ee))
    : ((Te = t[74]), (Ee = t[75]));
  let De, Oe;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, $.jsx)(ee, { className: `icon-2xs` })),
      (Oe = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.diagnose.button`,
        defaultMessage: `Diagnose`,
        description: `Button label for dependency diagnostics`,
      })),
      (t[76] = De),
      (t[77] = Oe))
    : ((De = t[76]), (Oe = t[77]));
  let q;
  t[78] !== O.isPending || t[79] !== ue || t[80] !== M.isPending
    ? ((q = (0, $.jsx)(J, {
        label: Te,
        description: Ee,
        control: (0, $.jsxs)(ge, {
          color: `secondary`,
          size: `toolbar`,
          loading: O.isPending,
          disabled: M.isPending,
          onClick: ue,
          children: [De, Oe],
        }),
      })),
      (t[78] = O.isPending),
      (t[79] = ue),
      (t[80] = M.isPending),
      (t[81] = q))
    : (q = t[81]);
  let Ae, je;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(p, { ...X.resetWorkspaceDependencies })),
      (je = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.reset.description`,
        defaultMessage: `Deletes the local bundle, downloads it again, and reloads tools`,
        description: `Description for resetting and reinstalling dependencies in settings`,
      })),
      (t[82] = Ae),
      (t[83] = je))
    : ((Ae = t[82]), (je = t[83]));
  let Ne = z ? P.isPending : M.isPending,
    Pe = !v || (z ? P.isPending : ae),
    Fe = z ? pe : de,
    Ie;
  t[84] === z
    ? (Ie = t[85])
    : ((Ie = z
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(te, { className: `icon-2xs` }),
              (0, $.jsx)(p, {
                id: `settings.agent.dependencies.cancel.button`,
                defaultMessage: `Cancel download`,
                description: `Button label for canceling dependency download`,
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(he, { className: `icon-2xs` }),
              (0, $.jsx)(p, {
                id: `settings.agent.dependencies.reset.button`,
                defaultMessage: `Reinstall`,
                description: `Button label for resetting and reinstalling dependencies`,
              }),
            ],
          })),
      (t[84] = z),
      (t[85] = Ie));
  let Re;
  t[86] !== Ne || t[87] !== Pe || t[88] !== Fe || t[89] !== Ie
    ? ((Re = (0, $.jsx)(J, {
        label: Ae,
        description: je,
        control: (0, $.jsx)(ge, {
          color: `danger`,
          size: `toolbar`,
          loading: Ne,
          disabled: Pe,
          onClick: Fe,
          children: Ie,
        }),
      })),
      (t[86] = Ne),
      (t[87] = Pe),
      (t[88] = Fe),
      (t[89] = Ie),
      (t[90] = Re))
    : (Re = t[90]);
  let ze;
  return (
    t[91] !== W || t[92] !== we || t[93] !== q || t[94] !== Re
      ? ((ze = (0, $.jsxs)(Y, {
          className: `gap-2`,
          children: [
            me,
            (0, $.jsx)(Y.Content, { children: (0, $.jsxs)(qt, { children: [W, we, q, Re] }) }),
          ],
        })),
        (t[91] = W),
        (t[92] = we),
        (t[93] = q),
        (t[94] = Re),
        (t[95] = ze))
      : (ze = t[95]),
    ze
  );
}
function An(e) {
  return e.name === ve;
}
function jn({ hostId: e }) {
  let t = ke(),
    n = _e(),
    r = i(),
    [o, s] = (0, Wn.useState)(null),
    [c, l] = (0, Wn.useState)(null),
    [f, m] = (0, Wn.useState)({}),
    g = u(d),
    _ = Sn(n.state),
    v = _.hasValue ? (e === `local` ? _.workspaceRoot : null) : e === `local` ? g : null,
    y = Re(e),
    { data: b, isPending: x } = fe(v, {
      hostId: e,
      cwdMode: e === `local` ? `fallback-to-workspace` : `preserve-null`,
    }),
    { data: S, isPending: C } = Le(Ce, { hostId: e }),
    w = a(`open-file`),
    T = b?.config ?? null,
    E = b?.layers ?? null,
    D = b?.origins ?? null,
    O = S?.requirements ?? null,
    k = Pn(E, t),
    A = E?.find((e) => e.name.type === `user`) ?? null,
    j = E?.find((e) => we(e.name)) ?? null,
    M = y == null ? null : `${y}/config.toml`,
    N = A == null ? M : H(A.name),
    ee = {
      key: `user`,
      kind: `user`,
      label: t.formatMessage(X.userConfig),
      tooltipText: N ?? `~/.codex/config.toml`,
      filePath: N,
      expectedVersion: A?.version ?? null,
      workspaceRoot: null,
      layer: A,
    },
    P =
      j == null
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
            filePath: H(j.name),
            expectedVersion: j.version,
            workspaceRoot: null,
            layer: j,
          },
    F = [...k, ee, ...(P == null ? [] : [P])],
    te = k.length > 0,
    ne = v == null ? (F[0]?.key ?? null) : `project:${v}`,
    L = F.find((e) => e.key === o) ?? F.find((e) => e.key === ne) ?? F[0] ?? null,
    { data: R } = Le(Jt, {
      cwd: L?.workspaceRoot == null ? (v == null ? null : xe(v)) : xe(L.workspaceRoot),
      hostId: e,
    }),
    ae = Ln(L?.layer?.config ?? null),
    oe = Hn(T?.approval_policy ?? null) ?? `on-request`,
    z = T?.sandbox_mode == null ? `read-only` : T.sandbox_mode,
    ce = ae.sandboxMode == null && z === `workspace-write`,
    le = ae.sandboxMode === `workspace-write` || ce,
    B = ae.approvalPolicy ?? oe,
    V = ae.sandboxMode ?? z,
    de = Bn(B),
    he = Vn(V),
    ve = ae.networkAccess ?? T?.sandbox_workspace_write?.network_access ?? !1,
    ye = D == null ? null : ue(D, `approval_policy`, [`approvalPolicy`]),
    U = D == null ? null : ue(D, `sandbox_mode`),
    W = D == null ? null : ue(D, `sandbox_workspace_write`, [`network_access`]),
    G = L?.kind === `project` ? (L.layer?.disabledReason ?? null) : null,
    K = Rn(L, t),
    Te = Gn.filter((e) =>
      O?.allowedApprovalPolicies == null || O.allowedApprovalPolicies.length === 0
        ? !0
        : O.allowedApprovalPolicies.includes(e.value),
    ),
    Ee = Kn.filter((e) =>
      O?.allowedSandboxModes == null || O.allowedSandboxModes.length === 0
        ? !0
        : O.allowedSandboxModes.includes(e.value),
    );
  async function De(t, n, i) {
    if (!(L == null || L.filePath == null) && c == null) {
      (l(t), m((e) => ({ ...e, [t]: void 0 })));
      try {
        if (L.kind === `project`) await $t({ filePath: L.filePath, keyPath: n, value: i });
        else {
          let t = L.kind === `user` ? await me(r, e) : null;
          await se(`write-config-value`, {
            hostId: e,
            keyPath: n,
            value: i,
            mergeStrategy: `upsert`,
            filePath: t ? t.filePath : L.filePath,
            expectedVersion: t == null ? L.expectedVersion : t.expectedVersion,
          });
        }
        (await r.invalidateQueries({ queryKey: [...be, e] }),
          await Promise.all([
            r.invalidateQueries({ queryKey: [...Ne, e] }),
            r.invalidateQueries({ queryKey: [...pe, e] }),
          ]));
      } catch (e) {
        m((n) => ({ ...n, [t]: e instanceof Error ? e.message : `Unable to save` }));
      } finally {
        l(null);
      }
    }
  }
  let Oe = x || C,
    q = zn({
      intl: t,
      scopeLockReason: K,
      origin: ye,
      selectedScope: L,
      hasOptions: Te.length > 0,
      restrictedMessage: t.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    Ae = zn({
      intl: t,
      scopeLockReason: K,
      origin: U,
      selectedScope: L,
      hasOptions: Ee.length > 0,
      restrictedMessage: t.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    je = zn({
      intl: t,
      scopeLockReason: K,
      origin: W,
      selectedScope: L,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    Me = Oe || c != null || G != null,
    Pe = (e) => {
      (s(e), m({}));
    };
  return (0, $.jsxs)(Y, {
    children: [
      (0, $.jsx)(Y.Header, {
        title: (0, $.jsxs)(I, {
          align: `start`,
          contentWidth: `menuWide`,
          disabled: F.length === 0,
          triggerButton: (0, $.jsx)(xt, {
            disabled: F.length === 0,
            contentClassName: `truncate`,
            children:
              L?.label ??
              t.formatMessage({
                id: `settings.agent.configuration.scope.loading`,
                defaultMessage: `Loading…`,
                description: `Fallback label while config scope options are loading`,
              }),
          }),
          children: [
            te
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(h.Section, {
                      children: [
                        (0, $.jsx)(h.SectionLabel, {
                          children: (0, $.jsx)(p, { ...X.projectConfig }),
                        }),
                        k.map((e) =>
                          (0, $.jsx)(
                            Mn,
                            {
                              scopeOption: e,
                              selected: L?.key === e.key,
                              onSelect: () => {
                                Pe(e.key);
                              },
                            },
                            e.key,
                          ),
                        ),
                      ],
                    }),
                    (0, $.jsx)(h.Separator, {}),
                  ],
                })
              : null,
            (0, $.jsxs)(h.Section, {
              children: [
                (0, $.jsx)(h.SectionLabel, { children: (0, $.jsx)(p, { ...X.globalConfig }) }),
                (0, $.jsx)(Mn, {
                  scopeOption: ee,
                  selected: L?.key === ee.key,
                  onSelect: () => {
                    Pe(ee.key);
                  },
                }),
                P == null
                  ? null
                  : (0, $.jsx)(Mn, {
                      scopeOption: P,
                      selected: L?.key === P.key,
                      onSelect: () => {
                        Pe(P.key);
                      },
                    }),
              ],
            }),
          ],
        }),
        actions: (0, $.jsxs)(ge, {
          color: `ghost`,
          size: `toolbar`,
          disabled: L?.filePath == null,
          onClick: () => {
            L?.filePath != null &&
              Ct({
                path: L.filePath,
                cwd: L.workspaceRoot == null ? null : xe(L.workspaceRoot),
                hostId: e,
                target: R?.preferredTarget,
                openFile: w.mutate,
              });
          },
          children: [
            (0, $.jsx)(p, {
              id: `settings.agent.configuration.scope.open`,
              defaultMessage: `Open config.toml`,
              description: `Button label to open the selected config file`,
            }),
            (0, $.jsx)(ie, { className: `icon-2xs` }),
          ],
        }),
      }),
      (0, $.jsx)(Y.Content, {
        children: (0, $.jsxs)(qt, {
          children: [
            G == null
              ? null
              : (0, $.jsxs)(`div`, {
                  className: `flex items-start gap-2 p-3`,
                  children: [
                    (0, $.jsx)(pt, {
                      className: `icon-xs mt-0.5 shrink-0 text-token-editor-warning-foreground`,
                    }),
                    (0, $.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: G,
                    }),
                  ],
                }),
            (0, $.jsx)(J, {
              label: (0, $.jsx)(p, { ...X.approvalPolicy }),
              description: (0, $.jsx)(Nn, {
                error: f.approval,
                lockReason: q,
                children: (0, $.jsx)(p, {
                  id: `settings.agent.configuration.approval.definition`,
                  defaultMessage: `Choose when Codex asks for approval`,
                  description: `Definition for approval policy in configuration settings`,
                }),
              }),
              control: (0, $.jsx)(I, {
                align: `end`,
                contentWidth: `panelWide`,
                disabled: Me || q != null,
                triggerButton: (0, $.jsx)(xt, {
                  disabled: Me || q != null,
                  contentClassName: `truncate`,
                  children: de == null ? B : t.formatMessage(de.label),
                }),
                children: Te.map((e) =>
                  (0, $.jsx)(
                    h.Item,
                    {
                      RightIcon: e.value === B ? Se : void 0,
                      subTextAllowWrap: !0,
                      onSelect: () => {
                        De(`approval`, `approval_policy`, e.value);
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
              label: (0, $.jsx)(p, { ...X.sandboxSettings }),
              description: (0, $.jsx)(Nn, {
                error: f.sandbox,
                lockReason: Ae,
                children: (0, $.jsx)(p, {
                  id: `settings.agent.configuration.sandbox.definition`,
                  defaultMessage: `Choose how much Codex can do when running commands`,
                  description: `Definition for sandbox settings in configuration settings`,
                }),
              }),
              control: (0, $.jsx)(I, {
                align: `end`,
                contentWidth: `panelWide`,
                disabled: Me || Ae != null,
                triggerButton: (0, $.jsx)(xt, {
                  disabled: Me || Ae != null,
                  contentClassName: `truncate`,
                  children: he == null ? V : t.formatMessage(he.label),
                }),
                children: Ee.map((e) =>
                  (0, $.jsx)(
                    h.Item,
                    {
                      RightIcon: e.value === V ? Se : void 0,
                      subTextAllowWrap: !0,
                      onSelect: () => {
                        De(`sandbox`, `sandbox_mode`, e.value);
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
            le
              ? (0, $.jsx)(J, {
                  label: (0, $.jsx)(p, { ...X.networkAccess }),
                  description: (0, $.jsx)(Nn, {
                    error: f.network,
                    lockReason: je,
                    children: (0, $.jsx)(p, {
                      id: `settings.agent.configuration.network.definition`,
                      defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                      description: `Definition for network access in configuration settings`,
                    }),
                  }),
                  control: (0, $.jsx)(re, {
                    checked: ve,
                    disabled: Me || je != null,
                    onChange: (e) => {
                      De(`network`, `sandbox_workspace_write.network_access`, e);
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
    a = i ? Se : void 0,
    o;
  t[0] === r.label
    ? (o = t[1])
    : ((o = (0, $.jsx)(`span`, { className: `truncate text-sm`, children: r.label })),
      (t[0] = r.label),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r.tooltipText || t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(h.Item, {
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
                (0, $.jsx)(Xe, { className: `icon-2xs` }),
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
      tooltipText: H(r.name) ?? r.name.dotCodexFolder,
      filePath: H(r.name),
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
      ? r?.kind !== `managed` && n != null && we(n.name)
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
  ((Un = F()),
    Be(),
    ze(),
    de(),
    U(),
    (Wn = t(Ve(), 1)),
    v(),
    V(),
    y(),
    ce(),
    It(),
    Lt(),
    Rt(),
    Ft(),
    $e(),
    zt(),
    yt(),
    Te(),
    B(),
    m(),
    S(),
    it(),
    Qe(),
    rt(),
    Ae(),
    ae(),
    n(),
    Dt(),
    Yt(),
    wt(),
    c(),
    Vt(),
    _(),
    Ie(),
    Pe(),
    qe(),
    r(),
    nt(),
    o(),
    Ee(),
    De(),
    je(),
    k(),
    T(),
    j(),
    Wt(),
    Qt(),
    ln(),
    gn(),
    xn(),
    vt(),
    Ke(),
    wn(),
    Ue(),
    St(),
    Kt(),
    W(),
    gt(),
    O(),
    He(),
    f(),
    P(),
    ($ = G()),
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
//# sourceMappingURL=agent-settings.js.map
