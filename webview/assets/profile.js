import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  AA as i,
  AB as a,
  AP as o,
  Ai as s,
  BP as c,
  BV as l,
  CM as u,
  CS as d,
  DN as f,
  Di as p,
  Ei as m,
  FB as h,
  Fu as g,
  Gj as _,
  IB as v,
  Iu as y,
  JV as b,
  La as x,
  MA as S,
  MP as C,
  NA as w,
  ON as T,
  OP as E,
  QP as D,
  SM as O,
  SP as k,
  TP as A,
  TS as j,
  Ti as ee,
  UE as M,
  VE as N,
  VP as P,
  Wl as F,
  X as I,
  Xl as te,
  Xs as L,
  Z as ne,
  ZR as re,
  Zs as R,
  _T as z,
  aP as ie,
  bB as B,
  bF as V,
  ba as ae,
  bs as oe,
  cM as se,
  dT as H,
  eP as ce,
  en as U,
  eo as le,
  fT as ue,
  fs as de,
  gT as W,
  gv as fe,
  hM as pe,
  hT as me,
  iF as G,
  iP as he,
  io as ge,
  jA as _e,
  kE as K,
  lF as ve,
  lT as ye,
  mv as be,
  oB as xe,
  oP as Se,
  oo as Ce,
  pM as we,
  pT as Te,
  qV as Ee,
  qj as De,
  rF as Oe,
  rP as ke,
  sF as q,
  tn as Ae,
  to as je,
  uM as Me,
  uT as Ne,
  us as Pe,
  vT as Fe,
  va as Ie,
  wB as Le,
  wP as Re,
  wi as ze,
  xa as Be,
  ya as Ve,
  ys as He,
  za as Ue,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Ft as We,
  J as Ge,
  K as Ke,
  Mt as qe,
  Nt as Je,
  Pt as Ye,
  jt as Xe,
} from "./app-initial~app-main~automations-page.js";
import { n as Ze, t as Qe } from "./codex-avatar.js";
import {
  Qa as $e,
  Za as et,
  ct as tt,
  di as nt,
  fi as rt,
  lt as it,
  pi as at,
  ui as ot,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  _ as st,
  _i as ct,
  _t as lt,
  a as ut,
  c as dt,
  d as ft,
  f as pt,
  g as mt,
  gi as ht,
  h as gt,
  l as _t,
  m as vt,
  n as yt,
  o as bt,
  or as xt,
  p as St,
  r as Ct,
  s as wt,
  sr as Tt,
  t as Et,
  u as Dt,
  v as Ot,
  vt as kt,
  y as At,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  oi as jt,
  si as Mt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as Nt,
  h as Pt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  a as Ft,
  o as It,
  r as Lt,
  t as Rt,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js";
import { n as zt, r as Bt } from "./custom-avatars-query.js";
import { n as Vt, t as Ht } from "./plus-sm.js";
import { a as Ut, i as Wt, n as Gt, o as Kt, r as qt, t as Jt } from "./profile-queries.js";
function Yt(e) {
  let t = (0, on.c)(40),
    { insights: n, plugins: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o = ve(),
    s;
  if (
    t[2] !== n.fastModePercent ||
    t[3] !== n.invocations ||
    t[4] !== n.reasoningEffort ||
    t[5] !== n.reasoningEffortPercent ||
    t[6] !== n.skillsExplored ||
    t[7] !== n.totalSkillsUsed ||
    t[8] !== n.totalThreads ||
    t[9] !== o ||
    t[10] !== a
  ) {
    let e = n.invocations?.filter(rn),
      r = n.reasoningEffort,
      i = n.reasoningEffortPercent,
      c = n.fastModePercent != null && n.fastModePercent !== 0,
      l = r != null && i != null && i !== 0,
      u = n.totalSkillsUsed != null && n.totalSkillsUsed !== 0,
      d;
    t[12] === o
      ? (d = t[13])
      : ((d = o.formatMessage({
          id: `profile.activity.ariaLabel`,
          defaultMessage: `Codex activity`,
          description: `Accessible label for the Codex activity profile section`,
        })),
        (t[12] = o),
        (t[13] = d));
    let f;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, J.jsx)(`h2`, {
          className: `text-base leading-5 font-medium text-token-text-primary`,
          children: (0, J.jsx)(q, {
            id: `profile.activity.insights.title`,
            defaultMessage: `Activity insights`,
            description: `Heading for Codex activity insights on the profile page`,
          }),
        })),
        (t[14] = f))
      : (f = t[14]);
    let p;
    t[15] !== c || t[16] !== n.fastModePercent || t[17] !== o
      ? ((p =
          n.fastModePercent === void 0
            ? null
            : (0, J.jsx)(Zt, {
                label: (0, J.jsx)(q, {
                  id: `profile.activity.features.fastMode`,
                  defaultMessage: `Fast Mode`,
                  description: `Fast Mode feature label on the profile page`,
                }),
                isEmpty: !c,
                tooltipContent: (0, J.jsx)(q, {
                  id: `profile.activity.features.fastModeTooltip`,
                  defaultMessage: `How often you use /fast mode`,
                  description: `Tooltip explaining the Fast Mode profile metric`,
                }),
                value:
                  n.fastModePercent != null && n.fastModePercent !== 0
                    ? nn(o, n.fastModePercent)
                    : (0, J.jsx)(Qt, {}),
              })),
        (t[15] = c),
        (t[16] = n.fastModePercent),
        (t[17] = o),
        (t[18] = p))
      : (p = t[18]);
    let m;
    t[19] !== l || t[20] !== o || t[21] !== r || t[22] !== i
      ? ((m =
          r !== void 0 && i !== void 0
            ? (0, J.jsx)(Zt, {
                label: (0, J.jsx)(q, {
                  id: `profile.activity.features.mostUsedReasoning`,
                  defaultMessage: `Most used reasoning`,
                  description: `Most used reasoning effort feature label on the profile page`,
                }),
                isEmpty: !l,
                tooltipContent: (0, J.jsx)(q, {
                  id: `profile.activity.features.reasoningEffortTooltip`,
                  defaultMessage: `Your most used reasoning effort`,
                  description: `Tooltip explaining the reasoning effort profile metric`,
                }),
                value: l
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [(0, J.jsx)(en, { effort: r }), ` · `, nn(o, i)],
                    })
                  : (0, J.jsx)(Qt, {}),
              })
            : null),
        (t[19] = l),
        (t[20] = o),
        (t[21] = r),
        (t[22] = i),
        (t[23] = m))
      : (m = t[23]);
    let h;
    t[24] !== n.skillsExplored || t[25] !== o
      ? ((h =
          n.skillsExplored == null
            ? null
            : (0, J.jsx)(Zt, {
                label: (0, J.jsx)(q, {
                  id: `profile.activity.features.skillsExplored`,
                  defaultMessage: `Skills explored`,
                  description: `Unique skills explored feature label on the profile page`,
                }),
                isEmpty: n.skillsExplored === 0,
                tooltipContent: (0, J.jsx)(q, {
                  id: `profile.activity.features.skillsExploredTooltip`,
                  defaultMessage: `The number of unique skills you've used`,
                  description: `Tooltip explaining the skills explored profile metric`,
                }),
                value:
                  n.skillsExplored === 0 ? (0, J.jsx)($t, {}) : o.formatNumber(n.skillsExplored),
              })),
        (t[24] = n.skillsExplored),
        (t[25] = o),
        (t[26] = h))
      : (h = t[26]);
    let g;
    t[27] !== u || t[28] !== n.totalSkillsUsed || t[29] !== o
      ? ((g =
          n.totalSkillsUsed == null
            ? null
            : (0, J.jsx)(Zt, {
                label: (0, J.jsx)(q, {
                  id: `profile.activity.features.totalSkillsUsed`,
                  defaultMessage: `Total skills used`,
                  description: `Total skills used feature label on the profile page`,
                }),
                isEmpty: !u,
                tooltipContent: (0, J.jsx)(q, {
                  id: `profile.activity.features.totalSkillsUsedTooltip`,
                  defaultMessage: `Total times Codex used a skill`,
                  description: `Tooltip explaining the total skills used profile metric`,
                }),
                value: u ? o.formatNumber(n.totalSkillsUsed) : (0, J.jsx)($t, {}),
              })),
        (t[27] = u),
        (t[28] = n.totalSkillsUsed),
        (t[29] = o),
        (t[30] = g))
      : (g = t[30]);
    let _;
    t[31] !== n.totalThreads || t[32] !== o
      ? ((_ =
          n.totalThreads == null
            ? null
            : (0, J.jsx)(Zt, {
                label: (0, J.jsx)(q, {
                  id: `profile.activity.features.totalThreads`,
                  defaultMessage: `Total threads`,
                  description: `Total threads feature label on the profile page`,
                }),
                isEmpty: n.totalThreads === 0,
                tooltipContent: (0, J.jsx)(q, {
                  id: `profile.activity.features.totalThreadsTooltip`,
                  defaultMessage: `Total unique conversations with Codex`,
                  description: `Tooltip explaining the total threads profile metric`,
                }),
                value: n.totalThreads === 0 ? (0, J.jsx)($t, {}) : o.formatNumber(n.totalThreads),
              })),
        (t[31] = n.totalThreads),
        (t[32] = o),
        (t[33] = _))
      : (_ = t[33]);
    let v;
    (t[34] !== _ || t[35] !== p || t[36] !== m || t[37] !== h || t[38] !== g
      ? ((v = (0, J.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2`,
          children: [
            f,
            (0, J.jsxs)(`dl`, { className: `flex flex-col gap-2`, children: [p, m, h, g, _] }),
          ],
        })),
        (t[34] = _),
        (t[35] = p),
        (t[36] = m),
        (t[37] = h),
        (t[38] = g),
        (t[39] = v))
      : (v = t[39]),
      (s = (0, J.jsxs)(`section`, {
        "aria-label": d,
        className: `grid grid-cols-2 gap-10`,
        children: [
          v,
          e == null
            ? null
            : (0, J.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-2`,
                children: [
                  (0, J.jsx)(`h2`, {
                    className: `text-base leading-5 font-medium text-token-text-primary`,
                    children: (0, J.jsx)(q, {
                      id: `profile.activity.plugins.title`,
                      defaultMessage: `Most used plugins`,
                      description: `Heading for the most used Codex plugins on the profile page`,
                    }),
                  }),
                  e.length === 0
                    ? (0, J.jsxs)(`div`, {
                        className: `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-token-border-light text-base leading-5 text-token-text-tertiary`,
                        children: [
                          (0, J.jsx)(L, { "aria-hidden": !0, className: `icon-xs` }),
                          (0, J.jsxs)(`div`, {
                            className: `flex items-center gap-1`,
                            children: [
                              (0, J.jsx)(q, {
                                id: `profile.activity.plugins.empty`,
                                defaultMessage: `No plugins used yet ·`,
                                description: `Empty state for the most used plugins on the profile page`,
                              }),
                              (0, J.jsx)(fe, {
                                className: `cursor-interaction !text-token-text-tertiary underline underline-offset-2 hover:!text-token-text-secondary`,
                                to: `/skills`,
                                children: (0, J.jsx)(q, {
                                  id: `profile.activity.plugins.browse`,
                                  defaultMessage: `Browse`,
                                  description: `Link to browse plugins from the profile activity empty state`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, J.jsx)(`ul`, {
                        className: `flex flex-col gap-2`,
                        children: e.map((e) =>
                          (0, J.jsx)(
                            Xt,
                            { invocation: e, plugin: an(e, a) },
                            `${e.type}:${e.plugin_id ?? e.plugin_name ?? ``}:${e.skill_id ?? e.skill_name ?? ``}`,
                          ),
                        ),
                      }),
                ],
              }),
        ],
      })),
      (t[2] = n.fastModePercent),
      (t[3] = n.invocations),
      (t[4] = n.reasoningEffort),
      (t[5] = n.reasoningEffortPercent),
      (t[6] = n.skillsExplored),
      (t[7] = n.totalSkillsUsed),
      (t[8] = n.totalThreads),
      (t[9] = o),
      (t[10] = a),
      (t[11] = s));
  } else s = t[11];
  return s;
}
function Xt(e) {
  let t = (0, on.c)(25),
    { invocation: n, plugin: r } = e,
    i = ve(),
    a,
    o,
    s;
  if (t[0] !== n.plugin_name || t[1] !== n.skill_name || t[2] !== n.type) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((a = n.type === `plugin` ? n.plugin_name?.trim() : n.skill_name?.trim()), !a)) {
        s = null;
        break bb0;
      }
      o = (n.type === `skill` && a.split(`:`).pop()) || a;
    }
    ((t[0] = n.plugin_name),
      (t[1] = n.skill_name),
      (t[2] = n.type),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  } else ((a = t[3]), (o = t[4]), (s = t[5]));
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  let c = o,
    l;
  t[6] !== n.plugin_id || t[7] !== n.type || t[8] !== a || t[9] !== r
    ? ((l = (0, J.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center rounded-lg border border-token-border-light bg-token-main-surface-primary`,
        children: (0, J.jsx)(tn, { name: a, plugin: r, pluginId: n.plugin_id, type: n.type }),
      })),
      (t[6] = n.plugin_id),
      (t[7] = n.type),
      (t[8] = a),
      (t[9] = r),
      (t[10] = l))
    : (l = t[10]);
  let u = cn[n.type],
    d;
  t[11] !== c || t[12] !== u
    ? ((d = (0, J.jsxs)(`span`, {
        className: `min-w-0 truncate text-base leading-5 text-token-text-primary`,
        children: [u, c],
      })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] !== l || t[15] !== d
    ? ((f = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: [l, d],
      })),
      (t[14] = l),
      (t[15] = d),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] !== i || t[18] !== n.usage_count
    ? ((p = i.formatMessage(
        {
          id: `profile.activity.plugins.runs`,
          defaultMessage: `{runs, plural, one {# run} other {# runs}}`,
          description: `Run count shown for a plugin on the profile page`,
        },
        { runs: n.usage_count },
      )),
      (t[17] = i),
      (t[18] = n.usage_count),
      (t[19] = p))
    : (p = t[19]);
  let m;
  t[20] === p
    ? (m = t[21])
    : ((m = (0, J.jsx)(`span`, {
        className: `shrink-0 text-base leading-5 text-token-text-secondary tabular-nums`,
        children: p,
      })),
      (t[20] = p),
      (t[21] = m));
  let h;
  return (
    t[22] !== f || t[23] !== m
      ? ((h = (0, J.jsxs)(`li`, {
          className: `flex h-6 min-w-0 items-center justify-between gap-3`,
          children: [f, m],
        })),
        (t[22] = f),
        (t[23] = m),
        (t[24] = h))
      : (h = t[24]),
    h
  );
}
function Zt(e) {
  let t = (0, on.c)(15),
    { isEmpty: n, label: r, tooltipContent: i, value: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (0, J.jsx)(`dt`, {
        className: `min-w-0 truncate text-token-text-secondary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = o));
  let s = n ? `text-token-text-tertiary` : `text-token-text-primary`,
    l;
  t[2] === s ? (l = t[3]) : ((l = c(`shrink-0 tabular-nums`, s)), (t[2] = s), (t[3] = l));
  let u;
  t[4] === a
    ? (u = t[5])
    : ((u = (0, J.jsx)(`span`, { className: `inline-block`, tabIndex: 0, children: a })),
      (t[4] = a),
      (t[5] = u));
  let d;
  t[6] !== u || t[7] !== i
    ? ((d = (0, J.jsx)(we, {
        delayDuration: 250,
        disablePadding: !0,
        side: `top`,
        tooltipClassName: `flex h-[38px] items-center gap-2.5 p-2`,
        tooltipContent: i,
        children: u,
      })),
      (t[6] = u),
      (t[7] = i),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== l || t[10] !== d
    ? ((f = (0, J.jsx)(`dd`, { className: l, children: d })), (t[9] = l), (t[10] = d), (t[11] = f))
    : (f = t[11]);
  let p;
  return (
    t[12] !== o || t[13] !== f
      ? ((p = (0, J.jsxs)(`div`, {
          className: `flex h-6 min-w-0 items-center justify-between gap-3 text-base leading-5`,
          children: [o, f],
        })),
        (t[12] = o),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function Qt() {
  let e = (0, on.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(q, {
          id: `profile.activity.features.notUsed`,
          defaultMessage: `Not used`,
          description: `Empty activity metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function $t() {
  let e = (0, on.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(q, {
          id: `profile.activity.features.none`,
          defaultMessage: `None`,
          description: `Empty count metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function en(e) {
  let t = (0, on.c)(4),
    { effort: n } = e;
  switch (n) {
    case `none`:
    case `minimal`:
    case `low`:
    case `medium`:
    case `high`:
    case `xhigh`:
    case `max`: {
      let e;
      return (
        t[0] === n ? (e = t[1]) : ((e = (0, J.jsx)(ht, { effort: n })), (t[0] = n), (t[1] = e)), e
      );
    }
    default: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, J.jsx)(J.Fragment, { children: n })), (t[2] = n), (t[3] = e)),
        e
      );
    }
  }
}
function tn(e) {
  let t = (0, on.c)(11),
    { name: n, plugin: r, pluginId: i, type: a } = e,
    o;
  t[0] !== n || t[1] !== a
    ? ((o =
        a === `plugin`
          ? (0, sn.createElement)(L, { "aria-hidden": !0, className: `icon-sm` })
          : (0, sn.createElement)(ot(null, { fallbackName: n }), { className: `icon-sm` })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (r?.logoPath != null || r?.logoDarkPath != null) {
    let e;
    return (
      t[3] !== s || t[4] !== r.logoDarkPath || t[5] !== r.logoPath
        ? ((e = (0, J.jsx)(le, {
            alt: ``,
            className: `icon-sm`,
            fallback: s,
            logoDarkUrl: r.logoDarkPath,
            logoUrl: r.logoPath,
          })),
          (t[3] = s),
          (t[4] = r.logoDarkPath),
          (t[5] = r.logoPath),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (r == null) {
    let e;
    if (t[7] !== n || t[8] !== i || t[9] !== a) {
      e = Symbol.for(`react.early_return_sentinel`);
      bb0: {
        let t = ge(i?.split(`@`)[0] ?? (a === `skill` ? n.split(`:`)[0] : n));
        if (t != null) {
          e = (0, sn.createElement)(t, { "aria-hidden": !0, className: `icon-sm` });
          break bb0;
        }
      }
      ((t[7] = n), (t[8] = i), (t[9] = a), (t[10] = e));
    } else e = t[10];
    if (e !== Symbol.for(`react.early_return_sentinel`)) return e;
  }
  return s;
}
function nn(e, t) {
  return e.formatNumber(t / 100, { maximumFractionDigits: 0, style: `percent` });
}
function rn(e) {
  return (
    e.usage_count != null &&
    (e.type === `plugin` ? !!e.plugin_name?.trim() : !!e.skill_name?.trim())
  );
}
function an(e, t) {
  if (e.plugin_id) {
    let n = t.find((t) => t.plugin.id === e.plugin_id);
    if (n != null) return n;
  }
  let n = e.plugin_name ?? (e.type === `skill` ? e.skill_name?.split(`:`)[0] : null);
  return t.find((e) => e.plugin.name === n) ?? null;
}
var on,
  sn,
  J,
  cn,
  ln = e(() => {
    ((on = Ee()),
      P(),
      (sn = t(b(), 1)),
      G(),
      be(),
      Ce(),
      je(),
      pe(),
      ct(),
      R(),
      nt(),
      (J = l()),
      (cn = { plugin: `@`, skill: `$` }));
  }),
  un,
  dn,
  fn = e(() => {
    (t(b()),
      (un = l()),
      (dn = (e) =>
        (0, un.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, un.jsx)(`path`, {
            d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
            fill: `currentColor`,
          }),
        })));
  });
function pn(e) {
  let t = (0, Cn.c)(99),
    { source: n, onCancel: r, onSave: i } = e,
    a = ve(),
    [o, s] = (0, wn.useState)(null),
    [c, l] = (0, wn.useState)(null),
    [u, d] = (0, wn.useState)(!1),
    [h, g] = (0, wn.useState)(!1),
    _;
  t[0] === o
    ? (_ = t[1])
    : ((_ = o == null ? 1 : hn(o.naturalWidth, o.naturalHeight)), (t[0] = o), (t[1] = _));
  let v = _,
    y = o == null ? 1 : o.zoom / v,
    b;
  t[2] !== o || t[3] !== v
    ? ((b = (e) => {
        o != null && s(vn(o, v * e));
      }),
      (t[2] = o),
      (t[3] = v),
      (t[4] = b))
    : (b = t[4]);
  let x = b,
    S;
  t[5] !== o || t[6] !== h || t[7] !== i || t[8] !== n
    ? ((S = async () => {
        if (!(o == null || h)) {
          (g(!0), d(!1));
          try {
            let e = await yn(n, o);
            (g(!1), i(e));
          } catch {
            (g(!1), d(!0));
          }
        }
      }),
      (t[5] = o),
      (t[6] = h),
      (t[7] = i),
      (t[8] = n),
      (t[9] = S))
    : (S = t[9]);
  let C = S,
    w;
  t[10] !== h || t[11] !== r
    ? ((w = (e) => {
        !e && !h && r();
      }),
      (t[10] = h),
      (t[11] = r),
      (t[12] = w))
    : (w = t[12]);
  let T = !h,
    E;
  t[13] === C
    ? (E = t[14])
    : ((E = (e) => {
        (e.preventDefault(), C());
      }),
      (t[13] = C),
      (t[14] = E));
  let D;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(ae, { className: `sr-only`, children: (0, Y.jsx)(q, { ...Pn.title }) })),
      (t[15] = D))
    : (D = t[15]);
  let O;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(Ve, {
        className: `sr-only`,
        children: (0, Y.jsx)(q, {
          id: `profile.photoCrop.description`,
          defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
          description: `Description for the profile picture crop dialog`,
        }),
      })),
      (t[16] = O))
    : (O = t[16]);
  let k;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(m, { title: (0, Y.jsx)(q, { ...Pn.title }) })), (t[17] = k))
    : (k = t[17]);
  let A;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = { maxWidth: En }), (t[18] = A))
    : (A = t[18]);
  let j;
  t[19] !== o || t[20] !== n.dataUrl
    ? ((j =
        o == null
          ? null
          : (0, Y.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 z-0 overflow-hidden`,
              style: { WebkitMaskImage: Nn, maskImage: Nn },
              children: (0, Y.jsxs)(`div`, {
                className: `absolute top-0 left-0 overflow-hidden`,
                style: {
                  height: o.naturalHeight * o.zoom,
                  transform: `translate(${On + o.offsetX}px, ${On + o.offsetY}px)`,
                  width: o.naturalWidth * o.zoom,
                },
                children: [
                  (0, Y.jsx)(`img`, {
                    src: n.dataUrl,
                    alt: ``,
                    className: `block max-w-none select-none`,
                    draggable: !1,
                    style: {
                      filter: `blur(${Mn}px)`,
                      height: `calc(100% + ${Mn * 2}px)`,
                      transform: `translate(${-Mn}px, ${-Mn}px)`,
                      width: `calc(100% + ${Mn * 2}px)`,
                    },
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute inset-0 bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,transparent)]`,
                  }),
                ],
              }),
            })),
      (t[19] = o),
      (t[20] = n.dataUrl),
      (t[21] = j))
    : (j = t[21]);
  let M;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { height: Tn, width: Tn }), (t[22] = M))
    : (M = t[22]);
  let N;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        s(mn(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight));
      }),
      (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] === o
    ? (P = t[25])
    : ((P = (e) => {
        o != null &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          l({
            offsetX: o.offsetX,
            offsetY: o.offsetY,
            pointerId: e.pointerId,
            pointerX: e.clientX,
            pointerY: e.clientY,
          }));
      }),
      (t[24] = o),
      (t[25] = P));
  let F;
  t[26] === c
    ? (F = t[27])
    : ((F = (e) => {
        c != null &&
          e.pointerId === c.pointerId &&
          s((t) =>
            t == null
              ? t
              : {
                  ...t,
                  offsetX: _n(c.offsetX + e.clientX - c.pointerX, t.naturalWidth, t.zoom),
                  offsetY: _n(c.offsetY + e.clientY - c.pointerY, t.naturalHeight, t.zoom),
                },
          );
      }),
      (t[26] = c),
      (t[27] = F));
  let I, te;
  t[28] === c?.pointerId
    ? ((I = t[29]), (te = t[30]))
    : ((I = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (te = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (t[28] = c?.pointerId),
      (t[29] = I),
      (t[30] = te));
  let L;
  t[31] === o
    ? (L = t[32])
    : ((L =
        o == null
          ? void 0
          : {
              height: o.naturalHeight * o.zoom,
              transform: `translate(${o.offsetX}px, ${o.offsetY}px)`,
              width: o.naturalWidth * o.zoom,
            }),
      (t[31] = o),
      (t[32] = L));
  let ne;
  t[33] !== n.dataUrl || t[34] !== P || t[35] !== F || t[36] !== I || t[37] !== te || t[38] !== L
    ? ((ne = (0, Y.jsx)(`div`, {
        className: `relative z-10 overflow-hidden rounded-full bg-token-bg-secondary ring-1 ring-token-border-light`,
        style: M,
        children: (0, Y.jsx)(`img`, {
          src: n.dataUrl,
          alt: ``,
          className: `absolute top-0 left-0 max-h-none max-w-none cursor-interaction touch-none select-none`,
          draggable: !1,
          onLoad: N,
          onPointerDown: P,
          onPointerMove: F,
          onPointerUp: I,
          onPointerCancel: te,
          style: L,
        }),
      })),
      (t[33] = n.dataUrl),
      (t[34] = P),
      (t[35] = F),
      (t[36] = I),
      (t[37] = te),
      (t[38] = L),
      (t[39] = ne))
    : (ne = t[39]);
  let re;
  t[40] !== j || t[41] !== ne
    ? ((re = (0, Y.jsx)(p, {
        className: `items-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `relative isolate flex aspect-square w-full items-center justify-center`,
          style: A,
          children: [j, ne],
        }),
      })),
      (t[40] = j),
      (t[41] = ne),
      (t[42] = re))
    : (re = t[42]);
  let R;
  t[43] === a
    ? (R = t[44])
    : ((R = a.formatMessage({
        id: `profile.photoCrop.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the profile picture zoom out button`,
      })),
      (t[43] = a),
      (t[44] = R));
  let z = o == null || h || y <= 1,
    ie;
  t[45] !== x || t[46] !== y
    ? ((ie = () => {
        x(Math.max(1, y - 0.1));
      }),
      (t[45] = x),
      (t[46] = y),
      (t[47] = ie))
    : (ie = t[47]);
  let B;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Y.jsx)(dn, { className: `icon-sm` })), (t[48] = B))
    : (B = t[48]);
  let V;
  t[49] !== R || t[50] !== z || t[51] !== ie
    ? ((V = (0, Y.jsx)(f, {
        "aria-label": R,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: z,
        size: `iconSm`,
        onClick: ie,
        children: B,
      })),
      (t[49] = R),
      (t[50] = z),
      (t[51] = ie),
      (t[52] = V))
    : (V = t[52]);
  let oe;
  t[53] === a
    ? (oe = t[54])
    : ((oe = a.formatMessage({
        id: `profile.photoCrop.zoomLabel`,
        defaultMessage: `Zoom profile picture`,
        description: `Accessible label for the profile picture crop zoom slider`,
      })),
      (t[53] = a),
      (t[54] = oe));
  let se = o == null || h,
    H;
  t[55] === x
    ? (H = t[56])
    : ((H = (e) => {
        x(Number(e.target.value));
      }),
      (t[55] = x),
      (t[56] = H));
  let ce;
  t[57] !== oe || t[58] !== se || t[59] !== H || t[60] !== y
    ? ((ce = (0, Y.jsx)(`input`, {
        type: `range`,
        "aria-label": oe,
        className: `h-0.5 flex-1 appearance-none rounded-full bg-token-border-light [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        disabled: se,
        min: 1,
        max: 3,
        step: 0.01,
        value: y,
        onChange: H,
      })),
      (t[57] = oe),
      (t[58] = se),
      (t[59] = H),
      (t[60] = y),
      (t[61] = ce))
    : (ce = t[61]);
  let U;
  t[62] === a
    ? (U = t[63])
    : ((U = a.formatMessage({
        id: `profile.photoCrop.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the profile picture zoom in button`,
      })),
      (t[62] = a),
      (t[63] = U));
  let le = o == null || h || y >= 3,
    ue;
  t[64] !== x || t[65] !== y
    ? ((ue = () => {
        x(Math.min(3, y + 0.1));
      }),
      (t[64] = x),
      (t[65] = y),
      (t[66] = ue))
    : (ue = t[66]);
  let de;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Y.jsx)(Ht, { className: `icon-sm` })), (t[67] = de))
    : (de = t[67]);
  let W;
  t[68] !== U || t[69] !== le || t[70] !== ue
    ? ((W = (0, Y.jsx)(f, {
        "aria-label": U,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: le,
        size: `iconSm`,
        onClick: ue,
        children: de,
      })),
      (t[68] = U),
      (t[69] = le),
      (t[70] = ue),
      (t[71] = W))
    : (W = t[71]);
  let fe;
  t[72] !== V || t[73] !== ce || t[74] !== W
    ? ((fe = (0, Y.jsx)(p, {
        className: `relative z-10 items-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex w-full max-w-[276px] items-center gap-5`,
          children: [V, ce, W],
        }),
      })),
      (t[72] = V),
      (t[73] = ce),
      (t[74] = W),
      (t[75] = fe))
    : (fe = t[75]);
  let pe;
  t[76] === u
    ? (pe = t[77])
    : ((pe = u
        ? (0, Y.jsx)(p, {
            className: `items-center`,
            children: (0, Y.jsx)(`div`, {
              className: `text-center text-sm leading-5 text-token-error-foreground`,
              role: `alert`,
              children: (0, Y.jsx)(q, {
                id: `profile.photoCrop.error`,
                defaultMessage: `Unable to process the profile picture`,
                description: `Error shown when profile picture cropping fails`,
              }),
            }),
          })
        : null),
      (t[76] = u),
      (t[77] = pe));
  let me;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Y.jsx)(q, {
        id: `profile.photoCrop.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile picture cropping`,
      })),
      (t[78] = me))
    : (me = t[78]);
  let G;
  t[79] !== h || t[80] !== r
    ? ((G = (0, Y.jsx)(f, { color: `ghost`, disabled: h, onClick: r, children: me })),
      (t[79] = h),
      (t[80] = r),
      (t[81] = G))
    : (G = t[81]);
  let he = o == null,
    ge;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Y.jsx)(q, {
        id: `profile.photoCrop.save`,
        defaultMessage: `Save`,
        description: `Button that saves a cropped profile picture`,
      })),
      (t[82] = ge))
    : (ge = t[82]);
  let _e;
  t[83] !== h || t[84] !== he
    ? ((_e = (0, Y.jsx)(f, {
        type: `submit`,
        color: `primary`,
        disabled: he,
        loading: h,
        children: ge,
      })),
      (t[83] = h),
      (t[84] = he),
      (t[85] = _e))
    : (_e = t[85]);
  let K;
  t[86] !== G || t[87] !== _e
    ? ((K = (0, Y.jsxs)(ee, { children: [G, _e] })), (t[86] = G), (t[87] = _e), (t[88] = K))
    : (K = t[88]);
  let ye;
  t[89] !== re || t[90] !== fe || t[91] !== pe || t[92] !== K || t[93] !== E
    ? ((ye = (0, Y.jsxs)(ze, {
        as: `form`,
        className: `gap-5`,
        onSubmit: E,
        children: [D, O, k, re, fe, pe, K],
      })),
      (t[89] = re),
      (t[90] = fe),
      (t[91] = pe),
      (t[92] = K),
      (t[93] = E),
      (t[94] = ye))
    : (ye = t[94]);
  let be;
  return (
    t[95] !== w || t[96] !== ye || t[97] !== T
      ? ((be = (0, Y.jsx)(Ie, {
          open: !0,
          onOpenChange: w,
          showDialogClose: T,
          size: `default`,
          children: ye,
        })),
        (t[95] = w),
        (t[96] = ye),
        (t[97] = T),
        (t[98] = be))
      : (be = t[98]),
    be
  );
}
function mn(e, t) {
  let n = hn(e, t);
  return { naturalHeight: t, naturalWidth: e, offsetX: gn(e, n), offsetY: gn(t, n), zoom: n };
}
function hn(e, t) {
  return Math.max(Tn / e, Tn / t);
}
function gn(e, t) {
  return (Tn - e * t) / 2;
}
function _n(e, t, n) {
  return Math.min(0, Math.max(Tn - t * n, e));
}
function vn(e, t) {
  let n = (Tn / 2 - e.offsetX) / e.zoom,
    r = (Tn / 2 - e.offsetY) / e.zoom;
  return {
    ...e,
    offsetX: _n(Tn / 2 - n * t, e.naturalWidth, t),
    offsetY: _n(Tn / 2 - r * t, e.naturalHeight, t),
    zoom: t,
  };
}
async function yn(e, t) {
  let n = await bn(e.dataUrl),
    r = document.createElement(`canvas`);
  ((r.height = Dn), (r.width = Dn));
  let i = r.getContext(`2d`);
  if (i == null) throw Error(`Unable to create profile photo crop canvas`);
  i.drawImage(n, -t.offsetX / t.zoom, -t.offsetY / t.zoom, Tn / t.zoom, Tn / t.zoom, 0, 0, Dn, Dn);
  let a = Sn(e.contentType),
    o = r.toDataURL(a, 0.92),
    s = await xn(r, a);
  return { photo: new File([s], e.filename, { type: s.type }), previewUrl: o };
}
function bn(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => {
      t(r);
    }),
      (r.onerror = () => {
        n(Error(`Unable to load profile photo`));
      }),
      (r.src = e));
  });
}
function xn(e, t) {
  return new Promise((n, r) => {
    e.toBlob(
      (e) => {
        if (e == null) {
          r(Error(`Unable to crop profile photo`));
          return;
        }
        n(e);
      },
      t,
      0.92,
    );
  });
}
function Sn(e) {
  return e === `image/png` || e === `image/webp` ? e : `image/jpeg`;
}
var Cn,
  wn,
  Y,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn = e(() => {
    ((Cn = Ee()),
      (wn = t(b(), 1)),
      G(),
      T(),
      Be(),
      s(),
      fn(),
      Vt(),
      (Y = l()),
      (Tn = 220),
      (En = 360),
      (Dn = 512),
      (On = (En - Tn) / 2),
      (kn = Tn / 2),
      (An = En / 2),
      (jn = An - 32),
      (Mn = 2),
      (Nn = `radial-gradient(circle at center, transparent 0 ${kn - 0.5}px, black ${kn}px ${jn}px, transparent ${An}px)`),
      (Pn = Oe({
        title: {
          id: `profile.photoCrop.title`,
          defaultMessage: `Adjust your image`,
          description: `Title for the profile picture crop dialog`,
        },
      })));
  }),
  In,
  Ln = e(() => {
    In = `` + new URL(`OpenAISans-Medium-B7nJY_kG.woff2`, import.meta.url).href;
  }),
  Rn,
  zn = e(() => {
    Rn = `` + new URL(`OpenAISans-Regular-DFZxHTKM.woff2`, import.meta.url).href;
  }),
  Bn,
  Vn = e(() => {
    Bn = `<svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_934_12058)">
<path d="M11.9434 0.430908C13.7624 0.431247 15.4294 1.09161 16.7158 2.18188C17.1422 2.10495 17.584 2.06277 18.0322 2.06274C22.11 2.0642 25.4164 5.37117 25.417 9.44946C25.4169 9.89743 25.3728 10.3366 25.2959 10.762C26.3869 12.0489 27.0486 13.7176 27.0488 15.5374C27.0482 18.7417 25.0061 21.4654 22.1562 22.4885C21.1331 25.3386 18.4094 27.3806 15.2051 27.3811C13.3855 27.3809 11.7185 26.7191 10.4316 25.6282C10.0059 25.705 9.56539 25.7491 9.11719 25.7493C5.03873 25.7487 1.73312 22.4413 1.73242 18.3625C1.73247 17.9141 1.77453 17.4743 1.85156 17.0481C0.83754 15.8516 0.194518 14.3264 0.109375 12.6555L0.0986328 12.2747C0.0989925 9.07057 2.13971 6.34328 4.98926 5.31958C6.01324 2.47012 8.73955 0.430975 11.9434 0.430908ZM11.9434 2.59985C9.53065 2.59992 7.49693 4.23961 6.90137 6.46704C6.80098 6.84049 6.5082 7.13327 6.13477 7.23364C3.90815 7.82949 2.26795 9.86235 2.26758 12.2747C2.26791 13.7154 2.85272 15.0198 3.79785 15.9651C4.07029 16.2386 4.17665 16.6379 4.07715 17.011C3.962 17.4422 3.89948 17.896 3.89941 18.3625C3.90012 21.2437 6.23609 23.5797 9.11719 23.5803C9.58367 23.5802 10.0384 23.5198 10.4697 23.4045L10.6113 23.3762C10.9409 23.3342 11.2757 23.4453 11.5146 23.6838C12.4599 24.6287 13.7645 25.2111 15.2051 25.2112C17.6173 25.2107 19.6506 23.5723 20.2461 21.345L20.292 21.2083C20.4202 20.9003 20.6853 20.6662 21.0127 20.5784C23.2396 19.9828 24.8802 17.9494 24.8809 15.5374C24.8807 14.0967 24.2963 12.7921 23.3516 11.8469C23.0782 11.5733 22.9726 11.1737 23.0723 10.8C23.1875 10.3688 23.2488 9.91531 23.249 9.44946C23.2484 6.56834 20.9112 4.23251 18.0303 4.23169C17.5631 4.23177 17.1084 4.29242 16.6777 4.40747C16.3048 4.50684 15.9063 4.40063 15.6328 4.12817C14.747 3.24249 13.5458 2.67278 12.2129 2.60474L11.9434 2.59985ZM71.5488 20.428H69.127V19.3098C68.5117 20.1111 67.3381 20.6145 66.1279 20.6145C63.5186 20.6145 61.4688 18.5649 61.4688 15.7708C61.4688 12.9765 63.5199 10.927 66.1279 10.927C67.376 10.927 68.5118 11.3173 69.127 12.0999V7.38501H71.5488V20.428ZM43.4658 7.19751C46.6147 7.19769 49.1299 9.15467 49.5967 11.8381H46.9316C46.5403 10.6077 45.2165 9.60083 43.5029 9.60083C41.1554 9.6009 39.4972 11.4086 39.4971 13.9045C39.4971 16.4019 41.1555 18.2092 43.541 18.2092C45.2545 18.2092 46.5592 17.2208 47.0059 15.9729H49.6514C49.1482 18.6928 46.6887 20.6135 43.4844 20.6135C39.6093 20.6135 36.9073 17.6152 36.9072 13.9075C36.9072 10.1973 39.6838 7.19751 43.4658 7.19751ZM55.5059 10.9241C58.281 10.9242 60.4246 13.1222 60.4248 15.7678C60.4248 18.4135 58.2824 20.6134 55.5059 20.6135C52.7306 20.6135 50.5861 18.4141 50.5859 15.7698C50.5859 13.1226 52.7305 10.9241 55.5059 10.9241ZM77.7354 10.9241C80.6416 10.9241 82.4121 13.0484 82.4121 15.5823V16.5334H75.3701C75.5941 17.7812 76.5439 18.6563 77.793 18.6565C78.7995 18.6565 79.6373 18.1722 79.9355 17.4827H82.3008C81.8164 19.1408 80.2513 20.6135 77.8105 20.6135C74.8292 20.6133 73.0041 18.507 73.0039 15.7698C73.0039 12.9931 75.0895 10.9242 77.7354 10.9241ZM87.5 13.9807L89.4375 11.1116H92.1016L88.8955 15.6565L92.249 20.426H89.3984L87.3857 17.4631L85.2998 20.426L82.6172 20.427L85.9902 15.7317L82.7109 11.1106H85.5625L87.5 13.9807ZM66.5381 13.0315C65.1591 13.0316 63.9287 14.1126 63.9287 15.7708C63.9288 17.429 65.1594 18.51 66.5371 18.51C67.9159 18.5099 69.1464 17.4276 69.1465 15.7708C69.1465 14.1139 67.9157 13.0315 66.5381 13.0315ZM55.5059 13.0842C54.2214 13.0842 52.9902 14.1287 52.9902 15.7668C52.9902 17.4074 54.2211 18.4504 55.5068 18.4504L55.7461 18.4387C56.9406 18.3179 58.0215 17.3036 58.0215 15.7668C58.0215 14.1276 56.7916 13.0844 55.5059 13.0842ZM8.25098 9.57251C8.76529 9.26426 9.43267 9.43133 9.74121 9.94556L11.7822 13.3479C11.9883 13.6917 11.9886 14.1223 11.7822 14.4661L9.74121 17.8674C9.43268 18.3811 8.76506 18.5491 8.25098 18.2415C7.73681 17.9329 7.56986 17.2645 7.87793 16.7502L9.58301 13.9055L7.87793 11.0618C7.56977 10.5476 7.7371 9.88117 8.25098 9.57251ZM19.0176 16.2219C19.6172 16.2219 20.103 16.7084 20.1035 17.3079C20.1035 17.9078 19.6175 18.3948 19.0176 18.3948H14.9346C14.3347 18.3948 13.8486 17.9078 13.8486 17.3079C13.849 16.7084 14.335 16.2219 14.9346 16.2219H19.0176ZM77.792 12.8811C76.6181 12.8812 75.6468 13.6636 75.3877 14.8186H80.1016C79.9708 13.6825 79.0401 12.8811 77.792 12.8811Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_934_12058">
<rect width="92" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  });
function Hn() {
  let e = document.documentElement,
    t = window.getComputedStyle(e),
    n = ar(e);
  try {
    return {
      accentColor: rr(
        t,
        n,
        `color`,
        [`--codex-base-accent`, `--color-token-primary`],
        Jr.accentColor,
      ),
      backgroundColor: rr(
        t,
        n,
        `backgroundColor`,
        [`--codex-base-surface`, `--color-token-main-surface-primary`],
        Jr.backgroundColor,
      ),
      primaryTextColor: rr(
        t,
        n,
        `color`,
        [`--codex-base-ink`, `--color-token-text-primary`],
        Jr.primaryTextColor,
      ),
      secondaryTextColor: rr(
        t,
        n,
        `color`,
        [`--color-token-text-secondary`, `--color-token-description-foreground`],
        Jr.secondaryTextColor,
      ),
    };
  } finally {
    n.remove();
  }
}
async function Un({
  displayNameLabel: e,
  imageUrl: t,
  initials: n,
  petImageUrl: r,
  stats: i,
  theme: a,
  usernameLabel: o,
  usageCells: s,
}) {
  let c = await Kn(
    {
      displayNameLabel: e,
      imageUrl: t,
      initials: n,
      stats: i,
      theme: a,
      usernameLabel: o,
      usageCells: s,
    },
    r != null,
  );
  return r == null ? _r(c) : qn(c, r);
}
async function Wn(e) {
  let t = await Kn(e, !0);
  return { createImageBlob: (e) => qn(t, e) };
}
function Gn(e) {
  let t = URL.createObjectURL(e),
    n = document.createElement(`a`);
  ((n.href = t), (n.download = vr), n.click(), window.setTimeout(() => URL.revokeObjectURL(t), 0));
}
async function Kn(
  {
    displayNameLabel: e,
    imageUrl: t,
    initials: n,
    stats: r,
    theme: i,
    usernameLabel: a,
    usageCells: o,
  },
  s,
) {
  let c = document.createElement(`canvas`);
  ((c.width = yr * xr), (c.height = br * xr));
  let l = c.getContext(`2d`);
  if (l == null) throw Error(`Unable to create profile share card canvas`);
  let [u, d] = await Promise.all([
    t == null ? Promise.resolve(null) : pr(t),
    hr(cr(i.secondaryTextColor), null),
    Jn(),
  ]);
  if (d == null) throw Error(`Unable to load Codex watermark`);
  let f = ir(i);
  return (
    l.scale(xr, xr),
    Xn(l, i),
    Zn(l, u, n, i),
    $n(l, e, a, i, s),
    er(l, d),
    tr(l, o, f.levelColors),
    nr(l, r, i, f.statDividerColor),
    c
  );
}
async function qn(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = yr * xr), (n.height = br * xr));
  let r = n.getContext(`2d`);
  if (r == null) throw Error(`Unable to create profile share card canvas`);
  return (r.drawImage(e, 0, 0), r.scale(xr, xr), Qn(r, await pr(t)), _r(n));
}
async function Jn() {
  (await Promise.all([Yn(Rn, `400`), Yn(In, `500`)]), await document.fonts.ready);
}
async function Yn(e, t) {
  let n = new FontFace(Pr, `url(${e})`, { weight: t });
  (document.fonts.add(n), await n.load());
}
function Xn(e, t) {
  ((e.fillStyle = t.backgroundColor), dr(e, 0, 0, yr, br, Cr), e.fill());
}
function Zn(e, t, n, r) {
  let i = Sr,
    a = Sr;
  (e.save(),
    dr(e, i, a, wr, wr, wr / 2),
    e.clip(),
    t == null
      ? ((e.fillStyle = r.accentColor),
        e.fillRect(i, a, wr, wr),
        (e.fillStyle = r.backgroundColor),
        (e.font = `500 16px 'OpenAI Sans', system-ui, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(n, i + wr / 2, a + wr / 2))
      : ur(e, t, i, a, wr, wr),
    e.restore());
}
function Qn(e, t) {
  t != null &&
    (e.save(),
    (e.imageSmoothingEnabled = !1),
    e.drawImage(t, 0, 0, t.naturalWidth / kr, t.naturalHeight / Ar, Dr, Or, Tr, Er),
    e.restore());
}
function $n(e, t, n, r, i) {
  let a = Sr + wr + (i ? jr : 12),
    o = Vr - a - 12;
  e.fillStyle = r.primaryTextColor;
  for (
    let n = Fr;
    n >= Ir &&
    ((e.font = `500 ${n}px 'OpenAI Sans', system-ui, sans-serif`),
    !(n === Ir || e.measureText(t).width <= o));
    --n
  );
  ((e.textAlign = `left`),
    (e.textBaseline = `middle`),
    e.fillText(fr(e, t, o), a, Lr),
    (e.fillStyle = r.secondaryTextColor),
    (e.font = `400 ${Rr}px 'OpenAI Sans', system-ui, sans-serif`),
    e.fillText(fr(e, n, o), a, zr));
}
function er(e, t) {
  e.drawImage(t, Vr, Hr, Mr, Nr);
}
function tr(e, t, n) {
  for (let r = 0; r < 182; r += 1) {
    let i = Math.floor(r / 7),
      a = r % 7,
      o = Sr + i * Gr,
      s = Ur + a * Gr,
      c = t[r];
    c != null && ((e.fillStyle = n[c]), dr(e, o, s, Wr, Wr, 4), e.fill());
  }
}
function nr(e, t, n, r) {
  t.forEach((t, i) => {
    i > 0 && ((e.fillStyle = r), dr(e, Sr + i * qr, Kr + 2, 1, 40, 0.5), e.fill());
    let a = Sr + i * qr + qr / 2,
      o = qr - 8;
    ((e.fillStyle = n.primaryTextColor),
      (e.font = `500 18px 'OpenAI Sans', system-ui, sans-serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(fr(e, t.value, o), a, Kr + 13),
      (e.fillStyle = n.secondaryTextColor),
      (e.font = `400 14px 'OpenAI Sans', system-ui, sans-serif`),
      e.fillText(fr(e, t.label, o), a, Kr + 37));
  });
}
function rr(e, t, n, r, i) {
  for (let i of r) {
    let r = e.getPropertyValue(i).trim();
    if (r.length === 0) continue;
    t.style[n] = `var(${i})`;
    let a = or(t, n);
    if (a != null) return a;
    if (!sr(r)) return r;
  }
  return i;
}
function ir(e) {
  let t = ar(document.documentElement),
    n = (e) => ((t.style.color = e), or(t, `color`) ?? e);
  try {
    return {
      levelColors: {
        0: n(lr(e.backgroundColor, e.primaryTextColor, Yr[0])),
        1: n(lr(e.backgroundColor, e.accentColor, Yr[1])),
        2: n(lr(e.backgroundColor, e.accentColor, Yr[2])),
        3: n(lr(e.backgroundColor, e.accentColor, Yr[3])),
        4: e.accentColor,
      },
      statDividerColor: n(lr(`transparent`, e.primaryTextColor, 0.06)),
    };
  } finally {
    t.remove();
  }
}
function ar(e) {
  let t = document.createElement(`div`);
  return (
    (t.style.height = `0`),
    (t.style.inset = `0`),
    (t.style.opacity = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.position = `absolute`),
    (t.style.width = `0`),
    (document.body ?? e).appendChild(t),
    t
  );
}
function or(e, t) {
  if (e.style[t].length === 0) return null;
  let n = window.getComputedStyle(e)[t].trim();
  return sr(n) ? null : n;
}
function sr(e) {
  return e.length === 0 || e.includes(`var(`);
}
function cr(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(Bn.replaceAll(`currentColor`, e))}`;
}
function lr(e, t, n) {
  return `color-mix(in srgb, ${t} ${Math.round(n * 100)}%, ${e})`;
}
function ur(e, t, n, r, i, a) {
  let o = t.naturalWidth || t.width,
    s = t.naturalHeight || t.height,
    c = o / s,
    l = i / a,
    u = c > l ? s * l : o,
    d = c > l ? s : o / l,
    f = (o - u) / 2,
    p = (s - d) / 2;
  e.drawImage(t, f, p, u, d, n, r, i, a);
}
function dr(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.arcTo(t + r, n, t + r, n + a, a),
    e.lineTo(t + r, n + i - a),
    e.arcTo(t + r, n + i, t + r - a, n + i, a),
    e.lineTo(t + a, n + i),
    e.arcTo(t, n + i, t, n + i - a, a),
    e.lineTo(t, n + a),
    e.arcTo(t, n, t + a, n, a),
    e.closePath());
}
function fr(e, t, n) {
  if (e.measureText(t).width <= n) return t;
  let r = t;
  for (; r.length > 1 && e.measureText(`${r}…`).width > n; ) r = r.slice(0, -1);
  return `${r}…`;
}
async function pr(e) {
  return (await hr(e, gr(e) ? `anonymous` : null)) ?? (await mr(e));
}
async function mr(e) {
  if (!gr(e)) return null;
  try {
    let t = await ke.getInstance().get(e),
      n = Xr.parse(t.body);
    return await hr(`data:${n.contentType.trim() || `image/png`};base64,${n.base64}`, null);
  } catch {
    return null;
  }
}
function hr(e, t) {
  return new Promise((n) => {
    let r = new Image();
    (t != null && (r.crossOrigin = t),
      (r.onload = () => {
        n(r);
      }),
      (r.onerror = () => {
        n(null);
      }),
      (r.src = e));
  });
}
function gr(e) {
  return /^https?:\/\//i.test(e);
}
function _r(e) {
  return new Promise((t, n) => {
    e.toBlob((e) => {
      if (e == null) {
        n(Error(`Unable to create profile share card image`));
        return;
      }
      t(e);
    }, `image/png`);
  });
}
var vr,
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
  Zr = e(() => {
    (xe(),
      Ln(),
      zn(),
      Vn(),
      he(),
      At(),
      (vr = `codex-profile-card.png`),
      (yr = 499),
      (br = 306),
      (xr = 2),
      (Sr = 32),
      (Cr = 32),
      (wr = 52),
      (Tr = 36),
      (Er = 40),
      (Dr = Sr + wr - 10),
      (Or = Sr + wr - 28),
      (kr = 8),
      (Ar = 9),
      (jr = 32),
      (Mr = 92),
      (Nr = 28),
      (Pr = `OpenAI Sans`),
      (Fr = 20),
      (Ir = 15),
      (Lr = 50),
      (Rr = 14),
      (zr = 70),
      (Br = yr - Sr),
      (Vr = Br - Mr),
      (Hr = Sr + (wr - Nr) / 2),
      (Ur = 96),
      (Wr = 13.9),
      (Gr = (Br - Sr - Wr) / 25),
      (Kr = 232),
      (qr = (yr - 2 * Sr) / 4),
      (Jr = {
        accentColor: `#5865f2`,
        backgroundColor: `#ffffff`,
        primaryTextColor: `#0d0d0d`,
        secondaryTextColor: `#5d5d5d`,
      }),
      (Yr = { 0: 0.1, 1: 0.28, 2: 0.45, 3: 0.68, 4: 1 }),
      (Xr = B({ base64: Le().min(1), contentType: Le() })));
  }),
  Qr,
  $r,
  ei = e(() => {
    (t(b()),
      (Qr = l()),
      ($r = (e) =>
        (0, Qr.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Qr.jsx)(`path`, {
            d: `M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  ti,
  ni,
  ri = e(() => {
    (t(b()),
      (ti = l()),
      (ni = (e) =>
        (0, ti.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ti.jsx)(`path`, {
            d: `M16.6337 2.90073C16.6337 4.04257 15.708 4.96822 14.5662 4.96822C13.5883 4.96822 12.769 4.28937 12.5539 3.37723C11.3544 3.54198 10.4276 4.57344 10.4276 5.81744L10.4275 5.82524C12.2767 5.89387 13.9672 6.41475 15.3066 7.24346C15.7984 6.86574 16.4141 6.64121 17.0822 6.64121C18.6936 6.64121 20 7.94757 20 9.55905C20 10.7212 19.3206 11.7247 18.3373 12.1939C18.2458 15.5849 14.5521 18.3126 10.0089 18.3126C5.46956 18.3126 1.77825 15.5894 1.68081 12.2025C0.687757 11.7369 0 10.7283 0 9.55905C0 7.94757 1.30636 6.64121 2.91785 6.64121C3.58954 6.64121 4.20823 6.86817 4.70139 7.24959C6.02803 6.42618 7.70059 5.90522 9.53121 5.82759L9.531 5.8186C9.531 4.084 10.853 2.65175 12.5422 2.47676C12.7378 1.53829 13.5697 0.833252 14.5662 0.833252C15.708 0.833252 16.6337 1.7589 16.6337 2.90073ZM5.97607 12.9003C6.79403 12.9003 7.49631 12.5185 7.5449 11.468V11.4692C7.59349 10.4186 6.96989 9.54167 6.15192 9.54167C5.33395 9.54167 4.63168 10.2289 4.58309 11.2794C4.5345 12.3299 5.1581 12.9003 5.97607 12.9003ZM14.0371 12.9003C14.8551 12.9003 15.4787 12.3299 15.4301 11.2794C15.3815 10.2289 14.6793 9.54167 13.8613 9.54167C13.0433 9.54167 12.4197 10.4186 12.4683 11.4692V11.468C12.5169 12.5185 13.2192 12.9003 14.0371 12.9003ZM10.0057 13.7172C8.99218 13.7172 8.02033 13.7669 7.12254 13.8583C6.96866 13.8734 6.87148 14.033 6.93164 14.1753C7.43492 15.3774 8.62195 16.222 10.0057 16.222C11.3894 16.222 12.5776 15.3774 13.0797 14.1753C13.1399 14.033 13.0415 13.8734 12.8888 13.8583C11.9899 13.7669 11.0192 13.7172 10.0057 13.7172Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  ii,
  ai,
  oi = e(() => {
    (t(b()),
      (ii = l()),
      (ai = (e) =>
        (0, ii.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ii.jsx)(`path`, {
            d: `M14.6408 2.70825H17.1147L11.7099 8.8856L18.0682 17.2916H13.0897L9.19034 12.1934L4.72859 17.2916H2.25316L8.03414 10.6842L1.93457 2.70825H7.03949L10.5642 7.36819L14.6408 2.70825ZM13.7725 15.8108H15.1433L6.29461 4.11124H4.82357L13.7725 15.8108Z`,
            fill: `currentColor`,
          }),
        })));
  });
function si(e) {
  let t = (0, pi.c)(112),
    {
      imageUrl: n,
      isLoading: r,
      open: i,
      petSwitcher: a,
      selectedSocialPlatform: s,
      getSocialDraftUrl: l,
      onCopy: u,
      onDownload: d,
      onDismissShareInstructions: p,
      onOpenChange: m,
      onOpenSocialDraft: h,
      onSelectSocialPlatform: g,
    } = e,
    _ = ve(),
    v = E(0),
    y = E(0),
    b = A(v, vi),
    x = A(y, vi),
    w;
  t[0] !== v || t[1] !== y
    ? ((w = (e) => {
        let t = e.currentTarget.getBoundingClientRect(),
          n = Math.min(Math.max((e.clientX - t.left) / t.width, 0), 1),
          r = Math.min(Math.max((e.clientY - t.top) / t.height, 0), 1);
        (v.set(-(r * 2 - 1) * yi), y.set((n * 2 - 1) * bi));
      }),
      (t[0] = v),
      (t[1] = y),
      (t[2] = w))
    : (w = t[2]);
  let T = w,
    D;
  t[3] !== v || t[4] !== y
    ? ((D = () => {
        (v.set(0), y.set(0));
      }),
      (t[3] = v),
      (t[4] = y),
      (t[5] = D))
    : (D = t[5]);
  let O = D,
    k;
  t[6] === O
    ? (k = t[7])
    : ((k = (e) => {
        let t = e.currentTarget.querySelector(`[data-profile-share-card-preview-hover-target]`);
        (e.target instanceof Node && t?.contains(e.target) === !0) || O();
      }),
      (t[6] = O),
      (t[7] = k));
  let j = k,
    ee = s == null ? xi : Si,
    M;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { style: { height: `100dvh`, maxWidth: `none`, width: `100vw`, zIndex: 51 } }),
      (t[8] = M))
    : (M = t[8]);
  let N;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(ae, {
        className: `sr-only`,
        children: (0, X.jsx)(q, {
          id: `profile.shareCard.preview.title`,
          defaultMessage: `Share profile card`,
          description: `Accessible title for the profile share card preview dialog`,
        }),
      })),
      (t[9] = N))
    : (N = t[9]);
  let P;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, X.jsx)(Ve, {
        className: `sr-only`,
        children: (0, X.jsx)(q, {
          id: `profile.shareCard.preview.description`,
          defaultMessage: `Preview your profile share card before sharing or saving it`,
          description: `Accessible description for the profile share card preview dialog`,
        }),
      })),
      (t[10] = P))
    : (P = t[10]);
  let F;
  t[11] === _
    ? (F = t[12])
    : ((F = _.formatMessage({
        id: `profile.shareCard.preview.close`,
        defaultMessage: `Close share preview`,
        description: `Accessible label for closing the profile share card preview`,
      })),
      (t[11] = _),
      (t[12] = F));
  let I;
  t[13] === m
    ? (I = t[14])
    : ((I = () => {
        m(!1);
      }),
      (t[13] = m),
      (t[14] = I));
  let te;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, X.jsx)(S, { "aria-hidden": !0, className: `icon-sm` })), (t[15] = te))
    : (te = t[15]);
  let L;
  t[16] !== F || t[17] !== I
    ? ((L = (0, X.jsx)(f, {
        "aria-label": F,
        className: `absolute top-5 right-5 z-10 size-8 !rounded-md`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: I,
        children: te,
      })),
      (t[16] = F),
      (t[17] = I),
      (t[18] = L))
    : (L = t[18]);
  let ne;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, X.jsx)(`h2`, {
        className: `shrink-0 text-center text-[24px] leading-8 font-normal text-token-text-primary`,
        children: (0, X.jsx)(q, {
          id: `profile.shareCard.preview.heading`,
          defaultMessage: `Share your activity`,
          description: `Visible heading for the profile share card preview dialog`,
        }),
      })),
      (t[19] = ne))
    : (ne = t[19]);
  let re = s == null ? `mt-[50px]` : `mt-8`,
    R;
  t[20] === re
    ? (R = t[21])
    : ((R = c(`flex flex-col items-center`, re)), (t[20] = re), (t[21] = R));
  let z;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = c(
        `aspect-[499/306] overflow-hidden rounded-[32px] bg-token-dropdown-background/90 will-change-transform [transform-style:preserve-3d]`,
        _i,
      )),
      (t[22] = z))
    : (z = t[22]);
  let ie;
  t[23] !== ee || t[24] !== b || t[25] !== x
    ? ((ie = { rotateX: b, rotateY: x, width: ee }),
      (t[23] = ee),
      (t[24] = b),
      (t[25] = x),
      (t[26] = ie))
    : (ie = t[26]);
  let B;
  t[27] !== n || t[28] !== _
    ? ((B =
        n == null
          ? (0, X.jsx)(`div`, {
              role: `status`,
              "aria-label": _.formatMessage({
                id: `profile.shareCard.preview.loadingLabel`,
                defaultMessage: `Creating profile share card`,
                description: `Accessible label while the profile share card preview is being created`,
              }),
              className: `flex size-full items-center justify-center text-sm text-token-text-secondary`,
              children: (0, X.jsx)(q, {
                id: `profile.shareCard.preview.loading`,
                defaultMessage: `Creating image…`,
                description: `Loading text shown while creating the profile share card preview`,
              }),
            })
          : (0, X.jsx)(`img`, {
              src: n,
              alt: _.formatMessage({
                id: `profile.shareCard.preview.imageAlt`,
                defaultMessage: `Profile share card preview`,
                description: `Alt text for the generated profile share card preview image`,
              }),
              className: `block size-full object-contain`,
            })),
      (t[27] = n),
      (t[28] = _),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== ie || t[31] !== B
    ? ((V = (0, X.jsx)(o.div, { className: z, style: ie, children: B })),
      (t[30] = ie),
      (t[31] = B),
      (t[32] = V))
    : (V = t[32]);
  let oe;
  t[33] !== O || t[34] !== T || t[35] !== V
    ? ((oe = (0, X.jsx)(`div`, {
        "data-profile-share-card-preview-hover-target": !0,
        className: `w-fit [perspective:1200px] [transform-style:preserve-3d]`,
        onPointerEnter: T,
        onPointerLeave: O,
        onPointerMove: T,
        children: V,
      })),
      (t[33] = O),
      (t[34] = T),
      (t[35] = V),
      (t[36] = oe))
    : (oe = t[36]);
  let se;
  t[37] === a
    ? (se = t[38])
    : ((se =
        a == null
          ? null
          : (0, X.jsx)(li, {
              disabled: a.disabled,
              isPetVisible: a.isPetVisible,
              petCount: a.petCount,
              petName: a.petName,
              petPosition: a.petPosition,
              onNext: a.onNext,
              onPrevious: a.onPrevious,
              onTogglePetVisibility: a.onTogglePetVisibility,
            })),
      (t[37] = a),
      (t[38] = se));
  let H;
  t[39] !== oe || t[40] !== se
    ? ((H = (0, X.jsxs)(`div`, { className: `relative w-fit`, children: [oe, se] })),
      (t[39] = oe),
      (t[40] = se),
      (t[41] = H))
    : (H = t[41]);
  let ce =
      a == null
        ? s == null
          ? `mt-[50px]`
          : `mt-8 mb-7`
        : s == null
          ? `mt-[60px]`
          : `mt-[60px] mb-7`,
    U;
  t[42] === ce
    ? (U = t[43])
    : ((U = c(`flex items-start justify-center gap-2 sm:gap-5`, ce)), (t[42] = ce), (t[43] = U));
  let le;
  t[44] === _
    ? (le = t[45])
    : ((le = _.formatMessage({
        id: `profile.shareCard.preview.shareX`,
        defaultMessage: `Share to X`,
        description: `Accessible label for the X share button in the profile share card preview`,
      })),
      (t[44] = _),
      (t[45] = le));
  let ue = s === `x`,
    de = r || n == null,
    W;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, X.jsx)(q, {
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      })),
      (t[46] = W))
    : (W = t[46]);
  let fe;
  t[47] === g
    ? (fe = t[48])
    : ((fe = () => {
        g(`x`);
      }),
      (t[47] = g),
      (t[48] = fe));
  let pe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, X.jsx)(ai, { "aria-hidden": !0, className: `icon-sm` })), (t[49] = pe))
    : (pe = t[49]);
  let me;
  t[50] !== le || t[51] !== ue || t[52] !== de || t[53] !== fe
    ? ((me = (0, X.jsx)(ci, {
        ariaLabel: le,
        active: ue,
        disabled: de,
        label: W,
        onClick: fe,
        children: pe,
      })),
      (t[50] = le),
      (t[51] = ue),
      (t[52] = de),
      (t[53] = fe),
      (t[54] = me))
    : (me = t[54]);
  let G;
  t[55] === _
    ? (G = t[56])
    : ((G = _.formatMessage({
        id: `profile.shareCard.preview.shareLinkedIn`,
        defaultMessage: `Share to LinkedIn`,
        description: `Accessible label for the LinkedIn share button in the profile share card preview`,
      })),
      (t[55] = _),
      (t[56] = G));
  let he = s === `linkedin`,
    ge = r || n == null,
    _e;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, X.jsx)(q, {
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      })),
      (t[57] = _e))
    : (_e = t[57]);
  let K;
  t[58] === g
    ? (K = t[59])
    : ((K = () => {
        g(`linkedin`);
      }),
      (t[58] = g),
      (t[59] = K));
  let ye;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, X.jsx)($r, { "aria-hidden": !0, className: `icon-sm` })), (t[60] = ye))
    : (ye = t[60]);
  let be;
  t[61] !== G || t[62] !== he || t[63] !== ge || t[64] !== K
    ? ((be = (0, X.jsx)(ci, {
        ariaLabel: G,
        active: he,
        disabled: ge,
        label: _e,
        onClick: K,
        children: ye,
      })),
      (t[61] = G),
      (t[62] = he),
      (t[63] = ge),
      (t[64] = K),
      (t[65] = be))
    : (be = t[65]);
  let xe;
  t[66] === _
    ? (xe = t[67])
    : ((xe = _.formatMessage({
        id: `profile.shareCard.preview.shareReddit`,
        defaultMessage: `Share to Reddit`,
        description: `Accessible label for the Reddit share button in the profile share card preview`,
      })),
      (t[66] = _),
      (t[67] = xe));
  let Se = s === `reddit`,
    Ce = r || n == null,
    we;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, X.jsx)(q, {
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      })),
      (t[68] = we))
    : (we = t[68]);
  let Te;
  t[69] === g
    ? (Te = t[70])
    : ((Te = () => {
        g(`reddit`);
      }),
      (t[69] = g),
      (t[70] = Te));
  let Ee;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, X.jsx)(ni, { "aria-hidden": !0, className: `icon-sm` })), (t[71] = Ee))
    : (Ee = t[71]);
  let De;
  t[72] !== xe || t[73] !== Se || t[74] !== Ce || t[75] !== Te
    ? ((De = (0, X.jsx)(ci, {
        ariaLabel: xe,
        active: Se,
        disabled: Ce,
        label: we,
        onClick: Te,
        children: Ee,
      })),
      (t[72] = xe),
      (t[73] = Se),
      (t[74] = Ce),
      (t[75] = Te),
      (t[76] = De))
    : (De = t[76]);
  let Oe;
  t[77] === _
    ? (Oe = t[78])
    : ((Oe = _.formatMessage({
        id: `profile.shareCard.preview.save`,
        defaultMessage: `Save profile card`,
        description: `Accessible label for saving the profile share card from the preview dialog`,
      })),
      (t[77] = _),
      (t[78] = Oe));
  let ke = r || n == null,
    Ae;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, X.jsx)(et, { "aria-hidden": !0, className: `icon-sm` })), (t[79] = Ae))
    : (Ae = t[79]);
  let je;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, X.jsx)(`span`, {
        className: gi,
        children: (0, X.jsx)(q, {
          id: `profile.shareCard.preview.saveLabel`,
          defaultMessage: `Save`,
          description: `Visible label for saving the profile share card`,
        }),
      })),
      (t[80] = je))
    : (je = t[80]);
  let Me;
  t[81] !== d || t[82] !== Oe || t[83] !== ke
    ? ((Me = (0, X.jsxs)(f, {
        "aria-label": Oe,
        className: hi,
        color: `primary`,
        disabled: ke,
        size: `icon`,
        uniform: !0,
        onClick: d,
        children: [Ae, je],
      })),
      (t[81] = d),
      (t[82] = Oe),
      (t[83] = ke),
      (t[84] = Me))
    : (Me = t[84]);
  let Ne;
  t[85] !== U || t[86] !== me || t[87] !== be || t[88] !== De || t[89] !== Me
    ? ((Ne = (0, X.jsxs)(`div`, { className: U, children: [me, be, De, Me] })),
      (t[85] = U),
      (t[86] = me),
      (t[87] = be),
      (t[88] = De),
      (t[89] = Me),
      (t[90] = Ne))
    : (Ne = t[90]);
  let Pe;
  t[91] !== l || t[92] !== u || t[93] !== p || t[94] !== h || t[95] !== s
    ? ((Pe =
        s == null
          ? null
          : (0, X.jsx)(o.div, {
              id: mi,
              className: `mt-4 w-[min(499px,calc(100vw-56px))] overflow-hidden rounded-lg bg-token-dropdown-background/95 p-3 text-left text-token-text-primary shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
              initial: { height: 0, opacity: 0, y: -6 },
              animate: { height: `auto`, opacity: 1, y: 0 },
              exit: { height: 0, opacity: 0, y: -6 },
              transition: { duration: 0.16, ease: `easeOut` },
              children: (0, X.jsx)(ui, {
                getSocialDraftUrl: l,
                platform: s,
                onCopy: u,
                onDismiss: p,
                onOpenSocialDraft: h,
              }),
            })),
      (t[91] = l),
      (t[92] = u),
      (t[93] = p),
      (t[94] = h),
      (t[95] = s),
      (t[96] = Pe))
    : (Pe = t[96]);
  let Fe;
  t[97] === Pe
    ? (Fe = t[98])
    : ((Fe = (0, X.jsx)(C, { children: Pe })), (t[97] = Pe), (t[98] = Fe));
  let Le;
  t[99] !== R || t[100] !== H || t[101] !== Ne || t[102] !== Fe
    ? ((Le = (0, X.jsxs)(`div`, {
        className: `flex min-h-fit flex-col items-center`,
        children: [ne, (0, X.jsxs)(`div`, { className: R, children: [H, Ne, Fe] })],
      })),
      (t[99] = R),
      (t[100] = H),
      (t[101] = Ne),
      (t[102] = Fe),
      (t[103] = Le))
    : (Le = t[103]);
  let Re;
  t[104] !== j || t[105] !== Le
    ? ((Re = (0, X.jsx)(`div`, {
        className: `flex h-full min-h-0 items-center justify-center overflow-y-auto px-6 py-8`,
        onPointerMove: j,
        children: Le,
      })),
      (t[104] = j),
      (t[105] = Le),
      (t[106] = Re))
    : (Re = t[106]);
  let ze;
  return (
    t[107] !== m || t[108] !== i || t[109] !== L || t[110] !== Re
      ? ((ze = (0, X.jsxs)(Ie, {
          open: i,
          contentClassName: `!left-0 !top-0 !z-[51] !translate-x-0 !translate-y-0 overflow-hidden bg-transparent text-token-text-primary`,
          contentProps: M,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_88%,transparent)] backdrop-blur-[18px]`,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: m,
          children: [N, P, L, Re],
        })),
        (t[107] = m),
        (t[108] = i),
        (t[109] = L),
        (t[110] = Re),
        (t[111] = ze))
      : (ze = t[111]),
    ze
  );
}
function ci(e) {
  let t = (0, pi.c)(10),
    { active: n, ariaLabel: r, children: i, disabled: a, label: o, onClick: s } = e,
    c = n ? mi : void 0,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = (0, X.jsx)(`span`, { className: gi, children: o })), (t[0] = o), (t[1] = l));
  let u;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== l
      ? ((u = (0, X.jsxs)(f, {
          "aria-controls": c,
          "aria-expanded": n,
          "aria-label": r,
          "aria-pressed": n,
          className: hi,
          color: `primary`,
          disabled: a,
          size: `icon`,
          uniform: !0,
          onClick: s,
          children: [i, l],
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function li(e) {
  let t = (0, pi.c)(40),
    {
      disabled: n,
      isPetVisible: r,
      petCount: i,
      petName: a,
      petPosition: o,
      onNext: s,
      onPrevious: l,
      onTogglePetVisibility: u,
    } = e,
    d = ve(),
    p = i > 1,
    m;
  t[0] === d
    ? (m = t[1])
    : ((m = d.formatMessage({
        id: `profile.shareCard.preview.petSwitcher`,
        defaultMessage: `Custom pet`,
        description: `Accessible label for controls that switch the custom pet shown in the profile share card preview`,
      })),
      (t[0] = d),
      (t[1] = m));
  let h = p
      ? `w-[min(320px,calc(100vw-80px))] grid-cols-[1.75rem_minmax(0,1fr)_1.75rem_4.25rem]`
      : `w-[min(240px,calc(100vw-80px))] grid-cols-[minmax(0,1fr)_4.25rem]`,
    g;
  t[2] === h
    ? (g = t[3])
    : ((g = c(
        `absolute top-full left-1/2 mt-3 grid -translate-x-1/2 items-center gap-2 rounded-full bg-token-dropdown-background/95 px-2 py-1 shadow-[0_12px_36px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
        h,
      )),
      (t[2] = h),
      (t[3] = g));
  let _;
  t[4] !== p || t[5] !== n || t[6] !== d || t[7] !== l
    ? ((_ = p
        ? (0, X.jsx)(f, {
            "aria-label": d.formatMessage({
              id: `profile.shareCard.preview.previousPet`,
              defaultMessage: `Previous custom pet`,
              description: `Accessible label for selecting the previous custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: l,
            children: (0, X.jsx)(O, { "aria-hidden": !0, className: `icon-xs rotate-180` }),
          })
        : null),
      (t[4] = p),
      (t[5] = n),
      (t[6] = d),
      (t[7] = l),
      (t[8] = _))
    : (_ = t[8]);
  let v = r ? `text-token-text-primary` : `text-token-text-tertiary`,
    y;
  t[9] === v
    ? (y = t[10])
    : ((y = c(`truncate text-xs leading-4 font-medium`, v)), (t[9] = v), (t[10] = y));
  let b;
  t[11] !== a || t[12] !== y
    ? ((b = (0, X.jsx)(`div`, { className: y, children: a })),
      (t[11] = a),
      (t[12] = y),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] !== r || t[15] !== i || t[16] !== o
    ? ((x = (0, X.jsx)(`div`, {
        className: `text-[11px] leading-3 text-token-text-tertiary`,
        children: r
          ? (0, X.jsx)(q, {
              id: `profile.shareCard.preview.petPosition`,
              defaultMessage: `{petPosition} / {petCount}`,
              description: `Current custom pet position in the profile share card preview pet switcher`,
              values: { petCount: i, petPosition: o },
            })
          : (0, X.jsx)(q, {
              id: `profile.shareCard.preview.petHidden`,
              defaultMessage: `Hidden`,
              description: `Label shown when the custom pet is hidden from the profile share card preview`,
            }),
      })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = o),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] !== b || t[19] !== x
    ? ((S = (0, X.jsxs)(`div`, { className: `min-w-0 text-center`, children: [b, x] })),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== p || t[22] !== n || t[23] !== d || t[24] !== s
    ? ((C = p
        ? (0, X.jsx)(f, {
            "aria-label": d.formatMessage({
              id: `profile.shareCard.preview.nextPet`,
              defaultMessage: `Next custom pet`,
              description: `Accessible label for selecting the next custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: s,
            children: (0, X.jsx)(O, { "aria-hidden": !0, className: `icon-xs` }),
          })
        : null),
      (t[21] = p),
      (t[22] = n),
      (t[23] = d),
      (t[24] = s),
      (t[25] = C))
    : (C = t[25]);
  let w = r ? `ghostActive` : `secondary`,
    T;
  t[26] === r
    ? (T = t[27])
    : ((T = r
        ? (0, X.jsx)(q, {
            id: `profile.shareCard.preview.hidePetLabel`,
            defaultMessage: `Hide pet`,
            description: `Short button label for hiding the custom pet from the profile share card preview`,
          })
        : (0, X.jsx)(q, {
            id: `profile.shareCard.preview.showPetLabel`,
            defaultMessage: `Show pet`,
            description: `Short button label for showing the custom pet on the profile share card preview`,
          })),
      (t[26] = r),
      (t[27] = T));
  let E;
  t[28] !== n || t[29] !== u || t[30] !== w || t[31] !== T
    ? ((E = (0, X.jsx)(f, {
        className: `h-7 w-[4.25rem] justify-center px-0 text-[11px] leading-3`,
        color: w,
        disabled: n,
        size: `default`,
        onClick: u,
        children: T,
      })),
      (t[28] = n),
      (t[29] = u),
      (t[30] = w),
      (t[31] = T),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== m || t[34] !== C || t[35] !== E || t[36] !== g || t[37] !== _ || t[38] !== S
      ? ((D = (0, X.jsxs)(`div`, {
          "aria-label": m,
          className: g,
          role: `group`,
          children: [_, S, C, E],
        })),
        (t[33] = m),
        (t[34] = C),
        (t[35] = E),
        (t[36] = g),
        (t[37] = _),
        (t[38] = S),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
function ui(e) {
  let t = (0, pi.c)(41),
    { platform: n, getSocialDraftUrl: r, onCopy: i, onDismiss: a, onOpenSocialDraft: o } = e,
    s = ve(),
    c;
  t[0] !== s || t[1] !== n ? ((c = fi(s, n)), (t[0] = s), (t[1] = n), (t[2] = c)) : (c = t[2]);
  let l = c,
    u;
  t[3] !== r || t[4] !== n ? ((u = r(n)), (t[3] = r), (t[4] = n), (t[5] = u)) : (u = t[5]);
  let d = u,
    p;
  t[6] === l
    ? (p = t[7])
    : ((p = (0, X.jsx)(`h3`, {
        className: `text-sm leading-5 font-medium`,
        children: (0, X.jsx)(q, {
          id: `profile.shareCard.preview.socialInstructionsTitle`,
          defaultMessage: `Share to {platformName}`,
          description: `Title for the profile share card social sharing instructions`,
          values: { platformName: l },
        }),
      })),
      (t[6] = l),
      (t[7] = p));
  let m;
  t[8] === s
    ? (m = t[9])
    : ((m = s.formatMessage({
        id: `profile.shareCard.preview.dismissShareInstructions`,
        defaultMessage: `Dismiss share instructions`,
        description: `Accessible label for dismissing the profile share card social sharing instructions`,
      })),
      (t[8] = s),
      (t[9] = m));
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(S, { "aria-hidden": !0, className: `icon-xs` })), (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== a || t[12] !== m
    ? ((g = (0, X.jsx)(f, {
        "aria-label": m,
        className: `size-6 rounded-full`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: a,
        children: h,
      })),
      (t[11] = a),
      (t[12] = m),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== p || t[15] !== g
    ? ((_ = (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [p, g],
      })),
      (t[14] = p),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(di, { step: 1 })), (t[17] = v))
    : (v = t[17]);
  let y, b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(tt, { "aria-hidden": !0, className: `icon-xs` })),
      (y = (0, X.jsx)(q, {
        id: `profile.shareCard.preview.copyImage`,
        defaultMessage: `Copy image`,
        description: `Button label for copying the profile share card image`,
      })),
      (t[18] = y),
      (t[19] = b))
    : ((y = t[18]), (b = t[19]));
  let x;
  t[20] === i
    ? (x = t[21])
    : ((x = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          v,
          (0, X.jsxs)(f, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: i,
            children: [b, y],
          }),
        ],
      })),
      (t[20] = i),
      (t[21] = x));
  let C;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(di, { step: 2 })), (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== o || t[24] !== n
    ? ((w = (e) => {
        o(n, e);
      }),
      (t[23] = o),
      (t[24] = n),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] === d
    ? (T = t[27])
    : ((T = (0, X.jsx)(U, { href: d, className: `icon-xs` })), (t[26] = d), (t[27] = T));
  let E;
  t[28] === l
    ? (E = t[29])
    : ((E = (0, X.jsx)(q, {
        id: `profile.shareCard.preview.openSocialComposer`,
        defaultMessage: `Open {platformName} composer`,
        description: `Button label for opening a social platform composer for the profile share card`,
        values: { platformName: l },
      })),
      (t[28] = l),
      (t[29] = E));
  let D;
  t[30] !== w || t[31] !== T || t[32] !== E
    ? ((D = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          C,
          (0, X.jsxs)(f, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: w,
            children: [T, E],
          }),
        ],
      })),
      (t[30] = w),
      (t[31] = T),
      (t[32] = E),
      (t[33] = D))
    : (D = t[33]);
  let O;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2 text-token-text-secondary`,
        children: [
          (0, X.jsx)(di, { step: 3 }),
          (0, X.jsx)(q, {
            id: `profile.shareCard.preview.pasteImage`,
            defaultMessage: `Paste image into the post`,
            description: `Instruction for pasting the copied profile share card image into the social post`,
          }),
        ],
      })),
      (t[34] = O))
    : (O = t[34]);
  let k;
  t[35] !== x || t[36] !== D
    ? ((k = (0, X.jsxs)(`ol`, {
        className: `mt-2 flex flex-col gap-2 text-sm leading-5`,
        children: [x, D, O],
      })),
      (t[35] = x),
      (t[36] = D),
      (t[37] = k))
    : (k = t[37]);
  let A;
  return (
    t[38] !== k || t[39] !== _
      ? ((A = (0, X.jsxs)(X.Fragment, { children: [_, k] })), (t[38] = k), (t[39] = _), (t[40] = A))
      : (A = t[40]),
    A
  );
}
function di(e) {
  let t = (0, pi.c)(2),
    { step: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(`span`, {
          "aria-hidden": !0,
          className: `flex size-5 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-[11px] font-medium text-token-text-primary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function fi(e, t) {
  switch (t) {
    case `linkedin`:
      return e.formatMessage({
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      });
    case `reddit`:
      return e.formatMessage({
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      });
    case `x`:
      return e.formatMessage({
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      });
  }
}
var pi,
  X,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci = e(() => {
    ((pi = Ee()),
      P(),
      k(),
      G(),
      T(),
      Be(),
      Ae(),
      u(),
      it(),
      $e(),
      ei(),
      ri(),
      oi(),
      w(),
      (X = l()),
      (mi = `profile-share-card-social-instructions`),
      (hi = `relative size-[52px] overflow-visible !rounded-full`),
      (gi = `absolute top-[60px] left-1/2 max-w-[68px] -translate-x-1/2 truncate text-center text-xs leading-4 text-token-text-secondary`),
      (_i = `[box-shadow:rgba(0,0,0,0.06)_0px_4px_12px_-8px,rgba(0,0,0,0.10)_0px_9px_64px_-10px,rgba(0,0,0,0.05)_0px_0px_0px_0.5px]`),
      (vi = { stiffness: 200, damping: 25, mass: 1 }),
      (yi = 1.5),
      (bi = 2),
      (xi = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 506px)))`),
      (Si = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 749px)))`));
  });
function wi({
  dailyUsage: e,
  displayName: t,
  imageUrl: n,
  petOptions: r,
  selectedPetId: i,
  todayIso: a,
  usageSummary: o,
  username: s,
}) {
  let c = h(D),
    l = ve(),
    [u, d] = (0, Oi.useState)(!1),
    [p, m] = (0, Oi.useState)(!1),
    [g, _] = (0, Oi.useState)(null),
    [v, y] = (0, Oi.useState)(null),
    [b, x] = (0, Oi.useState)(null),
    [S, C] = (0, Oi.useState)(!1),
    [w, T] = (0, Oi.useState)(null),
    E = (0, Oi.useRef)(0),
    O = l.formatMessage({
      id: `profile.shareCard.shareLabel`,
      defaultMessage: `Share profile card`,
      description: `Accessible label for sharing the profile share card image`,
    }),
    k = l.formatMessage({
      id: `profile.shareCard.createError`,
      defaultMessage: `Could not create profile card`,
      description: `Toast shown when the profile share card image could not be created`,
    }),
    A = l.formatMessage({
      id: `profile.shareCard.copySuccess`,
      defaultMessage: `Copied image`,
      description: `Toast shown after copying the profile share card image`,
    }),
    ee = l.formatMessage({
      id: `profile.shareCard.copyError`,
      defaultMessage: `Failed to copy image`,
      description: `Toast shown when copying the profile share card image fails`,
    }),
    M = l.formatMessage({
      id: `profile.shareCard.saveSuccess`,
      defaultMessage: `Image saved`,
      description: `Toast shown after saving the profile share card image`,
    }),
    N = l.formatMessage({
      id: `profile.shareCard.draftText`,
      defaultMessage: `Check out my Codex activity`,
      description: `Draft text used when sharing the profile share card to social platforms`,
    }),
    P = (e, t) => {
      if (t == null) {
        j(c, z, { action: e });
        return;
      }
      j(c, z, { action: e, socialPlatform: Di(t) });
    },
    F = () => {
      let r = l.formatMessage(
        {
          id: `profile.usernameValue`,
          defaultMessage: `@{username}`,
          description: `Profile username shown with an at-sign prefix`,
        },
        { username: s },
      );
      return {
        displayNameLabel: t,
        imageUrl: n,
        initials: wt(t),
        stats: [
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.lifetimeTokens`,
              defaultMessage: `lifetime tokens`,
              description: `Label for lifetime token usage in the profile share card image`,
            }),
            value: yt(l, o.totalTextTokens),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.peakDay`,
              defaultMessage: `peak day`,
              description: `Label for peak token usage day in the profile share card image`,
            }),
            value: yt(l, o.peakTokens),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.currentStreak`,
              defaultMessage: `current streak`,
              description: `Label for current usage streak in the profile share card image`,
            }),
            value: Ct(l, o.currentStreakDays),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.longestStreak`,
              defaultMessage: `longest streak`,
              description: `Label for longest usage streak in the profile share card image`,
            }),
            value: Ct(l, o.longestStreakDays),
          },
        ],
        theme: Hn(),
        usernameLabel: r,
        usageCells: _t({ dailyUsage: e, todayIso: a }),
      };
    },
    I = async (e, t) => {
      let n = await Ti(e);
      E.current === t && _({ blob: e, imageUrl: n });
    },
    te = async (e, { clearPreview: t, showLoadingState: n, requestId: r }) => {
      (n && d(!0), t && _(null));
      try {
        await I(await Un({ ...F(), petImageUrl: e?.imageUrl ?? null }), r);
      } catch {
        if (E.current !== r) return;
        (m(!1), T(null), c.get(Me).danger(k));
      } finally {
        n && E.current === r && d(!1);
      }
    },
    L = async (e, t, { clearPreview: n, showLoadingState: r, requestId: i }) => {
      (r && d(!0), n && _(null));
      try {
        let n = t ?? (await Wn(F()));
        if (E.current !== i) return;
        (t ?? T(n), await I(await n.createImageBlob(e.imageUrl), i));
      } catch {
        if (E.current !== i) return;
        (m(!1), T(null), c.get(Me).danger(k));
      } finally {
        r && E.current === i && d(!1);
      }
    },
    ne = () => {
      E.current += 1;
      let e = E.current,
        t = i == null ? -1 : r.findIndex((e) => e.id === i);
      (m(!0), y(null), T(null), x(t === -1 ? null : t), C(t !== -1));
      let n = r[t];
      if (n == null) {
        te(null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
        return;
      }
      L(n, null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
    },
    re = (e) => {
      let t = r[e];
      if (t == null) return;
      E.current += 1;
      let n = E.current;
      (x(e), C(!0), L(t, w, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    R = (e) => {
      let t = b == null ? null : r[b];
      if (e && t == null) return;
      E.current += 1;
      let n = E.current;
      (C(e), te(e ? t : null, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    ie = () => {
      g != null &&
        (P(W.CODEX_PROFILE_SHARE_ACTION_SAVE_BUTTON_CLICKED), Gn(g.blob), c.get(Me).success(M));
    },
    B = () => {
      g != null &&
        Pt({ "image/png": g.blob }).then(
          () => {
            c.get(Me).success(A);
          },
          () => {
            c.get(Me).danger(ee);
          },
        );
    },
    V = (e) => {
      (e || ((E.current += 1), y(null), x(null), C(!1), d(!1), T(null)), m(e));
    };
  return (0, ki.jsxs)(ki.Fragment, {
    children: [
      (0, ki.jsxs)(f, {
        "aria-label": O,
        className: `h-7`,
        color: `ghostActive`,
        loading: u,
        size: `toolbar`,
        onClick: () => {
          (P(W.CODEX_PROFILE_SHARE_ACTION_SHARE_BUTTON_CLICKED), ne());
        },
        children: [
          (0, ki.jsx)(lt, { "aria-hidden": !0, className: `icon-xs` }),
          (0, ki.jsx)(q, {
            id: `profile.shareCard.share`,
            defaultMessage: `Share`,
            description: `Button label for sharing the profile share card image`,
          }),
        ],
      }),
      (0, ki.jsx)(si, {
        imageUrl: g?.imageUrl ?? null,
        isLoading: u,
        open: p,
        petSwitcher:
          b == null || r.length === 0
            ? null
            : {
                disabled: u,
                isPetVisible: S,
                petCount: r.length,
                petName: r[b]?.displayName ?? ``,
                petPosition: b + 1,
                onNext: () => {
                  re((b + 1) % r.length);
                },
                onPrevious: () => {
                  re((b - 1 + r.length) % r.length);
                },
                onTogglePetVisibility: () => {
                  R(!S);
                },
              },
        selectedSocialPlatform: v,
        getSocialDraftUrl: (e) => Ei(e, N),
        onCopy: B,
        onDownload: ie,
        onDismissShareInstructions: () => {
          y(null);
        },
        onOpenChange: V,
        onOpenSocialDraft: (e, t) => {
          let n = Ei(e, N);
          (P(W.CODEX_PROFILE_SHARE_ACTION_SOCIAL_COMPOSER_BUTTON_CLICKED, e),
            Ue({ event: t, href: n, initiator: `open_in_browser_bridge` }));
        },
        onSelectSocialPlatform: (e) => {
          (P(W.CODEX_PROFILE_SHARE_ACTION_SOCIAL_SHARE_BUTTON_CLICKED, e), y(e));
        },
      }),
    ],
  });
}
function Ti(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile share card`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile share card`));
          return;
        }
        t(r.result);
      }),
      r.readAsDataURL(e));
  });
}
function Ei(e, t) {
  switch (e) {
    case `linkedin`: {
      let e = new URL(`https://www.linkedin.com/feed/`);
      return (
        e.searchParams.set(`shareActive`, `true`), e.searchParams.set(`text`, t), e.toString()
      );
    }
    case `reddit`: {
      let e = new URL(`https://www.reddit.com/submit`);
      return (e.searchParams.set(`title`, t), e.toString());
    }
    case `x`: {
      let e = new URL(`https://x.com/intent/post`);
      return (e.searchParams.set(`text`, t), e.toString());
    }
  }
}
function Di(e) {
  switch (e) {
    case `linkedin`:
      return Fe.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN;
    case `reddit`:
      return Fe.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT;
    case `x`:
      return Fe.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X;
  }
}
var Oi,
  ki,
  Ai = e(() => {
    (K(),
      a(),
      (Oi = t(b(), 1)),
      G(),
      T(),
      x(),
      se(),
      kt(),
      d(),
      r(),
      Nt(),
      At(),
      Zr(),
      Ci(),
      (ki = l()));
  }),
  ji,
  Mi,
  Ni,
  Pi,
  Fi = e(() => {
    ((ji = `_profileLoadingBlock_1lb04_1`),
      (Mi = `_profilePhotoEditBadge_1lb04_22`),
      (Ni = `_profilePhotoInput_1lb04_28`),
      (Pi = {
        profileLoadingBlock: ji,
        "profile-loading-page-sweep": `_profile-loading-page-sweep_1lb04_1`,
        profilePhotoEditBadge: Mi,
        profilePhotoInput: Ni,
      }));
  });
function Ii({ today: e = new Date() }) {
  let t = h(D),
    n = (0, Q.useRef)(!1),
    r = ve(),
    i = Re(),
    a = De(`3162484136`),
    s = De(Je),
    l = De(`1991660486`),
    { accountId: u, authMethod: d, planAtLogin: p, userId: m } = y(),
    { data: g } = te(),
    { data: _ } = ce(`account-info`, {
      queryConfig: { enabled: d === `chatgpt` && !0, staleTime: ie.ONE_MINUTE },
    }),
    { data: b } = v(zt),
    x = pt(e),
    S = gt(x),
    C = ua(x),
    w = u ?? _?.accountId ?? null,
    T = m ?? _?.userId ?? null,
    E = qt({ accountId: w, enabled: d === `chatgpt`, userId: T }),
    O = E.data?.activityInsights,
    k = Wt({ accountId: w, userId: T }),
    A = Kt({ accountId: w, userId: T }),
    ee = k.isPending || A.isPending,
    M = Ut({ accountId: w, userId: T }),
    N = Ft(b?.avatars),
    { selectedAvatar: P } = Lt(N),
    [F, L] = (0, Q.useState)(null),
    [ne, R] = (0, Q.useState)(null),
    [z, B] = (0, Q.useState)(`daily`),
    [V, ae] = (0, Q.useState)(null),
    [oe, se] = (0, Q.useState)(null),
    [H, U] = (0, Q.useState)(null),
    [le, de] = (0, Q.useState)(!1),
    W = E.isLoading,
    fe = E.data == null && E.isError,
    pe = re.isInternal(He()) && E.error != null ? _a(E.error) : null,
    G = E.data?.hasStatsError === !0,
    he = P.id.startsWith(`custom:`),
    ge = W ? null : (ne ?? E.data?.imageUrl ?? g?.profile_picture_url ?? null),
    _e = ge != null && ge !== F,
    K = E.data?.username?.trim() || null,
    be = E.data?.displayName ?? null,
    xe = W ? null : (be ?? K ?? g?.name ?? null),
    Se = dt({
      accountStructure: g?.structure,
      plan: g?.plan_type ?? _?.plan ?? p,
      workspaceName: g?.name,
    }),
    Ce = E.data?.summary,
    Ee = Ce?.longestTaskDurationMs,
    Oe = E.data?.dailyUsage,
    ke = N.flatMap((e) =>
      !e.id.startsWith(`custom:`) || e.spritesheetUrl == null
        ? []
        : [{ displayName: e.displayName, id: e.id, imageUrl: e.spritesheetUrl }],
    ),
    Ae =
      G || Oe == null
        ? null
        : {
            cells: vt({ dailyUsage: Oe, todayIso: x, view: z }),
            dailyValues: st({ dailyUsage: Oe, todayIso: x }),
            weeklyTotals: Ot({ dailyUsage: Oe, todayIso: x }),
            cumulativeTotals: mt({ dailyUsage: Oe, todayIso: x }),
          },
    je = r.formatMessage({
      id: `profile.tokenUsage.chartLabel`,
      defaultMessage: `Token usage chart`,
      description: `Accessible label for the token usage dot chart`,
    }),
    Me = (0, $.jsx)(`div`, {
      className: `text-base font-normal text-token-text-primary`,
      children: (0, $.jsx)(q, {
        id: `profile.header`,
        defaultMessage: `Profile`,
        description: `Header title for the profile page`,
      }),
    }),
    Pe = (e, t) => {
      ae((n) => (t ? e : n === e ? null : n));
    };
  return (
    (0, Q.useEffect)(() => {
      n.current || ((n.current = !0), j(t, me, { profileOwner: `self` }));
    }, [t]),
    fe
      ? (0, $.jsx)(Ke, {
          contentClassName: `h-full justify-center`,
          fullWidth: !0,
          backSlot: Me,
          children: (0, $.jsxs)(`div`, {
            role: `alert`,
            className: `flex flex-col items-center justify-center gap-4 text-center text-sm leading-5 text-token-text-tertiary`,
            children: [
              (0, $.jsx)(xt, { className: `icon-sm` }),
              (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [
                  (0, $.jsx)(q, {
                    id: `profile.fetchError`,
                    defaultMessage: `We’re having trouble loading your profile. Please try again later.`,
                    description: `Error shown when the profile page cannot be loaded`,
                  }),
                  pe == null
                    ? null
                    : (0, $.jsx)(`span`, {
                        className: `whitespace-pre-wrap text-token-error-foreground`,
                        children: (0, $.jsx)(q, {
                          id: `profile.fetchErrorDetail`,
                          defaultMessage: `[Employee only] Error: {details}`,
                          description: `Internal build diagnostic detail shown when the profile page cannot be loaded`,
                          values: { details: pe },
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : (0, $.jsxs)(Ke, {
          ref: se,
          className: `relative`,
          fullWidth: !0,
          backSlot: (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-between`,
            children: [
              Me,
              (0, $.jsxs)(`div`, {
                className: `no-drag -mr-2 flex items-center gap-2`,
                children: [
                  s
                    ? (0, $.jsxs)(f, {
                        "aria-label": r.formatMessage({
                          id: `profile.giftCredits.ariaLabel`,
                          defaultMessage: `Gift credits`,
                          description: `Accessible label for opening the ChatGPT gift credits purchase flow from a Codex profile`,
                        }),
                        className: `h-7`,
                        color: `ghostActive`,
                        size: `toolbar`,
                        onClick: We,
                        children: [
                          (0, $.jsx)(Xe, { "aria-hidden": !0, className: `icon-xs` }),
                          (0, $.jsx)(q, {
                            id: `profile.giftCredits.label`,
                            defaultMessage: `Gift credits`,
                            description: `Button label beside Share on a Codex profile that opens the gift credits purchase flow`,
                          }),
                        ],
                      })
                    : null,
                  a && !W && !G && K != null && be != null && Ce != null && Oe != null
                    ? (0, $.jsx)(wi, {
                        dailyUsage: Oe,
                        displayName: be,
                        imageUrl: _e ? ge : null,
                        petOptions: ke,
                        selectedPetId: he ? P.id : null,
                        todayIso: x,
                        usageSummary: Ce,
                        username: K,
                      })
                    : null,
                  (0, $.jsx)(we, {
                    delayDuration: 0,
                    tooltipContent: (0, $.jsx)(q, {
                      id: `profile.privateTooltip`,
                      defaultMessage: `Your profile is only visible to you`,
                      description: `Tooltip explaining private profile visibility`,
                    }),
                    children: (0, $.jsxs)(`span`, {
                      tabIndex: 0,
                      className: `focus-visible:ring-token-focus flex h-7 cursor-default items-center gap-1.5 rounded-lg px-2 text-base text-token-text-secondary outline-none focus-visible:ring-1`,
                      children: [
                        (0, $.jsx)(I, { className: `icon-xs` }),
                        (0, $.jsx)(q, {
                          id: `profile.private`,
                          defaultMessage: `Private`,
                          description: `Private visibility badge label`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsxs)(f, {
                    "aria-label": r.formatMessage({
                      id: `profile.editProfileLabel`,
                      defaultMessage: `Edit profile`,
                      description: `Accessible label for opening the edit profile dialog`,
                    }),
                    className: `h-7`,
                    color: `ghostActive`,
                    disabled: W,
                    size: `toolbar`,
                    onClick: () => {
                      (j(t, Ne, { action: ye.CODEX_PROFILE_EDIT_ACTION_OPENED }), de(!0));
                    },
                    children: [
                      (0, $.jsx)(rt, { "aria-hidden": !0, className: `icon-xs` }),
                      (0, $.jsx)(q, {
                        id: `profile.editProfile`,
                        defaultMessage: `Edit`,
                        description: `Button label for opening the edit profile dialog`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          contentClassName: `max-w-[732px] pt-12`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-10`,
              children: [
                (0, $.jsx)(`section`, {
                  "aria-busy": W || void 0,
                  className: `flex flex-col items-center`,
                  children: W
                    ? (0, $.jsx)(qi, { avatar: P, showsPet: he })
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `relative mb-4 size-20`,
                            children: [
                              (0, $.jsxs)(`label`, {
                                "aria-disabled": M.isPending,
                                className: c(
                                  `group relative flex size-20 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                                  M.isPending ? `cursor-default opacity-70` : `cursor-interaction`,
                                ),
                                children: [
                                  _e
                                    ? (0, $.jsx)(`img`, {
                                        src: ge,
                                        alt: ``,
                                        className: `size-20 rounded-full object-cover`,
                                        onError: () => {
                                          L(ge);
                                        },
                                      })
                                    : (0, $.jsx)(`div`, {
                                        className: `flex size-20 items-center justify-center rounded-full bg-token-text-tertiary text-[28px] font-normal text-token-button-foreground`,
                                        children: wt(xe),
                                      }),
                                  (0, $.jsx)(`span`, {
                                    className: c(
                                      `pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white opacity-0 dark:bg-black/60 electron-dark:bg-black/60`,
                                      !M.isPending &&
                                        `group-focus-within:opacity-100 group-hover:opacity-100`,
                                    ),
                                    children: (0, $.jsx)(rt, {
                                      "aria-hidden": !0,
                                      className: `icon-sm`,
                                    }),
                                  }),
                                  (0, $.jsx)(`input`, {
                                    type: `file`,
                                    accept: `image/*`,
                                    "aria-label": r.formatMessage({
                                      id: `profile.photoInputLabel`,
                                      defaultMessage: `Change profile picture`,
                                      description: `Accessible label for the profile photo upload input`,
                                    }),
                                    className: `sr-only`,
                                    disabled: M.isPending,
                                    onClick: () => {
                                      j(t, Te, {
                                        action: ue.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_STARTED,
                                      });
                                    },
                                    onChange: (e) => {
                                      let n = e.currentTarget.files?.[0];
                                      ((e.currentTarget.value = ``),
                                        n != null &&
                                          (j(t, Te, {
                                            action:
                                              ue.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_IMAGE_SELECTED,
                                          }),
                                          Ki(n).then(U, () => {
                                            (j(t, Te, {
                                              action:
                                                ue.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED,
                                            }),
                                              U(null));
                                          })));
                                    },
                                  }),
                                ],
                              }),
                              he
                                ? (0, $.jsx)(`div`, {
                                    className: `absolute -right-8 -bottom-2 flex size-14 items-center justify-center`,
                                    children: (0, $.jsx)(ga, { avatar: P }),
                                  })
                                : null,
                            ],
                          }),
                          (0, $.jsx)(`div`, {
                            className: `flex w-full justify-center`,
                            children: (0, $.jsx)(`h1`, {
                              className: `flex h-8 w-full items-center justify-center text-center text-[24px] leading-8 font-normal tracking-[0.072px] text-token-text-primary`,
                              children: (0, $.jsx)(`span`, {
                                className: `block max-w-full min-w-0 truncate px-2`,
                                children:
                                  xe ??
                                  (0, $.jsx)(q, {
                                    id: `profile.nameFallback`,
                                    defaultMessage: `Codex user`,
                                    description: `Fallback profile display name`,
                                  }),
                              }),
                            }),
                          }),
                          K != null || Se != null
                            ? (0, $.jsx)(`div`, {
                                className: `mt-1 flex min-h-7 items-center gap-1.5 text-base leading-5 font-normal text-token-text-tertiary`,
                                children:
                                  K == null
                                    ? Se == null
                                      ? null
                                      : (0, $.jsx)(zi, { accountLabel: Se })
                                    : (0, $.jsxs)($.Fragment, {
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `max-w-[240px] min-w-0 truncate`,
                                            children: (0, $.jsx)(q, {
                                              id: `profile.usernameValue`,
                                              defaultMessage: `@{username}`,
                                              description: `Profile username shown with an at-sign prefix`,
                                              values: { username: K },
                                            }),
                                          }),
                                          Se == null
                                            ? null
                                            : (0, $.jsxs)($.Fragment, {
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    "aria-hidden": !0,
                                                    className: `text-token-text-tertiary/50`,
                                                    children: wa,
                                                  }),
                                                  (0, $.jsx)(zi, { accountLabel: Se }),
                                                ],
                                              }),
                                        ],
                                      }),
                              })
                            : null,
                        ],
                      }),
                }),
                (0, $.jsx)(`section`, {
                  className: `flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-token-border-light bg-transparent`,
                  children: (0, $.jsx)(`div`, {
                    className: `flex w-full items-center`,
                    children: W
                      ? (0, $.jsx)(Yi, {})
                      : G
                        ? (0, $.jsx)(Zi, {})
                        : (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(sa, {
                                value: yt(r, Ce?.totalTextTokens),
                                label: (0, $.jsx)(q, {
                                  id: `profile.stats.lifetimeTokens`,
                                  defaultMessage: `Lifetime tokens`,
                                  description: `Label for lifetime token usage on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(ca, {}),
                              (0, $.jsx)(sa, {
                                value: yt(r, Ce?.peakTokens),
                                label: (0, $.jsx)(q, {
                                  id: `profile.stats.peakTokens`,
                                  defaultMessage: `Peak tokens`,
                                  description: `Label for peak token usage on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(ca, {}),
                              Ee == null
                                ? null
                                : (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(sa, {
                                        value: ut(r, Ee),
                                        label: (0, $.jsx)(q, {
                                          id: `profile.stats.longestTask`,
                                          defaultMessage: `Longest task`,
                                          description: `Label for longest task duration on the profile page`,
                                        }),
                                      }),
                                      (0, $.jsx)(ca, {}),
                                    ],
                                  }),
                              (0, $.jsx)(sa, {
                                value: Ct(r, Ce?.currentStreakDays),
                                label: (0, $.jsx)(q, {
                                  id: `profile.stats.currentStreak`,
                                  defaultMessage: `Current streak`,
                                  description: `Label for current usage streak on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(ca, {}),
                              (0, $.jsx)(sa, {
                                value: Ct(r, Ce?.longestStreakDays),
                                label: (0, $.jsx)(q, {
                                  id: `profile.stats.longestStreak`,
                                  defaultMessage: `Longest streak`,
                                  description: `Label for longest usage streak on the profile page`,
                                }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, $.jsxs)(`section`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between text-base leading-5`,
                      children: [
                        (0, $.jsx)(`h2`, {
                          className: `text-base leading-5 font-medium text-token-text-primary`,
                          children: (0, $.jsx)(q, {
                            id: `profile.tokenUsage.title`,
                            defaultMessage: `Token activity`,
                            description: `Heading above the token usage chart`,
                          }),
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, $.jsx)(ha, {
                              active: z === `daily`,
                              disabled: W,
                              onSelect: () => {
                                B(`daily`);
                              },
                              children: (0, $.jsx)(q, {
                                id: `profile.tokenUsage.daily`,
                                defaultMessage: `Daily`,
                                description: `Daily token usage chart tab`,
                              }),
                            }),
                            (0, $.jsx)(ha, {
                              active: z === `weekly`,
                              disabled: W,
                              onSelect: () => {
                                B(`weekly`);
                              },
                              children: (0, $.jsx)(q, {
                                id: `profile.tokenUsage.weekly`,
                                defaultMessage: `Weekly`,
                                description: `Weekly token usage chart tab`,
                              }),
                            }),
                            (0, $.jsx)(ha, {
                              active: z === `cumulative`,
                              disabled: W,
                              onSelect: () => {
                                B(`cumulative`);
                              },
                              children: (0, $.jsx)(q, {
                                id: `profile.tokenUsage.cumulative`,
                                defaultMessage: `Cumulative`,
                                description: `Cumulative token usage chart tab`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    W
                      ? (0, $.jsx)(Qi, { columnCount: S, monthLabelCount: C.length })
                      : Ae == null
                        ? (0, $.jsx)(ta, {})
                        : (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2 [--profile-usage-level-0:var(--color-token-border-light)] [--profile-usage-level-1:color-mix(in_srgb,var(--color-token-primary)_22%,transparent)] [--profile-usage-level-2:color-mix(in_srgb,var(--color-token-primary)_42%,transparent)] [--profile-usage-level-3:color-mix(in_srgb,var(--color-token-primary)_68%,transparent)] [--profile-usage-level-4:var(--color-token-primary)]`,
                            role: `img`,
                            "aria-label": je,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
                                    style: {
                                      gridTemplateColumns: `repeat(${S}, minmax(1px, 1fr))`,
                                    },
                                    children: Ae.cells.map((e, t) => {
                                      let n = St(t, x);
                                      if (z === `daily` && n > x) return null;
                                      let r = Math.floor(t / 7),
                                        a = z !== `daily`,
                                        s = a && V === `${z}:${r}`,
                                        l = ya[e];
                                      a && e > 0 ? (l = s ? xa : ba) : s && (l = Sa);
                                      let u = (0, $.jsx)(
                                        `div`,
                                        {
                                          className: `aspect-square w-full`,
                                          children: (0, $.jsx)(o.div, {
                                            animate: { opacity: 1, scale: 1 },
                                            className: c(
                                              `size-full rounded-[4px] transition-colors duration-500 ease-out [corner-shape:var(--codex-corner-shape)]`,
                                              l,
                                            ),
                                            initial: i ? !1 : { opacity: 0, scale: 0.7 },
                                            transition: i
                                              ? { duration: 0 }
                                              : {
                                                  delay: la(t),
                                                  duration: 0.52,
                                                  ease: [0.22, 1, 0.36, 1],
                                                },
                                          }),
                                        },
                                        `${z}-${t}`,
                                      );
                                      if (z !== `daily`) return u;
                                      let d = `daily:${t}`;
                                      return (0, $.jsx)(
                                        we,
                                        {
                                          delayDuration: 0,
                                          open: V === d,
                                          onOpenChange: (e) => {
                                            Pe(d, e);
                                          },
                                          portalContainer: oe,
                                          tooltipContent: (0, $.jsx)(fa, {
                                            dateIso: n,
                                            tokenCount: Ae.dailyValues[t] ?? 0,
                                            todayIso: x,
                                          }),
                                          children: u,
                                        },
                                        `${z}-${t}`,
                                      );
                                    }),
                                  }),
                                  z === `weekly` || z === `cumulative`
                                    ? (0, $.jsx)(`div`, {
                                        className: `pointer-events-none absolute inset-0 flex`,
                                        children: (z === `weekly`
                                          ? Ae.weeklyTotals
                                          : Ae.cumulativeTotals
                                        ).map((e, t) => {
                                          let n = St(t * 7, x),
                                            r = `${z}:${t}`;
                                          return (0, $.jsx)(
                                            we,
                                            {
                                              delayDuration: 0,
                                              open: V === r,
                                              onOpenChange: (e) => {
                                                Pe(r, e);
                                              },
                                              portalContainer: oe,
                                              tooltipContent: (0, $.jsx)(pa, {
                                                chartView: z,
                                                tokenCount: e,
                                                weekStartIso: n,
                                              }),
                                              children: (0, $.jsx)(`div`, {
                                                "aria-hidden": !0,
                                                className: `pointer-events-auto h-full min-w-px flex-1`,
                                              }),
                                            },
                                            r,
                                          );
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                              (0, $.jsx)(`div`, {
                                className: `flex items-center justify-between text-xs leading-4 text-token-text-tertiary`,
                                children: C.map((e) =>
                                  (0, $.jsx)(
                                    `span`,
                                    {
                                      children: r.formatDate(new Date(e), {
                                        month: `short`,
                                        timeZone: `UTC`,
                                      }),
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          }),
                  ],
                }),
                l ? (0, $.jsx)(na, { insights: O, isLoading: W, isUnavailable: G }) : null,
              ],
            }),
            H == null
              ? null
              : (0, $.jsx)(pn, {
                  source: H,
                  onCancel: () => {
                    U(null);
                  },
                  onSave: (e) => {
                    (U(null),
                      R(e.previewUrl),
                      M.mutate(e.photo, {
                        onError: () => {
                          (j(t, Te, { action: ue.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED }),
                            R(null));
                        },
                        onSuccess: () => {
                          (j(t, Te, {
                            action: ue.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_SUCCEEDED,
                          }),
                            L(null),
                            R(null));
                        },
                      }));
                  },
                }),
            le
              ? (0, $.jsx)(Li, {
                  displayName: xe,
                  failedProfileImageUrl: F,
                  isPhotoSaving: M.isPending,
                  isTextSaving: ee,
                  profileImageUrl: ge,
                  username: K,
                  onCancel: () => {
                    de(!1);
                  },
                  onProfileImageError: L,
                  onSaveError: (e) => {
                    j(t, Ne, { action: ye.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED, ...e });
                  },
                  onPhotoChangeImageSelected: () => {
                    j(t, Ne, {
                      action: ye.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_IMAGE_SELECTED,
                    });
                  },
                  onPhotoChangeStarted: () => {
                    j(t, Ne, { action: ye.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_STARTED });
                  },
                  onSaveProfile: async (e) => {
                    (await k.mutateAsync(e), L(null));
                  },
                  onSaveSuccess: () => {
                    j(t, Ne, { action: ye.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED });
                  },
                  onSaveUsername: (e) => A.mutateAsync(e),
                })
              : null,
          ],
        })
  );
}
function Li({
  displayName: e,
  failedProfileImageUrl: t,
  isPhotoSaving: n,
  isTextSaving: r,
  onCancel: i,
  onPhotoChangeImageSelected: a,
  onPhotoChangeStarted: o,
  onProfileImageError: s,
  onSaveError: l,
  onSaveProfile: u,
  onSaveSuccess: d,
  onSaveUsername: h,
  profileImageUrl: g,
  username: _,
}) {
  let v = ve(),
    y = (0, Q.useId)(),
    b = (0, Q.useId)(),
    x = (0, Q.useId)(),
    S = (0, Q.useId)(),
    [C, w] = (0, Q.useState)(e ?? ``),
    [T, E] = (0, Q.useState)(_ ?? ``),
    [D, O] = (0, Q.useState)(null),
    [k, A] = (0, Q.useState)(null),
    [j, M] = (0, Q.useState)(null),
    [N, P] = (0, Q.useState)(null),
    [F, I] = (0, Q.useState)(null),
    [te, L] = (0, Q.useState)(null),
    [ne, re] = (0, Q.useState)(!1),
    R = ne || r || n,
    z = ft(T),
    ie = R || C.trim().length === 0 || !z.ok,
    B = D?.previewUrl ?? g,
    V = B != null && B !== t,
    oe = _?.trim() ?? ``,
    se = async () => {
      if (ie) return;
      (M(null), P(null), I(null), L(null));
      let t = C.trim(),
        n = bt(T),
        r = e?.trim() ?? ``;
      (w(t), E(n));
      let a = t.length > 0 && t !== r,
        o = n !== oe,
        s = D != null,
        c = {},
        f = 0,
        p = null;
      if ((a && ((c.displayName = t), (f += 1)), o)) {
        let e = ft(n);
        if (!e.ok) {
          P(Gi(e.reason, v));
          return;
        }
        p = e.username;
      }
      if ((s && ((c.photo = D.photo), (f += 1)), p == null && f === 0)) {
        i();
        return;
      }
      re(!0);
      let m = H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
        g = H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED;
      try {
        (p != null &&
          ((m = H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
          await h(p),
          (m = H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          f > 0 &&
            ((g = H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
            await u(c),
            (g = H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          d(),
          i());
      } catch (e) {
        if (
          (l({ profileDetailsUpdateApiStatus: g, usernameUpdateApiStatus: m }),
          m === H.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED)
        ) {
          P(Vi(e, v));
          return;
        }
        if (e instanceof Jt) {
          I(Hi(e.uploadError, v));
          return;
        }
        if (f > 1) {
          L(Ui(e, v));
          return;
        }
        if (a) {
          M(Bi(e, v));
          return;
        }
        I(Hi(e, v));
      } finally {
        re(!1);
      }
    };
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(Ie, {
        open: !0,
        onOpenChange: (e) => {
          !e && !R && i();
        },
        contentProps: {
          onOpenAutoFocus: (e) => {
            (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
          },
          tabIndex: -1,
        },
        showDialogClose: !1,
        size: `default`,
        children: (0, $.jsxs)(ze, {
          as: `form`,
          className: `gap-0`,
          onSubmit: (e) => {
            (e.preventDefault(), se());
          },
          children: [
            (0, $.jsx)(p, {
              children: (0, $.jsx)(m, {
                title: (0, $.jsx)(ae, {
                  className: `contents`,
                  children: (0, $.jsx)(q, {
                    id: `profile.editProfileTitle`,
                    defaultMessage: `Edit profile`,
                    description: `Title for the edit profile dialog`,
                  }),
                }),
                subtitle: (0, $.jsx)(Ve, {
                  className: `sr-only`,
                  children: (0, $.jsx)(q, {
                    id: `profile.editProfileDescription`,
                    defaultMessage: `Update your profile picture, display name, and username`,
                    description: `Accessible description for the edit profile dialog`,
                  }),
                }),
              }),
            }),
            (0, $.jsx)(p, {
              className: `items-center pt-6`,
              children: (0, $.jsxs)(`label`, {
                "aria-disabled": R,
                className: c(
                  `relative flex size-32 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                  Pi.profilePhotoInput,
                  R ? `cursor-default opacity-70` : `cursor-interaction`,
                ),
                children: [
                  V
                    ? (0, $.jsx)(`img`, {
                        src: B,
                        alt: ``,
                        className: `size-32 rounded-full object-cover`,
                        onError: () => {
                          s(B);
                        },
                      })
                    : (0, $.jsx)(`div`, {
                        className: `flex size-32 items-center justify-center rounded-full bg-token-text-tertiary text-[40px] font-normal text-token-button-foreground`,
                        children: wt(C),
                      }),
                  (0, $.jsx)(`span`, {
                    className: c(
                      `absolute right-1 bottom-1 flex size-9 items-center justify-center rounded-full text-white`,
                      Pi.profilePhotoEditBadge,
                    ),
                    children: (0, $.jsx)(rt, { "aria-hidden": !0, className: `icon-sm` }),
                  }),
                  (0, $.jsx)(`input`, {
                    type: `file`,
                    accept: `image/*`,
                    "aria-label": v.formatMessage({
                      id: `profile.photoInputLabel`,
                      defaultMessage: `Change profile picture`,
                      description: `Accessible label for the profile photo upload input`,
                    }),
                    className: `sr-only`,
                    disabled: R,
                    onClick: o,
                    onChange: (e) => {
                      let t = e.currentTarget.files?.[0];
                      ((e.currentTarget.value = ``),
                        t != null &&
                          (a(),
                          Ki(t).then(A, () => {
                            A(null);
                          })));
                    },
                  }),
                ],
              }),
            }),
            (0, $.jsx)(p, {
              className: `pt-8`,
              children: (0, $.jsxs)(`div`, {
                className: `divide-y-[0.5px] divide-token-border overflow-hidden rounded-lg border border-token-border`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            htmlFor: b,
                            className: `text-sm leading-5 text-token-text-primary`,
                            children: (0, $.jsx)(q, {
                              id: `profile.nameInputLabel`,
                              defaultMessage: `Display name`,
                              description: `Accessible label for the editable profile display name`,
                            }),
                          }),
                          j == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                id: y,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: j,
                              }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `flex h-10 min-w-0 items-center rounded-lg border border-token-input-border bg-token-input-background px-3 focus-within:border-token-focus-border`,
                        children: (0, $.jsx)(`input`, {
                          id: b,
                          "aria-describedby": j == null ? void 0 : y,
                          "aria-invalid": j != null,
                          className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                          disabled: R,
                          maxLength: 64,
                          onChange: (e) => {
                            (w(e.target.value), M(null), L(null));
                          },
                          onFocus: (e) => {
                            e.currentTarget.select();
                          },
                          spellCheck: !1,
                          value: C,
                        }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, $.jsx)(`label`, {
                                htmlFor: S,
                                className: `text-sm leading-5 text-token-text-primary`,
                                children: (0, $.jsx)(q, {
                                  id: `profile.usernameInputLabel`,
                                  defaultMessage: `Username`,
                                  description: `Accessible label for the editable profile username`,
                                }),
                              }),
                              N == null ? null : (0, $.jsx)(Ri, {}),
                            ],
                          }),
                          N == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                id: x,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: N,
                              }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex h-10 min-w-0 items-center gap-0.5 rounded-lg border border-token-input-border bg-token-input-background px-3 text-base leading-6 focus-within:border-token-focus-border`,
                        children: [
                          (0, $.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `text-token-text-tertiary`,
                            children: (0, $.jsx)(q, {
                              id: `profile.usernamePrefix`,
                              defaultMessage: `@`,
                              description: `Prefix shown before a profile username`,
                            }),
                          }),
                          (0, $.jsx)(`input`, {
                            id: S,
                            "aria-describedby": N == null ? void 0 : x,
                            "aria-invalid": N != null,
                            className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                            disabled: R,
                            maxLength: 20,
                            onChange: (e) => {
                              let t = Dt(e.target.value),
                                n = ft(t);
                              (E(t), P(n.ok ? null : Gi(n.reason, v)), L(null));
                            },
                            onFocus: (e) => {
                              e.currentTarget.select();
                            },
                            spellCheck: !1,
                            value: T,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            F != null || te != null
              ? (0, $.jsx)(p, {
                  className: `pt-3`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      F == null
                        ? null
                        : (0, $.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: F,
                          }),
                      te == null
                        ? null
                        : (0, $.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: te,
                          }),
                    ],
                  }),
                })
              : null,
            (0, $.jsx)(p, {
              className: `pt-5`,
              children: (0, $.jsxs)(ee, {
                children: [
                  (0, $.jsx)(f, {
                    color: `ghost`,
                    disabled: R,
                    onClick: i,
                    children: (0, $.jsx)(q, {
                      id: `profile.editProfileCancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels profile editing`,
                    }),
                  }),
                  (0, $.jsx)(f, {
                    type: `submit`,
                    disabled: ie,
                    loading: ne,
                    children: (0, $.jsx)(q, {
                      id: `profile.editProfileSave`,
                      defaultMessage: `Save`,
                      description: `Button that saves profile edits`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      k == null
        ? null
        : (0, $.jsx)(pn, {
            source: k,
            onCancel: () => {
              A(null);
            },
            onSave: (e) => {
              (O(e), A(null), I(null), L(null));
            },
          }),
    ],
  });
}
function Ri() {
  let e = (0, Z.c)(6),
    t = ve(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(q, {
        id: `profile.usernameHelper`,
        defaultMessage: `Use 3-20 lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Helper text explaining allowed username characters`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t.formatMessage({
        id: `profile.usernameRequirementsLabel`,
        defaultMessage: `Username requirements`,
        description: `Accessible label for the username requirements tooltip trigger`,
      })),
      (e[1] = t),
      (e[2] = r));
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(jt, { "aria-hidden": !0, className: `icon-2xs` })), (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === r
      ? (a = e[5])
      : ((a = (0, $.jsx)(we, {
          side: `top`,
          tooltipContent: n,
          children: (0, $.jsx)(`button`, {
            type: `button`,
            "aria-label": r,
            className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-token-text-tertiary outline-none hover:text-token-text-primary focus-visible:ring-1 focus-visible:ring-token-focus-border`,
            children: i,
          }),
        })),
        (e[4] = r),
        (e[5] = a)),
    a
  );
}
function zi(e) {
  let t = (0, Z.c)(2),
    { accountLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`span`, {
          className: `inline-flex h-6 items-center rounded-lg border border-token-border-light px-[5px] text-sm leading-5 text-token-text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Bi(e, t) {
  return (
    Wi(e) ??
    t.formatMessage({
      id: `profile.displayNameUpdateError`,
      defaultMessage: `Unable to update display name`,
      description: `Fallback error shown when profile display name update fails`,
    })
  );
}
function Vi(e, t) {
  return e instanceof Et
    ? Gi(e.reason, t)
    : (Wi(e) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function Hi(e, t) {
  return (
    Wi(e) ??
    t.formatMessage({
      id: `profile.photoUpdateError`,
      defaultMessage: `Unable to update profile picture`,
      description: `Fallback error shown when profile picture update fails`,
    })
  );
}
function Ui(e, t) {
  return (
    Wi(e) ??
    t.formatMessage({
      id: `profile.updateError`,
      defaultMessage: `Unable to update profile`,
      description: `Fallback error shown when profile update fails`,
    })
  );
}
function Wi(e) {
  if (e instanceof Error) {
    let t = i(e);
    if (t != null) return t.message;
    if (e.message.length > 0) {
      try {
        let t = Ca.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function Gi(e, t) {
  switch (e) {
    case `empty`:
      return t.formatMessage({
        id: `profile.usernameValidation.empty`,
        defaultMessage: `Enter a username`,
        description: `Error shown when submitting an empty profile username`,
      });
    case `invalidCharacters`:
      return t.formatMessage({
        id: `profile.usernameValidation.invalidCharacters`,
        defaultMessage: `Use only lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Error shown when a profile username contains unsupported characters`,
      });
    case `tooLong`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooLong`,
        defaultMessage: `Username must be 20 characters or fewer`,
        description: `Error shown when a profile username is too long`,
      });
    case `tooShort`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooShort`,
        defaultMessage: `Username must be at least 3 characters long`,
        description: `Error shown when a profile username is too short`,
      });
  }
}
function Ki(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile photo`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile photo`));
          return;
        }
        t({
          contentType: e.type.trim() || `image/jpeg`,
          dataUrl: r.result,
          filename: e.name.trim() || `profile-photo.jpg`,
        });
      }),
      r.readAsDataURL(e));
  });
}
function qi(e) {
  let t = (0, Z.c)(8),
    { avatar: n, showsPet: r } = e,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Ji, { className: `absolute top-0 left-[72px] size-20 rounded-full` })),
      (a = (0, $.jsx)(Ji, { className: `absolute top-[100px] left-0 h-8 w-56 rounded-lg` })),
      (o = (0, $.jsx)(Ji, { className: `absolute top-[136px] left-12 h-5 w-32 rounded-lg` })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = r
        ? (0, $.jsx)(`div`, {
            className: `absolute top-8 left-32 flex size-14 items-center justify-center`,
            children: (0, $.jsx)(ga, { avatar: n }),
          })
        : null),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] === s
      ? (c = t[7])
      : ((c = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `relative h-[152px] w-56`,
          children: [i, a, o, s],
        })),
        (t[6] = s),
        (t[7] = c)),
    c
  );
}
function Ji(e) {
  let t = (0, Z.c)(4),
    { className: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = c(Pi.profileLoadingBlock, `block`, n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(`span`, { "aria-hidden": !0, className: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function Yi() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)($.Fragment, { children: Ta.map(Xi) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Xi(e, t) {
  return (0, $.jsxs)(
    Q.Fragment,
    {
      children: [
        t > 0 ? (0, $.jsx)(ca, {}) : null,
        (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center gap-1 overflow-hidden px-3 py-2.5`,
          children: [
            (0, $.jsx)(Ji, { className: `h-5 w-12 rounded-md` }),
            (0, $.jsx)(Ji, { className: `h-5 w-20 rounded-md` }),
          ],
        }),
      ],
    },
    e,
  );
}
function Zi() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[60px] w-full items-center justify-center px-4 py-3 text-center text-base text-token-text-tertiary`,
          children: (0, $.jsx)(q, {
            id: `profile.stats.unavailable`,
            defaultMessage: `Profile stats unavailable`,
            description: `Empty state shown when profile stats fail to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Qi(e) {
  let t = (0, Z.c)(12),
    { columnCount: n, monthLabelCount: r } = e,
    i = `repeat(${n}, minmax(1px, 1fr))`,
    a;
  t[0] === i ? (a = t[1]) : ((a = { gridTemplateColumns: i }), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = Array.from({ length: n * 7 }, ea)), (t[2] = n), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, $.jsx)(`div`, {
        className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
        style: a,
        children: o,
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, $.jsx)(`div`, {
        className: `flex items-center justify-between`,
        children: Array.from({ length: r }, $i),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex flex-col gap-2`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function $i(e, t) {
  return (0, $.jsx)(Ji, { className: `h-4 w-6 rounded-md` }, t);
}
function ea(e, t) {
  return (0, $.jsx)(Ji, { className: `aspect-square w-full rounded-[4px]` }, t);
}
function ta() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
          children: (0, $.jsx)(q, {
            id: `profile.tokenUsage.unavailable`,
            defaultMessage: `Token usage unavailable`,
            description: `Empty state shown when profile token usage fails to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function na(e) {
  let t = (0, Z.c)(6),
    { insights: n, isLoading: r, isUnavailable: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[0] = a)) : (a = t[0]);
  let { availablePlugins: o } = de(M, a);
  if (r) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ia, {})), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (!i && n != null) {
    let e;
    return (
      t[2] !== n || t[3] !== o
        ? ((e = (0, $.jsx)(Yt, { insights: n, plugins: o })), (t[2] = n), (t[3] = o), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let s;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(ra, {})), (t[5] = s))
      : (s = t[5]),
    s
  );
}
function ra() {
  let e = (0, Z.c)(6),
    t = ve(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(q, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`div`, {
        className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
        children: (0, $.jsx)(q, {
          id: `profile.activity.unavailable`,
          defaultMessage: `Activity insights unavailable`,
          description: `Empty state shown when profile activity stats fail to load`,
        }),
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === n
      ? (a = e[5])
      : ((a = (0, $.jsxs)(`section`, {
          "aria-label": n,
          className: `flex flex-col gap-2`,
          children: [r, i],
        })),
        (e[4] = n),
        (e[5] = a)),
    a
  );
}
function ia() {
  let e = (0, Z.c)(8),
    t = ve(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(q, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          r,
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, oa),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(q, {
          id: `profile.activity.plugins.title`,
          defaultMessage: `Most used plugins`,
          description: `Heading for the most used Codex plugins on the profile page`,
        }),
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          a,
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, aa),
          }),
        ],
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] === n
      ? (s = e[7])
      : ((s = (0, $.jsxs)(`section`, {
          "aria-busy": !0,
          "aria-label": n,
          className: `grid grid-cols-2 gap-10`,
          children: [i, o],
        })),
        (e[6] = n),
        (e[7] = s)),
    s
  );
}
function aa(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, $.jsx)(Ji, { className: `size-6 rounded-lg` }),
            (0, $.jsx)(Ji, { className: `h-5 w-24 rounded-md` }),
          ],
        }),
        (0, $.jsx)(Ji, { className: `h-5 w-14 rounded-md` }),
      ],
    },
    t,
  );
}
function oa(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsx)(Ji, { className: `h-5 w-24 rounded-md` }),
        (0, $.jsx)(Ji, { className: `h-5 w-10 rounded-md` }),
      ],
    },
    t,
  );
}
function sa(e) {
  let t = (0, Z.c)(7),
    { label: n, value: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, $.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-primary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, $.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-secondary`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center overflow-hidden px-3 py-2.5 text-center text-base font-normal`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function ca() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `my-3 w-px shrink-0 self-stretch rounded-sm bg-token-border-light`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function la(e) {
  let t = e % 7;
  return (Math.floor(e / 7) * 8 + t * 12) / 1e3;
}
function ua(e) {
  let t = St(0, e),
    n = new Date(`${e}T00:00:00.000Z`),
    r = n.getUTCMonth(),
    i = n.getUTCFullYear(),
    a = Math.min(va, da(t, e) + 1);
  return Array.from({ length: a }, (e, t) => {
    let n = t - (a - 1);
    return new Date(Date.UTC(i, r + n, 1)).toISOString();
  });
}
function da(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`),
    r = new Date(`${t}T00:00:00.000Z`);
  return (r.getUTCFullYear() - n.getUTCFullYear()) * 12 + r.getUTCMonth() - n.getUTCMonth();
}
function fa(e) {
  let t = (0, Z.c)(10),
    { dateIso: n, tokenCount: r, todayIso: i } = e,
    a = ve(),
    o;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((o = ma({ dateIso: n, intl: a, todayIso: i })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== a || t[5] !== r ? ((s = yt(a, r)), (t[4] = a), (t[5] = r), (t[6] = s)) : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsx)(q, {
          id: `profile.tokenUsage.cellTooltip`,
          defaultMessage: `{tokens} tokens on {date}`,
          description: `Tooltip for a token usage chart cell`,
          values: { date: o, tokens: s },
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function pa(e) {
  let t = (0, Z.c)(10),
    { chartView: n, tokenCount: r, weekStartIso: i } = e,
    a = ve(),
    o;
  t[0] !== a || t[1] !== r ? ((o = yt(a, r)), (t[0] = a), (t[1] = r), (t[2] = o)) : (o = t[2]);
  let s = o,
    c;
  t[3] !== a || t[4] !== i
    ? ((c = a.formatDate(new Date(`${i}T00:00:00.000Z`), {
        day: `numeric`,
        month: `short`,
        timeZone: `UTC`,
        year: `numeric`,
      })),
      (t[3] = a),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l = c,
    u;
  return (
    t[6] !== n || t[7] !== s || t[8] !== l
      ? ((u =
          n === `weekly`
            ? (0, $.jsx)(q, {
                id: `profile.tokenUsage.weekTooltip`,
                defaultMessage: `{tokens} tokens on week of {weekStart}`,
                description: `Tooltip for a weekly token usage chart column`,
                values: { tokens: s, weekStart: l },
              })
            : (0, $.jsx)(q, {
                id: `profile.tokenUsage.cumulativeWeekTooltip`,
                defaultMessage: `{tokens} tokens through week of {weekStart}`,
                description: `Tooltip for a cumulative token usage chart column`,
                values: { tokens: s, weekStart: l },
              })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function ma({ dateIso: e, intl: t, todayIso: n }) {
  let r = new Date(`${e}T00:00:00.000Z`),
    i = t.formatDate(r, { day: `numeric`, month: `short`, timeZone: `UTC` }),
    a = r.getUTCFullYear();
  return a === Number(n.slice(0, 4)) ? i : `${i}, ${a}`;
}
function ha(e) {
  let t = (0, Z.c)(10),
    { active: n, children: r, disabled: i, onSelect: a } = e,
    o = i ? `cursor-default` : `cursor-interaction`,
    s = n ? `text-token-text-primary` : `text-token-text-tertiary`,
    l = !n && !i && `hover:text-token-text-primary focus-visible:text-token-text-primary`,
    u;
  t[0] !== o || t[1] !== s || t[2] !== l
    ? ((u = c(
        `text-base leading-5 font-normal outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
        o,
        s,
        l,
      )),
      (t[0] = o),
      (t[1] = s),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== u
      ? ((d = (0, $.jsx)(`button`, {
          type: `button`,
          className: u,
          "aria-pressed": n,
          disabled: i,
          onClick: a,
          children: r,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function ga(e) {
  let t = (0, Z.c)(9),
    { avatar: n } = e,
    [r, i] = (0, Q.useState)(!1),
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = () => {
        i(!0);
      }),
      (o = () => {
        i(!1);
      }),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s = r ? `jumping` : `idle`,
    c;
  t[2] !== n.assetRef || t[3] !== n.spritesheetUrl || t[4] !== s
    ? ((c = (0, $.jsx)(Qe, {
        assetRef: n.assetRef,
        className: `scale-75`,
        spritesheetUrl: n.spritesheetUrl,
        state: s,
      })),
      (t[2] = n.assetRef),
      (t[3] = n.spritesheetUrl),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== n.id || t[7] !== c
      ? ((l = (0, $.jsx)(`div`, {
          className: `flex size-14 shrink-0 items-center justify-center overflow-visible`,
          "data-avatar-id": n.id,
          onPointerEnter: a,
          onPointerLeave: o,
          children: c,
        })),
        (t[6] = n.id),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function _a(e) {
  let t = Object.fromEntries(Object.entries(e));
  if (Object.keys(t).length === 0) return e.stack ?? e.message;
  try {
    return JSON.stringify({ name: e.name, message: e.message, stack: e.stack, ...t }, null, 2);
  } catch {
    return e.stack ?? e.message;
  }
}
var Z, Q, $, va, ya, ba, xa, Sa, Ca, wa, Ta;
e(() => {
  ((Z = Ee()),
    K(),
    P(),
    k(),
    a(),
    V(),
    (Q = t(b(), 1)),
    G(),
    xe(),
    g(),
    Ze(),
    It(),
    Rt(),
    Bt(),
    F(),
    T(),
    Be(),
    s(),
    pe(),
    Ye(),
    Tt(),
    qe(),
    ne(),
    at(),
    Mt(),
    Pe(),
    d(),
    r(),
    Ge(),
    N(),
    _(),
    _e(),
    oe(),
    Se(),
    n(),
    ln(),
    At(),
    Fn(),
    Gt(),
    Ai(),
    Fi(),
    ($ = l()),
    (va = 12),
    (ya = {
      0: `bg-[var(--profile-usage-level-0)]`,
      1: `bg-[var(--profile-usage-level-1)]`,
      2: `bg-[var(--profile-usage-level-2)]`,
      3: `bg-[var(--profile-usage-level-3)]`,
      4: `bg-[var(--profile-usage-level-4)]`,
    }),
    (ba = `bg-[color-mix(in_srgb,var(--color-token-primary)_78%,transparent)]`),
    (xa = `bg-[var(--color-token-primary)] ring-1 ring-[color-mix(in_srgb,var(--color-token-primary)_55%,transparent)]`),
    (Sa = `bg-[color-mix(in_srgb,var(--color-token-primary)_14%,var(--profile-usage-level-0))]`),
    (Ca = B({ type: Le(), msg: Le() })),
    (wa = `·`),
    (Ta = [
      `totalTextTokens`,
      `peakTokens`,
      `longestTaskDurationMs`,
      `currentStreakDays`,
      `longestStreakDays`,
    ]));
})();
export { Ii as Profile };
//# sourceMappingURL=profile.js.map
