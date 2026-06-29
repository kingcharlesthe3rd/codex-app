import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $t as n,
  AN as r,
  AV as i,
  Ai as a,
  BP as o,
  BV as s,
  Ci as c,
  DN as l,
  Di as u,
  Ei as d,
  Gi as f,
  Gj as p,
  IV as m,
  JV as h,
  Ja as g,
  MV as _,
  ON as v,
  Qt as y,
  TM as b,
  Ti as x,
  VP as S,
  Ya as C,
  Zi as w,
  ba as T,
  iF as E,
  kN as D,
  qV as O,
  qi as k,
  qj as A,
  rF as j,
  sF as M,
  va as N,
  wM as P,
  wi as F,
  xa as I,
  ya as L,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  nn as R,
  tn as z,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  Bd as B,
  Fd as V,
  Md as H,
  Nd as U,
  Pd as W,
  Rd as G,
  Ur as K,
  Vd as ee,
  Wr as q,
  os as te,
  ss as J,
  zd as Y,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  H as ne,
  K as re,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as ie,
  h as ae,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
var X,
  oe,
  se = e(() => {
    (t(h()),
      (X = s()),
      (oe = (e) =>
        (0, X.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M12 2A10 10 0 1 0 22 12C19.7909 12 18 10.2091 18 8C15.7909 8 14 6.20914 14 4C14 3.3072 13.824 2.6555 13.5143 2.0873C13.0186 2.02962 12.5139 2 12 2Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, X.jsx)(`circle`, { cx: 12, cy: 7, r: 1, fill: `currentColor` }),
            (0, X.jsx)(`circle`, { cx: 7.5, cy: 11, r: 1, fill: `currentColor` }),
            (0, X.jsx)(`circle`, { cx: 11.5, cy: 15, r: 1, fill: `currentColor` }),
            (0, X.jsx)(`circle`, { cx: 16, cy: 12.5, r: 1, fill: `currentColor` }),
          ],
        })));
  }),
  ce,
  le,
  ue = e(() => {
    (t(h()),
      (ce = s()),
      (le = (e) =>
        (0, ce.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, ce.jsx)(`path`, {
              d: `M8.75 9.55V15.75L6.5 18.25L4.25 15.75V9.55C2.886 8.748 2 7.267 2 5.625C2 3.14 4.015 1.125 6.5 1.125C8.985 1.125 11 3.14 11 5.625C11 7.267 10.114 8.748 8.75 9.55Z`,
              stroke: `currentColor`,
              strokeWidth: 1.33,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, ce.jsx)(`circle`, { cx: 6.5, cy: 5.5, r: 0.75, fill: `currentColor` }),
            (0, ce.jsx)(`path`, {
              d: `M11.45 2.775C12.078 2.362 12.83 2.125 13.625 2.125C16.11 2.125 18.125 4.14 18.125 6.625C18.125 8.267 17.239 9.748 15.875 10.55V15.75L13.625 18.25L11.375 15.75V10.55C10.818 10.223 10.342 9.783 9.977 9.263`,
              stroke: `currentColor`,
              strokeWidth: 1.33,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }),
  Z,
  de = e(() => {
    (E(),
      (Z = j({
        cookies: {
          id: `settings.browserUse.profileImport.cookies`,
          defaultMessage: `Cookies`,
          description: `Label for importing cookies from a browser profile`,
        },
        passwords: {
          id: `settings.browserUse.profileImport.passwords`,
          defaultMessage: `Passwords`,
          description: `Label for importing passwords from a browser profile`,
        },
        title: {
          id: `settings.browserUse.profileImport.title`,
          defaultMessage: `Import from your browser`,
          description: `Title for the browser profile import dialog`,
        },
      })));
  });
function fe(e) {
  let t = (0, Q.c)(60),
    {
      cookieAccessFailureMessage: n,
      elevatedChromeConsent: r,
      hasImportError: i,
      importCookies: a,
      importPasswords: o,
      isImporting: s,
      isLoadingProfiles: f,
      showCloseBrowserGuidance: p,
      profilePickerOpen: m,
      profiles: h,
      profilesHaveError: g,
      requiresElevatedChromeConsent: _,
      result: v,
      selectedProfile: y,
      onCancel: b,
      onElevatedChromeConsentChange: S,
      onImport: C,
      onImportCookiesChange: w,
      onImportPasswordsChange: E,
      onProfilePickerOpenChange: D,
      onSelectProfile: O,
    } = e;
  if (v != null) {
    let e;
    return (
      t[0] !== n || t[1] !== b || t[2] !== v || t[3] !== p
        ? ((e = (0, $.jsx)(ye, {
            cookieAccessFailureMessage: n,
            showCloseBrowserGuidance: p,
            result: v,
            onDone: b,
          })),
          (t[0] = n),
          (t[1] = b),
          (t[2] = v),
          (t[3] = p),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let k = y?.hasCookies === !0 && a,
    A = y?.hasPasswords === !0 && o,
    j = y == null || (!k && !A) || (_ && !r),
    N;
  t[5] === C
    ? (N = t[6])
    : ((N = (e) => {
        (e.preventDefault(), C());
      }),
      (t[5] = C),
      (t[6] = N));
  let P;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(T, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(M, { ...Z.title }),
        }),
      })),
      (t[7] = P))
    : (P = t[7]);
  let I;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(M, { ...Z.title })), (t[8] = I))
    : (I = t[8]);
  let R;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsxs)(u, {
        children: [
          P,
          (0, $.jsx)(d, {
            title: I,
            subtitle: (0, $.jsx)(L, {
              asChild: !0,
              children: (0, $.jsx)(`div`, {
                children: (0, $.jsx)(M, {
                  id: `settings.browserUse.profileImport.subtitle`,
                  defaultMessage: `Choose data to bring over to the built-in browser`,
                  description: `Subtitle for the browser data import dialog`,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[9] = R))
    : (R = t[9]);
  let z = s || !h?.length,
    B;
  t[10] !== f ||
  t[11] !== D ||
  t[12] !== O ||
  t[13] !== m ||
  t[14] !== h ||
  t[15] !== y ||
  t[16] !== z
    ? ((B = (0, $.jsx)(pe, {
        disabled: z,
        isLoading: f,
        open: m,
        profiles: h,
        selectedProfile: y,
        onOpenChange: D,
        onSelectProfile: O,
      })),
      (t[10] = f),
      (t[11] = D),
      (t[12] = O),
      (t[13] = m),
      (t[14] = h),
      (t[15] = y),
      (t[16] = z),
      (t[17] = B))
    : (B = t[17]);
  let V;
  t[18] === h?.length
    ? (V = t[19])
    : ((V =
        h?.length === 0 &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-token-description-foreground`,
          children: (0, $.jsx)(M, {
            id: `settings.browserUse.profileImport.noProfilesDescription`,
            defaultMessage: `No Chrome or Atlas profiles were found on this device`,
            description: `Message shown when no importable browser profiles are found`,
          }),
        })),
      (t[18] = h?.length),
      (t[19] = V));
  let H;
  t[20] !== y || t[21] !== p
    ? ((H =
        p &&
        y != null &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-token-description-foreground`,
          children: (0, $.jsx)(M, {
            id: `settings.browserUse.profileImport.closeBrowser`,
            defaultMessage: `Close {browserName} completely before importing`,
            description: `Instruction to close the source browser before importing its profile data`,
            values: { browserName: y.appName },
          }),
        })),
      (t[20] = y),
      (t[21] = p),
      (t[22] = H))
    : (H = t[22]);
  let U;
  t[23] !== k || t[24] !== A || t[25] !== s || t[26] !== w || t[27] !== E || t[28] !== y
    ? ((U =
        y != null &&
        (0, $.jsxs)(ae, {
          children: [
            (0, $.jsx)(he, {
              available: y.hasPasswords,
              checked: A,
              disabled: s,
              kind: `passwords`,
              onChange: E,
            }),
            (0, $.jsx)(he, {
              available: y.hasCookies,
              checked: k,
              disabled: s,
              kind: `cookies`,
              onChange: w,
            }),
          ],
        })),
      (t[23] = k),
      (t[24] = A),
      (t[25] = s),
      (t[26] = w),
      (t[27] = E),
      (t[28] = y),
      (t[29] = U))
    : (U = t[29]);
  let W;
  t[30] !== r || t[31] !== s || t[32] !== S || t[33] !== _
    ? ((W = _ && (0, $.jsx)(ge, { checked: r, disabled: s, onChange: S })),
      (t[30] = r),
      (t[31] = s),
      (t[32] = S),
      (t[33] = _),
      (t[34] = W))
    : (W = t[34]);
  let G;
  t[35] !== i || t[36] !== g
    ? ((G = (0, $.jsx)(_e, { importFailed: i, profileDiscoveryFailed: g })),
      (t[35] = i),
      (t[36] = g),
      (t[37] = G))
    : (G = t[37]);
  let K;
  t[38] !== W || t[39] !== G || t[40] !== B || t[41] !== V || t[42] !== H || t[43] !== U
    ? ((K = (0, $.jsxs)(u, { className: `gap-3`, children: [B, V, H, U, W, G] })),
      (t[38] = W),
      (t[39] = G),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H),
      (t[43] = U),
      (t[44] = K))
    : (K = t[44]);
  let ee;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(M, {
        id: `settings.browserUse.profileImport.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the browser data import dialog`,
      })),
      (t[45] = ee))
    : (ee = t[45]);
  let q;
  t[46] !== s || t[47] !== b
    ? ((q = (0, $.jsx)(l, {
        color: `secondary`,
        disabled: s,
        onClick: b,
        type: `button`,
        children: ee,
      })),
      (t[46] = s),
      (t[47] = b),
      (t[48] = q))
    : (q = t[48]);
  let te;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(M, {
        id: `settings.browserUse.profileImport.import`,
        defaultMessage: `Import`,
        description: `Button that starts importing browser data`,
      })),
      (t[49] = te))
    : (te = t[49]);
  let J;
  t[50] !== j || t[51] !== s
    ? ((J = (0, $.jsx)(l, {
        color: `primary`,
        disabled: j,
        loading: s,
        type: `submit`,
        children: te,
      })),
      (t[50] = j),
      (t[51] = s),
      (t[52] = J))
    : (J = t[52]);
  let Y;
  t[53] !== q || t[54] !== J
    ? ((Y = (0, $.jsx)(u, { children: (0, $.jsxs)(x, { className: c, children: [q, J] }) })),
      (t[53] = q),
      (t[54] = J),
      (t[55] = Y))
    : (Y = t[55]);
  let ne;
  return (
    t[56] !== N || t[57] !== K || t[58] !== Y
      ? ((ne = (0, $.jsxs)(F, { as: `form`, onSubmit: N, children: [R, K, Y] })),
        (t[56] = N),
        (t[57] = K),
        (t[58] = Y),
        (t[59] = ne))
      : (ne = t[59]),
    ne
  );
}
function pe(e) {
  let t = (0, Q.c)(27),
    {
      disabled: n,
      isLoading: r,
      open: i,
      profiles: a,
      selectedProfile: s,
      onOpenChange: c,
      onSelectProfile: l,
    } = e,
    u;
  t[0] === s ? (u = t[1]) : ((u = s ? Ee(s) : null), (t[0] = s), (t[1] = u));
  let d = u,
    p;
  t[2] === s ? (p = t[3]) : ((p = s ? De(s) : void 0), (t[2] = s), (t[3] = p));
  let m = p,
    h = a?.length === 1,
    g = h || void 0,
    _ = h && `pointer-events-none`,
    v;
  t[4] === _ ? (v = t[5]) : ((v = o(`min-w-0 flex-1`, _)), (t[4] = _), (t[5] = v));
  let y = h ? `hidden` : void 0,
    b = h ? void 0 : n,
    x = h ? -1 : void 0,
    S;
  t[6] !== r || t[7] !== s
    ? ((S = (0, $.jsx)(me, { isLoading: r, selectedProfile: s })),
      (t[6] = r),
      (t[7] = s),
      (t[8] = S))
    : (S = t[8]);
  let C;
  t[9] !== m ||
  t[10] !== g ||
  t[11] !== v ||
  t[12] !== y ||
  t[13] !== b ||
  t[14] !== x ||
  t[15] !== S
    ? ((C = (0, $.jsx)(ne, {
        "aria-disabled": g,
        "aria-label": m,
        className: v,
        chevronClassName: y,
        disabled: b,
        tabIndex: x,
        children: S,
      })),
      (t[9] = m),
      (t[10] = g),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C))
    : (C = t[16]);
  let w = C,
    T;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(`span`, {
        className: `shrink-0 text-sm text-token-description-foreground`,
        children: (0, $.jsx)(M, {
          id: `settings.browserUse.profileImport.from`,
          defaultMessage: `From`,
          description: `Label before the browser profile selector`,
        }),
      })),
      (t[17] = T))
    : (T = t[17]);
  let E;
  return (
    t[18] !== n ||
    t[19] !== c ||
    t[20] !== l ||
    t[21] !== i ||
    t[22] !== a ||
    t[23] !== d ||
    t[24] !== h ||
    t[25] !== w
      ? ((E = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            T,
            h
              ? w
              : (0, $.jsx)(f, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  disabled: n,
                  open: i,
                  triggerButton: w,
                  onOpenChange: c,
                  children: (0, $.jsx)(k.Section, {
                    className: `max-h-[250px] overflow-y-auto`,
                    children: a?.map((e) => {
                      let t = Ee(e);
                      return (0, $.jsx)(
                        k.Item,
                        {
                          "aria-label": De(e),
                          RightIcon: t === d ? P : void 0,
                          onSelect: () => l(e),
                          children: (0, $.jsx)(we, { profile: e }),
                        },
                        t,
                      );
                    }),
                  }),
                }),
          ],
        })),
        (t[18] = n),
        (t[19] = c),
        (t[20] = l),
        (t[21] = i),
        (t[22] = a),
        (t[23] = d),
        (t[24] = h),
        (t[25] = w),
        (t[26] = E))
      : (E = t[26]),
    E
  );
}
function me(e) {
  let t = (0, Q.c)(4),
    { isLoading: n, selectedProfile: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(D, { className: `icon-2xs` }),
              (0, $.jsx)(M, {
                id: `settings.browserUse.profileImport.loadingProfiles`,
                defaultMessage: `Loading profiles…`,
                description: `Placeholder shown while importable browser profiles load`,
              }),
            ],
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
        ? ((e = (0, $.jsx)(M, {
            id: `settings.browserUse.profileImport.noProfiles`,
            defaultMessage: `No profiles found`,
            description: `Placeholder shown when no importable browser profiles are found`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === r ? (i = t[3]) : ((i = (0, $.jsx)(we, { profile: r })), (t[2] = r), (t[3] = i)), i
  );
}
function he(e) {
  let t = (0, Q.c)(16),
    { available: n, checked: r, disabled: i, kind: a, onChange: o } = e,
    s = `browser-profile-import-${a}-label`,
    c,
    l;
  if (a === `cookies`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(M, { ...Z.cookies })), (t[0] = e))
      : (e = t[0]),
      (c = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(oe, { className: `size-5 text-token-text-secondary` })), (t[1] = n))
      : (n = t[1]),
      (l = n));
  } else {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(M, { ...Z.passwords })), (t[2] = e))
      : (e = t[2]),
      (c = e));
    let n;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(le, { className: `size-5 text-token-text-secondary` })), (t[3] = n))
      : (n = t[3]),
      (l = n));
  }
  let u;
  t[4] !== c || t[5] !== s
    ? ((u = (0, $.jsx)(`span`, { id: s, children: c })), (t[4] = c), (t[5] = s), (t[6] = u))
    : (u = t[6]);
  let d = !n || i,
    f;
  t[7] !== r || t[8] !== s || t[9] !== o || t[10] !== d
    ? ((f = (0, $.jsx)(y, { "aria-labelledby": s, checked: r, disabled: d, onChange: o })),
      (t[7] = r),
      (t[8] = s),
      (t[9] = o),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  return (
    t[12] !== l || t[13] !== u || t[14] !== f
      ? ((p = (0, $.jsx)(K, { icon: l, label: u, control: f })),
        (t[12] = l),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function ge(e) {
  let t = (0, Q.c)(9),
    { checked: n, disabled: r, onChange: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`p`, {
        className: `font-medium text-token-text-primary`,
        children: (0, $.jsx)(M, {
          id: `settings.browserUse.profileImport.windowsChrome.title`,
          defaultMessage: `Administrator approval required`,
          description: `Title for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`p`, {
        className: `text-token-description-foreground`,
        children: (0, $.jsx)(M, {
          id: `settings.browserUse.profileImport.windowsChrome.description`,
          defaultMessage: `Windows protects Chrome cookies and passwords with App-Bound Encryption, so Codex also needs administrator approval`,
          description: `Description for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((s = (0, $.jsx)(z, { checked: n, disabled: r, onCheckedChange: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(M, {
          id: `settings.browserUse.profileImport.windowsChrome.consent`,
          defaultMessage: `I understand the app will request administrator approval to import this Chrome data`,
          description: `Consent label for elevated Windows Chrome browser data import`,
        }),
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] === s
      ? (l = t[8])
      : ((l = (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-token-input-border bg-token-foreground/[0.025] p-3 text-sm`,
          children: [
            a,
            o,
            (0, $.jsxs)(`label`, {
              className: `relative flex cursor-interaction items-start gap-2`,
              children: [s, c],
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = l)),
    l
  );
}
function _e(e) {
  let t = (0, Q.c)(2),
    { importFailed: n, profileDiscoveryFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ve, {
            children: (0, $.jsx)(M, {
              id: `settings.browserUse.profileImport.profilesError`,
              defaultMessage: `We couldn't load browser profiles. Close and reopen this dialog to try again`,
              description: `Error shown when browser profiles cannot be loaded for import`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ve, {
            children: (0, $.jsx)(M, {
              id: `settings.browserUse.profileImport.error`,
              defaultMessage: `We couldn't import all of this browser data. Try again`,
              description: `Error shown when browser profile import fails`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  return null;
}
function ve(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`p`, {
          className: `px-3 text-sm text-token-error-foreground`,
          role: `alert`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ye(e) {
  let t = (0, Q.c)(40),
    { cookieAccessFailureMessage: n, showCloseBrowserGuidance: r, result: i, onDone: a } = e,
    o = i.cookies?.status === `failed_to_copy`,
    s;
  t[0] === i.cookies ? (s = t[1]) : ((s = Oe(i.cookies)), (t[0] = i.cookies), (t[1] = s));
  let f = s,
    p = f && ((i.cookies?.imported ?? 0) > 0 || i.cookies?.status === `partial-success`),
    m = i.passwords?.profile,
    h = i.passwords?.account,
    g,
    _;
  t[2] !== i.passwords || t[3] !== m || t[4] !== h
    ? ((g = [i.passwords, m, h]),
      (_ = g.some(Oe)),
      (t[2] = i.passwords),
      (t[3] = m),
      (t[4] = h),
      (t[5] = g),
      (t[6] = _))
    : ((g = t[5]), (_ = t[6]));
  let v = _,
    y = g.some(xe),
    b;
  t[7] !== v || t[8] !== g
    ? ((b = v && g.some(be)), (t[7] = v), (t[8] = g), (t[9] = b))
    : (b = t[9]);
  let S = b,
    C = f || v,
    w;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(T, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(M, { ...ke.complete }),
        }),
      })),
      (t[10] = w))
    : (w = t[10]);
  let E = C ? `sr-only` : void 0,
    D;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(M, { ...ke.complete })), (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] === C
    ? (O = t[13])
    : ((O = (0, $.jsx)(L, {
        asChild: !0,
        children: (0, $.jsx)(`div`, {
          children: C
            ? (0, $.jsx)(M, {
                id: `settings.browserUse.profileImport.partialDescription`,
                defaultMessage: `Review the import status for each browser data type`,
                description: `Accessible description for a browser data import with one or more failed data types`,
              })
            : (0, $.jsx)(M, {
                id: `settings.browserUse.profileImport.completeDescription`,
                defaultMessage: `Your data is now available in the built-in browser`,
                description: `Description shown after browser data import completes`,
              }),
        }),
      })),
      (t[12] = C),
      (t[13] = O));
  let k;
  t[14] !== E || t[15] !== O
    ? ((k = (0, $.jsxs)(u, {
        children: [w, (0, $.jsx)(d, { subtitleClassName: E, title: D, subtitle: O })],
      })),
      (t[14] = E),
      (t[15] = O),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] !== y || t[18] !== v || t[19] !== S || t[20] !== i.passwords
    ? ((A =
        i.passwords != null &&
        (0, $.jsx)(Te, {
          failureMessage: v ? (0, $.jsx)(Ce, { accessFailed: y, partiallyFailed: S }) : void 0,
          kind: `passwords`,
        })),
      (t[17] = y),
      (t[18] = v),
      (t[19] = S),
      (t[20] = i.passwords),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== o ||
  t[23] !== n ||
  t[24] !== f ||
  t[25] !== p ||
  t[26] !== i.cookies ||
  t[27] !== i.source ||
  t[28] !== r
    ? ((j =
        i.cookies != null &&
        (0, $.jsx)(Te, {
          failureMessage: f
            ? (0, $.jsx)(Se, {
                accessFailed: o,
                showCloseBrowserGuidance: r,
                message: n,
                partiallyFailed: p,
                source: i.source,
              })
            : void 0,
          kind: `cookies`,
        })),
      (t[22] = o),
      (t[23] = n),
      (t[24] = f),
      (t[25] = p),
      (t[26] = i.cookies),
      (t[27] = i.source),
      (t[28] = r),
      (t[29] = j))
    : (j = t[29]);
  let N;
  t[30] !== A || t[31] !== j
    ? ((N = (0, $.jsx)(u, { children: (0, $.jsxs)(ae, { children: [A, j] }) })),
      (t[30] = A),
      (t[31] = j),
      (t[32] = N))
    : (N = t[32]);
  let P;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(M, {
        id: `settings.browserUse.profileImport.done`,
        defaultMessage: `Done`,
        description: `Button that closes the completed browser data import dialog`,
      })),
      (t[33] = P))
    : (P = t[33]);
  let I;
  t[34] === a
    ? (I = t[35])
    : ((I = (0, $.jsx)(u, {
        children: (0, $.jsx)(x, {
          className: c,
          expandSingleButton: !1,
          children: (0, $.jsx)(l, { color: `primary`, onClick: a, type: `button`, children: P }),
        }),
      })),
      (t[34] = a),
      (t[35] = I));
  let R;
  return (
    t[36] !== k || t[37] !== N || t[38] !== I
      ? ((R = (0, $.jsxs)(F, { children: [k, N, I] })),
        (t[36] = k),
        (t[37] = N),
        (t[38] = I),
        (t[39] = R))
      : (R = t[39]),
    R
  );
}
function be(e) {
  return (e?.imported ?? 0) > 0 || e?.status === `success` || e?.status === `partial-success`;
}
function xe(e) {
  return e?.status === `failed_to_copy`;
}
function Se(e) {
  let t = (0, Q.c)(7),
    { accessFailed: n, showCloseBrowserGuidance: r, message: i, partiallyFailed: a, source: o } = e;
  if (n) {
    if (i != null) {
      let e;
      return (
        t[0] === i
          ? (e = t[1])
          : ((e = (0, $.jsx)($.Fragment, { children: i })), (t[0] = i), (t[1] = e)),
        e
      );
    }
    if (!r) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(M, {
              id: `settings.browserUse.profileImport.cookieAccessError`,
              defaultMessage: `Codex couldn’t access this profile’s cookies. A device security policy may be blocking access`,
              description: `Error shown when device security may have blocked access to cookies during browser profile import`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    switch (o) {
      case `chrome`: {
        let e;
        return (
          t[3] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(M, {
                id: `settings.browserUse.profileImport.chromeCookieAccessError`,
                defaultMessage: `Codex couldn’t access this profile’s cookies. Chrome may still be running in the background. Close Chrome completely and try again. A device security policy may also block access`,
                description: `Error shown when Chrome or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[3] = e))
            : (e = t[3]),
          e
        );
      }
      case `atlas`: {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(M, {
                id: `settings.browserUse.profileImport.atlasCookieAccessError`,
                defaultMessage: `Codex couldn’t access this profile’s cookies. Atlas may still be running in the background. Close Atlas completely and try again. A device security policy may also block access`,
                description: `Error shown when Atlas or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
    }
  }
  if (a) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(M, {
            id: `settings.browserUse.profileImport.cookiesPartialError`,
            defaultMessage: `Some cookies couldn’t be imported`,
            description: `Error shown when some cookies could not be imported from a browser profile`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let s;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(M, {
          id: `settings.browserUse.profileImport.cookiesError`,
          defaultMessage: `Cookies couldn’t be imported`,
          description: `Error shown when cookies could not be imported from a browser profile`,
        })),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Ce(e) {
  let t = (0, Q.c)(3),
    { accessFailed: n, partiallyFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(M, {
            id: `settings.browserUse.profileImport.passwordsPartialError`,
            defaultMessage: `Some passwords couldn’t be imported`,
            description: `Error shown when some passwords could not be imported from a browser profile`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(M, {
            id: `settings.browserUse.profileImport.passwordAccessError`,
            defaultMessage: `Codex couldn’t access this profile’s passwords. A device security policy may be blocking access`,
            description: `Error shown when device security may have blocked access to passwords during browser profile import`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(M, {
          id: `settings.browserUse.profileImport.passwordsError`,
          defaultMessage: `Passwords couldn’t be imported`,
          description: `Error shown when passwords could not be imported from a browser profile`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function we(e) {
  let t = (0, Q.c)(10),
    { profile: n } = e,
    r;
  bb0: switch (n.source) {
    case `atlas`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`img`, { alt: ``, className: `size-4 shrink-0 rounded-[22%]`, src: W })),
          (t[0] = e))
        : (e = t[0]),
        (r = e));
      break bb0;
    }
    case `chrome`: {
      let e;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(H, { className: `size-4 shrink-0` })), (t[1] = e))
        : (e = t[1]),
        (r = e));
    }
  }
  let i;
  t[2] === n.appName
    ? (i = t[3])
    : ((i = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-primary`,
        children: n.appName,
      })),
      (t[2] = n.appName),
      (t[3] = i));
  let a = n.profileName || n.profileDirectoryName,
    o;
  t[4] === a
    ? (o = t[5])
    : ((o = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-tertiary`,
        children: a,
      })),
      (t[4] = a),
      (t[5] = o));
  let s;
  return (
    t[6] !== r || t[7] !== i || t[8] !== o
      ? ((s = (0, $.jsxs)(`span`, {
          className: `flex min-w-0 flex-1 items-center gap-1.5`,
          children: [r, i, o],
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Te(e) {
  let t = (0, Q.c)(12),
    { failureMessage: n, kind: r } = e,
    i,
    a;
  if (r === `cookies`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(oe, { className: `size-5 text-token-text-secondary` })), (t[0] = e))
      : (e = t[0]),
      (i = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(M, { ...Z.cookies })), (t[1] = n))
      : (n = t[1]),
      (a = n));
  } else {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(le, { className: `size-5 text-token-text-secondary` })), (t[2] = e))
      : (e = t[2]),
      (i = e));
    let n;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(M, { ...Z.passwords })), (t[3] = n))
      : (n = t[3]),
      (a = n));
  }
  let o, s;
  t[4] === n
    ? ((o = t[5]), (s = t[6]))
    : ((o =
        n == null
          ? (0, $.jsx)(g, { className: `size-5 text-token-text-primary` })
          : (0, $.jsx)(te, { className: `size-5 text-token-error-foreground` })),
      (s =
        n == null
          ? void 0
          : (0, $.jsx)(`span`, {
              className: `text-token-error-foreground`,
              role: `alert`,
              children: n,
            })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s));
  let c;
  return (
    t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== s
      ? ((c = (0, $.jsx)(K, { control: o, description: s, icon: i, label: a })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Ee(e) {
  return `${e.source}:${e.profilePath}`;
}
function De(e) {
  let t = e.profileName || e.profileDirectoryName;
  return `${e.appName} ${t}`;
}
function Oe(e) {
  return (e?.failed ?? 0) > 0 || e?.error != null || (e?.status != null && e.status !== `success`);
}
var Q,
  $,
  ke,
  Ae = e(() => {
    ((Q = O()),
      S(),
      E(),
      V(),
      v(),
      R(),
      I(),
      a(),
      w(),
      r(),
      n(),
      C(),
      b(),
      se(),
      U(),
      ue(),
      J(),
      q(),
      re(),
      ie(),
      de(),
      ($ = s()),
      (ke = j({
        complete: {
          id: `settings.browserUse.profileImport.complete`,
          defaultMessage: `Import complete`,
          description: `Title shown after browser data import completes`,
        },
      })));
  });
function je(e) {
  let t = (0, Pe.c)(51),
    { onClose: n, service: r } = e,
    i = A(`1834314516`),
    [a, o] = (0, Fe.useState)(``),
    [s, c] = (0, Fe.useState)(!0),
    [l, u] = (0, Fe.useState)(!0),
    [d, f] = (0, Fe.useState)(null),
    p;
  t[0] === r ? (p = t[1]) : ((p = G(r, !0)), (t[0] = r), (t[1] = p));
  let h = m(p),
    g;
  t[2] === r ? (g = t[3]) : ((g = { mutationFn: (e) => B(r, e) }), (t[2] = r), (t[3] = g));
  let v = _(g),
    y = h.data,
    b;
  t[4] !== y || t[5] !== a
    ? ((b = y?.find((e) => Ne(e) === a) ?? Y(y ?? [])[0] ?? y?.[0] ?? null),
      (t[4] = y),
      (t[5] = a),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S = x?.hasCookies === !0 && s,
    C = x?.hasPasswords === !0 && l,
    w = typeof document < `u` && document.documentElement.dataset.codexOs === `win32`,
    T = typeof document < `u` && document.documentElement.dataset.codexOs === `darwin`,
    E = w && x?.source === `chrome`,
    D;
  t[7] === x ? (D = t[8]) : ((D = x ? Ne(x) : null), (t[7] = x), (t[8] = D));
  let O = D,
    k = O != null && d === O,
    j = v.data ?? null,
    M,
    P;
  (t[9] !== i || t[10] !== n
    ? ((M = () => {
        i || n();
      }),
      (P = [i, n]),
      (t[9] = i),
      (t[10] = n),
      (t[11] = M),
      (t[12] = P))
    : ((M = t[11]), (P = t[12])),
    (0, Fe.useEffect)(M, P));
  let F;
  t[13] !== v.isPending || t[14] !== n
    ? ((F = () => {
        v.isPending || n();
      }),
      (t[13] = v.isPending),
      (t[14] = n),
      (t[15] = F))
    : (F = t[15]);
  let I = F,
    L;
  t[16] === I
    ? (L = t[17])
    : ((L = (e) => {
        e || I();
      }),
      (t[16] = I),
      (t[17] = L));
  let R = !v.isPending && j == null,
    z;
  t[18] === j ? (z = t[19]) : ((z = void 0), (t[18] = j), (t[19] = z));
  let V;
  t[20] === O
    ? (V = t[21])
    : ((V = (e) => {
        f(e ? O : null);
      }),
      (t[20] = O),
      (t[21] = V));
  let H;
  t[22] !== S || t[23] !== v || t[24] !== C || t[25] !== E || t[26] !== x
    ? ((H = () => {
        x != null && v.mutate(Me(x, S, C, E));
      }),
      (t[22] = S),
      (t[23] = v),
      (t[24] = C),
      (t[25] = E),
      (t[26] = x),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] === v
    ? (U = t[29])
    : ((U = (e) => {
        (o(Ne(e)), f(null), v.reset());
      }),
      (t[28] = v),
      (t[29] = U));
  let W;
  t[30] !== I ||
  t[31] !== k ||
  t[32] !== s ||
  t[33] !== v.isError ||
  t[34] !== v.isPending ||
  t[35] !== l ||
  t[36] !== y ||
  t[37] !== h.isError ||
  t[38] !== h.isLoading ||
  t[39] !== E ||
  t[40] !== j ||
  t[41] !== x ||
  t[42] !== z ||
  t[43] !== V ||
  t[44] !== H ||
  t[45] !== U
    ? ((W = (0, Ie.jsx)(fe, {
        cookieAccessFailureMessage: z,
        elevatedChromeConsent: k,
        hasImportError: v.isError,
        importCookies: s,
        importPasswords: l,
        isImporting: v.isPending,
        isLoadingProfiles: h.isLoading,
        showCloseBrowserGuidance: T,
        profiles: y,
        profilesHaveError: h.isError,
        requiresElevatedChromeConsent: E,
        result: j,
        selectedProfile: x,
        onCancel: I,
        onElevatedChromeConsentChange: V,
        onImport: H,
        onImportCookiesChange: c,
        onImportPasswordsChange: u,
        onSelectProfile: U,
      })),
      (t[30] = I),
      (t[31] = k),
      (t[32] = s),
      (t[33] = v.isError),
      (t[34] = v.isPending),
      (t[35] = l),
      (t[36] = y),
      (t[37] = h.isError),
      (t[38] = h.isLoading),
      (t[39] = E),
      (t[40] = j),
      (t[41] = x),
      (t[42] = z),
      (t[43] = V),
      (t[44] = H),
      (t[45] = U),
      (t[46] = W))
    : (W = t[46]);
  let K;
  return (
    t[47] !== W || t[48] !== L || t[49] !== R
      ? ((K = (0, Ie.jsx)(N, {
          open: !0,
          onOpenChange: L,
          showDialogClose: R,
          size: `narrow`,
          children: W,
        })),
        (t[47] = W),
        (t[48] = L),
        (t[49] = R),
        (t[50] = K))
      : (K = t[50]),
    K
  );
}
function Me(e, t, n, r) {
  let i = { source: e.source, profilePath: e.profilePath, importCookies: t, importPasswords: n };
  return r ? { ...i, allowElevatedChromeDecryption: !0 } : i;
}
function Ne(e) {
  return `${e.source}:${e.profilePath}`;
}
var Pe, Fe, Ie;
e(() => {
  ((Pe = O()), i(), (Fe = t(h(), 1)), I(), Ae(), p(), ee(), (Ie = s()));
})();
export { je as BrowserProfileImportDialogModal };
//# sourceMappingURL=browser-profile-import-dialog.js.map
