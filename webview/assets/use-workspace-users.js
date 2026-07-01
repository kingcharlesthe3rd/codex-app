import { n as e } from "./rolldown-runtime.js";
import {
  CP as t,
  DV as n,
  Du as r,
  EA as i,
  Eu as a,
  GN as o,
  GP as s,
  Gr as c,
  HP as l,
  RV as u,
  SP as d,
  Ur as f,
  WN as p,
  Yr as m,
  fN as h,
  hN as g,
  iu as _,
  jV as v,
  lM as y,
  mN as b,
  pN as x,
  ru as S,
  uM as C,
  wA as w,
  xV as T,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
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
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, O.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10`,
        children: l,
      })),
      (t[7] = l),
      (t[8] = u));
  let p;
  t[9] !== r || t[10] !== i ? ((p = r(i)), (t[9] = r), (t[10] = i), (t[11] = p)) : (p = t[11]);
  let m;
  t[12] === p
    ? (m = t[13])
    : ((m = (0, O.jsx)(`span`, { className: `truncate`, children: p })), (t[12] = p), (t[13] = m));
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, O.jsx)(d, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] !== u || t[16] !== m
    ? ((g = (0, O.jsxs)(`button`, {
        type: `button`,
        className: `flex min-w-0 cursor-interaction items-center gap-3 text-left text-base`,
        children: [u, m, h],
      })),
      (t[15] = u),
      (t[16] = m),
      (t[17] = g))
    : (g = t[17]);
  let _;
  if (t[18] !== a || t[19] !== n || t[20] !== r || t[21] !== i) {
    let e;
    (t[23] !== a || t[24] !== r || t[25] !== i
      ? ((e = (e) =>
          (0, O.jsx)(
            c.Item,
            {
              disabled: e.disabled,
              LeftIcon: e.Icon,
              RightIcon: e.value === i ? y : void 0,
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
      ? ((v = (0, O.jsx)(f, {
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
    ((D = u()), m(), C(), t(), (O = v()));
  });
function A(e) {
  let t = (0, N.c)(23),
    {
      actions: n,
      cancelAction: r,
      disabled: i,
      hasPendingAccessChange: a,
      hasPendingInvitees: o,
      idleActions: c,
      isSaving: l,
      savingAriaLabel: u,
      size: d,
      spinnerClassName: f,
    } = e,
    p;
  t[0] !== a || t[1] !== o
    ? ((p = M({ hasPendingAccessChange: a, hasPendingInvitees: o })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = p))
    : (p = t[2]);
  let m = p;
  if (m == null) return c ?? null;
  let g;
  t[3] !== r || t[4] !== i || t[5] !== l || t[6] !== d
    ? ((g =
        r == null
          ? null
          : (0, P.jsx)(h, {
              color: `secondary`,
              disabled: i || l,
              size: d,
              onClick: r.onClick,
              children: (0, P.jsx)(s, {
                id: `shareDialog.primaryAction.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label for cancelling staged changes in a share dialog`,
              }),
            })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = l),
      (t[6] = d),
      (t[7] = g))
    : (g = t[7]);
  let _ = l ? u : void 0,
    v = i || l,
    y = n[m],
    x = n[m],
    S;
  t[8] !== m || t[9] !== n || t[10] !== l || t[11] !== f
    ? ((S = l ? (0, P.jsx)(b, { className: f }) : (n[m].label ?? (0, P.jsx)(j, { action: m }))),
      (t[8] = m),
      (t[9] = n),
      (t[10] = l),
      (t[11] = f),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== d ||
  t[14] !== _ ||
  t[15] !== v ||
  t[16] !== y.onClick ||
  t[17] !== x.type ||
  t[18] !== S
    ? ((C = (0, P.jsx)(h, {
        "aria-label": _,
        color: `primary`,
        disabled: v,
        size: d,
        onClick: y.onClick,
        type: x.type,
        children: S,
      })),
      (t[13] = d),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y.onClick),
      (t[17] = x.type),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  return (
    t[20] !== g || t[21] !== C
      ? ((w = (0, P.jsxs)(P.Fragment, { children: [g, C] })), (t[20] = g), (t[21] = C), (t[22] = w))
      : (w = t[22]),
    w
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
          ? ((e = (0, P.jsx)(s, {
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
          ? ((e = (0, P.jsx)(s, {
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
    ((N = u()), l(), x(), g(), (P = v()));
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
    u =
      a === void 0
        ? `flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground`
        : a,
    p;
  t[0] !== r || t[1] !== o ? ((p = r(o)), (t[0] = r), (t[1] = o), (t[2] = p)) : (p = t[2]);
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, H.jsx)(d, {
        "aria-hidden": !0,
        className: `icon-xs text-token-description-foreground`,
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] !== p || t[5] !== u
    ? ((h = (0, H.jsxs)(`button`, { type: `button`, className: u, children: [p, m] })),
      (t[4] = p),
      (t[5] = u),
      (t[6] = h))
    : (h = t[6]);
  let g;
  if (t[7] !== s || t[8] !== n || t[9] !== r || t[10] !== o) {
    let e;
    (t[12] !== s || t[13] !== r || t[14] !== o
      ? ((e = (e) =>
          (0, H.jsx)(
            c.Item,
            {
              disabled: e.disabled,
              RightIcon: e.value === o ? y : void 0,
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
                (0, H.jsx)(c.Separator, {}),
                (0, H.jsx)(c.Item, {
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
      ? ((v = (0, H.jsxs)(f, {
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
    ((V = u()), m(), C(), t(), (H = v()));
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
    ((K = u()), (q = v()));
  });
function Y(e) {
  let t = (0, Z.c)(12),
    { accountId: i, authMethod: a } = r(),
    o;
  t[0] === e ? (o = t[1]) : ((o = e.trim()), (t[0] = e), (t[1] = o));
  let s = _(o, 200),
    c;
  t[2] !== i || t[3] !== s
    ? ((c = [`workspace-users`, i, s]), (t[2] = i), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = a === `chatgpt` && i != null && s.length > 0,
    u;
  t[5] !== i || t[6] !== s
    ? ((u = async () => {
        if (i == null) throw Error(`account id is required`);
        return (
          await w.safeGet(`/accounts/{account_id}/users`, {
            parameters: { path: { account_id: i }, query: { limit: 10, offset: 0, query: s } },
          })
        ).items;
      }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== c || t[9] !== l || t[10] !== u
      ? ((d = { queryKey: c, enabled: l, queryFn: u, staleTime: p.ONE_MINUTE }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    n(d)
  );
}
function X(e) {
  let t = (0, Z.c)(12),
    { accountId: i, authMethod: a } = r(),
    o;
  t[0] === e ? (o = t[1]) : ((o = e.trim()), (t[0] = e), (t[1] = o));
  let s = _(o, 200),
    c;
  t[2] !== i || t[3] !== s
    ? ((c = [`workspace-groups`, i, s]), (t[2] = i), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = a === `chatgpt` && i != null && s.length > 0,
    u;
  t[5] !== i || t[6] !== s
    ? ((u = async () => {
        if (i == null) throw Error(`account id is required`);
        return (
          await w.safeGet(`/accounts/{account_id}/groups`, {
            parameters: { path: { account_id: i }, query: { limit: 10, offset: 0, query: s } },
          })
        ).items;
      }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== c || t[9] !== l || t[10] !== u
      ? ((d = { queryKey: c, enabled: l, queryFn: u, staleTime: p.ONE_MINUTE }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    n(d)
  );
}
var Z,
  Q = e(() => {
    ((Z = u()), T(), a(), o(), i(), S());
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
//# sourceMappingURL=use-workspace-users.js.map
