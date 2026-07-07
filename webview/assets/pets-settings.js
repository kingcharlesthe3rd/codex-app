import { n as e, s as t } from "./rolldown-runtime.js";
import {
  At as n,
  El as r,
  K as i,
  Rt as a,
  St as o,
  Tl as s,
  W as c,
  Xs as l,
  bt as u,
  gt as d,
  kt as f,
  nc as p,
  tc as m,
  vl as h,
  zt as g,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { fr as _, pr as v } from "./app-initial~app-main~onboarding-page.js";
import {
  G as y,
  W as b,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  $h as x,
  Gd as S,
  If as ee,
  Mf as C,
  Nf as te,
  Sx as w,
  Yd as T,
  nx as E,
  rx as D,
  vn as O,
  wx as k,
  yn as A,
  yx as j,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Dt as M,
  Tt as N,
  _t as P,
  bt as F,
  vt as I,
  yt as ne,
} from "./app-initial~app-main~automations-page.js";
import {
  $ as re,
  Bt as ie,
  Mc as ae,
  et as oe,
  kc as se,
  zt as ce,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import { n as le, t as ue } from "./codex-avatar.js";
import {
  $ as de,
  L,
  Q as R,
  Z as z,
  et as fe,
  z as B,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  B as pe,
  z as me,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import { n as he, r as ge, t as _e } from "./recommended-skill-statsig-overrides.js";
import {
  H as ve,
  W as ye,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  d as V,
  f as be,
  l as xe,
  u as Se,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  i as Ce,
  o as we,
  r as Te,
  t as Ee,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js";
import {
  n as De,
  t as Oe,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { r as ke, t as Ae } from "./custom-avatars-query.js";
import { n as je, t as Me } from "./use-avatar-options.js";
function Ne(e) {
  let t = (0, H.c)(11),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = E(
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
    ? ((f = (0, U.jsx)(ue, { assetRef: l, className: u, spritesheetUrl: d })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== s || t[8] !== c || t[9] !== f
      ? ((p = (0, U.jsx)(`div`, { className: s, "data-avatar-id": c, children: f })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var H,
  U,
  Pe = e(() => {
    ((H = s()), D(), le(), (U = h()));
  });
function Fe(e) {
  let t = (0, Ie.c)(21),
    { avatarDirectory: n } = e,
    r = m(a),
    i = k(),
    s;
  t[0] !== i || t[1] !== r
    ? ((s = () => {
        r.get(B).danger(
          i.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = i),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (e) => {
        e.success || c();
      }),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] !== c || t[6] !== l
    ? ((u = { onSuccess: l, onError: c }), (t[5] = c), (t[6] = l), (t[7] = u))
    : (u = t[7]);
  let { mutate: d } = o(`open-file`, u),
    f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, W.jsx)(w, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === n
    ? (p = t[10])
    : ((p = (0, W.jsx)(`span`, { className: `font-mono text-xs break-all`, children: n })),
      (t[9] = n),
      (t[10] = p));
  let h;
  t[11] !== n || t[12] !== d
    ? ((h = () => {
        d({ path: n, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = n),
      (t[12] = d),
      (t[13] = h))
    : (h = t[13]);
  let g, v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, W.jsx)(w, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (v = (0, W.jsx)(re, { className: `icon-2xs` })),
      (t[14] = g),
      (t[15] = v))
    : ((g = t[14]), (v = t[15]));
  let y;
  t[16] === h
    ? (y = t[17])
    : ((y = (0, W.jsxs)(z, { color: `ghost`, onClick: h, size: `toolbar`, children: [g, v] })),
      (t[16] = h),
      (t[17] = y));
  let b;
  return (
    t[18] !== p || t[19] !== y
      ? ((b = (0, W.jsx)(_, { label: f, description: p, control: y })),
        (t[18] = p),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
var Ie,
  W,
  Le = e(() => {
    ((Ie = s()), l(), j(), R(), L(), oe(), g(), v(), u(), (W = h()));
  });
function Re(e) {
  let t = (0, K.c)(8),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
    } = e,
    l = r === void 0 ? Ce : r,
    u = i === void 0 ? !1 : i,
    d = a === void 0 ? !1 : a,
    f = o === void 0 ? !1 : o,
    p;
  return (
    t[0] !== n || t[1] !== l || t[2] !== u || t[3] !== d || t[4] !== f || t[5] !== s || t[6] !== c
      ? ((p = (0, q.jsx)(b, {
          electron: !0,
          children: (0, q.jsx)(ze, {
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
function ze(e) {
  let t = (0, K.c)(77),
    {
      avatarDirectory: r,
      avatarOptions: i,
      isCreatingCustomAvatar: a,
      isCustomAvatarLoadError: o,
      isLoadingCustomAvatars: s,
      onCreateCustomAvatar: c,
      onRefreshCustomAvatars: l,
    } = e,
    u = p(P),
    d = p(T),
    { selectedAvatar: f, setSelectedAvatarId: m } = Te(i),
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    E,
    D;
  if (
    t[0] !== i ||
    t[1] !== u ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== s ||
    t[5] !== c ||
    t[6] !== l ||
    t[7] !== d ||
    t[8] !== f ||
    t[9] !== m
  ) {
    let e = i.filter(Ve),
      r = i.filter(Be),
      p;
    t[20] === d
      ? (p = t[21])
      : ((p = (e, t) => {
          d.logProductEvent(
            te,
            ne({ action: e, selectedAvatar: t, source: ee.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[20] = d),
        (t[21] = p));
    let T = p,
      O;
    t[22] !== m || t[23] !== T
      ? ((O = (e) => {
          (m(e.id), T(C.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[22] = m),
        (t[23] = T),
        (t[24] = O))
      : (O = t[24]);
    let k = O;
    ((D = `flex flex-col gap-[var(--padding-panel)]`),
      (_ = V),
      (g = V.Content),
      (h = Oe),
      (v = `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`));
    let A;
    t[25] !== a || t[26] !== c || t[27] !== f || t[28] !== T
      ? ((A = c
          ? (0, q.jsx)(z, {
              color: `secondary`,
              loading: a,
              onClick: () => {
                (T(C.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, f), c());
              },
              size: `toolbar`,
              children: (0, q.jsx)(w, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create your own pet`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (t[25] = a),
        (t[26] = c),
        (t[27] = f),
        (t[28] = T),
        (t[29] = A))
      : (A = t[29]);
    let j;
    t[30] === l
      ? (j = t[31])
      : ((j = l
          ? (0, q.jsx)(z, {
              color: `secondary`,
              onClick: l,
              size: `toolbar`,
              children: (0, q.jsx)(w, {
                id: `settings.pets.refresh`,
                defaultMessage: `Refresh`,
                description: `Button label to refresh custom pets from local manifests`,
              }),
            })
          : null),
        (t[30] = l),
        (t[31] = j));
    let M;
    t[32] !== u || t[33] !== f || t[34] !== T
      ? ((M = () => {
          (T(
            u
              ? C.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : C.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            f,
          ),
            n.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (t[32] = u),
        (t[33] = f),
        (t[34] = T),
        (t[35] = M))
      : (M = t[35]);
    let N;
    t[36] === u
      ? (N = t[37])
      : ((N = u
          ? (0, q.jsx)(w, {
              id: `settings.personalization.pets.tuckAwayPet`,
              defaultMessage: `Tuck Away Pet`,
              description: `Button that closes the floating pet overlay`,
            })
          : (0, q.jsx)(w, {
              id: `settings.personalization.pets.openPet`,
              defaultMessage: `Wake Pet`,
              description: `Button that opens the floating pet overlay`,
            })),
        (t[36] = u),
        (t[37] = N));
    let P;
    (t[38] !== M || t[39] !== N
      ? ((P = (0, q.jsx)(z, { color: `secondary`, onClick: M, size: `toolbar`, children: N })),
        (t[38] = M),
        (t[39] = N),
        (t[40] = P))
      : (P = t[40]),
      t[41] !== A || t[42] !== j || t[43] !== P
        ? ((y = (0, q.jsxs)(`div`, {
            className: `flex justify-end gap-2 p-3`,
            children: [A, j, P],
          })),
          (t[41] = A),
          (t[42] = j),
          (t[43] = P),
          (t[44] = y))
        : (y = t[44]),
      t[45] === s
        ? (b = t[46])
        : ((b = s
            ? (0, q.jsxs)(`div`, {
                className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, q.jsx)(de, { className: `icon-xs` }),
                  (0, q.jsx)(w, {
                    id: `settings.pets.loadingCustom`,
                    defaultMessage: `Loading custom pets`,
                    description: `Message shown while loading custom pet manifests`,
                  }),
                ],
              })
            : null),
          (t[45] = s),
          (t[46] = b)),
      t[47] === o
        ? (x = t[48])
        : ((x = o
            ? (0, q.jsx)(`div`, {
                className: `p-3 text-sm text-token-text-secondary`,
                children: (0, q.jsx)(w, {
                  id: `settings.pets.loadCustomError`,
                  defaultMessage: `Unable to load custom pets`,
                  description: `Message shown when custom pet manifests fail to load`,
                }),
              })
            : null),
          (t[47] = o),
          (t[48] = x)));
    let F;
    (t[49] !== k || t[50] !== f
      ? ((F = (e) =>
          (0, q.jsx)(G, { avatar: e, isSelected: e.id === f.id, onSelectAvatar: k }, e.id)),
        (t[49] = k),
        (t[50] = f),
        (t[51] = F))
      : (F = t[51]),
      (S = r.map(F)));
    let I;
    (t[52] !== k || t[53] !== f
      ? ((I = (e) =>
          (0, q.jsx)(G, { avatar: e, isSelected: e.id === f.id, onSelectAvatar: k }, e.id)),
        (t[52] = k),
        (t[53] = f),
        (t[54] = I))
      : (I = t[54]),
      (E = e.map(I)),
      (t[0] = i),
      (t[1] = u),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = d),
      (t[8] = f),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = E),
      (t[19] = D));
  } else
    ((h = t[10]),
      (g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]),
      (x = t[16]),
      (S = t[17]),
      (E = t[18]),
      (D = t[19]));
  let O;
  t[55] === r
    ? (O = t[56])
    : ((O = r == null ? null : (0, q.jsx)(Fe, { avatarDirectory: r })), (t[55] = r), (t[56] = O));
  let k;
  t[57] !== v ||
  t[58] !== y ||
  t[59] !== b ||
  t[60] !== x ||
  t[61] !== S ||
  t[62] !== E ||
  t[63] !== O
    ? ((k = (0, q.jsxs)(`div`, { className: v, children: [y, b, x, S, E, O] })),
      (t[57] = v),
      (t[58] = y),
      (t[59] = b),
      (t[60] = x),
      (t[61] = S),
      (t[62] = E),
      (t[63] = O),
      (t[64] = k))
    : (k = t[64]);
  let A;
  t[65] !== h || t[66] !== k
    ? ((A = (0, q.jsx)(h, { children: k })), (t[65] = h), (t[66] = k), (t[67] = A))
    : (A = t[67]);
  let j;
  t[68] !== g || t[69] !== A
    ? ((j = (0, q.jsx)(g, { children: A })), (t[68] = g), (t[69] = A), (t[70] = j))
    : (j = t[70]);
  let M;
  t[71] !== _ || t[72] !== j
    ? ((M = (0, q.jsx)(_, { children: j })), (t[71] = _), (t[72] = j), (t[73] = M))
    : (M = t[73]);
  let N;
  return (
    t[74] !== M || t[75] !== D
      ? ((N = (0, q.jsx)(`section`, { className: D, children: M })),
        (t[74] = M),
        (t[75] = D),
        (t[76] = N))
      : (N = t[76]),
    N
  );
}
function Be(e) {
  return e.id.startsWith(`custom:`);
}
function Ve(e) {
  return !e.id.startsWith(`custom:`);
}
function G(e) {
  let t = (0, K.c)(11),
    { avatar: n, isSelected: r, onSelectAvatar: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, q.jsx)(Ne, { avatar: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = r
        ? (0, q.jsx)(z, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, q.jsx)(w, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, q.jsx)(z, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, q.jsx)(w, {
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
      ? ((s = (0, q.jsx)(_, {
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
var K,
  q,
  He = e(() => {
    ((K = s()),
      x(),
      l(),
      j(),
      Pe(),
      F(),
      I(),
      R(),
      fe(),
      y(),
      f(),
      S(),
      be(),
      v(),
      De(),
      we(),
      Ee(),
      Le(),
      (q = h()));
  });
async function Ue({ forceReloadSkills: e, skillStatsigOverride: t }) {
  let n = await d(`install-recommended-skill`, {
    params: {
      forceReinstall: !0,
      hostId: i,
      installRoot: null,
      repoPath: Y,
      skillId: J,
      skillStatsigOverride: t,
      source: `bundled`,
    },
  });
  if (!n.success || n.destination == null) throw Error(n.error ?? `Unable to install Hatch Pet`);
  return (
    await e(),
    `${se({ name: J, path: Se(n.destination, `SKILL.md`) })} create a pet based on what you know about me`
  );
}
var J,
  Y,
  We = e(() => {
    (xe(), c(), ae(), u(), (J = `hatch-pet`), (Y = `skills/.curated/hatch-pet`));
  });
function Ge() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(b, { electron: !0, children: (0, Q.jsx)(Ke, {}) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ke() {
  let e = m(a),
    [t, n] = (0, Z.useState)(!1),
    { avatarDirectory: r, avatarOptions: o, isError: s, isLoading: c } = je(),
    l = A(),
    u = ye(),
    { forceReload: d } = ie(void 0, i),
    f = ge(),
    p = async () => {
      n(!0);
      try {
        u({
          prefillPrompt: await Ue({
            forceReloadSkills: d,
            skillStatsigOverride: _e(f, `hatch-pet`),
          }),
        });
      } catch {
        e.get(B).danger(
          (0, Q.jsx)(w, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the Hatch Pet skill cannot be installed`,
          }),
        );
      } finally {
        n(!1);
      }
    };
  return (0, Q.jsx)(Re, {
    avatarDirectory: r,
    avatarOptions: o,
    isCreatingCustomAvatar: t,
    isCustomAvatarLoadError: s,
    isLoadingCustomAvatars: c,
    onCreateCustomAvatar: () => {
      p();
    },
    onRefreshCustomAvatars: () => {
      l(Ae);
    },
  });
}
var X,
  Z,
  Q,
  qe = e(() => {
    ((X = s()),
      l(),
      (Z = t(r(), 1)),
      j(),
      L(),
      y(),
      ve(),
      O(),
      g(),
      c(),
      he(),
      ce(),
      He(),
      We(),
      ke(),
      Me(),
      (Q = h()));
  });
function Je() {
  let e = (0, Ye.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(N, {
          title: (0, $.jsx)(me, { slug: `pets` }),
          children: (0, $.jsx)(Ge, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Ye, $;
e(() => {
  ((Ye = s()), qe(), M(), pe(), ($ = h()));
})();
export { Je as PetsSettings };
//# sourceMappingURL=pets-settings.js.map
