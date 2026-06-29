import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { o as r, t as i, z as a } from "./app-scope.js";
import { Ts as o } from "./app-server-manager-signals.js";
import { A as s } from "./vscode-api.js";
import { n as c } from "./react.js";
import "./isEqual.js";
import { Sr as l } from "./src-2.js";
import { t as u } from "./react-dom.js";
import { l as d } from "./lib.js";
import "./persisted-signal.js";
import { t as f } from "./clsx-Cir5-jBH.js";
import { t as p } from "./persisted-atom.js";
import { t as m } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-2.js";
import "./spinner.js";
import "./toast-signal.js";
import { t as h } from "./x.js";
import "./mime-types.js";
import { Jt as g, Yt as _, t as v } from "./product-logger.js";
import "./format-skill-title.js";
import "./rpc-Hf-fxjh7.js";
import "./statsig.js";
import "./request.js";
import "./platform.js";
import "./marked.esm.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./use-debounced-value-Dw-7BPJJ.js";
import "./app-server-manager-hooks.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import { t as y } from "./use-auth.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./mention-item.js";
import { n as b, t as x } from "./skill-utils.js";
import { n as ee, t as S } from "./use-composer-controller.js";
import { t as C } from "./use-collaboration-mode.js";
import "./use-model-settings.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-is-dark.js";
import "./route-scope.js";
import { o as w } from "./prompt-text.js";
import "./use-environment.js";
import { D as T } from "./composer-view-state.js";
import "./recommended-skill-statsig-overrides.js";
import { n as E, t as D } from "./conversation-starter-card.js";
import { t as O } from "./home-use-cases-data.js";
import { t as k } from "./use-recommended-skills-Zw-1OGFJ.js";
var A = e(u(), 1),
  j = e(l(), 1),
  M = a(),
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
    { activeWorkspaceRoot: n, hostId: a, portalTarget: o } = e,
    s = r(i),
    l = d(),
    u = y(),
    p = S(),
    [b, x] = c(z),
    C = W(p, n, a),
    w = !ee(p, U),
    T = (0, N.useRef)(!1),
    O;
  t[0] !== b || t[1] !== w || t[2] !== s
    ? ((O = () => {
        b ||
          !w ||
          T.current ||
          ((T.current = !0),
          v(s, _, {
            promptIds: P.map(H).join(`,`),
            promptTypes: P.map(V).join(`,`),
            promptCount: P.length,
          }));
      }),
      (t[0] = b),
      (t[1] = w),
      (t[2] = s),
      (t[3] = O))
    : (O = t[3]);
  let k;
  if (
    (t[4] !== u.accountId || t[5] !== u.userId || t[6] !== b || t[7] !== w || t[8] !== s
      ? ((k = [u.accountId, u.userId, b, w, s]),
        (t[4] = u.accountId),
        (t[5] = u.userId),
        (t[6] = b),
        (t[7] = w),
        (t[8] = s),
        (t[9] = k))
      : (k = t[9]),
    (0, N.useEffect)(O, k),
    b)
  )
    return null;
  let j = w ? `opacity-100` : `pointer-events-none opacity-0`,
    F;
  t[10] === j
    ? (F = t[11])
    : ((F = f(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        j,
      )),
      (t[10] = j),
      (t[11] = F));
  let L = !w,
    B = !w,
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
  t[20] !== C || t[21] !== l || t[22] !== s
    ? ((Y = P.map((e, t) =>
        (0, I.jsx)(
          E,
          {
            icon: (0, I.jsx)(D, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (v(s, g, { promptId: e.id, promptIndex: t, promptType: R, mode: r }),
                C(n, r, e.skillName, i));
            },
            prompt: l.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[20] = C),
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
  let i = (0, M.c)(11),
    a = r(w),
    { setSelectedMode: c } = C(),
    l = s(),
    u;
  i[0] === n ? (u = i[1]) : ((u = { hostId: n, loadOnMount: !1 }), (i[0] = n), (i[1] = u));
  let { ensureSkillByName: d, installSkill: f } = k(u),
    p;
  return (
    i[2] !== t ||
    i[3] !== e ||
    i[4] !== d ||
    i[5] !== n ||
    i[6] !== f ||
    i[7] !== l ||
    i[8] !== a ||
    i[9] !== c
      ? ((p = (r, i, s, u) => {
          (T(a, (e) => {
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
              let i = x(await o(`list-skills-for-host`, { hostId: n, cwds: [t] }), m);
              if (i) {
                if (e.getText() !== r) return;
                (e.setPromptText(r.replace(h, b({ name: i.name, path: i.path }))), e.focus());
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
                      b({ name: a.name, path: j.default.join(s.destination, `SKILL.md`) }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (i[2] = t),
        (i[3] = e),
        (i[4] = d),
        (i[5] = n),
        (i[6] = f),
        (i[7] = l),
        (i[8] = a),
        (i[9] = c),
        (i[10] = p))
      : (p = i[10]),
    p
  );
}
export { B as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters.js.map
