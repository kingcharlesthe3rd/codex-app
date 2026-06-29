import { n as e } from "./rolldown-runtime.js";
import {
  Bs as t,
  Ol as n,
  Tt as r,
  _l as i,
  _t as a,
  bl as o,
  dl as s,
  gt as c,
  pl as l,
  sc as u,
  tc as d,
  ws as f,
  wt as p,
  xs as m,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Ei as h,
  Fa as g,
  Lb as _,
  Rb as v,
  Ta as y,
  aa as b,
  bC as x,
  ia as S,
  ki as C,
  xC as w,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
function T(e) {
  return [...F, e];
}
function E(e) {
  return [...I, e];
}
async function D(e) {
  try {
    return (await v(`get-windows-sandbox-readiness-for-host`, { hostId: e })).status;
  } catch (e) {
    throw (
      r.error(`Failed to load Windows sandbox readiness`, { safe: {}, sensitive: { error: e } }), e
    );
  }
}
function O(e) {
  let t = (0, M.c)(8),
    n = u(y),
    a = e ?? n,
    s;
  t[0] === a ? (s = t[1]) : ((s = T(a)), (t[0] = a), (t[1] = s));
  let l = s,
    d = o(),
    f;
  t[2] !== d || t[3] !== a
    ? ((f = async () => {
        try {
          return j((await h(d, a, null, !1)).config.windows);
        } catch (e) {
          let t = e;
          return (
            r.error(`Failed to load Windows sandbox mode`, {
              safe: { error: String(t) },
              sensitive: {},
            }),
            null
          );
        }
      }),
      (t[2] = d),
      (t[3] = a),
      (t[4] = f))
    : (f = t[4]);
  let p;
  return (
    t[5] !== l || t[6] !== f
      ? ((p = { queryKey: l, queryFn: f, staleTime: c.ONE_MINUTE }),
        (t[5] = l),
        (t[6] = f),
        (t[7] = p))
      : (p = t[7]),
    i(p)
  );
}
function k(e) {
  let t = (0, M.c)(8),
    n = u(y),
    r = e?.hostId ?? n,
    a;
  t[0] === r ? (a = t[1]) : ((a = E(r)), (t[0] = r), (t[1] = a));
  let o;
  t[2] === r ? (o = t[3]) : ((o = () => D(r)), (t[2] = r), (t[3] = o));
  let s = e?.enabled ?? !0,
    l;
  return (
    t[4] !== a || t[5] !== o || t[6] !== s
      ? ((l = {
          queryKey: a,
          queryFn: o,
          staleTime: c.INFINITE,
          retry: !1,
          retryOnMount: !1,
          enabled: s,
        }),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    i(l)
  );
}
function A(e) {
  let t = (0, M.c)(19),
    n = u(y),
    i = e ?? n,
    a = o(),
    s = b(),
    c;
  t[0] === i ? (c = t[1]) : ((c = T(i)), (t[0] = i), (t[1] = c));
  let d = c,
    f;
  t[2] === i ? (f = t[3]) : ((f = E(i)), (t[2] = i), (t[3] = f));
  let p = f,
    m;
  t[4] === i
    ? (m = t[5])
    : ((m = (e) =>
        v(`batch-write-config-value-for-host`, {
          hostId: i,
          edits: [
            {
              keyPath: `windows.sandbox`,
              value: e,
              mergeStrategy: e == null ? `replace` : `upsert`,
            },
          ],
          filePath: null,
          expectedVersion: null,
        })),
      (t[4] = i),
      (t[5] = m));
  let h, g;
  t[6] !== a || t[7] !== d
    ? ((h = (e) => {
        let t = a.getQueryData(d);
        return (a.setQueryData(d, e), { previousMode: t });
      }),
      (g = (e, t, n) => {
        (r.error(`Failed to update Windows sandbox mode`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          n?.previousMode !== void 0 && a.setQueryData(d, n.previousMode));
      }),
      (t[6] = a),
      (t[7] = d),
      (t[8] = h),
      (t[9] = g))
    : ((h = t[8]), (g = t[9]));
  let _;
  t[10] !== s || t[11] !== d || t[12] !== p
    ? ((_ = async () => {
        await Promise.all([s(d), s(p)]);
      }),
      (t[10] = s),
      (t[11] = d),
      (t[12] = p),
      (t[13] = _))
    : (_ = t[13]);
  let x;
  return (
    t[14] !== m || t[15] !== h || t[16] !== g || t[17] !== _
      ? ((x = { mutationFn: m, onMutate: h, onError: g, onSettled: _ }),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g),
        (t[17] = _),
        (t[18] = x))
      : (x = t[18]),
    l(x)
  );
}
function j(e) {
  let t = P.safeParse(e);
  return t.success ? (t.data.sandbox ?? null) : null;
}
var M,
  N,
  P,
  F,
  I,
  L = e(() => {
    ((M = n()),
      s(),
      d(),
      m(),
      g(),
      _(),
      C(),
      S(),
      p(),
      a(),
      (N = f([`elevated`, `unelevated`])),
      (P = t({ sandbox: N.optional() }).passthrough()),
      (F = [`windows-sandbox`, `mode`]),
      (I = [`windows-sandbox`, `readiness`]));
  });
function R(e) {
  return e ?? U;
}
function z({ mode: e, visible: t, settings: n }) {
  return { ...R(n), [e]: t };
}
function B({
  canShowDefaultPermissions: e,
  canSelectGuardianMode: t,
  canShowConfigCustom: n,
  canShowConfigFullAccess: r,
  canShowGuardianOption: i,
  selectionAgentModes: a,
  visibleAgentModes: o,
}) {
  let s = r && o.includes(`full-access`),
    c = n && a.includes(`custom`),
    l = i;
  return {
    canShowCustom: c,
    canShowFullAccess: s,
    optionCount: (e ? 1 : 0) + (l && t ? 1 : 0) + (s ? 1 : 0) + (c ? 1 : 0),
    showGuardianOption: l,
  };
}
function V({ availableAgentModes: e, visibility: t }) {
  return e.filter((e) => {
    switch (e) {
      case `guardian-approvals`:
        return t[`guardian-approvals`];
      case `full-access`:
        return t[`full-access`];
      case `custom`:
        return !1;
      case `auto`:
      case `granular`:
      case `read-only`:
        return !0;
    }
  });
}
function H({ availableAgentModes: e, visibleAgentModes: t }) {
  return e.includes(`custom`) ? [...t, `custom`] : t;
}
var U,
  W,
  G = e(() => {
    (x(),
      (U = { "guardian-approvals": !0, "full-access": !0 }),
      (W = w(`composer-permission-mode-visibility`, U)));
  });
export {
  V as a,
  T as c,
  A as d,
  O as f,
  H as i,
  E as l,
  R as n,
  G as o,
  k as p,
  B as r,
  z as s,
  W as t,
  L as u,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d4gukj65.js.map
