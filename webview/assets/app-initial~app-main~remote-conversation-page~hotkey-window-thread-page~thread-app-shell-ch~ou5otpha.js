import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  BV as i,
  DM as a,
  EV as o,
  Em as s,
  FB as c,
  Fx as l,
  GN as u,
  I_ as d,
  Ix as f,
  JF as p,
  JV as m,
  M_ as h,
  OV as g,
  Op as _,
  PB as v,
  QP as y,
  SV as b,
  VE as x,
  VN as S,
  am as C,
  bF as w,
  bV as T,
  dV as E,
  gp as D,
  iF as O,
  im as k,
  kM as ee,
  qV as A,
  sF as j,
  yV as M,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  $s as N,
  Bs as P,
  Fs as F,
  Gs as te,
  Hs as ne,
  Is as re,
  Jl as ie,
  Ju as ae,
  Kl as oe,
  Ls as se,
  Ps as ce,
  Qs as le,
  Rs as ue,
  Us as de,
  Vs as fe,
  Wl as pe,
  Ws as me,
  Yl as he,
  Yu as ge,
  Zs as _e,
  ds as ve,
  ec as ye,
  qs as be,
  qu as xe,
  ts as Se,
  zs as I,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  b as Ce,
  x as we,
  y as Te,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r.js";
import {
  mo as Ee,
  po as De,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import { At as Oe, kt as ke } from "./app-initial~app-main~onboarding-page~profile.js";
import { t as Ae } from "./app-initial~app-main~worktree-init-v2-page~page~remote-conversation-page~pull-requests-page~iwrno211.js";
function je(e) {
  let t = (0, L.c)(16),
    n = o(B),
    r;
  t[0] === e.dependencies
    ? (r = t[1])
    : ((r = e.dependencies ? e.dependencies.map(Fe).join(`|`) : ``),
      (t[0] = e.dependencies),
      (t[1] = r));
  let i = r,
    a;
  t[2] !== e || t[3] !== n
    ? ((a = () => {
        n((t) => {
          let n = !1,
            r = [...t].map((t) => (t.id === e.id ? ((n = !0), e) : t));
          return (n || r.push(e), (0, R.default)(r.filter(Pe), [Ne, Me]));
        });
      }),
      (t[2] = e),
      (t[3] = n),
      (t[4] = a))
    : (a = t[4]);
  let s = (0, z.useEffectEvent)(a),
    c;
  t[5] === s
    ? (c = t[6])
    : ((c = () => {
        s();
      }),
      (t[5] = s),
      (t[6] = c));
  let l;
  (t[7] !== i || t[8] !== e.enabled || t[9] !== e.id || t[10] !== e.order
    ? ((l = [e.id, e.enabled, e.order, i]),
      (t[7] = i),
      (t[8] = e.enabled),
      (t[9] = e.id),
      (t[10] = e.order),
      (t[11] = l))
    : (l = t[11]),
    (0, z.useEffect)(c, l));
  let u, d;
  (t[12] !== e.id || t[13] !== n
    ? ((u = () => () => {
        n((t) => t.filter((t) => t.id !== e.id));
      }),
      (d = [e.id, n]),
      (t[12] = e.id),
      (t[13] = n),
      (t[14] = u),
      (t[15] = d))
    : ((u = t[14]), (d = t[15])),
    (0, z.useEffect)(u, d));
}
function Me(e) {
  return e.id;
}
function Ne(e) {
  return e.order ?? 0;
}
function Pe(e) {
  return e.enabled !== !1;
}
function Fe(e) {
  return Ie(e);
}
function Ie(e) {
  return e == null ? `` : String(e);
}
var L,
  R,
  z,
  B,
  Le = e(() => {
    ((L = A()), b(), (R = t(Ae(), 1)), (z = t(m(), 1)), (B = g([])));
  });
function Re(e) {
  let t = (0, ze.c)(7),
    { conversationSource: n, diffSource: r, orchestrationId: i, isDefault: a } = e,
    o = n === void 0 ? null : n,
    s = r === void 0 ? null : r,
    l = c(h),
    u,
    d;
  return (
    t[0] !== o || t[1] !== s || t[2] !== a || t[3] !== i || t[4] !== l
      ? ((u = () =>
          ve(l, { conversationSource: o, diffSource: s }, { orchestrationId: i, isDefault: a })),
        (d = [o, s, a, i, l]),
        (t[0] = o),
        (t[1] = s),
        (t[2] = a),
        (t[3] = i),
        (t[4] = l),
        (t[5] = u),
        (t[6] = d))
      : ((u = t[5]), (d = t[6])),
    (0, Be.useEffect)(u, d),
    null
  );
}
var ze,
  Be,
  Ve = e(() => {
    ((ze = A()), r(), (Be = t(m(), 1)), d(), Se());
  });
function He(e, t) {
  return (0, Ue.useRef)(null);
}
var Ue,
  We = e(() => {
    Ue = t(m(), 1);
  }),
  V,
  Ge,
  Ke = e(() => {
    (t(m()),
      (V = i()),
      (Ge = (e) =>
        (0, V.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `currentColor`,
          viewBox: `0 0 20 20`,
          ...e,
          children: (0, V.jsx)(`path`, {
            d: `M5.693 11.056a2.71 2.71 0 0 1 2.432 2.694l-.015.277a2.71 2.71 0 0 1-2.694 2.432l-.276-.015a2.71 2.71 0 0 1-2.418-2.417l-.014-.277a2.709 2.709 0 0 1 2.708-2.708l.277.014Zm-.277 1.316a1.378 1.378 0 1 0 0 2.757 1.378 1.378 0 0 0 0-2.757Zm11.384.727a.665.665 0 0 1 0 1.302l-.134.014h-5.833a.665.665 0 0 1 0-1.33h5.833l.135.014ZM5.693 3.556A2.71 2.71 0 0 1 8.125 6.25l-.015.277A2.71 2.71 0 0 1 5.416 8.96l-.276-.015a2.71 2.71 0 0 1-2.418-2.417l-.014-.277a2.709 2.709 0 0 1 2.708-2.708l.277.014Zm-.277 1.316a1.378 1.378 0 1 0 .001 2.757 1.378 1.378 0 0 0-.001-2.757Zm11.384.727a.665.665 0 0 1 0 1.302l-.134.014h-5.833a.665.665 0 0 1 0-1.33h5.833l.135.014Z`,
          }),
        })));
  });
function qe(e) {
  let t = (0, Je.c)(33),
    { output: n } = e,
    r = ee(),
    i = we(Ce()),
    a = u(p.lightChromeTheme),
    o = u(p.darkChromeTheme),
    s = u(p.codeFontSize),
    c,
    l,
    d,
    f;
  if (t[0] !== s || t[1] !== o || t[2] !== a || t[3] !== i) {
    c = i === `light` ? ae(a, `light`) : ae(o, `dark`);
    let e = c.fonts.code?.trim() || `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`;
    ((d = s ?? 12),
      (l = se(e)),
      (f = e.split(`,`)[0]?.trim() ?? ``),
      (t[0] = s),
      (t[1] = o),
      (t[2] = a),
      (t[3] = i),
      (t[4] = c),
      (t[5] = l),
      (t[6] = d),
      (t[7] = f));
  } else ((c = t[4]), (l = t[5]), (d = t[6]), (f = t[7]));
  let m = f,
    h = (0, H.useRef)(null),
    g = (0, H.useRef)(null),
    _ = (0, H.useRef)(null),
    v = (0, H.useRef)(null),
    y = (0, H.useRef)(``),
    b = (0, H.useRef)(r),
    x,
    S;
  (t[8] === r
    ? ((x = t[9]), (S = t[10]))
    : ((x = () => {
        b.current = r;
      }),
      (S = [r]),
      (t[8] = r),
      (t[9] = x),
      (t[10] = S)),
    (0, H.useLayoutEffect)(x, S));
  let C, w;
  (t[11] !== c || t[12] !== i
    ? ((C = () => {
        let e = h.current;
        e != null && xe(e, c, i);
      }),
      (w = [c, i]),
      (t[11] = c),
      (t[12] = i),
      (t[13] = C),
      (t[14] = w))
    : ((C = t[13]), (w = t[14])),
    (0, H.useLayoutEffect)(C, w));
  let T;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        let e = _.current,
          t = h.current;
        e == null ||
          t == null ||
          ((e.options.theme = I(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[15] = T))
    : (T = t[15]);
  let E;
  (t[16] !== c || t[17] !== i ? ((E = [c, i]), (t[16] = c), (t[17] = i), (t[18] = E)) : (E = t[18]),
    (0, H.useEffect)(T, E));
  let D, O;
  (t[19] !== l || t[20] !== d || t[21] !== m
    ? ((D = () => {
        let e = _.current;
        if (e == null) return;
        let t = !1,
          n = null;
        return (
          (async () => {
            (await ue(m, d),
              !t &&
                ((e.options.fontFamily = l),
                (e.options.fontSize = d),
                (n = requestAnimationFrame(() => {
                  v.current?.fit();
                }))));
          })(),
          () => {
            ((t = !0), n != null && cancelAnimationFrame(n));
          }
        );
      }),
      (O = [l, d, m]),
      (t[19] = l),
      (t[20] = d),
      (t[21] = m),
      (t[22] = D),
      (t[23] = O))
    : ((D = t[22]), (O = t[23])),
    (0, H.useEffect)(D, O));
  let k, A;
  (t[24] !== l || t[25] !== d
    ? ((k = () => {
        let e = g.current,
          t = h.current;
        if (e == null || t == null) return;
        let n = !1,
          r = null,
          i = new Ze.Terminal({
            allowTransparency: !0,
            cursorStyle: `bar`,
            disableStdin: !0,
            fontSize: d,
            fontFamily: l,
            letterSpacing: 0,
            lineHeight: 1.2,
            linkHandler: te,
            theme: I(t),
          }),
          a = new Ye.FitAddon(),
          o = () => {
            r ??= requestAnimationFrame(() => {
              ((r = null), i.scrollToBottom());
            });
          };
        ((_.current = i),
          (v.current = a),
          i.loadAddon(a),
          i.loadAddon(new Xe.WebLinksAddon(me)),
          i.open(e));
        let s = re(i, () => b.current);
        (a.fit(), y.current.length > 0 && (i.write(P(y.current)), o()));
        let c = new ResizeObserver(() => {
          n || a.fit();
        });
        return (
          c.observe(e),
          () => {
            ((n = !0),
              r != null && (cancelAnimationFrame(r), (r = null)),
              c.disconnect(),
              (v.current = null),
              (_.current = null),
              s(),
              i.dispose());
          }
        );
      }),
      (A = [l, d]),
      (t[24] = l),
      (t[25] = d),
      (t[26] = k),
      (t[27] = A))
    : ((k = t[26]), (A = t[27])),
    (0, H.useEffect)(k, A));
  let j, M;
  (t[28] === n
    ? ((j = t[29]), (M = t[30]))
    : ((j = () => {
        let e = _.current;
        if (e == null) {
          y.current = n;
          return;
        }
        let t = y.current,
          r = ne(e);
        if (n.startsWith(t)) {
          let r = n.slice(t.length);
          r.length > 0 && e.write(P(r));
        } else (e.reset(), n.length > 0 && e.write(P(n)));
        if (((y.current = n), !r)) return;
        let i = requestAnimationFrame(() => {
          e.scrollToBottom();
        });
        return () => {
          cancelAnimationFrame(i);
        };
      }),
      (M = [n]),
      (t[28] = n),
      (t[29] = j),
      (t[30] = M)),
    (0, H.useEffect)(j, M));
  let N;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = {
        backgroundColor: `var(--vscode-terminal-background)`,
        color: `var(--vscode-terminal-foreground)`,
      }),
      (t[31] = N))
    : (N = t[31]);
  let F;
  return (
    t[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, U.jsx)(`div`, {
          "data-codex-xterm": !0,
          ref: h,
          className: `relative flex h-full w-full flex-col app-theme`,
          style: N,
          children: (0, U.jsx)(`div`, {
            className: `flex-1 overflow-hidden py-3 pl-3 tracking-normal`,
            children: (0, U.jsx)(`div`, { className: `h-full w-full overflow-hidden`, ref: g }),
          }),
        })),
        (t[32] = F))
      : (F = t[32]),
    F
  );
}
var Je,
  Ye,
  Xe,
  Ze,
  H,
  U,
  Qe = e(() => {
    ((Je = A()),
      (Ye = ye()),
      (Xe = N()),
      (Ze = le()),
      w(),
      (H = t(m(), 1)),
      a(),
      be(),
      S(),
      ge(),
      Te(),
      _e(),
      de(),
      fe(),
      F(),
      ce(),
      (U = i()));
  });
function $e(e) {
  let t = (0, W.c)(5),
    { conversationId: n, terminalId: r } = e,
    i = v(s, n),
    a;
  t[0] !== r || t[1] !== i ? ((a = nt(i, r)), (t[0] = r), (t[1] = i), (t[2] = a)) : (a = t[2]);
  let o = a,
    c = et(r),
    l = o?.aggregatedOutput ?? c?.buffer ?? ``,
    u;
  return (
    t[3] === l
      ? (u = t[4])
      : ((u = (0, G.jsx)(`div`, {
          className: `h-full min-h-0 bg-token-main-surface-primary`,
          children:
            l.length > 0
              ? (0, G.jsx)(qe, { output: l })
              : (0, G.jsx)(`div`, {
                  className: `font-vscode-editor text-size-code-sm p-4 text-token-description-foreground`,
                  children: (0, G.jsx)(j, {
                    id: `codex.localConversation.backgroundTerminalTab.noOutput`,
                    defaultMessage: `No output yet`,
                    description: `Placeholder shown in a background terminal output tab before any terminal output is available`,
                  }),
                }),
        })),
        (t[3] = l),
        (t[4] = u)),
    u
  );
}
function et(e) {
  let t = (0, W.c)(3),
    n,
    r;
  return (
    t[0] === e
      ? ((n = t[1]), (r = t[2]))
      : ((n = (t) => f.subscribeToSessionSnapshot(e, t)),
        (r = () => f.getSnapshot(e)),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r)),
    (0, rt.useSyncExternalStore)(n, r, tt)
  );
}
function tt() {
  return null;
}
function nt(e, t) {
  if (e == null) return null;
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n];
    if (r != null) {
      for (let e of r.items) if (e.type === `commandExecution` && e.id === t) return e;
    }
  }
  return null;
}
var W,
  rt,
  G,
  it = e(() => {
    ((W = A()), r(), (rt = t(m(), 1)), O(), _(), l(), Qe(), (G = i()));
  });
function at({ scope: e, backgroundTerminal: t, conversationId: n, fallbackTitle: r }) {
  he.openTab(e, $e, {
    icon: (0, ot.jsx)(De, { className: `icon-xs shrink-0` }),
    props: { conversationId: n, terminalId: t.id },
    id: `background-terminal:${n}:${t.id}`,
    title: t.command.length > 0 ? t.command : r,
  });
}
var ot,
  st = e(() => {
    (ie(), Ee(), it(), (ot = i()));
  });
function ct(e) {
  let t = [];
  for (let n of e) {
    let e = n.turns.length - 1;
    for (let r = e; r >= 0; --r) {
      let i = n.turns[r];
      if (i == null) continue;
      let a = r === e && i.status === `inProgress`;
      for (let e of i.items) {
        if (e?.type !== `commandExecution`) continue;
        let o = pt(e, i, a);
        if (o == null) continue;
        let s = ke(e);
        if (s.length === 0) continue;
        let c = i.commandExecutionStartedAtMsById?.[e.id];
        t.push({
          chatTitle: n.title,
          command: s,
          commandExecutionStartedAtMs: c,
          conversationId: n.id,
          cwd: e.cwd ?? n.cwd,
          hostId: n.hostId,
          id: `${n.id}:${i.turnId ?? r}:${e.id}`,
          itemId: e.id,
          osPid: null,
          processId: e.processId,
          source: o.source,
          startedAtMs: c ?? i.firstTurnWorkItemStartedAtMs ?? i.turnStartedAtMs ?? null,
          stopAction: o.stopAction,
          turnId: i.turnId,
        });
      }
    }
  }
  return t;
}
function lt(e, t) {
  let n = new Map(t.map((e) => [e.id, e]));
  return e.map((e) => {
    let t = n.get(e.conversationId);
    return {
      chatTitle: t?.title ?? e.chatTitle,
      command: e.command,
      commandExecutionStartedAtMs: e.startedAtMs,
      conversationId: e.conversationId,
      cwd: e.cwd ?? t?.cwd ?? null,
      hostId: t?.hostId ?? `local`,
      id: e.id,
      itemId: e.itemId,
      osPid: e.osPid,
      processId: e.processId,
      source: `restored-process`,
      startedAtMs: e.startedAtMs,
      stopAction: `kill-child-process`,
      turnId: e.turnId,
    };
  });
}
function ut(e, t) {
  let n = new Map(t.map((e) => [e.id, e]));
  return [
    ...e.map((e) => {
      let t = n.get(e.id);
      return t == null
        ? e
        : (n.delete(e.id),
          e.source === `restored-process`
            ? t
            : {
                ...e,
                chatTitle: e.chatTitle ?? t.chatTitle,
                commandExecutionStartedAtMs:
                  t.commandExecutionStartedAtMs ?? e.commandExecutionStartedAtMs,
                cwd: e.cwd ?? t.cwd,
                osPid: e.osPid ?? t.osPid,
                processId: e.processId ?? t.processId,
                startedAtMs: t.commandExecutionStartedAtMs ?? e.startedAtMs ?? t.startedAtMs,
              });
    }),
    ...n.values(),
  ];
}
function K(e, t) {
  return e.id === t.id
    ? !0
    : e.command === t.command &&
        e.conversationId === t.conversationId &&
        e.cwd === t.cwd &&
        e.hostId === t.hostId &&
        e.stopAction === t.stopAction &&
        e.turnId === t.turnId;
}
function dt(e, t, n = Date.now(), { matchCommandStartTime: r = !1 } = {}) {
  if (t == null) return null;
  let i = r && e.commandExecutionStartedAtMs != null ? bt : null;
  if (e.osPid != null) {
    let n = q(e.osPid, t);
    if (n != null && _t(Y(e.command), n.command)) return n;
  }
  let a = mt(e.processId);
  if (a != null) {
    if (e.source !== `restored-process` && i == null) {
      let e = q(a, t);
      if (e != null) return e;
    }
    let r = gt(e, ft(a, t), n, i);
    if (r != null) return q(r.pid, t);
  }
  let o = gt(e, t, n, i);
  return o == null ? null : q(o.pid, t);
}
function ft(e, t) {
  let n = new Map(t.map((e) => [e.pid, e]));
  return t.filter((t) => ht(t.pid, e, n));
}
function pt(e, t, n) {
  return t.interruptedCommandExecutionItemIds?.includes(e.id)
    ? null
    : e.status === `inProgress`
      ? n
        ? { source: `active-turn`, stopAction: `interrupt-conversation` }
        : { source: `background-terminal`, stopAction: `kill-child-process` }
      : e.status === `completed`
        ? { source: `restored-process`, stopAction: `kill-child-process` }
        : null;
}
function mt(e) {
  if (e == null || !/^\d+$/u.test(e)) return null;
  let t = Number(e);
  return Number.isSafeInteger(t) ? t : null;
}
function q(e, t) {
  let n = new Map(t.map((e) => [e.pid, e])),
    r = n.get(e);
  if (r == null) return null;
  let i = 0,
    a = !1,
    o = 0,
    s = !1;
  for (let r of t)
    ht(r.pid, e, n) &&
      (r.cpuPercent != null && Number.isFinite(r.cpuPercent) && ((i += r.cpuPercent), (a = !0)),
      r.rssKb != null && Number.isFinite(r.rssKb) && ((o += r.rssKb), (s = !0)));
  return {
    ageSeconds: r.ageSeconds,
    command: r.command,
    cpuPercent: a ? i : null,
    pid: e,
    rssKb: s ? o : null,
  };
}
function ht(e, t, n) {
  let r = e,
    i = new Set();
  for (; !i.has(r); ) {
    if (r === t) return !0;
    i.add(r);
    let e = n.get(r);
    if (e == null) return !1;
    r = e.parentPid;
  }
  return !1;
}
function gt(e, t, n, r) {
  let i = Y(e.command);
  if (i.length === 0) return null;
  let a = e.startedAtMs == null ? null : Math.max(0, Math.floor((n - e.startedAtMs) / 1e3));
  return (
    t
      .filter(
        (e) =>
          _t(i, e.command) &&
          (a == null || r == null || e.ageSeconds == null || J(e.ageSeconds, a) <= r),
      )
      .sort((e, t) => yt(e, t, a))[0] ?? null
  );
}
function _t(e, t) {
  let n = Y(t);
  return (
    n === e ||
    n.startsWith(`${e} `) ||
    (n.includes(` `) && e.startsWith(`${n} `)) ||
    n.endsWith(` ${e}`) ||
    n.includes(` ${e} `) ||
    vt(e, n)
  );
}
function vt(e, t) {
  let n = e.split(/\s+/u),
    r = t.split(/\s+/u);
  return n.length === r.length
    ? n.every((e, t) => {
        let n = r[t];
        return n == null ? !1 : e === n ? !0 : t === 0 ? !1 : X(e) === X(n);
      })
    : !1;
}
function yt(e, t, n) {
  if (n != null) {
    let r = J(e.ageSeconds, n),
      i = J(t.ageSeconds, n);
    if (r !== i) return r - i;
  }
  return e.depth === t.depth ? e.pid - t.pid : e.depth - t.depth;
}
function J(e, t) {
  return e == null ? 2 ** 53 - 1 : Math.abs(e - t);
}
function Y(e) {
  let t = e.trim();
  if (t.length === 0) return ``;
  let n = /^"([^"]+)"(.*)$/u.exec(t);
  if (n != null) return `${X(n[1])}${n[2]}`.trim().toLowerCase();
  let r = /^(\S+)(.*)$/u.exec(t);
  return r == null ? t.toLowerCase() : `${X(r[1])}${r[2]}`.trim().toLowerCase();
}
function X(e) {
  let t = e.replaceAll(`\\`, `/`),
    n = t.lastIndexOf(`/`);
  return (n < 0 ? t : t.slice(n + 1)).replace(/\.(?:bat|cmd|com|exe)$/iu, ``);
}
var bt,
  xt,
  St = e(() => {
    (r(),
      _(),
      Oe(),
      pe(),
      n(),
      x(),
      (bt = 60),
      (xt = E(y, ({ get: e }) => {
        let t = [];
        for (let n of e(C))
          for (let r of e(k, n))
            t.push({ cwd: e(D, r), hostId: n, id: r, title: e(oe, r), turns: e(s, r) ?? [] });
        return t;
      })));
  });
function Ct(e, t, n) {
  e.set(Z, Et(e.get(Z), t, n));
}
function wt(e, t) {
  e.set(Z, Dt(e.get(Z), t));
}
function Tt(e) {
  e.set(Z, Ot(e.get(Z)));
}
function Et(e, t, n) {
  return new Map(e).set(t, n);
}
function Dt(e, t) {
  let n = new Map(e);
  return (n.delete(t), n);
}
function Ot(e) {
  return new Map(Array.from(e).filter(([, e]) => e.status !== `stopped`));
}
var Z,
  kt = e(() => {
    (r(), n(), (Z = M(y, () => new Map())));
  });
function At(e, t, n) {
  let r = [],
    i = new Set();
  for (let a of e) {
    let e = dt(a, t, n);
    if (e == null) continue;
    let o = Q({ metrics: e, process: a }, n);
    (o != null && o < zt) || i.has(e.pid) || (i.add(e.pid), r.push({ metrics: e, process: a }));
  }
  return r;
}
function jt(e, t) {
  if (t.size === 0) return e;
  let n = e.slice(),
    r = [];
  for (let i of t.values())
    Rt(e, i.row) || r.push({ row: i.row, rowIndex: i.rowIndex ?? n.length });
  r.sort((e, t) => e.rowIndex - t.rowIndex);
  for (let e of r) n.splice(Math.min(e.rowIndex, n.length), 0, e.row);
  return n;
}
function Mt(e, t, n) {
  if (t.size === 0) return t;
  let r = new Map(e.map((e) => [e.process.id, e])),
    i = new Map();
  for (let [a, o] of t) Ft(o, r.get(a) ?? Lt(e, o.row), n) || i.set(a, o);
  return i;
}
function Nt(e, t) {
  return Pt(e, t)?.sortRow ?? e;
}
function Pt(e, t) {
  let n = t.get(e.process.id);
  if (n != null) return n;
  for (let n of t.values()) if (K(e.process, n.row.process)) return n;
}
function Q(e, t) {
  return e.metrics?.ageSeconds == null
    ? e.process.startedAtMs == null
      ? null
      : Math.max(0, Math.floor((t - e.process.startedAtMs) / 1e3))
    : e.metrics.ageSeconds;
}
function Ft(e, t, n) {
  return e.status === `starting`
    ? e.expiresAtMs != null && e.expiresAtMs <= n
      ? !0
      : t == null
        ? !1
        : It(e, t, n)
    : !1;
}
function It(e, t, n) {
  let r = e.row.process.startedAtMs,
    i = t.metrics?.ageSeconds;
  return r == null || i == null ? !0 : n - i * 1e3 >= r - Bt;
}
function Lt(e, t) {
  return e.find((e) => K(e.process, t.process)) ?? null;
}
function Rt(e, t) {
  return Lt(e, t) != null;
}
var zt,
  Bt,
  Vt = e(() => {
    (St(), (zt = 3), (Bt = 1e3));
  }),
  Ht,
  Ut,
  $,
  Wt = e(() => {
    (r(), n(), (Ht = M(y, !0)), (Ut = M(y, !1)), ($ = T(y, (e) => !1)));
  });
export {
  He as A,
  St as C,
  Ge as D,
  at as E,
  je as F,
  Ve as M,
  B as N,
  Ke as O,
  Le as P,
  ut as S,
  st as T,
  Ct as _,
  Pt as a,
  ct as b,
  Q as c,
  Vt as d,
  Ft as f,
  Z as g,
  kt as h,
  Ht as i,
  Re as j,
  We as k,
  jt as l,
  Tt as m,
  Ut as n,
  At as o,
  wt as p,
  $ as r,
  Nt as s,
  Wt as t,
  Mt as u,
  xt as v,
  K as w,
  lt as x,
  dt as y,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha.js.map
