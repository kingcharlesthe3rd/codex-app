import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  BV as i,
  CS as a,
  DN as o,
  EV as s,
  FB as c,
  Ft as l,
  IB as u,
  It as d,
  JV as f,
  Lj as p,
  Nt as m,
  ON as h,
  QP as ee,
  Rj as g,
  Rt as _,
  SV as v,
  Ss as te,
  TS as ne,
  TV as re,
  UE as ie,
  Ud as ae,
  VE as oe,
  Vd as se,
  Wl as ce,
  Xl as le,
  aM as ue,
  dl as y,
  iF as de,
  kE as b,
  lE as fe,
  lF as pe,
  ll as me,
  oM as x,
  qV as he,
  sF as S,
  sl as ge,
  ul as _e,
  xs as C,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  Hi as ve,
  Vi as ye,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  $n as be,
  er as xe,
  nr as Se,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Gu as Ce,
  Tu as we,
  Wu as Te,
  wu as w,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  n as T,
  t as Ee,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy.js";
import { n as E, t as De } from "./page-search-input.js";
import { n as Oe, t as D } from "./use-element-in-view.js";
import {
  B as ke,
  G as Ae,
  I as je,
  J as O,
  L as Me,
  R as Ne,
  ct as Pe,
  st as Fe,
  v as Ie,
  y as Le,
  z as Re,
} from "./plugin-detail-page-1.js";
import {
  a as ze,
  c as Be,
  i as Ve,
  l as k,
  n as A,
  o as He,
  r as Ue,
  s as We,
  t as j,
  u as Ge,
} from "./plugins-page.js";
import { n as Ke, t as qe } from "./settings-host-dropdown.js";
function M() {
  let e = (0, F.c)(3),
    t;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { hostId: ie }), (e[0] = t))
      : (t = e[0]),
    te(t))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, L.jsx)(j, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let n;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, L.jsx)(N, {})), (e[2] = n))
      : (n = e[2]),
    n
  );
}
function N() {
  let e = (0, F.c)(103),
    t = c(ee),
    n = pe(),
    { data: r } = le(),
    i = _(),
    a = u(ae),
    l = ve(a),
    d;
  e[0] === a ? (d = e[1]) : ((d = a?.map(Xe)), (e[0] = a), (e[1] = d));
  let f = d,
    [m, h] = (0, I.useState)(ie),
    g;
  e[2] !== l || e[3] !== m ? ((g = Ce(m, l)), (e[2] = l), (e[3] = m), (e[4] = g)) : (g = e[4]);
  let v = g,
    [te, oe] = (0, I.useState)(null),
    [se, ce] = (0, I.useState)(null),
    y;
  e[5] !== se || e[6] !== te
    ? ((y = { container: te, target: se }), (e[5] = se), (e[6] = te), (e[7] = y))
    : (y = e[7]);
  let de = Oe(y),
    [b, me] = (0, I.useState)(``),
    [x, he] = (0, I.useState)(!1),
    C = re(ze),
    ye = s(ze),
    {
      forceReloadSkills: Se,
      installedSkillMatchKeys: we,
      isFetching: Te,
      isLoading: w,
      markSkillsUpdated: T,
      standaloneInstalledSkills: E,
      workspaceRoots: D,
    } = Ne(v),
    {
      canInstallRecommendedSkills: Ae,
      defaultRecommendedRepoRoot: je,
      skillCreatorPath: O,
    } = ke(v),
    { errorMessage: Pe, isLoading: Fe, refresh: Ie, repoRoot: Le, skills: Ve } = Re(je, v),
    k;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => {
        he(!0);
      }),
      (e[8] = k))
    : (k = e[8]);
  let A;
  e[9] !== Se || e[10] !== v
    ? ((A = { forceReloadSkills: Se, hostId: v, onInstalled: k }),
      (e[9] = Se),
      (e[10] = v),
      (e[11] = A))
    : (A = e[11]);
  let { installRecommendedSkill: Ue, installingSkillId: We } = Me(A),
    j;
  e[12] === n ? (j = e[13]) : ((j = be({ scope: `repo`, intl: n })), (e[12] = n), (e[13] = j));
  let Ge = j,
    Ke = r?.name ?? void 0,
    M;
  e[14] !== n || e[15] !== Ke
    ? ((M = be({ scope: `admin`, intl: n, adminLabel: Ke })),
      (e[14] = n),
      (e[15] = Ke),
      (e[16] = M))
    : (M = e[16]);
  let N = M,
    P;
  e[17] !== n || e[18] !== N || e[19] !== Ge || e[20] !== D
    ? ((P = (e) => {
        let { scope: t, skillPath: r } = e;
        return be({
          scope: t,
          intl: n,
          repoLabel: xe({ skillPath: r, roots: D, fallbackLabel: Ge }),
          adminLabel: N,
        });
      }),
      (e[17] = n),
      (e[18] = N),
      (e[19] = Ge),
      (e[20] = D),
      (e[21] = P))
    : (P = e[21]);
  let $e = P,
    R;
  if (e[22] !== b || e[23] !== E) {
    let t = b.trim().toLowerCase();
    ((R = E.filter((e) => {
      let { skill: n } = e;
      if (t.length === 0) return !0;
      let r = _e(n).toLowerCase(),
        i = ge(n).toLowerCase();
      return n.name.toLowerCase().includes(t) || i.includes(t) || r.includes(t);
    })),
      (e[22] = b),
      (e[23] = E),
      (e[24] = R));
  } else R = e[24];
  let tt = R,
    nt;
  e[25] !== T || e[26] !== Ie
    ? ((nt = async () => {
        (T(), await Ie(), he(!1));
      }),
      (e[25] = T),
      (e[26] = Ie),
      (e[27] = nt))
    : (nt = e[27]);
  let rt = nt,
    it;
  (e[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((it = []), (e[28] = it)) : (it = e[28]),
    (0, I.useEffect)(Ye, it));
  let z;
  e[29] === de
    ? (z = e[30])
    : ((z = de
        ? null
        : (0, L.jsx)(S, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (e[29] = de),
      (e[30] = z));
  let B;
  e[31] !== l || e[32] !== f || e[33] !== v
    ? ((B =
        l != null && l.length > 0 && f != null
          ? (0, L.jsx)(qe, {
              connectedRemoteConnections: l,
              onSelectHost: h,
              remoteConnectionHostIds: f,
              selectedHostId: v,
            })
          : null),
      (e[31] = l),
      (e[32] = f),
      (e[33] = v),
      (e[34] = B))
    : (B = e[34]);
  let at = x ? `secondary` : `ghost`,
    V;
  e[35] === rt
    ? (V = e[36])
    : ((V = () => {
        rt();
      }),
      (e[35] = rt),
      (e[36] = V));
  let ot = w || Te,
    st;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, L.jsx)(ue, { className: `icon-xs` })), (e[37] = st))
    : (st = e[37]);
  let H;
  e[38] === x
    ? (H = e[39])
    : ((H = (0, L.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: x
          ? (0, L.jsx)(S, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, L.jsx)(S, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (e[38] = x),
      (e[39] = H));
  let U;
  e[40] !== at || e[41] !== V || e[42] !== ot || e[43] !== H
    ? ((U = (0, L.jsxs)(o, {
        color: at,
        size: `toolbar`,
        onClick: V,
        disabled: ot,
        children: [st, H],
      })),
      (e[40] = at),
      (e[41] = V),
      (e[42] = ot),
      (e[43] = H),
      (e[44] = U))
    : (U = e[44]);
  let W;
  e[45] === n
    ? (W = e[46])
    : ((W = n.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (e[45] = n),
      (e[46] = W));
  let G;
  e[47] === n
    ? (G = e[48])
    : ((G = n.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (e[47] = n),
      (e[48] = G));
  let K;
  e[49] !== b || e[50] !== W || e[51] !== G
    ? ((K = (0, L.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, L.jsx)(De, {
          id: `skills-search`,
          label: W,
          placeholder: G,
          searchQuery: b,
          onSearchQueryChange: me,
        }),
      })),
      (e[49] = b),
      (e[50] = W),
      (e[51] = G),
      (e[52] = K))
    : (K = e[52]);
  let q;
  e[53] !== C || e[54] !== t || e[55] !== ye || e[56] !== O || e[57] !== i
    ? ((q = () => {
        if (!O) return;
        ne(t, fe, {});
        let e = He({ creatorPath: O, isFirstOpen: !C, kind: `skill` });
        (C || ye(!0), i({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (e[53] = C),
      (e[54] = t),
      (e[55] = ye),
      (e[56] = O),
      (e[57] = i),
      (e[58] = q))
    : (q = e[58]);
  let ct = !O,
    lt,
    ut;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, L.jsx)(p, { className: `icon-xs` })),
      (ut = (0, L.jsx)(S, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (e[59] = lt),
      (e[60] = ut))
    : ((lt = e[59]), (ut = e[60]));
  let J;
  e[61] !== q || e[62] !== ct
    ? ((J = (0, L.jsxs)(o, {
        color: `primary`,
        size: `toolbar`,
        onClick: q,
        disabled: ct,
        children: [lt, ut],
      })),
      (e[61] = q),
      (e[62] = ct),
      (e[63] = J))
    : (J = e[63]);
  let Y;
  e[64] !== B || e[65] !== U || e[66] !== K || e[67] !== J
    ? ((Y = (0, L.jsxs)(`div`, {
        className: `flex flex-nowrap items-center gap-1.5`,
        children: [B, U, K, J],
      })),
      (e[64] = B),
      (e[65] = U),
      (e[66] = K),
      (e[67] = J),
      (e[68] = Y))
    : (Y = e[68]);
  let X;
  e[69] !== z || e[70] !== Y
    ? ((X = (0, L.jsx)(Ee, { start: z, trailing: Y })), (e[69] = z), (e[70] = Y), (e[71] = X))
    : (X = e[71]);
  let dt;
  e[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        oe(e);
      }),
      (e[72] = dt))
    : (dt = e[72]);
  let ft;
  e[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (e) => {
        ce(e);
      }),
      (e[73] = ft))
    : (ft = e[73]);
  let pt;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, L.jsx)(`div`, {
        className: `heading-xl font-normal text-token-foreground`,
        children: (0, L.jsx)(S, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (e[74] = pt))
    : (pt = e[74]);
  let mt;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, L.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, L.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: ft,
          children: [
            pt,
            (0, L.jsx)(`div`, {
              className: `text-lg font-normal text-token-description-foreground`,
              children: (0, L.jsx)(S, {
                id: `skills.page.subheading`,
                defaultMessage: `Give Codex superpowers. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: Je },
              }),
            }),
          ],
        }),
      })),
      (e[75] = mt))
    : (mt = e[75]);
  let ht;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, L.jsx)(S, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (e[76] = ht))
    : (ht = e[76]);
  let Z;
  e[77] !== tt ||
  e[78] !== $e ||
  e[79] !== w ||
  e[80] !== T ||
  e[81] !== v ||
  e[82] !== E.length ||
  e[83] !== D
    ? ((Z = (0, L.jsx)(Ze, {
        title: ht,
        children: (0, L.jsx)(Qe, {
          hostId: v,
          isLoading: w,
          uniqueSkillCount: E.length,
          filteredSkills: tt,
          getScopeBadgeLabel: $e,
          roots: D,
          onSkillsUpdated: T,
        }),
      })),
      (e[77] = tt),
      (e[78] = $e),
      (e[79] = w),
      (e[80] = T),
      (e[81] = v),
      (e[82] = E.length),
      (e[83] = D),
      (e[84] = Z))
    : (Z = e[84]);
  let gt;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, L.jsx)(S, {
        id: `skills.section.recommended`,
        defaultMessage: `Recommended`,
        description: `Heading for the recommended skills section`,
      })),
      (e[85] = gt))
    : (gt = e[85]);
  let Q;
  e[86] !== Ae ||
  e[87] !== Ue ||
  e[88] !== we ||
  e[89] !== We ||
  e[90] !== Fe ||
  e[91] !== Le ||
  e[92] !== Ve ||
  e[93] !== Pe ||
  e[94] !== b ||
  e[95] !== v
    ? ((Q = (0, L.jsx)(Ze, {
        title: gt,
        children: (0, L.jsx)(et, {
          hostId: v,
          isLoading: Fe,
          errorMessage: Pe,
          skills: Ve,
          searchQuery: b,
          canInstall: Ae,
          repoRoot: Le,
          onInstall: Ue,
          installedSkillMatchKeys: we,
          installingSkillId: We,
        }),
      })),
      (e[86] = Ae),
      (e[87] = Ue),
      (e[88] = we),
      (e[89] = We),
      (e[90] = Fe),
      (e[91] = Le),
      (e[92] = Ve),
      (e[93] = Pe),
      (e[94] = b),
      (e[95] = v),
      (e[96] = Q))
    : (Q = e[96]);
  let $;
  e[97] !== Z || e[98] !== Q
    ? (($ = (0, L.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: dt,
        children: (0, L.jsxs)(Be, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            mt,
            (0, L.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, L.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col gap-9 pb-10`,
                children: [Z, Q],
              }),
            }),
          ],
        }),
      })),
      (e[97] = Z),
      (e[98] = Q),
      (e[99] = $))
    : ($ = e[99]);
  let _t;
  return (
    e[100] !== X || e[101] !== $
      ? ((_t = (0, L.jsxs)(`div`, {
          className: `mr-4 flex h-full flex-col text-base`,
          children: [X, $],
        })),
        (e[100] = X),
        (e[101] = $),
        (e[102] = _t))
      : (_t = e[102]),
    _t
  );
}
function Je(e) {
  return (0, L.jsx)(`a`, {
    href: m,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-token-link`,
    children: e,
  });
}
function Ye() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), P);
}
function P() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function Xe(e) {
  return e.hostId;
}
function Ze(e) {
  let t = (0, F.c)(5),
    { title: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, L.jsx)(`div`, {
        className: `pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, L.jsxs)(`section`, { className: `flex flex-col gap-4`, children: [i, r] })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Qe(e) {
  let t = (0, F.c)(16),
    {
      hostId: n,
      isLoading: r,
      uniqueSkillCount: i,
      filteredSkills: a,
      getScopeBadgeLabel: o,
      roots: s,
      onSkillsUpdated: c,
    } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, L.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, L.jsx)(w, {
              title: (0, L.jsx)(S, {
                id: `skills.page.loading`,
                defaultMessage: `Loading skills...`,
                description: `Loading label on the skills page`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === 0) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, L.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, L.jsx)(w, {
              title: (0, L.jsx)(S, {
                id: `skills.page.empty`,
                defaultMessage: `No skills found`,
                description: `Empty state on the skills page`,
              }),
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, L.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, L.jsx)(w, {
              title: (0, L.jsx)(S, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, L.jsx)(S, {
                id: `skills.page.filteredEmptyDescription`,
                defaultMessage: `Try adjusting your search or scope filters`,
                description: `Description for filtered skills empty state`,
              }),
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let l;
  if (t[3] !== a || t[4] !== o || t[5] !== n || t[6] !== c || t[7] !== s) {
    let e;
    (t[9] !== o || t[10] !== n || t[11] !== c || t[12] !== s
      ? ((e = (e) => {
          let { skill: t } = e,
            r =
              t.scope === `repo`
                ? [
                    (0, L.jsx)(
                      $e,
                      { label: o({ scope: `repo`, skillPath: t.path }) },
                      `${t.path}-repo`,
                    ),
                  ]
                : [],
            i = t.scope === `repo` ? Fe({ skillPath: t.path, roots: s }) : null;
          return (0, L.jsx)(
            Ie,
            {
              skill: t,
              displayName: ge(t),
              hostId: n,
              scopeBadges: r,
              repoRoot: i,
              onSkillsUpdated: c,
            },
            t.path,
          );
        }),
        (t[9] = o),
        (t[10] = n),
        (t[11] = c),
        (t[12] = s),
        (t[13] = e))
      : (e = t[13]),
      (l = a.map(e)),
      (t[3] = a),
      (t[4] = o),
      (t[5] = n),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l));
  } else l = t[8];
  let u;
  return (
    t[14] === l ? (u = t[15]) : ((u = (0, L.jsx)(k, { children: l })), (t[14] = l), (t[15] = u)), u
  );
}
function $e(e) {
  let t = (0, F.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, L.jsx)(`span`, { className: `text-token-description-foreground`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function et(e) {
  let t = (0, F.c)(31),
    {
      hostId: n,
      isLoading: r,
      errorMessage: i,
      skills: a,
      searchQuery: o,
      canInstall: s,
      repoRoot: c,
      onInstall: l,
      installedSkillMatchKeys: u,
      installingSkillId: d,
    } = e,
    f,
    p,
    m;
  if (
    t[0] !== s ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== u ||
    t[4] !== d ||
    t[5] !== r ||
    t[6] !== l ||
    t[7] !== c ||
    t[8] !== o ||
    t[9] !== a
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === u
        ? (e = t[14])
        : ((e = (e) => !O({ installedSkillMatchKeys: u, skill: e })), (t[13] = u), (t[14] = e));
      let h = a.filter(e),
        ee = o.trim().toLowerCase(),
        g = h.filter((e) =>
          ee.length === 0
            ? !0
            : [e.name, e.description, e.shortDescription ?? ``]
                .join(` `)
                .toLowerCase()
                .includes(ee),
        );
      if (r) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, L.jsx)(w, {
                title: (0, L.jsx)(S, {
                  id: `skills.page.loading`,
                  defaultMessage: `Loading skills...`,
                  description: `Loading label on the skills page`,
                }),
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (m = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(S, {
              id: `skills.recommended.error`,
              defaultMessage: `Unable to load recommended skills`,
              description: `Error title when recommended skills fail to load`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        (t[17] === i
          ? (n = t[18])
          : ((n = (0, L.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, L.jsx)(w, { title: e, description: i }),
            })),
            (t[17] = i),
            (t[18] = n)),
          (m = n));
        break bb0;
      }
      if (h.length === 0) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, L.jsx)(w, {
                title: (0, L.jsx)(S, {
                  id: `skills.page.empty`,
                  defaultMessage: `No skills found`,
                  description: `Empty state on the skills page`,
                }),
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (m = e));
        break bb0;
      }
      if (g.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, L.jsx)(w, {
                title: (0, L.jsx)(S, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, L.jsx)(S, {
                  id: `skills.page.filteredEmptyDescription`,
                  defaultMessage: `Try adjusting your search or scope filters`,
                  description: `Description for filtered skills empty state`,
                }),
              }),
            })),
            (t[20] = e))
          : (e = t[20]),
          (m = e));
        break bb0;
      }
      f = k;
      let _;
      (t[21] !== s || t[22] !== n || t[23] !== u || t[24] !== d || t[25] !== l || t[26] !== c
        ? ((_ = (e) =>
            (0, L.jsx)(
              Ue,
              {
                skill: e,
                canInstall: s,
                hostId: n,
                isInstalled: O({ installedSkillMatchKeys: u, skill: e }),
                isInstalling: d === e.id,
                repoRoot: c,
                onInstall: l,
              },
              e.id,
            )),
          (t[21] = s),
          (t[22] = n),
          (t[23] = u),
          (t[24] = d),
          (t[25] = l),
          (t[26] = c),
          (t[27] = _))
        : (_ = t[27]),
        (p = g.map(_)));
    }
    ((t[0] = s),
      (t[1] = i),
      (t[2] = n),
      (t[3] = u),
      (t[4] = d),
      (t[5] = r),
      (t[6] = l),
      (t[7] = c),
      (t[8] = o),
      (t[9] = a),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  } else ((f = t[10]), (p = t[11]), (m = t[12]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h;
  return (
    t[28] !== f || t[29] !== p
      ? ((h = (0, L.jsx)(f, { children: p })), (t[28] = f), (t[29] = p), (t[30] = h))
      : (h = t[30]),
    h
  );
}
var F,
  I,
  L,
  R = e(() => {
    ((F = he()),
      b(),
      v(),
      r(),
      (I = t(f(), 1)),
      de(),
      ye(),
      ce(),
      h(),
      we(),
      E(),
      l(),
      C(),
      d(),
      g(),
      x(),
      a(),
      se(),
      n(),
      Ke(),
      Te(),
      oe(),
      Se(),
      y(),
      A(),
      Ae(),
      Pe(),
      Ve(),
      Le(),
      me(),
      Ge(),
      je(),
      T(),
      D(),
      We(),
      (L = i()));
  });
export { R as n, M as t };
//# sourceMappingURL=skills-page-1.js.map
