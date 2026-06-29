import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  CS as i,
  FB as a,
  Gj as o,
  IB as s,
  I_ as c,
  JV as l,
  Jp as u,
  M_ as d,
  Op as f,
  PB as p,
  QP as m,
  TS as h,
  Up as g,
  Xp as _,
  _m as v,
  cP as y,
  gE as b,
  kE as x,
  lP as S,
  qV as C,
  qj as w,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  n as T,
  t as E,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3.js";
import {
  a as D,
  i as O,
  n as k,
  o as A,
  r as j,
  t as M,
} from "./app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page.js";
function N(e) {
  let t = (0, P.c)(17),
    { conversationId: n } = e,
    r = a(m),
    i = w(`1488233300`),
    o = p(E, n),
    c = p(g, n),
    l = p(D, n),
    d = s(O)?.[n],
    f;
  t[0] !== d ||
  t[1] !== n ||
  t[2] !== o.isEligible ||
  t[3] !== o.reason ||
  t[4] !== i ||
  t[5] !== c ||
  t[6] !== r
    ? ((f = () => {
        let e = r.get(_, n),
          t = r.get(u, n),
          a = k(e, t),
          s = j(e, t, d);
        (i && a != null && r.set(O, (e) => M(e ?? {}, n, a)),
          S.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: i ? n : null,
            isEligible: i && o.isEligible,
            collaborationMode: i ? c : null,
            permissions: i ? s : null,
            reason: i ? o.reason : null,
          }));
      }),
      (t[0] = d),
      (t[1] = n),
      (t[2] = o.isEligible),
      (t[3] = o.reason),
      (t[4] = i),
      (t[5] = c),
      (t[6] = r),
      (t[7] = f))
    : (f = t[7]);
  let h;
  return (
    t[8] !== d ||
    t[9] !== n ||
    t[10] !== o.isEligible ||
    t[11] !== o.reason ||
    t[12] !== i ||
    t[13] !== l ||
    t[14] !== c ||
    t[15] !== r
      ? ((h = [d, n, o.isEligible, o.reason, l, i, c, r]),
        (t[8] = d),
        (t[9] = n),
        (t[10] = o.isEligible),
        (t[11] = o.reason),
        (t[12] = i),
        (t[13] = l),
        (t[14] = c),
        (t[15] = r),
        (t[16] = h))
      : (h = t[16]),
    (0, F.useEffect)(f, h),
    null
  );
}
var P,
  F,
  I = e(() => {
    ((P = C()), r(), (F = t(l(), 1)), f(), y(), n(), o(), T(), A());
  });
function L(e) {
  let t = (0, R.c)(4),
    { conversationId: n } = e,
    r = a(d),
    i,
    o;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => {
          let e = !1;
          return r.watch((t) => {
            let { get: i } = t,
              a = i(v, n);
            a == null || e || ((e = !0), h(r, b, { streamRole: a.role }));
          });
        }),
        (o = [n, r]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o))
      : ((i = t[2]), (o = t[3])),
    (0, z.useEffect)(i, o),
    null
  );
}
var R,
  z,
  B = e(() => {
    ((R = C()), x(), r(), (z = t(l(), 1)), f(), i(), c());
  });
export { I as i, B as n, N as r, L as t };
//# sourceMappingURL=local-conversation-stream-role-product-event.js.map
