import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { o as r, s as i, t as a, z as o } from "./app-scope.js";
import { zs as s } from "./app-server-manager-signals.js";
import { f as c, s as l } from "./vscode-api.js";
import "./isEqual.js";
import "./src-2.js";
import "./react-dom.js";
import { l as u, s as d } from "./lib.js";
import "./persisted-signal.js";
import { t as f } from "./clsx-Cir5-jBH.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as p } from "./codex-avatar.js";
import { t as m } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-2.js";
import { t as h } from "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./tooltip.js";
import { r as g } from "./toast-signal.js";
import "./arrow-up.js";
import "./x.js";
import "./mime-types.js";
import { H as _, K as v, U as y, r as b } from "./product-logger.js";
import "./format-skill-title.js";
import "./rpc-Hf-fxjh7.js";
import "./statsig.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import { t as x } from "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./dropdown.js";
import "./search.js";
import "./modal-controller-state.js";
import "./dialog-layout-B.js";
import { t as S } from "./with-window.js";
import "./file.js";
import "./folder.js";
import "./toggle.js";
import "./experimental-features-queries.js";
import "./use-in-app-browser-use-availability.js";
import "./plus.js";
import "./app-server-manager-hooks.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./use-platform.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import { n as C } from "./skill-utils.js";
import "./apps-2.js";
import "./use-model-settings.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import { t as w } from "./chevron.js";
import "./shiki-highlight-provider-gate.js";
import "./use-service-tier-settings.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./use-is-dark.js";
import "./route-scope.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./info-1.js";
import "./projectless-thread.js";
import "./check-circle-filled.js";
import "./recommended-skill-statsig-overrides.js";
import "./diff-view-mode.js";
import "./file-diff.js";
import "./terminal.js";
import "./use-resolved-theme-variant.js";
import "./locale-resolver.js";
import "./json.js";
import "./settings.cog.js";
import "./skills.js";
import "./command-menu-state.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-register-command-m.js";
import { n as T } from "./use-skills.js";
import "./initial-route-atom.js";
import { n as E } from "./use-start-new-conversation-C--5hYOa.js";
import "./electron-menu-shortcuts.js";
import "./checkbox.js";
import "./minus.js";
import "./links-p.js";
import { a as D } from "./gpu-tearing-debug-settings.js";
import "./x-circle.js";
import "./folders.js";
import "./popover.js";
import "./trash.js";
import "./format-relative-date-time.js";
import "./copy.js";
import "./sortBy.js";
import "./laptop.js";
import "./service-tier-icons.js";
import "./use-enter-behavior.js";
import { t as O } from "./arrow-top-right.js";
import "./permissions-mode-visibility.js";
import { i as k } from "./settings-shared.js";
import { t as A } from "./settings-content-layout.js";
import { t as j } from "./avatar-overlay-analytics.js";
import { a as M, o as N, t as P } from "./custom-avatars-query.js";
import { t as F } from "./avatar-overlay-open-state-signal.js";
import "./alert.js";
import "./extension-info.js";
import "./sun.js";
import { r as I } from "./settings-row.js";
import { t as L } from "./settings-surface.js";
import "./external-agent-import-step.js";
import "./scroll-to-bottom-buton.js";
import "./onboarding-shell-DTxS-cwL.js";
import "./hooks.js";
import { t as R } from "./settings-group.js";
import "./hotkey-window-state.js";
import { t as z } from "./use-avatar-options.js";
import "./segmented-toggle.js";
import "./statsig-url-config.js";
import { t as B } from "./use-recommended-skills-Zw-1OGFJ.js";
import "./open-in-targets-query.js";
import { n as V } from "./general-settings-2.js";
var H = e(t(), 1),
  U = o(),
  W = n();
function G(e) {
  let t = (0, U.c)(11),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = f(
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
    m;
  t[3] !== l || t[4] !== u || t[5] !== d
    ? ((m = (0, W.jsx)(p, { assetRef: l, className: u, spritesheetUrl: d })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = m))
    : (m = t[6]);
  let h;
  return (
    t[7] !== s || t[8] !== c || t[9] !== m
      ? ((h = (0, W.jsx)(`div`, { className: s, "data-avatar-id": c, children: m })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = m),
        (t[10] = h))
      : (h = t[10]),
    h
  );
}
function K(e) {
  let t = (0, U.c)(21),
    { avatarDirectory: n } = e,
    i = r(a),
    o = u(),
    s;
  t[0] !== o || t[1] !== i
    ? ((s = () => {
        i.get(g).danger(
          o.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = o),
      (t[1] = i),
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
  let { mutate: h } = l(`open-file`, p),
    _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, W.jsx)(d, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === n
    ? (v = t[10])
    : ((v = (0, W.jsx)(`span`, { className: `font-mono text-xs break-all`, children: n })),
      (t[9] = n),
      (t[10] = v));
  let y;
  t[11] !== n || t[12] !== h
    ? ((y = () => {
        h({ path: n, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = n),
      (t[12] = h),
      (t[13] = y))
    : (y = t[13]);
  let b, x;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, W.jsx)(d, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (x = (0, W.jsx)(O, { className: `icon-2xs` })),
      (t[14] = b),
      (t[15] = x))
    : ((b = t[14]), (x = t[15]));
  let S;
  t[16] === y
    ? (S = t[17])
    : ((S = (0, W.jsxs)(m, { color: `ghost`, onClick: y, size: `toolbar`, children: [b, x] })),
      (t[16] = y),
      (t[17] = S));
  let C;
  return (
    t[18] !== v || t[19] !== S
      ? ((C = (0, W.jsx)(I, { label: _, description: v, control: S })),
        (t[18] = v),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]),
    C
  );
}
function q(e) {
  let t = (0, U.c)(9),
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
    u = r === void 0 ? N : r,
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
      ? ((h = (0, W.jsx)(S, {
          electron: !0,
          children: (0, W.jsx)(J, {
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
function J(e) {
  let t = (0, U.c)(56),
    {
      avatarDirectory: n,
      avatarOptions: r,
      defaultExpanded: a,
      isCreatingCustomAvatar: o,
      isCustomAvatarLoadError: s,
      isLoadingCustomAvatars: l,
      onCreateCustomAvatar: u,
      onRefreshCustomAvatars: p,
    } = e,
    g = i(F),
    x = i(b),
    S = (0, H.useId)(),
    [C, T] = (0, H.useState)(a),
    { selectedAvatar: E, setSelectedAvatarId: D } = M(r),
    O,
    k,
    A,
    N,
    P,
    I;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== g ||
    t[3] !== S ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== C ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== p ||
    t[10] !== x ||
    t[11] !== E ||
    t[12] !== D
  ) {
    let e = r.filter(X),
      i = r.filter(Y),
      a;
    t[19] === x
      ? (a = t[20])
      : ((a = (e, t) => {
          x.logProductEvent(
            y,
            j({ action: e, selectedAvatar: t, source: v.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[19] = x),
        (t[20] = a));
    let b = a,
      M;
    t[21] !== D || t[22] !== b
      ? ((M = (e) => {
          (D(e.id), b(_.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[21] = D),
        (t[22] = b),
        (t[23] = M))
      : (M = t[23]);
    let F = M;
    ((I = `flex flex-col gap-[var(--padding-panel)]`), (A = R), (k = R.Content), (O = L));
    let z = C ? `rounded-t-lg` : `rounded-lg`,
      B;
    t[24] === z
      ? (B = t[25])
      : ((B = f(
          `flex w-full cursor-interaction items-center justify-between gap-4 p-3 text-left hover:bg-token-list-hover-background`,
          z,
        )),
        (t[24] = z),
        (t[25] = B));
    let V;
    t[26] === C
      ? (V = t[27])
      : ((V = () => {
          T(!C);
        }),
        (t[26] = C),
        (t[27] = V));
    let H;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = (0, W.jsx)(`span`, {
          className: `min-w-0 text-sm text-token-text-primary`,
          children: (0, W.jsx)(d, {
            id: `settings.personalization.pets.title`,
            defaultMessage: `Pets`,
            description: `Heading above the pet picker in personalization settings`,
          }),
        })),
        (t[28] = H))
      : (H = t[28]);
    let U;
    t[29] !== s || t[30] !== E
      ? ((U = (0, W.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1`,
          children: [
            H,
            (0, W.jsx)(`span`, {
              className: `min-w-0 text-sm text-token-text-secondary`,
              children: s
                ? (0, W.jsx)(d, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  })
                : (0, W.jsx)(d, {
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
        (t[31] = U))
      : (U = t[31]);
    let G = C && `rotate-180`,
      q;
    t[32] === G
      ? (q = t[33])
      : ((q = f(
          `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
          G,
        )),
        (t[32] = G),
        (t[33] = q));
    let J;
    (t[34] === q
      ? (J = t[35])
      : ((J = (0, W.jsx)(w, { className: q, "aria-hidden": !0 })), (t[34] = q), (t[35] = J)),
      t[36] !== S || t[37] !== C || t[38] !== U || t[39] !== J || t[40] !== B || t[41] !== V
        ? ((N = (0, W.jsxs)(`button`, {
            type: `button`,
            className: B,
            "aria-controls": S,
            "aria-expanded": C,
            onClick: V,
            children: [U, J],
          })),
          (t[36] = S),
          (t[37] = C),
          (t[38] = U),
          (t[39] = J),
          (t[40] = B),
          (t[41] = V),
          (t[42] = N))
        : (N = t[42]),
      (P = C
        ? (0, W.jsxs)(`div`, {
            id: S,
            className: `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`,
            children: [
              (0, W.jsxs)(`div`, {
                className: `flex justify-end gap-2 p-3`,
                children: [
                  u
                    ? (0, W.jsx)(m, {
                        color: `secondary`,
                        loading: o,
                        onClick: () => {
                          (x.logProductEvent(
                            y,
                            j({
                              action: _.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED,
                              source: v.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
                              selectedAvatar: E,
                            }),
                          ),
                            u());
                        },
                        size: `toolbar`,
                        children: (0, W.jsx)(d, {
                          id: `settings.pets.custom.create.title`,
                          defaultMessage: `Create your own pet`,
                          description: `Button label for creating a custom Codex pet from settings`,
                        }),
                      })
                    : null,
                  p
                    ? (0, W.jsx)(m, {
                        color: `secondary`,
                        onClick: p,
                        size: `toolbar`,
                        children: (0, W.jsx)(d, {
                          id: `settings.pets.refresh`,
                          defaultMessage: `Refresh`,
                          description: `Button label to refresh custom pets from local manifests`,
                        }),
                      })
                    : null,
                  (0, W.jsx)(m, {
                    color: `secondary`,
                    onClick: () => {
                      (b(
                        g
                          ? _.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                          : _.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
                        E,
                      ),
                        c.dispatchMessage(`avatar-overlay-open`, {}));
                    },
                    size: `toolbar`,
                    children: g
                      ? (0, W.jsx)(d, {
                          id: `settings.personalization.pets.tuckAwayPet`,
                          defaultMessage: `Tuck Away Pet`,
                          description: `Button that closes the floating pet overlay`,
                        })
                      : (0, W.jsx)(d, {
                          id: `settings.personalization.pets.openPet`,
                          defaultMessage: `Wake Pet`,
                          description: `Button that opens the floating pet overlay`,
                        }),
                  }),
                ],
              }),
              l
                ? (0, W.jsxs)(`div`, {
                    className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                    children: [
                      (0, W.jsx)(h, { className: `icon-xs` }),
                      (0, W.jsx)(d, {
                        id: `settings.pets.loadingCustom`,
                        defaultMessage: `Loading custom pets`,
                        description: `Message shown while loading custom pet manifests`,
                      }),
                    ],
                  })
                : null,
              s
                ? (0, W.jsx)(`div`, {
                    className: `p-3 text-sm text-token-text-secondary`,
                    children: (0, W.jsx)(d, {
                      id: `settings.pets.loadCustomError`,
                      defaultMessage: `Unable to load custom pets`,
                      description: `Message shown when custom pet manifests fail to load`,
                    }),
                  })
                : null,
              e.map((e) =>
                (0, W.jsx)(Z, { avatar: e, isSelected: e.id === E.id, onSelectAvatar: F }, e.id),
              ),
              n == null ? null : (0, W.jsx)(K, { avatarDirectory: n }),
              i.map((e) =>
                (0, W.jsx)(Z, { avatar: e, isSelected: e.id === E.id, onSelectAvatar: F }, e.id),
              ),
            ],
          })
        : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = g),
      (t[3] = S),
      (t[4] = o),
      (t[5] = s),
      (t[6] = C),
      (t[7] = l),
      (t[8] = u),
      (t[9] = p),
      (t[10] = x),
      (t[11] = E),
      (t[12] = D),
      (t[13] = O),
      (t[14] = k),
      (t[15] = A),
      (t[16] = N),
      (t[17] = P),
      (t[18] = I));
  } else ((O = t[13]), (k = t[14]), (A = t[15]), (N = t[16]), (P = t[17]), (I = t[18]));
  let z;
  t[43] !== O || t[44] !== N || t[45] !== P
    ? ((z = (0, W.jsxs)(O, { children: [N, P] })),
      (t[43] = O),
      (t[44] = N),
      (t[45] = P),
      (t[46] = z))
    : (z = t[46]);
  let B;
  t[47] !== k || t[48] !== z
    ? ((B = (0, W.jsx)(k, { children: z })), (t[47] = k), (t[48] = z), (t[49] = B))
    : (B = t[49]);
  let V;
  t[50] !== A || t[51] !== B
    ? ((V = (0, W.jsx)(A, { children: B })), (t[50] = A), (t[51] = B), (t[52] = V))
    : (V = t[52]);
  let G;
  return (
    t[53] !== I || t[54] !== V
      ? ((G = (0, W.jsx)(`section`, { className: I, children: V })),
        (t[53] = I),
        (t[54] = V),
        (t[55] = G))
      : (G = t[55]),
    G
  );
}
function Y(e) {
  return e.id.startsWith(`custom:`);
}
function X(e) {
  return !e.id.startsWith(`custom:`);
}
function Z(e) {
  let t = (0, U.c)(11),
    { avatar: n, isSelected: r, onSelectAvatar: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, W.jsx)(G, { avatar: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = r
        ? (0, W.jsx)(m, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, W.jsx)(d, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, W.jsx)(m, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, W.jsx)(d, {
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
      ? ((s = (0, W.jsx)(I, {
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
async function Q({
  ensureSkillByName: e,
  fallbackSkillPath: t,
  findSkillByName: n,
  forceReloadSkills: r,
  installSkill: i,
  skillName: a,
}) {
  let o = n(a);
  if (o != null) return C({ name: o.name, path: o.path });
  try {
    let n = await e(a);
    if (n == null) return $(a, t);
    let o = await i({ skill: n });
    return !o.success || o.destination == null
      ? $(a, t)
      : (await r?.(), C({ name: n.name, path: D(o.destination, `SKILL.md`) }));
  } catch {
    return $(a, t);
  }
}
function $(e, t) {
  return C({ name: e, path: t });
}
var ee = `hatch-pet`,
  te = `https://github.com/openai/skills/blob/main/skills/.curated/hatch-pet/SKILL.md`;
async function ne({
  ensureSkillByName: e,
  findSkillByName: t,
  forceReloadSkills: n,
  installSkill: r,
}) {
  return `${await Q({ ensureSkillByName: e, fallbackSkillPath: te, findSkillByName: t, forceReloadSkills: n, installSkill: r, skillName: ee })} create a pet based on what you know about me`;
}
function re(e) {
  let t = (0, U.c)(2),
    { defaultExpanded: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, W.jsx)(S, { electron: !0, children: (0, W.jsx)(ie, { defaultExpanded: n }) })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ie({ defaultExpanded: e }) {
  let [t, n] = (0, H.useState)(!1),
    { avatarDirectory: r, avatarOptions: i, isError: a, isLoading: o } = z(),
    c = x(),
    l = E(),
    { findSkillByName: u, forceReload: d } = T(void 0, s),
    { ensureSkillByName: f, installSkill: p } = B({ hostId: s, loadOnMount: !1 }),
    m = async () => {
      n(!0);
      try {
        l({
          prefillPrompt: await ne({
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
  return (0, W.jsx)(q, {
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
      c(P);
    },
  });
}
function ae() {
  let e = (0, U.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsxs)(A, {
          title: (0, W.jsx)(k, { slug: `appearance` }),
          children: [(0, W.jsx)(V, {}), (0, W.jsx)(re, {})],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { ae as AppearanceSettings };
//# sourceMappingURL=appearance-settings.js.map
