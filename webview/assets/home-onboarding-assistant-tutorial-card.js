import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { _ as r, l as i, o as a, t as o } from "./app-scope-CWE-zIhQ.js";
import { Bt as s, M as c, Sn as l } from "./use-host-config.js";
import { Hi as u, vi as d } from "./thread-context-inputs.js";
import { i as f, n as p } from "./vscode-api.js";
import { r as m } from "./react.js";
import { Rr as h, Ui as g } from "./src.js";
import { l as _, s as v } from "./lib-1.js";
import { a as y } from "./persisted-atom-store.js";
import { t as b } from "./clsx.js";
import { r as x } from "./toast-signal.js";
import { ln as S, un as C } from "./product-logger.js";
import { t as w } from "./persisted-signal.js";
import { t as ee } from "./use-service-tier-settings.js";
import { t as T } from "./build-start-conversation-params.js";
import { n as E } from "./skill-utils.js";
import { t as D } from "./use-collaboration-mode.js";
import { c as O } from "./use-permissions-mode.js";
import { d as te } from "./onboarding-state.js";
import { n as k, r as A } from "./projectless-thread.js";
import { t as j } from "./setup-codex-wizard-step-view.js";
import { t as M } from "./check-circle-filled.js";
import { n as ne, t as re } from "./recommended-skill-statsig-overrides.js";
var N = e(l(), 1),
  P = 3,
  F = `ambient-suggestions:default-statuses`,
  I = w(F, {}),
  L = f(o, `ambient-suggestions`, ({ projectRoot: e }) => ({ enabled: e != null })),
  R = f(o, `ambient-suggestions-refresh`, ({ hostId: e, plan: t, projectRoot: n }) => ({
    enabled: n != null,
    gcTime: g(t),
    params: { hostId: e, projectRoot: n },
    select: () => !0,
    staleTime: g(t),
  })),
  z = r(o, (e) => null),
  B = i(o, (e, { get: t }) => K(J(t, e))),
  V = i(o, (e, { get: t }) => {
    let n = t(L, e);
    return n.data != null || n.isError;
  }),
  H = i(o, ({ hostId: e, projectRoot: t }, { get: n }) => {
    let r = n(L, { hostId: e, projectRoot: t }).data?.file;
    return ie(r?.currentSuggestionIds ?? [], r?.suggestions ?? []);
  });
function U(e, t, n, r) {
  let i = q(t);
  e.set(I, (e) => {
    let a = e ?? {},
      o = a[i] ?? X(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function W(e, t) {
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
function G(e, t, n, r) {
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
function K(e) {
  return e == null ? null : Object.keys(e);
}
function q({ hostId: e, projectRoot: t }) {
  return `${F}:${e}:${Y(t)}`;
}
function J(e, t) {
  let n = q(t);
  return e(I)?.[n] ?? X(t);
}
function Y(e) {
  return e ?? ``;
}
function X(e) {
  return y(q(e), void 0);
}
function ie(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, N.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === P)) break;
  }
  return n;
}
var ae = e(t()),
  Z = n(),
  oe = (e) =>
    (0, Z.jsx)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Z.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M12.4322 4.81596C12.159 4.68505 11.8411 4.68505 11.5679 4.81596L2.31421 9.25003L11.5679 13.6841C11.8411 13.815 12.159 13.815 12.4322 13.6841L21.6859 9.25003L12.4322 4.81596ZM10.7037 3.01233C11.5233 2.61959 12.4768 2.61959 13.2964 3.01233L22.5501 7.44639C23.8957 8.09114 24.0456 9.86518 23 10.7617V15C23 15.5523 22.5523 16 22 16C21.4478 16 21 15.5523 21 15V11.7964L19.5 12.5152V15.8888C19.5 17.2412 18.8167 18.5019 17.6837 19.2402L16.9133 19.7422C13.9268 21.6881 10.0733 21.6881 7.08675 19.7422L6.31636 19.2402C5.18333 18.5019 4.50004 17.2412 4.50004 15.8888V12.5151L1.44997 11.0537C-0.0643805 10.328 -0.0643747 8.17202 1.44997 7.44639L10.7037 3.01233ZM6.50004 13.4735V15.8888C6.50004 16.565 6.84168 17.1954 7.4082 17.5645L8.17859 18.0665C10.5014 19.58 13.4986 19.58 15.8215 18.0665L16.5919 17.5645C17.1584 17.1954 17.5 16.565 17.5 15.8888V13.4735L13.2964 15.4877C12.4768 15.8805 11.5233 15.8805 10.7037 15.4877L6.50004 13.4735Z`,
        fill: `currentColor`,
      }),
    }),
  se = e(h(), 1),
  Q = `onboarding-assistant`,
  $ = `onboard-new-user`,
  ce = `setup-codex`,
  le = `skills/.curated/onboard-new-user`;
function ue({ completed: e, hostId: t, onLocalConversationCreated: n, projectRoot: r }) {
  let i = a(o),
    s = _(),
    {
      agentMode: c,
      isAgentModePending: l,
      permissionProfileId: u,
      shouldSendPermissionOverrides: f,
    } = O({ conversationId: null, cwdOverride: r, hostId: t }),
    { activeMode: p } = D(null),
    { serviceTierSettings: h } = ee(null),
    g = m(te),
    y = ne(),
    [w, T] = (0, ae.useState)(!1),
    E = s.formatMessage({
      id: `electron.onboarding.assistantSuggestion.title`,
      defaultMessage: `Setup Codex`,
      description: `Title for the card that starts the Setup Codex flow`,
    }),
    k = s.formatMessage({
      id: `electron.onboarding.assistantSuggestion.description`,
      defaultMessage: `Personalize Codex around your work`,
      description: `Description for the card that starts the Setup Codex flow`,
    }),
    A = l || r == null;
  j(C.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, !e);
  let N = async () => {
    if (!(A || e || w || r == null)) {
      (d(i, C.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, S.CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED),
        T(!0));
      try {
        let e = pe(g.roles),
          a = re(y, $)?.replace(/^name:\s*.*$/m, `name: ${ce}`);
        (await me({
          additionalDeveloperInstructions: e,
          agentMode: c,
          collaborationMode: p,
          hostId: t,
          onLocalConversationCreated: n,
          permissionProfileId: u,
          projectRoot: r,
          prompt: fe(
            await de({
              hostId: t,
              invalidateSkills: () => {
                i.queryClient.invalidateQueries({ queryKey: [`skills`] });
              },
              repoPath: le,
              skillId: $,
              skillStatsigOverride: a,
              forceReinstall: a == null,
            }),
          ),
          serviceTier: h.serviceTierForRequest,
          shouldSendPermissionOverrides: f,
        }),
          e != null &&
            d(
              i,
              C.CODEX_ONBOARDING_WIZARD_PHASE_ROLE_PICKER,
              S.CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED,
            ),
          U(i, { hostId: t, projectRoot: r }, Q, `accepted`));
      } catch {
        i.get(x).danger(
          (0, Z.jsx)(v, {
            id: `home.ambientSuggestions.startError`,
            defaultMessage: `Unable to start this suggestion`,
            description: `Toast shown when launching an ambient suggestion fails`,
          }),
          { id: `ambient-suggestion-start-error` },
        );
      } finally {
        T(!1);
      }
    }
  };
  return (0, Z.jsxs)(`button`, {
    type: `button`,
    className: b(
      `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
      e || A || w
        ? `cursor-default`
        : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
      (A || w) && !e && `opacity-70`,
      !e && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
    ),
    disabled: A || w || e,
    onClick: () => {
      N();
    },
    children: [
      (0, Z.jsx)(`span`, {
        className: b(`flex h-5 shrink-0 items-center`, e && `opacity-30`),
        children: (0, Z.jsx)(oe, { "aria-hidden": !0, className: `size-5 shrink-0` }),
      }),
      (0, Z.jsxs)(`span`, {
        className: b(`flex w-full min-w-0 flex-col gap-1 text-base`, e && `opacity-30`),
        children: [
          (0, Z.jsx)(`span`, {
            className: `line-clamp-1 leading-[18px] text-token-text-primary`,
            children: E,
          }),
          (0, Z.jsx)(`span`, {
            className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
            children: k,
          }),
        ],
      }),
      e
        ? (0, Z.jsx)(M, {
            "aria-hidden": `true`,
            className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
          })
        : null,
    ],
  });
}
async function de({
  hostId: e,
  invalidateSkills: t,
  repoPath: n,
  skillId: r,
  skillStatsigOverride: i,
  forceReinstall: a,
}) {
  let o = await p(`install-recommended-skill`, {
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
    await s(`list-skills-for-host`, { forceReload: !0, hostId: e }),
    se.default.join(o.destination, `SKILL.md`)
  );
}
function fe(e) {
  return E({ name: `Setup Codex`, path: e });
}
function pe(e) {
  let t = e.filter((e) => e !== `default`);
  return t.length === 0
    ? null
    : `The user has already selected Setup Codex roles: ${t.join(`, `)}. Mark Personalize Codex complete, skip role selection, and use these roles for subsequent setup steps.`;
}
async function me({
  additionalDeveloperInstructions: e,
  agentMode: t,
  collaborationMode: n,
  hostId: r,
  onLocalConversationCreated: i,
  permissionProfileId: a,
  projectRoot: o,
  prompt: l,
  serviceTier: d,
  shouldSendPermissionOverrides: f,
}) {
  let p = [o],
    m = A(p),
    h = [{ type: `text`, text: l, text_elements: [] }],
    g = await k(p, { prompt: l }),
    _ = g.cwd ?? o;
  if (m && g.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: v } = await s(`read-config-for-host`, { hostId: r, includeLayers: !1, cwd: _ });
  await i(
    await s(`start-conversation`, {
      hostId: r,
      ...T({
        additionalDeveloperInstructions: e,
        input: h,
        workspaceRoots: g.workspaceRoots,
        cwd: _,
        fileAttachments: [],
        addedFiles: [],
        agentMode: t,
        permissionProfileId: a,
        shouldSendPermissionOverrides: f,
        model: null,
        serviceTier: d,
        reasoningEffort: null,
        collaborationMode: n,
        config: u(v),
        configOverrides: { [c]: !0 },
        ...(m
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: g.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
export { V as a, B as c, H as d, L as i, G as l, Q as n, R as o, z as r, W as s, ue as t, U as u };
//# sourceMappingURL=home-onboarding-assistant-tutorial-card.js.map
