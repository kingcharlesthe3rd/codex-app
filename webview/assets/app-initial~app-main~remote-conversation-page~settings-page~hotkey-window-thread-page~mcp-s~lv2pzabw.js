import { n as e } from "./rolldown-runtime.js";
import { Tl as t } from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Hb as n,
  Ib as r,
  Rb as i,
  Vb as a,
  b as o,
  x as s,
} from "./app-initial~app-main~new-thread-panel-page.js";
var c,
  l = e(() => {
    c =
      `general-settings.import.profile.keyboard-shortcuts.codex-micro.appshots.appearance.pets.agent.git-settings.data-controls.cloud-settings.cloud-environments.code-review.personalization.usage.browser-use.computer-use.local-environments.worktrees.environments.mcp-settings.hooks-settings.connections.plugins-settings.skills-settings`.split(
        `.`,
      );
  }),
  u,
  d,
  f,
  p = e(() => {
    (l(),
      (u = `general-settings`),
      (d = (function (e) {
        return ((e.String = `string`), (e.Array = `array`), (e.Record = `record`), e);
      })({})),
      (f = [
        { slug: `general-settings` },
        { slug: `import` },
        { slug: `profile` },
        { slug: `appearance` },
        { slug: `pets` },
        { slug: `appshots` },
        { slug: `git-settings` },
        { slug: `connections` },
        { slug: `cloud-settings` },
        { slug: `cloud-environments` },
        { slug: `code-review` },
        { slug: `local-environments` },
        { slug: `worktrees` },
        { slug: `agent` },
        { slug: `personalization` },
        { slug: `keyboard-shortcuts` },
        ...[],
        { slug: `usage` },
        { slug: `browser-use` },
        { slug: `computer-use` },
        { slug: `mcp-settings` },
        { slug: `hooks-settings` },
        { slug: `plugins-settings` },
        { slug: `skills-settings` },
        { slug: `data-controls` },
      ]));
  });
function m() {
  let e = (0, g.c)(3),
    { authMethod: t, isLoading: r } = s(),
    a = n(),
    o = i(_),
    c = r || (t === `chatgpt` && a),
    l = t === `chatgpt` && o,
    u;
  return (
    e[0] !== c || e[1] !== l
      ? ((u = { isProfileVisibilityLoading: c, isProfileVisible: l }),
        (e[0] = c),
        (e[1] = l),
        (e[2] = u))
      : (u = e[2]),
    u
  );
}
function h() {
  let e = (0, g.c)(3),
    { authMethod: t } = s(),
    n = i(_),
    r = a(v);
  if (t !== `chatgpt`) return !1;
  let o;
  return (
    e[0] !== n || e[1] !== r
      ? ((o = n && r.get(y, !1)), (e[0] = n), (e[1] = r), (e[2] = o))
      : (o = e[2]),
    o
  );
}
var g,
  _,
  v,
  y,
  b = e(() => {
    ((g = t()),
      o(),
      r(),
      (_ = `2478676115`),
      (v = `3503973010`),
      (y = `show_dropdown_entry_point`));
  });
export { f as a, c, u as i, h as n, d as o, m as r, p as s, b as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~settings-page~hotkey-window-thread-page~mcp-s~lv2pzabw.js.map
