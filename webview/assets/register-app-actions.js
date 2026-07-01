import { n as e } from "./rolldown-runtime.js";
import {
  $A as t,
  DN as n,
  EN as r,
  FN as i,
  GA as a,
  Hi as o,
  JA as s,
  JN as c,
  KA as l,
  MF as u,
  MN as d,
  QA as f,
  Qz as p,
  RN as ee,
  S_ as te,
  UA as ne,
  Ui as re,
  Vi as ie,
  WA as m,
  XA as h,
  XR as ae,
  Xz as g,
  YA as oe,
  ZA as _,
  aj as v,
  ej as y,
  g_ as se,
  iB as ce,
  iF as b,
  jE as le,
  lB as ue,
  mB as x,
  nB as S,
  nj as de,
  oB as C,
  oj as fe,
  pI as pe,
  qA as w,
  qN as T,
  rj as E,
  tj as me,
  uB as D,
  vB as he,
  vp as ge,
  x_ as O,
  y_ as _e,
  yp as ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  $x as ye,
  CC as k,
  CS as A,
  Cw as be,
  Cx as xe,
  Db as Se,
  GC as Ce,
  JC as we,
  Mw as j,
  Nw as M,
  SS as Te,
  UC as Ee,
  XC as De,
  Xx as Oe,
  ZC as ke,
  _x as N,
  bC as Ae,
  bw as je,
  gC as Me,
  gw as Ne,
  hC as Pe,
  jw as P,
  kb as Fe,
  mC as F,
  nS as Ie,
  pC as I,
  qC as L,
  tS as Le,
  vC as Re,
  vw as ze,
  wC as Be,
  wx as Ve,
  xw as He,
  xx as Ue,
  yC as We,
  yw as Ge,
} from "./app-initial~app-main~onboarding-page.js";
import {
  a as R,
  i as Ke,
  o as z,
  r as qe,
  t as Je,
} from "./app-initial~app-main~register-app-actions.js";
var B,
  V,
  Ye = e(() => {
    (b(),
      g(),
      r(),
      z(),
      (B = D({ type: C(`app.appearance.get`) })),
      (V = R({
        schema: B,
        run: async () => {
          let [e, t, r, i, a] = await Promise.all([
            n(u.theme),
            n(u.lightCodeThemeId),
            n(u.darkCodeThemeId),
            n(u.lightChromeTheme),
            n(u.darkChromeTheme),
          ]);
          return {
            schemaVersion: 1,
            mode: e,
            themes: {
              light: { codeThemeId: t, chromeTheme: i },
              dark: { codeThemeId: r, chromeTheme: a },
            },
          };
        },
      })));
  }),
  H,
  U,
  Xe = e(() => {
    (g(),
      L(),
      z(),
      (H = D({ type: C(`app.appearance.get_available_themes`) })),
      (U = R({
        schema: H,
        run: () => ({
          schemaVersion: 1,
          themes: Ce().map((e) => ({
            id: e.id,
            label: e.label,
            supportsDark: e.registrationByVariant.dark != null,
            supportsLight: e.registrationByVariant.light != null,
          })),
        }),
      })));
  });
async function W(e, t, n, r) {
  let a = i(`get-settings`),
    o = e.queryClient?.getQueryData(a),
    s = r?.optimistic ?? !0;
  s && e.queryClient?.setQueryData(a, { ...o, values: { ...o?.values, [t.key]: n } });
  try {
    (await d(t, n),
      s || e.queryClient?.setQueryData(a, { ...o, values: { ...o?.values, [t.key]: n } }));
  } catch (t) {
    throw (o != null && e.queryClient?.setQueryData(a, o), t);
  } finally {
    (await e.queryClient?.invalidateQueries({ queryKey: a }),
      c.dispatchMessage(`query-cache-invalidate`, { queryKey: [...a] }));
  }
}
var G = e(() => {
    (T(), r(), ee());
  }),
  K,
  q,
  Ze = e(() => {
    (b(),
      g(),
      z(),
      G(),
      (K = D({ type: C(`app.appearance.set_mode`), mode: p([`light`, `dark`, `system`]) })),
      (q = R({
        schema: K,
        run: async ({ mode: e }, t) => (
          await W(t, u.theme, e, { optimistic: !1 }),
          { schemaVersion: 1, mode: e }
        ),
      })));
  });
async function Qe(e, t, r) {
  let { chromeThemeSetting: i, codeThemeSetting: a } = et(t),
    o = De(await n(i), t);
  if (r.kind === `custom`) {
    let t = $e(o, r.patch);
    return (await W(e, i, t), t);
  }
  let s = await Ee(r.themeId, t),
    c = {
      ...o,
      ...s,
      fonts: { ...o.fonts, ...s.fonts },
      semanticColors: { ...o.semanticColors, ...s.semanticColors },
    };
  return (await Promise.all([W(e, a, r.themeId), W(e, i, c)]), c);
}
function $e(e, t) {
  return {
    ...e,
    ...t,
    fonts: t.fonts == null ? e.fonts : { ...e.fonts, ...t.fonts },
    semanticColors:
      t.semanticColors == null ? e.semanticColors : { ...e.semanticColors, ...t.semanticColors },
  };
}
function et(e) {
  return e === `light`
    ? { chromeThemeSetting: u.lightChromeTheme, codeThemeSetting: u.lightCodeThemeId }
    : { chromeThemeSetting: u.darkChromeTheme, codeThemeSetting: u.darkCodeThemeId };
}
var J,
  tt,
  nt,
  rt,
  it,
  at,
  ot = e(() => {
    (b(),
      g(),
      r(),
      ke(),
      L(),
      z(),
      G(),
      (J = x().regex(/^#[0-9a-fA-F]{6}$/)),
      (tt = D({ code: x().nullable().optional(), ui: x().nullable().optional() })),
      (nt = D({ diffAdded: J, diffRemoved: J, skill: J })),
      (rt = D({
        accent: J.optional(),
        contrast: ue().int().min(0).max(100).optional(),
        fonts: tt.optional(),
        ink: J.optional(),
        opaqueWindows: S().optional(),
        semanticColors: nt.partial().optional(),
        surface: J.optional(),
      })),
      (it = D({
        type: C(`app.appearance.set_theme`),
        theme: ce(`kind`, [
          D({ kind: C(`preset`), themeId: x().refine(we, `Invalid code theme id`) }),
          D({ kind: C(`custom`), patch: rt }),
        ]),
        variant: p([`light`, `dark`, `both`]).default(`both`),
      })),
      (at = R({
        schema: it,
        run: async ({ theme: e, variant: t }, n) => {
          let r = [],
            i = { schemaVersion: 1, theme: e, updated: r };
          if (t === `light` || t === `both`) {
            let t = await Qe(n, `light`, e);
            (r.push(`light`), (i.appearanceLightChromeTheme = t));
          }
          if (t === `dark` || t === `both`) {
            let t = await Qe(n, `dark`, e);
            (r.push(`dark`), (i.appearanceDarkChromeTheme = t));
          }
          return ((i.updated = r), i);
        },
      })));
  });
function Y(e) {
  if (e.scope == null) throw Error(`App action requires a route scope`);
  return e.scope;
}
var X = e(() => {});
function Z(e) {
  switch (e.routeKind) {
    case `local-thread`:
    case `remote-thread`:
    case `chatgpt-thread`:
    case `client-local-thread`:
      return !0;
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return !1;
  }
}
function st(e) {
  switch (e.value.routeKind) {
    case `local-thread`:
      return {
        id: e.value.conversationId,
        kind: `local`,
        hostId: e.get(ge, e.value.conversationId) ?? `local`,
        title: e.get(Me, e.value.conversationId),
      };
    case `remote-thread`:
      return { id: e.value.taskId, kind: `remote`, title: null };
    case `chatgpt-thread`:
      return { id: e.value.conversationId, kind: `chatgpt`, title: null };
    case `client-local-thread`:
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function ct(e) {
  switch (e.routeKind) {
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return { kind: e.routeKind, pathname: e.pathname, routeTemplate: e.routeTemplate };
    case `local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
    case `client-local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.clientThreadId,
      };
    case `remote-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        taskId: e.taskId,
      };
    case `chatgpt-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
  }
}
function lt(e, t, n, r, i) {
  let a = t == null ? [] : Oe(e, t),
    o = t == null ? null : Le(t, e.get(P), { bottom: n, right: r }),
    s = o == null ? null : (a.find((e) => e.browserTabId === o) ?? null),
    c = t == null || o == null ? null : k.getSnapshot(t, o);
  return {
    canGoBack: c?.canGoBack ?? !1,
    canGoForward: c?.canGoForward ?? !1,
    fullscreen: s?.target === `right` && i,
    isLoading: c?.isLoading ?? !1,
    open: s != null,
    tabs: ut(
      t,
      a.map((e) => e.browserTabId),
      o,
    ),
    title: c?.title ?? null,
    url: c?.url ?? null,
  };
}
function ut(e, t, n) {
  if (e == null) return [];
  let r = k.getBrowserUseBrowserTabIds(e),
    i = [...t, ...r],
    a = new Set(r),
    o = new Set();
  return i.flatMap((t) => {
    if (o.has(t)) return [];
    o.add(t);
    let r = k.getSnapshot(e, t);
    return [
      {
        active: t === n,
        browserTabId: t,
        isBrowserUseActive: k.isBrowserUseActive(e, t),
        isBrowserUseManaged: a.has(t),
        isLoading: r?.isLoading ?? !1,
        title: r?.title ?? null,
        url: r?.url ?? null,
      },
    ];
  });
}
function Q(e) {
  let t = document.querySelector(e);
  return t == null
    ? { present: !1 }
    : {
        present: !0,
        scrollTop: Math.round(t.scrollTop),
        scrollHeight: Math.round(t.scrollHeight),
        clientHeight: Math.round(t.clientHeight),
      };
}
function dt() {
  return Array.from(document.querySelectorAll(fe)).map((e, t) => ft(e, t));
}
function ft(e, t) {
  let n = gt(e);
  return e.matches(v.sidebarSection)
    ? {
        type: `section`,
        index: t,
        heading: e.dataset.appActionSidebarSectionHeading ?? ``,
        collapsed: e.dataset.appActionSidebarSectionCollapsed === `true`,
        visibility: n,
      }
    : e.matches(v.sidebarProjectRow)
      ? {
          type: `project`,
          index: t,
          projectId: e.dataset.appActionSidebarProjectId ?? ``,
          label: e.dataset.appActionSidebarProjectLabel ?? ``,
          collapsed: e.dataset.appActionSidebarProjectCollapsed === `true`,
          visibility: n,
        }
      : {
          type: `thread`,
          index: t,
          active: e.dataset.appActionSidebarThreadActive === `true`,
          hostId: e.dataset.appActionSidebarThreadHostId || null,
          id: e.dataset.appActionSidebarThreadId ?? ``,
          kind: e.dataset.appActionSidebarThreadKind ?? ``,
          pinned: e.dataset.appActionSidebarThreadPinned === `true`,
          title: e.dataset.appActionSidebarThreadTitle ?? ``,
          visibility: n,
        };
}
function pt(e) {
  let t = ht(),
    n = new Set(e.get(A).map((e) => e.path));
  return [
    ...e
      .get(A)
      .map((e) => ({
        path: e.path,
        additions: e.summary?.additions ?? e.diff?.additions ?? 0,
        deletions: e.summary?.deletions ?? e.diff?.deletions ?? 0,
        ...mt(t.get(e.path)),
      })),
    ...Array.from(t.entries()).flatMap(([e, t]) =>
      n.has(e) ? [] : [{ path: e, additions: null, deletions: null, ...mt(t) }],
    ),
  ].map((e, t) => ({ index: t, ...e }));
}
function mt(e) {
  let t = e?.querySelector(v.reviewFileToggle);
  return {
    expanded: t == null ? null : t.dataset.appActionReviewFileExpanded === `true`,
    visibility: e == null ? `not_mounted` : gt(e),
  };
}
function ht() {
  let e = Array.from(document.querySelectorAll(v.reviewFile));
  return new Map(
    e.flatMap((e) => {
      let t = e.dataset.reviewPath;
      return t == null ? [] : [[t, e]];
    }),
  );
}
function gt(e) {
  let t = e.getBoundingClientRect();
  return t.bottom <= 0 || t.right <= 0 || t.top >= window.innerHeight || t.left >= window.innerWidth
    ? `offscreen`
    : `visible`;
}
var _t,
  vt,
  yt = e(() => {
    (g(),
      ve(),
      Be(),
      j(),
      We(),
      be(),
      Pe(),
      I(),
      Te(),
      le(),
      Ie(),
      _e(),
      N(),
      te(),
      X(),
      z(),
      h(),
      (_t = D({ type: C(`app.get_summary`) })),
      (vt = R({
        schema: _t,
        run: (e, t) => {
          let n = Y(t),
            r = n.get(je),
            i = n.get(ze),
            a = n.get(Ge),
            o = i && a ? n.get(Ae.activeTab$) : null,
            s = n.get(Ne) ? n.get(Re.activeTab$) : null,
            c = o?.tabId ?? null,
            l = null;
          c === O.DIFF ? (l = `right`) : s?.tabId === O.DIFF && (l = `bottom`);
          let u = l != null,
            d = n.get(M),
            f = ye(n.get(P), { bottom: n.get(Ue), right: n.get(xe) });
          return {
            schemaVersion: 1,
            window: {
              windowId: ne,
              route: ct(n.value),
              thread: st(n),
              panels: {
                browser: lt(n, Z(n.value) ? se(n) : null, s, o, d),
                sidebar: { open: r },
                review: {
                  open: u,
                  placement: l,
                  fullscreen: l === `right` && d,
                  fileTreeOpen: u && n.get(He),
                  view: n.get(F),
                },
                terminal: { open: f != null, placement: f },
                rightPanel: { fullscreen: d, kind: c },
              },
              ...(r ? { sidebar: { viewport: Q(v.sidebarScroll), rows: dt() } } : {}),
              ...(u ? { review: { viewport: Q(v.reviewScroll), files: pt(n) } } : {}),
              ...(Z(n.value) ? { timeline: Q(v.timelineScroll) } : {}),
            },
          };
        },
      })));
  });
function bt(e) {
  return R({ schema: St, run: ({ action: t }) => xt(e(), t) });
}
function xt(e, t, n = Ct) {
  return {
    schemaVersion: 1,
    prompt: n,
    actions: e
      .filter((e) => (t == null ? !0 : e.type === t))
      .map((e) => ({ type: e.type, jsonSchema: JSON.stringify(he(e.schema), null, 2) })),
  };
}
var St,
  Ct,
  wt = e(() => {
    (g(),
      z(),
      (St = D({ type: C(`app.help`), action: x().optional() })),
      (Ct = `You can inspect or operate the Codex desktop app itself by calling this dynamic tool with exactly one JSON action payload.

Use this dynamic tool only for Codex Desktop UI state and actions, such as windows, sidebars, review panels, appearance, and Codex settings. It can show workspace files, browser tabs, terminals, and reviews inside Codex with windows.tabs.open. Use the relevant browser, shell, or file tool to inspect or interact with their contents.

Use {"type":"app.get_summary"} before acting on anything that depends on the visible UI, such as "my first pinned thread", "the second project", "the visible review file", or current panel state. The summary returns stable references such as thread ids, project ids, file paths, panel open state, and scroll positions. Use those references exactly in follow-up actions.

Use {"type":"app.help","action":"windows.show_thread"} to inspect one action, or {"type":"app.help"} to inspect every registered action schema.

The current implementation targets the active primary app window. Use "current" for windowId.

Common workflow examples:
- Read the current appearance mode, preset ids, and custom chrome colors with app.appearance.get.
- Switch app appearance mode with app.appearance.set_mode and {"mode":"light"}, {"mode":"dark"}, or {"mode":"system"}.
- Pick a code theme preset with app.appearance.set_theme and {"variant":"light","theme":{"kind":"preset","themeId":"monokai"}}.
- Adjust custom chrome theme colors with app.appearance.set_theme and {"variant":"dark","theme":{"kind":"custom","patch":{"accent":"#ff8800"}}}.
- Get available theme ids with app.appearance.get_available_themes.
- Open a review file: call app.get_summary while the review panel is open, choose a file path from window.review.files, then call windows.review.scroll_to_file or windows.review.file_set_expanded.
- Scroll Codex UI surfaces: use the relevant windows.sidebar.scroll, windows.review.scroll, or windows.timeline.scroll action with a pixels, pages, or edge scroll object. Use the dedicated browser-use tool for browser navigation and page scrolling.

- Go to the first pinned thread: call app.get_summary, find the first row in window.sidebar.rows with type "thread" and pinned true, then call windows.show_thread with that row's id as threadId.
- Go home: call windows.show_home.
- Toggle panels: call windows.sidebar.toggle, windows.terminal.toggle, or windows.review.toggle.
- Show a workspace file, browser tab, terminal, or review in a Codex panel with windows.tabs.open.

Prefer the smallest action that directly satisfies the user request.`));
  }),
  Tt,
  Et,
  Dt = e(() => {
    (g(),
      T(),
      z(),
      h(),
      (Tt = D({ type: C(`windows.nav.back`), windowId: m })),
      (Et = R({
        schema: Tt,
        run: () => {
          c.dispatchHostMessage({ type: `navigate-back` });
        },
      })));
  }),
  Ot,
  kt,
  At = e(() => {
    (g(),
      T(),
      z(),
      h(),
      (Ot = D({ type: C(`windows.nav.forward`), windowId: m })),
      (kt = R({
        schema: Ot,
        run: () => {
          c.dispatchHostMessage({ type: `navigate-forward` });
        },
      })));
  }),
  jt,
  Mt,
  Nt = e(() => {
    (g(),
      z(),
      h(),
      (jt = D({ type: C(`windows.review.collapse_all`), windowId: m })),
      (Mt = R({
        schema: jt,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, { detail: { open: !1, scope: `review` } }),
          );
        },
      })));
  }),
  Pt,
  Ft,
  It = e(() => {
    (g(),
      z(),
      h(),
      (Pt = D({ type: C(`windows.review.expand_all`), windowId: m })),
      (Ft = R({
        schema: Pt,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, { detail: { open: !0, scope: `review` } }),
          );
        },
      })));
  }),
  Lt,
  Rt,
  zt = e(() => {
    (g(),
      z(),
      h(),
      (Lt = D({
        type: C(`windows.review.file_set_expanded`),
        windowId: m,
        path: x(),
        expanded: S(),
      })),
      (Rt = R({
        schema: Lt,
        run: ({ path: e, expanded: t }) => {
          let n = l(e).querySelector(v.reviewFileToggle);
          if (n == null) throw Error(`Missing review file toggle: ${e}`);
          n.dataset.appActionReviewFileExpanded !== String(t) && n.click();
        },
      })));
  }),
  Bt,
  Vt,
  Ht = e(() => {
    (g(),
      z(),
      h(),
      (Bt = D({ type: C(`windows.review.scroll`), windowId: m, scroll: E })),
      (Vt = R({
        schema: Bt,
        run: ({ scroll: e }) => {
          _(a(v.reviewScroll), e);
        },
      })));
  });
function Ut(e) {
  switch (e) {
    case `top`:
      return `start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `end`;
  }
}
var Wt,
  Gt,
  Kt = e(() => {
    (g(),
      Se(),
      X(),
      z(),
      h(),
      (Wt = D({
        type: C(`windows.review.scroll_to_file`),
        windowId: m,
        path: x(),
        align: p([`top`, `center`, `bottom`]).optional(),
      })),
      (Gt = R({
        schema: Wt,
        run: ({ path: e, align: t }, n) => {
          let r = l(e);
          (Fe(Y(n), r.dataset.reviewPath ?? e),
            r.scrollIntoView({ block: Ut(t ?? `top`), behavior: `auto` }));
        },
      })));
  }),
  qt,
  Jt,
  Yt = e(() => {
    (g(),
      j(),
      X(),
      z(),
      h(),
      (qt = D({ type: C(`windows.review.set_fullscreen`), windowId: m, fullscreen: S() })),
      (Jt = R({
        schema: qt,
        run: ({ fullscreen: e }, t) => {
          Y(t).set(M, e);
        },
      })));
  }),
  Xt,
  Zt,
  Qt = e(() => {
    (g(),
      I(),
      X(),
      z(),
      h(),
      (Xt = D({
        type: C(`windows.review.set_view`),
        windowId: m,
        view: p([`turn`, `branch`, `unstaged`, `staged`]),
      })),
      (Zt = R({
        schema: Xt,
        run: ({ view: e }, t) => {
          Y(t).set(F, e === `turn` ? `last-turn` : e);
        },
      })));
  }),
  $t,
  en,
  tn = e(() => {
    (g(),
      T(),
      z(),
      h(),
      ($t = D({ type: C(`windows.review.toggle`), windowId: m })),
      (en = R({
        schema: $t,
        run: () => {
          c.dispatchHostMessage({ type: `toggle-diff-panel` });
        },
      })));
  }),
  nn,
  rn,
  an = e(() => {
    (g(),
      T(),
      z(),
      h(),
      (nn = D({ type: C(`windows.show_home`), windowId: m })),
      (rn = R({
        schema: nn,
        run: () => {
          c.dispatchHostMessage({ type: `new-chat` });
        },
      })));
  });
function on(e) {
  let t = re(e);
  return t == null ? pe(ae(e)) : ie(t.key);
}
var sn,
  cn,
  ln = e(() => {
    (b(),
      g(),
      T(),
      o(),
      z(),
      h(),
      (sn = D({ type: C(`windows.show_thread`), windowId: m, threadId: x() })),
      (cn = R({
        schema: sn,
        run: ({ threadId: e }) => {
          c.dispatchHostMessage({ type: `navigate-to-route`, path: on(e) });
        },
      })));
  }),
  un,
  dn,
  fn = e(() => {
    (g(),
      z(),
      h(),
      (un = D({
        type: C(`windows.sidebar.project_set_collapsed`),
        windowId: m,
        project: y,
        collapsed: S(),
      })),
      (dn = R({
        schema: un,
        run: ({ project: e, collapsed: t }) => {
          let n = w(e);
          n.dataset.appActionSidebarProjectCollapsed !== String(t) && n.click();
        },
      })));
  }),
  pn,
  mn,
  hn = e(() => {
    (g(),
      z(),
      h(),
      (pn = D({
        type: C(`windows.sidebar.project_set_show_all`),
        windowId: m,
        project: y,
        showAll: S(),
      })),
      (mn = R({
        schema: pn,
        run: ({ project: e, showAll: t }) => {
          let n = w(e);
          if (n.dataset.appActionSidebarProjectCollapsed === `true` && !t) return;
          let r = n.dataset.appActionSidebarProjectId;
          if (r == null) throw Error(`Missing sidebar project id`);
          let i = a(s(r));
          if (i.dataset.appActionSidebarProjectShowAll === String(t)) return;
          let o = i.querySelector(v.sidebarProjectShowAllToggle);
          if (o == null) throw Error(`Missing sidebar project show more toggle: ${r}`);
          o.click();
        },
      })));
  }),
  gn,
  _n,
  vn = e(() => {
    (g(),
      z(),
      h(),
      (gn = D({ type: C(`windows.sidebar.scroll`), windowId: m, scroll: E })),
      (_n = R({
        schema: gn,
        run: ({ scroll: e }) => {
          _(a(v.sidebarScroll), e);
        },
      })));
  }),
  yn,
  bn,
  xn = e(() => {
    (g(),
      z(),
      h(),
      (yn = D({
        type: C(`windows.sidebar.section_set_collapsed`),
        windowId: m,
        section: me,
        collapsed: S(),
      })),
      (bn = R({
        schema: yn,
        run: ({ section: e, collapsed: t }) => {
          let n = oe(e);
          if (n.dataset.appActionSidebarSectionCollapsed === String(t)) return;
          let r = n.querySelector(v.sidebarSectionToggle);
          if (r == null) throw Error(`Sidebar section does not have a collapse toggle`);
          r.click();
        },
      })));
  }),
  Sn,
  Cn,
  wn = e(() => {
    (g(),
      z(),
      h(),
      (Sn = D({ type: C(`windows.sidebar.select_project`), windowId: m, project: y })),
      (Cn = R({
        schema: Sn,
        run: ({ project: e }) => {
          let t = w(e).querySelector(v.sidebarProjectSelect);
          if (t == null) throw Error(`Missing sidebar project select action`);
          t.click();
        },
      })));
  }),
  Tn,
  En,
  Dn = e(() => {
    (g(),
      T(),
      z(),
      h(),
      (Tn = D({ type: C(`windows.sidebar.toggle`), windowId: m })),
      (En = R({
        schema: Tn,
        run: () => {
          c.dispatchHostMessage({ type: `toggle-sidebar` });
        },
      })));
  }),
  On,
  kn,
  An = e(() => {
    (g(),
      N(),
      X(),
      z(),
      h(),
      (On = D({ type: C(`windows.terminal.toggle`), windowId: m })),
      (kn = R({
        schema: On,
        run: (e, t) => {
          Ve(Y(t));
        },
      })));
  }),
  jn,
  Mn,
  Nn = e(() => {
    (g(),
      z(),
      h(),
      (jn = D({ type: C(`windows.timeline.scroll`), windowId: m, scroll: E })),
      (Mn = R({
        schema: jn,
        run: ({ scroll: e }) => {
          f(a(v.timelineScroll), e);
        },
      })));
  }),
  Pn,
  Fn,
  In = e(() => {
    (g(),
      z(),
      h(),
      (Pn = D({ type: C(`windows.timeline.scroll_to_turn`), windowId: m, direction: de })),
      (Fn = R({
        schema: Pn,
        run: ({ direction: e }) => {
          t(a(v.timelineScroll), e);
        },
      })));
  });
function Ln() {
  return $;
}
var Rn, $, zn;
e(() => {
  (z(),
    Ye(),
    Xe(),
    Ze(),
    ot(),
    yt(),
    wt(),
    Dt(),
    At(),
    Nt(),
    It(),
    zt(),
    Ht(),
    Kt(),
    Yt(),
    Qt(),
    tn(),
    an(),
    ln(),
    fn(),
    hn(),
    vn(),
    xn(),
    wn(),
    Dn(),
    Je(),
    An(),
    Nn(),
    In(),
    (Rn = [
      vt,
      V,
      U,
      q,
      at,
      Et,
      kt,
      Mt,
      Ft,
      Rt,
      Vt,
      Gt,
      Jt,
      Zt,
      en,
      rn,
      cn,
      dn,
      mn,
      _n,
      bn,
      Cn,
      En,
      kn,
      qe,
      Mn,
      Fn,
    ]),
    ($ = [bt(Ln), ...Rn]),
    (zn = Ke($)));
})();
export { zn as appActionRegistry };
//# sourceMappingURL=register-app-actions.js.map
