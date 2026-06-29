import { n as e, s as t, t as n } from "./rolldown-runtime.js";
import {
  Ol as r,
  kl as i,
  sc as a,
  tc as o,
  xl as s,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  er as ee,
  tr as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~hgx54pg3.js";
import {
  $u as te,
  Jp as ne,
  Xn as re,
  Yn as l,
  Yp as u,
  am as d,
  dr as f,
  im as p,
  td as m,
  ur as ie,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  BC as h,
  OC as g,
  VC as ae,
  aw as _,
  cw as oe,
  kC as se,
  tS as v,
  uw as ce,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  _ as le,
  g as y,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js";
import {
  $t as ue,
  Qt as b,
  dn as de,
  en as fe,
  fn as x,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Xt as S,
  Yt as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  On as w,
  jn as pe,
  kn as me,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import { i as T, r as he, t as ge } from "./home-row-layout.js";
import { n as E, t as _e } from "./plus-sm.js";
var D = n((e, t) => {
    function n(e, t, n) {
      return (
        e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
      );
    }
    t.exports = n;
  }),
  O = n((e, t) => {
    var n = D(),
      r = v();
    function i(e, t, i) {
      return (
        i === void 0 && ((i = t), (t = void 0)),
        i !== void 0 && ((i = r(i)), (i = i === i ? i : 0)),
        t !== void 0 && ((t = r(t)), (t = t === t ? t : 0)),
        n(r(e), t, i)
      );
    }
    t.exports = i;
  });
function ve(e, t) {
  let n = new Set();
  return e.filter((e) => {
    let r = e.name.slice(e.name.lastIndexOf(`:`) + 1),
      i = e.description.match(A)?.[1]?.toLowerCase();
    return !e.enabled || !r.startsWith(k) || i !== t || !e.interface?.iconLarge?.trim() || n.has(r)
      ? !1
      : (n.add(r), !0);
  });
}
var k,
  A,
  j = e(() => {
    ((k = `artifact-template-`),
      (A = /^Create a (document|presentation|spreadsheet) using the /iu));
  }),
  M,
  N,
  P,
  F = e(() => {
    ((M = `_card_1bthu_1`),
      (N = `_homeArtifactTemplatesEnter_1bthu_1`),
      (P = { card: M, homeArtifactTemplatesEnter: N }));
  });
function I() {
  let e = (0, R.c)(50),
    t = ue(),
    n = (0, B.useRef)(null),
    r = (0, B.useRef)(null),
    i = (0, B.useRef)(null),
    [o, s] = (0, B.useState)(!1),
    [c, l] = (0, B.useState)(!1),
    u = a(me),
    d = a(pe),
    f = a(se),
    m = ce(),
    h = fe(t, xe),
    g = h != null,
    _;
  e[0] === g ? (_ = e[1]) : ((_ = { enabled: g }), (e[0] = g), (e[1] = _));
  let { skills: v } = re(u ?? void 0, d, _),
    y = h == null ? [] : ve(v, h),
    b = y.map(be).join(`
`),
    x;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        let { maximum: t, minimum: n } = L(e);
        (s(e.scrollLeft > n + 1), l(e.scrollLeft < t - 1));
      }),
      (e[2] = x))
    : (x = e[2]);
  let S = le(x),
    C = (e) => {
      if (
        (r.current?.disconnect(),
        (n.current = e),
        e == null || b === `` || (S(e), typeof ResizeObserver > `u`))
      )
        return;
      let t = new ResizeObserver(() => S(e));
      (t.observe(e),
        e.firstElementChild != null && t.observe(e.firstElementChild),
        e.lastElementChild != null && t.observe(e.lastElementChild),
        (r.current = t));
    };
  if (h == null || y.length === 0) return null;
  let w;
  e[3] === v ? (w = e[4]) : ((w = v.find(ye)), (e[3] = v), (e[4] = w));
  let T = w,
    E = h === `document`,
    D;
  e[5] === m
    ? (D = e[6])
    : ((D = m.formatMessage({
        id: `home.artifactTemplates.create`,
        defaultMessage: `Create a template`,
        description: `Accessible label for adding the Template Creator skill from the artifact template gallery`,
      })),
      (e[5] = m),
      (e[6] = D));
  let O = D,
    k;
  e[7] === t
    ? (k = e[8])
    : ((k = (e) => {
        let { state: n, dispatch: r } = t.view,
          i = de.atEnd(n.doc),
          a = i.$from.nodeBefore;
        (r(n.tr.setSelection(i)),
          a != null && (!a.isText || !/\s$/.test(a.text ?? ``)) && t.insertTextAtSelection(` `),
          t.insertSkillMentionAtSelection(e));
      }),
      (e[7] = t),
      (e[8] = k));
  let A = k,
    j;
  e[9] !== f || e[10] !== S
    ? ((j = (e) => {
        let t = n.current;
        if (t == null) return;
        let { maximum: r, minimum: a } = L(t),
          o = (0, z.default)(t.scrollLeft + e * t.clientWidth, a, r);
        if ((i.current?.stop(), t.style.removeProperty(`scroll-snap-type`), f)) {
          (t.scrollTo({ left: o }), S(t));
          return;
        }
        ((t.style.scrollSnapType = `none`),
          (i.current = ae(t.scrollLeft, o, {
            duration: 0.2,
            ease: [0.165, 0.84, 0.44, 1],
            onUpdate: (e) => t.scrollTo({ left: e }),
            onComplete: () => {
              (t.style.removeProperty(`scroll-snap-type`), n.current === t && S(t));
            },
          })));
      }),
      (e[9] = f),
      (e[10] = S),
      (e[11] = j))
    : (j = e[11]);
  let M = j,
    N;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, V.jsx)(`div`, {
        className: `flex min-w-0 flex-1 py-row-y text-left`,
        children: (0, V.jsx)(ge, {
          children: (0, V.jsx)(he, {
            className: `font-normal text-token-text-secondary`,
            children: (0, V.jsx)(oe, {
              id: `home.artifactTemplates.title`,
              defaultMessage: `Templates`,
              description: `Section title for document, presentation, and spreadsheet template cards under the home composer`,
            }),
          }),
        }),
      })),
      (e[12] = N))
    : (N = e[12]);
  let F;
  e[13] !== O || e[14] !== A || e[15] !== T
    ? ((F =
        T == null
          ? null
          : (0, V.jsx)(ne, {
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              "aria-label": O,
              title: O,
              onClick: () => A(T),
              children: (0, V.jsx)(_e, { className: `icon-xs` }),
            })),
      (e[13] = O),
      (e[14] = A),
      (e[15] = T),
      (e[16] = F))
    : (F = e[16]);
  let I;
  e[17] === m
    ? (I = e[18])
    : ((I = m.formatMessage({
        id: `home.artifactTemplates.previous`,
        defaultMessage: `Show previous templates`,
        description: `Accessible label for scrolling the artifact template gallery backward`,
      })),
      (e[17] = m),
      (e[18] = I));
  let U;
  e[19] === m
    ? (U = e[20])
    : ((U = m.formatMessage({
        id: `home.artifactTemplates.next`,
        defaultMessage: `Show more templates`,
        description: `Accessible label for scrolling the artifact template gallery forward`,
      })),
      (e[19] = m),
      (e[20] = U));
  let W, G;
  e[21] === M
    ? ((W = e[22]), (G = e[23]))
    : ((W = () => M(-1)), (G = () => M(1)), (e[21] = M), (e[22] = W), (e[23] = G));
  let K;
  e[24] !== o || e[25] !== c || e[26] !== I || e[27] !== U || e[28] !== W || e[29] !== G
    ? ((K = (0, V.jsx)(ee, {
        backLabel: I,
        canGoBack: o,
        canGoForward: c,
        forwardLabel: U,
        onBack: W,
        onForward: G,
      })),
      (e[24] = o),
      (e[25] = c),
      (e[26] = I),
      (e[27] = U),
      (e[28] = W),
      (e[29] = G),
      (e[30] = K))
    : (K = e[30]);
  let q;
  e[31] !== F || e[32] !== K
    ? ((q = (0, V.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 px-3 py-1.5`,
        children: [N, F, K],
      })),
      (e[31] = F),
      (e[32] = K),
      (e[33] = q))
    : (q = e[33]);
  let J;
  e[34] === m
    ? (J = e[35])
    : ((J = m.formatMessage({
        id: `home.artifactTemplates.gallery`,
        defaultMessage: `Templates`,
        description: `Accessible label for the document, presentation, or spreadsheet template gallery`,
      })),
      (e[34] = m),
      (e[35] = J));
  let Y;
  e[36] === S ? (Y = e[37]) : ((Y = (e) => S(e.currentTarget)), (e[36] = S), (e[37] = Y));
  let X;
  e[38] !== A || e[39] !== m || e[40] !== E
    ? ((X = (e, t) => {
        let n = te(e),
          r = ie(e, { size: `large` });
        return (0, V.jsxs)(
          `button`,
          {
            type: `button`,
            className: p(
              P.card,
              `group relative -m-1 flex min-w-0 shrink-0 snap-start cursor-interaction flex-col gap-2 rounded-2xl p-1 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
              E
                ? `basis-full sm:basis-[calc((100%_-_4rem)/5)]`
                : `basis-full sm:basis-[calc((100%_-_2rem)/3)]`,
            ),
            style: { animationDelay: `calc(var(--transition-duration-basic) + ${t * H}ms)` },
            "aria-label": m.formatMessage(
              {
                id: `home.artifactTemplates.useSkill`,
                defaultMessage: `Use {title}`,
                description: `Accessible label for selecting a document, presentation, or spreadsheet template skill`,
              },
              { title: n },
            ),
            onClick: () => A(e),
            children: [
              (0, V.jsx)(`div`, {
                className: p(
                  `overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover:ring-token-border-light group-focus-visible:ring-token-focus-border`,
                  E ? `aspect-[4/5]` : `aspect-video`,
                ),
                children: (0, V.jsx)(r, {
                  className: `h-full w-full [&_img]:object-cover [&_img]:object-top`,
                }),
              }),
              (0, V.jsx)(`div`, {
                className: `min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary`,
                children: n,
              }),
            ],
          },
          e.path,
        );
      }),
      (e[38] = A),
      (e[39] = m),
      (e[40] = E),
      (e[41] = X))
    : (X = e[41]);
  let Z = y.map(X),
    Q;
  e[42] !== C || e[43] !== J || e[44] !== Y || e[45] !== Z
    ? ((Q = (0, V.jsx)(`div`, {
        ref: C,
        className: `hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 py-1`,
        role: `group`,
        "aria-label": J,
        onScroll: Y,
        children: Z,
      })),
      (e[42] = C),
      (e[43] = J),
      (e[44] = Y),
      (e[45] = Z),
      (e[46] = Q))
    : (Q = e[46]);
  let $;
  return (
    e[47] !== q || e[48] !== Q
      ? (($ = (0, V.jsxs)(`section`, {
          "data-home-artifact-templates": !0,
          className: `mx-auto mt-0.5 flex w-full max-w-3xl min-w-0 flex-col gap-1 pb-1`,
          children: [q, Q],
        })),
        (e[47] = q),
        (e[48] = Q),
        (e[49] = $))
      : ($ = e[49]),
    $
  );
}
function ye(e) {
  return e.enabled && (e.name === `template-creator` || e.name.endsWith(`:template-creator`));
}
function be(e) {
  return e.path;
}
function xe(e) {
  return C(e.view.state.doc);
}
function L(e) {
  let t = e.firstElementChild,
    n = Math.max(0, e.scrollWidth - e.clientWidth);
  return {
    maximum: n,
    minimum: Math.min(n, t instanceof HTMLElement ? Math.max(0, t.offsetLeft - e.offsetLeft) : 0),
  };
}
var R, z, B, V, H;
e(() => {
  ((R = r()),
    d(),
    h(),
    (z = t(O(), 1)),
    o(),
    x(),
    (B = t(i(), 1)),
    _(),
    S(),
    j(),
    c(),
    u(),
    T(),
    E(),
    w(),
    g(),
    f(),
    m(),
    l(),
    y(),
    b(),
    F(),
    (V = s()),
    (H = 25));
})();
export { I as HomeArtifactTemplates };
//# sourceMappingURL=home-artifact-templates.js.map
