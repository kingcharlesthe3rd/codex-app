import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ba as n,
  D as r,
  E as i,
  Ht as a,
  Ol as o,
  Tt as s,
  Ut as c,
  Wt as l,
  Z as u,
  ac as d,
  kl as f,
  oc as p,
  ot as m,
  tc as h,
  ut as g,
  wt as _,
  xl as v,
  za as y,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  A as b,
  Jp as x,
  Xp as S,
  Yp as C,
  Zp as w,
  k as T,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Bx as ee,
  Fy as E,
  Lb as D,
  My as O,
  Rb as k,
  Rx as A,
  Xi as te,
  _v as ne,
  aw as re,
  cw as j,
  dr as ie,
  ir as ae,
  na as oe,
  uw as M,
  vv as N,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { gt as P, vt as se } from "./app-initial~app-main~automations-page.js";
import {
  h as ce,
  p as F,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Kn as I,
  qn as L,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Dn as R,
  On as z,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  dt as B,
  pt as V,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import {
  it as H,
  ot as U,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  a as W,
  i as G,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as le,
  t as K,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as ue,
  t as q,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as de, t as fe } from "./use-codex-worktrees-f0l-RbO2.js";
function pe() {
  let e = (0, Z.c)(57),
    t = M(),
    { selectedHostId: n } = U(),
    {
      data: r,
      isLoading: i,
      isFetching: a,
      error: o,
      refetch: s,
    } = de(N(n), `worktrees_settings_page`),
    c;
  e[0] === n ? (c = e[1]) : ((c = { hostId: n }), (e[0] = n), (e[1] = c));
  let { data: l, isLoading: u, error: f } = d(oe, c),
    { data: p, isLoading: m } = ie(),
    h = L(),
    g,
    _;
  if (
    e[2] !== p ||
    e[3] !== t ||
    e[4] !== h ||
    e[5] !== m ||
    e[6] !== u ||
    e[7] !== a ||
    e[8] !== i ||
    e[9] !== s ||
    e[10] !== n ||
    e[11] !== l?.roots ||
    e[12] !== f ||
    e[13] !== r?.worktrees ||
    e[14] !== o
  ) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let c = _e(r?.worktrees ?? [], l?.roots ?? []),
        d,
        v;
      if (e[17] !== p || e[18] !== h || e[19] !== n) {
        let t;
        (e[22] === n ? (t = e[23]) : ((t = (e) => ve(e) === n), (e[22] = n), (e[23] = t)),
          (d = (p ?? []).filter(t)));
        let r;
        (e[24] === h ? (r = e[25]) : ((r = (e) => !ee(e, h)), (e[24] = h), (e[25] = r)),
          (v = d.filter(r)),
          (e[17] = p),
          (e[18] = h),
          (e[19] = n),
          (e[20] = d),
          (e[21] = v));
      } else ((d = e[20]), (v = e[21]));
      let y = v,
        b = ge(c),
        C;
      e[26] === t
        ? (C = e[27])
        : ((C = t.formatMessage({
            id: `settings.worktrees.refresh`,
            defaultMessage: `Refresh`,
            description: `Button label to refresh the worktree list`,
          })),
          (e[26] = t),
          (e[27] = C));
      let w = C,
        T;
      e[28] === s
        ? (T = e[29])
        : ((T = () => {
            s();
          }),
          (e[28] = s),
          (e[29] = T));
      let E;
      e[30] === a
        ? (E = e[31])
        : ((E = a ? null : (0, $.jsx)(R, { className: `icon-xs` })), (e[30] = a), (e[31] = E));
      let D;
      e[32] !== a || e[33] !== w || e[34] !== T || e[35] !== E
        ? ((D = (0, $.jsx)(x, {
            "aria-label": w,
            className: `shrink-0`,
            color: `ghost`,
            loading: a,
            onClick: T,
            size: `toolbar`,
            title: w,
            uniform: !0,
            children: E,
          })),
          (e[32] = a),
          (e[33] = w),
          (e[34] = T),
          (e[35] = E),
          (e[36] = D))
        : (D = e[36]);
      let O = D,
        k = o ?? f;
      if (i || u) {
        let t;
        e[37] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(G, { slug: `worktrees` })), (e[37] = t))
          : (t = e[37]);
        let n;
        e[38] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(j, {
              id: `settings.worktrees.loading.title`,
              defaultMessage: `Loading worktrees`,
              description: `Loading state title for worktrees settings`,
            })),
            (e[38] = n))
          : (n = e[38]);
        let r;
        e[39] === O
          ? (r = e[40])
          : ((r = (0, $.jsx)(q.Header, { title: n, actions: O })), (e[39] = O), (e[40] = r));
        let i;
        e[41] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, $.jsx)(q.Content, {
              children: (0, $.jsx)(K, {
                children: (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                  children: [
                    (0, $.jsx)(S, { className: `icon-xxs` }),
                    (0, $.jsx)(j, {
                      id: `settings.worktrees.loading.body`,
                      defaultMessage: `Fetching worktree details.`,
                      description: `Loading state body for worktrees settings`,
                    }),
                  ],
                }),
              }),
            })),
            (e[41] = i))
          : (i = e[41]);
        let a;
        (e[42] === r
          ? (a = e[43])
          : ((a = (0, $.jsx)(P, { title: t, children: (0, $.jsxs)(q, { children: [r, i] }) })),
            (e[42] = r),
            (e[43] = a)),
          (_ = a));
        break bb0;
      }
      if (k) {
        let n;
        e[44] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(G, { slug: `worktrees` })), (e[44] = n))
          : (n = e[44]);
        let r;
        e[45] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsx)(j, {
              id: `settings.worktrees.error.title`,
              defaultMessage: `Unable to load worktrees`,
              description: `Error state title for worktrees settings`,
            })),
            (e[45] = r))
          : (r = e[45]);
        let i;
        e[46] === O
          ? (i = e[47])
          : ((i = (0, $.jsx)(q.Header, { title: r, actions: O })), (e[46] = O), (e[47] = i));
        let a;
        e[48] !== t || e[49] !== k.message
          ? ((a =
              k.message ||
              t.formatMessage({
                id: `settings.worktrees.error.body`,
                defaultMessage: `Something went wrong while loading worktrees.`,
                description: `Error body for worktrees settings`,
              })),
            (e[48] = t),
            (e[49] = k.message),
            (e[50] = a))
          : (a = e[50]);
        let o;
        e[51] === a
          ? (o = e[52])
          : ((o = (0, $.jsx)(q.Content, {
              children: (0, $.jsx)(K, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: a,
                }),
              }),
            })),
            (e[51] = a),
            (e[52] = o));
        let s;
        (e[53] !== i || e[54] !== o
          ? ((s = (0, $.jsx)(P, { title: n, children: (0, $.jsxs)(q, { children: [i, o] }) })),
            (e[53] = i),
            (e[54] = o),
            (e[55] = s))
          : (s = e[55]),
          (_ = s));
        break bb0;
      }
      let A;
      (e[56] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((A = (0, $.jsx)(G, { slug: `worktrees` })), (e[56] = A))
        : (A = e[56]),
        (g = (0, $.jsx)(P, {
          title: A,
          children:
            b.length === 0
              ? (0, $.jsxs)(q, {
                  children: [
                    (0, $.jsx)(q.Header, {
                      title: (0, $.jsx)(j, {
                        id: `settings.worktrees.empty.title`,
                        defaultMessage: `No worktrees yet`,
                        description: `Empty state title for worktrees settings`,
                      }),
                      actions: O,
                    }),
                    (0, $.jsx)(q.Content, {
                      children: (0, $.jsx)(K, {
                        children: (0, $.jsx)(`div`, {
                          className: `p-3 text-sm text-token-text-secondary`,
                          children: (0, $.jsx)(j, {
                            id: `settings.worktrees.empty.body`,
                            defaultMessage: `Worktrees created by Codex will appear here.`,
                            description: `Empty state body for worktrees settings`,
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : b.map((e, t) =>
                  (0, $.jsx)(
                    me,
                    {
                      action: t === 0 ? O : null,
                      allConversations: d,
                      visibleConversations: y,
                      hostId: n,
                      isConversationsLoading: m,
                      onWorktreeDeleted: () => {
                        s();
                      },
                      repoRoot: e.repoRoot,
                      worktrees: e.worktrees,
                    },
                    e.key,
                  ),
                ),
        })));
    }
    ((e[2] = p),
      (e[3] = t),
      (e[4] = h),
      (e[5] = m),
      (e[6] = u),
      (e[7] = a),
      (e[8] = i),
      (e[9] = s),
      (e[10] = n),
      (e[11] = l?.roots),
      (e[12] = f),
      (e[13] = r?.worktrees),
      (e[14] = o),
      (e[15] = g),
      (e[16] = _));
  } else ((g = e[15]), (_ = e[16]));
  return _ === Symbol.for(`react.early_return_sentinel`) ? g : _;
}
function me(e) {
  let t = (0, Z.c)(30),
    {
      action: n,
      repoRoot: i,
      worktrees: a,
      allConversations: o,
      visibleConversations: s,
      hostId: c,
      isConversationsLoading: l,
      onWorktreeDeleted: u,
    } = e,
    { data: d, isLoading: f } = r(i, N(c), `worktree_restore_banner`),
    p = d?.root ?? i ?? a[0]?.dir ?? null,
    m;
  t[0] === p
    ? (m = t[1])
    : ((m = p
        ? (0, $.jsx)(`span`, { className: `truncate font-mono text-sm`, children: p })
        : (0, $.jsx)(j, {
            id: `settings.worktrees.repository.unknown`,
            defaultMessage: `Unknown repository`,
            description: `Fallback label when worktree repository cannot be resolved`,
          })),
      (t[0] = p),
      (t[1] = m));
  let h = m,
    g = f && p == null,
    _;
  t[2] === h
    ? (_ = t[3])
    : ((_ = (0, $.jsx)(`div`, {
        className: `min-w-0 truncate text-sm text-token-text-primary`,
        children: h,
      })),
      (t[2] = h),
      (t[3] = _));
  let v;
  t[4] === g
    ? (v = t[5])
    : ((v = g
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-token-text-secondary`,
            children: (0, $.jsx)(j, {
              id: `settings.worktrees.repository.loading`,
              defaultMessage: `Loading repository metadata…`,
              description: `Subtitle while repository metadata is loading`,
            }),
          })
        : null),
      (t[4] = g),
      (t[5] = v));
  let y;
  t[6] !== _ || t[7] !== v
    ? ((y = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [_, v] })),
      (t[6] = _),
      (t[7] = v),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] !== n || t[10] !== y
    ? ((b = (0, $.jsx)(q.Header, { title: y, actions: n })), (t[9] = n), (t[10] = y), (t[11] = b))
    : (b = t[11]);
  let x;
  if (t[12] !== o || t[13] !== c || t[14] !== l || t[15] !== u || t[16] !== s || t[17] !== a) {
    let e;
    (t[19] !== o || t[20] !== c || t[21] !== l || t[22] !== u || t[23] !== s
      ? ((e = (e) =>
          (0, $.jsx)(
            he,
            {
              allConversations: J(e.dir, o),
              hostId: c,
              visibleConversations: J(e.dir, s),
              isConversationsLoading: l,
              onWorktreeDeleted: u,
              worktree: e,
            },
            e.dir,
          )),
        (t[19] = o),
        (t[20] = c),
        (t[21] = l),
        (t[22] = u),
        (t[23] = s),
        (t[24] = e))
      : (e = t[24]),
      (x = Y(a, s).map(e)),
      (t[12] = o),
      (t[13] = c),
      (t[14] = l),
      (t[15] = u),
      (t[16] = s),
      (t[17] = a),
      (t[18] = x));
  } else x = t[18];
  let S;
  t[25] === x
    ? (S = t[26])
    : ((S = (0, $.jsx)(q.Content, { children: (0, $.jsx)(K, { children: x }) })),
      (t[25] = x),
      (t[26] = S));
  let C;
  return (
    t[27] !== b || t[28] !== S
      ? ((C = (0, $.jsxs)(q, { children: [b, S] })), (t[27] = b), (t[28] = S), (t[29] = C))
      : (C = t[29]),
    C
  );
}
function he({
  worktree: e,
  allConversations: t,
  visibleConversations: n,
  hostId: r,
  isConversationsLoading: i,
  onWorktreeDeleted: o,
}) {
  let c = p(a),
    l = b(),
    u = M(),
    [d, f] = (0, Q.useState)(!1),
    h = N(r),
    g = async () => {
      if (!d) {
        f(!0);
        try {
          (t.length > 0 &&
            (await Promise.all(
              t.map((e) =>
                k(`archive-conversation`, {
                  conversationId: e.id,
                  cleanupWorktree: !1,
                  source: `worktree_delete`,
                }),
              ),
            )),
            await m(`worktree-delete`, {
              params: { hostId: h.id, worktree: e.dir, reason: `settings-delete-targeted` },
            }),
            o());
        } catch (e) {
          (s.error(`Failed to delete worktree`, { safe: {}, sensitive: { error: y(e) } }),
            c
              .get(ce)
              .danger(
                u.formatMessage({
                  id: `settings.worktrees.delete.error`,
                  defaultMessage: `Failed to delete worktree`,
                  description: `Error message when deleting a worktree from settings`,
                }),
              ));
        } finally {
          f(!1);
        }
      }
    };
  return (0, $.jsxs)(`div`, {
    className: `flex flex-col gap-2 p-3`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-sm font-medium text-token-text-primary`,
                children: (0, $.jsx)(j, {
                  id: `settings.worktrees.row.title`,
                  defaultMessage: `Worktree`,
                  description: `Label for a worktree row`,
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `mt-1 truncate font-mono text-xs text-token-text-secondary`,
                children: e.dir,
              }),
            ],
          }),
          (0, $.jsx)(x, {
            className: `shrink-0`,
            color: `danger`,
            loading: d,
            onClick: () => {
              g();
            },
            size: `toolbar`,
            children: (0, $.jsx)(j, {
              id: `settings.worktrees.row.delete`,
              defaultMessage: `Delete`,
              description: `Delete button label for a worktree row`,
            }),
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsx)(`div`, {
            className: `text-xs text-token-text-secondary`,
            children: (0, $.jsx)(j, {
              id: `settings.worktrees.row.conversations`,
              defaultMessage: `Conversations`,
              description: `Label for conversations list within a worktree row`,
            }),
          }),
          i
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-xs text-token-text-secondary`,
                children: [
                  (0, $.jsx)(S, { className: `icon-xxs` }),
                  (0, $.jsx)(j, {
                    id: `settings.worktrees.row.conversations.loading`,
                    defaultMessage: `Loading conversations…`,
                    description: `Loading label for conversations list`,
                  }),
                ],
              })
            : n.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `text-xs text-token-text-secondary`,
                  children: (0, $.jsx)(j, {
                    id: `settings.worktrees.row.conversations.empty`,
                    defaultMessage: `No conversations linked to this worktree.`,
                    description: `Empty state for conversations list in worktree row`,
                  }),
                })
              : (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: n.map((e) => {
                    let t = O(e);
                    return (0, $.jsx)(
                      `button`,
                      {
                        className: `focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm text-token-text-primary hover:bg-token-list-hover-background hover:text-token-text-primary/80 focus-visible:outline-1 focus-visible:outline-offset-[-2px]`,
                        onClick: () => {
                          l(e.id);
                        },
                        type: `button`,
                        children: (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children:
                            t ||
                            (0, $.jsx)(j, {
                              id: `settings.worktrees.conversation.untitled`,
                              defaultMessage: `Untitled conversation`,
                              description: `Fallback title for a conversation`,
                            }),
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
        ],
      }),
    ],
  });
}
function ge(e) {
  let t = new Map();
  for (let n of e) {
    let e = V(n.gitDir),
      r = X(e ?? n.dir),
      i = t.get(r);
    if (i) {
      i.worktrees.push(n);
      continue;
    }
    t.set(r, { key: r, repoRoot: e, worktrees: [n] });
  }
  return Array.from(t.values());
}
function _e(e, t) {
  return t.length === 0 ? e : e.filter((e) => !t.some((t) => ye(t, e.dir)));
}
function J(e, t) {
  if (t.length === 0) return [];
  let n = X(e);
  return t.filter((e) => {
    let t = e.cwd;
    if (!t) return !1;
    let r = X(t);
    return r === n ? !0 : r.startsWith(`${n}/`);
  });
}
function Y(e, t) {
  if (t.length === 0) return e;
  let n = e.map((e, n) => ({ worktree: e, index: n, conversationCount: J(e.dir, t).length }));
  return (
    n.sort((e, t) => {
      let n = t.conversationCount - e.conversationCount;
      return n === 0 ? e.index - t.index : n;
    }),
    n.map((e) => e.worktree)
  );
}
function X(e) {
  return n(e).replace(/\/+$/, ``);
}
function ve(e) {
  return e.hostId ?? `local`;
}
function ye(e, t) {
  let n = X(e),
    r = X(t);
  return n === r || n.startsWith(`${r}/`);
}
var Z, Q, $;
e(() => {
  ((Z = o()),
    h(),
    l(),
    (Q = t(f(), 1)),
    re(),
    ae(),
    D(),
    A(),
    C(),
    w(),
    F(),
    fe(),
    i(),
    I(),
    z(),
    E(),
    c(),
    te(),
    se(),
    ue(),
    H(),
    W(),
    le(),
    ne(),
    _(),
    u(),
    T(),
    g(),
    B(),
    ($ = v()));
})();
export { pe as WorktreesSettingsPage };
//# sourceMappingURL=worktrees-settings-page.js.map
