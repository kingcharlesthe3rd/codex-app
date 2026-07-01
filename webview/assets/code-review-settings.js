import { n as e } from "./rolldown-runtime.js";
import {
  GP as t,
  Gr as n,
  HP as r,
  IP as i,
  LP as a,
  RV as o,
  TB as s,
  U as c,
  Ur as l,
  W as u,
  Yj as d,
  Yr as f,
  bB as p,
  fN as m,
  hN as h,
  jV as g,
  mN as _,
  pN as v,
  qP as y,
  qj as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { Cr as x, Sr as S } from "./app-initial~app-main~onboarding-page.js";
import { lt as C, ut as w } from "./app-initial~app-main~automations-page.js";
import {
  a as T,
  o as E,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import {
  T as D,
  k as O,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  r as k,
  t as A,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as j,
  t as M,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { a as N, o as P, r as F } from "./cloud-preferences.js";
function I() {
  let e = (0, z.c)(8),
    n = s(i),
    r = y(),
    a = N(),
    o = P(),
    { canManageCreditSettings: c } = E(),
    l,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(t, {
        id: `settings.codeReview.title`,
        defaultMessage: `Code review`,
        description: `Title for automatic code review settings`,
      })),
      (u = (0, B.jsx)(t, {
        id: `settings.codeReview.subtitle`,
        defaultMessage: `Set up Codex to automatically review pull requests`,
        description: `Subtitle for automatic code review settings`,
      })),
      (e[0] = l),
      (e[1] = u))
    : ((l = e[0]), (u = e[1]));
  let f;
  return (
    e[2] !== c || e[3] !== r || e[4] !== a || e[5] !== n || e[6] !== o
      ? ((f = (0, B.jsx)(A, {
          title: l,
          subtitle: u,
          children:
            a.data == null
              ? (0, B.jsx)(C, {
                  children: (0, B.jsx)(C.Content, {
                    children: (0, B.jsx)(M, {
                      children: (0, B.jsx)(S, {
                        label: a.isError
                          ? (0, B.jsx)(t, {
                              id: `settings.codeReview.error`,
                              defaultMessage: `Unable to load code review settings`,
                              description: `Error state for code review settings`,
                            })
                          : (0, B.jsx)(t, {
                              id: `settings.codeReview.loading`,
                              defaultMessage: `Loading code review settings…`,
                              description: `Loading state for code review settings`,
                            }),
                        control: a.isError
                          ? (0, B.jsx)(m, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                a.refetch();
                              },
                              children: (0, B.jsx)(t, {
                                id: `settings.codeReview.retry`,
                                defaultMessage: `Retry`,
                                description: `Button to retry loading code review settings`,
                              }),
                            })
                          : (0, B.jsx)(_, { className: `icon-xs` }),
                      }),
                    }),
                  }),
                })
              : (0, B.jsx)(L, {
                  disabled: o.isPending,
                  showCreditPreference: c,
                  preferences: a.data,
                  onUpdate: (e) => {
                    o.mutate(e, {
                      onError: () => {
                        n.get(d).danger(
                          r.formatMessage({
                            id: `settings.codeReview.save.error`,
                            defaultMessage: `Unable to save code review settings`,
                            description: `Toast shown when saving code review settings fails`,
                          }),
                        );
                      },
                    });
                  },
                }),
        })),
        (e[2] = c),
        (e[3] = r),
        (e[4] = a),
        (e[5] = n),
        (e[6] = o),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
function L(e) {
  let r = (0, z.c)(46),
    { disabled: i, preferences: a, showCreditPreference: o, onUpdate: s } = e,
    u = y(),
    d = a.code_review_trigger_policy ?? V[0],
    f;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, B.jsx)(C.Header, {
        title: (0, B.jsx)(t, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (r[0] = f))
    : (f = r[0]);
  let p, m;
  r[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, B.jsx)(t, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (m = (0, B.jsx)(t, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `Automatically review your pull requests in Codex-enabled repositories`,
        description: `Description for automatic code review preference`,
      })),
      (r[1] = p),
      (r[2] = m))
    : ((p = r[1]), (m = r[2]));
  let h;
  r[3] === u
    ? (h = r[4])
    : ((h = u.formatMessage({
        id: `settings.codeReview.personal.autoReview.aria`,
        defaultMessage: `Enable automatic code review`,
        description: `Accessible label for automatic code review`,
      })),
      (r[3] = u),
      (r[4] = h));
  let g = a.code_review_preference === `always`,
    _;
  r[5] === s
    ? (_ = r[6])
    : ((_ = (e) => {
        s({ code_review_preference: e ? `always` : `repo_default` });
      }),
      (r[5] = s),
      (r[6] = _));
  let v;
  r[7] !== i || r[8] !== h || r[9] !== g || r[10] !== _
    ? ((v = (0, B.jsx)(S, {
        label: p,
        description: m,
        control: (0, B.jsx)(c, { ariaLabel: h, checked: g, disabled: i, onChange: _ }),
      })),
      (r[7] = i),
      (r[8] = h),
      (r[9] = g),
      (r[10] = _),
      (r[11] = v))
    : (v = r[11]);
  let b, x;
  r[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, B.jsx)(t, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (x = (0, B.jsx)(t, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (r[12] = b),
      (r[13] = x))
    : ((b = r[12]), (x = r[13]));
  let w;
  r[14] === d ? (w = r[15]) : ((w = R(d)), (r[14] = d), (r[15] = w));
  let T;
  r[16] !== i || r[17] !== w
    ? ((T = (0, B.jsx)(D, { disabled: i, children: w })), (r[16] = i), (r[17] = w), (r[18] = T))
    : (T = r[18]);
  let E;
  r[19] === s
    ? (E = r[20])
    : ((E = V.map((e) =>
        (0, B.jsx)(
          n.Item,
          {
            onSelect: () => {
              s({ code_review_trigger_policy: e });
            },
            children: R(e),
          },
          e,
        ),
      )),
      (r[19] = s),
      (r[20] = E));
  let O;
  r[21] !== T || r[22] !== E
    ? ((O = (0, B.jsx)(S, {
        label: b,
        description: x,
        control: (0, B.jsx)(l, { triggerButton: T, children: E }),
      })),
      (r[21] = T),
      (r[22] = E),
      (r[23] = O))
    : (O = r[23]);
  let k, A;
  r[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, B.jsx)(t, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (A = (0, B.jsx)(t, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until Codex stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (r[24] = k),
      (r[25] = A))
    : ((k = r[24]), (A = r[25]));
  let j;
  r[26] === u
    ? (j = r[27])
    : ((j = u.formatMessage({
        id: `settings.codeReview.personal.exhaustive.aria`,
        defaultMessage: `Enable exhaustive code review`,
        description: `Accessible label for exhaustive code review`,
      })),
      (r[26] = u),
      (r[27] = j));
  let N;
  r[28] === s
    ? (N = r[29])
    : ((N = (e) => {
        s({ exhaustive_code_review: e });
      }),
      (r[28] = s),
      (r[29] = N));
  let P;
  r[30] !== i || r[31] !== a.exhaustive_code_review || r[32] !== j || r[33] !== N
    ? ((P = (0, B.jsx)(S, {
        label: k,
        description: A,
        control: (0, B.jsx)(c, {
          ariaLabel: j,
          checked: a.exhaustive_code_review,
          disabled: i,
          onChange: N,
        }),
      })),
      (r[30] = i),
      (r[31] = a.exhaustive_code_review),
      (r[32] = j),
      (r[33] = N),
      (r[34] = P))
    : (P = r[34]);
  let F;
  r[35] !== i ||
  r[36] !== u ||
  r[37] !== s ||
  r[38] !== a.allow_credits_for_code_reviews ||
  r[39] !== o
    ? ((F = o
        ? (0, B.jsx)(S, {
            label: (0, B.jsx)(t, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, B.jsx)(t, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (0, B.jsx)(c, {
              ariaLabel: u.formatMessage({
                id: `settings.codeReview.personal.credits.aria`,
                defaultMessage: `Allow credits for code reviews`,
                description: `Accessible label for code review credits preference`,
              }),
              checked: a.allow_credits_for_code_reviews,
              disabled: i,
              onChange: (e) => {
                s({ allow_credits_for_code_reviews: e });
              },
            }),
          })
        : null),
      (r[35] = i),
      (r[36] = u),
      (r[37] = s),
      (r[38] = a.allow_credits_for_code_reviews),
      (r[39] = o),
      (r[40] = F))
    : (F = r[40]);
  let I;
  return (
    r[41] !== O || r[42] !== P || r[43] !== F || r[44] !== v
      ? ((I = (0, B.jsxs)(C, {
          children: [
            f,
            (0, B.jsx)(C.Content, { children: (0, B.jsxs)(M, { children: [v, O, P, F] }) }),
          ],
        })),
        (r[41] = O),
        (r[42] = P),
        (r[43] = F),
        (r[44] = v),
        (r[45] = I))
      : (I = r[45]),
    I
  );
}
function R(e) {
  switch (e) {
    case `pr_open`:
      return (0, B.jsx)(t, {
        id: `settings.codeReview.personal.trigger.prOpen`,
        defaultMessage: `On PR open`,
        description: `Code review trigger option for pull request creation`,
      });
    case `every_push`:
      return (0, B.jsx)(t, {
        id: `settings.codeReview.personal.trigger.everyPush`,
        defaultMessage: `On every push`,
        description: `Code review trigger option for every push`,
      });
    case `smart_detect`:
      return (0, B.jsx)(t, {
        id: `settings.codeReview.personal.trigger.smart`,
        defaultMessage: `Smart trigger`,
        description: `Experimental smart code review trigger option`,
      });
  }
}
var z, B, V;
e(() => {
  ((z = o()),
    p(),
    r(),
    v(),
    f(),
    h(),
    b(),
    u(),
    a(),
    k(),
    w(),
    x(),
    O(),
    j(),
    T(),
    F(),
    (B = g()),
    (V = [`pr_open`, `every_push`, `smart_detect`]));
})();
export { I as CodeReviewSettings };
//# sourceMappingURL=code-review-settings.js.map
