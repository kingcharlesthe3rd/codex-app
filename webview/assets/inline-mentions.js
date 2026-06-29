import { s as e } from "./chunk-Bj-mKKzh.js";
import { Bn as t, br as n, ft as r } from "./src-2.js";
import {
  Ar as i,
  Dr as a,
  Er as o,
  Or as s,
  Tr as c,
  Uo as l,
  kr as u,
  mo as d,
  wr as f,
} from "./app-server-manager-signals.js";
import { n as p, t as m } from "./jsx-runtime.js";
import { t as h } from "./clsx.js";
import { F as g, I as _, lt as v, o as y, s as b, u as x } from "./vscode-api.js";
import { c as S, r as C } from "./lib-2.js";
import { n as w } from "./known-app-icon.js";
import { c as T, u as E, x as D } from "./apps-queries.js";
import { t as ee } from "./tooltip.js";
import { t as te } from "./route-scope.js";
import {
  E as O,
  S as ne,
  _ as k,
  a as re,
  b as ie,
  h as A,
  l as j,
  o as ae,
  w as M,
  y as N,
} from "./mention-item.js";
import { r as P } from "./skill-utils.js";
import { t as oe } from "./open-workspace-file.js";
import { t as F } from "./apps.js";
import { t as I } from "./use-platform.js";
import { t as L } from "./use-is-plugins-enabled.js";
import { t as se } from "./browser-sidebar-availability.js";
import { m as R } from "./use-plugins.js";
import { m as ce, n as z, s as B, t as V, u as H } from "./use-native-apps.electron.js";
import { n as U } from "./get-file-icon.js";
import { t as W } from "./mcp.js";
import { t as G } from "./get-skill-icon.js";
import { i as le, n as ue, r as de } from "./workspace-file-context-menu.js";
import { n as fe } from "./use-skills.js";
import { t as pe } from "./context-menu.js";
import { a as K, i as q, n as J, o as me, s as Y, t as he } from "./inline-mention-style.js";
import { r as X } from "./external-markdown-link.js";
var Z = v();
function ge(e) {
  let t = (0, Z.c)(10),
    { appPath: n } = e,
    { platform: r, isLoading: i } = I(),
    a = (r === `macOS` || r === `windows`) && n != null && n !== ``,
    o = n ?? ``,
    s;
  t[0] === o ? (s = t[1]) : ((s = { appPath: o }), (t[0] = o), (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c = { enabled: a, staleTime: x.INFINITE, refetchOnWindowFocus: !1 }),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = { params: s, queryConfig: c }), (t[4] = s), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u = y(`computer-use-native-desktop-app-icon`, l),
    d = a ? (u.data?.iconSmall ?? null) : null,
    f = i || (a && u.isLoading),
    p;
  return (
    t[7] !== d || t[8] !== f
      ? ((p = { iconSmall: d, isLoading: f }), (t[7] = d), (t[8] = f), (t[9] = p))
      : (p = t[9]),
    p
  );
}
var _e = e(p(), 1),
  ve = (0, _e.createContext)(null),
  ye = `_wideBlock_1ni73_19`,
  be = `_mediaWideBlock_1ni73_20`,
  xe = `_markdownContent_1ni73_43`,
  Se = `_paragraph_1ni73_65`,
  Ce = `_markdownText_1ni73_69`,
  we = `_markdownTextSmall_1ni73_74`,
  Te = `_mediaParagraph_1ni73_79`,
  Ee = `_mediaGridParagraph_1ni73_83`,
  De = `_heading_1ni73_90`,
  Oe = `_heading1_1ni73_96`,
  ke = `_heading2_1ni73_100`,
  Ae = `_heading3_1ni73_104`,
  je = `_heading4_1ni73_105`,
  Me = `_heading5_1ni73_110`,
  Ne = `_heading6_1ni73_111`,
  Pe = `_list_1ni73_116`,
  Fe = `_unorderedList_1ni73_130`,
  Ie = `_orderedList_1ni73_142`,
  Le = `_taskList_1ni73_146`,
  Re = `_listItem_1ni73_151`,
  ze = `_taskListItem_1ni73_182`,
  Be = `_blockquote_1ni73_205`,
  Ve = `_horizontalRule_1ni73_246`,
  He = `_tableContainer_1ni73_258`,
  Ue = `_tableWrapper_1ni73_265`,
  We = `_table_1ni73_258`,
  Ge = `_tableRow_1ni73_305`,
  Ke = `_tableCell_1ni73_305`,
  qe = `_tableHeaderCell_1ni73_309`,
  Je = `_tableBody_1ni73_335`,
  Ye = `_codeBlock_1ni73_339`,
  Xe = `_codeBlockPlaceholder_1ni73_343`,
  Ze = `_inlineMarkdown_1ni73_357`,
  Qe = `_tableCellFileLink_1ni73_387`,
  $e = `_markdownRoot_1ni73_401`,
  et = `_fadeIn_1ni73_401`,
  tt = `_imageEnter_1ni73_411`,
  nt = {
    wideBlock: ye,
    mediaWideBlock: be,
    markdownContent: xe,
    paragraph: Se,
    markdownText: Ce,
    markdownTextSmall: we,
    mediaParagraph: Te,
    mediaGridParagraph: Ee,
    heading: De,
    heading1: Oe,
    heading2: ke,
    heading3: Ae,
    heading4: je,
    heading5: Me,
    heading6: Ne,
    list: Pe,
    unorderedList: Fe,
    orderedList: Ie,
    taskList: Le,
    listItem: Re,
    taskListItem: ze,
    blockquote: Be,
    horizontalRule: Ve,
    tableContainer: He,
    tableWrapper: Ue,
    table: We,
    tableRow: Ge,
    tableCell: Ke,
    tableHeaderCell: qe,
    tableBody: Je,
    codeBlock: Ye,
    codeBlockPlaceholder: Xe,
    inlineMarkdown: Ze,
    tableCellFileLink: Qe,
    markdownRoot: $e,
    fadeIn: et,
    "fade-in": `_fade-in_1ni73_1`,
    imageEnter: tt,
    "image-enter": `_image-enter_1ni73_1`,
  },
  Q = m(),
  rt = C({
    controlDesktopAppsFromCodex: {
      id: `markdown.pluginMention.controlDesktopAppsFromCodex`,
      defaultMessage: `Control desktop apps from Codex`,
      description: `Tooltip text shown when hovering a generic Computer Use plugin mention.`,
    },
  });
function it(e) {
  let t = (0, Z.c)(25),
    {
      reference: n,
      ariaLabel: r,
      className: i,
      children: a,
      label: o,
      tooltipText: s,
      cwd: l,
      hostId: u,
      onOpen: d,
      openInSidePanel: p,
    } = e,
    m = p === void 0 ? !1 : p,
    { path: h, line: g, column: _, endLine: v } = n,
    y;
  t[0] !== o || t[1] !== n ? ((y = o ?? f(n)), (t[0] = o), (t[1] = n), (t[2] = y)) : (y = t[2]);
  let b = y,
    x;
  t[3] !== n || t[4] !== s ? ((x = s ?? c(n)), (t[3] = n), (t[4] = s), (t[5] = x)) : (x = t[5]);
  let S = x,
    C;
  t[6] === h ? (C = t[7]) : ((C = U(h)), (t[6] = h), (t[7] = C));
  let w = C,
    T;
  t[8] !== w || t[9] !== a || t[10] !== b
    ? ((T =
        a ??
        (0, Q.jsx)(pt, {
          underlineOnHover: !0,
          className: nt.tableCellFileLink,
          icon: w,
          text: b,
        })),
      (t[8] = w),
      (t[9] = a),
      (t[10] = b),
      (t[11] = T))
    : (T = t[11]);
  let E;
  return (
    t[12] !== r ||
    t[13] !== i ||
    t[14] !== _ ||
    t[15] !== l ||
    t[16] !== v ||
    t[17] !== S ||
    t[18] !== u ||
    t[19] !== g ||
    t[20] !== d ||
    t[21] !== m ||
    t[22] !== h ||
    t[23] !== T
      ? ((E = (0, Q.jsx)(dt, {
          ariaLabel: r,
          className: i,
          title: S,
          path: h,
          line: g,
          column: _,
          endLine: v,
          cwd: l,
          hostId: u,
          onOpen: d,
          openInSidePanel: m,
          children: T,
        })),
        (t[12] = r),
        (t[13] = i),
        (t[14] = _),
        (t[15] = l),
        (t[16] = v),
        (t[17] = S),
        (t[18] = u),
        (t[19] = g),
        (t[20] = d),
        (t[21] = m),
        (t[22] = h),
        (t[23] = T),
        (t[24] = E))
      : (E = t[24]),
    E
  );
}
function at(e) {
  let t = (0, Z.c)(28),
    { cwd: n, hostId: r, label: i, href: a, openInSidePanel: o, tooltipText: s } = e,
    c = n === void 0 ? null : n,
    l = o === void 0 ? !1 : o,
    { skills: u } = fe(void 0, r),
    f;
  t[0] === i ? (f = t[1]) : ((f = i.split(`:`).at(-1)?.trim() ?? i), (t[0] = i), (t[1] = f));
  let p = f,
    m;
  t[2] === a ? (m = t[3]) : ((m = a ? d(a) : null), (t[2] = a), (t[3] = m));
  let h = m,
    g,
    _,
    v;
  if (t[4] !== i || t[5] !== h || t[6] !== p || t[7] !== u || t[8] !== s) {
    v = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e =
        (h ? u.find((e) => d(e.path) === h) : null) ??
        u.find((e) => e.name === p) ??
        u.find((e) => P(e) === p);
      if (e == null) {
        let e;
        (t[12] === i
          ? (e = t[13])
          : ((e = (0, Q.jsxs)(Q.Fragment, { children: [`$`, i] })), (t[12] = i), (t[13] = e)),
          (v = e));
        break bb0;
      }
      ((g = P(e)), (_ = O(e) ?? s));
    }
    ((t[4] = i),
      (t[5] = h),
      (t[6] = p),
      (t[7] = u),
      (t[8] = s),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v));
  } else ((g = t[9]), (_ = t[10]), (v = t[11]));
  if (v !== Symbol.for(`react.early_return_sentinel`)) return v;
  let y = _,
    b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = B()), (t[14] = b)) : (b = t[14]);
  let x;
  t[15] === g
    ? (x = t[16])
    : ((x = (0, Q.jsx)(pt, { underlineOnHover: !0, icon: b, text: g })), (t[15] = g), (t[16] = x));
  let S = x;
  if (a == null) {
    let e;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = B()), (t[17] = e)) : (e = t[17]);
    let n;
    return (
      t[18] !== g || t[19] !== y
        ? ((n = (0, Q.jsx)(ft, { icon: e, text: g, tooltipText: y })),
          (t[18] = g),
          (t[19] = y),
          (t[20] = n))
        : (n = t[20]),
      n
    );
  }
  let C = y ?? a,
    w;
  return (
    t[21] !== S || t[22] !== c || t[23] !== r || t[24] !== a || t[25] !== l || t[26] !== C
      ? ((w = (0, Q.jsx)(dt, {
          className: `cursor-pointer`,
          title: C,
          path: a,
          cwd: c,
          hostId: r,
          openInSidePanel: l,
          children: S,
        })),
        (t[21] = S),
        (t[22] = c),
        (t[23] = r),
        (t[24] = a),
        (t[25] = l),
        (t[26] = C),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
function ot(e) {
  let t = (0, Z.c)(20),
    { hostId: n, label: r, href: i, tooltipText: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = { hostId: n }), (t[0] = n), (t[1] = o));
  let { data: s } = T(o),
    c,
    l,
    u;
  if (t[2] !== i || t[3] !== r || t[4] !== s) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = s === void 0 ? [] : s,
        n;
      t[8] === i ? (n = t[9]) : ((n = i && ne(i) ? i.slice(6) : ``), (t[8] = i), (t[9] = n));
      let a = n;
      if (
        ((c = (a.length > 0 ? e.find((e) => e.id === a) : void 0) ?? e.find((e) => e.name === r)),
        c == null)
      ) {
        let e;
        (t[10] === r
          ? (e = t[11])
          : ((e = (0, Q.jsxs)(Q.Fragment, { children: [`$`, r] })), (t[10] = r), (t[11] = e)),
          (u = e));
        break bb0;
      }
      l = w(c);
    }
    ((t[2] = i), (t[3] = r), (t[4] = s), (t[5] = c), (t[6] = l), (t[7] = u));
  } else ((c = t[5]), (l = t[6]), (u = t[7]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let d = l,
    f = c.description ?? void 0,
    p = d ?? void 0,
    m = d == null ? (c.logoUrl ?? c.logoUrlDark ?? ``) : ``,
    h;
  return (
    t[12] !== c.id ||
    t[13] !== c.name ||
    t[14] !== i ||
    t[15] !== f ||
    t[16] !== p ||
    t[17] !== m ||
    t[18] !== a
      ? ((h = (0, Q.jsx)($, {
          displayName: c.name,
          description: f,
          fallbackIcon: p,
          iconSmall: m,
          fallbackName: c.id,
          href: i,
          tooltipText: a,
        })),
        (t[12] = c.id),
        (t[13] = c.name),
        (t[14] = i),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = a),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function st(e) {
  let t = (0, Z.c)(14),
    { hostId: n, label: r, href: i, tooltipText: a } = e,
    o = S(),
    s;
  t[0] === n ? (s = t[1]) : ((s = { hostId: n }), (t[0] = n), (t[1] = s));
  let c = L(s),
    l = i && M(i) ? i : ``,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = ct(l) ? { additionalMarketplaceKinds: [`shared-with-me`] } : void 0),
      (t[2] = l),
      (t[3] = u));
  let { availablePlugins: d } = R(n, void 0, u),
    f = k(o),
    p = H(d),
    m = p != null,
    h;
  t[4] === m ? (h = t[5]) : ((h = { enabled: m }), (t[4] = m), (t[5] = h));
  let { nativeApps: g } = V(h),
    _ = ce({ mentionPath: l, mentionDisplayName: r, nativeApps: g, computerPlugin: p }),
    { iconSmall: v } = ge({ appPath: _.nativeApp?.appPath ?? null });
  if (!c) return (0, Q.jsxs)(Q.Fragment, { children: [`@`, r] });
  let y = lt({
    computerUsePlugin: p,
    href: i,
    iconSmall: v,
    intl: o,
    label: r,
    pluginMentionLabels: f,
    resolvedComputerUseMention: _,
  });
  if (y != null) return y;
  let b = z({ label: r, path: l, plugins: d });
  if (b == null) return (0, Q.jsxs)(Q.Fragment, { children: [`@`, r] });
  let x = j(b, f),
    C;
  return (
    t[6] !== i ||
    t[7] !== x.brandColor ||
    t[8] !== x.description ||
    t[9] !== x.displayName ||
    t[10] !== x.iconSmall ||
    t[11] !== b.plugin.id ||
    t[12] !== a
      ? ((C = (0, Q.jsx)($, {
          brandColor: x.brandColor,
          displayName: x.displayName,
          description: x.description,
          fallbackIcon: F,
          iconSmall: x.iconSmall,
          fallbackName: b.plugin.id,
          href: i,
          tooltipText: a,
        })),
        (t[6] = i),
        (t[7] = x.brandColor),
        (t[8] = x.description),
        (t[9] = x.displayName),
        (t[10] = x.iconSmall),
        (t[11] = b.plugin.id),
        (t[12] = a),
        (t[13] = C))
      : (C = t[13]),
    C
  );
}
function ct(e) {
  let t = r(e.slice(9));
  return (
    t === `workspace-shared-with-me` ||
    t === `workspace-shared-with-me-private` ||
    t === `workspace-shared-with-me-unlisted`
  );
}
function lt({
  computerUsePlugin: e,
  href: t,
  iconSmall: n,
  intl: r,
  label: i,
  pluginMentionLabels: a,
  resolvedComputerUseMention: o,
}) {
  if (!o.isComputerUse) return null;
  if (o.nativeApp != null) {
    let e = o.nativeApp,
      i = r.formatMessage({
        id: `computerUse.label`,
        defaultMessage: `Computer use`,
        description: `Label for the Computer Use feature`,
      });
    return (0, Q.jsx)($, {
      displayName: e.displayName,
      description: i,
      fallbackIcon: F,
      iconSmall: n ?? ``,
      fallbackName: e.bundleId,
      href: t,
      tooltipText: i,
    });
  }
  let s = e?.description ?? r.formatMessage(rt.controlDesktopAppsFromCodex),
    c = e == null ? null : j(e, a);
  return (0, Q.jsx)($, {
    brandColor: c?.brandColor,
    displayName: c?.displayName ?? i,
    description: s,
    fallbackIcon: F,
    iconSmall: c?.iconSmall ?? ``,
    fallbackName: e?.plugin.id ?? `computer-use`,
    href: t,
    tooltipText: s,
  });
}
function ut(e) {
  let t = (0, Z.c)(12),
    { conversationId: n, label: r, tooltipText: i } = e,
    a = (0, _e.useContext)(ve),
    o = n != null && a != null,
    s = r.startsWith(`@`) ? r : `@${r}`,
    c = o ? void 0 : `cursor-default`,
    l;
  t[0] !== o || t[1] !== c || t[2] !== s || t[3] !== i
    ? ((l = (0, Q.jsx)(ft, {
        className: c,
        interactive: o,
        text: s,
        textClassName: `text-token-foreground`,
        tooltipText: i,
      })),
      (t[0] = o),
      (t[1] = c),
      (t[2] = s),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u = l;
  if (n == null || a == null) return u;
  let d;
  t[5] !== n || t[6] !== r || t[7] !== a
    ? ((d = () => {
        a({
          agentRole: null,
          conversationId: n,
          diffStats: null,
          displayName: r.replace(/^@/u, ``),
          spawnModel: null,
          status: `done`,
          statusSummary: null,
        });
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== u || t[10] !== d
      ? ((f = (0, Q.jsx)(`button`, {
          type: `button`,
          className: `inline cursor-interaction bg-transparent p-0 text-left align-baseline`,
          onClick: d,
          children: u,
        })),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function dt(e) {
  let r = (0, Z.c)(91),
    {
      ariaLabel: i,
      className: a,
      title: o,
      children: s,
      path: c,
      line: u,
      column: d,
      endLine: f,
      cwd: p,
      hostId: m,
      onOpen: v,
      openInSidePanel: y,
    } = e,
    x = y === void 0 ? !1 : y,
    S = g(te),
    C = b(`open-file`),
    w = _(se),
    T = l(m ?? `local`),
    E = u == null ? void 0 : (d ?? 1),
    D = x,
    O;
  r[0] !== p ||
  r[1] !== f ||
  r[2] !== T ||
  r[3] !== m ||
  r[4] !== u ||
  r[5] !== C.mutate ||
  r[6] !== x ||
  r[7] !== c ||
  r[8] !== E ||
  r[9] !== S
    ? ((O = (e) => {
        let { isPreview: t } = e === void 0 ? {} : e;
        oe({
          scope: S,
          path: c,
          line: u,
          column: E,
          cwd: p,
          hostConfig: T,
          ...(m == null ? {} : { hostId: m }),
          endLine: f,
          isPreview: t,
          openFile: C.mutate,
          openInSidePanel: x,
        });
      }),
      (r[0] = p),
      (r[1] = f),
      (r[2] = T),
      (r[3] = m),
      (r[4] = u),
      (r[5] = C.mutate),
      (r[6] = x),
      (r[7] = c),
      (r[8] = E),
      (r[9] = S),
      (r[10] = O))
    : (O = r[10]);
  let ne = O,
    k;
  r[11] !== T || r[12] !== w || r[13] !== c
    ? ((k = w && !t(T) && n(c)), (r[11] = T), (r[12] = w), (r[13] = c), (r[14] = k))
    : (k = r[14]);
  let re = k,
    ie;
  r[15] !== p || r[16] !== m || r[17] !== c
    ? ((ie = de({ cwd: p, hostId: m, path: c })),
      (r[15] = p),
      (r[16] = m),
      (r[17] = c),
      (r[18] = ie))
    : (ie = r[18]);
  let A = ie,
    j;
  r[19] !== p ||
  r[20] !== f ||
  r[21] !== T ||
  r[22] !== m ||
  r[23] !== w ||
  r[24] !== u ||
  r[25] !== C.mutate ||
  r[26] !== x ||
  r[27] !== A ||
  r[28] !== c ||
  r[29] !== E ||
  r[30] !== S
    ? ((j = async () => {
        let { primaryTarget: e } = le(await S.queryClient.fetchQuery(A));
        oe({
          scope: S,
          path: c,
          line: u,
          column: E,
          cwd: p,
          hostConfig: T,
          ...(m == null ? {} : { hostId: m }),
          browserSidebarEnabled: w,
          endLine: f,
          modifiedClick: !0,
          openFile: C.mutate,
          openInSidePanel: x,
          target: e?.target,
          appPath: e?.appPath,
        });
      }),
      (r[19] = p),
      (r[20] = f),
      (r[21] = T),
      (r[22] = m),
      (r[23] = w),
      (r[24] = u),
      (r[25] = C.mutate),
      (r[26] = x),
      (r[27] = A),
      (r[28] = c),
      (r[29] = E),
      (r[30] = S),
      (r[31] = j))
    : (j = r[31]);
  let ae = j,
    M;
  r[32] !== D ||
  r[33] !== re ||
  r[34] !== p ||
  r[35] !== f ||
  r[36] !== T ||
  r[37] !== m ||
  r[38] !== w ||
  r[39] !== u ||
  r[40] !== v ||
  r[41] !== C.mutate ||
  r[42] !== x ||
  r[43] !== ae ||
  r[44] !== c ||
  r[45] !== E ||
  r[46] !== S ||
  r[47] !== ne
    ? ((M = (e, t) => {
        let r = t === void 0 ? !0 : t;
        if ((v?.(c), D && !re && !e)) {
          ne({ isPreview: r });
          return;
        }
        if (e && (!n(c) || !D)) {
          ae();
          return;
        }
        oe({
          scope: S,
          path: c,
          line: u,
          column: E,
          cwd: p,
          hostConfig: T,
          ...(m == null ? {} : { hostId: m }),
          browserSidebarEnabled: w,
          endLine: f,
          ...(x && !e ? { isPreview: r } : {}),
          modifiedClick: e,
          openFile: C.mutate,
          openInSidePanel: x,
        });
      }),
      (r[32] = D),
      (r[33] = re),
      (r[34] = p),
      (r[35] = f),
      (r[36] = T),
      (r[37] = m),
      (r[38] = w),
      (r[39] = u),
      (r[40] = v),
      (r[41] = C.mutate),
      (r[42] = x),
      (r[43] = ae),
      (r[44] = c),
      (r[45] = E),
      (r[46] = S),
      (r[47] = ne),
      (r[48] = M))
    : (M = r[48]);
  let N = M,
    P;
  r[49] !== A || r[50] !== S.queryClient
    ? ((P = async () => {
        await S.queryClient.prefetchQuery(A);
      }),
      (r[49] = A),
      (r[50] = S.queryClient),
      (r[51] = P))
    : (P = r[51]);
  let F = P,
    I;
  r[52] === F
    ? (I = r[53])
    : ((I = () => {
        F();
      }),
      (r[52] = F),
      (r[53] = I));
  let L = I,
    R;
  r[54] === L
    ? (R = r[55])
    : ((R = (e) => {
        (e.button !== 2 && !X(e)) || L();
      }),
      (r[54] = L),
      (r[55] = R));
  let ce = R,
    z;
  r[56] !== p ||
  r[57] !== f ||
  r[58] !== m ||
  r[59] !== u ||
  r[60] !== x ||
  r[61] !== c ||
  r[62] !== E ||
  r[63] !== S
    ? ((z = () =>
        ue(S, { column: E, cwd: p, endLine: f, hostId: m, line: u, openInSidePanel: x, path: c })),
      (r[56] = p),
      (r[57] = f),
      (r[58] = m),
      (r[59] = u),
      (r[60] = x),
      (r[61] = c),
      (r[62] = E),
      (r[63] = S),
      (r[64] = z))
    : (z = r[64]);
  let B = z,
    V;
  r[65] === a ? (V = r[66]) : ((V = h(me, a)), (r[65] = a), (r[66] = V));
  let H, U, W, G;
  r[67] === N
    ? ((H = r[68]), (U = r[69]), (W = r[70]), (G = r[71]))
    : ((H = (e) => {
        N(X(e));
      }),
      (U = (e) => {
        N(X(e), !1);
      }),
      (W = (e) => {
        if (e.key === `Enter`) {
          (e.preventDefault(), N(X(e)));
          return;
        }
        e.key === ` ` && e.preventDefault();
      }),
      (G = (e) => {
        e.key === ` ` && (e.preventDefault(), N(X(e)));
      }),
      (r[67] = N),
      (r[68] = H),
      (r[69] = U),
      (r[70] = W),
      (r[71] = G));
  let fe = o ?? c,
    K;
  r[72] === s
    ? (K = r[73])
    : ((K = (0, Q.jsx)(`span`, { className: `break-words whitespace-normal`, children: s })),
      (r[72] = s),
      (r[73] = K));
  let q;
  r[74] !== fe || r[75] !== K
    ? ((q = (0, Q.jsx)(ee, { tooltipContent: fe, children: K })),
      (r[74] = fe),
      (r[75] = K),
      (r[76] = q))
    : (q = r[76]);
  let J;
  r[77] !== i ||
  r[78] !== ce ||
  r[79] !== V ||
  r[80] !== H ||
  r[81] !== U ||
  r[82] !== W ||
  r[83] !== G ||
  r[84] !== q ||
  r[85] !== L
    ? ((J = (0, Q.jsx)(`span`, {
        "data-file-reference": !0,
        role: `button`,
        tabIndex: 0,
        "aria-label": i,
        className: V,
        onClick: H,
        onDoubleClick: U,
        onKeyDown: W,
        onKeyUp: G,
        onFocus: L,
        onMouseEnter: L,
        onPointerDown: ce,
        children: q,
      })),
      (r[77] = i),
      (r[78] = ce),
      (r[79] = V),
      (r[80] = H),
      (r[81] = U),
      (r[82] = W),
      (r[83] = G),
      (r[84] = q),
      (r[85] = L),
      (r[86] = J))
    : (J = r[86]);
  let Y;
  return (
    r[87] !== B || r[88] !== F || r[89] !== J
      ? ((Y = (0, Q.jsx)(pe, { getItems: B, onBeforeOpen: F, children: J })),
        (r[87] = B),
        (r[88] = F),
        (r[89] = J),
        (r[90] = Y))
      : (Y = r[90]),
    Y
  );
}
function $(e) {
  let t = (0, Z.c)(14),
    n,
    r,
    i,
    a,
    o;
  if (t[0] !== e) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { iconSmall: s, ...c } = e;
      r = c;
      let l;
      t[6] === s ? (l = t[7]) : ((l = D(s)), (t[6] = s), (t[7] = l));
      let u = l;
      if (u != null) {
        o = (0, Q.jsx)(mt, { connectorLogoRequest: u, ...r });
        break bb0;
      }
      ((n = ft),
        (i = r.brandColor),
        (a = G(null, {
          size: `small`,
          smallOnly: !0,
          alt: r.displayName,
          iconSmall: s,
          basePath: r.href ?? ``,
          fallbackName: r.fallbackName,
          fallbackDescription: r.description,
          fallbackIcon: r.fallbackIcon ?? B(),
        })));
    }
    ((t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), (t[4] = a), (t[5] = o));
  } else ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s = r.description ?? r.tooltipText,
    c;
  return (
    t[8] !== n || t[9] !== r.displayName || t[10] !== i || t[11] !== a || t[12] !== s
      ? ((c = (0, Q.jsx)(n, { brandColor: i, icon: a, text: r.displayName, tooltipText: s })),
        (t[8] = n),
        (t[9] = r.displayName),
        (t[10] = i),
        (t[11] = a),
        (t[12] = s),
        (t[13] = c))
      : (c = t[13]),
    c
  );
}
function ft(e) {
  let t = (0, Z.c)(12),
    {
      brandColor: n,
      className: r,
      dataAttributes: i,
      icon: a,
      interactive: o,
      style: s,
      text: c,
      textClassName: l,
      tooltipText: u,
    } = e,
    d = o === void 0 ? !1 : o,
    f;
  t[0] !== n ||
  t[1] !== r ||
  t[2] !== i ||
  t[3] !== a ||
  t[4] !== d ||
  t[5] !== s ||
  t[6] !== c ||
  t[7] !== l
    ? ((f = (0, Q.jsx)(pt, {
        brandColor: n,
        className: r,
        dataAttributes: i,
        icon: a,
        interactive: d,
        style: s,
        text: c,
        textClassName: l,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = d),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = f))
    : (f = t[8]);
  let p = f;
  if (u == null) return p;
  let m;
  return (
    t[9] !== p || t[10] !== u
      ? ((m = (0, Q.jsx)(ee, { tooltipContent: u, children: p })),
        (t[9] = p),
        (t[10] = u),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function pt(e) {
  let t = (0, Z.c)(23),
    {
      brandColor: n,
      className: r,
      dataAttributes: i,
      underlineOnHover: a,
      icon: o,
      interactive: s,
      style: c,
      text: l,
      textClassName: u,
      title: d,
    } = e,
    f = a === void 0 ? !1 : a,
    p = s === void 0 ? !1 : s,
    m;
  t[0] === o
    ? (m = t[1])
    : ((m =
        o == null
          ? null
          : (0, _e.isValidElement)(o)
            ? (0, _e.cloneElement)(o, { className: h(q, o.props.className) })
            : (0, _e.createElement)(o, { className: q })),
      (t[0] = o),
      (t[1] = m));
  let g = m,
    _ =
      f &&
      `group-hover/inline-mention:underline group-hover/inline-mention:decoration-current group-hover/inline-mention:decoration-dashed group-hover/inline-mention:decoration-[0.5px] group-hover/inline-mention:underline-offset-2`,
    v = p && `cursor-interaction`,
    y;
  t[2] !== r || t[3] !== _ || t[4] !== v
    ? ((y = h(J, Y, _, v, r)), (t[2] = r), (t[3] = _), (t[4] = v), (t[5] = y))
    : (y = t[5]);
  let b;
  t[6] !== n || t[7] !== c
    ? ((b = he({ brandColor: n, style: c })), (t[6] = n), (t[7] = c), (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === g
    ? (x = t[10])
    : ((x = g == null ? null : (0, Q.jsx)(`span`, { className: K, children: g })),
      (t[9] = g),
      (t[10] = x));
  let S;
  t[11] === u ? (S = t[12]) : ((S = h(`min-w-0 break-words`, u)), (t[11] = u), (t[12] = S));
  let C;
  t[13] !== S || t[14] !== l
    ? ((C = (0, Q.jsx)(`span`, { className: S, children: l })),
      (t[13] = S),
      (t[14] = l),
      (t[15] = C))
    : (C = t[15]);
  let w;
  return (
    t[16] !== i || t[17] !== C || t[18] !== y || t[19] !== b || t[20] !== x || t[21] !== d
      ? ((w = (0, Q.jsxs)(`span`, { className: y, style: b, title: d, ...i, children: [x, C] })),
        (t[16] = i),
        (t[17] = C),
        (t[18] = y),
        (t[19] = b),
        (t[20] = x),
        (t[21] = d),
        (t[22] = w))
      : (w = t[22]),
    w
  );
}
function mt(e) {
  let t = (0, Z.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ connectorLogoRequest: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = E(n) ?? ``,
    a;
  return (
    t[3] !== r || t[4] !== i
      ? ((a = (0, Q.jsx)($, { ...r, iconSmall: i })), (t[3] = r), (t[4] = i), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function ht({
  className: e,
  cwd: t,
  elementKey: n,
  hostId: r,
  href: a,
  label: o,
  onFileLinkOpen: s,
  openFileLinksInSidePanel: l = !1,
}) {
  let u = o.trim();
  switch (N({ href: a, label: u })) {
    case `app`:
      return (0, Q.jsx)(ot, { hostId: r, label: A(u), href: a, tooltipText: a }, n);
    case `plugin`:
      return (0, Q.jsx)(st, { hostId: r, label: A(u), href: a, tooltipText: a }, n);
    case `agent`: {
      let e = re(a),
        t = ie(a);
      return e == null && t == null
        ? null
        : (0, Q.jsx)(ut, { conversationId: e ?? void 0, label: A(u), tooltipText: a }, n);
    }
    case `mcp-resource`: {
      let e = ae(a);
      return e == null ? null : (0, Q.jsx)(ft, { icon: W, text: u, tooltipText: e.resourceUri }, n);
    }
    case `skill`:
      return (0, Q.jsx)(
        at,
        {
          cwd: t,
          hostId: r,
          label: A(A(u) || a.split(`/`).slice(-2, -1)[0]?.replace(/-/g, ` `) || a),
          href: a,
          openInSidePanel: l,
          tooltipText: a,
        },
        n,
      );
    case `text`:
      break;
  }
  let d = gt(a);
  if (d != null) {
    let a = i(d),
      o = c(a);
    return (0, Q.jsx)(
      it,
      {
        className: e,
        reference: a,
        label: bt({
          trimmedChildText: u,
          href: d,
          parsedReference: a,
          displayLabel: f(a),
          formattedLabel: o,
        }),
        tooltipText: o,
        cwd: t,
        hostId: r,
        onOpen: s,
        openInSidePanel: l,
      },
      n,
    );
  }
  return null;
}
function gt(e) {
  let t = _t(e);
  return u(t) || s(t) || vt(t) ? t : o(t);
}
function _t(e) {
  try {
    return decodeURI(e);
  } catch {
    return e;
  }
}
function vt(e) {
  return (
    /[\\/]$/.test(e) &&
    !e.startsWith(`//`) &&
    !/^[a-z][a-z0-9+.-]*:\/\//i.test(e) &&
    !/^www\./i.test(e) &&
    !/^(mailto|tel):/i.test(e)
  );
}
function yt(e) {
  return A(e);
}
function bt({
  trimmedChildText: e,
  href: t,
  parsedReference: n,
  displayLabel: r,
  formattedLabel: i,
}) {
  return e.length === 0 || e === t || e === i ? r : xt(e, n, i);
}
function xt(e, t, n) {
  if (!a(t)) return e;
  let r = n.slice(t.path.length);
  if (r.length === 0) return e;
  if (u(e)) {
    let n = i(e);
    if (St(n.path, t.path)) return `${n.path}${r}`;
  }
  return e.endsWith(r) ? e : `${e}${r}`;
}
function St(e, t) {
  let n = d(e).replace(/\/+$/, ``),
    r = d(t).replace(/\/+$/, ``);
  if (n === r || (n.length > 0 && r.endsWith(`/${n}`)) || (r.length > 0 && n.endsWith(`/${r}`)))
    return !0;
  let i = n.split(`/`).pop(),
    a = r.split(`/`).pop();
  return !i || !a || i !== a ? !1 : n === i || r === a;
}
var Ct = String.raw`\$(?:\[[^\]\n]+\]|[A-Za-z][\w-]*)`,
  wt = String.raw`@[A-Za-z0-9][\w.-]*[\\/][\w./-]*`,
  Tt = RegExp(`${Ct}|${wt}`, `g`),
  Et = RegExp(`^${Ct}$`);
function Dt(e) {
  if (e.indexOf(`$`) === -1 && e.indexOf(`@`) === -1) return null;
  let t = [];
  for (Tt.lastIndex = 0; ; ) {
    let n = Tt.exec(e);
    if (n == null) break;
    t.push({ content: n[0], index: n.index });
  }
  return t.length === 0 ? null : t;
}
function Ot(e) {
  return e[0] === `$` && Et.test(e);
}
export {
  it as a,
  $ as c,
  ge as d,
  ht as i,
  nt as l,
  Ot as n,
  ft as o,
  yt as r,
  at as s,
  Dt as t,
  ve as u,
};
//# sourceMappingURL=inline-mentions.js.map
