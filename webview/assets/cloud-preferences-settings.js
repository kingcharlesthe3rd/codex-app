import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  kl as a,
  oc as o,
  tc as s,
  xl as c,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Jp as l,
  Xp as u,
  Yp as d,
  Zp as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  aw as p,
  cw as m,
  uw as h,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { gt as g, vt as _ } from "./app-initial~app-main~automations-page.js";
import {
  h as v,
  p as y,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import { Mt as b, jt as x } from "./app-initial~app-main~onboarding-page.js";
import {
  a as S,
  i as C,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as w,
  t as T,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as E,
  t as D,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { n as O, t as k } from "./segmented-toggle.js";
import { a as A, i as j, n as M, o as N, r as P, t as ee } from "./cloud-preferences.js";
function F() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(g, {
          title: (0, z.jsx)(C, { slug: `cloud-settings` }),
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
    r = o(n),
    i = A(),
    a = j(),
    s = N(),
    [c, d] = (0, R.useState)(null);
  if (i.isError || a.isError) {
    let t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(m, {
          id: `settings.general.cloudPreferences.loadError`,
          defaultMessage: `Unable to load cloud preferences`,
          description: `Error message shown when cloud preferences fail to load`,
        })),
        (e[0] = t))
      : (t = e[0]);
    let n;
    e[1] !== a || e[2] !== i
      ? ((n = () => {
          (i.refetch(), a.refetch());
        }),
        (e[1] = a),
        (e[2] = i),
        (e[3] = n))
      : (n = e[3]);
    let r;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, z.jsx)(m, {
          id: `settings.general.cloudPreferences.retry`,
          defaultMessage: `Retry`,
          description: `Button label to retry loading cloud preferences`,
        })),
        (e[4] = r))
      : (r = e[4]);
    let o;
    return (
      e[5] === n
        ? (o = e[6])
        : ((o = (0, z.jsx)(D, {
            children: (0, z.jsx)(D.Content, {
              children: (0, z.jsx)(T, {
                children: (0, z.jsx)(x, {
                  label: t,
                  control: (0, z.jsx)(l, {
                    color: `secondary`,
                    onClick: n,
                    size: `toolbar`,
                    children: r,
                  }),
                }),
              }),
            }),
          })),
          (e[5] = n),
          (e[6] = o)),
      o
    );
  }
  if (i.data == null || a.data == null) {
    let t;
    return (
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(D, {
            children: (0, z.jsx)(D.Content, {
              children: (0, z.jsx)(T, {
                children: (0, z.jsx)(x, {
                  label: (0, z.jsx)(m, {
                    id: `settings.general.cloudPreferences.loading`,
                    defaultMessage: `Loading cloud preferences…`,
                    description: `Loading label for cloud preferences`,
                  }),
                  control: (0, z.jsx)(u, { className: `icon-xs` }),
                }),
              }),
            }),
          })),
          (e[7] = t))
        : (t = e[7]),
      t
    );
  }
  let f = i.data,
    p = a.data,
    g = c?.baseline === f.branch_format ? c.value : f.branch_format,
    _,
    y,
    b,
    S,
    C,
    w,
    E,
    O,
    P;
  if (
    e[8] !== g ||
    e[9] !== p.branch_format_max_length ||
    e[10] !== p.branch_format_special_values ||
    e[11] !== t ||
    e[12] !== f.git_diff_mode ||
    e[13] !== r ||
    e[14] !== s
  ) {
    C = M(g, p.branch_format_max_length, p.branch_format_special_values);
    let n;
    (e[24] !== t || e[25] !== r || e[26] !== s
      ? ((n = (e, n) => {
          s.mutate(e, {
            onSuccess: () => {
              r.get(v).success(n);
            },
            onError: () => {
              r.get(v).danger(
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
        (e[26] = s),
        (e[27] = n))
      : (n = e[27]),
      (w = n),
      (S = D),
      (b = D.Content),
      (y = T));
    let i, a;
    e[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, z.jsx)(m, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (a = (0, z.jsx)(m, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud tasks`,
          description: `Description for cloud diff display preference`,
        })),
        (e[28] = i),
        (e[29] = a))
      : ((i = e[28]), (a = e[29]));
    let o;
    e[30] === t
      ? (o = e[31])
      : ((o = t.formatMessage({
          id: `settings.general.cloudPreferences.diffView.ariaLabel`,
          defaultMessage: `Diff view`,
          description: `Aria label for cloud diff display selector`,
        })),
        (e[30] = t),
        (e[31] = o));
    let c;
    e[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, z.jsx)(m, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[32] = c))
      : (c = e[32]);
    let l;
    e[33] === s.isPending
      ? (l = e[34])
      : ((l = { id: `unified`, label: c, disabled: s.isPending }),
        (e[33] = s.isPending),
        (e[34] = l));
    let u;
    e[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, z.jsx)(m, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[35] = u))
      : (u = e[35]);
    let d;
    e[36] === s.isPending
      ? (d = e[37])
      : ((d = { id: `split`, label: u, disabled: s.isPending }),
        (e[36] = s.isPending),
        (e[37] = d));
    let h;
    e[38] !== d || e[39] !== l
      ? ((h = [l, d]), (e[38] = d), (e[39] = l), (e[40] = h))
      : (h = e[40]);
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
      e[44] !== f.git_diff_mode || e[45] !== h || e[46] !== A || e[47] !== o
        ? ((P = (0, z.jsx)(x, {
            label: i,
            description: a,
            control: (0, z.jsx)(k, {
              ariaLabel: o,
              options: h,
              selectedId: f.git_diff_mode,
              onSelect: A,
            }),
          })),
          (e[44] = f.git_diff_mode),
          (e[45] = h),
          (e[46] = A),
          (e[47] = o),
          (e[48] = P))
        : (P = e[48]),
      (_ = x),
      e[49] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, z.jsx)(m, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[49] = E))
        : (E = e[49]),
      (O =
        C == null
          ? (0, z.jsx)(m, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: ee(g, p.branch_format_special_values) },
            })
          : ne(C)),
      (e[8] = g),
      (e[9] = p.branch_format_max_length),
      (e[10] = p.branch_format_special_values),
      (e[11] = t),
      (e[12] = f.git_diff_mode),
      (e[13] = r),
      (e[14] = s),
      (e[15] = _),
      (e[16] = y),
      (e[17] = b),
      (e[18] = S),
      (e[19] = C),
      (e[20] = w),
      (e[21] = E),
      (e[22] = O),
      (e[23] = P));
  } else
    ((_ = e[15]),
      (y = e[16]),
      (b = e[17]),
      (S = e[18]),
      (C = e[19]),
      (w = e[20]),
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
  let I = s.isPending,
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
  e[54] === f.branch_format
    ? (V = e[55])
    : ((V = (e) => {
        d({ baseline: f.branch_format, value: e.target.value });
      }),
      (e[54] = f.branch_format),
      (e[55] = V));
  let H;
  e[56] !== g || e[57] !== F || e[58] !== B || e[59] !== V || e[60] !== s.isPending
    ? ((H = (0, z.jsx)(`input`, {
        className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        "aria-label": F,
        disabled: I,
        placeholder: B,
        value: g,
        onChange: V,
      })),
      (e[56] = g),
      (e[57] = F),
      (e[58] = B),
      (e[59] = V),
      (e[60] = s.isPending),
      (e[61] = H))
    : (H = e[61]);
  let U;
  e[62] !== _ || e[63] !== E || e[64] !== O || e[65] !== H
    ? ((U = (0, z.jsx)(_, { label: E, description: O, control: H })),
      (e[62] = _),
      (e[63] = E),
      (e[64] = O),
      (e[65] = H),
      (e[66] = U))
    : (U = e[66]);
  let W;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[67] = W))
    : (W = e[67]);
  let G;
  e[68] === p.branch_format_special_values
    ? (G = e[69])
    : ((G = p.branch_format_special_values.map(te).join(`, `)),
      (e[68] = p.branch_format_special_values),
      (e[69] = G));
  let K = g === f.branch_format || C != null,
    q;
  e[70] !== g || e[71] !== t || e[72] !== w
    ? ((q = () => {
        w(
          { branch_format: g },
          t.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[70] = g),
      (e[71] = t),
      (e[72] = w),
      (e[73] = q))
    : (q = e[73]);
  let J;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[74] = J))
    : (J = e[74]);
  let Y;
  e[75] !== K || e[76] !== q || e[77] !== s.isPending
    ? ((Y = (0, z.jsx)(l, {
        color: `primary`,
        disabled: K,
        loading: s.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[75] = K),
      (e[76] = q),
      (e[77] = s.isPending),
      (e[78] = Y))
    : (Y = e[78]);
  let X;
  e[79] !== G || e[80] !== Y
    ? ((X = (0, z.jsx)(x, { label: W, description: G, control: Y })),
      (e[79] = G),
      (e[80] = Y),
      (e[81] = X))
    : (X = e[81]);
  let Z;
  e[82] !== y || e[83] !== X || e[84] !== P || e[85] !== U
    ? ((Z = (0, z.jsxs)(y, { children: [P, U, X] })),
      (e[82] = y),
      (e[83] = X),
      (e[84] = P),
      (e[85] = U),
      (e[86] = Z))
    : (Z = e[86]);
  let Q;
  e[87] !== b || e[88] !== Z
    ? ((Q = (0, z.jsx)(b, { children: Z })), (e[87] = b), (e[88] = Z), (e[89] = Q))
    : (Q = e[89]);
  let $;
  return (
    e[90] !== S || e[91] !== Q
      ? (($ = (0, z.jsx)(S, { children: Q })), (e[90] = S), (e[91] = Q), (e[92] = $))
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
      return (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, z.jsx)(m, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var L, R, z;
e(() => {
  ((L = r()),
    s(),
    (R = t(a(), 1)),
    p(),
    d(),
    O(),
    f(),
    y(),
    i(),
    _(),
    E(),
    b(),
    S(),
    w(),
    P(),
    (z = c()));
})();
export { F as CloudPreferencesSettings };
//# sourceMappingURL=cloud-preferences-settings.js.map
