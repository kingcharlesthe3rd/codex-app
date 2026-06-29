import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { o as r, s as i, t as a, z as o } from "./app-scope.js";
import { Jr as s, Kr as c, Mn as l } from "./app-server-manager-signals.js";
import { _ as u, f as d } from "./vscode-api.js";
import { Ca as f } from "./src-2.js";
import { l as p, s as m } from "./lib.js";
import { t as h } from "./clsx-Cir5-jBH.js";
import { t as g } from "./button.js";
import { r as _ } from "./toast-signal.js";
import { $ as v, Q as y, Z as b, t as x } from "./product-logger.js";
import { c as S, i as C } from "./statsig.js";
import { t as w } from "./request.js";
import { r as T } from "./modal-controller-state.js";
import { a as E, d as D, i as O, l as k, n as A, r as j } from "./dialog-layout-B.js";
import { t as M } from "./use-auth.js";
import {
  a as N,
  f as P,
  i as F,
  o as ee,
  r as I,
  t as L,
} from "./get-codex-purchase-handoff-url.js";
import { t as te } from "./checkbox.js";
import { A as ne, x as R, y as z } from "./use-rate-limit.js";
function B({ intl: e, amount: t, currencyCode: n, currencyFractionDigits: r }) {
  let i = r ?? V({ intl: e, currencyCode: n });
  return e.formatNumber(t, {
    style: `currency`,
    currency: n,
    minimumFractionDigits: i,
    maximumFractionDigits: i,
  });
}
function V({ intl: e, currencyCode: t }) {
  return (
    e.formatters.getNumberFormat(e.locale, { style: `currency`, currency: t }).resolvedOptions()
      .maximumFractionDigits ?? 0
  );
}
var re = [500, 1e3, 2e3],
  H = 1e3;
function ie(e) {
  if (!e.isEnabled) return String(re[0]);
  let t = W(e.rechargeTarget ?? ``);
  return t.kind === `valid` ? String(t.value) : String(re[0]);
}
function ae(e) {
  if (!e.isEnabled) return `125`;
  let t = W(e.rechargeThreshold ?? ``);
  return t.kind === `valid` ? String(t.value) : `125`;
}
function oe(e) {
  return e.isEnabled ? (e.rechargeMonthlyLimit == null ? `` : U(e.rechargeMonthlyLimit)) : ``;
}
function se(e) {
  let t = W(e);
  switch (t.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return t.value < 125 ? `below-minimum` : null;
  }
}
function ce({ minimumBalance: e, targetBalance: t }) {
  let n = se(t);
  if (n != null) return n;
  let r = W(e),
    i = W(t);
  return r.kind === `valid` && i.kind === `valid` && i.value - r.value < 125
    ? `target-balance-below-minimum`
    : null;
}
function le(e) {
  if (e == null || e.minorUnitExponent == null || e.amountPerCredit <= 0) return 250;
  let t = e.amountPerCredit * 10 ** e.minorUnitExponent,
    n = Math.ceil(H / t);
  return Math.max(250, ge(n, 250));
}
function ue({ value: e, pricingInfo: t }) {
  let n = W(e);
  switch (n.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return n.value < le(t) ? `below-minimum` : n.value % 250 == 0 ? null : `invalid-increment`;
  }
}
function de({ value: e, pricingInfo: t, groupSeparator: n, decimalSeparator: r }) {
  let i = fe({ value: e, pricingInfo: t, groupSeparator: n, decimalSeparator: r });
  if (i == null) return null;
  let a = Math.round(i);
  return Math.abs(i - a) > 1e-6 ? null : String(a);
}
function fe({ value: e, pricingInfo: t, groupSeparator: n, decimalSeparator: r }) {
  let i = U(e)
    .replaceAll(n, ``)
    .replaceAll(r, `.`)
    .replace(/[^\d.]/g, ``);
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(i)) return null;
  let a = Number.parseFloat(i);
  return t == null || t.amountPerCredit <= 0 || !Number.isFinite(a) || a <= 0
    ? null
    : a / t.amountPerCredit;
}
function pe({ monthlyLimit: e, targetBalance: t }) {
  let n = W(e),
    r = W(t);
  switch (n.kind) {
    case `missing`:
      return null;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return r.kind === `valid` && n.value < r.value ? `monthly-limit-below-target` : null;
  }
}
function me({ minimumBalance: e, targetBalance: t, monthlyLimit: n }) {
  if (
    se(e) != null ||
    ce({ minimumBalance: e, targetBalance: t }) != null ||
    pe({ monthlyLimit: n, targetBalance: t }) != null
  )
    return null;
  let r = Number.parseInt(U(e), 10),
    i = Number.parseInt(U(t), 10),
    a = U(n);
  return {
    recharge_threshold: String(r),
    recharge_target: String(i),
    recharge_monthly_limit: a.length > 0 ? a : null,
  };
}
function he({ isEnabled: e, serverState: t, savePayload: n }) {
  return e
    ? n == null
      ? null
      : t.isEnabled
        ? n.recharge_threshold !== t.rechargeThreshold ||
          n.recharge_target !== t.rechargeTarget ||
          n.recharge_monthly_limit !== t.rechargeMonthlyLimit
          ? `update`
          : null
        : `enable`
    : t.isEnabled
      ? `disable`
      : null;
}
function U(e) {
  return e?.trim() ?? ``;
}
function W(e) {
  let t = U(e);
  return t.length === 0
    ? { kind: `missing` }
    : /^\d+$/.test(t)
      ? { kind: `valid`, value: Number.parseInt(t, 10) }
      : { kind: `invalid` };
}
function ge(e, t) {
  return Math.ceil(e / t) * t;
}
function _e({ intl: e, creditQuantity: t, pricingInfo: n }) {
  return Number.isFinite(t)
    ? B({
        intl: e,
        amount: t * n.amountPerCredit,
        currencyCode: n.currencyCode,
        currencyFractionDigits: n.minorUnitExponent,
      })
    : null;
}
function ve({ intl: e, creditQuantity: t, pricingInfo: n }) {
  let r = xe({ intl: e, amount: t * n.amountPerCredit, pricingInfo: n });
  return r == null
    ? null
    : r
        .filter((e) => e.type !== `currency`)
        .map((e) => e.value)
        .join(``)
        .trim();
}
function ye({ intl: e, pricingInfo: t }) {
  return (
    xe({ intl: e, amount: 0, pricingInfo: t })?.find((e) => e.type === `currency`)?.value ?? null
  );
}
function G({ intl: e, creditQuantity: t, pricingInfo: n }) {
  if (!Number.isFinite(t)) return null;
  let r = t * n.amountPerCredit;
  return B({
    intl: e,
    amount: r,
    currencyCode: n.currencyCode,
    currencyFractionDigits: Number.isInteger(r) ? 0 : n.minorUnitExponent,
  });
}
function be({ intl: e, creditBalance: t, rechargeTarget: n, pricingInfo: r }) {
  let i = Number.parseInt(U(n), 10);
  if (!Number.isFinite(i)) return null;
  let a = Math.max(0, Math.floor(Number(t ?? 0))),
    o = Math.max(0, i - a);
  return o === 0 ? null : _e({ intl: e, creditQuantity: o, pricingInfo: r });
}
function xe({ intl: e, amount: t, pricingInfo: n }) {
  return Number.isFinite(t)
    ? e.formatters
        .getNumberFormat(e.locale, {
          style: `currency`,
          currency: n.currencyCode,
          minimumFractionDigits: n.minorUnitExponent ?? void 0,
          maximumFractionDigits: n.minorUnitExponent ?? void 0,
        })
        .formatToParts(t)
    : null;
}
var K = o(),
  q = e(t(), 1),
  J = n();
function Se(e) {
  let t = (0, K.c)(41),
    {
      intl: n,
      value: r,
      selection: i,
      pricingInfo: a,
      error: o,
      minimumQuantity: s,
      quantityStep: c,
      onChange: l,
      onSelectionChange: u,
      onInvalidCurrencyDraftChange: d,
      onBlur: f,
    } = e,
    p;
  t[0] === r ? (p = t[1]) : ((p = U(r)), (t[0] = r), (t[1] = p));
  let g = p,
    _ = i === `preset`,
    v;
  t[2] !== n || t[3] !== _ || t[4] !== l || t[5] !== u || t[6] !== a || t[7] !== g
    ? ((v = re.map((e) =>
        (0, J.jsx)(
          Te,
          {
            creditQuantity: e,
            pricingInfo: a,
            isSelected: _ && String(e) === g,
            intl: n,
            onClick: () => {
              (u(`preset`), l(String(e)));
            },
          },
          e,
        ),
      )),
      (t[2] = n),
      (t[3] = _),
      (t[4] = l),
      (t[5] = u),
      (t[6] = a),
      (t[7] = g),
      (t[8] = v))
    : (v = t[8]);
  let y = !_,
    b = _ ? `border border-token-border` : `border-2 border-token-text-primary`,
    x;
  t[9] === b
    ? (x = t[10])
    : ((x = h(
        `cursor-interaction flex h-[72px] items-center justify-center rounded-xl px-4 text-base`,
        b,
      )),
      (t[9] = b),
      (t[10] = x));
  let S;
  t[11] !== _ || t[12] !== l || t[13] !== u
    ? ((S = () => {
        _ && (u(`custom`), l(``));
      }),
      (t[11] = _),
      (t[12] = l),
      (t[13] = u),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.amount.other`,
        defaultMessage: `Other`,
        description: `Option label for entering a custom reload amount`,
      })),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== y || t[17] !== x || t[18] !== S
    ? ((w = (0, J.jsx)(`button`, {
        type: `button`,
        "aria-pressed": y,
        className: x,
        onClick: S,
        children: C,
      })),
      (t[16] = y),
      (t[17] = x),
      (t[18] = S),
      (t[19] = w))
    : (w = t[19]);
  let T;
  t[20] !== v || t[21] !== w
    ? ((T = (0, J.jsxs)(`div`, { className: `grid grid-cols-4 gap-2`, children: [v, w] })),
      (t[20] = v),
      (t[21] = w),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== o ||
  t[24] !== n ||
  t[25] !== _ ||
  t[26] !== s ||
  t[27] !== f ||
  t[28] !== l ||
  t[29] !== d ||
  t[30] !== a ||
  t[31] !== r
    ? ((E = _
        ? null
        : (0, J.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, J.jsx)(`label`, {
                className: `text-sm text-token-text-primary`,
                children: (0, J.jsx)(m, {
                  id: `settings.usage.creditReload.amount.other`,
                  defaultMessage: `Other`,
                  description: `Option label for entering a custom reload amount`,
                }),
              }),
              (0, J.jsx)(Ce, {
                intl: n,
                value: r,
                pricingInfo: a,
                placeholder: ve({ intl: n, creditQuantity: s, pricingInfo: a }) ?? ``,
                hasError: o != null,
                ariaLabel: n.formatMessage({
                  id: `settings.usage.creditReload.amount.other.ariaLabel`,
                  defaultMessage: `Custom reload amount`,
                  description: `Accessible label for the custom reload amount input`,
                }),
                showCreditQuantity: !0,
                onInvalidCurrencyDraftChange: d,
                onBlur: f,
                onChange: l,
              }),
            ],
          })),
      (t[23] = o),
      (t[24] = n),
      (t[25] = _),
      (t[26] = s),
      (t[27] = f),
      (t[28] = l),
      (t[29] = d),
      (t[30] = a),
      (t[31] = r),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== o || t[34] !== s || t[35] !== c
    ? ((D =
        o == null ? null : (0, J.jsx)(we, { fieldError: o, minimumQuantity: s, quantityStep: c })),
      (t[33] = o),
      (t[34] = s),
      (t[35] = c),
      (t[36] = D))
    : (D = t[36]);
  let O;
  return (
    t[37] !== E || t[38] !== D || t[39] !== T
      ? ((O = (0, J.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [T, E, D] })),
        (t[37] = E),
        (t[38] = D),
        (t[39] = T),
        (t[40] = O))
      : (O = t[40]),
    O
  );
}
function Ce(e) {
  let t = (0, K.c)(39),
    {
      intl: n,
      value: r,
      pricingInfo: i,
      placeholder: a,
      hasError: o,
      ariaLabel: s,
      showCreditQuantity: c,
      onChange: l,
      onInvalidCurrencyDraftChange: u,
      onBlur: d,
    } = e,
    f = c === void 0 ? !1 : c,
    [p, g] = (0, q.useState)(null),
    _,
    v,
    y,
    b;
  if (t[0] !== p || t[1] !== n || t[2] !== i || t[3] !== f || t[4] !== r) {
    let e = f
      ? ve({ intl: n, creditQuantity: Number.parseInt(U(r), 10), pricingInfo: i })
      : G({ intl: n, creditQuantity: Number.parseInt(U(r), 10), pricingInfo: i });
    ((y = p ?? e ?? r),
      (v = f && y.length > 0 ? ye({ intl: n, pricingInfo: i }) : null),
      (_ = Ee({ intl: n, value: y, pricingInfo: i })),
      (b = Y({ intl: n, value: y, pricingInfo: i })),
      (t[0] = p),
      (t[1] = n),
      (t[2] = i),
      (t[3] = f),
      (t[4] = r),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b));
  } else ((_ = t[5]), (v = t[6]), (y = t[7]), (b = t[8]));
  let x = b,
    S = f && `pr-28`,
    C = v != null && (v.length > 1 ? `pl-11` : `pl-7`),
    w;
  t[9] !== S || t[10] !== C
    ? ((w = h(
        `bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-8 w-full rounded-xl border border-token-border px-3 text-left text-sm tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus`,
        S,
        C,
        `aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20`,
      )),
      (t[9] = S),
      (t[10] = C),
      (t[11] = w))
    : (w = t[11]);
  let T;
  t[12] !== _ || t[13] !== p || t[14] !== d || t[15] !== u
    ? ((T = () => {
        ((p == null || _ != null) && g(null), u?.(p != null && p.length > 0 && _ == null), d());
      }),
      (t[12] = _),
      (t[13] = p),
      (t[14] = d),
      (t[15] = u),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] !== n || t[18] !== l || t[19] !== u || t[20] !== i
    ? ((E = (e) => {
        let t = e.currentTarget.value;
        if (!De({ intl: n, value: t, pricingInfo: i })) return;
        g(t);
        let r = Ee({ intl: n, value: t, pricingInfo: i });
        (u?.(t.length > 0 && r == null), l(r ?? ``));
      }),
      (t[17] = n),
      (t[18] = l),
      (t[19] = u),
      (t[20] = i),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== s ||
  t[23] !== y ||
  t[24] !== o ||
  t[25] !== a ||
  t[26] !== w ||
  t[27] !== T ||
  t[28] !== E
    ? ((D = (0, J.jsx)(`input`, {
        value: y,
        placeholder: a,
        inputMode: `decimal`,
        "aria-label": s,
        "aria-invalid": o,
        className: w,
        onBlur: T,
        onChange: E,
      })),
      (t[22] = s),
      (t[23] = y),
      (t[24] = o),
      (t[25] = a),
      (t[26] = w),
      (t[27] = T),
      (t[28] = E),
      (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] === v
    ? (O = t[31])
    : ((O =
        v == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-token-text-secondary`,
              children: v,
            })),
      (t[30] = v),
      (t[31] = O));
  let k;
  t[32] !== x || t[33] !== f
    ? ((k =
        f && x != null
          ? (0, J.jsx)(`span`, {
              className: `pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-token-text-secondary`,
              children: (0, J.jsx)(m, {
                id: `settings.usage.creditReload.amount.credits`,
                defaultMessage: `{creditQuantity, number} credits`,
                description: `Credit count shown below a reload amount price`,
                values: { creditQuantity: x },
              }),
            })
          : null),
      (t[32] = x),
      (t[33] = f),
      (t[34] = k))
    : (k = t[34]);
  let A;
  return (
    t[35] !== k || t[36] !== D || t[37] !== O
      ? ((A = (0, J.jsxs)(`div`, { className: `relative`, children: [D, O, k] })),
        (t[35] = k),
        (t[36] = D),
        (t[37] = O),
        (t[38] = A))
      : (A = t[38]),
    A
  );
}
function we(e) {
  let t = (0, K.c)(24),
    { fieldError: n, minimumQuantity: r, quantityStep: i } = e,
    a = r === void 0 ? 125 : r,
    o = i === void 0 ? null : i;
  if (n == null) return null;
  let s;
  t[0] === n
    ? (s = t[1])
    : ((s =
        n === `missing`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.missing`,
              defaultMessage: `Enter an amount`,
              description: `Validation message when a credit reload amount is missing`,
            })
          : null),
      (t[0] = n),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c =
        n === `not-whole-number`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.wholeNumber`,
              defaultMessage: `Enter a whole number of credits`,
              description: `Validation message when a credit reload amount is not a whole number`,
            })
          : null),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === n
    ? (l = t[5])
    : ((l =
        n === `invalid-currency-amount`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.invalidCurrencyAmount`,
              defaultMessage: `Enter an amount that converts to a whole number of credits`,
              description: `Validation message when a typed currency amount does not convert to a whole number of credits`,
            })
          : null),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] !== n || t[7] !== a
    ? ((u =
        n === `below-minimum`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.minimum`,
              defaultMessage: `Enter at least {minimumQuantity, number} credits`,
              description: `Validation message when a credit reload amount is below the minimum`,
              values: { minimumQuantity: a },
            })
          : null),
      (t[6] = n),
      (t[7] = a),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== n || t[10] !== o
    ? ((d =
        n === `invalid-increment`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.increment`,
              defaultMessage: `Enter credits in increments of {quantityStep, number}`,
              description: `Validation message when a one-time reload amount is outside the allowed increment`,
              values: { quantityStep: o },
            })
          : null),
      (t[9] = n),
      (t[10] = o),
      (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] === n
    ? (f = t[13])
    : ((f =
        n === `monthly-limit-below-target`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.monthlyLimit`,
              defaultMessage: `Set the monthly limit high enough to cover one reload`,
              description: `Validation message when the monthly limit cannot cover one reload`,
            })
          : null),
      (t[12] = n),
      (t[13] = f));
  let p;
  t[14] === n
    ? (p = t[15])
    : ((p =
        n === `target-balance-below-minimum`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.error.targetBalance`,
              defaultMessage: `Set the target balance at least {minimumQuantity, number} credits above the minimum balance`,
              description: `Validation message when the auto reload target balance is not above the minimum balance`,
              values: { minimumQuantity: 125 },
            })
          : null),
      (t[14] = n),
      (t[15] = p));
  let h;
  return (
    t[16] !== s ||
    t[17] !== c ||
    t[18] !== l ||
    t[19] !== u ||
    t[20] !== d ||
    t[21] !== f ||
    t[22] !== p
      ? ((h = (0, J.jsxs)(`p`, {
          className: `text-sm text-token-error-foreground`,
          children: [s, c, l, u, d, f, p],
        })),
        (t[16] = s),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d),
        (t[21] = f),
        (t[22] = p),
        (t[23] = h))
      : (h = t[23]),
    h
  );
}
function Te(e) {
  let t = (0, K.c)(18),
    { creditQuantity: n, pricingInfo: r, isSelected: i, intl: a, onClick: o } = e,
    s;
  t[0] !== n || t[1] !== a || t[2] !== r
    ? ((s = G({ intl: a, creditQuantity: n, pricingInfo: r })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l = i ? `border-2 border-token-text-primary` : `border border-token-border`,
    u;
  t[4] === l
    ? (u = t[5])
    : ((u = h(
        `cursor-interaction flex h-[72px] flex-col items-center justify-center rounded-xl px-3 text-center`,
        l,
      )),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] === c
    ? (d = t[7])
    : ((d =
        c ??
        (0, J.jsx)(m, {
          id: `settings.usage.creditReload.amount.pending`,
          defaultMessage: `—`,
          description: `Placeholder shown while a reload amount price is loading`,
        })),
      (t[6] = c),
      (t[7] = d));
  let f;
  t[8] === d
    ? (f = t[9])
    : ((f = (0, J.jsx)(`span`, {
        className: `text-base font-medium text-token-text-primary`,
        children: d,
      })),
      (t[8] = d),
      (t[9] = f));
  let p;
  t[10] === n
    ? (p = t[11])
    : ((p = (0, J.jsx)(`span`, {
        className: `text-xs text-token-text-secondary`,
        children: (0, J.jsx)(m, {
          id: `settings.usage.creditReload.amount.credits`,
          defaultMessage: `{creditQuantity, number} credits`,
          description: `Credit count shown below a reload amount price`,
          values: { creditQuantity: n },
        }),
      })),
      (t[10] = n),
      (t[11] = p));
  let g;
  return (
    t[12] !== i || t[13] !== o || t[14] !== u || t[15] !== f || t[16] !== p
      ? ((g = (0, J.jsxs)(`button`, {
          type: `button`,
          "aria-pressed": i,
          className: u,
          onClick: o,
          children: [f, p],
        })),
        (t[12] = i),
        (t[13] = o),
        (t[14] = u),
        (t[15] = f),
        (t[16] = p),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function Ee({ intl: e, value: t, pricingInfo: n }) {
  let r = t.trim();
  if (r.length === 0) return ``;
  let { groupSeparator: i, decimalSeparator: a } = X({ intl: e, pricingInfo: n });
  return de({ value: r, pricingInfo: n, groupSeparator: i, decimalSeparator: a });
}
function Y({ intl: e, value: t, pricingInfo: n }) {
  let r = t.trim();
  if (r.length === 0) return null;
  let { groupSeparator: i, decimalSeparator: a } = X({ intl: e, pricingInfo: n });
  return fe({ value: r, pricingInfo: n, groupSeparator: i, decimalSeparator: a });
}
function X({ intl: e, pricingInfo: t }) {
  let n = e.formatters
    .getNumberFormat(e.locale, {
      style: `currency`,
      currency: t.currencyCode,
      minimumFractionDigits: t.minorUnitExponent ?? void 0,
      maximumFractionDigits: t.minorUnitExponent ?? void 0,
    })
    .formatToParts(12345.6);
  return {
    groupSeparator: n.find((e) => e.type === `group`)?.value ?? `,`,
    decimalSeparator: n.find((e) => e.type === `decimal`)?.value ?? `.`,
  };
}
function De({ intl: e, value: t, pricingInfo: n }) {
  let { groupSeparator: r, decimalSeparator: i } = X({ intl: e, pricingInfo: n }),
    a = ye({ intl: e, pricingInfo: n }),
    o = 0;
  for (let e of t)
    if (
      !(/^\d$/.test(e) || e === r || e.trim().length === 0 || (a != null && a.includes(e))) &&
      !(e === i && ((o += 1), o <= 1))
    )
      return !1;
  return !0;
}
function Oe(e) {
  let t = (0, K.c)(47),
    {
      intl: n,
      minimumBalance: r,
      monthlyLimit: i,
      pricingInfo: a,
      minimumBalanceError: o,
      monthlyLimitError: s,
      hasImmediateTopUpFailure: c,
      immediateTopUpFailureAmount: l,
      isManagePaymentPending: u,
      onMinimumBalanceChange: d,
      onInvalidMinimumBalanceCurrencyDraftChange: f,
      onMinimumBalanceBlur: p,
      onMonthlyLimitChange: g,
      onInvalidMonthlyLimitCurrencyDraftChange: _,
      onMonthlyLimitBlur: v,
      onOpenManagePayment: y,
    } = e,
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsx)(`label`, {
        className: `text-sm text-token-text-primary`,
        children: (0, J.jsx)(m, {
          id: `settings.usage.creditReload.minimumBalance`,
          defaultMessage: `Minimum balance`,
          description: `Label shown above the minimum balance input`,
        }),
      })),
      (t[0] = b))
    : (b = t[0]);
  let x = o != null,
    S;
  t[1] === n
    ? (S = t[2])
    : ((S = n.formatMessage({
        id: `settings.usage.creditReload.minimumBalance.ariaLabel`,
        defaultMessage: `Minimum balance`,
        description: `Accessible label for the minimum balance input`,
      })),
      (t[1] = n),
      (t[2] = S));
  let C;
  t[3] !== n ||
  t[4] !== r ||
  t[5] !== f ||
  t[6] !== p ||
  t[7] !== d ||
  t[8] !== a ||
  t[9] !== x ||
  t[10] !== S
    ? ((C = (0, J.jsx)(Ce, {
        intl: n,
        value: r,
        pricingInfo: a,
        placeholder: ``,
        hasError: x,
        ariaLabel: S,
        onInvalidCurrencyDraftChange: f,
        onBlur: p,
        onChange: d,
      })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = f),
      (t[6] = p),
      (t[7] = d),
      (t[8] = a),
      (t[9] = x),
      (t[10] = S),
      (t[11] = C))
    : (C = t[11]);
  let w;
  t[12] === o
    ? (w = t[13])
    : ((w = o == null ? null : (0, J.jsx)(we, { fieldError: o })), (t[12] = o), (t[13] = w));
  let T;
  t[14] !== C || t[15] !== w
    ? ((T = (0, J.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [b, C, w] })),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.spendLimit`,
        defaultMessage: `Maximum monthly spend`,
        description: `Label shown above the monthly reload spend limit`,
      })),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, J.jsxs)(`label`, {
        className: `flex items-center gap-1 text-sm text-token-text-primary`,
        children: [
          E,
          (0, J.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: (0, J.jsx)(m, {
              id: `settings.usage.creditReload.spendLimit.optional`,
              defaultMessage: `(Optional)`,
              description: `Helper label marking the monthly reload spend limit as optional`,
            }),
          }),
        ],
      })),
      (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] === n
    ? (O = t[20])
    : ((O = n.formatMessage({
        id: `settings.usage.creditReload.spendLimit.placeholder`,
        defaultMessage: `No limit`,
        description: `Placeholder shown when no monthly reload spend limit is set`,
      })),
      (t[19] = n),
      (t[20] = O));
  let k = s != null,
    A;
  t[21] === n
    ? (A = t[22])
    : ((A = n.formatMessage({
        id: `settings.usage.creditReload.spendLimit.ariaLabel`,
        defaultMessage: `Monthly reload spend limit`,
        description: `Accessible label for the monthly reload spend limit input`,
      })),
      (t[21] = n),
      (t[22] = A));
  let j;
  t[23] !== n ||
  t[24] !== i ||
  t[25] !== _ ||
  t[26] !== v ||
  t[27] !== g ||
  t[28] !== a ||
  t[29] !== k ||
  t[30] !== A ||
  t[31] !== O
    ? ((j = (0, J.jsx)(Ce, {
        intl: n,
        value: i,
        pricingInfo: a,
        placeholder: O,
        hasError: k,
        ariaLabel: A,
        showCreditQuantity: !0,
        onInvalidCurrencyDraftChange: _,
        onBlur: v,
        onChange: g,
      })),
      (t[23] = n),
      (t[24] = i),
      (t[25] = _),
      (t[26] = v),
      (t[27] = g),
      (t[28] = a),
      (t[29] = k),
      (t[30] = A),
      (t[31] = O),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] === s
    ? (M = t[34])
    : ((M = s == null ? null : (0, J.jsx)(we, { fieldError: s })), (t[33] = s), (t[34] = M));
  let N;
  t[35] !== j || t[36] !== M
    ? ((N = (0, J.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [D, j, M] })),
      (t[35] = j),
      (t[36] = M),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] !== c || t[39] !== l || t[40] !== u || t[41] !== y
    ? ((P = c
        ? (0, J.jsx)(`div`, {
            className: `rounded-2xl border border-token-error-foreground/20 bg-token-input-validation-error-background/20 px-4 py-3 text-sm leading-5 text-token-text-primary`,
            children:
              l == null
                ? (0, J.jsx)(m, {
                    id: `settings.usage.creditReload.immediateTopUpFailure.generic`,
                    defaultMessage: `The initial reload failed. <managePayment>Update your payment method</managePayment>`,
                    description: `Inline error shown when the initial auto reload purchase fails`,
                    values: {
                      managePayment: (e) =>
                        (0, J.jsx)(`button`, {
                          type: `button`,
                          className: h(
                            `cursor-interaction font-medium underline underline-offset-2`,
                            u && `pointer-events-none opacity-60`,
                          ),
                          disabled: u,
                          onClick: y,
                          children: e,
                        }),
                    },
                  })
                : (0, J.jsx)(m, {
                    id: `settings.usage.creditReload.immediateTopUpFailure.amount`,
                    defaultMessage: `The initial reload for an estimated {amount} failed. <managePayment>Update your payment method</managePayment>`,
                    description: `Inline error shown when the initial auto reload purchase fails with a price estimate`,
                    values: {
                      amount: l,
                      managePayment: (e) =>
                        (0, J.jsx)(`button`, {
                          type: `button`,
                          className: h(
                            `cursor-interaction font-medium underline underline-offset-2`,
                            u && `pointer-events-none opacity-60`,
                          ),
                          disabled: u,
                          onClick: y,
                          children: e,
                        }),
                    },
                  }),
          })
        : null),
      (t[38] = c),
      (t[39] = l),
      (t[40] = u),
      (t[41] = y),
      (t[42] = P))
    : (P = t[42]);
  let F;
  return (
    t[43] !== N || t[44] !== P || t[45] !== T
      ? ((F = (0, J.jsxs)(J.Fragment, { children: [T, N, P] })),
        (t[43] = N),
        (t[44] = P),
        (t[45] = T),
        (t[46] = F))
      : (F = t[46]),
    F
  );
}
var ke = { duration: 3 },
  Ae = `https://help.openai.com/en/articles/20001106-codex-rate-card`,
  je = `min-w-[88px] justify-center`;
function Me(e) {
  let t = (0, K.c)(39),
    { source: n, creditDetails: i, pricingInfo: o, onOpenChange: s, dialogDescriptionId: c } = e,
    l = r(a),
    { email: u } = M(),
    d = S(),
    f = p(),
    [h, _] = (0, q.useState)(String(re[0])),
    [v, y] = (0, q.useState)(`preset`),
    [b, x] = (0, q.useState)(!1),
    [C, w] = (0, q.useState)(!1),
    T;
  t[0] !== C || t[1] !== o || t[2] !== h
    ? ((T = C ? `invalid-currency-amount` : ue({ value: h, pricingInfo: o })),
      (t[0] = C),
      (t[1] = o),
      (t[2] = h),
      (t[3] = T))
    : (T = t[3]);
  let D = T,
    O;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.oneTimePurchase.title`,
        defaultMessage: `One time credit purchase`,
        description: `Title for the one time credit purchase modal`,
      })),
      (t[4] = O))
    : (O = t[4]);
  let k = O,
    A;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.oneTimePurchase.description`,
        defaultMessage: `Purchase credits so you can continue using Codex if your usage runs out. <link>View rate card</link>`,
        description: `Description for the one time credit purchase modal`,
        values: { link: Ne },
      })),
      (t[5] = A))
    : (A = t[5]);
  let N = A,
    P;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.oneTimePurchase.screenReaderDescription`,
        defaultMessage: `Purchase credits so you can continue using Codex if your usage runs out. View rate card`,
        description: `Screen reader description for the one time credit purchase modal`,
      })),
      (t[6] = P))
    : (P = t[6]);
  let F = P,
    ee = D != null,
    I;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.continueToCheckout`,
        defaultMessage: `Continue to checkout`,
        description: `Button label to open checkout from a credit purchase modal`,
      })),
      (t[7] = I))
    : (I = t[7]);
  let L;
  t[8] === ee
    ? (L = t[9])
    : ((L = (0, J.jsx)(j, {
        className: `w-auto`,
        children: (0, J.jsx)(g, {
          color: `primary`,
          type: `submit`,
          className: je,
          disabled: ee,
          children: I,
        }),
      })),
      (t[8] = ee),
      (t[9] = L));
  let te;
  t[10] !== i || t[11] !== f || t[12] !== o || t[13] !== L
    ? ((te = (0, J.jsx)(He, { intl: f, creditDetails: i, pricingInfo: o, actions: L })),
      (t[10] = i),
      (t[11] = f),
      (t[12] = o),
      (t[13] = L),
      (t[14] = te))
    : (te = t[14]);
  let ne;
  t[15] !== u ||
  t[16] !== s ||
  t[17] !== h ||
  t[18] !== D ||
  t[19] !== l ||
  t[20] !== n ||
  t[21] !== d
    ? ((ne = () => {
        (x(!0),
          D ??
            We({ scope: l, source: n, email: u, quantity: h, onOpenChange: s, statsigClient: d }));
      }),
      (t[15] = u),
      (t[16] = s),
      (t[17] = h),
      (t[18] = D),
      (t[19] = l),
      (t[20] = n),
      (t[21] = d),
      (t[22] = ne))
    : (ne = t[22]);
  let R = b ? D : null,
    z;
  t[23] === o ? (z = t[24]) : ((z = le(o)), (t[23] = o), (t[24] = z));
  let B;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (w(!1), y(e));
      }),
      (t[25] = B))
    : (B = t[25]);
  let V;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => {
        x(!0);
      }),
      (t[26] = V))
    : (V = t[26]);
  let H;
  t[27] !== v || t[28] !== f || t[29] !== o || t[30] !== h || t[31] !== R || t[32] !== z
    ? ((H = (0, J.jsx)(E, {
        className: `gap-3 pt-4`,
        children: (0, J.jsx)(Se, {
          intl: f,
          value: h,
          selection: v,
          pricingInfo: o,
          error: R,
          minimumQuantity: z,
          quantityStep: 250,
          onChange: _,
          onSelectionChange: B,
          onInvalidCurrencyDraftChange: w,
          onBlur: V,
        }),
      })),
      (t[27] = v),
      (t[28] = f),
      (t[29] = o),
      (t[30] = h),
      (t[31] = R),
      (t[32] = z),
      (t[33] = H))
    : (H = t[33]);
  let ie;
  return (
    t[34] !== c || t[35] !== H || t[36] !== te || t[37] !== ne
      ? ((ie = (0, J.jsx)(qe, {
          dialogDescriptionId: c,
          screenReaderTitle: k,
          screenReaderDescription: F,
          headerTitle: k,
          headerSubtitle: N,
          footer: te,
          onSubmit: ne,
          children: H,
        })),
        (t[34] = c),
        (t[35] = H),
        (t[36] = te),
        (t[37] = ne),
        (t[38] = ie))
      : (ie = t[38]),
    ie
  );
}
function Ne(e) {
  return (0, J.jsx)(Ve, { children: e });
}
function Pe(e) {
  let t = (0, K.c)(150),
    {
      source: n,
      variant: i,
      serverState: o,
      creditDetails: s,
      pricingInfo: c,
      enableAutoTopUpMutation: l,
      updateAutoTopUpMutation: d,
      disableAutoTopUpMutation: f,
      onOpenChange: h,
      dialogDescriptionId: g,
    } = e,
    v = r(a),
    { email: y } = M(),
    C = S(),
    w = p(),
    T;
  t[0] === o ? (T = t[1]) : ((T = ie(o)), (t[0] = o), (t[1] = T));
  let D = T,
    [O, k] = (0, q.useState)(D),
    [A, j] = (0, q.useState)(Ke(D) ? `preset` : `custom`),
    N;
  t[2] === o ? (N = t[3]) : ((N = ae(o)), (t[2] = o), (t[3] = N));
  let [F, ee] = (0, q.useState)(N),
    I;
  t[4] === o ? (I = t[5]) : ((I = () => oe(o)), (t[4] = o), (t[5] = I));
  let [L, ne] = (0, q.useState)(I),
    [R, z] = (0, q.useState)(!0),
    [B, V] = (0, q.useState)(!1),
    [re, H] = (0, q.useState)(!1),
    [de, fe] = (0, q.useState)(!1),
    [U, W] = (0, q.useState)(!1),
    [ge, _e] = (0, q.useState)(!1),
    [ve, ye] = (0, q.useState)(!1),
    [G, xe] = (0, q.useState)(!1),
    [Ce, we] = (0, q.useState)(null),
    Te = l.isPending || d.isPending,
    Ee = f.isPending,
    Y = Te || Ee,
    X = i === `add-credits` && !R,
    De;
  t[6] !== U || t[7] !== X || t[8] !== F || t[9] !== c || t[10] !== O
    ? ((De = U
        ? `invalid-currency-amount`
        : X
          ? ue({ value: O, pricingInfo: c })
          : ce({ minimumBalance: F, targetBalance: O })),
      (t[6] = U),
      (t[7] = X),
      (t[8] = F),
      (t[9] = c),
      (t[10] = O),
      (t[11] = De))
    : (De = t[11]);
  let Ae = De,
    je;
  t[12] !== ge || t[13] !== F
    ? ((je = ge ? `invalid-currency-amount` : se(F)), (t[12] = ge), (t[13] = F), (t[14] = je))
    : (je = t[14]);
  let Me = je,
    Ne;
  t[15] !== ve || t[16] !== L || t[17] !== O
    ? ((Ne = ve ? `invalid-currency-amount` : pe({ monthlyLimit: L, targetBalance: O })),
      (t[15] = ve),
      (t[16] = L),
      (t[17] = O),
      (t[18] = Ne))
    : (Ne = t[18]);
  let Pe = Ne,
    Z,
    Ve;
  t[19] !== ge || t[20] !== ve || t[21] !== F || t[22] !== L || t[23] !== o || t[24] !== O
    ? ((Z = ge || ve ? null : me({ minimumBalance: F, targetBalance: O, monthlyLimit: L })),
      (Ve = he({ isEnabled: !0, serverState: o, savePayload: Z })),
      (t[19] = ge),
      (t[20] = ve),
      (t[21] = F),
      (t[22] = L),
      (t[23] = o),
      (t[24] = O),
      (t[25] = Z),
      (t[26] = Ve))
    : ((Z = t[25]), (Ve = t[26]));
  let Q = Ve,
    Ue = Y || (X ? Ae != null : Q == null),
    $ = Y || Q == null,
    Je;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = () => {
        (xe(!1), we(null));
      }),
      (t[27] = Je))
    : (Je = t[27]);
  let Ye = Je,
    Xe;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = [`usage-settings`, `credit-reload`, `manage-payment`]), (t[28] = Xe))
    : (Xe = t[28]);
  let Ze;
  t[29] !== w || t[30] !== v
    ? ((Ze = {
        mutationKey: Xe,
        mutationFn: Le,
        onSuccess: Ie,
        onError: () => {
          v.get(_).danger(
            w.formatMessage({
              id: `settings.usage.creditReload.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again`,
              description: `Error shown when opening the manage payment flow from the combined reload dialog fails`,
            }),
            ke,
          );
        },
      }),
      (t[29] = w),
      (t[30] = v),
      (t[31] = Ze))
    : (Ze = t[31]);
  let Qe = u(Ze),
    $e;
  t[32] !== s ||
  t[33] !== y ||
  t[34] !== l ||
  t[35] !== w ||
  t[36] !== Y ||
  t[37] !== X ||
  t[38] !== h ||
  t[39] !== c ||
  t[40] !== Q ||
  t[41] !== Z ||
  t[42] !== v ||
  t[43] !== n ||
  t[44] !== C ||
  t[45] !== O ||
  t[46] !== Ae ||
  t[47] !== d
    ? (($e = async () => {
        if ((V(!0), X)) {
          Ae ??
            We({ scope: v, source: n, email: y, quantity: O, onOpenChange: h, statsigClient: C });
          return;
        }
        if ((H(!0), fe(!0), !(Q == null || Y)))
          try {
            if ((Ye(), Z == null)) return;
            let e = Q === `enable` ? await l.mutateAsync(Z) : await d.mutateAsync(Z);
            if ((x(v, b, { action: Q, source: n }), P(e.immediate_top_up_status))) {
              (xe(!0),
                we(
                  be({
                    intl: w,
                    creditBalance: s?.balance,
                    rechargeTarget: Z.recharge_target,
                    pricingInfo: c,
                  }),
                ));
              return;
            }
            (Ge({ scope: v, intl: w, intent: Q, kind: `success` }), h(!1));
          } catch {
            Ge({ scope: v, intl: w, intent: Q, kind: `danger` });
          }
      }),
      (t[32] = s),
      (t[33] = y),
      (t[34] = l),
      (t[35] = w),
      (t[36] = Y),
      (t[37] = X),
      (t[38] = h),
      (t[39] = c),
      (t[40] = Q),
      (t[41] = Z),
      (t[42] = v),
      (t[43] = n),
      (t[44] = C),
      (t[45] = O),
      (t[46] = Ae),
      (t[47] = d),
      (t[48] = $e))
    : ($e = t[48]);
  let et = $e,
    tt;
  t[49] !== f || t[50] !== w || t[51] !== h || t[52] !== v || t[53] !== n
    ? ((tt = async () => {
        try {
          (await f.mutateAsync(),
            x(v, b, { action: `disable`, source: n }),
            Ge({ scope: v, intl: w, intent: `disable`, kind: `success` }),
            h(!1));
        } catch {
          Ge({ scope: v, intl: w, intent: `disable`, kind: `danger` });
        }
      }),
      (t[49] = f),
      (t[50] = w),
      (t[51] = h),
      (t[52] = v),
      (t[53] = n),
      (t[54] = tt))
    : (tt = t[54]);
  let nt = tt,
    rt,
    it,
    at;
  bb0: switch (i) {
    case `add-credits`: {
      let e;
      (t[55] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(m, {
            id: `settings.usage.creditReload.addCredits.title`,
            defaultMessage: `Add credits`,
            description: `Title for the add credits modal`,
          })),
          (t[55] = e))
        : (e = t[55]),
        (rt = e));
      let n;
      (t[56] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, J.jsx)(m, {
            id: `settings.usage.creditReload.addCredits.description`,
            defaultMessage: `Credits power Codex. Valid for 12 months. <link>View rate card</link>`,
            description: `Description for the add credits modal`,
            values: { link: Fe },
          })),
          (t[56] = n))
        : (n = t[56]),
        (it = n));
      let r;
      (t[57] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, J.jsx)(m, {
            id: `settings.usage.creditReload.addCredits.screenReaderDescription`,
            defaultMessage: `Credits power Codex. Valid for 12 months. View rate card`,
            description: `Screen reader description for the add credits modal`,
          })),
          (t[57] = r))
        : (r = t[57]),
        (at = r));
      break bb0;
    }
    case `setup-auto-reload`: {
      let e;
      (t[58] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(m, {
            id: `settings.usage.creditReload.autoReload.setup.title`,
            defaultMessage: `Set up auto-reload`,
            description: `Title for the auto reload setup modal`,
          })),
          (t[58] = e))
        : (e = t[58]),
        (rt = e));
      let n;
      (t[59] !== w || t[60] !== F || t[61] !== L || t[62] !== c || t[63] !== O
        ? ((n = (0, J.jsx)(Be, {
            intl: w,
            targetBalance: O,
            minimumBalance: F,
            monthlyLimit: L,
            pricingInfo: c,
          })),
          (t[59] = w),
          (t[60] = F),
          (t[61] = L),
          (t[62] = c),
          (t[63] = O),
          (t[64] = n))
        : (n = t[64]),
        (it = n));
      let r;
      (t[65] !== w || t[66] !== F || t[67] !== L || t[68] !== c || t[69] !== O
        ? ((r = (0, J.jsx)(Be, {
            intl: w,
            targetBalance: O,
            minimumBalance: F,
            monthlyLimit: L,
            pricingInfo: c,
            rateCardLinkMode: `text`,
          })),
          (t[65] = w),
          (t[66] = F),
          (t[67] = L),
          (t[68] = c),
          (t[69] = O),
          (t[70] = r))
        : (r = t[70]),
        (at = r));
      break bb0;
    }
    case `manage-auto-reload`: {
      let e;
      (t[71] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(m, {
            id: `settings.usage.creditReload.autoReload.manage.title`,
            defaultMessage: `Manage auto-reload`,
            description: `Title for the auto reload management modal`,
          })),
          (t[71] = e))
        : (e = t[71]),
        (rt = e));
      let n;
      (t[72] !== w || t[73] !== F || t[74] !== L || t[75] !== c || t[76] !== O
        ? ((n = (0, J.jsx)(Be, {
            intl: w,
            targetBalance: O,
            minimumBalance: F,
            monthlyLimit: L,
            pricingInfo: c,
          })),
          (t[72] = w),
          (t[73] = F),
          (t[74] = L),
          (t[75] = c),
          (t[76] = O),
          (t[77] = n))
        : (n = t[77]),
        (it = n));
      let r;
      (t[78] !== w || t[79] !== F || t[80] !== L || t[81] !== c || t[82] !== O
        ? ((r = (0, J.jsx)(Be, {
            intl: w,
            targetBalance: O,
            minimumBalance: F,
            monthlyLimit: L,
            pricingInfo: c,
            rateCardLinkMode: `text`,
          })),
          (t[78] = w),
          (t[79] = F),
          (t[80] = L),
          (t[81] = c),
          (t[82] = O),
          (t[83] = r))
        : (r = t[83]),
        (at = r));
    }
  }
  let ot;
  t[84] === nt
    ? (ot = t[85])
    : ((ot = () => {
        nt();
      }),
      (t[84] = nt),
      (t[85] = ot));
  let st;
  t[86] !== Y ||
  t[87] !== Ue ||
  t[88] !== $ ||
  t[89] !== Ee ||
  t[90] !== X ||
  t[91] !== Te ||
  t[92] !== ot ||
  t[93] !== i
    ? ((st = (0, J.jsx)(Re, {
        variant: i,
        isOneTimeAddCreditsPurchase: X,
        isSavePending: Te,
        isDisablePending: Ee,
        isActionPending: Y,
        isAddCreditsSubmitDisabled: Ue,
        isAutoReloadSettingsSubmitDisabled: $,
        onTurnOff: ot,
      })),
      (t[86] = Y),
      (t[87] = Ue),
      (t[88] = $),
      (t[89] = Ee),
      (t[90] = X),
      (t[91] = Te),
      (t[92] = ot),
      (t[93] = i),
      (t[94] = st))
    : (st = t[94]);
  let ct;
  t[95] !== s || t[96] !== w || t[97] !== c || t[98] !== st
    ? ((ct = (0, J.jsx)(He, { intl: w, creditDetails: s, pricingInfo: c, actions: st })),
      (t[95] = s),
      (t[96] = w),
      (t[97] = c),
      (t[98] = st),
      (t[99] = ct))
    : (ct = t[99]);
  let lt;
  t[100] === et
    ? (lt = t[101])
    : ((lt = () => {
        et();
      }),
      (t[100] = et),
      (t[101] = lt));
  let ut = B ? Ae : null,
    dt;
  t[102] !== X || t[103] !== c
    ? ((dt = X ? le(c) : 125), (t[102] = X), (t[103] = c), (t[104] = dt))
    : (dt = t[104]);
  let ft = X ? 250 : null,
    pt,
    mt;
  t[105] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (e) => {
        (Ye(), k(e));
      }),
      (mt = (e) => {
        (W(!1), j(e));
      }),
      (t[105] = pt),
      (t[106] = mt))
    : ((pt = t[105]), (mt = t[106]));
  let ht;
  t[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = () => {
        V(!0);
      }),
      (t[107] = ht))
    : (ht = t[107]);
  let gt;
  t[108] !== A ||
  t[109] !== w ||
  t[110] !== c ||
  t[111] !== ut ||
  t[112] !== dt ||
  t[113] !== ft ||
  t[114] !== O
    ? ((gt = (0, J.jsx)(Se, {
        intl: w,
        value: O,
        selection: A,
        pricingInfo: c,
        error: ut,
        minimumQuantity: dt,
        quantityStep: ft,
        onChange: pt,
        onSelectionChange: mt,
        onInvalidCurrencyDraftChange: W,
        onBlur: ht,
      })),
      (t[108] = A),
      (t[109] = w),
      (t[110] = c),
      (t[111] = ut),
      (t[112] = dt),
      (t[113] = ft),
      (t[114] = O),
      (t[115] = gt))
    : (gt = t[115]);
  let _t;
  t[116] !== w ||
  t[117] !== Y ||
  t[118] !== R ||
  t[119] !== F ||
  t[120] !== L ||
  t[121] !== c ||
  t[122] !== O ||
  t[123] !== i
    ? ((_t =
        i === `add-credits`
          ? (0, J.jsxs)(`div`, {
              className: `relative flex min-w-0 items-center gap-3`,
              children: [
                (0, J.jsx)(te, {
                  id: `credit-reload-add-credits-auto-reload`,
                  className: `!border-token-text-primary data-[state=checked]:!border-token-text-primary data-[state=checked]:!bg-token-text-primary data-[state=checked]:!text-token-main-surface-primary`,
                  checked: R,
                  disabled: Y,
                  onCheckedChange: (e) => {
                    (Ye(), z(e));
                  },
                }),
                (0, J.jsxs)(`div`, {
                  className: `flex min-w-0 flex-col gap-0.5`,
                  children: [
                    (0, J.jsx)(`label`, {
                      htmlFor: `credit-reload-add-credits-auto-reload`,
                      className: `cursor-interaction text-sm font-medium text-token-text-primary`,
                      children: (0, J.jsx)(m, {
                        id: `settings.usage.creditReload.autoReload.checkbox`,
                        defaultMessage: `Auto-reload`,
                        description: `Checkbox label for adding auto reload while buying credits`,
                      }),
                    }),
                    R
                      ? (0, J.jsx)(ze, {
                          intl: w,
                          targetBalance: O,
                          minimumBalance: F,
                          monthlyLimit: L,
                          pricingInfo: c,
                        })
                      : (0, J.jsx)(`p`, {
                          className: `text-sm leading-5 text-token-text-secondary`,
                          children: (0, J.jsx)(m, {
                            id: `settings.usage.creditReload.autoReload.checkboxDescription`,
                            defaultMessage: `Automatically add credits when your balance runs low`,
                            description: `Description for the optional auto reload checkbox in the add credits modal`,
                          }),
                        }),
                  ],
                }),
              ],
            })
          : null),
      (t[116] = w),
      (t[117] = Y),
      (t[118] = R),
      (t[119] = F),
      (t[120] = L),
      (t[121] = c),
      (t[122] = O),
      (t[123] = i),
      (t[124] = _t))
    : (_t = t[124]);
  let vt;
  t[125] !== G ||
  t[126] !== Ce ||
  t[127] !== w ||
  t[128] !== X ||
  t[129] !== F ||
  t[130] !== Me ||
  t[131] !== L ||
  t[132] !== Pe ||
  t[133] !== Qe ||
  t[134] !== c ||
  t[135] !== re ||
  t[136] !== de
    ? ((vt = X
        ? null
        : (0, J.jsx)(Oe, {
            intl: w,
            minimumBalance: F,
            monthlyLimit: L,
            pricingInfo: c,
            minimumBalanceError: re ? Me : null,
            monthlyLimitError: de ? Pe : null,
            hasImmediateTopUpFailure: G,
            immediateTopUpFailureAmount: Ce,
            isManagePaymentPending: Qe.isPending,
            onMinimumBalanceChange: (e) => {
              (Ye(), ee(e));
            },
            onInvalidMinimumBalanceCurrencyDraftChange: _e,
            onMinimumBalanceBlur: () => {
              (H(!0), V(!0));
            },
            onMonthlyLimitChange: (e) => {
              (Ye(), ne(e));
            },
            onInvalidMonthlyLimitCurrencyDraftChange: ye,
            onMonthlyLimitBlur: () => {
              fe(!0);
            },
            onOpenManagePayment: () => {
              Qe.mutate();
            },
          })),
      (t[125] = G),
      (t[126] = Ce),
      (t[127] = w),
      (t[128] = X),
      (t[129] = F),
      (t[130] = Me),
      (t[131] = L),
      (t[132] = Pe),
      (t[133] = Qe),
      (t[134] = c),
      (t[135] = re),
      (t[136] = de),
      (t[137] = vt))
    : (vt = t[137]);
  let yt;
  t[138] !== gt || t[139] !== _t || t[140] !== vt
    ? ((yt = (0, J.jsxs)(E, { className: `gap-4 pt-4`, children: [gt, _t, vt] })),
      (t[138] = gt),
      (t[139] = _t),
      (t[140] = vt),
      (t[141] = yt))
    : (yt = t[141]);
  let bt;
  return (
    t[142] !== it ||
    t[143] !== g ||
    t[144] !== at ||
    t[145] !== ct ||
    t[146] !== lt ||
    t[147] !== yt ||
    t[148] !== rt
      ? ((bt = (0, J.jsx)(qe, {
          dialogDescriptionId: g,
          screenReaderTitle: rt,
          screenReaderDescription: at,
          headerTitle: rt,
          headerSubtitle: it,
          footer: ct,
          onSubmit: lt,
          children: yt,
        })),
        (t[142] = it),
        (t[143] = g),
        (t[144] = at),
        (t[145] = ct),
        (t[146] = lt),
        (t[147] = yt),
        (t[148] = rt),
        (t[149] = bt))
      : (bt = t[149]),
    bt
  );
}
function Fe(e) {
  return (0, J.jsx)(Ve, { children: e });
}
function Ie(e) {
  d.dispatchMessage(`open-in-browser`, { url: e.url });
}
async function Le() {
  return await w.safeGet(`/payments/customer_portal`);
}
function Re(e) {
  let t = (0, K.c)(18),
    {
      variant: n,
      isOneTimeAddCreditsPurchase: r,
      isSavePending: i,
      isDisablePending: a,
      isActionPending: o,
      isAddCreditsSubmitDisabled: s,
      isAutoReloadSettingsSubmitDisabled: c,
      onTurnOff: l,
    } = e;
  if (n === `add-credits`) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = r
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.continueToCheckout`,
              defaultMessage: `Continue to checkout`,
              description: `Button label to open checkout from a credit purchase modal`,
            })
          : (0, J.jsx)(m, {
              id: `settings.usage.creditReload.autoReload.enable`,
              defaultMessage: `Enable auto-reload`,
              description: `Button label to enable automatic reload from the add credits modal`,
            })),
        (t[0] = r),
        (t[1] = e));
    let n;
    return (
      t[2] !== s || t[3] !== i || t[4] !== e
        ? ((n = (0, J.jsx)(j, {
            className: `w-auto`,
            children: (0, J.jsx)(g, {
              color: `primary`,
              type: `submit`,
              className: je,
              loading: i,
              disabled: s,
              children: e,
            }),
          })),
          (t[2] = s),
          (t[3] = i),
          (t[4] = e),
          (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let u;
  t[6] !== o || t[7] !== a || t[8] !== l || t[9] !== n
    ? ((u =
        n === `manage-auto-reload`
          ? (0, J.jsx)(g, {
              color: `outline`,
              loading: a,
              disabled: o,
              onClick: l,
              children: (0, J.jsx)(m, {
                id: `settings.usage.creditReload.autoReload.turnOff`,
                defaultMessage: `Turn off`,
                description: `Button label to turn off auto reload`,
              }),
            })
          : null),
      (t[6] = o),
      (t[7] = a),
      (t[8] = l),
      (t[9] = n),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.autoReload.save`,
        defaultMessage: `Save`,
        description: `Button label to save automatic reload settings`,
      })),
      (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] !== c || t[13] !== i
    ? ((f = (0, J.jsx)(g, {
        color: `primary`,
        type: `submit`,
        className: je,
        loading: i,
        disabled: c,
        children: d,
      })),
      (t[12] = c),
      (t[13] = i),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== u || t[16] !== f
      ? ((p = (0, J.jsxs)(j, { className: `w-auto`, children: [u, f] })),
        (t[15] = u),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function ze(e) {
  let t = (0, K.c)(16),
    { intl: n, targetBalance: r, minimumBalance: i, monthlyLimit: a, pricingInfo: o } = e,
    s;
  t[0] !== n || t[1] !== i || t[2] !== o
    ? ((s = G({ intl: n, creditQuantity: Number.parseInt(U(i), 10), pricingInfo: o })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  t[4] !== n || t[5] !== o || t[6] !== r
    ? ((l = G({ intl: n, creditQuantity: Number.parseInt(U(r), 10), pricingInfo: o })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = r),
      (t[7] = l))
    : (l = t[7]);
  let u = l,
    d;
  t[8] !== n || t[9] !== a || t[10] !== o
    ? ((d = G({ intl: n, creditQuantity: Number.parseInt(U(a), 10), pricingInfo: o })),
      (t[8] = n),
      (t[9] = a),
      (t[10] = o),
      (t[11] = d))
    : (d = t[11]);
  let f = d,
    p;
  return (
    t[12] !== f || t[13] !== u || t[14] !== c
      ? ((p = (0, J.jsx)(`p`, {
          className: `text-sm leading-5 text-token-text-secondary`,
          children:
            c == null || u == null
              ? (0, J.jsx)(m, {
                  id: `settings.usage.creditReload.autoReload.description.pending`,
                  defaultMessage: `If your balance falls below the minimum, Codex will automatically reload your credits`,
                  description: `Fallback description shown while pricing is loading`,
                })
              : f == null
                ? (0, J.jsx)(m, {
                    id: `settings.usage.creditReload.autoReload.description.noLimit`,
                    defaultMessage: `When my balance hits {thresholdAmount}, top up to {targetAmount}, with no monthly maximum`,
                    description: `Description explaining how automatic reload works without a monthly limit`,
                    values: { thresholdAmount: c, targetAmount: u },
                  })
                : (0, J.jsx)(m, {
                    id: `settings.usage.creditReload.autoReload.description`,
                    defaultMessage: `When my balance hits {thresholdAmount}, top up to {targetAmount}, up to {monthlyLimitAmount} per month`,
                    description: `Description explaining how automatic reload works`,
                    values: { thresholdAmount: c, targetAmount: u, monthlyLimitAmount: f },
                  }),
        })),
        (t[12] = f),
        (t[13] = u),
        (t[14] = c),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function Be(e) {
  let t = (0, K.c)(11),
    {
      intl: n,
      targetBalance: r,
      minimumBalance: i,
      monthlyLimit: a,
      pricingInfo: o,
      rateCardLinkMode: s,
    } = e,
    c = s === void 0 ? `button` : s,
    l;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== o || t[4] !== r
    ? ((l = (0, J.jsx)(ze, {
        intl: n,
        targetBalance: r,
        minimumBalance: i,
        monthlyLimit: a,
        pricingInfo: o,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === c
    ? (u = t[7])
    : ((u = c === `button` ? (0, J.jsx)(Ve, { children: (0, J.jsx)(Z, {}) }) : (0, J.jsx)(Z, {})),
      (t[6] = c),
      (t[7] = u));
  let d;
  return (
    t[8] !== l || t[9] !== u
      ? ((d = (0, J.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [l, u] })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Z() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(m, {
          id: `settings.usage.creditReload.viewRateCard`,
          defaultMessage: `View rate card`,
          description: `Button label to view the Codex credit rate card`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ve(e) {
  let t = (0, K.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, J.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-left text-token-link`,
          onClick: Q,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Q() {
  d.dispatchMessage(`open-in-browser`, { url: Ae });
}
function He(e) {
  let t = (0, K.c)(12),
    { intl: n, creditDetails: r, pricingInfo: i, actions: a } = e,
    o;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((o = Ue({ intl: n, creditDetails: r, pricingInfo: i })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] !== r?.unlimited || t[5] !== s
    ? ((c = (0, J.jsx)(`span`, {
        className: `text-xs text-token-text-secondary`,
        children: r?.unlimited
          ? (0, J.jsx)(m, {
              id: `settings.usage.credit.remaining.unlimited`,
              defaultMessage: `Unlimited credit`,
              description: `Title shown when the account has unlimited credit`,
            })
          : s == null
            ? (0, J.jsx)(m, {
                id: `settings.usage.creditReload.currentBalance.unavailable`,
                defaultMessage: `Current balance unavailable`,
                description: `Fallback shown when the current credits balance cannot be loaded in a credit reload modal footer`,
              })
            : (0, J.jsx)(m, {
                id: `settings.usage.creditReload.currentBalance`,
                defaultMessage: `Current balance: {balance}`,
                description: `Current credits balance shown in a credit reload modal footer`,
                values: { balance: s },
              }),
      })),
      (t[4] = r?.unlimited),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === a
    ? (l = t[8])
    : ((l = (0, J.jsx)(`div`, { className: `shrink-0`, children: a })), (t[7] = a), (t[8] = l));
  let u;
  return (
    t[9] !== c || t[10] !== l
      ? ((u = (0, J.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [c, l],
        })),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Ue({ intl: e, creditDetails: t, pricingInfo: n }) {
  return t == null || t.unlimited
    ? null
    : (G({ intl: e, creditQuantity: Math.floor(Number(t.balance ?? 0)), pricingInfo: n }) ??
        e.formatNumber(0));
}
function We({ scope: e, source: t, email: n, quantity: r, onOpenChange: i, statsigClient: a }) {
  let o = U(r);
  (x(e, v, { creditQuantity: c(o), source: t }),
    x(e, s, { checkoutKind: `standalone_credit`, entryPoint: `codex_purchase_credits_route` }),
    d.dispatchMessage(`open-in-browser`, {
      url: L({
        loginHint: n,
        statsigClient: a,
        url: `${f}/purchase/credits?quantity=${encodeURIComponent(o)}`,
      }),
    }),
    i(!1));
}
function Ge({ scope: e, intl: t, intent: n, kind: r }) {
  let i;
  switch (n) {
    case `enable`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.enable.success`,
              defaultMessage: `Enabled auto-reload`,
              description: `Toast shown when enabling auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.enable.error`,
              defaultMessage: `Failed to enable auto-reload`,
              description: `Toast shown when enabling auto reload fails`,
            });
      break;
    case `update`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.update.success`,
              defaultMessage: `Updated auto-reload settings`,
              description: `Toast shown when updating auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.update.error`,
              defaultMessage: `Failed to update auto-reload`,
              description: `Toast shown when updating auto reload fails`,
            });
      break;
    case `disable`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.disable.success`,
              defaultMessage: `Disabled auto-reload`,
              description: `Toast shown when disabling auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.disable.error`,
              defaultMessage: `Failed to disable auto-reload`,
              description: `Toast shown when disabling auto reload fails`,
            });
  }
  if (r === `success`) {
    e.get(_).success(i, ke);
    return;
  }
  e.get(_).danger(i, ke);
}
function Ke(e) {
  let t = U(e);
  return re.some((e) => String(e) === t);
}
function qe(e) {
  let t = (0, K.c)(21),
    {
      dialogDescriptionId: n,
      screenReaderTitle: r,
      screenReaderDescription: i,
      headerTitle: a,
      headerSubtitle: o,
      footer: s,
      onSubmit: c,
      children: l,
    } = e,
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = (e) => {
        (e.preventDefault(), c());
      }),
      (t[0] = c),
      (t[1] = u));
  let d;
  t[2] === r
    ? (d = t[3])
    : ((d = (0, J.jsx)(D, {
        asChild: !0,
        children: (0, J.jsx)(`h2`, { className: `sr-only`, children: r }),
      })),
      (t[2] = r),
      (t[3] = d));
  let f;
  t[4] !== n || t[5] !== i
    ? ((f = (0, J.jsx)(`div`, { id: n, className: `sr-only`, children: i })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== o || t[8] !== a
    ? ((p = (0, J.jsx)(O, { title: a, subtitle: o })), (t[7] = o), (t[8] = a), (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== d || t[11] !== f || t[12] !== p
    ? ((m = (0, J.jsxs)(E, { children: [d, f, p] })),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === s
    ? (h = t[15])
    : ((h = (0, J.jsx)(E, { className: `pt-4`, children: s })), (t[14] = s), (t[15] = h));
  let g;
  return (
    t[16] !== l || t[17] !== u || t[18] !== m || t[19] !== h
      ? ((g = (0, J.jsxs)(A, { as: `form`, onSubmit: u, children: [m, l, h] })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = m),
        (t[19] = h),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function $(e) {
  let t = (0, K.c)(26),
    n = (0, q.useId)(),
    r = e.state === `loading` || e.state === `error`,
    i =
      !r &&
      e.variant !== `one-time-purchase` &&
      (e.enableAutoTopUpMutation.isPending ||
        e.updateAutoTopUpMutation.isPending ||
        e.disableAutoTopUpMutation.isPending),
    a;
  if (r) {
    let r = e.state === `error` ? e.onRetry : void 0,
      i;
    t[0] === e
      ? (i = t[1])
      : ((i = () => {
          e.onOpenChange(!1);
        }),
        (t[0] = e),
        (t[1] = i));
    let o;
    (t[2] !== n || t[3] !== e.state || t[4] !== e.variant || t[5] !== r || t[6] !== i
      ? ((o = (0, J.jsx)(Ye, {
          variant: e.variant,
          state: e.state,
          dialogDescriptionId: n,
          onRetry: r,
          onClose: i,
        })),
        (t[2] = n),
        (t[3] = e.state),
        (t[4] = e.variant),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o))
      : (o = t[7]),
      (a = o));
  } else if (e.variant === `one-time-purchase`) {
    let r;
    (t[8] !== n || t[9] !== e
      ? ((r = (0, J.jsx)(Me, { ...e, dialogDescriptionId: n })),
        (t[8] = n),
        (t[9] = e),
        (t[10] = r))
      : (r = t[10]),
      (a = r));
  } else {
    let r;
    (t[11] !== n || t[12] !== e
      ? ((r = (0, J.jsx)(Pe, { ...e, dialogDescriptionId: n })),
        (t[11] = n),
        (t[12] = e),
        (t[13] = r))
      : (r = t[13]),
      (a = r));
  }
  let o;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the credit reload dialog`,
      })),
      (t[14] = o))
    : (o = t[14]);
  let s;
  t[15] === n
    ? (s = t[16])
    : ((s = { "aria-describedby": n, onOpenAutoFocus: Je }), (t[15] = n), (t[16] = s));
  let c;
  t[17] !== i || t[18] !== e
    ? ((c = (t) => {
        (i && !t) || e.onOpenChange(t);
      }),
      (t[17] = i),
      (t[18] = e),
      (t[19] = c))
    : (c = t[19]);
  let l;
  return (
    t[20] !== a || t[21] !== i || t[22] !== e.open || t[23] !== s || t[24] !== c
      ? ((l = (0, J.jsx)(k, {
          open: e.open,
          size: `default`,
          contentClassName: `w-[580px] max-w-[calc(100vw-2rem)]`,
          dialogCloseClassName: `top-[22px]`,
          dialogCloseLabel: o,
          contentProps: s,
          shouldIgnoreClickOutside: i,
          onOpenChange: c,
          children: a,
        })),
        (t[20] = a),
        (t[21] = i),
        (t[22] = e.open),
        (t[23] = s),
        (t[24] = c),
        (t[25] = l))
      : (l = t[25]),
    l
  );
}
function Je(e) {
  e.preventDefault();
}
function Ye(e) {
  let t = (0, K.c)(28),
    { variant: n, state: r, dialogDescriptionId: i, onRetry: a, onClose: o } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s =
        n === `one-time-purchase`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.oneTimePurchase.title`,
              defaultMessage: `One time credit purchase`,
              description: `Title for the one time credit purchase modal`,
            })
          : n === `setup-auto-reload`
            ? (0, J.jsx)(m, {
                id: `settings.usage.creditReload.autoReload.setup.title`,
                defaultMessage: `Set up auto-reload`,
                description: `Title for the auto reload setup modal`,
              })
            : n === `manage-auto-reload`
              ? (0, J.jsx)(m, {
                  id: `settings.usage.creditReload.autoReload.manage.title`,
                  defaultMessage: `Manage auto-reload`,
                  description: `Title for the auto reload management modal`,
                })
              : (0, J.jsx)(m, {
                  id: `settings.usage.creditReload.addCredits.title`,
                  defaultMessage: `Add credits`,
                  description: `Title for the add credits modal`,
                })),
      (t[0] = n),
      (t[1] = s));
  let c = s,
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, J.jsx)(D, {
        asChild: !0,
        children: (0, J.jsx)(`h2`, { className: `sr-only`, children: c }),
      })),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] === n
    ? (u = t[5])
    : ((u =
        n === `one-time-purchase`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.oneTimePurchase.screenReaderDescription`,
              defaultMessage: `Purchase credits so you can continue using Codex if your usage runs out. View rate card`,
              description: `Screen reader description for the one time credit purchase modal`,
            })
          : n === `add-credits`
            ? (0, J.jsx)(m, {
                id: `settings.usage.creditReload.addCredits.screenReaderDescription`,
                defaultMessage: `Credits power Codex. Valid for 12 months. View rate card`,
                description: `Screen reader description for the add credits modal`,
              })
            : (0, J.jsx)(m, {
                id: `settings.usage.creditReload.autoReload.modalDescription`,
                defaultMessage: `Automatically add credits when your balance runs low`,
                description: `Description for the automatic reload modal`,
              })),
      (t[4] = n),
      (t[5] = u));
  let d;
  t[6] !== i || t[7] !== u
    ? ((d = (0, J.jsx)(`p`, { id: i, className: `sr-only`, children: u })),
      (t[6] = i),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === r
    ? (f = t[10])
    : ((f =
        r === `error`
          ? (0, J.jsx)(m, {
              id: `settings.usage.creditReload.load.error`,
              defaultMessage: `Could not load credit settings`,
              description: `Error shown when the combined credit reload dialog cannot load`,
            })
          : (0, J.jsx)(m, {
              id: `settings.usage.creditReload.load.loading`,
              defaultMessage: `Loading credit settings…`,
              description: `Loading label shown while the combined credit reload dialog loads`,
            })),
      (t[9] = r),
      (t[10] = f));
  let p;
  t[11] !== f || t[12] !== c
    ? ((p = (0, J.jsx)(E, {
        children: (0, J.jsx)(O, { title: c, subtitle: f, titleSize: `base` }),
      })),
      (t[11] = f),
      (t[12] = c),
      (t[13] = p))
    : (p = t[13]);
  let h;
  t[14] !== a || t[15] !== r
    ? ((h =
        r === `error` && a != null
          ? (0, J.jsx)(g, {
              color: `outline`,
              onClick: a,
              children: (0, J.jsx)(m, {
                id: `settings.usage.creditReload.load.retry`,
                defaultMessage: `Retry`,
                description: `Retry button for the combined credit reload dialog`,
              }),
            })
          : null),
      (t[14] = a),
      (t[15] = r),
      (t[16] = h))
    : (h = t[16]);
  let _;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(m, {
        id: `settings.usage.creditReload.load.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label to close the combined credit reload dialog`,
      })),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] === o
    ? (v = t[19])
    : ((v = (0, J.jsx)(g, { color: `outline`, onClick: o, children: _ })),
      (t[18] = o),
      (t[19] = v));
  let y;
  t[20] !== h || t[21] !== v
    ? ((y = (0, J.jsx)(E, {
        className: `pt-4`,
        children: (0, J.jsxs)(`div`, { className: `flex justify-end gap-3`, children: [h, v] }),
      })),
      (t[20] = h),
      (t[21] = v),
      (t[22] = y))
    : (y = t[22]);
  let b;
  return (
    t[23] !== y || t[24] !== l || t[25] !== d || t[26] !== p
      ? ((b = (0, J.jsxs)(A, { className: `gap-0 px-4 py-4`, children: [l, d, p, y] })),
        (t[23] = y),
        (t[24] = l),
        (t[25] = d),
        (t[26] = p),
        (t[27] = b))
      : (b = t[27]),
    b
  );
}
function Xe(e) {
  let t = (0, K.c)(50),
    { onClose: n, source: r, variant: a } = e,
    { data: o } = i(l),
    s = a !== `one-time-purchase`,
    c;
  t[0] === s ? (c = t[1]) : ((c = { enabled: s }), (t[0] = s), (t[1] = c));
  let { data: u, isError: d, refetch: f } = ee(c),
    { enableAutoTopUpMutation: p, updateAutoTopUpMutation: m, disableAutoTopUpMutation: h } = N(),
    g;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { enabled: !0 }), (t[2] = g))
    : (g = t[2]);
  let { data: _, isPending: v, isError: y, refetch: b } = I(g),
    x;
  t[3] === _ ? (x = t[4]) : ((x = { billingCurrency: _, enabled: !0 }), (t[3] = _), (t[4] = x));
  let { data: S, isPending: C, isError: w, refetch: T } = F(x),
    E = v || C,
    D;
  t[5] !== b || t[6] !== T
    ? ((D = () => {
        (b(), T());
      }),
      (t[5] = b),
      (t[6] = T),
      (t[7] = D))
    : (D = t[7]);
  let O = D,
    k;
  t[8] === n
    ? (k = t[9])
    : ((k = (e) => {
        e || n();
      }),
      (t[8] = n),
      (t[9] = k));
  let A = k;
  if (a === `one-time-purchase`) {
    if (E) {
      let e;
      return (
        t[10] !== A || t[11] !== r || t[12] !== a
          ? ((e = (0, J.jsx)($, {
              open: !0,
              source: r,
              variant: a,
              state: `loading`,
              onOpenChange: A,
            })),
            (t[10] = A),
            (t[11] = r),
            (t[12] = a),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    if (y || w || _ == null || S == null) {
      let e;
      return (
        t[14] !== A || t[15] !== O || t[16] !== r || t[17] !== a
          ? ((e = (0, J.jsx)($, {
              open: !0,
              source: r,
              variant: a,
              state: `error`,
              onRetry: O,
              onOpenChange: A,
            })),
            (t[14] = A),
            (t[15] = O),
            (t[16] = r),
            (t[17] = a),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    let e = o?.credits ?? null,
      n;
    return (
      t[19] !== S || t[20] !== A || t[21] !== r || t[22] !== e || t[23] !== a
        ? ((n = (0, J.jsx)($, {
            open: !0,
            source: r,
            variant: a,
            creditDetails: e,
            pricingInfo: S,
            onOpenChange: A,
          })),
          (t[19] = S),
          (t[20] = A),
          (t[21] = r),
          (t[22] = e),
          (t[23] = a),
          (t[24] = n))
        : (n = t[24]),
      n
    );
  }
  if (u == null) {
    let e;
    return (
      t[25] !== A || t[26] !== d || t[27] !== f || t[28] !== r || t[29] !== a
        ? ((e = d
            ? (0, J.jsx)($, {
                open: !0,
                source: r,
                variant: a,
                state: `error`,
                onRetry: () => {
                  f();
                },
                onOpenChange: A,
              })
            : (0, J.jsx)($, {
                open: !0,
                source: r,
                variant: a,
                state: `loading`,
                onOpenChange: A,
              })),
          (t[25] = A),
          (t[26] = d),
          (t[27] = f),
          (t[28] = r),
          (t[29] = a),
          (t[30] = e))
        : (e = t[30]),
      e
    );
  }
  if (E) {
    let e;
    return (
      t[31] !== A || t[32] !== r || t[33] !== a
        ? ((e = (0, J.jsx)($, {
            open: !0,
            source: r,
            variant: a,
            state: `loading`,
            onOpenChange: A,
          })),
          (t[31] = A),
          (t[32] = r),
          (t[33] = a),
          (t[34] = e))
        : (e = t[34]),
      e
    );
  }
  if (y || w || _ == null || S == null) {
    let e;
    return (
      t[35] !== A || t[36] !== O || t[37] !== r || t[38] !== a
        ? ((e = (0, J.jsx)($, {
            open: !0,
            source: r,
            variant: a,
            state: `error`,
            onRetry: O,
            onOpenChange: A,
          })),
          (t[35] = A),
          (t[36] = O),
          (t[37] = r),
          (t[38] = a),
          (t[39] = e))
        : (e = t[39]),
      e
    );
  }
  let j = o?.credits ?? null,
    M;
  return (
    t[40] !== S ||
    t[41] !== u ||
    t[42] !== h ||
    t[43] !== p ||
    t[44] !== A ||
    t[45] !== r ||
    t[46] !== j ||
    t[47] !== m ||
    t[48] !== a
      ? ((M = (0, J.jsx)($, {
          open: !0,
          source: r,
          variant: a,
          serverState: u,
          creditDetails: j,
          pricingInfo: S,
          enableAutoTopUpMutation: p,
          updateAutoTopUpMutation: m,
          disableAutoTopUpMutation: h,
          onOpenChange: A,
        })),
        (t[40] = S),
        (t[41] = u),
        (t[42] = h),
        (t[43] = p),
        (t[44] = A),
        (t[45] = r),
        (t[46] = j),
        (t[47] = m),
        (t[48] = a),
        (t[49] = M))
      : (M = t[49]),
    M
  );
}
var Ze = `1721641661`;
function Qe({ intent: e, isCombinedModalEnabled: t }) {
  return t ? `combined-modal` : e === `purchase` ? `legacy-purchase` : `legacy-auto-reload`;
}
function $e({ intent: e, isAutoReloadEnabled: t }) {
  return e === `purchase`
    ? t
      ? `one-time-purchase`
      : `add-credits`
    : t
      ? `manage-auto-reload`
      : `setup-auto-reload`;
}
function et() {
  let e = (0, K.c)(3),
    t = r(a),
    n = S(),
    i;
  return (
    e[0] !== t || e[1] !== n
      ? ((i = (e) => {
          let r = C(n, Ze, { disableExposureLog: !1 }).get(`enabled`, !1);
          if (Qe({ intent: e.intent, isCombinedModalEnabled: r }) === `combined-modal`) {
            (x(t, y, { isAutoReloadEnabledAtOpen: e.isAutoReloadEnabled, source: e.source }),
              T(t, Xe, {
                source: e.source,
                variant: $e({ intent: e.intent, isAutoReloadEnabled: e.isAutoReloadEnabled }),
              }));
            return;
          }
          if (e.intent === `purchase`) {
            d.dispatchMessage(`open-in-browser`, { url: e.legacyUrl });
            return;
          }
          e.openLegacyAutoReload();
        }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
var tt = 300,
  nt = R,
  rt = 30 * z;
function it({ entry: e, keyPrefix: t }) {
  let n = [
    { bucket: e.snapshot.primary, role: `primary` },
    { bucket: e.snapshot.secondary, role: `secondary` },
  ]
    .filter((e) => ne(e.bucket))
    .sort((e, t) => (e.bucket.windowDurationMins ?? 0) - (t.bucket.windowDurationMins ?? 0));
  if (n.length === 0) return [];
  let r = new Map();
  return n.map(({ bucket: n, role: i }, a) => {
    let o = at(n, i, a),
      s = r.get(o) ?? 0;
    return (
      r.set(o, s + 1),
      { key: `${t}-${s === 0 ? o : `${o}-${i}`}`, bucket: n, limitName: e.limitName }
    );
  });
}
function at(e, t, n) {
  let r = e.windowDurationMins ?? 0;
  return Math.abs(r - tt) <= 1
    ? `five-hour`
    : Math.abs(r - nt) <= 1
      ? `weekly`
      : Math.abs(r - rt) <= 1
        ? `monthly`
        : `${t}-${n}-${r}`;
}
export { B as i, et as n, G as r, it as t };
//# sourceMappingURL=rate-limit-rows.js.map
