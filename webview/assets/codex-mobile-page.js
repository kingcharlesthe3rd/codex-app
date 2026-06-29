import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  _l as a,
  ac as o,
  al as s,
  dl as c,
  kl as l,
  oc as u,
  rl as d,
  tc as f,
  xl as p,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  $ as m,
  et as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Kl as g,
  _s as _,
  _v as v,
  hs as y,
  ii as b,
  ou as x,
  ri as S,
  yv as C,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { a as w, d as T, r as E, u as D } from "./codex-mobile-setup-dialog.js";
import { a as O, i as k, n as A, r as j, t as M } from "./codex-mobile-setup-flow.js";
function N() {
  let e = (0, F.c)(8),
    t = u(n),
    r = o(_, C),
    [i] = s(D),
    c;
  e[0] === t ? (c = e[1]) : ((c = S(t)), (e[0] = t), (e[1] = c));
  let { data: l, isError: d, isFetching: f, isPending: p } = a(c);
  if (p || r == null) return null;
  let m;
  return (
    e[2] !== d || e[3] !== f || e[4] !== l || e[5] !== r.status || e[6] !== i
      ? ((m = (0, L.jsx)(P, {
          isMfaSetupRequiredError: d,
          isMfaSetupRequiredFetching: f,
          mfaSetupRequired: l,
          remoteControlStatus: r.status,
          setupStepDebugOverride: i,
        })),
        (e[2] = d),
        (e[3] = f),
        (e[4] = l),
        (e[5] = r.status),
        (e[6] = i),
        (e[7] = m))
      : (m = e[7]),
    m
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
    s = x(),
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
      ? ((e = (0, L.jsx)(m.MainContentLayout, { layout: `full-bleed` })), (t[0] = e))
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
    ? ((l = (0, L.jsx)(m.MainContentLayout, { layout: `full-bleed` })), (t[10] = l))
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
  ((F = r()),
    c(),
    d(),
    f(),
    (I = t(l(), 1)),
    g(),
    y(),
    h(),
    i(),
    v(),
    T(),
    A(),
    b(),
    k(),
    w(),
    (L = p()));
})();
export { N as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
