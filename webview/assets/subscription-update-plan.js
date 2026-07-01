import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ar as n,
  Dr as r,
  Er as i,
  GP as a,
  HP as o,
  RP as s,
  RV as c,
  TP as l,
  Tl as u,
  Tr as d,
  fN as f,
  gi as p,
  jV as m,
  mP as h,
  oP as g,
  pN as _,
  pi as v,
  qP as y,
  wP as b,
  wl as x,
  wr as S,
  zV as C,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  at as w,
  ot as T,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import { n as E, r as D } from "./plan-pricing.js";
function O(e) {
  let t = (0, k.c)(18),
    { ariaLabel: n, className: r, options: i, selectedId: a, onSelect: o } = e,
    s = (0, A.useId)(),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = b(`bg-token-foreground/10 inline-grid gap-1 rounded-2xl p-1`, r)),
      (t[0] = r),
      (t[1] = c));
  let l = `repeat(${i.length}, minmax(0, 1fr))`,
    u;
  t[2] === l ? (u = t[3]) : ((u = { gridTemplateColumns: l }), (t[2] = l), (t[3] = u));
  let d;
  if (t[4] !== s || t[5] !== o || t[6] !== i || t[7] !== a) {
    let e;
    (t[9] !== s || t[10] !== o || t[11] !== a
      ? ((e = (e) => {
          let t = e.id === a;
          return (0, j.jsxs)(
            `button`,
            {
              className: b(
                `cursor-interaction relative isolate min-w-0 rounded-xl px-3 py-1.5 text-sm font-medium transition-transform duration-150 active:scale-[0.98]`,
                t ? `text-black` : `text-token-text-secondary`,
              ),
              type: `button`,
              "aria-label": e.ariaLabel,
              "aria-pressed": t,
              onClick: () => {
                o(e.id);
              },
              children: [
                t
                  ? (0, j.jsx)(h.span, {
                      layoutId: s,
                      className: `absolute inset-0 -z-10 rounded-xl bg-white shadow-sm`,
                      transition: { type: `spring`, duration: 0.28, bounce: 0 },
                    })
                  : null,
                e.label,
              ],
            },
            e.id,
          );
        }),
        (t[9] = s),
        (t[10] = o),
        (t[11] = a),
        (t[12] = e))
      : (e = t[12]),
      (d = i.map(e)),
      (t[4] = s),
      (t[5] = o),
      (t[6] = i),
      (t[7] = a),
      (t[8] = d));
  } else d = t[8];
  let f;
  return (
    t[13] !== n || t[14] !== c || t[15] !== u || t[16] !== d
      ? ((f = (0, j.jsx)(`div`, {
          className: c,
          role: `group`,
          "aria-label": n,
          style: u,
          children: d,
        })),
        (t[13] = n),
        (t[14] = c),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
var k,
  A,
  j,
  M = e(() => {
    ((k = c()), l(), g(), (A = t(C(), 1)), (j = m()));
  });
function N(e) {
  let t = (0, F.c)(98),
    {
      isUpdating: n,
      onCancel: o,
      onConfirm: c,
      onGoToWeb: l,
      onOpenChange: u,
      pricingInfo: p,
      subscriptionUpdate: m,
    } = e,
    h = y(),
    { preview: g } = m,
    _;
  t[0] === c
    ? (_ = t[1])
    : ((_ = (e) => {
        (e.preventDefault(), c());
      }),
      (t[0] = c),
      (t[1] = _));
  let x = _,
    C,
    w,
    T;
  if (m.kind === `saved_card_upgrade`) {
    let e;
    bb0: switch (m.updatedPlan) {
      case `chatgptplusplan`:
        e = `Plus`;
        break bb0;
      case `chatgptprolite`:
        e = `Pro 5x`;
        break bb0;
      case `chatgptpro`:
        e = `Pro 20x`;
    }
    let n;
    if (t[2] !== m.paymentMethod.card_brand || t[3] !== m.paymentMethod.card_last4) {
      let e = m.paymentMethod.card_brand?.trim() ?? ``,
        r;
      t[5] === m.paymentMethod.card_last4
        ? (r = t[6])
        : ((r = m.paymentMethod.card_last4?.trim() ?? ``),
          (t[5] = m.paymentMethod.card_last4),
          (t[6] = r));
      let i = r;
      ((n = e),
        e && i ? (n = `${e.toUpperCase()} *${i}`) : i && (n = `*${i}`),
        (t[2] = m.paymentMethod.card_brand),
        (t[3] = m.paymentMethod.card_last4),
        (t[4] = n));
    } else n = t[4];
    let r;
    (t[7] === e
      ? (r = t[8])
      : ((r = (0, I.jsx)(a, {
          id: `settings.usage.pricingPlanPage.savedCardUpgrade.description`,
          defaultMessage: `You're upgrading to ChatGPT {targetPlan}. This will charge your saved payment method.`,
          description: `Description for the dialog confirming a Pro upgrade using a saved credit card`,
          values: { targetPlan: e },
        })),
        (t[7] = e),
        (t[8] = r)),
      (C = r));
    let i;
    t[9] === e
      ? (i = t[10])
      : ((i = (0, I.jsx)(a, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.subscription`,
          defaultMessage: `ChatGPT {targetPlan} subscription`,
          description: `Subscription selected in the Pro plan update dialog`,
          values: { targetPlan: e },
        })),
        (t[9] = e),
        (t[10] = i));
    let o;
    t[11] !== h ||
    t[12] !== g.currency ||
    t[13] !== g.positive_line_item_total ||
    t[14] !== m.minorUnitExponent
      ? ((o = P(h, g.positive_line_item_total, g.currency, m.minorUnitExponent)),
        (t[11] = h),
        (t[12] = g.currency),
        (t[13] = g.positive_line_item_total),
        (t[14] = m.minorUnitExponent),
        (t[15] = o))
      : (o = t[15]);
    let s;
    t[16] === o
      ? (s = t[17])
      : ((s = (0, I.jsx)(`span`, { children: o })), (t[16] = o), (t[17] = s));
    let c;
    t[18] !== i || t[19] !== s
      ? ((c = (0, I.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [i, s],
        })),
        (t[18] = i),
        (t[19] = s),
        (t[20] = c))
      : (c = t[20]);
    let l, u;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, I.jsx)(`span`, {
          className: `mt-0.5 text-xs text-token-text-secondary`,
          children: (0, I.jsx)(a, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle`,
            defaultMessage: `Billed monthly, starting today`,
            description: `Billing cycle information in the Pro upgrade dialog`,
          }),
        })),
        (u = (0, I.jsx)(`hr`, { className: `my-4 border-token-border-default` })),
        (t[21] = l),
        (t[22] = u))
      : ((l = t[21]), (u = t[22]));
    let d;
    t[23] !== h ||
    t[24] !== g.amount_due.amount_excluding_tax ||
    t[25] !== g.amount_due.tax_amount ||
    t[26] !== g.currency ||
    t[27] !== m.minorUnitExponent
      ? ((d =
          g.amount_due.tax_amount > 0
            ? (0, I.jsxs)(I.Fragment, {
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex justify-between gap-4`,
                    children: [
                      (0, I.jsx)(a, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.subtotal`,
                        defaultMessage: `Subtotal`,
                        description: `Subtotal in the Pro upgrade dialog`,
                      }),
                      (0, I.jsx)(`span`, {
                        children: P(
                          h,
                          g.amount_due.amount_excluding_tax,
                          g.currency,
                          m.minorUnitExponent,
                        ),
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `mt-2 flex justify-between gap-4`,
                    children: [
                      (0, I.jsx)(a, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.tax`,
                        defaultMessage: `Tax`,
                        description: `Tax in the Pro upgrade dialog`,
                      }),
                      (0, I.jsx)(`span`, {
                        children: P(h, g.amount_due.tax_amount, g.currency, m.minorUnitExponent),
                      }),
                    ],
                  }),
                ],
              })
            : null),
        (t[23] = h),
        (t[24] = g.amount_due.amount_excluding_tax),
        (t[25] = g.amount_due.tax_amount),
        (t[26] = g.currency),
        (t[27] = m.minorUnitExponent),
        (t[28] = d))
      : (d = t[28]);
    let f = g.amount_due.tax_amount > 0 && `mt-2`,
      p;
    t[29] === f
      ? (p = t[30])
      : ((p = b(`flex justify-between gap-4 font-semibold`, f)), (t[29] = f), (t[30] = p));
    let _;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, I.jsx)(a, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday`,
          defaultMessage: `Total due today`,
          description: `Total due today in the Pro upgrade dialog`,
        })),
        (t[31] = _))
      : (_ = t[31]);
    let v;
    t[32] !== h ||
    t[33] !== g.amount_due.amount ||
    t[34] !== g.currency ||
    t[35] !== m.minorUnitExponent
      ? ((v = P(h, g.amount_due.amount, g.currency, m.minorUnitExponent)),
        (t[32] = h),
        (t[33] = g.amount_due.amount),
        (t[34] = g.currency),
        (t[35] = m.minorUnitExponent),
        (t[36] = v))
      : (v = t[36]);
    let y;
    t[37] === v
      ? (y = t[38])
      : ((y = (0, I.jsx)(`span`, { children: v })), (t[37] = v), (t[38] = y));
    let x;
    t[39] !== p || t[40] !== y
      ? ((x = (0, I.jsxs)(`div`, { className: p, children: [_, y] })),
        (t[39] = p),
        (t[40] = y),
        (t[41] = x))
      : (x = t[41]);
    let S;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, I.jsx)(`hr`, { className: `my-4 border-token-border-default` })), (t[42] = S))
      : (S = t[42]);
    let E;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = (0, I.jsx)(`span`, {
          className: `font-semibold`,
          children: (0, I.jsx)(a, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.paymentMethod`,
            defaultMessage: `Payment method`,
            description: `Payment method label in the Pro upgrade dialog`,
          }),
        })),
        (t[43] = E))
      : (E = t[43]);
    let D;
    t[44] === n
      ? (D = t[45])
      : ((D = (0, I.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [
            E,
            (0, I.jsx)(`span`, { className: `truncate text-token-text-secondary`, children: n }),
          ],
        })),
        (t[44] = n),
        (t[45] = D));
    let O;
    (t[46] !== x || t[47] !== D || t[48] !== c || t[49] !== d
      ? ((O = (0, I.jsxs)(`div`, {
          className: `flex flex-col text-sm`,
          children: [c, l, u, d, x, S, D],
        })),
        (t[46] = x),
        (t[47] = D),
        (t[48] = c),
        (t[49] = d),
        (t[50] = O))
      : (O = t[50]),
      (w = O));
    let k;
    (t[51] === g.amount_due.amount
      ? (k = t[52])
      : ((k =
          g.amount_due.amount > 0
            ? (0, I.jsx)(a, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.payNow`,
                defaultMessage: `Pay now`,
                description: `Button paying for a Pro upgrade using the saved payment method`,
              })
            : (0, I.jsx)(a, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.confirm`,
                defaultMessage: `Confirm`,
                description: `Button confirming a Pro upgrade with no immediate payment due`,
              })),
        (t[51] = g.amount_due.amount),
        (t[52] = k)),
      (T = k));
  } else {
    let e = g.renewal_date,
      n;
    t[53] !== h || t[54] !== p
      ? ((n =
          p == null
            ? null
            : E({
                amount: p.monthlyAmounts.prolite,
                currencyCode: p.currencyCode,
                intl: h,
                minorUnitExponent: p.minorUnitExponent,
              })),
        (t[53] = h),
        (t[54] = p),
        (t[55] = n))
      : (n = t[55]);
    let r = n,
      i;
    (t[56] === e
      ? (i = t[57])
      : ((i =
          e == null
            ? (0, I.jsx)(a, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.descriptionWithoutDate`,
                defaultMessage: `Your Pro 20x subscription will change to Pro 5x at the end of your current billing period.`,
                description: `Description for a Pro 20x to Pro 5x downgrade when the renewal date is unavailable`,
              })
            : (0, I.jsx)(a, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.description`,
                defaultMessage: `Your Pro 20x subscription will remain active until {renewalDate}, when it will change to Pro 5x.`,
                description: `Description for a scheduled downgrade from Pro 20x to Pro 5x`,
                values: {
                  renewalDate: (0, I.jsx)(s, {
                    value: new Date(e),
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`,
                  }),
                },
              })),
        (t[56] = e),
        (t[57] = i)),
      (C = i));
    let o;
    t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, I.jsx)(a, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlan`,
          defaultMessage: `ChatGPT Pro 5x`,
          description: `New plan in the Pro 20x to Pro 5x downgrade dialog`,
        })),
        (t[58] = o))
      : (o = t[58]);
    let c;
    t[59] === r
      ? (c = t[60])
      : ((c =
          r == null
            ? null
            : (0, I.jsx)(a, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlanPrice`,
                defaultMessage: `{price} / month`,
                description: `Monthly price of Pro 5x in the downgrade dialog`,
                values: { price: r.formatted },
              })),
        (t[59] = r),
        (t[60] = c));
    let l;
    t[61] === c
      ? (l = t[62])
      : ((l = (0, I.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [o, c],
        })),
        (t[61] = c),
        (t[62] = l));
    let u;
    t[63] === e
      ? (u = t[64])
      : ((u =
          e == null
            ? (0, I.jsx)(`div`, {
                className: `mt-1 text-xs text-token-text-secondary`,
                children: (0, I.jsx)(a, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate`,
                  defaultMessage: `Billing will start at the end of your current billing period`,
                  description: `Billing start information when the renewal date is unavailable`,
                }),
              })
            : (0, I.jsx)(`div`, {
                className: `mt-1 text-xs text-token-text-secondary`,
                children: (0, I.jsx)(a, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStart`,
                  defaultMessage: `Billing will start on {renewalDate}`,
                  description: `Billing start date in the Pro 5x downgrade dialog`,
                  values: {
                    renewalDate: (0, I.jsx)(s, {
                      value: new Date(e),
                      year: `numeric`,
                      month: `long`,
                      day: `numeric`,
                    }),
                  },
                }),
              })),
        (t[63] = e),
        (t[64] = u));
    let d;
    (t[65] !== l || t[66] !== u
      ? ((d = (0, I.jsxs)(`div`, {
          className: `bg-token-main-surface-secondary rounded-xl border border-token-border-default p-4 text-sm`,
          children: [l, u],
        })),
        (t[65] = l),
        (t[66] = u),
        (t[67] = d))
      : (d = t[67]),
      (w = d));
    let f;
    (t[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, I.jsx)(a, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.confirm`,
          defaultMessage: `Confirm`,
          description: `Button confirming a downgrade from Pro 20x to Pro 5x`,
        })),
        (t[68] = f))
      : (f = t[68]),
      (T = f));
  }
  let D = !n,
    O;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, I.jsx)(a, {
        id: `settings.usage.pricingPlanPage.subscriptionUpdate.title`,
        defaultMessage: `Confirm plan changes`,
        description: `Title for the Pro subscription update dialog`,
      })),
      (t[69] = O))
    : (O = t[69]);
  let k;
  t[70] === C
    ? (k = t[71])
    : ((k = (0, I.jsx)(r, { children: (0, I.jsx)(i, { title: O, subtitle: C }) })),
      (t[70] = C),
      (t[71] = k));
  let A;
  t[72] === w ? (A = t[73]) : ((A = (0, I.jsx)(r, { children: w })), (t[72] = w), (t[73] = A));
  let j;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, I.jsx)(a, {
        id: `settings.usage.pricingPlanPage.subscriptionUpdate.cancel`,
        defaultMessage: `Cancel`,
        description: `Button canceling a Pro subscription update`,
      })),
      (t[74] = j))
    : (j = t[74]);
  let M;
  t[75] !== n || t[76] !== o
    ? ((M = (0, I.jsx)(f, {
        color: `ghost`,
        disabled: n,
        type: `button`,
        onClick: o,
        children: j,
      })),
      (t[75] = n),
      (t[76] = o),
      (t[77] = M))
    : (M = t[77]);
  let N;
  t[78] !== n || t[79] !== l || t[80] !== m.kind
    ? ((N =
        m.kind === `scheduled_downgrade`
          ? (0, I.jsx)(f, {
              color: `secondary`,
              disabled: n,
              type: `button`,
              onClick: l,
              children: (0, I.jsx)(a, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb`,
                defaultMessage: `Go to web`,
                description: `Button continuing a Pro subscription update on the web`,
              }),
            })
          : null),
      (t[78] = n),
      (t[79] = l),
      (t[80] = m.kind),
      (t[81] = N))
    : (N = t[81]);
  let L;
  t[82] !== T || t[83] !== n
    ? ((L = (0, I.jsx)(f, { color: `primary`, loading: n, type: `submit`, children: T })),
      (t[82] = T),
      (t[83] = n),
      (t[84] = L))
    : (L = t[84]);
  let R;
  t[85] !== M || t[86] !== N || t[87] !== L
    ? ((R = (0, I.jsx)(r, { children: (0, I.jsxs)(d, { children: [M, N, L] }) })),
      (t[85] = M),
      (t[86] = N),
      (t[87] = L),
      (t[88] = R))
    : (R = t[88]);
  let z;
  t[89] !== x || t[90] !== R || t[91] !== k || t[92] !== A
    ? ((z = (0, I.jsxs)(S, { as: `form`, onSubmit: x, children: [k, A, R] })),
      (t[89] = x),
      (t[90] = R),
      (t[91] = k),
      (t[92] = A),
      (t[93] = z))
    : (z = t[93]);
  let B;
  return (
    t[94] !== u || t[95] !== z || t[96] !== D
      ? ((B = (0, I.jsx)(v, {
          open: !0,
          showDialogClose: D,
          size: `default`,
          onOpenChange: u,
          children: z,
        })),
        (t[94] = u),
        (t[95] = z),
        (t[96] = D),
        (t[97] = B))
      : (B = t[97]),
    B
  );
}
function P(e, t, n, r) {
  let i = n.toUpperCase();
  return w({ intl: e, amount: t / 10 ** r, currencyCode: i, currencyFractionDigits: r });
}
var F,
  I,
  L = e(() => {
    ((F = c()), l(), o(), _(), p(), n(), T(), D(), (I = m()));
  });
function R(e) {
  switch (e) {
    case x.PLUS:
      return `chatgptplusplan`;
    case x.PROLITE:
      return `chatgptprolite`;
    case x.PRO:
      return `chatgptpro`;
  }
}
function z(e) {
  switch (e) {
    case `chatgptplusplan`:
      return x.PLUS;
    case `chatgptprolite`:
      return x.PROLITE;
    case `chatgptpro`:
      return x.PRO;
  }
}
var B = e(() => {
  u();
});
export { L as a, N as i, z as n, O as o, B as r, M as s, R as t };
//# sourceMappingURL=subscription-update-plan.js.map
