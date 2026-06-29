import { s as e } from "./chunk-Bj-mKKzh.js";
import { na as t, sa as n } from "./src-2.js";
import {
  Wo as r,
  ac as i,
  cc as a,
  dc as o,
  fc as s,
  lc as c,
  mc as l,
  oc as u,
  pc as d,
  sc as f,
} from "./app-server-manager-signals.js";
import { n as p, t as m } from "./jsx-runtime.js";
import { t as h } from "./clsx.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  F as g,
  I as _,
  f as v,
  h as y,
  l as b,
  lt as x,
  o as S,
  u as C,
} from "./vscode-api.js";
import { c as w, o as T, r as E } from "./lib-2.js";
import { n as D } from "./chunk-12.js";
import { t as O } from "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive-CC-Egn92.js";
import "./notion.js";
import { h as k } from "./persisted-signal-CweW-bgN.js";
import "./rpc-1.js";
import { o as A } from "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import { t as j } from "./use-auth-6.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import { p as M } from "./codex-api.js";
import "./use-debounced-value.js";
import "./apps-queries.js";
import "./startCase-BGi-79JH.js";
import "./experimental-features-queries.js";
import "./use-is-dark.js";
import { t as N } from "./connector-logo.js";
import { r as P } from "./toast-signal.js";
import "./window-zoom-context.js";
import { t as F } from "./tooltip.js";
import { t as I } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-Dm-v1Nm8.js";
import "./use-os-info.js";
import { t as L } from "./link-external.js";
import { i as R, t as z } from "./proxy.js";
import { G as ee, mt as B, tt as V } from "./single-value.js";
import { r as te, t as H } from "./use-transform.js";
import { t as ne } from "./AnimatePresence.js";
import { t as U } from "./use-reduced-motion.js";
import { t as W } from "./apps.js";
import { t as re } from "./x.js";
import "./platform.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import { m as G } from "./use-plugins.js";
import { t as ie } from "./download.js";
import "./with-window.js";
import { t as ae } from "./get-skill-icon.js";
import "./bug.js";
import "./chrome.js";
import "./codex.js";
import "./openai-blossom.js";
import { t as K } from "./pencil.js";
import "./filesystem-media-src.js";
import { t as q } from "./copy-to-clipboard.js";
import {
  a as oe,
  d as se,
  i as ce,
  l as le,
  n as ue,
  r as de,
  u as fe,
} from "./dialog-layout.js";
import { t as pe } from "./chevron-right.js";
import { t as J } from "./codex-api-error.js";
import { t as Y } from "./copy.js";
import {
  C as me,
  S as he,
  _ as ge,
  a as _e,
  b as ve,
  c as ye,
  d as be,
  f as xe,
  g as Se,
  h as Ce,
  i as we,
  l as Te,
  m as Ee,
  o as De,
  p as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
  v as Ne,
  x as Pe,
  y as Fe,
} from "./profile-queries.js";
import { t as Ie } from "./lock.js";
import { t as Le } from "./model-and-reasoning-effort-translations.js";
import { t as Re } from "./settings-content-layout.js";
import { i as ze, o as Be, r as Ve, t as He } from "./codex-avatar.js";
import { t as Ue } from "./share.js";
import { t as We } from "./question-mark-circle.js";
function Ge(e, t, n) {
  let r = e.get(),
    i = null,
    a = r,
    o,
    s = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    c = () => {
      i &&= (i.stop(), null);
    },
    l = () => {
      (c(),
        (i = new V({
          keyframes: [qe(e.get()), qe(a)],
          velocity: e.getVelocity(),
          type: `spring`,
          restDelta: 0.001,
          restSpeed: 0.01,
          ...n,
          onUpdate: o,
        })));
    };
  if (
    (e.attach((e, t) => {
      ((a = e), (o = (e) => t(Ke(e, s))), B.postRender(l));
    }, c),
    ee(t))
  ) {
    let n = t.on(`change`, (t) => e.set(Ke(t, s))),
      r = e.on(`destroy`, n);
    return () => {
      (n(), r());
    };
  }
  return c;
}
function Ke(e, t) {
  return t ? e + t : e;
}
function qe(e) {
  return typeof e == `number` ? e : parseFloat(e);
}
var X = e(p(), 1);
function Je(e, t = {}) {
  let { isStatic: n } = (0, X.useContext)(R),
    r = () => (ee(e) ? e.get() : e);
  if (n) return H(r);
  let i = te(r());
  return ((0, X.useInsertionEffect)(() => Ge(i, e, t), [i, JSON.stringify(t)]), i);
}
var Z = x(),
  Q = m(),
  Ye = { plugin: `@`, skill: `$` };
function Xe(e) {
  let t = (0, Z.c)(40),
    { insights: n, plugins: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o = w(),
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
    let e = n.invocations?.filter(it),
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
      ? ((f = (0, Q.jsx)(`h2`, {
          className: `text-base leading-5 font-medium text-token-text-primary`,
          children: (0, Q.jsx)(T, {
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
            : (0, Q.jsx)(Qe, {
                label: (0, Q.jsx)(T, {
                  id: `profile.activity.features.fastMode`,
                  defaultMessage: `Fast Mode`,
                  description: `Fast Mode feature label on the profile page`,
                }),
                isEmpty: !c,
                tooltipContent: (0, Q.jsx)(T, {
                  id: `profile.activity.features.fastModeTooltip`,
                  defaultMessage: `How often you use /fast mode`,
                  description: `Tooltip explaining the Fast Mode profile metric`,
                }),
                value:
                  n.fastModePercent != null && n.fastModePercent !== 0
                    ? rt(o, n.fastModePercent)
                    : (0, Q.jsx)($e, {}),
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
            ? (0, Q.jsx)(Qe, {
                label: (0, Q.jsx)(T, {
                  id: `profile.activity.features.mostUsedReasoning`,
                  defaultMessage: `Most used reasoning`,
                  description: `Most used reasoning effort feature label on the profile page`,
                }),
                isEmpty: !l,
                tooltipContent: (0, Q.jsx)(T, {
                  id: `profile.activity.features.reasoningEffortTooltip`,
                  defaultMessage: `Your most used reasoning effort`,
                  description: `Tooltip explaining the reasoning effort profile metric`,
                }),
                value: l
                  ? (0, Q.jsxs)(Q.Fragment, {
                      children: [(0, Q.jsx)(tt, { effort: r }), ` · `, rt(o, i)],
                    })
                  : (0, Q.jsx)($e, {}),
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
            : (0, Q.jsx)(Qe, {
                label: (0, Q.jsx)(T, {
                  id: `profile.activity.features.skillsExplored`,
                  defaultMessage: `Skills explored`,
                  description: `Unique skills explored feature label on the profile page`,
                }),
                isEmpty: n.skillsExplored === 0,
                tooltipContent: (0, Q.jsx)(T, {
                  id: `profile.activity.features.skillsExploredTooltip`,
                  defaultMessage: `The number of unique skills you've used`,
                  description: `Tooltip explaining the skills explored profile metric`,
                }),
                value:
                  n.skillsExplored === 0 ? (0, Q.jsx)(et, {}) : o.formatNumber(n.skillsExplored),
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
            : (0, Q.jsx)(Qe, {
                label: (0, Q.jsx)(T, {
                  id: `profile.activity.features.totalSkillsUsed`,
                  defaultMessage: `Total skills used`,
                  description: `Total skills used feature label on the profile page`,
                }),
                isEmpty: !u,
                tooltipContent: (0, Q.jsx)(T, {
                  id: `profile.activity.features.totalSkillsUsedTooltip`,
                  defaultMessage: `Total times Codex used a skill`,
                  description: `Tooltip explaining the total skills used profile metric`,
                }),
                value: u ? o.formatNumber(n.totalSkillsUsed) : (0, Q.jsx)(et, {}),
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
            : (0, Q.jsx)(Qe, {
                label: (0, Q.jsx)(T, {
                  id: `profile.activity.features.totalThreads`,
                  defaultMessage: `Total threads`,
                  description: `Total threads feature label on the profile page`,
                }),
                isEmpty: n.totalThreads === 0,
                tooltipContent: (0, Q.jsx)(T, {
                  id: `profile.activity.features.totalThreadsTooltip`,
                  defaultMessage: `Total unique conversations with Codex`,
                  description: `Tooltip explaining the total threads profile metric`,
                }),
                value: n.totalThreads === 0 ? (0, Q.jsx)(et, {}) : o.formatNumber(n.totalThreads),
              })),
        (t[31] = n.totalThreads),
        (t[32] = o),
        (t[33] = _))
      : (_ = t[33]);
    let v;
    (t[34] !== _ || t[35] !== p || t[36] !== m || t[37] !== h || t[38] !== g
      ? ((v = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2`,
          children: [
            f,
            (0, Q.jsxs)(`dl`, { className: `flex flex-col gap-2`, children: [p, m, h, g, _] }),
          ],
        })),
        (t[34] = _),
        (t[35] = p),
        (t[36] = m),
        (t[37] = h),
        (t[38] = g),
        (t[39] = v))
      : (v = t[39]),
      (s = (0, Q.jsxs)(`section`, {
        "aria-label": d,
        className: `grid grid-cols-2 gap-10`,
        children: [
          v,
          e == null
            ? null
            : (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-2`,
                children: [
                  (0, Q.jsx)(`h2`, {
                    className: `text-base leading-5 font-medium text-token-text-primary`,
                    children: (0, Q.jsx)(T, {
                      id: `profile.activity.plugins.title`,
                      defaultMessage: `Most used plugins`,
                      description: `Heading for the most used Codex plugins on the profile page`,
                    }),
                  }),
                  e.length === 0
                    ? (0, Q.jsxs)(`div`, {
                        className: `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-token-border-light text-base leading-5 text-token-text-tertiary`,
                        children: [
                          (0, Q.jsx)(W, { "aria-hidden": !0, className: `icon-xs` }),
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center gap-1`,
                            children: [
                              (0, Q.jsx)(T, {
                                id: `profile.activity.plugins.empty`,
                                defaultMessage: `No plugins used yet ·`,
                                description: `Empty state for the most used plugins on the profile page`,
                              }),
                              (0, Q.jsx)(D, {
                                className: `cursor-interaction !text-token-text-tertiary underline underline-offset-2 hover:!text-token-text-secondary`,
                                to: `/skills`,
                                children: (0, Q.jsx)(T, {
                                  id: `profile.activity.plugins.browse`,
                                  defaultMessage: `Browse`,
                                  description: `Link to browse plugins from the profile activity empty state`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, Q.jsx)(`ul`, {
                        className: `flex flex-col gap-2`,
                        children: e.map((e) =>
                          (0, Q.jsx)(
                            Ze,
                            { invocation: e, plugin: at(e, a) },
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
function Ze(e) {
  let t = (0, Z.c)(25),
    { invocation: n, plugin: r } = e,
    i = w(),
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
    ? ((l = (0, Q.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center rounded-lg border border-token-border-light bg-token-main-surface-primary`,
        children: (0, Q.jsx)(nt, { name: a, plugin: r, pluginId: n.plugin_id, type: n.type }),
      })),
      (t[6] = n.plugin_id),
      (t[7] = n.type),
      (t[8] = a),
      (t[9] = r),
      (t[10] = l))
    : (l = t[10]);
  let u = Ye[n.type],
    d;
  t[11] !== c || t[12] !== u
    ? ((d = (0, Q.jsxs)(`span`, {
        className: `min-w-0 truncate text-base leading-5 text-token-text-primary`,
        children: [u, c],
      })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] !== l || t[15] !== d
    ? ((f = (0, Q.jsxs)(`div`, {
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
    : ((m = (0, Q.jsx)(`span`, {
        className: `shrink-0 text-base leading-5 text-token-text-secondary tabular-nums`,
        children: p,
      })),
      (t[20] = p),
      (t[21] = m));
  let h;
  return (
    t[22] !== f || t[23] !== m
      ? ((h = (0, Q.jsxs)(`li`, {
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
function Qe(e) {
  let t = (0, Z.c)(15),
    { isEmpty: n, label: r, tooltipContent: i, value: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (0, Q.jsx)(`dt`, {
        className: `min-w-0 truncate text-token-text-secondary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = o));
  let s = n ? `text-token-text-tertiary` : `text-token-text-primary`,
    c;
  t[2] === s ? (c = t[3]) : ((c = h(`shrink-0 tabular-nums`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = (0, Q.jsx)(`span`, { className: `inline-block`, tabIndex: 0, children: a })),
      (t[4] = a),
      (t[5] = l));
  let u;
  t[6] !== l || t[7] !== i
    ? ((u = (0, Q.jsx)(F, {
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
    ? ((d = (0, Q.jsx)(`dd`, { className: c, children: u })), (t[9] = c), (t[10] = u), (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== o || t[13] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
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
function $e() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(T, {
          id: `profile.activity.features.notUsed`,
          defaultMessage: `Not used`,
          description: `Empty activity metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function et() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(T, {
          id: `profile.activity.features.none`,
          defaultMessage: `None`,
          description: `Empty count metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function tt(e) {
  let t = (0, Z.c)(4),
    { effort: n } = e;
  switch (n) {
    case `none`:
    case `minimal`:
    case `low`:
    case `medium`:
    case `high`:
    case `xhigh`: {
      let e;
      return (
        t[0] === n ? (e = t[1]) : ((e = (0, Q.jsx)(Le, { effort: n })), (t[0] = n), (t[1] = e)), e
      );
    }
    default: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, Q.jsx)(Q.Fragment, { children: n })), (t[2] = n), (t[3] = e)),
        e
      );
    }
  }
}
function nt(e) {
  let t = (0, Z.c)(10),
    { name: n, plugin: r, pluginId: i, type: a } = e,
    o;
  t[0] !== n || t[1] !== a
    ? ((o =
        a === `plugin`
          ? (0, X.createElement)(W, { "aria-hidden": !0, className: `icon-sm` })
          : (0, X.createElement)(ae(null, { fallbackName: n }), { className: `icon-sm` })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (r?.logoPath != null) {
    let e;
    return (
      t[3] !== s || t[4] !== r.logoPath
        ? ((e = (0, Q.jsx)(N, { alt: ``, className: `icon-sm`, fallback: s, logoUrl: r.logoPath })),
          (t[3] = s),
          (t[4] = r.logoPath),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (r == null) {
    let e;
    if (t[6] !== n || t[7] !== i || t[8] !== a) {
      e = Symbol.for(`react.early_return_sentinel`);
      bb0: {
        let t = O(i?.split(`@`)[0] ?? (a === `skill` ? n.split(`:`)[0] : n));
        if (t != null) {
          e = (0, X.createElement)(t, { "aria-hidden": !0, className: `icon-sm` });
          break bb0;
        }
      }
      ((t[6] = n), (t[7] = i), (t[8] = a), (t[9] = e));
    } else e = t[9];
    if (e !== Symbol.for(`react.early_return_sentinel`)) return e;
  }
  return s;
}
function rt(e, t) {
  return e.formatNumber(t / 100, { maximumFractionDigits: 0, style: `percent` });
}
function it(e) {
  return (
    e.usage_count != null &&
    (e.type === `plugin` ? !!e.plugin_name?.trim() : !!e.skill_name?.trim())
  );
}
function at(e, t) {
  if (e.plugin_id) {
    let n = t.find((t) => t.plugin.id === e.plugin_id);
    if (n != null) return n;
  }
  let n = e.plugin_name ?? (e.type === `skill` ? e.skill_name?.split(`:`)[0] : null);
  return t.find((e) => e.plugin.name === n) ?? null;
}
var ot = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
        fill: `currentColor`,
      }),
    }),
  st = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M7.46816 11.6002V8.53223H4.4002C4.10638 8.53223 3.86816 8.29401 3.86816 8.0002C3.86816 7.70638 4.10638 7.46816 4.4002 7.46816H7.46816V4.4002C7.46816 4.10638 7.70638 3.86816 8.0002 3.86816C8.29401 3.86816 8.53223 4.10638 8.53223 4.4002V7.46816H11.6002L11.7072 7.4791C11.9497 7.52865 12.1322 7.74305 12.1322 8.0002C12.1322 8.25734 11.9497 8.47174 11.7072 8.52129L11.6002 8.53223H8.53223V11.6002C8.53223 11.894 8.29401 12.1322 8.0002 12.1322C7.70638 12.1322 7.46816 11.894 7.46816 11.6002Z`,
        fill: `currentColor`,
      }),
    }),
  $ = 220,
  ct = 360,
  lt = 512,
  ut = (ct - $) / 2,
  dt = $ / 2,
  ft = ct / 2,
  pt = ft - 32,
  mt = 2,
  ht = `radial-gradient(circle at center, transparent 0 ${dt - 0.5}px, black ${dt}px ${pt}px, transparent ${ft}px)`;
function gt(e) {
  let t = (0, Z.c)(96),
    { source: n, onCancel: r, onSave: i } = e,
    a = w(),
    [o, s] = (0, X.useState)(null),
    [c, l] = (0, X.useState)(null),
    [u, d] = (0, X.useState)(!1),
    f;
  t[0] === o
    ? (f = t[1])
    : ((f = o == null ? 1 : vt(o.naturalWidth, o.naturalHeight)), (t[0] = o), (t[1] = f));
  let p = f,
    m = o == null ? 1 : o.zoom / p,
    h;
  t[2] !== o || t[3] !== p
    ? ((h = (e) => {
        o != null && s(xt(o, p * e));
      }),
      (t[2] = o),
      (t[3] = p),
      (t[4] = h))
    : (h = t[4]);
  let g = h,
    _;
  t[5] !== o || t[6] !== u || t[7] !== i || t[8] !== n
    ? ((_ = async () => {
        if (!(o == null || u)) {
          d(!0);
          try {
            let e = await St(n, o);
            (d(!1), i(e));
          } catch {
            d(!1);
          }
        }
      }),
      (t[5] = o),
      (t[6] = u),
      (t[7] = i),
      (t[8] = n),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    y;
  t[10] !== u || t[11] !== r
    ? ((y = (e) => {
        !e && !u && r();
      }),
      (t[10] = u),
      (t[11] = r),
      (t[12] = y))
    : (y = t[12]);
  let b = !u,
    x;
  t[13] === v
    ? (x = t[14])
    : ((x = (e) => {
        (e.preventDefault(), v());
      }),
      (t[13] = v),
      (t[14] = x));
  let S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(se, { className: `sr-only`, children: (0, Q.jsx)(T, { ...Et.title }) })),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(fe, {
        className: `sr-only`,
        children: (0, Q.jsx)(T, {
          id: `profile.photoCrop.description`,
          defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
          description: `Description for the profile picture crop dialog`,
        }),
      })),
      (t[16] = C))
    : (C = t[16]);
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(ce, { title: (0, Q.jsx)(T, { ...Et.title }) })), (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { maxWidth: ct }), (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] !== o || t[20] !== n.dataUrl
    ? ((O =
        o == null
          ? null
          : (0, Q.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 z-0 overflow-hidden`,
              style: { WebkitMaskImage: ht, maskImage: ht },
              children: (0, Q.jsxs)(`div`, {
                className: `absolute top-0 left-0 overflow-hidden`,
                style: {
                  height: o.naturalHeight * o.zoom,
                  transform: `translate(${ut + o.offsetX}px, ${ut + o.offsetY}px)`,
                  width: o.naturalWidth * o.zoom,
                },
                children: [
                  (0, Q.jsx)(`img`, {
                    src: n.dataUrl,
                    alt: ``,
                    className: `block max-w-none select-none`,
                    draggable: !1,
                    style: {
                      filter: `blur(${mt}px)`,
                      height: `calc(100% + ${mt * 2}px)`,
                      transform: `translate(${-mt}px, ${-mt}px)`,
                      width: `calc(100% + ${mt * 2}px)`,
                    },
                  }),
                  (0, Q.jsx)(`div`, {
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
    ? ((k = { height: $, width: $ }), (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        s(_t(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight));
      }),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] === o
    ? (j = t[25])
    : ((j = (e) => {
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
      (t[25] = j));
  let M;
  t[26] === c
    ? (M = t[27])
    : ((M = (e) => {
        c != null &&
          e.pointerId === c.pointerId &&
          s((t) =>
            t == null
              ? t
              : {
                  ...t,
                  offsetX: bt(c.offsetX + e.clientX - c.pointerX, t.naturalWidth, t.zoom),
                  offsetY: bt(c.offsetY + e.clientY - c.pointerY, t.naturalHeight, t.zoom),
                },
          );
      }),
      (t[26] = c),
      (t[27] = M));
  let N, P;
  t[28] === c?.pointerId
    ? ((N = t[29]), (P = t[30]))
    : ((N = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (P = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (t[28] = c?.pointerId),
      (t[29] = N),
      (t[30] = P));
  let F;
  t[31] === o
    ? (F = t[32])
    : ((F =
        o == null
          ? void 0
          : {
              height: o.naturalHeight * o.zoom,
              transform: `translate(${o.offsetX}px, ${o.offsetY}px)`,
              width: o.naturalWidth * o.zoom,
            }),
      (t[31] = o),
      (t[32] = F));
  let L;
  t[33] !== n.dataUrl || t[34] !== j || t[35] !== M || t[36] !== N || t[37] !== P || t[38] !== F
    ? ((L = (0, Q.jsx)(`div`, {
        className: `relative z-10 overflow-hidden rounded-full bg-token-bg-secondary ring-1 ring-token-border-light`,
        style: k,
        children: (0, Q.jsx)(`img`, {
          src: n.dataUrl,
          alt: ``,
          className: `absolute top-0 left-0 max-h-none max-w-none cursor-interaction touch-none select-none`,
          draggable: !1,
          onLoad: A,
          onPointerDown: j,
          onPointerMove: M,
          onPointerUp: N,
          onPointerCancel: P,
          style: F,
        }),
      })),
      (t[33] = n.dataUrl),
      (t[34] = j),
      (t[35] = M),
      (t[36] = N),
      (t[37] = P),
      (t[38] = F),
      (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== O || t[41] !== L
    ? ((R = (0, Q.jsx)(oe, {
        className: `items-center`,
        children: (0, Q.jsxs)(`div`, {
          className: `relative isolate flex aspect-square w-full items-center justify-center`,
          style: D,
          children: [O, L],
        }),
      })),
      (t[40] = O),
      (t[41] = L),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] === a
    ? (z = t[44])
    : ((z = a.formatMessage({
        id: `profile.photoCrop.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the profile picture zoom out button`,
      })),
      (t[43] = a),
      (t[44] = z));
  let ee = o == null || u || m <= 1,
    B;
  t[45] !== g || t[46] !== m
    ? ((B = () => {
        g(Math.max(1, m - 0.1));
      }),
      (t[45] = g),
      (t[46] = m),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(ot, { className: `icon-sm` })), (t[48] = V))
    : (V = t[48]);
  let te;
  t[49] !== z || t[50] !== ee || t[51] !== B
    ? ((te = (0, Q.jsx)(I, {
        "aria-label": z,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: ee,
        size: `iconSm`,
        onClick: B,
        children: V,
      })),
      (t[49] = z),
      (t[50] = ee),
      (t[51] = B),
      (t[52] = te))
    : (te = t[52]);
  let H;
  t[53] === a
    ? (H = t[54])
    : ((H = a.formatMessage({
        id: `profile.photoCrop.zoomLabel`,
        defaultMessage: `Zoom profile picture`,
        description: `Accessible label for the profile picture crop zoom slider`,
      })),
      (t[53] = a),
      (t[54] = H));
  let ne = o == null || u,
    U;
  t[55] === g
    ? (U = t[56])
    : ((U = (e) => {
        g(Number(e.target.value));
      }),
      (t[55] = g),
      (t[56] = U));
  let W;
  t[57] !== H || t[58] !== ne || t[59] !== U || t[60] !== m
    ? ((W = (0, Q.jsx)(`input`, {
        type: `range`,
        "aria-label": H,
        className: `h-0.5 flex-1 appearance-none rounded-full bg-token-border-light [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        disabled: ne,
        min: 1,
        max: 3,
        step: 0.01,
        value: m,
        onChange: U,
      })),
      (t[57] = H),
      (t[58] = ne),
      (t[59] = U),
      (t[60] = m),
      (t[61] = W))
    : (W = t[61]);
  let re;
  t[62] === a
    ? (re = t[63])
    : ((re = a.formatMessage({
        id: `profile.photoCrop.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the profile picture zoom in button`,
      })),
      (t[62] = a),
      (t[63] = re));
  let G = o == null || u || m >= 3,
    ie;
  t[64] !== g || t[65] !== m
    ? ((ie = () => {
        g(Math.min(3, m + 0.1));
      }),
      (t[64] = g),
      (t[65] = m),
      (t[66] = ie))
    : (ie = t[66]);
  let ae;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Q.jsx)(st, { className: `icon-sm` })), (t[67] = ae))
    : (ae = t[67]);
  let K;
  t[68] !== re || t[69] !== G || t[70] !== ie
    ? ((K = (0, Q.jsx)(I, {
        "aria-label": re,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: G,
        size: `iconSm`,
        onClick: ie,
        children: ae,
      })),
      (t[68] = re),
      (t[69] = G),
      (t[70] = ie),
      (t[71] = K))
    : (K = t[71]);
  let q;
  t[72] !== te || t[73] !== W || t[74] !== K
    ? ((q = (0, Q.jsx)(oe, {
        className: `relative z-10 items-center`,
        children: (0, Q.jsxs)(`div`, {
          className: `flex w-full max-w-[276px] items-center gap-5`,
          children: [te, W, K],
        }),
      })),
      (t[72] = te),
      (t[73] = W),
      (t[74] = K),
      (t[75] = q))
    : (q = t[75]);
  let pe;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(T, {
        id: `profile.photoCrop.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile picture cropping`,
      })),
      (t[76] = pe))
    : (pe = t[76]);
  let J;
  t[77] !== u || t[78] !== r
    ? ((J = (0, Q.jsx)(I, { color: `ghost`, disabled: u, onClick: r, children: pe })),
      (t[77] = u),
      (t[78] = r),
      (t[79] = J))
    : (J = t[79]);
  let Y = o == null,
    me;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(T, {
        id: `profile.photoCrop.save`,
        defaultMessage: `Save`,
        description: `Button that saves a cropped profile picture`,
      })),
      (t[80] = me))
    : (me = t[80]);
  let he;
  t[81] !== u || t[82] !== Y
    ? ((he = (0, Q.jsx)(I, {
        type: `submit`,
        color: `primary`,
        disabled: Y,
        loading: u,
        children: me,
      })),
      (t[81] = u),
      (t[82] = Y),
      (t[83] = he))
    : (he = t[83]);
  let ge;
  t[84] !== J || t[85] !== he
    ? ((ge = (0, Q.jsxs)(de, { children: [J, he] })), (t[84] = J), (t[85] = he), (t[86] = ge))
    : (ge = t[86]);
  let _e;
  t[87] !== R || t[88] !== q || t[89] !== ge || t[90] !== x
    ? ((_e = (0, Q.jsxs)(ue, {
        as: `form`,
        className: `gap-5`,
        onSubmit: x,
        children: [S, C, E, R, q, ge],
      })),
      (t[87] = R),
      (t[88] = q),
      (t[89] = ge),
      (t[90] = x),
      (t[91] = _e))
    : (_e = t[91]);
  let ve;
  return (
    t[92] !== y || t[93] !== _e || t[94] !== b
      ? ((ve = (0, Q.jsx)(le, {
          open: !0,
          onOpenChange: y,
          showDialogClose: b,
          size: `default`,
          children: _e,
        })),
        (t[92] = y),
        (t[93] = _e),
        (t[94] = b),
        (t[95] = ve))
      : (ve = t[95]),
    ve
  );
}
function _t(e, t) {
  let n = vt(e, t);
  return { naturalHeight: t, naturalWidth: e, offsetX: yt(e, n), offsetY: yt(t, n), zoom: n };
}
function vt(e, t) {
  return Math.max($ / e, $ / t);
}
function yt(e, t) {
  return ($ - e * t) / 2;
}
function bt(e, t, n) {
  return Math.min(0, Math.max($ - t * n, e));
}
function xt(e, t) {
  let n = ($ / 2 - e.offsetX) / e.zoom,
    r = ($ / 2 - e.offsetY) / e.zoom;
  return {
    ...e,
    offsetX: bt($ / 2 - n * t, e.naturalWidth, t),
    offsetY: bt($ / 2 - r * t, e.naturalHeight, t),
    zoom: t,
  };
}
async function St(e, t) {
  let n = await Ct(e.dataUrl),
    r = document.createElement(`canvas`);
  ((r.height = lt), (r.width = lt));
  let i = r.getContext(`2d`);
  if (i == null) throw Error(`Unable to create profile photo crop canvas`);
  i.drawImage(n, -t.offsetX / t.zoom, -t.offsetY / t.zoom, $ / t.zoom, $ / t.zoom, 0, 0, lt, lt);
  let a = Tt(e.contentType),
    o = r.toDataURL(a, 0.92),
    s = await wt(r, a);
  return { photo: new File([s], e.filename, { type: s.type }), previewUrl: o };
}
function Ct(e) {
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
function wt(e, t) {
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
function Tt(e) {
  return e === `image/png` || e === `image/webp` ? e : `image/jpeg`;
}
var Et = E({
    title: {
      id: `profile.photoCrop.title`,
      defaultMessage: `Adjust your image`,
      description: `Title for the profile picture crop dialog`,
    },
  }),
  Dt = `` + new URL(`OpenAISans-Medium-B7nJY_kG.woff2`, import.meta.url).href,
  Ot = `` + new URL(`OpenAISans-Regular-DFZxHTKM.woff2`, import.meta.url).href,
  kt = `<svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_934_12058)">
<path d="M11.9434 0.430908C13.7624 0.431247 15.4294 1.09161 16.7158 2.18188C17.1422 2.10495 17.584 2.06277 18.0322 2.06274C22.11 2.0642 25.4164 5.37117 25.417 9.44946C25.4169 9.89743 25.3728 10.3366 25.2959 10.762C26.3869 12.0489 27.0486 13.7176 27.0488 15.5374C27.0482 18.7417 25.0061 21.4654 22.1562 22.4885C21.1331 25.3386 18.4094 27.3806 15.2051 27.3811C13.3855 27.3809 11.7185 26.7191 10.4316 25.6282C10.0059 25.705 9.56539 25.7491 9.11719 25.7493C5.03873 25.7487 1.73312 22.4413 1.73242 18.3625C1.73247 17.9141 1.77453 17.4743 1.85156 17.0481C0.83754 15.8516 0.194518 14.3264 0.109375 12.6555L0.0986328 12.2747C0.0989925 9.07057 2.13971 6.34328 4.98926 5.31958C6.01324 2.47012 8.73955 0.430975 11.9434 0.430908ZM11.9434 2.59985C9.53065 2.59992 7.49693 4.23961 6.90137 6.46704C6.80098 6.84049 6.5082 7.13327 6.13477 7.23364C3.90815 7.82949 2.26795 9.86235 2.26758 12.2747C2.26791 13.7154 2.85272 15.0198 3.79785 15.9651C4.07029 16.2386 4.17665 16.6379 4.07715 17.011C3.962 17.4422 3.89948 17.896 3.89941 18.3625C3.90012 21.2437 6.23609 23.5797 9.11719 23.5803C9.58367 23.5802 10.0384 23.5198 10.4697 23.4045L10.6113 23.3762C10.9409 23.3342 11.2757 23.4453 11.5146 23.6838C12.4599 24.6287 13.7645 25.2111 15.2051 25.2112C17.6173 25.2107 19.6506 23.5723 20.2461 21.345L20.292 21.2083C20.4202 20.9003 20.6853 20.6662 21.0127 20.5784C23.2396 19.9828 24.8802 17.9494 24.8809 15.5374C24.8807 14.0967 24.2963 12.7921 23.3516 11.8469C23.0782 11.5733 22.9726 11.1737 23.0723 10.8C23.1875 10.3688 23.2488 9.91531 23.249 9.44946C23.2484 6.56834 20.9112 4.23251 18.0303 4.23169C17.5631 4.23177 17.1084 4.29242 16.6777 4.40747C16.3048 4.50684 15.9063 4.40063 15.6328 4.12817C14.747 3.24249 13.5458 2.67278 12.2129 2.60474L11.9434 2.59985ZM71.5488 20.428H69.127V19.3098C68.5117 20.1111 67.3381 20.6145 66.1279 20.6145C63.5186 20.6145 61.4688 18.5649 61.4688 15.7708C61.4688 12.9765 63.5199 10.927 66.1279 10.927C67.376 10.927 68.5118 11.3173 69.127 12.0999V7.38501H71.5488V20.428ZM43.4658 7.19751C46.6147 7.19769 49.1299 9.15467 49.5967 11.8381H46.9316C46.5403 10.6077 45.2165 9.60083 43.5029 9.60083C41.1554 9.6009 39.4972 11.4086 39.4971 13.9045C39.4971 16.4019 41.1555 18.2092 43.541 18.2092C45.2545 18.2092 46.5592 17.2208 47.0059 15.9729H49.6514C49.1482 18.6928 46.6887 20.6135 43.4844 20.6135C39.6093 20.6135 36.9073 17.6152 36.9072 13.9075C36.9072 10.1973 39.6838 7.19751 43.4658 7.19751ZM55.5059 10.9241C58.281 10.9242 60.4246 13.1222 60.4248 15.7678C60.4248 18.4135 58.2824 20.6134 55.5059 20.6135C52.7306 20.6135 50.5861 18.4141 50.5859 15.7698C50.5859 13.1226 52.7305 10.9241 55.5059 10.9241ZM77.7354 10.9241C80.6416 10.9241 82.4121 13.0484 82.4121 15.5823V16.5334H75.3701C75.5941 17.7812 76.5439 18.6563 77.793 18.6565C78.7995 18.6565 79.6373 18.1722 79.9355 17.4827H82.3008C81.8164 19.1408 80.2513 20.6135 77.8105 20.6135C74.8292 20.6133 73.0041 18.507 73.0039 15.7698C73.0039 12.9931 75.0895 10.9242 77.7354 10.9241ZM87.5 13.9807L89.4375 11.1116H92.1016L88.8955 15.6565L92.249 20.426H89.3984L87.3857 17.4631L85.2998 20.426L82.6172 20.427L85.9902 15.7317L82.7109 11.1106H85.5625L87.5 13.9807ZM66.5381 13.0315C65.1591 13.0316 63.9287 14.1126 63.9287 15.7708C63.9288 17.429 65.1594 18.51 66.5371 18.51C67.9159 18.5099 69.1464 17.4276 69.1465 15.7708C69.1465 14.1139 67.9157 13.0315 66.5381 13.0315ZM55.5059 13.0842C54.2214 13.0842 52.9902 14.1287 52.9902 15.7668C52.9902 17.4074 54.2211 18.4504 55.5068 18.4504L55.7461 18.4387C56.9406 18.3179 58.0215 17.3036 58.0215 15.7668C58.0215 14.1276 56.7916 13.0844 55.5059 13.0842ZM8.25098 9.57251C8.76529 9.26426 9.43267 9.43133 9.74121 9.94556L11.7822 13.3479C11.9883 13.6917 11.9886 14.1223 11.7822 14.4661L9.74121 17.8674C9.43268 18.3811 8.76506 18.5491 8.25098 18.2415C7.73681 17.9329 7.56986 17.2645 7.87793 16.7502L9.58301 13.9055L7.87793 11.0618C7.56977 10.5476 7.7371 9.88117 8.25098 9.57251ZM19.0176 16.2219C19.6172 16.2219 20.103 16.7084 20.1035 17.3079C20.1035 17.9078 19.6175 18.3948 19.0176 18.3948H14.9346C14.3347 18.3948 13.8486 17.9078 13.8486 17.3079C13.849 16.7084 14.335 16.2219 14.9346 16.2219H19.0176ZM77.792 12.8811C76.6181 12.8812 75.6468 13.6636 75.3877 14.8186H80.1016C79.9708 13.6825 79.0401 12.8811 77.792 12.8811Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_934_12058">
<rect width="92" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  At = `codex-profile-card.png`,
  jt = 499,
  Mt = 306,
  Nt = 2,
  Pt = 32,
  Ft = 32,
  It = 52,
  Lt = 36,
  Rt = 40,
  zt = Pt + It - 10,
  Bt = Pt + It - 28,
  Vt = 8,
  Ht = 9,
  Ut = 32,
  Wt = 92,
  Gt = 28,
  Kt = `OpenAI Sans`,
  qt = 20,
  Jt = 15,
  Yt = 50,
  Xt = 14,
  Zt = 70,
  Qt = jt - Pt,
  $t = Qt - Wt,
  en = Pt + (It - Gt) / 2,
  tn = 96,
  nn = 13.9,
  rn = (Qt - Pt - nn) / 25,
  an = 232,
  on = (jt - 2 * Pt) / 4,
  sn = {
    accentColor: `#5865f2`,
    backgroundColor: `#ffffff`,
    primaryTextColor: `#0d0d0d`,
    secondaryTextColor: `#5d5d5d`,
  },
  cn = { 0: 0.1, 1: 0.28, 2: 0.45, 3: 0.68, 4: 1 },
  ln = t({ base64: n().min(1), contentType: n() });
function un() {
  let e = document.documentElement,
    t = window.getComputedStyle(e),
    n = Dn(e);
  try {
    return {
      accentColor: Tn(
        t,
        n,
        `color`,
        [`--codex-base-accent`, `--color-token-primary`],
        sn.accentColor,
      ),
      backgroundColor: Tn(
        t,
        n,
        `backgroundColor`,
        [`--codex-base-surface`, `--color-token-main-surface-primary`],
        sn.backgroundColor,
      ),
      primaryTextColor: Tn(
        t,
        n,
        `color`,
        [`--codex-base-ink`, `--color-token-text-primary`],
        sn.primaryTextColor,
      ),
      secondaryTextColor: Tn(
        t,
        n,
        `color`,
        [`--color-token-text-secondary`, `--color-token-description-foreground`],
        sn.secondaryTextColor,
      ),
    };
  } finally {
    n.remove();
  }
}
async function dn({
  displayNameLabel: e,
  imageUrl: t,
  initials: n,
  petImageUrl: r,
  stats: i,
  theme: a,
  usernameLabel: o,
  usageCells: s,
}) {
  let c = await mn(
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
  return r == null ? zn(c) : hn(c, r);
}
async function fn(e) {
  let t = await mn(e, !0);
  return { createImageBlob: (e) => hn(t, e) };
}
function pn(e) {
  let t = URL.createObjectURL(e),
    n = document.createElement(`a`);
  ((n.href = t), (n.download = At), n.click(), window.setTimeout(() => URL.revokeObjectURL(t), 0));
}
async function mn(
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
  ((c.width = jt * Nt), (c.height = Mt * Nt));
  let l = c.getContext(`2d`);
  if (l == null) throw Error(`Unable to create profile share card canvas`);
  let [u, d] = await Promise.all([
    t == null ? Promise.resolve(null) : Fn(t),
    Ln(An(i.secondaryTextColor), null),
    gn(),
  ]);
  if (d == null) throw Error(`Unable to load Codex watermark`);
  let f = En(i);
  return (
    l.scale(Nt, Nt),
    vn(l, i),
    yn(l, u, n, i),
    xn(l, e, a, i, s),
    Sn(l, d),
    Cn(l, o, f.levelColors),
    wn(l, r, i, f.statDividerColor),
    c
  );
}
async function hn(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = jt * Nt), (n.height = Mt * Nt));
  let r = n.getContext(`2d`);
  if (r == null) throw Error(`Unable to create profile share card canvas`);
  return (r.drawImage(e, 0, 0), r.scale(Nt, Nt), bn(r, await Fn(t)), zn(n));
}
async function gn() {
  (await Promise.all([_n(Ot, `400`), _n(Dt, `500`)]), await document.fonts.ready);
}
async function _n(e, t) {
  let n = new FontFace(Kt, `url(${e})`, { weight: t });
  (document.fonts.add(n), await n.load());
}
function vn(e, t) {
  ((e.fillStyle = t.backgroundColor), Nn(e, 0, 0, jt, Mt, Ft), e.fill());
}
function yn(e, t, n, r) {
  let i = Pt,
    a = Pt;
  (e.save(),
    Nn(e, i, a, It, It, It / 2),
    e.clip(),
    t == null
      ? ((e.fillStyle = r.accentColor),
        e.fillRect(i, a, It, It),
        (e.fillStyle = r.backgroundColor),
        (e.font = `500 16px 'OpenAI Sans', system-ui, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(n, i + It / 2, a + It / 2))
      : Mn(e, t, i, a, It, It),
    e.restore());
}
function bn(e, t) {
  t != null &&
    (e.save(),
    (e.imageSmoothingEnabled = !1),
    e.drawImage(t, 0, 0, t.naturalWidth / Vt, t.naturalHeight / Ht, zt, Bt, Lt, Rt),
    e.restore());
}
function xn(e, t, n, r, i) {
  let a = Pt + It + (i ? Ut : 12),
    o = $t - a - 12;
  e.fillStyle = r.primaryTextColor;
  for (
    let n = qt;
    n >= Jt &&
    ((e.font = `500 ${n}px 'OpenAI Sans', system-ui, sans-serif`),
    !(n === Jt || e.measureText(t).width <= o));
    --n
  );
  ((e.textAlign = `left`),
    (e.textBaseline = `middle`),
    e.fillText(Pn(e, t, o), a, Yt),
    (e.fillStyle = r.secondaryTextColor),
    (e.font = `400 ${Xt}px 'OpenAI Sans', system-ui, sans-serif`),
    e.fillText(Pn(e, n, o), a, Zt));
}
function Sn(e, t) {
  e.drawImage(t, $t, en, Wt, Gt);
}
function Cn(e, t, n) {
  for (let r = 0; r < 182; r += 1) {
    let i = Math.floor(r / 7),
      a = r % 7,
      o = Pt + i * rn,
      s = tn + a * rn,
      c = t[r];
    c != null && ((e.fillStyle = n[c]), Nn(e, o, s, nn, nn, 4), e.fill());
  }
}
function wn(e, t, n, r) {
  t.forEach((t, i) => {
    i > 0 && ((e.fillStyle = r), Nn(e, Pt + i * on, an + 2, 1, 40, 0.5), e.fill());
    let a = Pt + i * on + on / 2,
      o = on - 8;
    ((e.fillStyle = n.primaryTextColor),
      (e.font = `500 18px 'OpenAI Sans', system-ui, sans-serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(Pn(e, t.value, o), a, an + 13),
      (e.fillStyle = n.secondaryTextColor),
      (e.font = `400 14px 'OpenAI Sans', system-ui, sans-serif`),
      e.fillText(Pn(e, t.label, o), a, an + 37));
  });
}
function Tn(e, t, n, r, i) {
  for (let i of r) {
    let r = e.getPropertyValue(i).trim();
    if (r.length === 0) continue;
    t.style[n] = `var(${i})`;
    let a = On(t, n);
    if (a != null) return a;
    if (!kn(r)) return r;
  }
  return i;
}
function En(e) {
  let t = Dn(document.documentElement),
    n = (e) => ((t.style.color = e), On(t, `color`) ?? e);
  try {
    return {
      levelColors: {
        0: n(jn(e.backgroundColor, e.primaryTextColor, cn[0])),
        1: n(jn(e.backgroundColor, e.accentColor, cn[1])),
        2: n(jn(e.backgroundColor, e.accentColor, cn[2])),
        3: n(jn(e.backgroundColor, e.accentColor, cn[3])),
        4: e.accentColor,
      },
      statDividerColor: n(jn(`transparent`, e.primaryTextColor, 0.06)),
    };
  } finally {
    t.remove();
  }
}
function Dn(e) {
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
function On(e, t) {
  if (e.style[t].length === 0) return null;
  let n = window.getComputedStyle(e)[t].trim();
  return kn(n) ? null : n;
}
function kn(e) {
  return e.length === 0 || e.includes(`var(`);
}
function An(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(kt.replaceAll(`currentColor`, e))}`;
}
function jn(e, t, n) {
  return `color-mix(in srgb, ${t} ${Math.round(n * 100)}%, ${e})`;
}
function Mn(e, t, n, r, i, a) {
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
function Nn(e, t, n, r, i, a) {
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
function Pn(e, t, n) {
  if (e.measureText(t).width <= n) return t;
  let r = t;
  for (; r.length > 1 && e.measureText(`${r}…`).width > n; ) r = r.slice(0, -1);
  return `${r}…`;
}
async function Fn(e) {
  return (await Ln(e, Rn(e) ? `anonymous` : null)) ?? (await In(e));
}
async function In(e) {
  if (!Rn(e)) return null;
  try {
    let t = await b.getInstance().get(e),
      n = ln.parse(t.body);
    return await Ln(`data:${n.contentType.trim() || `image/png`};base64,${n.base64}`, null);
  } catch {
    return null;
  }
}
function Ln(e, t) {
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
function Rn(e) {
  return /^https?:\/\//i.test(e);
}
function zn(e) {
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
var Bn = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z`,
        fill: `currentColor`,
      }),
    }),
  Vn = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M16.6337 2.90073C16.6337 4.04257 15.708 4.96822 14.5662 4.96822C13.5883 4.96822 12.769 4.28937 12.5539 3.37723C11.3544 3.54198 10.4276 4.57344 10.4276 5.81744L10.4275 5.82524C12.2767 5.89387 13.9672 6.41475 15.3066 7.24346C15.7984 6.86574 16.4141 6.64121 17.0822 6.64121C18.6936 6.64121 20 7.94757 20 9.55905C20 10.7212 19.3206 11.7247 18.3373 12.1939C18.2458 15.5849 14.5521 18.3126 10.0089 18.3126C5.46956 18.3126 1.77825 15.5894 1.68081 12.2025C0.687757 11.7369 0 10.7283 0 9.55905C0 7.94757 1.30636 6.64121 2.91785 6.64121C3.58954 6.64121 4.20823 6.86817 4.70139 7.24959C6.02803 6.42618 7.70059 5.90522 9.53121 5.82759L9.531 5.8186C9.531 4.084 10.853 2.65175 12.5422 2.47676C12.7378 1.53829 13.5697 0.833252 14.5662 0.833252C15.708 0.833252 16.6337 1.7589 16.6337 2.90073ZM5.97607 12.9003C6.79403 12.9003 7.49631 12.5185 7.5449 11.468V11.4692C7.59349 10.4186 6.96989 9.54167 6.15192 9.54167C5.33395 9.54167 4.63168 10.2289 4.58309 11.2794C4.5345 12.3299 5.1581 12.9003 5.97607 12.9003ZM14.0371 12.9003C14.8551 12.9003 15.4787 12.3299 15.4301 11.2794C15.3815 10.2289 14.6793 9.54167 13.8613 9.54167C13.0433 9.54167 12.4197 10.4186 12.4683 11.4692V11.468C12.5169 12.5185 13.2192 12.9003 14.0371 12.9003ZM10.0057 13.7172C8.99218 13.7172 8.02033 13.7669 7.12254 13.8583C6.96866 13.8734 6.87148 14.033 6.93164 14.1753C7.43492 15.3774 8.62195 16.222 10.0057 16.222C11.3894 16.222 12.5776 15.3774 13.0797 14.1753C13.1399 14.033 13.0415 13.8734 12.8888 13.8583C11.9899 13.7669 11.0192 13.7172 10.0057 13.7172Z`,
        fill: `currentColor`,
      }),
    }),
  Hn = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M14.6408 2.70825H17.1147L11.7099 8.8856L18.0682 17.2916H13.0897L9.19034 12.1934L4.72859 17.2916H2.25316L8.03414 10.6842L1.93457 2.70825H7.03949L10.5642 7.36819L14.6408 2.70825ZM13.7725 15.8108H15.1433L6.29461 4.11124H4.82357L13.7725 15.8108Z`,
        fill: `currentColor`,
      }),
    }),
  Un = `profile-share-card-social-instructions`,
  Wn = `relative size-[52px] overflow-visible !rounded-full`,
  Gn = `absolute top-[60px] left-1/2 max-w-[68px] -translate-x-1/2 truncate text-center text-xs leading-4 text-token-text-secondary`,
  Kn = `[box-shadow:rgba(0,0,0,0.06)_0px_4px_12px_-8px,rgba(0,0,0,0.10)_0px_9px_64px_-10px,rgba(0,0,0,0.05)_0px_0px_0px_0.5px]`,
  qn = { stiffness: 200, damping: 25, mass: 1 },
  Jn = 1.5,
  Yn = 2,
  Xn = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 506px)))`,
  Zn = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 749px)))`;
function Qn(e) {
  let t = (0, Z.c)(111),
    {
      imageUrl: n,
      isLoading: r,
      open: i,
      petSwitcher: a,
      selectedSocialPlatform: o,
      onCopy: s,
      onDownload: c,
      onDismissShareInstructions: l,
      onOpenChange: u,
      onOpenSocialDraft: d,
      onSelectSocialPlatform: f,
    } = e,
    p = w(),
    m = te(0),
    g = te(0),
    _ = Je(m, qn),
    v = Je(g, qn),
    y;
  t[0] !== m || t[1] !== g
    ? ((y = (e) => {
        let t = e.currentTarget.getBoundingClientRect(),
          n = Math.min(Math.max((e.clientX - t.left) / t.width, 0), 1),
          r = Math.min(Math.max((e.clientY - t.top) / t.height, 0), 1);
        (m.set(-(r * 2 - 1) * Jn), g.set((n * 2 - 1) * Yn));
      }),
      (t[0] = m),
      (t[1] = g),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] !== m || t[4] !== g
    ? ((x = () => {
        (m.set(0), g.set(0));
      }),
      (t[3] = m),
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
  let E = C,
    D = o == null ? Xn : Zn,
    O;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { style: { height: `100dvh`, maxWidth: `none`, width: `100vw`, zIndex: 51 } }),
      (t[8] = O))
    : (O = t[8]);
  let k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(se, {
        className: `sr-only`,
        children: (0, Q.jsx)(T, {
          id: `profile.shareCard.preview.title`,
          defaultMessage: `Share profile card`,
          description: `Accessible title for the profile share card preview dialog`,
        }),
      })),
      (t[9] = k))
    : (k = t[9]);
  let A;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(fe, {
        className: `sr-only`,
        children: (0, Q.jsx)(T, {
          id: `profile.shareCard.preview.description`,
          defaultMessage: `Preview your profile share card before sharing or saving it`,
          description: `Accessible description for the profile share card preview dialog`,
        }),
      })),
      (t[10] = A))
    : (A = t[10]);
  let j;
  t[11] === p
    ? (j = t[12])
    : ((j = p.formatMessage({
        id: `profile.shareCard.preview.close`,
        defaultMessage: `Close share preview`,
        description: `Accessible label for closing the profile share card preview`,
      })),
      (t[11] = p),
      (t[12] = j));
  let M;
  t[13] === u
    ? (M = t[14])
    : ((M = () => {
        u(!1);
      }),
      (t[13] = u),
      (t[14] = M));
  let N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Q.jsx)(re, { "aria-hidden": !0, className: `icon-sm` })), (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] !== j || t[17] !== M
    ? ((P = (0, Q.jsx)(I, {
        "aria-label": j,
        className: `absolute top-5 right-5 z-10 size-8 !rounded-md`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: M,
        children: N,
      })),
      (t[16] = j),
      (t[17] = M),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(`h2`, {
        className: `shrink-0 text-center text-[24px] leading-8 font-normal text-token-text-primary`,
        children: (0, Q.jsx)(T, {
          id: `profile.shareCard.preview.heading`,
          defaultMessage: `Share your activity`,
          description: `Visible heading for the profile share card preview dialog`,
        }),
      })),
      (t[19] = F))
    : (F = t[19]);
  let L = o == null ? `mt-[50px]` : `mt-8`,
    R;
  t[20] === L ? (R = t[21]) : ((R = h(`flex flex-col items-center`, L)), (t[20] = L), (t[21] = R));
  let ee;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = h(
        `aspect-[499/306] overflow-hidden rounded-[32px] bg-token-dropdown-background/90 will-change-transform [transform-style:preserve-3d]`,
        Kn,
      )),
      (t[22] = ee))
    : (ee = t[22]);
  let B;
  t[23] !== D || t[24] !== _ || t[25] !== v
    ? ((B = { rotateX: _, rotateY: v, width: D }),
      (t[23] = D),
      (t[24] = _),
      (t[25] = v),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] !== n || t[28] !== p
    ? ((V =
        n == null
          ? (0, Q.jsx)(`div`, {
              role: `status`,
              "aria-label": p.formatMessage({
                id: `profile.shareCard.preview.loadingLabel`,
                defaultMessage: `Creating profile share card`,
                description: `Accessible label while the profile share card preview is being created`,
              }),
              className: `flex size-full items-center justify-center text-sm text-token-text-secondary`,
              children: (0, Q.jsx)(T, {
                id: `profile.shareCard.preview.loading`,
                defaultMessage: `Creating image…`,
                description: `Loading text shown while creating the profile share card preview`,
              }),
            })
          : (0, Q.jsx)(`img`, {
              src: n,
              alt: p.formatMessage({
                id: `profile.shareCard.preview.imageAlt`,
                defaultMessage: `Profile share card preview`,
                description: `Alt text for the generated profile share card preview image`,
              }),
              className: `block size-full object-contain`,
            })),
      (t[27] = n),
      (t[28] = p),
      (t[29] = V))
    : (V = t[29]);
  let H;
  t[30] !== B || t[31] !== V
    ? ((H = (0, Q.jsx)(z.div, { className: ee, style: B, children: V })),
      (t[30] = B),
      (t[31] = V),
      (t[32] = H))
    : (H = t[32]);
  let U;
  t[33] !== S || t[34] !== b || t[35] !== H
    ? ((U = (0, Q.jsx)(`div`, {
        "data-profile-share-card-preview-hover-target": !0,
        className: `w-fit [perspective:1200px] [transform-style:preserve-3d]`,
        onPointerEnter: b,
        onPointerLeave: S,
        onPointerMove: b,
        children: H,
      })),
      (t[33] = S),
      (t[34] = b),
      (t[35] = H),
      (t[36] = U))
    : (U = t[36]);
  let W;
  t[37] === a
    ? (W = t[38])
    : ((W =
        a == null
          ? null
          : (0, Q.jsx)(er, {
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
      (t[38] = W));
  let G;
  t[39] !== U || t[40] !== W
    ? ((G = (0, Q.jsxs)(`div`, { className: `relative w-fit`, children: [U, W] })),
      (t[39] = U),
      (t[40] = W),
      (t[41] = G))
    : (G = t[41]);
  let ae =
      a == null
        ? o == null
          ? `mt-[50px]`
          : `mt-8 mb-7`
        : o == null
          ? `mt-[60px]`
          : `mt-[60px] mb-7`,
    K;
  t[42] === ae
    ? (K = t[43])
    : ((K = h(`flex items-start justify-center gap-2 sm:gap-5`, ae)), (t[42] = ae), (t[43] = K));
  let q;
  t[44] === p
    ? (q = t[45])
    : ((q = p.formatMessage({
        id: `profile.shareCard.preview.shareX`,
        defaultMessage: `Share to X`,
        description: `Accessible label for the X share button in the profile share card preview`,
      })),
      (t[44] = p),
      (t[45] = q));
  let oe = o === `x`,
    ce = r || n == null,
    ue;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(T, {
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      })),
      (t[46] = ue))
    : (ue = t[46]);
  let de;
  t[47] === f
    ? (de = t[48])
    : ((de = () => {
        f(`x`);
      }),
      (t[47] = f),
      (t[48] = de));
  let pe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(Hn, { "aria-hidden": !0, className: `icon-sm` })), (t[49] = pe))
    : (pe = t[49]);
  let J;
  t[50] !== q || t[51] !== oe || t[52] !== ce || t[53] !== de
    ? ((J = (0, Q.jsx)($n, {
        ariaLabel: q,
        active: oe,
        disabled: ce,
        label: ue,
        onClick: de,
        children: pe,
      })),
      (t[50] = q),
      (t[51] = oe),
      (t[52] = ce),
      (t[53] = de),
      (t[54] = J))
    : (J = t[54]);
  let Y;
  t[55] === p
    ? (Y = t[56])
    : ((Y = p.formatMessage({
        id: `profile.shareCard.preview.shareLinkedIn`,
        defaultMessage: `Share to LinkedIn`,
        description: `Accessible label for the LinkedIn share button in the profile share card preview`,
      })),
      (t[55] = p),
      (t[56] = Y));
  let me = o === `linkedin`,
    he = r || n == null,
    ge;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Q.jsx)(T, {
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      })),
      (t[57] = ge))
    : (ge = t[57]);
  let _e;
  t[58] === f
    ? (_e = t[59])
    : ((_e = () => {
        f(`linkedin`);
      }),
      (t[58] = f),
      (t[59] = _e));
  let ve;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Q.jsx)(Bn, { "aria-hidden": !0, className: `icon-sm` })), (t[60] = ve))
    : (ve = t[60]);
  let ye;
  t[61] !== Y || t[62] !== me || t[63] !== he || t[64] !== _e
    ? ((ye = (0, Q.jsx)($n, {
        ariaLabel: Y,
        active: me,
        disabled: he,
        label: ge,
        onClick: _e,
        children: ve,
      })),
      (t[61] = Y),
      (t[62] = me),
      (t[63] = he),
      (t[64] = _e),
      (t[65] = ye))
    : (ye = t[65]);
  let be;
  t[66] === p
    ? (be = t[67])
    : ((be = p.formatMessage({
        id: `profile.shareCard.preview.shareReddit`,
        defaultMessage: `Share to Reddit`,
        description: `Accessible label for the Reddit share button in the profile share card preview`,
      })),
      (t[66] = p),
      (t[67] = be));
  let xe = o === `reddit`,
    Se = r || n == null,
    Ce;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Q.jsx)(T, {
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      })),
      (t[68] = Ce))
    : (Ce = t[68]);
  let we;
  t[69] === f
    ? (we = t[70])
    : ((we = () => {
        f(`reddit`);
      }),
      (t[69] = f),
      (t[70] = we));
  let Te;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Q.jsx)(Vn, { "aria-hidden": !0, className: `icon-sm` })), (t[71] = Te))
    : (Te = t[71]);
  let Ee;
  t[72] !== be || t[73] !== xe || t[74] !== Se || t[75] !== we
    ? ((Ee = (0, Q.jsx)($n, {
        ariaLabel: be,
        active: xe,
        disabled: Se,
        label: Ce,
        onClick: we,
        children: Te,
      })),
      (t[72] = be),
      (t[73] = xe),
      (t[74] = Se),
      (t[75] = we),
      (t[76] = Ee))
    : (Ee = t[76]);
  let De;
  t[77] === p
    ? (De = t[78])
    : ((De = p.formatMessage({
        id: `profile.shareCard.preview.save`,
        defaultMessage: `Save profile card`,
        description: `Accessible label for saving the profile share card from the preview dialog`,
      })),
      (t[77] = p),
      (t[78] = De));
  let Oe = r || n == null,
    ke;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, Q.jsx)(ie, { "aria-hidden": !0, className: `icon-sm` })), (t[79] = ke))
    : (ke = t[79]);
  let Ae;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, Q.jsx)(`span`, {
        className: Gn,
        children: (0, Q.jsx)(T, {
          id: `profile.shareCard.preview.saveLabel`,
          defaultMessage: `Save`,
          description: `Visible label for saving the profile share card`,
        }),
      })),
      (t[80] = Ae))
    : (Ae = t[80]);
  let je;
  t[81] !== c || t[82] !== De || t[83] !== Oe
    ? ((je = (0, Q.jsxs)(I, {
        "aria-label": De,
        className: Wn,
        color: `primary`,
        disabled: Oe,
        size: `icon`,
        uniform: !0,
        onClick: c,
        children: [ke, Ae],
      })),
      (t[81] = c),
      (t[82] = De),
      (t[83] = Oe),
      (t[84] = je))
    : (je = t[84]);
  let Me;
  t[85] !== K || t[86] !== J || t[87] !== ye || t[88] !== Ee || t[89] !== je
    ? ((Me = (0, Q.jsxs)(`div`, { className: K, children: [J, ye, Ee, je] })),
      (t[85] = K),
      (t[86] = J),
      (t[87] = ye),
      (t[88] = Ee),
      (t[89] = je),
      (t[90] = Me))
    : (Me = t[90]);
  let Ne;
  t[91] !== s || t[92] !== l || t[93] !== d || t[94] !== o
    ? ((Ne =
        o == null
          ? null
          : (0, Q.jsx)(z.div, {
              id: Un,
              className: `mt-4 w-[min(499px,calc(100vw-56px))] overflow-hidden rounded-lg bg-token-dropdown-background/95 p-3 text-left text-token-text-primary shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
              initial: { height: 0, opacity: 0, y: -6 },
              animate: { height: `auto`, opacity: 1, y: 0 },
              exit: { height: 0, opacity: 0, y: -6 },
              transition: { duration: 0.16, ease: `easeOut` },
              children: (0, Q.jsx)(tr, {
                platform: o,
                onCopy: s,
                onDismiss: l,
                onOpenSocialDraft: d,
              }),
            })),
      (t[91] = s),
      (t[92] = l),
      (t[93] = d),
      (t[94] = o),
      (t[95] = Ne))
    : (Ne = t[95]);
  let Pe;
  t[96] === Ne
    ? (Pe = t[97])
    : ((Pe = (0, Q.jsx)(ne, { children: Ne })), (t[96] = Ne), (t[97] = Pe));
  let Fe;
  t[98] !== R || t[99] !== G || t[100] !== Me || t[101] !== Pe
    ? ((Fe = (0, Q.jsxs)(`div`, {
        className: `flex min-h-fit flex-col items-center`,
        children: [F, (0, Q.jsxs)(`div`, { className: R, children: [G, Me, Pe] })],
      })),
      (t[98] = R),
      (t[99] = G),
      (t[100] = Me),
      (t[101] = Pe),
      (t[102] = Fe))
    : (Fe = t[102]);
  let Ie;
  t[103] !== E || t[104] !== Fe
    ? ((Ie = (0, Q.jsx)(`div`, {
        className: `flex h-full min-h-0 items-center justify-center overflow-y-auto px-6 py-8`,
        onPointerMove: E,
        children: Fe,
      })),
      (t[103] = E),
      (t[104] = Fe),
      (t[105] = Ie))
    : (Ie = t[105]);
  let Le;
  return (
    t[106] !== u || t[107] !== i || t[108] !== P || t[109] !== Ie
      ? ((Le = (0, Q.jsxs)(le, {
          open: i,
          contentClassName: `!left-0 !top-0 !z-[51] !translate-x-0 !translate-y-0 overflow-hidden bg-transparent text-token-text-primary`,
          contentProps: O,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_88%,transparent)] backdrop-blur-[18px]`,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: u,
          children: [k, A, P, Ie],
        })),
        (t[106] = u),
        (t[107] = i),
        (t[108] = P),
        (t[109] = Ie),
        (t[110] = Le))
      : (Le = t[110]),
    Le
  );
}
function $n(e) {
  let t = (0, Z.c)(10),
    { active: n, ariaLabel: r, children: i, disabled: a, label: o, onClick: s } = e,
    c = n ? Un : void 0,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = (0, Q.jsx)(`span`, { className: Gn, children: o })), (t[0] = o), (t[1] = l));
  let u;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== l
      ? ((u = (0, Q.jsxs)(I, {
          "aria-controls": c,
          "aria-expanded": n,
          "aria-label": r,
          "aria-pressed": n,
          className: Wn,
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
function er(e) {
  let t = (0, Z.c)(40),
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
    u = w(),
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
    : ((m = h(
        `absolute top-full left-1/2 mt-3 grid -translate-x-1/2 items-center gap-2 rounded-full bg-token-dropdown-background/95 px-2 py-1 shadow-[0_12px_36px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
        p,
      )),
      (t[2] = p),
      (t[3] = m));
  let g;
  t[4] !== d || t[5] !== n || t[6] !== u || t[7] !== c
    ? ((g = d
        ? (0, Q.jsx)(I, {
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
            children: (0, Q.jsx)(pe, { "aria-hidden": !0, className: `icon-xs rotate-180` }),
          })
        : null),
      (t[4] = d),
      (t[5] = n),
      (t[6] = u),
      (t[7] = c),
      (t[8] = g))
    : (g = t[8]);
  let _ = r ? `text-token-text-primary` : `text-token-text-tertiary`,
    v;
  t[9] === _
    ? (v = t[10])
    : ((v = h(`truncate text-xs leading-4 font-medium`, _)), (t[9] = _), (t[10] = v));
  let y;
  t[11] !== a || t[12] !== v
    ? ((y = (0, Q.jsx)(`div`, { className: v, children: a })),
      (t[11] = a),
      (t[12] = v),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== r || t[15] !== i || t[16] !== o
    ? ((b = (0, Q.jsx)(`div`, {
        className: `text-[11px] leading-3 text-token-text-tertiary`,
        children: r
          ? (0, Q.jsx)(T, {
              id: `profile.shareCard.preview.petPosition`,
              defaultMessage: `{petPosition} / {petCount}`,
              description: `Current custom pet position in the profile share card preview pet switcher`,
              values: { petCount: i, petPosition: o },
            })
          : (0, Q.jsx)(T, {
              id: `profile.shareCard.preview.petHidden`,
              defaultMessage: `Hidden`,
              description: `Label shown when the custom pet is hidden from the profile share card preview`,
            }),
      })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = o),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== y || t[19] !== b
    ? ((x = (0, Q.jsxs)(`div`, { className: `min-w-0 text-center`, children: [y, b] })),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== d || t[22] !== n || t[23] !== u || t[24] !== s
    ? ((S = d
        ? (0, Q.jsx)(I, {
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
            children: (0, Q.jsx)(pe, { "aria-hidden": !0, className: `icon-xs` }),
          })
        : null),
      (t[21] = d),
      (t[22] = n),
      (t[23] = u),
      (t[24] = s),
      (t[25] = S))
    : (S = t[25]);
  let C = r ? `ghostActive` : `secondary`,
    E;
  t[26] === r
    ? (E = t[27])
    : ((E = r
        ? (0, Q.jsx)(T, {
            id: `profile.shareCard.preview.hidePetLabel`,
            defaultMessage: `Hide pet`,
            description: `Short button label for hiding the custom pet from the profile share card preview`,
          })
        : (0, Q.jsx)(T, {
            id: `profile.shareCard.preview.showPetLabel`,
            defaultMessage: `Show pet`,
            description: `Short button label for showing the custom pet on the profile share card preview`,
          })),
      (t[26] = r),
      (t[27] = E));
  let D;
  t[28] !== n || t[29] !== l || t[30] !== C || t[31] !== E
    ? ((D = (0, Q.jsx)(I, {
        className: `h-7 w-[4.25rem] justify-center px-0 text-[11px] leading-3`,
        color: C,
        disabled: n,
        size: `default`,
        onClick: l,
        children: E,
      })),
      (t[28] = n),
      (t[29] = l),
      (t[30] = C),
      (t[31] = E),
      (t[32] = D))
    : (D = t[32]);
  let O;
  return (
    t[33] !== f || t[34] !== S || t[35] !== D || t[36] !== m || t[37] !== g || t[38] !== x
      ? ((O = (0, Q.jsxs)(`div`, {
          "aria-label": f,
          className: m,
          role: `group`,
          children: [g, x, S, D],
        })),
        (t[33] = f),
        (t[34] = S),
        (t[35] = D),
        (t[36] = m),
        (t[37] = g),
        (t[38] = x),
        (t[39] = O))
      : (O = t[39]),
    O
  );
}
function tr(e) {
  let t = (0, Z.c)(36),
    { platform: n, onCopy: r, onDismiss: i, onOpenSocialDraft: a } = e,
    o = w(),
    s;
  t[0] !== o || t[1] !== n ? ((s = rr(o, n)), (t[0] = o), (t[1] = n), (t[2] = s)) : (s = t[2]);
  let c = s,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (0, Q.jsx)(`h3`, {
        className: `text-sm leading-5 font-medium`,
        children: (0, Q.jsx)(T, {
          id: `profile.shareCard.preview.socialInstructionsTitle`,
          defaultMessage: `Share to {platformName}`,
          description: `Title for the profile share card social sharing instructions`,
          values: { platformName: c },
        }),
      })),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] === o
    ? (u = t[6])
    : ((u = o.formatMessage({
        id: `profile.shareCard.preview.dismissShareInstructions`,
        defaultMessage: `Dismiss share instructions`,
        description: `Accessible label for dismissing the profile share card social sharing instructions`,
      })),
      (t[5] = o),
      (t[6] = u));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(re, { "aria-hidden": !0, className: `icon-xs` })), (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== i || t[9] !== u
    ? ((f = (0, Q.jsx)(I, {
        "aria-label": u,
        className: `size-6 rounded-full`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: i,
        children: d,
      })),
      (t[8] = i),
      (t[9] = u),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== l || t[12] !== f
    ? ((p = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [l, f],
      })),
      (t[11] = l),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(nr, { step: 1 })), (t[14] = m))
    : (m = t[14]);
  let h, g;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(Y, { "aria-hidden": !0, className: `icon-xs` })),
      (g = (0, Q.jsx)(T, {
        id: `profile.shareCard.preview.copyImage`,
        defaultMessage: `Copy image`,
        description: `Button label for copying the profile share card image`,
      })),
      (t[15] = h),
      (t[16] = g))
    : ((h = t[15]), (g = t[16]));
  let _;
  t[17] === r
    ? (_ = t[18])
    : ((_ = (0, Q.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          m,
          (0, Q.jsxs)(I, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: r,
            children: [h, g],
          }),
        ],
      })),
      (t[17] = r),
      (t[18] = _));
  let v;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(nr, { step: 2 })), (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] !== a || t[21] !== n
    ? ((y = () => {
        a(n);
      }),
      (t[20] = a),
      (t[21] = n),
      (t[22] = y))
    : (y = t[22]);
  let b;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(L, { "aria-hidden": !0, className: `icon-xs` })), (t[23] = b))
    : (b = t[23]);
  let x;
  t[24] === c
    ? (x = t[25])
    : ((x = (0, Q.jsx)(T, {
        id: `profile.shareCard.preview.openSocialComposer`,
        defaultMessage: `Open {platformName} composer`,
        description: `Button label for opening a social platform composer for the profile share card`,
        values: { platformName: c },
      })),
      (t[24] = c),
      (t[25] = x));
  let S;
  t[26] !== y || t[27] !== x
    ? ((S = (0, Q.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          v,
          (0, Q.jsxs)(I, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: y,
            children: [b, x],
          }),
        ],
      })),
      (t[26] = y),
      (t[27] = x),
      (t[28] = S))
    : (S = t[28]);
  let C;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsxs)(`li`, {
        className: `flex items-center gap-2 text-token-text-secondary`,
        children: [
          (0, Q.jsx)(nr, { step: 3 }),
          (0, Q.jsx)(T, {
            id: `profile.shareCard.preview.pasteImage`,
            defaultMessage: `Paste image into the post`,
            description: `Instruction for pasting the copied profile share card image into the social post`,
          }),
        ],
      })),
      (t[29] = C))
    : (C = t[29]);
  let E;
  t[30] !== _ || t[31] !== S
    ? ((E = (0, Q.jsxs)(`ol`, {
        className: `mt-2 flex flex-col gap-2 text-sm leading-5`,
        children: [_, S, C],
      })),
      (t[30] = _),
      (t[31] = S),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== E || t[34] !== p
      ? ((D = (0, Q.jsxs)(Q.Fragment, { children: [p, E] })), (t[33] = E), (t[34] = p), (t[35] = D))
      : (D = t[35]),
    D
  );
}
function nr(e) {
  let t = (0, Z.c)(2),
    { step: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          "aria-hidden": !0,
          className: `flex size-5 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-[11px] font-medium text-token-text-primary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function rr(e, t) {
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
function ir({
  dailyUsage: e,
  displayName: t,
  imageUrl: n,
  petOptions: r,
  selectedPetId: i,
  todayIso: a,
  usageSummary: o,
  username: c,
}) {
  let l = g(y),
    u = w(),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(!1),
    [_, b] = (0, X.useState)(null),
    [x, S] = (0, X.useState)(null),
    [C, E] = (0, X.useState)(null),
    [D, O] = (0, X.useState)(!1),
    [A, j] = (0, X.useState)(null),
    M = (0, X.useRef)(0),
    N = u.formatMessage({
      id: `profile.shareCard.shareLabel`,
      defaultMessage: `Share profile card`,
      description: `Accessible label for sharing the profile share card image`,
    }),
    F = u.formatMessage({
      id: `profile.shareCard.createError`,
      defaultMessage: `Could not create profile card`,
      description: `Toast shown when the profile share card image could not be created`,
    }),
    L = u.formatMessage({
      id: `profile.shareCard.copySuccess`,
      defaultMessage: `Copied image`,
      description: `Toast shown after copying the profile share card image`,
    }),
    R = u.formatMessage({
      id: `profile.shareCard.copyError`,
      defaultMessage: `Failed to copy image`,
      description: `Toast shown when copying the profile share card image fails`,
    }),
    z = u.formatMessage({
      id: `profile.shareCard.saveSuccess`,
      defaultMessage: `Image saved`,
      description: `Toast shown after saving the profile share card image`,
    }),
    ee = u.formatMessage({
      id: `profile.shareCard.draftText`,
      defaultMessage: `Check out my Codex activity`,
      description: `Draft text used when sharing the profile share card to social platforms`,
    }),
    B = (e, t) => {
      if (t == null) {
        k(l, d, { action: e });
        return;
      }
      k(l, d, { action: e, socialPlatform: sr(t) });
    },
    V = () => {
      let r = u.formatMessage(
        {
          id: `profile.usernameValue`,
          defaultMessage: `@{username}`,
          description: `Profile username shown with an at-sign prefix`,
        },
        { username: c },
      );
      return {
        displayNameLabel: t,
        imageUrl: n,
        initials: xe(t),
        stats: [
          {
            label: u.formatMessage({
              id: `profile.shareCard.stats.lifetimeTokens`,
              defaultMessage: `lifetime tokens`,
              description: `Label for lifetime token usage in the profile share card image`,
            }),
            value: ye(u, o.totalTextTokens),
          },
          {
            label: u.formatMessage({
              id: `profile.shareCard.stats.peakDay`,
              defaultMessage: `peak day`,
              description: `Label for peak token usage day in the profile share card image`,
            }),
            value: ye(u, o.peakTokens),
          },
          {
            label: u.formatMessage({
              id: `profile.shareCard.stats.currentStreak`,
              defaultMessage: `current streak`,
              description: `Label for current usage streak in the profile share card image`,
            }),
            value: Te(u, o.currentStreakDays),
          },
          {
            label: u.formatMessage({
              id: `profile.shareCard.stats.longestStreak`,
              defaultMessage: `longest streak`,
              description: `Label for longest usage streak in the profile share card image`,
            }),
            value: Te(u, o.longestStreakDays),
          },
        ],
        theme: un(),
        usernameLabel: r,
        usageCells: Ee({ dailyUsage: e, todayIso: a }),
      };
    },
    te = async (e, t) => {
      let n = await ar(e);
      M.current === t && b({ blob: e, imageUrl: n });
    },
    H = async (e, { clearPreview: t, showLoadingState: n, requestId: r }) => {
      (n && p(!0), t && b(null));
      try {
        await te(await dn({ ...V(), petImageUrl: e?.imageUrl ?? null }), r);
      } catch {
        if (M.current !== r) return;
        (h(!1), j(null), l.get(P).danger(F));
      } finally {
        n && M.current === r && p(!1);
      }
    },
    ne = async (e, t, { clearPreview: n, showLoadingState: r, requestId: i }) => {
      (r && p(!0), n && b(null));
      try {
        let n = t ?? (await fn(V()));
        if (M.current !== i) return;
        (t ?? j(n), await te(await n.createImageBlob(e.imageUrl), i));
      } catch {
        if (M.current !== i) return;
        (h(!1), j(null), l.get(P).danger(F));
      } finally {
        r && M.current === i && p(!1);
      }
    },
    U = () => {
      M.current += 1;
      let e = M.current,
        t = i == null ? -1 : r.findIndex((e) => e.id === i);
      (h(!0), S(null), j(null), E(t === -1 ? null : t), O(t !== -1));
      let n = r[t];
      if (n == null) {
        H(null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
        return;
      }
      ne(n, null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
    },
    W = (e) => {
      let t = r[e];
      if (t == null) return;
      M.current += 1;
      let n = M.current;
      (E(e), O(!0), ne(t, A, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    re = (e) => {
      let t = C == null ? null : r[C];
      if (e && t == null) return;
      M.current += 1;
      let n = M.current;
      (O(e), H(e ? t : null, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    G = () => {
      _ != null &&
        (B(s.CODEX_PROFILE_SHARE_ACTION_SAVE_BUTTON_CLICKED), pn(_.blob), l.get(P).success(z));
    },
    ie = () => {
      _ != null &&
        q({ "image/png": _.blob }).then(
          () => {
            l.get(P).success(L);
          },
          () => {
            l.get(P).danger(R);
          },
        );
    },
    ae = (e) => {
      (e || ((M.current += 1), S(null), E(null), O(!1), p(!1), j(null)), h(e));
    };
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(I, {
        "aria-label": N,
        className: `h-7`,
        color: `ghostActive`,
        loading: f,
        size: `toolbar`,
        onClick: () => {
          (B(s.CODEX_PROFILE_SHARE_ACTION_SHARE_BUTTON_CLICKED), U());
        },
        children: [
          (0, Q.jsx)(Ue, { "aria-hidden": !0, className: `icon-xs` }),
          (0, Q.jsx)(T, {
            id: `profile.shareCard.share`,
            defaultMessage: `Share`,
            description: `Button label for sharing the profile share card image`,
          }),
        ],
      }),
      (0, Q.jsx)(Qn, {
        imageUrl: _?.imageUrl ?? null,
        isLoading: f,
        open: m,
        petSwitcher:
          C == null || r.length === 0
            ? null
            : {
                disabled: f,
                isPetVisible: D,
                petCount: r.length,
                petName: r[C]?.displayName ?? ``,
                petPosition: C + 1,
                onNext: () => {
                  W((C + 1) % r.length);
                },
                onPrevious: () => {
                  W((C - 1 + r.length) % r.length);
                },
                onTogglePetVisibility: () => {
                  re(!D);
                },
              },
        selectedSocialPlatform: x,
        onCopy: ie,
        onDownload: G,
        onDismissShareInstructions: () => {
          S(null);
        },
        onOpenChange: ae,
        onOpenSocialDraft: (e) => {
          (B(s.CODEX_PROFILE_SHARE_ACTION_SOCIAL_COMPOSER_BUTTON_CLICKED, e),
            v.dispatchMessage(`open-in-browser`, { url: or(e, ee) }));
        },
        onSelectSocialPlatform: (e) => {
          (B(s.CODEX_PROFILE_SHARE_ACTION_SOCIAL_SHARE_BUTTON_CLICKED, e), S(e));
        },
      }),
    ],
  });
}
function ar(e) {
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
function or(e, t) {
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
function sr(e) {
  switch (e) {
    case `linkedin`:
      return l.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN;
    case `reddit`:
      return l.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT;
    case `x`:
      return l.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X;
  }
}
var cr = `_profileLoadingBlock_1lb04_1`,
  lr = `_profilePhotoEditBadge_1lb04_22`,
  ur = `_profilePhotoInput_1lb04_28`,
  dr = {
    profileLoadingBlock: cr,
    "profile-loading-page-sweep": `_profile-loading-page-sweep_1lb04_1`,
    profilePhotoEditBadge: lr,
    profilePhotoInput: ur,
  },
  fr = 12,
  pr = {
    0: `bg-[var(--profile-usage-level-0)]`,
    1: `bg-[var(--profile-usage-level-1)]`,
    2: `bg-[var(--profile-usage-level-2)]`,
    3: `bg-[var(--profile-usage-level-3)]`,
    4: `bg-[var(--profile-usage-level-4)]`,
  },
  mr = `bg-[color-mix(in_srgb,var(--color-token-primary)_78%,transparent)]`,
  hr = `bg-[var(--color-token-primary)] ring-1 ring-[color-mix(in_srgb,var(--color-token-primary)_55%,transparent)]`,
  gr = `bg-[color-mix(in_srgb,var(--color-token-primary)_14%,var(--profile-usage-level-0))]`,
  _r = t({ type: n(), msg: n() }),
  vr = `·`,
  yr = [
    `totalTextTokens`,
    `peakTokens`,
    `longestTaskDurationMs`,
    `currentStreakDays`,
    `longestStreakDays`,
  ];
function br({ today: e = new Date() }) {
  let t = g(y),
    n = (0, X.useRef)(!1),
    r = w(),
    s = U(),
    l = A(`1991660486`),
    d = A(`3162484136`),
    { accountId: f, authMethod: p, planAtLogin: m, userId: v } = j(),
    { data: b } = M(),
    { data: x } = S(`account-info`, {
      queryConfig: { enabled: p === `chatgpt` && !0, staleTime: C.ONE_MINUTE },
    }),
    { data: E } = _(Ve),
    D = ge(e),
    O = ve(D),
    N = Jr(D),
    P = f ?? x?.accountId ?? null,
    L = v ?? x?.userId ?? null,
    R = ke({ accountId: P, enabled: p === `chatgpt`, userId: L }),
    ee = R.data?.activityInsights,
    B = we({ accountId: P, userId: L }),
    V = De({ accountId: P, userId: L }),
    te = B.isPending || V.isPending,
    H = _e({ accountId: P, userId: L }),
    ne = Be(E?.avatars),
    { selectedAvatar: W } = ze(ne),
    [re, G] = (0, X.useState)(null),
    [ie, ae] = (0, X.useState)(null),
    [q, oe] = (0, X.useState)(`daily`),
    [se, ce] = (0, X.useState)(null),
    [le, ue] = (0, X.useState)(null),
    [de, fe] = (0, X.useState)(null),
    [pe, J] = (0, X.useState)(!1),
    Y = R.isLoading,
    be = (R.data == null && R.isError) || R.data?.hasStatsError === !0,
    Se = W.id.startsWith(`custom:`),
    Ce = Y ? null : (ie ?? R.data?.imageUrl ?? b?.profile_picture_url ?? null),
    Ee = Ce != null && Ce !== re,
    Ae = R.data?.username?.trim() || null,
    je = R.data?.displayName ?? null,
    Le = Y ? null : (je ?? Ae ?? b?.name ?? null),
    He = Oe({
      accountStructure: b?.structure,
      plan: b?.plan_type ?? x?.plan ?? m,
      workspaceName: b?.name,
    }),
    Ue = R.data?.summary,
    We = Ue?.longestTaskDurationMs,
    Ge = R.data?.dailyUsage,
    Ke = ne.flatMap((e) =>
      !e.id.startsWith(`custom:`) || e.spritesheetUrl == null
        ? []
        : [{ displayName: e.displayName, id: e.id, imageUrl: e.spritesheetUrl }],
    ),
    qe =
      be || Ge == null
        ? null
        : {
            cells: Fe({ dailyUsage: Ge, todayIso: D, view: q }),
            dailyValues: he({ dailyUsage: Ge, todayIso: D }),
            weeklyTotals: me({ dailyUsage: Ge, todayIso: D }),
            cumulativeTotals: Pe({ dailyUsage: Ge, todayIso: D }),
          },
    Je = r.formatMessage({
      id: `profile.tokenUsage.chartLabel`,
      defaultMessage: `Token usage chart`,
      description: `Accessible label for the token usage dot chart`,
    }),
    Z = (e, t) => {
      ce((n) => (t ? e : n === e ? null : n));
    };
  return (
    (0, X.useEffect)(() => {
      n.current || ((n.current = !0), k(t, o, { profileOwner: `self` }));
    }, [t]),
    (0, Q.jsxs)(Re, {
      ref: ue,
      className: `relative`,
      fullWidth: !0,
      backSlot: (0, Q.jsxs)(`div`, {
        className: `flex w-full items-center justify-between`,
        children: [
          (0, Q.jsx)(`div`, {
            className: `text-base font-normal text-token-text-primary`,
            children: (0, Q.jsx)(T, {
              id: `profile.header`,
              defaultMessage: `Profile`,
              description: `Header title for the profile page`,
            }),
          }),
          (0, Q.jsxs)(`div`, {
            className: `no-drag -mr-2 flex items-center gap-2`,
            children: [
              d && !Y && Ae != null && je != null && Ue != null && Ge != null
                ? (0, Q.jsx)(ir, {
                    dailyUsage: Ge,
                    displayName: je,
                    imageUrl: Ee ? Ce : null,
                    petOptions: Ke,
                    selectedPetId: Se ? W.id : null,
                    todayIso: D,
                    usageSummary: Ue,
                    username: Ae,
                  })
                : null,
              (0, Q.jsx)(F, {
                delayDuration: 0,
                tooltipContent: (0, Q.jsx)(T, {
                  id: `profile.privateTooltip`,
                  defaultMessage: `Your profile is only visible to you`,
                  description: `Tooltip explaining private profile visibility`,
                }),
                children: (0, Q.jsxs)(`span`, {
                  tabIndex: 0,
                  className: `focus-visible:ring-token-focus flex h-7 cursor-default items-center gap-1.5 rounded-lg px-2 text-base text-token-text-secondary outline-none focus-visible:ring-1`,
                  children: [
                    (0, Q.jsx)(Ie, { className: `icon-xs` }),
                    (0, Q.jsx)(T, {
                      id: `profile.private`,
                      defaultMessage: `Private`,
                      description: `Private visibility badge label`,
                    }),
                  ],
                }),
              }),
              (0, Q.jsxs)(I, {
                "aria-label": r.formatMessage({
                  id: `profile.editProfileLabel`,
                  defaultMessage: `Edit profile`,
                  description: `Accessible label for opening the edit profile dialog`,
                }),
                className: `h-7`,
                color: `ghostActive`,
                disabled: Y,
                size: `toolbar`,
                onClick: () => {
                  (k(t, u, { action: i.CODEX_PROFILE_EDIT_ACTION_OPENED }), J(!0));
                },
                children: [
                  (0, Q.jsx)(K, { "aria-hidden": !0, className: `icon-xs` }),
                  (0, Q.jsx)(T, {
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
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-10`,
          children: [
            (0, Q.jsx)(`section`, {
              "aria-busy": Y || void 0,
              className: `flex flex-col items-center`,
              children: Y
                ? (0, Q.jsx)(jr, { avatar: W, showsPet: Se })
                : (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `relative mb-4 size-20`,
                        children: [
                          (0, Q.jsxs)(`label`, {
                            "aria-disabled": H.isPending,
                            className: h(
                              `group relative flex size-20 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                              H.isPending ? `cursor-default opacity-70` : `cursor-interaction`,
                            ),
                            children: [
                              Ee
                                ? (0, Q.jsx)(`img`, {
                                    src: Ce,
                                    alt: ``,
                                    className: `size-20 rounded-full object-cover`,
                                    onError: () => {
                                      G(Ce);
                                    },
                                  })
                                : (0, Q.jsx)(`div`, {
                                    className: `flex size-20 items-center justify-center rounded-full bg-token-text-tertiary text-[28px] font-normal text-token-button-foreground`,
                                    children: xe(Le),
                                  }),
                              (0, Q.jsx)(`span`, {
                                className: h(
                                  `pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white opacity-0 dark:bg-black/60 electron-dark:bg-black/60`,
                                  !H.isPending &&
                                    `group-focus-within:opacity-100 group-hover:opacity-100`,
                                ),
                                children: (0, Q.jsx)(K, {
                                  "aria-hidden": !0,
                                  className: `icon-sm`,
                                }),
                              }),
                              (0, Q.jsx)(`input`, {
                                type: `file`,
                                accept: `image/*`,
                                "aria-label": r.formatMessage({
                                  id: `profile.photoInputLabel`,
                                  defaultMessage: `Change profile picture`,
                                  description: `Accessible label for the profile photo upload input`,
                                }),
                                className: `sr-only`,
                                disabled: H.isPending,
                                onClick: () => {
                                  k(t, c, {
                                    action: a.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_STARTED,
                                  });
                                },
                                onChange: (e) => {
                                  let n = e.currentTarget.files?.[0];
                                  ((e.currentTarget.value = ``),
                                    n != null &&
                                      (k(t, c, {
                                        action:
                                          a.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_IMAGE_SELECTED,
                                      }),
                                      Ar(n).then(fe, () => {
                                        (k(t, c, {
                                          action: a.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED,
                                        }),
                                          fe(null));
                                      })));
                                },
                              }),
                            ],
                          }),
                          Se
                            ? (0, Q.jsx)(`div`, {
                                className: `absolute -right-8 -bottom-2 flex size-14 items-center justify-center`,
                                children: (0, Q.jsx)(ei, { avatar: W }),
                              })
                            : null,
                        ],
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `flex w-full justify-center`,
                        children: (0, Q.jsx)(`h1`, {
                          className: `flex h-8 w-full items-center justify-center text-center text-[24px] leading-8 font-normal tracking-[0.072px] text-token-text-primary`,
                          children: (0, Q.jsx)(`span`, {
                            className: `block max-w-full min-w-0 truncate px-2`,
                            children:
                              Le ??
                              (0, Q.jsx)(T, {
                                id: `profile.nameFallback`,
                                defaultMessage: `Codex user`,
                                description: `Fallback profile display name`,
                              }),
                          }),
                        }),
                      }),
                      Ae != null || He != null
                        ? (0, Q.jsx)(`div`, {
                            className: `mt-1 flex min-h-7 items-center gap-1.5 text-base leading-5 font-normal text-token-text-tertiary`,
                            children:
                              Ae == null
                                ? He == null
                                  ? null
                                  : (0, Q.jsx)(Cr, { accountLabel: He })
                                : (0, Q.jsxs)(Q.Fragment, {
                                    children: [
                                      (0, Q.jsx)(`span`, {
                                        className: `max-w-[240px] min-w-0 truncate`,
                                        children: (0, Q.jsx)(T, {
                                          id: `profile.usernameValue`,
                                          defaultMessage: `@{username}`,
                                          description: `Profile username shown with an at-sign prefix`,
                                          values: { username: Ae },
                                        }),
                                      }),
                                      He == null
                                        ? null
                                        : (0, Q.jsxs)(Q.Fragment, {
                                            children: [
                                              (0, Q.jsx)(`span`, {
                                                "aria-hidden": !0,
                                                className: `text-token-text-tertiary/50`,
                                                children: vr,
                                              }),
                                              (0, Q.jsx)(Cr, { accountLabel: He }),
                                            ],
                                          }),
                                    ],
                                  }),
                          })
                        : null,
                    ],
                  }),
            }),
            (0, Q.jsx)(`section`, {
              className: `flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-token-border-light bg-transparent`,
              children: (0, Q.jsx)(`div`, {
                className: `flex w-full items-center`,
                children: Y
                  ? (0, Q.jsx)(Nr, {})
                  : be
                    ? (0, Q.jsx)(Fr, {})
                    : (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsx)(Gr, {
                            value: ye(r, Ue?.totalTextTokens),
                            label: (0, Q.jsx)(T, {
                              id: `profile.stats.lifetimeTokens`,
                              defaultMessage: `Lifetime tokens`,
                              description: `Label for lifetime token usage on the profile page`,
                            }),
                          }),
                          (0, Q.jsx)(Kr, {}),
                          (0, Q.jsx)(Gr, {
                            value: ye(r, Ue?.peakTokens),
                            label: (0, Q.jsx)(T, {
                              id: `profile.stats.peakTokens`,
                              defaultMessage: `Peak tokens`,
                              description: `Label for peak token usage on the profile page`,
                            }),
                          }),
                          (0, Q.jsx)(Kr, {}),
                          We == null
                            ? null
                            : (0, Q.jsxs)(Q.Fragment, {
                                children: [
                                  (0, Q.jsx)(Gr, {
                                    value: Me(r, We),
                                    label: (0, Q.jsx)(T, {
                                      id: `profile.stats.longestTask`,
                                      defaultMessage: `Longest task`,
                                      description: `Label for longest task duration on the profile page`,
                                    }),
                                  }),
                                  (0, Q.jsx)(Kr, {}),
                                ],
                              }),
                          (0, Q.jsx)(Gr, {
                            value: Te(r, Ue?.currentStreakDays),
                            label: (0, Q.jsx)(T, {
                              id: `profile.stats.currentStreak`,
                              defaultMessage: `Current streak`,
                              description: `Label for current usage streak on the profile page`,
                            }),
                          }),
                          (0, Q.jsx)(Kr, {}),
                          (0, Q.jsx)(Gr, {
                            value: Te(r, Ue?.longestStreakDays),
                            label: (0, Q.jsx)(T, {
                              id: `profile.stats.longestStreak`,
                              defaultMessage: `Longest streak`,
                              description: `Label for longest usage streak on the profile page`,
                            }),
                          }),
                        ],
                      }),
              }),
            }),
            (0, Q.jsxs)(`section`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between text-base leading-5`,
                  children: [
                    (0, Q.jsx)(`h2`, {
                      className: `text-base leading-5 font-medium text-token-text-primary`,
                      children: (0, Q.jsx)(T, {
                        id: `profile.tokenUsage.title`,
                        defaultMessage: `Token activity`,
                        description: `Heading above the token usage chart`,
                      }),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Q.jsx)($r, {
                          active: q === `daily`,
                          disabled: Y,
                          onSelect: () => {
                            oe(`daily`);
                          },
                          children: (0, Q.jsx)(T, {
                            id: `profile.tokenUsage.daily`,
                            defaultMessage: `Daily`,
                            description: `Daily token usage chart tab`,
                          }),
                        }),
                        (0, Q.jsx)($r, {
                          active: q === `weekly`,
                          disabled: Y,
                          onSelect: () => {
                            oe(`weekly`);
                          },
                          children: (0, Q.jsx)(T, {
                            id: `profile.tokenUsage.weekly`,
                            defaultMessage: `Weekly`,
                            description: `Weekly token usage chart tab`,
                          }),
                        }),
                        (0, Q.jsx)($r, {
                          active: q === `cumulative`,
                          disabled: Y,
                          onSelect: () => {
                            oe(`cumulative`);
                          },
                          children: (0, Q.jsx)(T, {
                            id: `profile.tokenUsage.cumulative`,
                            defaultMessage: `Cumulative`,
                            description: `Cumulative token usage chart tab`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Y
                  ? (0, Q.jsx)(Ir, { columnCount: O, monthLabelCount: N.length })
                  : qe == null
                    ? (0, Q.jsx)(zr, {})
                    : (0, Q.jsxs)(`div`, {
                        className: `flex flex-col gap-2 [--profile-usage-level-0:var(--color-token-border-light)] [--profile-usage-level-1:color-mix(in_srgb,var(--color-token-primary)_22%,transparent)] [--profile-usage-level-2:color-mix(in_srgb,var(--color-token-primary)_42%,transparent)] [--profile-usage-level-3:color-mix(in_srgb,var(--color-token-primary)_68%,transparent)] [--profile-usage-level-4:var(--color-token-primary)]`,
                        role: `img`,
                        "aria-label": Je,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `relative`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
                                style: { gridTemplateColumns: `repeat(${O}, minmax(1px, 1fr))` },
                                children: qe.cells.map((e, t) => {
                                  let n = Ne(t, D);
                                  if (q === `daily` && n > D) return null;
                                  let r = Math.floor(t / 7),
                                    i = q !== `daily`,
                                    a = i && se === `${q}:${r}`,
                                    o = pr[e];
                                  i && e > 0 ? (o = a ? hr : mr) : a && (o = gr);
                                  let c = (0, Q.jsx)(
                                    `div`,
                                    {
                                      className: `aspect-square w-full`,
                                      children: (0, Q.jsx)(z.div, {
                                        animate: { opacity: 1, scale: 1 },
                                        className: h(
                                          `size-full rounded-[4px] transition-colors duration-500 ease-out [corner-shape:superellipse(1.5)]`,
                                          o,
                                        ),
                                        initial: s ? !1 : { opacity: 0, scale: 0.7 },
                                        transition: s
                                          ? { duration: 0 }
                                          : {
                                              delay: qr(t),
                                              duration: 0.52,
                                              ease: [0.22, 1, 0.36, 1],
                                            },
                                      }),
                                    },
                                    `${q}-${t}`,
                                  );
                                  if (q !== `daily`) return c;
                                  let l = `daily:${t}`;
                                  return (0, Q.jsx)(
                                    F,
                                    {
                                      delayDuration: 0,
                                      open: se === l,
                                      onOpenChange: (e) => {
                                        Z(l, e);
                                      },
                                      portalContainer: le,
                                      tooltipContent: (0, Q.jsx)(Xr, {
                                        dateIso: n,
                                        tokenCount: qe.dailyValues[t] ?? 0,
                                        todayIso: D,
                                      }),
                                      children: c,
                                    },
                                    `${q}-${t}`,
                                  );
                                }),
                              }),
                              q === `weekly` || q === `cumulative`
                                ? (0, Q.jsx)(`div`, {
                                    className: `pointer-events-none absolute inset-0 flex`,
                                    children: (q === `weekly`
                                      ? qe.weeklyTotals
                                      : qe.cumulativeTotals
                                    ).map((e, t) => {
                                      let n = Ne(t * 7, D),
                                        r = `${q}:${t}`;
                                      return (0, Q.jsx)(
                                        F,
                                        {
                                          delayDuration: 0,
                                          open: se === r,
                                          onOpenChange: (e) => {
                                            Z(r, e);
                                          },
                                          portalContainer: le,
                                          tooltipContent: (0, Q.jsx)(Zr, {
                                            chartView: q,
                                            tokenCount: e,
                                            weekStartIso: n,
                                          }),
                                          children: (0, Q.jsx)(`div`, {
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
                          (0, Q.jsx)(`div`, {
                            className: `flex items-center justify-between text-xs leading-4 text-token-text-tertiary`,
                            children: N.map((e) =>
                              (0, Q.jsx)(
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
            l ? (0, Q.jsx)(Br, { insights: ee, isLoading: Y, isUnavailable: be }) : null,
          ],
        }),
        de == null
          ? null
          : (0, Q.jsx)(gt, {
              source: de,
              onCancel: () => {
                fe(null);
              },
              onSave: (e) => {
                (fe(null),
                  ae(e.previewUrl),
                  H.mutate(e.photo, {
                    onError: () => {
                      (k(t, c, { action: a.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED }),
                        ae(null));
                    },
                    onSuccess: () => {
                      (k(t, c, { action: a.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_SUCCEEDED }),
                        G(null),
                        ae(null));
                    },
                  }));
              },
            }),
        pe
          ? (0, Q.jsx)(xr, {
              displayName: Le,
              failedProfileImageUrl: re,
              isPhotoSaving: H.isPending,
              isTextSaving: te,
              profileImageUrl: Ce,
              username: Ae,
              onCancel: () => {
                J(!1);
              },
              onProfileImageError: G,
              onSaveError: (e) => {
                k(t, u, { action: i.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED, ...e });
              },
              onPhotoChangeImageSelected: () => {
                k(t, u, { action: i.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_IMAGE_SELECTED });
              },
              onPhotoChangeStarted: () => {
                k(t, u, { action: i.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_STARTED });
              },
              onSaveProfile: async (e) => {
                (await B.mutateAsync(e), G(null));
              },
              onSaveSuccess: () => {
                k(t, u, { action: i.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED });
              },
              onSaveUsername: (e) => V.mutateAsync(e),
            })
          : null,
      ],
    })
  );
}
function xr({
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
  profileImageUrl: p,
  username: m,
}) {
  let g = w(),
    _ = (0, X.useId)(),
    v = (0, X.useId)(),
    y = (0, X.useId)(),
    b = (0, X.useId)(),
    [x, S] = (0, X.useState)(e ?? ``),
    [C, E] = (0, X.useState)(m ?? ``),
    [D, O] = (0, X.useState)(null),
    [k, A] = (0, X.useState)(null),
    [j, M] = (0, X.useState)(null),
    [N, P] = (0, X.useState)(null),
    [F, L] = (0, X.useState)(null),
    [R, z] = (0, X.useState)(null),
    [ee, B] = (0, X.useState)(!1),
    V = ee || r || n,
    te = Se(C),
    H = V || x.trim().length === 0 || !te.ok,
    ne = D?.previewUrl ?? p,
    U = ne != null && ne !== t,
    W = m?.trim() ?? ``,
    re = async () => {
      if (H) return;
      (M(null), P(null), L(null), z(null));
      let t = x.trim(),
        n = be(C),
        r = e?.trim() ?? ``;
      (S(t), E(n));
      let a = t.length > 0 && t !== r,
        o = n !== W,
        s = D != null,
        p = {},
        m = 0,
        h = null;
      if ((a && ((p.displayName = t), (m += 1)), o)) {
        let e = Se(n);
        if (!e.ok) {
          P(kr(e.reason, g));
          return;
        }
        h = e.username;
      }
      if ((s && ((p.photo = D.photo), (m += 1)), h == null && m === 0)) {
        i();
        return;
      }
      B(!0);
      let _ = f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
        v = f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED;
      try {
        (h != null &&
          ((_ = f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
          await d(h),
          (_ = f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          m > 0 &&
            ((v = f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
            await l(p),
            (v = f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          u(),
          i());
      } catch (e) {
        if (
          (c({ profileDetailsUpdateApiStatus: v, usernameUpdateApiStatus: _ }),
          _ === f.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED)
        ) {
          P(Tr(e, g));
          return;
        }
        if (e instanceof je) {
          L(Er(e.uploadError, g));
          return;
        }
        if (m > 1) {
          z(Dr(e, g));
          return;
        }
        if (a) {
          M(wr(e, g));
          return;
        }
        L(Er(e, g));
      } finally {
        B(!1);
      }
    };
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(le, {
        open: !0,
        onOpenChange: (e) => {
          !e && !V && i();
        },
        contentProps: {
          onOpenAutoFocus: (e) => {
            (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
          },
          tabIndex: -1,
        },
        showDialogClose: !1,
        size: `default`,
        children: (0, Q.jsxs)(ue, {
          as: `form`,
          className: `gap-0`,
          onSubmit: (e) => {
            (e.preventDefault(), re());
          },
          children: [
            (0, Q.jsx)(oe, {
              children: (0, Q.jsx)(ce, {
                title: (0, Q.jsx)(se, {
                  className: `contents`,
                  children: (0, Q.jsx)(T, {
                    id: `profile.editProfileTitle`,
                    defaultMessage: `Edit profile`,
                    description: `Title for the edit profile dialog`,
                  }),
                }),
                subtitle: (0, Q.jsx)(fe, {
                  className: `sr-only`,
                  children: (0, Q.jsx)(T, {
                    id: `profile.editProfileDescription`,
                    defaultMessage: `Update your profile picture, display name, and username`,
                    description: `Accessible description for the edit profile dialog`,
                  }),
                }),
              }),
            }),
            (0, Q.jsx)(oe, {
              className: `items-center pt-6`,
              children: (0, Q.jsxs)(`label`, {
                "aria-disabled": V,
                className: h(
                  `relative flex size-32 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                  dr.profilePhotoInput,
                  V ? `cursor-default opacity-70` : `cursor-interaction`,
                ),
                children: [
                  U
                    ? (0, Q.jsx)(`img`, {
                        src: ne,
                        alt: ``,
                        className: `size-32 rounded-full object-cover`,
                        onError: () => {
                          s(ne);
                        },
                      })
                    : (0, Q.jsx)(`div`, {
                        className: `flex size-32 items-center justify-center rounded-full bg-token-text-tertiary text-[40px] font-normal text-token-button-foreground`,
                        children: xe(x),
                      }),
                  (0, Q.jsx)(`span`, {
                    className: h(
                      `absolute right-1 bottom-1 flex size-9 items-center justify-center rounded-full text-white`,
                      dr.profilePhotoEditBadge,
                    ),
                    children: (0, Q.jsx)(K, { "aria-hidden": !0, className: `icon-sm` }),
                  }),
                  (0, Q.jsx)(`input`, {
                    type: `file`,
                    accept: `image/*`,
                    "aria-label": g.formatMessage({
                      id: `profile.photoInputLabel`,
                      defaultMessage: `Change profile picture`,
                      description: `Accessible label for the profile photo upload input`,
                    }),
                    className: `sr-only`,
                    disabled: V,
                    onClick: o,
                    onChange: (e) => {
                      let t = e.currentTarget.files?.[0];
                      ((e.currentTarget.value = ``),
                        t != null &&
                          (a(),
                          Ar(t).then(A, () => {
                            A(null);
                          })));
                    },
                  }),
                ],
              }),
            }),
            (0, Q.jsx)(oe, {
              className: `pt-8`,
              children: (0, Q.jsxs)(`div`, {
                className: `divide-y-[0.5px] divide-token-border overflow-hidden rounded-lg border border-token-border`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, Q.jsx)(`label`, {
                            htmlFor: v,
                            className: `text-sm leading-5 text-token-text-primary`,
                            children: (0, Q.jsx)(T, {
                              id: `profile.nameInputLabel`,
                              defaultMessage: `Display name`,
                              description: `Accessible label for the editable profile display name`,
                            }),
                          }),
                          j == null
                            ? null
                            : (0, Q.jsx)(`div`, {
                                id: _,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: j,
                              }),
                        ],
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `flex h-10 min-w-0 items-center rounded-lg border border-token-input-border bg-token-input-background px-3 focus-within:border-token-focus-border`,
                        children: (0, Q.jsx)(`input`, {
                          id: v,
                          "aria-describedby": j == null ? void 0 : _,
                          "aria-invalid": j != null,
                          className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                          disabled: V,
                          maxLength: 64,
                          onChange: (e) => {
                            (S(e.target.value), M(null), z(null));
                          },
                          onFocus: (e) => {
                            e.currentTarget.select();
                          },
                          spellCheck: !1,
                          value: x,
                        }),
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, Q.jsx)(`label`, {
                                htmlFor: b,
                                className: `text-sm leading-5 text-token-text-primary`,
                                children: (0, Q.jsx)(T, {
                                  id: `profile.usernameInputLabel`,
                                  defaultMessage: `Username`,
                                  description: `Accessible label for the editable profile username`,
                                }),
                              }),
                              N == null ? null : (0, Q.jsx)(Sr, {}),
                            ],
                          }),
                          N == null
                            ? null
                            : (0, Q.jsx)(`div`, {
                                id: y,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: N,
                              }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex h-10 min-w-0 items-center gap-0.5 rounded-lg border border-token-input-border bg-token-input-background px-3 text-base leading-6 focus-within:border-token-focus-border`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `text-token-text-tertiary`,
                            children: (0, Q.jsx)(T, {
                              id: `profile.usernamePrefix`,
                              defaultMessage: `@`,
                              description: `Prefix shown before a profile username`,
                            }),
                          }),
                          (0, Q.jsx)(`input`, {
                            id: b,
                            "aria-describedby": N == null ? void 0 : y,
                            "aria-invalid": N != null,
                            className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                            disabled: V,
                            maxLength: 20,
                            onChange: (e) => {
                              let t = Ce(e.target.value),
                                n = Se(t);
                              (E(t), P(n.ok ? null : kr(n.reason, g)), z(null));
                            },
                            onFocus: (e) => {
                              e.currentTarget.select();
                            },
                            spellCheck: !1,
                            value: C,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            F != null || R != null
              ? (0, Q.jsx)(oe, {
                  className: `pt-3`,
                  children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      F == null
                        ? null
                        : (0, Q.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: F,
                          }),
                      R == null
                        ? null
                        : (0, Q.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: R,
                          }),
                    ],
                  }),
                })
              : null,
            (0, Q.jsx)(oe, {
              className: `pt-5`,
              children: (0, Q.jsxs)(de, {
                children: [
                  (0, Q.jsx)(I, {
                    color: `ghost`,
                    disabled: V,
                    onClick: i,
                    children: (0, Q.jsx)(T, {
                      id: `profile.editProfileCancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels profile editing`,
                    }),
                  }),
                  (0, Q.jsx)(I, {
                    type: `submit`,
                    disabled: H,
                    loading: ee,
                    children: (0, Q.jsx)(T, {
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
        : (0, Q.jsx)(gt, {
            source: k,
            onCancel: () => {
              A(null);
            },
            onSave: (e) => {
              (O(e), A(null), L(null), z(null));
            },
          }),
    ],
  });
}
function Sr() {
  let e = (0, Z.c)(6),
    t = w(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(T, {
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
    ? ((i = (0, Q.jsx)(We, { "aria-hidden": !0, className: `icon-2xs` })), (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === r
      ? (a = e[5])
      : ((a = (0, Q.jsx)(F, {
          side: `top`,
          tooltipContent: n,
          children: (0, Q.jsx)(`button`, {
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
function Cr(e) {
  let t = (0, Z.c)(2),
    { accountLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `inline-flex h-6 items-center rounded-lg border border-token-border-light px-[5px] text-sm leading-5 text-token-text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function wr(e, t) {
  return (
    Or(e) ??
    t.formatMessage({
      id: `profile.displayNameUpdateError`,
      defaultMessage: `Unable to update display name`,
      description: `Fallback error shown when profile display name update fails`,
    })
  );
}
function Tr(e, t) {
  return e instanceof Ae
    ? kr(e.reason, t)
    : (Or(e) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function Er(e, t) {
  return (
    Or(e) ??
    t.formatMessage({
      id: `profile.photoUpdateError`,
      defaultMessage: `Unable to update profile picture`,
      description: `Fallback error shown when profile picture update fails`,
    })
  );
}
function Dr(e, t) {
  return (
    Or(e) ??
    t.formatMessage({
      id: `profile.updateError`,
      defaultMessage: `Unable to update profile`,
      description: `Fallback error shown when profile update fails`,
    })
  );
}
function Or(e) {
  if (e instanceof Error) {
    let t = J(e);
    if (t != null) return t.message;
    if (e.message.length > 0) {
      try {
        let t = _r.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function kr(e, t) {
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
function Ar(e) {
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
function jr(e) {
  let t = (0, Z.c)(8),
    { avatar: n, showsPet: r } = e,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(Mr, { className: `absolute top-0 left-[72px] size-20 rounded-full` })),
      (a = (0, Q.jsx)(Mr, { className: `absolute top-[100px] left-0 h-8 w-56 rounded-lg` })),
      (o = (0, Q.jsx)(Mr, { className: `absolute top-[136px] left-12 h-5 w-32 rounded-lg` })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = r
        ? (0, Q.jsx)(`div`, {
            className: `absolute top-8 left-32 flex size-14 items-center justify-center`,
            children: (0, Q.jsx)(ei, { avatar: n }),
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
      : ((c = (0, Q.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `relative h-[152px] w-56`,
          children: [i, a, o, s],
        })),
        (t[6] = s),
        (t[7] = c)),
    c
  );
}
function Mr(e) {
  let t = (0, Z.c)(4),
    { className: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = h(dr.profileLoadingBlock, `block`, n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Q.jsx)(`span`, { "aria-hidden": !0, className: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function Nr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Q.Fragment, { children: yr.map(Pr) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pr(e, t) {
  return (0, Q.jsxs)(
    X.Fragment,
    {
      children: [
        t > 0 ? (0, Q.jsx)(Kr, {}) : null,
        (0, Q.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center gap-1 overflow-hidden px-3 py-2.5`,
          children: [
            (0, Q.jsx)(Mr, { className: `h-5 w-12 rounded-md` }),
            (0, Q.jsx)(Mr, { className: `h-5 w-20 rounded-md` }),
          ],
        }),
      ],
    },
    e,
  );
}
function Fr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          className: `flex min-h-[60px] w-full items-center justify-center px-4 py-3 text-center text-base text-token-text-tertiary`,
          children: (0, Q.jsx)(T, {
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
function Ir(e) {
  let t = (0, Z.c)(12),
    { columnCount: n, monthLabelCount: r } = e,
    i = `repeat(${n}, minmax(1px, 1fr))`,
    a;
  t[0] === i ? (a = t[1]) : ((a = { gridTemplateColumns: i }), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = Array.from({ length: n * 7 }, Rr)), (t[2] = n), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, Q.jsx)(`div`, {
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
    : ((c = (0, Q.jsx)(`div`, {
        className: `flex items-center justify-between`,
        children: Array.from({ length: r }, Lr),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, Q.jsxs)(`div`, {
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
function Lr(e, t) {
  return (0, Q.jsx)(Mr, { className: `h-4 w-6 rounded-md` }, t);
}
function Rr(e, t) {
  return (0, Q.jsx)(Mr, { className: `aspect-square w-full rounded-[4px]` }, t);
}
function zr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
          children: (0, Q.jsx)(T, {
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
function Br(e) {
  let t = (0, Z.c)(6),
    { insights: n, isLoading: i, isUnavailable: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = []), (t[0] = o)) : (o = t[0]);
  let { availablePlugins: s } = G(r, o);
  if (i) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Hr, {})), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (!a && n != null) {
    let e;
    return (
      t[2] !== n || t[3] !== s
        ? ((e = (0, Q.jsx)(Xe, { insights: n, plugins: s })), (t[2] = n), (t[3] = s), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let c;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Q.jsx)(Vr, {})), (t[5] = c))
      : (c = t[5]),
    c
  );
}
function Vr() {
  let e = (0, Z.c)(6),
    t = w(),
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
    ? ((r = (0, Q.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, Q.jsx)(T, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(`div`, {
        className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
        children: (0, Q.jsx)(T, {
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
      : ((a = (0, Q.jsxs)(`section`, {
          "aria-label": n,
          className: `flex flex-col gap-2`,
          children: [r, i],
        })),
        (e[4] = n),
        (e[5] = a)),
    a
  );
}
function Hr() {
  let e = (0, Z.c)(8),
    t = w(),
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
    ? ((r = (0, Q.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, Q.jsx)(T, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          r,
          (0, Q.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, Wr),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, Q.jsx)(T, {
          id: `profile.activity.plugins.title`,
          defaultMessage: `Most used plugins`,
          description: `Heading for the most used Codex plugins on the profile page`,
        }),
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          a,
          (0, Q.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, Ur),
          }),
        ],
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] === n
      ? (s = e[7])
      : ((s = (0, Q.jsxs)(`section`, {
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
function Ur(e, t) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, Q.jsx)(Mr, { className: `size-6 rounded-lg` }),
            (0, Q.jsx)(Mr, { className: `h-5 w-24 rounded-md` }),
          ],
        }),
        (0, Q.jsx)(Mr, { className: `h-5 w-14 rounded-md` }),
      ],
    },
    t,
  );
}
function Wr(e, t) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, Q.jsx)(Mr, { className: `h-5 w-24 rounded-md` }),
        (0, Q.jsx)(Mr, { className: `h-5 w-10 rounded-md` }),
      ],
    },
    t,
  );
}
function Gr(e) {
  let t = (0, Z.c)(7),
    { label: n, value: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Q.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-primary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Q.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-secondary`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Q.jsxs)(`div`, {
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
function Kr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          className: `my-3 w-px shrink-0 self-stretch rounded-sm bg-token-border-light`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function qr(e) {
  let t = e % 7;
  return (Math.floor(e / 7) * 8 + t * 12) / 1e3;
}
function Jr(e) {
  let t = Ne(0, e),
    n = new Date(`${e}T00:00:00.000Z`),
    r = n.getUTCMonth(),
    i = n.getUTCFullYear(),
    a = Math.min(fr, Yr(t, e) + 1);
  return Array.from({ length: a }, (e, t) => {
    let n = t - (a - 1);
    return new Date(Date.UTC(i, r + n, 1)).toISOString();
  });
}
function Yr(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`),
    r = new Date(`${t}T00:00:00.000Z`);
  return (r.getUTCFullYear() - n.getUTCFullYear()) * 12 + r.getUTCMonth() - n.getUTCMonth();
}
function Xr(e) {
  let t = (0, Z.c)(10),
    { dateIso: n, tokenCount: r, todayIso: i } = e,
    a = w(),
    o;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((o = Qr({ dateIso: n, intl: a, todayIso: i })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== a || t[5] !== r ? ((s = ye(a, r)), (t[4] = a), (t[5] = r), (t[6] = s)) : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, Q.jsx)(T, {
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
function Zr(e) {
  let t = (0, Z.c)(10),
    { chartView: n, tokenCount: r, weekStartIso: i } = e,
    a = w(),
    o;
  t[0] !== a || t[1] !== r ? ((o = ye(a, r)), (t[0] = a), (t[1] = r), (t[2] = o)) : (o = t[2]);
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
            ? (0, Q.jsx)(T, {
                id: `profile.tokenUsage.weekTooltip`,
                defaultMessage: `{tokens} tokens on week of {weekStart}`,
                description: `Tooltip for a weekly token usage chart column`,
                values: { tokens: s, weekStart: l },
              })
            : (0, Q.jsx)(T, {
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
function Qr({ dateIso: e, intl: t, todayIso: n }) {
  let r = new Date(`${e}T00:00:00.000Z`),
    i = t.formatDate(r, { day: `numeric`, month: `short`, timeZone: `UTC` }),
    a = r.getUTCFullYear();
  return a === Number(n.slice(0, 4)) ? i : `${i}, ${a}`;
}
function $r(e) {
  let t = (0, Z.c)(10),
    { active: n, children: r, disabled: i, onSelect: a } = e,
    o = i ? `cursor-default` : `cursor-interaction`,
    s = n ? `text-token-text-primary` : `text-token-text-tertiary`,
    c = !n && !i && `hover:text-token-text-primary focus-visible:text-token-text-primary`,
    l;
  t[0] !== o || t[1] !== s || t[2] !== c
    ? ((l = h(
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
      ? ((u = (0, Q.jsx)(`button`, {
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
function ei(e) {
  let t = (0, Z.c)(9),
    { avatar: n } = e,
    [r, i] = (0, X.useState)(!1),
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
    ? ((c = (0, Q.jsx)(He, {
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
      ? ((l = (0, Q.jsx)(`div`, {
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
export { br as Profile };
//# sourceMappingURL=profile.js.map
