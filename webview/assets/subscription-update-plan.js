import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  kl as r,
  xl as i,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as a,
  Go as o,
  Hd as s,
  Ho as c,
  Ia as l,
  Jp as u,
  Ma as d,
  Na as f,
  Ud as p,
  Yp as m,
  am as h,
  im as g,
  ja as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  BC as v,
  JC as y,
  aw as b,
  cw as x,
  tw as S,
  uw as C,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  n as w,
  t as T,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~pricing-plan-page~appge~oa4i4ynf.js";
import { n as E, r as D } from "./plan-pricing.js";
function O(e) {
  let t = (0, k.c)(18),
    { ariaLabel: n, className: r, options: i, selectedId: a, onSelect: o } = e,
    s = (0, A.useId)(),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = g(`bg-token-foreground/10 inline-grid gap-1 rounded-2xl p-1`, r)),
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
              className: g(
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
                  ? (0, j.jsx)(y.span, {
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
    ((k = n()), h(), v(), (A = t(r(), 1)), (j = i()));
  });
function N(e) {
  let t = (0, F.c)(98),
    {
      isUpdating: n,
      onCancel: r,
      onConfirm: i,
      onGoToWeb: o,
      onOpenChange: s,
      pricingInfo: l,
      subscriptionUpdate: p,
    } = e,
    m = C(),
    { preview: h } = p,
    v;
  t[0] === i
    ? (v = t[1])
    : ((v = (e) => {
        (e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = v));
  let y = v,
    b,
    w,
    T;
  if (p.kind === `saved_card_upgrade`) {
    let e;
    bb0: switch (p.updatedPlan) {
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
    if (t[2] !== p.paymentMethod.card_brand || t[3] !== p.paymentMethod.card_last4) {
      let e = p.paymentMethod.card_brand?.trim() ?? ``,
        r;
      t[5] === p.paymentMethod.card_last4
        ? (r = t[6])
        : ((r = p.paymentMethod.card_last4?.trim() ?? ``),
          (t[5] = p.paymentMethod.card_last4),
          (t[6] = r));
      let i = r;
      ((n = e),
        e && i ? (n = `${e.toUpperCase()} *${i}`) : i && (n = `*${i}`),
        (t[2] = p.paymentMethod.card_brand),
        (t[3] = p.paymentMethod.card_last4),
        (t[4] = n));
    } else n = t[4];
    let r;
    (t[7] === e
      ? (r = t[8])
      : ((r = (0, I.jsx)(x, {
          id: `settings.usage.pricingPlanPage.savedCardUpgrade.description`,
          defaultMessage: `You're upgrading to ChatGPT {targetPlan}. This will charge your saved payment method.`,
          description: `Description for the dialog confirming a Pro upgrade using a saved credit card`,
          values: { targetPlan: e },
        })),
        (t[7] = e),
        (t[8] = r)),
      (b = r));
    let i;
    t[9] === e
      ? (i = t[10])
      : ((i = (0, I.jsx)(x, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.subscription`,
          defaultMessage: `ChatGPT {targetPlan} subscription`,
          description: `Subscription selected in the Pro plan update dialog`,
          values: { targetPlan: e },
        })),
        (t[9] = e),
        (t[10] = i));
    let a;
    t[11] !== m ||
    t[12] !== h.currency ||
    t[13] !== h.positive_line_item_total ||
    t[14] !== p.minorUnitExponent
      ? ((a = P(m, h.positive_line_item_total, h.currency, p.minorUnitExponent)),
        (t[11] = m),
        (t[12] = h.currency),
        (t[13] = h.positive_line_item_total),
        (t[14] = p.minorUnitExponent),
        (t[15] = a))
      : (a = t[15]);
    let o;
    t[16] === a
      ? (o = t[17])
      : ((o = (0, I.jsx)(`span`, { children: a })), (t[16] = a), (t[17] = o));
    let s;
    t[18] !== i || t[19] !== o
      ? ((s = (0, I.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [i, o],
        })),
        (t[18] = i),
        (t[19] = o),
        (t[20] = s))
      : (s = t[20]);
    let c, l;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, I.jsx)(`span`, {
          className: `mt-0.5 text-xs text-token-text-secondary`,
          children: (0, I.jsx)(x, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle`,
            defaultMessage: `Billed monthly, starting today`,
            description: `Billing cycle information in the Pro upgrade dialog`,
          }),
        })),
        (l = (0, I.jsx)(`hr`, { className: `my-4 border-token-border-default` })),
        (t[21] = c),
        (t[22] = l))
      : ((c = t[21]), (l = t[22]));
    let u;
    t[23] !== m ||
    t[24] !== h.amount_due.amount_excluding_tax ||
    t[25] !== h.amount_due.tax_amount ||
    t[26] !== h.currency ||
    t[27] !== p.minorUnitExponent
      ? ((u =
          h.amount_due.tax_amount > 0
            ? (0, I.jsxs)(I.Fragment, {
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex justify-between gap-4`,
                    children: [
                      (0, I.jsx)(x, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.subtotal`,
                        defaultMessage: `Subtotal`,
                        description: `Subtotal in the Pro upgrade dialog`,
                      }),
                      (0, I.jsx)(`span`, {
                        children: P(
                          m,
                          h.amount_due.amount_excluding_tax,
                          h.currency,
                          p.minorUnitExponent,
                        ),
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `mt-2 flex justify-between gap-4`,
                    children: [
                      (0, I.jsx)(x, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.tax`,
                        defaultMessage: `Tax`,
                        description: `Tax in the Pro upgrade dialog`,
                      }),
                      (0, I.jsx)(`span`, {
                        children: P(m, h.amount_due.tax_amount, h.currency, p.minorUnitExponent),
                      }),
                    ],
                  }),
                ],
              })
            : null),
        (t[23] = m),
        (t[24] = h.amount_due.amount_excluding_tax),
        (t[25] = h.amount_due.tax_amount),
        (t[26] = h.currency),
        (t[27] = p.minorUnitExponent),
        (t[28] = u))
      : (u = t[28]);
    let d = h.amount_due.tax_amount > 0 && `mt-2`,
      f;
    t[29] === d
      ? (f = t[30])
      : ((f = g(`flex justify-between gap-4 font-semibold`, d)), (t[29] = d), (t[30] = f));
    let _;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, I.jsx)(x, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday`,
          defaultMessage: `Total due today`,
          description: `Total due today in the Pro upgrade dialog`,
        })),
        (t[31] = _))
      : (_ = t[31]);
    let v;
    t[32] !== m ||
    t[33] !== h.amount_due.amount ||
    t[34] !== h.currency ||
    t[35] !== p.minorUnitExponent
      ? ((v = P(m, h.amount_due.amount, h.currency, p.minorUnitExponent)),
        (t[32] = m),
        (t[33] = h.amount_due.amount),
        (t[34] = h.currency),
        (t[35] = p.minorUnitExponent),
        (t[36] = v))
      : (v = t[36]);
    let y;
    t[37] === v
      ? (y = t[38])
      : ((y = (0, I.jsx)(`span`, { children: v })), (t[37] = v), (t[38] = y));
    let S;
    t[39] !== f || t[40] !== y
      ? ((S = (0, I.jsxs)(`div`, { className: f, children: [_, y] })),
        (t[39] = f),
        (t[40] = y),
        (t[41] = S))
      : (S = t[41]);
    let C;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, I.jsx)(`hr`, { className: `my-4 border-token-border-default` })), (t[42] = C))
      : (C = t[42]);
    let E;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = (0, I.jsx)(`span`, {
          className: `font-semibold`,
          children: (0, I.jsx)(x, {
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
    (t[46] !== S || t[47] !== D || t[48] !== s || t[49] !== u
      ? ((O = (0, I.jsxs)(`div`, {
          className: `flex flex-col text-sm`,
          children: [s, c, l, u, S, C, D],
        })),
        (t[46] = S),
        (t[47] = D),
        (t[48] = s),
        (t[49] = u),
        (t[50] = O))
      : (O = t[50]),
      (w = O));
    let k;
    (t[51] === h.amount_due.amount
      ? (k = t[52])
      : ((k =
          h.amount_due.amount > 0
            ? (0, I.jsx)(x, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.payNow`,
                defaultMessage: `Pay now`,
                description: `Button paying for a Pro upgrade using the saved payment method`,
              })
            : (0, I.jsx)(x, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.confirm`,
                defaultMessage: `Confirm`,
                description: `Button confirming a Pro upgrade with no immediate payment due`,
              })),
        (t[51] = h.amount_due.amount),
        (t[52] = k)),
      (T = k));
  } else {
    let e = h.renewal_date,
      n;
    t[53] !== m || t[54] !== l
      ? ((n =
          l == null
            ? null
            : E({
                amount: l.monthlyAmounts.prolite,
                currencyCode: l.currencyCode,
                intl: m,
                minorUnitExponent: l.minorUnitExponent,
              })),
        (t[53] = m),
        (t[54] = l),
        (t[55] = n))
      : (n = t[55]);
    let r = n,
      i;
    (t[56] === e
      ? (i = t[57])
      : ((i =
          e == null
            ? (0, I.jsx)(x, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.descriptionWithoutDate`,
                defaultMessage: `Your Pro 20x subscription will change to Pro 5x at the end of your current billing period.`,
                description: `Description for a Pro 20x to Pro 5x downgrade when the renewal date is unavailable`,
              })
            : (0, I.jsx)(x, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.description`,
                defaultMessage: `Your Pro 20x subscription will remain active until {renewalDate}, when it will change to Pro 5x.`,
                description: `Description for a scheduled downgrade from Pro 20x to Pro 5x`,
                values: {
                  renewalDate: (0, I.jsx)(S, {
                    value: new Date(e),
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`,
                  }),
                },
              })),
        (t[56] = e),
        (t[57] = i)),
      (b = i));
    let a;
    t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, I.jsx)(x, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlan`,
          defaultMessage: `ChatGPT Pro 5x`,
          description: `New plan in the Pro 20x to Pro 5x downgrade dialog`,
        })),
        (t[58] = a))
      : (a = t[58]);
    let o;
    t[59] === r
      ? (o = t[60])
      : ((o =
          r == null
            ? null
            : (0, I.jsx)(x, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlanPrice`,
                defaultMessage: `{price} / month`,
                description: `Monthly price of Pro 5x in the downgrade dialog`,
                values: { price: r.formatted },
              })),
        (t[59] = r),
        (t[60] = o));
    let s;
    t[61] === o
      ? (s = t[62])
      : ((s = (0, I.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [a, o],
        })),
        (t[61] = o),
        (t[62] = s));
    let c;
    t[63] === e
      ? (c = t[64])
      : ((c =
          e == null
            ? (0, I.jsx)(`div`, {
                className: `mt-1 text-xs text-token-text-secondary`,
                children: (0, I.jsx)(x, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate`,
                  defaultMessage: `Billing will start at the end of your current billing period`,
                  description: `Billing start information when the renewal date is unavailable`,
                }),
              })
            : (0, I.jsx)(`div`, {
                className: `mt-1 text-xs text-token-text-secondary`,
                children: (0, I.jsx)(x, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStart`,
                  defaultMessage: `Billing will start on {renewalDate}`,
                  description: `Billing start date in the Pro 5x downgrade dialog`,
                  values: {
                    renewalDate: (0, I.jsx)(S, {
                      value: new Date(e),
                      year: `numeric`,
                      month: `long`,
                      day: `numeric`,
                    }),
                  },
                }),
              })),
        (t[63] = e),
        (t[64] = c));
    let u;
    (t[65] !== s || t[66] !== c
      ? ((u = (0, I.jsxs)(`div`, {
          className: `bg-token-main-surface-secondary rounded-xl border border-token-border-default p-4 text-sm`,
          children: [s, c],
        })),
        (t[65] = s),
        (t[66] = c),
        (t[67] = u))
      : (u = t[67]),
      (w = u));
    let d;
    (t[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, I.jsx)(x, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.confirm`,
          defaultMessage: `Confirm`,
          description: `Button confirming a downgrade from Pro 20x to Pro 5x`,
        })),
        (t[68] = d))
      : (d = t[68]),
      (T = d));
  }
  let D = !n,
    O;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, I.jsx)(x, {
        id: `settings.usage.pricingPlanPage.subscriptionUpdate.title`,
        defaultMessage: `Confirm plan changes`,
        description: `Title for the Pro subscription update dialog`,
      })),
      (t[69] = O))
    : (O = t[69]);
  let k;
  t[70] === b
    ? (k = t[71])
    : ((k = (0, I.jsx)(f, { children: (0, I.jsx)(d, { title: O, subtitle: b }) })),
      (t[70] = b),
      (t[71] = k));
  let A;
  t[72] === w ? (A = t[73]) : ((A = (0, I.jsx)(f, { children: w })), (t[72] = w), (t[73] = A));
  let j;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, I.jsx)(x, {
        id: `settings.usage.pricingPlanPage.subscriptionUpdate.cancel`,
        defaultMessage: `Cancel`,
        description: `Button canceling a Pro subscription update`,
      })),
      (t[74] = j))
    : (j = t[74]);
  let M;
  t[75] !== n || t[76] !== r
    ? ((M = (0, I.jsx)(u, {
        color: `ghost`,
        disabled: n,
        type: `button`,
        onClick: r,
        children: j,
      })),
      (t[75] = n),
      (t[76] = r),
      (t[77] = M))
    : (M = t[77]);
  let N;
  t[78] !== n || t[79] !== o || t[80] !== p.kind
    ? ((N =
        p.kind === `scheduled_downgrade`
          ? (0, I.jsx)(u, {
              color: `secondary`,
              disabled: n,
              type: `button`,
              onClick: o,
              children: (0, I.jsx)(x, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb`,
                defaultMessage: `Go to web`,
                description: `Button continuing a Pro subscription update on the web`,
              }),
            })
          : null),
      (t[78] = n),
      (t[79] = o),
      (t[80] = p.kind),
      (t[81] = N))
    : (N = t[81]);
  let L;
  t[82] !== T || t[83] !== n
    ? ((L = (0, I.jsx)(u, { color: `primary`, loading: n, type: `submit`, children: T })),
      (t[82] = T),
      (t[83] = n),
      (t[84] = L))
    : (L = t[84]);
  let R;
  t[85] !== M || t[86] !== N || t[87] !== L
    ? ((R = (0, I.jsx)(f, { children: (0, I.jsxs)(_, { children: [M, N, L] }) })),
      (t[85] = M),
      (t[86] = N),
      (t[87] = L),
      (t[88] = R))
    : (R = t[88]);
  let z;
  t[89] !== y || t[90] !== R || t[91] !== k || t[92] !== A
    ? ((z = (0, I.jsxs)(a, { as: `form`, onSubmit: y, children: [k, A, R] })),
      (t[89] = y),
      (t[90] = R),
      (t[91] = k),
      (t[92] = A),
      (t[93] = z))
    : (z = t[93]);
  let B;
  return (
    t[94] !== s || t[95] !== z || t[96] !== D
      ? ((B = (0, I.jsx)(c, {
          open: !0,
          showDialogClose: D,
          size: `default`,
          onOpenChange: s,
          children: z,
        })),
        (t[94] = s),
        (t[95] = z),
        (t[96] = D),
        (t[97] = B))
      : (B = t[97]),
    B
  );
}
function P(e, t, n, r) {
  let i = n.toUpperCase();
  return T({ intl: e, amount: t / 10 ** r, currencyCode: i, currencyFractionDigits: r });
}
var F,
  I,
  L = e(() => {
    ((F = n()), h(), b(), m(), o(), l(), w(), D(), (I = i()));
  });
function R(e) {
  switch (e) {
    case s.PLUS:
      return `chatgptplusplan`;
    case s.PROLITE:
      return `chatgptprolite`;
    case s.PRO:
      return `chatgptpro`;
  }
}
function z(e) {
  switch (e) {
    case `chatgptplusplan`:
      return s.PLUS;
    case `chatgptprolite`:
      return s.PROLITE;
    case `chatgptpro`:
      return s.PRO;
  }
}
var B = e(() => {
  p();
});
export { L as a, N as i, z as n, O as o, B as r, M as s, R as t };
//# sourceMappingURL=subscription-update-plan.js.map
