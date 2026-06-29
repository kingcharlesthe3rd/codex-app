import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  bt as r,
  kl as i,
  xl as a,
  xt as o,
  yt as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Xp as c,
  Zp as ee,
  _p as l,
  am as u,
  ap as d,
  dp as f,
  fp as p,
  im as m,
  ip as h,
  mp as g,
  up as te,
  vp as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  aw as v,
  cC as ne,
  cw as y,
  oC as b,
  rw as x,
  uw as re,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  An as ie,
  Dn as ae,
  On as S,
  cn as oe,
  kn as se,
  ln as ce,
  vn as le,
  yn as C,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  Br as ue,
  zr as de,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import { a as fe, i as pe, n as me, o as he, r as ge, t as _e } from "./global-dictation-orb.js";
import {
  D as ve,
  T as w,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import { n as ye, t as T } from "./use-floating-window-pointer-interactivity.js";
var E,
  D,
  O,
  k,
  A = e(() => {
    ((E = `_darkTheme_1xq4w_1`),
      (D = `_miniSurface_1xq4w_15`),
      (O = `_expandedSurface_1xq4w_22`),
      (k = { darkTheme: E, miniSurface: D, expandedSurface: O }));
  });
function be() {
  let e = (0, P.c)(3),
    t = ne(`1380537759`),
    n;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = []), (e[0] = n)) : (n = e[0]),
    (0, F.useEffect)(j, n));
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = t ? (0, I.jsx)(xe, {}) : (0, I.jsx)(N, {})), (e[1] = t), (e[2] = r)),
    r
  );
}
function j() {
  let e = !0;
  return (
    queueMicrotask(() => {
      e && r.dispatchMessage(`global-dictation-renderer-ready`, {});
    }),
    () => {
      e = !1;
    }
  );
}
function xe() {
  let e = (0, P.c)(14),
    t = ne(le),
    [n, i] = (0, F.useState)(null),
    [a, o] = (0, F.useState)(!1),
    s = (0, F.useRef)(null),
    c;
  e[0] === n
    ? (c = e[1])
    : ((c = () => {
        n != null && r.dispatchMessage(`global-dictation-close`, { sessionId: n });
      }),
      (e[0] = n),
      (e[1] = c));
  let ee = c,
    l;
  (e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = {
        includeInteractiveRegion: !0,
        interactiveRegionRef: s,
        onInteractiveChange: M,
        publishInitialNonInteractive: !1,
      }),
      (e[2] = l))
    : (l = e[2]),
    ye(l));
  let u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = m(
        k.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary`,
      )),
      (e[3] = u))
    : (u = e[3]);
  let d = a ? `size-10` : `size-0`,
    f;
  e[4] === d
    ? (f = e[5])
    : ((f = m(`flex items-center justify-center`, d)), (e[4] = d), (e[5] = f));
  let p;
  e[6] === t
    ? (p = e[7])
    : ((p = (0, I.jsx)(_e, {
        cleanupEnabled: !1,
        streamingEnabled: t,
        onActiveSessionIdChange: i,
        registerNativePetRenderer: !1,
        onVisibilityChange: o,
      })),
      (e[6] = t),
      (e[7] = p));
  let h;
  e[8] !== f || e[9] !== p
    ? ((h = (0, I.jsx)(`div`, {
        ref: s,
        "data-testid": `global-dictation-hitbox`,
        className: f,
        children: p,
      })),
      (e[8] = f),
      (e[9] = p),
      (e[10] = h))
    : (h = e[10]);
  let g;
  return (
    e[11] !== ee || e[12] !== h
      ? ((g = (0, I.jsx)(`main`, {
          className: u,
          children: (0, I.jsx)(we, { onClose: ee, children: h }),
        })),
        (e[11] = ee),
        (e[12] = h),
        (e[13] = g))
      : (g = e[13]),
    g
  );
}
function M(e) {
  r.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function N() {
  let e = (0, P.c)(94),
    t = re(),
    n = ne(le),
    [i, a] = (0, F.useState)(null),
    [s, ee] = (0, F.useState)(null),
    [l, u] = (0, F.useState)(null),
    [d, f] = (0, F.useState)(!1),
    [g, te] = (0, F.useState)(0),
    [_, v] = (0, F.useState)(`initializing`),
    [b, x] = (0, F.useState)(null),
    [ie, S] = (0, F.useState)(!1),
    oe = (0, F.useRef)(null),
    C;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { variant: `compact` }), (e[0] = C))
    : (C = e[0]);
  let {
      waveformCanvasRef: ue,
      startWaveformCapture: me,
      stopWaveformCapture: ge,
      resetWaveformDisplay: _e,
    } = ce(C),
    ve;
  e[1] === t
    ? (ve = e[2])
    : ((ve = (e, n) => {
        let r = de(t, e, n);
        (x(r.message), S(r.canRetry), v(`error`));
      }),
      (e[1] = t),
      (e[2] = ve));
  let w = ve,
    T;
  e[3] !== i || e[4] !== w
    ? ((T = () => {
        i != null &&
          (v(`transcribing`),
          x(null),
          S(!1),
          pe(i, !1).catch((e) => {
            w(`transcription`, e);
          }));
      }),
      (e[3] = i),
      (e[4] = w),
      (e[5] = T))
    : (T = e[5]);
  let E = T,
    D;
  e[6] === i
    ? (D = e[7])
    : ((D = () => {
        i != null &&
          (r.dispatchMessage(`global-dictation-dismiss`, { sessionId: i }),
          a(null),
          x(null),
          S(!1));
      }),
      (e[6] = i),
      (e[7] = D));
  let O = D,
    A;
  e[8] !== i || e[9] !== _
    ? ((A = () => {
        (i == null && _ !== `idle`) ||
          r.dispatchMessage(`global-dictation-close`, { sessionId: i });
      }),
      (e[8] = i),
      (e[9] = _),
      (e[10] = A))
    : (A = e[10]);
  let be = A,
    j;
  e[11] === _
    ? (j = e[12])
    : ((j = (e) => {
        _ === `idle` && f(e);
      }),
      (e[11] = _),
      (e[12] = j));
  let xe = j,
    M;
  (e[13] === g
    ? (M = e[14])
    : ((M = {
        activationNonce: g,
        includeInteractiveRegion: !0,
        interactiveRegionRef: oe,
        onInteractiveChange: Ce,
        publishInitialNonInteractive: !1,
      }),
      (e[13] = g),
      (e[14] = M)),
    ye(M));
  let N, Ee;
  (e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        (a(null),
          ee(e.configuredHotkey),
          u(e.configuredToggleHotkey),
          f(!1),
          x(null),
          S(!1),
          te(Se),
          v(
            e.configuredHotkey != null || e.configuredToggleHotkey != null
              ? `idle`
              : `initializing`,
          ));
      }),
      (Ee = []),
      (e[15] = N),
      (e[16] = Ee))
    : ((N = e[15]), (Ee = e[16])),
    o(`global-dictation-idle`, N, Ee));
  let De;
  e[17] !== n || e[18] !== _e || e[19] !== w || e[20] !== me || e[21] !== ge
    ? ((De = (e) => {
        (a(e.sessionId),
          f(!1),
          x(null),
          S(!1),
          v(`listening`),
          fe(
            e.sessionId,
            {
              startWaveformCapture: me,
              stopWaveformCapture: ge,
              resetWaveformDisplay: _e,
              onTranscriptionFailed: (e) => {
                w(`transcription`, e);
              },
            },
            !1,
            n,
          ).catch((e) => {
            w(`start`, e);
          }));
      }),
      (e[17] = n),
      (e[18] = _e),
      (e[19] = w),
      (e[20] = me),
      (e[21] = ge),
      (e[22] = De))
    : (De = e[22]);
  let Oe;
  (e[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((Oe = []), (e[23] = Oe)) : (Oe = e[23]),
    o(`global-dictation-start`, De, Oe));
  let ke, Ae;
  (e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (e) => {
        (v(`transcribing`), x(null), S(!1), he(e.sessionId));
      }),
      (Ae = []),
      (e[24] = ke),
      (e[25] = Ae))
    : ((ke = e[24]), (Ae = e[25])),
    o(`global-dictation-stop`, ke, Ae));
  let je = _ === `error` && `p-1`,
    L;
  e[26] === je
    ? (L = e[27])
    : ((L = m(
        k.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary`,
        je,
      )),
      (e[26] = je),
      (e[27] = L));
  let Me = _ !== `idle`,
    Ne = _ === `idle` && d,
    Pe;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = m(k.darkTheme, `!rounded-full px-4 py-2`)), (e[28] = Pe))
    : (Pe = e[28]);
  let R;
  e[29] !== s || e[30] !== l
    ? ((R = (0, I.jsx)(Te, { configuredHotkey: s, configuredToggleHotkey: l })),
      (e[29] = s),
      (e[30] = l),
      (e[31] = R))
    : (R = e[31]);
  let Fe = _ === `error` ? `w-fit` : `h-[30px] w-[120px]`,
    z;
  e[32] === Fe
    ? (z = e[33])
    : ((z = m(`group flex items-end justify-center`, Fe)), (e[32] = Fe), (e[33] = z));
  let B;
  e[34] !== t || e[35] !== _
    ? ((B =
        _ === `initializing`
          ? void 0
          : _ === `idle`
            ? t.formatMessage({
                id: `globalDictation.readyAriaLabel`,
                defaultMessage: `Global dictation ready`,
                description: `Accessible label for the persistent global dictation reminder`,
              })
            : t.formatMessage({
                id: `globalDictation.waveformAriaLabel`,
                defaultMessage: `Global dictation waveform`,
                description: `Accessible label for the minimal global dictation waveform`,
              })),
      (e[34] = t),
      (e[35] = _),
      (e[36] = B))
    : (B = e[36]);
  let Ie = _ === `error` ? `draggable` : `no-drag`,
    Le = (_ === `initializing` || _ === `idle`) && k.miniSurface,
    Re =
      (_ === `initializing` || _ === `idle`) &&
      `h-2 w-10 justify-center rounded-[4px] border-token-text-secondary/70 px-0`,
    ze =
      _ === `idle` &&
      `group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-token-border-default/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-token-border-default/80`,
    Be = _ !== `initializing` && _ !== `idle` && k.expandedSurface,
    Ve = _ !== `initializing` && _ !== `idle` && `border-token-border-default/80`,
    He =
      (_ === `listening` || _ === `transcribing`) &&
      `h-[30px] w-[72px] justify-center rounded-full px-2`,
    Ue = _ === `error` && `h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2`,
    V;
  e[37] !== Ie ||
  e[38] !== Le ||
  e[39] !== Re ||
  e[40] !== ze ||
  e[41] !== Be ||
  e[42] !== Ve ||
  e[43] !== He ||
  e[44] !== Ue
    ? ((V = m(
        `flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-100 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none`,
        Ie,
        Le,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
      )),
      (e[37] = Ie),
      (e[38] = Le),
      (e[39] = Re),
      (e[40] = ze),
      (e[41] = Be),
      (e[42] = Ve),
      (e[43] = He),
      (e[44] = Ue),
      (e[45] = V))
    : (V = e[45]);
  let H;
  e[46] === _
    ? (H = e[47])
    : ((H =
        _ === `idle`
          ? (0, I.jsx)(`span`, {
              className: `relative flex h-full w-full items-center justify-center text-token-text-secondary`,
              children: (0, I.jsx)(se, {
                className: `icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-100 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none`,
              }),
            })
          : null),
      (e[46] = _),
      (e[47] = H));
  let U;
  e[48] === _
    ? (U = e[49])
    : ((U =
        _ === `transcribing`
          ? (0, I.jsx)(c, { className: `icon-xs text-token-text-secondary` })
          : null),
      (e[48] = _),
      (e[49] = U));
  let W;
  e[50] !== ie || e[51] !== b || e[52] !== O || e[53] !== E || e[54] !== t || e[55] !== _
    ? ((W =
        _ === `error`
          ? (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(`span`, {
                  className: `max-w-[252px] min-w-0 truncate text-xs font-medium text-token-error-foreground`,
                  children: b,
                }),
                ie
                  ? (0, I.jsx)(`button`, {
                      type: `button`,
                      className: `no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none`,
                      "aria-label": t.formatMessage({
                        id: `globalDictation.retry`,
                        defaultMessage: `Retry`,
                        description: `Accessible label for the button that retries global dictation transcription`,
                      }),
                      onClick: E,
                      children: (0, I.jsx)(ae, { className: `icon-2xs` }),
                    })
                  : null,
                (0, I.jsx)(`button`, {
                  type: `button`,
                  className: `no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none`,
                  "aria-label": t.formatMessage({
                    id: `globalDictation.dismissError`,
                    defaultMessage: `Dismiss`,
                    description: `Accessible label for the button that dismisses the global dictation error window`,
                  }),
                  onClick: O,
                  children: (0, I.jsx)(h, { className: `icon-2xs` }),
                }),
              ],
            })
          : null),
      (e[50] = ie),
      (e[51] = b),
      (e[52] = O),
      (e[53] = E),
      (e[54] = t),
      (e[55] = _),
      (e[56] = W))
    : (W = e[56]);
  let G;
  e[57] !== _ || e[58] !== ue
    ? ((G =
        _ === `listening`
          ? (0, I.jsx)(`canvas`, {
              ref: ue,
              className: `h-4 min-w-0 flex-1 text-token-text-primary`,
              "aria-hidden": `true`,
            })
          : null),
      (e[57] = _),
      (e[58] = ue),
      (e[59] = G))
    : (G = e[59]);
  let K;
  e[60] === _
    ? (K = e[61])
    : ((K =
        _ === `idle`
          ? (0, I.jsx)(y, {
              id: `globalDictation.ready`,
              defaultMessage: `Dictation ready`,
              description: `Status text for the persistent global dictation reminder`,
            })
          : null),
      (e[60] = _),
      (e[61] = K));
  let q;
  e[62] === _
    ? (q = e[63])
    : ((q =
        _ === `listening`
          ? (0, I.jsx)(y, {
              id: `globalDictation.listening`,
              defaultMessage: `Listening`,
              description: `Status text shown in the global dictation window while recording`,
            })
          : null),
      (e[62] = _),
      (e[63] = q));
  let J;
  e[64] === _
    ? (J = e[65])
    : ((J =
        _ === `transcribing`
          ? (0, I.jsx)(y, {
              id: `globalDictation.transcribing`,
              defaultMessage: `Transcribing…`,
              description: `Status text shown in the global dictation window while audio is being transcribed`,
            })
          : null),
      (e[64] = _),
      (e[65] = J));
  let We = _ === `error` ? b : null,
    Y;
  e[66] !== K || e[67] !== q || e[68] !== J || e[69] !== We
    ? ((Y = (0, I.jsxs)(`span`, { className: `sr-only`, children: [K, q, J, We] })),
      (e[66] = K),
      (e[67] = q),
      (e[68] = J),
      (e[69] = We),
      (e[70] = Y))
    : (Y = e[70]);
  let X;
  e[71] !== B ||
  e[72] !== V ||
  e[73] !== H ||
  e[74] !== U ||
  e[75] !== W ||
  e[76] !== G ||
  e[77] !== Y
    ? ((X = (0, I.jsxs)(`section`, {
        "aria-live": `polite`,
        "aria-label": B,
        className: V,
        children: [H, U, W, G, Y],
      })),
      (e[71] = B),
      (e[72] = V),
      (e[73] = H),
      (e[74] = U),
      (e[75] = W),
      (e[76] = G),
      (e[77] = Y),
      (e[78] = X))
    : (X = e[78]);
  let Z;
  e[79] !== z || e[80] !== X
    ? ((Z = (0, I.jsx)(`div`, {
        ref: oe,
        "data-testid": `global-dictation-hitbox`,
        className: z,
        children: X,
      })),
      (e[79] = z),
      (e[80] = X),
      (e[81] = Z))
    : (Z = e[81]);
  let Q;
  e[82] !== xe || e[83] !== Me || e[84] !== Ne || e[85] !== R || e[86] !== Z
    ? ((Q = (0, I.jsx)(p, {
        delayDuration: 250,
        disableHoverOpen: Me,
        disablePadding: !0,
        open: Ne,
        sideOffset: 10,
        tooltipClassName: Pe,
        tooltipMaxWidth: `36rem`,
        tooltipContent: R,
        onOpenChange: xe,
        children: Z,
      })),
      (e[82] = xe),
      (e[83] = Me),
      (e[84] = Ne),
      (e[85] = R),
      (e[86] = Z),
      (e[87] = Q))
    : (Q = e[87]);
  let $;
  e[88] !== be || e[89] !== Q
    ? (($ = (0, I.jsx)(we, { onClose: be, children: Q })), (e[88] = be), (e[89] = Q), (e[90] = $))
    : ($ = e[90]);
  let Ge;
  return (
    e[91] !== L || e[92] !== $
      ? ((Ge = (0, I.jsx)(`main`, { className: L, children: $ })),
        (e[91] = L),
        (e[92] = $),
        (e[93] = Ge))
      : (Ge = e[93]),
    Ge
  );
}
function Se(e) {
  return e + 1;
}
function Ce(e) {
  r.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function we(e) {
  let t = (0, P.c)(6),
    { children: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = x({
        id: `globalDictation.closeWindow`,
        defaultMessage: `Close window`,
        description: `Context menu item that closes the global dictation floating window`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = [{ id: `close-window`, message: i, onSelect: r }]), (t[1] = r), (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, I.jsx)(te, { items: a, children: n })), (t[3] = n), (t[4] = a), (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Te(e) {
  let t = (0, P.c)(19),
    { configuredHotkey: n, configuredToggleHotkey: r } = e;
  if (n != null && r != null) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = w(n)), (t[0] = n), (t[1] = e));
    let i;
    t[2] === e
      ? (i = t[3])
      : ((i = (0, I.jsx)(l, { keysLabel: e }, `hold`)), (t[2] = e), (t[3] = i));
    let a;
    t[4] === r ? (a = t[5]) : ((a = w(r)), (t[4] = r), (t[5] = a));
    let o;
    t[6] === a
      ? (o = t[7])
      : ((o = (0, I.jsx)(l, { keysLabel: a }, `toggle`)), (t[6] = a), (t[7] = o));
    let s;
    return (
      t[8] !== i || t[9] !== o
        ? ((s = (0, I.jsx)(y, {
            id: `globalDictation.readyTooltip.holdAndToggle`,
            defaultMessage: `Hold {holdShortcut} or press {toggleShortcut} to dictate`,
            description: `Tooltip explaining both global dictation shortcuts`,
            values: { holdShortcut: i, toggleShortcut: o },
          })),
          (t[8] = i),
          (t[9] = o),
          (t[10] = s))
        : (s = t[10]),
      s
    );
  }
  if (n != null) {
    let e;
    t[11] === n ? (e = t[12]) : ((e = w(n)), (t[11] = n), (t[12] = e));
    let r;
    return (
      t[13] === e
        ? (r = t[14])
        : ((r = (0, I.jsx)(y, {
            id: `globalDictation.readyTooltip.hold`,
            defaultMessage: `Hold {shortcut} to dictate`,
            description: `Tooltip explaining the hold-to-dictate shortcut`,
            values: { shortcut: (0, I.jsx)(l, { keysLabel: e }, `hold`) },
          })),
          (t[13] = e),
          (t[14] = r)),
      r
    );
  }
  if (r != null) {
    let e;
    t[15] === r ? (e = t[16]) : ((e = w(r)), (t[15] = r), (t[16] = e));
    let n;
    return (
      t[17] === e
        ? (n = t[18])
        : ((n = (0, I.jsx)(y, {
            id: `globalDictation.readyTooltip.toggle`,
            defaultMessage: `Press {shortcut} to dictate`,
            description: `Tooltip explaining the toggle dictation shortcut`,
            values: { shortcut: (0, I.jsx)(l, { keysLabel: e }, `toggle`) },
          })),
          (t[17] = e),
          (t[18] = n)),
      n
    );
  }
  return null;
}
var P, F, I;
e(() => {
  ((P = n()),
    u(),
    (F = t(i(), 1)),
    v(),
    f(),
    _(),
    ee(),
    g(),
    oe(),
    T(),
    ie(),
    S(),
    d(),
    ve(),
    s(),
    C(),
    b(),
    ue(),
    me(),
    ge(),
    A(),
    (I = a()));
})();
export { be as GlobalDictationPage };
//# sourceMappingURL=global-dictation-page.js.map
