import { n as e } from "./rolldown-runtime.js";
import {
  Tl as t,
  vl as n,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  $ as r,
  tt as i,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import { nx as a, rx as o } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Q as s,
  Z as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
function l(e) {
  let t = (0, u.c)(29),
    {
      options: n,
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
  t[0] === n ? (y = t[1]) : ((y = n === void 0 ? [] : n), (t[0] = n), (t[1] = y));
  let b = y,
    x = s === void 0 ? `default` : s,
    S = p === void 0 ? !1 : p,
    C = h === void 0 ? `secondary` : h,
    w = g === void 0 ? `ghost` : g,
    T = m ?? (x === `icon` && b.length > 2),
    E = S ? `flex w-full` : `inline-flex`,
    D;
  t[2] !== l || t[3] !== E
    ? ((D = a(E, `items-center gap-0.5`, l)), (t[2] = l), (t[3] = E), (t[4] = D))
    : (D = t[4]);
  let O;
  if (
    t[5] !== f ||
    t[6] !== S ||
    t[7] !== o ||
    t[8] !== b ||
    t[9] !== C ||
    t[10] !== i ||
    t[11] !== x ||
    t[12] !== T ||
    t[13] !== w
  ) {
    let e;
    (t[15] !== f ||
    t[16] !== S ||
    t[17] !== o ||
    t[18] !== C ||
    t[19] !== i ||
    t[20] !== x ||
    t[21] !== T ||
    t[22] !== w
      ? ((e = (e) => {
          let t = e.id === i,
            n = e.disabled ?? !1,
            s = () => {
              n || o(e.id);
            };
          return e.tooltipContent
            ? (0, d.jsx)(
                r,
                {
                  tooltipContent: e.tooltipContent,
                  children: (0, d.jsx)(
                    c,
                    {
                      color: t ? C : w,
                      size: x,
                      onClick: s,
                      "aria-pressed": t,
                      uniform: T,
                      "aria-label": e.ariaLabel,
                      disabled: n,
                      className: a(S ? `flex-1 justify-center` : void 0, f),
                      children: e.label,
                    },
                    e.id,
                  ),
                },
                e.id,
              )
            : (0, d.jsx)(
                c,
                {
                  color: t ? C : w,
                  size: x,
                  onClick: s,
                  "aria-pressed": t,
                  uniform: T,
                  "aria-label": e.ariaLabel,
                  disabled: n,
                  className: a(S ? `flex-1 justify-center` : void 0, f),
                  children: e.label,
                },
                e.id,
              );
        }),
        (t[15] = f),
        (t[16] = S),
        (t[17] = o),
        (t[18] = C),
        (t[19] = i),
        (t[20] = x),
        (t[21] = T),
        (t[22] = w),
        (t[23] = e))
      : (e = t[23]),
      (O = b.map(e)),
      (t[5] = f),
      (t[6] = S),
      (t[7] = o),
      (t[8] = b),
      (t[9] = C),
      (t[10] = i),
      (t[11] = x),
      (t[12] = T),
      (t[13] = w),
      (t[14] = O));
  } else O = t[14];
  let k;
  return (
    t[24] !== _ || t[25] !== v || t[26] !== D || t[27] !== O
      ? ((k = (0, d.jsx)(`div`, {
          className: D,
          role: `group`,
          "aria-label": _,
          "aria-labelledby": v,
          children: O,
        })),
        (t[24] = _),
        (t[25] = v),
        (t[26] = D),
        (t[27] = O),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
var u,
  d,
  f = e(() => {
    ((u = t()), o(), s(), i(), (d = n()));
  });
export { f as n, l as t };
//# sourceMappingURL=segmented-toggle.js.map
