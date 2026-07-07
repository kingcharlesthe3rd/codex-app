import { n as e, s as t } from "./rolldown-runtime.js";
import {
  At as n,
  Bt as r,
  Dt as i,
  El as a,
  Et as o,
  J as s,
  Jc as c,
  Rt as l,
  St as u,
  Tl as d,
  Xs as f,
  _l as p,
  _t as m,
  bt as h,
  cl as g,
  da as _,
  fa as v,
  gt as y,
  it as b,
  kt as x,
  ml as S,
  nc as C,
  qc as w,
  st as T,
  tc as E,
  vl as D,
  yn as ee,
  yt as O,
  zc as k,
  zt as A,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  $ as j,
  At as M,
  Bt as N,
  Ct as P,
  Dn as te,
  Dt as ne,
  En as re,
  Et as ie,
  M as ae,
  Mt as oe,
  Nt as se,
  Ot as F,
  Pt as ce,
  St as le,
  Tn as I,
  Tt as ue,
  _n as de,
  _t as fe,
  bt as pe,
  ct as me,
  dt as he,
  gn as ge,
  hn as L,
  ht as _e,
  j as ve,
  jt as ye,
  kt as be,
  lt as xe,
  mn as Se,
  ot as R,
  pt as Ce,
  st as we,
  tt as Te,
  ut as Ee,
  vt as De,
  wn as Oe,
  wt as ke,
  xt as Ae,
  yt as je,
  zt as Me,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Fc as Ne,
  Gd as Pe,
  Mc as Fe,
  Pc as Ie,
  Sx as Le,
  Xy as Re,
  Yd as ze,
  Yn as Be,
  Yy as Ve,
  _r as He,
  _x as z,
  as as Ue,
  jc as We,
  nx as Ge,
  rx as Ke,
  ts as qe,
  wx as Je,
  yx as Ye,
} from "./app-initial~app-main~new-thread-panel-page.js";
var Xe,
  Ze = e(() => {
    Xe = {
      default: `rounded-full`,
      icon: `rounded-full electron:rounded-md`,
      iconMd: `rounded-md`,
      iconSm: `rounded-md`,
      large: `rounded-full`,
      medium: `rounded-lg`,
      composer: `rounded-full`,
      composerSm: `rounded-full`,
      toolbar: `rounded-lg`,
    };
  });
function Qe(e) {
  return C(it).data?.values[e.key] ?? e.default;
}
function $e(e) {
  let t = C(it);
  return t.data?.configuredValues == null ? t.data?.values[e.key] : t.data.configuredValues[e.key];
}
function et() {
  return C(it).isLoading;
}
function tt(e, t) {
  return e(it).data?.values[t.key] ?? t.default;
}
async function nt(e, t, r, i) {
  let a = e.query.snapshot(it);
  await a.cancel();
  let o = a.getData(),
    s = i?.optimistic ?? !0;
  s &&
    a.setData({
      configuredValues:
        o?.configuredValues == null ? void 0 : { ...o.configuredValues, [t.key]: r },
      values: { ...o?.values, [t.key]: r },
    });
  try {
    (await V(t, r),
      s ||
        a.setData({
          configuredValues:
            o?.configuredValues == null ? void 0 : { ...o.configuredValues, [t.key]: r },
          values: { ...o?.values, [t.key]: r },
        }));
  } catch (e) {
    throw (a.setData(o), e);
  } finally {
    (await a.invalidate(),
      n.dispatchMessage(`query-cache-invalidate`, { queryKey: [...a.queryKey] }));
  }
}
function rt(e, t, n) {
  let r = e.query.snapshot(it),
    i = r.getData();
  r.setData({
    configuredValues: i?.configuredValues == null ? void 0 : { ...i.configuredValues, [t.key]: n },
    values: { ...i?.values, [t.key]: n },
  });
}
async function B(e) {
  return (await y(`get-setting`, { params: { key: e.key } })).value ?? e.default;
}
async function V(e, t) {
  await y(`set-setting`, { params: { key: e.key, value: t } });
}
var it,
  at = e(() => {
    (f(),
      x(),
      A(),
      i(),
      h(),
      (it = O(l, `get-settings`, { networkMode: `always`, staleTime: o.FIVE_SECONDS })));
  });
function ot({ preference: e, systemPrefersReducedMotion: t }) {
  switch (e) {
    case `off`:
      return !1;
    case `on`:
      return !0;
    case `system`:
      return t;
  }
}
function st() {
  return typeof window > `u` || typeof window.matchMedia != `function`
    ? !1
    : window.matchMedia(lt).matches;
}
function ct() {
  return typeof window > `u` || typeof window.matchMedia != `function`
    ? null
    : window.matchMedia(lt);
}
var lt,
  ut,
  dt,
  ft,
  pt = e(() => {
    (f(),
      r(),
      A(),
      at(),
      (lt = `(prefers-reduced-motion: reduce)`),
      (ut = w(l, st())),
      (dt = k(l, ({ get: e }) => tt(e, ee.reducedMotionPreference))),
      (ft = k(l, ({ get: e }) => ot({ preference: e(dt), systemPrefersReducedMotion: e(ut) }))));
  });
function mt() {
  return C(ft);
}
var ht = e(() => {
    (f(), pt());
  }),
  gt,
  _t,
  vt = e(() => {
    (t(a()),
      (gt = D()),
      (_t = (e) =>
        (0, gt.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, gt.jsx)(`path`, {
              opacity: 0.3,
              d: `M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z`,
              fill: `currentColor`,
            }),
            (0, gt.jsx)(`path`, {
              d: `M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12H6C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6V4Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function yt(e) {
  let t = (0, xt.c)(13),
    { Icon: n, className: r, containerClassName: i, animationDurationMs: a } = e,
    o = n === void 0 ? _t : n,
    s = mt(),
    [c] = (0, St.useState)(bt),
    l = a == null ? void 0 : `${a}ms`,
    u = !s && `animate-spin`,
    d;
  t[0] !== i || t[1] !== u
    ? ((d = Ge(
        u,
        `inline-flex h-fit w-fit items-center justify-center leading-none contain-layout contain-paint contain-style`,
        i,
      )),
      (t[0] = i),
      (t[1] = u),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== c || t[4] !== l
    ? ((f = { animationDelay: c, animationDuration: l }), (t[3] = c), (t[4] = l), (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== o || t[7] !== r
    ? ((p = (0, Ct.jsx)(o, { className: r })), (t[6] = o), (t[7] = r), (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== d || t[10] !== f || t[11] !== p
      ? ((m = (0, Ct.jsx)(`div`, { className: d, style: f, children: p })),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function bt() {
  return `-${Date.now() % 1e3}ms`;
}
var xt,
  St,
  Ct,
  wt = e(() => {
    ((xt = d()), Ke(), (St = t(a(), 1)), ht(), vt(), (Ct = D()));
  });
function Tt(e) {
  let t = (0, Et.c)(27),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]))
    : (({
        uniform: a,
        allowShrink: o,
        color: s,
        size: c,
        disabled: l,
        className: r,
        children: n,
        type: d,
        loading: u,
        ...i
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d));
  let f = a === void 0 ? !1 : a,
    p = o === void 0 ? !1 : o,
    m = s === void 0 ? `primary` : s,
    h = c === void 0 ? `default` : c,
    g = l === void 0 ? !1 : l,
    _ = u === void 0 ? !1 : u,
    v = d ?? `button`,
    y = Xe[h],
    b = Ot[m],
    x = kt[h],
    S = p && `min-w-0`,
    C;
  t[11] !== r || t[12] !== x || t[13] !== S || t[14] !== y || t[15] !== b || t[16] !== f
    ? ((C = Ge(
        `border-token-border no-drag cursor-interaction flex items-center gap-1 border whitespace-nowrap select-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-40`,
        y,
        b,
        x,
        S,
        { true: `aspect-square items-center justify-center !px-0`, false: `` }[
          f ? `true` : `false`
        ],
        r,
      )),
      (t[11] = r),
      (t[12] = x),
      (t[13] = S),
      (t[14] = y),
      (t[15] = b),
      (t[16] = f),
      (t[17] = C))
    : (C = t[17]);
  let w = g || _,
    T;
  t[18] === _
    ? (T = t[19])
    : ((T = _ && (0, Dt.jsx)(yt, { className: `icon-xxs` })), (t[18] = _), (t[19] = T));
  let E;
  return (
    t[20] !== n || t[21] !== i || t[22] !== C || t[23] !== w || t[24] !== T || t[25] !== v
      ? ((E = (0, Dt.jsxs)(`button`, {
          type: v,
          className: C,
          disabled: w,
          ...i,
          children: [T, n],
        })),
        (t[20] = n),
        (t[21] = i),
        (t[22] = C),
        (t[23] = w),
        (t[24] = T),
        (t[25] = v),
        (t[26] = E))
      : (E = t[26]),
    E
  );
}
var Et,
  Dt,
  Ot,
  kt,
  At = e(() => {
    ((Et = d()),
      Ke(),
      Ze(),
      wt(),
      (Dt = D()),
      (Ot = {
        danger: `bg-token-charts-red/10 enabled:hover:bg-token-charts-red/20 text-token-charts-red border-transparent`,
        ghost: `text-token-text-tertiary enabled:hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background border-transparent`,
        outlineActive: `border-token-border text-token-button-tertiary-foreground bg-token-foreground/10 enabled:hover:bg-token-foreground/15 data-[state=open]:bg-token-foreground/15 border`,
        ghostActive: `text-token-foreground enabled:hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background border-transparent`,
        ghostMuted: `text-token-muted-foreground enabled:hover:bg-transparent data-[state=open]:bg-transparent hover:text-token-foreground border-transparent`,
        ghostTertiary: `text-token-text-tertiary enabled:hover:bg-transparent data-[state=open]:bg-transparent enabled:hover:text-token-foreground border-transparent`,
        outline: `border-token-border text-token-button-tertiary-foreground bg-token-bg-fog enabled:hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background border`,
        primary: `bg-token-foreground enabled:hover:bg-token-foreground/80 data-[state=open]:bg-token-foreground/80 text-token-dropdown-background`,
        secondary: `text-token-foreground bg-token-foreground/5 enabled:hover:bg-token-foreground/10 data-[state=open]:bg-token-foreground/10 border-transparent`,
      }),
      (kt = {
        composer: `h-token-button-composer px-2 py-0 text-sm leading-[18px]`,
        composerSm: `h-token-button-composer-sm px-1.5 py-0 text-sm leading-[18px]`,
        default: `px-2 py-0.5 text-sm leading-[18px]`,
        icon: `electron:p-1 electron:[&>svg]:icon-sm flex items-center justify-center p-0.5`,
        iconMd: `flex size-5 items-center justify-center p-0.5 [&>svg]:icon-2xs`,
        iconSm: `flex h-4 w-4 items-center justify-center p-0.5 [&>svg]:icon-2xs`,
        large: `px-5 py-2 text-base leading-[18px]`,
        medium: `px-4 py-1.5 text-base leading-[18px]`,
        toolbar: `h-token-button-composer px-2 py-0 text-base leading-[18px]`,
      }));
  });
function jt(e) {
  return (t) => (t.pointerType === `mouse` ? void 0 : e(t));
}
var H,
  U,
  Mt,
  Nt,
  Pt,
  W,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn = e(() => {
    ((H = t(a(), 1)),
      te(),
      I(),
      de(),
      ce(),
      Se(),
      Me(),
      (U = D()),
      (Mt = `ContextMenu`),
      ([Nt, Pt] = Oe(Mt, [se])),
      (W = se()),
      ([Ft, It] = Nt(Mt)),
      (Lt = (e) => {
        let { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: a = !0 } = e,
          [o, s] = H.useState(!1),
          c = W(t),
          l = L(r),
          u = H.useCallback(
            (e) => {
              (s(e), l(e));
            },
            [l],
          );
        return (0, U.jsx)(Ft, {
          scope: t,
          open: o,
          onOpenChange: u,
          modal: a,
          children: (0, U.jsx)(F, {
            ...c,
            dir: i,
            open: o,
            onOpenChange: u,
            modal: a,
            children: n,
          }),
        });
      }),
      (Lt.displayName = Mt),
      (Rt = `ContextMenuTrigger`),
      (zt = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, disabled: r = !1, ...i } = e,
          a = It(Rt, n),
          o = W(n),
          s = H.useRef({ x: 0, y: 0 }),
          c = H.useRef({
            getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current }),
          }),
          l = H.useRef(0),
          u = H.useCallback(() => window.clearTimeout(l.current), []),
          d = (e) => {
            ((s.current = { x: e.clientX, y: e.clientY }), a.onOpenChange(!0));
          };
        return (
          H.useEffect(() => u, [u]),
          H.useEffect(() => void (r && u()), [r, u]),
          (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(fe, { ...o, virtualRef: c }),
              (0, U.jsx)(ge.span, {
                "data-state": a.open ? `open` : `closed`,
                "data-disabled": r ? `` : void 0,
                ...i,
                ref: t,
                style: { WebkitTouchCallout: `none`, ...e.style },
                onContextMenu: r
                  ? e.onContextMenu
                  : re(e.onContextMenu, (e) => {
                      (u(), d(e), e.preventDefault());
                    }),
                onPointerDown: r
                  ? e.onPointerDown
                  : re(
                      e.onPointerDown,
                      jt((e) => {
                        (u(), (l.current = window.setTimeout(() => d(e), 700)));
                      }),
                    ),
                onPointerMove: r ? e.onPointerMove : re(e.onPointerMove, jt(u)),
                onPointerCancel: r ? e.onPointerCancel : re(e.onPointerCancel, jt(u)),
                onPointerUp: r ? e.onPointerUp : re(e.onPointerUp, jt(u)),
              }),
            ],
          })
        );
      })),
      (zt.displayName = Rt),
      (Bt = `ContextMenuPortal`),
      (Vt = (e) => {
        let { __scopeContextMenu: t, ...n } = e,
          r = W(t);
        return (0, U.jsx)(ue, { ...r, ...n });
      }),
      (Vt.displayName = Bt),
      (Ht = `ContextMenuContent`),
      (Ut = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = It(Ht, n),
          a = W(n),
          o = H.useRef(!1);
        return (0, U.jsx)(pe, {
          ...a,
          ...r,
          ref: t,
          side: `right`,
          sideOffset: 2,
          align: `start`,
          onCloseAutoFocus: (t) => {
            (e.onCloseAutoFocus?.(t),
              !t.defaultPrevented && o.current && t.preventDefault(),
              (o.current = !1));
          },
          onInteractOutside: (t) => {
            (e.onInteractOutside?.(t), !t.defaultPrevented && !i.modal && (o.current = !0));
          },
          style: {
            ...e.style,
            "--radix-context-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
            "--radix-context-menu-content-available-width": `var(--radix-popper-available-width)`,
            "--radix-context-menu-content-available-height": `var(--radix-popper-available-height)`,
            "--radix-context-menu-trigger-width": `var(--radix-popper-anchor-width)`,
            "--radix-context-menu-trigger-height": `var(--radix-popper-anchor-height)`,
          },
        });
      })),
      (Ut.displayName = Ht),
      (Wt = `ContextMenuGroup`),
      (Gt = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(Ae, { ...i, ...r, ref: t });
      })),
      (Gt.displayName = Wt),
      (Kt = `ContextMenuLabel`),
      (qt = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(ke, { ...i, ...r, ref: t });
      })),
      (qt.displayName = Kt),
      (Jt = `ContextMenuItem`),
      (Yt = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(le, { ...i, ...r, ref: t });
      })),
      (Yt.displayName = Jt),
      (Xt = `ContextMenuCheckboxItem`),
      (Zt = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(je, { ...i, ...r, ref: t });
      })),
      (Zt.displayName = Xt),
      (Qt = `ContextMenuRadioGroup`),
      ($t = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(ie, { ...i, ...r, ref: t });
      })),
      ($t.displayName = Qt),
      (en = `ContextMenuRadioItem`),
      (tn = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(ne, { ...i, ...r, ref: t });
      })),
      (tn.displayName = en),
      (nn = `ContextMenuItemIndicator`),
      (rn = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(P, { ...i, ...r, ref: t });
      })),
      (rn.displayName = nn),
      (an = `ContextMenuSeparator`),
      (on = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(be, { ...i, ...r, ref: t });
      })),
      (on.displayName = an),
      (sn = `ContextMenuArrow`),
      (cn = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(De, { ...i, ...r, ref: t });
      })),
      (cn.displayName = sn),
      (ln = `ContextMenuSub`),
      (un = (e) => {
        let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e,
          o = W(t),
          [s, c] = N({ prop: i, defaultProp: a ?? !1, onChange: r, caller: ln });
        return (0, U.jsx)(M, { ...o, open: s, onOpenChange: c, children: n });
      }),
      (un.displayName = ln),
      (dn = `ContextMenuSubTrigger`),
      (fn = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(oe, { ...i, ...r, ref: t });
      })),
      (fn.displayName = dn),
      (pn = `ContextMenuSubContent`),
      (mn = H.forwardRef((e, t) => {
        let { __scopeContextMenu: n, ...r } = e,
          i = W(n);
        return (0, U.jsx)(ye, {
          ...i,
          ...r,
          ref: t,
          style: {
            ...e.style,
            "--radix-context-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
            "--radix-context-menu-content-available-width": `var(--radix-popper-available-width)`,
            "--radix-context-menu-content-available-height": `var(--radix-popper-available-height)`,
            "--radix-context-menu-trigger-width": `var(--radix-popper-anchor-width)`,
            "--radix-context-menu-trigger-height": `var(--radix-popper-anchor-height)`,
          },
        });
      })),
      (mn.displayName = pn),
      (hn = Lt),
      (gn = zt),
      (_n = Vt),
      (vn = Ut),
      (yn = Yt),
      (bn = Zt),
      (xn = on),
      (Sn = un),
      (Cn = fn),
      (wn = mn));
  });
function En(e, t) {
  return e.map((e) => {
    if (e.type === `separator`) return { ...e, nativeLabel: ``, submenu: void 0 };
    let n = e.submenu ? En(e.submenu, t) : void 0,
      r = e.message ? t(e.message, e.messageValues) : e.id,
      i = e.tooltipMessage ? t(e.tooltipMessage, e.tooltipMessageValues) : void 0;
    return { ...e, nativeLabel: r, nativeTooltip: i, submenu: n };
  });
}
function Dn(e) {
  return e.map((e) => ({
    id: e.id,
    type: e.type === `separator` ? `separator` : void 0,
    label:
      e.type === `separator`
        ? ``
        : e.type === `checkbox` && e.checked === !0
          ? `\u2713 ${e.nativeLabel}`
          : e.nativeLabel,
    icon: e.icon,
    enabled: e.enabled ?? !0,
    toolTip: e.nativeTooltip,
    submenu: e.submenu ? Dn(e.submenu) : void 0,
  }));
}
function On(e, t) {
  for (let n of e)
    if (n.type !== `separator`) {
      if (n.id === t) return n;
      if (n.submenu) {
        let e = On(n.submenu, t);
        if (e) return e;
      }
    }
}
function kn(e) {
  return `then` in e && typeof e.then == `function`;
}
function An(e) {
  let t = (0, Nn.c)(83),
    {
      items: n,
      getItems: r,
      children: i,
      disableNative: a,
      awaitBeforeOpen: o,
      onBeforeOpen: s,
    } = e,
    c = o === void 0 ? !0 : o,
    l = Je(),
    u = _e(),
    d = !a && window.electronBridge?.showContextMenu != null,
    f;
  t[0] === n ? (f = t[1]) : ((f = n ?? []), (t[0] = n), (t[1] = f));
  let p;
  t[2] !== l.formatMessage || t[3] !== f
    ? ((p = En(f, l.formatMessage)), (t[2] = l.formatMessage), (t[3] = f), (t[4] = p))
    : (p = t[4]);
  let [m, h] = Pn.useState(p),
    g;
  t[5] === l.formatMessage
    ? (g = t[6])
    : ((g = (e) => {
        let t = En(e, l.formatMessage);
        return (h(t), t);
      }),
      (t[5] = l.formatMessage),
      (t[6] = g));
  let _ = g,
    v;
  t[7] !== r || t[8] !== n || t[9] !== _
    ? ((v = () => {
        let e = r ? r() : (n ?? []);
        return kn(e) ? (h([]), e.then(_), []) : _(e);
      }),
      (t[7] = r),
      (t[8] = n),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y = v,
    b;
  t[11] !== c || t[12] !== s || t[13] !== y
    ? ((b = () => {
        if (!c) {
          let e = y(),
            t = s?.();
          return (t != null && Promise.resolve(t).then(y), e);
        }
        let e = s?.();
        return (e != null && Promise.resolve(e).then(y), y());
      }),
      (t[11] = c),
      (t[12] = s),
      (t[13] = y),
      (t[14] = b))
    : (b = t[14]);
  let x = b,
    S;
  t[15] !== r || t[16] !== n || t[17] !== s || t[18] !== _
    ? ((S = async () => (await s?.(), _(await (r ? r() : (n ?? []))))),
      (t[15] = r),
      (t[16] = n),
      (t[17] = s),
      (t[18] = _),
      (t[19] = S))
    : (S = t[19]);
  let C = S,
    w;
  t[20] !== r || t[21] !== l.formatMessage || t[22] !== n
    ? ((w = () => {
        r || h(En(n ?? [], l.formatMessage));
      }),
      (t[20] = r),
      (t[21] = l.formatMessage),
      (t[22] = n),
      (t[23] = w))
    : (w = t[23]);
  let T;
  (t[24] !== r || t[25] !== l || t[26] !== n
    ? ((T = [r, l, n]), (t[24] = r), (t[25] = l), (t[26] = n), (t[27] = T))
    : (T = t[27]),
    Pn.useEffect(w, T));
  let E;
  t[28] === m
    ? (E = t[29])
    : ((E = (e, t) => {
        On(t === void 0 ? m : t, e)?.onSelect?.();
      }),
      (t[28] = m),
      (t[29] = E));
  let D = E,
    ee = jn,
    O;
  t[30] !== c || t[31] !== D || t[32] !== x || t[33] !== C || t[34] !== d
    ? ((O = async (e) => {
        if (!d) return;
        (e.preventDefault(), document.dispatchEvent(new PointerEvent(`pointercancel`)));
        let t = c ? await C() : x(),
          n = (await window.electronBridge?.showContextMenu?.(Dn(t)))?.id;
        n && D(n, t);
      }),
      (t[30] = c),
      (t[31] = D),
      (t[32] = x),
      (t[33] = C),
      (t[34] = d),
      (t[35] = O))
    : (O = t[35]);
  let k = we(O),
    A = i,
    M = A.props.onContextMenu,
    N;
  t[36] !== M || t[37] !== k || t[38] !== d
    ? ((N = (e) => {
        if ((M?.(e), d)) {
          k(e);
          return;
        }
        e.stopPropagation();
      }),
      (t[36] = M),
      (t[37] = k),
      (t[38] = d),
      (t[39] = N))
    : (N = t[39]);
  let P = we(N);
  if (d) {
    let e;
    if (t[40] !== A || t[41] !== P) {
      let n;
      (t[43] === P ? (n = t[44]) : ((n = { onContextMenu: P }), (t[43] = P), (t[44] = n)),
        (e = Pn.cloneElement(A, n)),
        (t[40] = A),
        (t[41] = P),
        (t[42] = e));
    } else e = t[42];
    return e;
  }
  let te;
  if (t[45] !== A || t[46] !== P) {
    let e;
    (t[48] === P ? (e = t[49]) : ((e = { onContextMenu: P }), (t[48] = P), (t[49] = e)),
      (te = Pn.cloneElement(A, e)),
      (t[45] = A),
      (t[46] = P),
      (t[47] = te));
  } else te = t[47];
  let ne = te,
    re,
    ie,
    ae,
    oe,
    se,
    F,
    ce,
    le,
    I;
  if (t[50] !== x || t[51] !== m || t[52] !== ne || t[53] !== u) {
    let e = (t) =>
      t.map((t) =>
        t.type === `separator`
          ? (0, G.jsx)(xn, { className: `mx-1 my-1 border-t border-token-border/60` }, t.id)
          : t.type === `checkbox`
            ? (0, G.jsx)(
                j,
                {
                  tooltipContent: t.tooltipMessage
                    ? (0, G.jsx)(Le, { ...t.tooltipMessage, values: t.tooltipMessageValues })
                    : null,
                  children: (0, G.jsx)(bn, {
                    checked: t.checked ?? !1,
                    className: Ge(
                      `text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background`,
                      t.enabled === !1 && `cursor-default opacity-50`,
                    ),
                    disabled: t.enabled === !1,
                    onCheckedChange: () => {
                      t.onSelect?.();
                    },
                    children: (0, G.jsx)(Mn, {
                      checked: t.checked === !0,
                      label: ee(t),
                      showCheckbox: !0,
                    }),
                  }),
                },
                t.id,
              )
            : t.submenu
              ? (0, G.jsxs)(
                  Sn,
                  {
                    children: [
                      (0, G.jsx)(Cn, {
                        className: `flex cursor-interaction items-center justify-between gap-1.5 rounded-lg p-1.5 text-sm text-token-foreground outline-hidden hover:bg-token-list-hover-background focus:bg-token-list-hover-background`,
                        disabled: t.enabled === !1,
                        children: (0, G.jsx)(Mn, { icon: t.icon, label: ee(t), showChevron: !0 }),
                      }),
                      (0, G.jsx)(_n, {
                        children: (0, G.jsx)(wn, {
                          className: `z-50 m-px flex min-w-[200px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none`,
                          collisionPadding: 6,
                          style: { zoom: u === 1 ? void 0 : u },
                          children: e(t.submenu),
                        }),
                      }),
                    ],
                  },
                  t.id,
                )
              : (0, G.jsx)(
                  j,
                  {
                    tooltipContent: t.tooltipMessage
                      ? (0, G.jsx)(Le, { ...t.tooltipMessage, values: t.tooltipMessageValues })
                      : null,
                    children: (0, G.jsx)(yn, {
                      className: Ge(
                        `text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background`,
                        t.enabled === !1 && `cursor-default opacity-50`,
                      ),
                      onSelect: (e) => {
                        if (t.enabled === !1) {
                          e.preventDefault();
                          return;
                        }
                        t.onSelect?.();
                      },
                      "aria-disabled": t.enabled === !1,
                      children: (0, G.jsx)(Mn, { icon: t.icon, label: ee(t) }),
                    }),
                  },
                  t.id,
                ),
      );
    ((ae = hn),
      t[63] === x
        ? (le = t[64])
        : ((le = (e) => {
            e && x();
          }),
          (t[63] = x),
          (t[64] = le)),
      t[65] === ne
        ? (I = t[66])
        : ((I = (0, G.jsx)(gn, { asChild: !0, children: ne })), (t[65] = ne), (t[66] = I)),
      (ie = _n),
      (re = vn),
      (oe = `z-50 m-px flex min-w-[180px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none`),
      (se = 6));
    let n = u === 1 ? void 0 : u;
    (t[67] === n ? (F = t[68]) : ((F = { zoom: n }), (t[67] = n), (t[68] = F)),
      (ce = e(m)),
      (t[50] = x),
      (t[51] = m),
      (t[52] = ne),
      (t[53] = u),
      (t[54] = re),
      (t[55] = ie),
      (t[56] = ae),
      (t[57] = oe),
      (t[58] = se),
      (t[59] = F),
      (t[60] = ce),
      (t[61] = le),
      (t[62] = I));
  } else
    ((re = t[54]),
      (ie = t[55]),
      (ae = t[56]),
      (oe = t[57]),
      (se = t[58]),
      (F = t[59]),
      (ce = t[60]),
      (le = t[61]),
      (I = t[62]));
  let ue;
  t[69] !== re || t[70] !== oe || t[71] !== se || t[72] !== F || t[73] !== ce
    ? ((ue = (0, G.jsx)(re, { className: oe, collisionPadding: se, style: F, children: ce })),
      (t[69] = re),
      (t[70] = oe),
      (t[71] = se),
      (t[72] = F),
      (t[73] = ce),
      (t[74] = ue))
    : (ue = t[74]);
  let de;
  t[75] !== ie || t[76] !== ue
    ? ((de = (0, G.jsx)(ie, { children: ue })), (t[75] = ie), (t[76] = ue), (t[77] = de))
    : (de = t[77]);
  let fe;
  return (
    t[78] !== ae || t[79] !== le || t[80] !== I || t[81] !== de
      ? ((fe = (0, G.jsxs)(ae, { onOpenChange: le, children: [I, de] })),
        (t[78] = ae),
        (t[79] = le),
        (t[80] = I),
        (t[81] = de),
        (t[82] = fe))
      : (fe = t[82]),
    fe
  );
}
function jn(e) {
  return e.message ? (0, G.jsx)(Le, { ...e.message, values: e.messageValues }) : e.id;
}
function Mn(e) {
  let t = (0, Nn.c)(15),
    { checked: n, icon: r, label: i, showCheckbox: a, showChevron: o } = e,
    s;
  t[0] !== n || t[1] !== a
    ? ((s = a
        ? (0, G.jsx)(`span`, {
            className: `icon-sm flex shrink-0 items-center justify-center`,
            children: n ? (0, G.jsx)(Ee, { "aria-hidden": !0, className: `icon-xs` }) : null,
          })
        : null),
      (t[0] = n),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== r || t[4] !== i
    ? ((c = r
        ? (0, G.jsx)(`img`, { alt: typeof i == `string` ? i : ``, src: r, className: `icon-sm` })
        : null),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === i
    ? (l = t[7])
    : ((l = (0, G.jsx)(`span`, { className: `truncate`, children: i })), (t[6] = i), (t[7] = l));
  let u;
  t[8] === o
    ? (u = t[9])
    : ((u = o ? (0, G.jsx)(me, { className: `icon-xs ml-auto opacity-50` }) : null),
      (t[8] = o),
      (t[9] = u));
  let d;
  return (
    t[10] !== s || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, G.jsxs)(`span`, {
          className: `flex w-full items-center gap-1.5`,
          children: [s, c, l, u],
        })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
var Nn,
  Pn,
  G,
  Fn = e(() => {
    ((Nn = d()), Tn(), Ke(), (Pn = t(a(), 1)), Ye(), Ce(), he(), xe(), R(), Te(), (G = D()));
  });
function In(e, t) {
  let n = e.get(Yn);
  if (t.customId != null) {
    let r = `${t.customId}-`;
    for (let t of n) t.startsWith(r) && e.set(Zn, t, (e) => ({ ...e, isShown: !1 }));
  }
  (e.set(Xn, (e) => e + 1),
    e.set(Zn, t.id, t.toast),
    e.set(Yn, [t.id, ...n.filter((e) => e !== t.id)]));
}
function Ln(e, t) {
  e.set(Zn, t, (e) => ({ ...e, isShown: !1 }));
}
function Rn(e, t) {
  (qn.get(t)?.(), qn.delete(t), e.set(Yn, (e) => e.filter((e) => e !== t)));
}
function zn(e) {
  for (let t of e.get(Yn)) Ln(e, t);
}
function Bn(e) {
  return {
    info(t, n) {
      return Vn(e, t, n, `info`);
    },
    success(t, n) {
      return Vn(e, t, n, `success`);
    },
    warning(t, n) {
      return Vn(e, t, n, `warning`);
    },
    danger(t, n) {
      return Vn(e, t, n, `danger`);
    },
    custom(t) {
      return Vn(e, null, t, t.level ?? `info`);
    },
    closeAll() {
      zn(e);
    },
  };
}
function Vn(e, t, n, r) {
  let i = e.get(Xn),
    a = n?.id == null ? `${i}` : `${n.id}-${i}`,
    o = () => {
      Ln(e, a);
    };
  return (
    n?.onRemove != null && qn.set(a, n.onRemove),
    In(e, {
      customId: n?.id,
      id: a,
      toast: {
        content: n != null && `content` in n ? n.content({ close: o, level: r }) : void 0,
        description: n?.description,
        duration: n?.duration ?? Hn,
        hasCloseButton: n?.hasCloseButton ?? !0,
        isShown: !0,
        level: r,
        testId: n?.testId,
        title: t,
      },
    }),
    { close: o }
  );
}
var Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (f(),
      A(),
      (Hn = 5),
      (Un = 1),
      (Wn = { duration: Hn, hasCloseButton: !0, isShown: !0, level: `info`, title: null }),
      (Gn = { close: () => {} }),
      (Kn = {
        info: () => Gn,
        success: () => Gn,
        warning: () => Gn,
        danger: () => Gn,
        custom: () => Gn,
        closeAll: () => {},
      }),
      (qn = new Map()),
      (Jn = w(l, Kn)),
      (Yn = w(l, [])),
      (Xn = w(l, Un)),
      (Zn = c(l, (e) => Wn)));
  }),
  $n,
  er,
  tr = e(() => {
    (t(a()),
      ($n = D()),
      (er = (e) =>
        (0, $n.jsx)(`svg`, {
          width: 21,
          height: 21,
          viewBox: `0 0 21 21`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, $n.jsx)(`path`, {
            d: `M14.6549 5.57307C14.9283 5.2997 15.3718 5.2997 15.6451 5.57307C15.9185 5.84643 15.9185 6.28993 15.6451 6.5633L11.3903 10.8182L15.6451 15.0731L15.735 15.1834C15.9141 15.4551 15.8842 15.8242 15.6451 16.0633C15.4061 16.3024 15.0369 16.3322 14.7653 16.1531L14.6549 16.0633L10.4 11.8084L6.14515 16.0633C5.87178 16.3367 5.42828 16.3367 5.15492 16.0633C4.88155 15.7899 4.88155 15.3464 5.15492 15.0731L9.4098 10.8182L5.15492 6.5633L5.06507 6.45295C4.88597 6.18128 4.91584 5.81214 5.15492 5.57307C5.39399 5.33399 5.76313 5.30413 6.0348 5.48322L6.14515 5.57307L10.4 9.82795L14.6549 5.57307Z`,
            fill: `currentColor`,
          }),
        })));
  });
function nr() {
  let e = (0, rr.c)(3),
    t = C(Ne),
    n;
  return (
    e[0] !== t.data || e[1] !== t.isLoading
      ? ((n = { data: t.data, isLoading: t.isLoading }),
        (e[0] = t.data),
        (e[1] = t.isLoading),
        (e[2] = n))
      : (n = e[2]),
    n
  );
}
var rr,
  ir = e(() => {
    ((rr = d()), f(), Ie());
  });
function ar() {
  let e = (0, sr.c)(7),
    { data: t, isLoading: n } = nr(),
    r,
    i;
  if (e[0] !== t?.platform) {
    let n = We(t?.platform);
    ((r = n), (i = or(n)), (e[0] = t?.platform), (e[1] = r), (e[2] = i));
  } else ((r = e[1]), (i = e[2]));
  let a;
  return (
    e[3] !== n || e[4] !== r || e[5] !== i
      ? ((a = { platform: r, modifierSymbol: i, isLoading: n }),
        (e[3] = n),
        (e[4] = r),
        (e[5] = i),
        (e[6] = a))
      : (a = e[6]),
    a
  );
}
function or(e) {
  return e === `macOS` ? `⌘` : `^`;
}
var sr,
  cr = e(() => {
    ((sr = d()), ir(), Fe());
  });
function lr(e, t) {
  return t.length === 0
    ? e
    : e.replace(
        `</svg>`,
        `\n  ${t.join(`
  `)}\n</svg>`,
      );
}
function ur(e) {
  return gi[e === `none` ? `minimal` : e];
}
function dr(e) {
  return `file-tree-builtin-${e}`;
}
function fr(e) {
  return e !== `none` && xi.has(e);
}
function pr(e, t, n) {
  if (e === `minimal` || e === `none`) return;
  let r = e === `complete`,
    i = _i[t.toLowerCase()];
  if (i != null && (r || bi.has(i))) return i;
  for (let e of n) {
    if (r) {
      let t = yi[e];
      if (t != null) return t;
    }
    let t = vi[e];
    if (t != null && (r || bi.has(t))) return t;
  }
  return `default`;
}
var mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si = e(() => {
    ((mr = `<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="file-tree-icon-chevron" viewBox="0 0 16 16">
    <path d="M12.4697 5.46973C12.7626 5.17684 13.2374 5.17684 13.5303 5.46973C13.8232 5.76262 13.8232 6.23738 13.5303 6.53028L8.53028 11.5303C8.23738 11.8232 7.76262 11.8232 7.46973 11.5303L2.46973 6.53028C2.17684 6.23738 2.17684 5.76262 2.46973 5.46973C2.76262 5.17684 3.23738 5.17684 3.53028 5.46973L8 9.93946L12.4697 5.46973Z" fill="currentcolor"/>
  </symbol>
  <symbol id="file-tree-icon-dot" viewBox="0 0 6 6">
    <circle cx="3" cy="3" r="3" />
  </symbol>
  <symbol id="file-tree-icon-file" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8 1v3a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1z" class="bg" opacity=".5"/>
    <path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z" class="fg"/>
  </symbol>
  <symbol id="file-tree-icon-lock" viewBox="0 0 16 16">
    <path fill="currentcolor" d="M4 5.336V4a4 4 0 1 1 8 0v1.336c1.586.54 2 1.843 2 4.664v1c0 4.118-.883 5-5 5H7c-4.117 0-5-.883-5-5v-1c0-2.821.414-4.124 2-4.664M5.5 4v1.054Q6.166 4.998 7 5h2q.834-.002 1.5.054V4a2.5 2.5 0 0 0-5 0m-2 6v1c0 .995.055 1.692.167 2.193.107.483.246.686.35.79s.307.243.79.35c.5.112 1.198.167 2.193.167h2c.995 0 1.692-.055 2.193-.166.483-.108.686-.247.79-.35.104-.105.243-.308.35-.791.112-.5.167-1.198.167-2.193v-1c0-.995-.055-1.692-.166-2.193-.108-.483-.247-.686-.35-.79-.105-.104-.308-.243-.791-.35C10.693 6.555 9.995 6.5 9 6.5H7c-.995 0-1.692.055-2.193.167-.483.107-.686.246-.79.35s-.243.307-.35.79C3.555 8.307 3.5 9.005 3.5 10" />
  </symbol>
  <symbol id="file-tree-icon-ellipsis" viewBox="0 0 16 16">
    <path d="M5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M14 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </symbol>
</svg>`),
      (hr = `<symbol id="file-tree-builtin-astro" viewBox="0 0 16 16">
  <path fill="currentColor" d="M6.08 13.92c-.63-.57-.81-1.79-.55-2.67.45.56 1.08.73 1.73.83 1 .15 1.99.1 2.92-.37l.32-.19q.13.38.08.78a2.1 2.1 0 0 1-.9 1.5q-.3.24-.61.43c-.64.44-.81.95-.57 1.69l.02.08a1.7 1.7 0 0 1-.74-.64 2 2 0 0 1-.3-.98q0-.27-.02-.52-.07-.61-.61-.62a.7.7 0 0 0-.75.6z" class="bg" opacity=".6"/>
  <path fill="currentColor" d="M2.5 11.1s1.86-.9 3.72-.9l1.4-4.39c.05-.21.2-.36.38-.36s.33.15.38.36l1.4 4.38c2.2 0 3.72.92 3.72.92l-3.16-8.69q-.13-.4-.45-.42H6.11q-.3.02-.45.42z" class="fg"/>
</symbol>`),
      (gr = `<symbol id="file-tree-builtin-babel" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M9.49.5q1.92.05 2.66.54 1.27.6 1.35 1.52v.23a4 4 0 0 1-.53 1.9l-1.38 1.24q-.74.38-.72.63c.77.82 1.33 1.29.85 2.42q-.47 1.1-2.04 2.28c-.5.32-1.88 1.35-2.96 1.86-1.64.77-3.1 1.4-4.65 1.89-.51.16-1.5.16-1.5.16L.5 15A76 76 0 0 0 5.76 3.49q-.1-.08-.1-.2.1 0 .32-.35l-.03-.09q-1.17.39-2.38 1.3l-.13.03q0-.1-.21-.16-.46.31-.82.7l-.13-.19.16-.06-.03-.16-.34.29L2 4.5q.36-.48.72-.54l.04-.1V3.8q.16 0 .15-.06l.13-.06a6 6 0 0 0 1.13-.9v-.03H4.1l-.12.07q0-.1-.1-.1l-.15.07-.04-.1q.93-.52 1.63-1.05Q7.89.65 9.5.5M8.46 7.83l-.32.04c-1.31.54-2.31.82-2.91.88a71 71 0 0 0-2.2 4.54h.07q.58-.04 3.04-1.42.13 0 1.66-1.05L9.18 9.7v.03q.45-.2.81-1.3v-.2q-.5-.46-1.53-.4m.28-5.75c-.5.1-.75.19-.72.38l-1.16 2.6q-.17.1-.34.95-.3.48-.25.77v.1l.22.05A15 15 0 0 1 8.86 6c1.1-.71 2.12-1.38 2.8-2.54q.24-.33.21-.54-.02-.33-.4-.54c-.54 0-1.07-.34-1.63-.28l-.94-.03z" clip-rule="evenodd"/>
</symbol>`),
      (_r = `<symbol id="file-tree-builtin-bash" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M11.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM7 6.75C7 6.42 6.64 6 6 6s-1 .42-1 .75q-.01.25.22.41.26.21.89.35.74.14 1.28.53c.37.29.61.7.61 1.21 0 .87-.68 1.5-1.5 1.7v.55a.5.5 0 0 1-1 0v-.56c-.82-.18-1.5-.82-1.5-1.69a.5.5 0 0 1 1 0c0 .33.36.75 1 .75s1-.42 1-.75q.01-.25-.22-.41a2 2 0 0 0-.89-.35q-.74-.14-1.28-.53A1.5 1.5 0 0 1 4 6.75c0-.87.68-1.5 1.5-1.7V4.5a.5.5 0 0 1 1 0v.56c.82.18 1.5.82 1.5 1.69a.5.5 0 0 1-1 0" class="fg-stroke"/>
</symbol>`),
      (vr = `<symbol id="file-tree-builtin-biome" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 2 4.88 7.35a7 7 0 0 1 3.7-.13l1.04.25-.99 4.16-1.05-.25a2.7 2.7 0 0 0-3.07 1.45l-.98-.47a4 4 0 0 1 1.07-1.31 3.8 3.8 0 0 1 3.23-.71l.5-2.08a6 6 0 0 0-5.07 1.12A5.9 5.9 0 0 0 1 14h14z"/>
</symbol>`),
      (yr = `<symbol id="file-tree-builtin-bootstrap" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M11.72 1.5A2.5 2.5 0 0 1 14.2 4q.02 1.08.3 2.09c.22.73.56 1.24 1.08 1.45.22.08.4.27.4.5s-.18.43-.4.51q-.76.34-1.08 1.45c-.2.65-.27 1.32-.3 2a2.5 2.5 0 0 1-2.48 2.5H4.25A2.6 2.6 0 0 1 1.7 12c-.04-.85-.1-1.68-.22-2.04C1.26 9.23.92 8.7.4 8.5.18 8.42 0 8.23 0 8s.18-.42.4-.5q.77-.35 1.09-1.46c.1-.36.17-1.19.2-2.04a2.6 2.6 0 0 1 2.56-2.5z" class="bg" clip-rule="evenodd" opacity=".2"/>
  <path fill="currentColor" fill-rule="evenodd" d="M8.47 4.54c1.23 0 2.04.68 2.04 1.73 0 .73-.55 1.39-1.24 1.5v.04c.94.1 1.58.77 1.58 1.7 0 1.2-.9 1.95-2.37 1.95H5.97a.3.3 0 0 1-.2-.08.3.3 0 0 1-.08-.2V4.82a.3.3 0 0 1 .08-.2.3.3 0 0 1 .2-.08zm-1.7 6.04h1.49q1.47-.01 1.49-1.15Q9.74 8.31 8.2 8.3H6.77zm0-5.16v2.06h1.21c.93 0 1.45-.38 1.45-1.06 0-.65-.44-1-1.22-1z" class="fg" clip-rule="evenodd"/>
</symbol>`),
      (br = `<symbol id="file-tree-builtin-browserslist" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8.88 6.96c0 3.82 3.72 4.7 5.7 3.74-.23.9-1.04 1.67-2.35 1.93-.02.4.42 1.28.82 1.63-.9.35-1.94-.12-2.51-.48a5 5 0 0 0-.32 1.87c-.68 0-1.57-1-1.8-1.37-.3.18-.85 1.15-.96 1.72a2.4 2.4 0 0 1-.81-.86 2.4 2.4 0 0 1-.3-1.15c-.38.27-1.48.95-1.99 1.18-.25-.58-.15-1.3 0-2.06-.21.12-1.8.27-2.43.12.32-.36.75-1.19.94-1.57A4.5 4.5 0 0 1 .44 10.6c.48-.22.97-.53 1.49-1.06C1.26 9.17.24 8.64 0 7.7a6 6 0 0 0 1.79-.32C1.28 7.08.44 6.15.6 5.01c.42.21 1.3.37 1.73.3a3.4 3.4 0 0 1-.25-2.75 5 5 0 0 0 1.48 1c-.08-.8.3-2.31.8-2.71.2.46.73 1.21 1.08 1.4.09-.61.87-2.06 1.57-2.25 0 .5.27 1.4.5 1.67.51-.54 2.25-1.44 3.64-1.13-.43.45-.75.61-.86.98 1.05 0 2.78.34 4.27 1.93-2.34-.89-5.69.56-5.69 3.5" class="bg" opacity=".5"/>
  <path fill="currentColor" d="M11.21 3.59a4.1 4.1 0 0 0 2.47 2.89c.24-.22.61-.38.95-.19.76.44.2 1.26-.34 1.66l-.07.06a13 13 0 0 1-4.49 1.61l-.3-.43a10.5 10.5 0 0 0 4.13-1.31 1 1 0 0 0 .23-.25.5.5 0 0 0-.21-.69l-.15-.06a4.5 4.5 0 0 1-1.77-1.31 4.5 4.5 0 0 1-.88-1.77q.2-.12.43-.21"/>
  <path fill="currentColor" d="M10.36 5.18a.4.4 0 0 0-.03.38c.09.2.3.3.46.23s.24-.3.15-.5l-.01-.02q.23.13.34.39a.83.83 0 0 1-.43 1.08.8.8 0 0 1-1.08-.43.83.83 0 0 1 .6-1.13"/>
</symbol>`),
      (xr = `<symbol id="file-tree-builtin-bun" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 14c3.87 0 7-2.46 7-5.49 0-1.88-1.2-3.53-3.04-4.52q-1.1-.61-1.84-1.07C9.2 2.35 8.64 2 8 2s-1.36.45-2.31 1.03A29 29 0 0 1 4.04 4C2.2 4.98 1 6.63 1 8.51 1 11.54 4.13 14 8 14M7.18 3.88q.3-.66.3-1.37c0-.08.11-.1.13-.01.38 1.57-.53 2.35-1.2 2.61-.08.03-.12-.07-.06-.12a3 3 0 0 0 .83-1.12m1.2-.05a3 3 0 0 0-.45-1.3V2.5c-.04-.07.05-.15.1-.1 1.15 1.2.77 2.3.33 2.87-.05.05-.13 0-.11-.08q.21-.67.13-1.37m1.04-.32a3 3 0 0 0-.94-1.02v-.01c-.06-.05-.01-.16.07-.12 1.51.61 1.61 1.8 1.43 2.5l-.03.03a.07.07 0 0 1-.1-.06 3 3 0 0 0-.43-1.32m-2.97.32c-.36.3-.74.43-1.2.56q-.11 0-.1-.1a3.5 3.5 0 0 0 1.76-1.57s.09-.07.1.04c0 .18-.2.76-.56 1.07m2.89 6.36q-.13.52-.55.88a1.3 1.3 0 0 1-.75.35 1.3 1.3 0 0 1-.77-.35 1.7 1.7 0 0 1-.54-.88.13.13 0 0 1 .15-.15h2.31a.14.14 0 0 1 .15.15M6.15 8.95a1.1 1.1 0 0 1-1.39-.14A1.1 1.1 0 0 1 5.12 7a1.1 1.1 0 0 1 1.2.25 1.1 1.1 0 0 1-.17 1.69m4.96 0a1.1 1.1 0 0 1-1.4-.14 1.1 1.1 0 0 1 .37-1.8 1.1 1.1 0 0 1 1.2.25 1.1 1.1 0 0 1 .24 1.2 1 1 0 0 1-.41.5"/>
</symbol>`),
      (Sr = `<symbol id="file-tree-builtin-c" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 1q.084 0 .166.021.098.023.186.075c1.055.624 4.22 2.486 5.277 3.11.085.05.15.112.209.192h-.002l.028.037a.5.5 0 0 1 .103.21q.031.102.033.21v6.29a.71.71 0 0 1-.347.616l-5.307 3.144a.68.68 0 0 1-.693 0l-5.307-3.144A.72.72 0 0 1 2 11.145V4.832a.71.71 0 0 1 .346-.612l5.288-3.126A.7.7 0 0 1 7.992 1zm2.901 4.349a3.75 3.75 0 1 0 0 5.302l-1.06-1.06a2.25 2.25 0 1 1 0-3.182z" clip-rule="evenodd"/>
</symbol>`),
      (Cr = `<symbol id="file-tree-builtin-claude" viewBox="0 0 16 16">
  <path fill="currentColor" d="M3.75 10.31 6.5 8.77l.04-.14-.04-.07h-.14l-.46-.03-1.57-.04-1.38-.07-1.33-.07-.34-.07L1 7.86l.03-.21.28-.18.4.03.89.07 1.33.08.97.06 1.43.16h.22l.03-.1-.07-.05-.06-.06-1.39-.92-1.48-.98-.79-.57-.42-.28-.2-.28-.1-.6.39-.41.52.04.12.03.52.4 1.12.86L6.2 6.04l.2.17.09-.06.01-.04-.1-.15-.76-1.46-.85-1.46-.37-.6-.1-.36a1 1 0 0 1-.06-.42l.42-.59.25-.07.6.08.22.2.36.84.58 1.3.9 1.77.29.53.14.47.04.14h.1v-.07l.07-1 .14-1.22.14-1.57.04-.45.23-.53.42-.28.36.15.28.41-.04.25-.16 1.08-.36 1.7-.21 1.14h.12l.14-.15.58-.76.97-1.2.42-.5.5-.51.32-.25h.6l.44.66-.2.68-.61.79-.52.65-.74 1-.45.8.04.05h.1l1.68-.36.9-.16 1.06-.18.5.23.05.22-.2.48-1.15.28-1.34.28-2 .46-.04.01.03.04.9.09.4.03h.94l1.77.14.46.28.27.37-.04.28-.72.37-.95-.23-2.24-.53-.76-.18h-.11v.06l.64.63L12 10.86l1.48 1.35.07.34-.18.28-.2-.03-1.29-.98-.5-.42-1.12-.95h-.07v.1l.25.38 1.37 2.05.07.63-.1.2-.36.14-.38-.08-.8-1.12-.85-1.26-.66-1.15-.07.05-.4 4.23-.19.21-.42.17-.35-.28-.2-.42.2-.87.23-1.12.18-.9.17-1.1.1-.36v-.03h-.1l-.84 1.16-1.27 1.72-1 1.07-.24.1-.42-.22.04-.39.22-.32 1.4-1.8.84-1.1.57-.64-.02-.07h-.04l-3.7 2.4-.66.09-.28-.28.03-.42.14-.14 1.12-.77z"/>
</symbol>`),
      (wr = `<symbol id="file-tree-builtin-cpp" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 1q.084 0 .166.021.098.023.186.075c1.055.624 4.22 2.486 5.277 3.11.085.05.15.112.209.192h-.002l.028.037a.5.5 0 0 1 .103.21q.031.102.033.21v6.29a.71.71 0 0 1-.347.616l-5.307 3.144a.68.68 0 0 1-.693 0l-5.307-3.144A.72.72 0 0 1 2 11.145V4.832a.71.71 0 0 1 .346-.612l5.288-3.126A.7.7 0 0 1 7.992 1zm2.901 4.349a3.75 3.75 0 1 0 0 5.302l-1.06-1.06a2.25 2.25 0 1 1 0-3.182z" clip-rule="evenodd"/>
</symbol>`),
      (Tr = `<symbol id="file-tree-builtin-css" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 15c-5.76 0-7-1.24-7-7V2a1 1 0 0 1 1-1h6c5.77 0 7 1.24 7 7s-1.24 7-7 7" class="vector" opacity=".2"/>
  <path fill="currentColor" d="M10.1 9.19h.73c.03.49.22.6 1 .6.76 0 .93-.12.93-.68 0-.52-.17-.67-.94-.85-1.38-.3-1.68-.56-1.68-1.47 0-1.05.3-1.29 1.67-1.29 1.29 0 1.57.2 1.6 1.13h-.74c-.01-.34-.17-.42-.85-.42-.77 0-.94.1-.94.58 0 .42.17.55.96.73 1.36.3 1.66.58 1.66 1.59 0 1.14-.31 1.39-1.73 1.39-1.39 0-1.69-.24-1.67-1.31m-3.9 0h.74c.03.49.21.6.99.6.76 0 .93-.12.93-.68 0-.52-.17-.67-.93-.85-1.39-.3-1.69-.56-1.69-1.47 0-1.05.3-1.29 1.67-1.29 1.3 0 1.58.2 1.6 1.13h-.73c-.02-.34-.18-.42-.85-.42-.78 0-.95.1-.95.58 0 .42.17.55.96.73 1.37.3 1.67.58 1.67 1.59 0 1.14-.32 1.39-1.74 1.39-1.38 0-1.68-.24-1.66-1.31m-1.22 0h.75c-.09 1.07-.37 1.31-1.56 1.31-1.37 0-1.68-.45-1.68-2.5 0-1.96.36-2.5 1.68-2.5 1.16 0 1.44.25 1.52 1.35h-.76c-.08-.52-.22-.64-.76-.64-.74 0-.9.33-.9 1.78 0 1.47.16 1.8.9 1.8.58 0 .74-.11.8-.6"/>
</symbol>`),
      (Er = `<symbol id="file-tree-builtin-database" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.953 9.733a12.4 12.4 0 0 1-.244 1.936c-.207.933-.532 1.58-.996 2.044s-1.11.789-2.044.996C10.73 14.918 9.533 15 8 15s-2.73-.082-3.669-.291c-.933-.207-1.58-.532-2.044-.996s-.789-1.11-.996-2.044c-.122-.547-.2-1.182-.244-1.92q.23.364.532.667c.64.639 1.482 1.031 2.533 1.265 1.046.232 2.33.315 3.884.315 1.555 0 2.838-.083 3.884-.315 1.051-.234 1.893-.626 2.532-1.265a4 4 0 0 0 .541-.683"/>
  <path fill="currentColor" d="M14.93 5.924c-.046.663-.118 1.24-.23 1.743-.207.932-.532 1.579-.995 2.042s-1.11.789-2.042.996c-.938.209-2.135.291-3.667.291-1.531 0-2.729-.082-3.667-.29-.932-.208-1.579-.534-2.042-.997s-.789-1.11-.996-2.042a12 12 0 0 1-.227-1.683l.016-.188a4 4 0 0 0 .5.62c.638.639 1.48 1.031 2.532 1.265 1.046.232 2.33.315 3.884.315 1.555 0 2.838-.083 3.884-.315 1.051-.234 1.893-.626 2.532-1.265.192-.192.357-.404.506-.633z"/>
  <path fill="currentColor" d="M8 1c1.533 0 2.73.082 3.669.291.933.207 1.58.533 2.044.996.403.404.904.944.91 1.695.004.764-.509 1.318-.918 1.727-.463.463-1.11.789-2.042.996-.938.209-2.135.291-3.667.291-1.531 0-2.729-.082-3.667-.29-.932-.208-1.579-.534-2.042-.997-.406-.406-.915-.953-.915-1.71 0-.758.509-1.305.915-1.712.464-.463 1.11-.789 2.044-.996C5.27 1.082 6.467 1 8 1"/>
</symbol>`),
      (Dr = `<symbol id="file-tree-builtin-default" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1v3a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1z" class="bg" opacity=".4"/>
  <path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z" class="fg"/>
</symbol>`),
      (Or = `<symbol id="file-tree-builtin-docker" viewBox="0 0 16 16">
  <path fill="currentColor" d="M15.85 6.54c-.05-.04-.45-.36-1.31-.36q-.34 0-.68.06a2.7 2.7 0 0 0-1.14-1.79l-.23-.14-.15.23a3 3 0 0 0-.4 1q-.24 1.01.26 1.84c-.4.24-1.03.3-1.17.3H.5a.5.5 0 0 0-.5.52q-.01 1.46.46 2.83.55 1.5 1.6 2.18c.79.5 2.08.79 3.54.79q.96 0 1.94-.18a8 8 0 0 0 2.55-.97 7 7 0 0 0 1.73-1.5 10 10 0 0 0 1.7-3.06h.15a2.4 2.4 0 0 0 1.8-.7 2 2 0 0 0 .47-.74l.06-.2z"/>
  <path fill="currentColor" d="M1.48 7.36h1.4a.14.14 0 0 0 .14-.13V5.91q-.01-.12-.13-.14H1.48a.13.13 0 0 0-.13.14v1.32q.02.13.13.13m1.94 0h1.41a.14.14 0 0 0 .13-.13V5.91q-.01-.12-.13-.14h-1.4a.13.13 0 0 0-.13.14v1.32q0 .13.12.13m1.98 0h1.4q.13 0 .14-.13V5.91a.13.13 0 0 0-.14-.14H5.4q-.1.01-.12.14v1.32q0 .13.12.13m1.95 0h1.42q.1 0 .12-.13V5.91q0-.12-.12-.14H7.35q-.1.01-.12.14v1.32q.01.13.12.13M3.42 5.5h1.41c.07 0 .13-.08.13-.15V4.03a.13.13 0 0 0-.13-.14h-1.4q-.12 0-.13.14v1.31q0 .13.12.15m1.98 0h1.4c.08 0 .14-.08.14-.15V4.03q0-.13-.14-.14H5.4q-.1 0-.12.14v1.31q0 .13.12.15m1.95 0h1.42c.06 0 .12-.08.12-.15V4.03q-.01-.13-.12-.14H7.35q-.1 0-.12.14v1.31q.01.13.12.15m0-1.9h1.42q.1-.02.12-.14v-1.3Q8.88 2 8.77 2H7.35q-.1 0-.12.14v1.3q.01.13.12.14m1.97 3.78h1.4a.13.13 0 0 0 .14-.13V5.91q-.01-.12-.13-.14H9.32q-.1.01-.12.14v1.32q.01.13.12.13" opacity=".5"/>
</symbol>`),
      (kr = `<symbol id="file-tree-builtin-eslint" viewBox="0 0 16 16">
  <path fill="currentColor" d="M11.16 6.1 8.12 4.35a.3.3 0 0 0-.24 0L4.84 6.1a.3.3 0 0 0-.12.2v3.5q0 .14.12.22l3.04 1.74q.12.08.24 0l3.04-1.74a.2.2 0 0 0 .13-.22V6.3a.3.3 0 0 0-.13-.2" opacity=".5"/>
  <path fill="currentColor" d="m.1 7.69 3.63-6.3A.8.8 0 0 1 4.37 1h7.26c.26 0 .5.17.64.4l3.63 6.27a.8.8 0 0 1 0 .75l-3.63 6.24a.7.7 0 0 1-.64.34H4.37a.7.7 0 0 1-.64-.34L.1 8.41a.7.7 0 0 1 0-.72m3 3.02q.01.15.14.23l4.63 2.66q.13.06.26 0l4.63-2.66a.3.3 0 0 0 .14-.23V5.4a.3.3 0 0 0-.14-.23L8.13 2.52a.3.3 0 0 0-.26 0L3.24 5.17a.3.3 0 0 0-.14.23z"/>
</symbol>`),
      (Ar = `<symbol id="file-tree-builtin-font" viewBox="0 0 16 16">
  <path fill="currentColor" d="M12.3 13c-1.59 0-2.68-.99-2.68-2.5 0-1.43 1-2.34 2.88-2.35h2.16v-.83c0-1.08-.62-1.68-1.73-1.68-1.05 0-1.66.54-1.73 1.36H9.93c.09-1.43 1.06-2.48 3.05-2.48 1.75 0 3.02.95 3.02 2.68v5.66h-1.29v-1.02h-.04c-.41.66-1.16 1.16-2.37 1.16m.36-1.12c1.14 0 2-.72 2-1.74v-.96H12.6c-1.12 0-1.6.54-1.6 1.28 0 .97.8 1.42 1.66 1.42m-11.24.98H0L3.8 2h1.39l3.8 10.86H7.54l-1.08-3.2H2.5zm3.09-9.25h-.04l-1.6 4.95H6.1z"/>
</symbol>`),
      (jr = `<symbol id="file-tree-builtin-git" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.74 7.38 8.62 1.26a.9.9 0 0 0-1.27 0L6.08 2.53l1.61 1.61a1.07 1.07 0 0 1 1.36 1.37l1.55 1.55a1.07 1.07 0 0 1 1.1 1.77 1.07 1.07 0 0 1-1.74-1.16L8.5 6.22v3.8a1.07 1.07 0 1 1-.89-.02V6.15a1.07 1.07 0 0 1-.58-1.4l-1.58-1.6-4.2 4.2a.9.9 0 0 0 0 1.27l6.12 6.12a.9.9 0 0 0 1.27 0l6.09-6.09a.9.9 0 0 0 0-1.27"/>
</symbol>`),
      (Mr = `<symbol id="file-tree-builtin-go" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M4.41 4.57A3.2 3.2 0 0 1 6.87 5q.74.49 1.08 1.29.08.12-.1.16l-1.55.4c-.14.03-.15.04-.27-.1a1 1 0 0 0-.44-.34 1.6 1.6 0 0 0-1.68.14q-.95.61-.94 1.73c0 .73.52 1.33 1.25 1.43q.95.1 1.58-.6l.25-.34h-1.8c-.19 0-.24-.12-.17-.27.12-.28.34-.76.47-1a.3.3 0 0 1 .24-.14h2.98a4 4 0 0 1 .64-1.19 4 4 0 0 1 2.6-1.52 3.5 3.5 0 0 1 2.64.46q1.13.73 1.31 2.04a3.5 3.5 0 0 1-1.06 3.09q-.93.92-2.23 1.17l-.74.08a3.5 3.5 0 0 1-2.27-.8 3 3 0 0 1-.93-1.42 4 4 0 0 1-.39.61 4 4 0 0 1-2.64 1.56 3.3 3.3 0 0 1-2.5-.6 3 3 0 0 1-1.18-2.03 3.5 3.5 0 0 1 .8-2.67 4 4 0 0 1 2.6-1.58M13.1 7.5a1.53 1.53 0 0 0-1.9-1.21q-1.3.3-1.62 1.59a1.5 1.5 0 0 0 .85 1.72q.77.33 1.52-.05a2 2 0 0 0 1.18-1.74q0-.17-.03-.3" clip-rule="evenodd"/>
</symbol>`),
      (Nr = `<symbol id="file-tree-builtin-graphql" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 1a1.25 1.25 0 0 1 1.18 1.65l2.8 1.61q.33-.25.77-.26a1.25 1.25 0 0 1 .48 2.4v3.2a1.25 1.25 0 1 1-1.25 2.13l-2.8 1.62A1.25 1.25 0 0 1 8 15a1.25 1.25 0 0 1-1.18-1.65l-2.8-1.62q-.33.26-.77.27a1.25 1.25 0 0 1-.48-2.4V6.4a1.25 1.25 0 1 1 1.25-2.14l2.8-1.61A1.25 1.25 0 0 1 8 1M4.44 11.14l-.06.13 2.75 1.58a1.25 1.25 0 0 1 1.74 0l2.74-1.58-.05-.13zm3.89-7.68a1.3 1.3 0 0 1-.66 0L4.03 9.77q.37.3.45.78h7.04q.08-.48.45-.78zM4.38 4.73a1.24 1.24 0 0 1-1.02 1.76v3.02l.13.01 3.67-6.35-.03-.02zm4.46-1.56 3.67 6.35.13-.01V6.49a1.25 1.25 0 0 1-1.03-1.76L8.87 3.15z" clip-rule="evenodd"/>
</symbol>`),
      (Pr = `<symbol id="file-tree-builtin-html" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M10.48 3.76a.5.5 0 0 1 .4.58L10.6 5.8h1.14a.5.5 0 0 1 0 1h-1.32L10 9.2h1.08a.5.5 0 0 1 0 1H9.8l-.3 1.64a.5.5 0 1 1-.98-.18l.27-1.46H6.4l-.3 1.64a.5.5 0 1 1-.98-.18l.27-1.46H4.25a.5.5 0 0 1 0-1h1.32L6 6.8H4.93a.5.5 0 0 1 0-1H6.2l.3-1.64a.5.5 0 1 1 .98.18L7.2 5.8h2.4l.3-1.64a.5.5 0 0 1 .58-.4M6.58 9.2h2.4l.44-2.4h-2.4z" class="fg"/>
</symbol>`),
      (Fr = `<symbol id="file-tree-builtin-image" viewBox="0 0 16 16">
  <path fill="currentColor" d="M12.5 2A2.5 2.5 0 0 1 15 4.5v4.67l-4.05-3.54-4.08 4.08-3-2L1 10.6V4.5A2.5 2.5 0 0 1 3.5 2z" opacity=".3"/>
  <path fill="currentColor" d="M15 10.5v1a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.46-2.04L4 9l3 2 4-4zm-7-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</symbol>`),
      (Ir = `<symbol id="file-tree-builtin-javascript" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M8.1 9.64h.95c.04.62.28.76 1.28.76s1.2-.14 1.2-.85c0-.66-.2-.85-1.2-1.07-1.79-.38-2.18-.7-2.18-1.86C8.15 5.3 8.54 5 10.31 5c1.67 0 2.04.26 2.07 1.42h-.95c-.02-.43-.23-.53-1.1-.53-1 0-1.22.14-1.22.74 0 .52.22.7 1.24.92 1.76.38 2.15.73 2.15 2 0 1.44-.4 1.75-2.24 1.75-1.8 0-2.18-.3-2.15-1.66M3.5 9.5h.98c0 .76.15.92.85.92.77 0 .94-.18.94-1.02V5.1h1v4.34c0 1.54-.35 1.87-1.92 1.87-1.55 0-1.89-.32-1.86-1.8"/>
</symbol>`),
      (Lr = `<symbol id="file-tree-builtin-json" viewBox="0 0 16 16">
  <path fill="currentColor" d="M13.25 11.5V9.75a.5.5 0 0 1 .36-.48l.55-.15a1.16 1.16 0 0 0 0-2.24l-.55-.15a.5.5 0 0 1-.36-.48V4.5a2.5 2.5 0 0 0-2.5-2.5h-.25a.5.5 0 0 0 0 1h.25a1.5 1.5 0 0 1 1.5 1.5v1.75a1.5 1.5 0 0 0 1.09 1.44l.54.15a.16.16 0 0 1 0 .32l-.54.15a1.5 1.5 0 0 0-1.09 1.44v1.75a1.5 1.5 0 0 1-1.5 1.5h-.25a.5.5 0 0 0 0 1h.25a2.5 2.5 0 0 0 2.5-2.5m-10.5 0V9.75a.5.5 0 0 0-.36-.48l-.55-.15a1.16 1.16 0 0 1 0-2.24l.55-.15a.5.5 0 0 0 .36-.48V4.5A2.5 2.5 0 0 1 5.25 2h.25a.5.5 0 0 1 0 1h-.25a1.5 1.5 0 0 0-1.5 1.5v1.75a1.5 1.5 0 0 1-1.09 1.44l-.54.15a.16.16 0 0 0 0 .32l.54.15a1.5 1.5 0 0 1 1.09 1.45v1.74a1.5 1.5 0 0 0 1.5 1.5h.25a.5.5 0 0 1 0 1h-.25a2.5 2.5 0 0 1-2.5-2.5"/>
</symbol>`),
      (Rr = `<symbol id="file-tree-builtin-markdown" viewBox="0 0 16 16">
  <path fill="currentColor" d="M1 12V4h2l2 2.5L7 4h2v8H7V7.5l-2 2-2-2V12zm9-3 3 3.5L16 9h-2V4h-2v5z"/>
</symbol>`),
      (zr = `<symbol id="file-tree-builtin-mcp" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.26-.04a3 3 0 0 1 2 .82 2.8 2.8 0 0 1 .8 2.35 2.9 2.9 0 0 1 2.41.8l.03.02a2.74 2.74 0 0 1 0 3.94l-5.8 5.69-.04.06-.02.07q0 .04.02.07.01.04.04.06l1.2 1.17a.55.55 0 0 1 0 .79.6.6 0 0 1-.81 0l-1.2-1.17a1.3 1.3 0 0 1 0-1.84L13.7 7.1a1.65 1.65 0 0 0 .37-1.82 2 2 0 0 0-.37-.54l-.03-.03a1.73 1.73 0 0 0-2.4 0L6.47 9.4l-.07.06a.58.58 0 0 1-.92-.18.6.6 0 0 1 .12-.6l4.85-4.76a1.65 1.65 0 0 0 0-2.36 1.73 1.73 0 0 0-2.4 0l-6.43 6.3a.6.6 0 0 1-.8 0 .55.55 0 0 1 0-.8L7.25.79a3 3 0 0 1 2-.82"/>
  <path fill="currentColor" d="M9.26 2.19a.6.6 0 0 1 .52.34.6.6 0 0 1 0 .43l-.12.18L4.9 7.79a1.65 1.65 0 0 0 0 2.36 1.73 1.73 0 0 0 2.4 0l4.75-4.66a.58.58 0 0 1 .93.18.6.6 0 0 1-.12.61l-4.75 4.66a2.9 2.9 0 0 1-4.01 0 2.75 2.75 0 0 1-.62-3.04A3 3 0 0 1 4.1 7l4.74-4.65a.6.6 0 0 1 .4-.16"/>
</symbol>`),
      (Br = `<symbol id="file-tree-builtin-nextjs" viewBox="0 0 16 16">
  <defs>
  <linearGradient id="a" x1="4.522" x2="14" y1="3.943" y2="16" gradientUnits="userSpaceOnUse">
  <stop stop-color="currentColor"/>
  <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
  </linearGradient>
  </defs>
  <path fill="currentColor" d="M3 2h1.522v9.09H3z"/>
  <path fill="url(#a)" d="M4.903 2 15 15.075q-.565.5-1.195.925L4.522 3.943z"/>
  <path fill="currentColor" d="M12.172 2h-1.508v9.094h1.508z"/>
</symbol>`),
      (Vr = `<symbol id="file-tree-builtin-npm" viewBox="0 0 16 16">
  <path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" class="vector" opacity=".2"/>
  <path fill="currentColor" d="M10.5 13H13V3H3v10h5V5.5h2.5z"/>
</symbol>`),
      (Hr = `<symbol id="file-tree-builtin-oxc" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .5.5V3h3.5a.5.5 0 0 1 .38.83L10.5 7.69v1.44q.41.04.95-.16a4 4 0 0 0 .72-.35l.04-.03h.01a.5.5 0 0 1 .67.1l2 2.5a.5.5 0 0 1 0 .62c-.76.96-3.14 2.69-6.89 2.69s-6.13-1.73-6.89-2.69a.5.5 0 0 1 0-.62l2-2.5a.5.5 0 0 1 .67-.1l.05.03.16.09q.22.13.56.26.54.2.95.16V7.69L2.12 3.83A.5.5 0 0 1 2.5 3H6V1.5a.5.5 0 0 1 .5-.5zM7 3.5a.5.5 0 0 1-.5.5H3.6l2.78 3.17a.5.5 0 0 1 .12.33v2a.5.5 0 0 1-.28.45c-.7.35-1.5.15-2.02-.05a5 5 0 0 1-.58-.26l-1.46 1.84c.82.78 2.8 2.02 5.84 2.02s5.02-1.24 5.84-2.02l-1.46-1.83a5 5 0 0 1-.58.26c-.52.2-1.33.39-2.02.04a.5.5 0 0 1-.28-.45v-2a.5.5 0 0 1 .12-.33L12.4 4H9.5a.5.5 0 0 1-.5-.5V2H7z"/>
</symbol>`),
      (Ur = `<symbol id="file-tree-builtin-postcss" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.5 8a6.5 6.5 0 0 0-5.9-6.47l5.42 8.93A7 7 0 0 0 14.5 8M2.88 12A6.5 6.5 0 0 0 8 14.5c2.08 0 3.93-.98 5.12-2.5zm8.62-1h1.68L11.5 8.24zm-1-.55a4 4 0 0 1-.7.55h.7zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M5.5 11h.7a4 4 0 0 1-.7-.55zm-2.68 0H4.5V8.24zm3.76-6.2A4 4 0 0 1 8 4.5q.76 0 1.42.3L8 2.46zM1.5 8q0 1.31.48 2.46L7.4 1.53A6.5 6.5 0 0 0 1.5 8m14 0a7.5 7.5 0 0 1-.99 3.72l-.01.03-.02.03A7.5 7.5 0 0 1 8 15.5a7.5 7.5 0 0 1-6.5-3.75l-.01-.03A7.5 7.5 0 1 1 15.5 8"/>
</symbol>`),
      (Wr = `<symbol id="file-tree-builtin-prettier" viewBox="0 0 16 16">
  <path fill="currentColor" d="M6 12v1H4.93v-1zm1-2v1H2v-1zm6-4v1h-3V6zm-1-4v1H9V2z"/>
  <path fill="currentColor" d="M11.5 10v1H8v-1zM5 6v1H2V6zm5-2v1H9V4z" opacity=".8"/>
  <path fill="currentColor" d="M6 14v1H2v-1zm-.5-6v1H2V8zM13 4v1h-3V4zM4.93 2v1H2V2z" opacity=".6"/>
  <path fill="currentColor" d="M4.93 12v1H2v-1zM13 8v1H9V8zM5.5 4v1H2V4zM9 2v1H4.93V2z" opacity=".4"/>
</symbol>`),
      (Gr = `<symbol id="file-tree-builtin-python" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8.33 8.4H10c1.16 0 1.9-.73 1.9-1.86V5.08q0-.24.25-.24h.74c.75 0 1.33.32 1.66.97q.4.73.41 1.46c.09.9.09 1.78-.24 2.67-.25.73-.75 1.3-1.58 1.46h-4.8c-.08 0-.25 0-.25.08v.4s.17.09.25.09h2.82q.34-.02.33.32v1.06c0 .56-.25.97-.75 1.13-.41.16-.83.33-1.24.4a7 7 0 0 1-2.98-.07 3 3 0 0 1-1.16-.49c-.33-.32-.58-.65-.5-1.14v-2.91c0-1.13.67-1.78 1.82-1.78q.89-.1 1.66-.08m2.32 4.86a.65.65 0 0 0-.66-.65c-.34 0-.67.33-.67.65s.33.57.67.65a.65.65 0 0 0 .66-.65" class="bg" opacity=".8"/>
  <path fill="currentColor" d="M7.67 7.6H6c-1.16 0-1.9.73-1.9 1.86v1.46q0 .24-.25.24h-.74c-.75 0-1.33-.32-1.66-.97a3 3 0 0 1-.41-1.46 6 6 0 0 1 .24-2.67c.25-.73.75-1.3 1.58-1.46h4.8c.08 0 .25 0 .25-.08v-.4s-.17-.09-.25-.09H4.85c-.24 0-.33-.08-.33-.32V2.65c0-.56.25-.97.75-1.13.41-.16.83-.33 1.24-.4a7 7 0 0 1 2.98.07c.41.09.83.25 1.16.49.33.32.58.65.5 1.13v2.92c0 1.14-.67 1.78-1.82 1.78-.58.08-1.16.08-1.66.08M5.35 2.73c0 .33.25.65.66.65.33 0 .66-.32.66-.65 0-.32-.33-.56-.66-.64a.65.65 0 0 0-.66.64" class="fg"/>
</symbol>`),
      (Kr = `<symbol id="file-tree-builtin-react" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 6.65c.73 0 1.31.6 1.31 1.35S8.73 9.35 8 9.35 6.69 8.75 6.69 8 7.27 6.65 8 6.65"/>
  <path fill="currentColor" fill-rule="evenodd" d="M8 2.55c1.3-.99 2.59-1.34 3.5-.8.92.55 1.27 1.87 1.08 3.53C14.06 5.94 15 6.9 15 8s-.94 2.06-2.42 2.72c.19 1.65-.16 2.98-1.08 3.52-.91.55-2.2.2-3.5-.8-1.3 1-2.58 1.35-3.5.8-.91-.54-1.27-1.87-1.08-3.52C1.94 10.06 1 9.1 1 8s.94-2.06 2.42-2.72c-.19-1.66.17-2.98 1.08-3.52s2.2-.2 3.5.8M4.26 11.2c-.08 1.34.28 2.03.68 2.26s1.15.22 2.25-.52l.11-.09a12 12 0 0 1-1.24-1.39 11 11 0 0 1-1.8-.41zm7.47-.15q-.83.27-1.79.41-.6.8-1.24 1.4l.11.08c1.1.74 1.86.76 2.25.52.4-.23.76-.92.68-2.26zm-3.04.54a14 14 0 0 1-1.38 0q.34.38.69.7.35-.32.7-.7M8 5.29q-.76 0-1.47.1A13 13 0 0 0 5.07 8a14 14 0 0 0 1.46 2.62 13 13 0 0 0 2.94 0A13 13 0 0 0 10.93 8a14 14 0 0 0-1.46-2.62A13 13 0 0 0 8 5.3M4.64 9.18q-.15.5-.25.96.44.16.94.27a15 15 0 0 1-.7-1.23m6.73 0a15 15 0 0 1-.7 1.23q.5-.11.95-.27a10 10 0 0 0-.25-.96M3.44 6.26C2.27 6.86 1.87 7.53 1.87 8s.4 1.14 1.57 1.74l.13.07q.18-.88.55-1.81a12 12 0 0 1-.55-1.8q-.07.02-.13.06m8.99-.07A12 12 0 0 1 11.88 8q.36.94.55 1.8l.13-.06c1.17-.6 1.56-1.27 1.56-1.74s-.39-1.14-1.56-1.74zm-7.1-.6q-.5.11-.94.27.1.46.25.96a15 15 0 0 1 .69-1.23m5.34 0a15 15 0 0 1 .7 1.23q.14-.5.24-.96-.44-.15-.94-.27M7.18 3.06c-1.09-.74-1.85-.76-2.24-.52s-.76.92-.69 2.26l.01.15a11 11 0 0 1 1.8-.41q.6-.8 1.24-1.4zm3.88-.52c-.4-.24-1.15-.22-2.25.52l-.12.08q.65.6 1.25 1.4.96.15 1.8.41v-.14c.08-1.35-.28-2.04-.68-2.27M8 3.7a10 10 0 0 0-.7.7 14 14 0 0 1 1.4 0 10 10 0 0 0-.7-.7" clip-rule="evenodd"/>
</symbol>`),
      (qr = `<symbol id="file-tree-builtin-ruby" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M11.04 2c.48 0 .92.23 1.18.6l2.54 3.65c.37.52.3 1.23-.15 1.69l-5.58 5.64a1.47 1.47 0 0 1-2.06 0L1.39 7.94a1.3 1.3 0 0 1-.15-1.7l2.54-3.63q.2-.3.5-.45.33-.16.68-.16zm.84 2.17a.5.5 0 0 0-.7-.05L8 6.84 4.83 4.12a.5.5 0 0 0-.65.76L6.65 7H3.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H9.35l2.48-2.12a.5.5 0 0 0 .05-.7" clip-rule="evenodd"/>
</symbol>`),
      (Jr = `<symbol id="file-tree-builtin-rust" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 .8a.2.2 0 0 1 .18.1l.38.6.16.02.5-.53.01-.01a.2.2 0 0 1 .33.08l.25.68.16.05.59-.43h.02a.2.2 0 0 1 .3.14l.12.71.15.08.65-.3a.2.2 0 0 1 .2.02.2.2 0 0 1 .1.18l-.03.72.12.1.71-.16a.2.2 0 0 1 .25.25l-.17.7q.06.06.1.13l.73-.03A.2.2 0 0 1 14 4a.2.2 0 0 1 .02.2l-.3.66.08.14.71.12a.2.2 0 0 1 .14.32l-.43.59.05.16.68.25a.2.2 0 0 1 .07.35l-.53.49.01.16.62.38a.2.2 0 0 1 0 .36l-.62.38-.01.16.53.5a.2.2 0 0 1-.07.34l-.68.25-.05.16.43.59a.2.2 0 0 1-.14.32l-.72.12-.07.15.3.65a.2.2 0 0 1-.02.2.2.2 0 0 1-.18.1l-.72-.03-.1.13.16.7a.2.2 0 0 1-.25.25l-.7-.17-.13.1.03.73a.2.2 0 0 1-.1.18.2.2 0 0 1-.2.02l-.66-.3-.14.08-.12.71a.2.2 0 0 1-.32.14l-.59-.43-.16.05-.25.68a.2.2 0 0 1-.34.07l-.5-.53-.16.01-.38.62a.2.2 0 0 1-.36 0l-.38-.62-.16-.01-.5.53a.2.2 0 0 1-.34-.07l-.25-.68-.16-.05-.59.43a.2.2 0 0 1-.32-.14L5 13.78l-.15-.07-.65.3a.2.2 0 0 1-.2-.02.2.2 0 0 1-.1-.18l.03-.72-.13-.1-.7.16a.2.2 0 0 1-.25-.25l.17-.7-.1-.13-.73.03a.2.2 0 0 1-.2-.3l.3-.66-.08-.14-.71-.12a.2.2 0 0 1-.14-.32l.43-.59-.05-.16-.68-.25A.2.2 0 0 1 1 9.22l.53-.5-.02-.16-.6-.38A.2.2 0 0 1 .8 8a.2.2 0 0 1 .1-.18l.6-.38.02-.16-.53-.5a.2.2 0 0 1 .07-.34l.68-.25.05-.16-.43-.59a.2.2 0 0 1 .14-.32L2.2 5l.08-.15L2 4.2a.2.2 0 0 1 .2-.3l.72.03.1-.13-.16-.7a.2.2 0 0 1 .25-.25l.7.16.13-.1-.03-.72A.2.2 0 0 1 4 2a.2.2 0 0 1 .2-.02l.65.3L5 2.2l.12-.71v-.03a.2.2 0 0 1 .32-.1l.59.41.16-.04.25-.68.01-.02A.2.2 0 0 1 6.8.99l.49.53.16-.02.38-.61.02-.02A.2.2 0 0 1 8 .79M6.8 9.45h1.26l.06.01q.03.01.03.05v1.52q0 .07-.09.06h-4.5A5.4 5.4 0 0 0 8 13.42a5.4 5.4 0 0 0 4.45-2.33h-2.42c-.36 0-.68-.5-.77-.75-.08-.22-.2-.91-.25-1.12-.15-.61-.59-.71-.78-.73H6.8zM8 2.58a5.4 5.4 0 0 0-4.07 1.85h5.74l.17.02c.23.03.6.12.96.35.34.23.83.68.83 1.4 0 .66-.55 1.16-1.08 1.5.42.33.7.53.86 1.44.04.17.34.32.62.29.29-.03.62-.16.62-.75v-.24q0-.1.07-.1h.68A5.43 5.43 0 0 0 8 2.59M2.96 6.03a5.4 5.4 0 0 0-.19 3.37h1.66V6.03zM6.8 7.06h1.66c.35 0 .77-.12.77-.47 0-.42-.55-.53-.65-.53H6.8z" clip-rule="evenodd"/>
</symbol>`),
      (Yr = `<symbol id="file-tree-builtin-sass" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8.08 1.44c2.41-.91 4.96-.37 5.35 1.27.39 1.62-.92 3.56-2.6 4.25a5 5 0 0 1-3.26.35c-.58-.2-.92-.62-1-.85-.03-.09-.09-.24 0-.3.05-.03.08-.02.22.15s.7.6 1.75.48c2.78-.34 4.45-2.64 3.92-3.88-.37-.87-2.5-1.26-5.18.16C4.03 4.81 3.85 6.24 3.82 6.8c-.08 1.5 1.73 2.28 2.7 3.4q.04.03.07.08c.3-.12.7-.19 1.35-.2 1.58-.03 2.47 1.08 2.43 2.08-.03.78-.7 1.1-.82 1.13-.1.01-.14.02-.15-.06q-.03-.06.13-.15c.16-.09.42-.3.48-.72.05-.43-.24-1.44-1.76-1.63a3 3 0 0 0-1.33.08c.27.62.32 1.87-.29 2.83-.63 1-1.8 1.61-2.93 1.27-.37-.1-.93-.92-.45-2.05.46-1.07 2.4-2.12 2.66-2.26-.9-.83-3.08-1.95-3.4-3.65-.08-.49.13-1.65 1.46-2.98a12 12 0 0 1 4.11-2.52m-1.88 9.7c-.01.01-.9.47-1.52 1.17-.59.66-.75 1.48-.43 1.69.3.18 1-.04 1.51-.62a3 3 0 0 0 .5-.9q.2-.64.02-1.39z" clip-rule="evenodd"/>
</symbol>`),
      (Xr = `<symbol id="file-tree-builtin-stylelint" viewBox="0 0 16 16">
  <path fill="currentColor" d="M4 3v3.5l1.5-1L7 15 .5 6l1-1.5L0 3l2.5-2h1zm12 0-1.5 1.5 1 1.5L9 15l1.5-9.5 1.5 1V3l.5-2h1zm-8 8.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"/>
  <path fill="currentColor" d="M6.5 2.5V4l-2 1.5v-4zm5 3L9.5 4V2.5l2-1zM9 4H7V2.5h2z"/>
</symbol>`),
      (Zr = `<symbol id="file-tree-builtin-svelte" viewBox="0 0 16 16">
  <path fill="currentColor" d="m3.98 3.7 3.36-2.08a4.5 4.5 0 0 1 5.9 1.23 4 4 0 0 1 .7 3.02q-.16.75-.58 1.4c.42.77.56 1.66.4 2.52a3.7 3.7 0 0 1-1.57 2.4l-.17.1-3.36 2.09a4.5 4.5 0 0 1-5.9-1.23 4 4 0 0 1-.66-1.44 4 4 0 0 1-.04-1.58 4 4 0 0 1 .58-1.4 4 4 0 0 1-.4-2.52 3.7 3.7 0 0 1 1.57-2.4zl3.36-2.08zm7.87 0a2.7 2.7 0 0 0-1.26-.95 2.7 2.7 0 0 0-1.6-.07 3 3 0 0 0-.52.2l-.16.09-3.36 2.08a2 2 0 0 0-.69.64 2 2 0 0 0-.36.86 2.3 2.3 0 0 0 .42 1.81A2.7 2.7 0 0 0 7.18 9.4q.28-.06.53-.2l.16-.09 1.28-.79.2-.09a.8.8 0 0 1 .87.31.7.7 0 0 1 .13.55.7.7 0 0 1-.24.4l-.08.05-3.36 2.08-.2.09a1 1 0 0 1-.49-.02 1 1 0 0 1-.38-.3 1 1 0 0 1-.13-.37v-.1l.01-.13-.13-.03a4 4 0 0 1-1.1-.5l-.2-.14-.18-.12-.07.18-.08.3a2.3 2.3 0 0 0 .43 1.82q.45.64 1.19.93.73.28 1.51.14l.16-.04q.27-.07.52-.2l.16-.09 3.36-2.08q.4-.25.69-.64.27-.4.36-.86a2.3 2.3 0 0 0-.42-1.82 2.7 2.7 0 0 0-1.27-.95 2.7 2.7 0 0 0-1.6-.08q-.27.07-.52.2l-.16.1-1.28.79-.2.09a1 1 0 0 1-.49-.03 1 1 0 0 1-.38-.29.7.7 0 0 1-.13-.54.7.7 0 0 1 .24-.4l.08-.06L9.33 4.4l.2-.1a.8.8 0 0 1 .87.32 1 1 0 0 1 .13.38v.22l.11.04q.6.18 1.12.5l.2.14.17.12.06-.19.08-.3a2.3 2.3 0 0 0-.42-1.81z"/>
</symbol>`),
      (Qr = `<symbol id="file-tree-builtin-svg" viewBox="0 0 16 16">
  <path fill="currentColor" d="M5 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/>
  <path fill="currentColor" d="M6 1a5 5 0 0 1 4.58 3H7a3 3 0 0 0-3 3v3.58A5 5 0 0 1 6 1" opacity=".5"/>
</symbol>`),
      ($r = `<symbol id="file-tree-builtin-svgo" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.43 4.8A.6.6 0 1 1 9.19 6l-.56.96a1.2 1.2 0 0 1 .32 1.58l.7.53a.89.89 0 1 1-.17.22l-.7-.52a1.2 1.2 0 0 1-1.4.25l-.56.87a.75.75 0 1 1-.57-.2 1 1 0 0 1 .32.05l.56-.87a1.2 1.2 0 0 1-.4-1.24l-1.2-.47a.56.56 0 1 1 .1-.28v.02l1.2.47a1.2 1.2 0 0 1 1.56-.55l.56-.97a.6.6 0 0 1-.15-.64.6.6 0 0 1 .63-.4"/>
  <path fill="currentColor" fill-rule="evenodd" d="M9.17 1q.16.63.27 1.26a6 6 0 0 1 1.61.67q.52-.38 1.08-.71l1.65 1.64q-.32.56-.68 1.05.48.78.72 1.67.6.09 1.18.25v2.32q-.55.15-1.11.24a6 6 0 0 1-.7 1.82q.31.44.59.91l-1.65 1.65-.85-.55a6 6 0 0 1-1.9.83q-.08.47-.2.95H6.84q-.12-.46-.2-.93a6 6 0 0 1-1.96-.81q-.39.27-.8.51l-1.65-1.65q.25-.43.53-.84a6 6 0 0 1-.75-1.9L1 9.16V6.83q.54-.14 1.09-.24a6 6 0 0 1 .77-1.74q-.33-.47-.63-.98l1.65-1.65q.54.32 1.03.68a6 6 0 0 1 1.66-.66q.1-.61.26-1.24zM7.96 3.73a4 4 0 0 0-1.74.36 4.5 4.5 0 0 0-2.3 2.3 4.4 4.4 0 0 0-.1 3.29l.03.06a4.4 4.4 0 0 0 2.4 2.47 4.4 4.4 0 0 0 3.48-.02l.03-.02a4.4 4.4 0 0 0 2.3-2.42l.06-.14a4.4 4.4 0 0 0-.2-3.4 4.4 4.4 0 0 0-2.13-2.07L9.47 4a4 4 0 0 0-1.51-.27" clip-rule="evenodd"/>
</symbol>`),
      (ei = `<symbol id="file-tree-builtin-swift" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.63 1c6.15 4.35 4.16 9.15 4.16 9.15s1.75 2.05 1.04 3.85c0 0-.72-1.26-1.93-1.26-1.17 0-1.85 1.26-4.2 1.26C3.47 14 1 9.46 1 9.46c4.71 3.22 7.93.94 7.93.94C6.8 9.12 2.29 3 2.29 3c3.93 3.47 5.63 4.39 5.63 4.39-1.01-.87-3.86-5.13-3.86-5.13C6.34 4.66 10.86 8 10.86 8c1.28-3.7-1.23-7-1.23-7"/>
</symbol>`),
      (ti = `<symbol id="file-tree-builtin-table" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 4a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1H8z" class="bg" opacity=".4"/>
  <path fill="currentColor" d="M11.5 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5zM5 12h2.5v-1H5zm3.5 0H11v-1H8.5zM5 10h2.5V9H5zm3.5 0H11V9H8.5zm1-9a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z" class="fg"/>
</symbol>`),
      (ni = `<symbol id="file-tree-builtin-tailwind" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 4Q5.2 4 4.5 6.67q1.05-1.34 2.45-1c.53.12.91.5 1.33.9C8.98 7.23 9.77 8 11.5 8q2.8 0 3.5-2.67-1.05 1.34-2.45 1c-.53-.12-.91-.5-1.33-.9C10.52 4.77 9.73 4 8 4M4.5 8Q1.7 8 1 10.67q1.05-1.34 2.45-1c.53.12.91.5 1.33.9C5.48 11.23 6.26 12 8 12q2.8 0 3.5-2.67-1.05 1.34-2.45 1c-.53-.12-.91-.5-1.33-.9C7.02 8.77 6.24 8 4.5 8" clip-rule="evenodd"/>
</symbol>`),
      (ri = `<symbol id="file-tree-builtin-terraform" viewBox="0 0 16 16">
  <path fill="currentColor" d="M1 0v5.05l4.35 2.53V2.53zm9.18 5.34L5.83 2.82v5.05l4.35 2.53zm.47 5.06V5.34L15 2.82v5.05zm-.48 5.6-4.35-2.53V8.42l4.35 2.53z"/>
</symbol>`),
      (ii = `<symbol id="file-tree-builtin-text" viewBox="0 0 16 16">
  <path fill="currentColor" fill-rule="evenodd" d="M8 4a3 3 0 0 0 3 3h3v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1H8z" class="bg" clip-rule="evenodd" opacity=".4"/>
  <path fill="currentColor" d="M8.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-1-8a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 14 5.5V6h-3a2 2 0 0 1-2-2V1z"/>
</symbol>`),
      (ai = `<symbol id="file-tree-builtin-typescript" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8 1C2.24 1 1 2.24 1 8s1.24 7 7 7 7-1.24 7-7-1.24-7-7-7" class="bg" opacity=".2"/>
  <path fill="currentColor" d="M8.1 9.64h.95c.04.62.28.76 1.28.76s1.2-.14 1.2-.85c0-.66-.2-.85-1.2-1.07-1.79-.38-2.18-.7-2.18-1.86C8.15 5.3 8.54 5 10.31 5c1.67 0 2.04.26 2.07 1.42h-.95c-.02-.43-.23-.53-1.1-.53-1 0-1.22.14-1.22.74 0 .52.22.7 1.24.92 1.76.38 2.15.73 2.15 2 0 1.44-.4 1.75-2.24 1.75-1.8 0-2.18-.3-2.15-1.66m-3 1.57V5.99H3.5v-.9h4.21v.9H6.1v5.22z"/>
</symbol>`),
      (oi = `<symbol id="file-tree-builtin-vite" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8.57 14.87c-.18.26-.55.11-.55-.22v-3.18l-.05-.27-.13-.22-.2-.15-.24-.06H4.29c-.26 0-.4-.32-.26-.55L6.08 7c.3-.46 0-1.1-.5-1.1H1.8c-.25 0-.4-.32-.25-.56l2.65-4.2A.3.3 0 0 1 4.46 1h7.9c.26 0 .4.32.26.55l-2.05 3.23c-.29.46 0 1.1.5 1.1h3.12c.26 0 .4.34.24.57z"/>
</symbol>`),
      (si = `<symbol id="file-tree-builtin-vscode" viewBox="0 0 16 16">
  <path fill="currentColor" d="m5.11 9.68-2.4 1.84a.6.6 0 0 1-.75-.04l-.77-.7a.6.6 0 0 1 0-.87L3.28 8zm5.52-8.42a.51.51 0 0 1 .87.36V4.8L7.32 8 5.1 6.32z" opacity=".75"/>
  <path fill="currentColor" d="M11.1 14.99h.03zM1.96 4.52a.6.6 0 0 1 .75-.04l8.8 6.71v3.19a.51.51 0 0 1-.88.36L1.19 6.1a.6.6 0 0 1 0-.87z" opacity=".65"/>
  <path fill="currentColor" d="M11.62 14.91a.9.9 0 0 1-1-.17.51.51 0 0 0 .88-.36V1.62a.51.51 0 0 0-.87-.36.9.9 0 0 1 1-.17l2.87 1.39a.9.9 0 0 1 .5.8v9.44a.9.9 0 0 1-.5.8z"/>
</symbol>`),
      (ci = `<symbol id="file-tree-builtin-vue" viewBox="0 0 16 16">
  <path fill="currentColor" d="M9.62 2.25 8 5.02 6.38 2.25H1l7 12 7-12z" opacity=".5"/>
  <path fill="currentColor" d="M9.54 2.25 8 4.95l-1.54-2.7H4l4 7 4-7z"/>
</symbol>`),
      (li = `<symbol id="file-tree-builtin-wasm" viewBox="0 0 16 16">
  <path fill="currentColor" d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3a2 2 0 1 0 4 0z" class="subtract" opacity=".2"/>
  <path fill="currentColor" d="M4.64 11.4h.02l.8-3.4h.91l.73 3.45L7.88 8h.96l-1.25 5h-.97L5.9 9.6 5.1 13h-1L3 8h.98z"/>
  <path fill="currentColor" fill-rule="evenodd" d="M13 13h-1.02l-.33-1.11H9.9L9.64 13h-.97l1.26-5h1.54zm-2.49-3.77-.42 1.84h1.32l-.49-1.84z" clip-rule="evenodd"/>
</symbol>`),
      (ui = `<symbol id="file-tree-builtin-webpack" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.1 11.79 8.26 15v-2.5l3.64-1.94zm.4-.35V4.73l-2.14 1.2v4.3zm-12.6.35L7.74 15v-2.5L4.1 10.56zm-.4-.35V4.73l2.14 1.2v4.3zm.25-7.15 6-3.29v2.42L3.9 5.47l-.03.01zm12.5 0L8.25 1v2.42l3.85 2.05.03.01z" class="bg" opacity=".4"/>
  <path fill="currentColor" d="m7.74 11.93-3.59-1.92v-3.8l3.6 2.02zm.52 0 3.59-1.92v-3.8l-3.6 2.02zM4.4 5.77 8 3.85l3.6 1.93L8 7.8z" class="fg"/>
</symbol>`),
      (di = `<symbol id="file-tree-builtin-yml" viewBox="0 0 16 16">
  <path fill="currentColor" d="M7.5 2A1.5 1.5 0 0 1 9 3.5v3A1.5 1.5 0 0 1 7.5 8h-2v2A1.5 1.5 0 0 0 7 11.5v-1A1.5 1.5 0 0 1 8.5 9h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 7 13.5v-1A2.5 2.5 0 0 1 4.5 10V8h-2A1.5 1.5 0 0 1 1 6.5v-3A1.5 1.5 0 0 1 2.5 2zm1 8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm-6-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</symbol>`),
      (fi = `<symbol id="file-tree-builtin-zig" viewBox="0 0 16 16">
  <path fill="currentColor" d="m14.73 1.5-7.29 8.82h4.17l-1.73 2.04H5.76L1.27 14.5l7.3-8.91H4.39l1.73-2.05h4.12z"/>
  <path fill="currentColor" d="M5.21 3.54 3.56 5.6h-.55v4.73h.83L2.1 12.36H1V3.54zm9.79 0v8.82h-4.3l1.74-2.04h.55V5.68h-.83l1.74-2.14z"/>
</symbol>`),
      (pi = [
        _r,
        Sr,
        wr,
        Tr,
        Er,
        Dr,
        Ar,
        jr,
        Mr,
        Pr,
        Fr,
        Ir,
        Lr,
        Rr,
        zr,
        Gr,
        qr,
        Jr,
        ei,
        ti,
        ii,
        ai,
        `<symbol id="file-tree-builtin-zip" viewBox="0 0 16 16">
  <path fill="currentColor" d="M4.585 2a2 2 0 0 1 1.028.285l1.788 1.072a1 1 0 0 0 .514.143H12A2 2 0 0 1 13.935 5H0V4a2 2 0 0 1 2-2z" class="bg" opacity=".5"/>
  <path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1.25h1v-1H0V6h14zM9.9 8.25c-.883 0-1.9.5-1.9.5H7v1h1v1s1.017.5 1.9.5c.884 0 1.6-.672 1.6-1.5s-.716-1.5-1.6-1.5M2 9.75v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm-5-1v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1z" class="fg" clip-rule="evenodd"/>
</symbol>`,
      ]),
      (mi = [
        hr,
        gr,
        vr,
        yr,
        br,
        xr,
        Cr,
        Or,
        kr,
        Nr,
        Br,
        Vr,
        Hr,
        Ur,
        Wr,
        Kr,
        Yr,
        Xr,
        Zr,
        Qr,
        $r,
        ni,
        ri,
        oi,
        si,
        ci,
        li,
        ui,
        di,
        fi,
      ]),
      (hi = lr(mr, pi)),
      (gi = { minimal: mr, standard: hi, complete: lr(hi, mi) }),
      (_i = {
        ".babelrc": `babel`,
        ".babelrc.json": `babel`,
        ".bash_profile": `bash`,
        ".bashrc": `bash`,
        ".browserslistrc": `browserslist`,
        ".dockerignore": `docker`,
        ".eslintignore": `eslint`,
        ".eslintrc": `eslint`,
        ".eslintrc.cjs": `eslint`,
        ".eslintrc.js": `eslint`,
        ".eslintrc.json": `eslint`,
        ".eslintrc.yaml": `eslint`,
        ".eslintrc.yml": `eslint`,
        ".gitattributes": `git`,
        ".gitignore": `git`,
        ".gitkeep": `git`,
        ".gitmodules": `git`,
        ".oxlintrc.json": `oxc`,
        ".postcssrc": `postcss`,
        ".postcssrc.json": `postcss`,
        ".postcssrc.yaml": `postcss`,
        ".postcssrc.yml": `postcss`,
        ".prettierignore": `prettier`,
        ".prettierrc": `prettier`,
        ".prettierrc.cjs": `prettier`,
        ".prettierrc.js": `prettier`,
        ".prettierrc.json": `prettier`,
        ".prettierrc.mjs": `prettier`,
        ".prettierrc.toml": `prettier`,
        ".prettierrc.yaml": `prettier`,
        ".prettierrc.yml": `prettier`,
        ".stylelintignore": `stylelint`,
        ".stylelintrc": `stylelint`,
        ".stylelintrc.cjs": `stylelint`,
        ".stylelintrc.js": `stylelint`,
        ".stylelintrc.json": `stylelint`,
        ".stylelintrc.mjs": `stylelint`,
        ".stylelintrc.yaml": `stylelint`,
        ".stylelintrc.yml": `stylelint`,
        ".terraform.lock.hcl": `terraform`,
        ".zprofile": `bash`,
        ".zshenv": `bash`,
        ".zshrc": `bash`,
        "babel.config.cjs": `babel`,
        "babel.config.js": `babel`,
        "babel.config.json": `babel`,
        "babel.config.mjs": `babel`,
        "biome.json": `biome`,
        "biome.jsonc": `biome`,
        "bootstrap.bundle.js": `bootstrap`,
        "bootstrap.bundle.min.js": `bootstrap`,
        "bootstrap.css": `bootstrap`,
        "bootstrap.js": `bootstrap`,
        "bootstrap.min.css": `bootstrap`,
        "bootstrap.min.js": `bootstrap`,
        "bun.lock": `bun`,
        "bun.lockb": `bun`,
        "bunfig.toml": `bun`,
        "claude.md": `claude`,
        "compose.yaml": `docker`,
        "compose.yml": `docker`,
        "docker-compose.override.yml": `docker`,
        "docker-compose.yaml": `docker`,
        "docker-compose.yml": `docker`,
        dockerfile: `docker`,
        "eslint.config.cjs": `eslint`,
        "eslint.config.js": `eslint`,
        "eslint.config.mjs": `eslint`,
        "eslint.config.mts": `eslint`,
        "eslint.config.ts": `eslint`,
        gemfile: `ruby`,
        "next.config.js": `nextjs`,
        "next.config.mjs": `nextjs`,
        "next.config.mts": `nextjs`,
        "next.config.ts": `nextjs`,
        "postcss.config.cjs": `postcss`,
        "postcss.config.js": `postcss`,
        "postcss.config.mjs": `postcss`,
        "postcss.config.ts": `postcss`,
        "prettier.config.cjs": `prettier`,
        "prettier.config.js": `prettier`,
        "prettier.config.mjs": `prettier`,
        rakefile: `ruby`,
        "readme.md": `markdown`,
        "stylelint.config.cjs": `stylelint`,
        "stylelint.config.js": `stylelint`,
        "stylelint.config.mjs": `stylelint`,
        "svgo.config.cjs": `svgo`,
        "svgo.config.js": `svgo`,
        "svgo.config.mjs": `svgo`,
        "svgo.config.ts": `svgo`,
        "tailwind.config.cjs": `tailwind`,
        "tailwind.config.js": `tailwind`,
        "tailwind.config.mjs": `tailwind`,
        "tailwind.config.ts": `tailwind`,
        "vite.config.js": `vite`,
        "vite.config.mjs": `vite`,
        "vite.config.mts": `vite`,
        "vite.config.ts": `vite`,
        "webpack.config.babel.js": `webpack`,
        "webpack.config.cjs": `webpack`,
        "webpack.config.js": `webpack`,
        "webpack.config.mjs": `webpack`,
        "webpack.config.ts": `webpack`,
      }),
      (vi = {
        "7z": `zip`,
        astro: `astro`,
        AUTHORS: `text`,
        avif: `image`,
        bash: `bash`,
        bmp: `image`,
        bz2: `zip`,
        c: `c`,
        cc: `cpp`,
        cfg: `text`,
        CHANGELOG: `text`,
        cjs: `javascript`,
        "code-workspace": `vscode`,
        conf: `text`,
        CONTRIBUTORS: `text`,
        cpp: `cpp`,
        csh: `bash`,
        css: `css`,
        csv: `table`,
        cts: `typescript`,
        cxx: `cpp`,
        db: `database`,
        editorconfig: `text`,
        env: `text`,
        "env.development": `text`,
        "env.local": `text`,
        "env.production": `text`,
        eot: `font`,
        erb: `ruby`,
        fish: `bash`,
        gemspec: `ruby`,
        gif: `image`,
        go: `go`,
        gql: `graphql`,
        graphql: `graphql`,
        gz: `zip`,
        h: `c`,
        hh: `cpp`,
        hpp: `cpp`,
        htm: `html`,
        html: `html`,
        hxx: `cpp`,
        icns: `image`,
        ico: `image`,
        ini: `text`,
        inl: `cpp`,
        jar: `zip`,
        jpeg: `image`,
        jpg: `image`,
        js: `javascript`,
        json: `json`,
        json5: `json`,
        jsonc: `json`,
        jsonl: `json`,
        jsx: `javascript`,
        ksh: `bash`,
        less: `css`,
        LICENSE: `text`,
        log: `text`,
        markdown: `markdown`,
        mcp: `mcp`,
        md: `markdown`,
        mdx: `markdown`,
        "mdx.tsx": `markdown`,
        mjs: `javascript`,
        mm: `cpp`,
        mts: `typescript`,
        ods: `table`,
        otf: `font`,
        png: `image`,
        postcss: `css`,
        py: `python`,
        pyi: `python`,
        pyw: `python`,
        pyx: `python`,
        rake: `ruby`,
        rar: `zip`,
        rb: `ruby`,
        rs: `rust`,
        rst: `text`,
        rtf: `text`,
        sass: `css`,
        scss: `css`,
        sh: `bash`,
        sql: `database`,
        sqlite: `database`,
        sqlite3: `database`,
        styl: `css`,
        svelte: `svelte`,
        svg: `svg`,
        swift: `swift`,
        tar: `zip`,
        tf: `terraform`,
        tfstate: `terraform`,
        tfvars: `terraform`,
        tgz: `zip`,
        tif: `image`,
        tiff: `image`,
        ts: `typescript`,
        tsv: `table`,
        tsx: `typescript`,
        ttf: `font`,
        txt: `text`,
        vue: `vue`,
        war: `zip`,
        wasm: `wasm`,
        wast: `wasm`,
        wat: `wasm`,
        webp: `image`,
        woff: `font`,
        woff2: `font`,
        xhtml: `html`,
        xls: `table`,
        xlsx: `table`,
        xz: `zip`,
        yaml: `yml`,
        yml: `yml`,
        zig: `zig`,
        zip: `zip`,
        zsh: `bash`,
      }),
      (yi = { jsx: `react`, sass: `sass`, scss: `sass`, tsx: `react` }),
      (bi = new Set([
        `bash`,
        `c`,
        `cpp`,
        `css`,
        `database`,
        `default`,
        `font`,
        `git`,
        `go`,
        `html`,
        `image`,
        `javascript`,
        `json`,
        `markdown`,
        `mcp`,
        `python`,
        `ruby`,
        `rust`,
        `swift`,
        `table`,
        `text`,
        `typescript`,
        `zip`,
      ])),
      (xi = new Set([`complete`])));
  }),
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi = e(() => {
    ((Ci = `file-tree-container`),
      (wi = `data-file-tree-style`),
      (Ti = `data-file-tree-unsafe-css`),
      (Ei = `data-file-tree-scrollbar-measure`),
      (Di = `data-file-tree-scrollbar-gutter-measured`),
      (Oi = `--trees-scrollbar-gutter-measured`),
      (ki = `header`),
      (Ai = `context-menu`),
      (ji = `context-menu-trigger`));
  });
function Ni(e) {
  return (
    e.spriteSheet != null ||
    e.remap != null ||
    e.byFileName != null ||
    e.byFileExtension != null ||
    e.byFileNameContains != null
  );
}
function Pi(e) {
  return e == null
    ? { set: `complete`, colored: !0 }
    : typeof e == `string`
      ? { set: e, colored: !0 }
      : { ...e, set: e.set ?? (Ni(e) ? `none` : `complete`), colored: e.colored ?? !0 };
}
var Fi = e(() => {});
function Ii(e, t) {
  return typeof e == `string` ? { name: e, remappedFrom: t } : { ...e, remappedFrom: t };
}
function Li(e) {
  let t = Pi(e),
    n = t.remap,
    r = new Map();
  for (let [e, n] of Object.entries(t.byFileName ?? {})) r.set(e.toLowerCase(), n);
  let i = new Map();
  for (let [e, n] of Object.entries(t.byFileExtension ?? {})) i.set(Ri(e), n);
  let a = Object.entries(t.byFileNameContains ?? {}).map(([e, t]) => [e.toLowerCase(), t]);
  return {
    resolveIcon: (e, o) => {
      if (e === `file-tree-icon-file` && o != null) {
        let n = zi(o),
          s = n.toLowerCase(),
          c = r.get(s);
        if (c != null) return Ii(c, e);
        for (let [t, n] of a) if (s.includes(t)) return Ii(n, e);
        let l = Bi(n);
        for (let t of l) {
          let n = i.get(t);
          if (n != null) return Ii(n, e);
        }
        let u = pr(t.set, n, l);
        if (u != null && t.set !== `none`) return { name: dr(u), remappedFrom: e, token: u };
      }
      let s = n?.[e];
      return s == null ? { name: e } : Ii(s, e);
    },
  };
}
var Ri,
  zi,
  Bi,
  Vi = e(() => {
    (Si(),
      Fi(),
      (Ri = (e) => e.trim().toLowerCase()),
      (zi = (e) => e.split(`/`).at(-1) ?? e),
      (Bi = (e) => {
        let t = e.toLowerCase().split(`.`),
          n = [];
        for (let e = 1; e < t.length; e += 1) n.push(t.slice(e).join(`.`));
        return n;
      }));
  });
function Hi() {
  return {
    childIdByNameId: new Map(),
    childIds: [],
    childPositionById: new Map(),
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function Ui() {
  return {
    childIdByNameId: null,
    childIds: [],
    childPositionById: null,
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function Wi(e, t) {
  if (t.childIdByNameId != null) return t.childIdByNameId;
  let n = new Map();
  for (let r of t.childIds) {
    let t = e[r];
    t != null && n.set(t.nameId, r);
  }
  return ((t.childIdByNameId = n), n);
}
function Gi(e) {
  if (e.childPositionById != null) return e.childPositionById;
  let t = new Map();
  for (let n = 0; n < e.childIds.length; n++) {
    let r = e.childIds[n];
    r != null && t.set(r, n);
  }
  return ((e.childPositionById = t), t);
}
function Ki(e, t) {
  (e.childPositionById != null && e.childPositionById.set(t, e.childIds.length),
    e.childIds.push(t));
}
function qi(e, t) {
  if (e.childPositionById != null)
    for (let n = t; n < e.childIds.length; n++) {
      let t = e.childIds[n];
      t != null && e.childPositionById.set(t, n);
    }
}
function Ji(e, t) {
  let n = 0,
    r = 0;
  for (let i of t.childIds) {
    let t = e[i];
    t != null && ((n += t.subtreeNodeCount), (r += t.visibleSubtreeCount));
  }
  ((t.totalChildSubtreeNodeCount = n), (t.totalChildVisibleSubtreeCount = r), Qi(e, t));
}
function Yi(e, t, n, r) {
  if (
    ((e.totalChildSubtreeNodeCount += n),
    (e.totalChildVisibleSubtreeCount += r),
    e.childVisibleChunkSums == null || r === 0)
  )
    return;
  let i = Gi(e).get(t);
  if (i === void 0) return;
  let a = i >> ea;
  e.childVisibleChunkSums[a] += r;
}
function Xi(e, t, n) {
  let r = t.childVisibleChunkSums;
  if (r != null) {
    let i = n,
      a = 0;
    for (let o of r) {
      if (i < o) {
        let r = $i(e, t, a, i);
        return { ...r, childVisibleIndex: n - r.localVisibleIndex };
      }
      ((i -= o), (a += ta));
    }
    throw Error(`Visible child index ${String(n)} is out of range`);
  }
  let i = n;
  for (let r = 0; r < t.childIds.length; r++) {
    let a = t.childIds[r];
    if (a == null) continue;
    let o = e[a];
    if (o != null) {
      if (i < o.visibleSubtreeCount)
        return { childIndex: r, childVisibleIndex: n - i, localVisibleIndex: i };
      i -= o.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(n)} is out of range`);
}
function Zi(e, t, n) {
  let r = 0,
    i = t.childVisibleChunkSums,
    a = 0;
  if (i != null) {
    let e = n >> ea;
    for (let t = 0; t < e; t += 1) r += i[t] ?? 0;
    a = e << ea;
  }
  for (let i = a; i < n; i += 1) {
    let n = t.childIds[i];
    if (n == null) continue;
    let a = e[n];
    a != null && (r += a.visibleSubtreeCount);
  }
  return r;
}
function Qi(e, t) {
  if (t.childIds.length < na) {
    t.childVisibleChunkSums = null;
    return;
  }
  let n = Math.ceil(t.childIds.length / ta),
    r = new Int32Array(n);
  for (let n = 0; n < t.childIds.length; n++) {
    let i = t.childIds[n];
    if (i == null) continue;
    let a = e[i];
    a != null && (r[n >> ea] += a.visibleSubtreeCount);
  }
  t.childVisibleChunkSums = r;
}
function $i(e, t, n, r) {
  let i = Math.min(t.childIds.length, n + ta),
    a = r;
  for (let r = n; r < i; r++) {
    let n = t.childIds[r];
    if (n == null) continue;
    let i = e[n];
    if (i != null) {
      if (a < i.visibleSubtreeCount) return { childIndex: r, localVisibleIndex: a };
      a -= i.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(r)} is out of range`);
}
var ea,
  ta,
  na,
  ra = e(() => {
    ((ea = 5), (ta = 1 << ea), (na = ta * 4));
  });
function ia(e, t, n = 0) {
  return (e << ma) | (n << fa) | t;
}
function aa(e) {
  return e.depthAndFlags >>> ma;
}
function oa(e) {
  return (e.depthAndFlags & pa) >> fa;
}
function K(e) {
  return (e.depthAndFlags & pa) !== 0;
}
function sa(e) {
  return e.depthAndFlags & da;
}
function ca(e, t) {
  return (sa(e) & t) !== 0;
}
function la(e, t) {
  e.depthAndFlags |= t;
}
function ua(e, t) {
  e.depthAndFlags = ia(t, sa(e), oa(e));
}
var da,
  fa,
  pa,
  ma,
  ha = e(() => {
    ((da = 7), (fa = 3), (pa = 1 << fa), (ma = 4));
  });
function ga(e, t) {
  return (
    t == null ||
      Object.defineProperty(e, ya, { configurable: !0, enumerable: !1, value: t, writable: !1 }),
    e
  );
}
function _a(e) {
  return e == null ? null : (e[ya] ?? null);
}
function q(e, t, n) {
  return e == null ? n() : e.measurePhase(t, n);
}
function va(e, t, n) {
  !Number.isFinite(n) || e == null || e.setCounter(t, n);
}
var ya,
  ba = e(() => {
    ya = Symbol(`benchmarkInstrumentation`);
  });
function xa(e) {
  return e >= 48 && e <= 57;
}
function Sa(e) {
  let t = [],
    n = 0,
    r = 0;
  for (; r < e.length;) {
    for (; r < e.length && !xa(e.charCodeAt(r));) r += 1;
    if (r >= e.length) break;
    r > n && t.push(e.slice(n, r));
    let i = 0;
    for (; r < e.length && xa(e.charCodeAt(r));) ((i = i * 10 + (e.charCodeAt(r) - 48)), (r += 1));
    (t.push(i), (n = r));
  }
  return ((n < e.length || t.length === 0) && t.push(e.slice(n)), t);
}
function Ca(e) {
  let t = e.toLowerCase();
  return { lowerValue: t, tokens: Sa(t) };
}
function wa(e, t) {
  let n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) {
    let n = e[r],
      i = t[r];
    if (n === i) continue;
    if (typeof n == `number` && typeof i == `number`) return n < i ? -1 : 1;
    let a = String(n),
      o = String(i);
    if (a !== o) return a < o ? -1 : 1;
  }
  return e.length === t.length ? 0 : e.length < t.length ? -1 : 1;
}
function Ta(e, t) {
  if (
    e.tokens.length === 1 &&
    t.tokens.length === 1 &&
    typeof e.tokens[0] == `string` &&
    typeof t.tokens[0] == `string`
  )
    return e.lowerValue === t.lowerValue ? 0 : e.lowerValue < t.lowerValue ? -1 : 1;
  let n = wa(e.tokens, t.tokens);
  return n === 0 ? (e.lowerValue === t.lowerValue ? 0 : e.lowerValue < t.lowerValue ? -1 : 1) : n;
}
function Ea(e, t, n) {
  let r = Ta(n(e), n(t));
  return r === 0 ? (e === t ? 0 : e < t ? -1 : 1) : r;
}
function Da(e, t) {
  return Ea(e, t, Ca);
}
function Oa(e, t) {
  return t === e.segments.length - 1 ? (e.isDirectory ? 1 : 0) : 1;
}
function ka(e, t) {
  let n = Math.min(e.segments.length, t.segments.length);
  for (let r = 0; r < n; r++) {
    let n = e.segments[r],
      i = t.segments[r];
    if (n === i) continue;
    let a = Oa(e, r);
    return a === Oa(t, r) ? Da(n, i) : a === 1 ? -1 : 1;
  }
  return e.segments.length === t.segments.length
    ? e.isDirectory === t.isDirectory
      ? 0
      : e.isDirectory
        ? -1
        : 1
    : e.segments.length < t.segments.length
      ? -1
      : 1;
}
function Aa(e, t) {
  return ka(e, t);
}
function ja(e, t, n) {
  let r = (e) => {
      let t = n.get(e);
      if (t != null) return t;
      let r = Ca(e);
      return (n.set(e, r), r);
    },
    i = Math.min(e.segments.length, t.segments.length);
  for (let n = 0; n < i; n++) {
    let i = e.segments[n],
      a = t.segments[n];
    if (i === a) continue;
    let o = Oa(e, n);
    return o === Oa(t, n) ? Ea(i, a, r) : o === 1 ? -1 : 1;
  }
  return e.segments.length === t.segments.length
    ? e.isDirectory === t.isDirectory
      ? 0
      : e.isDirectory
        ? -1
        : 1
    : e.segments.length < t.segments.length
      ? -1
      : 1;
}
function Ma(e, t) {
  let n = e.sortKeyById[t];
  if (n !== void 0) return n;
  let r = e.valueById[t],
    i = Ca(r);
  return ((e.sortKeyById[t] = i), i);
}
var Na = e(() => {
  ha();
});
function Pa(e = {}) {
  return { flattenEmptyDirectories: e.flattenEmptyDirectories !== !1, sort: e.sort ?? `default` };
}
var Fa = e(() => {});
function Ia(e) {
  let t = e.length > 0 && e.charCodeAt(e.length - 1) === 47,
    n = t ? e.length - 1 : e.length,
    r = [],
    i = 0;
  for (let t = 0; t < n; t++) e.charCodeAt(t) === 47 && (r.push(e.slice(i, t)), (i = t + 1));
  return (r.push(e.slice(i, n)), { hasTrailingSlash: t, segments: r });
}
function La(e) {
  let { hasTrailingSlash: t, segments: n } = Ia(e);
  return { basename: n[n.length - 1] ?? ``, isDirectory: t, path: e, segments: n };
}
function Ra(e) {
  if (e.length === 0) return { requiresDirectory: !1, segments: [] };
  let { hasTrailingSlash: t, segments: n } = Ia(e);
  return { requiresDirectory: t, segments: n };
}
var za = e(() => {});
function Ba() {
  let e = new Map();
  return (e.set(Ua, 0), { idByValue: e, valueById: [Ua], sortKeyById: [Ca(Ua)] });
}
function Va(e, t) {
  let n = e.idByValue.get(t);
  if (n !== void 0) return n;
  let r = e.valueById.length;
  return (e.idByValue.set(t, r), e.valueById.push(t), r);
}
function Ha(e, t) {
  let n = e.valueById[t];
  if (n === void 0) throw Error(`Unknown segment ID: ${String(t)}`);
  return n;
}
var Ua,
  Wa = e(() => {
    (Na(), (Ua = ``));
  });
function Ga(e, t) {
  return ((e[oo] = t), e);
}
function Ka(e) {
  return {
    basename: e.basename,
    depth: e.segments.length,
    isDirectory: e.isDirectory,
    path: e.path,
    segments: e.segments,
  };
}
function qa(e, t, n) {
  return n === `default` ? Aa(e, t) : n(Ka(e), Ka(t));
}
function Ja() {
  return {
    depthAndFlags: ia(0, 3, 1),
    nameId: 0,
    parentId: 0,
    subtreeNodeCount: 1,
    visibleSubtreeCount: 1,
  };
}
function Ya(e, t) {
  let n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return r;
  return n;
}
function Xa(e) {
  return e.isDirectory ? e.segments.length : e.segments.length - 1;
}
function Za(e) {
  return (
    Array.isArray(e) &&
    e.every(
      (e) =>
        typeof e == `object` &&
        !!e &&
        typeof e.path == `string` &&
        Array.isArray(e.segments) &&
        typeof e.basename == `string` &&
        typeof e.isDirectory == `boolean`,
    )
  );
}
function Qa(e) {
  return Array.isArray(e) && e.every((e) => typeof e == `string`);
}
function $a(e, t = {}) {
  return ao(e, t).map((e) => e.path);
}
function eo(e, t = {}) {
  let n = ao(e, t);
  return Ga({ paths: n.map((e) => e.path), preparedPaths: n }, `prepared`);
}
function to(e) {
  let t = e.length,
    n = !1;
  for (let r = 0; r < t; r += 1) {
    let t = e[r];
    if (t.length > 0 && t.charCodeAt(t.length - 1) === 47) {
      n = !0;
      break;
    }
  }
  return Ga({ paths: e, presortedPaths: e, presortedPathsContainDirectories: n }, `presorted`);
}
function no(e) {
  let t = e,
    n = t.preparedPaths;
  if (t[oo] === `prepared` && n != null) return n;
  if (!Za(n)) throw Error(`preparedInput must come from PathStore.prepareInput()`);
  return n;
}
function ro(e) {
  let t = e;
  return (t[oo] === `presorted` && t.presortedPaths != null) || Qa(t.presortedPaths)
    ? t.presortedPaths
    : null;
}
function io(e) {
  let t = e;
  return typeof t.presortedPathsContainDirectories == `boolean`
    ? t.presortedPathsContainDirectories
    : null;
}
function ao(e, t = {}) {
  let n = Pa(t),
    r = _a(t);
  va(r, `workload.inputFiles`, e.length);
  let i = q(r, `store.preparePathEntries.parse`, () => e.map((e) => La(e)));
  return (q(r, `store.preparePathEntries.sort`, () => i.sort((e, t) => qa(e, t, n.sort))), i);
}
var oo,
  so,
  co = e(() => {
    (ra(),
      ha(),
      ba(),
      Fa(),
      za(),
      Na(),
      Wa(),
      (oo = Symbol(`pathStorePreparedInputKind`)),
      (so = class {
        directories = new Map();
        directoryStack = [0];
        presortedDirectoryNodeIds = [];
        initialExpandedPathSet;
        createdDirectoriesAllExpanded = !1;
        createdDirectoryCount = 0;
        lastPreparedPath = null;
        nodes = [Ja()];
        options;
        instrumentation;
        segmentSortKeyCache = new Map();
        segmentTable = Ba();
        hasDeferredDirectoryIndexes = !1;
        constructor(e = {}) {
          ((this.instrumentation = _a(e)), (this.options = Pa(e)));
          let t = e.initialExpandedPaths ?? null;
          if (t == null || t.length === 0) this.initialExpandedPathSet = null;
          else {
            let e = new Set(),
              n = t.length;
            for (let r = 0; r < n; r += 1) {
              let n = t[r],
                i = n.length;
              e.add(i > 0 && n.charCodeAt(i - 1) === 47 ? n.slice(0, i - 1) : n);
            }
            ((this.initialExpandedPathSet = e), (this.createdDirectoriesAllExpanded = !0));
          }
          this.directories.set(0, Hi());
        }
        appendPaths(e) {
          return q(this.instrumentation, `store.builder.appendPaths.parse`, () =>
            this.appendPreparedPaths(e.map((e) => La(e))),
          );
        }
        appendPreparedPaths(e, t = !0) {
          return (
            (this.createdDirectoriesAllExpanded = !1),
            q(this.instrumentation, `store.builder.appendPreparedPaths`, () => {
              for (let n of e) this.appendPreparedPath(n, t);
            }),
            this
          );
        }
        appendPresortedPaths(e, t = null) {
          return (
            q(this.instrumentation, `store.builder.appendPresortedPaths`, () => {
              if (t === !1) {
                this.appendPresortedFilePaths(e);
                return;
              }
              this.createdDirectoriesAllExpanded = !1;
              let n = null,
                r = 0,
                i = this.nodes,
                a = this.segmentTable,
                o = a.idByValue,
                s = a.valueById,
                c = this.directoryStack,
                l = 0,
                u = ``,
                d = 0;
              for (let t of e) {
                if (n === t) throw Error(`Duplicate path: "${t}"`);
                let e = t.length > 0 && t.charCodeAt(t.length - 1) === 47,
                  a = e ? t.length - 1 : t.length,
                  f = 0,
                  p = 0;
                if (n != null)
                  if (u.length > 0 && t.length > u.length && t.startsWith(u))
                    ((f = d), (p = u.length));
                  else {
                    let r = Math.min(a, n.length),
                      i = !0;
                    for (let e = 0; e < r; e++) {
                      let r = t.charCodeAt(e);
                      if (r !== n.charCodeAt(e)) {
                        i = !1;
                        break;
                      }
                      r === 47 && (f++, (p = e + 1));
                    }
                    i &&
                      e &&
                      r === a &&
                      n.length > a &&
                      n.charCodeAt(a) === 47 &&
                      (f++, (p = a + 1));
                  }
                ((l = f), (r = f));
                let m = p,
                  h = t.indexOf(`/`, m);
                for (; h >= 0 && h < a;) {
                  let e = c[l];
                  if (e === void 0)
                    throw Error(`Directory stack underflow while building the path store`);
                  r++;
                  let n = t.slice(m, h),
                    a = o.get(n);
                  a === void 0 && ((a = s.length), o.set(n, a), s.push(n));
                  let u = i.length;
                  (i.push({
                    depthAndFlags: ia(r, 0, 1),
                    nameId: a,
                    parentId: e,
                    subtreeNodeCount: 1,
                    visibleSubtreeCount: 1,
                  }),
                    this.recordCreatedDirectoryPath(t.slice(0, h)),
                    l++,
                    (c[l] = u),
                    (m = h + 1),
                    (h = t.indexOf(`/`, m)));
                }
                if (e) {
                  if (m < a) {
                    let e = c[l];
                    if (e === void 0) throw Error(`Unable to resolve directory parent for "${t}"`);
                    r++;
                    let n = t.slice(m, a),
                      u = o.get(n);
                    u === void 0 && ((u = s.length), o.set(n, u), s.push(n));
                    let d = i.length;
                    (i.push({
                      depthAndFlags: ia(r, 0, 1),
                      nameId: u,
                      parentId: e,
                      subtreeNodeCount: 1,
                      visibleSubtreeCount: 1,
                    }),
                      l++,
                      (c[l] = d));
                  }
                  let e = c[l];
                  if (e === void 0) throw Error(`Unable to resolve directory node for "${t}"`);
                  this.promoteDirectoryToExplicit(e, t);
                } else {
                  let e = c[l];
                  if (e === void 0) throw Error(`Unable to resolve file parent for "${t}"`);
                  let n = t.slice(m),
                    a = o.get(n);
                  (a === void 0 && ((a = s.length), o.set(n, a), s.push(n)),
                    i.push({
                      depthAndFlags: ia(r + 1, 0),
                      nameId: a,
                      parentId: e,
                      subtreeNodeCount: 1,
                      visibleSubtreeCount: 1,
                    }));
                }
                (m !== u.length && ((u = t.substring(0, m)), (d = r)), (n = t));
              }
              ((c.length = l + 1),
                n != null && (this.lastPreparedPath = La(n)),
                (this.hasDeferredDirectoryIndexes = !0));
            }),
            this
          );
        }
        appendPresortedFilePaths(e) {
          let t = null,
            n = 0,
            r = this.nodes,
            i = this.segmentTable,
            a = i.idByValue,
            o = i.valueById,
            s = this.directoryStack,
            c = 0,
            l = ``,
            u = 0;
          for (let i of e) {
            if (t === i) throw Error(`Duplicate path: "${i}"`);
            let e = i.length,
              d = 0,
              f = 0;
            if (t != null)
              if (l.length > 0 && i.length > l.length && i.startsWith(l)) ((d = u), (f = l.length));
              else {
                let n = Math.min(e, t.length);
                for (let e = 0; e < n; e++) {
                  let n = i.charCodeAt(e);
                  if (n !== t.charCodeAt(e)) break;
                  n === 47 && (d++, (f = e + 1));
                }
              }
            ((c = d), (n = d));
            let p = f,
              m = i.indexOf(`/`, p);
            for (; m >= 0;) {
              let e = s[c];
              if (e === void 0)
                throw Error(`Directory stack underflow while building the path store`);
              n++;
              let t = i.slice(p, m),
                l = a.get(t);
              l === void 0 && ((l = o.length), a.set(t, l), o.push(t));
              let u = r.length;
              (r.push({
                depthAndFlags: ia(n, 0, 1),
                nameId: l,
                parentId: e,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              }),
                this.recordCreatedDirectoryPath(i.slice(0, m)),
                this.presortedDirectoryNodeIds.push(u),
                c++,
                (s[c] = u),
                (p = m + 1),
                (m = i.indexOf(`/`, p)));
            }
            let h = s[c];
            if (h === void 0) throw Error(`Unable to resolve file parent for "${i}"`);
            let g = i.slice(p),
              _ = a.get(g);
            (_ === void 0 && ((_ = o.length), a.set(g, _), o.push(g)),
              r.push({
                depthAndFlags: ia(n + 1, 0),
                nameId: _,
                parentId: h,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              }),
              p !== l.length && ((l = i.substring(0, p)), (u = n)),
              (t = i));
          }
          ((s.length = c + 1),
            t != null && (this.lastPreparedPath = La(t)),
            (this.hasDeferredDirectoryIndexes = !0));
        }
        finish(e = {}) {
          let t = e.skipSubtreeCountPass === !0;
          return (
            this.hasDeferredDirectoryIndexes
              ? (q(this.instrumentation, `store.builder.buildDirectoryIndexes`, () =>
                  this.buildPresortedFinish(t),
                ),
                (this.hasDeferredDirectoryIndexes = !1))
              : t ||
                q(this.instrumentation, `store.builder.computeSubtreeCounts`, () =>
                  this.computeSubtreeCounts(0),
                ),
            {
              directories: this.directories,
              nodes: this.nodes,
              options: this.options,
              rootId: 0,
              segmentTable: this.segmentTable,
              presortedDirectoryNodeIds:
                this.presortedDirectoryNodeIds.length > 0 ? this.presortedDirectoryNodeIds : null,
            }
          );
        }
        didMatchAllInitialExpandedPaths() {
          return (
            this.createdDirectoriesAllExpanded &&
            this.initialExpandedPathSet != null &&
            this.createdDirectoryCount === this.initialExpandedPathSet.size
          );
        }
        appendPreparedPath(e, t) {
          if (
            ((this.hasDeferredDirectoryIndexes &&= (this.buildDirectoryIndexes(), !1)),
            this.lastPreparedPath != null)
          ) {
            if (e.path === this.lastPreparedPath.path) throw Error(`Duplicate path: "${e.path}"`);
            if (
              t &&
              (this.options.sort === `default`
                ? ja(this.lastPreparedPath, e, this.segmentSortKeyCache)
                : qa(this.lastPreparedPath, e, this.options.sort)) > 0
            )
              throw Error(`Builder input must be sorted before appendPaths(): "${e.path}"`);
          }
          let n = this.lastPreparedPath,
            r = Xa(e),
            i = n == null ? 0 : Xa(n),
            a = n == null ? 0 : Ya(n.segments, e.segments),
            o = Math.min(a, r, i);
          this.directoryStack.length = o + 1;
          for (let n = o; n < r; n++) {
            let r = this.directoryStack[this.directoryStack.length - 1];
            if (r === void 0)
              throw Error(`Directory stack underflow while building the path store`);
            let i = t
              ? this.getOrCreateDirectoryChild(r, e.segments[n])
              : this.createDirectoryChild(r, e.segments[n]);
            this.directoryStack.push(i);
          }
          if (e.isDirectory) {
            let t = this.directoryStack[this.directoryStack.length - 1];
            if (t === void 0) throw Error(`Unable to resolve directory node for "${e.path}"`);
            (this.promoteDirectoryToExplicit(t, e.path), (this.lastPreparedPath = e));
            return;
          }
          let s = this.directoryStack[this.directoryStack.length - 1];
          if (s === void 0) throw Error(`Unable to resolve file parent for "${e.path}"`);
          (t
            ? this.createFileChild(s, e.basename, e.path)
            : this.createFileChildUnchecked(s, e.basename),
            (this.lastPreparedPath = e));
        }
        recordCreatedDirectoryPath(e) {
          !this.createdDirectoriesAllExpanded ||
            this.initialExpandedPathSet == null ||
            ((this.createdDirectoryCount += 1),
            this.initialExpandedPathSet.has(e) || (this.createdDirectoriesAllExpanded = !1));
        }
        createFileChild(e, t, n) {
          let r = Va(this.segmentTable, t),
            i = this.getDirectoryIndex(e),
            a = i.childIdByNameId;
          if (a != null && a.get(r) !== void 0)
            throw Error(`Path collides with an existing entry: "${n}"`);
          let o = this.nodes[e];
          if (o === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
          let s = this.nodes.length;
          return (
            this.nodes.push({
              depthAndFlags: ia(aa(o) + 1, 0),
              nameId: r,
              parentId: e,
              subtreeNodeCount: 1,
              visibleSubtreeCount: 1,
            }),
            a?.set(r, s),
            Ki(i, s),
            s
          );
        }
        createFileChildUnchecked(e, t) {
          let n = Va(this.segmentTable, t),
            r = this.getDirectoryIndex(e),
            i = this.nodes[e];
          if (i === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
          let a = this.nodes.length;
          return (
            this.nodes.push({
              depthAndFlags: ia(aa(i) + 1, 0),
              nameId: n,
              parentId: e,
              subtreeNodeCount: 1,
              visibleSubtreeCount: 1,
            }),
            r.childIdByNameId != null && r.childIdByNameId.set(n, a),
            Ki(r, a),
            a
          );
        }
        getOrCreateDirectoryChild(e, t) {
          let n = Va(this.segmentTable, t),
            r = this.getDirectoryIndex(e);
          if (r.childIdByNameId != null) {
            let e = r.childIdByNameId.get(n);
            if (e !== void 0) {
              let n = this.nodes[e];
              if (n != null && !K(n))
                throw Error(`Path collides with an existing file while creating directory "${t}"`);
              return e;
            }
          }
          let i = this.nodes[e];
          if (i === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
          let a = this.nodes.length;
          return (
            this.nodes.push({
              depthAndFlags: ia(aa(i) + 1, 0, 1),
              nameId: n,
              parentId: e,
              subtreeNodeCount: 1,
              visibleSubtreeCount: 1,
            }),
            r.childIdByNameId != null && r.childIdByNameId.set(n, a),
            Ki(r, a),
            this.directories.set(a, Hi()),
            a
          );
        }
        createDirectoryChild(e, t) {
          let n = Va(this.segmentTable, t),
            r = this.getDirectoryIndex(e),
            i = this.nodes[e];
          if (i === void 0) throw Error(`Unknown parent node ID: ${String(e)}`);
          let a = this.nodes.length;
          return (
            this.nodes.push({
              depthAndFlags: ia(aa(i) + 1, 0, 1),
              nameId: n,
              parentId: e,
              subtreeNodeCount: 1,
              visibleSubtreeCount: 1,
            }),
            r.childIdByNameId != null && r.childIdByNameId.set(n, a),
            Ki(r, a),
            this.directories.set(a, Hi()),
            a
          );
        }
        promoteDirectoryToExplicit(e, t) {
          let n = this.nodes[e];
          if (n === void 0) throw Error(`Unknown directory node ID: ${String(e)}`);
          if (!K(n)) throw Error(`Path is not a directory: "${t}"`);
          if (ca(n, 1)) throw Error(`Duplicate path: "${t}"`);
          la(n, 1);
        }
        getDirectoryIndex(e) {
          let t = this.directories.get(e);
          if (t !== void 0) return t;
          throw Error(`Unknown directory child index for node ${String(e)}`);
        }
        buildPresortedFinish(e) {
          let t = this.nodes,
            n = this.directories;
          n.set(0, Ui());
          let r = -1,
            i = null;
          for (let e = 1; e < t.length; e++) {
            let a = t[e];
            if (a == null) continue;
            if (K(a)) {
              let t = Ui();
              (n.set(e, t), (r = e), (i = t));
            }
            let o;
            (a.parentId === r
              ? (o = i)
              : ((o = n.get(a.parentId)), (r = a.parentId), (i = o ?? null)),
              o?.childIds.push(e));
          }
          if (!e)
            for (let e = t.length - 1; e >= 1; e--) {
              let n = t[e];
              if (n == null) continue;
              let r = t[n.parentId];
              r != null &&
                ((r.subtreeNodeCount += n.subtreeNodeCount),
                (r.visibleSubtreeCount += n.visibleSubtreeCount));
            }
        }
        buildDirectoryIndexes() {
          let e = this.nodes;
          for (let t = 1; t < e.length; t++) {
            let n = e[t];
            if (n == null) continue;
            K(n) && this.directories.set(t, Hi());
            let r = this.directories.get(n.parentId);
            r != null &&
              (r.childIdByNameId != null && r.childIdByNameId.set(n.nameId, t), Ki(r, t));
          }
        }
        computeSubtreeCounts(e) {
          let t = this.nodes[e];
          if (t === void 0) throw Error(`Unknown node ID: ${String(e)}`);
          if (!K(t)) return ((t.subtreeNodeCount = 1), (t.visibleSubtreeCount = 1), 1);
          let n = this.getDirectoryIndex(e),
            r = 1;
          for (let e of n.childIds) r += this.computeSubtreeCounts(e);
          return (Ji(this.nodes, n), (t.subtreeNodeCount = r), (t.visibleSubtreeCount = r), r);
        }
      }));
  });
function lo(e, t = `closed`, n = null) {
  let r = fo(t);
  return {
    activeNodeCount: e.nodes.length - 1,
    collapsedDirectoryIds: new Set(),
    collapseNewDirectoriesByDefault: !1,
    defaultExpansion: r,
    directoriesOpenByDefault: r === `open`,
    hasCollapsedDirectoryOverrides: !1,
    directoryLoadInfoById: new Map(),
    expandedDirectoryIds: new Set(),
    instrumentation: n,
    listeners: new Map(),
    pathCacheByNodeId: new Map([[e.rootId, { path: ``, version: 0 }]]),
    pathCacheVersion: 0,
    snapshot: e,
    transactionStack: [],
  };
}
function uo() {
  return { affectedAncestorIds: new Set(), affectedNodeIds: new Set(), events: [] };
}
function fo(e) {
  if (typeof e != `number`) return e;
  if (!Number.isInteger(e) || e < 0)
    throw Error(
      `initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`,
    );
  return e;
}
function po(e, t) {
  return ca(t, 2) || e.defaultExpansion === `open`
    ? !0
    : e.defaultExpansion === `closed`
      ? !1
      : aa(t) <= e.defaultExpansion;
}
function mo(e, t, n = e.snapshot.nodes[t]) {
  return n == null || !K(n)
    ? !1
    : e.directoriesOpenByDefault && !e.hasCollapsedDirectoryOverrides
      ? !0
      : e.collapsedDirectoryIds.has(t)
        ? !1
        : e.expandedDirectoryIds.has(t)
          ? !0
          : po(e, n);
}
function ho(e, t, n, r = e.snapshot.nodes[t]) {
  if (r == null || !K(r)) return;
  let i = po(e, r);
  if (n) {
    if (i) {
      (e.collapsedDirectoryIds.delete(t),
        (e.hasCollapsedDirectoryOverrides = e.collapsedDirectoryIds.size > 0));
      return;
    }
    e.expandedDirectoryIds.add(t);
    return;
  }
  if (i) {
    (e.collapsedDirectoryIds.add(t), (e.hasCollapsedDirectoryOverrides = !0));
    return;
  }
  e.expandedDirectoryIds.delete(t);
}
function go(e, t) {
  let n = e.directoryLoadInfoById.get(t);
  if (n != null) return n;
  let r = { activeAttemptId: null, errorMessage: null, nextAttemptId: 1, state: `loaded` };
  return (e.directoryLoadInfoById.set(t, r), r);
}
function _o(e, t) {
  return e.directoryLoadInfoById.get(t)?.state ?? `loaded`;
}
function vo(e, t) {
  let n = go(e, t);
  if (n.state === `loading` && n.activeAttemptId != null)
    return { attemptId: n.activeAttemptId, nodeId: t, reused: !0 };
  let r = n.nextAttemptId;
  return (
    (n.activeAttemptId = r),
    (n.errorMessage = null),
    (n.nextAttemptId += 1),
    (n.state = `loading`),
    { attemptId: r, nodeId: t, reused: !1 }
  );
}
function yo(e, t) {
  let n = go(e, t);
  ((n.activeAttemptId = null), (n.errorMessage = null), (n.state = `unloaded`));
}
function bo(e, t, n) {
  let r = e.directoryLoadInfoById.get(t);
  return r == null || r.activeAttemptId !== n
    ? !1
    : ((r.activeAttemptId = null), (r.errorMessage = null), (r.state = `loaded`), !0);
}
function xo(e, t, n) {
  return e.directoryLoadInfoById.get(t)?.activeAttemptId === n;
}
function So(e, t, n, r) {
  let i = e.directoryLoadInfoById.get(t);
  return i == null || i.activeAttemptId !== n
    ? !1
    : ((i.activeAttemptId = null), (i.errorMessage = r ?? null), (i.state = `error`), !0);
}
function Co(e, t) {
  e.directoryLoadInfoById.delete(t);
}
var wo = e(() => {
  ha();
});
function To(e, t, n) {
  let r = n,
    i = e.listeners.get(t);
  return (
    i == null ? e.listeners.set(t, new Set([r])) : i.add(r),
    () => {
      let n = e.listeners.get(t);
      n != null && (n.delete(r), n.size === 0 && e.listeners.delete(t));
    }
  );
}
function Eo(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !0,
    operation: `add`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: null,
  };
}
function Do(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !0,
    operation: `remove`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    recursive: e.recursive,
    visibleCountDelta: null,
  };
}
function Oo(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !0,
    from: e.from,
    operation: `move`,
    projectionChanged: e.projectionChanged,
    to: e.to,
    visibleCountDelta: null,
  };
}
function ko(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !1,
    operation: `expand`,
    path: e.path,
    projectionChanged: !0,
    visibleCountDelta: null,
  };
}
function Ao(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !1,
    operation: `collapse`,
    path: e.path,
    projectionChanged: !0,
    visibleCountDelta: null,
  };
}
function jo(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    canonicalChanged: !1,
    operation: `mark-directory-unloaded`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: null,
  };
}
function Mo(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: !1,
    operation: `begin-child-load`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    reused: e.reused,
    visibleCountDelta: null,
  };
}
function No(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: e.childEvents.some((e) => e.canonicalChanged),
    childEvents: e.childEvents,
    operation: `apply-child-patch`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: null,
  };
}
function Po(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: !1,
    operation: `complete-child-load`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    stale: e.stale,
    visibleCountDelta: null,
  };
}
function Fo(e) {
  return {
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    attemptId: e.attemptId,
    canonicalChanged: !1,
    errorMessage: e.errorMessage,
    operation: `fail-child-load`,
    path: e.path,
    projectionChanged: e.projectionChanged,
    stale: e.stale,
    visibleCountDelta: null,
  };
}
function Io(e) {
  return {
    activeNodeCountAfter: e.activeNodeCountAfter,
    activeNodeCountBefore: e.activeNodeCountBefore,
    affectedAncestorIds: e.affectedAncestorIds ?? [],
    affectedNodeIds: e.affectedNodeIds ?? [],
    cachedPathEntryCountAfter: e.cachedPathEntryCountAfter,
    cachedPathEntryCountBefore: e.cachedPathEntryCountBefore,
    canonicalChanged: !1,
    idsPreserved: e.idsPreserved,
    loadInfoEntryCountAfter: e.loadInfoEntryCountAfter,
    loadInfoEntryCountBefore: e.loadInfoEntryCountBefore,
    mode: e.mode,
    operation: `cleanup`,
    projectionChanged: e.projectionChanged,
    reclaimedCachedPathEntryCount: e.reclaimedCachedPathEntryCount,
    reclaimedLoadInfoEntryCount: e.reclaimedLoadInfoEntryCount,
    reclaimedNodeSlotCount: e.reclaimedNodeSlotCount,
    reclaimedSegmentCount: e.reclaimedSegmentCount,
    segmentCountAfter: e.segmentCountAfter,
    segmentCountBefore: e.segmentCountBefore,
    totalNodeSlotCountAfter: e.totalNodeSlotCountAfter,
    totalNodeSlotCountBefore: e.totalNodeSlotCountBefore,
    visibleCountDelta: null,
  };
}
function Lo(e, t, n) {
  return { ...n, visibleCountDelta: Jo(e) - t };
}
function Ro(e, t) {
  let n = Jo(e),
    r = uo();
  e.transactionStack.push(r);
  try {
    t();
  } catch (t) {
    throw (Vo(e, r, !1), t);
  }
  Vo(e, r, !0, Jo(e) - n);
}
function zo(e, t) {
  let n = e.instrumentation;
  if (n == null) {
    Bo(e, t);
    return;
  }
  q(n, `store.events.record`, () => Bo(e, t));
}
function Bo(e, t) {
  let n = e.transactionStack[e.transactionStack.length - 1] ?? null;
  if (n == null) {
    Ko(e, t);
    return;
  }
  (n.events.push(t), Go(n, t));
}
function Vo(e, t, n, r = null) {
  if (e.transactionStack.pop() !== t) throw Error(`Transaction stack underflow`);
  if (!n) return;
  let i = e.transactionStack[e.transactionStack.length - 1] ?? null;
  if (i != null) {
    let n = e.instrumentation;
    n == null ? Wo(i, t) : q(n, `store.events.batch.merge`, () => Wo(i, t));
    return;
  }
  let a = Ho(t, r),
    o = e.instrumentation;
  if (o == null) {
    Ko(e, a);
    return;
  }
  q(o, `store.events.batch.commit`, () => Ko(e, a));
}
function Ho(e, t) {
  return {
    affectedAncestorIds: [...e.affectedAncestorIds],
    affectedNodeIds: [...e.affectedNodeIds],
    canonicalChanged: e.events.some((e) => e.canonicalChanged),
    events: [...e.events],
    operation: `batch`,
    projectionChanged: e.events.some((e) => e.projectionChanged),
    visibleCountDelta: t,
  };
}
function Uo(e, t) {
  for (let n of t.affectedAncestorIds) e.affectedAncestorIds.add(n);
  for (let n of t.affectedNodeIds) e.affectedNodeIds.add(n);
}
function Wo(e, t) {
  for (let n of t.events) e.events.push(n);
  Uo(e, t);
}
function Go(e, t) {
  for (let n of t.affectedNodeIds) e.affectedNodeIds.add(n);
  for (let n of t.affectedAncestorIds) e.affectedAncestorIds.add(n);
}
function Ko(e, t) {
  let n = e.instrumentation;
  if (n == null) {
    qo(e, t);
    return;
  }
  q(n, `store.events.emit`, () => qo(e, t));
}
function qo(e, t) {
  (e.listeners.get(t.operation)?.forEach((e) => e(t)), e.listeners.get(`*`)?.forEach((e) => e(t)));
}
function Jo(e) {
  return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount ?? 0;
}
var Yo = e(() => {
  (ba(), wo());
});
function Xo(e, t) {
  if (e.snapshot.options.flattenEmptyDirectories !== !0) return null;
  let n = e.snapshot.nodes[t];
  if (n == null || !K(n) || ca(n, 2)) return null;
  let r = e.snapshot.directories.get(t);
  if (r == null || r.childIds.length !== 1) return null;
  let i = r.childIds[0];
  if (i == null) return null;
  let a = e.snapshot.nodes[i];
  return a == null || !K(a) ? null : i;
}
function Zo(e, t) {
  let n = t;
  for (;;) {
    let t = Xo(e, n);
    if (t == null) return n;
    n = t;
  }
}
function Qo(e, t) {
  let n = [t],
    r = t;
  for (;;) {
    let t = Xo(e, r);
    if (t == null) return n;
    (n.push(t), (r = t));
  }
}
var $o = e(() => {
  ha();
});
function es(e, t) {
  let n = t == null ? e.snapshot.rootId : ls(e, t);
  return n == null ? [] : ds(e, n);
}
function ts(e, t) {
  let n = La(t),
    r = n.isDirectory ? n.segments : n.segments.slice(0, -1),
    i = Es(e, Ts(e, r)),
    { createdNodeIds: a, directoryId: o } = fs(e, r),
    s = new Set(a),
    c = o;
  if (n.isDirectory) {
    let n = X(e, o);
    if (ca(n, 1)) throw Error(`Path already exists: "${t}"`);
    (la(n, 1), e.pathCacheByNodeId.set(o, { path: t, version: e.pathCacheVersion }), s.add(o));
  } else ((c = ms(e, o, n.basename)), s.add(c));
  os(e, o);
  let l = Es(e, o);
  return Eo({
    affectedAncestorIds: cs(e, c),
    affectedNodeIds: [...s],
    path: t,
    projectionChanged: Ds(i, l),
  });
}
function ns(e, t, n) {
  let r = ls(e, t);
  if (r == null) throw Error(`Path does not exist: "${t}"`);
  let i = X(e, r);
  if (ca(i, 2)) throw Error(`The root node cannot be removed`);
  if (K(i) && Y(e, r).childIds.length > 0 && n.recursive !== !0)
    throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);
  let a = i.parentId,
    o = Es(e, a),
    s = Cs(e, r);
  (_s(e, a, r, i.nameId), ws(e, a), os(e, a));
  let c = Es(e, a);
  return Do({
    affectedAncestorIds: cs(e, a),
    affectedNodeIds: s,
    path: t,
    projectionChanged: Ds(o, c),
    recursive: n.recursive === !0,
  });
}
function rs(e, t, n, r) {
  let i = ls(e, t);
  if (i == null) throw Error(`Source path does not exist: "${t}"`);
  let a = X(e, i);
  if (ca(a, 2)) throw Error(`The root node cannot be moved`);
  let o = r.collision ?? `error`,
    s = xs(e, i, n),
    c = Es(e, a.parentId),
    l = Es(e, s.parentId),
    u = Ha(e.snapshot.segmentTable, a.nameId),
    d = Va(e.snapshot.segmentTable, s.basename);
  if (s.parentId === a.parentId && u === s.basename) return null;
  if (K(a) && js(e, i, s.parentId))
    throw Error(`Cannot move a directory into one of its descendants`);
  let f = Wi(e.snapshot.nodes, Y(e, s.parentId)).get(d),
    p = s.existingNodeId ?? f ?? null;
  if (p != null && p !== i && Ss(e, p, o, oa(a)) === `skip`) return null;
  let m = a.parentId;
  (_s(e, m, i, a.nameId),
    (a.parentId = s.parentId),
    (a.nameId = d),
    e.pathCacheByNodeId.delete(i),
    As(e, i),
    gs(e, s.parentId, i),
    ws(e, m),
    e.pathCacheVersion++,
    os(e, m),
    s.parentId !== m && os(e, s.parentId));
  let h = Es(e, m),
    g = Es(e, s.parentId);
  return Oo({
    affectedAncestorIds: [...new Set([...cs(e, m), ...cs(e, s.parentId)])],
    affectedNodeIds: [i],
    from: t,
    projectionChanged: Os([c, l], [h, g]),
    to: J(e, i),
  });
}
function is(e, t) {
  let n = e.pathCacheByNodeId.get(t);
  return n != null && n.version === e.pathCacheVersion ? n.path : null;
}
function as(e, t, n) {
  return (e.pathCacheByNodeId.set(t, { path: n, version: e.pathCacheVersion }), n);
}
function J(e, t) {
  let n = X(e, t),
    r = is(e, t);
  if (r != null) return r;
  if (ca(n, 2)) return as(e, t, ``);
  let i = J(e, n.parentId),
    a = Ha(e.snapshot.segmentTable, n.nameId),
    o = i.length === 0 ? a : `${i}${a}`;
  return as(e, t, K(n) ? `${o}/` : o);
}
function os(e, t) {
  let n = e.instrumentation;
  if (n == null) {
    Ns(e, t);
    return;
  }
  q(n, `store.recomputeCountsUpwardFrom`, () => Ns(e, t));
}
function ss(e, t) {
  let n = [[t, 0]],
    { nodes: r, directories: i } = e.snapshot;
  for (; n.length > 0;) {
    let t = n[n.length - 1],
      a = t[0],
      o = r[a];
    if (o == null || !K(o)) {
      (Ms(e, a, o, !0), n.pop());
      continue;
    }
    let s = i.get(a);
    if (s == null || t[1] >= s.childIds.length) {
      (Ms(e, a, o, !0), n.pop());
      continue;
    }
    let c = s.childIds[t[1]++];
    n.push([c, 0]);
  }
}
function cs(e, t) {
  let n = [],
    r = t;
  for (; r != null;) {
    let t = X(e, r);
    if ((n.push(r), r === e.snapshot.rootId)) break;
    r = t.parentId;
  }
  return n;
}
function ls(e, t) {
  if (t.length === 0) return e.snapshot.rootId;
  let n = Ra(t);
  return us(e, n.segments, n.requiresDirectory);
}
function us(e, t, n) {
  let r = e.snapshot.rootId;
  for (let n of t) {
    let t = e.snapshot.segmentTable.idByValue.get(n);
    if (t === void 0) return null;
    let i = Y(e, r),
      a = Wi(e.snapshot.nodes, i).get(t);
    if (a === void 0) return null;
    r = a;
  }
  let i = X(e, r);
  return n && !K(i) ? null : r;
}
function Y(e, t) {
  let n = e.snapshot.directories.get(t);
  if (n === void 0) throw Error(`Unknown directory child index for node ${String(t)}`);
  return n;
}
function X(e, t) {
  let n = e.snapshot.nodes[t];
  if (n === void 0 || ca(n, 4)) throw Error(`Unknown node ID: ${String(t)}`);
  return n;
}
function ds(e, t) {
  let n = e.snapshot.nodes[t];
  if (n === void 0 || ca(n, 4)) return [];
  if (!K(n)) return [J(e, t)];
  if (Y(e, t).childIds.length === 0) return ca(n, 1) && !ca(n, 2) ? [J(e, t)] : [];
  let r = [],
    i = [{ childIndex: 0, nodeId: t }];
  for (; i.length > 0;) {
    let t = i[i.length - 1];
    if (t == null) break;
    let n = e.snapshot.nodes[t.nodeId];
    if (n === void 0 || ca(n, 4)) {
      i.pop();
      continue;
    }
    if (!K(n)) {
      (r.push(J(e, t.nodeId)), i.pop());
      continue;
    }
    let a = Y(e, t.nodeId);
    if (a.childIds.length === 0) {
      (ca(n, 1) && !ca(n, 2) && r.push(J(e, t.nodeId)), i.pop());
      continue;
    }
    let o = a.childIds[t.childIndex];
    if (o == null) {
      i.pop();
      continue;
    }
    (t.childIndex++, i.push({ childIndex: 0, nodeId: o }));
  }
  return r;
}
function fs(e, t) {
  let n = [],
    r = e.snapshot.rootId;
  for (let i of t) {
    let t = Va(e.snapshot.segmentTable, i),
      a = Y(e, r),
      o = Wi(e.snapshot.nodes, a).get(t);
    if (o !== void 0) {
      if (!K(X(e, o)))
        throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);
      r = o;
      continue;
    }
    ((r = ps(e, r, t)), n.push(r));
  }
  return { createdNodeIds: n, directoryId: r };
}
function ps(e, t, n) {
  let r = X(e, t),
    i = e.snapshot.nodes.length;
  return (
    e.snapshot.nodes.push({
      depthAndFlags: ia(aa(r) + 1, 0, 1),
      nameId: n,
      parentId: t,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    e.snapshot.directories.set(i, Hi()),
    gs(e, t, i),
    e.collapseNewDirectoriesByDefault &&
      (e.collapsedDirectoryIds.add(i), (e.hasCollapsedDirectoryOverrides = !0)),
    e.activeNodeCount++,
    i
  );
}
function ms(e, t, n) {
  let r = Va(e.snapshot.segmentTable, n),
    i = Y(e, t);
  if (Wi(e.snapshot.nodes, i).has(r)) throw Error(`Path already exists: "${Fs(e, t, n)}"`);
  let a = X(e, t),
    o = e.snapshot.nodes.length;
  return (
    e.snapshot.nodes.push({
      depthAndFlags: ia(aa(a) + 1, 0),
      nameId: r,
      parentId: t,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    gs(e, t, o),
    e.activeNodeCount++,
    o
  );
}
function hs(e, t, n) {
  let r = 0,
    i = t.childIds.length;
  for (; r < i;) {
    let a = (r + i) >>> 1,
      o = t.childIds[a];
    if (o == null) {
      i = a;
      continue;
    }
    vs(e, n, o) < 0 ? (i = a) : (r = a + 1);
  }
  return r;
}
function gs(e, t, n) {
  let r = Y(e, t),
    i = X(e, n);
  (Wi(e.snapshot.nodes, r).set(i.nameId, n), Yi(r, n, i.subtreeNodeCount, i.visibleSubtreeCount));
  let a = hs(e, r, n);
  (r.childIds.splice(a, 0, n), qi(r, a), Qi(e.snapshot.nodes, r));
}
function _s(e, t, n, r) {
  let i = Y(e, t),
    a = Gi(i),
    o = a.get(n) ?? -1;
  (Wi(e.snapshot.nodes, i).delete(r), a.delete(n));
  let s = e.snapshot.nodes[n];
  (s != null && Yi(i, n, -s.subtreeNodeCount, -s.visibleSubtreeCount),
    o >= 0 && (i.childIds.splice(o, 1), qi(i, o), Qi(e.snapshot.nodes, i)));
}
function vs(e, t, n) {
  let r = e.snapshot.options.sort;
  return r === `default` ? ys(e, t, n) : r(bs(e, t), bs(e, n));
}
function ys(e, t, n) {
  let r = X(e, t),
    i = X(e, n),
    a = K(r);
  if (a !== K(i)) return a ? -1 : 1;
  let o = Ta(Ma(e.snapshot.segmentTable, r.nameId), Ma(e.snapshot.segmentTable, i.nameId));
  if (o !== 0) return o;
  let s = Ha(e.snapshot.segmentTable, r.nameId),
    c = Ha(e.snapshot.segmentTable, i.nameId);
  return s === c ? (t < n ? -1 : 1) : s < c ? -1 : 1;
}
function bs(e, t) {
  let n = X(e, t),
    r = J(e, t),
    i = K(n),
    a = i ? r.slice(0, -1) : r;
  return {
    basename: Ha(e.snapshot.segmentTable, n.nameId),
    depth: aa(n),
    isDirectory: i,
    path: r,
    segments: a.length === 0 ? [] : a.split(`/`),
  };
}
function xs(e, t, n) {
  let r = X(e, t),
    i = ls(e, n);
  if (i != null) {
    let t = X(e, i);
    if (K(t))
      return { basename: Ha(e.snapshot.segmentTable, r.nameId), existingNodeId: null, parentId: i };
    let a = Ra(n).segments;
    return { basename: a[a.length - 1] ?? ``, existingNodeId: i, parentId: t.parentId };
  }
  let a = Ra(n),
    o = a.segments[a.segments.length - 1] ?? ``,
    s = a.segments.slice(0, -1),
    c = s.length === 0 ? e.snapshot.rootId : us(e, s, !0);
  if (c == null) throw Error(`Destination parent does not exist: "${n}"`);
  return { basename: o, existingNodeId: null, parentId: c };
}
function Ss(e, t, n, r) {
  if (n === `skip`) return `skip`;
  if (n === `error`) throw Error(`Destination already exists: "${J(e, t)}"`);
  let i = X(e, t);
  if (oa(i) !== r) throw Error(`replace collision requires the same source and destination kinds`);
  if (K(i) && Y(e, t).childIds.length > 0)
    throw Error(`replace collision does not support non-empty directories`);
  let a = i.parentId,
    o = i.nameId;
  return (Cs(e, t), _s(e, a, t, o), ws(e, a), os(e, a), `handled`);
}
function Cs(e, t) {
  let n = [],
    r = [{ nodeId: t, visitedChildren: !1 }];
  for (; r.length > 0;) {
    let t = r.pop();
    if (t == null) break;
    let i = X(e, t.nodeId);
    if (t.visitedChildren || !K(i)) {
      (K(i) && e.snapshot.directories.delete(t.nodeId),
        la(i, 4),
        e.pathCacheByNodeId.delete(t.nodeId),
        e.collapsedDirectoryIds.delete(t.nodeId) &&
          (e.hasCollapsedDirectoryOverrides = e.collapsedDirectoryIds.size > 0),
        e.expandedDirectoryIds.delete(t.nodeId),
        Co(e, t.nodeId),
        e.activeNodeCount--,
        n.push(t.nodeId));
      continue;
    }
    r.push({ nodeId: t.nodeId, visitedChildren: !0 });
    let a = Y(e, t.nodeId);
    for (let e = a.childIds.length - 1; e >= 0; e--) {
      let t = a.childIds[e];
      t != null && r.push({ nodeId: t, visitedChildren: !1 });
    }
  }
  return n;
}
function ws(e, t) {
  let n = t;
  for (; n != null;) {
    let t = X(e, n);
    if (!K(t) || ca(t, 2) || Y(e, n).childIds.length > 0) return;
    (la(t, 1), (n = t.parentId === n ? null : t.parentId));
  }
}
function Ts(e, t) {
  let n = e.snapshot.rootId;
  for (let r of t) {
    let t = e.snapshot.segmentTable.idByValue.get(r);
    if (t == null) break;
    let i = Wi(e.snapshot.nodes, Y(e, n)).get(t);
    if (i == null || !K(X(e, i))) break;
    n = i;
  }
  return n;
}
function Es(e, t) {
  let n = ks(e, t);
  if (n == null) return null;
  let r = Zo(e, n),
    i = X(e, r),
    a = n === r ? null : Qo(e, n).map((t) => J(e, t));
  return JSON.stringify({
    flattenedSegmentPaths: a,
    hasChildren: Y(e, r).childIds.length > 0,
    path: J(e, r),
    terminalKind: oa(i),
  });
}
function Ds(e, t) {
  return Os([e], [t]);
}
function Os(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (r == null || i == null || r !== i) return !0;
  }
  return !1;
}
function ks(e, t) {
  let n = t;
  for (; n != null;) {
    let t = X(e, n);
    if (!K(t) || ca(t, 2)) return null;
    if (!mo(e, n, t)) return n;
    n = t.parentId;
  }
  return null;
}
function As(e, t) {
  let n = X(e, t);
  if ((ua(n, (t === e.snapshot.rootId ? -1 : aa(X(e, n.parentId))) + 1), !K(n))) return;
  let r = Y(e, t);
  for (let t of r.childIds) As(e, t);
}
function js(e, t, n) {
  let r = n;
  for (; r != null;) {
    if (r === t) return !0;
    let n = X(e, r);
    if (r === e.snapshot.rootId) return !1;
    r = n.parentId;
  }
  return !1;
}
function Ms(e, t, n = X(e, t), r = !1) {
  let i = e.instrumentation;
  if (i == null) {
    Ps(e, t, n, r);
    return;
  }
  q(i, `store.recomputeNodeCounts`, () => Ps(e, t, n, r));
}
function Ns(e, t) {
  let n = t;
  for (; n != null;) {
    let t = X(e, n),
      r = t.subtreeNodeCount,
      i = t.visibleSubtreeCount;
    if ((Ms(e, n, t), n === e.snapshot.rootId)) return;
    let a = t.subtreeNodeCount - r,
      o = t.visibleSubtreeCount - i,
      s = t.parentId;
    ((a !== 0 || o !== 0) && Yi(Y(e, s), n, a, o), (n = s));
  }
}
function Ps(e, t, n, r) {
  if (!K(n)) {
    ((n.subtreeNodeCount = 1), (n.visibleSubtreeCount = 1));
    return;
  }
  let i = Y(e, t);
  if (r) {
    let t = e.instrumentation;
    t == null
      ? Ji(e.snapshot.nodes, i)
      : q(t, `store.recomputeNodeCounts.rebuildChildAggregates`, () => Ji(e.snapshot.nodes, i));
  }
  let a = 1 + i.totalChildSubtreeNodeCount,
    o = i.totalChildVisibleSubtreeCount;
  if (((n.subtreeNodeCount = a), ca(n, 2))) {
    n.visibleSubtreeCount = o;
    return;
  }
  n.visibleSubtreeCount = Xo(e, t) == null ? (mo(e, t, n) ? 1 + o : 1) : o;
}
function Fs(e, t, n) {
  let r = J(e, t);
  return r.length === 0 ? n : `${r}${n}`;
}
var Is = e(() => {
  (ra(), ha(), ba(), za(), Na(), Wa(), wo(), Yo(), $o());
});
function Ls(e) {
  return e != null && !ca(e, 4);
}
function Rs(e, t) {
  let n = e.snapshot.nodes[t];
  return !Ls(n) || !K(n) || ca(n, 2) ? null : n;
}
function zs(e) {
  let t = 0;
  for (let [n, r] of e.pathCacheByNodeId)
    r.version === e.pathCacheVersion && Ls(e.snapshot.nodes[n]) && (t += 1);
  return t;
}
function Bs(e) {
  return Math.max(0, e.valueById.length - 1);
}
function Vs(e) {
  return {
    activeNodeCount: e.activeNodeCount,
    cachedPathEntryCount: zs(e),
    loadInfoEntryCount: e.directoryLoadInfoById.size,
    segmentCount: Bs(e.snapshot.segmentTable),
    totalNodeSlotCount: Math.max(0, e.snapshot.nodes.length - 1),
  };
}
function Hs(e, t, n, r) {
  return {
    activeNodeCountAfter: r.activeNodeCount,
    activeNodeCountBefore: n.activeNodeCount,
    cachedPathEntryCountAfter: r.cachedPathEntryCount,
    cachedPathEntryCountBefore: n.cachedPathEntryCount,
    idsPreserved: t,
    loadInfoEntryCountAfter: r.loadInfoEntryCount,
    loadInfoEntryCountBefore: n.loadInfoEntryCount,
    mode: e,
    reclaimedCachedPathEntryCount: n.cachedPathEntryCount - r.cachedPathEntryCount,
    reclaimedLoadInfoEntryCount: n.loadInfoEntryCount - r.loadInfoEntryCount,
    reclaimedNodeSlotCount: n.totalNodeSlotCount - r.totalNodeSlotCount,
    reclaimedSegmentCount: n.segmentCount - r.segmentCount,
    segmentCountAfter: r.segmentCount,
    segmentCountBefore: n.segmentCount,
    totalNodeSlotCountAfter: r.totalNodeSlotCount,
    totalNodeSlotCountBefore: n.totalNodeSlotCount,
  };
}
function Us(e) {
  let t = [],
    n = [];
  for (let n of e.collapsedDirectoryIds) Rs(e, n) != null && t.push(J(e, n));
  for (let t of e.expandedDirectoryIds) Rs(e, t) != null && n.push(J(e, t));
  return { collapsedPaths: t, expandedPaths: n };
}
function Ws(e) {
  let t = [];
  for (let [n, r] of e.directoryLoadInfoById)
    Rs(e, n) == null ||
      _o(e, n) === `loaded` ||
      t.push({
        info: {
          activeAttemptId: null,
          errorMessage: r.errorMessage,
          nextAttemptId: r.nextAttemptId,
          state: r.state,
        },
        path: J(e, n),
      });
  return t;
}
function Gs(e, t) {
  (e.collapsedDirectoryIds.clear(),
    (e.hasCollapsedDirectoryOverrides = !1),
    e.expandedDirectoryIds.clear());
  for (let n of t.expandedPaths) {
    let t = ls(e, n);
    t != null && ho(e, t, !0, X(e, t));
  }
  for (let n of t.collapsedPaths) {
    let t = ls(e, n);
    t != null && ho(e, t, !1, X(e, t));
  }
}
function Ks(e, t) {
  e.directoryLoadInfoById.clear();
  for (let n of t) {
    let t = ls(e, n.path);
    t != null &&
      Rs(e, t) != null &&
      e.directoryLoadInfoById.set(t, {
        activeAttemptId: null,
        errorMessage: n.info.errorMessage,
        nextAttemptId: n.info.nextAttemptId,
        state: n.info.state,
      });
  }
}
function qs(e) {
  ((e.pathCacheVersion += 1),
    e.pathCacheByNodeId.clear(),
    e.pathCacheByNodeId.set(e.snapshot.rootId, { path: ``, version: e.pathCacheVersion }));
}
function Js(e) {
  let t = e.snapshot.segmentTable,
    n = Ba();
  for (let r of e.snapshot.nodes)
    if (Ls(r)) {
      if (ca(r, 2)) {
        r.nameId = 0;
        continue;
      }
      r.nameId = Va(n, Ha(t, r.nameId));
    }
  e.snapshot.segmentTable = n;
}
function Ys(e) {
  for (let [t, n] of e.snapshot.directories) {
    let r = e.snapshot.nodes[t];
    if (!Ls(r) || !K(r)) {
      e.snapshot.directories.delete(t);
      continue;
    }
    let i = n.childIds.filter((n) => {
      let r = e.snapshot.nodes[n];
      return Ls(r) && r.parentId === t;
    });
    ((n.childIds = i),
      (n.childIdByNameId = new Map(i.map((t) => [X(e, t).nameId, t]))),
      (n.childPositionById = new Map(i.map((e, t) => [e, t]))),
      Ji(e.snapshot.nodes, n));
  }
}
function Xs(e) {
  let t = e.snapshot.nodes.length - 1;
  for (; t > e.snapshot.rootId;) {
    let n = e.snapshot.nodes[t];
    if (Ls(n)) break;
    --t;
  }
  e.snapshot.nodes.length = t + 1;
}
function Zs(e) {
  let t = Us(e),
    n = Ws(e);
  (q(e.instrumentation, `store.cleanup.stable.clearPathCaches`, () => qs(e)),
    q(e.instrumentation, `store.cleanup.stable.rebuildSegmentTable`, () => Js(e)),
    q(e.instrumentation, `store.cleanup.stable.rebuildDirectoryIndexes`, () => Ys(e)),
    q(e.instrumentation, `store.cleanup.stable.trimTrailingRemovedNodeSlots`, () => Xs(e)),
    q(e.instrumentation, `store.cleanup.stable.restoreExpansionOverrides`, () => Gs(e, t)),
    q(e.instrumentation, `store.cleanup.stable.restoreDirectoryLoadInfos`, () => Ks(e, n)),
    q(e.instrumentation, `store.cleanup.stable.recomputeCounts`, () => ss(e, e.snapshot.rootId)));
}
function Qs(e) {
  let t = Us(e),
    n = Ws(e),
    r = q(e.instrumentation, `store.cleanup.aggressive.listPaths`, () => es(e)),
    i = ga({ ...e.snapshot.options }, e.instrumentation),
    a = q(e.instrumentation, `store.cleanup.aggressive.rebuildSnapshot`, () => {
      let e = new so(i);
      return (e.appendPaths(r), e.finish());
    });
  ((e.snapshot = a),
    (e.activeNodeCount = a.nodes.length - 1),
    (e.pathCacheByNodeId = new Map([[a.rootId, { path: ``, version: 0 }]])),
    (e.pathCacheVersion = 0),
    q(e.instrumentation, `store.cleanup.aggressive.restoreExpansionOverrides`, () => Gs(e, t)),
    q(e.instrumentation, `store.cleanup.aggressive.restoreDirectoryLoadInfos`, () => Ks(e, n)),
    q(e.instrumentation, `store.cleanup.aggressive.recomputeCounts`, () =>
      ss(e, e.snapshot.rootId),
    ));
}
function $s(e) {
  for (let t of e.directoryLoadInfoById.values())
    if (t.state === `loading` && t.activeAttemptId != null) return !0;
  return !1;
}
function ec(e, t) {
  let n = Vs(e);
  t === `stable`
    ? q(e.instrumentation, `store.cleanup.stable`, () => Zs(e))
    : q(e.instrumentation, `store.cleanup.aggressive`, () => Qs(e));
  let r = Vs(e);
  return Hs(t, t === `stable`, n, r);
}
var tc = e(() => {
  (ra(), ha(), ba(), Wa(), co(), wo(), Is());
});
function nc(e, t) {
  let n = t + 2;
  if (n <= e.length) return e;
  let r = e.length;
  for (; r < n;) r *= 2;
  let i = new Int32Array(r);
  return (i.fill(-1), i.set(e), i);
}
function rc(e) {
  return X(e, e.snapshot.rootId).visibleSubtreeCount;
}
function ic(e, t, n, r) {
  let i = X(e, t.terminalNodeId),
    a = Math.max(1, i.visibleSubtreeCount);
  return Math.min(r - 1, n + a - 1);
}
function ac(e, t, n, r) {
  return {
    ancestorPaths: r,
    index: t.index,
    posInSet: t.posInSet,
    row: wc(e, t.cursor),
    setSize: t.setSize,
    subtreeEndIndex: ic(e, t.cursor, t.index, n),
  };
}
function oc(e, t, n, r, i, a) {
  let o = Y(e, t),
    { childIndex: s, childVisibleIndex: c, localVisibleIndex: l } = Xi(e.snapshot.nodes, o, n),
    u = o.childIds[s];
  if (u == null) throw Error(`Visible index ${String(n)} is out of range`);
  return sc(e, u, l, r + c, i + 1, s, o.childIds.length, a);
}
function sc(e, t, n, r, i, a, o, s) {
  if (!K(X(e, t))) {
    if (n === 0)
      return {
        ancestors: s,
        cursor: { headNodeId: t, terminalNodeId: t, visibleDepth: i },
        index: r,
        posInSet: a,
        setSize: o,
      };
    throw Error(`Visible index ${String(n)} is out of range for file`);
  }
  let c = vc(e, t, i);
  if (n === 0) return { ancestors: s, cursor: c, index: r, posInSet: a, setSize: o };
  let l = X(e, c.terminalNodeId);
  if (!K(l) || !mo(e, c.terminalNodeId, l))
    throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);
  return oc(e, c.terminalNodeId, n - 1, r + 1, c.visibleDepth, [
    ...s,
    { cursor: c, index: r, posInSet: a, setSize: o },
  ]);
}
function cc(e, t) {
  let n = rc(e);
  if (t < 0 || t >= n) return null;
  let r = oc(e, e.snapshot.rootId, t, 0, -1, []),
    i = r.ancestors.map((t) => J(e, t.cursor.terminalNodeId)),
    a = null;
  return {
    ancestorPaths: i,
    get ancestorRows() {
      if (a != null) return a;
      let t = [],
        i = [];
      for (let a of r.ancestors) {
        let r = ac(e, a, n, [...i]);
        (t.push(r), i.push(r.row.path));
      }
      return ((a = t), a);
    },
    index: r.index,
    posInSet: r.posInSet,
    row: wc(e, r.cursor),
    setSize: r.setSize,
    subtreeEndIndex: ic(e, r.cursor, r.index, n),
  };
}
function lc(e, t, n) {
  let r = e.instrumentation,
    i = rc(e);
  if (i <= 0 || n < t) return [];
  let a = Math.max(0, Math.min(t, i - 1)),
    o = Math.max(a, Math.min(n, i - 1));
  if (r == null) {
    if (a === 0) return Cc(e, o + 1);
    let t = [],
      n = hc(e, a);
    for (let r = a; r <= o && n != null; r++) {
      let r = wc(e, n);
      (t.push(r), (n = bc(e, n)));
    }
    return t;
  }
  let s = [],
    c = 0,
    l = 0,
    u = q(r, `store.getVisibleSlice.selectFirstRow`, () => hc(e, a));
  for (let t = a; t <= o && u != null; t++) {
    let t = q(r, `store.getVisibleSlice.materializeRow`, () => wc(e, u));
    (s.push(t),
      t.isFlattened && (c++, (l += t.flattenedSegments?.length ?? 0)),
      (u = q(r, `store.getVisibleSlice.advanceCursor`, () => bc(e, u))));
  }
  return (
    va(r, `workload.visibleRowsRead`, s.length),
    va(r, `workload.flattenedRowsRead`, c),
    va(r, `workload.flattenedSegmentsRead`, l),
    s
  );
}
function uc(e, t = rc(e)) {
  let n = e.instrumentation;
  return n == null ? Sc(e, t) : q(n, `store.getVisibleTreeProjection`, () => Sc(e, t));
}
function dc(e) {
  return xc(uc(e));
}
function fc(e, t) {
  let n = ls(e, t);
  if (n == null || n === e.snapshot.rootId || (K(X(e, n)) && Zo(e, n) !== n)) return null;
  let r = 0,
    i = n,
    { nodes: a, rootId: o } = e.snapshot;
  for (; i !== o;) {
    let t = X(e, i).parentId,
      n = Y(e, t),
      s = Gi(n).get(i);
    if (s == null) throw Error(`Child ${String(i)} was not found in its parent index`);
    if (((r += Zi(a, n, s)), t !== o)) {
      let n = X(e, t),
        a = Xo(e, t);
      if (!mo(e, t, n) && a !== i) return null;
      Zo(e, t) === t && (r += 1);
    }
    i = t;
  }
  return r;
}
function pc(e, t) {
  let n = ls(e, t);
  if (n == null) throw Error(`Path does not exist: "${t}"`);
  let r = X(e, n);
  if (!K(r)) throw Error(`Path is not a directory: "${t}"`);
  return mo(e, n, r)
    ? null
    : (ho(e, n, !0, r),
      os(e, n),
      ko({ affectedAncestorIds: cs(e, n), affectedNodeIds: [n], path: t, projectionChanged: !0 }));
}
function mc(e, t) {
  let n = ls(e, t);
  if (n == null) throw Error(`Path does not exist: "${t}"`);
  let r = X(e, n);
  if (!K(r)) throw Error(`Path is not a directory: "${t}"`);
  return mo(e, n, r)
    ? (ho(e, n, !1, r),
      os(e, n),
      Ao({ affectedAncestorIds: cs(e, n), affectedNodeIds: [n], path: t, projectionChanged: !0 }))
    : null;
}
function hc(e, t) {
  return t < 0 || t >= rc(e) ? null : gc(e, e.snapshot.rootId, t, -1);
}
function gc(e, t, n, r) {
  let i = Y(e, t),
    a = e.instrumentation,
    { childIndex: o, localVisibleIndex: s } =
      a == null
        ? Xi(e.snapshot.nodes, i, n)
        : q(a, `store.getVisibleSlice.selectChildIndex`, () => Xi(e.snapshot.nodes, i, n)),
    c = i.childIds[o];
  if (c != null) return _c(e, c, s, r + 1);
  throw Error(`Visible index ${String(n)} is out of range`);
}
function _c(e, t, n, r) {
  if (!K(X(e, t))) {
    if (n === 0) return { headNodeId: t, terminalNodeId: t, visibleDepth: r };
    throw Error(`Visible index ${String(n)} is out of range for file`);
  }
  let i = vc(e, t, r);
  if (n === 0) return i;
  let a = X(e, i.terminalNodeId);
  if (!K(a) || !mo(e, i.terminalNodeId, a))
    throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);
  return gc(e, i.terminalNodeId, n - 1, i.visibleDepth);
}
function vc(e, t, n) {
  return K(X(e, t))
    ? e.instrumentation == null
      ? { headNodeId: t, terminalNodeId: Zo(e, t), visibleDepth: n }
      : {
          headNodeId: t,
          terminalNodeId: q(
            e.instrumentation,
            `store.getVisibleSlice.flatten.resolveTerminalDirectory`,
            () => Zo(e, t),
          ),
          visibleDepth: n,
        }
    : { headNodeId: t, terminalNodeId: t, visibleDepth: n };
}
function yc(e, t) {
  let n = X(e, t);
  if (!K(n)) return !0;
  let r = n.parentId;
  return r === e.snapshot.rootId ? !0 : Xo(e, r) !== t;
}
function bc(e, t) {
  let n = X(e, t.terminalNodeId);
  if (K(n)) {
    let r = Y(e, t.terminalNodeId);
    if (mo(e, t.terminalNodeId, n) && r.childIds.length > 0) {
      let n = r.childIds[0];
      return n == null ? null : _c(e, n, 0, t.visibleDepth + 1);
    }
  }
  let r = t.terminalNodeId,
    i = t.visibleDepth;
  for (;;) {
    let t = X(e, r);
    if (r === e.snapshot.rootId) return null;
    let n = t.parentId,
      a = Y(e, n),
      o = Gi(a).get(r) ?? -1;
    if (o < 0) throw Error(`Child ${String(r)} was not found in its parent index`);
    let s = a.childIds[o + 1] ?? null;
    if (s != null) return _c(e, s, 0, i);
    (yc(e, r) && i--, (r = n));
  }
}
function xc(e) {
  let t = e.paths.length,
    n = Array(t);
  for (let r = 0; r < t; r += 1) {
    let t = e.getParentIndex(r);
    n[r] = {
      index: r,
      parentPath: t >= 0 ? (e.paths[t] ?? null) : null,
      path: e.paths[r] ?? ``,
      posInSet: e.posInSetByIndex[r] ?? 0,
      setSize: e.setSizeByIndex[r] ?? 0,
    };
  }
  return {
    getParentIndex: e.getParentIndex,
    rows: n,
    get visibleIndexByPath() {
      return e.visibleIndexByPath;
    },
  };
}
function Sc(e, t) {
  let n = Array(t),
    r = new Int32Array(t),
    i = new Int32Array(t),
    a = new Int32Array(t),
    o = new Int32Array(Ec);
  o.fill(-1);
  let s = 0,
    { nodes: c, directories: l, segmentTable: u } = e.snapshot,
    d = [[l.get(e.snapshot.rootId), 0, -1, ``]],
    f = e.snapshot.options.flattenEmptyDirectories,
    p = e.pathCacheByNodeId,
    m = e.pathCacheVersion,
    h = u.valueById;
  for (; d.length > 0 && s < t;) {
    let t = d[d.length - 1],
      u = t[0];
    if (t[1] >= u.childIds.length) {
      d.pop();
      continue;
    }
    let g = t[1],
      _ = u.childIds[t[1]++],
      v = c[_],
      y = t[2] + 1,
      b = t[3];
    o = nc(o, y);
    let x,
      S = _;
    if (K(v)) ((S = f ? Zo(e, _) : _), (x = S === _ ? `${b}${h[v.nameId]}/` : J(e, S)));
    else {
      let e = p.get(_);
      x = e != null && e.version === m ? e.path : `${b}${h[v.nameId]}`;
    }
    ((r[s] = o[y]), (n[s] = x), (i[s] = g), (a[s] = u.childIds.length), (o[y + 1] = s), (s += 1));
    let C = c[S];
    C != null && K(C) && mo(e, S, C) && d.push([l.get(S), 0, y, x]);
  }
  s < t && (n.length = s);
  let g = r.subarray(0, s),
    _ = i.subarray(0, s),
    v = a.subarray(0, s),
    y = null;
  return {
    getParentIndex(e) {
      return e < 0 || e >= s ? -1 : (g[e] ?? -1);
    },
    paths: n,
    posInSetByIndex: _,
    setSizeByIndex: v,
    get visibleIndexByPath() {
      if (y == null) {
        y = new Map();
        for (let e = 0; e < s; e += 1) y.set(n[e] ?? ``, e);
      }
      return y;
    },
  };
}
function Cc(e, t) {
  let n = Array(t),
    r = 0,
    { nodes: i, directories: a, segmentTable: o } = e.snapshot,
    s = [[a.get(e.snapshot.rootId), 0, -1]],
    c = o.valueById,
    l = e.snapshot.options.flattenEmptyDirectories,
    u = e.pathCacheByNodeId,
    d = e.pathCacheVersion;
  for (; s.length > 0 && r < t;) {
    let t = s[s.length - 1],
      o = t[0];
    if (t[1] >= o.childIds.length) {
      s.pop();
      continue;
    }
    let f = o.childIds[t[1]++],
      p = i[f],
      m = t[2] + 1;
    if (!K(p)) {
      let t = u.get(f);
      n[r++] = {
        depth: m,
        flattenedSegments: void 0,
        hasChildren: !1,
        id: f,
        isExpanded: !1,
        isFlattened: !1,
        isLoading: !1,
        kind: `file`,
        loadState: void 0,
        name: c[p.nameId],
        path: t != null && t.version === d ? t.path : J(e, f),
      };
      continue;
    }
    let h = l ? Zo(e, f) : f,
      g = { headNodeId: f, terminalNodeId: h, visibleDepth: m };
    n[r++] = wc(e, g);
    let _ = i[h];
    _ != null && K(_) && mo(e, h, _) && s.push([a.get(h), 0, m]);
  }
  return (r < t && (n.length = r), n);
}
function wc(e, t) {
  let n = X(e, t.terminalNodeId),
    r = K(n) ? Tc(e, t) : null,
    i = J(e, t.terminalNodeId),
    a = Ha(e.snapshot.segmentTable, n.nameId),
    o = K(n) && Y(e, t.terminalNodeId).childIds.length > 0,
    s = t.headNodeId !== t.terminalNodeId,
    c = e.instrumentation,
    l = s
      ? c == null
        ? Qo(e, t.headNodeId).map((n) => {
            let r = X(e, n);
            return {
              isTerminal: n === t.terminalNodeId,
              name: Ha(e.snapshot.segmentTable, r.nameId),
              nodeId: n,
              path: J(e, n),
            };
          })
        : q(c, `store.getVisibleSlice.flatten.collectSegments`, () =>
            Qo(e, t.headNodeId).map((n) => {
              let r = X(e, n);
              return {
                isTerminal: n === t.terminalNodeId,
                name: Ha(e.snapshot.segmentTable, r.nameId),
                nodeId: n,
                path: J(e, n),
              };
            }),
          )
      : void 0;
  return {
    depth: t.visibleDepth,
    flattenedSegments: l,
    hasChildren: o,
    id: t.terminalNodeId,
    isExpanded: K(n) && mo(e, t.terminalNodeId, n),
    isFlattened: s,
    isLoading: r === `loading`,
    kind: K(n) ? `directory` : `file`,
    loadState: r == null || r === `loaded` ? void 0 : r,
    name: a,
    path: i,
  };
}
function Tc(e, t) {
  if (t.headNodeId === t.terminalNodeId) return _o(e, t.terminalNodeId);
  let n = Qo(e, t.headNodeId),
    r = !1,
    i = !1;
  for (let t of n) {
    let n = _o(e, t);
    if (n === `loading`) return `loading`;
    if (n === `error`) {
      i = !0;
      continue;
    }
    n === `unloaded` && (r = !0);
  }
  return i ? `error` : r ? `unloaded` : `loaded`;
}
var Ec,
  Dc = e(() => {
    (ra(), ha(), ba(), Wa(), wo(), Yo(), $o(), Is(), (Ec = 64));
  });
function Oc(e) {
  let {
      directories: t,
      nodes: n,
      options: r,
      rootId: i,
      presortedDirectoryNodeIds: a,
    } = e.snapshot,
    o = r.flattenEmptyDirectories === !0,
    s = (e) => {
      let r = n[e];
      if (r == null || !K(r)) return;
      let i = t.get(e);
      if (i == null) throw Error(`Unknown directory child index for node ${String(e)}`);
      let a = i.childIds,
        s = a.length,
        c = 0,
        l = 0;
      for (let e = 0; e < s; e++) {
        let t = a[e];
        if (t == null) continue;
        let r = n[t];
        ((c += r.subtreeNodeCount), (l += r.visibleSubtreeCount));
      }
      ((i.totalChildSubtreeNodeCount = c),
        (i.totalChildVisibleSubtreeCount = l),
        s >= 128 && Qi(n, i),
        (r.subtreeNodeCount = 1 + c));
      let u;
      if (o && s === 1) {
        let e = n[a[0]];
        u = e != null && K(e) ? l : 1 + l;
      } else u = 1 + l;
      r.visibleSubtreeCount = u;
    };
  if (a != null) for (let e = a.length - 1; e >= 0; e--) s(a[e]);
  else for (let e = n.length - 1; e >= 1; e--) s(e);
  let c = n[i],
    l = t.get(i);
  if (c == null || l == null) return;
  let u = l.childIds,
    d = 0,
    f = 0;
  for (let e = 0; e < u.length; e++) {
    let t = u[e];
    if (t == null) continue;
    let r = n[t];
    ((d += r.subtreeNodeCount), (f += r.visibleSubtreeCount));
  }
  ((l.totalChildSubtreeNodeCount = d),
    (l.totalChildVisibleSubtreeCount = f),
    Qi(n, l),
    (c.subtreeNodeCount = 1 + d),
    (c.visibleSubtreeCount = f));
}
function kc(e) {
  return (
    e.initialExpansion === `open` &&
    (e.initialExpandedPaths == null || e.initialExpandedPaths.length === 0)
  );
}
function Ac(e, t) {
  switch (t.type) {
    case `add`:
    case `remove`:
      if (!t.path.startsWith(e) || t.path === e)
        throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);
      break;
    case `move`:
      if (!t.from.startsWith(e) || !t.to.startsWith(e) || t.from === e || t.to === e)
        throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`);
      break;
  }
}
var jc,
  Mc = e(() => {
    (ra(),
      ha(),
      ba(),
      Na(),
      co(),
      wo(),
      Yo(),
      $o(),
      Is(),
      tc(),
      Dc(),
      (jc = class e {
        #e;
        constructor(e = {}) {
          let t = _a(e),
            n = q(t, `store.builder.create`, () => new so(e));
          if (e.preparedInput != null) {
            let t = ro(e.preparedInput);
            t == null
              ? n.appendPreparedPaths(no(e.preparedInput), !1)
              : n.appendPresortedPaths(t, io(e.preparedInput));
          } else {
            let r = e.paths ?? [];
            e.presorted === !0
              ? n.appendPaths(r)
              : n.appendPreparedPaths(q(t, `store.preparePathEntries`, () => ao(r, e)));
          }
          let r = q(t, `store.builder.finish`, () => n.finish({ skipSubtreeCountPass: !0 })),
            i = q(
              t,
              `store.state.detectAllDirectoriesExpanded`,
              () =>
                (e.initialExpansion ?? `closed`) === `closed` &&
                n.didMatchAllInitialExpandedPaths(),
            );
          ((this.#e = q(t, `store.state.create`, () =>
            lo(r, i ? `open` : (e.initialExpansion ?? `closed`), t),
          )),
            i && (this.#e.collapseNewDirectoriesByDefault = !0));
          let a = i
            ? this.#e.snapshot.directories.size - 1
            : q(t, `store.state.initializeExpandedPaths`, () =>
                this.initializeExpandedPaths(e.initialExpandedPaths),
              );
          i ||
          kc(e) ||
          ((e.initialExpansion ?? `closed`) === `closed` &&
            a === this.#e.snapshot.directories.size - 1) ||
          ((e.initialExpandedPaths?.length ?? 0) > 0 &&
            q(t, `store.state.checkAllDirectoriesExpanded`, () => this.hasAllDirectoriesExpanded()))
            ? q(t, `store.state.initializeOpenVisibleCounts`, () => Oc(this.#e))
            : q(t, `store.state.recomputeCounts`, () => ss(this.#e, this.#e.snapshot.rootId));
        }
        static preparePaths(e, t = {}) {
          return $a(e, t);
        }
        static prepareInput(e, t = {}) {
          return eo(e, t);
        }
        static preparePresortedInput(e) {
          return to(e);
        }
        list(e) {
          return q(this.#e.instrumentation, `store.list`, () => es(this.#e, e));
        }
        add(e) {
          q(this.#e.instrumentation, `store.add`, () => {
            let t = rc(this.#e);
            zo(this.#e, Lo(this.#e, t, ts(this.#e, e)));
          });
        }
        remove(e, t = {}) {
          q(this.#e.instrumentation, `store.remove`, () => {
            let n = rc(this.#e);
            zo(this.#e, Lo(this.#e, n, ns(this.#e, e, t)));
          });
        }
        move(e, t, n = {}) {
          q(this.#e.instrumentation, `store.move`, () => {
            let r = rc(this.#e),
              i = rs(this.#e, e, t, n);
            i != null && zo(this.#e, Lo(this.#e, r, i));
          });
        }
        batch(e) {
          Ro(this.#e, () => {
            if (typeof e == `function`) {
              e(this);
              return;
            }
            for (let t of e)
              switch (t.type) {
                case `add`:
                  this.add(t.path);
                  break;
                case `remove`:
                  this.remove(t.path, { recursive: t.recursive });
                  break;
                case `move`:
                  this.move(t.from, t.to, { collision: t.collision });
                  break;
              }
          });
        }
        getVisibleCount() {
          return q(this.#e.instrumentation, `store.getVisibleCount`, () => rc(this.#e));
        }
        getVisibleSlice(e, t) {
          return q(this.#e.instrumentation, `store.getVisibleSlice`, () => lc(this.#e, e, t));
        }
        getVisibleRowContext(e) {
          return q(this.#e.instrumentation, `store.getVisibleRowContext`, () => cc(this.#e, e));
        }
        getVisibleTreeProjection() {
          return dc(this.#e);
        }
        getVisibleTreeProjectionData(e) {
          return uc(this.#e, e);
        }
        getVisibleIndex(e) {
          return q(this.#e.instrumentation, `store.getVisibleIndex`, () => fc(this.#e, e));
        }
        getPathInfo(e) {
          return q(this.#e.instrumentation, `store.getPathInfo`, () => {
            let t = ls(this.#e, e);
            if (t == null) return null;
            let n = X(this.#e, t);
            return { depth: aa(n), kind: K(n) ? `directory` : `file`, path: J(this.#e, t) };
          });
        }
        isExpanded(e) {
          return q(this.#e.instrumentation, `store.isExpanded`, () => {
            let t = this.requireDirectoryNodeId(e),
              n = X(this.#e, t);
            return mo(this.#e, t, n);
          });
        }
        expand(e) {
          q(this.#e.instrumentation, `store.expand`, () => {
            let t = rc(this.#e),
              n = pc(this.#e, e);
            n != null && zo(this.#e, Lo(this.#e, t, n));
          });
        }
        collapse(e) {
          q(this.#e.instrumentation, `store.collapse`, () => {
            let t = rc(this.#e),
              n = mc(this.#e, e);
            n != null && zo(this.#e, Lo(this.#e, t, n));
          });
        }
        on(e, t) {
          return To(this.#e, e, t);
        }
        getDirectoryLoadState(e) {
          let t = this.requireDirectoryNodeId(e);
          return _o(this.#e, t);
        }
        markDirectoryUnloaded(e) {
          q(this.#e.instrumentation, `store.markDirectoryUnloaded`, () => {
            let t = this.requireDirectoryNodeId(e);
            if (Y(this.#e, t).childIds.length > 0)
              throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);
            let n = rc(this.#e);
            (yo(this.#e, t),
              zo(
                this.#e,
                Lo(
                  this.#e,
                  n,
                  jo({
                    affectedAncestorIds: cs(this.#e, t),
                    affectedNodeIds: [t],
                    path: e,
                    projectionChanged: this.isDirectoryProjectionVisible(t),
                  }),
                ),
              ));
          });
        }
        beginChildLoad(e) {
          return q(this.#e.instrumentation, `store.beginChildLoad`, () => {
            let t = this.requireDirectoryNodeId(e),
              n = rc(this.#e),
              r = vo(this.#e, t);
            return (
              zo(
                this.#e,
                Lo(
                  this.#e,
                  n,
                  Mo({
                    affectedAncestorIds: cs(this.#e, t),
                    affectedNodeIds: [t],
                    attemptId: r.attemptId,
                    path: e,
                    projectionChanged: this.isDirectoryProjectionVisible(t),
                    reused: r.reused,
                  }),
                ),
              ),
              r
            );
          });
        }
        applyChildPatch(e, t) {
          return q(this.#e.instrumentation, `store.applyChildPatch`, () => {
            let n = this.resolveActiveDirectoryNodeId(e.nodeId);
            if (n == null || _o(this.#e, n) !== `loading` || !xo(this.#e, n, e.attemptId))
              return !1;
            let r = J(this.#e, n);
            this.validateChildPatch(r, t);
            let i = rc(this.#e),
              a = [];
            for (let e of t.operations) {
              Ac(r, e);
              let t = rc(this.#e);
              switch (e.type) {
                case `add`:
                  a.push(Lo(this.#e, t, ts(this.#e, e.path)));
                  break;
                case `remove`:
                  a.push(Lo(this.#e, t, ns(this.#e, e.path, { recursive: e.recursive })));
                  break;
                case `move`: {
                  let n = rs(this.#e, e.from, e.to, { collision: e.collision });
                  n != null && a.push(Lo(this.#e, t, n));
                  break;
                }
              }
            }
            let o = a.some((e) => e.projectionChanged) || this.isDirectoryProjectionVisible(n);
            return (
              zo(
                this.#e,
                Lo(
                  this.#e,
                  i,
                  No({
                    affectedAncestorIds: cs(this.#e, n),
                    affectedNodeIds: [n],
                    attemptId: e.attemptId,
                    childEvents: a,
                    path: J(this.#e, n),
                    projectionChanged: o,
                  }),
                ),
              ),
              !0
            );
          });
        }
        completeChildLoad(e) {
          return q(this.#e.instrumentation, `store.completeChildLoad`, () => {
            let t = this.resolveActiveDirectoryNodeId(e.nodeId);
            if (t == null) return !1;
            let n = rc(this.#e),
              r = bo(this.#e, t, e.attemptId);
            return (
              zo(
                this.#e,
                Lo(
                  this.#e,
                  n,
                  Po({
                    affectedAncestorIds: cs(this.#e, t),
                    affectedNodeIds: [t],
                    attemptId: e.attemptId,
                    path: J(this.#e, t),
                    projectionChanged: this.isDirectoryProjectionVisible(t),
                    stale: !r,
                  }),
                ),
              ),
              r
            );
          });
        }
        failChildLoad(e, t) {
          return q(this.#e.instrumentation, `store.failChildLoad`, () => {
            let n = this.resolveActiveDirectoryNodeId(e.nodeId);
            if (n == null) return !1;
            let r = rc(this.#e),
              i = So(this.#e, n, e.attemptId, t);
            return (
              zo(
                this.#e,
                Lo(
                  this.#e,
                  r,
                  Fo({
                    affectedAncestorIds: cs(this.#e, n),
                    affectedNodeIds: [n],
                    attemptId: e.attemptId,
                    errorMessage: t,
                    path: J(this.#e, n),
                    projectionChanged: this.isDirectoryProjectionVisible(n),
                    stale: !i,
                  }),
                ),
              ),
              i
            );
          });
        }
        cleanup(e = {}) {
          return q(this.#e.instrumentation, `store.cleanup`, () => {
            if (this.#e.transactionStack.length > 0)
              throw Error(`Cleanup cannot run during an open batch or transaction.`);
            if ($s(this.#e)) throw Error(`Cleanup cannot run while directory loads are active.`);
            let t = rc(this.#e),
              n = ec(this.#e, e.mode ?? `stable`);
            return (
              zo(
                this.#e,
                Lo(
                  this.#e,
                  t,
                  Io({
                    ...n,
                    affectedAncestorIds: [],
                    affectedNodeIds: [],
                    projectionChanged: n.idsPreserved === !1,
                  }),
                ),
              ),
              n
            );
          });
        }
        getNodeCount() {
          return this.#e.activeNodeCount;
        }
        initializeExpandedPaths(e) {
          if (e == null || e.length === 0) return 0;
          let t = 0,
            n = [],
            r = [],
            i = 0,
            a = null,
            o = this.#e.snapshot.segmentTable,
            s = o.valueById,
            c = this.#e.snapshot.nodes,
            l = new Map();
          for (let u of e) {
            a != null && u < a && ((a = null), (i = 0), (n.length = 0), (r.length = 0));
            let e = u.length > 0 && u.charCodeAt(u.length - 1) === 47 ? u.length - 1 : u.length;
            if (e === 0) {
              ((a = u), (i = e), (n.length = 0), (r.length = 0));
              continue;
            }
            let d = 0,
              f = 0;
            if (a != null) {
              let t = Math.min(e, i),
                n = !0;
              for (let e = 0; e < t; e += 1) {
                let t = u.charCodeAt(e);
                if (t !== a.charCodeAt(e)) {
                  n = !1;
                  break;
                }
                t === 47 && ((d += 1), (f = e + 1));
              }
              (n &&
                (t === i && e > t && u.charCodeAt(t) === 47
                  ? ((d += 1), (f = t + 1))
                  : t === e && i > t && a.charCodeAt(t) === 47 && ((d += 1), (f = e + 1))),
                (d = Math.min(d, r.length)));
            }
            let p = d === 0 ? this.#e.snapshot.rootId : (r[d - 1] ?? this.#e.snapshot.rootId),
              m = d,
              h = !0,
              g = f;
            for (; g <= e;) {
              let t = u.indexOf(`/`, g),
                i = t === -1 || t > e ? e : t,
                a = u.slice(g, i),
                f = Y(this.#e, p).childIds,
                _ = m === d ? (n[m] ?? 0) : 0,
                v = _,
                y,
                b = l.get(a) ?? Ca(a);
              l.set(a, b);
              let x = (e, t) => {
                for (v = e; v < t; v += 1) {
                  let e = f[v],
                    t = c[e],
                    n = s[t.nameId];
                  if (n === a) return ((y = e), !0);
                  let r = Ta(Ma(o, t.nameId), b);
                  if (r > 0 || (r === 0 && n > a)) return !1;
                }
                return !1;
              };
              if ((!x(_, f.length) && _ > 0 && x(0, _), y === void 0)) {
                h = !1;
                break;
              }
              if (!K(X(this.#e, y))) {
                h = !1;
                break;
              }
              if (((n[m] = v), (r[m] = y), (p = y), (m += 1), i === e)) break;
              g = i + 1;
            }
            if (((a = u), (i = e), (n.length = m), (r.length = m), !h)) {
              ((a = null), (i = 0), (n.length = 0), (r.length = 0));
              continue;
            }
            for (let e = d; e < m; e += 1) {
              let n = r[e];
              if (n == null) continue;
              let i = X(this.#e, n);
              mo(this.#e, n, i) || (ho(this.#e, n, !0, i), (t += 1));
            }
          }
          return t;
        }
        hasAllDirectoriesExpanded() {
          for (let e of this.#e.snapshot.directories.keys()) {
            if (e === this.#e.snapshot.rootId) continue;
            let t = X(this.#e, e);
            if (!mo(this.#e, e, t)) return !1;
          }
          return !0;
        }
        requireDirectoryNodeId(e) {
          let t = ls(this.#e, e);
          if (t == null) throw Error(`Path does not exist: "${e}"`);
          if (!K(X(this.#e, t))) throw Error(`Path is not a directory: "${e}"`);
          return t;
        }
        resolveActiveDirectoryNodeId(e) {
          try {
            if (!K(X(this.#e, e))) throw Error(`Node is not a directory: ${String(e)}`);
            return e;
          } catch {
            return null;
          }
        }
        isDirectoryProjectionVisible(e) {
          let t = e;
          for (; t !== this.#e.snapshot.rootId;) {
            let e = X(this.#e, t).parentId;
            if (e !== this.#e.snapshot.rootId) {
              let n = X(this.#e, e),
                r = Xo(this.#e, e);
              if (!mo(this.#e, e, n) && r !== t) return !1;
            }
            t = e;
          }
          return !0;
        }
        validateChildPatch(t, n) {
          new e({ paths: this.list(t), presorted: !0, sort: this.#e.snapshot.options.sort }).batch(
            n.operations,
          );
        }
      }));
  });
function Nc(e, t) {
  if (typeof e == `number`) return { itemHeight: t ?? Pc.default.itemHeight, factor: e };
  let n = Pc[e ?? `default`];
  return { itemHeight: t ?? n.itemHeight, factor: n.factor };
}
var Pc,
  Fc = e(() => {
    Pc = {
      compact: { itemHeight: 24, factor: 0.8 },
      default: { itemHeight: 30, factor: 1 },
      relaxed: { itemHeight: 36, factor: 1.2 },
    };
  }),
  Ic,
  Lc = e(() => {
    (Fc(), (Ic = Pc.default.itemHeight));
  }),
  Rc,
  zc = e(() => {
    Rc = `@layer base, theme, unsafe;

@layer base {
  :host {
    /*
      CSS variables use a fallback stack to ensure user and theme colors slot
      in with ease. User colors take precedence over theme colors, which take
      precedence over defaults.

      Fallback order:

      1. --trees-*-override (explicit)
      2. --trees-theme-* (e.g. Shiki/VS Code tokens)
      3. defaults

      Theme variable names mirror Shiki/VS Code theme file JSON tokens.

      // Available CSS Color Overrides
      --trees-fg-override
      --trees-fg-muted-override
      --trees-bg-override
      --trees-bg-muted-override
      --trees-accent-override
      --trees-border-color-override

      --trees-focus-ring-color-override
      --trees-focus-ring-width-override
      --trees-focus-ring-offset-override

      --trees-search-fg-override
      --trees-search-font-weight-override
      --trees-search-bg-override

      --trees-selected-fg-override
      --trees-selected-bg-override
      --trees-selected-focused-border-color-override

      // Git Status Color Overrides
      --trees-status-added-override
      --trees-status-ignored-override
      --trees-status-modified-override
      --trees-status-renamed-override
      --trees-status-untracked-override
      --trees-status-deleted-override
      --trees-git-added-color-override
      --trees-git-ignored-color-override
      --trees-git-modified-color-override
      --trees-git-renamed-color-override
      --trees-git-untracked-color-override
      --trees-git-deleted-color-override

      // Built-in File Icon Color Overrides
      --trees-file-icon-color
      --trees-file-icon-color-astro
      --trees-file-icon-color-babel
      --trees-file-icon-color-bash
      --trees-file-icon-color-biome
      --trees-file-icon-color-bootstrap
      --trees-file-icon-color-browserslist
      --trees-file-icon-color-bun
      --trees-file-icon-color-c
      --trees-file-icon-color-cpp
      --trees-file-icon-color-claude
      --trees-file-icon-color-css
      --trees-file-icon-color-database
      --trees-file-icon-color-default
      --trees-file-icon-color-docker
      --trees-file-icon-color-eslint
      --trees-file-icon-color-git
      --trees-file-icon-color-go
      --trees-file-icon-color-graphql
      --trees-file-icon-color-html
      --trees-file-icon-color-image
      --trees-file-icon-color-javascript
      --trees-file-icon-color-json
      --trees-file-icon-color-markdown
      --trees-file-icon-color-mcp
      --trees-file-icon-color-npm
      --trees-file-icon-color-oxc
      --trees-file-icon-color-postcss
      --trees-file-icon-color-prettier
      --trees-file-icon-color-python
      --trees-file-icon-color-react
      --trees-file-icon-color-ruby
      --trees-file-icon-color-rust
      --trees-file-icon-color-sass
      --trees-file-icon-color-svg
      --trees-file-icon-color-svelte
      --trees-file-icon-color-svgo
      --trees-file-icon-color-swift
      --trees-file-icon-color-table
      --trees-file-icon-color-text
      --trees-file-icon-color-tailwind
      --trees-file-icon-color-terraform
      --trees-file-icon-color-typescript
      --trees-file-icon-color-vite
      --trees-file-icon-color-vscode
      --trees-file-icon-color-vue
      --trees-file-icon-color-wasm
      --trees-file-icon-color-webpack
      --trees-file-icon-color-yml
      --trees-file-icon-color-zig
      --trees-file-icon-color-zip

      // Density
      //
      // A unitless scale factor for padding, gaps, and indentation. Usually
      // set via \`density\` on useFileTree. Individual overrides take precedence.
      //
      //   Compact: 0.8
      //   Default: 1
      //   Relaxed: 1.2
      //
      --trees-density-override

      // Available CSS Layout Overrides
      --trees-gap-override
      --trees-border-radius-override
      --trees-font-family-override
      --trees-font-size-override
      --trees-font-weight-regular-override
      --trees-font-weight-semibold-override
      --trees-level-gap-override
      --trees-item-padding-x-override
      --trees-item-margin-x-override
      --trees-item-row-gap-override
      --trees-icon-width-override
      --trees-icon-nudge-override
      --trees-scrollbar-gutter-override
      --trees-padding-inline-override
    */

    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(
      --trees-fg-override,
      var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1))
    );
    --trees-fg-muted: var(
      --trees-fg-muted-override,
      var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a))
    );
    --trees-bg: var(
      --trees-bg-override,
      var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415))
    );
    /* var(--trees-theme-list-hover-bg, light-dark(#dfebff59, #19283c59)) */
    --trees-bg-muted: var(
      --trees-bg-muted-override,
      var(
        --trees-theme-list-hover-bg,
        light-dark(
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)
          ),
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)
          )
        )
      )
    );
    --trees-input-bg: var(
      --trees-input-bg-override,
      light-dark(#f8f8f8, #070707)
    );

    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;

    --trees-border-color: var(
      --trees-border-color-override,
      var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707))
    );
    --trees-indent-guide-bg: var(
      --trees-indent-guide-bg-override,
      color-mix(in lab, var(--trees-fg-muted) 25%, transparent)
    );
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(
      --trees-border-radius-override,
      calc(6px * var(--trees-density))
    );

    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(
      --trees-font-weight-semibold-override,
      600
    );

    --trees-focus-ring-color: var(
      --trees-focus-ring-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);

    --trees-search-fg: var(
      --trees-search-fg-override,
      var(--trees-theme-input-fg, var(--trees-fg))
    );
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(
      --trees-search-bg-override,
      var(--trees-theme-input-bg, var(--trees-input-bg))
    );

    --trees-scrollbar-thumb: var(
      --trees-scrollbar-thumb-override,
      var(
        --trees-theme-scrollbar-thumb,
        color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))
      )
    );

    --trees-selected-fg: var(
      --trees-selected-fg-override,
      var(--trees-theme-list-active-selection-fg, var(--trees-fg))
    );
    --trees-selected-bg: var(
      --trees-selected-bg-override,
      var(
        --trees-theme-list-active-selection-bg,
        light-dark(
          color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)),
          color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg))
        )
      )
    );
    --trees-selected-focused-border-color: var(
      --trees-selected-focused-border-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );

    /* Git status (e.g. from Shiki theme gitDecoration.*) */
    --trees-status-added: var(
      --trees-status-added-override,
      var(
        --trees-theme-git-added-fg,
        light-dark(var(--trees-added-light), var(--trees-added-dark))
      )
    );
    --trees-status-ignored: var(
      --trees-status-ignored-override,
      var(
        --trees-theme-git-ignored-fg,
        light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))
      )
    );
    --trees-status-modified: var(
      --trees-status-modified-override,
      var(
        --trees-theme-git-modified-fg,
        light-dark(var(--trees-modified-light), var(--trees-modified-dark))
      )
    );
    --trees-status-renamed: var(
      --trees-status-renamed-override,
      var(
        --trees-theme-git-renamed-fg,
        light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))
      )
    );
    --trees-status-untracked: var(
      --trees-status-untracked-override,
      var(
        --trees-theme-git-untracked-fg,
        light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))
      )
    );
    --trees-status-deleted: var(
      --trees-status-deleted-override,
      var(
        --trees-theme-git-deleted-fg,
        light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))
      )
    );
    --trees-git-modified-color: var(
      --trees-git-modified-color-override,
      var(--trees-status-modified)
    );
    --trees-git-added-color: var(
      --trees-git-added-color-override,
      var(--trees-status-added)
    );
    --trees-git-ignored-color: var(
      --trees-git-ignored-color-override,
      var(--trees-status-ignored)
    );
    --trees-git-deleted-color: var(
      --trees-git-deleted-color-override,
      var(--trees-status-deleted)
    );
    --trees-git-renamed-color: var(
      --trees-git-renamed-color-override,
      var(--trees-status-renamed)
    );
    --trees-git-untracked-color: var(
      --trees-git-untracked-color-override,
      var(--trees-status-untracked)
    );

    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);

    --trees-file-icon-color-default: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-astro: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-babel: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bash: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-biome: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-bootstrap: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-browserslist: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bun: var(
      --trees-file-icon-color,
      var(--trees-icon-mauve)
    );
    --trees-file-icon-color-c: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-cpp: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-claude: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-css: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-database: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-docker: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-eslint: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-git: var(
      --trees-file-icon-vermilion,
      var(--trees-icon-vermilion)
    );
    --trees-file-icon-color-go: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-graphql: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-html: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-image: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-javascript: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-json: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-markdown: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-mcp: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-npm: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-oxc: var(
      --trees-file-icon-cyan,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-postcss: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-prettier: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-python: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-react: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-ruby: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-rust: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-sass: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-svg: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-svelte: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-svgo: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-swift: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-table: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-text: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-tailwind: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-terraform: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-typescript: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vite: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-vscode: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vue: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-wasm: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-webpack: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-yml: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-zig: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-zip: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );

    --trees-level-gap: var(
      --trees-level-gap-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-padding-x: var(
      --trees-item-padding-x-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-margin-x: var(
      --trees-item-margin-x-override,
      calc(2px * var(--trees-density))
    );
    --trees-item-row-gap: var(
      --trees-item-row-gap-override,
      calc(6px * var(--trees-density))
    );
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(
      --trees-icon-nudge-override,
      calc(1px * var(--trees-density))
    );
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(
      --trees-action-lane-width-override,
      calc(var(--trees-icon-width) + 2px)
    );
    /* Keep the floating trigger aligned with the row's action lane. Going in
       from the root's right edge: the scroll container reserves
       \`--trees-padding-inline\` of effective inset on each side (its asymmetric
       padding formula cancels the scrollbar gutter on the right), the row
       sits inside that inset, and its trailing \`--trees-item-padding-x\` is the
       action lane itself. The trigger's own focus-ring margin then trims one
       pixel back so the button's visible right edge lines up with the lane. */
    --trees-context-menu-trigger-inline-offset: calc(
      var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width)
    );

    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);

    color-scheme: light dark;
    display: flex;
    flex-direction: column;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
  }

  :host([data-file-tree-virtualized='true']) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper='true'] {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  [data-file-tree-virtualized-root='true'] {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll='true'],
  [data-file-tree-scrollbar-measure='true'] {
    --trees-scrollbar-thumb-current: transparent;
    overflow-y: auto;
    scrollbar-gutter: stable;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border: 1px solid transparent;
      background-clip: content-box;
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  /* These are styles for a temporarily generated element to measure the size
   * of the scrollbar.  It's intended to be somewhat similar in scrollbar style
   * scope to the scrollable tree so \`--trees-scrollbar-gutter-measured\` is an
   * accurate reflection of the size the scrollbar gutter takes up. */
  [data-file-tree-scrollbar-measure='true'] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'],
    [data-file-tree-scrollbar-measure='true'] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll='true'] {
    position: relative;
    overflow-y: auto;
    flex: 1 1 0;
    min-height: 0;
    padding-inline: max(
        calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px
      )
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(
        calc(
          var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(
              --trees-scrollbar-gutter-measured,
              var(--trees-scrollbar-gutter)
            )
        ),
        0px
      );
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'] {
      padding-inline: max(
          calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px
        )
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(
          calc(
            var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)
          ),
          0px
        );
    }
  }

  [data-file-tree-sticky-overlay='true'] {
    position: sticky;
    top: 0;
    height: 0;
    z-index: 4;
    overflow: visible;
    pointer-events: none;
  }

  /* The overlay DOM is kept populated even at scrollTop=0 so the browser has
   * the rendered rows on hand the moment scrolling begins — otherwise the
   * compositor paints a scrolled frame before React can mount the overlay,
   * and the topmost sticky folder jumps up by a couple of pixels before it
   * "snaps" into its pinned position. We hide it via CSS whenever the scroll
   * is at the top and no scroll is in progress, so the preview doesn't leak
   * through at rest. \`data-overlay-reveal\` is stamped on the root only when
   * the user initiates a scroll while already at the top — exactly the case
   * where we need the pre-mounted overlay to be visible through the first
   * compositor frame. It is deliberately distinct from the general
   * \`data-is-scrolling\` flag so a scroll that ends at the top (e.g. ArrowUp
   * navigation) re-hides the overlay the instant the scroll lands, rather
   * than waiting for the hover-suppression timer to elapse. */
  [data-file-tree-virtualized-root='true'][data-scroll-at-top='true']:not(
      [data-overlay-reveal]
    )
    [data-file-tree-sticky-overlay='true'] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content='true'] {
    background-color: var(--trees-bg);
    position: relative;
    pointer-events: none;
  }

  [data-file-tree-virtualized-list='true'] {
    background-color: var(--trees-bg);
    position: relative;
    min-height: 100%;
    width: 100%;
    overflow-anchor: none;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset='true'] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky='true'] {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    /* Promote to its own compositor layer so text inside the window is
     * rasterized once and GPU-translated during scroll. Without this, the
     * browser re-paints the window (and its text) at every scroll frame,
     * which produces visible 1px shake / character tearing. */
    will-change: transform;
  }

  [data-file-tree-search-container] {
    display: flex;
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    flex: 1;
    height: var(--trees-row-height);
    /* 1px breathing room so the focus-visible outline isn't clipped when the
     * input sits flush against the top of the scroll container. */
    margin-block: 1px;
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;

    &::placeholder {
      color: color-mix(
        in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg)
      );
    }

    &:focus-visible,
    &[data-file-tree-search-input-fake-focus='true'] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  /* The wrapper for the tree items */
  [role='tree'] {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--trees-gap-override, 0);
  }

  /* LIST ITEM */
  [data-type='item'] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    outline: none;
    background-color: var(--trees-bg);
    border: none;
    position: relative;

    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    -webkit-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    display: flex;
    flex: 0 0 var(--trees-row-height);
    align-items: center;
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    /* Row states may be translucent, so markers paint the tree background first
     * and then the state color on top to avoid compositing the same alpha twice. */
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;

    &:hover,
    &[data-item-context-hover='true'] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused='true'],
    &:focus-visible {
      z-index: 2;

      /* Flattened segment markers sit high enough to cover the row outline unless
       * their painted background is inset by the focus ring width. */
      [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &::before {
        position: absolute;
        inset: 0;
        content: '';
        display: block;
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
      }

      &[data-item-selected='true']::before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected='true'] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      [data-item-section='icon'] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match='true'] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: auto;
  }

  /* Sticky rows opt back into pointer events because the overlay wrapper is
   * inert. During scroll, put them back under the same hover suppression as
   * the virtualized list so translucent hover states and menu triggers do not
   * paint over rows moving beneath the sticky stack. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true']:hover:not(
      [data-item-selected='true']
    ),
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'][data-item-context-hover='true']:not(
      [data-item-selected='true']
    ) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected='true']:has(+ [data-item-selected='true']) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  [data-item-selected='true'] + [data-item-selected='true'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* Flattened Directory Parts */
  [data-item-flattened-subitems] {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  [data-item-flattened-subitem]:hover,
  [data-item-flattened-subitem-drag-target='true'] {
    text-decoration: underline;
  }

  /* Icon for each item */
  [data-item-section='icon'] {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
  }

  :where([data-item-section='icon'] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons='true'] {
    [data-icon-token='astro'] {
      color: var(--trees-file-icon-color-astro);
    }
    [data-icon-token='babel'] {
      color: var(--trees-file-icon-color-babel);
    }
    [data-icon-token='bash'] {
      color: var(--trees-file-icon-color-bash);
    }
    [data-icon-token='biome'] {
      color: var(--trees-file-icon-color-biome);
    }
    [data-icon-token='bootstrap'] {
      color: var(--trees-file-icon-color-bootstrap);
    }
    [data-icon-token='browserslist'] {
      color: var(--trees-file-icon-color-browserslist);
    }
    [data-icon-token='bun'] {
      color: var(--trees-file-icon-color-bun);
    }
    [data-icon-token='c'] {
      color: var(--trees-file-icon-color-c);
    }
    [data-icon-token='cpp'] {
      color: var(--trees-file-icon-color-cpp);
    }
    [data-icon-token='claude'] {
      color: var(--trees-file-icon-color-claude);
    }
    [data-icon-token='css'] {
      color: var(--trees-file-icon-color-css);
    }
    [data-icon-token='database'] {
      color: var(--trees-file-icon-color-database);
    }
    [data-icon-token='default'] {
      color: var(--trees-file-icon-color-default);
    }
    [data-icon-token='docker'] {
      color: var(--trees-file-icon-color-docker);
    }
    [data-icon-token='eslint'] {
      color: var(--trees-file-icon-color-eslint);
    }
    [data-icon-token='git'] {
      color: var(--trees-file-icon-color-git);
    }
    [data-icon-token='go'] {
      color: var(--trees-file-icon-color-go);
    }
    [data-icon-token='graphql'] {
      color: var(--trees-file-icon-color-graphql);
    }
    [data-icon-token='html'] {
      color: var(--trees-file-icon-color-html);
    }
    [data-icon-token='image'] {
      color: var(--trees-file-icon-color-image);
    }
    [data-icon-token='javascript'] {
      color: var(--trees-file-icon-color-javascript);
    }
    [data-icon-token='json'] {
      color: var(--trees-file-icon-color-json);
    }
    [data-icon-token='markdown'] {
      color: var(--trees-file-icon-color-markdown);
    }
    [data-icon-token='mcp'] {
      color: var(--trees-file-icon-color-mcp);
    }
    [data-icon-token='npm'] {
      color: var(--trees-file-icon-color-npm);
    }
    [data-icon-token='oxc'] {
      color: var(--trees-file-icon-color-oxc);
    }
    [data-icon-token='postcss'] {
      color: var(--trees-file-icon-color-postcss);
    }
    [data-icon-token='prettier'] {
      color: var(--trees-file-icon-color-prettier);
    }
    [data-icon-token='python'] {
      color: var(--trees-file-icon-color-python);
    }
    [data-icon-token='react'] {
      color: var(--trees-file-icon-color-react);
    }
    [data-icon-token='ruby'] {
      color: var(--trees-file-icon-color-ruby);
    }
    [data-icon-token='rust'] {
      color: var(--trees-file-icon-color-rust);
    }
    [data-icon-token='sass'] {
      color: var(--trees-file-icon-color-sass);
    }
    [data-icon-token='svg'] {
      color: var(--trees-file-icon-color-svg);
    }
    [data-icon-token='svelte'] {
      color: var(--trees-file-icon-color-svelte);
    }
    [data-icon-token='svgo'] {
      color: var(--trees-file-icon-color-svgo);
    }
    [data-icon-token='swift'] {
      color: var(--trees-file-icon-color-swift);
    }
    [data-icon-token='table'] {
      color: var(--trees-file-icon-color-table);
    }
    [data-icon-token='text'] {
      color: var(--trees-file-icon-color-text);
    }
    [data-icon-token='tailwind'] {
      color: var(--trees-file-icon-color-tailwind);
    }
    [data-icon-token='terraform'] {
      color: var(--trees-file-icon-color-terraform);
    }
    [data-icon-token='typescript'] {
      color: var(--trees-file-icon-color-typescript);
    }
    [data-icon-token='vite'] {
      color: var(--trees-file-icon-color-vite);
    }
    [data-icon-token='vscode'] {
      color: var(--trees-file-icon-color-vscode);
    }
    [data-icon-token='vue'] {
      color: var(--trees-file-icon-color-vue);
    }
    [data-icon-token='wasm'] {
      color: var(--trees-file-icon-color-wasm);
    }
    [data-icon-token='webpack'] {
      color: var(--trees-file-icon-color-webpack);
    }
    [data-icon-token='yml'] {
      color: var(--trees-file-icon-color-yml);
    }
    [data-icon-token='zig'] {
      color: var(--trees-file-icon-color-zig);
    }
    [data-icon-token='zip'] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  /* Chevron rotation and visual alignment */
  /* Chevron pointing down */
  [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='false'] {
      transform: translate(0, var(--trees-icon-nudge));
    }
    &[data-align-capitals='true'] {
      transform: translate(0, 0);
    }
  }

  [data-item-section='content'] {
    flex: 0 1 auto;
    text-align: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Breaks middle truncate component to also set this */
    /* white-space: nowrap; */
  }

  [data-item-section='decoration'] {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    justify-content: flex-end;
    text-align: end;
    overflow: hidden;
    color: var(--trees-fg-muted);
  }

  [data-item-section='decoration'] > span {
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-item-section='git'],
  [data-item-section='action'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-section='git'] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section='action'] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section='git'] > span,
  [data-item-section='action'] > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-action-affordance='decorative'] {
    opacity: 0.85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    /* line-height: calc(var(--trees-row-height) - 8px); */
    color: inherit;
    background-color: transparent;
    border: 0;
    padding-inline: 6px;
    outline: none;
    box-sizing: border-box;
  }

  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='action'],
  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='decoration'] {
    display: none;
  }

  /* Chevron pointing right */
  [aria-expanded='false'][data-item-type='folder']
    > [data-item-section='icon']
    > [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='true'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
    &[data-align-capitals='false'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
  }

  /* LIST IDENTATION */
  /* Spacing container */
  [data-item-section='spacing'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - 0.5px);

    &:empty {
      padding-left: 0;
    }
  }

  /* Spacing per level */
  [data-item-section='spacing-item'] {
    transform: translateX(-0.25px);
    display: inline-block;
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity 150ms ease;

    & + & {
      margin-left: calc(
        var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - 0.5px
      );
    }
  }

  :host(:hover) [data-item-section='spacing-item'] {
    opacity: 0.75;
  }

  /* Git status indicator */

  /* This is a folder that contains a git change */
  [data-item-contains-git-change='true'] > [data-item-section='git'] {
    color: var(--trees-git-modified-color);
    opacity: 0.5;
    fill: currentColor;
  }

  /* These are files that have a git change */
  [data-item-git-status] {
    &
      > :where([data-item-section='icon'])
      > :where(:not([data-icon-name='file-tree-icon-chevron'])) {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='content'] {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='git'] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status='added'] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status='deleted'] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status='ignored'] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section='icon'] {
      opacity: 0.5;
    }
  }

  [data-item-section='git'] [data-icon-name='file-tree-icon-dot'] {
    /* this is a nudge to align the dot with the likely lowercase text. it's slightly
    generalizable, but other fonts are gonna need other nudges i assume */
    transform: translateY(calc(0.65ex - 50%));
  }

  [data-item-git-status='modified'] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status='renamed'] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status='untracked'] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  /* Drag and drop */
  [data-item-drag-target='true'] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging='true'] {
    opacity: 0.5;
  }

  /* Lock icon for locked paths (sibling of content) */
  [data-item-section='lock'] {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    color: var(--trees-fg-muted);
  }
  [data-item-section='lock'] svg {
    display: block;
  }

  [data-type='header-slot'] {
    display: block;
    flex: 0 0 auto;
  }

  [data-type='context-menu-wash'] {
    position: absolute;
    inset: 0;
    z-index: 3;
    background-color: transparent;
    touch-action: none;
  }

  [data-type='context-menu-anchor'] {
    position: absolute;
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    display: none;
    align-items: center;

    &[data-visible='true'] {
      display: flex;
    }
  }

  /* Hide the floating trigger while the scroll container is actively moving.
   * The anchor is positioned against the root, not the scroll content, so its
   * \`top\` follows the row via a React state update — one frame behind the
   * compositor. That delay is visible as the trigger hovering over the wrong
   * row during the first frame of a scroll. The \`data-is-scrolling\` flag on
   * the root is flipped synchronously on \`wheel\`/\`touchmove\`/\`keydown\` before
   * the compositor commits the next paint, so this selector hides the anchor
   * in the same frame the scroll begins. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='context-menu-anchor'] {
    display: none;
  }

  [data-type='context-menu-anchor'] > slot[name='context-menu'] {
    display: block;
    width: 0;
    min-width: 0;
    flex: 0 0 0;
    overflow: visible;
  }

  /* Single floating context menu trigger */
  [data-type='context-menu-trigger'] {
    all: unset;
    align-items: center;
    justify-content: center;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    transition: color 120ms ease;

    display: flex;
  }

  [data-type='context-menu-trigger']:hover,
  [data-type='context-menu-trigger'][aria-expanded='true'] {
    color: var(--trees-fg);
  }

  /** @pierre/truncate css here, manually copy pasted for now */
  [data-truncate-container] {
    /* CUSTOM TO TREES, TO SUPPORT THE OUTLINE */
    margin-top: -1px;
    margin-bottom: -1px;

    /* Width of the fade from default marker to text */
    --truncate-internal-marker-fade-width: var(
      --truncate-marker-fade-width,
      2px
    );
    /* Width of the solid color between the fade from the default marker to the text */
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    /* Opacity of the marker 'color' property, not of the element itself */
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    /* Opacity of the marker 'color' property specifically for the middle truncate, not opacity of the element itself */
    --truncate-internal-middle-marker-opacity: var(
      --truncate-middle-marker-opacity,
      80%
    );
    /* Background color of the default marker */
    --truncate-internal-marker-background-color: var(
      --truncate-marker-background-color,
      light-dark(white, black)
    );
    --truncate-internal-marker-background-overlay-color: var(
      --truncate-marker-background-overlay-color,
      transparent
    );
    --truncate-internal-marker-block-inset: var(
      --truncate-marker-block-inset,
      0px
    );
    /* Duration of the fade out animation for the marker */
    --truncate-internal-marker-fade-out-duration: var(
      --truncate-marker-fade-out-duration,
      0ms
    );
    /* Duration of the fade in animation for the marker */
    --truncate-internal-marker-fade-in-duration: var(
      --truncate-marker-fade-in-duration,
      100ms
    );

    /* FADE Variant specifics */
    --truncate-internal-fade-marker-color: var(
      --truncate-fade-marker-color,
      #000
    );
    --truncate-internal-fade-marker-width: var(
      --truncate-fade-marker-width,
      0.2lh
    );

    /*
    In some special cases people might be adding spacing in other ways
    that would benefit from being able to override this, however the container
    query below can't use this and would need to be redeclared with the overridden
    value. It's a bad time, but better than nothing.
    */
    --truncate-internal-single-line-height: 1lh;

    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    overflow: hidden;
  }

  [data-truncate-marker] {
    display: flex;
    position: absolute;
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    align-items: center;
    background-clip: content-box;
    z-index: 2;
    color: color-mix(
      in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent
    );

    /* Core trick for hiding the marker until overflow occurs */
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content='visible'] {
    white-space: nowrap;
  }

  [data-truncate-content='overflow'] {
    opacity: 0;
    pointer-events: none;
    -webkit-user-select: none;
            user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    container: measure / size;
    overflow: visible;
    -webkit-user-select: none;
            user-select: none;
    pointer-events: none;
  }

  [data-truncate-container='truncate'] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }
    & [data-truncate-marker] {
      right: 0;
    }
    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container='fruncate'] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }
    & [data-truncate-content] {
      direction: rtl;
    }
    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }
    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant='default'] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
    }
    & [data-truncate-marker]::after,
    & [data-truncate-marker]::before {
      content: '';
      position: absolute;
      width: calc(
        var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap)
      );
      inset-block-start: var(--truncate-internal-marker-block-inset);
      height: max(
        0px,
        calc(
          var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2
        )
      );
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
      mask-image: linear-gradient(
        var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%
      );
    }
    & [data-truncate-marker]::after {
      --truncate-internal-fade-dir: to right;
      right: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
    & [data-truncate-marker]::before {
      --truncate-internal-fade-dir: to left;
      left: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
  }

  [data-truncate-variant='fade'] {
    & [data-truncate-marker] {
      background: transparent;
    }
  }

  [data-truncate-fade] {
    box-shadow:
      0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(
      var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2)
    );
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container='middle'] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    display: flex;
    min-width: 0;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority='1'] {
      flex: 0 1 max-content;
    }
    & > div[data-truncate-segment-priority='2'] {
      flex: 0 999999 max-content;
    }
  }
}
`;
  });
function Bc(e) {
  return `${Hc}
@layer base {
  ${e}
}`;
}
function Vc(e) {
  return `${Hc}
@layer unsafe {
  ${e}
}`;
}
var Hc,
  Uc = e(() => {
    Hc = `@layer base, unsafe;`;
  });
function Wc(e) {
  let t = Kc.get(e);
  if (t != null) return t;
  let n = document.createElement(`div`);
  n.setAttribute(Ei, `true`);
  let r = document.createElement(`div`);
  ((r.style.position = `relative`), (r.style.height = `200%`), n.appendChild(r), e.appendChild(n));
  let i = Math.max(n.offsetWidth - n.clientWidth, 0);
  return (n.remove(), Kc.set(e, i), i);
}
function Gc(e, t) {
  if (!e.isConnected) return;
  let n = Wc(t);
  if (n == null) return;
  let r = t.querySelector(`style[${Di}]`),
    i = r instanceof HTMLStyleElement ? r : document.createElement(`style`);
  (r instanceof HTMLStyleElement || (i.setAttribute(Di, ``), t.appendChild(i)),
    (i.textContent = `:host { ${Oi}: ${n}px; }`));
}
var Kc,
  qc = e(() => {
    (Mi(), (Kc = new WeakMap()));
  });
function Jc(e) {
  if (
    typeof CSSStyleSheet < `u` &&
    typeof CSSStyleSheet.prototype.replaceSync == `function` &&
    `adoptedStyleSheets` in e
  ) {
    Zc ?? ((Zc = new CSSStyleSheet()), Zc.replaceSync(Bc(Rc)));
    let t = !1;
    try {
      ((e.adoptedStyleSheets = [Zc]), (t = !0));
    } catch {}
    if (t) {
      e.querySelector(`style[${wi}]`)?.remove();
      return;
    }
  }
  if (e.querySelector(`style[data-file-tree-style]`) == null) {
    let t = document.createElement(`style`);
    (t.setAttribute(wi, ``), (t.textContent = Bc(Rc)), e.prepend(t));
  }
}
function Yc(e, t) {
  (Xc(e, t), Jc(t), Gc(e, t));
}
function Xc(e, t) {
  let n = e.querySelector(
    `template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`,
  );
  n instanceof HTMLTemplateElement &&
    (t.childNodes.length > 0 ||
      (t.appendChild(n.content.cloneNode(!0)), n.hasAttribute(`shadowrootmode`) && n.remove()));
}
var Zc,
  Qc = e(() => {
    if (
      (Mi(),
      zc(),
      Uc(),
      qc(),
      typeof HTMLElement < `u` && customElements.get(`file-tree-container`) == null)
    ) {
      class e extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          let e = this.shadowRoot ?? this.attachShadow({ mode: `open` });
          Yc(this, e);
        }
      }
      if ((customElements.define(Ci, e), typeof document < `u`))
        for (let e of Array.from(document.querySelectorAll(Ci)))
          e instanceof HTMLElement && Yc(e, e.shadowRoot ?? e.attachShadow({ mode: `open` }));
    }
  }),
  $c,
  el = e(() => {
    (Mi(), ($c = (e) => (e.startsWith(`f::`) ? e.slice(3) : e)));
  });
function tl(e) {
  let t = e.lastIndexOf(`/`);
  return t < 0
    ? { parentPath: ``, baseName: e }
    : { parentPath: e.slice(0, t), baseName: e.slice(t + 1) };
}
function nl(e, t) {
  return e === `` ? t : `${e}/${t}`;
}
function rl({ files: e, path: t, isFolder: n, nextBasename: r }) {
  let i = $c(t),
    a = r.trim();
  if (a.length === 0) return { error: `Name cannot be empty.` };
  if (a.includes(`/`)) return { error: `Name cannot include "/".` };
  let { parentPath: o, baseName: s } = tl(i);
  if (a === s) return { nextFiles: e, sourcePath: i, destinationPath: i, isFolder: n };
  let c = nl(o, a),
    l = Array(e.length),
    u = new Set();
  if (!n) {
    let t = `${c}/`,
      r = !1;
    for (let n = 0; n < e.length; n++) {
      let a = e[n];
      if (a !== i && a.startsWith(t)) return { error: `"${c}" already exists.` };
      let o = a === i ? c : a;
      if (u.has(o)) return { error: `"${c}" already exists.` };
      (u.add(o), (l[n] = o), a === i && (r = !0));
    }
    return r
      ? { nextFiles: l, sourcePath: i, destinationPath: c, isFolder: n }
      : { error: `Could not find the selected file to rename.` };
  }
  let d = `${i}/`,
    f = `${c}/`,
    p = 0;
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      r = n === i || n.startsWith(d);
    if (!r && (n === c || n.startsWith(f))) return { error: `"${c}" already exists.` };
    let a = r ? `${c}${n.slice(i.length)}` : n;
    if (u.has(a)) return { error: `"${c}" already exists.` };
    (u.add(a), (l[t] = a), r && p++);
  }
  return p === 0
    ? { error: `Could not find the selected folder to rename.` }
    : { nextFiles: l, sourcePath: i, destinationPath: c, isFolder: n };
}
var il = e(() => {
  el();
});
function al(e) {
  return e.endsWith(`/`);
}
function ol(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e,
    n = t.lastIndexOf(`/`),
    r = n < 0 ? t : t.slice(n + 1);
  return e.endsWith(`/`) ? `${r}/` : r;
}
function sl(e) {
  let t = [],
    n = new Set();
  for (let r of e) n.has(r) || (n.add(r), t.push(r));
  let r = new Set();
  for (let e of t.toSorted((e, t) =>
    e.length === t.length ? e.localeCompare(t) : e.length - t.length,
  )) {
    let t = (e.endsWith(`/`) ? e.slice(0, -1) : e).split(`/`),
      n = !1;
    for (let e = 0; e < t.length - 1; e += 1) {
      let i = `${t.slice(0, e + 1).join(`/`)}/`;
      if (r.has(i)) {
        n = !0;
        break;
      }
    }
    n || r.add(e);
  }
  return t.filter((e) => r.has(e));
}
function cl(e, t) {
  return t.includes(e) ? sl(t) : [e];
}
function ll(e, t) {
  return e === t
    ? !0
    : e == null || t == null
      ? !1
      : e.kind === t.kind &&
        e.directoryPath === t.directoryPath &&
        e.flattenedSegmentPath === t.flattenedSegmentPath &&
        e.hoveredPath === t.hoveredPath;
}
function ul(e, t) {
  return { draggedPaths: e, target: t };
}
function dl(e, t) {
  if (t.kind !== `directory` || t.directoryPath == null) return !1;
  for (let n of e) if (al(n) && (t.directoryPath === n || t.directoryPath.startsWith(n))) return !0;
  return !1;
}
function fl(e, t) {
  return t.kind === `root` || t.directoryPath == null ? ol(e) : t.directoryPath;
}
function pl(e, t) {
  let n = e
    .map((e) => {
      let n = fl(e, t);
      return n === e ? null : { from: e, to: n, type: `move` };
    })
    .filter((e) => e != null);
  return n.length === 0
    ? null
    : {
        operations: n,
        result: { draggedPaths: e, operation: n.length === 1 ? `move` : `batch`, target: t },
      };
}
var ml = e(() => {});
function hl(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
  return !0;
}
function gl(e, t, n) {
  let { paths: r, preparedInput: i } = e;
  if (i == null) {
    if (r == null) throw Error(`FileTree requires paths or preparedInput`);
    return { paths: r, preparedInput: void 0 };
  }
  let a = i.paths;
  if (r == null) return { paths: a, preparedInput: i };
  if (!hl(jc.preparePaths(r, n == null ? {} : { sort: n }), a))
    throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);
  return { paths: a, preparedInput: i };
}
var _l = e(() => {
  Mc();
});
function vl(e) {
  return (
    e.operation === `add` ||
    e.operation === `remove` ||
    e.operation === `move` ||
    e.operation === `batch`
  );
}
function yl(e, t, n) {
  if (e === t) return n;
  let r = t.endsWith(`/`) ? t : `${t}/`;
  return e.startsWith(r) ? `${n.endsWith(`/`) ? n : `${n}/`}${e.slice(r.length)}` : e;
}
function bl(e, t) {
  if (e === t) return !0;
  let n = t.endsWith(`/`) ? t : `${t}/`;
  return e.startsWith(n);
}
function xl(e, t, n = !1) {
  if (e == null) return null;
  switch (t.operation) {
    case `add`:
    case `expand`:
    case `collapse`:
    case `mark-directory-unloaded`:
    case `begin-child-load`:
    case `apply-child-patch`:
    case `complete-child-load`:
    case `fail-child-load`:
    case `cleanup`:
      return e;
    case `remove`:
      return bl(e, t.path) ? (n ? e : null) : e;
    case `move`:
      return yl(e, t.from, t.to);
    case `batch`: {
      let r = e;
      for (let e of t.events) if (((r = xl(r, e, n)), r == null)) return null;
      return r;
    }
  }
}
function Sl(e) {
  return {
    canonicalChanged: e.canonicalChanged,
    projectionChanged: e.projectionChanged,
    visibleCountDelta: e.visibleCountDelta,
  };
}
function Cl(e) {
  switch (e.operation) {
    case `add`:
      return { ...Sl(e), operation: `add`, path: e.path };
    case `remove`:
      return { ...Sl(e), operation: `remove`, path: e.path, recursive: e.recursive };
    case `move`:
      return { ...Sl(e), from: e.from, operation: `move`, to: e.to };
  }
}
function wl(e) {
  return {
    ...Sl(e),
    events: e.events
      .filter((e) => e.operation === `add` || e.operation === `remove` || e.operation === `move`)
      .map((e) => Cl(e)),
    operation: `batch`,
  };
}
function Tl(e) {
  switch (e.operation) {
    case `add`:
    case `remove`:
    case `move`:
      return Cl(e);
    case `batch`:
      return wl(e);
    default:
      return null;
  }
}
var El = e(() => {});
function Dl(e, t) {
  if (e.size !== t.length) return !1;
  for (let n of t) if (!e.has(n)) return !1;
  return !0;
}
function Ol(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e;
  if (t.length === 0) return [];
  let n = t.split(`/`);
  return n.slice(0, -1).map((e, t) => `${n.slice(0, t + 1).join(`/`)}/`);
}
function kl(e) {
  return Ol(e).at(-1) ?? null;
}
function Al(e, t) {
  return t == null ? e : e.startsWith(t) ? e.slice(t.length) : e;
}
function jl(e) {
  return e.endsWith(`/`);
}
var Ml,
  Nl = e(() => {
    Ml = (e) => e.toLowerCase();
  });
function Pl(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e,
    n = t.lastIndexOf(`/`);
  return n < 0 ? t : t.slice(n + 1);
}
function Fl(e) {
  return e.endsWith(`/`) ? e.slice(0, -1) : e;
}
function Il(e, t) {
  return t && !e.endsWith(`/`) ? `${e}/` : e;
}
var Ll = e(() => {}),
  Rl,
  zl = e(() => {
    Rl = (e) => {
      let t = e.trim();
      return t.length === 0 ? `` : (t.includes(`\\`) ? t.replaceAll(`\\`, `/`) : t).toLowerCase();
    };
  });
function Bl(e) {
  return e === `top` || e === `center` ? e : `nearest`;
}
function Vl(e, t, n) {
  if (e === 0) return -1;
  if (n != null) {
    let e = t(n);
    if (e != null) return e;
    let r = Ol(n);
    for (let e = r.length - 1; e >= 0; --e) {
      let n = r[e];
      if (n == null) continue;
      let i = t(n);
      if (i != null) return i;
    }
  }
  return 0;
}
function Hl(e, t, n) {
  if (e.paths.length === 0)
    return {
      focusedIndex: -1,
      getParentIndex: e.getParentIndex,
      paths: e.paths,
      posInSetByIndex: e.posInSetByIndex,
      setSizeByIndex: e.setSizeByIndex,
    };
  if (t == null)
    return {
      focusedIndex: 0,
      getParentIndex: e.getParentIndex,
      paths: e.paths,
      posInSetByIndex: e.posInSetByIndex,
      setSizeByIndex: e.setSizeByIndex,
    };
  let r = n ?? ((t) => e.visibleIndexByPath.get(t) ?? null);
  return {
    focusedIndex: Vl(e.paths.length, r, t),
    getParentIndex: e.getParentIndex,
    paths: e.paths,
    posInSetByIndex: e.posInSetByIndex,
    setSizeByIndex: e.setSizeByIndex,
  };
}
var Ul,
  Wl,
  Gl,
  Kl,
  ql = e(() => {
    (Mc(),
      il(),
      ml(),
      _l(),
      El(),
      Nl(),
      Ll(),
      zl(),
      (Ul = Symbol(`FILE_TREE_RENAME_VIEW`)),
      (Wl = 512),
      (Gl = 512),
      (Kl = class {
        #e;
        #t = new Set();
        #n = new Map();
        #r = null;
        #i = null;
        #a = new Map();
        #o = new Map();
        #s = -1;
        #c = null;
        #l = !1;
        #u = (e) => -1;
        #d = new Map();
        #f = null;
        #p = null;
        #m = null;
        #h = null;
        #g = null;
        #_;
        #v;
        #y;
        #b = [];
        #x = new Int32Array();
        #S = new Int32Array();
        #C = void 0;
        #w = !1;
        #T = null;
        #E = ``;
        #D = !1;
        #O = new Set();
        #k = [];
        #A;
        #j = null;
        #M = null;
        #N = null;
        #P = null;
        #F = null;
        #I = null;
        #L = null;
        #R = 0;
        #z = null;
        #B = new Set();
        #V = 0;
        #H;
        #U = 0;
        #W = !1;
        #G = 0;
        #K;
        constructor(e) {
          let {
              dragAndDrop: t,
              fileTreeSearchMode: n,
              initialSearchQuery: r,
              initialSelectedPaths: i,
              renaming: a,
              onSearchChange: o,
              paths: s,
              preparedInput: c,
              ...l
            } = e,
            u = gl({ paths: s, preparedInput: c }, `constructor`, l.sort);
          ((this.#e = l),
            t != null && t !== !1 && (this.#r = t === !0 ? {} : t),
            (this.#w = a != null && a !== !1),
            a != null &&
              a !== !1 &&
              a !== !0 &&
              ((this.#C = a.canRename), (this.#v = a.onError), (this.#_ = a.onRename)),
            (this.#y = o),
            (this.#A = n ?? `hide-non-matches`),
            (this.#H = this.#le(u.paths, u.preparedInput)));
          let d = i?.map((e) => this.#Ne(e)).filter((e) => e != null) ?? [],
            f = d.at(-1) ?? null;
          (d.length > 0 && ((this.#B = new Set(d)), (this.#z = f), (this.#V = 1)),
            this.#je(f, !1),
            r != null && this.#Te(r, !1),
            (this.#K = this.#Re()));
        }
        destroy() {
          (this.#K?.(),
            (this.#K = null),
            this.#n.clear(),
            this.#t.clear(),
            this.#d.clear(),
            (this.#i = null),
            this.#he());
        }
        focusFirstItem() {
          this.#be().length > 0 && this.#Fe(0);
        }
        focusLastItem() {
          this.#G <= 0 || (this.#Ie(), this.#Fe(this.#G - 1));
        }
        focusNextItem() {
          this.#Ae(1);
        }
        focusParentItem() {
          if (this.#c == null) return;
          let e = kl(this.#c);
          if (e == null) return;
          let t = this.#Z(e);
          t >= 0 && this.#Fe(t);
        }
        focusPath(e) {
          let t = this.#H.getPathInfo(e)?.path ?? null;
          if (t == null) return;
          this.#Ie();
          let n = this.#Z(t);
          n >= 0 && this.#Fe(n);
        }
        scrollToPath(e, t) {
          let n = this.#H.getPathInfo(e)?.path ?? null;
          if (n == null) return;
          this.#Ie();
          let r = this.#xe(n);
          r < 0 ||
            (this.#Me(r) != null &&
              (t?.focus !== !1 && this.#Fe(r, !1),
              (this.#L = { id: (this.#R += 1), offset: Bl(t?.offset), visibleIndex: r }),
              this.#De()));
        }
        focusMountedPathFromInput(e) {
          let t = this.#H.getPathInfo(e)?.path ?? null;
          if (t == null) return;
          let n = this.#Z(t);
          n >= 0 && this.#Fe(n);
        }
        focusNearestPath(e) {
          let t = this.resolveNearestVisiblePath(e);
          if (t == null) return null;
          let n = this.#Z(t);
          return n >= 0 ? (this.#Fe(n), this.#be()[n] ?? t) : null;
        }
        focusPreviousItem() {
          this.#Ae(-1);
        }
        getFocusedIndex() {
          return this.#s;
        }
        getFocusedItem() {
          return this.#c == null ? null : this.#Q(this.#c);
        }
        getFocusedPath() {
          return this.#c;
        }
        getScrollRequest() {
          return this.#L;
        }
        clearScrollRequest(e) {
          this.#L?.id === e && (this.#L = null);
        }
        resolveNearestVisiblePath(e) {
          let t = this.#be();
          if (this.#G === 0) return null;
          if (e == null) return this.#c ?? t[0] ?? null;
          let n = this.#H.getPathInfo(e)?.path ?? e,
            r = this.#Z(n);
          return r >= 0 ? (t[r] ?? n) : (this.#X(n) ?? this.#c ?? t[0] ?? null);
        }
        getSelectedPaths() {
          return [...this.#B];
        }
        getSelectionVersion() {
          return this.#V;
        }
        getVisibleCount() {
          return this.#G;
        }
        getVisibleRows(e, t) {
          if (t < e || this.#G === 0) return [];
          let n = Math.max(0, e),
            r = Math.min(this.#G - 1, t);
          if (r < n) return [];
          let i = r - n + 1;
          if (this.#F == null && !this.#l && r >= this.#b.length && i <= Gl) {
            let e = [];
            for (let t = n; t <= r; t += 1) {
              let n = this.#H.getVisibleRowContext(t);
              if (n == null) break;
              e.push(this.#ee(n));
            }
            return e;
          }
          if ((!this.#l && r >= this.#b.length && this.#Ie(), this.#F != null)) {
            let e = Array.from({ length: r - n + 1 }, (e, t) => this.#Se(n + t)),
              t = new Map(),
              i = e[0] ?? -1,
              a = i;
            for (let n = 1; n <= e.length; n += 1) {
              let r = e[n];
              if (r != null && r === a + 1) {
                a = r;
                continue;
              }
              if (
                (i >= 0 &&
                  this.#H.getVisibleSlice(i, a).forEach((e, n) => {
                    t.set(i + n, e);
                  }),
                r == null)
              ) {
                ((i = -1), (a = -1));
                continue;
              }
              ((i = r), (a = r));
            }
            return Array.from({ length: r - n + 1 }, (e, r) => {
              let i = n + r,
                a = this.#Se(i),
                o = t.get(a),
                s = this.#b[a];
              if (o == null || s == null)
                throw Error(`Missing projection row for filtered visible index ${String(i)}`);
              return this.#$(o, i, a, { ancestorPaths: this.#re(a), path: s });
            });
          }
          return this.#H.getVisibleSlice(n, r).map((e, t) => {
            let r = n + t,
              i = this.#b[r];
            if (i == null) throw Error(`Missing projection path for visible index ${String(r)}`);
            return this.#$(e, r, r, { ancestorPaths: this.#re(r), path: i });
          });
        }
        getStickyRowCandidates(e, t) {
          if (this.#F != null) return null;
          if (this.#G === 0 || e <= 0 || t <= 0) return [];
          let n = [];
          for (let r = 0; r < this.#G; r += 1) {
            let i = e + r * t,
              a = Math.min(this.#G - 1, Math.floor(i / t)),
              o = this.#te(a, r) ?? (a > 0 ? this.#te(a - 1, r) : void 0);
            if (o == null) break;
            n.push({ row: this.#ee(o), subtreeEndIndex: o.subtreeEndIndex });
          }
          return n;
        }
        getItem(e) {
          let t = this.#H.getPathInfo(e);
          return t == null ? null : this.#Q(t.path, t);
        }
        resolveMountedDirectoryPathFromInput(e) {
          let t = this.#H.getPathInfo(e);
          return t?.kind === `directory` ? t.path : null;
        }
        toggleMountedDirectoryFromInput(e) {
          let t = this.resolveMountedDirectoryPathFromInput(e);
          t != null && this.#ze(t);
        }
        selectAllVisiblePaths() {
          this.#Ie();
          let e = [...this.#be()];
          this.#ae(e, this.#c ?? this.#z);
        }
        selectOnlyPath(e) {
          let t = this.#Ne(e);
          t != null && this.#ae([t], t);
        }
        selectOnlyMountedPathFromInput(e) {
          this.#ae([e], e);
        }
        selectPath(e) {
          let t = this.#Ne(e);
          t == null || this.#B.has(t) || this.#ae([...this.#B, t]);
        }
        deselectPath(e) {
          let t = this.#Ne(e);
          t == null || !this.#B.has(t) || this.#ae([...this.#B].filter((e) => e !== t));
        }
        toggleFocusedSelection() {
          this.#c != null && this.togglePathSelectionFromInput(this.#c);
        }
        togglePathSelection(e) {
          let t = this.#Ne(e);
          if (t != null) {
            if (this.#B.has(t)) {
              this.deselectPath(t);
              return;
            }
            this.selectPath(t);
          }
        }
        togglePathSelectionFromInput(e) {
          let t = this.#Ne(e);
          if (t != null) {
            if (this.#B.has(t)) {
              this.#ae(
                [...this.#B].filter((e) => e !== t),
                t,
              );
              return;
            }
            this.#ae([...this.#B, t], t);
          }
        }
        selectPathRange(e, t) {
          let n = this.#Ne(e);
          if (n == null) return;
          this.#Ie();
          let r = this.#z,
            i = r == null ? -1 : this.#Ce(r),
            a = this.#Ce(n);
          if (i === -1 || a === -1) {
            let e = t ? [...this.#B, n] : [n];
            this.#ae(e, n);
            return;
          }
          let [o, s] = i <= a ? [i, a] : [a, i],
            c = this.#be().slice(o, s + 1),
            l = t ? [...this.#B, ...c] : c;
          this.#ae(l, r);
        }
        extendSelectionFromFocused(e) {
          if (this.#c == null) return;
          let t = this.#s;
          if (t === -1) return;
          let n = Math.min(this.#G - 1, Math.max(0, t + e));
          if (n === t) return;
          !this.#l && n >= this.#b.length && this.#Ie();
          let r = this.#be(),
            i = r[t] ?? null,
            a = r[n] ?? null;
          if (i == null || a == null) return;
          let o = new Set(this.#B);
          (o.has(i) && o.has(a) ? o.delete(i) : o.add(a),
            this.#ae([...o], this.#z ?? i, !1),
            this.#Fe(n));
        }
        getDragAndDropConfig() {
          return this.#r;
        }
        isDragAndDropEnabled() {
          return this.#r != null;
        }
        getDragSession() {
          return this.#i == null
            ? null
            : {
                draggedPaths: [...this.#i.draggedPaths],
                primaryPath: this.#i.primaryPath,
                target: this.#i.target == null ? null : { ...this.#i.target },
              };
        }
        startDrag(e) {
          if (this.#r == null) return !1;
          let t = this.#Ne(e);
          if (t == null || (this.#M != null && this.#M.length > 0)) return !1;
          let n = this.getSelectedPaths(),
            r = cl(t, n);
          return this.#r.canDrag?.(r) === !1
            ? !1
            : (n.includes(t) || this.#ae([t], t, !1),
              this.#Pe(t),
              (this.#i = { draggedPaths: r, primaryPath: t, target: null }),
              this.#De(),
              !0);
        }
        setDragTarget(e) {
          let t = this.#i;
          if (t == null) return;
          let n = e;
          if (n != null) {
            let e = ul(t.draggedPaths, n);
            (dl(t.draggedPaths, n) || this.#r?.canDrop?.(e) === !1) && (n = null);
          }
          ll(t.target, n) || ((this.#i = { ...t, target: n }), this.#De());
        }
        cancelDrag() {
          this.#i != null && ((this.#i = null), this.#De());
        }
        completeDrag() {
          let e = this.#i;
          if (e == null) return !1;
          this.#i = null;
          let t = e.target == null ? null : { ...e.target };
          if (t == null) return (this.#De(), !1);
          let n = ul(e.draggedPaths, t);
          if (dl(e.draggedPaths, t) || this.#r?.canDrop?.(n) === !1) return (this.#De(), !1);
          let r = pl(e.draggedPaths, t);
          if (r == null) return (this.#De(), !1);
          try {
            if (r.operations.length === 1) {
              let e = r.operations[0];
              if (e == null || e.type !== `move`)
                throw Error(`Expected a single move operation for one-item drops`);
              this.#H.move(e.from, e.to, { collision: e.collision });
            } else (this.#ce(r.operations), this.#H.batch(r.operations));
          } catch (e) {
            return (
              this.#De(), this.#r?.onDropError?.(e instanceof Error ? e.message : String(e), n), !1
            );
          }
          return (this.#r?.onDropComplete?.(r.result), !0);
        }
        subscribe(e) {
          return (
            this.#t.add(e),
            e(),
            () => {
              this.#t.delete(e);
            }
          );
        }
        add(e) {
          this.#H.add(e);
        }
        remove(e, t = {}) {
          this.#H.remove(e, t);
        }
        move(e, t, n = {}) {
          this.#H.move(e, t, n);
        }
        batch(e) {
          this.#H.batch(e);
        }
        onMutation(e, t) {
          let n = e,
            r = t,
            i = this.#n.get(n);
          return (
            i ?? ((i = new Set()), this.#n.set(n, i)),
            i.add(r),
            () => {
              let e = this.#n.get(n);
              (e?.delete(r), e?.size === 0 && this.#n.delete(n));
            }
          );
        }
        setSearch(e) {
          this.#Te(e, !0);
        }
        openSearch(e = ``) {
          this.#Te(e, !0);
        }
        closeSearch() {
          this.#Te(null, !0);
        }
        isSearchOpen() {
          return this.#M !== null;
        }
        getSearchValue() {
          return this.#M ?? ``;
        }
        getSearchMatchingPaths() {
          return this.#k;
        }
        focusNextSearchMatch() {
          this.#we(1);
        }
        focusPreviousSearchMatch() {
          this.#we(-1);
        }
        startRenaming(e = this.#c ?? ``, t = {}) {
          if (!this.#w) return !1;
          let n = this.#H.getPathInfo(e);
          if (n == null) return !1;
          let r = n.path,
            i = jl(r),
            a = Fl(r);
          if (this.#C?.({ isFolder: i, path: a }) === !1) return !1;
          for (let e of Ol(r)) this.#H.isExpanded(e) || this.#H.expand(e);
          return (
            this.#ae([r], r, !1),
            this.#M != null && (this.#Te(null, !1), this.#y?.(this.#M)),
            this.#Pe(r),
            (this.#T = r),
            (this.#E = Pl(r)),
            (this.#D = t.removeIfCanceled ?? !1),
            this.#De(),
            !0
          );
        }
        [Ul]() {
          return {
            cancel: () => {
              this.#q();
            },
            commit: () => {
              this.#J();
            },
            getPath: () => this.#T,
            getValue: () => this.#E,
            isActive: () => this.#T != null,
            setValue: (e) => {
              this.#Y(e);
            },
          };
        }
        #q() {
          if (this.#T == null) return;
          let e = this.#T,
            t = this.#D;
          if (((this.#T = null), (this.#E = ``), (this.#D = !1), t)) {
            this.remove(e, jl(e) ? { recursive: !0 } : void 0);
            return;
          }
          (this.#Pe(e), this.#De());
        }
        #J() {
          let e = this.#T;
          if (e == null) return;
          if (this.#D && this.#E.trim().length === 0) {
            ((this.#T = null),
              (this.#E = ``),
              (this.#D = !1),
              this.remove(e, jl(e) ? { recursive: !0 } : void 0));
            return;
          }
          let t = jl(e),
            n = rl({ files: this.#H.list(), isFolder: t, nextBasename: this.#E, path: Fl(e) });
          if (((this.#T = null), (this.#E = ``), (this.#D = !1), `error` in n)) {
            (this.#Pe(e), this.#v?.(n.error), this.#De());
            return;
          }
          if (n.sourcePath === n.destinationPath) {
            (this.#Pe(e), this.#De());
            return;
          }
          (this.#_?.({
            destinationPath: n.destinationPath,
            isFolder: n.isFolder,
            sourcePath: n.sourcePath,
          }),
            this.move(Il(n.sourcePath, t), Il(n.destinationPath, t)));
        }
        #Y(e) {
          this.#T == null || this.#E === e || ((this.#E = e), this.#De());
        }
        resetPaths(e, t = {}) {
          let n = this.#H.list().length,
            r = this.#G,
            i = gl({ paths: e, preparedInput: t.preparedInput }, `resetPaths`, this.#e.sort),
            a = this.#le(i.paths, i.preparedInput, t.initialExpandedPaths),
            o = this.#c,
            s = this.#T,
            c = this.getSelectedPaths(),
            l = this.#z;
          (this.#K?.(), (this.#H = a), this.#d.clear(), this.#he());
          let u = c.map((e) => a.getPathInfo(e)?.path ?? null).filter((e) => e != null),
            d = !Dl(this.#B, u);
          ((this.#B = new Set(u)),
            d && (this.#V += 1),
            (this.#z = l == null ? null : (a.getPathInfo(l)?.path ?? null)),
            (this.#T = s == null ? null : (a.getPathInfo(s)?.path ?? null)),
            this.#T ?? ((this.#E = ``), (this.#D = !1)),
            this.#je(o, o != null || u.length > 0 || this.#z != null),
            (this.#K = this.#Re()),
            this.#De(),
            this.#Oe({
              canonicalChanged: !0,
              operation: `reset`,
              pathCountAfter: i.paths.length,
              pathCountBefore: n,
              projectionChanged: !0,
              usedPreparedInput: t.preparedInput != null,
              visibleCountDelta: this.#G - r,
            }));
        }
        #X(e) {
          this.#Ie();
          let t = kl(e),
            n = Al(e, t),
            r = null,
            i = null;
          for (let e of this.#be()) {
            if (kl(e) !== t) continue;
            let a = Al(e, t);
            if (a < n) {
              r = e;
              continue;
            }
            if (a > n) {
              i = e;
              break;
            }
          }
          return r ?? i;
        }
        #Z(e) {
          let t = this.#Ce(e);
          if (t !== -1) return t;
          let n = Ol(e);
          for (let e = n.length - 1; e >= 0; --e) {
            let t = n[e];
            if (t == null) continue;
            let r = this.#Ce(t);
            if (r !== -1) return r;
          }
          return this.#be().length > 0 ? 0 : -1;
        }
        #Q(e, t) {
          let n = this.#d.get(e);
          if (n != null) return n;
          let r = t ?? this.#H.getPathInfo(e);
          if (r == null) return null;
          let i = r.kind === `directory` ? this.#oe(r.path) : this.#se(r.path);
          return (this.#d.set(r.path, i), i);
        }
        #$(e, t, n, r) {
          return {
            ancestorPaths: r.ancestorPaths,
            depth: e.depth,
            flattenedSegments: e.flattenedSegments?.map((e) => ({
              isTerminal: e.isTerminal,
              name: e.name,
              path: e.path,
            })),
            hasChildren: e.hasChildren,
            index: t,
            isExpanded: e.isExpanded,
            isFlattened: e.isFlattened,
            isFocused: r.path === this.#c,
            isSelected: this.#B.has(r.path),
            kind: e.kind,
            level: e.depth,
            name: e.name,
            path: r.path,
            posInSet: r.posInSet ?? this.#x[n] ?? 0,
            setSize: r.setSize ?? this.#S[n] ?? 0,
          };
        }
        #ee(e) {
          return this.#$(e.row, e.index, e.index, {
            ancestorPaths: e.ancestorPaths,
            path: e.row.path,
            posInSet: e.posInSet,
            setSize: e.setSize,
          });
        }
        #te(e, t) {
          let n = this.#H.getVisibleRowContext(e);
          return n == null
            ? void 0
            : (n.ancestorRows[t] ??
                (t === n.ancestorRows.length && n.row.kind === `directory` && n.row.isExpanded
                  ? n
                  : void 0));
        }
        #ne(e) {
          let t = this.#a.get(e);
          if (t != null) return t;
          let n = this.#u(e),
            r = n < 0 ? [] : [...this.#ne(n), n];
          return (this.#a.set(e, r), r);
        }
        #re(e) {
          let t = this.#o.get(e);
          if (t != null) return t;
          let n = this.#ne(e)
            .map((e) => this.#b[e] ?? ``)
            .filter((e) => e !== ``);
          return (this.#o.set(e, n), n);
        }
        #ie(e) {
          this.#H.collapse(e);
        }
        #ae(e, t = this.#z, n = !0) {
          let r = [...new Set(e)],
            i = !Dl(this.#B, r),
            a = this.#z !== t;
          (!i && !a) ||
            ((this.#B = new Set(r)), (this.#z = t), i && (this.#V += 1), n && this.#De());
        }
        #oe(e) {
          return {
            collapse: () => {
              this.#ie(e);
            },
            deselect: () => {
              this.deselectPath(e);
            },
            expand: () => {
              this.#ke(e);
            },
            focus: () => {
              this.focusPath(e);
            },
            getPath: () => e,
            isDirectory: () => !0,
            isExpanded: () => this.#H.isExpanded(e),
            isFocused: () => this.#c === e,
            isSelected: () => this.#B.has(e),
            select: () => {
              this.selectPath(e);
            },
            toggleSelect: () => {
              this.togglePathSelection(e);
            },
            toggle: () => {
              this.#ze(e);
            },
          };
        }
        #se(e) {
          return {
            deselect: () => {
              this.deselectPath(e);
            },
            focus: () => {
              this.focusPath(e);
            },
            getPath: () => e,
            isDirectory: () => !1,
            isFocused: () => this.#c === e,
            isSelected: () => this.#B.has(e),
            select: () => {
              this.selectPath(e);
            },
            toggleSelect: () => {
              this.togglePathSelection(e);
            },
          };
        }
        #ce(e) {
          let t = this.#H.list();
          this.#le(t).batch(e);
        }
        #le(e, t, n) {
          return new jc({
            ...this.#e,
            paths: e,
            preparedInput: t ?? void 0,
            ...(n === void 0 ? {} : { initialExpandedPaths: n }),
          });
        }
        #ue() {
          return ((this.#h ??= this.#H.list()), this.#h);
        }
        #de() {
          if (this.#m != null) return this.#m;
          let e = new Set();
          for (let t of this.#ue()) {
            e.add(t);
            for (let n of Ol(t)) e.add(n);
          }
          return ((this.#m = [...e].sort()), this.#m);
        }
        #fe() {
          return ((this.#g ??= this.#ue().map(Ml)), this.#g);
        }
        #pe() {
          return ((this.#f ??= this.#de().filter((e) => e.endsWith(`/`))), this.#f);
        }
        #me() {
          return ((this.#p ??= this.#pe().map(Ml)), this.#p);
        }
        #he() {
          ((this.#f = null),
            (this.#p = null),
            (this.#m = null),
            (this.#h = null),
            (this.#g = null));
        }
        #ge() {
          return this.#pe().filter((e) => this.#H.isExpanded(e));
        }
        #_e(e) {
          let t = new Set(this.#j ?? []);
          if (e) for (let e of this.#B) for (let n of Ol(e)) t.add(n);
          this.#ve(t);
        }
        #ve(e) {
          this.#W = !0;
          try {
            for (let t of this.#pe()) {
              let n = e.has(t),
                r = this.#H.isExpanded(t);
              n && !r ? this.#H.expand(t) : !n && r && this.#H.collapse(t);
            }
          } finally {
            this.#W = !1;
          }
        }
        #ye() {
          if (this.#M == null || this.#M.length === 0) {
            ((this.#k = []),
              (this.#F = null),
              (this.#I = null),
              (this.#P = null),
              (this.#G = this.#U));
            return;
          }
          let e = this.#b;
          if (
            ((this.#k = e.filter((e) => this.#O.has(e))),
            this.#A !== `hide-non-matches` || this.#O.size === 0)
          ) {
            ((this.#F = null), (this.#I = null), (this.#P = null), (this.#G = this.#U));
            return;
          }
          let t = [],
            n = [],
            r = new Map();
          for (let [i, a] of e.entries())
            this.#N?.has(a) === !0 && (r.set(a, n.length), t.push(i), n.push(a));
          ((this.#F = t), (this.#I = n), (this.#P = r), (this.#G = n.length));
        }
        #be() {
          return this.#I ?? this.#b;
        }
        #xe(e) {
          return this.#I == null ? (this.#H.getVisibleIndex(e) ?? -1) : (this.#P?.get(e) ?? -1);
        }
        #Se(e) {
          return this.#F?.[e] ?? e;
        }
        #Ce(e) {
          return this.#P?.get(e) ?? this.#H.getVisibleIndex(e) ?? -1;
        }
        #we(e) {
          let t = this.#k;
          if (t.length === 0) return;
          let n = this.#c,
            r = n == null ? -1 : t.indexOf(n),
            i = t[r < 0 ? (e > 0 ? 0 : t.length - 1) : Math.min(t.length - 1, Math.max(0, r + e))];
          i != null && this.focusPath(i);
        }
        #Te(e, t) {
          let n = e == null ? null : Rl(e),
            r = this.#M;
          if (r !== n) {
            if ((r == null && n != null && (this.#j = this.#ge()), (this.#M = n), n == null))
              (this.#_e(!0),
                (this.#j = null),
                this.#O.clear(),
                (this.#N = null),
                this.#je(this.#c, !0));
            else if (n.length === 0)
              (this.#_e(!1), this.#O.clear(), (this.#N = null), this.#je(this.#c, !0));
            else {
              let e = this.#Ee();
              this.#je(e, !0);
            }
            t && (this.#y?.(this.#M), this.#De());
          }
        }
        #Ee() {
          if (this.#M == null || this.#M.length === 0) return (this.#O.clear(), this.#c);
          let e = this.#M,
            t = this.#ue(),
            n = this.#fe(),
            r = [],
            i = new Set(),
            a = null;
          for (let o = 0; o < t.length; o += 1) {
            if (!n[o].includes(e)) continue;
            let s = t[o];
            (r.push(s), i.add(s), (a ??= s));
          }
          let o = this.#pe(),
            s = this.#me();
          for (let t = 0; t < o.length; t += 1) {
            if (!s[t].includes(e)) continue;
            let n = o[t];
            i.has(n) || (r.push(n), i.add(n), (a ??= n));
          }
          this.#O = i;
          let c = this.#A === `hide-non-matches` && r.length > 0 ? new Set() : null;
          this.#N = c;
          let l = this.#A === `expand-matches` ? new Set(this.#j ?? []) : new Set();
          for (let e of r) {
            (c?.add(e), e.endsWith(`/`) && l.add(e));
            for (let t of Ol(e)) (l.add(t), c?.add(t));
          }
          return (this.#ve(l), a ?? this.#c);
        }
        #De() {
          for (let e of this.#t) e();
        }
        #Oe(e) {
          (this.#n.get(e.operation)?.forEach((t) => {
            t(e);
          }),
            this.#n.get(`*`)?.forEach((t) => {
              t(e);
            }));
        }
        #ke(e) {
          for (let t of Ol(e)) this.#H.isExpanded(t) || this.#H.expand(t);
          this.#H.isExpanded(e) || this.#H.expand(e);
        }
        #Ae(e) {
          let t = this.#G;
          if (t === 0) return;
          let n = this.#s === -1 ? 0 : this.#s,
            r = Math.min(t - 1, Math.max(0, n + e));
          (r !== n || this.#s === -1) &&
            (!this.#l && this.#F == null && r >= this.#b.length && this.#Ie(), this.#Fe(r));
        }
        #je(e, t = !0) {
          let n = this.#H.getVisibleCount();
          this.#U = n;
          let r = Hl(
            this.#H.getVisibleTreeProjectionData(t ? void 0 : Math.min(n, Wl)),
            e,
            t ? (e) => this.#H.getVisibleIndex(e) : void 0,
          );
          (this.#a.clear(),
            this.#o.clear(),
            (this.#l = r.paths.length >= n),
            (this.#u = r.getParentIndex),
            (this.#b = r.paths),
            (this.#x = r.posInSetByIndex),
            (this.#S = r.setSizeByIndex),
            this.#ye(),
            (this.#s = e == null ? (this.#be().length > 0 ? 0 : -1) : this.#Z(e)),
            (this.#c = this.#s < 0 ? null : this.#Me(this.#s)));
        }
        #Me(e) {
          return (
            this.#be()[e] ??
            (this.#F == null ? (this.#H.getVisibleRowContext(e)?.row.path ?? null) : null)
          );
        }
        #Ne(e) {
          return this.#H.getPathInfo(e)?.path ?? null;
        }
        #Pe(e) {
          if (e == null) return;
          let t = this.#Z(e);
          t >= 0 && this.#Fe(t, !1);
        }
        #Fe(e, t = !0) {
          let n = this.#Me(e);
          n != null &&
            ((this.#s === e && this.#c === n) || ((this.#s = e), (this.#c = n), t && this.#De()));
        }
        #Ie() {
          this.#l || this.#je(this.#c, !0);
        }
        #Le(e) {
          let t = xl(this.#T, e);
          (t == null && this.#T != null && (this.#E = ``), (this.#T = t));
          let n = xl(this.#c, e, !0),
            r = [...this.#B]
              .map((t) => xl(t, e))
              .filter((e) => e != null)
              .map((e) => this.#H.getPathInfo(e)?.path ?? null)
              .filter((e) => e != null),
            i = xl(this.#z, e),
            a = i == null ? null : (this.#H.getPathInfo(i)?.path ?? null),
            o = [...new Set(r)];
          return (Dl(this.#B, o) || ((this.#B = new Set(o)), (this.#V += 1)), (this.#z = a), n);
        }
        #Re() {
          return this.#H.on(`*`, (e) => {
            if (this.#W) return;
            (e.canonicalChanged && (this.#d.clear(), this.#he()),
              this.#i != null && vl(e) && (this.#i = null));
            let t = vl(e) ? this.#Le(e) : this.#c,
              n = this.#M != null && this.#M.length > 0 ? this.#Ee() : this.#M === `` ? this.#c : t,
              r = this.#M != null || (e.operation !== `expand` && e.operation !== `collapse`);
            (this.#je(n, r), this.#De());
            let i = Tl(e);
            i != null && this.#Oe(i);
          });
        }
        #ze(e) {
          if (this.#H.isExpanded(e)) {
            this.#ie(e);
            return;
          }
          this.#ke(e);
        }
      }));
  }),
  Jl,
  Yl = e(() => {
    Jl = (e) => {
      if (e == null || e.length === 0) return `0`;
      let t = `${e.length}`;
      for (let n of e) t += `\0${n.path}\0${n.status}`;
      return t;
    };
  });
function Xl(e) {
  let t = e.endsWith(`/`),
    n = ``,
    r = -1;
  for (let t = 0; t <= e.length; t += 1) {
    if (!(e[t] === `/` || t === e.length)) {
      r === -1 && (r = t);
      continue;
    }
    r !== -1 && (n !== `` && (n += `/`), (n += e.slice(r, t)), (r = -1));
  }
  return n === `` ? null : { isDirectory: t, path: n };
}
var Zl = e(() => {});
function Ql(e) {
  let t = e.endsWith(`/`) ? e.slice(0, -1) : e;
  if (t.length === 0) return [];
  let n = t.split(`/`);
  return n.slice(0, -1).map((e, t) => `${n.slice(0, t + 1).join(`/`)}/`);
}
function $l(e, t) {
  return t ? `${e}/` : e;
}
function eu(e, t = null) {
  let n = Jl(e == null ? void 0 : [...e]);
  if (n === `0`) return null;
  if (t?.signature === n) return t;
  let r = new Map(),
    i = new Set(),
    a = new Set();
  for (let t of e ?? []) {
    let e = Xl(t.path);
    if (e == null) continue;
    let n = $l(e.path, e.isDirectory);
    (r.set(n, t.status),
      t.status === `ignored` && e.isDirectory ? a.add(n) : e.isDirectory && a.delete(n));
    for (let t of Ql(e.path)) i.add(t);
  }
  return { directoriesWithChanges: i, ignoredDirectoryPaths: a, signature: n, statusByPath: r };
}
var tu = e(() => {
  (Yl(), Zl());
});
function nu(e) {
  e && e.parentNode && e.remove();
}
function ru(e, t, n) {
  var r,
    i,
    a,
    o = {};
  for (a in t)
    a == `key` ? (r = t[a]) : a == `ref` && typeof e != `function` ? (i = t[a]) : (o[a] = t[a]);
  return (
    arguments.length > 2 && (o.children = arguments.length > 3 ? Bu.call(arguments, 2) : n),
    iu(e, o, r, i, null)
  );
}
function iu(e, t, n, r, i) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++Ou,
    __i: -1,
    __u: 0,
  };
  return (i == null && Z.vnode != null && Z.vnode(a), a);
}
function au(e) {
  return e.children;
}
function ou(e, t) {
  ((this.props = e), (this.context = t), (this.__g = 0));
}
function su(e, t) {
  if (t == null) return e.__ ? su(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == `function` ? su(e) : null;
}
function cu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = n.__e;
        break;
      }
    return cu(e);
  }
}
function lu(e) {
  ((8 & e.__g || !(e.__g |= 8) || !ku.push(e) || ju++) && Au == Z.debounceRendering) ||
    ((Au = Z.debounceRendering) || queueMicrotask)(uu);
}
function uu() {
  for (var e, t, n, r, i, a, o, s, c = 1; ku.length;)
    (ku.length > c && ku.sort(Mu),
      (e = ku.shift()),
      (c = ku.length),
      8 & e.__g &&
        ((n = void 0),
        (i = (r = (t = e).__v).__e),
        (a = []),
        (o = []),
        (s = t.__P) &&
          (((n = Vu({}, r)).__v = r.__v + 1),
          Z.vnode && Z.vnode(n),
          vu(
            s,
            n,
            r,
            t.__n,
            s.namespaceURI,
            32 & r.__u ? [i] : null,
            a,
            i ?? su(r),
            !!(32 & r.__u),
            o,
            s.ownerDocument,
          ),
          (n.__v = r.__v),
          (n.__.__k[n.__i] = n),
          bu(a, n, o),
          n.__e != i && cu(n))));
  ju = 0;
}
function du(e, t, n, r, i, a, o, s, c, l, u, d) {
  var f,
    p,
    m,
    h,
    g,
    _,
    v,
    y = (r && r.__k) || Ru,
    b = t.length;
  for (c = fu(n, t, y, c, b), f = 0; f < b; f++)
    (m = n.__k[f]) != null &&
      ((p = m.__i == -1 ? Lu : y[m.__i] || Lu),
      (m.__i = f),
      (_ = vu(e, m, p, i, a, o, s, c, l, u, d)),
      (h = m.__e),
      m.ref && p.ref != m.ref && (p.ref && Cu(p.ref, null, m), u.push(m.ref, m.__c || h, m)),
      g == null && h != null && (g = h),
      (v = !!(4 & m.__u)) || p.__k === m.__k
        ? (c = pu(m, c, e, v))
        : typeof m.type == `function` && _ !== void 0
          ? (c = _)
          : h && (c = h.nextSibling),
      (m.__u &= -7));
  return ((n.__e = g), c);
}
function fu(e, t, n, r, i) {
  var a,
    o,
    s,
    c,
    l,
    u = n.length,
    d = u,
    f = 0;
  for (e.__k = Array(i), a = 0; a < i; a++)
    (o = t[a]) != null && typeof o != `boolean` && typeof o != `function`
      ? ((c = a + f),
        ((o = e.__k[a] =
          typeof o == `string` ||
          typeof o == `number` ||
          typeof o == `bigint` ||
          o.constructor == String
            ? iu(null, o, null, null, null)
            : zu(o)
              ? iu(au, { children: o }, null, null, null)
              : o.constructor == null && o.__b > 0
                ? iu(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                : o).__ = e),
        (o.__b = e.__b + 1),
        (s = null),
        (l = o.__i = mu(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)),
        s == null || s.__v == null
          ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != `function` && (o.__u |= 4))
          : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, (o.__u |= 4))))
      : (e.__k[a] = null);
  if (d)
    for (a = 0; a < u; a++)
      (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = su(s)), wu(s, s));
  return r;
}
function pu(e, t, n, r) {
  var i, a;
  if (typeof e.type == `function`) {
    for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && ((i[a].__ = e), (t = pu(i[a], t, n, r)));
    return t;
  }
  e.__e != t &&
    (r && (t && e.type && !t.parentNode && (t = su(e)), n.insertBefore(e.__e, t || null)),
    (t = e.__e));
  do t &&= t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function mu(e, t, n, r) {
  var i,
    a,
    o,
    s = e.key,
    c = e.type,
    l = t[n],
    u = l != null && (2 & l.__u) == 0;
  if ((l === null && e.key == null) || (u && s == l.key && c == l.type)) return n;
  if (r > (u ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < t.length;)
      if ((l = t[(o = i >= 0 ? i-- : a++)]) != null && !(2 & l.__u) && s == l.key && c == l.type)
        return o;
  }
  return -1;
}
function hu(e, t, n) {
  t[0] == `-` ? e.setProperty(t, n ?? ``) : (e[t] = n ?? ``);
}
function gu(e, t, n, r, i) {
  var a;
  n: if (t == `style`)
    if (typeof n == `string`) e.style.cssText = n;
    else {
      if ((typeof r == `string` && (e.style.cssText = r = ``), r))
        for (t in r) (n && t in n) || hu(e.style, t, ``);
      if (n) for (t in n) (r && n[t] == r[t]) || hu(e.style, t, n[t]);
    }
  else if (t[0] == `o` && t[1] == `n`)
    ((a = t != (t = t.replace(Nu, `$1`))),
      (t = t.slice(2))[0].toLowerCase() != t[0] && (t = t.toLowerCase()),
      (e.__l ||= {}),
      (e.__l[t + a] = n),
      n
        ? r
          ? (n.l = r.l)
          : ((n.l = Pu), e.addEventListener(t, a ? Iu : Fu, a))
        : e.removeEventListener(t, a ? Iu : Fu, a));
  else {
    if (i == `http://www.w3.org/2000/svg`) t = t.replace(/xlink(H|:h)/, `h`).replace(/sName$/, `s`);
    else if (
      t != `width` &&
      t != `height` &&
      t != `href` &&
      t != `list` &&
      t != `form` &&
      t != `tabIndex` &&
      t != `download` &&
      t != `rowSpan` &&
      t != `colSpan` &&
      t != `role` &&
      t != `popover` &&
      t in e
    )
      try {
        e[t] = n ?? ``;
        break n;
      } catch {}
    typeof n == `function` ||
      (n == null || (!1 === n && t[4] != `-`)
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == `popover` && n == 1 ? `` : n));
  }
}
function _u(e) {
  return function (t) {
    if (this.__l) {
      var n = this.__l[t.type + e];
      if (t.u == null) t.u = Pu++;
      else if (t.u < n.l) return;
      return n(Z.event ? Z.event(t) : t);
    }
  };
}
function vu(e, t, n, r, i, a, o, s, c, l, u) {
  var d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    ee,
    O,
    k,
    A,
    j = t.type;
  if (t.constructor != null) return null;
  (128 & n.__u &&
    ((c = !!(32 & n.__u)),
    n.__c.__z && ((s = t.__e = n.__e = (a = n.__c.__z)[0]), (n.__c.__z = null))),
    (d = Z.__b) && d(t));
  n: if (typeof j == `function`)
    try {
      if (
        ((v = t.props),
        (y = `prototype` in j && j.prototype.render),
        (b = (d = j.contextType) && r[d.__c]),
        (x = d ? (b ? b.props.value : d.__) : r),
        n.__c
          ? 2 & (f = t.__c = n.__c).__g && ((f.__g |= 1), (_ = !0))
          : (y
              ? (t.__c = f = new j(v, x))
              : ((t.__c = f = new ou(v, x)), (f.constructor = j), (f.render = Tu)),
            b && b.sub(f),
            (f.props = v),
            (f.state ||= {}),
            (f.context = x),
            (f.__n = r),
            (p = !0),
            (f.__g |= 8),
            (f.__h = []),
            (f._sb = [])),
        y && f.__s == null && (f.__s = f.state),
        y &&
          j.getDerivedStateFromProps != null &&
          (f.__s == f.state && (f.__s = Vu({}, f.__s)),
          Vu(f.__s, j.getDerivedStateFromProps(v, f.__s))),
        (m = f.props),
        (h = f.state),
        (f.__v = t),
        p)
      )
        (y &&
          j.getDerivedStateFromProps == null &&
          f.componentWillMount != null &&
          f.componentWillMount(),
          y && f.componentDidMount != null && f.__h.push(f.componentDidMount));
      else {
        if (
          (y &&
            j.getDerivedStateFromProps == null &&
            v !== m &&
            f.componentWillReceiveProps != null &&
            f.componentWillReceiveProps(v, x),
          (!(4 & f.__g) &&
            f.shouldComponentUpdate != null &&
            !1 === f.shouldComponentUpdate(v, f.__s, x)) ||
            t.__v == n.__v)
        ) {
          for (
            t.__v != n.__v && ((f.props = v), (f.state = f.__s), (f.__g &= -9)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.some(function (e) {
                e && (e.__ = t);
              }),
              S = 0;
            S < f._sb.length;
            S++
          )
            f.__h.push(f._sb[S]);
          ((f._sb = []), f.__h.length && o.push(f));
          break n;
        }
        (f.componentWillUpdate != null && f.componentWillUpdate(v, f.__s, x),
          y &&
            f.componentDidUpdate != null &&
            f.__h.push(function () {
              f.componentDidUpdate(m, h, g);
            }));
      }
      if (((f.context = x), (f.props = v), (f.__P = e), (f.__g &= -5), (C = Z.__r), (w = 0), y)) {
        for (
          f.state = f.__s, f.__g &= -9, C && C(t), d = f.render(f.props, f.state, f.context), T = 0;
          T < f._sb.length;
          T++
        )
          f.__h.push(f._sb[T]);
        f._sb = [];
      } else
        do
          ((f.__g &= -9),
            C && C(t),
            (d = f.render(f.props, f.state, f.context)),
            (f.state = f.__s));
        while (8 & f.__g && ++w < 25);
      ((f.state = f.__s),
        f.getChildContext != null && (r = Vu({}, r, f.getChildContext())),
        y && !p && f.getSnapshotBeforeUpdate != null && (g = f.getSnapshotBeforeUpdate(m, h)),
        (E = d),
        d != null && d.type === au && d.key == null && (E = xu(d.props.children)),
        (s = du(e, zu(E) ? E : [E], t, n, r, i, a, o, s, c, l, u)),
        (t.__u &= -161),
        f.__h.length && o.push(f),
        _ && (f.__g &= -4));
    } catch (e) {
      if (((t.__v = null), c || a != null))
        if (e.then) {
          for (D = 0, ee = !1, t.__u |= c ? 160 : 128, t.__c.__z = [], O = 0; O < a.length; O++)
            (k = a[O]) == null ||
              ee ||
              (k.nodeType == 8 && k.data == `$s`
                ? (D > 0 && t.__c.__z.push(k), D++, (a[O] = null))
                : k.nodeType == 8 && k.data == `/$s`
                  ? (--D > 0 && t.__c.__z.push(k), (ee = D === 0), (s = a[O]), (a[O] = null))
                  : D > 0 && (t.__c.__z.push(k), (a[O] = null)));
          if (!ee) {
            for (; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
            ((a[a.indexOf(s)] = null), (t.__c.__z = [s]));
          }
          t.__e = s;
        } else {
          for (A = a.length; A--;) nu(a[A]);
          yu(t);
        }
      else ((t.__e = n.__e), (t.__k = n.__k), e.then || yu(t));
      Z.__e(e, t, n);
    }
  else s = t.__e = Su(n.__e, t, n, r, i, a, o, c, l, u);
  return ((d = Z.diffed) && d(t), 128 & t.__u ? void 0 : s);
}
function yu(e) {
  (e && e.__c && (e.__c.__g |= 4), e && e.__k && e.__k.forEach(yu));
}
function bu(e, t, n) {
  for (var r = 0; r < n.length; r++) Cu(n[r], n[++r], n[++r]);
  (Z.__c && Z.__c(t, e),
    e.some(function (t) {
      try {
        ((e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          }));
      } catch (e) {
        Z.__e(e, t.__v);
      }
    }));
}
function xu(e) {
  return typeof e != `object` || !e || (e.__b && e.__b > 0) ? e : zu(e) ? e.map(xu) : Vu({}, e);
}
function Su(e, t, n, r, i, a, o, s, c, l) {
  var u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v = n.props,
    y = t.props,
    b = t.type;
  if (
    (b == `svg`
      ? (i = `http://www.w3.org/2000/svg`)
      : b == `math`
        ? (i = `http://www.w3.org/1998/Math/MathML`)
        : (i ||= `http://www.w3.org/1999/xhtml`),
    a != null)
  ) {
    for (u = 0; u < a.length; u++)
      if ((m = a[u]) && `setAttribute` in m == !!b && (b ? m.localName == b : m.nodeType == 3)) {
        ((e = m), (a[u] = null));
        break;
      }
  }
  if (e == null) {
    if (b == null) return l.createTextNode(y);
    ((e = l.createElementNS(i, b, y.is && y)), (s &&= (Z.__m && Z.__m(t, a), !1)), (a = null));
  }
  if (b == null) v === y || (s && e.data == y) || (e.data = y);
  else {
    if (((a &&= Bu.call(e.childNodes)), (v = n.props || Lu), !s && a != null))
      for (v = {}, u = 0; u < e.attributes.length; u++) v[(m = e.attributes[u]).name] = m.value;
    for (u in v)
      if (((m = v[u]), u != `children`)) {
        if (u == `dangerouslySetInnerHTML`) f = m;
        else if (!(u in y)) {
          if ((u == `value` && `defaultValue` in y) || (u == `checked` && `defaultChecked` in y))
            continue;
          gu(e, u, null, m, i);
        }
      }
    for (u in ((_ = 1 & n.__u), y))
      ((m = y[u]),
        u == `children`
          ? (p = m)
          : u == `dangerouslySetInnerHTML`
            ? (d = m)
            : u == `value`
              ? (h = m)
              : u == `checked`
                ? (g = m)
                : (s && typeof m != `function`) || (v[u] === m && !_) || gu(e, u, m, v[u], i));
    if (d)
      (s || (f && (d.__html == f.__html || d.__html == e.innerHTML)) || (e.innerHTML = d.__html),
        (t.__k = []));
    else if (
      (f && (e.innerHTML = ``),
      du(
        b == `template` ? e.content : e,
        zu(p) ? p : [p],
        t,
        n,
        r,
        b == `foreignObject` ? `http://www.w3.org/1999/xhtml` : i,
        a,
        o,
        a ? a[0] : n.__k && su(n, 0),
        s,
        c,
        l,
      ),
      a != null)
    )
      for (u = a.length; u--;) nu(a[u]);
    s ||
      ((u = `value`),
      b == `progress` && h == null
        ? e.removeAttribute(`value`)
        : h == null || (h === e[u] && (b !== `progress` || h)) || gu(e, u, h, v[u], i),
      (u = `checked`),
      g != null && g != e[u] && gu(e, u, g, v[u], i));
  }
  return e;
}
function Cu(e, t, n) {
  try {
    if (typeof e == `function`) {
      var r = typeof e.__u == `function`;
      (r && e.__u(), (r && t == null) || (e.__u = e(t)));
    } else e.current = t;
  } catch (e) {
    Z.__e(e, n);
  }
}
function wu(e, t, n) {
  var r, i;
  if (
    (Z.unmount && Z.unmount(e),
    (r = e.ref) && ((r.current && r.current != e.__e) || Cu(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (e) {
        Z.__e(e, t);
      }
    r.__P = null;
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++) r[i] && wu(r[i], t, n || typeof e.type != `function`);
  (n || nu(e.__e), e.__e && e.__e.__l && (e.__e.__l = null), (e.__e = e.__c = e.__ = null));
}
function Tu(e, t, n) {
  return this.constructor(e, n);
}
function Eu(e, t) {
  var n, r, i, a;
  (t == document && (t = document.documentElement),
    Z.__ && Z.__(e, t),
    (r = (n = !!(e && 32 & e.__u)) ? null : t.__k),
    (e = t.__k = ru(au, null, [e])),
    (i = []),
    (a = []),
    vu(
      t,
      e,
      r || Lu,
      Lu,
      t.namespaceURI,
      r ? null : t.firstChild ? Bu.call(t.childNodes) : null,
      i,
      r ? r.__e : t.firstChild,
      n,
      a,
      t.ownerDocument,
    ),
    bu(i, e, a));
}
function Du(e, t) {
  ((e.__u |= 32), Eu(e, t));
}
var Z,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu = e(() => {
    ((Lu = {}),
      (Ru = []),
      (zu = Array.isArray),
      (Bu = Ru.slice),
      (Vu = Object.assign),
      (Z = {
        __e: function (e, t, n, r) {
          for (var i, a, o; (t = t.__);)
            if ((i = t.__c) && !(1 & i.__g)) {
              i.__g |= 4;
              try {
                if (
                  ((a = i.constructor) &&
                    a.getDerivedStateFromError != null &&
                    (i.setState(a.getDerivedStateFromError(e)), (o = 8 & i.__g)),
                  i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), (o = 8 & i.__g)),
                  o)
                )
                  return void (i.__g |= 2);
              } catch (t) {
                e = t;
              }
            }
          throw ((ju = 0), e);
        },
      }),
      (Ou = 0),
      (ou.prototype.setState = function (e, t) {
        var n =
          this.__s != null && this.__s != this.state ? this.__s : (this.__s = Vu({}, this.state));
        (typeof e == `function` && (e = e(Vu({}, n), this.props)),
          e && Vu(n, e),
          e != null && this.__v && (t && this._sb.push(t), lu(this)));
      }),
      (ou.prototype.forceUpdate = function (e) {
        this.__v && ((this.__g |= 4), e && this.__h.push(e), lu(this));
      }),
      (ou.prototype.render = au),
      (ku = []),
      (ju = 0),
      (Mu = function (e, t) {
        return e.__v.__b - t.__v.__b;
      }),
      (Nu = /(PointerCapture)$|Capture$/i),
      (Pu = 0),
      (Fu = _u(!1)),
      (Iu = _u(!0)));
  });
function Q(e, t, n, r, i, a) {
  t ||= {};
  var o,
    s,
    c = t;
  if (`ref` in c && typeof e != `function`)
    for (s in ((c = {}), t)) s == `ref` ? (o = t[s]) : (c[s] = t[s]);
  var l = {
    type: e,
    props: c,
    key: n,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Uu,
    __i: -1,
    __u: 0,
    __source: i,
    __self: a,
  };
  return (Z.vnode && Z.vnode(l), l);
}
var Uu,
  Wu = e(() => {
    (Hu(), (Uu = 0), Array.isArray);
  });
function Gu({
  name: e,
  remappedFrom: t,
  token: n,
  width: r,
  height: i,
  viewBox: a,
  label: o,
  alignCapitals: s = !1,
}) {
  "use no memo";
  let c = `#${e.replace(/^#/, ``)}`,
    { width: l, height: u, viewBox: d } = Ju[e] ?? { width: Ku, height: qu },
    f = r ?? l,
    p = i ?? u,
    m = a ?? d ?? `0 0 ${l} ${u}`,
    h = o == null ? { "aria-hidden": !0 } : { "aria-label": o, role: `img` };
  return Q(`svg`, {
    "data-icon-name": t ?? e,
    "data-icon-token": n,
    "data-align-capitals": s,
    ...h,
    viewBox: m,
    width: f,
    height: p,
    children: Q(`use`, { href: c }),
  });
}
var Ku,
  qu,
  Ju,
  Yu = e(() => {
    (Wu(), (Ku = 16), (qu = 16), (Ju = {}));
  });
function Xu({ children: e, marker: t, variant: n = `default` }) {
  "use no memo";
  let r = n === `fade`;
  return Q(`div`, {
    "aria-hidden": !0,
    "data-truncate-marker-cell": !0,
    children: Q(`div`, {
      "data-truncate-marker": !0,
      children:
        typeof t == `function`
          ? t({ children: e })
          : r
            ? Q(`span`, { "data-truncate-fade": !0 })
            : t,
    }),
  });
}
function Zu(e) {
  "use no memo";
  let { mode: t, children: n } = e;
  return Q(`div`, {
    children: [
      Q(`div`, {
        "data-truncate-content": `visible`,
        children: t === `fruncate` ? Q(`span`, { children: n }) : n,
      }),
      Q(`div`, {
        "data-truncate-content": `overflow`,
        "aria-hidden": !0,
        children: t === `fruncate` ? Q(`span`, { children: n }) : n,
      }),
    ],
  });
}
function Qu({ children: e, mode: t = `truncate`, marker: n = `…`, variant: r = `default`, ...i }) {
  "use no memo";
  let a = Q(Zu, { mode: t, children: e }, `content`),
    o = Q(Xu, { marker: n, mode: t, variant: r }, `marker`),
    s = Q(`div`, { "data-truncate-fill": !0 }, `fill`);
  return Q(`div`, {
    "data-truncate-container": t,
    "data-truncate-variant": r,
    ...i,
    children: Q(`div`, {
      "data-truncate-grid": !0,
      children: t === `truncate` ? [a, o] : [o, a, s],
    }),
  });
}
function $u({ children: e, ...t }) {
  "use no memo";
  return Q(Qu, { mode: `truncate`, ...t, children: e });
}
function ed({ children: e, ...t }) {
  "use no memo";
  return Q(Qu, { mode: `fruncate`, ...t, children: e });
}
function td({
  children: e,
  contents: t,
  priority: n = `end`,
  split: r = `center`,
  minimumLength: i = 12,
  className: a,
  style: o,
  ...s
}) {
  "use no memo";
  let c = null,
    l = null;
  if (Array.isArray(t)) {
    if (t.length !== 2)
      return (console.error(`MiddleTruncate: contents must be an array of two items`), null);
    ((c = Q($u, { ...s, children: t[0] })), (l = Q(ed, { ...s, children: t[1] })));
  } else {
    if (typeof e != `string`)
      return (console.error(`MiddleTruncate: children must be a string`), null);
    if (e.length === 0) return Q(`div`, { className: a, style: o });
    if (e.length < i)
      return Q(n === `end` ? ed : $u, { ...s, className: a, style: o, children: e });
    let t = null,
      u = null,
      d = null;
    if (typeof r == `string`)
      r === `center` ? (t = nd) : r === `extension` ? (t = rd) : r === `leaf-path` && (t = id);
    else if (typeof r == `number`) ((t = ad), (u = r));
    else if (Array.isArray(r)) {
      let [e, n] = r;
      ((d = n), e === `last` ? (t = od) : e === `first` && (t = sd));
    } else typeof r == `function` && (t = r);
    t ??= nd;
    let [f, p] = t(e, {
        priority: n,
        variant: s.variant,
        splitIndex: typeof u == `number` ? u : void 0,
        splitOffset: typeof d == `number` ? d : void 0,
      }),
      m = f.length >= p.length,
      h = n === `equal` && !m,
      g = n === `equal` && m,
      _ = {},
      v = {};
    (h && (_.marker = ``),
      g && (v.marker = ``),
      (c = Q($u, { ...s, ..._, children: f })),
      (l = Q(ed, { ...s, ...v, children: p })));
  }
  return Q(`div`, {
    "data-truncate-group-container": `middle`,
    className: a,
    style: o,
    children: [
      Q(`div`, {
        "data-truncate-segment-priority": n === `start` || n === `equal` ? `1` : `2`,
        children: c,
      }),
      Q(`div`, {
        "data-truncate-segment-priority": n === `end` || n === `equal` ? `1` : `2`,
        children: l,
      }),
    ],
  });
}
var nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd = e(() => {
    (Wu(),
      (nd = (e) => {
        if (e.length < 2) return [e, ``];
        let t = Math.ceil(e.length / 2);
        return [e.slice(0, t), e.slice(t)];
      }),
      (rd = (e) => {
        if (e.length < 4) return [e, ``];
        let t = e.lastIndexOf(`.`) + 1,
          n = e.length - t > 10,
          r = t >= 1 && !n ? t : Math.ceil(e.length / 2);
        return [e.slice(0, r), e.slice(r)];
      }),
      (id = (e) => {
        if (e.length < 4) return [e, ``];
        let t = e.lastIndexOf(`/`) + 1,
          n = e.length - t > 25,
          r = t >= 1 && !n ? t : Math.ceil(e.length / 2);
        return [e.slice(0, r), e.slice(r)];
      }),
      (ad = (e, { splitIndex: t } = {}) => {
        if (typeof t != `number`) {
          let t = Math.ceil(e.length / 2);
          return [e.slice(0, t), e.slice(t)];
        }
        return [e.slice(0, t), e.slice(t)];
      }),
      (od = (e, { splitOffset: t } = {}) => {
        if (typeof t != `number` || t <= 0 || t >= e.length) {
          let t = Math.ceil(e.length / 2);
          return [e.slice(0, t), e.slice(t)];
        }
        let n = e.length - t;
        return [e.slice(0, n), e.slice(n)];
      }),
      (sd = (e, { splitOffset: t } = {}) => {
        if (typeof t != `number` || t <= 0 || t >= e.length) {
          let t = Math.ceil(e.length / 2);
          return [e.slice(0, t), e.slice(t)];
        }
        let n = t;
        return [e.slice(0, n), e.slice(n)];
      }));
  });
function ld(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function ud(e, t) {
  return e < 0 || t < e ? bd : { endIndex: t, startIndex: e };
}
function dd(e) {
  return e.startIndex < 0 || e.endIndex < e.startIndex;
}
function fd(e, t) {
  return dd(e) ? 0 : (e.endIndex - e.startIndex + 1) * t;
}
function pd(e, t, n) {
  if (t <= 0) return -1;
  let r = t * n;
  return e <= 0 ? 0 : e >= r ? t : Math.floor(e / n);
}
function md(e, t, n) {
  return t <= 0 || e <= 0 ? -1 : e >= t * n ? t - 1 : Math.ceil(e / n) - 1;
}
function hd(e) {
  let t = new Map();
  return (
    e.forEach((e, n) => {
      if (e.kind !== `directory` || !e.isExpanded) return;
      let r = e.ancestorPaths.length,
        i = t.get(r);
      if (i == null) {
        t.set(r, [n]);
        return;
      }
      i.push(n);
    }),
    t
  );
}
function gd(e, t) {
  let n = 0,
    r = e.length - 1,
    i = -1;
  for (; n <= r;) {
    let a = Math.floor((n + r) / 2),
      o = e[a];
    if (o == null) break;
    if (o <= t) {
      ((i = a), (n = a + 1));
      continue;
    }
    r = a - 1;
  }
  return i;
}
function _d(e) {
  let t = new Map(),
    n = [];
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (i == null) continue;
    let a = i.kind === `directory` && i.isExpanded ? [...i.ancestorPaths, i.path] : i.ancestorPaths,
      o = 0;
    for (; o < n.length && o < a.length && n[o] === a[o];) o += 1;
    for (let e = n.length - 1; e >= o; --e) {
      let i = n[e];
      i != null && t.set(i, r - 1);
    }
    n.length = o;
    for (let e = o; e < a.length; e += 1) {
      let t = a[e];
      t != null && n.push(t);
    }
  }
  let r = e.length - 1;
  for (let e of n) t.set(e, r);
  return t;
}
function vd(e, t, n) {
  if (e.length === 0 || t <= 0) return [];
  let r = _d(e),
    i = hd(e),
    a = [];
  for (let r = 0; r < e.length; r += 1) {
    let o = i.get(r);
    if (o == null || o.length === 0) break;
    let s = t + r * n,
      c = gd(o, Math.min(e.length - 1, Math.floor(s / n))),
      l = null;
    for (; c >= 0;) {
      let t = o[c],
        n = t == null ? null : (e[t] ?? null);
      if (n != null && (r === 0 || n.ancestorPaths[r - 1] === a[r - 1]?.path)) {
        l = n;
        break;
      }
      --c;
    }
    if (l == null) break;
    a.push(l);
  }
  return a
    .map((i, a) => {
      let o = a * n,
        s = (r.get(i.path) ?? e.length - 1) + 1;
      if (s >= e.length) return { row: i, top: o };
      let c = s * n - t;
      return { row: i, top: Math.min(o, c - n) };
    })
    .filter((e) => e.top + n > 0);
}
function yd(e, t) {
  let n = t.totalRowCount ?? e.length,
    r = n * t.itemHeight,
    i = Math.max(0, t.viewportHeight),
    a = Math.max(0, Math.floor(t.overscan)),
    o = Math.max(0, r - i),
    s = ld(t.scrollTop, 0, o),
    c = t.stickyRows ?? vd(e, s, t.itemHeight),
    l = c.reduce((e, n) => Math.max(e, n.top + t.itemHeight), 0),
    u = Math.min(r, s + l),
    d = Math.max(0, i - l),
    f = Math.max(0, r - u),
    p = pd(s, n, t.itemHeight),
    m = pd(u, n, t.itemHeight),
    h = l <= 0 || p < 0 || p >= n ? -1 : p,
    g = h === -1 ? -1 : Math.min(n - 1, m - 1),
    _ = h === -1 || g < h ? 0 : g - h + 1,
    v = d <= 0 || m >= n ? bd : ud(m, md(u + d, n, t.itemHeight)),
    y = g + 1,
    b = dd(v) ? bd : ud(Math.max(y, v.startIndex - a), Math.min(n - 1, v.endIndex + a)),
    x = fd(b, t.itemHeight);
  return {
    occlusion: { firstOccludedIndex: h, lastOccludedIndex: g, occludedCount: _ },
    physical: {
      itemHeight: t.itemHeight,
      maxScrollTop: o,
      overscan: a,
      scrollTop: s,
      totalHeight: r,
      totalRowCount: n,
      viewportHeight: i,
    },
    projected: { contentHeight: f, paneHeight: d, paneTop: u },
    sticky: { height: l, rows: c },
    visible: v,
    window: {
      endIndex: b.endIndex,
      height: x,
      offsetTop: dd(b) ? 0 : b.startIndex * t.itemHeight,
      startIndex: b.startIndex,
    },
  };
}
var bd,
  xd = e(() => {
    bd = { endIndex: -1, startIndex: -1 };
  }),
  Sd,
  Cd,
  wd,
  Td = e(() => {
    ((Sd = {
      added: `A`,
      deleted: `D`,
      ignored: null,
      modified: `M`,
      renamed: `R`,
      untracked: `U`,
    }),
      (Cd = {
        added: `Git status: added`,
        deleted: `Git status: deleted`,
        ignored: `Git status: ignored`,
        modified: `Git status: modified`,
        renamed: `Git status: renamed`,
        untracked: `Git status: untracked`,
      }),
      (wd = `Contains git status items`));
  });
function Ed(e) {
  let {
    currentScrollTop: t,
    focusedIndex: n,
    itemHeight: r,
    topInset: i = 0,
    viewportHeight: a,
  } = e;
  if (n < 0) return null;
  let o = Math.max(0, i),
    s = n * r,
    c = s + r;
  if (s < t + o) {
    let e = Math.max(0, s - o);
    return e === t ? null : e;
  }
  if (c > t + a) {
    let e = c - a;
    return e === t ? null : e;
  }
  return null;
}
function Dd(e) {
  let {
    currentScrollTop: t,
    focusedIndex: n,
    itemHeight: r,
    offset: i,
    topInset: a = 0,
    totalHeight: o,
    viewportHeight: s,
  } = e;
  if (i === `nearest`)
    return Ed({
      currentScrollTop: t,
      focusedIndex: n,
      itemHeight: r,
      topInset: a,
      viewportHeight: s,
    });
  if (n < 0) return null;
  let c = Math.max(0, a),
    l = n * r,
    u = Math.max(0, s - c),
    d = i === `center` ? c + Math.max(0, (u - r) / 2) : c,
    f = Math.max(0, o - s),
    p = Math.max(0, Math.min(l - d, f));
  return p === t ? null : p;
}
function Od(e) {
  let {
    currentScrollTop: t,
    focusedIndex: n,
    itemHeight: r,
    targetViewportOffset: i,
    totalHeight: a,
    viewportHeight: o,
  } = e;
  if (n < 0) return null;
  let s = Math.max(0, i),
    c = n * r,
    l = c + r,
    u = t + s,
    d = t + o;
  if (c >= u && l <= d) return null;
  let f = Math.max(0, a - o),
    p = Math.max(0, Math.min(c - s, f));
  return p === t ? null : p;
}
var kd = e(() => {});
function Ad(e) {
  if (e == null || !e.isConnected || e === document.body || e === document.documentElement)
    return !1;
  e.focus({ preventScroll: !0 });
  let t = e.getRootNode();
  return t instanceof ShadowRoot ? t.activeElement === e : document.activeElement === e;
}
function jd(e) {
  let t = e.getRootNode();
  if (t instanceof ShadowRoot) {
    let e = t.activeElement;
    return e instanceof HTMLElement ? e : null;
  }
  let n = document.activeElement;
  return n instanceof HTMLElement && e.contains(n) ? n : null;
}
function Md(e, t) {
  if (e == null) return t;
  let n = e.getBoundingClientRect().height;
  return n > 0 ? n : e.clientHeight > 0 ? e.clientHeight : t;
}
function Nd(e, t) {
  return e != null && e > 0 ? e : t;
}
function Pd(e) {
  let t = e.borderBoxSize,
    n = Array.isArray(t) ? t[0] : t;
  return n != null && Number.isFinite(n.blockSize) && n.blockSize > 0
    ? n.blockSize
    : e.contentRect.height > 0
      ? e.contentRect.height
      : null;
}
function Fd(e, t, n, r, i = 0) {
  let a = Ed({
    currentScrollTop: e.scrollTop,
    focusedIndex: t,
    itemHeight: n,
    topInset: i,
    viewportHeight: r,
  });
  return a == null ? !1 : ((e.scrollTop = a), !0);
}
function Id(e, t, n, r, i, a, o = 0) {
  let s = Dd({
    currentScrollTop: e.scrollTop,
    focusedIndex: t,
    itemHeight: n,
    offset: a,
    topInset: o,
    totalHeight: i,
    viewportHeight: r,
  });
  return s == null ? !1 : ((e.scrollTop = s), !0);
}
function Ld(e, t, n, r, i, a) {
  let o = Od({
    currentScrollTop: e.scrollTop,
    focusedIndex: t,
    itemHeight: n,
    targetViewportOffset: a,
    totalHeight: i,
    viewportHeight: r,
  });
  return o == null ? !1 : ((e.scrollTop = o), !0);
}
function Rd(e, t, n, r) {
  return n.end < n.start ? null : e < n.start ? -t : e > n.end ? r : null;
}
var zd = e(() => {
  kd();
});
function Bd(e) {
  let { renamingPath: t, previousRenamingPath: n, hasRenderedInput: r } = e;
  return t == null ? `reset` : r ? (n === t ? `ignore` : `focus-input`) : `reveal-canonical`;
}
var Vd = e(() => {});
function Hd({ ariaLabel: e, isFlattened: t = !1, ref: n, value: r, onBlur: i, onInput: a }) {
  return Q(`input`, {
    ref: n,
    "data-item-rename-input": !0,
    ...(t ? { "data-item-flattened-rename-input": !0 } : {}),
    "aria-label": e,
    value: r,
    onBlur: i,
    onInput: a,
    onClick: (e) => e.stopPropagation(),
    onMouseDown: (e) => e.stopPropagation(),
    onPointerDown: (e) => e.stopPropagation(),
  });
}
var Ud = e(() => {
  Wu();
});
function Wd(e) {
  let {
      row: t,
      mode: n,
      targetPath: r,
      ariaLabel: i,
      domId: a,
      isParked: o,
      itemHeight: s,
      features: c,
      state: l,
      extraStyle: u,
    } = e,
    d = n === `sticky`,
    f = t.ancestorPaths.at(-1) ?? ``,
    p = {};
  return (
    l.isFocusRinged && (p[`data-item-focused`] = !0),
    t.isSelected && (p[`data-item-selected`] = !0),
    l.isContextHovered && (p[`data-item-context-hover`] = `true`),
    l.isDragTarget && (p[`data-item-drag-target`] = !0),
    l.isDragging && (p[`data-item-dragging`] = !0),
    l.effectiveGitStatus != null && (p[`data-item-git-status`] = l.effectiveGitStatus),
    l.containsGitChange && (p[`data-item-contains-git-change`] = `true`),
    {
      "aria-expanded": !d && t.kind === `directory` ? t.isExpanded : void 0,
      "aria-haspopup": c.contextMenuEnabled ? `menu` : void 0,
      "aria-label": i,
      "aria-level": d ? void 0 : t.level + 1,
      "aria-posinset": d ? void 0 : t.posInSet + 1,
      "aria-selected": d ? void 0 : t.isSelected ? `true` : `false`,
      "aria-setsize": d ? void 0 : t.setSize,
      "data-file-tree-sticky-path": d ? r : void 0,
      "data-file-tree-sticky-row": d ? `true` : void 0,
      "data-item-context-menu-button-visibility": c.actionLaneEnabled
        ? c.contextMenuButtonVisibility
        : void 0,
      "data-item-context-menu-trigger-mode": c.contextMenuEnabled
        ? c.contextMenuTriggerMode
        : void 0,
      "data-item-has-context-menu-action-lane": c.actionLaneEnabled ? `true` : void 0,
      "data-item-has-git-lane": c.gitLaneActive ? `true` : void 0,
      "data-item-parent-path": f.length > 0 ? f : void 0,
      "data-item-parked": o ? `true` : void 0,
      "data-item-path": r,
      "data-item-type": t.kind === `directory` ? `folder` : `file`,
      "data-type": `item`,
      id: d ? void 0 : a,
      role: d ? void 0 : `treeitem`,
      style: { minHeight: `${s}px`, ...u },
      tabIndex: !d && t.isFocused ? 0 : -1,
      ...p,
    }
  );
}
var Gd = e(() => {});
function Kd(e) {
  let { event: t, mode: n, isSearchOpen: r, isDirectory: i } = e,
    a = t.ctrlKey || t.metaKey,
    o = t.shiftKey || a,
    s = t.shiftKey ? { additive: a, kind: `range` } : a ? { kind: `toggle` } : { kind: `single` };
  return {
    closeSearch: r,
    revealCanonical: n === `sticky`,
    selection: s,
    toggleDirectory: !o && i,
  };
}
var qd = e(() => {});
function Jd(e, t) {
  (hf.__h && hf.__h(lf, e, pf || t), (pf = 0));
  var n = (lf.__H ||= { __: [], __h: [] });
  return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function Yd(e) {
  return ((pf = 1), Xd(sf, e));
}
function Xd(e, t, n) {
  var r = Jd(cf++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : sf(void 0, t),
        function (e) {
          var t = r.__N ? r.__N[0] : r.__[0],
            n = r.t(t, e);
          ff(t, n) || ((r.__N = [n, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = lf),
      !lf.__f))
  ) {
    var i = function (e, t, n) {
      if (!r.__c.__H) return !0;
      var i = r.__c.__H.__.filter(function (e) {
        return !!e.__c;
      });
      if (
        i.every(function (e) {
          return !e.__N;
        })
      )
        return !a || a.call(this, e, t, n);
      var o = r.__c.props !== e;
      return (
        i.forEach(function (e) {
          if (e.__N) {
            var t = e.__[0];
            ((e.__ = e.__N), (e.__N = void 0), ff(t, e.__[0]) || (o = !0));
          }
        }),
        (a && a.call(this, e, t, n)) || o
      );
    };
    lf.__f = !0;
    var a = lf.shouldComponentUpdate,
      o = lf.componentWillUpdate;
    ((lf.componentWillUpdate = function (e, t, n) {
      if (4 & this.__g) {
        var r = a;
        ((a = void 0), i(e, t, n), (a = r));
      }
      o && o.call(this, e, t, n);
    }),
      (lf.shouldComponentUpdate = i));
  }
  return r.__N || r.__;
}
function Zd(e, t) {
  var n = Jd(cf++, 3);
  !hf.__s && of(n.__H, t) && ((n.__ = e), (n.u = t), lf.__H.__h.push(n));
}
function Qd(e, t) {
  var n = Jd(cf++, 4);
  !hf.__s && of(n.__H, t) && ((n.__ = e), (n.u = t), lf.__h.push(n));
}
function $(e) {
  return (
    (pf = 5),
    $d(function () {
      return { current: e };
    }, [])
  );
}
function $d(e, t) {
  var n = Jd(cf++, 7);
  return (of(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__);
}
function ef(e, t) {
  return (
    (pf = 8),
    $d(function () {
      return e;
    }, t)
  );
}
function tf() {
  for (var e; (e = mf.shift());)
    if (e.__P && e.__H)
      try {
        (e.__H.__h.forEach(rf), e.__H.__h.forEach(af), (e.__H.__h = []));
      } catch (t) {
        ((e.__H.__h = []), hf.__e(t, e.__v));
      }
}
function nf(e) {
  var t,
    n = function () {
      (clearTimeout(r), Sf && cancelAnimationFrame(t), setTimeout(e));
    },
    r = setTimeout(n, 35);
  Sf && (t = requestAnimationFrame(n));
}
function rf(e) {
  var t = lf,
    n = e.__c;
  (typeof n == `function` && ((e.__c = void 0), n()), (lf = t));
}
function af(e) {
  var t = lf;
  ((e.__c = e.__()), (lf = t));
}
function of(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return !ff(t, e[n]);
    })
  );
}
function sf(e, t) {
  return typeof t == `function` ? t(e) : t;
}
var cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf = e(() => {
    (Hu(),
      (ff = Object.is),
      (pf = 0),
      (mf = []),
      (hf = Z),
      (gf = hf.__b),
      (_f = hf.__r),
      (vf = hf.diffed),
      (yf = hf.__c),
      (bf = hf.unmount),
      (xf = hf.__),
      (hf.__b = function (e) {
        ((lf = null), gf && gf(e));
      }),
      (hf.__ = function (e, t) {
        (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), xf && xf(e, t));
      }),
      (hf.__r = function (e) {
        (_f && _f(e), (cf = 0));
        var t = (lf = e.__c).__H;
        (t &&
          (uf === lf
            ? ((t.__h = []),
              (lf.__h = []),
              t.__.forEach(function (e) {
                (e.__N && (e.__ = e.__N), (e.u = e.__N = void 0));
              }))
            : (t.__h.forEach(rf), t.__h.forEach(af), (t.__h = []), (cf = 0))),
          (uf = lf));
      }),
      (hf.diffed = function (e) {
        vf && vf(e);
        var t = e.__c;
        (t &&
          t.__H &&
          (t.__H.__h.length &&
            ((mf.push(t) !== 1 && df === hf.requestAnimationFrame) ||
              ((df = hf.requestAnimationFrame) || nf)(tf)),
          t.__H.__.forEach(function (e) {
            (e.u && (e.__H = e.u), (e.u = void 0));
          })),
          (uf = lf = null));
      }),
      (hf.__c = function (e, t) {
        (t.some(function (e) {
          try {
            (e.__h.forEach(rf),
              (e.__h = e.__h.filter(function (e) {
                return !e.__ || af(e);
              })));
          } catch (n) {
            (t.some(function (e) {
              e.__h &&= [];
            }),
              (t = []),
              hf.__e(n, e.__v));
          }
        }),
          yf && yf(e, t));
      }),
      (hf.unmount = function (e) {
        bf && bf(e);
        var t,
          n = e.__c;
        n &&
          n.__H &&
          (n.__H.__.forEach(function (e) {
            try {
              rf(e);
            } catch (e) {
              t = e;
            }
          }),
          (n.__H = void 0),
          t && hf.__e(t, n.__v));
      }),
      (Sf = typeof requestAnimationFrame == `function`));
  });
function wf(e, t = null, n = null) {
  "use no memo";
  let r = e.flattenedSegments;
  return r == null || r.length === 0
    ? (t ?? e.name)
    : Q(`span`, {
        "data-item-flattened-subitems": !0,
        children: r.map((e, i) => {
          let a = i === r.length - 1;
          return Q(
            au,
            {
              children: [
                Q(`span`, {
                  "data-item-flattened-subitem": e.path,
                  "data-item-flattened-subitem-drag-target": n === e.path ? `true` : void 0,
                  children: a && t != null ? t : Q($u, { children: e.name }),
                }),
                i < r.length - 1 ? ` / ` : ``,
              ],
            },
            e.path,
          );
        }),
      });
}
function Tf(e) {
  return e.isFlattened
    ? (e.flattenedSegments?.findLast((e) => e.isTerminal)?.path ?? e.path)
    : e.path;
}
function Ef(e) {
  let t = e.flattenedSegments;
  return t == null || t.length === 0 ? e.name : t.map((e) => e.name).join(` / `);
}
function Df(e, t, n, r) {
  return e
    .map((e, i) => {
      let a = i * n,
        o = e.subtreeEndIndex + 1;
      if (o >= r) return { row: e.row, top: a };
      let s = o * n - t;
      return { row: e.row, top: Math.min(a, s - n) };
    })
    .filter((e) => e.top + n > 0);
}
function Of({
  controller: e,
  itemHeight: t,
  overscan: n,
  scrollTop: r,
  stickyFolders: i,
  viewportHeight: a,
}) {
  let o = e.getVisibleCount(),
    s = i && o > 0 ? e.getStickyRowCandidates(r, t) : [],
    c = s == null && i && o > 0 ? e.getVisibleRows(0, o - 1) : [],
    l = yd(c, {
      itemHeight: t,
      overscan: n,
      scrollTop: r,
      stickyRows: s == null ? void 0 : Df(s, r, t, o),
      totalRowCount: o,
      viewportHeight: a,
    }),
    u = i && r <= 0 && o > 0 ? e.getStickyRowCandidates(1, t) : [],
    d =
      u != null && r <= 0
        ? Df(u, 1, t, o)
        : i && r <= 0 && c.length > 0
          ? vd(c, 1, t)
          : l.sticky.rows;
  return {
    overlayHeight: d.reduce((e, n) => Math.max(e, n.top + t), 0),
    overlayRows: d,
    snapshot: l,
    visibleRows: c,
  };
}
function kf(e, t, n) {
  let r = e,
    i = document.elementFromPoint?.bind(document) ?? null,
    a = r.elementFromPoint?.(t, n) ?? i?.(t, n) ?? null;
  return e instanceof ShadowRoot && (a == null || !e.contains(a))
    ? Af(e, t, n)
    : a instanceof HTMLElement
      ? a
      : null;
}
function Af(e, t, n) {
  let r = Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));
  for (let e = r.length - 1; e >= 0; e--) {
    let i = r[e],
      a = i.getBoundingClientRect();
    if (t >= a.left && t <= a.right && n >= a.top && n <= a.bottom) return i;
  }
  return null;
}
function jf(e) {
  let t = e?.closest?.(`[data-type="item"]`);
  if (!(t instanceof HTMLElement)) return null;
  let n = t.dataset.itemPath ?? null;
  if (n == null) return null;
  let r = e?.closest?.(`[data-item-flattened-subitem]`),
    i = r instanceof HTMLElement ? (r.getAttribute(`data-item-flattened-subitem`) ?? null) : null;
  if (i != null && i.endsWith(`/`))
    return { directoryPath: i, flattenedSegmentPath: i, hoveredPath: n, kind: `directory` };
  if (t.dataset.itemType === `folder`)
    return { directoryPath: n, flattenedSegmentPath: null, hoveredPath: n, kind: `directory` };
  let a = t.dataset.itemParentPath ?? null;
  return a == null || a.length === 0
    ? { directoryPath: null, flattenedSegmentPath: null, hoveredPath: n, kind: `root` }
    : { directoryPath: a, flattenedSegmentPath: null, hoveredPath: n, kind: `directory` };
}
function Mf(e) {
  let t = e.cloneNode(!0);
  return (
    t.removeAttribute(`id`),
    (t.dataset.fileTreeDragPreview = `true`),
    t.setAttribute(`aria-hidden`, `true`),
    (t.tabIndex = -1),
    Object.assign(t.style, {
      boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15)`,
      left: `0px`,
      margin: `0`,
      pointerEvents: `none`,
      position: `fixed`,
      top: `0px`,
      willChange: `transform`,
      zIndex: `10000`,
    }),
    t
  );
}
function Nf() {
  return navigator.vendor !== `Apple Computer, Inc.`;
}
function Pf(e, t) {
  let n = e - t.top;
  if (n < up) {
    let e = Math.max(0, n);
    return -Math.ceil(((up - e) / up) * dp);
  }
  let r = t.bottom - e;
  if (r < up) {
    let e = Math.max(0, r);
    return Math.ceil(((up - e) / up) * dp);
  }
  return 0;
}
function Ff(e, t) {
  if (e != null) {
    let t = Sd[e];
    return t == null ? null : { text: t, title: Cd[e] };
  }
  return t ? { icon: { name: `file-tree-icon-dot`, width: 6, height: 6 }, title: wd } : null;
}
function If(e, t, n) {
  if (t == null || t.size === 0) return null;
  let r = [];
  for (let i = e.length - 1; i >= 0; --i) {
    let a = e[i],
      o = n.get(a);
    if (o != null) {
      for (let e of r) n.set(e, o);
      return o ? `ignored` : null;
    }
    if (t.has(a)) {
      n.set(a, !0);
      for (let e of r) n.set(e, !0);
      return `ignored`;
    }
    r.push(a);
  }
  for (let e of r) n.set(e, !1);
  return null;
}
function Lf(e) {
  return e != null && `toggle` in e;
}
function Rf(e) {
  return e.code === `Space` || e.key === ` ` || e.key === `Spacebar`;
}
function zf(e) {
  return (
    e.key.length === 1 && /^[\p{L}\p{N}]$/u.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey
  );
}
function Bf(e) {
  return e == null
    ? ``
    : `[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`, `\\\\`).replaceAll(`"`, `\\"`)}"] { opacity: 1; }`;
}
function Vf(e) {
  return (e.shiftKey && e.key === `F10`) || e.key === `ContextMenu`;
}
function Hf(e, t) {
  return (t && Vf(e)) || ((e.ctrlKey || e.metaKey) && Rf(e))
    ? !0
    : e.key === `ArrowDown` ||
        e.key === `ArrowLeft` ||
        e.key === `ArrowRight` ||
        e.key === `ArrowUp`;
}
function Uf(e) {
  for (let t of e.composedPath())
    if (
      t instanceof HTMLElement &&
      (t.dataset.fileTreeContextMenuRoot === `true` ||
        t.dataset.type === `context-menu-anchor` ||
        t.dataset.type === `context-menu-trigger` ||
        t.getAttribute(`slot`) === `context-menu`)
    )
      return !0;
  return !1;
}
function Wf(e) {
  return {
    bottom: e.bottom,
    height: e.height,
    left: e.left,
    right: e.right,
    top: e.top,
    width: e.width,
    x: e.x,
    y: e.y,
  };
}
function Gf(e, t) {
  return { bottom: t, height: 0, left: e, right: e, top: t, width: 0, x: e, y: t };
}
function Kf(e, t) {
  if (e == null) return t.offsetTop;
  let n = t.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return n.top - r.top;
}
function qf(e, t, n) {
  if (n == null) {
    e.delete(t);
    return;
  }
  e.set(t, n);
}
function Jf(e, t, n) {
  if (e == null) return null;
  let r = t.get(e) ?? null;
  if (r != null) return r;
  let i = n.get(e) ?? null;
  return i?.dataset.itemParked === `true` ? null : i;
}
function Yf(e) {
  if (e == null) return [];
  let t = [];
  for (let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)) {
    if (!(n instanceof HTMLElement)) continue;
    let e = n.dataset.fileTreeStickyPath;
    e != null && t.push(e);
  }
  return t;
}
function Xf(e, t) {
  if (e == null || t == null) return null;
  for (let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))
    if (n instanceof HTMLElement && n.dataset.itemPath === t) return n;
  return null;
}
function Zf(e, t, n, r, i, a, o) {
  let s = Math.max(0, a - i),
    c = t?.getBoundingClientRect() ?? null,
    l = c == null || n == null ? null : n.getBoundingClientRect().top - c.top,
    u = Xf(e, r),
    d = c == null || u == null ? null : u.getBoundingClientRect().top - c.top;
  return Math.max(0, Math.min(d ?? Math.max(l ?? 0, s), Math.max(0, o - i)));
}
function Qf(e, t) {
  return { kind: e.kind, name: Ef(e), path: t };
}
function $f(e) {
  return e == null ? void 0 : `${e}__tree`;
}
function ep(e, t, n) {
  if (e != null) return `${e}__focused-item-${encodeURIComponent(t)}${n ? `__parked` : ``}`;
}
function tp(e) {
  return (
    e === `file-tree-icon-chevron` ||
    e === `file-tree-icon-dot` ||
    e === `file-tree-icon-file` ||
    e === `file-tree-icon-lock`
  );
}
function np(e, t) {
  if (e == null) return null;
  if (`text` in e) return Q(`span`, { title: e.title, children: e.text });
  let n =
    typeof e.icon == `string`
      ? tp(e.icon)
        ? t(e.icon)
        : { name: e.icon }
      : tp(e.icon.name)
        ? (() => {
            let n = t(e.icon.name),
              { name: r, ...i } = e.icon;
            return { ...n, ...i };
          })()
        : e.icon;
  return Q(`span`, { title: e.title, children: Q(Gu, { ...n }) });
}
function rp(e) {
  e != null &&
    Ad(
      e.querySelector(
        [
          `button:not([disabled])`,
          `[href]`,
          `input:not([disabled])`,
          `select:not([disabled])`,
          `textarea:not([disabled])`,
          `[tabindex]:not([tabindex="-1"])`,
        ].join(`, `),
      ) ?? e,
    );
}
function ip(
  e,
  t,
  {
    actionLaneEnabled: n = !1,
    customDecoration: r = null,
    decorationLaneEnabled: i = !1,
    dragTargetFlattenedSegmentPath: a = null,
    gitDecoration: o = null,
    gitLaneActive: s = !1,
    renameInput: c = null,
    showDecorativeActionAffordance: l = !1,
  } = {},
) {
  let u = Tf(e);
  return Q(au, {
    children: [
      e.depth > 0
        ? Q(`div`, {
            "data-item-section": `spacing`,
            children: Array.from({ length: e.depth }).map((t, n) =>
              Q(
                `div`,
                { "data-item-section": `spacing-item`, "data-ancestor-path": e.ancestorPaths[n] },
                n,
              ),
            ),
          })
        : null,
      Q(`div`, {
        "data-item-section": `icon`,
        children:
          e.kind === `directory`
            ? Q(Gu, { ...t(`file-tree-icon-chevron`) })
            : Q(Gu, { ...t(`file-tree-icon-file`, u) }),
      }),
      Q(`div`, {
        "data-item-section": `content`,
        children: e.isFlattened
          ? wf(e, c, a)
          : (c ?? Q(td, { minimumLength: 5, split: `extension`, children: e.name })),
      }),
      i
        ? Q(`div`, { "data-item-section": `decoration`, children: r == null ? null : np(r, t) })
        : null,
      s ? Q(`div`, { "data-item-section": `git`, children: np(o, t) }) : null,
      n
        ? Q(`div`, {
            "data-item-section": `action`,
            children: l
              ? Q(`span`, {
                  "aria-hidden": `true`,
                  "data-item-action-affordance": `decorative`,
                  children: Q(Gu, { ...t(`file-tree-icon-ellipsis`) }),
                })
              : null,
          })
        : null,
    ],
  });
}
function ap(e, t, n, r = {}) {
  let {
      controller: i,
      renameView: a,
      visualFocusPath: o,
      contextHoverPath: s,
      draggedPathSet: c,
      dragTarget: l,
      dragAndDropEnabled: u,
      shouldSuppressContextMenu: d,
      handleRowDragStart: f,
      handleRowDragEnd: p,
      handleRowTouchStart: m,
      instanceId: h,
      itemHeight: g,
      gitStatusByPath: _,
      ignoredGitDirectories: v,
      ignoredInheritanceCache: y,
      directoriesWithGitChanges: b,
      gitLaneActive: x,
      contextMenuEnabled: S,
      contextMenuTriggerMode: C,
      contextMenuButtonTriggerEnabled: w,
      contextMenuButtonVisibility: T,
      contextMenuRightClickEnabled: E,
      registerRenameInput: D,
      registerButton: ee,
      resolveIcon: O,
      renderDecorationForRow: k,
      openContextMenuForRow: A,
      onRowClick: j,
      onKeyDown: M,
    } = e,
    N = Tf(t),
    { isParked: P = !1, mode: te = `flow`, style: ne } = r,
    re = te === `sticky`,
    ie = _?.get(N) ?? null ?? If(t.ancestorPaths, v, y),
    ae = t.kind === `directory` && (b?.has(N) ?? !1),
    oe = k(t, N),
    se = Ff(ie, ae),
    F = S && w,
    ce = oe != null || x || F,
    le = F && T === `always`,
    I = a.getPath() === N,
    ue = I ? a.getValue() : ``,
    de =
      re || !I
        ? null
        : Q(Hd, {
            ref: D,
            ariaLabel: `Rename ${Ef(t)}`,
            isFlattened: t.isFlattened,
            value: ue,
            onBlur: () => {
              a.commit();
            },
            onInput: (e) => {
              a.setValue(e.currentTarget.value);
            },
          }),
    fe = ip(t, O, {
      actionLaneEnabled: F,
      customDecoration: oe,
      decorationLaneEnabled: ce,
      dragTargetFlattenedSegmentPath: l?.flattenedSegmentPath ?? null,
      gitDecoration: se,
      gitLaneActive: x,
      renameInput: de,
      showDecorativeActionAffordance: le,
    }),
    pe = {
      ...Wd({
        ariaLabel: Ef(t),
        domId: t.isFocused ? ep(h, N, P) : void 0,
        extraStyle: ne,
        features: {
          actionLaneEnabled: F,
          contextMenuButtonVisibility: F ? T : null,
          contextMenuEnabled: S,
          contextMenuTriggerMode: S ? C : null,
          gitLaneActive: x,
        },
        isParked: P,
        itemHeight: g,
        mode: te,
        row: t,
        state: {
          containsGitChange: ae,
          effectiveGitStatus: ie,
          isContextHovered: s === N,
          isDragTarget: l?.kind === `directory` && l.directoryPath === N,
          isDragging: c?.has(N) === !0,
          isFocusRinged: t.isFocused && o === N,
        },
        targetPath: N,
      }),
      key: n,
      onContextMenu:
        S || u
          ? (e) => {
              if (d()) {
                e.preventDefault();
                return;
              }
              S &&
                (e.preventDefault(),
                E &&
                  (i.focusMountedPathFromInput(N),
                  A(t, N, { anchorRect: Gf(e.clientX, e.clientY), source: `right-click` })));
            }
          : void 0,
      onFocus: re
        ? void 0
        : () => {
            i.focusMountedPathFromInput(N);
          },
      onKeyDown: re ? void 0 : M,
      ref: (e) => {
        ee(N, e);
      },
    };
  return !re && I
    ? Q(`div`, { ...pe, children: fe })
    : Q(`button`, {
        ...pe,
        type: `button`,
        draggable: u && !P,
        onDragEnd: u && !P ? p : void 0,
        onDragStart:
          u && !P
            ? (e) => {
                f(e, t, N);
              }
            : void 0,
        onMouseDown: (e) => {
          if (re) {
            e.preventDefault();
            return;
          }
          i.isSearchOpen() && e.preventDefault();
        },
        onTouchStart:
          u && !P
            ? (e) => {
                m(e, t, N);
              }
            : void 0,
        onClick: (e) => {
          j(e, t, N, te);
        },
        children: fe,
      });
}
function op(e, t, n) {
  return t.end < t.start
    ? []
    : e.controller
        .getVisibleRows(t.start, t.end)
        .filter((e) => !n.has(Tf(e)))
        .map((n, r) => ap(e, n, t.start + r));
}
function sp({
  composition: e,
  controller: t,
  gitStatusByPath: n,
  ignoredGitDirectories: r,
  directoriesWithGitChanges: i,
  icons: a,
  instanceId: o,
  itemHeight: s = Ic,
  overscan: c = 10,
  renamingEnabled: l = !1,
  renderRowDecoration: u,
  searchBlurBehavior: d = `close`,
  searchEnabled: f = !1,
  searchFakeFocus: p = !1,
  slotHost: m,
  stickyFolders: h = !1,
  initialViewportHeight: g = 420,
}) {
  "use no memo";
  let _ = $(null),
    v = $(null),
    y = $(!1),
    b = $(null),
    x = $(null),
    S = $(null),
    C = $(null),
    w = $(null),
    T = $(new Map()),
    E = $(new Map()),
    D = $(() => {}),
    ee = $(null),
    O = $(0),
    k = $(!1),
    A = $(null);
  A.current !== t && ((k.current = !1), (A.current = t));
  let j = $(!1),
    M = $(null),
    N = $(null),
    P = $(!1),
    te = $(null),
    ne = $(null),
    re = $(null),
    ie = $(null),
    ae = $(null),
    oe = $(null),
    se = $(null),
    F = $(null),
    ce = $(!1),
    le = $(null),
    I = $(null),
    ue = $(null),
    de = $(null),
    fe = $d(() => new Map(), []),
    [, pe] = Yd(0),
    [me, he] = Yd(null),
    [ge, L] = Yd(null),
    [_e, ve] = Yd(null),
    [ye, be] = Yd(null),
    [xe, Se] = Yd(0),
    [R, Ce] = Yd(null),
    we = $(R);
  we.current = R;
  let Te = $(null),
    Ee = $(null),
    De = $(null),
    Oe = $(null),
    ke = $(null),
    Ae = $(!1),
    je = () => {
      ((Ee.current = null), (De.current = null), (Oe.current = null));
    },
    Me = (e, t) => {
      ((Ee.current = e),
        (De.current = null),
        (Oe.current = t == null ? null : { path: e, scrollTop: t }));
    },
    Ne = (e, t) => {
      ((Ee.current = null), (De.current = { path: e, viewportOffset: t }), (Oe.current = null));
    },
    Pe = $(d === `retain` && t.isSearchOpen()),
    [Fe, Ie] = Yd(p);
  Zd(() => {
    p || Ie(!1);
  }, [p]);
  let Le = $(!1),
    Re = ef(() => {
      ((Le.current = !0), Ie((e) => e && !1));
    }, []),
    [ze, Be] = Yd(() =>
      Of({
        controller: t,
        itemHeight: s,
        overscan: c,
        scrollTop: 0,
        stickyFolders: h,
        viewportHeight: g,
      }),
    ),
    [Ve, He] = Yd(!1);
  Zd(() => {
    He(!0);
  }, []);
  let z =
      e?.contextMenu?.enabled === !0 ||
      e?.contextMenu?.render != null ||
      e?.contextMenu?.onOpen != null ||
      e?.contextMenu?.onClose != null,
    Ue = e?.contextMenu?.triggerMode ?? (z ? `right-click` : `both`),
    We = Ue === `both` || Ue === `button`,
    Ge = e?.contextMenu?.buttonVisibility ?? `when-needed`,
    Ke = Ue === `both` || Ue === `right-click`;
  Qd(() => {
    let e = S.current;
    if (e == null) return;
    let t = (e) => {
        if (!(e instanceof CustomEvent)) return;
        let t = e.detail?.path ?? null;
        ((ke.current = t), L(t), be(t == null ? null : `pointer`));
      },
      n = (e) => {
        e instanceof CustomEvent && (Ae.current = e.detail?.disabled === !0);
      };
    return (
      e.addEventListener(`file-tree-debug-set-context-menu-trigger`, t),
      e.addEventListener(`file-tree-debug-set-scroll-suppression`, n),
      () => {
        (e.removeEventListener(`file-tree-debug-set-context-menu-trigger`, t),
          e.removeEventListener(`file-tree-debug-set-scroll-suppression`, n));
      }
    );
  }, []);
  let qe = ef((e, t) => {
      qf(T.current, e, t);
    }, []),
    Je = ef((e, t) => {
      qf(E.current, e, t);
    }, []),
    Ye = ef((e) => {
      x.current = e;
    }, []),
    Xe = ef((e) => Jf(e, E.current, T.current), []),
    Ze = n != null || r != null || i != null,
    { resolveIcon: Qe } = $d(() => Li(a), [a]),
    $e = t[Ul](),
    et = $e.getPath(),
    tt = et != null,
    nt = t.isSearchOpen(),
    rt = t.getSearchValue(),
    B = t.getFocusedPath(),
    V = t.getFocusedIndex(),
    it = t.getScrollRequest(),
    at = t.isDragAndDropEnabled(),
    ot = t.getDragSession(),
    st = $d(() => (ot == null ? null : new Set(ot.draggedPaths)), [ot]),
    ct = ot?.target ?? null,
    lt = ot?.primaryPath ?? null,
    ut = $f(o),
    { overlayHeight: dt, overlayRows: ft, snapshot: pt, visibleRows: mt } = ze,
    ht = pt.physical.viewportHeight,
    gt = $d(
      () => ({ end: pt.window.endIndex, start: pt.window.startIndex }),
      [pt.window.endIndex, pt.window.startIndex],
    ),
    _t = ft,
    vt = pt.sticky.rows,
    yt = pt.physical.totalHeight,
    bt = pt.sticky.height,
    xt = $d(() => new Set(vt.map((e) => Tf(e.row))), [vt]),
    St = V >= 0 && V >= gt.start && V <= gt.end,
    Ct = ef((e, t) => u?.({ item: Qf(e, t), row: e }) ?? null, [u]),
    wt = ef((e) => (Ad(e == null ? null : (T.current.get(e) ?? null)) ? !0 : Ad(S.current)), []),
    Tt = ef(
      (e) => {
        wt(t.focusNearestPath(e));
      },
      [t, wt],
    ),
    Et = $(Tt);
  Et.current = Tt;
  let Dt = $(!0),
    Ot = $(() => {}),
    kt = ef(
      (t = !0) => {
        let n = we.current;
        n != null &&
          ((Dt.current = Dt.current && t),
          Ce(null),
          e?.contextMenu?.onClose?.(),
          Dt.current && Tt(n.path));
      },
      [e?.contextMenu, Tt],
    );
  Ot.current = kt;
  let At = ef((e) => {
      let t = e == null ? null : Kf(S.current, e);
      ve((e) => (e === t ? e : t));
    }, []),
    jt = ef(
      (e, n, r) => {
        let i = t.getItem(n);
        if (i == null) return;
        let a = Xe(n);
        if (a?.dataset.fileTreeStickyRow === `true`) {
          let e = C.current;
          (Me(n, e?.scrollTop ?? null), (j.current = !0), he((e) => (e === n ? e : n)));
        }
        (i.focus(),
          At(a),
          (Dt.current = !0),
          Ce({
            anchorRect: r?.anchorRect ?? null,
            item: Qf(e, n),
            path: n,
            source: r?.source ?? `keyboard`,
          }));
      },
      [t, Xe, At],
    ),
    H = ef(
      (e) => {
        if (l) {
          if (t.isSearchOpen()) {
            let e = C.current,
              t = Md(e, ht);
            ((te.current =
              V < 0 || e == null
                ? null
                : Math.max(0, Math.min(V * s - e.scrollTop, Math.max(0, t - s)))),
              (P.current = !0));
          }
          t.startRenaming(e) !== !1 && (be(`focus`), pe((e) => e + 1));
        }
      },
      [t, V, s, l, ht],
    ),
    U = ef(
      (e, { restoreTreeFocus: n = !0, targetOffset: r = `live-overlay` } = {}) => {
        let i = C.current;
        if (i == null) return !1;
        t.focusPath(e);
        let a = t.getFocusedIndex();
        if (a < 0) return !1;
        let o = t.getVisibleRows(a, a)[0] ?? null;
        if (o == null) return !1;
        let l = Md(i, ht),
          u = t.getVisibleCount() * s,
          d =
            r === `sticky-parents`
              ? o.ancestorPaths.length * s
              : Of({
                  controller: t,
                  itemHeight: s,
                  overscan: c,
                  scrollTop: i.scrollTop,
                  stickyFolders: h,
                  viewportHeight: l,
                }).snapshot.sticky.height;
        return (
          (j.current = !0), Ld(i, a, s, l, u, d), D.current(), (Te.current = n ? e : null), !0
        );
      },
      [t, s, c, ht, h],
    ),
    Mt = () => y.current === !0 || de.current != null || ce.current === !0,
    Nt = (e) =>
      typeof window.requestAnimationFrame == `function`
        ? window.requestAnimationFrame(() => {
            e();
          })
        : window.setTimeout(e, 16),
    Pt = (e) => {
      if (e != null) {
        if (typeof window.cancelAnimationFrame == `function`) {
          window.cancelAnimationFrame(e);
          return;
        }
        window.clearTimeout(e);
      }
    },
    W = () => {
      (ie.current != null && (clearTimeout(ie.current), (ie.current = null)), (re.current = null));
    },
    Ft = () => {
      (oe.current?.remove(), (oe.current = null));
    },
    It = () => {
      (Pt(ne.current), (ne.current = null), (ae.current = null));
    },
    Lt = (e) => {
      let t = S.current?.getRootNode();
      if (t instanceof ShadowRoot) {
        t.append(e);
        return;
      }
      document.body.append(e);
    },
    Rt = () => {
      (F.current?.(),
        (F.current = null),
        de.current != null && (clearTimeout(de.current), (de.current = null)),
        (ce.current = !1),
        (le.current = null),
        (ue.current = null),
        I.current != null &&
          (I.current.setAttribute(`draggable`, `true`),
          I.current.style.removeProperty(`touch-action`),
          (I.current = null)),
        Ft(),
        W(),
        It(),
        (se.current = null));
    },
    zt = (e, n) => {
      let r = S.current?.getRootNode(),
        i = jf(kf(r instanceof ShadowRoot ? r : document, e, n));
      return (t.setDragTarget(i), t.getDragSession()?.target ?? null);
    },
    Bt = (e) => {
      let n = t.getDragAndDropConfig()?.openOnDropDelay ?? 800;
      if (e == null || e.kind !== `directory` || e.directoryPath == null || n <= 0) {
        W();
        return;
      }
      let r = t.getItem(e.directoryPath),
        i = Lf(r) ? r : null;
      if (i == null || i.isExpanded()) {
        W();
        return;
      }
      let a = `${e.directoryPath}::${e.flattenedSegmentPath ?? ``}`;
      re.current !== a &&
        (W(),
        (re.current = a),
        (ie.current = setTimeout(() => {
          let n = t.getDragSession()?.target;
          n?.kind !== `directory` ||
            n.directoryPath !== e.directoryPath ||
            n.flattenedSegmentPath !== e.flattenedSegmentPath ||
            i.expand();
        }, n)));
    },
    Vt = () => {
      ne.current = null;
      let e = ae.current,
        n = C.current;
      if (e == null || n == null || t.getDragSession() == null) return;
      let r = n.getBoundingClientRect(),
        i = Pf(e.clientY, r);
      if (i === 0) return;
      let a = Math.max(0, n.scrollHeight - n.clientHeight),
        o = Math.max(0, Math.min(a, n.scrollTop + i));
      (o !== n.scrollTop && ((n.scrollTop = o), D.current()),
        Bt(zt(e.clientX, e.clientY)),
        (ne.current = Nt(Vt)));
    },
    Ht = (e, t) => {
      ((ae.current = { clientX: e, clientY: t }), (ne.current ??= Nt(Vt)));
    },
    Ut = (e, n, r) => {
      let i = e.currentTarget;
      if (i != null) {
        if ((Rt(), Ft(), W(), It(), t.startDrag(r) === !1)) {
          e.preventDefault();
          return;
        }
        if (
          ((se.current = n),
          e.dataTransfer != null &&
            ((e.dataTransfer.effectAllowed = `move`),
            (e.dataTransfer.dropEffect = `move`),
            e.dataTransfer.setData(`text/plain`, r),
            Nf()))
        ) {
          let t = Mf(i),
            n = i.getBoundingClientRect();
          (Object.assign(t.style, {
            height: `${n.height}px`,
            opacity: `0.85`,
            transform: `translate3d(-9999px, 0px, 0)`,
            width: `${n.width}px`,
          }),
            Lt(t),
            (oe.current = t),
            e.dataTransfer.setDragImage(
              t,
              Math.max(0, e.clientX - n.left),
              Math.max(0, e.clientY - n.top),
            ));
        }
      }
    },
    Wt = () => {
      (Ft(), W(), It(), (se.current = null), t.cancelDrag());
    },
    Gt = (e, n, r) => {
      if (de.current != null || ce.current) return;
      let i = e.touches[0],
        a = e.currentTarget;
      if (i == null || a == null) return;
      ((ue.current = { clientX: i.clientX, clientY: i.clientY }),
        (I.current = a),
        a.setAttribute(`draggable`, `false`));
      let o = (e = {}) => {
          let t = e.restoreNativeDraggable ?? !ce.current;
          (de.current != null && (clearTimeout(de.current), (de.current = null)),
            document.removeEventListener(`touchmove`, s),
            document.removeEventListener(`touchend`, c),
            document.removeEventListener(`touchcancel`, c),
            F.current === o && (F.current = null),
            t &&
              (a.setAttribute(`draggable`, `true`),
              I.current === a && (I.current = null),
              (ue.current = null)));
        },
        s = (e) => {
          let t = e.touches[0],
            n = ue.current;
          if (t == null || n == null) return;
          let r = t.clientX - n.clientX,
            i = t.clientY - n.clientY;
          r * r + i * i <= lp * lp || o();
        },
        c = () => {
          o();
        };
      (document.addEventListener(`touchmove`, s, { passive: !0 }),
        document.addEventListener(`touchend`, c),
        document.addEventListener(`touchcancel`, c),
        (F.current = o),
        (de.current = setTimeout(() => {
          if ((o({ restoreNativeDraggable: !1 }), t.startDrag(r) === !1)) {
            (a.setAttribute(`draggable`, `true`),
              I.current === a && (I.current = null),
              (ue.current = null));
            return;
          }
          ((ce.current = !0),
            (I.current = a),
            a.setAttribute(`draggable`, `false`),
            a.style.setProperty(`touch-action`, `none`),
            (se.current = n));
          let e = a.getBoundingClientRect(),
            s = Mf(a);
          (Object.assign(s.style, {
            height: `${e.height}px`,
            opacity: `0.85`,
            transform: `translate3d(${e.left}px, ${e.top}px, 0)`,
            width: `${e.width}px`,
          }),
            Lt(s),
            (oe.current = s),
            (le.current = { x: i.clientX - e.left, y: i.clientY - e.top }));
          let c = (e) => {
              let t = e.touches[0];
              if (t == null) return;
              e.preventDefault();
              let n = le.current;
              (n != null &&
                oe.current != null &&
                (oe.current.style.transform = `translate3d(${t.clientX - n.x}px, ${t.clientY - n.y}px, 0)`),
                Bt(zt(t.clientX, t.clientY)),
                Ht(t.clientX, t.clientY));
            },
            l = (e) => {
              let n = e.changedTouches[0];
              (n != null && zt(n.clientX, n.clientY), t.completeDrag(), Rt());
            },
            u = () => {
              (t.cancelDrag(), Rt());
            };
          ((F.current = () => {
            (document.removeEventListener(`touchmove`, c),
              document.removeEventListener(`touchend`, l),
              document.removeEventListener(`touchcancel`, u));
          }),
            document.addEventListener(`touchmove`, c, { passive: !1 }),
            document.addEventListener(`touchend`, l),
            document.addEventListener(`touchcancel`, u));
        }, cp)));
    },
    Kt = (e) => {
      if (R != null) {
        if (e.key === `Escape`) {
          (kt(), e.preventDefault(), e.stopPropagation());
          return;
        }
        fp.has(e.key) && (e.preventDefault(), e.stopPropagation());
        return;
      }
      if ($e.isActive()) {
        if (e.key === `Escape`) $e.cancel();
        else if (e.key === `Enter`) $e.commit();
        else return;
        (be(`focus`), pe((e) => e + 1), e.preventDefault(), e.stopPropagation());
        return;
      }
      if (l && e.key === `F2`) {
        (H(B ?? void 0), e.preventDefault(), e.stopPropagation());
        return;
      }
      if (nt) {
        if (e.key === `Escape`) ((P.current = !1), (te.current = null), t.closeSearch());
        else if (e.key === `Enter`) {
          let e = t.getFocusedPath();
          e != null && t.selectOnlyPath(e);
          let n = C.current,
            r = Md(n, ht);
          ((te.current =
            V < 0 || n == null
              ? null
              : Math.max(0, Math.min(V * s - n.scrollTop, Math.max(0, r - s)))),
            (P.current = !0),
            t.closeSearch());
        } else if (e.key === `ArrowDown`) t.focusNextSearchMatch();
        else if (e.key === `ArrowUp`) t.focusPreviousSearchMatch();
        else return;
        (be(`focus`), pe((e) => e + 1), e.preventDefault(), e.stopPropagation());
        return;
      }
      if (f && zf(e)) {
        (t.openSearch(e.key), pe((e) => e + 1), e.preventDefault(), e.stopPropagation());
        return;
      }
      let n = z && Vf(e),
        r = Hf(e, z),
        i = r && S.current != null ? jd(S.current) : null,
        a = r ? new Set(Yf(S.current)) : new Set(),
        o = i?.dataset.fileTreeStickyPath ?? null,
        c = i?.dataset.fileTreeStickyRow === `true` && o != null;
      if (c && o !== B && a.has(o)) {
        let e = C.current;
        (Me(o, e?.scrollTop ?? null), t.focusPath(o));
      }
      let u = t.getFocusedPath(),
        d = t.getFocusedIndex(),
        p = t.getFocusedItem();
      if (p == null) return;
      let m = Lf(p) ? p : null,
        h = u != null && (xt.has(u) || (c && o === u && a.has(u))),
        g =
          e.key === `ArrowDown` ||
          e.key === `ArrowUp` ||
          (e.key === `ArrowRight` && m != null && m.isExpanded()),
        _ = e.key === `ArrowLeft` && h && m != null && m.isExpanded(),
        v = C.current,
        y = !0;
      if (e.shiftKey && e.key === `ArrowDown`) t.extendSelectionFromFocused(1);
      else if (e.shiftKey && e.key === `ArrowUp`) t.extendSelectionFromFocused(-1);
      else if (n && u != null && d >= 0) {
        let e = t.getVisibleRows(d, d)[0] ?? null,
          n = Jf(u, E.current, T.current);
        e == null || n == null ? (y = !1) : jt(e, u);
      } else if ((e.ctrlKey || e.metaKey) && Rf(e)) t.toggleFocusedSelection();
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === `a`) t.selectAllVisiblePaths();
      else
        switch (e.key) {
          case `ArrowDown`:
            t.focusNextItem();
            break;
          case `ArrowUp`:
            t.focusPreviousItem();
            break;
          case `ArrowRight`:
            m == null || m.isExpanded() ? t.focusNextItem() : m.expand();
            break;
          case `ArrowLeft`:
            m != null && m.isExpanded() ? m.collapse() : t.focusParentItem();
            break;
          case `Home`:
            t.focusFirstItem();
            break;
          case `End`:
            t.focusLastItem();
            break;
          default:
            y = !1;
        }
      if (!y) return;
      be(`focus`);
      let b = t.getFocusedPath(),
        x = b != null && (xt.has(b) || a.has(b)),
        w = g && b !== u,
        D = n && c && o === u && b === u;
      if ((h || D) && b != null && ((w && x) || D))
        (Me(b, v?.scrollTop ?? null), (j.current = !0), he((e) => (e === b ? e : b)));
      else {
        let t = e.key === `ArrowUp` && h && b !== u;
        b != null && (t || (_ && b === u))
          ? (Ne(b, Zf(S.current, v, i, u, s, bt, ht)),
            (j.current = !0),
            he((e) => (e === b ? e : b)))
          : je();
      }
      (pe((e) => e + 1), e.preventDefault(), e.stopPropagation());
    };
  (Qd(() => {
    if (!(!f || !nt)) {
      if (Pe.current) {
        Pe.current = !1;
        return;
      }
      Ad(w.current);
    }
  }, [nt, f]),
    Qd(() => {
      let e = x.current;
      switch (
        Bd({ hasRenderedInput: e != null, previousRenamingPath: N.current, renamingPath: et })
      ) {
        case `reset`:
          N.current = null;
          return;
        case `reveal-canonical`:
          et != null && U(et, { restoreTreeFocus: !1, targetOffset: `live-overlay` });
          return;
        case `ignore`:
          return;
        case `focus-input`:
          e != null && ((Te.current = null), (N.current = et), Ad(e), e.select());
          return;
      }
    }, [gt.end, gt.start, et, U, xt]),
    Qd(() => {
      let e = S.current;
      if (e == null) return;
      let t = null,
        n = () => {
          t != null && (clearTimeout(t), (t = null));
        },
        r = () => {
          let t = jd(e)?.dataset.itemPath ?? null;
          he((e) => (e === t ? e : t));
        },
        i = () => {
          (n(), (j.current = !0), r());
        },
        a = (i) => {
          let a = i.relatedTarget;
          if (a == null) {
            (n(),
              (t = setTimeout(() => {
                if (((t = null), jd(e) != null)) {
                  r();
                  return;
                }
                ((j.current = !1), he(null));
              }, 0)));
            return;
          }
          if (!(a instanceof Node) || !e.contains(a)) {
            (n(), (j.current = !1), he(null));
            return;
          }
          let o = a instanceof HTMLElement ? (a.dataset.itemPath ?? null) : null;
          he((e) => (e === o ? e : o));
        };
      return (
        e.addEventListener(`focusin`, i),
        e.addEventListener(`focusout`, a),
        () => {
          (n(), e.removeEventListener(`focusin`, i), e.removeEventListener(`focusout`, a));
        }
      );
    }, []),
    Qd(() => {
      let e = S.current;
      e != null &&
        (pt.physical.scrollTop <= 0
          ? (e.dataset.scrollAtTop = `true`)
          : delete e.dataset.scrollAtTop);
    }, [pt.physical.scrollTop]),
    Qd(() => {
      let e = null,
        n = C.current,
        r = b.current,
        i = S.current;
      if (n == null) return;
      ee.current = Md(n, g);
      let a = () => {
        let e = t.getVisibleCount(),
          r = Nd(ee.current, g),
          i = Math.max(0, e * s - r);
        (n.scrollTop > i && (n.scrollTop = i),
          Be(
            Of({
              controller: t,
              itemHeight: s,
              overscan: c,
              scrollTop: Math.min(n.scrollTop, i),
              stickyFolders: h,
              viewportHeight: r,
            }),
          ));
      };
      if (!k.current) {
        k.current = !0;
        let e = t.getFocusedIndex();
        if (e >= 0) {
          let r = Nd(ee.current, g),
            i = t.getVisibleRows(e, e)[0] ?? null;
          Fd(
            n,
            e,
            s,
            r,
            h && i != null
              ? Math.max(0, Math.min(i.ancestorPaths.length * s, Math.max(0, r - s)))
              : 0,
          );
        }
      }
      D.current = a;
      let o = !1,
        l = t.subscribe(() => {
          (o ? pe((e) => e + 1) : (o = !0), a());
        }),
        u = () => {
          Ae.current !== !0 &&
            (r != null && (r.dataset.isScrolling ??= ``),
            i != null && (i.dataset.isScrolling ??= ``),
            (y.current = !0),
            e != null && clearTimeout(e),
            (e = setTimeout(() => {
              (r != null && delete r.dataset.isScrolling,
                i != null && delete i.dataset.isScrolling,
                (y.current = !1),
                Se((e) => e + 1),
                (e = null));
            }, 50)));
        },
        d = null,
        f = () => {
          (i != null && delete i.dataset.overlayReveal, d != null && (clearTimeout(d), (d = null)));
        },
        p = () => {
          i == null ||
            Ae.current === !0 ||
            n.scrollTop > 0 ||
            ((i.dataset.overlayReveal = `true`),
            d != null && clearTimeout(d),
            (d = setTimeout(() => {
              f();
            }, 200)));
        },
        m = () => {
          if (
            (a(),
            n.scrollTop > 0 && f(),
            we.current != null && y.current && Ot.current(),
            Ae.current === !0)
          ) {
            y.current = !1;
            return;
          }
          (L((e) => (e == null ? e : null)), u());
        },
        _ = () => {
          (u(), p());
        },
        v = new Set([
          `ArrowUp`,
          `ArrowDown`,
          `ArrowLeft`,
          `ArrowRight`,
          `PageUp`,
          `PageDown`,
          `Home`,
          `End`,
          ` `,
          `Spacebar`,
        ]),
        x = (e) => {
          v.has(e.key) && _();
        };
      (n.addEventListener(`scroll`, m, { passive: !0 }),
        n.addEventListener(`wheel`, _, { passive: !0 }),
        n.addEventListener(`touchmove`, _, { passive: !0 }),
        n.addEventListener(`keydown`, x));
      let w =
        typeof ResizeObserver < `u`
          ? new ResizeObserver((e) => {
              ((ee.current = (e[0] == null ? null : Pd(e[0])) ?? Md(n, g)), a());
            })
          : null;
      return (
        w?.observe(n),
        () => {
          ((D.current = () => {}),
            l(),
            n.removeEventListener(`scroll`, m),
            n.removeEventListener(`wheel`, _),
            n.removeEventListener(`touchmove`, _),
            n.removeEventListener(`keydown`, x),
            e != null && clearTimeout(e),
            d != null && clearTimeout(d),
            r != null && delete r.dataset.isScrolling,
            i != null && (delete i.dataset.isScrolling, delete i.dataset.overlayReveal),
            (y.current = !1),
            (ee.current = null),
            w?.disconnect());
        }
      );
    }, [t, g, s, c, h]),
    Qd(() => {
      z || R == null || kt(!1);
    }, [kt, z, R]));
  let qt = $d(() => (R == null ? null : `${R.path}::${R.source}`), [R]);
  (Qd(() => {
    if (qt == null) {
      m?.clearSlotContent(Ai);
      return;
    }
    let t = we.current;
    if (t == null) return;
    let n = v.current ?? _.current;
    if (n == null) return;
    let r = {
        anchorElement: n,
        anchorRect: t.anchorRect ?? Wf(n.getBoundingClientRect()),
        close: (e) => {
          Ot.current(e?.restoreFocus ?? !0);
        },
        restoreFocus: () => {
          Dt.current && Et.current(we.current?.path ?? null);
        },
      },
      i = e?.contextMenu?.render?.(t.item, r) ?? null;
    return (
      m?.setSlotContent(Ai, i),
      e?.contextMenu?.onOpen?.(t.item, r),
      rp(i),
      queueMicrotask(() => {
        i == null || !i.isConnected || (document.activeElement === i && rp(i));
      }),
      () => {
        m?.clearSlotContent(Ai);
      }
    );
  }, [qt, e?.contextMenu, m]),
    Qd(() => {
      R != null && t.getItem(R.path) == null && kt();
    }, [kt, R, t]),
    Qd(() => {
      if (R == null) return;
      let e = S.current?.getRootNode(),
        t = e instanceof ShadowRoot ? e.host : S.current,
        n = (e) => {
          let n = e.target;
          n instanceof Node &&
            (Uf(e) || (_.current?.contains(n) !== !0 && t?.contains(n) !== !0 && kt()));
        },
        r = (e) => {
          e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), kt());
        };
      return (
        document.addEventListener(`mousedown`, n, !0),
        document.addEventListener(`keydown`, r, !0),
        () => {
          (document.removeEventListener(`mousedown`, n, !0),
            document.removeEventListener(`keydown`, r, !0));
        }
      );
    }, [kt, R]),
    Qd(() => {
      let e = C.current,
        n = S.current;
      if (e == null || n == null) {
        M.current = B;
        return;
      }
      let r = B == null ? null : (T.current.get(B) ?? null),
        i = jd(n),
        a = i?.dataset.itemPath ?? null,
        o = tt && x.current === i,
        c = f && w.current === i,
        l = P.current && !nt,
        u = te.current ?? 0,
        d = Te.current,
        p = Ee.current,
        m = De.current,
        g = Oe.current,
        _ = i != null,
        v = j.current || _,
        y = M.current !== B,
        b = p != null && p === B && B != null,
        E = !1,
        ee = !1;
      if (it != null && it.id !== O.current) {
        O.current = it.id;
        let n = it.visibleIndex,
          r = t.getVisibleRows(n, n)[0] ?? null;
        if (r != null) {
          let t = h ? Math.max(0, Math.min(r.ancestorPaths.length * s, Math.max(0, ht - s))) : bt;
          ((E = !0), (ee = Id(e, n, s, ht, yt, it.offset, t)));
        }
        t.clearScrollRequest(it.id);
      }
      let k = !E && l && Ld(e, V, s, ht, yt, u),
        A = !E && d != null && d === B && Ld(e, V, s, ht, yt, bt),
        N = !E && m != null && m.path === B && Ld(e, V, s, ht, yt, m.viewportOffset),
        ne = !E && g != null && g.path === B && e.scrollTop !== g.scrollTop;
      if (
        (ne && (e.scrollTop = g.scrollTop),
        (ne || ee || A || N || k || (v && y && d !== B && !b && Fd(e, V, s, ht, bt))) &&
          D.current(),
        E)
      ) {
        M.current = B;
        return;
      }
      if (!v) {
        M.current = B;
        return;
      }
      if (o) {
        M.current = B;
        return;
      }
      if (c && !l) {
        M.current = B;
        return;
      }
      if (r == null) {
        (l && V >= 0 && (Ld(e, V, s, ht, yt, u), D.current()), (M.current = B));
        return;
      }
      ((y || l || d === B || p === B || m?.path === B || g?.path === B || a == null || a !== B) &&
        (Ad(r),
        d === B && (Te.current = null),
        p === B && (Ee.current = null),
        m?.path === B && (De.current = null),
        g?.path === B && (Oe.current = null),
        (P.current = !1),
        (te.current = null)),
        (M.current = B));
    }, [t, V, B, St, s, tt, nt, gt, ht, f, it, h, bt, yt, mt]));
  let Jt = V >= 0 && V >= pt.visible.startIndex && V <= pt.visible.endIndex,
    Yt = B != null && _t.some((e) => Tf(e.row) === B),
    Xt = Jt || Yt,
    Zt = We && j.current === !0 && Xt ? B : null,
    Qt = ye === `pointer` ? ge : null,
    $t = R?.path ?? ke.current ?? Qt ?? Zt ?? ge,
    en = R?.source === `right-click`;
  Qd(() => {
    (y.current && R == null) || At(Xe($t));
  }, [R, Xe, gt, ht, xe, _t, $t, At, mt]);
  let tn = ef((e) => {
      if (y.current || Uf(e)) return;
      let t = e.target;
      if (!(t instanceof HTMLElement) || t.closest?.(`[data-type="context-menu-trigger"]`) != null)
        return;
      let n = t.closest?.(`[data-file-tree-sticky-row="true"]`),
        r = t.closest?.(`[data-type="item"]`),
        i =
          n instanceof HTMLElement
            ? (n.dataset.fileTreeStickyPath ?? null)
            : r instanceof HTMLElement
              ? (r.dataset.itemPath ?? null)
              : null;
      (i != null && be((e) => (e === `pointer` ? e : `pointer`)), L((e) => (e === i ? e : i)));
    }, []),
    nn = ef(() => {
      L(null);
    }, []);
  Qd(() => {
    if (!at) return;
    let e = () => {
      (Rt(), t.cancelDrag());
    };
    return (
      window.addEventListener(`dragend`, e),
      () => {
        (window.removeEventListener(`dragend`, e), Rt(), t.cancelDrag());
      }
    );
  }, [t, at]);
  let rn = (e) => {
      if (!at || t.getDragSession() == null || ce.current) return;
      let n = jf(e.target instanceof HTMLElement ? e.target : null);
      (t.setDragTarget(n),
        Bt(t.getDragSession()?.target ?? null),
        Ht(e.clientX, e.clientY),
        e.dataTransfer != null && (e.dataTransfer.dropEffect = `move`),
        e.preventDefault());
    },
    an = (e) => {
      if (!at || t.getDragSession() == null || ce.current) return;
      let n = e.relatedTarget;
      (n instanceof Node && S.current?.contains(n) === !0) || (W(), It(), t.setDragTarget(null));
    },
    on = (e) => {
      !at ||
        t.getDragSession() == null ||
        ce.current ||
        (e.preventDefault(),
        zt(e.clientX, e.clientY),
        t.completeDrag(),
        Ft(),
        W(),
        It(),
        (se.current = null));
    },
    sn = pt.window.height,
    cn = pt.window.offsetTop,
    ln = Math.min(0, ht - sn),
    un = Math.min(0, ht - sn - bt),
    dn = me === B || P.current,
    fn = B != null && dn && !St && V >= 0 ? (mt[V] ?? t.getVisibleRows(V, V)[0] ?? null) : null,
    pn = fn == null ? null : Rd(V, s, gt, sn),
    mn = se.current,
    hn = lt != null && mn != null && mn.path === lt && mn.index >= gt.start && mn.index <= gt.end,
    gn = lt != null && mn != null && mn.path === lt && !hn && mn.path !== fn?.path ? mn : null,
    _n = gn == null ? null : Rd(gn.index, s, gt, sn),
    vn = Bf(
      (V >= 0 ? (mt[V] ?? t.getVisibleRows(V, V)[0] ?? null) : null)?.ancestorPaths.at(-1) ?? null,
    ),
    yn = nt && B != null ? ep(o, B, !St) : void 0,
    bn = R?.path ?? (nt ? B : me),
    xn = R?.path ?? ge,
    Sn = Xe($t),
    Cn = z && We && !en && !tt && Sn != null && _e != null && $t != null,
    wn = z && (Cn || R != null),
    Tn = R?.anchorRect,
    En = Tn == null && Sn != null && _e != null && (R != null || Cn) ? _e : null,
    Dn =
      Tn == null
        ? En == null
          ? void 0
          : { top: `${En}px` }
        : { left: `${Tn.left}px`, position: `fixed`, right: `auto`, top: `${Tn.top}px` },
    On = en ? { opacity: `0` } : void 0,
    kn = ef(
      (e, n, r, i) => {
        let a = Kd({
            event: { ctrlKey: e.ctrlKey, metaKey: e.metaKey, shiftKey: e.shiftKey },
            isDirectory: n.kind === `directory`,
            isSearchOpen: nt,
            mode: i,
          }),
          o = a.toggleDirectory && n.kind === `directory`,
          s = o ? t.resolveMountedDirectoryPathFromInput(r) : null;
        if (o && s == null) return;
        let c = s ?? r;
        switch (a.selection.kind) {
          case `range`:
            t.selectPathRange(c, a.selection.additive);
            break;
          case `toggle`:
            t.togglePathSelectionFromInput(c);
            break;
          case `single`:
            t.selectOnlyMountedPathFromInput(c);
            break;
        }
        let l = e.currentTarget instanceof HTMLElement ? e.currentTarget : null,
          u = n.index >= pt.visible.startIndex && n.index <= pt.visible.endIndex,
          d = i === `flow` && u && l != null && l.dataset.itemParked !== `true`;
        (t.focusMountedPathFromInput(c),
          d && ((j.current = !0), he((e) => (e === c ? e : c)), be(`focus`)),
          o && t.toggleMountedDirectoryFromInput(c),
          a.closeSearch && t.closeSearch(),
          a.revealCanonical && U(c, { targetOffset: `sticky-parents` }));
      },
      [t, nt, pt.visible.endIndex, pt.visible.startIndex, U],
    ),
    An = () => {
      if (y.current || !We || $t == null || Sn == null) return;
      let e = t.getItem($t);
      e != null &&
        (At(Sn),
        (Dt.current = !0),
        Ce({
          anchorRect: null,
          item: {
            kind: e.isDirectory() ? `directory` : `file`,
            name: Sn.getAttribute(`aria-label`) ?? $t,
            path: e.getPath(),
          },
          path: e.getPath(),
          source: `button`,
        }));
    },
    jn = {
      contextHoverPath: xn,
      contextMenuButtonTriggerEnabled: We,
      contextMenuButtonVisibility: Ge,
      contextMenuEnabled: z,
      contextMenuRightClickEnabled: Ke,
      contextMenuTriggerMode: Ue,
      controller: t,
      directoriesWithGitChanges: i,
      dragAndDropEnabled: at,
      draggedPathSet: st,
      dragTarget: ct,
      gitLaneActive: Ze,
      gitStatusByPath: n,
      handleRowDragEnd: Wt,
      handleRowDragStart: Ut,
      handleRowTouchStart: Gt,
      ignoredGitDirectories: r,
      ignoredInheritanceCache: fe,
      instanceId: o,
      itemHeight: s,
      onKeyDown: Kt,
      onRowClick: kn,
      openContextMenuForRow: jt,
      registerButton: qe,
      registerRenameInput: Ye,
      renameView: $e,
      renderDecorationForRow: Ct,
      resolveIcon: Qe,
      shouldSuppressContextMenu: Mt,
      visualFocusPath: bn,
    },
    Mn = { ...jn, registerButton: Je };
  return Q(`div`, {
    ref: S,
    id: ut,
    "data-file-tree-context-menu-button-visibility": z && We ? Ge : void 0,
    "data-file-tree-context-menu-trigger-mode": z ? Ue : void 0,
    "data-file-tree-has-context-menu-action-lane": z && We ? `true` : void 0,
    "data-file-tree-has-git-lane": Ze ? `true` : void 0,
    "data-file-tree-virtualized-root": `true`,
    onDragLeave: at ? an : void 0,
    onDragOver: at ? rn : void 0,
    onDrop: at ? on : void 0,
    onKeyDown: Kt,
    onPointerLeave: z ? nn : void 0,
    onPointerOver: z ? tn : void 0,
    role: `tree`,
    tabIndex: -1,
    style: { outline: `none`, position: `relative` },
    children: [
      Q(`style`, { "data-file-tree-guide-style": `true`, dangerouslySetInnerHTML: { __html: vn } }),
      Q(`slot`, { name: ki, "data-type": `header-slot` }),
      f
        ? Q(`div`, {
            "data-file-tree-search-container": !0,
            "data-open": nt ? `true` : `false`,
            children: Q(`input`, {
              ref: w,
              "aria-activedescendant": yn,
              "aria-controls": ut,
              placeholder: `Search…`,
              "data-file-tree-search-input": !0,
              "data-file-tree-search-input-fake-focus": Fe ? `true` : void 0,
              value: rt,
              onBlur: () => {
                (d === `retain` && !Le.current) || t.closeSearch();
              },
              onFocus: Re,
              onPointerDown: Re,
              onInput: (e) => {
                Re();
                let n = e.currentTarget;
                t.setSearch(n.value);
              },
            }),
          })
        : null,
      Q(`div`, {
        ref: C,
        "data-file-tree-virtualized-scroll": `true`,
        children: [
          h && Ve && _t.length > 0
            ? Q(`div`, {
                "aria-hidden": `true`,
                "data-file-tree-sticky-overlay": `true`,
                children: Q(`div`, {
                  "data-file-tree-sticky-overlay-content": `true`,
                  style: { height: `${dt}px` },
                  children: _t.map((e, t) =>
                    ap(Mn, e.row, `sticky:${Tf(e.row)}`, {
                      mode: `sticky`,
                      style: {
                        left: `0`,
                        position: `absolute`,
                        right: `0`,
                        top: `${e.top}px`,
                        zIndex: `${_t.length - t}`,
                      },
                    }),
                  ),
                }),
              })
            : null,
          Q(`div`, {
            ref: b,
            "data-file-tree-virtualized-list": `true`,
            style: { height: `${yt}px` },
            children: [
              Q(`div`, {
                "data-file-tree-virtualized-sticky-offset": `true`,
                "aria-hidden": `true`,
                style: { height: `${cn}px` },
              }),
              Q(`div`, {
                "data-file-tree-virtualized-sticky": `true`,
                style: { height: `${sn}px`, top: `${ln}px`, bottom: `${un}px` },
                children: [
                  op(jn, gt, xt),
                  fn != null && pn != null
                    ? ap(jn, fn, `parked:${fn.path}`, {
                        isParked: !0,
                        style: {
                          left: `0`,
                          opacity: `0`,
                          pointerEvents: lt === fn.path ? `none` : void 0,
                          position: `absolute`,
                          right: `0`,
                          top: `${pn}px`,
                        },
                      })
                    : null,
                  gn != null && _n != null
                    ? ap(jn, gn, `parked-drag:${gn.path}`, {
                        isParked: !0,
                        style: {
                          left: `0`,
                          opacity: `0`,
                          pointerEvents: `none`,
                          position: `absolute`,
                          right: `0`,
                          top: `${_n}px`,
                        },
                      })
                    : null,
                ],
              }),
            ],
          }),
        ],
      }),
      z
        ? Q(`div`, {
            ref: _,
            "data-type": `context-menu-anchor`,
            "data-visible": wn ? `true` : `false`,
            style: Dn,
            children: [
              Q(`button`, {
                ref: v,
                type: `button`,
                "data-type": ji,
                "aria-label": `Options`,
                "aria-haspopup": `menu`,
                "aria-expanded": R == null ? `false` : `true`,
                "data-visible": Cn ? `true` : `false`,
                onMouseDown: (e) => {
                  e.preventDefault();
                },
                onClick: (e) => {
                  if ((e.preventDefault(), e.stopPropagation(), R != null)) {
                    kt();
                    return;
                  }
                  An();
                },
                tabIndex: -1,
                style: On,
                children: Q(Gu, { ...Qe(`file-tree-icon-ellipsis`) }),
              }),
              R == null ? null : Q(`slot`, { name: Ai }),
            ],
          })
        : null,
      R == null
        ? null
        : Q(`div`, {
            "data-type": `context-menu-wash`,
            "aria-hidden": `true`,
            onMouseDownCapture: (e) => {
              (e.preventDefault(), kt());
            },
            onTouchStartCapture: (e) => {
              (e.preventDefault(), e.stopPropagation(), kt());
            },
            onTouchMoveCapture: (e) => {
              (e.preventDefault(), e.stopPropagation());
            },
            onWheelCapture: (e) => {
              (e.preventDefault(), e.stopPropagation());
            },
          }),
    ],
  });
}
var cp,
  lp,
  up,
  dp,
  fp,
  pp = e(() => {
    (Mi(),
      Vi(),
      Lc(),
      ql(),
      Yu(),
      cd(),
      xd(),
      Td(),
      zd(),
      Vd(),
      Ud(),
      Gd(),
      qd(),
      Hu(),
      Cf(),
      Wu(),
      (cp = 400),
      (lp = 10),
      (up = 40),
      (dp = 18),
      (fp = new Set([
        `ArrowDown`,
        `ArrowLeft`,
        `ArrowRight`,
        `ArrowUp`,
        `End`,
        `Home`,
        `PageDown`,
        `PageUp`,
      ])));
  });
function mp(e, t) {
  _p.renderRoot(e, t);
}
function hp(e, t) {
  _p.hydrateRoot(e, t);
}
function gp(e) {
  _p.unmountRoot(e);
}
var _p,
  vp = e(() => {
    (pp(),
      Hu(),
      (_p = {
        hydrateRoot: (e, t) => {
          Du(ru(sp, t), e);
        },
        renderRoot: (e, t) => {
          Eu(ru(sp, t), e);
        },
        unmountRoot: (e) => {
          Eu(null, e);
        },
      }));
  }),
  yp,
  bp = e(() => {
    yp = class {
      #e = new Map();
      #t = null;
      clearAll() {
        for (let e of this.#e.values()) e.remove();
        this.#e.clear();
      }
      clearSlotContent(e) {
        let t = this.#n(e);
        t != null && (t.remove(), this.#e.delete(e));
      }
      setHost(e) {
        if (((this.#t = e), e != null)) {
          this.#i(e);
          for (let [e, t] of this.#e) this.#r(e, t);
        }
      }
      setSlotContent(e, t) {
        let n = this.#n(e);
        if (n === t) {
          t != null && (this.#e.set(e, t), this.#r(e, t));
          return;
        }
        if ((n?.remove(), t == null)) {
          this.#e.delete(e);
          return;
        }
        (this.#e.set(e, t), this.#r(e, t));
      }
      setSlotHtml(e, t) {
        let n = t?.trim() ?? ``;
        if (n.length === 0) {
          this.setSlotContent(e, null);
          return;
        }
        let r = this.#n(e);
        if (r != null && r.innerHTML === n) {
          (this.#e.set(e, r), this.#r(e, r));
          return;
        }
        let i = document.createElement(`div`);
        ((i.innerHTML = n), this.setSlotContent(e, i));
      }
      #n(e) {
        let t = this.#e.get(e) ?? null;
        if (t != null) return t;
        let n = this.#t;
        if (n == null) return null;
        for (let t of Array.from(n.children))
          if (t instanceof HTMLElement && t.dataset.fileTreeManagedSlot === e) return t;
        return null;
      }
      #r(e, t) {
        ((t.slot = e),
          (t.dataset.fileTreeManagedSlot = e),
          this.#t != null && t.parentNode !== this.#t && this.#t.appendChild(t));
      }
      #i(e) {
        for (let t of Array.from(e.children)) {
          if (!(t instanceof HTMLElement)) continue;
          let e = t.dataset.fileTreeManagedSlot;
          e == null || this.#e.has(e) || this.#e.set(e, t);
        }
      }
    };
  });
function xp(e) {
  e.__g === void 0 ? (e[Pp] = !0) : (e.__g |= 8);
}
function Sp(e) {
  e.__g === void 0 ? (e[Pp] = !1) : (e.__g &= -9);
}
function Cp(e) {
  return e.__g === void 0 ? !0 === e[Pp] : !!(8 & e.__g);
}
function wp(e) {
  if (e.length === 0 || !1 === Vp.test(e)) return e;
  for (var t = 0, n = 0, r = ``, i = ``; n < e.length; n++) {
    switch (e.charCodeAt(n)) {
      case 34:
        i = `&quot;`;
        break;
      case 38:
        i = `&amp;`;
        break;
      case 60:
        i = `&lt;`;
        break;
      default:
        continue;
    }
    (n !== t && (r += e.slice(t, n)), (r += i), (t = n + 1));
  }
  return (n !== t && (r += e.slice(t, n)), r);
}
function Tp(e) {
  var t = ``;
  for (var n in e) {
    var r = e[n];
    if (r != null && r !== ``) {
      var i = n[0] == `-` ? n : Hp[n] || (Hp[n] = n.replace(Wp, `-$&`).toLowerCase()),
        a = `;`;
      (typeof r != `number` || i.startsWith(`--`) || Up.has(i) || (a = `px;`),
        (t = t + i + `:` + r + a));
    }
  }
  return t || void 0;
}
function Ep() {
  this.__d = !0;
}
function Dp(e, t) {
  return { __v: e, context: t, props: e.props, setState: Ep, forceUpdate: Ep, __d: !0, __h: [] };
}
function Op(e, t, n) {
  if (!e.s) {
    if (n instanceof Gp) {
      if (!n.s) return void (n.o = Op.bind(null, e, t));
      (1 & t && (t = n.s), (n = n.v));
    }
    if (n && n.then) return void n.then(Op.bind(null, e, t), Op.bind(null, e, 2));
    ((e.s = t), (e.v = n));
    let r = e.o;
    r && r(e);
  }
}
function kp(e, t) {
  var n,
    r = e.type,
    i = !0;
  return (
    e[Mp] ? ((i = !1), ((n = e[Mp]).state = n[Fp])) : (n = new r(e.props, t)),
    (e[Mp] = n),
    (n.__v = e),
    (n.props = e.props),
    (n.context = t),
    xp(n),
    (n.state ??= Xp),
    n[Fp] ?? (n[Fp] = n.state),
    r.getDerivedStateFromProps
      ? (n.state = Qp({}, n.state, r.getDerivedStateFromProps(n.props, n.state)))
      : i && n.componentWillMount
        ? (n.componentWillMount(), (n.state = n[Fp] === n.state ? n.state : n[Fp]))
        : !i && n.componentWillUpdate && n.componentWillUpdate(),
    Jp && Jp(e),
    n.render(n.props, n.state, t)
  );
}
function Ap(e, t, n, r, i, a, o) {
  if (e == null || !0 === e || !1 === e || e === $p) return $p;
  var s = typeof e;
  if (s != `object`) return s == `function` ? $p : s == `string` ? wp(e) : e + $p;
  if (Zp(e)) {
    var c,
      l = $p;
    i[Np] = e;
    for (var u = e.length, d = 0; d < u; d++) {
      var f = e[d];
      if (f != null && typeof f != `boolean`) {
        var p,
          m = Ap(f, t, n, r, i, a, o);
        typeof m == `string`
          ? (l += m)
          : ((c ||= Array(u)),
            l && c.push(l),
            (l = $p),
            Zp(m) ? (p = c).push.apply(p, m) : c.push(m));
      }
    }
    return c ? (l && c.push(l), c) : l;
  }
  if (e.constructor !== void 0) return $p;
  ((e.__ = i), Kp && Kp(e));
  var h = e.type,
    g = e.props;
  if (typeof h == `function`) {
    var _,
      v,
      y,
      b = t;
    if (h === au) {
      if (`tpl` in g) {
        for (var x = $p, S = 0; S < g.tpl.length; S++)
          if (((x += g.tpl[S]), g.exprs && S < g.exprs.length)) {
            var C = g.exprs[S];
            if (C == null) continue;
            typeof C != `object` || (C.constructor !== void 0 && !Zp(C))
              ? (x += C)
              : (x += Ap(C, t, n, r, e, a, o));
          }
        return x;
      }
      if (`UNSTABLE_comment` in g) return `<!--` + wp(g.UNSTABLE_comment) + `-->`;
      v = g.children;
    } else {
      if ((_ = h.contextType) != null) {
        var w = t[_.__c];
        b = w ? w.props.value : _.__;
      }
      var T = h.prototype && typeof h.prototype.render == `function`;
      if (T) ((v = kp(e, b)), (y = e[Mp]));
      else {
        e[Mp] = y = Dp(e, b);
        for (var E = 0; Cp(y) && E++ < 25;) {
          (Sp(y), Jp && Jp(e));
          try {
            v = h.call(y, g, b);
          } catch (t) {
            throw (a && t && typeof t.then == `function` && (e._suspended = !0), t);
          }
        }
        xp(y);
      }
      if (
        (y.getChildContext != null && (t = Qp({}, t, y.getChildContext())),
        T && Z.errorBoundaries && (h.getDerivedStateFromError || y.componentDidCatch))
      ) {
        v =
          v != null && v.type === au && v.key == null && v.props.tpl == null ? v.props.children : v;
        try {
          return Ap(v, t, n, r, e, a, !1);
        } catch (i) {
          return (
            h.getDerivedStateFromError && (y[Fp] = h.getDerivedStateFromError(i)),
            y.componentDidCatch && y.componentDidCatch(i, Xp),
            Cp(y)
              ? ((v = kp(e, t)),
                (y = e[Mp]).getChildContext != null && (t = Qp({}, t, y.getChildContext())),
                Ap(
                  (v =
                    v != null && v.type === au && v.key == null && v.props.tpl == null
                      ? v.props.children
                      : v),
                  t,
                  n,
                  r,
                  e,
                  a,
                  o,
                ))
              : $p
          );
        } finally {
          (qp && qp(e), Yp && Yp(e));
        }
      }
    }
    v = v != null && v.type === au && v.key == null && v.props.tpl == null ? v.props.children : v;
    try {
      var D = Ap(v, t, n, r, e, a, o);
      return (
        qp && qp(e),
        Z.unmount && Z.unmount(e),
        e._suspended
          ? typeof D == `string`
            ? em + D + tm
            : Zp(D)
              ? (D.unshift(em), D.push(tm), D)
              : D.then(function (e) {
                  return em + e + tm;
                })
          : D
      );
    } catch (i) {
      if (!a && o && o.onError) {
        var ee = (function i(s) {
          return o.onError(s, e, function (e, s) {
            try {
              return Ap(e, t, n, r, s, a, o);
            } catch (e) {
              return i(e);
            }
          });
        })(i);
        if (ee !== void 0) return ee;
        var O = Z.__e;
        return (O && O(i, e), $p);
      }
      if (!a || !i || typeof i.then != `function`) throw i;
      return i.then(function i() {
        try {
          var s = Ap(v, t, n, r, e, a, o);
          return e._suspended ? em + s + tm : s;
        } catch (e) {
          if (!e || typeof e.then != `function`) throw e;
          return e.then(i);
        }
      });
    }
  }
  var k,
    A = `<` + h,
    j = $p;
  for (var M in g) {
    var N = g[M];
    if (typeof (N = jp(N) ? N.value : N) != `function` || M === `class` || M === `className`) {
      switch (M) {
        case `children`:
          k = N;
          continue;
        case `key`:
        case `ref`:
        case `__self`:
        case `__source`:
          continue;
        case `htmlFor`:
          if (`for` in g) continue;
          M = `for`;
          break;
        case `className`:
          if (`class` in g) continue;
          M = `class`;
          break;
        case `defaultChecked`:
          M = `checked`;
          break;
        case `defaultSelected`:
          M = `selected`;
          break;
        case `defaultValue`:
        case `value`:
          switch (((M = `value`), h)) {
            case `textarea`:
              k = N;
              continue;
            case `select`:
              r = N;
              continue;
            case `option`:
              r != N || `selected` in g || (A += ` selected`);
          }
          break;
        case `dangerouslySetInnerHTML`:
          j = N && N.__html;
          continue;
        case `style`:
          typeof N == `object` && (N = Tp(N));
          break;
        case `acceptCharset`:
          M = `accept-charset`;
          break;
        case `httpEquiv`:
          M = `http-equiv`;
          break;
        default:
          if (Lp.test(M)) M = M.replace(Lp, `$1:$2`).toLowerCase();
          else {
            if (Ip.test(M)) continue;
            (M[4] !== `-` && !Bp.has(M)) || N == null
              ? n
                ? zp.test(M) &&
                  (M = M === `panose1` ? `panose-1` : M.replace(/([A-Z])/g, `-$1`).toLowerCase())
                : Rp.test(M) && (M = M.toLowerCase())
              : (N += $p);
          }
      }
      N != null &&
        !1 !== N &&
        (A =
          !0 === N || N === $p
            ? A + ` ` + M
            : A + ` ` + M + `="` + (typeof N == `string` ? wp(N) : N + $p) + `"`);
    }
  }
  if (Ip.test(h)) throw Error(h + ` is not a valid HTML tag name in ` + A + `>`);
  if (
    (j ||
      (typeof k == `string`
        ? (j = wp(k))
        : k != null &&
          !1 !== k &&
          !0 !== k &&
          (j = Ap(k, t, h === `svg` || (h !== `foreignObject` && n), r, e, a, o))),
    qp && qp(e),
    Yp && Yp(e),
    !j && nm.has(h))
  )
    return A + `/>`;
  var P = `</` + h + `>`,
    te = A + `>`;
  return Zp(j) ? [te].concat(j, [P]) : typeof j == `string` ? te + j + P : [te, j, P];
}
function jp(e) {
  return typeof e == `object` && !!e && typeof e.peek == `function` && `value` in e;
}
var Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm = e(() => {
    (Hu(),
      (Mp = `__c`),
      (Np = `__k`),
      (Pp = `__d`),
      (Fp = `__s`),
      (Ip = /[\s\n\\/='"\0<>]/),
      (Lp = /^(xlink|xmlns|xml)([A-Z])/),
      (Rp =
        /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/),
      (zp =
        /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/),
      (Bp = new Set([`draggable`, `spellcheck`])),
      (Vp = /["&<]/),
      (Hp = {}),
      (Up = new Set(
        `animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom`.split(
          `.`,
        ),
      )),
      (Wp = /[A-Z]/g),
      (Gp = (function () {
        function e() {}
        return (
          (e.prototype.then = function (t, n) {
            var r = new e(),
              i = this.s;
            if (i) {
              var a = 1 & i ? t : n;
              if (a) {
                try {
                  Op(r, 1, a(this.v));
                } catch (e) {
                  Op(r, 2, e);
                }
                return r;
              }
              return this;
            }
            return (
              (this.o = function (e) {
                try {
                  var i = e.v;
                  1 & e.s ? Op(r, 1, t ? t(i) : i) : n ? Op(r, 1, n(i)) : Op(r, 2, i);
                } catch (e) {
                  Op(r, 2, e);
                }
              }),
              r
            );
          }),
          e
        );
      })()),
      (Xp = {}),
      (Zp = Array.isArray),
      (Qp = Object.assign),
      ($p = ``),
      (em = `<!--$s-->`),
      (tm = `<!--/$s-->`),
      (nm = new Set([
        `area`,
        `base`,
        `br`,
        `col`,
        `command`,
        `embed`,
        `hr`,
        `img`,
        `input`,
        `keygen`,
        `link`,
        `meta`,
        `param`,
        `source`,
        `track`,
        `wbr`,
      ])));
  });
function im(e) {
  return e != null && e.length > 0 ? e : ((lm += 1), `pst_ft_${lm}`);
}
function am({ initialVisibleRowCount: e, itemHeight: t }) {
  return e == null ? 420 : Math.max(0, e) * (t ?? Ic);
}
function om(e) {
  if (typeof document > `u`) return;
  let t = document.createElement(`div`);
  t.innerHTML = e;
  let n = t.querySelector(`svg`);
  return n instanceof SVGElement ? n : void 0;
}
function sm(e) {
  return (
    e.querySelector(`#file-tree-icon-chevron`) instanceof SVGElement &&
    e.querySelector(`#file-tree-icon-file`) instanceof SVGElement &&
    e.querySelector(`#file-tree-icon-dot`) instanceof SVGElement &&
    e.querySelector(`#file-tree-icon-lock`) instanceof SVGElement
  );
}
function cm(e) {
  return Array.from(e.children).filter((e) => e instanceof SVGElement);
}
var lm,
  um,
  dm = e(() => {
    (Si(),
      Mi(),
      Fi(),
      Fc(),
      Lc(),
      Uc(),
      Qc(),
      ql(),
      tu(),
      vp(),
      bp(),
      Hu(),
      rm(),
      (lm = 0),
      (um = class {
        static LoadedCustomComponent = !0;
        #e;
        #t;
        #n;
        #r;
        #i;
        #a;
        #o;
        #s;
        #c;
        #l = new yp();
        #u;
        #d;
        #f;
        #p;
        #m;
        #h;
        #g;
        #_;
        #v;
        #y = null;
        #b;
        #x = !1;
        #S = !1;
        constructor(e) {
          let {
            composition: t,
            density: n,
            fileTreeSearchMode: r,
            gitStatus: i,
            id: a,
            initialSearchQuery: o,
            icons: s,
            itemHeight: c,
            onSearchChange: l,
            onSelectionChange: u,
            overscan: d,
            renderRowDecoration: f,
            renaming: p,
            search: m,
            searchBlurBehavior: h,
            searchFakeFocus: g,
            stickyFolders: _,
            unsafeCSS: v,
            initialVisibleRowCount: y,
            ...b
          } = e;
          ((this.#e = t),
            (this.#n = im(a)),
            (this.#p = eu(i)),
            (this.#m = s),
            (this.#h = v),
            (this.#r = u),
            (this.#i = f),
            (this.#a = p != null && p !== !1),
            (this.#o = h),
            (this.#s = m === !0),
            (this.#c = g === !0),
            (this.#u = Nc(n, c)),
            (this.#d = {
              itemHeight: this.#u.itemHeight,
              overscan: d,
              stickyFolders: _,
              initialVisibleRowCount: y,
            }),
            (this.#t = new Kl({
              ...b,
              fileTreeSearchMode: r,
              initialSearchQuery: o,
              onSearchChange: l,
              renaming: p,
            })),
            (this.#v = this.#t.getSelectionVersion()),
            (this.#y =
              this.#r == null
                ? null
                : this.subscribe(() => {
                    this.#D();
                  })));
        }
        unmount() {
          (this.#b != null &&
            (gp(this.#b), delete this.#b.dataset.fileTreeVirtualizedWrapper, (this.#b = void 0)),
            this.#l.clearAll(),
            this.#l.setHost(null),
            this.#f != null &&
              (delete this.#f.dataset.fileTreeVirtualized, this.#I(this.#f), (this.#f = void 0)));
        }
        cleanUp() {
          (this.unmount(), this.#y?.(), (this.#y = null), this.#t.destroy());
        }
        getFileTreeContainer() {
          return this.#f;
        }
        getItem(e) {
          return this.#t.getItem(e);
        }
        getFocusedItem() {
          return this.#t.getFocusedItem();
        }
        getFocusedPath() {
          return this.#t.getFocusedPath();
        }
        getSelectedPaths() {
          return this.#t.getSelectedPaths();
        }
        getComposition() {
          return this.#e;
        }
        getItemHeight() {
          return this.#u.itemHeight;
        }
        getDensityFactor() {
          return this.#u.factor;
        }
        subscribe(e) {
          let t = !1;
          return this.#t.subscribe(() => {
            if (!t) {
              t = !0;
              return;
            }
            e();
          });
        }
        focusPath(e) {
          this.#t.focusPath(e);
        }
        scrollToPath(e, t) {
          this.#t.scrollToPath(e, t);
        }
        focusNearestPath(e) {
          return this.#t.focusNearestPath(e);
        }
        add(e) {
          this.#t.add(e);
        }
        batch(e) {
          this.#t.batch(e);
        }
        move(e, t, n) {
          this.#t.move(e, t, n);
        }
        onMutation(e, t) {
          return this.#t.onMutation(e, t);
        }
        setSearch(e) {
          this.#t.setSearch(e);
        }
        openSearch(e) {
          this.#t.openSearch(e);
        }
        closeSearch() {
          this.#t.closeSearch();
        }
        isSearchOpen() {
          return this.#t.isSearchOpen();
        }
        getSearchValue() {
          return this.#t.getSearchValue();
        }
        getSearchMatchingPaths() {
          return this.#t.getSearchMatchingPaths();
        }
        focusNextSearchMatch() {
          this.#t.focusNextSearchMatch();
        }
        focusPreviousSearchMatch() {
          this.#t.focusPreviousSearchMatch();
        }
        startRenaming(e, t) {
          return this.#t.startRenaming(e, t);
        }
        remove(e, t) {
          this.#t.remove(e, t);
        }
        resetPaths(e, t) {
          this.#t.resetPaths(e, t);
        }
        setComposition(e) {
          this.#e = e;
          let t = this.#T();
          t != null && (this.#O(), mp(t.wrapper, this.#w()));
        }
        setGitStatus(e) {
          this.#p = eu(e, this.#p);
          let t = this.#T();
          t != null && mp(t.wrapper, this.#w());
        }
        setIcons(e) {
          this.#m = e;
          let t = this.#T();
          t != null && (this.#E(t.host, t.wrapper), mp(t.wrapper, this.#w()));
        }
        hydrate({ fileTreeContainer: e }) {
          let t = this.#P(e),
            n = this.#N(t);
          (this.#O(), hp(n, this.#w()));
        }
        render({ containerWrapper: e, fileTreeContainer: t }) {
          let n = this.#P(t ?? this.#f, e),
            r = this.#N(n);
          (this.#O(), mp(r, this.#w()));
        }
        #C() {
          return {
            initialViewportHeight: am({
              initialVisibleRowCount: this.#d.initialVisibleRowCount,
              itemHeight: this.#d.itemHeight,
            }),
            itemHeight: this.#d.itemHeight,
            overscan: this.#d.overscan,
            stickyFolders: this.#d.stickyFolders,
          };
        }
        #w() {
          return {
            composition: this.#e,
            controller: this.#t,
            gitStatusByPath: this.#p?.statusByPath,
            ignoredGitDirectories: this.#p?.ignoredDirectoryPaths,
            directoriesWithGitChanges: this.#p?.directoriesWithChanges,
            icons: this.#m,
            instanceId: this.#n,
            renamingEnabled: this.#a,
            renderRowDecoration: this.#i,
            searchBlurBehavior: this.#o,
            searchEnabled: this.#s,
            searchFakeFocus: this.#c,
            slotHost: this.#l,
            ...this.#C(),
          };
        }
        #T() {
          let e = this.#f,
            t = this.#b;
          return e == null || t == null ? null : { host: e, wrapper: t };
        }
        #E(e, t) {
          let n = e.shadowRoot;
          (n != null && (this.#k(n), this.#A(n)), this.#j(t));
        }
        #D() {
          let e = this.#r;
          if (e == null) return;
          let t = this.#t.getSelectionVersion();
          t !== this.#v && ((this.#v = t), e(this.#t.getSelectedPaths()));
        }
        #O() {
          let e = this.#e?.header?.render;
          if (e != null) {
            this.#l.setSlotContent(ki, e());
            return;
          }
          this.#l.setSlotHtml(ki, this.#e?.header?.html ?? null);
        }
        #k(e) {
          let t = cm(e).find((e) => sm(e)),
            n = om(ur(Pi(this.#m).set));
          n != null &&
            ((t != null && t.outerHTML === n.outerHTML) ||
              (t == null ? e.prepend(n) : t.replaceWith(n)));
        }
        #A(e) {
          let t = cm(e),
            n = t.find((e) => sm(e)),
            r = t.filter((e) => e !== n),
            i = Pi(this.#m).spriteSheet?.trim() ?? ``;
          if (i.length === 0) {
            for (let e of r) e.remove();
            return;
          }
          let a = om(i);
          if (a == null) {
            for (let e of r) e.remove();
            return;
          }
          if (!(r.length === 1 && r[0].outerHTML === a.outerHTML)) {
            for (let e of r) e.remove();
            e.appendChild(a);
          }
        }
        #j(e) {
          let t = Pi(this.#m);
          t.colored && fr(t.set)
            ? (e.dataset.fileTreeColoredIcons = `true`)
            : delete e.dataset.fileTreeColoredIcons;
        }
        #M(e) {
          let t = e.querySelector(`style[${Ti}]`);
          if (
            (this.#g == null && t instanceof HTMLStyleElement && (this.#g = t),
            this.#h == null || this.#h === ``)
          ) {
            (this.#g?.remove(), (this.#g = void 0), (this.#_ = void 0));
            return;
          }
          (this.#g?.parentNode === e && this.#_ === this.#h) ||
            ((this.#g ??= document.createElement(`style`)),
            this.#g.setAttribute(Ti, ``),
            this.#g.parentNode !== e && e.appendChild(this.#g),
            (this.#g.textContent = Vc(this.#h)),
            (this.#_ = this.#h));
        }
        #N(e) {
          if (this.#b != null) return this.#b;
          let t = e.shadowRoot;
          if (t == null) throw Error(`FileTree requires a shadow root`);
          let n = Array.from(t.children).filter(
              (e) =>
                e instanceof HTMLDivElement &&
                typeof e.dataset.fileTreeId == `string` &&
                e.dataset.fileTreeId.length > 0,
            ),
            r = n.find((e) => e.dataset.fileTreeId === this.#n) ?? n[0];
          return (
            r != null && (this.#n = r.dataset.fileTreeId ?? this.#n),
            (this.#b = r ?? document.createElement(`div`)),
            (this.#b.dataset.fileTreeId = this.#n),
            (this.#b.dataset.fileTreeVirtualizedWrapper = `true`),
            this.#E(e, this.#b),
            this.#b.parentNode !== t && t.appendChild(this.#b),
            this.#b
          );
        }
        #P(e, t) {
          let n = e ?? this.#f ?? document.createElement(`file-tree-container`);
          t != null && n.parentNode !== t && t.appendChild(n);
          let r = n.shadowRoot ?? n.attachShadow({ mode: `open` });
          return (
            Yc(n, r),
            this.#M(r),
            (n.dataset.fileTreeVirtualized = `true`),
            (n.style.display = `flex`),
            this.#F(n),
            this.#l.setHost(n),
            (this.#f = n),
            n
          );
        }
        #F(e) {
          (e.style.getPropertyValue(`--trees-item-height`) === `` &&
            (e.style.setProperty(`--trees-item-height`, `${String(this.#u.itemHeight)}px`),
            (this.#x = !0)),
            e.style.getPropertyValue(`--trees-density-override`) === `` &&
              (e.style.setProperty(`--trees-density-override`, String(this.#u.factor)),
              (this.#S = !0)));
        }
        #I(e) {
          ((this.#x &&= (e.style.removeProperty(`--trees-item-height`), !1)),
            (this.#S &&= (e.style.removeProperty(`--trees-density-override`), !1)));
        }
      }));
  });
function fm() {
  return Qe(ee.theme) ?? `system`;
}
function pm(e) {
  let t = (0, vm.c)(4),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === `system` ? _m : () => e), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === e ? (r = t[3]) : ((r = e === `system` ? _m : () => e), (t[2] = e), (t[3] = r)),
    (0, ym.useSyncExternalStore)(e === `system` ? gm : hm, n, r)
  );
}
function mm(e) {
  return e === `system` ? [`light`, `dark`] : [e];
}
function hm() {
  return () => {};
}
function gm(e) {
  let t = window.electronBridge?.subscribeToSystemThemeVariant;
  if (t != null) return t(e);
  if (typeof window > `u` || typeof window.matchMedia != `function`) return () => {};
  let n = window.matchMedia(`(prefers-color-scheme: dark)`),
    r = () => {
      e();
    };
  return typeof n.addEventListener == `function`
    ? (n.addEventListener(`change`, r),
      () => {
        n.removeEventListener(`change`, r);
      })
    : typeof n.addListener == `function` && typeof n.removeListener == `function`
      ? (n.addListener(r),
        () => {
          n.removeListener(r);
        })
      : () => {};
}
function _m() {
  return (
    window.electronBridge?.getSystemThemeVariant?.() ??
    (typeof window > `u` || typeof window.matchMedia != `function`
      ? `light`
      : window.matchMedia(`(prefers-color-scheme: dark)`).matches
        ? `dark`
        : `light`)
  );
}
var vm,
  ym,
  bm = e(() => {
    ((vm = d()), r(), (ym = t(a(), 1)), at());
  });
function xm(e, t) {
  let { navigator: n } = t?.target?.ownerDocument?.defaultView ?? window;
  return new Promise((t, r) => {
    if (!n?.clipboard) {
      r(Error(`Clipboard API unavailable`));
      return;
    }
    try {
      if (
        typeof e != `string` &&
        `write` in n.clipboard &&
        typeof ClipboardItem < `u` &&
        `supports` in ClipboardItem
      ) {
        let i = new ClipboardItem(
          Object.fromEntries(
            Object.entries(e).map(([e, t]) => [
              e,
              typeof t == `string` ? new Blob([t], { type: e }) : t,
            ]),
          ),
        );
        n.clipboard.write([i]).then(
          () => t(!0),
          () => {
            r(Error(`Failed to copy to clipboard`));
          },
        );
      } else {
        let i = typeof e == `string` ? e : (e[`text/plain`] ?? ``);
        n.clipboard.writeText(i).then(
          () => t(!0),
          () => {
            r(Error(`Failed to copy to clipboard`));
          },
        );
      }
    } catch {
      r(Error(`Failed to copy to clipboard`));
    }
  });
}
var Sm = e(() => {});
function Cm({ targets: e, availableTargets: t, includeHiddenTargets: n = !1, mode: r = `editor` }) {
  let i = e.filter((e) => e.appPath != null);
  if (i.length > 0) return i;
  if (r === `native`)
    return e.filter((e) => e.target === `systemDefault` || e.target === `fileManager`);
  let a = new Set(t);
  return e.filter((e) => a.has(e.target) && (n || !e.hidden));
}
function wm({
  preferredTarget: e,
  targets: t,
  availableTargets: n,
  includeHiddenTargets: r = !0,
  mode: i = `editor`,
}) {
  let a = Cm({ targets: t, availableTargets: n, includeHiddenTargets: r, mode: i });
  return a.length === 0
    ? null
    : e
      ? (a.find((t) => t.target === e) ?? a[0] ?? null)
      : (a[0] ?? null);
}
function Tm(e) {
  return e.appPath == null && e.kind === `editor`;
}
var Em = e(() => {}),
  Dm,
  Om = e(() => {
    (f(),
      Be(),
      Ue(),
      (Dm = k(qe, ({ get: e, scope: t }) => {
        if (t.value.routeKind !== `local-thread`) return null;
        let n = e(He, t.value.conversationId);
        return n?.turnId == null ? null : { threadId: t.value.conversationId, turnId: n.turnId };
      })));
  });
async function km({ params: e, queryClient: t, signal: n }) {
  let r = m(`open-in-targets`, e),
    i = await y(`open-in-targets`, { params: e });
  if (n?.aborted) return i;
  t.setQueryData(r, i);
  let a = Ve.openInTargets;
  if (a == null) {
    let e = { ...i, targets: i.targets.map((e) => ({ ...e, available: !1, resolvedIcon: null })) };
    return (t.setQueryData(r, e), e);
  }
  return (
    await Promise.all(
      i.targets.map(async (e) => {
        let i;
        try {
          i = (await a.detectTarget({ target: e.target })).available;
        } catch {
          Am(t, r, e.id, n, { available: !1, resolvedIcon: null });
          return;
        }
        if (
          (Am(t, r, e.id, n, { available: i, ...(i ? {} : { resolvedIcon: null }) }),
          !(!i || n?.aborted))
        )
          try {
            let { icon: i } = await a.loadTargetIcon({ target: e.target });
            Am(t, r, e.id, n, { resolvedIcon: i });
          } catch {
            Am(t, r, e.id, n, { resolvedIcon: null });
          }
      }),
    ),
    t.getQueryData(r) ?? i
  );
}
function Am(e, t, n, r, i) {
  r?.aborted ||
    e.setQueryData(t, (e) => {
      if (e == null) return e;
      let t = e.targets.map((e) => (e.id === n ? { ...e, ...i } : e));
      return {
        ...e,
        availableTargets: t.flatMap((e) => (e.available ? [e.target] : [])),
        targets: t,
      };
    });
}
var jm = e(() => {
  (Re(), h());
});
function Mm(e) {
  let t = (0, Bm.c)(29),
    { turnId: n, cwd: r, deferEnrichment: i, hostId: a, openPath: o } = e,
    s = i === void 0 ? !1 : i,
    c;
  t[0] !== r || t[1] !== s || t[2] !== a || t[3] !== o
    ? ((c = { cwd: r, hostId: a, isQueryEnabled: s, openPath: o, deferEnrichment: s }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c))
    : (c = t[4]);
  let { data: l, isFetching: u } = Im(c),
    d = l?.targets,
    f;
  t[5] !== r || t[6] !== s || t[7] !== a || t[8] !== o || t[9] !== d || t[10] !== n
    ? ((f = { turnId: n, cwd: r, deferEnrichment: s, hostId: a, openPath: o, targets: d }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = a),
      (t[8] = o),
      (t[9] = d),
      (t[10] = n),
      (t[11] = f))
    : (f = t[11]);
  let p = Fm(f),
    m;
  t[12] !== r || t[13] !== a || t[14] !== o
    ? ((m = Pm({ cwd: r, hostId: a, openPath: o })),
      (t[12] = r),
      (t[13] = a),
      (t[14] = o),
      (t[15] = m))
    : (m = t[15]);
  let h = m,
    g = l?.preferredTarget ?? null,
    _;
  t[16] === l?.targets ? (_ = t[17]) : ((_ = l?.targets ?? []), (t[16] = l?.targets), (t[17] = _));
  let v;
  t[18] === l?.availableTargets
    ? (v = t[19])
    : ((v = l?.availableTargets ?? []), (t[18] = l?.availableTargets), (t[19] = v));
  let y = l?.mode,
    b = l != null,
    x;
  return (
    t[20] !== h ||
    t[21] !== u ||
    t[22] !== p ||
    t[23] !== b ||
    t[24] !== g ||
    t[25] !== _ ||
    t[26] !== v ||
    t[27] !== y
      ? ((x = {
          canLoadTargets: h,
          preferredTarget: g,
          targets: _,
          availableTargets: v,
          mode: y,
          hasLoadedTargets: b,
          isLoadingTargets: u,
          open: p,
        }),
        (t[20] = h),
        (t[21] = u),
        (t[22] = p),
        (t[23] = b),
        (t[24] = g),
        (t[25] = _),
        (t[26] = v),
        (t[27] = y),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
function Nm(e) {
  let t = (0, Bm.c)(25),
    { cwd: n, delayMs: r, hostId: i, openPath: a } = e,
    o = r === void 0 ? 0 : r,
    s;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((s = Pm({ cwd: n, hostId: i, openPath: a })), (t[0] = n), (t[1] = i), (t[2] = a), (t[3] = s))
    : (s = t[3]);
  let c = s,
    l = o <= 0,
    u;
  t[4] !== n || t[5] !== i || t[6] !== a || t[7] !== l
    ? ((u = { cwd: n, hostId: i, isQueryEnabled: l, openPath: a }),
      (t[4] = n),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let { data: d, refetch: f } = Im(u),
    p;
  t[9] === f
    ? (p = t[10])
    : ((p = () => {
        f();
      }),
      (t[9] = f),
      (t[10] = p));
  let m = (0, Vm.useEffectEvent)(p),
    h;
  t[11] !== c || t[12] !== d || t[13] !== o || t[14] !== m || t[15] !== l
    ? ((h = () => {
        if (l || !c || d != null) return;
        let e = window.setTimeout(m, o);
        return () => {
          window.clearTimeout(e);
        };
      }),
      (t[11] = c),
      (t[12] = d),
      (t[13] = o),
      (t[14] = m),
      (t[15] = l),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== c ||
    t[18] !== n ||
    t[19] !== d ||
    t[20] !== o ||
    t[21] !== i ||
    t[22] !== a ||
    t[23] !== l
      ? ((g = [c, n, d, o, i, a, l]),
        (t[17] = c),
        (t[18] = n),
        (t[19] = d),
        (t[20] = o),
        (t[21] = i),
        (t[22] = a),
        (t[23] = l),
        (t[24] = g))
      : (g = t[24]),
    (0, Vm.useEffect)(h, g),
    null
  );
}
function Pm({ cwd: e, hostId: t, openPath: n }) {
  return !!(e ?? n);
}
function Fm(e) {
  let t = (0, Bm.c)(14),
    { turnId: n, cwd: r, deferEnrichment: i, hostId: a, openPath: o, targets: s } = e,
    c = p(),
    d = E(l),
    f = Je(),
    h;
  t[0] !== f || t[1] !== d
    ? ((h = {
        onSuccess: (e) => {
          e.success ||
            d
              .get(Jn)
              .danger(
                f.formatMessage({
                  id: `localConversation.openTarget.error`,
                  defaultMessage: `Unable to open item`,
                  description: `Toast shown when opening a file or website externally fails`,
                }),
              );
        },
        onError: () => {
          d.get(Jn).danger(
            f.formatMessage({
              id: `localConversation.openTarget.error`,
              defaultMessage: `Unable to open item`,
              description: `Toast shown when opening a file or website externally fails`,
            }),
          );
        },
      }),
      (t[0] = f),
      (t[1] = d),
      (t[2] = h))
    : (h = t[2]);
  let { mutate: g } = u(`open-file`, h),
    _ = C(ze),
    v = C(Dm),
    y;
  return (
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== g ||
    t[7] !== o ||
    t[8] !== _ ||
    t[9] !== c ||
    t[10] !== v ||
    t[11] !== s ||
    t[12] !== n
      ? ((y = (e, t) => {
          let { appPath: l, openMode: u, persistPreferred: d, line: f, column: p, path: h } = t,
            y = h ?? o ?? r;
          y &&
            (s?.find((t) => t.target === e && (t.appPath ?? null) === (l ?? null))?.kind ===
              `editor` &&
              v != null &&
              n != null &&
              _.submitCodexAnalyticsEvent?.({
                action: `open_in_ide`,
                eventKind: `action`,
                metadata: { target: e },
                threadId: v.threadId,
                turnId: n,
              }),
            d &&
              r &&
              c.setQueryData(
                m(`open-in-targets`, {
                  cwd: r,
                  hostId: a,
                  path: o,
                  ...(i ? { deferEnrichment: !0 } : {}),
                }),
                (t) =>
                  t && {
                    ...t,
                    preferredTarget: e,
                    targets: t.targets.map((t) => ({
                      ...t,
                      default: t.target === e ? !0 : void 0,
                    })),
                  },
              ),
            g({
              path: y,
              cwd: r ?? null,
              target: e,
              appPath: l,
              line: f,
              column: p,
              openMode: u,
              ...(d && r ? { persistPreferredTargetPath: r } : {}),
              hostId: a,
            }));
        }),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = g),
        (t[7] = o),
        (t[8] = _),
        (t[9] = c),
        (t[10] = v),
        (t[11] = s),
        (t[12] = n),
        (t[13] = y))
      : (y = t[13]),
    y
  );
}
function Im(e) {
  let t = (0, Bm.c)(19),
    { cwd: n, deferEnrichment: r, hostId: i, isQueryEnabled: a, openPath: s } = e,
    c = r === void 0 ? !1 : r,
    l = p(),
    u,
    d,
    f;
  t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== s
    ? ((u = { cwd: n, hostId: i, path: s, ...(c ? { deferEnrichment: !0 } : {}) }),
      (f = S),
      (d = m(`open-in-targets`, u)),
      (t[0] = n),
      (t[1] = c),
      (t[2] = i),
      (t[3] = s),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : ((u = t[4]), (d = t[5]), (f = t[6]));
  let h;
  t[7] !== u || t[8] !== l
    ? ((h = (e) => {
        let { signal: t } = e;
        return Lm({ params: u, queryClient: l, signal: t });
      }),
      (t[7] = u),
      (t[8] = l),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== n || t[11] !== i || t[12] !== a || t[13] !== s
    ? ((g = Pm({ cwd: n, hostId: i, openPath: s }) && a),
      (t[10] = n),
      (t[11] = i),
      (t[12] = a),
      (t[13] = s),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== d || t[16] !== h || t[17] !== g
      ? ((_ = { queryKey: d, queryFn: h, enabled: g, staleTime: o.ONE_MINUTE }),
        (t[15] = d),
        (t[16] = h),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    f(_)
  );
}
async function Lm({ params: e, queryClient: t, signal: n }) {
  if (e.deferEnrichment) return km({ params: e, queryClient: t, signal: n });
  if (zm(e.hostId) && Rm(e.path)) {
    let r = await y(`open-in-targets`, {
      params: { ...e, nativeBrowserDiscovery: `known` },
      signal: n,
    });
    r.targets.some((e) => e.kind === `native` && e.appPath != null) &&
      t.setQueryData(m(`open-in-targets`, e), r);
  }
  return y(`open-in-targets`, { params: e, signal: n });
}
function Rm(e) {
  if (e == null) return !1;
  if (_(e) || v(e)) return !0;
  try {
    let t = new URL(e);
    return t.protocol === `http:` || t.protocol === `https:`;
  } catch {
    return !1;
  }
}
function zm(e) {
  return e == null || e === `local`;
}
var Bm,
  Vm,
  Hm = e(() => {
    ((Bm = d()), g(), f(), r(), (Vm = t(a(), 1)), Ye(), Qn(), Om(), Pe(), A(), s(), i(), h(), jm());
  });
function Um(e, t, n) {
  let r = e == null ? null : (0, Ym.jsx)(`div`, { slot: ki, children: e }),
    i =
      t != null && n != null
        ? (0, Ym.jsx)(`div`, { slot: Ai, children: t(n.item, n.context) })
        : null;
  return r == null && i == null ? null : (0, Ym.jsxs)(Ym.Fragment, { children: [r, i] });
}
function Wm(e, t) {
  return typeof window > `u` && t != null
    ? (0, Ym.jsxs)(Ym.Fragment, {
        children: [
          (0, Ym.jsx)(`template`, {
            shadowrootmode: `open`,
            dangerouslySetInnerHTML: { __html: t.shadowHtml },
          }),
          e,
        ],
      })
    : (0, Ym.jsx)(Ym.Fragment, { children: e });
}
function Gm(e) {
  let t = e.shadowRoot;
  return t?.querySelector(`[data-file-tree-id]`) instanceof HTMLElement ||
    t?.querySelector(`[data-file-tree-id]`) instanceof SVGElement
    ? !0
    : e.querySelector(`template[shadowrootmode="open"]`) instanceof HTMLTemplateElement;
}
function Km(e, t, n, r, i) {
  let a = { ...(e ?? {}) };
  if ((t != null && delete a.header, n)) {
    let t = e?.contextMenu,
      n = t?.onClose,
      o = t?.onOpen;
    ((a.contextMenu = {
      ...(t ?? {}),
      enabled: !0,
      onClose: () => {
        (n?.(), r());
      },
      onOpen: (e, t) => {
        (i(e, t), o?.(e, t));
      },
    }),
      delete a.contextMenu.render);
  }
  return a.header != null || a.contextMenu != null ? a : void 0;
}
function qm({ header: e, id: t, model: n, preloadedData: r, renderContextMenu: i, ...a }) {
  let [o, s] = (0, Jm.useState)(null),
    [c, l] = (0, Jm.useState)(null),
    u = (0, Jm.useRef)(n.getComposition()),
    d = (0, Jm.useRef)(n);
  d.current !== n && ((d.current = n), (u.current = n.getComposition()));
  let f = i != null,
    p = (0, Jm.useCallback)(() => {
      s(null);
    }, []),
    m = (0, Jm.useCallback)((e, t) => {
      s({ context: t, item: e });
    }, []),
    h = u.current,
    g = (0, Jm.useMemo)(() => Km(h, e, f, p, m), [h, p, m, f, e]),
    _ = (0, Jm.useCallback)((e) => {
      l(e);
    }, []);
  ((0, Jm.useEffect)(() => {
    f || s(null);
  }, [f]),
    Xm(() => {
      n.setComposition(g);
    }, [g, n]),
    Xm(() => {
      if (c != null)
        return (
          r != null && Gm(c)
            ? n.hydrate({ fileTreeContainer: c })
            : n.render({ fileTreeContainer: c }),
          () => {
            (n.unmount(), n.setComposition(h));
          }
        );
    }, [h, c, n, r]));
  let v = Wm(Um(e, i, o), r),
    y = t ?? r?.id,
    b = {
      "--trees-item-height": `${String(n.getItemHeight())}px`,
      "--trees-density-override": n.getDensityFactor(),
      ...a.style,
    };
  return (0, Ym.jsx)(Ci, {
    ...a,
    id: y,
    ref: _,
    style: b,
    suppressHydrationWarning: r != null,
    children: v,
  });
}
var Jm,
  Ym,
  Xm,
  Zm = e(() => {
    (Mi(),
      (Jm = t(a(), 1)),
      (Ym = D()),
      (Xm = typeof window > `u` ? Jm.useEffect : Jm.useLayoutEffect));
  });
function Qm(e) {
  let [t] = (0, $m.useState)(() => new um(e)),
    n = (0, $m.useRef)({ timeout: null, model: t });
  return (
    (0, $m.useEffect)(() => {
      let { current: e } = n;
      return (
        e.timeout != null && (clearTimeout(e.timeout), (e.timeout = null)),
        () => {
          e.timeout = setTimeout(() => e.model.cleanUp(), 1);
        }
      );
    }, []),
    { model: t }
  );
}
var $m,
  eh = e(() => {
    (dm(), ($m = t(a(), 1)));
  }),
  th = e(() => {
    (Zm(), eh());
  });
function nh({ idPrefix: e, messages: t, onOpenInTarget: n, primaryTarget: r, visibleTargets: i }) {
  return r == null
    ? []
    : [
        {
          id: `${e}-primary`,
          message: t.openInTarget,
          messageValues: { target: r.label },
          icon: r.icon,
          onSelect: () => n(r.target, r.appPath),
        },
        {
          id: `${e}-targets`,
          message: t.openIn,
          submenu: i.map((r) => ({
            id: `${e}-target-${r.id}`,
            message: t.openInTargetSubmenu,
            messageValues: { target: r.label },
            icon: r.icon,
            onSelect: () => n(r.target, r.appPath),
          })),
        },
      ];
}
var rh = e(() => {});
function ih({
  isLoadingOpenTargets: e = !1,
  onAddToChat: t,
  onCopyPath: n,
  onOpenInTarget: r,
  primaryTarget: i,
  targetPath: a,
  visibleTargets: o,
}) {
  if (a == null) return [];
  let s = n == null ? `workspace` : `review`,
    c = [];
  return (
    n != null &&
      c.push({
        id: `copy-path`,
        message: z({
          id: `codex.review.fileTree.contextMenu.copyPath`,
          defaultMessage: `Copy path`,
          description: `Context menu action to copy the path of a file tree item`,
        }),
        onSelect: () => {
          n(a);
        },
      }),
    t != null &&
      c.push({
        id: `add-to-chat`,
        message: z({
          id: `threadSidePanel.workspaceBrowser.addToChat`,
          defaultMessage: `Add to chat`,
          description: `Context menu action for adding a file from the file tree to the current chat`,
        }),
        onSelect: () => {
          t(a);
        },
      }),
    e
      ? [
          {
            id: `open-in-loading`,
            message: sh(s),
            tooltipMessage: z({
              id: `threadSidePanel.workspaceBrowser.openIn.loading`,
              defaultMessage: `Loading available apps…`,
              description: `Tooltip shown when the file tree is still loading app options for opening a file`,
            }),
            enabled: !1,
          },
          { id: `open-in-separator`, type: `separator` },
          ...c,
        ]
      : i == null
        ? c
        : [
            ...nh({
              idPrefix: ah(s),
              messages: oh(s),
              onOpenInTarget: (e, t) => {
                r(e, t, a);
              },
              primaryTarget: i,
              visibleTargets: o,
            }),
            { id: `open-in-separator`, type: `separator` },
            ...c,
          ]
  );
}
function ah(e) {
  switch (e) {
    case `review`:
      return `review-file-tree-open`;
    case `workspace`:
      return `workspace-directory-tree-open`;
  }
}
function oh(e) {
  switch (e) {
    case `review`:
      return {
        openInTarget: z({
          id: `codex.review.fileTree.contextMenu.openInTarget`,
          defaultMessage: `Open in {target}`,
          description: `Context menu action to open a review file in the preferred app`,
        }),
        openIn: sh(e),
        openInTargetSubmenu: z({
          id: `codex.review.fileTree.contextMenu.openWithTarget`,
          defaultMessage: `{target}`,
          description: `Context menu action to open a review file in a specific app`,
        }),
      };
    case `workspace`:
      return {
        openInTarget: z({
          id: `threadSidePanel.workspaceBrowser.openInTarget`,
          defaultMessage: `Open in {target}`,
          description: `Context menu action to open a workspace browser file in the preferred app`,
        }),
        openIn: sh(e),
        openInTargetSubmenu: z({
          id: `threadSidePanel.workspaceBrowser.openInTargetSubmenu`,
          defaultMessage: `{target}`,
          description: `Context menu action to open a workspace browser file in a specific app`,
        }),
      };
  }
}
function sh(e) {
  switch (e) {
    case `review`:
      return z({
        id: `codex.review.fileTree.contextMenu.openWith`,
        defaultMessage: `Open with`,
        description: `Context menu submenu label for choosing an app to open a review file`,
      });
    case `workspace`:
      return z({
        id: `threadSidePanel.workspaceBrowser.openIn`,
        defaultMessage: `Open in…`,
        description: `Context menu submenu label for choosing an app to open a workspace browser file`,
      });
  }
}
var ch = e(() => {
  (Ye(), rh());
});
function lh(e) {
  for (let t of e.composedPath()) {
    if (!(t instanceof Element) || t.getAttribute(`data-item-type`) !== `file`) continue;
    let e = t.getAttribute(`data-item-path`);
    if (e) return e;
  }
  return null;
}
var uh = e(() => {});
function dh(e) {
  let t = (0, Eh.c)(97),
    {
      cwd: n,
      decorationIcons: r,
      flattenEmptyDirectories: i,
      hostId: a,
      icons: o,
      initialExpandedPaths: s,
      initialScrollTop: c,
      onClick: l,
      onDoubleClick: d,
      onExpandedPathsChange: f,
      onSelectionChange: m,
      onStateChange: h,
      paths: g,
      revealSelectedPath: _,
      renderRowDecoration: v,
      resetKey: y,
      selectedPath: x,
      unsafeCSS: S,
    } = e,
    C = i === void 0 ? !1 : i,
    w = c === void 0 ? 0 : c,
    T = _ === void 0 ? !1 : _,
    E = pm(fm()),
    { platform: D } = ar(),
    ee = u(`add-context-file`),
    O = p(),
    k;
  t[0] !== n || t[1] !== a
    ? ((k = { cwd: n, hostId: a }), (t[0] = n), (t[1] = a), (t[2] = k))
    : (k = t[2]);
  let A = Mm(k),
    j;
  t[3] === g ? (j = t[4]) : ((j = g.map(fh)), (t[3] = g), (t[4] = j));
  let M = j,
    N;
  if (t[5] !== n || t[6] !== g || t[7] !== D) {
    N = new Map();
    for (let e of g)
      typeof e != `string` && N.set(e.displayPath, b(n ?? ``, e.path, D === `windows`));
    ((t[5] = n), (t[6] = g), (t[7] = D), (t[8] = N));
  } else N = t[8];
  let P = N,
    te;
  t[9] !== r || t[10] !== o
    ? ((te = mh(o, r)), (t[9] = r), (t[10] = o), (t[11] = te))
    : (te = t[11]);
  let ne = te,
    re = (0, Dh.useRef)(null),
    ie;
  t[12] === s ? (ie = t[13]) : ((ie = Array.from(s ?? [])), (t[12] = s), (t[13] = ie));
  let ae = (0, Dh.useRef)(ie),
    oe = (0, Dh.useRef)(null),
    se = (0, Dh.useRef)(null),
    F = (0, Dh.useRef)(w),
    ce = (0, Dh.useRef)(x ?? null),
    le;
  t[14] === h
    ? (le = t[15])
    : ((le = () => {
        h?.({ expandedPaths: ae.current, scrollTop: F.current, selectedPath: ce.current });
      }),
      (t[14] = h),
      (t[15] = le));
  let I = we(le),
    ue;
  t[16] !== f || t[17] !== I
    ? ((ue = (e) => {
        ((ae.current = e), f?.(e), I());
      }),
      (t[16] = f),
      (t[17] = I),
      (t[18] = ue))
    : (ue = t[18]);
  let de = we(ue),
    fe;
  t[19] !== m || t[20] !== I
    ? ((fe = (e) => {
        ((ce.current = e[0] ?? null), m?.(e), I());
      }),
      (t[19] = m),
      (t[20] = I),
      (t[21] = fe))
    : (fe = t[21]);
  let pe = we(fe),
    me;
  t[22] === x ? (me = t[23]) : ((me = x == null ? void 0 : [x]), (t[22] = x), (t[23] = me));
  let he = `
      :host {
        --trees-bg-override: var(--color-token-main-surface-primary);
        --trees-bg-muted-override: var(--color-token-list-hover-background);
        --trees-border-color-override: var(--color-token-border);
        --trees-fg-override: var(--color-token-foreground);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-token-list-focus-outline);
        --trees-item-padding-x-override: 6px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-token-list-active-selection-background);
        --trees-selected-fg-override: var(--color-token-list-active-selection-foreground);
        --trees-item-row-gap-override: 10px;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: var(--color-token-main-surface-primary);
      }

      [data-file-tree-virtualized-scroll='true'] {
        scrollbar-gutter: auto;
      }

      [role="treeitem"] {
        cursor: var(--cursor-interaction) !important;
      }

      [role="treeitem"] * {
        cursor: var(--cursor-interaction) !important;
      }

      [data-item-type='file']:has([data-item-section='content']:empty) {
        display: none;
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${S ?? ``}
    `,
    ge;
  t[24] !== ne ||
  t[25] !== C ||
  t[26] !== pe ||
  t[27] !== s ||
  t[28] !== v ||
  t[29] !== me ||
  t[30] !== he ||
  t[31] !== M
    ? ((ge = {
        fileTreeSearchMode: `hide-non-matches`,
        flattenEmptyDirectories: C,
        icons: ne,
        initialExpandedPaths: s,
        initialSelectedPaths: me,
        itemHeight: kh,
        onSelectionChange: pe,
        paths: M,
        renderRowDecoration: v,
        search: !1,
        stickyFolders: !0,
        unsafeCSS: he,
      }),
      (t[24] = ne),
      (t[25] = C),
      (t[26] = pe),
      (t[27] = s),
      (t[28] = v),
      (t[29] = me),
      (t[30] = he),
      (t[31] = M),
      (t[32] = ge))
    : (ge = t[32]);
  let { model: L } = Qm(ge),
    _e,
    ve;
  (t[33] !== s || t[34] !== L || t[35] !== y || t[36] !== M
    ? ((_e = () => {
        let e = Array.from(s ?? []),
          t = oe.current;
        (t != null &&
          t.model === L &&
          t.resetKey === y &&
          ph(t.treePaths, M) &&
          ph(t.initialExpandedPaths, e)) ||
          ((oe.current = {
            initialExpandedPaths: e,
            model: L,
            resetKey: y,
            treePaths: Array.from(M),
          }),
          (ae.current = e),
          (se.current = null),
          L.resetPaths(M, { initialExpandedPaths: s }));
      }),
      (ve = [s, L, y, M]),
      (t[33] = s),
      (t[34] = L),
      (t[35] = y),
      (t[36] = M),
      (t[37] = _e),
      (t[38] = ve))
    : ((_e = t[37]), (ve = t[38])),
    (0, Dh.useEffect)(_e, ve));
  let ye, be;
  (t[39] !== w || t[40] !== L || t[41] !== T || t[42] !== x
    ? ((ye = () => {
        let e = null,
          t = 0,
          n = () => {
            ((e = null),
              !wh(L, w) && (t >= Ah || ((t += 1), (e = window.requestAnimationFrame(n)))));
          };
        return (
          w > 0 && !(T && x != null) ? ((F.current = w), n()) : (F.current = 0),
          () => {
            e != null && window.cancelAnimationFrame(e);
          }
        );
      }),
      (be = [w, L, T, x]),
      (t[39] = w),
      (t[40] = L),
      (t[41] = T),
      (t[42] = x),
      (t[43] = ye),
      (t[44] = be))
    : ((ye = t[43]), (be = t[44])),
    (0, Dh.useEffect)(ye, be));
  let xe;
  t[45] !== L || t[46] !== T || t[47] !== x
    ? ((xe = () => {
        if (((ce.current = x ?? null), bh(L, x), !T || x == null)) {
          se.current = null;
          return;
        }
        se.current !== x && xh(L, x) && (se.current = x);
      }),
      (t[45] = L),
      (t[46] = T),
      (t[47] = x),
      (t[48] = xe))
    : (xe = t[48]);
  let Se;
  (t[49] !== L || t[50] !== T || t[51] !== x || t[52] !== M
    ? ((Se = [L, T, x, M]), (t[49] = L), (t[50] = T), (t[51] = x), (t[52] = M), (t[53] = Se))
    : (Se = t[53]),
    (0, Dh.useEffect)(xe, Se));
  let R, Ce;
  (t[54] !== ne || t[55] !== L
    ? ((R = () => {
        L.setIcons(ne);
      }),
      (Ce = [ne, L]),
      (t[54] = ne),
      (t[55] = L),
      (t[56] = R),
      (t[57] = Ce))
    : ((R = t[56]), (Ce = t[57])),
    (0, Dh.useEffect)(R, Ce));
  let Te, Ee;
  (t[58] !== de || t[59] !== L || t[60] !== M
    ? ((Te = () =>
        L.subscribe(() => {
          ((F.current = Ch(L)), de(yh(L, M)));
        })),
      (Ee = [de, L, M]),
      (t[58] = de),
      (t[59] = L),
      (t[60] = M),
      (t[61] = Te),
      (t[62] = Ee))
    : ((Te = t[61]), (Ee = t[62])),
    (0, Dh.useEffect)(Te, Ee));
  let De, Oe;
  (t[63] !== L || t[64] !== I
    ? ((De = () => {
        let e = null,
          t = 0,
          n = null,
          r = () => {
            e = null;
            let i = Sh(L);
            if (i != null) {
              let e = () => {
                ((F.current = i.scrollTop), I());
              };
              (i.addEventListener(`scroll`, e, { passive: !0 }),
                (n = () => {
                  i.removeEventListener(`scroll`, e);
                }));
              return;
            }
            t >= Ah || ((t += 1), (e = window.requestAnimationFrame(r)));
          };
        return (
          r(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.());
          }
        );
      }),
      (Oe = [L, I]),
      (t[63] = L),
      (t[64] = I),
      (t[65] = De),
      (t[66] = Oe))
    : ((De = t[65]), (Oe = t[66])),
    (0, Dh.useEffect)(De, Oe));
  let ke;
  t[67] !== n || t[68] !== a
    ? ((ke = (0, Oh.jsx)(Nm, { cwd: n, hostId: a })), (t[67] = n), (t[68] = a), (t[69] = ke))
    : (ke = t[69]);
  let Ae;
  t[70] !== ee || t[71] !== n || t[72] !== A || t[73] !== a || t[74] !== O || t[75] !== P
    ? ((Ae = () => {
        let e = vh(P, re.current);
        return ih({
          ...gh({ cwd: n, fallbackOpenTargets: A, hostId: a, queryClient: O, targetPath: e }),
          onAddToChat:
            a == null
              ? void 0
              : (e) => {
                  ee.mutateAsync({ hostId: a, path: e });
                },
          onCopyPath: xm,
          onOpenInTarget: (e, t, n) => {
            A.open(e, { appPath: t, persistPreferred: !1, path: n });
          },
          targetPath: e,
        });
      }),
      (t[70] = ee),
      (t[71] = n),
      (t[72] = A),
      (t[73] = a),
      (t[74] = O),
      (t[75] = P),
      (t[76] = Ae))
    : (Ae = t[76]);
  let je;
  t[77] !== n || t[78] !== a || t[79] !== O || t[80] !== P
    ? ((je = () => _h({ cwd: n, hostId: a, queryClient: O, targetPath: vh(P, re.current) })),
      (t[77] = n),
      (t[78] = a),
      (t[79] = O),
      (t[80] = P),
      (t[81] = je))
    : (je = t[81]);
  let Me;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (e) => {
        re.current = lh(e.nativeEvent);
      }),
      (t[82] = Me))
    : (Me = t[82]);
  let Ne;
  t[83] === E
    ? (Ne = t[84])
    : ((Ne = {
        backgroundColor: `var(--color-token-main-surface-primary)`,
        color: `var(--color-token-foreground)`,
        colorScheme: E,
        width: `100%`,
      }),
      (t[83] = E),
      (t[84] = Ne));
  let Pe;
  t[85] !== L || t[86] !== l || t[87] !== d || t[88] !== Ne
    ? ((Pe = (0, Oh.jsx)(qm, {
        "data-tab-preview-pin-exempt": !0,
        onClick: l,
        onContextMenu: Me,
        onDoubleClick: d,
        model: L,
        style: Ne,
      })),
      (t[85] = L),
      (t[86] = l),
      (t[87] = d),
      (t[88] = Ne),
      (t[89] = Pe))
    : (Pe = t[89]);
  let Fe;
  t[90] !== Ae || t[91] !== je || t[92] !== Pe
    ? ((Fe = (0, Oh.jsx)(An, {
        awaitBeforeOpen: !1,
        getItems: Ae,
        onBeforeOpen: je,
        children: Pe,
      })),
      (t[90] = Ae),
      (t[91] = je),
      (t[92] = Pe),
      (t[93] = Fe))
    : (Fe = t[93]);
  let Ie;
  return (
    t[94] !== ke || t[95] !== Fe
      ? ((Ie = (0, Oh.jsxs)(Oh.Fragment, { children: [ke, Fe] })),
        (t[94] = ke),
        (t[95] = Fe),
        (t[96] = Ie))
      : (Ie = t[96]),
    Ie
  );
}
function fh(e) {
  return typeof e == `string` ? e : e.displayPath;
}
function ph(e, t) {
  return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
function mh(e, t) {
  if (t == null || t.length === 0) return e;
  let n = t
      .map(
        (e) =>
          `<symbol id="${e.name}" viewBox="${e.viewBox ?? `0 0 ${e.width ?? 0} ${e.height ?? 0}`}">${e.body}</symbol>`,
      )
      .join(``),
    r = hh(typeof e == `string` ? void 0 : e?.spriteSheet, n);
  return e == null
    ? { set: `complete`, spriteSheet: r }
    : typeof e == `string`
      ? { set: e, spriteSheet: r }
      : { ...e, spriteSheet: r };
}
function hh(e, t) {
  return e == null
    ? `<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`
    : e.replace(`</svg>`, `${t}</svg>`);
}
function gh({ cwd: e, fallbackOpenTargets: t, hostId: n, queryClient: r, targetPath: i }) {
  if (i == null) return { isLoadingOpenTargets: !1, primaryTarget: null, visibleTargets: [] };
  let a = m(`open-in-targets`, { cwd: e, hostId: n, path: i }),
    o = r.getQueryData(a),
    s = o?.targets ?? t.targets,
    c = o?.availableTargets ?? t.availableTargets,
    l = o?.preferredTarget ?? t.preferredTarget,
    u = o?.mode ?? t.mode;
  return {
    isLoadingOpenTargets:
      o == null && !t.hasLoadedTargets && r.getQueryState(a)?.status !== `error`,
    primaryTarget: wm({ preferredTarget: l, targets: s, availableTargets: c, mode: u }),
    visibleTargets: Cm({ targets: s, availableTargets: c, includeHiddenTargets: !0, mode: u }),
  };
}
function _h({ cwd: e, hostId: t, queryClient: n, targetPath: r }) {
  if (r != null)
    return n.prefetchQuery({
      gcTime: o.INFINITE,
      queryKey: m(`open-in-targets`, { cwd: e, hostId: t, path: r }),
      queryFn: () => y(`open-in-targets`, { params: { cwd: e, hostId: t, path: r } }),
      staleTime: o.ONE_MINUTE,
    });
}
function vh(e, t) {
  return t == null ? null : (e.get(t) ?? t);
}
function yh(e, t) {
  let n = [];
  for (let r of t) {
    if (!r.endsWith(`/`)) continue;
    let t = r.slice(0, -1),
      i = e.getItem(t);
    i == null || !Th(i) || !i.isExpanded() || n.push(t);
  }
  return n;
}
function bh(e, t) {
  let n = e.getSelectedPaths();
  if (t == null) {
    for (let t of n) e.getItem(t)?.deselect();
    return;
  }
  if (!(n.length === 1 && n[0] === t)) {
    for (let t of n) e.getItem(t)?.deselect();
    e.getItem(t)?.select();
  }
}
function xh(e, t) {
  return e.getItem(t) == null ? !1 : (e.scrollToPath(t, { offset: `top` }), !0);
}
function Sh(e) {
  return (
    e
      .getFileTreeContainer()
      ?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`) ?? null
  );
}
function Ch(e) {
  return Sh(e)?.scrollTop ?? 0;
}
function wh(e, t) {
  let n = Sh(e);
  return n == null ? !1 : ((n.scrollTop = Math.max(0, t)), !0);
}
function Th(e) {
  return e.isDirectory();
}
var Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh = e(() => {
    ((Eh = d()),
      th(),
      g(),
      (Dh = t(a(), 1)),
      ch(),
      Fn(),
      uh(),
      cr(),
      Em(),
      Hm(),
      bm(),
      Sm(),
      T(),
      i(),
      R(),
      h(),
      (Oh = D()),
      (kh = 28),
      (Ah = 60));
  });
function Mh(e) {
  let t = (0, Nh.c)(23),
    { autoFocus: n, inputId: r, inputRef: i, onQueryChange: a, searchQuery: o } = e,
    s = r === void 0 ? `file-tree-search` : r,
    c = Je(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Ph.jsx)(Le, {
        id: `codex.fileTreeSearch.label`,
        defaultMessage: `Filter files`,
        description: `Label for a file tree filter input`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === s
    ? (u = t[2])
    : ((u = (0, Ph.jsx)(`label`, { className: `sr-only`, htmlFor: s, children: l })),
      (t[1] = s),
      (t[2] = u));
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Ph.jsx)(ve, {
        className: `icon-xs ms-2 shrink-0 text-token-input-placeholder-foreground`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === a ? (f = t[5]) : ((f = (e) => a(e.target.value)), (t[4] = a), (t[5] = f));
  let p;
  t[6] === c
    ? (p = t[7])
    : ((p = c.formatMessage({
        id: `codex.fileTreeSearch.placeholder`,
        defaultMessage: `Filter files…`,
        description: `Placeholder text for a file tree filter input`,
      })),
      (t[6] = c),
      (t[7] = p));
  let m;
  t[8] !== n || t[9] !== s || t[10] !== i || t[11] !== o || t[12] !== f || t[13] !== p
    ? ((m = (0, Ph.jsx)(`input`, {
        autoFocus: n,
        id: s,
        ref: i,
        className: `w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-token-foreground ring-0 outline-none select-text placeholder:text-token-input-placeholder-foreground focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none`,
        type: `text`,
        value: o,
        onChange: f,
        placeholder: p,
      })),
      (t[8] = n),
      (t[9] = s),
      (t[10] = i),
      (t[11] = o),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] !== c || t[16] !== a || t[17] !== o.length
    ? ((h =
        o.length > 0
          ? (0, Ph.jsx)(Tt, {
              "aria-label": c.formatMessage({
                id: `codex.fileTreeSearch.clear`,
                defaultMessage: `Clear file filter`,
                description: `Button label to clear a file tree filter input`,
              }),
              className: `text-token-input-placeholder-foreground hover:text-token-foreground`,
              color: `ghost`,
              size: `icon`,
              onClick: () => a(``),
              children: (0, Ph.jsx)(er, { className: `icon-2xs` }),
            })
          : null),
      (t[15] = c),
      (t[16] = a),
      (t[17] = o.length),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== u || t[20] !== m || t[21] !== h
      ? ((g = (0, Ph.jsxs)(`div`, {
          className: `relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-token-border bg-token-bg-fog text-base leading-[18px]`,
          children: [u, d, m, h],
        })),
        (t[19] = u),
        (t[20] = m),
        (t[21] = h),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
var Nh,
  Ph,
  Fh = e(() => {
    ((Nh = d()), Ye(), At(), ae(), tr(), (Ph = D()));
  });
export {
  yt as $,
  cr as A,
  Zn as B,
  pm as C,
  Vi as D,
  Li as E,
  tr as F,
  yn as G,
  An as H,
  Bn as I,
  xn as J,
  _n as K,
  Qn as L,
  ir as M,
  nr as N,
  ur as O,
  er as P,
  At as Q,
  Rn as R,
  fm as S,
  Mc as T,
  Fn as U,
  Yn as V,
  vn as W,
  Tn as X,
  gn as Y,
  Tt as Z,
  Em as _,
  et as _t,
  lh as a,
  ct as at,
  mm as b,
  Ze as bt,
  rh as c,
  ft as ct,
  Mm as d,
  at as dt,
  wt as et,
  Om as f,
  B as ft,
  wm as g,
  Qe as gt,
  Cm as h,
  $e as ht,
  jh as i,
  mt as it,
  ar as j,
  Si as k,
  Nm as l,
  ut as lt,
  Tm as m,
  nt as mt,
  Fh as n,
  vt as nt,
  uh as o,
  st as ot,
  Dm as p,
  rt as pt,
  hn as q,
  dh as r,
  ht as rt,
  nh as s,
  pt as st,
  Mh as t,
  _t as tt,
  Hm as u,
  tt as ut,
  xm as v,
  V as vt,
  jc as w,
  bm as x,
  Sm as y,
  Xe as yt,
  Jn as z,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js.map
