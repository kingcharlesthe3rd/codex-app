import { n as e } from "./rolldown-runtime.js";
import {
  EB as t,
  GN as n,
  GP as r,
  HP as i,
  IP as a,
  LN as o,
  LP as s,
  RN as c,
  RV as l,
  WN as u,
  aa as d,
  av as f,
  bB as p,
  fN as m,
  gv as h,
  ia as g,
  jV as _,
  pN as v,
  vv as y,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { lt as b, ut as x } from "./app-initial~app-main~automations-page.js";
import {
  r as S,
  t as C,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as w,
  t as T,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
function E() {
  let e = (0, O.c)(18),
    n = y(),
    i = h(),
    a;
  e[0] === i.state ? (a = e[1]) : ((a = D(i.state)), (e[0] = i.state), (e[1] = a));
  let o = a,
    s = i.state != null && typeof i.state == `object` && !Array.isArray(i.state) ? i.state : null,
    { data: c, isLoading: l } = t(A),
    u;
  e[2] !== o || e[3] !== s || e[4] !== n
    ? ((u = () => {
        n(o, { replace: !0, state: s });
      }),
      (e[2] = o),
      (e[3] = s),
      (e[4] = n),
      (e[5] = u))
    : (u = e[5]);
  let d, f;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, k.jsx)(g, { className: `icon-xs` })),
      (f = (0, k.jsx)(r, {
        id: `settings.openSourceLicenses.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to the main settings page`,
      })),
      (e[6] = d),
      (e[7] = f))
    : ((d = e[6]), (f = e[7]));
  let p;
  e[8] === u
    ? (p = e[9])
    : ((p = (0, k.jsxs)(m, { color: `ghost`, size: `toolbar`, onClick: u, children: [d, f] })),
      (e[8] = u),
      (e[9] = p));
  let _, v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, k.jsx)(r, {
        id: `settings.openSourceLicenses.title`,
        defaultMessage: `Open source licenses`,
        description: `Title for the open source licenses settings page`,
      })),
      (v = (0, k.jsx)(r, {
        id: `settings.openSourceLicenses.subtitle`,
        defaultMessage: `Third-party notices for dependencies included in this app`,
        description: `Subtitle for the open source licenses settings page`,
      })),
      (e[10] = _),
      (e[11] = v))
    : ((_ = e[10]), (v = e[11]));
  let x;
  e[12] !== c || e[13] !== l
    ? ((x = (0, k.jsx)(b, {
        children: (0, k.jsx)(b.Content, {
          children: (0, k.jsx)(T, {
            children: l
              ? (0, k.jsx)(`div`, {
                  className: `text-sm text-token-text-secondary`,
                  children: (0, k.jsx)(r, {
                    id: `settings.openSourceLicenses.loading`,
                    defaultMessage: `Loading…`,
                    description: `Loading label while fetching third-party notices`,
                  }),
                })
              : c?.text
                ? (0, k.jsx)(`pre`, {
                    className: `bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary`,
                    children: c.text,
                  })
                : (0, k.jsx)(`div`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, k.jsx)(r, {
                      id: `settings.openSourceLicenses.missing`,
                      defaultMessage: `No third-party notices were found.`,
                      description: `Message shown when the third-party notices file is missing`,
                    }),
                  }),
          }),
        }),
      })),
      (e[12] = c),
      (e[13] = l),
      (e[14] = x))
    : (x = e[14]);
  let S;
  return (
    e[15] !== p || e[16] !== x
      ? ((S = (0, k.jsx)(C, { backSlot: p, title: _, subtitle: v, children: x })),
        (e[15] = p),
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
  ((O = l()),
    p(),
    i(),
    f(),
    v(),
    d(),
    s(),
    S(),
    x(),
    w(),
    n(),
    c(),
    (k = _()),
    (A = o(a, `third-party-notices`, { enabled: !0, staleTime: u.ONE_MINUTE })));
})();
export { E as OpenSourceLicensesPage };
//# sourceMappingURL=open-source-licenses-page.js.map
