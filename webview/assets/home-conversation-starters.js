import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, o as i, t as a } from "./app-scope-CWE-zIhQ.js";
import { Bt as o } from "./use-host-config.js";
import "./thread-context-inputs.js";
import { A as s } from "./vscode-api.js";
import { n as c } from "./react.js";
import "./isEqual.js";
import { Rr as l } from "./src-3.js";
import { t as u } from "./react-dom.js";
import { l as d } from "./lib-1.js";
import { t as f } from "./clsx.js";
import { t as p } from "./persisted-atom.js";
import { t as m } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./toast-signal.js";
import { t as h } from "./x.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./markdown-to-search-text.js";
import "./marked.esm.js";
import { nn as g, rn as _, t as v } from "./product-logger.js";
import "./parse-directives.js";
import "./platform.js";
import "./persisted-signal.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as y } from "./use-auth.js";
import "./use-global-state.js";
import "./model-queries.js";
import "./use-model-settings.js";
import "./config.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api-C.js";
import "./use-debounced-value.js";
import { o as b } from "./prompt-text.js";
import "./use-environment.js";
import { k as x } from "./composer-view-state.js";
import "./mention-item.js";
import { n as S, t as C } from "./skill-utils.js";
import { t as w } from "./use-collaboration-mode.js";
import "./collaboration-mode-queries.js";
import "./use-is-dark.js";
import "./recommended-skill-statsig-overrides.js";
import { n as T, t as ee } from "./use-composer-controller.js";
import { n as E, t as D } from "./conversation-starter-card-D5-kwyZS.js";
import { t as O } from "./home-use-cases-data.js";
import { t as k } from "./use-recommended-skills.js";
var A = e(u(), 1),
  j = e(l(), 1),
  M = r(),
  N = e(t(), 1),
  P = [F(`snake-game`), F(`one-page-pdf`), F(`create-plan`)];
function F(e) {
  let t = O.find((t) => t.id === e);
  if (!t) throw Error(`Missing home use case: ${e}`);
  return t;
}
var I = n(),
  L = /\$([a-z0-9-]+)/i,
  R = `home_conversation_starter`,
  z = p(`has-hidden-home-conversation-starters`, !1);
function B(e) {
  let t = (0, M.c)(35),
    { activeWorkspaceRoot: n, hostId: r, portalTarget: o } = e,
    s = i(a),
    l = d(),
    u = y(),
    p = ee(),
    [b, x] = c(z),
    S = W(p, n, r),
    C = !T(p, U),
    w = (0, N.useRef)(!1),
    O;
  t[0] !== b || t[1] !== C || t[2] !== s
    ? ((O = () => {
        b ||
          !C ||
          w.current ||
          ((w.current = !0),
          v(s, _, {
            promptIds: P.map(H).join(`,`),
            promptTypes: P.map(V).join(`,`),
            promptCount: P.length,
          }));
      }),
      (t[0] = b),
      (t[1] = C),
      (t[2] = s),
      (t[3] = O))
    : (O = t[3]);
  let k;
  if (
    (t[4] !== u.accountId || t[5] !== u.userId || t[6] !== b || t[7] !== C || t[8] !== s
      ? ((k = [u.accountId, u.userId, b, C, s]),
        (t[4] = u.accountId),
        (t[5] = u.userId),
        (t[6] = b),
        (t[7] = C),
        (t[8] = s),
        (t[9] = k))
      : (k = t[9]),
    (0, N.useEffect)(O, k),
    b)
  )
    return null;
  let j = C ? `opacity-100` : `pointer-events-none opacity-0`,
    F;
  t[10] === j
    ? (F = t[11])
    : ((F = f(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        j,
      )),
      (t[10] = j),
      (t[11] = F));
  let L = !C,
    B = !C,
    G;
  t[12] === l
    ? (G = t[13])
    : ((G = l.formatMessage({
        id: `home.conversationStarters.hide`,
        defaultMessage: `Hide conversation starters`,
        description: `Aria label for permanently hiding the home page conversation starters`,
      })),
      (t[12] = l),
      (t[13] = G));
  let K;
  t[14] === x
    ? (K = t[15])
    : ((K = () => {
        x(!0);
      }),
      (t[14] = x),
      (t[15] = K));
  let q;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, I.jsx)(h, { className: `icon-xs` })), (t[16] = q))
    : (q = t[16]);
  let J;
  t[17] !== G || t[18] !== K
    ? ((J = (0, I.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: (0, I.jsx)(m, {
          className: `focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2`,
          "aria-label": G,
          color: `ghost`,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (t[17] = G),
      (t[18] = K),
      (t[19] = J))
    : (J = t[19]);
  let Y;
  t[20] !== S || t[21] !== l || t[22] !== s
    ? ((Y = P.map((e, t) =>
        (0, I.jsx)(
          E,
          {
            icon: (0, I.jsx)(D, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (v(s, g, { promptId: e.id, promptIndex: t, promptType: R, mode: r }),
                S(n, r, e.skillName, i));
            },
            prompt: l.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[20] = S),
      (t[21] = l),
      (t[22] = s),
      (t[23] = Y))
    : (Y = t[23]);
  let X;
  t[24] === Y
    ? (X = t[25])
    : ((X = (0, I.jsx)(`div`, { className: `grid grid-cols-3 gap-2`, children: Y })),
      (t[24] = Y),
      (t[25] = X));
  let Z;
  t[26] !== J || t[27] !== X || t[28] !== F || t[29] !== L || t[30] !== B
    ? ((Z = (0, I.jsxs)(`div`, { className: F, inert: L, "aria-hidden": B, children: [J, X] })),
      (t[26] = J),
      (t[27] = X),
      (t[28] = F),
      (t[29] = L),
      (t[30] = B),
      (t[31] = Z))
    : (Z = t[31]);
  let Q = Z,
    $;
  return (
    t[32] !== Q || t[33] !== o
      ? (($ = o ? (0, A.createPortal)(Q, o) : Q), (t[32] = Q), (t[33] = o), (t[34] = $))
      : ($ = t[34]),
    $
  );
}
function V() {
  return R;
}
function H(e) {
  return e.id;
}
function U(e) {
  return e.hasText();
}
function W(e, t, n) {
  let r = (0, M.c)(11),
    a = i(b),
    { setSelectedMode: c } = w(),
    l = s(),
    u;
  r[0] === n ? (u = r[1]) : ((u = { hostId: n, loadOnMount: !1 }), (r[0] = n), (r[1] = u));
  let { ensureSkillByName: d, installSkill: f } = k(u),
    p;
  return (
    r[2] !== t ||
    r[3] !== e ||
    r[4] !== d ||
    r[5] !== n ||
    r[6] !== f ||
    r[7] !== l ||
    r[8] !== a ||
    r[9] !== c
      ? ((p = (r, i, s, u) => {
          (x(a, (e) => {
            e.composerMode !== i && (e.composerMode = i);
          }),
            u && c(u));
          let p = r.match(L),
            m = s ?? p?.[1] ?? null,
            h = p?.[0] ?? (s ? `$${s}` : null);
          if (!m || !h) {
            (e.setText(r), e.focus());
            return;
          }
          (e.setText(r),
            e.focus(),
            (async () => {
              let i = C(await o(`list-skills-for-host`, { hostId: n, cwds: [t] }), m);
              if (i) {
                if (e.getText() !== r) return;
                (e.setPromptText(r.replace(h, S({ name: i.name, path: i.path }))), e.focus());
                return;
              }
              let a = await d(m);
              if (!a) return;
              let s = await f({ skill: a });
              !s.success ||
                !s.destination ||
                ((async () => {
                  (await o(`list-skills-for-host`, { hostId: n, cwds: [t], forceReload: !0 }),
                    await l.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === r &&
                  (e.setPromptText(
                    r.replace(
                      h,
                      S({ name: a.name, path: j.default.join(s.destination, `SKILL.md`) }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (r[2] = t),
        (r[3] = e),
        (r[4] = d),
        (r[5] = n),
        (r[6] = f),
        (r[7] = l),
        (r[8] = a),
        (r[9] = c),
        (r[10] = p))
      : (p = r[10]),
    p
  );
}
export { B as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters.js.map
