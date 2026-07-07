import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $a as n,
  At as r,
  Bt as i,
  El as a,
  Ja as o,
  K as s,
  Qa as c,
  Rt as l,
  Tl as u,
  W as d,
  Xa as ee,
  Xs as f,
  ec as te,
  jt as ne,
  kt as p,
  nc as re,
  rc as m,
  tc as ie,
  vl as h,
  zt as ae,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  Hw as g,
  Vw as oe,
  b_ as se,
  bm as ce,
  e_ as le,
  t_ as ue,
  x_ as de,
  xm as fe,
} from "./app-initial~app-main~onboarding-page.js";
import {
  $h as pe,
  Gd as me,
  H as he,
  Ib as ge,
  If as _,
  Jd as _e,
  Jn as v,
  Mf as y,
  Nf as ve,
  P as ye,
  Rb as b,
  Sg as x,
  Yd as be,
  Yn as S,
  _r as xe,
  _x as Se,
  cx as Ce,
  fv as we,
  lx as Te,
  pv as C,
  px as Ee,
  vg as w,
  wx as De,
  xg as T,
  yg as Oe,
  yx as ke,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { bt as Ae, yt as je } from "./app-initial~app-main~automations-page.js";
import {
  Al as Me,
  Ca as Ne,
  Ml as Pe,
  Sa as Fe,
  Xl as Ie,
  io as Le,
  to as Re,
  zl as ze,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  L as Be,
  z as Ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import { i as He, n as Ue, r as We, t as Ge } from "./avatar-overlay-native-frame.js";
import {
  a as Ke,
  f as E,
  i as qe,
  o as Je,
  r as Ye,
  s as Xe,
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
    i = t == null,
    a,
    o;
  (e[0] === i
    ? ((a = e[1]), (o = e[2]))
    : ((a = () => {
        i && r.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: !1 });
      }),
      (o = [i]),
      (e[0] = i),
      (e[1] = a),
      (e[2] = o)),
    (0, G.useEffect)(a, o));
  let s, c;
  if (
    (e[3] === i
      ? ((s = e[4]), (c = e[5]))
      : ((s = () => {
          i && r.dispatchMessage(`avatar-overlay-composition-changed`, { state: null });
        }),
        (c = [i]),
        (e[3] = i),
        (e[4] = s),
        (e[5] = c)),
    (0, G.useLayoutEffect)(s, c),
    t == null)
  )
    return null;
  let l;
  e[6] !== t || e[7] !== n ? ((l = Dt(t, n)), (e[6] = t), (e[7] = n), (e[8] = l)) : (l = e[8]);
  let u;
  return (
    e[9] !== t || e[10] !== n || e[11] !== l
      ? ((u = (0, At.jsx)(V, { selectedAvatar: t, selectedAvatarId: n }, l)),
        (e[9] = t),
        (e[10] = n),
        (e[11] = l),
        (e[12] = u))
      : (u = e[12]),
    u
  );
}
function V({ selectedAvatar: e, selectedAvatarId: t }) {
  let n = ie(l),
    i = De(),
    a = Ne() === !0,
    o = b(`451951815`),
    c = b(`665486075`),
    u = b(`1380537759`),
    d = b(oe),
    ee = fe(s),
    f = re(be),
    { mascotWidthPx: te, setMascotWidthPx: ne } = Xe(),
    { data: p = [], refetch: m } = he(),
    { data: h = [], refetch: ae } = Ie({ taskFilter: `current`, limit: 20 }),
    g = Pe(),
    se = ze(),
    ce = Ze({
      includeCompactWaitingRequests: o,
      includeMcpElicitationCancelAction: !0,
      intl: i,
      localConversations: p,
      excludedConversationId: null,
      remoteTasks: h,
    });
  return (0, At.jsx)(H, {
    isDarkAppearance: a,
    dictationCleanupEnabled: !1,
    dictationStreamingEnabled: d,
    dictationSupportState: ee,
    latestTurnItems: (e) => (e == null ? void 0 : n.get(xe, e)?.items),
    mascotWidthPx: te,
    productLogger: f,
    globalDictationOrbEnabled: u,
    quickChatEnabled: c,
    selectedAvatar: e,
    selectedAvatarId: t,
    sessions: ce,
    onClosePet: () => {
      r.dispatchMessage(`avatar-overlay-close`, {});
    },
    onMascotClick: () => {
      r.dispatchMessage(`open-current-main-window`, {});
    },
    onMascotWidthChange: ne,
    onRefreshLocalSessions: m,
    onRefreshRemoteSessions: ae,
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
              (await C(`interrupt-conversation`, {
                conversationId: r.conversationId,
                initiatedBy: `user`,
              }),
                Promise.resolve(m()).catch(() => {}));
              return;
            case `cloud-task`:
              (await g.mutateAsync(r.taskId), Promise.resolve(ae()).catch(() => {}));
              return;
          }
        case `submit-follow-up`: {
          let e = t.prompt.trim();
          if (r == null || e.length === 0) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await C(`send-follow-up-message`, {
                conversationId: r.conversationId,
                prompt: e,
                serviceTier: await de(n, n.get(v, r.conversationId) ?? `local`, null),
              }),
                Promise.resolve(m()).catch(() => {}));
              return;
            case `cloud-task`:
              (await se.mutateAsync({
                taskId: r.taskId,
                turnId: r.turnId,
                prompt: e,
                ideContext: ``,
                runEnvironmentInQaMode: !1,
                priorConversation: null,
                images: null,
              }),
                Promise.resolve(ae()).catch(() => {}));
              return;
          }
        }
      }
    },
    onRunNotificationAction: (e, t) => {
      let i = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let r = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (t.commandDecision != null && (i?.kind === `exec` || i?.kind === `network`)) {
              C(`reply-with-command-execution-approval-decision`, {
                conversationId: r,
                requestId: i.requestId,
                decision: t.commandDecision,
              }).then(() => {
                m();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && i?.kind === `patch`) {
              C(`reply-with-file-change-approval-decision`, {
                conversationId: r,
                requestId: i.requestId,
                decision: t.fileDecision,
              }).then(() => {
                m();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && i?.kind === `permission`) {
              C(`reply-with-permissions-request-approval-response`, {
                conversationId: r,
                requestId: i.requestId,
                response: t.permissionResponse,
              }).then(() => {
                m();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && i?.kind === `tool`) {
              C(`reply-with-mcp-server-elicitation-response`, {
                conversationId: r,
                requestId: i.requestId,
                response: T(t.mcpElicitationAction),
              }).then(() => {
                m();
              });
              return;
            }
            break;
          case `plan-start`:
            if (i?.kind === `plan` && t.planStartCollaborationMode != null) {
              C(`update-thread-settings-for-next-turn`, {
                conversationId: r,
                threadSettings: { collaborationMode: t.planStartCollaborationMode },
              })
                .then(() =>
                  C(`remove-plan-implementation-request`, { conversationId: r, turnId: i.turnId }),
                )
                .then(async () =>
                  C(`send-follow-up-message`, {
                    conversationId: r,
                    prompt: `${w}\n${i.planContent}`,
                    serviceTier: await de(
                      n,
                      n.get(v, r) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  m();
                });
              return;
            }
            break;
          case `open`:
            break;
        }
      }
      (t != null && t.intent !== `open`) ||
        (e.action != null && r.dispatchMessage(`open-in-main-window`, { path: e.action.path }));
    },
    onSubmitQuestionOption: (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        C(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          m();
        });
    },
    onSubmitQuickChat: async (e) => {
      (await le({
        model: void 0,
        prompt: e,
        scope: n,
        target: { type: `projectless` },
        thinking: void 0,
      }),
        await m());
    },
  });
}
function H({
  dictationCleanupEnabled: e,
  dictationStreamingEnabled: t,
  dictationSupportState: i,
  firstAwakeNotificationEnabled: a = !0,
  globalDictationOrbEnabled: s = !1,
  isDarkAppearance: u,
  latestTurnItems: d,
  mascotWidthPx: f,
  productLogger: p,
  quickChatEnabled: m,
  selectedAvatar: h,
  selectedAvatarId: ae,
  sessions: g,
  onClosePet: oe,
  onMascotClick: se,
  onMascotWidthChange: ce,
  onRefreshLocalSessions: le,
  onRefreshRemoteSessions: ue,
  onRunNotificationControl: de,
  onRunNotificationAction: fe,
  onSubmitQuestionOption: pe,
  onSubmitQuickChat: me,
}) {
  let he = ie(l),
    ge = re(nt),
    v = Ft.phase !== `inactive` && !0;
  te(xe, void 0);
  let { data: ye } = Le({ enabled: v, hostId: void 0 }),
    b = De(),
    [x, be] = (0, G.useState)(Rt),
    [S, we] = (0, G.useState)(!1),
    [Te, C] = (0, G.useState)(!0),
    [w, T] = (0, G.useState)(!1),
    [Oe, ke] = (0, G.useState)(!1),
    [Ae, Me] = (0, G.useState)(!1),
    [Ne, Pe] = (0, G.useState)(!1),
    [Fe, Ie] = (0, G.useState)(null),
    [Re, ze] = (0, G.useState)(``),
    [Be, He] = (0, G.useState)(0),
    [Ue, E] = (0, G.useState)(null),
    [qe, Je] = (0, G.useState)([]),
    [Xe, Ze] = (0, G.useState)({}),
    [D, Qe] = (0, G.useState)(0),
    [et, tt] = (0, G.useState)(!1),
    [rt, O] = (0, G.useState)(null),
    [st, ut] = (0, G.useState)(!1),
    [k, A] = (0, G.useState)(null),
    [pt, yt] = (0, G.useState)(() => new Map()),
    [j, bt] = (0, G.useState)(() => Date.now()),
    [M] = (0, G.useState)(() => (a ? Et(h, ae) : null)),
    xt = M == null ? null : lt({ intl: b, petName: M.petName, startedAtMs: M.startedAtMs }),
    St = [],
    { nextNotificationExpiresAtMs: N, notifications: P } = at({
      dismissedNotificationTurnKeys: pt,
      extraNotifications: v ? [...[], ...St] : xt == null ? [] : [xt],
      latestActivityFirst: !0,
      nowMs: j,
      sessions: v ? [] : g,
    }),
    F = P.map((e) => ({
      copy: We({
        intl: b,
        latestTurnItems:
          e.source === `local` && !e.id.startsWith(`realtime-`) ? d(e.localConversationId) : void 0,
        notification: e,
        notificationCount: P.length,
      }),
      notification: e,
    })),
    Ct = ct(P, b),
    I = Te ? P.map(({ id: e }) => ({ height: Xe[e] ?? 54, id: e })) : Nt,
    L = c({
      expanded: S || w,
      items: I,
      scrollOffset: D,
      viewportRect: { height: Mt, left: 0, top: 0, width: 345 },
    }),
    R = g.some((e) => e.source !== `cloud` && e.status === `running`),
    z = g.some((e) => e.source === `cloud` && e.status === `running`),
    wt = m && (Oe || Ae || Ne),
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
      (e, t, n, r = w) => {
        p.logProductEvent(
          ve,
          je({
            action: e,
            hasRunningCloudSession: z,
            hasRunningLocalSession: R,
            isNotificationTrayOpen: r,
            notification: n,
            notificationCount: P.length,
            selectedAvatar: h,
            source: t,
          }),
        );
      },
      [R, z, w, P.length, p, h],
    );
  ((0, G.useEffect)(() => {
    if (M == null) return;
    let e = Ce(Pt, []);
    e.includes(M.avatarId) || Ee(Pt, [...e, M.avatarId]);
  }, [M]),
    (0, G.useEffect)(() => {
      Ut.current ||
        (p !== _e &&
          ((Ut.current = !0),
          q(y.CODEX_AVATAR_OVERLAY_ACTION_OPENED, _.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)));
    }, [p, q]),
    $e({
      interactiveRegionRef: K,
      isPaused: () => B.current != null || V.current != null,
      onInteractiveChange: (e) => {
        r.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: e });
      },
      regionElementSelectors: It,
    }));
  let Wt = (0, G.useCallback)(() => {
      let n = mt(K.current, { includeInertSurfaces: !0 });
      if (n == null) return;
      let a = vt(K.current),
        s = ft({
          activityStackPresentation: L,
          isNotificationStackExpanded: S || w,
          measuredSurfaces: ht(K.current, o, { includeInert: !0 }),
          policies: ee({
            activityStackPresentation: L,
            isNotificationStackExpanded: S || w,
            isQuickChatVisible: wt,
            showsNotificationBadge: F.length > 0,
          }),
        }),
        c = {
          ...Xe,
          ...Object.fromEntries(
            L.slots.flatMap(({ itemId: e, slotId: t }) => {
              let n = s.find((e) => e.id === t);
              return n == null ? [] : [[e, Math.ceil(n.rect.height)]];
            }),
          ),
        };
      if (!(0, kt.default)(Xe, c) && (Ze(c), S)) return;
      let l = {
          activityStackBackingLayoutHeight: a.backing,
          activityStackItems: I,
          activityStackPresentation: L,
          activityStackScrollOffset: D,
          activityStackVisibleLayoutHeight: a.visible,
          mascot: n.mascot,
          surfaces: s,
          tray: n.tray,
        },
        d = {
          contentState: {
            activities: F,
            activityStackBackingLayoutHeight: l.activityStackBackingLayoutHeight,
            activityStackItems: l.activityStackItems,
            activityStackPresentation: l.activityStackPresentation,
            activityStackScrollOffset: l.activityStackScrollOffset,
            activityStackVisibleLayoutHeight: l.activityStackVisibleLayoutHeight,
            expandedNotificationIds: qe,
            isDarkAppearance: u,
            isNotificationStackExpanded: w,
            isQuickChatVisible: wt,
            layout: x,
            locale: b.locale,
            notificationFollowUp: Ue,
            pointerSurfaceId: Fe,
            quickChatDictation: { cleanupEnabled: e, streamingEnabled: t, supportState: i },
            quickChatDraft: Re,
            quickChatResetRevision: Be,
          },
          measurements: l,
        };
      (0, kt.default)(d, Ht.current) ||
        ((Ht.current = d), r.dispatchMessage(`avatar-overlay-composition-changed`, { state: d }));
    }, [F, Xe, I, L, D, qe, b.locale, u, w, wt, x, S, Ue, Fe, e, t, i, Re, Be]),
    J = (0, G.useCallback)(() => {
      if (V.current != null || U.current != null) return;
      let e = mt(K.current);
      if (e == null) return;
      if (Ot(zt.current, e)) {
        if (S && Vt.current != null) return;
        (S || (Vt.current = null), Wt());
        return;
      }
      let t = zt.current == null;
      zt.current = e;
      let n = S && !t ? Bt.current + 1 : null;
      (n != null && (Bt.current = n),
        (Vt.current = n),
        r.dispatchMessage(`avatar-overlay-element-size-changed`, {
          ...(n == null ? {} : { elementSizeRevision: n }),
          mascot: e.mascot,
          tray: e.tray,
        }),
        t && Wt());
    }, [S, Wt]),
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
              r.dispatchMessage(`avatar-overlay-mascot-resize-move`, { width: e }));
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
      () => _t(K.current?.querySelector(`.codex-avatar-root`) ?? null)?.width ?? f ?? 112,
      [f],
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
        let i = t == null ? n.currentWidthPx : Tt(n, t);
        ((n.currentWidthPx = i),
          Gt(),
          A(i),
          ce(i),
          qt(i),
          r.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: i }));
      },
      [Gt, ce, qt],
    ),
    Q = (0, G.useCallback)(
      (e, t) => {
        let n = B.current;
        if (n == null || n.pointerId !== e.pointerId) return;
        ((B.current = null), O(null));
        let i = null;
        (e.currentTarget instanceof HTMLElement
          ? (i = e.currentTarget)
          : e.target instanceof HTMLElement && (i = e.target),
          i?.hasPointerCapture?.(e.pointerId) && i.releasePointerCapture?.(e.pointerId));
        let {
          hasMoved: a,
          releaseSample: o,
          velocity: s,
        } = it(n, t ? ot(e) : void 0, !t && n.usesOrbPhysics);
        (t &&
          !a &&
          (q(y.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED, _.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT),
          se()),
          a &&
            !n.hasMoved &&
            o != null &&
            r.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: o.screenX,
              pointerScreenY: o.screenY,
            }));
        let c = o ?? n;
        (r.dispatchMessage(`avatar-overlay-drag-end`, {
          pointerScreenX: c.screenX,
          pointerScreenY: c.screenY,
        }),
          n.usesOrbPhysics &&
            s != null &&
            r.dispatchMessage(`avatar-overlay-drag-release`, {
              shouldBounce: !0,
              velocityX: s.x * 3,
              velocityY: s.y * 3,
            }));
      },
      [v, se, void 0, null, q],
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
      let t = v;
      ((B.current = {
        hasMoved: !1,
        pointerId: e.pointerId,
        samples: [ot(e)],
        screenX: e.screenX,
        screenY: e.screenY,
        usesOrbPhysics: t,
      }),
        O(null),
        r.dispatchMessage(`avatar-overlay-drag-start`, {
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
      let i = n.screenX - t.screenX,
        a = n.screenY - t.screenY;
      (Math.abs(i) < 4 && Math.abs(a) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        t.usesOrbPhysics || (i >= 4 ? O(`running-right`) : i <= -4 && O(`running-left`)),
        r.dispatchMessage(`avatar-overlay-drag-move`, {
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
        r.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
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
          y.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          _.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          e,
        ),
        fe(e, t));
    },
    rn = (e, t) => {
      pe(e, t);
    },
    an = (e) => {
      (q(
        y.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        _.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
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
        y.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        _.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        void 0,
        !0,
      ),
        r.dispatchMessage(`avatar-overlay-composition-surface-action`, {
          action: { type: `open-notification-stack` },
        }),
        T(!0));
    },
    sn = (e, t) => {
      Je((n) => (t ? (n.includes(e) ? n : [...n, e]) : n.filter((t) => t !== e)));
    },
    cn = (e) => {
      let t = P.find(({ id: t }) => t === e);
      if (t != null) {
        if (!w && P.length > 1) {
          on();
          return;
        }
        nn(t);
      }
    },
    ln = async (e) => {
      if (!m) return;
      let t = e.trim();
      t.length !== 0 && (await me(t), ze(``), He((e) => e + 1));
    },
    $ = (0, G.useCallback)((e) => {
      r.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, { isInteractive: e });
    }, []),
    un = (e, t, n = !0) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
          (E(null), n && $(!1));
          return;
        case `open-follow-up`:
          if (!e.isLoading || r == null) return;
          (E({ notificationId: e.id, submissionStatus: `idle`, turnKey: e.turnKey }), n && $(!0));
          return;
        case `stop`:
          if (r == null) return;
          (E(null),
            Promise.resolve(de(e, t)).catch(() => {
              he.get(Ve).danger(
                b.formatMessage({
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
          (E((t) =>
            t?.notificationId === e.id && t.turnKey === e.turnKey
              ? { ...t, submissionStatus: `submitting` }
              : t,
          ),
            Promise.resolve(de(e, { type: `submit-follow-up`, prompt: i }))
              .then(() => {
                (E((t) => (t?.notificationId === e.id && t.turnKey === e.turnKey ? null : t)),
                  n && $(!1));
              })
              .catch(() => {
                E((t) =>
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
    ne(
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
            T(!1);
            return;
          case `composition-pointer-surface-changed`:
            Ie(e.surfaceId);
            return;
          case `open-notification-stack`:
            T(!0);
            return;
          case `notification-expansion-changed`:
            sn(e.notificationId, e.isExpanded);
            return;
          case `quick-chat-active-changed`:
            return;
          case `quick-chat-draft-changed`:
            if (!m) return;
            ze(e.draft);
            return;
          case `quick-chat-surface-hover-changed`:
            if (!m) return;
            Pe(e.isHovered);
            return;
          case `quick-chat-visibility-changed`:
            if (!m) return;
            Me(e.isVisible);
            return;
          case `scroll-activity-stack`:
            Qe((t) =>
              n({
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
            t == null ? e.action.type === `close-follow-up` && E(null) : un(t, e.action, !1);
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
      [w, P],
    ),
    ne(
      `avatar-overlay-layout-changed`,
      ({ elementSizeRevision: e, layout: t, nativeMaterialAttached: n }) => {
        (e === Vt.current && (Vt.current = null),
          be(t),
          we(n),
          U.current === t.mascot.width && ((U.current = null), Y(), A(null)));
      },
      [Y],
    ),
    (0, G.useLayoutEffect)(() => {
      let e = (!ge && st) || et;
      return (
        document.documentElement.classList.toggle(Lt, e),
        document.body.classList.toggle(Lt, e),
        () => {
          (document.documentElement.classList.remove(Lt), document.body.classList.remove(Lt));
        }
      );
    }, [ge, st, et]),
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
    }, [J, h.id, Ct]),
    (0, G.useLayoutEffect)(() => {
      J();
    }, [w, x, J, h.id, Ct, f]),
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
        (bt((e) => Math.max(Date.now(), e + 1)), R && le(), z && ue());
      }, jt);
      return () => {
        window.clearTimeout(e);
      };
    }, [R, z, le, ue]),
    (0, At.jsx)(Ge, {
      activityCopies: F.map(({ copy: e }) => e),
      activityStackPresentation: L,
      areActivityPillsVisible: Te,
      avatar: h,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: Se({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (q(
              y.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              _.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              oe());
          },
        },
      ],
      globalDictationOrbEnabled: s,
      interactiveRegionRef: K,
      isNotificationTrayOpen: w,
      layout: x,
      mascotDragState: rt,
      nativeMaterialAttached: S,
      expandedNotificationIds: qe,
      notificationStackContentExpanded: S ? !0 : void 0,
      mascotLayout:
        et && k != null ? { ...x.mascot, height: Math.ceil(k / Ye), width: k } : x.mascot,
      mascotResizeHandle: ge
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
      mascotStyle: Ke(k ?? f),
      notifications: P,
      pointerSurfaceId: Fe,
      quickChatDictation: { cleanupEnabled: e, streamingEnabled: t, supportState: i },
      onActivityStackScroll: (e) => {
        Qe((t) =>
          n({
            contentHeight: L.contentHeight,
            deltaY: e,
            scrollOffset: t,
            viewportHeight: L.viewportRect.height,
          }),
        );
      },
      onActivateNotification: cn,
      onHideActivityPills: () => {
        if (($(!1), w && P.length > 1)) {
          (q(
            y.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
            _.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !1,
          ),
            r.dispatchMessage(`avatar-overlay-composition-surface-action`, {
              action: { type: `close-notification-stack` },
            }),
            T(!1));
          return;
        }
        (T(!1), C(!1));
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
      notificationFollowUp: Ue,
      onQuickChatEditorActiveChange: $,
      onQuickChatDraftChange: m ? ze : void 0,
      onQuickChatVisibilityChange: m ? ke : void 0,
      onRunNotificationControl: un,
      onRunNotificationAction: nn,
      onSubmitQuestionOption: rn,
      onSubmitQuickChat: ln,
      onShowActivityPills: () => {
        C(!0);
      },
      quickChatDraft: Re,
      quickChatVisible: wt,
      restrictedSurface: void 0,
      renderMode: { type: `native-root` },
    })
  );
}
function Tt(e, t) {
  return qe(e.startWidthPx + t - e.startScreenX);
}
function Et(e, t) {
  return D(e, t) || Ce(Pt, []).includes(e.id)
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
  ((W = u()),
    pe(),
    (kt = t(m(), 1)),
    f(),
    i(),
    (G = t(a(), 1)),
    ke(),
    ue(),
    ye(),
    S(),
    we(),
    x(),
    Oe(),
    se(),
    Ae(),
    Qe(),
    Me(),
    Be(),
    ce(),
    et(),
    p(),
    me(),
    Re(),
    ae(),
    d(),
    g(),
    ge(),
    Te(),
    Fe(),
    He(),
    pt(),
    tt(),
    O(),
    ut(),
    Je(),
    wt(),
    Ue(),
    rt(),
    E(),
    k(),
    (At = h()),
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
