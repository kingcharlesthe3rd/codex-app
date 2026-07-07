import { n as e } from "./rolldown-runtime.js";
import {
  Dt as t,
  Et as n,
  St as r,
  Tl as i,
  _l as a,
  _t as o,
  bt as s,
  cl as c,
  gt as l,
  xt as u,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { n as d, r as f, t as p } from "./recommended-skill-statsig-overrides.js";
function m(e) {
  let t = (0, g.c)(29),
    { hostId: i, loadOnMount: s } = e,
    c = s === void 0 ? !0 : s,
    d = a(),
    m = f(),
    _;
  t[0] === i
    ? (_ = t[1])
    : ((_ = o(`recommended-skills`, { hostId: i, refresh: !1 })), (t[0] = i), (t[1] = _));
  let v = _,
    y;
  t[2] === i ? (y = t[3]) : ((y = { hostId: i, refresh: !1 }), (t[2] = i), (t[3] = y));
  let b;
  t[4] === c
    ? (b = t[5])
    : ((b = { enabled: c, staleTime: n.FIVE_MINUTES }), (t[4] = c), (t[5] = b));
  let x;
  t[6] !== y || t[7] !== b
    ? ((x = { params: y, queryConfig: b }), (t[6] = y), (t[7] = b), (t[8] = x))
    : (x = t[8]);
  let S = u(`recommended-skills`, x),
    C = S.data?.error ?? (S.error ? String(S.error.message ?? S.error) : null),
    w = r(`install-recommended-skill`),
    T;
  t[9] !== i || t[10] !== d || t[11] !== v
    ? ((T = async () => {
        let e = await l(`recommended-skills`, { params: { hostId: i, refresh: !0 } });
        d.setQueryData(v, e);
      }),
      (t[9] = i),
      (t[10] = d),
      (t[11] = v),
      (t[12] = T))
    : (T = t[12]);
  let E = T,
    D = h,
    O;
  t[13] !== i || t[14] !== S.data?.skills || t[15] !== d || t[16] !== v
    ? ((O = async (e) => {
        let t = D(S.data?.skills ?? [], e);
        if (t) return t;
        let n = await l(`recommended-skills`, { params: { hostId: i, refresh: !1 } });
        return (d.setQueryData(v, n), D(n.skills, e));
      }),
      (t[13] = i),
      (t[14] = S.data?.skills),
      (t[15] = d),
      (t[16] = v),
      (t[17] = O))
    : (O = t[17]);
  let k = O,
    A;
  t[18] !== i || t[19] !== w || t[20] !== m
    ? ((A = async (e) => {
        let { skill: t, installRoot: n } = e,
          r = n === void 0 ? null : n;
        return w.mutateAsync({
          hostId: i,
          skillId: t.id,
          repoPath: t.repoPath,
          installRoot: r,
          skillStatsigOverride: p(m, t.id),
        });
      }),
      (t[18] = i),
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
    ((g = i()), c(), t(), s(), d());
  });
export { m as n, _ as t };
//# sourceMappingURL=use-recommended-skills.js.map
