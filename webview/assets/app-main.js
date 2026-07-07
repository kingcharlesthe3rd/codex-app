import { n as e, s as t } from "./rolldown-runtime.js";
import {
  At as n,
  El as r,
  Ft as i,
  Pt as a,
  kt as o,
  vl as s,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  A_ as c,
  D_ as l,
  E_ as u,
  O_ as d,
  uT as f,
} from "./app-initial~app-main~onboarding-page.js";
import { Xy as p, Zy as m } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  $n as h,
  Qn as g,
  a as _,
  i as v,
  n as y,
  o as b,
  r as x,
  t as S,
} from "./app-initial~app-main~automations-page.js";
import { t as C } from "./app.js";
import {
  An as w,
  Hn as T,
  Vn as E,
  dr as D,
  fr as O,
  kn as k,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
import { n as A, t as j } from "./app-initial~app-main~register-app-actions.js";
async function M() {
  (await N(),
    await m(),
    i.info(`[statsig-refresh-diagnostics] React root render requested`, {
      safe: { windowType: `electron` },
    }),
    U.render(
      (0, L.jsx)(F.StrictMode, {
        children: (0, L.jsx)(k, {
          name: `App`,
          fallback: (0, L.jsx)(g, {}),
          children: (0, L.jsx)(_, {}),
        }),
      }),
    ));
}
async function N() {}
function P() {
  let e = navigator,
    t =
      e.userAgentData?.platform?.toLowerCase() ??
      e.platform?.toLowerCase() ??
      e.userAgent.toLowerCase();
  return t.includes(`win`)
    ? `win32`
    : t.includes(`mac`) || t.includes(`darwin`)
      ? `darwin`
      : t.includes(`linux`)
        ? `linux`
        : `unknown`;
}
var F, I, L, R, z, B, V, H, U;
e(() => {
  if (
    ((F = t(r(), 1)),
    (I = f()),
    j(),
    d(),
    w(),
    h(),
    l(),
    D(),
    b(),
    o(),
    x(),
    p(),
    T(),
    S(),
    a(),
    C(),
    (L = s()),
    (R = c()),
    (z = new URL(window.location.href).searchParams),
    (B = P()),
    O(v),
    A(y),
    (document.documentElement.dataset.codexWindowType = `electron`),
    (document.documentElement.dataset.windowType = `electron`),
    (document.documentElement.dataset.codexOs = B),
    (document.documentElement.dataset.codexWindowChrome = u(`electron`, B)),
    z.get(`mcpAppSandboxDevtools`) === `1` &&
      (document.documentElement.dataset.mcpAppSandboxDevtools = `true`),
    R && document.documentElement.classList.add(`compact-window`),
    E(),
    window.addEventListener(`error`, (e) => {
      let t = e?.error?.stack ?? e?.error?.message ?? e?.message ?? `Unknown error`;
      n.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][global-error] ${String(t)}`,
      });
    }),
    window.addEventListener(`unhandledrejection`, (e) => {
      let t = e.reason,
        r = typeof t == `object` && t ? (t.stack ?? t.message ?? JSON.stringify(t)) : String(t);
      n.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][unhandled-rejection] ${r}`,
      });
    }),
    (V = document.getElementById(`root`)),
    !V)
  )
    throw Error(`Root container not found`);
  ((H = window), (H.__codexRoot ||= (0, I.createRoot)(V)), (U = H.__codexRoot), M());
})();
//# sourceMappingURL=app-main.js.map
