import { n as e } from "./rolldown-runtime.js";
import {
  Rt as t,
  Tl as n,
  Xs as r,
  tc as i,
  vl as a,
  zt as o,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { fr as s, pr as c } from "./app-initial~app-main~onboarding-page.js";
import {
  O as l,
  S as u,
  w as d,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import { Sx as f, wx as p, yx as m } from "./app-initial~app-main~new-thread-panel-page.js";
import { Dt as h, Tt as g } from "./app-initial~app-main~automations-page.js";
import {
  nt as _,
  tt as v,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  a as y,
  o as b,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import {
  $ as x,
  L as S,
  Q as C,
  Z as w,
  et as T,
  z as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  B as D,
  I as O,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  d as k,
  f as A,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as j,
  t as M,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { a as N, o as P, r as F } from "./cloud-preferences.js";
function I() {
  let e = (0, z.c)(8),
    n = i(t),
    r = p(),
    a = N(),
    o = P(),
    { canManageCreditSettings: c } = b(),
    l,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(f, {
        id: `settings.codeReview.title`,
        defaultMessage: `Code review`,
        description: `Title for automatic code review settings`,
      })),
      (u = (0, B.jsx)(f, {
        id: `settings.codeReview.subtitle`,
        defaultMessage: `Set up Codex to automatically review pull requests`,
        description: `Subtitle for automatic code review settings`,
      })),
      (e[0] = l),
      (e[1] = u))
    : ((l = e[0]), (u = e[1]));
  let d;
  return (
    e[2] !== c || e[3] !== r || e[4] !== a || e[5] !== n || e[6] !== o
      ? ((d = (0, B.jsx)(g, {
          title: l,
          subtitle: u,
          children:
            a.data == null
              ? (0, B.jsx)(k, {
                  children: (0, B.jsx)(k.Content, {
                    children: (0, B.jsx)(M, {
                      children: (0, B.jsx)(s, {
                        label: a.isError
                          ? (0, B.jsx)(f, {
                              id: `settings.codeReview.error`,
                              defaultMessage: `Unable to load code review settings`,
                              description: `Error state for code review settings`,
                            })
                          : (0, B.jsx)(f, {
                              id: `settings.codeReview.loading`,
                              defaultMessage: `Loading code review settings…`,
                              description: `Loading state for code review settings`,
                            }),
                        control: a.isError
                          ? (0, B.jsx)(w, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                a.refetch();
                              },
                              children: (0, B.jsx)(f, {
                                id: `settings.codeReview.retry`,
                                defaultMessage: `Retry`,
                                description: `Button to retry loading code review settings`,
                              }),
                            })
                          : (0, B.jsx)(x, { className: `icon-xs` }),
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
                        n.get(E).danger(
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
        (e[7] = d))
      : (d = e[7]),
    d
  );
}
function L(e) {
  let t = (0, z.c)(46),
    { disabled: n, preferences: r, showCreditPreference: i, onUpdate: a } = e,
    o = p(),
    c = r.code_review_trigger_policy ?? V[0],
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(k.Header, {
        title: (0, B.jsx)(f, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (t[0] = l))
    : (l = t[0]);
  let m, h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, B.jsx)(f, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (h = (0, B.jsx)(f, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `Automatically review your pull requests in Codex-enabled repositories`,
        description: `Description for automatic code review preference`,
      })),
      (t[1] = m),
      (t[2] = h))
    : ((m = t[1]), (h = t[2]));
  let g;
  t[3] === o
    ? (g = t[4])
    : ((g = o.formatMessage({
        id: `settings.codeReview.personal.autoReview.aria`,
        defaultMessage: `Enable automatic code review`,
        description: `Accessible label for automatic code review`,
      })),
      (t[3] = o),
      (t[4] = g));
  let _ = r.code_review_preference === `always`,
    y;
  t[5] === a
    ? (y = t[6])
    : ((y = (e) => {
        a({ code_review_preference: e ? `always` : `repo_default` });
      }),
      (t[5] = a),
      (t[6] = y));
  let b;
  t[7] !== n || t[8] !== g || t[9] !== _ || t[10] !== y
    ? ((b = (0, B.jsx)(s, {
        label: m,
        description: h,
        control: (0, B.jsx)(v, { ariaLabel: g, checked: _, disabled: n, onChange: y }),
      })),
      (t[7] = n),
      (t[8] = g),
      (t[9] = _),
      (t[10] = y),
      (t[11] = b))
    : (b = t[11]);
  let x, S;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, B.jsx)(f, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (S = (0, B.jsx)(f, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (t[12] = x),
      (t[13] = S))
    : ((x = t[12]), (S = t[13]));
  let C;
  t[14] === c ? (C = t[15]) : ((C = R(c)), (t[14] = c), (t[15] = C));
  let w;
  t[16] !== n || t[17] !== C
    ? ((w = (0, B.jsx)(O, { disabled: n, children: C })), (t[16] = n), (t[17] = C), (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === a
    ? (T = t[20])
    : ((T = V.map((e) =>
        (0, B.jsx)(
          d.Item,
          {
            onSelect: () => {
              a({ code_review_trigger_policy: e });
            },
            children: R(e),
          },
          e,
        ),
      )),
      (t[19] = a),
      (t[20] = T));
  let E;
  t[21] !== w || t[22] !== T
    ? ((E = (0, B.jsx)(s, {
        label: x,
        description: S,
        control: (0, B.jsx)(u, { triggerButton: w, children: T }),
      })),
      (t[21] = w),
      (t[22] = T),
      (t[23] = E))
    : (E = t[23]);
  let D, A;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, B.jsx)(f, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (A = (0, B.jsx)(f, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until Codex stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (t[24] = D),
      (t[25] = A))
    : ((D = t[24]), (A = t[25]));
  let j;
  t[26] === o
    ? (j = t[27])
    : ((j = o.formatMessage({
        id: `settings.codeReview.personal.exhaustive.aria`,
        defaultMessage: `Enable exhaustive code review`,
        description: `Accessible label for exhaustive code review`,
      })),
      (t[26] = o),
      (t[27] = j));
  let N;
  t[28] === a
    ? (N = t[29])
    : ((N = (e) => {
        a({ exhaustive_code_review: e });
      }),
      (t[28] = a),
      (t[29] = N));
  let P;
  t[30] !== n || t[31] !== r.exhaustive_code_review || t[32] !== j || t[33] !== N
    ? ((P = (0, B.jsx)(s, {
        label: D,
        description: A,
        control: (0, B.jsx)(v, {
          ariaLabel: j,
          checked: r.exhaustive_code_review,
          disabled: n,
          onChange: N,
        }),
      })),
      (t[30] = n),
      (t[31] = r.exhaustive_code_review),
      (t[32] = j),
      (t[33] = N),
      (t[34] = P))
    : (P = t[34]);
  let F;
  t[35] !== n ||
  t[36] !== o ||
  t[37] !== a ||
  t[38] !== r.allow_credits_for_code_reviews ||
  t[39] !== i
    ? ((F = i
        ? (0, B.jsx)(s, {
            label: (0, B.jsx)(f, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, B.jsx)(f, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (0, B.jsx)(v, {
              ariaLabel: o.formatMessage({
                id: `settings.codeReview.personal.credits.aria`,
                defaultMessage: `Allow credits for code reviews`,
                description: `Accessible label for code review credits preference`,
              }),
              checked: r.allow_credits_for_code_reviews,
              disabled: n,
              onChange: (e) => {
                a({ allow_credits_for_code_reviews: e });
              },
            }),
          })
        : null),
      (t[35] = n),
      (t[36] = o),
      (t[37] = a),
      (t[38] = r.allow_credits_for_code_reviews),
      (t[39] = i),
      (t[40] = F))
    : (F = t[40]);
  let I;
  return (
    t[41] !== E || t[42] !== P || t[43] !== F || t[44] !== b
      ? ((I = (0, B.jsxs)(k, {
          children: [
            l,
            (0, B.jsx)(k.Content, { children: (0, B.jsxs)(M, { children: [b, E, P, F] }) }),
          ],
        })),
        (t[41] = E),
        (t[42] = P),
        (t[43] = F),
        (t[44] = b),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
function R(e) {
  switch (e) {
    case `pr_open`:
      return (0, B.jsx)(f, {
        id: `settings.codeReview.personal.trigger.prOpen`,
        defaultMessage: `On PR open`,
        description: `Code review trigger option for pull request creation`,
      });
    case `every_push`:
      return (0, B.jsx)(f, {
        id: `settings.codeReview.personal.trigger.everyPush`,
        defaultMessage: `On every push`,
        description: `Code review trigger option for every push`,
      });
    case `smart_detect`:
      return (0, B.jsx)(f, {
        id: `settings.codeReview.personal.trigger.smart`,
        defaultMessage: `Smart trigger`,
        description: `Experimental smart code review trigger option`,
      });
  }
}
var z, B, V;
e(() => {
  ((z = n()),
    r(),
    m(),
    C(),
    l(),
    T(),
    S(),
    _(),
    o(),
    h(),
    A(),
    c(),
    D(),
    j(),
    y(),
    F(),
    (B = a()),
    (V = [`pr_open`, `every_push`, `smart_detect`]));
})();
export { I as CodeReviewSettings };
//# sourceMappingURL=code-review-settings.js.map
