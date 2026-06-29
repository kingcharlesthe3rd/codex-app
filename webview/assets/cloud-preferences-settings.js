import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  AB as r,
  AN as i,
  BV as a,
  DN as o,
  FB as s,
  JV as c,
  ON as l,
  QP as u,
  cM as d,
  iF as f,
  kN as p,
  lF as m,
  qV as h,
  sF as g,
  uM as _,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import { J as v, K as y } from "./app-initial~app-main~automations-page.js";
import { Ur as b, Wr as x } from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as S,
  K as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as w,
  h as T,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as E,
  t as D,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as O, t as k } from "./segmented-toggle.js";
import { a as A, i as ee, n as j, o as M, r as N, t as te } from "./cloud-preferences.js";
function P() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(y, {
          title: (0, z.jsx)(S, { slug: `cloud-settings` }),
          children: (0, z.jsx)(F, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function F() {
  let e = (0, L.c)(93),
    t = m(),
    n = s(u),
    r = A(),
    i = ee(),
    a = M(),
    [c, l] = (0, R.useState)(null);
  if (r.isError || i.isError) {
    let t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(g, {
          id: `settings.general.cloudPreferences.loadError`,
          defaultMessage: `Unable to load cloud preferences`,
          description: `Error message shown when cloud preferences fail to load`,
        })),
        (e[0] = t))
      : (t = e[0]);
    let n;
    e[1] !== i || e[2] !== r
      ? ((n = () => {
          (r.refetch(), i.refetch());
        }),
        (e[1] = i),
        (e[2] = r),
        (e[3] = n))
      : (n = e[3]);
    let a;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, z.jsx)(g, {
          id: `settings.general.cloudPreferences.retry`,
          defaultMessage: `Retry`,
          description: `Button label to retry loading cloud preferences`,
        })),
        (e[4] = a))
      : (a = e[4]);
    let s;
    return (
      e[5] === n
        ? (s = e[6])
        : ((s = (0, z.jsx)(D, {
            children: (0, z.jsx)(D.Content, {
              children: (0, z.jsx)(T, {
                children: (0, z.jsx)(b, {
                  label: t,
                  control: (0, z.jsx)(o, {
                    color: `secondary`,
                    onClick: n,
                    size: `toolbar`,
                    children: a,
                  }),
                }),
              }),
            }),
          })),
          (e[5] = n),
          (e[6] = s)),
      s
    );
  }
  if (r.data == null || i.data == null) {
    let t;
    return (
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(D, {
            children: (0, z.jsx)(D.Content, {
              children: (0, z.jsx)(T, {
                children: (0, z.jsx)(b, {
                  label: (0, z.jsx)(g, {
                    id: `settings.general.cloudPreferences.loading`,
                    defaultMessage: `Loading cloud preferences…`,
                    description: `Loading label for cloud preferences`,
                  }),
                  control: (0, z.jsx)(p, { className: `icon-xs` }),
                }),
              }),
            }),
          })),
          (e[7] = t))
        : (t = e[7]),
      t
    );
  }
  let d = r.data,
    f = i.data,
    h = c?.baseline === d.branch_format ? c.value : d.branch_format,
    v,
    y,
    x,
    S,
    C,
    w,
    E,
    O,
    N;
  if (
    e[8] !== h ||
    e[9] !== f.branch_format_max_length ||
    e[10] !== f.branch_format_special_values ||
    e[11] !== t ||
    e[12] !== d.git_diff_mode ||
    e[13] !== n ||
    e[14] !== a
  ) {
    C = j(h, f.branch_format_max_length, f.branch_format_special_values);
    let r;
    (e[24] !== t || e[25] !== n || e[26] !== a
      ? ((r = (e, r) => {
          a.mutate(e, {
            onSuccess: () => {
              n.get(_).success(r);
            },
            onError: () => {
              n.get(_).danger(
                t.formatMessage({
                  id: `settings.general.cloudPreferences.save.error`,
                  defaultMessage: `Unable to save cloud preference`,
                  description: `Toast shown when saving a cloud preference fails`,
                }),
              );
            },
          });
        }),
        (e[24] = t),
        (e[25] = n),
        (e[26] = a),
        (e[27] = r))
      : (r = e[27]),
      (w = r),
      (S = D),
      (x = D.Content),
      (y = T));
    let i, o;
    e[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, z.jsx)(g, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (o = (0, z.jsx)(g, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud tasks`,
          description: `Description for cloud diff display preference`,
        })),
        (e[28] = i),
        (e[29] = o))
      : ((i = e[28]), (o = e[29]));
    let s;
    e[30] === t
      ? (s = e[31])
      : ((s = t.formatMessage({
          id: `settings.general.cloudPreferences.diffView.ariaLabel`,
          defaultMessage: `Diff view`,
          description: `Aria label for cloud diff display selector`,
        })),
        (e[30] = t),
        (e[31] = s));
    let c;
    e[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, z.jsx)(g, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[32] = c))
      : (c = e[32]);
    let l;
    e[33] === a.isPending
      ? (l = e[34])
      : ((l = { id: `unified`, label: c, disabled: a.isPending }),
        (e[33] = a.isPending),
        (e[34] = l));
    let u;
    e[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, z.jsx)(g, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[35] = u))
      : (u = e[35]);
    let p;
    e[36] === a.isPending
      ? (p = e[37])
      : ((p = { id: `split`, label: u, disabled: a.isPending }),
        (e[36] = a.isPending),
        (e[37] = p));
    let m;
    e[38] !== p || e[39] !== l
      ? ((m = [l, p]), (e[38] = p), (e[39] = l), (e[40] = m))
      : (m = e[40]);
    let A;
    (e[41] !== t || e[42] !== w
      ? ((A = (e) => {
          w(
            { git_diff_mode: e },
            t.formatMessage({
              id: `settings.general.cloudPreferences.diffView.save.success`,
              defaultMessage: `Saved diff view`,
              description: `Toast shown when cloud diff display preference is saved`,
            }),
          );
        }),
        (e[41] = t),
        (e[42] = w),
        (e[43] = A))
      : (A = e[43]),
      e[44] !== d.git_diff_mode || e[45] !== m || e[46] !== A || e[47] !== s
        ? ((N = (0, z.jsx)(b, {
            label: i,
            description: o,
            control: (0, z.jsx)(k, {
              ariaLabel: s,
              options: m,
              selectedId: d.git_diff_mode,
              onSelect: A,
            }),
          })),
          (e[44] = d.git_diff_mode),
          (e[45] = m),
          (e[46] = A),
          (e[47] = s),
          (e[48] = N))
        : (N = e[48]),
      (v = b),
      e[49] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, z.jsx)(g, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[49] = E))
        : (E = e[49]),
      (O =
        C == null
          ? (0, z.jsx)(g, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: te(h, f.branch_format_special_values) },
            })
          : I(C)),
      (e[8] = h),
      (e[9] = f.branch_format_max_length),
      (e[10] = f.branch_format_special_values),
      (e[11] = t),
      (e[12] = d.git_diff_mode),
      (e[13] = n),
      (e[14] = a),
      (e[15] = v),
      (e[16] = y),
      (e[17] = x),
      (e[18] = S),
      (e[19] = C),
      (e[20] = w),
      (e[21] = E),
      (e[22] = O),
      (e[23] = N));
  } else
    ((v = e[15]),
      (y = e[16]),
      (x = e[17]),
      (S = e[18]),
      (C = e[19]),
      (w = e[20]),
      (E = e[21]),
      (O = e[22]),
      (N = e[23]));
  let P;
  e[50] === t
    ? (P = e[51])
    : ((P = t.formatMessage({
        id: `settings.general.cloudPreferences.branchFormat.input.ariaLabel`,
        defaultMessage: `Branch format pattern`,
        description: `Accessible label for the cloud branch format input`,
      })),
      (e[50] = t),
      (e[51] = P));
  let F = a.isPending,
    B;
  e[52] === t
    ? (B = e[53])
    : ((B = t.formatMessage(
        {
          id: `settings.general.cloudPreferences.branchFormat.input.placeholder`,
          defaultMessage: `codex/{pattern}`,
          description: `Placeholder for the cloud branch format input`,
        },
        { pattern: `{feature}` },
      )),
      (e[52] = t),
      (e[53] = B));
  let V;
  e[54] === d.branch_format
    ? (V = e[55])
    : ((V = (e) => {
        l({ baseline: d.branch_format, value: e.target.value });
      }),
      (e[54] = d.branch_format),
      (e[55] = V));
  let H;
  e[56] !== h || e[57] !== P || e[58] !== B || e[59] !== V || e[60] !== a.isPending
    ? ((H = (0, z.jsx)(`input`, {
        className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        "aria-label": P,
        disabled: F,
        placeholder: B,
        value: h,
        onChange: V,
      })),
      (e[56] = h),
      (e[57] = P),
      (e[58] = B),
      (e[59] = V),
      (e[60] = a.isPending),
      (e[61] = H))
    : (H = e[61]);
  let U;
  e[62] !== v || e[63] !== E || e[64] !== O || e[65] !== H
    ? ((U = (0, z.jsx)(v, { label: E, description: O, control: H })),
      (e[62] = v),
      (e[63] = E),
      (e[64] = O),
      (e[65] = H),
      (e[66] = U))
    : (U = e[66]);
  let W;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[67] = W))
    : (W = e[67]);
  let G;
  e[68] === f.branch_format_special_values
    ? (G = e[69])
    : ((G = f.branch_format_special_values.map(ne).join(`, `)),
      (e[68] = f.branch_format_special_values),
      (e[69] = G));
  let K = h === d.branch_format || C != null,
    q;
  e[70] !== h || e[71] !== t || e[72] !== w
    ? ((q = () => {
        w(
          { branch_format: h },
          t.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[70] = h),
      (e[71] = t),
      (e[72] = w),
      (e[73] = q))
    : (q = e[73]);
  let J;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[74] = J))
    : (J = e[74]);
  let Y;
  e[75] !== K || e[76] !== q || e[77] !== a.isPending
    ? ((Y = (0, z.jsx)(o, {
        color: `primary`,
        disabled: K,
        loading: a.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[75] = K),
      (e[76] = q),
      (e[77] = a.isPending),
      (e[78] = Y))
    : (Y = e[78]);
  let X;
  e[79] !== G || e[80] !== Y
    ? ((X = (0, z.jsx)(b, { label: W, description: G, control: Y })),
      (e[79] = G),
      (e[80] = Y),
      (e[81] = X))
    : (X = e[81]);
  let Z;
  e[82] !== y || e[83] !== X || e[84] !== N || e[85] !== U
    ? ((Z = (0, z.jsxs)(y, { children: [N, U, X] })),
      (e[82] = y),
      (e[83] = X),
      (e[84] = N),
      (e[85] = U),
      (e[86] = Z))
    : (Z = e[86]);
  let Q;
  e[87] !== x || e[88] !== Z
    ? ((Q = (0, z.jsx)(x, { children: Z })), (e[87] = x), (e[88] = Z), (e[89] = Q))
    : (Q = e[89]);
  let $;
  return (
    e[90] !== S || e[91] !== Q
      ? (($ = (0, z.jsx)(S, { children: Q })), (e[90] = S), (e[91] = Q), (e[92] = $))
      : ($ = e[92]),
    $
  );
}
function ne(e) {
  return e.value;
}
function I(e) {
  switch (e) {
    case `bracket-mismatch`:
      return (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, z.jsx)(g, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var L, R, z;
e(() => {
  ((L = h()),
    r(),
    (R = t(c(), 1)),
    f(),
    l(),
    O(),
    i(),
    d(),
    n(),
    v(),
    E(),
    x(),
    C(),
    w(),
    N(),
    (z = a()));
})();
export { P as CloudPreferencesSettings };
//# sourceMappingURL=cloud-preferences-settings.js.map
