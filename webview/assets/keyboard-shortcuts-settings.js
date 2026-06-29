import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  AB as r,
  AV as i,
  Ai as a,
  BV as o,
  Bi as s,
  DN as c,
  Di as l,
  Ei as u,
  Gj as d,
  Hs as f,
  IB as p,
  Ii as m,
  JV as h,
  Li as g,
  ON as _,
  Qf as v,
  Ri as y,
  Ti as b,
  Us as x,
  XN as S,
  YN as C,
  Zf as w,
  ba as T,
  hM as E,
  iF as D,
  lF as O,
  pM as k,
  qV as A,
  qj as j,
  sF as M,
  tP as N,
  vM as P,
  va as F,
  wi as I,
  xa as L,
  yM as R,
  ya as z,
  zV as B,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  $i as V,
  Aa as H,
  Ea as U,
  Pa as W,
  Ta as ee,
  Zi as G,
  _a as te,
  ba as ne,
  ga as re,
  ja as ie,
  ma as K,
  qi as ae,
  va as q,
  wa as oe,
  ya as se,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import {
  At as ce,
  J as le,
  K as ue,
  kt as de,
} from "./app-initial~app-main~automations-page.js";
import {
  _ as fe,
  g as pe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r.js";
import {
  fi as me,
  pi as he,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1.js";
import {
  hd as ge,
  md as _e,
  vu as ve,
  yu as ye,
} from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as be,
  K as xe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as Se,
  h as Ce,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  a as we,
  c as J,
  i as Te,
  l as Ee,
  n as De,
  r as Oe,
  s as ke,
  t as Ae,
} from "./app-initial~app-main~keyboard-shortcuts-settings.js";
import {
  n as je,
  t as Me,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
import {
  r as Ne,
  t as Pe,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu.js";
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
  let e = O(),
    { platform: t } = x(),
    n = B(),
    r = p(s),
    i = v(),
    a = j(`1244621283`),
    o = j(`1372061905`),
    l = j(`3264431617`),
    u = j(`4100906017`),
    d = m(r, `switchToMode1`) > 0,
    [f, h] = (0, Z.useState)(``),
    [_, y] = (0, Z.useState)(!1),
    [b, C] = (0, Z.useState)(null),
    [w, T] = (0, Z.useState)({}),
    [E, D] = (0, Z.useState)(!1),
    [A, P] = (0, Z.useState)(null),
    { data: F } = p(ae),
    I = N(`set-codex-command-keybinding`, {
      onSuccess: (e, { commandId: t }) => {
        let r = S(`codex-command-keymap-state`);
        n.setQueryData(r, e);
        let a = [r];
        (t === `hotkeyWindow` && a.push(Pe),
          (t === `globalDictationHold` || t === `globalDictationToggle`) &&
            a.push(S(`global-dictation-hotkey-state`)),
          Promise.all(a.map((e) => i(e))));
      },
    }),
    L = N(`reset-codex-command-keybindings`, {
      onSuccess: (e) => {
        let t = S(`codex-command-keymap-state`);
        (n.setQueryData(t, e),
          Promise.all([t, Pe, S(`global-dictation-hotkey-state`)].map((e) => i(e))));
      },
    }),
    R = $.filter((e) =>
      ke(e.id, {
        modeSwitchAvailable: d,
        isGlobalDictationEnabled: a,
        isHotkeyWindowEnabled: o,
        isProcessManagerEnabled: l,
        isRestrictedCommandEnabled: !1,
        isVoiceInputEnabled: u,
      }),
    )
      .map((t) => ({ command: t, title: J(t, e, g(r, t.id)).title }))
      .sort((e, t) => Oe(e.command, t.command)),
    z = f.trim(),
    V =
      z.length === 0
        ? R
        : R.filter(({ command: n, title: i }) => {
            let a = J(n, e, g(r, n.id)).description;
            return _
              ? G(n.id, F, t).some(({ label: e }) => We(e, z))
              : [n.id, i, a].some((e) => fe(e, z) > 0);
          });
  return (0, Q.jsxs)(ue, {
    title: (0, Q.jsx)(be, { slug: `keyboard-shortcuts` }),
    children: [
      (0, Q.jsx)(Me, {
        children: (0, Q.jsxs)(Me.Content, {
          children: [
            F == null
              ? null
              : (0, Q.jsx)(Ae, {
                  autoFocus: _,
                  isSearchingByKeystrokes: _,
                  trailingContent: (0, Q.jsx)(k, {
                    tooltipContent: (0, Q.jsx)(M, {
                      id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                      defaultMessage: `Search by keystrokes`,
                      description: `Tooltip label for the keyboard shortcut search mode button`,
                    }),
                    children: (0, Q.jsx)(c, {
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
                        (h(``), y((e) => !e));
                      },
                      children: (0, Q.jsx)(de, { className: `icon-sm` }),
                    }),
                  }),
                  value: f,
                  onKeyDown: _
                    ? (e) => {
                        if (e.repeat) return;
                        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
                          (h(``), y(!1));
                          return;
                        }
                        let n = Re(e.nativeEvent);
                        if (n != null) {
                          let e = K(n, t === `macOS`, t === `linux`),
                            r = f.length === 0 ? e : `${f} ${e}`;
                          h(
                            f.length > 0 &&
                              R.some(({ command: e }) =>
                                G(e.id, F, t).some(({ label: e }) => We(e, r)),
                              )
                              ? r
                              : e,
                          );
                        }
                      }
                    : void 0,
                  onValueChange: h,
                }),
            (0, Q.jsxs)(Ce, {
              className: `overflow-hidden`,
              children: [
                F == null
                  ? (0, Q.jsx)(`div`, {
                      className: `px-4 py-3 text-sm text-token-text-secondary`,
                      children: (0, Q.jsx)(M, {
                        id: `settings.keyboardShortcuts.loading`,
                        defaultMessage: `Loading shortcuts…`,
                        description: `Loading label while keyboard shortcuts are being fetched`,
                      }),
                    })
                  : null,
                F == null
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
                                children: (0, Q.jsx)(M, {
                                  id: `settings.keyboardShortcuts.table.command`,
                                  defaultMessage: `Command`,
                                  description: `Column heading for keyboard shortcut commands`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2 font-medium`,
                                children: (0, Q.jsx)(M, {
                                  id: `settings.keyboardShortcuts.table.keybinding`,
                                  defaultMessage: `Keybinding`,
                                  description: `Column heading for keyboard shortcut keybindings`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2`,
                                children: (0, Q.jsx)(`span`, {
                                  className: `sr-only`,
                                  children: (0, Q.jsx)(M, {
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
                            V.length === 0
                              ? (0, Q.jsx)(`tr`, {
                                  children: (0, Q.jsx)(`td`, {
                                    className: `px-4 py-3 text-token-text-secondary`,
                                    colSpan: 3,
                                    children: (0, Q.jsx)(M, {
                                      id: `settings.keyboardShortcuts.noMatches`,
                                      defaultMessage: `No matching shortcuts`,
                                      description: `Empty state shown when the keyboard shortcuts search has no matches`,
                                    }),
                                  }),
                                })
                              : null,
                            V.map(({ command: n, title: i }, a) => {
                              let o = J(n, e, g(r, n.id)).description,
                                s = G(n.id, F, t),
                                c = F.bindings.some((e) => e.command === n.id),
                                l = Ze({
                                  commandId: n.id,
                                  hasCustomBinding: c,
                                  platform: t,
                                  shortcutEntries: s,
                                }),
                                u = b?.commandId === n.id && b.mode === `append`,
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
                                      b?.commandId === n.id &&
                                      (b.mode === `append`
                                        ? u == null && d === s.length
                                        : b.accelerator === (u?.accelerator ?? null));
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
                                                      children: i,
                                                    }),
                                                    o === ``
                                                      ? null
                                                      : (0, Q.jsx)(k, {
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
                                                  allowsBareModifiers: ee(n),
                                                  allowsSequences: n.kind === `webview`,
                                                  commandTitle: i,
                                                  conflictingCommandTitle:
                                                    b.conflictingCommandTitle,
                                                  onCancel: () => {
                                                    C(null);
                                                  },
                                                  onCapture: (i) => {
                                                    if (
                                                      u != null &&
                                                      Ke(u.accelerator, i, t === `macOS`)
                                                    ) {
                                                      C(null);
                                                      return;
                                                    }
                                                    let a = Ge({
                                                      accelerator: i,
                                                      commandId: n.id,
                                                      intl: e,
                                                      keymapState: F,
                                                      platform: t,
                                                      registeredCommands: r,
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
                                                      b.mode === `append`
                                                        ? { type: `append`, accelerator: i }
                                                        : u == null
                                                          ? { type: `set`, accelerator: i }
                                                          : {
                                                              type: `replace`,
                                                              previousAccelerator: u.accelerator,
                                                              accelerator: i,
                                                            }),
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: I,
                                                        setErrorByCommandId: T,
                                                        update: o,
                                                      }).finally(() => {
                                                        C((e) => (e === b ? null : e));
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
                                                      canAppend: !H(n),
                                                      commandTitle: i,
                                                      hasShortcut: u != null,
                                                      isPending: I.isPending,
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
                                                  commandTitle: i,
                                                  hasCustomBinding: c,
                                                  hasShortcut: u != null,
                                                  isPending: I.isPending,
                                                  showReset: d === l,
                                                  onReset: () => {
                                                    Y({
                                                      commandId: n.id,
                                                      intl: e,
                                                      setCommandKeybinding: I,
                                                      setErrorByCommandId: T,
                                                      update: { type: `reset` },
                                                    });
                                                  },
                                                  onClear: () => {
                                                    u != null &&
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: I,
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
            F != null && F.bindings.length > 0
              ? (0, Q.jsx)(`div`, {
                  className: `flex items-center justify-end gap-2`,
                  children: (0, Q.jsx)(c, {
                    color: `secondary`,
                    disabled: L.isPending,
                    onClick: () => {
                      (P(null), D(!0));
                    },
                    children: (0, Q.jsx)(M, {
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
        error: A,
        isPending: L.isPending,
        open: E,
        onOpenChange: (e) => {
          (D(e), e || P(null));
        },
        onConfirm: async () => {
          P(null);
          try {
            (await L.mutateAsync(void 0), D(!1));
          } catch (t) {
            P(
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
    ? ((s = (0, Q.jsx)(M, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let d = s,
    f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(M, {
        id: `settings.keyboardShortcuts.resetAllConfirm.description`,
        defaultMessage: `This will discard all custom shortcuts and restore the defaults`,
        description: `Warning shown before resetting all customized keyboard shortcuts`,
      })),
      (t[1] = f))
    : (f = t[1]);
  let p = f,
    m;
  t[2] === i
    ? (m = t[3])
    : ((m = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = m));
  let h, g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(T, { className: `sr-only`, children: d })),
      (g = (0, Q.jsx)(z, { className: `sr-only`, children: p })),
      (t[4] = h),
      (t[5] = g))
    : ((h = t[4]), (g = t[5]));
  let _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(l, { children: (0, Q.jsx)(u, { title: d, subtitle: p }) })), (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === n
    ? (v = t[8])
    : ((v =
        n == null
          ? null
          : (0, Q.jsx)(l, { className: `text-token-error-foreground`, children: n })),
      (t[7] = n),
      (t[8] = v));
  let y;
  t[9] === a
    ? (y = t[10])
    : ((y = () => {
        a(!1);
      }),
      (t[9] = a),
      (t[10] = y));
  let x;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(M, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] === y
    ? (S = t[13])
    : ((S = (0, Q.jsx)(c, { color: `secondary`, onClick: y, children: x })),
      (t[12] = y),
      (t[13] = S));
  let C;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(M, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] === r
    ? (w = t[16])
    : ((w = (0, Q.jsx)(c, { color: `danger`, loading: r, type: `submit`, children: C })),
      (t[15] = r),
      (t[16] = w));
  let E;
  t[17] !== S || t[18] !== w
    ? ((E = (0, Q.jsx)(l, { children: (0, Q.jsxs)(b, { children: [S, w] }) })),
      (t[17] = S),
      (t[18] = w),
      (t[19] = E))
    : (E = t[19]);
  let D;
  t[20] !== E || t[21] !== m || t[22] !== v
    ? ((D = (0, Q.jsxs)(I, { as: `form`, onSubmit: m, children: [h, g, _, v, E] })),
      (t[20] = E),
      (t[21] = m),
      (t[22] = v),
      (t[23] = D))
    : (D = t[23]);
  let O;
  return (
    t[24] !== a || t[25] !== o || t[26] !== D
      ? ((O = (0, Q.jsx)(F, {
          open: o,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: D,
        })),
        (t[24] = a),
        (t[25] = o),
        (t[26] = D),
        (t[27] = O))
      : (O = t[27]),
    O
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
      onCapture: s,
    } = e,
    l = O(),
    { platform: u } = x(),
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
  let v = _,
    y;
  t[1] === s
    ? (y = t[2])
    : ((y = (e) => {
        ((d.current += 1), (f.current = null), v(), s(e));
      }),
      (t[1] = s),
      (t[2] = y));
  let b = y,
    S;
  t[3] === o
    ? (S = t[4])
    : ((S = () => {
        ((d.current += 1), (f.current = null), v(), o());
      }),
      (t[3] = o),
      (t[4] = S));
  let w = S,
    T;
  t[5] !== r || t[6] !== b
    ? ((T = (e) => {
        let t = p.current;
        if (t != null) {
          b(`${t} ${e}`);
          return;
        }
        if (!r) {
          b(e);
          return;
        }
        if (e.includes(`+`)) {
          b(e);
          return;
        }
        ((p.current = e),
          g(`${K(e)} …`),
          (m.current = setTimeout(() => {
            p.current === e && b(e);
          }, te)));
      }),
      (t[5] = r),
      (t[6] = b),
      (t[7] = T))
    : (T = t[7]);
  let E = T,
    D;
  t[8] === b
    ? (D = t[9])
    : ((D = async (e) => {
        try {
          let { hotkey: t } = await C(`global-dictation-capture-fn-hotkey`);
          t != null && d.current === e && b(t);
        } catch {}
      }),
      (t[8] = b),
      (t[9] = D));
  let k = (0, Z.useEffectEvent)(D),
    A;
  t[10] !== n || t[11] !== k || t[12] !== u
    ? ((A = () => {
        if (!(!n || u !== `macOS`))
          return (
            (d.current += 1),
            k(d.current),
            () => {
              ((d.current += 1), (f.current = null), v());
            }
          );
      }),
      (t[10] = n),
      (t[11] = k),
      (t[12] = u),
      (t[13] = A))
    : (A = t[13]);
  let j;
  (t[14] !== n || t[15] !== u ? ((j = [n, u]), (t[14] = n), (t[15] = u), (t[16] = j)) : (j = t[16]),
    (0, Z.useEffect)(A, j));
  let N, P;
  (t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => () => {
        (m.current != null && clearTimeout(m.current), (p.current = null));
      }),
      (P = []),
      (t[17] = N),
      (t[18] = P))
    : ((N = t[17]), (P = t[18])),
    (0, Z.useEffect)(N, P));
  let F;
  t[19] !== l || t[20] !== h
    ? ((F =
        h ??
        l.formatMessage({
          id: `settings.keyboardShortcuts.capturePrompt`,
          defaultMessage: `Press shortcut`,
          description: `Prompt shown while capturing a keyboard shortcut for a command`,
        })),
      (t[19] = l),
      (t[20] = h),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] !== n || t[23] !== w || t[24] !== E
    ? ((I = (e) => {
        if (e.repeat) return;
        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
          w();
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
        t != null && E(t);
      }),
      (t[22] = n),
      (t[23] = w),
      (t[24] = E),
      (t[25] = I))
    : (I = t[25]);
  let L;
  t[26] !== n || t[27] !== b
    ? ((L = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), !n)) return;
        let t = Fe(e.nativeEvent);
        t != null && f.current === t && b(t);
      }),
      (t[26] = n),
      (t[27] = b),
      (t[28] = L))
    : (L = t[28]);
  let R;
  t[29] !== i || t[30] !== l
    ? ((R = l.formatMessage(
        {
          id: `settings.keyboardShortcuts.captureAriaLabel`,
          defaultMessage: `Shortcut capture for {commandTitle}`,
          description: `Aria label for the shortcut capture input for a command`,
        },
        { commandTitle: i },
      )),
      (t[29] = i),
      (t[30] = l),
      (t[31] = R))
    : (R = t[31]);
  let z;
  t[32] !== w || t[33] !== F || t[34] !== I || t[35] !== L || t[36] !== R
    ? ((z = (0, Q.jsx)(`input`, {
        "data-codex-shortcut-capture": !0,
        autoFocus: !0,
        readOnly: !0,
        value: F,
        onBlur: w,
        onKeyDown: I,
        onKeyUp: L,
        "aria-label": R,
        className: `h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none`,
      })),
      (t[32] = w),
      (t[33] = F),
      (t[34] = I),
      (t[35] = L),
      (t[36] = R),
      (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(M, {
        id: `settings.keyboardShortcuts.captureCancel`,
        defaultMessage: `Cancel`,
        description: `Button label to cancel shortcut capture`,
      })),
      (t[38] = B))
    : (B = t[38]);
  let V;
  t[39] === o
    ? (V = t[40])
    : ((V = (0, Q.jsx)(c, {
        color: `ghost`,
        size: `toolbar`,
        onMouseDown: Ue,
        onClick: o,
        children: B,
      })),
      (t[39] = o),
      (t[40] = V));
  let H;
  t[41] !== z || t[42] !== V
    ? ((H = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [z, V] })),
      (t[41] = z),
      (t[42] = V),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] === a
    ? (U = t[45])
    : ((U =
        a == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `text-xs text-token-editor-warning-foreground`,
              children: (0, Q.jsx)(M, {
                id: `settings.keyboardShortcuts.captureConflict`,
                defaultMessage: `Used by {commandTitle}`,
                description: `Warning shown while capturing a shortcut that is already used by another command`,
                values: { commandTitle: a },
              }),
            })),
      (t[44] = a),
      (t[45] = U));
  let W;
  return (
    t[46] !== H || t[47] !== U
      ? ((W = (0, Q.jsxs)(`div`, {
          className: `flex w-full flex-col items-start gap-1`,
          children: [H, U],
        })),
        (t[46] = H),
        (t[47] = U),
        (t[48] = W))
      : (W = t[48]),
    W
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
      !oe(o.id, t) &&
      G(o.id, r, i).some((t) => qe(t.accelerator, e, i === `macOS`))
    )
      return J(o, n, g(a, o.id)).title;
  return null;
}
function Ke(e, t, n) {
  return K(e, n) === K(t, n);
}
function qe(e, t, n) {
  let r = q(e).map((e) => K(e, n)),
    i = q(t).map((e) => K(e, n)),
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
              ? (0, Q.jsx)(M, {
                  id: `settings.keyboardShortcuts.unassigned`,
                  defaultMessage: `Unassigned`,
                  description: `Label shown when an action has no shortcut`,
                })
              : (0, Q.jsx)(P, { className: `!px-2 !py-1 !text-sm`, keysLabel: n }),
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
      onReset: l,
    } = e,
    u = O(),
    d;
  t[0] !== n || t[1] !== u
    ? ((d = u.formatMessage(
        {
          id: `settings.keyboardShortcuts.clearAriaLabel`,
          defaultMessage: `Clear shortcut for {commandTitle}`,
          description: `Aria label for clearing a shortcut`,
        },
        { commandTitle: n },
      )),
      (t[0] = n),
      (t[1] = u),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p;
  t[3] !== n || t[4] !== u
    ? ((p = u.formatMessage(
        {
          id: `settings.keyboardShortcuts.resetAriaLabel`,
          defaultMessage: `Reset shortcut for {commandTitle}`,
          description: `Aria label for resetting a shortcut to its default`,
        },
        { commandTitle: n },
      )),
      (t[3] = n),
      (t[4] = u),
      (t[5] = p))
    : (p = t[5]);
  let m = p,
    h;
  t[6] !== f || t[7] !== i || t[8] !== a || t[9] !== s
    ? ((h = i
        ? (0, Q.jsx)(k, {
            tooltipContent: f,
            children: (0, Q.jsx)(c, {
              "aria-label": f,
              className: `disabled:!opacity-100`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: a,
              onClick: s,
              children: (0, Q.jsx)(_e, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[6] = f),
      (t[7] = i),
      (t[8] = a),
      (t[9] = s),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== r || t[12] !== a || t[13] !== l || t[14] !== m || t[15] !== o
    ? ((g =
        o && r
          ? (0, Q.jsx)(k, {
              tooltipContent: m,
              children: (0, Q.jsx)(c, {
                "aria-label": m,
                className: `disabled:!opacity-100`,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                disabled: a,
                onClick: l,
                children: (0, Q.jsx)(ve, { className: `icon-xs` }),
              }),
            })
          : null),
      (t[11] = r),
      (t[12] = a),
      (t[13] = l),
      (t[14] = m),
      (t[15] = o),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== h || t[18] !== g
      ? ((_ = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-end gap-1`,
          children: [h, g],
        })),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function Xe(e) {
  let t = (0, X.c)(28),
    { canAppend: n, commandTitle: r, hasShortcut: i, isPending: a, onStartCapture: o } = e,
    s = O(),
    [l, u] = (0, Z.useState)(!1),
    d;
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
      (d = e));
  } else if (l) {
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
      (d = e));
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
      (d = e));
  }
  let f, p;
  t[9] !== n || t[10] !== i
    ? ((f = (e) => {
        u(n && i && e.shiftKey);
      }),
      (p = (e) => {
        u(n && i && e.shiftKey);
      }),
      (t[9] = n),
      (t[10] = i),
      (t[11] = f),
      (t[12] = p))
    : ((f = t[11]), (p = t[12]));
  let m;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        u(!1);
      }),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] !== n || t[15] !== i || t[16] !== o
    ? ((h = (e) => {
        let t = `set`;
        (i && (t = n && e.shiftKey ? `append` : `replace`), o(t));
      }),
      (t[14] = n),
      (t[15] = i),
      (t[16] = o),
      (t[17] = h))
    : (h = t[17]);
  let g;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(me, { className: `icon-xs` })), (t[18] = g))
    : (g = t[18]);
  let _;
  t[19] !== a || t[20] !== d || t[21] !== f || t[22] !== p || t[23] !== h
    ? ((_ = (0, Q.jsx)(c, {
        "aria-label": d,
        className: `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 disabled:!opacity-0 group-focus-within:disabled:!opacity-40 group-hover:disabled:!opacity-40`,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        disabled: a,
        onMouseEnter: f,
        onMouseMove: p,
        onMouseLeave: m,
        onClick: h,
        children: g,
      })),
      (t[19] = a),
      (t[20] = d),
      (t[21] = f),
      (t[22] = p),
      (t[23] = h),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  return (
    t[25] !== d || t[26] !== _
      ? ((v = (0, Q.jsx)(k, { tooltipContent: d, children: _ })),
        (t[25] = d),
        (t[26] = _),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function Ze({ commandId: e, hasCustomBinding: t, platform: n, shortcutEntries: r }) {
  if (!t) return null;
  let i = U({ commandId: e, isMacOS: n === `macOS` }),
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
  ((X = A()),
    i(),
    ne(),
    r(),
    (Z = t(h(), 1)),
    D(),
    V(),
    y(),
    Ee(),
    _(),
    L(),
    a(),
    R(),
    E(),
    pe(),
    f(),
    Ne(),
    ce(),
    he(),
    ge(),
    ye(),
    re(),
    we(),
    Te(),
    De(),
    se(),
    w(),
    le(),
    Ie(),
    je(),
    xe(),
    Se(),
    d(),
    n(),
    (Q = o()),
    ($ = W.filter(ie)));
})();
export { ze as KeyboardShortcutsSettings };
//# sourceMappingURL=keyboard-shortcuts-settings.js.map
