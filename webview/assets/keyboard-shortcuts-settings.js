import { n as e, s as t } from "./rolldown-runtime.js";
import {
  AV as n,
  Ar as r,
  BN as i,
  Br as a,
  Dr as o,
  EB as s,
  Er as c,
  FN as l,
  GP as u,
  HP as d,
  Hf as f,
  Ir as p,
  Lr as m,
  Mj as h,
  PN as g,
  Pj as _,
  Qj as v,
  RN as y,
  RV as b,
  Rr as x,
  Tr as S,
  Uf as C,
  bB as w,
  eM as T,
  es as E,
  fN as D,
  gi as O,
  hi as k,
  iM as A,
  jV as j,
  mi as M,
  pN as N,
  pi as P,
  qP as F,
  rM as I,
  ts as L,
  wr as R,
  xV as z,
  zV as B,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Bv as V,
  F_ as H,
  Fh as U,
  Gh as W,
  Gv as ee,
  I_ as te,
  Ih as ne,
  Iv as re,
  Jg as ie,
  Kv as ae,
  Lv as oe,
  Pv as G,
  Rv as K,
  Wv as se,
  Xv as ce,
  Yh as q,
  Zh as le,
  Zv as ue,
  cp as de,
  ey as fe,
  lp as pe,
  qg as me,
  zv as he,
} from "./app-initial~app-main~onboarding-page.js";
import { f as ge, lt as _e, u as ve, ut as ye } from "./app-initial~app-main~automations-page.js";
import {
  b as be,
  y as xe,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import {
  O as Se,
  k as Ce,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  r as we,
  t as Te,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  a as Ee,
  c as J,
  i as De,
  l as Oe,
  n as ke,
  r as Ae,
  s as je,
  t as Me,
} from "./app-initial~app-main~keyboard-shortcuts-settings.js";
import {
  n as Ne,
  t as Pe,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
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
  let e = F(),
    { platform: t } = L(),
    r = n(),
    o = s(a),
    c = C(),
    d = _(`1244621283`),
    f = _(`1372061905`),
    h = _(`3264431617`),
    g = _(`4100906017`),
    y = p(o, `switchToMode1`) > 0,
    [b, x] = (0, Z.useState)(``),
    [S, w] = (0, Z.useState)(!1),
    [T, E] = (0, Z.useState)(null),
    [O, k] = (0, Z.useState)({}),
    [A, j] = (0, Z.useState)(!1),
    [M, N] = (0, Z.useState)(null),
    { data: P } = s(W),
    I = i(`set-codex-command-keybinding`, {
      onSuccess: (e, { commandId: t }) => {
        let n = l(`codex-command-keymap-state`);
        r.setQueryData(n, e);
        let i = [n];
        (t === `hotkeyWindow` && i.push(ve),
          (t === `globalDictationHold` || t === `globalDictationToggle`) &&
            i.push(l(`global-dictation-hotkey-state`)),
          Promise.all(i.map((e) => c(e))));
      },
    }),
    R = i(`reset-codex-command-keybindings`, {
      onSuccess: (e) => {
        let t = l(`codex-command-keymap-state`);
        (r.setQueryData(t, e),
          Promise.all([t, ve, l(`global-dictation-hotkey-state`)].map((e) => c(e))));
      },
    }),
    z = $.filter((e) =>
      je(e.id, {
        modeSwitchAvailable: y,
        isGlobalDictationEnabled: d,
        isHotkeyWindowEnabled: f,
        isProcessManagerEnabled: h,
        isRestrictedCommandEnabled: !1,
        isVoiceInputEnabled: g,
      }),
    )
      .map((t) => ({ command: t, title: J(t, e, m(o, t.id)).title }))
      .sort((e, t) => Ae(e.command, t.command)),
    B = b.trim(),
    V =
      B.length === 0
        ? z
        : z.filter(({ command: n, title: r }) => {
            let i = J(n, e, m(o, n.id)).description;
            return S
              ? q(n.id, P, t).some(({ label: e }) => We(e, B))
              : [n.id, r, i].some((e) => te(e, B) > 0);
          });
  return (0, Q.jsxs)(Te, {
    title: (0, Q.jsx)(Se, { slug: `keyboard-shortcuts` }),
    children: [
      (0, Q.jsx)(_e, {
        children: (0, Q.jsxs)(_e.Content, {
          children: [
            P == null
              ? null
              : (0, Q.jsx)(Me, {
                  autoFocus: S,
                  isSearchingByKeystrokes: S,
                  trailingContent: (0, Q.jsx)(v, {
                    tooltipContent: (0, Q.jsx)(u, {
                      id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                      defaultMessage: `Search by keystrokes`,
                      description: `Tooltip label for the keyboard shortcut search mode button`,
                    }),
                    children: (0, Q.jsx)(D, {
                      "aria-label": e.formatMessage({
                        id: `settings.keyboardShortcuts.searchByKeystrokes.ariaLabel`,
                        defaultMessage: `Search by keystrokes`,
                        description: `Accessible label for the keyboard shortcut search mode button`,
                      }),
                      "aria-pressed": S,
                      color: S ? `secondary` : `ghost`,
                      size: `toolbar`,
                      uniform: !0,
                      onMouseDown: (e) => {
                        e.preventDefault();
                      },
                      onClick: () => {
                        (x(``), w((e) => !e));
                      },
                      children: (0, Q.jsx)(xe, { className: `icon-sm` }),
                    }),
                  }),
                  value: b,
                  onKeyDown: S
                    ? (e) => {
                        if (e.repeat) return;
                        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
                          (x(``), w(!1));
                          return;
                        }
                        let n = Re(e.nativeEvent);
                        if (n != null) {
                          let e = G(n, t === `macOS`, t === `linux`),
                            r = b.length === 0 ? e : `${b} ${e}`;
                          x(
                            b.length > 0 &&
                              z.some(({ command: e }) =>
                                q(e.id, P, t).some(({ label: e }) => We(e, r)),
                              )
                              ? r
                              : e,
                          );
                        }
                      }
                    : void 0,
                  onValueChange: x,
                }),
            (0, Q.jsxs)(Pe, {
              className: `overflow-hidden`,
              children: [
                P == null
                  ? (0, Q.jsx)(`div`, {
                      className: `px-4 py-3 text-sm text-token-text-secondary`,
                      children: (0, Q.jsx)(u, {
                        id: `settings.keyboardShortcuts.loading`,
                        defaultMessage: `Loading shortcuts…`,
                        description: `Loading label while keyboard shortcuts are being fetched`,
                      }),
                    })
                  : null,
                P == null
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
                                children: (0, Q.jsx)(u, {
                                  id: `settings.keyboardShortcuts.table.command`,
                                  defaultMessage: `Command`,
                                  description: `Column heading for keyboard shortcut commands`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2 font-medium`,
                                children: (0, Q.jsx)(u, {
                                  id: `settings.keyboardShortcuts.table.keybinding`,
                                  defaultMessage: `Keybinding`,
                                  description: `Column heading for keyboard shortcut keybindings`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2`,
                                children: (0, Q.jsx)(`span`, {
                                  className: `sr-only`,
                                  children: (0, Q.jsx)(u, {
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
                                    children: (0, Q.jsx)(u, {
                                      id: `settings.keyboardShortcuts.noMatches`,
                                      defaultMessage: `No matching shortcuts`,
                                      description: `Empty state shown when the keyboard shortcuts search has no matches`,
                                    }),
                                  }),
                                })
                              : null,
                            V.map(({ command: n, title: r }, i) => {
                              let a = J(n, e, m(o, n.id)).description,
                                s = q(n.id, P, t),
                                c = P.bindings.some((e) => e.command === n.id),
                                l = Ze({
                                  commandId: n.id,
                                  hasCustomBinding: c,
                                  platform: t,
                                  shortcutEntries: s,
                                }),
                                u = T?.commandId === n.id && T.mode === `append`,
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
                                      T?.commandId === n.id &&
                                      (T.mode === `append`
                                        ? u == null && d === s.length
                                        : T.accelerator === (u?.accelerator ?? null));
                                    return (0, Q.jsxs)(
                                      `tr`,
                                      {
                                        className:
                                          p && i > 0
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
                                                    a === ``
                                                      ? null
                                                      : (0, Q.jsx)(v, {
                                                          openWhen: `trigger-overflows`,
                                                          tooltipContent: a,
                                                          children: (0, Q.jsx)(`span`, {
                                                            className: `mt-0.5 block truncate text-xs text-token-text-secondary`,
                                                            children: a,
                                                          }),
                                                        }),
                                                    O[n.id] == null
                                                      ? null
                                                      : (0, Q.jsx)(`span`, {
                                                          className: `mt-0.5 block text-xs text-token-error-foreground`,
                                                          children: O[n.id],
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
                                                  commandTitle: r,
                                                  conflictingCommandTitle:
                                                    T.conflictingCommandTitle,
                                                  onCancel: () => {
                                                    E(null);
                                                  },
                                                  onCapture: (r) => {
                                                    if (
                                                      u != null &&
                                                      Ke(u.accelerator, r, t === `macOS`)
                                                    ) {
                                                      E(null);
                                                      return;
                                                    }
                                                    let i = Ge({
                                                      accelerator: r,
                                                      commandId: n.id,
                                                      intl: e,
                                                      keymapState: P,
                                                      platform: t,
                                                      registeredCommands: o,
                                                    });
                                                    if (i != null) {
                                                      E((e) =>
                                                        e?.commandId === n.id
                                                          ? { ...e, conflictingCommandTitle: i }
                                                          : e,
                                                      );
                                                      return;
                                                    }
                                                    let a;
                                                    ((a =
                                                      T.mode === `append`
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
                                                        setCommandKeybinding: I,
                                                        setErrorByCommandId: k,
                                                        update: a,
                                                      }).finally(() => {
                                                        E((e) => (e === T ? null : e));
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
                                                      canAppend: !ce(n),
                                                      commandTitle: r,
                                                      hasShortcut: u != null,
                                                      isPending: I.isPending,
                                                      onStartCapture: (e) => {
                                                        (k((e) => ({ ...e, [n.id]: void 0 })),
                                                          E({
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
                                                  isPending: I.isPending,
                                                  showReset: d === l,
                                                  onReset: () => {
                                                    Y({
                                                      commandId: n.id,
                                                      intl: e,
                                                      setCommandKeybinding: I,
                                                      setErrorByCommandId: k,
                                                      update: { type: `reset` },
                                                    });
                                                  },
                                                  onClear: () => {
                                                    u != null &&
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: I,
                                                        setErrorByCommandId: k,
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
            P != null && P.bindings.length > 0
              ? (0, Q.jsx)(`div`, {
                  className: `flex items-center justify-end gap-2`,
                  children: (0, Q.jsx)(D, {
                    color: `secondary`,
                    disabled: R.isPending,
                    onClick: () => {
                      (N(null), j(!0));
                    },
                    children: (0, Q.jsx)(u, {
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
        error: M,
        isPending: R.isPending,
        open: A,
        onOpenChange: (e) => {
          (j(e), e || N(null));
        },
        onConfirm: async () => {
          N(null);
          try {
            (await R.mutateAsync(void 0), j(!1));
          } catch (t) {
            N(
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
    { error: n, isPending: r, onConfirm: i, onOpenChange: a, open: s } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let d = l,
    f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(u, {
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
    ? ((h = (0, Q.jsx)(k, { className: `sr-only`, children: d })),
      (g = (0, Q.jsx)(M, { className: `sr-only`, children: p })),
      (t[4] = h),
      (t[5] = g))
    : ((h = t[4]), (g = t[5]));
  let _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(o, { children: (0, Q.jsx)(c, { title: d, subtitle: p }) })), (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === n
    ? (v = t[8])
    : ((v =
        n == null
          ? null
          : (0, Q.jsx)(o, { className: `text-token-error-foreground`, children: n })),
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
  let b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (t[11] = b))
    : (b = t[11]);
  let x;
  t[12] === y
    ? (x = t[13])
    : ((x = (0, Q.jsx)(D, { color: `secondary`, onClick: y, children: b })),
      (t[12] = y),
      (t[13] = x));
  let C;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] === r
    ? (w = t[16])
    : ((w = (0, Q.jsx)(D, { color: `danger`, loading: r, type: `submit`, children: C })),
      (t[15] = r),
      (t[16] = w));
  let T;
  t[17] !== x || t[18] !== w
    ? ((T = (0, Q.jsx)(o, { children: (0, Q.jsxs)(S, { children: [x, w] }) })),
      (t[17] = x),
      (t[18] = w),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] !== T || t[21] !== m || t[22] !== v
    ? ((E = (0, Q.jsxs)(R, { as: `form`, onSubmit: m, children: [h, g, _, v, T] })),
      (t[20] = T),
      (t[21] = m),
      (t[22] = v),
      (t[23] = E))
    : (E = t[23]);
  let O;
  return (
    t[24] !== a || t[25] !== s || t[26] !== E
      ? ((O = (0, Q.jsx)(P, {
          open: s,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: E,
        })),
        (t[24] = a),
        (t[25] = s),
        (t[26] = E),
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
    c = F(),
    { platform: l } = L(),
    d = (0, Z.useRef)(0),
    f = (0, Z.useRef)(null),
    p = (0, Z.useRef)(null),
    m = (0, Z.useRef)(null),
    [h, _] = (0, Z.useState)(null),
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        (m.current != null && (clearTimeout(m.current), (m.current = null)),
          (p.current = null),
          _(null));
      }),
      (t[0] = v))
    : (v = t[0]);
  let y = v,
    b;
  t[1] === s
    ? (b = t[2])
    : ((b = (e) => {
        ((d.current += 1), (f.current = null), y(), s(e));
      }),
      (t[1] = s),
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
          _(`${G(e)} …`),
          (m.current = setTimeout(() => {
            p.current === e && x(e);
          }, oe)));
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
          let { hotkey: t } = await g(`global-dictation-capture-fn-hotkey`);
          t != null && d.current === e && x(t);
        } catch {}
      }),
      (t[8] = x),
      (t[9] = E));
  let O = (0, Z.useEffectEvent)(E),
    k;
  t[10] !== n || t[11] !== O || t[12] !== l
    ? ((k = () => {
        if (!(!n || l !== `macOS`))
          return (
            (d.current += 1),
            O(d.current),
            () => {
              ((d.current += 1), (f.current = null), y());
            }
          );
      }),
      (t[10] = n),
      (t[11] = O),
      (t[12] = l),
      (t[13] = k))
    : (k = t[13]);
  let A;
  (t[14] !== n || t[15] !== l ? ((A = [n, l]), (t[14] = n), (t[15] = l), (t[16] = A)) : (A = t[16]),
    (0, Z.useEffect)(k, A));
  let j, M;
  (t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => () => {
        (m.current != null && clearTimeout(m.current), (p.current = null));
      }),
      (M = []),
      (t[17] = j),
      (t[18] = M))
    : ((j = t[17]), (M = t[18])),
    (0, Z.useEffect)(j, M));
  let N;
  t[19] !== c || t[20] !== h
    ? ((N =
        h ??
        c.formatMessage({
          id: `settings.keyboardShortcuts.capturePrompt`,
          defaultMessage: `Press shortcut`,
          description: `Prompt shown while capturing a keyboard shortcut for a command`,
        })),
      (t[19] = c),
      (t[20] = h),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] !== n || t[23] !== C || t[24] !== T
    ? ((P = (e) => {
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
      (t[25] = P))
    : (P = t[25]);
  let I;
  t[26] !== n || t[27] !== x
    ? ((I = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), !n)) return;
        let t = Fe(e.nativeEvent);
        t != null && f.current === t && x(t);
      }),
      (t[26] = n),
      (t[27] = x),
      (t[28] = I))
    : (I = t[28]);
  let R;
  t[29] !== i || t[30] !== c
    ? ((R = c.formatMessage(
        {
          id: `settings.keyboardShortcuts.captureAriaLabel`,
          defaultMessage: `Shortcut capture for {commandTitle}`,
          description: `Aria label for the shortcut capture input for a command`,
        },
        { commandTitle: i },
      )),
      (t[29] = i),
      (t[30] = c),
      (t[31] = R))
    : (R = t[31]);
  let z;
  t[32] !== C || t[33] !== N || t[34] !== P || t[35] !== I || t[36] !== R
    ? ((z = (0, Q.jsx)(`input`, {
        "data-codex-shortcut-capture": !0,
        autoFocus: !0,
        readOnly: !0,
        value: N,
        onBlur: C,
        onKeyDown: P,
        onKeyUp: I,
        "aria-label": R,
        className: `h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none`,
      })),
      (t[32] = C),
      (t[33] = N),
      (t[34] = P),
      (t[35] = I),
      (t[36] = R),
      (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(u, {
        id: `settings.keyboardShortcuts.captureCancel`,
        defaultMessage: `Cancel`,
        description: `Button label to cancel shortcut capture`,
      })),
      (t[38] = B))
    : (B = t[38]);
  let V;
  t[39] === o
    ? (V = t[40])
    : ((V = (0, Q.jsx)(D, {
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
              children: (0, Q.jsx)(u, {
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
      !se(o.id, t) &&
      q(o.id, r, i).some((t) => qe(t.accelerator, e, i === `macOS`))
    )
      return J(o, n, m(a, o.id)).title;
  return null;
}
function Ke(e, t, n) {
  return G(e, n) === G(t, n);
}
function qe(e, t, n) {
  let r = K(e).map((e) => G(e, n)),
    i = K(t).map((e) => G(e, n)),
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
              ? (0, Q.jsx)(u, {
                  id: `settings.keyboardShortcuts.unassigned`,
                  defaultMessage: `Unassigned`,
                  description: `Label shown when an action has no shortcut`,
                })
              : (0, Q.jsx)(I, { className: `!px-2 !py-1 !text-sm`, keysLabel: n }),
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
    l = F(),
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
        ? (0, Q.jsx)(v, {
            tooltipContent: d,
            children: (0, Q.jsx)(D, {
              "aria-label": d,
              className: `disabled:!opacity-100`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: a,
              onClick: s,
              children: (0, Q.jsx)(U, { className: `icon-xs` }),
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
          ? (0, Q.jsx)(v, {
              tooltipContent: p,
              children: (0, Q.jsx)(D, {
                "aria-label": p,
                className: `disabled:!opacity-100`,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                disabled: a,
                onClick: c,
                children: (0, Q.jsx)(de, { className: `icon-xs` }),
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
    s = F(),
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
    ? ((h = (0, Q.jsx)(me, { className: `icon-xs` })), (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] !== a || t[20] !== u || t[21] !== d || t[22] !== f || t[23] !== m
    ? ((g = (0, Q.jsx)(D, {
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
      ? ((_ = (0, Q.jsx)(v, { tooltipContent: u, children: g })),
        (t[25] = u),
        (t[26] = g),
        (t[27] = _))
      : (_ = t[27]),
    _
  );
}
function Ze({ commandId: e, hasCustomBinding: t, platform: n, shortcutEntries: r }) {
  if (!t) return null;
  let i = ae({ commandId: e, isMacOS: n === `macOS` }),
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
  ((X = b()),
    z(),
    V(),
    w(),
    (Z = t(B(), 1)),
    d(),
    le(),
    x(),
    Oe(),
    N(),
    O(),
    r(),
    A(),
    T(),
    H(),
    E(),
    ge(),
    be(),
    ie(),
    ne(),
    pe(),
    re(),
    Ee(),
    De(),
    ke(),
    he(),
    f(),
    we(),
    Ie(),
    ye(),
    Ce(),
    Ne(),
    h(),
    y(),
    (Q = j()),
    ($ = fe.filter(ue)));
})();
export { ze as KeyboardShortcutsSettings };
//# sourceMappingURL=keyboard-shortcuts-settings.js.map
