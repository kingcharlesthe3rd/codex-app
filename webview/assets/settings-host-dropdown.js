import { n as e } from "./rolldown-runtime.js";
import {
  Ol as t,
  xl as n,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Co as r,
  Sp as i,
  _o as a,
  am as o,
  im as s,
  xp as c,
  yo as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  _v as u,
  aw as d,
  cw as f,
  uw as p,
  yv as m,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  T as h,
  w as g,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  h as _,
  m as v,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  n as y,
  t as b,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~onboarding-page~settings-page~pro~bk3q6rho.js";
import {
  a as x,
  t as S,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
function C(e) {
  let t = (0, E.c)(43),
    {
      connectedRemoteConnections: n,
      disabled: r,
      onSelectHost: i,
      remoteConnectionHostIds: o,
      selectedHostId: s,
      align: u,
      contentWidth: d,
      localIcon: h,
      localLabel: g,
      showConnectedIndicator: _,
      triggerClassName: v,
      triggerColor: y,
      useRemoteHostColors: x,
    } = e,
    C = r === void 0 ? !1 : r,
    O = h === void 0 ? b : h,
    k = _ === void 0 ? !1 : _,
    A = x === void 0 ? !0 : x,
    j = p(),
    M;
  t[0] !== n || t[1] !== s
    ? ((M = n.find((e) => e.hostId === s) ?? null), (t[0] = n), (t[1] = s), (t[2] = M))
    : (M = t[2]);
  let N = M,
    P;
  t[3] !== j || t[4] !== g
    ? ((P =
        g ??
        j.formatMessage({
          id: `settings.hostDropdown.local`,
          defaultMessage: `Local`,
          description: `Label for the local host in settings connection dropdowns`,
        })),
      (t[3] = j),
      (t[4] = g),
      (t[5] = P))
    : (P = t[5]);
  let F = P,
    I = N?.displayName ?? F,
    L;
  t[6] === F ? (L = t[7]) : ((L = { hostId: m, displayName: F }), (t[6] = F), (t[7] = L));
  let R;
  t[8] !== n || t[9] !== L ? ((R = [L, ...n]), (t[8] = n), (t[9] = L), (t[10] = R)) : (R = t[10]);
  let z = R,
    B = C ? `hidden` : void 0,
    V;
  t[11] !== O || t[12] !== o || t[13] !== N || t[14] !== A
    ? ((V =
        N == null
          ? (0, D.jsx)(O, { className: `icon-xs shrink-0 text-token-foreground` })
          : (0, D.jsx)(T, {
              className: `icon-xs shrink-0`,
              hostId: N.hostId,
              hostIdsForColorAssignment: o,
              useRemoteHostColors: A,
            })),
      (t[11] = O),
      (t[12] = o),
      (t[13] = N),
      (t[14] = A),
      (t[15] = V))
    : (V = t[15]);
  let H;
  t[16] === I
    ? (H = t[17])
    : ((H = (0, D.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: I,
      })),
      (t[16] = I),
      (t[17] = H));
  let U;
  t[18] !== N || t[19] !== k
    ? ((U = N != null && k ? (0, D.jsx)(w, {}) : null), (t[18] = N), (t[19] = k), (t[20] = U))
    : (U = t[20]);
  let W;
  t[21] !== C ||
  t[22] !== V ||
  t[23] !== H ||
  t[24] !== U ||
  t[25] !== B ||
  t[26] !== v ||
  t[27] !== y
    ? ((W = (0, D.jsxs)(S, {
        className: v,
        color: y,
        disabled: C,
        chevronClassName: B,
        children: [V, H, U],
      })),
      (t[21] = C),
      (t[22] = V),
      (t[23] = H),
      (t[24] = U),
      (t[25] = B),
      (t[26] = v),
      (t[27] = y),
      (t[28] = W))
    : (W = t[28]);
  let G = W;
  if (C) return G;
  let K = u ?? `end`,
    q = d ?? `menuWide`,
    J;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, D.jsx)(l.Title, {
        children: (0, D.jsx)(f, {
          id: `settings.hostDropdown.title`,
          defaultMessage: `Host`,
          description: `Title for the Host dropdown shown in settings pages`,
        }),
      })),
      (t[29] = J))
    : (J = t[29]);
  let Y;
  t[30] !== O ||
  t[31] !== z ||
  t[32] !== i ||
  t[33] !== o ||
  t[34] !== s ||
  t[35] !== k ||
  t[36] !== A
    ? ((Y = (0, D.jsx)(l.Section, {
        className: `max-h-40 overflow-y-auto`,
        children: z.map((e) =>
          (0, D.jsx)(
            l.Item,
            {
              RightIcon: e.hostId === s ? c : void 0,
              onSelect: () => {
                i(e.hostId);
              },
              children: (0, D.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  e.hostId === `local`
                    ? (0, D.jsx)(O, { className: `icon-xs shrink-0` })
                    : (0, D.jsx)(T, {
                        className: `icon-xs shrink-0`,
                        hostId: e.hostId,
                        hostIdsForColorAssignment: o,
                        useRemoteHostColors: A,
                      }),
                  (0, D.jsx)(`span`, { className: `truncate`, children: e.displayName }),
                  e.hostId !== `local` && k ? (0, D.jsx)(w, {}) : null,
                ],
              }),
            },
            e.hostId,
          ),
        ),
      })),
      (t[30] = O),
      (t[31] = z),
      (t[32] = i),
      (t[33] = o),
      (t[34] = s),
      (t[35] = k),
      (t[36] = A),
      (t[37] = Y))
    : (Y = t[37]);
  let X;
  return (
    t[38] !== K || t[39] !== q || t[40] !== Y || t[41] !== G
      ? ((X = (0, D.jsxs)(a, { align: K, contentWidth: q, triggerButton: G, children: [J, Y] })),
        (t[38] = K),
        (t[39] = q),
        (t[40] = Y),
        (t[41] = G),
        (t[42] = X))
      : (X = t[42]),
    X
  );
}
function w() {
  let e = (0, E.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, D.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 shrink-0 rounded-full bg-green-500`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function T(e) {
  let t = (0, E.c)(8),
    { className: n, hostId: r, hostIdsForColorAssignment: i, useRemoteHostColors: a } = e;
  if (!a) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = s(n, `text-token-foreground`)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e ? (r = t[3]) : ((r = (0, D.jsx)(v, { className: e })), (t[2] = e), (t[3] = r)), r
    );
  }
  let o;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i
      ? ((o = (0, D.jsx)(g, { className: n, hostId: r, hostIdsForColorAssignment: i })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var E,
  D,
  O = e(() => {
    ((E = t()), o(), d(), r(), h(), i(), _(), y(), u(), x(), (D = n()));
  });
export { O as n, C as t };
//# sourceMappingURL=settings-host-dropdown.js.map
