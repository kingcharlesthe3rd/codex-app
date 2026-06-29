import { s as e } from "./chunk-Bj-mKKzh.js";
import { Nr as t, uo as n } from "./app-server-manager-signals.js";
import { n as r, t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx.js";
import { g as o, lt as s, s as c } from "./vscode-api.js";
import { o as l } from "./lib-2.js";
import { t as u } from "./use-is-dark.js";
import { t as ee } from "./tooltip.js";
import { t as d } from "./open-workspace-file.js";
import { t as f } from "./proxy.js";
import { t as p } from "./parse-diff.js";
import { t as m } from "./file-diff.js";
import { t as h } from "./chevron-right.js";
import { t as g } from "./thinking-shimmer.js";
import { t as _ } from "./animations-D-vdA-0W.js";
import { t as v } from "./code-snippet.js";
import { t as y } from "./copy-button.js";
import { r as te } from "./diff-stats.js";
import { t as b } from "./use-measured-element-height.js";
function x(e) {
  let t = e.toLowerCase();
  if (/(^|[\\/])makefile$/.test(t)) return `makefile`;
  if (/(^|[\\/])(containerfile|dockerfile)$/.test(t)) return `dockerfile`;
  switch (t.split(`.`).pop() ?? ``) {
    case `cts`:
    case `mts`:
    case `ts`:
      return `typescript`;
    case `tsx`:
      return `tsx`;
    case `cjs`:
    case `js`:
    case `mjs`:
      return `javascript`;
    case `jsx`:
      return `jsx`;
    case `json`:
    case `json5`:
    case `jsonc`:
    case `jsonl`:
    case `ndjson`:
    case `webmanifest`:
      return `json`;
    case `md`:
    case `markdown`:
    case `mdx`:
      return `markdown`;
    case `yml`:
    case `yaml`:
      return `yaml`;
    case `xml`:
      return `xml`;
    case `htm`:
    case `html`:
    case `xhtml`:
      return `html`;
    case `css`:
      return `css`;
    case `sass`:
    case `scss`:
      return `scss`;
    case `less`:
      return `less`;
    case `sh`:
    case `zsh`:
    case `bash`:
      return `bash`;
    case `py`:
    case `pyi`:
    case `pyw`:
    case `bzl`:
    case `bazel`:
      return `python`;
    case `rb`:
      return `ruby`;
    case `go`:
      return `go`;
    case `rs`:
      return `rust`;
    case `java`:
      return `java`;
    case `c`:
      return `c`;
    case `c++`:
    case `c++m`:
    case `h`:
    case `h++`:
    case `hpp`:
    case `hh`:
    case `hxx`:
    case `cc`:
    case `cpp`:
    case `cxx`:
      return `cpp`;
    case `cs`:
    case `csx`:
      return `csharp`;
    case `kt`:
    case `kts`:
      return `kotlin`;
    case `php`:
    case `php4`:
    case `php5`:
    case `phtml`:
      return `php`;
    case `sql`:
      return `sql`;
    case `ini`:
      return `ini`;
    case `toml`:
      return `ini`;
    case `r`:
      return `r`;
    case `lua`:
      return `lua`;
    case `tex`:
      return `latex`;
    case `pl`:
      return `perl`;
    case `graphql`:
    case `gql`:
      return `graphql`;
    case `swift`:
      return `swift`;
    case `dockerfile`:
      return `dockerfile`;
    case `bat`:
    case `cmd`:
      return `cmd`;
    case `ps1`:
    case `psd1`:
    case `psm1`:
      return `powershell`;
    default:
      return;
  }
}
function S(e, t) {
  if (!e) return null;
  let n = C(e),
    r = p(e)[0];
  return r && (r.additions > 0 || r.deletions > 0 || (n.added === 0 && n.deleted === 0))
    ? {
        added: r.additions,
        deleted: r.deletions,
        openLocation: { path: t, line: r.firstAdditionLine ?? r.firstDeletionLine ?? 1 },
      }
    : n.added === 0 && n.deleted === 0
      ? null
      : { ...n, openLocation: { path: t, line: 1 } };
}
function C(e) {
  let t = 0,
    n = 0;
  for (let r of e.split(/\r?\n/))
    r.startsWith(`+++`) ||
      r.startsWith(`---`) ||
      (r.startsWith(`+`) ? (t += 1) : r.startsWith(`-`) && (n += 1));
  return { added: t, deleted: n };
}
var w = s(),
  T = i();
function E(e) {
  let t = (0, w.c)(8),
    { children: n, className: r, padding: i } = e,
    o = i === void 0 ? `default` : i,
    s,
    c;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = a(`min-w-0 text-size-chat`, r);
      if (o === `offset`) {
        c = (0, T.jsx)(`div`, { className: a(e, `relative overflow-visible py-0`), children: n });
        break bb0;
      }
      s = a(e, `py-0`);
    }
    ((t[0] = n), (t[1] = r), (t[2] = o), (t[3] = s), (t[4] = c));
  } else ((s = t[3]), (c = t[4]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  let l;
  return (
    t[5] !== n || t[6] !== s
      ? ((l = (0, T.jsx)(`div`, { className: s, children: n })), (t[5] = n), (t[6] = s), (t[7] = l))
      : (l = t[7]),
    l
  );
}
var D = e(r(), 1);
function O(e) {
  let t = (0, w.c)(12),
    { item: n, isTurnCancelled: r, cwd: i, hostId: a } = e,
    o = r === void 0 ? !1 : r,
    s;
  t[0] !== o || t[1] !== n.approvalRequestId || t[2] !== n.success
    ? ((s =
        n.success === !0
          ? `applied`
          : n.success === !1
            ? `rejected`
            : n.approvalRequestId == null
              ? o
                ? `stopped`
                : `streaming`
              : `pending`),
      (t[0] = o),
      (t[1] = n.approvalRequestId),
      (t[2] = n.success),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === n.changes
    ? (c = t[5])
    : ((c = Object.entries(n.changes)), (t[4] = n.changes), (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== a || t[8] !== n.grantRoot || t[9] !== s || t[10] !== c
      ? ((l = (0, T.jsx)(E, {
          padding: `offset`,
          children: (0, T.jsx)(`div`, {
            className: `flex flex-col gap-[var(--conversation-patch-file-gap,var(--conversation-tool-assistant-gap,8px))]`,
            children: c.map((e) => {
              let [t, r] = e;
              return (0, T.jsx)(
                k,
                { path: t, change: r, status: s, cwd: i, hostId: a, grantRoot: n.grantRoot },
                t,
              );
            }),
          }),
        })),
        (t[6] = i),
        (t[7] = a),
        (t[8] = n.grantRoot),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function ne(e) {
  let t = (0, w.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = a(
        `text-token-description-foreground/80 bg-token-editor-background flex w-full items-center justify-center px-2 pt-7 pb-8 text-size-chat`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let o;
  return (
    t[5] !== r || t[6] !== i
      ? ((o = (0, T.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = o))
      : (o = t[7]),
    o
  );
}
function k(e) {
  let r = (0, w.c)(90),
    { path: i, change: o, status: s, cwd: u, hostId: p, grantRoot: m } = e,
    v = s === `streaming`,
    y = s === `stopped`,
    x = s === `pending`,
    C = s === `rejected`,
    E = v || x,
    O = E || y,
    [k, oe] = (0, D.useState)(!1),
    { elementHeightPx: se, elementRef: ce } = b(),
    le = c(`open-file`),
    A;
  r[0] !== o || r[1] !== i ? ((A = t(i, o)), (r[0] = o), (r[1] = i), (r[2] = A)) : (A = r[2]);
  let j = A,
    M;
  r[3] === k ? (M = r[4]) : ((M = () => {}), (r[3] = k), (r[4] = M));
  let ue = (0, D.useEffectEvent)(M),
    N;
  r[5] === ue
    ? (N = r[6])
    : ((N = () => {
        ue();
      }),
      (r[5] = ue),
      (r[6] = N));
  let de;
  (r[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((de = [!1]), (r[7] = de)) : (de = r[7]),
    (0, D.useEffect)(N, de));
  let P;
  bb0: {
    if (o.type === `add`) {
      if (y) {
        let e;
        (r[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(l, {
              id: `codex.patch.change.stoppedCreating`,
              defaultMessage: `Stopped creating`,
              description: `Status label shown when apply_patch stopped before completing file creation`,
            })),
            (r[8] = e))
          : (e = r[8]),
          (P = e));
        break bb0;
      }
      if (C) {
        let e;
        (r[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(l, {
              id: `codex.patch.change.rejected-add`,
              defaultMessage: `Rejected`,
              description: `Label indicating a file creation was rejected in the patch summary`,
            })),
            (r[9] = e))
          : (e = r[9]),
          (P = e));
        break bb0;
      }
      let e;
      (r[10] === O
        ? (e = r[11])
        : ((e = O
            ? (0, T.jsx)(l, {
                id: `codex.patch.change.creating`,
                defaultMessage: `Creating`,
                description: `Label indicating a file is being created while awaiting approval`,
              })
            : (0, T.jsx)(l, {
                id: `codex.patch.change.created`,
                defaultMessage: `Created`,
                description: `Label indicating a file has been created in the patch summary`,
              })),
          (r[10] = O),
          (r[11] = e)),
        (P = e));
      break bb0;
    }
    if (o.type === `delete`) {
      if (y) {
        let e;
        (r[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(l, {
              id: `codex.patch.change.stoppedDeleting`,
              defaultMessage: `Stopped deleting`,
              description: `Status label shown when apply_patch stopped before completing file deletion`,
            })),
            (r[12] = e))
          : (e = r[12]),
          (P = e));
        break bb0;
      }
      if (C) {
        let e;
        (r[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(l, {
              id: `codex.patch.change.rejected-delete`,
              defaultMessage: `Rejected`,
              description: `Label indicating a file deletion was rejected in the patch summary`,
            })),
            (r[13] = e))
          : (e = r[13]),
          (P = e));
        break bb0;
      }
      let e;
      (r[14] === O
        ? (e = r[15])
        : ((e = O
            ? (0, T.jsx)(l, {
                id: `codex.patch.change.deleting`,
                defaultMessage: `Deleting`,
                description: `Label indicating a file has been deleted in the patch summary`,
              })
            : (0, T.jsx)(l, {
                id: `codex.patch.change.deleted`,
                defaultMessage: `Deleted`,
                description: `Label indicating a file has been deleted in the patch summary`,
              })),
          (r[14] = O),
          (r[15] = e)),
        (P = e));
      break bb0;
    }
    if (y) {
      let e;
      (r[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, T.jsx)(l, {
            id: `codex.patch.change.stoppedEditing`,
            defaultMessage: `Stopped editing`,
            description: `Status label shown when apply_patch stopped before completing file edit`,
          })),
          (r[16] = e))
        : (e = r[16]),
        (P = e));
      break bb0;
    }
    if (C) {
      let e;
      (r[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, T.jsx)(l, {
            id: `codex.patch.change.rejected-edit`,
            defaultMessage: `Rejected`,
            description: `Label indicating a file edit was rejected in the patch summary`,
          })),
          (r[17] = e))
        : (e = r[17]),
        (P = e));
      break bb0;
    }
    let e;
    (r[18] === O
      ? (e = r[19])
      : ((e = O
          ? (0, T.jsx)(l, {
              id: `codex.patch.change.editing`,
              defaultMessage: `Editing`,
              description: `Label indicating a file is being edited in the patch summary while awaiting approval`,
            })
          : (0, T.jsx)(l, {
              id: `codex.patch.change.edited`,
              defaultMessage: `Edited`,
              description: `Label indicating a file has been edited in the patch summary`,
            })),
        (r[18] = O),
        (r[19] = e)),
      (P = e));
  }
  let F = P,
    fe;
  r[20] !== i || r[21] !== j
    ? ((fe = S(j, i)), (r[20] = i), (r[21] = j), (r[22] = fe))
    : (fe = r[22]);
  let I = fe,
    pe;
  r[23] !== u ||
  r[24] !== I?.openLocation?.line ||
  r[25] !== m ||
  r[26] !== p ||
  r[27] !== le.mutate ||
  r[28] !== i
    ? ((pe = () => {
        d({
          path: i,
          line: I?.openLocation?.line,
          cwd: m ?? u ?? null,
          ...(p == null ? {} : { hostId: p }),
          openFile: le.mutate,
        });
      }),
      (r[23] = u),
      (r[24] = I?.openLocation?.line),
      (r[25] = m),
      (r[26] = p),
      (r[27] = le.mutate),
      (r[28] = i),
      (r[29] = pe))
    : (pe = r[29]);
  let L = pe,
    me = o.type === `delete` && I,
    R;
  bb1: {
    if (!k || O || C) {
      R = null;
      break bb1;
    }
    if (o.type === `add`) {
      let e;
      (r[30] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, T.jsx)(l, {
            id: `codex.patch.change.created-file`,
            defaultMessage: `Created file`,
            description: `Header label shown for an expanded created file entry`,
          })),
          (r[30] = e))
        : (e = r[30]),
        (R = e));
      break bb1;
    }
    if (o.type === `delete`) {
      let e;
      (r[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, T.jsx)(l, {
            id: `codex.patch.change.deleted-file`,
            defaultMessage: `Deleted file`,
            description: `Header label shown for an expanded deleted file entry`,
          })),
          (r[31] = e))
        : (e = r[31]),
        (R = e));
      break bb1;
    }
    let e;
    (r[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, T.jsx)(l, {
          id: `codex.patch.change.edited-file`,
          defaultMessage: `Edited file`,
          description: `Header label shown for an expanded edited file entry`,
        })),
        (r[32] = e))
      : (e = r[32]),
      (R = e));
  }
  let z = R,
    B = z != null,
    V = k,
    he = V ? se : 0,
    ge = V ? ce : null,
    H;
  r[33] !== o ||
  r[34] !== I?.added ||
  r[35] !== I?.deleted ||
  r[36] !== I?.openLocation ||
  r[37] !== L ||
  r[38] !== x ||
  r[39] !== i ||
  r[40] !== j
    ? ((H = j
        ? (0, T.jsx)(ie, {
            className: `mt-1.5`,
            path: i,
            unifiedDiff: j,
            openLocation: I?.openLocation,
            linesAdded: I?.added,
            linesRemoved: I?.deleted,
            onOpenFile: L,
            children: (0, T.jsx)(ae, { path: i, change: o, unifiedDiff: j, isShortView: x }),
          })
        : (0, T.jsx)(ne, {
            children:
              o.type === `delete`
                ? (0, T.jsx)(l, {
                    id: `codex.patch.change.contentsDeleted`,
                    defaultMessage: `Contents deleted`,
                    description: `Label indicating a file has been deleted in the patch summary`,
                  })
                : (0, T.jsx)(l, {
                    id: `codex.patch.change.noChanges`,
                    defaultMessage: `No changes`,
                    description: `Label indicating no changes in the patch summary`,
                  }),
          })),
      (r[33] = o),
      (r[34] = I?.added),
      (r[35] = I?.deleted),
      (r[36] = I?.openLocation),
      (r[37] = L),
      (r[38] = x),
      (r[39] = i),
      (r[40] = j),
      (r[41] = H))
    : (H = r[41]);
  let _e;
  r[42] !== H || r[43] !== ge
    ? ((_e = (0, T.jsx)(`div`, { ref: ge, children: H })), (r[42] = H), (r[43] = ge), (r[44] = _e))
    : (_e = r[44]);
  let ve = _e,
    ye = x ? `rounded-xl` : `rounded-lg`,
    U;
  r[45] === ye
    ? (U = r[46])
    : ((U = a(`flex flex-col overflow-clip`, ye)), (r[45] = ye), (r[46] = U));
  let be, xe;
  r[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = a(
        `cursor-interaction group flex items-center justify-between gap-1 text-ellipsis text-size-chat`,
        `px-0 py-0`,
      )),
      (xe = () => oe(re)),
      (r[47] = be),
      (r[48] = xe))
    : ((be = r[47]), (xe = r[48]));
  let W;
  r[49] !== F || r[50] !== z || r[51] !== E || r[52] !== x || r[53] !== y || r[54] !== v
    ? ((W = v
        ? (0, T.jsx)(g, {
            active: !0,
            className: `text-token-description-foreground/80 select-text group-hover:text-token-foreground`,
            children: F,
          })
        : y
          ? (0, T.jsx)(`span`, {
              className: `text-token-description-foreground/80 select-text group-hover:text-token-foreground`,
              children: F,
            })
          : x
            ? null
            : (0, T.jsx)(g, {
                active: E,
                className: a(
                  `text-token-description-foreground/80 group-hover:text-token-foreground select-text`,
                ),
                children: z ?? F,
              })),
      (r[49] = F),
      (r[50] = z),
      (r[51] = E),
      (r[52] = x),
      (r[53] = y),
      (r[54] = v),
      (r[55] = W))
    : (W = r[55]);
  let G;
  r[56] !== z || r[57] !== L || r[58] !== i
    ? ((G =
        z == null
          ? (0, T.jsx)(ee, {
              tooltipContent: (0, T.jsx)(`span`, { className: `font-mono`, children: i }),
              children: (0, T.jsx)(`button`, {
                type: `button`,
                className: `max-w-full cursor-interaction truncate text-start text-token-text-link-foreground select-text hover:underline`,
                onClick: (e) => {
                  (e.stopPropagation(), L());
                },
                children: n(i),
              }),
            })
          : null),
      (r[56] = z),
      (r[57] = L),
      (r[58] = i),
      (r[59] = G))
    : (G = r[59]);
  let K;
  r[60] !== I || r[61] !== B || r[62] !== me
    ? ((K =
        me && !B
          ? (0, T.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, T.jsx)(te, {
                  className: `text-size-chat-sm`,
                  linesAdded: I.added,
                  linesRemoved: I.deleted,
                }),
                (0, T.jsx)(`span`, {
                  className: `block size-1.5 rounded-full bg-token-charts-red/70`,
                }),
              ],
            })
          : null),
      (r[60] = I),
      (r[61] = B),
      (r[62] = me),
      (r[63] = K))
    : (K = r[63]);
  let q;
  r[64] !== o.type || r[65] !== I || r[66] !== B
    ? ((q =
        I &&
        (I.added > 0 || I.deleted > 0) &&
        o.type !== `delete` &&
        (0, T.jsx)(`div`, {
          className: `flex items-center gap-1.5`,
          children: B
            ? null
            : (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(te, {
                    className: `text-size-chat-sm`,
                    linesAdded: I.added,
                    linesRemoved: I.deleted,
                  }),
                  o.type === `add`
                    ? (0, T.jsx)(`span`, {
                        className: `block size-1.5 rounded-full bg-token-charts-blue/70`,
                      })
                    : null,
                ],
              }),
        })),
      (r[64] = o.type),
      (r[65] = I),
      (r[66] = B),
      (r[67] = q))
    : (q = r[67]);
  let Se = k && `rotate-90 opacity-100`,
    J;
  r[68] === Se
    ? (J = r[69])
    : ((J = a(
        `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-[opacity,transform] duration-200 opacity-0 group-hover:opacity-100`,
        Se,
      )),
      (r[68] = Se),
      (r[69] = J));
  let Y;
  r[70] === J ? (Y = r[71]) : ((Y = (0, T.jsx)(h, { className: J })), (r[70] = J), (r[71] = Y));
  let X;
  r[72] !== W || r[73] !== G || r[74] !== K || r[75] !== q || r[76] !== Y
    ? ((X = (0, T.jsxs)(`div`, {
        className: `text-size-chat flex min-w-0 items-center gap-1 text-token-description-foreground/80`,
        children: [W, G, K, q, Y],
      })),
      (r[72] = W),
      (r[73] = G),
      (r[74] = K),
      (r[75] = q),
      (r[76] = Y),
      (r[77] = X))
    : (X = r[77]);
  let Ce;
  r[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, T.jsx)(`div`, {
        className: `ml-1 flex items-center gap-1 transition-opacity duration-200`,
      })),
      (r[78] = Ce))
    : (Ce = r[78]);
  let Z;
  r[79] === X
    ? (Z = r[80])
    : ((Z = (0, T.jsxs)(`div`, { className: be, onClick: xe, children: [X, Ce] })),
      (r[79] = X),
      (r[80] = Z));
  let Q;
  r[81] !== ve || r[82] !== V || r[83] !== v || r[84] !== he
    ? ((Q = v
        ? V
          ? (0, T.jsx)(`div`, { children: ve })
          : null
        : (0, T.jsx)(f.div, {
            initial: !1,
            animate: { height: he, opacity: V ? 1 : 0 },
            transition: _,
            className: a(V ? `overflow-visible` : `overflow-hidden`),
            style: { pointerEvents: V ? `auto` : `none` },
            children: V ? ve : null,
          })),
      (r[81] = ve),
      (r[82] = V),
      (r[83] = v),
      (r[84] = he),
      (r[85] = Q))
    : (Q = r[85]);
  let $;
  return (
    r[86] !== U || r[87] !== Z || r[88] !== Q
      ? (($ = (0, T.jsx)(`div`, {
          className: `px-0`,
          children: (0, T.jsxs)(`div`, { className: U, children: [Z, Q] }),
        })),
        (r[86] = U),
        (r[87] = Z),
        (r[88] = Q),
        (r[89] = $))
      : ($ = r[89]),
    $
  );
}
function re(e) {
  return !e;
}
function ie(e) {
  let t = (0, w.c)(35),
    {
      className: r,
      path: i,
      unifiedDiff: o,
      openLocation: s,
      linesAdded: c,
      linesRemoved: l,
      onOpenFile: u,
      children: d,
    } = e,
    f;
  t[0] === r
    ? (f = t[1])
    : ((f = a(`border-token-border flex flex-col overflow-hidden rounded-lg border`, r)),
      (t[0] = r),
      (t[1] = f));
  let p;
  t[2] === i
    ? (p = t[3])
    : ((p = (0, T.jsx)(`span`, { className: `font-mono`, children: i })), (t[2] = i), (t[3] = p));
  let m = !s && `cursor-default no-underline`,
    h;
  t[4] === m
    ? (h = t[5])
    : ((h = a(
        `text-token-description-foreground/80 cursor-interaction max-w-full truncate text-start hover:underline`,
        m,
      )),
      (t[4] = m),
      (t[5] = h));
  let g;
  t[6] !== u || t[7] !== s
    ? ((g = (e) => {
        (e.stopPropagation(), s && u());
      }),
      (t[6] = u),
      (t[7] = s),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] === i ? (_ = t[10]) : ((_ = n(i)), (t[9] = i), (t[10] = _));
  let v;
  t[11] !== h || t[12] !== g || t[13] !== _
    ? ((v = (0, T.jsx)(`button`, { type: `button`, className: h, onClick: g, children: _ })),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let b;
  t[15] !== p || t[16] !== v
    ? ((b = (0, T.jsx)(ee, { tooltipContent: p, children: v })),
      (t[15] = p),
      (t[16] = v),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== c || t[19] !== l
    ? ((x =
        c != null && l != null
          ? (0, T.jsx)(te, { className: `text-size-chat-sm`, linesAdded: c, linesRemoved: l })
          : null),
      (t[18] = c),
      (t[19] = l),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== b || t[22] !== x
    ? ((S = (0, T.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [b, x] })),
      (t[21] = b),
      (t[22] = x),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] === o
    ? (C = t[25])
    : ((C = (0, T.jsx)(y, {
        iconOnly: !0,
        iconClassName: `icon-2xs`,
        onCopy: () => {
          navigator.clipboard.writeText(o);
        },
      })),
      (t[24] = o),
      (t[25] = C));
  let E;
  t[26] !== S || t[27] !== C
    ? ((E = (0, T.jsxs)(`div`, {
        className: `text-size-chat-sm flex items-center justify-between gap-2 border-b border-token-border bg-token-list-hover-background/60 px-2.5 py-0.5 text-token-description-foreground/80`,
        children: [S, C],
      })),
      (t[26] = S),
      (t[27] = C),
      (t[28] = E))
    : (E = t[28]);
  let D;
  t[29] === d
    ? (D = t[30])
    : ((D = (0, T.jsx)(`div`, { className: `bg-token-editor-background`, children: d })),
      (t[29] = d),
      (t[30] = D));
  let O;
  return (
    t[31] !== f || t[32] !== E || t[33] !== D
      ? ((O = (0, T.jsxs)(`div`, { className: f, children: [E, D] })),
        (t[31] = f),
        (t[32] = E),
        (t[33] = D),
        (t[34] = O))
      : (O = t[34]),
    O
  );
}
function ae(e) {
  let t = (0, w.c)(10),
    { path: n, change: r, unifiedDiff: i, isShortView: o } = e,
    s;
  t[0] === i ? (s = t[1]) : ((s = p(i)), (t[0] = i), (t[1] = s));
  let c = s;
  if (i) {
    let e = c[0];
    if (e && !e.isBinary) {
      let n = o ? `max-h-25` : `max-h-60 `,
        r;
      t[2] === n
        ? (r = t[3])
        : ((r = a(`composer-diff-simple-line overflow-y-auto`, n)), (t[2] = n), (t[3] = r));
      let i;
      return (
        t[4] !== e.metadata || t[5] !== r
          ? ((i = (0, T.jsx)(m, {
              className: r,
              fileDiff: e.metadata,
              diffStyle: `unified`,
              hunkSeparators: `simple`,
            })),
            (t[4] = e.metadata),
            (t[5] = r),
            (t[6] = i))
          : (i = t[6]),
        i
      );
    }
  }
  let l;
  return (
    t[7] !== r || t[8] !== n
      ? ((l = (0, T.jsx)(oe, { path: n, change: r })), (t[7] = r), (t[8] = n), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function oe(e) {
  let t = (0, w.c)(8),
    { path: n, change: r } = e;
  if (r.type === `add`) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = x(n)), (t[0] = n), (t[1] = e));
    let i = e,
      a;
    return (
      t[2] !== r.content || t[3] !== i
        ? ((a = (0, T.jsx)(se, { content: r.content, language: i })),
          (t[2] = r.content),
          (t[3] = i),
          (t[4] = a))
        : (a = t[4]),
      a
    );
  } else if (r.type === `update`) {
    let e;
    return (
      t[5] === r.unified_diff
        ? (e = t[6])
        : ((e = (0, T.jsx)(se, { content: r.unified_diff, language: `diff` })),
          (t[5] = r.unified_diff),
          (t[6] = e)),
      e
    );
  } else if (r.type === `delete`) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, T.jsx)(ne, {
            children: (0, T.jsx)(l, {
              id: `codex.patch.change.contentsDeleted`,
              defaultMessage: `Contents deleted`,
              description: `Label indicating a file has been deleted in the patch summary`,
            }),
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let i;
  try {
    i = JSON.stringify(r);
  } catch {
    i = `<unserializable change>`;
  }
  return (
    o.debug(`Unknown FileChange type`, { safe: { path: n, changeString: i }, sensitive: {} }), null
  );
}
function se(e) {
  let t = (0, w.c)(3),
    n = u() ? `dark` : `light`,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, T.jsx)(v, {
          ...e,
          showActionBar: !1,
          codeClassName: `text-size-chat`,
          "data-theme": n,
          codeContainerClassName: `!p-2 max-h-40 vertical-scroll-fade-mask`,
          wrapperClassName: `rounded-none border-none`,
        })),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
export { S as i, O as n, E as r, k as t };
//# sourceMappingURL=patch-item-content.js.map
