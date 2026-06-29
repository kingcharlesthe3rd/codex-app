import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  Wt as a,
  ac as o,
  bl as s,
  dl as c,
  ft as l,
  kl as u,
  oc as d,
  sc as f,
  tc as p,
  ur as m,
  ut as h,
  xl as g,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as _,
  Go as v,
  Ho as y,
  Ia as b,
  Jp as x,
  Ma as S,
  Mn as C,
  Na as w,
  Nl as T,
  Nn as E,
  Pl as D,
  Pn as ee,
  Wo as O,
  Yp as k,
  am as A,
  do as j,
  fo as M,
  fp as N,
  im as P,
  io as F,
  jn as te,
  mp as I,
  nf as L,
  nm as R,
  rm as z,
  ro as B,
  tf as V,
  vn as H,
  yn as U,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Jl as W,
  Kl as ne,
  Wi as re,
  Xi as ie,
  _v as ae,
  aw as oe,
  cw as G,
  ea as se,
  iu as ce,
  iw as le,
  lu as ue,
  na as de,
  nw as fe,
  uw as K,
  vv as pe,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { gt as me, vt as he } from "./app-initial~app-main~automations-page.js";
import {
  h as ge,
  p as _e,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Dn as ve,
  On as ye,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  $t as be,
  Gt as xe,
  Jt as Se,
  Kt as Ce,
  Xt as we,
  Yt as Te,
  en as Ee,
  nn as De,
  qt as Oe,
  rn as ke,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import {
  Sn as Ae,
  xn as je,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  i as Me,
  it as Ne,
  mt as Pe,
  ot as Fe,
  pt as Ie,
  r as Le,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import { Mt as Re, jt as q } from "./app-initial~app-main~onboarding-page.js";
import {
  F as ze,
  P as Be,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  P as Ve,
  T as He,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~pric~dbjkmxsl.js";
import {
  i as Ue,
  r as We,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~remote-conversation-page~plugin-detai~cz5yd1fx.js";
import {
  H as Ge,
  U as Ke,
} from "./app-initial~app-main~onboarding-page~appearance-settings~general-settings.js";
import {
  a as qe,
  i as Je,
  n as Ye,
  r as Xe,
  t as Ze,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~om5emcac.js";
import {
  n as Qe,
  t as $e,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~gus2lfk9.js";
import {
  a as et,
  i as tt,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as nt,
  t as J,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as rt,
  t as Y,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
function it(e, t) {
  let n =
      e.issueCount > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.issueCounts`,
              defaultMessage: `{issueCount, plural, one {# issue} other {# issues}}`,
              description: `Hook load issue count for a project row`,
            },
            { issueCount: e.issueCount },
          )
        : ``,
    r =
      e.needsReview > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.reviewCounts`,
              defaultMessage: `{needsReview, plural, one {# needs review} other {# need review}}`,
              description: `Review-needed hook count for a project row`,
            },
            { needsReview: e.needsReview },
          )
        : ``;
  return (0, at.jsx)(G, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: { issueCount: n, separator: n !== `` && r !== `` ? ` · ` : ``, needsReview: r },
  });
}
var at,
  ot = e(() => {
    (oe(), (at = g()));
  }),
  st,
  ct,
  lt = e(() => {
    (t(u()),
      (st = g()),
      (ct = (e) =>
        (0, st.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 24,
          height: 24,
          fill: `currentColor`,
          viewBox: `0 0 24 24`,
          ...e,
          children: [
            (0, st.jsx)(`path`, {
              d: `M15.344 10.036a1 1 0 1 0-1.688-1.072l-2.474 3.896-.943-1.034a1 1 0 0 0-1.478 1.348l1.826 2a1 1 0 0 0 1.583-.138l3.174-5Z`,
            }),
            (0, st.jsx)(`path`, {
              fillRule: `evenodd`,
              d: `M13.203 1.935a3 3 0 0 0-2.405 0l-6 2.625A3 3 0 0 0 3 7.308V13a9 9 0 1 0 18 0V7.308a3 3 0 0 0-1.797-2.748l-6-2.625Zm-1.604 1.832a1 1 0 0 1 .802 0l6 2.625a1 1 0 0 1 .599.916V13a7 7 0 1 1-14 0V7.308a1 1 0 0 1 .6-.916l6-2.625Z`,
              clipRule: `evenodd`,
            }),
          ],
        })));
  });
function ut(e) {
  let t = (0, ht.c)(26),
    {
      eventName: n,
      hostId: r,
      isRemoteHost: i,
      hooks: a,
      onToggleHookEnabled: o,
      onTrustHook: s,
    } = e,
    c = K(),
    [u, d] = (0, gt.useState)(null),
    f = l(`open-file`),
    p,
    m,
    h;
  if (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== a ||
    t[3] !== r ||
    t[4] !== c ||
    t[5] !== i ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== f
  ) {
    let e = Se(a, n);
    ((h = `border-t border-token-border px-3`), (p = `divide-y-[0.5px] divide-token-border`));
    let l;
    (t[12] !== u ||
    t[13] !== r ||
    t[14] !== c ||
    t[15] !== i ||
    t[16] !== o ||
    t[17] !== s ||
    t[18] !== f
      ? ((l = (e, t) => {
          let n = ke(e),
            a = !i && !e.isManaged,
            l = u === e.key;
          return (0, X.jsxs)(
            `div`,
            {
              className: P(l && `pb-2`),
              children: [
                (0, X.jsxs)(`div`, {
                  className: `-mx-3 flex items-center gap-2 px-3 hover:bg-token-list-hover-background`,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `relative flex min-w-0 flex-1`,
                      children: [
                        (0, X.jsx)(`button`, {
                          type: `button`,
                          "aria-expanded": l,
                          className: P(
                            `flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 pl-7 text-left text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                            a ? `pr-12` : `pr-6`,
                          ),
                          onClick: () => {
                            d(l ? null : e.key);
                          },
                          children: (0, X.jsx)(`span`, {
                            className: `shrink-0 text-token-text-primary`,
                            children: Xe(t, c),
                          }),
                        }),
                        a
                          ? (0, X.jsx)(N, {
                              triggerAsChild: !0,
                              tooltipContent: (0, X.jsx)(G, { ..._t.openConfigFile }),
                              children: (0, X.jsx)(`button`, {
                                type: `button`,
                                "aria-label": c.formatMessage(_t.openConfigFile),
                                className: `absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-token-text-tertiary hover:bg-token-list-hover-background hover:text-token-text-primary focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                                onClick: () => {
                                  L({
                                    cwd: null,
                                    hostId: r,
                                    path: e.sourcePath,
                                    openFile: f.mutate,
                                  });
                                },
                                children: (0, X.jsx)(Be, {
                                  className: `icon-xxs`,
                                  "aria-hidden": !0,
                                }),
                              }),
                            })
                          : null,
                        (0, X.jsx)(R, {
                          "aria-hidden": !0,
                          className: P(
                            `icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-token-text-secondary`,
                            l && `rotate-180`,
                          ),
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-2`,
                      children: [
                        n
                          ? (0, X.jsx)(N, {
                              delayDuration: 0,
                              tooltipContent:
                                e.trustStatus === `modified`
                                  ? (0, X.jsx)(G, {
                                      id: `settings.hooks.event.changedReviewReason`,
                                      defaultMessage: `Hook changed since last trusted`,
                                      description: `Tooltip shown for changed hooks awaiting review`,
                                    })
                                  : (0, X.jsx)(G, {
                                      id: `settings.hooks.event.untrustedReviewReason`,
                                      defaultMessage: `New hook`,
                                      description: `Tooltip shown for hooks awaiting first review`,
                                    }),
                              children: (0, X.jsxs)(x, {
                                color: `outline`,
                                size: `composerSm`,
                                onClick: () => {
                                  s(e);
                                },
                                children: [
                                  (0, X.jsx)(ct, { className: `icon-2xs` }),
                                  (0, X.jsx)(G, {
                                    id: `settings.hooks.event.trust`,
                                    defaultMessage: `Trust`,
                                    description: `Button label to trust a hook`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        e.isManaged
                          ? (0, X.jsx)(N, {
                              delayDuration: 0,
                              tooltipContent: (0, X.jsx)(G, {
                                id: `settings.hooks.event.managedTooltip`,
                                defaultMessage: `Managed hooks are always on`,
                                description: `Tooltip shown for admin-managed hooks`,
                              }),
                              children: (0, X.jsx)(`span`, {
                                className: `inline-flex cursor-not-allowed`,
                                tabIndex: 0,
                                children: (0, X.jsx)(H, {
                                  ariaLabel: Xe(t, c),
                                  checked: !0,
                                  className: `pointer-events-none`,
                                  disabled: !0,
                                  onChange: dt,
                                }),
                              }),
                            })
                          : (0, X.jsx)(N, {
                              delayDuration: 0,
                              tooltipContent: n
                                ? (0, X.jsx)(G, {
                                    id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                    defaultMessage: `Disabled until hook is trusted`,
                                    description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                                  })
                                : null,
                              children: (0, X.jsx)(`span`, {
                                className: n ? `inline-flex cursor-not-allowed` : ``,
                                tabIndex: n ? 0 : void 0,
                                children: (0, X.jsx)(H, {
                                  ariaLabel: Xe(t, c),
                                  checked: e.enabled && !n,
                                  className: n ? `pointer-events-none` : ``,
                                  disabled: n,
                                  onChange: (t) => {
                                    o(e, t);
                                  },
                                }),
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
                l
                  ? (0, X.jsx)(`div`, { className: `pl-7`, children: (0, X.jsx)(ft, { hook: e }) })
                  : null,
              ],
            },
            e.key,
          );
        }),
        (t[12] = u),
        (t[13] = r),
        (t[14] = c),
        (t[15] = i),
        (t[16] = o),
        (t[17] = s),
        (t[18] = f),
        (t[19] = l))
      : (l = t[19]),
      (m = e.map(l)),
      (t[0] = n),
      (t[1] = u),
      (t[2] = a),
      (t[3] = r),
      (t[4] = c),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h));
  } else ((p = t[9]), (m = t[10]), (h = t[11]));
  let g;
  t[20] !== p || t[21] !== m
    ? ((g = (0, X.jsx)(`div`, { className: p, children: m })),
      (t[20] = p),
      (t[21] = m),
      (t[22] = g))
    : (g = t[22]);
  let _;
  return (
    t[23] !== h || t[24] !== g
      ? ((_ = (0, X.jsx)(`div`, { className: h, children: g })),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
function dt() {}
function ft(e) {
  let t = (0, ht.c)(18),
    { hook: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(G, {
        id: `settings.hooks.event.handler`,
        defaultMessage: `Handler`,
        description: `Label for the handler type of a configured hook`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n.handlerType
    ? (i = t[2])
    : ((i = (0, X.jsx)(pt, { label: r, children: (0, X.jsx)(mt, { handlerType: n.handlerType }) })),
      (t[1] = n.handlerType),
      (t[2] = i));
  let a;
  t[3] === n.command
    ? (a = t[4])
    : ((a =
        n.command == null
          ? null
          : (0, X.jsx)(pt, {
              label: (0, X.jsx)(G, {
                id: `settings.hooks.event.command`,
                defaultMessage: `Command`,
                description: `Label for the command executed by a hook`,
              }),
              children: (0, X.jsx)(`code`, {
                className: `block font-mono text-xs break-all whitespace-pre-wrap`,
                children: n.command,
              }),
            })),
      (t[3] = n.command),
      (t[4] = a));
  let o;
  t[5] === n.matcher
    ? (o = t[6])
    : ((o =
        n.matcher == null
          ? null
          : (0, X.jsx)(pt, {
              label: (0, X.jsx)(G, {
                id: `settings.hooks.event.matcher`,
                defaultMessage: `Matcher`,
                description: `Label for the matcher configured for a hook`,
              }),
              children: (0, X.jsx)(`code`, {
                className: `font-mono text-xs break-all`,
                children: n.matcher,
              }),
            })),
      (t[5] = n.matcher),
      (t[6] = o));
  let s;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(G, {
        id: `settings.hooks.event.timeout`,
        defaultMessage: `Timeout`,
        description: `Label for a hook execution timeout`,
      })),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] === n.timeoutSec
    ? (c = t[9])
    : ((c = (0, X.jsx)(pt, {
        label: s,
        children: (0, X.jsx)(fe, {
          value: n.timeoutSec,
          style: `unit`,
          unit: `second`,
          unitDisplay: `narrow`,
        }),
      })),
      (t[8] = n.timeoutSec),
      (t[9] = c));
  let l;
  t[10] === n.statusMessage
    ? (l = t[11])
    : ((l =
        n.statusMessage == null
          ? null
          : (0, X.jsx)(pt, {
              label: (0, X.jsx)(G, {
                id: `settings.hooks.event.statusMessage`,
                defaultMessage: `Status message`,
                description: `Label for the status message configured for a hook`,
              }),
              children: n.statusMessage,
            })),
      (t[10] = n.statusMessage),
      (t[11] = l));
  let u;
  return (
    t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== c || t[16] !== l
      ? ((u = (0, X.jsx)(`div`, {
          className: `mt-2 overflow-hidden rounded-md border border-token-border text-sm`,
          children: (0, X.jsxs)(`dl`, {
            className: `grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3 py-3`,
            children: [i, a, o, c, l],
          }),
        })),
        (t[12] = i),
        (t[13] = a),
        (t[14] = o),
        (t[15] = c),
        (t[16] = l),
        (t[17] = u))
      : (u = t[17]),
    u
  );
}
function pt(e) {
  let t = (0, ht.c)(7),
    { label: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, X.jsx)(`dt`, { className: `text-token-text-secondary`, children: n })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, X.jsx)(`dd`, { className: `min-w-0 text-token-text-primary`, children: r })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, X.jsxs)(X.Fragment, { children: [i, a] })), (t[4] = i), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function mt(e) {
  let t = (0, ht.c)(3),
    { handlerType: n } = e;
  switch (n) {
    case `command`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(G, {
              id: `settings.hooks.event.commandHandler`,
              defaultMessage: `Command`,
              description: `Label for a command hook handler type`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `prompt`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(G, {
              id: `settings.hooks.event.promptHandler`,
              defaultMessage: `Prompt`,
              description: `Label for a prompt hook handler type`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `agent`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(G, {
              id: `settings.hooks.event.agentHandler`,
              defaultMessage: `Agent`,
              description: `Label for an agent hook handler type`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
var ht,
  gt,
  X,
  _t,
  vt = e(() => {
    ((ht = r()),
      A(),
      (gt = t(u(), 1)),
      oe(),
      k(),
      U(),
      I(),
      V(),
      z(),
      ze(),
      lt(),
      h(),
      qe(),
      De(),
      (X = g()),
      (_t = le({
        openConfigFile: {
          id: `settings.hooks.event.openConfigFile`,
          defaultMessage: `Open config file`,
          description: `Button label for opening the config file that defines a hook`,
        },
      })));
  });
function yt(e) {
  let t = (0, Et.c)(28),
    {
      entry: n,
      hostId: r,
      isOpen: i,
      isLoading: a,
      isRemoteHost: o,
      loadError: s,
      title: c,
      titleHref: l,
      titleIcon: u,
      subtitle: d,
      onClose: f,
      onToggleHookEnabled: p,
      onTrustHook: m,
    } = e,
    h;
  t[0] !== c || t[1] !== l || t[2] !== u
    ? ((h =
        c == null
          ? null
          : (0, Z.jsx)(O, {
              asChild: !0,
              children: (0, Z.jsx)(`h2`, {
                className: `flex min-w-0`,
                children:
                  l == null
                    ? (0, Z.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-2`,
                        children: [
                          u == null
                            ? null
                            : (0, Z.jsx)(`span`, {
                                className: `flex shrink-0 items-center justify-center`,
                                children: u,
                              }),
                          (0, Z.jsx)(`span`, { className: `min-w-0`, children: c }),
                        ],
                      })
                    : (0, Z.jsxs)(W, {
                        className: `group -m-1 inline-flex min-w-0 cursor-interaction items-center gap-2 rounded-md p-1 hover:bg-token-list-hover-background focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none active:scale-[0.98]`,
                        to: l,
                        children: [
                          u == null
                            ? null
                            : (0, Z.jsx)(`span`, {
                                className: `flex shrink-0 items-center justify-center`,
                                children: u,
                              }),
                          (0, Z.jsx)(`span`, { className: `min-w-0`, children: c }),
                          (0, Z.jsx)(R, {
                            className: `icon-2xs shrink-0 -rotate-90 opacity-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100`,
                            "aria-hidden": !0,
                          }),
                        ],
                      }),
              }),
            })),
      (t[0] = c),
      (t[1] = l),
      (t[2] = u),
      (t[3] = h))
    : (h = t[3]);
  let g = h,
    v;
  t[4] === f
    ? (v = t[5])
    : ((v = (e) => {
        e || f();
      }),
      (t[4] = f),
      (t[5] = v));
  let b;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { "aria-describedby": void 0 }), (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== g || t[8] !== d
    ? ((x = (0, Z.jsx)(w, {
        children: (0, Z.jsx)(S, { title: g, subtitle: d, subtitleClassName: `break-all` }),
      })),
      (t[7] = g),
      (t[8] = d),
      (t[9] = x))
    : (x = t[9]);
  let C;
  t[10] !== n ||
  t[11] !== r ||
  t[12] !== a ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== s ||
  t[16] !== p ||
  t[17] !== m
    ? ((C = i
        ? a
          ? (0, Z.jsx)(J, {
              children: (0, Z.jsx)(q, {
                label: (0, Z.jsx)(G, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
                control: null,
              }),
            })
          : s == null
            ? (0, Z.jsx)(bt, {
                entry: n,
                hostId: r,
                isRemoteHost: o,
                onToggleHookEnabled: p,
                onTrustHook: m,
              })
            : (0, Z.jsx)(J, {
                children: (0, Z.jsx)(q, {
                  label: (0, Z.jsx)(G, {
                    id: `settings.hooks.loadError.label`,
                    defaultMessage: `Could not load hooks`,
                    description: `Label when hooks settings fails to load hooks`,
                  }),
                  description: s.message,
                  control: null,
                }),
              })
        : null),
      (t[10] = n),
      (t[11] = r),
      (t[12] = a),
      (t[13] = i),
      (t[14] = o),
      (t[15] = s),
      (t[16] = p),
      (t[17] = m),
      (t[18] = C))
    : (C = t[18]);
  let T;
  t[19] === C
    ? (T = t[20])
    : ((T = (0, Z.jsx)(w, {
        className: `vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pr-1 [&>*]:shrink-0`,
        children: C,
      })),
      (t[19] = C),
      (t[20] = T));
  let E;
  t[21] !== x || t[22] !== T
    ? ((E = (0, Z.jsxs)(_, {
        className: `max-h-[calc(100vh-6rem)] min-h-0 gap-4`,
        children: [x, T],
      })),
      (t[21] = x),
      (t[22] = T),
      (t[23] = E))
    : (E = t[23]);
  let D;
  return (
    t[24] !== i || t[25] !== v || t[26] !== E
      ? ((D = (0, Z.jsx)(y, {
          open: i,
          onOpenChange: v,
          contentProps: b,
          size: `xwide`,
          children: E,
        })),
        (t[24] = i),
        (t[25] = v),
        (t[26] = E),
        (t[27] = D))
      : (D = t[27]),
    D
  );
}
function bt(e) {
  let t = (0, Et.c)(23),
    { entry: n, hostId: r, isRemoteHost: i, onToggleHookEnabled: a, onTrustHook: o } = e,
    s = K(),
    [c, l] = (0, Dt.useState)(!1);
  if (n == null) return null;
  let u = n.hooks,
    d,
    f,
    p;
  if (
    t[0] !== n.errors ||
    t[1] !== n.warnings ||
    t[2] !== u ||
    t[3] !== r ||
    t[4] !== s ||
    t[5] !== i ||
    t[6] !== c ||
    t[7] !== a ||
    t[8] !== o
  ) {
    let e = Ce(u).filter(xt),
      m = n.warnings,
      h = n.errors,
      g = Te(u),
      _ = m.length + h.length;
    (t[12] === g
      ? (d = t[13])
      : ((d = g > 0 ? (0, Z.jsx)(St, {}) : null), (t[12] = g), (t[13] = d)),
      t[14] !== h || t[15] !== _ || t[16] !== c || t[17] !== m
        ? ((f =
            _ > 0
              ? (0, Z.jsx)(Ct, {
                  errors: h,
                  expanded: c,
                  issueCount: _,
                  warnings: m,
                  onToggleExpanded: () => {
                    l(!c);
                  },
                })
              : null),
          (t[14] = h),
          (t[15] = _),
          (t[16] = c),
          (t[17] = m),
          (t[18] = f))
        : (f = t[18]),
      (p =
        e.length > 0
          ? (0, Z.jsx)(J, {
              children: e.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, Z.jsx)(q, {
                        icon: (0, Z.jsx)(Ge, { className: `icon-xs` }),
                        label: (0, Z.jsx)(`span`, {
                          className: `font-medium`,
                          children: Ye(e.eventName, s),
                        }),
                        description: Ze(e.eventName, s),
                        control:
                          e.needsReview > 0
                            ? (0, Z.jsx)(Ie, {
                                className: `icon-2xs shrink-0 text-token-editor-warning-foreground`,
                              })
                            : null,
                      }),
                      (0, Z.jsx)(ut, {
                        eventName: e.eventName,
                        hostId: r,
                        isRemoteHost: i,
                        hooks: u,
                        onTrustHook: o,
                        onToggleHookEnabled: a,
                      }),
                    ],
                  },
                  e.eventName,
                ),
              ),
            })
          : null),
      (t[0] = n.errors),
      (t[1] = n.warnings),
      (t[2] = u),
      (t[3] = r),
      (t[4] = s),
      (t[5] = i),
      (t[6] = c),
      (t[7] = a),
      (t[8] = o),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p));
  } else ((d = t[9]), (f = t[10]), (p = t[11]));
  let m;
  return (
    t[19] !== d || t[20] !== f || t[21] !== p
      ? ((m = (0, Z.jsxs)(Z.Fragment, { children: [d, f, p] })),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p),
        (t[22] = m))
      : (m = t[22]),
    m
  );
}
function xt(e) {
  return e.installed > 0;
}
function St() {
  let e = (0, Et.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)($e, {
          Icon: Ie,
          iconClassName: `text-token-editor-warning-foreground`,
          type: `info`,
          content: (0, Z.jsx)(G, {
            id: `settings.hooks.review.summary`,
            defaultMessage: `Hooks can run outside of the sandbox so we ask you to review any recently installed or modified hooks`,
            description: `Banner shown when hooks require trust review`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ct(e) {
  let t = (0, Et.c)(18),
    { errors: n, expanded: r, issueCount: i, warnings: a, onToggleExpanded: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(Ie, { className: `icon-xs shrink-0 text-token-editor-warning-foreground` })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === i
    ? (c = t[2])
    : ((c = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          s,
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm text-token-text-primary`,
            children: (0, Z.jsx)(G, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = c));
  let l = r && `rotate-180`,
    u;
  t[3] === l
    ? (u = t[4])
    : ((u = P(`icon-2xs shrink-0 transition-transform`, l)), (t[3] = l), (t[4] = u));
  let d;
  t[5] === u ? (d = t[6]) : ((d = (0, Z.jsx)(R, { className: u })), (t[5] = u), (t[6] = d));
  let f;
  t[7] !== o || t[8] !== c || t[9] !== d
    ? ((f = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-left`,
        onClick: o,
        children: [c, d],
      })),
      (t[7] = o),
      (t[8] = c),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((p = r
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2 border-t border-token-editor-warning-foreground/20 px-3 py-2 text-sm text-token-text-secondary`,
            children: [a.map(Tt), n.map(wt)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== f || t[16] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `bg-token-editor-warning-background/30 overflow-hidden rounded-lg border border-token-editor-warning-foreground/30`,
          children: [f, p],
        })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
function wt(e) {
  return (0, Z.jsx)(
    `div`,
    {
      children: (0, Z.jsx)(G, {
        id: `settings.hooks.issues.error`,
        defaultMessage: `{path}: {message}`,
        description: `Expanded hook error detail`,
        values: { path: e.path, message: e.message },
      }),
    },
    `${e.path}:${e.message}`,
  );
}
function Tt(e) {
  return (0, Z.jsx)(`div`, { children: e }, e);
}
var Et,
  Dt,
  Z,
  Ot = e(() => {
    ((Et = r()),
      A(),
      (Dt = t(u(), 1)),
      oe(),
      ne(),
      Qe(),
      v(),
      b(),
      z(),
      Ke(),
      Pe(),
      Re(),
      nt(),
      qe(),
      vt(),
      De(),
      (Z = g()));
  });
function kt(e) {
  let t = (0, Q.c)(62),
    {
      entries: n,
      hostId: r,
      isRemoteHost: i,
      isLoadingProjectRoots: a,
      loadError: o,
      isLoading: s,
      isRefreshing: c,
      projectRootLabels: l,
      projectRoots: u,
      selectedSourceSection: d,
      onSelectSourceSection: f,
      onRefreshHooks: p,
      onToggleHookEnabled: h,
      onTrustHook: g,
    } = e,
    _ = K(),
    v;
  t[0] === _
    ? (v = t[1])
    : ((v = _.formatMessage({
        id: `settings.hooks.refresh`,
        defaultMessage: `Reload hooks`,
        description: `Button label to reload hooks for the visible projects`,
      })),
      (t[0] = _),
      (t[1] = v));
  let y = v,
    b,
    S,
    C,
    w,
    T,
    E,
    D;
  if (t[2] !== n || t[3] !== s || t[4] !== l || t[5] !== d) {
    ((E = n == null || s ? [] : Oe(n)), (b = []), (S = []), (C = null), (w = null));
    for (let e of E)
      bb0: switch (e.id) {
        case `plugin`:
          C = e;
          break bb0;
        case `project`:
          w = e;
          break bb0;
        case `user`:
        case `admin`:
          b.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          S.push(e);
      }
    ((T = Ee(E, d)),
      (D = Wt({ entry: T, projectRootLabels: l, selection: d })),
      (t[2] = n),
      (t[3] = s),
      (t[4] = l),
      (t[5] = d),
      (t[6] = b),
      (t[7] = S),
      (t[8] = C),
      (t[9] = w),
      (t[10] = T),
      (t[11] = E),
      (t[12] = D));
  } else ((b = t[6]), (S = t[7]), (C = t[8]), (w = t[9]), (T = t[10]), (E = t[11]), (D = t[12]));
  let ee = D,
    O;
  t[13] !== r || t[14] !== d
    ? ((O =
        d?.source === `plugin` && d.pluginId != null
          ? m({ hostId: r, pluginId: d.pluginId })
          : void 0),
      (t[13] = r),
      (t[14] = d),
      (t[15] = O))
    : (O = t[15]);
  let k = O,
    A;
  t[16] === d ? (A = t[17]) : ((A = d == null ? null : Rt(d.source)), (t[16] = d), (t[17] = A));
  let j = A,
    M = null;
  if (d?.source === `project`) M = d.projectRoot;
  else if (d != null) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(G, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (t[18] = e))
      : (e = t[18]),
      (M = e));
  }
  let P = `none`;
  if (d?.source === `project`) P = d.projectRoot;
  else if (d?.source === `plugin`) {
    P = `plugin`;
    let e = d.pluginId;
    e !== void 0 && (P = `plugin:${e ?? `unknown`}`);
  } else d != null && (P = d.source);
  let F;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(tt, { slug: Kt })), (t[19] = F))
    : (F = t[19]);
  let te;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(G, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: At },
      })),
      (t[20] = te))
    : (te = t[20]);
  let I = u == null || u.length === 0 || s || c,
    L;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(ve, { className: `icon-xs` })), (t[21] = L))
    : (L = t[21]);
  let R;
  t[22] !== p || t[23] !== y || t[24] !== I
    ? ((R = (0, $.jsx)(x, {
        "aria-label": y,
        color: `ghost`,
        disabled: I,
        onClick: p,
        size: `icon`,
        children: L,
      })),
      (t[22] = p),
      (t[23] = y),
      (t[24] = I),
      (t[25] = R))
    : (R = t[25]);
  let z;
  t[26] !== y || t[27] !== R
    ? ((z = (0, $.jsx)(N, { delayDuration: 0, tooltipContent: y, children: R })),
      (t[26] = y),
      (t[27] = R),
      (t[28] = z))
    : (z = t[28]);
  let B;
  t[29] !== b ||
  t[30] !== s ||
  t[31] !== a ||
  t[32] !== o ||
  t[33] !== f ||
  t[34] !== S ||
  t[35] !== C ||
  t[36] !== l ||
  t[37] !== u ||
  t[38] !== w ||
  t[39] !== E
    ? ((B =
        u == null && a
          ? (0, $.jsx)(J, {
              children: (0, $.jsx)(q, {
                label: (0, $.jsx)(G, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
                control: null,
              }),
            })
          : u == null || u.length === 0
            ? (0, $.jsx)(jt, {})
            : o == null
              ? s
                ? (0, $.jsx)(J, {
                    children: (0, $.jsx)(q, {
                      label: (0, $.jsx)(G, {
                        id: `settings.hooks.loading.label`,
                        defaultMessage: `Loading hooks…`,
                        description: `Label while hooks are loading`,
                      }),
                      control: null,
                    }),
                  })
                : E.length === 0
                  ? (0, $.jsx)(jt, {})
                  : (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-[var(--padding-panel)]`,
                      children: [
                        b.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(G, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: b,
                              onSelectSourceSection: f,
                            })
                          : null,
                        C == null ? null : (0, $.jsx)(Nt, { section: C, onSelectSourceSection: f }),
                        w == null
                          ? null
                          : (0, $.jsx)(Ft, {
                              section: w,
                              projectRootLabels: l,
                              onSelectSourceSection: f,
                            }),
                        S.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(G, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: S,
                              onSelectSourceSection: f,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(J, {
                  children: (0, $.jsx)(q, {
                    label: (0, $.jsx)(G, {
                      id: `settings.hooks.loadError.label`,
                      defaultMessage: `Could not load hooks`,
                      description: `Label when hooks settings fails to load hooks`,
                    }),
                    description: o.message,
                    control: null,
                  }),
                })),
      (t[29] = b),
      (t[30] = s),
      (t[31] = a),
      (t[32] = o),
      (t[33] = f),
      (t[34] = S),
      (t[35] = C),
      (t[36] = l),
      (t[37] = u),
      (t[38] = w),
      (t[39] = E),
      (t[40] = B))
    : (B = t[40]);
  let V = d != null && (s || T != null),
    H;
  t[41] === f
    ? (H = t[42])
    : ((H = () => {
        f(null);
      }),
      (t[41] = f),
      (t[42] = H));
  let U;
  t[43] !== r ||
  t[44] !== s ||
  t[45] !== i ||
  t[46] !== o ||
  t[47] !== h ||
  t[48] !== g ||
  t[49] !== T ||
  t[50] !== P ||
  t[51] !== M ||
  t[52] !== ee ||
  t[53] !== k ||
  t[54] !== j ||
  t[55] !== V ||
  t[56] !== H
    ? ((U = (0, $.jsx)(
        yt,
        {
          entry: T,
          hostId: r,
          isOpen: V,
          isLoading: s,
          isRemoteHost: i,
          loadError: o,
          title: ee,
          titleHref: k,
          titleIcon: j,
          subtitle: M,
          onClose: H,
          onToggleHookEnabled: h,
          onTrustHook: g,
        },
        P,
      )),
      (t[43] = r),
      (t[44] = s),
      (t[45] = i),
      (t[46] = o),
      (t[47] = h),
      (t[48] = g),
      (t[49] = T),
      (t[50] = P),
      (t[51] = M),
      (t[52] = ee),
      (t[53] = k),
      (t[54] = j),
      (t[55] = V),
      (t[56] = H),
      (t[57] = U))
    : (U = t[57]);
  let W;
  return (
    t[58] !== z || t[59] !== B || t[60] !== U
      ? ((W = (0, $.jsxs)(me, {
          title: F,
          subtitleClassName: `whitespace-normal`,
          actionPlacement: `subtitle`,
          subtitle: te,
          action: z,
          children: [B, U],
        })),
        (t[58] = z),
        (t[59] = B),
        (t[60] = U),
        (t[61] = W))
      : (W = t[61]),
    W
  );
}
function At(e) {
  return (0, $.jsx)(
    `a`,
    {
      className: `inline-flex text-token-text-link-foreground`,
      href: He,
      target: `_blank`,
      rel: `noreferrer`,
      children: e,
    },
    `learn-more`,
  );
}
function jt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(J, {
          children: (0, $.jsx)(q, {
            label: (0, $.jsx)(G, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(G, {
              id: `settings.hooks.emptyHooks.description`,
              defaultMessage: `Configured hooks will appear here`,
              description: `Description when no hooks are configured`,
            }),
            control: null,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Mt(e) {
  let t = (0, Q.c)(12),
    { sections: n, title: r, onSelectSourceSection: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = (0, $.jsx)(Y.Header, { title: r })), (t[0] = r), (t[1] = a));
  let o;
  if (t[2] !== i || t[3] !== n) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, $.jsx)(It, { section: e, onSelectSourceSection: i }, e.id)),
        (t[5] = i),
        (t[6] = e)),
      (o = n.map(e)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o));
  } else o = t[4];
  let s;
  t[7] === o ? (s = t[8]) : ((s = (0, $.jsx)(Y.Content, { children: o })), (t[7] = o), (t[8] = s));
  let c;
  return (
    t[9] !== a || t[10] !== s
      ? ((c = (0, $.jsxs)(Y, { className: `gap-2`, children: [a, s] })),
        (t[9] = a),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Nt(e) {
  let t = (0, Q.c)(8),
    { section: n, onSelectSourceSection: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(G, {
          id: `settings.hooks.source.plugins`,
          defaultMessage: `From Plugins`,
          description: `Group heading for hooks installed by plugins`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  if (t[1] !== r || t[2] !== n.pluginEntries) {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = (e) =>
          (0, $.jsx)(
            Pt,
            { pluginEntry: e, onSelectSourceSection: r },
            e.pluginId ?? `unknown-plugin`,
          )),
        (t[4] = r),
        (t[5] = e)),
      (a = n.pluginEntries.map(e)),
      (t[1] = r),
      (t[2] = n.pluginEntries),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, $.jsxs)(Y, {
          className: `gap-2`,
          children: [i, (0, $.jsx)(Y.Content, { children: a })],
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function Pt(e) {
  let t = (0, Q.c)(22),
    { pluginEntry: n, onSelectSourceSection: r } = e,
    i = K(),
    a;
  t[0] !== i || t[1] !== n.pluginId
    ? ((a =
        Je(n.pluginId) ??
        i.formatMessage({
          id: `settings.hooks.source.unknownPlugin`,
          defaultMessage: `Unknown plugin`,
          description: `Fallback label for plugin hooks without a plugin id`,
        })),
      (t[0] = i),
      (t[1] = n.pluginId),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === n.entry ? (s = t[4]) : ((s = xe(n.entry)), (t[3] = n.entry), (t[4] = s));
  let c = s,
    l;
  t[5] !== r || t[6] !== n.pluginId
    ? ((l = () => {
        r({ source: `plugin`, pluginId: n.pluginId });
      }),
      (t[5] = r),
      (t[6] = n.pluginId),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(T, { className: `icon-sm text-token-text-secondary` })), (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === o
    ? (d = t[10])
    : ((d = (0, $.jsx)(`span`, { className: `block truncate`, children: o })),
      (t[9] = o),
      (t[10] = d));
  let f;
  t[11] === n.entry.hooks.length
    ? (f = t[12])
    : ((f = (0, $.jsx)(Bt, { count: n.entry.hooks.length })),
      (t[11] = n.entry.hooks.length),
      (t[12] = f));
  let p;
  t[13] === c ? (p = t[14]) : ((p = (0, $.jsx)(Vt, { summary: c })), (t[13] = c), (t[14] = p));
  let m;
  t[15] !== d || t[16] !== f || t[17] !== p
    ? ((m = (0, $.jsx)(q, { icon: u, label: d, description: f, control: p })),
      (t[15] = d),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== l || t[20] !== m
      ? ((h = (0, $.jsx)(J, {
          children: (0, $.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background`,
            onClick: l,
            children: m,
          }),
        })),
        (t[19] = l),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function Ft(e) {
  let t = (0, Q.c)(10),
    { section: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(G, {
          id: `settings.hooks.source.projects`,
          defaultMessage: `From Projects`,
          description: `Group heading for hooks from project config files`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== i || t[2] !== r || t[3] !== n.projectEntries) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e) =>
          (0, $.jsx)(zt, { entry: e, projectRootLabels: r, onSelectSourceSection: i }, e.cwd)),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (o = n.projectEntries.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n.projectEntries),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, $.jsxs)(Y, {
          className: `gap-2`,
          children: [a, (0, $.jsx)(Y.Content, { children: o })],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function It(e) {
  let t = (0, Q.c)(21),
    { section: n, onSelectSourceSection: r } = e,
    i = n.id,
    a = n.entry,
    o;
  t[0] === a ? (o = t[1]) : ((o = xe(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] !== r || t[3] !== i
    ? ((c = () => {
        r({ source: i });
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === i ? (l = t[6]) : ((l = Rt(i)), (t[5] = i), (t[6] = l));
  let u;
  t[7] === i ? (u = t[8]) : ((u = (0, $.jsx)(Lt, { source: i })), (t[7] = i), (t[8] = u));
  let d;
  t[9] === a.hooks.length
    ? (d = t[10])
    : ((d = (0, $.jsx)(Bt, { count: a.hooks.length })), (t[9] = a.hooks.length), (t[10] = d));
  let f;
  t[11] === s ? (f = t[12]) : ((f = (0, $.jsx)(Vt, { summary: s })), (t[11] = s), (t[12] = f));
  let p;
  t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f
    ? ((p = (0, $.jsx)(q, { icon: l, label: u, description: d, control: f })),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d),
      (t[16] = f),
      (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== c || t[19] !== p
      ? ((m = (0, $.jsx)(J, {
          children: (0, $.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background`,
            onClick: c,
            children: p,
          }),
        })),
        (t[18] = c),
        (t[19] = p),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function Lt(e) {
  let t = (0, Q.c)(6),
    { source: n } = e;
  switch (n) {
    case `plugin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(G, {
              id: `settings.hooks.source.plugin`,
              defaultMessage: `Plugin`,
              description: `Source label for plugin hooks`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `user`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(G, {
              id: `settings.hooks.source.userConfig`,
              defaultMessage: `User config`,
              description: `Source label for user hooks`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `admin`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(G, {
              id: `settings.hooks.source.adminConfig`,
              defaultMessage: `Admin config`,
              description: `Source label for admin-managed hooks`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `project`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(G, {
              id: `settings.hooks.source.projectConfig`,
              defaultMessage: `Project config`,
              description: `Source label for project hooks`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `sessionFlags`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(G, {
              id: `settings.hooks.source.sessionFlags`,
              defaultMessage: `Session flags`,
              description: `Source label for session flag hooks`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(G, {
              id: `settings.hooks.source.unknown`,
              defaultMessage: `Unknown source`,
              description: `Source label for hooks with unknown provenance`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
function Rt(e) {
  let t = `icon-sm text-token-text-secondary`;
  switch (e) {
    case `plugin`:
      return (0, $.jsx)(T, { className: t });
    case `user`:
      return (0, $.jsx)(B, { className: t });
    case `admin`:
      return (0, $.jsx)(We, { className: t });
    case `project`:
      return (0, $.jsx)(j, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(Ge, { className: t });
  }
}
function zt(e) {
  let t = (0, Q.c)(22),
    { entry: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = xe(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] !== n.cwd || t[3] !== i
    ? ((s = () => {
        i({ source: `project`, projectRoot: n.cwd });
      }),
      (t[2] = n.cwd),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(j, { className: `icon-sm text-token-text-secondary` })), (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] !== n.cwd || t[7] !== r
    ? ((l = Ut(n.cwd, r)), (t[6] = n.cwd), (t[7] = r), (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === l
    ? (u = t[10])
    : ((u = (0, $.jsx)(`span`, { className: `block truncate`, children: l })),
      (t[9] = l),
      (t[10] = u));
  let d;
  t[11] === n.hooks.length
    ? (d = t[12])
    : ((d = (0, $.jsx)(Bt, { count: n.hooks.length })), (t[11] = n.hooks.length), (t[12] = d));
  let f;
  t[13] === o ? (f = t[14]) : ((f = (0, $.jsx)(Vt, { summary: o })), (t[13] = o), (t[14] = f));
  let p;
  t[15] !== u || t[16] !== d || t[17] !== f
    ? ((p = (0, $.jsx)(q, { icon: c, label: u, description: d, control: f })),
      (t[15] = u),
      (t[16] = d),
      (t[17] = f),
      (t[18] = p))
    : (p = t[18]);
  let m;
  return (
    t[19] !== s || t[20] !== p
      ? ((m = (0, $.jsx)(J, {
          children: (0, $.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background`,
            onClick: s,
            children: p,
          }),
        })),
        (t[19] = s),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function Bt(e) {
  let t = (0, Q.c)(2),
    { count: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(G, {
          id: `settings.hooks.source.hookCount`,
          defaultMessage: `{count, plural, one {# hook} other {# hooks}}`,
          description: `Short hook count shown under a hook source row`,
          values: { count: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Vt(e) {
  let t = (0, Q.c)(5),
    { summary: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, $.jsx)(Ht, { summary: n })), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(R, { className: `icon-2xs shrink-0 -rotate-90` })), (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [r, i] })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function Ht(e) {
  let t = (0, Q.c)(6),
    { summary: n } = e,
    r = K();
  if (n == null || (n.issueCount === 0 && n.needsReview === 0)) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Ie, {
        className: `icon-2xs shrink-0 text-token-editor-warning-foreground`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r || t[2] !== n ? ((a = it(n, r)), (t[1] = r), (t[2] = n), (t[3] = a)) : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-3 text-sm whitespace-nowrap text-token-text-primary`,
          children: [i, (0, $.jsx)(`span`, { className: `max-[30rem]:hidden`, children: a })],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function Ut(e, t) {
  return t?.[e] ?? Le(e) ?? e;
}
function Wt({ entry: e, projectRootLabels: t, selection: n }) {
  if (n == null) return null;
  if (n.source === `project`) return Ut(n.projectRoot, t);
  if (n.source === `plugin`) {
    let t = n.pluginId === void 0 ? null : Je(n.pluginId);
    if ((t == null && e != null && (t = Gt(e.hooks)), t != null)) return t;
  }
  return (0, $.jsx)(Lt, { source: n.source });
}
function Gt(e) {
  let t = null;
  for (let n of e) {
    let e = Je(n.pluginId);
    if (e == null || (t != null && t !== e)) return null;
    t = e;
  }
  return t;
}
var Q,
  $,
  Kt,
  qt = e(() => {
    ((Q = r()),
      a(),
      oe(),
      k(),
      I(),
      Ve(),
      D(),
      Ue(),
      z(),
      M(),
      Ke(),
      ye(),
      F(),
      Pe(),
      he(),
      rt(),
      Re(),
      et(),
      nt(),
      Me(),
      qe(),
      ot(),
      De(),
      Ot(),
      ($ = g()),
      (Kt = `hooks-settings`));
  });
function Jt() {
  let e = (0, Yt.c)(55),
    t = d(n),
    r = K(),
    i = ce(),
    [a, c] = ue(),
    l = s(),
    { selectedHostId: u, setSelectedHostId: p } = Fe(),
    m = pe(u),
    h = f(re),
    g = f(se),
    _;
  e[0] === u ? (_ = e[1]) : ((_ = { hostId: u }), (e[0] = u), (e[1] = _));
  let { data: v, isPending: y } = o(de, _),
    b;
  e[2] === a ? (b = e[3]) : ((b = a.get(`hostId`)), (e[2] = a), (e[3] = b));
  let x = b,
    S = x == null || x === u,
    C,
    w;
  if (e[4] !== h || e[5] !== S || e[6] !== a || e[7] !== u || e[8] !== g || e[9] !== v) {
    let t = S ? a.get(`projectRoot`) : null,
      n = S ? a.get(`pluginId`) : null,
      r = [];
    (u === `local` ? (r = h) : g?.hostId === u && (r = [g.remotePath]),
      (C = v == null ? void 0 : we(v.roots, r, t)),
      (w = S
        ? be({ pluginId: n, source: a.get(`source`), projectRoot: t, projectRoots: C })
        : null),
      (e[4] = h),
      (e[5] = S),
      (e[6] = a),
      (e[7] = u),
      (e[8] = g),
      (e[9] = v),
      (e[10] = C),
      (e[11] = w));
  } else ((C = e[10]), (w = e[11]));
  let T = w,
    D;
  e[12] !== C || e[13] !== u
    ? ((D = { hostId: u, cwds: C }), (e[12] = C), (e[13] = u), (e[14] = D))
    : (D = e[14]);
  let O = o(te, D),
    k;
  e[15] === p
    ? (k = e[16])
    : ((k = (e) => {
        p(e);
      }),
      (e[15] = p),
      (e[16] = k));
  let A = (0, Xt.useEffectEvent)(k),
    j;
  e[17] !== l || e[18] !== u || e[19] !== x || e[20] !== A
    ? ((j = () => {
        if (x != null && x !== u) {
          A(x);
          return;
        }
        E(l, u, { refetchType: `active` });
      }),
      (e[17] = l),
      (e[18] = u),
      (e[19] = x),
      (e[20] = A),
      (e[21] = j))
    : (j = e[21]);
  let M;
  (e[22] !== i.key || e[23] !== l || e[24] !== u || e[25] !== x
    ? ((M = [i.key, l, u, x]), (e[22] = i.key), (e[23] = l), (e[24] = u), (e[25] = x), (e[26] = M))
    : (M = e[26]),
    (0, Xt.useEffect)(j, M));
  let N = o(ee, u),
    P;
  e[27] !== O || e[28] !== r || e[29] !== l || e[30] !== t || e[31] !== u
    ? ((P = () => {
        O.refetch().then(async (e) => {
          e.isSuccess &&
            (await E(l, u, { broadcast: !0, refetchType: `none` }),
            t
              .get(ge)
              .success(
                r.formatMessage({
                  id: `settings.hooks.refresh.success`,
                  defaultMessage: `Refreshed hooks`,
                  description: `Success toast shown after manually refreshing hooks`,
                }),
              ));
        });
      }),
      (e[27] = O),
      (e[28] = r),
      (e[29] = l),
      (e[30] = t),
      (e[31] = u),
      (e[32] = P))
    : (P = e[32]);
  let F = P,
    I;
  e[33] !== a || e[34] !== u || e[35] !== c
    ? ((I = (e) => {
        let t = new URLSearchParams(a);
        (Ae(t, u, e), c(t, { replace: !0 }));
      }),
      (e[33] = a),
      (e[34] = u),
      (e[35] = c),
      (e[36] = I))
    : (I = e[36]);
  let L = I,
    R = O.data?.data,
    z = m.kind !== `local`,
    B = O.isFetching && !O.isPending,
    V = v?.labels,
    H,
    U;
  e[37] === N
    ? ((H = e[38]), (U = e[39]))
    : ((H = (e, t) => {
        N.mutate([{ key: e.key, enabled: t }]);
      }),
      (U = (e) => {
        N.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[37] = N),
      (e[38] = H),
      (e[39] = U));
  let W;
  return (
    e[40] !== F ||
    e[41] !== L ||
    e[42] !== O.error ||
    e[43] !== O.isPending ||
    e[44] !== y ||
    e[45] !== C ||
    e[46] !== u ||
    e[47] !== T ||
    e[48] !== z ||
    e[49] !== B ||
    e[50] !== V ||
    e[51] !== H ||
    e[52] !== U ||
    e[53] !== R
      ? ((W = (0, Zt.jsx)(kt, {
          entries: R,
          hostId: u,
          isRemoteHost: z,
          isLoadingProjectRoots: y,
          loadError: O.error,
          isLoading: O.isPending,
          isRefreshing: B,
          projectRootLabels: V,
          projectRoots: C,
          selectedSourceSection: T,
          onSelectSourceSection: L,
          onRefreshHooks: F,
          onToggleHookEnabled: H,
          onTrustHook: U,
        })),
        (e[40] = F),
        (e[41] = L),
        (e[42] = O.error),
        (e[43] = O.isPending),
        (e[44] = y),
        (e[45] = C),
        (e[46] = u),
        (e[47] = T),
        (e[48] = z),
        (e[49] = B),
        (e[50] = V),
        (e[51] = H),
        (e[52] = U),
        (e[53] = R),
        (e[54] = W))
      : (W = e[54]),
    W
  );
}
var Yt, Xt, Zt;
e(() => {
  ((Yt = r()),
    c(),
    p(),
    (Xt = t(u(), 1)),
    oe(),
    ne(),
    _e(),
    i(),
    ie(),
    Ne(),
    ae(),
    De(),
    C(),
    je(),
    qt(),
    (Zt = g()));
})();
export { Jt as HooksSettings };
//# sourceMappingURL=hooks-settings.js.map
