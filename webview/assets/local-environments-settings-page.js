import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  AB as i,
  AN as a,
  AV as o,
  Au as s,
  BP as c,
  BV as l,
  Bh as u,
  CM as d,
  DN as f,
  Dv as p,
  Ev as m,
  FB as h,
  Ft as g,
  Gi as _,
  HE as v,
  Hh as y,
  IB as b,
  JV as x,
  Jn as ee,
  Kn as S,
  Lj as C,
  Mu as w,
  Nh as T,
  ON as E,
  Ov as D,
  PB as O,
  Pu as k,
  QP as A,
  RP as j,
  Rj as M,
  SM as N,
  Tt as te,
  Uf as P,
  Uh as F,
  Un as ne,
  VE as I,
  VP as re,
  XN as ie,
  Yf as ae,
  Yn as L,
  Zi as oe,
  bF as se,
  bi as R,
  cM as ce,
  dL as le,
  di as z,
  eP as ue,
  fL as de,
  gi as B,
  hM as fe,
  hi as pe,
  iF as V,
  ju as me,
  jv as he,
  kN as ge,
  kj as _e,
  lF as ve,
  mi as ye,
  mv as be,
  pI as xe,
  pM as Se,
  pi as Ce,
  qV as H,
  qi as we,
  rF as Te,
  sF as U,
  sr as Ee,
  tP as De,
  uM as W,
  wj as Oe,
  yi as ke,
  yv as Ae,
  zP as je,
  zV as Me,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  On as Ne,
  d as Pe,
  f as Fe,
  h as Ie,
  kn as Le,
  l as Re,
  m as ze,
  u as Be,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  An as Ve,
  J as He,
  K as Ue,
  On as We,
  jn as Ge,
} from "./app-initial~app-main~automations-page.js";
import {
  Oo as Ke,
  ko as G,
  nn as qe,
  nt as Je,
  rt as Ye,
  tn as Xe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Bu as Ze,
  Hu as Qe,
  Ur as $e,
  Uu as et,
  Wr as tt,
  Wu as nt,
  hd as rt,
  md as it,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as at,
  K as ot,
  en as st,
  tn as ct,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as lt,
  h as K,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as ut,
  t as q,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as dt, t as ft } from "./segmented-toggle.js";
import {
  a as pt,
  c as mt,
  d as ht,
  f as gt,
  i as _t,
  l as vt,
  m as yt,
  n as bt,
  o as xt,
  p as St,
  r as Ct,
  s as wt,
  t as Tt,
  u as Et,
} from "./local-environments-utils.js";
import { n as Dt, t as Ot } from "./esm.js";
function kt(e, t) {
  let n = st(e) ?? e;
  return t?.label ?? n;
}
var At = e(() => {
  ct();
});
function jt(e) {
  let t = (0, Mt.c)(17),
    { workspaceRoot: n, workspaceGroup: r, mode: i, onBack: a } = e,
    o;
  t[0] !== r || t[1] !== n ? ((o = kt(n, r)), (t[0] = r), (t[1] = n), (t[2] = o)) : (o = t[2]);
  let s = o,
    c;
  t[3] === a
    ? (c = t[4])
    : ((c = a
        ? (0, J.jsxs)(f, {
            color: `ghost`,
            size: `toolbar`,
            onClick: a,
            children: [
              (0, J.jsx)(Ke, { className: `icon-xs` }),
              (0, J.jsx)(U, {
                id: `settings.localEnvironments.breadcrumb.back`,
                defaultMessage: `Back`,
                description: `Button label to go back to local environments list`,
              }),
            ],
          })
        : null),
      (t[3] = a),
      (t[4] = c));
  let l, u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(`span`, {
        children: (0, J.jsx)(U, {
          id: `settings.localEnvironments.breadcrumb.root`,
          defaultMessage: `Environments`,
          description: `Breadcrumb label for the local environments page`,
        }),
      })),
      (u = (0, J.jsx)(N, { className: `icon-xs text-token-text-secondary` })),
      (t[5] = l),
      (t[6] = u))
    : ((l = t[5]), (u = t[6]));
  let d;
  t[7] === s
    ? (d = t[8])
    : ((d = (0, J.jsx)(`span`, { className: `text-token-text-primary`, children: s })),
      (t[7] = s),
      (t[8] = d));
  let p;
  t[9] === i
    ? (p = t[10])
    : ((p =
        i === `edit`
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(N, { className: `icon-xs text-token-text-secondary` }),
                (0, J.jsx)(`span`, {
                  children: (0, J.jsx)(U, {
                    id: `settings.localEnvironments.breadcrumb.edit`,
                    defaultMessage: `edit`,
                    description: `Breadcrumb label for local environment edit mode`,
                  }),
                }),
              ],
            })
          : null),
      (t[9] = i),
      (t[10] = p));
  let m;
  t[11] !== d || t[12] !== p
    ? ((m = (0, J.jsxs)(`div`, { className: `flex items-center gap-1`, children: [l, u, d, p] })),
      (t[11] = d),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== c || t[15] !== m
      ? ((h = (0, J.jsxs)(`nav`, {
          className: `flex items-center gap-2 text-sm text-token-text-secondary`,
          children: [c, m],
        })),
        (t[14] = c),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var Mt,
  J,
  Nt = e(() => {
    ((Mt = H()), V(), E(), G(), d(), At(), (J = l()));
  }),
  Pt,
  Ft = e(() => {
    (V(),
      (Pt = Te({
        actionsDescription: {
          id: `settings.localEnvironments.environment.actions.description`,
          defaultMessage: `These actions can run any command and will be displayed in the header`,
          description: `Description for local environment actions summary`,
        },
        actionsEmpty: {
          id: `settings.localEnvironments.actions.empty`,
          defaultMessage: `Add an action to run commands from the local toolbar`,
          description: `Empty state for local environment actions`,
        },
        selectProject: {
          id: `settings.localEnvironments.workspaceSelect.title`,
          defaultMessage: `Select a project`,
          description: `Title for the workspace selection step`,
        },
      })));
  }),
  It,
  Lt = e(() => {
    (V(),
      (It = Te({
        darwin: {
          id: `settings.localEnvironments.actions.item.platforms.macos`,
          defaultMessage: `macOS`,
          description: `Label for macOS platform toggle`,
        },
        linux: {
          id: `settings.localEnvironments.actions.item.platforms.linux`,
          defaultMessage: `Linux`,
          description: `Label for Linux platform toggle`,
        },
        win32: {
          id: `settings.localEnvironments.actions.item.platforms.windows`,
          defaultMessage: `Windows`,
          description: `Label for Windows platform toggle`,
        },
      })));
  });
function Rt() {
  let e = (0, Bt.c)(4),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Y.jsx)(pe, {
        asChild: !0,
        children: (0, Y.jsx)(f, {
          color: `ghost`,
          size: `toolbar`,
          className: `w-auto`,
          children: (0, Y.jsx)(U, {
            id: `settings.localEnvironments.environment.setup.envVars.button`,
            defaultMessage: `Variables`,
            description: `Button label that opens the setup env vars popover`,
          }),
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Y.jsx)(ye, {
        className: `px-2 py-1 text-sm font-medium text-token-text-primary`,
        children: (0, Y.jsx)(U, {
          id: `settings.localEnvironments.environment.setup.envVars.title`,
          defaultMessage: `Setup script environment variables`,
          description: `Title for the setup env vars popover`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(zt, {
        description: (0, Y.jsx)(U, {
          id: `settings.localEnvironments.environment.setup.envVars.sourcePath.description`,
          defaultMessage: `Source workspace path`,
          description: `Description for the source workspace setup env var`,
        }),
        variableName: le,
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsxs)(z, {
          children: [
            t,
            (0, Y.jsxs)(Ce, {
              align: `end`,
              className: `w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1`,
              children: [
                n,
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    r,
                    (0, Y.jsx)(zt, {
                      variableName: de,
                      description: (0, Y.jsx)(U, {
                        id: `settings.localEnvironments.environment.setup.envVars.worktreePath.description`,
                        defaultMessage: `New worktree path`,
                        description: `Description for the worktree setup env var`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
function zt(e) {
  let t = (0, Bt.c)(7),
    { variableName: n, description: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Y.jsx)(`div`, { className: `text-sm text-token-text-secondary`, children: r })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Y.jsx)(`div`, {
        className: `overflow-x-auto rounded-md border border-token-input-background bg-token-text-code-block-background px-2 py-1.5`,
        children: (0, Y.jsx)(`code`, {
          className: `block text-xs font-medium whitespace-nowrap text-token-text-primary`,
          children: n,
        }),
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Y.jsxs)(`div`, {
          className: `flex flex-col gap-0.5 rounded-lg px-2 py-1`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var Bt,
  Y,
  Vt = e(() => {
    ((Bt = H()), se(), V(), E(), B(), (Y = l()));
  });
function Ht(e) {
  let t = (0, Ut.c)(18),
    { workspaceRoot: n, workspaceGroup: r } = e,
    i;
  t[0] !== r || t[1] !== n ? ((i = kt(n, r)), (t[0] = r), (t[1] = n), (t[2] = i)) : (i = t[2]);
  let a = i,
    o = r?.repositoryData?.rootFolder,
    s = o && o !== a ? `(${o})` : null,
    c = r?.isCodexWorktree ? Ne : ke,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (0, Wt.jsx)(c, { className: `icon-sm text-token-text-secondary` })),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] === a
    ? (u = t[6])
    : ((u = (0, Wt.jsx)(`span`, { className: `truncate`, children: a })), (t[5] = a), (t[6] = u));
  let d;
  t[7] === s
    ? (d = t[8])
    : ((d = s
        ? (0, Wt.jsx)(`span`, {
            className: `truncate text-xs text-token-description-foreground`,
            children: s,
          })
        : null),
      (t[7] = s),
      (t[8] = d));
  let f;
  t[9] !== u || t[10] !== d
    ? ((f = (0, Wt.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [u, d],
      })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === n
    ? (p = t[13])
    : ((p = (0, Wt.jsx)(`span`, { className: `truncate`, children: n })), (t[12] = n), (t[13] = p));
  let m;
  return (
    t[14] !== l || t[15] !== f || t[16] !== p
      ? ((m = (0, Wt.jsx)($e, { icon: l, label: f, description: p, control: null })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var Ut,
  Wt,
  Gt = e(() => {
    ((Ut = H()), R(), Le(), tt(), At(), (Wt = l()));
  });
function Kt(e) {
  let t = (0, on.c)(67),
    {
      hostId: n,
      workspaceRoot: r,
      workspaceGroup: i,
      configPath: a,
      configExists: o,
      initialEnvironment: s,
      parseErrorMessage: c,
      readErrorMessage: l,
      onSaved: d,
    } = e,
    p = h(A),
    m = ve(),
    g = Me(),
    { data: y } = me(),
    { data: b, error: x, refetch: ee } = k(n),
    S = b?.codexHome,
    C;
  t[0] !== S || t[1] !== i?.isCodexWorktree || t[2] !== r
    ? ((C = i?.isCodexWorktree === !0 || (S != null && xe(r, S))),
      (t[0] = S),
      (t[1] = i?.isCodexWorktree),
      (t[2] = r),
      (t[3] = C))
    : (C = t[3]);
  let w = C,
    T = v(n),
    { data: E } = F(r, T, `local_environment_editor`),
    D;
  t[4] !== n || t[5] !== r
    ? ((D = { hostId: n, workspaceRoot: r }), (t[4] = n), (t[5] = r), (t[6] = D))
    : (D = t[6]);
  let { updateSelection: O } = Pe(D),
    j;
  t[7] !== E || t[8] !== T || t[9] !== p
    ? ((j = {
        onSuccess: (e, t) => {
          !e.success || !E || Be(p, E, T, t.value, `local_environment_editor`);
        },
      }),
      (t[7] = E),
      (t[8] = T),
      (t[9] = p),
      (t[10] = j))
    : (j = t[10]);
  let M = u(`set-config-value`, T, j),
    [N, te] = (0, sn.useState)(`default`),
    [P, ne] = (0, sn.useState)(`default`),
    [I, re] = (0, sn.useState)(!o),
    ae,
    L;
  if (
    t[11] !== s?.actions ||
    t[12] !== s?.cleanup ||
    t[13] !== s?.name ||
    t[14] !== s?.setup ||
    t[15] !== s?.version ||
    t[16] !== m ||
    t[17] !== r
  ) {
    let e =
        st(r) ??
        m.formatMessage({
          id: `settings.localEnvironments.environment.defaultName`,
          defaultMessage: `local`,
          description: `Fallback name for the local environment`,
        }),
      n = s?.actions ?? [],
      i = s?.name ?? e,
      a = s?.setup?.script ?? ``,
      o = s?.cleanup?.script ?? ``,
      c = mt(s?.setup),
      l = mt(s?.cleanup),
      u = wt(n);
    ((L = s?.version ?? 1),
      (ae = Yt({
        name: i,
        setupScript: a,
        setupPlatformScripts: c,
        cleanupScript: o,
        cleanupPlatformScripts: l,
        actions: u,
      })),
      (t[11] = s?.actions),
      (t[12] = s?.cleanup),
      (t[13] = s?.name),
      (t[14] = s?.setup),
      (t[15] = s?.version),
      (t[16] = m),
      (t[17] = r),
      (t[18] = ae),
      (t[19] = L));
  } else ((ae = t[18]), (L = t[19]));
  let oe = ae,
    se;
  t[20] !== w ||
  t[21] !== E?.root ||
  t[22] !== n ||
  t[23] !== m ||
  t[24] !== I ||
  t[25] !== d ||
  t[26] !== g ||
  t[27] !== p ||
  t[28] !== M ||
  t[29] !== O ||
  t[30] !== r
    ? ((se = {
        onSuccess: async (e) => {
          let { configPath: t } = e;
          (g.invalidateQueries({
            queryKey: ie(`local-environment-config`, { configPath: t, hostId: n }),
          }),
            g.invalidateQueries({
              queryKey: ie(`local-environment`, { configPath: t, hostId: n }),
            }));
          let i = () =>
            g.invalidateQueries({
              queryKey: ie(`local-environments`, { hostId: n, workspaceRoot: r }),
            });
          if (I) {
            if (
              !(await Et({
                codexWorktree: w,
                configPath: t,
                gitRoot: E?.root ?? null,
                refreshEnvironments: i,
                selectForWorkspace: O,
                selectForWorktree: async (e, t) =>
                  (
                    await M.mutateAsync({
                      root: e,
                      key: `codex.localEnvironmentConfigPath`,
                      operationSource: `local_environment_editor`,
                      value: t,
                      scope: `worktree`,
                    }).catch(Jt)
                  )?.success === !0,
              }))
            ) {
              p.get(W).danger(
                m.formatMessage({
                  id: `settings.localEnvironments.save.selectionError`,
                  defaultMessage: `Saved the environment file, but could not select it`,
                  description: `Error toast shown when a new local environment cannot be selected after saving`,
                }),
              );
              return;
            }
            re(!1);
          } else i();
          (p
            .get(W)
            .success(
              m.formatMessage({
                id: `settings.localEnvironments.save.success`,
                defaultMessage: `Saved local environment`,
                description: `Toast shown when local environment is saved`,
              }),
            ),
            d());
        },
      }),
      (t[20] = w),
      (t[21] = E?.root),
      (t[22] = n),
      (t[23] = m),
      (t[24] = I),
      (t[25] = d),
      (t[26] = g),
      (t[27] = p),
      (t[28] = M),
      (t[29] = O),
      (t[30] = r),
      (t[31] = se))
    : (se = t[31]);
  let R = De(`local-environment-config-save`, se),
    ce;
  t[32] !== a || t[33] !== n || t[34] !== R || t[35] !== L
    ? ((ce = (e) => {
        let { value: t } = e,
          r = Xt(t, L);
        t.name.length !== 0 && R.mutate({ configPath: a, hostId: n, raw: r });
      }),
      (t[32] = a),
      (t[33] = n),
      (t[34] = R),
      (t[35] = L),
      (t[36] = ce))
    : (ce = t[36]);
  let le;
  t[37] !== oe || t[38] !== ce
    ? ((le = { defaultValues: oe, onSubmit: ce }), (t[37] = oe), (t[38] = ce), (t[39] = le))
    : (le = t[39]);
  let z = Dt(le),
    ue;
  t[40] === z
    ? (ue = t[41])
    : ((ue = (e) => {
        (e.preventDefault(), z.handleSubmit());
      }),
      (t[40] = z),
      (t[41] = ue));
  let de;
  t[42] !== S ||
  t[43] !== x ||
  t[44] !== w ||
  t[45] !== z ||
  t[46] !== E?.root ||
  t[47] !== m ||
  t[48] !== I ||
  t[49] !== y?.platform ||
  t[50] !== c ||
  t[51] !== l ||
  t[52] !== ee ||
  t[53] !== R.error ||
  t[54] !== R.isPending ||
  t[55] !== P ||
  t[56] !== N ||
  t[57] !== L ||
  t[58] !== i ||
  t[59] !== r
    ? ((de = (e) => {
        let { values: t, isDirty: n } = e;
        Xt(t, L);
        let a = ht.map((e) => ({
            label: m.formatMessage(e.message),
            value: e.value,
            icon: (0, X.jsx)(St, { icon: e.value }),
          })),
          o = tn(y?.platform),
          s = nn(m),
          u = Zt({
            values: t,
            isDirty: n,
            isSelectionReady: !I || ((i != null || S != null) && (!w || E?.root != null)),
            selectionError: i == null && x != null,
            isSaving: R.isPending,
          }),
          d = Qt(u),
          p = u != null,
          h = (e, n, r) => {
            if (n === `default`) {
              z.setFieldValue(e === `setup` ? `setupScript` : `cleanupScript`, r);
              return;
            }
            let { scriptField: i, scripts: a } = $t(t, e);
            z.setFieldValue(i, { ...a, [n]: r });
          },
          g = () => {
            z.setFieldValue(`actions`, [...t.actions, xt(``)]);
          },
          v = (e) => {
            z.setFieldValue(
              `actions`,
              t.actions.filter((t) => t.id !== e),
            );
          },
          b = (e, n) => {
            z.setFieldValue(
              `actions`,
              t.actions.map((t) => (t.id === e ? { ...t, ...n } : t)),
            );
          },
          C = () => {
            p || z.handleSubmit();
          };
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsxs)(q, {
              children: [
                (0, X.jsx)(q.Header, {
                  title: (0, X.jsx)(U, {
                    id: `settings.localEnvironments.editor.title`,
                    defaultMessage: `Local environment`,
                    description: `Title for local environment editor`,
                  }),
                }),
                (0, X.jsxs)(q.Content, {
                  className: `gap-[var(--padding-panel)]`,
                  children: [
                    (0, X.jsx)(K, {
                      children: (0, X.jsx)(Ht, { workspaceRoot: r, workspaceGroup: i }),
                    }),
                    c
                      ? (0, X.jsx)(`div`, {
                          className: `mt-2 text-sm text-token-error-foreground`,
                          children: (0, X.jsx)(U, {
                            id: `settings.localEnvironments.file.parseError`,
                            defaultMessage: `Unable to parse the existing file. Saving will overwrite it. ({error})`,
                            description: `Parse error message for local environment file`,
                            values: { error: c },
                          }),
                        })
                      : null,
                    l
                      ? (0, X.jsx)(`div`, {
                          className: `mt-2 text-sm text-token-error-foreground`,
                          children: (0, X.jsx)(U, {
                            id: `settings.localEnvironments.file.readError`,
                            defaultMessage: `Failed to load local environment data. ({error})`,
                            description: `Read error message for local environment config`,
                            values: { error: l },
                          }),
                        })
                      : null,
                    i == null && x != null
                      ? (0, X.jsx)(K, {
                          children: (0, X.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-3 p-3`,
                            children: [
                              (0, X.jsx)(`div`, {
                                className: `text-sm text-token-error-foreground`,
                                children: (0, X.jsx)(U, {
                                  id: `settings.localEnvironments.projectInfo.error`,
                                  defaultMessage: `Could not load project information`,
                                  description: `Error shown when project information required to save an environment cannot be loaded`,
                                }),
                              }),
                              (0, X.jsx)(f, {
                                color: `secondary`,
                                size: `toolbar`,
                                type: `button`,
                                onClick: () => {
                                  ee();
                                },
                                children: (0, X.jsx)(U, {
                                  id: `settings.localEnvironments.projectInfo.retry`,
                                  defaultMessage: `Retry`,
                                  description: `Button label to retry loading project information`,
                                }),
                              }),
                            ],
                          }),
                        })
                      : null,
                    (0, X.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, X.jsx)(`label`, {
                          htmlFor: `local-environment-name`,
                          className: `text-sm font-medium text-token-text-primary`,
                          children: (0, X.jsx)(U, {
                            id: `settings.localEnvironments.environment.name`,
                            defaultMessage: `Name`,
                            description: `Label for environment name input`,
                          }),
                        }),
                        (0, X.jsx)(`input`, {
                          id: `local-environment-name`,
                          className: `focus-visible:ring-token-focus w-72 rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                          value: t.name,
                          onChange: (e) => {
                            z.setFieldValue(`name`, e.target.value);
                          },
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex flex-col gap-3`,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, X.jsx)(`div`, {
                              className: `text-sm font-medium text-token-text-primary`,
                              children: (0, X.jsx)(U, {
                                id: `settings.localEnvironments.environment.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for environment setup script input`,
                              }),
                            }),
                            (0, X.jsx)(`div`, {
                              className: `text-sm text-token-text-secondary`,
                              children: (0, X.jsx)(U, {
                                id: `settings.localEnvironments.editor.setup.description`,
                                defaultMessage: `Runs at the project root on worktree creation`,
                                description: `Description for environment setup script summary`,
                              }),
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`div`, {
                          className: `flex flex-col gap-2`,
                          children: [
                            (0, X.jsxs)(`div`, {
                              className: `flex flex-wrap items-center justify-between gap-2`,
                              children: [
                                (0, X.jsx)(ft, {
                                  selectedId: N,
                                  onSelect: te,
                                  size: `default`,
                                  ariaLabel: m.formatMessage({
                                    id: `settings.localEnvironments.environment.setup.platformSelector`,
                                    defaultMessage: `Setup script platform`,
                                    description: `Aria label for setup script platform selector`,
                                  }),
                                  options: rn(m),
                                }),
                                (0, X.jsx)(Rt, {}),
                              ],
                            }),
                            (0, X.jsx)(`textarea`, {
                              id: `local-environment-setup-script-${N}`,
                              className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                              value: en(t, `setup`, N),
                              placeholder: _t,
                              rows: 6,
                              onChange: (e) => {
                                h(`setup`, N, e.target.value);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(q, {
              children: (0, X.jsxs)(q.Content, {
                className: `gap-3`,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `text-sm font-medium text-token-text-primary`,
                        children: (0, X.jsx)(U, {
                          id: `settings.localEnvironments.environment.cleanup.title`,
                          defaultMessage: `Cleanup script`,
                          description: `Title for the cleanup script section`,
                        }),
                      }),
                      (0, X.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, X.jsx)(U, {
                          id: `settings.localEnvironments.environment.cleanup.description`,
                          defaultMessage: `Runs at the project root before worktree cleanup`,
                          description: `Description for the cleanup script input`,
                        }),
                      }),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: (0, X.jsx)(ft, {
                          selectedId: P,
                          onSelect: ne,
                          size: `default`,
                          ariaLabel: m.formatMessage({
                            id: `settings.localEnvironments.environment.cleanup.platformSelector`,
                            defaultMessage: `Cleanup script platform`,
                            description: `Aria label for cleanup script platform selector`,
                          }),
                          options: rn(m),
                        }),
                      }),
                      (0, X.jsx)(`textarea`, {
                        id: `local-environment-cleanup-script-${P}`,
                        className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                        value: en(t, `cleanup`, P),
                        placeholder: bt,
                        rows: 6,
                        onChange: (e) => {
                          h(`cleanup`, P, e.target.value);
                        },
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, X.jsxs)(q, {
              children: [
                (0, X.jsx)(q.Header, {
                  title: (0, X.jsx)(U, {
                    id: `settings.localEnvironments.actions.title`,
                    defaultMessage: `Actions`,
                    description: `Title for local environment actions section`,
                  }),
                  actions: (0, X.jsx)(f, {
                    color: `secondary`,
                    size: `toolbar`,
                    onClick: g,
                    children: (0, X.jsx)(U, {
                      id: `settings.localEnvironments.actions.add`,
                      defaultMessage: `Add action`,
                      description: `Button label to add a local environment action`,
                    }),
                  }),
                }),
                (0, X.jsxs)(q.Content, {
                  className: `gap-1`,
                  children: [
                    (0, X.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, X.jsx)(U, { ...Pt.actionsDescription }),
                    }),
                    t.actions.length === 0
                      ? (0, X.jsx)(K, {
                          children: (0, X.jsx)(`div`, {
                            className: `p-3 text-sm text-token-text-secondary`,
                            children: (0, X.jsx)(U, { ...Pt.actionsEmpty }),
                          }),
                        })
                      : (0, X.jsx)(`div`, {
                          className: `flex flex-col gap-3`,
                          children: t.actions.map((e) => {
                            let t = a.find((t) => t.value === (e.icon ?? `tool`)) ?? a[0],
                              n = e.platform != null,
                              r = e.platform ?? o;
                            return (0, X.jsxs)(
                              `div`,
                              {
                                className: `flex flex-col gap-3 rounded-lg border border-token-border bg-token-input-background p-3`,
                                children: [
                                  (0, X.jsxs)(`div`, {
                                    className: `flex flex-col gap-2`,
                                    children: [
                                      (0, X.jsx)(`label`, {
                                        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                        htmlFor: `local-env-action-name-${e.id}`,
                                        children: (0, X.jsx)(U, {
                                          id: `settings.localEnvironments.actions.item.name`,
                                          defaultMessage: `Name`,
                                          description: `Label for local environment action name`,
                                        }),
                                      }),
                                      (0, X.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, X.jsx)(_, {
                                            align: `start`,
                                            contentWidth: `icon`,
                                            triggerButton: (0, X.jsx)(f, {
                                              id: `local-env-action-icon-${e.id}`,
                                              className: `w-12 justify-center text-sm`,
                                              color: `secondary`,
                                              size: `toolbar`,
                                              "aria-label": t.label,
                                              children: t.icon,
                                            }),
                                            children: a.map((t) =>
                                              (0, X.jsx)(
                                                we.Item,
                                                {
                                                  onSelect: () => {
                                                    b(e.id, { icon: t.value });
                                                  },
                                                  children: (0, X.jsxs)(`span`, {
                                                    className: `flex items-center gap-2`,
                                                    children: [
                                                      t.icon,
                                                      (0, X.jsx)(`span`, { children: t.label }),
                                                    ],
                                                  }),
                                                },
                                                t.value,
                                              ),
                                            ),
                                          }),
                                          (0, X.jsx)(`div`, {
                                            className: `flex-1`,
                                            children: (0, X.jsx)(`input`, {
                                              id: `local-env-action-name-${e.id}`,
                                              className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                                              value: e.name,
                                              onChange: (t) => {
                                                b(e.id, { name: t.target.value });
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, X.jsxs)(`div`, {
                                    className: `flex flex-col gap-2`,
                                    children: [
                                      (0, X.jsx)(`label`, {
                                        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                        htmlFor: `local-env-action-command-${e.id}`,
                                        children: (0, X.jsx)(U, {
                                          id: `settings.localEnvironments.actions.item.command`,
                                          defaultMessage: `Action script`,
                                          description: `Label for local environment action script`,
                                        }),
                                      }),
                                      (0, X.jsx)(`textarea`, {
                                        id: `local-env-action-command-${e.id}`,
                                        className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                                        value: e.command,
                                        placeholder: Tt,
                                        rows: 4,
                                        onChange: (t) => {
                                          b(e.id, { command: t.target.value });
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, X.jsxs)(`div`, {
                                    className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
                                    children: [
                                      (0, X.jsxs)(`div`, {
                                        className: `flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6`,
                                        children: [
                                          (0, X.jsx)(`div`, {
                                            className: `min-w-0`,
                                            children: (0, X.jsxs)(`div`, {
                                              className: `flex flex-col gap-2`,
                                              children: [
                                                (0, X.jsx)(`div`, {
                                                  className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                                  children: (0, X.jsx)(U, {
                                                    id: `settings.localEnvironments.actions.item.platforms`,
                                                    defaultMessage: `Platforms`,
                                                    description: `Label for local environment action platforms`,
                                                  }),
                                                }),
                                                (0, X.jsx)(`div`, {
                                                  className: `text-xs text-token-text-secondary`,
                                                  children: (0, X.jsx)(U, {
                                                    id: `settings.localEnvironments.actions.item.platforms.help`,
                                                    defaultMessage: `Only run on a specific OS.`,
                                                    description: `Help text for action platforms selection`,
                                                  }),
                                                }),
                                                (0, X.jsxs)(`div`, {
                                                  className: `relative flex items-center gap-2 text-sm`,
                                                  children: [
                                                    (0, X.jsx)(Xe, {
                                                      id: `local-env-action-platform-specific-${e.id}`,
                                                      checked: n,
                                                      onCheckedChange: (t) => {
                                                        if (t) {
                                                          b(e.id, { platform: r });
                                                          return;
                                                        }
                                                        b(e.id, { platform: null });
                                                      },
                                                    }),
                                                    (0, X.jsx)(`label`, {
                                                      className: `text-token-text-secondary`,
                                                      htmlFor: `local-env-action-platform-specific-${e.id}`,
                                                      children: (0, X.jsx)(U, {
                                                        id: `settings.localEnvironments.actions.item.platforms.specific`,
                                                        defaultMessage: `Platform specific`,
                                                        description: `Label for enabling platform-specific action selection`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          n
                                            ? (0, X.jsx)(`div`, {
                                                className: `flex justify-start`,
                                                children: (0, X.jsx)(ft, {
                                                  selectedId: r,
                                                  onSelect: (t) => {
                                                    b(e.id, { platform: t });
                                                  },
                                                  ariaLabel: m.formatMessage({
                                                    id: `settings.localEnvironments.actions.item.platforms.selector`,
                                                    defaultMessage: `Platform selection`,
                                                    description: `Aria label for platform selection toggle`,
                                                  }),
                                                  options: s,
                                                }),
                                              })
                                            : null,
                                        ],
                                      }),
                                      (0, X.jsx)(`div`, {
                                        className: `flex justify-end sm:justify-center`,
                                        children: (0, X.jsx)(Se, {
                                          tooltipContent: (0, X.jsx)(U, {
                                            id: `settings.localEnvironments.actions.item.tooltip.delete`,
                                            defaultMessage: `Delete`,
                                            description: `Tooltip for removing a local environment action`,
                                          }),
                                          children: (0, X.jsx)(f, {
                                            "aria-label": m.formatMessage({
                                              id: `settings.localEnvironments.actions.item.button.delete`,
                                              defaultMessage: `Delete`,
                                              description: `Label for removing a local environment action`,
                                            }),
                                            color: `ghost`,
                                            size: `toolbar`,
                                            onClick: () => {
                                              v(e.id);
                                            },
                                            children: (0, X.jsx)(it, { className: `icon-sm` }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                  ],
                }),
              ],
            }),
            null,
            R.error
              ? (0, X.jsx)(`div`, {
                  className: `text-sm text-token-error-foreground`,
                  children: (0, X.jsx)(U, {
                    id: `settings.localEnvironments.preview.saveError`,
                    defaultMessage: `Failed to save the file. ({error})`,
                    description: `Error message when saving local environment file fails`,
                    values: { error: R.error.message },
                  }),
                })
              : null,
            (0, X.jsx)(`div`, {
              className: `flex justify-end`,
              children: (0, X.jsx)(Se, {
                disabled: d == null,
                tooltipContent: d,
                children: (0, X.jsx)(`span`, {
                  className: `inline-flex`,
                  children: (0, X.jsx)(f, {
                    color: `primary`,
                    size: `toolbar`,
                    disabled: p,
                    onClick: C,
                    children: (0, X.jsx)(U, {
                      id: `settings.localEnvironments.preview.save`,
                      defaultMessage: `Save`,
                      description: `Save button label for local environment file`,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }),
      (t[42] = S),
      (t[43] = x),
      (t[44] = w),
      (t[45] = z),
      (t[46] = E?.root),
      (t[47] = m),
      (t[48] = I),
      (t[49] = y?.platform),
      (t[50] = c),
      (t[51] = l),
      (t[52] = ee),
      (t[53] = R.error),
      (t[54] = R.isPending),
      (t[55] = P),
      (t[56] = N),
      (t[57] = L),
      (t[58] = i),
      (t[59] = r),
      (t[60] = de))
    : (de = t[60]);
  let B;
  t[61] !== z.Subscribe || t[62] !== de
    ? ((B = (0, X.jsx)(z.Subscribe, { selector: qt, children: de })),
      (t[61] = z.Subscribe),
      (t[62] = de),
      (t[63] = B))
    : (B = t[63]);
  let fe;
  return (
    t[64] !== B || t[65] !== ue
      ? ((fe = (0, X.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: ue,
          children: B,
        })),
        (t[64] = B),
        (t[65] = ue),
        (t[66] = fe))
      : (fe = t[66]),
    fe
  );
}
function qt(e) {
  return { values: e.values, isDirty: e.isDirty };
}
function Jt() {
  return null;
}
function Yt({
  name: e,
  setupScript: t,
  setupPlatformScripts: n,
  cleanupScript: r,
  cleanupPlatformScripts: i,
  actions: a,
}) {
  return {
    name: e,
    setupScript: t,
    setupPlatformScripts: n,
    cleanupScript: r,
    cleanupPlatformScripts: i,
    actions: a,
  };
}
function Xt(e, t) {
  return pt({
    version: t,
    name: e.name,
    setupScript: e.setupScript,
    setupPlatformScripts: an(e.setupPlatformScripts),
    cleanupScript: e.cleanupScript,
    cleanupPlatformScripts: an(e.cleanupPlatformScripts),
    actions: e.actions,
  });
}
function Zt({ values: e, isDirty: t, isSelectionReady: n, selectionError: r, isSaving: i }) {
  return i
    ? `saving`
    : n
      ? e.name.length === 0
        ? `missing-name`
        : t
          ? null
          : `no-changes`
      : r
        ? `project-error`
        : `loading-project`;
}
function Qt(e) {
  if (e == null) return null;
  switch (e) {
    case `loading-project`:
      return (0, X.jsx)(U, {
        id: `settings.localEnvironments.save.disabled.loadingProject`,
        defaultMessage: `Loading project information`,
        description: `Tooltip shown when save is disabled while project information loads`,
      });
    case `missing-name`:
      return (0, X.jsx)(U, {
        id: `settings.localEnvironments.save.disabled.name`,
        defaultMessage: `Add an environment name to save`,
        description: `Tooltip shown when save is disabled because the name is missing`,
      });
    case `no-changes`:
      return (0, X.jsx)(U, {
        id: `settings.localEnvironments.save.disabled.noChanges`,
        defaultMessage: `No changes to save`,
        description: `Tooltip shown when save is disabled because there are no changes`,
      });
    case `project-error`:
      return (0, X.jsx)(U, {
        id: `settings.localEnvironments.save.disabled.projectError`,
        defaultMessage: `Retry loading project information to save`,
        description: `Tooltip shown when save is disabled because project information failed to load`,
      });
    case `saving`:
      return (0, X.jsx)(U, {
        id: `settings.localEnvironments.save.disabled.saving`,
        defaultMessage: `Saving…`,
        description: `Tooltip shown when save is disabled because a save is already in progress`,
      });
  }
}
function $t(e, t) {
  return t === `cleanup`
    ? { scriptField: `cleanupPlatformScripts`, scripts: e.cleanupPlatformScripts }
    : { scriptField: `setupPlatformScripts`, scripts: e.setupPlatformScripts };
}
function en(e, t, n) {
  if (n === `default`) return t === `setup` ? e.setupScript : e.cleanupScript;
  let { scripts: r } = $t(e, t);
  return r[n] ?? ``;
}
function tn(e) {
  return e === `darwin` || e === `linux` || e === `win32` ? e : `darwin`;
}
function nn(e) {
  return [
    { id: `darwin`, label: e.formatMessage(It.darwin) },
    { id: `linux`, label: e.formatMessage(It.linux) },
    { id: `win32`, label: e.formatMessage(It.win32) },
  ];
}
function rn(e) {
  return [
    {
      id: `default`,
      label: e.formatMessage({
        id: `settings.localEnvironments.environment.script.default`,
        defaultMessage: `Default`,
        description: `Label for default local environment lifecycle script`,
      }),
    },
    ...nn(e),
  ];
}
function an(e) {
  let t = {};
  for (let n of Ct) {
    let r = e[n];
    r && r.length > 0 && (t[n] = r);
  }
  return t;
}
var on,
  sn,
  X,
  cn = e(() => {
    ((on = H()),
      Ot(),
      o(),
      i(),
      se(),
      (sn = t(x(), 1)),
      V(),
      E(),
      qe(),
      Ye(),
      oe(),
      dt(),
      ce(),
      fe(),
      T(),
      y(),
      w(),
      s(),
      rt(),
      Re(),
      r(),
      Ft(),
      Lt(),
      ut(),
      lt(),
      I(),
      ct(),
      n(),
      yt(),
      gt(),
      Vt(),
      Gt(),
      vt(),
      (X = l()));
  });
function ln(e) {
  let t = (0, pn.c)(43),
    {
      workspaceRoot: n,
      workspaceGroup: r,
      configExists: i,
      initialEnvironment: a,
      parseErrorMessage: o,
      readErrorMessage: s,
      onEdit: c,
    } = e,
    l = i && a != null,
    u;
  t[0] === a?.actions ? (u = t[1]) : ((u = a?.actions ?? []), (t[0] = a?.actions), (t[1] = u));
  let d = u,
    p = a?.setup.script ?? ``,
    m = a?.cleanup?.script ?? ``,
    h = a?.setup.darwin?.script ?? ``,
    g = a?.setup.linux?.script ?? ``,
    _ = a?.setup.win32?.script ?? ``,
    v = a?.cleanup?.darwin?.script ?? ``,
    y = a?.cleanup?.linux?.script ?? ``,
    b = a?.cleanup?.win32?.script ?? ``,
    x = h.length > 0 || g.length > 0 || _.length > 0,
    ee = v.length > 0 || y.length > 0 || b.length > 0,
    S;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(q.Header, {
        title: (0, Z.jsx)(U, {
          id: `settings.localEnvironments.workspace.title`,
          defaultMessage: `Project`,
          description: `Title for the workspace summary section`,
        }),
      })),
      (t[2] = S))
    : (S = t[2]);
  let C;
  t[3] !== r || t[4] !== n
    ? ((C = (0, Z.jsxs)(q, {
        children: [
          S,
          (0, Z.jsx)(q.Content, {
            children: (0, Z.jsx)(K, {
              children: (0, Z.jsx)(Ht, { workspaceRoot: n, workspaceGroup: r }),
            }),
          }),
        ],
      })),
      (t[3] = r),
      (t[4] = n),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(U, {
        id: `settings.localEnvironments.environment.title`,
        defaultMessage: `Environment details`,
        description: `Title for local environment details section`,
      })),
      (t[6] = w))
    : (w = t[6]);
  let T;
  t[7] === l
    ? (T = t[8])
    : ((T = l
        ? (0, Z.jsx)(U, {
            id: `settings.localEnvironments.environment.edit`,
            defaultMessage: `Edit local environment`,
            description: `Button label to edit a local environment`,
          })
        : (0, Z.jsx)(U, {
            id: `settings.localEnvironments.environment.create`,
            defaultMessage: `Create local environment`,
            description: `Button label to create a local environment`,
          })),
      (t[7] = l),
      (t[8] = T));
  let E;
  t[9] !== c || t[10] !== T
    ? ((E = (0, Z.jsx)(q.Header, {
        title: w,
        actions: (0, Z.jsx)(f, { color: `primary`, size: `toolbar`, onClick: c, children: T }),
      })),
      (t[9] = c),
      (t[10] = T),
      (t[11] = E))
    : (E = t[11]);
  let D;
  t[12] !== l || t[13] !== a
    ? ((D =
        l && a
          ? (0, Z.jsx)(K, {
              children: (0, Z.jsx)($e, {
                label: (0, Z.jsx)(U, {
                  id: `settings.localEnvironments.environment.name`,
                  defaultMessage: `Name`,
                  description: `Label for environment name input`,
                }),
                control: (0, Z.jsx)(`span`, {
                  className: `text-sm text-token-text-secondary`,
                  children: a.name,
                }),
              }),
            })
          : (0, Z.jsx)(K, {
              children: (0, Z.jsx)($e, {
                label: (0, Z.jsx)(U, {
                  id: `settings.localEnvironments.environment.empty`,
                  defaultMessage: `No local environment is configured for this project yet`,
                  description: `Empty state when no local environment is configured`,
                }),
                control: null,
              }),
            })),
      (t[12] = l),
      (t[13] = a),
      (t[14] = D))
    : (D = t[14]);
  let O;
  t[15] === o
    ? (O = t[16])
    : ((O = o
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 text-sm text-token-error-foreground`,
            children: (0, Z.jsx)(U, {
              id: `settings.localEnvironments.file.parseError`,
              defaultMessage: `Unable to parse the existing file. Saving will overwrite it. ({error})`,
              description: `Parse error message for local environment file`,
              values: { error: o },
            }),
          })
        : null),
      (t[15] = o),
      (t[16] = O));
  let k;
  t[17] === s
    ? (k = t[18])
    : ((k = s
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 text-sm text-token-error-foreground`,
            children: (0, Z.jsx)(U, {
              id: `settings.localEnvironments.file.readError`,
              defaultMessage: `Failed to load local environment data. ({error})`,
              description: `Read error message for local environment config`,
              values: { error: s },
            }),
          })
        : null),
      (t[17] = s),
      (t[18] = k));
  let A;
  t[19] !== D || t[20] !== O || t[21] !== k
    ? ((A = (0, Z.jsxs)(q.Content, { children: [D, O, k] })),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] !== A || t[24] !== E
    ? ((j = (0, Z.jsxs)(q, { children: [E, A] })), (t[23] = A), (t[24] = E), (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] !== d ||
  t[27] !== v ||
  t[28] !== y ||
  t[29] !== m ||
  t[30] !== b ||
  t[31] !== ee ||
  t[32] !== l ||
  t[33] !== x ||
  t[34] !== h ||
  t[35] !== g ||
  t[36] !== p ||
  t[37] !== _
    ? ((M = l
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(q, {
                children: [
                  (0, Z.jsx)(q.Header, {
                    title: (0, Z.jsx)(U, {
                      id: `settings.localEnvironments.environment.setup`,
                      defaultMessage: `Setup script`,
                      description: `Label for environment setup script input`,
                    }),
                    subtitle: (0, Z.jsx)(U, {
                      id: `settings.localEnvironments.environment.setup.description`,
                      defaultMessage: `This script runs on worktree creation`,
                      description: `Description for environment setup script summary`,
                    }),
                    actions: (0, Z.jsx)(Rt, {}),
                  }),
                  (0, Z.jsxs)(q.Content, {
                    children: [
                      (0, Z.jsx)(Je, {
                        language: `bash`,
                        content: p,
                        shouldWrapCode: !0,
                        codeContainerClassName: `max-h-40`,
                      }),
                      x
                        ? (0, Z.jsx)(dn, {
                            darwinScript: h,
                            linuxScript: g,
                            windowsScript: _,
                            title: (0, Z.jsx)(U, {
                              id: `settings.localEnvironments.environment.setup.platformOverrides`,
                              defaultMessage: `Platform overrides`,
                              description: `Label for setup script platform overrides`,
                            }),
                            description: (0, Z.jsx)(U, {
                              id: `settings.localEnvironments.environment.setup.platformOverrides.description`,
                              defaultMessage: `Overrides the default script for specific OSes`,
                              description: `Description for setup script platform overrides`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(q, {
                children: [
                  (0, Z.jsx)(q.Header, {
                    title: (0, Z.jsx)(U, {
                      id: `settings.localEnvironments.environment.cleanup.summaryTitle`,
                      defaultMessage: `Cleanup script`,
                      description: `Label for environment cleanup script input`,
                    }),
                    subtitle: (0, Z.jsx)(U, {
                      id: `settings.localEnvironments.environment.cleanup.summaryDescription`,
                      defaultMessage: `This script runs before a worktree is deleted`,
                      description: `Description for environment cleanup script summary`,
                    }),
                  }),
                  (0, Z.jsxs)(q.Content, {
                    children: [
                      m.length > 0
                        ? (0, Z.jsx)(Je, {
                            language: `bash`,
                            content: m,
                            shouldWrapCode: !0,
                            codeContainerClassName: `max-h-40`,
                          })
                        : (0, Z.jsx)(K, {
                            children: (0, Z.jsx)($e, {
                              label: (0, Z.jsx)(U, {
                                id: `settings.localEnvironments.environment.cleanup.empty`,
                                defaultMessage: `No cleanup script configured`,
                                description: `Empty state for the cleanup script summary`,
                              }),
                              control: null,
                            }),
                          }),
                      ee
                        ? (0, Z.jsx)(dn, {
                            darwinScript: v,
                            linuxScript: y,
                            windowsScript: b,
                            title: (0, Z.jsx)(U, {
                              id: `settings.localEnvironments.environment.cleanup.platformOverrides`,
                              defaultMessage: `Platform overrides`,
                              description: `Label for cleanup script platform overrides`,
                            }),
                            description: (0, Z.jsx)(U, {
                              id: `settings.localEnvironments.environment.cleanup.platformOverrides.description`,
                              defaultMessage: `Overrides the default cleanup script for specific OSes`,
                              description: `Description for cleanup script platform overrides`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(q, {
                children: [
                  (0, Z.jsx)(q.Header, {
                    title: (0, Z.jsx)(U, {
                      id: `settings.localEnvironments.environment.actionsLabel`,
                      defaultMessage: `Actions`,
                      description: `Label for actions count in local environment summary`,
                    }),
                    subtitle: (0, Z.jsx)(U, { ...Pt.actionsDescription }),
                  }),
                  (0, Z.jsx)(q.Content, {
                    children: (0, Z.jsx)(K, {
                      children:
                        d.length > 0
                          ? d.map(un)
                          : (0, Z.jsx)($e, {
                              label: (0, Z.jsx)(U, { ...Pt.actionsEmpty }),
                              control: null,
                            }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[26] = d),
      (t[27] = v),
      (t[28] = y),
      (t[29] = m),
      (t[30] = b),
      (t[31] = ee),
      (t[32] = l),
      (t[33] = x),
      (t[34] = h),
      (t[35] = g),
      (t[36] = p),
      (t[37] = _),
      (t[38] = M))
    : (M = t[38]);
  let N;
  return (
    t[39] !== j || t[40] !== M || t[41] !== C
      ? ((N = (0, Z.jsxs)(Z.Fragment, { children: [C, j, M] })),
        (t[39] = j),
        (t[40] = M),
        (t[41] = C),
        (t[42] = N))
      : (N = t[42]),
    N
  );
}
function un(e, t) {
  return (0, Z.jsx)(
    $e,
    {
      icon: (0, Z.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, Z.jsx)(St, { icon: e.icon ?? `tool` }),
      }),
      label: e.name,
      control: null,
    },
    `${e.name}-${t}`,
  );
}
function dn(e) {
  let t = (0, pn.c)(18),
    { darwinScript: n, linuxScript: r, windowsScript: i, title: a, description: o } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (0, Z.jsx)(`div`, {
        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
        children: a,
      })),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = (0, Z.jsx)(`div`, { className: `text-sm text-token-text-secondary`, children: o })),
      (t[2] = o),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [s, c] })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n
    ? (u = t[8])
    : ((u = n.length > 0 ? (0, Z.jsx)(fn, { platform: `darwin`, script: n }) : null),
      (t[7] = n),
      (t[8] = u));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = r.length > 0 ? (0, Z.jsx)(fn, { platform: `linux`, script: r }) : null),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === i
    ? (f = t[12])
    : ((f = i.length > 0 ? (0, Z.jsx)(fn, { platform: `win32`, script: i }) : null),
      (t[11] = i),
      (t[12] = f));
  let p;
  return (
    t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f
      ? ((p = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [l, u, d, f] })),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function fn(e) {
  let t = (0, pn.c)(7),
    { platform: n, script: r } = e,
    i = It[n],
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, Z.jsx)(`div`, {
        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
        children: (0, Z.jsx)(U, { ...i }),
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, Z.jsx)(Je, {
        language: `bash`,
        content: r,
        shouldWrapCode: !0,
        codeContainerClassName: `max-h-40`,
      })),
      (t[2] = r),
      (t[3] = o));
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [a, o] })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var pn,
  Z,
  mn = e(() => {
    ((pn = H()), V(), E(), Ye(), Ft(), Lt(), ut(), tt(), lt(), yt(), Vt(), Gt(), (Z = l()));
  });
function hn(e) {
  let t = (0, wn.c)(14),
    {
      groups: n,
      hostId: r,
      isLoading: i,
      onAddWorkspace: a,
      onCreateEnvironment: o,
      onSelectEnvironment: s,
    } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(U, { ...Pt.selectProject })), (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(U, {
        id: `settings.localEnvironments.workspace.add`,
        defaultMessage: `Add project`,
        description: `Button label to add a new workspace`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u;
  t[2] === a
    ? (u = t[3])
    : ((u = (0, Q.jsx)(q.Header, {
        title: c,
        actions: (0, Q.jsx)(f, { color: `secondary`, size: `toolbar`, onClick: a, children: l }),
      })),
      (t[2] = a),
      (t[3] = u));
  let d;
  t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== o || t[9] !== s
    ? ((d = (0, Q.jsx)(q.Content, {
        children: (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Q.jsx)(gn, {
            groups: n,
            hostId: r,
            isLoading: i,
            onAddWorkspace: a,
            onCreateEnvironment: o,
            onSelectEnvironment: s,
          }),
        }),
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o),
      (t[9] = s),
      (t[10] = d))
    : (d = t[10]);
  let p;
  return (
    t[11] !== u || t[12] !== d
      ? ((p = (0, Q.jsxs)(q, { className: `gap-2`, children: [u, d] })),
        (t[11] = u),
        (t[12] = d),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function gn(e) {
  let t = (0, wn.c)(28),
    {
      groups: n,
      hostId: r,
      isLoading: i,
      onAddWorkspace: a,
      onCreateEnvironment: o,
      onSelectEnvironment: s,
    } = e,
    c = ve(),
    l,
    u,
    d,
    p,
    m;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== c ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = n.filter(_n);
      if (i) {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(K, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, Q.jsx)(ge, { className: `icon-xs` }),
                  (0, Q.jsx)(U, {
                    id: `settings.localEnvironments.workspaceSelect.loading`,
                    defaultMessage: `Loading projects.`,
                    description: `Loading message while workspace options are fetched`,
                  }),
                ],
              }),
            })),
            (t[12] = e))
          : (e = t[12]),
          (m = e));
        break bb0;
      }
      if (e.length === 0) {
        let e;
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(U, {
              id: `settings.localEnvironments.workspaceSelect.empty`,
              defaultMessage: `No projects yet. Add one to configure local environments.`,
              description: `Empty state when no workspace roots are available`,
            })),
            (t[13] = e))
          : (e = t[13]);
        let n;
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(U, {
              id: `settings.localEnvironments.workspace.add`,
              defaultMessage: `Add project`,
              description: `Button label to add a new workspace`,
            })),
            (t[14] = n))
          : (n = t[14]);
        let r;
        (t[15] === a
          ? (r = t[16])
          : ((r = (0, Q.jsx)(K, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-3 p-3 text-sm text-token-text-secondary`,
                children: [
                  e,
                  (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(f, {
                      color: `primary`,
                      size: `toolbar`,
                      onClick: a,
                      children: n,
                    }),
                  }),
                ],
              }),
            })),
            (t[15] = a),
            (t[16] = r)),
          (m = r));
        break bb0;
      }
      ((l = `flex flex-col gap-3`),
        (u = `list`),
        t[17] === c
          ? (d = t[18])
          : ((d = c.formatMessage({
              id: `settings.localEnvironments.workspaceSelect.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the workspace selection list`,
            })),
            (t[17] = c),
            (t[18] = d)));
      let h;
      (t[19] !== r || t[20] !== o || t[21] !== s
        ? ((h = (e) =>
            (0, Q.jsx)(
              vn,
              { group: e, hostId: r, onCreateEnvironment: o, onSelectEnvironment: s },
              e.path,
            )),
          (t[19] = r),
          (t[20] = o),
          (t[21] = s),
          (t[22] = h))
        : (h = t[22]),
        (p = e.map(h)));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = c),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m));
  } else ((l = t[7]), (u = t[8]), (d = t[9]), (p = t[10]), (m = t[11]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h;
  return (
    t[23] !== l || t[24] !== u || t[25] !== d || t[26] !== p
      ? ((h = (0, Q.jsx)(`div`, { className: l, role: u, "aria-label": d, children: p })),
        (t[23] = l),
        (t[24] = u),
        (t[25] = d),
        (t[26] = p),
        (t[27] = h))
      : (h = t[27]),
    h
  );
}
function _n(e) {
  return e.path != null;
}
function vn(e) {
  let t = (0, wn.c)(21),
    { group: n, hostId: r, onCreateEnvironment: i, onSelectEnvironment: a } = e,
    o = ve(),
    s;
  t[0] !== n.path || t[1] !== r
    ? ((s = { params: { hostId: r, workspaceRoot: n.path }, select: yn }),
      (t[0] = n.path),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let { data: l, isLoading: u, error: d } = ue(`local-environments`, s),
    p = l === void 0 ? [] : l,
    [m, h] = (0, Tn.useState)(!1),
    { projectEnvironments: g, inheritedEnvironments: _ } = Sn(p, n.path),
    v = Fe(g),
    y = n.isCodexWorktree ? Ne : ke,
    b = n.repositoryData?.ownerRepo?.owner ?? null,
    x = u,
    ee = d != null,
    S = g.length > 0 || _.length > 0,
    w;
  t[3] === o
    ? (w = t[4])
    : ((w = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.viewAction`,
        defaultMessage: `View`,
        description: `Action label to view a local environment`,
      })),
      (t[3] = o),
      (t[4] = w));
  let T = w,
    E;
  t[5] === o
    ? (E = t[6])
    : ((E = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.addLabel`,
        defaultMessage: `Add environment`,
        description: `Aria label for add environment button`,
      })),
      (t[5] = o),
      (t[6] = E));
  let D = E,
    O = ze(p, n.path),
    k;
  t[7] === o
    ? (k = t[8])
    : ((k = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.loadingLabel`,
        defaultMessage: `Loading environment`,
        description: `Label for environment row while loading`,
      })),
      (t[7] = o),
      (t[8] = k));
  let A = k,
    M;
  t[9] === o
    ? (M = t[10])
    : ((M = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.errorLabel`,
        defaultMessage: `Environment needs attention`,
        description: `Label for environment row when environment data fails`,
      })),
      (t[9] = o),
      (t[10] = M));
  let N = M,
    te;
  t[11] === y
    ? (te = t[12])
    : ((te = (0, Q.jsx)(y, { className: `icon-sm shrink-0 text-token-text-secondary` })),
      (t[11] = y),
      (t[12] = te));
  let P;
  t[13] === n.label
    ? (P = t[14])
    : ((P = (0, Q.jsx)(`span`, { className: `truncate font-medium`, children: n.label })),
      (t[13] = n.label),
      (t[14] = P));
  let F;
  t[15] === b
    ? (F = t[16])
    : ((F = b
        ? (0, Q.jsx)(`span`, { className: `truncate text-token-text-secondary`, children: b })
        : null),
      (t[15] = b),
      (t[16] = F));
  let ne;
  t[17] !== P || t[18] !== F
    ? ((ne = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 text-sm text-token-text-primary`,
        children: [P, F],
      })),
      (t[17] = P),
      (t[18] = F),
      (t[19] = ne))
    : (ne = t[19]);
  let I;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((I = (0, Q.jsx)(C, { className: `icon-xs` })), (t[20] = I))
      : (I = t[20]),
    (0, Q.jsxs)(K, {
      className: `p-0`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2 px-4 py-3`,
          children: [
            (0, Q.jsxs)(`button`, {
              className: `flex min-w-0 items-center gap-3 text-left`,
              type: `button`,
              onClick: () => {
                v != null && a(n.path, v);
              },
              children: [te, ne],
            }),
            (0, Q.jsx)(f, {
              className: `w-9 justify-center`,
              "aria-label": D,
              color: `secondary`,
              size: `toolbar`,
              onClick: () => {
                i(n.path, O);
              },
              children: I,
            }),
          ],
        }),
        x || ee || S
          ? (0, Q.jsx)(`div`, {
              className: `border-t border-token-border`,
              children: x
                ? (0, Q.jsx)(`div`, {
                    className: `px-4 py-3`,
                    children: (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                      children: [
                        (0, Q.jsx)(ge, { className: `icon-xs` }),
                        (0, Q.jsx)(`span`, { children: A }),
                      ],
                    }),
                  })
                : ee
                  ? (0, Q.jsx)(`div`, {
                      className: `px-4 py-3`,
                      children: (0, Q.jsx)(`div`, {
                        className: `flex items-center gap-2 text-sm text-token-error-foreground`,
                        children: (0, Q.jsx)(`span`, { children: N }),
                      }),
                    })
                  : (0, Q.jsxs)(`div`, {
                      className: `flex flex-col divide-y divide-token-border`,
                      children: [
                        g.map((e) =>
                          (0, Q.jsx)(
                            bn,
                            {
                              environment: e,
                              actionLabel: T,
                              errorLabel: N,
                              onSelectEnvironment: () => {
                                a(n.path, e.configPath);
                              },
                            },
                            e.configPath,
                          ),
                        ),
                        _.length > 0
                          ? (0, Q.jsxs)(`div`, {
                              className: `flex flex-col`,
                              children: [
                                (0, Q.jsxs)(`button`, {
                                  className: `flex cursor-interaction items-center justify-between gap-3 px-4 py-3 text-left text-sm text-token-text-secondary hover:bg-token-list-hover-background`,
                                  type: `button`,
                                  "aria-expanded": m,
                                  onClick: () => {
                                    h(!m);
                                  },
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `min-w-0 truncate`,
                                      children: (0, Q.jsx)(U, {
                                        id: `settings.localEnvironments.workspaceSelect.inherited`,
                                        defaultMessage: `{count, plural, one {# environment in a parent folder} other {# environments in parent folders}}`,
                                        description: `Accordion label for local environments inherited from parent folders`,
                                        values: { count: _.length },
                                      }),
                                    }),
                                    (0, Q.jsx)(j, {
                                      className: c(
                                        `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
                                        m && `rotate-180`,
                                      ),
                                    }),
                                  ],
                                }),
                                m
                                  ? (0, Q.jsx)(`div`, {
                                      className: `flex flex-col divide-y divide-token-border border-t border-token-border`,
                                      children: _.map((e) =>
                                        (0, Q.jsx)(
                                          bn,
                                          {
                                            environment: e,
                                            actionLabel: T,
                                            errorLabel: N,
                                            onSelectEnvironment: () => {
                                              a(n.path, e.configPath);
                                            },
                                          },
                                          e.configPath,
                                        ),
                                      ),
                                    })
                                  : null,
                              ],
                            })
                          : null,
                      ],
                    }),
            })
          : null,
      ],
    })
  );
}
function yn(e) {
  return e.environments;
}
function bn(e) {
  let t = (0, wn.c)(19),
    { environment: n, actionLabel: r, errorLabel: i, onSelectEnvironment: a } = e,
    o;
  t[0] === n.configPath ? (o = t[1]) : ((o = xn(n.configPath)), (t[0] = n.configPath), (t[1] = o));
  let s = o,
    c = n.type === `success` && n.environment?.name != null && n.environment.name.length > 0,
    l = c ? n.environment.name : s,
    u = n.type === `error`,
    d = u || (c && s !== l) ? s : null,
    p = u ? `text-token-error-foreground` : `text-token-text-primary`,
    m = u ? i : l,
    h;
  t[2] !== p || t[3] !== m
    ? ((h = (0, Q.jsx)(`span`, { className: p, children: m })), (t[2] = p), (t[3] = m), (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] === d
    ? (g = t[6])
    : ((g = d
        ? (0, Q.jsx)(`span`, {
            className: `text-xs text-token-description-foreground`,
            children: d,
          })
        : null),
      (t[5] = d),
      (t[6] = g));
  let _;
  t[7] !== h || t[8] !== g
    ? ((_ = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm`,
        children: [h, g],
      })),
      (t[7] = h),
      (t[8] = g),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== a || t[11] !== _
    ? ((v = (0, Q.jsx)(`button`, {
        className: `flex min-w-0 flex-1 text-left`,
        type: `button`,
        onClick: a,
        children: _,
      })),
      (t[10] = a),
      (t[11] = _),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== r || t[14] !== a
    ? ((y = (0, Q.jsx)(f, { color: `ghost`, size: `toolbar`, onClick: a, children: r })),
      (t[13] = r),
      (t[14] = a),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== v || t[17] !== y
      ? ((b = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 px-4 py-3`,
          children: [v, y],
        })),
        (t[16] = v),
        (t[17] = y),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
function xn(e) {
  let t = _e(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
function Sn(e, t) {
  let n = _e(t),
    r = [],
    i = [];
  for (let t of e) Cn(t.configPath) === n ? r.push(t) : i.push(t);
  return { projectEnvironments: r, inheritedEnvironments: i };
}
function Cn(e) {
  let t = _e(e),
    n = t.lastIndexOf(`/.codex/environments/`);
  return n === -1 ? t : t.slice(0, n);
}
var wn,
  Tn,
  Q,
  En = e(() => {
    ((wn = H()),
      re(),
      (Tn = t(x(), 1)),
      V(),
      E(),
      a(),
      je(),
      R(),
      M(),
      Le(),
      ut(),
      lt(),
      Ie(),
      Oe(),
      n(),
      Ft(),
      (Q = l()));
  });
function Dn() {
  let e = (0, An.c)(109),
    [t] = he(),
    n = m(),
    r = D(),
    i = p(We) != null,
    a = i ? Ve(t, n.state) : null,
    o;
  e[0] === t ? (o = e[1]) : ((o = t.get(`workspaceRoot`)), (e[0] = t), (e[1] = o));
  let s = o,
    c;
  e[2] === t ? (c = e[3]) : ((c = t.get(`configPath`)), (e[2] = t), (e[3] = c));
  let l = c,
    u;
  e[4] === t ? (u = e[5]) : ((u = t.get(`mode`)), (e[4] = t), (e[5] = u));
  let d = u,
    { selectedHostId: f } = Qe(),
    h = a?.hostId ?? f,
    { data: g, isLoading: _ } = O(ae, { hostId: h }),
    v;
  e[6] === g?.roots ? (v = e[7]) : ((v = g?.roots ?? []), (e[6] = g?.roots), (e[7] = v));
  let y = v,
    x = et(b(Ee), h),
    [C, w] = (0, jn.useState)(a?.workspaceRoot ?? s),
    [T, E] = (0, jn.useState)(a?.configPath ?? l),
    [k, A] = (0, jn.useState)(a != null || d === `edit`),
    j = C ?? null,
    M = j != null && (a != null || y.includes(j)) ? j : null,
    N = M == null ? null : (x.find((e) => e.path === M) ?? null),
    P = M == null,
    F;
  e[8] === h
    ? (F = e[9])
    : ((F = () => {
        if (h !== `local`) {
          S({ hostId: h });
          return;
        }
        ee();
      }),
      (e[8] = h),
      (e[9] = F));
  let ne = F,
    I;
  e[10] !== A || e[11] !== E || e[12] !== w
    ? ((I = () => {
        (w(null), E(null), A(!1));
      }),
      (e[10] = A),
      (e[11] = E),
      (e[12] = w),
      (e[13] = I))
    : (I = e[13]);
  let re = I,
    ie;
  e[14] !== a || e[15] !== r || e[16] !== A
    ? ((ie = () => {
        if (a != null) {
          r(a.returnTo, { replace: !0 });
          return;
        }
        A(!1);
      }),
      (e[14] = a),
      (e[15] = r),
      (e[16] = A),
      (e[17] = ie))
    : (ie = e[17]);
  let L = ie,
    oe;
  e[18] !== A || e[19] !== E || e[20] !== w
    ? ((oe = (e, t) => {
        (w(e), E(t), A(!1));
      }),
      (e[18] = A),
      (e[19] = E),
      (e[20] = w),
      (e[21] = oe))
    : (oe = e[21]);
  let se = oe,
    R;
  e[22] !== A || e[23] !== E || e[24] !== w
    ? ((R = (e, t) => {
        (w(e), E(t), A(!0));
      }),
      (e[22] = A),
      (e[23] = E),
      (e[24] = w),
      (e[25] = R))
    : (R = e[25]);
  let ce = R,
    le = M ?? ``,
    z;
  e[26] !== h || e[27] !== le
    ? ((z = { hostId: h, workspaceRoot: le }), (e[26] = h), (e[27] = le), (e[28] = z))
    : (z = e[28]);
  let de = !P && M != null,
    B;
  e[29] === de ? (B = e[30]) : ((B = { enabled: de }), (e[29] = de), (e[30] = B));
  let fe;
  e[31] !== z || e[32] !== B
    ? ((fe = { params: z, queryConfig: B, select: On }), (e[31] = z), (e[32] = B), (e[33] = fe))
    : (fe = e[33]);
  let { data: pe, isLoading: V, error: me } = ue(`local-environments`, fe),
    ge;
  e[34] === pe ? (ge = e[35]) : ((ge = pe === void 0 ? [] : pe), (e[34] = pe), (e[35] = ge));
  let _e = ge,
    ve;
  e[36] === _e ? (ve = e[37]) : ((ve = Fe(_e)), (e[36] = _e), (e[37] = ve));
  let ye = ve,
    be;
  e[38] !== a || e[39] !== _e || e[40] !== me || e[41] !== V || e[42] !== M
    ? ((be = a != null && a.configPath == null && !V && me == null && M != null ? ze(_e, M) : null),
      (e[38] = a),
      (e[39] = _e),
      (e[40] = me),
      (e[41] = V),
      (e[42] = M),
      (e[43] = be))
    : (be = e[43]);
  let xe = be,
    Se = T ?? a?.configPath ?? xe ?? (a == null ? ye : null),
    Ce = Se ?? ``,
    H;
  e[44] !== h || e[45] !== Ce
    ? ((H = { configPath: Ce, hostId: h }), (e[44] = h), (e[45] = Ce), (e[46] = H))
    : (H = e[46]);
  let we = !P && M != null && Se != null,
    Te;
  e[47] === we ? (Te = e[48]) : ((Te = { enabled: we }), (e[47] = we), (e[48] = Te));
  let De;
  e[49] !== H || e[50] !== Te
    ? ((De = { params: H, queryConfig: Te }), (e[49] = H), (e[50] = Te), (e[51] = De))
    : (De = e[51]);
  let { data: W, isLoading: Oe, error: ke } = ue(`local-environment-config`, De),
    je = W?.configPath ?? ``,
    Me;
  e[52] !== h || e[53] !== je
    ? ((Me = { configPath: je, hostId: h }), (e[52] = h), (e[53] = je), (e[54] = Me))
    : (Me = e[54]);
  let Ne = !P && M != null && !!W?.exists,
    Pe;
  e[55] === Ne ? (Pe = e[56]) : ((Pe = { enabled: Ne }), (e[55] = Ne), (e[56] = Pe));
  let Ie;
  e[57] !== Me || e[58] !== Pe
    ? ((Ie = { params: Me, queryConfig: Pe }), (e[57] = Me), (e[58] = Pe), (e[59] = Ie))
    : (Ie = e[59]);
  let { data: Le, error: Re, isLoading: Be } = ue(`local-environment`, Ie),
    He = Le?.environment.type === `success` ? Le.environment.environment : null,
    Ue = Le?.environment.type === `error` ? Le.environment.error.message : null,
    Ge = ke?.message ?? Re?.message ?? me?.message ?? null,
    Ke;
  e[60] !== re || e[61] !== L || e[62] !== k || e[63] !== M || e[64] !== N
    ? ((Ke =
        M == null
          ? null
          : (0, $.jsx)(jt, {
              workspaceRoot: M,
              workspaceGroup: N,
              mode: k ? `edit` : void 0,
              onBack: k ? L : re,
            })),
      (e[60] = re),
      (e[61] = L),
      (e[62] = k),
      (e[63] = M),
      (e[64] = N),
      (e[65] = Ke))
    : (Ke = e[65]);
  let G = Ke,
    qe = V || Oe || Be;
  if (i && a == null) {
    let t;
    return (
      e[66] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(Ae, { to: `/settings/local-environments`, replace: !0 })), (e[66] = t))
        : (t = e[66]),
      t
    );
  }
  if (P) {
    let t;
    e[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(U, {
          id: `settings.localEnvironments.workspaceSelect.description`,
          defaultMessage: `Local environments tell Codex how to set up worktrees for a project. {learnMore}`,
          description: `Description for the workspace selection step`,
          values: {
            learnMore: (0, $.jsx)(`a`, {
              className: `inline-flex items-center gap-1 text-base text-token-text-link-foreground`,
              href: te,
              target: `_blank`,
              rel: `noreferrer`,
              children: (0, $.jsx)(U, {
                id: `settings.localEnvironments.workspaceSelect.learnMore`,
                defaultMessage: `Learn more.`,
                description: `Link label for local environments docs`,
              }),
            }),
          },
        })),
        (e[67] = t))
      : (t = e[67]);
    let n;
    return (
      e[68] !== ne || e[69] !== ce || e[70] !== se || e[71] !== h || e[72] !== x || e[73] !== _
        ? ((n = (0, $.jsx)(kn, {
            subtitle: t,
            children: (0, $.jsx)(hn, {
              groups: x,
              hostId: h,
              isLoading: _,
              onAddWorkspace: ne,
              onCreateEnvironment: ce,
              onSelectEnvironment: se,
            }),
          })),
          (e[68] = ne),
          (e[69] = ce),
          (e[70] = se),
          (e[71] = h),
          (e[72] = x),
          (e[73] = _),
          (e[74] = n))
        : (n = e[74]),
      n
    );
  }
  if (qe) {
    let t;
    e[75] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(q.Header, {
          title: (0, $.jsx)(U, {
            id: `settings.localEnvironments.loading.title`,
            defaultMessage: `Loading local environments`,
            description: `Loading state title for local environments settings`,
          }),
        })),
        (e[75] = t))
      : (t = e[75]);
    let n;
    e[76] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(q, {
          children: [
            t,
            (0, $.jsx)(q.Content, {
              children: (0, $.jsx)(K, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: (0, $.jsx)(U, {
                    id: `settings.localEnvironments.loading.body`,
                    defaultMessage: `Fetching your project configuration.`,
                    description: `Loading state body for local environments settings`,
                  }),
                }),
              }),
            }),
          ],
        })),
        (e[76] = n))
      : (n = e[76]);
    let r;
    return (
      e[77] === G
        ? (r = e[78])
        : ((r = (0, $.jsx)(kn, { backSlot: G, children: n })), (e[77] = G), (e[78] = r)),
      r
    );
  }
  if (!W || M == null) {
    let t;
    e[79] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(q.Header, {
          title: (0, $.jsx)(U, {
            id: `settings.localEnvironments.unavailable.title`,
            defaultMessage: `Local environments unavailable`,
            description: `Title for missing local environment config state`,
          }),
        })),
        (e[79] = t))
      : (t = e[79]);
    let n;
    e[80] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(q, {
          children: [
            t,
            (0, $.jsx)(q.Content, {
              children: (0, $.jsx)(K, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: (0, $.jsx)(U, {
                    id: `settings.localEnvironments.unavailable.body`,
                    defaultMessage: `We could not load local environment settings for this project.`,
                    description: `Body text for missing local environment config state`,
                  }),
                }),
              }),
            }),
          ],
        })),
        (e[80] = n))
      : (n = e[80]);
    let r;
    return (
      e[81] === G
        ? (r = e[82])
        : ((r = (0, $.jsx)(kn, { backSlot: G, children: n })), (e[81] = G), (e[82] = r)),
      r
    );
  }
  if (k) {
    let t;
    e[83] !== W.configPath ||
    e[84] !== W.exists ||
    e[85] !== L ||
    e[86] !== He ||
    e[87] !== Ue ||
    e[88] !== Ge ||
    e[89] !== M ||
    e[90] !== h ||
    e[91] !== N
      ? ((t = (0, $.jsx)(Kt, {
          hostId: h,
          workspaceRoot: M,
          workspaceGroup: N,
          configPath: W.configPath,
          configExists: W.exists,
          initialEnvironment: He,
          parseErrorMessage: Ue,
          readErrorMessage: Ge,
          onSaved: L,
        })),
        (e[83] = W.configPath),
        (e[84] = W.exists),
        (e[85] = L),
        (e[86] = He),
        (e[87] = Ue),
        (e[88] = Ge),
        (e[89] = M),
        (e[90] = h),
        (e[91] = N),
        (e[92] = t))
      : (t = e[92]);
    let n;
    return (
      e[93] !== G || e[94] !== t
        ? ((n = (0, $.jsx)(kn, { backSlot: G, children: t })),
          (e[93] = G),
          (e[94] = t),
          (e[95] = n))
        : (n = e[95]),
      n
    );
  }
  let Je;
  e[96] === A
    ? (Je = e[97])
    : ((Je = () => {
        A(!0);
      }),
      (e[96] = A),
      (e[97] = Je));
  let Ye;
  e[98] !== W.exists ||
  e[99] !== He ||
  e[100] !== Ue ||
  e[101] !== Ge ||
  e[102] !== M ||
  e[103] !== N ||
  e[104] !== Je
    ? ((Ye = (0, $.jsx)(ln, {
        workspaceRoot: M,
        workspaceGroup: N,
        configExists: W.exists,
        initialEnvironment: He,
        parseErrorMessage: Ue,
        readErrorMessage: Ge,
        onEdit: Je,
      })),
      (e[98] = W.exists),
      (e[99] = He),
      (e[100] = Ue),
      (e[101] = Ge),
      (e[102] = M),
      (e[103] = N),
      (e[104] = Je),
      (e[105] = Ye))
    : (Ye = e[105]);
  let Xe;
  return (
    e[106] !== G || e[107] !== Ye
      ? ((Xe = (0, $.jsx)(kn, { backSlot: G, children: Ye })),
        (e[106] = G),
        (e[107] = Ye),
        (e[108] = Xe))
      : (Xe = e[108]),
    Xe
  );
}
function On(e) {
  return e.environments;
}
function kn(e) {
  let t = (0, An.c)(5),
    { backSlot: n, subtitle: r, children: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(at, { slug: `local-environments` })), (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] !== n || t[2] !== i || t[3] !== r
      ? ((o = (0, $.jsx)(Ue, { title: a, subtitle: r, backSlot: n, children: i })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var An, jn, $;
e(() => {
  ((An = H()),
    i(),
    (jn = t(x(), 1)),
    V(),
    be(),
    g(),
    ne(),
    P(),
    He(),
    ut(),
    Ze(),
    nt(),
    ot(),
    lt(),
    I(),
    L(),
    Ie(),
    n(),
    Nt(),
    Ge(),
    cn(),
    mn(),
    En(),
    ($ = l()));
})();
export { Dn as LocalEnvironmentsSettings };
//# sourceMappingURL=local-environments-settings-page.js.map
