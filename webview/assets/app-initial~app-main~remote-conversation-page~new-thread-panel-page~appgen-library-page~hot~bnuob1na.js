import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Aj as ee,
  CV as n,
  EB as te,
  Hf as r,
  Ij as ne,
  MI as i,
  Mj as a,
  Pj as re,
  RV as o,
  Tf as ie,
  Uf as s,
  Vp as ae,
  XO as c,
  Xp as oe,
  YO as l,
  bB as u,
  cf as se,
  iF as d,
  pf as f,
  wB as p,
  xV as m,
  yp as h,
  zV as g,
  zp as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function v(e) {
  let t = (0, y.c)(67),
    { conversationId: r, hostId: a } = e,
    o = r === void 0 ? null : r,
    l = re(`1444479692`),
    u = ne(),
    d = s(),
    f = te(oe),
    m;
  t[0] !== a || t[1] !== f ? ((m = f.includes(a)), (t[0] = a), (t[1] = f), (t[2] = m)) : (m = t[2]);
  let h = m,
    { data: g, isLoading: v } = p(ie, a),
    w = p(_, o),
    T = p(ae, o),
    E = g?.config?.[x],
    D;
  t[3] === E ? (D = t[4]) : ((D = i(E)), (t[3] = E), (t[4] = D));
  let O = D,
    k = g?.config?.[S],
    A;
  t[5] === k ? (A = t[6]) : ((A = i(k)), (t[5] = k), (t[6] = A));
  let j = A,
    M;
  t[7] === g
    ? (M = t[8])
    : ((M = g?.config != null && Object.prototype.hasOwnProperty.call(g.config, S)),
      (t[7] = g),
      (t[8] = M));
  let N = M,
    P = !1,
    F;
  if (t[9] !== u || t[10] !== O || t[11] !== l || t[12] !== v || t[13] !== j) {
    if (((F = O ?? j), !l)) F = null;
    else if (((P = !v && F == null), P)) {
      let e;
      (t[16] === u
        ? (e = t[17])
        : ((e = i(ee(u, `1867347216`).get(C, null))), (t[16] = u), (t[17] = e)),
        (F = e ?? `friendly`));
    }
    ((t[9] = u), (t[10] = O), (t[11] = l), (t[12] = v), (t[13] = j), (t[14] = F), (t[15] = P));
  } else ((F = t[14]), (P = t[15]));
  let I = F;
  (o != null && w?.personality !== void 0
    ? (I = w.personality)
    : o != null && T?.params.personality != null && (I = T.params.personality),
    l || (I = null));
  let L = (0, b.useRef)(null),
    R;
  t[18] === d
    ? (R = t[19])
    : ((R = async () => {
        await Promise.all([d(se), d([`user-saved-config`])]);
      }),
      (t[18] = d),
      (t[19] = R));
  let z = R,
    B;
  t[20] !== a ||
  t[21] !== h ||
  t[22] !== g?.configWriteTarget?.expectedVersion ||
  t[23] !== g?.configWriteTarget?.filePath
    ? ((B = async (e) => {
        h &&
          (await c(`batch-write-config-value`, {
            hostId: a,
            edits: [{ keyPath: x, value: e, mergeStrategy: `upsert` }],
            filePath: g?.configWriteTarget?.filePath ?? null,
            expectedVersion: g?.configWriteTarget?.expectedVersion ?? null,
          }));
      }),
      (t[20] = a),
      (t[21] = h),
      (t[22] = g?.configWriteTarget?.expectedVersion),
      (t[23] = g?.configWriteTarget?.filePath),
      (t[24] = B))
    : (B = t[24]);
  let V;
  t[25] !== z || t[26] !== B
    ? ((V = { mutationFn: B, onSettled: z }), (t[25] = z), (t[26] = B), (t[27] = V))
    : (V = t[27]);
  let H = n(V),
    U;
  t[28] !== O ||
  t[29] !== N ||
  t[30] !== a ||
  t[31] !== h ||
  t[32] !== j ||
  t[33] !== g?.configWriteTarget?.expectedVersion ||
  t[34] !== g?.configWriteTarget?.filePath
    ? ((U = async () => {
        if (!h || !N) return;
        let e = [{ keyPath: S, value: null, mergeStrategy: `replace` }];
        (O == null && j != null && e.unshift({ keyPath: x, value: j, mergeStrategy: `upsert` }),
          await c(`batch-write-config-value`, {
            hostId: a,
            edits: e,
            filePath: g?.configWriteTarget?.filePath ?? null,
            expectedVersion: g?.configWriteTarget?.expectedVersion ?? null,
          }));
      }),
      (t[28] = O),
      (t[29] = N),
      (t[30] = a),
      (t[31] = h),
      (t[32] = j),
      (t[33] = g?.configWriteTarget?.expectedVersion),
      (t[34] = g?.configWriteTarget?.filePath),
      (t[35] = U))
    : (U = t[35]);
  let W;
  t[36] !== z || t[37] !== U
    ? ((W = { mutationFn: U, onSettled: z }), (t[36] = z), (t[37] = U), (t[38] = W))
    : (W = t[38]);
  let G = n(W),
    K,
    q;
  (t[39] !== G || t[40] !== N || t[41] !== a || t[42] !== h
    ? ((K = () => {
        !h || !N || L.current === a || ((L.current = a), G.mutate());
      }),
      (q = [G, N, a, h]),
      (t[39] = G),
      (t[40] = N),
      (t[41] = a),
      (t[42] = h),
      (t[43] = K),
      (t[44] = q))
    : ((K = t[43]), (q = t[44])),
    (0, b.useEffect)(K, q));
  let J;
  t[45] !== F || t[46] !== a || t[47] !== h || t[48] !== v
    ? ((J = () => {
        v || !h || c(`set-personality`, { hostId: a, personality: F });
      }),
      (t[45] = F),
      (t[46] = a),
      (t[47] = h),
      (t[48] = v),
      (t[49] = J))
    : (J = t[49]);
  let Y = (0, b.useEffectEvent)(J),
    X;
  t[50] === Y
    ? (X = t[51])
    : ((X = () => {
        Y();
      }),
      (t[50] = Y),
      (t[51] = X));
  let Z;
  (t[52] !== F || t[53] !== a || t[54] !== h || t[55] !== v || t[56] !== P
    ? ((Z = [a, h, v, F, P]),
      (t[52] = F),
      (t[53] = a),
      (t[54] = h),
      (t[55] = v),
      (t[56] = P),
      (t[57] = Z))
    : (Z = t[57]),
    (0, b.useEffect)(X, Z));
  let Q;
  t[58] !== o || t[59] !== a || t[60] !== h || t[61] !== H
    ? ((Q = (e) => {
        h &&
          (Promise.all([
            c(`set-personality`, { hostId: a, personality: e }),
            ...(o == null
              ? []
              : [
                  c(`update-thread-settings-for-next-turn`, {
                    conversationId: o,
                    threadSettings: { personality: e },
                  }),
                ]),
          ]),
          H.mutate(e));
      }),
      (t[58] = o),
      (t[59] = a),
      (t[60] = h),
      (t[61] = H),
      (t[62] = Q))
    : (Q = t[62]);
  let $;
  return (
    t[63] !== l || t[64] !== I || t[65] !== Q
      ? (($ = { isPersonalityEnabled: l, personality: I, setPersonality: Q }),
        (t[63] = l),
        (t[64] = I),
        (t[65] = Q),
        (t[66] = $))
      : ($ = t[66]),
    $
  );
}
var y,
  b,
  x,
  S,
  C,
  w = e(() => {
    ((y = o()),
      m(),
      u(),
      d(),
      (b = t(g(), 1)),
      h(),
      l(),
      f(),
      r(),
      a(),
      (x = `personality`),
      (S = `model_personality`),
      (C = `default_personality`));
  });
export { v as n, w as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~bnuob1na.js.map
