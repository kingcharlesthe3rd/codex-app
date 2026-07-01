import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  AV as r,
  CV as i,
  DV as a,
  EB as o,
  GN as s,
  Hf as c,
  QN as l,
  Qz as u,
  RV as d,
  Uf as f,
  WN as p,
  XO as m,
  Xz as h,
  YO as g,
  _M as _,
  bB as v,
  gM as y,
  jV as b,
  lp as x,
  pf as S,
  uB as C,
  uf as w,
  xV as T,
  yp as E,
  zV as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
function O(e) {
  return [...R, e];
}
function k(e) {
  return [...z, e];
}
async function A(e) {
  try {
    return (await m(`get-windows-sandbox-readiness-for-host`, { hostId: e })).status;
  } catch (e) {
    throw (
      n.error(`Failed to load Windows sandbox readiness`, { safe: {}, sensitive: { error: e } }), e
    );
  }
}
function j(e) {
  let t = (0, F.c)(8),
    i = o(x),
    s = e ?? i,
    c;
  t[0] === s ? (c = t[1]) : ((c = O(s)), (t[0] = s), (t[1] = c));
  let l = c,
    u = r(),
    d;
  t[2] !== u || t[3] !== s
    ? ((d = async () => {
        try {
          return P((await w(u, s, null, !1)).config.windows);
        } catch (e) {
          let t = e;
          return (
            n.error(`Failed to load Windows sandbox mode`, {
              safe: { error: String(t) },
              sensitive: {},
            }),
            null
          );
        }
      }),
      (t[2] = u),
      (t[3] = s),
      (t[4] = d))
    : (d = t[4]);
  let f;
  return (
    t[5] !== l || t[6] !== d
      ? ((f = { queryKey: l, queryFn: d, staleTime: p.ONE_MINUTE }),
        (t[5] = l),
        (t[6] = d),
        (t[7] = f))
      : (f = t[7]),
    a(f)
  );
}
function M(e) {
  let t = (0, F.c)(8),
    n = o(x),
    r = e?.hostId ?? n,
    i;
  t[0] === r ? (i = t[1]) : ((i = k(r)), (t[0] = r), (t[1] = i));
  let s;
  t[2] === r ? (s = t[3]) : ((s = () => A(r)), (t[2] = r), (t[3] = s));
  let c = e?.enabled ?? !0,
    l;
  return (
    t[4] !== i || t[5] !== s || t[6] !== c
      ? ((l = {
          queryKey: i,
          queryFn: s,
          staleTime: p.INFINITE,
          retry: !1,
          retryOnMount: !1,
          enabled: c,
        }),
        (t[4] = i),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    a(l)
  );
}
function N(e) {
  let t = (0, F.c)(19),
    a = o(x),
    s = e ?? a,
    c = r(),
    l = f(),
    u;
  t[0] === s ? (u = t[1]) : ((u = O(s)), (t[0] = s), (t[1] = u));
  let d = u,
    p;
  t[2] === s ? (p = t[3]) : ((p = k(s)), (t[2] = s), (t[3] = p));
  let h = p,
    g;
  t[4] === s
    ? (g = t[5])
    : ((g = (e) =>
        m(`batch-write-config-value-for-host`, {
          hostId: s,
          edits: [
            {
              keyPath: `windows.sandbox`,
              value: e,
              mergeStrategy: e == null ? `replace` : `upsert`,
            },
          ],
          filePath: null,
          expectedVersion: null,
        })),
      (t[4] = s),
      (t[5] = g));
  let _, v;
  t[6] !== c || t[7] !== d
    ? ((_ = (e) => {
        let t = c.getQueryData(d);
        return (c.setQueryData(d, e), { previousMode: t });
      }),
      (v = (e, t, r) => {
        (n.error(`Failed to update Windows sandbox mode`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          r?.previousMode !== void 0 && c.setQueryData(d, r.previousMode));
      }),
      (t[6] = c),
      (t[7] = d),
      (t[8] = _),
      (t[9] = v))
    : ((_ = t[8]), (v = t[9]));
  let y;
  t[10] !== l || t[11] !== d || t[12] !== h
    ? ((y = async () => {
        await Promise.all([l(d), l(h)]);
      }),
      (t[10] = l),
      (t[11] = d),
      (t[12] = h),
      (t[13] = y))
    : (y = t[13]);
  let b;
  return (
    t[14] !== g || t[15] !== _ || t[16] !== v || t[17] !== y
      ? ((b = { mutationFn: g, onMutate: _, onError: v, onSettled: y }),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v),
        (t[17] = y),
        (t[18] = b))
      : (b = t[18]),
    i(b)
  );
}
function P(e) {
  let t = L.safeParse(e);
  return t.success ? (t.data.sandbox ?? null) : null;
}
var F,
  I,
  L,
  R,
  z,
  B = e(() => {
    ((F = d()),
      T(),
      v(),
      h(),
      E(),
      g(),
      S(),
      c(),
      l(),
      s(),
      (I = u([`elevated`, `unelevated`])),
      (L = C({ sandbox: I.optional() }).passthrough()),
      (R = [`windows-sandbox`, `mode`]),
      (z = [`windows-sandbox`, `readiness`]));
  }),
  V,
  H,
  U = e(() => {
    (t(D()),
      (V = b()),
      (H = (e) =>
        (0, V.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, V.jsx)(`path`, {
              d: `M10 12.668C11.7333 12.668 13.331 13.1693 14.5117 14.0127C15.691 14.8551 16.4989 16.0791 16.499 17.5C16.4988 17.8669 16.2009 18.1647 15.834 18.165C15.4668 18.165 15.1691 17.8671 15.1689 17.5C15.1688 16.62 14.6699 15.7602 13.7383 15.0947C12.8078 14.4302 11.488 13.9981 10 13.998C8.51211 13.9981 7.19214 14.4303 6.26172 15.0947C5.33026 15.7602 4.83215 16.6201 4.83203 17.5C4.83186 17.867 4.53404 18.1649 4.16699 18.165C3.79983 18.165 3.50213 17.8671 3.50195 17.5C3.50207 16.0791 4.3099 14.8551 5.48926 14.0127C6.66991 13.1695 8.26685 12.668 10 12.668Z`,
              fill: `currentColor`,
            }),
            (0, V.jsx)(`path`, {
              d: `M7.91699 5C8.60724 5.00013 9.16699 5.55973 9.16699 6.25C9.16699 6.94027 8.60724 7.49987 7.91699 7.5C7.22664 7.5 6.66699 6.94036 6.66699 6.25C6.66699 5.55964 7.22664 5 7.91699 5Z`,
              fill: `currentColor`,
            }),
            (0, V.jsx)(`path`, {
              d: `M12.083 5C12.7734 5 13.333 5.55964 13.333 6.25C13.333 6.94036 12.7734 7.5 12.083 7.5C11.3928 7.49987 10.833 6.94027 10.833 6.25C10.833 5.55973 11.3928 5.00013 12.083 5Z`,
              fill: `currentColor`,
            }),
            (0, V.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M10 1.00195C10.3673 1.00195 10.665 1.29972 10.665 1.66699V2.25195H13.1113C13.554 2.25195 13.9248 2.25137 14.2275 2.27539C14.5377 2.30004 14.8331 2.35361 15.1143 2.49219C15.5745 2.71921 15.9478 3.09243 16.1748 3.55273C16.3133 3.83385 16.367 4.12942 16.3916 4.43945C16.4156 4.74209 16.415 5.11318 16.415 5.55566C16.415 6.45208 16.4157 7.16418 16.3701 7.7373C16.324 8.31755 16.2274 8.81322 16.0029 9.26855C15.6137 10.0577 14.9746 10.6967 14.1855 11.0859C13.73 11.3105 13.2339 11.407 12.6533 11.4531C12.0802 11.4987 11.369 11.499 10.4727 11.499H9.52734C8.631 11.499 7.91978 11.4987 7.34668 11.4531C6.76612 11.407 6.26997 11.3105 5.81445 11.0859C5.02538 10.6967 4.38629 10.0577 3.99707 9.26855C3.77258 8.81322 3.67603 8.31755 3.62988 7.7373C3.58434 7.16418 3.58496 6.45208 3.58496 5.55566C3.58496 5.11318 3.5844 4.74209 3.6084 4.43945C3.63303 4.12942 3.6867 3.83385 3.8252 3.55273C4.05219 3.09243 4.42545 2.71921 4.88574 2.49219C5.16693 2.35361 5.46234 2.30004 5.77246 2.27539C6.07515 2.25137 6.44604 2.25195 6.88867 2.25195H9.33496V1.66699C9.33496 1.29972 9.63273 1.00195 10 1.00195ZM6.88867 3.58203C6.42452 3.58203 6.11484 3.58266 5.87695 3.60156C5.64679 3.61988 5.54082 3.65242 5.47363 3.68555C5.27602 3.78307 5.11605 3.94299 5.01855 4.14062C4.98547 4.20782 4.95287 4.31406 4.93457 4.54395C4.91569 4.78179 4.91504 5.09172 4.91504 5.55566C4.91504 6.47338 4.91567 7.1236 4.95605 7.63184C4.99587 8.13234 5.07138 8.43926 5.19043 8.68066C5.45025 9.20725 5.87667 9.63384 6.40332 9.89355C6.64477 10.0126 6.9515 10.0881 7.45215 10.1279C7.96034 10.1683 8.60976 10.1689 9.52734 10.1689H10.4727C11.3902 10.1689 12.0397 10.1683 12.5479 10.1279C13.0485 10.0881 13.3552 10.0126 13.5967 9.89355C14.1233 9.63384 14.5498 9.20725 14.8096 8.68066C14.9286 8.43926 15.0041 8.13234 15.0439 7.63184C15.0843 7.1236 15.085 6.47338 15.085 5.55566C15.085 5.09172 15.0843 4.78179 15.0654 4.54395C15.0471 4.31406 15.0145 4.20782 14.9814 4.14062C14.884 3.94299 14.724 3.78307 14.5264 3.68555C14.4592 3.65242 14.3532 3.61988 14.123 3.60156C13.8852 3.58266 13.5755 3.58203 13.1113 3.58203H6.88867Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function W(e) {
  return e ?? Y;
}
function G({ mode: e, visible: t, settings: n }) {
  return { ...W(n), [e]: t };
}
function K({
  canShowDefaultPermissions: e,
  canSelectGuardianMode: t,
  canShowConfigCustom: n,
  canShowConfigFullAccess: r,
  canShowGuardianOption: i,
  selectionAgentModes: a,
  visibleAgentModes: o,
}) {
  let s = r && o.includes(`full-access`),
    c = n && a.includes(`custom`),
    l = i;
  return {
    canShowCustom: c,
    canShowFullAccess: s,
    optionCount: (e ? 1 : 0) + (l && t ? 1 : 0) + (s ? 1 : 0) + (c ? 1 : 0),
    showGuardianOption: l,
  };
}
function q({ availableAgentModes: e, visibility: t }) {
  return e.filter((e) => {
    switch (e) {
      case `guardian-approvals`:
        return t[`guardian-approvals`];
      case `full-access`:
        return t[`full-access`];
      case `custom`:
        return !1;
      case `auto`:
      case `granular`:
      case `read-only`:
        return !0;
    }
  });
}
function J({ availableAgentModes: e, visibleAgentModes: t }) {
  return e.includes(`custom`) ? [...t, `custom`] : t;
}
var Y,
  X,
  Z = e(() => {
    (y(),
      (Y = { "guardian-approvals": !0, "full-access": !0 }),
      (X = _(`composer-permission-mode-visibility`, Y)));
  });
export {
  q as a,
  H as c,
  k as d,
  B as f,
  M as h,
  J as i,
  U as l,
  j as m,
  W as n,
  Z as o,
  N as p,
  K as r,
  G as s,
  X as t,
  O as u,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d4gukj65.js.map
