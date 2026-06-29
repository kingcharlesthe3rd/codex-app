import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  ac as a,
  bt as o,
  kl as s,
  oc as c,
  sc as l,
  tc as u,
  yt as d,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Fa as f,
  Q_ as p,
  To as m,
  Xa as h,
  am as g,
  cC as _,
  dv as v,
  ll as y,
  oC as b,
  pl as x,
  rm as S,
  ro as C,
  to as w,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  ct as T,
  dt as E,
  ft as D,
  lt as O,
  pt as k,
  ut as A,
} from "./app-initial~app-main~automations-page.js";
import {
  n as j,
  t as M,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3.js";
function N(e) {
  let t = (0, P.c)(17),
    { conversationId: r } = e,
    i = c(n),
    s = _(`1488233300`),
    u = a(M, r),
    d = a(h, r),
    f = a(D, r),
    p = l(E)?.[r],
    m;
  t[0] !== p ||
  t[1] !== r ||
  t[2] !== u.isEligible ||
  t[3] !== u.reason ||
  t[4] !== s ||
  t[5] !== d ||
  t[6] !== i
    ? ((m = () => {
        let e = i.get(C, r),
          t = i.get(w, r),
          n = O(e, t),
          a = A(e, t, p);
        (s && n != null && i.set(E, (e) => T(e ?? {}, r, n)),
          o.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: s ? r : null,
            isEligible: s && u.isEligible,
            collaborationMode: s ? d : null,
            permissions: s ? a : null,
            reason: s ? u.reason : null,
          }));
      }),
      (t[0] = p),
      (t[1] = r),
      (t[2] = u.isEligible),
      (t[3] = u.reason),
      (t[4] = s),
      (t[5] = d),
      (t[6] = i),
      (t[7] = m))
    : (m = t[7]);
  let g;
  return (
    t[8] !== p ||
    t[9] !== r ||
    t[10] !== u.isEligible ||
    t[11] !== u.reason ||
    t[12] !== s ||
    t[13] !== f ||
    t[14] !== d ||
    t[15] !== i
      ? ((g = [p, r, u.isEligible, u.reason, f, s, d, i]),
        (t[8] = p),
        (t[9] = r),
        (t[10] = u.isEligible),
        (t[11] = u.reason),
        (t[12] = s),
        (t[13] = f),
        (t[14] = d),
        (t[15] = i),
        (t[16] = g))
      : (g = t[16]),
    (0, F.useEffect)(m, g),
    null
  );
}
var P,
  F,
  I = e(() => {
    ((P = r()), u(), (F = t(s(), 1)), f(), d(), i(), b(), j(), k());
  });
function L(e) {
  let t = (0, R.c)(4),
    { conversationId: n } = e,
    r = c(y),
    i,
    a;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => {
          let e = !1;
          return r.watch((t) => {
            let { get: i } = t,
              a = i(m, n);
            a == null || e || ((e = !0), g(r, p, { streamRole: a.role }));
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
    ((R = r()), v(), u(), (z = t(s(), 1)), f(), S(), x());
  });
export { I as i, B as n, N as r, L as t };
//# sourceMappingURL=local-conversation-stream-role-product-event.js.map
