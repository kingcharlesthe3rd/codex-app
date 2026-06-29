import { t as e } from "./jsx-runtime.js";
import { t } from "./clsx.js";
import { lt as n } from "./vscode-api.js";
import { t as r } from "./tooltip.js";
import { t as i } from "./button.js";
var a = n(),
  o = e();
function s(e) {
  let n = (0, a.c)(29),
    {
      options: s,
      selectedId: c,
      onSelect: l,
      size: u,
      className: d,
      buttonClassName: f,
      fullWidth: p,
      uniform: m,
      selectedColor: h,
      unselectedColor: g,
      ariaLabel: _,
      ariaLabelledBy: v,
    } = e,
    y;
  n[0] === s ? (y = n[1]) : ((y = s === void 0 ? [] : s), (n[0] = s), (n[1] = y));
  let b = y,
    x = u === void 0 ? `default` : u,
    S = p === void 0 ? !1 : p,
    C = h === void 0 ? `secondary` : h,
    w = g === void 0 ? `ghost` : g,
    T = m ?? (x === `icon` && b.length > 2),
    E = S ? `flex w-full` : `inline-flex`,
    D;
  n[2] !== d || n[3] !== E
    ? ((D = t(E, `items-center gap-0.5`, d)), (n[2] = d), (n[3] = E), (n[4] = D))
    : (D = n[4]);
  let O;
  if (
    n[5] !== f ||
    n[6] !== S ||
    n[7] !== l ||
    n[8] !== b ||
    n[9] !== C ||
    n[10] !== c ||
    n[11] !== x ||
    n[12] !== T ||
    n[13] !== w
  ) {
    let e;
    (n[15] !== f ||
    n[16] !== S ||
    n[17] !== l ||
    n[18] !== C ||
    n[19] !== c ||
    n[20] !== x ||
    n[21] !== T ||
    n[22] !== w
      ? ((e = (e) => {
          let n = e.id === c,
            a = e.disabled ?? !1,
            s = () => {
              a || l(e.id);
            };
          return e.tooltipContent
            ? (0, o.jsx)(
                r,
                {
                  tooltipContent: e.tooltipContent,
                  children: (0, o.jsx)(
                    i,
                    {
                      color: n ? C : w,
                      size: x,
                      onClick: s,
                      "aria-pressed": n,
                      uniform: T,
                      "aria-label": e.ariaLabel,
                      disabled: a,
                      className: t(S ? `flex-1 justify-center` : void 0, f),
                      children: e.label,
                    },
                    e.id,
                  ),
                },
                e.id,
              )
            : (0, o.jsx)(
                i,
                {
                  color: n ? C : w,
                  size: x,
                  onClick: s,
                  "aria-pressed": n,
                  uniform: T,
                  "aria-label": e.ariaLabel,
                  disabled: a,
                  className: t(S ? `flex-1 justify-center` : void 0, f),
                  children: e.label,
                },
                e.id,
              );
        }),
        (n[15] = f),
        (n[16] = S),
        (n[17] = l),
        (n[18] = C),
        (n[19] = c),
        (n[20] = x),
        (n[21] = T),
        (n[22] = w),
        (n[23] = e))
      : (e = n[23]),
      (O = b.map(e)),
      (n[5] = f),
      (n[6] = S),
      (n[7] = l),
      (n[8] = b),
      (n[9] = C),
      (n[10] = c),
      (n[11] = x),
      (n[12] = T),
      (n[13] = w),
      (n[14] = O));
  } else O = n[14];
  let k;
  return (
    n[24] !== _ || n[25] !== v || n[26] !== D || n[27] !== O
      ? ((k = (0, o.jsx)(`div`, {
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
export { s as t };
//# sourceMappingURL=segmented-toggle-BGk-vwSF.js.map
