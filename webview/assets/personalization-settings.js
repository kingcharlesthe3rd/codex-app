import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  $i as r,
  $o as i,
  AV as a,
  Ar as o,
  BN as s,
  CV as c,
  Cr as l,
  Db as u,
  Dr as d,
  EB as f,
  Er as p,
  FN as m,
  GN as h,
  GP as g,
  Gr as _,
  HP as v,
  Hf as y,
  IN as b,
  IP as x,
  Iu as S,
  Jo as C,
  Ko as w,
  LP as T,
  Lu as E,
  ME as D,
  Mj as O,
  PR as k,
  Pj as A,
  QN as j,
  Qi as M,
  Qj as N,
  Qo as P,
  RN as F,
  RV as I,
  TB as ee,
  TP as te,
  Tb as ne,
  Tf as L,
  Tr as re,
  U as ie,
  Uf as ae,
  Ur as oe,
  VP as se,
  W as ce,
  WN as R,
  Wz as le,
  XO as ue,
  Xo as de,
  Xz as fe,
  YO as pe,
  Yj as me,
  Yo as he,
  Yr as ge,
  Zo as _e,
  _S as ve,
  aB as ye,
  bB as z,
  cf as B,
  eM as be,
  fB as xe,
  fN as Se,
  gL as Ce,
  gi as V,
  gx as H,
  hN as we,
  hi as Te,
  hx as Ee,
  iF as De,
  jE as Oe,
  jV as ke,
  lM as Ae,
  lp as U,
  mB as je,
  mN as Me,
  n_ as Ne,
  o_ as Pe,
  pN as Fe,
  pS as Ie,
  pf as Le,
  pi as Re,
  qP as ze,
  qj as W,
  qo as Be,
  r_ as Ve,
  uM as He,
  wB as Ue,
  wP as We,
  wb as Ge,
  wr as Ke,
  xV as G,
  yp as K,
  zN as qe,
  zV as q,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Cr as Je,
  Dv as Ye,
  Fm as Xe,
  Lm as Ze,
  Sr as Qe,
  kv as $e,
} from "./app-initial~app-main~onboarding-page.js";
import {
  _ as et,
  b as tt,
  g as nt,
  h as rt,
  it,
  lt as J,
  m as at,
  p as ot,
  rt as st,
  ut as ct,
  v as lt,
  y as ut,
} from "./app-initial~app-main~automations-page.js";
import {
  O as dt,
  T as ft,
  k as pt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  r as mt,
  t as ht,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf.js";
import {
  S as gt,
  d as _t,
} from "./app-initial~app-main~first-run~page~remote-conversation-page~plugin-detail-page~new-thread-~o67ur2ib.js";
import {
  n as vt,
  t as yt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~bnuob1na.js";
import {
  r as bt,
  t as xt,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as St,
  t as Ct,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
var wt,
  Tt = e(() => {
    (T(),
      h(),
      F(),
      (wt = b(x, `codex-agents-md`, (e) => ({
        params: { hostId: e },
        staleTime: R.FIVE_SECONDS,
      }))));
  }),
  Y,
  Et = e(() => {
    (v(),
      (Y = se({
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
  let r = (0, jt.c)(20),
    i = a(),
    { data: o } = Ue(L, e),
    s = ae(),
    l;
  r[0] === e ? (l = r[1]) : ((l = [...B, e]), (r[0] = e), (r[1] = l));
  let u = l,
    d;
  r[2] !== t || r[3] !== e || r[4] !== o?.configWriteTarget?.filePath
    ? ((d = (n) =>
        ue(`batch-write-config-value`, {
          hostId: e,
          edits: t(n).map(At),
          filePath: o?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (r[2] = t),
      (r[3] = e),
      (r[4] = o?.configWriteTarget?.filePath),
      (r[5] = d))
    : (d = r[5]);
  let f;
  r[6] !== t || r[7] !== i || r[8] !== u
    ? ((f = async (e) => {
        let n = t(e);
        await i.cancelQueries({ queryKey: u });
        let r = i.getQueryData(u);
        return (
          i.setQueryData(u, (e) => (e == null ? e : { ...e, config: Ge(e.config, n) })),
          { previousUserConfig: r }
        );
      }),
      (r[6] = t),
      (r[7] = i),
      (r[8] = u),
      (r[9] = f))
    : (f = r[9]);
  let p;
  r[10] !== i || r[11] !== u
    ? ((p = (e, t, r) => {
        (n.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          i.setQueryData(u, r?.previousUserConfig));
      }),
      (r[10] = i),
      (r[11] = u),
      (r[12] = p))
    : (p = r[12]);
  let m;
  r[13] === s
    ? (m = r[14])
    : ((m = async () => {
        await Promise.all([s(B), s([`user-saved-config`])]);
      }),
      (r[13] = s),
      (r[14] = m));
  let h;
  return (
    r[15] !== d || r[16] !== f || r[17] !== p || r[18] !== m
      ? ((h = { mutationFn: d, onMutate: f, onError: p, onSettled: m }),
        (r[15] = d),
        (r[16] = f),
        (r[17] = p),
        (r[18] = m),
        (r[19] = h))
      : (h = r[19]),
    c(h)
  );
}
function At(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var jt,
  Mt = e(() => {
    ((jt = I()), G(), z(), pe(), Le(), y(), j(), u());
  });
function Nt() {
  let e = (0, It.c)(16),
    t = a(),
    r = f(U),
    { data: i } = Ue(L, r),
    o = ae(),
    s;
  e[0] === r ? (s = e[1]) : ((s = [...B, r]), (e[0] = r), (e[1] = s));
  let l = s,
    u;
  e[2] !== r || e[3] !== i?.configWriteTarget?.filePath
    ? ((u = (e) => {
        let { enabled: t } = e;
        return ue(`batch-write-config-value`, {
          hostId: r,
          edits: [{ keyPath: Lt, value: t, mergeStrategy: `upsert` }],
          filePath: i?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = r),
      (e[3] = i?.configWriteTarget?.filePath),
      (e[4] = u))
    : (u = e[4]);
  let d, p;
  e[5] !== t || e[6] !== l
    ? ((d = async (e) => {
        let { enabled: n } = e;
        await t.cancelQueries({ queryKey: l });
        let r = t.getQueryData(l);
        return (
          t.setQueryData(l, (e) => (e == null ? e : { ...e, config: Pt(e.config, n) })),
          { previousUserConfig: r }
        );
      }),
      (p = (e, r, i) => {
        (n.error(`Failed to update Chronicle config`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          t.setQueryData(l, i?.previousUserConfig));
      }),
      (e[5] = t),
      (e[6] = l),
      (e[7] = d),
      (e[8] = p))
    : ((d = e[7]), (p = e[8]));
  let m;
  e[9] === o
    ? (m = e[10])
    : ((m = async () => {
        await Promise.all([o(B), o([`user-saved-config`])]);
      }),
      (e[9] = o),
      (e[10] = m));
  let h;
  return (
    e[11] !== u || e[12] !== d || e[13] !== p || e[14] !== m
      ? ((h = { mutationFn: u, onMutate: d, onError: p, onSettled: m }),
        (e[11] = u),
        (e[12] = d),
        (e[13] = p),
        (e[14] = m),
        (e[15] = h))
      : (h = e[15]),
    c(h)
  );
}
function Pt(e, t) {
  return Object.assign(structuredClone(e), { features: { ...Ft(e.features, he, t) } });
}
function Ft(e, t, n) {
  let r = Rt.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var It,
  Lt,
  Rt,
  zt = e(() => {
    ((It = I()),
      G(),
      z(),
      De(),
      fe(),
      K(),
      pe(),
      Le(),
      y(),
      j(),
      de(),
      (Lt = Ce(he)),
      (Rt = xe(je(), ye())));
  });
function Bt({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = ee(x),
    r = f(U),
    i = ze(),
    o = a(),
    s = mt(),
    c = Nt(),
    { data: l, isLoading: u } = E(k.CHRONICLE_CONSENT_ACCEPTED),
    { data: d, isLoading: p } = Ue(L, r),
    [h, _] = (0, rn.useState)(!1),
    [v, y] = (0, rn.useState)(!1),
    [b, S] = (0, rn.useState)(null),
    [C, w] = (0, rn.useState)(!1),
    T = qe(`chronicle-permissions`, {
      queryConfig: { intervalMs: 1e3, refetchIntervalInBackground: !0, refetchOnMount: `always` },
    }),
    D = le(d?.config, _e) === !0,
    O = le(d?.config, he) === !0,
    A = c.isPending || C || u,
    j = A || !D,
    M = ot({
      accessibilityStatus: T.data?.accessibility,
      errorMessage: b,
      isSidecarPresent: T.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: C,
      processState: T.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: T.data?.screenRecording,
    }),
    P = i.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, rn.useEffect)(() => {
    v && rt(M.kind) && H(t, k.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [v, t, M.kind]);
  let F = async ({ rememberConsentAccepted: r, showSetupDialog: i }) => {
      let a = O;
      (w(!0), S(null), _(!1), y(i));
      try {
        (r === !0 && (await H(t, k.CHRONICLE_CONSENT_ACCEPTED, !0)),
          i || H(t, k.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await c.mutateAsync({ enabled: !0 }),
          e?.(a, !0),
          await o.invalidateQueries({ queryKey: m(`chronicle-permissions`) }));
      } catch (e) {
        let r = nn(e);
        (H(t, k.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          S(r),
          n.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: r },
            sensitive: { error: e },
          }));
      } finally {
        w(!1);
      }
    },
    I = async () => {
      let n = O;
      (w(!0), S(null), H(t, k.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await c.mutateAsync({ enabled: !1 }), e?.(n, !1));
      } catch {
      } finally {
        w(!1);
      }
    };
  return p
    ? (0, Z.jsx)(Z.Fragment, {})
    : (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(Qe, {
            label: P,
            description: (0, Z.jsx)(Kt, {
              isCheckingPermissions: T.data == null && T.isFetching,
              permissions: T.data,
              chronicleFeatureEnabled: O,
              onOpenChronicleSetup: () => {
                (S(null), y(!0));
              },
            }),
            control: (0, Z.jsx)(N, {
              disabled: D,
              tooltipContent: (0, Z.jsx)(g, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, Z.jsx)(`span`, {
                className: We(`inline-flex`, !D && `cursor-not-allowed`),
                tabIndex: D ? void 0 : 0,
                children: (0, Z.jsx)(ie, {
                  checked: O,
                  className: D ? void 0 : `pointer-events-none`,
                  disabled: j,
                  onChange: (e) => {
                    if (e) {
                      if (l === !0) {
                        F({ showSetupDialog: !1 });
                        return;
                      }
                      _(!0);
                      return;
                    }
                    I();
                  },
                  ariaLabel: i.formatMessage(
                    {
                      id: `settings.general.experimentalFeatures.chronicle.buttonAriaLabel`,
                      defaultMessage: `Toggle {featureName}`,
                      description: `Aria label for toggling the Chronicle experimental feature`,
                    },
                    { featureName: P },
                  ),
                }),
              }),
            }),
          }),
          (0, Z.jsx)(Vt, {
            open: h,
            onOpenChange: _,
            chronicleDisplayName: P,
            isPending: A,
            onContinue: () => {
              F({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, Z.jsx)(et, {
            open: v,
            setupState: M,
            onOpenChange: (e) => {
              (e || H(t, k.CHRONICLE_SETUP_COMPLETION_PENDING, !1), y(e));
            },
            onAskCodex: () => {
              (H(t, k.CHRONICLE_SETUP_COMPLETION_PENDING, !1), y(!1), s({ prefillPrompt: nt }));
            },
          }),
        ],
      });
}
function Vt(e) {
  let t = (0, X.c)(37),
    { isPending: n, open: r, chronicleDisplayName: i, onContinue: a, onOpenChange: o } = e,
    s = ze(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, Z.jsx)(Te, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, { className: `sr-only`, children: i }),
      })),
      (t[0] = i),
      (t[1] = c));
  let u;
  t[2] === s
    ? (u = t[3])
    : ((u = s.formatMessage({
        id: `settings.general.experimentalFeatures.chronicle.consentTitle`,
        defaultMessage: `Enable Chronicle research preview`,
        description: `Title for the Chronicle consent dialog`,
      })),
      (t[2] = s),
      (t[3] = u));
  let f;
  t[4] === u ? (f = t[5]) : ((f = (0, Z.jsx)(p, { title: u })), (t[4] = u), (t[5] = f));
  let m;
  t[6] !== c || t[7] !== f
    ? ((m = (0, Z.jsxs)(d, { children: [c, f] })), (t[6] = c), (t[7] = f), (t[8] = m))
    : (m = t[8]);
  let h, _;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(g, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (_ = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(g, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyConsiderations`,
          defaultMessage: `Be mindful of the following considerations before enabling Chronicle:`,
          description: `Body copy before the considerations list in the Chronicle consent dialog`,
        }),
      })),
      (t[9] = h),
      (t[10] = _))
    : ((h = t[9]), (_ = t[10]));
  let v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(g, {
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
        children: (0, Z.jsx)(g, {
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
            children: (0, Z.jsx)(g, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection`,
              defaultMessage: `<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.`,
              description: `Chronicle consent dialog list item describing prompt injection risk`,
              values: { strong: Ut },
            }),
          }),
        ],
      })),
      (b = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(g, {
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
            children: (0, Z.jsx)(g, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing`,
              defaultMessage: `To generate memories, the screen captures are processed on our servers and then deleted.`,
              description: `Chronicle consent dialog list item describing server processing for generating memories`,
            }),
          }),
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(g, {
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
    ? ((C = (0, Z.jsxs)(d, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          h,
          _,
          x,
          b,
          S,
          (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(g, {
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
    ? ((T = (0, Z.jsx)(g, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] !== n || t[21] !== w
    ? ((E = (0, Z.jsx)(Se, { color: `ghost`, disabled: n, onClick: w, children: T })),
      (t[20] = n),
      (t[21] = w),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(g, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] !== n || t[25] !== a
    ? ((O = (0, Z.jsx)(Se, { color: `primary`, loading: n, onClick: a, children: D })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] !== E || t[28] !== O
    ? ((k = (0, Z.jsx)(d, { children: (0, Z.jsxs)(re, { className: l, children: [E, O] }) })),
      (t[27] = E),
      (t[28] = O),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] !== k || t[31] !== m
    ? ((A = (0, Z.jsxs)(Ke, {
        className: `max-h-[calc(100vh-6rem)] min-h-0`,
        children: [m, C, k],
      })),
      (t[30] = k),
      (t[31] = m),
      (t[32] = A))
    : (A = t[32]);
  let j;
  return (
    t[33] !== o || t[34] !== r || t[35] !== A
      ? ((j = (0, Z.jsx)(Re, { open: r, onOpenChange: o, size: `default`, children: A })),
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
        children: (0, Z.jsx)(g, {
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
      ? ((c = (0, Z.jsx)(g, {
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
                    children: (0, Z.jsx)(g, {
                      id: `settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility`,
                      defaultMessage: `Accessibility: {status} (open setup)`,
                      description: `Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted`,
                      values: {
                        status: (0, Z.jsx)(`span`, {
                          className: We(`font-medium`, en({ isChecking: r, status: n })),
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
    ? ((u = (0, Z.jsx)(g, {
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
        children: (0, Z.jsx)(g, {
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
        children: (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
    ? ((a = We(`font-medium`, en({ isChecking: n, status: i }))),
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
            children: (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
        ? ((e = (0, Z.jsx)(g, {
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
        ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
          ? ((e = (0, Z.jsx)(g, {
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
    ((X = I()),
      G(),
      te(),
      z(),
      De(),
      (rn = t(q(), 1)),
      v(),
      K(),
      Fe(),
      V(),
      o(),
      ce(),
      be(),
      Ee(),
      S(),
      ht(),
      Le(),
      T(),
      Je(),
      j(),
      F(),
      zt(),
      de(),
      lt(),
      at(),
      (Z = ke()));
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
    ...st({ isMemoryFeatureEnabled: n, memoryConfig: r }),
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
  e.logProductEvent(Ve, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
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
  (Pe(), it());
});
function fn() {
  let e = (0, hn.c)(98),
    t = ee(x),
    n = ze(),
    r = f(ve),
    { selectedHostId: a } = Ze(),
    o = D(a),
    [s, l] = (0, gn.useState)(!1),
    u = tt(),
    { data: m } = Ue(L, a),
    { data: h, isLoading: _ } = Ue(w, a),
    v;
  e[0] === h ? (v = e[1]) : ((v = h === void 0 ? [] : h), (e[0] = h), (e[1] = v));
  let y = v,
    b;
  e[2] === u
    ? (b = e[3])
    : ((b = { queryConfig: { enabled: u, refetchOnMount: `always`, refetchOnWindowFocus: !0 } }),
      (e[2] = u),
      (e[3] = b));
  let { data: S } = qe(`chronicle-permissions`, b),
    T = Dt(a),
    E;
  e[4] === a ? (E = e[5]) : ((E = { hostId: a }), (e[4] = a), (e[5] = E));
  let O = C(E),
    k = A(`875176429`),
    j = Nt(),
    M;
  e[6] === a
    ? (M = e[7])
    : ((M = () => ue(`reset-memories-for-host`, { hostId: a })), (e[6] = a), (e[7] = M));
  let N, P;
  e[8] === t
    ? ((N = e[9]), (P = e[10]))
    : ((N = () => {
        (l(!1),
          t
            .get(me)
            .success(
              (0, Q.jsx)(g, {
                id: `settings.memory.resetSuccess`,
                defaultMessage: `Memories reset`,
                description: `Toast shown after resetting memories`,
              }),
            ));
      }),
      (P = () => {
        t.get(me).danger(
          (0, Q.jsx)(g, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = N),
      (e[10] = P));
  let F;
  e[11] !== M || e[12] !== N || e[13] !== P
    ? ((F = { mutationFn: M, onSuccess: N, onError: P }),
      (e[11] = M),
      (e[12] = N),
      (e[13] = P),
      (e[14] = F))
    : (F = e[14]);
  let I = c(F),
    te = i(y, k),
    ae;
  e[15] === y ? (ae = e[16]) : ((ae = y.find(mn)), (e[15] = y), (e[16] = ae));
  let oe = ae?.enabled === !0,
    se = m?.config,
    ce;
  e[17] === se ? (ce = e[18]) : ((ce = ne(se)), (e[17] = se), (e[18] = ce));
  let R = ce,
    de = m?.config,
    fe;
  e[19] === de ? (fe = e[20]) : ((fe = le(de, he)), (e[19] = de), (e[20] = fe));
  let pe = fe === !0,
    ge = _ || T.isPending || O.isPending || j.isPending || I.isPending,
    ye = oe && R.generateMemories && R.useMemories,
    z = o.kind === `local`,
    B = z && u && S?.chronicleSidecarPresent === !0,
    be;
  e[21] !== pe || e[22] !== oe || e[23] !== R || e[24] !== B
    ? ((be = {
        chronicleResearchPreviewEnabled: pe,
        chronicleResearchPreviewVisible: B,
        isMemoryFeatureEnabled: oe,
        memoryConfig: R,
      }),
      (e[21] = pe),
      (e[22] = oe),
      (e[23] = R),
      (e[24] = B),
      (e[25] = be))
    : (be = e[25]);
  let xe = be;
  if (!te) return null;
  let Ce;
  e[26] === xe
    ? (Ce = e[27])
    : ((Ce = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return sn(xe, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = xe),
      (e[27] = Ce));
  let V = Ce,
    H;
  e[28] !== T || e[29] !== j || e[30] !== V || e[31] !== z || e[32] !== r || e[33] !== O
    ? ((H = (e) => {
        un({
          productLogger: r,
          previousState: V(),
          selectedEnabled: e,
          featureWrite: () => O.mutateAsync({ featureName: _e, enabled: e }),
          configWrite: () =>
            T.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && z ? { chronicleDisable: () => j.mutateAsync({ enabled: !1 }) } : {}),
        });
      }),
      (e[28] = T),
      (e[29] = j),
      (e[30] = V),
      (e[31] = z),
      (e[32] = r),
      (e[33] = O),
      (e[34] = H))
    : (H = e[34]);
  let we = H,
    Te;
  e[35] === I
    ? (Te = e[36])
    : ((Te = async () => {
        await I.mutateAsync();
      }),
      (e[35] = I),
      (e[36] = Te));
  let Ee = Te,
    De;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Q.jsx)(g, { ...Y.memory })), (e[37] = De))
    : (De = e[37]);
  let Oe;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(J.Header, {
        title: De,
        subtitle: (0, Q.jsx)(g, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: pn },
        }),
      })),
      (e[38] = Oe))
    : (Oe = e[38]);
  let ke, Ae;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, Q.jsx)(g, { ...Y.enableMemories })),
      (Ae = (0, Q.jsx)(g, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = ke),
      (e[40] = Ae))
    : ((ke = e[39]), (Ae = e[40]));
  let U;
  e[41] === n
    ? (U = e[42])
    : ((U = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = U));
  let je;
  e[43] !== ge || e[44] !== ye || e[45] !== we || e[46] !== U
    ? ((je = (0, Q.jsx)(Qe, {
        label: ke,
        description: Ae,
        control: (0, Q.jsx)(ie, { checked: ye, disabled: ge, ariaLabel: U, onChange: we }),
      })),
      (e[43] = ge),
      (e[44] = ye),
      (e[45] = we),
      (e[46] = U),
      (e[47] = je))
    : (je = e[47]);
  let Me;
  e[48] !== V || e[49] !== r || e[50] !== B
    ? ((Me = B
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
      (e[50] = B),
      (e[51] = Me))
    : (Me = e[51]);
  let Pe, Fe;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (0, Q.jsx)(g, { ...Y.skipToolAssistedChats })),
      (Fe = (0, Q.jsx)(g, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = Pe),
      (e[53] = Fe))
    : ((Pe = e[52]), (Fe = e[53]));
  let Ie = R.disableOnExternalContext,
    Le = ge || !oe,
    W;
  e[54] === n
    ? (W = e[55])
    : ((W = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = W));
  let Be;
  e[56] !== T || e[57] !== V || e[58] !== R.disableOnExternalContext || e[59] !== r
    ? ((Be = (e) => {
        ln({
          productLogger: r,
          previousEnabled: R.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: V({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            T.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                { keyPath: `memories.no_memories_if_mcp_or_web_search`, value: null },
              ],
            }),
        });
      }),
      (e[56] = T),
      (e[57] = V),
      (e[58] = R.disableOnExternalContext),
      (e[59] = r),
      (e[60] = Be))
    : (Be = e[60]);
  let Ve;
  e[61] !== R.disableOnExternalContext || e[62] !== Le || e[63] !== W || e[64] !== Be
    ? ((Ve = (0, Q.jsx)(Qe, {
        label: Pe,
        description: Fe,
        control: (0, Q.jsx)(ie, { checked: Ie, disabled: Le, ariaLabel: W, onChange: Be }),
      })),
      (e[61] = R.disableOnExternalContext),
      (e[62] = Le),
      (e[63] = W),
      (e[64] = Be),
      (e[65] = Ve))
    : (Ve = e[65]);
  let He, We;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, Q.jsx)(g, { ...Y.resetMemories })),
      (We = (0, Q.jsx)(g, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = He),
      (e[67] = We))
    : ((He = e[66]), (We = e[67]));
  let Ge, G;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = () => {
        l(!0);
      }),
      (G = (0, Q.jsx)(g, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Ge),
      (e[69] = G))
    : ((Ge = e[68]), (G = e[69]));
  let K;
  e[70] === I.isPending
    ? (K = e[71])
    : ((K = (0, Q.jsx)(Qe, {
        label: He,
        description: We,
        control: (0, Q.jsx)(Se, {
          color: `danger`,
          disabled: I.isPending,
          loading: I.isPending,
          onClick: Ge,
          children: G,
        }),
      })),
      (e[70] = I.isPending),
      (e[71] = K));
  let q;
  e[72] !== je || e[73] !== Me || e[74] !== Ve || e[75] !== K
    ? ((q = (0, Q.jsxs)(J, {
        className: `gap-2`,
        children: [
          Oe,
          (0, Q.jsx)(J.Content, { children: (0, Q.jsxs)(Ct, { children: [je, Me, Ve, K] }) }),
        ],
      })),
      (e[72] = je),
      (e[73] = Me),
      (e[74] = Ve),
      (e[75] = K),
      (e[76] = q))
    : (q = e[76]);
  let Je;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, Q.jsx)(d, {
        children: (0, Q.jsx)(p, {
          title: (0, Q.jsx)(g, {
            id: `settings.memory.resetDialogTitle`,
            defaultMessage: `Reset all memories?`,
            description: `Title for reset memories confirmation dialog`,
          }),
          subtitle: (0, Q.jsx)(g, {
            id: `settings.memory.resetDialogSubtitle`,
            defaultMessage: `This deletes all Codex memories.`,
            description: `Subtitle for reset memories confirmation dialog`,
          }),
        }),
      })),
      (e[77] = Je))
    : (Je = e[77]);
  let Ye, Xe;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = () => {
        l(!1);
      }),
      (Xe = (0, Q.jsx)(g, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = Ye),
      (e[79] = Xe))
    : ((Ye = e[78]), (Xe = e[79]));
  let $e;
  e[80] === I.isPending
    ? ($e = e[81])
    : (($e = (0, Q.jsx)(Se, { color: `ghost`, disabled: I.isPending, onClick: Ye, children: Xe })),
      (e[80] = I.isPending),
      (e[81] = $e));
  let et;
  e[82] !== Ee || e[83] !== r
    ? ((et = () => {
        (r.logProductEvent(Ne, { resetScope: `all_memories` }), Ee());
      }),
      (e[82] = Ee),
      (e[83] = r),
      (e[84] = et))
    : (et = e[84]);
  let nt;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (0, Q.jsx)(g, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = nt))
    : (nt = e[85]);
  let rt;
  e[86] !== I.isPending || e[87] !== et
    ? ((rt = (0, Q.jsx)(Se, { color: `danger`, loading: I.isPending, onClick: et, children: nt })),
      (e[86] = I.isPending),
      (e[87] = et),
      (e[88] = rt))
    : (rt = e[88]);
  let it;
  e[89] !== $e || e[90] !== rt
    ? ((it = (0, Q.jsxs)(Ke, {
        children: [Je, (0, Q.jsx)(d, { children: (0, Q.jsxs)(re, { children: [$e, rt] }) })],
      })),
      (e[89] = $e),
      (e[90] = rt),
      (e[91] = it))
    : (it = e[91]);
  let at;
  e[92] !== s || e[93] !== it
    ? ((at = (0, Q.jsx)(Re, { open: s, onOpenChange: l, size: `compact`, children: it })),
      (e[92] = s),
      (e[93] = it),
      (e[94] = at))
    : (at = e[94]);
  let ot;
  return (
    e[95] !== q || e[96] !== at
      ? ((ot = (0, Q.jsxs)(Q.Fragment, { children: [q, at] })),
        (e[95] = q),
        (e[96] = at),
        (e[97] = ot))
      : (ot = e[97]),
    ot
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
  return e.name === _e;
}
var hn,
  gn,
  Q,
  _n = e(() => {
    ((hn = I()),
      Pe(),
      G(),
      z(),
      De(),
      (gn = t(q(), 1)),
      v(),
      pe(),
      Fe(),
      V(),
      o(),
      W(),
      ce(),
      ut(),
      u(),
      Mt(),
      P(),
      Ie(),
      Le(),
      Be(),
      T(),
      Et(),
      ct(),
      Xe(),
      Je(),
      St(),
      Oe(),
      O(),
      F(),
      zt(),
      an(),
      de(),
      dn(),
      (Q = ke()));
  });
function vn() {
  let e = (0, xn.c)(35),
    t = ze(),
    n = A(`1444479692`),
    { selectedHostId: r } = Ze(),
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
  let v = h,
    y;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(dt, { slug: `personalization` })), (e[22] = y))
    : (y = e[22]);
  let b;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== v || e[27] !== o
    ? ((b = n
        ? (0, $.jsx)(J, {
            children: (0, $.jsx)(J.Content, {
              children: (0, $.jsx)(Ct, {
                children: (0, $.jsx)(Qe, {
                  label: (0, $.jsx)(g, { ...Y.personality }),
                  description: (0, $.jsx)(g, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, $.jsx)(oe, {
                    triggerButton: (0, $.jsx)(ft, {
                      children: (0, $.jsx)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: v.label,
                      }),
                    }),
                    align: `end`,
                    children: (0, $.jsx)(`div`, {
                      className: `w-[260px] max-w-xs space-y-1`,
                      children: m.map((e) =>
                        (0, $.jsx)(
                          _.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? Ae : void 0,
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
      (e[26] = v),
      (e[27] = o),
      (e[28] = b))
    : (b = e[28]);
  let x;
  e[29] === r ? (x = e[30]) : ((x = (0, $.jsx)(yn, { hostId: r }, r)), (e[29] = r), (e[30] = x));
  let S;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(M, { electron: !0, extension: !0, children: (0, $.jsx)(fn, {}) })),
      (e[31] = S))
    : (S = e[31]);
  let C;
  return (
    e[32] !== b || e[33] !== x
      ? ((C = (0, $.jsxs)(xt, { title: y, children: [b, x, S] })),
        (e[32] = b),
        (e[33] = x),
        (e[34] = C))
      : (C = e[34]),
    C
  );
}
function yn(e) {
  let t = (0, xn.c)(40),
    { hostId: n } = e,
    r = ee(x),
    i = ze(),
    o = a(),
    [c, l] = (0, Sn.useState)(null),
    { data: u, error: d, isFetching: f, refetch: p } = Ue(wt, n),
    h;
  t[0] !== i || t[1] !== o || t[2] !== r
    ? ((h = (e, t) => {
        (o.setQueryData(m(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          l(null),
          r
            .get(me)
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
  let _;
  t[4] !== i || t[5] !== r
    ? ((_ = () => {
        r.get(me).danger(
          i.formatMessage({
            id: `settings.personalization.agents.save.error`,
            defaultMessage: `Unable to save agents.md`,
            description: `Toast shown when agents.md save fails`,
          }),
        );
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] !== h || t[8] !== _
    ? ((v = { onSuccess: h, onError: _ }), (t[7] = h), (t[8] = _), (t[9] = v))
    : (v = t[9]);
  let y = s(`codex-agents-md-save`, v),
    b = u?.contents ?? ``,
    S = c ?? b,
    C = c != null && c !== b,
    w = u != null,
    T = !w && f,
    E = y.isPending,
    D = d != null && u == null,
    O;
  t[10] !== S || t[11] !== n || t[12] !== C || t[13] !== w || t[14] !== E || t[15] !== y
    ? ((O = () => {
        !w || !C || E || y.mutate({ hostId: n, contents: S });
      }),
      (t[10] = S),
      (t[11] = n),
      (t[12] = C),
      (t[13] = w),
      (t[14] = E),
      (t[15] = y),
      (t[16] = O))
    : (O = t[16]);
  let k = O,
    A = w && C && !E,
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
    $e(M));
  let N;
  t[22] === i
    ? (N = t[23])
    : ((N = i.formatMessage({
        id: `settings.personalization.agents.placeholder`,
        defaultMessage: `Add your custom instructions…`,
        description: `Placeholder text for personal agents editor`,
      })),
      (t[22] = i),
      (t[23] = N));
  let P = N,
    F;
  t[24] === i
    ? (F = t[25])
    : ((F = i.formatMessage(Y.customInstructions)), (t[24] = i), (t[25] = F));
  let I = F,
    te;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(g, { ...Y.customInstructions })), (t[26] = te))
    : (te = t[26]);
  let ne;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(J.Header, {
        title: te,
        subtitle: (0, $.jsx)(g, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: bn },
        }),
      })),
      (t[27] = ne))
    : (ne = t[27]);
  let L;
  return (
    t[28] !== b ||
    t[29] !== I ||
    t[30] !== S ||
    t[31] !== k ||
    t[32] !== C ||
    t[33] !== T ||
    t[34] !== w ||
    t[35] !== E ||
    t[36] !== P ||
    t[37] !== p ||
    t[38] !== D
      ? ((L = (0, $.jsxs)(J, {
          className: `gap-2`,
          children: [
            ne,
            (0, $.jsx)(J.Content, {
              children: D
                ? (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, $.jsx)(g, {
                          id: `settings.personalization.agents.loadError`,
                          defaultMessage: `Unable to load agents.md.`,
                          description: `Error message shown when agents.md fails to load`,
                        }),
                      }),
                      (0, $.jsx)(Se, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          p();
                        },
                        size: `toolbar`,
                        children: (0, $.jsx)(g, {
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
                      T
                        ? (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, $.jsx)(Me, { className: `icon-xs` }),
                              (0, $.jsx)(g, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, $.jsx)(`textarea`, {
                            "aria-label": I,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !w || E,
                            placeholder: P,
                            rows: 12,
                            value: S,
                            onChange: (e) => {
                              let t = e.target.value;
                              l(t === b ? null : t);
                            },
                          }),
                      (0, $.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, $.jsx)(Se, {
                          color: `primary`,
                          disabled: !C || !w,
                          loading: E,
                          onClick: k,
                          size: `toolbar`,
                          children: (0, $.jsx)(g, {
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
        (t[29] = I),
        (t[30] = S),
        (t[31] = k),
        (t[32] = C),
        (t[33] = T),
        (t[34] = w),
        (t[35] = E),
        (t[36] = P),
        (t[37] = p),
        (t[38] = D),
        (t[39] = L))
      : (L = t[39]),
    L
  );
}
function bn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: _t,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
var xn, Sn, $;
e(() => {
  ((xn = I()),
    G(),
    z(),
    (Sn = t(q(), 1)),
    v(),
    Fe(),
    ge(),
    we(),
    W(),
    r(),
    yt(),
    gt(),
    He(),
    Ye(),
    T(),
    Tt(),
    bt(),
    Et(),
    ct(),
    Xe(),
    Je(),
    pt(),
    St(),
    O(),
    F(),
    _n(),
    ($ = ke()));
})();
export { vn as PersonalizationSettings };
//# sourceMappingURL=personalization-settings.js.map
