import { n as e, s as t } from "./rolldown-runtime.js";
import {
  At as n,
  El as r,
  Rt as i,
  Tl as a,
  Xs as o,
  ec as s,
  kt as c,
  nc as l,
  tc as u,
  zt as d,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  $h as f,
  Bh as p,
  Gd as m,
  Ib as h,
  Rb as g,
  Yn as _,
  _r as v,
  as as y,
  hr as b,
  qd as x,
  ts as S,
  ur as C,
  zr as w,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { St as T, xt as E } from "./app-initial~app-main~automations-page.js";
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
    { conversationId: r } = e,
    a = u(i),
    o = g(`1488233300`),
    c = s(E, r),
    d = s(C, r),
    f = s(D, r),
    p = l(O)?.[r],
    m;
  t[0] !== p ||
  t[1] !== r ||
  t[2] !== c.isEligible ||
  t[3] !== c.reason ||
  t[4] !== o ||
  t[5] !== d ||
  t[6] !== a
    ? ((m = () => {
        let e = a.get(v, r),
          t = a.get(b, r),
          i = k(e, t),
          s = j(e, t, p);
        (o && i != null && a.set(O, (e) => M(e ?? {}, r, i)),
          n.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: o ? r : null,
            isEligible: o && c.isEligible,
            collaborationMode: o ? d : null,
            permissions: o ? s : null,
            reason: o ? c.reason : null,
          }));
      }),
      (t[0] = p),
      (t[1] = r),
      (t[2] = c.isEligible),
      (t[3] = c.reason),
      (t[4] = o),
      (t[5] = d),
      (t[6] = a),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== p ||
    t[9] !== r ||
    t[10] !== c.isEligible ||
    t[11] !== c.reason ||
    t[12] !== o ||
    t[13] !== f ||
    t[14] !== d ||
    t[15] !== a
      ? ((h = [p, r, c.isEligible, c.reason, f, o, d, a]),
        (t[8] = p),
        (t[9] = r),
        (t[10] = c.isEligible),
        (t[11] = c.reason),
        (t[12] = o),
        (t[13] = f),
        (t[14] = d),
        (t[15] = a),
        (t[16] = h))
      : (h = t[16]),
    (0, F.useEffect)(m, h),
    null
  );
}
var P,
  F,
  I = e(() => {
    ((P = a()), o(), (F = t(r(), 1)), _(), c(), d(), h(), T(), A());
  });
function L(e) {
  let t = (0, R.c)(4),
    { conversationId: n } = e,
    r = u(S),
    i,
    a;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => {
          let e = !1;
          return r.watch((t) => {
            let { get: i } = t,
              a = i(w, n);
            a == null || e || ((e = !0), x(r, p, { streamRole: a.role }));
          });
        }),
        (a = [n, r]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : ((i = t[2]), (a = t[3])),
    (0, z.useEffect)(i, a),
    null
  );
}
var R,
  z,
  B = e(() => {
    ((R = a()), f(), o(), (z = t(r(), 1)), _(), m(), y());
  });
export { I as i, B as n, N as r, L as t };
//# sourceMappingURL=local-conversation-stream-role-product-event.js.map
