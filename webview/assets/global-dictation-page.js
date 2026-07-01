import { n as e, s as t } from "./rolldown-runtime.js";
import {
  BP as n,
  CA as r,
  GP as i,
  HP as a,
  JN as o,
  Mj as s,
  Pj as c,
  Qj as l,
  RV as u,
  SA as d,
  TP as f,
  YN as p,
  eM as m,
  hN as h,
  iM as g,
  jV as _,
  mN as ee,
  qN as te,
  qP as ne,
  rM as v,
  wP as y,
  zV as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  DD as re,
  ED as x,
  ID as ie,
  Iv as S,
  LD as ae,
  Pv as C,
  cO as oe,
  iO as w,
  nO as se,
  rO as ce,
  sO as le,
  tO as ue,
} from "./app-initial~app-main~onboarding-page.js";
import {
  En as de,
  Tn as fe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  a as pe,
  i as me,
  n as he,
  o as ge,
  r as T,
  t as E,
} from "./global-dictation-orb.js";
import { n as _e, t as D } from "./use-floating-window-pointer-interactivity.js";
var O,
  k,
  A,
  j,
  ve = e(() => {
    ((O = `_darkTheme_1xq4w_1`),
      (k = `_miniSurface_1xq4w_15`),
      (A = `_expandedSurface_1xq4w_22`),
      (j = { darkTheme: O, miniSurface: k, expandedSurface: A }));
  });
function ye() {
  let e = (0, P.c)(3),
    t = c(`1380537759`),
    n;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = []), (e[0] = n)) : (n = e[0]),
    (0, F.useEffect)(be, n));
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = t ? (0, I.jsx)(xe, {}) : (0, I.jsx)(N, {})), (e[1] = t), (e[2] = r)),
    r
  );
}
function be() {
  let e = !0;
  return (
    queueMicrotask(() => {
      e && o.dispatchMessage(`global-dictation-renderer-ready`, {});
    }),
    () => {
      e = !1;
    }
  );
}
function xe() {
  let e = (0, P.c)(14),
    t = c(ie),
    [n, r] = (0, F.useState)(null),
    [i, a] = (0, F.useState)(!1),
    s = (0, F.useRef)(null),
    l;
  e[0] === n
    ? (l = e[1])
    : ((l = () => {
        n != null && o.dispatchMessage(`global-dictation-close`, { sessionId: n });
      }),
      (e[0] = n),
      (e[1] = l));
  let u = l,
    d;
  (e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = {
        includeInteractiveRegion: !0,
        interactiveRegionRef: s,
        onInteractiveChange: M,
        publishInitialNonInteractive: !1,
      }),
      (e[2] = d))
    : (d = e[2]),
    _e(d));
  let f;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = y(
        j.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary`,
      )),
      (e[3] = f))
    : (f = e[3]);
  let p = i ? `size-10` : `size-0`,
    m;
  e[4] === p
    ? (m = e[5])
    : ((m = y(`flex items-center justify-center`, p)), (e[4] = p), (e[5] = m));
  let h;
  e[6] === t
    ? (h = e[7])
    : ((h = (0, I.jsx)(E, {
        cleanupEnabled: !1,
        streamingEnabled: t,
        onActiveSessionIdChange: r,
        registerNativePetRenderer: !1,
        onVisibilityChange: a,
      })),
      (e[6] = t),
      (e[7] = h));
  let g;
  e[8] !== m || e[9] !== h
    ? ((g = (0, I.jsx)(`div`, {
        ref: s,
        "data-testid": `global-dictation-hitbox`,
        className: m,
        children: h,
      })),
      (e[8] = m),
      (e[9] = h),
      (e[10] = g))
    : (g = e[10]);
  let _;
  return (
    e[11] !== u || e[12] !== g
      ? ((_ = (0, I.jsx)(`main`, {
          className: f,
          children: (0, I.jsx)(we, { onClose: u, children: g }),
        })),
        (e[11] = u),
        (e[12] = g),
        (e[13] = _))
      : (_ = e[13]),
    _
  );
}
function M(e) {
  o.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function N() {
  let e = (0, P.c)(94),
    t = ne(),
    n = c(ie),
    [r, a] = (0, F.useState)(null),
    [s, u] = (0, F.useState)(null),
    [f, m] = (0, F.useState)(null),
    [h, g] = (0, F.useState)(!1),
    [_, te] = (0, F.useState)(0),
    [v, b] = (0, F.useState)(`initializing`),
    [x, S] = (0, F.useState)(null),
    [ae, C] = (0, F.useState)(!1),
    oe = (0, F.useRef)(null),
    w;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { variant: `compact` }), (e[0] = w))
    : (w = e[0]);
  let {
      waveformCanvasRef: se,
      startWaveformCapture: le,
      stopWaveformCapture: de,
      resetWaveformDisplay: he,
    } = re(w),
    T;
  e[1] === t
    ? (T = e[2])
    : ((T = (e, n) => {
        let r = fe(t, e, n);
        (S(r.message), C(r.canRetry), b(`error`));
      }),
      (e[1] = t),
      (e[2] = T));
  let E = T,
    D;
  e[3] !== r || e[4] !== E
    ? ((D = () => {
        r != null &&
          (b(`transcribing`),
          S(null),
          C(!1),
          me(r, !1).catch((e) => {
            E(`transcription`, e);
          }));
      }),
      (e[3] = r),
      (e[4] = E),
      (e[5] = D))
    : (D = e[5]);
  let O = D,
    k;
  e[6] === r
    ? (k = e[7])
    : ((k = () => {
        r != null &&
          (o.dispatchMessage(`global-dictation-dismiss`, { sessionId: r }),
          a(null),
          S(null),
          C(!1));
      }),
      (e[6] = r),
      (e[7] = k));
  let A = k,
    ve;
  e[8] !== r || e[9] !== v
    ? ((ve = () => {
        (r == null && v !== `idle`) ||
          o.dispatchMessage(`global-dictation-close`, { sessionId: r });
      }),
      (e[8] = r),
      (e[9] = v),
      (e[10] = ve))
    : (ve = e[10]);
  let ye = ve,
    be;
  e[11] === v
    ? (be = e[12])
    : ((be = (e) => {
        v === `idle` && g(e);
      }),
      (e[11] = v),
      (e[12] = be));
  let xe = be,
    M;
  (e[13] === _
    ? (M = e[14])
    : ((M = {
        activationNonce: _,
        includeInteractiveRegion: !0,
        interactiveRegionRef: oe,
        onInteractiveChange: Ce,
        publishInitialNonInteractive: !1,
      }),
      (e[13] = _),
      (e[14] = M)),
    _e(M));
  let N, Ee;
  (e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        (a(null),
          u(e.configuredHotkey),
          m(e.configuredToggleHotkey),
          g(!1),
          S(null),
          C(!1),
          te(Se),
          b(
            e.configuredHotkey != null || e.configuredToggleHotkey != null
              ? `idle`
              : `initializing`,
          ));
      }),
      (Ee = []),
      (e[15] = N),
      (e[16] = Ee))
    : ((N = e[15]), (Ee = e[16])),
    p(`global-dictation-idle`, N, Ee));
  let De;
  e[17] !== n || e[18] !== he || e[19] !== E || e[20] !== le || e[21] !== de
    ? ((De = (e) => {
        (a(e.sessionId),
          g(!1),
          S(null),
          C(!1),
          b(`listening`),
          pe(
            e.sessionId,
            {
              startWaveformCapture: le,
              stopWaveformCapture: de,
              resetWaveformDisplay: he,
              onTranscriptionFailed: (e) => {
                E(`transcription`, e);
              },
            },
            !1,
            n,
          ).catch((e) => {
            E(`start`, e);
          }));
      }),
      (e[17] = n),
      (e[18] = he),
      (e[19] = E),
      (e[20] = le),
      (e[21] = de),
      (e[22] = De))
    : (De = e[22]);
  let Oe;
  (e[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((Oe = []), (e[23] = Oe)) : (Oe = e[23]),
    p(`global-dictation-start`, De, Oe));
  let ke, Ae;
  (e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (e) => {
        (b(`transcribing`), S(null), C(!1), ge(e.sessionId));
      }),
      (Ae = []),
      (e[24] = ke),
      (e[25] = Ae))
    : ((ke = e[24]), (Ae = e[25])),
    p(`global-dictation-stop`, ke, Ae));
  let je = v === `error` && `p-1`,
    L;
  e[26] === je
    ? (L = e[27])
    : ((L = y(
        j.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary`,
        je,
      )),
      (e[26] = je),
      (e[27] = L));
  let Me = v !== `idle`,
    Ne = v === `idle` && h,
    Pe;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = y(j.darkTheme, `!rounded-full px-4 py-2`)), (e[28] = Pe))
    : (Pe = e[28]);
  let R;
  e[29] !== s || e[30] !== f
    ? ((R = (0, I.jsx)(Te, { configuredHotkey: s, configuredToggleHotkey: f })),
      (e[29] = s),
      (e[30] = f),
      (e[31] = R))
    : (R = e[31]);
  let Fe = v === `error` ? `w-fit` : `h-[30px] w-[120px]`,
    z;
  e[32] === Fe
    ? (z = e[33])
    : ((z = y(`group flex items-end justify-center`, Fe)), (e[32] = Fe), (e[33] = z));
  let B;
  e[34] !== t || e[35] !== v
    ? ((B =
        v === `initializing`
          ? void 0
          : v === `idle`
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
      (e[35] = v),
      (e[36] = B))
    : (B = e[36]);
  let Ie = v === `error` ? `draggable` : `no-drag`,
    Le = (v === `initializing` || v === `idle`) && j.miniSurface,
    Re =
      (v === `initializing` || v === `idle`) &&
      `h-2 w-10 justify-center rounded-[4px] border-token-text-secondary/70 px-0`,
    ze =
      v === `idle` &&
      `group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-token-border-default/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-token-border-default/80`,
    Be = v !== `initializing` && v !== `idle` && j.expandedSurface,
    Ve = v !== `initializing` && v !== `idle` && `border-token-border-default/80`,
    He =
      (v === `listening` || v === `transcribing`) &&
      `h-[30px] w-[72px] justify-center rounded-full px-2`,
    Ue = v === `error` && `h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2`,
    V;
  e[37] !== Ie ||
  e[38] !== Le ||
  e[39] !== Re ||
  e[40] !== ze ||
  e[41] !== Be ||
  e[42] !== Ve ||
  e[43] !== He ||
  e[44] !== Ue
    ? ((V = y(
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
  e[46] === v
    ? (H = e[47])
    : ((H =
        v === `idle`
          ? (0, I.jsx)(`span`, {
              className: `relative flex h-full w-full items-center justify-center text-token-text-secondary`,
              children: (0, I.jsx)(ce, {
                className: `icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-100 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none`,
              }),
            })
          : null),
      (e[46] = v),
      (e[47] = H));
  let U;
  e[48] === v
    ? (U = e[49])
    : ((U =
        v === `transcribing`
          ? (0, I.jsx)(ee, { className: `icon-xs text-token-text-secondary` })
          : null),
      (e[48] = v),
      (e[49] = U));
  let W;
  e[50] !== ae || e[51] !== x || e[52] !== A || e[53] !== O || e[54] !== t || e[55] !== v
    ? ((W =
        v === `error`
          ? (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(`span`, {
                  className: `max-w-[252px] min-w-0 truncate text-xs font-medium text-token-error-foreground`,
                  children: x,
                }),
                ae
                  ? (0, I.jsx)(`button`, {
                      type: `button`,
                      className: `no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none`,
                      "aria-label": t.formatMessage({
                        id: `globalDictation.retry`,
                        defaultMessage: `Retry`,
                        description: `Accessible label for the button that retries global dictation transcription`,
                      }),
                      onClick: O,
                      children: (0, I.jsx)(ue, { className: `icon-2xs` }),
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
                  onClick: A,
                  children: (0, I.jsx)(d, { className: `icon-2xs` }),
                }),
              ],
            })
          : null),
      (e[50] = ae),
      (e[51] = x),
      (e[52] = A),
      (e[53] = O),
      (e[54] = t),
      (e[55] = v),
      (e[56] = W))
    : (W = e[56]);
  let G;
  e[57] !== v || e[58] !== se
    ? ((G =
        v === `listening`
          ? (0, I.jsx)(`canvas`, {
              ref: se,
              className: `h-4 min-w-0 flex-1 text-token-text-primary`,
              "aria-hidden": `true`,
            })
          : null),
      (e[57] = v),
      (e[58] = se),
      (e[59] = G))
    : (G = e[59]);
  let K;
  e[60] === v
    ? (K = e[61])
    : ((K =
        v === `idle`
          ? (0, I.jsx)(i, {
              id: `globalDictation.ready`,
              defaultMessage: `Dictation ready`,
              description: `Status text for the persistent global dictation reminder`,
            })
          : null),
      (e[60] = v),
      (e[61] = K));
  let q;
  e[62] === v
    ? (q = e[63])
    : ((q =
        v === `listening`
          ? (0, I.jsx)(i, {
              id: `globalDictation.listening`,
              defaultMessage: `Listening`,
              description: `Status text shown in the global dictation window while recording`,
            })
          : null),
      (e[62] = v),
      (e[63] = q));
  let J;
  e[64] === v
    ? (J = e[65])
    : ((J =
        v === `transcribing`
          ? (0, I.jsx)(i, {
              id: `globalDictation.transcribing`,
              defaultMessage: `Transcribing…`,
              description: `Status text shown in the global dictation window while audio is being transcribed`,
            })
          : null),
      (e[64] = v),
      (e[65] = J));
  let We = v === `error` ? x : null,
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
    ? ((Q = (0, I.jsx)(l, {
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
  e[88] !== ye || e[89] !== Q
    ? (($ = (0, I.jsx)(we, { onClose: ye, children: Q })), (e[88] = ye), (e[89] = Q), (e[90] = $))
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
  o.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function we(e) {
  let t = (0, P.c)(6),
    { children: r, onClose: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = n({
        id: `globalDictation.closeWindow`,
        defaultMessage: `Close window`,
        description: `Context menu item that closes the global dictation floating window`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = [{ id: `close-window`, message: a, onSelect: i }]), (t[1] = i), (t[2] = o));
  let s;
  return (
    t[3] !== r || t[4] !== o
      ? ((s = (0, I.jsx)(le, { items: o, children: r })), (t[3] = r), (t[4] = o), (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Te(e) {
  let t = (0, P.c)(19),
    { configuredHotkey: n, configuredToggleHotkey: r } = e;
  if (n != null && r != null) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = C(n)), (t[0] = n), (t[1] = e));
    let a;
    t[2] === e
      ? (a = t[3])
      : ((a = (0, I.jsx)(v, { keysLabel: e }, `hold`)), (t[2] = e), (t[3] = a));
    let o;
    t[4] === r ? (o = t[5]) : ((o = C(r)), (t[4] = r), (t[5] = o));
    let s;
    t[6] === o
      ? (s = t[7])
      : ((s = (0, I.jsx)(v, { keysLabel: o }, `toggle`)), (t[6] = o), (t[7] = s));
    let c;
    return (
      t[8] !== a || t[9] !== s
        ? ((c = (0, I.jsx)(i, {
            id: `globalDictation.readyTooltip.holdAndToggle`,
            defaultMessage: `Hold {holdShortcut} or press {toggleShortcut} to dictate`,
            description: `Tooltip explaining both global dictation shortcuts`,
            values: { holdShortcut: a, toggleShortcut: s },
          })),
          (t[8] = a),
          (t[9] = s),
          (t[10] = c))
        : (c = t[10]),
      c
    );
  }
  if (n != null) {
    let e;
    t[11] === n ? (e = t[12]) : ((e = C(n)), (t[11] = n), (t[12] = e));
    let r;
    return (
      t[13] === e
        ? (r = t[14])
        : ((r = (0, I.jsx)(i, {
            id: `globalDictation.readyTooltip.hold`,
            defaultMessage: `Hold {shortcut} to dictate`,
            description: `Tooltip explaining the hold-to-dictate shortcut`,
            values: { shortcut: (0, I.jsx)(v, { keysLabel: e }, `hold`) },
          })),
          (t[13] = e),
          (t[14] = r)),
      r
    );
  }
  if (r != null) {
    let e;
    t[15] === r ? (e = t[16]) : ((e = C(r)), (t[15] = r), (t[16] = e));
    let n;
    return (
      t[17] === e
        ? (n = t[18])
        : ((n = (0, I.jsx)(i, {
            id: `globalDictation.readyTooltip.toggle`,
            defaultMessage: `Press {shortcut} to dictate`,
            description: `Tooltip explaining the toggle dictation shortcut`,
            values: { shortcut: (0, I.jsx)(v, { keysLabel: e }, `toggle`) },
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
  ((P = u()),
    f(),
    (F = t(b(), 1)),
    a(),
    oe(),
    g(),
    h(),
    m(),
    x(),
    D(),
    w(),
    se(),
    r(),
    S(),
    te(),
    ae(),
    s(),
    de(),
    he(),
    T(),
    ve(),
    (I = _()));
})();
export { ye as GlobalDictationPage };
//# sourceMappingURL=global-dictation-page.js.map
