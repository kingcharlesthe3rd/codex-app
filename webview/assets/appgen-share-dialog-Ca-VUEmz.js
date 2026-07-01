import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ar as n,
  Dr as r,
  Du as i,
  Er as a,
  Eu as o,
  Ey as s,
  Fl as c,
  GP as l,
  Gi as u,
  HP as d,
  IP as f,
  J as p,
  LP as m,
  Mr as h,
  Pr as g,
  Qj as _,
  RV as v,
  Sy as y,
  TB as b,
  Tr as x,
  VP as S,
  Vl as C,
  Yj as w,
  bB as T,
  eM as E,
  ei as D,
  fN as O,
  gi as k,
  hN as A,
  hi as ee,
  iu as te,
  jV as ne,
  mN as re,
  mi as ie,
  pN as ae,
  pi as oe,
  q as se,
  qP as ce,
  qi as le,
  qj as ue,
  ru as j,
  ti as de,
  vy as fe,
  wB as pe,
  wr as me,
  xy as he,
  zV as M,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  B_ as N,
  Bs as ge,
  Fs as P,
  Hs as _e,
  Is as F,
  Ls as I,
  Ps as L,
  Rs as R,
  Us as z,
  Vs as ve,
  c_ as ye,
  l_ as be,
  ny as xe,
  s_ as Se,
  ty as Ce,
  u_ as we,
  z_ as B,
} from "./app-initial~app-main~onboarding-page.js";
import {
  d as V,
  f as Te,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  a as Ee,
  c as De,
  d as Oe,
  f as H,
  h as ke,
  i as U,
  l as Ae,
  m as je,
  o as Me,
  p as Ne,
  r as Pe,
  s as Fe,
  t as Ie,
} from "./use-workspace-users.js";
import { n as Le, t as Re } from "./share-invite-autocomplete.js";
function ze(e) {
  let t = (0, Z.c)(104),
    { onClose: n, projectId: o } = e,
    s = ce(),
    c = b(f),
    { email: u } = i(),
    { data: d } = C(),
    p = d?.structure === `workspace`,
    { data: m, isError: h, isLoading: _ } = pe(he, o),
    v = pe(y, o),
    [x, S] = (0, Q.useState)(``),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = []), (t[0] = T)) : (T = t[0]);
  let [E, D] = (0, Q.useState)(T),
    O;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = []), (t[1] = O)) : (O = t[1]);
  let [k, A] = (0, Q.useState)(O),
    [ne, ie] = (0, Q.useState)(null),
    ae;
  t[2] === x ? (ae = t[3]) : ((ae = x.trim()), (t[2] = x), (t[3] = ae));
  let se = ae,
    le = te(se, 200),
    { data: ue } = Pe(p ? x : ``),
    { data: j } = pe(fe, p ? le : null),
    de = le === se,
    { data: M } = pe(fe, p ? `` : null),
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    ye;
  if (
    t[4] !== j ||
    t[5] !== M ||
    t[6] !== d?.account_user_id ||
    t[7] !== s ||
    t[8] !== m?.access_policy ||
    t[9] !== k ||
    t[10] !== E ||
    t[11] !== ue
  ) {
    ((I = tt(j)),
      (L = tt(nt(j, M))),
      (N = m?.access_policy),
      (F = N?.allowed_users ?? []),
      (P = N?.allowed_groups ?? []));
    let e = new Set(F.map(Ge));
    R = De({
      currentAccountUserId: d?.account_user_id,
      existingAccountUserIds: e,
      selectedAccountUserIds: E.map(We),
      workspaceUsers: ue,
    });
    let n = new Set(P.map(Ue));
    z = new Set(L.map(He));
    let r;
    t[20] !== n || t[21] !== k
      ? ((r = (e) => !n.has(e.id) && !k.some((t) => t.id === e.id)),
        (t[20] = n),
        (t[21] = k),
        (t[22] = r))
      : (r = t[22]);
    let i = I.filter(r),
      a;
    (t[23] === s ? (a = t[24]) : ((a = (e) => it(e, s)), (t[23] = s), (t[24] = a)),
      (ye = [...i.map(a), ...(R?.map(at) ?? [])]),
      (t[4] = j),
      (t[5] = M),
      (t[6] = d?.account_user_id),
      (t[7] = s),
      (t[8] = m?.access_policy),
      (t[9] = k),
      (t[10] = E),
      (t[11] = ue),
      (t[12] = N),
      (t[13] = P),
      (t[14] = F),
      (t[15] = I),
      (t[16] = L),
      (t[17] = R),
      (t[18] = z),
      (t[19] = ye));
  } else
    ((N = t[12]),
      (P = t[13]),
      (F = t[14]),
      (I = t[15]),
      (L = t[16]),
      (R = t[17]),
      (z = t[18]),
      (ye = t[19]));
  let be = ye,
    xe;
  if (t[25] !== s || t[26] !== k || t[27] !== E) {
    let e;
    (t[29] === s ? (e = t[30]) : ((e = (e) => it(e, s)), (t[29] = s), (t[30] = e)),
      (xe = [...k.map(e), ...E.map(at)]),
      (t[25] = s),
      (t[26] = k),
      (t[27] = E),
      (t[28] = xe));
  } else xe = t[28];
  let Se = xe,
    Ce;
  t[31] === m
    ? (Ce = t[32])
    : ((Ce =
        m == null
          ? (0, $.jsx)(l, {
              id: `appgenShareDialog.title`,
              defaultMessage: `Share`,
              description: `Title for the site sharing dialog`,
            })
          : (0, $.jsx)(l, {
              id: `appgenShareDialog.projectTitle`,
              defaultMessage: `Share {siteTitle}`,
              description: `Title for the site sharing dialog including the site title`,
              values: { siteTitle: m.title },
            })),
      (t[31] = m),
      (t[32] = Ce));
  let we = Ce,
    B = ne ?? N?.access_mode ?? null,
    V = p && B !== `public`,
    Te = N != null && B !== N.access_mode,
    Ee = V && Se.length > 0,
    Oe;
  t[33] !== s || t[34] !== c
    ? ((Oe = function () {
        c.get(w).danger(
          s.formatMessage({
            id: `appgenShareDialog.save.error`,
            defaultMessage: `Unable to save sharing settings`,
            description: `Error toast shown when saving site sharing settings fails`,
          }),
        );
      }),
      (t[33] = s),
      (t[34] = c),
      (t[35] = Oe))
    : (Oe = t[35]);
  let H = Oe,
    ke;
  t[36] !== N ||
  t[37] !== P ||
  t[38] !== F ||
  t[39] !== I ||
  t[40] !== V ||
  t[41] !== B ||
  t[42] !== L ||
  t[43] !== n ||
  t[44] !== k ||
  t[45] !== E ||
  t[46] !== H ||
  t[47] !== v
    ? ((ke = function () {
        if (N == null || B == null) {
          n();
          return;
        }
        let e = ge({
          accessGroups: I,
          accessMode: B,
          allowedUserEmails: [...F, ...E].map(Ve),
          canManageInvitees: V,
          existingGroups: P,
          knownAccessGroups: L,
          selectedGroups: k,
        });
        v.mutateAsync(e).then(
          () => {
            (D([]), A([]), ie(null));
          },
          () => {
            H();
          },
        );
      }),
      (t[36] = N),
      (t[37] = P),
      (t[38] = F),
      (t[39] = I),
      (t[40] = V),
      (t[41] = B),
      (t[42] = L),
      (t[43] = n),
      (t[44] = k),
      (t[45] = E),
      (t[46] = H),
      (t[47] = v),
      (t[48] = ke))
    : (ke = t[48]);
  let U = ke,
    Ae;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = function () {
        (D([]), A([]), ie(null));
      }),
      (t[49] = Ae))
    : (Ae = t[49]);
  let je = Ae,
    Me;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = function (e) {
        (ie(e), e === `public` && (S(``), D([]), A([])));
      }),
      (t[50] = Me))
    : (Me = t[50]);
  let Ne = Me,
    Fe;
  t[51] !== H || t[52] !== v
    ? ((Fe = function (e) {
        return v.mutateAsync(e).then(Be, (e) => {
          throw (H(), e);
        });
      }),
      (t[51] = H),
      (t[52] = v),
      (t[53] = Fe))
    : (Fe = t[53]);
  let Ie = Fe,
    Le;
  t[54] !== N || t[55] !== I || t[56] !== L || t[57] !== Ie
    ? ((Le = function (e) {
        if (N == null) return Promise.resolve();
        switch (e.kind) {
          case `user`:
            return Ie(_e(N, e.user.account_user_id));
          case `group`:
            return Ie(
              ve({ accessGroups: I, accessPolicy: N, group: e.group, knownAccessGroups: L }),
            );
        }
      }),
      (t[54] = N),
      (t[55] = I),
      (t[56] = L),
      (t[57] = Ie),
      (t[58] = Le))
    : (Le = t[58]);
  let ze = Le,
    Ye;
  t[59] !== m || t[60] !== ze || t[61] !== c
    ? ((Ye = function (e) {
        m != null &&
          g(c, Ke, {
            label: e.kind === `group` ? e.group.name : Xe(e.user),
            onConfirm: () => ze(e),
            siteTitle: m.title,
          });
      }),
      (t[59] = m),
      (t[60] = ze),
      (t[61] = c),
      (t[62] = Ye))
    : (Ye = t[62]);
  let W = Ye,
    G;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = { "aria-describedby": void 0 }), (t[63] = G))
    : (G = t[63]);
  let K;
  t[64] === n
    ? (K = t[65])
    : ((K = (e) => {
        e || n();
      }),
      (t[64] = n),
      (t[65] = K));
  let q;
  t[66] === we
    ? (q = t[67])
    : ((q = (0, $.jsxs)(`div`, {
        className: `flex w-full flex-col`,
        children: [
          (0, $.jsx)(ee, { className: `sr-only`, children: we }),
          (0, $.jsx)(a, { title: we, titleClassName: `truncate pr-8` }),
        ],
      })),
      (t[66] = we),
      (t[67] = q));
  let J;
  t[68] !== j ||
  t[69] !== N ||
  t[70] !== P ||
  t[71] !== F ||
  t[72] !== M ||
  t[73] !== V ||
  t[74] !== d?.account_user_id ||
  t[75] !== u ||
  t[76] !== B ||
  t[77] !== s ||
  t[78] !== be ||
  t[79] !== de ||
  t[80] !== h ||
  t[81] !== _ ||
  t[82] !== p ||
  t[83] !== R ||
  t[84] !== W ||
  t[85] !== m ||
  t[86] !== x ||
  t[87] !== z ||
  t[88] !== Se
    ? ((J = _
        ? (0, $.jsx)(r, {
            className: `py-12`,
            children: (0, $.jsx)(`div`, {
              className: `flex justify-center`,
              children: (0, $.jsx)(re, {}),
            }),
          })
        : h || m == null || N == null
          ? (0, $.jsx)(r, {
              className: `py-10`,
              children: (0, $.jsx)(`div`, {
                className: `text-center text-sm font-medium text-token-text-secondary`,
                children: (0, $.jsx)(l, {
                  id: `appgenShareDialog.error`,
                  defaultMessage: `Unable to load sharing settings`,
                  description: `Error state title in the site share dialog`,
                }),
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(r, {
                  children: (0, $.jsx)(qe, { liveUrl: m.current_live_url, title: m.title }),
                }),
                V
                  ? (0, $.jsx)(r, {
                      children: (0, $.jsx)(Re, {
                        ariaLabel: s.formatMessage({
                          id: `appgenShareDialog.workspaceUserSearch`,
                          defaultMessage: `Add people or groups`,
                          description: `Accessible label for searching workspace users and groups in the site share dialog`,
                        }),
                        emptyMessage: (0, $.jsx)(l, {
                          id: `appgenShareDialog.noWorkspaceUsers`,
                          defaultMessage: `No matching people or groups`,
                          description: `Empty state shown when no workspace users or groups match the site share dialog autocomplete query`,
                        }),
                        options: !de || j == null || M == null || R == null ? void 0 : be,
                        placeholder: s.formatMessage({
                          id: `appgenShareDialog.workspaceUserPlaceholder`,
                          defaultMessage: `Add people or groups`,
                          description: `Placeholder for the site share dialog workspace user and group autocomplete`,
                        }),
                        query: x,
                        selectedOptions: Se,
                        onQueryChange: S,
                        onRemoveOption: (e) => {
                          let { target: t } = e;
                          bb173: switch (t.kind) {
                            case `group`:
                              A((e) => e.filter((e) => e.id !== t.group.id));
                              break bb173;
                            case `user`:
                              D((e) =>
                                e.filter((e) => e.account_user_id !== t.user.account_user_id),
                              );
                          }
                        },
                        onSelectOption: (e) => {
                          let { target: t } = e;
                          bb187: switch (t.kind) {
                            case `group`:
                              A((e) => [...e, t.group]);
                              break bb187;
                            case `user`:
                              D((e) => [...e, t.user]);
                          }
                        },
                        getRemoveLabel: (e) =>
                          s.formatMessage(
                            {
                              id: `appgenShareDialog.removeSelectedUser`,
                              defaultMessage: `Remove {name}`,
                              description: `Accessible label for removing a selected workspace user from the site share dialog`,
                            },
                            { name: e.chipLabel ?? e.label },
                          ),
                      }),
                    })
                  : null,
                (0, $.jsx)(Je, {
                  accessPolicy: N,
                  activeAccessGroups: P,
                  activeAccessUsers: F,
                  availableAccessModes: m.available_access_modes,
                  canManageInvitees: V,
                  isWorkspaceAccount: p,
                  removableAccessGroupIds: z,
                  selectedAccessMode: B,
                  ownerEmail: u,
                  ownerId: d?.account_user_id,
                  onAccessModeChange: Ne,
                  onRemoveAccessUser: (e) => {
                    W({ kind: `user`, user: e });
                  },
                  onRemoveAccessGroup: (e) => {
                    W({ kind: `group`, group: e });
                  },
                }),
              ],
            })),
      (t[68] = j),
      (t[69] = N),
      (t[70] = P),
      (t[71] = F),
      (t[72] = M),
      (t[73] = V),
      (t[74] = d?.account_user_id),
      (t[75] = u),
      (t[76] = B),
      (t[77] = s),
      (t[78] = be),
      (t[79] = de),
      (t[80] = h),
      (t[81] = _),
      (t[82] = p),
      (t[83] = R),
      (t[84] = W),
      (t[85] = m),
      (t[86] = x),
      (t[87] = z),
      (t[88] = Se),
      (t[89] = J))
    : (J = t[89]);
  let Ze = _ || h || m == null || N == null ? void 0 : m.current_live_url,
    Y;
  t[90] !== B ||
  t[91] !== U ||
  t[92] !== Te ||
  t[93] !== Ee ||
  t[94] !== Ze ||
  t[95] !== v.isPending
    ? ((Y = (0, $.jsx)(Qe, {
        accessMode: B,
        hasPendingAccessChange: Te,
        hasPendingInvitees: Ee,
        isSaving: v.isPending,
        liveUrl: Ze,
        onCancelChanges: je,
        onDone: U,
      })),
      (t[90] = B),
      (t[91] = U),
      (t[92] = Te),
      (t[93] = Ee),
      (t[94] = Ze),
      (t[95] = v.isPending),
      (t[96] = Y))
    : (Y = t[96]);
  let X;
  t[97] !== q || t[98] !== J || t[99] !== Y
    ? ((X = (0, $.jsxs)(me, { className: `px-4 py-3`, children: [q, J, Y] })),
      (t[97] = q),
      (t[98] = J),
      (t[99] = Y),
      (t[100] = X))
    : (X = t[100]);
  let $e;
  return (
    t[101] !== K || t[102] !== X
      ? (($e = (0, $.jsx)(oe, {
          open: !0,
          size: `compact`,
          contentOverflow: `visible`,
          contentProps: G,
          onOpenChange: K,
          children: X,
        })),
        (t[101] = K),
        (t[102] = X),
        (t[103] = $e))
      : ($e = t[103]),
    $e
  );
}
function Be() {}
function Ve(e) {
  return e.email;
}
function He(e) {
  return e.id;
}
function Ue(e) {
  return e.id;
}
function We(e) {
  return e.account_user_id;
}
function Ge(e) {
  return e.account_user_id;
}
function Ke(e) {
  let t = (0, Z.c)(36),
    { label: n, onClose: i, onConfirm: o, siteTitle: s } = e,
    [c, u] = (0, Q.useState)(!1),
    d = !c,
    f;
  t[0] !== c || t[1] !== i
    ? ((f = (e) => {
        !e && !c && i();
      }),
      (t[0] = c),
      (t[1] = i),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== c || t[4] !== i || t[5] !== o
    ? ((p = (e) => {
        (e.preventDefault(),
          !c &&
            (u(!0),
            o().then(i, () => {
              u(!1);
            })));
      }),
      (t[3] = c),
      (t[4] = i),
      (t[5] = o),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === n
    ? (m = t[8])
    : ((m = (0, $.jsx)(ee, {
        className: `contents`,
        children: (0, $.jsx)(l, {
          id: `appgenShareDialog.removeDialog.title`,
          defaultMessage: `Remove {label}?`,
          description: `Title for dialog confirming removal of a person's or group's site access`,
          values: { label: n },
        }),
      })),
      (t[7] = n),
      (t[8] = m));
  let h;
  t[9] === n
    ? (h = t[10])
    : ((h = (0, $.jsx)(
        `span`,
        { className: `font-medium text-token-text-primary`, children: n },
        `remove-access-label`,
      )),
      (t[9] = n),
      (t[10] = h));
  let g;
  t[11] !== s || t[12] !== h
    ? ((g = (0, $.jsx)(ie, {
        className: `contents`,
        children: (0, $.jsx)(l, {
          id: `appgenShareDialog.removeDialog.description`,
          defaultMessage: `{label} will no longer be able to visit {siteTitle}`,
          description: `Warning shown when removing a person or group from a site's access list`,
          values: { label: h, siteTitle: s },
        }),
      })),
      (t[11] = s),
      (t[12] = h),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== m || t[15] !== g
    ? ((_ = (0, $.jsx)(a, { title: m, titleClassName: `truncate pr-8`, subtitle: g })),
      (t[14] = m),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(l, {
        id: `appgenShareDialog.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for access removal confirmation dialog`,
      })),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== c || t[19] !== i
    ? ((y = (0, $.jsx)(O, { color: `secondary`, disabled: c, onClick: i, children: v })),
      (t[18] = c),
      (t[19] = i),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(l, {
        id: `appgenShareDialog.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing site access`,
      })),
      (t[21] = b))
    : (b = t[21]);
  let S;
  t[22] === c
    ? (S = t[23])
    : ((S = (0, $.jsx)(O, { color: `danger`, loading: c, type: `submit`, children: b })),
      (t[22] = c),
      (t[23] = S));
  let C;
  t[24] !== S || t[25] !== y
    ? ((C = (0, $.jsx)(r, { children: (0, $.jsxs)(x, { children: [y, S] }) })),
      (t[24] = S),
      (t[25] = y),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] !== C || t[28] !== p || t[29] !== _
    ? ((w = (0, $.jsxs)(me, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: p,
        children: [_, C],
      })),
      (t[27] = C),
      (t[28] = p),
      (t[29] = _),
      (t[30] = w))
    : (w = t[30]);
  let T;
  return (
    t[31] !== c || t[32] !== d || t[33] !== w || t[34] !== f
      ? ((T = (0, $.jsx)(oe, {
          open: !0,
          shouldIgnoreClickOutside: c,
          showDialogClose: d,
          size: `compact`,
          onOpenChange: f,
          children: w,
        })),
        (t[31] = c),
        (t[32] = d),
        (t[33] = w),
        (t[34] = f),
        (t[35] = T))
      : (T = t[35]),
    T
  );
}
function qe(e) {
  let t = (0, Z.c)(12),
    { liveUrl: n, title: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = Se(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, $.jsx)(be, { className: `icon-md` }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, $.jsx)(`div`, {
        className: `truncate text-sm font-medium text-token-foreground`,
        children: r,
      })),
      (t[3] = r),
      (t[4] = s));
  let c;
  t[5] === a
    ? (c = t[6])
    : ((c =
        a ??
        (0, $.jsx)(l, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in the share dialog for a site without a published URL`,
        })),
      (t[5] = a),
      (t[6] = c));
  let u;
  t[7] === c
    ? (u = t[8])
    : ((u = (0, $.jsx)(`div`, {
        className: `truncate text-xs text-token-text-tertiary`,
        children: c,
      })),
      (t[7] = c),
      (t[8] = u));
  let d;
  return (
    t[9] !== s || t[10] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-token-bg-secondary p-3`,
          children: [
            o,
            (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [s, u] }),
          ],
        })),
        (t[9] = s),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Je(e) {
  let t = (0, Z.c)(51),
    {
      activeAccessGroups: n,
      activeAccessUsers: i,
      accessPolicy: a,
      availableAccessModes: o,
      canManageInvitees: s,
      isWorkspaceAccount: c,
      removableAccessGroupIds: u,
      selectedAccessMode: d,
      ownerEmail: f,
      ownerId: p,
      onAccessModeChange: m,
      onRemoveAccessGroup: h,
      onRemoveAccessUser: g,
    } = e,
    _ = ce(),
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  if (
    t[0] !== a.access_mode ||
    t[1] !== a.revision ||
    t[2] !== i ||
    t[3] !== o ||
    t[4] !== s ||
    t[5] !== c ||
    t[6] !== m ||
    t[7] !== g ||
    t[8] !== f ||
    t[9] !== p ||
    t[10] !== d
  ) {
    let e = Ye({ activeAccessUsers: i, currentAccountUserId: p, currentUserEmail: f }),
      n = i.filter((t) => t.account_user_id !== e?.account_user_id);
    ((v = r),
      (S = `gap-3`),
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((C = (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-foreground`,
            children: (0, $.jsx)(l, {
              id: `appgenShareDialog.access.title`,
              defaultMessage: `Who has access`,
              description: `Heading for access information in the site share dialog`,
            }),
          })),
          (t[18] = C))
        : (C = t[18]));
    let u = `${a.revision}:${a.access_mode}`,
      h = d ?? a.access_mode;
    (t[19] !== a.access_mode ||
    t[20] !== o ||
    t[21] !== c ||
    t[22] !== m ||
    t[23] !== u ||
    t[24] !== h
      ? ((w = (0, $.jsx)(
          Ze,
          {
            availableAccessModes: o,
            currentAccessMode: a.access_mode,
            isWorkspaceAccount: c,
            selectedAccessMode: h,
            onAccessModeChange: m,
          },
          u,
        )),
        (t[19] = a.access_mode),
        (t[20] = o),
        (t[21] = c),
        (t[22] = m),
        (t[23] = u),
        (t[24] = h),
        (t[25] = w))
      : (w = t[25]),
      (y = `vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto`),
      (b =
        e == null
          ? null
          : (0, $.jsx)(U, {
              avatarLabel: W(e),
              label: Xe(e),
              secondaryLabel: G(e),
              trailingContent: (0, $.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, $.jsx)(l, {
                  id: `appgenShareDialog.permission.owner`,
                  defaultMessage: `Owner`,
                  description: `Label for the owner in the site share dialog`,
                }),
              }),
            })));
    let _;
    (t[26] !== s || t[27] !== g
      ? ((_ = (e) =>
          (0, $.jsx)(
            U,
            {
              avatarLabel: W(e),
              label: Xe(e),
              secondaryLabel: G(e),
              trailingContent: (0, $.jsx)(K, {
                onRemoveAccess: s
                  ? () => {
                      g(e);
                    }
                  : void 0,
              }),
            },
            e.account_user_id,
          )),
        (t[26] = s),
        (t[27] = g),
        (t[28] = _))
      : (_ = t[28]),
      (x = n.map(_)),
      (t[0] = a.access_mode),
      (t[1] = a.revision),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = m),
      (t[7] = g),
      (t[8] = f),
      (t[9] = p),
      (t[10] = d),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w));
  } else
    ((v = t[11]), (y = t[12]), (b = t[13]), (x = t[14]), (S = t[15]), (C = t[16]), (w = t[17]));
  let T;
  if (t[29] !== n || t[30] !== s || t[31] !== _ || t[32] !== h || t[33] !== u) {
    let e;
    (t[35] !== s || t[36] !== _ || t[37] !== h || t[38] !== u
      ? ((e = (e) =>
          (0, $.jsx)(
            U,
            {
              label: e.name,
              secondaryLabel: _.formatMessage(
                {
                  id: `appgenShareDialog.access.groupSize`,
                  defaultMessage: `{count, plural, one {# member} other {# members}}`,
                  description: `Member count shown for a group in the site share dialog`,
                },
                { count: e.size },
              ),
              trailingContent: (0, $.jsx)(K, {
                onRemoveAccess:
                  s && u.has(e.id)
                    ? () => {
                        h(e);
                      }
                    : void 0,
              }),
            },
            e.id,
          )),
        (t[35] = s),
        (t[36] = _),
        (t[37] = h),
        (t[38] = u),
        (t[39] = e))
      : (e = t[39]),
      (T = n.map(e)),
      (t[29] = n),
      (t[30] = s),
      (t[31] = _),
      (t[32] = h),
      (t[33] = u),
      (t[34] = T));
  } else T = t[34];
  let E;
  t[40] !== y || t[41] !== b || t[42] !== x || t[43] !== T
    ? ((E = (0, $.jsxs)(`div`, { className: y, children: [b, x, T] })),
      (t[40] = y),
      (t[41] = b),
      (t[42] = x),
      (t[43] = T),
      (t[44] = E))
    : (E = t[44]);
  let D;
  return (
    t[45] !== v || t[46] !== S || t[47] !== C || t[48] !== w || t[49] !== E
      ? ((D = (0, $.jsxs)(v, { className: S, children: [C, w, E] })),
        (t[45] = v),
        (t[46] = S),
        (t[47] = C),
        (t[48] = w),
        (t[49] = E),
        (t[50] = D))
      : (D = t[50]),
    D
  );
}
function Ye({ activeAccessUsers: e, currentAccountUserId: t, currentUserEmail: n }) {
  let r = n?.trim().toLowerCase();
  if (r != null && r.length > 0) {
    let t = e.find((e) => e.email?.trim().toLowerCase() === r);
    if (t != null) return t;
  }
  return t == null ? null : (e.find((e) => e.account_user_id === t) ?? null);
}
function Xe(e) {
  return e.name ?? e.email ?? e.account_user_id;
}
function W(e) {
  return e.name ?? e.email ?? e.account_user_id.replace(/[-_]/g, ` `);
}
function G(e) {
  return e.name == null ? null : e.email;
}
function K(e) {
  let t = (0, Z.c)(4),
    { onRemoveAccess: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [{ value: `visit` }]),
      (i = (0, $.jsx)(l, {
        id: `appgenShareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing a person's site access`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsx)(Me, {
          options: r,
          removeLabel: i,
          value: `visit`,
          renderLabel: q,
          onRemoveAccess: n,
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function q() {
  return (0, $.jsx)(J, {});
}
function J() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(l, {
          id: `appgenShareDialog.permission.visit`,
          defaultMessage: `Can visit`,
          description: `Visitor permission label in the site share dialog`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ze(e) {
  let t = (0, Z.c)(13),
    {
      availableAccessModes: n,
      currentAccessMode: r,
      isWorkspaceAccount: i,
      selectedAccessMode: a,
      onAccessModeChange: o,
    } = e,
    s,
    c;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e = R({ availableAccessModes: n, currentAccessMode: r, isWorkspaceAccount: i });
    ((s = je), (c = e.map(Y)), (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = s), (t[4] = c));
  } else ((s = t[3]), (c = t[4]));
  let u;
  t[5] === i
    ? (u = t[6])
    : ((u = (e) =>
        e === `custom` && !i
          ? (0, $.jsx)(l, {
              id: `appgenAccess.state.personalOwnerOnly`,
              defaultMessage: `Just me`,
              description: `Label for a personal site whose access is limited to its owner`,
            })
          : (0, $.jsx)(l, { ...ot[e] })),
      (t[5] = i),
      (t[6] = u));
  let d;
  return (
    t[7] !== s || t[8] !== o || t[9] !== a || t[10] !== c || t[11] !== u
      ? ((d = (0, $.jsx)(s, { options: c, value: a, renderLabel: u, onChange: o })),
        (t[7] = s),
        (t[8] = o),
        (t[9] = a),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function Y(e) {
  let { disabled: t, value: n } = e;
  return { disabled: t, Icon: X(n), value: n };
}
function X(e) {
  switch (e) {
    case `admins_only`:
    case `custom`:
      return L;
    case `workspace_all`:
      return F;
    case `public`:
      return D;
  }
}
function Qe(e) {
  let t = (0, Z.c)(35),
    {
      accessMode: n,
      hasPendingAccessChange: i,
      hasPendingInvitees: a,
      isSaving: o,
      liveUrl: s,
      onCancelChanges: c,
      onDone: u,
    } = e,
    d = ce(),
    p = b(f),
    m;
  t[0] !== o || t[1] !== s
    ? ((m = et({ action: `copyLink`, isSaving: o, liveUrl: s })),
      (t[0] = o),
      (t[1] = s),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] !== o || t[4] !== s
    ? ((g = et({ action: `visit`, isSaving: o, liveUrl: s })), (t[3] = o), (t[4] = s), (t[5] = g))
    : (g = t[5]);
  let v = g,
    y;
  t[6] === u ? (y = t[7]) : ((y = { onClick: u }), (t[6] = u), (t[7] = y));
  let x;
  t[8] === n
    ? (x = t[9])
    : ((x =
        n === `public`
          ? (0, $.jsx)(l, {
              id: `appgenShareDialog.publish`,
              defaultMessage: `Publish`,
              description: `Button label for publishing a site to the public internet`,
            })
          : void 0),
      (t[8] = n),
      (t[9] = x));
  let S;
  t[10] !== u || t[11] !== x
    ? ((S = { label: x, onClick: u }), (t[10] = u), (t[11] = x), (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== y || t[14] !== S
    ? ((C = { invite: y, share: S }), (t[13] = y), (t[14] = S), (t[15] = C))
    : (C = t[15]);
  let T;
  t[16] === c ? (T = t[17]) : ((T = { onClick: c }), (t[16] = c), (t[17] = T));
  let E;
  t[18] !== h || t[19] !== d || t[20] !== o || t[21] !== s || t[22] !== p || t[23] !== v
    ? ((E =
        s === void 0
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(_, {
                  tooltipContent: v,
                  children: (0, $.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, $.jsxs)(O, {
                      color: `outline`,
                      disabled: o || s == null,
                      size: `toolbar`,
                      onClick: (e) => {
                        s != null && le({ event: e, href: s, initiator: `mcp_app_resource` });
                      },
                      children: [
                        s == null
                          ? null
                          : (0, $.jsx)(se, { className: `icon-xs`, ExternalIcon: Ce, href: s }),
                        (0, $.jsx)(l, {
                          id: `appgenShareDialog.visit`,
                          defaultMessage: `Visit`,
                          description: `Button label for opening a live site externally`,
                        }),
                      ],
                    }),
                  }),
                }),
                (0, $.jsx)(_, {
                  tooltipContent: h,
                  children: (0, $.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, $.jsxs)(O, {
                      color: `outline`,
                      disabled: o || s == null,
                      size: `toolbar`,
                      onClick: () => {
                        s != null &&
                          V(s).then(() => {
                            p.get(w).info(
                              d.formatMessage({
                                id: `appgenShareDialog.copySuccess`,
                                defaultMessage: `Copied to clipboard`,
                                description: `Toast shown after copying a live site URL`,
                              }),
                            );
                          }, $e);
                      },
                      children: [
                        (0, $.jsx)(B, { className: `icon-xs` }),
                        (0, $.jsx)(l, {
                          id: `appgenShareDialog.copyLink`,
                          defaultMessage: `Copy link`,
                          description: `Button label for copying a live site URL`,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })),
      (t[18] = h),
      (t[19] = d),
      (t[20] = o),
      (t[21] = s),
      (t[22] = p),
      (t[23] = v),
      (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] === d
    ? (D = t[26])
    : ((D = d.formatMessage({
        id: `appgenShareDialog.saving`,
        defaultMessage: `Saving`,
        description: `Accessible label for the site share dialog save button while saving`,
      })),
      (t[25] = d),
      (t[26] = D));
  let k;
  return (
    t[27] !== i ||
    t[28] !== a ||
    t[29] !== o ||
    t[30] !== C ||
    t[31] !== T ||
    t[32] !== E ||
    t[33] !== D
      ? ((k = (0, $.jsx)(r, {
          className: `pt-4`,
          children: (0, $.jsx)(`div`, {
            className: `flex w-full items-center justify-end gap-3`,
            children: (0, $.jsx)(H, {
              actions: C,
              cancelAction: T,
              disabled: o,
              hasPendingAccessChange: i,
              hasPendingInvitees: a,
              idleActions: E,
              isSaving: o,
              savingAriaLabel: D,
              size: `toolbar`,
              spinnerClassName: `icon-xxs`,
            }),
          }),
        })),
        (t[27] = i),
        (t[28] = a),
        (t[29] = o),
        (t[30] = C),
        (t[31] = T),
        (t[32] = E),
        (t[33] = D),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
function $e() {}
function et({ action: e, isSaving: t, liveUrl: n }) {
  if (n == null)
    switch (e) {
      case `copyLink`:
        return (0, $.jsx)(l, {
          id: `appgenShareDialog.copyLinkDisabled.notPublished`,
          defaultMessage: `Publish this site to copy its link`,
          description: `Tooltip explaining why the site share dialog copy link button is disabled`,
        });
      case `visit`:
        return (0, $.jsx)(l, {
          id: `appgenShareDialog.visitDisabled.notPublished`,
          defaultMessage: `Publish this site before visiting it`,
          description: `Tooltip explaining why the site share dialog visit button is disabled`,
        });
    }
  return t
    ? (0, $.jsx)(l, {
        id: `appgenShareDialog.footerActionDisabled.saving`,
        defaultMessage: `Sharing settings are still saving`,
        description: `Tooltip explaining why site share dialog footer actions are disabled while saving`,
      })
    : null;
}
function tt(e) {
  return [
    ...(e?.workspace_groups.map((e) => ({ ...e, source: `workspace` })) ?? []),
    ...(e?.tenant_groups.map((e) => ({ ...e, source: `tenant` })) ?? []),
  ];
}
function nt(...e) {
  return {
    tenant_groups: rt(e.flatMap((e) => e?.tenant_groups ?? [])),
    workspace_groups: rt(e.flatMap((e) => e?.workspace_groups ?? [])),
  };
}
function rt(e) {
  return Array.from(new Map(e.map((e) => [e.id, e])).values());
}
function it(e, t) {
  return {
    chipLabel: e.name,
    id: `group:${e.source}:${e.id}`,
    label: e.name,
    secondaryLabel: t.formatMessage(
      {
        id: `appgenShareDialog.access.groupSize`,
        defaultMessage: `{count, plural, one {# member} other {# members}}`,
        description: `Member count shown for a group in the site share dialog`,
      },
      { count: e.size },
    ),
    target: { kind: `group`, group: e },
  };
}
function at(e) {
  let t = Ae(e);
  return {
    chipLabel: t.chipLabel,
    id: `user:${e.account_user_id}`,
    label: t.label,
    secondaryLabel: t.secondaryLabel,
    target: { kind: `user`, user: e },
  };
}
var Z,
  Q,
  $,
  ot,
  st = e(() => {
    ((Z = v()),
      T(),
      (Q = t(M(), 1)),
      d(),
      o(),
      c(),
      ae(),
      k(),
      n(),
      u(),
      p(),
      h(),
      ke(),
      Ne(),
      Oe(),
      Le(),
      Fe(),
      Ee(),
      A(),
      ue(),
      E(),
      xe(),
      I(),
      de(),
      N(),
      P(),
      we(),
      Ie(),
      m(),
      Te(),
      j(),
      z(),
      s(),
      ye(),
      ($ = ne()),
      (ot = S({
        admins_only: {
          id: `appgenAccess.state.ownerOnly`,
          defaultMessage: `Just me`,
          description: `Label for a site whose access is limited to its owner`,
        },
        custom: {
          id: `appgenAccess.state.privatelyShared`,
          defaultMessage: `Only those invited`,
          description: `Label for a site shared privately with invited people`,
        },
        public: {
          id: `appgenAccess.state.public`,
          defaultMessage: `Anyone on the Internet`,
          description: `Label for a site shared publicly on the internet`,
        },
        workspace_all: {
          id: `appgenAccess.state.workspaceAll`,
          defaultMessage: `Anyone in this workspace with the link`,
          description: `Label for a site shared with anyone in the workspace`,
        },
      })));
  });
export { st as n, ze as t };
//# sourceMappingURL=appgen-share-dialog-Ca-VUEmz.js.map
