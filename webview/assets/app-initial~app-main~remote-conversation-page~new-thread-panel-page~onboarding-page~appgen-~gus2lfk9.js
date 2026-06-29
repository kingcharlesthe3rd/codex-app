import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  xl as n,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Jp as r,
  Yp as i,
  am as a,
  im as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
function s(e) {
  let t = (0, c.c)(74),
    {
      title: n,
      content: i,
      customCtas: a,
      onPrimaryCtaClick: s,
      primaryCtaText: u,
      primaryCtaColor: d,
      secondaryCtaColor: f,
      onSecondaryCtaClick: p,
      onDangerCtaClick: m,
      secondaryCtaText: h,
      dangerCtaText: g,
      Icon: _,
      iconClassName: v,
      isPrimaryCtaDisabled: y,
      isSecondaryCtaDisabled: b,
      isDangerCtaDisabled: x,
      type: S,
      className: C,
      layout: w,
      stackOnNarrow: T,
    } = e,
    E = y === void 0 ? !1 : y,
    D = b === void 0 ? !1 : b,
    O = x === void 0 ? !1 : x,
    k = S === void 0 ? `normal` : S,
    A = w === void 0 ? `horizontal` : w,
    ee = T === void 0 ? !1 : T,
    j = A === `vertical`,
    M = A === `verticalIcon`,
    N = A === `horizontal` && ee,
    P = j ? `w-full justify-end pt-0` : `shrink-0`,
    F = N && `max-[400px]:w-full max-[400px]:shrink max-[400px]:justify-center`,
    I;
  t[0] !== P || t[1] !== F
    ? ((I = o(`flex gap-2 pb-0`, P, F)), (t[0] = P), (t[1] = F), (t[2] = I))
    : (I = t[2]);
  let L = I,
    R;
  t[3] !== L ||
  t[4] !== a ||
  t[5] !== g ||
  t[6] !== O ||
  t[7] !== E ||
  t[8] !== D ||
  t[9] !== m ||
  t[10] !== s ||
  t[11] !== p ||
  t[12] !== d ||
  t[13] !== u ||
  t[14] !== f ||
  t[15] !== h
    ? ((R = a
        ? (0, l.jsx)(`div`, { className: L, children: a })
        : (u || h || g) &&
          (0, l.jsxs)(`div`, {
            className: L,
            children: [
              u &&
                (0, l.jsx)(r, {
                  onClick: s,
                  color: d ?? `outline`,
                  className: `shrink-0`,
                  disabled: E,
                  children: u,
                }),
              h &&
                (0, l.jsx)(r, {
                  onClick: p,
                  color: f ?? `ghost`,
                  className: `shrink-0`,
                  disabled: D,
                  children: h,
                }),
              g &&
                (0, l.jsx)(r, {
                  onClick: m,
                  color: `danger`,
                  className: `shrink-0`,
                  disabled: O,
                  children: g,
                }),
            ],
          })),
      (t[3] = L),
      (t[4] = a),
      (t[5] = g),
      (t[6] = O),
      (t[7] = E),
      (t[8] = D),
      (t[9] = m),
      (t[10] = s),
      (t[11] = p),
      (t[12] = d),
      (t[13] = u),
      (t[14] = f),
      (t[15] = h),
      (t[16] = R))
    : (R = t[16]);
  let z = R,
    B,
    V,
    H,
    U,
    W,
    G;
  if (
    t[17] !== _ ||
    t[18] !== C ||
    t[19] !== i ||
    t[20] !== z ||
    t[21] !== v ||
    t[22] !== j ||
    t[23] !== M ||
    t[24] !== N ||
    t[25] !== n ||
    t[26] !== k
  ) {
    G = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = {
          error: `border-token-error-foreground/20 text-token-error-foreground bg-token-input-validation-error-background/20`,
          info: `border-token-border bg-token-input-background text-token-foreground`,
          infoAccent: `border-token-text-link-foreground/40 bg-token-input-background text-token-foreground`,
          normal: `border-token-border bg-token-input-background text-token-foreground`,
        }[k],
        r = o(`icon-sm shrink-0`, k === `infoAccent` && `text-token-text-link-foreground`, v),
        a = () =>
          (0, l.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [
              _ && (0, l.jsx)(_, { className: r }),
              n &&
                (0, l.jsx)(`h3`, {
                  className: `text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold`,
                  children: n,
                }),
            ],
          }),
        s;
      if (
        (t[33] !== i || t[34] !== n || t[35] !== k
          ? ((s = (e) =>
              (0, l.jsx)(`div`, {
                className: o(`flex min-w-0 flex-1 flex-col`, e),
                children: (0, l.jsx)(`div`, {
                  className: o(
                    `electron:leading-relaxed min-w-0 flex-1 text-pretty`,
                    n
                      ? k === `error`
                        ? `text-token-error-foreground`
                        : `text-token-description-foreground`
                      : ``,
                  ),
                  children: i,
                }),
              })),
            (t[33] = i),
            (t[34] = n),
            (t[35] = k),
            (t[36] = s))
          : (s = t[36]),
        (B = s),
        j)
      ) {
        let r = o(
            `flex w-full flex-col gap-1.5 rounded-3xl border py-2 pl-3 pr-2 text-sm lg:mx-auto dark:border-transparent`,
            e,
            C,
          ),
          i;
        t[37] !== _ || t[38] !== a || t[39] !== n
          ? ((i = (_ || n) && a()), (t[37] = _), (t[38] = a), (t[39] = n), (t[40] = i))
          : (i = t[40]);
        let s;
        (t[41] === B ? (s = t[42]) : ((s = B(`gap-1.5`)), (t[41] = B), (t[42] = s)),
          (G = (0, l.jsx)(`div`, {
            className: `rounded-3xl bg-token-side-bar-background opacity-100`,
            children: (0, l.jsxs)(`aside`, { className: r, children: [i, s, z] }),
          })));
        break bb0;
      }
      if (M) {
        let i = o(
            `flex w-full gap-3 rounded-3xl border py-2 pl-3 pr-2 text-sm lg:mx-auto dark:border-transparent`,
            e,
            C,
          ),
          a;
        t[43] === n
          ? (a = t[44])
          : ((a = n
              ? (0, l.jsx)(`h3`, {
                  className: `text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold`,
                  children: n,
                })
              : null),
            (t[43] = n),
            (t[44] = a));
        let s;
        t[45] === B ? (s = t[46]) : ((s = B()), (t[45] = B), (t[46] = s));
        let c;
        (t[47] !== z || t[48] !== a || t[49] !== s
          ? ((c = (0, l.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 flex-col gap-1.5`,
              children: [a, s, z],
            })),
            (t[47] = z),
            (t[48] = a),
            (t[49] = s),
            (t[50] = c))
          : (c = t[50]),
          (G = (0, l.jsx)(`div`, {
            className: `rounded-3xl bg-token-side-bar-background opacity-100`,
            children: (0, l.jsxs)(`aside`, {
              className: i,
              children: [
                _
                  ? (0, l.jsx)(`div`, {
                      className: `flex items-center self-center`,
                      children: (0, l.jsx)(_, { className: r }),
                    })
                  : null,
                c,
              ],
            }),
          })));
        break bb0;
      }
      ((W = `rounded-3xl bg-token-side-bar-background opacity-100`),
        (U = o(
          `flex w-full items-center gap-4 rounded-3xl border py-2 pl-3 pr-2 text-sm lg:mx-auto dark:border-transparent`,
          N && `max-[400px]:items-start max-[400px]:gap-2`,
          e,
          C,
        )));
      let c = N && `max-[400px]:items-start`;
      (t[51] === c
        ? (V = t[52])
        : ((V = o(`flex h-full w-full items-center gap-2`, c)), (t[51] = c), (t[52] = V)),
        (H = _ && (0, l.jsx)(_, { className: o(r, N && `max-[400px]:hidden`) })));
    }
    ((t[17] = _),
      (t[18] = C),
      (t[19] = i),
      (t[20] = z),
      (t[21] = v),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N),
      (t[25] = n),
      (t[26] = k),
      (t[27] = B),
      (t[28] = V),
      (t[29] = H),
      (t[30] = U),
      (t[31] = W),
      (t[32] = G));
  } else ((B = t[27]), (V = t[28]), (H = t[29]), (U = t[30]), (W = t[31]), (G = t[32]));
  if (G !== Symbol.for(`react.early_return_sentinel`)) return G;
  let K = N && `max-[400px]:flex-col max-[400px]:items-stretch max-[400px]:gap-2`,
    q;
  t[53] === K
    ? (q = t[54])
    : ((q = o(`flex min-w-0 grow flex-row items-center justify-between gap-2`, K)),
      (t[53] = K),
      (t[54] = q));
  let J;
  t[55] === n
    ? (J = t[56])
    : ((J = n && (0, l.jsx)(`h3`, { className: `text-sm font-bold text-pretty`, children: n })),
      (t[55] = n),
      (t[56] = J));
  let Y;
  t[57] === B ? (Y = t[58]) : ((Y = B()), (t[57] = B), (t[58] = Y));
  let X;
  t[59] !== z || t[60] !== q || t[61] !== J || t[62] !== Y
    ? ((X = (0, l.jsxs)(`div`, { className: q, children: [J, Y, z] })),
      (t[59] = z),
      (t[60] = q),
      (t[61] = J),
      (t[62] = Y),
      (t[63] = X))
    : (X = t[63]);
  let Z;
  t[64] !== V || t[65] !== H || t[66] !== X
    ? ((Z = (0, l.jsxs)(`div`, { className: V, children: [H, X] })),
      (t[64] = V),
      (t[65] = H),
      (t[66] = X),
      (t[67] = Z))
    : (Z = t[67]);
  let Q;
  t[68] !== U || t[69] !== Z
    ? ((Q = (0, l.jsx)(`aside`, { className: U, children: Z })),
      (t[68] = U),
      (t[69] = Z),
      (t[70] = Q))
    : (Q = t[70]);
  let $;
  return (
    t[71] !== W || t[72] !== Q
      ? (($ = (0, l.jsx)(`div`, { className: W, children: Q })),
        (t[71] = W),
        (t[72] = Q),
        (t[73] = $))
      : ($ = t[73]),
    $
  );
}
var c,
  l,
  u = e(() => {
    ((c = t()), a(), i(), (l = n()));
  });
export { u as n, s as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~gus2lfk9.js.map
