import { s as e } from "./chunk-Bj-mKKzh.js";
import { H as t, U as n } from "./src-2.js";
import {
  C as r,
  E as i,
  Mo as a,
  Oi as o,
  St as s,
  Uo as c,
  do as l,
  fs as u,
  g as d,
  h as f,
  ho as p,
  lt as m,
  w as h,
  yt as g,
} from "./app-server-manager-signals.js";
import { n as _, t as v } from "./jsx-runtime.js";
import { t as y } from "./clsx.js";
import {
  A as b,
  F as x,
  P as S,
  _ as ee,
  f as C,
  h as te,
  lt as w,
} from "./vscode-api.js";
import { c as ne, o as T, r as re } from "./lib-2.js";
import { m as E } from "./chunk-12.js";
import { t as D } from "./branch.js";
import { t as O } from "./request.js";
import { r as ie } from "./toast-signal.js";
import { t as k } from "./tooltip.js";
import { t as A } from "./button.js";
import { t as j } from "./spinner.js";
import { t as ae } from "./use-codex-home.js";
import { n as oe } from "./local-conversation-title-signals.js";
import { t as M } from "./info.js";
import { t as N } from "./with-window.js";
import { t as se } from "./folder.js";
import { t as ce } from "./context-menu.js";
import { t as le } from "./use-navigate-to-local-conversation.js";
import { i as ue, n as P, t as de } from "./local-task-row-signals-n.js";
import { t as fe } from "./clock.js";
import { r as pe } from "./thread-actions.js";
import { t as F } from "./archive.js";
import { t as me } from "./format-relative-date-time.js";
import { t as I } from "./worktree.js";
import { a as L, i as R, r as z, t as B } from "./thread-env-icon-Du5P-cuF.js";
import { t as V } from "./workspace-root-icon-B5yk-HQ7.js";
import { t as H } from "./warning.js";
import { t as U } from "./use-is-background-subagents-enabled.js";
import { t as he } from "./use-git-current-branch.js";
import { t as ge } from "./get-project-name.js";
var W = w(),
  G = v();
function K(e) {
  let t = (0, W.c)(4),
    { onOpenSettings: n } = e;
  switch (`electron`) {
    case `chrome-extension`:
    case `extension`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(T, {
              id: `codex.archiveInfo.extension`,
              defaultMessage: `View archived chats in your .codex folder.`,
              description: `Info message shown after archiving a Codex conversation or task in the extension`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `browser`:
    case `electron`: {
      let e;
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(T, {
            id: `codex.archiveInfo.settingsLink`,
            defaultMessage: `Settings`,
            description: `Link label to open the archived chats settings page`,
          })),
          (t[1] = e))
        : (e = t[1]);
      let r;
      return (
        t[2] === n
          ? (r = t[3])
          : ((r = (0, G.jsx)(T, {
              id: `codex.archiveInfo.electron`,
              defaultMessage: `View archived chats in {settingsLink}`,
              description: `Info message shown after archiving a Codex conversation or task in the electron app`,
              values: {
                settingsLink: (0, G.jsx)(`button`, {
                  className: `text-token-link underline-offset-2 hover:underline`,
                  type: `button`,
                  onClick: n,
                  children: e,
                }),
              },
            })),
            (t[2] = n),
            (t[3] = r)),
        r
      );
    }
  }
}
function _e(e) {
  return e === `worktree` || e === `cloud` || e === `remote` || e === `remote-worktree`;
}
function ve(e) {
  let t = (0, W.c)(4),
    { envType: n } = e;
  switch (n) {
    case `worktree`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(T, {
              id: `codex.taskRowLayout.hoverCard.worktree`,
              defaultMessage: `Worktree`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `cloud`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(T, {
              id: `codex.taskRowLayout.hoverCard.cloudTask`,
              defaultMessage: `Cloud task`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `remote`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(T, {
              id: `codex.taskRowLayout.hoverCard.remote`,
              defaultMessage: `Remote`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `remote-worktree`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(T, {
              id: `codex.taskRowLayout.hoverCard.remoteWorktree`,
              defaultMessage: `Remote worktree`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function ye(e) {
  let t = (0, W.c)(21),
    { envTooltip: n, envType: r, className: i, hostId: a, disableTooltip: o } = e,
    s = o === void 0 ? !1 : o,
    c = _e(r) ? r : null;
  if (!c) return null;
  let l = n != null && n !== ``,
    u = s || l,
    d;
  bb0: switch (c) {
    case `remote`: {
      if (a == null) return null;
      let e;
      (t[0] !== i || t[1] !== u || t[2] !== a
        ? ((e = (0, G.jsx)(z, { className: i, disableTooltip: u, hostId: a })),
          (t[0] = i),
          (t[1] = u),
          (t[2] = a),
          (t[3] = e))
        : (e = t[3]),
        (d = e));
      break bb0;
    }
    case `remote-worktree`: {
      if (a == null) return null;
      let e;
      (t[4] !== i || t[5] !== u || t[6] !== a
        ? ((e = (0, G.jsx)(R, { className: i, disableTooltip: u, hostId: a })),
          (t[4] = i),
          (t[5] = u),
          (t[6] = a),
          (t[7] = e))
        : (e = t[7]),
        (d = e));
      break bb0;
    }
    case `worktree`: {
      let e;
      (t[8] !== i || t[9] !== u
        ? ((e = (0, G.jsx)(L, { className: i, disableTooltip: u })),
          (t[8] = i),
          (t[9] = u),
          (t[10] = e))
        : (e = t[10]),
        (d = e));
      break bb0;
    }
    case `cloud`: {
      let e;
      (t[11] !== i || t[12] !== u
        ? ((e = (0, G.jsx)(B, { className: i, disableTooltip: u })),
          (t[11] = i),
          (t[12] = u),
          (t[13] = e))
        : (e = t[13]),
        (d = e));
    }
  }
  let f;
  t[14] !== s || t[15] !== n || t[16] !== l || t[17] !== d
    ? ((f = l && !s ? (0, G.jsx)(k, { tooltipContent: n, children: d }) : d),
      (t[14] = s),
      (t[15] = n),
      (t[16] = l),
      (t[17] = d),
      (t[18] = f))
    : (f = t[18]);
  let p = f,
    m;
  return (
    t[19] === p
      ? (m = t[20])
      : ((m = (0, G.jsx)(`span`, {
          className: `flex shrink-0 items-center align-middle text-sm`,
          children: p,
        })),
        (t[19] = p),
        (t[20] = m)),
    m
  );
}
var q = e(_(), 1);
function be(e) {
  let t = (0, W.c)(11),
    { hideProjectRow: n, projectLabel: r, sections: i, threadTitle: a } = e,
    o = n === void 0 ? !1 : n,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s =
        a != null && a !== ``
          ? (0, G.jsx)(`div`, {
              className: `truncate pb-0.5 text-base leading-6 font-medium text-token-foreground`,
              children: a,
            })
          : null),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] !== o || t[3] !== r
    ? ((c =
        !o && r != null && r !== ``
          ? (0, G.jsx)(J, {
              row: {
                id: `project`,
                icon: (0, G.jsx)(V, { isCodexWorktree: !1, isGitRepository: !1, isOpen: !0 }),
                label: r,
              },
            })
          : null),
      (t[2] = o),
      (t[3] = r),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === i ? (l = t[6]) : ((l = i.map(xe)), (t[5] = i), (t[6] = l));
  let u;
  return (
    t[7] !== s || t[8] !== c || t[9] !== l
      ? ((u = (0, G.jsxs)(`div`, {
          className: `flex w-fit max-w-[min(20rem,calc(100vw-16px))] min-w-56 flex-col gap-1 px-row-x py-1.5 text-token-foreground`,
          children: [s, c, l],
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function xe(e) {
  return (0, G.jsx)(
    `div`,
    { className: `flex min-w-0 flex-col gap-1`, children: e.rows.map(Se) },
    e.id,
  );
}
function Se(e) {
  return (0, G.jsx)(J, { row: e }, e.id);
}
function J(e) {
  let t = (0, W.c)(16),
    { row: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r = (0, q.cloneElement)(n.icon, { className: y(`icon-xs`, n.icon.props.className) })),
      (t[0] = n.icon),
      (t[1] = r));
  let i = r,
    a = n.allowWrap ? `items-start` : `h-5 items-center`,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = y(`flex min-w-0 gap-1.5 text-sm leading-5`, a)), (t[2] = a), (t[3] = o));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = (0, G.jsx)(`span`, {
        className: `flex h-5 w-4 shrink-0 items-center justify-center text-token-description-foreground`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = s));
  let c = n.allowWrap ? `whitespace-normal` : `overflow-hidden text-ellipsis whitespace-nowrap`,
    l = n.tone === `danger` ? `text-token-editor-warning-foreground` : `text-token-foreground`,
    u;
  t[6] !== c || t[7] !== l
    ? ((u = y(`block min-w-0 flex-1 leading-5`, c, l)), (t[6] = c), (t[7] = l), (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== n.label || t[10] !== u
    ? ((d = (0, G.jsx)(`span`, { className: u, children: n.label })),
      (t[9] = n.label),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== o || t[13] !== s || t[14] !== d
      ? ((f = (0, G.jsxs)(`div`, { className: o, children: [s, d] })),
        (t[12] = o),
        (t[13] = s),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function Ce(e) {
  let t = (0, W.c)(4),
    { statusState: n } = e;
  if ((n.unreadCount ?? 0) > 0) {
    let e = n.unreadCount ?? 0,
      r;
    return (
      t[0] === e ? (r = t[1]) : ((r = (0, G.jsx)(Y, { count: e })), (t[0] = e), (t[1] = r)), r
    );
  }
  if (n.type === `loading`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(X, {})), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n.unread === !0) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(we, {})), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  return null;
}
function Y(e) {
  let t = (0, W.c)(3),
    { count: n } = e,
    r = n > 99 ? `99+` : n,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = {
        backgroundColor: `color-mix(in srgb, var(--vscode-textLink-foreground) 18%, transparent)`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, var(--vscode-textLink-foreground) 72%, transparent)`,
        color: `var(--vscode-textLink-foreground)`,
      }),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] === r
      ? (a = t[2])
      : ((a = (0, G.jsx)(`div`, {
          className: `relative flex h-5 min-w-5 shrink-0 items-center justify-center`,
          children: (0, G.jsx)(`span`, {
            className: `flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] leading-none font-semibold`,
            style: i,
            children: r,
          }),
        })),
        (t[1] = r),
        (t[2] = a)),
    a
  );
}
function we() {
  let e = (0, W.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, G.jsx)(`div`, {
          className: `relative flex size-5 shrink-0 items-center justify-center text-token-description-foreground`,
          children: (0, G.jsx)(`span`, {
            className: `icon-xs relative scale-50`,
            children: (0, G.jsx)(`span`, {
              className: `absolute inset-0 rounded-full`,
              style: { backgroundColor: `var(--vscode-textLink-foreground)` },
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function X() {
  let e = (0, W.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, G.jsx)(`div`, {
          className: `relative flex size-5 shrink-0 items-center justify-center text-token-foreground/70`,
          children: (0, G.jsx)(j, { className: `icon-xs shrink-0`, animationDurationMs: 2e3 }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Te = `icon-2xs`,
  Ee = `absolute right-0 top-0 z-10 flex h-full items-center justify-center mr-0.5 pr-0.5`;
function De(e) {
  let t = (0, W.c)(146),
    {
      title: n,
      hoverCardContent: r,
      chips: i,
      iconBadges: a,
      metaContent: o,
      overlayMetaContent: s,
      metaState: c,
      hideInlineBadgesOnHover: l,
      isActive: u,
      onClick: d,
      onDoubleClick: f,
      onArchive: p,
      archiveAriaLabel: m,
      archiveConfirmLabel: h,
      statusState: g,
      statusIndicatorReplacesMeta: _,
      useStableTrailingRail: v,
      envType: b,
      envTooltip: x,
      disableEnvTooltip: S,
      pulseEnvIcon: ee,
      envIconLocation: C,
      disabled: te,
      blurOnClick: w,
      idleIndicatorNode: ne,
      indicatorRestNode: T,
      indicatorHoverNode: re,
      reserveLeadingSlot: E,
      additionalHoverActionCount: D,
      priorityIndicatorNode: O,
      onContextMenu: ie,
      renderActions: A,
      onHoverCardOpenChange: j,
      metaHidden: ae,
      rowContentClassName: oe,
      className: N,
      hostId: se,
      dataAttributes: ce,
    } = e,
    le;
  t[0] === i ? (le = t[1]) : ((le = i === void 0 ? [] : i), (t[0] = i), (t[1] = le));
  let ue = le,
    P;
  t[2] === a ? (P = t[3]) : ((P = a === void 0 ? [] : a), (t[2] = a), (t[3] = P));
  let de = P,
    fe = c === void 0 ? `default` : c,
    pe = l === void 0 ? !1 : l,
    F = u === void 0 ? !1 : u,
    me = _ === void 0 ? !1 : _,
    I = v === void 0 ? !1 : v,
    L = C === void 0 ? `end` : C,
    R = te === void 0 ? !1 : te,
    z = w === void 0 ? !1 : w,
    B = E === void 0 ? !1 : E,
    V = D === void 0 ? 0 : D,
    H = ae === void 0 ? !1 : ae,
    { type: U, unread: he } = g,
    ge = he === void 0 ? !1 : he,
    [K, _e] = (0, q.useState)(!1),
    [ve, be] = (0, q.useState)(!1),
    [xe, Se] = (0, q.useState)(!1),
    J = typeof p == `function`,
    Y = s != null,
    we = K && J,
    X = we && A == null,
    Te = we && A != null,
    Ee = J && !K,
    De = !X,
    ke = V + (J ? 1 : 0),
    Ae = A == null ? `group-focus-within:opacity-0 group-hover:opacity-0` : `group-hover:opacity-0`,
    Pe = me && (U === `loading` || ge),
    Fe = ne ?? T,
    Ie;
  t[4] !== O || t[5] !== X || t[6] !== Pe || t[7] !== U
    ? ((Ie =
        U === `error` && !X && O == null && !Pe
          ? (0, G.jsx)(`div`, {
              className: `relative flex size-5 shrink-0 items-center justify-center text-token-description-foreground`,
              children: (0, G.jsx)(M, {
                className: `icon-xs shrink-0 text-token-error-foreground`,
              }),
            })
          : null),
      (t[4] = O),
      (t[5] = X),
      (t[6] = Pe),
      (t[7] = U),
      (t[8] = Ie))
    : (Ie = t[8]);
  let Le = Ie,
    Z = null;
  if (De && (!Pe || (I && !Y)) && (!K || A != null) && o != null) {
    let e = I && !Y && `shrink-0`,
      n;
    t[9] !== Ae || t[10] !== e
      ? ((n = y(Ae, e)), (t[9] = Ae), (t[10] = e), (t[11] = n))
      : (n = t[11]);
    let r;
    (t[12] !== o || t[13] !== fe || t[14] !== n
      ? ((r = (0, G.jsx)(je, { className: n, content: o, metaState: fe })),
        (t[12] = o),
        (t[13] = fe),
        (t[14] = n),
        (t[15] = r))
      : (r = t[15]),
      (Z = r));
  }
  let Re = O ?? Le ?? Fe,
    Q = B || Re != null || re != null,
    ze = Re,
    Be = O != null || Le != null ? null : re,
    Ve = U !== `loading` && !ge,
    He;
  t[16] === J
    ? (He = t[17])
    : ((He = () => {
        J && _e(!0);
      }),
      (t[16] = J),
      (t[17] = He));
  let $ = He,
    Ue;
  t[18] === p
    ? (Ue = t[19])
    : ((Ue = () => {
        (_e(!1), p?.());
      }),
      (t[18] = p),
      (t[19] = Ue));
  let We = Ue,
    Ge;
  t[20] !== m || t[21] !== $ || t[22] !== Ee || t[23] !== I
    ? ((Ge = Ee
        ? (0, G.jsx)(Ne, { archiveAriaLabel: m, onArchive: $, useStableTrailingRail: I })
        : null),
      (t[20] = m),
      (t[21] = $),
      (t[22] = Ee),
      (t[23] = I),
      (t[24] = Ge))
    : (Ge = t[24]);
  let Ke = Ge,
    qe;
  t[25] !== Q || t[26] !== Be || t[27] !== ze || t[28] !== Ve
    ? ((qe = Q
        ? (0, G.jsx)(`div`, {
            className: `w-4`,
            children: (0, G.jsxs)(`div`, {
              className: `relative flex items-center justify-center`,
              children: [
                ze
                  ? (0, G.jsx)(`span`, {
                      className: y(
                        `flex items-center justify-center`,
                        Be &&
                          (Ve
                            ? `group-focus-within:opacity-0 group-hover:opacity-0`
                            : `group-hover:opacity-0`),
                      ),
                      children: ze,
                    })
                  : null,
                Be
                  ? (0, G.jsx)(`span`, {
                      className: y(
                        `flex items-center justify-center opacity-0 pointer-events-none`,
                        Ve
                          ? `group-focus-within:opacity-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-hover:pointer-events-auto`
                          : `group-hover:opacity-100 group-hover:pointer-events-auto`,
                        ze ? `absolute inset-0` : `relative`,
                      ),
                      children: Be,
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[25] = Q),
      (t[26] = Be),
      (t[27] = ze),
      (t[28] = Ve),
      (t[29] = qe))
    : (qe = t[29]);
  let Je = qe,
    Ye;
  t[30] !== X || t[31] !== g || t[32] !== U || t[33] !== ge
    ? ((Ye = !X && (U === `loading` || ge) ? (0, G.jsx)(Ce, { statusState: g }) : null),
      (t[30] = X),
      (t[31] = g),
      (t[32] = U),
      (t[33] = ge),
      (t[34] = Ye))
    : (Ye = t[34]);
  let Xe = Ye,
    Ze;
  t[35] !== Ke ||
  t[36] !== J ||
  t[37] !== We ||
  t[38] !== K ||
  t[39] !== Y ||
  t[40] !== A ||
  t[41] !== $
    ? ((Ze = Y
        ? null
        : A
          ? A({ requestArchive: $, confirmArchive: We, confirmingArchive: K, canArchive: J })
          : Ke),
      (t[35] = Ke),
      (t[36] = J),
      (t[37] = We),
      (t[38] = K),
      (t[39] = Y),
      (t[40] = A),
      (t[41] = $),
      (t[42] = Ze))
    : (Ze = t[42]);
  let Qe = Ze,
    $e;
  t[43] !== Qe || t[44] !== A
    ? (($e =
        A != null && Qe != null
          ? (0, G.jsx)(`div`, {
              className: `contents`,
              onPointerEnter: () => {
                be(!0);
              },
              onPointerLeave: () => {
                be(!1);
              },
              children: Qe,
            })
          : Qe),
      (t[43] = Qe),
      (t[44] = A),
      (t[45] = $e))
    : ($e = t[45]);
  let et = $e,
    tt;
  t[46] !== Qe ||
  t[47] !== Y ||
  t[48] !== Z ||
  t[49] !== Ae ||
  t[50] !== Xe ||
  t[51] !== Pe ||
  t[52] !== I
    ? ((tt = Xe
        ? (0, G.jsx)(`span`, {
            className: y(
              `flex size-5 shrink-0 items-center justify-center -mr-1`,
              I && Pe && Z != null && `absolute right-0`,
              Y && `invisible`,
              Qe != null && Ae,
            ),
            children: Xe,
          })
        : null),
      (t[46] = Qe),
      (t[47] = Y),
      (t[48] = Z),
      (t[49] = Ae),
      (t[50] = Xe),
      (t[51] = Pe),
      (t[52] = I),
      (t[53] = tt))
    : (tt = t[53]);
  let nt = tt,
    rt;
  t[54] !== S || t[55] !== x || t[56] !== b || t[57] !== se || t[58] !== ee
    ? ((rt =
        b === `worktree` || b === `cloud` || b === `remote` || b === `remote-worktree`
          ? (0, G.jsx)(ye, {
              className: ee ? `animate-pulse` : void 0,
              disableTooltip: S,
              envTooltip: x,
              envType: b,
              hostId: se,
            })
          : null),
      (t[54] = S),
      (t[55] = x),
      (t[56] = b),
      (t[57] = se),
      (t[58] = ee),
      (t[59] = rt))
    : (rt = t[59]);
  let it = rt,
    at = De && (Y || Z || Xe || X),
    ot;
  Qe != null &&
    (A != null || !I || !at) &&
    (ke >= 3
      ? (ot =
          A == null
            ? `group-focus-within:min-w-20 group-hover:min-w-20`
            : `group-hover:min-w-20 group-has-[:focus-visible]:min-w-20`)
      : ke === 2
        ? (ot =
            A == null
              ? `group-focus-within:min-w-12 group-hover:min-w-12`
              : `group-hover:min-w-12 group-has-[:focus-visible]:min-w-12`)
        : ke === 1 &&
          (ot =
            A == null
              ? `group-focus-within:min-w-5 group-hover:min-w-5`
              : `group-hover:min-w-5 group-has-[:focus-visible]:min-w-5`));
  let st;
  t[60] !== K || t[61] !== R || t[62] !== d
    ? ((st = (e) => {
        R ||
          K ||
          e.defaultPrevented ||
          (e.currentTarget === e.target &&
            (e.key === `Enter` || e.key === ` `) &&
            (e.preventDefault(), d()));
      }),
      (t[60] = K),
      (t[61] = R),
      (t[62] = d),
      (t[63] = st))
    : (st = t[63]);
  let ct = st,
    lt;
  t[64] !== z || t[65] !== K || t[66] !== R || t[67] !== d
    ? ((lt = (e) => {
        if (!R) {
          if (K) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          e.defaultPrevented || (d(), z && e.currentTarget.blur());
        }
      }),
      (t[64] = z),
      (t[65] = K),
      (t[66] = R),
      (t[67] = d),
      (t[68] = lt))
    : (lt = t[68]);
  let ut = lt,
    dt;
  t[69] !== K || t[70] !== R || t[71] !== f
    ? ((dt = (e) => {
        if (!R) {
          if (K) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          e.defaultPrevented || f?.(e);
        }
      }),
      (t[69] = K),
      (t[70] = R),
      (t[71] = f),
      (t[72] = dt))
    : (dt = t[72]);
  let ft = dt,
    pt = R && `pointer-events-none opacity-60`,
    mt = F && `bg-token-list-hover-background`,
    ht;
  t[73] !== N || t[74] !== pt || t[75] !== mt
    ? ((ht = y(
        `group relative h-token-nav-row cursor-interaction rounded-lg px-row-x py-row-y text-sm hover:bg-token-list-hover-background focus-visible:outline-offset-[-2px]`,
        pt,
        mt,
        N,
      )),
      (t[73] = N),
      (t[74] = pt),
      (t[75] = mt),
      (t[76] = ht))
    : (ht = t[76]);
  let gt = ht,
    _t = r != null && r !== !1 && r !== ``,
    vt = typeof n == `string` || typeof n == `number` ? String(n) : void 0,
    yt;
  t[77] !== vt || t[78] !== n
    ? ((yt = (0, G.jsx)(
        `span`,
        {
          className: `min-w-0 flex-1 truncate select-none`,
          "data-thread-title": !0,
          draggable: !1,
          children: n,
        },
        vt,
      )),
      (t[77] = vt),
      (t[78] = n),
      (t[79] = yt))
    : (yt = t[79]);
  let bt = yt,
    xt;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xt = () => {
        (_e(!1), be(!1));
      }),
      (t[80] = xt))
    : (xt = t[80]);
  let St = R ? -1 : 0,
    Ct = F ? `page` : void 0,
    wt = Te && `[mask-image:linear-gradient(to_left,transparent_0,transparent_72px,black_80px)]`,
    Tt;
  t[81] === wt
    ? (Tt = t[82])
    : ((Tt = y(`flex h-full w-full items-center text-sm leading-4`, wt)),
      (t[81] = wt),
      (t[82] = Tt));
  let Et = Je != null && `ml-1.5`,
    Dt;
  t[83] === Et
    ? (Dt = t[84])
    : ((Dt = y(`flex min-w-0 flex-1 items-center gap-2 pl-0.5`, Et)), (t[83] = Et), (t[84] = Dt));
  let Ot = L === `start` && it,
    kt = F ? `text-[var(--vscode-foreground)]` : `text-token-foreground`,
    At;
  t[85] !== oe || t[86] !== kt
    ? ((At = y(`flex min-w-0 flex-1 self-stretch items-center gap-2 text-base leading-5`, kt, oe)),
      (t[85] = oe),
      (t[86] = kt),
      (t[87] = At))
    : (At = t[87]);
  let jt = L === `middle` && it,
    Mt;
  t[88] !== At || t[89] !== jt || t[90] !== bt
    ? ((Mt = (0, G.jsxs)(`div`, {
        className: At,
        "data-thread-title-trigger": !0,
        children: [bt, jt],
      })),
      (t[88] = At),
      (t[89] = jt),
      (t[90] = bt),
      (t[91] = Mt))
    : (Mt = t[91]);
  let Nt = L === `end` && !X ? it : null,
    Pt = pe ? `group-hover:hidden` : void 0,
    Ft;
  t[92] !== ue || t[93] !== de || t[94] !== X || t[95] !== Nt || t[96] !== Pt
    ? ((Ft = (0, G.jsx)(Oe, {
        chips: ue,
        envIconNode: Nt,
        iconBadges: de,
        hideInlineBadges: X,
        className: Pt,
      })),
      (t[92] = ue),
      (t[93] = de),
      (t[94] = X),
      (t[95] = Nt),
      (t[96] = Pt),
      (t[97] = Ft))
    : (Ft = t[97]);
  let It;
  t[98] !== Dt || t[99] !== Ot || t[100] !== Mt || t[101] !== Ft
    ? ((It = (0, G.jsxs)(`div`, { className: Dt, children: [Ot, Mt, Ft] })),
      (t[98] = Dt),
      (t[99] = Ot),
      (t[100] = Mt),
      (t[101] = Ft),
      (t[102] = It))
    : (It = t[102]);
  let Lt = I && `relative mr-[var(--task-row-trailing-inset)]`,
    Rt = at && `min-w-[26px]`,
    zt;
  t[103] !== ot || t[104] !== Lt || t[105] !== Rt
    ? ((zt = y(`ml-[3px] flex items-center justify-end gap-1`, Lt, Rt, ot)),
      (t[103] = ot),
      (t[104] = Lt),
      (t[105] = Rt),
      (t[106] = zt))
    : (zt = t[106]);
  let Bt;
  t[107] !== h ||
  t[108] !== K ||
  t[109] !== Y ||
  t[110] !== H ||
  t[111] !== Z ||
  t[112] !== p ||
  t[113] !== s ||
  t[114] !== A ||
  t[115] !== X ||
  t[116] !== nt ||
  t[117] !== Pe ||
  t[118] !== I
    ? ((Bt = X
        ? (0, G.jsx)(Me, {
            label: h,
            onConfirm: (e) => {
              (e.stopPropagation(), _e(!1), p?.());
            },
          })
        : (0, G.jsxs)(G.Fragment, {
            children: [
              s,
              Z &&
                (0, G.jsx)(`div`, {
                  className: y(((I && Pe) || H || Y || (A && K)) && `invisible`),
                  children: Z,
                }),
              nt,
            ],
          })),
      (t[107] = h),
      (t[108] = K),
      (t[109] = Y),
      (t[110] = H),
      (t[111] = Z),
      (t[112] = p),
      (t[113] = s),
      (t[114] = A),
      (t[115] = X),
      (t[116] = nt),
      (t[117] = Pe),
      (t[118] = I),
      (t[119] = Bt))
    : (Bt = t[119]);
  let Vt;
  t[120] !== zt || t[121] !== Bt
    ? ((Vt = (0, G.jsx)(`div`, { className: zt, children: Bt })),
      (t[120] = zt),
      (t[121] = Bt),
      (t[122] = Vt))
    : (Vt = t[122]);
  let Ht;
  t[123] !== Je || t[124] !== Tt || t[125] !== It || t[126] !== Vt
    ? ((Ht = (0, G.jsxs)(`div`, { className: Tt, children: [Je, It, Vt] })),
      (t[123] = Je),
      (t[124] = Tt),
      (t[125] = It),
      (t[126] = Vt),
      (t[127] = Ht))
    : (Ht = t[127]);
  let Ut;
  t[128] !== gt ||
  t[129] !== ce ||
  t[130] !== ct ||
  t[131] !== ut ||
  t[132] !== ft ||
  t[133] !== et ||
  t[134] !== ie ||
  t[135] !== St ||
  t[136] !== Ct ||
  t[137] !== Ht
    ? ((Ut = (0, G.jsxs)(`div`, {
        ...ce,
        className: gt,
        onClick: ut,
        onDoubleClick: ft,
        onContextMenu: ie,
        onPointerLeave: xt,
        onKeyDown: ct,
        role: `button`,
        tabIndex: St,
        "aria-current": Ct,
        children: [et, Ht],
      })),
      (t[128] = gt),
      (t[129] = ce),
      (t[130] = ct),
      (t[131] = ut),
      (t[132] = ft),
      (t[133] = et),
      (t[134] = ie),
      (t[135] = St),
      (t[136] = Ct),
      (t[137] = Ht),
      (t[138] = Ut))
    : (Ut = t[138]);
  let Wt = Ut;
  if (!_t) return Wt;
  let Gt = ve && !xe,
    Kt;
  t[139] === j
    ? (Kt = t[140])
    : ((Kt = (e) => {
        (Se(e), j?.(e));
      }),
      (t[139] = j),
      (t[140] = Kt));
  let qt;
  return (
    t[141] !== r || t[142] !== Wt || t[143] !== Gt || t[144] !== Kt
      ? ((qt = (0, G.jsx)(k, {
          disabled: Gt,
          onOpenChange: Kt,
          side: `right`,
          align: `start`,
          alignOffset: 0,
          sideOffset: 2,
          variant: `hoverCard`,
          tooltipContent: r,
          children: Wt,
        })),
        (t[141] = r),
        (t[142] = Wt),
        (t[143] = Gt),
        (t[144] = Kt),
        (t[145] = qt))
      : (qt = t[145]),
    qt
  );
}
function Oe(e) {
  let t = (0, W.c)(22),
    { className: n, chips: r, envIconNode: i, iconBadges: a, hideInlineBadges: o } = e,
    s;
  t[0] === r ? (s = t[1]) : ((s = r === void 0 ? [] : r), (t[0] = r), (t[1] = s));
  let c = s,
    l;
  t[2] === a ? (l = t[3]) : ((l = a === void 0 ? [] : a), (t[2] = a), (t[3] = l));
  let u = l,
    d = o === void 0 ? !1 : o,
    f;
  t[4] === c ? (f = t[5]) : ((f = c.flatMap(Ae)), (t[4] = c), (t[5] = f));
  let p = f,
    m;
  t[6] === u ? (m = t[7]) : ((m = u.flatMap(ke)), (t[6] = u), (t[7] = m));
  let h = m,
    g;
  t[8] !== p || t[9] !== d ? ((g = d ? [] : p), (t[8] = p), (t[9] = d), (t[10] = g)) : (g = t[10]);
  let _ = g;
  if (_.length === 0 && i == null && h.length === 0) return null;
  let v;
  t[11] === n
    ? (v = t[12])
    : ((v = y(`flex min-w-[24px] items-center justify-end gap-2`, n)), (t[11] = n), (t[12] = v));
  let b;
  t[13] === _
    ? (b = t[14])
    : ((b =
        _.length > 0
          ? (0, G.jsx)(`div`, { className: `flex items-center gap-1`, children: _ })
          : null),
      (t[13] = _),
      (t[14] = b));
  let x;
  t[15] !== i || t[16] !== h
    ? ((x =
        i != null || h.length > 0
          ? (0, G.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [h, i] })
          : null),
      (t[15] = i),
      (t[16] = h),
      (t[17] = x))
    : (x = t[17]);
  let S;
  return (
    t[18] !== b || t[19] !== x || t[20] !== v
      ? ((S = (0, G.jsxs)(`div`, { className: v, children: [b, x] })),
        (t[18] = b),
        (t[19] = x),
        (t[20] = v),
        (t[21] = S))
      : (S = t[21]),
    S
  );
}
function ke(e) {
  let { id: t, icon: n, ariaLabel: r, className: i, onClick: a, tooltipContent: o } = e;
  if (!(0, q.isValidElement)(n)) return [];
  let s = (0, q.cloneElement)(n, { className: y(Te, n.props.className) }),
    c =
      a == null
        ? (0, G.jsx)(
            `span`,
            {
              className: y(`flex shrink-0 items-center text-token-description-foreground`, i),
              children: s,
            },
            t,
          )
        : (0, G.jsx)(
            `button`,
            {
              type: `button`,
              className: y(
                `focus-visible:outline-token-focus-ring flex shrink-0 items-center justify-center rounded-md text-token-description-foreground hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2`,
                i,
              ),
              "aria-label": r,
              onClick: (e) => {
                (e.stopPropagation(), a());
              },
              children: s,
            },
            t,
          );
  return o != null && o !== ``
    ? [
        (0, G.jsx)(
          k,
          {
            tooltipContent: o,
            children: (0, G.jsx)(`span`, {
              className: y(`flex shrink-0 items-center`, i),
              children: c,
            }),
          },
          t,
        ),
      ]
    : [c];
}
function Ae(e) {
  let { id: t, label: n } = e;
  return n == null
    ? []
    : [
        (0, G.jsx)(
          `span`,
          {
            className: `inline-flex max-w-[150px] items-center truncate rounded-full bg-token-charts-green/20 py-0.5 pr-2.5 pl-2 text-sm text-token-charts-green`,
            children: n,
          },
          t,
        ),
      ];
}
function je(e) {
  let t = (0, W.c)(6),
    { className: n, content: r, metaState: i } = e;
  if (r == null) return null;
  let a = i === `loading` ? `loading-shimmer-pure-text min-w-[72px]` : `truncate`,
    o;
  t[0] !== n || t[1] !== a
    ? ((o = y(
        `text-token-description-foreground text-sm leading-4 empty:hidden tabular-nums overflow-visible`,
        a,
        `text-right`,
        n,
      )),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== r || t[4] !== o
      ? ((s = (0, G.jsx)(`div`, { className: o, children: r })), (t[3] = r), (t[4] = o), (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Me(e) {
  let t = (0, W.c)(5),
    { label: n, onConfirm: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i =
        n ??
        (0, G.jsx)(T, {
          id: `codex.taskRowLayout.confirm`,
          defaultMessage: `Confirm`,
          description: `Confirmation button for archiving a task`,
        })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, G.jsx)(A, {
          size: `composerSm`,
          color: `danger`,
          className: `!h-auto !border-none !py-0`,
          onClick: r,
          children: i,
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ne(e) {
  let t = (0, W.c)(11),
    { onArchive: n, archiveAriaLabel: r, useStableTrailingRail: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i ? { right: `var(--task-row-trailing-inset)` } : void 0), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (e) => {
        (e.stopPropagation(), n?.());
      }),
      (t[2] = n),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, G.jsx)(F, { className: `icon-xs` })), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] !== r || t[6] !== o
    ? ((c = (0, G.jsx)(`button`, {
        type: `button`,
        className: `focus-visible:outline-token-focus-ring pointer-events-none flex h-5 w-5 items-center justify-center rounded-md opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-50 hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2`,
        onClick: o,
        "aria-label": r,
        children: s,
      })),
      (t[5] = r),
      (t[6] = o),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== a || t[9] !== c
      ? ((l = (0, G.jsx)(`div`, { className: Ee, style: a, children: c })),
        (t[8] = a),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Pe(e) {
  let t = (0, W.c)(14),
    { onArchiveStart: n, onArchiveSuccess: r, onArchiveError: i } = e,
    [a, o] = (0, q.useState)(!1),
    s = n != null || r != null || i != null,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = () => {
        s ? n?.() : o(!0);
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === r
    ? (u = t[4])
    : ((u = () => {
        r?.();
      }),
      (t[3] = r),
      (t[4] = u));
  let d = u,
    f;
  t[5] !== i || t[6] !== s
    ? ((f = () => {
        s ? i?.() : o(!1);
      }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  return (
    t[8] !== a || t[9] !== l || t[10] !== p || t[11] !== d || t[12] !== s
      ? ((m = {
          archived: a,
          usesExternalArchiveHandling: s,
          beginArchive: l,
          handleArchiveSuccess: d,
          handleArchiveError: p,
        }),
        (t[8] = a),
        (t[9] = l),
        (t[10] = p),
        (t[11] = d),
        (t[12] = s),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function Fe(e) {
  let t = (0, W.c)(81),
    {
      task: n,
      onClose: r,
      onSelect: i,
      isActive: a,
      envIconLocation: s,
      useStableTrailingRail: c,
      statusIndicatorReplacesMeta: l,
      idleIndicatorNode: u,
      indicatorRestNode: d,
      indicatorHoverNode: f,
      reserveLeadingSlot: p,
      additionalHoverActionCount: m,
      renderActions: h,
      hideInlineBadgesOnHover: g,
      metaHidden: _,
      metaContent: v,
      overlayMetaContent: y,
      extraIconBadges: S,
      hoverCardProjectLabel: C,
      hoverCardSections: w,
      hideHoverCardProjectRow: re,
      contextMenuItems: D,
      onArchiveStart: k,
      onArchiveSuccess: A,
      onArchiveError: j,
      dataAttributes: ae,
    } = e,
    oe = a === void 0 ? !1 : a,
    M = s === void 0 ? `end` : s,
    N = c === void 0 ? !1 : c,
    se = l === void 0 ? !1 : l,
    le = p === void 0 ? !1 : p,
    ue = m === void 0 ? 0 : m,
    P = g === void 0 ? !1 : g,
    de = _ === void 0 ? !1 : _,
    fe = re === void 0 ? !1 : re,
    pe = x(te),
    F = ne(),
    I = E(),
    L = b(),
    R,
    z,
    B;
  if (t[0] !== I || t[1] !== r || t[2] !== i || t[3] !== n) {
    z = () => {
      (i?.(), r(), I(`/remote/${R}`));
    };
    let { id: e, title: a } = n;
    ((B = a),
      (R = e),
      (t[0] = I),
      (t[1] = r),
      (t[2] = i),
      (t[3] = n),
      (t[4] = R),
      (t[5] = z),
      (t[6] = B));
  } else ((R = t[4]), (z = t[5]), (B = t[6]));
  let V = n.task_status_display?.latest_turn_status_display?.turn_status,
    H = V === `in_progress` || V === `pending`,
    U = V === `failed`,
    he = n.updated_at ?? n.created_at ?? null,
    ge,
    _e,
    q;
  t[7] !== U || t[8] !== H || t[9] !== v || t[10] !== he
    ? ((q = he ? new Date(he * 1e3) : null),
      (ge = H ? `loading` : U ? `error` : `idle`),
      (_e = v ?? (q ? (0, G.jsx)(me, { dateString: q.toISOString() }) : null)),
      (t[7] = U),
      (t[8] = H),
      (t[9] = v),
      (t[10] = he),
      (t[11] = ge),
      (t[12] = _e),
      (t[13] = q))
    : ((ge = t[11]), (_e = t[12]), (q = t[13]));
  let xe = _e,
    Se = q ? `default` : H ? `loading` : `default`,
    J = !H && !!q,
    Ce;
  t[14] !== j || t[15] !== k || t[16] !== A
    ? ((Ce = { onArchiveStart: k, onArchiveSuccess: A, onArchiveError: j }),
      (t[14] = j),
      (t[15] = k),
      (t[16] = A),
      (t[17] = Ce))
    : (Ce = t[17]);
  let {
      archived: Y,
      usesExternalArchiveHandling: we,
      beginArchive: X,
      handleArchiveSuccess: Te,
      handleArchiveError: Ee,
    } = Pe(Ce),
    Oe;
  t[18] === R
    ? (Oe = t[19])
    : ((Oe = () =>
        O.safePost(`/wham/tasks/{task_id}/archive`, { parameters: { path: { task_id: R } } })),
      (t[18] = R),
      (t[19] = Oe));
  let ke;
  t[20] !== Te || t[21] !== R || t[22] !== I || t[23] !== L || t[24] !== pe
    ? ((ke = () => {
        (Te(),
          pe.get(ie).info(
            (0, G.jsx)(K, {
              onOpenSettings: () => {
                I(`/settings/data-controls`);
              },
            }),
            { id: `archive-task` },
          ),
          L.invalidateQueries({ queryKey: [`tasks`] }),
          L.invalidateQueries({ queryKey: [`task`, R] }));
      }),
      (t[20] = Te),
      (t[21] = R),
      (t[22] = I),
      (t[23] = L),
      (t[24] = pe),
      (t[25] = ke))
    : (ke = t[25]);
  let Ae;
  t[26] !== Ee || t[27] !== F || t[28] !== pe
    ? ((Ae = () => {
        (Ee(),
          pe
            .get(ie)
            .danger(
              F.formatMessage({
                id: `cloudTaskRow.archiveError`,
                defaultMessage: `Failed to archive task`,
                description: `Error message when archiving a Codex task`,
              }),
            ));
      }),
      (t[26] = Ee),
      (t[27] = F),
      (t[28] = pe),
      (t[29] = Ae))
    : (Ae = t[29]);
  let je;
  t[30] !== Oe || t[31] !== ke || t[32] !== Ae
    ? ((je = { mutationFn: Oe, onSuccess: ke, onError: Ae }),
      (t[30] = Oe),
      (t[31] = ke),
      (t[32] = Ae),
      (t[33] = je))
    : (je = t[33]);
  let Me = ee(je),
    Ne;
  t[34] !== Me || t[35] !== X
    ? ((Ne = () => {
        (X(), Me.mutate());
      }),
      (t[34] = Me),
      (t[35] = X),
      (t[36] = Ne))
    : (Ne = t[36]);
  let Fe = Ne;
  if (Y && !we) return null;
  let Le;
  t[37] === B
    ? (Le = t[38])
    : ((Le =
        o(B ?? ``) ||
        (0, G.jsx)(T, {
          id: `codex.taskRow.title`,
          defaultMessage: `New chat`,
          description: `Default title for a Codex thread that doesn't have a title`,
        })),
      (t[37] = B),
      (t[38] = Le));
  let Z = Le,
    Re;
  t[39] !== fe || t[40] !== C || t[41] !== w || t[42] !== Z
    ? ((Re =
        C != null && C !== ``
          ? (0, G.jsx)(be, {
              projectLabel: C,
              hideProjectRow: fe,
              sections: [
                {
                  id: `environment`,
                  rows: [
                    {
                      id: `environment`,
                      icon: (0, G.jsx)(ye, { envType: `cloud`, disableTooltip: !0 }),
                      label: (0, G.jsx)(ve, { envType: `cloud` }),
                    },
                  ],
                },
                ...(w ?? []),
              ],
              threadTitle: Z,
            })
          : null),
      (t[39] = fe),
      (t[40] = C),
      (t[41] = w),
      (t[42] = Z),
      (t[43] = Re))
    : (Re = t[43]);
  let Q = Re,
    ze;
  t[44] !== ge || t[45] !== n.has_unread_turn
    ? ((ze = { type: ge, unread: n.has_unread_turn }),
      (t[44] = ge),
      (t[45] = n.has_unread_turn),
      (t[46] = ze))
    : (ze = t[46]);
  let Be = (se || H) && v == null,
    Ve = J ? Fe : null,
    He;
  t[47] === F ? (He = t[48]) : ((He = F.formatMessage(Ie.archiveTask)), (t[47] = F), (t[48] = He));
  let $;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($ = (0, G.jsx)(T, {
        id: `codex.cloudTaskRow.confirmArchiveTask`,
        defaultMessage: `Confirm`,
        description: `Confirmation button for archiving a cloud task`,
      })),
      (t[49] = $))
    : ($ = t[49]);
  let Ue;
  t[50] !== ue ||
  t[51] !== ae ||
  t[52] !== M ||
  t[53] !== S ||
  t[54] !== P ||
  t[55] !== Q ||
  t[56] !== u ||
  t[57] !== f ||
  t[58] !== d ||
  t[59] !== oe ||
  t[60] !== de ||
  t[61] !== Se ||
  t[62] !== z ||
  t[63] !== y ||
  t[64] !== h ||
  t[65] !== le ||
  t[66] !== ze ||
  t[67] !== Be ||
  t[68] !== Ve ||
  t[69] !== He ||
  t[70] !== xe ||
  t[71] !== Z ||
  t[72] !== N
    ? ((Ue = (0, G.jsx)(De, {
        isActive: oe,
        onClick: z,
        idleIndicatorNode: u,
        indicatorRestNode: d,
        indicatorHoverNode: f,
        reserveLeadingSlot: le,
        additionalHoverActionCount: ue,
        statusState: ze,
        statusIndicatorReplacesMeta: Be,
        useStableTrailingRail: N,
        envType: `cloud`,
        envIconLocation: M,
        title: Z,
        hoverCardContent: Q,
        iconBadges: S,
        hideInlineBadgesOnHover: P,
        metaHidden: de,
        metaContent: xe,
        overlayMetaContent: y,
        metaState: Se,
        onArchive: Ve,
        archiveAriaLabel: He,
        archiveConfirmLabel: $,
        renderActions: h,
        dataAttributes: ae,
      })),
      (t[50] = ue),
      (t[51] = ae),
      (t[52] = M),
      (t[53] = S),
      (t[54] = P),
      (t[55] = Q),
      (t[56] = u),
      (t[57] = f),
      (t[58] = d),
      (t[59] = oe),
      (t[60] = de),
      (t[61] = Se),
      (t[62] = z),
      (t[63] = y),
      (t[64] = h),
      (t[65] = le),
      (t[66] = ze),
      (t[67] = Be),
      (t[68] = Ve),
      (t[69] = He),
      (t[70] = xe),
      (t[71] = Z),
      (t[72] = N),
      (t[73] = Ue))
    : (Ue = t[73]);
  let We = Ue;
  if (D === void 0 || (D.length === 0 && !J)) return We;
  let Ge;
  t[74] !== J || t[75] !== D || t[76] !== Fe
    ? ((Ge = () => {
        let e = [...D];
        return (J && e.push({ id: `archive-task`, message: Ie.archiveTask, onSelect: Fe }), e);
      }),
      (t[74] = J),
      (t[75] = D),
      (t[76] = Fe),
      (t[77] = Ge))
    : (Ge = t[77]);
  let Ke = Ge,
    qe;
  return (
    t[78] !== Ke || t[79] !== We
      ? ((qe = (0, G.jsx)(ce, { getItems: Ke, children: We })),
        (t[78] = Ke),
        (t[79] = We),
        (t[80] = qe))
      : (qe = t[80]),
    qe
  );
}
var Ie = re({
    archiveTask: {
      id: `codex.cloudTaskRow.archiveTask`,
      defaultMessage: `Archive task`,
      description: `Label for archiving a cloud task`,
    },
  }),
  Le = `.codex/worktrees/`;
function Z({ codexHome: e, worktreePath: t }) {
  let n = Re(t, e);
  return n == null ? l(t) : (n[Q(n) - 1] ?? l(t));
}
function Re(e, n) {
  let r = p(e).replace(/\/+$/, ``),
    i = r.toLowerCase();
  if (n != null) {
    let e = p(t(n)).replace(/\/+$/, ``).toLowerCase();
    if (i === e || i.startsWith(`${e}/`)) return r.slice(e.length).split(`/`).filter(Boolean);
  }
  let a = i.lastIndexOf(Le);
  return a === -1
    ? null
    : r
        .slice(a + 17)
        .split(`/`)
        .filter(Boolean);
}
function Q(e) {
  return e.length >= 2 && /^[0-9a-f]{4,}$/i.test(e[0]) ? 2 : 1;
}
function ze({
  branchMismatchWarning: e,
  branchName: t,
  branchTooltipContent: r,
  codexHome: i,
  workspaceIcon: a,
  workspacePath: o,
}) {
  let s = t?.trim() || null,
    c = o != null && n(o, i) ? Z({ codexHome: i, worktreePath: o }) : null,
    l = [];
  return (
    s != null &&
      l.push({
        id: `branch`,
        icon: (0, G.jsx)(D, {}),
        label:
          r == null
            ? s
            : (0, G.jsx)(k, { tooltipContent: r, children: (0, G.jsx)(`span`, { children: s }) }),
      }),
    e != null &&
      l.push({
        allowWrap: !0,
        id: `branch-mismatch`,
        icon: (0, G.jsx)(H, { className: `text-token-editor-warning-foreground` }),
        label: e,
        tone: `danger`,
      }),
    c != null && l.push({ id: `worktree`, icon: a ?? (0, G.jsx)(I, {}), label: c }),
    l.length > 0 ? l : void 0
  );
}
function Be(e) {
  let t = (0, W.c)(50),
    {
      task: n,
      envIconLocation: r,
      useStableTrailingRail: i,
      statusIndicatorReplacesMeta: a,
      isActive: s,
      hasAttention: c,
      indicatorRestNode: l,
      indicatorHoverNode: u,
      reserveLeadingSlot: d,
      additionalHoverActionCount: f,
      renderActions: p,
      hoverCardProjectLabel: m,
      metaContent: h,
      overlayMetaContent: g,
      onClick: _,
      onDoubleClick: v,
      onArchive: y,
      onContextMenu: b,
      dataAttributes: x,
    } = e,
    S = r === void 0 ? `end` : r,
    ee = i === void 0 ? !1 : i,
    C = a === void 0 ? !1 : a,
    te = s === void 0 ? !1 : s,
    w = c === void 0 ? !1 : c,
    re = d === void 0 ? !1 : d,
    D = f === void 0 ? 0 : f,
    O = ne(),
    ie = E(),
    k = ae(n.hostId),
    A = n.phase === `failed`,
    j = n.phase === `queued` || n.phase === `creating`,
    oe;
  t[0] !== h || t[1] !== n.createdAt
    ? ((oe = h ?? (0, G.jsx)(me, { dateString: new Date(n.createdAt).toISOString() })),
      (t[0] = h),
      (t[1] = n.createdAt),
      (t[2] = oe))
    : (oe = t[2]);
  let M = oe,
    N;
  t[3] !== w || t[4] !== A || t[5] !== j
    ? ((N = j
        ? { type: `loading`, unread: w }
        : A
          ? { type: `error`, unread: w }
          : { type: `idle`, unread: w }),
      (t[3] = w),
      (t[4] = A),
      (t[5] = j),
      (t[6] = N))
    : (N = t[6]);
  let se = N,
    ce = n.startingState.type === `branch` ? n.startingState.branchName : null,
    le = n.worktreeGitRoot ?? n.worktreeWorkspaceRoot,
    ue;
  t[7] !== k || t[8] !== ce || t[9] !== le
    ? ((ue = ze({ branchName: ce, codexHome: k, workspacePath: le })),
      (t[7] = k),
      (t[8] = ce),
      (t[9] = le),
      (t[10] = ue))
    : (ue = t[10]);
  let P = ue,
    de;
  t[11] !== A || t[12] !== n.label
    ? ((de = A
        ? (0, G.jsx)(T, {
            id: `recentTasks.worktreeInitFailedTitle`,
            defaultMessage: `Worktree init failed`,
            description: `Worktree row title when the init script fails`,
          })
        : o(n.label)),
      (t[11] = A),
      (t[12] = n.label),
      (t[13] = de))
    : (de = t[13]);
  let fe = de,
    F;
  t[14] !== P || t[15] !== m || t[16] !== fe
    ? ((F =
        m != null && m !== ``
          ? (0, G.jsx)(be, {
              projectLabel: m,
              sections: [{ id: `environment`, rows: P ?? [] }],
              threadTitle: fe,
            })
          : null),
      (t[14] = P),
      (t[15] = m),
      (t[16] = fe),
      (t[17] = F))
    : (F = t[17]);
  let I = F,
    L;
  t[18] !== ie || t[19] !== _ || t[20] !== n.id
    ? ((L = () => {
        if (_) {
          _();
          return;
        }
        ie(`/worktree-init-v2/${n.id}`);
      }),
      (t[18] = ie),
      (t[19] = _),
      (t[20] = n.id),
      (t[21] = L))
    : (L = t[21]);
  let R = L,
    z = C && h == null,
    B;
  t[22] !== O || t[23] !== y
    ? ((B = y ? O.formatMessage(pe.archiveThread) : void 0), (t[22] = O), (t[23] = y), (t[24] = B))
    : (B = t[24]);
  let V;
  t[25] === y
    ? (V = t[26])
    : ((V = y
        ? (0, G.jsx)(T, {
            id: `codex.localTaskRow.confirmArchiveTask`,
            defaultMessage: `Confirm`,
            description: `Confirmation button for archiving a local task`,
          })
        : void 0),
      (t[25] = y),
      (t[26] = V));
  let H;
  return (
    t[27] !== D ||
    t[28] !== x ||
    t[29] !== S ||
    t[30] !== R ||
    t[31] !== I ||
    t[32] !== u ||
    t[33] !== l ||
    t[34] !== te ||
    t[35] !== j ||
    t[36] !== y ||
    t[37] !== b ||
    t[38] !== v ||
    t[39] !== g ||
    t[40] !== p ||
    t[41] !== re ||
    t[42] !== se ||
    t[43] !== z ||
    t[44] !== B ||
    t[45] !== V ||
    t[46] !== M ||
    t[47] !== fe ||
    t[48] !== ee
      ? ((H = (0, G.jsx)(De, {
          isActive: te,
          title: fe,
          hoverCardContent: I,
          metaContent: M,
          overlayMetaContent: g,
          envType: `worktree`,
          envIconLocation: S,
          pulseEnvIcon: j,
          statusIndicatorReplacesMeta: z,
          useStableTrailingRail: ee,
          indicatorRestNode: l,
          indicatorHoverNode: u,
          reserveLeadingSlot: re,
          additionalHoverActionCount: D,
          renderActions: p,
          statusState: se,
          onArchive: y,
          archiveAriaLabel: B,
          archiveConfirmLabel: V,
          onClick: R,
          onDoubleClick: v,
          onContextMenu: b,
          dataAttributes: x,
        })),
        (t[27] = D),
        (t[28] = x),
        (t[29] = S),
        (t[30] = R),
        (t[31] = I),
        (t[32] = u),
        (t[33] = l),
        (t[34] = te),
        (t[35] = j),
        (t[36] = y),
        (t[37] = b),
        (t[38] = v),
        (t[39] = g),
        (t[40] = p),
        (t[41] = re),
        (t[42] = se),
        (t[43] = z),
        (t[44] = B),
        (t[45] = V),
        (t[46] = M),
        (t[47] = fe),
        (t[48] = ee),
        (t[49] = H))
      : (H = t[49]),
    H
  );
}
function Ve({ codexHome: e, cwd: t, hideRemoteHostEnvIcon: r, hostId: i, isGrouped: a }) {
  let o = !r && i != null && i !== `local`,
    s = n(t, e);
  return o ? (s ? `remote-worktree` : `remote`) : s ? `worktree` : a ? `localGrouped` : void 0;
}
function He(e) {
  let t = (0, W.c)(29),
    {
      conversationId: n,
      displayCwd: a,
      hasAttachedHeartbeatAutomation: o,
      heartbeatAutomationTooltipContent: l,
      hideProjectMetadata: u,
      hideProjectRow: f,
      hideRemoteHostEnvIcon: p,
      hoverCardSections: m,
      isAutomationRun: h,
      isGrouped: g,
      shouldFetchHoverBranch: _,
      threadTitle: v,
    } = e,
    y = o === void 0 ? !1 : o,
    b = u === void 0 ? !1 : u,
    x = f === void 0 ? !1 : f,
    ee = p === void 0 ? !1 : p,
    C = h === void 0 ? !1 : h,
    te = g === void 0 ? !1 : g,
    w = _ === void 0 ? !1 : _,
    T = ne(),
    re = S(d, n),
    E = a ?? re,
    D = S(r, n),
    O = S(i, n),
    ie = c(O ?? `local`),
    k = ae(O ?? `local`),
    A = S(s, n) === `projectless`,
    j = Ve({ codexHome: k, cwd: E, hideRemoteHostEnvIcon: ee, hostId: O, isGrouped: te }),
    oe =
      !A &&
      E != null &&
      (j == null || j === `worktree` || j === `remote-worktree` || j === `localGrouped`),
    M;
  t[0] === T
    ? (M = t[1])
    : ((M = T.formatMessage({
        id: `sidebarElectron.threadHoverCardChatProject`,
        defaultMessage: `Chat`,
        description: `Fallback project label for a sidebar thread hover card when it does not belong to a project or workspace`,
      })),
      (t[0] = T),
      (t[1] = M));
  let N = M,
    ce;
  t[2] !== E || t[3] !== b || t[4] !== N || t[5] !== A
    ? ((ce = b || A || E == null ? N : (ge(E) ?? E)),
      (t[2] = E),
      (t[3] = b),
      (t[4] = N),
      (t[5] = A),
      (t[6] = ce))
    : (ce = t[6]);
  let le = ce,
    ue = oe && w,
    P;
  t[7] === ue ? (P = t[8]) : ((P = { enabled: ue, staleTime: 0 }), (t[7] = ue), (t[8] = P));
  let de = he(E, ie, `local_thread_hover_card`, P),
    pe =
      j === `remote` || j === `remote-worktree`
        ? ie.id === O
          ? ie.display_name
          : null
        : (E ?? null),
    F =
      D != null && de.data != null && D !== de.data
        ? T.formatMessage({
            id: `codex.localTaskRow.hoverCardBranchMismatch`,
            defaultMessage: `Chat branch is based on what branch was active when last worked on this chat`,
            description: `Tooltip shown when the checked out branch differs from the chat branch in the task hover card`,
          })
        : void 0,
    me =
      F == null
        ? void 0
        : T.formatMessage({
            id: `codex.localTaskRow.hoverCardBranchMismatchWarning`,
            defaultMessage: `Chat branch reflects active branch when last used; sending a message will update chat branch`,
            description: `Warning text shown when the checked out branch differs from the chat branch in the task hover card`,
          }),
    I = oe
      ? ze({
          branchMismatchWarning: me,
          branchName: D ?? de.data ?? null,
          branchTooltipContent: F,
          codexHome: k,
          workspaceIcon: j === `worktree` || j === `remote-worktree` ? void 0 : (0, G.jsx)(se, {}),
          workspacePath: E,
        })
      : void 0,
    L;
  t[9] !== y || t[10] !== l || t[11] !== T || t[12] !== C
    ? ((L =
        C || y
          ? [
              {
                id: `automation`,
                icon: (0, G.jsx)(fe, { className: `shrink-0` }),
                label:
                  l ??
                  T.formatMessage({
                    id: `codex.localTaskRow.automation`,
                    defaultMessage: `Automation chat`,
                    description: `Accessible label for the automation thread icon`,
                  }),
              },
            ]
          : []),
      (t[9] = y),
      (t[10] = l),
      (t[11] = T),
      (t[12] = C),
      (t[13] = L))
    : (L = t[13]);
  let R = L,
    z =
      I ??
      (_e(j)
        ? [
            {
              id: `environment`,
              icon: (0, G.jsx)(ye, { envType: j, hostId: O ?? void 0, disableTooltip: !0 }),
              label: pe ?? (0, G.jsx)(ve, { envType: j }),
            },
          ]
        : []),
    B;
  t[14] === z ? (B = t[15]) : ((B = { id: `environment`, rows: z }), (t[14] = z), (t[15] = B));
  let V;
  t[16] === m ? (V = t[17]) : ((V = m ?? []), (t[16] = m), (t[17] = V));
  let H;
  t[18] === R ? (H = t[19]) : ((H = { id: `automation`, rows: R }), (t[18] = R), (t[19] = H));
  let U;
  t[20] !== B || t[21] !== V || t[22] !== H
    ? ((U = [B, ...V, H].filter($)), (t[20] = B), (t[21] = V), (t[22] = H), (t[23] = U))
    : (U = t[23]);
  let K = U,
    q;
  return (
    t[24] !== x || t[25] !== le || t[26] !== K || t[27] !== v
      ? ((q = (0, G.jsx)(be, { projectLabel: le, hideProjectRow: x, sections: K, threadTitle: v })),
        (t[24] = x),
        (t[25] = le),
        (t[26] = K),
        (t[27] = v),
        (t[28] = q))
      : (q = t[28]),
    q
  );
}
function $(e) {
  return e.rows.length > 0;
}
function Ue(e) {
  let t = (0, W.c)(8),
    {
      align: n,
      alignOffset: r,
      children: i,
      hoverCardContent: a,
      onOpenChange: o,
      side: s,
      sideOffset: c,
    } = e,
    l = n === void 0 ? `start` : n,
    u = r === void 0 ? 0 : r,
    d = s === void 0 ? `bottom` : s,
    f = c === void 0 ? 6 : c;
  if (a == null) return i;
  let p;
  return (
    t[0] !== l || t[1] !== u || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== d || t[6] !== f
      ? ((p = (0, G.jsx)(k, {
          onOpenChange: o,
          side: d,
          align: l,
          alignOffset: u,
          sideOffset: f,
          variant: `hoverCard`,
          tooltipContent: a,
          children: i,
        })),
        (t[0] = l),
        (t[1] = u),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = d),
        (t[6] = f),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function We(e) {
  return (0, G.jsx)(N, { browser: !0, electron: !0, children: (0, G.jsx)(He, { ...e }) });
}
function Ge(e) {
  let t = (0, W.c)(98),
    {
      conversationId: n,
      displayCwd: r,
      onSelect: o,
      onClick: s,
      onBeforeNavigate: c,
      onDoubleClick: l,
      isActive: p,
      isGrouped: _,
      envIconLocation: v,
      useStableTrailingRail: y,
      statusIndicatorReplacesMeta: b,
      hideInlineBadgesOnHover: ee,
      idleIndicatorNode: C,
      indicatorRestNode: w,
      indicatorHoverNode: re,
      reserveLeadingSlot: E,
      additionalHoverActionCount: D,
      priorityIndicatorNode: O,
      onContextMenu: k,
      renderActions: A,
      metaHidden: j,
      extraIconBadges: M,
      onArchiveStart: N,
      onArchiveSuccess: se,
      onArchiveError: ce,
      onActiveArchiveSuccess: pe,
      rowContentClassName: F,
      titleOverride: me,
      hoverCardSections: I,
      disableHoverCard: L,
      forceLoadingIndicator: R,
      blurOnClick: z,
      hasPendingChildApproval: B,
      hideRemoteHostEnvIcon: V,
      disableEnvTooltip: H,
      className: he,
      disabled: ge,
      isAutomationRun: _e,
      hasAttachedHeartbeatAutomation: ve,
      heartbeatAutomationTooltipContent: ye,
      metaContent: be,
      overlayMetaContent: xe,
      dataAttributes: Se,
    } = e,
    J = p === void 0 ? !1 : p,
    Ce = _ === void 0 ? !1 : _,
    Y = y === void 0 ? !1 : y,
    we = b === void 0 ? !1 : b,
    X = ee === void 0 ? !1 : ee,
    Te = E === void 0 ? !1 : E,
    Ee = D === void 0 ? 0 : D,
    Oe = j === void 0 ? !1 : j,
    ke = L === void 0 ? !1 : L,
    Ae = R === void 0 ? !1 : R,
    je = z === void 0 ? !1 : z,
    Me = B === void 0 ? !1 : B,
    Ne = V === void 0 ? !1 : V,
    Fe = ge === void 0 ? !1 : ge,
    Ie = _e === void 0 ? !1 : _e,
    Le = ve === void 0 ? !1 : ve,
    Z = x(te),
    Re = le(),
    Q = ne(),
    ze = S(h, n),
    Be = S(f, n),
    He = S(d, n),
    $ = r ?? He,
    Ue = S(ue, n),
    Ge = S(g, n),
    Je = S(i, n),
    Ye = ae(Je ?? `local`),
    Xe = S(de, n),
    Ze = S(P, n),
    Qe = S(m, n),
    $e = S(oe, n),
    et;
  t[0] !== ce || t[1] !== N || t[2] !== se
    ? ((et = { onArchiveStart: N, onArchiveSuccess: se, onArchiveError: ce }),
      (t[0] = ce),
      (t[1] = N),
      (t[2] = se),
      (t[3] = et))
    : (et = t[3]);
  let {
      archived: tt,
      usesExternalArchiveHandling: nt,
      beginArchive: rt,
      handleArchiveSuccess: it,
      handleArchiveError: at,
    } = Pe(et),
    ot = U(),
    st;
  t[4] === Qe ? (st = t[5]) : ((st = a(Qe)), (t[4] = Qe), (t[5] = st));
  let ct = ot && st?.parentThreadId != null,
    lt = Ae ? `loading` : Ze,
    ut;
  t[6] !== $e || t[7] !== me
    ? ((ut = (0, G.jsx)(qe, { title: $e, titleOverride: me })),
      (t[6] = $e),
      (t[7] = me),
      (t[8] = ut))
    : (ut = t[8]);
  let dt = ut,
    [ft, pt] = (0, q.useState)(!1),
    mt = ct ? !1 : Ue === !0,
    ht = ct ? 0 : (Ge ?? 0),
    gt;
  t[9] !== lt || t[10] !== mt || t[11] !== ht
    ? ((gt = { type: lt, unread: mt, unreadCount: ht }),
      (t[9] = lt),
      (t[10] = mt),
      (t[11] = ht),
      (t[12] = gt))
    : (gt = t[12]);
  let _t = gt,
    vt;
  t[13] !== rt ||
  t[14] !== n ||
  t[15] !== at ||
  t[16] !== it ||
  t[17] !== Q ||
  t[18] !== J ||
  t[19] !== ct ||
  t[20] !== pe ||
  t[21] !== Z
    ? ((vt = () => {
        (rt(),
          u(`archive-conversation`, { conversationId: n, source: `recent_tasks_menu` })
            .then(() => {
              (it(), J && pe?.());
              let e = Ke;
              ct || Z.get(ie).info((0, G.jsx)(K, { onOpenSettings: e }), { id: `archive-thread` });
            })
            .catch(() => {
              (at(),
                Z.get(ie).danger(
                  Q.formatMessage({
                    id: `localTaskRow.archiveError`,
                    defaultMessage: `Failed to archive conversation`,
                    description: `Error message when archiving a local Codex conversation`,
                  }),
                ));
            }));
      }),
      (t[13] = rt),
      (t[14] = n),
      (t[15] = at),
      (t[16] = it),
      (t[17] = Q),
      (t[18] = J),
      (t[19] = ct),
      (t[20] = pe),
      (t[21] = Z),
      (t[22] = vt))
    : (vt = t[22]);
  let yt = vt,
    bt;
  t[23] !== Me || t[24] !== Xe
    ? ((bt =
        Xe === `approval` || Me
          ? {
              id: `awaiting-approval`,
              label: (0, G.jsx)(T, {
                id: `codex.localTaskRow.awaitingApproval`,
                defaultMessage: `Awaiting approval`,
                description: `Chip indicating a local task is waiting for user approval`,
              }),
            }
          : Xe === `response`
            ? {
                id: `awaiting-response`,
                label: (0, G.jsx)(T, {
                  id: `codex.localTaskRow.awaitingResponse`,
                  defaultMessage: `Awaiting response`,
                  description: `Chip indicating a local task is waiting for user response`,
                }),
              }
            : null),
      (t[23] = Me),
      (t[24] = Xe),
      (t[25] = bt))
    : (bt = t[25]);
  let xt = bt,
    St;
  t[26] === xt ? (St = t[27]) : ((St = xt == null ? [] : [xt]), (t[26] = xt), (t[27] = St));
  let Ct = St,
    wt;
  t[28] !== Le || t[29] !== ye || t[30] !== Q || t[31] !== Ie
    ? ((wt =
        Ie || Le
          ? {
              id: `automation`,
              icon: (0, G.jsx)(fe, { className: `shrink-0` }),
              ariaLabel: Ie
                ? Q.formatMessage({
                    id: `codex.localTaskRow.automation`,
                    defaultMessage: `Automation chat`,
                    description: `Accessible label for the automation thread icon`,
                  })
                : Q.formatMessage({
                    id: `codex.localTaskRow.attachedHeartbeatAutomation`,
                    defaultMessage: `Heartbeat automation attached`,
                    description: `Accessible label for the heartbeat automation icon shown on a chat with an attached heartbeat automation`,
                  }),
              tooltipContent: Le ? ye : null,
            }
          : null),
      (t[28] = Le),
      (t[29] = ye),
      (t[30] = Q),
      (t[31] = Ie),
      (t[32] = wt))
    : (wt = t[32]);
  let Tt = wt,
    Et = M;
  if (Tt != null) {
    let e;
    (t[33] !== Tt || t[34] !== M
      ? ((e = M == null ? [Tt] : [...M, Tt]), (t[33] = Tt), (t[34] = M), (t[35] = e))
      : (e = t[35]),
      (Et = e));
  }
  let Dt;
  t[36] !== Ye || t[37] !== $ || t[38] !== Ne || t[39] !== Je || t[40] !== Ce
    ? ((Dt = Ve({ codexHome: Ye, cwd: $, hideRemoteHostEnvIcon: Ne, hostId: Je, isGrouped: Ce })),
      (t[36] = Ye),
      (t[37] = $),
      (t[38] = Ne),
      (t[39] = Je),
      (t[40] = Ce),
      (t[41] = Dt))
    : (Dt = t[41]);
  let Ot = Dt,
    kt = Ot === `remote` || Ot === `remote-worktree` ? null : $,
    At;
  t[42] !== n ||
  t[43] !== ke ||
  t[44] !== r ||
  t[45] !== Le ||
  t[46] !== ye ||
  t[47] !== Ne ||
  t[48] !== I ||
  t[49] !== Ie ||
  t[50] !== Ce ||
  t[51] !== ft ||
  t[52] !== dt
    ? ((At = ke
        ? null
        : We({
            conversationId: n,
            displayCwd: r,
            hasAttachedHeartbeatAutomation: Le,
            heartbeatAutomationTooltipContent: ye,
            hideProjectRow: Ce,
            hideRemoteHostEnvIcon: Ne,
            hoverCardSections: I,
            isAutomationRun: Ie,
            isGrouped: Ce,
            shouldFetchHoverBranch: ft,
            threadTitle: dt,
          })),
      (t[42] = n),
      (t[43] = ke),
      (t[44] = r),
      (t[45] = Le),
      (t[46] = ye),
      (t[47] = Ne),
      (t[48] = I),
      (t[49] = Ie),
      (t[50] = Ce),
      (t[51] = ft),
      (t[52] = dt),
      (t[53] = At))
    : (At = t[53]);
  let jt = At;
  if ((tt && !nt) || ze !== !0 || Be == null) return null;
  let Mt = Je ?? void 0,
    Nt;
  t[54] !== n || t[55] !== Re || t[56] !== c || t[57] !== s || t[58] !== o
    ? ((Nt = () => {
        (c?.(),
          Re(n),
          (0, q.startTransition)(() => {
            (o?.(), s?.());
          }));
      }),
      (t[54] = n),
      (t[55] = Re),
      (t[56] = c),
      (t[57] = s),
      (t[58] = o),
      (t[59] = Nt))
    : (Nt = t[59]);
  let Pt = Et,
    Ft;
  t[60] === Q
    ? (Ft = t[61])
    : ((Ft = Q.formatMessage({
        id: `codex.localTaskRow.archiveTask`,
        defaultMessage: `Archive chat`,
        description: `Label for archiving a local thread`,
      })),
      (t[60] = Q),
      (t[61] = Ft));
  let It;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((It = (0, G.jsx)(T, {
        id: `codex.localTaskRow.confirmArchiveTask`,
        defaultMessage: `Confirm`,
        description: `Confirmation button for archiving a local task`,
      })),
      (t[62] = It))
    : (It = t[62]);
  let Lt;
  return (
    t[63] !== Ee ||
    t[64] !== je ||
    t[65] !== Ct ||
    t[66] !== he ||
    t[67] !== Se ||
    t[68] !== H ||
    t[69] !== Fe ||
    t[70] !== v ||
    t[71] !== kt ||
    t[72] !== Ot ||
    t[73] !== yt ||
    t[74] !== X ||
    t[75] !== jt ||
    t[76] !== Et ||
    t[77] !== C ||
    t[78] !== re ||
    t[79] !== w ||
    t[80] !== J ||
    t[81] !== be ||
    t[82] !== Oe ||
    t[83] !== k ||
    t[84] !== l ||
    t[85] !== xe ||
    t[86] !== O ||
    t[87] !== A ||
    t[88] !== Te ||
    t[89] !== F ||
    t[90] !== we ||
    t[91] !== _t ||
    t[92] !== Mt ||
    t[93] !== Nt ||
    t[94] !== Ft ||
    t[95] !== dt ||
    t[96] !== Y
      ? ((Lt = (0, G.jsx)(De, {
          hostId: Mt,
          className: he,
          isActive: J,
          idleIndicatorNode: C,
          indicatorRestNode: w,
          indicatorHoverNode: re,
          reserveLeadingSlot: Te,
          additionalHoverActionCount: Ee,
          priorityIndicatorNode: O,
          rowContentClassName: F,
          onContextMenu: k,
          onClick: Nt,
          onDoubleClick: l,
          disabled: Fe,
          statusState: _t,
          statusIndicatorReplacesMeta: we,
          useStableTrailingRail: Y,
          envType: Ot,
          envIconLocation: v,
          disableEnvTooltip: H,
          envTooltip: kt,
          hoverCardContent: jt,
          blurOnClick: je,
          title: dt,
          chips: Ct,
          iconBadges: Pt,
          hideInlineBadgesOnHover: X,
          metaHidden: Oe,
          metaContent: be,
          overlayMetaContent: xe,
          onArchive: yt,
          onHoverCardOpenChange: pt,
          dataAttributes: Se,
          archiveAriaLabel: Ft,
          archiveConfirmLabel: It,
          renderActions: A,
        })),
        (t[63] = Ee),
        (t[64] = je),
        (t[65] = Ct),
        (t[66] = he),
        (t[67] = Se),
        (t[68] = H),
        (t[69] = Fe),
        (t[70] = v),
        (t[71] = kt),
        (t[72] = Ot),
        (t[73] = yt),
        (t[74] = X),
        (t[75] = jt),
        (t[76] = Et),
        (t[77] = C),
        (t[78] = re),
        (t[79] = w),
        (t[80] = J),
        (t[81] = be),
        (t[82] = Oe),
        (t[83] = k),
        (t[84] = l),
        (t[85] = xe),
        (t[86] = O),
        (t[87] = A),
        (t[88] = Te),
        (t[89] = F),
        (t[90] = we),
        (t[91] = _t),
        (t[92] = Mt),
        (t[93] = Nt),
        (t[94] = Ft),
        (t[95] = dt),
        (t[96] = Y),
        (t[97] = Lt))
      : (Lt = t[97]),
    Lt
  );
}
function Ke() {
  C.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/data-controls` });
}
function qe(e) {
  let t = (0, W.c)(3),
    { title: n, titleOverride: r } = e;
  if (typeof r != `string` && r != null) return r;
  if (n != null) return n;
  let i;
  t[0] === r ? (i = t[1]) : ((i = r?.trim() ?? ``), (t[0] = r), (t[1] = i));
  let a = i;
  if (a.length > 0) return a;
  let o;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, G.jsx)(T, {
          id: `codex.taskRow.title`,
          defaultMessage: `New chat`,
          description: `Default title for a Codex thread that doesn't have a title`,
        })),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
export { Fe as a, Ce as c, Be as i, He as n, Pe as o, Ue as r, Ee as s, Ge as t };
//# sourceMappingURL=local-task-row.js.map
