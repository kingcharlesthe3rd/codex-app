import { s as e } from "./chunk-Bj-mKKzh.js";
import { Wo as t } from "./app-server-manager-signals.js";
import { n, t as r } from "./jsx-runtime.js";
import { F as i, I as a, h as o, lt as s } from "./vscode-api.js";
import { i as c, r as l } from "./react.js";
import { c as u, o as d } from "./lib-2.js";
import { g as f } from "./persisted-signal-CweW-bgN.js";
import { n as p } from "./selectable-remote-connections-signal.js";
import { p as m } from "./codex-api.js";
import { E as h } from "./mention-item.js";
import { r as g } from "./skill-utils.js";
import { t as ee } from "./button.js";
import { t as _ } from "./use-is-plugins-enabled.js";
import { n as v } from "./use-start-new-conversation.js";
import { y } from "./links.js";
import { t as te } from "./plus-d3DP-DMx.js";
import { t as ne } from "./use-connected-remote-connections.js";
import { t as re } from "./regenerate.js";
import { n as ie, t as ae } from "./format-skill-scope.js";
import { r as oe } from "./settings-host-context.js";
import { t as se } from "./thread-page-header.js";
import { t as b } from "./large-empty-state-DZ-ohQvY.js";
import { t as ce } from "./settings-host-dropdown.js";
import {
  A as x,
  a as S,
  b as C,
  d as le,
  f as ue,
  m as de,
  p as fe,
} from "./plugin-detail-page.js";
import {
  a as pe,
  i as me,
  n as he,
  o as ge,
  r as _e,
  s as w,
  t as T,
} from "./plugins-page.js";
var E = s(),
  D = e(n(), 1);
function ve(e) {
  let t = (0, E.c)(6),
    { container: n, target: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = (e) => {
        if (!n || !r) return O;
        let t = () => {
          e();
        };
        n.addEventListener(`scroll`, t, { passive: !0 });
        let i = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          i && (i.observe(n), i.observe(r)),
          () => {
            (n.removeEventListener(`scroll`, t), i && i.disconnect());
          }
        );
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== n || t[4] !== r
    ? ((o = () => {
        if (!n || !r) return !0;
        let e = n.getBoundingClientRect(),
          t = r.getBoundingClientRect();
        return t.bottom > e.top && t.top < e.bottom;
      }),
      (t[3] = n),
      (t[4] = r),
      (t[5] = o))
    : (o = t[5]);
  let s = o;
  return (0, D.useSyncExternalStore)(a, s, s);
}
function O() {}
var k = r();
function ye() {
  let e = (0, E.c)(3),
    n;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = { hostId: t }), (e[0] = n))
      : (n = e[0]),
    _(n))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, k.jsx)(T, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, k.jsx)(A, {})), (e[2] = r))
      : (r = e[2]),
    r
  );
}
function A() {
  let e = (0, E.c)(103),
    n = i(o),
    r = u(),
    { data: s } = m(),
    _ = v(),
    y = a(p),
    b = ne(y),
    x;
  e[0] === y ? (x = e[1]) : ((x = y?.map(Ce)), (e[0] = y), (e[1] = x));
  let S = x,
    [C, he] = (0, D.useState)(t),
    w;
  e[2] !== b || e[3] !== C ? ((w = oe(C, b)), (e[2] = b), (e[3] = C), (e[4] = w)) : (w = e[4]);
  let T = w,
    [O, ye] = (0, D.useState)(null),
    [A, Se] = (0, D.useState)(null),
    j;
  e[5] !== A || e[6] !== O
    ? ((j = { container: O, target: A }), (e[5] = A), (e[6] = O), (e[7] = j))
    : (j = e[7]);
  let De = ve(j),
    [M, Oe] = (0, D.useState)(``),
    [N, ke] = (0, D.useState)(!1),
    P = l(me),
    Ae = c(me),
    {
      forceReloadSkills: je,
      installedSkillMatchKeys: Me,
      isFetching: Ne,
      isLoading: Pe,
      markSkillsUpdated: F,
      skills: I,
      workspaceRoots: L,
    } = ue(T),
    {
      canInstallRecommendedSkills: Fe,
      defaultRecommendedRepoRoot: Ie,
      skillCreatorPath: R,
    } = de(T),
    { errorMessage: Le, isLoading: Re, refresh: ze, repoRoot: Be, skills: Ve } = fe(Ie, T),
    He;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = () => {
        ke(!0);
      }),
      (e[8] = He))
    : (He = e[8]);
  let Ue;
  e[9] !== je || e[10] !== T
    ? ((Ue = { forceReloadSkills: je, hostId: T, onInstalled: He }),
      (e[9] = je),
      (e[10] = T),
      (e[11] = Ue))
    : (Ue = e[11]);
  let { installRecommendedSkill: We, installingSkillId: Ge } = le(Ue),
    Ke;
  e[12] === r ? (Ke = e[13]) : ((Ke = ae({ scope: `repo`, intl: r })), (e[12] = r), (e[13] = Ke));
  let qe = Ke,
    Je = s?.name ?? void 0,
    Ye;
  e[14] !== r || e[15] !== Je
    ? ((Ye = ae({ scope: `admin`, intl: r, adminLabel: Je })),
      (e[14] = r),
      (e[15] = Je),
      (e[16] = Ye))
    : (Ye = e[16]);
  let Xe = Ye,
    Ze;
  e[17] !== r || e[18] !== Xe || e[19] !== qe || e[20] !== L
    ? ((Ze = (e) => {
        let { scope: t, skillPath: n } = e;
        return ae({
          scope: t,
          intl: r,
          repoLabel: ie({ skillPath: n, roots: L, fallbackLabel: qe }),
          adminLabel: Xe,
        });
      }),
      (e[17] = r),
      (e[18] = Xe),
      (e[19] = qe),
      (e[20] = L),
      (e[21] = Ze))
    : (Ze = e[21]);
  let Qe = Ze,
    $e;
  if (e[22] !== M || e[23] !== I) {
    let t = M.trim().toLowerCase();
    (($e = I.filter((e) => {
      let { skill: n } = e;
      if (t.length === 0) return !0;
      let r = h(n).toLowerCase(),
        i = g(n).toLowerCase();
      return n.name.toLowerCase().includes(t) || i.includes(t) || r.includes(t);
    })),
      (e[22] = M),
      (e[23] = I),
      (e[24] = $e));
  } else $e = e[24];
  let et = $e,
    tt;
  e[25] !== F || e[26] !== ze
    ? ((tt = async () => {
        (F(), await ze(), ke(!1));
      }),
      (e[25] = F),
      (e[26] = ze),
      (e[27] = tt))
    : (tt = e[27]);
  let nt = tt,
    rt;
  (e[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((rt = []), (e[28] = rt)) : (rt = e[28]),
    (0, D.useEffect)(xe, rt));
  let z;
  e[29] === De
    ? (z = e[30])
    : ((z = De
        ? null
        : (0, k.jsx)(d, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (e[29] = De),
      (e[30] = z));
  let B;
  e[31] !== b || e[32] !== S || e[33] !== T
    ? ((B =
        b != null && b.length > 0 && S != null
          ? (0, k.jsx)(ce, {
              connectedRemoteConnections: b,
              onSelectHost: he,
              remoteConnectionHostIds: S,
              selectedHostId: T,
            })
          : null),
      (e[31] = b),
      (e[32] = S),
      (e[33] = T),
      (e[34] = B))
    : (B = e[34]);
  let it = N ? `secondary` : `ghost`,
    V;
  e[35] === nt
    ? (V = e[36])
    : ((V = () => {
        nt();
      }),
      (e[35] = nt),
      (e[36] = V));
  let at = Pe || Ne,
    ot;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, k.jsx)(re, { className: `icon-xs` })), (e[37] = ot))
    : (ot = e[37]);
  let H;
  e[38] === N
    ? (H = e[39])
    : ((H = (0, k.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: N
          ? (0, k.jsx)(d, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, k.jsx)(d, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (e[38] = N),
      (e[39] = H));
  let U;
  e[40] !== it || e[41] !== V || e[42] !== at || e[43] !== H
    ? ((U = (0, k.jsxs)(ee, {
        color: it,
        size: `toolbar`,
        onClick: V,
        disabled: at,
        children: [ot, H],
      })),
      (e[40] = it),
      (e[41] = V),
      (e[42] = at),
      (e[43] = H),
      (e[44] = U))
    : (U = e[44]);
  let W;
  e[45] === r
    ? (W = e[46])
    : ((W = r.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (e[45] = r),
      (e[46] = W));
  let G;
  e[47] === r
    ? (G = e[48])
    : ((G = r.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (e[47] = r),
      (e[48] = G));
  let K;
  e[49] !== M || e[50] !== W || e[51] !== G
    ? ((K = (0, k.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, k.jsx)(_e, {
          id: `skills-search`,
          label: W,
          placeholder: G,
          searchQuery: M,
          onSearchQueryChange: Oe,
        }),
      })),
      (e[49] = M),
      (e[50] = W),
      (e[51] = G),
      (e[52] = K))
    : (K = e[52]);
  let q;
  e[53] !== P || e[54] !== n || e[55] !== Ae || e[56] !== R || e[57] !== _
    ? ((q = () => {
        if (!R) return;
        f(n, { eventName: `codex_skill_new_clicked` });
        let e = pe({ creatorPath: R, isFirstOpen: !P, kind: `skill` });
        (P || Ae(!0), _({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (e[53] = P),
      (e[54] = n),
      (e[55] = Ae),
      (e[56] = R),
      (e[57] = _),
      (e[58] = q))
    : (q = e[58]);
  let st = !R,
    ct,
    lt;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, k.jsx)(te, { className: `icon-xs` })),
      (lt = (0, k.jsx)(d, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (e[59] = ct),
      (e[60] = lt))
    : ((ct = e[59]), (lt = e[60]));
  let J;
  e[61] !== q || e[62] !== st
    ? ((J = (0, k.jsxs)(ee, {
        color: `primary`,
        size: `toolbar`,
        onClick: q,
        disabled: st,
        children: [ct, lt],
      })),
      (e[61] = q),
      (e[62] = st),
      (e[63] = J))
    : (J = e[63]);
  let Y;
  e[64] !== B || e[65] !== U || e[66] !== K || e[67] !== J
    ? ((Y = (0, k.jsxs)(`div`, {
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
    ? ((X = (0, k.jsx)(se, { start: z, trailing: Y })), (e[69] = z), (e[70] = Y), (e[71] = X))
    : (X = e[71]);
  let ut;
  e[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (e) => {
        ye(e);
      }),
      (e[72] = ut))
    : (ut = e[72]);
  let dt;
  e[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        Se(e);
      }),
      (e[73] = dt))
    : (dt = e[73]);
  let ft;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, k.jsx)(`div`, {
        className: `heading-xl font-normal text-token-foreground`,
        children: (0, k.jsx)(d, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (e[74] = ft))
    : (ft = e[74]);
  let pt;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, k.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, k.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: dt,
          children: [
            ft,
            (0, k.jsx)(`div`, {
              className: `text-lg font-normal text-token-description-foreground`,
              children: (0, k.jsx)(d, {
                id: `skills.page.subheading`,
                defaultMessage: `Give Codex superpowers. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: be },
              }),
            }),
          ],
        }),
      })),
      (e[75] = pt))
    : (pt = e[75]);
  let mt;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, k.jsx)(d, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (e[76] = mt))
    : (mt = e[76]);
  let Z;
  e[77] !== et ||
  e[78] !== Qe ||
  e[79] !== Pe ||
  e[80] !== F ||
  e[81] !== T ||
  e[82] !== I.length ||
  e[83] !== L
    ? ((Z = (0, k.jsx)(we, {
        title: mt,
        children: (0, k.jsx)(Te, {
          hostId: T,
          isLoading: Pe,
          uniqueSkillCount: I.length,
          filteredSkills: et,
          getScopeBadgeLabel: Qe,
          roots: L,
          onSkillsUpdated: F,
        }),
      })),
      (e[77] = et),
      (e[78] = Qe),
      (e[79] = Pe),
      (e[80] = F),
      (e[81] = T),
      (e[82] = I.length),
      (e[83] = L),
      (e[84] = Z))
    : (Z = e[84]);
  let ht;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, k.jsx)(d, {
        id: `skills.section.recommended`,
        defaultMessage: `Recommended`,
        description: `Heading for the recommended skills section`,
      })),
      (e[85] = ht))
    : (ht = e[85]);
  let Q;
  e[86] !== Fe ||
  e[87] !== We ||
  e[88] !== Me ||
  e[89] !== Ge ||
  e[90] !== Re ||
  e[91] !== Be ||
  e[92] !== Ve ||
  e[93] !== Le ||
  e[94] !== M ||
  e[95] !== T
    ? ((Q = (0, k.jsx)(we, {
        title: ht,
        children: (0, k.jsx)(Ee, {
          hostId: T,
          isLoading: Re,
          errorMessage: Le,
          skills: Ve,
          searchQuery: M,
          canInstall: Fe,
          repoRoot: Be,
          onInstall: We,
          installedSkillMatchKeys: Me,
          installingSkillId: Ge,
        }),
      })),
      (e[86] = Fe),
      (e[87] = We),
      (e[88] = Me),
      (e[89] = Ge),
      (e[90] = Re),
      (e[91] = Be),
      (e[92] = Ve),
      (e[93] = Le),
      (e[94] = M),
      (e[95] = T),
      (e[96] = Q))
    : (Q = e[96]);
  let $;
  e[97] !== Z || e[98] !== Q
    ? (($ = (0, k.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: ut,
        children: (0, k.jsxs)(ge, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            pt,
            (0, k.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, k.jsxs)(`div`, {
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
  let gt;
  return (
    e[100] !== X || e[101] !== $
      ? ((gt = (0, k.jsxs)(`div`, {
          className: `mr-4 flex h-full flex-col text-base`,
          children: [X, $],
        })),
        (e[100] = X),
        (e[101] = $),
        (e[102] = gt))
      : (gt = e[102]),
    gt
  );
}
function be(e) {
  return (0, k.jsx)(`a`, {
    href: y,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-token-link`,
    children: e,
  });
}
function xe() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), Se);
}
function Se() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function Ce(e) {
  return e.hostId;
}
function we(e) {
  let t = (0, E.c)(5),
    { title: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, k.jsx)(`div`, {
        className: `pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, k.jsxs)(`section`, { className: `flex flex-col gap-4`, children: [i, r] })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Te(e) {
  let t = (0, E.c)(16),
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
        ? ((e = (0, k.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, k.jsx)(b, {
              title: (0, k.jsx)(d, {
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
        ? ((e = (0, k.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, k.jsx)(b, {
              title: (0, k.jsx)(d, {
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
        ? ((e = (0, k.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, k.jsx)(b, {
              title: (0, k.jsx)(d, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, k.jsx)(d, {
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
                    (0, k.jsx)(
                      j,
                      { label: o({ scope: `repo`, skillPath: t.path }) },
                      `${t.path}-repo`,
                    ),
                  ]
                : [],
            i = t.scope === `repo` ? x({ skillPath: t.path, roots: s }) : null;
          return (0, k.jsx)(
            S,
            {
              skill: t,
              displayName: g(t),
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
    t[14] === l ? (u = t[15]) : ((u = (0, k.jsx)(w, { children: l })), (t[14] = l), (t[15] = u)), u
  );
}
function j(e) {
  let t = (0, E.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, k.jsx)(`span`, { className: `text-token-description-foreground`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ee(e) {
  let t = (0, E.c)(31),
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
      installingSkillId: f,
    } = e,
    p,
    m,
    h;
  if (
    t[0] !== s ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== u ||
    t[4] !== f ||
    t[5] !== r ||
    t[6] !== l ||
    t[7] !== c ||
    t[8] !== o ||
    t[9] !== a
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === u
        ? (e = t[14])
        : ((e = (e) => !C({ installedSkillMatchKeys: u, skill: e })), (t[13] = u), (t[14] = e));
      let g = a.filter(e),
        ee = o.trim().toLowerCase(),
        _ = g.filter((e) =>
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
          ? ((e = (0, k.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, k.jsx)(b, {
                title: (0, k.jsx)(d, {
                  id: `skills.page.loading`,
                  defaultMessage: `Loading skills...`,
                  description: `Loading label on the skills page`,
                }),
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (h = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(d, {
              id: `skills.recommended.error`,
              defaultMessage: `Unable to load recommended skills`,
              description: `Error title when recommended skills fail to load`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        (t[17] === i
          ? (n = t[18])
          : ((n = (0, k.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, k.jsx)(b, { title: e, description: i }),
            })),
            (t[17] = i),
            (t[18] = n)),
          (h = n));
        break bb0;
      }
      if (g.length === 0) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, k.jsx)(b, {
                title: (0, k.jsx)(d, {
                  id: `skills.page.empty`,
                  defaultMessage: `No skills found`,
                  description: `Empty state on the skills page`,
                }),
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (h = e));
        break bb0;
      }
      if (_.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, k.jsx)(b, {
                title: (0, k.jsx)(d, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, k.jsx)(d, {
                  id: `skills.page.filteredEmptyDescription`,
                  defaultMessage: `Try adjusting your search or scope filters`,
                  description: `Description for filtered skills empty state`,
                }),
              }),
            })),
            (t[20] = e))
          : (e = t[20]),
          (h = e));
        break bb0;
      }
      p = w;
      let v;
      (t[21] !== s || t[22] !== n || t[23] !== u || t[24] !== f || t[25] !== l || t[26] !== c
        ? ((v = (e) =>
            (0, k.jsx)(
              he,
              {
                skill: e,
                canInstall: s,
                hostId: n,
                isInstalled: C({ installedSkillMatchKeys: u, skill: e }),
                isInstalling: f === e.id,
                repoRoot: c,
                onInstall: l,
              },
              e.id,
            )),
          (t[21] = s),
          (t[22] = n),
          (t[23] = u),
          (t[24] = f),
          (t[25] = l),
          (t[26] = c),
          (t[27] = v))
        : (v = t[27]),
        (m = _.map(v)));
    }
    ((t[0] = s),
      (t[1] = i),
      (t[2] = n),
      (t[3] = u),
      (t[4] = f),
      (t[5] = r),
      (t[6] = l),
      (t[7] = c),
      (t[8] = o),
      (t[9] = a),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h));
  } else ((p = t[10]), (m = t[11]), (h = t[12]));
  if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
  let g;
  return (
    t[28] !== p || t[29] !== m
      ? ((g = (0, k.jsx)(p, { children: m })), (t[28] = p), (t[29] = m), (t[30] = g))
      : (g = t[30]),
    g
  );
}
export { ye as t };
//# sourceMappingURL=skills-page-1.js.map
