import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  $t as i,
  AB as a,
  AV as o,
  Ai as s,
  BP as c,
  BV as l,
  DN as u,
  Di as d,
  Ei as f,
  Et as p,
  Ev as m,
  FB as h,
  Ft as g,
  HE as _,
  Hi as v,
  IB as y,
  JV as b,
  Lf as x,
  ON as S,
  Ou as C,
  PB as w,
  QP as T,
  Qt as E,
  RP as D,
  Uf as O,
  Ui as k,
  VE as A,
  VP as j,
  Vi as M,
  Wi as N,
  Xs as P,
  Yf as ee,
  Zs as F,
  aM as te,
  bF as I,
  ba as L,
  cM as R,
  dn as z,
  fn as B,
  gv as V,
  hM as H,
  iF as U,
  jI as W,
  jv as ne,
  ku as re,
  lF as G,
  mn as ie,
  mv as ae,
  oM as oe,
  pM as se,
  pn as ce,
  qV as le,
  qf as ue,
  rF as de,
  sF as K,
  tF as fe,
  tP as pe,
  uM as me,
  va as he,
  wi as ge,
  xa as _e,
  zP as ve,
  zV as ye,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import { J as be, K as xe } from "./app-initial~app-main~automations-page.js";
import {
  $n as Se,
  Aa as Ce,
  Bu as we,
  Ca as Te,
  Da as Ee,
  Dr as De,
  Ea as Oe,
  Er as ke,
  Fs as Ae,
  Hu as je,
  Is as Me,
  Oa as Ne,
  Qn as Pe,
  Sa as Fe,
  Ta as Ie,
  Ur as q,
  Wr as Le,
  _a as Re,
  ba as ze,
  fa as Be,
  ga as Ve,
  ha as He,
  ka as Ue,
  ma as We,
  mm as Ge,
  pa as Ke,
  pm as qe,
  wa as Je,
  xa as Ye,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as Xe,
  K as Ze,
  en as Qe,
  tn as $e,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  _ as et,
  v as tt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  g as nt,
  h as J,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
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
  return (0, at.jsx)(K, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: { issueCount: n, separator: n !== `` && r !== `` ? ` · ` : ``, needsReview: r },
  });
}
var at,
  ot = e(() => {
    (U(), (at = l()));
  }),
  st,
  ct,
  lt = e(() => {
    (t(b()),
      (st = l()),
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
    l = G(),
    [d, f] = (0, gt.useState)(null),
    p = pe(`open-file`),
    m,
    h,
    g;
  if (
    t[0] !== n ||
    t[1] !== d ||
    t[2] !== a ||
    t[3] !== r ||
    t[4] !== l ||
    t[5] !== i ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== p
  ) {
    let e = He(a, n);
    ((g = `border-t border-token-border px-3`), (m = `divide-y-[0.5px] divide-token-border`));
    let _;
    (t[12] !== d ||
    t[13] !== r ||
    t[14] !== l ||
    t[15] !== i ||
    t[16] !== o ||
    t[17] !== s ||
    t[18] !== p
      ? ((_ = (e, t) => {
          let n = Te(e),
            a = !i && !e.isManaged,
            m = d === e.key;
          return (0, X.jsxs)(
            `div`,
            {
              className: c(m && `pb-2`),
              children: [
                (0, X.jsxs)(`div`, {
                  className: `-mx-3 flex items-center gap-2 px-3 hover:bg-token-list-hover-background`,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `relative flex min-w-0 flex-1`,
                      children: [
                        (0, X.jsx)(`button`, {
                          type: `button`,
                          "aria-expanded": m,
                          className: c(
                            `flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 pl-7 text-left text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                            a ? `pr-12` : `pr-6`,
                          ),
                          onClick: () => {
                            f(m ? null : e.key);
                          },
                          children: (0, X.jsx)(`span`, {
                            className: `shrink-0 text-token-text-primary`,
                            children: Oe(t, l),
                          }),
                        }),
                        a
                          ? (0, X.jsx)(se, {
                              triggerAsChild: !0,
                              tooltipContent: (0, X.jsx)(K, { ..._t.openConfigFile }),
                              children: (0, X.jsx)(`button`, {
                                type: `button`,
                                "aria-label": l.formatMessage(_t.openConfigFile),
                                className: `absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-token-text-tertiary hover:bg-token-list-hover-background hover:text-token-text-primary focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                                onClick: () => {
                                  tt({
                                    cwd: null,
                                    hostId: r,
                                    path: e.sourcePath,
                                    openFile: p.mutate,
                                  });
                                },
                                children: (0, X.jsx)(C, {
                                  className: `icon-xxs`,
                                  "aria-hidden": !0,
                                }),
                              }),
                            })
                          : null,
                        (0, X.jsx)(D, {
                          "aria-hidden": !0,
                          className: c(
                            `icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-token-text-secondary`,
                            m && `rotate-180`,
                          ),
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-2`,
                      children: [
                        n
                          ? (0, X.jsx)(se, {
                              delayDuration: 0,
                              tooltipContent:
                                e.trustStatus === `modified`
                                  ? (0, X.jsx)(K, {
                                      id: `settings.hooks.event.changedReviewReason`,
                                      defaultMessage: `Hook changed since last trusted`,
                                      description: `Tooltip shown for changed hooks awaiting review`,
                                    })
                                  : (0, X.jsx)(K, {
                                      id: `settings.hooks.event.untrustedReviewReason`,
                                      defaultMessage: `New hook`,
                                      description: `Tooltip shown for hooks awaiting first review`,
                                    }),
                              children: (0, X.jsxs)(u, {
                                color: `outline`,
                                size: `composerSm`,
                                onClick: () => {
                                  s(e);
                                },
                                children: [
                                  (0, X.jsx)(ct, { className: `icon-2xs` }),
                                  (0, X.jsx)(K, {
                                    id: `settings.hooks.event.trust`,
                                    defaultMessage: `Trust`,
                                    description: `Button label to trust a hook`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        e.isManaged
                          ? (0, X.jsx)(se, {
                              delayDuration: 0,
                              tooltipContent: (0, X.jsx)(K, {
                                id: `settings.hooks.event.managedTooltip`,
                                defaultMessage: `Managed hooks are always on`,
                                description: `Tooltip shown for admin-managed hooks`,
                              }),
                              children: (0, X.jsx)(`span`, {
                                className: `inline-flex cursor-not-allowed`,
                                tabIndex: 0,
                                children: (0, X.jsx)(E, {
                                  ariaLabel: Oe(t, l),
                                  checked: !0,
                                  className: `pointer-events-none`,
                                  disabled: !0,
                                  onChange: dt,
                                }),
                              }),
                            })
                          : (0, X.jsx)(se, {
                              delayDuration: 0,
                              tooltipContent: n
                                ? (0, X.jsx)(K, {
                                    id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                    defaultMessage: `Disabled until hook is trusted`,
                                    description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                                  })
                                : null,
                              children: (0, X.jsx)(`span`, {
                                className: n ? `inline-flex cursor-not-allowed` : ``,
                                tabIndex: n ? 0 : void 0,
                                children: (0, X.jsx)(E, {
                                  ariaLabel: Oe(t, l),
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
                m
                  ? (0, X.jsx)(`div`, { className: `pl-7`, children: (0, X.jsx)(ft, { hook: e }) })
                  : null,
              ],
            },
            e.key,
          );
        }),
        (t[12] = d),
        (t[13] = r),
        (t[14] = l),
        (t[15] = i),
        (t[16] = o),
        (t[17] = s),
        (t[18] = p),
        (t[19] = _))
      : (_ = t[19]),
      (h = e.map(_)),
      (t[0] = n),
      (t[1] = d),
      (t[2] = a),
      (t[3] = r),
      (t[4] = l),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g));
  } else ((m = t[9]), (h = t[10]), (g = t[11]));
  let _;
  t[20] !== m || t[21] !== h
    ? ((_ = (0, X.jsx)(`div`, { className: m, children: h })),
      (t[20] = m),
      (t[21] = h),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  return (
    t[23] !== g || t[24] !== _
      ? ((v = (0, X.jsx)(`div`, { className: g, children: _ })),
        (t[23] = g),
        (t[24] = _),
        (t[25] = v))
      : (v = t[25]),
    v
  );
}
function dt() {}
function ft(e) {
  let t = (0, ht.c)(18),
    { hook: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(K, {
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
              label: (0, X.jsx)(K, {
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
              label: (0, X.jsx)(K, {
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
    ? ((s = (0, X.jsx)(K, {
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
              label: (0, X.jsx)(K, {
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
          ? ((e = (0, X.jsx)(K, {
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
          ? ((e = (0, X.jsx)(K, {
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
          ? ((e = (0, X.jsx)(K, {
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
    ((ht = le()),
      j(),
      (gt = t(b(), 1)),
      U(),
      S(),
      i(),
      H(),
      et(),
      ve(),
      re(),
      lt(),
      n(),
      Ne(),
      Fe(),
      (X = l()),
      (_t = de({
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
      subtitle: p,
      onClose: m,
      onToggleHookEnabled: h,
      onTrustHook: g,
    } = e,
    _;
  t[0] !== c || t[1] !== l || t[2] !== u
    ? ((_ =
        c == null
          ? null
          : (0, Z.jsx)(L, {
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
                    : (0, Z.jsxs)(V, {
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
                          (0, Z.jsx)(D, {
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
      (t[3] = _))
    : (_ = t[3]);
  let v = _,
    y;
  t[4] === m
    ? (y = t[5])
    : ((y = (e) => {
        e || m();
      }),
      (t[4] = m),
      (t[5] = y));
  let b;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { "aria-describedby": void 0 }), (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== v || t[8] !== p
    ? ((x = (0, Z.jsx)(d, {
        children: (0, Z.jsx)(f, { title: v, subtitle: p, subtitleClassName: `break-all` }),
      })),
      (t[7] = v),
      (t[8] = p),
      (t[9] = x))
    : (x = t[9]);
  let S;
  t[10] !== n ||
  t[11] !== r ||
  t[12] !== a ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== s ||
  t[16] !== h ||
  t[17] !== g
    ? ((S = i
        ? a
          ? (0, Z.jsx)(J, {
              children: (0, Z.jsx)(q, {
                label: (0, Z.jsx)(K, {
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
                onToggleHookEnabled: h,
                onTrustHook: g,
              })
            : (0, Z.jsx)(J, {
                children: (0, Z.jsx)(q, {
                  label: (0, Z.jsx)(K, {
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
      (t[16] = h),
      (t[17] = g),
      (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] === S
    ? (C = t[20])
    : ((C = (0, Z.jsx)(d, {
        className: `vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pr-1 [&>*]:shrink-0`,
        children: S,
      })),
      (t[19] = S),
      (t[20] = C));
  let w;
  t[21] !== x || t[22] !== C
    ? ((w = (0, Z.jsxs)(ge, {
        className: `max-h-[calc(100vh-6rem)] min-h-0 gap-4`,
        children: [x, C],
      })),
      (t[21] = x),
      (t[22] = C),
      (t[23] = w))
    : (w = t[23]);
  let T;
  return (
    t[24] !== i || t[25] !== y || t[26] !== w
      ? ((T = (0, Z.jsx)(he, {
          open: i,
          onOpenChange: y,
          contentProps: b,
          size: `xwide`,
          children: w,
        })),
        (t[24] = i),
        (t[25] = y),
        (t[26] = w),
        (t[27] = T))
      : (T = t[27]),
    T
  );
}
function bt(e) {
  let t = (0, Et.c)(23),
    { entry: n, hostId: r, isRemoteHost: i, onToggleHookEnabled: a, onTrustHook: o } = e,
    s = G(),
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
    let e = Ke(u).filter(xt),
      m = n.warnings,
      h = n.errors,
      g = Ve(u),
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
                        icon: (0, Z.jsx)(Ue, { className: `icon-xs` }),
                        label: (0, Z.jsx)(`span`, {
                          className: `font-medium`,
                          children: Ie(e.eventName, s),
                        }),
                        description: Je(e.eventName, s),
                        control:
                          e.needsReview > 0
                            ? (0, Z.jsx)(qe, {
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
      ? ((t = (0, Z.jsx)(Pe, {
          Icon: qe,
          iconClassName: `text-token-editor-warning-foreground`,
          type: `info`,
          content: (0, Z.jsx)(K, {
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
    ? ((s = (0, Z.jsx)(qe, { className: `icon-xs shrink-0 text-token-editor-warning-foreground` })),
      (t[0] = s))
    : (s = t[0]);
  let l;
  t[1] === i
    ? (l = t[2])
    : ((l = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          s,
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm text-token-text-primary`,
            children: (0, Z.jsx)(K, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = l));
  let u = r && `rotate-180`,
    d;
  t[3] === u
    ? (d = t[4])
    : ((d = c(`icon-2xs shrink-0 transition-transform`, u)), (t[3] = u), (t[4] = d));
  let f;
  t[5] === d ? (f = t[6]) : ((f = (0, Z.jsx)(D, { className: d })), (t[5] = d), (t[6] = f));
  let p;
  t[7] !== o || t[8] !== l || t[9] !== f
    ? ((p = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-left`,
        onClick: o,
        children: [l, f],
      })),
      (t[7] = o),
      (t[8] = l),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((m = r
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2 border-t border-token-editor-warning-foreground/20 px-3 py-2 text-sm text-token-text-secondary`,
            children: [a.map(Tt), n.map(wt)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== p || t[16] !== m
      ? ((h = (0, Z.jsxs)(`div`, {
          className: `bg-token-editor-warning-background/30 overflow-hidden rounded-lg border border-token-editor-warning-foreground/30`,
          children: [p, m],
        })),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function wt(e) {
  return (0, Z.jsx)(
    `div`,
    {
      children: (0, Z.jsx)(K, {
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
    ((Et = le()),
      j(),
      (Dt = t(b(), 1)),
      U(),
      ae(),
      Se(),
      _e(),
      s(),
      ve(),
      Ce(),
      Ge(),
      Le(),
      nt(),
      Ne(),
      vt(),
      Fe(),
      (Z = l()));
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
      projectRoots: d,
      selectedSourceSection: f,
      onSelectSourceSection: p,
      onRefreshHooks: m,
      onToggleHookEnabled: h,
      onTrustHook: g,
    } = e,
    _ = G(),
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
    x,
    S,
    C,
    w,
    T,
    E;
  if (t[2] !== n || t[3] !== s || t[4] !== l || t[5] !== f) {
    ((T = n == null || s ? [] : We(n)), (b = []), (x = []), (S = null), (C = null));
    for (let e of T)
      bb0: switch (e.id) {
        case `plugin`:
          S = e;
          break bb0;
        case `project`:
          C = e;
          break bb0;
        case `user`:
        case `admin`:
          b.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          x.push(e);
      }
    ((w = Ye(T, f)),
      (E = Wt({ entry: w, projectRootLabels: l, selection: f })),
      (t[2] = n),
      (t[3] = s),
      (t[4] = l),
      (t[5] = f),
      (t[6] = b),
      (t[7] = x),
      (t[8] = S),
      (t[9] = C),
      (t[10] = w),
      (t[11] = T),
      (t[12] = E));
  } else ((b = t[6]), (x = t[7]), (S = t[8]), (C = t[9]), (w = t[10]), (T = t[11]), (E = t[12]));
  let D = E,
    O;
  t[13] !== r || t[14] !== f
    ? ((O =
        f?.source === `plugin` && f.pluginId != null
          ? W({ hostId: r, pluginId: f.pluginId })
          : void 0),
      (t[13] = r),
      (t[14] = f),
      (t[15] = O))
    : (O = t[15]);
  let k = O,
    A;
  t[16] === f ? (A = t[17]) : ((A = f == null ? null : Rt(f.source)), (t[16] = f), (t[17] = A));
  let j = A,
    M = null;
  if (f?.source === `project`) M = f.projectRoot;
  else if (f != null) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(K, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (t[18] = e))
      : (e = t[18]),
      (M = e));
  }
  let N = `none`;
  if (f?.source === `project`) N = f.projectRoot;
  else if (f?.source === `plugin`) {
    N = `plugin`;
    let e = f.pluginId;
    e !== void 0 && (N = `plugin:${e ?? `unknown`}`);
  } else f != null && (N = f.source);
  let P;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(Xe, { slug: Kt })), (t[19] = P))
    : (P = t[19]);
  let ee;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(K, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: At },
      })),
      (t[20] = ee))
    : (ee = t[20]);
  let F = d == null || d.length === 0 || s || c,
    I;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(te, { className: `icon-xs` })), (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] !== m || t[23] !== y || t[24] !== F
    ? ((L = (0, $.jsx)(u, {
        "aria-label": y,
        color: `ghost`,
        disabled: F,
        onClick: m,
        size: `icon`,
        children: I,
      })),
      (t[22] = m),
      (t[23] = y),
      (t[24] = F),
      (t[25] = L))
    : (L = t[25]);
  let R;
  t[26] !== y || t[27] !== L
    ? ((R = (0, $.jsx)(se, { delayDuration: 0, tooltipContent: y, children: L })),
      (t[26] = y),
      (t[27] = L),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] !== b ||
  t[30] !== s ||
  t[31] !== a ||
  t[32] !== o ||
  t[33] !== p ||
  t[34] !== x ||
  t[35] !== S ||
  t[36] !== l ||
  t[37] !== d ||
  t[38] !== C ||
  t[39] !== T
    ? ((z =
        d == null && a
          ? (0, $.jsx)(J, {
              children: (0, $.jsx)(q, {
                label: (0, $.jsx)(K, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
                control: null,
              }),
            })
          : d == null || d.length === 0
            ? (0, $.jsx)(jt, {})
            : o == null
              ? s
                ? (0, $.jsx)(J, {
                    children: (0, $.jsx)(q, {
                      label: (0, $.jsx)(K, {
                        id: `settings.hooks.loading.label`,
                        defaultMessage: `Loading hooks…`,
                        description: `Label while hooks are loading`,
                      }),
                      control: null,
                    }),
                  })
                : T.length === 0
                  ? (0, $.jsx)(jt, {})
                  : (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-[var(--padding-panel)]`,
                      children: [
                        b.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(K, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: b,
                              onSelectSourceSection: p,
                            })
                          : null,
                        S == null ? null : (0, $.jsx)(Nt, { section: S, onSelectSourceSection: p }),
                        C == null
                          ? null
                          : (0, $.jsx)(Ft, {
                              section: C,
                              projectRootLabels: l,
                              onSelectSourceSection: p,
                            }),
                        x.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(K, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: x,
                              onSelectSourceSection: p,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(J, {
                  children: (0, $.jsx)(q, {
                    label: (0, $.jsx)(K, {
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
      (t[33] = p),
      (t[34] = x),
      (t[35] = S),
      (t[36] = l),
      (t[37] = d),
      (t[38] = C),
      (t[39] = T),
      (t[40] = z))
    : (z = t[40]);
  let B = f != null && (s || w != null),
    V;
  t[41] === p
    ? (V = t[42])
    : ((V = () => {
        p(null);
      }),
      (t[41] = p),
      (t[42] = V));
  let H;
  t[43] !== r ||
  t[44] !== s ||
  t[45] !== i ||
  t[46] !== o ||
  t[47] !== h ||
  t[48] !== g ||
  t[49] !== w ||
  t[50] !== N ||
  t[51] !== M ||
  t[52] !== D ||
  t[53] !== k ||
  t[54] !== j ||
  t[55] !== B ||
  t[56] !== V
    ? ((H = (0, $.jsx)(
        yt,
        {
          entry: w,
          hostId: r,
          isOpen: B,
          isLoading: s,
          isRemoteHost: i,
          loadError: o,
          title: D,
          titleHref: k,
          titleIcon: j,
          subtitle: M,
          onClose: V,
          onToggleHookEnabled: h,
          onTrustHook: g,
        },
        N,
      )),
      (t[43] = r),
      (t[44] = s),
      (t[45] = i),
      (t[46] = o),
      (t[47] = h),
      (t[48] = g),
      (t[49] = w),
      (t[50] = N),
      (t[51] = M),
      (t[52] = D),
      (t[53] = k),
      (t[54] = j),
      (t[55] = B),
      (t[56] = V),
      (t[57] = H))
    : (H = t[57]);
  let U;
  return (
    t[58] !== R || t[59] !== z || t[60] !== H
      ? ((U = (0, $.jsxs)(xe, {
          title: P,
          subtitleClassName: `whitespace-normal`,
          actionPlacement: `subtitle`,
          subtitle: ee,
          action: R,
          children: [z, H],
        })),
        (t[58] = R),
        (t[59] = z),
        (t[60] = H),
        (t[61] = U))
      : (U = t[61]),
    U
  );
}
function At(e) {
  return (0, $.jsx)(
    `a`,
    {
      className: `inline-flex text-token-text-link-foreground`,
      href: p,
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
            label: (0, $.jsx)(K, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(K, {
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
        title: (0, $.jsx)(K, {
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
    i = G(),
    a;
  t[0] !== i || t[1] !== n.pluginId
    ? ((a =
        Ee(n.pluginId) ??
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
  t[3] === n.entry ? (s = t[4]) : ((s = Be(n.entry)), (t[3] = n.entry), (t[4] = s));
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
    ? ((u = (0, $.jsx)(P, { className: `icon-sm text-token-text-secondary` })), (t[8] = u))
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
        title: (0, $.jsx)(K, {
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
  t[0] === a ? (o = t[1]) : ((o = Be(a)), (t[0] = a), (t[1] = o));
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
          ? ((e = (0, $.jsx)(K, {
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
          ? ((e = (0, $.jsx)(K, {
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
          ? ((e = (0, $.jsx)(K, {
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
          ? ((e = (0, $.jsx)(K, {
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
          ? ((e = (0, $.jsx)(K, {
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
          ? ((e = (0, $.jsx)(K, {
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
      return (0, $.jsx)(P, { className: t });
    case `user`:
      return (0, $.jsx)(M, { className: t });
    case `admin`:
      return (0, $.jsx)(Ae, { className: t });
    case `project`:
      return (0, $.jsx)(k, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(Ue, { className: t });
  }
}
function zt(e) {
  let t = (0, Q.c)(22),
    { entry: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = Be(n)), (t[0] = n), (t[1] = a));
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
    ? ((c = (0, $.jsx)(k, { className: `icon-sm text-token-text-secondary` })), (t[5] = c))
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
      : ((r = (0, $.jsx)(K, {
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
    ? ((i = (0, $.jsx)(D, { className: `icon-2xs shrink-0 -rotate-90` })), (t[2] = i))
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
    r = G();
  if (n == null || (n.issueCount === 0 && n.needsReview === 0)) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(qe, {
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
  return t?.[e] ?? Qe(e) ?? e;
}
function Wt({ entry: e, projectRootLabels: t, selection: n }) {
  if (n == null) return null;
  if (n.source === `project`) return Ut(n.projectRoot, t);
  if (n.source === `plugin`) {
    let t = n.pluginId === void 0 ? null : Ee(n.pluginId);
    if ((t == null && e != null && (t = Gt(e.hooks)), t != null)) return t;
  }
  return (0, $.jsx)(Lt, { source: n.source });
}
function Gt(e) {
  let t = null;
  for (let n of e) {
    let e = Ee(n.pluginId);
    if (e == null || (t != null && t !== e)) return null;
    t = e;
  }
  return t;
}
var Q,
  $,
  Kt,
  qt = e(() => {
    ((Q = le()),
      I(),
      U(),
      S(),
      H(),
      g(),
      F(),
      Me(),
      ve(),
      N(),
      Ce(),
      oe(),
      v(),
      Ge(),
      be(),
      rt(),
      Le(),
      Ze(),
      nt(),
      $e(),
      Ne(),
      ot(),
      Fe(),
      Ot(),
      ($ = l()),
      (Kt = `hooks-settings`));
  });
function Jt() {
  let e = (0, Yt.c)(55),
    t = h(T),
    n = G(),
    r = m(),
    [i, a] = ne(),
    o = ye(),
    { selectedHostId: s, setSelectedHostId: c } = je(),
    l = _(s),
    u = y(x),
    d = y(ue),
    f;
  e[0] === s ? (f = e[1]) : ((f = { hostId: s }), (e[0] = s), (e[1] = f));
  let { data: p, isPending: g } = w(ee, f),
    v;
  e[2] === i ? (v = e[3]) : ((v = i.get(`hostId`)), (e[2] = i), (e[3] = v));
  let b = v,
    S = b == null || b === s,
    C,
    E;
  if (e[4] !== u || e[5] !== S || e[6] !== i || e[7] !== s || e[8] !== d || e[9] !== p) {
    let t = S ? i.get(`projectRoot`) : null,
      n = S ? i.get(`pluginId`) : null,
      r = [];
    (s === `local` ? (r = u) : d?.hostId === s && (r = [d.remotePath]),
      (C = p == null ? void 0 : Re(p.roots, r, t)),
      (E = S
        ? ze({ pluginId: n, source: i.get(`source`), projectRoot: t, projectRoots: C })
        : null),
      (e[4] = u),
      (e[5] = S),
      (e[6] = i),
      (e[7] = s),
      (e[8] = d),
      (e[9] = p),
      (e[10] = C),
      (e[11] = E));
  } else ((C = e[10]), (E = e[11]));
  let D = E,
    O;
  e[12] !== C || e[13] !== s
    ? ((O = { hostId: s, cwds: C }), (e[12] = C), (e[13] = s), (e[14] = O))
    : (O = e[14]);
  let k = w(z, O),
    A;
  e[15] === c
    ? (A = e[16])
    : ((A = (e) => {
        c(e);
      }),
      (e[15] = c),
      (e[16] = A));
  let j = (0, Xt.useEffectEvent)(A),
    M;
  e[17] !== o || e[18] !== s || e[19] !== b || e[20] !== j
    ? ((M = () => {
        if (b != null && b !== s) {
          j(b);
          return;
        }
        ce(o, s, { refetchType: `active` });
      }),
      (e[17] = o),
      (e[18] = s),
      (e[19] = b),
      (e[20] = j),
      (e[21] = M))
    : (M = e[21]);
  let N;
  (e[22] !== r.key || e[23] !== o || e[24] !== s || e[25] !== b
    ? ((N = [r.key, o, s, b]), (e[22] = r.key), (e[23] = o), (e[24] = s), (e[25] = b), (e[26] = N))
    : (N = e[26]),
    (0, Xt.useEffect)(M, N));
  let P = w(ie, s),
    F;
  e[27] !== k || e[28] !== n || e[29] !== o || e[30] !== t || e[31] !== s
    ? ((F = () => {
        k.refetch().then(async (e) => {
          e.isSuccess &&
            (await ce(o, s, { broadcast: !0, refetchType: `none` }),
            t
              .get(me)
              .success(
                n.formatMessage({
                  id: `settings.hooks.refresh.success`,
                  defaultMessage: `Refreshed hooks`,
                  description: `Success toast shown after manually refreshing hooks`,
                }),
              ));
        });
      }),
      (e[27] = k),
      (e[28] = n),
      (e[29] = o),
      (e[30] = t),
      (e[31] = s),
      (e[32] = F))
    : (F = e[32]);
  let te = F,
    I;
  e[33] !== i || e[34] !== s || e[35] !== a
    ? ((I = (e) => {
        let t = new URLSearchParams(i);
        (De(t, s, e), a(t, { replace: !0 }));
      }),
      (e[33] = i),
      (e[34] = s),
      (e[35] = a),
      (e[36] = I))
    : (I = e[36]);
  let L = I,
    R = k.data?.data,
    B = l.kind !== `local`,
    V = k.isFetching && !k.isPending,
    H = p?.labels,
    U,
    W;
  e[37] === P
    ? ((U = e[38]), (W = e[39]))
    : ((U = (e, t) => {
        P.mutate([{ key: e.key, enabled: t }]);
      }),
      (W = (e) => {
        P.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[37] = P),
      (e[38] = U),
      (e[39] = W));
  let re;
  return (
    e[40] !== te ||
    e[41] !== L ||
    e[42] !== k.error ||
    e[43] !== k.isPending ||
    e[44] !== g ||
    e[45] !== C ||
    e[46] !== s ||
    e[47] !== D ||
    e[48] !== B ||
    e[49] !== V ||
    e[50] !== H ||
    e[51] !== U ||
    e[52] !== W ||
    e[53] !== R
      ? ((re = (0, Zt.jsx)(kt, {
          entries: R,
          hostId: s,
          isRemoteHost: B,
          isLoadingProjectRoots: g,
          loadError: k.error,
          isLoading: k.isPending,
          isRefreshing: V,
          projectRootLabels: H,
          projectRoots: C,
          selectedSourceSection: D,
          onSelectSourceSection: L,
          onRefreshHooks: te,
          onToggleHookEnabled: U,
          onTrustHook: W,
        })),
        (e[40] = te),
        (e[41] = L),
        (e[42] = k.error),
        (e[43] = k.isPending),
        (e[44] = g),
        (e[45] = C),
        (e[46] = s),
        (e[47] = D),
        (e[48] = B),
        (e[49] = V),
        (e[50] = H),
        (e[51] = U),
        (e[52] = W),
        (e[53] = R),
        (e[54] = re))
      : (re = e[54]),
    re
  );
}
var Yt, Xt, Zt;
e(() => {
  ((Yt = le()),
    o(),
    a(),
    (Xt = t(b(), 1)),
    U(),
    ae(),
    R(),
    r(),
    O(),
    we(),
    A(),
    Fe(),
    B(),
    ke(),
    qt(),
    (Zt = l()));
})();
export { Jt as HooksSettings };
//# sourceMappingURL=hooks-settings.js.map
