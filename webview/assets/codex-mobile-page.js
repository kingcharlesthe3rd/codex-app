import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  AV as i,
  BV as a,
  FB as o,
  IV as s,
  JV as c,
  Ov as l,
  PB as u,
  QP as d,
  SV as f,
  UE as p,
  VE as m,
  Xd as h,
  Zd as g,
  ch as _,
  mv as v,
  oh as y,
  qV as b,
  wV as x,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Bn as S,
  Vn as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import { a as w, d as T, r as E, u as D } from "./codex-mobile-setup-dialog.js";
import { a as O, i as k, n as A, r as j, t as M } from "./codex-mobile-setup-flow.js";
function N() {
  let e = (0, F.c)(8),
    t = o(d),
    n = u(_, p),
    [r] = x(D),
    i;
  e[0] === t ? (i = e[1]) : ((i = h(t)), (e[0] = t), (e[1] = i));
  let { data: a, isError: c, isFetching: l, isPending: f } = s(i);
  if (f || n == null) return null;
  let m;
  return (
    e[2] !== c || e[3] !== l || e[4] !== a || e[5] !== n.status || e[6] !== r
      ? ((m = (0, L.jsx)(P, {
          isMfaSetupRequiredError: c,
          isMfaSetupRequiredFetching: l,
          mfaSetupRequired: a,
          remoteControlStatus: n.status,
          setupStepDebugOverride: r,
        })),
        (e[2] = c),
        (e[3] = l),
        (e[4] = a),
        (e[5] = n.status),
        (e[6] = r),
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
    s = l(),
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
      ? ((e = (0, L.jsx)(S.MainContentLayout, { layout: `full-bleed` })), (t[0] = e))
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
  let u;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, L.jsx)(S.MainContentLayout, { layout: `full-bleed` })), (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] === s
      ? (d = t[12])
      : ((d = (0, L.jsxs)(L.Fragment, {
          children: [
            u,
            (0, L.jsx)(E, {
              onManageConnections: () => {
                s(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[11] = s),
        (t[12] = d)),
    d
  );
}
var F, I, L;
e(() => {
  ((F = b()),
    i(),
    f(),
    r(),
    (I = t(c(), 1)),
    v(),
    y(),
    C(),
    n(),
    m(),
    T(),
    A(),
    g(),
    k(),
    w(),
    (L = a()));
})();
export { N as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
