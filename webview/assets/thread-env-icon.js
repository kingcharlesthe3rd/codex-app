import { Ko as e, Uo as t } from "./app-server-manager-signals.js";
import { t as n } from "./jsx-runtime.js";
import { t as r } from "./clsx.js";
import { lt as i } from "./vscode-api.js";
import { o as a } from "./lib-2.js";
import { t as o } from "./tooltip.js";
import { t as s } from "./remote-host-globe-icon.js";
import { t as c } from "./cloud.js";
import { t as l } from "./macbook.js";
import { t as u } from "./worktree.js";
var d = i(),
  f = n();
function p(n) {
  let i = (0, d.c)(12),
    { className: a, disableTooltip: o, hostId: c } = n,
    l = o === void 0 ? !1 : o,
    u = t(c),
    p = e(),
    h;
  i[0] === a ? (h = i[1]) : ((h = r(`icon-2xs no-drag shrink-0`, a)), (i[0] = a), (i[1] = h));
  let g;
  i[2] === p ? (g = i[3]) : ((g = p.map(m)), (i[2] = p), (i[3] = g));
  let _;
  i[4] !== c || i[5] !== h || i[6] !== g
    ? ((_ = (0, f.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, f.jsx)(s, { className: h, hostId: c, hostIdsForColorAssignment: g }),
      })),
      (i[4] = c),
      (i[5] = h),
      (i[6] = g),
      (i[7] = _))
    : (_ = i[7]);
  let v;
  return (
    i[8] !== l || i[9] !== u.display_name || i[10] !== _
      ? ((v = b({ disableTooltip: l, icon: _, tooltipContent: u.display_name })),
        (i[8] = l),
        (i[9] = u.display_name),
        (i[10] = _),
        (i[11] = v))
      : (v = i[11]),
    v
  );
}
function m(e) {
  return e.hostId;
}
function h(n) {
  let i = (0, d.c)(19),
    { className: a, disableTooltip: o, hostId: c } = n,
    l = o === void 0 ? !1 : o,
    p = t(c),
    m = e(),
    h;
  i[0] === a
    ? (h = i[1])
    : ((h = r(`icon-2xs text-token-description-foreground no-drag shrink-0`, a)),
      (i[0] = a),
      (i[1] = h));
  let _;
  i[2] === h ? (_ = i[3]) : ((_ = (0, f.jsx)(u, { className: h })), (i[2] = h), (i[3] = _));
  let v;
  i[4] === a ? (v = i[5]) : ((v = r(`icon-2xs no-drag shrink-0`, a)), (i[4] = a), (i[5] = v));
  let y;
  i[6] === m ? (y = i[7]) : ((y = m.map(g)), (i[6] = m), (i[7] = y));
  let x;
  i[8] !== c || i[9] !== v || i[10] !== y
    ? ((x = (0, f.jsx)(s, { className: v, hostId: c, hostIdsForColorAssignment: y })),
      (i[8] = c),
      (i[9] = v),
      (i[10] = y),
      (i[11] = x))
    : (x = i[11]);
  let S;
  i[12] !== _ || i[13] !== x
    ? ((S = (0, f.jsxs)(`span`, {
        className: `inline-flex shrink-0 items-center gap-1.5`,
        children: [_, x],
      })),
      (i[12] = _),
      (i[13] = x),
      (i[14] = S))
    : (S = i[14]);
  let C;
  return (
    i[15] !== l || i[16] !== p.display_name || i[17] !== S
      ? ((C = b({ disableTooltip: l, icon: S, tooltipContent: p.display_name })),
        (i[15] = l),
        (i[16] = p.display_name),
        (i[17] = S),
        (i[18] = C))
      : (C = i[18]),
    C
  );
}
function g(e) {
  return e.hostId;
}
function _(e) {
  let t = (0, d.c)(8),
    { className: n, disableTooltip: i } = e,
    o = i === void 0 ? !1 : i,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = r(`icon-2xs text-token-description-foreground no-drag shrink-0`, n)),
      (t[0] = n),
      (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, f.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, f.jsx)(u, { className: s }),
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, f.jsx)(a, {
        id: `threadEnvIcon.worktreeTooltip`,
        defaultMessage: `This conversation is running in a local git worktree.`,
        description: `Tooltip content for worktree environment icon`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let p;
  return (
    t[5] !== o || t[6] !== c
      ? ((p = b({ disableTooltip: o, icon: c, tooltipContent: l })),
        (t[5] = o),
        (t[6] = c),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function v(e) {
  let t = (0, d.c)(8),
    { className: n, disableTooltip: i } = e,
    o = i === void 0 ? !1 : i,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = r(`icon-2xs translate-x-px text-token-description-foreground no-drag shrink-0`, n)),
      (t[0] = n),
      (t[1] = s));
  let l;
  t[2] === s
    ? (l = t[3])
    : ((l = (0, f.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, f.jsx)(c, { className: s }),
      })),
      (t[2] = s),
      (t[3] = l));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, f.jsx)(a, {
        id: `threadEnvIcon.cloudTooltip`,
        defaultMessage: `This conversation is running in Codex Cloud.`,
        description: `Tooltip content for cloud environment icon`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let p;
  return (
    t[5] !== o || t[6] !== l
      ? ((p = b({ disableTooltip: o, icon: l, tooltipContent: u })),
        (t[5] = o),
        (t[6] = l),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function y(e) {
  let t = (0, d.c)(8),
    { className: n, disableTooltip: i } = e,
    o = i === void 0 ? !1 : i,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = r(`icon-2xs text-token-description-foreground no-drag shrink-0`, n)),
      (t[0] = n),
      (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, f.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, f.jsx)(l, { className: s }),
      })),
      (t[2] = s),
      (t[3] = c));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, f.jsx)(a, {
        id: `threadEnvIcon.localTooltip`,
        defaultMessage: `This conversation is running locally.`,
        description: `Tooltip content for local environment icon`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let p;
  return (
    t[5] !== o || t[6] !== c
      ? ((p = b({ disableTooltip: o, icon: c, tooltipContent: u })),
        (t[5] = o),
        (t[6] = c),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function b({ disableTooltip: e, icon: t, tooltipContent: n }) {
  return e ? t : (0, f.jsx)(o, { tooltipContent: n, children: t });
}
export { _ as a, h as i, y as n, p as r, v as t };
//# sourceMappingURL=thread-env-icon.js.map
