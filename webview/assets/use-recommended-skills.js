import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  _t as n,
  bl as r,
  dl as i,
  dt as a,
  ft as o,
  gt as s,
  ot as c,
  st as l,
  ut as u,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import { n as d, r as f, t as p } from "./recommended-skill-statsig-overrides.js";
function m(e) {
  let t = (0, g.c)(29),
    { hostId: n, loadOnMount: i } = e,
    u = i === void 0 ? !0 : i,
    d = r(),
    m = f(),
    _;
  t[0] === n
    ? (_ = t[1])
    : ((_ = l(`recommended-skills`, { hostId: n, refresh: !1 })), (t[0] = n), (t[1] = _));
  let v = _,
    y;
  t[2] === n ? (y = t[3]) : ((y = { hostId: n, refresh: !1 }), (t[2] = n), (t[3] = y));
  let b;
  t[4] === u
    ? (b = t[5])
    : ((b = { enabled: u, staleTime: s.FIVE_MINUTES }), (t[4] = u), (t[5] = b));
  let x;
  t[6] !== y || t[7] !== b
    ? ((x = { params: y, queryConfig: b }), (t[6] = y), (t[7] = b), (t[8] = x))
    : (x = t[8]);
  let S = a(`recommended-skills`, x),
    C = S.data?.error ?? (S.error ? String(S.error.message ?? S.error) : null),
    w = o(`install-recommended-skill`),
    T;
  t[9] !== n || t[10] !== d || t[11] !== v
    ? ((T = async () => {
        let e = await c(`recommended-skills`, { params: { hostId: n, refresh: !0 } });
        d.setQueryData(v, e);
      }),
      (t[9] = n),
      (t[10] = d),
      (t[11] = v),
      (t[12] = T))
    : (T = t[12]);
  let E = T,
    D = h,
    O;
  t[13] !== n || t[14] !== S.data?.skills || t[15] !== d || t[16] !== v
    ? ((O = async (e) => {
        let t = D(S.data?.skills ?? [], e);
        if (t) return t;
        let r = await c(`recommended-skills`, { params: { hostId: n, refresh: !1 } });
        return (d.setQueryData(v, r), D(r.skills, e));
      }),
      (t[13] = n),
      (t[14] = S.data?.skills),
      (t[15] = d),
      (t[16] = v),
      (t[17] = O))
    : (O = t[17]);
  let k = O,
    A;
  t[18] !== n || t[19] !== w || t[20] !== m
    ? ((A = async (e) => {
        let { skill: t, installRoot: r } = e,
          i = r === void 0 ? null : r;
        return w.mutateAsync({
          hostId: n,
          skillId: t.id,
          repoPath: t.repoPath,
          installRoot: i,
          skillStatsigOverride: p(m, t.id),
        });
      }),
      (t[18] = n),
      (t[19] = w),
      (t[20] = m),
      (t[21] = A))
    : (A = t[21]);
  let j = A,
    M;
  return (
    t[22] !== k ||
    t[23] !== C ||
    t[24] !== j ||
    t[25] !== S.data ||
    t[26] !== S.isLoading ||
    t[27] !== E
      ? ((M = {
          data: S.data,
          errorMessage: C,
          isLoading: S.isLoading,
          refresh: E,
          ensureSkillByName: k,
          installSkill: j,
        }),
        (t[22] = k),
        (t[23] = C),
        (t[24] = j),
        (t[25] = S.data),
        (t[26] = S.isLoading),
        (t[27] = E),
        (t[28] = M))
      : (M = t[28]),
    M
  );
}
function h(e, t) {
  let n = t.toLowerCase();
  return (
    e.find((e) => {
      let t = e.name.toLowerCase(),
        r = e.id.toLowerCase();
      return t === n || r === n;
    }) ?? null
  );
}
var g,
  _ = e(() => {
    ((g = t()), i(), n(), u(), d());
  });
export { m as n, _ as t };
//# sourceMappingURL=use-recommended-skills.js.map
