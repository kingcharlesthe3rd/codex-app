import { n as e } from "./rolldown-runtime.js";
import {
  Bt as t,
  Ct as n,
  Dt as r,
  Et as i,
  Ft as a,
  Pt as o,
  Tl as s,
  Tt as c,
  _l as l,
  cl as u,
  ml as ee,
  ul as d,
  vi as f,
  wt as p,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  By as m,
  Gy as h,
  Hy as te,
  Ib as ne,
  Vb as re,
  qy as ie,
} from "./app-initial~app-main~new-thread-panel-page.js";
function g(e) {
  let t = P(e)?.split(/\s+/) ?? [],
    n = `${t[0]?.charAt(0) ?? ``}${t.length > 1 ? (t.at(-1)?.charAt(0) ?? ``) : ``}`.toUpperCase();
  return n.length > 0 ? n : `?`;
}
function _(e) {
  let t = P(e);
  return t == null
    ? null
    : (H[t.toLowerCase()] ??
        t
          .split(/[_-]+/)
          .filter((e) => e.length > 0)
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(` `));
}
function v(e, t) {
  let n = Math.max(0, Math.round(t / 1e3));
  if (n >= 3600) {
    let t = Math.round(n / 60),
      r = Math.floor(t / 60),
      i = t % 60;
    return i === 0
      ? e.formatMessage(
          {
            id: `profile.stats.durationHours`,
            defaultMessage: `{hours}h`,
            description: `Formatted profile duration with hours`,
          },
          { hours: r },
        )
      : e.formatMessage(
          {
            id: `profile.stats.durationHoursMinutes`,
            defaultMessage: `{hours}h {minutes}m`,
            description: `Formatted profile duration with hours and minutes`,
          },
          { hours: r, minutes: i },
        );
  }
  if (n >= 60) {
    let t = Math.floor(n / 60),
      r = n % 60;
    return r === 0
      ? e.formatMessage(
          {
            id: `profile.stats.durationMinutes`,
            defaultMessage: `{minutes}m`,
            description: `Formatted profile duration with minutes`,
          },
          { minutes: t },
        )
      : e.formatMessage(
          {
            id: `profile.stats.durationMinutesSeconds`,
            defaultMessage: `{minutes}m {seconds}s`,
            description: `Formatted profile duration with minutes and seconds`,
          },
          { minutes: t, seconds: r },
        );
  }
  return e.formatMessage(
    {
      id: `profile.stats.durationSeconds`,
      defaultMessage: `{seconds}s`,
      description: `Formatted profile duration with seconds`,
    },
    { seconds: n },
  );
}
function ae(e, t) {
  return e.formatNumber(Math.max(0, Math.round(t ?? 0)), {
    maximumFractionDigits: 1,
    notation: `compact`,
  });
}
function oe(e, t) {
  return e.formatMessage(
    {
      id: `profile.stats.dayStreakValue`,
      defaultMessage: `{days, plural, one {# day} other {# days}}`,
      description: `Formatted day count for profile streak stats`,
    },
    { days: Math.max(0, Math.round(t ?? 0)) },
  );
}
function se({ accountStructure: e, plan: t, workspaceName: n }) {
  let r = P(n);
  return r != null && e?.toLowerCase() === `workspace` ? r : _(t);
}
function ce({ accountName: e, displayName: t, username: n }) {
  return t ?? n ?? e ?? null;
}
function y(e) {
  let t = e.trim();
  return t.startsWith(`@`) ? t.slice(1).trim() : t;
}
function le(e) {
  return e.replace(V, ``).slice(0, z);
}
function b(e) {
  let t = y(e);
  return t.length === 0
    ? { ok: !1, reason: `empty` }
    : t.length < R
      ? { ok: !1, reason: `tooShort` }
      : t.length > z
        ? { ok: !1, reason: `tooLong` }
        : B.test(t)
          ? { ok: !0, username: t }
          : { ok: !1, reason: `invalidCharacters` };
}
function ue({ dailyUsage: e, todayIso: t, view: n }) {
  let r = O({ columnCount: C(t), dailyUsage: e, startDateIso: w(t), todayIso: t });
  switch (n) {
    case `cumulative`:
      return ge(r);
    case `daily`:
      return T(r);
    case `weekly`:
      return he(r);
  }
}
function de({ dailyUsage: e, todayIso: t }) {
  let n = M(k(t), -175);
  return T(O({ columnCount: 26, dailyUsage: e, startDateIso: n, todayIso: t })).map((e, r) =>
    M(n, r) > t ? null : e,
  );
}
function fe({ dailyUsage: e, todayIso: t }) {
  return O({ columnCount: C(t), dailyUsage: e, startDateIso: w(t), todayIso: t });
}
function x({ dailyUsage: e, todayIso: t }) {
  let n = w(t),
    r = C(t),
    i = Array.from({ length: r }, () => 0),
    a = new Map(Array.from({ length: r }, (e, t) => [M(n, t * 7), t]));
  for (let n of e) {
    if (n.date > t) continue;
    let e = a.get(k(n.date));
    e != null && (i[e] += Math.max(0, n.credits));
  }
  return i;
}
function pe({ dailyUsage: e, todayIso: t }) {
  return D(x({ dailyUsage: e, todayIso: t }));
}
function S(e = new Date()) {
  let t = String(e.getMonth() + 1).padStart(2, `0`),
    n = String(e.getDate()).padStart(2, `0`);
  return `${e.getFullYear()}-${t}-${n}`;
}
function C(e) {
  let t = new Date(`${k(e)}T00:00:00.000Z`).getTime(),
    n = new Date(`${L}T00:00:00.000Z`).getTime(),
    r = Math.floor((t - n) / (10080 * 60 * 1e3));
  return Math.min(I, Math.max(1, r + 1));
}
function w(e) {
  return M(k(e), -(C(e) - 1) * 7);
}
function me(e, t) {
  return M(w(t), e);
}
function T(e) {
  let t = N(e);
  return e.map((e) => ve(e, t));
}
function he(e) {
  return E(A(e));
}
function ge(e) {
  return E(D(A(e)));
}
function E(e) {
  let t = N(e);
  return Array.from({ length: e.length * 7 }, (n, r) => {
    let i = r % 7,
      a = _e(e[Math.floor(r / 7)] ?? 0, t),
      o = 7 - i;
    return a === 0 || o > a ? 0 : 4;
  });
}
function D(e) {
  return e.reduce((e, t) => (e.push((e.at(-1) ?? 0) + t), e), []);
}
function _e(e, t) {
  return e <= 0 || t <= 0 ? 0 : Math.max(1, Math.ceil((e / t) * 7));
}
function O({ columnCount: e, dailyUsage: t, startDateIso: n, todayIso: r }) {
  let i = j(t.filter((e) => e.date <= r));
  return Array.from({ length: e * 7 }, (e, t) => i.get(M(n, t)) ?? 0);
}
function k(e) {
  let t = new Date(`${e}T00:00:00.000Z`);
  return (t.setUTCDate(t.getUTCDate() - t.getUTCDay()), t.toISOString().slice(0, 10));
}
function A(e) {
  return Array.from({ length: Math.ceil(e.length / 7) }, (t, n) =>
    e.slice(n * 7, n * 7 + 7).reduce((e, t) => e + t, 0),
  );
}
function ve(e, t) {
  if (e <= 0 || t <= 0) return 0;
  let n = e / t;
  return n > 0.75 ? 4 : n > 0.5 ? 3 : n > 0.25 ? 2 : 1;
}
function j(e) {
  return e.reduce(
    (e, t) => (e.set(t.date, (e.get(t.date) ?? 0) + Math.max(0, t.credits)), e),
    new Map(),
  );
}
function M(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`);
  return (n.setUTCDate(n.getUTCDate() + t), n.toISOString().slice(0, 10));
}
function N(e) {
  return e.reduce((e, t) => Math.max(e, t), 0);
}
function P(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    ((F = class extends Error {
      constructor(e) {
        (super(e), (this.reason = e));
      }
    }),
      (I = 52),
      (L = `2025-07-13`),
      (R = 3),
      (z = 20),
      (B = /^[a-z0-9._-]+$/),
      (V = /\s/g),
      (H = {
        business: `Enterprise`,
        enterprise: `Enterprise`,
        enterprise_cbp_automation: `Enterprise`,
        enterprise_cbp_usage_based: `Enterprise`,
        free: `Free`,
        free_workspace: `Free`,
        go: `Go`,
        guest: `Free`,
        plus: `Plus`,
        pro: `Pro`,
        prolite: `Pro`,
        self_serve_business_usage_based: `Business`,
        team: `Business`,
      }));
  });
function W({ accountId: e, userId: t }) {
  return [`profile`, `usage`, t ?? null, e ?? null];
}
function ye(e) {
  let t = (0, X.c)(13),
    { accountId: r, enabled: o, userId: s } = e,
    c = re(Z),
    l;
  t[0] === c ? (l = t[1]) : ((l = c.get(Q, i.SIX_HOURS)), (t[0] = c), (t[1] = l));
  let u = l,
    d;
  t[2] !== r || t[3] !== s
    ? ((d = W({ accountId: r, userId: s })), (t[2] = r), (t[3] = s), (t[4] = d))
    : (d = t[4]);
  let f = o && !0,
    p;
  t[5] !== r || t[6] !== s
    ? ((p = async () => {
        let e = r != null,
          t = s != null;
        (!e || !t) &&
          a.warning(`profile_usage_query_started_without_identity`, {
            safe: { hasAccountId: e, hasUserId: t },
            sensitive: {},
          });
        try {
          return await Ce();
        } catch (r) {
          let i = r;
          throw (
            a.warning(`profile_usage_query_failed`, {
              safe: {
                errorCode: i instanceof n ? (i.errorCode ?? null) : null,
                hasAccountId: e,
                hasUserId: t,
                status: i instanceof n ? i.status : null,
              },
              sensitive: {},
            }),
            i
          );
        }
      }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = p))
    : (p = t[7]);
  let m;
  return (
    t[8] !== u || t[9] !== d || t[10] !== f || t[11] !== p
      ? ((m = { queryKey: d, enabled: f, queryFn: p, staleTime: u }),
        (t[8] = u),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    ee(m)
  );
}
function be(e) {
  let t = (0, X.c)(6),
    { accountId: n, userId: r } = e,
    i = l(),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = W({ accountId: n, userId: r })), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  return (
    t[3] !== i || t[4] !== o
      ? ((s = {
          mutationFn: Te,
          onSuccess: (e) => {
            Ee(i, o, e);
          },
        }),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    d(s)
  );
}
function xe(e) {
  let t = (0, X.c)(6),
    { accountId: n, userId: r } = e,
    i = l(),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = W({ accountId: n, userId: r })), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  return (
    t[3] !== i || t[4] !== o
      ? ((s = {
          mutationFn: K,
          onSuccess: (e, t) => {
            let n = i.getQueryData(o);
            n != null && i.setQueryData(o, { ...n, username: y(t) || null });
          },
        }),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    d(s)
  );
}
function Se(e) {
  let t = (0, X.c)(6),
    { accountId: n, userId: r } = e,
    i = l(),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = W({ accountId: n, userId: r })), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  return (
    t[3] !== i || t[4] !== o
      ? ((s = {
          mutationFn: async (e) => {
            let t = await we(e),
              n = i.getQueryData(o);
            n != null && i.setQueryData(o, { ...n, imageUrl: t });
          },
        }),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    d(s)
  );
}
async function Ce() {
  let e = await m.safeGet(`/wham/profiles/me`);
  return {
    activityInsights: Y(e.stats),
    dailyUsage:
      e.stats.daily_usage_buckets == null
        ? null
        : e.stats.daily_usage_buckets.map((e) => ({ credits: e.tokens, date: e.start_date })),
    displayName: e.profile.display_name?.trim() || null,
    hasStatsError: !!e.metadata.stats_error?.trim(),
    imageUrl: J(e),
    summary: {
      currentStreakDays: e.stats.current_streak_days ?? null,
      longestStreakDays: e.stats.longest_streak_days ?? null,
      longestTaskDurationMs:
        e.stats.longest_running_turn_sec == null ? null : e.stats.longest_running_turn_sec * 1e3,
      peakTokens: e.stats.peak_daily_tokens ?? null,
      totalTextTokens: e.stats.lifetime_tokens ?? null,
    },
    username: e.profile.username?.trim() || null,
  };
}
async function we(e) {
  return J(await q({ profile_asset_pointer: await G(e) }));
}
async function G(e) {
  let t = Oe();
  return (
    await p
      .getInstance()
      .post(`/wham/profiles/me/photo`, h(await De(e, t)), {
        "Content-Type": `multipart/form-data; boundary=${t}`,
        [f]: `1`,
      })
  ).body.asset_pointer;
}
async function Te(e) {
  let t = {};
  if ((e.displayName != null && (t.display_name = e.displayName), e.photo != null))
    try {
      t.profile_asset_pointer = await G(e.photo);
    } catch (e) {
      throw new $(e);
    }
  return q(t);
}
async function K(e) {
  let t = b(e);
  if (!t.ok) throw new F(t.reason);
  await q({ username: t.username });
}
async function q(e) {
  return m.safePatch(`/wham/profiles/me`, { requestBody: e });
}
function Ee(e, t, n) {
  let r = e.getQueryData(t);
  r != null &&
    e.setQueryData(t, {
      ...r,
      activityInsights: Y(n.stats),
      displayName: n.profile.display_name?.trim() || null,
      hasStatsError: !!n.metadata.stats_error?.trim(),
      imageUrl: J(n),
    });
}
function J(e) {
  return e.profile.profile_picture_url?.trim() || null;
}
function Y(e) {
  return {
    fastModePercent: e.fast_mode_usage_percentage,
    invocations: e.top_invocations,
    reasoningEffort: e.most_used_reasoning_effort,
    reasoningEffortPercent: e.most_used_reasoning_effort_percentage,
    skillsExplored: e.unique_skills_used,
    totalSkillsUsed: e.total_skills_used,
    totalThreads: e.total_threads,
  };
}
async function De(e, t) {
  let n = new TextEncoder(),
    r = new Uint8Array(await e.arrayBuffer()),
    i = e.type.trim() || `application/octet-stream`,
    a = e.name.trim().replace(/[\r\n"]/g, ``) || `profile-photo`;
  return ke([
    n.encode(`--${t}\r\n`),
    n.encode(`Content-Disposition: form-data; name="file"; filename="${a}"\r\n`),
    n.encode(`Content-Type: ${i}\r\n\r\n`),
    r,
    n.encode(`\r\n--${t}--\r\n`),
  ]);
}
function Oe() {
  return typeof crypto < `u` && `randomUUID` in crypto
    ? `----codex-profile-photo-${crypto.randomUUID()}`
    : `----codex-profile-photo-${Math.random().toString(36).slice(2)}`;
}
function ke(e) {
  let t = 0;
  for (let n of e) t += n.byteLength;
  let n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.byteLength));
  return n;
}
var X,
  Z,
  Q,
  $,
  Ae = e(() => {
    ((X = s()),
      u(),
      t(),
      ne(),
      ie(),
      o(),
      r(),
      te(),
      c(),
      U(),
      (Z = `3503973010`),
      (Q = `profile_usage_query_stale_time_ms`),
      ($ = class extends Error {
        constructor(e) {
          (super(`Profile photo upload failed`), (this.uploadError = e));
        }
      }));
  });
export {
  pe as C,
  U as E,
  C as S,
  x as T,
  le as _,
  Se as a,
  me as b,
  ae as c,
  v as d,
  y as f,
  de as g,
  ce as h,
  be as i,
  oe as l,
  se as m,
  Ae as n,
  xe as o,
  g as p,
  ye as r,
  F as s,
  $ as t,
  _ as u,
  b as v,
  fe as w,
  ue as x,
  S as y,
};
//# sourceMappingURL=app-initial~app-main~onboarding-page~profile.js.map
