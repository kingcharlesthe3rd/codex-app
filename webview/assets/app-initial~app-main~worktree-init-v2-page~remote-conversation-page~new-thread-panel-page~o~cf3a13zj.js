import { n as e } from "./rolldown-runtime.js";
import {
  CP as t,
  RV as n,
  SP as r,
  TP as i,
  Xh as a,
  jV as o,
  wP as s,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function c(e) {
  return [`git`, e, `codex-worktrees`];
}
function l(e) {
  return [`git`, e, `managed-worktree-state`];
}
var u = e(() => {
  a();
});
function d(e) {
  let t = (0, h.c)(8),
    { as: n, children: r, className: i } = e,
    a = n === void 0 ? `div` : n,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = s(
        `flex max-w-full flex-col overflow-hidden rounded-lg bg-token-dropdown-background/50 text-token-foreground [--thread-resource-card-row-padding-x:0.75rem] electron:elevation-stroke extension:border extension:border-token-border extension:bg-token-input-background/50 extension:shadow-sm`,
        i,
      )),
      (t[0] = i),
      (t[1] = o));
  let c = o;
  if (a === `span`) {
    let e;
    return (
      t[2] !== r || t[3] !== c
        ? ((e = (0, g.jsx)(`span`, { className: c, children: r })),
          (t[2] = r),
          (t[3] = c),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let l;
  return (
    t[5] !== r || t[6] !== c
      ? ((l = (0, g.jsx)(`div`, { className: c, children: r })), (t[5] = r), (t[6] = c), (t[7] = l))
      : (l = t[7]),
    l
  );
}
function f(e) {
  let t = (0, h.c)(16),
    {
      className: n,
      icon: r,
      padding: i,
      reserveTrailingSpace: a,
      subtitle: o,
      title: c,
      titleTooltip: l,
      trailing: u,
    } = e,
    d = i === void 0 ? `default` : i,
    f = a !== void 0 && a ? v[d] : _[d],
    p;
  t[0] !== n || t[1] !== f
    ? ((p = s(`flex min-w-0 items-center gap-2.5 text-left`, f, n)),
      (t[0] = n),
      (t[1] = f),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== c || t[4] !== l
    ? ((m = (0, g.jsx)(`span`, {
        className: `text-size-chat truncate font-medium text-token-foreground`,
        title: l,
        children: c,
      })),
      (t[3] = c),
      (t[4] = l),
      (t[5] = m))
    : (m = t[5]);
  let y;
  t[6] === o
    ? (y = t[7])
    : ((y =
        o == null
          ? null
          : (0, g.jsx)(`span`, {
              className: `text-size-chat-sm truncate text-token-text-secondary`,
              children: o,
            })),
      (t[6] = o),
      (t[7] = y));
  let b;
  t[8] !== m || t[9] !== y
    ? ((b = (0, g.jsxs)(`span`, { className: `flex min-w-0 flex-1 flex-col`, children: [m, y] })),
      (t[8] = m),
      (t[9] = y),
      (t[10] = b))
    : (b = t[10]);
  let x;
  return (
    t[11] !== r || t[12] !== p || t[13] !== b || t[14] !== u
      ? ((x = (0, g.jsxs)(`span`, { className: p, children: [r, b, u] })),
        (t[11] = r),
        (t[12] = p),
        (t[13] = b),
        (t[14] = u),
        (t[15] = x))
      : (x = t[15]),
    x
  );
}
function p(e) {
  let t = (0, h.c)(13),
    { label: n, matchDropdownWidth: i, matchDropdownWidthLabel: a, size: o, showChevron: c } = e,
    l = i === void 0 ? !1 : i,
    u = o === void 0 ? `default` : o,
    d = c === void 0 ? !1 : c,
    f = y[u],
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = s(
        `flex shrink-0 items-center overflow-hidden rounded-lg border border-token-border text-token-foreground`,
        f,
      )),
      (t[0] = f),
      (t[1] = p));
  let m;
  t[2] !== n || t[3] !== l || t[4] !== a || t[5] !== u
    ? ((m = l
        ? (0, g.jsxs)(`span`, {
            className: s(`grid`, b[u]),
            children: [
              (0, g.jsxs)(`span`, {
                "aria-hidden": !0,
                className: `invisible col-start-1 row-start-1 flex items-center gap-1`,
                children: [a ?? n, (0, g.jsx)(r, { className: `icon-2xs shrink-0` })],
              }),
              (0, g.jsx)(`span`, {
                className: `col-start-1 row-start-1 flex items-center justify-center`,
                children: n,
              }),
            ],
          })
        : (0, g.jsx)(`span`, { className: s(`flex items-center font-medium`, b[u]), children: n })),
      (t[2] = n),
      (t[3] = l),
      (t[4] = a),
      (t[5] = u),
      (t[6] = m))
    : (m = t[6]);
  let _;
  t[7] === d
    ? (_ = t[8])
    : ((_ = d
        ? (0, g.jsx)(`span`, {
            className: `flex self-stretch border-l border-token-border px-1.5`,
            children: (0, g.jsx)(r, { className: `icon-2xs self-center text-token-text-tertiary` }),
          })
        : null),
      (t[7] = d),
      (t[8] = _));
  let v;
  return (
    t[9] !== p || t[10] !== m || t[11] !== _
      ? ((v = (0, g.jsxs)(`span`, { className: p, children: [m, _] })),
        (t[9] = p),
        (t[10] = m),
        (t[11] = _),
        (t[12] = v))
      : (v = t[12]),
    v
  );
}
function m(e) {
  let t = (0, h.c)(9),
    { children: n, isExpanded: i, onClick: a } = e,
    o = i && `rotate-180`,
    c;
  t[0] === o ? (c = t[1]) : ((c = s(`icon-xs`, o)), (t[0] = o), (t[1] = c));
  let l;
  t[2] === c ? (l = t[3]) : ((l = (0, g.jsx)(r, { className: c })), (t[2] = c), (t[3] = l));
  let u;
  return (
    t[4] !== n || t[5] !== i || t[6] !== a || t[7] !== l
      ? ((u = (0, g.jsxs)(`button`, {
          type: `button`,
          "aria-expanded": i,
          className: `text-size-chat flex h-10 cursor-interaction items-center justify-center gap-1 text-token-text-tertiary hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
          onClick: a,
          children: [n, l],
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = a),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
var h,
  g,
  _,
  v,
  y,
  b,
  x = e(() => {
    ((h = n()),
      i(),
      t(),
      (g = o()),
      (_ = { default: `px-[var(--thread-resource-card-row-padding-x)] py-3`, compact: `p-1.5` }),
      (v = {
        default: `py-3 pr-10 pl-[var(--thread-resource-card-row-padding-x)]`,
        compact: `py-1.5 pr-10 pl-1.5`,
      }),
      (y = {
        default: `text-size-chat-sm`,
        medium: `text-base`,
        toolbar: `h-token-button-composer text-base leading-[18px]`,
      }),
      (b = { default: `px-2 py-1`, medium: `px-4 py-1.5`, toolbar: `px-2 py-0` }));
  });
export { x as a, l as c, f as i, m as n, c as o, p as r, u as s, d as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj.js.map
