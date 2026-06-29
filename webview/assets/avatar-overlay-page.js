import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  AN as i,
  AP as a,
  BP as o,
  BV as s,
  CM as c,
  CS as l,
  DN as u,
  DS as d,
  Dp as f,
  ES as p,
  FB as m,
  Gj as h,
  IB as g,
  Io as _,
  JV as v,
  Ja as y,
  KP as b,
  MP as x,
  ON as S,
  Op as C,
  PB as ee,
  QP as te,
  RP as ne,
  SM as re,
  SP as w,
  VE as T,
  VP as E,
  Wl as D,
  XP as ie,
  Xp as ae,
  Ya as O,
  Zu as k,
  ad as A,
  ak as j,
  cP as M,
  dC as N,
  dD as P,
  fD as F,
  hD as oe,
  hM as se,
  iF as I,
  kE as ce,
  kN as L,
  lF as le,
  lP as R,
  mC as z,
  mD as ue,
  nF as B,
  ok as V,
  pM as de,
  qP as H,
  qV as U,
  qj as fe,
  rF as pe,
  uC as W,
  uP as me,
  uu as he,
  wP as ge,
  zP as _e,
  zo as ve,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  ho as ye,
  mo as G,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  H as be,
  U as xe,
  Xn as Se,
  Yn as K,
} from "./app-initial~app-main~automations-page.js";
import { n as Ce, t as q } from "./avatar-mascot-button.js";
import {
  O as we,
  k as Te,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r.js";
import {
  Mf as Ee,
  Nf as De,
  gm as Oe,
  hm as ke,
  mm as Ae,
  pm as J,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  oi as je,
  si as Me,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  _ as Ne,
  a as Pe,
  c as Fe,
  d as Ie,
  f as Le,
  g as Re,
  h as ze,
  i as Be,
  l as Ve,
  m as He,
  n as Ue,
  o as We,
  r as Ge,
  s as Ke,
  t as qe,
  u as Je,
  v as Ye,
  y as Xe,
} from "./avatar-overlay-pill-dismiss-button.js";
import {
  n as Ze,
  t as Qe,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js";
import { n as $e, t as et } from "./use-floating-window-pointer-interactivity.js";
import { n as tt, t as nt } from "./avatar-overlay-debug-state.js";
import {
  a as rt,
  c as it,
  d as at,
  i as ot,
  l as st,
  n as ct,
  o as lt,
  r as ut,
  s as dt,
  t as ft,
  u as pt,
} from "./use-avatar-overlay-selection.js";
function mt({
  avatar: e,
  avatarMenuItems: t,
  interactiveRegionRef: n,
  isDragging: r = !1,
  isNotificationTrayOpen: i = !0,
  restrictedSurface: s,
  layout: c,
  mascotLayout: l = c.mascot,
  mascotStyle: u,
  mascotDragState: d,
  mascotResizeHandle: f,
  notifications: p,
  onLostPointerCapture: m,
  onCloseNotificationTray: h,
  onPointerCancel: g,
  onPointerDown: _,
  onPointerMove: v,
  onPointerUp: y,
  onDismissNotification: b,
  onRunNotificationAction: x,
  onSubmitQuestionOption: S,
  onNotificationReplyEditorActiveChange: C,
  onOpenNotificationReply: ee,
  onSubmitNotificationReply: te,
  onOpenNotificationTray: re,
}) {
  let w = le(),
    T = ge(),
    E = Re(p[0]),
    D = p.length > 0,
    ie = s?.phase ?? `inactive`,
    ae = Fe(s?.isSessionActive ?? !1, ie !== `inactive`),
    O = ae === `voice-orb`,
    k = ae === `hidden`,
    A = ae === `pet` ? l : { ...l, height: 121, width: 112 },
    j = D && i;
  s?.controlsHovered;
  let M = s?.caption ?? null,
    N = j || M != null,
    P = D || N,
    F = c.placement.startsWith(`top`),
    oe = c.placement.endsWith(`end`),
    se = p.length > Bt,
    I = c.tray == null ? void 0 : Math.max(0, c.tray.height),
    ce = `${F ? `bottom` : `top`} ${oe ? `right` : `left`}`,
    L;
  j
    ? (L = {
        ariaLabel: w.formatMessage(Q.collapseNotificationTray),
        backgroundColor: `var(--color-token-bg-primary)`,
        content: (0, Z.jsx)(ne, { className: `icon-xs opacity-80` }),
        foregroundColor: `var(--color-token-text-secondary)`,
        isIconOnly: !0,
        onClick: h,
      })
    : D &&
      (L = {
        ariaLabel: w.formatMessage(
          {
            id: `avatarOverlay.toggleNotificationTray`,
            defaultMessage: `Open activity tray, {count, plural, one {# item} other {# items}}`,
            description: `Accessible label for the floating avatar activity count button`,
          },
          { count: p.length },
        ),
        backgroundColor: E.badgeBackgroundColor,
        content: p.length,
        foregroundColor: E.badgeForegroundColor,
        onClick: re,
      });
  let R = (0, Z.jsx)(q, {
    ariaLabel: w.formatMessage(Q.mascotLabel, { petName: e.displayName }),
    assetRef: e.assetRef,
    spritesheetUrl: e.spritesheetUrl,
    notificationBadge: L,
    resizeHandle: f == null ? void 0 : { ariaLabel: w.formatMessage(Q.resizeMascot), ...f },
    state: E.mascotState,
    style: u,
    transientState: d,
  });
  return (0, Z.jsx)(`main`, {
    className: `relative h-screen w-screen overflow-hidden bg-transparent`,
    children: (0, Z.jsxs)(`section`, {
      ref: n,
      "data-avatar-overlay-content-frame": `true`,
      className: `relative h-full w-full cursor-grab active:cursor-grabbing`,
      onLostPointerCapture: m,
      onPointerCancel: g,
      onPointerDown: _,
      onPointerMove: v,
      onPointerUp: y,
      children: [
        P
          ? (0, Z.jsx)(`div`, {
              "aria-hidden": N ? void 0 : !0,
              "data-avatar-overlay-hit-region": `notification-tray`,
              inert: !N,
              className: o(
                `absolute flex cursor-interaction text-sm text-token-foreground`,
                F ? `items-end` : `items-start`,
              ),
              style: {
                height: c.tray?.height,
                left: c.tray?.left,
                pointerEvents: N ? void 0 : `none`,
                top: c.tray?.top,
                visibility: c.tray == null ? `hidden` : void 0,
                width: c.tray?.width,
              },
              children: (0, Z.jsxs)(a.div, {
                animate: { opacity: N ? 1 : 0, scale: N || T ? 1 : 0.97, y: N || T ? 0 : 8 },
                className: `relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]`,
                "data-avatar-overlay-size": `notification-tray`,
                initial: !1,
                style: se ? { maxHeight: I, transformOrigin: ce } : { transformOrigin: ce },
                transition: T
                  ? { duration: 0 }
                  : { damping: 26, mass: 0.8, stiffness: 360, type: `spring` },
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `h-0 overflow-hidden`,
                    "data-avatar-overlay-size": `notification-tray-header`,
                  }),
                  (0, Z.jsx)(`div`, {
                    children: (0, Z.jsx)(ht, {
                      areNotificationsVisible: j,
                      isTrayAboveMascot: F,
                      isNotificationTrayVisible: N,
                      notifications: p,
                      prefersReducedMotion: !!T,
                      restrictedCaption: M,
                      trayMaxHeight: I,
                      onDismissNotification: b,
                      onRunNotificationAction: x,
                      onSubmitQuestionOption: S,
                      onNotificationReplyEditorActiveChange: C,
                      onOpenNotificationReply: ee,
                      onSubmitNotificationReply: te,
                    }),
                  }),
                ],
              }),
            })
          : null,
        (0, Z.jsx)(we, {
          items: t,
          children: (0, Z.jsx)(`div`, {
            "data-avatar-overlay-hit-region": k ? void 0 : `mascot`,
            className: o(
              `group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none`,
              k && `pointer-events-none`,
              r && !O ? `scale-95 transition-transform` : `transition-none`,
            ),
            style: { height: A.height, left: A.left, top: A.top, width: A.width },
            children: R,
          }),
        }),
      ],
    }),
  });
}
function ht(e) {
  let t = (0, Y.c)(67),
    {
      areNotificationsVisible: n,
      isTrayAboveMascot: r,
      isNotificationTrayVisible: i,
      notifications: s,
      onDismissNotification: c,
      onNotificationReplyEditorActiveChange: l,
      onOpenNotificationReply: u,
      onRunNotificationAction: d,
      onSubmitQuestionOption: f,
      onSubmitNotificationReply: p,
      prefersReducedMotion: m,
      restrictedCaption: h,
      trayMaxHeight: g,
    } = e,
    _ = le(),
    v = (0, X.useRef)(null),
    y;
  t[0] !== _ || t[1] !== s ? ((y = lt(s, _)), (t[0] = _), (t[1] = s), (t[2] = y)) : (y = t[2]);
  let b = y,
    S = h == null ? `` : `caption`,
    C = r ? `tray-above` : `tray-below`,
    ee;
  t[3] !== b || t[4] !== S || t[5] !== C
    ? ((ee = [b, S, C]), (t[3] = b), (t[4] = S), (t[5] = C), (t[6] = ee))
    : (ee = t[6]);
  let te = ee.join(`\0`),
    ne = s.length > Bt,
    re = Math.max(0, s.length - Bt),
    w;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = {
        hasScrollableContent: !1,
        hasLatestNotificationsAbove: !1,
        hiddenOlderNotificationCount: 0,
      }),
      (t[7] = w))
    : (w = t[7]);
  let [T, E] = (0, X.useState)(w),
    [D, ie] = (0, X.useState)(null),
    ae = (0, X.useRef)(null),
    O;
  t[8] !== s || t[9] !== D
    ? ((O = s.some((e) => e.id === D) ? D : null), (t[8] = s), (t[9] = D), (t[10] = O))
    : (O = t[10]);
  let k = O,
    A = k != null && n,
    j,
    M;
  (t[11] !== A || t[12] !== l
    ? ((j = () => {
        if (A)
          return (
            l?.(!0),
            () => {
              l?.(!1);
            }
          );
      }),
      (M = [A, l]),
      (t[11] = A),
      (t[12] = l),
      (t[13] = j),
      (t[14] = M))
    : ((j = t[13]), (M = t[14])),
    (0, X.useEffect)(j, M));
  let N, P;
  (t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        ae.current?.focus();
      }),
      (N = []),
      (t[15] = N),
      (t[16] = P))
    : ((N = t[15]), (P = t[16])),
    me(`avatar-overlay-keyboard-interaction-ready`, P, N));
  let F = Math.min(T.hiddenOlderNotificationCount, re),
    oe = T.hasScrollableContent,
    se = n && oe && ne && T.hasLatestNotificationsAbove,
    I = n && oe && ne && F > 0,
    ce = n && oe && ne,
    L = n && oe,
    R = s.length > 0,
    z = R && ne,
    ue;
  t[17] === m
    ? (ue = t[18])
    : ((ue = m ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[17] = m),
      (t[18] = ue));
  let B = ue,
    V;
  t[19] !== m || t[20] !== h || t[21] !== L
    ? ((V =
        h == null
          ? null
          : (0, Z.jsx)(
              gt,
              { prefersReducedMotion: m, shouldInsetForScrollbar: L, text: h },
              `restricted-caption`,
            )),
      (t[19] = m),
      (t[20] = h),
      (t[21] = L),
      (t[22] = V))
    : (V = t[22]);
  let de = V,
    H;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        E((t) => {
          let n = At(e);
          return jt(t, n) ? t : n;
        });
      }),
      (t[23] = H))
    : (H = t[23]);
  let U = H,
    fe;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (e) => {
        ((v.current = e), e != null && U(e));
      }),
      (t[24] = fe))
    : (fe = t[24]);
  let pe = fe,
    W;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        let e = v.current;
        if (e == null) return;
        U(e);
        let t = window.requestAnimationFrame(() => {
            U(e);
          }),
          n = new ResizeObserver(() => {
            U(e);
          });
        return (
          n.observe(e),
          () => {
            (window.cancelAnimationFrame(t), n.disconnect());
          }
        );
      }),
      (t[25] = W))
    : (W = t[25]);
  let he;
  (t[26] !== te || t[27] !== g
    ? ((he = [te, g, U]), (t[26] = te), (t[27] = g), (t[28] = he))
    : (he = t[28]),
    (0, X.useLayoutEffect)(W, he));
  let ge;
  t[29] === m
    ? (ge = t[30])
    : ((ge = () => {
        let e = v.current;
        e != null && (e.scrollTo({ behavior: m ? `auto` : `smooth`, top: 0 }), E(At(e, 0)));
      }),
      (t[29] = m),
      (t[30] = ge));
  let _e = ge,
    ve;
  t[31] !== F || t[32] !== m
    ? ((ve = () => {
        let e = v.current;
        if (e == null) return;
        let t = yt(e, F);
        (e.scrollTo({ behavior: m ? `auto` : `smooth`, top: t }), E(At(e, t)));
      }),
      (t[31] = F),
      (t[32] = m),
      (t[33] = ve))
    : (ve = t[33]);
  let ye = ve,
    G = de != null && `gap-1.5`,
    be;
  t[34] === G
    ? (be = t[35])
    : ((be = o(`relative flex w-full min-w-0 flex-col overflow-hidden`, G)),
      (t[34] = G),
      (t[35] = be));
  let xe;
  t[36] !== z || t[37] !== g
    ? ((xe = z ? { height: g, maxHeight: g } : void 0), (t[36] = z), (t[37] = g), (t[38] = xe))
    : (xe = t[38]);
  let Se = r ? null : de,
    K;
  t[39] !== k ||
  t[40] !== se ||
  t[41] !== I ||
  t[42] !== F ||
  t[43] !== _ ||
  t[44] !== i ||
  t[45] !== s ||
  t[46] !== c ||
  t[47] !== u ||
  t[48] !== d ||
  t[49] !== p ||
  t[50] !== f ||
  t[51] !== m ||
  t[52] !== _e ||
  t[53] !== ye ||
  t[54] !== ce ||
  t[55] !== R ||
  t[56] !== z ||
  t[57] !== B
    ? ((K = R
        ? (0, Z.jsxs)(a.div, {
            layout: z,
            className: `relative min-h-0 min-w-0 flex-1`,
            transition: B,
            children: [
              (0, Z.jsx)(x, {
                children: se
                  ? (0, Z.jsx)(_t, { prefersReducedMotion: m, onClick: _e }, `latest`)
                  : null,
              }),
              (0, Z.jsx)(a.div, {
                ref: pe,
                animate: { opacity: i ? 1 : 0, y: i || m ? 0 : 3 },
                "aria-label": _.formatMessage(Q.notificationList),
                className: o(
                  `scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]`,
                  ce && `vertical-scroll-fade-mask snap-y snap-mandatory`,
                ),
                "data-avatar-overlay-size": `notification-tray-list`,
                role: `list`,
                initial: !1,
                transition: m ? { duration: 0 } : { duration: 0.16, ease: `easeOut` },
                onScroll: (e) => {
                  let t = At(e.currentTarget);
                  E((e) => (jt(e, t) ? e : t));
                },
                children: s.map((e, t) =>
                  (0, Z.jsx)(
                    bt,
                    {
                      isReplying: k === e.id,
                      notification: e,
                      notificationIndex: t,
                      onCloseReply: () => {
                        ie((t) => (t === e.id ? null : t));
                      },
                      onDismissNotification: c,
                      onOpenReply: () => {
                        (u?.(e), ie(e.id));
                      },
                      onRunNotificationAction: d,
                      onSubmitQuestionOption: f,
                      onSubmitNotificationReply: p,
                      prefersReducedMotion: m,
                      replyInputRef: ae,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, Z.jsx)(x, {
                children: I
                  ? (0, Z.jsx)(vt, { count: F, prefersReducedMotion: m, onClick: ye }, `older`)
                  : null,
              }),
            ],
          })
        : null),
      (t[39] = k),
      (t[40] = se),
      (t[41] = I),
      (t[42] = F),
      (t[43] = _),
      (t[44] = i),
      (t[45] = s),
      (t[46] = c),
      (t[47] = u),
      (t[48] = d),
      (t[49] = p),
      (t[50] = f),
      (t[51] = m),
      (t[52] = _e),
      (t[53] = ye),
      (t[54] = ce),
      (t[55] = R),
      (t[56] = z),
      (t[57] = B),
      (t[58] = K))
    : (K = t[58]);
  let Ce = r ? de : null,
    q;
  return (
    t[59] !== z ||
    t[60] !== be ||
    t[61] !== xe ||
    t[62] !== Se ||
    t[63] !== K ||
    t[64] !== Ce ||
    t[65] !== B
      ? ((q = (0, Z.jsxs)(a.div, {
          layout: z,
          className: be,
          "data-avatar-overlay-size": `notification-tray-content`,
          style: xe,
          transition: B,
          children: [Se, K, Ce],
        })),
        (t[59] = z),
        (t[60] = be),
        (t[61] = xe),
        (t[62] = Se),
        (t[63] = K),
        (t[64] = Ce),
        (t[65] = B),
        (t[66] = q))
      : (q = t[66]),
    q
  );
}
function gt(e) {
  let t = (0, Y.c)(17),
    { prefersReducedMotion: n, shouldInsetForScrollbar: r, text: i } = e,
    s = (0, X.useRef)(null),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        let e = s.current;
        e != null && (e.scrollTop = e.scrollHeight);
      }),
      (t[0] = c))
    : (c = t[0]);
  let l;
  (t[1] === i ? (l = t[2]) : ((l = [i]), (t[1] = i), (t[2] = l)), (0, X.useLayoutEffect)(c, l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { height: `auto`, opacity: 1 }), (t[3] = u))
    : (u = t[3]);
  let d = r && `[scrollbar-gutter:stable]`,
    f;
  t[4] === d
    ? (f = t[5])
    : ((f = o(`no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left`, d)),
      (t[4] = d),
      (t[5] = f));
  let p;
  t[6] === n ? (p = t[7]) : ((p = n ? !1 : { height: 0, opacity: 0 }), (t[6] = n), (t[7] = p));
  let m;
  t[8] === n
    ? (m = t[9])
    : ((m = n ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[8] = n),
      (t[9] = m));
  let h;
  t[10] === i
    ? (h = t[11])
    : ((h = (0, Z.jsx)(`div`, {
        className: `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
        children: (0, Z.jsx)(`div`, {
          ref: s,
          className: `text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground`,
          children: i,
        }),
      })),
      (t[10] = i),
      (t[11] = h));
  let g;
  return (
    t[12] !== f || t[13] !== p || t[14] !== m || t[15] !== h
      ? ((g = (0, Z.jsx)(a.div, {
          "aria-live": `polite`,
          animate: u,
          className: f,
          "data-avatar-overlay-size": `notification-tray-caption`,
          initial: p,
          role: `status`,
          transition: m,
          children: h,
        })),
        (t[12] = f),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function _t(e) {
  let t = (0, Y.c)(28),
    { onClick: n, prefersReducedMotion: r } = e,
    i = le(),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = i.formatMessage(Q.showLatestNotifications)), (t[0] = i), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { opacity: 1, scale: 1, x: `-50%` }), (t[2] = c))
    : (c = t[2]);
  let l = r ? 1 : 0.96,
    u;
  t[3] === l ? (u = t[4]) : ((u = { opacity: 0, scale: l, x: `-50%` }), (t[3] = l), (t[4] = u));
  let d = r ? 1 : 0.96,
    f;
  t[5] === d ? (f = t[6]) : ((f = { opacity: 0, scale: d, x: `-50%` }), (t[5] = d), (t[6] = f));
  let p;
  t[7] === r
    ? (p = t[8])
    : ((p = r ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }), (t[7] = r), (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = o(qt, `top-1 min-w-12`)), (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === r ? (h = t[11]) : ((h = r ? void 0 : { scale: 1.03 }), (t[10] = r), (t[11] = h));
  let g;
  t[12] === r ? (g = t[13]) : ((g = r ? void 0 : { scale: 0.96 }), (t[12] = r), (t[13] = g));
  let _;
  t[14] === i
    ? (_ = t[15])
    : ((_ = i.formatMessage(Q.latestNotifications)), (t[14] = i), (t[15] = _));
  let v;
  t[16] === _ ? (v = t[17]) : ((v = (0, Z.jsx)(`span`, { children: _ })), (t[16] = _), (t[17] = v));
  let y;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(re, {
        className: `icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[18] = y))
    : (y = t[18]);
  let b;
  return (
    t[19] !== n ||
    t[20] !== s ||
    t[21] !== g ||
    t[22] !== v ||
    t[23] !== u ||
    t[24] !== f ||
    t[25] !== p ||
    t[26] !== h
      ? ((b = (0, Z.jsxs)(a.button, {
          type: `button`,
          "aria-label": s,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: c,
          exit: u,
          initial: f,
          transition: p,
          className: m,
          whileHover: h,
          whileTap: g,
          onClick: n,
          children: [v, y],
        })),
        (t[19] = n),
        (t[20] = s),
        (t[21] = g),
        (t[22] = v),
        (t[23] = u),
        (t[24] = f),
        (t[25] = p),
        (t[26] = h),
        (t[27] = b))
      : (b = t[27]),
    b
  );
}
function vt(e) {
  let t = (0, Y.c)(36),
    { count: n, onClick: r, prefersReducedMotion: i } = e,
    s = le(),
    c;
  t[0] !== n || t[1] !== s
    ? ((c = s.formatMessage(Q.showOlderNotifications, { count: n })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { opacity: 1, scale: 1, x: `-50%` }), (t[3] = l))
    : (l = t[3]);
  let u = i ? 1 : 0.96,
    d;
  t[4] === u ? (d = t[5]) : ((d = { opacity: 0, scale: u, x: `-50%` }), (t[4] = u), (t[5] = d));
  let f = i ? 1 : 0.96,
    p;
  t[6] === f ? (p = t[7]) : ((p = { opacity: 0, scale: f, x: `-50%` }), (t[6] = f), (t[7] = p));
  let m;
  t[8] === i
    ? (m = t[9])
    : ((m = i ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }), (t[8] = i), (t[9] = m));
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = o(qt, `bottom-1 min-w-9`)), (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === i ? (g = t[12]) : ((g = i ? void 0 : { scale: 1.03 }), (t[11] = i), (t[12] = g));
  let _;
  t[13] === i ? (_ = t[14]) : ((_ = i ? void 0 : { scale: 0.96 }), (t[13] = i), (t[14] = _));
  let v;
  t[15] !== n || t[16] !== s
    ? ((v = s.formatMessage(Q.compactOlderNotificationCount, { count: n })),
      (t[15] = n),
      (t[16] = s),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] === v
    ? (y = t[19])
    : ((y = (0, Z.jsx)(`span`, {
        className: `group-hover:hidden group-focus:hidden`,
        children: v,
      })),
      (t[18] = v),
      (t[19] = y));
  let b;
  t[20] !== n || t[21] !== s
    ? ((b = s.formatMessage(Q.olderNotificationCount, { count: n })),
      (t[20] = n),
      (t[21] = s),
      (t[22] = b))
    : (b = t[22]);
  let x;
  t[23] === b
    ? (x = t[24])
    : ((x = (0, Z.jsx)(`span`, {
        className: `hidden group-hover:inline group-focus:inline`,
        children: b,
      })),
      (t[23] = b),
      (t[24] = x));
  let S;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(re, {
        className: `icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== r ||
    t[27] !== c ||
    t[28] !== _ ||
    t[29] !== y ||
    t[30] !== x ||
    t[31] !== d ||
    t[32] !== p ||
    t[33] !== m ||
    t[34] !== g
      ? ((C = (0, Z.jsxs)(a.button, {
          type: `button`,
          "aria-label": c,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: l,
          exit: d,
          initial: p,
          transition: m,
          className: h,
          whileHover: g,
          whileTap: _,
          onClick: r,
          children: [y, x, S],
        })),
        (t[26] = r),
        (t[27] = c),
        (t[28] = _),
        (t[29] = y),
        (t[30] = x),
        (t[31] = d),
        (t[32] = p),
        (t[33] = m),
        (t[34] = g),
        (t[35] = C))
      : (C = t[35]),
    C
  );
}
function yt(e, t) {
  if (t <= Bt) return e.scrollHeight;
  let n = It(e);
  return n[Rt(n, Lt(e, n)) + Bt]?.offsetTop ?? e.scrollHeight;
}
function bt({
  isReplying: e,
  notification: t,
  notificationIndex: n,
  onDismissNotification: r,
  onCloseReply: i,
  onOpenReply: s,
  onRunNotificationAction: c,
  onSubmitQuestionOption: l,
  onSubmitNotificationReply: d,
  prefersReducedMotion: f,
  replyInputRef: p,
}) {
  let m = le(),
    h = t.source === `local` && t.usesLiveConversationState !== !1 ? t.localConversationId : null,
    g = ee(ae, h),
    _ = g == null ? null : Ie(g.items, m),
    v = Re(t),
    y = m.formatMessage(v.labelMessage),
    b = _ ?? t.body ?? m.formatMessage(v.fallbackBodyMessage),
    x = t.waitingRequest,
    S = x == null ? b : He(x, m),
    C = S.replace(/[.?!]+$/, ``),
    te = S === y ? y : `${y}. ${C}`,
    ne =
      t.action == null
        ? `${t.title}. ${te}`
        : `${t.title}. ${te}. ${m.formatMessage(Q.openNotification)}`,
    w = t.action != null,
    T = t.kind !== `activity` && r != null,
    [E, D] = (0, X.useState)(!1),
    [ie, O] = (0, X.useState)(!1),
    [k, A] = (0, X.useState)(``),
    [j, M] = (0, X.useState)(null),
    [N, P] = (0, X.useState)(!1),
    [F, oe] = (0, X.useState)(0),
    [se, I] = (0, X.useState)(!1),
    ce = (0, X.useRef)(E),
    L = (0, X.useRef)(void 0),
    R = x == null ? Ut : Wt,
    z = (0, X.useCallback)((e) => {
      if ((L.current?.(), (L.current = void 0), e == null)) return;
      let t = () => {
        let t = e.scrollHeight;
        oe((e) => (e === t ? e : t));
        let n = Pt(e);
        I((e) => {
          let t = (ce.current && e) || n;
          return e === t ? e : t;
        });
      };
      (t(), (L.current = Ye({ axis: `both`, target: e, onChange: t })));
    }, []);
  (0, X.useLayoutEffect)(() => {
    ce.current = E;
  }, [E]);
  let ue = F > R + Kt || se,
    B = ue && E && !e,
    V = t.controlTarget?.type === `app-server-conversation` && d != null,
    H = k.trim(),
    U = f ? { duration: 0 } : { duration: N ? 0.2 : 0.28, ease: [0.16, 1, 0.3, 1] },
    fe = async (e) => {
      if ((e.preventDefault(), e.stopPropagation(), !(!V || H.length === 0 || ie))) {
        (O(!0), M(null));
        try {
          (await d(t, H), A(``), i());
        } catch {
          M(m.formatMessage(Q.notificationReplyError));
        } finally {
          O(!1);
        }
      }
    };
  return (0, Z.jsxs)(a.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: f ? 0 : 4 },
    role: `listitem`,
    className: `group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left`,
    "data-avatar-overlay-measure": `notification-tray-row`,
    transition: f
      ? { duration: 0 }
      : { delay: Math.min(n, 3) * Ht, duration: 0.18, ease: `easeOut` },
    onBlurCapture: (e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || P(!1);
    },
    onFocusCapture: () => {
      P(!0);
    },
    onPointerEnter: () => {
      P(!0);
    },
    onPointerLeave: () => {
      P(!1);
    },
    children: [
      (0, Z.jsxs)(`div`, {
        className: o(
          `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
          w &&
            `transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none`,
        ),
        children: [
          (0, Z.jsxs)(a.div, {
            role: w ? `button` : void 0,
            className: o(
              `block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]`,
              T ? `pl-5` : `pl-3`,
              w ? `cursor-interaction` : `cursor-default`,
            ),
            tabIndex: w ? 0 : void 0,
            transition: f ? { duration: 0 } : { duration: 0.12, ease: `easeOut` },
            whileTap: w && !f ? { scale: 0.995 } : void 0,
            "aria-label": w ? ne : void 0,
            onClick: () => {
              w && c?.(t);
            },
            onKeyDown: (e) => {
              !w || (e.key !== `Enter` && e.key !== ` `) || (e.preventDefault(), c?.(t));
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: `flex min-w-0 items-center pr-7`,
                children: (0, Z.jsx)(`span`, {
                  className: o(
                    `text-size-chat min-w-0 truncate leading-[17px]`,
                    t.kind === `activity`
                      ? `text-token-text-secondary`
                      : `font-semibold text-token-foreground`,
                  ),
                  children: t.title,
                }),
              }),
              (0, Z.jsx)(a.div, {
                ref: z,
                animate: { maxHeight: B ? Gt : R },
                className: o(
                  `text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground`,
                  t.kind === `activity` && `hidden`,
                  B ? `whitespace-pre-wrap` : x == null ? `line-clamp-2` : void 0,
                ),
                "data-avatar-overlay-measure-body": `true`,
                initial: !1,
                transition: f ? { duration: 0 } : { duration: 0.18, ease: `easeOut` },
                children:
                  x == null
                    ? b
                    : (0, Z.jsx)(xt, {
                        isExpanded: B,
                        localConversationId: h,
                        request: x,
                        onRunNotificationAction: (e) => {
                          c?.(t, e);
                        },
                        onSubmitQuestionOption: (e) => {
                          l?.(t, e);
                        },
                      }),
              }),
            ],
          }),
          (0, Z.jsx)(`span`, {
            role: `img`,
            "aria-label": x?.kind === `question` ? m.formatMessage(Q.questionStatusIcon) : y,
            className: o(
              `pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100`,
              ue && N && `opacity-0 transition-opacity duration-150 motion-reduce:transition-none`,
            ),
            children:
              x?.kind === `question` ? (0, Z.jsx)(je, { className: v.iconClassName }) : zt(v),
          }),
          ue
            ? (0, Z.jsx)(a.div, {
                animate: { opacity: N ? 1 : 0, x: N ? 0 : 6 },
                className: o(
                  `absolute top-1 right-1 z-10`,
                  N ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `expand`,
                initial: !1,
                transition: U,
                children: (0, Z.jsx)(de, {
                  align: `end`,
                  side: `top`,
                  tooltipContent: m.formatMessage(
                    E ? Q.collapseNotificationTooltip : Q.expandNotificationTooltip,
                  ),
                  children: (0, Z.jsx)(u, {
                    className: o(`size-6`, Jt),
                    color: `ghost`,
                    size: `icon`,
                    "aria-expanded": E,
                    "aria-label": m.formatMessage(
                      E ? Q.collapseNotification : Q.expandNotification,
                      { title: t.title },
                    ),
                    onClick: () => {
                      D((e) => !e);
                    },
                    children: (0, Z.jsx)(a.span, {
                      animate: { rotate: E ? 90 : 0 },
                      transition: f ? { duration: 0 } : { duration: 0.12, ease: `easeOut` },
                      children: (0, Z.jsx)(re, { className: `icon-xs` }),
                    }),
                  }),
                }),
              })
            : null,
          V && !e
            ? (0, Z.jsx)(a.div, {
                animate: { opacity: N ? 1 : 0, x: N ? 0 : 6 },
                className: o(
                  `no-drag absolute right-2 bottom-1 z-10`,
                  N ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `reply`,
                initial: !1,
                transition: U,
                children: (0, Z.jsx)(`div`, {
                  className: `flex justify-end pb-1`,
                  children: (0, Z.jsx)(u, {
                    className: o(
                      `h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]`,
                      Jt,
                    ),
                    color: `outline`,
                    size: `default`,
                    "aria-label": m.formatMessage(Q.replyNotification, { title: t.title }),
                    onClick: (e) => {
                      (e.stopPropagation(), M(null), A(``), s(), P(!0));
                    },
                    onPointerDown: (e) => {
                      e.stopPropagation();
                    },
                    children: m.formatMessage(Q.replyNotificationButton),
                  }),
                }),
              })
            : null,
          e
            ? (0, Z.jsxs)(a.form, {
                className: `no-drag mx-3 mb-2 border-t border-token-border/60 pt-2`,
                animate: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: f ? 0 : -2 },
                transition: f ? { duration: 0 } : { duration: 0.16, ease: `easeOut` },
                onClick: (e) => {
                  e.stopPropagation();
                },
                onPointerDown: (e) => {
                  e.stopPropagation();
                },
                onSubmit: (e) => {
                  fe(e);
                },
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-1.5`,
                    children: [
                      (0, Z.jsx)(`input`, {
                        ref: p,
                        className: `text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border`,
                        "aria-label": m.formatMessage(Q.replyNotification, { title: t.title }),
                        autoFocus: !0,
                        placeholder: m.formatMessage(Q.notificationReplyPlaceholder),
                        value: k,
                        onChange: (e) => {
                          (A(e.currentTarget.value), M(null));
                        },
                        onKeyDown: (e) => {
                          e.key !== `Escape` || ie || (e.stopPropagation(), i(), M(null));
                        },
                      }),
                      (0, Z.jsx)(u, {
                        className: `h-6 px-2 text-xs`,
                        color: `primary`,
                        size: `default`,
                        type: `submit`,
                        "aria-label": m.formatMessage(Q.sendNotificationReply, { title: t.title }),
                        disabled: H.length === 0 || ie,
                        loading: ie,
                        children: m.formatMessage(Q.replyNotificationButton),
                      }),
                    ],
                  }),
                  j == null
                    ? null
                    : (0, Z.jsx)(`div`, {
                        className: `mt-1 text-[11px] leading-4 text-token-error-foreground`,
                        role: `alert`,
                        children: j,
                      }),
                ],
              })
            : null,
        ],
      }),
      T && !e
        ? (0, Z.jsx)(`div`, {
            className: o(
              `absolute -top-1 -left-1 z-20`,
              N ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`,
            ),
            "data-avatar-overlay-control": `dismiss`,
            children: (0, Z.jsx)(de, {
              align: `start`,
              side: `top`,
              tooltipContent: m.formatMessage(Q.dismissNotificationTooltip),
              children: (0, Z.jsx)(qe, {
                ariaLabel: m.formatMessage(Q.dismissNotification, { title: t.title }),
                onClick: () => {
                  r?.(t);
                },
              }),
            }),
          })
        : null,
    ],
  });
}
function xt(e) {
  let t = (0, Y.c)(72),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      onSubmitQuestionOption: a,
      request: s,
    } = e,
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (e) => {
        `questionOption` in e || i(e);
      }),
      (t[0] = i),
      (t[1] = c));
  let l = c;
  switch (s.kind) {
    case `question`: {
      let e = n ? `break-words whitespace-pre-wrap` : `truncate`,
        r;
      t[2] === e ? (r = t[3]) : ((r = o(`min-w-0`, e)), (t[2] = e), (t[3] = r));
      let c;
      t[4] !== s.prompt || t[5] !== r
        ? ((c = (0, Z.jsx)(`div`, { className: r, children: s.prompt })),
          (t[4] = s.prompt),
          (t[5] = r),
          (t[6] = c))
        : (c = t[6]);
      let l;
      t[7] === s.options ? (l = t[8]) : ((l = s.options.map(St)), (t[7] = s.options), (t[8] = l));
      let u;
      t[9] !== i || t[10] !== a
        ? ((u = (e) => {
            if (`questionOption` in e) {
              a?.(e.questionOption);
              return;
            }
            i(e);
          }),
          (t[9] = i),
          (t[10] = a),
          (t[11] = u))
        : (u = t[11]);
      let d;
      t[12] !== l || t[13] !== u
        ? ((d = (0, Z.jsx)(Dt, { actions: l, onRunNotificationAction: u })),
          (t[12] = l),
          (t[13] = u),
          (t[14] = d))
        : (d = t[14]);
      let f;
      return (
        t[15] !== c || t[16] !== d
          ? ((f = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `question`,
              children: [c, d],
            })),
            (t[15] = c),
            (t[16] = d),
            (t[17] = f))
          : (f = t[17]),
        f
      );
    }
    case `patch`: {
      let e;
      t[18] !== n ||
      t[19] !== s.additions ||
      t[20] !== s.deletions ||
      t[21] !== s.fileCount ||
      t[22] !== s.files ||
      t[23] !== s.summary
        ? ((e = (0, Z.jsx)(Tt, {
            additions: s.additions,
            deletions: s.deletions,
            fileCount: s.fileCount,
            files: s.files,
            isExpanded: n,
            summary: s.summary,
          })),
          (t[18] = n),
          (t[19] = s.additions),
          (t[20] = s.deletions),
          (t[21] = s.fileCount),
          (t[22] = s.files),
          (t[23] = s.summary),
          (t[24] = e))
        : (e = t[24]);
      let r;
      t[25] !== s.actions || t[26] !== l
        ? ((r = (0, Z.jsx)(Dt, { actions: s.actions, onRunNotificationAction: l })),
          (t[25] = s.actions),
          (t[26] = l),
          (t[27] = r))
        : (r = t[27]);
      let i;
      return (
        t[28] !== e || t[29] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `patch`,
              children: [e, r],
            })),
            (t[28] = e),
            (t[29] = r),
            (t[30] = i))
          : (i = t[30]),
        i
      );
    }
    case `plan`: {
      let e;
      return (
        t[31] !== n || t[32] !== r || t[33] !== s || t[34] !== l
          ? ((e = (0, Z.jsx)(Ct, {
              isExpanded: n,
              localConversationId: r,
              onRunNotificationAction: l,
              request: s,
            })),
            (t[31] = n),
            (t[32] = r),
            (t[33] = s),
            (t[34] = l),
            (t[35] = e))
          : (e = t[35]),
        e
      );
    }
    case `exec`: {
      let e;
      t[36] !== n || t[37] !== s.summary
        ? ((e = (0, Z.jsx)(wt, { isExpanded: n, text: s.summary })),
          (t[36] = n),
          (t[37] = s.summary),
          (t[38] = e))
        : (e = t[38]);
      let r;
      t[39] !== s.actions || t[40] !== l
        ? ((r = (0, Z.jsx)(Dt, { actions: s.actions, onRunNotificationAction: l })),
          (t[39] = s.actions),
          (t[40] = l),
          (t[41] = r))
        : (r = t[41]);
      let i;
      return (
        t[42] !== e || t[43] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `exec`,
              children: [e, r],
            })),
            (t[42] = e),
            (t[43] = r),
            (t[44] = i))
          : (i = t[44]),
        i
      );
    }
    case `network`: {
      let e;
      t[45] !== n || t[46] !== s.target
        ? ((e = (0, Z.jsx)(wt, { isExpanded: n, text: s.target })),
          (t[45] = n),
          (t[46] = s.target),
          (t[47] = e))
        : (e = t[47]);
      let r;
      t[48] !== s.actions || t[49] !== l
        ? ((r = (0, Z.jsx)(Dt, { actions: s.actions, onRunNotificationAction: l })),
          (t[48] = s.actions),
          (t[49] = l),
          (t[50] = r))
        : (r = t[50]);
      let i;
      return (
        t[51] !== e || t[52] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `network`,
              children: [e, r],
            })),
            (t[51] = e),
            (t[52] = r),
            (t[53] = i))
          : (i = t[53]),
        i
      );
    }
    case `permission`: {
      let e;
      t[54] !== n || t[55] !== s.target
        ? ((e = (0, Z.jsx)(wt, { isExpanded: n, text: s.target })),
          (t[54] = n),
          (t[55] = s.target),
          (t[56] = e))
        : (e = t[56]);
      let r;
      t[57] !== s.actions || t[58] !== l
        ? ((r = (0, Z.jsx)(Dt, { actions: s.actions, onRunNotificationAction: l })),
          (t[57] = s.actions),
          (t[58] = l),
          (t[59] = r))
        : (r = t[59]);
      let i;
      return (
        t[60] !== e || t[61] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `permission`,
              children: [e, r],
            })),
            (t[60] = e),
            (t[61] = r),
            (t[62] = i))
          : (i = t[62]),
        i
      );
    }
    case `tool`: {
      let e = s.summary ?? s.target,
        r;
      t[63] !== n || t[64] !== e
        ? ((r = (0, Z.jsx)(wt, { isExpanded: n, text: e })), (t[63] = n), (t[64] = e), (t[65] = r))
        : (r = t[65]);
      let i;
      t[66] !== s.actions || t[67] !== l
        ? ((i = (0, Z.jsx)(Dt, { actions: s.actions, onRunNotificationAction: l })),
          (t[66] = s.actions),
          (t[67] = l),
          (t[68] = i))
        : (i = t[68]);
      let a;
      return (
        t[69] !== r || t[70] !== i
          ? ((a = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `tool`,
              children: [r, i],
            })),
            (t[69] = r),
            (t[70] = i),
            (t[71] = a))
          : (a = t[71]),
        a
      );
    }
  }
}
function St(e, t) {
  return { label: e.label, tone: t === 0 ? `primary` : `secondary`, questionOption: e };
}
function Ct(e) {
  let t = (0, Y.c)(20),
    { isExpanded: n, localConversationId: r, onRunNotificationAction: i, request: a } = e,
    { getModeForSelection: o } = De(r),
    s,
    c,
    l,
    u;
  if (t[0] !== o || t[1] !== n || t[2] !== a.actions || t[3] !== a.kind || t[4] !== a.summary) {
    let e = o(`default`);
    ((l = a.kind),
      t[9] !== n || t[10] !== a.summary
        ? ((u = (0, Z.jsx)(wt, { isExpanded: n, text: a.summary })),
          (t[9] = n),
          (t[10] = a.summary),
          (t[11] = u))
        : (u = t[11]),
      (s = Dt),
      (c = a.actions.map((t) =>
        t.intent === `plan-start` ? { ...t, planStartCollaborationMode: e } : t,
      )),
      (t[0] = o),
      (t[1] = n),
      (t[2] = a.actions),
      (t[3] = a.kind),
      (t[4] = a.summary),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[12] !== s || t[13] !== i || t[14] !== c
    ? ((d = (0, Z.jsx)(s, { actions: c, onRunNotificationAction: i })),
      (t[12] = s),
      (t[13] = i),
      (t[14] = c),
      (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== l || t[17] !== u || t[18] !== d
      ? ((f = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-request": l,
          children: [u, d],
        })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function wt(e) {
  let t = (0, Y.c)(5),
    { isExpanded: n, text: r } = e,
    i = n ? `break-words whitespace-pre-wrap` : `truncate whitespace-nowrap`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = o(`min-w-0 text-token-text-secondary`, i)), (t[0] = i), (t[1] = a));
  let s;
  return (
    t[2] !== a || t[3] !== r
      ? ((s = (0, Z.jsx)(`div`, {
          className: a,
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: r,
        })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function Tt(e) {
  let t = (0, Y.c)(40),
    { additions: n, deletions: r, fileCount: i, files: a, isExpanded: o, summary: s } = e,
    c = le(),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = c.formatMessage(Q.compactPatchFileCount, { count: i })),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== n || t[4] !== c
    ? ((d = n > 0 ? c.formatMessage(Q.compactPatchAdditions, { count: n }) : null),
      (t[3] = n),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== r || t[7] !== c
    ? ((p = r > 0 ? c.formatMessage(Q.compactPatchDeletions, { count: r }) : null),
      (t[6] = r),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m = p;
  if (!o) {
    let e;
    t[9] === u ? (e = t[10]) : ((e = (0, Z.jsx)(`span`, { children: u })), (t[9] = u), (t[10] = e));
    let n;
    t[11] === f
      ? (n = t[12])
      : ((n =
          f == null
            ? null
            : (0, Z.jsx)(`span`, { className: `ml-1.5 text-token-charts-green`, children: f })),
        (t[11] = f),
        (t[12] = n));
    let r;
    t[13] === m
      ? (r = t[14])
      : ((r =
          m == null
            ? null
            : (0, Z.jsx)(`span`, { className: `ml-1.5 text-token-error-foreground`, children: m })),
        (t[13] = m),
        (t[14] = r));
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsx)(K, { className: `mx-1.5 text-token-text-tertiary` })), (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === s
      ? (a = t[17])
      : ((a = (0, Z.jsx)(`span`, { children: s })), (t[16] = s), (t[17] = a));
    let o;
    return (
      t[18] !== e || t[19] !== n || t[20] !== r || t[21] !== a
        ? ((o = (0, Z.jsxs)(`div`, {
            className: `min-w-0 truncate whitespace-nowrap text-token-text-secondary`,
            "data-avatar-overlay-compact-waiting-summary-text": `true`,
            children: [e, n, r, i, a],
          })),
          (t[18] = e),
          (t[19] = n),
          (t[20] = r),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
      o
    );
  }
  let h;
  t[23] === u
    ? (h = t[24])
    : ((h = (0, Z.jsx)(`span`, {
        className: `text-[11px] leading-4 text-token-text-secondary`,
        children: u,
      })),
      (t[23] = u),
      (t[24] = h));
  let g;
  t[25] === f
    ? (g = t[26])
    : ((g =
        f == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-charts-green`,
              children: f,
            })),
      (t[25] = f),
      (t[26] = g));
  let _;
  t[27] === m
    ? (_ = t[28])
    : ((_ =
        m == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-error-foreground`,
              children: m,
            })),
      (t[27] = m),
      (t[28] = _));
  let v;
  t[29] !== h || t[30] !== g || t[31] !== _
    ? ((v = (0, Z.jsxs)(`div`, {
        className: `mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5`,
        children: [h, g, _],
      })),
      (t[29] = h),
      (t[30] = g),
      (t[31] = _),
      (t[32] = v))
    : (v = t[32]);
  let y;
  t[33] === a ? (y = t[34]) : ((y = a.map(Et)), (t[33] = a), (t[34] = y));
  let b;
  t[35] === y
    ? (b = t[36])
    : ((b = (0, Z.jsx)(`div`, {
        className: `mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary`,
        children: y,
      })),
      (t[35] = y),
      (t[36] = b));
  let x;
  return (
    t[37] !== v || t[38] !== b
      ? ((x = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: [v, b],
        })),
        (t[37] = v),
        (t[38] = b),
        (t[39] = x))
      : (x = t[39]),
    x
  );
}
function Et(e) {
  return (0, Z.jsx)(`div`, { className: `leading-4 break-words`, children: e }, e);
}
function Dt(e) {
  let t = (0, Y.c)(7),
    { actions: n, onRunNotificationAction: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, Z.jsx)(
            u,
            {
              className: `max-w-full min-w-0`,
              color: kt(e.tone),
              size: `toolbar`,
              "aria-label": e.ariaLabel ?? e.label,
              title: e.ariaLabel ?? e.label,
              onClick: (t) => {
                (t.stopPropagation(), r(e));
              },
              onPointerDown: Ot,
              children: (0, Z.jsx)(`span`, { className: `truncate`, children: e.label }),
            },
            e.ariaLabel ?? e.label,
          )),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, Z.jsx)(`div`, {
          className: `no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px`,
          children: i,
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function Ot(e) {
  e.stopPropagation();
}
function kt(e) {
  switch (e) {
    case `primary`:
      return `secondary`;
    case `danger`:
      return `danger`;
    case `secondary`:
      return `secondary`;
  }
}
function At(e, t = e.scrollTop) {
  if (!Nt(e))
    return {
      hasScrollableContent: !1,
      hasLatestNotificationsAbove: !1,
      hiddenOlderNotificationCount: 0,
    };
  if (Mt(e, t))
    return {
      hasScrollableContent: !0,
      hasLatestNotificationsAbove: !0,
      hiddenOlderNotificationCount: 0,
    };
  let n = It(e),
    r = Lt(e, n, t);
  return {
    hasScrollableContent: !0,
    hasLatestNotificationsAbove: t > Vt,
    hiddenOlderNotificationCount: Ft(e, n, r),
  };
}
function jt(e, t) {
  return (
    e.hasScrollableContent === t.hasScrollableContent &&
    e.hasLatestNotificationsAbove === t.hasLatestNotificationsAbove &&
    e.hiddenOlderNotificationCount === t.hiddenOlderNotificationCount
  );
}
function Mt(e, t = e.scrollTop) {
  let n = Math.max(0, e.scrollHeight - e.clientHeight);
  return Nt(e) && t >= n - Vt;
}
function Nt(e) {
  return e.scrollHeight > e.clientHeight + Vt;
}
function Pt(e) {
  return [e, ...Array.from(e.querySelectorAll(`*`))].some(
    (e) => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + Kt,
  );
}
function Ft(e, t, n) {
  let r = n + e.clientHeight - Vt;
  return t.filter((e) => e.offsetTop + e.offsetHeight > r).length;
}
function It(e) {
  return Array.from(e.children).filter((e) => e instanceof HTMLElement);
}
function Lt(e, t, n = e.scrollTop) {
  return n + (t[0]?.offsetTop ?? 0) + Vt;
}
function Rt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1) e[r].offsetTop <= t && (n = r);
  return n;
}
function zt(e) {
  switch (e.iconType) {
    case `check-circle`:
      return (0, Z.jsx)(y, { className: e.iconClassName });
    case `clock`:
      return (0, Z.jsx)(ke, { className: e.iconClassName });
    case `spinner`:
      return (0, Z.jsx)(L, { className: e.iconClassName });
    case `warning`:
      return (0, Z.jsx)(J, { className: e.iconClassName });
  }
}
var Y,
  X,
  Z,
  Q,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt = e(() => {
    ((Y = U()),
      E(),
      w(),
      r(),
      (X = t(v(), 1)),
      I(),
      C(),
      Ce(),
      Se(),
      S(),
      Te(),
      i(),
      se(),
      Ee(),
      O(),
      c(),
      _e(),
      Oe(),
      Me(),
      Ae(),
      M(),
      Xe(),
      Ve(),
      dt(),
      We(),
      Ne(),
      Ue(),
      Le(),
      ze(),
      (Z = s()),
      (Q = pe({
        mascotLabel: {
          id: `petOverlay.mascotLabel`,
          defaultMessage: `{petName} pet`,
          description: `Accessible label for the floating Codex pet`,
        },
        openNotification: {
          id: `avatarOverlay.openNotification`,
          defaultMessage: `Open notification`,
          description: `Accessible label for an actionable row in the floating avatar notification tray`,
        },
        dismissNotification: {
          id: `avatarOverlay.dismissNotification`,
          defaultMessage: `Dismiss {title}`,
          description: `Accessible label for dismissing a notification in the floating avatar notification tray`,
        },
        dismissNotificationTooltip: {
          id: `avatarOverlay.dismissNotificationTooltip`,
          defaultMessage: `Dismiss`,
          description: `Tooltip for the icon button that dismisses a floating avatar notification`,
        },
        replyNotification: {
          id: `avatarOverlay.replyNotification`,
          defaultMessage: `Reply to {title}`,
          description: `Accessible label for replying to a floating avatar notification`,
        },
        replyNotificationButton: {
          id: `avatarOverlay.replyNotificationButton`,
          defaultMessage: `Reply`,
          description: `Compact button label for replying to a floating avatar notification`,
        },
        sendNotificationReply: {
          id: `avatarOverlay.sendNotificationReply`,
          defaultMessage: `Send reply to {title}`,
          description: `Accessible label for submitting a floating avatar notification reply`,
        },
        notificationReplyPlaceholder: {
          id: `avatarOverlay.notificationReplyPlaceholder`,
          defaultMessage: `Reply`,
          description: `Placeholder for the one-line floating avatar notification reply input`,
        },
        notificationReplyError: {
          id: `avatarOverlay.notificationReplyError`,
          defaultMessage: `Unable to send reply`,
          description: `Compact error shown when a floating avatar notification reply fails`,
        },
        expandNotification: {
          id: `avatarOverlay.expandNotification`,
          defaultMessage: `Expand {title}`,
          description: `Accessible label for expanding a floating avatar notification row`,
        },
        collapseNotification: {
          id: `avatarOverlay.collapseNotification`,
          defaultMessage: `Collapse {title}`,
          description: `Accessible label for collapsing a floating avatar notification row`,
        },
        expandNotificationTooltip: {
          id: `avatarOverlay.expandNotificationTooltip`,
          defaultMessage: `Expand`,
          description: `Tooltip for the icon button that expands a floating avatar notification`,
        },
        collapseNotificationTooltip: {
          id: `avatarOverlay.collapseNotificationTooltip`,
          defaultMessage: `Collapse`,
          description: `Tooltip for the icon button that collapses a floating avatar notification`,
        },
        collapseNotificationTray: {
          id: `avatarOverlay.collapseNotificationTray`,
          defaultMessage: `Collapse activity`,
          description: `Accessible label and tooltip for the button that collapses the floating avatar activity tray`,
        },
        resizeMascot: {
          id: `avatarOverlay.resizeMascot`,
          defaultMessage: `Resize pet`,
          description: `Accessible label for the handle that resizes the floating Codex pet`,
        },
        notificationList: {
          id: `avatarOverlay.notificationList`,
          defaultMessage: `Activity notifications`,
          description: `Accessible label for the list of floating avatar activity notifications`,
        },
        latestNotifications: {
          id: `avatarOverlay.latestNotifications`,
          defaultMessage: `Latest`,
          description: `Label for the button that scrolls the floating avatar activity list back to the newest notifications`,
        },
        showLatestNotifications: {
          id: `avatarOverlay.showLatestNotifications`,
          defaultMessage: `Show latest activity`,
          description: `Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications`,
        },
        showOlderNotifications: {
          id: `avatarOverlay.showOlderNotifications`,
          defaultMessage: `Show {count, plural, one {# older activity item} other {# older activity items}}`,
          description: `Accessible label for the button that scrolls the floating avatar activity list toward older notifications`,
        },
        olderNotificationCount: {
          id: `avatarOverlay.olderNotificationCount`,
          defaultMessage: `{count, plural, one {# more} other {# more}}`,
          description: `Label for the button that shows there are more floating avatar activity notifications below`,
        },
        compactOlderNotificationCount: {
          id: `avatarOverlay.compactOlderNotificationCount`,
          defaultMessage: `+{count}`,
          description: `Compact label for the edge button that shows hidden floating avatar activity notifications`,
        },
        questionStatusIcon: {
          id: `avatarOverlay.questionStatusIcon`,
          defaultMessage: `Question`,
          description: `Accessible label for a floating avatar notification waiting on a question answer`,
        },
        compactPatchFileCount: {
          id: `avatarOverlay.compactPatchFileCount`,
          defaultMessage: `{count, plural, one {# file} other {# files}}`,
          description: `Compact file count for a patch request in the floating avatar notification tray`,
        },
        compactPatchAdditions: {
          id: `avatarOverlay.compactPatchAdditions`,
          defaultMessage: `+{count}`,
          description: `Compact additions count for a patch request in the floating avatar notification tray`,
        },
        compactPatchDeletions: {
          id: `avatarOverlay.compactPatchDeletions`,
          defaultMessage: `-{count}`,
          description: `Compact deletions count for a patch request in the floating avatar notification tray`,
        },
      })),
      (Bt = 2),
      (Vt = 2),
      (Ht = 0.035),
      (Ut = 32),
      (Wt = 84),
      (Gt = 512),
      (Kt = 1),
      (qt = `group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]`),
      (Jt = `!bg-token-main-surface-primary enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_94%,var(--color-token-foreground))]`));
  });
function Xt() {
  let e = (0, dn.c)(10),
    { selectedAvatar: t, selectedAvatarId: n } = ct(),
    r = t == null,
    i,
    a;
  if (
    (e[0] === r
      ? ((i = e[1]), (a = e[2]))
      : ((i = () => {
          r &&
            R.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: !1 });
        }),
        (a = [r]),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a)),
    (0, $.useEffect)(i, a),
    t == null)
  )
    return null;
  let o;
  e[3] !== t || e[4] !== n ? ((o = en(t, n)), (e[3] = t), (e[4] = n), (e[5] = o)) : (o = e[5]);
  let s;
  return (
    e[6] !== t || e[7] !== n || e[8] !== o
      ? ((s = (0, fn.jsx)(Zt, { selectedAvatar: t, selectedAvatarId: n }, o)),
        (e[6] = t),
        (e[7] = n),
        (e[8] = o),
        (e[9] = s))
      : (s = e[9]),
    s
  );
}
function Zt({ selectedAvatar: e, selectedAvatarId: t }) {
  let n = m(te),
    r = le(),
    i = fe(`451951815`),
    a = g(d),
    o = g(nt),
    s = hn,
    c = s.phase !== `inactive` && !0;
  ee(ae, void 0);
  let { data: l } = ve({ enabled: c, hostId: void 0 }),
    u = c,
    [h, _] = (0, $.useState)(En),
    [v, y] = (0, $.useState)(null),
    [x, S] = (0, $.useState)(!0),
    [C, ne] = (0, $.useState)(!1),
    [re, w] = (0, $.useState)(!1),
    [T, E] = (0, $.useState)(!1),
    [D, O] = (0, $.useState)(null),
    { mascotWidthPx: k, setMascotWidthPx: j } = Ke(),
    [M, F] = (0, $.useState)(() => new Map()),
    [oe, se] = (0, $.useState)(() => Date.now()),
    [I] = (0, $.useState)(() => $t(e, t)),
    { data: ce = [], refetch: L } = A(),
    { data: de = [], refetch: H } = he({ taskFilter: `current`, limit: 20 }),
    U = Je({
      includeCompactWaitingRequests: i,
      intl: r,
      localConversations: ce,
      excludedConversationId: null,
      remoteTasks: de,
    }),
    pe = I == null ? null : ut({ intl: r, petName: I.petName, startedAtMs: I.startedAtMs }),
    ge = [],
    { nextNotificationExpiresAtMs: _e, notifications: G } = ot({
      dismissedNotificationTurnKeys: M,
      extraNotifications: c ? [...[], ...ge] : pe == null ? [] : [pe],
      nowMs: oe,
      sessions: c ? [] : U,
    }),
    xe = lt(G, r),
    Se = U.some((e) => e.source !== `cloud` && e.status === `running`),
    K = U.some((e) => e.source === `cloud` && e.status === `running`),
    Ce = (0, $.useRef)(null),
    q = (0, $.useRef)(null),
    we = (0, $.useRef)(null),
    Te = (0, $.useRef)(null),
    Ee = (0, $.useRef)(null),
    De = (0, $.useRef)(null),
    Oe = (0, $.useRef)(null),
    ke = (0, $.useRef)(null),
    Ae = (0, $.useRef)(!1),
    J = (0, $.useCallback)(
      (t, n, r, i = x) => {
        a.logProductEvent(
          N,
          be({
            action: t,
            hasRunningCloudSession: K,
            hasRunningLocalSession: Se,
            isNotificationTrayOpen: i,
            notification: r,
            notificationCount: G.length,
            selectedAvatar: e,
            source: n,
          }),
        );
      },
      [Se, K, x, G.length, a, e],
    );
  ((0, $.useEffect)(() => {
    if (I == null) return;
    let e = b(mn, []);
    e.includes(I.avatarId) || ie(mn, [...e, I.avatarId]);
  }, [I]),
    (0, $.useEffect)(() => {
      Ae.current ||
        (a !== p &&
          ((Ae.current = !0),
          J(W.CODEX_AVATAR_OVERLAY_ACTION_OPENED, z.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)));
    }, [a, J]),
    $e({
      interactiveRegionRef: Oe,
      isPaused: () => Ce.current != null || q.current != null,
      onInteractiveChange: (e) => {
        R.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: e });
      },
      regionElementSelectors: gn,
    }));
  let je = (0, $.useCallback)(() => {
      if (q.current != null || Ee.current != null) return;
      let e = nn(Oe.current);
      if (e == null) return;
      let t = { ...e, isTrayVisible: (x && G.length > 0) || s.caption != null };
      cn(ke.current, t) ||
        ((ke.current = t),
        R.dispatchMessage(`avatar-overlay-element-size-changed`, {
          isTrayVisible: t.isTrayVisible,
          mascot: t.mascot,
          tray: t.tray,
        }));
    }, [x, G.length, s.caption]),
    Me = (0, $.useCallback)(() => {
      De.current != null && (window.clearTimeout(De.current), (De.current = null));
    }, []),
    Ne = (0, $.useCallback)(() => {
      (we.current != null && (window.cancelAnimationFrame(we.current), (we.current = null)),
        (Te.current = null));
    }, []),
    Fe = (0, $.useCallback)((e) => {
      ((Te.current = e),
        (we.current ??= window.requestAnimationFrame(() => {
          we.current = null;
          let e = Te.current;
          ((Te.current = null),
            !(e == null || q.current == null) &&
              R.dispatchMessage(`avatar-overlay-mascot-resize-move`, { width: e }));
        })));
    }, []),
    Ie = (0, $.useCallback)(
      (e) => {
        ((Ee.current = e),
          Me(),
          (De.current = window.setTimeout(() => {
            ((De.current = null), (Ee.current = null), O(null), je());
          }, 100)));
      },
      [Me, je],
    ),
    Le = (0, $.useCallback)(
      () => an(Oe.current?.querySelector(_n) ?? null)?.width ?? k ?? 112,
      [k],
    ),
    Re = (0, $.useCallback)((e, t) => {
      let n = q.current;
      n == null ||
        n.pointerId !== e ||
        ((q.current = null), w(!1), t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
    }, []),
    ze = (0, $.useCallback)(
      (e, t) => {
        let n = q.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : Qt(n, t);
        ((n.currentWidthPx = r),
          Ne(),
          O(r),
          j(r),
          Ie(r),
          R.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      },
      [Ne, j, Ie],
    ),
    Be = (0, $.useCallback)(
      (e, { releaseSample: t, shouldPreserveOrbMomentum: n = !1, shouldOpenMainWindow: r }) => {
        let i = Ce.current;
        if (i == null || i.pointerId !== e) return;
        ((Ce.current = null), ne(!1), y(null));
        let { hasMoved: a, releaseSample: o, velocity: s } = it(i, t, n && i.usesOrbPhysics);
        if (
          (Oe.current?.hasPointerCapture?.(e) && Oe.current.releasePointerCapture?.(e),
          a &&
            !i.hasMoved &&
            o != null &&
            R.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: o.screenX,
              pointerScreenY: o.screenY,
            }),
          r &&
            i.startedOnMascot &&
            !a &&
            (J(W.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED, z.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT),
            R.dispatchMessage(`open-current-main-window`, {})),
          R.dispatchMessage(`avatar-overlay-drag-end`, {
            pointerScreenX: o?.screenX ?? i.screenX,
            pointerScreenY: o?.screenY ?? i.screenY,
          }),
          a &&
            J(W.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED, z.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT),
          s != null)
        ) {
          let e = i.usesOrbPhysics ? 3 : 1;
          R.dispatchMessage(`avatar-overlay-drag-release`, {
            shouldBounce: i.usesOrbPhysics,
            velocityX: s.x * e,
            velocityY: s.y * e,
          });
        }
      },
      [c, void 0, null, J],
    ),
    Ve = (e) => {
      e.button !== 0 ||
        !(e.target instanceof Element) ||
        e.target.closest(`.no-drag`) != null ||
        (e.preventDefault(),
        e.currentTarget.setPointerCapture?.(e.pointerId),
        (Ce.current = {
          startedOnMascot: e.target.closest(`[data-avatar-mascot="true"]`) != null,
          hasMoved: !1,
          pointerId: e.pointerId,
          samples: [st(e)],
          screenX: e.screenX,
          screenY: e.screenY,
          usesOrbPhysics: u,
        }),
        R.dispatchMessage(`avatar-overlay-drag-start`, {
          pointerScreenX: e.screenX,
          pointerScreenY: e.screenY,
          pointerWindowX: e.clientX,
          pointerWindowY: e.clientY,
          usesOrbPhysics: u,
        }),
        ne(!0),
        y(null));
    },
    He = (e) => {
      let t = Ce.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = st(e);
      t.samples = pt([...t.samples, n]);
      let r = n.screenX - t.screenX,
        i = n.screenY - t.screenY;
      (Math.abs(r) < 4 && Math.abs(i) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        y((e) => tn({ currentDragState: e, deltaX: r })),
        R.dispatchMessage(`avatar-overlay-drag-move`, {
          pointerScreenX: n.screenX,
          pointerScreenY: n.screenY,
        }));
    },
    Ue = (e) => {
      Be(e.pointerId, { releaseSample: st(e), shouldOpenMainWindow: !0 });
    },
    We = (e) => {
      Be(e.pointerId, { shouldPreserveOrbMomentum: !0, shouldOpenMainWindow: !1 });
    },
    qe = (e) => {
      Be(e.pointerId, { shouldPreserveOrbMomentum: !0, shouldOpenMainWindow: !1 });
    },
    Ye = (e) => {
      if (e.button !== 0) return;
      (e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = Le();
      (Me(),
        Ne(),
        (Ee.current = null),
        (q.current = {
          currentWidthPx: t,
          pointerId: e.pointerId,
          startScreenX: e.screenX,
          startWidthPx: t,
        }),
        O(t),
        w(!0),
        R.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
    },
    Xe = (e) => {
      let t = q.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      (e.preventDefault(), e.stopPropagation());
      let n = Qt(t, e.screenX);
      ((t.currentWidthPx = n), O(n), Fe(n));
    },
    Ze = (e) => {
      (ze(e.pointerId, e.screenX), Re(e.pointerId, e.currentTarget));
    },
    Qe = (e) => {
      (e.stopPropagation(), ze(e.pointerId), Re(e.pointerId, e.currentTarget));
    },
    et = (e) => {
      (ze(e.pointerId), Re(e.pointerId));
    },
    tt = (e, t) => {
      let r = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let i = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (t.commandDecision != null && (r?.kind === `exec` || r?.kind === `network`)) {
              V(`reply-with-command-execution-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.commandDecision,
              }).then(() => {
                L();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && r?.kind === `patch`) {
              V(`reply-with-file-change-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.fileDecision,
              }).then(() => {
                L();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && r?.kind === `permission`) {
              V(`reply-with-permissions-request-approval-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: t.permissionResponse,
              }).then(() => {
                L();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && r?.kind === `tool`) {
              V(`reply-with-mcp-server-elicitation-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: ue(t.mcpElicitationAction),
              }).then(() => {
                L();
              });
              return;
            }
            break;
          case `plan-start`:
            if (r?.kind === `plan` && t.planStartCollaborationMode != null) {
              V(`update-thread-settings-for-next-turn`, {
                conversationId: i,
                threadSettings: { collaborationMode: t.planStartCollaborationMode },
              })
                .then(() =>
                  V(`remove-plan-implementation-request`, { conversationId: i, turnId: r.turnId }),
                )
                .then(async () =>
                  V(`send-follow-up-message`, {
                    conversationId: i,
                    prompt: `${P}\n${r.planContent}`,
                    serviceTier: await ye(
                      n,
                      n.get(f, i) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  L();
                });
              return;
            }
            break;
          case `open`:
            break;
        }
      }
      (t != null && t.intent !== `open`) ||
        (e.action != null &&
          (J(
            W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
            z.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            e,
          ),
          R.dispatchMessage(`open-in-main-window`, { path: e.action.path })));
    },
    rt = (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        V(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          L();
        });
    },
    at = (e) => {
      (J(
        W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        z.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        e,
      ),
        F((t) => {
          if (t.get(e.id) === e.turnKey) return t;
          let n = new Map(t);
          return (n.set(e.id, e.turnKey), n);
        }));
    },
    ct = async (e, t) => {
      if (e.controlTarget?.type !== `app-server-conversation`) return;
      let r = t.trim();
      r.length !== 0 &&
        (J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
          z.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        ),
        await V(`send-follow-up-message`, {
          conversationId: e.controlTarget.conversationId,
          prompt: r,
          serviceTier: await ye(n, n.get(f, e.controlTarget.conversationId) ?? `local`, null),
        }));
    },
    dt = (0, $.useCallback)((e) => {
      R.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, { isInteractive: e });
    }, []);
  return (
    me(
      `avatar-overlay-layout-changed`,
      ({ layout: e }) => {
        (_(e),
          Ee.current === e.mascot.width &&
            ((Ee.current = null), Me(), O(null), window.requestAnimationFrame(je)));
      },
      [Me, je],
    ),
    (0, $.useLayoutEffect)(() => {
      let e = (!o && T) || re;
      return (
        document.documentElement.classList.toggle(wn, e),
        document.body.classList.toggle(wn, e),
        () => {
          (document.documentElement.classList.remove(wn), document.body.classList.remove(wn));
        }
      );
    }, [o, T, re]),
    (0, $.useEffect)(
      () => () => {
        (Me(), Ne());
      },
      [Ne, Me],
    ),
    (0, $.useEffect)(() => {
      let e = (e) => {
          (Be(e.pointerId, { releaseSample: st(e), shouldOpenMainWindow: !0 }),
            ze(e.pointerId, e.screenX),
            Re(e.pointerId));
        },
        t = (e) => {
          (Be(e.pointerId, { shouldPreserveOrbMomentum: !0, shouldOpenMainWindow: !1 }),
            ze(e.pointerId),
            Re(e.pointerId));
        };
      return (
        window.addEventListener(`pointerup`, e),
        window.addEventListener(`pointercancel`, t),
        () => {
          (window.removeEventListener(`pointerup`, e),
            window.removeEventListener(`pointercancel`, t));
        }
      );
    }, [ze, Be, Re]),
    (0, $.useLayoutEffect)(() => {
      let e = null,
        t = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), je());
          });
        },
        n = new ResizeObserver(t),
        r = Oe.current;
      if (r != null) {
        n.observe(r);
        for (let e of rn(r)) n.observe(e);
      }
      return (
        window.addEventListener(`resize`, t),
        t(),
        () => {
          (e != null && window.cancelAnimationFrame(e),
            n.disconnect(),
            window.removeEventListener(`resize`, t));
        }
      );
    }, [je, e.id, xe]),
    (0, $.useLayoutEffect)(() => {
      je();
    }, [x, je, e.id, xe, s.caption, k]),
    (0, $.useEffect)(() => {
      if (_e == null) return;
      let e = Math.max(0, _e - Date.now()),
        t = window.setTimeout(() => {
          se((e) => Math.max(Date.now(), e + 1));
        }, e);
      return () => {
        window.clearTimeout(t);
      };
    }, [_e]),
    (0, $.useEffect)(() => {
      if (!Se && !K) return;
      let e = window.setTimeout(() => {
        (se((e) => Math.max(Date.now(), e + 1)), Se && L(), K && H());
      }, pn);
      return () => {
        window.clearTimeout(e);
      };
    }, [Se, K, L, H]),
    (0, fn.jsx)(mt, {
      avatar: e,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: B({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (J(
              W.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              z.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              R.dispatchMessage(`avatar-overlay-close`, {}));
          },
        },
      ],
      interactiveRegionRef: Oe,
      restrictedSurface: void 0,
      isDragging: C,
      isNotificationTrayOpen: x,
      layout: h,
      mascotDragState: v,
      mascotLayout:
        re && D != null ? { ...h.mascot, height: Math.ceil(D / Ge), width: D } : h.mascot,
      mascotResizeHandle: o
        ? void 0
        : {
            onLostPointerCapture: et,
            onPointerCancel: Qe,
            onPointerDown: Ye,
            onPointerEnter: () => {
              E(!0);
            },
            onPointerLeave: () => {
              E(!1);
            },
            onPointerMove: Xe,
            onPointerUp: Ze,
          },
      mascotStyle: Pe(D ?? k),
      notifications: G,
      onCloseNotificationTray: () => {
        (J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          z.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !1,
        ),
          S(!1));
      },
      onLostPointerCapture: qe,
      onPointerCancel: We,
      onPointerDown: Ve,
      onPointerMove: He,
      onPointerUp: Ue,
      onDismissNotification: at,
      onNotificationReplyEditorActiveChange: dt,
      onOpenNotificationReply: (e) => {
        J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
          z.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        );
      },
      onRunNotificationAction: tt,
      onSubmitQuestionOption: rt,
      onSubmitNotificationReply: ct,
      onOpenNotificationTray: () => {
        (J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
          z.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !0,
        ),
          S(!0));
      },
    })
  );
}
function Qt(e, t) {
  return Be(e.startWidthPx + t - e.startScreenX);
}
function $t(e, t) {
  return Ze(e, t) || b(mn, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function en(e, t) {
  return Ze(e, t) ? `pending-custom-avatar` : `ready`;
}
function tn({ currentDragState: e, deltaX: t }) {
  return t >= 4 ? `running-right` : t <= -4 ? `running-left` : e;
}
function nn(e) {
  if (e == null) return null;
  let t = an(e.querySelector(_n)),
    n = on(e.querySelector(vn));
  return t == null ? null : { mascot: t, tray: n };
}
function rn(e) {
  return Array.from(e.querySelectorAll(Tn.join(`, `)));
}
function an(e) {
  if (e == null || un(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function on(e) {
  if (e == null || un(e)) return null;
  let t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return null;
  let n = Math.ceil(e.offsetWidth > 0 ? e.offsetWidth : t.width),
    r = e.querySelector(yn),
    i = e.querySelector(bn),
    a = e.querySelector(xn),
    o = e.querySelector(Sn);
  if (r == null || (i == null && a == null)) return { width: n, height: Math.ceil(t.height) };
  let s = i != null && (a == null ? 0 : 1) + (o == null ? 0 : 1) > 1 ? sn(i) : 0;
  return {
    width: n,
    height: Math.ceil(
      r.getBoundingClientRect().height +
        (a?.scrollHeight ?? 0) +
        (o == null ? 0 : o.getBoundingClientRect().height) +
        s,
    ),
  };
}
function sn(e) {
  let t = Number.parseFloat(window.getComputedStyle(e).rowGap);
  return Number.isFinite(t) ? t : 0;
}
function cn(e, t) {
  return (
    e != null &&
    e.isTrayVisible === t.isTrayVisible &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    ln(e.tray, t.tray)
  );
}
function ln(e, t) {
  return e === t || (e != null && t != null && e.width === t.width && e.height === t.height);
}
function un(e) {
  return window.getComputedStyle(e).display === `none`;
}
var dn, $, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En;
e(() => {
  ((dn = U()),
    ce(),
    r(),
    ($ = t(v(), 1)),
    I(),
    k(),
    C(),
    j(),
    oe(),
    F(),
    G(),
    xe(),
    Qe(),
    D(),
    et(),
    M(),
    l(),
    _(),
    n(),
    T(),
    h(),
    H(),
    tt(),
    at(),
    Yt(),
    dt(),
    We(),
    rt(),
    Le(),
    ft(),
    (fn = s()),
    (pn = 15e3),
    (mn = `first-awake-pet-notification-avatar-ids`),
    (hn = {
      audioStream: null,
      canStart: !1,
      caption: null,
      conversationId: null,
      phase: `inactive`,
      isMicrophoneMuted: !1,
      isMuted: !1,
      start: () => Promise.resolve(),
      stop: () => Promise.resolve(),
      voiceActivity: `idle`,
      toggleMicrophoneMute: () => {},
      toggleMute: () => {},
      waveformCanvasRef: { current: null },
    }),
    (gn = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`]),
    (_n = `.codex-avatar-root`),
    (vn = `[data-avatar-overlay-size='notification-tray']`),
    (yn = `[data-avatar-overlay-size='notification-tray-header']`),
    (bn = `[data-avatar-overlay-size='notification-tray-content']`),
    (xn = `[data-avatar-overlay-size='notification-tray-list']`),
    (Sn = `[data-avatar-overlay-size='notification-tray-caption']`),
    (Cn = `[data-avatar-overlay-measure='notification-tray-row']`),
    (wn = `codex-avatar-overlay-force-resize-cursor`),
    (Tn = [_n, vn, yn, bn, xn, Sn, Cn]),
    (En = {
      mascot: { left: 244, top: 191, width: 112, height: 121 },
      placement: `top-end`,
      tray: { left: 80, top: 56, width: 276, height: 131 },
      viewport: { width: 356, height: 320 },
    }));
})();
export { Xt as AvatarOverlayPage };
//# sourceMappingURL=avatar-overlay-page.js.map
