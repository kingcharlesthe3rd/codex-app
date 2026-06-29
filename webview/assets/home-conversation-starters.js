import { s as e } from "./chunk-Bj-mKKzh.js";
import { Br as t } from "./src-2.js";
import { fs as n } from "./app-server-manager-signals.js";
import { n as r, t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx.js";
import { t as o } from "./react-dom.js";
import "./marked.esm-BR-H6018.js";
import { A as s, F as c, h as l, lt as u } from "./vscode-api.js";
import { n as d } from "./react.js";
import { c as f } from "./lib-2.js";
import { g as p } from "./persisted-signal-CweW-bgN.js";
import "./rpc-1.js";
import "./statsig.js";
import "./request.js";
import "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-is-copilot-api-available.js";
import "./use-global-state.js";
import { t as m } from "./use-auth-6.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import "./codex-api.js";
import "./use-debounced-value.js";
import "./use-is-dark.js";
import "./toast-signal.js";
import "./route-scope.js";
import { c as h } from "./prompt-text.js";
import { t as g } from "./persisted-atom.js";
import "./use-environment.js";
import { E as _ } from "./composer-view-state.js";
import "./mention-item.js";
import { n as v, t as y } from "./skill-utils.js";
import { t as b } from "./use-collaboration-mode.js";
import "./use-model-settings.js";
import { t as x } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-Dm-v1Nm8.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request-Dau-We3b.js";
import "./mime-types.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import { t as S } from "./x.js";
import "./recommended-skill-statsig-overrides.js";
import { n as C, t as w } from "./use-composer-controller.js";
import { n as T, t as E } from "./conversation-starter-card.js";
import { t as D } from "./home-use-cases-data.js";
import { t as O } from "./use-recommended-skills.js";
var k = u(),
  A = e(o(), 1),
  j = e(r(), 1),
  M = e(t(), 1),
  N = [P(`snake-game`), P(`one-page-pdf`), P(`create-plan`)];
function P(e) {
  let t = D.find((t) => t.id === e);
  if (!t) throw Error(`Missing home use case: ${e}`);
  return t;
}
var F = i(),
  I = /\$([a-z0-9-]+)/i,
  L = `home_conversation_starter`,
  R = g(`has-hidden-home-conversation-starters`, !1);
function z(e) {
  let t = (0, k.c)(34),
    { activeWorkspaceRoot: n, hostId: r, portalTarget: i } = e,
    o = c(l),
    s = f(),
    u = m(),
    h = w(),
    [g, _] = d(R),
    v = U(h, n, r),
    y = !C(h, H),
    b = (0, j.useRef)(!1),
    D,
    O;
  if (
    (t[0] !== u.accountId || t[1] !== u.userId || t[2] !== g || t[3] !== y || t[4] !== o
      ? ((D = () => {
          g ||
            !y ||
            b.current ||
            ((b.current = !0),
            p(o, {
              eventName: `codex_onboarding_starter_prompts_displayed`,
              metadata: {
                prompt_ids: N.map(V).join(`,`),
                prompt_types: N.map(B).join(`,`),
                prompt_count: N.length,
                user_id: u.userId ?? void 0,
                workspace_id: u.accountId ?? void 0,
              },
            }));
        }),
        (O = [u.accountId, u.userId, g, y, o]),
        (t[0] = u.accountId),
        (t[1] = u.userId),
        (t[2] = g),
        (t[3] = y),
        (t[4] = o),
        (t[5] = D),
        (t[6] = O))
      : ((D = t[5]), (O = t[6])),
    (0, j.useEffect)(D, O),
    g)
  )
    return null;
  let M = y ? `opacity-100` : `pointer-events-none opacity-0`,
    P;
  t[7] === M
    ? (P = t[8])
    : ((P = a(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        M,
      )),
      (t[7] = M),
      (t[8] = P));
  let I = !y,
    z = !y,
    W;
  t[9] === s
    ? (W = t[10])
    : ((W = s.formatMessage({
        id: `home.conversationStarters.hide`,
        defaultMessage: `Hide conversation starters`,
        description: `Aria label for permanently hiding the home page conversation starters`,
      })),
      (t[9] = s),
      (t[10] = W));
  let G;
  t[11] === _
    ? (G = t[12])
    : ((G = () => {
        _(!0);
      }),
      (t[11] = _),
      (t[12] = G));
  let K;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, F.jsx)(S, { className: `icon-xs` })), (t[13] = K))
    : (K = t[13]);
  let q;
  t[14] !== W || t[15] !== G
    ? ((q = (0, F.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: (0, F.jsx)(x, {
          className: `focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2`,
          "aria-label": W,
          color: `ghost`,
          size: `icon`,
          onClick: G,
          children: K,
        }),
      })),
      (t[14] = W),
      (t[15] = G),
      (t[16] = q))
    : (q = t[16]);
  let J;
  t[17] !== u.accountId || t[18] !== u.userId || t[19] !== v || t[20] !== s || t[21] !== o
    ? ((J = N.map((e, t) =>
        (0, F.jsx)(
          T,
          {
            icon: (0, F.jsx)(E, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (p(o, {
                eventName: `codex_onboarding_starter_prompt_selected`,
                metadata: {
                  prompt_id: e.id,
                  prompt_index: t,
                  prompt_type: L,
                  mode: r,
                  user_id: u.userId ?? void 0,
                  workspace_id: u.accountId ?? void 0,
                },
              }),
                v(n, r, e.skillName, i));
            },
            prompt: s.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[17] = u.accountId),
      (t[18] = u.userId),
      (t[19] = v),
      (t[20] = s),
      (t[21] = o),
      (t[22] = J))
    : (J = t[22]);
  let Y;
  t[23] === J
    ? (Y = t[24])
    : ((Y = (0, F.jsx)(`div`, { className: `grid grid-cols-3 gap-2`, children: J })),
      (t[23] = J),
      (t[24] = Y));
  let X;
  t[25] !== q || t[26] !== Y || t[27] !== P || t[28] !== I || t[29] !== z
    ? ((X = (0, F.jsxs)(`div`, { className: P, inert: I, "aria-hidden": z, children: [q, Y] })),
      (t[25] = q),
      (t[26] = Y),
      (t[27] = P),
      (t[28] = I),
      (t[29] = z),
      (t[30] = X))
    : (X = t[30]);
  let Z = X,
    Q;
  return (
    t[31] !== Z || t[32] !== i
      ? ((Q = i ? (0, A.createPortal)(Z, i) : Z), (t[31] = Z), (t[32] = i), (t[33] = Q))
      : (Q = t[33]),
    Q
  );
}
function B() {
  return L;
}
function V(e) {
  return e.id;
}
function H(e) {
  return e.hasText();
}
function U(e, t, r) {
  let i = (0, k.c)(11),
    a = c(h),
    { setSelectedMode: o } = b(),
    l = s(),
    u;
  i[0] === r ? (u = i[1]) : ((u = { hostId: r, loadOnMount: !1 }), (i[0] = r), (i[1] = u));
  let { ensureSkillByName: d, installSkill: f } = O(u),
    p;
  return (
    i[2] !== t ||
    i[3] !== e ||
    i[4] !== d ||
    i[5] !== r ||
    i[6] !== f ||
    i[7] !== l ||
    i[8] !== a ||
    i[9] !== o
      ? ((p = (i, s, c, u) => {
          (_(a, (e) => {
            e.composerMode !== s && (e.composerMode = s);
          }),
            u && o(u));
          let p = i.match(I),
            m = c ?? p?.[1] ?? null,
            h = p?.[0] ?? (c ? `$${c}` : null);
          if (!m || !h) {
            (e.setText(i), e.focus());
            return;
          }
          (e.setText(i),
            e.focus(),
            (async () => {
              let a = y(await n(`list-skills-for-host`, { hostId: r, cwds: [t] }), m);
              if (a) {
                if (e.getText() !== i) return;
                (e.setPromptText(i.replace(h, v({ name: a.name, path: a.path }))), e.focus());
                return;
              }
              let o = await d(m);
              if (!o) return;
              let s = await f({ skill: o });
              !s.success ||
                !s.destination ||
                ((async () => {
                  (await n(`list-skills-for-host`, { hostId: r, cwds: [t], forceReload: !0 }),
                    await l.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === i &&
                  (e.setPromptText(
                    i.replace(
                      h,
                      v({ name: o.name, path: M.default.join(s.destination, `SKILL.md`) }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (i[2] = t),
        (i[3] = e),
        (i[4] = d),
        (i[5] = r),
        (i[6] = f),
        (i[7] = l),
        (i[8] = a),
        (i[9] = o),
        (i[10] = p))
      : (p = i[10]),
    p
  );
}
export { z as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters.js.map
