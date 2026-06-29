import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  bl as r,
  dl as i,
  ft as a,
  kl as o,
  ot as s,
  sc as c,
  st as l,
  tc as u,
  ut as d,
  xl as f,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as p,
  Go as m,
  Ha as h,
  Ho as g,
  Ia as _,
  Jp as v,
  Ka as y,
  Ma as b,
  Na as x,
  Ua as S,
  Uo as C,
  Wa as w,
  Wo as T,
  Yp as E,
  _p as D,
  fp as O,
  gr as k,
  hr as A,
  ja as j,
  mp as M,
  vp as N,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  aa as P,
  aw as F,
  cC as I,
  cw as L,
  ia as R,
  oC as z,
  uw as B,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  A as V,
  Lt as H,
  M as U,
  N as ee,
  O as te,
  Rt as ne,
  et as W,
  f as re,
  gt as ie,
  j as ae,
  k as oe,
  tt as se,
  u as G,
  vt as ce,
} from "./app-initial~app-main~automations-page.js";
import {
  f as le,
  l as ue,
  p as K,
  u as de,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js";
import {
  F as fe,
  I as pe,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
import {
  Dt as me,
  Et as he,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  A as ge,
  D as _e,
  F as ve,
  G as ye,
  H as be,
  I as xe,
  L as Se,
  O as Ce,
  T as q,
  V as we,
  _ as Te,
  d as Ee,
  h as J,
  j as De,
  k as Oe,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  a as ke,
  i as Ae,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as je,
  t as Me,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as Ne,
  t as Pe,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import { i as Fe, n as Ie, r as Le, t as Re } from "./keyboard-event-accelerator.js";
function ze() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Be, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Be() {
  let e = B(),
    { platform: t } = K(),
    n = r(),
    i = c(y),
    o = P(),
    s = I(`1244621283`),
    u = I(`1372061905`),
    d = I(`3264431617`),
    f = I(`4100906017`),
    p = h(i, `switchToMode1`) > 0,
    [m, g] = (0, Z.useState)(``),
    [_, b] = (0, Z.useState)(!1),
    [x, C] = (0, Z.useState)(null),
    [w, T] = (0, Z.useState)({}),
    [E, D] = (0, Z.useState)(!1),
    [k, A] = (0, Z.useState)(null),
    { data: j } = c(Ee),
    M = a(`set-codex-command-keybinding`, {
      onSuccess: (e, { commandId: t }) => {
        let r = l(`codex-command-keymap-state`);
        n.setQueryData(r, e);
        let i = [r];
        (t === `hotkeyWindow` && i.push(G),
          (t === `globalDictationHold` || t === `globalDictationToggle`) &&
            i.push(l(`global-dictation-hotkey-state`)),
          Promise.all(i.map((e) => o(e))));
      },
    }),
    N = a(`reset-codex-command-keybindings`, {
      onSuccess: (e) => {
        let t = l(`codex-command-keymap-state`);
        (n.setQueryData(t, e),
          Promise.all([t, G, l(`global-dictation-hotkey-state`)].map((e) => o(e))));
      },
    }),
    F = $.filter((e) =>
      ee(e.id, {
        modeSwitchAvailable: p,
        isGlobalDictationEnabled: s,
        isHotkeyWindowEnabled: u,
        isProcessManagerEnabled: d,
        isRestrictedCommandEnabled: !1,
        isVoiceInputEnabled: f,
      }),
    )
      .map((t) => ({ command: t, title: W(t, e, S(i, t.id)).title }))
      .sort((e, t) => V(e.command, t.command)),
    R = m.trim(),
    z =
      R.length === 0
        ? F
        : F.filter(({ command: n, title: r }) => {
            let a = W(n, e, S(i, n.id)).description;
            return _
              ? J(n.id, j, t).some(({ label: e }) => We(e, R))
              : [n.id, r, a].some((e) => de(e, R) > 0);
          });
  return (0, Q.jsxs)(ie, {
    title: (0, Q.jsx)(Ae, { slug: `keyboard-shortcuts` }),
    children: [
      (0, Q.jsx)(Pe, {
        children: (0, Q.jsxs)(Pe.Content, {
          children: [
            j == null
              ? null
              : (0, Q.jsx)(te, {
                  autoFocus: _,
                  isSearchingByKeystrokes: _,
                  trailingContent: (0, Q.jsx)(O, {
                    tooltipContent: (0, Q.jsx)(L, {
                      id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                      defaultMessage: `Search by keystrokes`,
                      description: `Tooltip label for the keyboard shortcut search mode button`,
                    }),
                    children: (0, Q.jsx)(v, {
                      "aria-label": e.formatMessage({
                        id: `settings.keyboardShortcuts.searchByKeystrokes.ariaLabel`,
                        defaultMessage: `Search by keystrokes`,
                        description: `Accessible label for the keyboard shortcut search mode button`,
                      }),
                      "aria-pressed": _,
                      color: _ ? `secondary` : `ghost`,
                      size: `toolbar`,
                      uniform: !0,
                      onMouseDown: (e) => {
                        e.preventDefault();
                      },
                      onClick: () => {
                        (g(``), b((e) => !e));
                      },
                      children: (0, Q.jsx)(H, { className: `icon-sm` }),
                    }),
                  }),
                  value: m,
                  onKeyDown: _
                    ? (e) => {
                        if (e.repeat) return;
                        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
                          (g(``), b(!1));
                          return;
                        }
                        let n = Re(e.nativeEvent);
                        if (n != null) {
                          let e = q(n, t === `macOS`, t === `linux`),
                            r = m.length === 0 ? e : `${m} ${e}`;
                          g(
                            m.length > 0 &&
                              F.some(({ command: e }) =>
                                J(e.id, j, t).some(({ label: e }) => We(e, r)),
                              )
                              ? r
                              : e,
                          );
                        }
                      }
                    : void 0,
                  onValueChange: g,
                }),
            (0, Q.jsxs)(Me, {
              className: `overflow-hidden`,
              children: [
                j == null
                  ? (0, Q.jsx)(`div`, {
                      className: `px-4 py-3 text-sm text-token-text-secondary`,
                      children: (0, Q.jsx)(L, {
                        id: `settings.keyboardShortcuts.loading`,
                        defaultMessage: `Loading shortcuts…`,
                        description: `Loading label while keyboard shortcuts are being fetched`,
                      }),
                    })
                  : null,
                j == null
                  ? null
                  : (0, Q.jsxs)(`table`, {
                      className: `w-full table-fixed border-collapse text-sm`,
                      children: [
                        (0, Q.jsxs)(`colgroup`, {
                          children: [
                            (0, Q.jsx)(`col`, {}),
                            (0, Q.jsx)(`col`, { className: `w-64` }),
                            (0, Q.jsx)(`col`, { className: `w-32` }),
                          ],
                        }),
                        (0, Q.jsx)(`thead`, {
                          className: `text-left text-token-text-tertiary`,
                          children: (0, Q.jsxs)(`tr`, {
                            className: `border-b border-token-border`,
                            children: [
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2 font-medium`,
                                children: (0, Q.jsx)(L, {
                                  id: `settings.keyboardShortcuts.table.command`,
                                  defaultMessage: `Command`,
                                  description: `Column heading for keyboard shortcut commands`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2 font-medium`,
                                children: (0, Q.jsx)(L, {
                                  id: `settings.keyboardShortcuts.table.keybinding`,
                                  defaultMessage: `Keybinding`,
                                  description: `Column heading for keyboard shortcut keybindings`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2`,
                                children: (0, Q.jsx)(`span`, {
                                  className: `sr-only`,
                                  children: (0, Q.jsx)(L, {
                                    id: `settings.keyboardShortcuts.table.actions`,
                                    defaultMessage: `Actions`,
                                    description: `Accessible heading for keyboard shortcut row actions`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, Q.jsxs)(`tbody`, {
                          children: [
                            z.length === 0
                              ? (0, Q.jsx)(`tr`, {
                                  children: (0, Q.jsx)(`td`, {
                                    className: `px-4 py-3 text-token-text-secondary`,
                                    colSpan: 3,
                                    children: (0, Q.jsx)(L, {
                                      id: `settings.keyboardShortcuts.noMatches`,
                                      defaultMessage: `No matching shortcuts`,
                                      description: `Empty state shown when the keyboard shortcuts search has no matches`,
                                    }),
                                  }),
                                })
                              : null,
                            z.map(({ command: n, title: r }, a) => {
                              let o = W(n, e, S(i, n.id)).description,
                                s = J(n.id, j, t),
                                c = j.bindings.some((e) => e.command === n.id),
                                l = Ze({
                                  commandId: n.id,
                                  hasCustomBinding: c,
                                  platform: t,
                                  shortcutEntries: s,
                                }),
                                u = x?.commandId === n.id && x.mode === `append`,
                                d = s.length === 0 ? [null] : s,
                                f = u && s.length > 0 ? [...s, null] : d;
                              return (0, Q.jsx)(
                                Z.Fragment,
                                {
                                  children: f.map((u, d) => {
                                    let p = d === 0,
                                      m = `px-4 py-0.5`;
                                    f.length === 1
                                      ? (m = `px-4 py-2`)
                                      : p
                                        ? (m = `px-4 pt-2 pb-0.5`)
                                        : d === f.length - 1 && (m = `px-4 pt-0.5 pb-2`);
                                    let h =
                                      x?.commandId === n.id &&
                                      (x.mode === `append`
                                        ? u == null && d === s.length
                                        : x.accelerator === (u?.accelerator ?? null));
                                    return (0, Q.jsxs)(
                                      `tr`,
                                      {
                                        className:
                                          p && a > 0
                                            ? `group border-t border-token-border align-middle`
                                            : `group align-middle`,
                                        children: [
                                          (0, Q.jsx)(`td`, {
                                            className: m,
                                            children: p
                                              ? (0, Q.jsxs)(Q.Fragment, {
                                                  children: [
                                                    (0, Q.jsx)(`span`, {
                                                      className: `block truncate text-token-text-primary`,
                                                      children: r,
                                                    }),
                                                    o === ``
                                                      ? null
                                                      : (0, Q.jsx)(O, {
                                                          openWhen: `trigger-overflows`,
                                                          tooltipContent: o,
                                                          children: (0, Q.jsx)(`span`, {
                                                            className: `mt-0.5 block truncate text-xs text-token-text-secondary`,
                                                            children: o,
                                                          }),
                                                        }),
                                                    w[n.id] == null
                                                      ? null
                                                      : (0, Q.jsx)(`span`, {
                                                          className: `mt-0.5 block text-xs text-token-error-foreground`,
                                                          children: w[n.id],
                                                        }),
                                                  ],
                                                })
                                              : null,
                                          }),
                                          (0, Q.jsx)(`td`, {
                                            className: m,
                                            colSpan: h ? 2 : void 0,
                                            children: h
                                              ? (0, Q.jsx)(He, {
                                                  allowsBareModifiers: xe(n),
                                                  allowsSequences: n.kind === `webview`,
                                                  commandTitle: r,
                                                  conflictingCommandTitle:
                                                    x.conflictingCommandTitle,
                                                  onCancel: () => {
                                                    C(null);
                                                  },
                                                  onCapture: (r) => {
                                                    if (
                                                      u != null &&
                                                      Ke(u.accelerator, r, t === `macOS`)
                                                    ) {
                                                      C(null);
                                                      return;
                                                    }
                                                    let a = Ge({
                                                      accelerator: r,
                                                      commandId: n.id,
                                                      intl: e,
                                                      keymapState: j,
                                                      platform: t,
                                                      registeredCommands: i,
                                                    });
                                                    if (a != null) {
                                                      C((e) =>
                                                        e?.commandId === n.id
                                                          ? { ...e, conflictingCommandTitle: a }
                                                          : e,
                                                      );
                                                      return;
                                                    }
                                                    let o;
                                                    ((o =
                                                      x.mode === `append`
                                                        ? { type: `append`, accelerator: r }
                                                        : u == null
                                                          ? { type: `set`, accelerator: r }
                                                          : {
                                                              type: `replace`,
                                                              previousAccelerator: u.accelerator,
                                                              accelerator: r,
                                                            }),
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: M,
                                                        setErrorByCommandId: T,
                                                        update: o,
                                                      }).finally(() => {
                                                        C((e) => (e === x ? null : e));
                                                      }));
                                                  },
                                                })
                                              : (0, Q.jsxs)(`div`, {
                                                  className: `flex items-center gap-1`,
                                                  children: [
                                                    (0, Q.jsx)(Je, {
                                                      shortcutLabel: u?.label ?? null,
                                                    }),
                                                    (0, Q.jsx)(Xe, {
                                                      canAppend: !we(n),
                                                      commandTitle: r,
                                                      hasShortcut: u != null,
                                                      isPending: M.isPending,
                                                      onStartCapture: (e) => {
                                                        (T((e) => ({ ...e, [n.id]: void 0 })),
                                                          C({
                                                            commandId: n.id,
                                                            accelerator:
                                                              e === `append`
                                                                ? null
                                                                : (u?.accelerator ?? null),
                                                            conflictingCommandTitle: null,
                                                            mode: e,
                                                          }));
                                                      },
                                                    }),
                                                  ],
                                                }),
                                          }),
                                          h
                                            ? null
                                            : (0, Q.jsx)(`td`, {
                                                className: m,
                                                children: (0, Q.jsx)(Ye, {
                                                  commandTitle: r,
                                                  hasCustomBinding: c,
                                                  hasShortcut: u != null,
                                                  isPending: M.isPending,
                                                  showReset: d === l,
                                                  onReset: () => {
                                                    Y({
                                                      commandId: n.id,
                                                      intl: e,
                                                      setCommandKeybinding: M,
                                                      setErrorByCommandId: T,
                                                      update: { type: `reset` },
                                                    });
                                                  },
                                                  onClear: () => {
                                                    u != null &&
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: M,
                                                        setErrorByCommandId: T,
                                                        update: {
                                                          type: `remove`,
                                                          accelerator: u.accelerator,
                                                        },
                                                      });
                                                  },
                                                }),
                                              }),
                                        ],
                                      },
                                      `${n.id}-${u?.accelerator ?? `unassigned`}`,
                                    );
                                  }),
                                },
                                n.id,
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
            j != null && j.bindings.length > 0
              ? (0, Q.jsx)(`div`, {
                  className: `flex items-center justify-end gap-2`,
                  children: (0, Q.jsx)(v, {
                    color: `secondary`,
                    disabled: N.isPending,
                    onClick: () => {
                      (A(null), D(!0));
                    },
                    children: (0, Q.jsx)(L, {
                      id: `settings.keyboardShortcuts.resetAll`,
                      defaultMessage: `Reset all to defaults`,
                      description: `Button label to reset all customized keyboard shortcuts to their defaults`,
                    }),
                  }),
                })
              : null,
          ],
        }),
      }),
      (0, Q.jsx)(Ve, {
        error: k,
        isPending: N.isPending,
        open: E,
        onOpenChange: (e) => {
          (D(e), e || A(null));
        },
        onConfirm: async () => {
          A(null);
          try {
            (await N.mutateAsync(void 0), D(!1));
          } catch (t) {
            A(
              t instanceof Error
                ? t.message
                : e.formatMessage({
                    id: `settings.keyboardShortcuts.resetAllError`,
                    defaultMessage: `Failed to reset keyboard shortcuts`,
                    description: `Fallback error shown when resetting all customized keyboard shortcuts fails`,
                  }),
            );
          }
        },
      }),
    ],
  });
}
function Ve(e) {
  let t = (0, X.c)(28),
    { error: n, isPending: r, onConfirm: i, onOpenChange: a, open: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(L, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c = s,
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(L, {
        id: `settings.keyboardShortcuts.resetAllConfirm.description`,
        defaultMessage: `This will discard all custom shortcuts and restore the defaults`,
        description: `Warning shown before resetting all customized keyboard shortcuts`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u = l,
    d;
  t[2] === i
    ? (d = t[3])
    : ((d = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = d));
  let f, m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(T, { className: `sr-only`, children: c })),
      (m = (0, Q.jsx)(C, { className: `sr-only`, children: u })),
      (t[4] = f),
      (t[5] = m))
    : ((f = t[4]), (m = t[5]));
  let h;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(x, { children: (0, Q.jsx)(b, { title: c, subtitle: u }) })), (t[6] = h))
    : (h = t[6]);
  let _;
  t[7] === n
    ? (_ = t[8])
    : ((_ =
        n == null
          ? null
          : (0, Q.jsx)(x, { className: `text-token-error-foreground`, children: n })),
      (t[7] = n),
      (t[8] = _));
  let y;
  t[9] === a
    ? (y = t[10])
    : ((y = () => {
        a(!1);
      }),
      (t[9] = a),
      (t[10] = y));
  let S;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(L, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (t[11] = S))
    : (S = t[11]);
  let w;
  t[12] === y
    ? (w = t[13])
    : ((w = (0, Q.jsx)(v, { color: `secondary`, onClick: y, children: S })),
      (t[12] = y),
      (t[13] = w));
  let E;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(L, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === r
    ? (D = t[16])
    : ((D = (0, Q.jsx)(v, { color: `danger`, loading: r, type: `submit`, children: E })),
      (t[15] = r),
      (t[16] = D));
  let O;
  t[17] !== w || t[18] !== D
    ? ((O = (0, Q.jsx)(x, { children: (0, Q.jsxs)(j, { children: [w, D] }) })),
      (t[17] = w),
      (t[18] = D),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== O || t[21] !== d || t[22] !== _
    ? ((k = (0, Q.jsxs)(p, { as: `form`, onSubmit: d, children: [f, m, h, _, O] })),
      (t[20] = O),
      (t[21] = d),
      (t[22] = _),
      (t[23] = k))
    : (k = t[23]);
  let A;
  return (
    t[24] !== a || t[25] !== o || t[26] !== k
      ? ((A = (0, Q.jsx)(g, {
          open: o,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: k,
        })),
        (t[24] = a),
        (t[25] = o),
        (t[26] = k),
        (t[27] = A))
      : (A = t[27]),
    A
  );
}
function He(e) {
  let t = (0, X.c)(49),
    {
      allowsBareModifiers: n,
      allowsSequences: r,
      commandTitle: i,
      conflictingCommandTitle: a,
      onCancel: o,
      onCapture: c,
    } = e,
    l = B(),
    { platform: u } = K(),
    d = (0, Z.useRef)(0),
    f = (0, Z.useRef)(null),
    p = (0, Z.useRef)(null),
    m = (0, Z.useRef)(null),
    [h, g] = (0, Z.useState)(null),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        (m.current != null && (clearTimeout(m.current), (m.current = null)),
          (p.current = null),
          g(null));
      }),
      (t[0] = _))
    : (_ = t[0]);
  let y = _,
    b;
  t[1] === c
    ? (b = t[2])
    : ((b = (e) => {
        ((d.current += 1), (f.current = null), y(), c(e));
      }),
      (t[1] = c),
      (t[2] = b));
  let x = b,
    S;
  t[3] === o
    ? (S = t[4])
    : ((S = () => {
        ((d.current += 1), (f.current = null), y(), o());
      }),
      (t[3] = o),
      (t[4] = S));
  let C = S,
    w;
  t[5] !== r || t[6] !== x
    ? ((w = (e) => {
        let t = p.current;
        if (t != null) {
          x(`${t} ${e}`);
          return;
        }
        if (!r) {
          x(e);
          return;
        }
        if (e.includes(`+`)) {
          x(e);
          return;
        }
        ((p.current = e),
          g(`${q(e)} …`),
          (m.current = setTimeout(() => {
            p.current === e && x(e);
          }, Ce)));
      }),
      (t[5] = r),
      (t[6] = x),
      (t[7] = w))
    : (w = t[7]);
  let T = w,
    E;
  t[8] === x
    ? (E = t[9])
    : ((E = async (e) => {
        try {
          let { hotkey: t } = await s(`global-dictation-capture-fn-hotkey`);
          t != null && d.current === e && x(t);
        } catch {}
      }),
      (t[8] = x),
      (t[9] = E));
  let D = (0, Z.useEffectEvent)(E),
    O;
  t[10] !== n || t[11] !== D || t[12] !== u
    ? ((O = () => {
        if (!(!n || u !== `macOS`))
          return (
            (d.current += 1),
            D(d.current),
            () => {
              ((d.current += 1), (f.current = null), y());
            }
          );
      }),
      (t[10] = n),
      (t[11] = D),
      (t[12] = u),
      (t[13] = O))
    : (O = t[13]);
  let k;
  (t[14] !== n || t[15] !== u ? ((k = [n, u]), (t[14] = n), (t[15] = u), (t[16] = k)) : (k = t[16]),
    (0, Z.useEffect)(O, k));
  let A, j;
  (t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => () => {
        (m.current != null && clearTimeout(m.current), (p.current = null));
      }),
      (j = []),
      (t[17] = A),
      (t[18] = j))
    : ((A = t[17]), (j = t[18])),
    (0, Z.useEffect)(A, j));
  let M;
  t[19] !== l || t[20] !== h
    ? ((M =
        h ??
        l.formatMessage({
          id: `settings.keyboardShortcuts.capturePrompt`,
          defaultMessage: `Press shortcut`,
          description: `Prompt shown while capturing a keyboard shortcut for a command`,
        })),
      (t[19] = l),
      (t[20] = h),
      (t[21] = M))
    : (M = t[21]);
  let N;
  t[22] !== n || t[23] !== C || t[24] !== T
    ? ((N = (e) => {
        if (e.repeat) return;
        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
          C();
          return;
        }
        if (n) {
          let t = Le(e.nativeEvent);
          if (t != null) {
            f.current = t;
            return;
          }
        }
        let t = Re(e.nativeEvent);
        t != null && T(t);
      }),
      (t[22] = n),
      (t[23] = C),
      (t[24] = T),
      (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] !== n || t[27] !== x
    ? ((P = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), !n)) return;
        let t = Fe(e.nativeEvent);
        t != null && f.current === t && x(t);
      }),
      (t[26] = n),
      (t[27] = x),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] !== i || t[30] !== l
    ? ((F = l.formatMessage(
        {
          id: `settings.keyboardShortcuts.captureAriaLabel`,
          defaultMessage: `Shortcut capture for {commandTitle}`,
          description: `Aria label for the shortcut capture input for a command`,
        },
        { commandTitle: i },
      )),
      (t[29] = i),
      (t[30] = l),
      (t[31] = F))
    : (F = t[31]);
  let I;
  t[32] !== C || t[33] !== M || t[34] !== N || t[35] !== P || t[36] !== F
    ? ((I = (0, Q.jsx)(`input`, {
        "data-codex-shortcut-capture": !0,
        autoFocus: !0,
        readOnly: !0,
        value: M,
        onBlur: C,
        onKeyDown: N,
        onKeyUp: P,
        "aria-label": F,
        className: `h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none`,
      })),
      (t[32] = C),
      (t[33] = M),
      (t[34] = N),
      (t[35] = P),
      (t[36] = F),
      (t[37] = I))
    : (I = t[37]);
  let R;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(L, {
        id: `settings.keyboardShortcuts.captureCancel`,
        defaultMessage: `Cancel`,
        description: `Button label to cancel shortcut capture`,
      })),
      (t[38] = R))
    : (R = t[38]);
  let z;
  t[39] === o
    ? (z = t[40])
    : ((z = (0, Q.jsx)(v, {
        color: `ghost`,
        size: `toolbar`,
        onMouseDown: Ue,
        onClick: o,
        children: R,
      })),
      (t[39] = o),
      (t[40] = z));
  let V;
  t[41] !== I || t[42] !== z
    ? ((V = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [I, z] })),
      (t[41] = I),
      (t[42] = z),
      (t[43] = V))
    : (V = t[43]);
  let H;
  t[44] === a
    ? (H = t[45])
    : ((H =
        a == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `text-xs text-token-editor-warning-foreground`,
              children: (0, Q.jsx)(L, {
                id: `settings.keyboardShortcuts.captureConflict`,
                defaultMessage: `Used by {commandTitle}`,
                description: `Warning shown while capturing a shortcut that is already used by another command`,
                values: { commandTitle: a },
              }),
            })),
      (t[44] = a),
      (t[45] = H));
  let U;
  return (
    t[46] !== V || t[47] !== H
      ? ((U = (0, Q.jsxs)(`div`, {
          className: `flex w-full flex-col items-start gap-1`,
          children: [V, H],
        })),
        (t[46] = V),
        (t[47] = H),
        (t[48] = U))
      : (U = t[48]),
    U
  );
}
function Ue(e) {
  e.preventDefault();
}
function We(e, t) {
  return e === t || e.startsWith(`${t} `);
}
function Ge({
  accelerator: e,
  commandId: t,
  intl: n,
  keymapState: r,
  platform: i,
  registeredCommands: a,
}) {
  for (let o of $)
    if (
      o.id !== t &&
      !ve(o.id, t) &&
      J(o.id, r, i).some((t) => qe(t.accelerator, e, i === `macOS`))
    )
      return W(o, n, S(a, o.id)).title;
  return null;
}
function Ke(e, t, n) {
  return q(e, n) === q(t, n);
}
function qe(e, t, n) {
  let r = Oe(e).map((e) => q(e, n)),
    i = Oe(t).map((e) => q(e, n)),
    a = Math.min(r.length, i.length);
  return a > 0 && (r.length === a || i.length === a) && r.slice(0, a).every((e, t) => e === i[t]);
}
function Je(e) {
  let t = (0, X.c)(2),
    { shortcutLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `flex min-h-8 items-center gap-1 text-token-text-secondary`,
          children:
            n == null
              ? (0, Q.jsx)(L, {
                  id: `settings.keyboardShortcuts.unassigned`,
                  defaultMessage: `Unassigned`,
                  description: `Label shown when an action has no shortcut`,
                })
              : (0, Q.jsx)(D, { className: `!px-2 !py-1 !text-sm`, keysLabel: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ye(e) {
  let t = (0, X.c)(20),
    {
      commandTitle: n,
      hasCustomBinding: r,
      hasShortcut: i,
      isPending: a,
      showReset: o,
      onClear: s,
      onReset: c,
    } = e,
    l = B(),
    u;
  t[0] !== n || t[1] !== l
    ? ((u = l.formatMessage(
        {
          id: `settings.keyboardShortcuts.clearAriaLabel`,
          defaultMessage: `Clear shortcut for {commandTitle}`,
          description: `Aria label for clearing a shortcut`,
        },
        { commandTitle: n },
      )),
      (t[0] = n),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] !== n || t[4] !== l
    ? ((f = l.formatMessage(
        {
          id: `settings.keyboardShortcuts.resetAriaLabel`,
          defaultMessage: `Reset shortcut for {commandTitle}`,
          description: `Aria label for resetting a shortcut to its default`,
        },
        { commandTitle: n },
      )),
      (t[3] = n),
      (t[4] = l),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== d || t[7] !== i || t[8] !== a || t[9] !== s
    ? ((m = i
        ? (0, Q.jsx)(O, {
            tooltipContent: d,
            children: (0, Q.jsx)(v, {
              "aria-label": d,
              className: `disabled:!opacity-100`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: a,
              onClick: s,
              children: (0, Q.jsx)(he, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[6] = d),
      (t[7] = i),
      (t[8] = a),
      (t[9] = s),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== r || t[12] !== a || t[13] !== c || t[14] !== p || t[15] !== o
    ? ((h =
        o && r
          ? (0, Q.jsx)(O, {
              tooltipContent: p,
              children: (0, Q.jsx)(v, {
                "aria-label": p,
                className: `disabled:!opacity-100`,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                disabled: a,
                onClick: c,
                children: (0, Q.jsx)(fe, { className: `icon-xs` }),
              }),
            })
          : null),
      (t[11] = r),
      (t[12] = a),
      (t[13] = c),
      (t[14] = p),
      (t[15] = o),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== m || t[18] !== h
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-end gap-1`,
          children: [m, h],
        })),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Xe(e) {
  let t = (0, X.c)(28),
    { canAppend: n, commandTitle: r, hasShortcut: i, isPending: a, onStartCapture: o } = e,
    s = B(),
    [c, l] = (0, Z.useState)(!1),
    u;
  if (!i) {
    let e;
    (t[0] !== r || t[1] !== s
      ? ((e = s.formatMessage(
          {
            id: `settings.keyboardShortcuts.setAriaLabel`,
            defaultMessage: `Set shortcut for {commandTitle}`,
            description: `Aria label for setting a shortcut for a command`,
          },
          { commandTitle: r },
        )),
        (t[0] = r),
        (t[1] = s),
        (t[2] = e))
      : (e = t[2]),
      (u = e));
  } else if (c) {
    let e;
    (t[3] !== r || t[4] !== s
      ? ((e = s.formatMessage(
          {
            id: `settings.keyboardShortcuts.createAriaLabel`,
            defaultMessage: `Create new shortcut for {commandTitle}`,
            description: `Aria label for adding another shortcut for a command`,
          },
          { commandTitle: r },
        )),
        (t[3] = r),
        (t[4] = s),
        (t[5] = e))
      : (e = t[5]),
      (u = e));
  } else {
    let e;
    (t[6] !== r || t[7] !== s
      ? ((e = s.formatMessage(
          {
            id: `settings.keyboardShortcuts.changeAriaLabel`,
            defaultMessage: `Change shortcut for {commandTitle}`,
            description: `Aria label for changing a shortcut for a command`,
          },
          { commandTitle: r },
        )),
        (t[6] = r),
        (t[7] = s),
        (t[8] = e))
      : (e = t[8]),
      (u = e));
  }
  let d, f;
  t[9] !== n || t[10] !== i
    ? ((d = (e) => {
        l(n && i && e.shiftKey);
      }),
      (f = (e) => {
        l(n && i && e.shiftKey);
      }),
      (t[9] = n),
      (t[10] = i),
      (t[11] = d),
      (t[12] = f))
    : ((d = t[11]), (f = t[12]));
  let p;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => {
        l(!1);
      }),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== n || t[15] !== i || t[16] !== o
    ? ((m = (e) => {
        let t = `set`;
        (i && (t = n && e.shiftKey ? `append` : `replace`), o(t));
      }),
      (t[14] = n),
      (t[15] = i),
      (t[16] = o),
      (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(A, { className: `icon-xs` })), (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] !== a || t[20] !== u || t[21] !== d || t[22] !== f || t[23] !== m
    ? ((g = (0, Q.jsx)(v, {
        "aria-label": u,
        className: `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 disabled:!opacity-0 group-focus-within:disabled:!opacity-40 group-hover:disabled:!opacity-40`,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        disabled: a,
        onMouseEnter: d,
        onMouseMove: f,
        onMouseLeave: p,
        onClick: m,
        children: h,
      })),
      (t[19] = a),
      (t[20] = u),
      (t[21] = d),
      (t[22] = f),
      (t[23] = m),
      (t[24] = g))
    : (g = t[24]);
  let _;
  return (
    t[25] !== u || t[26] !== g
      ? ((_ = (0, Q.jsx)(O, { tooltipContent: u, children: g })),
        (t[25] = u),
        (t[26] = g),
        (t[27] = _))
      : (_ = t[27]),
    _
  );
}
function Ze({ commandId: e, hasCustomBinding: t, platform: n, shortcutEntries: r }) {
  if (!t) return null;
  let i = Se({ commandId: e, isMacOS: n === `macOS` }),
    a = r.findIndex((e, t) => e.accelerator !== i[t]);
  return a === -1 ? 0 : a;
}
async function Y({
  commandId: e,
  intl: t,
  setCommandKeybinding: n,
  setErrorByCommandId: r,
  update: i,
}) {
  r((t) => ({ ...t, [e]: void 0 }));
  try {
    await n.mutateAsync({ commandId: e, update: i });
  } catch (n) {
    r((r) => ({
      ...r,
      [e]:
        n instanceof Error
          ? n.message
          : t.formatMessage({
              id: `settings.keyboardShortcuts.updateError`,
              defaultMessage: `Failed to update shortcut`,
              description: `Fallback error shown when updating an action shortcut fails`,
            }),
    }));
  }
}
var X, Z, Q, $;
e(() => {
  ((X = n()),
    i(),
    De(),
    u(),
    (Z = t(o(), 1)),
    F(),
    Te(),
    w(),
    se(),
    E(),
    m(),
    _(),
    N(),
    M(),
    ue(),
    le(),
    re(),
    ne(),
    k(),
    me(),
    pe(),
    _e(),
    U(),
    ae(),
    oe(),
    ge(),
    R(),
    ce(),
    Ie(),
    Ne(),
    ke(),
    je(),
    z(),
    d(),
    (Q = f()),
    ($ = ye.filter(be)));
})();
export { ze as KeyboardShortcutsSettings };
//# sourceMappingURL=keyboard-shortcuts-settings.js.map
