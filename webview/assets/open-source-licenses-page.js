import { n as e } from "./rolldown-runtime.js";
import {
  Dt as t,
  Et as n,
  Rt as r,
  Tl as i,
  Xs as a,
  bt as o,
  nc as s,
  vl as c,
  yt as l,
  zt as u,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Qs as d,
  Rs as f,
  Sx as p,
  Xs as m,
  yx as h,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { Dt as g, Tt as _ } from "./app-initial~app-main~automations-page.js";
import {
  _a as v,
  ga as y,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  Q as b,
  Z as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  d as S,
  f as C,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as w,
  t as T,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
function E() {
  let e = (0, O.c)(18),
    t = d(),
    n = m(),
    r;
  e[0] === n.state ? (r = e[1]) : ((r = D(n.state)), (e[0] = n.state), (e[1] = r));
  let i = r,
    a = n.state != null && typeof n.state == `object` && !Array.isArray(n.state) ? n.state : null,
    { data: o, isLoading: c } = s(A),
    l;
  e[2] !== i || e[3] !== a || e[4] !== t
    ? ((l = () => {
        t(i, { replace: !0, state: a });
      }),
      (e[2] = i),
      (e[3] = a),
      (e[4] = t),
      (e[5] = l))
    : (l = e[5]);
  let u, f;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, k.jsx)(y, { className: `icon-xs` })),
      (f = (0, k.jsx)(p, {
        id: `settings.openSourceLicenses.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to the main settings page`,
      })),
      (e[6] = u),
      (e[7] = f))
    : ((u = e[6]), (f = e[7]));
  let h;
  e[8] === l
    ? (h = e[9])
    : ((h = (0, k.jsxs)(x, { color: `ghost`, size: `toolbar`, onClick: l, children: [u, f] })),
      (e[8] = l),
      (e[9] = h));
  let g, v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, k.jsx)(p, {
        id: `settings.openSourceLicenses.title`,
        defaultMessage: `Open source licenses`,
        description: `Title for the open source licenses settings page`,
      })),
      (v = (0, k.jsx)(p, {
        id: `settings.openSourceLicenses.subtitle`,
        defaultMessage: `Third-party notices for dependencies included in this app`,
        description: `Subtitle for the open source licenses settings page`,
      })),
      (e[10] = g),
      (e[11] = v))
    : ((g = e[10]), (v = e[11]));
  let b;
  e[12] !== o || e[13] !== c
    ? ((b = (0, k.jsx)(S, {
        children: (0, k.jsx)(S.Content, {
          children: (0, k.jsx)(T, {
            children: c
              ? (0, k.jsx)(`div`, {
                  className: `text-sm text-token-text-secondary`,
                  children: (0, k.jsx)(p, {
                    id: `settings.openSourceLicenses.loading`,
                    defaultMessage: `Loading…`,
                    description: `Loading label while fetching third-party notices`,
                  }),
                })
              : o?.text
                ? (0, k.jsx)(`pre`, {
                    className: `bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary`,
                    children: o.text,
                  })
                : (0, k.jsx)(`div`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, k.jsx)(p, {
                      id: `settings.openSourceLicenses.missing`,
                      defaultMessage: `No third-party notices were found.`,
                      description: `Message shown when the third-party notices file is missing`,
                    }),
                  }),
          }),
        }),
      })),
      (e[12] = o),
      (e[13] = c),
      (e[14] = b))
    : (b = e[14]);
  let C;
  return (
    e[15] !== h || e[16] !== b
      ? ((C = (0, k.jsx)(_, { backSlot: h, title: g, subtitle: v, children: b })),
        (e[15] = h),
        (e[16] = b),
        (e[17] = C))
      : (C = e[17]),
    C
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
  ((O = i()),
    a(),
    h(),
    f(),
    b(),
    v(),
    u(),
    g(),
    C(),
    w(),
    t(),
    o(),
    (k = c()),
    (A = l(r, `third-party-notices`, { enabled: !0, staleTime: n.ONE_MINUTE })));
})();
export { E as OpenSourceLicensesPage };
//# sourceMappingURL=open-source-licenses-page.js.map
