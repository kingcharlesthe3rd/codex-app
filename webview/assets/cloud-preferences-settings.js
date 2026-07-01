import { n as e, s as t } from "./rolldown-runtime.js";
import {
  GP as n,
  HP as r,
  IP as i,
  LP as a,
  RV as o,
  TB as s,
  Yj as c,
  bB as l,
  fN as u,
  hN as d,
  jV as f,
  mN as p,
  pN as m,
  qP as h,
  qj as g,
  zV as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { Cr as v, Sr as y } from "./app-initial~app-main~onboarding-page.js";
import { lt as b, ut as x } from "./app-initial~app-main~automations-page.js";
import {
  O as S,
  k as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  r as w,
  t as T,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as E,
  t as D,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as O, t as k } from "./segmented-toggle.js";
import { a as A, i as j, n as M, o as N, r as P, t as ee } from "./cloud-preferences.js";
function F() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(T, {
          title: (0, z.jsx)(S, { slug: `cloud-settings` }),
          children: (0, z.jsx)(I, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function I() {
  let e = (0, L.c)(93),
    t = h(),
    r = s(i),
    a = A(),
    o = j(),
    l = N(),
    [d, f] = (0, R.useState)(null);
  if (a.isError || o.isError) {
    let t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(n, {
          id: `settings.general.cloudPreferences.loadError`,
          defaultMessage: `Unable to load cloud preferences`,
          description: `Error message shown when cloud preferences fail to load`,
        })),
        (e[0] = t))
      : (t = e[0]);
    let r;
    e[1] !== o || e[2] !== a
      ? ((r = () => {
          (a.refetch(), o.refetch());
        }),
        (e[1] = o),
        (e[2] = a),
        (e[3] = r))
      : (r = e[3]);
    let i;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, z.jsx)(n, {
          id: `settings.general.cloudPreferences.retry`,
          defaultMessage: `Retry`,
          description: `Button label to retry loading cloud preferences`,
        })),
        (e[4] = i))
      : (i = e[4]);
    let s;
    return (
      e[5] === r
        ? (s = e[6])
        : ((s = (0, z.jsx)(b, {
            children: (0, z.jsx)(b.Content, {
              children: (0, z.jsx)(D, {
                children: (0, z.jsx)(y, {
                  label: t,
                  control: (0, z.jsx)(u, {
                    color: `secondary`,
                    onClick: r,
                    size: `toolbar`,
                    children: i,
                  }),
                }),
              }),
            }),
          })),
          (e[5] = r),
          (e[6] = s)),
      s
    );
  }
  if (a.data == null || o.data == null) {
    let t;
    return (
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(b, {
            children: (0, z.jsx)(b.Content, {
              children: (0, z.jsx)(D, {
                children: (0, z.jsx)(y, {
                  label: (0, z.jsx)(n, {
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
  let m = a.data,
    g = o.data,
    _ = d?.baseline === m.branch_format ? d.value : m.branch_format,
    v,
    x,
    S,
    C,
    w,
    T,
    E,
    O,
    P;
  if (
    e[8] !== _ ||
    e[9] !== g.branch_format_max_length ||
    e[10] !== g.branch_format_special_values ||
    e[11] !== t ||
    e[12] !== m.git_diff_mode ||
    e[13] !== r ||
    e[14] !== l
  ) {
    w = M(_, g.branch_format_max_length, g.branch_format_special_values);
    let i;
    (e[24] !== t || e[25] !== r || e[26] !== l
      ? ((i = (e, n) => {
          l.mutate(e, {
            onSuccess: () => {
              r.get(c).success(n);
            },
            onError: () => {
              r.get(c).danger(
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
        (e[25] = r),
        (e[26] = l),
        (e[27] = i))
      : (i = e[27]),
      (T = i),
      (C = b),
      (S = b.Content),
      (x = D));
    let a, o;
    e[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, z.jsx)(n, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (o = (0, z.jsx)(n, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud tasks`,
          description: `Description for cloud diff display preference`,
        })),
        (e[28] = a),
        (e[29] = o))
      : ((a = e[28]), (o = e[29]));
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
    let u;
    e[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, z.jsx)(n, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[32] = u))
      : (u = e[32]);
    let d;
    e[33] === l.isPending
      ? (d = e[34])
      : ((d = { id: `unified`, label: u, disabled: l.isPending }),
        (e[33] = l.isPending),
        (e[34] = d));
    let f;
    e[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, z.jsx)(n, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[35] = f))
      : (f = e[35]);
    let p;
    e[36] === l.isPending
      ? (p = e[37])
      : ((p = { id: `split`, label: f, disabled: l.isPending }),
        (e[36] = l.isPending),
        (e[37] = p));
    let h;
    e[38] !== p || e[39] !== d
      ? ((h = [d, p]), (e[38] = p), (e[39] = d), (e[40] = h))
      : (h = e[40]);
    let A;
    (e[41] !== t || e[42] !== T
      ? ((A = (e) => {
          T(
            { git_diff_mode: e },
            t.formatMessage({
              id: `settings.general.cloudPreferences.diffView.save.success`,
              defaultMessage: `Saved diff view`,
              description: `Toast shown when cloud diff display preference is saved`,
            }),
          );
        }),
        (e[41] = t),
        (e[42] = T),
        (e[43] = A))
      : (A = e[43]),
      e[44] !== m.git_diff_mode || e[45] !== h || e[46] !== A || e[47] !== s
        ? ((P = (0, z.jsx)(y, {
            label: a,
            description: o,
            control: (0, z.jsx)(k, {
              ariaLabel: s,
              options: h,
              selectedId: m.git_diff_mode,
              onSelect: A,
            }),
          })),
          (e[44] = m.git_diff_mode),
          (e[45] = h),
          (e[46] = A),
          (e[47] = s),
          (e[48] = P))
        : (P = e[48]),
      (v = y),
      e[49] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, z.jsx)(n, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[49] = E))
        : (E = e[49]),
      (O =
        w == null
          ? (0, z.jsx)(n, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: ee(_, g.branch_format_special_values) },
            })
          : ne(w)),
      (e[8] = _),
      (e[9] = g.branch_format_max_length),
      (e[10] = g.branch_format_special_values),
      (e[11] = t),
      (e[12] = m.git_diff_mode),
      (e[13] = r),
      (e[14] = l),
      (e[15] = v),
      (e[16] = x),
      (e[17] = S),
      (e[18] = C),
      (e[19] = w),
      (e[20] = T),
      (e[21] = E),
      (e[22] = O),
      (e[23] = P));
  } else
    ((v = e[15]),
      (x = e[16]),
      (S = e[17]),
      (C = e[18]),
      (w = e[19]),
      (T = e[20]),
      (E = e[21]),
      (O = e[22]),
      (P = e[23]));
  let F;
  e[50] === t
    ? (F = e[51])
    : ((F = t.formatMessage({
        id: `settings.general.cloudPreferences.branchFormat.input.ariaLabel`,
        defaultMessage: `Branch format pattern`,
        description: `Accessible label for the cloud branch format input`,
      })),
      (e[50] = t),
      (e[51] = F));
  let I = l.isPending,
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
  e[54] === m.branch_format
    ? (V = e[55])
    : ((V = (e) => {
        f({ baseline: m.branch_format, value: e.target.value });
      }),
      (e[54] = m.branch_format),
      (e[55] = V));
  let H;
  e[56] !== _ || e[57] !== F || e[58] !== B || e[59] !== V || e[60] !== l.isPending
    ? ((H = (0, z.jsx)(`input`, {
        className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        "aria-label": F,
        disabled: I,
        placeholder: B,
        value: _,
        onChange: V,
      })),
      (e[56] = _),
      (e[57] = F),
      (e[58] = B),
      (e[59] = V),
      (e[60] = l.isPending),
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
    ? ((W = (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[67] = W))
    : (W = e[67]);
  let G;
  e[68] === g.branch_format_special_values
    ? (G = e[69])
    : ((G = g.branch_format_special_values.map(te).join(`, `)),
      (e[68] = g.branch_format_special_values),
      (e[69] = G));
  let K = _ === m.branch_format || w != null,
    q;
  e[70] !== _ || e[71] !== t || e[72] !== T
    ? ((q = () => {
        T(
          { branch_format: _ },
          t.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[70] = _),
      (e[71] = t),
      (e[72] = T),
      (e[73] = q))
    : (q = e[73]);
  let J;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[74] = J))
    : (J = e[74]);
  let Y;
  e[75] !== K || e[76] !== q || e[77] !== l.isPending
    ? ((Y = (0, z.jsx)(u, {
        color: `primary`,
        disabled: K,
        loading: l.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[75] = K),
      (e[76] = q),
      (e[77] = l.isPending),
      (e[78] = Y))
    : (Y = e[78]);
  let X;
  e[79] !== G || e[80] !== Y
    ? ((X = (0, z.jsx)(y, { label: W, description: G, control: Y })),
      (e[79] = G),
      (e[80] = Y),
      (e[81] = X))
    : (X = e[81]);
  let Z;
  e[82] !== x || e[83] !== X || e[84] !== P || e[85] !== U
    ? ((Z = (0, z.jsxs)(x, { children: [P, U, X] })),
      (e[82] = x),
      (e[83] = X),
      (e[84] = P),
      (e[85] = U),
      (e[86] = Z))
    : (Z = e[86]);
  let Q;
  e[87] !== S || e[88] !== Z
    ? ((Q = (0, z.jsx)(S, { children: Z })), (e[87] = S), (e[88] = Z), (e[89] = Q))
    : (Q = e[89]);
  let $;
  return (
    e[90] !== C || e[91] !== Q
      ? (($ = (0, z.jsx)(C, { children: Q })), (e[90] = C), (e[91] = Q), (e[92] = $))
      : ($ = e[92]),
    $
  );
}
function te(e) {
  return e.value;
}
function ne(e) {
  switch (e) {
    case `bracket-mismatch`:
      return (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, z.jsx)(n, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var L, R, z;
e(() => {
  ((L = o()),
    l(),
    (R = t(_(), 1)),
    r(),
    m(),
    O(),
    d(),
    g(),
    a(),
    w(),
    x(),
    v(),
    C(),
    E(),
    P(),
    (z = f()));
})();
export { F as CloudPreferencesSettings };
//# sourceMappingURL=cloud-preferences-settings.js.map
