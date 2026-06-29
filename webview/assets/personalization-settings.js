import { s as e } from "./chunk-Bj-mKKzh.js";
import { $n as t, Hr as n, Ht as r, Zi as i, aa as a, sa as o } from "./src-2.js";
import {
  Ji as s,
  Uo as c,
  Yi as l,
  fs as u,
  sa as d,
  v as f,
} from "./app-server-manager-signals.js";
import { n as p, t as m } from "./jsx-runtime.js";
import { t as h } from "./clsx.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  A as g,
  F as _,
  I as v,
  P as y,
  _ as b,
  g as x,
  h as S,
  i as C,
  lt as w,
  o as T,
  r as E,
  s as D,
  u as O,
} from "./vscode-api.js";
import { c as ee, o as k } from "./lib-2.js";
import { v as A } from "./persisted-signal-CweW-bgN.js";
import "./rpc-1.js";
import { o as j } from "./statsig.js";
import "./request.js";
import {
  a as M,
  c as N,
  i as te,
  l as P,
  n as F,
  o as I,
  r as L,
  t as R,
} from "./chronicle-setup-state.js";
import { t as z } from "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import { C as B, s as ne } from "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import { t as re } from "./use-global-state.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import { a as ie, i as ae, n as oe, o as se, r as ce } from "./experimental-features-queries.js";
import { r as le } from "./toast-signal.js";
import "./window-zoom-context.js";
import { t as ue } from "./tooltip.js";
import { t as V } from "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import { t as de } from "./spinner.js";
import "./remote-projects.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./x.js";
import "./projectless-thread.js";
import { t as fe } from "./with-window.js";
import {
  a as pe,
  d as H,
  i as me,
  l as he,
  n as ge,
  r as _e,
  t as ve,
} from "./dialog-layout.js";
import "./local-projects.js";
import { t as ye } from "./check-md.js";
import "./chevron-right.js";
import "./initial-route-atom.js";
import "./select-project.js";
import { n as be } from "./use-start-new-conversation.js";
import "./electron-menu-shortcuts.js";
import "./_defineProperty.js";
import { u as xe } from "./links.js";
import "./search-C0nm-Ej1.js";
import { r as Se, t as Ce } from "./dropdown.js";
import "./chevron.js";
import "./sortBy.js";
import "./use-connected-remote-connections.js";
import { t as we } from "./toggle.js";
import { i as U, t as Te } from "./settings-shared.js";
import { t as Ee } from "./use-personality.js";
import { t as De } from "./use-hotkey.js";
import { t as Oe } from "./settings-host-context.js";
import { t as W } from "./settings-content-layout.js";
import { n as ke } from "./settings-row.js";
import { n as Ae, t as G } from "./settings-group.js";
import { i as je, r as Me } from "./personalization-settings.search.js";
var K = w(),
  q = e(p(), 1),
  Ne = C(S, `codex-agents-md`, (e) => ({ params: { hostId: e }, staleTime: O.FIVE_SECONDS }));
function Pe(e) {
  return Ie(e, Fe);
}
function Fe(e) {
  let { edits: t } = e;
  return t;
}
function Ie(e, t) {
  let n = (0, K.c)(20),
    r = g(),
    { data: i } = y(B, e),
    a = z(),
    o;
  n[0] === e ? (o = n[1]) : ((o = [...ne, e]), (n[0] = e), (n[1] = o));
  let c = o,
    l;
  n[2] !== t || n[3] !== e || n[4] !== i?.configWriteTarget?.filePath
    ? ((l = (n) =>
        u(`batch-write-config-value`, {
          hostId: e,
          edits: t(n).map(Le),
          filePath: i?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (n[2] = t),
      (n[3] = e),
      (n[4] = i?.configWriteTarget?.filePath),
      (n[5] = l))
    : (l = n[5]);
  let d;
  n[6] !== t || n[7] !== r || n[8] !== c
    ? ((d = async (e) => {
        let n = t(e);
        await r.cancelQueries({ queryKey: c });
        let i = r.getQueryData(c);
        return (
          r.setQueryData(c, (e) => (e == null ? e : { ...e, config: s(e.config, n) })),
          { previousUserConfig: i }
        );
      }),
      (n[6] = t),
      (n[7] = r),
      (n[8] = c),
      (n[9] = d))
    : (d = n[9]);
  let f;
  n[10] !== r || n[11] !== c
    ? ((f = (e, t, n) => {
        (x.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          r.setQueryData(c, n?.previousUserConfig));
      }),
      (n[10] = r),
      (n[11] = c),
      (n[12] = f))
    : (f = n[12]);
  let p;
  n[13] === a
    ? (p = n[14])
    : ((p = async () => {
        await Promise.all([a(ne), a([`user-saved-config`])]);
      }),
      (n[13] = a),
      (n[14] = p));
  let m;
  return (
    n[15] !== l || n[16] !== d || n[17] !== f || n[18] !== p
      ? ((m = { mutationFn: l, onMutate: d, onError: f, onSettled: p }),
        (n[15] = l),
        (n[16] = d),
        (n[17] = f),
        (n[18] = p),
        (n[19] = m))
      : (m = n[19]),
    b(m)
  );
}
function Le(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var Re = t(ae),
  ze = a(o(), i());
function Be() {
  let e = (0, K.c)(16),
    t = g(),
    n = v(f),
    { data: r } = y(B, n),
    i = z(),
    a;
  e[0] === n ? (a = e[1]) : ((a = [...ne, n]), (e[0] = n), (e[1] = a));
  let o = a,
    s;
  e[2] !== n || e[3] !== r?.configWriteTarget?.filePath
    ? ((s = (e) => {
        let { enabled: t } = e;
        return u(`batch-write-config-value`, {
          hostId: n,
          edits: [{ keyPath: Re, value: t, mergeStrategy: `upsert` }],
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
          t.setQueryData(o, (e) => (e == null ? e : { ...e, config: Ve(e.config, n) })),
          { previousUserConfig: r }
        );
      }),
      (l = (e, n, r) => {
        (x.error(`Failed to update Chronicle config`, {
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
  let d;
  e[9] === i
    ? (d = e[10])
    : ((d = async () => {
        await Promise.all([i(ne), i([`user-saved-config`])]);
      }),
      (e[9] = i),
      (e[10] = d));
  let p;
  return (
    e[11] !== s || e[12] !== c || e[13] !== l || e[14] !== d
      ? ((p = { mutationFn: s, onMutate: c, onError: l, onSettled: d }),
        (e[11] = s),
        (e[12] = c),
        (e[13] = l),
        (e[14] = d),
        (e[15] = p))
      : (p = e[15]),
    b(p)
  );
}
function Ve(e, t) {
  return Object.assign(structuredClone(e), { features: { ...He(e.features, ae, t) } });
}
function He(e, t, n) {
  let r = ze.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var J = m();
function Ue({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = _(S),
    i = v(f),
    a = ee(),
    o = g(),
    s = be(),
    c = Be(),
    { data: l, isLoading: u } = re(n.CHRONICLE_CONSENT_ACCEPTED),
    { data: p, isLoading: m } = y(B, i),
    [b, C] = (0, q.useState)(!1),
    [w, D] = (0, q.useState)(!1),
    [O, A] = (0, q.useState)(null),
    [j, M] = (0, q.useState)(!1),
    N = T(`chronicle-permissions`, {
      queryConfig: {
        intervalMs: 1e3,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
      },
    }),
    P = r(p?.config, ie) === !0,
    I = r(p?.config, ae) === !0,
    z = c.isPending || j || u,
    ne = z || !P,
    oe = R({
      accessibilityStatus: N.data?.accessibility,
      errorMessage: O,
      isSidecarPresent: N.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: j,
      processState: N.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: N.data?.screenRecording,
    }),
    se = a.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, q.useEffect)(() => {
    w && F(oe.kind) && d(t, n.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [w, t, oe.kind]);
  let ce = async ({ rememberConsentAccepted: r, showSetupDialog: i }) => {
      let a = I;
      (M(!0), A(null), C(!1), D(i));
      try {
        (r === !0 && (await d(t, n.CHRONICLE_CONSENT_ACCEPTED, !0)),
          i || d(t, n.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await c.mutateAsync({ enabled: !0 }),
          e?.(a, !0),
          await o.invalidateQueries({ queryKey: E(`chronicle-permissions`) }));
      } catch (e) {
        let r = et(e);
        (d(t, n.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          A(r),
          x.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: r },
            sensitive: { error: e },
          }));
      } finally {
        M(!1);
      }
    },
    le = async () => {
      let r = I;
      (M(!0), A(null), d(t, n.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await c.mutateAsync({ enabled: !1 }), e?.(r, !1));
      } catch {
      } finally {
        M(!1);
      }
    };
  return m
    ? (0, J.jsx)(J.Fragment, {})
    : (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(ke, {
            label: se,
            description: (0, J.jsx)(Ke, {
              isCheckingPermissions: N.data == null && N.isFetching,
              permissions: N.data,
              chronicleFeatureEnabled: I,
              onOpenChronicleSetup: () => {
                (A(null), D(!0));
              },
            }),
            control: (0, J.jsx)(ue, {
              disabled: P,
              tooltipContent: (0, J.jsx)(k, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, J.jsx)(`span`, {
                className: h(`inline-flex`, !P && `cursor-not-allowed`),
                tabIndex: P ? void 0 : 0,
                children: (0, J.jsx)(we, {
                  checked: I,
                  className: P ? void 0 : `pointer-events-none`,
                  disabled: ne,
                  onChange: (e) => {
                    if (e) {
                      if (l === !0) {
                        ce({ showSetupDialog: !1 });
                        return;
                      }
                      C(!0);
                      return;
                    }
                    le();
                  },
                  ariaLabel: a.formatMessage(
                    {
                      id: `settings.general.experimentalFeatures.chronicle.buttonAriaLabel`,
                      defaultMessage: `Toggle {featureName}`,
                      description: `Aria label for toggling the Chronicle experimental feature`,
                    },
                    { featureName: se },
                  ),
                }),
              }),
            }),
          }),
          (0, J.jsx)(Y, {
            open: b,
            onOpenChange: C,
            chronicleDisplayName: se,
            isPending: z,
            onContinue: () => {
              ce({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, J.jsx)(te, {
            open: w,
            setupState: oe,
            onOpenChange: (e) => {
              (e || d(t, n.CHRONICLE_SETUP_COMPLETION_PENDING, !1), D(e));
            },
            onAskCodex: () => {
              (d(t, n.CHRONICLE_SETUP_COMPLETION_PENDING, !1), D(!1), s({ prefillPrompt: L }));
            },
          }),
        ],
      });
}
function Y(e) {
  let t = (0, K.c)(37),
    { isPending: n, open: r, chronicleDisplayName: i, onContinue: a, onOpenChange: o } = e,
    s = ee(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, J.jsx)(H, {
        asChild: !0,
        children: (0, J.jsx)(`h2`, { className: `sr-only`, children: i }),
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
  t[4] === l ? (u = t[5]) : ((u = (0, J.jsx)(me, { title: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== c || t[7] !== u
    ? ((d = (0, J.jsxs)(pe, { children: [c, u] })), (t[6] = c), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f, p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(`p`, {
        children: (0, J.jsx)(k, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (p = (0, J.jsx)(`p`, {
        children: (0, J.jsx)(k, {
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
    ? ((m = (0, J.jsx)(`li`, {
        children: (0, J.jsx)(k, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyCost`,
          defaultMessage: `<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.`,
          description: `Chronicle consent dialog list item describing rate limit cost`,
          values: { strong: Ge },
        }),
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, J.jsx)(`li`, {
        children: (0, J.jsx)(k, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyPrivacy`,
          defaultMessage: `<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.`,
          description: `Chronicle consent dialog list item describing privacy risk`,
          values: { strong: We },
        }),
      })),
      (t[12] = h))
    : (h = t[12]);
  let g, _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          m,
          h,
          (0, J.jsx)(`li`, {
            children: (0, J.jsx)(k, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection`,
              defaultMessage: `<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.`,
              description: `Chronicle consent dialog list item describing prompt injection risk`,
              values: { strong: Z },
            }),
          }),
        ],
      })),
      (g = (0, J.jsx)(`p`, {
        children: (0, J.jsx)(k, {
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
    ? ((v = (0, J.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          (0, J.jsx)(`li`, {
            children: (0, J.jsx)(k, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing`,
              defaultMessage: `To generate memories, the screen captures are processed on our servers and then deleted.`,
              description: `Chronicle consent dialog list item describing server processing for generating memories`,
            }),
          }),
          (0, J.jsx)(`li`, {
            children: (0, J.jsx)(k, {
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
    ? ((y = (0, J.jsxs)(pe, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          f,
          p,
          _,
          g,
          v,
          (0, J.jsx)(`p`, {
            children: (0, J.jsx)(k, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro`,
              defaultMessage: `You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>`,
              description: `Closing body copy in the Chronicle consent dialog`,
              values: { link: X },
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
    ? ((x = (0, J.jsx)(k, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== n || t[21] !== b
    ? ((S = (0, J.jsx)(V, { color: `ghost`, disabled: n, onClick: b, children: x })),
      (t[20] = n),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, J.jsx)(k, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== n || t[25] !== a
    ? ((w = (0, J.jsx)(V, { color: `primary`, loading: n, onClick: a, children: C })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== S || t[28] !== w
    ? ((T = (0, J.jsx)(pe, { children: (0, J.jsxs)(_e, { className: ve, children: [S, w] }) })),
      (t[27] = S),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== T || t[31] !== d
    ? ((E = (0, J.jsxs)(ge, {
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
      ? ((D = (0, J.jsx)(he, { open: r, onOpenChange: o, size: `default`, children: E })),
        (t[33] = o),
        (t[34] = r),
        (t[35] = E),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
function X(e) {
  return (0, J.jsx)(`a`, {
    className: `text-token-link`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Z(e) {
  return (0, J.jsx)(`span`, { className: `font-bold text-token-foreground/90`, children: e });
}
function We(e) {
  return (0, J.jsx)(`span`, { className: `font-bold text-token-foreground/90`, children: e });
}
function Ge(e) {
  return (0, J.jsx)(`span`, { className: `font-bold text-token-foreground/90`, children: e });
}
function Ke(e) {
  let t = (0, K.c)(11),
    {
      isCheckingPermissions: n,
      onOpenChronicleSetup: r,
      permissions: i,
      chronicleFeatureEnabled: a,
    } = e,
    o = i?.accessibility === `granted` && i.screenRecording === `granted`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(`span`, {
        children: (0, J.jsx)(k, {
          id: `settings.general.experimentalFeatures.chronicle.description`,
          defaultMessage: `Augment memories with screen context so Codex can help with anything you’re working on. <link>Learn more</link>`,
          description: `Description for the Chronicle experimental feature`,
          values: { link: qe },
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
        ? (0, J.jsx)(`span`, {
            className: `flex flex-wrap gap-x-3 gap-y-1 text-xs`,
            children: (0, J.jsx)(Q, {
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
      : ((l = (0, J.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1.5`,
          children: [s, c],
        })),
        (t[9] = c),
        (t[10] = l)),
    l
  );
}
function qe(e) {
  return (0, J.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Q(e) {
  let t = (0, K.c)(22),
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
    ? ((c = $e({ accessibilityStatus: n, screenRecordingStatus: s })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c;
  if (!r && l != null) {
    let e;
    return (
      t[3] !== l || t[4] !== i
        ? ((e = (0, J.jsx)($, { permission: l, onOpenChronicleSetup: i })),
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
    t[6] === a ? (s = t[7]) : ((s = (0, J.jsx)(Xe, { processState: a })), (t[6] = a), (t[7] = s));
    let c;
    t[8] !== e || t[9] !== s
      ? ((c = (0, J.jsx)(k, {
          id: `settings.general.experimentalFeatures.chronicle.permission.runningStatus`,
          defaultMessage: `Status: {status}`,
          description: `Status shown when Chronicle has Screen Recording permission`,
          values: { status: (0, J.jsx)(`span`, { className: e, children: s }) },
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
            : (0, J.jsxs)(J.Fragment, {
                children: [
                  `; `,
                  (0, J.jsx)(`button`, {
                    className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap underline-offset-2 hover:underline`,
                    onClick: i,
                    type: `button`,
                    children: (0, J.jsx)(k, {
                      id: `settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility`,
                      defaultMessage: `Accessibility: {status} (open setup)`,
                      description: `Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted`,
                      values: {
                        status: (0, J.jsx)(`span`, {
                          className: h(`font-medium`, Qe({ isChecking: r, status: n })),
                          children: (0, J.jsx)(Ze, { isChecking: r, status: n }),
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
        ? ((u = (0, J.jsx)(`span`, {
            className: `inline-flex min-w-0 whitespace-nowrap`,
            children: (0, J.jsxs)(`span`, { className: `min-w-0 truncate`, children: [c, l] }),
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
    ? ((u = (0, J.jsx)(k, {
        id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
        defaultMessage: `Screen Recording`,
        description: `Label for the macOS Screen Recording permission status`,
      })),
      (t[18] = u))
    : (u = t[18]);
  let d;
  return (
    t[19] !== r || t[20] !== s
      ? ((d = (0, J.jsx)(Ye, { isChecking: r, label: u, status: s })),
        (t[19] = r),
        (t[20] = s),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function $(e) {
  let t = (0, K.c)(8),
    { onOpenChronicleSetup: n, permission: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = (0, J.jsx)(Je, { permission: r })), (t[0] = r), (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(`span`, {
        className: `font-medium`,
        children: (0, J.jsx)(k, {
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
    : ((o = (0, J.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, J.jsx)(k, {
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
      ? ((s = (0, J.jsx)(`button`, {
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
function Je(e) {
  let t = (0, K.c)(2),
    { permission: n } = e;
  switch (n) {
    case `accessibility`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
function Ye(e) {
  let t = (0, K.c)(12),
    { isChecking: n, label: r, status: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = h(`font-medium`, Qe({ isChecking: n, status: i }))), (t[0] = n), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== n || t[4] !== i
    ? ((o = (0, J.jsx)(Ze, { isChecking: n, status: i })), (t[3] = n), (t[4] = i), (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== a || t[7] !== o
    ? ((s = (0, J.jsx)(`span`, { className: a, children: o })), (t[6] = a), (t[7] = o), (t[8] = s))
    : (s = t[8]);
  let c;
  return (
    t[9] !== r || t[10] !== s
      ? ((c = (0, J.jsx)(`span`, {
          className: `inline-flex min-w-0 whitespace-nowrap`,
          children: (0, J.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: (0, J.jsx)(k, {
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
function Xe(e) {
  let t = (0, K.c)(4),
    { processState: n } = e;
  switch (n) {
    case `disabled`:
    case `stopped`:
    case void 0: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
function Ze(e) {
  let t = (0, K.c)(7),
    { isChecking: n, status: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(k, {
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
        ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
          ? ((e = (0, J.jsx)(k, {
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
function Qe({ isChecking: e, status: t }) {
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
function $e({ accessibilityStatus: e, screenRecordingStatus: t }) {
  return t === `denied`
    ? `screen-recording`
    : t === `granted` && e === `denied`
      ? `accessibility`
      : null;
}
function et(e) {
  return e instanceof Error ? e.message : `Failed to enable Chronicle`;
}
function tt({
  chronicleResearchPreviewEnabled: e,
  chronicleResearchPreviewVisible: t,
  isMemoryFeatureEnabled: n,
  memoryConfig: r,
}) {
  return {
    chronicleResearchPreviewEnabled: e,
    chronicleResearchPreviewVisible: t,
    ...I({ isMemoryFeatureEnabled: n, memoryConfig: r }),
    skipToolAssistedChatsEnabled: r.disableOnExternalContext,
  };
}
function nt(
  e,
  { chronicleResearchPreviewEnabled: t, isMemoryFeatureEnabled: n, memoryConfigPatch: r } = {},
) {
  return tt({
    chronicleResearchPreviewEnabled: t ?? e.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: e.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: n ?? e.isMemoryFeatureEnabled,
    memoryConfig: { ...e.memoryConfig, ...r },
  });
}
function rt({
  productLogger: e,
  previousEnabled: t,
  selectedEnabled: n,
  settingName: r,
  state: i,
}) {
  e.logProductEvent(P, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
}
async function it({ productLogger: e, write: t, ...n }) {
  try {
    await t();
  } catch {
    return;
  }
  rt({ productLogger: e, ...n });
}
async function at({
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
    rt({
      productLogger: e,
      previousEnabled: t.memoriesEnabled,
      selectedEnabled: n,
      settingName: `memories`,
      state: f,
    });
}
function ot() {
  let e = (0, K.c)(98),
    t = _(S),
    n = ee(),
    i = v(A),
    { selectedHostId: a } = Oe(),
    o = c(a),
    [s, d] = (0, q.useState)(!1),
    f = M(),
    { data: p } = y(B, a),
    { data: m, isLoading: h } = y(oe, a),
    g;
  e[0] === m ? (g = e[1]) : ((g = m === void 0 ? [] : m), (e[0] = m), (e[1] = g));
  let x = g,
    C;
  e[2] === f
    ? (C = e[3])
    : ((C = {
        queryConfig: { enabled: f, refetchOnMount: `always`, refetchOnWindowFocus: `always` },
      }),
      (e[2] = f),
      (e[3] = C));
  let { data: w } = T(`chronicle-permissions`, C),
    E = Pe(a),
    D;
  e[4] === a ? (D = e[5]) : ((D = { hostId: a }), (e[4] = a), (e[5] = D));
  let O = ce(D),
    te = j(`875176429`),
    P = Be(),
    F;
  e[6] === a
    ? (F = e[7])
    : ((F = () => u(`reset-memories-for-host`, { hostId: a })), (e[6] = a), (e[7] = F));
  let I, L;
  e[8] === t
    ? ((I = e[9]), (L = e[10]))
    : ((I = () => {
        (d(!1),
          t
            .get(le)
            .success(
              (0, J.jsx)(k, {
                id: `settings.memory.resetSuccess`,
                defaultMessage: `Memories reset`,
                description: `Toast shown after resetting memories`,
              }),
            ));
      }),
      (L = () => {
        t.get(le).danger(
          (0, J.jsx)(k, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = I),
      (e[10] = L));
  let R;
  e[11] !== F || e[12] !== I || e[13] !== L
    ? ((R = { mutationFn: F, onSuccess: I, onError: L }),
      (e[11] = F),
      (e[12] = I),
      (e[13] = L),
      (e[14] = R))
    : (R = e[14]);
  let z = b(R),
    ne = se(x, te),
    re;
  e[15] === x ? (re = e[16]) : ((re = x.find(ct)), (e[15] = x), (e[16] = re));
  let ue = re?.enabled === !0,
    de = p?.config,
    fe;
  e[17] === de ? (fe = e[18]) : ((fe = l(de)), (e[17] = de), (e[18] = fe));
  let H = fe,
    ve = p?.config,
    ye;
  e[19] === ve ? (ye = e[20]) : ((ye = r(ve, ae)), (e[19] = ve), (e[20] = ye));
  let be = ye === !0,
    xe = h || E.isPending || O.isPending || P.isPending || z.isPending,
    Se = ue && H.generateMemories && H.useMemories,
    Ce = o.kind === `local`,
    U = Ce && f && w?.chronicleSidecarPresent === !0,
    Te;
  e[21] !== be || e[22] !== ue || e[23] !== H || e[24] !== U
    ? ((Te = {
        chronicleResearchPreviewEnabled: be,
        chronicleResearchPreviewVisible: U,
        isMemoryFeatureEnabled: ue,
        memoryConfig: H,
      }),
      (e[21] = be),
      (e[22] = ue),
      (e[23] = H),
      (e[24] = U),
      (e[25] = Te))
    : (Te = e[25]);
  let Ee = Te;
  if (!ne) return null;
  let De;
  e[26] === Ee
    ? (De = e[27])
    : ((De = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return nt(Ee, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = Ee),
      (e[27] = De));
  let W = De,
    Ne;
  e[28] !== E || e[29] !== P || e[30] !== W || e[31] !== Ce || e[32] !== i || e[33] !== O
    ? ((Ne = (e) => {
        at({
          productLogger: i,
          previousState: W(),
          selectedEnabled: e,
          featureWrite: () => O.mutateAsync({ featureName: ie, enabled: e }),
          configWrite: () =>
            E.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && Ce ? { chronicleDisable: () => P.mutateAsync({ enabled: !1 }) } : {}),
        });
      }),
      (e[28] = E),
      (e[29] = P),
      (e[30] = W),
      (e[31] = Ce),
      (e[32] = i),
      (e[33] = O),
      (e[34] = Ne))
    : (Ne = e[34]);
  let Fe = Ne,
    Ie;
  e[35] === z
    ? (Ie = e[36])
    : ((Ie = async () => {
        await z.mutateAsync();
      }),
      (e[35] = z),
      (e[36] = Ie));
  let Le = Ie,
    Re;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, J.jsx)(k, { ...je.memory })), (e[37] = Re))
    : (Re = e[37]);
  let ze;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, J.jsx)(G.Header, {
        title: Re,
        subtitle: (0, J.jsx)(k, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: st },
        }),
      })),
      (e[38] = ze))
    : (ze = e[38]);
  let Ve, He;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, J.jsx)(k, { ...je.enableMemories })),
      (He = (0, J.jsx)(k, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = Ve),
      (e[40] = He))
    : ((Ve = e[39]), (He = e[40]));
  let Y;
  e[41] === n
    ? (Y = e[42])
    : ((Y = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = Y));
  let X;
  e[43] !== xe || e[44] !== Se || e[45] !== Fe || e[46] !== Y
    ? ((X = (0, J.jsx)(ke, {
        label: Ve,
        description: He,
        control: (0, J.jsx)(we, { checked: Se, disabled: xe, ariaLabel: Y, onChange: Fe }),
      })),
      (e[43] = xe),
      (e[44] = Se),
      (e[45] = Fe),
      (e[46] = Y),
      (e[47] = X))
    : (X = e[47]);
  let Z;
  e[48] !== W || e[49] !== i || e[50] !== U
    ? ((Z = U
        ? (0, J.jsx)(Ue, {
            onChronicleResearchPreviewToggled: (e, t) => {
              rt({
                productLogger: i,
                previousEnabled: e,
                selectedEnabled: t,
                settingName: `chronicle_research_preview`,
                state: W({ chronicleResearchPreviewEnabled: t }),
              });
            },
          })
        : null),
      (e[48] = W),
      (e[49] = i),
      (e[50] = U),
      (e[51] = Z))
    : (Z = e[51]);
  let We, Ge;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (0, J.jsx)(k, { ...je.skipToolAssistedChats })),
      (Ge = (0, J.jsx)(k, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = We),
      (e[53] = Ge))
    : ((We = e[52]), (Ge = e[53]));
  let Ke = H.disableOnExternalContext,
    qe = xe || !ue,
    Q;
  e[54] === n
    ? (Q = e[55])
    : ((Q = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = Q));
  let $;
  e[56] !== E || e[57] !== W || e[58] !== H.disableOnExternalContext || e[59] !== i
    ? (($ = (e) => {
        it({
          productLogger: i,
          previousEnabled: H.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: W({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            E.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                { keyPath: `memories.no_memories_if_mcp_or_web_search`, value: null },
              ],
            }),
        });
      }),
      (e[56] = E),
      (e[57] = W),
      (e[58] = H.disableOnExternalContext),
      (e[59] = i),
      (e[60] = $))
    : ($ = e[60]);
  let Je;
  e[61] !== H.disableOnExternalContext || e[62] !== qe || e[63] !== Q || e[64] !== $
    ? ((Je = (0, J.jsx)(ke, {
        label: We,
        description: Ge,
        control: (0, J.jsx)(we, { checked: Ke, disabled: qe, ariaLabel: Q, onChange: $ }),
      })),
      (e[61] = H.disableOnExternalContext),
      (e[62] = qe),
      (e[63] = Q),
      (e[64] = $),
      (e[65] = Je))
    : (Je = e[65]);
  let Ye, Xe;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, J.jsx)(k, { ...je.resetMemories })),
      (Xe = (0, J.jsx)(k, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = Ye),
      (e[67] = Xe))
    : ((Ye = e[66]), (Xe = e[67]));
  let Ze, Qe;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = () => {
        d(!0);
      }),
      (Qe = (0, J.jsx)(k, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Ze),
      (e[69] = Qe))
    : ((Ze = e[68]), (Qe = e[69]));
  let $e;
  e[70] === z.isPending
    ? ($e = e[71])
    : (($e = (0, J.jsx)(ke, {
        label: Ye,
        description: Xe,
        control: (0, J.jsx)(V, {
          color: `danger`,
          disabled: z.isPending,
          loading: z.isPending,
          onClick: Ze,
          children: Qe,
        }),
      })),
      (e[70] = z.isPending),
      (e[71] = $e));
  let et;
  e[72] !== X || e[73] !== Z || e[74] !== Je || e[75] !== $e
    ? ((et = (0, J.jsxs)(G, {
        id: Me.memory,
        className: `gap-2`,
        children: [
          ze,
          (0, J.jsx)(G.Content, { children: (0, J.jsxs)(Ae, { children: [X, Z, Je, $e] }) }),
        ],
      })),
      (e[72] = X),
      (e[73] = Z),
      (e[74] = Je),
      (e[75] = $e),
      (e[76] = et))
    : (et = e[76]);
  let tt;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, J.jsx)(pe, {
        children: (0, J.jsx)(me, {
          title: (0, J.jsx)(k, {
            id: `settings.memory.resetDialogTitle`,
            defaultMessage: `Reset all memories?`,
            description: `Title for reset memories confirmation dialog`,
          }),
          subtitle: (0, J.jsx)(k, {
            id: `settings.memory.resetDialogSubtitle`,
            defaultMessage: `This deletes all Codex memories.`,
            description: `Subtitle for reset memories confirmation dialog`,
          }),
        }),
      })),
      (e[77] = tt))
    : (tt = e[77]);
  let ot, lt;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = () => {
        d(!1);
      }),
      (lt = (0, J.jsx)(k, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = ot),
      (e[79] = lt))
    : ((ot = e[78]), (lt = e[79]));
  let ut;
  e[80] === z.isPending
    ? (ut = e[81])
    : ((ut = (0, J.jsx)(V, { color: `ghost`, disabled: z.isPending, onClick: ot, children: lt })),
      (e[80] = z.isPending),
      (e[81] = ut));
  let dt;
  e[82] !== Le || e[83] !== i
    ? ((dt = () => {
        (i.logProductEvent(N, { resetScope: `all_memories` }), Le());
      }),
      (e[82] = Le),
      (e[83] = i),
      (e[84] = dt))
    : (dt = e[84]);
  let ft;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, J.jsx)(k, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = ft))
    : (ft = e[85]);
  let pt;
  e[86] !== z.isPending || e[87] !== dt
    ? ((pt = (0, J.jsx)(V, { color: `danger`, loading: z.isPending, onClick: dt, children: ft })),
      (e[86] = z.isPending),
      (e[87] = dt),
      (e[88] = pt))
    : (pt = e[88]);
  let mt;
  e[89] !== ut || e[90] !== pt
    ? ((mt = (0, J.jsxs)(ge, {
        children: [tt, (0, J.jsx)(pe, { children: (0, J.jsxs)(_e, { children: [ut, pt] }) })],
      })),
      (e[89] = ut),
      (e[90] = pt),
      (e[91] = mt))
    : (mt = e[91]);
  let ht;
  e[92] !== s || e[93] !== mt
    ? ((ht = (0, J.jsx)(he, { open: s, onOpenChange: d, size: `compact`, children: mt })),
      (e[92] = s),
      (e[93] = mt),
      (e[94] = ht))
    : (ht = e[94]);
  let gt;
  return (
    e[95] !== et || e[96] !== ht
      ? ((gt = (0, J.jsxs)(J.Fragment, { children: [et, ht] })),
        (e[95] = et),
        (e[96] = ht),
        (e[97] = gt))
      : (gt = e[97]),
    gt
  );
}
function st(e) {
  return (0, J.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function ct(e) {
  return e.name === ie;
}
function lt() {
  let e = (0, K.c)(35),
    t = ee(),
    n = j(`1444479692`),
    { selectedHostId: r } = Oe(),
    i;
  e[0] === r ? (i = e[1]) : ((i = { hostId: r }), (e[0] = r), (e[1] = i));
  let { personality: a, setPersonality: o } = Ee(i),
    s;
  e[2] === t
    ? (s = e[3])
    : ((s = t.formatMessage({
        id: `composer.personalitySlashCommand.label.friendly`,
        defaultMessage: `Friendly`,
        description: `Label for the friendly personality`,
      })),
      (e[2] = t),
      (e[3] = s));
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
  e[9] === t
    ? (u = e[10])
    : ((u = t.formatMessage({
        id: `composer.personalitySlashCommand.label.pragmatic`,
        defaultMessage: `Pragmatic`,
        description: `Label for the pragmatic personality`,
      })),
      (e[9] = t),
      (e[10] = u));
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
    ? ((_ = (0, J.jsx)(U, { slug: `personalization` })), (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== g || e[27] !== o
    ? ((v = n
        ? (0, J.jsx)(G, {
            children: (0, J.jsx)(G.Content, {
              children: (0, J.jsx)(Ae, {
                children: (0, J.jsx)(ke, {
                  label: (0, J.jsx)(k, {
                    id: `settings.personalization.personality.label`,
                    defaultMessage: `Personality`,
                    description: `Label for personality selection in personalization settings`,
                  }),
                  description: (0, J.jsx)(k, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, J.jsx)(Ce, {
                    triggerButton: (0, J.jsx)(Te, {
                      children: (0, J.jsx)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: g.label,
                      }),
                    }),
                    align: `end`,
                    children: (0, J.jsx)(`div`, {
                      className: `w-[260px] max-w-xs space-y-1`,
                      children: m.map((e) =>
                        (0, J.jsx)(
                          Se.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? ye : void 0,
                            children: (0, J.jsxs)(`div`, {
                              className: `flex flex-col items-start gap-0.5`,
                              children: [
                                (0, J.jsx)(`span`, { className: `text-sm`, children: e.label }),
                                (0, J.jsx)(`span`, {
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
  e[29] === r ? (y = e[30]) : ((y = (0, J.jsx)(ut, { hostId: r }, r)), (e[29] = r), (e[30] = y));
  let b;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsx)(fe, { electron: !0, extension: !0, children: (0, J.jsx)(ot, {}) })),
      (e[31] = b))
    : (b = e[31]);
  let x;
  return (
    e[32] !== v || e[33] !== y
      ? ((x = (0, J.jsxs)(W, { title: _, children: [v, y, b] })),
        (e[32] = v),
        (e[33] = y),
        (e[34] = x))
      : (x = e[34]),
    x
  );
}
function ut(e) {
  let t = (0, K.c)(40),
    { hostId: n } = e,
    r = _(S),
    i = ee(),
    a = g(),
    [o, s] = (0, q.useState)(null),
    { data: c, error: l, isFetching: u, refetch: d } = y(Ne, n),
    f;
  t[0] !== i || t[1] !== a || t[2] !== r
    ? ((f = (e, t) => {
        (a.setQueryData(E(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          s(null),
          r
            .get(le)
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
        r.get(le).danger(
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
  let m;
  t[7] !== f || t[8] !== p
    ? ((m = { onSuccess: f, onError: p }), (t[7] = f), (t[8] = p), (t[9] = m))
    : (m = t[9]);
  let h = D(`codex-agents-md-save`, m),
    v = c?.contents ?? ``,
    b = o ?? v,
    x = o != null && o !== v,
    C = c != null,
    w = !C && u,
    T = h.isPending,
    O = l != null && c == null,
    A;
  t[10] !== b || t[11] !== n || t[12] !== x || t[13] !== C || t[14] !== T || t[15] !== h
    ? ((A = () => {
        !C || !x || T || h.mutate({ hostId: n, contents: b });
      }),
      (t[10] = b),
      (t[11] = n),
      (t[12] = x),
      (t[13] = C),
      (t[14] = T),
      (t[15] = h),
      (t[16] = A))
    : (A = t[16]);
  let j = A,
    M = C && x && !T,
    N;
  t[17] === j
    ? (N = t[18])
    : ((N = (e) => {
        (e.preventDefault(), j());
      }),
      (t[17] = j),
      (t[18] = N));
  let te;
  (t[19] !== M || t[20] !== N
    ? ((te = { accelerator: `CmdOrCtrl+S`, enabled: M, onKeyDown: N }),
      (t[19] = M),
      (t[20] = N),
      (t[21] = te))
    : (te = t[21]),
    De(te));
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
    : ((I = i.formatMessage(je.customInstructions)), (t[24] = i), (t[25] = I));
  let L = I,
    R;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, J.jsx)(k, { ...je.customInstructions })), (t[26] = R))
    : (R = t[26]);
  let z;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, J.jsx)(G.Header, {
        title: R,
        subtitle: (0, J.jsx)(k, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: dt },
        }),
      })),
      (t[27] = z))
    : (z = t[27]);
  let B;
  return (
    t[28] !== v ||
    t[29] !== L ||
    t[30] !== b ||
    t[31] !== j ||
    t[32] !== x ||
    t[33] !== w ||
    t[34] !== C ||
    t[35] !== T ||
    t[36] !== F ||
    t[37] !== d ||
    t[38] !== O
      ? ((B = (0, J.jsxs)(G, {
          id: Me.customInstructions,
          className: `gap-2`,
          children: [
            z,
            (0, J.jsx)(G.Content, {
              children: O
                ? (0, J.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, J.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, J.jsx)(k, {
                          id: `settings.personalization.agents.loadError`,
                          defaultMessage: `Unable to load agents.md.`,
                          description: `Error message shown when agents.md fails to load`,
                        }),
                      }),
                      (0, J.jsx)(V, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          d();
                        },
                        size: `toolbar`,
                        children: (0, J.jsx)(k, {
                          id: `settings.personalization.agents.retry`,
                          defaultMessage: `Retry`,
                          description: `Button label to retry loading agents.md`,
                        }),
                      }),
                    ],
                  })
                : (0, J.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [
                      w
                        ? (0, J.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, J.jsx)(de, { className: `icon-xs` }),
                              (0, J.jsx)(k, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, J.jsx)(`textarea`, {
                            "aria-label": L,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !C || T,
                            placeholder: F,
                            rows: 12,
                            value: b,
                            onChange: (e) => {
                              let t = e.target.value;
                              s(t === v ? null : t);
                            },
                          }),
                      (0, J.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, J.jsx)(V, {
                          color: `primary`,
                          disabled: !x || !C,
                          loading: T,
                          onClick: j,
                          size: `toolbar`,
                          children: (0, J.jsx)(k, {
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
        (t[29] = L),
        (t[30] = b),
        (t[31] = j),
        (t[32] = x),
        (t[33] = w),
        (t[34] = C),
        (t[35] = T),
        (t[36] = F),
        (t[37] = d),
        (t[38] = O),
        (t[39] = B))
      : (B = t[39]),
    B
  );
}
function dt(e) {
  return (0, J.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: xe,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
export { lt as PersonalizationSettings };
//# sourceMappingURL=personalization-settings.js.map
