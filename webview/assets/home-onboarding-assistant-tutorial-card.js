import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $c as n,
  Gc as r,
  Ht as i,
  It as a,
  Lt as o,
  Ut as s,
  Wt as c,
  ct as l,
  kl as u,
  ns as d,
  oc as f,
  ol as p,
  ot as m,
  qa as h,
  rl as g,
  tc as _,
  ut as v,
  xl as y,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Qs as b,
  Qu as x,
  Zs as ee,
  am as S,
  im as C,
  td as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  E as te,
  If as ne,
  Jd as T,
  Lb as re,
  Lf as ie,
  Qx as ae,
  Rb as E,
  Sy as oe,
  Ud as se,
  _g as D,
  aw as ce,
  bC as le,
  cw as ue,
  dv as de,
  j as fe,
  ky as pe,
  uw as me,
  vg as O,
  xC as he,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  h as ge,
  p as _e,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  _n as ve,
  gn as ye,
  vn as be,
  yn as xe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import {
  Qr as Se,
  Yr as Ce,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  n as we,
  t as Te,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~o2zfklfu.js";
import {
  i as Ee,
  n as De,
  r as Oe,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~gox010hx.js";
import { n as ke, t as Ae } from "./setup-codex-wizard-step-view.js";
import { n as je, r as Me, t as Ne } from "./recommended-skill-statsig-overrides.js";
function k(e, t, n, r) {
  let i = A(t);
  e.set(I, (e) => {
    let a = e ?? {},
      o = a[i] ?? M(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function Pe(e, t) {
  e.set(I, (e) => {
    if (e == null) return e;
    let n = !1,
      r = Object.fromEntries(
        Object.entries(e).map(([e, r]) => {
          if (r == null || r[t] == null) return [e, r];
          let { [t]: i, ...a } = r;
          return ((n = !0), [e, Object.keys(a).length === 0 ? void 0 : a]);
        }),
      );
    return n ? r : e;
  });
}
function Fe(e, t, n, r) {
  e.query
    .snapshot(L, t)
    .setData((e) =>
      e == null
        ? e
        : {
            file: {
              ...e.file,
              suggestions: e.file.suggestions.map((e) => (e.id === n ? { ...e, status: r } : e)),
            },
          },
    );
}
function Ie(e) {
  return e == null ? null : Object.keys(e);
}
function A({ domain: e, hostId: t, projectRoot: n }) {
  return e == null ? `${F}:${t}:${j(n)}` : `${F}:${t}:${j(n)}:${e}`;
}
function Le(e, t) {
  let n = A(t),
    r = e(I)?.[n];
  if (r != null) return r;
  if (t.domain == null) return M(t);
}
function j(e) {
  return e ?? ``;
}
function M(e) {
  return a(Re(e), void 0);
}
function Re({ hostId: e, projectRoot: t }) {
  return `${F}:${e}:${j(t)}`;
}
function ze(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, N.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === P)) break;
  }
  return n;
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    ((N = t(ae(), 1)),
      _(),
      c(),
      s(),
      o(),
      le(),
      v(),
      (P = 3),
      (F = `ambient-suggestions:default-statuses`),
      (I = he(F, {})),
      (L = l(i, `ambient-suggestions`, ({ projectRoot: e }) => ({ enabled: e != null }))),
      (R = l(
        i,
        `ambient-suggestions-refresh`,
        ({ domain: e, hostId: t, plan: n, projectRoot: r }) => ({
          enabled: r != null,
          gcTime: d(n),
          params: { domain: e, hostId: t, projectRoot: r },
          select: () => !0,
          staleTime: d(n),
        }),
      )),
      (z = n(i, (e) => null)),
      (B = r(i, (e, { get: t }) => Ie(Le(t, e)))),
      (V = r(i, (e, { get: t }) => {
        let n = t(L, e);
        return n.data != null || n.isError;
      })),
      (H = r(i, ({ domain: e, hostId: t, projectRoot: n }, { get: r }) => {
        let i = r(L, { domain: e, hostId: t, projectRoot: n }).data?.file;
        return ze(i?.currentSuggestionIds ?? [], i?.suggestions ?? []);
      })));
  }),
  W,
  G,
  Be = e(() => {
    (t(u()),
      (W = y()),
      (G = (e) =>
        (0, W.jsx)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, W.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M12.4322 4.81596C12.159 4.68505 11.8411 4.68505 11.5679 4.81596L2.31421 9.25003L11.5679 13.6841C11.8411 13.815 12.159 13.815 12.4322 13.6841L21.6859 9.25003L12.4322 4.81596ZM10.7037 3.01233C11.5233 2.61959 12.4768 2.61959 13.2964 3.01233L22.5501 7.44639C23.8957 8.09114 24.0456 9.86518 23 10.7617V15C23 15.5523 22.5523 16 22 16C21.4478 16 21 15.5523 21 15V11.7964L19.5 12.5152V15.8888C19.5 17.2412 18.8167 18.5019 17.6837 19.2402L16.9133 19.7422C13.9268 21.6881 10.0733 21.6881 7.08675 19.7422L6.31636 19.2402C5.18333 18.5019 4.50004 17.2412 4.50004 15.8888V12.5151L1.44997 11.0537C-0.0643805 10.328 -0.0643747 8.17202 1.44997 7.44639L10.7037 3.01233ZM6.50004 13.4735V15.8888C6.50004 16.565 6.84168 17.1954 7.4082 17.5645L8.17859 18.0665C10.5014 19.58 13.4986 19.58 15.8215 18.0665L16.5919 17.5645C17.1584 17.1954 17.5 16.565 17.5 15.8888V13.4735L13.2964 15.4877C12.4768 15.8805 11.5233 15.8805 10.7037 15.4877L6.50004 13.4735Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Ve({ completed: e, domain: t, hostId: n, onLocalConversationCreated: r, projectRoot: a }) {
  let o = f(i),
    s = me(),
    {
      agentMode: c,
      isAgentModePending: l,
      permissionProfileId: u,
      shouldSendPermissionOverrides: d,
    } = Se({ conversationId: null, cwdOverride: a, hostId: n }),
    { activeMode: m } = xe(null),
    { serviceTierSettings: h } = ve(null),
    g = p(te),
    _ = Me(),
    [v, y] = (0, J.useState)(!1),
    b = s.formatMessage({
      id: `electron.onboarding.assistantSuggestion.title`,
      defaultMessage: `Setup Codex`,
      description: `Title for the card that starts the Setup Codex flow`,
    }),
    x = s.formatMessage({
      id: `electron.onboarding.assistantSuggestion.description`,
      defaultMessage: `Personalize Codex around your work`,
      description: `Description for the card that starts the Setup Codex flow`,
    }),
    S = l || a == null;
  ke(O.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, !e);
  let w = async () => {
    if (!(S || e || v || a == null)) {
      (T(o, O.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, D.CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED),
        y(!0));
      try {
        let e = We(g.roles),
          i = Ne(_, Z)?.replace(/^name:\s*.*$/m, `name: ${Q}`);
        (await K({
          additionalDeveloperInstructions: e,
          agentMode: c,
          collaborationMode: m,
          hostId: n,
          onLocalConversationCreated: r,
          permissionProfileId: u,
          projectRoot: a,
          prompt: Ue(
            await He({
              hostId: n,
              invalidateSkills: () => {
                o.queryClient.invalidateQueries({ queryKey: [`skills`] });
              },
              repoPath: $,
              skillId: Z,
              skillStatsigOverride: i,
              forceReinstall: i == null,
            }),
          ),
          serviceTier: h.serviceTierForRequest,
          shouldSendPermissionOverrides: d,
        }),
          e != null &&
            T(
              o,
              O.CODEX_ONBOARDING_WIZARD_PHASE_ROLE_PICKER,
              D.CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED,
            ),
          k(o, { domain: t, hostId: n, projectRoot: a }, X, `accepted`));
      } catch {
        o.get(ge).danger(
          (0, Y.jsx)(ue, {
            id: `home.ambientSuggestions.startError`,
            defaultMessage: `Unable to start this suggestion`,
            description: `Toast shown when launching an ambient suggestion fails`,
          }),
          { id: `ambient-suggestion-start-error` },
        );
      } finally {
        y(!1);
      }
    }
  };
  return (0, Y.jsxs)(`button`, {
    type: `button`,
    className: C(
      `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
      e || S || v
        ? `cursor-default`
        : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
      (S || v) && !e && `opacity-70`,
      !e && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
    ),
    disabled: S || v || e,
    onClick: () => {
      w();
    },
    children: [
      (0, Y.jsx)(`span`, {
        className: C(`flex h-5 shrink-0 items-center`, e && `opacity-30`),
        children: (0, Y.jsx)(G, { "aria-hidden": !0, className: `size-5 shrink-0` }),
      }),
      (0, Y.jsxs)(`span`, {
        className: C(`flex w-full min-w-0 flex-col gap-1 text-base`, e && `opacity-30`),
        children: [
          (0, Y.jsx)(`span`, {
            className: `line-clamp-1 leading-[18px] text-token-text-primary`,
            children: b,
          }),
          (0, Y.jsx)(`span`, {
            className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
            children: x,
          }),
        ],
      }),
      e
        ? (0, Y.jsx)(ee, {
            "aria-hidden": `true`,
            className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
          })
        : null,
    ],
  });
}
async function He({
  hostId: e,
  invalidateSkills: t,
  repoPath: n,
  skillId: r,
  skillStatsigOverride: i,
  forceReinstall: a,
}) {
  let o = await m(`install-recommended-skill`, {
    params: {
      forceReinstall: a,
      hostId: e,
      installRoot: null,
      repoPath: n,
      skillId: r,
      skillStatsigOverride: i,
    },
  });
  if (!o.success || o.destination == null) throw Error(o.error ?? `Unable to install skill`);
  return (
    t(),
    await E(`list-skills-for-host`, { forceReload: !0, hostId: e }),
    q.default.join(o.destination, `SKILL.md`)
  );
}
function Ue(e) {
  return x({ name: `Setup Codex`, path: e });
}
function We(e) {
  let t = e.filter((e) => e !== `default`);
  return t.length === 0
    ? null
    : `The user has already selected Setup Codex roles: ${t.join(`, `)}. Mark Personalize Codex complete, skip role selection, and use these roles for subsequent setup steps.`;
}
async function K({
  additionalDeveloperInstructions: e,
  agentMode: t,
  collaborationMode: n,
  hostId: r,
  onLocalConversationCreated: i,
  permissionProfileId: a,
  projectRoot: o,
  prompt: s,
  serviceTier: c,
  shouldSendPermissionOverrides: l,
}) {
  let u = [o],
    d = Ee(u),
    f = [{ type: `text`, text: s, text_elements: [] }],
    p = await De(u, { prompt: s }),
    m = p.cwd ?? o;
  if (d && p.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: h } = await E(`read-config-for-host`, { hostId: r, includeLayers: !1, cwd: m });
  await i(
    await E(`start-conversation`, {
      hostId: r,
      ...Te({
        additionalDeveloperInstructions: e,
        input: f,
        workspaceRoots: p.workspaceRoots,
        cwd: m,
        fileAttachments: [],
        addedFiles: [],
        agentMode: t,
        permissionProfileId: a,
        shouldSendPermissionOverrides: l,
        model: null,
        serviceTier: c,
        reasoningEffort: null,
        collaborationMode: n,
        config: ne(h),
        configOverrides: { [oe]: !0 },
        ...(d
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: p.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
var q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  Ge = e(() => {
    ((q = t(h(), 1)),
      de(),
      S(),
      g(),
      _(),
      (J = t(u(), 1)),
      ce(),
      pe(),
      re(),
      ie(),
      _e(),
      we(),
      Ae(),
      be(),
      Ce(),
      ye(),
      b(),
      Be(),
      Oe(),
      se(),
      fe(),
      s(),
      je(),
      w(),
      v(),
      U(),
      (Y = y()),
      (X = `onboarding-assistant`),
      (Z = `onboard-new-user`),
      (Q = `setup-codex`),
      ($ = `skills/.curated/onboard-new-user`));
  });
export {
  L as a,
  Pe as c,
  Fe as d,
  k as f,
  z as i,
  U as l,
  X as n,
  V as o,
  H as p,
  Ge as r,
  R as s,
  Ve as t,
  B as u,
};
//# sourceMappingURL=home-onboarding-assistant-tutorial-card.js.map
