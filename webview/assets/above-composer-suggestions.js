import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  al as r,
  kl as i,
  ll as a,
  oc as o,
  rl as s,
  tc as c,
  xl as l,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Fd as u,
  Jp as d,
  Vd as f,
  Yp as p,
  _c as m,
  am as h,
  ap as g,
  fc as _,
  gc as v,
  hc as y,
  im as b,
  ip as x,
  mc as S,
  om as C,
  pc as w,
  zd as ee,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  aw as T,
  cw as E,
  uw as D,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  $t as te,
  Qt as O,
  en as k,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Sn as A,
  Tn as j,
  vn as M,
  yn as N,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import {
  Gt as P,
  I as F,
  Jt as I,
  Kt as L,
  L as R,
  qt as ne,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
function z(e) {
  let t = (0, B.c)(31),
    { actions: n, icon: r, layout: i, meta: a, suggestionId: o, title: s } = e,
    c = (i === void 0 ? `inline` : i) === `stacked`,
    l = c ? `py-2` : `py-1.5`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = b(
        `relative inline-flex max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-3xl border border-token-border/80 bg-token-dropdown-background/90 pr-2 pl-3 text-token-foreground shadow-md backdrop-blur-sm`,
        l,
      )),
      (t[0] = l),
      (t[1] = u));
  let d = c ? `items-start` : `items-center`,
    f;
  t[2] === d ? (f = t[3]) : ((f = b(`flex min-w-0 flex-1 gap-2`, d)), (t[2] = d), (t[3] = f));
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
  t[6] === m ? (h = t[7]) : ((h = b(`min-w-0 flex-1`, m)), (t[6] = m), (t[7] = h));
  let g = c ? `min-w-0 leading-5 break-words` : `truncate leading-[18px]`,
    _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = b(`text-sm font-medium text-token-foreground`, g)), (t[8] = g), (t[9] = _));
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
            className: b(
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
  let x;
  t[16] !== v || t[17] !== y || t[18] !== h
    ? ((x = (0, V.jsxs)(`div`, { className: h, children: [v, y] })),
      (t[16] = v),
      (t[17] = y),
      (t[18] = h),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== x || t[21] !== f || t[22] !== p
    ? ((S = (0, V.jsxs)(`div`, { className: f, children: [p, x] })),
      (t[20] = x),
      (t[21] = f),
      (t[22] = p),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] === n
    ? (C = t[25])
    : ((C = (0, V.jsx)(`div`, { className: `flex shrink-0 items-center gap-1`, children: n })),
      (t[24] = n),
      (t[25] = C));
  let w;
  return (
    t[26] !== o || t[27] !== S || t[28] !== C || t[29] !== u
      ? ((w = (0, V.jsx)(`div`, {
          className: `pointer-events-auto flex w-full max-w-full justify-center`,
          children: (0, V.jsxs)(`div`, {
            className: u,
            "data-codex-above-composer-suggestion": o,
            children: [S, C],
          }),
        })),
        (t[26] = o),
        (t[27] = S),
        (t[28] = C),
        (t[29] = u),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
var B,
  V,
  H = e(() => {
    ((B = n()), h(), (V = l()));
  });
function U({
  intl: e,
  artifactPluginSuggestionKind: t,
  activateArtifactPlugin: n,
  setDismissedSuggestionIds: r,
}) {
  if (t == null) return null;
  let i = L(t),
    { icon: a, pluginName: o, title: s } = re(e, t);
  return {
    id: i,
    title: s,
    icon: a,
    meta: (0, W.jsx)(E, {
      id: `composer.aboveSuggestion.artifact.shortcutWithAction`,
      defaultMessage: `{shortcut}`,
      description: `Keyboard shortcut hint shown before an artifact plugin suggestion button`,
      values: {
        shortcut: (0, W.jsx)(d, {
          "aria-hidden": !0,
          tabIndex: -1,
          color: `outline`,
          size: `composerSm`,
          className: `pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none`,
          children: (0, W.jsx)(E, {
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
function re(e, t) {
  switch (t) {
    case `document`:
      return {
        icon: _,
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
        icon: v,
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
        icon: S,
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
var W,
  ie = e(() => {
    (T(), p(), m(), y(), w(), I(), (W = l()));
  });
function ae({
  composerText: e,
  hasPlanMode: t,
  isPlanMode: n,
  isDismissed: r,
  showPlanKeywordSuggestion: i,
}) {
  return !i || !t || n || r ? !1 : G.test(e);
}
var G,
  K,
  q = e(() => {
    ((G = /\bplan\b/i), (K = `keyword-plan-mode`));
  });
function oe({
  intl: e,
  shouldShowPlanSuggestion: t,
  setSelectedCollaborationMode: n,
  setDismissedSuggestionIds: r,
}) {
  return t
    ? {
        id: K,
        title: e.formatMessage({
          id: `composer.aboveSuggestion.plan.title`,
          defaultMessage: `Create a plan`,
          description: `Title for the above-composer plan keyword suggestion`,
        }),
        icon: F,
        meta: (0, J.jsx)(E, {
          id: `composer.aboveSuggestion.plan.shortcutWithAction`,
          defaultMessage: `{shortcut}`,
          description: `Keyboard shortcut hint shown before the above-composer plan suggestion button`,
          values: {
            shortcut: (0, J.jsx)(d, {
              "aria-hidden": !0,
              tabIndex: -1,
              color: `outline`,
              size: `composerSm`,
              className: `pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none`,
              children: (0, J.jsx)(E, {
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
          r((e) => (e.includes(`keyword-plan-mode`) ? e : [...e, K]));
        },
      }
    : null;
}
var J,
  se = e(() => {
    (T(), p(), q(), R(), (J = l()));
  });
function ce(e) {
  return U(e) ?? oe(e);
}
var le = e(() => {
  (ie(), se());
});
function ue(e) {
  let t = (0, Y.c)(4),
    { portalTarget: n, hideArtifactPluginSuggestions: r, showPlanKeywordSuggestion: i } = e;
  if (n == null) return null;
  let a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = (0, Q.jsx)(de, {
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
function de(e) {
  let t = (0, Y.c)(32),
    { portalTarget: n, hideArtifactPluginSuggestions: i, showPlanKeywordSuggestion: s } = e,
    c = o(u),
    l = D(),
    d = te(),
    f;
  t[0] === c ? (f = t[1]) : ((f = ee(c)), (t[0] = c), (t[1] = f));
  let p = f,
    { activeMode: m, modes: h, setSelectedMode: g } = N(p),
    _;
  t[2] === h ? (_ = t[3]) : ((_ = h.some(fe)), (t[2] = h), (t[3] = _));
  let v = _,
    y = m.mode === `plan`,
    b = pe(p),
    x;
  t[4] === b
    ? (x = t[5])
    : ((x = a(
        (e) => e(A)[b] ?? [],
        (e, t, n) => {
          t(A, (e) => {
            let t = e[b] ?? [],
              r = typeof n == `function` ? n(t) : n;
            return r === t ? e : { ...e, [b]: r };
          });
        },
      )),
      (t[4] = b),
      (t[5] = x));
  let [S, C] = r(x),
    w;
  t[6] === S ? (w = t[7]) : ((w = new Set(S)), (t[6] = S), (t[7] = w));
  let T = w,
    E;
  t[8] === i ? (E = t[9]) : ((E = (e) => ne(e.view.state.doc, i)), (t[8] = i), (t[9] = E));
  let O = k(d, E),
    j;
  t[10] !== T || t[11] !== O
    ? ((j = O != null && !T.has(L(O)) ? O : null), (t[10] = T), (t[11] = O), (t[12] = j))
    : (j = t[12]);
  let M = j,
    F;
  t[13] !== T || t[14] !== v || t[15] !== y || t[16] !== s
    ? ((F = (e) =>
        ae({
          composerText: e.view.state.doc.textContent,
          hasPlanMode: v,
          isPlanMode: y,
          isDismissed: T.has(K),
          showPlanKeywordSuggestion: s,
        })),
      (t[13] = T),
      (t[14] = v),
      (t[15] = y),
      (t[16] = s),
      (t[17] = F))
    : (F = t[17]);
  let I = k(d, F),
    R;
  t[18] === d ? (R = t[19]) : ((R = (e) => P(d, e)), (t[18] = d), (t[19] = R));
  let z;
  t[20] !== M || t[21] !== l || t[22] !== C || t[23] !== g || t[24] !== I || t[25] !== R
    ? ((z = ce({
        intl: l,
        artifactPluginSuggestionKind: M,
        activateArtifactPlugin: R,
        shouldShowPlanSuggestion: I,
        setSelectedCollaborationMode: g,
        setDismissedSuggestionIds: C,
      })),
      (t[20] = M),
      (t[21] = l),
      (t[22] = C),
      (t[23] = g),
      (t[24] = I),
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
    r = D(),
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
    ? ((g = (0, Q.jsx)(d, {
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
  let _;
  t[13] === r
    ? (_ = t[14])
    : ((_ = r.formatMessage({
        id: `composer.aboveSuggestion.dismiss`,
        defaultMessage: `Dismiss suggestion`,
        description: `Aria label for dismissing an above-composer suggestion`,
      })),
      (t[13] = r),
      (t[14] = _));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(x, { className: `icon-xs` })), (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== h || t[17] !== _
    ? ((y = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `no-drag flex size-[22px] shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground select-none hover:bg-token-list-hover-background focus:outline-none`,
        "aria-label": _,
        onClick: h,
        children: v,
      })),
      (t[16] = h),
      (t[17] = _),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== g || t[20] !== y
    ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [g, y] })), (t[19] = g), (t[20] = y), (t[21] = b))
    : (b = t[21]);
  let S;
  return (
    t[22] !== u || t[23] !== n.id || t[24] !== n.meta || t[25] !== n.title || t[26] !== b
      ? ((S = (0, Q.jsx)(z, {
          actions: b,
          icon: u,
          meta: n.meta,
          suggestionId: n.id,
          title: n.title,
        })),
        (t[22] = u),
        (t[23] = n.id),
        (t[24] = n.meta),
        (t[25] = n.title),
        (t[26] = b),
        (t[27] = S))
      : (S = t[27]),
    S
  );
}
function he() {}
var Y, X, Z, Q, $;
e(() => {
  ((Y = n()),
    s(),
    c(),
    (X = t(i(), 1)),
    (Z = t(C(), 1)),
    T(),
    I(),
    p(),
    j(),
    g(),
    f(),
    H(),
    le(),
    q(),
    O(),
    M(),
    (Q = l()),
    ($ = `__new-thread__`));
})();
export { ue as AboveComposerSuggestions };
//# sourceMappingURL=above-composer-suggestions.js.map
