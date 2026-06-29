import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ei as n,
  Fs as r,
  Gs as i,
  Ht as a,
  Ol as o,
  Tt as s,
  Us as c,
  Ut as l,
  Wt as u,
  Ya as d,
  _t as f,
  ac as p,
  bl as m,
  ct as h,
  dl as g,
  dt as _,
  ft as v,
  gt as y,
  hs as b,
  kl as x,
  oc as S,
  pl as C,
  sc as w,
  st as T,
  tc as E,
  ut as D,
  wt as O,
  xl as k,
  xs as A,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as j,
  Co as M,
  Es as N,
  Go as P,
  Ho as F,
  Ia as I,
  Jp as ee,
  Ma as te,
  Na as L,
  Sp as R,
  Ts as z,
  Wo as ne,
  Xp as B,
  Yp as re,
  Zp as ie,
  _o as ae,
  am as oe,
  fp as se,
  im as ce,
  ja as le,
  ka as ue,
  mp as de,
  vn as fe,
  xp as pe,
  yn as me,
  yo as V,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  $n as he,
  Fa as ge,
  Hc as _e,
  Kc as ve,
  Lb as ye,
  Qn as be,
  Rb as xe,
  Ta as Se,
  Uc as Ce,
  Vi as we,
  _v as Te,
  aa as H,
  aw as U,
  cC as Ee,
  cw as W,
  gf as G,
  ia as De,
  ip as K,
  iw as Oe,
  ki as ke,
  mf as Ae,
  oC as q,
  pf as je,
  rm as Me,
  rp as Ne,
  sm as Pe,
  uw as Fe,
  vv as Ie,
  wi as Le,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  D as Re,
  E as ze,
  _ as Be,
  b as Ve,
  g as He,
  gt as Ue,
  h as We,
  m as Ge,
  p as Ke,
  v as qe,
  vt as Je,
  y as Ye,
} from "./app-initial~app-main~automations-page.js";
import {
  h as Xe,
  p as Ze,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  it as J,
  ot as Qe,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17.js";
import {
  Sn as $e,
  xn as et,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import { Mt as tt, jt as nt } from "./app-initial~app-main~onboarding-page.js";
import {
  A as rt,
  D as it,
  E as at,
  M as ot,
  N as st,
  O as ct,
  j as lt,
  k as ut,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  b as dt,
  v as ft,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  C as pt,
  P as mt,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~pric~dbjkmxsl.js";
import {
  a as ht,
  i as gt,
  t as _t,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as vt,
  t as yt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~bnuob1na.js";
import {
  n as bt,
  t as xt,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as St,
  t as Ct,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
var wt,
  Tt = e(() => {
    (l(),
      f(),
      D(),
      (wt = h(a, `codex-agents-md`, (e) => ({
        params: { hostId: e },
        staleTime: y.FIVE_SECONDS,
      }))));
  }),
  Y,
  Et = e(() => {
    (U(),
      (Y = Oe({
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
    r = m(),
    { data: i } = p(we, e),
    a = H(),
    o;
  n[0] === e ? (o = n[1]) : ((o = [...Le, e]), (n[0] = e), (n[1] = o));
  let c = o,
    l;
  n[2] !== t || n[3] !== e || n[4] !== i?.configWriteTarget?.filePath
    ? ((l = (n) =>
        xe(`batch-write-config-value`, {
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
  n[6] !== t || n[7] !== r || n[8] !== c
    ? ((u = async (e) => {
        let n = t(e);
        await r.cancelQueries({ queryKey: c });
        let i = r.getQueryData(c);
        return (
          r.setQueryData(c, (e) => (e == null ? e : { ...e, config: je(e.config, n) })),
          { previousUserConfig: i }
        );
      }),
      (n[6] = t),
      (n[7] = r),
      (n[8] = c),
      (n[9] = u))
    : (u = n[9]);
  let d;
  n[10] !== r || n[11] !== c
    ? ((d = (e, t, n) => {
        (s.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          r.setQueryData(c, n?.previousUserConfig));
      }),
      (n[10] = r),
      (n[11] = c),
      (n[12] = d))
    : (d = n[12]);
  let f;
  n[13] === a
    ? (f = n[14])
    : ((f = async () => {
        await Promise.all([a(Le), a([`user-saved-config`])]);
      }),
      (n[13] = a),
      (n[14] = f));
  let h;
  return (
    n[15] !== l || n[16] !== u || n[17] !== d || n[18] !== f
      ? ((h = { mutationFn: l, onMutate: u, onError: d, onSettled: f }),
        (n[15] = l),
        (n[16] = u),
        (n[17] = d),
        (n[18] = f),
        (n[19] = h))
      : (h = n[19]),
    C(h)
  );
}
function At(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var jt,
  Mt = e(() => {
    ((jt = o()), g(), E(), ye(), ke(), De(), O(), G());
  });
function Nt() {
  let e = (0, It.c)(16),
    t = m(),
    n = w(Se),
    { data: r } = p(we, n),
    i = H(),
    a;
  e[0] === n ? (a = e[1]) : ((a = [...Le, n]), (e[0] = n), (e[1] = a));
  let o = a,
    c;
  e[2] !== n || e[3] !== r?.configWriteTarget?.filePath
    ? ((c = (e) => {
        let { enabled: t } = e;
        return xe(`batch-write-config-value`, {
          hostId: n,
          edits: [{ keyPath: Lt, value: t, mergeStrategy: `upsert` }],
          filePath: r?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = n),
      (e[3] = r?.configWriteTarget?.filePath),
      (e[4] = c))
    : (c = e[4]);
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
        (s.error(`Failed to update Chronicle config`, {
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
        await Promise.all([i(Le), i([`user-saved-config`])]);
      }),
      (e[9] = i),
      (e[10] = d));
  let f;
  return (
    e[11] !== c || e[12] !== l || e[13] !== u || e[14] !== d
      ? ((f = { mutationFn: c, onMutate: l, onError: u, onSettled: d }),
        (e[11] = c),
        (e[12] = l),
        (e[13] = u),
        (e[14] = d),
        (e[15] = f))
      : (f = e[15]),
    C(f)
  );
}
function Pt(e, t) {
  return Object.assign(structuredClone(e), { features: { ...Ft(e.features, ut, t) } });
}
function Ft(e, t, n) {
  let r = Rt.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var It,
  Lt,
  Rt,
  zt = e(() => {
    ((It = o()),
      g(),
      E(),
      u(),
      A(),
      ge(),
      ye(),
      ke(),
      De(),
      O(),
      rt(),
      (Lt = n(ut)),
      (Rt = c(i(), r())));
  });
function Bt({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = S(a),
    n = w(Se),
    r = Fe(),
    i = m(),
    o = $e(),
    c = Nt(),
    { data: l, isLoading: u } = he(d.CHRONICLE_CONSENT_ACCEPTED),
    { data: f, isLoading: h } = p(we, n),
    [g, v] = (0, rn.useState)(!1),
    [y, x] = (0, rn.useState)(!1),
    [C, E] = (0, rn.useState)(null),
    [D, O] = (0, rn.useState)(!1),
    k = _(`chronicle-permissions`, {
      queryConfig: { intervalMs: 1e3, refetchIntervalInBackground: !0, refetchOnMount: `always` },
    }),
    A = b(f?.config, lt) === !0,
    j = b(f?.config, ut) === !0,
    M = c.isPending || D || u,
    N = M || !A,
    P = Ke({
      accessibilityStatus: k.data?.accessibility,
      errorMessage: C,
      isSidecarPresent: k.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: D,
      processState: k.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: k.data?.screenRecording,
    }),
    F = r.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, rn.useEffect)(() => {
    y && We(P.kind) && K(t, d.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [y, t, P.kind]);
  let I = async ({ rememberConsentAccepted: n, showSetupDialog: r }) => {
      let a = j;
      (O(!0), E(null), v(!1), x(r));
      try {
        (n === !0 && (await K(t, d.CHRONICLE_CONSENT_ACCEPTED, !0)),
          r || K(t, d.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await c.mutateAsync({ enabled: !0 }),
          e?.(a, !0),
          await i.invalidateQueries({ queryKey: T(`chronicle-permissions`) }));
      } catch (e) {
        let n = nn(e);
        (K(t, d.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          E(n),
          s.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: n },
            sensitive: { error: e },
          }));
      } finally {
        O(!1);
      }
    },
    ee = async () => {
      let n = j;
      (O(!0), E(null), K(t, d.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await c.mutateAsync({ enabled: !1 }), e?.(n, !1));
      } catch {
      } finally {
        O(!1);
      }
    };
  return h
    ? (0, Z.jsx)(Z.Fragment, {})
    : (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(nt, {
            label: F,
            description: (0, Z.jsx)(Kt, {
              isCheckingPermissions: k.data == null && k.isFetching,
              permissions: k.data,
              chronicleFeatureEnabled: j,
              onOpenChronicleSetup: () => {
                (E(null), x(!0));
              },
            }),
            control: (0, Z.jsx)(se, {
              disabled: A,
              tooltipContent: (0, Z.jsx)(W, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, Z.jsx)(`span`, {
                className: ce(`inline-flex`, !A && `cursor-not-allowed`),
                tabIndex: A ? void 0 : 0,
                children: (0, Z.jsx)(fe, {
                  checked: j,
                  className: A ? void 0 : `pointer-events-none`,
                  disabled: N,
                  onChange: (e) => {
                    if (e) {
                      if (l === !0) {
                        I({ showSetupDialog: !1 });
                        return;
                      }
                      v(!0);
                      return;
                    }
                    ee();
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
            open: g,
            onOpenChange: v,
            chronicleDisplayName: F,
            isPending: M,
            onContinue: () => {
              I({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, Z.jsx)(Be, {
            open: y,
            setupState: P,
            onOpenChange: (e) => {
              (e || K(t, d.CHRONICLE_SETUP_COMPLETION_PENDING, !1), x(e));
            },
            onAskCodex: () => {
              (K(t, d.CHRONICLE_SETUP_COMPLETION_PENDING, !1), x(!1), o({ prefillPrompt: He }));
            },
          }),
        ],
      });
}
function Vt(e) {
  let t = (0, X.c)(37),
    { isPending: n, open: r, chronicleDisplayName: i, onContinue: a, onOpenChange: o } = e,
    s = Fe(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, Z.jsx)(ne, {
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
  t[4] === l ? (u = t[5]) : ((u = (0, Z.jsx)(te, { title: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== c || t[7] !== u
    ? ((d = (0, Z.jsxs)(L, { children: [c, u] })), (t[6] = c), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f, p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(W, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (p = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(W, {
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
        children: (0, Z.jsx)(W, {
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
        children: (0, Z.jsx)(W, {
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
            children: (0, Z.jsx)(W, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection`,
              defaultMessage: `<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.`,
              description: `Chronicle consent dialog list item describing prompt injection risk`,
              values: { strong: Ut },
            }),
          }),
        ],
      })),
      (g = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(W, {
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
            children: (0, Z.jsx)(W, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing`,
              defaultMessage: `To generate memories, the screen captures are processed on our servers and then deleted.`,
              description: `Chronicle consent dialog list item describing server processing for generating memories`,
            }),
          }),
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(W, {
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
    ? ((y = (0, Z.jsxs)(L, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          f,
          p,
          _,
          g,
          v,
          (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(W, {
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
    ? ((x = (0, Z.jsx)(W, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== n || t[21] !== b
    ? ((S = (0, Z.jsx)(ee, { color: `ghost`, disabled: n, onClick: b, children: x })),
      (t[20] = n),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(W, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== n || t[25] !== a
    ? ((w = (0, Z.jsx)(ee, { color: `primary`, loading: n, onClick: a, children: C })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== S || t[28] !== w
    ? ((T = (0, Z.jsx)(L, { children: (0, Z.jsxs)(le, { className: ue, children: [S, w] }) })),
      (t[27] = S),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== T || t[31] !== d
    ? ((E = (0, Z.jsxs)(j, { className: `max-h-[calc(100vh-6rem)] min-h-0`, children: [d, y, T] })),
      (t[30] = T),
      (t[31] = d),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== o || t[34] !== r || t[35] !== E
      ? ((D = (0, Z.jsx)(F, { open: r, onOpenChange: o, size: `default`, children: E })),
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
        children: (0, Z.jsx)(W, {
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
      ? ((c = (0, Z.jsx)(W, {
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
                    children: (0, Z.jsx)(W, {
                      id: `settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility`,
                      defaultMessage: `Accessibility: {status} (open setup)`,
                      description: `Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted`,
                      values: {
                        status: (0, Z.jsx)(`span`, {
                          className: ce(`font-medium`, en({ isChecking: r, status: n })),
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
    ? ((u = (0, Z.jsx)(W, {
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
        children: (0, Z.jsx)(W, {
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
        children: (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
    ? ((a = ce(`font-medium`, en({ isChecking: n, status: i }))),
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
            children: (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
        ? ((e = (0, Z.jsx)(W, {
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
        ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
          ? ((e = (0, Z.jsx)(W, {
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
    ((X = o()),
      g(),
      oe(),
      E(),
      u(),
      (rn = t(x(), 1)),
      U(),
      ge(),
      re(),
      P(),
      I(),
      me(),
      de(),
      Ne(),
      be(),
      et(),
      ke(),
      l(),
      tt(),
      O(),
      D(),
      zt(),
      rt(),
      qe(),
      Ge(),
      (Z = k()));
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
    ...ze({ isMemoryFeatureEnabled: n, memoryConfig: r }),
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
  e.logProductEvent(Ce, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
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
  (ve(), Re());
});
function fn() {
  let e = (0, hn.c)(98),
    t = S(a),
    n = Fe(),
    r = w(Pe),
    { selectedHostId: i } = Qe(),
    o = Ie(i),
    [s, c] = (0, gn.useState)(!1),
    l = Ve(),
    { data: u } = p(we, i),
    { data: d, isLoading: f } = p(at, i),
    m;
  e[0] === d ? (m = e[1]) : ((m = d === void 0 ? [] : d), (e[0] = d), (e[1] = m));
  let h = m,
    g;
  e[2] === l
    ? (g = e[3])
    : ((g = { queryConfig: { enabled: l, refetchOnMount: `always`, refetchOnWindowFocus: !0 } }),
      (e[2] = l),
      (e[3] = g));
  let { data: v } = _(`chronicle-permissions`, g),
    y = Dt(i),
    x;
  e[4] === i ? (x = e[5]) : ((x = { hostId: i }), (e[4] = i), (e[5] = x));
  let T = ct(x),
    E = Ee(`875176429`),
    D = Nt(),
    O;
  e[6] === i
    ? (O = e[7])
    : ((O = () => xe(`reset-memories-for-host`, { hostId: i })), (e[6] = i), (e[7] = O));
  let k, A;
  e[8] === t
    ? ((k = e[9]), (A = e[10]))
    : ((k = () => {
        (c(!1),
          t
            .get(Xe)
            .success(
              (0, Q.jsx)(W, {
                id: `settings.memory.resetSuccess`,
                defaultMessage: `Memories reset`,
                description: `Toast shown after resetting memories`,
              }),
            ));
      }),
      (A = () => {
        t.get(Xe).danger(
          (0, Q.jsx)(W, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = k),
      (e[10] = A));
  let M;
  e[11] !== O || e[12] !== k || e[13] !== A
    ? ((M = { mutationFn: O, onSuccess: k, onError: A }),
      (e[11] = O),
      (e[12] = k),
      (e[13] = A),
      (e[14] = M))
    : (M = e[14]);
  let N = C(M),
    P = st(h, E),
    I;
  e[15] === h ? (I = e[16]) : ((I = h.find(mn)), (e[15] = h), (e[16] = I));
  let R = I?.enabled === !0,
    z = u?.config,
    ne;
  e[17] === z ? (ne = e[18]) : ((ne = Ae(z)), (e[17] = z), (e[18] = ne));
  let B = ne,
    re = u?.config,
    ie;
  e[19] === re ? (ie = e[20]) : ((ie = b(re, ut)), (e[19] = re), (e[20] = ie));
  let ae = ie === !0,
    oe = f || y.isPending || T.isPending || D.isPending || N.isPending,
    se = R && B.generateMemories && B.useMemories,
    ce = o.kind === `local`,
    ue = ce && l && v?.chronicleSidecarPresent === !0,
    de;
  e[21] !== ae || e[22] !== R || e[23] !== B || e[24] !== ue
    ? ((de = {
        chronicleResearchPreviewEnabled: ae,
        chronicleResearchPreviewVisible: ue,
        isMemoryFeatureEnabled: R,
        memoryConfig: B,
      }),
      (e[21] = ae),
      (e[22] = R),
      (e[23] = B),
      (e[24] = ue),
      (e[25] = de))
    : (de = e[25]);
  let pe = de;
  if (!P) return null;
  let me;
  e[26] === pe
    ? (me = e[27])
    : ((me = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return sn(pe, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = pe),
      (e[27] = me));
  let V = me,
    he;
  e[28] !== y || e[29] !== D || e[30] !== V || e[31] !== ce || e[32] !== r || e[33] !== T
    ? ((he = (e) => {
        un({
          productLogger: r,
          previousState: V(),
          selectedEnabled: e,
          featureWrite: () => T.mutateAsync({ featureName: lt, enabled: e }),
          configWrite: () =>
            y.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && ce ? { chronicleDisable: () => D.mutateAsync({ enabled: !1 }) } : {}),
        });
      }),
      (e[28] = y),
      (e[29] = D),
      (e[30] = V),
      (e[31] = ce),
      (e[32] = r),
      (e[33] = T),
      (e[34] = he))
    : (he = e[34]);
  let ge = he,
    ve;
  e[35] === N
    ? (ve = e[36])
    : ((ve = async () => {
        await N.mutateAsync();
      }),
      (e[35] = N),
      (e[36] = ve));
  let ye = ve,
    be;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Q.jsx)(W, { ...Y.memory })), (e[37] = be))
    : (be = e[37]);
  let Se;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, Q.jsx)(Ct.Header, {
        title: be,
        subtitle: (0, Q.jsx)(W, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: pn },
        }),
      })),
      (e[38] = Se))
    : (Se = e[38]);
  let Ce, Te;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Q.jsx)(W, { ...Y.enableMemories })),
      (Te = (0, Q.jsx)(W, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = Ce),
      (e[40] = Te))
    : ((Ce = e[39]), (Te = e[40]));
  let H;
  e[41] === n
    ? (H = e[42])
    : ((H = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = H));
  let U;
  e[43] !== oe || e[44] !== se || e[45] !== ge || e[46] !== H
    ? ((U = (0, Q.jsx)(nt, {
        label: Ce,
        description: Te,
        control: (0, Q.jsx)(fe, { checked: se, disabled: oe, ariaLabel: H, onChange: ge }),
      })),
      (e[43] = oe),
      (e[44] = se),
      (e[45] = ge),
      (e[46] = H),
      (e[47] = U))
    : (U = e[47]);
  let G;
  e[48] !== V || e[49] !== r || e[50] !== ue
    ? ((G = ue
        ? (0, Q.jsx)(Bt, {
            onChronicleResearchPreviewToggled: (e, t) => {
              cn({
                productLogger: r,
                previousEnabled: e,
                selectedEnabled: t,
                settingName: `chronicle_research_preview`,
                state: V({ chronicleResearchPreviewEnabled: t }),
              });
            },
          })
        : null),
      (e[48] = V),
      (e[49] = r),
      (e[50] = ue),
      (e[51] = G))
    : (G = e[51]);
  let De, K;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Q.jsx)(W, { ...Y.skipToolAssistedChats })),
      (K = (0, Q.jsx)(W, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = De),
      (e[53] = K))
    : ((De = e[52]), (K = e[53]));
  let Oe = B.disableOnExternalContext,
    ke = oe || !R,
    q;
  e[54] === n
    ? (q = e[55])
    : ((q = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = q));
  let je;
  e[56] !== y || e[57] !== V || e[58] !== B.disableOnExternalContext || e[59] !== r
    ? ((je = (e) => {
        ln({
          productLogger: r,
          previousEnabled: B.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: V({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            y.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                { keyPath: `memories.no_memories_if_mcp_or_web_search`, value: null },
              ],
            }),
        });
      }),
      (e[56] = y),
      (e[57] = V),
      (e[58] = B.disableOnExternalContext),
      (e[59] = r),
      (e[60] = je))
    : (je = e[60]);
  let Me;
  e[61] !== B.disableOnExternalContext || e[62] !== ke || e[63] !== q || e[64] !== je
    ? ((Me = (0, Q.jsx)(nt, {
        label: De,
        description: K,
        control: (0, Q.jsx)(fe, { checked: Oe, disabled: ke, ariaLabel: q, onChange: je }),
      })),
      (e[61] = B.disableOnExternalContext),
      (e[62] = ke),
      (e[63] = q),
      (e[64] = je),
      (e[65] = Me))
    : (Me = e[65]);
  let Ne, Le;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, Q.jsx)(W, { ...Y.resetMemories })),
      (Le = (0, Q.jsx)(W, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = Ne),
      (e[67] = Le))
    : ((Ne = e[66]), (Le = e[67]));
  let Re, ze;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = () => {
        c(!0);
      }),
      (ze = (0, Q.jsx)(W, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Re),
      (e[69] = ze))
    : ((Re = e[68]), (ze = e[69]));
  let Be;
  e[70] === N.isPending
    ? (Be = e[71])
    : ((Be = (0, Q.jsx)(nt, {
        label: Ne,
        description: Le,
        control: (0, Q.jsx)(ee, {
          color: `danger`,
          disabled: N.isPending,
          loading: N.isPending,
          onClick: Re,
          children: ze,
        }),
      })),
      (e[70] = N.isPending),
      (e[71] = Be));
  let He;
  e[72] !== U || e[73] !== G || e[74] !== Me || e[75] !== Be
    ? ((He = (0, Q.jsxs)(Ct, {
        className: `gap-2`,
        children: [
          Se,
          (0, Q.jsx)(Ct.Content, { children: (0, Q.jsxs)(xt, { children: [U, G, Me, Be] }) }),
        ],
      })),
      (e[72] = U),
      (e[73] = G),
      (e[74] = Me),
      (e[75] = Be),
      (e[76] = He))
    : (He = e[76]);
  let Ue;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, Q.jsx)(L, {
        children: (0, Q.jsx)(te, {
          title: (0, Q.jsx)(W, {
            id: `settings.memory.resetDialogTitle`,
            defaultMessage: `Reset all memories?`,
            description: `Title for reset memories confirmation dialog`,
          }),
          subtitle: (0, Q.jsx)(W, {
            id: `settings.memory.resetDialogSubtitle`,
            defaultMessage: `This deletes all Codex memories.`,
            description: `Subtitle for reset memories confirmation dialog`,
          }),
        }),
      })),
      (e[77] = Ue))
    : (Ue = e[77]);
  let We, Ge;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = () => {
        c(!1);
      }),
      (Ge = (0, Q.jsx)(W, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = We),
      (e[79] = Ge))
    : ((We = e[78]), (Ge = e[79]));
  let Ke;
  e[80] === N.isPending
    ? (Ke = e[81])
    : ((Ke = (0, Q.jsx)(ee, { color: `ghost`, disabled: N.isPending, onClick: We, children: Ge })),
      (e[80] = N.isPending),
      (e[81] = Ke));
  let qe;
  e[82] !== ye || e[83] !== r
    ? ((qe = () => {
        (r.logProductEvent(_e, { resetScope: `all_memories` }), ye());
      }),
      (e[82] = ye),
      (e[83] = r),
      (e[84] = qe))
    : (qe = e[84]);
  let Je;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, Q.jsx)(W, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = Je))
    : (Je = e[85]);
  let Ye;
  e[86] !== N.isPending || e[87] !== qe
    ? ((Ye = (0, Q.jsx)(ee, { color: `danger`, loading: N.isPending, onClick: qe, children: Je })),
      (e[86] = N.isPending),
      (e[87] = qe),
      (e[88] = Ye))
    : (Ye = e[88]);
  let Ze;
  e[89] !== Ke || e[90] !== Ye
    ? ((Ze = (0, Q.jsxs)(j, {
        children: [Ue, (0, Q.jsx)(L, { children: (0, Q.jsxs)(le, { children: [Ke, Ye] }) })],
      })),
      (e[89] = Ke),
      (e[90] = Ye),
      (e[91] = Ze))
    : (Ze = e[91]);
  let J;
  e[92] !== s || e[93] !== Ze
    ? ((J = (0, Q.jsx)(F, { open: s, onOpenChange: c, size: `compact`, children: Ze })),
      (e[92] = s),
      (e[93] = Ze),
      (e[94] = J))
    : (J = e[94]);
  let $e;
  return (
    e[95] !== He || e[96] !== J
      ? (($e = (0, Q.jsxs)(Q.Fragment, { children: [He, J] })),
        (e[95] = He),
        (e[96] = J),
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
    ((hn = o()),
      ve(),
      g(),
      E(),
      u(),
      (gn = t(x(), 1)),
      U(),
      ye(),
      re(),
      P(),
      I(),
      Ze(),
      me(),
      Ye(),
      G(),
      Mt(),
      ot(),
      Me(),
      ke(),
      it(),
      l(),
      Et(),
      St(),
      J(),
      tt(),
      bt(),
      Te(),
      q(),
      D(),
      zt(),
      an(),
      rt(),
      dn(),
      (Q = k()));
  });
function vn() {
  let e = (0, xn.c)(35),
    t = Fe(),
    n = Ee(`1444479692`),
    { selectedHostId: r } = Qe(),
    i;
  e[0] === r ? (i = e[1]) : ((i = { hostId: r }), (e[0] = r), (e[1] = i));
  let { personality: a, setPersonality: o } = vt(i),
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
    ? ((_ = (0, $.jsx)(gt, { slug: `personalization` })), (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== g || e[27] !== o
    ? ((v = n
        ? (0, $.jsx)(Ct, {
            children: (0, $.jsx)(Ct.Content, {
              children: (0, $.jsx)(xt, {
                children: (0, $.jsx)(nt, {
                  label: (0, $.jsx)(W, { ...Y.personality }),
                  description: (0, $.jsx)(W, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, $.jsx)(ae, {
                    triggerButton: (0, $.jsx)(_t, {
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
                          V.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? pe : void 0,
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
    ? ((b = (0, $.jsx)(z, { electron: !0, extension: !0, children: (0, $.jsx)(fn, {}) })),
      (e[31] = b))
    : (b = e[31]);
  let x;
  return (
    e[32] !== v || e[33] !== y
      ? ((x = (0, $.jsxs)(Ue, { title: _, children: [v, y, b] })),
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
    r = S(a),
    i = Fe(),
    o = m(),
    [s, c] = (0, Sn.useState)(null),
    { data: l, error: u, isFetching: d, refetch: f } = p(wt, n),
    h;
  t[0] !== i || t[1] !== o || t[2] !== r
    ? ((h = (e, t) => {
        (o.setQueryData(T(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          c(null),
          r
            .get(Xe)
            .success(
              i.formatMessage({
                id: `settings.personalization.agents.save.success`,
                defaultMessage: `Saved agents.md`,
                description: `Toast shown when agents.md is saved`,
              }),
            ));
      }),
      (t[0] = i),
      (t[1] = o),
      (t[2] = r),
      (t[3] = h))
    : (h = t[3]);
  let g;
  t[4] !== i || t[5] !== r
    ? ((g = () => {
        r.get(Xe).danger(
          i.formatMessage({
            id: `settings.personalization.agents.save.error`,
            defaultMessage: `Unable to save agents.md`,
            description: `Toast shown when agents.md save fails`,
          }),
        );
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== h || t[8] !== g
    ? ((_ = { onSuccess: h, onError: g }), (t[7] = h), (t[8] = g), (t[9] = _))
    : (_ = t[9]);
  let y = v(`codex-agents-md-save`, _),
    b = l?.contents ?? ``,
    x = s ?? b,
    C = s != null && s !== b,
    w = l != null,
    E = !w && d,
    D = y.isPending,
    O = u != null && l == null,
    k;
  t[10] !== x || t[11] !== n || t[12] !== C || t[13] !== w || t[14] !== D || t[15] !== y
    ? ((k = () => {
        !w || !C || D || y.mutate({ hostId: n, contents: x });
      }),
      (t[10] = x),
      (t[11] = n),
      (t[12] = C),
      (t[13] = w),
      (t[14] = D),
      (t[15] = y),
      (t[16] = k))
    : (k = t[16]);
  let A = k,
    j = w && C && !D,
    M;
  t[17] === A
    ? (M = t[18])
    : ((M = (e) => {
        (e.preventDefault(), A());
      }),
      (t[17] = A),
      (t[18] = M));
  let N;
  (t[19] !== j || t[20] !== M
    ? ((N = { accelerator: `CmdOrCtrl+S`, enabled: j, onKeyDown: M }),
      (t[19] = j),
      (t[20] = M),
      (t[21] = N))
    : (N = t[21]),
    dt(N));
  let P;
  t[22] === i
    ? (P = t[23])
    : ((P = i.formatMessage({
        id: `settings.personalization.agents.placeholder`,
        defaultMessage: `Add your custom instructions…`,
        description: `Placeholder text for personal agents editor`,
      })),
      (t[22] = i),
      (t[23] = P));
  let F = P,
    I;
  t[24] === i
    ? (I = t[25])
    : ((I = i.formatMessage(Y.customInstructions)), (t[24] = i), (t[25] = I));
  let te = I,
    L;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(W, { ...Y.customInstructions })), (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(Ct.Header, {
        title: L,
        subtitle: (0, $.jsx)(W, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: bn },
        }),
      })),
      (t[27] = R))
    : (R = t[27]);
  let z;
  return (
    t[28] !== b ||
    t[29] !== te ||
    t[30] !== x ||
    t[31] !== A ||
    t[32] !== C ||
    t[33] !== E ||
    t[34] !== w ||
    t[35] !== D ||
    t[36] !== F ||
    t[37] !== f ||
    t[38] !== O
      ? ((z = (0, $.jsxs)(Ct, {
          className: `gap-2`,
          children: [
            R,
            (0, $.jsx)(Ct.Content, {
              children: O
                ? (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, $.jsx)(W, {
                          id: `settings.personalization.agents.loadError`,
                          defaultMessage: `Unable to load agents.md.`,
                          description: `Error message shown when agents.md fails to load`,
                        }),
                      }),
                      (0, $.jsx)(ee, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          f();
                        },
                        size: `toolbar`,
                        children: (0, $.jsx)(W, {
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
                      E
                        ? (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, $.jsx)(B, { className: `icon-xs` }),
                              (0, $.jsx)(W, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, $.jsx)(`textarea`, {
                            "aria-label": te,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !w || D,
                            placeholder: F,
                            rows: 12,
                            value: x,
                            onChange: (e) => {
                              let t = e.target.value;
                              c(t === b ? null : t);
                            },
                          }),
                      (0, $.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, $.jsx)(ee, {
                          color: `primary`,
                          disabled: !C || !w,
                          loading: D,
                          onClick: A,
                          size: `toolbar`,
                          children: (0, $.jsx)(W, {
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
        (t[28] = b),
        (t[29] = te),
        (t[30] = x),
        (t[31] = A),
        (t[32] = C),
        (t[33] = E),
        (t[34] = w),
        (t[35] = D),
        (t[36] = F),
        (t[37] = f),
        (t[38] = O),
        (t[39] = z))
      : (z = t[39]),
    z
  );
}
function bn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: pt,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
var xn, Sn, $;
e(() => {
  ((xn = o()),
    g(),
    E(),
    (Sn = t(x(), 1)),
    U(),
    re(),
    M(),
    ie(),
    Ze(),
    N(),
    yt(),
    mt(),
    R(),
    ft(),
    l(),
    Tt(),
    Je(),
    Et(),
    St(),
    J(),
    tt(),
    ht(),
    bt(),
    q(),
    D(),
    _n(),
    ($ = k()));
})();
export { vn as PersonalizationSettings };
//# sourceMappingURL=personalization-settings.js.map
