import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  Wt as r,
  kl as i,
  xl as a,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  am as o,
  im as s,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  h as c,
  m as l,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
function u(e) {
  let t = (0, d.c)(15),
    { src: n, className: r, showFallbackWhileLoading: i } = e,
    a = i === void 0 ? !0 : i,
    [o, c] = (0, f.useState)(null),
    [u, m] = (0, f.useState)(null),
    h;
  t[0] === r
    ? (h = t[1])
    : ((h = s(`relative flex shrink-0 items-center justify-center`, r)), (t[0] = r), (t[1] = h));
  let g;
  t[2] !== u || t[3] !== o || t[4] !== a || t[5] !== n
    ? ((g =
        u === n || (a && o !== n)
          ? (0, p.jsx)(l, { "aria-hidden": !0, className: `h-full w-full` })
          : null),
      (t[2] = u),
      (t[3] = o),
      (t[4] = a),
      (t[5] = n),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== u || t[8] !== o || t[9] !== n
    ? ((_ =
        u === n
          ? null
          : (0, p.jsx)(`img`, {
              alt: ``,
              className: s(
                `absolute h-full w-full rounded-2xs object-contain`,
                o === n ? `opacity-100` : `opacity-0`,
              ),
              decoding: `async`,
              draggable: !1,
              onError: () => {
                m(n);
              },
              onLoad: () => {
                c(n);
              },
              referrerPolicy: `no-referrer`,
              src: n,
            })),
      (t[7] = u),
      (t[8] = o),
      (t[9] = n),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  return (
    t[11] !== h || t[12] !== g || t[13] !== _
      ? ((v = (0, p.jsxs)(`span`, { className: h, children: [g, _] })),
        (t[11] = h),
        (t[12] = g),
        (t[13] = _),
        (t[14] = v))
      : (v = t[14]),
    v
  );
}
var d,
  f,
  p,
  m = e(() => {
    ((d = n()), o(), (f = t(i(), 1)), c(), (p = a()));
  });
function h(e) {
  return e?.some((e) => e.name === `workspace_dependencies` && e.enabled === !0) ?? !1;
}
var g = e(() => {
  r();
});
export { m as i, h as n, u as r, g as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz.js.map
