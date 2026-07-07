import { n as e } from "./rolldown-runtime.js";
import {
  Tl as t,
  vl as n,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Sx as r, yx as i } from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Fi as a,
  Li as o,
  Ri as s,
  ci as c,
  fi as l,
  li as u,
  oi as d,
  si as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  Q as p,
  Z as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
function h(e) {
  let t = (0, g.c)(34),
    {
      isDisabling: n,
      isUninstalling: i,
      onDisable: s,
      onConfirm: l,
      onOpenChange: p,
      open: h,
      pluginDisplayName: v,
    } = e,
    y;
  t[0] === v
    ? (y = t[1])
    : ((y = (0, _.jsx)(r, {
        id: `plugins.card.uninstallConfirm.title`,
        defaultMessage: `Uninstall {name} plugin?`,
        description: `Title for the plugin uninstall confirmation dialog`,
        values: {
          name: (0, _.jsx)(
            `strong`,
            { className: `font-semibold text-token-text-primary`, children: v },
            `plugin-name`,
          ),
        },
      })),
      (t[0] = v),
      (t[1] = y));
  let b = y,
    x;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { "aria-describedby": void 0 }), (t[2] = x))
    : (x = t[2]);
  let S;
  t[3] === b
    ? (S = t[4])
    : ((S = (0, _.jsx)(o, { className: `sr-only`, children: b })), (t[3] = b), (t[4] = S));
  let C;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, _.jsx)(r, {
        id: `plugins.card.uninstallConfirm.description`,
        defaultMessage: `This will uninstall the plugin, but it will not uninstall any bundled apps`,
        description: `Description for the plugin uninstall confirmation dialog`,
      })),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] === b
    ? (w = t[7])
    : ((w = (0, _.jsx)(u, {
        children: (0, _.jsx)(c, { title: b, subtitle: C, subtitleClassName: `mt-2` }),
      })),
      (t[6] = b),
      (t[7] = w));
  let T;
  t[8] === p
    ? (T = t[9])
    : ((T = () => {
        p(!1);
      }),
      (t[8] = p),
      (t[9] = T));
  let E;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, _.jsx)(r, {
        id: `plugins.card.uninstallConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the plugin uninstall dialog`,
      })),
      (t[10] = E))
    : (E = t[10]);
  let D;
  t[11] === T
    ? (D = t[12])
    : ((D = (0, _.jsx)(m, { color: `outline`, onClick: T, children: E })),
      (t[11] = T),
      (t[12] = D));
  let O;
  t[13] !== n || t[14] !== s
    ? ((O =
        s == null
          ? null
          : (0, _.jsx)(m, {
              color: `outline`,
              loading: n ?? !1,
              onClick: () => {
                s();
              },
              children: (0, _.jsx)(r, {
                id: `plugins.card.uninstallConfirm.disable`,
                defaultMessage: `Disable plugin`,
                description: `Disable button label for the plugin uninstall dialog`,
              }),
            })),
      (t[13] = n),
      (t[14] = s),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] === l
    ? (k = t[17])
    : ((k = () => {
        l();
      }),
      (t[16] = l),
      (t[17] = k));
  let A;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, _.jsx)(r, {
        id: `plugins.card.uninstallConfirm.confirm`,
        defaultMessage: `Uninstall`,
        description: `Confirm button label for the plugin uninstall dialog`,
      })),
      (t[18] = A))
    : (A = t[18]);
  let j;
  t[19] !== i || t[20] !== k
    ? ((j = (0, _.jsx)(m, { color: `danger`, loading: i, onClick: k, children: A })),
      (t[19] = i),
      (t[20] = k),
      (t[21] = j))
    : (j = t[21]);
  let M;
  t[22] !== j || t[23] !== D || t[24] !== O
    ? ((M = (0, _.jsx)(u, { children: (0, _.jsxs)(f, { children: [D, O, j] }) })),
      (t[22] = j),
      (t[23] = D),
      (t[24] = O),
      (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] !== M || t[27] !== S || t[28] !== w
    ? ((N = (0, _.jsxs)(d, { children: [S, w, M] })),
      (t[26] = M),
      (t[27] = S),
      (t[28] = w),
      (t[29] = N))
    : (N = t[29]);
  let P;
  return (
    t[30] !== p || t[31] !== h || t[32] !== N
      ? ((P = (0, _.jsx)(a, { open: h, contentProps: x, onOpenChange: p, children: N })),
        (t[30] = p),
        (t[31] = h),
        (t[32] = N),
        (t[33] = P))
      : (P = t[33]),
    P
  );
}
var g,
  _,
  v = e(() => {
    ((g = t()), i(), p(), s(), l(), (_ = n()));
  });
export { v as n, h as t };
//# sourceMappingURL=plugin-uninstall-dialog.js.map
