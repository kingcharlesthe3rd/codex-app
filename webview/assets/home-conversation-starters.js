import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ot as i,
  Ut as a,
  al as o,
  bl as s,
  dl as c,
  kl as l,
  kt as u,
  oc as d,
  qa as f,
  rl as p,
  tc as m,
  xl as h,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Fd as g,
  Jp as ee,
  Md as _,
  Qu as v,
  Vd as y,
  Yp as b,
  Zu as x,
  am as S,
  ap as C,
  au as w,
  im as T,
  ip as te,
  jd as E,
  om as D,
  ou as O,
  td as k,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Hn as A,
  Lb as j,
  Rb as M,
  Un as N,
  am as P,
  aw as ne,
  dv as re,
  mg as ie,
  pg as ae,
  rm as oe,
  uw as se,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  $t as ce,
  Qt as le,
  en as F,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  vn as I,
  yn as L,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~ke3yc5wu.js";
import { n as R, r as z, t as B } from "./conversation-starter-card.js";
import { r as V, t as H } from "./home-use-cases-data.js";
import { n as U, t as ue } from "./use-recommended-skills.js";
function W(e) {
  let t = H.find((t) => t.id === e);
  if (!t) throw Error(`Missing home use case: ${e}`);
  return t;
}
var G,
  de = e(() => {
    (V(), (G = [W(`snake-game`), W(`one-page-pdf`), W(`create-plan`)]));
  });
function fe(e) {
  let t = (0, K.c)(35),
    { activeWorkspaceRoot: r, hostId: i, portalTarget: a } = e,
    s = d(n),
    c = se(),
    l = N(),
    u = ce(),
    [f, p] = o($),
    m = ge(u, r, i),
    h = !F(u, he),
    g = (0, J.useRef)(!1),
    _;
  t[0] !== f || t[1] !== h || t[2] !== s
    ? ((_ = () => {
        f ||
          !h ||
          g.current ||
          ((g.current = !0),
          P(s, ie, {
            promptIds: G.map(me).join(`,`),
            promptTypes: G.map(pe).join(`,`),
            promptCount: G.length,
          }));
      }),
      (t[0] = f),
      (t[1] = h),
      (t[2] = s),
      (t[3] = _))
    : (_ = t[3]);
  let v;
  if (
    (t[4] !== l.accountId || t[5] !== l.userId || t[6] !== f || t[7] !== h || t[8] !== s
      ? ((v = [l.accountId, l.userId, f, h, s]),
        (t[4] = l.accountId),
        (t[5] = l.userId),
        (t[6] = f),
        (t[7] = h),
        (t[8] = s),
        (t[9] = v))
      : (v = t[9]),
    (0, J.useEffect)(_, v),
    f)
  )
    return null;
  let y = h ? `opacity-100` : `pointer-events-none opacity-0`,
    b;
  t[10] === y
    ? (b = t[11])
    : ((b = T(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        y,
      )),
      (t[10] = y),
      (t[11] = b));
  let x = !h,
    S = !h,
    C;
  t[12] === c
    ? (C = t[13])
    : ((C = c.formatMessage({
        id: `home.conversationStarters.hide`,
        defaultMessage: `Hide conversation starters`,
        description: `Aria label for permanently hiding the home page conversation starters`,
      })),
      (t[12] = c),
      (t[13] = C));
  let w;
  t[14] === p
    ? (w = t[15])
    : ((w = () => {
        p(!0);
      }),
      (t[14] = p),
      (t[15] = w));
  let E;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(te, { className: `icon-xs` })), (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== C || t[18] !== w
    ? ((D = (0, X.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: (0, X.jsx)(ee, {
          className: `focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2`,
          "aria-label": C,
          color: `ghost`,
          size: `icon`,
          onClick: w,
          children: E,
        }),
      })),
      (t[17] = C),
      (t[18] = w),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] !== m || t[21] !== c || t[22] !== s
    ? ((O = G.map((e, t) =>
        (0, X.jsx)(
          R,
          {
            icon: (0, X.jsx)(B, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (P(s, ae, { promptId: e.id, promptIndex: t, promptType: Q, mode: r }),
                m(n, r, e.skillName, i));
            },
            prompt: c.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[20] = m),
      (t[21] = c),
      (t[22] = s),
      (t[23] = O))
    : (O = t[23]);
  let k;
  t[24] === O
    ? (k = t[25])
    : ((k = (0, X.jsx)(`div`, { className: `grid grid-cols-3 gap-2`, children: O })),
      (t[24] = O),
      (t[25] = k));
  let A;
  t[26] !== D || t[27] !== k || t[28] !== b || t[29] !== x || t[30] !== S
    ? ((A = (0, X.jsxs)(`div`, { className: b, inert: x, "aria-hidden": S, children: [D, k] })),
      (t[26] = D),
      (t[27] = k),
      (t[28] = b),
      (t[29] = x),
      (t[30] = S),
      (t[31] = A))
    : (A = t[31]);
  let j = A,
    M;
  return (
    t[32] !== j || t[33] !== a
      ? ((M = a ? (0, Y.createPortal)(j, a) : j), (t[32] = j), (t[33] = a), (t[34] = M))
      : (M = t[34]),
    M
  );
}
function pe() {
  return Q;
}
function me(e) {
  return e.id;
}
function he(e) {
  return e.hasText();
}
function ge(e, t, n) {
  let r = (0, K.c)(11),
    i = d(g),
    { setSelectedMode: a } = L(),
    o = s(),
    c;
  r[0] === n ? (c = r[1]) : ((c = { hostId: n, loadOnMount: !1 }), (r[0] = n), (r[1] = c));
  let { ensureSkillByName: l, installSkill: u } = U(c),
    f;
  return (
    r[2] !== t ||
    r[3] !== e ||
    r[4] !== l ||
    r[5] !== n ||
    r[6] !== u ||
    r[7] !== o ||
    r[8] !== i ||
    r[9] !== a
      ? ((f = (r, s, c, d) => {
          (O(i, E({ cwd: t, hostId: n }), s), d && a(d));
          let f = r.match(Z),
            p = c ?? f?.[1] ?? null,
            m = f?.[0] ?? (c ? `$${c}` : null);
          if (!p || !m) {
            (e.setText(r), e.focus());
            return;
          }
          (e.setText(r),
            e.focus(),
            (async () => {
              let i = x(await M(`list-skills-for-host`, { hostId: n, cwds: [t] }), p);
              if (i) {
                if (e.getText() !== r) return;
                (e.setPromptText(r.replace(m, v({ name: i.name, path: i.path }))), e.focus());
                return;
              }
              let a = await l(p);
              if (!a) return;
              let s = await u({ skill: a });
              !s.success ||
                !s.destination ||
                ((async () => {
                  (await M(`list-skills-for-host`, { hostId: n, cwds: [t], forceReload: !0 }),
                    await o.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === r &&
                  (e.setPromptText(
                    r.replace(
                      m,
                      v({ name: a.name, path: q.default.join(s.destination, `SKILL.md`) }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (r[2] = t),
        (r[3] = e),
        (r[4] = l),
        (r[5] = n),
        (r[6] = u),
        (r[7] = o),
        (r[8] = i),
        (r[9] = a),
        (r[10] = f))
      : (f = r[10]),
    f
  );
}
var K, q, J, Y, X, Z, Q, $;
e(() => {
  ((K = r()),
    (q = t(f(), 1)),
    re(),
    c(),
    S(),
    p(),
    m(),
    (J = t(l(), 1)),
    (Y = t(D(), 1)),
    ne(),
    j(),
    A(),
    b(),
    _(),
    w(),
    le(),
    I(),
    C(),
    oe(),
    a(),
    y(),
    k(),
    ue(),
    i(),
    z(),
    de(),
    (X = h()),
    (Z = /\$([a-z0-9-]+)/i),
    (Q = `home_conversation_starter`),
    ($ = u(`has-hidden-home-conversation-starters`, !1)));
})();
export { fe as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters.js.map
