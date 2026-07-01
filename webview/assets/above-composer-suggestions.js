import { n as e, s as t } from "./rolldown-runtime.js";
import {
  CA as n,
  Ca as r,
  Cl as i,
  Da as a,
  Ea as o,
  GP as s,
  HP as c,
  Oa as l,
  RV as u,
  SA as d,
  TB as f,
  TP as p,
  Ta as m,
  _l as h,
  bB as g,
  fN as _,
  hV as v,
  jV as y,
  pN as b,
  pV as x,
  qP as S,
  rF as C,
  wP as w,
  wa as T,
  xl as E,
  yV as ee,
  zV as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Bw as O,
  Vw as k,
  Ww as A,
  eg as j,
  ng as M,
  qw as N,
  tg as P,
} from "./app-initial~app-main~onboarding-page.js";
import {
  a as te,
  i as F,
  n as I,
  o as L,
  r as ne,
  t as R,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~ly2g680p.js";
function z(e) {
  let t = (0, B.c)(31),
    { actions: n, icon: r, layout: i, meta: a, suggestionId: o, title: s } = e,
    c = (i === void 0 ? `inline` : i) === `stacked`,
    l = c ? `py-2` : `py-1.5`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = w(
        `relative inline-flex max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-3xl border border-token-border/80 bg-token-dropdown-background/90 pr-2 pl-3 text-token-foreground shadow-md backdrop-blur-sm`,
        l,
      )),
      (t[0] = l),
      (t[1] = u));
  let d = c ? `items-start` : `items-center`,
    f;
  t[2] === d ? (f = t[3]) : ((f = w(`flex min-w-0 flex-1 gap-2`, d)), (t[2] = d), (t[3] = f));
  let p;
  t[4] === r
    ? (p = t[5])
    : ((p =
        r == null
          ? null
          : (0, V.jsx)(`span`, {
              className: `flex items-center justify-center text-token-foreground`,
              children: r,
            })),
      (t[4] = r),
      (t[5] = p));
  let m = c ? `flex flex-col gap-1 text-sm` : `flex items-center gap-2`,
    h;
  t[6] === m ? (h = t[7]) : ((h = w(`min-w-0 flex-1`, m)), (t[6] = m), (t[7] = h));
  let g = c ? `min-w-0 leading-5 break-words` : `truncate leading-[18px]`,
    _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = w(`text-sm font-medium text-token-foreground`, g)), (t[8] = g), (t[9] = _));
  let v;
  t[10] !== _ || t[11] !== s
    ? ((v = (0, V.jsx)(`span`, { className: _, children: s })),
      (t[10] = _),
      (t[11] = s),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== c || t[14] !== a
    ? ((y = a
        ? (0, V.jsx)(`span`, {
            className: w(
              `text-sm text-token-description-foreground`,
              c ? `leading-4` : `hidden leading-none @[500px]:inline`,
            ),
            children: a,
          })
        : null),
      (t[13] = c),
      (t[14] = a),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== v || t[17] !== y || t[18] !== h
    ? ((b = (0, V.jsxs)(`div`, { className: h, children: [v, y] })),
      (t[16] = v),
      (t[17] = y),
      (t[18] = h),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== b || t[21] !== f || t[22] !== p
    ? ((x = (0, V.jsxs)(`div`, { className: f, children: [p, b] })),
      (t[20] = b),
      (t[21] = f),
      (t[22] = p),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] === n
    ? (S = t[25])
    : ((S = (0, V.jsx)(`div`, { className: `flex shrink-0 items-center gap-1`, children: n })),
      (t[24] = n),
      (t[25] = S));
  let C;
  return (
    t[26] !== o || t[27] !== x || t[28] !== S || t[29] !== u
      ? ((C = (0, V.jsx)(`div`, {
          className: `pointer-events-auto flex w-full max-w-full justify-center`,
          children: (0, V.jsxs)(`div`, {
            className: u,
            "data-codex-above-composer-suggestion": o,
            children: [x, S],
          }),
        })),
        (t[26] = o),
        (t[27] = x),
        (t[28] = S),
        (t[29] = u),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
var B,
  V,
  H = e(() => {
    ((B = u()), p(), (V = y()));
  });
function re({
  intl: e,
  artifactPluginSuggestionKind: t,
  activateArtifactPlugin: n,
  setDismissedSuggestionIds: r,
}) {
  if (t == null) return null;
  let i = F(t),
    { icon: a, pluginName: o, title: c } = ie(e, t);
  return {
    id: i,
    title: c,
    icon: a,
    meta: (0, U.jsx)(s, {
      id: `composer.aboveSuggestion.artifact.shortcutWithAction`,
      defaultMessage: `{shortcut}`,
      description: `Keyboard shortcut hint shown before an artifact plugin suggestion button`,
      values: {
        shortcut: (0, U.jsx)(_, {
          "aria-hidden": !0,
          tabIndex: -1,
          color: `outline`,
          size: `composerSm`,
          className: `pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none`,
          children: (0, U.jsx)(s, {
            id: `composer.aboveSuggestion.artifact.shortcut`,
            defaultMessage: `Shift + Tab`,
            description: `Keyboard shortcut hint shown next to an artifact plugin suggestion button`,
          }),
        }),
      },
    }),
    actionLabel: e.formatMessage(
      {
        id: `composer.aboveSuggestion.artifact.action`,
        defaultMessage: `Use {pluginName}`,
        description: `Primary button label for activating an artifact creation plugin from an above-composer suggestion`,
      },
      { pluginName: o },
    ),
    onAction: () => n(t),
    onDismiss: () => r((e) => (e.includes(i) ? e : [...e, i])),
  };
}
function ie(e, t) {
  switch (t) {
    case `document`:
      return {
        icon: r,
        pluginName: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.document.pluginName`,
          defaultMessage: `Documents`,
          description: `Documents plugin name in the above-composer artifact suggestion`,
        }),
        title: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.document.title`,
          defaultMessage: `Create a document`,
          description: `Title for the above-composer Documents plugin suggestion`,
        }),
      };
    case `presentation`:
      return {
        icon: a,
        pluginName: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.presentation.pluginName`,
          defaultMessage: `Presentations`,
          description: `Presentations plugin name in the above-composer artifact suggestion`,
        }),
        title: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.presentation.title`,
          defaultMessage: `Create a presentation`,
          description: `Title for the above-composer Presentations plugin suggestion`,
        }),
      };
    case `spreadsheet`:
      return {
        icon: m,
        pluginName: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.spreadsheet.pluginName`,
          defaultMessage: `Spreadsheets`,
          description: `Spreadsheets plugin name in the above-composer artifact suggestion`,
        }),
        title: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.spreadsheet.title`,
          defaultMessage: `Create a spreadsheet`,
          description: `Title for the above-composer Spreadsheets plugin suggestion`,
        }),
      };
  }
}
var U,
  ae = e(() => {
    (c(), b(), l(), o(), T(), L(), (U = y()));
  });
function oe({
  composerText: e,
  hasPlanMode: t,
  isPlanMode: n,
  isDismissed: r,
  showPlanKeywordSuggestion: i,
}) {
  return !i || !t || n || r ? !1 : W.test(e);
}
var W,
  G,
  K = e(() => {
    ((W = /\bplan\b/i), (G = `keyword-plan-mode`));
  });
function se({
  intl: e,
  shouldShowPlanSuggestion: t,
  setSelectedCollaborationMode: n,
  setDismissedSuggestionIds: r,
}) {
  return t
    ? {
        id: G,
        title: e.formatMessage({
          id: `composer.aboveSuggestion.plan.title`,
          defaultMessage: `Create a plan`,
          description: `Title for the above-composer plan keyword suggestion`,
        }),
        icon: R,
        meta: (0, q.jsx)(s, {
          id: `composer.aboveSuggestion.plan.shortcutWithAction`,
          defaultMessage: `{shortcut}`,
          description: `Keyboard shortcut hint shown before the above-composer plan suggestion button`,
          values: {
            shortcut: (0, q.jsx)(_, {
              "aria-hidden": !0,
              tabIndex: -1,
              color: `outline`,
              size: `composerSm`,
              className: `pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none`,
              children: (0, q.jsx)(s, {
                id: `composer.aboveSuggestion.plan.shortcut`,
                defaultMessage: `Shift + Tab`,
                description: `Keyboard shortcut hint shown next to the above-composer plan suggestion button`,
              }),
            }),
          },
        }),
        actionLabel: e.formatMessage({
          id: `composer.aboveSuggestion.plan.action`,
          defaultMessage: `Use plan mode`,
          description: `Primary button label for enabling plan mode from the above-composer suggestion`,
        }),
        onAction: () => {
          n(`plan`);
        },
        onDismiss: () => {
          r((e) => (e.includes(`keyword-plan-mode`) ? e : [...e, G]));
        },
      }
    : null;
}
var q,
  ce = e(() => {
    (c(), b(), K(), I(), (q = y()));
  });
function le(e) {
  return re(e) ?? se(e);
}
var ue = e(() => {
  (ae(), ce());
});
function de(e) {
  let t = (0, Y.c)(4),
    { portalTarget: n, hideArtifactPluginSuggestions: r, showPlanKeywordSuggestion: i } = e;
  if (n == null) return null;
  let a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = (0, Q.jsx)(J, {
          portalTarget: n,
          hideArtifactPluginSuggestions: r,
          showPlanKeywordSuggestion: i,
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function J(e) {
  let t = (0, Y.c)(32),
    { portalTarget: n, hideArtifactPluginSuggestions: r, showPlanKeywordSuggestion: i } = e,
    a = f(h),
    o = S(),
    s = P(),
    c;
  t[0] === a ? (c = t[1]) : ((c = E(a)), (t[0] = a), (t[1] = c));
  let l = c,
    { activeMode: u, modes: d, setSelectedMode: p } = k(l),
    m;
  t[2] === d ? (m = t[3]) : ((m = d.some(fe)), (t[2] = d), (t[3] = m));
  let g = m,
    _ = u.mode === `plan`,
    y = pe(l),
    b;
  t[4] === y
    ? (b = t[5])
    : ((b = ee(
        (e) => e(A)[y] ?? [],
        (e, t, n) => {
          t(A, (e) => {
            let t = e[y] ?? [],
              r = typeof n == `function` ? n(t) : n;
            return r === t ? e : { ...e, [y]: r };
          });
        },
      )),
      (t[4] = y),
      (t[5] = b));
  let [x, C] = v(b),
    w;
  t[6] === x ? (w = t[7]) : ((w = new Set(x)), (t[6] = x), (t[7] = w));
  let T = w,
    D;
  t[8] === r ? (D = t[9]) : ((D = (e) => te(e.view.state.doc, r)), (t[8] = r), (t[9] = D));
  let O = M(s, D),
    j;
  t[10] !== T || t[11] !== O
    ? ((j = O != null && !T.has(F(O)) ? O : null), (t[10] = T), (t[11] = O), (t[12] = j))
    : (j = t[12]);
  let N = j,
    I;
  t[13] !== T || t[14] !== g || t[15] !== _ || t[16] !== i
    ? ((I = (e) =>
        oe({
          composerText: e.view.state.doc.textContent,
          hasPlanMode: g,
          isPlanMode: _,
          isDismissed: T.has(G),
          showPlanKeywordSuggestion: i,
        })),
      (t[13] = T),
      (t[14] = g),
      (t[15] = _),
      (t[16] = i),
      (t[17] = I))
    : (I = t[17]);
  let L = M(s, I),
    R;
  t[18] === s ? (R = t[19]) : ((R = (e) => ne(s, e)), (t[18] = s), (t[19] = R));
  let z;
  t[20] !== N || t[21] !== o || t[22] !== C || t[23] !== p || t[24] !== L || t[25] !== R
    ? ((z = le({
        intl: o,
        artifactPluginSuggestionKind: N,
        activateArtifactPlugin: R,
        shouldShowPlanSuggestion: L,
        setSelectedCollaborationMode: p,
        setDismissedSuggestionIds: C,
      })),
      (t[20] = N),
      (t[21] = o),
      (t[22] = C),
      (t[23] = p),
      (t[24] = L),
      (t[25] = R),
      (t[26] = z))
    : (z = t[26]);
  let B = z,
    V;
  t[27] !== n || t[28] !== B
    ? ((V = B ? (0, Z.createPortal)((0, Q.jsx)(me, { suggestion: B }, B.id), n) : null),
      (t[27] = n),
      (t[28] = B),
      (t[29] = V))
    : (V = t[29]);
  let H;
  return (
    t[30] === V
      ? (H = t[31])
      : ((H = (0, Q.jsx)(Q.Fragment, { children: V })), (t[30] = V), (t[31] = H)),
    H
  );
}
function fe(e) {
  return e.mode === `plan`;
}
function pe(e) {
  return e == null ? $ : `${e}`;
}
function me(e) {
  let t = (0, Y.c)(28),
    { suggestion: n } = e,
    r = S(),
    [i, a] = (0, X.useState)(!1),
    o = n.icon,
    s = n.actionDisabled === !0 || i,
    c = n.dismissOnAction !== !1,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = o ? (0, Q.jsx)(o, { className: `icon-xs shrink-0` }) : null), (t[0] = o), (t[1] = l));
  let u = l,
    f;
  t[2] !== s || t[3] !== c || t[4] !== n
    ? ((f = (e) => {
        if ((e.stopPropagation(), !s)) {
          try {
            let e = n.onAction();
            if (e && typeof e.then == `function`) {
              (a(!0),
                e
                  .then(() => {
                    c && n.onDismiss();
                  })
                  .catch(he)
                  .finally(() => {
                    a(!1);
                  }));
              return;
            }
          } catch {
            return;
          }
          c && n.onDismiss();
        }
      }),
      (t[2] = s),
      (t[3] = c),
      (t[4] = n),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] === n
    ? (m = t[7])
    : ((m = (e) => {
        (e.stopPropagation(), n.onDismiss());
      }),
      (t[6] = n),
      (t[7] = m));
  let h = m,
    g;
  t[8] !== p || t[9] !== s || t[10] !== i || t[11] !== n.actionLabel
    ? ((g = (0, Q.jsx)(_, {
        className: `px-2.5`,
        color: `secondary`,
        "data-codex-above-composer-suggestion-action": !0,
        size: `default`,
        disabled: s,
        loading: i,
        onClick: p,
        children: n.actionLabel,
      })),
      (t[8] = p),
      (t[9] = s),
      (t[10] = i),
      (t[11] = n.actionLabel),
      (t[12] = g))
    : (g = t[12]);
  let v;
  t[13] === r
    ? (v = t[14])
    : ((v = r.formatMessage({
        id: `composer.aboveSuggestion.dismiss`,
        defaultMessage: `Dismiss suggestion`,
        description: `Aria label for dismissing an above-composer suggestion`,
      })),
      (t[13] = r),
      (t[14] = v));
  let y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(d, { className: `icon-xs` })), (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== h || t[17] !== v
    ? ((b = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `no-drag flex size-[22px] shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground select-none hover:bg-token-list-hover-background focus:outline-none`,
        "aria-label": v,
        onClick: h,
        children: y,
      })),
      (t[16] = h),
      (t[17] = v),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== g || t[20] !== b
    ? ((x = (0, Q.jsxs)(Q.Fragment, { children: [g, b] })), (t[19] = g), (t[20] = b), (t[21] = x))
    : (x = t[21]);
  let C;
  return (
    t[22] !== u || t[23] !== n.id || t[24] !== n.meta || t[25] !== n.title || t[26] !== x
      ? ((C = (0, Q.jsx)(z, {
          actions: x,
          icon: u,
          meta: n.meta,
          suggestionId: n.id,
          title: n.title,
        })),
        (t[22] = u),
        (t[23] = n.id),
        (t[24] = n.meta),
        (t[25] = n.title),
        (t[26] = x),
        (t[27] = C))
      : (C = t[27]),
    C
  );
}
function he() {}
var Y, X, Z, Q, $;
e(() => {
  ((Y = u()),
    x(),
    g(),
    (X = t(D(), 1)),
    (Z = t(C(), 1)),
    c(),
    L(),
    b(),
    N(),
    n(),
    i(),
    H(),
    ue(),
    K(),
    j(),
    O(),
    (Q = y()),
    ($ = `__new-thread__`));
})();
export { de as AboveComposerSuggestions };
//# sourceMappingURL=above-composer-suggestions.js.map
