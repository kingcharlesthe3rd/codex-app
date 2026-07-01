import { n as e } from "./rolldown-runtime.js";
import {
  AV as t,
  BN as n,
  FN as r,
  GN as i,
  PN as a,
  RN as o,
  RV as s,
  WN as c,
  xV as l,
  zN as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { n as d, r as f, t as p } from "./recommended-skill-statsig-overrides.js";
function m(e) {
  let i = (0, g.c)(29),
    { hostId: o, loadOnMount: s } = e,
    l = s === void 0 ? !0 : s,
    d = t(),
    m = f(),
    _;
  i[0] === o
    ? (_ = i[1])
    : ((_ = r(`recommended-skills`, { hostId: o, refresh: !1 })), (i[0] = o), (i[1] = _));
  let v = _,
    y;
  i[2] === o ? (y = i[3]) : ((y = { hostId: o, refresh: !1 }), (i[2] = o), (i[3] = y));
  let b;
  i[4] === l
    ? (b = i[5])
    : ((b = { enabled: l, staleTime: c.FIVE_MINUTES }), (i[4] = l), (i[5] = b));
  let x;
  i[6] !== y || i[7] !== b
    ? ((x = { params: y, queryConfig: b }), (i[6] = y), (i[7] = b), (i[8] = x))
    : (x = i[8]);
  let S = u(`recommended-skills`, x),
    C = S.data?.error ?? (S.error ? String(S.error.message ?? S.error) : null),
    w = n(`install-recommended-skill`),
    T;
  i[9] !== o || i[10] !== d || i[11] !== v
    ? ((T = async () => {
        let e = await a(`recommended-skills`, { params: { hostId: o, refresh: !0 } });
        d.setQueryData(v, e);
      }),
      (i[9] = o),
      (i[10] = d),
      (i[11] = v),
      (i[12] = T))
    : (T = i[12]);
  let E = T,
    D = h,
    O;
  i[13] !== o || i[14] !== S.data?.skills || i[15] !== d || i[16] !== v
    ? ((O = async (e) => {
        let t = D(S.data?.skills ?? [], e);
        if (t) return t;
        let n = await a(`recommended-skills`, { params: { hostId: o, refresh: !1 } });
        return (d.setQueryData(v, n), D(n.skills, e));
      }),
      (i[13] = o),
      (i[14] = S.data?.skills),
      (i[15] = d),
      (i[16] = v),
      (i[17] = O))
    : (O = i[17]);
  let k = O,
    A;
  i[18] !== o || i[19] !== w || i[20] !== m
    ? ((A = async (e) => {
        let { skill: t, installRoot: n } = e,
          r = n === void 0 ? null : n;
        return w.mutateAsync({
          hostId: o,
          skillId: t.id,
          repoPath: t.repoPath,
          installRoot: r,
          skillStatsigOverride: p(m, t.id),
        });
      }),
      (i[18] = o),
      (i[19] = w),
      (i[20] = m),
      (i[21] = A))
    : (A = i[21]);
  let j = A,
    M;
  return (
    i[22] !== k ||
    i[23] !== C ||
    i[24] !== j ||
    i[25] !== S.data ||
    i[26] !== S.isLoading ||
    i[27] !== E
      ? ((M = {
          data: S.data,
          errorMessage: C,
          isLoading: S.isLoading,
          refresh: E,
          ensureSkillByName: k,
          installSkill: j,
        }),
        (i[22] = k),
        (i[23] = C),
        (i[24] = j),
        (i[25] = S.data),
        (i[26] = S.isLoading),
        (i[27] = E),
        (i[28] = M))
      : (M = i[28]),
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
    ((g = s()), l(), i(), o(), d());
  });
export { m as n, _ as t };
//# sourceMappingURL=use-recommended-skills.js.map
