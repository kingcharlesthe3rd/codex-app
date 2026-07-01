import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AP as n,
  Ew as r,
  GP as i,
  HP as a,
  IN as o,
  IP as s,
  Jb as c,
  LP as l,
  Lc as u,
  MR as d,
  Mz as f,
  PD as p,
  PN as m,
  Pc as h,
  RN as g,
  TB as ee,
  TP as _,
  Tw as v,
  VD as y,
  XO as b,
  YO as x,
  Yj as te,
  _M as S,
  ab as C,
  as as w,
  bB as T,
  eb as ne,
  gM as re,
  gV as ie,
  iF as ae,
  jP as oe,
  jV as E,
  lA as se,
  nV as D,
  oa as ce,
  os as le,
  pV as ue,
  qP as de,
  qb as fe,
  qj as pe,
  sa as me,
  ss as he,
  uV as ge,
  wP as O,
  yE as _e,
  zV as k,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Bw as ve,
  Jw as ye,
  Vw as be,
  Yw as xe,
  fw as Se,
  pw as Ce,
} from "./app-initial~app-main~onboarding-page.js";
import {
  f as we,
  h as Te,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf.js";
import {
  _ as Ee,
  f as De,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~select-~cvtadpw5.js";
import { n as Oe, t as ke } from "./setup-codex-wizard-step-view-C6P-eUye.js";
import { n as Ae, r as je, t as Me } from "./recommended-skill-statsig-overrides.js";
function A(e, t, n, r) {
  let i = j(t);
  e.set(L, (e) => {
    let a = e ?? {},
      o = a[i] ?? N(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function Ne(e, t) {
  e.set(L, (e) => {
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
function Pe(e, t, n, r) {
  e.query
    .snapshot(R, t)
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
function Fe(e) {
  return e == null ? null : Object.keys(e);
}
function j({ domain: e, hostId: t, projectRoot: n }) {
  return e == null ? `${I}:${t}:${M(n)}` : `${I}:${t}:${M(n)}:${e}`;
}
function Ie(e, t) {
  let n = j(t),
    r = e(L)?.[n];
  if (r != null) return r;
  if (t.domain == null) return N(t);
}
function M(e) {
  return e ?? ``;
}
function N(e) {
  return n(Le(e), void 0);
}
function Le({ hostId: e, projectRoot: t }) {
  return `${I}:${e}:${M(t)}`;
}
function Re(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, P.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === F)) break;
  }
  return n;
}
var P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W = e(() => {
    ((P = t(se(), 1)),
      T(),
      ae(),
      l(),
      oe(),
      re(),
      g(),
      (F = 3),
      (I = `ambient-suggestions:default-statuses`),
      (L = S(I, {})),
      (R = o(s, `ambient-suggestions`, ({ projectRoot: e }) => ({ enabled: e != null }))),
      (z = o(
        s,
        `ambient-suggestions-refresh`,
        ({ domain: e, hostId: t, plan: n, projectRoot: r }) => ({
          enabled: r != null,
          gcTime: f(n),
          params: { domain: e, hostId: t, projectRoot: r },
          select: () => !0,
          staleTime: f(n),
        }),
      )),
      (B = ge(s, (e) => null)),
      (V = D(s, (e, { get: t }) => Fe(Ie(t, e)))),
      (H = D(s, (e, { get: t }) => {
        let n = t(R, e);
        return n.data != null || n.isError;
      })),
      (U = D(s, ({ domain: e, hostId: t, projectRoot: n }, { get: r }) => {
        let i = r(R, { domain: e, hostId: t, projectRoot: n }).data?.file;
        return Re(i?.currentSuggestionIds ?? [], i?.suggestions ?? []);
      })));
  }),
  G,
  K,
  ze = e(() => {
    (t(k()),
      (G = E()),
      (K = (e) =>
        (0, G.jsx)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, G.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M12.4322 4.81596C12.159 4.68505 11.8411 4.68505 11.5679 4.81596L2.31421 9.25003L11.5679 13.6841C11.8411 13.815 12.159 13.815 12.4322 13.6841L21.6859 9.25003L12.4322 4.81596ZM10.7037 3.01233C11.5233 2.61959 12.4768 2.61959 13.2964 3.01233L22.5501 7.44639C23.8957 8.09114 24.0456 9.86518 23 10.7617V15C23 15.5523 22.5523 16 22 16C21.4478 16 21 15.5523 21 15V11.7964L19.5 12.5152V15.8888C19.5 17.2412 18.8167 18.5019 17.6837 19.2402L16.9133 19.7422C13.9268 21.6881 10.0733 21.6881 7.08675 19.7422L6.31636 19.2402C5.18333 18.5019 4.50004 17.2412 4.50004 15.8888V12.5151L1.44997 11.0537C-0.0643805 10.328 -0.0643747 8.17202 1.44997 7.44639L10.7037 3.01233ZM6.50004 13.4735V15.8888C6.50004 16.565 6.84168 17.1954 7.4082 17.5645L8.17859 18.0665C10.5014 19.58 13.4986 19.58 15.8215 18.0665L16.5919 17.5645C17.1584 17.1954 17.5 16.565 17.5 15.8888V13.4735L13.2964 15.4877C12.4768 15.8805 11.5233 15.8805 10.7037 15.4877L6.50004 13.4735Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Be({ completed: e, domain: t, hostId: n, onLocalConversationCreated: a, projectRoot: o }) {
  let c = ee(s),
    l = de(),
    {
      agentMode: u,
      isAgentModePending: d,
      permissionProfileId: f,
      shouldSendPermissionOverrides: p,
    } = Te({ conversationId: null, cwdOverride: o, hostId: n }),
    { activeMode: m } = be(null),
    { serviceTierSettings: h } = Ce(null),
    g = ie(De),
    _ = je(),
    [y, b] = (0, J.useState)(!1),
    x = l.formatMessage({
      id: `electron.onboarding.assistantSuggestion.title`,
      defaultMessage: `Setup Codex`,
      description: `Title for the card that starts the Setup Codex flow`,
    }),
    S = l.formatMessage({
      id: `electron.onboarding.assistantSuggestion.description`,
      defaultMessage: `Personalize Codex around your work`,
      description: `Description for the card that starts the Setup Codex flow`,
    }),
    w = d || o == null;
  Oe(r.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, !e);
  let T = async () => {
    if (!(w || e || y || o == null)) {
      (C(c, r.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, v.CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED),
        b(!0));
      try {
        let e = Ue(g.roles),
          i = Me(_, Z)?.replace(/^name:\s*.*$/m, `name: ${Q}`);
        (await We({
          additionalDeveloperInstructions: e,
          agentMode: u,
          collaborationMode: m,
          hostId: n,
          onLocalConversationCreated: a,
          permissionProfileId: f,
          projectRoot: o,
          prompt: He(
            await Ve({
              hostId: n,
              invalidateSkills: () => {
                c.queryClient.invalidateQueries({ queryKey: [`skills`] });
              },
              repoPath: $,
              skillId: Z,
              skillStatsigOverride: i,
              forceReinstall: i == null,
            }),
          ),
          serviceTier: h.serviceTierForRequest,
          shouldSendPermissionOverrides: p,
        }),
          e != null &&
            C(
              c,
              r.CODEX_ONBOARDING_WIZARD_PHASE_ROLE_PICKER,
              v.CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED,
            ),
          A(c, { domain: t, hostId: n, projectRoot: o }, X, `accepted`));
      } catch {
        c.get(te).danger(
          (0, Y.jsx)(i, {
            id: `home.ambientSuggestions.startError`,
            defaultMessage: `Unable to start this suggestion`,
            description: `Toast shown when launching an ambient suggestion fails`,
          }),
          { id: `ambient-suggestion-start-error` },
        );
      } finally {
        b(!1);
      }
    }
  };
  return (0, Y.jsxs)(`button`, {
    type: `button`,
    className: O(
      `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
      e || w || y
        ? `cursor-default`
        : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
      (w || y) && !e && `opacity-70`,
      !e && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
    ),
    disabled: w || y || e,
    onClick: () => {
      T();
    },
    children: [
      (0, Y.jsx)(`span`, {
        className: O(`flex h-5 shrink-0 items-center`, e && `opacity-30`),
        children: (0, Y.jsx)(K, { "aria-hidden": !0, className: `size-5 shrink-0` }),
      }),
      (0, Y.jsxs)(`span`, {
        className: O(`flex w-full min-w-0 flex-col gap-1 text-base`, e && `opacity-30`),
        children: [
          (0, Y.jsx)(`span`, {
            className: `line-clamp-1 leading-[18px] text-token-text-primary`,
            children: x,
          }),
          (0, Y.jsx)(`span`, {
            className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
            children: S,
          }),
        ],
      }),
      e
        ? (0, Y.jsx)(ce, {
            "aria-hidden": `true`,
            className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
          })
        : null,
    ],
  });
}
async function Ve({
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
    await b(`list-skills-for-host`, { forceReload: !0, hostId: e }),
    q.default.join(o.destination, `SKILL.md`)
  );
}
function He(e) {
  return h({ name: `Setup Codex`, path: e });
}
function Ue(e) {
  let t = e.filter((e) => e !== `default`);
  return t.length === 0
    ? null
    : `The user has already selected Setup Codex roles: ${t.join(`, `)}. Mark Personalize Codex complete, skip role selection, and use these roles for subsequent setup steps.`;
}
async function We({
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
    d = he(u),
    f = [{ type: `text`, text: s, text_elements: [] }],
    m = await w(u, { prompt: s }),
    h = m.cwd ?? o;
  if (d && m.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: g } = await b(`read-config-for-host`, { hostId: r, includeLayers: !1, cwd: h });
  await i(
    await b(`start-conversation`, {
      hostId: r,
      ...ye({
        additionalDeveloperInstructions: e,
        input: f,
        workspaceRoots: m.workspaceRoots,
        cwd: h,
        fileAttachments: [],
        addedFiles: [],
        agentMode: t,
        permissionProfileId: a,
        shouldSendPermissionOverrides: l,
        model: null,
        serviceTier: c,
        reasoningEffort: null,
        collaborationMode: n,
        config: fe(g),
        configOverrides: { [p]: !0 },
        ...(d
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: m.projectlessOutputDirectory,
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
    ((q = t(d(), 1)),
      _e(),
      _(),
      ue(),
      T(),
      (J = t(k(), 1)),
      a(),
      y(),
      x(),
      c(),
      pe(),
      xe(),
      ke(),
      ve(),
      we(),
      Se(),
      me(),
      ze(),
      le(),
      ne(),
      Ee(),
      l(),
      Ae(),
      u(),
      g(),
      W(),
      (Y = E()),
      (X = `onboarding-assistant`),
      (Z = `onboard-new-user`),
      (Q = `setup-codex`),
      ($ = `skills/.curated/onboard-new-user`));
  });
export {
  R as a,
  Ne as c,
  Pe as d,
  A as f,
  B as i,
  W as l,
  X as n,
  H as o,
  U as p,
  Ge as r,
  z as s,
  Be as t,
  V as u,
};
//# sourceMappingURL=home-onboarding-assistant-tutorial-card.js.map
