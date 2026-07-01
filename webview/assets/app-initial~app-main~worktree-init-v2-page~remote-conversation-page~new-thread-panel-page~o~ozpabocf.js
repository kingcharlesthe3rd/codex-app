import { n as e } from "./rolldown-runtime.js";
import {
  DR as t,
  OR as n,
  iF as r,
  pj as i,
  vj as a,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function o(e) {
  if (!e) return null;
  let t = a(e).replace(/\/+$/, ``),
    n = t.indexOf(`/.git/worktrees/`);
  return n === -1 ? (t.endsWith(`/.git`) ? t.slice(0, -5) : null) : t.slice(0, n);
}
function s(e, r) {
  if (!e || !r) return null;
  let i = a(e).replace(/\/+$/, ``),
    o = a(r).replace(/\/+$/, ``),
    s = t(i) || n(i),
    c = s ? i.toLowerCase() : i,
    l = `${s ? o.toLowerCase() : o}/`;
  if (!c.startsWith(l)) return null;
  let u = i.slice(l.length).split(`/`).filter(Boolean);
  return u.length < 2 ? null : `${o}/${u[0]}/${u[1]}`;
}
var c = e(() => {
  (r(), i());
});
export { s as n, o as r, c as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ozpabocf.js.map
