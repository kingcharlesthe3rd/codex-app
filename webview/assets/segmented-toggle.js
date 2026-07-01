import { n as e } from "./rolldown-runtime.js";
import {
  Qj as t,
  RV as n,
  TP as r,
  eM as i,
  fN as a,
  jV as o,
  pN as s,
  wP as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function l(e) {
  let n = (0, u.c)(29),
    {
      options: r,
      selectedId: i,
      onSelect: o,
      size: s,
      className: l,
      buttonClassName: f,
      fullWidth: p,
      uniform: m,
      selectedColor: h,
      unselectedColor: g,
      ariaLabel: _,
      ariaLabelledBy: v,
    } = e,
    y;
  n[0] === r ? (y = n[1]) : ((y = r === void 0 ? [] : r), (n[0] = r), (n[1] = y));
  let b = y,
    x = s === void 0 ? `default` : s,
    S = p === void 0 ? !1 : p,
    C = h === void 0 ? `secondary` : h,
    w = g === void 0 ? `ghost` : g,
    T = m ?? (x === `icon` && b.length > 2),
    E = S ? `flex w-full` : `inline-flex`,
    D;
  n[2] !== l || n[3] !== E
    ? ((D = c(E, `items-center gap-0.5`, l)), (n[2] = l), (n[3] = E), (n[4] = D))
    : (D = n[4]);
  let O;
  if (
    n[5] !== f ||
    n[6] !== S ||
    n[7] !== o ||
    n[8] !== b ||
    n[9] !== C ||
    n[10] !== i ||
    n[11] !== x ||
    n[12] !== T ||
    n[13] !== w
  ) {
    let e;
    (n[15] !== f ||
    n[16] !== S ||
    n[17] !== o ||
    n[18] !== C ||
    n[19] !== i ||
    n[20] !== x ||
    n[21] !== T ||
    n[22] !== w
      ? ((e = (e) => {
          let n = e.id === i,
            r = e.disabled ?? !1,
            s = () => {
              r || o(e.id);
            };
          return e.tooltipContent
            ? (0, d.jsx)(
                t,
                {
                  tooltipContent: e.tooltipContent,
                  children: (0, d.jsx)(
                    a,
                    {
                      color: n ? C : w,
                      size: x,
                      onClick: s,
                      "aria-pressed": n,
                      uniform: T,
                      "aria-label": e.ariaLabel,
                      disabled: r,
                      className: c(S ? `flex-1 justify-center` : void 0, f),
                      children: e.label,
                    },
                    e.id,
                  ),
                },
                e.id,
              )
            : (0, d.jsx)(
                a,
                {
                  color: n ? C : w,
                  size: x,
                  onClick: s,
                  "aria-pressed": n,
                  uniform: T,
                  "aria-label": e.ariaLabel,
                  disabled: r,
                  className: c(S ? `flex-1 justify-center` : void 0, f),
                  children: e.label,
                },
                e.id,
              );
        }),
        (n[15] = f),
        (n[16] = S),
        (n[17] = o),
        (n[18] = C),
        (n[19] = i),
        (n[20] = x),
        (n[21] = T),
        (n[22] = w),
        (n[23] = e))
      : (e = n[23]),
      (O = b.map(e)),
      (n[5] = f),
      (n[6] = S),
      (n[7] = o),
      (n[8] = b),
      (n[9] = C),
      (n[10] = i),
      (n[11] = x),
      (n[12] = T),
      (n[13] = w),
      (n[14] = O));
  } else O = n[14];
  let k;
  return (
    n[24] !== _ || n[25] !== v || n[26] !== D || n[27] !== O
      ? ((k = (0, d.jsx)(`div`, {
          className: D,
          role: `group`,
          "aria-label": _,
          "aria-labelledby": v,
          children: O,
        })),
        (n[24] = _),
        (n[25] = v),
        (n[26] = D),
        (n[27] = O),
        (n[28] = k))
      : (k = n[28]),
    k
  );
}
var u,
  d,
  f = e(() => {
    ((u = n()), r(), s(), i(), (d = o()));
  });
export { f as n, l as t };
//# sourceMappingURL=segmented-toggle.js.map
