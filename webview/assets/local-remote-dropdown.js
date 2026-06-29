import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import {
  B as r,
  Z as i,
  a,
  c as o,
  l as s,
  m as c,
  o as l,
  s as u,
  t as d,
} from "./app-scope-CWE-zIhQ.js";
import { Zt as f, a as p, n as m, r as h } from "./use-host-config.js";
import {
  $n as g,
  Bn as _,
  G as v,
  Jn as y,
  L as b,
  Vn as x,
  cn as S,
  f as C,
  qn as w,
  vt as T,
} from "./thread-context-inputs.js";
import { c as E, u as D, v as O } from "./vscode-api.js";
import { i as k, n as ee } from "./react.js";
import { Br as A, C as j, J as M, Ra as N, _n as te } from "./src-3.js";
import { i as ne, l as re, s as P } from "./lib-1.js";
import { t as ie } from "./clsx.js";
import { t as ae } from "./button.js";
import { a as F } from "./setting-storage.js";
import { t as oe } from "./spinner.js";
import { t as se } from "./check-md.js";
import { t as I } from "./chevron-right.js";
import { t as L } from "./tooltip-B.js";
import { r as ce } from "./toast-signal.js";
import { t as R } from "./plus.js";
import { n as z } from "./composer-footer.js";
import { F as le } from "./rpc-1.js";
import { o as B } from "./statsig.js";
import { t as V } from "./request.js";
import { t as ue } from "./chevron.js";
import { $ as H, t as U } from "./product-logger.js";
import { o as de } from "./app-server-manager-hooks.js";
import { t as W } from "./use-global-state.js";
import { n as fe, t as G } from "./use-codex-home.js";
import { t as pe } from "./link-external.js";
import { n as K } from "./use-webview-execution-target.js";
import { o as q, r as me, t as he } from "./remote-projects.js";
import { k as ge, s as _e } from "./codex-api-C.js";
import { o as ve } from "./prompt-text.js";
import { t as J } from "./use-environment.js";
import { t as ye, w as be } from "./composer-view-state.js";
import { t as xe } from "./use-collaboration-mode.js";
import { t as Y } from "./branch.js";
import { t as Se } from "./arrow-left.js";
import { r as Ce } from "./git-current-branch-query.js";
import { t as we } from "./with-window.js";
import { t as Te } from "./notebook.js";
import { t as Ee } from "./settings.cog.js";
import { t as De } from "./codex.js";
import { r as Oe } from "./modal-controller-state.js";
import { a as ke, i as Ae, l as je, n as Me, r as Ne } from "./dialog-layout.js";
import { n as Pe } from "./upgrade-plan-dialog-launcher.js";
import { x as Fe } from "./rate-limit-status.js";
import { c as Ie } from "./plan-management-state.js";
import { c as Le, d as Re, f as ze, o as Be, t as Ve } from "./use-rate-limit.js";
import { t as He } from "./x-circle.js";
import { r as X, t as Ue } from "./dropdown.js";
import { t as We } from "./globe.js";
import { t as Ge } from "./cloud.js";
import { t as Ke } from "./macbook.js";
import { t as qe } from "./worktree.js";
import { t as Je } from "./use-git-current-branch.js";
import { t as Ye } from "./rate-limit-summary.js";
import { t as Xe } from "./dist-6.js";
import { m as Ze, p as Qe, u as $e } from "./local-remote-selection.js";
import { t as et } from "./use-git-default-branch.js";
import { t as tt } from "./slash-command-item.js";
import { n as nt, r as rt } from "./thread-handoff-composer-block-state-C7-ef4-4.js";
import { t as it } from "./action-popover-primitives-D5-11aN0.js";
import { t as at } from "./get-default-branch-name.js";
import { t as ot } from "./summary-panel-row.js";
import { i as st, n as ct, r as lt, t as ut } from "./thread-handoff-store.js";
import { t as dt } from "./get-move-to-local-targets.js";
import { n as ft } from "./git-submodule-paths-query.js";
import { i as pt, n as mt, r as ht } from "./git-branch-switcher.js";
import { t as gt } from "./dock.js";
import { t as _t } from "./thread-handoff-step-row.js";
import { t as vt } from "./use-codex-worktrees.js";
function yt({ isCompactWindow: e }) {
  return !e;
}
function bt({ codexWorktree: e, operation: t, threadHandoff: n }) {
  return t == null
    ? n == null
      ? e
        ? `to-local`
        : `to-worktree`
      : n.isWorktreeConversation
        ? `to-local`
        : `to-worktree`
    : t.direction;
}
function xt(e) {
  return e?.status === `success` ? null : e;
}
function St({ conversationId: e, operation: t, threadHandoff: n }) {
  return e != null && t == null && n != null;
}
function Ct({
  conversationId: e,
  handoffBranch: t,
  handoffDirection: n,
  operation: r,
  threadHandoff: i,
}) {
  return e != null && i != null && (n === `to-local` || t != null || r != null);
}
function wt({ destinationHostId: e, destinationWorkspaceRoot: t, operation: n }) {
  return (
    n?.direction === `to-host-worktree` &&
    n.request.destinationHostId === e &&
    n.request.destinationWorkspaceRoot === t
  );
}
var Tt = e(t()),
  Z = n(),
  Et = (e) =>
    (0, Z.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Z.jsx)(`path`, {
          d: `M2.5293 2.52884C2.78894 2.26944 3.21106 2.26944 3.4707 2.52884L17.4707 16.5288C17.7303 16.7885 17.7302 17.2105 17.4707 17.4703C17.211 17.7299 16.789 17.7299 16.5293 17.4703L2.5293 3.47025C2.26982 3.21053 2.26967 2.78847 2.5293 2.52884Z`,
          fill: `currentColor`,
        }),
        (0, Z.jsx)(`path`, {
          d: `M5.00879 7.59623C3.47308 7.96665 2.33223 9.35009 2.33203 10.9995C2.33203 12.9335 3.90007 14.5015 5.83398 14.5015H11.9141L13.2441 15.8316H5.83398C3.16553 15.8316 1.00098 13.668 1.00098 10.9995C1.00115 8.99603 2.22092 7.27763 3.95801 6.54545L5.00879 7.59623Z`,
          fill: `currentColor`,
        }),
        (0, Z.jsx)(`path`, {
          d: `M10 2.83451C12.9201 2.83476 15.3235 5.04493 15.6309 7.88334C17.5391 8.18581 18.9987 9.83935 18.999 11.8326C18.999 13.0839 18.4227 14.2008 17.5225 14.9341L16.5723 13.9839C17.2353 13.4983 17.6689 12.7171 17.6689 11.8326C17.6685 10.3594 16.4732 9.16485 15 9.16459C14.6329 9.16441 14.335 8.86671 14.335 8.49955C14.3347 6.10576 12.3938 4.16485 10 4.16459C9.08152 4.16465 8.22971 4.45217 7.52832 4.93998L6.57617 3.98783C7.52699 3.26515 8.71302 2.83458 10 2.83451Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  Dt = (e) =>
    (0, Z.jsxs)(`svg`, {
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Z.jsx)(`path`, {
          d: `M7.99609 9.85156C8.38697 9.85156 8.69609 10.1478 8.69609 10.5258C8.69602 10.9037 8.38692 11.2 7.99609 11.2C7.60529 11.2 7.29617 10.9037 7.29609 10.5258C7.29609 10.1478 7.60524 9.85158 7.99609 9.85156Z`,
          fill: `currentColor`,
        }),
        (0, Z.jsx)(`path`, {
          d: `M8.00078 4.8C8.38281 4.80015 8.62337 5.0363 8.62344 5.43125C8.62344 5.46559 8.62304 5.51722 8.61875 5.56016L8.55469 8.53281C8.54174 8.8978 8.35254 9.1125 7.99609 9.1125C7.63967 9.11249 7.45084 8.89778 7.44219 8.53281L7.37344 5.56016C7.37343 5.51723 7.36875 5.46558 7.36875 5.43125C7.36882 5.03618 7.61426 4.8 8.00078 4.8Z`,
          fill: `currentColor`,
        }),
        (0, Z.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M8 1.66797C11.4971 1.66797 14.332 4.50293 14.332 8C14.332 11.4971 11.4971 14.332 8 14.332C4.50293 14.332 1.66797 11.4971 1.66797 8C1.66797 4.50293 4.50293 1.66797 8 1.66797ZM8 2.73203C5.09056 2.73203 2.73203 5.09056 2.73203 8C2.73203 10.9094 5.09056 13.268 8 13.268C10.9094 13.268 13.268 10.9094 13.268 8C13.268 5.09056 10.9094 2.73203 8 2.73203Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  Ot = (e) =>
    (0, Z.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 12,
      height: 10,
      fill: `none`,
      viewBox: `0 0 12 10`,
      ...e,
      children: (0, Z.jsx)(`path`, {
        fill: `currentColor`,
        d: `M2.4 9.332V1.817L.91 3.31a.533.533 0 0 1-.753-.753l2.4-2.4.083-.068a.533.533 0 0 1 .67.068l2.4 2.4.068.083a.533.533 0 0 1-.738.738l-.083-.068-1.492-1.492v7.515a.532.532 0 0 1-1.064 0Zm5.92-8.8a.532.532 0 0 1 1.064 0v7.516l1.492-1.492.084-.068a.533.533 0 0 1 .668.82l-2.4 2.4a.532.532 0 0 1-.752 0l-2.4-2.4a.533.533 0 0 1 .752-.752l1.493 1.492V.532Z`,
      }),
    }),
  Q = i();
function kt(e, t, n, r, i) {
  let a = (0, Q.c)(5),
    o;
  a[0] !== n || a[1] !== r
    ? ((o = (e) => {
        let { root: t } = e;
        return { operationSource: r, root: t, branch: n };
      }),
      (a[0] = n),
      (a[1] = r),
      (a[2] = o))
    : (o = a[2]);
  let s;
  return (
    a[3] === i
      ? (s = a[4])
      : ((s = { select: At, staleTime: D.FIVE_SECONDS, ...i }), (a[3] = i), (a[4] = s)),
    _(e, t, `branch-exists`, o, r, s)
  );
}
function At(e) {
  return e.exists;
}
function jt(e) {
  let t = (0, Q.c)(7),
    { command: n, output: r, className: i } = e,
    a = n ? `$ ${n}\n${r}` : r,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = ie(
        `bg-token-terminal-background border-token-terminal-border text-token-terminal-foreground max-h-[36vh] overflow-auto rounded-xl border px-3 py-2`,
        i,
      )),
      (t[0] = i),
      (t[1] = o));
  let s;
  t[2] === a
    ? (s = t[3])
    : ((s = (0, Z.jsx)(`pre`, {
        className: `font-mono text-xs leading-5 whitespace-pre`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = s));
  let c;
  return (
    t[4] !== o || t[5] !== s
      ? ((c = (0, Z.jsx)(`div`, { className: o, children: s })), (t[4] = o), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Mt(e) {
  let t = (0, Q.c)(11),
    { operation: n, onClose: r, onRetry: i } = e;
  if (n.status === `queued` || n.status === `running`) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, Z.jsx)(Nt, { operation: n })), (t[0] = n), (t[1] = e)), e
    );
  }
  if (n.status === `warning`) {
    let e;
    return (
      t[2] !== r || t[3] !== n
        ? ((e = (0, Z.jsx)(Ft, { operation: n, onClose: r })), (t[2] = r), (t[3] = n), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (n.status === `success`) {
    let e;
    return (
      t[5] === n ? (e = t[6]) : ((e = (0, Z.jsx)(Pt, { operation: n })), (t[5] = n), (t[6] = e)), e
    );
  }
  let a;
  return (
    t[7] !== r || t[8] !== i || t[9] !== n
      ? ((a = (0, Z.jsx)(It, { operation: n, onClose: r, onRetry: i })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = n),
        (t[10] = a))
      : (a = t[10]),
    a
  );
}
function Nt(e) {
  let t = (0, Q.c)(20),
    { operation: n } = e,
    r,
    i,
    a,
    o,
    s,
    c;
  if (t[0] !== n) {
    let e = Ut(n);
    ((i = Me), (s = `gap-0 px-6 py-5`));
    let l = Lt(n),
      u = Rt(n),
      d;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.progress.subtitle`,
          defaultMessage: `Hang tight, this may take a few moments. You can close this modal, we’ll let you know when the hand-off is finished.`,
          description: `Subtitle shown while a thread handoff is running`,
        })),
        (t[7] = d))
      : (d = t[7]),
      t[8] !== l || t[9] !== u
        ? ((c = (0, Z.jsx)(ke, {
            className: `gap-0`,
            children: (0, Z.jsx)(Ae, {
              icon: l,
              title: u,
              className: `gap-4`,
              iconClassName: `h-10 w-10 rounded-2xl p-0`,
              iconBackgroundClassName: `bg-token-foreground/5`,
              titleClassName: `font-semibold`,
              subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
              subtitle: d,
            }),
          })),
          (t[8] = l),
          (t[9] = u),
          (t[10] = c))
        : (c = t[10]),
      (r = ke),
      (a = `gap-4 pt-5`),
      (o = e.map((e) =>
        (0, Z.jsx)(
          _t,
          {
            step: e,
            direction: n.direction,
            localBranch: n.localBranch,
            sourceBranch: n.sourceBranch,
            worktreeBranch: n.worktreeBranch,
          },
          e.id,
        ),
      )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  } else ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]));
  let l;
  t[11] !== r || t[12] !== a || t[13] !== o
    ? ((l = (0, Z.jsx)(r, { className: a, children: o })),
      (t[11] = r),
      (t[12] = a),
      (t[13] = o),
      (t[14] = l))
    : (l = t[14]);
  let u;
  return (
    t[15] !== i || t[16] !== s || t[17] !== c || t[18] !== l
      ? ((u = (0, Z.jsxs)(i, { className: s, children: [c, l] })),
        (t[15] = i),
        (t[16] = s),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u))
      : (u = t[19]),
    u
  );
}
function Pt(e) {
  let t = (0, Q.c)(8),
    { operation: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(se, { className: `icon-md text-token-charts-green` })), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n ? (i = t[2]) : ((i = Vt(n)), (t[1] = n), (t[2] = i));
  let a;
  t[3] === n ? (a = t[4]) : ((a = Ht(n)), (t[3] = n), (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, Z.jsx)(Me, {
          className: `gap-0 px-6 py-5`,
          children: (0, Z.jsx)(ke, {
            className: `gap-0`,
            children: (0, Z.jsx)(Ae, {
              icon: r,
              className: `gap-4`,
              iconClassName: `h-10 w-10 rounded-2xl p-0`,
              iconBackgroundClassName: `bg-token-charts-green/20`,
              title: i,
              titleClassName: `font-semibold`,
              subtitle: a,
              subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
            }),
          }),
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function Ft(e) {
  let t = (0, Q.c)(12),
    { operation: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(Dt, { className: `icon-md text-token-editor-warning-foreground` })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n ? (a = t[2]) : ((a = zt(n)), (t[1] = n), (t[2] = a));
  let o;
  t[3] !== n.warningMessage || t[4] !== a
    ? ((o = (0, Z.jsx)(ke, {
        children: (0, Z.jsx)(Ae, {
          icon: i,
          className: `gap-4`,
          iconClassName: `h-10 w-10 rounded-2xl p-0`,
          iconBackgroundClassName: `bg-token-editor-warning-foreground/15`,
          title: a,
          titleClassName: `font-semibold`,
          subtitle: n.warningMessage,
          subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
        }),
      })),
      (t[3] = n.warningMessage),
      (t[4] = a),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.warning.close`,
        defaultMessage: `Close`,
        description: `Button label to dismiss the warning thread handoff modal`,
      })),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, Z.jsx)(ke, {
        className: `pt-6`,
        children: (0, Z.jsx)(Ne, {
          children: (0, Z.jsx)(ae, {
            color: `primary`,
            className: `h-8 rounded-full px-4 text-base font-medium`,
            onClick: r,
            children: s,
          }),
        }),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== o || t[10] !== c
      ? ((l = (0, Z.jsxs)(Me, { className: `gap-0 px-6 py-5`, children: [o, c] })),
        (t[9] = o),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function It(e) {
  let t = (0, Q.c)(21),
    { operation: n, onClose: r, onRetry: i } = e,
    a = n.execOutput,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(He, { className: `icon-md text-token-danger -ml-2` })), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === n ? (s = t[2]) : ((s = Bt(n)), (t[1] = n), (t[2] = s));
  let c;
  t[3] !== n.errorMessage || t[4] !== s
    ? ((c = (0, Z.jsx)(ke, {
        children: (0, Z.jsx)(Ae, {
          icon: o,
          className: `gap-4`,
          iconClassName: `h-auto w-auto rounded-none p-0`,
          iconBackgroundClassName: `bg-transparent`,
          title: s,
          titleClassName: `font-semibold`,
          subtitle: n.errorMessage,
          subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
        }),
      })),
      (t[3] = n.errorMessage),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l =
        a != null && a.output.length > 0
          ? (0, Z.jsx)(ke, {
              className: `pt-5`,
              children: (0, Z.jsx)(jt, { command: a?.command, output: a.output }),
            })
          : null),
      (t[6] = a),
      (t[7] = l));
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.error.close`,
        defaultMessage: `Close`,
        description: `Button label to close the failed thread handoff modal`,
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = (0, Z.jsx)(ae, {
        color: `secondary`,
        className: `h-8 rounded-full px-4 text-base font-medium`,
        onClick: r,
        children: u,
      })),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.error.retry`,
        defaultMessage: `Try again`,
        description: `Button label to retry a failed thread handoff`,
      })),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === i
    ? (p = t[13])
    : ((p = (0, Z.jsx)(ae, {
        color: `primary`,
        className: `h-8 rounded-full px-4 text-base font-medium`,
        onClick: i,
        children: f,
      })),
      (t[12] = i),
      (t[13] = p));
  let m;
  t[14] !== d || t[15] !== p
    ? ((m = (0, Z.jsx)(ke, { className: `pt-5`, children: (0, Z.jsxs)(Ne, { children: [d, p] }) })),
      (t[14] = d),
      (t[15] = p),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== c || t[18] !== l || t[19] !== m
      ? ((h = (0, Z.jsxs)(Me, {
          className: `max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto px-6 py-5`,
          children: [c, l, m],
        })),
        (t[17] = c),
        (t[18] = l),
        (t[19] = m),
        (t[20] = h))
      : (h = t[20]),
    h
  );
}
function Lt(e) {
  return (0, Z.jsx)(Ot, { className: `icon-md rotate-90 text-token-foreground` });
}
function Rt(e) {
  return e.direction === `to-worktree`
    ? (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.progress.worktree.title`,
        defaultMessage: `Handing off to worktree`,
        description: `Title shown while a thread is being handed off to a worktree`,
      })
    : e.direction === `to-host-worktree`
      ? (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.progress.hostWorktree.title`,
          defaultMessage: `Handing off to {destinationLabel}`,
          description: `Title shown while a thread is being handed off to a destination worktree on another host`,
          values: { destinationLabel: e.request.destinationLabel },
        })
      : (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.progress.local.title`,
          defaultMessage: `Handing off to local`,
          description: `Title shown while a thread is being handed off to local`,
        });
}
function zt(e) {
  return e.direction === `to-worktree`
    ? (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.warning.worktree.title`,
        defaultMessage: `Hand-off to worktree needs attention`,
        description: `Title shown when move to worktree finishes with a warning`,
      })
    : e.direction === `to-host-worktree`
      ? (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.warning.hostWorktree.title`,
          defaultMessage: `Hand-off to {destinationLabel} needs attention`,
          description: `Title shown when cross-host handoff finishes with a warning`,
          values: { destinationLabel: e.request.destinationLabel },
        })
      : (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.warning.local.title`,
          defaultMessage: `Hand-off to local needs attention`,
          description: `Title shown when move to local finishes with a warning`,
        });
}
function Bt(e) {
  return e.direction === `to-worktree`
    ? (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.error.worktree.title`,
        defaultMessage: `Hand-off to worktree failed`,
        description: `Title shown when move to worktree fails`,
      })
    : e.direction === `to-host-worktree`
      ? (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.error.hostWorktree.title`,
          defaultMessage: `Hand-off to {destinationLabel} failed`,
          description: `Title shown when cross-host handoff fails`,
          values: { destinationLabel: e.request.destinationLabel },
        })
      : (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.error.local.title`,
          defaultMessage: `Hand-off to local failed`,
          description: `Title shown when move to local fails`,
        });
}
function Vt(e) {
  return e.direction === `to-worktree`
    ? (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.success.worktree.title`,
        defaultMessage: `Handed-off to worktree`,
        description: `Title shown when move to worktree succeeds while the modal is open`,
      })
    : e.direction === `to-host-worktree`
      ? (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.success.hostWorktree.title`,
          defaultMessage: `Handed off to {destinationLabel}`,
          description: `Title shown when cross-host handoff succeeds while the modal is open`,
          values: { destinationLabel: e.request.destinationLabel },
        })
      : (0, Z.jsx)(P, {
          id: `localConversation.threadHandoff.success.local.title`,
          defaultMessage: `Handed-off to local`,
          description: `Title shown when move to local succeeds while the modal is open`,
        });
}
function Ht(e) {
  if (e.direction === `to-local`)
    return (0, Z.jsx)(P, {
      id: `localConversation.threadHandoff.success.local.subtitle`,
      defaultMessage: `You are now working on {branch} locally.`,
      description: `Subtitle shown when move to local succeeds while the modal is open`,
      values: { branch: e.sourceBranch },
    });
  if (e.direction === `to-host-worktree`)
    return (0, Z.jsx)(P, {
      id: `localConversation.threadHandoff.success.hostWorktree.subtitle`,
      defaultMessage: `You are now working in a worktree on {destinationLabel}`,
      description: `Subtitle shown when cross-host handoff succeeds while the modal is open`,
      values: { destinationLabel: e.request.destinationLabel },
    });
  let t = e.worktreeBranch ?? e.sourceBranch,
    n = e.localBranch != null && e.localBranch !== e.sourceBranch ? e.localBranch : null,
    r =
      e.request.existingWorktreeGitRoot == null
        ? (0, Z.jsx)(P, {
            id: `localConversation.threadHandoff.success.worktreeDescription.new`,
            defaultMessage: `new worktree`,
            description: `Noun phrase describing a newly created worktree in the thread handoff success message`,
          })
        : (0, Z.jsx)(P, {
            id: `localConversation.threadHandoff.success.worktreeDescription.existing`,
            defaultMessage: `worktree`,
            description: `Noun phrase describing an existing worktree in the thread handoff success message`,
          });
  return n == null
    ? (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.success.worktree.subtitle`,
        defaultMessage: `You are now working on {worktreeBranch} in a {worktreeDescription}.`,
        description: `Subtitle shown when move to worktree succeeds while the modal is open and no local checkout branch was changed`,
        values: { worktreeBranch: t, worktreeDescription: r },
      })
    : (0, Z.jsx)(P, {
        id: `localConversation.threadHandoff.success.worktree.subtitle.localBranch`,
        defaultMessage: `You are now working on {worktreeBranch} in a {worktreeDescription}. Branch {localBranch} was checked out locally.`,
        description: `Subtitle shown when move to worktree succeeds while the modal is open and a local checkout branch was changed`,
        values: { worktreeBranch: t, worktreeDescription: r, localBranch: n },
      });
}
function Ut(e) {
  let t = e.steps.findIndex((e) => e.status === `failed`);
  if (t === -1) return e.steps;
  let n = e.steps.slice(0, t + 1);
  return t === e.steps.length - 1 ? n : [...n, { id: `rolling-back-changes`, status: `running` }];
}
function Wt(e) {
  let t = (0, Q.c)(8),
    n = re(),
    r = a(rt, e),
    { data: i, isError: o, isLoading: s } = W(A.QUEUED_FOLLOW_UPS);
  switch (
    nt({
      pendingPastedTextAttachmentCount: r,
      queuedFollowUpsError: o,
      queuedFollowUpsLoading: s,
      queuedFollowUpCount: i?.[e]?.length ?? 0,
    })
  ) {
    case `loading-queued-follow-ups`: {
      let e;
      return (
        t[0] === n
          ? (e = t[1])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.loadingQueuedFollowUps`,
              defaultMessage: `Checking queued messages before handing off this chat`,
              description: `Message shown when thread handoff is disabled while queued messages are loading`,
            })),
            (t[0] = n),
            (t[1] = e)),
        e
      );
    }
    case `pending-pasted-text-attachments`: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.pendingPastedTextAttachments`,
              defaultMessage: `Wait for pasted text attachments to finish before handing off this chat`,
              description: `Message shown when thread handoff is disabled while pasted text attachments are being created`,
            })),
            (t[2] = n),
            (t[3] = e)),
        e
      );
    }
    case `queued-follow-ups`: {
      let e;
      return (
        t[4] === n
          ? (e = t[5])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.queuedFollowUps`,
              defaultMessage: `Send or remove queued messages before handing off this chat`,
              description: `Message shown when thread handoff is disabled because queued messages would remain attached to the source chat`,
            })),
            (t[4] = n),
            (t[5] = e)),
        e
      );
    }
    case `unavailable-queued-follow-ups`: {
      let e;
      return (
        t[6] === n
          ? (e = t[7])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.unavailableQueuedFollowUps`,
              defaultMessage: `Unable to check queued messages before handing off this chat`,
              description: `Message shown when thread handoff is disabled because queued messages could not be loaded`,
            })),
            (t[6] = n),
            (t[7] = e)),
        e
      );
    }
    case null:
      return null;
  }
}
function Gt(e) {
  let t = (0, Q.c)(109),
    {
      open: n,
      onOpenChange: r,
      conversationId: i,
      composerViewState: o,
      conversationTitle: s,
      currentBranch: c,
      cwd: l,
      destinationHostId: u,
      destinationWorkspaceRoot: d,
      destinationLabel: f,
    } = e,
    p = re(),
    h = Wt(i),
    _ = a(v, i) ?? !1,
    [y, b] = (0, Tt.useState)(null),
    { data: x } = W(A.GIT_BRANCH_PREFIX),
    S = at({ branchPrefix: x ?? void 0, conversationTitle: s }),
    C = de(),
    w;
  t[0] === c ? (w = t[1]) : ((w = c.trim()), (t[0] = c), (t[1] = w));
  let T = w.length === 0,
    E = T ? (y ?? S) : c,
    D = E.trim(),
    k = m(u),
    ee;
  t[2] !== i || t[3] !== C
    ? ((ee = C.getMaybeForConversationId(i)?.getConversation(i)?.forkedFromId ?? null),
      (t[2] = i),
      (t[3] = C),
      (t[4] = ee))
    : (ee = t[4]);
  let j = ee,
    M;
  t[5] !== u || t[6] !== d || t[7] !== j
    ? ((M = [`move-thread`, `to-host-worktree`, `resolve-owned-worktree`, u, d, j]),
      (t[5] = u),
      (t[6] = d),
      (t[7] = j),
      (t[8] = M))
    : (M = t[8]);
  let N;
  t[9] !== i || t[10] !== k || t[11] !== d || t[12] !== j
    ? ((N = () =>
        g(`git`).request({
          method: `resolve-worktree-for-thread`,
          params: {
            cwd: d,
            conversationId: j ?? i,
            hostConfig: k,
            operationSource: `move_to_host_worktree`,
          },
        })),
      (t[9] = i),
      (t[10] = k),
      (t[11] = d),
      (t[12] = j),
      (t[13] = N))
    : (N = t[13]);
  let te = n && j != null,
    ne;
  t[14] !== M || t[15] !== N || t[16] !== te
    ? ((ne = { queryKey: M, queryFn: N, enabled: te, staleTime: 0 }),
      (t[14] = M),
      (t[15] = N),
      (t[16] = te),
      (t[17] = ne))
    : (ne = t[17]);
  let { data: ie } = O(ne),
    F = ie?.worktreeGitRoot != null && ie?.worktreeWorkspaceRoot != null,
    oe = o.pastedTextAttachments.length > 0,
    se = n && !oe && T && D.length > 0 && !D.endsWith(`/`),
    I;
  t[18] === se ? (I = t[19]) : ((I = { enabled: se }), (t[18] = se), (t[19] = I));
  let { data: L, isPending: ce } = kt(d, k, D, `move_to_host_worktree`, I),
    R = null;
  if (h != null) R = h;
  else if (oe) {
    let e;
    (t[20] === p
      ? (e = t[21])
      : ((e = p.formatMessage({
          id: `localConversation.moveToHostWorktree.confirm.pastedTextAttachments`,
          defaultMessage: `Remove pasted text attachments before handing off this chat`,
          description: `Message shown when cross-host handoff cannot transfer generated pasted text attachments`,
        })),
        (t[20] = p),
        (t[21] = e)),
      (R = e));
  } else if (D.length === 0) {
    let e;
    (t[22] === p
      ? (e = t[23])
      : ((e = p.formatMessage({
          id: `localConversation.moveToHostWorktree.confirm.branchRequired`,
          defaultMessage: `Enter a branch name`,
          description: `Message shown when cross-host handoff needs a branch name before it can continue`,
        })),
        (t[22] = p),
        (t[23] = e)),
      (R = e));
  } else if (D.endsWith(`/`)) {
    let e;
    (t[24] === p
      ? (e = t[25])
      : ((e = p.formatMessage({
          id: `localConversation.moveToHostWorktree.confirm.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”`,
          description: `Message shown when the cross-host handoff branch name ends with a slash`,
        })),
        (t[24] = p),
        (t[25] = e)),
      (R = e));
  } else if (ce && se) {
    let e;
    (t[26] === p
      ? (e = t[27])
      : ((e = p.formatMessage({
          id: `localConversation.moveToHostWorktree.confirm.checkingBranch`,
          defaultMessage: `Checking whether that branch already exists…`,
          description: `Message shown while cross-host handoff checks whether the destination branch already exists`,
        })),
        (t[26] = p),
        (t[27] = e)),
      (R = e));
  } else if (L && !F) {
    let e;
    (t[28] === p
      ? (e = t[29])
      : ((e = p.formatMessage({
          id: `localConversation.moveToHostWorktree.confirm.branchAlreadyExists`,
          defaultMessage: `Branch already exists`,
          description: `Message shown when the destination branch already exists before cross-host handoff`,
        })),
        (t[28] = p),
        (t[29] = e)),
      (R = e));
  }
  let z = R != null,
    { activeOperationId: le } = st(),
    B = lt(i),
    {
      addToHostWorktreeOperation: V,
      closeActiveOperation: ue,
      removeOperation: H,
      openOperation: U,
      updateOperation: fe,
    } = ct(),
    G = B != null && le === B.id,
    pe = n || G,
    K = B?.status === `success` || B?.status === `warning` || B?.status === `error`,
    q;
  t[30] !== ue || t[31] !== G || t[32] !== r || t[33] !== B || t[34] !== H || t[35] !== K
    ? ((q = (e) => {
        if (!e && G) {
          if (K) {
            (H(B.id), r(!1));
            return;
          }
          (ue(), r(!1));
          return;
        }
        (e || b(null), r(e));
      }),
      (t[30] = ue),
      (t[31] = G),
      (t[32] = r),
      (t[33] = B),
      (t[34] = H),
      (t[35] = K),
      (t[36] = q))
    : (q = t[36]);
  let me = q,
    he;
  t[37] !== V ||
  t[38] !== o ||
  t[39] !== i ||
  t[40] !== l ||
  t[41] !== u ||
  t[42] !== f ||
  t[43] !== d ||
  t[44] !== z ||
  t[45] !== U ||
  t[46] !== D ||
  t[47] !== F
    ? ((he = () => {
        z ||
          (U(
            V({
              sourceConversationId: i,
              sourceBranch: D,
              request: {
                cwd: l,
                destinationHostId: u,
                destinationLabel: f,
                destinationWorkspaceRoot: d,
              },
              stepIds: [
                `prepare-host-transfer`,
                `transfer-host-artifacts`,
                F ? `reuse-existing-worktree` : `create-new-worktree`,
                `apply-changes-to-worktree`,
                `switching-thread`,
              ],
              composerViewState: o,
            }).id,
          ),
          b(null));
      }),
      (t[37] = V),
      (t[38] = o),
      (t[39] = i),
      (t[40] = l),
      (t[41] = u),
      (t[42] = f),
      (t[43] = d),
      (t[44] = z),
      (t[45] = U),
      (t[46] = D),
      (t[47] = F),
      (t[48] = he))
    : (he = t[48]);
  let ge = he;
  if (G && B != null) {
    let e;
    t[49] !== ue || t[50] !== B.id || t[51] !== H || t[52] !== K
      ? ((e = () => {
          if (K) {
            H(B.id);
            return;
          }
          ue();
        }),
        (t[49] = ue),
        (t[50] = B.id),
        (t[51] = H),
        (t[52] = K),
        (t[53] = e))
      : (e = t[53]);
    let n;
    t[54] !== T ||
    t[55] !== r ||
    t[56] !== U ||
    t[57] !== B.id ||
    t[58] !== B.sourceBranch ||
    t[59] !== H ||
    t[60] !== fe
      ? ((n = () => {
          if (T) {
            (b(B.sourceBranch), H(B.id), r(!0));
            return;
          }
          (fe(B.id, Kt), U(B.id));
        }),
        (t[54] = T),
        (t[55] = r),
        (t[56] = U),
        (t[57] = B.id),
        (t[58] = B.sourceBranch),
        (t[59] = H),
        (t[60] = fe),
        (t[61] = n))
      : (n = t[61]);
    let i;
    t[62] !== B || t[63] !== e || t[64] !== n
      ? ((i = (0, Z.jsx)(Mt, { operation: B, onClose: e, onRetry: n })),
        (t[62] = B),
        (t[63] = e),
        (t[64] = n),
        (t[65] = i))
      : (i = t[65]);
    let a;
    return (
      t[66] !== pe || t[67] !== me || t[68] !== i
        ? ((a = (0, Z.jsx)(je, { size: `compact`, open: pe, onOpenChange: me, children: i })),
          (t[66] = pe),
          (t[67] = me),
          (t[68] = i),
          (t[69] = a))
        : (a = t[69]),
      a
    );
  }
  let _e;
  t[70] === ge
    ? (_e = t[71])
    : ((_e = (e) => {
        (e.preventDefault(), ge());
      }),
      (t[70] = ge),
      (t[71] = _e));
  let ve;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Z.jsx)(it.Header, {
        icon: (0, Z.jsx)(Ot, { className: `icon-base rotate-90 text-token-foreground` }),
      })),
      (t[72] = ve))
    : (ve = t[72]);
  let J;
  t[73] === f
    ? (J = t[74])
    : ((J = (0, Z.jsx)(it.Title, {
        children: (0, Z.jsx)(P, {
          id: `localConversation.moveToHostWorktree.modal.title`,
          defaultMessage: `Hand off chat to {destinationLabel}`,
          description: `Title for the cross-host handoff modal`,
          values: { destinationLabel: f },
        }),
      })),
      (t[73] = f),
      (t[74] = J));
  let ye;
  t[75] !== f || t[76] !== T || t[77] !== D || t[78] !== F
    ? ((ye = (0, Z.jsx)(`p`, {
        className: `text-base leading-6 tracking-[-0.13px] text-token-description-foreground`,
        children: T
          ? (0, Z.jsx)(P, {
              id: `localConversation.moveToHostWorktree.modal.detachedSubtitle`,
              defaultMessage: `Create a branch to keep working in {worktreeDescription} on {destinationLabel}`,
              description: `Subtitle shown when cross-host handoff starts from detached HEAD and needs a branch name`,
              values: {
                destinationLabel: f,
                worktreeDescription: F
                  ? (0, Z.jsx)(P, {
                      id: `localConversation.moveToHostWorktree.modal.detachedSubtitle.existingWorktree`,
                      defaultMessage: `the existing worktree`,
                      description: `Phrase used in cross-host handoff copy when reusing an existing worktree`,
                    })
                  : (0, Z.jsx)(P, {
                      id: `localConversation.moveToHostWorktree.modal.detachedSubtitle.newWorktree`,
                      defaultMessage: `a new worktree`,
                      description: `Phrase used in cross-host handoff copy when creating a new worktree`,
                    }),
              },
            })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`span`, {
                  children: (0, Z.jsx)(P, {
                    id: `localConversation.moveToHostWorktree.modal.branchSubtitle.prefix`,
                    defaultMessage: `Continue branch `,
                    description: `Prefix for the cross-host handoff confirmation sentence before the branch name`,
                  }),
                }),
                (0, Z.jsx)(qt, { children: D }),
                (0, Z.jsx)(`span`, {
                  children: (0, Z.jsx)(P, {
                    id: `localConversation.moveToHostWorktree.modal.branchSubtitle.suffix`,
                    defaultMessage: ` in {worktreeDescription} on {destinationLabel}`,
                    description: `Suffix for the cross-host handoff confirmation sentence after the branch name`,
                    values: {
                      destinationLabel: f,
                      worktreeDescription: F
                        ? (0, Z.jsx)(P, {
                            id: `localConversation.moveToHostWorktree.modal.branchSubtitle.existingWorktree`,
                            defaultMessage: `the existing worktree`,
                            description: `Phrase used in cross-host handoff copy when reusing an existing worktree`,
                          })
                        : (0, Z.jsx)(P, {
                            id: `localConversation.moveToHostWorktree.modal.branchSubtitle.newWorktree`,
                            defaultMessage: `a new worktree`,
                            description: `Phrase used in cross-host handoff copy when creating a new worktree`,
                          }),
                    },
                  }),
                }),
              ],
            }),
      })),
      (t[75] = f),
      (t[76] = T),
      (t[77] = D),
      (t[78] = F),
      (t[79] = ye))
    : (ye = t[79]);
  let be;
  t[80] !== J || t[81] !== ye
    ? ((be = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [J, ye] })),
      (t[80] = J),
      (t[81] = ye),
      (t[82] = be))
    : (be = t[82]);
  let xe;
  t[83] !== E || t[84] !== p || t[85] !== T
    ? ((xe = T
        ? (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground`,
                children: (0, Z.jsx)(P, {
                  id: `localConversation.moveToHostWorktree.modal.branchLabel`,
                  defaultMessage: `Branch name`,
                  description: `Label for the branch name input in the cross-host handoff modal`,
                }),
              }),
              (0, Z.jsx)(`input`, {
                className: `h-12 w-full rounded-2xl border border-token-border/40 bg-transparent px-4 text-base leading-6 tracking-[-0.13px] text-token-foreground outline-none placeholder:text-token-description-foreground`,
                autoFocus: !0,
                value: E,
                onChange: (e) => {
                  b(mt(e.target.value));
                },
                placeholder: p.formatMessage({
                  id: `localConversation.moveToHostWorktree.modal.branchPlaceholder`,
                  defaultMessage: `new-branch`,
                  description: `Placeholder for the branch name input in the cross-host handoff modal`,
                }),
                "aria-label": p.formatMessage({
                  id: `localConversation.moveToHostWorktree.modal.branchAriaLabel`,
                  defaultMessage: `Destination branch name`,
                  description: `Aria label for the branch name input in the cross-host handoff modal`,
                }),
              }),
            ],
          })
        : null),
      (t[83] = E),
      (t[84] = p),
      (t[85] = T),
      (t[86] = xe))
    : (xe = t[86]);
  let Y;
  t[87] !== be || t[88] !== xe
    ? ((Y = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-5`, children: [be, xe] })),
      (t[87] = be),
      (t[88] = xe),
      (t[89] = Y))
    : (Y = t[89]);
  let Se;
  t[90] === _
    ? (Se = t[91])
    : ((Se = _
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-token-foreground`,
            children: [
              (0, Z.jsx)(Dt, {
                className: `icon-sm mt-1 shrink-0 text-token-editor-warning-foreground`,
              }),
              (0, Z.jsx)(P, {
                id: `localConversation.threadHandoff.runningWarning`,
                defaultMessage: `This thread is running, so handing it off will interrupt the current response`,
                description: `Warning shown in thread handoff confirmation dialogs when the source thread is still running`,
              }),
            ],
          })
        : null),
      (t[90] = _),
      (t[91] = Se));
  let Ce;
  t[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Z.jsx)(P, {
        id: `localConversation.moveToHostWorktree.modal.continue`,
        defaultMessage: `Hand off`,
        description: `Primary action in the cross-host handoff modal`,
      })),
      (t[92] = Ce))
    : (Ce = t[92]);
  let we;
  t[93] === z
    ? (we = t[94])
    : ((we = (0, Z.jsx)(ae, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: z,
        type: `submit`,
        children: Ce,
      })),
      (t[93] = z),
      (t[94] = we));
  let Te;
  t[95] === R
    ? (Te = t[96])
    : ((Te =
        R == null
          ? null
          : (0, Z.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground`,
              children: R,
            })),
      (t[95] = R),
      (t[96] = Te));
  let Ee;
  t[97] !== Se || t[98] !== we || t[99] !== Te
    ? ((Ee = (0, Z.jsx)(it.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Z.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3`,
          children: [Se, we, Te],
        }),
      })),
      (t[97] = Se),
      (t[98] = we),
      (t[99] = Te),
      (t[100] = Ee))
    : (Ee = t[100]);
  let De;
  t[101] !== _e || t[102] !== Y || t[103] !== Ee
    ? ((De = (0, Z.jsxs)(it.Root, {
        as: `form`,
        className: `gap-5`,
        onSubmit: _e,
        children: [ve, Y, Ee],
      })),
      (t[101] = _e),
      (t[102] = Y),
      (t[103] = Ee),
      (t[104] = De))
    : (De = t[104]);
  let Oe;
  return (
    t[105] !== me || t[106] !== n || t[107] !== De
      ? ((Oe = (0, Z.jsx)(je, { size: `compact`, open: n, onOpenChange: me, children: De })),
        (t[105] = me),
        (t[106] = n),
        (t[107] = De),
        (t[108] = Oe))
      : (Oe = t[108]),
    Oe
  );
}
function Kt(e) {
  Object.assign(e, ut(e));
}
function qt(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`span`, {
          className: `mx-1 inline-flex max-w-full items-center rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 tracking-[-0.13px] text-token-foreground`,
          children: (0, Z.jsx)(`span`, { className: `truncate`, children: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Jt(e, t, n, r) {
  let i = (0, Q.c)(9),
    a;
  i[0] === r ? (a = i[1]) : ((a = r === void 0 ? {} : r), (i[0] = r), (i[1] = a));
  let o = a,
    s = String(e),
    c;
  i[2] === s ? (c = i[3]) : ((c = te(s)), (i[2] = s), (i[3] = c));
  let l;
  i[4] !== n || i[5] !== c
    ? ((l = { cwd: c, operationSource: n }), (i[4] = n), (i[5] = c), (i[6] = l))
    : (l = i[6]);
  let u;
  return (
    i[7] === o ? (u = i[8]) : ((u = { staleTime: D.FIVE_SECONDS, ...o }), (i[7] = o), (i[8] = u)),
    _(e, t, `list-worktrees`, l, n, u)
  );
}
function Yt(e) {
  let t = (0, Q.c)(63),
    {
      open: n,
      onOpenChange: r,
      conversationId: i,
      composerViewState: o,
      conversationTitle: s,
      currentBranch: c,
      cwd: l,
    } = e,
    d = re(),
    f = Wt(i),
    [p, h] = (0, Tt.useState)(null),
    [g, _] = (0, Tt.useState)(null),
    v = at({ branchPrefix: F(j.branchPrefix) ?? void 0, conversationTitle: s }),
    y = g ?? (c || v),
    b = y.trim(),
    S = m(a(T, i)),
    { data: w } = x(l, S, `move_to_local_dialog`),
    E = w?.root ?? null,
    D = E ?? l,
    O = le(D),
    { data: k, isLoading: ee, isFetching: A } = Jt(E ?? l, S, `move_to_local_dialog`),
    { data: N } = vt(S, `move_to_local_dialog`),
    ne = G(S.id),
    { data: P } = u(C),
    ie = k?.worktrees,
    ae;
  t[0] === N?.worktrees
    ? (ae = t[1])
    : ((ae = new Set((N?.worktrees ?? []).map(Xt))), (t[0] = N?.worktrees), (t[1] = ae));
  let oe = ae,
    se;
  t[2] !== ne || t[3] !== oe
    ? ((se = (e) => oe.has(le(e)) || M(e, ne)), (t[2] = ne), (t[3] = oe), (t[4] = se))
    : (se = t[4]);
  let I = se,
    L,
    ce,
    R,
    z,
    B,
    V;
  if (t[5] !== l || t[6] !== I || t[7] !== ie || t[8] !== p || t[9] !== D || t[10] !== P?.labels) {
    let e;
    (t[17] === I ? (e = t[18]) : ((e = (e) => !I(e.root)), (t[17] = I), (t[18] = e)),
      (ce = dt({ cwd: l, sourceWorktreeRoot: D, repoWorktreeEntries: (ie ?? []).filter(e) })));
    let n;
    (t[19] === P?.labels ? (n = t[20]) : ((n = P?.labels ?? {}), (t[19] = P?.labels), (t[20] = n)),
      (V = n),
      (z = ce.find((e) => e.gitRoot === p) ?? ce[0] ?? null));
    let r = z?.workspaceRoot ?? null;
    ((R = r == null ? null : te(r)),
      (L = z?.gitRoot ?? null),
      (B = L ? le(L) : null),
      (t[5] = l),
      (t[6] = I),
      (t[7] = ie),
      (t[8] = p),
      (t[9] = D),
      (t[10] = P?.labels),
      (t[11] = L),
      (t[12] = ce),
      (t[13] = R),
      (t[14] = z),
      (t[15] = B),
      (t[16] = V));
  } else ((L = t[11]), (ce = t[12]), (R = t[13]), (z = t[14]), (B = t[15]), (V = t[16]));
  let ue = B,
    H = n && L != null,
    U;
  t[21] === H
    ? (U = t[22])
    : ((U = { enabled: H, refetchOnMount: `always`, refetchOnWindowFocus: `always` }),
      (t[21] = H),
      (t[22] = U));
  let { data: de, isLoading: W, isFetching: fe } = Je(L, S, `move_to_local_dialog`, U),
    pe = n && L != null,
    K;
  t[23] === pe
    ? (K = t[24])
    : ((K = { enabled: pe, refetchOnMount: `always`, refetchOnWindowFocus: `always` }),
      (t[23] = pe),
      (t[24] = K));
  let { data: q, isLoading: me, isFetching: he } = pt(L, S, `move_to_local_dialog`, K),
    ge = (ie ?? []).some((e) => {
      let t = le(e.root);
      return !(
        I(e.root) ||
        e.headRef.type !== `branch` ||
        e.headRef.string !== b ||
        (ue && t === ue) ||
        t === O
      );
    }),
    _e = ee || A || (L != null && (W || fe || me || he)),
    ve = q?.type === `success` && q.stagedCount + q.unstagedCount + q.untrackedCount > 0,
    J = null;
  if (f != null) J = f;
  else if (ee || A) {
    let e;
    (t[25] === d
      ? (e = t[26])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.disabled.loading`,
          defaultMessage: `Checking available local workspaces…`,
          description: `Tooltip shown when the move to local button is disabled while local worktrees are loading`,
        })),
        (t[25] = d),
        (t[26] = e)),
      (J = e));
  } else if (z == null || R == null) {
    let e;
    (t[27] === d
      ? (e = t[28])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.disabled.noWorkspace`,
          defaultMessage: `No local workspace found for this worktree`,
          description: `Tooltip shown when the move to local button is disabled because no local workspace is available`,
        })),
        (t[27] = d),
        (t[28] = e)),
      (J = e));
  } else if (b.length === 0) {
    let e;
    (t[29] === d
      ? (e = t[30])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.branchRequired`,
          defaultMessage: `Enter a branch name`,
          description: `Tooltip shown when the move to local button is disabled because no local branch name was entered`,
        })),
        (t[29] = d),
        (t[30] = e)),
      (J = e));
  } else if (b.endsWith(`/`)) {
    let e;
    (t[31] === d
      ? (e = t[32])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”`,
          description: `Tooltip shown when the move to local button is disabled because the local branch name ends with a slash`,
        })),
        (t[31] = d),
        (t[32] = e)),
      (J = e));
  } else if (ge) {
    let e;
    (t[33] === d
      ? (e = t[34])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.disabled.branchCheckedOut`,
          defaultMessage: `Branch is already checked out in another worktree`,
          description: `Tooltip shown when the move to local button is disabled because the branch is checked out elsewhere`,
        })),
        (t[33] = d),
        (t[34] = e)),
      (J = e));
  } else if (E == null) {
    let e;
    (t[35] === d
      ? (e = t[36])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.missingWorktreeRoot`,
          defaultMessage: `Unable to resolve the current worktree`,
          description: `Tooltip shown when the move to local button is disabled because the source worktree root is unavailable`,
        })),
        (t[35] = d),
        (t[36] = e)),
      (J = e));
  } else if (L != null && (W || fe || me || he)) {
    let e;
    (t[37] === d
      ? (e = t[38])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.loadingStatus`,
          defaultMessage: `Checking local workspace status…`,
          description: `Tooltip shown when the move to local button is disabled while git status is loading`,
        })),
        (t[37] = d),
        (t[38] = e)),
      (J = e));
  } else if (de == null) {
    let e;
    (t[39] === d
      ? (e = t[40])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.missingLocalBranch`,
          defaultMessage: `Unable to determine the current local branch`,
          description: `Tooltip shown when the move to local button is disabled because the current local branch is unavailable`,
        })),
        (t[39] = d),
        (t[40] = e)),
      (J = e));
  } else if (q?.type !== `success`) {
    let e;
    (t[41] === d
      ? (e = t[42])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.localStatusError`,
          defaultMessage: `Unable to determine whether the local workspace is clean`,
          description: `Tooltip shown when the move to local button is disabled because the local git status check failed`,
        })),
        (t[41] = d),
        (t[42] = e)),
      (J = e));
  } else if (ve) {
    let e;
    (t[43] === d
      ? (e = t[44])
      : ((e = d.formatMessage({
          id: `localConversation.moveToLocal.confirm.localChangesBlocked`,
          defaultMessage: `Stash or commit your local changes to hand off`,
          description: `Tooltip shown when the move to local button is disabled because the destination local workspace is not clean`,
        })),
        (t[43] = d),
        (t[44] = e)),
      (J = e));
  }
  let ye = S.kind === `local` ? `local` : `remote`,
    be;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = () => {
        _(null);
      }),
      (t[45] = be))
    : (be = t[45]);
  let xe;
  return (
    t[46] !== o ||
    t[47] !== J ||
    t[48] !== i ||
    t[49] !== l ||
    t[50] !== _e ||
    t[51] !== y ||
    t[52] !== L ||
    t[53] !== ce ||
    t[54] !== R ||
    t[55] !== r ||
    t[56] !== n ||
    t[57] !== z ||
    t[58] !== ye ||
    t[59] !== b ||
    t[60] !== V ||
    t[61] !== E
      ? ((xe = (0, Z.jsx)(Zt, {
          open: n,
          onOpenChange: r,
          conversationId: i,
          composerViewState: o,
          localBranch: y,
          trimmedLocalBranch: b,
          onChangeLocalBranch: _,
          cwd: l,
          localTargets: ce,
          selectedLocalTarget: z,
          onChangeLocalTarget: h,
          workspaceRootLabels: V,
          isLoadingBlocked: _e,
          confirmDisabledReason: J,
          localGitRoot: L,
          localWorkspaceCwd: R,
          worktreeRoot: E,
          destinationLabel: ye,
          onResetLocalBranch: be,
        })),
        (t[46] = o),
        (t[47] = J),
        (t[48] = i),
        (t[49] = l),
        (t[50] = _e),
        (t[51] = y),
        (t[52] = L),
        (t[53] = ce),
        (t[54] = R),
        (t[55] = r),
        (t[56] = n),
        (t[57] = z),
        (t[58] = ye),
        (t[59] = b),
        (t[60] = V),
        (t[61] = E),
        (t[62] = xe))
      : (xe = t[62]),
    xe
  );
}
function Xt(e) {
  return le(e.dir);
}
function Zt(e) {
  let t = (0, Q.c)(109),
    {
      open: n,
      onOpenChange: r,
      conversationId: i,
      composerViewState: o,
      localBranch: s,
      trimmedLocalBranch: c,
      onChangeLocalBranch: l,
      cwd: u,
      localTargets: d,
      selectedLocalTarget: f,
      onChangeLocalTarget: p,
      workspaceRootLabels: m,
      isLoadingBlocked: h,
      confirmDisabledReason: g,
      localGitRoot: _,
      localWorkspaceCwd: y,
      worktreeRoot: b,
      destinationLabel: x,
      onResetLocalBranch: S,
    } = e,
    C = re(),
    w = a(v, i) ?? !1,
    { activeOperationId: T } = st(),
    E = lt(i),
    {
      addToLocalOperation: D,
      closeActiveOperation: O,
      removeOperation: k,
      openOperation: ee,
      updateOperation: A,
    } = ct(),
    j = E != null && T === E.id,
    M = n || j,
    N = g != null || _ == null || y == null || b == null,
    te;
  t[0] !== f || t[1] !== m
    ? ((te = f == null ? null : $t({ workspaceRoot: f.workspaceRoot, workspaceRootLabels: m })),
      (t[0] = f),
      (t[1] = m),
      (t[2] = te))
    : (te = t[2]);
  let ne = te,
    ie = f == null || d.length <= 1,
    F;
  t[3] !== D ||
  t[4] !== o ||
  t[5] !== i ||
  t[6] !== u ||
  t[7] !== N ||
  t[8] !== _ ||
  t[9] !== y ||
  t[10] !== S ||
  t[11] !== ee ||
  t[12] !== c ||
  t[13] !== b
    ? ((F = () => {
        N ||
          (ee(
            D({
              sourceConversationId: i,
              sourceBranch: c,
              localBranch: c,
              request: { cwd: u, localGitRoot: _, localWorkspaceRoot: y, worktreeRoot: b },
              stepIds: [
                `stash-source-changes`,
                `detach-worktree-branch`,
                `checkout-local-branch`,
                `apply-changes-to-local`,
                `switching-thread`,
              ],
              composerViewState: o,
            }).id,
          ),
          S());
      }),
      (t[3] = D),
      (t[4] = o),
      (t[5] = i),
      (t[6] = u),
      (t[7] = N),
      (t[8] = _),
      (t[9] = y),
      (t[10] = S),
      (t[11] = ee),
      (t[12] = c),
      (t[13] = b),
      (t[14] = F))
    : (F = t[14]);
  let oe = F,
    se;
  t[15] !== O || t[16] !== j || t[17] !== r || t[18] !== S || t[19] !== E || t[20] !== k
    ? ((se = (e) => {
        if (!e && j) {
          if (E?.status === `success` || E?.status === `error`) {
            (k(E.id), r(!1));
            return;
          }
          if (E?.status === `warning`) {
            (k(E.id), r(!1));
            return;
          }
          (O(), r(!1));
          return;
        }
        (e || S(), r(e));
      }),
      (t[15] = O),
      (t[16] = j),
      (t[17] = r),
      (t[18] = S),
      (t[19] = E),
      (t[20] = k),
      (t[21] = se))
    : (se = t[21]);
  let I = se;
  if (j && E != null) {
    let e;
    t[22] !== O || t[23] !== E.id || t[24] !== E.status || t[25] !== k
      ? ((e = () => {
          if (E.status === `success` || E.status === `error`) {
            k(E.id);
            return;
          }
          if (E.status === `warning`) {
            k(E.id);
            return;
          }
          O();
        }),
        (t[22] = O),
        (t[23] = E.id),
        (t[24] = E.status),
        (t[25] = k),
        (t[26] = e))
      : (e = t[26]);
    let n;
    t[27] !== ee || t[28] !== E.id || t[29] !== A
      ? ((n = () => {
          (A(E.id, Qt), ee(E.id));
        }),
        (t[27] = ee),
        (t[28] = E.id),
        (t[29] = A),
        (t[30] = n))
      : (n = t[30]);
    let r;
    t[31] !== E || t[32] !== e || t[33] !== n
      ? ((r = (0, Z.jsx)(Mt, { operation: E, onClose: e, onRetry: n })),
        (t[31] = E),
        (t[32] = e),
        (t[33] = n),
        (t[34] = r))
      : (r = t[34]);
    let i;
    return (
      t[35] !== M || t[36] !== I || t[37] !== r
        ? ((i = (0, Z.jsx)(je, { size: `compact`, open: M, onOpenChange: I, children: r })),
          (t[35] = M),
          (t[36] = I),
          (t[37] = r),
          (t[38] = i))
        : (i = t[38]),
      i
    );
  }
  let L;
  t[39] === oe
    ? (L = t[40])
    : ((L = (e) => {
        (e.preventDefault(), oe());
      }),
      (t[39] = oe),
      (t[40] = L));
  let ce;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Z.jsx)(it.Header, {
        icon: (0, Z.jsx)(Ot, { className: `icon-base rotate-90 text-token-foreground` }),
      })),
      (t[41] = ce))
    : (ce = t[41]);
  let R;
  t[42] === x
    ? (R = t[43])
    : ((R = (0, Z.jsx)(it.Title, {
        children: (0, Z.jsx)(P, {
          id: `localConversation.moveToLocal.modal.title`,
          defaultMessage: `Hand off chat to {destinationLabel}`,
          description: `Title for the move-to-local confirmation modal`,
          values: { destinationLabel: x },
        }),
      })),
      (t[42] = x),
      (t[43] = R));
  let z;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(P, {
          id: `localConversation.moveToLocal.modal.subtitle.prefix`,
          defaultMessage: `Check out branch `,
          description: `Prefix for the move-to-local confirmation sentence before the branch name`,
        }),
      })),
      (t[44] = z))
    : (z = t[44]);
  let le;
  t[45] === l
    ? (le = t[46])
    : ((le = (e) => {
        l(mt(e.target.value));
      }),
      (t[45] = l),
      (t[46] = le));
  let B;
  t[47] === C
    ? (B = t[48])
    : ((B = C.formatMessage({
        id: `localConversation.moveToLocal.modal.branchAriaLabel`,
        defaultMessage: `Local branch name`,
        description: `Aria label for the branch name input in the move-to-local modal`,
      })),
      (t[47] = C),
      (t[48] = B));
  let V;
  t[49] !== s || t[50] !== le || t[51] !== B
    ? ((V = (0, Z.jsx)(`input`, {
        className: `mx-1 inline-flex h-8 w-48 rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 text-token-foreground outline-none`,
        autoFocus: !0,
        value: s,
        onChange: le,
        "aria-label": B,
      })),
      (t[49] = s),
      (t[50] = le),
      (t[51] = B),
      (t[52] = V))
    : (V = t[52]);
  let H;
  t[53] === x
    ? (H = t[54])
    : ((H = (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(P, {
          id: `localConversation.moveToLocal.modal.subtitle.suffix`,
          defaultMessage: ` in a {destinationLabel} workspace and detach it from worktree.`,
          description: `Suffix for the move-to-local confirmation sentence after the branch name`,
          values: { destinationLabel: x },
        }),
      })),
      (t[53] = x),
      (t[54] = H));
  let U;
  t[55] !== V || t[56] !== H
    ? ((U = (0, Z.jsxs)(`p`, {
        className: `text-base leading-6 tracking-[-0.13px] text-token-description-foreground`,
        children: [z, V, H],
      })),
      (t[55] = V),
      (t[56] = H),
      (t[57] = U))
    : (U = t[57]);
  let de;
  t[58] !== U || t[59] !== R
    ? ((de = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [R, U] })),
      (t[58] = U),
      (t[59] = R),
      (t[60] = de))
    : (de = t[60]);
  let W;
  t[61] === x
    ? (W = t[62])
    : ((W = (0, Z.jsx)(`span`, {
        className: `text-token-description-foreground`,
        children: (0, Z.jsx)(P, {
          id: `localConversation.moveToLocal.modal.projectPrefix`,
          defaultMessage: `Handing off to {destinationLabel} workspace`,
          description: `Text shown before the project selector in the move-to-local modal`,
          values: { destinationLabel: x },
        }),
      })),
      (t[61] = x),
      (t[62] = W));
  let fe;
  t[63] === ne
    ? (fe = t[64])
    : ((fe =
        ne == null
          ? (0, Z.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-left text-token-description-foreground`,
              children: (0, Z.jsx)(P, {
                id: `localConversation.moveToLocal.modal.projectPlaceholder`,
                defaultMessage: `No local workspace found`,
                description: `Placeholder shown when the move-to-local modal cannot find a local workspace target`,
              }),
            })
          : (0, Z.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-1.5`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `w-full min-w-0 truncate text-left text-token-foreground [direction:rtl]`,
                  children: (0, Z.jsx)(`span`, {
                    className: `block w-full text-left [direction:ltr] [unicode-bidi:plaintext]`,
                    children: ne,
                  }),
                }),
                (0, Z.jsx)(ue, { className: `icon-xs shrink-0 text-token-description-foreground` }),
              ],
            })),
      (t[63] = ne),
      (t[64] = fe));
  let G;
  t[65] !== ie || t[66] !== fe
    ? ((G = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `flex min-w-0 items-center gap-1.5 rounded-lg bg-token-foreground/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground`,
        disabled: ie,
        children: fe,
      })),
      (t[65] = ie),
      (t[66] = fe),
      (t[67] = G))
    : (G = t[67]);
  let pe;
  if (t[68] !== d || t[69] !== p || t[70] !== m) {
    let e;
    (t[72] !== p || t[73] !== m
      ? ((e = (e) => {
          let t = $t({ workspaceRoot: e.workspaceRoot, workspaceRootLabels: m });
          return (0, Z.jsx)(
            X.Item,
            {
              tooltipText: e.workspaceRoot,
              tooltipAlign: `start`,
              subTextAllowWrap: !0,
              SubText: (0, Z.jsx)(`span`, {
                className: `text-xs text-token-description-foreground`,
                children: e.workspaceRoot,
              }),
              onSelect: () => {
                p(e.gitRoot);
              },
              children: (0, Z.jsx)(`span`, { className: `block truncate`, children: t }),
            },
            e.gitRoot,
          );
        }),
        (t[72] = p),
        (t[73] = m),
        (t[74] = e))
      : (e = t[74]),
      (pe = d.map(e)),
      (t[68] = d),
      (t[69] = p),
      (t[70] = m),
      (t[71] = pe));
  } else pe = t[71];
  let K;
  t[75] === pe
    ? (K = t[76])
    : ((K = (0, Z.jsx)(X.Section, {
        className: `flex max-h-40 flex-col overflow-y-auto`,
        children: pe,
      })),
      (t[75] = pe),
      (t[76] = K));
  let q;
  t[77] !== G || t[78] !== K
    ? ((q = (0, Z.jsx)(`div`, {
        children: (0, Z.jsx)(Ue, {
          align: `end`,
          contentMaxHeight: `list`,
          contentWidth: `menuBounded`,
          triggerButton: G,
          children: K,
        }),
      })),
      (t[77] = G),
      (t[78] = K),
      (t[79] = q))
    : (q = t[79]);
  let me;
  t[80] !== W || t[81] !== q
    ? ((me = (0, Z.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]`,
        children: [W, q],
      })),
      (t[80] = W),
      (t[81] = q),
      (t[82] = me))
    : (me = t[82]);
  let he;
  t[83] !== de || t[84] !== me
    ? ((he = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-5`, children: [de, me] })),
      (t[83] = de),
      (t[84] = me),
      (t[85] = he))
    : (he = t[85]);
  let ge;
  t[86] === w
    ? (ge = t[87])
    : ((ge = w
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-token-foreground`,
            children: [
              (0, Z.jsx)(Dt, {
                className: `icon-sm mt-1 shrink-0 text-token-editor-warning-foreground`,
              }),
              (0, Z.jsx)(P, {
                id: `localConversation.threadHandoff.runningWarning`,
                defaultMessage: `This thread is running, so handing it off will interrupt the current response`,
                description: `Warning shown in thread handoff confirmation dialogs when the source thread is still running`,
              }),
            ],
          })
        : null),
      (t[86] = w),
      (t[87] = ge));
  let _e;
  t[88] === h
    ? (_e = t[89])
    : ((_e = h
        ? (0, Z.jsx)(P, {
            id: `localConversation.moveToLocal.modal.loading`,
            defaultMessage: `Checking for ability to hand off…`,
            description: `Button label shown while move-to-local is waiting on required data before it can continue`,
          })
        : (0, Z.jsx)(P, {
            id: `localConversation.moveToLocal.modal.continue`,
            defaultMessage: `Hand off`,
            description: `Primary action in the move-to-local modal`,
          })),
      (t[88] = h),
      (t[89] = _e));
  let ve;
  t[90] !== N || t[91] !== h || t[92] !== _e
    ? ((ve = (0, Z.jsx)(ae, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: N,
        loading: h,
        type: `submit`,
        children: _e,
      })),
      (t[90] = N),
      (t[91] = h),
      (t[92] = _e),
      (t[93] = ve))
    : (ve = t[93]);
  let J;
  t[94] !== g || t[95] !== h
    ? ((J =
        g != null && !h
          ? (0, Z.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground`,
              children: g,
            })
          : null),
      (t[94] = g),
      (t[95] = h),
      (t[96] = J))
    : (J = t[96]);
  let ye;
  t[97] !== ge || t[98] !== ve || t[99] !== J
    ? ((ye = (0, Z.jsx)(it.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Z.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3`,
          children: [ge, ve, J],
        }),
      })),
      (t[97] = ge),
      (t[98] = ve),
      (t[99] = J),
      (t[100] = ye))
    : (ye = t[100]);
  let be;
  t[101] !== he || t[102] !== ye || t[103] !== L
    ? ((be = (0, Z.jsxs)(it.Root, {
        as: `form`,
        className: `gap-5`,
        onSubmit: L,
        children: [ce, he, ye],
      })),
      (t[101] = he),
      (t[102] = ye),
      (t[103] = L),
      (t[104] = be))
    : (be = t[104]);
  let xe;
  return (
    t[105] !== I || t[106] !== n || t[107] !== be
      ? ((xe = (0, Z.jsx)(je, { size: `compact`, open: n, onOpenChange: I, children: be })),
        (t[105] = I),
        (t[106] = n),
        (t[107] = be),
        (t[108] = xe))
      : (xe = t[108]),
    xe
  );
}
function Qt(e) {
  Object.assign(e, ut(e));
}
function $t({ workspaceRoot: e, workspaceRootLabels: t }) {
  let n = le(e);
  return (
    (t[e]?.trim() ?? t[n]?.trim() ?? ``) ||
    e
      .split(/[/\\]+/)
      .filter(Boolean)
      .at(-1) ||
    e
  );
}
function en(e) {
  let t = (0, Q.c)(95),
    {
      open: n,
      onOpenChange: r,
      conversationId: i,
      composerViewState: o,
      conversationTitle: s,
      currentBranch: c,
      cwd: u,
    } = e,
    f = l(d),
    p = re(),
    h = Wt(i),
    _ = a(v, i) ?? !1,
    y = m(a(T, i)),
    [b, x] = (0, Tt.useState)(null),
    [S, C] = (0, Tt.useState)(null),
    [w, E] = (0, Tt.useState)(null),
    { activeOperationId: D } = st(),
    k = lt(i),
    {
      addToWorktreeOperation: ee,
      closeActiveOperation: A,
      removeOperation: M,
      openOperation: N,
      updateOperation: te,
    } = ct(),
    ne = k != null && D === k.id,
    ie = n || ne,
    { data: oe } = et(u, y, `move_to_worktree_dialog`),
    se = F(j.branchPrefix),
    I;
  t[0] === n ? (I = t[1]) : ((I = { enabled: n }), (t[0] = n), (t[1] = I));
  let { data: L, isLoading: R, isFetching: z } = Je(u, y, `move_to_worktree_dialog`, I),
    le;
  t[2] !== i || t[3] !== u
    ? ((le = [`move-thread`, `to-worktree`, `resolve-owned-worktree`, i, u]),
      (t[2] = i),
      (t[3] = u),
      (t[4] = le))
    : (le = t[4]);
  let B;
  t[5] !== i || t[6] !== u || t[7] !== y
    ? ((B = () =>
        g(`git`).request({
          method: `resolve-worktree-for-thread`,
          params: {
            cwd: u,
            conversationId: i,
            hostConfig: y,
            operationSource: `move_to_worktree_dialog`,
          },
        })),
      (t[5] = i),
      (t[6] = u),
      (t[7] = y),
      (t[8] = B))
    : (B = t[8]);
  let V;
  t[9] !== n || t[10] !== le || t[11] !== B
    ? ((V = { queryKey: le, queryFn: B, enabled: n, staleTime: 0 }),
      (t[9] = n),
      (t[10] = le),
      (t[11] = B),
      (t[12] = V))
    : (V = t[12]);
  let { data: H, isLoading: U } = O(V),
    de = L != null && L === c,
    W = oe != null && c === oe,
    fe = de && !W,
    G = R || z,
    pe = n && fe,
    K;
  t[13] === pe ? (K = t[14]) : ((K = { enabled: pe }), (t[13] = pe), (t[14] = K));
  let {
      data: q,
      isLoading: me,
      isFetching: he,
      isError: ge,
      refetch: _e,
    } = ht(u, y, `move_to_worktree_dialog`, K),
    ve = q === void 0 ? [] : q,
    J = n && W,
    ye;
  t[15] === J ? (ye = t[16]) : ((ye = { enabled: J }), (t[15] = J), (t[16] = ye));
  let { data: be } = ht(u, y, `move_to_worktree_dialog`, ye),
    xe = be === void 0 ? [] : be,
    Se = H?.worktreeGitRoot != null && H?.worktreeWorkspaceRoot != null,
    Ce;
  t[17] === c ? (Ce = t[18]) : ((Ce = (e) => !c || e !== c), (t[17] = c), (t[18] = Ce));
  let we = rn({ branches: ve, defaultBranch: oe ?? null }).filter(Ce),
    Te = me || he,
    Ee = at({ branchPrefix: se ?? void 0, conversationTitle: s }),
    De = fe && b && we.includes(b) ? b : fe ? (we[0] ?? null) : null,
    Oe = W ? (w ?? Ee) : c,
    ke = Oe.trim(),
    Ae = ke.length === 0,
    Me = ke.endsWith(`/`),
    Ne = oe != null && ke === oe,
    Pe = W && ke.length > 0 && xe.includes(ke),
    Fe = G || U || (fe && Te),
    Ie = null;
  if (h != null) Ie = h;
  else if (Fe) {
    let e;
    (t[19] === p
      ? (e = t[20])
      : ((e = p.formatMessage({
          id: `localConversation.moveToWorktree.modal.loading`,
          defaultMessage: `Checking for ability to hand off…`,
          description: `Button label shown while move-to-worktree is waiting on required data before it can continue`,
        })),
        (t[19] = p),
        (t[20] = e)),
      (Ie = e));
  } else if (W && Ae) {
    let e;
    (t[21] === p
      ? (e = t[22])
      : ((e = p.formatMessage({
          id: `localConversation.moveToWorktree.modal.worktreeBranchRequired`,
          defaultMessage: `Enter a worktree branch name.`,
          description: `Inline validation message shown above the move-to-worktree CTA when the worktree branch name is empty`,
        })),
        (t[21] = p),
        (t[22] = e)),
      (Ie = e));
  } else if (Me) {
    let e;
    (t[23] === p
      ? (e = t[24])
      : ((e = p.formatMessage({
          id: `localConversation.moveToWorktree.modal.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”.`,
          description: `Validation message shown when the worktree branch name ends with a slash`,
        })),
        (t[23] = p),
        (t[24] = e)),
      (Ie = e));
  } else if (Ne) {
    let e;
    (t[25] === p
      ? (e = t[26])
      : ((e = p.formatMessage({
          id: `localConversation.moveToWorktree.modal.defaultBranchError`,
          defaultMessage: `Worktree branch must be different from the default branch.`,
          description: `Validation message shown when the entered worktree branch equals the default branch`,
        })),
        (t[25] = p),
        (t[26] = e)),
      (Ie = e));
  } else if (Pe) {
    let e;
    (t[27] === p
      ? (e = t[28])
      : ((e = p.formatMessage({
          id: `localConversation.moveToWorktree.modal.branchAlreadyExistsError`,
          defaultMessage: `Branch already exists.`,
          description: `Validation message shown when the entered worktree branch already exists`,
        })),
        (t[27] = p),
        (t[28] = e)),
      (Ie = e));
  } else if (fe && De == null) {
    let e;
    (t[29] !== p || t[30] !== ge
      ? ((e = ge
          ? p.formatMessage({
              id: `localConversation.moveToWorktree.modal.branchesError`,
              defaultMessage: `Unable to load branches`,
              description: `Error shown in the move-to-worktree modal when branch list fails to load`,
            })
          : p.formatMessage({
              id: `localConversation.moveToWorktree.modal.noTargetBranch`,
              defaultMessage: `No other local branches are available`,
              description: `Message shown when no local branch can be selected for checkout before moving to a worktree`,
            })),
        (t[29] = p),
        (t[30] = ge),
        (t[31] = e))
      : (e = t[31]),
      (Ie = e));
  }
  let Le = Ie != null,
    Re;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = () => {
        (x(null), E(null));
      }),
      (t[32] = Re))
    : (Re = t[32]);
  let ze = Re,
    Be;
  t[33] !== A || t[34] !== ne || t[35] !== r || t[36] !== k || t[37] !== M
    ? ((Be = (e) => {
        if (!e && ne) {
          if (k?.status === `success` || k?.status === `error`) {
            (M(k.id), r(!1));
            return;
          }
          if (k?.status === `warning`) {
            (M(k.id), r(!1));
            return;
          }
          (A(), r(!1));
          return;
        }
        (e || ze(), r(e));
      }),
      (t[33] = A),
      (t[34] = ne),
      (t[35] = r),
      (t[36] = k),
      (t[37] = M),
      (t[38] = Be))
    : (Be = t[38]);
  let Ve = Be,
    He = () => {
      if (Pe) {
        f.get(ce).warning(
          p.formatMessage({
            id: `localConversation.moveToWorktree.modal.branchAlreadyExists`,
            defaultMessage: `Branch already exists`,
            description: `Toast shown when moving to worktree with an existing branch name`,
          }),
        );
        return;
      }
      Le ||
        (N(
          ee({
            sourceConversationId: i,
            sourceBranch: c,
            localBranch: De,
            worktreeBranch: ke,
            request: {
              cwd: u,
              defaultBranch: oe ?? null,
              existingWorktreeGitRoot: H?.worktreeGitRoot ?? null,
              existingWorktreeWorkspaceRoot: H?.worktreeWorkspaceRoot ?? null,
              targetHasUncommittedChanges: H?.hasUncommittedChanges ?? !1,
            },
            stepIds: [
              Se ? `reuse-existing-worktree` : `create-new-worktree`,
              `stash-source-changes`,
              `checkout-local-branch`,
              `stash-target-worktree-changes`,
              `checkout-worktree-branch`,
              `apply-changes-to-worktree`,
              `switching-thread`,
            ],
            composerViewState: o,
          }).id,
        ),
        ze());
    };
  if (ne && k != null) {
    let e;
    t[39] !== A || t[40] !== k.id || t[41] !== k.status || t[42] !== M
      ? ((e = () => {
          if (k.status === `success` || k.status === `error`) {
            M(k.id);
            return;
          }
          if (k.status === `warning`) {
            M(k.id);
            return;
          }
          A();
        }),
        (t[39] = A),
        (t[40] = k.id),
        (t[41] = k.status),
        (t[42] = M),
        (t[43] = e))
      : (e = t[43]);
    let n;
    t[44] !== N || t[45] !== k.id || t[46] !== te
      ? ((n = () => {
          (te(k.id, tn), N(k.id));
        }),
        (t[44] = N),
        (t[45] = k.id),
        (t[46] = te),
        (t[47] = n))
      : (n = t[47]);
    let r;
    t[48] !== k || t[49] !== e || t[50] !== n
      ? ((r = (0, Z.jsx)(Mt, { operation: k, onClose: e, onRetry: n })),
        (t[48] = k),
        (t[49] = e),
        (t[50] = n),
        (t[51] = r))
      : (r = t[51]);
    let i;
    return (
      t[52] !== ie || t[53] !== Ve || t[54] !== r
        ? ((i = (0, Z.jsx)(je, { size: `compact`, open: ie, onOpenChange: Ve, children: r })),
          (t[52] = ie),
          (t[53] = Ve),
          (t[54] = r),
          (t[55] = i))
        : (i = t[55]),
      i
    );
  }
  let We = je,
    Ge = it,
    Ke;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, Z.jsx)(it.Header, {
        icon: (0, Z.jsx)(Ot, { className: `icon-base rotate-90 text-token-foreground` }),
      })),
      (t[56] = Ke))
    : (Ke = t[56]);
  let qe;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, Z.jsx)(it.Title, {
        children: (0, Z.jsx)(P, {
          id: `localConversation.moveToWorktree.modal.title`,
          defaultMessage: `Hand off chat to worktree`,
          description: `Title for the move-to-worktree modal`,
        }),
      })),
      (t[57] = qe))
    : (qe = t[57]);
  let Ye = W
      ? (0, Z.jsx)(P, {
          id: `localConversation.moveToWorktree.modal.subtitle.defaultBranch`,
          defaultMessage: `Create and check out a branch in a {worktreeDescription} to continue working in parallel.`,
          description: `Subtitle for the move-to-worktree modal when the source branch is the default branch`,
          values: {
            worktreeDescription: Se
              ? (0, Z.jsx)(P, {
                  id: `localConversation.moveToWorktree.modal.subtitle.defaultBranch.existing`,
                  defaultMessage: `existing worktree`,
                  description: `Noun phrase used in the move-to-worktree subtitle when reusing an existing worktree`,
                })
              : (0, Z.jsx)(P, {
                  id: `localConversation.moveToWorktree.modal.subtitle.defaultBranch.new`,
                  defaultMessage: `new worktree`,
                  description: `Noun phrase used in the move-to-worktree subtitle when creating a new worktree`,
                }),
          },
        })
      : (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`span`, {
              children: (0, Z.jsx)(P, {
                id: `localConversation.moveToWorktree.modal.subtitle.branch.prefix`,
                defaultMessage: `Check out branch `,
                description: `Prefix for the move-to-worktree confirmation sentence before the branch name`,
              }),
            }),
            (0, Z.jsx)(nn, { children: ke }),
            (0, Z.jsx)(`span`, {
              children: (0, Z.jsx)(P, {
                id: `localConversation.moveToWorktree.modal.subtitle.branch.suffix`,
                defaultMessage: ` in a {worktreeDescription} to continue working in parallel.`,
                description: `Suffix for the move-to-worktree confirmation sentence after the branch name`,
                values: {
                  worktreeDescription: Se
                    ? (0, Z.jsx)(P, {
                        id: `localConversation.moveToWorktree.modal.subtitle.branch.existing`,
                        defaultMessage: `existing worktree`,
                        description: `Noun phrase used in the move-to-worktree subtitle when reusing an existing worktree`,
                      })
                    : (0, Z.jsx)(P, {
                        id: `localConversation.moveToWorktree.modal.subtitle.branch.new`,
                        defaultMessage: `new worktree`,
                        description: `Noun phrase used in the move-to-worktree subtitle when creating a new worktree`,
                      }),
                },
              }),
            }),
          ],
        }),
    Xe;
  t[58] === Ye
    ? (Xe = t[59])
    : ((Xe = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          qe,
          (0, Z.jsx)(`p`, {
            className: `text-base leading-6 tracking-[-0.13px] text-token-description-foreground`,
            children: Ye,
          }),
        ],
      })),
      (t[58] = Ye),
      (t[59] = Xe));
  let Ze = fe
      ? (0, Z.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Z.jsx)(P, {
                id: `localConversation.moveToWorktree.modal.localCheckoutLabel`,
                defaultMessage: `Local workspace will switch to`,
                description: `Label for selecting the branch to check out locally when moving to a worktree`,
              }),
            }),
            (0, Z.jsx)(`div`, {
              ref: (e) => {
                if (typeof document > `u`) {
                  C(null);
                  return;
                }
                C(e?.closest(`.codex-dialog`) ?? document.body);
              },
              children: (0, Z.jsx)(Ue, {
                align: `end`,
                contentMaxHeight: `list`,
                contentWidth: `menuBounded`,
                portalContainer: S,
                triggerButton: (0, Z.jsx)(`button`, {
                  type: `button`,
                  className: `flex min-w-0 items-center gap-1.5 rounded-lg bg-token-foreground/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground disabled:opacity-50`,
                  disabled: Te || ge,
                  children: De
                    ? (0, Z.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-1.5`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `w-full min-w-0 truncate text-left text-token-foreground [direction:rtl]`,
                            children: (0, Z.jsx)(`span`, {
                              className: `block w-full text-left [direction:ltr] [unicode-bidi:plaintext]`,
                              children: De,
                            }),
                          }),
                          (0, Z.jsx)(ue, {
                            className: `icon-xs shrink-0 text-token-description-foreground`,
                          }),
                        ],
                      })
                    : (0, Z.jsx)(`span`, {
                        className: `min-w-0 flex-1 truncate text-left text-token-description-foreground`,
                        children: (0, Z.jsx)(P, {
                          id: `localConversation.moveToWorktree.modal.localBranchPlaceholder`,
                          defaultMessage: `Select local checkout branch`,
                          description: `Placeholder shown in the move-to-worktree modal branch selector`,
                        }),
                      }),
                }),
                children: Te
                  ? (0, Z.jsx)(X.Item, {
                      disabled: !0,
                      children: (0, Z.jsx)(P, {
                        id: `localConversation.moveToWorktree.modal.branchesLoading`,
                        defaultMessage: `Loading branches…`,
                        description: `Label shown while loading branches in the move-to-worktree modal`,
                      }),
                    })
                  : ge
                    ? (0, Z.jsxs)(X.Section, {
                        className: `flex flex-col gap-1`,
                        children: [
                          (0, Z.jsx)(X.SectionLabel, {
                            children: (0, Z.jsx)(P, {
                              id: `localConversation.moveToWorktree.modal.branchesError`,
                              defaultMessage: `Unable to load branches`,
                              description: `Error shown in the move-to-worktree modal when branch list fails to load`,
                            }),
                          }),
                          (0, Z.jsx)(X.Item, {
                            onSelect: () => {
                              _e();
                            },
                            children: (0, Z.jsx)(P, {
                              id: `localConversation.moveToWorktree.modal.branchesRetry`,
                              defaultMessage: `Retry`,
                              description: `Retry button for branch loading errors in the move-to-worktree modal`,
                            }),
                          }),
                        ],
                      })
                    : we.length === 0
                      ? (0, Z.jsx)(X.Item, {
                          disabled: !0,
                          children: (0, Z.jsx)(P, {
                            id: `localConversation.moveToWorktree.modal.noTargetBranch`,
                            defaultMessage: `No other local branches are available`,
                            description: `Message shown when no local branch can be selected for checkout before moving to a worktree`,
                          }),
                        })
                      : (0, Z.jsx)(X.Section, {
                          className: `flex max-h-40 flex-col overflow-y-auto`,
                          children: we.map((e) =>
                            (0, Z.jsx)(
                              X.Item,
                              {
                                className: `[direction:rtl] [&_.min-w-0]:text-left`,
                                onSelect: () => {
                                  x(e);
                                },
                                children: (0, Z.jsxs)(`span`, {
                                  className: `flex min-w-0 items-center gap-1.5`,
                                  children: [
                                    (0, Z.jsx)(Y, {
                                      className: `icon-sm shrink-0 text-token-foreground`,
                                    }),
                                    (0, Z.jsx)(`span`, {
                                      className: `[direction:ltr] [unicode-bidi:plaintext]`,
                                      children: e,
                                    }),
                                  ],
                                }),
                              },
                              e,
                            ),
                          ),
                        }),
              }),
            }),
          ],
        })
      : null,
    Qe;
  t[60] !== He || t[61] !== p || t[62] !== W || t[63] !== Oe
    ? ((Qe = W
        ? (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground`,
                children: (0, Z.jsx)(P, {
                  id: `localConversation.moveToWorktree.modal.worktreeBranchLabel`,
                  defaultMessage: `Branch name`,
                  description: `Label for the target worktree branch when moving from the default branch`,
                }),
              }),
              (0, Z.jsx)(`input`, {
                className: `h-12 w-full rounded-2xl border border-token-border/40 bg-transparent px-4 text-base leading-6 tracking-[-0.13px] text-token-foreground outline-none placeholder:text-token-description-foreground`,
                autoFocus: !0,
                value: Oe,
                onChange: (e) => {
                  E(e.target.value);
                },
                onKeyDown: (e) => {
                  e.key === `Enter` && (e.preventDefault(), He());
                },
                placeholder: p.formatMessage({
                  id: `localConversation.moveToWorktree.modal.worktreeBranchPlaceholder`,
                  defaultMessage: `new-branch`,
                  description: `Placeholder for worktree branch name input when moving from the default branch`,
                }),
                "aria-label": p.formatMessage({
                  id: `localConversation.moveToWorktree.modal.worktreeBranchAriaLabel`,
                  defaultMessage: `Worktree branch name`,
                  description: `Aria label for worktree branch name input when moving from the default branch`,
                }),
              }),
            ],
          })
        : null),
      (t[60] = He),
      (t[61] = p),
      (t[62] = W),
      (t[63] = Oe),
      (t[64] = Qe))
    : (Qe = t[64]);
  let $e;
  t[65] !== Xe || t[66] !== Ze || t[67] !== Qe
    ? (($e = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-5`, children: [Xe, Ze, Qe] })),
      (t[65] = Xe),
      (t[66] = Ze),
      (t[67] = Qe),
      (t[68] = $e))
    : ($e = t[68]);
  let tt;
  t[69] === _
    ? (tt = t[70])
    : ((tt = _
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-token-foreground`,
            children: [
              (0, Z.jsx)(Dt, {
                className: `icon-sm mt-1 shrink-0 text-token-editor-warning-foreground`,
              }),
              (0, Z.jsx)(P, {
                id: `localConversation.threadHandoff.runningWarning`,
                defaultMessage: `This thread is running, so handing it off will interrupt the current response`,
                description: `Warning shown in thread handoff confirmation dialogs when the source thread is still running`,
              }),
            ],
          })
        : null),
      (t[69] = _),
      (t[70] = tt));
  let nt;
  t[71] === Fe
    ? (nt = t[72])
    : ((nt = Fe
        ? (0, Z.jsx)(P, {
            id: `localConversation.moveToWorktree.modal.loading`,
            defaultMessage: `Checking for ability to hand off…`,
            description: `Button label shown while move-to-worktree is waiting on required data before it can continue`,
          })
        : (0, Z.jsx)(P, {
            id: `localConversation.moveToWorktree.modal.continue`,
            defaultMessage: `Hand off`,
            description: `Primary action in the move-to-worktree modal`,
          })),
      (t[71] = Fe),
      (t[72] = nt));
  let rt;
  t[73] !== He || t[74] !== Le || t[75] !== Fe || t[76] !== nt
    ? ((rt = (0, Z.jsx)(ae, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: Le,
        loading: Fe,
        onClick: He,
        children: nt,
      })),
      (t[73] = He),
      (t[74] = Le),
      (t[75] = Fe),
      (t[76] = nt),
      (t[77] = rt))
    : (rt = t[77]);
  let ot;
  t[78] !== Ie || t[79] !== Fe
    ? ((ot =
        Ie != null && !Fe
          ? (0, Z.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground`,
              children: Ie,
            })
          : null),
      (t[78] = Ie),
      (t[79] = Fe),
      (t[80] = ot))
    : (ot = t[80]);
  let ut;
  t[81] !== tt || t[82] !== rt || t[83] !== ot
    ? ((ut = (0, Z.jsx)(it.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Z.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3`,
          children: [tt, rt, ot],
        }),
      })),
      (t[81] = tt),
      (t[82] = rt),
      (t[83] = ot),
      (t[84] = ut))
    : (ut = t[84]);
  let dt;
  t[85] !== Ge.Root || t[86] !== Ke || t[87] !== $e || t[88] !== ut
    ? ((dt = (0, Z.jsxs)(Ge.Root, { className: `gap-5`, children: [Ke, $e, ut] })),
      (t[85] = Ge.Root),
      (t[86] = Ke),
      (t[87] = $e),
      (t[88] = ut),
      (t[89] = dt))
    : (dt = t[89]);
  let ft;
  return (
    t[90] !== We || t[91] !== Ve || t[92] !== n || t[93] !== dt
      ? ((ft = (0, Z.jsx)(We, { size: `compact`, open: n, onOpenChange: Ve, children: dt })),
        (t[90] = We),
        (t[91] = Ve),
        (t[92] = n),
        (t[93] = dt),
        (t[94] = ft))
      : (ft = t[94]),
    ft
  );
}
function tn(e) {
  Object.assign(e, ut(e));
}
function nn(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`span`, {
          className: `mx-1 inline-flex max-w-full items-center rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 tracking-[-0.13px] text-token-foreground`,
          children: (0, Z.jsx)(`span`, { className: `truncate`, children: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function rn({ branches: e, defaultBranch: t }) {
  return t == null || !e.includes(t) || e[0] === t ? e : [t, ...e.filter((e) => e !== t)];
}
function an(e) {
  let t = (0, Q.c)(13),
    { selectedEnvironment: n, zeroEnvironments: r, onClick: i } = e,
    a = re();
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(X.Item, {
            RightIcon: pe,
            href: N,
            children: (0, Z.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Z.jsx)(P, {
                id: `composer.mode.remote.setupViaWeb`,
                defaultMessage: `Set up an environment via Codex web`,
                description: `Menu item to set up an environment via Codex web`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = (e) => {
        (e.stopPropagation(), e.preventDefault(), i());
      }),
      (t[1] = i),
      (t[2] = o));
  let s;
  t[3] === a
    ? (s = t[4])
    : ((s = a.formatMessage({
        id: `composer.environmentSelector.tooltip`,
        defaultMessage: `Select a cloud environment`,
        description: `Tooltip content for environment selector`,
      })),
      (t[3] = a),
      (t[4] = s));
  let c;
  t[5] === n?.label
    ? (c = t[6])
    : ((c =
        n?.label ??
        (0, Z.jsx)(P, {
          id: `codex.environmentSelector.noEnvironment`,
          defaultMessage: `No environment`,
          description: `No environment selected message`,
        })),
      (t[5] = n?.label),
      (t[6] = c));
  let l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, Z.jsx)(`span`, { className: `text-token-description-foreground`, children: c })),
      (t[7] = c),
      (t[8] = l));
  let u;
  return (
    t[9] !== o || t[10] !== s || t[11] !== l
      ? ((u = (0, Z.jsx)(X.Item, {
          RightIcon: I,
          className: `pl-7`,
          onClick: o,
          tooltipText: s,
          children: l,
        })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function on(e) {
  let t = (0, Q.c)(44),
    {
      selectedEnvironment: n,
      envQuery: r,
      setEnvQuery: i,
      envListState: a,
      listToShow: o,
      setComposerMode: s,
      setSelectedEnvironment: c,
      setOpen: l,
      onClosePanel: u,
    } = e,
    d = re(),
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = (e) => {
        (e.stopPropagation(), e.preventDefault(), u());
      }),
      (t[0] = u),
      (t[1] = f));
  let p;
  t[2] === d
    ? (p = t[3])
    : ((p = d.formatMessage({
        id: `composer.environmentSelector.goBack`,
        defaultMessage: `Back to composer`,
        description: `Accessible label for closing environment selector`,
      })),
      (t[2] = d),
      (t[3] = p));
  let m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(Se, { className: `icon-xxs` })), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== f || t[6] !== p
    ? ((h = (0, Z.jsx)(ae, {
        color: `ghost`,
        size: `icon`,
        onClick: f,
        "aria-label": p,
        children: m,
      })),
      (t[5] = f),
      (t[6] = p),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === d
    ? (g = t[9])
    : ((g = d.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[8] = d),
      (t[9] = g));
  let _;
  t[10] === i ? (_ = t[11]) : ((_ = (e) => i(e.target.value)), (t[10] = i), (t[11] = _));
  let v;
  t[12] !== r || t[13] !== g || t[14] !== _
    ? ((v = (0, Z.jsx)(X.SearchInput, {
        className: `flex-1`,
        placeholder: g,
        value: r,
        onChange: _,
      })),
      (t[12] = r),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== h || t[17] !== v
    ? ((y = (0, Z.jsxs)(X.Section, {
        className: `my-1 flex w-full items-center gap-1.5 px-[var(--padding-row-x)]`,
        children: [h, v],
      })),
      (t[16] = h),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== a || t[20] !== o || t[21] !== n?.id || t[22] !== s || t[23] !== l || t[24] !== c
    ? ((b =
        a === `list` &&
        o?.map((e) =>
          (0, Z.jsx)(
            X.Item,
            {
              RightIcon: e.id === n?.id ? se : void 0,
              onClick: () => {
                (s(`cloud`), c(e), l(!1));
              },
              children: e.label,
            },
            e.id,
          ),
        )),
      (t[19] = a),
      (t[20] = o),
      (t[21] = n?.id),
      (t[22] = s),
      (t[23] = l),
      (t[24] = c),
      (t[25] = b))
    : (b = t[25]);
  let x;
  t[26] === a
    ? (x = t[27])
    : ((x =
        a === `none-found` &&
        (0, Z.jsx)(X.Message, {
          centered: !0,
          children: (0, Z.jsx)(P, {
            id: `codex.environments.noEnvironmentsFound`,
            defaultMessage: `No environments found`,
            description: `Message shown when no Codex environments were found`,
          }),
        })),
      (t[26] = a),
      (t[27] = x));
  let S;
  t[28] === a
    ? (S = t[29])
    : ((S =
        a === `loading` &&
        (0, Z.jsx)(oe, {
          className: `icon-xxs my-4 ms-2 self-center text-token-description-foreground`,
        })),
      (t[28] = a),
      (t[29] = S));
  let C;
  t[30] !== a || t[31] !== n?.label
    ? ((C =
        a === `error` &&
        (0, Z.jsx)(`div`, {
          className: `w-full rounded-lg py-1.5 text-sm`,
          children: (0, Z.jsxs)(`span`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, Z.jsx)(gt, { className: `icon-xs` }),
              (0, Z.jsx)(`span`, {
                className: `flex-1 truncate`,
                children:
                  n?.label ??
                  (0, Z.jsx)(P, {
                    id: `codex.environmentSelector.noEnvironment`,
                    defaultMessage: `No environment`,
                    description: `No environment selected message`,
                  }),
              }),
              (0, Z.jsx)(I, { className: `icon-xs` }),
            ],
          }),
        })),
      (t[30] = a),
      (t[31] = n?.label),
      (t[32] = C))
    : (C = t[32]);
  let w;
  t[33] !== x || t[34] !== S || t[35] !== C || t[36] !== b
    ? ((w = (0, Z.jsxs)(`div`, {
        className: `flex h-[150px] flex-col overflow-y-auto pb-1`,
        children: [b, x, S, C],
      })),
      (t[33] = x),
      (t[34] = S),
      (t[35] = C),
      (t[36] = b),
      (t[37] = w))
    : (w = t[37]);
  let T;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(X.Separator, {})), (t[38] = T))
    : (T = t[38]);
  let E;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(X.Item, {
        LeftIcon: Ee,
        RightIcon: pe,
        href: `${N}/settings/environments`,
        children: (0, Z.jsx)(P, {
          id: `codex.environments.environmentSettings`,
          defaultMessage: `Environment settings`,
          description: `Codex code environment settings link`,
        }),
      })),
      (t[39] = E))
    : (E = t[39]);
  let D;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsxs)(X.Section, {
        className: `flex flex-col`,
        children: [
          E,
          (0, Z.jsx)(X.Item, {
            LeftIcon: Te,
            RightIcon: pe,
            href: `https://platform.openai.com/docs/codex/overview#environment-configuration`,
            children: (0, Z.jsx)(P, {
              id: `codex.environments.learnMore`,
              defaultMessage: `Learn more`,
              description: `Codex code environment learn more link`,
            }),
          }),
        ],
      })),
      (t[40] = D))
    : (D = t[40]);
  let O;
  return (
    t[41] !== w || t[42] !== y
      ? ((O = (0, Z.jsx)(`div`, {
          className: `flex w-full flex-col`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex w-56 flex-col overflow-hidden`,
            children: [y, w, T, D],
          }),
        })),
        (t[41] = w),
        (t[42] = y),
        (t[43] = O))
      : (O = t[43]),
    O
  );
}
var sn = e(ge(), 1),
  cn = e(f(), 1),
  ln = c(d, () => ({
    queryKey: [`environments`],
    queryFn: async () => V.safeGet(`/wham/environments`),
    placeholderData: r,
    staleTime: D.FIVE_MINUTES,
  })),
  un = c(d, ({ get: e }) => {
    let t = e(q, { params: void 0, source: `workspace_repo_owner_names` }),
      n = _e(t.data?.origins ?? []);
    return {
      queryKey: [
        `workspace`,
        `environments-by-repo`,
        `results`,
        ...(0, sn.default)(n, [`owner`, `repoName`]).flatMap(({ owner: e, repoName: t }) => [e, t]),
      ],
      enabled: t.isSuccess,
      staleTime: D.FIVE_MINUTES,
      queryFn: dn.bind(null, n),
    };
  });
async function dn(e) {
  return (
    await Promise.all(
      e.map(({ owner: e, repoName: t }) =>
        V.safeGet(`/wham/environments/by-repo/{provider}/{repo_owner}/{repo_name}`, {
          parameters: { path: { provider: `github`, repo_owner: e, repo_name: t } },
        }),
      ),
    )
  ).flat();
}
var fn = o(d, ({ get: e }) =>
    (0, cn.default)([...(e(un).data ?? []), ...(e(ln).data ?? [])], (e) => e.id),
  ),
  pn = s(d, ({ envQuery: e, selectedEnvironmentId: t }, { get: n }) => {
    let r = n(ln),
      i = n(un).data ?? [],
      a = new Set(i.map((e) => e.id)),
      o = n(fn),
      s = e.trim().toLowerCase(),
      c = [...(s.length > 0 ? o.filter((e) => e.label?.toLowerCase().includes(s)) : o)].sort(
        (e, n) => {
          if (e.id === t) return -1;
          if (n.id === t) return 1;
          let r = a.has(e.id);
          if (r !== a.has(n.id)) return r ? -1 : 1;
          if (!!e.is_pinned != !!n.is_pinned) return e.is_pinned ? -1 : 1;
          let i = (n.task_count ?? 0) - (e.task_count ?? 0);
          return i === 0 ? (e.label ?? ``).localeCompare(n.label ?? ``) : i;
        },
      );
    return {
      availableEnvironments: o,
      errorLoadingAllEnvironments: r.error,
      isLoadingAllEnvironments: r.isLoading,
      listToShow: c,
    };
  }),
  mn = (0, Tt.memo)(function (e) {
    let t = (0, Q.c)(203),
      {
        composerMode: n,
        setComposerMode: r,
        conversationId: i,
        footerRemoteState: o,
        threadHandoff: s,
        allowWorktree: c,
        disabled: d,
        hideModeDropdown: f,
        worktreeLabelOnly: m,
        side: g,
        modeAdjacentControl: _,
        secondaryControls: v,
        triggerVariant: b,
        onOpenChange: x,
      } = e,
      S = c === void 0 ? !1 : c,
      T = d === void 0 ? !1 : d,
      E = f === void 0 ? !1 : f,
      D = m === void 0 ? !1 : m,
      O = g === void 0 ? `top` : g,
      A = b === void 0 ? `composer` : b,
      j = l(ve),
      [M, N] = (0, Tt.useState)(!1),
      [ne, ie] = (0, Tt.useState)(!1),
      [F, oe] = (0, Tt.useState)(!1),
      se = n === `cloud` || M || ne,
      I = re(),
      ce = B(`505458`),
      R = B(`2256010998`),
      le = lt(i),
      V = R || le?.direction === `to-host-worktree`,
      { access: H } = Ze(),
      U = K(i),
      de = p(),
      W;
    t[0] !== U.cwd || t[1] !== o || t[2] !== de
      ? ((W = In({ executionTargetCwd: U.cwd, footerRemoteState: o, remoteConnections: de })),
        (t[0] = U.cwd),
        (t[1] = o),
        (t[2] = de),
        (t[3] = W))
      : (W = t[3]);
    let fe = W,
      G = fe != null,
      pe;
    t[4] !== U.cwd || t[5] !== U.hostConfig
      ? ((pe = {
          cwd: U.cwd,
          enabled: !0,
          hostConfig: U.hostConfig,
          operationSource: `local_remote_dropdown`,
          watchForGitInit: !1,
        }),
        (t[4] = U.cwd),
        (t[5] = U.hostConfig),
        (t[6] = pe))
      : (pe = t[6]);
    let me = a(w, pe),
      ge;
    t[7] !== U.cwd || t[8] !== U.hostConfig
      ? ((ge = {
          cwd: U.cwd,
          enabled: !0,
          hostConfig: U.hostConfig,
          operationSource: `local_remote_dropdown`,
          watchForGitInit: !1,
        }),
        (t[7] = U.cwd),
        (t[8] = U.hostConfig),
        (t[9] = ge))
      : (ge = t[9]);
    let _e = a(y, ge),
      xe = me?.root != null,
      Y = me?.root ?? null,
      { data: Se } = u(C),
      Ce = V && M && U.hostId !== `local` ? Se?.roots : void 0,
      Te;
    t[10] === Ce ? (Te = t[11]) : ((Te = Ce ?? []), (t[10] = Ce), (t[11] = Te));
    let Ee;
    t[12] === Te
      ? (Ee = t[13])
      : ((Ee = { params: { hostId: h, dirs: Te }, source: `local_remote_dropdown` }),
        (t[12] = Te),
        (t[13] = Ee));
    let { data: De } = a(q, Ee),
      ke;
    t[14] === U.cwd
      ? (ke = t[15])
      : ((ke = U.cwd == null ? [] : [U.cwd]), (t[14] = U.cwd), (t[15] = ke));
    let Ae;
    t[16] !== U.hostId || t[17] !== ke
      ? ((Ae = { params: { hostId: U.hostId, dirs: ke }, source: `local_remote_dropdown` }),
        (t[16] = U.hostId),
        (t[17] = ke),
        (t[18] = Ae))
      : (Ae = t[18]);
    let { data: je } = a(q, Ae),
      Me;
    t[19] !== U.cwd || t[20] !== Y || t[21] !== De?.origins || t[22] !== Ce || t[23] !== je?.origins
      ? ((Me =
          Ce == null
            ? null
            : he({
                sourceWorkspaceRoot: U.cwd,
                sourceGitRoot: Y,
                sourceGitOrigins: je?.origins,
                destinationWorkspaceRoots: Ce,
                destinationGitOrigins: De?.origins,
              })),
        (t[19] = U.cwd),
        (t[20] = Y),
        (t[21] = De?.origins),
        (t[22] = Ce),
        (t[23] = je?.origins),
        (t[24] = Me))
      : (Me = t[24]);
    let Ne = Me,
      Pe = (xe || !1) && H === `enabled`,
      Fe = xe && S && ce,
      [Ie, Le] = ee(J),
      Re = k(ye),
      ze;
    t[25] !== r || t[26] !== Re
      ? ((ze = (e) => {
          (Re(e), r(e));
        }),
        (t[25] = r),
        (t[26] = Re),
        (t[27] = ze))
      : (ze = t[27]);
    let Be = ze,
      Ve;
    t[28] === Ie
      ? (Ve = t[29])
      : ((Ve = Ie
          ? (0, Z.jsx)(P, {
              id: `composer.mode.runInCloudWithEnvironment`,
              defaultMessage: `Cloud · {environment}`,
              description: `Remote mode label when a Codex task will be run in the cloud with a selected environment`,
              values: { environment: Ie.label },
            })
          : (0, Z.jsx)(P, { ...$.selectEnvironment })),
        (t[28] = Ie),
        (t[29] = Ve));
    let He = Ve,
      X;
    t[30] === I
      ? (X = t[31])
      : ((X = I.formatMessage({
          id: `composer.mode.remote`,
          defaultMessage: `Remote`,
          description: `Remote mode label`,
        })),
        (t[30] = I),
        (t[31] = X));
    let Je = X,
      Ye = G ? We : Ke,
      Xe;
    t[32] !== I || t[33] !== G
      ? ((Xe = G ? I.formatMessage($.startInRemote) : I.formatMessage($.workLocally)),
        (t[32] = I),
        (t[33] = G),
        (t[34] = Xe))
      : (Xe = t[34]);
    let et = Xe,
      tt;
    t[35] !== I || t[36] !== G
      ? ((tt = G ? I.formatMessage($.remoteWorktreeTooltip) : I.formatMessage($.worktreeTooltip)),
        (t[35] = I),
        (t[36] = G),
        (t[37] = tt))
      : (tt = t[37]);
    let nt = tt,
      rt;
    t[38] === I
      ? (rt = t[39])
      : ((rt = I.formatMessage({
          id: `composer.mode.localSlashCommand.description`,
          defaultMessage: `Run this chat locally`,
          description: `Description for the local mode slash command`,
        })),
        (t[38] = I),
        (t[39] = rt));
    let it = n !== `local`,
      at;
    t[40] === Be
      ? (at = t[41])
      : ((at = async () => {
          Be(`local`);
        }),
        (t[40] = Be),
        (t[41] = at));
    let st = at,
      ct;
    (t[42] !== Ye || t[43] !== et || t[44] !== rt || t[45] !== it || t[46] !== st
      ? ((ct = {
          id: `local`,
          title: et,
          description: rt,
          requiresEmptyComposer: !1,
          Icon: Ye,
          enabled: it,
          onSelect: st,
        }),
        (t[42] = Ye),
        (t[43] = et),
        (t[44] = rt),
        (t[45] = it),
        (t[46] = st),
        (t[47] = ct))
      : (ct = t[47]),
      $e(ct));
    let ut;
    t[48] !== I || t[49] !== G
      ? ((ut = G ? I.formatMessage($.remoteWorktreeMode) : I.formatMessage($.worktreeMode)),
        (t[48] = I),
        (t[49] = G),
        (t[50] = ut))
      : (ut = t[50]);
    let dt;
    t[51] === I
      ? (dt = t[52])
      : ((dt = I.formatMessage({
          id: `composer.mode.worktreeSlashCommand.description`,
          defaultMessage: `Run this chat in a new worktree`,
          description: `Description for the worktree mode slash command`,
        })),
        (t[51] = I),
        (t[52] = dt));
    let ft = Fe && n !== `worktree`,
      pt;
    t[53] === Be
      ? (pt = t[54])
      : ((pt = async () => {
          Be(`worktree`);
        }),
        (t[53] = Be),
        (t[54] = pt));
    let mt = pt,
      ht;
    (t[55] !== ut || t[56] !== dt || t[57] !== ft || t[58] !== mt
      ? ((ht = {
          id: `worktree`,
          title: ut,
          description: dt,
          requiresEmptyComposer: !1,
          Icon: qe,
          enabled: ft,
          onSelect: mt,
        }),
        (t[55] = ut),
        (t[56] = dt),
        (t[57] = ft),
        (t[58] = mt),
        (t[59] = ht))
      : (ht = t[59]),
      $e(ht));
    let _t;
    t[60] === I ? (_t = t[61]) : ((_t = I.formatMessage($.runInCloud)), (t[60] = I), (t[61] = _t));
    let vt;
    t[62] === I
      ? (vt = t[63])
      : ((vt = I.formatMessage({
          id: `composer.mode.cloudSlashCommand.description`,
          defaultMessage: `Run this chat in the cloud`,
          description: `Description for the cloud mode slash command`,
        })),
        (t[62] = I),
        (t[63] = vt));
    let yt = Pe && n !== `cloud`,
      bt;
    t[64] === Be
      ? (bt = t[65])
      : ((bt = async () => {
          Be(`cloud`);
        }),
        (t[64] = Be),
        (t[65] = bt));
    let xt = bt,
      St;
    (t[66] !== _t || t[67] !== vt || t[68] !== yt || t[69] !== xt
      ? ((St = {
          id: `cloud`,
          title: _t,
          description: vt,
          requiresEmptyComposer: !1,
          Icon: Ge,
          enabled: yt,
          onSelect: xt,
        }),
        (t[66] = _t),
        (t[67] = vt),
        (t[68] = yt),
        (t[69] = xt),
        (t[70] = St))
      : (St = t[70]),
      $e(St));
    let Ct;
    t[71] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ct = (0, Z.jsx)(`span`, {
          className: `inline-flex min-w-0 items-center gap-1`,
          children: (0, Z.jsx)(`span`, {
            className: `truncate`,
            children: (0, Z.jsx)(P, { ...$.worktreeSegment }),
          }),
        })),
        (t[71] = Ct))
      : (Ct = t[71]);
    let wt = Ct,
      Et;
    t[72] === x
      ? (Et = t[73])
      : ((Et = (e) => {
          (e && oe(!1), N(e), x?.(e));
        }),
        (t[72] = x),
        (t[73] = Et));
    let Dt = Et,
      Ot;
    t[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ot = (e) => {
          (e && oe(!1), ie(e));
        }),
        (t[74] = Ot))
      : (Ot = t[74]);
    let kt = Ot,
      At;
    t[75] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((At = () => {
          oe(!0);
        }),
        (t[75] = At))
      : (At = t[75]);
    let jt = At,
      Mt;
    t[76] !== i ||
    t[77] !== U ||
    t[78] !== Y ||
    t[79] !== G ||
    t[80] !== j ||
    t[81] !== V ||
    t[82] !== s
      ? ((Mt = () => {
          i == null ||
            s == null ||
            Oe(j, An, {
              conversationId: i,
              composerViewState: j.get(be),
              executionTarget: U,
              gitRoot: Y,
              isLocalModeRemote: G,
              threadHandoff: s,
              showCrossHostHandoff: V,
            });
        }),
        (t[76] = i),
        (t[77] = U),
        (t[78] = Y),
        (t[79] = G),
        (t[80] = j),
        (t[81] = V),
        (t[82] = s),
        (t[83] = Mt))
      : (Mt = t[83]);
    let Nt = Mt,
      Pt;
    t[84] !== i || t[85] !== j || t[86] !== s
      ? ((Pt = (e) => {
          let {
            currentBranch: t,
            destinationHostId: n,
            destinationWorkspaceRoot: r,
            destinationLabel: a,
          } = e;
          i == null ||
            s == null ||
            Oe(j, jn, {
              conversationId: i,
              composerViewState: j.get(be),
              conversationTitle: s.conversationTitle,
              currentBranch: t,
              cwd: s.cwd,
              destinationHostId: n,
              destinationWorkspaceRoot: te(r),
              destinationLabel: a,
            });
        }),
        (t[84] = i),
        (t[85] = j),
        (t[86] = s),
        (t[87] = Pt))
      : (Pt = t[87]);
    let Ft = Pt,
      It = A === `summary-panel` ? `icon-sm text-token-foreground` : `icon-xs`,
      Lt;
    t[88] !== n || t[89] !== G || t[90] !== It
      ? ((Lt =
          n === `cloud`
            ? (0, Z.jsx)(Ge, { className: It })
            : n === `worktree`
              ? (0, Z.jsx)(qe, { className: It })
              : G
                ? (0, Z.jsx)(We, { className: It })
                : (0, Z.jsx)(Ke, { className: It })),
        (t[88] = n),
        (t[89] = G),
        (t[90] = It),
        (t[91] = Lt))
      : (Lt = t[91]);
    let Rt = Lt,
      zt;
    t[92] !== He || t[93] !== n || t[94] !== G || t[95] !== A
      ? ((zt =
          n === `cloud`
            ? He
            : n === `worktree`
              ? (0, Z.jsx)(`span`, {
                  className: `inline-flex items-center gap-1`,
                  children: G
                    ? (0, Z.jsx)(P, { ...$.remoteWorktreeMode })
                    : (0, Z.jsx)(P, { ...$.worktreeMode }),
                })
              : A === `summary-panel` && !G
                ? (0, Z.jsx)(P, { ...$.localShort })
                : (0, Z.jsx)(Pn, { rateLimit: null, isRemoteHost: G })),
        (t[92] = He),
        (t[93] = n),
        (t[94] = G),
        (t[95] = A),
        (t[96] = zt))
      : (zt = t[96]);
    let Bt = zt,
      Vt;
    t[97] !== T || t[98] !== I || t[99] !== Rt || t[100] !== Bt || t[101] !== A
      ? ((Vt =
          A === `summary-panel`
            ? (0, Z.jsx)(ot, {
                disabled: T,
                icon: (0, Z.jsx)(`span`, { className: `shrink-0`, children: Rt }),
                label: (0, Z.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-1 text-token-foreground`,
                  children: [
                    (0, Z.jsx)(`span`, { className: `min-w-0 truncate`, children: Bt }),
                    T
                      ? null
                      : (0, Z.jsx)(ue, { className: `icon-2xs shrink-0 text-token-text-tertiary` }),
                  ],
                }),
                labelClassName: `flex min-w-0 items-center`,
                title: I.formatMessage($.localRemoteWhereRun),
              })
            : (0, Z.jsxs)(ae, {
                size: `composerSm`,
                color: `ghost`,
                children: [
                  Rt,
                  (0, Z.jsx)(z, { collapse: `xs`, className: `max-w-40 truncate`, children: Bt }),
                  (0, Z.jsx)(ue, { className: `icon-2xs text-token-input-placeholder-foreground` }),
                ],
              })),
        (t[97] = T),
        (t[98] = I),
        (t[99] = Rt),
        (t[100] = Bt),
        (t[101] = A),
        (t[102] = Vt))
      : (Vt = t[102]);
    let Ht = Vt,
      Ut;
    t[103] !== Ye ||
    t[104] !== H ||
    t[105] !== n ||
    t[106] !== i ||
    t[107] !== R ||
    t[108] !== fe ||
    t[109] !== T ||
    t[110] !== F ||
    t[111] !== U ||
    t[112] !== o ||
    t[113] !== Y ||
    t[114] !== Dt ||
    t[115] !== xe ||
    t[116] !== G ||
    t[117] !== Ne ||
    t[118] !== Ht ||
    t[119] !== M ||
    t[120] !== Nt ||
    t[121] !== Ft ||
    t[122] !== Je ||
    t[123] !== Ie ||
    t[124] !== Le ||
    t[125] !== Be ||
    t[126] !== V ||
    t[127] !== Fe ||
    t[128] !== O ||
    t[129] !== s ||
    t[130] !== A ||
    t[131] !== nt
      ? ((Ut = () =>
          (0, Z.jsx)(Ue, {
            side: O,
            disabled: T,
            open: M,
            onOpenChange: Dt,
            triggerButton:
              A === `summary-panel`
                ? Ht
                : (0, Z.jsx)(L, {
                    tooltipContent: (0, Z.jsx)(P, { ...$.localRemoteWhereRun }),
                    children: Ht,
                  }),
            children: (0, Z.jsx)(hn, {
              composerMode: n,
              setComposerMode: Be,
              conversationId: i,
              executionTarget: U,
              footerRemoteState: o,
              threadHandoff: s,
              codexCloudAccess: H,
              isBrowser: !1,
              isLocalModeRemote: G,
              currentLocalModeRemoteState: fe,
              crossHostHandoffEnabled: R,
              showCrossHostHandoff: V,
              localWorkspaceRootForHandoff: Ne,
              localModeIcon: Ye,
              remoteLabel: Je,
              showWorktree: Fe,
              hasGitRepo: xe,
              gitRoot: Y,
              selectedEnvironment: Ie,
              setSelectedEnvironment: Le,
              environmentSelectorOpen: F,
              setEnvironmentSelectorOpen: oe,
              openEnvironmentSelector: jt,
              worktreeTooltipText: nt,
              closeDropdown: () => N(!1),
              openHandoffDialog: Nt,
              openHostWorktreeHandoffDialog: Ft,
            }),
          })),
        (t[103] = Ye),
        (t[104] = H),
        (t[105] = n),
        (t[106] = i),
        (t[107] = R),
        (t[108] = fe),
        (t[109] = T),
        (t[110] = F),
        (t[111] = U),
        (t[112] = o),
        (t[113] = Y),
        (t[114] = Dt),
        (t[115] = xe),
        (t[116] = G),
        (t[117] = Ne),
        (t[118] = Ht),
        (t[119] = M),
        (t[120] = Nt),
        (t[121] = Ft),
        (t[122] = Je),
        (t[123] = Ie),
        (t[124] = Le),
        (t[125] = Be),
        (t[126] = V),
        (t[127] = Fe),
        (t[128] = O),
        (t[129] = s),
        (t[130] = A),
        (t[131] = nt),
        (t[132] = Ut))
      : (Ut = t[132]);
    let Wt = Ut,
      Gt = n === `cloud` && Pe,
      Kt;
    t[133] !== T ||
    t[134] !== ne ||
    t[135] !== F ||
    t[136] !== Ie ||
    t[137] !== r ||
    t[138] !== Le ||
    t[139] !== Be ||
    t[140] !== Gt ||
    t[141] !== O
      ? ((Kt = Gt
          ? (0, Z.jsx)(Ue, {
              contentMaxHeight: `list`,
              side: O,
              open: ne,
              onOpenChange: kt,
              disabled: T,
              triggerButton: (0, Z.jsx)(L, {
                tooltipContent: (0, Z.jsx)(P, {
                  id: `composer.environmentSelector.tooltip`,
                  defaultMessage: `Select a cloud environment`,
                  description: `Tooltip content for environment selector`,
                }),
                children: (0, Z.jsxs)(ae, {
                  className: `whitespace-nowrap`,
                  size: `composerSm`,
                  color: `ghost`,
                  disabled: T,
                  children: [
                    (0, Z.jsx)(gt, { className: `icon-xs` }),
                    (0, Z.jsx)(z, {
                      collapse: `sm`,
                      className: `max-w-40 truncate`,
                      children: Ie
                        ? Ie.label
                        : (0, Z.jsx)(P, {
                            id: `composer.mode.remote.selectEnvironment`,
                            defaultMessage: `Select environment`,
                            description: `Remote mode label when no environment is selected`,
                          }),
                    }),
                    (0, Z.jsx)(ue, {
                      className: `icon-2xs text-token-input-placeholder-foreground`,
                    }),
                  ],
                }),
              }),
              children: (0, Z.jsx)(Cn, {
                environmentSelectorOpen: F,
                setEnvironmentSelectorOpen: oe,
                selectedEnvironment: Ie,
                setComposerMode: r,
                setSelectedEnvironment: Le,
                onSelectEnvironment: (e) => {
                  (Be(`cloud`), Le(e));
                },
                closeDropdown: () => ie(!1),
              }),
            })
          : null),
        (t[133] = T),
        (t[134] = ne),
        (t[135] = F),
        (t[136] = Ie),
        (t[137] = r),
        (t[138] = Le),
        (t[139] = Be),
        (t[140] = Gt),
        (t[141] = O),
        (t[142] = Kt))
      : (Kt = t[142]);
    let qt = Kt,
      Jt = v,
      Yt = Jt != null,
      Xt;
    t[143] !== qt || t[144] !== Yt || t[145] !== Jt
      ? ((Xt =
          qt || Yt
            ? (0, Z.jsxs)(`div`, { className: `flex items-center gap-1`, children: [qt, Jt] })
            : null),
        (t[143] = qt),
        (t[144] = Yt),
        (t[145] = Jt),
        (t[146] = Xt))
      : (Xt = t[146]);
    let Zt = Xt,
      Qt;
    t[147] === U.cwd
      ? (Qt = t[148])
      : ((Qt = U.cwd
          ? (0, Z.jsx)(`span`, { className: `block font-mono text-xs break-all`, children: U.cwd })
          : null),
        (t[147] = U.cwd),
        (t[148] = Qt));
    let $t = Qt,
      en;
    t[149] !== H ||
    t[150] !== i ||
    t[151] !== R ||
    t[152] !== U ||
    t[153] !== Y ||
    t[154] !== Dt ||
    t[155] !== Ne ||
    t[156] !== M ||
    t[157] !== Nt ||
    t[158] !== Ft ||
    t[159] !== Be ||
    t[160] !== V ||
    t[161] !== O ||
    t[162] !== s ||
    t[163] !== A ||
    t[164] !== D ||
    t[165] !== $t
      ? ((en = D
          ? (0, Z.jsx)(kn, {
              open: M,
              onOpenChange: Dt,
              side: O,
              codexCloudAccess: H,
              crossHostHandoffEnabled: R,
              showCrossHostHandoff: V,
              conversationId: i,
              executionTarget: U,
              gitRoot: Y,
              setComposerMode: Be,
              threadHandoff: s,
              worktreeSegmentLabel: wt,
              tooltipContent: $t,
              tooltipMaxWidth: `min(56rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
              triggerVariant: A,
              openHandoffDialog: Nt,
              openHostWorktreeHandoffDialog: Ft,
              localWorkspaceRootForHandoff: Ne,
            })
          : null),
        (t[149] = H),
        (t[150] = i),
        (t[151] = R),
        (t[152] = U),
        (t[153] = Y),
        (t[154] = Dt),
        (t[155] = Ne),
        (t[156] = M),
        (t[157] = Nt),
        (t[158] = Ft),
        (t[159] = Be),
        (t[160] = V),
        (t[161] = O),
        (t[162] = s),
        (t[163] = A),
        (t[164] = D),
        (t[165] = $t),
        (t[166] = en))
      : (en = t[166]);
    let tn = en,
      nn = E || (i == null && !G && !_e && !xe),
      rn;
    t[167] !== Wt || t[168] !== nn || t[169] !== D || t[170] !== tn
      ? ((rn = nn ? null : D ? tn : Wt()),
        (t[167] = Wt),
        (t[168] = nn),
        (t[169] = D),
        (t[170] = tn),
        (t[171] = rn))
      : (rn = t[171]);
    let an = rn,
      on;
    t[172] === se
      ? (on = t[173])
      : ((on = se ? (0, Z.jsx)(Qe, {}) : null), (t[172] = se), (t[173] = on));
    let sn;
    t[174] !== Pe || t[175] !== n || t[176] !== Ie || t[177] !== Le || t[178] !== Be
      ? ((sn =
          Pe && n === `cloud`
            ? (0, Z.jsx)(Tn, {
                selectedEnvironment: Ie,
                setSelectedEnvironment: Le,
                setComposerMode: Be,
              })
            : null),
        (t[174] = Pe),
        (t[175] = n),
        (t[176] = Ie),
        (t[177] = Le),
        (t[178] = Be),
        (t[179] = sn))
      : (sn = t[179]);
    let cn;
    t[180] !== Pe || t[181] !== n || t[182] !== Ie || t[183] !== Le
      ? ((cn =
          Pe && n === `cloud` && Ie == null
            ? (0, Z.jsx)(On, { setSelectedEnvironment: Le })
            : null),
        (t[180] = Pe),
        (t[181] = n),
        (t[182] = Ie),
        (t[183] = Le),
        (t[184] = cn))
      : (cn = t[184]);
    let ln;
    t[185] !== _ || t[186] !== an
      ? ((ln = (0, Z.jsx)(we, {
          extension: !0,
          children: (0, Z.jsxs)(`div`, { className: `flex items-center gap-1`, children: [an, _] }),
        })),
        (t[185] = _),
        (t[186] = an),
        (t[187] = ln))
      : (ln = t[187]);
    let un;
    t[188] !== Zt || t[189] !== _ || t[190] !== an
      ? ((un = (0, Z.jsx)(we, {
          electron: !0,
          children: (0, Z.jsxs)(`div`, {
            className: `relative flex w-full items-center gap-2`,
            children: [an, _, Zt],
          }),
        })),
        (t[188] = Zt),
        (t[189] = _),
        (t[190] = an),
        (t[191] = un))
      : (un = t[191]);
    let dn;
    t[192] !== Zt || t[193] !== _ || t[194] !== an
      ? ((dn = (0, Z.jsx)(we, {
          browser: !0,
          children: (0, Z.jsxs)(`div`, {
            className: `relative flex w-full items-center gap-2`,
            children: [an, _, Zt],
          }),
        })),
        (t[192] = Zt),
        (t[193] = _),
        (t[194] = an),
        (t[195] = dn))
      : (dn = t[195]);
    let fn;
    return (
      t[196] !== on ||
      t[197] !== sn ||
      t[198] !== cn ||
      t[199] !== ln ||
      t[200] !== un ||
      t[201] !== dn
        ? ((fn = (0, Z.jsxs)(Z.Fragment, { children: [on, sn, cn, ln, un, dn] })),
          (t[196] = on),
          (t[197] = sn),
          (t[198] = cn),
          (t[199] = ln),
          (t[200] = un),
          (t[201] = dn),
          (t[202] = fn))
        : (fn = t[202]),
      fn
    );
  });
function hn(e) {
  let t = (0, Q.c)(149),
    {
      composerMode: n,
      setComposerMode: r,
      conversationId: i,
      executionTarget: o,
      footerRemoteState: s,
      threadHandoff: c,
      codexCloudAccess: f,
      isBrowser: p,
      isLocalModeRemote: m,
      currentLocalModeRemoteState: h,
      crossHostHandoffEnabled: g,
      showCrossHostHandoff: _,
      localWorkspaceRootForHandoff: v,
      localModeIcon: y,
      remoteLabel: x,
      showWorktree: C,
      hasGitRepo: w,
      gitRoot: T,
      selectedEnvironment: E,
      setSelectedEnvironment: D,
      environmentSelectorOpen: O,
      setEnvironmentSelectorOpen: k,
      openEnvironmentSelector: ee,
      worktreeTooltipText: A,
      closeDropdown: j,
      openHandoffDialog: te,
      openHostWorktreeHandoffDialog: ne,
    } = e,
    ae = l(d),
    F = re(),
    { activeMode: I } = xe(i),
    L = I?.settings.model ?? null,
    { data: ce } = u(S),
    R = ce === void 0 ? null : ce,
    z = R?.plan_type,
    le;
  t[0] === z ? (le = t[1]) : ((le = Ie(z)?.pricePlan ?? null), (t[0] = z), (t[1] = le));
  let B = le,
    V = R?.rate_limit,
    ue = R?.credits,
    de;
  t[2] !== z || t[3] !== V || t[4] !== ue
    ? ((de = ze(V, ue, z)), (t[2] = z), (t[3] = V), (t[4] = ue), (t[5] = de))
    : (de = t[5]);
  let W = de,
    G,
    K,
    q,
    me;
  if (
    t[6] !== W?.primary?.windowDurationMins ||
    t[7] !== W?.secondary?.windowDurationMins ||
    t[8] !== R ||
    t[9] !== L
  ) {
    let e = Be(R),
      n = Le(R);
    ((K = Ve(e, { activeLimitName: n, selectedModel: L })),
      (G = K.find(_n)?.limitName ?? n ?? null),
      (q = Re(R, { activeLimitName: n, selectedModel: L })),
      (me = K.some(gn) || !!W?.primary?.windowDurationMins || !!W?.secondary?.windowDurationMins),
      (t[6] = W?.primary?.windowDurationMins),
      (t[7] = W?.secondary?.windowDurationMins),
      (t[8] = R),
      (t[9] = L),
      (t[10] = G),
      (t[11] = K),
      (t[12] = q),
      (t[13] = me));
  } else ((G = t[10]), (K = t[11]), (q = t[12]), (me = t[13]));
  let he = me,
    ge = Pe(),
    { data: _e } = fe(),
    ve;
  t[14] !== o.hostConfig || t[15] !== T
    ? ((ve = {
        cwd: T,
        enabled: !0,
        hostConfig: o.hostConfig,
        operationSource: `local_remote_dropdown`,
        refetchOnWindowFocus: !1,
        staleTime: null,
      }),
      (t[14] = o.hostConfig),
      (t[15] = T),
      (t[16] = ve))
    : (ve = t[16]);
  let J = a(Ce, ve),
    ye = J ?? F.formatMessage($.fallbackBranch),
    be = lt(i),
    Y = _ ? xt(be) : be,
    Se = Y?.direction === `to-host-worktree` ? null : Y,
    Te = Y?.status === `queued` || Y?.status === `running`,
    Ee = Y?.direction === `to-host-worktree` && Te,
    Oe = a(b, i),
    { openOperation: ke } = ct(),
    Ae = M(m ? null : o.activeWorkspaceRoot, _e?.codexHome),
    je = J ?? Fn(be, i) ?? (_ ? Oe : null),
    Me = bt({ codexWorktree: Ae, operation: Se, threadHandoff: c }),
    Ne = Ct({
      conversationId: i,
      handoffBranch: je,
      handoffDirection: Me,
      operation: Y,
      threadHandoff: c,
    }),
    Fe = Ee,
    He;
  t[17] !== F || t[18] !== Y?.status
    ? ((He =
        Y?.status === `queued` || Y?.status === `running`
          ? F.formatMessage({
              id: `localConversation.threadHandoff.tooltip.viewProgress`,
              defaultMessage: `View progress`,
              description: `Tooltip shown when a thread handoff is in progress and the button reopens the progress view`,
            })
          : void 0),
      (t[17] = F),
      (t[18] = Y?.status),
      (t[19] = He))
    : (He = t[19]);
  let Ue = He,
    We;
  t[20] === Y
    ? (We = t[21])
    : ((We =
        Y?.status === `queued` || Y?.status === `running`
          ? (0, Z.jsx)(oe, { className: `icon-2xs` })
          : Y?.status === `error`
            ? (0, Z.jsx)(Dt, { className: `icon-2xs text-token-danger` })
            : Y?.hasUnseenTerminalState && Y.status === `warning`
              ? (0, Z.jsx)(Dt, { className: `icon-2xs text-token-editor-warning-foreground` })
              : (0, Z.jsx)(Ot, { className: `icon-2xs rotate-90` })),
      (t[20] = Y),
      (t[21] = We));
  let Ke = We,
    Je;
  t[22] !== Ke || t[23] !== Y?.direction
    ? ((Je =
        Y?.direction === `to-host-worktree`
          ? (0, Z.jsx)(Ot, { className: `icon-2xs rotate-90` })
          : Ke),
      (t[22] = Ke),
      (t[23] = Y?.direction),
      (t[24] = Je))
    : (Je = t[24]);
  let Xe = Je,
    Ze;
  t[25] !== Ee || t[26] !== Ue || t[27] !== F || t[28] !== Se
    ? ((Ze = Ee ? F.formatMessage($.finishCurrentHandoffTooltip) : Se == null ? void 0 : Ue),
      (t[25] = Ee),
      (t[26] = Ue),
      (t[27] = F),
      (t[28] = Se),
      (t[29] = Ze))
    : (Ze = t[29]);
  let Qe = Ze,
    $e = m
      ? F.formatMessage($.workRemotelyTooltipWithoutPath, {
          hostDisplayName: h?.connectionDisplayName ?? x,
        })
      : F.formatMessage($.workLocallyTooltip, { branchName: ye }),
    et;
  t[30] !== j || t[31] !== te || t[32] !== ke || t[33] !== Se
    ? ((et = () => {
        if ((j(), Se != null)) {
          (te(), ke(Se.id));
          return;
        }
        te();
      }),
      (t[30] = j),
      (t[31] = te),
      (t[32] = ke),
      (t[33] = Se),
      (t[34] = et))
    : (et = t[34]);
  let tt = et,
    nt = _ && ((i != null && c != null) || Y?.direction === `to-host-worktree`),
    rt;
  t[35] !== n || t[36] !== o.hostConfig || t[37] !== T
    ? ((rt = (0, Z.jsx)(Mn, { composerMode: n, gitRoot: T, hostConfig: o.hostConfig })),
      (t[35] = n),
      (t[36] = o.hostConfig),
      (t[37] = T),
      (t[38] = rt))
    : (rt = t[38]);
  let it = rt;
  if (O) {
    let e;
    return (
      t[39] !== E || t[40] !== r || t[41] !== k || t[42] !== D
        ? ((e = (0, Z.jsx)(Sn, {
            selectedEnvironment: E,
            setComposerMode: r,
            setSelectedEnvironment: D,
            setEnvironmentSelectorOpen: k,
          })),
          (t[39] = E),
          (t[40] = r),
          (t[41] = k),
          (t[42] = D),
          (t[43] = e))
        : (e = t[43]),
      e
    );
  }
  let at = f === `enabled` ? `min-w-[175px]` : `w-52`,
    ot;
  t[44] === at ? (ot = t[45]) : ((ot = ie(`flex flex-col`, at)), (t[44] = at), (t[45] = ot));
  let st;
  t[46] === s.isAttachedToStartedTask
    ? (st = t[47])
    : ((st = (0, Z.jsx)(X.Title, {
        children: s.isAttachedToStartedTask
          ? (0, Z.jsx)(P, {
              id: `composer.mode.newTask.header`,
              defaultMessage: `Continue in`,
              description: `Header label above agent mode options`,
            })
          : (0, Z.jsx)(P, {
              id: `composer.mode.startTask.header`,
              defaultMessage: `Start in`,
              description: `Header label above agent mode options when starting a new task`,
            }),
      })),
      (t[46] = s.isAttachedToStartedTask),
      (t[47] = st));
  let ut = n === `local` ? se : void 0,
    dt;
  t[48] !== j || t[49] !== n || t[50] !== ae || t[51] !== r
    ? ((dt = () => {
        (n !== `local` && U(ae, H, { mode: `local` }), r(`local`), j());
      }),
      (t[48] = j),
      (t[49] = n),
      (t[50] = ae),
      (t[51] = r),
      (t[52] = dt))
    : (dt = t[52]);
  let ft;
  t[53] !== Te || t[54] !== F || t[55] !== $e
    ? ((ft = Te ? F.formatMessage($.finishCurrentHandoffTooltip) : $e),
      (t[53] = Te),
      (t[54] = F),
      (t[55] = $e),
      (t[56] = ft))
    : (ft = t[56]);
  let pt;
  t[57] === m
    ? (pt = t[58])
    : ((pt = m ? (0, Z.jsx)(P, { ...$.startInRemote }) : (0, Z.jsx)(P, { ...$.workLocally })),
      (t[57] = m),
      (t[58] = pt));
  let mt;
  t[59] !== y || t[60] !== Te || t[61] !== ut || t[62] !== dt || t[63] !== ft || t[64] !== pt
    ? ((mt = (0, Z.jsx)(X.Item, {
        LeftIcon: y,
        RightIcon: ut,
        disabled: Te,
        onClick: dt,
        tooltipText: ft,
        children: pt,
      })),
      (t[59] = y),
      (t[60] = Te),
      (t[61] = ut),
      (t[62] = dt),
      (t[63] = ft),
      (t[64] = pt),
      (t[65] = mt))
    : (mt = t[65]);
  let ht;
  t[66] !== j ||
  t[67] !== n ||
  t[68] !== Te ||
  t[69] !== F ||
  t[70] !== m ||
  t[71] !== ae ||
  t[72] !== r ||
  t[73] !== C ||
  t[74] !== it ||
  t[75] !== A
    ? ((ht =
        C &&
        (0, Z.jsx)(X.Item, {
          LeftIcon: qe,
          RightIcon: n === `worktree` ? se : void 0,
          disabled: Te,
          onClick: () => {
            (n !== `worktree` && U(ae, H, { mode: `worktree` }), r(`worktree`), j());
          },
          tooltipText: Te ? F.formatMessage($.finishCurrentHandoffTooltip) : A,
          children: (0, Z.jsxs)(`span`, {
            className: `inline-flex items-center gap-1`,
            children: [
              m ? (0, Z.jsx)(P, { ...$.remoteWorktreeMode }) : (0, Z.jsx)(P, { ...$.worktreeMode }),
              it,
            ],
          }),
        })),
      (t[66] = j),
      (t[67] = n),
      (t[68] = Te),
      (t[69] = F),
      (t[70] = m),
      (t[71] = ae),
      (t[72] = r),
      (t[73] = C),
      (t[74] = it),
      (t[75] = A),
      (t[76] = ht))
    : (ht = t[76]);
  let gt;
  t[77] !== f ||
  t[78] !== n ||
  t[79] !== Te ||
  t[80] !== w ||
  t[81] !== F ||
  t[82] !== p ||
  t[83] !== ae ||
  t[84] !== r
    ? ((gt =
        w || p
          ? f === `enabled`
            ? (0, Z.jsx)(X.Item, {
                LeftIcon: Ge,
                RightIcon: n === `cloud` ? se : void 0,
                disabled: Te,
                onClick: () => {
                  (n !== `cloud` && U(ae, H, { mode: `cloud` }), r(`cloud`));
                },
                tooltipText: Te
                  ? F.formatMessage($.finishCurrentHandoffTooltip)
                  : F.formatMessage({
                      id: `composer.mode.cloud.tooltip`,
                      defaultMessage: `Work in a cloud environment`,
                      description: `Tooltip content for cloud mode dropdown item`,
                    }),
                children: (0, Z.jsx)(P, { ...$.runInCloud }),
              })
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(X.Item, {
                    LeftIcon: De,
                    RightIcon: pe,
                    href: N,
                    children: (0, Z.jsx)(P, {
                      id: `composer.mode.remote.connectToCloud`,
                      defaultMessage: `Connect Codex web`,
                      description: `Menu item to connect Codex Cloud`,
                    }),
                  }),
                  (0, Z.jsx)(X.Item, {
                    LeftIcon: Et,
                    className: `cursor-not-allowed`,
                    disabled: !0,
                    tooltipText: F.formatMessage({
                      id: `composer.mode.remote.connectToCloudDisabledTooltip`,
                      defaultMessage: `Set up an environment via Codex web to enable sending tasks to the cloud`,
                      description: `Tooltip for disabled send to cloud item when Cloud is not connected`,
                    }),
                    children: (0, Z.jsx)(`span`, {
                      className: `truncate`,
                      children: (0, Z.jsx)(P, {
                        id: `composer.mode.remote.sendToCloud`,
                        defaultMessage: `Send to cloud`,
                        description: `Disabled label when Codex Cloud is not connected`,
                      }),
                    }),
                  }),
                ],
              })
          : null),
      (t[77] = f),
      (t[78] = n),
      (t[79] = Te),
      (t[80] = w),
      (t[81] = F),
      (t[82] = p),
      (t[83] = ae),
      (t[84] = r),
      (t[85] = gt))
    : (gt = t[85]);
  let _t;
  t[86] !== f || t[87] !== ee || t[88] !== E
    ? ((_t = f === `enabled` ? (0, Z.jsx)(vn, { selectedEnvironment: E, onClick: ee }) : null),
      (t[86] = f),
      (t[87] = ee),
      (t[88] = E),
      (t[89] = _t))
    : (_t = t[89]);
  let vt;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, Z.jsx)(`div`, { className: `mx-1 my-1.5 h-[0.5px] bg-token-foreground/10` })),
      (t[90] = vt))
    : (vt = t[90]);
  let yt;
  t[91] !== G ||
  t[92] !== B ||
  t[93] !== K ||
  t[94] !== z ||
  t[95] !== ae ||
  t[96] !== L ||
  t[97] !== he ||
  t[98] !== q ||
  t[99] !== ge
    ? ((yt =
        he &&
        (0, Z.jsx)(Ye, {
          rateLimits: K,
          activeLimitName: G,
          planType: z,
          suppressUpsell: q,
          selectedModel: L,
          onPlanUpgradeClick:
            B == null
              ? void 0
              : (e) => {
                  ge({
                    scope: ae,
                    currentPlan: B,
                    defaultTab: `personal`,
                    source: `composer_runtime_dropdown_rate_limit_summary`,
                  }) && e.preventDefault();
                },
        })),
      (t[91] = G),
      (t[92] = B),
      (t[93] = K),
      (t[94] = z),
      (t[95] = ae),
      (t[96] = L),
      (t[97] = he),
      (t[98] = q),
      (t[99] = ge),
      (t[100] = yt))
    : (yt = t[100]);
  let St;
  t[101] !== _t || t[102] !== yt
    ? ((St = (0, Z.jsxs)(we, { extension: !0, children: [_t, vt, yt] })),
      (t[101] = _t),
      (t[102] = yt),
      (t[103] = St))
    : (St = t[103]);
  let wt;
  t[104] !== G ||
  t[105] !== B ||
  t[106] !== K ||
  t[107] !== z ||
  t[108] !== ae ||
  t[109] !== L ||
  t[110] !== he ||
  t[111] !== q ||
  t[112] !== ge
    ? ((wt =
        he &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`div`, { className: `mx-1 my-1.5 h-[0.5px] bg-token-foreground/10` }),
            (0, Z.jsx)(Ye, {
              rateLimits: K,
              activeLimitName: G,
              planType: z,
              suppressUpsell: q,
              selectedModel: L,
              onPlanUpgradeClick:
                B == null
                  ? void 0
                  : (e) => {
                      ge({
                        scope: ae,
                        currentPlan: B,
                        defaultTab: `personal`,
                        source: `composer_runtime_dropdown_rate_limit_summary`,
                      }) && e.preventDefault();
                    },
            }),
          ],
        })),
      (t[104] = G),
      (t[105] = B),
      (t[106] = K),
      (t[107] = z),
      (t[108] = ae),
      (t[109] = L),
      (t[110] = he),
      (t[111] = q),
      (t[112] = ge),
      (t[113] = wt))
    : (wt = t[113]);
  let Tt;
  t[114] !== g ||
  t[115] !== tt ||
  t[116] !== Me ||
  t[117] !== Ne ||
  t[118] !== m ||
  t[119] !== Fe ||
  t[120] !== Xe ||
  t[121] !== Qe
    ? ((Tt = Ne
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(X.Separator, {}),
              (0, Z.jsxs)(X.Item, {
                disabled: Fe,
                onSelect: tt,
                tooltipText: Qe,
                children: [
                  (0, Z.jsx)(X.ItemIcon, { children: Xe }),
                  (0, Z.jsx)(bn, { useContinueLabel: g, direction: Me, isRemoteHost: m }),
                ],
              }),
            ],
          })
        : null),
      (t[114] = g),
      (t[115] = tt),
      (t[116] = Me),
      (t[117] = Ne),
      (t[118] = m),
      (t[119] = Fe),
      (t[120] = Xe),
      (t[121] = Qe),
      (t[122] = Tt))
    : (Tt = t[122]);
  let kt;
  t[123] !== j ||
  t[124] !== i ||
  t[125] !== g ||
  t[126] !== o.cwd ||
  t[127] !== o.hostId ||
  t[128] !== T ||
  t[129] !== je ||
  t[130] !== Ke ||
  t[131] !== Ne ||
  t[132] !== v ||
  t[133] !== Y ||
  t[134] !== ne ||
  t[135] !== ke ||
  t[136] !== nt ||
  t[137] !== c
    ? ((kt = nt
        ? (0, Z.jsx)(yn, {
            conversationId: i,
            threadHandoff: c,
            menuOperation: Y,
            crossHostHandoffEnabled: g,
            handoffBranch: je,
            handoffIcon: Ke,
            showSeparator: !Ne,
            sourceHostId: o.hostId,
            sourceGitRoot: T,
            sourceWorkspaceRoot: o.cwd,
            localWorkspaceRootForHandoff: v,
            closeDropdown: j,
            openHostWorktreeHandoffDialog: ne,
            openOperation: ke,
          })
        : null),
      (t[123] = j),
      (t[124] = i),
      (t[125] = g),
      (t[126] = o.cwd),
      (t[127] = o.hostId),
      (t[128] = T),
      (t[129] = je),
      (t[130] = Ke),
      (t[131] = Ne),
      (t[132] = v),
      (t[133] = Y),
      (t[134] = ne),
      (t[135] = ke),
      (t[136] = nt),
      (t[137] = c),
      (t[138] = kt))
    : (kt = t[138]);
  let At;
  return (
    t[139] !== ot ||
    t[140] !== st ||
    t[141] !== mt ||
    t[142] !== ht ||
    t[143] !== gt ||
    t[144] !== St ||
    t[145] !== wt ||
    t[146] !== Tt ||
    t[147] !== kt
      ? ((At = (0, Z.jsxs)(`div`, { className: ot, children: [st, mt, ht, gt, St, wt, Tt, kt] })),
        (t[139] = ot),
        (t[140] = st),
        (t[141] = mt),
        (t[142] = ht),
        (t[143] = gt),
        (t[144] = St),
        (t[145] = wt),
        (t[146] = Tt),
        (t[147] = kt),
        (t[148] = At))
      : (At = t[148]),
    At
  );
}
function gn(e) {
  return !!e.snapshot?.primary?.windowDurationMins || !!e.snapshot?.secondary?.windowDurationMins;
}
function _n(e) {
  return e.limitName != null;
}
function vn(e) {
  let t = (0, Q.c)(4),
    { selectedEnvironment: n, onClick: r } = e,
    {
      availableEnvironments: i,
      isLoadingAllEnvironments: a,
      isWorktreeSnapshotsEnabled: o,
    } = Nn(``),
    s = o && !a && i.length === 0,
    c;
  return (
    t[0] !== r || t[1] !== n || t[2] !== s
      ? ((c = (0, Z.jsx)(an, { selectedEnvironment: n, zeroEnvironments: s, onClick: r })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = s),
        (t[3] = c))
      : (c = t[3]),
    c
  );
}
function yn(e) {
  let t = (0, Q.c)(51),
    {
      conversationId: n,
      threadHandoff: r,
      menuOperation: i,
      crossHostHandoffEnabled: o,
      handoffBranch: s,
      handoffIcon: c,
      showSeparator: l,
      sourceHostId: u,
      sourceGitRoot: d,
      sourceWorkspaceRoot: f,
      localWorkspaceRootForHandoff: p,
      closeDropdown: m,
      openHostWorktreeHandoffDialog: g,
      openOperation: _,
    } = e,
    v = re(),
    y;
  t[0] !== d || t[1] !== u || t[2] !== f
    ? ((y = { sourceHostId: u, sourceGitRoot: d, sourceWorkspaceRoot: f }),
      (t[0] = d),
      (t[1] = u),
      (t[2] = f),
      (t[3] = y))
    : (y = t[3]);
  let b = a(me, y),
    x;
  t[4] !== n || t[5] !== o || t[6] !== i || t[7] !== r
    ? ((x = o && St({ conversationId: n, operation: i, threadHandoff: r })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = i),
      (t[7] = r),
      (t[8] = x))
    : (x = t[8]);
  let S = x,
    C;
  t[9] !== v || t[10] !== i
    ? ((C = i == null ? void 0 : v.formatMessage($.finishCurrentHandoffTooltip)),
      (t[9] = v),
      (t[10] = i),
      (t[11] = C))
    : (C = t[11]);
  let w = C,
    T =
      p ??
      (i?.direction === `to-host-worktree` && i.request.destinationHostId === `local`
        ? i.request.destinationWorkspaceRoot
        : null),
    E;
  t[12] !== T || t[13] !== i
    ? ((E =
        T != null && wt({ destinationHostId: `local`, destinationWorkspaceRoot: T, operation: i })),
      (t[12] = T),
      (t[13] = i),
      (t[14] = E))
    : (E = t[14]);
  let D = E,
    O = T != null && !S && !D,
    k;
  t[15] !== S || t[16] !== m || t[17] !== s || t[18] !== i || t[19] !== g || t[20] !== _
    ? ((k = (e) => {
        let { destinationHostId: t, destinationWorkspaceRoot: n, destinationLabel: r } = e;
        if (i != null && wt({ destinationHostId: t, destinationWorkspaceRoot: n, operation: i })) {
          (m(),
            g({
              currentBranch: s ?? ``,
              destinationHostId: t,
              destinationWorkspaceRoot: n,
              destinationLabel: r,
            }),
            _(i.id));
          return;
        }
        S &&
          (m(),
          g({
            currentBranch: s ?? ``,
            destinationHostId: t,
            destinationWorkspaceRoot: n,
            destinationLabel: r,
          }));
      }),
      (t[15] = S),
      (t[16] = m),
      (t[17] = s),
      (t[18] = i),
      (t[19] = g),
      (t[20] = _),
      (t[21] = k))
    : (k = t[21]);
  let ee = k;
  if (i?.direction !== `to-host-worktree` && p == null && b.length === 0) return null;
  let A;
  t[22] === l
    ? (A = t[23])
    : ((A = l ? (0, Z.jsx)(X.Separator, {}) : null), (t[22] = l), (t[23] = A));
  let j;
  t[24] !== w ||
  t[25] !== ee ||
  t[26] !== c ||
  t[27] !== v ||
  t[28] !== D ||
  t[29] !== O ||
  t[30] !== T
    ? ((j =
        T == null
          ? null
          : (0, Z.jsxs)(X.Item, {
              disabled: O,
              onSelect: () => {
                ee({
                  destinationHostId: h,
                  destinationWorkspaceRoot: T,
                  destinationLabel: v.formatMessage($.thisComputerDestinationLabel),
                });
              },
              tooltipText: O ? w : T,
              children: [
                (0, Z.jsx)(X.ItemIcon, {
                  children: D ? c : (0, Z.jsx)(Ke, { className: `icon-2xs` }),
                }),
                (0, Z.jsx)(P, {
                  id: `localConversation.moveToLocalHostWorktree.label`,
                  defaultMessage: `This computer`,
                  description: `Footer dropdown item label for moving a remote conversation into a local worktree`,
                }),
              ],
            })),
      (t[24] = w),
      (t[25] = ee),
      (t[26] = c),
      (t[27] = v),
      (t[28] = D),
      (t[29] = O),
      (t[30] = T),
      (t[31] = j))
    : (j = t[31]);
  let M;
  if (
    t[32] !== S ||
    t[33] !== w ||
    t[34] !== ee ||
    t[35] !== c ||
    t[36] !== v ||
    t[37] !== i ||
    t[38] !== b
  ) {
    let e;
    (t[40] !== S || t[41] !== w || t[42] !== ee || t[43] !== c || t[44] !== v || t[45] !== i
      ? ((e = (e) => {
          if (e.status !== `ready`) {
            let t = i?.direction === `to-host-worktree` && i.request.destinationHostId === e.hostId;
            return (0, Z.jsx)(
              xn,
              {
                hostDisplayName: e.hostDisplayName,
                disabled: !t,
                icon: t
                  ? c
                  : e.status === `loading`
                    ? (0, Z.jsx)(oe, { className: `icon-2xs` })
                    : (0, Z.jsx)(Dt, { className: `icon-2xs text-token-danger` }),
                tooltipText: t
                  ? i.request.destinationWorkspaceRoot
                  : v.formatMessage(
                      e.status === `loading`
                        ? $.checkingRemoteHandoffDestinationTooltip
                        : $.remoteHandoffDestinationLookupFailedTooltip,
                    ),
                onSelect: t
                  ? () => {
                      ee({
                        destinationHostId: i.request.destinationHostId,
                        destinationWorkspaceRoot: i.request.destinationWorkspaceRoot,
                        destinationLabel: e.hostDisplayName,
                      });
                    }
                  : void 0,
              },
              e.hostId,
            );
          }
          let { hostDisplayName: t, project: n } = e,
            r = wt({
              destinationHostId: n.hostId,
              destinationWorkspaceRoot: n.remotePath,
              operation: i,
            }),
            a = !S && !r;
          return (0, Z.jsx)(
            xn,
            {
              hostDisplayName: t,
              disabled: a,
              icon: r ? c : (0, Z.jsx)(We, { className: `icon-2xs` }),
              tooltipText: a ? w : n.remotePath,
              onSelect: () => {
                ee({
                  destinationHostId: n.hostId,
                  destinationWorkspaceRoot: n.remotePath,
                  destinationLabel: t,
                });
              },
            },
            n.id,
          );
        }),
        (t[40] = S),
        (t[41] = w),
        (t[42] = ee),
        (t[43] = c),
        (t[44] = v),
        (t[45] = i),
        (t[46] = e))
      : (e = t[46]),
      (M = b.map(e)),
      (t[32] = S),
      (t[33] = w),
      (t[34] = ee),
      (t[35] = c),
      (t[36] = v),
      (t[37] = i),
      (t[38] = b),
      (t[39] = M));
  } else M = t[39];
  let N;
  return (
    t[47] !== A || t[48] !== j || t[49] !== M
      ? ((N = (0, Z.jsxs)(Z.Fragment, { children: [A, j, M] })),
        (t[47] = A),
        (t[48] = j),
        (t[49] = M),
        (t[50] = N))
      : (N = t[50]),
    N
  );
}
function bn(e) {
  let t = (0, Q.c)(5),
    { useContinueLabel: n, direction: r, isRemoteHost: i } = e;
  if (!n) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e =
            r === `to-local`
              ? (0, Z.jsx)(P, {
                  id: `localConversation.moveToLocal.label`,
                  defaultMessage: `Handoff to branch`,
                  description: `Footer dropdown item label for moving a worktree conversation back to a branch workspace`,
                })
              : (0, Z.jsx)(P, {
                  id: `localConversation.moveToWorktree.label`,
                  defaultMessage: `Handoff to worktree`,
                  description: `Footer dropdown item label for moving a local conversation to a new worktree`,
                })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  if (r === `to-worktree`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(P, {
            id: `localConversation.moveToWorktree.continueLabel`,
            defaultMessage: `Worktree`,
            description: `Footer dropdown item label for moving a checkout conversation to a new same-host worktree`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = i
          ? (0, Z.jsx)(P, {
              id: `localConversation.moveToRemoteCheckout.label`,
              defaultMessage: `Remote checkout`,
              description: `Footer dropdown item label for moving a remote worktree conversation back to the non-worktree checkout on that same remote host`,
            })
          : (0, Z.jsx)(P, {
              id: `localConversation.moveToLocal.continueLabel`,
              defaultMessage: `Local checkout`,
              description: `Footer dropdown item label for moving a local worktree conversation back to the local checkout`,
            })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function xn(e) {
  let t = (0, Q.c)(10),
    { hostDisplayName: n, disabled: r, icon: i, tooltipText: a, onSelect: o } = e,
    s;
  t[0] === i ? (s = t[1]) : ((s = (0, Z.jsx)(X.ItemIcon, { children: i })), (t[0] = i), (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, Z.jsx)(P, {
        id: `localConversation.moveToRemoteHostWorktree.label`,
        defaultMessage: `{host}`,
        description: `Footer dropdown item label for moving a local conversation into a worktree on a configured remote host`,
        values: { host: n },
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  return (
    t[4] !== r || t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== a
      ? ((l = (0, Z.jsxs)(X.Item, { disabled: r, onSelect: o, tooltipText: a, children: [s, c] })),
        (t[4] = r),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c),
        (t[8] = a),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Sn(e) {
  let t = (0, Q.c)(11),
    {
      selectedEnvironment: n,
      setComposerMode: r,
      setSelectedEnvironment: i,
      setEnvironmentSelectorOpen: a,
    } = e,
    [o, s] = (0, Tt.useState)(``),
    { envListState: c, listToShow: l } = Nn(o, n, i),
    u;
  t[0] === a ? (u = t[1]) : ((u = () => a(!1)), (t[0] = a), (t[1] = u));
  let d;
  return (
    t[2] !== c ||
    t[3] !== o ||
    t[4] !== l ||
    t[5] !== n ||
    t[6] !== r ||
    t[7] !== a ||
    t[8] !== i ||
    t[9] !== u
      ? ((d = (0, Z.jsx)(on, {
          selectedEnvironment: n,
          envQuery: o,
          setEnvQuery: s,
          envListState: c,
          listToShow: l,
          setComposerMode: r,
          setSelectedEnvironment: i,
          setOpen: a,
          onClosePanel: u,
        })),
        (t[2] = c),
        (t[3] = o),
        (t[4] = l),
        (t[5] = n),
        (t[6] = r),
        (t[7] = a),
        (t[8] = i),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Cn(e) {
  let t = (0, Q.c)(21),
    {
      environmentSelectorOpen: n,
      setEnvironmentSelectorOpen: r,
      selectedEnvironment: i,
      setComposerMode: a,
      setSelectedEnvironment: o,
      onSelectEnvironment: s,
      closeDropdown: c,
    } = e,
    [l, u] = (0, Tt.useState)(``),
    {
      envListState: d,
      listToShow: f,
      zeroEnvironments: p,
      isLoadingAllEnvironments: m,
    } = Nn(l, i, o);
  if (n) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = () => r(!1)), (t[0] = r), (t[1] = e));
    let n;
    return (
      t[2] !== d ||
      t[3] !== l ||
      t[4] !== f ||
      t[5] !== i ||
      t[6] !== a ||
      t[7] !== r ||
      t[8] !== o ||
      t[9] !== e
        ? ((n = (0, Z.jsx)(on, {
            selectedEnvironment: i,
            envQuery: l,
            setEnvQuery: u,
            envListState: d,
            listToShow: f,
            setComposerMode: a,
            setSelectedEnvironment: o,
            setOpen: r,
            onClosePanel: e,
          })),
          (t[2] = d),
          (t[3] = l),
          (t[4] = f),
          (t[5] = i),
          (t[6] = a),
          (t[7] = r),
          (t[8] = o),
          (t[9] = e),
          (t[10] = n))
        : (n = t[10]),
      n
    );
  }
  let h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(X.Title, {
        children: (0, Z.jsx)(P, {
          id: `composer.environmentSelector.title`,
          defaultMessage: `Select environment`,
          description: `Title for the cloud environment dropdown`,
        }),
      })),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== c ||
    t[13] !== d ||
    t[14] !== l ||
    t[15] !== m ||
    t[16] !== f ||
    t[17] !== s ||
    t[18] !== i ||
    t[19] !== p
      ? ((g = (0, Z.jsxs)(`div`, {
          className: `flex w-64 flex-col`,
          children: [
            h,
            (0, Z.jsx)(wn, {
              envQuery: l,
              setEnvQuery: u,
              envListState: d,
              listToShow: f,
              selectedEnvironment: i,
              zeroEnvironments: p,
              isLoadingAllEnvironments: m,
              onSelectEnvironment: s,
              onClose: c,
            }),
          ],
        })),
        (t[12] = c),
        (t[13] = d),
        (t[14] = l),
        (t[15] = m),
        (t[16] = f),
        (t[17] = s),
        (t[18] = i),
        (t[19] = p),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function wn(e) {
  let t = (0, Q.c)(33),
    {
      envQuery: n,
      setEnvQuery: r,
      envListState: i,
      listToShow: a,
      selectedEnvironment: o,
      zeroEnvironments: s,
      isLoadingAllEnvironments: c,
      onSelectEnvironment: l,
      onClose: u,
    } = e,
    d = re();
  if (s && !c) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(X.Item, {
            RightIcon: pe,
            href: N,
            children: (0, Z.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Z.jsx)(P, {
                id: `composer.mode.remote.setupViaWeb`,
                defaultMessage: `Set up an environment via Codex web`,
                description: `Menu item to set up an environment via Codex web`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let f;
  t[1] === a ? (f = t[2]) : ((f = a ?? []), (t[1] = a), (t[2] = f));
  let p = f,
    m;
  if (i === `loading`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`div`, {
          className: `flex items-center justify-center px-[var(--padding-row-x)] py-3`,
          children: (0, Z.jsx)(oe, { className: `icon-xxs text-token-description-foreground` }),
        })),
        (t[3] = e))
      : (e = t[3]),
      (m = e));
  } else if (i === `error`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(X.Message, {
          compact: !0,
          tone: `error`,
          children: (0, Z.jsx)(P, {
            id: `composer.environmentSelector.error`,
            defaultMessage: `Error loading environments`,
            description: `Error state for the cloud environment dropdown`,
          }),
        })),
        (t[4] = e))
      : (e = t[4]),
      (m = e));
  } else if (i === `none-found` || i === `empty`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(X.Message, {
          compact: !0,
          children: (0, Z.jsx)(P, {
            id: `codex.environments.noEnvironmentsFound`,
            defaultMessage: `No environments found`,
            description: `Message shown when no Codex environments were found`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]),
      (m = e));
  } else {
    let e;
    if (t[6] !== p || t[7] !== u || t[8] !== l || t[9] !== o?.id) {
      let n;
      (t[11] !== u || t[12] !== l || t[13] !== o?.id
        ? ((n = (e) =>
            (0, Z.jsx)(
              X.Item,
              {
                RightIcon: e.id === o?.id ? se : void 0,
                onClick: () => {
                  (l(e), u());
                },
                children: (0, Z.jsx)(`span`, {
                  className: `flex min-w-0 items-center gap-1.5`,
                  children: (0, Z.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: e.label,
                  }),
                }),
              },
              e.id,
            )),
          (t[11] = u),
          (t[12] = l),
          (t[13] = o?.id),
          (t[14] = n))
        : (n = t[14]),
        (e = p.map(n)),
        (t[6] = p),
        (t[7] = u),
        (t[8] = l),
        (t[9] = o?.id),
        (t[10] = e));
    } else e = t[10];
    let n;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Z.jsx)(X.Separator, {})), (t[15] = n))
      : (n = t[15]);
    let r;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(P, {
          id: `composer.environmentSelector.createNew`,
          defaultMessage: `Create new`,
          description: `CTA to create a new Codex environment`,
        })),
        (t[16] = r))
      : (r = t[16]);
    let i;
    t[17] === u
      ? (i = t[18])
      : ((i = (0, Z.jsx)(X.Item, {
          LeftIcon: R,
          href: `${N}/settings/environments`,
          onClick: u,
          children: r,
        })),
        (t[17] = u),
        (t[18] = i));
    let a;
    (t[19] !== e || t[20] !== i
      ? ((a = (0, Z.jsxs)(Z.Fragment, { children: [e, n, i] })),
        (t[19] = e),
        (t[20] = i),
        (t[21] = a))
      : (a = t[21]),
      (m = a));
  }
  let h;
  t[22] === d
    ? (h = t[23])
    : ((h = d.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[22] = d),
      (t[23] = h));
  let g;
  t[24] === r ? (g = t[25]) : ((g = (e) => r(e.target.value)), (t[24] = r), (t[25] = g));
  let _;
  t[26] !== n || t[27] !== h || t[28] !== g
    ? ((_ = (0, Z.jsx)(X.Section, {
        className: `my-1`,
        children: (0, Z.jsx)(X.SearchInput, { placeholder: h, value: n, onChange: g }),
      })),
      (t[26] = n),
      (t[27] = h),
      (t[28] = g),
      (t[29] = _))
    : (_ = t[29]);
  let v;
  return (
    t[30] !== m || t[31] !== _
      ? ((v = (0, Z.jsxs)(`div`, { className: `flex flex-col`, children: [_, m] })),
        (t[30] = m),
        (t[31] = _),
        (t[32] = v))
      : (v = t[32]),
    v
  );
}
function Tn(e) {
  let t = (0, Q.c)(16),
    { selectedEnvironment: n, setSelectedEnvironment: r, setComposerMode: i } = e,
    a = re(),
    o;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((o = function (e) {
        let { onClose: t } = e;
        return (0, Z.jsx)(En, {
          selectedEnvironment: n,
          setSelectedEnvironment: r,
          setComposerMode: i,
          onClose: t,
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] === a
    ? (c = t[5])
    : ((c = a.formatMessage($.cloudEnvironmentTitle)), (t[4] = a), (t[5] = c));
  let l;
  t[6] !== a || t[7] !== n?.label
    ? ((l =
        n?.label ??
        a.formatMessage({
          id: `composer.slashCommands.cloudEnvironment.description`,
          defaultMessage: `Choose the cloud environment`,
          description: `Description for the cloud environment slash command when no environment is selected`,
        })),
      (t[6] = a),
      (t[7] = n?.label),
      (t[8] = l))
    : (l = t[8]);
  let u = n?.id,
    d;
  t[9] === u ? (d = t[10]) : ((d = [u]), (t[9] = u), (t[10] = d));
  let f;
  return (
    t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== d
      ? ((f = {
          id: `cloud-environment`,
          title: c,
          description: l,
          requiresEmptyComposer: !1,
          Icon: gt,
          enabled: !0,
          Content: s,
          dependencies: d,
        }),
        (t[11] = s),
        (t[12] = c),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    $e(f),
    null
  );
}
function En(e) {
  let t = (0, Q.c)(13),
    { selectedEnvironment: n, setSelectedEnvironment: r, setComposerMode: i, onClose: a } = e,
    { listToShow: o } = Nn(Xe(Dn), n, r),
    s;
  if (t[0] !== o || t[1] !== a || t[2] !== n?.id || t[3] !== i || t[4] !== r) {
    let e = o.slice(0, 100),
      c;
    (t[6] !== a || t[7] !== n?.id || t[8] !== i || t[9] !== r
      ? ((c = (e) =>
          (0, Z.jsx)(
            tt,
            {
              value: e.label ?? ``,
              title: e.label ?? ``,
              onSelect: () => {
                (i(`cloud`), r(e), a());
              },
              RightIcon: e.id === n?.id ? se : void 0,
            },
            e.id,
          )),
        (t[6] = a),
        (t[7] = n?.id),
        (t[8] = i),
        (t[9] = r),
        (t[10] = c))
      : (c = t[10]),
      (s = e.map(c)),
      (t[0] = o),
      (t[1] = a),
      (t[2] = n?.id),
      (t[3] = i),
      (t[4] = r),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[11] === s
      ? (c = t[12])
      : ((c = (0, Z.jsx)(Z.Fragment, { children: s })), (t[11] = s), (t[12] = c)),
    c
  );
}
function Dn(e) {
  return e.search;
}
function On(e) {
  let { setSelectedEnvironment: t } = e;
  return (Nn(``, null, t), null);
}
function kn(e) {
  let t = (0, Q.c)(64),
    {
      open: n,
      onOpenChange: r,
      side: i,
      codexCloudAccess: o,
      crossHostHandoffEnabled: s,
      showCrossHostHandoff: c,
      conversationId: l,
      executionTarget: u,
      gitRoot: d,
      setComposerMode: f,
      threadHandoff: p,
      worktreeSegmentLabel: m,
      tooltipContent: g,
      tooltipMaxWidth: _,
      triggerVariant: v,
      openHandoffDialog: y,
      openHostWorktreeHandoffDialog: x,
      localWorkspaceRootForHandoff: S,
    } = e,
    C = re(),
    w;
  t[0] !== u.hostConfig || t[1] !== d
    ? ((w = {
        cwd: d,
        enabled: !0,
        hostConfig: u.hostConfig,
        operationSource: `local_remote_dropdown`,
        refetchOnWindowFocus: !1,
        staleTime: null,
      }),
      (t[0] = u.hostConfig),
      (t[1] = d),
      (t[2] = w))
    : (w = t[2]);
  let T = a(Ce, w),
    E = lt(l),
    D = c ? xt(E) : E,
    O = D?.direction === `to-host-worktree` ? null : D,
    k = D?.status === `queued` || D?.status === `running`,
    ee = D?.direction === `to-host-worktree` && k,
    A = a(b, l),
    { openOperation: j } = ct(),
    M = T ?? Fn(E, l) ?? (c ? A : null),
    N = Ct({
      conversationId: l,
      handoffBranch: M,
      handoffDirection: bt({ codexWorktree: !1, operation: O, threadHandoff: p }),
      operation: D,
      threadHandoff: p,
    }),
    te = ee,
    ne;
  t[3] !== C || t[4] !== D?.status
    ? ((ne =
        D?.status === `queued` || D?.status === `running`
          ? C.formatMessage({
              id: `localConversation.threadHandoff.tooltip.viewProgress`,
              defaultMessage: `View progress`,
              description: `Tooltip shown when a thread handoff is in progress and the button reopens the progress view`,
            })
          : void 0),
      (t[3] = C),
      (t[4] = D?.status),
      (t[5] = ne))
    : (ne = t[5]);
  let F = ne,
    se;
  t[6] === D
    ? (se = t[7])
    : ((se =
        D?.status === `queued` || D?.status === `running`
          ? (0, Z.jsx)(oe, { className: `icon-2xs` })
          : D?.status === `error`
            ? (0, Z.jsx)(Dt, { className: `icon-2xs text-token-danger` })
            : D?.hasUnseenTerminalState && D.status === `warning`
              ? (0, Z.jsx)(Dt, { className: `icon-2xs text-token-editor-warning-foreground` })
              : (0, Z.jsx)(Ot, { className: `icon-2xs rotate-90` })),
      (t[6] = D),
      (t[7] = se));
  let ce = se,
    R;
  t[8] !== ce || t[9] !== D?.direction
    ? ((R =
        D?.direction === `to-host-worktree`
          ? (0, Z.jsx)(Ot, { className: `icon-2xs rotate-90` })
          : ce),
      (t[8] = ce),
      (t[9] = D?.direction),
      (t[10] = R))
    : (R = t[10]);
  let z = R,
    le;
  t[11] !== ee || t[12] !== F || t[13] !== C || t[14] !== O
    ? ((le = ee ? C.formatMessage($.finishCurrentHandoffTooltip) : O == null ? void 0 : F),
      (t[11] = ee),
      (t[12] = F),
      (t[13] = C),
      (t[14] = O),
      (t[15] = le))
    : (le = t[15]);
  let B = le,
    V;
  t[16] !== r || t[17] !== y || t[18] !== j || t[19] !== O
    ? ((V = () => {
        if ((r(!1), O != null)) {
          (y(), j(O.id));
          return;
        }
        y();
      }),
      (t[16] = r),
      (t[17] = y),
      (t[18] = j),
      (t[19] = O),
      (t[20] = V))
    : (V = t[20]);
  let H = V,
    U = c && ((l != null && p != null) || D?.direction === `to-host-worktree`),
    de = N || (U && (D?.direction === `to-host-worktree` || S != null)),
    W;
  t[21] !== u.cwd || t[22] !== N || t[23] !== de || t[24] !== c || t[25] !== v || t[26] !== m
    ? ((W =
        v === `summary-panel`
          ? (0, Z.jsx)(ot, {
              icon: (0, Z.jsx)(qe, { className: `icon-sm shrink-0 text-token-foreground` }),
              label: (0, Z.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1 text-token-foreground`,
                children: [
                  (0, Z.jsx)(`span`, { className: `min-w-0 truncate`, children: m }),
                  N
                    ? (0, Z.jsx)(ue, { className: `icon-2xs shrink-0 text-token-text-tertiary` })
                    : null,
                ],
              }),
              labelClassName: `flex min-w-0 items-center`,
              title: u.cwd ?? void 0,
              trailing:
                c && de ? (0, Z.jsx)(I, { className: `icon-xs text-token-text-tertiary` }) : null,
            })
          : (0, Z.jsxs)(ae, {
              color: `ghostActive`,
              size: `composerSm`,
              children: [
                (0, Z.jsx)(`span`, { className: `truncate`, children: m }),
                de
                  ? (0, Z.jsx)(ue, {
                      className: `icon-2xs text-token-input-placeholder-foreground`,
                    })
                  : null,
              ],
            })),
      (t[21] = u.cwd),
      (t[22] = N),
      (t[23] = de),
      (t[24] = c),
      (t[25] = v),
      (t[26] = m),
      (t[27] = W))
    : (W = t[27]);
  let fe = W,
    G = v === `summary-panel` && `w-full`,
    pe;
  t[28] === G ? (pe = t[29]) : ((pe = ie(G)), (t[28] = G), (t[29] = pe));
  let K;
  t[30] !== o ||
  t[31] !== l ||
  t[32] !== s ||
  t[33] !== u.cwd ||
  t[34] !== u.hostId ||
  t[35] !== d ||
  t[36] !== H ||
  t[37] !== M ||
  t[38] !== ce ||
  t[39] !== k ||
  t[40] !== N ||
  t[41] !== C ||
  t[42] !== S ||
  t[43] !== D ||
  t[44] !== r ||
  t[45] !== n ||
  t[46] !== x ||
  t[47] !== j ||
  t[48] !== te ||
  t[49] !== z ||
  t[50] !== B ||
  t[51] !== f ||
  t[52] !== de ||
  t[53] !== c ||
  t[54] !== i ||
  t[55] !== p ||
  t[56] !== g ||
  t[57] !== _ ||
  t[58] !== fe ||
  t[59] !== v
    ? ((K = de
        ? (0, Z.jsx)(Ue, {
            open: n,
            onOpenChange: r,
            side: i,
            triggerButton:
              v === `summary-panel`
                ? fe
                : (0, Z.jsx)(L, { tooltipContent: g, tooltipMaxWidth: _, children: fe }),
            children: (0, Z.jsxs)(`div`, {
              className: ie(`flex flex-col`, c ? `min-w-[220px]` : `min-w-[180px]`),
              children: [
                c
                  ? (0, Z.jsx)(X.Title, {
                      children: (0, Z.jsx)(P, {
                        id: `composer.mode.newTask.header`,
                        defaultMessage: `Continue in`,
                        description: `Header label above agent mode options`,
                      }),
                    })
                  : null,
                N
                  ? (0, Z.jsxs)(X.Item, {
                      disabled: te,
                      onSelect: H,
                      tooltipText: B,
                      children: [
                        (0, Z.jsx)(X.ItemIcon, { children: z }),
                        (0, Z.jsx)(bn, {
                          useContinueLabel: c,
                          direction: `to-local`,
                          isRemoteHost: u.hostId !== h,
                        }),
                      ],
                    })
                  : null,
                c
                  ? (0, Z.jsx)(yn, {
                      conversationId: l,
                      threadHandoff: p,
                      menuOperation: D,
                      crossHostHandoffEnabled: s,
                      handoffBranch: M,
                      handoffIcon: ce,
                      showSeparator: !1,
                      sourceHostId: u.hostId,
                      sourceGitRoot: d,
                      sourceWorkspaceRoot: u.cwd,
                      localWorkspaceRootForHandoff: S,
                      closeDropdown: () => {
                        r(!1);
                      },
                      openHostWorktreeHandoffDialog: x,
                      openOperation: j,
                    })
                  : null,
                c && o === `enabled`
                  ? (0, Z.jsxs)(X.Item, {
                      disabled: k,
                      onClick: () => {
                        (f(`cloud`), r(!1));
                      },
                      tooltipText: k
                        ? C.formatMessage($.finishCurrentHandoffTooltip)
                        : C.formatMessage({
                            id: `composer.mode.cloud.tooltip`,
                            defaultMessage: `Work in a cloud environment`,
                            description: `Tooltip content for cloud mode dropdown item`,
                          }),
                      children: [
                        (0, Z.jsx)(X.ItemIcon, {
                          children: (0, Z.jsx)(Ge, { className: `icon-2xs` }),
                        }),
                        (0, Z.jsx)(P, { ...$.runInCloud }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : (0, Z.jsx)(L, {
            tooltipContent: g,
            tooltipMaxWidth: _,
            children: (0, Z.jsx)(`span`, {
              className: `inline-flex`,
              children: (0, Z.jsx)(`div`, { className: `pointer-events-none`, children: fe }),
            }),
          })),
      (t[30] = o),
      (t[31] = l),
      (t[32] = s),
      (t[33] = u.cwd),
      (t[34] = u.hostId),
      (t[35] = d),
      (t[36] = H),
      (t[37] = M),
      (t[38] = ce),
      (t[39] = k),
      (t[40] = N),
      (t[41] = C),
      (t[42] = S),
      (t[43] = D),
      (t[44] = r),
      (t[45] = n),
      (t[46] = x),
      (t[47] = j),
      (t[48] = te),
      (t[49] = z),
      (t[50] = B),
      (t[51] = f),
      (t[52] = de),
      (t[53] = c),
      (t[54] = i),
      (t[55] = p),
      (t[56] = g),
      (t[57] = _),
      (t[58] = fe),
      (t[59] = v),
      (t[60] = K))
    : (K = t[60]);
  let q;
  return (
    t[61] !== K || t[62] !== pe
      ? ((q = (0, Z.jsx)(`div`, { className: pe, children: K })),
        (t[61] = K),
        (t[62] = pe),
        (t[63] = q))
      : (q = t[63]),
    q
  );
}
function An(e) {
  let t = (0, Q.c)(19),
    {
      onClose: n,
      conversationId: r,
      composerViewState: i,
      executionTarget: o,
      gitRoot: s,
      threadHandoff: c,
      isLocalModeRemote: l,
      showCrossHostHandoff: u,
    } = e,
    { data: d } = fe(),
    f;
  t[0] !== o.hostConfig || t[1] !== s
    ? ((f = {
        cwd: s,
        enabled: !0,
        hostConfig: o.hostConfig,
        operationSource: `local_remote_dropdown`,
        refetchOnWindowFocus: !1,
        staleTime: null,
      }),
      (t[0] = o.hostConfig),
      (t[1] = s),
      (t[2] = f))
    : (f = t[2]);
  let p = a(Ce, f),
    m = lt(r),
    h = u ? xt(m) : m,
    g = a(b, r),
    _ = bt({
      codexWorktree: M(l ? null : o.activeWorkspaceRoot, d?.codexHome),
      operation: h,
      threadHandoff: c,
    }),
    v;
  t[3] !== r || t[4] !== p || t[5] !== m || t[6] !== u || t[7] !== g
    ? ((v = p ?? Fn(m, r) ?? (u ? g : null)),
      (t[3] = r),
      (t[4] = p),
      (t[5] = m),
      (t[6] = u),
      (t[7] = g),
      (t[8] = v))
    : (v = t[8]);
  let y = v,
    x;
  t[9] === n
    ? (x = t[10])
    : ((x = (e) => {
        e || n();
      }),
      (t[9] = n),
      (t[10] = x));
  let S = x,
    C;
  return (
    t[11] !== i ||
    t[12] !== r ||
    t[13] !== S ||
    t[14] !== y ||
    t[15] !== _ ||
    t[16] !== c.conversationTitle ||
    t[17] !== c.cwd
      ? ((C =
          _ === `to-local`
            ? (0, Z.jsx)(Yt, {
                open: !0,
                onOpenChange: S,
                conversationId: r,
                composerViewState: i,
                conversationTitle: c.conversationTitle,
                currentBranch: y ?? ``,
                cwd: c.cwd,
              })
            : (0, Z.jsx)(en, {
                open: !0,
                onOpenChange: S,
                conversationId: r,
                composerViewState: i,
                conversationTitle: c.conversationTitle,
                currentBranch: y ?? ``,
                cwd: c.cwd,
              })),
        (t[11] = i),
        (t[12] = r),
        (t[13] = S),
        (t[14] = y),
        (t[15] = _),
        (t[16] = c.conversationTitle),
        (t[17] = c.cwd),
        (t[18] = C))
      : (C = t[18]),
    C
  );
}
function jn(e) {
  let t = (0, Q.c)(12),
    {
      onClose: n,
      conversationId: r,
      composerViewState: i,
      conversationTitle: a,
      currentBranch: o,
      cwd: s,
      destinationHostId: c,
      destinationWorkspaceRoot: l,
      destinationLabel: u,
    } = e,
    d;
  t[0] === n
    ? (d = t[1])
    : ((d = (e) => {
        e || n();
      }),
      (t[0] = n),
      (t[1] = d));
  let f = d,
    p;
  return (
    t[2] !== i ||
    t[3] !== r ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== u ||
    t[9] !== l ||
    t[10] !== f
      ? ((p = (0, Z.jsx)(Gt, {
          open: !0,
          onOpenChange: f,
          conversationId: r,
          composerViewState: i,
          conversationTitle: a,
          currentBranch: o,
          cwd: s,
          destinationHostId: c,
          destinationWorkspaceRoot: l,
          destinationLabel: u,
        })),
        (t[2] = i),
        (t[3] = r),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c),
        (t[8] = u),
        (t[9] = l),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function Mn(e) {
  let t = (0, Q.c)(6),
    { composerMode: n, gitRoot: r, hostConfig: i } = e,
    o = n === `worktree`,
    s;
  if (
    (t[0] !== r || t[1] !== i || t[2] !== o
      ? ((s = {
          cwd: r,
          enabled: o,
          hostConfig: i,
          operationSource: `local_remote_dropdown`,
          refetchOnWindowFocus: !1,
          staleTime: D.ONE_MINUTE,
        }),
        (t[0] = r),
        (t[1] = i),
        (t[2] = o),
        (t[3] = s))
      : (s = t[3]),
    !((a(ft, s)?.length ?? 0) > 0) || n !== `worktree`)
  )
    return null;
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(P, { ...$.worktreeSubmoduleWarning })), (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, Z.jsx)(L, {
          tooltipContent: c,
          children: (0, Z.jsx)(`span`, {
            className: `flex items-center`,
            children: (0, Z.jsx)(Dt, {
              className: `icon-2xs text-token-editor-warning-foreground`,
            }),
          }),
        })),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
function Nn(e, t, n) {
  let r = (0, Q.c)(18),
    i = (0, Tt.useDeferredValue)(e),
    o = t?.id,
    s;
  r[0] !== i || r[1] !== o
    ? ((s = { envQuery: i, selectedEnvironmentId: o }), (r[0] = i), (r[1] = o), (r[2] = s))
    : (s = r[2]);
  let {
      availableEnvironments: c,
      errorLoadingAllEnvironments: l,
      isLoadingAllEnvironments: u,
      listToShow: d,
    } = a(pn, s),
    f = B(`1907601843`),
    p;
  r[3] !== c || r[4] !== t
    ? ((p = t == null ? null : (c.find((e) => e.id === t.id) ?? null)),
      (r[3] = c),
      (r[4] = t),
      (r[5] = p))
    : (p = r[5]);
  let m = p,
    h = f && !u && c.length === 0,
    g,
    _;
  (r[6] !== c || r[7] !== m || r[8] !== n
    ? ((g = () => {
        n == null || m != null || n(c[0] ?? null);
      }),
      (_ = [c, m, n]),
      (r[6] = c),
      (r[7] = m),
      (r[8] = n),
      (r[9] = g),
      (r[10] = _))
    : ((g = r[9]), (_ = r[10])),
    (0, Tt.useEffect)(g, _));
  let v = l instanceof E && l.status === 404,
    y = d.length ? `list` : u ? `loading` : l && !v ? `error` : e.length ? `none-found` : `empty`,
    b;
  return (
    r[11] !== c || r[12] !== y || r[13] !== u || r[14] !== f || r[15] !== d || r[16] !== h
      ? ((b = {
          availableEnvironments: c,
          envListState: y,
          isLoadingAllEnvironments: u,
          isWorktreeSnapshotsEnabled: f,
          listToShow: d,
          zeroEnvironments: h,
        }),
        (r[11] = c),
        (r[12] = y),
        (r[13] = u),
        (r[14] = f),
        (r[15] = d),
        (r[16] = h),
        (r[17] = b))
      : (b = r[17]),
    b
  );
}
function Pn(e) {
  let t = (0, Q.c)(9),
    { rateLimit: n, isRemoteHost: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = Fe(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === r
    ? (o = t[3])
    : ((o = r
        ? (0, Z.jsx)(P, {
            id: `composer.mode.remote`,
            defaultMessage: `Remote`,
            description: `Remote mode label`,
          })
        : (0, Z.jsx)(P, {
            id: `composer.mode.local`,
            defaultMessage: `Work locally`,
            description: `Local mode label`,
          })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === a
    ? (s = t[5])
    : ((s =
        a &&
        (0, Z.jsx)(`span`, {
          className: `whitespace-nowrap text-token-input-placeholder-foreground opacity-60`,
          children: (0, Z.jsx)(P, {
            id: `composer.mode.local.ratePercent`,
            defaultMessage: ` {usage}%`,
            description: `Rate limit remaining percent appended to Local when near limit`,
            values: { usage: Math.round(a.remainingPercent) },
          }),
        })),
      (t[4] = a),
      (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, Z.jsxs)(Z.Fragment, { children: [o, s] })), (t[6] = o), (t[7] = s), (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Fn(e, t) {
  return e == null || t == null
    ? null
    : e.sourceConversationId === t
      ? e.sourceBranch
      : e.targetConversationId === t
        ? e.direction === `to-worktree`
          ? (e.worktreeBranch ?? e.sourceBranch)
          : (e.localBranch ?? e.sourceBranch)
        : null;
}
var $ = ne({
  workLocally: {
    id: `composer.mode.workLocally`,
    defaultMessage: `Work locally`,
    description: `Local mode label`,
  },
  startInRemote: {
    id: `composer.mode.startInRemote`,
    defaultMessage: `Remote`,
    description: `Dropdown label for starting a task in a remote project`,
  },
  workLocallyTooltip: {
    id: `composer.mode.workLocally.tooltip`,
    defaultMessage: `Work on {branchName}`,
    description: `Tooltip describing what local mode runs against`,
  },
  workRemotelyTooltipWithoutPath: {
    id: `composer.mode.workRemotely.tooltipWithoutPath`,
    defaultMessage: `Work on {hostDisplayName}`,
    description: `Tooltip describing what where the remote mode is run`,
  },
  fallbackBranch: {
    id: `composer.mode.workLocally.currentBranchFallback`,
    defaultMessage: `your branch`,
    description: `Fallback branch name when current branch cannot be detected`,
  },
  runInCloud: {
    id: `composer.mode.runInCloud`,
    defaultMessage: `Cloud`,
    description: `Remote mode label when a Codex task will be run in the cloud`,
  },
  localShort: {
    id: `composer.mode.local.short`,
    defaultMessage: `Local`,
    description: `Short local mode label`,
  },
  selectEnvironment: {
    id: `composer.mode.remote.selectEnvironment`,
    defaultMessage: `Select environment`,
    description: `Remote mode label when no environment is selected`,
  },
  worktreeMode: {
    id: `composer.mode.worktree`,
    defaultMessage: `New worktree`,
    description: `Worktree mode label`,
  },
  remoteWorktreeMode: {
    id: `composer.mode.remoteWorktree`,
    defaultMessage: `New remote worktree`,
    description: `Worktree mode label when the selected workspace is remote`,
  },
  worktreeTooltip: {
    id: `composer.mode.worktree.tooltip`,
    defaultMessage: `Create a copy of your local project to work in parallel`,
    description: `Tooltip content for worktree mode dropdown item`,
  },
  remoteWorktreeTooltip: {
    id: `composer.mode.remoteWorktree.tooltip`,
    defaultMessage: `Create a copy of your remote project to work in parallel`,
    description: `Tooltip content for worktree mode dropdown item when the selected workspace is remote`,
  },
  worktreeSegment: {
    id: `composer.mode.worktreeSegment`,
    defaultMessage: `Worktree`,
    description: `Worktree mode label for the segmented toggle`,
  },
  localRemoteWhereRun: {
    id: `composer.mode.localRemoteWhereRun`,
    defaultMessage: `Select where to run the task`,
    description: `Tooltip content for local/remote dropdown`,
  },
  worktreeSubmoduleWarning: {
    id: `composer.mode.worktree.submoduleWarning`,
    defaultMessage: `This repo has git submodules. Worktree creation may fail`,
    description: `Warning shown when a repo contains git submodules`,
  },
  cloudEnvironmentTitle: {
    id: `composer.slashCommands.cloudEnvironment.title`,
    defaultMessage: `Cloud environment`,
    description: `Title for a composer slash command that makes Codex run in the cloud with a specific environment.`,
  },
  finishCurrentHandoffTooltip: {
    id: `localConversation.moveThread.disabled.finishCurrentHandoff`,
    defaultMessage: `Finish the current handoff before starting another`,
    description: `Tooltip shown on disabled cross-host handoff destinations while another handoff operation still needs attention`,
  },
  thisComputerDestinationLabel: {
    id: `localConversation.moveThread.destination.thisComputer`,
    defaultMessage: `this computer`,
    description: `Destination label used in cross-host handoff copy when moving a thread back to the local machine`,
  },
  checkingRemoteHandoffDestinationTooltip: {
    id: `localConversation.moveThread.destination.remoteChecking`,
    defaultMessage: `Checking this host for a matching project`,
    description: `Tooltip shown while Codex checks whether a remote host can receive this chat`,
  },
  remoteHandoffDestinationLookupFailedTooltip: {
    id: `localConversation.moveThread.destination.remoteLookupFailed`,
    defaultMessage: `Couldn’t inspect this host for a matching project`,
    description: `Tooltip shown when Codex cannot inspect a remote host to decide whether it can receive this chat`,
  },
});
function In({ executionTargetCwd: e, footerRemoteState: t, remoteConnections: n }) {
  let { existingRemoteThreadState: r, draftNewThreadRemoteSelectionState: i } = t;
  if (t.isAttachedToStartedTask)
    return r.hostId === `local`
      ? null
      : {
          hostId: r.hostId,
          connectionDisplayName: r.connectionDisplayName ?? Ln(n, r.hostId),
          projectPath: r.projectPath ?? e,
        };
  let a = i?.hostId ?? null,
    o = i?.projectPath ?? null;
  return a == null || a === `local` || o == null
    ? null
    : { hostId: a, connectionDisplayName: i?.connectionDisplayName ?? Ln(n, a), projectPath: o };
}
function Ln(e, t) {
  return e.find((e) => e.hostId === t)?.displayName ?? null;
}
export { yt as n, mn as t };
//# sourceMappingURL=local-remote-dropdown.js.map
