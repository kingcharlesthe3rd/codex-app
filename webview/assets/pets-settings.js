import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, o as i, s as a, t as o } from "./app-scope-CWE-zIhQ.js";
import { r as s } from "./use-host-config.js";
import "./thread-context-inputs.js";
import { f as c, s as l } from "./vscode-api.js";
import "./isEqual.js";
import "./src.js";
import "./react-dom.js";
import { l as u, s as d } from "./lib-1.js";
import { t as f } from "./clsx.js";
import { t as p } from "./codex-avatar-BvRO-FvR.js";
import { t as m } from "./button-oF-qgtAS.js";
import "./setting-storage.js";
import "./reduced-motion-preference-BFM-v_UB.js";
import "./use-reduced-motion-1.js";
import { t as h } from "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./use-stable-callback.js";
import "./tooltip-B.js";
import { r as g } from "./toast-signal.js";
import "./x.js";
import "./rpc.js";
import "./statsig.js";
import "./request.js";
import "./chevron.js";
import "./markdown-to-search-text.js";
import "./marked.esm.js";
import { G as _, K as v, Y as y, r as b } from "./product-logger.js";
import "./parse-directives.js";
import "./platform.js";
import "./persisted-signal.js";
import { t as x } from "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./sidebar-signals.js";
import "./use-global-state.js";
import "./remote-projects.js";
import "./_baseEach.js";
import { n as S } from "./skill-utils.js";
import "./use-permissions-mode.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./projectless-thread.js";
import "./uniq.js";
import "./recommended-skill-statsig-overrides.js";
import "./git-availability-query.js";
import { t as C } from "./with-window.js";
import "./sidebar-thread-keys.js";
import "./folder.js";
import "./command-menu-state.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-register-command-T-86rz-c.js";
import { n as w } from "./use-skills.js";
import "./initial-route-atom.js";
import { n as T } from "./use-start-new-conversation.js";
import "./links.js";
import { t as E } from "./arrow-top-right.js";
import { i as D } from "./settings-shared.js";
import { t as O } from "./settings-content-layout.js";
import { t as k } from "./avatar-overlay-analytics.js";
import { a as A, o as j, t as M } from "./custom-avatars-query.js";
import { t as N } from "./avatar-overlay-open-state-signal.js";
import { r as P } from "./settings-row.js";
import { t as F } from "./settings-surface.js";
import { t as I } from "./settings-group.js";
import { n as L } from "./external-agent-config-paths.js";
import { t as R } from "./use-avatar-options.js";
import { t as z } from "./use-recommended-skills-Dpf-Uwom.js";
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
    ? ((m = (0, H.jsx)(p, { assetRef: l, className: u, spritesheetUrl: d })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = m))
    : (m = t[6]);
  let h;
  return (
    t[7] !== s || t[8] !== c || t[9] !== m
      ? ((h = (0, H.jsx)(`div`, { className: s, "data-avatar-id": c, children: m })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = m),
        (t[10] = h))
      : (h = t[10]),
    h
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
        r.get(g).danger(
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
  let { mutate: h } = l(`open-file`, p),
    _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, H.jsx)(d, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === n
    ? (v = t[10])
    : ((v = (0, H.jsx)(`span`, { className: `font-mono text-xs break-all`, children: n })),
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
    ? ((b = (0, H.jsx)(d, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (x = (0, H.jsx)(E, { className: `icon-2xs` })),
      (t[14] = b),
      (t[15] = x))
    : ((b = t[14]), (x = t[15]));
  let S;
  t[16] === y
    ? (S = t[17])
    : ((S = (0, H.jsxs)(m, { color: `ghost`, onClick: y, size: `toolbar`, children: [b, x] })),
      (t[16] = y),
      (t[17] = S));
  let C;
  return (
    t[18] !== v || t[19] !== S
      ? ((C = (0, H.jsx)(P, { label: _, description: v, control: S })),
        (t[18] = v),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]),
    C
  );
}
function G(e) {
  let t = (0, V.c)(8),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
    } = e,
    l = r === void 0 ? j : r,
    u = i === void 0 ? !1 : i,
    d = a === void 0 ? !1 : a,
    f = o === void 0 ? !1 : o,
    p;
  return (
    t[0] !== n || t[1] !== l || t[2] !== u || t[3] !== d || t[4] !== f || t[5] !== s || t[6] !== c
      ? ((p = (0, H.jsx)(C, {
          electron: !0,
          children: (0, H.jsx)(K, {
            avatarDirectory: n,
            avatarOptions: l,
            isCreatingCustomAvatar: u,
            isCustomAvatarLoadError: d,
            isLoadingCustomAvatars: f,
            onCreateCustomAvatar: s,
            onRefreshCustomAvatars: c,
          }),
        })),
        (t[0] = n),
        (t[1] = l),
        (t[2] = u),
        (t[3] = d),
        (t[4] = f),
        (t[5] = s),
        (t[6] = c),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function K(e) {
  let t = (0, V.c)(79),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: o,
      isLoadingCustomAvatars: s,
      onCreateCustomAvatar: l,
      onRefreshCustomAvatars: u,
    } = e,
    f = a(N),
    p = a(b),
    { selectedAvatar: g, setSelectedAvatarId: x } = A(r),
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    j,
    M,
    P,
    L;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== f ||
    t[3] !== i ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== l ||
    t[7] !== u ||
    t[8] !== p ||
    t[9] !== g ||
    t[10] !== x
  ) {
    let e = r.filter(J),
      a = r.filter(q),
      b;
    t[22] === p
      ? (b = t[23])
      : ((b = (e, t) => {
          p.logProductEvent(
            v,
            k({ action: e, selectedAvatar: t, source: y.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[22] = p),
        (t[23] = b));
    let A = b,
      N;
    t[24] !== x || t[25] !== A
      ? ((N = (e) => {
          (x(e.id), A(_.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[24] = x),
        (t[25] = A),
        (t[26] = N))
      : (N = t[26]);
    let R = N;
    ((L = `flex flex-col gap-[var(--padding-panel)]`),
      (w = I),
      (C = I.Content),
      (S = F),
      (T = `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`));
    let z;
    t[27] !== i || t[28] !== l || t[29] !== g || t[30] !== A
      ? ((z = l
          ? (0, H.jsx)(m, {
              color: `secondary`,
              loading: i,
              onClick: () => {
                (A(_.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, g), l());
              },
              size: `toolbar`,
              children: (0, H.jsx)(d, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create your own pet`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (t[27] = i),
        (t[28] = l),
        (t[29] = g),
        (t[30] = A),
        (t[31] = z))
      : (z = t[31]);
    let B;
    t[32] === u
      ? (B = t[33])
      : ((B = u
          ? (0, H.jsx)(m, {
              color: `secondary`,
              onClick: u,
              size: `toolbar`,
              children: (0, H.jsx)(d, {
                id: `settings.pets.refresh`,
                defaultMessage: `Refresh`,
                description: `Button label to refresh custom pets from local manifests`,
              }),
            })
          : null),
        (t[32] = u),
        (t[33] = B));
    let V;
    t[34] !== f || t[35] !== g || t[36] !== A
      ? ((V = () => {
          (A(
            f
              ? _.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : _.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            g,
          ),
            c.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (t[34] = f),
        (t[35] = g),
        (t[36] = A),
        (t[37] = V))
      : (V = t[37]);
    let U;
    t[38] === f
      ? (U = t[39])
      : ((U = f
          ? (0, H.jsx)(d, {
              id: `settings.personalization.pets.tuckAwayPet`,
              defaultMessage: `Tuck Away Pet`,
              description: `Button that closes the floating pet overlay`,
            })
          : (0, H.jsx)(d, {
              id: `settings.personalization.pets.openPet`,
              defaultMessage: `Wake Pet`,
              description: `Button that opens the floating pet overlay`,
            })),
        (t[38] = f),
        (t[39] = U));
    let G;
    (t[40] !== V || t[41] !== U
      ? ((G = (0, H.jsx)(m, { color: `secondary`, onClick: V, size: `toolbar`, children: U })),
        (t[40] = V),
        (t[41] = U),
        (t[42] = G))
      : (G = t[42]),
      t[43] !== z || t[44] !== B || t[45] !== G
        ? ((E = (0, H.jsxs)(`div`, {
            className: `flex justify-end gap-2 p-3`,
            children: [z, B, G],
          })),
          (t[43] = z),
          (t[44] = B),
          (t[45] = G),
          (t[46] = E))
        : (E = t[46]),
      t[47] === s
        ? (D = t[48])
        : ((D = s
            ? (0, H.jsxs)(`div`, {
                className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, H.jsx)(h, { className: `icon-xs` }),
                  (0, H.jsx)(d, {
                    id: `settings.pets.loadingCustom`,
                    defaultMessage: `Loading custom pets`,
                    description: `Message shown while loading custom pet manifests`,
                  }),
                ],
              })
            : null),
          (t[47] = s),
          (t[48] = D)),
      t[49] === o
        ? (O = t[50])
        : ((O = o
            ? (0, H.jsx)(`div`, {
                className: `p-3 text-sm text-token-text-secondary`,
                children: (0, H.jsx)(d, {
                  id: `settings.pets.loadCustomError`,
                  defaultMessage: `Unable to load custom pets`,
                  description: `Message shown when custom pet manifests fail to load`,
                }),
              })
            : null),
          (t[49] = o),
          (t[50] = O)));
    let K;
    (t[51] !== R || t[52] !== g
      ? ((K = (e) =>
          (0, H.jsx)(Y, { avatar: e, isSelected: e.id === g.id, onSelectAvatar: R }, e.id)),
        (t[51] = R),
        (t[52] = g),
        (t[53] = K))
      : (K = t[53]),
      (j = e.map(K)),
      t[54] === n
        ? (M = t[55])
        : ((M = n == null ? null : (0, H.jsx)(W, { avatarDirectory: n })),
          (t[54] = n),
          (t[55] = M)));
    let X;
    (t[56] !== R || t[57] !== g
      ? ((X = (e) =>
          (0, H.jsx)(Y, { avatar: e, isSelected: e.id === g.id, onSelectAvatar: R }, e.id)),
        (t[56] = R),
        (t[57] = g),
        (t[58] = X))
      : (X = t[58]),
      (P = a.map(X)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = f),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = l),
      (t[7] = u),
      (t[8] = p),
      (t[9] = g),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w),
      (t[14] = T),
      (t[15] = E),
      (t[16] = D),
      (t[17] = O),
      (t[18] = j),
      (t[19] = M),
      (t[20] = P),
      (t[21] = L));
  } else
    ((S = t[11]),
      (C = t[12]),
      (w = t[13]),
      (T = t[14]),
      (E = t[15]),
      (D = t[16]),
      (O = t[17]),
      (j = t[18]),
      (M = t[19]),
      (P = t[20]),
      (L = t[21]));
  let R;
  t[59] !== T ||
  t[60] !== E ||
  t[61] !== D ||
  t[62] !== O ||
  t[63] !== j ||
  t[64] !== M ||
  t[65] !== P
    ? ((R = (0, H.jsxs)(`div`, { className: T, children: [E, D, O, j, M, P] })),
      (t[59] = T),
      (t[60] = E),
      (t[61] = D),
      (t[62] = O),
      (t[63] = j),
      (t[64] = M),
      (t[65] = P),
      (t[66] = R))
    : (R = t[66]);
  let z;
  t[67] !== S || t[68] !== R
    ? ((z = (0, H.jsx)(S, { children: R })), (t[67] = S), (t[68] = R), (t[69] = z))
    : (z = t[69]);
  let B;
  t[70] !== C || t[71] !== z
    ? ((B = (0, H.jsx)(C, { children: z })), (t[70] = C), (t[71] = z), (t[72] = B))
    : (B = t[72]);
  let U;
  t[73] !== w || t[74] !== B
    ? ((U = (0, H.jsx)(w, { children: B })), (t[73] = w), (t[74] = B), (t[75] = U))
    : (U = t[75]);
  let G;
  return (
    t[76] !== U || t[77] !== L
      ? ((G = (0, H.jsx)(`section`, { className: L, children: U })),
        (t[76] = U),
        (t[77] = L),
        (t[78] = G))
      : (G = t[78]),
    G
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
        ? (0, H.jsx)(m, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, H.jsx)(d, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, H.jsx)(m, {
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
      : (await r?.(), S({ name: n.name, path: L(o.destination, `SKILL.md`) }));
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
function te() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(C, { electron: !0, children: (0, H.jsx)(ne, {}) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ne() {
  let [e, t] = (0, B.useState)(!1),
    { avatarDirectory: n, avatarOptions: r, isError: i, isLoading: a } = R(),
    o = x(),
    c = T(),
    { findSkillByName: l, forceReload: u } = w(void 0, s),
    { ensureSkillByName: d, installSkill: f } = z({ hostId: s, loadOnMount: !1 }),
    p = async () => {
      t(!0);
      try {
        c({
          prefillPrompt: await ee({
            ensureSkillByName: d,
            findSkillByName: l,
            forceReloadSkills: u,
            installSkill: f,
          }),
        });
      } finally {
        t(!1);
      }
    };
  return (0, H.jsx)(G, {
    avatarDirectory: n,
    avatarOptions: r,
    isCreatingCustomAvatar: e,
    isCustomAvatarLoadError: i,
    isLoadingCustomAvatars: a,
    onCreateCustomAvatar: () => {
      p();
    },
    onRefreshCustomAvatars: () => {
      o(M);
    },
  });
}
function re() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(O, {
          title: (0, H.jsx)(D, { slug: `pets` }),
          children: (0, H.jsx)(te, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { re as PetsSettings };
//# sourceMappingURL=pets-settings.js.map
