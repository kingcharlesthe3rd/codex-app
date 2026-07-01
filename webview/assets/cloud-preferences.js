import { n as e } from "./rolldown-runtime.js";
import {
  AV as t,
  CV as n,
  DV as r,
  EA as i,
  GN as a,
  RV as o,
  WN as s,
  wA as c,
  xV as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function u() {
  let e = (0, y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { queryKey: b, queryFn: d, retry: !1, staleTime: s.FIVE_MINUTES }), (e[0] = t))
      : (t = e[0]),
    r(t)
  );
}
function d() {
  return c.safeGet(`/wham/settings/user`);
}
function f() {
  let e = (0, y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { queryKey: x, queryFn: p, retry: !1, staleTime: s.FIVE_MINUTES }), (e[0] = t))
      : (t = e[0]),
    r(t)
  );
}
function p() {
  return c.safeGet(`/wham/settings/configs/user-preferences`);
}
function m() {
  let e = (0, y.c)(2),
    r = t(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: h,
          onSuccess: (e) => {
            r.setQueryData(b, e);
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    n(i)
  );
}
function h(e) {
  return c.safePatch(`/wham/settings/user`, { requestBody: e });
}
function g(e, t, n) {
  let r = (e.match(/{/g) ?? []).length;
  if (r !== (e.match(/}/g) ?? []).length) return `bracket-mismatch`;
  if (r === 0) return `missing-pattern`;
  let i = n.map((e) => e.value);
  if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !i.includes(e))) return `invalid-pattern`;
  let a = v(e, n, (e) => `x`.repeat(e.char_count));
  return a.length > t
    ? `too-long`
    : a.startsWith(`/`)
      ? `leading-slash`
      : /^[a-zA-Z0-9./\-_]+$/.test(a)
        ? null
        : `invalid-characters`;
}
function _(e, t) {
  return v(e, t, (e) => e.example);
}
function v(e, t, n) {
  let r = e;
  for (let e of t) r = r.replaceAll(e.value, n(e));
  return r;
}
var y,
  b,
  x,
  S = e(() => {
    ((y = o()),
      l(),
      a(),
      i(),
      (b = [`cloud-user-preferences`]),
      (x = [`cloud-preferences-config`]));
  });
export { u as a, f as i, g as n, m as o, S as r, _ as t };
//# sourceMappingURL=cloud-preferences.js.map
