import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $c as n,
  Eo as r,
  Fi as i,
  Gc as a,
  Ht as o,
  Mi as s,
  Mo as c,
  Ni as l,
  Pi as u,
  Tt as d,
  Ut as f,
  Wc as p,
  Wt as m,
  bt as h,
  kl as g,
  lo as ee,
  tc as _,
  wt as v,
  xl as te,
  yt as ne,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  At as re,
  B as ie,
  Cl as ae,
  H as oe,
  Ll as se,
  U as ce,
  al as le,
  cl as ue,
  ht as de,
  il as y,
  kl as fe,
  ll as pe,
  nn as me,
  pl as he,
  pt as ge,
  rn as _e,
  sl as ve,
  tl as ye,
  tt as be,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { C as xe } from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  Et as Se,
  Fn as Ce,
  Ln as we,
  Rn as Te,
  wt as Ee,
  xt as De,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
function Oe(e, t) {
  if (!t.isEnabled || e == null) return null;
  let n = Me(e),
    r = Pe(n),
    i = Ne(r, t),
    a = Math.round(t.width * i),
    o = Math.round(t.height * i),
    s = { x: Math.round(n.x + Math.max(w, (n.width - a) / 2)), y: n.y, width: a, height: o };
  return {
    fitHeight: r.height,
    fitWidth: r.width,
    scale: i,
    stageBounds: n,
    visualBounds: s,
    webviewBounds: { x: s.x, y: s.y, width: t.width, height: t.height },
  };
}
function ke(e) {
  if (e == null) return { width: T.width, height: T.height };
  let t = Pe(Me(e));
  return { width: b(t.width), height: x(t.height) };
}
function Ae(e) {
  return e + w * 2;
}
function je({ fitHeight: e, height: t, width: n }) {
  return Ae(n * Math.min(1, e / t));
}
function Me(e) {
  return { x: e.x, y: e.y + 34, width: e.width, height: Math.max(0, e.height - 34) };
}
function Ne(e, t) {
  return Math.min(1, e.width / t.width, e.height / t.height);
}
function Pe(e) {
  return { width: Math.max(0, e.width - w * 2), height: Math.max(0, e.height - w) };
}
function Fe({ drag: e, fitHeight: t, fitWidth: n, pointerX: r, pointerY: i, scale: a }) {
  let o = e.edge === `bottom` || e.edge === `bottom-left` || e.edge === `bottom-right`,
    s = e.edge !== `bottom`,
    c = e.edge === `left` || e.edge === `bottom-left` ? -1 : 1;
  return {
    width: s
      ? b(Re({ fitSize: n, rawSize: e.startWidth + ((r - e.startPointerX) * c * 2) / a, scale: a }))
      : e.startWidth,
    height: o
      ? x(Re({ fitSize: t, rawSize: e.startHeight + (i - e.startPointerY) / a, scale: a }))
      : e.startHeight,
  };
}
function Ie({ height: e, width: t }) {
  return { width: b(e), height: x(t) };
}
function Le(e) {
  let t = ze(e.presetId),
    n =
      t != null &&
      ((t.width === e.width && t.height === e.height) ||
        (t.width === e.height && t.height === e.width));
  return { ...e, ...Ie(e), presetId: n ? e.presetId : S };
}
function Re({ fitSize: e, rawSize: t, scale: n }) {
  return e <= 0 ? t : Math.min(t, e / n);
}
function ze(e) {
  return We.find((t) => t.id === e) ?? null;
}
function b(e) {
  return Be(e, 240, Ve);
}
function x(e) {
  return Be(e, 160, He);
}
function Be(e, t, n) {
  return Math.min(n, Math.max(t, Math.round(e)));
}
var S,
  Ve,
  He,
  Ue,
  C,
  w,
  We,
  T,
  Ge = e(() => {
    ((S = `responsive`),
      (Ve = 4096),
      (He = 4096),
      (Ue = `var(--gray-700)`),
      (C = { id: S, width: 390, height: 844 }),
      (w = 20),
      (We = [
        C,
        { id: `4k`, width: 2560, height: 1440 },
        { id: `laptop-l`, width: 1440, height: 900 },
        { id: `laptop`, width: 1024, height: 768 },
        { id: `surface-pro-7`, width: 912, height: 1368 },
        { id: `ipad-air`, width: 820, height: 1180 },
        { id: `ipad-mini`, width: 768, height: 1024 },
        { id: `surface-duo`, width: 540, height: 720 },
        { id: `iphone-15-pro-max`, width: 430, height: 932 },
        { id: `pixel-8`, width: 412, height: 915 },
        { id: `iphone-15-pro`, width: 393, height: 852 },
        { id: `samsung-galaxy-s24-ultra`, width: 384, height: 824 },
        { id: `iphone-se`, width: 375, height: 667 },
      ]),
      (T = { isEnabled: !1, presetId: C.id, width: C.width, height: C.height }));
  });
function Ke(e, t) {
  return (
    e.host !== t.host &&
    e.host.getConversationId() === t.host.getConversationId() &&
    e.host.isPainted()
  );
}
function E(e) {
  return {
    incomingBrowserTabId: e.incoming.host.getBrowserTabId(),
    incomingConversationId: e.incoming.host.getConversationId(),
    incomingMountGeneration: e.incoming.mountGeneration,
    outgoingBrowserTabId: e.outgoing.host.getBrowserTabId(),
    outgoingConversationId: e.outgoing.host.getConversationId(),
    outgoingMountGeneration: e.outgoing.mountGeneration,
  };
}
function qe(e) {
  return e === `hidden-browser-use` ? null : e;
}
var Je,
  Ye,
  D,
  Xe,
  Ze = e(() => {
    (v(),
      (Je = 100),
      (Ye = 2),
      (D = [`right-panel`, `bottom-panel`]),
      (Xe = class {
        paintedWebviews = { "bottom-panel": null, "right-panel": null };
        pendingHandoffs = { "bottom-panel": null, "right-panel": null };
        sync(e, t, n, r) {
          let i = {
              host: e,
              mountGeneration: t.mountGeneration ?? e.getMountGeneration(),
              webviewRef: n,
            },
            a = qe(r);
          if (
            a == null ||
            !t.isVisible ||
            t.bounds == null ||
            t.shouldBootstrap === !0 ||
            t.shouldPaint === !1
          ) {
            if (a != null) {
              let t = this.pendingHandoffs[a];
              (t?.incoming.host === e || t?.outgoing.host === e) &&
                this.cancel(a, `incoming-hidden`, !0);
            }
            (e.sync(t, n),
              a != null &&
                this.paintedWebviews[a]?.host === e &&
                !e.isPainted() &&
                (this.paintedWebviews[a] = null));
            return;
          }
          let o = this.pendingHandoffs[a];
          if (o != null) {
            if (o.incoming.host === e) {
              ((o.incoming = i),
                o.releaseFrameId == null
                  ? e.stage(t, n)
                  : (e.sync(t, n), (this.paintedWebviews[a] = i)));
              return;
            }
            if (o.releaseFrameId != null)
              (window.cancelAnimationFrame(o.releaseFrameId),
                this.releaseOutgoing(a, o, `incoming-replaced`));
            else {
              let { outgoing: r } = o;
              if ((this.cancel(a, `incoming-replaced`, !1), r.host === e)) {
                (e.sync(t, n), (this.paintedWebviews[a] = i));
                return;
              }
              if (Ke(r, i)) {
                this.stage(a, r, i, t);
                return;
              }
            }
          }
          let s = this.paintedWebviews[a];
          if (s != null && Ke(s, i)) {
            this.stage(a, s, i, t);
            return;
          }
          (e.sync(t, n), (this.paintedWebviews[a] = e.isPainted() ? i : null));
        }
        detach(e, t, n, r) {
          let i = qe(n);
          if (i != null) {
            let n = this.pendingHandoffs[i];
            if (n?.outgoing.host === e) {
              e.releaseRef(t, r);
              return;
            }
            if (n?.incoming.host === e) {
              this.cancel(i, `incoming-detached`, !0);
              return;
            }
            this.paintedWebviews[i]?.host === e && (this.paintedWebviews[i] = null);
          }
          e.detach(t, r);
        }
        acknowledgeAttachment(e, t, n, r) {
          for (let i of D) {
            let a = this.pendingHandoffs[i];
            if (
              a?.incoming.host.getConversationId() === e &&
              a.incoming.host.getBrowserTabId() === t &&
              a.incoming.mountGeneration === n &&
              r === n
            ) {
              (d.info(`IAB_TAB_SWITCH renderer acknowledged Owl webview handoff`, {
                safe: {
                  ...E(a),
                  acknowledgedMountGeneration: n,
                  currentMountGeneration: r,
                  hostKind: i,
                },
                sensitive: {},
              }),
                this.scheduleCommitAfterPrewarm(i, a));
              return;
            }
            a != null &&
              d.info(`IAB_TAB_SWITCH renderer ignored stale Owl webview handoff acknowledgement`, {
                safe: {
                  ...E(a),
                  acknowledgedMountGeneration: n,
                  currentMountGeneration: r,
                  hostKind: i,
                },
                sensitive: {},
              });
          }
        }
        removeTab(e) {
          for (let t of D) {
            let n = this.pendingHandoffs[t];
            if (n?.outgoing.host === e) {
              (this.commit(t, n),
                n.releaseFrameId != null &&
                  (window.cancelAnimationFrame(n.releaseFrameId), (n.releaseFrameId = null)),
                this.releaseOutgoing(t, n, `tab-removed`));
              continue;
            }
            if (n?.incoming.host === e) {
              this.cancel(t, `tab-removed`, !0);
              continue;
            }
            let r = this.paintedWebviews[t];
            r?.host === e &&
              ((this.paintedWebviews[t] = null), e.detach(r.webviewRef, r.mountGeneration));
          }
        }
        transferRoute(e) {
          for (let t of D) {
            let n = this.pendingHandoffs[t];
            (n?.incoming.host === e || n?.outgoing.host === e) &&
              this.cancel(t, `route-transferred`, !0);
          }
        }
        removeConversation(e) {
          for (let t of D) {
            let n = this.pendingHandoffs[t];
            ((n?.incoming.host.getConversationId() === e ||
              n?.outgoing.host.getConversationId() === e) &&
              this.cancel(t, `conversation-removed`, !0),
              this.paintedWebviews[t]?.host.getConversationId() === e &&
                (this.paintedWebviews[t] = null));
          }
        }
        disposeHost(e) {
          for (let t of D) {
            let n = this.pendingHandoffs[t];
            ((n?.incoming.host === e || n?.outgoing.host === e) &&
              this.cancel(t, `host-disposed`, !0),
              this.paintedWebviews[t]?.host === e && (this.paintedWebviews[t] = null));
          }
        }
        disposeAll() {
          for (let e of D)
            (this.cancel(e, `manager-disposed`, !0), (this.paintedWebviews[e] = null));
        }
        stage(e, t, n, r) {
          t.host.blockInteraction();
          let i = {
            incoming: n,
            outgoing: t,
            prewarmFrameId: null,
            releaseFrameId: null,
            removeIncomingDidAttachListener: null,
            timeoutId: null,
          };
          ((this.pendingHandoffs[e] = i),
            (i.removeIncomingDidAttachListener = n.host.listenForDidAttach(() => {
              this.pendingHandoffs[e] === i &&
                (d.info(`IAB_TAB_SWITCH renderer observed Owl webview did-attach during handoff`, {
                  safe: { ...E(i), hostKind: e },
                  sensitive: {},
                }),
                this.scheduleCommitAfterPrewarm(e, i));
            })),
            (i.timeoutId = window.setTimeout(() => {
              this.pendingHandoffs[e] === i &&
                (i.prewarmFrameId != null &&
                  (window.cancelAnimationFrame(i.prewarmFrameId), (i.prewarmFrameId = null)),
                d.info(`IAB_TAB_SWITCH renderer timed out Owl webview handoff`, {
                  safe: { ...E(i), hostKind: e },
                  sensitive: {},
                }),
                this.commit(e, i));
            }, Je)),
            d.info(`IAB_TAB_SWITCH renderer staged Owl webview handoff`, {
              safe: { ...E(i), hostKind: e },
              sensitive: {},
            }),
            n.host.stage(r, n.webviewRef));
        }
        scheduleCommitAfterPrewarm(e, t, n = Ye) {
          if (
            !(this.pendingHandoffs[e] !== t || t.prewarmFrameId != null || t.releaseFrameId != null)
          ) {
            if (n === 0) {
              (d.info(`IAB_TAB_SWITCH renderer prewarmed Owl webview handoff before reveal`, {
                safe: { ...E(t), hostKind: e },
                sensitive: {},
              }),
                this.commit(e, t));
              return;
            }
            (d.info(`IAB_TAB_SWITCH renderer prewarming Owl webview handoff before reveal`, {
              safe: { ...E(t), hostKind: e, remainingFrames: n },
              sensitive: {},
            }),
              (t.prewarmFrameId = window.requestAnimationFrame(() => {
                this.pendingHandoffs[e] === t &&
                  ((t.prewarmFrameId = null), this.scheduleCommitAfterPrewarm(e, t, n - 1));
              })));
          }
        }
        commit(e, t) {
          this.pendingHandoffs[e] !== t ||
            t.releaseFrameId != null ||
            (t.timeoutId != null && (window.clearTimeout(t.timeoutId), (t.timeoutId = null)),
            t.prewarmFrameId != null &&
              (window.cancelAnimationFrame(t.prewarmFrameId), (t.prewarmFrameId = null)),
            t.removeIncomingDidAttachListener?.(),
            (t.removeIncomingDidAttachListener = null),
            t.incoming.host.reveal(t.incoming.webviewRef),
            (this.paintedWebviews[e] = t.incoming),
            d.info(`IAB_TAB_SWITCH renderer committed Owl webview handoff`, {
              safe: { ...E(t), hostKind: e },
              sensitive: {},
            }),
            (t.releaseFrameId = window.requestAnimationFrame(() => {
              this.releaseOutgoing(e, t, `next-animation-frame`);
            })));
        }
        releaseOutgoing(e, t, n) {
          this.pendingHandoffs[e] === t &&
            ((this.pendingHandoffs[e] = null),
            t.outgoing.host.detach(t.outgoing.webviewRef, t.outgoing.mountGeneration),
            d.info(`IAB_TAB_SWITCH renderer released outgoing Owl webview handoff`, {
              safe: { ...E(t), hostKind: e, timing: n },
              sensitive: {},
            }));
        }
        cancel(e, t, n) {
          let r = this.pendingHandoffs[e];
          r != null &&
            ((this.pendingHandoffs[e] = null),
            r.timeoutId != null && window.clearTimeout(r.timeoutId),
            r.prewarmFrameId != null && window.cancelAnimationFrame(r.prewarmFrameId),
            r.releaseFrameId != null && window.cancelAnimationFrame(r.releaseFrameId),
            r.removeIncomingDidAttachListener?.(),
            r.incoming.host.detach(r.incoming.webviewRef, r.incoming.mountGeneration),
            n
              ? (r.outgoing.host.detach(r.outgoing.webviewRef, r.outgoing.mountGeneration),
                (this.paintedWebviews[e] = null))
              : r.outgoing.host.isConnected()
                ? (r.outgoing.host.restoreInteraction(), (this.paintedWebviews[e] = r.outgoing))
                : (this.paintedWebviews[e] = null),
            d.info(`IAB_TAB_SWITCH renderer cancelled Owl webview handoff`, {
              safe: { ...E(r), detachOutgoing: n, hostKind: e, reason: t },
              sensitive: {},
            }));
        }
      }));
  });
function O(e, t) {
  let n = Qe(t);
  if (n == null) {
    e?.removeAttribute(ge);
    return;
  }
  e?.setAttribute(ge, n);
}
function Qe(e) {
  switch (e) {
    case `bottom-panel`:
      return `bottom-panel`;
    case `right-panel`:
      return `right-panel`;
    case `hidden-browser-use`:
      return null;
  }
}
var $e = e(() => {
  re();
});
function et(e, t) {
  return { height: Math.round(e.height * t), width: Math.round(e.width * t) };
}
var tt = e(() => {});
function nt(e, t) {
  let n = t?.restore ?? null,
    r = t?.browserStorageId ?? null;
  return e.getAttribute(`data-browser-sidebar-page-restore`) === n &&
    e.getAttribute(`data-browser-sidebar-page-storage-id`) === r
    ? !1
    : (t == null
        ? (e.removeAttribute(s), e.removeAttribute(l))
        : (e.setAttribute(s, t.restore), e.setAttribute(l, t.browserStorageId)),
      !0);
}
function rt({ bounds: e, isVisible: t, lastVisibleBounds: n }) {
  return t ? (e != null && e.width > 0 && e.height > 0 ? e : (n ?? j)) : null;
}
function it({
  browserUseCaptureSurfaceSize: e,
  browserUseViewportSize: t,
  isBrowserUseActive: n,
  lastVisibleBounds: r,
}) {
  return n ? (e == null ? (t == null ? (r ?? j) : lt(t)) : lt(e)) : null;
}
function at(e, t, n, r, i, a) {
  let o = et(r, i);
  (Object.assign(e.style, {
    contain: ``,
    height: `${o.height}px`,
    left: `${r.x}px`,
    opacity: `1`,
    overflow: `hidden`,
    pointerEvents: `auto`,
    position: `fixed`,
    top: `${r.y}px`,
    transform: ``,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: ``,
    width: `${o.width}px`,
    zIndex: ``,
    zoom: a === 1 ? `` : String(a),
  }),
    Object.assign(t.style, {
      height: `${r.height}px`,
      transform: i === 1 ? `` : `scale(${i})`,
      transformOrigin: `top left`,
      willChange: i === 1 ? `` : `transform`,
      width: `${r.width}px`,
    }),
    ut(n, r, i));
}
function ot(e, t, n, r) {
  (Object.assign(e.style, {
    contain: `layout paint size style`,
    height: `${r.height}px`,
    left: `0px`,
    opacity: wt,
    overflow: ``,
    pointerEvents: `none`,
    position: `fixed`,
    top: `0px`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: `transform`,
    width: `${r.width}px`,
    zIndex: String(me),
    zoom: ``,
  }),
    Object.assign(t.style, {
      height: ``,
      transform: ``,
      transformOrigin: ``,
      willChange: ``,
      width: ``,
    }),
    ut(n, r));
}
function st(e, t, n, r, i, a) {
  (at(e, t, n, r, i, a), Object.assign(e.style, { pointerEvents: `none`, visibility: `hidden` }));
}
function ct(e, t, n, r, i, a) {
  (at(e, t, n, r, i, a), Object.assign(e.style, { opacity: Ct, pointerEvents: `none` }));
}
function lt(e) {
  return { x: j.x, y: j.y, width: e.width, height: e.height };
}
function ut(e, t, n = 1) {
  Object.assign(e.style, {
    height: `${t.height}px`,
    left: `0`,
    overflow: `hidden`,
    pointerEvents: `none`,
    position: `absolute`,
    top: `0`,
    transform: n === 1 ? `` : `scale(${n})`,
    transformOrigin: `top left`,
    willChange: n === 1 ? `` : `transform`,
    width: `${t.width}px`,
    zIndex: `1`,
  });
}
function dt(e) {
  let t = document.activeElement;
  return (
    t == null ||
    t === document.body ||
    t === document.documentElement ||
    (t.tagName === `WEBVIEW` && t !== e)
  );
}
function ft() {
  let e = document.querySelector(`[${vt}]`);
  if (e != null) return e;
  let t = document.createElement(`div`);
  return (
    t.setAttribute(vt, ``),
    Object.assign(t.style, {
      inset: `0`,
      overflow: `visible`,
      pointerEvents: `none`,
      position: `fixed`,
    }),
    document.body.append(t),
    t
  );
}
function k(e, t, n) {
  (n != null && e.current === n && (e.current = null), t != null && (e.current = t));
}
function pt(e) {
  mt(e) && e.destroy();
}
function mt(e) {
  return e != null && `destroy` in e && typeof e.destroy == `function`;
}
var ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  A,
  Ct,
  wt,
  j,
  M,
  Tt = e(() => {
    (m(),
      _e(),
      v(),
      $e(),
      tt(),
      (ht = `about:blank`),
      (gt = `data-browser-sidebar-conversation-id`),
      (_t = `data-browser-sidebar-browser-tab-id`),
      (vt = `data-browser-sidebar-webview-host-root`),
      (yt = `data-browser-sidebar-cursor-overlay-host`),
      (bt = `owl-webcontents-adoption-lease`),
      (xt = `owl-webcontents-adopted-web-contents-id`),
      (St = `data-browser-sidebar-adopted-initial-url`),
      (A = `var(--color-token-editor-background, var(--color-token-main-surface-primary, #fff))`),
      (Ct = `0.001`),
      (wt = `0.001`),
      (j = { x: 0, y: 0, width: 1280, height: 720 }),
      (M = class {
        browserTabId;
        conversationId;
        container;
        cursorOverlayHost;
        webview;
        hostKind;
        partition;
        webviewRef = null;
        browserUseCaptureSurfaceSize = null;
        browserUseViewportSize = null;
        isBrowserUseActive = !1;
        isTabCaptureActive = !1;
        isDisposed = !1;
        isInteractionBlocked = !1;
        isStaged = !1;
        state = {
          bounds: null,
          isVisible: !1,
          mountGeneration: 0,
          scale: 1,
          shouldPaint: !0,
          windowZoom: 1,
        };
        lastVisibleBounds = null;
        constructor({
          browserTabId: e,
          conversationId: t,
          elementKey: n,
          hostKind: r,
          partition: i,
          adoptionLease: a,
          adoptedWebContentsId: o,
          initialUrl: s,
          pagePersistence: c,
        }) {
          let l = document.createElement(`div`),
            u = document.createElement(`div`),
            d = document.createElement(`webview`);
          ((this.browserTabId = e),
            (this.conversationId = t),
            (this.container = l),
            (this.cursorOverlayHost = u),
            (this.hostKind = r),
            (this.partition = i),
            (this.webview = d),
            (l.dataset.browserSidebarWebview = n),
            O(l, r),
            u.setAttribute(yt, n),
            (d.className = `h-full w-full`),
            (d.style.backgroundColor = A),
            d.setAttribute(gt, t),
            d.setAttribute(_t, e),
            this.setPagePersistence(c),
            d.setAttribute(`partition`, i),
            d.setAttribute(`webviewrole`, `tab`),
            this.setAdoptionAttributes(a ?? null, o ?? null, s),
            d.setAttribute(`src`, ht),
            l.append(d, u));
        }
        setHostKind(e) {
          this.hostKind !== e && ((this.hostKind = e), O(this.container, e));
        }
        setPagePersistence(e) {
          let t = this.webview;
          return t == null ? !1 : nt(t, e);
        }
        detach(e, t) {
          let n = this.webview;
          if (this.isDisposed || n == null) {
            k(e, null, n ?? void 0);
            return;
          }
          if (t != null && t !== this.state.mountGeneration) return;
          if (this.webviewRef != null && this.webviewRef !== e) {
            k(e, null, n);
            return;
          }
          let r = this.state.isVisible;
          ((this.webviewRef = e),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !1),
            (this.state = {
              bounds: this.state.bounds,
              isVisible: !1,
              mountGeneration: this.state.mountGeneration,
              scale: this.state.scale,
              shouldPaint: this.state.shouldPaint,
              windowZoom: this.state.windowZoom,
            }),
            (n.style.backgroundColor = A),
            document.activeElement === n && n.blur(),
            k(e, null, n),
            this.syncContainerStyle(),
            d.info(`IAB_LIFECYCLE renderer backgrounded browser sidebar webview`, {
              safe: {
                browserTabId: this.browserTabId,
                conversationId: this.conversationId,
                currentMountGeneration: this.state.mountGeneration,
                isConnected: this.isConnected(),
                requestedMountGeneration: t ?? null,
                wasVisible: r,
              },
            }));
        }
        releaseRef(e, t) {
          let n = this.webview;
          n == null || (t != null && t !== this.state.mountGeneration) || k(e, null, n);
        }
        sync(e, t) {
          let n = this.webview;
          if (this.isDisposed || n == null) {
            k(t, null, n ?? void 0);
            return;
          }
          ((this.webviewRef = t),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !1),
            (this.state = {
              ...e,
              mountGeneration: e.mountGeneration ?? this.state.mountGeneration,
            }),
            (n.style.backgroundColor = A));
          let r = this.syncContainerStyle() === `visible`;
          (k(t, r ? n : null, n), r && dt(n) && n.focus());
        }
        stage(e, t) {
          let n = this.webview;
          if (this.isDisposed || n == null) {
            k(t, null, n ?? void 0);
            return;
          }
          ((this.webviewRef = t),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !0),
            (this.state = {
              ...e,
              mountGeneration: e.mountGeneration ?? this.state.mountGeneration,
            }),
            (n.style.backgroundColor = A),
            this.syncContainerStyle(),
            this.bringToFront(),
            k(t, null, n));
        }
        reveal(e) {
          let t = this.webview;
          if (this.isDisposed || t == null) {
            k(e, null, t ?? void 0);
            return;
          }
          ((this.webviewRef = e),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !1),
            this.bringToFront());
          let n = this.syncContainerStyle() === `visible`;
          (k(e, n ? t : null, t), n && dt(t) && t.focus());
        }
        blockInteraction() {
          ((this.isInteractionBlocked = !0),
            this.container?.isConnected === !0 && (this.container.style.pointerEvents = `none`));
        }
        restoreInteraction() {
          this.isInteractionBlocked = !1;
          let e = this.container;
          e != null && this.isPainted() && (e.style.pointerEvents = `auto`);
        }
        bringToFront() {
          let e = this.container;
          e?.isConnected === !0 && e.nextElementSibling != null && ft().append(e);
        }
        listenForDidAttach(e) {
          let t = this.webview;
          return (
            t?.addEventListener(`did-attach`, e),
            () => {
              t?.removeEventListener(`did-attach`, e);
            }
          );
        }
        getBrowserTabId() {
          return this.browserTabId;
        }
        getConversationId() {
          return this.conversationId;
        }
        getPartition() {
          return this.partition;
        }
        getMountGeneration() {
          return this.state.mountGeneration;
        }
        isConnected() {
          return this.container?.isConnected === !0;
        }
        isPainted() {
          return this.isConnected() && this.container?.style.visibility === `visible`;
        }
        get disposed() {
          return this.isDisposed;
        }
        getCursorOverlayHost() {
          return this.cursorOverlayHost;
        }
        shouldDestroyForHostRequest({ mountGeneration: e, reason: t }) {
          return t === `closed` || (this.state.mountGeneration === e && !this.state.isVisible);
        }
        setBrowserUseCaptureSurfaceSize(e) {
          ((this.browserUseCaptureSurfaceSize = e),
            !(e != null && this.container?.isConnected !== !0 && !this.state.isVisible) &&
              (this.syncContainerStyle(), this.applyBlockedInteractionStyle()));
        }
        setBrowserUseActive(e) {
          ((this.isBrowserUseActive = e),
            !(e && this.container?.isConnected !== !0 && !this.state.isVisible) &&
              this.syncContainerStyle());
        }
        setTabCaptureActive(e) {
          this.isTabCaptureActive !== e &&
            ((this.isTabCaptureActive = e),
            this.syncContainerStyle(),
            this.applyBlockedInteractionStyle());
        }
        setBrowserUseViewportSize(e) {
          ((this.browserUseViewportSize = e),
            !(e != null && this.container?.isConnected !== !0 && !this.state.isVisible) &&
              this.syncContainerStyle());
        }
        releaseBrowserUse() {
          ((this.browserUseCaptureSurfaceSize = null),
            (this.browserUseViewportSize = null),
            (this.isBrowserUseActive = !1),
            this.syncContainerStyle());
        }
        setAdoptionAttributes(e, t, n) {
          if (this.webview != null) {
            if (e == null || t == null) {
              (this.webview.removeAttribute(bt),
                this.webview.removeAttribute(xt),
                this.webview.removeAttribute(St));
              return;
            }
            (this.webview.setAttribute(bt, e),
              this.webview.setAttribute(xt, t.toString()),
              this.webview.setAttribute(St, n));
          }
        }
        resync() {
          let e = this.container;
          e == null ||
            !e.isConnected ||
            (this.syncContainerStyle(), this.applyBlockedInteractionStyle());
        }
        transfer({ browserTabId: e, conversationId: t, elementKey: n, partition: r }) {
          let i = this.container,
            a = this.webview;
          i == null ||
            a == null ||
            ((i.dataset.browserSidebarWebview = n),
            this.cursorOverlayHost?.setAttribute(yt, n),
            a.setAttribute(gt, t),
            a.setAttribute(_t, e),
            a.setAttribute(`partition`, r),
            (this.browserTabId = e),
            (this.conversationId = t),
            (this.partition = r));
        }
        dispose() {
          if (this.isDisposed) return;
          ((this.isDisposed = !0),
            d.info(`IAB_LIFECYCLE renderer disposed browser sidebar webview`, {
              safe: { browserTabId: this.browserTabId, conversationId: this.conversationId },
            }));
          let e = this.webview;
          (this.detachFromDom(),
            this.webviewRef != null && k(this.webviewRef, null, e ?? void 0),
            pt(e),
            this.container?.replaceChildren(),
            (this.container = null),
            (this.cursorOverlayHost = null),
            (this.webview = null),
            (this.webviewRef = null));
        }
        syncContainerStyle() {
          let e = this.container,
            t = this.cursorOverlayHost,
            n = this.webview;
          if (e == null || t == null || n == null) return `hidden`;
          let r = this.state.shouldBootstrap === !0,
            i = rt({
              bounds: this.state.bounds,
              isVisible: this.state.isVisible || r,
              lastVisibleBounds: this.lastVisibleBounds,
            });
          if (i != null && this.browserUseCaptureSurfaceSize == null) {
            ((this.lastVisibleBounds = i), this.attachToDom());
            let a = this.state.isVisible
              ? null
              : it({
                  browserUseCaptureSurfaceSize: null,
                  browserUseViewportSize: this.browserUseViewportSize,
                  isBrowserUseActive: this.isBrowserUseActive || this.isTabCaptureActive,
                  lastVisibleBounds: i,
                });
            return a == null
              ? r || this.state.shouldPaint === !1
                ? (st(e, n, t, i, this.state.scale, this.state.windowZoom ?? 1), `bootstrap`)
                : this.isStaged
                  ? (ct(e, n, t, i, this.state.scale, this.state.windowZoom ?? 1), `staged`)
                  : (at(e, n, t, i, this.state.scale, this.state.windowZoom ?? 1), `visible`)
              : (ot(e, n, t, a), `hidden`);
          }
          let a = it({
            browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
            browserUseViewportSize: this.browserUseViewportSize,
            isBrowserUseActive: this.isBrowserUseActive || this.isTabCaptureActive,
            lastVisibleBounds: this.lastVisibleBounds,
          });
          return a == null
            ? (this.parkInDom(), `hidden`)
            : (this.attachToDom(), ot(e, n, t, a), `hidden`);
        }
        applyBlockedInteractionStyle() {
          this.isInteractionBlocked &&
            this.container?.isConnected === !0 &&
            (this.container.style.pointerEvents = `none`);
        }
        attachToDom() {
          let e = this.container;
          e != null && !e.isConnected && ft().append(e);
        }
        parkInDom() {
          let e = this.container,
            t = this.cursorOverlayHost,
            n = this.webview;
          if (e == null || t == null || n == null) return;
          let r = this.lastVisibleBounds ?? j;
          (this.attachToDom(), st(e, n, t, r, this.state.scale, this.state.windowZoom ?? 1));
        }
        detachFromDom() {
          this.container?.remove();
        }
      }));
  });
function Et(e, t) {
  let n = N(e, t),
    r = F.get(n);
  return r == null ? null : (F.delete(n), r);
}
function Dt(e, t) {
  return F.get(N(e, t)) ?? null;
}
function Ot(e, t) {
  let n = N(e, t),
    r = I.get(n);
  return r == null ? null : (I.delete(n), r);
}
function kt(e, t) {
  return I.get(N(e, t)) ?? null;
}
function At(e, t) {
  P(F, e, t);
}
function jt(e, t) {
  P(I, e, t);
}
function Mt(e, t, n) {
  F.set(N(e, t), n);
}
function Nt(e, t, n) {
  I.set(N(e, t), n);
}
function Pt(e, t) {
  return L.get(N(e, t)) ?? null;
}
function Ft(e, t) {
  P(L, e, t);
}
function It(e, t, n) {
  L.set(N(e, t), n);
}
function Lt(e, t) {
  return R.get(N(e, t)) ?? null;
}
function Rt(e, t) {
  return z.get(N(e, t)) ?? null;
}
function zt(e, t) {
  P(R, e, t);
}
function Bt(e, t) {
  P(z, e, t);
}
function Vt(e, t, n) {
  R.set(N(e, t), n);
}
function Ht(e, t, n) {
  z.set(N(e, t), n);
}
function Ut(
  e,
  t,
  { adoptionLease: n, adoptedWebContentsId: r, initialUrl: i, initiator: a, source: o },
) {
  if (
    (o != null && Mt(e, t, o),
    a != null && Nt(e, t, a),
    i == null ? Ft(e, t) : It(e, t, i),
    n != null && r != null)
  ) {
    (Vt(e, t, n), Ht(e, t, r));
    return;
  }
  (zt(e, t), Bt(e, t));
}
function Wt(e) {
  let t = B.get(e) ?? [];
  return (B.delete(e), t);
}
function Gt(e) {
  B.delete(e);
}
function Kt(e) {
  return B.get(e)?.map((e) => e.browserTabId) ?? [];
}
function qt(e) {
  return (
    V.add(e),
    () => {
      V.delete(e);
    }
  );
}
function Jt() {
  return on;
}
function Yt(e) {
  let t = H.get(e) ?? new Set();
  return (H.delete(e), [...t]);
}
function Xt(e, t) {
  ($t(e, t), Qt(e, t));
  let n = H.get(e);
  if (n == null) {
    H.set(e, new Set([t]));
    return;
  }
  n.add(t);
}
function Zt(e, t) {
  if (($t(e, t), t == null)) {
    (Gt(e), H.delete(e));
    return;
  }
  (H.get(e)?.delete(t), Qt(e, t));
}
function Qt(e, t) {
  let n = B.get(e);
  if (n == null) return;
  let r = n.filter((e) => e.browserTabId !== t);
  if (r.length === 0) {
    B.delete(e);
    return;
  }
  B.set(e, r);
}
function $t(e, t) {
  (jt(e, t), At(e, t), Ft(e, t), zt(e, t), Bt(e, t));
}
function en(e, t) {
  (nn(e, t), (on += 1));
  for (let e of V) e();
}
function tn(e, t) {
  nn(e, t);
}
function nn(e, t) {
  H.get(e)?.delete(t.browserTabId);
  let n = B.get(e);
  if (n == null) {
    B.set(e, [t]);
    return;
  }
  let r = n.findIndex((e) => e.browserTabId === t.browserTabId);
  if (r === -1) {
    n.push(t);
    return;
  }
  n[r] = t;
}
function rn(e, t) {
  let n = U.get(e);
  if (n == null) {
    U.set(e, new Set([t]));
    return;
  }
  n.add(t);
}
function an(e) {
  let t = U.get(e);
  return t == null ? [] : (U.delete(e), [...t]);
}
function N(e, t) {
  return `${e}\0${t}`;
}
function P(e, t, n) {
  if (n != null) {
    e.delete(N(t, n));
    return;
  }
  let r = `${t}\0`;
  for (let t of e.keys()) t.startsWith(r) && e.delete(t);
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  on,
  H,
  U,
  sn = e(() => {
    ((F = new Map()),
      (I = new Map()),
      (L = new Map()),
      (R = new Map()),
      (z = new Map()),
      (B = new Map()),
      (V = new Set()),
      (on = 0),
      (H = new Map()),
      (U = new Map()));
  });
function cn({
  bounds: e,
  browserUseCaptureSurfaceSize: t,
  browserUseViewportSize: n,
  isVisible: r,
  lastVisibleBounds: i,
  shouldUsePaintHost: a,
}) {
  return t == null
    ? r && e != null && e.width > 0 && e.height > 0
      ? e
      : r && i != null
        ? i
        : !r && a
          ? n == null
            ? (i ?? G)
            : mn(n)
          : null
    : mn(t);
}
function ln(e, t, n, r, i, a) {
  let o = et(r, i);
  (Object.assign(e.style, {
    contain: ``,
    height: `${o.height}px`,
    left: `${r.x}px`,
    opacity: `1`,
    overflow: `hidden`,
    pointerEvents: ``,
    position: `fixed`,
    top: `${r.y}px`,
    transform: ``,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: ``,
    width: `${o.width}px`,
    zIndex: ``,
    zoom: a === 1 ? `` : String(a),
  }),
    Object.assign(t.style, {
      height: `${r.height}px`,
      transform: i === 1 ? `` : `scale(${i})`,
      transformOrigin: `top left`,
      willChange: i === 1 ? `` : `transform`,
      width: `${r.width}px`,
    }),
    pn(n, r, i));
}
function un(e, t, n, r, i, a) {
  if (a) {
    dn(e, t, n, r ?? (i == null ? G : mn(i)));
    return;
  }
  (Object.assign(e.style, xn), fn(t), pn(n, { width: 1, height: 1 }));
}
function dn(e, t, n, r) {
  (Object.assign(e.style, {
    contain: `layout paint size style`,
    height: `${r.height}px`,
    left: `${G.x}px`,
    opacity: Sn,
    overflow: ``,
    pointerEvents: `none`,
    position: `fixed`,
    top: `${G.y}px`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: `transform`,
    width: `${r.width}px`,
    zIndex: String(me),
    zoom: ``,
  }),
    fn(t),
    pn(n, r));
}
function fn(e) {
  Object.assign(e.style, {
    height: ``,
    transform: ``,
    transformOrigin: ``,
    willChange: ``,
    width: ``,
  });
}
function pn(e, t, n = 1) {
  Object.assign(e.style, {
    height: `${t.height}px`,
    left: `0`,
    overflow: `hidden`,
    pointerEvents: `none`,
    position: `absolute`,
    top: `0`,
    transform: n === 1 ? `` : `scale(${n})`,
    transformOrigin: `top left`,
    willChange: n === 1 ? `` : `transform`,
    width: `${t.width}px`,
    zIndex: `1`,
  });
}
function mn(e) {
  return { x: G.x, y: G.y, width: e.width, height: e.height };
}
function hn(e, t, n) {
  (n != null && e.current === n && (e.current = null), t != null && (e.current = t));
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  W,
  G,
  K,
  Cn = e(() => {
    (_e(),
      v(),
      Tt(),
      $e(),
      tt(),
      (gn = `about:blank`),
      (_n = `data-browser-sidebar-conversation-id`),
      (vn = `data-browser-sidebar-browser-tab-id`),
      (yn = `data-browser-sidebar-retained-webview`),
      (bn = `data-browser-sidebar-cursor-overlay-host`),
      (xn = {
        contain: ``,
        height: `1px`,
        left: `-10000px`,
        opacity: `0`,
        overflow: ``,
        pointerEvents: `none`,
        position: `fixed`,
        top: `0`,
        transform: ``,
        transformOrigin: ``,
        visibility: `hidden`,
        willChange: ``,
        width: `1px`,
        zIndex: ``,
        zoom: ``,
      }),
      (Sn = `0.001`),
      (W = `#fff`),
      (G = { x: 0, y: 0, width: 1280, height: 720 }),
      (K = class {
        browserTabId;
        conversationId;
        container = document.createElement(`div`);
        cursorOverlayHost = document.createElement(`div`);
        webview = document.createElement(`webview`);
        browserUseCaptureSurfaceSize;
        browserUseViewportSize;
        webviewRef = null;
        hostKind;
        partition;
        isBrowserUseActive;
        isTabCaptureActive = !1;
        isAttached = !1;
        state = { bounds: null, isVisible: !1, scale: 1, windowZoom: 1 };
        lastVisibleBounds = null;
        constructor({
          browserTabId: e,
          browserUseCaptureSurfaceSize: t,
          browserUseViewportSize: n,
          conversationId: r,
          elementKey: i,
          hostKind: a,
          initialUrl: o,
          isBrowserUseActive: s,
          partition: c,
          pagePersistence: l,
        }) {
          ((this.browserTabId = e),
            (this.conversationId = r),
            (this.browserUseCaptureSurfaceSize = t),
            (this.browserUseViewportSize = n),
            (this.hostKind = a),
            (this.partition = c),
            (this.isBrowserUseActive = s),
            (this.container.dataset.browserSidebarWebview = i),
            O(this.container, a),
            this.cursorOverlayHost.setAttribute(bn, i),
            un(
              this.container,
              this.webview,
              this.cursorOverlayHost,
              null,
              n,
              this.isBrowserUseActive,
            ),
            (this.webview.className = `h-full w-full`),
            (this.webview.style.backgroundColor = W),
            this.webview.setAttribute(_n, r),
            this.webview.setAttribute(vn, e),
            this.setPagePersistence(l),
            this.webview.setAttribute(yn, ``),
            this.webview.setAttribute(`partition`, c),
            this.webview.setAttribute(`webviewrole`, `tab`),
            this.webview.setAttribute(`src`, o.length === 0 ? gn : o),
            this.container.append(this.webview, this.cursorOverlayHost),
            document.body.append(this.container));
        }
        setHostKind(e) {
          this.hostKind !== e && ((this.hostKind = e), O(this.container, e));
        }
        setPagePersistence(e) {
          return nt(this.webview, e);
        }
        getCursorOverlayHost() {
          return this.cursorOverlayHost;
        }
        getPartition() {
          return this.partition;
        }
        detach(e) {
          if (this.isAttached && this.webviewRef != null && this.webviewRef !== e) {
            hn(e, null, this.webview);
            return;
          }
          ((this.isAttached = !1),
            (this.webviewRef = e),
            (this.state = {
              bounds: this.state.bounds,
              isVisible: !1,
              scale: this.state.scale,
              windowZoom: this.state.windowZoom,
            }),
            (this.webview.style.backgroundColor = W),
            hn(e, null, this.webview),
            this.syncContainerStyle(),
            d.info(`IAB_LIFECYCLE renderer detached retained browser sidebar webview`, {
              safe: { browserTabId: this.browserTabId, conversationId: this.conversationId },
            }));
        }
        sync(e, t) {
          ((this.isAttached = !0),
            (this.webviewRef = t),
            (this.state = e),
            (this.webview.style.backgroundColor = W),
            hn(t, this.webview),
            this.syncContainerStyle());
        }
        shouldDestroyForHostRequest({ reason: e }) {
          return e === `closed`;
        }
        setBrowserUseActive(e) {
          ((this.isBrowserUseActive = e), this.syncContainerStyle());
        }
        setTabCaptureActive(e) {
          this.isTabCaptureActive !== e &&
            ((this.isTabCaptureActive = e), this.syncContainerStyle());
        }
        setBrowserUseViewportSize(e) {
          ((this.browserUseViewportSize = e), this.syncContainerStyle());
        }
        setBrowserUseCaptureSurfaceSize(e) {
          ((this.browserUseCaptureSurfaceSize = e), this.syncContainerStyle());
        }
        releaseBrowserUse() {
          ((this.browserUseCaptureSurfaceSize = null),
            (this.browserUseViewportSize = null),
            (this.isBrowserUseActive = !1),
            this.syncContainerStyle());
        }
        resync() {
          this.isAttached && this.syncContainerStyle();
        }
        transfer({ browserTabId: e, conversationId: t, elementKey: n, partition: r }) {
          ((this.container.dataset.browserSidebarWebview = n),
            this.cursorOverlayHost.setAttribute(bn, n),
            this.webview.setAttribute(_n, t),
            this.webview.setAttribute(vn, e),
            this.webview.setAttribute(`partition`, r),
            (this.browserTabId = e),
            (this.conversationId = t),
            (this.partition = r));
        }
        dispose() {
          (d.info(`IAB_LIFECYCLE renderer disposed retained browser sidebar webview`, {
            safe: { browserTabId: this.browserTabId, conversationId: this.conversationId },
          }),
            this.container.remove());
        }
        syncContainerStyle() {
          let e = this.isBrowserUseActive || this.isTabCaptureActive,
            t = cn({
              bounds: this.state.bounds,
              browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
              browserUseViewportSize: this.browserUseViewportSize,
              isVisible: this.state.isVisible,
              lastVisibleBounds: this.lastVisibleBounds,
              shouldUsePaintHost: e,
            });
          if (t == null) {
            un(
              this.container,
              this.webview,
              this.cursorOverlayHost,
              this.lastVisibleBounds,
              this.browserUseViewportSize,
              e,
            );
            return;
          }
          if (this.browserUseCaptureSurfaceSize != null) {
            dn(this.container, this.webview, this.cursorOverlayHost, t);
            return;
          }
          if (this.state.isVisible) {
            ((this.lastVisibleBounds = t),
              ln(
                this.container,
                this.webview,
                this.cursorOverlayHost,
                t,
                this.state.scale,
                this.state.windowZoom ?? 1,
              ));
            return;
          }
          dn(this.container, this.webview, this.cursorOverlayHost, t);
        }
      }));
  });
function q(e, t) {
  return `${e}\0${t}`;
}
function wn(e) {
  let t = e.indexOf(`\0`);
  return { browserTabId: r(e.slice(t + 1)), conversationId: e.slice(0, t) };
}
function Tn(e, t) {
  return [e, t?.tabType ?? ``, t?.title ?? ``, t?.url ?? ``, t?.faviconUrl ?? ``].join(`	`);
}
function En(e, t) {
  return t === J(e, void 0) ? e : q(e, t);
}
function J(e, t) {
  return t ?? ye(e);
}
function Dn(e) {
  return typeof e[1] == `string`;
}
var On,
  Y,
  kn,
  X,
  An = e(() => {
    (m(),
      ne(),
      le(),
      v(),
      Ge(),
      Ze(),
      Tt(),
      sn(),
      Cn(),
      (On = { responsiveViewportSize: null, toolbarState: T }),
      (Y = `default`),
      (kn = class {
        listeners = new Set();
        browserUseCursorStates = new Map();
        snapshots = new Map();
        browserUseActiveTabKeys = new Set();
        browserUseTabKeys = new Set();
        browserUseTabs = [];
        browserUseTabIdsKeysByConversation = new Map();
        browserUseTabSummarySyncKeysByConversation = new Map();
        browserUseViewportSizes = new Map();
        browserUseCaptureSurfaceSizes = new Map();
        tabCaptureActiveKeys = new Set();
        deviceToolbarTabStates = new Map();
        tabPersistenceStates = new Map();
        webviews = new Map();
        transferredWebviewKeys = new Set();
        pendingElectronTransfers = new Map();
        mountStates = new Map();
        electronPageHandoff = new Xe();
        constructor() {
          (h.subscribe(`browser-sidebar-state`, (e) => {
            this.setSnapshot(e.conversationId, J(e.conversationId, e.browserTabId), e.snapshot);
          }),
            h.subscribe(`browser-sidebar-browser-use-state`, (e) => {
              this.setBrowserUseActive(
                e.conversationId,
                J(e.conversationId, e.browserTabId),
                e.isActive,
              );
            }),
            h.subscribe(`browser-sidebar-browser-use-page-released`, (e) => {
              this.releaseBrowserUseTab(e.conversationId, J(e.conversationId, e.browserTabId));
            }),
            h.subscribe(`browser-sidebar-browser-use-viewport`, (e) => {
              this.setBrowserUseViewportSize(
                e.conversationId,
                J(e.conversationId, e.browserTabId),
                e.viewportSize,
              );
            }),
            h.subscribe(`browser-sidebar-browser-use-capture-surface`, (e) => {
              this.setBrowserUseCaptureSurfaceSize(
                e.conversationId,
                J(e.conversationId, e.browserTabId),
                e.surfaceSize,
              );
            }),
            h.subscribe(`browser-sidebar-browser-use-cursor-state`, (e) => {
              this.setBrowserUseCursorState(
                e.conversationId,
                J(e.conversationId, e.browserTabId),
                e,
              );
            }),
            h.subscribe(`browser-sidebar-tab-capture-state`, (e) => {
              this.setTabCaptureActive(e.conversationId, e.browserTabId, e.isActive);
            }),
            h.subscribe(`browser-sidebar-destroy-webview`, (e) => {
              this.destroyWebviewAtHostRequest(
                e.conversationId,
                e.browserTabId,
                e.mountGeneration,
                e.reason,
                e.teardownId,
              );
            }),
            h.subscribe(`browser-sidebar-webview-attached`, (e) => {
              this.markWebviewAttached(e.conversationId, e.browserTabId, e.mountGeneration);
            }),
            typeof window < `u` &&
              window.addEventListener(`focus`, () => {
                this.resyncAttachedWebviews();
              }),
            typeof document < `u` &&
              document.addEventListener(`visibilitychange`, () => {
                document.visibilityState === `visible` && this.resyncAttachedWebviews();
              }));
        }
        subscribe = (e) => (
          this.listeners.add(e),
          () => {
            this.listeners.delete(e);
          }
        );
        getSnapshot(e, t = J(e, void 0)) {
          return this.snapshots.get(q(e, t)) ?? null;
        }
        getBrowserStorageId(e, t = J(e, void 0)) {
          let n = q(e, t),
            r = this.tabPersistenceStates.get(n);
          if (r != null) return r.browserStorageId;
          let a = i(`browser:${crypto.randomUUID()}`);
          return (this.tabPersistenceStates.set(n, { browserStorageId: a, mode: `ephemeral` }), a);
        }
        getExistingBrowserStorageId(e, t) {
          return this.tabPersistenceStates.get(q(e, t))?.browserStorageId ?? null;
        }
        restorePersistedPageState(e, t, n) {
          let r = q(e, t),
            i = this.tabPersistenceStates.get(r);
          (i?.browserStorageId === n && i.mode === `restore-expected`) ||
            (this.tabPersistenceStates.set(r, { browserStorageId: n, mode: `restore-expected` }),
            this.emitChange());
        }
        getPagePersistence(e, t, n) {
          if (!n) return;
          let r = q(e, t),
            a = this.tabPersistenceStates.get(r);
          if (a == null) {
            let e = i(`browser:${crypto.randomUUID()}`);
            return (
              this.tabPersistenceStates.set(r, { browserStorageId: e, mode: `persistent` }),
              { browserStorageId: e, restore: `none` }
            );
          }
          return a.mode === `restore-expected`
            ? { browserStorageId: a.browserStorageId, restore: `required` }
            : (a.mode === `ephemeral` &&
                this.tabPersistenceStates.set(r, {
                  browserStorageId: a.browserStorageId,
                  mode: `persistent`,
                }),
              { browserStorageId: a.browserStorageId, restore: `none` });
        }
        hasRetainedWebview(e, t = J(e, void 0)) {
          return this.webviews.get(q(e, t)) instanceof K;
        }
        getBrowserUseCursorState(e, t = J(e, void 0)) {
          return this.browserUseCursorStates.get(q(e, t)) ?? null;
        }
        isBrowserUseActive(e, t = J(e, void 0)) {
          return this.browserUseActiveTabKeys.has(q(e, t));
        }
        isBrowserUseTab(e, t = J(e, void 0)) {
          return this.browserUseTabKeys.has(q(e, t));
        }
        getBrowserUseTabs() {
          return this.browserUseTabs;
        }
        getBrowserUseSummaryBrowserTabId(e) {
          return (
            this.getBrowserUseActiveBrowserTabId(e) ??
            this.getFirstConversationBrowserTabId(e, this.browserUseTabKeys) ??
            this.getFirstConversationBrowserTabId(e, this.snapshots.keys())
          );
        }
        getBrowserUseActiveBrowserTabId(e) {
          return this.getFirstConversationBrowserTabId(e, this.browserUseActiveTabKeys);
        }
        getBrowserUseBrowserTabIdsKey(e) {
          return this.browserUseTabIdsKeysByConversation.get(e) ?? ``;
        }
        getConversationBrowserTabIds(e) {
          let t = [],
            n = new Set(),
            r = [this.browserUseTabKeys, this.webviews.keys()];
          for (let i of r)
            for (let r of this.getConversationBrowserTabIdsFromKeys(e, i))
              n.has(r) || (n.add(r), t.push(r));
          return t;
        }
        getBrowserUseBrowserTabIds(e) {
          return this.getConversationBrowserTabIdsFromKeys(e, this.browserUseTabKeys);
        }
        getBrowserUseBrowserTabSummarySyncKey(e) {
          let t = this.browserUseTabSummarySyncKeysByConversation.get(e) ?? ``;
          if (t.length > 0) return t;
          let n = this.getBrowserUseSummaryBrowserTabId(e);
          return n == null ? `` : Tn(n, this.getSnapshot(e, n));
        }
        getDeviceToolbarTabState(e, t = J(e, void 0)) {
          return this.deviceToolbarTabStates.get(q(e, t)) ?? On;
        }
        getMountGeneration(e, t = J(e, void 0)) {
          return this.mountStates.get(q(e, t))?.generation ?? 0;
        }
        claimMountGeneration(e, t = J(e, void 0), n = Y) {
          let r = q(e, t),
            i = this.mountStates.get(r) ?? { claimKeys: new Set(), generation: 0 };
          return (
            i.claimKeys.size === 0 && (i.generation += 1),
            i.claimKeys.add(n),
            this.mountStates.set(r, i),
            i.generation
          );
        }
        hasOtherMountGenerationClaim(e, t = J(e, void 0), n = Y, r) {
          let i = this.mountStates.get(q(e, t));
          if (i == null || (r != null && i.generation !== r)) return !1;
          for (let e of i.claimKeys) if (e !== n) return !0;
          return !1;
        }
        releaseMountGeneration(e, t = J(e, void 0), n = Y, r) {
          let i = q(e, t),
            a = this.mountStates.get(i);
          return a == null
            ? 0
            : ((r != null && a.generation !== r) || a.claimKeys.delete(n), a.generation);
        }
        syncElectronWebview(e, t, n, r = `right-panel`) {
          this.electronPageHandoff.sync(e, t, n, r);
        }
        detachElectronWebview(e, t, n, r) {
          this.electronPageHandoff.detach(e, t, n, r);
        }
        setDeviceToolbarTabState(e, t, n) {
          let r = typeof t == `function` ? J(e, void 0) : t,
            i = typeof t == `function` ? t : n;
          if (i == null) return;
          let a = q(e, r);
          (this.deviceToolbarTabStates.set(a, i(this.getDeviceToolbarTabState(e, r))),
            this.emitChange());
        }
        setSnapshot(e, t, n) {
          let r = typeof t == `string` ? t : J(e, void 0),
            i = typeof t == `string` ? n : t;
          if (i == null) return;
          let a = q(e, r);
          (this.snapshots.set(a, i),
            this.browserUseTabKeys.has(a) && this.syncBrowserUseTabKeys(e),
            i.tabType !== ee.WEB &&
              (this.webviews.get(a) ?? null) instanceof K &&
              this.disposeWebviewHost(e, r, a, i.tabType),
            this.emitChange());
        }
        removeTab(e, t) {
          let n = q(e, t),
            r = this.webviews.get(n);
          (r instanceof M && this.electronPageHandoff.removeTab(r),
            this.pendingElectronTransfers.delete(n),
            this.snapshots.delete(n),
            this.tabPersistenceStates.delete(n));
          let i = this.browserUseTabKeys.delete(n);
          (this.browserUseActiveTabKeys.delete(n),
            this.browserUseCursorStates.delete(n),
            this.browserUseCaptureSurfaceSizes.delete(n),
            this.browserUseViewportSizes.delete(n),
            this.tabCaptureActiveKeys.delete(n),
            this.deviceToolbarTabStates.delete(n),
            this.mountStates.delete(n),
            i && this.syncBrowserUseTabKeys(e),
            this.emitChange());
        }
        getWebview(e, ...t) {
          let n, r, i;
          if (Dn(t)) {
            let [e, a, o] = t;
            ((n = e), (r = a), (i = o));
          } else ((n = J(e, void 0)), (r = t[0]), (i = t[1]));
          let a = q(e, n),
            o = i?.persistedTabsEnabled ?? !1,
            s = this.getPagePersistence(e, n, o),
            c = u(e, n),
            l = this.webviews.get(a),
            f = i?.hostKind ?? `right-panel`;
          if (l instanceof M && l.getPartition() === c)
            return (
              l.setHostKind(f),
              l.setPagePersistence(s) &&
                (this.notifyWebviewHostCreated(e, n, f, s), this.emitChange()),
              i != null &&
                (l.setAdoptionAttributes(
                  i.adoptionLease ?? null,
                  i.adoptedWebContentsId ?? null,
                  r,
                ),
                i.adoptionLease != null &&
                  i.adoptedWebContentsId != null &&
                  d.info(`IAB_ADOPTION renderer updated adopted webview`, {
                    safe: {
                      adoptedWebContentsId: i.adoptedWebContentsId,
                      browserTabId: n,
                      conversationId: e,
                      hasInitialUrl: r.length > 0,
                    },
                    sensitive: {},
                  })),
              l
            );
          l != null && this.disposeWebviewHost(e, n, a, `web`);
          let p = new M({
            browserTabId: n,
            conversationId: e,
            elementKey: En(e, n),
            hostKind: f,
            initialUrl: r,
            pagePersistence: s,
            partition: c,
            adoptionLease: i?.adoptionLease ?? null,
            adoptedWebContentsId: i?.adoptedWebContentsId ?? null,
          });
          this.browserUseActiveTabKeys.has(a) && p.setBrowserUseActive(!0);
          let m = this.browserUseViewportSizes.get(a) ?? null;
          m != null && p.setBrowserUseViewportSize(m);
          let h = this.browserUseCaptureSurfaceSizes.get(a) ?? null;
          return (
            h != null && p.setBrowserUseCaptureSurfaceSize(h),
            p.setTabCaptureActive(this.tabCaptureActiveKeys.has(a)),
            this.webviews.set(a, p),
            this.notifyWebviewHostCreated(e, n, f, s),
            d.info(`IAB_LIFECYCLE renderer created browser sidebar webview`, {
              safe: { browserTabId: n, conversationId: e, hostKind: f },
              sensitive: { initialUrl: r },
            }),
            i?.adoptionLease != null &&
              i.adoptedWebContentsId != null &&
              d.info(`IAB_ADOPTION renderer created adopted webview`, {
                safe: {
                  adoptedWebContentsId: i.adoptedWebContentsId,
                  browserTabId: n,
                  conversationId: e,
                  hasInitialUrl: r.length > 0,
                },
                sensitive: {},
              }),
            this.emitChange(),
            p
          );
        }
        getRetainedWebview(e, t, n, r) {
          let i = q(e, t),
            a = r?.persistedTabsEnabled ?? !1,
            o = this.getPagePersistence(e, t, a),
            s = u(e, t),
            c = this.webviews.get(i),
            l = r?.hostKind ?? `right-panel`;
          if (c != null && c.getPartition() === s)
            return (
              c.setHostKind(l),
              c.setPagePersistence(o) &&
                (this.notifyWebviewHostCreated(e, t, l, o), this.emitChange()),
              c
            );
          c != null && this.disposeWebviewHost(e, t, i, `web`);
          let f = new K({
            browserTabId: t,
            browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSizes.get(i) ?? null,
            browserUseViewportSize: this.browserUseViewportSizes.get(i) ?? null,
            conversationId: e,
            elementKey: En(e, t),
            hostKind: l,
            initialUrl: n,
            isBrowserUseActive: this.browserUseActiveTabKeys.has(i),
            pagePersistence: o,
            partition: s,
          });
          return (
            f.setTabCaptureActive(this.tabCaptureActiveKeys.has(i)),
            this.webviews.set(i, f),
            this.notifyWebviewHostCreated(e, t, l, o),
            d.info(`IAB_LIFECYCLE renderer created retained browser sidebar webview`, {
              safe: { browserTabId: t, conversationId: e, hostKind: l },
              sensitive: { initialUrl: n },
            }),
            this.emitChange(),
            f
          );
        }
        notifyWebviewHostCreated(e, t, n, r) {
          h.dispatchMessage(`browser-sidebar-webview-host-created`, {
            browserTabId: t,
            conversationId: e,
            hostKind: n,
            pagePersistence: r,
          });
        }
        getCursorOverlayHost(e, t = J(e, void 0)) {
          return this.webviews.get(q(e, t))?.getCursorOverlayHost() ?? null;
        }
        setBrowserUseActive(e, ...t) {
          let n = typeof t[0] == `boolean` ? J(e, void 0) : t[0],
            r = typeof t[0] == `boolean` ? t[0] : t[1],
            i = q(e, n),
            a = this.browserUseActiveTabKeys.has(i),
            o = this.browserUseTabKeys.has(i),
            s = this.browserUseCursorStates.get(i) ?? null,
            c = !1;
          if (r) {
            (this.browserUseTabKeys.add(i), o || this.syncBrowserUseTabKeys(e));
            let t = `${e}\0`;
            for (let e of Array.from(this.browserUseActiveTabKeys)) {
              if (e === i || !e.startsWith(t)) continue;
              this.browserUseActiveTabKeys.delete(e);
              let n = this.browserUseCursorStates.get(e) ?? null;
              (n != null && this.browserUseCursorStates.set(e, { visible: !1, x: n.x, y: n.y }),
                this.webviews.get(e)?.setBrowserUseActive?.(!1),
                (c = !0));
            }
            (this.browserUseActiveTabKeys.add(i), a || this.browserUseCursorStates.delete(i));
          } else
            (this.browserUseActiveTabKeys.delete(i),
              s != null && this.browserUseCursorStates.set(i, { visible: !1, x: s.x, y: s.y }));
          (this.webviews.get(i)?.setBrowserUseActive?.(r),
            d.info(`IAB_LIFECYCLE renderer synced browser use webview state`, {
              safe: { browserTabId: n, conversationId: e, isBrowserUseActive: r },
              sensitive: {},
            }),
            (a !== r || s != null || c) && this.emitChange());
        }
        releaseBrowserUseTab(e, t) {
          let n = q(e, t),
            r = this.browserUseActiveTabKeys.delete(n),
            i = this.browserUseTabKeys.delete(n),
            a = this.browserUseCursorStates.delete(n),
            o = this.browserUseCaptureSurfaceSizes.delete(n),
            s = this.browserUseViewportSizes.delete(n),
            c = this.deviceToolbarTabStates.delete(n),
            l = r || i || a || o || s || c;
          (this.webviews.get(n)?.releaseBrowserUse(),
            i && this.syncBrowserUseTabKeys(e),
            l && this.emitChange());
        }
        clearBrowserUseState() {
          let e = new Set([
            ...this.browserUseTabKeys,
            ...this.browserUseActiveTabKeys,
            ...this.browserUseCursorStates.keys(),
            ...this.browserUseCaptureSurfaceSizes.keys(),
            ...this.browserUseViewportSizes.keys(),
          ]);
          for (let t of e) {
            let { browserTabId: e, conversationId: n } = wn(t);
            this.releaseBrowserUseTab(n, e);
          }
        }
        setBrowserUseViewportSize(e, ...t) {
          let n = t.length === 1 ? J(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = q(e, n),
            a = r == null ? null : { width: b(r.width), height: x(r.height) };
          (a == null
            ? this.browserUseViewportSizes.delete(i)
            : this.browserUseViewportSizes.set(i, a),
            this.webviews.get(i)?.setBrowserUseViewportSize?.(a),
            this.setDeviceToolbarTabState(e, n, (e) =>
              a == null
                ? { ...e, toolbarState: { ...e.toolbarState, isEnabled: !1 } }
                : {
                    responsiveViewportSize: a,
                    toolbarState: { ...e.toolbarState, ...a, isEnabled: !0, presetId: S },
                  },
            ));
        }
        setBrowserUseCaptureSurfaceSize(e, ...t) {
          let n = t.length === 1 ? J(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = q(e, n);
          (r == null
            ? this.browserUseCaptureSurfaceSizes.delete(i)
            : this.browserUseCaptureSurfaceSizes.set(i, r),
            this.webviews.get(i)?.setBrowserUseCaptureSurfaceSize(r));
        }
        setBrowserUseCursorState(e, ...t) {
          let n = t.length === 1 ? J(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = q(e, n),
            a = this.browserUseCursorStates.get(i);
          if (r.visible) {
            if (
              a?.visible === r.visible &&
              a.animateMovement === r.animateMovement &&
              a.moveSequence === r.moveSequence &&
              a.x === r.x &&
              a.y === r.y
            )
              return;
            (this.browserUseCursorStates.set(i, {
              animateMovement: r.animateMovement,
              moveSequence: r.moveSequence,
              visible: !0,
              x: r.x,
              y: r.y,
            }),
              this.emitChange());
            return;
          }
          a == null ||
            !a.visible ||
            (this.browserUseCursorStates.set(i, { visible: !1, x: a.x, y: a.y }),
            this.emitChange());
        }
        setTabCaptureActive(e, t, n) {
          let r = q(e, t);
          (n ? this.tabCaptureActiveKeys.add(r) : this.tabCaptureActiveKeys.delete(r),
            this.webviews.get(r)?.setTabCaptureActive(n));
        }
        reassociateTabState(e, ...t) {
          let n = t.length === 1 ? J(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = t.length === 1 ? J(r, void 0) : t[2],
            a = t.length === 4 ? t[3] : void 0,
            o = c(q(e, n), q(r, i)),
            s = q(e, n),
            l = q(r, i);
          if (s === l || this.transferredWebviewKeys.has(o)) return;
          let f = this.webviews.get(s) ?? null,
            p = this.webviews.get(l) ?? null,
            m = this.tabPersistenceStates.get(s) ?? null,
            g = this.tabPersistenceStates.get(l) ?? null,
            ee = this.snapshots.get(s) ?? null;
          if (
            p != null ||
            this.pendingElectronTransfers.has(l) ||
            this.snapshots.has(l) ||
            (g != null && g.mode !== `ephemeral`)
          ) {
            (this.transferredWebviewKeys.add(o),
              f != null && this.disposeWebviewHost(e, n, s, `closed`),
              this.removeTab(e, n),
              h.dispatchMessage(`browser-sidebar-command`, {
                ...(m == null || m.mode === `ephemeral`
                  ? {}
                  : {
                      pagePersistence: {
                        browserStorageId: m.browserStorageId,
                        restore: m.mode === `restore-expected` ? `required` : `none`,
                      },
                    }),
                browserTabId: n,
                conversationId: e,
                command: { type: `close-tab` },
              }),
              a?.removeSourceBrowserStateWhenEmpty &&
                this.removeConversationBrowserStateIfEmpty(e));
            return;
          }
          (f instanceof M && this.electronPageHandoff.transferRoute(f),
            this.pendingElectronTransfers.delete(s),
            this.pendingElectronTransfers.delete(l),
            this.transferredWebviewKeys.add(o),
            f != null &&
              (this.webviews.delete(s),
              f.transfer({
                browserTabId: i,
                conversationId: r,
                elementKey: En(r, i),
                partition: u(r, i),
              }),
              this.webviews.set(l, f)));
          let _ = this.browserUseViewportSizes.get(s) ?? null,
            v = this.browserUseTabKeys.has(s),
            te = this.tabCaptureActiveKeys.delete(s),
            ne = this.mountStates.get(s) ?? null,
            re = this.browserUseActiveTabKeys.delete(s);
          (this.browserUseCaptureSurfaceSizes.delete(s),
            this.browserUseCursorStates.delete(s),
            this.browserUseTabKeys.delete(s),
            this.browserUseViewportSizes.delete(s),
            this.mountStates.delete(s),
            this.tabPersistenceStates.delete(s),
            m != null && this.tabPersistenceStates.set(l, m),
            this.pendingElectronTransfers.set(l, {
              sourceBrowserTabId: n,
              sourceConversationId: e,
            }),
            h.dispatchMessage(`browser-sidebar-command`, {
              conversationId: e,
              browserTabId: n,
              command: {
                type: `transfer-conversation`,
                targetBrowserTabId: i,
                targetConversationId: r,
              },
            }));
          let ie = !1;
          (v && (this.browserUseTabKeys.add(l), this.syncBrowserUseTabKeys(e), (ie = !0)),
            re && this.browserUseActiveTabKeys.add(l),
            _ != null && this.browserUseViewportSizes.set(l, _),
            te && f != null && this.tabCaptureActiveKeys.add(l),
            ne != null &&
              this.mountStates.set(l, { claimKeys: new Set(), generation: ne.generation }),
            f?.setBrowserUseCaptureSurfaceSize(null),
            d.info(`IAB_LIFECYCLE renderer reassociated browser sidebar tab`, {
              safe: {
                sourceBrowserTabId: n,
                sourceConversationId: e,
                targetBrowserTabId: i,
                targetConversationId: r,
              },
            }));
          let ae = this.deviceToolbarTabStates.get(s);
          (ee != null && (this.snapshots.delete(s), this.snapshots.set(l, ee)),
            ie && this.syncBrowserUseTabKeys(r),
            ae != null &&
              (this.deviceToolbarTabStates.delete(s), this.deviceToolbarTabStates.set(l, ae)),
            a?.removeSourceBrowserStateWhenEmpty && this.removeConversationBrowserStateIfEmpty(e),
            this.emitChange());
        }
        consumePendingElectronTransfer(e, t = J(e, void 0)) {
          let n = q(e, t),
            r = this.pendingElectronTransfers.get(n) ?? null;
          return r == null ? null : (this.pendingElectronTransfers.delete(n), r);
        }
        peekPendingElectronTransfer(e, t = J(e, void 0)) {
          return this.pendingElectronTransfers.get(q(e, t)) ?? null;
        }
        disposeAll() {
          (this.electronPageHandoff.disposeAll(),
            this.snapshots.clear(),
            this.browserUseCursorStates.clear(),
            this.browserUseActiveTabKeys.clear(),
            this.browserUseTabKeys.clear(),
            this.browserUseTabIdsKeysByConversation.clear(),
            this.browserUseTabSummarySyncKeysByConversation.clear(),
            this.refreshBrowserUseTabs(),
            this.browserUseCaptureSurfaceSizes.clear(),
            this.browserUseViewportSizes.clear(),
            this.tabCaptureActiveKeys.clear(),
            this.deviceToolbarTabStates.clear(),
            this.tabPersistenceStates.clear(),
            this.pendingElectronTransfers.clear(),
            this.mountStates.clear());
          for (let e of this.webviews.values()) e.dispose();
          (this.webviews.clear(), this.transferredWebviewKeys.clear(), this.emitChange());
        }
        emitChange() {
          for (let e of this.listeners) e();
        }
        removeElectronWebviewFromHandoff(e) {
          e instanceof M && this.electronPageHandoff.disposeHost(e);
        }
        resyncAttachedWebviews() {
          for (let e of this.webviews.values()) e.resync();
        }
        disposeWebviewHost(e, t, n, r) {
          let i = this.webviews.get(n) ?? null;
          (this.webviews.delete(n),
            i != null &&
              (r === `closed` && i instanceof M
                ? this.electronPageHandoff.removeTab(i)
                : this.removeElectronWebviewFromHandoff(i),
              i.dispose(),
              d.info(`IAB_LIFECYCLE renderer removed browser sidebar webview`, {
                safe: { browserTabId: t, conversationId: e, tabType: r },
              })));
        }
        destroyWebviewAtHostRequest(e, t, n, r, i) {
          let a = q(e, t);
          ((this.webviews.get(a) ?? null)?.shouldDestroyForHostRequest({
            mountGeneration: n,
            reason: r,
          }) !== !1 && this.disposeWebviewHost(e, t, a, r),
            r === `closed` && this.removeTab(e, t),
            h.dispatchMessage(`browser-sidebar-webview-destroyed`, {
              browserTabId: t,
              conversationId: e,
              reason: r,
              teardownId: i,
            }));
        }
        getFirstConversationBrowserTabId(e, t) {
          let n = `${e}\0`;
          for (let e of t) if (e.startsWith(n)) return r(e.slice(n.length));
          return null;
        }
        getConversationBrowserTabIdsFromKeys(e, t) {
          let n = `${e}\0`,
            i = [];
          for (let e of t) e.startsWith(n) && i.push(r(e.slice(n.length)));
          return i;
        }
        removeConversationBrowserStateIfEmpty(e) {
          this.getConversationBrowserTabIds(e).length > 0 || this.removeConversationTabs(e);
        }
        syncBrowserUseTabKeys(e) {
          let t = this.getConversationBrowserTabIdsFromKeys(e, this.browserUseTabKeys);
          if (t.length === 0) {
            (this.browserUseTabIdsKeysByConversation.delete(e),
              this.browserUseTabSummarySyncKeysByConversation.delete(e),
              this.refreshBrowserUseTabs());
            return;
          }
          (this.browserUseTabIdsKeysByConversation.set(e, t.join(`\0`)),
            this.browserUseTabSummarySyncKeysByConversation.set(
              e,
              t.map((t) => Tn(t, this.getSnapshot(e, t))).join(`\0`),
            ),
            this.refreshBrowserUseTabs());
        }
        refreshBrowserUseTabs() {
          this.browserUseTabs = Array.from(this.browserUseTabKeys, wn);
        }
        removeConversationTabs(e) {
          let t = `${e}\0`;
          this.electronPageHandoff.removeConversation(e);
          for (let e of this.snapshots.keys()) e.startsWith(t) && this.snapshots.delete(e);
          for (let e of this.browserUseActiveTabKeys)
            e.startsWith(t) && this.browserUseActiveTabKeys.delete(e);
          for (let e of this.browserUseTabKeys) e.startsWith(t) && this.browserUseTabKeys.delete(e);
          this.refreshBrowserUseTabs();
          for (let e of this.browserUseCursorStates.keys())
            e.startsWith(t) && this.browserUseCursorStates.delete(e);
          for (let e of this.browserUseCaptureSurfaceSizes.keys())
            e.startsWith(t) && this.browserUseCaptureSurfaceSizes.delete(e);
          for (let e of this.browserUseViewportSizes.keys())
            e.startsWith(t) && this.browserUseViewportSizes.delete(e);
          for (let e of this.tabCaptureActiveKeys)
            e.startsWith(t) && this.tabCaptureActiveKeys.delete(e);
          for (let e of this.deviceToolbarTabStates.keys())
            e.startsWith(t) && this.deviceToolbarTabStates.delete(e);
          for (let e of this.pendingElectronTransfers.keys())
            e.startsWith(t) && this.pendingElectronTransfers.delete(e);
          for (let e of this.mountStates.keys()) e.startsWith(t) && this.mountStates.delete(e);
          for (let e of this.tabPersistenceStates.keys())
            e.startsWith(t) && this.tabPersistenceStates.delete(e);
          for (let [e, n] of this.webviews.entries())
            e.startsWith(t) &&
              (this.webviews.delete(e), this.removeElectronWebviewFromHandoff(n), n.dispose());
          (this.browserUseTabIdsKeysByConversation.delete(e),
            this.browserUseTabSummarySyncKeysByConversation.delete(e));
        }
        markWebviewAttached(e, t, n) {
          let r = this.getMountGeneration(e, t);
          (r === n && Zt(e, t),
            this.electronPageHandoff.acknowledgeAttachment(e, t, n, r),
            this.emitChange());
        }
      }),
      (X = new kn()));
  });
function Z(e, t) {
  return De.flatMap((n) => {
    let r = Ee(n);
    return e.get(r.tabs$).flatMap((e) => {
      let i = y(e, t);
      return i == null ? [] : [{ browserTabId: i, controller: r, tab: e, target: n }];
    });
  });
}
function jn(e, t, n, r) {
  let i = Z(e, t);
  if (r != null) {
    let e = i.find((e) => e.browserTabId === n && e.target === r);
    if (e != null) return e;
  }
  return i.find((e) => e.browserTabId === n) ?? null;
}
function Mn(e, t) {
  let n = [],
    r = new Set();
  for (let { browserTabId: i } of Z(e, t)) r.has(i) || (r.add(i), n.push(i));
  for (let e of Kt(t)) r.has(e) || (r.add(e), n.push(e));
  let i = e.get(ae)
    ? X.getConversationBrowserTabIds(t)
    : [X.getBrowserUseSummaryBrowserTabId(t)].filter((e) => e != null);
  for (let e of i) r.has(e) || !X.isBrowserUseTab(t, e) || (r.add(e), n.push(e));
  return n;
}
function Nn(e, t) {
  let n = Mn(e, t),
    r = e.get(Bn, t);
  if (r != null && n.includes(r)) return r;
  for (let n of De) {
    let r = Ee(n),
      i = y(e.get(r.activeTab$), t);
    if (i != null) return i;
  }
  return n.at(-1) ?? null;
}
function Pn(e, t, n) {
  e.set(Bn, t, n);
}
function Fn(e, t, n, r) {
  let i = (r == null ? null : Ln(e, t, n, r)) ?? In(e, t, n);
  return i == null ? null : y(n[i], e);
}
function In(e, t, n) {
  let r = { bottom: y(n.bottom, e), right: y(n.right, e) };
  return t === `bottom-panel` && r.bottom != null
    ? `bottom`
    : (t === `right-panel` && r.right != null) || r.right != null
      ? `right`
      : r.bottom == null
        ? null
        : `bottom`;
}
function Ln(e, t, n, r) {
  return In(e, t, { bottom: r.bottom ? n.bottom : null, right: r.right ? n.right : null });
}
function Rn(e, t) {
  return e === `bottom-panel` && t.bottom
    ? `bottom`
    : (e === `right-panel` && t.right) || t.right
      ? `right`
      : t.bottom
        ? `bottom`
        : null;
}
function zn(e, t, n) {
  let r = [];
  for (let i of De) {
    if (!n[i]) continue;
    let a = y(t[i], e);
    a != null && r.push(a);
  }
  return r;
}
var Bn,
  Vn = e(() => {
    (_(), xe(), An(), sn(), se(), le(), Se(), (Bn = n(fe, (e) => null)));
  }),
  Hn,
  Un,
  Wn = e(() => {
    (t(g()),
      (Hn = te()),
      (Un = (e) =>
        (0, Hn.jsx)(`svg`, {
          width: 11,
          height: 10,
          viewBox: `0 0 11 10`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Hn.jsx)(`path`, {
            d: `M8.31253 2.11631C9.09862 2.34604 9.66671 3.0809 9.66671 3.94307C9.66671 4.33492 9.54944 4.70008 9.34817 5.00336C9.54944 5.30663 9.66671 5.67179 9.66671 6.06364C9.66671 6.78255 9.27246 7.41121 8.68711 7.73426C8.42142 8.47456 7.87597 8.95837 7.22513 9.11357C6.64391 9.25218 6.02059 9.11849 5.50004 8.73467C4.97949 9.11848 4.35617 9.25217 3.77495 9.11357C3.12411 8.95838 2.57866 8.47456 2.31298 7.73426C1.72762 7.41121 1.33337 6.78255 1.33337 6.06364C1.33337 5.67179 1.45064 5.30663 1.65191 5.00335C1.45064 4.70008 1.33337 4.33492 1.33337 3.94307C1.33337 3.0809 1.90146 2.34604 2.68755 2.11631C2.75931 1.81107 2.88749 1.5507 3.06892 1.34317C3.30998 1.06742 3.62313 0.910454 3.95413 0.855841C4.48038 0.769012 5.0434 0.937968 5.50004 1.27314C5.95667 0.937966 6.51969 0.768992 7.04595 0.855811C7.37695 0.910419 7.6901 1.06738 7.93117 1.34314C8.1126 1.55068 8.24078 1.81106 8.31253 2.11631ZM5.08338 2.0044C4.76294 1.73731 4.38187 1.62987 4.08979 1.67806C3.93229 1.70404 3.79915 1.774 3.69631 1.89164C3.59199 2.01097 3.49718 2.20463 3.46475 2.51112C3.44413 2.70595 3.29056 2.8601 3.09581 2.88146C2.57951 2.93807 2.16671 3.38656 2.16671 3.94307C2.16671 4.24436 2.28784 4.51469 2.482 4.70835C2.56037 4.78652 2.60442 4.89266 2.60442 5.00335C2.60442 5.11405 2.56037 5.22019 2.482 5.29836C2.28784 5.49202 2.16671 5.76234 2.16671 6.06364C2.16671 6.51371 2.4376 6.89519 2.81592 7.0531C2.93346 7.10217 3.02211 7.2023 3.05656 7.32493C3.21996 7.90658 3.58692 8.21204 3.96825 8.30297C4.31646 8.386 4.72668 8.30224 5.08338 8.00278V2.0044ZM5.91671 8.00278C6.2734 8.30225 6.68362 8.38601 7.03183 8.30297C7.41316 8.21204 7.78012 7.90657 7.94352 7.32493C7.97797 7.2023 8.06662 7.10217 8.18417 7.0531C8.56248 6.89519 8.83337 6.51371 8.83337 6.06364C8.83337 5.76234 8.71224 5.49202 8.51808 5.29836C8.43971 5.22019 8.39566 5.11405 8.39566 5.00335C8.39566 4.89266 8.43971 4.78652 8.51808 4.70835C8.71224 4.51469 8.83337 4.24436 8.83337 3.94307C8.83337 3.38656 8.42058 2.93807 7.90427 2.88146C7.70952 2.86011 7.55595 2.70595 7.53533 2.51112C7.5029 2.20461 7.40809 2.01094 7.30377 1.89161C7.20093 1.77397 7.06779 1.70401 6.9103 1.67803C6.61822 1.62984 6.23715 1.7373 5.91671 2.0044V8.00278Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  Gn,
  Kn = e(() => {
    (_(),
      re(),
      we(),
      be(),
      he(),
      Vn(),
      ue(),
      (Gn = a(pe, (e, { get: t }) =>
        e == null
          ? null
          : Fn(
              e,
              t(de),
              { bottom: t(Ce.activeTab$), right: t(Te.activeTab$) },
              { bottom: t(ie), right: t(oe) && t(ce) },
            ),
      )),
      p(pe, ({ get: e }) => e(ce) && e(Te.activeTab$)?.tabId === ve.TIMELINE));
  });
function qn(e, t, n, { isOpen: r, url: i }) {
  let a = i.trim();
  e.set(Xn, Yn(t, n), { currentUrls: a.length > 0 ? [a] : [], isOpen: r });
}
function Jn(e, t, n) {
  return t == null || n == null ? null : e.get(Xn, Yn(t, n));
}
function Yn(e, t) {
  return `${e}\0${t}`;
}
var Xn,
  Zn = e(() => {
    (_(), f(), (Xn = n(o, (e) => null)));
  }),
  Q,
  Qn,
  $n = e(() => {
    (t(g()),
      (Q = te()),
      (Qn = (e) =>
        (0, Q.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Q.jsx)(`path`, {
              d: `M8.505 3.645c.657-1.147 2.333-1.147 2.99 0l6.025 10.526c.64 1.119-.176 2.504-1.495 2.504H3.975c-1.319 0-2.135-1.385-1.495-2.504L8.505 3.645Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M10 7.083v3.334`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M10 13.333h.008`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
          ],
        })));
  });
function er(e) {
  window.dispatchEvent(new CustomEvent($, { detail: { conversationId: e } }));
}
function tr(e, t) {
  let n = (n) => {
    n.detail.conversationId === e && t();
  };
  return (
    window.addEventListener($, n),
    () => {
      window.removeEventListener($, n);
    }
  );
}
var $,
  nr = e(() => {
    $ = `codex-browser-sidebar-tweaks-submit-request`;
  });
export {
  S as $,
  an as A,
  Kt as B,
  Pn as C,
  Zt as D,
  Bt as E,
  Rt as F,
  Ut as G,
  sn as H,
  kt as I,
  qt as J,
  Xt as K,
  Dt as L,
  Et as M,
  Yt as N,
  Ft as O,
  Wt as P,
  Ve as Q,
  Pt as R,
  Vn as S,
  An as T,
  rn as U,
  Lt as V,
  tn as W,
  Ue as X,
  We as Y,
  He as Z,
  Ln as _,
  $n as a,
  Fe as at,
  In as b,
  qn as c,
  Ge as ct,
  Un as d,
  x as et,
  Wn as f,
  Z as g,
  jn as h,
  Qn as i,
  Oe as it,
  Ot as j,
  zt as k,
  Gn as l,
  Nn as m,
  nr as n,
  je as nt,
  Jn as o,
  ke as ot,
  Mn as p,
  en as q,
  er as r,
  ze as rt,
  Zn as s,
  Le as st,
  tr as t,
  b as tt,
  Kn as u,
  zn as v,
  X as w,
  Fn as x,
  Rn as y,
  Jt as z,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~ntme6bea.js.map
