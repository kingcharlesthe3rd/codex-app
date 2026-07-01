import { n as e } from "./rolldown-runtime.js";
import {
  C_ as t,
  D_ as n,
  EB as r,
  HP as i,
  RV as a,
  TB as o,
  _I as s,
  av as c,
  bB as l,
  bv as u,
  iF as d,
  jV as f,
  lL as p,
  lv as m,
  pI as h,
  qP as g,
  sp as _,
  wB as v,
  yp as y,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { gC as b, hC as x } from "./app-initial~app-main~onboarding-page.js";
import { d as S, f as C } from "./app-initial~app-main~automations-page.js";
import {
  i as w,
  r as T,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n.js";
import { n as E, r as D } from "./use-hotkey-window-detail-layout.js";
import {
  i as O,
  n as k,
  r as A,
  t as j,
} from "./local-conversation-stream-role-product-event-Bo7-N16h.js";
import { D as M, E as N, a as P, i as F } from "./local-conversation-thread.js";
function I() {
  let e = (0, L.c)(20),
    n = o(t),
    i = g(),
    { conversationId: a } = u(),
    { data: c } = r(S),
    l = c == null || c.configuredHotkey != null,
    d;
  e[0] === l ? (d = e[1]) : ((d = s(l)), (e[0] = l), (e[1] = d));
  let f = d,
    y = v(b, a ?? null),
    x = v(_, a ?? null),
    C;
  e[2] === x ? (C = e[3]) : ((C = T(x ? p(x) : null)), (e[2] = x), (e[3] = C));
  let w = C;
  M(n);
  let E;
  if (
    (e[4] !== a || e[5] !== i || e[6] !== w || e[7] !== y
      ? ((E =
          a == null
            ? null
            : {
                title: (0, R.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, R.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-token-foreground`,
                      children:
                        y ??
                        i.formatMessage({
                          id: `hotkeyWindow.defaultTitle`,
                          defaultMessage: `Codex`,
                          description: `Fallback title for hotkey window thread header`,
                        }),
                    }),
                    w == null
                      ? null
                      : (0, R.jsx)(`div`, {
                          className: `flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground`,
                          children: (0, R.jsx)(`span`, { className: `truncate`, children: w }),
                        }),
                  ],
                }),
                mainWindowPath: h(a),
              }),
        (e[4] = a),
        (e[5] = i),
        (e[6] = w),
        (e[7] = y),
        (e[8] = E))
      : (E = e[8]),
    D(E),
    !a)
  ) {
    let t;
    return (
      e[9] === f
        ? (t = e[10])
        : ((t = (0, R.jsx)(m, { to: f, replace: !0 })), (e[9] = f), (e[10] = t)),
      t
    );
  }
  let O, k;
  e[11] === a
    ? ((O = e[12]), (k = e[13]))
    : ((O = (0, R.jsx)(j, { conversationId: a })),
      (k = (0, R.jsx)(A, { conversationId: a })),
      (e[11] = a),
      (e[12] = O),
      (e[13] = k));
  let N;
  e[14] === a
    ? (N = e[15])
    : ((N = (0, R.jsx)(`div`, {
        className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
        children: (0, R.jsx)(F, {
          conversationId: a,
          allowMissingConversation: !0,
          showExternalFooter: !0,
        }),
      })),
      (e[14] = a),
      (e[15] = N));
  let P;
  return (
    e[16] !== O || e[17] !== k || e[18] !== N
      ? ((P = (0, R.jsxs)(R.Fragment, { children: [O, k, N] })),
        (e[16] = O),
        (e[17] = k),
        (e[18] = N),
        (e[19] = P))
      : (P = e[19]),
    P
  );
}
var L, R;
e(() => {
  ((L = a()), l(), d(), i(), c(), y(), O(), k(), P(), x(), n(), w(), N(), C(), E(), (R = f()));
})();
export { I as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page.js.map
