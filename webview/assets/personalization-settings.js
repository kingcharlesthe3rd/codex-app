import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $P as r,
  $t as i,
  AB as a,
  AN as o,
  AV as s,
  Ai as c,
  BP as l,
  BV as u,
  Bs as d,
  CS as f,
  Ci as p,
  DN as m,
  DS as h,
  Di as g,
  Ei as _,
  Ex as v,
  FB as y,
  Fb as b,
  Fs as x,
  Ft as S,
  Ga as C,
  Gi as w,
  Gj as T,
  Gu as E,
  HE as D,
  IB as O,
  Is as k,
  It as A,
  JV as j,
  Ku as M,
  Lb as N,
  Ls as P,
  MV as ee,
  ON as F,
  Op as te,
  PB as ne,
  PL as re,
  Pb as ie,
  Pf as ae,
  Ps as oe,
  QP as se,
  Qf as ce,
  Qt as le,
  Rs as ue,
  Rt as I,
  SB as de,
  Sf as L,
  TM as fe,
  Ti as pe,
  Tx as me,
  VE as he,
  VP as ge,
  Vs as _e,
  Wa as ve,
  XN as ye,
  XR as R,
  ZN as be,
  Zf as z,
  Zi as xe,
  _f as Se,
  aP as Ce,
  ak as we,
  bF as Te,
  ba as Ee,
  cM as De,
  d_ as Oe,
  eP as ke,
  f_ as Ae,
  hB as je,
  hM as Me,
  h_ as B,
  iB as Ne,
  iF as V,
  kN as Pe,
  lF as Fe,
  mP as Ie,
  oB as Le,
  oP as Re,
  ok as ze,
  pM as Be,
  pP as H,
  qV as U,
  qi as Ve,
  qj as He,
  rF as Ue,
  sF as W,
  tP as We,
  uM as Ge,
  va as Ke,
  vp as G,
  wB as qe,
  wM as Je,
  wi as Ye,
  wt as Xe,
  xa as Ze,
  zV as K,
  zs as Qe,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  J as q,
  K as $e,
  O as et,
  _ as tt,
  f as nt,
  g as rt,
  h as it,
  k as at,
  m as ot,
  p as st,
  v as ct,
  y as lt,
} from "./app-initial~app-main~automations-page.js";
import {
  Bu as ut,
  Hu as dt,
  Ur as ft,
  Wr as pt,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  C as mt,
  G as ht,
  H as gt,
  K as _t,
  w as vt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  h as yt,
  p as bt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  g as xt,
  h as St,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  n as Ct,
  t as J,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
var wt,
  Tt = e(() => {
    (r(),
      Re(),
      n(),
      (wt = be(se, `codex-agents-md`, (e) => ({
        params: { hostId: e },
        staleTime: Ce.FIVE_SECONDS,
      }))));
  }),
  Y,
  Et = e(() => {
    (V(),
      (Y = Ue({
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
    r = K(),
    { data: i } = ne(ae, e),
    a = ce(),
    o;
  n[0] === e ? (o = n[1]) : ((o = [...Se, e]), (n[0] = e), (n[1] = o));
  let s = o,
    c;
  n[2] !== t || n[3] !== e || n[4] !== i?.configWriteTarget?.filePath
    ? ((c = (n) =>
        ze(`batch-write-config-value`, {
          hostId: e,
          edits: t(n).map(At),
          filePath: i?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (n[2] = t),
      (n[3] = e),
      (n[4] = i?.configWriteTarget?.filePath),
      (n[5] = c))
    : (c = n[5]);
  let l;
  n[6] !== t || n[7] !== r || n[8] !== s
    ? ((l = async (e) => {
        let n = t(e);
        await r.cancelQueries({ queryKey: s });
        let i = r.getQueryData(s);
        return (
          r.setQueryData(s, (e) => (e == null ? e : { ...e, config: ie(e.config, n) })),
          { previousUserConfig: i }
        );
      }),
      (n[6] = t),
      (n[7] = r),
      (n[8] = s),
      (n[9] = l))
    : (l = n[9]);
  let u;
  n[10] !== r || n[11] !== s
    ? ((u = (e, t, n) => {
        (Ie.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          r.setQueryData(s, n?.previousUserConfig));
      }),
      (n[10] = r),
      (n[11] = s),
      (n[12] = u))
    : (u = n[12]);
  let d;
  n[13] === a
    ? (d = n[14])
    : ((d = async () => {
        await Promise.all([a(Se), a([`user-saved-config`])]);
      }),
      (n[13] = a),
      (n[14] = d));
  let f;
  return (
    n[15] !== c || n[16] !== l || n[17] !== u || n[18] !== d
      ? ((f = { mutationFn: c, onMutate: l, onError: u, onSettled: d }),
        (n[15] = c),
        (n[16] = l),
        (n[17] = u),
        (n[18] = d),
        (n[19] = f))
      : (f = n[19]),
    ee(f)
  );
}
function At(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var jt,
  Mt = e(() => {
    ((jt = U()), s(), a(), we(), L(), z(), H(), N());
  });
function Nt() {
  let e = (0, It.c)(16),
    t = K(),
    n = O(G),
    { data: r } = ne(ae, n),
    i = ce(),
    a;
  e[0] === n ? (a = e[1]) : ((a = [...Se, n]), (e[0] = n), (e[1] = a));
  let o = a,
    s;
  e[2] !== n || e[3] !== r?.configWriteTarget?.filePath
    ? ((s = (e) => {
        let { enabled: t } = e;
        return ze(`batch-write-config-value`, {
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
  let c, l;
  e[5] !== t || e[6] !== o
    ? ((c = async (e) => {
        let { enabled: n } = e;
        await t.cancelQueries({ queryKey: o });
        let r = t.getQueryData(o);
        return (
          t.setQueryData(o, (e) => (e == null ? e : { ...e, config: Pt(e.config, n) })),
          { previousUserConfig: r }
        );
      }),
      (l = (e, n, r) => {
        (Ie.error(`Failed to update Chronicle config`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          t.setQueryData(o, r?.previousUserConfig));
      }),
      (e[5] = t),
      (e[6] = o),
      (e[7] = c),
      (e[8] = l))
    : ((c = e[7]), (l = e[8]));
  let u;
  e[9] === i
    ? (u = e[10])
    : ((u = async () => {
        await Promise.all([i(Se), i([`user-saved-config`])]);
      }),
      (e[9] = i),
      (e[10] = u));
  let d;
  return (
    e[11] !== s || e[12] !== c || e[13] !== l || e[14] !== u
      ? ((d = { mutationFn: s, onMutate: c, onError: l, onSettled: u }),
        (e[11] = s),
        (e[12] = c),
        (e[13] = l),
        (e[14] = u),
        (e[15] = d))
      : (d = e[15]),
    ee(d)
  );
}
function Pt(e, t) {
  return Object.assign(structuredClone(e), { features: { ...Ft(e.features, P, t) } });
}
function Ft(e, t, n) {
  let r = Rt.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var It,
  Lt,
  Rt,
  zt = e(() => {
    ((It = U()),
      s(),
      a(),
      Te(),
      Le(),
      te(),
      we(),
      L(),
      z(),
      H(),
      ue(),
      (Lt = re(P)),
      (Rt = de(qe(), je())));
  });
function Bt({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = y(se),
    n = O(G),
    r = Fe(),
    i = K(),
    a = I(),
    o = Nt(),
    { data: s, isLoading: c } = M(R.CHRONICLE_CONSENT_ACCEPTED),
    { data: u, isLoading: d } = ne(ae, n),
    [f, p] = (0, rn.useState)(!1),
    [m, h] = (0, rn.useState)(!1),
    [g, _] = (0, rn.useState)(null),
    [b, x] = (0, rn.useState)(!1),
    S = ke(`chronicle-permissions`, {
      queryConfig: { intervalMs: 1e3, refetchIntervalInBackground: !0, refetchOnMount: `always` },
    }),
    C = Ne(u?.config, Qe) === !0,
    w = Ne(u?.config, P) === !0,
    T = o.isPending || b || c,
    E = T || !C,
    D = nt({
      accessibilityStatus: S.data?.accessibility,
      errorMessage: g,
      isSidecarPresent: S.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: b,
      processState: S.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: S.data?.screenRecording,
    }),
    k = r.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, rn.useEffect)(() => {
    m && ot(D.kind) && v(t, R.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [m, t, D.kind]);
  let A = async ({ rememberConsentAccepted: n, showSetupDialog: r }) => {
      let a = w;
      (x(!0), _(null), p(!1), h(r));
      try {
        (n === !0 && (await v(t, R.CHRONICLE_CONSENT_ACCEPTED, !0)),
          r || v(t, R.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await o.mutateAsync({ enabled: !0 }),
          e?.(a, !0),
          await i.invalidateQueries({ queryKey: ye(`chronicle-permissions`) }));
      } catch (e) {
        let n = nn(e);
        (v(t, R.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          _(n),
          Ie.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: n },
            sensitive: { error: e },
          }));
      } finally {
        x(!1);
      }
    },
    j = async () => {
      let n = w;
      (x(!0), _(null), v(t, R.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await o.mutateAsync({ enabled: !1 }), e?.(n, !1));
      } catch {
      } finally {
        x(!1);
      }
    };
  return d
    ? (0, Z.jsx)(Z.Fragment, {})
    : (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(ft, {
            label: k,
            description: (0, Z.jsx)(Kt, {
              isCheckingPermissions: S.data == null && S.isFetching,
              permissions: S.data,
              chronicleFeatureEnabled: w,
              onOpenChronicleSetup: () => {
                (_(null), h(!0));
              },
            }),
            control: (0, Z.jsx)(Be, {
              disabled: C,
              tooltipContent: (0, Z.jsx)(W, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, Z.jsx)(`span`, {
                className: l(`inline-flex`, !C && `cursor-not-allowed`),
                tabIndex: C ? void 0 : 0,
                children: (0, Z.jsx)(le, {
                  checked: w,
                  className: C ? void 0 : `pointer-events-none`,
                  disabled: E,
                  onChange: (e) => {
                    if (e) {
                      if (s === !0) {
                        A({ showSetupDialog: !1 });
                        return;
                      }
                      p(!0);
                      return;
                    }
                    j();
                  },
                  ariaLabel: r.formatMessage(
                    {
                      id: `settings.general.experimentalFeatures.chronicle.buttonAriaLabel`,
                      defaultMessage: `Toggle {featureName}`,
                      description: `Aria label for toggling the Chronicle experimental feature`,
                    },
                    { featureName: k },
                  ),
                }),
              }),
            }),
          }),
          (0, Z.jsx)(Vt, {
            open: f,
            onOpenChange: p,
            chronicleDisplayName: k,
            isPending: T,
            onContinue: () => {
              A({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, Z.jsx)(rt, {
            open: m,
            setupState: D,
            onOpenChange: (e) => {
              (e || v(t, R.CHRONICLE_SETUP_COMPLETION_PENDING, !1), h(e));
            },
            onAskCodex: () => {
              (v(t, R.CHRONICLE_SETUP_COMPLETION_PENDING, !1), h(!1), a({ prefillPrompt: it }));
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
    : ((c = (0, Z.jsx)(Ee, {
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
  t[4] === l ? (u = t[5]) : ((u = (0, Z.jsx)(_, { title: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== c || t[7] !== u
    ? ((d = (0, Z.jsxs)(g, { children: [c, u] })), (t[6] = c), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f, h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(W, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (h = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(W, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyConsiderations`,
          defaultMessage: `Be mindful of the following considerations before enabling Chronicle:`,
          description: `Body copy before the considerations list in the Chronicle consent dialog`,
        }),
      })),
      (t[9] = f),
      (t[10] = h))
    : ((f = t[9]), (h = t[10]));
  let v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(W, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyCost`,
          defaultMessage: `<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.`,
          description: `Chronicle consent dialog list item describing rate limit cost`,
          values: { strong: Gt },
        }),
      })),
      (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(W, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyPrivacy`,
          defaultMessage: `<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.`,
          description: `Chronicle consent dialog list item describing privacy risk`,
          values: { strong: Wt },
        }),
      })),
      (t[12] = y))
    : (y = t[12]);
  let b, x;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          v,
          y,
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
      (b = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(W, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading`,
          defaultMessage: `How it works:`,
          description: `Heading before Chronicle consent dialog details about screen capture processing and storage`,
        }),
      })),
      (t[13] = b),
      (t[14] = x))
    : ((b = t[13]), (x = t[14]));
  let S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsxs)(`ul`, {
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
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsxs)(g, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          f,
          h,
          x,
          b,
          S,
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
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === o
    ? (w = t[18])
    : ((w = () => {
        o(!1);
      }),
      (t[17] = o),
      (t[18] = w));
  let T;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(W, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] !== n || t[21] !== w
    ? ((E = (0, Z.jsx)(m, { color: `ghost`, disabled: n, onClick: w, children: T })),
      (t[20] = n),
      (t[21] = w),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(W, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] !== n || t[25] !== a
    ? ((O = (0, Z.jsx)(m, { color: `primary`, loading: n, onClick: a, children: D })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] !== E || t[28] !== O
    ? ((k = (0, Z.jsx)(g, { children: (0, Z.jsxs)(pe, { className: p, children: [E, O] }) })),
      (t[27] = E),
      (t[28] = O),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] !== k || t[31] !== d
    ? ((A = (0, Z.jsxs)(Ye, {
        className: `max-h-[calc(100vh-6rem)] min-h-0`,
        children: [d, C, k],
      })),
      (t[30] = k),
      (t[31] = d),
      (t[32] = A))
    : (A = t[32]);
  let j;
  return (
    t[33] !== o || t[34] !== r || t[35] !== A
      ? ((j = (0, Z.jsx)(Ke, { open: r, onOpenChange: o, size: `default`, children: A })),
        (t[33] = o),
        (t[34] = r),
        (t[35] = A),
        (t[36] = j))
      : (j = t[36]),
    j
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
  let u = c;
  if (!r && u != null) {
    let e;
    return (
      t[3] !== u || t[4] !== i
        ? ((e = (0, Z.jsx)(Yt, { permission: u, onOpenChronicleSetup: i })),
          (t[3] = u),
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
    let u;
    t[11] !== n || t[12] !== r || t[13] !== i
      ? ((u =
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
                          className: l(`font-medium`, en({ isChecking: r, status: n })),
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
        (t[14] = u))
      : (u = t[14]);
    let d;
    return (
      t[15] !== c || t[16] !== u
        ? ((d = (0, Z.jsx)(`span`, {
            className: `inline-flex min-w-0 whitespace-nowrap`,
            children: (0, Z.jsxs)(`span`, { className: `min-w-0 truncate`, children: [c, u] }),
          })),
          (t[15] = c),
          (t[16] = u),
          (t[17] = d))
        : (d = t[17]),
      d
    );
  }
  let d;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(W, {
        id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
        defaultMessage: `Screen Recording`,
        description: `Label for the macOS Screen Recording permission status`,
      })),
      (t[18] = d))
    : (d = t[18]);
  let f;
  return (
    t[19] !== r || t[20] !== s
      ? ((f = (0, Z.jsx)(Zt, { isChecking: r, label: d, status: s })),
        (t[19] = r),
        (t[20] = s),
        (t[21] = f))
      : (f = t[21]),
    f
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
    ? ((a = l(`font-medium`, en({ isChecking: n, status: i }))), (t[0] = n), (t[1] = i), (t[2] = a))
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
    ((X = U()),
      s(),
      ge(),
      a(),
      Te(),
      (rn = t(j(), 1)),
      V(),
      te(),
      F(),
      Ze(),
      c(),
      i(),
      Me(),
      me(),
      E(),
      A(),
      L(),
      r(),
      pt(),
      H(),
      n(),
      zt(),
      ue(),
      tt(),
      st(),
      (Z = u()));
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
    ...et({ isMemoryFeatureEnabled: n, memoryConfig: r }),
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
  e.logProductEvent(Ae, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
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
  (B(), at());
});
function fn() {
  let e = (0, hn.c)(98),
    t = y(se),
    n = Fe(),
    r = O(h),
    { selectedHostId: i } = dt(),
    a = D(i),
    [o, s] = (0, gn.useState)(!1),
    c = lt(),
    { data: l } = ne(ae, i),
    { data: u, isLoading: d } = ne(oe, i),
    f;
  e[0] === u ? (f = e[1]) : ((f = u === void 0 ? [] : u), (e[0] = u), (e[1] = f));
  let p = f,
    v;
  e[2] === c
    ? (v = e[3])
    : ((v = { queryConfig: { enabled: c, refetchOnMount: `always`, refetchOnWindowFocus: !0 } }),
      (e[2] = c),
      (e[3] = v));
  let { data: x } = ke(`chronicle-permissions`, v),
    S = Dt(i),
    C;
  e[4] === i ? (C = e[5]) : ((C = { hostId: i }), (e[4] = i), (e[5] = C));
  let w = k(C),
    T = He(`875176429`),
    E = Nt(),
    A;
  e[6] === i
    ? (A = e[7])
    : ((A = () => ze(`reset-memories-for-host`, { hostId: i })), (e[6] = i), (e[7] = A));
  let j, M;
  e[8] === t
    ? ((j = e[9]), (M = e[10]))
    : ((j = () => {
        (s(!1),
          t
            .get(Ge)
            .success(
              (0, Q.jsx)(W, {
                id: `settings.memory.resetSuccess`,
                defaultMessage: `Memories reset`,
                description: `Toast shown after resetting memories`,
              }),
            ));
      }),
      (M = () => {
        t.get(Ge).danger(
          (0, Q.jsx)(W, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = j),
      (e[10] = M));
  let N;
  e[11] !== A || e[12] !== j || e[13] !== M
    ? ((N = { mutationFn: A, onSuccess: j, onError: M }),
      (e[11] = A),
      (e[12] = j),
      (e[13] = M),
      (e[14] = N))
    : (N = e[14]);
  let F = ee(N),
    te = _e(p, T),
    re;
  e[15] === p ? (re = e[16]) : ((re = p.find(mn)), (e[15] = p), (e[16] = re));
  let ie = re?.enabled === !0,
    ce = l?.config,
    ue;
  e[17] === ce ? (ue = e[18]) : ((ue = b(ce)), (e[17] = ce), (e[18] = ue));
  let I = ue,
    de = l?.config,
    L;
  e[19] === de ? (L = e[20]) : ((L = Ne(de, P)), (e[19] = de), (e[20] = L));
  let fe = L === !0,
    me = d || S.isPending || w.isPending || E.isPending || F.isPending,
    he = ie && I.generateMemories && I.useMemories,
    ge = a.kind === `local`,
    ve = ge && c && x?.chronicleSidecarPresent === !0,
    ye;
  e[21] !== fe || e[22] !== ie || e[23] !== I || e[24] !== ve
    ? ((ye = {
        chronicleResearchPreviewEnabled: fe,
        chronicleResearchPreviewVisible: ve,
        isMemoryFeatureEnabled: ie,
        memoryConfig: I,
      }),
      (e[21] = fe),
      (e[22] = ie),
      (e[23] = I),
      (e[24] = ve),
      (e[25] = ye))
    : (ye = e[25]);
  let R = ye;
  if (!te) return null;
  let be;
  e[26] === R
    ? (be = e[27])
    : ((be = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return sn(R, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = R),
      (e[27] = be));
  let z = be,
    xe;
  e[28] !== S || e[29] !== E || e[30] !== z || e[31] !== ge || e[32] !== r || e[33] !== w
    ? ((xe = (e) => {
        un({
          productLogger: r,
          previousState: z(),
          selectedEnabled: e,
          featureWrite: () => w.mutateAsync({ featureName: Qe, enabled: e }),
          configWrite: () =>
            S.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && ge ? { chronicleDisable: () => E.mutateAsync({ enabled: !1 }) } : {}),
        });
      }),
      (e[28] = S),
      (e[29] = E),
      (e[30] = z),
      (e[31] = ge),
      (e[32] = r),
      (e[33] = w),
      (e[34] = xe))
    : (xe = e[34]);
  let Se = xe,
    Ce;
  e[35] === F
    ? (Ce = e[36])
    : ((Ce = async () => {
        await F.mutateAsync();
      }),
      (e[35] = F),
      (e[36] = Ce));
  let we = Ce,
    Te;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Q.jsx)(W, { ...Y.memory })), (e[37] = Te))
    : (Te = e[37]);
  let Ee;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Q.jsx)(J.Header, {
        title: Te,
        subtitle: (0, Q.jsx)(W, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: pn },
        }),
      })),
      (e[38] = Ee))
    : (Ee = e[38]);
  let De, Ae;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Q.jsx)(W, { ...Y.enableMemories })),
      (Ae = (0, Q.jsx)(W, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = De),
      (e[40] = Ae))
    : ((De = e[39]), (Ae = e[40]));
  let je;
  e[41] === n
    ? (je = e[42])
    : ((je = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = je));
  let Me;
  e[43] !== me || e[44] !== he || e[45] !== Se || e[46] !== je
    ? ((Me = (0, Q.jsx)(ft, {
        label: De,
        description: Ae,
        control: (0, Q.jsx)(le, { checked: he, disabled: me, ariaLabel: je, onChange: Se }),
      })),
      (e[43] = me),
      (e[44] = he),
      (e[45] = Se),
      (e[46] = je),
      (e[47] = Me))
    : (Me = e[47]);
  let B;
  e[48] !== z || e[49] !== r || e[50] !== ve
    ? ((B = ve
        ? (0, Q.jsx)(Bt, {
            onChronicleResearchPreviewToggled: (e, t) => {
              cn({
                productLogger: r,
                previousEnabled: e,
                selectedEnabled: t,
                settingName: `chronicle_research_preview`,
                state: z({ chronicleResearchPreviewEnabled: t }),
              });
            },
          })
        : null),
      (e[48] = z),
      (e[49] = r),
      (e[50] = ve),
      (e[51] = B))
    : (B = e[51]);
  let V, Pe;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(W, { ...Y.skipToolAssistedChats })),
      (Pe = (0, Q.jsx)(W, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = V),
      (e[53] = Pe))
    : ((V = e[52]), (Pe = e[53]));
  let Ie = I.disableOnExternalContext,
    Le = me || !ie,
    Re;
  e[54] === n
    ? (Re = e[55])
    : ((Re = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = Re));
  let Be;
  e[56] !== S || e[57] !== z || e[58] !== I.disableOnExternalContext || e[59] !== r
    ? ((Be = (e) => {
        ln({
          productLogger: r,
          previousEnabled: I.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: z({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            S.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                { keyPath: `memories.no_memories_if_mcp_or_web_search`, value: null },
              ],
            }),
        });
      }),
      (e[56] = S),
      (e[57] = z),
      (e[58] = I.disableOnExternalContext),
      (e[59] = r),
      (e[60] = Be))
    : (Be = e[60]);
  let H;
  e[61] !== I.disableOnExternalContext || e[62] !== Le || e[63] !== Re || e[64] !== Be
    ? ((H = (0, Q.jsx)(ft, {
        label: V,
        description: Pe,
        control: (0, Q.jsx)(le, { checked: Ie, disabled: Le, ariaLabel: Re, onChange: Be }),
      })),
      (e[61] = I.disableOnExternalContext),
      (e[62] = Le),
      (e[63] = Re),
      (e[64] = Be),
      (e[65] = H))
    : (H = e[65]);
  let U, Ve;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(W, { ...Y.resetMemories })),
      (Ve = (0, Q.jsx)(W, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = U),
      (e[67] = Ve))
    : ((U = e[66]), (Ve = e[67]));
  let Ue, We;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = () => {
        s(!0);
      }),
      (We = (0, Q.jsx)(W, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Ue),
      (e[69] = We))
    : ((Ue = e[68]), (We = e[69]));
  let G;
  e[70] === F.isPending
    ? (G = e[71])
    : ((G = (0, Q.jsx)(ft, {
        label: U,
        description: Ve,
        control: (0, Q.jsx)(m, {
          color: `danger`,
          disabled: F.isPending,
          loading: F.isPending,
          onClick: Ue,
          children: We,
        }),
      })),
      (e[70] = F.isPending),
      (e[71] = G));
  let qe;
  e[72] !== Me || e[73] !== B || e[74] !== H || e[75] !== G
    ? ((qe = (0, Q.jsxs)(J, {
        className: `gap-2`,
        children: [
          Ee,
          (0, Q.jsx)(J.Content, { children: (0, Q.jsxs)(St, { children: [Me, B, H, G] }) }),
        ],
      })),
      (e[72] = Me),
      (e[73] = B),
      (e[74] = H),
      (e[75] = G),
      (e[76] = qe))
    : (qe = e[76]);
  let Je;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, Q.jsx)(g, {
        children: (0, Q.jsx)(_, {
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
      (e[77] = Je))
    : (Je = e[77]);
  let Xe, Ze;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = () => {
        s(!1);
      }),
      (Ze = (0, Q.jsx)(W, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = Xe),
      (e[79] = Ze))
    : ((Xe = e[78]), (Ze = e[79]));
  let K;
  e[80] === F.isPending
    ? (K = e[81])
    : ((K = (0, Q.jsx)(m, { color: `ghost`, disabled: F.isPending, onClick: Xe, children: Ze })),
      (e[80] = F.isPending),
      (e[81] = K));
  let q;
  e[82] !== we || e[83] !== r
    ? ((q = () => {
        (r.logProductEvent(Oe, { resetScope: `all_memories` }), we());
      }),
      (e[82] = we),
      (e[83] = r),
      (e[84] = q))
    : (q = e[84]);
  let $e;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (0, Q.jsx)(W, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = $e))
    : ($e = e[85]);
  let et;
  e[86] !== F.isPending || e[87] !== q
    ? ((et = (0, Q.jsx)(m, { color: `danger`, loading: F.isPending, onClick: q, children: $e })),
      (e[86] = F.isPending),
      (e[87] = q),
      (e[88] = et))
    : (et = e[88]);
  let tt;
  e[89] !== K || e[90] !== et
    ? ((tt = (0, Q.jsxs)(Ye, {
        children: [Je, (0, Q.jsx)(g, { children: (0, Q.jsxs)(pe, { children: [K, et] }) })],
      })),
      (e[89] = K),
      (e[90] = et),
      (e[91] = tt))
    : (tt = e[91]);
  let nt;
  e[92] !== o || e[93] !== tt
    ? ((nt = (0, Q.jsx)(Ke, { open: o, onOpenChange: s, size: `compact`, children: tt })),
      (e[92] = o),
      (e[93] = tt),
      (e[94] = nt))
    : (nt = e[94]);
  let rt;
  return (
    e[95] !== qe || e[96] !== nt
      ? ((rt = (0, Q.jsxs)(Q.Fragment, { children: [qe, nt] })),
        (e[95] = qe),
        (e[96] = nt),
        (e[97] = rt))
      : (rt = e[97]),
    rt
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
  return e.name === Qe;
}
var hn,
  gn,
  Q,
  _n = e(() => {
    ((hn = U()),
      B(),
      s(),
      a(),
      Te(),
      (gn = t(j(), 1)),
      V(),
      we(),
      F(),
      Ze(),
      c(),
      De(),
      i(),
      ct(),
      N(),
      Mt(),
      d(),
      f(),
      L(),
      x(),
      r(),
      Et(),
      Ct(),
      ut(),
      pt(),
      xt(),
      he(),
      T(),
      n(),
      zt(),
      an(),
      ue(),
      dn(),
      (Q = u()));
  });
function vn() {
  let e = (0, xn.c)(35),
    t = Fe(),
    n = He(`1444479692`),
    { selectedHostId: r } = dt(),
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
    ? ((_ = (0, $.jsx)(ht, { slug: `personalization` })), (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== g || e[27] !== o
    ? ((v = n
        ? (0, $.jsx)(J, {
            children: (0, $.jsx)(J.Content, {
              children: (0, $.jsx)(St, {
                children: (0, $.jsx)(ft, {
                  label: (0, $.jsx)(W, { ...Y.personality }),
                  description: (0, $.jsx)(W, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, $.jsx)(w, {
                    triggerButton: (0, $.jsx)(gt, {
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
                          Ve.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? Je : void 0,
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
    ? ((b = (0, $.jsx)(ve, { electron: !0, extension: !0, children: (0, $.jsx)(fn, {}) })),
      (e[31] = b))
    : (b = e[31]);
  let x;
  return (
    e[32] !== v || e[33] !== y
      ? ((x = (0, $.jsxs)($e, { title: _, children: [v, y, b] })),
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
    r = y(se),
    i = Fe(),
    a = K(),
    [o, s] = (0, Sn.useState)(null),
    { data: c, error: l, isFetching: u, refetch: d } = ne(wt, n),
    f;
  t[0] !== i || t[1] !== a || t[2] !== r
    ? ((f = (e, t) => {
        (a.setQueryData(ye(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          s(null),
          r
            .get(Ge)
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
        r.get(Ge).danger(
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
  let g = We(`codex-agents-md-save`, h),
    _ = c?.contents ?? ``,
    v = o ?? _,
    b = o != null && o !== _,
    x = c != null,
    S = !x && u,
    C = g.isPending,
    w = l != null && c == null,
    T;
  t[10] !== v || t[11] !== n || t[12] !== b || t[13] !== x || t[14] !== C || t[15] !== g
    ? ((T = () => {
        !x || !b || C || g.mutate({ hostId: n, contents: v });
      }),
      (t[10] = v),
      (t[11] = n),
      (t[12] = b),
      (t[13] = x),
      (t[14] = C),
      (t[15] = g),
      (t[16] = T))
    : (T = t[16]);
  let E = T,
    D = x && b && !C,
    O;
  t[17] === E
    ? (O = t[18])
    : ((O = (e) => {
        (e.preventDefault(), E());
      }),
      (t[17] = E),
      (t[18] = O));
  let k;
  (t[19] !== D || t[20] !== O
    ? ((k = { accelerator: `CmdOrCtrl+S`, enabled: D, onKeyDown: O }),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k))
    : (k = t[21]),
    yt(k));
  let A;
  t[22] === i
    ? (A = t[23])
    : ((A = i.formatMessage({
        id: `settings.personalization.agents.placeholder`,
        defaultMessage: `Add your custom instructions…`,
        description: `Placeholder text for personal agents editor`,
      })),
      (t[22] = i),
      (t[23] = A));
  let j = A,
    M;
  t[24] === i
    ? (M = t[25])
    : ((M = i.formatMessage(Y.customInstructions)), (t[24] = i), (t[25] = M));
  let N = M,
    P;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(W, { ...Y.customInstructions })), (t[26] = P))
    : (P = t[26]);
  let ee;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(J.Header, {
        title: P,
        subtitle: (0, $.jsx)(W, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: bn },
        }),
      })),
      (t[27] = ee))
    : (ee = t[27]);
  let F;
  return (
    t[28] !== _ ||
    t[29] !== N ||
    t[30] !== v ||
    t[31] !== E ||
    t[32] !== b ||
    t[33] !== S ||
    t[34] !== x ||
    t[35] !== C ||
    t[36] !== j ||
    t[37] !== d ||
    t[38] !== w
      ? ((F = (0, $.jsxs)(J, {
          className: `gap-2`,
          children: [
            ee,
            (0, $.jsx)(J.Content, {
              children: w
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
                      (0, $.jsx)(m, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          d();
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
                      S
                        ? (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, $.jsx)(Pe, { className: `icon-xs` }),
                              (0, $.jsx)(W, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, $.jsx)(`textarea`, {
                            "aria-label": N,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !x || C,
                            placeholder: j,
                            rows: 12,
                            value: v,
                            onChange: (e) => {
                              let t = e.target.value;
                              s(t === _ ? null : t);
                            },
                          }),
                      (0, $.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, $.jsx)(m, {
                          color: `primary`,
                          disabled: !b || !x,
                          loading: C,
                          onClick: E,
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
        (t[28] = _),
        (t[29] = N),
        (t[30] = v),
        (t[31] = E),
        (t[32] = b),
        (t[33] = S),
        (t[34] = x),
        (t[35] = C),
        (t[36] = j),
        (t[37] = d),
        (t[38] = w),
        (t[39] = F))
      : (F = t[39]),
    F
  );
}
function bn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: Xe,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
var xn, Sn, $;
e(() => {
  ((xn = U()),
    s(),
    a(),
    (Sn = t(j(), 1)),
    V(),
    F(),
    xe(),
    o(),
    De(),
    C(),
    mt(),
    S(),
    fe(),
    bt(),
    r(),
    Tt(),
    q(),
    Et(),
    Ct(),
    ut(),
    pt(),
    _t(),
    xt(),
    T(),
    n(),
    _n(),
    ($ = u()));
})();
export { vn as PersonalizationSettings };
//# sourceMappingURL=personalization-settings.js.map
