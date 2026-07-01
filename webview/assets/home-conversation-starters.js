import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AV as n,
  CA as r,
  Cl as i,
  Du as a,
  Eu as o,
  HP as s,
  IP as c,
  LP as l,
  Lc as u,
  MR as d,
  Ms as f,
  Nc as p,
  Ns as m,
  Pc as h,
  RV as g,
  SA as _,
  Sw as ee,
  TB as v,
  TP as y,
  XO as b,
  YO as x,
  _l as S,
  bB as C,
  fN as te,
  hS as w,
  hV as T,
  jV as E,
  ml as D,
  nP as O,
  pN as k,
  pS as A,
  pV as j,
  pl as M,
  qP as N,
  rF as P,
  rP as F,
  wP as ne,
  xV as re,
  xw as ie,
  yE as ae,
  zV as oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Bw as se,
  Vw as ce,
  eg as le,
  ng as I,
  tg as L,
} from "./app-initial~app-main~onboarding-page.js";
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
    { activeWorkspaceRoot: n, hostId: r, portalTarget: i } = e,
    o = v(c),
    s = N(),
    l = a(),
    u = L(),
    [d, f] = T($),
    p = ge(u, n, r),
    m = !I(u, he),
    h = (0, J.useRef)(!1),
    g;
  t[0] !== d || t[1] !== m || t[2] !== o
    ? ((g = () => {
        d ||
          !m ||
          h.current ||
          ((h.current = !0),
          w(o, ee, {
            promptIds: G.map(me).join(`,`),
            promptTypes: G.map(pe).join(`,`),
            promptCount: G.length,
          }));
      }),
      (t[0] = d),
      (t[1] = m),
      (t[2] = o),
      (t[3] = g))
    : (g = t[3]);
  let y;
  if (
    (t[4] !== l.accountId || t[5] !== l.userId || t[6] !== d || t[7] !== m || t[8] !== o
      ? ((y = [l.accountId, l.userId, d, m, o]),
        (t[4] = l.accountId),
        (t[5] = l.userId),
        (t[6] = d),
        (t[7] = m),
        (t[8] = o),
        (t[9] = y))
      : (y = t[9]),
    (0, J.useEffect)(g, y),
    d)
  )
    return null;
  let b = m ? `opacity-100` : `pointer-events-none opacity-0`,
    x;
  t[10] === b
    ? (x = t[11])
    : ((x = ne(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        b,
      )),
      (t[10] = b),
      (t[11] = x));
  let S = !m,
    C = !m,
    E;
  t[12] === s
    ? (E = t[13])
    : ((E = s.formatMessage({
        id: `home.conversationStarters.hide`,
        defaultMessage: `Hide conversation starters`,
        description: `Aria label for permanently hiding the home page conversation starters`,
      })),
      (t[12] = s),
      (t[13] = E));
  let D;
  t[14] === f
    ? (D = t[15])
    : ((D = () => {
        f(!0);
      }),
      (t[14] = f),
      (t[15] = D));
  let O;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(_, { className: `icon-xs` })), (t[16] = O))
    : (O = t[16]);
  let k;
  t[17] !== E || t[18] !== D
    ? ((k = (0, X.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: (0, X.jsx)(te, {
          className: `focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2`,
          "aria-label": E,
          color: `ghost`,
          size: `icon`,
          onClick: D,
          children: O,
        }),
      })),
      (t[17] = E),
      (t[18] = D),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== p || t[21] !== s || t[22] !== o
    ? ((A = G.map((e, t) =>
        (0, X.jsx)(
          R,
          {
            icon: (0, X.jsx)(B, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (w(o, ie, { promptId: e.id, promptIndex: t, promptType: Q, mode: r }),
                p(n, r, e.skillName, i));
            },
            prompt: s.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[20] = p),
      (t[21] = s),
      (t[22] = o),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] === A
    ? (j = t[25])
    : ((j = (0, X.jsx)(`div`, { className: `grid grid-cols-3 gap-2`, children: A })),
      (t[24] = A),
      (t[25] = j));
  let M;
  t[26] !== k || t[27] !== j || t[28] !== x || t[29] !== S || t[30] !== C
    ? ((M = (0, X.jsxs)(`div`, { className: x, inert: S, "aria-hidden": C, children: [k, j] })),
      (t[26] = k),
      (t[27] = j),
      (t[28] = x),
      (t[29] = S),
      (t[30] = C),
      (t[31] = M))
    : (M = t[31]);
  let P = M,
    F;
  return (
    t[32] !== P || t[33] !== i
      ? ((F = i ? (0, Y.createPortal)(P, i) : P), (t[32] = P), (t[33] = i), (t[34] = F))
      : (F = t[34]),
    F
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
function ge(e, t, r) {
  let i = (0, K.c)(11),
    a = v(S),
    { setSelectedMode: o } = ce(),
    s = n(),
    c;
  i[0] === r ? (c = i[1]) : ((c = { hostId: r, loadOnMount: !1 }), (i[0] = r), (i[1] = c));
  let { ensureSkillByName: l, installSkill: u } = U(c),
    d;
  return (
    i[2] !== t ||
    i[3] !== e ||
    i[4] !== l ||
    i[5] !== r ||
    i[6] !== u ||
    i[7] !== s ||
    i[8] !== a ||
    i[9] !== o
      ? ((d = (n, i, c, d) => {
          (m(a, M({ cwd: t, hostId: r }), i), d && o(d));
          let f = n.match(Z),
            g = c ?? f?.[1] ?? null,
            _ = f?.[0] ?? (c ? `$${c}` : null);
          if (!g || !_) {
            (e.setText(n), e.focus());
            return;
          }
          (e.setText(n),
            e.focus(),
            (async () => {
              let i = p(await b(`list-skills-for-host`, { hostId: r, cwds: [t] }), g);
              if (i) {
                if (e.getText() !== n) return;
                (e.setPromptText(n.replace(_, h({ name: i.name, path: i.path }))), e.focus());
                return;
              }
              let a = await l(g);
              if (!a) return;
              let o = await u({ skill: a });
              !o.success ||
                !o.destination ||
                ((async () => {
                  (await b(`list-skills-for-host`, { hostId: r, cwds: [t], forceReload: !0 }),
                    await s.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === n &&
                  (e.setPromptText(
                    n.replace(
                      _,
                      h({ name: a.name, path: q.default.join(o.destination, `SKILL.md`) }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (i[2] = t),
        (i[3] = e),
        (i[4] = l),
        (i[5] = r),
        (i[6] = u),
        (i[7] = s),
        (i[8] = a),
        (i[9] = o),
        (i[10] = d))
      : (d = i[10]),
    d
  );
}
var K, q, J, Y, X, Z, Q, $;
e(() => {
  ((K = g()),
    (q = t(d(), 1)),
    ae(),
    re(),
    y(),
    j(),
    C(),
    (J = t(oe(), 1)),
    (Y = t(P(), 1)),
    s(),
    x(),
    o(),
    k(),
    D(),
    f(),
    le(),
    se(),
    r(),
    A(),
    l(),
    i(),
    u(),
    ue(),
    O(),
    z(),
    de(),
    (X = E()),
    (Z = /\$([a-z0-9-]+)/i),
    (Q = `home_conversation_starter`),
    ($ = F(`has-hidden-home-conversation-starters`, !1)));
})();
export { fe as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters.js.map
