import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $m as n,
  DV as r,
  Hd as i,
  IP as a,
  LP as o,
  NE as s,
  RV as c,
  TB as l,
  Vd as u,
  Zm as d,
  av as f,
  bB as p,
  hV as m,
  jE as h,
  jV as g,
  pV as _,
  vv as v,
  wB as y,
  xV as b,
  zV as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { Sd as S, xd as C } from "./app-initial~app-main~onboarding-page.js";
import { a as w, d as T, r as E, u as D } from "./codex-mobile-setup-dialog.js";
import { a as O, i as k, n as A, r as j, t as M } from "./codex-mobile-setup-flow.js";
function N() {
  let e = (0, F.c)(8),
    t = l(a),
    i = y(n, s),
    [o] = m(D),
    c;
  e[0] === t ? (c = e[1]) : ((c = u(t)), (e[0] = t), (e[1] = c));
  let { data: d, isError: f, isFetching: p, isPending: h } = r(c);
  if (h || i == null) return null;
  let g;
  return (
    e[2] !== f || e[3] !== p || e[4] !== d || e[5] !== i.status || e[6] !== o
      ? ((g = (0, L.jsx)(P, {
          isMfaSetupRequiredError: f,
          isMfaSetupRequiredFetching: p,
          mfaSetupRequired: d,
          remoteControlStatus: i.status,
          setupStepDebugOverride: o,
        })),
        (e[2] = f),
        (e[3] = p),
        (e[4] = d),
        (e[5] = i.status),
        (e[6] = o),
        (e[7] = g))
      : (g = e[7]),
    g
  );
}
function P(e) {
  let t = (0, F.c)(13),
    {
      isMfaSetupRequiredError: n,
      isMfaSetupRequiredFetching: r,
      mfaSetupRequired: i,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    } = e,
    s = v(),
    [c] = (0, I.useState)(a);
  if (r) return null;
  if (
    O({
      isMfaSetupRequiredError: n,
      mfaSetupRequired: i,
      initialRemoteControlStatus: c,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    })
  ) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(C.MainContentLayout, { layout: `full-bleed` })), (t[0] = e))
      : (e = t[0]);
    let r;
    t[1] !== n || t[2] !== i || t[3] !== a
      ? ((r = j({ isMfaSetupRequiredError: n, mfaSetupRequired: i, remoteControlStatus: a })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a),
        (t[4] = r))
      : (r = t[4]);
    let o;
    t[5] === s
      ? (o = t[6])
      : ((o = () => {
          s(`/`);
        }),
        (t[5] = s),
        (t[6] = o));
    let c;
    return (
      t[7] !== r || t[8] !== o
        ? ((c = (0, L.jsxs)(L.Fragment, {
            children: [e, (0, L.jsx)(M, { initialStep: r, onClose: o, variant: `page` })],
          })),
          (t[7] = r),
          (t[8] = o),
          (t[9] = c))
        : (c = t[9]),
      c
    );
  }
  let l;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, L.jsx)(C.MainContentLayout, { layout: `full-bleed` })), (t[10] = l))
    : (l = t[10]);
  let u;
  return (
    t[11] === s
      ? (u = t[12])
      : ((u = (0, L.jsxs)(L.Fragment, {
          children: [
            l,
            (0, L.jsx)(E, {
              onManageConnections: () => {
                s(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[11] = s),
        (t[12] = u)),
    u
  );
}
var F, I, L;
e(() => {
  ((F = c()),
    b(),
    _(),
    p(),
    (I = t(x(), 1)),
    f(),
    d(),
    S(),
    o(),
    h(),
    T(),
    A(),
    i(),
    k(),
    w(),
    (L = g()));
})();
export { N as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
