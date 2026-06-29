import { s as e } from "./chunk-Bj-mKKzh.js";
import { Er as t, Wr as n } from "./src-2.js";
import { _r as r } from "./app-server-manager-signals.js";
import { n as i, t as a } from "./jsx-runtime.js";
import { t as o } from "./clsx.js";
import { P as s, V as c, h as l, lt as u, n as d, r as f, u as p } from "./vscode-api.js";
import { t as m } from "./useQueries.js";
import { c as h, n as g, o as _, r as v } from "./lib-2.js";
import { o as y } from "./statsig.js";
import { v as b } from "./config-queries.js";
import { t as x } from "./use-debounced-value.js";
import { t as S } from "./startCase.js";
import { E as C, T as w, _ as T, p as E } from "./mention-item-C.js";
import { o as D } from "./mcp-capability-signals.js";
import { t as O } from "./apps.js";
import { t as k } from "./plugin-install-store.js";
import { t as A } from "./use-platform.js";
import { m as j, y as M } from "./use-plugins.js";
import {
  a as N,
  c as P,
  d as F,
  f as I,
  i as L,
  l as R,
  o as z,
  p as B,
  r as V,
  s as H,
  t as ee,
} from "./use-native-apps.electron.js";
import { r as te, t as ne } from "./get-file-icon.js";
import { t as re } from "./mcp.js";
import { t as ie } from "./get-skill-icon.js";
import { n as ae } from "./use-skills.js";
import { t as oe } from "./use-is-background-subagents-enabled.js";
import { t as se } from "./sortBy.js";
import { s as ce } from "./dist-1.js";
import {
  a as le,
  c as ue,
  i as U,
  l as de,
  n as fe,
  o as pe,
  r as me,
  s as he,
  u as ge,
} from "./use-composer-top-menu-max-height-CLH9-I0L.js";
import { t as W } from "./score-query-match.js";
import { t as _e } from "./list-navigation.js";
import { t as ve } from "./use-workspace-file-search.js";
import { r as ye } from "./mcp-capability-client.js";
var G = u(),
  be = [],
  xe = { sections: [] };
function K(e) {
  let t = (0, G.c)(14),
    { hostId: n, isQueryPending: r, query: i, roots: a } = e,
    o = r === void 0 ? !1 : r,
    s;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((s = { hostId: n, includeDirectories: !0, query: i, roots: a }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let { files: c, isLoading: l } = ve(s),
    u = i.trim();
  if (a == null || a.length === 0) return xe;
  let d = null;
  if (u.length === 0) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = g({
          id: `composer.atMentionList.emptyQuery`,
          defaultMessage: `Type to search for files`,
          description: `Shown in the files section when the query is empty`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (d = e));
  } else if (o || c == null || (l && c.length === 0)) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = g({
          id: `composer.atMentionList.loading`,
          defaultMessage: `Searching files…`,
          description: `Shown in the files section when fuzzy search is loading and no results have arrived yet`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (d = e));
  }
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = g({
        id: `composer.atMentionList.files`,
        defaultMessage: `Files`,
        description: `Section header for file results in the @ mention list.`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === c ? (p = t[8]) : ((p = c == null ? be : c.map(Se)), (t[7] = c), (t[8] = p));
  let m = l || o,
    h;
  return (
    t[9] !== d || t[10] !== f || t[11] !== p || t[12] !== m
      ? ((h = { sections: [{ id: `files`, title: f, items: p, emptyState: d, isLoading: m }] }),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p),
        (t[12] = m),
        (t[13] = h))
      : (h = t[13]),
    h
  );
}
function Se(e) {
  return {
    key: `file:${e.fsPath ?? e.path}`,
    label: e.label,
    detail: e.relativePathWithoutFileName,
    icon: z(e),
    insertMention: (t) => {
      let { composerController: n, mentionState: r } = t;
      n.insertAtMention(e, r);
    },
    completeQuery:
      e.matchType === `directory`
        ? (t) => {
            let { composerController: n, mentionState: r } = t;
            if (r.anchorPos == null) return;
            let { view: i } = n,
              { state: a, dispatch: o } = i,
              s = r.anchorPos,
              c = r.anchorPos + r.query.length,
              l = /[\\/]$/.test(e.path) ? e.path : `${e.path}/`,
              u = a.tr.insertText(l, s, c);
            (u.setSelection(ce.create(u.doc, s + l.length)), o(u), i.focus());
          }
        : void 0,
  };
}
var Ce = c(l, ({ hostId: e, path: t, query: n, servers: r }, { scope: i }) => ({
  queryKey: [`mcp-capability-mentions`, e, we(r), t, n],
  queryFn: () => ye(i, e, r, { path: t, query: n }),
  enabled: r.length > 0,
  staleTime: 0,
}));
function we(e) {
  return e.map(({ mentionSearchTool: e, server: t }) => `${t}:${e}`);
}
function Te({ sections: e, query: t, servers: n }) {
  let r = ke({ query: t, servers: n });
  return r.length === 0
    ? e
    : [
        {
          id: `mcp-servers`,
          title: g({
            id: `composer.atMentionList.mcpServers`,
            defaultMessage: `MCP servers`,
            description: `Section header for MCP server mention sources in the @ mention list`,
          }),
          items: r.map(({ item: e }) => e),
          emptyState: null,
          isLoading: !1,
        },
        ...e,
      ];
}
function Ee({ isLoading: e, mentionSource: t, results: n, servers: r }) {
  let i = t.path.at(-1)?.title ?? t.title;
  return Ae({ results: n, servers: r }).flatMap(({ items: n, server: r }) => {
    let a = n == null ? void 0 : je({ items: n, mentionSource: t, server: r });
    return (a?.length ?? 0) === 0 && !e
      ? []
      : [
          {
            id: `mcp-capability:${r}`,
            title: g({
              id: `composer.atMentionList.mcpServerScope`,
              defaultMessage: `{scope}`,
              description: `Section header for the current MCP server mention scope`,
            }),
            titleValues: { scope: i },
            items: a ?? [],
            emptyState:
              e && a == null
                ? g({
                    id: `composer.atMentionList.mcpServersLoading`,
                    defaultMessage: `Loading MCP servers…`,
                    description: `Shown while a selected MCP server mention provider is loading`,
                  })
                : null,
            isLoading: e,
            showTitle: !0,
          },
        ];
  });
}
function De(e) {
  return e?.kind === `mcp-capability`;
}
function Oe(e) {
  return ({ composerController: t, mentionState: n }) => {
    t.setAtMentionSource(e, n);
  };
}
function ke({ query: e, servers: t }) {
  let n = e.trim().length > 0;
  return t
    .flatMap((t) => {
      let r = W(t.title, e);
      return n && r === 0
        ? []
        : [
            {
              item: {
                detail: null,
                icon: re,
                insertMention: Oe({
                  kind: `mcp-capability`,
                  mentionSearchTool: t.mentionSearchTool,
                  path: [],
                  server: t.server,
                  title: t.title,
                }),
                key: J(t),
                label: t.title,
              },
              score: r,
            },
          ];
    })
    .sort(Ne);
}
function Ae({ results: e, servers: t }) {
  let n = new Map(
    e?.map(({ items: e, mentionSearchTool: t, server: n }) => [
      J({ mentionSearchTool: t, server: n }),
      e,
    ]),
  );
  return t.map(({ mentionSearchTool: e, server: t }) => ({
    items: n.get(J({ mentionSearchTool: e, server: t })),
    mentionSearchTool: e,
    server: t,
  }));
}
function je({ items: e, mentionSource: t, server: n }) {
  return e.map((e, r) => {
    switch (e.type) {
      case `group`:
        return {
          detail: null,
          insertMention: Oe({ ...t, path: [...t.path, e], server: n }),
          key: `mcp-capability-group:${n}:${e.id}:${r}`,
          label: e.title,
        };
      case `resource`:
        return {
          detail: null,
          icon: Me(e),
          insertMention: ({ composerController: t, mentionState: r }) => {
            t.insertResourceMentionFromAtMention(
              { iconSmall: ``, resourceUri: e.resourceUri, server: n },
              e.title,
              r,
            );
          },
          key: `mcp-capability-resource:${n}:${e.resourceUri}:${r}`,
          label: e.title,
        };
    }
  });
}
function Me(e) {
  let t = q(e.resourceUri, `file_name`) ?? q(e.resourceUri, `filename`),
    n = q(e.resourceUri, `mime_type`) ?? q(e.resourceUri, `mimeType`),
    r = te(t ?? e.title, n);
  if (!(r === `file` && t == null && n == null)) return ne[r];
}
function q(e, t) {
  try {
    return new URL(e).searchParams.get(t) ?? void 0;
  } catch {
    return;
  }
}
function Ne(e, t) {
  return t.score - e.score || e.item.label.localeCompare(t.item.label);
}
function J({ mentionSearchTool: e, server: t }) {
  return `mcp-capability:${t}:${e}`;
}
function Pe(e) {
  return e.flatMap((e) => e?.sections ?? []);
}
var Y = e(se(), 1),
  Fe = e(i(), 1);
function Ie({ backgroundAgents: e, excludedConversationIds: t = [], query: n }) {
  if (e.length === 0) return null;
  let r = e.filter((e) => !t.includes(e.conversationId)),
    i = n.trim(),
    a = i.length === 0 ? r : Le(r, i).filter((e) => ze(e, i) > 0);
  return {
    sections: [
      {
        id: `agents`,
        title: g({
          id: `composer.atMentionList.liveAgents`,
          defaultMessage: `Live agents`,
          description: `Section header for live agent results in the @ mention list.`,
        }),
        items: a.map((e) => ({
          key: `agent:${e.conversationId}`,
          label: e.displayName,
          detail: e.agentRole,
          iconElement: (0, Fe.createElement)(ge, {
            active: e.status === `active`,
            className: `icon-xs shrink-0`,
            seed: e.conversationId,
            "aria-hidden": !0,
          }),
          insertMention: ({ composerController: t, mentionState: n }) => {
            t.insertAgentMention(e, n);
          },
        })),
        emptyState: null,
        isLoading: !1,
      },
    ],
  };
}
function Le(e, t) {
  return (0, Y.default)(
    e.map((e, n) => ({ agent: e, score: ze(e, t), index: n })),
    [(e) => -e.score, (e) => e.agent.displayName, (e) => e.index],
  ).map((e) => e.agent);
}
function Re(e) {
  switch (e.status) {
    case `active`:
      return e.statusSummary == null ? `Thinking` : e.statusSummary;
    case `waiting`:
      return `Waiting`;
    case `done`:
      return `Done`;
  }
}
function ze(e, t) {
  return Math.max(
    W(e.displayName, t),
    W(`@${e.displayName}`, t),
    W(e.agentRole ?? ``, t),
    W(Re(e), t),
  );
}
var Be = e(S(), 1);
function Ve({ agents: e, query: t }) {
  if (e.length === 0) return null;
  let n = t.trim(),
    r = n.length === 0 ? e : He(e, n).filter((e) => Ue(e, n) > 0);
  return {
    sections: [
      {
        id: `custom-agents`,
        title: g({
          id: `composer.atMentionList.customAgents`,
          defaultMessage: `Custom agents`,
          description: `Section header for configured custom agent results in the @ mention list.`,
        }),
        items: r.map((e) => ({
          key: `subagent:${e.roleName}`,
          label: (0, Be.default)(e.roleName),
          detail: e.description,
          insertMention: ({ composerController: t, mentionState: n }) => {
            t.insertConfiguredAgentMention(e, n);
          },
        })),
        emptyState: null,
        isLoading: !1,
      },
    ],
  };
}
function He(e, t) {
  return (0, Y.default)(
    e.map((e, n) => ({ agent: e, score: Ue(e, t), index: n })),
    [(e) => -e.score, (e) => e.agent.roleName, (e) => e.index],
  ).map((e) => e.agent);
}
function Ue(e, t) {
  return Math.max(
    W(e.roleName, t),
    W(`@${e.roleName}`, t),
    W(e.description ?? ``, t),
    ...e.nicknameCandidates.map((e) => W(e, t)),
  );
}
var X = [`chrome-dev`, `chrome-internal`, `chrome`],
  Z = v({
    macTitle: {
      id: `computerUse.nativeApps.mac.title`,
      defaultMessage: `Mac apps`,
      description: `Section header for native macOS app mentions powered by the Computer Use plugin in the @ mention list.`,
    },
    macLoading: {
      id: `computerUse.nativeApps.mac.loading`,
      defaultMessage: `Loading Mac apps…`,
      description: `Shown in the native app mentions section when macOS app discovery is loading and no results have arrived yet.`,
    },
    desktopTitle: {
      id: `computerUse.nativeApps.desktop.title`,
      defaultMessage: `Desktop apps`,
      description: `Fallback section header for native desktop app mentions powered by the Computer Use plugin in the @ mention list.`,
    },
    desktopLoading: {
      id: `computerUse.nativeApps.desktop.loading`,
      defaultMessage: `Loading desktop apps…`,
      description: `Shown in the native app mentions section when desktop app discovery is loading and no results have arrived yet.`,
    },
  });
function We(e) {
  let t = (0, G.c)(12),
    {
      chromeAppPlugins: n,
      computerUsePlugin: r,
      onPluginMentionInserted: i,
      pluginMentionLabels: a,
      query: o,
    } = e,
    s = h(),
    { platform: c } = A(),
    l = o.trim().toLowerCase(),
    u = r != null,
    g;
  t[0] === u ? (g = t[1]) : ((g = { enabled: u }), (t[0] = u), (t[1] = g));
  let { nativeApps: _, isLoading: v } = ee(g),
    y;
  t[2] === c ? (y = t[3]) : ((y = Ye(c)), (t[2] = c), (t[3] = y));
  let b = y,
    x = s.formatMessage({
      id: `computerUse.label`,
      defaultMessage: `Computer use`,
      description: `Label for the Computer Use feature`,
    }),
    S = n[0] ?? null,
    C = _.find(qe) ?? null,
    w =
      l.length > 0 && S != null && Je(S, l)
        ? {
            kind: `chrome-plugin`,
            plugin: S,
            mention: { ...N(S, a), name: P, displayName: P, description: x },
            nativeApp: C == null ? null : { ...C, displayName: F(C) },
          }
        : null,
    T =
      l.length === 0 || r == null
        ? []
        : _.filter((e) => !(S != null && B(e)))
            .map((e) => {
              let t = F(e);
              return {
                kind: `native-app`,
                app: t === e.displayName ? e : { ...e, displayName: t },
                plugin: r,
              };
            })
            .filter((e) => Xe(e.app.displayName, l)),
    E = [...(w == null ? [] : [w]), ...T].slice(0, 2),
    D = E.flatMap(Ke),
    k = m({
      queries: D.map((e) => ({
        queryKey: f(`computer-use-native-desktop-app-icon`, { appPath: e.appPath }),
        queryFn: () =>
          d(`computer-use-native-desktop-app-icon`, { params: { appPath: e.appPath } }),
        enabled: r != null,
        staleTime: p.INFINITE,
        refetchOnWindowFocus: !1,
      })),
    }),
    j = l.length > 0 && v && w == null && T.length === 0 ? b.loading : null;
  if ((r == null && w == null) || (E.length === 0 && j == null)) return null;
  let M = b.title,
    R = E.map((e) => {
      if (e.kind === `chrome-plugin`) {
        let t = e.nativeApp == null ? `` : (k[D.indexOf(e.nativeApp)]?.data?.iconSmall ?? ``);
        return {
          key: `plugin:${e.mention.path}`,
          label: P,
          detail: x,
          icon:
            e.nativeApp == null
              ? L(e.plugin, a)
              : ie(null, {
                  size: `small`,
                  smallOnly: !0,
                  iconSmall: t,
                  basePath: e.nativeApp.appPath,
                  alt: P,
                  fallbackName: e.nativeApp.bundleId,
                  fallbackIcon: O,
                }),
          insertMention: (t) => {
            let { composerController: n, mentionState: r } = t;
            (n.insertMentionFromAtMention(e.mention, r), i?.(e.plugin));
          },
        };
      }
      let t = k[D.indexOf(e.app)]?.data?.iconSmall ?? ``,
        n = I({ app: e.app, description: x, computerPlugin: e.plugin, iconSmall: t });
      return {
        key: `plugin:${n.path}:${e.app.bundleId}`,
        label: e.app.displayName,
        detail: x,
        icon: ie(null, {
          size: `small`,
          smallOnly: !0,
          iconSmall: t,
          basePath: e.app.appPath,
          alt: e.app.displayName,
          fallbackName: e.app.bundleId,
          fallbackIcon: O,
        }),
        insertMention: (t) => {
          let { composerController: r, mentionState: a } = t;
          (r.insertMentionFromAtMention(n, a), i?.(e.plugin));
        },
      };
    }),
    z;
  t[4] !== v || t[5] !== k
    ? ((z = v || k.some(Ge)), (t[4] = v), (t[5] = k), (t[6] = z))
    : (z = t[6]);
  let V;
  return (
    t[7] !== j || t[8] !== R || t[9] !== z || t[10] !== b.title
      ? ((V = { id: `native-apps`, title: M, items: R, emptyState: j, isLoading: z }),
        (t[7] = j),
        (t[8] = R),
        (t[9] = z),
        (t[10] = b.title),
        (t[11] = V))
      : (V = t[11]),
    V
  );
}
function Ge(e) {
  return e.isLoading;
}
function Ke(e) {
  return e.kind === `native-app` ? [e.app] : e.nativeApp == null ? [] : [e.nativeApp];
}
function qe(e) {
  return B(e);
}
function Je(e, t) {
  return Math.max(W(e.plugin.name, t), W(e.displayName ?? ``, t), W(P, t), W(`@${P}`, t)) > 0;
}
function Ye(e) {
  return e === `macOS`
    ? { title: Z.macTitle, loading: Z.macLoading }
    : { title: Z.desktopTitle, loading: Z.desktopLoading };
}
function Xe(e, t) {
  return e
    .toLocaleLowerCase()
    .split(/\s+/)
    .some((e) => e.startsWith(t));
}
var Ze = [w, ...X],
  Qe = `DISABLED_BY_ADMIN`,
  $e = `4218407052`;
function et(e) {
  let t = (0, G.c)(9),
    { hostId: n, query: r, roots: i } = e,
    a = h(),
    { platform: o } = A(),
    s = y($e),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { installSuggestionPluginNames: Ze }), (t[0] = c))
    : (c = t[0]);
  let { availablePlugins: l, isLoading: u } = j(n, i, c),
    d = !s,
    f;
  t[1] === d ? (f = t[2]) : ((f = { enabled: d }), (t[1] = d), (t[2] = f));
  let { availablePlugins: p, isLoading: m } = j(n, i, f),
    _ = [...l];
  if (!s) {
    let e = new Set(l.map(nt));
    for (let t of p) {
      let n = nt(t);
      t.plugin.installed && !e.has(n) && (_.push(t), e.add(n));
    }
  }
  let v = u || (!s && m),
    { openPluginInstall: b } = k(),
    x = T(a),
    S = r.trim(),
    C = _.filter(tt),
    w = R(C),
    E = o === `macOS` || o === `windows`,
    D = E ? it(C) : [],
    O = new Set(D),
    M = E ? C.filter((e) => !O.has(e) && (e.plugin.installed || !rt(e))) : C,
    P;
  t[3] === b
    ? (P = t[4])
    : ((P = (e) => {
        e.plugin.installed || b(e);
      }),
      (t[3] = b),
      (t[4] = P));
  let F = P,
    I = We({
      chromeAppPlugins: D,
      computerUsePlugin: w,
      onPluginMentionInserted: F,
      pluginMentionLabels: x,
      query: r,
    }),
    z = S.length === 0 ? M : ot(M, S, x).filter((e) => st(e, S, x) > 0),
    B = v && z.length === 0;
  if (z.length === 0 && !B && I == null) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { sections: [] }), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let H = [];
  if (z.length > 0 || B) {
    let e;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = g({
          id: `composer.atMentionList.plugins`,
          defaultMessage: `Plugins`,
          description: `Section header for plugin results in the @ mention list.`,
        })),
        (t[6] = e))
      : (e = t[6]);
    let n;
    (t[7] === B
      ? (n = t[8])
      : ((n = B
          ? g({
              id: `composer.atMentionList.pluginsLoading`,
              defaultMessage: `Loading plugins…`,
              description: `Shown in the plugins section when plugin discovery is loading and no results have arrived yet`,
            })
          : null),
        (t[7] = B),
        (t[8] = n)),
      H.push({
        id: `plugins`,
        title: e,
        items: z.map((e) => {
          let t = N(e, x);
          return {
            key: `plugin:${t.path}`,
            label: t.displayName,
            detail: V(e),
            icon: L(e, x),
            insertMention: (n) => {
              let { composerController: r, mentionState: i } = n;
              (r.insertMentionFromAtMention(t, i), F(e));
            },
          };
        }),
        emptyState: n,
        isLoading: v,
      }));
  }
  return (I != null && H.push(I), { sections: H });
}
function tt(e) {
  return e.plugin.availability === Qe
    ? !1
    : e.plugin.enabled
      ? !0
      : !e.plugin.installed && Ze.includes(e.plugin.name);
}
function nt(e) {
  return (e.displayName?.trim() || e.plugin.name).toLowerCase();
}
function rt(e) {
  return X.includes(e.plugin.name);
}
function it(e) {
  let n = M(),
    r = t(n),
    i = at(n);
  return (0, Y.default)(
    e.filter((e) => rt(e) && e.marketplaceName === r),
    [(e) => (e.plugin.name === i ? 0 : 1), (e) => X.indexOf(e.plugin.name)],
  );
}
function at(e) {
  switch (e) {
    case n.Dev:
      return `chrome-dev`;
    case n.Agent:
    case n.Prod:
    case n.PublicBeta:
      return `chrome`;
    case n.InternalAlpha:
    case n.Nightly:
      return `chrome-internal`;
  }
}
function ot(e, t, n) {
  return (0, Y.default)(
    e.map((e, r) => ({ plugin: e, score: st(e, t, n), index: r })),
    [(e) => -e.score, (e) => N(e.plugin, n).displayName, (e) => e.index],
  ).map((e) => e.plugin);
}
function st(e, t, n) {
  let r = N(e, n);
  return Math.max(
    W(e.plugin.name, t),
    W(e.displayName ?? ``, t),
    W(r.displayName, t),
    W(`@${r.displayName}`, t),
    W(`@${e.displayName ?? e.plugin.name}`, t),
  );
}
function ct(e) {
  let t = (0, G.c)(14),
    { hostId: n, query: r, roots: i } = e,
    a = r.trim(),
    o = a.length > 0,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let { skills: c, isLoading: l } = ae(i, n, s),
    u;
  t[2] === o ? (u = t[3]) : ((u = { enabled: o }), (t[2] = o), (t[3] = u));
  let { installedPlugins: d, isLoading: f } = j(n ?? `local`, i, u),
    p = new Set(d.map(ut)),
    m = M();
  if (!o) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { sections: [] }), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let h = ft(
      c.filter((e) => dt(e, p, f, m)),
      a,
    ).filter((e) => mt(e, a)),
    _ = l && h.length === 0;
  if (h.length === 0 && !_) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { sections: [] }), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let v;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = g({
        id: `composer.atMentionList.skills`,
        defaultMessage: `Skills`,
        description: `Section header for skill results in the @ mention list.`,
      })),
      (t[6] = v))
    : (v = t[6]);
  let y = h.map(lt),
    b;
  t[7] === _
    ? (b = t[8])
    : ((b = _
        ? g({
            id: `composer.atMentionList.skillsLoading`,
            defaultMessage: `Loading skills…`,
            description: `Shown in the skills section when skill discovery is loading and no results have arrived yet`,
          })
        : null),
      (t[7] = _),
      (t[8] = b));
  let x;
  return (
    t[9] !== l || t[10] !== v || t[11] !== y || t[12] !== b
      ? ((x = { sections: [{ id: `skills`, title: v, items: y, emptyState: b, isLoading: l }] }),
        (t[9] = l),
        (t[10] = v),
        (t[11] = y),
        (t[12] = b),
        (t[13] = x))
      : (x = t[13]),
    x
  );
}
function lt(e) {
  let t = E(e);
  return {
    key: `skill:${t.path}`,
    label: t.displayName,
    detail: C(e),
    icon: H(),
    insertMention: (e) => {
      let { composerController: n, mentionState: r } = e;
      n.insertMentionFromAtMention(t, r);
    },
  };
}
function ut(e) {
  return e.plugin.name;
}
function dt(e, t, n, i = null) {
  if (!e.enabled || !de(e, i)) return !1;
  let a = r(e.path)?.pluginId;
  return a == null || !X.includes(a) || (!n && !t.has(a));
}
function ft(e, t) {
  return (0, Y.default)(
    e.map((e, n) => ({ skill: e, score: pt(e, t), index: n })),
    [
      (e) => -e.score,
      (e) =>
        e.skill.displayName == null || e.skill.displayName === ``
          ? e.skill.name
          : e.skill.displayName,
      (e) => e.index,
    ],
  ).map((e) => e.skill);
}
function pt(e, t) {
  return Math.max(W(e.name, t), W(e.displayName ?? ``, t), W(`@${e.displayName ?? e.name}`, t));
}
function mt(e, t) {
  let n = t.trim().toLowerCase();
  return n.length === 0
    ? !0
    : [e.name, e.displayName ?? ``, `@${e.displayName ?? e.name}`].some((e) =>
        e.toLowerCase().includes(n),
      );
}
function ht(e) {
  let t = (0, G.c)(15),
    {
      backgroundAgents: n,
      excludedAgentConversationIds: r,
      hostId: i,
      roots: a,
      skillRoots: o,
      query: c,
    } = e,
    l = n === void 0 ? [] : n,
    u = r === void 0 ? [] : r,
    d = oe(),
    f = x(c, 100),
    p = f !== c,
    m;
  t[0] !== f || t[1] !== i || t[2] !== a || t[3] !== p
    ? ((m = { hostId: i, query: f, roots: a, isQueryPending: p }),
      (t[0] = f),
      (t[1] = i),
      (t[2] = a),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let h = K(m),
    _ = s(D, i),
    v = o ?? a,
    y;
  t[5] !== i || t[6] !== c || t[7] !== v
    ? ((y = { hostId: i, query: c, roots: v }), (t[5] = i), (t[6] = c), (t[7] = v), (t[8] = y))
    : (y = t[8]);
  let S = Te({ sections: et(y).sections, query: c, servers: _ }),
    C;
  t[9] !== i || t[10] !== c || t[11] !== o
    ? ((C = { hostId: i, query: c, roots: o }), (t[9] = i), (t[10] = c), (t[11] = o), (t[12] = C))
    : (C = t[12]);
  let w = ct(C),
    { data: T, isLoading: E } = b(a, d),
    O = new Set(
      l.flatMap((e) => (e.agentRole == null || u.includes(e.conversationId) ? [] : [e.agentRole])),
    ),
    k = T?.roles.filter((e) => !O.has(e.roleName)) ?? [],
    A = Ie({ backgroundAgents: l, excludedConversationIds: u, query: c }),
    j = d ? Ve({ agents: k, query: c }) : null,
    M = A?.sections[0] ?? null,
    N = j?.sections[0] ?? null,
    P = [...(M?.items ?? []), ...(N?.items ?? [])],
    F =
      P.length === 0 && !E
        ? null
        : {
            id: `agents`,
            title: g({
              id: `composer.atMentionList.agents`,
              defaultMessage: `Agents`,
              description: `Section header for agent results in the @ mention list.`,
            }),
            items: P,
            emptyState:
              P.length === 0
                ? g({
                    id: `composer.atMentionList.agentsLoading`,
                    defaultMessage: `Loading agents…`,
                    description: `Shown in the agents section when configured agents are loading and no results have arrived yet.`,
                  })
                : null,
            isLoading: E,
          },
    I = _t(gt(Pe([F == null ? null : { sections: [F] }, { sections: S }, w, h]), c)),
    L;
  return (t[13] === I ? (L = t[14]) : ((L = { sections: I }), (t[13] = I), (t[14] = L)), L);
}
function gt(e, t = ``) {
  return e.map((e) => {
    let n = vt(e.id, t);
    return n == null || e.items.length <= n ? e : { ...e, items: e.items.slice(0, n) };
  });
}
function _t(e) {
  let t = 8;
  return e.flatMap((e) => {
    if (e.items.length === 0) return e.emptyState == null ? [] : [e];
    if (t === 0) return [];
    let n = e.items.slice(0, t);
    return ((t -= n.length), [{ ...e, items: n }]);
  });
}
function vt(e, t) {
  let n = t.trim().length > 0;
  switch (e) {
    case `plugins`:
      return n ? 3 : null;
    case `skills`:
      return 2;
    default:
      return null;
  }
}
var yt = { loadingBar: `_loadingBar_1g9nv_1`, "loading-bar-slide": `_loading-bar-slide_1g9nv_1` },
  Q = a();
function bt(e) {
  let t = (0, G.c)(29),
    {
      backgroundAgents: n,
      className: r,
      chromeVariant: i,
      excludedAgentConversationIds: a,
      hostId: o,
      isHomeMenu: s,
      keyboardEventTarget: c,
      onAddContext: l,
      onRequestClose: u,
      onUpdateSelectedMention: d,
      query: f,
      roots: p,
      skillRoots: m,
      source: h,
    } = e,
    g;
  t[0] === n ? (g = t[1]) : ((g = n === void 0 ? [] : n), (t[0] = n), (t[1] = g));
  let _ = g,
    v = i === void 0 ? `default` : i,
    y;
  t[2] === a ? (y = t[3]) : ((y = a === void 0 ? [] : a), (t[2] = a), (t[3] = y));
  let b = y,
    x = s === void 0 ? !1 : s;
  if (De(h)) {
    let e;
    return (
      t[4] !== v ||
      t[5] !== r ||
      t[6] !== o ||
      t[7] !== x ||
      t[8] !== c ||
      t[9] !== l ||
      t[10] !== u ||
      t[11] !== d ||
      t[12] !== f ||
      t[13] !== h
        ? ((e = (0, Q.jsx)(St, {
            className: r,
            chromeVariant: v,
            hostId: o,
            isHomeMenu: x,
            keyboardEventTarget: c,
            onAddContext: l,
            onRequestClose: u,
            onUpdateSelectedMention: d,
            query: f,
            source: h,
          })),
          (t[4] = v),
          (t[5] = r),
          (t[6] = o),
          (t[7] = x),
          (t[8] = c),
          (t[9] = l),
          (t[10] = u),
          (t[11] = d),
          (t[12] = f),
          (t[13] = h),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let S;
  return (
    t[15] !== _ ||
    t[16] !== v ||
    t[17] !== r ||
    t[18] !== b ||
    t[19] !== o ||
    t[20] !== x ||
    t[21] !== c ||
    t[22] !== l ||
    t[23] !== u ||
    t[24] !== d ||
    t[25] !== f ||
    t[26] !== p ||
    t[27] !== m
      ? ((S = (0, Q.jsx)(xt, {
          backgroundAgents: _,
          className: r,
          chromeVariant: v,
          excludedAgentConversationIds: b,
          hostId: o,
          isHomeMenu: x,
          keyboardEventTarget: c,
          onAddContext: l,
          onRequestClose: u,
          onUpdateSelectedMention: d,
          query: f,
          roots: p,
          skillRoots: m,
        })),
        (t[15] = _),
        (t[16] = v),
        (t[17] = r),
        (t[18] = b),
        (t[19] = o),
        (t[20] = x),
        (t[21] = c),
        (t[22] = l),
        (t[23] = u),
        (t[24] = d),
        (t[25] = f),
        (t[26] = p),
        (t[27] = m),
        (t[28] = S))
      : (S = t[28]),
    S
  );
}
function xt(e) {
  let t = (0, G.c)(19),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]))
    : (({
        backgroundAgents: r,
        excludedAgentConversationIds: i,
        hostId: a,
        query: o,
        roots: s,
        skillRoots: c,
        ...n
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l;
  t[8] !== r || t[9] !== i || t[10] !== a || t[11] !== o || t[12] !== s || t[13] !== c
    ? ((l = {
        backgroundAgents: r,
        excludedAgentConversationIds: i,
        hostId: a,
        query: o,
        roots: s,
        skillRoots: c,
      }),
      (t[8] = r),
      (t[9] = i),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = c),
      (t[14] = l))
    : (l = t[14]);
  let { sections: u } = ht(l),
    d;
  return (
    t[15] !== n || t[16] !== o || t[17] !== u
      ? ((d = (0, Q.jsx)($, { ...n, query: o, sections: u })),
        (t[15] = n),
        (t[16] = o),
        (t[17] = u),
        (t[18] = d))
      : (d = t[18]),
    d
  );
}
function St(e) {
  let t = (0, G.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ hostId: r, query: i, source: a, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = s(D, r),
    c;
  t[5] !== a.mentionSearchTool || t[6] !== a.server
    ? ((c = (e) => {
        let { mentionSearchTool: t, server: n } = e;
        return t === a.mentionSearchTool && n === a.server;
      }),
      (t[5] = a.mentionSearchTool),
      (t[6] = a.server),
      (t[7] = c))
    : (c = t[7]);
  let l = o.filter(c),
    u = s(Ce, { hostId: r, path: a.path.map(Ct), query: i, servers: l }),
    d = Ee({ isLoading: u.isLoading, mentionSource: a, results: u.data, servers: l }),
    f;
  return (
    t[8] !== n || t[9] !== i || t[10] !== d
      ? ((f = (0, Q.jsx)($, { ...n, query: i, sections: d })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function Ct(e) {
  let { id: t } = e;
  return t;
}
function $(e) {
  let t = (0, G.c)(11),
    {
      className: n,
      sections: r,
      onUpdateSelectedMention: i,
      onAddContext: a,
      onRequestClose: s,
      query: c,
      chromeVariant: l,
      isHomeMenu: u,
      keyboardEventTarget: d,
    } = e,
    f = c === void 0 ? `` : c,
    p = l === void 0 ? `default` : l,
    m = u === void 0 ? !1 : u,
    h = r.filter(Dt),
    g = [];
  for (let e of h) g.push(...e.items);
  let v;
  t[0] !== a || t[1] !== i
    ? ((v = (e) => {
        (i(e), a(e));
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = v))
    : (v = t[2]);
  let y;
  t[3] === i
    ? (y = t[4])
    : ((y = (e) => {
        i(e ?? null);
      }),
      (t[3] = i),
      (t[4] = y));
  let {
      highlightedIndex: b,
      listRef: x,
      getItemProps: S,
    } = _e({
      items: g,
      isActive: g.length > 0,
      captureWindowKeydown: !0,
      keyboardEventTarget: d,
      preserveHighlightOnItemsChange: !0,
      onSelect: v,
      onHighlight: y,
    }),
    C = new Map();
  for (let e = 0; e < g.length; e += 1) {
    let t = g[e];
    t != null && C.set(t.key, e);
  }
  let w = h.length > 1 || h.some(Et),
    T = !(g.length > 0) && h.every(At),
    E;
  (t[5] === r ? (E = t[6]) : ((E = r.some(Tt)), (t[5] = r), (t[6] = E)),
    ue({ isLoading: E, onRequestClose: s, query: f, resultCount: g.length }));
  let D = p === `default` ? `both` : `bottom`,
    O = fe(m),
    k = m ? `composer-home-top-menu` : `max-h-[320px]`,
    A;
  t[7] !== n || t[8] !== k ? ((A = o(n, k)), (t[7] = n), (t[8] = k), (t[9] = A)) : (A = t[9]);
  let j;
  return (
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((j = o(`flex w-full flex-col`)), (t[10] = j))
      : (j = t[10]),
    (0, Q.jsxs)(me, {
      className: A,
      chromeVariant: p,
      containerRef: m ? O : void 0,
      children: [
        (0, Q.jsx)(pe, {
          fadeMaskVariant: D,
          listRef: x,
          children: (0, Q.jsxs)(`div`, {
            className: j,
            children: [
              h.map((e, t) =>
                (0, Q.jsx)(
                  Ot,
                  {
                    className: t === 0 ? void 0 : `pt-2`,
                    chromeVariant: p,
                    getItemProps: S,
                    hasSectionHeaders: w,
                    highlightedIndex: b,
                    itemIndexByKey: C,
                    section: e,
                  },
                  e.id,
                ),
              ),
              T
                ? (0, Q.jsx)(U, {
                    children: (0, Q.jsx)(_, {
                      id: `composer.atMentionList.noResults`,
                      defaultMessage: `No results`,
                      description: `Shown when there are no mention results matching the search query`,
                    }),
                  })
                : null,
            ],
          }),
        }),
        h.some(wt) ? (0, Q.jsx)(`div`, { className: yt.loadingBar, "aria-hidden": `true` }) : null,
      ],
    })
  );
}
function wt(e) {
  return e.isLoading;
}
function Tt(e) {
  return e.isLoading;
}
function Et(e) {
  return e.emptyState != null;
}
function Dt(e) {
  return e.items.length > 0 || e.emptyState != null;
}
function Ot(e) {
  let t = (0, G.c)(16),
    {
      className: n,
      chromeVariant: r,
      getItemProps: i,
      hasSectionHeaders: a,
      highlightedIndex: o,
      itemIndexByKey: s,
      section: c,
    } = e,
    l;
  t[0] !== r ||
  t[1] !== n ||
  t[2] !== a ||
  t[3] !== c.showTitle ||
  t[4] !== c.title ||
  t[5] !== c.titleValues
    ? ((l =
        a || c.showTitle
          ? (0, Q.jsx)(he, {
              className: n,
              chromeVariant: r,
              children: (0, Q.jsx)(_, { ...c.title, values: c.titleValues }),
            })
          : null),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a),
      (t[3] = c.showTitle),
      (t[4] = c.title),
      (t[5] = c.titleValues),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== i || t[8] !== o || t[9] !== s || t[10] !== c.emptyState || t[11] !== c.items
    ? ((u =
        c.items.length > 0
          ? c.items.map((e) =>
              (0, Q.jsx)(
                kt,
                { entry: e, highlightedIndex: o, itemIndex: s.get(e.key) ?? -1, getItemProps: i },
                e.key,
              ),
            )
          : c.emptyState == null
            ? null
            : (0, Q.jsx)(U, { children: (0, Q.jsx)(_, { ...c.emptyState }) })),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c.emptyState),
      (t[11] = c.items),
      (t[12] = u))
    : (u = t[12]);
  let d;
  return (
    t[13] !== l || t[14] !== u
      ? ((d = (0, Q.jsxs)(`div`, { children: [l, u] })), (t[13] = l), (t[14] = u), (t[15] = d))
      : (d = t[15]),
    d
  );
}
function kt(e) {
  let t = (0, G.c)(20),
    { entry: n, highlightedIndex: r, itemIndex: i, getItemProps: a } = e,
    s = i === r,
    c;
  t[0] !== n.icon || t[1] !== n.iconElement
    ? ((c =
        n.iconElement ?? (n.icon ? (0, Q.jsx)(n.icon, { className: `icon-xs shrink-0` }) : null)),
      (t[0] = n.icon),
      (t[1] = n.iconElement),
      (t[2] = c))
    : (c = t[2]);
  let l = n.detail != null && `flex-shrink-0`,
    u;
  t[3] !== n.labelClassName || t[4] !== l
    ? ((u = o(`truncate`, l, n.labelClassName)), (t[3] = n.labelClassName), (t[4] = l), (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== n.label || t[7] !== u
    ? ((d = (0, Q.jsx)(`span`, { className: u, children: n.label })),
      (t[6] = n.label),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n.detail
    ? (f = t[10])
    : ((f =
        n.detail == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `flex-1 truncate text-sm text-token-description-foreground`,
              children: n.detail,
            })),
      (t[9] = n.detail),
      (t[10] = f));
  let p;
  t[11] !== c || t[12] !== d || t[13] !== f
    ? ((p = (0, Q.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [c, d, f],
      })),
      (t[11] = c),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== a || t[16] !== i || t[17] !== s || t[18] !== p
      ? ((m = (0, Q.jsx)(le, { getItemProps: a, highlighted: s, itemIndex: i, children: p })),
        (t[15] = a),
        (t[16] = i),
        (t[17] = s),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function At(e) {
  return e.emptyState == null;
}
export { K as n, bt as t };
//# sourceMappingURL=at-mention-list-1.js.map
