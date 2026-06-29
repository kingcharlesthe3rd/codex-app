import { t as e } from "./jsx-runtime.js";
import { o as t, t as n, z as r } from "./app-scope.js";
import "./app-server-manager-signals.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-2.js";
import "./react-dom.js";
import { l as i, s as a } from "./lib.js";
import "./persisted-signal.js";
import "./proxy.js";
import { t as o } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-2.js";
import { t as s } from "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./chevron-right.js";
import "./tooltip.js";
import { r as c } from "./toast-signal.js";
import "./product-logger.js";
import "./format-skill-title.js";
import "./rpc-2.js";
import "./statsig.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import { r as l, t as u } from "./dropdown.js";
import "./search.js";
import "./use-debounced-value-Dw-7BPJJ.js";
import { t as d } from "./toggle.js";
import "./app-server-manager-hooks.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import "./use-auth.js";
import "./chevron.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./links-p.js";
import { t as f } from "./settings-shared.js";
import { t as p } from "./settings-content-layout.js";
import { r as m } from "./settings-row.js";
import { t as h } from "./settings-surface.js";
import { t as g } from "./settings-group.js";
import { a as _, i as v } from "./cloud-preferences.js";
import { t as y } from "./use-usage-settings-access.js";
var b = r(),
  x = e(),
  S = [`pr_open`, `every_push`, `smart_detect`];
function C() {
  let e = (0, b.c)(8),
    r = t(n),
    l = i(),
    u = v(),
    d = _(),
    { canManageCreditSettings: f } = y(),
    S,
    C;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, x.jsx)(a, {
        id: `settings.codeReview.title`,
        defaultMessage: `Code review`,
        description: `Title for automatic code review settings`,
      })),
      (C = (0, x.jsx)(a, {
        id: `settings.codeReview.subtitle`,
        defaultMessage: `Set up Codex to automatically review pull requests`,
        description: `Subtitle for automatic code review settings`,
      })),
      (e[0] = S),
      (e[1] = C))
    : ((S = e[0]), (C = e[1]));
  let T;
  return (
    e[2] !== f || e[3] !== l || e[4] !== u || e[5] !== r || e[6] !== d
      ? ((T = (0, x.jsx)(p, {
          title: S,
          subtitle: C,
          children:
            u.data == null
              ? (0, x.jsx)(g, {
                  children: (0, x.jsx)(g.Content, {
                    children: (0, x.jsx)(h, {
                      children: (0, x.jsx)(m, {
                        label: u.isError
                          ? (0, x.jsx)(a, {
                              id: `settings.codeReview.error`,
                              defaultMessage: `Unable to load code review settings`,
                              description: `Error state for code review settings`,
                            })
                          : (0, x.jsx)(a, {
                              id: `settings.codeReview.loading`,
                              defaultMessage: `Loading code review settings…`,
                              description: `Loading state for code review settings`,
                            }),
                        control: u.isError
                          ? (0, x.jsx)(o, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                u.refetch();
                              },
                              children: (0, x.jsx)(a, {
                                id: `settings.codeReview.retry`,
                                defaultMessage: `Retry`,
                                description: `Button to retry loading code review settings`,
                              }),
                            })
                          : (0, x.jsx)(s, { className: `icon-xs` }),
                      }),
                    }),
                  }),
                })
              : (0, x.jsx)(w, {
                  disabled: d.isPending,
                  showCreditPreference: f,
                  preferences: u.data,
                  onUpdate: (e) => {
                    d.mutate(e, {
                      onError: () => {
                        r.get(c).danger(
                          l.formatMessage({
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
        (e[2] = f),
        (e[3] = l),
        (e[4] = u),
        (e[5] = r),
        (e[6] = d),
        (e[7] = T))
      : (T = e[7]),
    T
  );
}
function w(e) {
  let t = (0, b.c)(46),
    { disabled: n, preferences: r, showCreditPreference: o, onUpdate: s } = e,
    c = i(),
    p = r.code_review_trigger_policy ?? S[0],
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, x.jsx)(g.Header, {
        title: (0, x.jsx)(a, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (t[0] = _))
    : (_ = t[0]);
  let v, y;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, x.jsx)(a, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (y = (0, x.jsx)(a, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `Automatically review your pull requests in Codex-enabled repositories`,
        description: `Description for automatic code review preference`,
      })),
      (t[1] = v),
      (t[2] = y))
    : ((v = t[1]), (y = t[2]));
  let C;
  t[3] === c
    ? (C = t[4])
    : ((C = c.formatMessage({
        id: `settings.codeReview.personal.autoReview.aria`,
        defaultMessage: `Enable automatic code review`,
        description: `Accessible label for automatic code review`,
      })),
      (t[3] = c),
      (t[4] = C));
  let w = r.code_review_preference === `always`,
    E;
  t[5] === s
    ? (E = t[6])
    : ((E = (e) => {
        s({ code_review_preference: e ? `always` : `repo_default` });
      }),
      (t[5] = s),
      (t[6] = E));
  let D;
  t[7] !== n || t[8] !== C || t[9] !== w || t[10] !== E
    ? ((D = (0, x.jsx)(m, {
        label: v,
        description: y,
        control: (0, x.jsx)(d, { ariaLabel: C, checked: w, disabled: n, onChange: E }),
      })),
      (t[7] = n),
      (t[8] = C),
      (t[9] = w),
      (t[10] = E),
      (t[11] = D))
    : (D = t[11]);
  let O, k;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, x.jsx)(a, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (k = (0, x.jsx)(a, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (t[12] = O),
      (t[13] = k))
    : ((O = t[12]), (k = t[13]));
  let A;
  t[14] === p ? (A = t[15]) : ((A = T(p)), (t[14] = p), (t[15] = A));
  let j;
  t[16] !== n || t[17] !== A
    ? ((j = (0, x.jsx)(f, { disabled: n, children: A })), (t[16] = n), (t[17] = A), (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] === s
    ? (M = t[20])
    : ((M = S.map((e) =>
        (0, x.jsx)(
          l.Item,
          {
            onSelect: () => {
              s({ code_review_trigger_policy: e });
            },
            children: T(e),
          },
          e,
        ),
      )),
      (t[19] = s),
      (t[20] = M));
  let N;
  t[21] !== j || t[22] !== M
    ? ((N = (0, x.jsx)(m, {
        label: O,
        description: k,
        control: (0, x.jsx)(u, { triggerButton: j, children: M }),
      })),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N))
    : (N = t[23]);
  let P, F;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, x.jsx)(a, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (F = (0, x.jsx)(a, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until Codex stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (t[24] = P),
      (t[25] = F))
    : ((P = t[24]), (F = t[25]));
  let I;
  t[26] === c
    ? (I = t[27])
    : ((I = c.formatMessage({
        id: `settings.codeReview.personal.exhaustive.aria`,
        defaultMessage: `Enable exhaustive code review`,
        description: `Accessible label for exhaustive code review`,
      })),
      (t[26] = c),
      (t[27] = I));
  let L;
  t[28] === s
    ? (L = t[29])
    : ((L = (e) => {
        s({ exhaustive_code_review: e });
      }),
      (t[28] = s),
      (t[29] = L));
  let R;
  t[30] !== n || t[31] !== r.exhaustive_code_review || t[32] !== I || t[33] !== L
    ? ((R = (0, x.jsx)(m, {
        label: P,
        description: F,
        control: (0, x.jsx)(d, {
          ariaLabel: I,
          checked: r.exhaustive_code_review,
          disabled: n,
          onChange: L,
        }),
      })),
      (t[30] = n),
      (t[31] = r.exhaustive_code_review),
      (t[32] = I),
      (t[33] = L),
      (t[34] = R))
    : (R = t[34]);
  let z;
  t[35] !== n ||
  t[36] !== c ||
  t[37] !== s ||
  t[38] !== r.allow_credits_for_code_reviews ||
  t[39] !== o
    ? ((z = o
        ? (0, x.jsx)(m, {
            label: (0, x.jsx)(a, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, x.jsx)(a, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (0, x.jsx)(d, {
              ariaLabel: c.formatMessage({
                id: `settings.codeReview.personal.credits.aria`,
                defaultMessage: `Allow credits for code reviews`,
                description: `Accessible label for code review credits preference`,
              }),
              checked: r.allow_credits_for_code_reviews,
              disabled: n,
              onChange: (e) => {
                s({ allow_credits_for_code_reviews: e });
              },
            }),
          })
        : null),
      (t[35] = n),
      (t[36] = c),
      (t[37] = s),
      (t[38] = r.allow_credits_for_code_reviews),
      (t[39] = o),
      (t[40] = z))
    : (z = t[40]);
  let B;
  return (
    t[41] !== N || t[42] !== R || t[43] !== z || t[44] !== D
      ? ((B = (0, x.jsxs)(g, {
          children: [
            _,
            (0, x.jsx)(g.Content, { children: (0, x.jsxs)(h, { children: [D, N, R, z] }) }),
          ],
        })),
        (t[41] = N),
        (t[42] = R),
        (t[43] = z),
        (t[44] = D),
        (t[45] = B))
      : (B = t[45]),
    B
  );
}
function T(e) {
  switch (e) {
    case `pr_open`:
      return (0, x.jsx)(a, {
        id: `settings.codeReview.personal.trigger.prOpen`,
        defaultMessage: `On PR open`,
        description: `Code review trigger option for pull request creation`,
      });
    case `every_push`:
      return (0, x.jsx)(a, {
        id: `settings.codeReview.personal.trigger.everyPush`,
        defaultMessage: `On every push`,
        description: `Code review trigger option for every push`,
      });
    case `smart_detect`:
      return (0, x.jsx)(a, {
        id: `settings.codeReview.personal.trigger.smart`,
        defaultMessage: `Smart trigger`,
        description: `Experimental smart code review trigger option`,
      });
  }
}
export { C as CodeReviewSettings };
//# sourceMappingURL=code-review-settings.js.map
