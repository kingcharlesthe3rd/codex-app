import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { R as r, o as i, s as a, t as o } from "./app-scope.js";
import { ds as s } from "./app-server-manager-signals.js";
import { f as c, s as l } from "./vscode-api.js";
import "./isEqual.js";
import "./src-1.js";
import "./react-dom.js";
import { c as u, o as d } from "./lib.js";
import { B as f, U as p, c as m, z as h } from "./persisted-signal.js";
import { t as g } from "./clsx-Cir5-jBH.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as _ } from "./codex-avatar.js";
import { t as v } from "./button-DO-oxX3-.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import { t as y } from "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./tooltip.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./platform-BrML-86Y.js";
import "./marked.esm.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-model-settings.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import { r as b } from "./toast-signal.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./arrow-up.js";
import "./check-circle-filled.js";
import { t as x } from "./chevron.js";
import "./shiki-highlight-provider-gate.js";
import "./use-service-tier-settings.js";
import "./_baseEach-BPh-9Ri0.js";
import "./_baseOrderBy.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import "./route-scope.js";
import { n as S } from "./skill-utils.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./apps.js";
import "./info.js";
import "./x.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./recommended-skill-statsig-overrides.js";
import "./diff-view-mode.js";
import "./file-diff.js";
import "./terminal-C.js";
import { t as C } from "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./locale-resolver.js";
import "./json.js";
import "./folder.js";
import "./settings.cog.js";
import "./skills.js";
import "./use-register-command.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import { n as w } from "./use-skills-J.js";
import "./initial-route-atom.js";
import { n as T } from "./use-start-new-conversation-jDp-QANK.js";
import "./electron-menu-shortcuts.js";
import "./checkbox.js";
import "./minus.js";
import "./links.js";
import { a as E } from "./gpu-tearing-debug-settings.js";
import "./x-circle.js";
import "./folders.js";
import "./search.js";
import "./dropdown.js";
import "./popover.js";
import "./trash.js";
import "./format-relative-date-time.js";
import "./copy.js";
import "./plus.js";
import "./sortBy.js";
import "./laptop.js";
import "./service-tier-icons.js";
import "./use-enter-behavior.js";
import "./toggle.js";
import { t as D } from "./arrow-top-right.js";
import "./permissions-mode-visibility.js";
import { i as O } from "./settings-shared.js";
import { t as k } from "./settings-content-layout.js";
import { t as A } from "./avatar-overlay-analytics-Fl8-gIvy.js";
import { i as j, r as M } from "./custom-avatars-query.js";
import { t as N } from "./avatar-overlay-open-state-signal.js";
import "./alert-1.js";
import "./extension-info-DYf-Ibez.js";
import "./sun.js";
import { n as P } from "./settings-row.js";
import { n as F, t as I } from "./settings-group.js";
import "./external-agent-import-step.js";
import "./scroll-to-bottom-buton.js";
import "./onboarding-shell.js";
import "./hooks.js";
import "./hotkey-window-state.js";
import { t as L } from "./use-avatar-options.js";
import "./segmented-toggle.js";
import "./statsig-url-config.js";
import { t as R } from "./use-recommended-skills.js";
import "./open-in-targets-query.js";
import { n as z } from "./general-settings-1.js";
var B = e(t(), 1),
  V = r(),
  H = n();
function U(e) {
  let t = (0, V.c)(11),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = g(
        `flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border bg-token-bg-secondary`,
        o,
        r,
      )),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c = n?.id ?? `default`,
    l = n?.assetRef,
    u = a === `sm` ? `scale-[0.42]` : `scale-75`,
    d = n?.spritesheetUrl,
    f;
  t[3] !== l || t[4] !== u || t[5] !== d
    ? ((f = (0, H.jsx)(_, { assetRef: l, className: u, spritesheetUrl: d })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== s || t[8] !== c || t[9] !== f
      ? ((p = (0, H.jsx)(`div`, { className: s, "data-avatar-id": c, children: f })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
function W(e) {
  let t = (0, V.c)(21),
    { avatarDirectory: n } = e,
    r = i(o),
    a = u(),
    s;
  t[0] !== a || t[1] !== r
    ? ((s = () => {
        r.get(b).danger(
          a.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = a),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    f;
  t[3] === c
    ? (f = t[4])
    : ((f = (e) => {
        e.success || c();
      }),
      (t[3] = c),
      (t[4] = f));
  let p;
  t[5] !== c || t[6] !== f
    ? ((p = { onSuccess: f, onError: c }), (t[5] = c), (t[6] = f), (t[7] = p))
    : (p = t[7]);
  let { mutate: m } = l(`open-file`, p),
    h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, H.jsx)(d, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === n
    ? (g = t[10])
    : ((g = (0, H.jsx)(`span`, { className: `font-mono text-xs break-all`, children: n })),
      (t[9] = n),
      (t[10] = g));
  let _;
  t[11] !== n || t[12] !== m
    ? ((_ = () => {
        m({ path: n, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = n),
      (t[12] = m),
      (t[13] = _))
    : (_ = t[13]);
  let y, x;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, H.jsx)(d, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (x = (0, H.jsx)(D, { className: `icon-2xs` })),
      (t[14] = y),
      (t[15] = x))
    : ((y = t[14]), (x = t[15]));
  let S;
  t[16] === _
    ? (S = t[17])
    : ((S = (0, H.jsxs)(v, { color: `ghost`, onClick: _, size: `toolbar`, children: [y, x] })),
      (t[16] = _),
      (t[17] = S));
  let C;
  return (
    t[18] !== g || t[19] !== S
      ? ((C = (0, H.jsx)(P, { label: h, description: g, control: S })),
        (t[18] = g),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]),
    C
  );
}
function G(e) {
  let t = (0, V.c)(9),
    {
      avatarDirectory: n,
      avatarOptions: r,
      defaultExpanded: i,
      isCreatingCustomAvatar: a,
      isCustomAvatarLoadError: o,
      isLoadingCustomAvatars: s,
      onCreateCustomAvatar: c,
      onRefreshCustomAvatars: l,
    } = e,
    u = r === void 0 ? j : r,
    d = i === void 0 ? !1 : i,
    f = a === void 0 ? !1 : a,
    p = o === void 0 ? !1 : o,
    m = s === void 0 ? !1 : s,
    h;
  return (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== d ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== m ||
    t[6] !== c ||
    t[7] !== l
      ? ((h = (0, H.jsx)(C, {
          electron: !0,
          children: (0, H.jsx)(K, {
            avatarDirectory: n,
            avatarOptions: u,
            defaultExpanded: d,
            isCreatingCustomAvatar: f,
            isCustomAvatarLoadError: p,
            isLoadingCustomAvatars: m,
            onCreateCustomAvatar: c,
            onRefreshCustomAvatars: l,
          }),
        })),
        (t[0] = n),
        (t[1] = u),
        (t[2] = d),
        (t[3] = f),
        (t[4] = p),
        (t[5] = m),
        (t[6] = c),
        (t[7] = l),
        (t[8] = h))
      : (h = t[8]),
    h
  );
}
function K(e) {
  let t = (0, V.c)(56),
    {
      avatarDirectory: n,
      avatarOptions: r,
      defaultExpanded: i,
      isCreatingCustomAvatar: o,
      isCustomAvatarLoadError: s,
      isLoadingCustomAvatars: l,
      onCreateCustomAvatar: u,
      onRefreshCustomAvatars: _,
    } = e,
    b = a(N),
    S = a(m),
    C = (0, B.useId)(),
    [w, T] = (0, B.useState)(i),
    { selectedAvatar: E, setSelectedAvatarId: D } = M(r),
    O,
    k,
    j,
    P,
    L,
    R;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== b ||
    t[3] !== C ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== w ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== _ ||
    t[10] !== S ||
    t[11] !== E ||
    t[12] !== D
  ) {
    let e = r.filter(J),
      i = r.filter(q),
      a;
    t[19] === S
      ? (a = t[20])
      : ((a = (e, t) => {
          S.logProductEvent(
            f,
            A({ action: e, selectedAvatar: t, source: p.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[19] = S),
        (t[20] = a));
    let m = a,
      M;
    t[21] !== D || t[22] !== m
      ? ((M = (e) => {
          (D(e.id), m(h.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[21] = D),
        (t[22] = m),
        (t[23] = M))
      : (M = t[23]);
    let N = M;
    ((R = `flex flex-col gap-[var(--padding-panel)]`), (j = I), (k = I.Content), (O = F));
    let z = w ? `rounded-t-lg` : `rounded-lg`,
      B;
    t[24] === z
      ? (B = t[25])
      : ((B = g(
          `flex w-full cursor-interaction items-center justify-between gap-4 p-3 text-left hover:bg-token-list-hover-background`,
          z,
        )),
        (t[24] = z),
        (t[25] = B));
    let V;
    t[26] === w
      ? (V = t[27])
      : ((V = () => {
          T(!w);
        }),
        (t[26] = w),
        (t[27] = V));
    let U;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((U = (0, H.jsx)(`span`, {
          className: `min-w-0 text-sm text-token-text-primary`,
          children: (0, H.jsx)(d, {
            id: `settings.personalization.pets.title`,
            defaultMessage: `Pets`,
            description: `Heading above the pet picker in personalization settings`,
          }),
        })),
        (t[28] = U))
      : (U = t[28]);
    let G;
    t[29] !== s || t[30] !== E
      ? ((G = (0, H.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1`,
          children: [
            U,
            (0, H.jsx)(`span`, {
              className: `min-w-0 text-sm text-token-text-secondary`,
              children: s
                ? (0, H.jsx)(d, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  })
                : (0, H.jsx)(d, {
                    id: `settings.personalization.pets.current`,
                    defaultMessage: `{petName} selected`,
                    description: `Collapsed pet settings row summary`,
                    values: { petName: E.displayName },
                  }),
            }),
          ],
        })),
        (t[29] = s),
        (t[30] = E),
        (t[31] = G))
      : (G = t[31]);
    let K = w && `rotate-180`,
      X;
    t[32] === K
      ? (X = t[33])
      : ((X = g(
          `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
          K,
        )),
        (t[32] = K),
        (t[33] = X));
    let Z;
    (t[34] === X
      ? (Z = t[35])
      : ((Z = (0, H.jsx)(x, { className: X, "aria-hidden": !0 })), (t[34] = X), (t[35] = Z)),
      t[36] !== C || t[37] !== w || t[38] !== G || t[39] !== Z || t[40] !== B || t[41] !== V
        ? ((P = (0, H.jsxs)(`button`, {
            type: `button`,
            className: B,
            "aria-controls": C,
            "aria-expanded": w,
            onClick: V,
            children: [G, Z],
          })),
          (t[36] = C),
          (t[37] = w),
          (t[38] = G),
          (t[39] = Z),
          (t[40] = B),
          (t[41] = V),
          (t[42] = P))
        : (P = t[42]),
      (L = w
        ? (0, H.jsxs)(`div`, {
            id: C,
            className: `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `flex justify-end gap-2 p-3`,
                children: [
                  u
                    ? (0, H.jsx)(v, {
                        color: `secondary`,
                        loading: o,
                        onClick: () => {
                          (S.logProductEvent(
                            f,
                            A({
                              action: h.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED,
                              source: p.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
                              selectedAvatar: E,
                            }),
                          ),
                            u());
                        },
                        size: `toolbar`,
                        children: (0, H.jsx)(d, {
                          id: `settings.pets.custom.create.title`,
                          defaultMessage: `Create your own pet`,
                          description: `Button label for creating a custom Codex pet from settings`,
                        }),
                      })
                    : null,
                  _
                    ? (0, H.jsx)(v, {
                        color: `secondary`,
                        onClick: _,
                        size: `toolbar`,
                        children: (0, H.jsx)(d, {
                          id: `settings.pets.refresh`,
                          defaultMessage: `Refresh`,
                          description: `Button label to refresh custom pets from local manifests`,
                        }),
                      })
                    : null,
                  (0, H.jsx)(v, {
                    color: `secondary`,
                    onClick: () => {
                      (m(
                        b
                          ? h.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                          : h.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
                        E,
                      ),
                        c.dispatchMessage(`avatar-overlay-open`, {}));
                    },
                    size: `toolbar`,
                    children: b
                      ? (0, H.jsx)(d, {
                          id: `settings.personalization.pets.tuckAwayPet`,
                          defaultMessage: `Tuck Away Pet`,
                          description: `Button that closes the floating pet overlay`,
                        })
                      : (0, H.jsx)(d, {
                          id: `settings.personalization.pets.openPet`,
                          defaultMessage: `Wake Pet`,
                          description: `Button that opens the floating pet overlay`,
                        }),
                  }),
                ],
              }),
              l
                ? (0, H.jsxs)(`div`, {
                    className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                    children: [
                      (0, H.jsx)(y, { className: `icon-xs` }),
                      (0, H.jsx)(d, {
                        id: `settings.pets.loadingCustom`,
                        defaultMessage: `Loading custom pets`,
                        description: `Message shown while loading custom pet manifests`,
                      }),
                    ],
                  })
                : null,
              s
                ? (0, H.jsx)(`div`, {
                    className: `p-3 text-sm text-token-text-secondary`,
                    children: (0, H.jsx)(d, {
                      id: `settings.pets.loadCustomError`,
                      defaultMessage: `Unable to load custom pets`,
                      description: `Message shown when custom pet manifests fail to load`,
                    }),
                  })
                : null,
              e.map((e) =>
                (0, H.jsx)(Y, { avatar: e, isSelected: e.id === E.id, onSelectAvatar: N }, e.id),
              ),
              n == null ? null : (0, H.jsx)(W, { avatarDirectory: n }),
              i.map((e) =>
                (0, H.jsx)(Y, { avatar: e, isSelected: e.id === E.id, onSelectAvatar: N }, e.id),
              ),
            ],
          })
        : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = b),
      (t[3] = C),
      (t[4] = o),
      (t[5] = s),
      (t[6] = w),
      (t[7] = l),
      (t[8] = u),
      (t[9] = _),
      (t[10] = S),
      (t[11] = E),
      (t[12] = D),
      (t[13] = O),
      (t[14] = k),
      (t[15] = j),
      (t[16] = P),
      (t[17] = L),
      (t[18] = R));
  } else ((O = t[13]), (k = t[14]), (j = t[15]), (P = t[16]), (L = t[17]), (R = t[18]));
  let z;
  t[43] !== O || t[44] !== P || t[45] !== L
    ? ((z = (0, H.jsxs)(O, { children: [P, L] })),
      (t[43] = O),
      (t[44] = P),
      (t[45] = L),
      (t[46] = z))
    : (z = t[46]);
  let U;
  t[47] !== k || t[48] !== z
    ? ((U = (0, H.jsx)(k, { children: z })), (t[47] = k), (t[48] = z), (t[49] = U))
    : (U = t[49]);
  let G;
  t[50] !== j || t[51] !== U
    ? ((G = (0, H.jsx)(j, { children: U })), (t[50] = j), (t[51] = U), (t[52] = G))
    : (G = t[52]);
  let K;
  return (
    t[53] !== R || t[54] !== G
      ? ((K = (0, H.jsx)(`section`, { className: R, children: G })),
        (t[53] = R),
        (t[54] = G),
        (t[55] = K))
      : (K = t[55]),
    K
  );
}
function q(e) {
  return e.id.startsWith(`custom:`);
}
function J(e) {
  return !e.id.startsWith(`custom:`);
}
function Y(e) {
  let t = (0, V.c)(11),
    { avatar: n, isSelected: r, onSelectAvatar: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, H.jsx)(U, { avatar: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = r
        ? (0, H.jsx)(v, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, H.jsx)(d, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, H.jsx)(v, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, H.jsx)(d, {
              id: `settings.personalization.avatars.select`,
              defaultMessage: `Select`,
              description: `Button label to select an avatar`,
            }),
          })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o))
    : (o = t[5]);
  let s;
  return (
    t[6] !== n.description || t[7] !== n.displayName || t[8] !== a || t[9] !== o
      ? ((s = (0, H.jsx)(P, {
          icon: a,
          label: n.displayName,
          description: n.description,
          control: o,
        })),
        (t[6] = n.description),
        (t[7] = n.displayName),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
async function X({
  ensureSkillByName: e,
  fallbackSkillPath: t,
  findSkillByName: n,
  forceReloadSkills: r,
  installSkill: i,
  skillName: a,
}) {
  let o = n(a);
  if (o != null) return S({ name: o.name, path: o.path });
  try {
    let n = await e(a);
    if (n == null) return Z(a, t);
    let o = await i({ skill: n });
    return !o.success || o.destination == null
      ? Z(a, t)
      : (await r?.(), S({ name: n.name, path: E(o.destination, `SKILL.md`) }));
  } catch {
    return Z(a, t);
  }
}
function Z(e, t) {
  return S({ name: e, path: t });
}
var Q = `hatch-pet`,
  $ = `https://github.com/openai/skills/blob/main/skills/.curated/hatch-pet/SKILL.md`;
async function ee({
  ensureSkillByName: e,
  findSkillByName: t,
  forceReloadSkills: n,
  installSkill: r,
}) {
  return `${await X({ ensureSkillByName: e, fallbackSkillPath: $, findSkillByName: t, forceReloadSkills: n, installSkill: r, skillName: Q })} create a pet based on what you know about me`;
}
function te(e) {
  let t = (0, V.c)(2),
    { defaultExpanded: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, H.jsx)(C, { electron: !0, children: (0, H.jsx)(ne, { defaultExpanded: n }) })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ne({ defaultExpanded: e }) {
  let [t, n] = (0, B.useState)(!1),
    { avatarDirectory: r, avatarOptions: i, isError: a, isLoading: o, refetch: c } = L(),
    l = T(),
    { findSkillByName: u, forceReload: d } = w(void 0, s),
    { ensureSkillByName: f, installSkill: p } = R({ hostId: s, loadOnMount: !1 }),
    m = async () => {
      n(!0);
      try {
        l({
          prefillPrompt: await ee({
            ensureSkillByName: f,
            findSkillByName: u,
            forceReloadSkills: d,
            installSkill: p,
          }),
        });
      } finally {
        n(!1);
      }
    };
  return (0, H.jsx)(G, {
    avatarDirectory: r,
    avatarOptions: i,
    defaultExpanded: e,
    isCreatingCustomAvatar: t,
    isCustomAvatarLoadError: a,
    isLoadingCustomAvatars: o,
    onCreateCustomAvatar: () => {
      m();
    },
    onRefreshCustomAvatars: () => {
      c();
    },
  });
}
function re() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsxs)(k, {
          title: (0, H.jsx)(O, { slug: `appearance` }),
          children: [(0, H.jsx)(z, {}), (0, H.jsx)(te, {})],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { re as AppearanceSettings };
//# sourceMappingURL=appearance-settings.js.map
