import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Bs as n,
  Bt as r,
  Dt as i,
  El as a,
  Et as o,
  Fs as s,
  K as c,
  Ka as l,
  Rt as u,
  Tl as d,
  Tt as f,
  W as p,
  Xs as m,
  bt as h,
  gs as g,
  nc as _,
  tc as v,
  vl as y,
  wt as b,
  xt as x,
  zt as S,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  An as C,
  B as w,
  hs as T,
  kn as E,
  ms as D,
  z as O,
} from "./app-initial~app-main~onboarding-page.js";
import {
  $ as k,
  An as ee,
  In as te,
  On as A,
  Pn as ne,
  Rn as j,
  _ as M,
  ct as N,
  g as P,
  jn as re,
  lt as ie,
  tt as F,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  $h as ae,
  Bm as I,
  Bs as L,
  Fm as oe,
  Gd as R,
  Ib as z,
  Im as se,
  Mm as ce,
  Nm as B,
  Pm as le,
  Rb as ue,
  Rm as de,
  Rs as fe,
  Sx as V,
  Vm as pe,
  b as me,
  nx as H,
  qd as U,
  rx as W,
  vx as he,
  wx as ge,
  x as _e,
  yx as G,
  zm as K,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { Dt as ve, Tt as ye } from "./app-initial~app-main~automations-page.js";
import {
  Al as be,
  Ao as xe,
  Ea as Se,
  Fi as Ce,
  Ii as we,
  Il as Te,
  Io as Ee,
  Li as De,
  Ri as Oe,
  Uo as ke,
  Wo as Ae,
  at as je,
  ba as Me,
  ci as Ne,
  fa as Pe,
  fi as Fe,
  li as Ie,
  oi as Le,
  ot as Re,
  pa as ze,
  si as Be,
  vu as Ve,
  wa as He,
  xa as Ue,
  yu as We,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import { n as Ge, t as Ke } from "./codex-avatar.js";
import {
  F as qe,
  L as Je,
  P as Ye,
  Q as Xe,
  Z as q,
  v as Ze,
  y as Qe,
  z as $e,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  It as et,
  Lt as tt,
  Rt as nt,
  T as rt,
  Xn as it,
  Zn as at,
  w as ot,
  zt as st,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~mam8fk3d.js";
import {
  c as ct,
  s as lt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n.js";
import {
  g as ut,
  m as dt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~filfqv6y.js";
import {
  C as ft,
  E as pt,
  S as mt,
  T as ht,
  _ as gt,
  a as _t,
  b as vt,
  c as yt,
  d as bt,
  f as xt,
  g as St,
  h as Ct,
  i as wt,
  l as Tt,
  m as Et,
  n as Dt,
  o as Ot,
  p as kt,
  r as At,
  s as jt,
  t as Mt,
  v as Nt,
  w as Pt,
  x as Ft,
  y as It,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  a as Lt,
  i as Rt,
  n as zt,
  r as Bt,
  t as Vt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~hotkey-window-thread-pa~f79pop3z.js";
import {
  a as Ht,
  o as Ut,
  r as Wt,
  t as Gt,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js";
import { n as Kt, r as qt } from "./custom-avatars-query.js";
import { n as Jt, t as Yt } from "./plus-sm.js";
function Xt(e) {
  let t = (0, sn.c)(40),
    { insights: n, plugins: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o = ge(),
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
    let e = n.invocations?.filter(an),
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
          children: (0, J.jsx)(V, {
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
            : (0, J.jsx)(Qt, {
                label: (0, J.jsx)(V, {
                  id: `profile.activity.features.fastMode`,
                  defaultMessage: `Fast Mode`,
                  description: `Fast Mode feature label on the profile page`,
                }),
                isEmpty: !c,
                tooltipContent: (0, J.jsx)(V, {
                  id: `profile.activity.features.fastModeTooltip`,
                  defaultMessage: `How often you use /fast mode`,
                  description: `Tooltip explaining the Fast Mode profile metric`,
                }),
                value:
                  n.fastModePercent != null && n.fastModePercent !== 0
                    ? rn(o, n.fastModePercent)
                    : (0, J.jsx)($t, {}),
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
            ? (0, J.jsx)(Qt, {
                label: (0, J.jsx)(V, {
                  id: `profile.activity.features.mostUsedReasoning`,
                  defaultMessage: `Most used reasoning`,
                  description: `Most used reasoning effort feature label on the profile page`,
                }),
                isEmpty: !l,
                tooltipContent: (0, J.jsx)(V, {
                  id: `profile.activity.features.reasoningEffortTooltip`,
                  defaultMessage: `Your most used reasoning effort`,
                  description: `Tooltip explaining the reasoning effort profile metric`,
                }),
                value: l
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [(0, J.jsx)(tn, { effort: r }), ` · `, rn(o, i)],
                    })
                  : (0, J.jsx)($t, {}),
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
            : (0, J.jsx)(Qt, {
                label: (0, J.jsx)(V, {
                  id: `profile.activity.features.skillsExplored`,
                  defaultMessage: `Skills explored`,
                  description: `Unique skills explored feature label on the profile page`,
                }),
                isEmpty: n.skillsExplored === 0,
                tooltipContent: (0, J.jsx)(V, {
                  id: `profile.activity.features.skillsExploredTooltip`,
                  defaultMessage: `The number of unique skills you've used`,
                  description: `Tooltip explaining the skills explored profile metric`,
                }),
                value:
                  n.skillsExplored === 0 ? (0, J.jsx)(en, {}) : o.formatNumber(n.skillsExplored),
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
            : (0, J.jsx)(Qt, {
                label: (0, J.jsx)(V, {
                  id: `profile.activity.features.totalSkillsUsed`,
                  defaultMessage: `Total skills used`,
                  description: `Total skills used feature label on the profile page`,
                }),
                isEmpty: !u,
                tooltipContent: (0, J.jsx)(V, {
                  id: `profile.activity.features.totalSkillsUsedTooltip`,
                  defaultMessage: `Total times Codex used a skill`,
                  description: `Tooltip explaining the total skills used profile metric`,
                }),
                value: u ? o.formatNumber(n.totalSkillsUsed) : (0, J.jsx)(en, {}),
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
            : (0, J.jsx)(Qt, {
                label: (0, J.jsx)(V, {
                  id: `profile.activity.features.totalThreads`,
                  defaultMessage: `Total threads`,
                  description: `Total threads feature label on the profile page`,
                }),
                isEmpty: n.totalThreads === 0,
                tooltipContent: (0, J.jsx)(V, {
                  id: `profile.activity.features.totalThreadsTooltip`,
                  defaultMessage: `Total unique conversations with Codex`,
                  description: `Tooltip explaining the total threads profile metric`,
                }),
                value: n.totalThreads === 0 ? (0, J.jsx)(en, {}) : o.formatNumber(n.totalThreads),
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
                    children: (0, J.jsx)(V, {
                      id: `profile.activity.plugins.title`,
                      defaultMessage: `Most used plugins`,
                      description: `Heading for the most used Codex plugins on the profile page`,
                    }),
                  }),
                  e.length === 0
                    ? (0, J.jsxs)(`div`, {
                        className: `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-token-border-light text-base leading-5 text-token-text-tertiary`,
                        children: [
                          (0, J.jsx)(it, { "aria-hidden": !0, className: `icon-xs` }),
                          (0, J.jsxs)(`div`, {
                            className: `flex items-center gap-1`,
                            children: [
                              (0, J.jsx)(V, {
                                id: `profile.activity.plugins.empty`,
                                defaultMessage: `No plugins used yet ·`,
                                description: `Empty state for the most used plugins on the profile page`,
                              }),
                              (0, J.jsx)(L, {
                                className: `cursor-interaction !text-token-text-tertiary underline underline-offset-2 hover:!text-token-text-secondary`,
                                to: `/skills`,
                                children: (0, J.jsx)(V, {
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
                            Zt,
                            { invocation: e, plugin: on(e, a) },
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
function Zt(e) {
  let t = (0, sn.c)(25),
    { invocation: n, plugin: r } = e,
    i = ge(),
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
        children: (0, J.jsx)(nn, { name: a, plugin: r, pluginId: n.plugin_id, type: n.type }),
      })),
      (t[6] = n.plugin_id),
      (t[7] = n.type),
      (t[8] = a),
      (t[9] = r),
      (t[10] = l))
    : (l = t[10]);
  let u = ln[n.type],
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
function Qt(e) {
  let t = (0, sn.c)(15),
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
    c;
  t[2] === s ? (c = t[3]) : ((c = H(`shrink-0 tabular-nums`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = (0, J.jsx)(`span`, { className: `inline-block`, tabIndex: 0, children: a })),
      (t[4] = a),
      (t[5] = l));
  let u;
  t[6] !== l || t[7] !== i
    ? ((u = (0, J.jsx)(k, {
        delayDuration: 250,
        disablePadding: !0,
        side: `top`,
        tooltipClassName: `flex h-[38px] items-center gap-2.5 p-2`,
        tooltipContent: i,
        children: l,
      })),
      (t[6] = l),
      (t[7] = i),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== c || t[10] !== u
    ? ((d = (0, J.jsx)(`dd`, { className: c, children: u })), (t[9] = c), (t[10] = u), (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== o || t[13] !== d
      ? ((f = (0, J.jsxs)(`div`, {
          className: `flex h-6 min-w-0 items-center justify-between gap-3 text-base leading-5`,
          children: [o, d],
        })),
        (t[12] = o),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function $t() {
  let e = (0, sn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(V, {
          id: `profile.activity.features.notUsed`,
          defaultMessage: `Not used`,
          description: `Empty activity metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function en() {
  let e = (0, sn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(V, {
          id: `profile.activity.features.none`,
          defaultMessage: `None`,
          description: `Empty count metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function tn(e) {
  let t = (0, sn.c)(4),
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
        t[0] === n ? (e = t[1]) : ((e = (0, J.jsx)(P, { effort: n })), (t[0] = n), (t[1] = e)), e
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
function nn(e) {
  let t = (0, sn.c)(11),
    { name: n, plugin: r, pluginId: i, type: a } = e,
    o;
  t[0] !== n || t[1] !== a
    ? ((o =
        a === `plugin`
          ? (0, cn.createElement)(it, { "aria-hidden": !0, className: `icon-sm` })
          : (0, cn.createElement)(et(null, { fallbackName: n }), { className: `icon-sm` })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (r?.logoPath != null || r?.logoDarkPath != null) {
    let e;
    return (
      t[3] !== s || t[4] !== r.logoDarkPath || t[5] !== r.logoPath
        ? ((e = (0, J.jsx)(Me, {
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
        let t = He(i?.split(`@`)[0] ?? (a === `skill` ? n.split(`:`)[0] : n));
        if (t != null) {
          e = (0, cn.createElement)(t, { "aria-hidden": !0, className: `icon-sm` });
          break bb0;
        }
      }
      ((t[7] = n), (t[8] = i), (t[9] = a), (t[10] = e));
    } else e = t[10];
    if (e !== Symbol.for(`react.early_return_sentinel`)) return e;
  }
  return s;
}
function rn(e, t) {
  return e.formatNumber(t / 100, { maximumFractionDigits: 0, style: `percent` });
}
function an(e) {
  return (
    e.usage_count != null &&
    (e.type === `plugin` ? !!e.plugin_name?.trim() : !!e.skill_name?.trim())
  );
}
function on(e, t) {
  if (e.plugin_id) {
    let n = t.find((t) => t.plugin.id === e.plugin_id);
    if (n != null) return n;
  }
  let n = e.plugin_name ?? (e.type === `skill` ? e.skill_name?.split(`:`)[0] : null);
  return t.find((e) => e.plugin.name === n) ?? null;
}
var sn,
  cn,
  J,
  ln,
  un = e(() => {
    ((sn = d()),
      W(),
      (cn = t(a(), 1)),
      G(),
      fe(),
      Se(),
      Ue(),
      F(),
      M(),
      at(),
      tt(),
      (J = y()),
      (ln = { plugin: `@`, skill: `$` }));
  }),
  dn,
  fn,
  pn = e(() => {
    (t(a()),
      (dn = y()),
      (fn = (e) =>
        (0, dn.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, dn.jsx)(`path`, {
            d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
            fill: `currentColor`,
          }),
        })));
  });
function mn(e) {
  let t = (0, wn.c)(99),
    { source: n, onCancel: r, onSave: i } = e,
    a = ge(),
    [o, s] = (0, Tn.useState)(null),
    [c, l] = (0, Tn.useState)(null),
    [u, d] = (0, Tn.useState)(!1),
    [f, p] = (0, Tn.useState)(!1),
    m;
  t[0] === o
    ? (m = t[1])
    : ((m = o == null ? 1 : gn(o.naturalWidth, o.naturalHeight)), (t[0] = o), (t[1] = m));
  let h = m,
    g = o == null ? 1 : o.zoom / h,
    _;
  t[2] !== o || t[3] !== h
    ? ((_ = (e) => {
        o != null && s(yn(o, h * e));
      }),
      (t[2] = o),
      (t[3] = h),
      (t[4] = _))
    : (_ = t[4]);
  let v = _,
    y;
  t[5] !== o || t[6] !== f || t[7] !== i || t[8] !== n
    ? ((y = async () => {
        if (!(o == null || f)) {
          (p(!0), d(!1));
          try {
            let e = await bn(n, o);
            (p(!1), i(e));
          } catch {
            (p(!1), d(!0));
          }
        }
      }),
      (t[5] = o),
      (t[6] = f),
      (t[7] = i),
      (t[8] = n),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] !== f || t[11] !== r
    ? ((x = (e) => {
        !e && !f && r();
      }),
      (t[10] = f),
      (t[11] = r),
      (t[12] = x))
    : (x = t[12]);
  let S = !f,
    C;
  t[13] === b
    ? (C = t[14])
    : ((C = (e) => {
        (e.preventDefault(), b());
      }),
      (t[13] = b),
      (t[14] = C));
  let w;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(De, { className: `sr-only`, children: (0, Y.jsx)(V, { ...Fn.title }) })),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Y.jsx)(we, {
        className: `sr-only`,
        children: (0, Y.jsx)(V, {
          id: `profile.photoCrop.description`,
          defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
          description: `Description for the profile picture crop dialog`,
        }),
      })),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(Ne, { title: (0, Y.jsx)(V, { ...Fn.title }) })), (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { maxWidth: Dn }), (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] !== o || t[20] !== n.dataUrl
    ? ((O =
        o == null
          ? null
          : (0, Y.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 z-0 overflow-hidden`,
              style: { WebkitMaskImage: Pn, maskImage: Pn },
              children: (0, Y.jsxs)(`div`, {
                className: `absolute top-0 left-0 overflow-hidden`,
                style: {
                  height: o.naturalHeight * o.zoom,
                  transform: `translate(${kn + o.offsetX}px, ${kn + o.offsetY}px)`,
                  width: o.naturalWidth * o.zoom,
                },
                children: [
                  (0, Y.jsx)(`img`, {
                    src: n.dataUrl,
                    alt: ``,
                    className: `block max-w-none select-none`,
                    draggable: !1,
                    style: {
                      filter: `blur(${Nn}px)`,
                      height: `calc(100% + ${Nn * 2}px)`,
                      transform: `translate(${-Nn}px, ${-Nn}px)`,
                      width: `calc(100% + ${Nn * 2}px)`,
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
      (t[21] = O))
    : (O = t[21]);
  let k;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = { height: En, width: En }), (t[22] = k))
    : (k = t[22]);
  let ee;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (e) => {
        s(hn(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight));
      }),
      (t[23] = ee))
    : (ee = t[23]);
  let te;
  t[24] === o
    ? (te = t[25])
    : ((te = (e) => {
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
      (t[25] = te));
  let A;
  t[26] === c
    ? (A = t[27])
    : ((A = (e) => {
        c != null &&
          e.pointerId === c.pointerId &&
          s((t) =>
            t == null
              ? t
              : {
                  ...t,
                  offsetX: vn(c.offsetX + e.clientX - c.pointerX, t.naturalWidth, t.zoom),
                  offsetY: vn(c.offsetY + e.clientY - c.pointerY, t.naturalHeight, t.zoom),
                },
          );
      }),
      (t[26] = c),
      (t[27] = A));
  let ne, j;
  t[28] === c?.pointerId
    ? ((ne = t[29]), (j = t[30]))
    : ((ne = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (j = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (t[28] = c?.pointerId),
      (t[29] = ne),
      (t[30] = j));
  let M;
  t[31] === o
    ? (M = t[32])
    : ((M =
        o == null
          ? void 0
          : {
              height: o.naturalHeight * o.zoom,
              transform: `translate(${o.offsetX}px, ${o.offsetY}px)`,
              width: o.naturalWidth * o.zoom,
            }),
      (t[31] = o),
      (t[32] = M));
  let N;
  t[33] !== n.dataUrl || t[34] !== te || t[35] !== A || t[36] !== ne || t[37] !== j || t[38] !== M
    ? ((N = (0, Y.jsx)(`div`, {
        className: `relative z-10 overflow-hidden rounded-full bg-token-bg-secondary ring-1 ring-token-border-light`,
        style: k,
        children: (0, Y.jsx)(`img`, {
          src: n.dataUrl,
          alt: ``,
          className: `absolute top-0 left-0 max-h-none max-w-none cursor-interaction touch-none select-none`,
          draggable: !1,
          onLoad: ee,
          onPointerDown: te,
          onPointerMove: A,
          onPointerUp: ne,
          onPointerCancel: j,
          style: M,
        }),
      })),
      (t[33] = n.dataUrl),
      (t[34] = te),
      (t[35] = A),
      (t[36] = ne),
      (t[37] = j),
      (t[38] = M),
      (t[39] = N))
    : (N = t[39]);
  let P;
  t[40] !== O || t[41] !== N
    ? ((P = (0, Y.jsx)(Ie, {
        className: `items-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `relative isolate flex aspect-square w-full items-center justify-center`,
          style: D,
          children: [O, N],
        }),
      })),
      (t[40] = O),
      (t[41] = N),
      (t[42] = P))
    : (P = t[42]);
  let re;
  t[43] === a
    ? (re = t[44])
    : ((re = a.formatMessage({
        id: `profile.photoCrop.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the profile picture zoom out button`,
      })),
      (t[43] = a),
      (t[44] = re));
  let ie = o == null || f || g <= 1,
    F;
  t[45] !== v || t[46] !== g
    ? ((F = () => {
        v(Math.max(1, g - 0.1));
      }),
      (t[45] = v),
      (t[46] = g),
      (t[47] = F))
    : (F = t[47]);
  let ae;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Y.jsx)(fn, { className: `icon-sm` })), (t[48] = ae))
    : (ae = t[48]);
  let I;
  t[49] !== re || t[50] !== ie || t[51] !== F
    ? ((I = (0, Y.jsx)(q, {
        "aria-label": re,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: ie,
        size: `iconSm`,
        onClick: F,
        children: ae,
      })),
      (t[49] = re),
      (t[50] = ie),
      (t[51] = F),
      (t[52] = I))
    : (I = t[52]);
  let L;
  t[53] === a
    ? (L = t[54])
    : ((L = a.formatMessage({
        id: `profile.photoCrop.zoomLabel`,
        defaultMessage: `Zoom profile picture`,
        description: `Accessible label for the profile picture crop zoom slider`,
      })),
      (t[53] = a),
      (t[54] = L));
  let oe = o == null || f,
    R;
  t[55] === v
    ? (R = t[56])
    : ((R = (e) => {
        v(Number(e.target.value));
      }),
      (t[55] = v),
      (t[56] = R));
  let z;
  t[57] !== L || t[58] !== oe || t[59] !== R || t[60] !== g
    ? ((z = (0, Y.jsx)(`input`, {
        type: `range`,
        "aria-label": L,
        className: `h-0.5 flex-1 appearance-none rounded-full bg-token-border-light [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        disabled: oe,
        min: 1,
        max: 3,
        step: 0.01,
        value: g,
        onChange: R,
      })),
      (t[57] = L),
      (t[58] = oe),
      (t[59] = R),
      (t[60] = g),
      (t[61] = z))
    : (z = t[61]);
  let se;
  t[62] === a
    ? (se = t[63])
    : ((se = a.formatMessage({
        id: `profile.photoCrop.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the profile picture zoom in button`,
      })),
      (t[62] = a),
      (t[63] = se));
  let ce = o == null || f || g >= 3,
    B;
  t[64] !== v || t[65] !== g
    ? ((B = () => {
        v(Math.min(3, g + 0.1));
      }),
      (t[64] = v),
      (t[65] = g),
      (t[66] = B))
    : (B = t[66]);
  let le;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Y.jsx)(Yt, { className: `icon-sm` })), (t[67] = le))
    : (le = t[67]);
  let ue;
  t[68] !== se || t[69] !== ce || t[70] !== B
    ? ((ue = (0, Y.jsx)(q, {
        "aria-label": se,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: ce,
        size: `iconSm`,
        onClick: B,
        children: le,
      })),
      (t[68] = se),
      (t[69] = ce),
      (t[70] = B),
      (t[71] = ue))
    : (ue = t[71]);
  let de;
  t[72] !== I || t[73] !== z || t[74] !== ue
    ? ((de = (0, Y.jsx)(Ie, {
        className: `relative z-10 items-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex w-full max-w-[276px] items-center gap-5`,
          children: [I, z, ue],
        }),
      })),
      (t[72] = I),
      (t[73] = z),
      (t[74] = ue),
      (t[75] = de))
    : (de = t[75]);
  let fe;
  t[76] === u
    ? (fe = t[77])
    : ((fe = u
        ? (0, Y.jsx)(Ie, {
            className: `items-center`,
            children: (0, Y.jsx)(`div`, {
              className: `text-center text-sm leading-5 text-token-error-foreground`,
              role: `alert`,
              children: (0, Y.jsx)(V, {
                id: `profile.photoCrop.error`,
                defaultMessage: `Unable to process the profile picture`,
                description: `Error shown when profile picture cropping fails`,
              }),
            }),
          })
        : null),
      (t[76] = u),
      (t[77] = fe));
  let pe;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Y.jsx)(V, {
        id: `profile.photoCrop.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile picture cropping`,
      })),
      (t[78] = pe))
    : (pe = t[78]);
  let me;
  t[79] !== f || t[80] !== r
    ? ((me = (0, Y.jsx)(q, { color: `ghost`, disabled: f, onClick: r, children: pe })),
      (t[79] = f),
      (t[80] = r),
      (t[81] = me))
    : (me = t[81]);
  let H = o == null,
    U;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Y.jsx)(V, {
        id: `profile.photoCrop.save`,
        defaultMessage: `Save`,
        description: `Button that saves a cropped profile picture`,
      })),
      (t[82] = U))
    : (U = t[82]);
  let W;
  t[83] !== f || t[84] !== H
    ? ((W = (0, Y.jsx)(q, {
        type: `submit`,
        color: `primary`,
        disabled: H,
        loading: f,
        children: U,
      })),
      (t[83] = f),
      (t[84] = H),
      (t[85] = W))
    : (W = t[85]);
  let he;
  t[86] !== me || t[87] !== W
    ? ((he = (0, Y.jsxs)(Be, { children: [me, W] })), (t[86] = me), (t[87] = W), (t[88] = he))
    : (he = t[88]);
  let _e;
  t[89] !== P || t[90] !== de || t[91] !== fe || t[92] !== he || t[93] !== C
    ? ((_e = (0, Y.jsxs)(Le, {
        as: `form`,
        className: `gap-5`,
        onSubmit: C,
        children: [w, T, E, P, de, fe, he],
      })),
      (t[89] = P),
      (t[90] = de),
      (t[91] = fe),
      (t[92] = he),
      (t[93] = C),
      (t[94] = _e))
    : (_e = t[94]);
  let G;
  return (
    t[95] !== x || t[96] !== _e || t[97] !== S
      ? ((G = (0, Y.jsx)(Ce, {
          open: !0,
          onOpenChange: x,
          showDialogClose: S,
          size: `default`,
          children: _e,
        })),
        (t[95] = x),
        (t[96] = _e),
        (t[97] = S),
        (t[98] = G))
      : (G = t[98]),
    G
  );
}
function hn(e, t) {
  let n = gn(e, t);
  return { naturalHeight: t, naturalWidth: e, offsetX: _n(e, n), offsetY: _n(t, n), zoom: n };
}
function gn(e, t) {
  return Math.max(En / e, En / t);
}
function _n(e, t) {
  return (En - e * t) / 2;
}
function vn(e, t, n) {
  return Math.min(0, Math.max(En - t * n, e));
}
function yn(e, t) {
  let n = (En / 2 - e.offsetX) / e.zoom,
    r = (En / 2 - e.offsetY) / e.zoom;
  return {
    ...e,
    offsetX: vn(En / 2 - n * t, e.naturalWidth, t),
    offsetY: vn(En / 2 - r * t, e.naturalHeight, t),
    zoom: t,
  };
}
async function bn(e, t) {
  let n = await xn(e.dataUrl),
    r = document.createElement(`canvas`);
  ((r.height = On), (r.width = On));
  let i = r.getContext(`2d`);
  if (i == null) throw Error(`Unable to create profile photo crop canvas`);
  i.drawImage(n, -t.offsetX / t.zoom, -t.offsetY / t.zoom, En / t.zoom, En / t.zoom, 0, 0, On, On);
  let a = Cn(e.contentType),
    o = r.toDataURL(a, 0.92),
    s = await Sn(r, a);
  return { photo: new File([s], e.filename, { type: s.type }), previewUrl: o };
}
function xn(e) {
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
function Sn(e, t) {
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
function Cn(e) {
  return e === `image/png` || e === `image/webp` ? e : `image/jpeg`;
}
var wn,
  Tn,
  Y,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = e(() => {
    ((wn = d()),
      (Tn = t(a(), 1)),
      G(),
      Xe(),
      Oe(),
      Fe(),
      pn(),
      Jt(),
      (Y = y()),
      (En = 220),
      (Dn = 360),
      (On = 512),
      (kn = (Dn - En) / 2),
      (An = En / 2),
      (jn = Dn / 2),
      (Mn = jn - 32),
      (Nn = 2),
      (Pn = `radial-gradient(circle at center, transparent 0 ${An - 0.5}px, black ${An}px ${Mn}px, transparent ${jn}px)`),
      (Fn = he({
        title: {
          id: `profile.photoCrop.title`,
          defaultMessage: `Adjust your image`,
          description: `Title for the profile picture crop dialog`,
        },
      })));
  }),
  Ln,
  Rn = e(() => {
    Ln = `` + new URL(`OpenAISans-Medium-B7nJY_kG.woff2`, import.meta.url).href;
  }),
  zn,
  Bn = e(() => {
    zn = `` + new URL(`OpenAISans-Regular-DFZxHTKM.woff2`, import.meta.url).href;
  }),
  Vn,
  Hn = e(() => {
    Vn = `<svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
function Un() {
  let e = document.documentElement,
    t = window.getComputedStyle(e),
    n = or(e);
  try {
    return {
      accentColor: ir(
        t,
        n,
        `color`,
        [`--codex-base-accent`, `--color-token-primary`],
        Yr.accentColor,
      ),
      backgroundColor: ir(
        t,
        n,
        `backgroundColor`,
        [`--codex-base-surface`, `--color-token-main-surface-primary`],
        Yr.backgroundColor,
      ),
      primaryTextColor: ir(
        t,
        n,
        `color`,
        [`--codex-base-ink`, `--color-token-text-primary`],
        Yr.primaryTextColor,
      ),
      secondaryTextColor: ir(
        t,
        n,
        `color`,
        [`--color-token-text-secondary`, `--color-token-description-foreground`],
        Yr.secondaryTextColor,
      ),
    };
  } finally {
    n.remove();
  }
}
async function Wn({
  displayNameLabel: e,
  imageUrl: t,
  initials: n,
  petImageUrl: r,
  stats: i,
  theme: a,
  usernameLabel: o,
  usageCells: s,
}) {
  let c = await qn(
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
  return r == null ? vr(c) : Jn(c, r);
}
async function Gn(e) {
  let t = await qn(e, !0);
  return { createImageBlob: (e) => Jn(t, e) };
}
function Kn(e) {
  let t = URL.createObjectURL(e),
    n = document.createElement(`a`);
  ((n.href = t), (n.download = yr), n.click(), window.setTimeout(() => URL.revokeObjectURL(t), 0));
}
async function qn(
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
  ((c.width = br * Sr), (c.height = xr * Sr));
  let l = c.getContext(`2d`);
  if (l == null) throw Error(`Unable to create profile share card canvas`);
  let [u, d] = await Promise.all([
    t == null ? Promise.resolve(null) : mr(t),
    gr(lr(i.secondaryTextColor), null),
    Yn(),
  ]);
  if (d == null) throw Error(`Unable to load Codex watermark`);
  let f = ar(i);
  return (
    l.scale(Sr, Sr),
    Zn(l, i),
    Qn(l, u, n, i),
    er(l, e, a, i, s),
    tr(l, d),
    nr(l, o, f.levelColors),
    rr(l, r, i, f.statDividerColor),
    c
  );
}
async function Jn(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = br * Sr), (n.height = xr * Sr));
  let r = n.getContext(`2d`);
  if (r == null) throw Error(`Unable to create profile share card canvas`);
  return (r.drawImage(e, 0, 0), r.scale(Sr, Sr), $n(r, await mr(t)), vr(n));
}
async function Yn() {
  (await Promise.all([Xn(zn, `400`), Xn(Ln, `500`)]), await document.fonts.ready);
}
async function Xn(e, t) {
  let n = new FontFace(Fr, `url(${e})`, { weight: t });
  (document.fonts.add(n), await n.load());
}
function Zn(e, t) {
  ((e.fillStyle = t.backgroundColor), fr(e, 0, 0, br, xr, wr), e.fill());
}
function Qn(e, t, n, r) {
  let i = Cr,
    a = Cr;
  (e.save(),
    fr(e, i, a, Tr, Tr, Tr / 2),
    e.clip(),
    t == null
      ? ((e.fillStyle = r.accentColor),
        e.fillRect(i, a, Tr, Tr),
        (e.fillStyle = r.backgroundColor),
        (e.font = `500 16px 'OpenAI Sans', system-ui, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(n, i + Tr / 2, a + Tr / 2))
      : dr(e, t, i, a, Tr, Tr),
    e.restore());
}
function $n(e, t) {
  t != null &&
    (e.save(),
    (e.imageSmoothingEnabled = !1),
    e.drawImage(t, 0, 0, t.naturalWidth / Ar, t.naturalHeight / jr, Or, kr, Er, Dr),
    e.restore());
}
function er(e, t, n, r, i) {
  let a = Cr + Tr + (i ? Mr : 12),
    o = Hr - a - 12;
  e.fillStyle = r.primaryTextColor;
  for (
    let n = Ir;
    n >= Lr &&
    ((e.font = `500 ${n}px 'OpenAI Sans', system-ui, sans-serif`),
    !(n === Lr || e.measureText(t).width <= o));
    --n
  );
  ((e.textAlign = `left`),
    (e.textBaseline = `middle`),
    e.fillText(pr(e, t, o), a, Rr),
    (e.fillStyle = r.secondaryTextColor),
    (e.font = `400 ${zr}px 'OpenAI Sans', system-ui, sans-serif`),
    e.fillText(pr(e, n, o), a, Br));
}
function tr(e, t) {
  e.drawImage(t, Hr, Ur, Nr, Pr);
}
function nr(e, t, n) {
  for (let r = 0; r < 182; r += 1) {
    let i = Math.floor(r / 7),
      a = r % 7,
      o = Cr + i * Kr,
      s = Wr + a * Kr,
      c = t[r];
    c != null && ((e.fillStyle = n[c]), fr(e, o, s, Gr, Gr, 4), e.fill());
  }
}
function rr(e, t, n, r) {
  t.forEach((t, i) => {
    i > 0 && ((e.fillStyle = r), fr(e, Cr + i * Jr, qr + 2, 1, 40, 0.5), e.fill());
    let a = Cr + i * Jr + Jr / 2,
      o = Jr - 8;
    ((e.fillStyle = n.primaryTextColor),
      (e.font = `500 18px 'OpenAI Sans', system-ui, sans-serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(pr(e, t.value, o), a, qr + 13),
      (e.fillStyle = n.secondaryTextColor),
      (e.font = `400 14px 'OpenAI Sans', system-ui, sans-serif`),
      e.fillText(pr(e, t.label, o), a, qr + 37));
  });
}
function ir(e, t, n, r, i) {
  for (let i of r) {
    let r = e.getPropertyValue(i).trim();
    if (r.length === 0) continue;
    t.style[n] = `var(${i})`;
    let a = sr(t, n);
    if (a != null) return a;
    if (!cr(r)) return r;
  }
  return i;
}
function ar(e) {
  let t = or(document.documentElement),
    n = (e) => ((t.style.color = e), sr(t, `color`) ?? e);
  try {
    return {
      levelColors: {
        0: n(ur(e.backgroundColor, e.primaryTextColor, Xr[0])),
        1: n(ur(e.backgroundColor, e.accentColor, Xr[1])),
        2: n(ur(e.backgroundColor, e.accentColor, Xr[2])),
        3: n(ur(e.backgroundColor, e.accentColor, Xr[3])),
        4: e.accentColor,
      },
      statDividerColor: n(ur(`transparent`, e.primaryTextColor, 0.06)),
    };
  } finally {
    t.remove();
  }
}
function or(e) {
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
function sr(e, t) {
  if (e.style[t].length === 0) return null;
  let n = window.getComputedStyle(e)[t].trim();
  return cr(n) ? null : n;
}
function cr(e) {
  return e.length === 0 || e.includes(`var(`);
}
function lr(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(Vn.replaceAll(`currentColor`, e))}`;
}
function ur(e, t, n) {
  return `color-mix(in srgb, ${t} ${Math.round(n * 100)}%, ${e})`;
}
function dr(e, t, n, r, i, a) {
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
function fr(e, t, n, r, i, a) {
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
function pr(e, t, n) {
  if (e.measureText(t).width <= n) return t;
  let r = t;
  for (; r.length > 1 && e.measureText(`${r}…`).width > n;) r = r.slice(0, -1);
  return `${r}…`;
}
async function mr(e) {
  return (await gr(e, _r(e) ? `anonymous` : null)) ?? (await hr(e));
}
async function hr(e) {
  if (!_r(e)) return null;
  try {
    let t = await b.getInstance().get(e),
      n = Zr.parse(t.body);
    return await gr(`data:${n.contentType.trim() || `image/png`};base64,${n.base64}`, null);
  } catch {
    return null;
  }
}
function gr(e, t) {
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
function _r(e) {
  return /^https?:\/\//i.test(e);
}
function vr(e) {
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
var yr,
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
  Qr = e(() => {
    (g(),
      Rn(),
      Bn(),
      Hn(),
      f(),
      pt(),
      (yr = `codex-profile-card.png`),
      (br = 499),
      (xr = 306),
      (Sr = 2),
      (Cr = 32),
      (wr = 32),
      (Tr = 52),
      (Er = 36),
      (Dr = 40),
      (Or = Cr + Tr - 10),
      (kr = Cr + Tr - 28),
      (Ar = 8),
      (jr = 9),
      (Mr = 32),
      (Nr = 92),
      (Pr = 28),
      (Fr = `OpenAI Sans`),
      (Ir = 20),
      (Lr = 15),
      (Rr = 50),
      (zr = 14),
      (Br = 70),
      (Vr = br - Cr),
      (Hr = Vr - Nr),
      (Ur = Cr + (Tr - Pr) / 2),
      (Wr = 96),
      (Gr = 13.9),
      (Kr = (Vr - Cr - Gr) / 25),
      (qr = 232),
      (Jr = (br - 2 * Cr) / 4),
      (Yr = {
        accentColor: `#5865f2`,
        backgroundColor: `#ffffff`,
        primaryTextColor: `#0d0d0d`,
        secondaryTextColor: `#5d5d5d`,
      }),
      (Xr = { 0: 0.1, 1: 0.28, 2: 0.45, 3: 0.68, 4: 1 }),
      (Zr = s({ base64: n().min(1), contentType: n() })));
  }),
  $r,
  ei,
  ti = e(() => {
    (t(a()),
      ($r = y()),
      (ei = (e) =>
        (0, $r.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, $r.jsx)(`path`, {
            d: `M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  ni,
  ri,
  ii = e(() => {
    (t(a()),
      (ni = y()),
      (ri = (e) =>
        (0, ni.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ni.jsx)(`path`, {
            d: `M16.6337 2.90073C16.6337 4.04257 15.708 4.96822 14.5662 4.96822C13.5883 4.96822 12.769 4.28937 12.5539 3.37723C11.3544 3.54198 10.4276 4.57344 10.4276 5.81744L10.4275 5.82524C12.2767 5.89387 13.9672 6.41475 15.3066 7.24346C15.7984 6.86574 16.4141 6.64121 17.0822 6.64121C18.6936 6.64121 20 7.94757 20 9.55905C20 10.7212 19.3206 11.7247 18.3373 12.1939C18.2458 15.5849 14.5521 18.3126 10.0089 18.3126C5.46956 18.3126 1.77825 15.5894 1.68081 12.2025C0.687757 11.7369 0 10.7283 0 9.55905C0 7.94757 1.30636 6.64121 2.91785 6.64121C3.58954 6.64121 4.20823 6.86817 4.70139 7.24959C6.02803 6.42618 7.70059 5.90522 9.53121 5.82759L9.531 5.8186C9.531 4.084 10.853 2.65175 12.5422 2.47676C12.7378 1.53829 13.5697 0.833252 14.5662 0.833252C15.708 0.833252 16.6337 1.7589 16.6337 2.90073ZM5.97607 12.9003C6.79403 12.9003 7.49631 12.5185 7.5449 11.468V11.4692C7.59349 10.4186 6.96989 9.54167 6.15192 9.54167C5.33395 9.54167 4.63168 10.2289 4.58309 11.2794C4.5345 12.3299 5.1581 12.9003 5.97607 12.9003ZM14.0371 12.9003C14.8551 12.9003 15.4787 12.3299 15.4301 11.2794C15.3815 10.2289 14.6793 9.54167 13.8613 9.54167C13.0433 9.54167 12.4197 10.4186 12.4683 11.4692V11.468C12.5169 12.5185 13.2192 12.9003 14.0371 12.9003ZM10.0057 13.7172C8.99218 13.7172 8.02033 13.7669 7.12254 13.8583C6.96866 13.8734 6.87148 14.033 6.93164 14.1753C7.43492 15.3774 8.62195 16.222 10.0057 16.222C11.3894 16.222 12.5776 15.3774 13.0797 14.1753C13.1399 14.033 13.0415 13.8734 12.8888 13.8583C11.9899 13.7669 11.0192 13.7172 10.0057 13.7172Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  ai,
  oi,
  si = e(() => {
    (t(a()),
      (ai = y()),
      (oi = (e) =>
        (0, ai.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ai.jsx)(`path`, {
            d: `M14.6408 2.70825H17.1147L11.7099 8.8856L18.0682 17.2916H13.0897L9.19034 12.1934L4.72859 17.2916H2.25316L8.03414 10.6842L1.93457 2.70825H7.03949L10.5642 7.36819L14.6408 2.70825ZM13.7725 15.8108H15.1433L6.29461 4.11124H4.82357L13.7725 15.8108Z`,
            fill: `currentColor`,
          }),
        })));
  });
function ci(e) {
  let t = (0, mi.c)(112),
    {
      imageUrl: n,
      isLoading: r,
      open: i,
      petSwitcher: a,
      selectedSocialPlatform: o,
      getSocialDraftUrl: s,
      onCopy: c,
      onDownload: l,
      onDismissShareInstructions: u,
      onOpenChange: d,
      onOpenSocialDraft: f,
      onSelectSocialPlatform: p,
    } = e,
    m = ge(),
    h = ne(0),
    g = ne(0),
    _ = re(h, yi),
    v = re(g, yi),
    y;
  t[0] !== h || t[1] !== g
    ? ((y = (e) => {
        let t = e.currentTarget.getBoundingClientRect(),
          n = Math.min(Math.max((e.clientX - t.left) / t.width, 0), 1),
          r = Math.min(Math.max((e.clientY - t.top) / t.height, 0), 1);
        (h.set(-(r * 2 - 1) * bi), g.set((n * 2 - 1) * xi));
      }),
      (t[0] = h),
      (t[1] = g),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] !== h || t[4] !== g
    ? ((x = () => {
        (h.set(0), g.set(0));
      }),
      (t[3] = h),
      (t[4] = g),
      (t[5] = x))
    : (x = t[5]);
  let S = x,
    C;
  t[6] === S
    ? (C = t[7])
    : ((C = (e) => {
        let t = e.currentTarget.querySelector(`[data-profile-share-card-preview-hover-target]`);
        (e.target instanceof Node && t?.contains(e.target) === !0) || S();
      }),
      (t[6] = S),
      (t[7] = C));
  let w = C,
    T = o == null ? Si : Ci,
    E;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { style: { height: `100dvh`, maxWidth: `none`, width: `100vw`, zIndex: 51 } }),
      (t[8] = E))
    : (E = t[8]);
  let D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(De, {
        className: `sr-only`,
        children: (0, X.jsx)(V, {
          id: `profile.shareCard.preview.title`,
          defaultMessage: `Share profile card`,
          description: `Accessible title for the profile share card preview dialog`,
        }),
      })),
      (t[9] = D))
    : (D = t[9]);
  let O;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(we, {
        className: `sr-only`,
        children: (0, X.jsx)(V, {
          id: `profile.shareCard.preview.description`,
          defaultMessage: `Preview your profile share card before sharing or saving it`,
          description: `Accessible description for the profile share card preview dialog`,
        }),
      })),
      (t[10] = O))
    : (O = t[10]);
  let k;
  t[11] === m
    ? (k = t[12])
    : ((k = m.formatMessage({
        id: `profile.shareCard.preview.close`,
        defaultMessage: `Close share preview`,
        description: `Accessible label for closing the profile share card preview`,
      })),
      (t[11] = m),
      (t[12] = k));
  let ee;
  t[13] === d
    ? (ee = t[14])
    : ((ee = () => {
        d(!1);
      }),
      (t[13] = d),
      (t[14] = ee));
  let A;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, X.jsx)(Ye, { "aria-hidden": !0, className: `icon-sm` })), (t[15] = A))
    : (A = t[15]);
  let M;
  t[16] !== k || t[17] !== ee
    ? ((M = (0, X.jsx)(q, {
        "aria-label": k,
        className: `absolute top-5 right-5 z-10 size-8 !rounded-md`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: ee,
        children: A,
      })),
      (t[16] = k),
      (t[17] = ee),
      (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(`h2`, {
        className: `shrink-0 text-center text-[24px] leading-8 font-normal text-token-text-primary`,
        children: (0, X.jsx)(V, {
          id: `profile.shareCard.preview.heading`,
          defaultMessage: `Share your activity`,
          description: `Visible heading for the profile share card preview dialog`,
        }),
      })),
      (t[19] = N))
    : (N = t[19]);
  let P = o == null ? `mt-[50px]` : `mt-8`,
    ie;
  t[20] === P
    ? (ie = t[21])
    : ((ie = H(`flex flex-col items-center`, P)), (t[20] = P), (t[21] = ie));
  let F;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = H(
        `aspect-[499/306] overflow-hidden rounded-[32px] bg-token-dropdown-background/90 will-change-transform [transform-style:preserve-3d]`,
        vi,
      )),
      (t[22] = F))
    : (F = t[22]);
  let ae;
  t[23] !== T || t[24] !== _ || t[25] !== v
    ? ((ae = { rotateX: _, rotateY: v, width: T }),
      (t[23] = T),
      (t[24] = _),
      (t[25] = v),
      (t[26] = ae))
    : (ae = t[26]);
  let I;
  t[27] !== n || t[28] !== m
    ? ((I =
        n == null
          ? (0, X.jsx)(`div`, {
              role: `status`,
              "aria-label": m.formatMessage({
                id: `profile.shareCard.preview.loadingLabel`,
                defaultMessage: `Creating profile share card`,
                description: `Accessible label while the profile share card preview is being created`,
              }),
              className: `flex size-full items-center justify-center text-sm text-token-text-secondary`,
              children: (0, X.jsx)(V, {
                id: `profile.shareCard.preview.loading`,
                defaultMessage: `Creating image…`,
                description: `Loading text shown while creating the profile share card preview`,
              }),
            })
          : (0, X.jsx)(`img`, {
              src: n,
              alt: m.formatMessage({
                id: `profile.shareCard.preview.imageAlt`,
                defaultMessage: `Profile share card preview`,
                description: `Alt text for the generated profile share card preview image`,
              }),
              className: `block size-full object-contain`,
            })),
      (t[27] = n),
      (t[28] = m),
      (t[29] = I))
    : (I = t[29]);
  let L;
  t[30] !== ae || t[31] !== I
    ? ((L = (0, X.jsx)(te.div, { className: F, style: ae, children: I })),
      (t[30] = ae),
      (t[31] = I),
      (t[32] = L))
    : (L = t[32]);
  let oe;
  t[33] !== S || t[34] !== b || t[35] !== L
    ? ((oe = (0, X.jsx)(`div`, {
        "data-profile-share-card-preview-hover-target": !0,
        className: `w-fit [perspective:1200px] [transform-style:preserve-3d]`,
        onPointerEnter: b,
        onPointerLeave: S,
        onPointerMove: b,
        children: L,
      })),
      (t[33] = S),
      (t[34] = b),
      (t[35] = L),
      (t[36] = oe))
    : (oe = t[36]);
  let R;
  t[37] === a
    ? (R = t[38])
    : ((R =
        a == null
          ? null
          : (0, X.jsx)(ui, {
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
      (t[38] = R));
  let z;
  t[39] !== oe || t[40] !== R
    ? ((z = (0, X.jsxs)(`div`, { className: `relative w-fit`, children: [oe, R] })),
      (t[39] = oe),
      (t[40] = R),
      (t[41] = z))
    : (z = t[41]);
  let se =
      a == null
        ? o == null
          ? `mt-[50px]`
          : `mt-8 mb-7`
        : o == null
          ? `mt-[60px]`
          : `mt-[60px] mb-7`,
    ce;
  t[42] === se
    ? (ce = t[43])
    : ((ce = H(`flex items-start justify-center gap-2 sm:gap-5`, se)), (t[42] = se), (t[43] = ce));
  let B;
  t[44] === m
    ? (B = t[45])
    : ((B = m.formatMessage({
        id: `profile.shareCard.preview.shareX`,
        defaultMessage: `Share to X`,
        description: `Accessible label for the X share button in the profile share card preview`,
      })),
      (t[44] = m),
      (t[45] = B));
  let le = o === `x`,
    ue = r || n == null,
    de;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, X.jsx)(V, {
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      })),
      (t[46] = de))
    : (de = t[46]);
  let fe;
  t[47] === p
    ? (fe = t[48])
    : ((fe = () => {
        p(`x`);
      }),
      (t[47] = p),
      (t[48] = fe));
  let pe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, X.jsx)(oi, { "aria-hidden": !0, className: `icon-sm` })), (t[49] = pe))
    : (pe = t[49]);
  let me;
  t[50] !== B || t[51] !== le || t[52] !== ue || t[53] !== fe
    ? ((me = (0, X.jsx)(li, {
        ariaLabel: B,
        active: le,
        disabled: ue,
        label: de,
        onClick: fe,
        children: pe,
      })),
      (t[50] = B),
      (t[51] = le),
      (t[52] = ue),
      (t[53] = fe),
      (t[54] = me))
    : (me = t[54]);
  let U;
  t[55] === m
    ? (U = t[56])
    : ((U = m.formatMessage({
        id: `profile.shareCard.preview.shareLinkedIn`,
        defaultMessage: `Share to LinkedIn`,
        description: `Accessible label for the LinkedIn share button in the profile share card preview`,
      })),
      (t[55] = m),
      (t[56] = U));
  let W = o === `linkedin`,
    he = r || n == null,
    _e;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, X.jsx)(V, {
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      })),
      (t[57] = _e))
    : (_e = t[57]);
  let G;
  t[58] === p
    ? (G = t[59])
    : ((G = () => {
        p(`linkedin`);
      }),
      (t[58] = p),
      (t[59] = G));
  let K;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, X.jsx)(ei, { "aria-hidden": !0, className: `icon-sm` })), (t[60] = K))
    : (K = t[60]);
  let ve;
  t[61] !== U || t[62] !== W || t[63] !== he || t[64] !== G
    ? ((ve = (0, X.jsx)(li, {
        ariaLabel: U,
        active: W,
        disabled: he,
        label: _e,
        onClick: G,
        children: K,
      })),
      (t[61] = U),
      (t[62] = W),
      (t[63] = he),
      (t[64] = G),
      (t[65] = ve))
    : (ve = t[65]);
  let ye;
  t[66] === m
    ? (ye = t[67])
    : ((ye = m.formatMessage({
        id: `profile.shareCard.preview.shareReddit`,
        defaultMessage: `Share to Reddit`,
        description: `Accessible label for the Reddit share button in the profile share card preview`,
      })),
      (t[66] = m),
      (t[67] = ye));
  let be = o === `reddit`,
    xe = r || n == null,
    Se;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, X.jsx)(V, {
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      })),
      (t[68] = Se))
    : (Se = t[68]);
  let Te;
  t[69] === p
    ? (Te = t[70])
    : ((Te = () => {
        p(`reddit`);
      }),
      (t[69] = p),
      (t[70] = Te));
  let Ee;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, X.jsx)(ri, { "aria-hidden": !0, className: `icon-sm` })), (t[71] = Ee))
    : (Ee = t[71]);
  let Oe;
  t[72] !== ye || t[73] !== be || t[74] !== xe || t[75] !== Te
    ? ((Oe = (0, X.jsx)(li, {
        ariaLabel: ye,
        active: be,
        disabled: xe,
        label: Se,
        onClick: Te,
        children: Ee,
      })),
      (t[72] = ye),
      (t[73] = be),
      (t[74] = xe),
      (t[75] = Te),
      (t[76] = Oe))
    : (Oe = t[76]);
  let ke;
  t[77] === m
    ? (ke = t[78])
    : ((ke = m.formatMessage({
        id: `profile.shareCard.preview.save`,
        defaultMessage: `Save profile card`,
        description: `Accessible label for saving the profile share card from the preview dialog`,
      })),
      (t[77] = m),
      (t[78] = ke));
  let Ae = r || n == null,
    je;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, X.jsx)(Pe, { "aria-hidden": !0, className: `icon-sm` })), (t[79] = je))
    : (je = t[79]);
  let Me;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, X.jsx)(`span`, {
        className: _i,
        children: (0, X.jsx)(V, {
          id: `profile.shareCard.preview.saveLabel`,
          defaultMessage: `Save`,
          description: `Visible label for saving the profile share card`,
        }),
      })),
      (t[80] = Me))
    : (Me = t[80]);
  let Ne;
  t[81] !== l || t[82] !== ke || t[83] !== Ae
    ? ((Ne = (0, X.jsxs)(q, {
        "aria-label": ke,
        className: gi,
        color: `primary`,
        disabled: Ae,
        size: `icon`,
        uniform: !0,
        onClick: l,
        children: [je, Me],
      })),
      (t[81] = l),
      (t[82] = ke),
      (t[83] = Ae),
      (t[84] = Ne))
    : (Ne = t[84]);
  let Fe;
  t[85] !== ce || t[86] !== me || t[87] !== ve || t[88] !== Oe || t[89] !== Ne
    ? ((Fe = (0, X.jsxs)(`div`, { className: ce, children: [me, ve, Oe, Ne] })),
      (t[85] = ce),
      (t[86] = me),
      (t[87] = ve),
      (t[88] = Oe),
      (t[89] = Ne),
      (t[90] = Fe))
    : (Fe = t[90]);
  let Ie;
  t[91] !== s || t[92] !== c || t[93] !== u || t[94] !== f || t[95] !== o
    ? ((Ie =
        o == null
          ? null
          : (0, X.jsx)(te.div, {
              id: hi,
              className: `mt-4 w-[min(499px,calc(100vw-56px))] overflow-hidden rounded-lg bg-token-dropdown-background/95 p-3 text-left text-token-text-primary shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
              initial: { height: 0, opacity: 0, y: -6 },
              animate: { height: `auto`, opacity: 1, y: 0 },
              exit: { height: 0, opacity: 0, y: -6 },
              transition: { duration: 0.16, ease: `easeOut` },
              children: (0, X.jsx)(di, {
                getSocialDraftUrl: s,
                platform: o,
                onCopy: c,
                onDismiss: u,
                onOpenSocialDraft: f,
              }),
            })),
      (t[91] = s),
      (t[92] = c),
      (t[93] = u),
      (t[94] = f),
      (t[95] = o),
      (t[96] = Ie))
    : (Ie = t[96]);
  let Le;
  t[97] === Ie
    ? (Le = t[98])
    : ((Le = (0, X.jsx)(j, { children: Ie })), (t[97] = Ie), (t[98] = Le));
  let Re;
  t[99] !== ie || t[100] !== z || t[101] !== Fe || t[102] !== Le
    ? ((Re = (0, X.jsxs)(`div`, {
        className: `flex min-h-fit flex-col items-center`,
        children: [N, (0, X.jsxs)(`div`, { className: ie, children: [z, Fe, Le] })],
      })),
      (t[99] = ie),
      (t[100] = z),
      (t[101] = Fe),
      (t[102] = Le),
      (t[103] = Re))
    : (Re = t[103]);
  let ze;
  t[104] !== w || t[105] !== Re
    ? ((ze = (0, X.jsx)(`div`, {
        className: `flex h-full min-h-0 items-center justify-center overflow-y-auto px-6 py-8`,
        onPointerMove: w,
        children: Re,
      })),
      (t[104] = w),
      (t[105] = Re),
      (t[106] = ze))
    : (ze = t[106]);
  let Be;
  return (
    t[107] !== d || t[108] !== i || t[109] !== M || t[110] !== ze
      ? ((Be = (0, X.jsxs)(Ce, {
          open: i,
          contentClassName: `!left-0 !top-0 !z-[51] !translate-x-0 !translate-y-0 overflow-hidden bg-transparent text-token-text-primary`,
          contentProps: E,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_88%,transparent)] backdrop-blur-[18px]`,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: d,
          children: [D, O, M, ze],
        })),
        (t[107] = d),
        (t[108] = i),
        (t[109] = M),
        (t[110] = ze),
        (t[111] = Be))
      : (Be = t[111]),
    Be
  );
}
function li(e) {
  let t = (0, mi.c)(10),
    { active: n, ariaLabel: r, children: i, disabled: a, label: o, onClick: s } = e,
    c = n ? hi : void 0,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = (0, X.jsx)(`span`, { className: _i, children: o })), (t[0] = o), (t[1] = l));
  let u;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== l
      ? ((u = (0, X.jsxs)(q, {
          "aria-controls": c,
          "aria-expanded": n,
          "aria-label": r,
          "aria-pressed": n,
          className: gi,
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
function ui(e) {
  let t = (0, mi.c)(40),
    {
      disabled: n,
      isPetVisible: r,
      petCount: i,
      petName: a,
      petPosition: o,
      onNext: s,
      onPrevious: c,
      onTogglePetVisibility: l,
    } = e,
    u = ge(),
    d = i > 1,
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = u.formatMessage({
        id: `profile.shareCard.preview.petSwitcher`,
        defaultMessage: `Custom pet`,
        description: `Accessible label for controls that switch the custom pet shown in the profile share card preview`,
      })),
      (t[0] = u),
      (t[1] = f));
  let p = d
      ? `w-[min(320px,calc(100vw-80px))] grid-cols-[1.75rem_minmax(0,1fr)_1.75rem_4.25rem]`
      : `w-[min(240px,calc(100vw-80px))] grid-cols-[minmax(0,1fr)_4.25rem]`,
    m;
  t[2] === p
    ? (m = t[3])
    : ((m = H(
        `absolute top-full left-1/2 mt-3 grid -translate-x-1/2 items-center gap-2 rounded-full bg-token-dropdown-background/95 px-2 py-1 shadow-[0_12px_36px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
        p,
      )),
      (t[2] = p),
      (t[3] = m));
  let h;
  t[4] !== d || t[5] !== n || t[6] !== u || t[7] !== c
    ? ((h = d
        ? (0, X.jsx)(q, {
            "aria-label": u.formatMessage({
              id: `profile.shareCard.preview.previousPet`,
              defaultMessage: `Previous custom pet`,
              description: `Accessible label for selecting the previous custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: c,
            children: (0, X.jsx)(N, { "aria-hidden": !0, className: `icon-xs rotate-180` }),
          })
        : null),
      (t[4] = d),
      (t[5] = n),
      (t[6] = u),
      (t[7] = c),
      (t[8] = h))
    : (h = t[8]);
  let g = r ? `text-token-text-primary` : `text-token-text-tertiary`,
    _;
  t[9] === g
    ? (_ = t[10])
    : ((_ = H(`truncate text-xs leading-4 font-medium`, g)), (t[9] = g), (t[10] = _));
  let v;
  t[11] !== a || t[12] !== _
    ? ((v = (0, X.jsx)(`div`, { className: _, children: a })),
      (t[11] = a),
      (t[12] = _),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== r || t[15] !== i || t[16] !== o
    ? ((y = (0, X.jsx)(`div`, {
        className: `text-[11px] leading-3 text-token-text-tertiary`,
        children: r
          ? (0, X.jsx)(V, {
              id: `profile.shareCard.preview.petPosition`,
              defaultMessage: `{petPosition} / {petCount}`,
              description: `Current custom pet position in the profile share card preview pet switcher`,
              values: { petCount: i, petPosition: o },
            })
          : (0, X.jsx)(V, {
              id: `profile.shareCard.preview.petHidden`,
              defaultMessage: `Hidden`,
              description: `Label shown when the custom pet is hidden from the profile share card preview`,
            }),
      })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = o),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== v || t[19] !== y
    ? ((b = (0, X.jsxs)(`div`, { className: `min-w-0 text-center`, children: [v, y] })),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] !== d || t[22] !== n || t[23] !== u || t[24] !== s
    ? ((x = d
        ? (0, X.jsx)(q, {
            "aria-label": u.formatMessage({
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
            children: (0, X.jsx)(N, { "aria-hidden": !0, className: `icon-xs` }),
          })
        : null),
      (t[21] = d),
      (t[22] = n),
      (t[23] = u),
      (t[24] = s),
      (t[25] = x))
    : (x = t[25]);
  let S = r ? `ghostActive` : `secondary`,
    C;
  t[26] === r
    ? (C = t[27])
    : ((C = r
        ? (0, X.jsx)(V, {
            id: `profile.shareCard.preview.hidePetLabel`,
            defaultMessage: `Hide pet`,
            description: `Short button label for hiding the custom pet from the profile share card preview`,
          })
        : (0, X.jsx)(V, {
            id: `profile.shareCard.preview.showPetLabel`,
            defaultMessage: `Show pet`,
            description: `Short button label for showing the custom pet on the profile share card preview`,
          })),
      (t[26] = r),
      (t[27] = C));
  let w;
  t[28] !== n || t[29] !== l || t[30] !== S || t[31] !== C
    ? ((w = (0, X.jsx)(q, {
        className: `h-7 w-[4.25rem] justify-center px-0 text-[11px] leading-3`,
        color: S,
        disabled: n,
        size: `default`,
        onClick: l,
        children: C,
      })),
      (t[28] = n),
      (t[29] = l),
      (t[30] = S),
      (t[31] = C),
      (t[32] = w))
    : (w = t[32]);
  let T;
  return (
    t[33] !== f || t[34] !== x || t[35] !== w || t[36] !== m || t[37] !== h || t[38] !== b
      ? ((T = (0, X.jsxs)(`div`, {
          "aria-label": f,
          className: m,
          role: `group`,
          children: [h, b, x, w],
        })),
        (t[33] = f),
        (t[34] = x),
        (t[35] = w),
        (t[36] = m),
        (t[37] = h),
        (t[38] = b),
        (t[39] = T))
      : (T = t[39]),
    T
  );
}
function di(e) {
  let t = (0, mi.c)(41),
    { platform: n, getSocialDraftUrl: r, onCopy: i, onDismiss: a, onOpenSocialDraft: o } = e,
    s = ge(),
    c;
  t[0] !== s || t[1] !== n ? ((c = pi(s, n)), (t[0] = s), (t[1] = n), (t[2] = c)) : (c = t[2]);
  let l = c,
    u;
  t[3] !== r || t[4] !== n ? ((u = r(n)), (t[3] = r), (t[4] = n), (t[5] = u)) : (u = t[5]);
  let d = u,
    f;
  t[6] === l
    ? (f = t[7])
    : ((f = (0, X.jsx)(`h3`, {
        className: `text-sm leading-5 font-medium`,
        children: (0, X.jsx)(V, {
          id: `profile.shareCard.preview.socialInstructionsTitle`,
          defaultMessage: `Share to {platformName}`,
          description: `Title for the profile share card social sharing instructions`,
          values: { platformName: l },
        }),
      })),
      (t[6] = l),
      (t[7] = f));
  let p;
  t[8] === s
    ? (p = t[9])
    : ((p = s.formatMessage({
        id: `profile.shareCard.preview.dismissShareInstructions`,
        defaultMessage: `Dismiss share instructions`,
        description: `Accessible label for dismissing the profile share card social sharing instructions`,
      })),
      (t[8] = s),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(Ye, { "aria-hidden": !0, className: `icon-xs` })), (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== a || t[12] !== p
    ? ((h = (0, X.jsx)(q, {
        "aria-label": p,
        className: `size-6 rounded-full`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: a,
        children: m,
      })),
      (t[11] = a),
      (t[12] = p),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== f || t[15] !== h
    ? ((g = (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [f, h],
      })),
      (t[14] = f),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(fi, { step: 1 })), (t[17] = _))
    : (_ = t[17]);
  let v, y;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(ot, { "aria-hidden": !0, className: `icon-xs` })),
      (v = (0, X.jsx)(V, {
        id: `profile.shareCard.preview.copyImage`,
        defaultMessage: `Copy image`,
        description: `Button label for copying the profile share card image`,
      })),
      (t[18] = v),
      (t[19] = y))
    : ((v = t[18]), (y = t[19]));
  let b;
  t[20] === i
    ? (b = t[21])
    : ((b = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          _,
          (0, X.jsxs)(q, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: i,
            children: [y, v],
          }),
        ],
      })),
      (t[20] = i),
      (t[21] = b));
  let x;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(fi, { step: 2 })), (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== o || t[24] !== n
    ? ((S = (e) => {
        o(n, e);
      }),
      (t[23] = o),
      (t[24] = n),
      (t[25] = S))
    : (S = t[25]);
  let C;
  t[26] === d
    ? (C = t[27])
    : ((C = (0, X.jsx)(je, { href: d, className: `icon-xs` })), (t[26] = d), (t[27] = C));
  let w;
  t[28] === l
    ? (w = t[29])
    : ((w = (0, X.jsx)(V, {
        id: `profile.shareCard.preview.openSocialComposer`,
        defaultMessage: `Open {platformName} composer`,
        description: `Button label for opening a social platform composer for the profile share card`,
        values: { platformName: l },
      })),
      (t[28] = l),
      (t[29] = w));
  let T;
  t[30] !== S || t[31] !== C || t[32] !== w
    ? ((T = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          x,
          (0, X.jsxs)(q, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: S,
            children: [C, w],
          }),
        ],
      })),
      (t[30] = S),
      (t[31] = C),
      (t[32] = w),
      (t[33] = T))
    : (T = t[33]);
  let E;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2 text-token-text-secondary`,
        children: [
          (0, X.jsx)(fi, { step: 3 }),
          (0, X.jsx)(V, {
            id: `profile.shareCard.preview.pasteImage`,
            defaultMessage: `Paste image into the post`,
            description: `Instruction for pasting the copied profile share card image into the social post`,
          }),
        ],
      })),
      (t[34] = E))
    : (E = t[34]);
  let D;
  t[35] !== b || t[36] !== T
    ? ((D = (0, X.jsxs)(`ol`, {
        className: `mt-2 flex flex-col gap-2 text-sm leading-5`,
        children: [b, T, E],
      })),
      (t[35] = b),
      (t[36] = T),
      (t[37] = D))
    : (D = t[37]);
  let O;
  return (
    t[38] !== D || t[39] !== g
      ? ((O = (0, X.jsxs)(X.Fragment, { children: [g, D] })), (t[38] = D), (t[39] = g), (t[40] = O))
      : (O = t[40]),
    O
  );
}
function fi(e) {
  let t = (0, mi.c)(2),
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
function pi(e, t) {
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
var mi,
  X,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi = e(() => {
    ((mi = d()),
      W(),
      A(),
      G(),
      Xe(),
      Oe(),
      Re(),
      ie(),
      rt(),
      ze(),
      ti(),
      ii(),
      si(),
      qe(),
      (X = y()),
      (hi = `profile-share-card-social-instructions`),
      (gi = `relative size-[52px] overflow-visible !rounded-full`),
      (_i = `absolute top-[60px] left-1/2 max-w-[68px] -translate-x-1/2 truncate text-center text-xs leading-4 text-token-text-secondary`),
      (vi = `[box-shadow:rgba(0,0,0,0.06)_0px_4px_12px_-8px,rgba(0,0,0,0.10)_0px_9px_64px_-10px,rgba(0,0,0,0.05)_0px_0px_0px_0.5px]`),
      (yi = { stiffness: 200, damping: 25, mass: 1 }),
      (bi = 1.5),
      (xi = 2),
      (Si = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 506px)))`),
      (Ci = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 749px)))`));
  });
function Ti({
  dailyUsage: e,
  displayName: t,
  imageUrl: n,
  petOptions: r,
  selectedPetId: i,
  todayIso: a,
  usageSummary: o,
  username: s,
}) {
  let c = v(u),
    l = ge(),
    [d, f] = (0, ki.useState)(!1),
    [p, m] = (0, ki.useState)(!1),
    [h, g] = (0, ki.useState)(null),
    [_, y] = (0, ki.useState)(null),
    [b, x] = (0, ki.useState)(null),
    [S, C] = (0, ki.useState)(!1),
    [w, T] = (0, ki.useState)(null),
    E = (0, ki.useRef)(0),
    D = l.formatMessage({
      id: `profile.shareCard.shareLabel`,
      defaultMessage: `Share profile card`,
      description: `Accessible label for sharing the profile share card image`,
    }),
    k = l.formatMessage({
      id: `profile.shareCard.createError`,
      defaultMessage: `Could not create profile card`,
      description: `Toast shown when the profile share card image could not be created`,
    }),
    ee = l.formatMessage({
      id: `profile.shareCard.copySuccess`,
      defaultMessage: `Copied image`,
      description: `Toast shown after copying the profile share card image`,
    }),
    te = l.formatMessage({
      id: `profile.shareCard.copyError`,
      defaultMessage: `Failed to copy image`,
      description: `Toast shown when copying the profile share card image fails`,
    }),
    A = l.formatMessage({
      id: `profile.shareCard.saveSuccess`,
      defaultMessage: `Image saved`,
      description: `Toast shown after saving the profile share card image`,
    }),
    ne = l.formatMessage({
      id: `profile.shareCard.draftText`,
      defaultMessage: `Check out my Codex activity`,
      description: `Draft text used when sharing the profile share card to social platforms`,
    }),
    j = (e, t) => {
      if (t == null) {
        U(c, I, { action: e });
        return;
      }
      U(c, I, { action: e, socialPlatform: Oi(t) });
    },
    M = () => {
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
        initials: kt(t),
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
            value: Tt(l, o.currentStreakDays),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.longestStreak`,
              defaultMessage: `longest streak`,
              description: `Label for longest usage streak in the profile share card image`,
            }),
            value: Tt(l, o.longestStreakDays),
          },
        ],
        theme: Un(),
        usernameLabel: r,
        usageCells: St({ dailyUsage: e, todayIso: a }),
      };
    },
    N = async (e, t) => {
      let n = await Ei(e);
      E.current === t && g({ blob: e, imageUrl: n });
    },
    P = async (e, { clearPreview: t, showLoadingState: n, requestId: r }) => {
      (n && f(!0), t && g(null));
      try {
        await N(await Wn({ ...M(), petImageUrl: e?.imageUrl ?? null }), r);
      } catch {
        if (E.current !== r) return;
        (m(!1), T(null), c.get($e).danger(k));
      } finally {
        n && E.current === r && f(!1);
      }
    },
    re = async (e, t, { clearPreview: n, showLoadingState: r, requestId: i }) => {
      (r && f(!0), n && g(null));
      try {
        let n = t ?? (await Gn(M()));
        if (E.current !== i) return;
        (t ?? T(n), await N(await n.createImageBlob(e.imageUrl), i));
      } catch {
        if (E.current !== i) return;
        (m(!1), T(null), c.get($e).danger(k));
      } finally {
        r && E.current === i && f(!1);
      }
    },
    ie = () => {
      E.current += 1;
      let e = E.current,
        t = i == null ? -1 : r.findIndex((e) => e.id === i);
      (m(!0), y(null), T(null), x(t === -1 ? null : t), C(t !== -1));
      let n = r[t];
      if (n == null) {
        P(null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
        return;
      }
      re(n, null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
    },
    F = (e) => {
      let t = r[e];
      if (t == null) return;
      E.current += 1;
      let n = E.current;
      (x(e), C(!0), re(t, w, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    ae = (e) => {
      let t = b == null ? null : r[b];
      if (e && t == null) return;
      E.current += 1;
      let n = E.current;
      (C(e), P(e ? t : null, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    L = () => {
      h != null &&
        (j(K.CODEX_PROFILE_SHARE_ACTION_SAVE_BUTTON_CLICKED), Kn(h.blob), c.get($e).success(A));
    },
    oe = () => {
      h != null &&
        Ze({ "image/png": h.blob }).then(
          () => {
            c.get($e).success(ee);
          },
          () => {
            c.get($e).danger(te);
          },
        );
    },
    R = (e) => {
      (e || ((E.current += 1), y(null), x(null), C(!1), f(!1), T(null)), m(e));
    };
  return (0, Ai.jsxs)(Ai.Fragment, {
    children: [
      (0, Ai.jsxs)(q, {
        "aria-label": D,
        className: `h-7`,
        color: `ghostActive`,
        loading: d,
        size: `toolbar`,
        onClick: () => {
          (j(K.CODEX_PROFILE_SHARE_ACTION_SHARE_BUTTON_CLICKED), ie());
        },
        children: [
          (0, Ai.jsx)(O, { "aria-hidden": !0, className: `icon-xs` }),
          (0, Ai.jsx)(V, {
            id: `profile.shareCard.share`,
            defaultMessage: `Share`,
            description: `Button label for sharing the profile share card image`,
          }),
        ],
      }),
      (0, Ai.jsx)(ci, {
        imageUrl: h?.imageUrl ?? null,
        isLoading: d,
        open: p,
        petSwitcher:
          b == null || r.length === 0
            ? null
            : {
                disabled: d,
                isPetVisible: S,
                petCount: r.length,
                petName: r[b]?.displayName ?? ``,
                petPosition: b + 1,
                onNext: () => {
                  F((b + 1) % r.length);
                },
                onPrevious: () => {
                  F((b - 1 + r.length) % r.length);
                },
                onTogglePetVisibility: () => {
                  ae(!S);
                },
              },
        selectedSocialPlatform: _,
        getSocialDraftUrl: (e) => Di(e, ne),
        onCopy: oe,
        onDownload: L,
        onDismissShareInstructions: () => {
          y(null);
        },
        onOpenChange: R,
        onOpenSocialDraft: (e, t) => {
          let n = Di(e, ne);
          (j(K.CODEX_PROFILE_SHARE_ACTION_SOCIAL_COMPOSER_BUTTON_CLICKED, e),
            ut({ event: t, href: n, initiator: `open_in_browser_bridge` }));
        },
        onSelectSocialPlatform: (e) => {
          (j(K.CODEX_PROFILE_SHARE_ACTION_SOCIAL_SHARE_BUTTON_CLICKED, e), y(e));
        },
      }),
    ],
  });
}
function Ei(e) {
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
function Di(e, t) {
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
function Oi(e) {
  switch (e) {
    case `linkedin`:
      return pe.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN;
    case `reddit`:
      return pe.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT;
    case `x`:
      return pe.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X;
  }
}
var ki,
  Ai,
  ji = e(() => {
    (ae(),
      m(),
      (ki = t(a(), 1)),
      G(),
      Xe(),
      dt(),
      Je(),
      w(),
      R(),
      S(),
      Qe(),
      pt(),
      Qr(),
      wi(),
      (Ai = y()));
  }),
  Mi,
  Ni,
  Pi,
  Fi,
  Ii = e(() => {
    ((Mi = `_profileLoadingBlock_1lb04_1`),
      (Ni = `_profilePhotoEditBadge_1lb04_22`),
      (Pi = `_profilePhotoInput_1lb04_28`),
      (Fi = {
        profileLoadingBlock: Mi,
        "profile-loading-page-sweep": `_profile-loading-page-sweep_1lb04_1`,
        profilePhotoEditBadge: Ni,
        profilePhotoInput: Pi,
      }));
  });
function Li({ today: e = new Date() }) {
  let t = v(u),
    n = (0, Q.useRef)(!1),
    r = ge(),
    i = ee(),
    a = ue(`3162484136`),
    s = ue(Bt),
    c = ue(`1991660486`),
    { accountId: d, authMethod: f, planAtLogin: p, userId: m } = _e(),
    { data: h } = Te(),
    { data: g } = x(`account-info`, {
      queryConfig: { enabled: f === `chatgpt` && !0, staleTime: o.ONE_MINUTE },
    }),
    { data: y } = _(Kt),
    b = It(e),
    S = mt(b),
    C = da(b),
    w = d ?? g?.accountId ?? null,
    T = m ?? g?.userId ?? null,
    O = At({ accountId: w, enabled: f === `chatgpt`, userId: T }),
    A = O.data?.activityInsights,
    ne = wt({ accountId: w, userId: T }),
    j = Ot({ accountId: w, userId: T }),
    M = ne.isPending || j.isPending,
    N = _t({ accountId: w, userId: T }),
    P = Ht(y?.avatars),
    { selectedAvatar: re } = Wt(P),
    [ie, F] = (0, Q.useState)(null),
    [ae, I] = (0, Q.useState)(null),
    [L, R] = (0, Q.useState)(`daily`),
    [z, le] = (0, Q.useState)(null),
    [fe, pe] = (0, Q.useState)(null),
    [me, W] = (0, Q.useState)(null),
    [he, G] = (0, Q.useState)(!1),
    K = O.isLoading,
    ve = O.data == null && O.isError,
    be = l.isInternal(ke()) && O.error != null ? va(O.error) : null,
    xe = O.data?.hasStatsError === !0,
    Se = re.id.startsWith(`custom:`),
    Ce = K ? null : (ae ?? O.data?.imageUrl ?? h?.profile_picture_url ?? null),
    we = Ce != null && Ce !== ie,
    Ee = O.data?.username?.trim() || null,
    De = O.data?.displayName ?? null,
    Oe = K ? null : Ct({ accountName: h?.name, displayName: De, username: Ee }),
    Ae = Et({
      accountStructure: h?.structure,
      plan: h?.plan_type ?? g?.plan ?? p,
      workspaceName: h?.name,
    }),
    je = O.data?.summary,
    Me = je?.longestTaskDurationMs,
    Ne = O.data?.dailyUsage,
    Pe = P.flatMap((e) =>
      !e.id.startsWith(`custom:`) || e.spritesheetUrl == null
        ? []
        : [{ displayName: e.displayName, id: e.id, imageUrl: e.spritesheetUrl }],
    ),
    Fe =
      xe || Ne == null
        ? null
        : {
            cells: Ft({ dailyUsage: Ne, todayIso: b, view: L }),
            dailyValues: Pt({ dailyUsage: Ne, todayIso: b }),
            weeklyTotals: ht({ dailyUsage: Ne, todayIso: b }),
            cumulativeTotals: ft({ dailyUsage: Ne, todayIso: b }),
          },
    Ie = r.formatMessage({
      id: `profile.tokenUsage.chartLabel`,
      defaultMessage: `Token usage chart`,
      description: `Accessible label for the token usage dot chart`,
    }),
    Le = (0, $.jsx)(`div`, {
      className: `text-base font-normal text-token-text-primary`,
      children: (0, $.jsx)(V, {
        id: `profile.header`,
        defaultMessage: `Profile`,
        description: `Header title for the profile page`,
      }),
    }),
    Re = (e, t) => {
      le((n) => (t ? e : n === e ? null : n));
    };
  return (
    (0, Q.useEffect)(() => {
      n.current || ((n.current = !0), U(t, de, { profileOwner: `self` }));
    }, [t]),
    ve
      ? (0, $.jsx)(ye, {
          contentClassName: `h-full justify-center`,
          fullWidth: !0,
          backSlot: Le,
          children: (0, $.jsxs)(`div`, {
            role: `alert`,
            className: `flex flex-col items-center justify-center gap-4 text-center text-sm leading-5 text-token-text-tertiary`,
            children: [
              (0, $.jsx)(E, { className: `icon-sm` }),
              (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [
                  (0, $.jsx)(V, {
                    id: `profile.fetchError`,
                    defaultMessage: `We’re having trouble loading your profile. Please try again later.`,
                    description: `Error shown when the profile page cannot be loaded`,
                  }),
                  be == null
                    ? null
                    : (0, $.jsx)(`span`, {
                        className: `whitespace-pre-wrap text-token-error-foreground`,
                        children: (0, $.jsx)(V, {
                          id: `profile.fetchErrorDetail`,
                          defaultMessage: `[Employee only] Error: {details}`,
                          description: `Internal build diagnostic detail shown when the profile page cannot be loaded`,
                          values: { details: be },
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : (0, $.jsxs)(ye, {
          ref: pe,
          className: `relative`,
          fullWidth: !0,
          backSlot: (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-between`,
            children: [
              Le,
              (0, $.jsxs)(`div`, {
                className: `no-drag -mr-2 flex items-center gap-2`,
                children: [
                  s
                    ? (0, $.jsxs)(q, {
                        "aria-label": r.formatMessage({
                          id: `profile.giftCredits.ariaLabel`,
                          defaultMessage: `Gift credits`,
                          description: `Accessible label for opening the ChatGPT gift credits purchase flow from a Codex profile`,
                        }),
                        className: `h-7`,
                        color: `ghostActive`,
                        size: `toolbar`,
                        onClick: Lt,
                        children: [
                          (0, $.jsx)(Vt, { "aria-hidden": !0, className: `icon-xs` }),
                          (0, $.jsx)(V, {
                            id: `profile.giftCredits.label`,
                            defaultMessage: `Gift credits`,
                            description: `Button label beside Share on a Codex profile that opens the gift credits purchase flow`,
                          }),
                        ],
                      })
                    : null,
                  a && !K && !xe && Ee != null && De != null && je != null && Ne != null
                    ? (0, $.jsx)(Ti, {
                        dailyUsage: Ne,
                        displayName: De,
                        imageUrl: we ? Ce : null,
                        petOptions: Pe,
                        selectedPetId: Se ? re.id : null,
                        todayIso: b,
                        usageSummary: je,
                        username: Ee,
                      })
                    : null,
                  (0, $.jsx)(k, {
                    delayDuration: 0,
                    tooltipContent: (0, $.jsx)(V, {
                      id: `profile.privateTooltip`,
                      defaultMessage: `Your profile is only visible to you`,
                      description: `Tooltip explaining private profile visibility`,
                    }),
                    children: (0, $.jsxs)(`span`, {
                      tabIndex: 0,
                      className: `focus-visible:ring-token-focus flex h-7 cursor-default items-center gap-1.5 rounded-lg px-2 text-base text-token-text-secondary outline-none focus-visible:ring-1`,
                      children: [
                        (0, $.jsx)(D, { className: `icon-xs` }),
                        (0, $.jsx)(V, {
                          id: `profile.private`,
                          defaultMessage: `Private`,
                          description: `Private visibility badge label`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsxs)(q, {
                    "aria-label": r.formatMessage({
                      id: `profile.editProfileLabel`,
                      defaultMessage: `Edit profile`,
                      description: `Accessible label for opening the edit profile dialog`,
                    }),
                    className: `h-7`,
                    color: `ghostActive`,
                    disabled: K,
                    size: `toolbar`,
                    onClick: () => {
                      (U(t, B, { action: ce.CODEX_PROFILE_EDIT_ACTION_OPENED }), G(!0));
                    },
                    children: [
                      (0, $.jsx)(nt, { "aria-hidden": !0, className: `icon-xs` }),
                      (0, $.jsx)(V, {
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
                  "aria-busy": K || void 0,
                  className: `flex flex-col items-center`,
                  children: K
                    ? (0, $.jsx)(Ji, { avatar: re, showsPet: Se })
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `relative mb-4 size-20`,
                            children: [
                              (0, $.jsxs)(`label`, {
                                "aria-disabled": N.isPending,
                                className: H(
                                  `group relative flex size-20 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                                  N.isPending ? `cursor-default opacity-70` : `cursor-interaction`,
                                ),
                                children: [
                                  we
                                    ? (0, $.jsx)(`img`, {
                                        src: Ce,
                                        alt: ``,
                                        className: `size-20 rounded-full object-cover`,
                                        onError: () => {
                                          F(Ce);
                                        },
                                      })
                                    : (0, $.jsx)(`div`, {
                                        className: `flex size-20 items-center justify-center rounded-full bg-token-text-tertiary text-[28px] font-normal text-token-button-foreground`,
                                        children: kt(Oe),
                                      }),
                                  (0, $.jsx)(`span`, {
                                    className: H(
                                      `pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white opacity-0 dark:bg-black/60 electron-dark:bg-black/60`,
                                      !N.isPending &&
                                        `group-focus-within:opacity-100 group-hover:opacity-100`,
                                    ),
                                    children: (0, $.jsx)(nt, {
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
                                    disabled: N.isPending,
                                    onClick: () => {
                                      U(t, se, {
                                        action: oe.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_STARTED,
                                      });
                                    },
                                    onChange: (e) => {
                                      let n = e.currentTarget.files?.[0];
                                      ((e.currentTarget.value = ``),
                                        n != null &&
                                          (U(t, se, {
                                            action:
                                              oe.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_IMAGE_SELECTED,
                                          }),
                                          qi(n).then(W, () => {
                                            (U(t, se, {
                                              action:
                                                oe.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED,
                                            }),
                                              W(null));
                                          })));
                                    },
                                  }),
                                ],
                              }),
                              Se
                                ? (0, $.jsx)(`div`, {
                                    className: `absolute -right-8 -bottom-2 flex size-14 items-center justify-center`,
                                    children: (0, $.jsx)(_a, { avatar: re }),
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
                                  Oe ??
                                  (0, $.jsx)(V, {
                                    id: `profile.nameFallback`,
                                    defaultMessage: `Codex user`,
                                    description: `Fallback profile display name`,
                                  }),
                              }),
                            }),
                          }),
                          Ee != null || Ae != null
                            ? (0, $.jsx)(`div`, {
                                className: `mt-1 flex min-h-7 items-center gap-1.5 text-base leading-5 font-normal text-token-text-tertiary`,
                                children:
                                  Ee == null
                                    ? Ae == null
                                      ? null
                                      : (0, $.jsx)(Bi, { accountLabel: Ae })
                                    : (0, $.jsxs)($.Fragment, {
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `max-w-[240px] min-w-0 truncate`,
                                            children: (0, $.jsx)(V, {
                                              id: `profile.usernameValue`,
                                              defaultMessage: `@{username}`,
                                              description: `Profile username shown with an at-sign prefix`,
                                              values: { username: Ee },
                                            }),
                                          }),
                                          Ae == null
                                            ? null
                                            : (0, $.jsxs)($.Fragment, {
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    "aria-hidden": !0,
                                                    className: `text-token-text-tertiary/50`,
                                                    children: Ta,
                                                  }),
                                                  (0, $.jsx)(Bi, { accountLabel: Ae }),
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
                    children: K
                      ? (0, $.jsx)(Xi, {})
                      : xe
                        ? (0, $.jsx)(Qi, {})
                        : (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(ca, {
                                value: yt(r, je?.totalTextTokens),
                                label: (0, $.jsx)(V, {
                                  id: `profile.stats.lifetimeTokens`,
                                  defaultMessage: `Lifetime tokens`,
                                  description: `Label for lifetime token usage on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(la, {}),
                              (0, $.jsx)(ca, {
                                value: yt(r, je?.peakTokens),
                                label: (0, $.jsx)(V, {
                                  id: `profile.stats.peakTokens`,
                                  defaultMessage: `Peak tokens`,
                                  description: `Label for peak token usage on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(la, {}),
                              Me == null
                                ? null
                                : (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(ca, {
                                        value: bt(r, Me),
                                        label: (0, $.jsx)(V, {
                                          id: `profile.stats.longestTask`,
                                          defaultMessage: `Longest task`,
                                          description: `Label for longest task duration on the profile page`,
                                        }),
                                      }),
                                      (0, $.jsx)(la, {}),
                                    ],
                                  }),
                              (0, $.jsx)(ca, {
                                value: Tt(r, je?.currentStreakDays),
                                label: (0, $.jsx)(V, {
                                  id: `profile.stats.currentStreak`,
                                  defaultMessage: `Current streak`,
                                  description: `Label for current usage streak on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(la, {}),
                              (0, $.jsx)(ca, {
                                value: Tt(r, je?.longestStreakDays),
                                label: (0, $.jsx)(V, {
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
                          children: (0, $.jsx)(V, {
                            id: `profile.tokenUsage.title`,
                            defaultMessage: `Token activity`,
                            description: `Heading above the token usage chart`,
                          }),
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, $.jsx)(ga, {
                              active: L === `daily`,
                              disabled: K,
                              onSelect: () => {
                                R(`daily`);
                              },
                              children: (0, $.jsx)(V, {
                                id: `profile.tokenUsage.daily`,
                                defaultMessage: `Daily`,
                                description: `Daily token usage chart tab`,
                              }),
                            }),
                            (0, $.jsx)(ga, {
                              active: L === `weekly`,
                              disabled: K,
                              onSelect: () => {
                                R(`weekly`);
                              },
                              children: (0, $.jsx)(V, {
                                id: `profile.tokenUsage.weekly`,
                                defaultMessage: `Weekly`,
                                description: `Weekly token usage chart tab`,
                              }),
                            }),
                            (0, $.jsx)(ga, {
                              active: L === `cumulative`,
                              disabled: K,
                              onSelect: () => {
                                R(`cumulative`);
                              },
                              children: (0, $.jsx)(V, {
                                id: `profile.tokenUsage.cumulative`,
                                defaultMessage: `Cumulative`,
                                description: `Cumulative token usage chart tab`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    K
                      ? (0, $.jsx)($i, { columnCount: S, monthLabelCount: C.length })
                      : Fe == null
                        ? (0, $.jsx)(na, {})
                        : (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2 [--profile-usage-level-0:var(--color-token-border-light)] [--profile-usage-level-1:color-mix(in_srgb,var(--color-token-primary)_22%,transparent)] [--profile-usage-level-2:color-mix(in_srgb,var(--color-token-primary)_42%,transparent)] [--profile-usage-level-3:color-mix(in_srgb,var(--color-token-primary)_68%,transparent)] [--profile-usage-level-4:var(--color-token-primary)]`,
                            role: `img`,
                            "aria-label": Ie,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
                                    style: {
                                      gridTemplateColumns: `repeat(${S}, minmax(1px, 1fr))`,
                                    },
                                    children: Fe.cells.map((e, t) => {
                                      let n = vt(t, b);
                                      if (L === `daily` && n > b) return null;
                                      let r = Math.floor(t / 7),
                                        a = L !== `daily`,
                                        o = a && z === `${L}:${r}`,
                                        s = ba[e];
                                      a && e > 0 ? (s = o ? Sa : xa) : o && (s = Ca);
                                      let c = (0, $.jsx)(
                                        `div`,
                                        {
                                          className: `aspect-square w-full`,
                                          children: (0, $.jsx)(te.div, {
                                            animate: { opacity: 1, scale: 1 },
                                            className: H(
                                              `size-full rounded-[4px] transition-colors duration-500 ease-out [corner-shape:var(--codex-corner-shape)]`,
                                              s,
                                            ),
                                            initial: i ? !1 : { opacity: 0, scale: 0.7 },
                                            transition: i
                                              ? { duration: 0 }
                                              : {
                                                  delay: ua(t),
                                                  duration: 0.52,
                                                  ease: [0.22, 1, 0.36, 1],
                                                },
                                          }),
                                        },
                                        `${L}-${t}`,
                                      );
                                      if (L !== `daily`) return c;
                                      let l = `daily:${t}`;
                                      return (0, $.jsx)(
                                        k,
                                        {
                                          delayDuration: 0,
                                          open: z === l,
                                          onOpenChange: (e) => {
                                            Re(l, e);
                                          },
                                          portalContainer: fe,
                                          tooltipContent: (0, $.jsx)(pa, {
                                            dateIso: n,
                                            tokenCount: Fe.dailyValues[t] ?? 0,
                                            todayIso: b,
                                          }),
                                          children: c,
                                        },
                                        `${L}-${t}`,
                                      );
                                    }),
                                  }),
                                  L === `weekly` || L === `cumulative`
                                    ? (0, $.jsx)(`div`, {
                                        className: `pointer-events-none absolute inset-0 flex`,
                                        children: (L === `weekly`
                                          ? Fe.weeklyTotals
                                          : Fe.cumulativeTotals
                                        ).map((e, t) => {
                                          let n = vt(t * 7, b),
                                            r = `${L}:${t}`;
                                          return (0, $.jsx)(
                                            k,
                                            {
                                              delayDuration: 0,
                                              open: z === r,
                                              onOpenChange: (e) => {
                                                Re(r, e);
                                              },
                                              portalContainer: fe,
                                              tooltipContent: (0, $.jsx)(ma, {
                                                chartView: L,
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
                c ? (0, $.jsx)(ra, { insights: A, isLoading: K, isUnavailable: xe }) : null,
              ],
            }),
            me == null
              ? null
              : (0, $.jsx)(mn, {
                  source: me,
                  onCancel: () => {
                    W(null);
                  },
                  onSave: (e) => {
                    (W(null),
                      I(e.previewUrl),
                      N.mutate(e.photo, {
                        onError: () => {
                          (U(t, se, { action: oe.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED }),
                            I(null));
                        },
                        onSuccess: () => {
                          (U(t, se, {
                            action: oe.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_SUCCEEDED,
                          }),
                            F(null),
                            I(null));
                        },
                      }));
                  },
                }),
            he
              ? (0, $.jsx)(Ri, {
                  displayName: Oe,
                  failedProfileImageUrl: ie,
                  isPhotoSaving: N.isPending,
                  isTextSaving: M,
                  profileImageUrl: Ce,
                  username: Ee,
                  onCancel: () => {
                    G(!1);
                  },
                  onProfileImageError: F,
                  onSaveError: (e) => {
                    U(t, B, { action: ce.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED, ...e });
                  },
                  onPhotoChangeImageSelected: () => {
                    U(t, B, {
                      action: ce.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_IMAGE_SELECTED,
                    });
                  },
                  onPhotoChangeStarted: () => {
                    U(t, B, { action: ce.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_STARTED });
                  },
                  onSaveProfile: async (e) => {
                    (await ne.mutateAsync(e), F(null));
                  },
                  onSaveSuccess: () => {
                    U(t, B, { action: ce.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED });
                  },
                  onSaveUsername: (e) => j.mutateAsync(e),
                })
              : null,
          ],
        })
  );
}
function Ri({
  displayName: e,
  failedProfileImageUrl: t,
  isPhotoSaving: n,
  isTextSaving: r,
  onCancel: i,
  onPhotoChangeImageSelected: a,
  onPhotoChangeStarted: o,
  onProfileImageError: s,
  onSaveError: c,
  onSaveProfile: l,
  onSaveSuccess: u,
  onSaveUsername: d,
  profileImageUrl: f,
  username: p,
}) {
  let m = ge(),
    h = (0, Q.useId)(),
    g = (0, Q.useId)(),
    _ = (0, Q.useId)(),
    v = (0, Q.useId)(),
    [y, b] = (0, Q.useState)(e ?? ``),
    [x, S] = (0, Q.useState)(p ?? ``),
    [C, w] = (0, Q.useState)(null),
    [T, E] = (0, Q.useState)(null),
    [D, O] = (0, Q.useState)(null),
    [k, ee] = (0, Q.useState)(null),
    [te, A] = (0, Q.useState)(null),
    [ne, j] = (0, Q.useState)(null),
    [M, N] = (0, Q.useState)(!1),
    P = M || r || n,
    re = Nt(x),
    ie = P || y.trim().length === 0 || !re.ok,
    F = C?.previewUrl ?? f,
    ae = F != null && F !== t,
    I = p?.trim() ?? ``,
    L = async () => {
      if (ie) return;
      (O(null), ee(null), A(null), j(null));
      let t = y.trim(),
        n = xt(x),
        r = e?.trim() ?? ``;
      (b(t), S(n));
      let a = t.length > 0 && t !== r,
        o = n !== I,
        s = C != null,
        f = {},
        p = 0,
        h = null;
      if ((a && ((f.displayName = t), (p += 1)), o)) {
        let e = Nt(n);
        if (!e.ok) {
          ee(Ki(e.reason, m));
          return;
        }
        h = e.username;
      }
      if ((s && ((f.photo = C.photo), (p += 1)), h == null && p === 0)) {
        i();
        return;
      }
      N(!0);
      let g = le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
        _ = le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED;
      try {
        (h != null &&
          ((g = le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
          await d(h),
          (g = le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          p > 0 &&
            ((_ = le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
            await l(f),
            (_ = le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          u(),
          i());
      } catch (e) {
        if (
          (c({ profileDetailsUpdateApiStatus: _, usernameUpdateApiStatus: g }),
          g === le.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED)
        ) {
          ee(Hi(e, m));
          return;
        }
        if (e instanceof Mt) {
          A(Ui(e.uploadError, m));
          return;
        }
        if (p > 1) {
          j(Wi(e, m));
          return;
        }
        if (a) {
          O(Vi(e, m));
          return;
        }
        A(Ui(e, m));
      } finally {
        N(!1);
      }
    };
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(Ce, {
        open: !0,
        onOpenChange: (e) => {
          !e && !P && i();
        },
        contentProps: {
          onOpenAutoFocus: (e) => {
            (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
          },
          tabIndex: -1,
        },
        showDialogClose: !1,
        size: `default`,
        children: (0, $.jsxs)(Le, {
          as: `form`,
          className: `gap-0`,
          onSubmit: (e) => {
            (e.preventDefault(), L());
          },
          children: [
            (0, $.jsx)(Ie, {
              children: (0, $.jsx)(Ne, {
                title: (0, $.jsx)(De, {
                  className: `contents`,
                  children: (0, $.jsx)(V, {
                    id: `profile.editProfileTitle`,
                    defaultMessage: `Edit profile`,
                    description: `Title for the edit profile dialog`,
                  }),
                }),
                subtitle: (0, $.jsx)(we, {
                  className: `sr-only`,
                  children: (0, $.jsx)(V, {
                    id: `profile.editProfileDescription`,
                    defaultMessage: `Update your profile picture, display name, and username`,
                    description: `Accessible description for the edit profile dialog`,
                  }),
                }),
              }),
            }),
            (0, $.jsx)(Ie, {
              className: `items-center pt-6`,
              children: (0, $.jsxs)(`label`, {
                "aria-disabled": P,
                className: H(
                  `relative flex size-32 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                  Fi.profilePhotoInput,
                  P ? `cursor-default opacity-70` : `cursor-interaction`,
                ),
                children: [
                  ae
                    ? (0, $.jsx)(`img`, {
                        src: F,
                        alt: ``,
                        className: `size-32 rounded-full object-cover`,
                        onError: () => {
                          s(F);
                        },
                      })
                    : (0, $.jsx)(`div`, {
                        className: `flex size-32 items-center justify-center rounded-full bg-token-text-tertiary text-[40px] font-normal text-token-button-foreground`,
                        children: kt(y),
                      }),
                  (0, $.jsx)(`span`, {
                    className: H(
                      `absolute right-1 bottom-1 flex size-9 items-center justify-center rounded-full text-white`,
                      Fi.profilePhotoEditBadge,
                    ),
                    children: (0, $.jsx)(nt, { "aria-hidden": !0, className: `icon-sm` }),
                  }),
                  (0, $.jsx)(`input`, {
                    type: `file`,
                    accept: `image/*`,
                    "aria-label": m.formatMessage({
                      id: `profile.photoInputLabel`,
                      defaultMessage: `Change profile picture`,
                      description: `Accessible label for the profile photo upload input`,
                    }),
                    className: `sr-only`,
                    disabled: P,
                    onClick: o,
                    onChange: (e) => {
                      let t = e.currentTarget.files?.[0];
                      ((e.currentTarget.value = ``),
                        t != null &&
                          (a(),
                          qi(t).then(E, () => {
                            E(null);
                          })));
                    },
                  }),
                ],
              }),
            }),
            (0, $.jsx)(Ie, {
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
                            htmlFor: g,
                            className: `text-sm leading-5 text-token-text-primary`,
                            children: (0, $.jsx)(V, {
                              id: `profile.nameInputLabel`,
                              defaultMessage: `Display name`,
                              description: `Accessible label for the editable profile display name`,
                            }),
                          }),
                          D == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                id: h,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: D,
                              }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `flex h-10 min-w-0 items-center rounded-lg border border-token-input-border bg-token-input-background px-3 focus-within:border-token-focus-border`,
                        children: (0, $.jsx)(`input`, {
                          id: g,
                          "aria-describedby": D == null ? void 0 : h,
                          "aria-invalid": D != null,
                          className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                          disabled: P,
                          maxLength: 64,
                          onChange: (e) => {
                            (b(e.target.value), O(null), j(null));
                          },
                          onFocus: (e) => {
                            e.currentTarget.select();
                          },
                          spellCheck: !1,
                          value: y,
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
                                htmlFor: v,
                                className: `text-sm leading-5 text-token-text-primary`,
                                children: (0, $.jsx)(V, {
                                  id: `profile.usernameInputLabel`,
                                  defaultMessage: `Username`,
                                  description: `Accessible label for the editable profile username`,
                                }),
                              }),
                              k == null ? null : (0, $.jsx)(zi, {}),
                            ],
                          }),
                          k == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                id: _,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: k,
                              }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex h-10 min-w-0 items-center gap-0.5 rounded-lg border border-token-input-border bg-token-input-background px-3 text-base leading-6 focus-within:border-token-focus-border`,
                        children: [
                          (0, $.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `text-token-text-tertiary`,
                            children: (0, $.jsx)(V, {
                              id: `profile.usernamePrefix`,
                              defaultMessage: `@`,
                              description: `Prefix shown before a profile username`,
                            }),
                          }),
                          (0, $.jsx)(`input`, {
                            id: v,
                            "aria-describedby": k == null ? void 0 : _,
                            "aria-invalid": k != null,
                            className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                            disabled: P,
                            maxLength: 20,
                            onChange: (e) => {
                              let t = gt(e.target.value),
                                n = Nt(t);
                              (S(t), ee(n.ok ? null : Ki(n.reason, m)), j(null));
                            },
                            onFocus: (e) => {
                              e.currentTarget.select();
                            },
                            spellCheck: !1,
                            value: x,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            te != null || ne != null
              ? (0, $.jsx)(Ie, {
                  className: `pt-3`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      te == null
                        ? null
                        : (0, $.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: te,
                          }),
                      ne == null
                        ? null
                        : (0, $.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: ne,
                          }),
                    ],
                  }),
                })
              : null,
            (0, $.jsx)(Ie, {
              className: `pt-5`,
              children: (0, $.jsxs)(Be, {
                children: [
                  (0, $.jsx)(q, {
                    color: `ghost`,
                    disabled: P,
                    onClick: i,
                    children: (0, $.jsx)(V, {
                      id: `profile.editProfileCancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels profile editing`,
                    }),
                  }),
                  (0, $.jsx)(q, {
                    type: `submit`,
                    disabled: ie,
                    loading: M,
                    children: (0, $.jsx)(V, {
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
      T == null
        ? null
        : (0, $.jsx)(mn, {
            source: T,
            onCancel: () => {
              E(null);
            },
            onSave: (e) => {
              (w(e), E(null), A(null), j(null));
            },
          }),
    ],
  });
}
function zi() {
  let e = (0, Z.c)(6),
    t = ge(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(V, {
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
    ? ((i = (0, $.jsx)(lt, { "aria-hidden": !0, className: `icon-2xs` })), (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === r
      ? (a = e[5])
      : ((a = (0, $.jsx)(k, {
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
function Bi(e) {
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
function Vi(e, t) {
  return (
    Gi(e) ??
    t.formatMessage({
      id: `profile.displayNameUpdateError`,
      defaultMessage: `Unable to update display name`,
      description: `Fallback error shown when profile display name update fails`,
    })
  );
}
function Hi(e, t) {
  return e instanceof jt
    ? Ki(e.reason, t)
    : (Gi(e) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function Ui(e, t) {
  return (
    Gi(e) ??
    t.formatMessage({
      id: `profile.photoUpdateError`,
      defaultMessage: `Unable to update profile picture`,
      description: `Fallback error shown when profile picture update fails`,
    })
  );
}
function Wi(e, t) {
  return (
    Gi(e) ??
    t.formatMessage({
      id: `profile.updateError`,
      defaultMessage: `Unable to update profile`,
      description: `Fallback error shown when profile update fails`,
    })
  );
}
function Gi(e) {
  if (e instanceof Error) {
    let t = Ve(e);
    if (t != null) return t.message;
    if (e.message.length > 0) {
      try {
        let t = wa.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function Ki(e, t) {
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
function qi(e) {
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
function Ji(e) {
  let t = (0, Z.c)(8),
    { avatar: n, showsPet: r } = e,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Yi, { className: `absolute top-0 left-[72px] size-20 rounded-full` })),
      (a = (0, $.jsx)(Yi, { className: `absolute top-[100px] left-0 h-8 w-56 rounded-lg` })),
      (o = (0, $.jsx)(Yi, { className: `absolute top-[136px] left-12 h-5 w-32 rounded-lg` })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = r
        ? (0, $.jsx)(`div`, {
            className: `absolute top-8 left-32 flex size-14 items-center justify-center`,
            children: (0, $.jsx)(_a, { avatar: n }),
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
function Yi(e) {
  let t = (0, Z.c)(4),
    { className: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = H(Fi.profileLoadingBlock, `block`, n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(`span`, { "aria-hidden": !0, className: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function Xi() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)($.Fragment, { children: Ea.map(Zi) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Zi(e, t) {
  return (0, $.jsxs)(
    Q.Fragment,
    {
      children: [
        t > 0 ? (0, $.jsx)(la, {}) : null,
        (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center gap-1 overflow-hidden px-3 py-2.5`,
          children: [
            (0, $.jsx)(Yi, { className: `h-5 w-12 rounded-md` }),
            (0, $.jsx)(Yi, { className: `h-5 w-20 rounded-md` }),
          ],
        }),
      ],
    },
    e,
  );
}
function Qi() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[60px] w-full items-center justify-center px-4 py-3 text-center text-base text-token-text-tertiary`,
          children: (0, $.jsx)(V, {
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
function $i(e) {
  let t = (0, Z.c)(12),
    { columnCount: n, monthLabelCount: r } = e,
    i = `repeat(${n}, minmax(1px, 1fr))`,
    a;
  t[0] === i ? (a = t[1]) : ((a = { gridTemplateColumns: i }), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = Array.from({ length: n * 7 }, ta)), (t[2] = n), (t[3] = o));
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
        children: Array.from({ length: r }, ea),
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
function ea(e, t) {
  return (0, $.jsx)(Yi, { className: `h-4 w-6 rounded-md` }, t);
}
function ta(e, t) {
  return (0, $.jsx)(Yi, { className: `aspect-square w-full rounded-[4px]` }, t);
}
function na() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
          children: (0, $.jsx)(V, {
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
function ra(e) {
  let t = (0, Z.c)(6),
    { insights: n, isLoading: r, isUnavailable: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[0] = a)) : (a = t[0]);
  let { availablePlugins: o } = Ee(c, a);
  if (r) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(aa, {})), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (!i && n != null) {
    let e;
    return (
      t[2] !== n || t[3] !== o
        ? ((e = (0, $.jsx)(Xt, { insights: n, plugins: o })), (t[2] = n), (t[3] = o), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let s;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(ia, {})), (t[5] = s))
      : (s = t[5]),
    s
  );
}
function ia() {
  let e = (0, Z.c)(6),
    t = ge(),
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
        children: (0, $.jsx)(V, {
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
        children: (0, $.jsx)(V, {
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
function aa() {
  let e = (0, Z.c)(8),
    t = ge(),
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
        children: (0, $.jsx)(V, {
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
            children: Array.from({ length: 5 }, sa),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(V, {
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
            children: Array.from({ length: 5 }, oa),
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
function oa(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, $.jsx)(Yi, { className: `size-6 rounded-lg` }),
            (0, $.jsx)(Yi, { className: `h-5 w-24 rounded-md` }),
          ],
        }),
        (0, $.jsx)(Yi, { className: `h-5 w-14 rounded-md` }),
      ],
    },
    t,
  );
}
function sa(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsx)(Yi, { className: `h-5 w-24 rounded-md` }),
        (0, $.jsx)(Yi, { className: `h-5 w-10 rounded-md` }),
      ],
    },
    t,
  );
}
function ca(e) {
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
function la() {
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
function ua(e) {
  let t = e % 7;
  return (Math.floor(e / 7) * 8 + t * 12) / 1e3;
}
function da(e) {
  let t = vt(0, e),
    n = new Date(`${e}T00:00:00.000Z`),
    r = n.getUTCMonth(),
    i = n.getUTCFullYear(),
    a = Math.min(ya, fa(t, e) + 1);
  return Array.from({ length: a }, (e, t) => {
    let n = t - (a - 1);
    return new Date(Date.UTC(i, r + n, 1)).toISOString();
  });
}
function fa(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`),
    r = new Date(`${t}T00:00:00.000Z`);
  return (r.getUTCFullYear() - n.getUTCFullYear()) * 12 + r.getUTCMonth() - n.getUTCMonth();
}
function pa(e) {
  let t = (0, Z.c)(10),
    { dateIso: n, tokenCount: r, todayIso: i } = e,
    a = ge(),
    o;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((o = ha({ dateIso: n, intl: a, todayIso: i })),
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
      ? ((c = (0, $.jsx)(V, {
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
function ma(e) {
  let t = (0, Z.c)(10),
    { chartView: n, tokenCount: r, weekStartIso: i } = e,
    a = ge(),
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
            ? (0, $.jsx)(V, {
                id: `profile.tokenUsage.weekTooltip`,
                defaultMessage: `{tokens} tokens on week of {weekStart}`,
                description: `Tooltip for a weekly token usage chart column`,
                values: { tokens: s, weekStart: l },
              })
            : (0, $.jsx)(V, {
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
function ha({ dateIso: e, intl: t, todayIso: n }) {
  let r = new Date(`${e}T00:00:00.000Z`),
    i = t.formatDate(r, { day: `numeric`, month: `short`, timeZone: `UTC` }),
    a = r.getUTCFullYear();
  return a === Number(n.slice(0, 4)) ? i : `${i}, ${a}`;
}
function ga(e) {
  let t = (0, Z.c)(10),
    { active: n, children: r, disabled: i, onSelect: a } = e,
    o = i ? `cursor-default` : `cursor-interaction`,
    s = n ? `text-token-text-primary` : `text-token-text-tertiary`,
    c = !n && !i && `hover:text-token-text-primary focus-visible:text-token-text-primary`,
    l;
  t[0] !== o || t[1] !== s || t[2] !== c
    ? ((l = H(
        `text-base leading-5 font-normal outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
        o,
        s,
        c,
      )),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l))
    : (l = t[3]);
  let u;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== l
      ? ((u = (0, $.jsx)(`button`, {
          type: `button`,
          className: l,
          "aria-pressed": n,
          disabled: i,
          onClick: a,
          children: r,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function _a(e) {
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
    ? ((c = (0, $.jsx)(Ke, {
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
function va(e) {
  let t = Object.fromEntries(Object.entries(e));
  if (Object.keys(t).length === 0) return e.stack ?? e.message;
  try {
    return JSON.stringify({ name: e.name, message: e.message, stack: e.stack, ...t }, null, 2);
  } catch {
    return e.stack ?? e.message;
  }
}
var Z, Q, $, ya, ba, xa, Sa, Ca, wa, Ta, Ea;
e(() => {
  ((Z = d()),
    ae(),
    W(),
    A(),
    m(),
    r(),
    (Q = t(a(), 1)),
    G(),
    g(),
    me(),
    Ge(),
    Ut(),
    Gt(),
    qt(),
    be(),
    Xe(),
    Oe(),
    Fe(),
    F(),
    Rt(),
    C(),
    zt(),
    T(),
    st(),
    ct(),
    xe(),
    R(),
    S(),
    ve(),
    p(),
    z(),
    We(),
    Ae(),
    i(),
    h(),
    un(),
    pt(),
    In(),
    Dt(),
    ji(),
    Ii(),
    ($ = y()),
    (ya = 12),
    (ba = {
      0: `bg-[var(--profile-usage-level-0)]`,
      1: `bg-[var(--profile-usage-level-1)]`,
      2: `bg-[var(--profile-usage-level-2)]`,
      3: `bg-[var(--profile-usage-level-3)]`,
      4: `bg-[var(--profile-usage-level-4)]`,
    }),
    (xa = `bg-[color-mix(in_srgb,var(--color-token-primary)_78%,transparent)]`),
    (Sa = `bg-[var(--color-token-primary)] ring-1 ring-[color-mix(in_srgb,var(--color-token-primary)_55%,transparent)]`),
    (Ca = `bg-[color-mix(in_srgb,var(--color-token-primary)_14%,var(--profile-usage-level-0))]`),
    (wa = s({ type: n(), msg: n() })),
    (Ta = `·`),
    (Ea = [
      `totalTextTokens`,
      `peakTokens`,
      `longestTaskDurationMs`,
      `currentStreakDays`,
      `longestStreakDays`,
    ]));
})();
export { Li as Profile };
//# sourceMappingURL=profile.js.map
