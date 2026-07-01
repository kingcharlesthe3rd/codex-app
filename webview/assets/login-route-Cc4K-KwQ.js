import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $d as n,
  AV as r,
  At as i,
  Bu as a,
  Cz as o,
  Du as s,
  EB as c,
  Eu as l,
  FN as u,
  GP as d,
  Gi as f,
  HP as p,
  IP as m,
  Ij as h,
  Iu as g,
  J as _,
  Ji as v,
  LP as y,
  Lj as b,
  Lu as x,
  Mj as S,
  NE as C,
  PN as w,
  Pj as T,
  RN as E,
  RV as D,
  Ru as O,
  Sz as k,
  TB as A,
  TP as j,
  XO as M,
  YO as N,
  Yj as P,
  _V as F,
  av as I,
  aw as L,
  bB as R,
  cw as ee,
  fN as z,
  gx as te,
  hN as ne,
  hS as B,
  hx as re,
  iF as ie,
  jE as ae,
  jV as V,
  jj as oe,
  kj as se,
  kt as ce,
  lM as le,
  mN as ue,
  ow as de,
  pN as fe,
  pS as pe,
  pV as me,
  q as he,
  qP as H,
  qi as ge,
  qj as _e,
  uM as ve,
  vv as ye,
  wP as be,
  wR as U,
  xV as xe,
  yE as Se,
  zV as W,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import { gc as Ce, hc as we } from "./app-initial~app-main~onboarding-page.js";
import {
  d as Te,
  f as Ee,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7.js";
import {
  _ as De,
  c as Oe,
  h as ke,
  l as Ae,
  u as je,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~select-~cvtadpw5.js";
import {
  h as Me,
  m as Ne,
  p as Pe,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j.js";
import {
  n as Fe,
  t as Ie,
} from "./app-initial~app-main~worktree-init-v2-page~first-run~appgen-settings-page~appgen-publicatio~by0xz8a5.js";
import {
  A as Le,
  F as Re,
  P as ze,
  j as Be,
} from "./app-initial~app-main~onboarding-page~appearance-settings~general-settings.js";
import {
  a as Ve,
  i as He,
  n as Ue,
  o as We,
  r as Ge,
  s as Ke,
  t as qe,
} from "./onboarding-login-content.js";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./use-ascii-engine.js";
function Qe() {
  let e = A(m),
    t = s(),
    n = ye(),
    r = H(),
    [i, o] = (0, K.useState)(null),
    c = i != null,
    l = a(),
    [u, f] = (0, K.useState)(!1),
    [p, h] = (0, K.useState)(!1),
    [g, _] = (0, K.useState)(null),
    [y, b] = (0, K.useState)(``),
    [S, E] = (0, K.useState)(!1),
    D = (0, K.useRef)(null),
    O = T(`900122030`),
    k = (t) => {
      let n = r.formatMessage(
        {
          id: `codex.signInFailed.message`,
          defaultMessage: `Sign-in failed: {rawMessage}`,
          description: `Sign-in failure toast message with error details`,
        },
        { rawMessage: t },
      );
      e.get(P).warning(n);
    };
  ((0, K.useEffect)(() => {
    u && (D.current?.focus(), D.current?.select());
  }, [u]),
    (0, K.useEffect)(() => {
      let e = !1;
      return (
        (async () => {
          try {
            let t = await w(`openai-api-key`);
            if (e) return;
            let n = t?.value ?? null;
            (_(n), b((e) => (e.length > 0 ? e : (n ?? ``))));
          } catch {
            e || _(null);
          }
        })(),
        () => {
          e = !0;
        }
      );
    }, []));
  let j = async () => {
      if (c) {
        (i?.abortController.abort(), o(null));
        return;
      }
      let e = new AbortController();
      o({ abortController: e, kind: `browserRedirect` });
      try {
        let { authUrl: r, completion: i } = await Ke({ signal: e.signal });
        r &&
          v({
            href: Ge({ authUrl: r, useDesktopAuth: !1, useStreamlinedLoginUx: !1 }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        let a = await i;
        a.success
          ? (t.setAuthMethod(`chatgpt`), n(`/first-run`))
          : k(U(a.error ?? `Unknown error`));
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        k(U(e));
      } finally {
        o(null);
      }
    },
    N = async () => {
      if (!O) return;
      if (c) {
        (i?.abortController.abort(), o(null));
        return;
      }
      let e = new AbortController();
      (h(!0), o({ abortController: e, kind: `deviceCode` }));
      try {
        let { verificationUrl: r, userCode: i, completion: a } = await We({ signal: e.signal });
        if (e.signal.aborted) return;
        (o((t) => (t?.abortController === e ? { ...t, verificationUrl: r, userCode: i } : t)),
          v({ href: r, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }));
        let s = await a;
        s.success
          ? (t.setAuthMethod(`chatgpt`), n(`/first-run`))
          : k(U(s.error ?? `Unknown error`));
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        k(U(e));
      } finally {
        o(null);
      }
    },
    F = async (t) => {
      if (t.length !== 0)
        try {
          (await Te(t),
            e
              .get(P)
              .success(
                r.formatMessage({
                  id: `codex.loggedOut.deviceCode.copySuccess`,
                  defaultMessage: `Copied device code`,
                  description: `Toast shown after copying the device code`,
                }),
              ));
        } catch {
          e.get(P).warning(
            r.formatMessage({
              id: `codex.loggedOut.deviceCode.copyFailed`,
              defaultMessage: `Could not copy device code`,
              description: `Toast shown when copying the device code fails`,
            }),
          );
        }
    },
    { data: I } = x(`show-copilot-login-first`),
    L = async () => {
      (await te(e, `use-copilot-auth-if-available`, !0),
        t.setAuthMethod(`copilot`),
        n(`/first-run`));
    },
    R = async () => {
      let e = y.trim();
      if (!(!e || S)) {
        E(!0);
        try {
          (await M(`login-with-api-key`, { hostId: C, apiKey: e }),
            t.setAuthMethod(`apikey`),
            n(`/first-run`));
        } catch (e) {
          k(U(e));
        } finally {
          E(!1);
        }
      }
    },
    ee =
      !l || !I
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)($e, { isPrimary: !0, handleChatGptSignIn: j, isChatGptSignInPending: c }),
              !c &&
                l &&
                (0, q.jsx)(`div`, {
                  className: `pt-2`,
                  children: (0, q.jsx)(et, { isPrimary: !1, handleCopilotSignIn: L }),
                }),
            ],
          })
        : (0, q.jsxs)(q.Fragment, {
            children: [
              !c && (0, q.jsx)(et, { isPrimary: !0, handleCopilotSignIn: L }),
              (0, q.jsx)(`div`, {
                className: `pt-2`,
                children: (0, q.jsx)($e, {
                  isPrimary: !1,
                  handleChatGptSignIn: j,
                  isChatGptSignInPending: c,
                }),
              }),
            ],
          }),
    z = i?.kind === `deviceCode` ? i : null;
  return (0, q.jsxs)(`div`, {
    className: `fixed inset-0 overflow-hidden bg-token-side-bar-background`,
    children: [
      (0, q.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0`,
        children: (0, q.jsx)(`div`, {
          className: `-ml-6 h-full w-full`,
          style: {
            WebkitMaskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)`,
            maskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)`,
            WebkitMaskRepeat: `no-repeat`,
            maskRepeat: `no-repeat`,
            WebkitMaskSize: `100% 100%`,
            maskSize: `100% 100%`,
          },
          children: (0, q.jsx)(ut, {}),
        }),
      }),
      (0, q.jsx)(`div`, {
        className: `relative z-10 flex h-full justify-center px-4 py-6 sm:py-8`,
        children: (0, q.jsxs)(`div`, {
          className: `flex h-full w-full max-w-[360px] flex-col`,
          children: [
            (0, q.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, q.jsx)(`h1`, {
                className: `text-center text-3xl leading-tight font-medium text-token-foreground`,
                children: (0, q.jsx)(d, {
                  id: `codex.loggedOut.title`,
                  defaultMessage: `{appName}`,
                  description: `Title on logged out screen`,
                  values: { appName: Ne },
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: `flex min-h-[192px] flex-col justify-end gap-4 pb-2 sm:pb-0`,
              children: [
                !u &&
                  z == null &&
                  (0, q.jsx)(`div`, {
                    className: `flex w-full justify-center`,
                    children: (0, q.jsxs)(`div`, {
                      className: `mx-auto inline-flex w-max flex-col items-stretch`,
                      children: [
                        ee,
                        !c &&
                          (0, q.jsx)(it, {
                            setApiKeyValue: b,
                            defaultApiKeyFromEnv: g,
                            setIsApiKeySignInVisible: f,
                          }),
                        !c &&
                          O &&
                          (0, q.jsx)(nt, {
                            isVisible: p,
                            onToggle: () => {
                              h((e) => !e);
                            },
                            children: (0, q.jsx)(tt, { handleChatGptDeviceCodeSignIn: N }),
                          }),
                      ],
                    }),
                  }),
                z != null &&
                  (0, q.jsx)(ct, {
                    verificationUrl: z.verificationUrl ?? ``,
                    userCode: z.userCode ?? ``,
                    onOpenBrowser: () => {
                      let e = z.verificationUrl;
                      e &&
                        v({
                          href: e,
                          initiator: `open_in_browser_bridge`,
                          openTarget: `external-browser`,
                        });
                    },
                    onCopyCode: F,
                    onCancel: () => {
                      (z.abortController.abort(), o(null));
                    },
                  }),
                !c &&
                  u &&
                  (0, q.jsx)(at, {
                    apiKeyValue: y,
                    setApiKeyValue: b,
                    apiKeyInputRef: D,
                    isApiKeyLoginPending: S,
                    setIsApiKeyLoginPending: E,
                    setIsApiKeySignInVisible: f,
                    handleApiKeySubmit: R,
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function $e(e) {
  let t = (0, G.c)(6),
    { isPrimary: n, handleChatGptSignIn: r, isChatGptSignInPending: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i
        ? (0, q.jsx)(d, {
            id: `codex.loggedOut.signIn.cancel`,
            defaultMessage: `Cancel Sign-in`,
            description: `Cancel button for sign in`,
          })
        : (0, q.jsx)(d, {
            id: `codex.loggedOut.signIn`,
            defaultMessage: `Sign in with ChatGPT`,
            description: `Sign in button text on logged out screen`,
          })),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((o = (0, q.jsx)(rt, { isPrimary: n, onClick: r, children: a })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function et(e) {
  let t = (0, G.c)(4),
    { isPrimary: n, handleCopilotSignIn: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, q.jsx)(d, {
        id: `codex.loggedOut.signInWithCopilot`,
        defaultMessage: `Sign in with GitHub Copilot`,
        description: `Button label for GitHub Copilot sign-in on logged out screen`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== r || t[2] !== n
      ? ((a = (0, q.jsx)(rt, { isPrimary: n, onClick: r, children: i })),
        (t[1] = r),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function tt(e) {
  let t = (0, G.c)(3),
    { handleChatGptDeviceCodeSignIn: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, q.jsx)(d, {
        id: `codex.loggedOut.signInWithDeviceCode`,
        defaultMessage: `Use device code`,
        description: `Secondary button to sign in with a device code`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, q.jsx)(rt, { isPrimary: !1, onClick: n, children: r })), (t[1] = n), (t[2] = i)),
    i
  );
}
function nt(e) {
  let t = (0, G.c)(17),
    { isVisible: n, onToggle: r, children: i } = e,
    a = !n,
    o = n ? `1fr` : `0fr`,
    s = n ? 1 : 0,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { gridTemplateRows: o, opacity: s }), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === i
    ? (l = t[4])
    : ((l = (0, q.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, q.jsx)(`div`, { className: `pb-2`, children: i }),
      })),
      (t[3] = i),
      (t[4] = l));
  let u;
  t[5] !== a || t[6] !== c || t[7] !== l
    ? ((u = (0, q.jsx)(`div`, {
        className: `grid transition-[grid-template-rows,opacity] duration-200 ease-out`,
        "aria-hidden": a,
        style: c,
        children: l,
      })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let f;
  t[9] === n
    ? (f = t[10])
    : ((f = n
        ? (0, q.jsx)(d, {
            id: `codex.loggedOut.lessOptions`,
            defaultMessage: `Less options`,
            description: `Button label to hide additional sign-in methods`,
          })
        : (0, q.jsx)(d, {
            id: `codex.loggedOut.moreOptions`,
            defaultMessage: `More options`,
            description: `Button label to reveal additional sign-in methods`,
          })),
      (t[9] = n),
      (t[10] = f));
  let p;
  t[11] !== r || t[12] !== f
    ? ((p = (0, q.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, q.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-center text-sm text-token-description-foreground hover:underline`,
          onClick: r,
          children: f,
        }),
      })),
      (t[11] = r),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== u || t[15] !== p
      ? ((m = (0, q.jsxs)(`div`, { className: `pt-2`, children: [u, p] })),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function rt(e) {
  let t = (0, G.c)(5),
    { isPrimary: n, onClick: r, children: i } = e,
    a = n ? `primary` : `outline`,
    o = n ? dt : ft,
    s;
  return (
    t[0] !== i || t[1] !== r || t[2] !== a || t[3] !== o
      ? ((s = (0, q.jsx)(z, { color: a, className: o, onClick: r, children: i })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function it(e) {
  let t = (0, G.c)(7),
    { setApiKeyValue: n, defaultApiKeyFromEnv: r, setIsApiKeySignInVisible: i } = e,
    a;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((a = () => {
        (i(!0), n((e) => (e.length > 0 ? e : (r ?? ``))));
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, q.jsx)(d, {
        id: `codex.loggedOut.useApiKey`,
        defaultMessage: `Use API Key`,
        description: `Secondary button to use API Key auth method`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] === a
      ? (s = t[6])
      : ((s = (0, q.jsx)(`div`, {
          className: `pt-2`,
          children: (0, q.jsx)(z, {
            color: `outline`,
            className: `w-full justify-center !rounded-full bg-token-foreground/10 px-4 py-2 font-medium backdrop-blur-md`,
            onClick: a,
            children: o,
          }),
        })),
        (t[5] = a),
        (t[6] = s)),
    s
  );
}
function at(e) {
  let t = (0, G.c)(32),
    {
      apiKeyValue: n,
      setApiKeyValue: r,
      apiKeyInputRef: i,
      isApiKeyLoginPending: a,
      setIsApiKeyLoginPending: o,
      setIsApiKeySignInVisible: s,
      handleApiKeySubmit: c,
    } = e,
    l = H(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(d, {
        id: `codex.loggedOut.apiKeyPrompt.inputLabel`,
        defaultMessage: `Enter your OpenAI API key`,
        description: `Label for API key input`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let f;
  t[1] === l
    ? (f = t[2])
    : ((f = l.formatMessage({
        id: `codex.loggedOut.apiKeyPrompt.placeholder`,
        defaultMessage: `sk-...`,
        description: `Placeholder text hint for API key input field`,
      })),
      (t[1] = l),
      (t[2] = f));
  let p;
  t[3] === r
    ? (p = t[4])
    : ((p = (e) => {
        r(e.target.value);
      }),
      (t[3] = r),
      (t[4] = p));
  let m;
  t[5] !== i || t[6] !== n || t[7] !== f || t[8] !== p
    ? ((m = (0, q.jsxs)(`label`, {
        className: `block text-sm text-token-foreground`,
        children: [
          u,
          (0, q.jsx)(`input`, {
            ref: i,
            className: `mt-4 w-full rounded-lg border border-token-border bg-token-input-background px-3 py-2 text-sm text-token-foreground focus:border-token-focus-border focus:outline-none`,
            placeholder: f,
            value: n,
            onChange: p,
            onFocus: st,
          }),
        ],
      })),
      (t[5] = i),
      (t[6] = n),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, q.jsx)(`p`, {
        className: `mt-3 text-[10px] text-token-description-foreground`,
        children: (0, q.jsx)(d, {
          id: `codex.loggedOut.cloudTasksDisabledWithApiKey`,
          defaultMessage: `Cloud tasks disabled with API key`,
          description: `Disclaimer explaining that remote features need ChatGPT sign-in`,
        }),
      })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsxs)(`button`, {
        type: `button`,
        className: `inline-flex cursor-interaction items-center gap-1 text-sm text-token-text-link-foreground hover:underline max-[280px]:hidden`,
        onClick: ot,
        children: [
          (0, q.jsx)(d, {
            id: `codex.loggedOut.apiKeyPrompt.getKey`,
            defaultMessage: `Get API Key`,
            description: `Button to open OpenAI API key management page`,
          }),
          (0, q.jsx)(he, { href: lt, className: `icon-2xs` }),
        ],
      })),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== o || t[13] !== s
    ? ((_ = () => {
        (o(!1), s(!1));
      }),
      (t[12] = o),
      (t[13] = s),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, q.jsx)(d, {
        id: `codex.loggedOut.apiKeyPrompt.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for API key login`,
      })),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] === _
    ? (y = t[17])
    : ((y = (0, q.jsx)(z, { color: `ghost`, onClick: _, children: v })), (t[16] = _), (t[17] = y));
  let b;
  t[18] !== n || t[19] !== a
    ? ((b = n.trim().length === 0 || a), (t[18] = n), (t[19] = a), (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, q.jsx)(d, {
        id: `codex.loggedOut.apiKeyPrompt.confirm`,
        defaultMessage: `OK`,
        description: `Confirm button for API key login`,
      })),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== c || t[23] !== a || t[24] !== b
    ? ((S = (0, q.jsx)(z, { className: `px-4`, onClick: c, disabled: b, loading: a, children: x })),
      (t[22] = c),
      (t[23] = a),
      (t[24] = b),
      (t[25] = S))
    : (S = t[25]);
  let C;
  t[26] !== S || t[27] !== y
    ? ((C = (0, q.jsxs)(`div`, {
        className: `mt-4 flex items-center justify-end gap-2 min-[280px]:justify-between`,
        children: [
          g,
          (0, q.jsxs)(`div`, { className: `flex justify-end gap-2`, children: [y, S] }),
        ],
      })),
      (t[26] = S),
      (t[27] = y),
      (t[28] = C))
    : (C = t[28]);
  let w;
  return (
    t[29] !== C || t[30] !== m
      ? ((w = (0, q.jsxs)(`div`, {
          className: `w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg`,
          children: [m, h, C],
        })),
        (t[29] = C),
        (t[30] = m),
        (t[31] = w))
      : (w = t[31]),
    w
  );
}
function ot(e) {
  ge({ event: e, href: lt, initiator: `open_in_browser_bridge` });
}
function st(e) {
  e.currentTarget.select();
}
function ct(e) {
  let t = (0, G.c)(38),
    { verificationUrl: n, userCode: r, onOpenBrowser: i, onCopyCode: a, onCancel: o } = e,
    s = H(),
    c = r.length > 0 ? r : `......`,
    [l, u] = (0, K.useState)(!1),
    f;
  t[0] !== s || t[1] !== l
    ? ((f = l
        ? s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copied`,
            defaultMessage: `Copied`,
            description: `Aria label for the copied state of the device code copy affordance on the logged out screen`,
          })
        : s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copy`,
            defaultMessage: `Copy`,
            description: `Aria label for the device code copy affordance on the logged out screen`,
          })),
      (t[0] = s),
      (t[1] = l),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] !== a || t[4] !== r
    ? ((m = () => {
        r.length !== 0 &&
          (a(r),
          u(!0),
          window.setTimeout(() => {
            u(!1);
          }, 2e3));
      }),
      (t[3] = a),
      (t[4] = r),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsx)(`p`, {
        className: `text-sm text-token-foreground`,
        children: (0, q.jsx)(d, {
          id: `codex.loggedOut.deviceCode.instructions`,
          defaultMessage: `To use a device code to log in, click the open browser button and paste the code below.`,
          description: `Instructions shown while a device code login is in progress`,
        }),
      })),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === h
    ? (_ = t[8])
    : ((_ = (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), h());
      }),
      (t[7] = h),
      (t[8] = _));
  let v;
  t[9] === h
    ? (v = t[10])
    : ((v = (e) => {
        (e.stopPropagation(), h());
      }),
      (t[9] = h),
      (t[10] = v));
  let y;
  t[11] === l
    ? (y = t[12])
    : ((y = l
        ? (0, q.jsx)(le, { className: `icon-sm text-token-foreground` })
        : (0, q.jsx)(Ie, { className: `icon-sm` })),
      (t[11] = l),
      (t[12] = y));
  let b;
  t[13] !== p || t[14] !== v || t[15] !== y
    ? ((b = (0, q.jsx)(`div`, {
        className: `absolute top-2 right-2 opacity-100 transition-opacity sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100`,
        children: (0, q.jsx)(z, {
          color: `ghost`,
          size: `icon`,
          className: `rounded-md`,
          "aria-label": p,
          onClick: v,
          children: y,
        }),
      })),
      (t[13] = p),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, q.jsx)(`p`, {
        className: `text-xs font-medium tracking-[0.2em] text-token-description-foreground uppercase`,
        children: (0, q.jsx)(d, {
          id: `codex.loggedOut.deviceCode.codeLabel`,
          defaultMessage: `Device code`,
          description: `Label above the user code shown during device code sign in`,
        }),
      })),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] === c
    ? (S = t[19])
    : ((S = (0, q.jsx)(`p`, {
        className: `mt-2 overflow-x-auto text-center font-mono text-[28px] font-semibold tracking-[0.12em] whitespace-nowrap text-token-foreground`,
        children: c,
      })),
      (t[18] = c),
      (t[19] = S));
  let C;
  t[20] !== h || t[21] !== _ || t[22] !== b || t[23] !== S
    ? ((C = (0, q.jsxs)(`div`, {
        className: `group relative rounded-xl border border-token-border bg-token-input-background px-3 py-3`,
        role: `button`,
        tabIndex: 0,
        onClick: h,
        onKeyDown: _,
        children: [b, x, S],
      })),
      (t[20] = h),
      (t[21] = _),
      (t[22] = b),
      (t[23] = S),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, q.jsx)(d, {
        id: `codex.loggedOut.deviceCode.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a device code login`,
      })),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] === o
    ? (T = t[27])
    : ((T = (0, q.jsx)(z, { color: `ghost`, onClick: o, children: w })), (t[26] = o), (t[27] = T));
  let E = n.length === 0,
    D;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, q.jsx)(d, {
        id: `codex.loggedOut.deviceCode.openBrowser`,
        defaultMessage: `Open browser`,
        description: `Button to open the device code verification page`,
      })),
      (t[28] = D))
    : (D = t[28]);
  let O;
  t[29] !== i || t[30] !== E
    ? ((O = (0, q.jsx)(z, { onClick: i, disabled: E, children: D })),
      (t[29] = i),
      (t[30] = E),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== T || t[33] !== O
    ? ((k = (0, q.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-between gap-2`,
        children: [T, O],
      })),
      (t[32] = T),
      (t[33] = O),
      (t[34] = k))
    : (k = t[34]);
  let A;
  return (
    t[35] !== C || t[36] !== k
      ? ((A = (0, q.jsx)(`div`, {
          className: `w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg`,
          children: (0, q.jsxs)(`div`, { className: `space-y-3`, children: [g, C, k] }),
        })),
        (t[35] = C),
        (t[36] = k),
        (t[37] = A))
      : (A = t[37]),
    A
  );
}
var G,
  K,
  q,
  lt,
  ut,
  dt,
  ft,
  pt = e(() => {
    ((G = D()),
      R(),
      ie(),
      (K = t(W(), 1)),
      p(),
      I(),
      Me(),
      N(),
      Ve(),
      l(),
      O(),
      fe(),
      f(),
      _(),
      _e(),
      re(),
      g(),
      ve(),
      Fe(),
      y(),
      ae(),
      He(),
      S(),
      Ee(),
      E(),
      Je(),
      Ze(),
      (q = V()),
      (lt = `https://platform.openai.com/api-keys`),
      (ut = K.memo(function () {
        let e = (0, G.c)(5),
          t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = {
              initialColumns: 130,
              initialRows: 100,
              initialMode: `composite`,
              preferredVideoKeyword: `blossom`,
            }),
            (e[0] = t))
          : (t = e[0]);
        let { columns: n, rows: r, lines: i } = Ye(t),
          a;
        return (
          e[1] !== n || e[2] !== i || e[3] !== r
            ? ((a = (0, q.jsx)(Xe, { lines: i, columns: n, rows: r, autoCover: !0 })),
              (e[1] = n),
              (e[2] = i),
              (e[3] = r),
              (e[4] = a))
            : (a = e[4]),
          a
        );
      })),
      (dt = `w-full cursor-interaction justify-center !rounded-full border px-4 py-2 font-medium`),
      (ft = `bg-token-foreground/10 w-full justify-center !rounded-full px-4 py-2 font-medium backdrop-blur-md`));
  });
function mt(e) {
  let t = e.get(`enabled`, !1);
  return {
    useDesktopAuth: e.get(`use_desktop_auth`, t),
    useStreamlinedLoginUx: e.get(`use_streamlined_login_ux`, t),
  };
}
function ht(e) {
  return e;
}
var gt,
  _t,
  vt = e(() => {
    ((gt = `3446609779`), (_t = `1561420571`));
  });
function yt(e) {
  let t = (0, bt.c)(21),
    { onExit: n, audioContextRef: r } = e,
    i = (0, J.useRef)(null),
    a = (0, J.useRef)(null),
    o = (0, J.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[0] = s)) : (s = t[0]);
  let c = (0, J.useRef)(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { x: 0, y: 0 }), (t[1] = l))
    : (l = t[1]);
  let u = (0, J.useRef)(l),
    d = (0, J.useRef)(`right`),
    f = (0, J.useRef)(`right`),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { columns: Y, rows: Y, cellSize: St, width: Y * St, height: Y * St }), (t[2] = p))
    : (p = t[2]);
  let m = (0, J.useRef)(p),
    h = (0, J.useRef)(null),
    g = (0, J.useEffectEvent)(n),
    _;
  t[3] === r
    ? (_ = t[4])
    : ((_ = (e, t, n) => {
        if (r.current == null) return;
        let i = r.current;
        i.state === `suspended` && i.resume();
        let a = t / 1e3,
          o = i.createOscillator(),
          s = i.createGain();
        ((o.type = n),
          (o.frequency.value = e),
          s.gain.setValueAtTime(1e-4, i.currentTime),
          s.gain.exponentialRampToValueAtTime(0.18, i.currentTime + 0.01),
          s.gain.exponentialRampToValueAtTime(1e-4, i.currentTime + a),
          o.connect(s),
          s.connect(i.destination),
          o.start(),
          o.stop(i.currentTime + a),
          (o.onended = () => {
            (o.disconnect(), s.disconnect());
          }));
      }),
      (t[3] = r),
      (t[4] = _));
  let v = (0, J.useEffectEvent)(_),
    y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        o.current != null && (window.clearInterval(o.current), (o.current = null));
      }),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        if (h.current) return h.current;
        let e = i.current;
        if (e == null) return { snake: `#ffffff`, food: `#f97316` };
        let t = getComputedStyle(e).color || `#ffffff`,
          n = getComputedStyle(document.documentElement),
          r = {
            snake: t,
            food:
              n.getPropertyValue(`--vscode-charts-red`).trim() ||
              n.getPropertyValue(`--vscode-charts-orange`).trim() ||
              `#f97316`,
          };
        return ((h.current = r), r);
      }),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        if (i.current == null) return null;
        let e = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        ((i.current.width = Math.max(1, Math.floor(m.current.width * e))),
          (i.current.height = Math.max(1, Math.floor(m.current.height * e))),
          (i.current.style.width = `${m.current.width}px`),
          (i.current.style.height = `${m.current.height}px`));
        let t = i.current.getContext(`2d`);
        return t == null
          ? null
          : (t.setTransform(e, 0, 0, e, 0, 0), (t.imageSmoothingEnabled = !1), t);
      }),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = {
          x: Math.floor(Math.random() * m.current.columns),
          y: Math.floor(Math.random() * m.current.rows),
        };
        for (; e.some((e) => e.x === t.x && e.y === t.y); )
          t = {
            x: Math.floor(Math.random() * m.current.columns),
            y: Math.floor(Math.random() * m.current.rows),
          };
        return t;
      }),
      (t[8] = T))
    : (T = t[8]);
  let E = T,
    D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = w();
        if (e == null) return;
        let t = S();
        (e.clearRect(0, 0, m.current.width, m.current.height), (e.fillStyle = t.snake));
        for (let t of c.current)
          e.fillRect(
            t.x * m.current.cellSize,
            t.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          );
        ((e.fillStyle = t.food),
          e.fillRect(
            u.current.x * m.current.cellSize,
            u.current.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          ));
      }),
      (t[9] = D))
    : (D = t[9]);
  let O = (0, J.useEffectEvent)(D),
    k;
  t[10] === O
    ? (k = t[11])
    : ((k = () => {
        let e = Math.floor(m.current.columns / 2),
          t = Math.floor(m.current.rows / 2);
        ((c.current = [
          { x: e, y: t },
          { x: e - 1, y: t },
          { x: e - 2, y: t },
        ]),
          (d.current = `right`),
          (f.current = `right`),
          (u.current = E(c.current)),
          O());
      }),
      (t[10] = O),
      (t[11] = k));
  let A = (0, J.useEffectEvent)(k),
    j;
  t[12] === A
    ? (j = t[13])
    : ((j = () => {
        if (a.current == null) return;
        let e = a.current.getBoundingClientRect(),
          t = Math.max(1, Math.floor(e.width)),
          n = Math.max(1, Math.floor(e.height)),
          r = Math.max(Y, Math.floor(t / St)),
          i = t / r;
        ((m.current = {
          columns: r,
          rows: Math.max(Y, Math.floor(n / i)),
          cellSize: i,
          width: t,
          height: n,
        }),
          A());
      }),
      (t[12] = A),
      (t[13] = j));
  let M = (0, J.useEffectEvent)(j),
    N;
  t[14] !== O || t[15] !== g || t[16] !== v || t[17] !== M
    ? ((N = () => {
        M();
        let e = (e) => {
          let t = null;
          (e.key === `ArrowUp` || e.key === `w` || e.key === `W`
            ? (t = `up`)
            : e.key === `ArrowDown` || e.key === `s` || e.key === `S`
              ? (t = `down`)
              : e.key === `ArrowLeft` || e.key === `a` || e.key === `A`
                ? (t = `left`)
                : (e.key === `ArrowRight` || e.key === `d` || e.key === `D`) && (t = `right`),
            t != null && (e.preventDefault(), Tt[d.current] !== t && (f.current = t)));
        };
        return (
          window.addEventListener(`keydown`, e),
          (o.current = window.setInterval(() => {
            let e = c.current,
              t = e[0],
              n = f.current,
              r = wt[n],
              i = { x: t.x + r.x, y: t.y + r.y };
            if (i.x < 0 || i.y < 0 || i.x >= m.current.columns || i.y >= m.current.rows) {
              (b(), v(140, 220, `sawtooth`), g());
              return;
            }
            let a = i.x === u.current.x && i.y === u.current.y;
            if ((a ? e : e.slice(0, -1)).some((e) => e.x === i.x && e.y === i.y)) {
              (b(), v(160, 220, `sawtooth`), g());
              return;
            }
            let o = a ? [i, ...e] : [i, ...e.slice(0, -1)];
            ((c.current = o),
              (d.current = n),
              a && ((u.current = E(o)), v(660, 120, `square`)),
              O());
          }, Ct)),
          () => {
            (b(), window.removeEventListener(`keydown`, e));
          }
        );
      }),
      (t[14] = O),
      (t[15] = g),
      (t[16] = v),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  (t[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = []), (t[19] = P)) : (P = t[19]),
    (0, J.useEffect)(N, P));
  let F;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, xt.jsx)(`div`, {
          className: `h-full w-full`,
          ref: a,
          children: (0, xt.jsx)(`canvas`, {
            className: `h-full w-full text-token-foreground`,
            ref: i,
          }),
        })),
        (t[20] = F))
      : (F = t[20]),
    F
  );
}
var bt,
  J,
  xt,
  Y,
  St,
  Ct,
  wt,
  Tt,
  Et = e(() => {
    ((bt = D()),
      (J = t(W(), 1)),
      (xt = V()),
      (Y = 12),
      (St = 18),
      (Ct = 120),
      (wt = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      }),
      (Tt = { up: `down`, down: `up`, left: `right`, right: `left` }));
  });
function Dt(e, t) {
  if (t === `signin`) return e;
  try {
    let n = new URL(e);
    switch (t) {
      case `signup`:
        n.searchParams.set(`screen_hint`, `signup`);
        break;
      case `google`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `google-oauth2`));
        break;
      case `microsoft`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `windowslive`));
        break;
    }
    return n.toString();
  } catch {
    return e;
  }
}
var Ot = e(() => {}),
  X,
  kt,
  At = e(() => {
    (t(W()),
      (X = V()),
      (kt = (e) =>
        (0, X.jsxs)(`svg`, {
          height: 24,
          viewBox: `0 0 24 24`,
          width: 24,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
              fill: `#4285F4`,
            }),
            (0, X.jsx)(`path`, {
              d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
              fill: `#34A853`,
            }),
            (0, X.jsx)(`path`, {
              d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,
              fill: `#FBBC05`,
            }),
            (0, X.jsx)(`path`, {
              d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,
              fill: `#EA4335`,
            }),
            (0, X.jsx)(`path`, { d: `M1 1h22v22H1z`, fill: `none` }),
          ],
        })));
  });
function jt(e) {
  let t = (0, Mt.c)(50),
    {
      appBrand: n,
      apiKeyValue: r,
      isApiKeyEntryVisible: i,
      isApiKeySignInPending: a,
      isChatGptSignInPending: s,
      showChatGptProviderSignIn: c,
      onApiKeySubmit: l,
      onApiKeyValueChange: u,
      onChatGptSignIn: f,
      onChatGptSignUp: p,
      onPlaySnake: m,
      onResetApiKeyEntry: h,
      onShowApiKeyEntry: g,
    } = e,
    _ = H(),
    v = n === k.ChatGPT;
  if (s && !i) {
    let e = v ? `size-10` : `size-[52px]`,
      r;
    t[0] === e ? (r = t[1]) : ((r = be(`shrink-0`, e)), (t[0] = e), (t[1] = r));
    let i;
    t[2] !== n || t[3] !== r
      ? ((i = (0, Z.jsx)(ze, { appBrand: n, className: r })), (t[2] = n), (t[3] = r), (t[4] = i))
      : (i = t[4]);
    let a;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Z.jsx)(`p`, {
          className: `text-center text-[14px] leading-5 font-normal tracking-[-0.18px] text-token-description-foreground`,
          children: (0, Z.jsx)(d, {
            id: `electron.onboarding.login.browserPending.welcomeV2`,
            defaultMessage: `Continue signing in with your browser`,
            description: `Message shown while ChatGPT sign-in continues in the browser`,
          }),
        })),
        (t[5] = a))
      : (a = t[5]);
    let o;
    t[6] === f ? (o = t[7]) : ((o = () => f()), (t[6] = f), (t[7] = o));
    let s;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Z.jsx)(d, {
          id: `electron.onboarding.login.chatgpt.cancel.welcomeV2`,
          defaultMessage: `Cancel sign-in`,
          description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
        })),
        (t[8] = s))
      : (s = t[8]);
    let c;
    t[9] === o
      ? (c = t[10])
      : ((c = (0, Z.jsx)(`button`, {
          className: `flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-description-foreground hover:bg-token-list-hover-background`,
          type: `button`,
          onClick: o,
          children: s,
        })),
        (t[9] = o),
        (t[10] = c));
    let l;
    return (
      t[11] !== i || t[12] !== c
        ? ((l = (0, Z.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-12 text-token-foreground`,
            children: (0, Z.jsxs)(`div`, {
              className: `flex w-[340px] flex-col items-center gap-8`,
              children: [i, a, c],
            }),
          })),
          (t[11] = i),
          (t[12] = c),
          (t[13] = l))
        : (l = t[13]),
      l
    );
  }
  let y = v ? `gap-4` : `gap-8`,
    b;
  t[14] === y
    ? (b = t[15])
    : ((b = be(`flex w-full flex-col items-center`, y)), (t[14] = y), (t[15] = b));
  let x;
  t[16] === _
    ? (x = t[17])
    : ((x = _.formatMessage({
        id: `electron.onboarding.login.snake.start`,
        defaultMessage: `Play Snake`,
        description: `Aria label for the Codex logo button to start Snake`,
      })),
      (t[16] = _),
      (t[17] = x));
  let S = !v && `size-[52px]`,
    C;
  t[18] === S ? (C = t[19]) : ((C = be(`shrink-0`, S)), (t[18] = S), (t[19] = C));
  let w;
  t[20] !== n || t[21] !== C
    ? ((w = (0, Z.jsx)(ze, { appBrand: n, className: C })), (t[20] = n), (t[21] = C), (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] !== m || t[24] !== x || t[25] !== w
    ? ((T = (0, Z.jsx)(`button`, {
        className: `group flex cursor-interaction items-center justify-center rounded-full`,
        type: `button`,
        "aria-label": x,
        onClick: m,
        children: w,
      })),
      (t[23] = m),
      (t[24] = x),
      (t[25] = w),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== n || t[28] !== v
    ? ((E = (0, Z.jsx)(`h1`, {
        className: `w-[316px] text-center text-[28px] leading-9 font-normal text-token-foreground`,
        children: v
          ? (0, Z.jsx)(d, {
              id: `electron.onboarding.login.welcomeV2.title.chatgptSignIn`,
              defaultMessage: `Sign in to ChatGPT`,
              description: `Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in`,
            })
          : (0, Z.jsx)(d, {
              id: `electron.onboarding.login.welcomeV2.title`,
              defaultMessage: `Get started with {appName}`,
              description: `Title on the v2 desktop onboarding login page`,
              values: { appName: o(n) },
            }),
      })),
      (t[27] = n),
      (t[28] = v),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== b || t[31] !== T || t[32] !== E
    ? ((D = (0, Z.jsxs)(`div`, { className: b, children: [T, E] })),
      (t[30] = b),
      (t[31] = T),
      (t[32] = E),
      (t[33] = D))
    : (D = t[33]);
  let O;
  t[34] !== r ||
  t[35] !== i ||
  t[36] !== a ||
  t[37] !== v ||
  t[38] !== s ||
  t[39] !== l ||
  t[40] !== u ||
  t[41] !== f ||
  t[42] !== p ||
  t[43] !== h ||
  t[44] !== g ||
  t[45] !== c
    ? ((O = i
        ? (0, Z.jsx)(`div`, {
            className: `w-full`,
            children: (0, Z.jsx)(qe, {
              apiKeyValue: r,
              isApiKeyEntryVisible: i,
              isApiKeySignInPending: a,
              isChatGptSignInPending: s,
              onApiKeySecondaryAction: h,
              onApiKeySubmit: l,
              onApiKeyValueChange: u,
              onChatGptSignIn: f,
              onShowApiKeyEntry: g,
              apiKeySecondaryActionLabel: (0, Z.jsx)(d, {
                id: `electron.onboarding.login.apikey.cancel`,
                defaultMessage: `Cancel`,
                description: `Cancel button label for API key entry on desktop onboarding`,
              }),
            }),
          })
        : (0, Z.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-3`,
            children: [
              (0, Z.jsxs)(`button`, {
                className: `flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-token-foreground text-[14px] leading-5 font-medium text-token-dropdown-background hover:bg-token-foreground/80`,
                type: `button`,
                onClick: () => f(),
                children: [
                  (0, Z.jsx)(ce, { className: `size-6 shrink-0 text-token-dropdown-background` }),
                  v
                    ? (0, Z.jsx)(d, {
                        id: `electron.onboarding.login.chatgpt.continueToSignIn`,
                        defaultMessage: `Continue to sign in`,
                        description: `Button label for streamlined ChatGPT sign-in on desktop onboarding`,
                      })
                    : (0, Z.jsx)(d, {
                        id: `electron.onboarding.login.chatgpt.signIn`,
                        defaultMessage: `Sign in with ChatGPT`,
                        description: `Button label to sign in with ChatGPT on desktop onboarding`,
                      }),
                ],
              }),
              c
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsxs)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                        type: `button`,
                        onClick: () => f(`google`),
                        children: [
                          (0, Z.jsx)(kt, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                          (0, Z.jsx)(d, {
                            id: `electron.onboarding.login.google.signIn`,
                            defaultMessage: `Continue with Google`,
                            description: `Button label for Google sign-in on desktop onboarding`,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                        type: `button`,
                        onClick: () => f(`microsoft`),
                        children: [
                          (0, Z.jsx)(we, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                          (0, Z.jsx)(d, {
                            id: `electron.onboarding.login.microsoft.signIn`,
                            defaultMessage: `Continue with Microsoft`,
                            description: `Button label for Microsoft sign-in on desktop onboarding`,
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              (0, Z.jsx)(`button`, {
                className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                type: `button`,
                onClick: g,
                children: (0, Z.jsx)(d, {
                  id: `electron.onboarding.login.apikey.open.welcomeV2`,
                  defaultMessage: `Sign in another way`,
                  description: `Button label to open another sign-in method on v2 desktop onboarding`,
                }),
              }),
              (0, Z.jsx)(`button`, {
                className: `flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-token-description-foreground underline hover:text-token-foreground`,
                type: `button`,
                onClick: p,
                children: (0, Z.jsx)(d, {
                  id: `electron.onboarding.login.signup.welcomeV2`,
                  defaultMessage: `Sign up`,
                  description: `Sign-up link on v2 desktop onboarding`,
                }),
              }),
            ],
          })),
      (t[34] = r),
      (t[35] = i),
      (t[36] = a),
      (t[37] = v),
      (t[38] = s),
      (t[39] = l),
      (t[40] = u),
      (t[41] = f),
      (t[42] = p),
      (t[43] = h),
      (t[44] = g),
      (t[45] = c),
      (t[46] = O))
    : (O = t[46]);
  let A;
  return (
    t[47] !== O || t[48] !== D
      ? ((A = (0, Z.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-6 text-token-foreground`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex w-[340px] flex-col items-center gap-8`,
            children: [D, O],
          }),
        })),
        (t[47] = O),
        (t[48] = D),
        (t[49] = A))
      : (A = t[49]),
    A
  );
}
var Mt,
  Z,
  Nt = e(() => {
    ((Mt = D()), j(), ie(), p(), At(), Ce(), i(), Re(), Ue(), (Z = V()));
  });
function Pt() {
  let e = A(m),
    t = s(),
    n = ye(),
    i = H(),
    a = r(),
    o = c(ke),
    l = F(Oe),
    f = F(Ae),
    p = F(je),
    g = o == null ? null : { hasPreviouslyCompletedOnboarding: o },
    _ = h(),
    y = ht(b(_t).get(`enabled`, !1)),
    x = (t) => {
      e.get(P).warning(
        i.formatMessage(
          {
            id: `electron.onboarding.login.error`,
            defaultMessage: `Sign-in failed: {rawMessage}`,
            description: `Toast shown when sign-in fails on the desktop onboarding page`,
          },
          { rawMessage: t },
        ),
      );
    },
    [S, w] = (0, Q.useState)(null),
    T = S != null,
    [E, D] = (0, Q.useState)(!1),
    [O, k] = (0, Q.useState)(!1),
    [j, N] = (0, Q.useState)(``),
    [I, R] = (0, Q.useState)(!1),
    z = (0, Q.useRef)(null),
    te = () => {
      (f(!1), p(!0));
    },
    ne = () => {
      (D(!1), R(!1), N(``));
    },
    re = () => {
      g != null && (B(e, de, { method: `apikey`, ...g }), D(!0));
    },
    ie = () => {
      k(!1);
    },
    ae = () => {
      z.current ??
        (typeof window > `u` ||
          (`AudioContext` in window &&
            ((z.current = new window.AudioContext()),
            z.current.state === `suspended` && z.current.resume())));
    },
    V = () => {
      (ae(), k(!0));
    },
    ce = async (r = `signin`) => {
      if (T) {
        (S?.abort(), w(null));
        return;
      }
      if (g == null) return;
      let i = r === `google` || r === `microsoft` ? r : `chatgpt`;
      B(e, de, { method: i, ...g });
      let o = new AbortController();
      w(o);
      try {
        let { useDesktopAuth: s, useStreamlinedLoginUx: c } = mt(oe(_, gt)),
          d = se(_, `2936610421`),
          f = se(_, `3963726525`),
          { authUrl: p, completion: m } = await Ke({
            signal: o.signal,
            ...(d ? { appBrand: Pe } : {}),
            useHostedLoginSuccessPage: d,
            useStreamlinedLogin: c,
          });
        p &&
          v({
            href: Ge({
              authUrl: Dt(p, r),
              includeCodexOriginStableId: f,
              useDesktopAuth: s,
              useStreamlinedLoginUx: c,
            }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        let h = await m;
        h.success
          ? (B(e, ee, { method: i, ...g }),
            a.removeQueries({ queryKey: u(`account-info`), exact: !0 }),
            te(),
            l(!0),
            t.setAuthMethod(`chatgpt`),
            n(`/welcome`, { replace: !0 }))
          : (B(e, L, { method: i, errorKind: Ft(h.error), ...g }),
            x(U(h.error ?? `Unknown error`)));
      } catch (t) {
        if (t instanceof Error && t.name === `AbortError`) {
          B(e, L, { method: i, errorKind: `abort`, ...g });
          return;
        }
        (B(e, L, { method: i, errorKind: Ft(t), ...g }), x(U(t)));
      } finally {
        w(null);
      }
    };
  return g == null
    ? (0, $.jsx)(Le, {
        children: (0, $.jsxs)(`div`, {
          className: `flex h-full w-full flex-col items-center justify-center gap-3 text-token-description-foreground`,
          children: [
            (0, $.jsx)(ue, { className: `h-4 w-4 text-token-foreground` }),
            (0, $.jsx)(d, {
              id: `electron.onboarding.login.loading`,
              defaultMessage: `Loading…`,
              description: `Loading state while the login page prepares onboarding telemetry`,
            }),
          ],
        }),
      })
    : (0, $.jsx)(Le, {
        fullBleed: !0,
        hideHeader: O,
        children: O
          ? (0, $.jsx)(`div`, {
              className: `flex h-full w-full`,
              children: (0, $.jsx)(yt, { onExit: ie, audioContextRef: z }),
            })
          : (0, $.jsx)(jt, {
              appBrand: Pe,
              apiKeyValue: j,
              isApiKeyEntryVisible: E,
              isApiKeySignInPending: I,
              isChatGptSignInPending: T,
              showChatGptProviderSignIn: y,
              onApiKeySubmit: async () => {
                let r = j.trim();
                if (!(!r || I || g == null)) {
                  R(!0);
                  try {
                    (await M(`login-with-api-key`, { hostId: C, apiKey: r }),
                      B(e, ee, { method: `apikey`, ...g }),
                      te(),
                      l(!0),
                      t.setAuthMethod(`apikey`),
                      n(`/welcome`, { replace: !0 }));
                  } catch (t) {
                    (B(e, L, { method: `apikey`, errorKind: Ft(t), ...g }), x(U(t)));
                  } finally {
                    R(!1);
                  }
                }
              },
              onApiKeyValueChange: N,
              onChatGptSignIn: ce,
              onChatGptSignUp: () => ce(`signup`),
              onPlaySnake: V,
              onResetApiKeyEntry: ne,
              onShowApiKeyEntry: re,
            }),
      });
}
function Ft(e) {
  let t = typeof e == `string` ? e : e instanceof Error ? e.message : ``;
  if (!t) return `unknown`;
  let n = t.toLowerCase();
  return n.includes(`network`) || n.includes(`fetch`) || n.includes(`timeout`)
    ? `network`
    : n.includes(`auth`) ||
        n.includes(`unauthorized`) ||
        n.includes(`forbidden`) ||
        n.includes(`invalid api key`) ||
        n.includes(`401`) ||
        n.includes(`403`)
      ? `auth`
      : `unknown`;
}
var Q,
  $,
  It = e(() => {
    (Se(),
      xe(),
      me(),
      R(),
      ie(),
      (Q = t(W(), 1)),
      p(),
      I(),
      Me(),
      N(),
      Ve(),
      l(),
      f(),
      ne(),
      _e(),
      De(),
      pe(),
      y(),
      ae(),
      He(),
      S(),
      vt(),
      E(),
      Be(),
      Et(),
      Ot(),
      Nt(),
      ($ = V()));
  });
function Lt() {
  let e = (0, Rt.c)(3);
  {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, zt.jsx)(Pt, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let t;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, zt.jsx)(Qe, {})), (e[2] = t))
      : (t = e[2]),
    t
  );
}
var Rt, zt;
e(() => {
  ((Rt = D()), t(W(), 1), n(), pt(), It(), (zt = V()));
})();
export { Lt as LoginRoute };
//# sourceMappingURL=login-route-Cc4K-KwQ.js.map
