import { n as e, s as t } from "./rolldown-runtime.js";
import {
  HP as n,
  RV as r,
  cM as i,
  fN as a,
  jV as o,
  pN as s,
  qP as c,
  sM as l,
  zV as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function d(e) {
  let t = (0, p.c)(11),
    { ancestors: n, current: r } = e,
    i = c(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = n.map(f)), (t[2] = n), (t[3] = o));
  let s;
  t[4] !== n.length || t[5] !== r
    ? ((s =
        r == null
          ? null
          : (0, h.jsxs)(h.Fragment, {
              children: [
                n.length > 0
                  ? (0, h.jsx)(l, { "aria-hidden": !0, className: `icon-xs shrink-0` })
                  : null,
                (0, h.jsx)(`span`, {
                  "aria-current": `page`,
                  className: `flex h-token-button-composer min-w-0 items-center truncate px-2 text-token-foreground`,
                  children: r,
                }),
              ],
            })),
      (t[4] = n.length),
      (t[5] = r),
      (t[6] = s))
    : (s = t[6]);
  let u;
  return (
    t[7] !== a || t[8] !== o || t[9] !== s
      ? ((u = (0, h.jsxs)(`nav`, {
          "aria-label": a,
          className: `flex min-w-0 items-center gap-1 text-base text-token-description-foreground`,
          children: [o, s],
        })),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function f(e, t) {
  return (0, h.jsxs)(
    m.Fragment,
    {
      children: [
        t > 0 ? (0, h.jsx)(l, { "aria-hidden": !0, className: `icon-xs shrink-0` }) : null,
        (0, h.jsx)(a, {
          className: `min-w-0`,
          color: `ghost`,
          size: `toolbar`,
          onClick: e.onClick,
          children: (0, h.jsx)(`span`, { className: `min-w-0 truncate`, children: e.label }),
        }),
      ],
    },
    e.id,
  );
}
var p,
  m,
  h,
  g = e(() => {
    ((p = r()), (m = t(u(), 1)), n(), i(), s(), (h = o()));
  });
export { g as n, d as t };
//# sourceMappingURL=toolbar-breadcrumb.js.map
