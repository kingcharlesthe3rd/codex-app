import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  $R as r,
  $l as i,
  AB as a,
  BV as o,
  CS as s,
  DS as c,
  Dp as l,
  ES as u,
  FB as ee,
  Gj as d,
  IB as te,
  Io as f,
  JV as ne,
  KP as re,
  Kl as ie,
  LB as ae,
  Op as oe,
  PB as p,
  QP as se,
  UE as ce,
  VE as le,
  Wl as m,
  XP as ue,
  Xp as de,
  Zu as fe,
  ad as pe,
  ak as me,
  bF as he,
  cM as ge,
  cP as _e,
  dC as ve,
  dD as h,
  fD as ye,
  hD as g,
  iF as _,
  iz as be,
  kE as xe,
  lF as Se,
  lP as v,
  mC as y,
  mD as b,
  nF as Ce,
  no as we,
  ok as x,
  qP as Te,
  qV as S,
  qj as C,
  ro as Ee,
  rz as De,
  tz as Oe,
  uC as w,
  uM as ke,
  uP as Ae,
  uu as je,
  zo as Me,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  ho as Ne,
  mo as Pe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import { H as Fe, U as Ie } from "./app-initial~app-main~automations-page.js";
import {
  Am as Le,
  _d as Re,
  cf as ze,
  gd as Be,
  jm as Ve,
  sf as He,
} from "./app-initial~app-main~onboarding-page~profile.js";
import { i as Ue, n as We, r as Ge, t as Ke } from "./avatar-overlay-native-frame.js";
import {
  a as qe,
  f as T,
  i as Je,
  o as Ye,
  r as Xe,
  s as E,
  u as Ze,
} from "./avatar-overlay-pill-dismiss-button.js";
import {
  n as D,
  t as Qe,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js";
import { n as $e, t as et } from "./use-floating-window-pointer-interactivity.js";
import { n as tt, t as nt } from "./avatar-overlay-debug-state.js";
import {
  a as rt,
  c as it,
  d as O,
  i as at,
  l as ot,
  n as st,
  o as ct,
  r as lt,
  s as ut,
  t as k,
  u as dt,
} from "./use-avatar-overlay-selection.js";
function ft({
  activityStackPresentation: e,
  isNotificationStackExpanded: t,
  measuredSurfaces: n,
  policies: r,
}) {
  return n.flatMap((n) => {
    let i = r.find((e) => e.id === n.id);
    if (i == null) return [];
    let a = e.slots.find((e) => e.slotId === n.id);
    if (a == null)
      return [
        {
          ...n,
          ...i,
          chromiumPresentationRect: n.rect,
          edgeZone: null,
          opacity: 1,
          platterRect: n.rect,
          presentationRect: n.rect,
        },
      ];
    let o = A(n.rect, a.visibleRect, a.presentationRect);
    return [
      {
        ...n,
        ...i,
        chromiumPresentationRect: t ? n.rect : A(n.rect, a.contentRect, a.presentationRect),
        edgeZone: a.edgeZone,
        opacity: !t || a.visibleRect.height > 0 ? 1 : 0,
        platterRect: n.rect,
        presentationRect: o,
      },
    ];
  });
}
function A(e, t, n) {
  return {
    height: t.height,
    left: e.left + t.left - n.left,
    top: e.top + t.top - n.top,
    width: t.width,
  };
}
var pt = e(() => {});
function mt(e, { includeInertSurfaces: t = !1 } = {}) {
  if (e == null) return null;
  let n = _t(e.querySelector(M)),
    r = yt(e.querySelector(xt), t);
  return n == null ? null : { mascot: n, tray: r };
}
function ht(e, t, { includeInert: n = !1 } = {}) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(I))
        .flatMap((e) => {
          if ((!n && e.closest(`[inert]`) != null) || j(e)) return [];
          let r = e.dataset.avatarOverlayNativeSurfaceId,
            i = t.find((e) => e === r),
            a = e.getBoundingClientRect();
          if (i == null || a.width <= 0 || a.height <= 0) return [];
          let o = { height: a.height, left: a.left, top: a.top, width: a.width },
            s = Number(e.dataset.avatarOverlayNativeCornerRadius),
            c = bt(e);
          if (!Number.isFinite(s) || !Number.isFinite(c)) return [];
          let l = e.querySelector(L),
            u = l?.getBoundingClientRect();
          return [
            {
              ...(l != null && u != null && !j(l) && u.width > 0 && u.height > 0
                ? {
                    chromiumOverflowCornerRadius: Math.min(u.width, u.height) / 2,
                    chromiumOverflowRect: {
                      height: u.height,
                      left: u.left,
                      top: u.top,
                      width: u.width,
                    },
                  }
                : {}),
              cornerRadius: s,
              id: i,
              opacity: c,
              rect: o,
            },
          ];
        })
        .sort((e, n) => t.indexOf(e.id) - t.indexOf(n.id));
}
function gt(e) {
  return Array.from(e.querySelectorAll(z.join(`, `)));
}
function _t(e) {
  if (e == null || j(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function vt(e) {
  return {
    backing: _t(e?.querySelector(F) ?? null)?.height ?? 0,
    visible: _t(e?.querySelector(Ct) ?? null)?.height ?? 0,
  };
}
function yt(e, t) {
  if (e == null || j(e)) return null;
  let n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = Array.from(e.querySelectorAll(I))
      .filter((e) => (t || e.closest(`[inert]`) == null) && !j(e))
      .map((e) => e.getBoundingClientRect()),
    i = Math.ceil(
      Math.max(
        e.offsetWidth > 0 ? e.offsetWidth : n.width,
        Math.max(n.right, ...r.map((e) => e.right)) - Math.min(n.left, ...r.map((e) => e.left)),
      ),
    ),
    a = e.querySelector(St),
    o = e.querySelector(N);
  if (a == null || o == null) return { height: Math.ceil(n.height), width: i };
  let s = o.getBoundingClientRect(),
    c = Math.max(
      0,
      ...Array.from(o.querySelectorAll(R)).map((e) => e.getBoundingClientRect().bottom - s.bottom),
    );
  return { height: Math.ceil(a.getBoundingClientRect().height + o.scrollHeight - c), width: i };
}
function j(e) {
  return window.getComputedStyle(e).display === `none`;
}
function bt(e) {
  let t = 1;
  for (let n = e; n != null; n = n.parentElement)
    t *= Number(window.getComputedStyle(n).opacity || `1`);
  return t;
}
var M,
  xt,
  St,
  N,
  P,
  F,
  Ct,
  I,
  L,
  R,
  z,
  wt = e(() => {
    ((M = `.codex-avatar-root`),
      (xt = `[data-avatar-overlay-size='notification-tray']`),
      (St = `[data-avatar-overlay-size='notification-tray-header']`),
      (N = `[data-avatar-overlay-size='notification-tray-list']`),
      (P = `[data-avatar-overlay-measure='notification-tray-row']`),
      (F = `[data-avatar-overlay-size='notification-stack-backing-layout']`),
      (Ct = `[data-avatar-overlay-size='notification-stack-visible-layout']`),
      (I = `[data-avatar-overlay-native-surface-id]`),
      (L = `[data-avatar-overlay-chromium-overflow='true']`),
      (R = `[data-avatar-overlay-backing-canvas='true']`),
      (z = [M, xt, St, N, P, F, Ct, I, L]));
  });
function B() {
  let e = (0, W.c)(13),
    { selectedAvatar: t, selectedAvatarId: n } = st(),
    r = t == null,
    i,
    a;
  (e[0] === r
    ? ((i = e[1]), (a = e[2]))
    : ((i = () => {
        r && v.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: !1 });
      }),
      (a = [r]),
      (e[0] = r),
      (e[1] = i),
      (e[2] = a)),
    (0, G.useEffect)(i, a));
  let o, s;
  if (
    (e[3] === r
      ? ((o = e[4]), (s = e[5]))
      : ((o = () => {
          r && v.dispatchMessage(`avatar-overlay-composition-changed`, { state: null });
        }),
        (s = [r]),
        (e[3] = r),
        (e[4] = o),
        (e[5] = s)),
    (0, G.useLayoutEffect)(o, s),
    t == null)
  )
    return null;
  let c;
  e[6] !== t || e[7] !== n ? ((c = Dt(t, n)), (e[6] = t), (e[7] = n), (e[8] = c)) : (c = e[8]);
  let l;
  return (
    e[9] !== t || e[10] !== n || e[11] !== c
      ? ((l = (0, At.jsx)(V, { selectedAvatar: t, selectedAvatarId: n }, c)),
        (e[9] = t),
        (e[10] = n),
        (e[11] = c),
        (e[12] = l))
      : (l = e[12]),
    l
  );
}
function V({ selectedAvatar: e, selectedAvatarId: t }) {
  let n = ee(se),
    r = Se(),
    a = Ee() === !0,
    o = C(`451951815`),
    s = C(`665486075`),
    u = C(`1380537759`),
    d = C(Le),
    f = Re(ce),
    ne = te(c),
    { mascotWidthPx: re, setMascotWidthPx: ae } = E(),
    { data: oe = [], refetch: p } = pe(),
    { data: le = [], refetch: m } = je({ taskFilter: `current`, limit: 20 }),
    ue = ie(),
    fe = i(),
    me = Ze({
      includeCompactWaitingRequests: o,
      includeMcpElicitationCancelAction: !0,
      intl: r,
      localConversations: oe,
      excludedConversationId: null,
      remoteTasks: le,
    });
  return (0, At.jsx)(H, {
    isDarkAppearance: a,
    dictationCleanupEnabled: !1,
    dictationStreamingEnabled: d,
    dictationSupportState: f,
    latestTurnItems: (e) => (e == null ? void 0 : n.get(de, e)?.items),
    mascotWidthPx: re,
    productLogger: ne,
    globalDictationOrbEnabled: u,
    quickChatEnabled: s,
    selectedAvatar: e,
    selectedAvatarId: t,
    sessions: me,
    onClosePet: () => {
      v.dispatchMessage(`avatar-overlay-close`, {});
    },
    onMascotClick: () => {
      v.dispatchMessage(`open-current-main-window`, {});
    },
    onMascotWidthChange: ae,
    onRefreshLocalSessions: p,
    onRefreshRemoteSessions: m,
    onRunNotificationControl: async (e, t) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
        case `open-follow-up`:
          return;
        case `stop`:
          if (r == null) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await x(`interrupt-conversation`, {
                conversationId: r.conversationId,
                initiatedBy: `user`,
              }),
                Promise.resolve(p()).catch(() => {}));
              return;
            case `cloud-task`:
              (await ue.mutateAsync(r.taskId), Promise.resolve(m()).catch(() => {}));
              return;
          }
        case `submit-follow-up`: {
          let e = t.prompt.trim();
          if (r == null || e.length === 0) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await x(`send-follow-up-message`, {
                conversationId: r.conversationId,
                prompt: e,
                serviceTier: await Ne(n, n.get(l, r.conversationId) ?? `local`, null),
              }),
                Promise.resolve(p()).catch(() => {}));
              return;
            case `cloud-task`:
              (await fe.mutateAsync({
                taskId: r.taskId,
                turnId: r.turnId,
                prompt: e,
                ideContext: ``,
                runEnvironmentInQaMode: !1,
                priorConversation: null,
                images: null,
              }),
                Promise.resolve(m()).catch(() => {}));
              return;
          }
        }
      }
    },
    onRunNotificationAction: (e, t) => {
      let r = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let i = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (t.commandDecision != null && (r?.kind === `exec` || r?.kind === `network`)) {
              x(`reply-with-command-execution-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.commandDecision,
              }).then(() => {
                p();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && r?.kind === `patch`) {
              x(`reply-with-file-change-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.fileDecision,
              }).then(() => {
                p();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && r?.kind === `permission`) {
              x(`reply-with-permissions-request-approval-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: t.permissionResponse,
              }).then(() => {
                p();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && r?.kind === `tool`) {
              x(`reply-with-mcp-server-elicitation-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: b(t.mcpElicitationAction),
              }).then(() => {
                p();
              });
              return;
            }
            break;
          case `plan-start`:
            if (r?.kind === `plan` && t.planStartCollaborationMode != null) {
              x(`update-thread-settings-for-next-turn`, {
                conversationId: i,
                threadSettings: { collaborationMode: t.planStartCollaborationMode },
              })
                .then(() =>
                  x(`remove-plan-implementation-request`, { conversationId: i, turnId: r.turnId }),
                )
                .then(async () =>
                  x(`send-follow-up-message`, {
                    conversationId: i,
                    prompt: `${h}\n${r.planContent}`,
                    serviceTier: await Ne(
                      n,
                      n.get(l, i) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  p();
                });
              return;
            }
            break;
          case `open`:
            break;
        }
      }
      (t != null && t.intent !== `open`) ||
        (e.action != null && v.dispatchMessage(`open-in-main-window`, { path: e.action.path }));
    },
    onSubmitQuestionOption: (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        x(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          p();
        });
    },
    onSubmitQuickChat: async (e) => {
      (await He({
        model: void 0,
        prompt: e,
        scope: n,
        target: { type: `projectless` },
        thinking: void 0,
      }),
        await p());
    },
  });
}
function H({
  dictationCleanupEnabled: e,
  dictationStreamingEnabled: t,
  dictationSupportState: n,
  firstAwakeNotificationEnabled: i = !0,
  globalDictationOrbEnabled: a = !1,
  isDarkAppearance: o,
  latestTurnItems: s,
  mascotWidthPx: c,
  productLogger: l,
  quickChatEnabled: d,
  selectedAvatar: f,
  selectedAvatarId: ne,
  sessions: ie,
  onClosePet: ae,
  onMascotClick: oe,
  onMascotWidthChange: ce,
  onRefreshLocalSessions: le,
  onRefreshRemoteSessions: m,
  onRunNotificationControl: fe,
  onRunNotificationAction: pe,
  onSubmitQuestionOption: me,
  onSubmitQuickChat: he,
}) {
  let ge = ee(se),
    _e = te(nt),
    h = Ft.phase !== `inactive` && !0;
  p(de, void 0);
  let { data: ye } = Me({ enabled: h, hostId: void 0 }),
    g = Se(),
    [_, xe] = (0, G.useState)(Rt),
    [b, we] = (0, G.useState)(!1),
    [x, Te] = (0, G.useState)(!0),
    [S, C] = (0, G.useState)(!1),
    [Ee, je] = (0, G.useState)(!1),
    [Ne, Pe] = (0, G.useState)(!1),
    [Ie, Le] = (0, G.useState)(!1),
    [Re, ze] = (0, G.useState)(null),
    [Be, Ve] = (0, G.useState)(``),
    [He, Ue] = (0, G.useState)(0),
    [We, T] = (0, G.useState)(null),
    [Je, Ye] = (0, G.useState)([]),
    [E, Ze] = (0, G.useState)({}),
    [D, Qe] = (0, G.useState)(0),
    [et, tt] = (0, G.useState)(!1),
    [rt, O] = (0, G.useState)(null),
    [st, ut] = (0, G.useState)(!1),
    [k, A] = (0, G.useState)(null),
    [pt, yt] = (0, G.useState)(() => new Map()),
    [j, bt] = (0, G.useState)(() => Date.now()),
    [M] = (0, G.useState)(() => (i ? Et(f, ne) : null)),
    xt = M == null ? null : lt({ intl: g, petName: M.petName, startedAtMs: M.startedAtMs }),
    St = [],
    { nextNotificationExpiresAtMs: N, notifications: P } = at({
      dismissedNotificationTurnKeys: pt,
      extraNotifications: h ? [...[], ...St] : xt == null ? [] : [xt],
      latestActivityFirst: !0,
      nowMs: j,
      sessions: h ? [] : ie,
    }),
    F = P.map((e) => ({
      copy: Ge({
        intl: g,
        latestTurnItems:
          e.source === `local` && !e.id.startsWith(`realtime-`) ? s(e.localConversationId) : void 0,
        notification: e,
        notificationCount: P.length,
      }),
      notification: e,
    })),
    Ct = ct(P, g),
    I = x ? P.map(({ id: e }) => ({ height: E[e] ?? 54, id: e })) : Nt,
    L = De({
      expanded: b || S,
      items: I,
      scrollOffset: D,
      viewportRect: { height: Mt, left: 0, top: 0, width: 345 },
    }),
    R = ie.some((e) => e.source !== `cloud` && e.status === `running`),
    z = ie.some((e) => e.source === `cloud` && e.status === `running`),
    wt = d && (Ee || Ne || Ie),
    B = (0, G.useRef)(null),
    V = (0, G.useRef)(null),
    H = (0, G.useRef)(null),
    Dt = (0, G.useRef)(null),
    U = (0, G.useRef)(null),
    W = (0, G.useRef)(null),
    K = (0, G.useRef)(null),
    zt = (0, G.useRef)(null),
    Bt = (0, G.useRef)(0),
    Vt = (0, G.useRef)(null),
    Ht = (0, G.useRef)(null),
    Ut = (0, G.useRef)(!1),
    q = (0, G.useCallback)(
      (e, t, n, r = S) => {
        l.logProductEvent(
          ve,
          Fe({
            action: e,
            hasRunningCloudSession: z,
            hasRunningLocalSession: R,
            isNotificationTrayOpen: r,
            notification: n,
            notificationCount: P.length,
            selectedAvatar: f,
            source: t,
          }),
        );
      },
      [R, z, S, P.length, l, f],
    );
  ((0, G.useEffect)(() => {
    if (M == null) return;
    let e = re(Pt, []);
    e.includes(M.avatarId) || ue(Pt, [...e, M.avatarId]);
  }, [M]),
    (0, G.useEffect)(() => {
      Ut.current ||
        (l !== u &&
          ((Ut.current = !0),
          q(w.CODEX_AVATAR_OVERLAY_ACTION_OPENED, y.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)));
    }, [l, q]),
    $e({
      interactiveRegionRef: K,
      isPaused: () => B.current != null || V.current != null,
      onInteractiveChange: (e) => {
        v.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: e });
      },
      regionElementSelectors: It,
    }));
  let Wt = (0, G.useCallback)(() => {
      let i = mt(K.current, { includeInertSurfaces: !0 });
      if (i == null) return;
      let a = vt(K.current),
        s = ft({
          activityStackPresentation: L,
          isNotificationStackExpanded: b || S,
          measuredSurfaces: ht(K.current, r, { includeInert: !0 }),
          policies: Oe({
            activityStackPresentation: L,
            isNotificationStackExpanded: b || S,
            isQuickChatVisible: wt,
            showsNotificationBadge: F.length > 0,
          }),
        }),
        c = {
          ...E,
          ...Object.fromEntries(
            L.slots.flatMap(({ itemId: e, slotId: t }) => {
              let n = s.find((e) => e.id === t);
              return n == null ? [] : [[e, Math.ceil(n.rect.height)]];
            }),
          ),
        };
      if (!(0, kt.default)(E, c) && (Ze(c), b)) return;
      let l = {
          activityStackBackingLayoutHeight: a.backing,
          activityStackItems: I,
          activityStackPresentation: L,
          activityStackScrollOffset: D,
          activityStackVisibleLayoutHeight: a.visible,
          mascot: i.mascot,
          surfaces: s,
          tray: i.tray,
        },
        u = {
          contentState: {
            activities: F,
            activityStackBackingLayoutHeight: l.activityStackBackingLayoutHeight,
            activityStackItems: l.activityStackItems,
            activityStackPresentation: l.activityStackPresentation,
            activityStackScrollOffset: l.activityStackScrollOffset,
            activityStackVisibleLayoutHeight: l.activityStackVisibleLayoutHeight,
            expandedNotificationIds: Je,
            isDarkAppearance: o,
            isNotificationStackExpanded: S,
            isQuickChatVisible: wt,
            layout: _,
            locale: g.locale,
            notificationFollowUp: We,
            pointerSurfaceId: Re,
            quickChatDictation: { cleanupEnabled: e, streamingEnabled: t, supportState: n },
            quickChatDraft: Be,
            quickChatResetRevision: He,
          },
          measurements: l,
        };
      (0, kt.default)(u, Ht.current) ||
        ((Ht.current = u), v.dispatchMessage(`avatar-overlay-composition-changed`, { state: u }));
    }, [F, E, I, L, D, Je, g.locale, o, S, wt, _, b, We, Re, e, t, n, Be, He]),
    J = (0, G.useCallback)(() => {
      if (V.current != null || U.current != null) return;
      let e = mt(K.current);
      if (e == null) return;
      if (Ot(zt.current, e)) {
        if (b && Vt.current != null) return;
        (b || (Vt.current = null), Wt());
        return;
      }
      let t = zt.current == null;
      zt.current = e;
      let n = b && !t ? Bt.current + 1 : null;
      (n != null && (Bt.current = n),
        (Vt.current = n),
        v.dispatchMessage(`avatar-overlay-element-size-changed`, {
          ...(n == null ? {} : { elementSizeRevision: n }),
          mascot: e.mascot,
          tray: e.tray,
        }),
        t && Wt());
    }, [b, Wt]),
    Y = (0, G.useCallback)(() => {
      W.current != null && (window.clearTimeout(W.current), (W.current = null));
    }, []),
    Gt = (0, G.useCallback)(() => {
      (H.current != null && (window.cancelAnimationFrame(H.current), (H.current = null)),
        (Dt.current = null));
    }, []),
    Kt = (0, G.useCallback)((e) => {
      ((Dt.current = e),
        (H.current ??= window.requestAnimationFrame(() => {
          H.current = null;
          let e = Dt.current;
          ((Dt.current = null),
            !(e == null || V.current == null) &&
              v.dispatchMessage(`avatar-overlay-mascot-resize-move`, { width: e }));
        })));
    }, []),
    qt = (0, G.useCallback)(
      (e) => {
        ((U.current = e),
          Y(),
          (W.current = window.setTimeout(() => {
            ((W.current = null), (U.current = null), A(null), J());
          }, 100)));
      },
      [Y, J],
    ),
    Jt = (0, G.useCallback)(
      () => _t(K.current?.querySelector(`.codex-avatar-root`) ?? null)?.width ?? c ?? 112,
      [c],
    ),
    X = (0, G.useCallback)((e, t) => {
      let n = V.current;
      n == null ||
        n.pointerId !== e ||
        ((V.current = null), tt(!1), t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
    }, []),
    Z = (0, G.useCallback)(
      (e, t) => {
        let n = V.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : Tt(n, t);
        ((n.currentWidthPx = r),
          Gt(),
          A(r),
          ce(r),
          qt(r),
          v.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      },
      [Gt, ce, qt],
    ),
    Q = (0, G.useCallback)(
      (e, t) => {
        let n = B.current;
        if (n == null || n.pointerId !== e.pointerId) return;
        ((B.current = null), O(null));
        let r = null;
        (e.currentTarget instanceof HTMLElement
          ? (r = e.currentTarget)
          : e.target instanceof HTMLElement && (r = e.target),
          r?.hasPointerCapture?.(e.pointerId) && r.releasePointerCapture?.(e.pointerId));
        let {
          hasMoved: i,
          releaseSample: a,
          velocity: o,
        } = it(n, t ? ot(e) : void 0, !t && n.usesOrbPhysics);
        (t &&
          !i &&
          (q(w.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED, y.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT),
          oe()),
          i &&
            !n.hasMoved &&
            a != null &&
            v.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: a.screenX,
              pointerScreenY: a.screenY,
            }));
        let s = a ?? n;
        (v.dispatchMessage(`avatar-overlay-drag-end`, {
          pointerScreenX: s.screenX,
          pointerScreenY: s.screenY,
        }),
          n.usesOrbPhysics &&
            o != null &&
            v.dispatchMessage(`avatar-overlay-drag-release`, {
              shouldBounce: !0,
              velocityX: o.x * 3,
              velocityY: o.y * 3,
            }));
      },
      [h, oe, void 0, null, q],
    ),
    Yt = (e) => {
      if (
        e.button !== 0 ||
        e.ctrlKey ||
        !(e.target instanceof Element) ||
        e.target.closest(`.no-drag`) != null
      )
        return;
      (e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = h;
      ((B.current = {
        hasMoved: !1,
        pointerId: e.pointerId,
        samples: [ot(e)],
        screenX: e.screenX,
        screenY: e.screenY,
        usesOrbPhysics: t,
      }),
        O(null),
        v.dispatchMessage(`avatar-overlay-drag-start`, {
          pointerScreenX: e.screenX,
          pointerScreenY: e.screenY,
          pointerWindowX: e.clientX,
          pointerWindowY: e.clientY,
          usesOrbPhysics: t,
        }));
    },
    Xt = (e) => {
      let t = B.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = ot(e);
      t.samples = dt([...t.samples, n]);
      let r = n.screenX - t.screenX,
        i = n.screenY - t.screenY;
      (Math.abs(r) < 4 && Math.abs(i) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        t.usesOrbPhysics || (r >= 4 ? O(`running-right`) : r <= -4 && O(`running-left`)),
        v.dispatchMessage(`avatar-overlay-drag-move`, {
          pointerScreenX: n.screenX,
          pointerScreenY: n.screenY,
        }));
    },
    Zt = (e) => {
      if (e.button !== 0) return;
      (e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = Jt();
      (Y(),
        Gt(),
        (U.current = null),
        (V.current = {
          currentWidthPx: t,
          pointerId: e.pointerId,
          startScreenX: e.screenX,
          startWidthPx: t,
        }),
        A(t),
        tt(!0),
        v.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
    },
    Qt = (e) => {
      let t = V.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      (e.preventDefault(), e.stopPropagation());
      let n = Tt(t, e.screenX);
      ((t.currentWidthPx = n), A(n), Kt(n));
    },
    $t = (e) => {
      (Z(e.pointerId, e.screenX), X(e.pointerId, e.currentTarget));
    },
    en = (e) => {
      (e.stopPropagation(), Z(e.pointerId), X(e.pointerId, e.currentTarget));
    },
    tn = (e) => {
      (Z(e.pointerId), X(e.pointerId));
    },
    nn = (e, t) => {
      (e.action != null &&
        (t == null || t.intent === `open`) &&
        q(
          w.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          y.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          e,
        ),
        pe(e, t));
    },
    rn = (e, t) => {
      me(e, t);
    },
    an = (e) => {
      (q(
        w.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        y.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        e,
      ),
        yt((t) => {
          if (t.get(e.id) === e.turnKey) return t;
          let n = new Map(t);
          return (n.set(e.id, e.turnKey), n);
        }));
    },
    on = () => {
      (q(
        w.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        y.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        void 0,
        !0,
      ),
        v.dispatchMessage(`avatar-overlay-composition-surface-action`, {
          action: { type: `open-notification-stack` },
        }),
        C(!0));
    },
    sn = (e, t) => {
      Ye((n) => (t ? (n.includes(e) ? n : [...n, e]) : n.filter((t) => t !== e)));
    },
    cn = (e) => {
      let t = P.find(({ id: t }) => t === e);
      if (t != null) {
        if (!S && P.length > 1) {
          on();
          return;
        }
        nn(t);
      }
    },
    ln = async (e) => {
      if (!d) return;
      let t = e.trim();
      t.length !== 0 && (await he(t), Ve(``), Ue((e) => e + 1));
    },
    $ = (0, G.useCallback)((e) => {
      v.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, { isInteractive: e });
    }, []),
    un = (e, t, n = !0) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
          (T(null), n && $(!1));
          return;
        case `open-follow-up`:
          if (!e.isLoading || r == null) return;
          (T({ notificationId: e.id, submissionStatus: `idle`, turnKey: e.turnKey }), n && $(!0));
          return;
        case `stop`:
          if (r == null) return;
          (T(null),
            Promise.resolve(fe(e, t)).catch(() => {
              ge.get(ke).danger(
                g.formatMessage({
                  id: `avatarOverlay.stopNotificationError`,
                  defaultMessage: `Unable to stop activity`,
                  description: `Error shown when stopping a running activity from the floating avatar overlay fails`,
                }),
              );
            }));
          return;
        case `submit-follow-up`: {
          let i = t.prompt.trim();
          if (r == null || i.length === 0) return;
          (T((t) =>
            t?.notificationId === e.id && t.turnKey === e.turnKey
              ? { ...t, submissionStatus: `submitting` }
              : t,
          ),
            Promise.resolve(fe(e, { type: `submit-follow-up`, prompt: i }))
              .then(() => {
                (T((t) => (t?.notificationId === e.id && t.turnKey === e.turnKey ? null : t)),
                  n && $(!1));
              })
              .catch(() => {
                T((t) =>
                  t?.notificationId === e.id && t.turnKey === e.turnKey
                    ? { ...t, submissionStatus: `error` }
                    : t,
                );
              }));
          return;
        }
      }
    };
  return (
    Ae(
      `avatar-overlay-composition-action`,
      ({ action: e }) => {
        switch (e.type) {
          case `activate-notification`:
            cn(e.notificationId);
            return;
          case `activity-stack-scroll-offset-changed`:
            Qe(e.offset);
            return;
          case `close-notification-stack`:
            C(!1);
            return;
          case `composition-pointer-surface-changed`:
            ze(e.surfaceId);
            return;
          case `open-notification-stack`:
            C(!0);
            return;
          case `notification-expansion-changed`:
            sn(e.notificationId, e.isExpanded);
            return;
          case `quick-chat-active-changed`:
            return;
          case `quick-chat-draft-changed`:
            if (!d) return;
            Ve(e.draft);
            return;
          case `quick-chat-surface-hover-changed`:
            if (!d) return;
            Le(e.isHovered);
            return;
          case `quick-chat-visibility-changed`:
            if (!d) return;
            Pe(e.isVisible);
            return;
          case `scroll-activity-stack`:
            Qe((t) =>
              be({
                contentHeight: L.contentHeight,
                deltaY: e.deltaY,
                scrollOffset: t,
                viewportHeight: L.viewportRect.height,
              }),
            );
            return;
          case `submit-quick-chat`:
            ln(e.prompt);
            return;
          case `dismiss-notification`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t != null && an(t);
            return;
          }
          case `run-notification-control`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t == null ? e.action.type === `close-follow-up` && T(null) : un(t, e.action, !1);
            return;
          }
          case `run-notification-action`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t != null && nn(t, e.action);
            return;
          }
          case `submit-question-option`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t != null && rn(t, e.option);
          }
        }
      },
      [S, P],
    ),
    Ae(
      `avatar-overlay-layout-changed`,
      ({ elementSizeRevision: e, layout: t, nativeMaterialAttached: n }) => {
        (e === Vt.current && (Vt.current = null),
          xe(t),
          we(n),
          U.current === t.mascot.width && ((U.current = null), Y(), A(null)));
      },
      [Y],
    ),
    (0, G.useLayoutEffect)(() => {
      let e = (!_e && st) || et;
      return (
        document.documentElement.classList.toggle(Lt, e),
        document.body.classList.toggle(Lt, e),
        () => {
          (document.documentElement.classList.remove(Lt), document.body.classList.remove(Lt));
        }
      );
    }, [_e, st, et]),
    (0, G.useEffect)(
      () => () => {
        (Y(), Gt());
      },
      [Gt, Y],
    ),
    (0, G.useEffect)(() => {
      let e = (e) => {
          (Q(e, !0), Z(e.pointerId, e.screenX), X(e.pointerId));
        },
        t = (e) => {
          (Q(e, !1), Z(e.pointerId), X(e.pointerId));
        };
      return (
        window.addEventListener(`pointerup`, e),
        window.addEventListener(`pointercancel`, t),
        () => {
          (window.removeEventListener(`pointerup`, e),
            window.removeEventListener(`pointercancel`, t));
        }
      );
    }, [Z, Q, X]),
    (0, G.useLayoutEffect)(() => {
      let e = null,
        t = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), J());
          });
        },
        n = new ResizeObserver(t),
        r = K.current;
      if (r != null) {
        n.observe(r);
        for (let e of gt(r)) n.observe(e);
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
    }, [J, f.id, Ct]),
    (0, G.useLayoutEffect)(() => {
      J();
    }, [S, _, J, f.id, Ct, c]),
    (0, G.useEffect)(() => {
      if (N == null) return;
      let e = Math.max(0, N - Date.now()),
        t = window.setTimeout(() => {
          bt((e) => Math.max(Date.now(), e + 1));
        }, e);
      return () => {
        window.clearTimeout(t);
      };
    }, [N]),
    (0, G.useEffect)(() => {
      if (!R && !z) return;
      let e = window.setTimeout(() => {
        (bt((e) => Math.max(Date.now(), e + 1)), R && le(), z && m());
      }, jt);
      return () => {
        window.clearTimeout(e);
      };
    }, [R, z, le, m]),
    (0, At.jsx)(Ke, {
      activityCopies: F.map(({ copy: e }) => e),
      activityStackPresentation: L,
      areActivityPillsVisible: x,
      avatar: f,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: Ce({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (q(
              w.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              y.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              ae());
          },
        },
      ],
      globalDictationOrbEnabled: a,
      interactiveRegionRef: K,
      isNotificationTrayOpen: S,
      layout: _,
      mascotDragState: rt,
      nativeMaterialAttached: b,
      expandedNotificationIds: Je,
      notificationStackContentExpanded: b ? !0 : void 0,
      mascotLayout:
        et && k != null ? { ..._.mascot, height: Math.ceil(k / Xe), width: k } : _.mascot,
      mascotResizeHandle: _e
        ? void 0
        : {
            onLostPointerCapture: tn,
            onPointerCancel: en,
            onPointerDown: Zt,
            onPointerEnter: () => {
              ut(!0);
            },
            onPointerLeave: () => {
              ut(!1);
            },
            onPointerMove: Qt,
            onPointerUp: $t,
          },
      mascotStyle: qe(k ?? c),
      notifications: P,
      pointerSurfaceId: Re,
      quickChatDictation: { cleanupEnabled: e, streamingEnabled: t, supportState: n },
      onActivityStackScroll: (e) => {
        Qe((t) =>
          be({
            contentHeight: L.contentHeight,
            deltaY: e,
            scrollOffset: t,
            viewportHeight: L.viewportRect.height,
          }),
        );
      },
      onActivateNotification: cn,
      onHideActivityPills: () => {
        if (($(!1), S && P.length > 1)) {
          (q(
            w.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
            y.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !1,
          ),
            v.dispatchMessage(`avatar-overlay-composition-surface-action`, {
              action: { type: `close-notification-stack` },
            }),
            C(!1));
          return;
        }
        (C(!1), Te(!1));
      },
      onMascotLostPointerCapture: (e) => {
        Q(e, !1);
      },
      onMascotPointerCancel: (e) => {
        Q(e, !1);
      },
      onMascotPointerDown: Yt,
      onMascotPointerMove: Xt,
      onMascotPointerUp: (e) => {
        Q(e, !0);
      },
      onNotificationExpansionChange: sn,
      onDismissNotification: an,
      notificationFollowUp: We,
      onQuickChatEditorActiveChange: $,
      onQuickChatDraftChange: d ? Ve : void 0,
      onQuickChatVisibilityChange: d ? je : void 0,
      onRunNotificationControl: un,
      onRunNotificationAction: nn,
      onSubmitQuestionOption: rn,
      onSubmitQuickChat: ln,
      onShowActivityPills: () => {
        Te(!0);
      },
      quickChatDraft: Be,
      quickChatVisible: wt,
      restrictedSurface: void 0,
      renderMode: { type: `native-root` },
    })
  );
}
function Tt(e, t) {
  return Je(e.startWidthPx + t - e.startScreenX);
}
function Et(e, t) {
  return D(e, t) || re(Pt, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function Dt(e, t) {
  return D(e, t) ? `pending-custom-avatar` : `ready`;
}
function Ot(e, t) {
  return (
    e != null &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    U(e.tray, t.tray)
  );
}
function U(e, t) {
  return e === t || (e != null && t != null && e.width === t.width && e.height === t.height);
}
var W, kt, G, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt;
e(() => {
  ((W = S()),
    xe(),
    (kt = t(ae(), 1)),
    a(),
    he(),
    (G = t(ne(), 1)),
    _(),
    ze(),
    fe(),
    oe(),
    me(),
    g(),
    ye(),
    Pe(),
    Ie(),
    Qe(),
    m(),
    ge(),
    Be(),
    et(),
    _e(),
    s(),
    f(),
    n(),
    le(),
    Ve(),
    d(),
    Te(),
    we(),
    Ue(),
    pt(),
    tt(),
    O(),
    ut(),
    Ye(),
    wt(),
    We(),
    rt(),
    T(),
    k(),
    (At = o()),
    (jt = 15e3),
    (Mt = 208),
    (Nt = []),
    (Pt = `first-awake-pet-notification-avatar-ids`),
    (Ft = {
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
    (It = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`]),
    (Lt = `codex-avatar-overlay-force-resize-cursor`),
    (Rt = {
      mascot: { left: 244, top: 207, width: 112, height: 121 },
      placement: `top-end`,
      tray: { left: 19.5, top: 70, width: 345, height: 120 },
      viewport: { width: 384, height: 400 },
    }));
})();
export { B as AvatarOverlayNativePage };
//# sourceMappingURL=avatar-overlay-native-page.js.map
