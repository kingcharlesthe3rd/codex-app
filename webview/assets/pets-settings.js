import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  bt as a,
  ft as o,
  kl as s,
  oc as c,
  ot as l,
  sc as u,
  tc as d,
  ut as f,
  xl as p,
  yt as m,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Es as h,
  Jp as g,
  Qu as _,
  Ts as v,
  Xn as y,
  Xp as b,
  Yn as x,
  Yp as S,
  Zp as C,
  _n as w,
  am as T,
  gn as E,
  im as D,
  td as O,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Gm as ee,
  Jm as te,
  Wm as k,
  _v as A,
  aa as j,
  aw as M,
  cw as N,
  dv as P,
  ia as F,
  rm as I,
  sm as L,
  uw as R,
  yv as ne,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  I as re,
  L as ie,
  at as ae,
  gt as oe,
  it as se,
  nt as ce,
  st as le,
  vt as ue,
} from "./app-initial~app-main~automations-page.js";
import { n as de, t as fe } from "./codex-avatar.js";
import {
  h as z,
  p as B,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Sn as pe,
  xn as me,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import { Mt as V, jt as H } from "./app-initial~app-main~onboarding-page.js";
import { n as he, r as ge, t as _e } from "./recommended-skill-statsig-overrides.js";
import {
  a as ve,
  i as ye,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as be,
  t as xe,
} from "./app-initial~app-main~avatar-overlay-page~avatar-overlay-native-page~pets-settings.js";
import { n as Se, t as Ce } from "./app-initial~app-main~pets-settings.js";
import {
  n as we,
  t as Te,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as Ee,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { r as De, t as Oe } from "./custom-avatars-query.js";
import { n as ke, t as Ae } from "./use-avatar-options.js";
function je(e) {
  let t = (0, W.c)(11),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = D(
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
    ? ((f = (0, G.jsx)(fe, { assetRef: l, className: u, spritesheetUrl: d })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== s || t[8] !== c || t[9] !== f
      ? ((p = (0, G.jsx)(`div`, { className: s, "data-avatar-id": c, children: f })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var W,
  G,
  Me = e(() => {
    ((W = r()), T(), de(), (G = p()));
  });
function Ne(e) {
  let t = (0, K.c)(21),
    { avatarDirectory: r } = e,
    i = c(n),
    a = R(),
    s;
  t[0] !== a || t[1] !== i
    ? ((s = () => {
        i.get(z).danger(
          a.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = s))
    : (s = t[2]);
  let l = s,
    u;
  t[3] === l
    ? (u = t[4])
    : ((u = (e) => {
        e.success || l();
      }),
      (t[3] = l),
      (t[4] = u));
  let d;
  t[5] !== l || t[6] !== u
    ? ((d = { onSuccess: u, onError: l }), (t[5] = l), (t[6] = u), (t[7] = d))
    : (d = t[7]);
  let { mutate: f } = o(`open-file`, d),
    p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, q.jsx)(N, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === r
    ? (m = t[10])
    : ((m = (0, q.jsx)(`span`, { className: `font-mono text-xs break-all`, children: r })),
      (t[9] = r),
      (t[10] = m));
  let h;
  t[11] !== r || t[12] !== f
    ? ((h = () => {
        f({ path: r, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = r),
      (t[12] = f),
      (t[13] = h))
    : (h = t[13]);
  let _, v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(N, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (v = (0, q.jsx)(E, { className: `icon-2xs` })),
      (t[14] = _),
      (t[15] = v))
    : ((_ = t[14]), (v = t[15]));
  let y;
  t[16] === h
    ? (y = t[17])
    : ((y = (0, q.jsxs)(g, { color: `ghost`, onClick: h, size: `toolbar`, children: [_, v] })),
      (t[16] = h),
      (t[17] = y));
  let b;
  return (
    t[18] !== m || t[19] !== y
      ? ((b = (0, q.jsx)(H, { label: p, description: m, control: y })),
        (t[18] = m),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
var K,
  q,
  Pe = e(() => {
    ((K = r()), d(), M(), S(), B(), w(), i(), V(), f(), (q = p()));
  });
function Fe(e) {
  let t = (0, J.c)(8),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
    } = e,
    l = r === void 0 ? ae : r,
    u = i === void 0 ? !1 : i,
    d = a === void 0 ? !1 : a,
    f = o === void 0 ? !1 : o,
    p;
  return (
    t[0] !== n || t[1] !== l || t[2] !== u || t[3] !== d || t[4] !== f || t[5] !== s || t[6] !== c
      ? ((p = (0, Y.jsx)(v, {
          electron: !0,
          children: (0, Y.jsx)(Ie, {
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
function Ie(e) {
  let t = (0, J.c)(77),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: o,
      isLoadingCustomAvatars: s,
      onCreateCustomAvatar: c,
      onRefreshCustomAvatars: l,
    } = e,
    d = u(Ce),
    f = u(L),
    { selectedAvatar: p, setSelectedAvatarId: m } = se(r),
    h,
    _,
    v,
    y,
    x,
    S,
    C,
    w,
    T,
    E;
  if (
    t[0] !== r ||
    t[1] !== d ||
    t[2] !== i ||
    t[3] !== o ||
    t[4] !== s ||
    t[5] !== c ||
    t[6] !== l ||
    t[7] !== f ||
    t[8] !== p ||
    t[9] !== m
  ) {
    let e = r.filter(Re),
      n = r.filter(Le),
      u;
    t[20] === f
      ? (u = t[21])
      : ((u = (e, t) => {
          f.logProductEvent(
            ee,
            xe({ action: e, selectedAvatar: t, source: te.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[20] = f),
        (t[21] = u));
    let D = u,
      O;
    t[22] !== m || t[23] !== D
      ? ((O = (e) => {
          (m(e.id), D(k.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[22] = m),
        (t[23] = D),
        (t[24] = O))
      : (O = t[24]);
    let A = O;
    ((E = `flex flex-col gap-[var(--padding-panel)]`),
      (v = U),
      (_ = U.Content),
      (h = Te),
      (y = `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`));
    let j;
    t[25] !== i || t[26] !== c || t[27] !== p || t[28] !== D
      ? ((j = c
          ? (0, Y.jsx)(g, {
              color: `secondary`,
              loading: i,
              onClick: () => {
                (D(k.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, p), c());
              },
              size: `toolbar`,
              children: (0, Y.jsx)(N, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create your own pet`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (t[25] = i),
        (t[26] = c),
        (t[27] = p),
        (t[28] = D),
        (t[29] = j))
      : (j = t[29]);
    let M;
    t[30] === l
      ? (M = t[31])
      : ((M = l
          ? (0, Y.jsx)(g, {
              color: `secondary`,
              onClick: l,
              size: `toolbar`,
              children: (0, Y.jsx)(N, {
                id: `settings.pets.refresh`,
                defaultMessage: `Refresh`,
                description: `Button label to refresh custom pets from local manifests`,
              }),
            })
          : null),
        (t[30] = l),
        (t[31] = M));
    let P;
    t[32] !== d || t[33] !== p || t[34] !== D
      ? ((P = () => {
          (D(
            d
              ? k.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : k.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            p,
          ),
            a.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (t[32] = d),
        (t[33] = p),
        (t[34] = D),
        (t[35] = P))
      : (P = t[35]);
    let F;
    t[36] === d
      ? (F = t[37])
      : ((F = d
          ? (0, Y.jsx)(N, {
              id: `settings.personalization.pets.tuckAwayPet`,
              defaultMessage: `Tuck Away Pet`,
              description: `Button that closes the floating pet overlay`,
            })
          : (0, Y.jsx)(N, {
              id: `settings.personalization.pets.openPet`,
              defaultMessage: `Wake Pet`,
              description: `Button that opens the floating pet overlay`,
            })),
        (t[36] = d),
        (t[37] = F));
    let I;
    (t[38] !== P || t[39] !== F
      ? ((I = (0, Y.jsx)(g, { color: `secondary`, onClick: P, size: `toolbar`, children: F })),
        (t[38] = P),
        (t[39] = F),
        (t[40] = I))
      : (I = t[40]),
      t[41] !== j || t[42] !== M || t[43] !== I
        ? ((x = (0, Y.jsxs)(`div`, {
            className: `flex justify-end gap-2 p-3`,
            children: [j, M, I],
          })),
          (t[41] = j),
          (t[42] = M),
          (t[43] = I),
          (t[44] = x))
        : (x = t[44]),
      t[45] === s
        ? (S = t[46])
        : ((S = s
            ? (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, Y.jsx)(b, { className: `icon-xs` }),
                  (0, Y.jsx)(N, {
                    id: `settings.pets.loadingCustom`,
                    defaultMessage: `Loading custom pets`,
                    description: `Message shown while loading custom pet manifests`,
                  }),
                ],
              })
            : null),
          (t[45] = s),
          (t[46] = S)),
      t[47] === o
        ? (C = t[48])
        : ((C = o
            ? (0, Y.jsx)(`div`, {
                className: `p-3 text-sm text-token-text-secondary`,
                children: (0, Y.jsx)(N, {
                  id: `settings.pets.loadCustomError`,
                  defaultMessage: `Unable to load custom pets`,
                  description: `Message shown when custom pet manifests fail to load`,
                }),
              })
            : null),
          (t[47] = o),
          (t[48] = C)));
    let L;
    (t[49] !== A || t[50] !== p
      ? ((L = (e) =>
          (0, Y.jsx)(ze, { avatar: e, isSelected: e.id === p.id, onSelectAvatar: A }, e.id)),
        (t[49] = A),
        (t[50] = p),
        (t[51] = L))
      : (L = t[51]),
      (w = n.map(L)));
    let R;
    (t[52] !== A || t[53] !== p
      ? ((R = (e) =>
          (0, Y.jsx)(ze, { avatar: e, isSelected: e.id === p.id, onSelectAvatar: A }, e.id)),
        (t[52] = A),
        (t[53] = p),
        (t[54] = R))
      : (R = t[54]),
      (T = e.map(R)),
      (t[0] = r),
      (t[1] = d),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E));
  } else
    ((h = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (E = t[19]));
  let D;
  t[55] === n
    ? (D = t[56])
    : ((D = n == null ? null : (0, Y.jsx)(Ne, { avatarDirectory: n })), (t[55] = n), (t[56] = D));
  let O;
  t[57] !== y ||
  t[58] !== x ||
  t[59] !== S ||
  t[60] !== C ||
  t[61] !== w ||
  t[62] !== T ||
  t[63] !== D
    ? ((O = (0, Y.jsxs)(`div`, { className: y, children: [x, S, C, w, T, D] })),
      (t[57] = y),
      (t[58] = x),
      (t[59] = S),
      (t[60] = C),
      (t[61] = w),
      (t[62] = T),
      (t[63] = D),
      (t[64] = O))
    : (O = t[64]);
  let A;
  t[65] !== h || t[66] !== O
    ? ((A = (0, Y.jsx)(h, { children: O })), (t[65] = h), (t[66] = O), (t[67] = A))
    : (A = t[67]);
  let j;
  t[68] !== _ || t[69] !== A
    ? ((j = (0, Y.jsx)(_, { children: A })), (t[68] = _), (t[69] = A), (t[70] = j))
    : (j = t[70]);
  let M;
  t[71] !== v || t[72] !== j
    ? ((M = (0, Y.jsx)(v, { children: j })), (t[71] = v), (t[72] = j), (t[73] = M))
    : (M = t[73]);
  let P;
  return (
    t[74] !== M || t[75] !== E
      ? ((P = (0, Y.jsx)(`section`, { className: E, children: M })),
        (t[74] = M),
        (t[75] = E),
        (t[76] = P))
      : (P = t[76]),
    P
  );
}
function Le(e) {
  return e.id.startsWith(`custom:`);
}
function Re(e) {
  return !e.id.startsWith(`custom:`);
}
function ze(e) {
  let t = (0, J.c)(11),
    { avatar: n, isSelected: r, onSelectAvatar: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, Y.jsx)(je, { avatar: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = r
        ? (0, Y.jsx)(g, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, Y.jsx)(N, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, Y.jsx)(g, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, Y.jsx)(N, {
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
      ? ((s = (0, Y.jsx)(H, {
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
var J,
  Y,
  Be = e(() => {
    ((J = r()),
      P(),
      d(),
      M(),
      Me(),
      be(),
      Se(),
      S(),
      C(),
      h(),
      m(),
      I(),
      Ee(),
      V(),
      we(),
      le(),
      ce(),
      Pe(),
      (Y = p()));
  });
async function Ve({ forceReloadSkills: e, skillStatsigOverride: t }) {
  let n = await l(`install-recommended-skill`, {
    params: {
      forceReinstall: !0,
      hostId: ne,
      installRoot: null,
      repoPath: He,
      skillId: X,
      skillStatsigOverride: t,
      source: `bundled`,
    },
  });
  if (!n.success || n.destination == null) throw Error(n.error ?? `Unable to install Hatch Pet`);
  return (
    await e(),
    `${_({ name: X, path: ie(n.destination, `SKILL.md`) })} create a pet based on what you know about me`
  );
}
var X,
  He,
  Ue = e(() => {
    (re(), A(), O(), f(), (X = `hatch-pet`), (He = `skills/.curated/hatch-pet`));
  });
function We() {
  let e = (0, Ke.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(v, { electron: !0, children: (0, Z.jsx)(Ge, {}) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ge() {
  let e = c(n),
    [t, r] = (0, qe.useState)(!1),
    { avatarDirectory: i, avatarOptions: a, isError: o, isLoading: s } = ke(),
    l = j(),
    u = pe(),
    { forceReload: d } = y(void 0, ne),
    f = ge(),
    p = async () => {
      r(!0);
      try {
        u({
          prefillPrompt: await Ve({
            forceReloadSkills: d,
            skillStatsigOverride: _e(f, `hatch-pet`),
          }),
        });
      } catch {
        e.get(z).danger(
          (0, Z.jsx)(N, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the Hatch Pet skill cannot be installed`,
          }),
        );
      } finally {
        r(!1);
      }
    };
  return (0, Z.jsx)(Fe, {
    avatarDirectory: i,
    avatarOptions: a,
    isCreatingCustomAvatar: t,
    isCustomAvatarLoadError: o,
    isLoadingCustomAvatars: s,
    onCreateCustomAvatar: () => {
      p();
    },
    onRefreshCustomAvatars: () => {
      l(Oe);
    },
  });
}
var Ke,
  qe,
  Z,
  Je = e(() => {
    ((Ke = r()),
      d(),
      (qe = t(s(), 1)),
      M(),
      B(),
      h(),
      me(),
      F(),
      i(),
      A(),
      he(),
      x(),
      Be(),
      Ue(),
      De(),
      Ae(),
      (Z = p()));
  });
function Ye() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(oe, {
          title: (0, $.jsx)(ye, { slug: `pets` }),
          children: (0, $.jsx)(We, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, $;
e(() => {
  ((Q = r()), Je(), ue(), ve(), ($ = p()));
})();
export { Ye as PetsSettings };
//# sourceMappingURL=pets-settings.js.map
