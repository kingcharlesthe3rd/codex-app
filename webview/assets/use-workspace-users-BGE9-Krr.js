import { n as e } from "./rolldown-runtime.js";
import {
  Dt as t,
  Et as n,
  Tl as r,
  cl as i,
  ml as a,
  vl as o,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  O as s,
  S as c,
  dt as l,
  ut as u,
  w as d,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  By as f,
  Hy as p,
  Sx as m,
  b as h,
  x as g,
  yx as _,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  $l as v,
  Du as y,
  Eu as b,
  Ql as x,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  $ as S,
  Q as C,
  Z as w,
  et as T,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
function E(e) {
  let t = (0, D.c)(30),
    { options: n, renderLabel: r, value: i, onChange: a } = e,
    o;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === i ? (e = t[4]) : ((e = (e) => e.value === i), (t[3] = i), (t[4] = e)),
      (o = n.find(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o));
  } else o = t[2];
  let s = o?.Icon,
    l;
  t[5] === s
    ? (l = t[6])
    : ((l = s == null ? null : (0, O.jsx)(s, { "aria-hidden": !0, className: `icon-xs` })),
      (t[5] = s),
      (t[6] = l));
  let f;
  t[7] === l
    ? (f = t[8])
    : ((f = (0, O.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10`,
        children: l,
      })),
      (t[7] = l),
      (t[8] = f));
  let p;
  t[9] !== r || t[10] !== i ? ((p = r(i)), (t[9] = r), (t[10] = i), (t[11] = p)) : (p = t[11]);
  let m;
  t[12] === p
    ? (m = t[13])
    : ((m = (0, O.jsx)(`span`, { className: `truncate`, children: p })), (t[12] = p), (t[13] = m));
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, O.jsx)(b, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] !== f || t[16] !== m
    ? ((g = (0, O.jsxs)(`button`, {
        type: `button`,
        className: `flex min-w-0 cursor-interaction items-center gap-3 text-left text-base`,
        children: [f, m, h],
      })),
      (t[15] = f),
      (t[16] = m),
      (t[17] = g))
    : (g = t[17]);
  let _;
  if (t[18] !== a || t[19] !== n || t[20] !== r || t[21] !== i) {
    let e;
    (t[23] !== a || t[24] !== r || t[25] !== i
      ? ((e = (e) =>
          (0, O.jsx)(
            d.Item,
            {
              disabled: e.disabled,
              LeftIcon: e.Icon,
              RightIcon: e.value === i ? u : void 0,
              onSelect: () => {
                a(e.value);
              },
              children: r(e.value),
            },
            e.value,
          )),
        (t[23] = a),
        (t[24] = r),
        (t[25] = i),
        (t[26] = e))
      : (e = t[26]),
      (_ = n.map(e)),
      (t[18] = a),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i),
      (t[22] = _));
  } else _ = t[22];
  let v;
  return (
    t[27] !== g || t[28] !== _
      ? ((v = (0, O.jsx)(c, {
          align: `start`,
          contentWidth: `menu`,
          triggerButton: g,
          children: _,
        })),
        (t[27] = g),
        (t[28] = _),
        (t[29] = v))
      : (v = t[29]),
    v
  );
}
var D,
  O,
  k = e(() => {
    ((D = r()), s(), l(), y(), (O = o()));
  });
function A(e) {
  let t = (0, N.c)(23),
    {
      actions: n,
      cancelAction: r,
      disabled: i,
      hasPendingAccessChange: a,
      hasPendingInvitees: o,
      idleActions: s,
      isSaving: c,
      savingAriaLabel: l,
      size: u,
      spinnerClassName: d,
    } = e,
    f;
  t[0] !== a || t[1] !== o
    ? ((f = M({ hasPendingAccessChange: a, hasPendingInvitees: o })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = f))
    : (f = t[2]);
  let p = f;
  if (p == null) return s ?? null;
  let h;
  t[3] !== r || t[4] !== i || t[5] !== c || t[6] !== u
    ? ((h =
        r == null
          ? null
          : (0, P.jsx)(w, {
              color: `secondary`,
              disabled: i || c,
              size: u,
              onClick: r.onClick,
              children: (0, P.jsx)(m, {
                id: `shareDialog.primaryAction.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label for cancelling staged changes in a share dialog`,
              }),
            })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c),
      (t[6] = u),
      (t[7] = h))
    : (h = t[7]);
  let g = c ? l : void 0,
    _ = i || c,
    v = n[p],
    y = n[p],
    b;
  t[8] !== p || t[9] !== n || t[10] !== c || t[11] !== d
    ? ((b = c ? (0, P.jsx)(S, { className: d }) : (n[p].label ?? (0, P.jsx)(j, { action: p }))),
      (t[8] = p),
      (t[9] = n),
      (t[10] = c),
      (t[11] = d),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== u ||
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== v.onClick ||
  t[17] !== y.type ||
  t[18] !== b
    ? ((x = (0, P.jsx)(w, {
        "aria-label": g,
        color: `primary`,
        disabled: _,
        size: u,
        onClick: v.onClick,
        type: y.type,
        children: b,
      })),
      (t[13] = u),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v.onClick),
      (t[17] = y.type),
      (t[18] = b),
      (t[19] = x))
    : (x = t[19]);
  let C;
  return (
    t[20] !== h || t[21] !== x
      ? ((C = (0, P.jsxs)(P.Fragment, { children: [h, x] })), (t[20] = h), (t[21] = x), (t[22] = C))
      : (C = t[22]),
    C
  );
}
function j(e) {
  let t = (0, N.c)(2),
    { action: n } = e;
  switch (n) {
    case `invite`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(m, {
              id: `shareDialog.primaryAction.invite`,
              defaultMessage: `Invite`,
              description: `Button label for inviting selected people or groups in a share dialog`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `share`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(m, {
              id: `shareDialog.primaryAction.save`,
              defaultMessage: `Save`,
              description: `Button label for saving a share dialog access change`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function M({ hasPendingAccessChange: e, hasPendingInvitees: t }) {
  return !e && !t ? null : e && !t ? `share` : `invite`;
}
var N,
  P,
  F = e(() => {
    ((N = r()), _(), C(), T(), (P = o()));
  });
function I(e) {
  return e.name ?? e.email ?? e.id;
}
function L(e) {
  return {
    chipLabel: e.email ?? void 0,
    id: `user:${e.account_user_id}`,
    label: I(e),
    secondaryLabel: e.email ?? void 0,
  };
}
function R({
  currentAccountUserId: e,
  existingAccountUserIds: t,
  selectedAccountUserIds: n,
  workspaceUsers: r,
}) {
  let i = new Set(t),
    a = new Set(n);
  return r?.filter(
    (t) => t.account_user_id !== e && !i.has(t.account_user_id) && !a.has(t.account_user_id),
  );
}
var z = e(() => {});
function B(e) {
  let t = (0, V.c)(23),
    {
      options: n,
      renderLabel: r,
      removeLabel: i,
      triggerButtonClassName: a,
      value: o,
      onChange: s,
      onRemoveAccess: l,
    } = e,
    f =
      a === void 0
        ? `flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground`
        : a,
    p;
  t[0] !== r || t[1] !== o ? ((p = r(o)), (t[0] = r), (t[1] = o), (t[2] = p)) : (p = t[2]);
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, H.jsx)(b, {
        "aria-hidden": !0,
        className: `icon-xs text-token-description-foreground`,
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] !== p || t[5] !== f
    ? ((h = (0, H.jsxs)(`button`, { type: `button`, className: f, children: [p, m] })),
      (t[4] = p),
      (t[5] = f),
      (t[6] = h))
    : (h = t[6]);
  let g;
  if (t[7] !== s || t[8] !== n || t[9] !== r || t[10] !== o) {
    let e;
    (t[12] !== s || t[13] !== r || t[14] !== o
      ? ((e = (e) =>
          (0, H.jsx)(
            d.Item,
            {
              disabled: e.disabled,
              RightIcon: e.value === o ? u : void 0,
              tooltipText: e.tooltipText,
              onSelect: () => {
                s?.(e.value);
              },
              children: r(e.value),
            },
            e.value,
          )),
        (t[12] = s),
        (t[13] = r),
        (t[14] = o),
        (t[15] = e))
      : (e = t[15]),
      (g = n.map(e)),
      (t[7] = s),
      (t[8] = n),
      (t[9] = r),
      (t[10] = o),
      (t[11] = g));
  } else g = t[11];
  let _;
  t[16] !== l || t[17] !== i
    ? ((_ =
        l == null
          ? null
          : (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)(d.Separator, {}),
                (0, H.jsx)(d.Item, {
                  onSelect: l,
                  children: (0, H.jsx)(`span`, {
                    className: `text-token-error-foreground`,
                    children: i,
                  }),
                }),
              ],
            })),
      (t[16] = l),
      (t[17] = i),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== h || t[20] !== g || t[21] !== _
      ? ((v = (0, H.jsxs)(c, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: h,
          children: [g, _],
        })),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var V,
  H,
  U = e(() => {
    ((V = r()), s(), l(), y(), (H = o()));
  });
function W(e) {
  let t = (0, K.c)(15),
    { label: n, avatarLabel: r, secondaryLabel: i, trailingContent: a } = e,
    o = r === void 0 ? n : r,
    s;
  t[0] === o ? (s = t[1]) : ((s = G(o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, q.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-sm font-medium text-token-foreground`,
        children: s,
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === n
    ? (l = t[5])
    : ((l = (0, q.jsx)(`div`, { className: `truncate text-base`, children: n })),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u =
        i == null
          ? null
          : (0, q.jsx)(`div`, {
              className: `truncate text-sm text-token-description-foreground`,
              children: i,
            })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, q.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [l, u] })),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== c || t[12] !== d || t[13] !== a
      ? ((f = (0, q.jsxs)(`div`, { className: `flex items-center gap-3`, children: [c, d, a] })),
        (t[11] = c),
        (t[12] = d),
        (t[13] = a),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function G(e) {
  return e
    .split(` `)
    .map((e) => e[0])
    .join(``)
    .slice(0, 2)
    .toUpperCase();
}
var K,
  q,
  J = e(() => {
    ((K = r()), (q = o()));
  });
function Y(e) {
  let t = (0, Z.c)(12),
    { accountId: r, authMethod: i } = g(),
    o;
  t[0] === e ? (o = t[1]) : ((o = e.trim()), (t[0] = e), (t[1] = o));
  let s = v(o, 200),
    c;
  t[2] !== r || t[3] !== s
    ? ((c = [`workspace-users`, r, s]), (t[2] = r), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = i === `chatgpt` && r != null && s.length > 0,
    u;
  t[5] !== r || t[6] !== s
    ? ((u = async () => {
        if (r == null) throw Error(`account id is required`);
        return (
          await f.safeGet(`/accounts/{account_id}/users`, {
            parameters: { path: { account_id: r }, query: { limit: 10, offset: 0, query: s } },
          })
        ).items;
      }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== c || t[9] !== l || t[10] !== u
      ? ((d = { queryKey: c, enabled: l, queryFn: u, staleTime: n.ONE_MINUTE }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    a(d)
  );
}
function X(e) {
  let t = (0, Z.c)(12),
    { accountId: r, authMethod: i } = g(),
    o;
  t[0] === e ? (o = t[1]) : ((o = e.trim()), (t[0] = e), (t[1] = o));
  let s = v(o, 200),
    c;
  t[2] !== r || t[3] !== s
    ? ((c = [`workspace-groups`, r, s]), (t[2] = r), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = i === `chatgpt` && r != null && s.length > 0,
    u;
  t[5] !== r || t[6] !== s
    ? ((u = async () => {
        if (r == null) throw Error(`account id is required`);
        return (
          await f.safeGet(`/accounts/{account_id}/groups`, {
            parameters: { path: { account_id: r }, query: { limit: 10, offset: 0, query: s } },
          })
        ).items;
      }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== c || t[9] !== l || t[10] !== u
      ? ((d = { queryKey: c, enabled: l, queryFn: u, staleTime: n.ONE_MINUTE }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    a(d)
  );
}
var Z,
  Q = e(() => {
    ((Z = r()), i(), h(), t(), p(), x());
  });
export {
  J as a,
  R as c,
  z as d,
  A as f,
  k as h,
  W as i,
  L as l,
  E as m,
  X as n,
  B as o,
  F as p,
  Y as r,
  U as s,
  Q as t,
  I as u,
};
//# sourceMappingURL=use-workspace-users-BGE9-Krr.js.map
