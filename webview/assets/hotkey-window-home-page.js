import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AN as n,
  Bs as r,
  CP as i,
  Cl as a,
  Cs as o,
  Cu as s,
  DF as c,
  EB as l,
  EN as u,
  Fs as d,
  GP as f,
  Gr as p,
  HP as m,
  JN as h,
  MA as g,
  ME as _,
  Mj as v,
  Ms as y,
  NA as b,
  NE as ee,
  Nh as x,
  Pf as S,
  Ph as te,
  Pj as C,
  Qj as w,
  RV as T,
  Rj as ne,
  SP as re,
  TB as E,
  TP as D,
  Ur as ie,
  YN as O,
  Yr as k,
  ZF as A,
  _l as ae,
  av as j,
  bB as M,
  dI as N,
  dr as oe,
  eM as se,
  fN as ce,
  gr as P,
  gu as le,
  gv as ue,
  hr as de,
  iF as fe,
  jE as pe,
  jV as me,
  kf as he,
  lM as ge,
  ml as F,
  ms as _e,
  mu as ve,
  pN as I,
  pl as ye,
  pr as be,
  qN as xe,
  qP as Se,
  uM as Ce,
  vv as we,
  wB as Te,
  wP as Ee,
  wu as De,
  zV as Oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Fn as ke,
  In as Ae,
  ad as L,
  ah as je,
  dS as R,
  dd as z,
  fd as B,
  od as Me,
  oh as Ne,
  pS as Pe,
} from "./app-initial~app-main~onboarding-page.js";
import {
  B as Fe,
  C as Ie,
  R as Le,
  i as Re,
  n as ze,
  r as Be,
  t as Ve,
  w as He,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  a as Ue,
  i as We,
  n as Ge,
  o as Ke,
  r as qe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~kj79zy13.js";
import {
  n as Je,
  t as Ye,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc.js";
import {
  i as Xe,
  r as Ze,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n.js";
import {
  a as Qe,
  r as $e,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  d as V,
  l as et,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~peaeik0s.js";
import { n as tt, t as nt } from "./worktree-environment-dropdown.js";
import { n as rt, t as it } from "./use-floating-window-pointer-interactivity.js";
import { i as at, n as ot, r as st, t as ct } from "./composer-footer-branch-switcher.js";
import { n as lt, t as ut } from "./use-hotkey-window-dismiss-on-escape.js";
function dt(e) {
  let t = (0, H.c)(52),
    {
      canUseCloud: n,
      composerMode: r,
      setComposerMode: i,
      showLabel: a,
      disabledTooltipText: o,
      showWorktree: s,
    } = e,
    c = a === void 0 ? !1 : a,
    l = Se(),
    u;
  t[0] !== r || t[1] !== s
    ? ((u =
        r === `cloud`
          ? (0, U.jsx)(ke, { className: `icon-2xs` })
          : r === `worktree` && s
            ? (0, U.jsx)(z, { className: `icon-2xs` })
            : (0, U.jsx)(L, { className: `icon-2xs` })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== r || t[4] !== c || t[5] !== s
    ? ((d = c
        ? (0, U.jsx)(`span`, {
            className: `max-w-40 truncate text-left whitespace-nowrap`,
            children:
              r === `cloud`
                ? (0, U.jsx)(f, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : r === `worktree` && s
                  ? (0, U.jsx)(f, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, U.jsx)(f, {
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
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, U.jsx)(re, { className: `icon-2xs text-token-input-placeholder-foreground` })),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== u || t[9] !== d
    ? ((h = (0, U.jsxs)(U.Fragment, { children: [u, d, m] })), (t[8] = u), (t[9] = d), (t[10] = h))
    : (h = t[10]);
  let g = h;
  if (o) {
    let e;
    t[11] === g
      ? (e = t[12])
      : ((e = (0, U.jsx)(`span`, {
          children: (0, U.jsx)(ce, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: g,
          }),
        })),
        (t[11] = g),
        (t[12] = e));
    let n;
    return (
      t[13] !== o || t[14] !== e
        ? ((n = (0, U.jsx)(w, { tooltipContent: o, children: e })),
          (t[13] = o),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  let _;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, U.jsx)(f, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the task`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === g
    ? (v = t[18])
    : ((v = (0, U.jsx)(w, {
        tooltipContent: _,
        children: (0, U.jsx)(ce, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: g,
        }),
      })),
      (t[17] = g),
      (t[18] = v));
  let y = r === `local` ? ge : void 0,
    b;
  t[19] === i
    ? (b = t[20])
    : ((b = () => {
        i(`local`);
      }),
      (t[19] = i),
      (t[20] = b));
  let ee;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, U.jsx)(f, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[21] = ee))
    : (ee = t[21]);
  let x;
  t[22] !== y || t[23] !== b
    ? ((x = (0, U.jsx)(p.Item, { LeftIcon: L, RightIcon: y, onSelect: b, children: ee })),
      (t[22] = y),
      (t[23] = b),
      (t[24] = x))
    : (x = t[24]);
  let S = r === `cloud` ? ge : void 0,
    te = !n,
    C;
  t[25] === i
    ? (C = t[26])
    : ((C = () => {
        i(`cloud`);
      }),
      (t[25] = i),
      (t[26] = C));
  let T;
  t[27] !== n || t[28] !== l
    ? ((T = n
        ? void 0
        : l.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[27] = n),
      (t[28] = l),
      (t[29] = T))
    : (T = t[29]);
  let ne;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, U.jsx)(f, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[30] = ne))
    : (ne = t[30]);
  let E;
  t[31] !== S || t[32] !== te || t[33] !== C || t[34] !== T
    ? ((E = (0, U.jsx)(p.Item, {
        LeftIcon: ke,
        RightIcon: S,
        disabled: te,
        onSelect: C,
        tooltipText: T,
        children: ne,
      })),
      (t[31] = S),
      (t[32] = te),
      (t[33] = C),
      (t[34] = T),
      (t[35] = E))
    : (E = t[35]);
  let D = r === `worktree` ? ge : void 0,
    O;
  t[36] === i
    ? (O = t[37])
    : ((O = () => {
        i(`worktree`);
      }),
      (t[36] = i),
      (t[37] = O));
  let k = !s,
    A;
  t[38] !== l || t[39] !== s
    ? ((A = s
        ? void 0
        : l.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.localOnly`,
            defaultMessage: `Initialize a git repo to run tasks in worktrees`,
            description: `Tooltip for disabled hotkey-window worktree mode selector`,
          })),
      (t[38] = l),
      (t[39] = s),
      (t[40] = A))
    : (A = t[40]);
  let ae;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, U.jsx)(f, {
        id: `composer.mode.worktreeSegment`,
        defaultMessage: `Worktree`,
        description: `Worktree mode label for the segmented toggle`,
      })),
      (t[41] = ae))
    : (ae = t[41]);
  let j;
  t[42] !== D || t[43] !== O || t[44] !== k || t[45] !== A
    ? ((j = (0, U.jsx)(p.Item, {
        LeftIcon: z,
        RightIcon: D,
        onSelect: O,
        disabled: k,
        tooltipText: A,
        children: ae,
      })),
      (t[42] = D),
      (t[43] = O),
      (t[44] = k),
      (t[45] = A),
      (t[46] = j))
    : (j = t[46]);
  let M;
  return (
    t[47] !== x || t[48] !== E || t[49] !== j || t[50] !== v
      ? ((M = (0, U.jsxs)(ie, {
          triggerButton: v,
          contentWidth: `menuNarrow`,
          children: [x, E, j],
        })),
        (t[47] = x),
        (t[48] = E),
        (t[49] = j),
        (t[50] = v),
        (t[51] = M))
      : (M = t[51]),
    M
  );
}
var H,
  U,
  ft = e(() => {
    ((H = T()), m(), I(), k(), se(), Ce(), i(), Ae(), Me(), B(), (U = me()));
  });
function pt({ activeWorkspaceRoot: e, defaultToProjectless: t, prefillCwd: n }) {
  return n ?? (t ? `~` : e);
}
function mt({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
var ht = e(() => {
  fe();
});
function gt(e) {
  let t = (0, _t.c)(22),
    { composerMode: n, enabled: r, setComposerMode: i, showWorktree: a } = e,
    o = Se(),
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
        Icon: L,
        enabled: l,
        onSelect: d,
      }),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]),
    V(f));
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
          Icon: z,
          enabled: h,
          onSelect: _,
        }),
        (t[17] = _),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = v))
      : (v = t[21]),
    V(v),
    null
  );
}
var _t,
  vt = e(() => {
    ((_t = T()), m(), et(), Me(), B());
  });
function yt(e) {
  let t = (0, bt.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: W,
          includeInteractiveRegion: !0,
          interactiveRegionRef: r,
          onInteractiveChange: i,
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    rt(a)
  );
}
var bt,
  W,
  xt = e(() => {
    ((bt = T()),
      it(),
      (W = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }),
  G,
  St,
  K,
  Ct,
  wt,
  q = e(() => {
    ((G = `_home_reiaa_1`),
      (St = `_homeShell_reiaa_20`),
      (K = `_shellUnderlay_reiaa_21`),
      (Ct = `_composerSurface_reiaa_22`),
      (wt = { home: G, homeShell: St, shellUnderlay: K, composerSurface: Ct }));
  });
function J() {
  let e = (0, Mt.c)(107),
    t = E(ae);
  lt();
  let i = Se(),
    a = ue(),
    s = we(),
    u = C(`505458`),
    p = ne(),
    { access: m } = Ke(),
    { selectedRemoteProject: h } = le(),
    v = (0, Y.useRef)(null),
    y = (0, Y.useRef)(null),
    b = (0, Y.useRef)(null),
    x = (0, Y.useRef)(null),
    S = a.state,
    w = S?.focusComposerNonce ?? null,
    T = S?.prefillCwd ?? null,
    { data: re, isLoading: D } = l(he),
    ie = n(c.hotkeyWindowProjectlessDefaultEnabled),
    k = pt({
      activeWorkspaceRoot: re?.roots[0] ?? null,
      defaultToProjectless: ie === !0,
      prefillCwd: T,
    }),
    j = T == null ? h : null,
    M = j == null && k === `~`,
    N = j?.hostId ?? `local`,
    se = _(N),
    ce = De(N),
    P = mt({ composerWorkspaceRoot: k, selectedRemoteProjectPath: j?.remotePath ?? null }),
    fe = j == null && k == null && D,
    pe = ye({ cwd: P, hostId: N, isLoading: fe }),
    { data: me, isLoading: ge } = te(P, se, `hotkey_window_home_page`),
    F = me?.root ?? null,
    ve;
  e[0] !== ce || e[1] !== P || e[2] !== F || e[3] !== u
    ? ((ve = P != null && F != null && u && !A(P, ce)),
      (e[0] = ce),
      (e[1] = P),
      (e[2] = F),
      (e[3] = u),
      (e[4] = ve))
    : (ve = e[4]);
  let I = ve,
    xe = j == null && !D && !ge && F == null,
    Ce = M || xe,
    Oe = {
      fallbackMode: `local`,
      isAvailabilityLoading: !Ce && ((j == null && D) || ge || p),
      isCloudAvailable: !Ce,
      isLocalAvailable: !0,
      isWorktreeAvailable: I,
    },
    ke = Te(o, pe),
    Ae = l(_e),
    L = Re(),
    R = Ge({ ...Oe, composerMode: ke, cloudAccess: m }),
    z = R === `worktree` && P != null,
    B;
  e[5] !== N || e[6] !== z
    ? ((B = { enabled: z, hostId: N, source: `hotkey_window_worktree_source` }),
      (e[5] = N),
      (e[6] = z),
      (e[7] = B))
    : (B = e[7]);
  let { gitRoot: Me } = Fe(P, B),
    Ne = R === `worktree` ? P : null,
    Pe;
  e[8] !== N || e[9] !== Ne
    ? ((Pe = { hostId: N, workspaceRoot: Ne }), (e[8] = N), (e[9] = Ne), (e[10] = Pe))
    : (Pe = e[10]);
  let {
      environments: Le,
      isLoading: ze,
      error: Be,
      resolvedConfigPath: He,
      updateSelection: Ue,
    } = Qe(Pe),
    [qe, Je] = (0, Y.useState)(!1),
    [Xe, $e] = (0, Y.useState)(null),
    V;
  e[11] === w
    ? (V = e[12])
    : ((V = { activationNonce: w, interactiveRegionRef: y, onInteractiveChange: Ot }),
      (e[11] = w),
      (e[12] = V));
  let et = yt(V),
    tt;
  (e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (e) => {
        $e(e.topInsetPx);
      }),
      (e[13] = tt))
    : (tt = e[13]),
    O(`hotkey-window-home-composer-position-changed`, tt));
  let rt;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (e) => {
        let t = v.current,
          n = y.current;
        if (!t || !n) return;
        let r = jt(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of Nt)
            for (let t of document.querySelectorAll(e))
              o = Math.min(o, t.getBoundingClientRect().top);
        let s = {
            minimumComposerTopInsetPx: Math.max(0, Math.ceil(a.top - o)),
            restingComposerTopInsetPx: Math.ceil(Math.max(0, i.height - a.height - r)),
          },
          c = x.current;
        (c?.minimumComposerTopInsetPx === s.minimumComposerTopInsetPx &&
          c.restingComposerTopInsetPx === s.restingComposerTopInsetPx) ||
          ((x.current = s), g.hotkeyWindowHotkeys?.homeLayoutChanged(s));
      }),
      (e[14] = rt))
    : (rt = e[14]);
  let it = rt,
    at;
  (e[15] === w ? (at = e[16]) : ((at = [w]), (e[15] = w), (e[16] = at)), (0, Y.useEffect)(Dt, at));
  let ot, ut;
  (e[17] === L
    ? ((ot = e[18]), (ut = e[19]))
    : ((ut = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), it(L));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          y.current != null && n?.observe(y.current),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect());
          }
        );
      }),
      (ot = [L]),
      (e[17] = L),
      (e[18] = ot),
      (e[19] = ut)),
    (0, Y.useLayoutEffect)(ut, ot));
  let H;
  e[20] !== pe || e[21] !== t
    ? ((H = (e) => {
        d(t, pe, e);
      }),
      (e[20] = pe),
      (e[21] = t),
      (e[22] = H))
    : (H = e[22]);
  let U = H,
    ft;
  e[23] === t
    ? (ft = e[24])
    : ((ft = (e) => {
        r(t, (t) => {
          t.asyncThreadStartingState = e;
        });
      }),
      (e[23] = t),
      (e[24] = ft));
  let ht = ft,
    _t = Et,
    vt;
  e[25] !== a.hash || e[26] !== a.pathname || e[27] !== a.search || e[28] !== S || e[29] !== s
    ? ((vt = (e) => {
        let t = e ?? `~`,
          n = { ...S, prefillCwd: t };
        s({ pathname: a.pathname, search: a.search, hash: a.hash }, { replace: !0, state: n });
      }),
      (e[25] = a.hash),
      (e[26] = a.pathname),
      (e[27] = a.search),
      (e[28] = S),
      (e[29] = s),
      (e[30] = vt))
    : (vt = e[30]);
  let bt = vt,
    W;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        b.current === e.pointerId &&
          ((b.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          g.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[31] = W))
    : (W = e[31]);
  let xt = W,
    G;
  e[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          (b.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          g.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }));
      }),
      (e[32] = G))
    : (G = e[32]);
  let St = G,
    K;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (e) => {
        b.current === e.pointerId && g.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[33] = K))
    : (K = e[33]);
  let Ct = K,
    q;
  if (
    e[34] !== R ||
    e[35] !== P ||
    e[36] !== j?.label ||
    e[37] !== j?.remotePath ||
    e[38] !== i ||
    e[39] !== M
  ) {
    let t =
      Ze(j?.remotePath ?? P, j?.label) ??
      i.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (M) {
      let t;
      (e[41] === i
        ? (t = e[42])
        : ((t = i.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask Codex anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[41] = i),
          (e[42] = t)),
        (q = t));
    } else if (R === `cloud`) {
      let t;
      (e[43] === i
        ? (t = e[44])
        : ((t = i.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask Codex anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[43] = i),
          (e[44] = t)),
        (q = t));
    } else
      q =
        R === `worktree`
          ? i.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask Codex anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : i.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask Codex anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[34] = R),
      (e[35] = P),
      (e[36] = j?.label),
      (e[37] = j?.remotePath),
      (e[38] = i),
      (e[39] = M),
      (e[40] = q));
  } else q = e[40];
  let J;
  if (fe) {
    let t;
    (e[45] === i
      ? (t = e[46])
      : ((t = i.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[45] = i),
        (e[46] = t)),
      (J = t));
  } else if (M) {
    let t;
    (e[47] === i
      ? (t = e[48])
      : ((t = i.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Projectless chats run locally`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[47] = i),
        (e[48] = t)),
      (J = t));
  } else if (xe) {
    let t;
    (e[49] === i
      ? (t = e[50])
      : ((t = i.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[49] = i),
        (e[50] = t)),
      (J = t));
  }
  let Pt;
  e[51] !== Ae ||
  e[52] !== se ||
  e[53] !== R ||
  e[54] !== P ||
  e[55] !== F ||
  e[56] !== ht ||
  e[57] !== Me
    ? ((Pt =
        R === `worktree`
          ? (0, X.jsx)(st, {
              startingState: Ae,
              setStartingState: ht,
              hostConfig: se,
              gitRootOverride: Me ?? P,
              branchSource: `worktree`,
            })
          : F == null
            ? null
            : (0, X.jsx)(ct, {
                gitRoot: F,
                hostConfig: se,
                localConversationId: null,
                shouldShow: !0,
              })),
      (e[51] = Ae),
      (e[52] = se),
      (e[53] = R),
      (e[54] = P),
      (e[55] = F),
      (e[56] = ht),
      (e[57] = Me),
      (e[58] = Pt))
    : (Pt = e[58]);
  let Ft = Pt,
    It;
  e[59] === i
    ? (It = e[60])
    : ((It = i.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Task settings`,
        description: `Accessible label for the hotkey window task settings menu`,
      })),
      (e[59] = i),
      (e[60] = It));
  let Lt = It,
    Rt,
    zt;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Rt = Ee(wt.home, `relative h-full w-full overflow-hidden bg-transparent pb-1`)),
      (zt = (0, X.jsx)(We, {})),
      (e[61] = Rt),
      (e[62] = zt))
    : ((Rt = e[61]), (zt = e[62]));
  let Bt = et && `no-drag`,
    Vt;
  e[63] === Bt
    ? (Vt = e[64])
    : ((Vt = Ee(wt.homeShell, `absolute inset-x-1 bottom-1 px-[15px] pb-[13px] pt-[17px]`, Bt)),
      (e[63] = Bt),
      (e[64] = Vt));
  let Ht;
  e[65] === Xe
    ? (Ht = e[66])
    : ((Ht = Xe == null ? void 0 : { bottom: `auto`, top: Xe }), (e[65] = Xe), (e[66] = Ht));
  let Ut;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ut = (0, X.jsx)(`div`, {
        className: wt.shellUnderlay,
        "aria-hidden": `true`,
        onLostPointerCapture: xt,
        onPointerCancel: xt,
        onPointerDown: St,
        onPointerMove: Ct,
        onPointerUp: xt,
      })),
      (e[67] = Ut))
    : (Ut = e[67]);
  let Wt = !M && !fe,
    Gt;
  e[68] !== R || e[69] !== U || e[70] !== I || e[71] !== Wt
    ? ((Gt = (0, X.jsx)(gt, { composerMode: R, enabled: Wt, setComposerMode: U, showWorktree: I })),
      (e[68] = R),
      (e[69] = U),
      (e[70] = I),
      (e[71] = Wt),
      (e[72] = Gt))
    : (Gt = e[72]);
  let Z;
  e[73] === Lt
    ? (Z = e[74])
    : ((Z = (0, X.jsx)(de, {
        asChild: !0,
        children: (0, X.jsx)(je, { label: Lt, size: `composer` }),
      })),
      (e[73] = Lt),
      (e[74] = Z));
  let Kt;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = (0, X.jsx)(f, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[75] = Kt))
    : (Kt = e[75]);
  let qt = M ? null : (j?.id ?? P ?? void 0),
    Jt;
  e[76] !== bt || e[77] !== qt
    ? ((Jt = (0, X.jsx)(At, {
        label: Kt,
        control: (0, X.jsx)(Ye, {
          activeProjectIdOverride: qt,
          allowRemoteProjects: !1,
          onWorkspaceRootSelected: bt,
        }),
      })),
      (e[76] = bt),
      (e[77] = qt),
      (e[78] = Jt))
    : (Jt = e[78]);
  let Yt;
  e[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = (0, X.jsx)(f, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[79] = Yt))
    : (Yt = e[79]);
  let Xt = Oe.isCloudAvailable && m === `enabled`,
    Zt;
  e[80] !== R || e[81] !== U || e[82] !== I || e[83] !== J || e[84] !== Xt
    ? ((Zt = (0, X.jsx)(At, {
        label: Yt,
        control: (0, X.jsx)(dt, {
          canUseCloud: Xt,
          composerMode: R,
          setComposerMode: U,
          showLabel: !0,
          disabledTooltipText: J,
          showWorktree: I,
        }),
      })),
      (e[80] = R),
      (e[81] = U),
      (e[82] = I),
      (e[83] = J),
      (e[84] = Xt),
      (e[85] = Zt))
    : (Zt = e[85]);
  let Qt;
  e[86] !== R || e[87] !== Be || e[88] !== ze || e[89] !== He || e[90] !== Ue || e[91] !== Le
    ? ((Qt =
        R === `worktree`
          ? (0, X.jsx)(At, {
              label: (0, X.jsx)(f, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, X.jsx)(nt, {
                environments: Le,
                isLoading: ze,
                hasError: Be != null,
                selectedConfigPath: He,
                onSelectConfigPath: Ue,
                onOpenSettings: Tt,
              }),
            })
          : null),
      (e[86] = R),
      (e[87] = Be),
      (e[88] = ze),
      (e[89] = He),
      (e[90] = Ue),
      (e[91] = Le),
      (e[92] = Qt))
    : (Qt = e[92]);
  let Q;
  e[93] === Ft
    ? (Q = e[94])
    : ((Q = Ft
        ? (0, X.jsx)(At, {
            label: (0, X.jsx)(f, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: Ft,
          })
        : null),
      (e[93] = Ft),
      (e[94] = Q));
  let $t;
  e[95] === R
    ? ($t = e[96])
    : (($t =
        R === `cloud`
          ? null
          : (0, X.jsx)(Ie, { conversationId: null, hostId: ee, DropdownContainer: kt })),
      (e[95] = R),
      (e[96] = $t));
  let $;
  e[97] !== Jt || e[98] !== Zt || e[99] !== Qt || e[100] !== Q || e[101] !== $t
    ? (($ = (0, X.jsx)(be, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `no-drag w-auto min-w-[320px] rounded-3xl p-0`,
        children: (0, X.jsxs)(`div`, {
          className: `flex flex-col gap-4 p-3`,
          children: [Jt, Zt, Qt, Q, $t],
        }),
      })),
      (e[97] = Jt),
      (e[98] = Zt),
      (e[99] = Qt),
      (e[100] = Q),
      (e[101] = $t),
      (e[102] = $))
    : ($ = e[102]);
  let en;
  return (
    e[103] !== qe || e[104] !== Z || e[105] !== $
      ? ((en = (0, X.jsxs)(oe, { open: qe, onOpenChange: Je, children: [Z, $] })),
        (e[103] = qe),
        (e[104] = Z),
        (e[105] = $),
        (e[106] = en))
      : (en = e[106]),
    (0, X.jsxs)(`div`, {
      ref: v,
      className: Rt,
      children: [
        zt,
        (0, X.jsxs)(`div`, {
          ref: y,
          className: Vt,
          style: Ht,
          children: [
            Ut,
            Gt,
            (0, X.jsx)(`div`, {
              className: `no-drag relative`,
              children: (0, X.jsx)(Ve, {
                showWorkspaceDropdownInFooter: !1,
                showExternalFooter: !1,
                surfaceClassName: wt.composerSurface,
                composerModeAvailability: Oe,
                placeholderText: q,
                defaultCwd: M ? `~` : void 0,
                hotkeyWindowHomeFooterControls: en,
                onLocalConversationCreated: _t,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Tt() {
  h.dispatchMessage(`show-settings`, { section: `local-environments` });
}
function Et(e) {
  g.hotkeyWindowHotkeys?.open({ path: N(e) });
}
function Dt() {
  R();
}
function Ot(e) {
  g.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function kt(e) {
  let t = (0, Mt.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(f, {
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
      : ((i = (0, X.jsx)(At, { label: r, control: n })), (t[1] = n), (t[2] = i)),
    i
  );
}
function At(e) {
  let t = (0, Mt.c)(7),
    { label: n, control: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, X.jsx)(`div`, {
        className: `shrink-0 text-sm font-medium text-token-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, X.jsx)(`div`, { className: `min-w-0`, children: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, X.jsxs)(`div`, {
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
function jt(e) {
  return Number.parseFloat(e) || 0;
}
var Mt, Y, X, Nt;
e(() => {
  ((Mt = T()),
    D(),
    M(),
    fe(),
    (Y = t(Oe(), 1)),
    m(),
    j(),
    Ue(),
    Ne(),
    P(),
    at(),
    ze(),
    ot(),
    qe(),
    F(),
    y(),
    Pe(),
    ft(),
    Je(),
    He(),
    Be(),
    tt(),
    x(),
    s(),
    $e(),
    xe(),
    ve(),
    b(),
    a(),
    S(),
    u(),
    pe(),
    v(),
    Xe(),
    Le(),
    ht(),
    vt(),
    ut(),
    xt(),
    q(),
    (X = me()),
    (Nt = [`[data-composer-overlay-floating-ui]`, `[data-above-composer-portal] > *`]));
})();
export { J as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page.js.map
