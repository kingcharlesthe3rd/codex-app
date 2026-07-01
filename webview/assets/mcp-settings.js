import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $N as n,
  AV as r,
  Ap as i,
  Cf as a,
  DB as o,
  Dj as s,
  EB as c,
  Ej as l,
  GP as u,
  Gi as d,
  HP as f,
  J as p,
  JN as m,
  Ji as h,
  QN as g,
  RV as _,
  TP as v,
  U as y,
  VP as b,
  W as x,
  XO as S,
  YN as C,
  YO as w,
  aa as T,
  bB as E,
  fN as D,
  hf as O,
  ia as ee,
  jV as k,
  pN as A,
  pf as te,
  q as j,
  qN as M,
  qP as N,
  qi as ne,
  sf as re,
  to as ie,
  wB as ae,
  wP as P,
  wf as oe,
  xV as se,
  xf as ce,
  yp as F,
  zV as I,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Cr as L,
  Fh as R,
  Fm as z,
  Ih as B,
  Lm as le,
  Sm as V,
  Sr as ue,
  d_ as de,
  nO as fe,
  tO as pe,
  xm as me,
} from "./app-initial~app-main~onboarding-page.js";
import { lt as H, ut as U } from "./app-initial~app-main~automations-page.js";
import {
  Ft as W,
  Pt as G,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0.js";
import {
  D as he,
  O as ge,
  k as _e,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  v as ve,
  y as ye,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~coa484up.js";
import {
  S as be,
  g as xe,
} from "./app-initial~app-main~first-run~page~remote-conversation-page~plugin-detail-page~new-thread-~o67ur2ib.js";
import {
  r as Se,
  t as Ce,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as we,
  t as K,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as Te, t as Ee } from "./tabs-xQL-Jv5b.js";
import { n as De, t as Oe } from "./control-group.js";
function q(e) {
  let t = (0, ke.c)(55),
    n = e.inputType === G.String,
    r = e.inputType === G.Array,
    i = e.inputType === G.Record,
    a = N(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `settings.editRow.headerPlaceholder`,
        defaultMessage: `Key`,
        description: `Placeholder for record key input`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s = o,
    c;
  t[2] === a
    ? (c = t[3])
    : ((c = a.formatMessage({
        id: `settings.editRow.valuePlaceholder`,
        defaultMessage: `Value`,
        description: `Placeholder for record value input`,
      })),
      (t[2] = a),
      (t[3] = c));
  let u = c,
    d;
  t[4] === a
    ? (d = t[5])
    : ((d = a.formatMessage({
        id: `settings.editRow.removeEntry`,
        defaultMessage: `Remove entry`,
        description: `Label for removing an entry from a list`,
      })),
      (t[4] = a),
      (t[5] = d));
  let f = d,
    p,
    m;
  if (t[6] !== s || t[7] !== e.inputType || t[8] !== e.placeHolderValue || t[9] !== u) {
    if (((p = s), (m = u), e.inputType === G.Record)) {
      let [t] = e.placeHolderValue;
      ((p = t?.key ?? s), (m = t?.value ?? u));
    }
    ((t[6] = s),
      (t[7] = e.inputType),
      (t[8] = e.placeHolderValue),
      (t[9] = u),
      (t[10] = p),
      (t[11] = m));
  } else ((p = t[10]), (m = t[11]));
  let h;
  bb0: {
    if (!r) {
      let e;
      (t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[12] = e)) : (e = t[12]),
        (h = e));
      break bb0;
    }
    if (e.value.length > 0) {
      h = e.value;
      break bb0;
    }
    let n;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = [``]), (t[13] = n)) : (n = t[13]),
      (h = n));
  }
  let g = h,
    _;
  bb1: {
    if (!i) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[14] = e)) : (e = t[14]),
        (_ = e));
      break bb1;
    }
    if (e.value.length > 0) {
      _ = e.value;
      break bb1;
    }
    let n;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = [{ key: ``, value: `` }]), (t[15] = n))
      : (n = t[15]),
      (_ = n));
  }
  let v = _;
  if (n) {
    let r;
    t[16] === e.title
      ? (r = t[17])
      : ((r = (0, Y.jsx)(`p`, {
          className: `text-base font-medium text-token-text-primary`,
          children: e.title,
        })),
        (t[16] = e.title),
        (t[17] = r));
    let i = n && typeof e.placeHolderValue == `string` ? e.placeHolderValue : void 0,
      a;
    t[18] === e
      ? (a = t[19])
      : ((a = (t) => {
          e.onEdit(t.target.value);
        }),
        (t[18] = e),
        (t[19] = a));
    let o;
    t[20] !== e.disabled ||
    t[21] !== e.inputAriaLabel ||
    t[22] !== e.value ||
    t[23] !== i ||
    t[24] !== a
      ? ((o = (0, Y.jsx)(J, {
          "aria-label": e.inputAriaLabel,
          className: `text-base`,
          disabled: e.disabled,
          value: e.value,
          placeholder: i,
          onChange: a,
        })),
        (t[20] = e.disabled),
        (t[21] = e.inputAriaLabel),
        (t[22] = e.value),
        (t[23] = i),
        (t[24] = a),
        (t[25] = o))
      : (o = t[25]);
    let s;
    return (
      t[26] !== r || t[27] !== o
        ? ((s = (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-2 rounded-lg bg-token-input-background px-3 py-2`,
            children: [r, o],
          })),
          (t[26] = r),
          (t[27] = o),
          (t[28] = s))
        : (s = t[28]),
      s
    );
  }
  let y;
  t[29] === e.title
    ? (y = t[30])
    : ((y = (0, Y.jsx)(`p`, {
        className: `text-base font-medium text-token-text-primary`,
        children: e.title,
      })),
      (t[29] = e.title),
      (t[30] = y));
  let b;
  t[31] !== r ||
  t[32] !== g ||
  t[33] !== e ||
  t[34] !== v ||
  t[35] !== p ||
  t[36] !== m ||
  t[37] !== f
    ? ((b = r
        ? g.map((t, n) =>
            (0, Y.jsxs)(
              `div`,
              {
                className: `flex items-center gap-2`,
                children: [
                  (0, Y.jsx)(J, {
                    "aria-label": e.inputAriaLabel,
                    className: `text-base`,
                    disabled: e.disabled,
                    value: t,
                    placeholder:
                      r && e.placeHolderValue.length > 0
                        ? (e.placeHolderValue[n] ?? e.placeHolderValue[0] ?? ``)
                        : ``,
                    onChange: (t) => {
                      let r = [...g];
                      ((r[n] = t.target.value), e.onEdit(r));
                    },
                  }),
                  (0, Y.jsx)(D, {
                    color: `ghost`,
                    size: `icon`,
                    disabled: e.disabled || (g.length <= 1 && t.trim().length === 0),
                    "aria-label": f,
                    onClick: () => {
                      let t = e.value.filter((e, t) => t !== n);
                      e.onEdit(t);
                    },
                    children: (0, Y.jsx)(R, { className: `icon-2xs` }),
                  }),
                ],
              },
              `list-${n}`,
            ),
          )
        : v.map((t, n) =>
            (0, Y.jsxs)(
              `div`,
              {
                className: `grid grid-cols-[1fr_1fr_auto] items-center gap-2`,
                children: [
                  (0, Y.jsx)(J, {
                    "aria-label": e.inputAriaLabel,
                    className: `text-sm`,
                    disabled: e.disabled,
                    placeholder: p,
                    value: t.key,
                    onChange: (t) => {
                      let r = [...v];
                      ((r[n] = { ...r[n], key: t.target.value }), e.onEdit(r));
                    },
                  }),
                  (0, Y.jsx)(J, {
                    "aria-label": e.inputAriaLabel,
                    className: `text-sm`,
                    disabled: e.disabled,
                    placeholder: m,
                    value: t.value,
                    onChange: (t) => {
                      let r = [...v];
                      ((r[n] = { ...r[n], value: t.target.value }), e.onEdit(r));
                    },
                  }),
                  (0, Y.jsx)(D, {
                    color: `ghost`,
                    size: `icon`,
                    disabled:
                      e.disabled ||
                      (v.length <= 1 && t.key.trim().length === 0 && t.value.trim().length === 0),
                    "aria-label": f,
                    onClick: () => {
                      let t = e.value.filter((e, t) => t !== n);
                      e.onEdit(t);
                    },
                    children: (0, Y.jsx)(R, { className: `icon-2xs` }),
                  }),
                ],
              },
              `record-${n}`,
            ),
          )),
      (t[31] = r),
      (t[32] = g),
      (t[33] = e),
      (t[34] = v),
      (t[35] = p),
      (t[36] = m),
      (t[37] = f),
      (t[38] = b))
    : (b = t[38]);
  let x;
  t[39] === b
    ? (x = t[40])
    : ((x = (0, Y.jsx)(`div`, { className: `flex flex-col gap-2`, children: b })),
      (t[39] = b),
      (t[40] = x));
  let S;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = P(
        `text-token-text-secondary/90 justify-center rounded-md border border-dashed text-base`,
      )),
      (t[41] = S))
    : (S = t[41]);
  let C;
  t[42] !== r || t[43] !== e || t[44] !== v
    ? ((C = () => {
        if (r) {
          let t = e.value,
            n = t.length > 0 ? [...t, ``] : [``];
          e.onEdit(n);
          return;
        }
        let t = [...v, { key: ``, value: `` }];
        e.onEdit(t);
      }),
      (t[42] = r),
      (t[43] = e),
      (t[44] = v),
      (t[45] = C))
    : (C = t[45]);
  let w;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(l, { className: `icon-2xs` })), (t[46] = w))
    : (w = t[46]);
  let T = e.addLabel ? e.addLabel : null,
    E;
  t[47] !== e.disabled || t[48] !== T || t[49] !== C
    ? ((E = (0, Y.jsxs)(D, {
        color: `secondary`,
        size: `toolbar`,
        className: S,
        disabled: e.disabled,
        onClick: C,
        children: [w, T],
      })),
      (t[47] = e.disabled),
      (t[48] = T),
      (t[49] = C),
      (t[50] = E))
    : (E = t[50]);
  let O;
  return (
    t[51] !== E || t[52] !== y || t[53] !== x
      ? ((O = (0, Y.jsxs)(`div`, {
          className: `flex flex-col gap-3 rounded-lg bg-token-input-background px-3 py-2`,
          children: [y, x, E],
        })),
        (t[51] = E),
        (t[52] = y),
        (t[53] = x),
        (t[54] = O))
      : (O = t[54]),
    O
  );
}
function J(e) {
  let t = (0, ke.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = P(
        `bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 outline-none focus:border-token-focus-border`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Y.jsx)(`input`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
var ke,
  Y,
  Ae = e(() => {
    ((ke = _()), v(), f(), A(), W(), s(), B(), (Y = k()));
  });
function je(e) {
  return e
    ? e.trim().length === 0
      ? e
      : e === e.toLowerCase()
        ? `${e[0]?.toUpperCase() ?? ``}${e.slice(1)}`
        : e
    : ``;
}
function Me({ config: e, initialKey: t, onSave: n, onCancel: r, onUninstall: i }) {
  let a = (0, X.useMemo)(() => Pe(e, t), [e, t]),
    [o, s] = (0, X.useState)(a),
    [c, l] = (0, X.useState)(!1),
    [d, f] = (0, X.useState)(null),
    p = N(),
    m = o.label.trim(),
    h = !(0, Re.default)(o, a),
    g =
      o.transportType === `streamable_http`
        ? o.http.url.trim().length === 0
        : o.stdio.command.trim().length === 0,
    _ = async () => {
      if (!(m.length === 0 || g)) {
        (f(null), l(!0));
        try {
          await n(Fe(o), o.label);
        } catch (e) {
          f(
            Ne(
              e,
              p.formatMessage({
                id: `settings.mcp.detail.saveError`,
                defaultMessage: `Could not save MCP server`,
                description: `Error shown when saving an MCP server fails`,
              }),
            ),
          );
        } finally {
          l(!1);
        }
      }
    },
    v = e.name && e.name.trim().length > 0,
    y = async () => {
      if (i) {
        (f(null), l(!0));
        try {
          await i(o.label);
        } catch (e) {
          f(
            Ne(
              e,
              p.formatMessage({
                id: `settings.mcp.detail.uninstallError`,
                defaultMessage: `Could not uninstall MCP server`,
                description: `Error shown when uninstalling an MCP server fails`,
              }),
            ),
          );
        } finally {
          l(!1);
        }
      }
    },
    b = v
      ? (0, Z.jsx)(u, {
          id: `settings.mcp.detail.titleExisting`,
          defaultMessage: `Update {name} MCP`,
          description: `Title for the MCP server detail view when editing an existing server`,
          values: { name: je(e.name) },
        })
      : (0, Z.jsx)(u, {
          id: `settings.mcp.detail.titleNew`,
          defaultMessage: `Connect to a custom MCP`,
          description: `Title for the MCP server detail view when adding a new server`,
        });
  return (0, Z.jsx)(Ce, {
    backSlot: (0, Z.jsxs)(D, {
      color: `ghost`,
      size: `toolbar`,
      onClick: () => {
        r();
      },
      children: [
        (0, Z.jsx)(ee, { className: `icon-xs` }),
        (0, Z.jsx)(u, {
          id: `settings.mcp.detail.back`,
          defaultMessage: `Back`,
          description: `Button label to go back to MCP settings`,
        }),
      ],
    }),
    title: b,
    subtitle: v
      ? null
      : (0, Z.jsxs)(`a`, {
          className: `inline-flex items-center gap-1 text-sm text-token-text-secondary hover:text-token-text-primary`,
          href: xe,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: (e) => {
            ne({ event: e, href: xe, initiator: `open_in_browser_bridge` });
          },
          "aria-label": p.formatMessage({
            id: `settings.mcp.detail.docs`,
            defaultMessage: `Open MCP documentation`,
            description: `Aria label for MCP docs link in detail header`,
          }),
          children: [
            (0, Z.jsx)(u, {
              id: `settings.mcp.detail.docs.link`,
              defaultMessage: `Docs`,
              description: `Tooltip link label for MCP docs on add page`,
            }),
            (0, Z.jsx)(j, { href: xe, className: `icon-xxs` }),
          ],
        }),
    action:
      i && o.label.trim().length > 0
        ? (0, Z.jsxs)(D, {
            color: `danger`,
            size: `toolbar`,
            disabled: c,
            onClick: () => {
              y();
            },
            children: [
              (0, Z.jsx)(R, { className: `icon-xs` }),
              (0, Z.jsx)(u, {
                id: `settings.mcp.detail.uninstall`,
                defaultMessage: `Uninstall`,
                description: `Button label to uninstall an MCP server`,
              }),
            ],
          })
        : null,
    children: (0, Z.jsxs)(`div`, {
      className: `relative`,
      children: [
        c ? (0, Z.jsx)(me, { overlay: !0 }) : null,
        (0, Z.jsx)(H, {
          children: (0, Z.jsxs)(H.Content, {
            children: [
              v
                ? (0, Z.jsx)(`p`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, Z.jsx)(u, {
                      id: `settings.mcp.detail.switchTransportNotice`,
                      defaultMessage: `If you would like to switch MCP server type, please uninstall first.`,
                      description: `Notice explaining how to change MCP transport type`,
                    }),
                  })
                : (0, Z.jsxs)(K, {
                    children: [
                      (0, Z.jsx)(q, {
                        title: (0, Z.jsx)(u, {
                          id: `settings.mcp.detail.name`,
                          defaultMessage: `Name`,
                          description: `Name for MCP server display name`,
                        }),
                        value: o.label,
                        placeHolderValue: `MCP server name`,
                        inputType: G.String,
                        onEdit: (e) => {
                          s((t) => ({ ...t, label: e }));
                        },
                      }),
                      (0, Z.jsx)(Ee, {
                        tabs: [
                          {
                            key: `stdio`,
                            name: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.transport.stdio`,
                              defaultMessage: `STDIO`,
                              description: `Label for stdio transport toggle`,
                            }),
                          },
                          {
                            key: `streamable_http`,
                            name: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.transport.http`,
                              defaultMessage: `Streamable HTTP`,
                              description: `Label for HTTP transport toggle`,
                            }),
                          },
                        ],
                        selectedKey: o.transportType,
                        onSelect: (e) => {
                          s((t) => ({ ...t, transportType: e }));
                        },
                      }),
                    ],
                  }),
              (0, Z.jsx)(K, {
                children:
                  o.transportType === `stdio`
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.command`,
                              defaultMessage: `Command to launch`,
                              description: `Label for MCP stdio command`,
                            }),
                            value: o.stdio.command,
                            placeHolderValue: `openai-dev-mcp serve-sqlite`,
                            inputType: G.String,
                            onEdit: (e) => {
                              s((t) => ({ ...t, stdio: { ...t.stdio, command: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.args`,
                              defaultMessage: `Arguments`,
                              description: `Label for MCP stdio arguments`,
                            }),
                            value: o.stdio.args,
                            placeHolderValue: [],
                            inputType: G.Array,
                            addLabel: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.addArgument`,
                              defaultMessage: `Add argument`,
                              description: `Add button label for MCP stdio arguments`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({ ...t, stdio: { ...t.stdio, args: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.envVars`,
                              defaultMessage: `Environment variables`,
                              description: `Label for MCP stdio environment variables`,
                            }),
                            value: o.stdio.env,
                            placeHolderValue: [],
                            inputType: G.Record,
                            addLabel: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.addEnvVar`,
                              defaultMessage: `Add environment variable`,
                              description: `Add button label for MCP stdio environment variables`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({ ...t, stdio: { ...t.stdio, env: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.envVarPassthrough`,
                              defaultMessage: `Environment variable passthrough`,
                              description: `Label for MCP stdio env var passthrough`,
                            }),
                            value: o.stdio.envVars,
                            placeHolderValue: [],
                            inputType: G.Array,
                            addLabel: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.addEnvVarPassthrough`,
                              defaultMessage: `Add variable`,
                              description: `Add button label for MCP stdio env var passthrough`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({ ...t, stdio: { ...t.stdio, envVars: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.cwd`,
                              defaultMessage: `Working directory`,
                              description: `Label for MCP stdio working directory`,
                            }),
                            value: o.stdio.cwd,
                            placeHolderValue: `~/code`,
                            inputType: G.String,
                            onEdit: (e) => {
                              s((t) => ({ ...t, stdio: { ...t.stdio, cwd: e } }));
                            },
                          }),
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.http.url`,
                              defaultMessage: `URL`,
                              description: `Label for MCP HTTP URL`,
                            }),
                            value: o.http.url,
                            placeHolderValue: `https://mcp.example.com/mcp`,
                            inputType: G.String,
                            onEdit: (e) => {
                              s((t) => ({ ...t, http: { ...t.http, url: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.http.bearerToken`,
                              defaultMessage: `Bearer token env var`,
                              description: `Label for MCP HTTP bearer token env var`,
                            }),
                            value: o.http.bearerTokenEnvVar,
                            placeHolderValue: `MCP_BEARER_TOKEN`,
                            inputType: G.String,
                            onEdit: (e) => {
                              s((t) => ({ ...t, http: { ...t.http, bearerTokenEnvVar: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.http.headers`,
                              defaultMessage: `Headers`,
                              description: `Label for MCP HTTP headers`,
                            }),
                            value: o.http.httpHeaders,
                            placeHolderValue: [],
                            inputType: G.Record,
                            addLabel: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.http.addHeader`,
                              defaultMessage: `Add header`,
                              description: `Add button label for MCP HTTP headers`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({ ...t, http: { ...t.http, httpHeaders: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.http.envHeaders`,
                              defaultMessage: `Headers from environment variables`,
                              description: `Label for MCP HTTP env headers`,
                            }),
                            value: o.http.envHttpHeaders,
                            placeHolderValue: [],
                            inputType: G.Record,
                            addLabel: (0, Z.jsx)(u, {
                              id: `settings.mcp.detail.http.addEnvHeader`,
                              defaultMessage: `Add variable`,
                              description: `Add button label for MCP HTTP env headers`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({ ...t, http: { ...t.http, envHttpHeaders: e } }));
                            },
                          }),
                        ],
                      }),
              }),
              d == null
                ? null
                : (0, Z.jsx)(`p`, {
                    role: `alert`,
                    className: `rounded-md bg-token-input-validation-error-background/20 px-3 py-2 text-sm text-token-error-foreground`,
                    children: d,
                  }),
              (0, Z.jsx)(`div`, {
                className: `flex justify-end`,
                children: (0, Z.jsx)(D, {
                  color: `primary`,
                  size: `toolbar`,
                  disabled: m.length === 0 || !h || c || g,
                  onClick: _,
                  children: (0, Z.jsx)(u, {
                    id: `settings.mcp.detail.save`,
                    defaultMessage: `Save`,
                    description: `Save button label on MCP server detail view`,
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Ne(e, t) {
  return e instanceof Error && e.message.trim().length > 0 ? e.message : t;
}
function Pe(e, t) {
  let n = `command` in e ? `stdio` : `streamable_http`;
  return {
    base: {
      enabled: e.enabled ?? void 0,
      startup_timeout_sec: e.startup_timeout_sec ?? void 0,
      startup_timeout_ms: e.startup_timeout_ms ?? void 0,
      tool_timeout_sec: e.tool_timeout_sec ?? void 0,
      enabled_tools: e.enabled_tools ?? void 0,
      disabled_tools: e.disabled_tools ?? void 0,
    },
    label: t ?? e.name ?? ``,
    transportType: n,
    stdio: {
      command: `command` in e ? e.command : ``,
      args: `command` in e && e.args && e.args.length > 0 ? e.args : [],
      env: `command` in e && e.env ? Ie(e.env) : [],
      envVars: `command` in e && e.env_vars && e.env_vars.length > 0 ? e.env_vars : [],
      cwd: `command` in e && e.cwd ? e.cwd : ``,
    },
    http: {
      url: `url` in e ? e.url : ``,
      bearerTokenEnvVar: `url` in e && e.bearer_token_env_var ? e.bearer_token_env_var : ``,
      httpHeaders: `url` in e && e.http_headers ? Ie(e.http_headers) : [],
      envHttpHeaders: `url` in e && e.env_http_headers ? Ie(e.env_http_headers) : [],
    },
  };
}
function Fe(e) {
  let t = e.base;
  if (e.transportType === `streamable_http`) {
    let n = Le(e.http.httpHeaders),
      r = Le(e.http.envHttpHeaders);
    return {
      ...t,
      url: e.http.url,
      bearer_token_env_var:
        e.http.bearerTokenEnvVar.trim().length > 0 ? e.http.bearerTokenEnvVar.trim() : void 0,
      http_headers: Object.keys(n).length > 0 ? n : void 0,
      env_http_headers: Object.keys(r).length > 0 ? r : void 0,
    };
  }
  let n = Le(e.stdio.env),
    r = e.stdio.envVars.map((e) => e.trim()).filter((e) => e.length > 0),
    i = e.stdio.args.map((e) => e.trim()).filter((e) => e.length > 0);
  return {
    ...t,
    command: e.stdio.command,
    args: i.length > 0 ? i : void 0,
    env: Object.keys(n).length > 0 ? n : void 0,
    env_vars: r.length > 0 ? r : void 0,
    cwd: e.stdio.cwd.trim().length > 0 ? e.stdio.cwd.trim() : void 0,
  };
}
function Ie(e) {
  let t = Object.entries(e);
  return t.length === 0 ? [{ key: ``, value: `` }] : t.map(([e, t]) => ({ key: e, value: t }));
}
function Le(e) {
  let t = {};
  return (
    e.forEach(({ key: e, value: n }) => {
      let r = e.trim(),
        i = n.trim();
      r.length === 0 || i.length === 0 || (t[r] = i);
    }),
    t
  );
}
var Re,
  X,
  Z,
  ze = e(() => {
    ((Re = t(o(), 1)),
      (X = t(I(), 1)),
      f(),
      A(),
      d(),
      p(),
      Te(),
      be(),
      W(),
      T(),
      B(),
      V(),
      Se(),
      Ae(),
      U(),
      we(),
      (Z = k()));
  }),
  Be,
  Ve = e(() => {
    (f(),
      (Be = b({
        servers: {
          id: `settings.mcp.myServers`,
          defaultMessage: `Servers`,
          description: `Heading for the user's MCP servers list`,
        },
      })));
  });
function He() {
  let { selectedHostId: e } = le(),
    { data: t } = ce(null, { hostId: e }),
    { data: o, isFetching: s } = ae(O, e),
    l = oe({ hostId: e }),
    d = a({ hostId: e }),
    f = r(),
    p = N(),
    g = c(i),
    [_, v] = (0, Q.useState)({}),
    [y, b] = (0, Q.useState)([]),
    [x, w] = (0, Q.useState)({}),
    [T, E] = (0, Q.useState)(null),
    [ee, k] = (0, Q.useState)(null),
    A = t?.servers ?? {},
    te = t?.serverOrigins ?? {},
    j = t?.configWriteTarget ?? null,
    M = Object.keys(A),
    ne = (0, qe.default)(
      M,
      (e) => A[e]?.name?.trim() || e,
      (e) => e,
    ),
    ie = new Set(Object.entries(A).flatMap(([e, t]) => [e, t.name ?? e])),
    P = y.includes(e),
    se = P ? (x[e] ?? []) : [],
    F = (0, qe.default)(
      (t == null ? [] : (o?.data ?? [])).filter((e) => !ie.has(e.name) && !se.includes(e.name)),
      (e) => e.name,
    ),
    I = M.length > 0,
    L = F.length > 0,
    R = {};
  o != null &&
    (o.data.forEach((e) => {
      R[e.name] = e.authStatus;
    }),
    Object.entries(A).forEach(([e, t]) => {
      let n = R[e] ?? (t.name == null ? void 0 : R[t.name]);
      n != null && (R[e] = n);
    }));
  let z = () => {
      b((t) => (t.includes(e) ? t : [...t, e]));
    },
    B = () => {
      (k(null), E(null));
    },
    V = () => {
      if (j != null) return j.filePath;
      throw Error(
        p.formatMessage({
          id: `settings.mcp.noWritableConfig`,
          defaultMessage: `MCP server settings are unavailable`,
          description: `Error shown when MCP settings cannot find a writable config.toml`,
        }),
      );
    },
    de = async (e, t) => {
      try {
        (await d.mutateAsync({ key: e, enabled: t }), z());
      } catch {}
    },
    fe = async (e, t) => {
      let r = T ?? Ue(t, M, null);
      try {
        (await l.mutateAsync({ filePath: V(), key: r, value: e }), z(), B());
      } catch (e) {
        throw (
          n.error(`Failed to save MCP server`, { safe: { targetKey: r }, sensitive: { error: e } }),
          e
        );
      }
    },
    me = async (t) => {
      let r = T ?? Ue(t, M, null);
      try {
        (await l.mutateAsync({ filePath: V(), key: r, value: null }),
          w((n) => ({ ...n, [e]: (0, Je.default)([...(n[e] ?? []), r, t, A[r]?.name ?? r]) })),
          z(),
          B());
      } catch (e) {
        throw (
          n.error(`Failed to uninstall MCP server`, {
            safe: { targetKey: r },
            sensitive: { error: e },
          }),
          e
        );
      }
    },
    U = async (t) => {
      if (!s) {
        let e = R[t];
        if (e !== void 0 && e !== `notLoggedIn`) return;
      }
      let r = _[t];
      if (r) {
        h({ href: r, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
        return;
      }
      v((e) => ({ ...e, [t]: null }));
      try {
        let { authorizationUrl: n } = await S(`login-mcp-server`, { hostId: e, name: t });
        n &&
          (v((e) => ({ ...e, [t]: n })),
          h({ href: n, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }));
      } catch (e) {
        (n.error(`Failed to start login for MCP server`, {
          safe: { serverName: t },
          sensitive: { error: e },
        }),
          v((e) => {
            let { [t]: n, ...r } = e;
            return r;
          }));
      }
    },
    W = (0, Q.useEffectEvent)((e, t) => {
      (v((n) => {
        let r = n[e];
        if (t || r == null) {
          let { [e]: t, ...r } = n;
          return r;
        }
        return n;
      }),
        t && (z(), f.invalidateQueries({ queryKey: re })));
    }),
    G = (0, Q.useRef)(!0);
  if (
    ((0, Q.useEffect)(() => {
      if (G.current) {
        G.current = !1;
        return;
      }
      g?.hostId === e && W(g.name, g.success);
    }, [g, e]),
    C(
      `codex-app-server-initialized`,
      (e) => {
        (b((t) => t.filter((t) => t !== e.hostId)),
          w((t) => {
            let { [e.hostId]: n, ...r } = t;
            return r;
          }),
          f.invalidateQueries({ queryKey: [...re, e.hostId] }));
      },
      [f],
    ),
    ee)
  )
    return (0, $.jsx)(Me, {
      config: ee,
      initialKey: T,
      onCancel: B,
      onSave: fe,
      onUninstall: T ? me : void 0,
    });
  let _e = (0, $.jsx)(ge, { slug: Ye }),
    ve = (0, $.jsx)(he, { slug: Ye }),
    ye = P
      ? (0, $.jsxs)(D, {
          color: `ghost`,
          size: `toolbar`,
          onClick: () => {
            m.dispatchMessage(`codex-app-server-restart`, { hostId: e });
          },
          children: [
            (0, $.jsx)(pe, { className: `icon-xs` }),
            (0, $.jsx)(u, {
              id: `settings.mcp.restartApp`,
              defaultMessage: `Restart`,
              description: `Button label to restart the codex electron app after MCP settings change`,
            }),
          ],
        })
      : null,
    be = () => {
      (E(null), k({ ...Xe, name: void 0 }));
    };
  return (0, $.jsxs)(Ce, {
    title: _e,
    subtitle: ve,
    action: ye,
    children: [
      (0, $.jsxs)(H, {
        children: [
          (0, $.jsx)(H.Header, {
            title: (0, $.jsx)(u, { ...Be.servers }),
            actions: (I || L) && (0, $.jsx)(Ge, { onClick: be }),
          }),
          I || !L
            ? (0, $.jsx)(H.Content, {
                children: (0, $.jsx)(K, {
                  children: I
                    ? ne.map((e) =>
                        (0, $.jsx)(
                          We,
                          {
                            name: A[e]?.name ?? e,
                            statusLoading: s,
                            enabled: A[e]?.enabled !== !1,
                            authStatus: R[e],
                            onAuthenticateClicked: () => U(e),
                            onEnableClicked: A[e] ? (t) => de(e, t) : void 0,
                            onSettingsClicked: A[e]
                              ? async () => {
                                  (E(e), k(A[e]));
                                }
                              : void 0,
                            isReadOnly: te[e]?.name.type === `project`,
                          },
                          e,
                        ),
                      )
                    : (0, $.jsx)(ue, {
                        label: (0, $.jsx)(u, {
                          id: `settings.mcp.empty`,
                          defaultMessage: `No MCP servers connected`,
                          description: `Empty state for MCP servers list`,
                        }),
                        control: (0, $.jsx)(Ge, { onClick: be }),
                      }),
                }),
              })
            : null,
        ],
      }),
      L
        ? (0, $.jsxs)(H, {
            children: [
              (0, $.jsx)(H.Header, {
                title: (0, $.jsx)(u, {
                  id: `settings.mcp.fromPlugins`,
                  defaultMessage: `From plugins`,
                  description: `Heading for MCP servers provided by installed plugins`,
                }),
              }),
              (0, $.jsx)(H.Content, {
                children: (0, $.jsx)(K, {
                  children: F.map((e) =>
                    (0, $.jsx)(
                      We,
                      {
                        name: e.name,
                        statusLoading: s,
                        authStatus: e.authStatus,
                        onAuthenticateClicked: () => U(e.name),
                      },
                      `status-${e.name}`,
                    ),
                  ),
                }),
              }),
            ],
          })
        : null,
    ],
  });
}
function Ue(e, t, n) {
  let r =
      e
        ?.trim()
        .replace(/\s+/gu, `_`)
        .replace(/[^a-zA-Z0-9-_]+/gu, `-`)
        .replace(/-+/gu, `-`) ?? ``,
    i = r.length > 0 ? r.toLowerCase() : `custom-server`,
    a = t.filter((e) => (n == null ? !0 : e !== n));
  if (!a.includes(i)) return i;
  let o = 2,
    s = `${i}-${o}`;
  for (; a.includes(s); ) ((o += 1), (s = `${i}-${o}`));
  return s;
}
function We(e) {
  let t = (0, Ke.c)(15),
    {
      name: n,
      statusLoading: r,
      onAuthenticateClicked: i,
      authStatus: a,
      onEnableClicked: o,
      enabled: s,
      onSettingsClicked: c,
      isReadOnly: l,
    } = e,
    d = N(),
    f = !r && i !== void 0 && a === `notLoggedIn`,
    p = o !== void 0 || c !== void 0 || f,
    m;
  t[0] === n
    ? (m = t[1])
    : ((m = (0, $.jsx)(`span`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, $.jsx)(`span`, {
          className: `flex flex-wrap items-end gap-1`,
          children: (0, $.jsx)(`span`, {
            className: `font-medium text-token-text-primary`,
            children: n,
          }),
        }),
      })),
      (t[0] = n),
      (t[1] = m));
  let h;
  t[2] !== s ||
  t[3] !== d ||
  t[4] !== l ||
  t[5] !== i ||
  t[6] !== o ||
  t[7] !== c ||
  t[8] !== p ||
  t[9] !== f ||
  t[10] !== r
    ? ((h = p
        ? (0, $.jsxs)(Oe, {
            children: [
              f
                ? (0, $.jsx)(D, {
                    color: `outline`,
                    disabled: !!r,
                    size: `toolbar`,
                    onClick: () => {
                      i();
                    },
                    children: (0, $.jsx)(u, {
                      id: `settings.mcp.server.login`,
                      defaultMessage: `Authenticate`,
                      description: `Button label to authenticate with an MCP server`,
                    }),
                  })
                : null,
              c
                ? (0, $.jsx)(D, {
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: !0,
                    disabled: l === !0,
                    onClick: () => {
                      c();
                    },
                    "aria-label": d.formatMessage({
                      id: `settings.mcp.server.settings`,
                      defaultMessage: `Settings`,
                      description: `Button label to view MCP server settings`,
                    }),
                    children: (0, $.jsx)(ve, { className: `icon-xs` }),
                  })
                : null,
              o
                ? (0, $.jsx)(y, {
                    disabled: r === !0 || l === !0,
                    checked: s === !0,
                    onChange: (e) => {
                      o(e);
                    },
                    ariaLabel: d.formatMessage({
                      id: `settings.mcp.server.enable`,
                      defaultMessage: `Enable`,
                      description: `Toggle to enable an MCP server`,
                    }),
                  })
                : null,
            ],
          })
        : null),
      (t[2] = s),
      (t[3] = d),
      (t[4] = l),
      (t[5] = i),
      (t[6] = o),
      (t[7] = c),
      (t[8] = p),
      (t[9] = f),
      (t[10] = r),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== m || t[13] !== h
      ? ((g = (0, $.jsx)(ue, { label: m, description: null, control: h })),
        (t[12] = m),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
function Ge(e) {
  let t = (0, Ke.c)(6),
    { onClick: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = () => {
        n?.();
      }),
      (t[0] = n),
      (t[1] = r));
  let i, a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(l, { className: `icon-xs` })),
      (a = (0, $.jsx)(u, {
        id: `settings.mcp.addServer`,
        defaultMessage: `Add server`,
        description: `Button to add a new MCP server`,
      })),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[4] === r
      ? (o = t[5])
      : ((o = (0, $.jsxs)(D, {
          color: `secondary`,
          size: `toolbar`,
          onClick: r,
          children: [i, a],
        })),
        (t[4] = r),
        (t[5] = o)),
    o
  );
}
var Ke, qe, Je, Q, $, Ye, Xe;
e(() => {
  ((Ke = _()),
    se(),
    (qe = t(de(), 1)),
    (Je = t(ie(), 1)),
    E(),
    (Q = t(I(), 1)),
    f(),
    F(),
    w(),
    A(),
    d(),
    x(),
    s(),
    fe(),
    ye(),
    M(),
    te(),
    De(),
    Se(),
    ze(),
    Ve(),
    U(),
    z(),
    L(),
    _e(),
    we(),
    g(),
    ($ = k()),
    (Ye = `mcp-settings`),
    (Xe = { command: ``, args: [], env_vars: [], enabled: !0 }));
})();
export { He as McpSettings };
//# sourceMappingURL=mcp-settings.js.map
