import { n as e } from "./rolldown-runtime.js";
import {
  $N as t,
  $P as n,
  AB as r,
  BV as i,
  DN as a,
  Ev as o,
  IB as s,
  ON as c,
  Ov as l,
  QN as u,
  QP as d,
  aP as f,
  iF as p,
  mv as m,
  oP as h,
  qV as g,
  sF as _,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import { J as v, K as y } from "./app-initial~app-main~automations-page.js";
import {
  Oo as b,
  ko as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  g as S,
  h as C,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as w,
  t as T,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
function E() {
  let e = (0, O.c)(18),
    t = l(),
    n = o(),
    r;
  e[0] === n.state ? (r = e[1]) : ((r = D(n.state)), (e[0] = n.state), (e[1] = r));
  let i = r,
    c = n.state != null && typeof n.state == `object` && !Array.isArray(n.state) ? n.state : null,
    { data: u, isLoading: d } = s(A),
    f;
  e[2] !== i || e[3] !== c || e[4] !== t
    ? ((f = () => {
        t(i, { replace: !0, state: c });
      }),
      (e[2] = i),
      (e[3] = c),
      (e[4] = t),
      (e[5] = f))
    : (f = e[5]);
  let p, m;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, k.jsx)(b, { className: `icon-xs` })),
      (m = (0, k.jsx)(_, {
        id: `settings.openSourceLicenses.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to the main settings page`,
      })),
      (e[6] = p),
      (e[7] = m))
    : ((p = e[6]), (m = e[7]));
  let h;
  e[8] === f
    ? (h = e[9])
    : ((h = (0, k.jsxs)(a, { color: `ghost`, size: `toolbar`, onClick: f, children: [p, m] })),
      (e[8] = f),
      (e[9] = h));
  let g, v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, k.jsx)(_, {
        id: `settings.openSourceLicenses.title`,
        defaultMessage: `Open source licenses`,
        description: `Title for the open source licenses settings page`,
      })),
      (v = (0, k.jsx)(_, {
        id: `settings.openSourceLicenses.subtitle`,
        defaultMessage: `Third-party notices for dependencies included in this app`,
        description: `Subtitle for the open source licenses settings page`,
      })),
      (e[10] = g),
      (e[11] = v))
    : ((g = e[10]), (v = e[11]));
  let x;
  e[12] !== u || e[13] !== d
    ? ((x = (0, k.jsx)(T, {
        children: (0, k.jsx)(T.Content, {
          children: (0, k.jsx)(C, {
            children: d
              ? (0, k.jsx)(`div`, {
                  className: `text-sm text-token-text-secondary`,
                  children: (0, k.jsx)(_, {
                    id: `settings.openSourceLicenses.loading`,
                    defaultMessage: `Loading…`,
                    description: `Loading label while fetching third-party notices`,
                  }),
                })
              : u?.text
                ? (0, k.jsx)(`pre`, {
                    className: `bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary`,
                    children: u.text,
                  })
                : (0, k.jsx)(`div`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, k.jsx)(_, {
                      id: `settings.openSourceLicenses.missing`,
                      defaultMessage: `No third-party notices were found.`,
                      description: `Message shown when the third-party notices file is missing`,
                    }),
                  }),
          }),
        }),
      })),
      (e[12] = u),
      (e[13] = d),
      (e[14] = x))
    : (x = e[14]);
  let S;
  return (
    e[15] !== h || e[16] !== x
      ? ((S = (0, k.jsx)(y, { backSlot: h, title: g, subtitle: v, children: x })),
        (e[15] = h),
        (e[16] = x),
        (e[17] = S))
      : (S = e[17]),
    S
  );
}
function D(e) {
  if (typeof e == `object` && e && !Array.isArray(e) && `licensesBackPath` in e) {
    let t = e.licensesBackPath;
    if (typeof t == `string` && t.startsWith(`/settings/`)) return t;
  }
  return `/settings/general`;
}
var O, k, A;
e(() => {
  ((O = g()),
    r(),
    p(),
    m(),
    c(),
    x(),
    n(),
    v(),
    w(),
    S(),
    h(),
    t(),
    (k = i()),
    (A = u(d, `third-party-notices`, { enabled: !0, staleTime: f.ONE_MINUTE })));
})();
export { E as OpenSourceLicensesPage };
//# sourceMappingURL=open-source-licenses-page.js.map
