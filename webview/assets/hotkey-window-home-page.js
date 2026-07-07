import { n as e, s as t } from "./rolldown-runtime.js";
import {
  At as n,
  Bt as r,
  C as i,
  El as a,
  G as o,
  K as s,
  O as c,
  Tl as l,
  W as u,
  Xs as d,
  ec as f,
  h as p,
  ir as m,
  jt as h,
  kt as g,
  mn as _,
  nc as v,
  p as y,
  tc as b,
  vl as x,
  zn as ee,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  En as S,
  Fu as C,
  Ou as te,
  Pu as ne,
  Tn as re,
  by as w,
  ku as T,
  vy as E,
} from "./app-initial~app-main~onboarding-page.js";
import {
  $ as D,
  O,
  S as k,
  dt as A,
  tt as j,
  ut as M,
  w as N,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Hb as ie,
  Ib as P,
  Qs as ae,
  Rb as oe,
  Rs as se,
  Sx as F,
  Xs as ce,
  Xy as I,
  Yy as L,
  da as le,
  fa as ue,
  nx as de,
  rx as R,
  wx as fe,
  yx as pe,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  As as me,
  Ds as he,
  Du as ge,
  Eu as _e,
  Fs as ve,
  Qr as ye,
  Yr as be,
  Zr as xe,
  cl as Se,
  fl as Ce,
  ll as we,
  ls as Te,
  lu as z,
  qr as Ee,
  uu as De,
  vl as Oe,
  vs as ke,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  Q as Ae,
  Z as je,
  dt as Me,
  gt as Ne,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  A as Pe,
  D as Fe,
  It as Ie,
  Pt as Le,
  Y as Re,
  Z as ze,
  i as Be,
  j as Ve,
  k as He,
  n as Ue,
  r as We,
  t as Ge,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  a as Ke,
  o as qe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n.js";
import {
  a as Je,
  i as Ye,
  n as Xe,
  o as Ze,
  r as Qe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~kj79zy13.js";
import {
  n as $e,
  t as et,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~plugin-detail-page~onboarding-pag~f3o4q9dk.js";
import {
  n as tt,
  t as nt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import { n as rt, t as it } from "./worktree-environment-dropdown.js";
import { n as at, t as ot } from "./use-floating-window-pointer-interactivity.js";
import { i as st, n as ct, r as lt, t as ut } from "./composer-footer-branch-switcher.js";
import { n as dt, t as ft } from "./use-hotkey-window-dismiss-on-escape-DD3P--op.js";
function pt(e) {
  let t = (0, B.c)(52),
    {
      canUseCloud: n,
      composerMode: r,
      setComposerMode: i,
      showLabel: a,
      disabledTooltipText: o,
      showWorktree: s,
    } = e,
    c = a === void 0 ? !1 : a,
    l = fe(),
    u;
  t[0] !== r || t[1] !== s
    ? ((u =
        r === `cloud`
          ? (0, V.jsx)(re, { className: `icon-2xs` })
          : r === `worktree` && s
            ? (0, V.jsx)(ne, { className: `icon-2xs` })
            : (0, V.jsx)(te, { className: `icon-2xs` })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== r || t[4] !== c || t[5] !== s
    ? ((d = c
        ? (0, V.jsx)(`span`, {
            className: `max-w-40 truncate text-left whitespace-nowrap`,
            children:
              r === `cloud`
                ? (0, V.jsx)(F, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : r === `worktree` && s
                  ? (0, V.jsx)(F, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, V.jsx)(F, {
                      id: `composer.hotkeyWindow.modeDropdown.localProject`,
                      defaultMessage: `Local project`,
                      description: `Hotkey window overflow menu label for local project mode`,
                    }),
          })
        : null),
      (t[3] = r),
      (t[4] = c),
      (t[5] = s),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, V.jsx)(_e, { className: `icon-2xs text-token-input-placeholder-foreground` })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = (0, V.jsxs)(V.Fragment, { children: [u, d, f] })), (t[8] = u), (t[9] = d), (t[10] = p))
    : (p = t[10]);
  let m = p;
  if (o) {
    let e;
    t[11] === m
      ? (e = t[12])
      : ((e = (0, V.jsx)(`span`, {
          children: (0, V.jsx)(je, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: m,
          }),
        })),
        (t[11] = m),
        (t[12] = e));
    let n;
    return (
      t[13] !== o || t[14] !== e
        ? ((n = (0, V.jsx)(D, { tooltipContent: o, children: e })),
          (t[13] = o),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  let h;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, V.jsx)(F, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the task`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] === m
    ? (g = t[18])
    : ((g = (0, V.jsx)(D, {
        tooltipContent: h,
        children: (0, V.jsx)(je, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: m,
        }),
      })),
      (t[17] = m),
      (t[18] = g));
  let _ = r === `local` ? M : void 0,
    v;
  t[19] === i
    ? (v = t[20])
    : ((v = () => {
        i(`local`);
      }),
      (t[19] = i),
      (t[20] = v));
  let y;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, V.jsx)(F, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[21] = y))
    : (y = t[21]);
  let b;
  t[22] !== _ || t[23] !== v
    ? ((b = (0, V.jsx)(N.Item, { LeftIcon: te, RightIcon: _, onSelect: v, children: y })),
      (t[22] = _),
      (t[23] = v),
      (t[24] = b))
    : (b = t[24]);
  let x = r === `cloud` ? M : void 0,
    ee = !n,
    S;
  t[25] === i
    ? (S = t[26])
    : ((S = () => {
        i(`cloud`);
      }),
      (t[25] = i),
      (t[26] = S));
  let C;
  t[27] !== n || t[28] !== l
    ? ((C = n
        ? void 0
        : l.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[27] = n),
      (t[28] = l),
      (t[29] = C))
    : (C = t[29]);
  let w;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, V.jsx)(F, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[30] = w))
    : (w = t[30]);
  let T;
  t[31] !== x || t[32] !== ee || t[33] !== S || t[34] !== C
    ? ((T = (0, V.jsx)(N.Item, {
        LeftIcon: re,
        RightIcon: x,
        disabled: ee,
        onSelect: S,
        tooltipText: C,
        children: w,
      })),
      (t[31] = x),
      (t[32] = ee),
      (t[33] = S),
      (t[34] = C),
      (t[35] = T))
    : (T = t[35]);
  let E = r === `worktree` ? M : void 0,
    O;
  t[36] === i
    ? (O = t[37])
    : ((O = () => {
        i(`worktree`);
      }),
      (t[36] = i),
      (t[37] = O));
  let A = !s,
    j;
  t[38] !== l || t[39] !== s
    ? ((j = s
        ? void 0
        : l.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.localOnly`,
            defaultMessage: `Initialize a git repo to run tasks in worktrees`,
            description: `Tooltip for disabled hotkey-window worktree mode selector`,
          })),
      (t[38] = l),
      (t[39] = s),
      (t[40] = j))
    : (j = t[40]);
  let ie;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, V.jsx)(F, {
        id: `composer.mode.worktreeSegment`,
        defaultMessage: `Worktree`,
        description: `Worktree mode label for the segmented toggle`,
      })),
      (t[41] = ie))
    : (ie = t[41]);
  let P;
  t[42] !== E || t[43] !== O || t[44] !== A || t[45] !== j
    ? ((P = (0, V.jsx)(N.Item, {
        LeftIcon: ne,
        RightIcon: E,
        onSelect: O,
        disabled: A,
        tooltipText: j,
        children: ie,
      })),
      (t[42] = E),
      (t[43] = O),
      (t[44] = A),
      (t[45] = j),
      (t[46] = P))
    : (P = t[46]);
  let ae;
  return (
    t[47] !== b || t[48] !== T || t[49] !== P || t[50] !== g
      ? ((ae = (0, V.jsxs)(k, {
          triggerButton: g,
          contentWidth: `menuNarrow`,
          children: [b, T, P],
        })),
        (t[47] = b),
        (t[48] = T),
        (t[49] = P),
        (t[50] = g),
        (t[51] = ae))
      : (ae = t[51]),
    ae
  );
}
var B,
  V,
  mt = e(() => {
    ((B = l()), pe(), Ae(), O(), j(), A(), ge(), S(), T(), C(), (V = x()));
  });
function ht({ activeWorkspaceRoot: e, defaultToProjectless: t, prefillCwd: n }) {
  return n ?? (t ? `~` : e);
}
function gt({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
var _t = e(() => {
  r();
});
function vt(e) {
  let t = (0, yt.c)(22),
    { composerMode: n, enabled: r, setComposerMode: i, showWorktree: a } = e,
    o = fe(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = o.formatMessage({
        id: `composer.mode.localSlashCommand.description`,
        defaultMessage: `Run this chat locally`,
        description: `Description for the local mode slash command`,
      })),
      (t[2] = o),
      (t[3] = c));
  let l = r && n !== `local`,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = async () => {
        i(`local`);
      }),
      (t[4] = i),
      (t[5] = u));
  let d = u,
    f;
  (t[6] !== s || t[7] !== c || t[8] !== l || t[9] !== d
    ? ((f = {
        id: `local`,
        title: s,
        description: c,
        requiresEmptyComposer: !1,
        Icon: te,
        enabled: l,
        onSelect: d,
      }),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]),
    He(f));
  let p;
  t[11] === o
    ? (p = t[12])
    : ((p = o.formatMessage({
        id: `composer.mode.worktree`,
        defaultMessage: `New worktree`,
        description: `Worktree mode label`,
      })),
      (t[11] = o),
      (t[12] = p));
  let m;
  t[13] === o
    ? (m = t[14])
    : ((m = o.formatMessage({
        id: `composer.mode.worktreeSlashCommand.description`,
        defaultMessage: `Run this chat in a new worktree`,
        description: `Description for the worktree mode slash command`,
      })),
      (t[13] = o),
      (t[14] = m));
  let h = r && a && n !== `worktree`,
    g;
  t[15] === i
    ? (g = t[16])
    : ((g = async () => {
        i(`worktree`);
      }),
      (t[15] = i),
      (t[16] = g));
  let _ = g,
    v;
  return (
    t[17] !== _ || t[18] !== p || t[19] !== m || t[20] !== h
      ? ((v = {
          id: `worktree`,
          title: p,
          description: m,
          requiresEmptyComposer: !1,
          Icon: ne,
          enabled: h,
          onSelect: _,
        }),
        (t[17] = _),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = v))
      : (v = t[21]),
    He(v),
    null
  );
}
var yt,
  bt = e(() => {
    ((yt = l()), pe(), Fe(), T(), C());
  });
function xt(e) {
  let t = (0, St.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: H,
          includeInteractiveRegion: !0,
          interactiveRegionRef: r,
          onInteractiveChange: i,
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    at(a)
  );
}
var St,
  H,
  Ct = e(() => {
    ((St = l()),
      ot(),
      (H = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }),
  U,
  wt,
  W,
  Tt,
  Et,
  G = e(() => {
    ((U = `_home_reiaa_1`),
      (wt = `_homeShell_reiaa_20`),
      (W = `_shellUnderlay_reiaa_21`),
      (Tt = `_composerSurface_reiaa_22`),
      (Et = { home: U, homeShell: wt, shellUnderlay: W, composerSurface: Tt }));
  });
function K() {
  let e = (0, Pt.c)(107),
    t = b(Ce);
  dt();
  let n = fe(),
    r = ce(),
    a = ae(),
    c = oe(`505458`),
    l = ie(),
    { access: u } = Ze(),
    { selectedRemoteProject: d } = p(),
    m = (0, q.useRef)(null),
    g = (0, q.useRef)(null),
    y = (0, q.useRef)(null),
    x = (0, q.useRef)(null),
    S = r.state,
    C = S?.focusComposerNonce ?? null,
    te = S?.prefillCwd ?? null,
    { data: ne, isLoading: re } = v(i),
    w = Ne(_.hotkeyWindowProjectlessDefaultEnabled),
    T = ht({
      activeWorkspaceRoot: ne?.roots[0] ?? null,
      defaultToProjectless: w === !0,
      prefillCwd: te,
    }),
    E = te == null ? d : null,
    D = E == null && T === `~`,
    O = E?.hostId ?? `local`,
    k = o(O),
    A = De(O),
    j = gt({ composerWorkspaceRoot: T, selectedRemoteProjectPath: E?.remotePath ?? null }),
    M = E == null && T == null && re,
    N = Se({ cwd: j, hostId: O, isLoading: M }),
    { data: P, isLoading: se } = ue(j, k, `hotkey_window_home_page`),
    I = P?.root ?? null,
    le;
  e[0] !== A || e[1] !== j || e[2] !== I || e[3] !== c
    ? ((le = j != null && I != null && c && !ee(j, A)),
      (e[0] = A),
      (e[1] = j),
      (e[2] = I),
      (e[3] = c),
      (e[4] = le))
    : (le = e[4]);
  let R = le,
    pe = E == null && !re && !se && I == null,
    he = D || pe,
    ge = {
      fallbackMode: `local`,
      isAvailabilityLoading: !he && ((E == null && re) || se || l),
      isCloudAvailable: !he,
      isLocalAvailable: !0,
      isWorktreeAvailable: R,
    },
    _e = f(ke, N),
    ye = v(Te),
    we = Be(),
    z = Xe({ ...ge, composerMode: _e, cloudAccess: u }),
    Oe = z === `worktree` && j != null,
    Ae;
  e[5] !== O || e[6] !== Oe
    ? ((Ae = { enabled: Oe, hostId: O, source: `hotkey_window_worktree_source` }),
      (e[5] = O),
      (e[6] = Oe),
      (e[7] = Ae))
    : (Ae = e[7]);
  let { gitRoot: je } = ze(j, Ae),
    Me = z === `worktree` ? j : null,
    Fe;
  e[8] !== O || e[9] !== Me
    ? ((Fe = { hostId: O, workspaceRoot: Me }), (e[8] = O), (e[9] = Me), (e[10] = Fe))
    : (Fe = e[10]);
  let {
      environments: Le,
      isLoading: Re,
      error: Ve,
      resolvedConfigPath: He,
      updateSelection: Ue,
    } = Ie(Fe),
    [We, qe] = (0, q.useState)(!1),
    [Je, Qe] = (0, q.useState)(null),
    $e;
  e[11] === C
    ? ($e = e[12])
    : (($e = { activationNonce: C, interactiveRegionRef: g, onInteractiveChange: At }),
      (e[11] = C),
      (e[12] = $e));
  let tt = xt($e),
    rt;
  (e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (e) => {
        Qe(e.topInsetPx);
      }),
      (e[13] = rt))
    : (rt = e[13]),
    h(`hotkey-window-home-composer-position-changed`, rt));
  let at;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (e) => {
        let t = m.current,
          n = g.current;
        if (!t || !n) return;
        let r = Nt(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of Ft)
            for (let t of document.querySelectorAll(e))
              o = Math.min(o, t.getBoundingClientRect().top);
        let s = {
            minimumComposerTopInsetPx: Math.max(0, Math.ceil(a.top - o)),
            restingComposerTopInsetPx: Math.ceil(Math.max(0, i.height - a.height - r)),
          },
          c = x.current;
        (c?.minimumComposerTopInsetPx === s.minimumComposerTopInsetPx &&
          c.restingComposerTopInsetPx === s.restingComposerTopInsetPx) ||
          ((x.current = s), L.hotkeyWindowHotkeys?.homeLayoutChanged(s));
      }),
      (e[14] = at))
    : (at = e[14]);
  let ot = at,
    st;
  (e[15] === C ? (st = e[16]) : ((st = [C]), (e[15] = C), (e[16] = st)), (0, q.useEffect)(kt, st));
  let ct, ft;
  (e[17] === we
    ? ((ct = e[18]), (ft = e[19]))
    : ((ft = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), ot(we));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          g.current != null && n?.observe(g.current),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect());
          }
        );
      }),
      (ct = [we]),
      (e[17] = we),
      (e[18] = ct),
      (e[19] = ft)),
    (0, q.useLayoutEffect)(ft, ct));
  let B;
  e[20] !== N || e[21] !== t
    ? ((B = (e) => {
        me(t, N, e);
      }),
      (e[20] = N),
      (e[21] = t),
      (e[22] = B))
    : (B = e[22]);
  let V = B,
    mt;
  e[23] === t
    ? (mt = e[24])
    : ((mt = (e) => {
        ve(t, (t) => {
          t.asyncThreadStartingState = e;
        });
      }),
      (e[23] = t),
      (e[24] = mt));
  let _t = mt,
    yt = Ot,
    bt;
  e[25] !== r.hash || e[26] !== r.pathname || e[27] !== r.search || e[28] !== S || e[29] !== a
    ? ((bt = (e) => {
        let t = e ?? `~`,
          n = { ...S, prefillCwd: t };
        a({ pathname: r.pathname, search: r.search, hash: r.hash }, { replace: !0, state: n });
      }),
      (e[25] = r.hash),
      (e[26] = r.pathname),
      (e[27] = r.search),
      (e[28] = S),
      (e[29] = a),
      (e[30] = bt))
    : (bt = e[30]);
  let St = bt,
    H;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        y.current === e.pointerId &&
          ((y.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          L.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[31] = H))
    : (H = e[31]);
  let Ct = H,
    U;
  e[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          (y.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          L.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }));
      }),
      (e[32] = U))
    : (U = e[32]);
  let wt = U,
    W;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        y.current === e.pointerId && L.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[33] = W))
    : (W = e[33]);
  let Tt = W,
    G;
  if (
    e[34] !== z ||
    e[35] !== j ||
    e[36] !== E?.label ||
    e[37] !== E?.remotePath ||
    e[38] !== n ||
    e[39] !== D
  ) {
    let t =
      Ke(E?.remotePath ?? j, E?.label) ??
      n.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (D) {
      let t;
      (e[41] === n
        ? (t = e[42])
        : ((t = n.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask Codex anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[41] = n),
          (e[42] = t)),
        (G = t));
    } else if (z === `cloud`) {
      let t;
      (e[43] === n
        ? (t = e[44])
        : ((t = n.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask Codex anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[43] = n),
          (e[44] = t)),
        (G = t));
    } else
      G =
        z === `worktree`
          ? n.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask Codex anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : n.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask Codex anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[34] = z),
      (e[35] = j),
      (e[36] = E?.label),
      (e[37] = E?.remotePath),
      (e[38] = n),
      (e[39] = D),
      (e[40] = G));
  } else G = e[40];
  let K;
  if (M) {
    let t;
    (e[45] === n
      ? (t = e[46])
      : ((t = n.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[45] = n),
        (e[46] = t)),
      (K = t));
  } else if (D) {
    let t;
    (e[47] === n
      ? (t = e[48])
      : ((t = n.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Projectless chats run locally`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[47] = n),
        (e[48] = t)),
      (K = t));
  } else if (pe) {
    let t;
    (e[49] === n
      ? (t = e[50])
      : ((t = n.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[49] = n),
        (e[50] = t)),
      (K = t));
  }
  let It;
  e[51] !== ye ||
  e[52] !== k ||
  e[53] !== z ||
  e[54] !== j ||
  e[55] !== I ||
  e[56] !== _t ||
  e[57] !== je
    ? ((It =
        z === `worktree`
          ? (0, J.jsx)(lt, {
              startingState: ye,
              setStartingState: _t,
              hostConfig: k,
              gitRootOverride: je ?? j,
              branchSource: `worktree`,
            })
          : I == null
            ? null
            : (0, J.jsx)(ut, {
                gitRoot: I,
                hostConfig: k,
                localConversationId: null,
                shouldShow: !0,
              })),
      (e[51] = ye),
      (e[52] = k),
      (e[53] = z),
      (e[54] = j),
      (e[55] = I),
      (e[56] = _t),
      (e[57] = je),
      (e[58] = It))
    : (It = e[58]);
  let Lt = It,
    Rt;
  e[59] === n
    ? (Rt = e[60])
    : ((Rt = n.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Task settings`,
        description: `Accessible label for the hotkey window task settings menu`,
      })),
      (e[59] = n),
      (e[60] = Rt));
  let zt = Rt,
    Bt,
    Vt;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = de(Et.home, `relative h-full w-full overflow-hidden bg-transparent pb-1`)),
      (Vt = (0, J.jsx)(Ye, {})),
      (e[61] = Bt),
      (e[62] = Vt))
    : ((Bt = e[61]), (Vt = e[62]));
  let Ht = tt && `no-drag`,
    Ut;
  e[63] === Ht
    ? (Ut = e[64])
    : ((Ut = de(Et.homeShell, `absolute inset-x-1 bottom-1 px-[15px] pb-[13px] pt-[17px]`, Ht)),
      (e[63] = Ht),
      (e[64] = Ut));
  let Wt;
  e[65] === Je
    ? (Wt = e[66])
    : ((Wt = Je == null ? void 0 : { bottom: `auto`, top: Je }), (e[65] = Je), (e[66] = Wt));
  let Gt;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gt = (0, J.jsx)(`div`, {
        className: Et.shellUnderlay,
        "aria-hidden": `true`,
        onLostPointerCapture: Ct,
        onPointerCancel: Ct,
        onPointerDown: wt,
        onPointerMove: Tt,
        onPointerUp: Ct,
      })),
      (e[67] = Gt))
    : (Gt = e[67]);
  let Kt = !D && !M,
    qt;
  e[68] !== z || e[69] !== V || e[70] !== R || e[71] !== Kt
    ? ((qt = (0, J.jsx)(vt, { composerMode: z, enabled: Kt, setComposerMode: V, showWorktree: R })),
      (e[68] = z),
      (e[69] = V),
      (e[70] = R),
      (e[71] = Kt),
      (e[72] = qt))
    : (qt = e[72]);
  let Y;
  e[73] === zt
    ? (Y = e[74])
    : ((Y = (0, J.jsx)(xe, {
        asChild: !0,
        children: (0, J.jsx)(et, { label: zt, size: `composer` }),
      })),
      (e[73] = zt),
      (e[74] = Y));
  let Jt;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jt = (0, J.jsx)(F, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[75] = Jt))
    : (Jt = e[75]);
  let Yt = D ? null : (E?.id ?? j ?? void 0),
    X;
  e[76] !== St || e[77] !== Yt
    ? ((X = (0, J.jsx)(Mt, {
        label: Jt,
        control: (0, J.jsx)(nt, {
          activeProjectIdOverride: Yt,
          allowRemoteProjects: !1,
          onWorkspaceRootSelected: St,
        }),
      })),
      (e[76] = St),
      (e[77] = Yt),
      (e[78] = X))
    : (X = e[78]);
  let Xt;
  e[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xt = (0, J.jsx)(F, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[79] = Xt))
    : (Xt = e[79]);
  let Zt = ge.isCloudAvailable && u === `enabled`,
    Z;
  e[80] !== z || e[81] !== V || e[82] !== R || e[83] !== K || e[84] !== Zt
    ? ((Z = (0, J.jsx)(Mt, {
        label: Xt,
        control: (0, J.jsx)(pt, {
          canUseCloud: Zt,
          composerMode: z,
          setComposerMode: V,
          showLabel: !0,
          disabledTooltipText: K,
          showWorktree: R,
        }),
      })),
      (e[80] = z),
      (e[81] = V),
      (e[82] = R),
      (e[83] = K),
      (e[84] = Zt),
      (e[85] = Z))
    : (Z = e[85]);
  let Q;
  e[86] !== z || e[87] !== Ve || e[88] !== Re || e[89] !== He || e[90] !== Ue || e[91] !== Le
    ? ((Q =
        z === `worktree`
          ? (0, J.jsx)(Mt, {
              label: (0, J.jsx)(F, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, J.jsx)(it, {
                environments: Le,
                isLoading: Re,
                hasError: Ve != null,
                selectedConfigPath: He,
                onSelectConfigPath: Ue,
                onOpenSettings: Dt,
              }),
            })
          : null),
      (e[86] = z),
      (e[87] = Ve),
      (e[88] = Re),
      (e[89] = He),
      (e[90] = Ue),
      (e[91] = Le),
      (e[92] = Q))
    : (Q = e[92]);
  let $;
  e[93] === Lt
    ? ($ = e[94])
    : (($ = Lt
        ? (0, J.jsx)(Mt, {
            label: (0, J.jsx)(F, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: Lt,
          })
        : null),
      (e[93] = Lt),
      (e[94] = $));
  let Qt;
  e[95] === z
    ? (Qt = e[96])
    : ((Qt =
        z === `cloud`
          ? null
          : (0, J.jsx)(Pe, { conversationId: null, hostId: s, DropdownContainer: jt })),
      (e[95] = z),
      (e[96] = Qt));
  let $t;
  e[97] !== X || e[98] !== Z || e[99] !== Q || e[100] !== $ || e[101] !== Qt
    ? (($t = (0, J.jsx)(be, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `no-drag w-auto min-w-[320px] rounded-3xl p-0`,
        children: (0, J.jsxs)(`div`, {
          className: `flex flex-col gap-4 p-3`,
          children: [X, Z, Q, $, Qt],
        }),
      })),
      (e[97] = X),
      (e[98] = Z),
      (e[99] = Q),
      (e[100] = $),
      (e[101] = Qt),
      (e[102] = $t))
    : ($t = e[102]);
  let en;
  return (
    e[103] !== We || e[104] !== Y || e[105] !== $t
      ? ((en = (0, J.jsxs)(Ee, { open: We, onOpenChange: qe, children: [Y, $t] })),
        (e[103] = We),
        (e[104] = Y),
        (e[105] = $t),
        (e[106] = en))
      : (en = e[106]),
    (0, J.jsxs)(`div`, {
      ref: m,
      className: Bt,
      children: [
        Vt,
        (0, J.jsxs)(`div`, {
          ref: g,
          className: Ut,
          style: Wt,
          children: [
            Gt,
            qt,
            (0, J.jsx)(`div`, {
              className: `no-drag relative`,
              children: (0, J.jsx)(Ge, {
                showWorkspaceDropdownInFooter: !1,
                showExternalFooter: !1,
                surfaceClassName: Et.composerSurface,
                composerModeAvailability: ge,
                placeholderText: G,
                defaultCwd: D ? `~` : void 0,
                hotkeyWindowHomeFooterControls: en,
                onLocalConversationCreated: yt,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Dt() {
  n.dispatchMessage(`show-settings`, { section: `local-environments` });
}
function Ot(e) {
  L.hotkeyWindowHotkeys?.open({ path: m(e) });
}
function kt() {
  E();
}
function At(e) {
  L.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function jt(e) {
  let t = (0, Pt.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, J.jsx)(F, {
        id: `hotkeyWindow.home.taskMenu.permissions`,
        defaultMessage: `Permissions`,
        description: `Label for the hotkey window permissions row`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, J.jsx)(Mt, { label: r, control: n })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Mt(e) {
  let t = (0, Pt.c)(7),
    { label: n, control: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, J.jsx)(`div`, {
        className: `shrink-0 text-sm font-medium text-token-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, J.jsx)(`div`, { className: `min-w-0`, children: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, J.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Nt(e) {
  return Number.parseFloat(e) || 0;
}
var Pt, q, J, Ft;
e(() => {
  ((Pt = l()),
    R(),
    d(),
    r(),
    (q = t(a(), 1)),
    pe(),
    se(),
    Je(),
    $e(),
    ye(),
    st(),
    Ue(),
    ct(),
    Qe(),
    we(),
    he(),
    w(),
    mt(),
    tt(),
    Ve(),
    We(),
    rt(),
    le(),
    z(),
    Le(),
    g(),
    y(),
    I(),
    Oe(),
    c(),
    Me(),
    u(),
    P(),
    qe(),
    Re(),
    _t(),
    bt(),
    ft(),
    Ct(),
    G(),
    (J = x()),
    (Ft = [`[data-composer-overlay-floating-ui]`, `[data-above-composer-portal] > *`]));
})();
export { K as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page.js.map
