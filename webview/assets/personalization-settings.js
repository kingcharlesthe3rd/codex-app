import { n as e, s as t } from "./rolldown-runtime.js";
import {
  As as n,
  Bs as r,
  Bt as i,
  Dt as a,
  El as o,
  Et as s,
  Ft as c,
  G as l,
  Ga as u,
  H as d,
  Pt as f,
  Rs as p,
  Rt as m,
  Si as h,
  St as g,
  Tl as _,
  V as v,
  W as y,
  Xs as b,
  _l as x,
  _t as S,
  bt as C,
  cl as w,
  ec as T,
  gs as E,
  nc as D,
  tc as ee,
  ul as O,
  us as k,
  v as A,
  vl as j,
  vt as M,
  xt as te,
  y as N,
  zt as P,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Sp as F, bp as I, fr as L, pr as R } from "./app-initial~app-main~onboarding-page.js";
import {
  $ as z,
  G as ne,
  O as re,
  S as ie,
  W as ae,
  dt as oe,
  tt as se,
  ut as ce,
  w as le,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~project~okyna5mq.js";
import {
  Fo as ue,
  Gd as de,
  Ib as B,
  Po as fe,
  Rb as pe,
  Ro as me,
  Sx as V,
  Yd as he,
  Yn as ge,
  _n as _e,
  an as H,
  au as ve,
  cu as ye,
  en as U,
  fv as be,
  nx as xe,
  ou as Se,
  pv as Ce,
  rx as we,
  vn as W,
  vx as Te,
  wx as Ee,
  yn as De,
  yx as G,
  zn as Oe,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  $ as ke,
  Dt as Ae,
  Tt as je,
  _ as Me,
  d as Ne,
  et as Pe,
  f as Fe,
  g as Ie,
  h as Le,
  m as Re,
  p as ze,
  u as Be,
} from "./app-initial~app-main~automations-page.js";
import {
  Fi as Ve,
  Li as He,
  Ri as Ue,
  Ut as We,
  Vt as Ge,
  ai as Ke,
  ci as qe,
  fi as K,
  li as Je,
  nt as q,
  oi as Ye,
  si as Xe,
  tt as Ze,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  $ as Qe,
  L as $e,
  Q as et,
  Z as tt,
  et as nt,
  z as rt,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
import {
  B as it,
  I as at,
  S as ot,
  x as st,
  z as ct,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  A as lt,
  D as ut,
  E as dt,
  M as ft,
  O as pt,
  T as mt,
  j as ht,
  k as gt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~filfqv6y.js";
import {
  H as _t,
  W as vt,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  S as yt,
  d as bt,
} from "./app-initial~app-main~first-run~page~remote-conversation-page~plugin-detail-page~new-thread-~o67ur2ib.js";
import {
  d as J,
  f as xt,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as St,
  t as Ct,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
var wt,
  Tt = e(() => {
    (P(),
      a(),
      C(),
      (wt = M(m, `codex-agents-md`, (e) => ({
        params: { hostId: e },
        staleTime: s.FIVE_SECONDS,
      }))));
  }),
  Y,
  Et = e(() => {
    (G(),
      (Y = Te({
        personality: {
          id: `settings.personalization.personality.label`,
          defaultMessage: `Personality`,
          description: `Label for personality selection in personalization settings`,
        },
        friendly: {
          id: `composer.personalitySlashCommand.label.friendly`,
          defaultMessage: `Friendly`,
          description: `Label for the friendly personality`,
        },
        pragmatic: {
          id: `composer.personalitySlashCommand.label.pragmatic`,
          defaultMessage: `Pragmatic`,
          description: `Label for the pragmatic personality`,
        },
        customInstructions: {
          id: `settings.personalization.agents.title`,
          defaultMessage: `Custom instructions`,
          description: `Heading for personal agents settings section`,
        },
        memory: {
          id: `settings.personalization.memory.title`,
          defaultMessage: `Memory (experimental)`,
          description: `Heading for memory settings in personalization`,
        },
        enableMemories: {
          id: `settings.memory.enableMemoriesLabel`,
          defaultMessage: `Enable memories`,
          description: `Label for enabling memories`,
        },
        skipToolAssistedChats: {
          id: `settings.memory.noToolContextLabel`,
          defaultMessage: `Skip tool-assisted chats`,
          description: `Label for disabling memory generation when MCP or web search is used`,
        },
        resetMemories: {
          id: `settings.memory.resetMemoriesLabel`,
          defaultMessage: `Reset memories`,
          description: `Label for resetting memories`,
        },
      })));
  });
function Dt(e) {
  return kt(e, Ot);
}
function Ot(e) {
  let { edits: t } = e;
  return t;
}
function kt(e, t) {
  let n = (0, jt.c)(20),
    r = x(),
    { data: i } = T(_e, e),
    a = De(),
    o;
  n[0] === e ? (o = n[1]) : ((o = [...U, e]), (n[0] = e), (n[1] = o));
  let s = o,
    l;
  n[2] !== t || n[3] !== e || n[4] !== i?.configWriteTarget?.filePath
    ? ((l = (n) =>
        Ce(`batch-write-config-value`, {
          hostId: e,
          edits: t(n).map(At),
          filePath: i?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (n[2] = t),
      (n[3] = e),
      (n[4] = i?.configWriteTarget?.filePath),
      (n[5] = l))
    : (l = n[5]);
  let u;
  n[6] !== t || n[7] !== r || n[8] !== s
    ? ((u = async (e) => {
        let n = t(e);
        await r.cancelQueries({ queryKey: s });
        let i = r.getQueryData(s);
        return (
          r.setQueryData(s, (e) => (e == null ? e : { ...e, config: ve(e.config, n) })),
          { previousUserConfig: i }
        );
      }),
      (n[6] = t),
      (n[7] = r),
      (n[8] = s),
      (n[9] = u))
    : (u = n[9]);
  let d;
  n[10] !== r || n[11] !== s
    ? ((d = (e, t, n) => {
        (c.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          r.setQueryData(s, n?.previousUserConfig));
      }),
      (n[10] = r),
      (n[11] = s),
      (n[12] = d))
    : (d = n[12]);
  let f;
  n[13] === a
    ? (f = n[14])
    : ((f = async () => {
        await Promise.all([a(U), a([`user-saved-config`])]);
      }),
      (n[13] = a),
      (n[14] = f));
  let p;
  return (
    n[15] !== l || n[16] !== u || n[17] !== d || n[18] !== f
      ? ((p = { mutationFn: l, onMutate: u, onError: d, onSettled: f }),
        (n[15] = l),
        (n[16] = u),
        (n[17] = d),
        (n[18] = f),
        (n[19] = p))
      : (p = n[19]),
    O(p)
  );
}
function At(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var jt,
  Mt = e(() => {
    ((jt = _()), w(), b(), be(), H(), W(), f(), ye());
  });
function Nt() {
  let e = (0, It.c)(16),
    t = x(),
    n = D(Oe),
    { data: r } = T(_e, n),
    i = De(),
    a;
  e[0] === n ? (a = e[1]) : ((a = [...U, n]), (e[0] = n), (e[1] = a));
  let o = a,
    s;
  e[2] !== n || e[3] !== r?.configWriteTarget?.filePath
    ? ((s = (e) => {
        let { enabled: t } = e;
        return Ce(`batch-write-config-value`, {
          hostId: n,
          edits: [{ keyPath: Lt, value: t, mergeStrategy: `upsert` }],
          filePath: r?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = n),
      (e[3] = r?.configWriteTarget?.filePath),
      (e[4] = s))
    : (s = e[4]);
  let l, u;
  e[5] !== t || e[6] !== o
    ? ((l = async (e) => {
        let { enabled: n } = e;
        await t.cancelQueries({ queryKey: o });
        let r = t.getQueryData(o);
        return (
          t.setQueryData(o, (e) => (e == null ? e : { ...e, config: Pt(e.config, n) })),
          { previousUserConfig: r }
        );
      }),
      (u = (e, n, r) => {
        (c.error(`Failed to update Chronicle config`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          t.setQueryData(o, r?.previousUserConfig));
      }),
      (e[5] = t),
      (e[6] = o),
      (e[7] = l),
      (e[8] = u))
    : ((l = e[7]), (u = e[8]));
  let d;
  e[9] === i
    ? (d = e[10])
    : ((d = async () => {
        await Promise.all([i(U), i([`user-saved-config`])]);
      }),
      (e[9] = i),
      (e[10] = d));
  let f;
  return (
    e[11] !== s || e[12] !== l || e[13] !== u || e[14] !== d
      ? ((f = { mutationFn: s, onMutate: l, onError: u, onSettled: d }),
        (e[11] = s),
        (e[12] = l),
        (e[13] = u),
        (e[14] = d),
        (e[15] = f))
      : (f = e[15]),
    O(f)
  );
}
function Pt(e, t) {
  return Object.assign(structuredClone(e), { features: { ...Ft(e.features, pt, t) } });
}
function Ft(e, t, n) {
  let r = Rt.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var It,
  Lt,
  Rt,
  zt = e(() => {
    ((It = _()),
      w(),
      b(),
      i(),
      E(),
      ge(),
      be(),
      H(),
      W(),
      f(),
      gt(),
      (Lt = h(pt)),
      (Rt = p(r(), n())));
  });
function Bt({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = ee(m),
    n = D(Oe),
    r = Ee(),
    i = x(),
    a = vt(),
    o = Nt(),
    { data: s, isLoading: l } = N(u.CHRONICLE_CONSENT_ACCEPTED),
    { data: f, isLoading: p } = T(_e, n),
    [h, g] = (0, rn.useState)(!1),
    [_, v] = (0, rn.useState)(!1),
    [y, b] = (0, rn.useState)(null),
    [C, w] = (0, rn.useState)(!1),
    E = te(`chronicle-permissions`, {
      queryConfig: { intervalMs: 1e3, refetchIntervalInBackground: !0, refetchOnMount: `always` },
    }),
    O = k(f?.config, lt) === !0,
    A = k(f?.config, pt) === !0,
    j = o.isPending || C || l,
    M = j || !O,
    P = Be({
      accessibilityStatus: E.data?.accessibility,
      errorMessage: y,
      isSidecarPresent: E.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: C,
      processState: E.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: E.data?.screenRecording,
    }),
    F = r.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, rn.useEffect)(() => {
    _ && Fe(P.kind) && d(t, u.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [_, t, P.kind]);
  let I = async ({ rememberConsentAccepted: n, showSetupDialog: r }) => {
      let a = A;
      (w(!0), b(null), g(!1), v(r));
      try {
        (n === !0 && (await d(t, u.CHRONICLE_CONSENT_ACCEPTED, !0)),
          r || d(t, u.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await o.mutateAsync({ enabled: !0 }),
          e?.(a, !0),
          await i.invalidateQueries({ queryKey: S(`chronicle-permissions`) }));
      } catch (e) {
        let n = nn(e);
        (d(t, u.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          b(n),
          c.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: n },
            sensitive: { error: e },
          }));
      } finally {
        w(!1);
      }
    },
    R = async () => {
      let n = A;
      (w(!0), b(null), d(t, u.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await o.mutateAsync({ enabled: !1 }), e?.(n, !1));
      } catch {
      } finally {
        w(!1);
      }
    };
  return p
    ? (0, Z.jsx)(Z.Fragment, {})
    : (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(L, {
            label: F,
            description: (0, Z.jsx)(Kt, {
              isCheckingPermissions: E.data == null && E.isFetching,
              permissions: E.data,
              chronicleFeatureEnabled: A,
              onOpenChronicleSetup: () => {
                (b(null), v(!0));
              },
            }),
            control: (0, Z.jsx)(z, {
              disabled: O,
              tooltipContent: (0, Z.jsx)(V, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, Z.jsx)(`span`, {
                className: xe(`inline-flex`, !O && `cursor-not-allowed`),
                tabIndex: O ? void 0 : 0,
                children: (0, Z.jsx)(Ze, {
                  checked: A,
                  className: O ? void 0 : `pointer-events-none`,
                  disabled: M,
                  onChange: (e) => {
                    if (e) {
                      if (s === !0) {
                        I({ showSetupDialog: !1 });
                        return;
                      }
                      g(!0);
                      return;
                    }
                    R();
                  },
                  ariaLabel: r.formatMessage(
                    {
                      id: `settings.general.experimentalFeatures.chronicle.buttonAriaLabel`,
                      defaultMessage: `Toggle {featureName}`,
                      description: `Aria label for toggling the Chronicle experimental feature`,
                    },
                    { featureName: F },
                  ),
                }),
              }),
            }),
          }),
          (0, Z.jsx)(Vt, {
            open: h,
            onOpenChange: g,
            chronicleDisplayName: F,
            isPending: j,
            onContinue: () => {
              I({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, Z.jsx)(Re, {
            open: _,
            setupState: P,
            onOpenChange: (e) => {
              (e || d(t, u.CHRONICLE_SETUP_COMPLETION_PENDING, !1), v(e));
            },
            onAskCodex: () => {
              (d(t, u.CHRONICLE_SETUP_COMPLETION_PENDING, !1), v(!1), a({ prefillPrompt: ze }));
            },
          }),
        ],
      });
}
function Vt(e) {
  let t = (0, X.c)(37),
    { isPending: n, open: r, chronicleDisplayName: i, onContinue: a, onOpenChange: o } = e,
    s = Ee(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, Z.jsx)(He, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, { className: `sr-only`, children: i }),
      })),
      (t[0] = i),
      (t[1] = c));
  let l;
  t[2] === s
    ? (l = t[3])
    : ((l = s.formatMessage({
        id: `settings.general.experimentalFeatures.chronicle.consentTitle`,
        defaultMessage: `Enable Chronicle research preview`,
        description: `Title for the Chronicle consent dialog`,
      })),
      (t[2] = s),
      (t[3] = l));
  let u;
  t[4] === l ? (u = t[5]) : ((u = (0, Z.jsx)(qe, { title: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== c || t[7] !== u
    ? ((d = (0, Z.jsxs)(Je, { children: [c, u] })), (t[6] = c), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f, p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (p = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyConsiderations`,
          defaultMessage: `Be mindful of the following considerations before enabling Chronicle:`,
          description: `Body copy before the considerations list in the Chronicle consent dialog`,
        }),
      })),
      (t[9] = f),
      (t[10] = p))
    : ((f = t[9]), (p = t[10]));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyCost`,
          defaultMessage: `<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.`,
          description: `Chronicle consent dialog list item describing rate limit cost`,
          values: { strong: Gt },
        }),
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyPrivacy`,
          defaultMessage: `<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.`,
          description: `Chronicle consent dialog list item describing privacy risk`,
          values: { strong: Wt },
        }),
      })),
      (t[12] = h))
    : (h = t[12]);
  let g, _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          m,
          h,
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection`,
              defaultMessage: `<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.`,
              description: `Chronicle consent dialog list item describing prompt injection risk`,
              values: { strong: Ut },
            }),
          }),
        ],
      })),
      (g = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading`,
          defaultMessage: `How it works:`,
          description: `Heading before Chronicle consent dialog details about screen capture processing and storage`,
        }),
      })),
      (t[13] = g),
      (t[14] = _))
    : ((g = t[13]), (_ = t[14]));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing`,
              defaultMessage: `To generate memories, the screen captures are processed on our servers and then deleted.`,
              description: `Chronicle consent dialog list item describing server processing for generating memories`,
            }),
          }),
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageLocal`,
              defaultMessage: `Screen captures are temporarily stored on device, and memories are also stored on device. Both are stored unencrypted, so be aware that other applications on your computer may have access to these files. When Codex uses memories in a chat, they may be used to improve our models, if allowed in your ChatGPT settings.`,
              description: `Chronicle consent dialog list item describing local screen capture and memory storage`,
            }),
          }),
        ],
      })),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsxs)(Je, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          f,
          p,
          _,
          g,
          v,
          (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro`,
              defaultMessage: `You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>`,
              description: `Closing body copy in the Chronicle consent dialog`,
              values: { link: Ht },
            }),
          }),
        ],
      })),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] === o
    ? (b = t[18])
    : ((b = () => {
        o(!1);
      }),
      (t[17] = o),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(V, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== n || t[21] !== b
    ? ((S = (0, Z.jsx)(tt, { color: `ghost`, disabled: n, onClick: b, children: x })),
      (t[20] = n),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(V, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== n || t[25] !== a
    ? ((w = (0, Z.jsx)(tt, { color: `primary`, loading: n, onClick: a, children: C })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== S || t[28] !== w
    ? ((T = (0, Z.jsx)(Je, { children: (0, Z.jsxs)(Xe, { className: Ke, children: [S, w] }) })),
      (t[27] = S),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== T || t[31] !== d
    ? ((E = (0, Z.jsxs)(Ye, {
        className: `max-h-[calc(100vh-6rem)] min-h-0`,
        children: [d, y, T],
      })),
      (t[30] = T),
      (t[31] = d),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== o || t[34] !== r || t[35] !== E
      ? ((D = (0, Z.jsx)(Ve, { open: r, onOpenChange: o, size: `default`, children: E })),
        (t[33] = o),
        (t[34] = r),
        (t[35] = E),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
function Ht(e) {
  return (0, Z.jsx)(`a`, {
    className: `text-token-link`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Ut(e) {
  return (0, Z.jsx)(`span`, { className: `font-bold text-token-foreground/90`, children: e });
}
function Wt(e) {
  return (0, Z.jsx)(`span`, { className: `font-bold text-token-foreground/90`, children: e });
}
function Gt(e) {
  return (0, Z.jsx)(`span`, { className: `font-bold text-token-foreground/90`, children: e });
}
function Kt(e) {
  let t = (0, X.c)(11),
    {
      isCheckingPermissions: n,
      onOpenChronicleSetup: r,
      permissions: i,
      chronicleFeatureEnabled: a,
    } = e,
    o = i?.accessibility === `granted` && i.screenRecording === `granted`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.description`,
          defaultMessage: `Augment memories with screen context so Codex can help with anything you’re working on. <link>Learn more</link>`,
          description: `Description for the Chronicle experimental feature`,
          values: { link: qt },
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== a ||
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== i?.accessibility ||
  t[5] !== i?.chronicleSidecarProcessState ||
  t[6] !== i?.screenRecording ||
  t[7] !== o
    ? ((c = a
        ? (0, Z.jsx)(`span`, {
            className: `flex flex-wrap gap-x-3 gap-y-1 text-xs`,
            children: (0, Z.jsx)(Jt, {
              accessibilityStatus: i?.accessibility,
              isChecking: n,
              processState: i?.chronicleSidecarProcessState,
              requiredPermissionsGranted: o,
              screenRecordingStatus: i?.screenRecording,
              onOpenChronicleSetup: r,
            }),
          })
        : null),
      (t[1] = a),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i?.accessibility),
      (t[5] = i?.chronicleSidecarProcessState),
      (t[6] = i?.screenRecording),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] === c
      ? (l = t[10])
      : ((l = (0, Z.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1.5`,
          children: [s, c],
        })),
        (t[9] = c),
        (t[10] = l)),
    l
  );
}
function qt(e) {
  return (0, Z.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Jt(e) {
  let t = (0, X.c)(22),
    {
      accessibilityStatus: n,
      isChecking: r,
      onOpenChronicleSetup: i,
      processState: a,
      requiredPermissionsGranted: o,
      screenRecordingStatus: s,
    } = e,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = tn({ accessibilityStatus: n, screenRecordingStatus: s })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c;
  if (!r && l != null) {
    let e;
    return (
      t[3] !== l || t[4] !== i
        ? ((e = (0, Z.jsx)(Yt, { permission: l, onOpenChronicleSetup: i })),
          (t[3] = l),
          (t[4] = i),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (!r && s === `granted`) {
    let e =
        a === `running` && o
          ? `font-medium text-token-charts-green`
          : `font-medium text-token-description-foreground`,
      s;
    t[6] === a ? (s = t[7]) : ((s = (0, Z.jsx)(Qt, { processState: a })), (t[6] = a), (t[7] = s));
    let c;
    t[8] !== e || t[9] !== s
      ? ((c = (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.permission.runningStatus`,
          defaultMessage: `Status: {status}`,
          description: `Status shown when Chronicle has Screen Recording permission`,
          values: { status: (0, Z.jsx)(`span`, { className: e, children: s }) },
        })),
        (t[8] = e),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]);
    let l;
    t[11] !== n || t[12] !== r || t[13] !== i
      ? ((l =
          n === `granted`
            ? null
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  `; `,
                  (0, Z.jsx)(`button`, {
                    className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap underline-offset-2 hover:underline`,
                    onClick: i,
                    type: `button`,
                    children: (0, Z.jsx)(V, {
                      id: `settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility`,
                      defaultMessage: `Accessibility: {status} (open setup)`,
                      description: `Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted`,
                      values: {
                        status: (0, Z.jsx)(`span`, {
                          className: xe(`font-medium`, en({ isChecking: r, status: n })),
                          children: (0, Z.jsx)($t, { isChecking: r, status: n }),
                        }),
                      },
                    }),
                  }),
                ],
              })),
        (t[11] = n),
        (t[12] = r),
        (t[13] = i),
        (t[14] = l))
      : (l = t[14]);
    let u;
    return (
      t[15] !== c || t[16] !== l
        ? ((u = (0, Z.jsx)(`span`, {
            className: `inline-flex min-w-0 whitespace-nowrap`,
            children: (0, Z.jsxs)(`span`, { className: `min-w-0 truncate`, children: [c, l] }),
          })),
          (t[15] = c),
          (t[16] = l),
          (t[17] = u))
        : (u = t[17]),
      u
    );
  }
  let u;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(V, {
        id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
        defaultMessage: `Screen Recording`,
        description: `Label for the macOS Screen Recording permission status`,
      })),
      (t[18] = u))
    : (u = t[18]);
  let d;
  return (
    t[19] !== r || t[20] !== s
      ? ((d = (0, Z.jsx)(Zt, { isChecking: r, label: u, status: s })),
        (t[19] = r),
        (t[20] = s),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function Yt(e) {
  let t = (0, X.c)(8),
    { onOpenChronicleSetup: n, permission: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = (0, Z.jsx)(Xt, { permission: r })), (t[0] = r), (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `font-medium`,
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.permission.statusLabel`,
          defaultMessage: `Status`,
          description: `Label preceding the Chronicle status value`,
        }),
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = (0, Z.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Z.jsx)(V, {
          id: `settings.general.experimentalFeatures.chronicle.permission.notGranted`,
          defaultMessage: `{statusLabel}: {permission} permission not granted (open setup)`,
          description: `Linked status shown when Chronicle does not have a required macOS permission`,
          values: { permission: i, statusLabel: a },
        }),
      })),
      (t[3] = i),
      (t[4] = o));
  let s;
  return (
    t[5] !== n || t[6] !== o
      ? ((s = (0, Z.jsx)(`button`, {
          className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap text-token-error-foreground underline-offset-2 hover:underline`,
          onClick: n,
          type: `button`,
          children: o,
        })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Xt(e) {
  let t = (0, X.c)(2),
    { permission: n } = e;
  switch (n) {
    case `accessibility`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permission.accessibility`,
              defaultMessage: `Accessibility`,
              description: `Label for the macOS Accessibility permission status`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
              defaultMessage: `Screen Recording`,
              description: `Label for the macOS Screen Recording permission status`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function Zt(e) {
  let t = (0, X.c)(12),
    { isChecking: n, label: r, status: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = xe(`font-medium`, en({ isChecking: n, status: i }))),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== n || t[4] !== i
    ? ((o = (0, Z.jsx)($t, { isChecking: n, status: i })), (t[3] = n), (t[4] = i), (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== a || t[7] !== o
    ? ((s = (0, Z.jsx)(`span`, { className: a, children: o })), (t[6] = a), (t[7] = o), (t[8] = s))
    : (s = t[8]);
  let c;
  return (
    t[9] !== r || t[10] !== s
      ? ((c = (0, Z.jsx)(`span`, {
          className: `inline-flex min-w-0 whitespace-nowrap`,
          children: (0, Z.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permission.status`,
              defaultMessage: `{permission}: {status}`,
              description: `Permission label and status for Chronicle`,
              values: { permission: r, status: s },
            }),
          }),
        })),
        (t[9] = r),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Qt(e) {
  let t = (0, X.c)(4),
    { processState: n } = e;
  switch (n) {
    case `disabled`:
    case `stopped`:
    case void 0: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.paused`,
              defaultMessage: `Paused`,
              description: `Chronicle status when the sidecar process is not running`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `restarting`:
    case `starting`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.starting`,
              defaultMessage: `Starting`,
              description: `Chronicle status when the sidecar process is starting`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `stopping`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.stopping`,
              defaultMessage: `Stopping`,
              description: `Chronicle status when the sidecar process is stopping`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `running`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.running`,
              defaultMessage: `Running`,
              description: `Chronicle status when the sidecar process is running`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function $t(e) {
  let t = (0, X.c)(7),
    { isChecking: n, status: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(V, {
            id: `settings.general.experimentalFeatures.chronicle.permissionStatus.checking`,
            defaultMessage: `Checking`,
            description: `Chronicle permission status while checking native state`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r == null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(V, {
            id: `settings.general.experimentalFeatures.chronicle.permissionStatus.unknown`,
            defaultMessage: `Unknown`,
            description: `Chronicle permission status when native state cannot be read`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  switch (r) {
    case `granted`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.granted`,
              defaultMessage: `Granted`,
              description: `Chronicle permission status when granted`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `not-determined`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.notDetermined`,
              defaultMessage: `Not requested`,
              description: `Chronicle permission status before the user has been prompted`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `denied`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.denied`,
              defaultMessage: `Denied`,
              description: `Chronicle permission status when denied`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `restricted`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.restricted`,
              defaultMessage: `Restricted`,
              description: `Chronicle permission status when blocked by policy`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(V, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.unknown`,
              defaultMessage: `Unknown`,
              description: `Chronicle permission status when native state cannot be read`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
  }
}
function en({ isChecking: e, status: t }) {
  if (e || t == null) return `text-token-description-foreground`;
  switch (t) {
    case `granted`:
      return `text-token-charts-green`;
    case `denied`:
    case `restricted`:
      return `text-token-charts-red`;
    case `not-determined`:
    case `unknown`:
      return `text-token-description-foreground`;
  }
}
function tn({ accessibilityStatus: e, screenRecordingStatus: t }) {
  return t === `denied`
    ? `screen-recording`
    : t === `granted` && e === `denied`
      ? `accessibility`
      : null;
}
function nn(e) {
  return e instanceof Error ? e.message : `Failed to enable Chronicle`;
}
var X,
  rn,
  Z,
  an = e(() => {
    ((X = _()),
      w(),
      we(),
      b(),
      i(),
      (rn = t(o(), 1)),
      G(),
      ge(),
      et(),
      Ue(),
      K(),
      q(),
      se(),
      v(),
      A(),
      _t(),
      H(),
      P(),
      R(),
      f(),
      C(),
      zt(),
      gt(),
      Le(),
      Ne(),
      (Z = j()));
  });
function on({
  chronicleResearchPreviewEnabled: e,
  chronicleResearchPreviewVisible: t,
  isMemoryFeatureEnabled: n,
  memoryConfig: r,
}) {
  return {
    chronicleResearchPreviewEnabled: e,
    chronicleResearchPreviewVisible: t,
    ...ke({ isMemoryFeatureEnabled: n, memoryConfig: r }),
    skipToolAssistedChatsEnabled: r.disableOnExternalContext,
  };
}
function sn(
  e,
  { chronicleResearchPreviewEnabled: t, isMemoryFeatureEnabled: n, memoryConfigPatch: r } = {},
) {
  return on({
    chronicleResearchPreviewEnabled: t ?? e.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: e.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: n ?? e.isMemoryFeatureEnabled,
    memoryConfig: { ...e.memoryConfig, ...r },
  });
}
function cn({
  productLogger: e,
  previousEnabled: t,
  selectedEnabled: n,
  settingName: r,
  state: i,
}) {
  e.logProductEvent(ue, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
}
async function ln({ productLogger: e, write: t, ...n }) {
  try {
    await t();
  } catch {
    return;
  }
  cn({ productLogger: e, ...n });
}
async function un({
  productLogger: e,
  previousState: t,
  selectedEnabled: n,
  featureWrite: r,
  configWrite: i,
  chronicleDisable: a,
}) {
  let [o, s, c] = await Promise.allSettled([r(), i(), a?.() ?? Promise.resolve()]),
    l = o.status === `fulfilled` ? n : t.memoryFeatureEnabled,
    u = s.status === `fulfilled` ? n : t.generateMemoriesEnabled,
    d = s.status === `fulfilled` ? n : t.useMemoriesEnabled,
    f = {
      ...t,
      chronicleResearchPreviewEnabled:
        a != null && c.status === `fulfilled` ? !1 : t.chronicleResearchPreviewEnabled,
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: u,
      useMemoriesEnabled: d,
      memoriesEnabled: l && u && d,
    };
  f.memoriesEnabled !== t.memoriesEnabled &&
    cn({
      productLogger: e,
      previousEnabled: t.memoriesEnabled,
      selectedEnabled: n,
      settingName: `memories`,
      state: f,
    });
}
var dn = e(() => {
  (me(), Pe());
});
function fn() {
  let e = (0, hn.c)(98),
    t = ee(m),
    n = Ee(),
    r = D(he),
    { selectedHostId: i } = F(),
    a = l(i),
    [o, s] = (0, gn.useState)(!1),
    c = Me(),
    { data: u } = T(_e, i),
    { data: d, isLoading: f } = T(mt, i),
    p;
  e[0] === d ? (p = e[1]) : ((p = d === void 0 ? [] : d), (e[0] = d), (e[1] = p));
  let h = p,
    g;
  e[2] === c
    ? (g = e[3])
    : ((g = { queryConfig: { enabled: c, refetchOnMount: `always`, refetchOnWindowFocus: !0 } }),
      (e[2] = c),
      (e[3] = g));
  let { data: _ } = te(`chronicle-permissions`, g),
    v = Dt(i),
    y;
  e[4] === i ? (y = e[5]) : ((y = { hostId: i }), (e[4] = i), (e[5] = y));
  let b = ut(y),
    x = pe(`875176429`),
    S = Nt(),
    C;
  e[6] === i
    ? (C = e[7])
    : ((C = () => Ce(`reset-memories-for-host`, { hostId: i })), (e[6] = i), (e[7] = C));
  let w, E;
  e[8] === t
    ? ((w = e[9]), (E = e[10]))
    : ((w = () => {
        (s(!1),
          t
            .get(rt)
            .success(
              (0, Q.jsx)(V, {
                id: `settings.memory.resetSuccess`,
                defaultMessage: `Memories reset`,
                description: `Toast shown after resetting memories`,
              }),
            ));
      }),
      (E = () => {
        t.get(rt).danger(
          (0, Q.jsx)(V, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = w),
      (e[10] = E));
  let A;
  e[11] !== C || e[12] !== w || e[13] !== E
    ? ((A = { mutationFn: C, onSuccess: w, onError: E }),
      (e[11] = C),
      (e[12] = w),
      (e[13] = E),
      (e[14] = A))
    : (A = e[14]);
  let j = O(A),
    M = ft(h, x),
    N;
  e[15] === h ? (N = e[16]) : ((N = h.find(mn)), (e[15] = h), (e[16] = N));
  let P = N?.enabled === !0,
    I = u?.config,
    R;
  e[17] === I ? (R = e[18]) : ((R = Se(I)), (e[17] = I), (e[18] = R));
  let z = R,
    ne = u?.config,
    re;
  e[19] === ne ? (re = e[20]) : ((re = k(ne, pt)), (e[19] = ne), (e[20] = re));
  let ie = re === !0,
    ae = f || v.isPending || b.isPending || S.isPending || j.isPending,
    oe = P && z.generateMemories && z.useMemories,
    se = a.kind === `local`,
    ce = se && c && _?.chronicleSidecarPresent === !0,
    le;
  e[21] !== ie || e[22] !== P || e[23] !== z || e[24] !== ce
    ? ((le = {
        chronicleResearchPreviewEnabled: ie,
        chronicleResearchPreviewVisible: ce,
        isMemoryFeatureEnabled: P,
        memoryConfig: z,
      }),
      (e[21] = ie),
      (e[22] = P),
      (e[23] = z),
      (e[24] = ce),
      (e[25] = le))
    : (le = e[25]);
  let ue = le;
  if (!M) return null;
  let de;
  e[26] === ue
    ? (de = e[27])
    : ((de = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return sn(ue, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = ue),
      (e[27] = de));
  let B = de,
    me;
  e[28] !== v || e[29] !== S || e[30] !== B || e[31] !== se || e[32] !== r || e[33] !== b
    ? ((me = (e) => {
        un({
          productLogger: r,
          previousState: B(),
          selectedEnabled: e,
          featureWrite: () => b.mutateAsync({ featureName: lt, enabled: e }),
          configWrite: () =>
            v.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && se ? { chronicleDisable: () => S.mutateAsync({ enabled: !1 }) } : {}),
        });
      }),
      (e[28] = v),
      (e[29] = S),
      (e[30] = B),
      (e[31] = se),
      (e[32] = r),
      (e[33] = b),
      (e[34] = me))
    : (me = e[34]);
  let ge = me,
    H;
  e[35] === j
    ? (H = e[36])
    : ((H = async () => {
        await j.mutateAsync();
      }),
      (e[35] = j),
      (e[36] = H));
  let ve = H,
    ye;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, Q.jsx)(V, { ...Y.memory })), (e[37] = ye))
    : (ye = e[37]);
  let U;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(J.Header, {
        title: ye,
        subtitle: (0, Q.jsx)(V, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: pn },
        }),
      })),
      (e[38] = U))
    : (U = e[38]);
  let be, xe;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Q.jsx)(V, { ...Y.enableMemories })),
      (xe = (0, Q.jsx)(V, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = be),
      (e[40] = xe))
    : ((be = e[39]), (xe = e[40]));
  let we;
  e[41] === n
    ? (we = e[42])
    : ((we = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = we));
  let W;
  e[43] !== ae || e[44] !== oe || e[45] !== ge || e[46] !== we
    ? ((W = (0, Q.jsx)(L, {
        label: be,
        description: xe,
        control: (0, Q.jsx)(Ze, { checked: oe, disabled: ae, ariaLabel: we, onChange: ge }),
      })),
      (e[43] = ae),
      (e[44] = oe),
      (e[45] = ge),
      (e[46] = we),
      (e[47] = W))
    : (W = e[47]);
  let Te;
  e[48] !== B || e[49] !== r || e[50] !== ce
    ? ((Te = ce
        ? (0, Q.jsx)(Bt, {
            onChronicleResearchPreviewToggled: (e, t) => {
              cn({
                productLogger: r,
                previousEnabled: e,
                selectedEnabled: t,
                settingName: `chronicle_research_preview`,
                state: B({ chronicleResearchPreviewEnabled: t }),
              });
            },
          })
        : null),
      (e[48] = B),
      (e[49] = r),
      (e[50] = ce),
      (e[51] = Te))
    : (Te = e[51]);
  let De, G;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Q.jsx)(V, { ...Y.skipToolAssistedChats })),
      (G = (0, Q.jsx)(V, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = De),
      (e[53] = G))
    : ((De = e[52]), (G = e[53]));
  let Oe = z.disableOnExternalContext,
    ke = ae || !P,
    Ae;
  e[54] === n
    ? (Ae = e[55])
    : ((Ae = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = Ae));
  let je;
  e[56] !== v || e[57] !== B || e[58] !== z.disableOnExternalContext || e[59] !== r
    ? ((je = (e) => {
        ln({
          productLogger: r,
          previousEnabled: z.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: B({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            v.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                { keyPath: `memories.no_memories_if_mcp_or_web_search`, value: null },
              ],
            }),
        });
      }),
      (e[56] = v),
      (e[57] = B),
      (e[58] = z.disableOnExternalContext),
      (e[59] = r),
      (e[60] = je))
    : (je = e[60]);
  let Ne;
  e[61] !== z.disableOnExternalContext || e[62] !== ke || e[63] !== Ae || e[64] !== je
    ? ((Ne = (0, Q.jsx)(L, {
        label: De,
        description: G,
        control: (0, Q.jsx)(Ze, { checked: Oe, disabled: ke, ariaLabel: Ae, onChange: je }),
      })),
      (e[61] = z.disableOnExternalContext),
      (e[62] = ke),
      (e[63] = Ae),
      (e[64] = je),
      (e[65] = Ne))
    : (Ne = e[65]);
  let Pe, Fe;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (0, Q.jsx)(V, { ...Y.resetMemories })),
      (Fe = (0, Q.jsx)(V, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = Pe),
      (e[67] = Fe))
    : ((Pe = e[66]), (Fe = e[67]));
  let Ie, Le;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = () => {
        s(!0);
      }),
      (Le = (0, Q.jsx)(V, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Ie),
      (e[69] = Le))
    : ((Ie = e[68]), (Le = e[69]));
  let Re;
  e[70] === j.isPending
    ? (Re = e[71])
    : ((Re = (0, Q.jsx)(L, {
        label: Pe,
        description: Fe,
        control: (0, Q.jsx)(tt, {
          color: `danger`,
          disabled: j.isPending,
          loading: j.isPending,
          onClick: Ie,
          children: Le,
        }),
      })),
      (e[70] = j.isPending),
      (e[71] = Re));
  let ze;
  e[72] !== W || e[73] !== Te || e[74] !== Ne || e[75] !== Re
    ? ((ze = (0, Q.jsxs)(J, {
        className: `gap-2`,
        children: [
          U,
          (0, Q.jsx)(J.Content, { children: (0, Q.jsxs)(Ct, { children: [W, Te, Ne, Re] }) }),
        ],
      })),
      (e[72] = W),
      (e[73] = Te),
      (e[74] = Ne),
      (e[75] = Re),
      (e[76] = ze))
    : (ze = e[76]);
  let Be;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(Je, {
        children: (0, Q.jsx)(qe, {
          title: (0, Q.jsx)(V, {
            id: `settings.memory.resetDialogTitle`,
            defaultMessage: `Reset all memories?`,
            description: `Title for reset memories confirmation dialog`,
          }),
          subtitle: (0, Q.jsx)(V, {
            id: `settings.memory.resetDialogSubtitle`,
            defaultMessage: `This deletes all Codex memories.`,
            description: `Subtitle for reset memories confirmation dialog`,
          }),
        }),
      })),
      (e[77] = Be))
    : (Be = e[77]);
  let He, Ue;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = () => {
        s(!1);
      }),
      (Ue = (0, Q.jsx)(V, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = He),
      (e[79] = Ue))
    : ((He = e[78]), (Ue = e[79]));
  let We;
  e[80] === j.isPending
    ? (We = e[81])
    : ((We = (0, Q.jsx)(tt, { color: `ghost`, disabled: j.isPending, onClick: He, children: Ue })),
      (e[80] = j.isPending),
      (e[81] = We));
  let Ge;
  e[82] !== ve || e[83] !== r
    ? ((Ge = () => {
        (r.logProductEvent(fe, { resetScope: `all_memories` }), ve());
      }),
      (e[82] = ve),
      (e[83] = r),
      (e[84] = Ge))
    : (Ge = e[84]);
  let Ke;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, Q.jsx)(V, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = Ke))
    : (Ke = e[85]);
  let K;
  e[86] !== j.isPending || e[87] !== Ge
    ? ((K = (0, Q.jsx)(tt, { color: `danger`, loading: j.isPending, onClick: Ge, children: Ke })),
      (e[86] = j.isPending),
      (e[87] = Ge),
      (e[88] = K))
    : (K = e[88]);
  let q;
  e[89] !== We || e[90] !== K
    ? ((q = (0, Q.jsxs)(Ye, {
        children: [Be, (0, Q.jsx)(Je, { children: (0, Q.jsxs)(Xe, { children: [We, K] }) })],
      })),
      (e[89] = We),
      (e[90] = K),
      (e[91] = q))
    : (q = e[91]);
  let Qe;
  e[92] !== o || e[93] !== q
    ? ((Qe = (0, Q.jsx)(Ve, { open: o, onOpenChange: s, size: `compact`, children: q })),
      (e[92] = o),
      (e[93] = q),
      (e[94] = Qe))
    : (Qe = e[94]);
  let $e;
  return (
    e[95] !== ze || e[96] !== Qe
      ? (($e = (0, Q.jsxs)(Q.Fragment, { children: [ze, Qe] })),
        (e[95] = ze),
        (e[96] = Qe),
        (e[97] = $e))
      : ($e = e[97]),
    $e
  );
}
function pn(e) {
  return (0, Q.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function mn(e) {
  return e.name === lt;
}
var hn,
  gn,
  Q,
  _n = e(() => {
    ((hn = _()),
      me(),
      w(),
      b(),
      i(),
      (gn = t(o(), 1)),
      G(),
      be(),
      et(),
      Ue(),
      K(),
      $e(),
      q(),
      Ie(),
      ye(),
      Mt(),
      ht(),
      de(),
      H(),
      dt(),
      P(),
      Et(),
      xt(),
      I(),
      R(),
      St(),
      y(),
      B(),
      C(),
      zt(),
      an(),
      gt(),
      dn(),
      (Q = j()));
  });
function vn() {
  let e = (0, xn.c)(35),
    t = Ee(),
    n = pe(`1444479692`),
    { selectedHostId: r } = F(),
    i;
  e[0] === r ? (i = e[1]) : ((i = { hostId: r }), (e[0] = r), (e[1] = i));
  let { personality: a, setPersonality: o } = ot(i),
    s;
  e[2] === t ? (s = e[3]) : ((s = t.formatMessage(Y.friendly)), (e[2] = t), (e[3] = s));
  let c;
  e[4] === t
    ? (c = e[5])
    : ((c = t.formatMessage({
        id: `composer.personalitySlashCommand.description.friendly`,
        defaultMessage: `Warm, collaborative, and helpful`,
        description: `Description for the friendly personality option`,
      })),
      (e[4] = t),
      (e[5] = c));
  let l;
  e[6] !== s || e[7] !== c
    ? ((l = { value: `friendly`, label: s, description: c }), (e[6] = s), (e[7] = c), (e[8] = l))
    : (l = e[8]);
  let u;
  e[9] === t ? (u = e[10]) : ((u = t.formatMessage(Y.pragmatic)), (e[9] = t), (e[10] = u));
  let d;
  e[11] === t
    ? (d = e[12])
    : ((d = t.formatMessage({
        id: `composer.personalitySlashCommand.description.pragmatic`,
        defaultMessage: `Concise, task-focused, and direct`,
        description: `Description for the pragmatic personality option`,
      })),
      (e[11] = t),
      (e[12] = d));
  let f;
  e[13] !== u || e[14] !== d
    ? ((f = { value: `pragmatic`, label: u, description: d }),
      (e[13] = u),
      (e[14] = d),
      (e[15] = f))
    : (f = e[15]);
  let p;
  e[16] !== l || e[17] !== f ? ((p = [l, f]), (e[16] = l), (e[17] = f), (e[18] = p)) : (p = e[18]);
  let m = p,
    h;
  e[19] !== a || e[20] !== m
    ? ((h = m.find((e) => e.value === a) ?? m[0]), (e[19] = a), (e[20] = m), (e[21] = h))
    : (h = e[21]);
  let g = h,
    _;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(ct, { slug: `personalization` })), (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== g || e[27] !== o
    ? ((v = n
        ? (0, $.jsx)(J, {
            children: (0, $.jsx)(J.Content, {
              children: (0, $.jsx)(Ct, {
                children: (0, $.jsx)(L, {
                  label: (0, $.jsx)(V, { ...Y.personality }),
                  description: (0, $.jsx)(V, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, $.jsx)(ie, {
                    triggerButton: (0, $.jsx)(at, {
                      children: (0, $.jsx)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: g.label,
                      }),
                    }),
                    align: `end`,
                    children: (0, $.jsx)(`div`, {
                      className: `w-[260px] max-w-xs space-y-1`,
                      children: m.map((e) =>
                        (0, $.jsx)(
                          le.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? ce : void 0,
                            children: (0, $.jsxs)(`div`, {
                              className: `flex flex-col items-start gap-0.5`,
                              children: [
                                (0, $.jsx)(`span`, { className: `text-sm`, children: e.label }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs text-token-text-secondary`,
                                  children: e.description,
                                }),
                              ],
                            }),
                          },
                          e.value,
                        ),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          })
        : null),
      (e[23] = n),
      (e[24] = a),
      (e[25] = m),
      (e[26] = g),
      (e[27] = o),
      (e[28] = v))
    : (v = e[28]);
  let y;
  e[29] === r ? (y = e[30]) : ((y = (0, $.jsx)(yn, { hostId: r }, r)), (e[29] = r), (e[30] = y));
  let b;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(ae, { electron: !0, extension: !0, children: (0, $.jsx)(fn, {}) })),
      (e[31] = b))
    : (b = e[31]);
  let x;
  return (
    e[32] !== v || e[33] !== y
      ? ((x = (0, $.jsxs)(je, { title: _, children: [v, y, b] })),
        (e[32] = v),
        (e[33] = y),
        (e[34] = x))
      : (x = e[34]),
    x
  );
}
function yn(e) {
  let t = (0, xn.c)(40),
    { hostId: n } = e,
    r = ee(m),
    i = Ee(),
    a = x(),
    [o, s] = (0, Sn.useState)(null),
    { data: c, error: l, isFetching: u, refetch: d } = T(wt, n),
    f;
  t[0] !== i || t[1] !== a || t[2] !== r
    ? ((f = (e, t) => {
        (a.setQueryData(S(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          s(null),
          r
            .get(rt)
            .success(
              i.formatMessage({
                id: `settings.personalization.agents.save.success`,
                defaultMessage: `Saved agents.md`,
                description: `Toast shown when agents.md is saved`,
              }),
            ));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] !== i || t[5] !== r
    ? ((p = () => {
        r.get(rt).danger(
          i.formatMessage({
            id: `settings.personalization.agents.save.error`,
            defaultMessage: `Unable to save agents.md`,
            description: `Toast shown when agents.md save fails`,
          }),
        );
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = p))
    : (p = t[6]);
  let h;
  t[7] !== f || t[8] !== p
    ? ((h = { onSuccess: f, onError: p }), (t[7] = f), (t[8] = p), (t[9] = h))
    : (h = t[9]);
  let _ = g(`codex-agents-md-save`, h),
    v = c?.contents ?? ``,
    y = o ?? v,
    b = o != null && o !== v,
    C = c != null,
    w = !C && u,
    E = _.isPending,
    D = l != null && c == null,
    O;
  t[10] !== y || t[11] !== n || t[12] !== b || t[13] !== C || t[14] !== E || t[15] !== _
    ? ((O = () => {
        !C || !b || E || _.mutate({ hostId: n, contents: y });
      }),
      (t[10] = y),
      (t[11] = n),
      (t[12] = b),
      (t[13] = C),
      (t[14] = E),
      (t[15] = _),
      (t[16] = O))
    : (O = t[16]);
  let k = O,
    A = C && b && !E,
    j;
  t[17] === k
    ? (j = t[18])
    : ((j = (e) => {
        (e.preventDefault(), k());
      }),
      (t[17] = k),
      (t[18] = j));
  let M;
  (t[19] !== A || t[20] !== j
    ? ((M = { accelerator: `CmdOrCtrl+S`, enabled: A, onKeyDown: j }),
      (t[19] = A),
      (t[20] = j),
      (t[21] = M))
    : (M = t[21]),
    We(M));
  let te;
  t[22] === i
    ? (te = t[23])
    : ((te = i.formatMessage({
        id: `settings.personalization.agents.placeholder`,
        defaultMessage: `Add your custom instructions…`,
        description: `Placeholder text for personal agents editor`,
      })),
      (t[22] = i),
      (t[23] = te));
  let N = te,
    P;
  t[24] === i
    ? (P = t[25])
    : ((P = i.formatMessage(Y.customInstructions)), (t[24] = i), (t[25] = P));
  let F = P,
    I;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(V, { ...Y.customInstructions })), (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(J.Header, {
        title: I,
        subtitle: (0, $.jsx)(V, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: bn },
        }),
      })),
      (t[27] = L))
    : (L = t[27]);
  let R;
  return (
    t[28] !== v ||
    t[29] !== F ||
    t[30] !== y ||
    t[31] !== k ||
    t[32] !== b ||
    t[33] !== w ||
    t[34] !== C ||
    t[35] !== E ||
    t[36] !== N ||
    t[37] !== d ||
    t[38] !== D
      ? ((R = (0, $.jsxs)(J, {
          className: `gap-2`,
          children: [
            L,
            (0, $.jsx)(J.Content, {
              children: D
                ? (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, $.jsx)(V, {
                          id: `settings.personalization.agents.loadError`,
                          defaultMessage: `Unable to load agents.md.`,
                          description: `Error message shown when agents.md fails to load`,
                        }),
                      }),
                      (0, $.jsx)(tt, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          d();
                        },
                        size: `toolbar`,
                        children: (0, $.jsx)(V, {
                          id: `settings.personalization.agents.retry`,
                          defaultMessage: `Retry`,
                          description: `Button label to retry loading agents.md`,
                        }),
                      }),
                    ],
                  })
                : (0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [
                      w
                        ? (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, $.jsx)(Qe, { className: `icon-xs` }),
                              (0, $.jsx)(V, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, $.jsx)(`textarea`, {
                            "aria-label": F,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !C || E,
                            placeholder: N,
                            rows: 12,
                            value: y,
                            onChange: (e) => {
                              let t = e.target.value;
                              s(t === v ? null : t);
                            },
                          }),
                      (0, $.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, $.jsx)(tt, {
                          color: `primary`,
                          disabled: !b || !C,
                          loading: E,
                          onClick: k,
                          size: `toolbar`,
                          children: (0, $.jsx)(V, {
                            id: `settings.personalization.agents.save`,
                            defaultMessage: `Save`,
                            description: `Save button label for personal agents editor`,
                          }),
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        })),
        (t[28] = v),
        (t[29] = F),
        (t[30] = y),
        (t[31] = k),
        (t[32] = b),
        (t[33] = w),
        (t[34] = C),
        (t[35] = E),
        (t[36] = N),
        (t[37] = d),
        (t[38] = D),
        (t[39] = R))
      : (R = t[39]),
    R
  );
}
function bn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: bt,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
var xn, Sn, $;
e(() => {
  ((xn = _()),
    w(),
    b(),
    (Sn = t(o(), 1)),
    G(),
    et(),
    re(),
    nt(),
    $e(),
    ne(),
    st(),
    yt(),
    oe(),
    Ge(),
    P(),
    Tt(),
    Ae(),
    Et(),
    xt(),
    I(),
    R(),
    it(),
    St(),
    B(),
    C(),
    _n(),
    ($ = j()));
})();
export { vn as PersonalizationSettings };
//# sourceMappingURL=personalization-settings.js.map
