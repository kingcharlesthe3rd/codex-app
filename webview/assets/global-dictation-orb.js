import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AN as n,
  BP as r,
  BV as i,
  JV as a,
  MA as o,
  NA as s,
  UA as c,
  VP as l,
  WA as u,
  aM as d,
  cP as f,
  iF as p,
  kN as m,
  lF as h,
  lP as g,
  oM as _,
  qV as v,
  sF as y,
  uP as b,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Cm as x,
  Dm as S,
  Em as C,
  Om as w,
  Sm as T,
  Tm as E,
  bm as D,
  km as O,
  wm as k,
  xm as A,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  ci as j,
  li as M,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
async function N(e, t, n, r) {
  if (H?.sessionId === e || W === e) return;
  ((U = null), H != null && P(H.sessionId));
  let i = null;
  try {
    ((W = e),
      await c.systemPermissions?.requestMicrophoneAccess().catch(() => {}),
      (i = await C({ channelCount: 1 })),
      t.startWaveformCapture(i));
    let a = new MediaRecorder(i),
      o = {
        sessionId: e,
        recorder: a,
        stream: i,
        chunks: [],
        startedAtMs: Date.now(),
        isStopping: !1,
        cleanupEnabled: n,
        pendingStreamingSession: null,
        streamingSession: null,
        controls: t,
      };
    if (
      (a.addEventListener(`dataavailable`, (e) => {
        e.data.size > 0 && o.chunks.push(e.data);
      }),
      a.start(),
      (H = o),
      W === e && (W = null),
      G === e && ((G = null), P(e)),
      r && !o.isStopping)
    ) {
      let e = new w();
      o.pendingStreamingSession = e;
      try {
        if ((await e.start(i), o.pendingStreamingSession !== e)) return;
        ((o.pendingStreamingSession = null),
          H === o && !o.isStopping ? (o.streamingSession = e) : e.close());
      } catch {
        o.pendingStreamingSession === e && ((o.pendingStreamingSession = null), e.close());
      }
    }
  } catch (n) {
    throw (
      i?.getTracks().forEach((e) => {
        e.stop();
      }),
      t.stopWaveformCapture(),
      t.resetWaveformDisplay(),
      W === e && (W = null),
      G === e && (G = null),
      g.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `recording` }),
      n
    );
  }
}
function P(e) {
  let t = H;
  if (t == null || t.sessionId !== e) {
    G = e;
    return;
  }
  t.isStopping ||
    ((t.isStopping = !0),
    t.pendingStreamingSession?.close(),
    (t.pendingStreamingSession = null),
    g.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
    F(t));
}
async function F(e) {
  let t = null;
  try {
    try {
      await B(e.recorder);
    } finally {
      (e.stream.getTracks().forEach((e) => {
        e.stop();
      }),
        e.controls.stopWaveformCapture(),
        e.controls.resetWaveformDisplay(),
        H === e && (H = null));
    }
    if (e.chunks.length === 0 || Date.now() - e.startedAtMs < V) {
      (e.streamingSession?.close(),
        g.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: `` }));
      return;
    }
    ((t = {
      sessionId: e.sessionId,
      audio: new Blob(e.chunks),
      onTranscriptionFailed: e.controls.onTranscriptionFailed,
    }),
      await L(t, e.cleanupEnabled, e.streamingSession));
  } catch (n) {
    z(e.sessionId, e.controls.onTranscriptionFailed, n, t);
  }
}
async function I(e, t) {
  if (K === e) return;
  let n = U;
  if (n == null || n.sessionId !== e) throw Error(`No dictation audio to retry`);
  K = e;
  try {
    await L(n, t);
  } catch (t) {
    throw (z(e, n.onTranscriptionFailed, t, n), t);
  } finally {
    K === e && (K = null);
  }
}
async function L(e, t, n = null) {
  let r = await E({
    transcript: n == null ? await x(e.audio) : await R(n, e.audio),
    cleanupEnabled: t,
  });
  (U === e && (U = null),
    g.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: r }));
}
async function R(e, t) {
  try {
    let t = await e.finish();
    if (t.trim().length > 0) return t;
  } catch {}
  return x(t);
}
function z(e, t, n, r) {
  ((U = r),
    t(n),
    g.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `transcription` }));
}
function B(e) {
  return e.state === `inactive`
    ? Promise.resolve()
    : new Promise((t) => {
        (e.addEventListener(
          `stop`,
          () => {
            t();
          },
          { once: !0 },
        ),
          e.stop());
      });
}
var V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (f(),
      u(),
      O(),
      S(),
      k(),
      T(),
      (V = 250),
      (H = null),
      (U = null),
      (W = null),
      (G = null),
      (K = null));
  }),
  J,
  Y,
  X = e(() => {
    ((J = `_recordingOrb_1csnm_1`), (Y = { recordingOrb: J }));
  });
function ee(e) {
  let t = (0, Z.c)(39),
    {
      cleanupEnabled: n,
      streamingEnabled: r,
      onActiveSessionIdChange: i,
      registerNativePetRenderer: a,
      onVisibilityChange: o,
    } = e,
    s = a === void 0 ? !0 : a,
    c = h(),
    [l, u] = (0, Q.useState)(null),
    [d, f] = (0, Q.useState)(`idle`),
    [p, m] = (0, Q.useState)(null),
    [_, v] = (0, Q.useState)(!1),
    y = (0, Q.useRef)(null),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { variant: `orb` }), (t[0] = x))
    : (x = t[0]);
  let {
      waveformCanvasRef: S,
      startWaveformCapture: C,
      stopWaveformCapture: w,
      resetWaveformDisplay: T,
    } = A(x),
    E;
  t[1] === c
    ? (E = t[2])
    : ((E = (e, t) => {
        let n = j(c, e, t);
        (m(n.message), v(n.canRetry), f(`error`));
      }),
      (t[1] = c),
      (t[2] = E));
  let D = E,
    O;
  t[3] !== l || t[4] !== n || t[5] !== D
    ? ((O = () => {
        l != null &&
          (m(null),
          v(!1),
          f(`transcribing`),
          I(l, n).catch((e) => {
            D(`transcription`, e);
          }));
      }),
      (t[3] = l),
      (t[4] = n),
      (t[5] = D),
      (t[6] = O))
    : (O = t[6]);
  let k = O,
    M;
  t[7] !== i || t[8] !== o
    ? ((M = () => {
        ((y.current = null), u(null), i?.(null), m(null), v(!1), f(`idle`), o?.(!1));
      }),
      (t[7] = i),
      (t[8] = o),
      (t[9] = M))
    : (M = t[9]);
  let F;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = []), (t[10] = F)) : (F = t[10]),
    b(`global-dictation-idle`, M, F));
  let L;
  t[11] !== n ||
  t[12] !== i ||
  t[13] !== o ||
  t[14] !== T ||
  t[15] !== D ||
  t[16] !== C ||
  t[17] !== w ||
  t[18] !== r
    ? ((L = (e) => {
        ((y.current = e.sessionId),
          u(e.sessionId),
          i?.(e.sessionId),
          m(null),
          v(!1),
          f(`listening`),
          o?.(!0),
          N(
            e.sessionId,
            {
              startWaveformCapture: C,
              stopWaveformCapture: w,
              resetWaveformDisplay: T,
              onTranscriptionFailed: (e) => {
                D(`transcription`, e);
              },
            },
            n,
            r,
          ).catch((e) => {
            D(`start`, e);
          }));
      }),
      (t[11] = n),
      (t[12] = i),
      (t[13] = o),
      (t[14] = T),
      (t[15] = D),
      (t[16] = C),
      (t[17] = w),
      (t[18] = r),
      (t[19] = L))
    : (L = t[19]);
  let R;
  (t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = []), (t[20] = R)) : (R = t[20]),
    b(`global-dictation-start`, L, R));
  let z, B;
  (t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (m(null), v(!1), f(`transcribing`), P(e.sessionId));
      }),
      (z = []),
      (t[21] = z),
      (t[22] = B))
    : ((z = t[21]), (B = t[22])),
    b(`global-dictation-stop`, B, z));
  let V, H;
  (t[23] !== i || t[24] !== o || t[25] !== s
    ? ((V = () => {
        let e = !0;
        return (
          s &&
            queueMicrotask(() => {
              e && g.dispatchMessage(`global-dictation-pet-renderer-ready`, { ready: !0 });
            }),
          () => {
            e = !1;
            let t = y.current;
            (t != null && P(t),
              i?.(null),
              o?.(!1),
              s && g.dispatchMessage(`global-dictation-pet-renderer-ready`, { ready: !1 }));
          }
        );
      }),
      (H = [i, o, s]),
      (t[23] = i),
      (t[24] = o),
      (t[25] = s),
      (t[26] = V),
      (t[27] = H))
    : ((V = t[26]), (H = t[27])),
    (0, Q.useEffect)(V, H));
  let U = d === `error` && _,
    W;
  t[28] !== l || t[29] !== k || t[30] !== U || t[31] !== d
    ? ((W = (e) => {
        if ((e.stopPropagation(), d === `listening` && l != null)) {
          g.dispatchMessage(`global-dictation-stop-requested`, { sessionId: l });
          return;
        }
        if (U) {
          k();
          return;
        }
        d === `error` &&
          l != null &&
          g.dispatchMessage(`global-dictation-dismiss`, { sessionId: l });
      }),
      (t[28] = l),
      (t[29] = k),
      (t[30] = U),
      (t[31] = d),
      (t[32] = W))
    : (W = t[32]);
  let G = W;
  if (d === `idle`) return null;
  let K;
  return (
    t[33] !== _ || t[34] !== p || t[35] !== G || t[36] !== d || t[37] !== S
      ? ((K = (0, $.jsx)(te, {
          canRetryError: _,
          errorMessage: p,
          onClick: G,
          status: d,
          waveformCanvasRef: S,
        })),
        (t[33] = _),
        (t[34] = p),
        (t[35] = G),
        (t[36] = d),
        (t[37] = S),
        (t[38] = K))
      : (K = t[38]),
    K
  );
}
function te(e) {
  let t = (0, Z.c)(40),
    { canRetryError: n, errorMessage: i, onClick: a, status: s, waveformCanvasRef: c } = e,
    l = h(),
    u = s === `transcribing`,
    f = s === `error` && n,
    p;
  if (f) {
    let e;
    (t[0] !== i || t[1] !== l
      ? ((e =
          i == null
            ? l.formatMessage({
                id: `globalDictation.orb.retry`,
                defaultMessage: `Retry dictation`,
                description: `Accessible label for retrying system-wide dictation from the floating dictation orb`,
              })
            : l.formatMessage(
                {
                  id: `globalDictation.orb.retryWithError`,
                  defaultMessage: `Retry dictation: {errorMessage}`,
                  description: `Accessible label for retrying system-wide dictation from the floating dictation orb after an error`,
                },
                { errorMessage: i },
              )),
        (t[0] = i),
        (t[1] = l),
        (t[2] = e))
      : (e = t[2]),
      (p = e));
  } else if (s === `error`) {
    let e;
    (t[3] !== i || t[4] !== l
      ? ((e =
          i == null
            ? l.formatMessage({
                id: `globalDictation.orb.dismiss`,
                defaultMessage: `Dismiss dictation`,
                description: `Accessible label for dismissing a system-wide dictation error from the floating dictation orb`,
              })
            : l.formatMessage(
                {
                  id: `globalDictation.orb.dismissWithError`,
                  defaultMessage: `Dismiss dictation: {errorMessage}`,
                  description: `Accessible label for dismissing a system-wide dictation error from the floating dictation orb after an error`,
                },
                { errorMessage: i },
              )),
        (t[3] = i),
        (t[4] = l),
        (t[5] = e))
      : (e = t[5]),
      (p = e));
  } else if (u) {
    let e;
    (t[6] === l
      ? (e = t[7])
      : ((e = l.formatMessage({
          id: `globalDictation.orb.transcribing`,
          defaultMessage: `Transcribing`,
          description: `Accessible label for the floating dictation orb while system-wide dictation is transcribing`,
        })),
        (t[6] = l),
        (t[7] = e)),
      (p = e));
  } else {
    let e;
    (t[8] === l
      ? (e = t[9])
      : ((e = l.formatMessage({
          id: `globalDictation.orb.stop`,
          defaultMessage: `Stop dictation`,
          description: `Accessible label for stopping system-wide dictation from the floating dictation orb`,
        })),
        (t[8] = l),
        (t[9] = e)),
      (p = e));
  }
  let g = p,
    _;
  t[10] === s
    ? (_ = t[11])
    : ((_ = r(
        `no-drag pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25`,
        s === `listening`
          ? r(`cursor-interaction text-white`, Y.recordingOrb)
          : `bg-token-dropdown-background text-token-text-secondary`,
        s === `error` && `cursor-interaction`,
      )),
      (t[10] = s),
      (t[11] = _));
  let v;
  t[12] !== s || t[13] !== c
    ? ((v =
        s === `listening`
          ? (0, $.jsx)(`canvas`, { ref: c, className: `size-10 text-white`, "aria-hidden": `true` })
          : null),
      (t[12] = s),
      (t[13] = c),
      (t[14] = v))
    : (v = t[14]);
  let b;
  t[15] === u
    ? (b = t[16])
    : ((b = u ? (0, $.jsx)(m, { className: `icon-sm` }) : null), (t[15] = u), (t[16] = b));
  let x;
  t[17] === f
    ? (x = t[18])
    : ((x = f ? (0, $.jsx)(d, { className: `icon-sm` }) : null), (t[17] = f), (t[18] = x));
  let S;
  t[19] !== n || t[20] !== s
    ? ((S = s === `error` && !n ? (0, $.jsx)(o, { className: `icon-sm` }) : null),
      (t[19] = n),
      (t[20] = s),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === s
    ? (C = t[23])
    : ((C =
        s === `listening`
          ? (0, $.jsx)(y, {
              id: `globalDictation.orb.listening`,
              defaultMessage: `Listening`,
              description: `Status text for the floating dictation orb while system-wide dictation is listening`,
            })
          : null),
      (t[22] = s),
      (t[23] = C));
  let w;
  t[24] === u
    ? (w = t[25])
    : ((w = u
        ? (0, $.jsx)(y, {
            id: `globalDictation.orb.transcribingStatus`,
            defaultMessage: `Transcribing`,
            description: `Status text for the floating dictation orb while system-wide dictation is transcribing`,
          })
        : null),
      (t[24] = u),
      (t[25] = w));
  let T = s === `error` && i != null ? i : null,
    E;
  t[26] !== C || t[27] !== w || t[28] !== T
    ? ((E = (0, $.jsxs)(`span`, { className: `sr-only`, children: [C, w, T] })),
      (t[26] = C),
      (t[27] = w),
      (t[28] = T),
      (t[29] = E))
    : (E = t[29]);
  let D;
  return (
    t[30] !== p ||
    t[31] !== u ||
    t[32] !== a ||
    t[33] !== E ||
    t[34] !== _ ||
    t[35] !== v ||
    t[36] !== b ||
    t[37] !== x ||
    t[38] !== S
      ? ((D = (0, $.jsxs)(`button`, {
          type: `button`,
          "aria-label": g,
          className: _,
          disabled: u,
          onClick: a,
          children: [v, b, x, S, E],
        })),
        (t[30] = p),
        (t[31] = u),
        (t[32] = a),
        (t[33] = E),
        (t[34] = _),
        (t[35] = v),
        (t[36] = b),
        (t[37] = x),
        (t[38] = S),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
var Z,
  Q,
  $,
  ne = e(() => {
    ((Z = v()), l(), (Q = t(a(), 1)), p(), n(), D(), _(), s(), f(), M(), q(), X(), ($ = i()));
  });
export { N as a, I as i, ne as n, P as o, q as r, ee as t };
//# sourceMappingURL=global-dictation-orb.js.map
