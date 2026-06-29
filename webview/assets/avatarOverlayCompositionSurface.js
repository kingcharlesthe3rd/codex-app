import { s as e } from "./chunk.js";
import "./modulepreload-polyfill.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, r as i, t as a } from "./app-scope-CWE-zIhQ.js";
import "./use-host-config.js";
import { k as o } from "./vscode-api.js";
import { n as s, t as c } from "./app.js";
import "./isEqual.js";
import { Gr as l, Ur as u } from "./src.js";
import { t as d } from "./client.js";
import "./react-dom.js";
import { o as f } from "./lib-1.js";
import { o as p } from "./persisted-atom-store.js";
import "./proxy.js";
import "./codex-avatar-BvRO-FvR.js";
import "./avatar-mascot-button.js";
import "./bullet-separator.js";
import "./button-oF-qgtAS.js";
import "./setting-storage.js";
import "./reduced-motion-preference-BFM-v_UB.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import "./chevron-right.js";
import "./use-stable-callback.js";
import "./tooltip-B.js";
import "./context-menu.js";
import "./toast-signal.js";
import "./arrow-up.js";
import "./speaker.js";
import "./use-recording-waveform-Cfd-Ecbb.js";
import "./regenerate.js";
import "./stop.js";
import "./x.js";
import "./badge.js";
import "./plus.js";
import "./use-dictation.js";
import "./composer-footer.js";
import "./composer-utils.js";
import { V as m } from "./rpc.js";
import "./transcribe-audio.js";
import "./statsig.js";
import "./microphone-input.js";
import "./request.js";
import "./codex-api-error.js";
import "./dictation-error-message.js";
import "./global-dictation-orb.js";
import { t as h } from "./avatar-overlay-native-frame.js";
import "./chevron.js";
import "./clock-Cid-cc8u.js";
import "./question-mark-circle.js";
import "./warning.js";
import "./waveform.js";
import "./avatar-overlay-realtime-voice-button.js";
import "./markdown-to-search-text.js";
var g = d(),
  _ = r(),
  v = e(t(), 1);
function y(e) {
  let t = document.documentElement,
    n = e ? `electron-dark` : `electron-light`;
  return (
    t.classList.add(`app-theme`, n),
    () => {
      t.classList.remove(`app-theme`, n);
    }
  );
}
var b = n();
function x(e) {
  let t = (0, _.c)(55),
    { dispatchAction: n, preparation: r } = e,
    { contentState: i, id: a } = r;
  if (i.activities.length === 0 && a !== `composer`) return null;
  let o = 32 - r.backingRect.left,
    s = 32 - r.backingRect.top,
    c;
  t[0] !== i.layout.viewport.height || t[1] !== i.layout.viewport.width || t[2] !== o || t[3] !== s
    ? ((c = { height: i.layout.viewport.height, left: o, top: s, width: i.layout.viewport.width }),
      (t[0] = i.layout.viewport.height),
      (t[1] = i.layout.viewport.width),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l = i.quickChatResetRevision,
    u;
  t[5] === i.activities
    ? (u = t[6])
    : ((u = i.activities.map(C)), (t[5] = i.activities), (t[6] = u));
  let d = i.activityStackPresentation,
    f = i.activityStackItems.length > 0,
    p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = []), (t[7] = p)) : (p = t[7]);
  let m = i.expandedNotificationIds,
    g = i.isNotificationStackExpanded,
    v = i.layout,
    y = r.nativeAttached,
    x = i.notificationFollowUp,
    w = i.activityStackItems.length,
    T;
  t[8] === i.activities
    ? (T = t[9])
    : ((T = i.activities.map(S)), (t[8] = i.activities), (t[9] = T));
  let E, D, O, k, A, j, M, N, P, F, I;
  t[10] === n
    ? ((E = t[11]),
      (D = t[12]),
      (O = t[13]),
      (k = t[14]),
      (A = t[15]),
      (j = t[16]),
      (M = t[17]),
      (N = t[18]),
      (P = t[19]),
      (F = t[20]),
      (I = t[21]))
    : ((E = (e) => {
        n({ type: `scroll-activity-stack`, deltaY: e });
      }),
      (D = (e) => {
        n({ type: `activate-notification`, notificationId: e });
      }),
      (O = (e) => {
        let { id: t } = e;
        n({ type: `dismiss-notification`, notificationId: t });
      }),
      (k = (e, t) => {
        n({ type: `notification-expansion-changed`, notificationId: e, isExpanded: t });
      }),
      (A = (e, t) => {
        let { id: r } = e;
        n({ type: `run-notification-control`, action: t, notificationId: r });
      }),
      (j = (e) => {
        n({ type: `quick-chat-draft-changed`, draft: e });
      }),
      (M = (e) => {
        n({ type: `quick-chat-active-changed`, isActive: e });
      }),
      (N = (e) => {
        n({ type: `quick-chat-visibility-changed`, isVisible: e });
      }),
      (P = (e, t) => {
        let { id: r } = e;
        n({ type: `run-notification-action`, action: t, notificationId: r });
      }),
      (F = (e, t) => {
        let { id: r } = e;
        n({ type: `submit-question-option`, notificationId: r, option: t });
      }),
      (I = (e) => (n({ type: `submit-quick-chat`, prompt: e }), Promise.resolve())),
      (t[10] = n),
      (t[11] = E),
      (t[12] = D),
      (t[13] = O),
      (t[14] = k),
      (t[15] = A),
      (t[16] = j),
      (t[17] = M),
      (t[18] = N),
      (t[19] = P),
      (t[20] = F),
      (t[21] = I));
  let L;
  t[22] === a ? (L = t[23]) : ((L = { type: `native-surface`, id: a }), (t[22] = a), (t[23] = L));
  let R;
  t[24] !== i.activityStackItems.length ||
  t[25] !== i.activityStackPresentation ||
  t[26] !== i.expandedNotificationIds ||
  t[27] !== i.isNotificationStackExpanded ||
  t[28] !== i.isQuickChatVisible ||
  t[29] !== i.layout ||
  t[30] !== i.notificationFollowUp ||
  t[31] !== i.pointerSurfaceId ||
  t[32] !== i.quickChatDictation ||
  t[33] !== i.quickChatDraft ||
  t[34] !== i.quickChatResetRevision ||
  t[35] !== r.nativeAttached ||
  t[36] !== T ||
  t[37] !== E ||
  t[38] !== D ||
  t[39] !== O ||
  t[40] !== k ||
  t[41] !== A ||
  t[42] !== j ||
  t[43] !== M ||
  t[44] !== N ||
  t[45] !== P ||
  t[46] !== F ||
  t[47] !== I ||
  t[48] !== L ||
  t[49] !== u ||
  t[50] !== f
    ? ((R = (0, b.jsx)(
        h,
        {
          activityCopies: u,
          activityStackPresentation: d,
          areActivityPillsVisible: f,
          avatarMenuItems: p,
          expandedNotificationIds: m,
          isNotificationTrayOpen: g,
          layout: v,
          nativeMaterialAttached: y,
          notificationFollowUp: x,
          notificationStackContentExpanded: !0,
          notificationStackItemCount: w,
          notifications: T,
          pointerSurfaceId: i.pointerSurfaceId,
          quickChatDictation: i.quickChatDictation,
          onActivityStackScroll: E,
          onActivateNotification: D,
          onDismissNotification: O,
          onNotificationExpansionChange: k,
          onRunNotificationControl: A,
          onQuickChatDraftChange: j,
          onQuickChatEditorActiveChange: M,
          onQuickChatVisibilityChange: N,
          onRunNotificationAction: P,
          onSubmitQuestionOption: F,
          onSubmitQuickChat: I,
          quickChatDraft: i.quickChatDraft,
          quickChatVisible: i.isQuickChatVisible,
          renderMode: L,
        },
        l,
      )),
      (t[24] = i.activityStackItems.length),
      (t[25] = i.activityStackPresentation),
      (t[26] = i.expandedNotificationIds),
      (t[27] = i.isNotificationStackExpanded),
      (t[28] = i.isQuickChatVisible),
      (t[29] = i.layout),
      (t[30] = i.notificationFollowUp),
      (t[31] = i.pointerSurfaceId),
      (t[32] = i.quickChatDictation),
      (t[33] = i.quickChatDraft),
      (t[34] = i.quickChatResetRevision),
      (t[35] = r.nativeAttached),
      (t[36] = T),
      (t[37] = E),
      (t[38] = D),
      (t[39] = O),
      (t[40] = k),
      (t[41] = A),
      (t[42] = j),
      (t[43] = M),
      (t[44] = N),
      (t[45] = P),
      (t[46] = F),
      (t[47] = I),
      (t[48] = L),
      (t[49] = u),
      (t[50] = f),
      (t[51] = R))
    : (R = t[51]);
  let z;
  return (
    t[52] !== R || t[53] !== c
      ? ((z = (0, b.jsx)(`div`, { className: `absolute`, style: c, children: R })),
        (t[52] = R),
        (t[53] = c),
        (t[54] = z))
      : (z = t[54]),
    z
  );
}
function S(e) {
  let { notification: t } = e;
  return t;
}
function C(e) {
  let { copy: t } = e;
  return t;
}
function w() {
  let { port1: e, port2: t } = new MessageChannel();
  return (
    window.postMessage(
      { port: t, type: `connect-avatar-overlay-composition-surface-host` },
      window.location.origin,
      [t],
    ),
    m(e)
  );
}
var T = new s(),
  E = w(),
  D = new Set(),
  O = null,
  k = null,
  A = !1,
  j = !1,
  M = document.getElementById(`root`);
if (M == null) throw Error(`Avatar overlay composition surface root not found`);
(p({}, () => {}),
  (0, g.createRoot)(M).render(
    (0, b.jsx)(o, {
      client: T,
      children: (0, b.jsx)(c, {
        children: (0, b.jsx)(i, { scope: a, value: {}, children: (0, b.jsx)(N, {}) }),
      }),
    }),
  ));
function N() {
  let e = (0, _.c)(12),
    t = (0, v.useSyncExternalStore)(V, R, R),
    n = t?.contentState.isDarkAppearance,
    r,
    i;
  (e[0] === n
    ? ((r = e[1]), (i = e[2]))
    : ((r = () => {
        if (n != null) return y(n);
      }),
      (i = [n]),
      (e[0] = n),
      (e[1] = r),
      (e[2] = i)),
    (0, v.useLayoutEffect)(r, i));
  let a, o;
  (e[3] === t
    ? ((a = e[4]), (o = e[5]))
    : ((a = () => {
        if (t == null) return;
        if (t.nativeAttached && !A) {
          ((A = !0), B({ id: t.id, phase: `painted`, revision: t.revision }));
          return;
        }
        t.nativeAttached || B({ id: t.id, phase: `mounted`, revision: t.revision });
        let e = null,
          n = window.requestAnimationFrame(() => {
            e = window.requestAnimationFrame(() => {
              B({
                id: t.id,
                phase: t.nativeAttached ? `painted` : `painted-before-attach`,
                revision: t.revision,
              });
            });
          });
        return () => {
          (window.cancelAnimationFrame(n), e != null && window.cancelAnimationFrame(e));
        };
      }),
      (o = [t]),
      (e[3] = t),
      (e[4] = a),
      (e[5] = o)),
    (0, v.useLayoutEffect)(a, o));
  let s;
  if (
    (e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (e[6] = s)) : (s = e[6]),
    (0, v.useEffect)(I, s),
    t == null)
  )
    return null;
  let c;
  e[7] === t
    ? (c = e[8])
    : ((c = (0, b.jsx)(x, { preparation: t, dispatchAction: P })), (e[7] = t), (e[8] = c));
  let l;
  return (
    e[9] !== t.contentState.locale || e[10] !== c
      ? ((l = (0, b.jsx)(f, { locale: t.contentState.locale, children: c })),
        (e[9] = t.contentState.locale),
        (e[10] = c),
        (e[11] = l))
      : (l = e[11]),
    l
  );
}
function P(e) {
  E.dispatchAction(e).catch(F);
}
function F() {
  return window.close();
}
function I() {
  let e = L;
  return (
    window.addEventListener(u, e),
    () => {
      window.removeEventListener(u, e);
    }
  );
}
function L() {
  document.querySelector(`[data-avatar-overlay-composition-autofocus='true']`)?.focus();
}
function R() {
  return O;
}
function z(e) {
  if (!(O != null && e.revision <= O.revision)) {
    ((O = e),
      e.nativeAttached &&
        !j &&
        ((j = !0), B({ id: e.id, phase: `preparation-received`, revision: e.revision })));
    for (let e of D) e();
  }
}
async function B(e) {
  try {
    await E.surfaceReady(e);
  } catch {
    window.close();
  }
}
function V(e) {
  if ((D.add(e), D.size === 1)) {
    let e = (e) => {
      if (!(e instanceof CustomEvent))
        throw Error(`Avatar overlay composition update was not a CustomEvent`);
      z(e.detail);
    };
    (window.addEventListener(l, e),
      (k = () => {
        window.removeEventListener(l, e);
      }),
      E.getPreparation()
        .then(z)
        .catch(() => window.close()));
  }
  return () => {
    (D.delete(e), D.size === 0 && (k?.(), (k = null)));
  };
}
//# sourceMappingURL=avatarOverlayCompositionSurface.js.map
