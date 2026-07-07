import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  Rt as r,
  Tl as i,
  Xs as a,
  ec as o,
  rc as s,
  tc as c,
  vl as l,
  zt as u,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  B as d,
  Cs as f,
  Gu as p,
  Wu as m,
  _h as h,
  ds as g,
  fr as _,
  fs as v,
  ls as y,
  pr as b,
  ps as x,
  vh as S,
  vm as C,
  ym as w,
  ys as T,
  z as E,
} from "./app-initial~app-main~onboarding-page.js";
import {
  G as D,
  W as O,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Qs as k,
  Rs as A,
  Sx as j,
  Us as M,
  al as N,
  ec as P,
  el as F,
  il as I,
  nl as L,
  sl as ee,
  tl as te,
  wx as ne,
  yx as re,
} from "./app-initial~app-main~new-thread-panel-page.js";
import { Kn as R, Un as ie } from "./app-initial~app-main~automations-page.js";
import {
  $ as z,
  Fi as B,
  Ii as V,
  Li as H,
  Ri as ae,
  at as oe,
  bu as se,
  ci as U,
  et as W,
  fi as ce,
  gi as le,
  li as ue,
  mi as de,
  oi as G,
  ot as K,
  si as fe,
  xu as pe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  $ as me,
  L as he,
  Q as ge,
  Z as q,
  et as _e,
  z as ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  g as ye,
  m as be,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~filfqv6y.js";
import {
  d as J,
  f as Y,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as X,
  t as xe,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as Se, t as Ce } from "./toolbar-breadcrumb.js";
import { n as we, t as Te } from "./appgen-share-dialog--o3-U-xq.js";
import { n as Ee, t as De } from "./settings-empty-state.js";
function Oe(e) {
  return {
    environmentVariables: e.entries
      .filter((e) => !e.is_secret)
      .map(({ key: e, value: t }) => ({ key: e, value: t ?? `` })),
    secrets: e.entries
      .filter((e) => e.is_secret)
      .map(({ key: e }) => ({ key: e, keyInputDisabledWhileValue: Ne, previousKey: e, value: Ne })),
  };
}
function ke(e, t) {
  let n = [...t.environmentVariables.map(({ key: e }) => e), ...t.secrets.map(({ key: e }) => e)];
  if (new Set(n).size !== n.length) return null;
  let r = new Set([
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map((e) => (Ae(e) ? e.previousKey : e.key)),
  ]);
  return {
    remove: e.entries.filter(({ key: e }) => !r.has(e)).map(({ key: e }) => e),
    set_values: [
      ...t.environmentVariables.filter((t) => je(e, t)).map((e) => Me(e, !1)),
      ...t.secrets.filter((e) => !Ae(e)).map((e) => Me(e, !0)),
    ],
  };
}
function Ae(e) {
  return e.previousKey != null && e.value === Ne;
}
function je(e, t) {
  let n = e.entries.find((e) => e.key === t.key);
  return n == null || n.is_secret || n.value !== t.value;
}
function Me(e, t) {
  return { is_secret: t, key: e.key, type: `envvar`, value: e.value };
}
var Ne,
  Pe = e(() => {
    Ne = `<REDACTED>`;
  });
function Fe(e, t, n = !1) {
  let r = e ?? t,
    i = r.trim();
  return {
    isInvalid: e != null && i.length === 0,
    title: r,
    update: e != null && i.length > 0 && (i !== t || n) ? { title: i } : null,
  };
}
async function Ie({ environmentUpdate: e, titleUpdate: t, updateEnvironment: n, updateTitle: r }) {
  let [i, a] = await Promise.allSettled([t == null ? void 0 : r(t), e == null ? void 0 : n(e)]);
  return { environmentSaved: a.status === `fulfilled`, titleSaved: i.status === `fulfilled` };
}
var Le = e(() => {});
function Re(e, t, n) {
  let r = ze(n),
    i = r[0];
  return i == null ? null : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function ze(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = Be(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = Be(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: Ve(e.slice(i + 1).trim()) });
  }
  return t;
}
function Be(e, t, n = () => !0) {
  let r = !1,
    i = !1,
    a = !1;
  for (let o = 0; o < e.length; o += 1) {
    let s = e[o];
    if (r) {
      r = !1;
      continue;
    }
    if (s === `\\`) {
      r = !0;
      continue;
    }
    if (s === `'` && !i) {
      a = !a;
      continue;
    }
    if (s === `"` && !a) {
      i = !i;
      continue;
    }
    if (s === t && !a && !i && n(o)) return o;
  }
  return -1;
}
function Ve(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) || (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
var He = e(() => {});
function Ue(e) {
  let t = (0, Ke.c)(20),
    {
      addButtonLabel: n,
      disabled: r,
      entries: i,
      onChange: a,
      subtitle: o,
      title: s,
      valueInputType: c,
    } = e,
    l = r === void 0 ? !1 : r,
    u;
  t[0] !== i || t[1] !== a
    ? ((u = () => {
        a([...i, { key: ``, value: `` }]);
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(se, { className: `icon-xs` })), (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== n || t[5] !== l || t[6] !== u
    ? ((f = (0, Z.jsxs)(q, {
        color: `outline`,
        disabled: l,
        size: `toolbar`,
        onClick: u,
        children: [d, n],
      })),
      (t[4] = n),
      (t[5] = l),
      (t[6] = u),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== o || t[9] !== f || t[10] !== s
    ? ((p = (0, Z.jsx)(J.Header, { actions: f, subtitle: o, title: s, titleGap: `none` })),
      (t[8] = o),
      (t[9] = f),
      (t[10] = s),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== l || t[13] !== i || t[14] !== a || t[15] !== c
    ? ((m = (0, Z.jsx)(J.Content, {
        children: (0, Z.jsx)(xe, {
          children:
            i.length === 0
              ? (0, Z.jsx)(De, {
                  children: (0, Z.jsx)(j, {
                    id: `envEntrySettingsGroup.empty`,
                    defaultMessage: `Nothing yet`,
                    description: `Empty state for an environment entry settings section`,
                  }),
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex flex-col gap-2 p-4`,
                  children: i.map((e, t) =>
                    (0, Z.jsx)(
                      We,
                      {
                        disabled: l,
                        entry: e,
                        valueInputType: c,
                        onChange: (e) => {
                          a(i.map((n, r) => (r === t ? e : n)));
                        },
                        onKeyPaste: (e) => {
                          let n = Re(i, t, e.clipboardData.getData(`text/plain`));
                          n != null && (e.preventDefault(), a(n));
                        },
                        onRemove: () => {
                          a(i.filter((e, n) => n !== t));
                        },
                      },
                      t,
                    ),
                  ),
                }),
        }),
      })),
      (t[12] = l),
      (t[13] = i),
      (t[14] = a),
      (t[15] = c),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== p || t[18] !== m
      ? ((h = (0, Z.jsxs)(J, { className: `gap-2`, children: [p, m] })),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function We(e) {
  let t = (0, Ke.c)(39),
    { disabled: n, entry: r, onChange: i, onKeyPaste: a, onRemove: o, valueInputType: s } = e,
    c = ne(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = n || r.keyInputDisabledWhileValue === r.value,
    d;
  t[2] === c
    ? (d = t[3])
    : ((d = c.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (t[2] = c),
      (t[3] = d));
  let f;
  t[4] !== r || t[5] !== i
    ? ((f = (e) => {
        i({ ...r, key: e.target.value });
      }),
      (t[4] = r),
      (t[5] = i),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== r.key || t[8] !== a || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== f
    ? ((p = (0, Z.jsx)(Ge, {
        "aria-label": l,
        disabled: u,
        placeholder: d,
        value: r.key,
        onPaste: a,
        onChange: f,
      })),
      (t[7] = r.key),
      (t[8] = a),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === c
    ? (m = t[15])
    : ((m = c.formatMessage({
        id: `envEntrySettingsGroup.value.ariaLabel`,
        defaultMessage: `Value`,
        description: `Accessible label for an environment variable or secret value input`,
      })),
      (t[14] = c),
      (t[15] = m));
  let h;
  t[16] === c
    ? (h = t[17])
    : ((h = c.formatMessage({
        id: `envEntrySettingsGroup.value.placeholder`,
        defaultMessage: `Value`,
        description: `Placeholder for an environment variable or secret value input`,
      })),
      (t[16] = c),
      (t[17] = h));
  let g;
  t[18] !== r || t[19] !== i
    ? ((g = (e) => {
        i({ ...r, value: e.target.value });
      }),
      (t[18] = r),
      (t[19] = i),
      (t[20] = g))
    : (g = t[20]);
  let _;
  t[21] !== n || t[22] !== r.value || t[23] !== m || t[24] !== h || t[25] !== g || t[26] !== s
    ? ((_ = (0, Z.jsx)(Ge, {
        "aria-label": m,
        disabled: n,
        placeholder: h,
        type: s,
        value: r.value,
        onChange: g,
      })),
      (t[21] = n),
      (t[22] = r.value),
      (t[23] = m),
      (t[24] = h),
      (t[25] = g),
      (t[26] = s),
      (t[27] = _))
    : (_ = t[27]);
  let v;
  t[28] === c
    ? (v = t[29])
    : ((v = c.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (t[28] = c),
      (t[29] = v));
  let y;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(C, { className: `icon-2xs` })), (t[30] = y))
    : (y = t[30]);
  let b;
  t[31] !== n || t[32] !== o || t[33] !== v
    ? ((b = (0, Z.jsx)(q, {
        "aria-label": v,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: o,
        children: y,
      })),
      (t[31] = n),
      (t[32] = o),
      (t[33] = v),
      (t[34] = b))
    : (b = t[34]);
  let x;
  return (
    t[35] !== b || t[36] !== p || t[37] !== _
      ? ((x = (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
          children: [p, _, b],
        })),
        (t[35] = b),
        (t[36] = p),
        (t[37] = _),
        (t[38] = x))
      : (x = t[38]),
    x
  );
}
function Ge(e) {
  let t = (0, Ke.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Z.jsx)(`input`, {
          className: `h-token-button-composer w-full min-w-0 rounded-md border border-token-input-border bg-token-input-background px-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          ...e,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
var Ke,
  Z,
  qe = e(() => {
    ((Ke = i()), re(), ge(), pe(), w(), Ee(), Y(), X(), He(), (Z = l()));
  });
function Je() {
  let e = (0, Q.c)(3),
    { projectId: t } = P();
  if (t == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(M, { replace: !0, to: `/sites` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let n;
  return (
    e[1] === t ? (n = e[2]) : ((n = (0, $.jsx)(Ye, { projectId: t })), (e[1] = t), (e[2] = n)), n
  );
}
function Ye(e) {
  let t = (0, Q.c)(22),
    { projectId: n } = e,
    { data: r, isError: i, isLoading: a } = o(L, n),
    { data: s, isError: c, isLoading: l } = o(te, n),
    u = r?.current_live_url,
    d;
  t[0] === u ? (d = t[1]) : ((d = h(u)), (t[0] = u), (t[1] = d));
  let f = d,
    p = r?.title,
    g;
  t[2] !== u || t[3] !== p
    ? ((g = (0, $.jsx)(Xe, { liveUrl: u, siteTitle: p })), (t[2] = u), (t[3] = p), (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v;
  t[5] === _
    ? (v = t[6])
    : ((v = (0, $.jsx)(O, { extension: !0, children: _ })), (t[5] = _), (t[6] = v));
  let y;
  t[7] === _
    ? (y = t[8])
    : ((y = (0, $.jsx)(O, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(m.Header, { children: _ }),
      })),
      (t[7] = _),
      (t[8] = y));
  let b;
  t[9] !== s ||
  t[10] !== c ||
  t[11] !== l ||
  t[12] !== i ||
  t[13] !== a ||
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== f
    ? ((b = (0, $.jsx)(`div`, {
        className: `scrollbar-stable flex min-h-0 flex-1 overflow-y-auto p-panel`,
        children: (0, $.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-[var(--padding-panel)]`,
          children:
            a || l
              ? (0, $.jsx)(tt, {})
              : i || c || r == null || s == null
                ? (0, $.jsx)(nt, {})
                : (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `truncate text-[22px] leading-7 font-medium text-token-text-primary`,
                            children: r.title,
                          }),
                          f == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                className: `truncate text-xs text-token-text-tertiary`,
                                children: f,
                              }),
                        ],
                      }),
                      (0, $.jsx)(
                        Ze,
                        {
                          accessPolicy: r.access_policy,
                          environment: s,
                          projectId: n,
                          siteSlug: r.slug,
                          siteTitle: r.title,
                        },
                        n,
                      ),
                    ],
                  }),
        }),
      })),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = i),
      (t[13] = a),
      (t[14] = n),
      (t[15] = r),
      (t[16] = f),
      (t[17] = b))
    : (b = t[17]);
  let x;
  return (
    t[18] !== v || t[19] !== y || t[20] !== b
      ? ((x = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [v, y, b],
        })),
        (t[18] = v),
        (t[19] = y),
        (t[20] = b),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
function Xe(e) {
  let t = (0, Q.c)(13),
    { liveUrl: n, siteTitle: r } = e,
    i = k(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(j, {
        id: `appgenSettings.header.sites`,
        defaultMessage: `Sites`,
        description: `Breadcrumb link back to the Sites Library page`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = [
        {
          id: `sites`,
          label: a,
          onClick: () => {
            i(ie);
          },
        },
      ]),
      (t[1] = i),
      (t[2] = o));
  let s;
  t[3] !== r || t[4] !== o
    ? ((s = (0, $.jsx)(Ce, { ancestors: o, current: r })), (t[3] = r), (t[4] = o), (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === n
    ? (c = t[7])
    : ((c =
        n == null
          ? null
          : (0, $.jsxs)(q, {
              color: `outline`,
              size: `toolbar`,
              onClick: (e) => {
                ye({ event: e, href: n, initiator: `mcp_app_resource` });
              },
              children: [
                (0, $.jsx)(oe, { className: `icon-xs`, ExternalIcon: z, href: n }),
                (0, $.jsx)(j, {
                  id: `appgenSettings.visit`,
                  defaultMessage: `Visit`,
                  description: `Button label for opening a live site externally`,
                }),
              ],
            })),
      (t[6] = n),
      (t[7] = c));
  let l;
  t[8] === c
    ? (l = t[9])
    : ((l = (0, $.jsx)(`div`, { className: `flex items-center justify-end`, children: c })),
      (t[8] = c),
      (t[9] = l));
  let u;
  return (
    t[10] !== s || t[11] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y`,
          children: [s, l],
        })),
        (t[10] = s),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function Ze(e) {
  let t = (0, Q.c)(88),
    { accessPolicy: n, environment: i, projectId: a, siteSlug: s, siteTitle: l } = e,
    u = c(r),
    d = o(I, a),
    f = o(N, a),
    p = ne(),
    [m, h] = (0, it.useState)(null),
    [g, v] = (0, it.useState)(null),
    [y, b] = (0, it.useState)(!1),
    x;
  t[0] !== i || t[1] !== m?.draft
    ? ((x = m?.draft ?? Oe(i)), (t[0] = i), (t[1] = m?.draft), (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] === m
    ? (C = t[4])
    : ((C = m == null ? null : ke(m.baseEnvironment, m.draft)), (t[3] = m), (t[4] = C));
  let w = C,
    T;
  t[5] !== g || t[6] !== y || t[7] !== l
    ? ((T = Fe(g, l, y)), (t[5] = g), (t[6] = y), (t[7] = l), (t[8] = T))
    : (T = t[8]);
  let { isInvalid: E, title: D, update: O } = T,
    k = m != null && w == null,
    A = d.isPending || f.isPending,
    M = A || E || k || (O == null && w == null),
    P;
  t[9] === i
    ? (P = t[10])
    : ((P = function (e) {
        h((t) => {
          let n = t?.baseEnvironment ?? i,
            r = Oe(n),
            a = e(t?.draft ?? r);
          return (0, rt.default)(a, r) ? null : { baseEnvironment: n, draft: a };
        });
      }),
      (t[9] = i),
      (t[10] = P));
  let F = P,
    L;
  t[11] !== w ||
  t[12] !== p ||
  t[13] !== M ||
  t[14] !== u ||
  t[15] !== O ||
  t[16] !== d.mutateAsync ||
  t[17] !== f
    ? ((L = (e) => {
        (e.preventDefault(),
          !M &&
            Ie({
              environmentUpdate: w,
              titleUpdate: O,
              updateEnvironment: d.mutateAsync,
              updateTitle: f.mutateAsync,
            }).then((e) => {
              let { environmentSaved: t, titleSaved: n } = e;
              (n ? (v(null), b(!1)) : b(!0),
                t && h(null),
                (!n || !t) &&
                  u
                    .get(ve)
                    .danger(
                      p.formatMessage({
                        id: `appgenSettings.save.error`,
                        defaultMessage: `Unable to save site settings`,
                        description: `Error toast shown when saving site settings fails`,
                      }),
                    ));
            }));
      }),
      (t[11] = w),
      (t[12] = p),
      (t[13] = M),
      (t[14] = u),
      (t[15] = O),
      (t[16] = d.mutateAsync),
      (t[17] = f),
      (t[18] = L))
    : (L = t[18]);
  let ee;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(j, {
          id: `appgenSettings.general.title`,
          defaultMessage: `General`,
          description: `Section heading for general Site information on the Site settings page`,
        }),
      })),
      (t[19] = ee))
    : (ee = t[19]);
  let te, re;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(j, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Title`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (re = (0, $.jsx)(j, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (t[20] = te),
      (t[21] = re))
    : ((te = t[20]), (re = t[21]));
  let R;
  t[22] === p
    ? (R = t[23])
    : ((R = p.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (t[22] = p),
      (t[23] = R));
  let ie = E ? at : void 0,
    z;
  t[24] === l
    ? (z = t[25])
    : ((z = (e) => {
        (b(!1), v(e.target.value === l ? null : e.target.value));
      }),
      (t[24] = l),
      (t[25] = z));
  let B;
  t[26] !== g || t[27] !== y || t[28] !== l
    ? ((B = () => {
        !y && g?.trim() === l && v(null);
      }),
      (t[26] = g),
      (t[27] = y),
      (t[28] = l),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== E ||
  t[31] !== A ||
  t[32] !== ie ||
  t[33] !== z ||
  t[34] !== B ||
  t[35] !== R ||
  t[36] !== D
    ? ((V = (0, $.jsxs)(J, {
        children: [
          ee,
          (0, $.jsx)(J.Content, {
            children: (0, $.jsx)(xe, {
              children: (0, $.jsx)(_, {
                className: `max-sm:flex-col max-sm:items-stretch`,
                label: te,
                description: re,
                control: (0, $.jsx)(`input`, {
                  "aria-label": R,
                  "aria-describedby": ie,
                  "aria-invalid": E,
                  className: `w-[320px] max-w-full cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
                  disabled: A,
                  maxLength: 100,
                  type: `text`,
                  value: D,
                  onChange: z,
                  onBlur: B,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[30] = E),
      (t[31] = A),
      (t[32] = ie),
      (t[33] = z),
      (t[34] = B),
      (t[35] = R),
      (t[36] = D),
      (t[37] = V))
    : (V = t[37]);
  let H;
  t[38] !== n || t[39] !== a
    ? ((H = n == null ? null : (0, $.jsx)(Qe, { accessPolicy: n, projectId: a })),
      (t[38] = n),
      (t[39] = a),
      (t[40] = H))
    : (H = t[40]);
  let ae;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, $.jsx)(j, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[41] = ae))
    : (ae = t[41]);
  let oe, se;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(j, {
        id: `appgenSettings.environmentVariables.description`,
        defaultMessage: `Settings your site uses while it runs, like URLs, names, or feature switches`,
        description: `Description for site environment variable settings`,
      })),
      (se = (0, $.jsx)(j, {
        id: `appgenSettings.environmentVariables.title`,
        defaultMessage: `Environment variables`,
        description: `Heading for site environment variable settings`,
      })),
      (t[42] = oe),
      (t[43] = se))
    : ((oe = t[42]), (se = t[43]));
  let U;
  t[44] === F
    ? (U = t[45])
    : ((U = (e) => {
        F((t) => ({ ...t, environmentVariables: e }));
      }),
      (t[44] = F),
      (t[45] = U));
  let W;
  t[46] !== S.environmentVariables || t[47] !== A || t[48] !== U
    ? ((W = (0, $.jsx)(Ue, {
        addButtonLabel: ae,
        disabled: A,
        entries: S.environmentVariables,
        subtitle: oe,
        title: se,
        valueInputType: `text`,
        onChange: U,
      })),
      (t[46] = S.environmentVariables),
      (t[47] = A),
      (t[48] = U),
      (t[49] = W))
    : (W = t[49]);
  let ce;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, $.jsx)(j, {
        id: `appgenSettings.secrets.add`,
        defaultMessage: `Add secret`,
        description: `Button label to add a site secret`,
      })),
      (t[50] = ce))
    : (ce = t[50]);
  let ue, de;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(j, {
        id: `appgenSettings.secrets.description`,
        defaultMessage: `Sensitive setup info, like keys and passwords`,
        description: `Description for site secret settings`,
      })),
      (de = (0, $.jsx)(j, {
        id: `appgenSettings.secrets.title`,
        defaultMessage: `Secrets`,
        description: `Heading for site secret settings`,
      })),
      (t[51] = ue),
      (t[52] = de))
    : ((ue = t[51]), (de = t[52]));
  let G;
  t[53] === F
    ? (G = t[54])
    : ((G = (e) => {
        F((t) => ({ ...t, secrets: e }));
      }),
      (t[53] = F),
      (t[54] = G));
  let K;
  t[55] !== S.secrets || t[56] !== A || t[57] !== G
    ? ((K = (0, $.jsx)(Ue, {
        addButtonLabel: ce,
        disabled: A,
        entries: S.secrets,
        subtitle: ue,
        title: de,
        valueInputType: `password`,
        onChange: G,
      })),
      (t[55] = S.secrets),
      (t[56] = A),
      (t[57] = G),
      (t[58] = K))
    : (K = t[58]);
  let fe;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(j, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[59] = fe))
    : (fe = t[59]);
  let pe, me;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(j, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (me = (0, $.jsx)(j, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[60] = pe),
      (t[61] = me))
    : ((pe = t[60]), (me = t[61]));
  let he;
  t[62] !== a || t[63] !== u || t[64] !== s || t[65] !== l
    ? ((he = () => {
        le(u, $e, { projectId: a, siteSlug: s, siteTitle: l });
      }),
      (t[62] = a),
      (t[63] = u),
      (t[64] = s),
      (t[65] = l),
      (t[66] = he))
    : (he = t[66]);
  let ge;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(j, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[67] = ge))
    : (ge = t[67]);
  let _e;
  t[68] === he
    ? (_e = t[69])
    : ((_e = (0, $.jsxs)(J, {
        children: [
          fe,
          (0, $.jsx)(J.Content, {
            children: (0, $.jsx)(xe, {
              children: (0, $.jsx)(_, {
                label: pe,
                description: me,
                control: (0, $.jsx)(q, {
                  color: `danger`,
                  size: `toolbar`,
                  type: `button`,
                  onClick: he,
                  children: ge,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[68] = he),
      (t[69] = _e));
  let ye;
  t[70] !== k || t[71] !== E
    ? ((ye = E
        ? (0, $.jsx)(`p`, {
            id: at,
            className: `text-sm text-token-charts-red`,
            role: `alert`,
            children: (0, $.jsx)(j, {
              id: `appgenSettings.general.title.required`,
              defaultMessage: `Site title is required`,
              description: `Inline validation message below the Site settings form when the Site title is empty`,
            }),
          })
        : k
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-token-charts-red`,
              role: `alert`,
              children: (0, $.jsx)(j, {
                id: `appgenSettings.environmentKeys.duplicate`,
                defaultMessage: `Keys must be unique across environment variables and secrets`,
                description: `Validation shown when site environment settings use a duplicate key`,
              }),
            })
          : null),
      (t[70] = k),
      (t[71] = E),
      (t[72] = ye))
    : (ye = t[72]);
  let be;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(j, {
        id: `appgenSettings.save`,
        defaultMessage: `Save`,
        description: `Button for saving site settings`,
      })),
      (t[73] = be))
    : (be = t[73]);
  let Y;
  t[74] !== M || t[75] !== A
    ? ((Y = (0, $.jsx)(q, {
        className: `ml-auto`,
        disabled: M,
        loading: A,
        size: `toolbar`,
        type: `submit`,
        children: be,
      })),
      (t[74] = M),
      (t[75] = A),
      (t[76] = Y))
    : (Y = t[76]);
  let X;
  t[77] !== ye || t[78] !== Y
    ? ((X = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 px-4 py-3`,
        children: [ye, Y],
      })),
      (t[77] = ye),
      (t[78] = Y),
      (t[79] = X))
    : (X = t[79]);
  let Se;
  return (
    t[80] !== V ||
    t[81] !== H ||
    t[82] !== W ||
    t[83] !== K ||
    t[84] !== _e ||
    t[85] !== X ||
    t[86] !== L
      ? ((Se = (0, $.jsxs)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: L,
          children: [V, H, W, K, _e, X],
        })),
        (t[80] = V),
        (t[81] = H),
        (t[82] = W),
        (t[83] = K),
        (t[84] = _e),
        (t[85] = X),
        (t[86] = L),
        (t[87] = Se))
      : (Se = t[87]),
    Se
  );
}
function Qe(e) {
  let t = (0, Q.c)(44),
    { accessPolicy: n, projectId: i } = e,
    a = c(r),
    o,
    s,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    b;
  t[0] === n
    ? ((o = t[1]),
      (s = t[2]),
      (l = t[3]),
      (u = t[4]),
      (d = t[5]),
      (f = t[6]),
      (p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (g = t[10]),
      (b = t[11]))
    : ((f = T(n)),
      (d = J),
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((b = (0, $.jsx)(J.Header, {
            title: (0, $.jsx)(j, {
              id: `appgenSettings.sharing.title`,
              defaultMessage: `Sharing`,
              description: `Heading for site sharing settings`,
            }),
          })),
          (t[12] = b))
        : (b = t[12]),
      (u = J.Content),
      (l = xe),
      (s = _),
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, $.jsx)(j, {
            id: `appgenSettings.sharing.label`,
            defaultMessage: `Sharing`,
            description: `Label for site sharing settings`,
          })),
          (t[13] = g))
        : (g = t[13]),
      (m = `flex items-center gap-1`),
      (h = (0, $.jsx)(v, { "aria-hidden": !0, accessPolicy: n, className: `icon-2xs shrink-0` })),
      (o = j),
      (p = y(f)),
      (t[0] = n),
      (t[1] = o),
      (t[2] = s),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = b));
  let x;
  t[14] !== o || t[15] !== f || t[16] !== p
    ? ((x = (0, $.jsx)(o, { ...p, values: f })), (t[14] = o), (t[15] = f), (t[16] = p), (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] !== m || t[19] !== h || t[20] !== x
    ? ((S = (0, $.jsxs)(`span`, { className: m, children: [h, x] })),
      (t[18] = m),
      (t[19] = h),
      (t[20] = x),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== i || t[23] !== a
    ? ((C = () => le(a, Te, { projectId: i })), (t[22] = i), (t[23] = a), (t[24] = C))
    : (C = t[24]);
  let w, D;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(E, { "aria-hidden": !0, className: `icon-xs` })),
      (w = (0, $.jsx)(j, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Share settings`,
        description: `Sharing settings button label`,
      })),
      (t[25] = w),
      (t[26] = D))
    : ((w = t[25]), (D = t[26]));
  let O;
  t[27] === C
    ? (O = t[28])
    : ((O = (0, $.jsxs)(q, { color: `outline`, size: `toolbar`, onClick: C, children: [D, w] })),
      (t[27] = C),
      (t[28] = O));
  let k;
  t[29] !== s || t[30] !== O || t[31] !== g || t[32] !== S
    ? ((k = (0, $.jsx)(s, { label: g, description: S, control: O })),
      (t[29] = s),
      (t[30] = O),
      (t[31] = g),
      (t[32] = S),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] !== l || t[35] !== k
    ? ((A = (0, $.jsx)(l, { children: k })), (t[34] = l), (t[35] = k), (t[36] = A))
    : (A = t[36]);
  let M;
  t[37] !== u || t[38] !== A
    ? ((M = (0, $.jsx)(u, { children: A })), (t[37] = u), (t[38] = A), (t[39] = M))
    : (M = t[39]);
  let N;
  return (
    t[40] !== d || t[41] !== M || t[42] !== b
      ? ((N = (0, $.jsxs)(d, { children: [b, M] })),
        (t[40] = d),
        (t[41] = M),
        (t[42] = b),
        (t[43] = N))
      : (N = t[43]),
    N
  );
}
function $e(e) {
  let t = (0, Q.c)(49),
    { onClose: n, projectId: i, siteSlug: a, siteTitle: s } = e,
    l = c(r),
    u = o(F, i),
    d = ne(),
    f = k(),
    [p, m] = (0, it.useState)(``),
    h;
  t[0] === s
    ? (h = t[1])
    : ((h = (0, $.jsx)(j, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: s },
      })),
      (t[0] = s),
      (t[1] = h));
  let g = h,
    _ = u.isPending,
    v = !u.isPending,
    y;
  t[2] !== u.isPending || t[3] !== n
    ? ((y = (e) => {
        !e && !u.isPending && n();
      }),
      (t[2] = u.isPending),
      (t[3] = n),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== p || t[6] !== u || t[7] !== d || t[8] !== f || t[9] !== n || t[10] !== l || t[11] !== a
    ? ((b = (e) => {
        (e.preventDefault(),
          !(p !== a || u.isPending) &&
            u.mutateAsync().then(
              () => {
                (l
                  .get(ve)
                  .success(
                    d.formatMessage({
                      id: `appgenSettings.deleteDialog.success`,
                      defaultMessage: `Site deleted`,
                      description: `Success toast shown after deleting a site`,
                    }),
                  ),
                  n(),
                  f(`/sites`));
              },
              () => {
                l.get(ve).danger(
                  d.formatMessage({
                    id: `appgenSettings.deleteDialog.error`,
                    defaultMessage: `Unable to delete site`,
                    description: `Error toast shown when deleting a site fails`,
                  }),
                );
              },
            ));
      }),
      (t[5] = p),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = n),
      (t[10] = l),
      (t[11] = a),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] === g
    ? (x = t[14])
    : ((x = (0, $.jsx)(H, { className: `contents`, children: g })), (t[13] = g), (t[14] = x));
  let S;
  t[15] === a
    ? (S = t[16])
    : ((S = (0, $.jsx)(V, {
        className: `contents`,
        children: (0, $.jsx)(j, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
          values: { siteSlug: a, strong: et },
        }),
      })),
      (t[15] = a),
      (t[16] = S));
  let C;
  t[17] !== x || t[18] !== S
    ? ((C = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(U, { title: x, titleClassName: `truncate pr-8`, subtitle: S }),
      })),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] === d
    ? (w = t[21])
    : ((w = d.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[20] = d),
      (t[21] = w));
  let T;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        m(e.target.value);
      }),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== p || t[24] !== u.isPending || t[25] !== a || t[26] !== w
    ? ((E = (0, $.jsx)(ue, {
        children: (0, $.jsx)(`input`, {
          "aria-label": w,
          autoFocus: !0,
          className: `w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          disabled: u.isPending,
          placeholder: a,
          spellCheck: !1,
          type: `text`,
          value: p,
          onChange: T,
        }),
      })),
      (t[23] = p),
      (t[24] = u.isPending),
      (t[25] = a),
      (t[26] = w),
      (t[27] = E))
    : (E = t[27]);
  let D;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(j, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[28] = D))
    : (D = t[28]);
  let O;
  t[29] !== u.isPending || t[30] !== n
    ? ((O = (0, $.jsx)(q, {
        color: `ghost`,
        disabled: u.isPending,
        type: `button`,
        onClick: n,
        children: D,
      })),
      (t[29] = u.isPending),
      (t[30] = n),
      (t[31] = O))
    : (O = t[31]);
  let A = p !== a || u.isPending,
    M;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(j, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[32] = M))
    : (M = t[32]);
  let N;
  t[33] !== u.isPending || t[34] !== A
    ? ((N = (0, $.jsx)(q, {
        color: `danger`,
        disabled: A,
        loading: u.isPending,
        type: `submit`,
        children: M,
      })),
      (t[33] = u.isPending),
      (t[34] = A),
      (t[35] = N))
    : (N = t[35]);
  let P;
  t[36] !== O || t[37] !== N
    ? ((P = (0, $.jsx)(ue, { children: (0, $.jsxs)(fe, { children: [O, N] }) })),
      (t[36] = O),
      (t[37] = N),
      (t[38] = P))
    : (P = t[38]);
  let I;
  t[39] !== E || t[40] !== P || t[41] !== b || t[42] !== C
    ? ((I = (0, $.jsxs)(G, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: b,
        children: [C, E, P],
      })),
      (t[39] = E),
      (t[40] = P),
      (t[41] = b),
      (t[42] = C),
      (t[43] = I))
    : (I = t[43]);
  let L;
  return (
    t[44] !== u.isPending || t[45] !== I || t[46] !== v || t[47] !== y
      ? ((L = (0, $.jsx)(B, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: _,
          showDialogClose: v,
          onOpenChange: y,
          children: I,
        })),
        (t[44] = u.isPending),
        (t[45] = I),
        (t[46] = v),
        (t[47] = y),
        (t[48] = L))
      : (L = t[48]),
    L
  );
}
function et(e) {
  return (0, $.jsx)(`strong`, { children: e });
}
function tt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(me, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function nt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, $.jsx)(j, {
              id: `appgenSettings.error.title`,
              defaultMessage: `Unable to load site settings`,
              description: `Error state title for the site settings page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, rt, it, $, at;
e(() => {
  ((Q = i()),
    (rt = t(s(), 1)),
    a(),
    (it = t(n(), 1)),
    re(),
    A(),
    p(),
    ge(),
    ae(),
    ce(),
    be(),
    K(),
    de(),
    _e(),
    he(),
    Se(),
    D(),
    W(),
    d(),
    u(),
    Y(),
    b(),
    X(),
    f(),
    x(),
    g(),
    Pe(),
    ee(),
    R(),
    Le(),
    we(),
    S(),
    qe(),
    ($ = l()),
    (at = `appgen-settings-site-title-error`));
})();
export { Je as AppgenSettingsPage };
//# sourceMappingURL=appgen-settings-page.js.map
