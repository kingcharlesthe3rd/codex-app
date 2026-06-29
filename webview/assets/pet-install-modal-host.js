import { n as e } from "./rolldown-runtime.js";
import {
  Ht as t,
  Ol as n,
  Ut as r,
  oc as i,
  sc as a,
  tc as o,
  xl as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as c,
  Go as l,
  Ho as u,
  Ia as d,
  Jp as f,
  Ma as p,
  Na as m,
  Xp as h,
  Yp as g,
  Zp as _,
  ja as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  aa as y,
  aw as b,
  cw as x,
  ia as S,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { it as C, nt as w } from "./app-initial~app-main~automations-page.js";
import { n as T, t as E } from "./avatar-mascot-button.js";
import { r as D, t as O } from "./custom-avatars-query.js";
import { i as k, n as A, r as j, t as M } from "./pet-install-state.js";
function N(e) {
  let t = (0, P.c)(37),
    { session: n, onClose: r, onInstall: i } = e,
    { setSelectedAvatarId: a } = C(),
    o = n.status !== `installing`,
    s = n.status === `ready` || n.status === `installError`,
    l;
  t[0] !== o || t[1] !== r
    ? ((l = (e) => {
        !e && o && r();
      }),
      (t[0] = o),
      (t[1] = r),
      (t[2] = l))
    : (l = t[2]);
  let d = !o,
    g;
  t[3] !== s || t[4] !== i
    ? ((g = (e) => {
        (e.preventDefault(), s && i());
      }),
      (t[3] = s),
      (t[4] = i),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] !== n.name || t[7] !== n.status
    ? ((_ =
        n.status === `installed`
          ? (0, F.jsx)(x, {
              id: `pets.install.installedTitle`,
              defaultMessage: `Installed {petName}`,
              description: `Title shown after a pet installs successfully`,
              values: { petName: n.name },
            })
          : (0, F.jsx)(x, {
              id: `pets.install.title`,
              defaultMessage: `Install {petName}?`,
              description: `Title for the pet install modal`,
              values: { petName: n.name },
            })),
      (t[6] = n.name),
      (t[7] = n.status),
      (t[8] = _))
    : (_ = t[8]);
  let y;
  t[9] !== n.description || t[10] !== _
    ? ((y = (0, F.jsx)(m, { children: (0, F.jsx)(p, { title: _, subtitle: n.description }) })),
      (t[9] = n.description),
      (t[10] = _),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== n.name || t[13] !== n.preview || t[14] !== n.status
    ? ((b = (0, F.jsx)(m, {
        children: (0, F.jsx)(`div`, {
          className: `flex min-h-32 items-center justify-center`,
          children:
            n.status === `loading`
              ? (0, F.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                  children: [
                    (0, F.jsx)(h, { className: `icon-xs` }),
                    (0, F.jsx)(x, {
                      id: `pets.install.loading`,
                      defaultMessage: `Loading {petName}`,
                      description: `Loading state shown while a pet preview is prepared`,
                      values: { petName: n.name },
                    }),
                  ],
                })
              : n.status === `previewError`
                ? (0, F.jsx)(`div`, {
                    className: `px-5 text-center text-sm text-token-text-secondary`,
                    children: (0, F.jsx)(x, {
                      id: `pets.install.error`,
                      defaultMessage: `Unable to load {petName}`,
                      description: `Error state shown when a pet cannot be prepared`,
                      values: { petName: n.name },
                    }),
                  })
                : (0, F.jsx)(E, {
                    assetRef: `codex`,
                    spritesheetUrl: n.preview.spritesheetDataUrl,
                  }),
        }),
      })),
      (t[12] = n.name),
      (t[13] = n.preview),
      (t[14] = n.status),
      (t[15] = b))
    : (b = t[15]);
  let S;
  t[16] !== n.name || t[17] !== n.status
    ? ((S =
        n.status === `installError`
          ? (0, F.jsx)(m, {
              children: (0, F.jsx)(`div`, {
                className: `text-sm text-token-text-secondary`,
                children: (0, F.jsx)(x, {
                  id: `pets.install.installError`,
                  defaultMessage: `Unable to install {petName}`,
                  description: `Error state shown when a pet preview is valid but installation fails`,
                  values: { petName: n.name },
                }),
              }),
            })
          : null),
      (t[16] = n.name),
      (t[17] = n.status),
      (t[18] = S))
    : (S = t[18]);
  let w;
  t[19] !== o ||
  t[20] !== s ||
  t[21] !== r ||
  t[22] !== n.installedAvatarId ||
  t[23] !== n.status ||
  t[24] !== a
    ? ((w = (0, F.jsx)(m, {
        children:
          n.status === `installed`
            ? (0, F.jsxs)(v, {
                children: [
                  (0, F.jsx)(f, {
                    color: `outline`,
                    type: `button`,
                    onClick: r,
                    children: (0, F.jsx)(x, {
                      id: `pets.install.close`,
                      defaultMessage: `Close`,
                      description: `Button label to close a completed pet install modal`,
                    }),
                  }),
                  (0, F.jsx)(f, {
                    type: `button`,
                    onClick: () => {
                      (a(n.installedAvatarId), r());
                    },
                    children: (0, F.jsx)(x, {
                      id: `pets.install.usePet`,
                      defaultMessage: `Use this pet`,
                      description: `Button label to select an installed pet`,
                    }),
                  }),
                ],
              })
            : (0, F.jsxs)(v, {
                children: [
                  (0, F.jsx)(f, {
                    color: `outline`,
                    disabled: !o,
                    type: `button`,
                    onClick: r,
                    children: (0, F.jsx)(x, {
                      id: `pets.install.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button label to cancel a pet install`,
                    }),
                  }),
                  (0, F.jsx)(f, {
                    disabled: !s,
                    loading: n.status === `installing`,
                    type: `submit`,
                    children:
                      n.status === `installError`
                        ? (0, F.jsx)(x, {
                            id: `pets.install.tryAgain`,
                            defaultMessage: `Try again`,
                            description: `Button label to retry a failed pet install`,
                          })
                        : (0, F.jsx)(x, {
                            id: `pets.install.install`,
                            defaultMessage: `Install`,
                            description: `Button label to install a pet`,
                          }),
                  }),
                ],
              }),
      })),
      (t[19] = o),
      (t[20] = s),
      (t[21] = r),
      (t[22] = n.installedAvatarId),
      (t[23] = n.status),
      (t[24] = a),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] !== g || t[27] !== y || t[28] !== b || t[29] !== S || t[30] !== w
    ? ((T = (0, F.jsxs)(c, { as: `form`, onSubmit: g, children: [y, b, S, w] })),
      (t[26] = g),
      (t[27] = y),
      (t[28] = b),
      (t[29] = S),
      (t[30] = w),
      (t[31] = T))
    : (T = t[31]);
  let D;
  return (
    t[32] !== o || t[33] !== l || t[34] !== d || t[35] !== T
      ? ((D = (0, F.jsx)(u, {
          open: !0,
          onOpenChange: l,
          shouldIgnoreClickOutside: d,
          showDialogClose: o,
          size: `compact`,
          children: T,
        })),
        (t[32] = o),
        (t[33] = l),
        (t[34] = d),
        (t[35] = T),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
var P,
  F,
  I = e(() => {
    ((P = n()), b(), T(), w(), g(), l(), d(), _(), (F = s()));
  });
function L(e) {
  let n = (0, R.c)(10),
    { onClose: r } = e,
    o = i(t),
    s = a(k),
    c = y();
  if (s == null) return null;
  let l;
  n[0] !== r || n[1] !== o
    ? ((l = () => {
        (M(o), r());
      }),
      (n[0] = r),
      (n[1] = o),
      (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] !== c || n[4] !== o
    ? ((u = () => j(o, () => c(O))), (n[3] = c), (n[4] = o), (n[5] = u))
    : (u = n[5]);
  let d;
  return (
    n[6] !== s || n[7] !== l || n[8] !== u
      ? ((d = (0, z.jsx)(N, { session: s, onClose: l, onInstall: u })),
        (n[6] = s),
        (n[7] = l),
        (n[8] = u),
        (n[9] = d))
      : (d = n[9]),
    d
  );
}
var R, z;
e(() => {
  ((R = n()), o(), D(), S(), r(), I(), A(), (z = s()));
})();
export { L as PetInstallModalHost };
//# sourceMappingURL=pet-install-modal-host.js.map
