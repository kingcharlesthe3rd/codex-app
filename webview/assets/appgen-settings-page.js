import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  ac as a,
  cc as o,
  kl as s,
  oc as c,
  tc as l,
  xl as u,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  $ as d,
  et as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  Aa as p,
  Ba as m,
  Es as h,
  Go as g,
  Ho as _,
  Ia as v,
  Jp as y,
  Ma as b,
  Na as x,
  Ra as S,
  Ts as C,
  Uo as w,
  Wo as T,
  Xp as E,
  Yp as D,
  Zp as O,
  _n as k,
  gn as A,
  ja as j,
  op as M,
  sp as N,
  xs as P,
  ys as F,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Kl as I,
  Zl as L,
  aw as R,
  cd as z,
  cu as B,
  cw as V,
  fd as H,
  hd as U,
  ld as W,
  ou as G,
  pd as ee,
  ud as K,
  uw as te,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  h as ne,
  p as re,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Xn as ie,
  Yn as ae,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Dt as q,
  Et as oe,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  $r as se,
  Gr as ce,
  Kr as le,
  Mt as ue,
  Ur as de,
  Yr as fe,
  jt as pe,
  qr as me,
} from "./app-initial~app-main~onboarding-page.js";
import {
  n as he,
  t as ge,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  c as _e,
  i as ve,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page.js";
import {
  n as ye,
  t as be,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~remote-conversation-page~plugin-detai~cz5yd1fx.js";
import {
  n as J,
  t as xe,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as Y,
  t as X,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as Se, t as Ce } from "./toolbar-breadcrumb-Come-WRs.js";
import { n as we, t as Te } from "./appgen-share-dialog-1.js";
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
    ? ((d = (0, Z.jsx)(M, { className: `icon-xs` })), (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== n || t[5] !== l || t[6] !== u
    ? ((f = (0, Z.jsxs)(y, {
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
    ? ((p = (0, Z.jsx)(X.Header, { actions: f, subtitle: o, title: s, titleGap: `none` })),
      (t[8] = o),
      (t[9] = f),
      (t[10] = s),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== l || t[13] !== i || t[14] !== a || t[15] !== c
    ? ((m = (0, Z.jsx)(X.Content, {
        children: (0, Z.jsx)(xe, {
          children:
            i.length === 0
              ? (0, Z.jsx)(De, {
                  children: (0, Z.jsx)(V, {
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
      ? ((h = (0, Z.jsxs)(X, { className: `gap-2`, children: [p, m] })),
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
    c = te(),
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
  let b;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(oe, { className: `icon-2xs` })), (t[30] = b))
    : (b = t[30]);
  let x;
  t[31] !== n || t[32] !== o || t[33] !== v
    ? ((x = (0, Z.jsx)(y, {
        "aria-label": v,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: o,
        children: b,
      })),
      (t[31] = n),
      (t[32] = o),
      (t[33] = v),
      (t[34] = x))
    : (x = t[34]);
  let S;
  return (
    t[35] !== x || t[36] !== p || t[37] !== _
      ? ((S = (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
          children: [p, _, x],
        })),
        (t[35] = x),
        (t[36] = p),
        (t[37] = _),
        (t[38] = S))
      : (S = t[38]),
    S
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
    ((Ke = r()), R(), D(), N(), q(), Ee(), Y(), J(), He(), (Z = u()));
  });
function Je() {
  let e = (0, Q.c)(3),
    { projectId: t } = B();
  if (t == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(L, { replace: !0, to: `/sites` })), (e[0] = t))
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
    { data: r, isError: i, isLoading: o } = a(K, n),
    { data: s, isError: c, isLoading: l } = a(W, n),
    u = r?.current_live_url,
    f;
  t[0] === u ? (f = t[1]) : ((f = ae(u)), (t[0] = u), (t[1] = f));
  let p = f,
    m = r?.title,
    h;
  t[2] !== u || t[3] !== m
    ? ((h = (0, $.jsx)(Xe, { liveUrl: u, siteTitle: m })), (t[2] = u), (t[3] = m), (t[4] = h))
    : (h = t[4]);
  let g = h,
    _;
  t[5] === g
    ? (_ = t[6])
    : ((_ = (0, $.jsx)(C, { extension: !0, children: g })), (t[5] = g), (t[6] = _));
  let v;
  t[7] === g
    ? (v = t[8])
    : ((v = (0, $.jsx)(C, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(d.Header, { children: g }),
      })),
      (t[7] = g),
      (t[8] = v));
  let y;
  t[9] !== s ||
  t[10] !== c ||
  t[11] !== l ||
  t[12] !== i ||
  t[13] !== o ||
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== p
    ? ((y = (0, $.jsx)(`div`, {
        className: `scrollbar-stable flex min-h-0 flex-1 overflow-y-auto p-panel`,
        children: (0, $.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-[var(--padding-panel)]`,
          children:
            o || l
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
                          p == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                className: `truncate text-xs text-token-text-tertiary`,
                                children: p,
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
      (t[13] = o),
      (t[14] = n),
      (t[15] = r),
      (t[16] = p),
      (t[17] = y))
    : (y = t[17]);
  let b;
  return (
    t[18] !== _ || t[19] !== v || t[20] !== y
      ? ((b = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [_, v, y],
        })),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function Xe(e) {
  let t = (0, Q.c)(13),
    { liveUrl: n, siteTitle: r } = e,
    i = G(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(V, {
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
            i(ve);
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
          : (0, $.jsxs)(y, {
              color: `outline`,
              size: `toolbar`,
              onClick: (e) => {
                P({ event: e, href: n, initiator: `mcp_app_resource` });
              },
              children: [
                (0, $.jsx)(ge, { className: `icon-xs`, ExternalIcon: A, href: n }),
                (0, $.jsx)(V, {
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
    { accessPolicy: r, environment: i, projectId: o, siteSlug: s, siteTitle: l } = e,
    u = c(n),
    d = a(H, o),
    f = a(ee, o),
    p = te(),
    [h, g] = (0, it.useState)(null),
    [_, v] = (0, it.useState)(null),
    [b, x] = (0, it.useState)(!1),
    S;
  t[0] !== i || t[1] !== h?.draft
    ? ((S = h?.draft ?? Oe(i)), (t[0] = i), (t[1] = h?.draft), (t[2] = S))
    : (S = t[2]);
  let C = S,
    w;
  t[3] === h
    ? (w = t[4])
    : ((w = h == null ? null : ke(h.baseEnvironment, h.draft)), (t[3] = h), (t[4] = w));
  let T = w,
    E;
  t[5] !== _ || t[6] !== b || t[7] !== l
    ? ((E = Fe(_, l, b)), (t[5] = _), (t[6] = b), (t[7] = l), (t[8] = E))
    : (E = t[8]);
  let { isInvalid: D, title: O, update: k } = E,
    A = h != null && T == null,
    j = d.isPending || f.isPending,
    M = j || D || A || (k == null && T == null),
    N;
  t[9] === i
    ? (N = t[10])
    : ((N = function (e) {
        g((t) => {
          let n = t?.baseEnvironment ?? i,
            r = Oe(n),
            a = e(t?.draft ?? r);
          return (0, rt.default)(a, r) ? null : { baseEnvironment: n, draft: a };
        });
      }),
      (t[9] = i),
      (t[10] = N));
  let P = N,
    F;
  t[11] !== T ||
  t[12] !== p ||
  t[13] !== M ||
  t[14] !== u ||
  t[15] !== k ||
  t[16] !== d.mutateAsync ||
  t[17] !== f
    ? ((F = (e) => {
        (e.preventDefault(),
          !M &&
            Ie({
              environmentUpdate: T,
              titleUpdate: k,
              updateEnvironment: d.mutateAsync,
              updateTitle: f.mutateAsync,
            }).then((e) => {
              let { environmentSaved: t, titleSaved: n } = e;
              (n ? (v(null), x(!1)) : x(!0),
                t && g(null),
                (!n || !t) &&
                  u
                    .get(ne)
                    .danger(
                      p.formatMessage({
                        id: `appgenSettings.save.error`,
                        defaultMessage: `Unable to save site settings`,
                        description: `Error toast shown when saving site settings fails`,
                      }),
                    ));
            }));
      }),
      (t[11] = T),
      (t[12] = p),
      (t[13] = M),
      (t[14] = u),
      (t[15] = k),
      (t[16] = d.mutateAsync),
      (t[17] = f),
      (t[18] = F))
    : (F = t[18]);
  let I;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(V, {
          id: `appgenSettings.general.title`,
          defaultMessage: `General`,
          description: `Section heading for general Site information on the Site settings page`,
        }),
      })),
      (t[19] = I))
    : (I = t[19]);
  let L, R;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(V, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Title`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (R = (0, $.jsx)(V, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (t[20] = L),
      (t[21] = R))
    : ((L = t[20]), (R = t[21]));
  let z;
  t[22] === p
    ? (z = t[23])
    : ((z = p.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (t[22] = p),
      (t[23] = z));
  let B = D ? at : void 0,
    U;
  t[24] === l
    ? (U = t[25])
    : ((U = (e) => {
        (x(!1), v(e.target.value === l ? null : e.target.value));
      }),
      (t[24] = l),
      (t[25] = U));
  let W;
  t[26] !== _ || t[27] !== b || t[28] !== l
    ? ((W = () => {
        !b && _?.trim() === l && v(null);
      }),
      (t[26] = _),
      (t[27] = b),
      (t[28] = l),
      (t[29] = W))
    : (W = t[29]);
  let G;
  t[30] !== D ||
  t[31] !== j ||
  t[32] !== B ||
  t[33] !== U ||
  t[34] !== W ||
  t[35] !== z ||
  t[36] !== O
    ? ((G = (0, $.jsxs)(X, {
        children: [
          I,
          (0, $.jsx)(X.Content, {
            children: (0, $.jsx)(xe, {
              children: (0, $.jsx)(pe, {
                className: `max-sm:flex-col max-sm:items-stretch`,
                label: L,
                description: R,
                control: (0, $.jsx)(`input`, {
                  "aria-label": z,
                  "aria-describedby": B,
                  "aria-invalid": D,
                  className: `w-[320px] max-w-full cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
                  disabled: j,
                  maxLength: 100,
                  type: `text`,
                  value: O,
                  onChange: U,
                  onBlur: W,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[30] = D),
      (t[31] = j),
      (t[32] = B),
      (t[33] = U),
      (t[34] = W),
      (t[35] = z),
      (t[36] = O),
      (t[37] = G))
    : (G = t[37]);
  let K;
  t[38] !== r || t[39] !== o
    ? ((K = r == null ? null : (0, $.jsx)(Qe, { accessPolicy: r, projectId: o })),
      (t[38] = r),
      (t[39] = o),
      (t[40] = K))
    : (K = t[40]);
  let re;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(V, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[41] = re))
    : (re = t[41]);
  let ie, ae;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, $.jsx)(V, {
        id: `appgenSettings.environmentVariables.description`,
        defaultMessage: `Settings your site uses while it runs, like URLs, names, or feature switches`,
        description: `Description for site environment variable settings`,
      })),
      (ae = (0, $.jsx)(V, {
        id: `appgenSettings.environmentVariables.title`,
        defaultMessage: `Environment variables`,
        description: `Heading for site environment variable settings`,
      })),
      (t[42] = ie),
      (t[43] = ae))
    : ((ie = t[42]), (ae = t[43]));
  let q;
  t[44] === P
    ? (q = t[45])
    : ((q = (e) => {
        P((t) => ({ ...t, environmentVariables: e }));
      }),
      (t[44] = P),
      (t[45] = q));
  let oe;
  t[46] !== C.environmentVariables || t[47] !== j || t[48] !== q
    ? ((oe = (0, $.jsx)(Ue, {
        addButtonLabel: re,
        disabled: j,
        entries: C.environmentVariables,
        subtitle: ie,
        title: ae,
        valueInputType: `text`,
        onChange: q,
      })),
      (t[46] = C.environmentVariables),
      (t[47] = j),
      (t[48] = q),
      (t[49] = oe))
    : (oe = t[49]);
  let se;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsx)(V, {
        id: `appgenSettings.secrets.add`,
        defaultMessage: `Add secret`,
        description: `Button label to add a site secret`,
      })),
      (t[50] = se))
    : (se = t[50]);
  let ce, le;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, $.jsx)(V, {
        id: `appgenSettings.secrets.description`,
        defaultMessage: `Sensitive setup info, like keys and passwords`,
        description: `Description for site secret settings`,
      })),
      (le = (0, $.jsx)(V, {
        id: `appgenSettings.secrets.title`,
        defaultMessage: `Secrets`,
        description: `Heading for site secret settings`,
      })),
      (t[51] = ce),
      (t[52] = le))
    : ((ce = t[51]), (le = t[52]));
  let ue;
  t[53] === P
    ? (ue = t[54])
    : ((ue = (e) => {
        P((t) => ({ ...t, secrets: e }));
      }),
      (t[53] = P),
      (t[54] = ue));
  let de;
  t[55] !== C.secrets || t[56] !== j || t[57] !== ue
    ? ((de = (0, $.jsx)(Ue, {
        addButtonLabel: se,
        disabled: j,
        entries: C.secrets,
        subtitle: ce,
        title: le,
        valueInputType: `password`,
        onChange: ue,
      })),
      (t[55] = C.secrets),
      (t[56] = j),
      (t[57] = ue),
      (t[58] = de))
    : (de = t[58]);
  let fe;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(V, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[59] = fe))
    : (fe = t[59]);
  let me, he;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(V, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (he = (0, $.jsx)(V, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[60] = me),
      (t[61] = he))
    : ((me = t[60]), (he = t[61]));
  let ge;
  t[62] !== o || t[63] !== u || t[64] !== s || t[65] !== l
    ? ((ge = () => {
        m(u, $e, { projectId: o, siteSlug: s, siteTitle: l });
      }),
      (t[62] = o),
      (t[63] = u),
      (t[64] = s),
      (t[65] = l),
      (t[66] = ge))
    : (ge = t[66]);
  let _e;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(V, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[67] = _e))
    : (_e = t[67]);
  let ve;
  t[68] === ge
    ? (ve = t[69])
    : ((ve = (0, $.jsxs)(X, {
        children: [
          fe,
          (0, $.jsx)(X.Content, {
            children: (0, $.jsx)(xe, {
              children: (0, $.jsx)(pe, {
                label: me,
                description: he,
                control: (0, $.jsx)(y, {
                  color: `danger`,
                  size: `toolbar`,
                  type: `button`,
                  onClick: ge,
                  children: _e,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[68] = ge),
      (t[69] = ve));
  let ye;
  t[70] !== A || t[71] !== D
    ? ((ye = D
        ? (0, $.jsx)(`p`, {
            id: at,
            className: `text-sm text-token-charts-red`,
            role: `alert`,
            children: (0, $.jsx)(V, {
              id: `appgenSettings.general.title.required`,
              defaultMessage: `Site title is required`,
              description: `Inline validation message below the Site settings form when the Site title is empty`,
            }),
          })
        : A
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-token-charts-red`,
              role: `alert`,
              children: (0, $.jsx)(V, {
                id: `appgenSettings.environmentKeys.duplicate`,
                defaultMessage: `Keys must be unique across environment variables and secrets`,
                description: `Validation shown when site environment settings use a duplicate key`,
              }),
            })
          : null),
      (t[70] = A),
      (t[71] = D),
      (t[72] = ye))
    : (ye = t[72]);
  let be;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(V, {
        id: `appgenSettings.save`,
        defaultMessage: `Save`,
        description: `Button for saving site settings`,
      })),
      (t[73] = be))
    : (be = t[73]);
  let J;
  t[74] !== M || t[75] !== j
    ? ((J = (0, $.jsx)(y, {
        className: `ml-auto`,
        disabled: M,
        loading: j,
        size: `toolbar`,
        type: `submit`,
        children: be,
      })),
      (t[74] = M),
      (t[75] = j),
      (t[76] = J))
    : (J = t[76]);
  let Y;
  t[77] !== ye || t[78] !== J
    ? ((Y = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 px-4 py-3`,
        children: [ye, J],
      })),
      (t[77] = ye),
      (t[78] = J),
      (t[79] = Y))
    : (Y = t[79]);
  let Se;
  return (
    t[80] !== G ||
    t[81] !== K ||
    t[82] !== oe ||
    t[83] !== de ||
    t[84] !== ve ||
    t[85] !== Y ||
    t[86] !== F
      ? ((Se = (0, $.jsxs)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: F,
          children: [G, K, oe, de, ve, Y],
        })),
        (t[80] = G),
        (t[81] = K),
        (t[82] = oe),
        (t[83] = de),
        (t[84] = ve),
        (t[85] = Y),
        (t[86] = F),
        (t[87] = Se))
      : (Se = t[87]),
    Se
  );
}
function Qe(e) {
  let t = (0, Q.c)(44),
    { accessPolicy: r, projectId: i } = e,
    a = c(n),
    o,
    s,
    l,
    u,
    d,
    f,
    p,
    h,
    g,
    _,
    v;
  t[0] === r
    ? ((o = t[1]),
      (s = t[2]),
      (l = t[3]),
      (u = t[4]),
      (d = t[5]),
      (f = t[6]),
      (p = t[7]),
      (h = t[8]),
      (g = t[9]),
      (_ = t[10]),
      (v = t[11]))
    : ((f = fe(r)),
      (d = X),
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((v = (0, $.jsx)(X.Header, {
            title: (0, $.jsx)(V, {
              id: `appgenSettings.sharing.title`,
              defaultMessage: `Sharing`,
              description: `Heading for site sharing settings`,
            }),
          })),
          (t[12] = v))
        : (v = t[12]),
      (u = X.Content),
      (l = xe),
      (s = pe),
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, $.jsx)(V, {
            id: `appgenSettings.sharing.label`,
            defaultMessage: `Sharing`,
            description: `Label for site sharing settings`,
          })),
          (t[13] = _))
        : (_ = t[13]),
      (h = `flex items-center gap-1`),
      (g = (0, $.jsx)(le, { "aria-hidden": !0, accessPolicy: r, className: `icon-2xs shrink-0` })),
      (o = V),
      (p = de(f)),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v));
  let b;
  t[14] !== o || t[15] !== f || t[16] !== p
    ? ((b = (0, $.jsx)(o, { ...p, values: f })), (t[14] = o), (t[15] = f), (t[16] = p), (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== h || t[19] !== g || t[20] !== b
    ? ((x = (0, $.jsxs)(`span`, { className: h, children: [g, b] })),
      (t[18] = h),
      (t[19] = g),
      (t[20] = b),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== i || t[23] !== a
    ? ((S = () => m(a, Te, { projectId: i })), (t[22] = i), (t[23] = a), (t[24] = S))
    : (S = t[24]);
  let C, w;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(be, { "aria-hidden": !0, className: `icon-xs` })),
      (C = (0, $.jsx)(V, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Share settings`,
        description: `Sharing settings button label`,
      })),
      (t[25] = C),
      (t[26] = w))
    : ((C = t[25]), (w = t[26]));
  let T;
  t[27] === S
    ? (T = t[28])
    : ((T = (0, $.jsxs)(y, { color: `outline`, size: `toolbar`, onClick: S, children: [w, C] })),
      (t[27] = S),
      (t[28] = T));
  let E;
  t[29] !== s || t[30] !== T || t[31] !== _ || t[32] !== x
    ? ((E = (0, $.jsx)(s, { label: _, description: x, control: T })),
      (t[29] = s),
      (t[30] = T),
      (t[31] = _),
      (t[32] = x),
      (t[33] = E))
    : (E = t[33]);
  let D;
  t[34] !== l || t[35] !== E
    ? ((D = (0, $.jsx)(l, { children: E })), (t[34] = l), (t[35] = E), (t[36] = D))
    : (D = t[36]);
  let O;
  t[37] !== u || t[38] !== D
    ? ((O = (0, $.jsx)(u, { children: D })), (t[37] = u), (t[38] = D), (t[39] = O))
    : (O = t[39]);
  let k;
  return (
    t[40] !== d || t[41] !== O || t[42] !== v
      ? ((k = (0, $.jsxs)(d, { children: [v, O] })),
        (t[40] = d),
        (t[41] = O),
        (t[42] = v),
        (t[43] = k))
      : (k = t[43]),
    k
  );
}
function $e(e) {
  let t = (0, Q.c)(49),
    { onClose: r, projectId: i, siteSlug: o, siteTitle: s } = e,
    l = c(n),
    u = a(z, i),
    d = te(),
    f = G(),
    [m, h] = (0, it.useState)(``),
    g;
  t[0] === s
    ? (g = t[1])
    : ((g = (0, $.jsx)(V, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: s },
      })),
      (t[0] = s),
      (t[1] = g));
  let v = g,
    S = u.isPending,
    C = !u.isPending,
    E;
  t[2] !== u.isPending || t[3] !== r
    ? ((E = (e) => {
        !e && !u.isPending && r();
      }),
      (t[2] = u.isPending),
      (t[3] = r),
      (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] !== m || t[6] !== u || t[7] !== d || t[8] !== f || t[9] !== r || t[10] !== l || t[11] !== o
    ? ((D = (e) => {
        (e.preventDefault(),
          !(m !== o || u.isPending) &&
            u.mutateAsync().then(
              () => {
                (l
                  .get(ne)
                  .success(
                    d.formatMessage({
                      id: `appgenSettings.deleteDialog.success`,
                      defaultMessage: `Site deleted`,
                      description: `Success toast shown after deleting a site`,
                    }),
                  ),
                  r(),
                  f(`/sites`));
              },
              () => {
                l.get(ne).danger(
                  d.formatMessage({
                    id: `appgenSettings.deleteDialog.error`,
                    defaultMessage: `Unable to delete site`,
                    description: `Error toast shown when deleting a site fails`,
                  }),
                );
              },
            ));
      }),
      (t[5] = m),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = r),
      (t[10] = l),
      (t[11] = o),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === v
    ? (O = t[14])
    : ((O = (0, $.jsx)(T, { className: `contents`, children: v })), (t[13] = v), (t[14] = O));
  let k;
  t[15] === o
    ? (k = t[16])
    : ((k = (0, $.jsx)(w, {
        className: `contents`,
        children: (0, $.jsx)(V, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
          values: { siteSlug: o, strong: et },
        }),
      })),
      (t[15] = o),
      (t[16] = k));
  let A;
  t[17] !== O || t[18] !== k
    ? ((A = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(b, { title: O, titleClassName: `truncate pr-8`, subtitle: k }),
      })),
      (t[17] = O),
      (t[18] = k),
      (t[19] = A))
    : (A = t[19]);
  let M;
  t[20] === d
    ? (M = t[21])
    : ((M = d.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[20] = d),
      (t[21] = M));
  let N;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        h(e.target.value);
      }),
      (t[22] = N))
    : (N = t[22]);
  let P;
  t[23] !== m || t[24] !== u.isPending || t[25] !== o || t[26] !== M
    ? ((P = (0, $.jsx)(x, {
        children: (0, $.jsx)(`input`, {
          "aria-label": M,
          autoFocus: !0,
          className: `w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          disabled: u.isPending,
          placeholder: o,
          spellCheck: !1,
          type: `text`,
          value: m,
          onChange: N,
        }),
      })),
      (t[23] = m),
      (t[24] = u.isPending),
      (t[25] = o),
      (t[26] = M),
      (t[27] = P))
    : (P = t[27]);
  let F;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(V, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[28] = F))
    : (F = t[28]);
  let I;
  t[29] !== u.isPending || t[30] !== r
    ? ((I = (0, $.jsx)(y, {
        color: `ghost`,
        disabled: u.isPending,
        type: `button`,
        onClick: r,
        children: F,
      })),
      (t[29] = u.isPending),
      (t[30] = r),
      (t[31] = I))
    : (I = t[31]);
  let L = m !== o || u.isPending,
    R;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(V, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[32] = R))
    : (R = t[32]);
  let B;
  t[33] !== u.isPending || t[34] !== L
    ? ((B = (0, $.jsx)(y, {
        color: `danger`,
        disabled: L,
        loading: u.isPending,
        type: `submit`,
        children: R,
      })),
      (t[33] = u.isPending),
      (t[34] = L),
      (t[35] = B))
    : (B = t[35]);
  let H;
  t[36] !== I || t[37] !== B
    ? ((H = (0, $.jsx)(x, { children: (0, $.jsxs)(j, { children: [I, B] }) })),
      (t[36] = I),
      (t[37] = B),
      (t[38] = H))
    : (H = t[38]);
  let U;
  t[39] !== P || t[40] !== H || t[41] !== D || t[42] !== A
    ? ((U = (0, $.jsxs)(p, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: D,
        children: [A, P, H],
      })),
      (t[39] = P),
      (t[40] = H),
      (t[41] = D),
      (t[42] = A),
      (t[43] = U))
    : (U = t[43]);
  let W;
  return (
    t[44] !== u.isPending || t[45] !== U || t[46] !== C || t[47] !== E
      ? ((W = (0, $.jsx)(_, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: S,
          showDialogClose: C,
          onOpenChange: E,
          children: U,
        })),
        (t[44] = u.isPending),
        (t[45] = U),
        (t[46] = C),
        (t[47] = E),
        (t[48] = W))
      : (W = t[48]),
    W
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
          children: (0, $.jsx)(E, {}),
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
            children: (0, $.jsx)(V, {
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
  ((Q = r()),
    (rt = t(o(), 1)),
    l(),
    (it = t(s(), 1)),
    R(),
    I(),
    f(),
    D(),
    g(),
    v(),
    F(),
    he(),
    S(),
    O(),
    re(),
    Se(),
    h(),
    k(),
    ye(),
    i(),
    Y(),
    ue(),
    J(),
    se(),
    me(),
    ce(),
    Pe(),
    U(),
    _e(),
    Le(),
    we(),
    ie(),
    qe(),
    ($ = u()),
    (at = `appgen-settings-site-title-error`));
})();
export { Je as AppgenSettingsPage };
//# sourceMappingURL=appgen-settings-page.js.map
