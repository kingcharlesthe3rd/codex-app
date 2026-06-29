import { s as e } from "./chunk-Bj-mKKzh.js";
import { C as t, D as n, Fi as r, O as i, _ as a, w as o, x as s, y as c } from "./src-2.js";
import { d as l, i as u, l as d, n as f, t as p, u as m } from "./gpu-tearing-debug-settings.js";
import { Pc as h, Wo as g, zs as _ } from "./app-server-manager-signals.js";
import { n as v, t as y } from "./jsx-runtime.js";
import { t as b } from "./clsx.js";
import {
  A as x,
  F as S,
  I as C,
  P as w,
  _ as T,
  a as E,
  h as D,
  lt as O,
  n as k,
  o as A,
  r as j,
  s as M,
  u as N,
} from "./vscode-api.js";
import { t as P } from "./useQueries.js";
import { c as F, o as I, r as L } from "./lib-2.js";
import { m as R } from "./chunk-12.js";
import { h as z, v as B } from "./persisted-signal-CweW-bgN.js";
import { n as V } from "./rpc-1.js";
import { a as ee, o as te, u as ne } from "./statsig.js";
import { t as re } from "./invalidate-queries-and-broadcast.js";
import { t as ie } from "./thread-context-inputs.js";
import { t as ae } from "./use-auth-CI-WraL2.js";
import { r as oe } from "./toast-signal.js";
import { t as se } from "./tooltip.js";
import { t as H } from "./button.js";
import { a as U, i as W } from "./setting-storage.js";
import { t as ce } from "./spinner.js";
import { t as le } from "./use-codex-home.js";
import { t as ue } from "./use-os-info.js";
import { i as de, n as fe, r as pe, t as me } from "./thread-detail-level.js";
import { o as he, r as ge } from "./use-permissions-mode.js";
import { n as _e, y as ve } from "./app-shell-state.js";
import { n as ye, t as be } from "./use-service-tier-settings.js";
import { t as xe } from "./use-platform.js";
import { l as Se } from "./diff-view-mode.js";
import { n as Ce, t as we } from "./file-diff.js";
import { t as Te } from "./terminal.js";
import { t as G } from "./with-window.js";
import { t as Ee } from "./font-settings.js";
import { n as De, t as Oe } from "./use-resolved-theme-variant.js";
import { a as ke, i as Ae, r as je, s as Me, t as Ne } from "./locale-resolver.js";
import { t as Pe } from "./copy-to-clipboard.js";
import {
  a as Fe,
  d as Ie,
  i as Le,
  l as Re,
  n as ze,
  r as Be,
  t as Ve,
} from "./dialog-layout.js";
import { t as He } from "./check-md.js";
import { n as Ue } from "./electron-menu-shortcuts.js";
import { l as We } from "./links.js";
import { a as Ge, i as Ke, n as qe, t as Je } from "./external-agent-config-gates.js";
import { a as Ye, r as Xe, t as Ze } from "./dropdown.js";
import { i as Qe, n as $e, t as et } from "./popover.js";
import { t as tt } from "./trash.js";
import { t as nt } from "./chevron.js";
import { t as rt } from "./copy.js";
import { t as it } from "./plus-d3DP-DMx.js";
import { t as at } from "./dist-BGrc-53E.js";
import { t as ot } from "./laptop.js";
import {
  _ as st,
  a as ct,
  b as lt,
  d as ut,
  f as dt,
  m as ft,
  t as pt,
  x as mt,
} from "./service-tier-icons.js";
import { t as ht } from "./use-enter-behavior.js";
import { t as K } from "./toggle.js";
import { n as gt, o as _t, t as vt } from "./permissions-mode-visibility.js";
import { i as yt, t as bt } from "./settings-shared.js";
import { t as xt } from "./settings-content-layout.js";
import { t as St } from "./sun.js";
import { n as q } from "./settings-row.js";
import { n as Ct, t as J } from "./settings-group.js";
import { y as wt } from "./external-agent-import-step.js";
import { n as Tt, t as Et } from "./hotkey-window-state.js";
import { t as Dt } from "./segmented-toggle-BGk-vwSF.js";
import { t as Ot } from "./statsig-url-config.js";
import { t as kt } from "./open-in-targets-query.js";
import { a as Y, i as X } from "./general-settings.search.js";
import { n as At, r as jt, t as Mt } from "./keyboard-event-accelerator.js";
var Nt = E(D, `global-dictation-history`, { staleTime: N.FIVE_SECONDS }),
  Pt = E(D, `global-dictation-hotkey-state`, { staleTime: N.FIVE_SECONDS }),
  Z = O(),
  Q = e(v(), 1),
  $ = y(),
  Ft = `const themePreview: ThemeConfig = {
  surface: "sidebar",
  accent: "#2563eb",
  contrast: 42,
};
`,
  It = `const themePreview: ThemeConfig = {
  surface: "sidebar-elevated",
  accent: "#0ea5e9",
  contrast: 68,
};
`,
  Lt = `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  Rt = Ce(
    { name: `src/theme-preview.ts`, contents: Ft },
    { name: `src/theme-preview.ts`, contents: It },
  );
function zt() {
  let e = (0, Z.c)(9),
    t = De(),
    n = de() === me,
    r,
    i;
  if (e[0] !== t || e[1] !== n) {
    let a = Oe(t);
    r = `flex flex-col gap-2`;
    let o;
    (e[4] === n
      ? (o = e[5])
      : ((o = (e) => (0, $.jsx)(Vt, { showCodeFont: n, variant: e }, e)), (e[4] = n), (e[5] = o)),
      (i = a.map(o)),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r),
      (e[3] = i));
  } else ((r = e[2]), (i = e[3]));
  let a;
  return (
    e[6] !== r || e[7] !== i
      ? ((a = (0, $.jsx)(`div`, { className: r, children: i })), (e[6] = r), (e[7] = i), (e[8] = a))
      : (a = e[8]),
    a
  );
}
function Bt() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary`,
          "data-testid": `theme-preview`,
          children: (0, $.jsx)(we, {
            diffStyle: `split`,
            expansionLineCount: 8,
            fileDiff: Rt,
            hunkSeparators: `line-info`,
            lineDiffType: `none`,
            overflow: `scroll`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Vt({ showCodeFont: e, variant: t }) {
  let n = S(D),
    r = F(),
    i = r.formatMessage({
      id: `settings.general.appearance.chromeTheme.accent.short`,
      defaultMessage: `Accent`,
      description: `Short label for the accent color picker`,
    }),
    a = r.formatMessage({
      id: `settings.general.appearance.chromeTheme.surface.short`,
      defaultMessage: `Background`,
      description: `Short label for the background color picker`,
    }),
    o = r.formatMessage({
      id: `settings.general.appearance.chromeTheme.ink.short`,
      defaultMessage: `Foreground`,
      description: `Short label for the foreground color picker`,
    }),
    s = r.formatMessage({
      id: `settings.general.appearance.chromeTheme.contrast.short`,
      defaultMessage: `Contrast`,
      description: `Short label for the contrast slider`,
    }),
    c = r.formatMessage({
      id: `settings.general.appearance.chromeTheme.translucentSidebar.short`,
      defaultMessage: `Translucent sidebar`,
      description: `Short label for the translucent sidebar toggle`,
    }),
    {
      canImportThemeString: l,
      codeThemes: u,
      exportThemeString: d,
      fonts: f,
      importThemeString: p,
      selectedCodeTheme: h,
      setCodeThemeId: g,
      setFontsPatch: _,
      setThemePatch: v,
      theme: y,
    } = m(t),
    b = $t(r, t),
    [x, C] = (0, Q.useState)(!1),
    [w, T] = (0, Q.useState)(``),
    E = [
      {
        ariaLabel: r.formatMessage(
          {
            id: `settings.general.appearance.chromeTheme.accent`,
            defaultMessage: `{variant} accent color`,
            description: `Aria label for the accent color input in chrome theme settings`,
          },
          { variant: b },
        ),
        label: i,
        role: `accent`,
      },
      {
        ariaLabel: r.formatMessage(
          {
            id: `settings.general.appearance.chromeTheme.surface`,
            defaultMessage: `{variant} background color`,
            description: `Aria label for the background color input in chrome theme settings`,
          },
          { variant: b },
        ),
        label: a,
        role: `surface`,
      },
      {
        ariaLabel: r.formatMessage(
          {
            id: `settings.general.appearance.chromeTheme.ink`,
            defaultMessage: `{variant} ink color`,
            description: `Aria label for the ink color input in chrome theme settings`,
          },
          { variant: b },
        ),
        label: o,
        role: `ink`,
      },
    ],
    O = [
      {
        ariaLabel: r.formatMessage(
          {
            id: `settings.general.appearance.chromeTheme.uiFontFamily`,
            defaultMessage: `{variant} UI font`,
            description: `Aria label for the UI font input in chrome theme settings`,
          },
          { variant: b },
        ),
        key: `ui`,
        label: r.formatMessage({
          id: `settings.general.appearance.chromeTheme.uiFontFamily.short`,
          defaultMessage: `UI font`,
          description: `Short label for the UI font input`,
        }),
        placeholder: Lt,
      },
    ];
  e &&
    O.push({
      ariaLabel: r.formatMessage(
        {
          id: `settings.general.appearance.chromeTheme.codeFontFamily`,
          defaultMessage: `{variant} code font`,
          description: `Aria label for the code font input in chrome theme settings`,
        },
        { variant: b },
      ),
      key: `code`,
      label: r.formatMessage({
        id: `settings.general.appearance.chromeTheme.codeFontFamily.short`,
        defaultMessage: `Code font`,
        description: `Short label for the code font input`,
      }),
      placeholder: Ee,
    });
  let k = (e, t) => {
      switch (e) {
        case `accent`:
          v({ accent: t });
          return;
        case `ink`:
          v({ ink: t });
          return;
        case `surface`:
          v({ surface: t });
          return;
      }
    },
    A = async () => {
      if (await Pe(d()).catch(() => !1)) {
        n.get(oe).success(
          r.formatMessage(
            {
              id: `settings.general.appearance.chromeTheme.export.success`,
              defaultMessage: `{variant} theme copied`,
              description: `Success toast shown after copying a theme share string`,
            },
            { variant: b },
          ),
        );
        return;
      }
      n.get(oe).danger(
        r.formatMessage(
          {
            id: `settings.general.appearance.chromeTheme.export.error`,
            defaultMessage: `Couldn’t copy {variant} theme`,
            description: `Error toast shown when copying a theme share string fails`,
          },
          { variant: b },
        ),
      );
    },
    j = async () => {
      try {
        let e = w.trim();
        if (!e) throw Error(`Missing theme string`);
        (await p(e),
          C(!1),
          T(``),
          n
            .get(oe)
            .success(
              r.formatMessage(
                {
                  id: `settings.general.appearance.chromeTheme.import.success`,
                  defaultMessage: `{variant} theme imported`,
                  description: `Success toast shown after importing a theme share string`,
                },
                { variant: b },
              ),
            ));
      } catch {
        n.get(oe).danger(
          r.formatMessage(
            {
              id: `settings.general.appearance.chromeTheme.import.error`,
              defaultMessage: `Couldn’t import {variant} theme`,
              description: `Error toast shown when importing a theme share string fails`,
            },
            { variant: b },
          ),
        );
      }
    };
  return (0, $.jsxs)(Ht, {
    title: Qt(t),
    headerControl: (0, $.jsxs)(`div`, {
      className: `flex items-center gap-2 max-sm:w-full max-sm:flex-wrap max-sm:justify-end`,
      children: [
        (0, $.jsx)(H, {
          className: `px-2`,
          color: `ghost`,
          size: `toolbar`,
          onClick: () => {
            C(!0);
          },
          children: (0, $.jsx)(I, {
            id: `settings.general.appearance.chromeTheme.import`,
            defaultMessage: `Import`,
            description: `Button label for importing a shared theme string`,
          }),
        }),
        (0, $.jsx)(H, {
          className: `px-2`,
          color: `ghost`,
          size: `toolbar`,
          onClick: () => {
            A();
          },
          children: (0, $.jsx)(I, {
            id: `settings.general.appearance.chromeTheme.export`,
            defaultMessage: `Copy theme`,
            description: `Button label for copying a shared theme string`,
          }),
        }),
        (0, $.jsx)(Wt, {
          ariaLabel: r.formatMessage(
            {
              id: `settings.general.appearance.codeTheme`,
              defaultMessage: `{variant} code theme`,
              description: `Aria label for the code theme picker in appearance settings`,
            },
            { variant: b },
          ),
          codeThemes: u,
          selectedCodeTheme: h,
          theme: y,
          variant: t,
          onSelect: (e) => {
            g(e).catch(() => void 0);
          },
        }),
      ],
    }),
    children: [
      E.map((e) =>
        (0, $.jsx)(
          q,
          {
            control: (0, $.jsx)(Kt, {
              ariaLabel: e.ariaLabel,
              value: y[e.role],
              onChange: (t) => {
                k(e.role, t);
              },
            }),
            label: e.label,
            variant: `nested`,
          },
          e.role,
        ),
      ),
      O.map((e) =>
        (0, $.jsx)(
          q,
          {
            control: (0, $.jsx)(Xt, {
              ariaLabel: e.ariaLabel,
              placeholder: e.placeholder,
              value: f[e.key],
              onChange: (t) => {
                _({ [e.key]: t });
              },
            }),
            label: e.label,
            variant: `nested`,
          },
          e.key,
        ),
      ),
      (0, $.jsx)(q, {
        control: (0, $.jsx)(K, {
          checked: !y.opaqueWindows,
          onChange: (e) => {
            v({ opaqueWindows: !e });
          },
          ariaLabel: r.formatMessage(
            {
              id: `settings.general.appearance.chromeTheme.translucentSidebar`,
              defaultMessage: `{variant} translucent sidebar`,
              description: `Aria label for the translucent sidebar toggle in chrome theme settings`,
            },
            { variant: b },
          ),
        }),
        label: c,
        variant: `nested`,
      }),
      (0, $.jsx)(q, {
        control: (0, $.jsx)(Zt, {
          ariaLabel: r.formatMessage(
            {
              id: `settings.general.appearance.chromeTheme.contrast`,
              defaultMessage: `{variant} contrast`,
              description: `Aria label for the contrast slider in chrome theme settings`,
            },
            { variant: $t(r, t) },
          ),
          theme: y,
          value: y.contrast,
          onChange: (e) => {
            v({ contrast: e });
          },
        }),
        label: s,
        variant: `nested`,
      }),
      (0, $.jsx)(Ut, {
        exampleValue: d(),
        isImportValueValid: l(w),
        isOpen: x,
        value: w,
        variantLabel: b,
        onOpenChange: (e) => {
          (C(e), e || T(``));
        },
        onSubmit: () => {
          j();
        },
        onValueChange: T,
      }),
    ],
  });
}
function Ht(e) {
  let t = (0, Z.c)(12),
    { title: n, headerControl: r, children: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, $.jsx)(`div`, {
        className: `min-w-0`,
        children: (0, $.jsx)(`div`, {
          className: `text-base font-medium text-token-text-secondary`,
          children: n,
        }),
      })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, $.jsx)(`div`, { className: `shrink-0 max-sm:w-full`, children: r })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2 px-4 py-2 max-sm:flex-col max-sm:items-stretch`,
        children: [a, o],
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === i
    ? (c = t[8])
    : ((c = (0, $.jsx)(`div`, { className: `divide-y-[0.5px] divide-token-border`, children: i })),
      (t[7] = i),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsxs)(`div`, {
          className: `overflow-hidden rounded-2xl border border-token-border bg-token-input-background shadow-sm`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Ut(e) {
  let t = (0, Z.c)(35),
    {
      exampleValue: n,
      isImportValueValid: r,
      isOpen: i,
      value: a,
      variantLabel: o,
      onOpenChange: s,
      onSubmit: c,
      onValueChange: l,
    } = e,
    u = F(),
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u.formatMessage({
        id: `settings.general.appearance.chromeTheme.import.dialog.title`,
        defaultMessage: `Import theme`,
        description: `Title for the theme import dialog`,
      })),
      (t[0] = u),
      (t[1] = d));
  let f = d,
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { "aria-describedby": void 0 }), (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === f
    ? (m = t[4])
    : ((m = (0, $.jsxs)(Fe, {
        children: [
          (0, $.jsx)(Ie, {
            asChild: !0,
            children: (0, $.jsx)(`h2`, { className: `sr-only`, children: f }),
          }),
          (0, $.jsx)(Le, { title: f }),
        ],
      })),
      (t[3] = f),
      (t[4] = m));
  let h;
  t[5] !== u || t[6] !== o
    ? ((h = u.formatMessage(
        {
          id: `settings.general.appearance.chromeTheme.import.dialog.ariaLabel`,
          defaultMessage: `{variant} theme share string`,
          description: `Aria label for the theme import text area`,
        },
        { variant: o },
      )),
      (t[5] = u),
      (t[6] = o),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === l
    ? (g = t[9])
    : ((g = (e) => {
        l(e.target.value);
      }),
      (t[8] = l),
      (t[9] = g));
  let _;
  t[10] !== n || t[11] !== h || t[12] !== g || t[13] !== a
    ? ((_ = (0, $.jsx)(Fe, {
        children: (0, $.jsx)(`input`, {
          "aria-label": h,
          autoFocus: !0,
          className: `h-9 w-full rounded-xl border border-token-input-border bg-token-input-background px-3 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          placeholder: n,
          spellCheck: !1,
          type: `text`,
          value: a,
          onChange: g,
        }),
      })),
      (t[10] = n),
      (t[11] = h),
      (t[12] = g),
      (t[13] = a),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === s
    ? (v = t[16])
    : ((v = () => {
        s(!1);
      }),
      (t[15] = s),
      (t[16] = v));
  let y;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(I, {
        id: `settings.general.appearance.chromeTheme.import.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for canceling the theme import dialog`,
      })),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] === v
    ? (b = t[19])
    : ((b = (0, $.jsx)(H, { color: `ghost`, size: `toolbar`, onClick: v, children: y })),
      (t[18] = v),
      (t[19] = b));
  let x = !r,
    S;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(I, {
        id: `settings.general.appearance.chromeTheme.import.dialog.submit`,
        defaultMessage: `Import theme`,
        description: `Button label for submitting a theme import`,
      })),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== c || t[22] !== x
    ? ((C = (0, $.jsx)(H, {
        color: `primary`,
        disabled: x,
        size: `toolbar`,
        onClick: c,
        children: S,
      })),
      (t[21] = c),
      (t[22] = x),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== C || t[25] !== b
    ? ((w = (0, $.jsx)(Fe, { children: (0, $.jsxs)(Be, { className: Ve, children: [b, C] }) })),
      (t[24] = C),
      (t[25] = b),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== w || t[28] !== m || t[29] !== _
    ? ((T = (0, $.jsxs)(ze, { children: [m, _, w] })),
      (t[27] = w),
      (t[28] = m),
      (t[29] = _),
      (t[30] = T))
    : (T = t[30]);
  let E;
  return (
    t[31] !== i || t[32] !== s || t[33] !== T
      ? ((E = (0, $.jsx)(Re, {
          open: i,
          onOpenChange: s,
          size: `default`,
          contentProps: p,
          children: T,
        })),
        (t[31] = i),
        (t[32] = s),
        (t[33] = T),
        (t[34] = E))
      : (E = t[34]),
    E
  );
}
function Wt(e) {
  let t = (0, Z.c)(17),
    { ariaLabel: n, codeThemes: r, selectedCodeTheme: i, theme: a, variant: o, onSelect: s } = e,
    c;
  t[0] === a ? (c = t[1]) : ((c = (0, $.jsx)(d, { theme: a })), (t[0] = a), (t[1] = c));
  let l;
  t[2] === i.label
    ? (l = t[3])
    : ((l = (0, $.jsx)(`span`, {
        className: `truncate text-sm leading-[18px]`,
        children: i.label,
      })),
      (t[2] = i.label),
      (t[3] = l));
  let u;
  t[4] !== n || t[5] !== c || t[6] !== l
    ? ((u = (0, $.jsxs)(bt, {
        "aria-label": n,
        className: `h-9 w-[11rem] justify-between rounded-lg border border-token-border bg-token-bg-primary px-2.5 py-0 shadow-sm max-sm:w-full`,
        contentClassName: `gap-2`,
        chevronClassName: `icon-xs opacity-65`,
        children: [c, l],
      })),
      (t[4] = n),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let f;
  t[8] !== r || t[9] !== s || t[10] !== i || t[11] !== a || t[12] !== o
    ? ((f = (0, $.jsx)(Gt, {
        codeThemes: r,
        selectedCodeTheme: i,
        theme: a,
        variant: o,
        onSelect: s,
      })),
      (t[8] = r),
      (t[9] = s),
      (t[10] = i),
      (t[11] = a),
      (t[12] = o),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== u || t[15] !== f
      ? ((p = (0, $.jsx)(Ze, {
          align: `end`,
          contentWidth: `menuWide`,
          triggerButton: u,
          children: f,
        })),
        (t[14] = u),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function Gt(e) {
  let t = (0, Z.c)(20),
    { codeThemes: n, selectedCodeTheme: r, theme: i, variant: a, onSelect: o } = e,
    s;
  if (t[0] !== n || t[1] !== a) {
    let e;
    (t[3] === a
      ? (e = t[4])
      : ((e = (e) => ({
          queryKey: [`code-theme-preview-seed`, a, e.id],
          queryFn: () => Se(e.id, a),
          staleTime: 1 / 0,
        })),
        (t[3] = a),
        (t[4] = e)),
      (s = n.map(e)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = s));
  } else s = t[2];
  let c;
  t[5] === s ? (c = t[6]) : ((c = { queries: s }), (t[5] = s), (t[6] = c));
  let l = P(c),
    u;
  if (t[7] !== n || t[8] !== o || t[9] !== r || t[10] !== i || t[11] !== l) {
    let e;
    (t[13] !== o || t[14] !== r || t[15] !== i || t[16] !== l
      ? ((e = (e, t) => {
          let n = l[t]?.data;
          return (0, $.jsx)(
            Xe.Item,
            {
              RightIcon: e.id === r.id ? He : void 0,
              onSelect: () => {
                o(e.id);
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(d, {
                    theme: {
                      accent: n?.accent ?? i.accent,
                      ink: n?.ink ?? i.ink,
                      surface: n?.surface ?? i.surface,
                    },
                  }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: e.label }),
                ],
              }),
            },
            e.id,
          );
        }),
        (t[13] = o),
        (t[14] = r),
        (t[15] = i),
        (t[16] = l),
        (t[17] = e))
      : (e = t[17]),
      (u = n.map(e)),
      (t[7] = n),
      (t[8] = o),
      (t[9] = r),
      (t[10] = i),
      (t[11] = l),
      (t[12] = u));
  } else u = t[12];
  let f;
  return (
    t[18] === u
      ? (f = t[19])
      : ((f = (0, $.jsx)(Xe.Section, {
          children: (0, $.jsx)(`div`, { className: `max-h-80 overflow-y-auto pb-1`, children: u }),
        })),
        (t[18] = u),
        (t[19] = f)),
    f
  );
}
function Kt(e) {
  let t = (0, Z.c)(36),
    { ariaLabel: n, value: r, onChange: i } = e,
    [a, o] = (0, Q.useState)(!1),
    [s, c] = (0, Q.useState)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        (o(e), e || c(null));
      }),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === r ? (u = t[2]) : ((u = en(r)), (t[1] = r), (t[2] = u));
  let d;
  t[3] !== u || t[4] !== r
    ? ((d = { backgroundColor: r, color: u }), (t[3] = u), (t[4] = r), (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === r ? (f = t[7]) : ((f = en(r)), (t[6] = r), (t[7] = f));
  let p = `1px solid color-mix(in srgb, ${f} 18%, ${r})`,
    m;
  t[8] !== p || t[9] !== r
    ? ((m = { backgroundColor: r, border: p }), (t[8] = p), (t[9] = r), (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(`span`, { "aria-hidden": !0, className: `sr-only` })), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === m
    ? (g = t[13])
    : ((g = (0, $.jsx)(Qe, {
        asChild: !0,
        children: (0, $.jsx)(`button`, {
          className: `h-3.5 w-3.5 shrink-0 rounded-full disabled:cursor-default`,
          style: m,
          type: `button`,
          children: h,
        }),
      })),
      (t[12] = m),
      (t[13] = g));
  let _ = s ?? r,
    v;
  t[14] === _ ? (v = t[15]) : ((v = _.toUpperCase()), (t[14] = _), (t[15] = v));
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        c(null);
      }),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] === i
    ? (b = t[18])
    : ((b = (e) => {
        let t = tn(e.target.value),
          n = nn(t);
        if (n == null) {
          c(t);
          return;
        }
        (c(null), i(n));
      }),
      (t[17] = i),
      (t[18] = b));
  let x;
  t[19] !== n || t[20] !== v || t[21] !== b
    ? ((x = (0, $.jsx)(`input`, {
        "aria-label": n,
        className: `min-w-0 flex-1 bg-transparent text-xs uppercase tabular-nums outline-hidden disabled:cursor-default`,
        spellCheck: !1,
        type: `text`,
        value: v,
        onClick: Yt,
        onBlur: y,
        onChange: b,
        onPointerDown: Jt,
      })),
      (t[19] = n),
      (t[20] = v),
      (t[21] = b),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== x || t[24] !== d || t[25] !== g
    ? ((S = (0, $.jsxs)(`div`, {
        className: `relative flex h-7 w-full max-w-[8.5rem] items-center gap-2 rounded-lg border border-transparent px-2 shadow-sm max-sm:max-w-none`,
        style: d,
        children: [g, x],
      })),
      (t[23] = x),
      (t[24] = d),
      (t[25] = g),
      (t[26] = S))
    : (S = t[26]);
  let C;
  t[27] === i
    ? (C = t[28])
    : ((C = (e) => {
        i(e);
      }),
      (t[27] = i),
      (t[28] = C));
  let w;
  t[29] !== C || t[30] !== r
    ? ((w = (0, $.jsx)($e, {
        align: `end`,
        className: `w-auto rounded-xl p-3`,
        sideOffset: 8,
        onOpenAutoFocus: qt,
        children: (0, $.jsx)(at, { className: `h-34 w-34`, color: r, onChange: C }),
      })),
      (t[29] = C),
      (t[30] = r),
      (t[31] = w))
    : (w = t[31]);
  let T;
  return (
    t[32] !== a || t[33] !== S || t[34] !== w
      ? ((T = (0, $.jsxs)(et, { open: a, onOpenChange: l, children: [S, w] })),
        (t[32] = a),
        (t[33] = S),
        (t[34] = w),
        (t[35] = T))
      : (T = t[35]),
    T
  );
}
function qt(e) {
  e.preventDefault();
}
function Jt(e) {
  e.stopPropagation();
}
function Yt(e) {
  e.stopPropagation();
}
function Xt(e) {
  let t = (0, Z.c)(10),
    { ariaLabel: n, placeholder: r, value: i, onChange: a } = e,
    o = `${n}:${i ?? ``}`,
    s = i ?? ``,
    c,
    l;
  t[0] === a
    ? ((c = t[1]), (l = t[2]))
    : ((c = (e) => {
        let t = e.currentTarget.value.trim();
        ((e.currentTarget.value = t), a(t.length > 0 ? t : null));
      }),
      (l = (e) => {
        if (e.key !== `Enter`) return;
        e.preventDefault();
        let t = e.currentTarget.value.trim();
        ((e.currentTarget.value = t), a(t.length > 0 ? t : null));
      }),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l));
  let u;
  return (
    t[3] !== n || t[4] !== r || t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== l
      ? ((u = (0, $.jsx)(
          `input`,
          {
            "aria-label": n,
            className: `focus-visible:ring-token-focus h-7 w-full max-w-[8.5rem] rounded-lg border border-token-border bg-token-input-background px-2 text-xs text-token-text-primary shadow-sm outline-none focus-visible:ring-2 max-sm:max-w-none`,
            defaultValue: s,
            placeholder: r,
            spellCheck: !1,
            type: `text`,
            onBlur: c,
            onKeyDown: l,
          },
          o,
        )),
        (t[3] = n),
        (t[4] = r),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Zt(e) {
  let t = (0, Z.c)(14),
    { ariaLabel: n, theme: r, value: i, onChange: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = (e) => {
        a(Number(e.target.value));
      }),
      (t[0] = a),
      (t[1] = o));
  let s = `linear-gradient(90deg, color-mix(in srgb, ${r.accent} 35%, ${r.surface}) 0%, ${r.accent} 32%, ${r.accent} 100%)`,
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = { background: s, color: `var(--color-token-foreground)` }), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== n || t[5] !== o || t[6] !== c || t[7] !== i
    ? ((l = (0, $.jsx)(`input`, {
        "aria-label": n,
        className: `h-0.5 flex-1 appearance-none rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-transparent [&::-moz-range-thumb]:bg-current [&::-moz-range-thumb]:shadow-sm [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-transparent [&::-webkit-slider-thumb]:bg-current [&::-webkit-slider-thumb]:shadow-sm`,
        max: 100,
        min: 0,
        onChange: o,
        step: 1,
        style: c,
        type: `range`,
        value: i,
      })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = c),
      (t[7] = i),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === i
    ? (u = t[10])
    : ((u = (0, $.jsx)(`span`, {
        className: `w-9 text-right text-sm text-token-text-primary tabular-nums`,
        children: i,
      })),
      (t[9] = i),
      (t[10] = u));
  let d;
  return (
    t[11] !== l || t[12] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex h-9 min-w-[12rem] items-center gap-2.5 max-sm:w-full max-sm:min-w-0`,
          children: [l, u],
        })),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function Qt(e) {
  return e === `light`
    ? (0, $.jsx)(I, {
        id: `settings.general.appearance.lightChromeTheme`,
        defaultMessage: `Light theme`,
        description: `Label for light chrome theme controls in appearance settings`,
      })
    : (0, $.jsx)(I, {
        id: `settings.general.appearance.darkChromeTheme`,
        defaultMessage: `Dark theme`,
        description: `Label for dark chrome theme controls in appearance settings`,
      });
}
function $t(e, t) {
  return t === `light`
    ? e.formatMessage({
        id: `settings.general.appearance.theme.light`,
        defaultMessage: `Light`,
        description: `Light theme option`,
      })
    : e.formatMessage({
        id: `settings.general.appearance.theme.dark`,
        defaultMessage: `Dark`,
        description: `Dark theme option`,
      });
}
function en(e) {
  let t = rn(e);
  return t == null || (t.red * 0.2126 + t.green * 0.7152 + t.blue * 0.0722) / 255 > 0.62
    ? `#101010`
    : `#ffffff`;
}
function tn(e) {
  let t = e
    .toUpperCase()
    .replace(/[^0-9A-F#]/g, ``)
    .replaceAll(`#`, ``);
  return t.length === 0 ? `#` : `#${t.slice(0, 6)}`;
}
function nn(e) {
  return /^#[0-9A-F]{6}$/.test(e) ? e.toLowerCase() : null;
}
function rn(e) {
  return /^#[0-9a-fA-F]{6}$/.test(e)
    ? {
        blue: Number.parseInt(e.slice(5, 7), 16),
        green: Number.parseInt(e.slice(3, 5), 16),
        red: Number.parseInt(e.slice(1, 3), 16),
      }
    : null;
}
var an = `71832722`;
function on(e) {
  return Ot(e, We);
}
function sn() {
  let e = (0, Z.c)(43),
    t = S(D),
    n = F(),
    r = C(vt),
    i;
  e[0] === r ? (i = e[1]) : ((i = gt(r)), (e[0] = r), (e[1] = i));
  let a = i,
    o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { conversationId: null, hostId: g }), (e[2] = o))
    : (o = e[2]);
  let s = he(o),
    c = de(),
    l;
  if (e[3] !== s || e[4] !== c) {
    let t = ge(c, s);
    ((l = ct({ ...s, defaultWorkspaceWriteMode: t })), (e[3] = s), (e[4] = c), (e[5] = l));
  } else l = e[5];
  let { showGuardianOption: u } = l,
    { value: d } = ee(an),
    f;
  e[6] === d ? (f = e[7]) : ((f = on(d)), (e[6] = d), (e[7] = f));
  let p = f,
    m;
  e[8] === p
    ? (m = e[9])
    : ((m = (e) =>
        (0, $.jsx)(`a`, {
          className: `inline-flex text-token-text-link-foreground`,
          href: p,
          target: `_blank`,
          rel: `noreferrer`,
          children: e,
        })),
      (e[8] = p),
      (e[9] = m));
  let h = m,
    _;
  e[10] === t
    ? (_ = e[11])
    : ((_ = (e, n) => {
        t.set(vt, (t) => _t({ mode: e, visible: n, settings: t }));
      }),
      (e[10] = t),
      (e[11] = _));
  let v = _,
    y;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(J.Header, { title: (0, $.jsx)(I, { ...Y.permissions }) })), (e[12] = y))
    : (y = e[12]);
  let b, x;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(I, { ...Y.defaultPermissions })),
      (x = (0, $.jsx)(I, {
        id: `settings.agent.permissionsMode.default.description`,
        defaultMessage: `By default, Codex can read and edit files in its workspace. It can ask for additional access when needed`,
        description: `Description for default permissions mode`,
      })),
      (e[13] = b),
      (e[14] = x))
    : ((b = e[13]), (x = e[14]));
  let w;
  e[15] === n
    ? (w = e[16])
    : ((w = n.formatMessage({
        id: `settings.agent.permissionsMode.default.toggle`,
        defaultMessage: `Default permissions are always shown`,
        description: `Accessible label for disabled default permissions toggle`,
      })),
      (e[15] = n),
      (e[16] = w));
  let T;
  e[17] === w
    ? (T = e[18])
    : ((T = (0, $.jsx)(q, {
        label: b,
        description: x,
        control: (0, $.jsx)(K, { checked: !0, disabled: !0, onChange: cn, ariaLabel: w }),
      })),
      (e[17] = w),
      (e[18] = T));
  let E;
  e[19] !== n || e[20] !== h || e[21] !== v || e[22] !== u || e[23] !== a
    ? ((E =
        u &&
        (0, $.jsx)(q, {
          label: (0, $.jsx)(I, {
            id: `settings.agent.permissionsMode.autoReview.title`,
            defaultMessage: `Auto-review`,
            description: `Title for the Auto-review composer visibility row`,
          }),
          description: (0, $.jsx)(I, {
            id: `settings.agent.permissionsMode.autoReview.description`,
            defaultMessage: `Codex can read and edit files in its workspace. Codex automatically reviews requests for additional access. Auto-review can make mistakes. <a>Learn more</a> about elevated risks.`,
            description: `Description for Auto-review permissions mode`,
            values: { a: h },
          }),
          control: (0, $.jsx)(K, {
            checked: a[`guardian-approvals`],
            onChange: (e) => {
              v(`guardian-approvals`, e);
            },
            ariaLabel: n.formatMessage({
              id: `settings.agent.permissionsMode.autoReview.toggle`,
              defaultMessage: `Show Auto-review in the composer`,
              description: `Accessible label for Auto-review visibility toggle`,
            }),
          }),
        })),
      (e[19] = n),
      (e[20] = h),
      (e[21] = v),
      (e[22] = u),
      (e[23] = a),
      (e[24] = E))
    : (E = e[24]);
  let O;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(I, { ...Y.fullAccess })), (e[25] = O))
    : (O = e[25]);
  let k;
  e[26] === h
    ? (k = e[27])
    : ((k = (0, $.jsx)(I, {
        id: `settings.agent.permissionsMode.fullAccess.description`,
        defaultMessage: `When Codex runs with full access, it can edit any file on your computer and run commands with network, without your approval. This significantly increases the risk of data loss, leaks, or unexpected behavior. <a>Learn more</a> about elevated risks.`,
        description: `Description for full access permissions mode`,
        values: { a: h },
      })),
      (e[26] = h),
      (e[27] = k));
  let A = a[`full-access`],
    j;
  e[28] === v
    ? (j = e[29])
    : ((j = (e) => {
        v(`full-access`, e);
      }),
      (e[28] = v),
      (e[29] = j));
  let M;
  e[30] === n
    ? (M = e[31])
    : ((M = n.formatMessage({
        id: `settings.agent.permissionsMode.fullAccess.toggle`,
        defaultMessage: `Show Full access in the composer`,
        description: `Accessible label for full access visibility toggle`,
      })),
      (e[30] = n),
      (e[31] = M));
  let N;
  e[32] !== A || e[33] !== j || e[34] !== M
    ? ((N = (0, $.jsx)(K, { checked: A, onChange: j, ariaLabel: M })),
      (e[32] = A),
      (e[33] = j),
      (e[34] = M),
      (e[35] = N))
    : (N = e[35]);
  let P;
  e[36] !== k || e[37] !== N
    ? ((P = (0, $.jsx)(q, { label: O, description: k, control: N })),
      (e[36] = k),
      (e[37] = N),
      (e[38] = P))
    : (P = e[38]);
  let L;
  return (
    e[39] !== T || e[40] !== E || e[41] !== P
      ? ((L = (0, $.jsxs)(J, {
          id: X.permissions,
          className: `gap-2`,
          children: [y, (0, $.jsxs)(Ct, { children: [T, E, P] })],
        })),
        (e[39] = T),
        (e[40] = E),
        (e[41] = P),
        (e[42] = L))
      : (L = e[42]),
    L
  );
}
function cn() {}
function ln() {
  let e = (0, Z.c)(55),
    t = S(D),
    n = F(),
    r = U(s.turnMode),
    i = U(s.permissionsEnabled),
    a = U(s.questionsEnabled),
    o = r ?? `unfocused`,
    c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(I, { ...Y.never })), (e[0] = c))
    : (c = e[0]);
  let l;
  e[1] === n ? (l = e[2]) : ((l = n.formatMessage(Y.never)), (e[1] = n), (e[2] = l));
  let u;
  e[3] === l ? (u = e[4]) : ((u = { id: `off`, label: c, ariaLabel: l }), (e[3] = l), (e[4] = u));
  let d;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(I, { ...Y.onlyWhenUnfocused })), (e[5] = d))
    : (d = e[5]);
  let f;
  e[6] === n ? (f = e[7]) : ((f = n.formatMessage(Y.onlyWhenUnfocused)), (e[6] = n), (e[7] = f));
  let p;
  e[8] === f
    ? (p = e[9])
    : ((p = { id: `unfocused`, label: d, ariaLabel: f }), (e[8] = f), (e[9] = p));
  let m;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(I, { ...Y.always })), (e[10] = m))
    : (m = e[10]);
  let h;
  e[11] === n ? (h = e[12]) : ((h = n.formatMessage(Y.always)), (e[11] = n), (e[12] = h));
  let g;
  e[13] === h
    ? (g = e[14])
    : ((g = { id: `always`, label: m, ariaLabel: h }), (e[13] = h), (e[14] = g));
  let _;
  e[15] !== u || e[16] !== p || e[17] !== g
    ? ((_ = [u, p, g]), (e[15] = u), (e[16] = p), (e[17] = g), (e[18] = _))
    : (_ = e[18]);
  let v = _,
    y,
    b;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(I, { ...Y.turnCompletionNotifications })),
      (b = (0, $.jsx)(I, {
        id: `notifications.turnMode.description`,
        defaultMessage: `Set when Codex alerts you that it's finished`,
        description: `Description for turn completion notification settings`,
      })),
      (e[19] = y),
      (e[20] = b))
    : ((y = e[19]), (b = e[20]));
  let x = v.find((e) => e.id === o)?.label,
    C;
  e[21] === x
    ? (C = e[22])
    : ((C = (0, $.jsx)(bt, {
        children: (0, $.jsx)(`span`, { className: `truncate`, children: x }),
      })),
      (e[21] = x),
      (e[22] = C));
  let w;
  e[23] !== t || e[24] !== o || e[25] !== v
    ? ((w = (0, $.jsx)(`div`, {
        className: `max-h-80 overflow-y-auto`,
        children: v.map((e) => {
          let n = e.id === o;
          return (0, $.jsx)(
            Xe.Item,
            {
              RightIcon: n ? He : void 0,
              onSelect: () => {
                W(t, s.turnMode, e.id);
              },
              "aria-label": e.ariaLabel,
              children: (0, $.jsx)(`span`, { className: `truncate`, children: e.label }),
            },
            e.id,
          );
        }),
      })),
      (e[23] = t),
      (e[24] = o),
      (e[25] = v),
      (e[26] = w))
    : (w = e[26]);
  let T;
  e[27] !== C || e[28] !== w
    ? ((T = (0, $.jsx)(q, {
        label: y,
        description: b,
        control: (0, $.jsx)(Ze, {
          contentWidth: `menuWide`,
          align: `end`,
          triggerButton: C,
          children: w,
        }),
      })),
      (e[27] = C),
      (e[28] = w),
      (e[29] = T))
    : (T = e[29]);
  let E, O;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(I, { ...Y.permissionNotifications })),
      (O = (0, $.jsx)(I, {
        id: `notifications.permissions.description`,
        defaultMessage: `Show alerts when notification permissions are required`,
        description: `Description for permission notification toggle`,
      })),
      (e[30] = E),
      (e[31] = O))
    : ((E = e[30]), (O = e[31]));
  let k = i ?? !0,
    A;
  e[32] === t
    ? (A = e[33])
    : ((A = (e) => {
        W(t, s.permissionsEnabled, e);
      }),
      (e[32] = t),
      (e[33] = A));
  let j;
  e[34] === n
    ? (j = e[35])
    : ((j = n.formatMessage(Y.permissionNotifications)), (e[34] = n), (e[35] = j));
  let M;
  e[36] !== k || e[37] !== A || e[38] !== j
    ? ((M = (0, $.jsx)(q, {
        label: E,
        description: O,
        control: (0, $.jsx)(K, { checked: k, onChange: A, ariaLabel: j }),
      })),
      (e[36] = k),
      (e[37] = A),
      (e[38] = j),
      (e[39] = M))
    : (M = e[39]);
  let N, P;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(I, { ...Y.questionNotifications })),
      (P = (0, $.jsx)(I, {
        id: `notifications.questions.description`,
        defaultMessage: `Show alerts when input is needed to continue`,
        description: `Description for question notification toggle`,
      })),
      (e[40] = N),
      (e[41] = P))
    : ((N = e[40]), (P = e[41]));
  let L = a ?? !0,
    R;
  e[42] === t
    ? (R = e[43])
    : ((R = (e) => {
        W(t, s.questionsEnabled, e);
      }),
      (e[42] = t),
      (e[43] = R));
  let z;
  e[44] === n
    ? (z = e[45])
    : ((z = n.formatMessage(Y.questionNotifications)), (e[44] = n), (e[45] = z));
  let B;
  e[46] !== L || e[47] !== R || e[48] !== z
    ? ((B = (0, $.jsx)(q, {
        label: N,
        description: P,
        control: (0, $.jsx)(K, { checked: L, onChange: R, ariaLabel: z }),
      })),
      (e[46] = L),
      (e[47] = R),
      (e[48] = z),
      (e[49] = B))
    : (B = e[49]);
  let V;
  e[50] === Symbol.for(`react.memo_cache_sentinel`) ? ((V = null), (e[50] = V)) : (V = e[50]);
  let ee;
  return (
    e[51] !== T || e[52] !== M || e[53] !== B
      ? ((ee = (0, $.jsxs)($.Fragment, { children: [T, M, B, V] })),
        (e[51] = T),
        (e[52] = M),
        (e[53] = B),
        (e[54] = ee))
      : (ee = e[54]),
    ee
  );
}
function un() {
  let e = (0, Z.c)(12),
    t = S(D),
    n = F(),
    { authMethod: a, email: o, planAtLogin: s } = ae(),
    c = a === `chatgpt`,
    l;
  e[0] === c ? (l = e[1]) : ((l = { queryConfig: { enabled: c } }), (e[0] = c), (e[1] = l));
  let { data: u } = A(`account-info`, l),
    d = U(i.enabled);
  if (!r({ authMethod: a, email: u?.email ?? o, plan: u?.plan ?? s })) return null;
  let f, p;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(I, {
        id: `settings.agent.ambientSuggestions.groupTitle`,
        defaultMessage: `Suggested prompts`,
        description: `Label for the ambient suggestions setting row`,
      })),
      (p = (0, $.jsx)(I, {
        id: `settings.agent.ambientSuggestions.rowLabel`,
        defaultMessage: `Suggest what to do next by searching project files and connected apps`,
        description: `Description for the ambient suggestions setting row`,
      })),
      (e[2] = f),
      (e[3] = p))
    : ((f = e[2]), (p = e[3]));
  let m = d === !0,
    h;
  e[4] === n
    ? (h = e[5])
    : ((h = n.formatMessage({
        id: `settings.agent.ambientSuggestions.toggleLabel`,
        defaultMessage: `Enable ambient suggestions`,
        description: `Aria label for the ambient suggestions toggle`,
      })),
      (e[4] = n),
      (e[5] = h));
  let g;
  e[6] === t
    ? (g = e[7])
    : ((g = (e) => {
        W(t, i.enabled, e);
      }),
      (e[6] = t),
      (e[7] = g));
  let _;
  return (
    e[8] !== m || e[9] !== h || e[10] !== g
      ? ((_ = (0, $.jsx)(q, {
          label: f,
          description: p,
          control: (0, $.jsx)(K, { checked: m, ariaLabel: h, onChange: g }),
        })),
        (e[8] = m),
        (e[9] = h),
        (e[10] = g),
        (e[11] = _))
      : (_ = e[11]),
    _
  );
}
var dn = L({
  description: {
    id: `settings.agent.speed.description`,
    defaultMessage: `Choose the inference tier used across chats, subagents, and compaction`,
    description: `Description for the speed setting`,
  },
  label: {
    id: `settings.agent.speed.label`,
    defaultMessage: `Speed`,
    description: `Label for the Fast mode speed setting`,
  },
});
function fn() {
  let e = (0, Z.c)(23),
    t = F(),
    { isServiceTierAllowed: n } = ye(),
    { serviceTierSettings: r, setServiceTier: i } = be();
  if (!n || r.availableOptions.length <= 1) return null;
  let a;
  e[0] !== r.availableOptions || e[1] !== r.selectedServiceTier
    ? ((a =
        r.availableOptions.find((e) => e.value === r.selectedServiceTier) ?? r.availableOptions[0]),
      (e[0] = r.availableOptions),
      (e[1] = r.selectedServiceTier),
      (e[2] = a))
    : (a = e[2]);
  let o = a,
    s,
    c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...dn.label })),
      (c = (0, $.jsx)(I, { ...dn.description })),
      (e[3] = s),
      (e[4] = c))
    : ((s = e[3]), (c = e[4]));
  let l = r.isLoading,
    u;
  e[5] !== t || e[6] !== o.label
    ? ((u = ut(t, o.label)), (e[5] = t), (e[6] = o.label), (e[7] = u))
    : (u = e[7]);
  let d;
  e[8] !== r.isLoading || e[9] !== u
    ? ((d = (0, $.jsx)(bt, { disabled: l, children: u })),
      (e[8] = r.isLoading),
      (e[9] = u),
      (e[10] = d))
    : (d = e[10]);
  let f;
  if (
    e[11] !== r.availableOptions ||
    e[12] !== r.isLoading ||
    e[13] !== r.selectedServiceTier ||
    e[14] !== i
  ) {
    let t;
    (e[16] !== r.isLoading || e[17] !== r.selectedServiceTier || e[18] !== i
      ? ((t = (e) => {
          let t = e.value === r.selectedServiceTier;
          return (0, $.jsx)(
            Xe.Item,
            {
              disabled: r.isLoading,
              LeftIcon: pt(e.iconKind),
              RightIcon: t ? He : void 0,
              SubText: (0, $.jsx)(`span`, {
                className: `text-token-description-foreground`,
                children: dt(e.description),
              }),
              onSelect: () => {
                i(e.value, `settings`);
              },
              children: dt(e.label),
            },
            e.value ?? `standard`,
          );
        }),
        (e[16] = r.isLoading),
        (e[17] = r.selectedServiceTier),
        (e[18] = i),
        (e[19] = t))
      : (t = e[19]),
      (f = r.availableOptions.map(t)),
      (e[11] = r.availableOptions),
      (e[12] = r.isLoading),
      (e[13] = r.selectedServiceTier),
      (e[14] = i),
      (e[15] = f));
  } else f = e[15];
  let p;
  return (
    e[20] !== d || e[21] !== f
      ? ((p = (0, $.jsx)(q, {
          label: s,
          description: c,
          control: (0, $.jsx)(Ze, {
            contentWidth: `menuWide`,
            align: `end`,
            triggerButton: d,
            children: f,
          }),
        })),
        (e[20] = d),
        (e[21] = f),
        (e[22] = p))
      : (p = e[22]),
    p
  );
}
var pn = [
  { id: `coding`, icon: Te, value: me },
  { id: `everyday`, icon: wt, value: fe },
];
function mn() {
  let e = (0, Z.c)(26),
    t = S(D),
    n = F(),
    r = C(B),
    i = U(c.conversationDetailMode),
    a,
    o,
    s,
    l,
    u,
    d,
    f,
    p;
  if (e[0] !== i || e[1] !== n || e[2] !== r || e[3] !== t) {
    let m = pe(i),
      g = m === `STEPS_PROSE` ? `everyday` : `coding`;
    ((a = J),
      (d = X.workMode),
      (f = `gap-4`),
      e[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, $.jsx)(J.Header, {
            title: (0, $.jsx)(I, { ...Y.workMode }),
            subtitle: (0, $.jsx)(I, {
              id: `settings.workMode.groupDescription`,
              defaultMessage: `Choose how much technical detail Codex shows`,
              description: `Description for the work mode settings section`,
            }),
          })),
          (e[12] = p))
        : (p = e[12]),
      (o = `grid grid-cols-2 gap-3 max-sm:grid-cols-1`),
      (s = `radiogroup`),
      e[13] === n
        ? (l = e[14])
        : ((l = n.formatMessage({
            id: `settings.workMode.radioGroup`,
            defaultMessage: `Work mode`,
            description: `Accessible label for work mode settings options`,
          })),
          (e[13] = n),
          (e[14] = l)),
      (u = pn.map((e) =>
        (0, $.jsx)(
          hn,
          {
            id: e.id,
            Icon: e.icon,
            selected: g === e.id,
            onSelect: () => {
              (W(t, c.conversationDetailMode, e.value),
                r.logProductEvent(h, {
                  previousWorkMode: g,
                  selectedWorkMode: e.id,
                  previousThreadDetailLevel: m,
                  selectedThreadDetailLevel: e.value,
                }));
            },
          },
          e.id,
        ),
      )),
      (e[0] = i),
      (e[1] = n),
      (e[2] = r),
      (e[3] = t),
      (e[4] = a),
      (e[5] = o),
      (e[6] = s),
      (e[7] = l),
      (e[8] = u),
      (e[9] = d),
      (e[10] = f),
      (e[11] = p));
  } else
    ((a = e[4]),
      (o = e[5]),
      (s = e[6]),
      (l = e[7]),
      (u = e[8]),
      (d = e[9]),
      (f = e[10]),
      (p = e[11]));
  let m;
  e[15] !== o || e[16] !== s || e[17] !== l || e[18] !== u
    ? ((m = (0, $.jsx)(`div`, { className: o, role: s, "aria-label": l, children: u })),
      (e[15] = o),
      (e[16] = s),
      (e[17] = l),
      (e[18] = u),
      (e[19] = m))
    : (m = e[19]);
  let g;
  return (
    e[20] !== a || e[21] !== d || e[22] !== f || e[23] !== p || e[24] !== m
      ? ((g = (0, $.jsxs)(a, { id: d, className: f, children: [p, m] })),
        (e[20] = a),
        (e[21] = d),
        (e[22] = f),
        (e[23] = p),
        (e[24] = m),
        (e[25] = g))
      : (g = e[25]),
    g
  );
}
function hn(e) {
  let t = (0, Z.c)(27),
    { Icon: n, id: r, selected: i, onSelect: a } = e,
    o = i
      ? `border-transparent bg-token-list-hover-background`
      : `border-token-border bg-token-main-surface-primary hover:bg-token-list-hover-background`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = b(
        `cursor-interaction flex min-h-[62px] min-w-0 items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border disabled:cursor-not-allowed disabled:opacity-70`,
        o,
      )),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, $.jsx)(n, { className: `size-5 shrink-0 text-token-icon-foreground` })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-sm text-token-text-primary`,
        children: (0, $.jsx)(gn, { id: r }),
      })),
      (t[4] = r),
      (t[5] = l));
  let u;
  t[6] === r
    ? (u = t[7])
    : ((u = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-sm text-token-text-secondary`,
        children: (0, $.jsx)(_n, { id: r }),
      })),
      (t[6] = r),
      (t[7] = u));
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [l, u],
      })),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f = i
      ? `border-2 border-token-charts-blue bg-token-charts-blue`
      : `border border-token-description-foreground/40`,
    p;
  t[11] === f
    ? (p = t[12])
    : ((p = b(`flex size-[17px] shrink-0 items-center justify-center rounded-full`, f)),
      (t[11] = f),
      (t[12] = p));
  let m = i ? `opacity-100` : `opacity-0`,
    h;
  t[13] === m
    ? (h = t[14])
    : ((h = b(`size-[7px] rounded-full bg-[color:var(--gray-0)]`, m)), (t[13] = m), (t[14] = h));
  let g;
  t[15] === h
    ? (g = t[16])
    : ((g = (0, $.jsx)(`span`, { className: h })), (t[15] = h), (t[16] = g));
  let _;
  t[17] !== g || t[18] !== p
    ? ((_ = (0, $.jsx)(`span`, { className: p, "aria-hidden": `true`, children: g })),
      (t[17] = g),
      (t[18] = p),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== a || t[21] !== i || t[22] !== _ || t[23] !== s || t[24] !== c || t[25] !== d
      ? ((v = (0, $.jsxs)(`button`, {
          type: `button`,
          role: `radio`,
          "aria-checked": i,
          className: s,
          onClick: a,
          children: [c, d, _],
        })),
        (t[20] = a),
        (t[21] = i),
        (t[22] = _),
        (t[23] = s),
        (t[24] = c),
        (t[25] = d),
        (t[26] = v))
      : (v = t[26]),
    v
  );
}
function gn(e) {
  let t = (0, Z.c)(2),
    { id: n } = e;
  switch (n) {
    case `coding`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(I, { ...Y.forCoding })), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `everyday`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(I, { ...Y.forEverydayWork })), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function _n(e) {
  let t = (0, Z.c)(2),
    { id: n } = e;
  switch (n) {
    case `coding`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(I, {
              id: `settings.workMode.coding.description`,
              defaultMessage: `More technical responses and control`,
              description: `Description for the coding work mode setting`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `everyday`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(I, {
              id: `settings.workMode.everyday.description`,
              defaultMessage: `Same power, less technical detail`,
              description: `Description for the everyday work mode setting`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
var vn = [`powershell`, `commandPrompt`, `gitBash`, `wsl`],
  yn,
  bn = ``,
  xn = [bn],
  Sn = [`Jane Doe`, `Acme Widget`, `checkout-form.tsx`, `useCartState`];
function Cn() {
  let e = (0, Z.c)(50),
    t = te(`2423536643`),
    n = te(`1244621283`),
    r = te(`1372061905`),
    i = te(`4100906017`),
    a = te(`2425897452`),
    o = te(qe),
    s = te(Ke),
    c = te(Je),
    l;
  e[0] !== o || e[1] !== s
    ? ((l = Ge({ isExternalAgentImportEnabled: o, isExternalAgentOnboardingImportEnabled: s })),
      (e[0] = o),
      (e[1] = s),
      (e[2] = l))
    : (l = e[2]);
  let d = l,
    f = le(g),
    p = C(ie),
    m;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(yt, { slug: `general-settings` })), (e[3] = m))
    : (m = e[3]);
  let h;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsxs)(G, { electron: !0, children: [(0, $.jsx)(mn, {}), (0, $.jsx)(sn, {})] })),
      (e[4] = h))
    : (h = e[4]);
  let _;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(G, {
        electron: !0,
        children: (0, $.jsx)(J.Header, {
          title: (0, $.jsx)(I, {
            id: `settings.general.groupTitle`,
            defaultMessage: `General`,
            description: `Heading for the general settings group`,
          }),
        }),
      })),
      (e[5] = _))
    : (_ = e[5]);
  let v, y, b, x;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)(Hn, {}) })),
      (y = (0, $.jsx)(Kn, {})),
      (b = (0, $.jsx)(Gn, {})),
      (x = (0, $.jsx)(Yn, {})),
      (e[6] = v),
      (e[7] = y),
      (e[8] = b),
      (e[9] = x))
    : ((v = e[6]), (y = e[7]), (b = e[8]), (x = e[9]));
  let S;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)(Vn, {}) })), (e[10] = S))
    : (S = e[10]);
  let w;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)($n, {}) })), (e[11] = w))
    : (w = e[11]);
  let T;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)(er, {}) })), (e[12] = T))
    : (T = e[12]);
  let E, D, O;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)(dr, {}) })),
      (D = (0, $.jsx)(fn, {})),
      (O = (0, $.jsx)(ar, {})),
      (e[13] = E),
      (e[14] = D),
      (e[15] = O))
    : ((E = e[13]), (D = e[14]), (O = e[15]));
  let k;
  e[16] === a
    ? (k = e[17])
    : ((k = a ? (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)(un, {}) }) : null),
      (e[16] = a),
      (e[17] = k));
  let A = p.data?.roots,
    j;
  e[18] !== p.isLoading || e[19] !== f || e[20] !== c || e[21] !== d || e[22] !== A
    ? ((j = (0, $.jsx)(G, {
        electron: !0,
        children: (0, $.jsx)(u, {
          variant: `general-row`,
          codexHome: f,
          hostId: g,
          isActiveWorkspaceLoading: p.isLoading,
          isCoworkMigrationEnabled: c,
          isExternalAgentImportEnabled: d,
          workspaceRoots: A,
        }),
      })),
      (e[18] = p.isLoading),
      (e[19] = f),
      (e[20] = c),
      (e[21] = d),
      (e[22] = A),
      (e[23] = j))
    : (j = e[23]);
  let M;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(G, { electron: !0, children: (0, $.jsx)(Tn, {}) })), (e[24] = M))
    : (M = e[24]);
  let N;
  e[25] !== k || e[26] !== j
    ? ((N = (0, $.jsxs)(J, {
        className: `gap-2`,
        children: [
          _,
          (0, $.jsx)(J.Content, {
            children: (0, $.jsxs)(Ct, { children: [v, y, b, x, S, w, T, E, D, O, k, j, M] }),
          }),
        ],
      })),
      (e[25] = k),
      (e[26] = j),
      (e[27] = N))
    : (N = e[27]);
  let P;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(I, {
          id: `settings.general.composer.groupTitle`,
          defaultMessage: `Composer`,
          description: `Heading for the Composer group on the General settings page`,
        }),
      })),
      (e[28] = P))
    : (P = e[28]);
  let F;
  e[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsxs)(J, {
        children: [
          P,
          (0, $.jsx)(J.Content, {
            children: (0, $.jsxs)(Ct, {
              children: [(0, $.jsx)(ir, {}), (0, $.jsx)(rr, {}), (0, $.jsx)(ur, {})],
            }),
          }),
        ],
      })),
      (e[29] = F))
    : (F = e[29]);
  let L;
  e[30] === r ? (L = e[31]) : ((L = r ? (0, $.jsx)(An, {}) : null), (e[30] = r), (e[31] = L));
  let R;
  e[32] === L
    ? (R = e[33])
    : ((R = (0, $.jsx)(G, { electron: !0, children: L })), (e[32] = L), (e[33] = R));
  let z;
  e[34] !== n || e[35] !== i
    ? ((z = n && i ? (0, $.jsx)(Mn, {}) : null), (e[34] = n), (e[35] = i), (e[36] = z))
    : (z = e[36]);
  let B;
  e[37] === z
    ? (B = e[38])
    : ((B = (0, $.jsx)(G, { electron: !0, children: z })), (e[37] = z), (e[38] = B));
  let V;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(J.Header, { title: (0, $.jsx)(I, { ...Y.notifications }) })), (e[39] = V))
    : (V = e[39]);
  let ee;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(G, {
        electron: !0,
        children: (0, $.jsxs)(J, {
          id: X.notifications,
          children: [
            V,
            (0, $.jsx)(J.Content, { children: (0, $.jsx)(Ct, { children: (0, $.jsx)(ln, {}) }) }),
          ],
        }),
      })),
      (e[40] = ee))
    : (ee = e[40]);
  let ne;
  e[41] === t ? (ne = e[42]) : ((ne = t ? (0, $.jsx)(wn, {}) : null), (e[41] = t), (e[42] = ne));
  let re;
  e[43] === ne
    ? (re = e[44])
    : ((re = (0, $.jsx)(G, { electron: !0, children: ne })), (e[43] = ne), (e[44] = re));
  let ae;
  return (
    e[45] !== N || e[46] !== R || e[47] !== B || e[48] !== re
      ? ((ae = (0, $.jsxs)(xt, { title: m, children: [h, N, F, R, B, ee, re] })),
        (e[45] = N),
        (e[46] = R),
        (e[47] = B),
        (e[48] = re),
        (e[49] = ae))
      : (ae = e[49]),
    ae
  );
}
function wn() {
  let e = (0, Z.c)(19),
    t = S(D),
    n = F(),
    r = C(p),
    i,
    a,
    o,
    s,
    c;
  if (e[0] !== n || e[1] !== t || e[2] !== r) {
    let l = [
      {
        key: `disable-scroll-fade-mask`,
        settingKey: `disableScrollFadeMask`,
        label: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.label`,
          defaultMessage: `Disable scroll fade mask`,
          description: `Label for GPU tearing debug setting that disables scroll fade masks`,
        }),
        description: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.description`,
          defaultMessage: `Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger`,
          description: `Description for GPU tearing debug setting that disables scroll fade masks`,
        }),
      },
      {
        key: `disable-scroll-fade-mask-animation`,
        settingKey: `disableScrollFadeMaskAnimation`,
        label: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label`,
          defaultMessage: `Disable scroll fade animation`,
          description: `Label for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
        description: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description`,
          defaultMessage: `Keeps static fade masks but removes the scroll-linked animation timeline`,
          description: `Description for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
      },
      {
        key: `disable-backdrop-blur`,
        settingKey: `disableBackdropBlur`,
        label: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.label`,
          defaultMessage: `Disable backdrop blur`,
          description: `Label for GPU tearing debug setting that disables backdrop blur`,
        }),
        description: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.description`,
          defaultMessage: `Forces backdrop filters off across the web UI to reduce layered blur composition`,
          description: `Description for GPU tearing debug setting that disables backdrop blur`,
        }),
      },
      {
        key: `disable-css-motion`,
        settingKey: `disableCssMotion`,
        label: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.label`,
          defaultMessage: `Disable CSS motion`,
          description: `Label for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
        description: n.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.description`,
          defaultMessage: `Turns off CSS animations and transitions to isolate compositor animation work`,
          description: `Description for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
      },
      {
        key: `force-opaque-renderer-background`,
        settingKey: `forceOpaqueRendererBackground`,
        label: n.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label`,
          defaultMessage: `Force opaque web background`,
          description: `Label for GPU tearing debug setting that forces an opaque web background`,
        }),
        description: n.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description`,
          defaultMessage: `Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition`,
          description: `Description for GPU tearing debug setting that forces an opaque web background`,
        }),
      },
    ];
    ((o = J),
      e[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((c = (0, $.jsx)(J.Header, {
            title: (0, $.jsx)(I, {
              id: `settings.general.gpuTearingDebug`,
              defaultMessage: `GPU Tearing Debug`,
              description: `Heading for GPU tearing debug settings group`,
            }),
            subtitle: (0, $.jsx)(I, {
              id: `settings.general.gpuTearingDebug.subtitle`,
              defaultMessage: `Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled.`,
              description: `Subtitle for GPU tearing debug settings group`,
            }),
          })),
          (e[8] = c))
        : (c = e[8]),
      (a = J.Content),
      (i = Ct),
      (s = l.map((e) =>
        (0, $.jsx)(
          q,
          {
            label: e.label,
            description: e.description,
            control: (0, $.jsx)(K, {
              checked: r[e.settingKey],
              onChange: (n) => {
                f(t, e.settingKey, n);
              },
              ariaLabel: n.formatMessage(
                {
                  id: `settings.general.gpuTearingDebug.toggle`,
                  defaultMessage: `Toggle {settingName}`,
                  description: `Aria label for toggling a GPU tearing debug setting`,
                },
                { settingName: e.label },
              ),
            }),
          },
          e.key,
        ),
      )),
      (e[0] = n),
      (e[1] = t),
      (e[2] = r),
      (e[3] = i),
      (e[4] = a),
      (e[5] = o),
      (e[6] = s),
      (e[7] = c));
  } else ((i = e[3]), (a = e[4]), (o = e[5]), (s = e[6]), (c = e[7]));
  let l;
  e[9] !== i || e[10] !== s
    ? ((l = (0, $.jsx)(i, { children: s })), (e[9] = i), (e[10] = s), (e[11] = l))
    : (l = e[11]);
  let u;
  e[12] !== a || e[13] !== l
    ? ((u = (0, $.jsx)(a, { children: l })), (e[12] = a), (e[13] = l), (e[14] = u))
    : (u = e[14]);
  let d;
  return (
    e[15] !== o || e[16] !== c || e[17] !== u
      ? ((d = (0, $.jsxs)(o, { children: [c, u] })),
        (e[15] = o),
        (e[16] = c),
        (e[17] = u),
        (e[18] = d))
      : (d = e[18]),
    d
  );
}
function Tn() {
  let e = (0, Z.c)(7),
    t = R(),
    n,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(I, { ...Y.openSourceLicenses })),
      (r = (0, $.jsx)(I, {
        id: `settings.openSourceLicenses.rowDescription`,
        defaultMessage: `Third-party notices for bundled dependencies`,
        description: `Description for the open source licenses row`,
      })),
      (e[0] = n),
      (e[1] = r))
    : ((n = e[0]), (r = e[1]));
  let i;
  e[2] === t
    ? (i = e[3])
    : ((i = () => {
        t(`/settings/open-source-licenses`, {
          state: { licensesBackPath: `/settings/general-settings` },
        });
      }),
      (e[2] = t),
      (e[3] = i));
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(I, {
        id: `settings.openSourceLicenses.view`,
        defaultMessage: `View`,
        description: `Button label to open the open source licenses page`,
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  return (
    e[5] === i
      ? (o = e[6])
      : ((o = (0, $.jsx)(q, {
          id: X.openSourceLicenses,
          label: n,
          description: r,
          control: (0, $.jsx)(H, { color: `secondary`, size: `toolbar`, onClick: i, children: a }),
        })),
        (e[5] = i),
        (e[6] = o)),
    o
  );
}
function En() {
  let e = (0, Z.c)(9),
    t = de() === me,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(Zn, {})), (e[0] = n))
    : (n = e[0]);
  let r, i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsxs)(G, {
        electron: !0,
        children: [
          n,
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-2 p-1`,
            children: [(0, $.jsx)(Bt, {}), (0, $.jsx)(zt, {})],
          }),
          (0, $.jsx)(Qn, {}),
          (0, $.jsx)(nr, {}),
        ],
      })),
      (i = (0, $.jsx)(sr, {})),
      (e[1] = r),
      (e[2] = i))
    : ((r = e[1]), (i = e[2]));
  let a;
  e[3] === t ? (a = e[4]) : ((a = t ? (0, $.jsx)(cr, {}) : null), (e[3] = t), (e[4] = a));
  let o, s;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(tr, {})), (s = (0, $.jsx)(lr, {})), (e[5] = o), (e[6] = s))
    : ((o = e[5]), (s = e[6]));
  let c;
  return (
    e[7] === a
      ? (c = e[8])
      : ((c = (0, $.jsx)(J, {
          children: (0, $.jsx)(J.Content, {
            children: (0, $.jsxs)(Ct, { children: [r, i, a, o, s] }),
          }),
        })),
        (e[7] = a),
        (e[8] = c)),
    c
  );
}
function Dn() {
  let e = (0, Z.c)(1),
    t = V.hotkeyWindowHotkeys;
  if (t == null) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(On, { hotkeyWindowHotkeys: t })), (e[0] = n))
      : (n = e[0]),
    n
  );
}
function On(e) {
  let t = (0, Z.c)(30),
    { hotkeyWindowHotkeys: n } = e,
    r = S(D),
    i = F(),
    a = re(),
    [o, s] = (0, Q.useState)(!1),
    [c, l] = (0, Q.useState)(null),
    { data: u } = C(Tt),
    d;
  t[0] === n
    ? (d = t[1])
    : ((d = async (e) => {
        let { hotkey: t } = e;
        return n.setHotkey(t);
      }),
      (t[0] = n),
      (t[1] = d));
  let f;
  t[2] !== a || t[3] !== r
    ? ((f = async (e) => {
        (r.query.setData(Tt, e.state),
          await Promise.all([a(Et), a(j(`codex-command-keymap-state`))]));
      }),
      (t[2] = a),
      (t[3] = r),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== d || t[6] !== f
    ? ((p = { mutationFn: d, onSuccess: f }), (t[5] = d), (t[6] = f), (t[7] = p))
    : (p = t[7]);
  let m = T(p),
    h;
  t[8] !== i || t[9] !== m
    ? ((h = async (e) => {
        l(null);
        try {
          let t = await m.mutateAsync({ hotkey: e });
          t.success || l(t.error);
        } catch (e) {
          let t = e;
          l(
            t instanceof Error
              ? t.message
              : i.formatMessage({
                  id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.errorGeneric`,
                  defaultMessage: `Failed to update Popout Window hotkey.`,
                  description: `Fallback error shown when hotkey window hotkey update fails`,
                }),
          );
        }
      }),
      (t[8] = i),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g = h;
  if (u?.supported === !1) return null;
  let _ = u?.configuredHotkey ?? null,
    v;
  t[11] !== _ || t[12] !== i
    ? ((v =
        _ == null
          ? i.formatMessage({
              id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.off`,
              defaultMessage: `Off`,
              description: `Status label when hotkey window hotkey is disabled`,
            })
          : Ue(_)),
      (t[11] = _),
      (t[12] = i),
      (t[13] = v))
    : (v = t[13]);
  let y = v,
    b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(I, {
        id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.label`,
        defaultMessage: `Popout Window hotkey`,
        description: `Label for hotkey window hotkey setting`,
      })),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(I, {
        id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.description`,
        defaultMessage: `Set a global shortcut for Popout Window. Leave unset to keep it off.`,
        description: `Description for hotkey window hotkey setting`,
      })),
      (t[15] = x))
    : (x = t[15]);
  let w;
  t[16] === c
    ? (w = t[17])
    : ((w = c
        ? (0, $.jsx)(`span`, { className: `text-token-error-foreground`, children: c })
        : null),
      (t[16] = c),
      (t[17] = w));
  let E;
  t[18] === w
    ? (E = t[19])
    : ((E = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [x, w] })),
      (t[18] = w),
      (t[19] = E));
  let O;
  t[20] !== g || t[21] !== _ || t[22] !== y || t[23] !== i || t[24] !== o || t[25] !== m
    ? ((O = o
        ? (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, $.jsx)(`input`, {
                autoFocus: !0,
                readOnly: !0,
                value: i.formatMessage({
                  id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.capturePrompt`,
                  defaultMessage: `Press shortcut`,
                  description: `Prompt shown while capturing hotkey window hotkey input`,
                }),
                onBlur: () => {
                  s(!1);
                },
                onKeyDown: (e) => {
                  if (e.repeat) return;
                  if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
                    s(!1);
                    return;
                  }
                  let t = Mt(e.nativeEvent);
                  t != null && (s(!1), g(t));
                },
                "aria-label": i.formatMessage({
                  id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.captureAriaLabel`,
                  defaultMessage: `Popout Window hotkey capture`,
                  description: `Aria label for hotkey window hotkey capture input`,
                }),
                className: `h-9 w-36 rounded-md border border-token-input-border bg-token-input-background px-2 text-sm text-token-input-foreground transition-colors outline-none focus:border-token-focus-border`,
              }),
              (0, $.jsx)(H, {
                color: `ghost`,
                size: `toolbar`,
                onMouseDown: kn,
                onClick: () => {
                  s(!1);
                },
                children: (0, $.jsx)(I, {
                  id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Button label to cancel hotkey window hotkey capture`,
                }),
              }),
            ],
          })
        : (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, $.jsx)(`span`, {
                className: `min-w-20 text-right text-sm text-token-text-secondary`,
                children: y,
              }),
              (0, $.jsx)(H, {
                color: `secondary`,
                size: `toolbar`,
                disabled: m.isPending,
                onClick: () => {
                  (l(null), s(!0));
                },
                children:
                  _ == null
                    ? (0, $.jsx)(I, {
                        id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.set`,
                        defaultMessage: `Set`,
                        description: `Button label to set hotkey window hotkey`,
                      })
                    : (0, $.jsx)(I, {
                        id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.change`,
                        defaultMessage: `Change`,
                        description: `Button label to change hotkey window hotkey`,
                      }),
              }),
              _ == null
                ? null
                : (0, $.jsx)(H, {
                    color: `ghost`,
                    size: `toolbar`,
                    disabled: m.isPending,
                    onClick: () => {
                      g(null);
                    },
                    children: (0, $.jsx)(I, {
                      id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.clear`,
                      defaultMessage: `Clear`,
                      description: `Button label to clear hotkey window hotkey`,
                    }),
                  }),
            ],
          })),
      (t[20] = g),
      (t[21] = _),
      (t[22] = y),
      (t[23] = i),
      (t[24] = o),
      (t[25] = m),
      (t[26] = O))
    : (O = t[26]);
  let k;
  return (
    t[27] !== O || t[28] !== E
      ? ((k = (0, $.jsx)(q, { label: b, description: E, control: O })),
        (t[27] = O),
        (t[28] = E),
        (t[29] = k))
      : (k = t[29]),
    k
  );
}
function kn(e) {
  e.preventDefault();
}
function An() {
  let e = (0, Z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(I, {
          id: `settings.general.popoutWindow`,
          defaultMessage: `Popout Window`,
          description: `Heading for Popout Window settings group`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(J, {
          children: [
            t,
            (0, $.jsx)(J.Content, {
              children: (0, $.jsxs)(Ct, { children: [(0, $.jsx)(Dn, {}), (0, $.jsx)(jn, {})] }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function jn() {
  let e = (0, Z.c)(10),
    n = S(D),
    r = F(),
    i = U(t.hotkeyWindowProjectlessDefaultEnabled),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(I, {
        id: `settings.general.popoutWindow.projectlessDefault.label`,
        defaultMessage: `Default to projectless chat`,
        description: `Label for the Popout Window projectless default setting`,
      })),
      (o = (0, $.jsx)(I, {
        id: `settings.general.popoutWindow.projectlessDefault.description`,
        defaultMessage: `Start new chats without a project`,
        description: `Description for the Popout Window projectless default setting`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s = i === !0,
    c;
  e[2] === n
    ? (c = e[3])
    : ((c = (e) => {
        W(n, t.hotkeyWindowProjectlessDefaultEnabled, e);
      }),
      (e[2] = n),
      (e[3] = c));
  let l;
  e[4] === r
    ? (l = e[5])
    : ((l = r.formatMessage({
        id: `settings.general.popoutWindow.projectlessDefault.ariaLabel`,
        defaultMessage: `Default Popout Window to projectless chat`,
        description: `Aria label for the Popout Window projectless default setting toggle`,
      })),
      (e[4] = r),
      (e[5] = l));
  let u;
  return (
    e[6] !== s || e[7] !== c || e[8] !== l
      ? ((u = (0, $.jsx)(q, {
          label: a,
          description: o,
          control: (0, $.jsx)(K, { checked: s, onChange: c, ariaLabel: l }),
        })),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l),
        (e[9] = u))
      : (u = e[9]),
    u
  );
}
function Mn() {
  let e = (0, Z.c)(9),
    { data: t } = C(Pt);
  if (t?.supported === !1) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(I, {
          id: `settings.general.dictation`,
          defaultMessage: `Dictation`,
          description: `Heading for global dictation settings group`,
        }),
      })),
      (e[0] = n))
    : (n = e[0]);
  let r, i;
  e[1] === t
    ? ((r = e[2]), (i = e[3]))
    : ((r = (0, $.jsx)(In, { hotkeyState: t, mode: `hold` })),
      (i = (0, $.jsx)(In, { hotkeyState: t, mode: `toggle` })),
      (e[1] = t),
      (e[2] = r),
      (e[3] = i));
  let a, o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Nn, {})), (o = (0, $.jsx)(Rn, {})), (e[4] = a), (e[5] = o))
    : ((a = e[4]), (o = e[5]));
  let s;
  return (
    e[6] !== r || e[7] !== i
      ? ((s = (0, $.jsxs)(J, {
          children: [
            n,
            (0, $.jsx)(J.Content, { children: (0, $.jsxs)(Ct, { children: [r, i, a, o] }) }),
          ],
        })),
        (e[6] = r),
        (e[7] = i),
        (e[8] = s))
      : (s = e[8]),
    s
  );
}
function Nn() {
  let e = (0, Z.c)(22),
    n = S(D),
    r = F(),
    i = U(t.dictationDictionary),
    [a, o] = (0, Q.useState)(null),
    [s, c] = (0, Q.useState)(!1),
    l = (0, Q.useRef)(!1),
    u = a ?? i,
    d = u != null && u.length > 0 ? u : xn,
    f;
  e[0] === s
    ? (f = e[1])
    : ((f = function () {
        (c(!s), o(null));
      }),
      (e[0] = s),
      (e[1] = f));
  let p = f,
    m;
  e[2] === n
    ? (m = e[3])
    : ((m = async function (e) {
        let r = e.map(Fn).filter(Pn);
        (await W(n, t.dictationDictionary, r), o(null));
      }),
      (e[2] = n),
      (e[3] = m));
  let h = m,
    g;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-primary`,
        children: (0, $.jsx)(I, {
          id: `settings.general.dictationDictionary.label`,
          defaultMessage: `Dictation dictionary`,
          description: `Label for dictation cleanup dictionary setting`,
        }),
      })),
      (e[4] = g))
    : (g = e[4]);
  let _;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [
          g,
          (0, $.jsx)(`span`, {
            className: `min-w-0 text-sm text-token-text-secondary`,
            children: (0, $.jsx)(I, {
              id: `settings.general.dictationDictionary.description`,
              defaultMessage: `Words or phrases dictation should recognize`,
              description: `Description for dictation cleanup dictionary setting`,
            }),
          }),
        ],
      })),
      (e[5] = _))
    : (_ = e[5]);
  let v = s ? `rotate-180` : void 0,
    y;
  e[6] === v
    ? (y = e[7])
    : ((y = b(`icon-xs shrink-0 text-token-input-placeholder-foreground transition-transform`, v)),
      (e[6] = v),
      (e[7] = y));
  let x;
  e[8] === y ? (x = e[9]) : ((x = (0, $.jsx)(nt, { className: y })), (e[8] = y), (e[9] = x));
  let C;
  e[10] !== s || e[11] !== x || e[12] !== p
    ? ((C = (0, $.jsxs)(`button`, {
        type: `button`,
        "aria-expanded": s,
        className: `flex w-full cursor-interaction items-center justify-between gap-4 p-3 text-left`,
        onClick: p,
        children: [_, x],
      })),
      (e[10] = s),
      (e[11] = x),
      (e[12] = p),
      (e[13] = C))
    : (C = e[13]);
  let w;
  e[14] !== r || e[15] !== s || e[16] !== h || e[17] !== d
    ? ((w = s
        ? (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-3 px-3 pb-3`,
            children: [
              (0, $.jsx)(`div`, {
                className: `flex max-h-52 flex-col gap-2 overflow-y-auto`,
                children: d.map((e, t) =>
                  (0, $.jsxs)(
                    `div`,
                    {
                      className: `relative`,
                      children: [
                        (0, $.jsx)(`input`, {
                          autoFocus: t === 0,
                          "data-dictation-dictionary-entry-index": t,
                          "aria-label": r.formatMessage({
                            id: `settings.general.dictationDictionary.entryLabel`,
                            defaultMessage: `Dictionary entry`,
                            description: `Aria label for one dictation dictionary entry`,
                          }),
                          className: `w-full rounded-md border border-token-input-border bg-token-input-background py-1.5 pr-9 pl-2.5 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
                          placeholder: Sn[t] ?? Sn[0] ?? ``,
                          value: e,
                          onChange: (e) => {
                            let n = [...d];
                            ((n[t] = e.currentTarget.value), o(n));
                          },
                          onBlur: () => {
                            if (l.current) {
                              l.current = !1;
                              return;
                            }
                            h(d);
                          },
                          onKeyDown: (e) => {
                            if (e.key !== `Enter`) return;
                            e.preventDefault();
                            let n = [...d.slice(0, t + 1), bn, ...d.slice(t + 1)];
                            ((l.current = !0),
                              o(n),
                              requestAnimationFrame(() => {
                                document
                                  .querySelector(
                                    `[data-dictation-dictionary-entry-index="${t + 1}"]`,
                                  )
                                  ?.focus();
                              }));
                          },
                        }),
                        (0, $.jsx)(H, {
                          type: `button`,
                          color: `ghost`,
                          size: `icon`,
                          className: `absolute top-1/2 right-1 -translate-y-1/2`,
                          "aria-label": r.formatMessage({
                            id: `settings.general.dictationDictionary.removeEntry`,
                            defaultMessage: `Remove entry`,
                            description: `Button label for removing one dictation dictionary entry`,
                          }),
                          disabled: d.length === 1 && e.length === 0,
                          onClick: () => {
                            h(d.filter((e, n) => n !== t));
                          },
                          children: (0, $.jsx)(tt, { className: `icon-2xs` }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              (0, $.jsxs)(H, {
                type: `button`,
                color: `secondary`,
                size: `toolbar`,
                className: `justify-center border border-dashed text-token-text-secondary/90`,
                onClick: () => {
                  o([...d, bn]);
                },
                children: [
                  (0, $.jsx)(it, { className: `icon-2xs` }),
                  (0, $.jsx)(I, {
                    id: `settings.general.dictationDictionary.addEntry`,
                    defaultMessage: `Add entry`,
                    description: `Button label for adding one dictation dictionary entry`,
                  }),
                ],
              }),
            ],
          })
        : null),
      (e[14] = r),
      (e[15] = s),
      (e[16] = h),
      (e[17] = d),
      (e[18] = w))
    : (w = e[18]);
  let T;
  return (
    e[19] !== C || e[20] !== w
      ? ((T = (0, $.jsxs)(`div`, { children: [C, w] })), (e[19] = C), (e[20] = w), (e[21] = T))
      : (T = e[21]),
    T
  );
}
function Pn(e) {
  return e.length > 0;
}
function Fn(e) {
  return e.trim();
}
function In(e) {
  let t = (0, Z.c)(42),
    { hotkeyState: n, mode: r } = e,
    i = r === `toggle`,
    a = F(),
    { platform: o } = xe(),
    s = x(),
    c = re(),
    l = (0, Q.useRef)(0),
    u = (0, Q.useRef)(null),
    [d, f] = (0, Q.useState)(!1),
    [p, m] = (0, Q.useState)(null),
    h;
  t[0] !== c || t[1] !== s
    ? ((h = {
        onSuccess: (e) => {
          let t = j(`global-dictation-hotkey-state`);
          (s.setQueryData(t, e.state), Promise.all([c(t), c(j(`codex-command-keymap-state`))]));
        },
      }),
      (t[0] = c),
      (t[1] = s),
      (t[2] = h))
    : (h = t[2]);
  let g = M(r === `hold` ? `global-dictation-set-hotkey` : `global-dictation-set-toggle-hotkey`, h),
    _;
  t[3] !== a || t[4] !== i || t[5] !== g
    ? ((_ = async function (e) {
        m(null);
        try {
          let t = await g.mutateAsync({ hotkey: e });
          t.success || m(t.error);
        } catch (e) {
          let t = e;
          if (t instanceof Error) {
            m(t.message);
            return;
          }
          if (i) {
            m(
              a.formatMessage({
                id: `settings.general.globalDictationToggleHotkey.errorGeneric`,
                defaultMessage: `Failed to update toggle dictation hotkey`,
                description: `Fallback error shown when toggle dictation hotkey update fails`,
              }),
            );
            return;
          }
          m(
            a.formatMessage({
              id: `settings.general.globalDictationHotkey.errorGeneric`,
              defaultMessage: `Failed to update hold-to-dictate hotkey`,
              description: `Fallback error shown when hold-to-dictate hotkey update fails`,
            }),
          );
        }
      }),
      (t[3] = a),
      (t[4] = i),
      (t[5] = g),
      (t[6] = _))
    : (_ = t[6]);
  let v = _,
    y;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = function () {
        ((l.current += 1), (u.current = null), f(!1));
      }),
      (t[7] = y))
    : (y = t[7]);
  let b = y,
    S;
  t[8] === v
    ? (S = t[9])
    : ((S = function (e) {
        ((l.current += 1), (u.current = null), f(!1), v(e));
      }),
      (t[8] = v),
      (t[9] = S));
  let C = S,
    w;
  t[10] === C
    ? (w = t[11])
    : ((w = async function (e) {
        try {
          let { hotkey: t } = await k(`global-dictation-capture-fn-hotkey`);
          t != null && l.current === e && C(t);
        } catch {}
      }),
      (t[10] = C),
      (t[11] = w));
  let T = w,
    E;
  t[12] !== T || t[13] !== o
    ? ((E = function () {
        (m(null), f(!0), (l.current += 1), (u.current = null), o === `macOS` && T(l.current));
      }),
      (t[12] = T),
      (t[13] = o),
      (t[14] = E))
    : (E = t[14]);
  let D = E,
    O = i ? (n?.configuredToggleHotkey ?? null) : (n?.configuredHotkey ?? null),
    A;
  t[15] !== O || t[16] !== a
    ? ((A =
        O == null
          ? a.formatMessage({
              id: `settings.general.globalDictationHotkey.off`,
              defaultMessage: `Off`,
              description: `Status label when global dictation hotkey is disabled`,
            })
          : Ue(O)),
      (t[15] = O),
      (t[16] = a),
      (t[17] = A))
    : (A = t[17]);
  let N = A,
    P;
  t[18] === i
    ? (P = t[19])
    : ((P = i
        ? (0, $.jsx)(I, {
            id: `settings.general.globalDictationToggleHotkey.label`,
            defaultMessage: `Toggle dictation hotkey`,
            description: `Label for toggle dictation hotkey setting`,
          })
        : (0, $.jsx)(I, {
            id: `settings.general.globalDictationHotkey.label`,
            defaultMessage: `Hold-to-dictate hotkey`,
            description: `Label for hold-to-dictate hotkey setting`,
          })),
      (t[18] = i),
      (t[19] = P));
  let L;
  t[20] === i
    ? (L = t[21])
    : ((L = i
        ? (0, $.jsx)(I, {
            id: `settings.general.globalDictationToggleHotkey.description`,
            defaultMessage: `Press once anywhere on desktop to dictate, then press again to stop`,
            description: `Description for toggle dictation hotkey setting`,
          })
        : (0, $.jsx)(I, {
            id: `settings.general.globalDictationHotkey.description`,
            defaultMessage: `Hold anywhere on desktop to dictate where your cursor is`,
            description: `Description for hold-to-dictate hotkey setting`,
          })),
      (t[20] = i),
      (t[21] = L));
  let R;
  t[22] === p
    ? (R = t[23])
    : ((R = p
        ? (0, $.jsx)(`span`, { className: `text-token-error-foreground`, children: p })
        : null),
      (t[22] = p),
      (t[23] = R));
  let z;
  t[24] !== R || t[25] !== L
    ? ((z = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [L, R] })),
      (t[24] = R),
      (t[25] = L),
      (t[26] = z))
    : (z = t[26]);
  let B;
  t[27] !== v ||
  t[28] !== C ||
  t[29] !== O ||
  t[30] !== N ||
  t[31] !== a ||
  t[32] !== d ||
  t[33] !== i ||
  t[34] !== o ||
  t[35] !== g ||
  t[36] !== D
    ? ((B = d
        ? (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, $.jsx)(`input`, {
                autoFocus: !0,
                readOnly: !0,
                value: a.formatMessage({
                  id: `settings.general.globalDictationHotkey.capturePrompt`,
                  defaultMessage: `Press shortcut`,
                  description: `Prompt shown while capturing global dictation hotkey input`,
                }),
                onBlur: () => {
                  b();
                },
                onKeyDown: (e) => {
                  if (e.repeat) return;
                  if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
                    b();
                    return;
                  }
                  if (o === `macOS`) {
                    let t = At(e.nativeEvent);
                    if (t != null) {
                      u.current = t;
                      return;
                    }
                  }
                  let t = Mt(e.nativeEvent);
                  t != null && C(t);
                },
                onKeyUp: (e) => {
                  if ((e.preventDefault(), e.stopPropagation(), o !== `macOS`)) return;
                  let t = jt(e.nativeEvent);
                  t != null && u.current === t && C(t);
                },
                "aria-label": i
                  ? a.formatMessage({
                      id: `settings.general.globalDictationToggleHotkey.captureAriaLabel`,
                      defaultMessage: `Toggle dictation hotkey capture`,
                      description: `Aria label for toggle dictation hotkey capture input`,
                    })
                  : a.formatMessage({
                      id: `settings.general.globalDictationHotkey.captureAriaLabel`,
                      defaultMessage: `Hold-to-dictate hotkey capture`,
                      description: `Aria label for hold-to-dictate hotkey capture input`,
                    }),
                className: `h-9 w-36 rounded-md border border-token-input-border bg-token-input-background px-2 text-sm text-token-input-foreground transition-colors outline-none focus:border-token-focus-border`,
              }),
              (0, $.jsx)(H, {
                color: `ghost`,
                size: `toolbar`,
                onMouseDown: Ln,
                onClick: () => {
                  b();
                },
                children: (0, $.jsx)(I, {
                  id: `settings.general.globalDictationHotkey.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Button label to cancel global dictation hotkey capture`,
                }),
              }),
            ],
          })
        : (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, $.jsx)(`span`, {
                className: `min-w-20 text-right text-sm text-token-text-secondary`,
                children: N,
              }),
              (0, $.jsx)(H, {
                color: `secondary`,
                size: `toolbar`,
                disabled: g.isPending,
                onClick: D,
                children:
                  O == null
                    ? i
                      ? (0, $.jsx)(I, {
                          id: `settings.general.globalDictationToggleHotkey.set`,
                          defaultMessage: `Set`,
                          description: `Button label to set toggle dictation hotkey`,
                        })
                      : (0, $.jsx)(I, {
                          id: `settings.general.globalDictationHotkey.set`,
                          defaultMessage: `Set`,
                          description: `Button label to set hold-to-dictate hotkey`,
                        })
                    : i
                      ? (0, $.jsx)(I, {
                          id: `settings.general.globalDictationToggleHotkey.change`,
                          defaultMessage: `Change`,
                          description: `Button label to change toggle dictation hotkey`,
                        })
                      : (0, $.jsx)(I, {
                          id: `settings.general.globalDictationHotkey.change`,
                          defaultMessage: `Change`,
                          description: `Button label to change hold-to-dictate hotkey`,
                        }),
              }),
              O == null
                ? null
                : (0, $.jsx)(H, {
                    color: `ghost`,
                    size: `toolbar`,
                    disabled: g.isPending,
                    onClick: () => {
                      v(null);
                    },
                    children: i
                      ? (0, $.jsx)(I, {
                          id: `settings.general.globalDictationToggleHotkey.clear`,
                          defaultMessage: `Clear`,
                          description: `Button label to clear toggle dictation hotkey`,
                        })
                      : (0, $.jsx)(I, {
                          id: `settings.general.globalDictationHotkey.clear`,
                          defaultMessage: `Clear`,
                          description: `Button label to clear hold-to-dictate hotkey`,
                        }),
                  }),
            ],
          })),
      (t[27] = v),
      (t[28] = C),
      (t[29] = O),
      (t[30] = N),
      (t[31] = a),
      (t[32] = d),
      (t[33] = i),
      (t[34] = o),
      (t[35] = g),
      (t[36] = D),
      (t[37] = B))
    : (B = t[37]);
  let V;
  return (
    t[38] !== z || t[39] !== B || t[40] !== P
      ? ((V = (0, $.jsx)(q, { label: P, description: z, control: B })),
        (t[38] = z),
        (t[39] = B),
        (t[40] = P),
        (t[41] = V))
      : (V = t[41]),
    V
  );
}
function Ln(e) {
  e.preventDefault();
}
function Rn() {
  let e = (0, Z.c)(12),
    t = F(),
    { data: n } = C(Nt),
    r = M(`global-dictation-copy-history-item`),
    i,
    a;
  if (e[0] !== r || e[1] !== n?.items || e[2] !== t) {
    a = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let o = n?.items.filter(zn).slice(0, 4);
      if (o == null || o.length === 0) {
        let t;
        e[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(`div`, {
              className: `text-sm text-token-text-primary`,
              children: (0, $.jsx)(I, {
                id: `settings.general.globalDictationHistory.emptyTitle`,
                defaultMessage: `Recent dictations`,
                description: `Title for empty global dictation history`,
              }),
            })),
            (e[5] = t))
          : (t = e[5]);
        let n;
        (e[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-1 p-3`,
              children: [
                t,
                (0, $.jsx)(`div`, {
                  className: `max-w-xl text-sm text-token-text-secondary`,
                  children: (0, $.jsx)(I, {
                    id: `settings.general.globalDictationHistory.emptyDescription`,
                    defaultMessage: `Your recent dictations will appear here so you can recover text if it does not land where you expected`,
                    description: `Empty state description for global dictation history`,
                  }),
                }),
              ],
            })),
            (e[6] = n))
          : (n = e[6]),
          (a = n));
        break bb0;
      }
      let s;
      (e[7] !== r || e[8] !== t
        ? ((s = (e) =>
            (0, $.jsx)(
              Bn,
              {
                copyDisabled: r.isPending,
                item: e,
                timestamp: t.formatDate(e.createdAtMs, {
                  day: `numeric`,
                  hour: `numeric`,
                  minute: `2-digit`,
                  month: `short`,
                }),
                onCopy: () => {
                  r.mutateAsync({ id: e.id });
                },
              },
              e.id,
            )),
          (e[7] = r),
          (e[8] = t),
          (e[9] = s))
        : (s = e[9]),
        (i = o.map(s)));
    }
    ((e[0] = r), (e[1] = n?.items), (e[2] = t), (e[3] = i), (e[4] = a));
  } else ((i = e[3]), (a = e[4]));
  if (a !== Symbol.for(`react.early_return_sentinel`)) return a;
  let o;
  return (
    e[10] === i
      ? (o = e[11])
      : ((o = (0, $.jsx)($.Fragment, { children: i })), (e[10] = i), (e[11] = o)),
    o
  );
}
function zn(e) {
  return e.text.length > 0;
}
function Bn(e) {
  let t = (0, Z.c)(21),
    { copyDisabled: n, item: r, onCopy: i, timestamp: a } = e,
    o = F(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `settings.general.globalDictationHistory.copy`,
        defaultMessage: `Copy dictation`,
        description: `Tooltip and aria label for copying a dictation transcript`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c = s,
    l;
  t[2] === r.createdAtMs
    ? (l = t[3])
    : ((l = new Date(r.createdAtMs).toISOString()), (t[2] = r.createdAtMs), (t[3] = l));
  let u;
  t[4] !== l || t[5] !== a
    ? ((u = (0, $.jsx)(`time`, {
        dateTime: l,
        className: `w-32 shrink-0 text-sm text-token-text-secondary tabular-nums`,
        children: a,
      })),
      (t[4] = l),
      (t[5] = a),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === r.text
    ? (d = t[8])
    : ((d = (0, $.jsx)(`div`, {
        className: `line-clamp-3 min-w-0 flex-1 text-sm whitespace-pre-wrap text-token-text-secondary`,
        children: r.text,
      })),
      (t[7] = r.text),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(rt, { className: `icon-sm` })), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== n || t[11] !== c || t[12] !== i
    ? ((p = (0, $.jsx)(H, {
        "aria-label": c,
        className: `shrink-0`,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: i,
        children: f,
      })),
      (t[10] = n),
      (t[11] = c),
      (t[12] = i),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== c || t[15] !== p
    ? ((m = (0, $.jsx)(se, { tooltipContent: c, children: p })),
      (t[14] = c),
      (t[15] = p),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== u || t[18] !== d || t[19] !== m
      ? ((h = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3 p-3`,
          children: [u, d, m],
        })),
        (t[17] = u),
        (t[18] = d),
        (t[19] = m),
        (t[20] = h))
      : (h = t[20]),
    h
  );
}
function Vn() {
  let e = (0, Z.c)(10),
    t = S(D),
    n = F(),
    { platform: r } = xe(),
    i = U(o.macMenuBarEnabled);
  if (r !== `macOS`) return null;
  let a, s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(I, {
        id: `settings.general.macMenuBar.label`,
        defaultMessage: `Show in menu bar`,
        description: `Label for the macOS menu bar setting`,
      })),
      (s = (0, $.jsx)(I, {
        id: `settings.general.macMenuBar.description`,
        defaultMessage: `Keep Codex in the macOS menu bar when the main window is closed`,
        description: `Description for the macOS menu bar setting`,
      })),
      (e[0] = a),
      (e[1] = s))
    : ((a = e[0]), (s = e[1]));
  let c = i !== !1,
    l;
  e[2] === t
    ? (l = e[3])
    : ((l = (e) => {
        W(t, o.macMenuBarEnabled, e);
      }),
      (e[2] = t),
      (e[3] = l));
  let u;
  e[4] === n
    ? (u = e[5])
    : ((u = n.formatMessage({
        id: `settings.general.macMenuBar.ariaLabel`,
        defaultMessage: `Show Codex in the menu bar`,
        description: `Aria label for the macOS menu bar setting toggle`,
      })),
      (e[4] = n),
      (e[5] = u));
  let d;
  return (
    e[6] !== c || e[7] !== l || e[8] !== u
      ? ((d = (0, $.jsx)(q, {
          label: a,
          description: s,
          control: (0, $.jsx)(K, { checked: c, onChange: l, ariaLabel: u }),
        })),
        (e[6] = c),
        (e[7] = l),
        (e[8] = u),
        (e[9] = d))
      : (d = e[9]),
    d
  );
}
function Hn() {
  let e = (0, Z.c)(41),
    t = x(),
    n = re(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = { cwd: null }), (e[0] = r)) : (r = e[0]);
  let { data: i } = w(kt, r),
    a;
  e[1] !== n || e[2] !== t
    ? ((a = {
        onSuccess: (e, r) => {
          let i = j(`open-in-targets`, { cwd: null });
          (t.setQueryData(i, (e) => e && { ...e, preferredTarget: r.target }), n(i));
        },
      }),
      (e[1] = n),
      (e[2] = t),
      (e[3] = a))
    : (a = e[3]);
  let o = M(`set-preferred-app`, a),
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (e[4] !== i?.preferredTarget || e[5] !== i?.targets || e[6] !== o) {
    let t = i?.targets ?? [],
      n = i?.preferredTarget ?? t.find(Wn)?.target ?? null,
      r = t.filter(Un),
      a = r.find((e) => e.target === n);
    ((c = q),
      (g = X.defaultOpenDestination),
      e[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, $.jsx)(I, { ...Y.defaultOpenDestination })),
          (l = (0, $.jsx)(I, {
            id: `settings.ide.defaultOpenTarget.description`,
            defaultMessage: `Where files and folders open by default`,
            description: `Description for default open-in target setting`,
          })),
          (e[18] = l),
          (e[19] = _))
        : ((l = e[18]), (_ = e[19])),
      (s = Ze),
      (f = `menuFixed`));
    let v = r.length === 0,
      y = a
        ? (0, $.jsx)(Jn, { icon: a.icon, label: a.label })
        : (0, $.jsx)(I, {
            id: `settings.ide.defaultOpenTarget.placeholder`,
            defaultMessage: `No targets found`,
            description: `Placeholder for default open-in target select`,
          });
    (e[20] !== v || e[21] !== y
      ? ((p = (0, $.jsx)(bt, { disabled: v, children: y })), (e[20] = v), (e[21] = y), (e[22] = p))
      : (p = e[22]),
      (m = r.length === 0),
      (h = `end`),
      (u = `max-h-80 overflow-y-auto`));
    let b;
    (e[23] === o
      ? (b = e[24])
      : ((b = (e) =>
          (0, $.jsx)(
            Xe.Item,
            {
              onSelect: () => {
                o.mutate({ target: e.target });
              },
              children: (0, $.jsx)(Jn, { icon: e.icon, label: e.label }),
            },
            e.id,
          )),
        (e[23] = o),
        (e[24] = b)),
      (d = r.map(b)),
      (e[4] = i?.preferredTarget),
      (e[5] = i?.targets),
      (e[6] = o),
      (e[7] = s),
      (e[8] = c),
      (e[9] = l),
      (e[10] = u),
      (e[11] = d),
      (e[12] = f),
      (e[13] = p),
      (e[14] = m),
      (e[15] = h),
      (e[16] = g),
      (e[17] = _));
  } else
    ((s = e[7]),
      (c = e[8]),
      (l = e[9]),
      (u = e[10]),
      (d = e[11]),
      (f = e[12]),
      (p = e[13]),
      (m = e[14]),
      (h = e[15]),
      (g = e[16]),
      (_ = e[17]));
  let v;
  e[25] !== u || e[26] !== d
    ? ((v = (0, $.jsx)(`div`, { className: u, children: d })),
      (e[25] = u),
      (e[26] = d),
      (e[27] = v))
    : (v = e[27]);
  let y;
  e[28] !== s || e[29] !== v || e[30] !== f || e[31] !== p || e[32] !== m || e[33] !== h
    ? ((y = (0, $.jsx)(s, {
        contentWidth: f,
        triggerButton: p,
        disabled: m,
        align: h,
        children: v,
      })),
      (e[28] = s),
      (e[29] = v),
      (e[30] = f),
      (e[31] = p),
      (e[32] = m),
      (e[33] = h),
      (e[34] = y))
    : (y = e[34]);
  let b;
  return (
    e[35] !== c || e[36] !== l || e[37] !== y || e[38] !== g || e[39] !== _
      ? ((b = (0, $.jsx)(c, { id: g, label: _, description: l, control: y })),
        (e[35] = c),
        (e[36] = l),
        (e[37] = y),
        (e[38] = g),
        (e[39] = _),
        (e[40] = b))
      : (b = e[40]),
    b
  );
}
function Un(e) {
  return e.available !== !1;
}
function Wn(e) {
  return e.default;
}
function Gn() {
  let e = (0, Z.c)(41),
    n = S(D),
    { platform: r } = xe(),
    i = r === `windows`,
    a;
  e[0] === i
    ? (a = e[1])
    : ((a = { queryConfig: { enabled: i, staleTime: N.ONE_MINUTE } }), (e[0] = i), (e[1] = a));
  let { data: o, isLoading: s } = A(`terminal-shell-options`, a),
    c = U(t.integratedTerminalShell);
  if (!i) return null;
  let l;
  e[2] === o?.availableShells
    ? (l = e[3])
    : ((l = o?.availableShells ?? []), (e[2] = o?.availableShells), (e[3] = l));
  let u = l,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y;
  if (e[4] !== u || e[5] !== c || e[6] !== s || e[7] !== n) {
    let r;
    e[17] === u
      ? (r = e[18])
      : ((r = (e) => (e === `gitBash` || e === `wsl` ? u.includes(e) : !0)),
        (e[17] = u),
        (e[18] = r));
    let i = vn.filter(r),
      a = c ?? `powershell`,
      o = i.find((e) => e === a) ?? i[0],
      l = s || o == null;
    ((f = q),
      e[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((v = (0, $.jsx)(I, {
            id: `settings.openIn.integratedTerminalShell.label`,
            defaultMessage: `Integrated terminal shell`,
            description: `Label for integrated terminal shell setting`,
          })),
          (y = (0, $.jsx)(I, {
            id: `settings.openIn.integratedTerminalShell.description`,
            defaultMessage: `Choose which shell opens in the integrated terminal.`,
            description: `Description for integrated terminal shell setting`,
          })),
          (e[19] = v),
          (e[20] = y))
        : ((v = e[19]), (y = e[20])),
      (d = Ze));
    let b = o
      ? (0, $.jsx)(qn, { value: o })
      : (0, $.jsx)(I, {
          id: `settings.openIn.integratedTerminalShell.unavailable`,
          defaultMessage: `No shells available`,
          description: `Placeholder shown when no integrated terminal shell options are available`,
        });
    (e[21] !== l || e[22] !== b
      ? ((h = (0, $.jsx)(bt, { disabled: l, children: b })), (e[21] = l), (e[22] = b), (e[23] = h))
      : (h = e[23]),
      (g = `end`),
      (_ = l),
      (p = `w-[220px] max-w-xs`));
    let x;
    (e[24] !== n || e[25] !== a
      ? ((x = (e) =>
          (0, $.jsx)(
            Xe.Item,
            {
              onSelect: () => {
                W(n, t.integratedTerminalShell, e);
              },
              RightIcon: a === e ? He : void 0,
              children: (0, $.jsx)(`span`, {
                className: `text-sm`,
                children: (0, $.jsx)(qn, { value: e }),
              }),
            },
            e,
          )),
        (e[24] = n),
        (e[25] = a),
        (e[26] = x))
      : (x = e[26]),
      (m = i.map(x)),
      (e[4] = u),
      (e[5] = c),
      (e[6] = s),
      (e[7] = n),
      (e[8] = d),
      (e[9] = f),
      (e[10] = p),
      (e[11] = m),
      (e[12] = h),
      (e[13] = g),
      (e[14] = _),
      (e[15] = v),
      (e[16] = y));
  } else
    ((d = e[8]),
      (f = e[9]),
      (p = e[10]),
      (m = e[11]),
      (h = e[12]),
      (g = e[13]),
      (_ = e[14]),
      (v = e[15]),
      (y = e[16]));
  let b;
  e[27] !== p || e[28] !== m
    ? ((b = (0, $.jsx)(`div`, { className: p, children: m })),
      (e[27] = p),
      (e[28] = m),
      (e[29] = b))
    : (b = e[29]);
  let x;
  e[30] !== d || e[31] !== h || e[32] !== g || e[33] !== _ || e[34] !== b
    ? ((x = (0, $.jsx)(d, { triggerButton: h, align: g, disabled: _, children: b })),
      (e[30] = d),
      (e[31] = h),
      (e[32] = g),
      (e[33] = _),
      (e[34] = b),
      (e[35] = x))
    : (x = e[35]);
  let C;
  return (
    e[36] !== f || e[37] !== x || e[38] !== v || e[39] !== y
      ? ((C = (0, $.jsx)(f, { label: v, description: y, control: x })),
        (e[36] = f),
        (e[37] = x),
        (e[38] = v),
        (e[39] = y),
        (e[40] = C))
      : (C = e[40]),
    C
  );
}
function Kn() {
  let e = S(D),
    { data: n } = ue(),
    [r, i] = (0, Q.useState)(null),
    [a, o] = (0, Q.useState)(!1),
    s = n?.platform === `win32` && n?.hasWsl && n?.isVsCodeRunningInsideWsl === !1,
    { data: c } = mt(),
    l = lt(),
    u = U(t.runCodexInWsl);
  if (!s || u === void 0) return null;
  yn ??= u;
  let d = [
      {
        value: !1,
        label: (0, $.jsx)(I, {
          id: `settings.agentEnvironment.windowsNative`,
          defaultMessage: `Windows native`,
          description: `Option label for running the agent natively on Windows`,
        }),
        description: (0, $.jsx)(I, {
          id: `settings.agentEnvironment.windowsNative.description`,
          defaultMessage: `Run the agent directly in Windows`,
          description: `Description for the Windows native agent environment option`,
        }),
      },
      {
        value: !0,
        label: (0, $.jsx)(I, {
          id: `settings.agentEnvironment.wsl`,
          defaultMessage: `Windows Subsystem for Linux`,
          description: `Option label for running the agent inside WSL`,
        }),
        description: (0, $.jsx)(I, {
          id: `settings.agentEnvironment.wsl.description`,
          defaultMessage: `Run the agent inside WSL`,
          description: `Description for the WSL agent environment option`,
        }),
      },
    ],
    f = d.find((e) => e.value === u) ?? d[0],
    p = d.find((e) => e.value === yn) ?? f,
    m = u !== yn,
    h = l.isPending || a;
  return (0, $.jsx)(q, {
    label: (0, $.jsx)(I, {
      id: `settings.agentEnvironment.label`,
      defaultMessage: `Agent environment`,
      description: `Label for the agent environment setting`,
    }),
    description: (0, $.jsxs)($.Fragment, {
      children: [
        (0, $.jsx)(I, {
          id: `settings.agentEnvironment.description`,
          defaultMessage: `Choose where the agent runs on Windows`,
          description: `Description for the agent environment setting`,
        }),
        m
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, { className: `block` }),
                (0, $.jsx)(`span`, {
                  className: `text-token-error-foreground`,
                  children: (0, $.jsx)(I, {
                    id: `settings.agentEnvironment.restartNotice`,
                    defaultMessage: `Restart Codex to apply this change. The agent is still running in {currentEnvironment}.`,
                    description: `Notice shown when the selected agent environment differs from the current pre-restart environment`,
                    values: { currentEnvironment: p.label },
                  }),
                }),
              ],
            })
          : null,
        r
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, { className: `block` }),
                (0, $.jsx)(`span`, {
                  className: `text-token-error-foreground`,
                  children: (0, $.jsx)(I, {
                    id: `settings.agentEnvironment.wslBashError`,
                    defaultMessage: `Codex can't run in {distributionName} because /usr/bin/bash is missing`,
                    description: `Error shown when the selected WSL distribution does not include the bash path Codex needs`,
                    values: {
                      distributionName:
                        r.distro ??
                        (0, $.jsx)(I, {
                          id: `settings.agentEnvironment.wslBashError.unknownDistribution`,
                          defaultMessage: `this WSL distribution`,
                          description: `Fallback distribution name shown when the selected WSL distribution is not available`,
                        }),
                    },
                  }),
                }),
              ],
            })
          : null,
      ],
    }),
    control: (0, $.jsx)(Ze, {
      triggerButton: (0, $.jsxs)(bt, {
        disabled: h,
        children: [
          a ? (0, $.jsx)(ce, { className: `icon-2xs text-token-text-secondary` }) : null,
          f.label,
        ],
      }),
      disabled: h,
      align: `end`,
      children: (0, $.jsx)(`div`, {
        className: `w-[320px] max-w-xs space-y-1`,
        children: d.map((n) =>
          (0, $.jsx)(
            Xe.Item,
            {
              onSelect: () => {
                (async () => {
                  if ((i(null), !n.value)) {
                    await W(e, t.runCodexInWsl, n.value);
                    return;
                  }
                  o(!0);
                  try {
                    let r;
                    try {
                      r = await k(`wsl-bash-availability`);
                    } catch {
                      i({ distro: null });
                      return;
                    }
                    if (!r.available) {
                      i({ distro: r.distro });
                      return;
                    }
                    (c != null && (await l.mutateAsync(null)),
                      await W(e, t.runCodexInWsl, n.value));
                  } finally {
                    o(!1);
                  }
                })();
              },
              RightIcon: u === n.value ? He : void 0,
              children: (0, $.jsxs)(`div`, {
                className: `flex flex-col items-start gap-0.5`,
                children: [
                  (0, $.jsx)(`span`, { className: `text-sm`, children: n.label }),
                  (0, $.jsx)(`span`, {
                    className: `text-xs text-token-text-secondary`,
                    children: n.description,
                  }),
                ],
              }),
            },
            String(n.value),
          ),
        ),
      }),
    }),
  });
}
function qn(e) {
  let t = (0, Z.c)(2),
    { value: n } = e,
    r = a[n],
    i;
  return (
    t[0] === r
      ? (i = t[1])
      : ((i = (0, $.jsx)($.Fragment, { children: r })), (t[0] = r), (t[1] = i)),
    i
  );
}
function Jn(e) {
  let t = (0, Z.c)(8),
    { icon: n, label: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = n
        ? (0, $.jsx)(`img`, { alt: typeof r == `string` ? r : ``, src: n, className: `icon-sm` })
        : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === r
    ? (a = t[4])
    : ((a = (0, $.jsx)(`span`, { className: `truncate`, children: r })), (t[3] = r), (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, $.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [i, a] })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function Yn() {
  let e = (0, Z.c)(48),
    n = S(D),
    r = F(),
    i = ne(`72216192`)?.get(`enable_i18n`, !0),
    [a, o] = (0, Q.useState)(``),
    s = U(t.localeOverride),
    c;
  e[0] === r.locale
    ? (c = e[1])
    : ((c = [
        { code: Ne, label: fr(Ne, Ne), localizedLabel: fr(`en`, r.locale) },
        ...je().map((e) => ({
          code: e.locale,
          label: fr(e.locale, e.locale),
          localizedLabel: fr(e.locale, r.locale),
        })),
      ].sort(Xn)),
      (e[0] = r.locale),
      (e[1] = c));
  let l = c,
    u = Me(s),
    d;
  e[2] !== l || e[3] !== s
    ? ((d = l.find((e) => ke(e.code, s)) ?? null), (e[2] = l), (e[3] = s), (e[4] = d))
    : (d = e[4]);
  let f = d,
    p;
  if (e[5] !== a || e[6] !== l) {
    bb0: {
      let e = a.trim().toLowerCase();
      if (!e) {
        p = l;
        break bb0;
      }
      p = l.filter(
        (t) => t.label.toLowerCase().includes(e) || t.localizedLabel.toLowerCase().includes(e),
      );
    }
    ((e[5] = a), (e[6] = l), (e[7] = p));
  } else p = e[7];
  let m = p;
  if (!i) return null;
  let h;
  e[8] === n
    ? (h = e[9])
    : ((h = (e) => {
        z(n, _, { selection: e ?? `auto`, surface: `settings` });
      }),
      (e[8] = n),
      (e[9] = h));
  let g = h,
    v,
    y;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(I, {
        id: `settings.ide.language.label`,
        defaultMessage: `Language`,
        description: `Label for language setting`,
      })),
      (y = (0, $.jsx)(I, {
        id: `settings.ide.language.description`,
        defaultMessage: `Language for the app UI`,
        description: `Description for language setting`,
      })),
      (e[10] = v),
      (e[11] = y))
    : ((v = e[10]), (y = e[11]));
  let b = l.length === 0,
    x = l.length === 0,
    C;
  e[12] !== r || e[13] !== f
    ? ((C = f
        ? f.label
        : r.formatMessage({
            id: `settings.ide.language.auto`,
            defaultMessage: `Auto Detect`,
            description: `Fallback label for auto language detect`,
          })),
      (e[12] = r),
      (e[13] = f),
      (e[14] = C))
    : (C = e[14]);
  let w;
  e[15] !== x || e[16] !== C
    ? ((w = (0, $.jsx)(bt, { disabled: x, children: C })), (e[15] = x), (e[16] = C), (e[17] = w))
    : (w = e[17]);
  let T;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => o(e.target.value)), (e[18] = T))
    : (T = e[18]);
  let E;
  e[19] === r
    ? (E = e[20])
    : ((E = r.formatMessage({
        id: `settings.ide.language.search`,
        defaultMessage: `Search languages`,
        description: `Search placeholder for language picker`,
      })),
      (e[19] = r),
      (e[20] = E));
  let O;
  e[21] !== a || e[22] !== E
    ? ((O = (0, $.jsx)(`div`, {
        className: `pb-1`,
        children: (0, $.jsx)(Ye, { value: a, onChange: T, placeholder: E }),
      })),
      (e[21] = a),
      (e[22] = E),
      (e[23] = O))
    : (O = e[23]);
  let k = u == null ? He : void 0,
    A;
  e[24] !== g || e[25] !== n
    ? ((A = () => {
        (async () => {
          try {
            (await W(n, t.localeOverride, null), g(null));
          } catch {}
        })();
      }),
      (e[24] = g),
      (e[25] = n),
      (e[26] = A))
    : (A = e[26]);
  let j;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(I, {
        id: `settings.ide.language.autoOption`,
        defaultMessage: `Auto Detect`,
        description: `Auto detect language option`,
      })),
      (e[27] = j))
    : (j = e[27]);
  let M;
  e[28] !== k || e[29] !== A
    ? ((M = (0, $.jsx)(Xe.Item, { RightIcon: k, onSelect: A, children: j })),
      (e[28] = k),
      (e[29] = A),
      (e[30] = M))
    : (M = e[30]);
  let N;
  if (e[31] !== m || e[32] !== s || e[33] !== g || e[34] !== n) {
    let r;
    (e[36] !== s || e[37] !== g || e[38] !== n
      ? ((r = (e) => {
          let r = ke(e.code, s);
          return (0, $.jsx)(
            Xe.Item,
            {
              RightIcon: r ? He : void 0,
              onSelect: () => {
                (async () => {
                  try {
                    let r = Ae(e.code) ? Ne : e.code;
                    (await W(n, t.localeOverride, r), g(r));
                  } catch {}
                })();
              },
              children: (0, $.jsxs)(`span`, {
                className: `truncate`,
                children: [e.label, e.localizedLabel === e.label ? `` : ` • ${e.localizedLabel}`],
              }),
            },
            e.code,
          );
        }),
        (e[36] = s),
        (e[37] = g),
        (e[38] = n),
        (e[39] = r))
      : (r = e[39]),
      (N = m.map(r)),
      (e[31] = m),
      (e[32] = s),
      (e[33] = g),
      (e[34] = n),
      (e[35] = N));
  } else N = e[35];
  let P;
  e[40] === N
    ? (P = e[41])
    : ((P = (0, $.jsx)(`div`, { className: `max-h-80 overflow-y-auto`, children: N })),
      (e[40] = N),
      (e[41] = P));
  let L;
  return (
    e[42] !== O || e[43] !== M || e[44] !== P || e[45] !== b || e[46] !== w
      ? ((L = (0, $.jsx)(q, {
          label: v,
          description: y,
          control: (0, $.jsxs)(Ze, {
            contentWidth: `menuWide`,
            disabled: b,
            align: `end`,
            triggerButton: w,
            children: [O, M, P],
          }),
        })),
        (e[42] = O),
        (e[43] = M),
        (e[44] = P),
        (e[45] = b),
        (e[46] = w),
        (e[47] = L))
      : (L = e[47]),
    L
  );
}
function Xn(e, t) {
  return e.label.localeCompare(t.label);
}
function Zn() {
  let e = (0, Z.c)(27),
    t = S(D),
    r = F(),
    i = U(n.theme) ?? `system`,
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = function (e) {
        W(t, n.theme, e, { optimistic: !1 });
      }),
      (e[0] = t),
      (e[1] = a));
  let o = a,
    s,
    c;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.theme })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.appearance.theme.description`,
        defaultMessage: `Use light, dark, or match your system`,
        description: `Description for theme selector in appearance settings`,
      })),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3]));
  let u;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(or, {
        icon: (0, $.jsx)(St, { className: `icon-sm` }),
        label: (0, $.jsx)(I, { ...Y.light }),
      })),
      (e[4] = u))
    : (u = e[4]);
  let d;
  e[5] === r ? (d = e[6]) : ((d = r.formatMessage(Y.light)), (e[5] = r), (e[6] = d));
  let f;
  e[7] === d ? (f = e[8]) : ((f = { id: `light`, label: u, ariaLabel: d }), (e[7] = d), (e[8] = f));
  let p;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(or, {
        icon: (0, $.jsx)(l, { className: `icon-sm` }),
        label: (0, $.jsx)(I, { ...Y.dark }),
      })),
      (e[9] = p))
    : (p = e[9]);
  let m;
  e[10] === r ? (m = e[11]) : ((m = r.formatMessage(Y.dark)), (e[10] = r), (e[11] = m));
  let h;
  e[12] === m
    ? (h = e[13])
    : ((h = { id: `dark`, label: p, ariaLabel: m }), (e[12] = m), (e[13] = h));
  let g;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(or, {
        icon: (0, $.jsx)(ot, { className: `icon-sm` }),
        label: (0, $.jsx)(I, { ...Y.themeSystem }),
      })),
      (e[14] = g))
    : (g = e[14]);
  let _;
  e[15] === r ? (_ = e[16]) : ((_ = r.formatMessage(Y.themeSystem)), (e[15] = r), (e[16] = _));
  let v;
  e[17] === _
    ? (v = e[18])
    : ((v = { id: `system`, label: g, ariaLabel: _ }), (e[17] = _), (e[18] = v));
  let y;
  e[19] !== v || e[20] !== f || e[21] !== h
    ? ((y = [f, h, v]), (e[19] = v), (e[20] = f), (e[21] = h), (e[22] = y))
    : (y = e[22]);
  let b;
  return (
    e[23] !== o || e[24] !== i || e[25] !== y
      ? ((b = (0, $.jsx)(q, {
          id: X.theme,
          label: s,
          description: c,
          control: (0, $.jsx)(Dt, { selectedId: i, onSelect: o, options: y }),
        })),
        (e[23] = o),
        (e[24] = i),
        (e[25] = y),
        (e[26] = b))
      : (b = e[26]),
    b
  );
}
function Qn() {
  let e = S(D),
    t = F(),
    r = U(n.usePointerCursors);
  return (0, $.jsx)(q, {
    id: X.pointerCursors,
    label: (0, $.jsx)(I, { ...Y.pointerCursors }),
    description: (0, $.jsx)(I, {
      id: `settings.general.appearance.usePointerCursors.description`,
      defaultMessage: `Change the cursor to a pointer when hovering over interactive elements`,
      description: `Description for pointer cursor interaction setting`,
    }),
    control: (0, $.jsx)(K, {
      checked: r === !0,
      onChange: (t) => {
        W(e, n.usePointerCursors, t);
      },
      ariaLabel: t.formatMessage(Y.pointerCursors),
    }),
  });
}
function $n() {
  let e = (0, Z.c)(10),
    t = S(D),
    n = F(),
    r = C(_e) !== !1,
    i,
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(I, { ...Y.bottomPanel })),
      (a = (0, $.jsx)(I, {
        id: `settings.general.bottomPanel.description`,
        defaultMessage: `Show the bottom panel control in the app header`,
        description: `Description for bottom panel launcher visibility setting`,
      })),
      (e[0] = i),
      (e[1] = a))
    : ((i = e[0]), (a = e[1]));
  let o;
  e[2] === t
    ? (o = e[3])
    : ((o = (e) => {
        ve(t, e);
      }),
      (e[2] = t),
      (e[3] = o));
  let s;
  e[4] === n ? (s = e[5]) : ((s = n.formatMessage(Y.bottomPanel)), (e[4] = n), (e[5] = s));
  let c;
  return (
    e[6] !== r || e[7] !== o || e[8] !== s
      ? ((c = (0, $.jsx)(q, {
          id: X.bottomPanel,
          label: i,
          description: a,
          control: (0, $.jsx)(K, { checked: r, onChange: o, ariaLabel: s }),
        })),
        (e[6] = r),
        (e[7] = o),
        (e[8] = s),
        (e[9] = c))
      : (c = e[9]),
    c
  );
}
function er() {
  let e = (0, Z.c)(21),
    n = S(D),
    r = F(),
    i = U(t.defaultTerminalLocation);
  if (C(_e) === !1) return null;
  let a;
  e[0] === n
    ? (a = e[1])
    : ((a = function (e) {
        W(n, t.defaultTerminalLocation, e);
      }),
      (e[0] = n),
      (e[1] = a));
  let o = a,
    s,
    c;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.defaultTerminalLocation })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.defaultTerminalLocation.description`,
        defaultMessage: `Choose where the terminal shortcut and environment actions open terminal tabs`,
        description: `Description for default terminal location setting`,
      })),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3]));
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(I, { ...Y.terminalLocationBottom })), (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === r
    ? (u = e[6])
    : ((u = r.formatMessage(Y.terminalLocationBottom)), (e[5] = r), (e[6] = u));
  let d;
  e[7] === u
    ? (d = e[8])
    : ((d = { id: `bottom`, label: l, ariaLabel: u }), (e[7] = u), (e[8] = d));
  let f;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(I, { ...Y.terminalLocationRight })), (e[9] = f))
    : (f = e[9]);
  let p;
  e[10] === r
    ? (p = e[11])
    : ((p = r.formatMessage(Y.terminalLocationRight)), (e[10] = r), (e[11] = p));
  let m;
  e[12] === p
    ? (m = e[13])
    : ((m = { id: `right`, label: f, ariaLabel: p }), (e[12] = p), (e[13] = m));
  let h;
  e[14] !== d || e[15] !== m ? ((h = [d, m]), (e[14] = d), (e[15] = m), (e[16] = h)) : (h = e[16]);
  let g;
  return (
    e[17] !== i || e[18] !== o || e[19] !== h
      ? ((g = (0, $.jsx)(q, {
          id: X.defaultTerminalLocation,
          label: s,
          description: c,
          control: (0, $.jsx)(Dt, { selectedId: i, onSelect: o, options: h }),
        })),
        (e[17] = i),
        (e[18] = o),
        (e[19] = h),
        (e[20] = g))
      : (g = e[20]),
    g
  );
}
function tr() {
  let e = (0, Z.c)(21),
    t = S(D),
    r = F(),
    i = U(n.diffMarkerStyle),
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = function (e) {
        W(t, n.diffMarkerStyle, e);
      }),
      (e[0] = t),
      (e[1] = a));
  let o = a,
    s,
    c;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.diffMarkers })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.appearance.diffMarkerStyle.description`,
        defaultMessage: `Use colored bars and backgrounds or show + and - symbols on each changed line`,
        description: `Description for the diff marker style setting`,
      })),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3]));
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(I, { ...Y.color })), (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === r
    ? (u = e[6])
    : ((u = r.formatMessage({
        id: `settings.general.appearance.diffMarkerStyle.color.ariaLabel`,
        defaultMessage: `Color diff markers`,
        description: `Aria label for the color diff marker option`,
      })),
      (e[5] = r),
      (e[6] = u));
  let d;
  e[7] === u ? (d = e[8]) : ((d = { id: `color`, label: l, ariaLabel: u }), (e[7] = u), (e[8] = d));
  let f;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(I, { ...Y.plusMinus })), (e[9] = f))
    : (f = e[9]);
  let p;
  e[10] === r
    ? (p = e[11])
    : ((p = r.formatMessage({
        id: `settings.general.appearance.diffMarkerStyle.symbols.ariaLabel`,
        defaultMessage: `Plus / minus diff markers`,
        description: `Aria label for the plus and minus diff marker option`,
      })),
      (e[10] = r),
      (e[11] = p));
  let m;
  e[12] === p
    ? (m = e[13])
    : ((m = { id: `symbols`, label: f, ariaLabel: p }), (e[12] = p), (e[13] = m));
  let h;
  e[14] !== d || e[15] !== m ? ((h = [d, m]), (e[14] = d), (e[15] = m), (e[16] = h)) : (h = e[16]);
  let g;
  return (
    e[17] !== o || e[18] !== i || e[19] !== h
      ? ((g = (0, $.jsx)(q, {
          id: X.diffMarkers,
          className: `gap-6`,
          label: s,
          description: c,
          control: (0, $.jsx)(Dt, { selectedId: i, onSelect: o, options: h }),
        })),
        (e[17] = o),
        (e[18] = i),
        (e[19] = h),
        (e[20] = g))
      : (g = e[20]),
    g
  );
}
function nr() {
  let e = (0, Z.c)(27),
    t = S(D),
    r = F(),
    i = U(n.reducedMotionPreference),
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = function (e) {
        W(t, n.reducedMotionPreference, e);
      }),
      (e[0] = t),
      (e[1] = a));
  let o = a,
    s,
    c;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.reduceMotion })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.appearance.reducedMotion.description`,
        defaultMessage: `Reduce animations or match your system`,
        description: `Description for the reduced motion appearance setting`,
      })),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3]));
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(I, { ...Y.reducedMotionSystem })), (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === r ? (u = e[6]) : ((u = r.formatMessage(Y.reducedMotionSystem)), (e[5] = r), (e[6] = u));
  let d;
  e[7] === u
    ? (d = e[8])
    : ((d = { id: `system`, label: l, ariaLabel: u }), (e[7] = u), (e[8] = d));
  let f;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(I, { ...Y.on })), (e[9] = f))
    : (f = e[9]);
  let p;
  e[10] === r ? (p = e[11]) : ((p = r.formatMessage(Y.on)), (e[10] = r), (e[11] = p));
  let m;
  e[12] === p
    ? (m = e[13])
    : ((m = { id: `on`, label: f, ariaLabel: p }), (e[12] = p), (e[13] = m));
  let h;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(I, { ...Y.off })), (e[14] = h))
    : (h = e[14]);
  let g;
  e[15] === r ? (g = e[16]) : ((g = r.formatMessage(Y.off)), (e[15] = r), (e[16] = g));
  let _;
  e[17] === g
    ? (_ = e[18])
    : ((_ = { id: `off`, label: h, ariaLabel: g }), (e[17] = g), (e[18] = _));
  let v;
  e[19] !== _ || e[20] !== d || e[21] !== m
    ? ((v = [d, m, _]), (e[19] = _), (e[20] = d), (e[21] = m), (e[22] = v))
    : (v = e[22]);
  let y;
  return (
    e[23] !== o || e[24] !== i || e[25] !== v
      ? ((y = (0, $.jsx)(q, {
          id: X.reduceMotion,
          label: s,
          description: c,
          control: (0, $.jsx)(Dt, { selectedId: i, onSelect: o, options: v }),
        })),
        (e[23] = o),
        (e[24] = i),
        (e[25] = v),
        (e[26] = y))
      : (y = e[26]),
    y
  );
}
function rr() {
  let e = (0, Z.c)(27),
    n = S(D),
    r = F(),
    { mode: i } = st(),
    { enterBehavior: a } = ht(),
    o;
  e[0] === a ? (o = e[1]) : ((o = Ue(ft(a))), (e[0] = a), (e[1] = o));
  let s = o,
    c;
  e[2] === n
    ? (c = e[3])
    : ((c = function (e) {
        W(n, t.followUpQueueMode, e);
      }),
      (e[2] = n),
      (e[3] = c));
  let l = c,
    u;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(I, { ...Y.followUpBehavior })), (e[4] = u))
    : (u = e[4]);
  let d;
  e[5] === s
    ? (d = e[6])
    : ((d = (0, $.jsx)(I, {
        id: `settings.general.followUpQueueMode.description`,
        defaultMessage: `Queue follow-ups while Codex runs or steer the current run. Press {invertFollowUpShortcutLabel} to do the opposite for one message`,
        description: `Description for follow-up queue mode setting`,
        values: { invertFollowUpShortcutLabel: s },
      })),
      (e[5] = s),
      (e[6] = d));
  let f;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(I, { ...Y.queue })), (e[7] = f))
    : (f = e[7]);
  let p;
  e[8] === r ? (p = e[9]) : ((p = r.formatMessage(Y.queue)), (e[8] = r), (e[9] = p));
  let m;
  e[10] === p
    ? (m = e[11])
    : ((m = { id: `queue`, label: f, ariaLabel: p }), (e[10] = p), (e[11] = m));
  let h;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(I, { ...Y.steer })), (e[12] = h))
    : (h = e[12]);
  let g;
  e[13] === r ? (g = e[14]) : ((g = r.formatMessage(Y.steer)), (e[13] = r), (e[14] = g));
  let _;
  e[15] === g
    ? (_ = e[16])
    : ((_ = { id: `steer`, label: h, ariaLabel: g }), (e[15] = g), (e[16] = _));
  let v;
  e[17] !== m || e[18] !== _ ? ((v = [m, _]), (e[17] = m), (e[18] = _), (e[19] = v)) : (v = e[19]);
  let y;
  e[20] !== l || e[21] !== i || e[22] !== v
    ? ((y = (0, $.jsx)(Dt, { selectedId: i, onSelect: l, options: v })),
      (e[20] = l),
      (e[21] = i),
      (e[22] = v),
      (e[23] = y))
    : (y = e[23]);
  let b;
  return (
    e[24] !== y || e[25] !== d
      ? ((b = (0, $.jsx)(q, {
          id: X.followUpBehavior,
          className: `gap-6`,
          label: u,
          description: d,
          control: y,
        })),
        (e[24] = y),
        (e[25] = d),
        (e[26] = b))
      : (b = e[26]),
    b
  );
}
function ir() {
  let e = (0, Z.c)(9),
    n = S(D),
    r = F(),
    i = U(t.showContextWindowUsage),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(I, {
        id: `settings.general.contextUsageIndicator.label`,
        defaultMessage: `Show context window usage`,
        description: `Label for the composer context usage indicator setting`,
      })),
      (e[0] = a))
    : (a = e[0]);
  let o = i === !0,
    s;
  e[1] === n
    ? (s = e[2])
    : ((s = (e) => {
        W(n, t.showContextWindowUsage, e);
      }),
      (e[1] = n),
      (e[2] = s));
  let c;
  e[3] === r
    ? (c = e[4])
    : ((c = r.formatMessage({
        id: `settings.general.contextUsageIndicator.ariaLabel`,
        defaultMessage: `Show context window usage in the composer`,
        description: `Accessible label for the composer context usage indicator setting toggle`,
      })),
      (e[3] = r),
      (e[4] = c));
  let l;
  return (
    e[5] !== o || e[6] !== s || e[7] !== c
      ? ((l = (0, $.jsx)(q, {
          label: a,
          control: (0, $.jsx)(K, { checked: o, onChange: s, ariaLabel: c }),
        })),
        (e[5] = o),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
function ar() {
  let e = (0, Z.c)(21),
    n = S(D),
    r = F(),
    i = U(t.reviewDelivery) ?? `inline`,
    a;
  e[0] === n
    ? (a = e[1])
    : ((a = function (e) {
        W(n, t.reviewDelivery, e);
      }),
      (e[0] = n),
      (e[1] = a));
  let o = a,
    s,
    c;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.codeReview })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.reviewDelivery.description`,
        defaultMessage: `Start /review in the current chat when possible or launch a separate review chat`,
        description: `Description for the code review delivery setting`,
      })),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3]));
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(I, { ...Y.inline })), (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === r ? (u = e[6]) : ((u = r.formatMessage(Y.inline)), (e[5] = r), (e[6] = u));
  let d;
  e[7] === u
    ? (d = e[8])
    : ((d = { id: `inline`, label: l, ariaLabel: u }), (e[7] = u), (e[8] = d));
  let f;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(I, { ...Y.detached })), (e[9] = f))
    : (f = e[9]);
  let p;
  e[10] === r ? (p = e[11]) : ((p = r.formatMessage(Y.detached)), (e[10] = r), (e[11] = p));
  let m;
  e[12] === p
    ? (m = e[13])
    : ((m = { id: `detached`, label: f, ariaLabel: p }), (e[12] = p), (e[13] = m));
  let h;
  e[14] !== d || e[15] !== m ? ((h = [d, m]), (e[14] = d), (e[15] = m), (e[16] = h)) : (h = e[16]);
  let g;
  return (
    e[17] !== o || e[18] !== i || e[19] !== h
      ? ((g = (0, $.jsx)(q, {
          id: X.codeReview,
          className: `flex gap-6`,
          label: s,
          description: c,
          control: (0, $.jsx)(Dt, { selectedId: i, onSelect: o, options: h }),
        })),
        (e[17] = o),
        (e[18] = i),
        (e[19] = h),
        (e[20] = g))
      : (g = e[20]),
    g
  );
}
function or(e) {
  let t = (0, Z.c)(5),
    { icon: n, label: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, $.jsx)(`span`, { className: `text-sm`, children: r })), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, $.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [n, i] })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function sr() {
  let e = (0, Z.c)(22),
    t = S(D),
    r = F(),
    i = U(n.sansFontSize) ?? 14,
    a;
  e[0] !== i || e[1] !== t
    ? ((a = function (e) {
        let r = Number.parseFloat(e.value);
        if (Number.isNaN(r)) {
          e.value = String(i);
          return;
        }
        ((e.value = String(r)), r !== i && W(t, n.sansFontSize, r));
      }),
      (e[0] = i),
      (e[1] = t),
      (e[2] = a))
    : (a = e[2]);
  let o = a,
    s,
    c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.uiFontSize })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.appearance.sansFontSize.row.description`,
        defaultMessage: `Adjust the base size used for the Codex UI`,
        description: `Description for UI font size setting`,
      })),
      (e[3] = s),
      (e[4] = c))
    : ((s = e[3]), (c = e[4]));
  let l, u;
  e[5] === o
    ? ((l = e[6]), (u = e[7]))
    : ((l = (e) => {
        o(e.currentTarget);
      }),
      (u = (e) => {
        e.key === `Enter` && (e.preventDefault(), o(e.currentTarget));
      }),
      (e[5] = o),
      (e[6] = l),
      (e[7] = u));
  let d;
  e[8] === r
    ? (d = e[9])
    : ((d = r.formatMessage({
        id: `settings.general.appearance.sansFontSize`,
        defaultMessage: `Sans font size`,
        description: `Label for sans font size setting`,
      })),
      (e[8] = r),
      (e[9] = d));
  let f;
  e[10] !== i || e[11] !== l || e[12] !== u || e[13] !== d
    ? ((f = (0, $.jsx)(
        `input`,
        {
          className: `focus-visible:ring-token-focus h-token-button-composer w-16 rounded-lg border border-token-border bg-token-input-background px-2 py-0 text-right text-sm text-token-text-primary shadow-sm outline-none focus-visible:ring-2`,
          type: `number`,
          min: 11,
          max: 16,
          step: 1,
          defaultValue: i,
          onBlur: l,
          onKeyDown: u,
          "aria-label": d,
        },
        i,
      )),
      (e[10] = i),
      (e[11] = l),
      (e[12] = u),
      (e[13] = d),
      (e[14] = f))
    : (f = e[14]);
  let p;
  e[15] === r
    ? (p = e[16])
    : ((p = r.formatMessage({
        id: `settings.general.appearance.sansFontSize.units`,
        defaultMessage: `px`,
        description: `Unit label for sans font size setting`,
      })),
      (e[15] = r),
      (e[16] = p));
  let m;
  e[17] === p
    ? (m = e[18])
    : ((m = (0, $.jsx)(`span`, { className: `text-sm text-token-text-secondary`, children: p })),
      (e[17] = p),
      (e[18] = m));
  let h;
  return (
    e[19] !== f || e[20] !== m
      ? ((h = (0, $.jsx)(q, {
          id: X.uiFontSize,
          label: s,
          description: c,
          control: (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [f, m] }),
        })),
        (e[19] = f),
        (e[20] = m),
        (e[21] = h))
      : (h = e[21]),
    h
  );
}
function cr() {
  let e = (0, Z.c)(22),
    t = S(D),
    r = F(),
    i = U(n.codeFontSize) ?? 12,
    a;
  e[0] !== i || e[1] !== t
    ? ((a = function (e) {
        let r = Number.parseFloat(e.value);
        if (Number.isNaN(r)) {
          e.value = String(i);
          return;
        }
        ((e.value = String(r)), r !== i && W(t, n.codeFontSize, r));
      }),
      (e[0] = i),
      (e[1] = t),
      (e[2] = a))
    : (a = e[2]);
  let o = a,
    s,
    c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, { ...Y.codeFontSize })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.appearance.codeFontSize.row.description`,
        defaultMessage: `Adjust the base size used for code across chats and diffs`,
        description: `Description for code font size controls`,
      })),
      (e[3] = s),
      (e[4] = c))
    : ((s = e[3]), (c = e[4]));
  let l, u;
  e[5] === o
    ? ((l = e[6]), (u = e[7]))
    : ((l = (e) => {
        o(e.currentTarget);
      }),
      (u = (e) => {
        e.key === `Enter` && (e.preventDefault(), o(e.currentTarget));
      }),
      (e[5] = o),
      (e[6] = l),
      (e[7] = u));
  let d;
  e[8] === r
    ? (d = e[9])
    : ((d = r.formatMessage({
        id: `settings.general.appearance.codeFontSize`,
        defaultMessage: `Code font size`,
        description: `Label for code font size setting`,
      })),
      (e[8] = r),
      (e[9] = d));
  let f;
  e[10] !== i || e[11] !== l || e[12] !== u || e[13] !== d
    ? ((f = (0, $.jsx)(
        `input`,
        {
          className: `focus-visible:ring-token-focus h-token-button-composer w-16 rounded-lg border border-token-border bg-token-input-background px-2 py-0 text-right text-sm text-token-text-primary shadow-sm outline-none focus-visible:ring-2`,
          type: `number`,
          min: 8,
          max: 24,
          step: 1,
          defaultValue: i,
          onBlur: l,
          onKeyDown: u,
          "aria-label": d,
        },
        i,
      )),
      (e[10] = i),
      (e[11] = l),
      (e[12] = u),
      (e[13] = d),
      (e[14] = f))
    : (f = e[14]);
  let p;
  e[15] === r
    ? (p = e[16])
    : ((p = r.formatMessage({
        id: `settings.general.appearance.codeFontSize.units`,
        defaultMessage: `px`,
        description: `Unit label for code font size setting`,
      })),
      (e[15] = r),
      (e[16] = p));
  let m;
  e[17] === p
    ? (m = e[18])
    : ((m = (0, $.jsx)(`span`, { className: `text-sm text-token-text-secondary`, children: p })),
      (e[17] = p),
      (e[18] = m));
  let h;
  return (
    e[19] !== f || e[20] !== m
      ? ((h = (0, $.jsx)(q, {
          id: X.codeFontSize,
          label: s,
          description: c,
          control: (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [f, m] }),
        })),
        (e[19] = f),
        (e[20] = m),
        (e[21] = h))
      : (h = e[21]),
    h
  );
}
function lr() {
  let e = S(D),
    t = F(),
    { platform: r } = xe(),
    i = r === `macOS`,
    a = U(n.useFontSmoothing) ?? !0;
  return i
    ? (0, $.jsx)(q, {
        label: (0, $.jsx)(I, {
          id: `settings.general.appearance.fontSmoothing.label`,
          defaultMessage: `Font Smoothing`,
          description: `Label for the macOS font smoothing setting`,
        }),
        description: (0, $.jsx)(I, {
          id: `settings.general.appearance.fontSmoothing.description`,
          defaultMessage: `Use native macOS font anti-aliasing`,
          description: `Description for the macOS font smoothing setting`,
        }),
        control: (0, $.jsx)(K, {
          checked: a,
          onChange: (t) => {
            W(e, n.useFontSmoothing, t);
          },
          ariaLabel: t.formatMessage({
            id: `settings.general.appearance.fontSmoothing.label`,
            defaultMessage: `Font Smoothing`,
            description: `Label for the macOS font smoothing setting`,
          }),
        }),
      })
    : null;
}
function ur() {
  let e = (0, Z.c)(13),
    n = S(D),
    { enterBehavior: r } = ht(),
    { modifierSymbol: i } = xe(),
    a = r === `cmdIfMultiline`,
    o;
  e[0] === i
    ? (o = e[1])
    : ((o = (0, $.jsx)(I, {
        id: `settings.general.enterBehavior.label`,
        defaultMessage: `Require {modifierSymbol} + enter to send long prompts`,
        description: `Label for the enter key behavior toggle`,
        values: { modifierSymbol: i },
      })),
      (e[0] = i),
      (e[1] = o));
  let s;
  e[2] === i
    ? (s = e[3])
    : ((s = (0, $.jsx)(I, {
        id: `settings.general.enterBehavior.description`,
        defaultMessage: `When enabled, multiline prompts require {modifierSymbol} + enter to send`,
        description: `Description for the enter key behavior toggle`,
        values: { modifierSymbol: i },
      })),
      (e[2] = i),
      (e[3] = s));
  let c;
  e[4] === n
    ? (c = e[5])
    : ((c = (e) => {
        let r = e ? `cmdIfMultiline` : `enter`;
        W(n, t.composerEnterBehavior, r);
      }),
      (e[4] = n),
      (e[5] = c));
  let l;
  e[6] !== a || e[7] !== c
    ? ((l = (0, $.jsx)(K, { checked: a, onChange: c })), (e[6] = a), (e[7] = c), (e[8] = l))
    : (l = e[8]);
  let u;
  return (
    e[9] !== o || e[10] !== s || e[11] !== l
      ? ((u = (0, $.jsx)(q, { label: o, description: s, control: l })),
        (e[9] = o),
        (e[10] = s),
        (e[11] = l),
        (e[12] = u))
      : (u = e[12]),
    u
  );
}
function dr() {
  let e = (0, Z.c)(10),
    n = S(D),
    { platform: r } = xe(),
    i = r !== `windows`,
    a = F(),
    o = U(t.preventSleepWhileRunning);
  if (!i) return null;
  let s, c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(I, {
        id: `settings.general.power.preventSleepWhileRunning.label`,
        defaultMessage: `Prevent sleep while running`,
        description: `Label for preventing mac sleep while a thread runs`,
      })),
      (c = (0, $.jsx)(I, {
        id: `settings.general.power.preventSleepWhileRunning.description`,
        defaultMessage: `Keep your computer awake while Codex is running a chat`,
        description: `Description for preventing sleep while a thread runs`,
      })),
      (e[0] = s),
      (e[1] = c))
    : ((s = e[0]), (c = e[1]));
  let l = o ?? !1,
    u;
  e[2] === n
    ? (u = e[3])
    : ((u = (e) => {
        W(n, t.preventSleepWhileRunning, e);
      }),
      (e[2] = n),
      (e[3] = u));
  let d;
  e[4] === a
    ? (d = e[5])
    : ((d = a.formatMessage({
        id: `settings.general.power.preventSleepWhileRunning.label`,
        defaultMessage: `Prevent sleep while running`,
        description: `Label for preventing mac sleep while a thread runs`,
      })),
      (e[4] = a),
      (e[5] = d));
  let f;
  return (
    e[6] !== l || e[7] !== u || e[8] !== d
      ? ((f = (0, $.jsx)(q, {
          label: s,
          description: c,
          control: (0, $.jsx)(K, { checked: l, onChange: u, ariaLabel: d }),
        })),
        (e[6] = l),
        (e[7] = u),
        (e[8] = d),
        (e[9] = f))
      : (f = e[9]),
    f
  );
}
function fr(e, t) {
  try {
    return new Intl.DisplayNames([t], { type: `language`, languageDisplay: `standard` }).of(e) ?? e;
  } catch {
    return e;
  }
}
export { Dn as i, En as n, Cn as r, Kn as t };
//# sourceMappingURL=general-settings-1.js.map
