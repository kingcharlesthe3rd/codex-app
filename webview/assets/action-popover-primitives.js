import { s as e } from "./chunk-Bj-mKKzh.js";
import { Kn as t } from "./src-2.js";
import { Fa as n, lr as r, sr as i } from "./app-server-manager-signals.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { t as s } from "./clsx.js";
import { A as c, F as l, _ as u, h as d, lt as f, r as p } from "./vscode-api.js";
import { c as m } from "./lib-2.js";
import { r as h } from "./toast-signal.js";
import { t as g } from "./button.js";
import { t as _ } from "./spinner.js";
import { t as v } from "./proxy.js";
import { t as y } from "./with-window.js";
import { n as b } from "./dialog-layout.js";
import { r as x } from "./diff-stats.js";
var S = f();
function C(e) {
  let n = (0, S.c)(31),
    { cwd: a, hostConfig: o, onErrorMessage: s, showErrorToast: f } = e,
    g = f === void 0 ? !1 : f,
    _ = l(d),
    v = c(),
    y = m(),
    b;
  n[0] === o ? (b = n[1]) : ((b = i(o)), (n[0] = o), (n[1] = b));
  let x = b,
    C = a ?? ``,
    w;
  n[2] !== x || n[3] !== C
    ? ((w = [`git`, `init-repo`, x, C]), (n[2] = x), (n[3] = C), (n[4] = w))
    : (w = n[4]);
  let T;
  n[5] !== a || n[6] !== o
    ? ((T = async () => {
        if (a == null) throw Error(`Missing git context`);
        await r(`git`).request({
          method: `git-init-repo`,
          params: { cwd: t(a), hostConfig: o, operationSource: `review_model` },
        });
      }),
      (n[5] = a),
      (n[6] = o),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] !== a || n[9] !== x || n[10] !== y || n[11] !== v || n[12] !== _
    ? ((E = async () => {
        _.get(h).success(
          y.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [v.invalidateQueries({ queryKey: p(`git-origins`) })];
        (a != null && e.push(v.invalidateQueries({ queryKey: [`git`, `metadata`, x, a] })),
          await Promise.all(e));
      }),
      (n[8] = a),
      (n[9] = x),
      (n[10] = y),
      (n[11] = v),
      (n[12] = _),
      (n[13] = E))
    : (E = n[13]);
  let D;
  n[14] !== y || n[15] !== s || n[16] !== _ || n[17] !== g
    ? ((D = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (g &&
          _.get(h).danger(
            y.formatMessage(
              {
                id: `codex.review.noDiff.gitInit.error`,
                defaultMessage: `Git init failed: {message}`,
                description: `Error text shown when git initialization fails from the diff empty state`,
              },
              { message: t },
            ),
          ),
          s?.(t));
      }),
      (n[14] = y),
      (n[15] = s),
      (n[16] = _),
      (n[17] = g),
      (n[18] = D))
    : (D = n[18]);
  let O;
  n[19] !== w || n[20] !== T || n[21] !== E || n[22] !== D
    ? ((O = { mutationKey: w, mutationFn: T, onSuccess: E, onError: D }),
      (n[19] = w),
      (n[20] = T),
      (n[21] = E),
      (n[22] = D),
      (n[23] = O))
    : (O = n[23]);
  let k = u(O),
    A;
  n[24] !== a || n[25] !== k
    ? ((A = async () => {
        if (!(a == null || k.isPending))
          try {
            await k.mutateAsync();
          } catch {
            return;
          }
      }),
      (n[24] = a),
      (n[25] = k),
      (n[26] = A))
    : (A = n[26]);
  let j = A,
    M = a != null,
    N;
  return (
    n[27] !== j || n[28] !== k.isPending || n[29] !== M
      ? ((N = {
          canCreateGitRepository: M,
          createGitRepository: j,
          isCreatingGitRepository: k.isPending,
        }),
        (n[27] = j),
        (n[28] = k.isPending),
        (n[29] = M),
        (n[30] = N))
      : (N = n[30]),
    N
  );
}
var w = e(a(), 1),
  T = o();
function E(e) {
  let t = (0, S.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r ? (a = t[5]) : ((a = s(`gap-3`, r)), (t[4] = r), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, T.jsx)(b, { ...i, className: a, children: n })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function D(e) {
  let t = (0, S.c)(13),
    { icon: n, isRefreshing: r, iconBackgroundTone: i, className: a } = e,
    o = r === void 0 ? !1 : r,
    c = i === void 0 ? `neutral` : i,
    l = `bg-token-editor-background`;
  (c === `success` && (l = `bg-token-charts-green/20`),
    c === `failure` && (l = `bg-token-charts-red/10`));
  let u;
  t[0] === a
    ? (u = t[1])
    : ((u = s(`flex items-start justify-between`, a)), (t[0] = a), (t[1] = u));
  let d;
  t[2] === l
    ? (d = t[3])
    : ((d = s(`flex h-9 w-9 items-center justify-center rounded-xl`, l)), (t[2] = l), (t[3] = d));
  let f;
  t[4] !== n || t[5] !== d
    ? ((f = (0, T.jsx)(`span`, { className: d, children: n })), (t[4] = n), (t[5] = d), (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === o
    ? (p = t[8])
    : ((p = o
        ? (0, T.jsx)(_, { className: `icon-xs mt-0.5 text-token-description-foreground` })
        : null),
      (t[7] = o),
      (t[8] = p));
  let m;
  return (
    t[9] !== u || t[10] !== f || t[11] !== p
      ? ((m = (0, T.jsxs)(`div`, { className: u, children: [f, p] })),
        (t[9] = u),
        (t[10] = f),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function O(e) {
  let t = (0, S.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = s(`text-token-foreground heading-dialog font-semibold`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, T.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function k(e) {
  let t = (0, S.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = s(`text-token-description-foreground flex flex-col gap-3`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, T.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function A(e) {
  let t = (0, S.c)(18),
    { left: n, right: r, className: i } = e,
    a,
    o,
    c,
    l,
    u;
  if (t[0] !== i || t[1] !== n || t[2] !== r) {
    let e = (t, n) => {
        if (!w.isValidElement(t)) return t;
        if (t.type === g) {
          let e = t;
          return e.props.size == null ? w.cloneElement(e, { size: n }) : e;
        }
        if (t.props.children == null) return t;
        let r = !1,
          i = w.Children.map(t.props.children, (t) => {
            let i = e(t, n);
            return (i !== t && (r = !0), i);
          });
        if (!r) return t;
        let a = i;
        return (i != null && i.length === 1 && ([a] = i), w.cloneElement(t, { children: a }));
      },
      d = (t) => {
        let i = e(n, t),
          a = e(r, t);
        return (0, T.jsxs)(T.Fragment, { children: [i ?? null, a] });
      };
    (t[8] === i
      ? (l = t[9])
      : ((l = s(`flex flex-1 items-center justify-between gap-2`, i)), (t[8] = i), (t[9] = l)),
      (u = (0, T.jsx)(y, { electron: !0, children: d(`medium`) })),
      (a = y),
      (o = !0),
      (c = d(`toolbar`)),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u));
  } else ((a = t[3]), (o = t[4]), (c = t[5]), (l = t[6]), (u = t[7]));
  let d;
  t[10] !== a || t[11] !== o || t[12] !== c
    ? ((d = (0, T.jsx)(a, { extension: o, children: c })),
      (t[10] = a),
      (t[11] = o),
      (t[12] = c),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== l || t[15] !== u || t[16] !== d
      ? ((f = (0, T.jsxs)(`div`, { className: l, children: [u, d] })),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
function j(e) {
  let t = (0, S.c)(15),
    { left: n, label: r, right: i, className: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = s(`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`, a)),
      (t[0] = a),
      (t[1] = o));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, T.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = (0, T.jsx)(`span`, { className: `min-w-0`, children: r })), (t[4] = r), (t[5] = l));
  let u;
  t[6] !== c || t[7] !== l
    ? ((u = (0, T.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [c, l] })),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === i ? (d = t[10]) : ((d = i ?? (0, T.jsx)(`span`, {})), (t[9] = i), (t[10] = d));
  let f;
  return (
    t[11] !== o || t[12] !== u || t[13] !== d
      ? ((f = (0, T.jsxs)(`div`, { className: o, children: [u, d] })),
        (t[11] = o),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function M(e) {
  let t = (0, S.c)(16),
    { left: n, label: r, value: i, valueClassName: a, className: o } = e,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = s(`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6`, o)),
      (t[0] = o),
      (t[1] = c));
  let l;
  t[2] === n
    ? (l = t[3])
    : ((l = (0, T.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = l));
  let u;
  t[4] !== r || t[5] !== l
    ? ((u = (0, T.jsxs)(`span`, {
        className: `flex items-center gap-2 whitespace-nowrap`,
        children: [l, r],
      })),
      (t[4] = r),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === a ? (d = t[8]) : ((d = s(`min-w-0 truncate text-right`, a)), (t[7] = a), (t[8] = d));
  let f;
  t[9] !== d || t[10] !== i
    ? ((f = (0, T.jsx)(`div`, { className: d, children: i })), (t[9] = d), (t[10] = i), (t[11] = f))
    : (f = t[11]);
  let p;
  return (
    t[12] !== c || t[13] !== u || t[14] !== f
      ? ((p = (0, T.jsxs)(`div`, { className: c, children: [u, f] })),
        (t[12] = c),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function N(e) {
  let t = (0, S.c)(8),
    { children: n, ariaLabel: r, onClick: i, disabled: a, className: o } = e,
    c;
  t[0] === o ? (c = t[1]) : ((c = s(`rounded-lg p-2`, o)), (t[0] = o), (t[1] = c));
  let l;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== c
      ? ((l = (0, T.jsx)(g, {
          color: `secondary`,
          size: `icon`,
          "aria-label": r,
          disabled: a,
          className: c,
          onClick: i,
          children: n,
        })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = i),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function P(e) {
  let t = (0, S.c)(19),
    { file: r, workspaceRoot: i } = e,
    a,
    o;
  if (t[0] !== r.path || t[1] !== i) {
    let e = n(r.path, i),
      s = e.split(`/`);
    ((a = s.pop() ?? e), (o = s.join(`/`)), (t[0] = r.path), (t[1] = i), (t[2] = a), (t[3] = o));
  } else ((a = t[2]), (o = t[3]));
  let s = o,
    c = r.additions ?? 0,
    l = r.deletions ?? 0,
    u = r.additions != null || r.deletions != null,
    d;
  t[4] === a
    ? (d = t[5])
    : ((d = (0, T.jsx)(`span`, {
        className: `flex-shrink-0 font-medium text-token-foreground`,
        children: a,
      })),
      (t[4] = a),
      (t[5] = d));
  let f;
  t[6] === s
    ? (f = t[7])
    : ((f =
        s.length > 0
          ? (0, T.jsx)(`span`, {
              className: `min-w-0 truncate text-token-description-foreground`,
              children: s,
            })
          : null),
      (t[6] = s),
      (t[7] = f));
  let p;
  t[8] !== d || t[9] !== f
    ? ((p = (0, T.jsxs)(`div`, {
        className: `flex min-w-0 items-baseline gap-2 whitespace-nowrap`,
        children: [d, f],
      })),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== c || t[12] !== l || t[13] !== u
    ? ((m = u
        ? (0, T.jsx)(x, { variant: `color`, linesAdded: c, linesRemoved: l })
        : (0, T.jsx)(`span`, {})),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== r.path || t[16] !== p || t[17] !== m
      ? ((h = (0, T.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`,
          title: r.path,
          children: [p, m],
        })),
        (t[15] = r.path),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function F(e) {
  let t = (0, S.c)(15),
    { title: n, files: r, workspaceRoot: i, className: a } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = s(`flex flex-col gap-2`, a)), (t[0] = a), (t[1] = o));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, T.jsx)(`div`, { className: `text-token-description-foreground`, children: n })),
      (t[2] = n),
      (t[3] = c));
  let l;
  if (t[4] !== r || t[5] !== i) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e) => (0, T.jsx)(P, { file: e, workspaceRoot: i }, e.path)), (t[7] = i), (t[8] = e)),
      (l = r.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = l));
  } else l = t[6];
  let u;
  t[9] === l
    ? (u = t[10])
    : ((u = (0, T.jsx)(`div`, { className: `flex flex-col gap-2`, children: l })),
      (t[9] = l),
      (t[10] = u));
  let d;
  return (
    t[11] !== o || t[12] !== c || t[13] !== u
      ? ((d = (0, T.jsxs)(`div`, { className: o, children: [c, u] })),
        (t[11] = o),
        (t[12] = c),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function I(e) {
  let t = (0, S.c)(12),
    { expanded: n, children: r, className: i, scrollClassName: a } = e,
    o = n ? `open` : `collapsed`,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { open: { height: `auto`, opacity: 1 }, collapsed: { height: 0, opacity: 0 } }),
      (t[0] = c))
    : (c = t[0]);
  let l, u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { duration: 0.25, ease: [0.16, 1, 0.3, 1] }),
      (u = { overflow: `hidden` }),
      (t[1] = l),
      (t[2] = u))
    : ((l = t[1]), (u = t[2]));
  let d;
  t[3] === a
    ? (d = t[4])
    : ((d = s(`vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]`, a)),
      (t[3] = a),
      (t[4] = d));
  let f;
  t[5] !== r || t[6] !== d
    ? ((f = (0, T.jsx)(`div`, { className: d, children: r })), (t[5] = r), (t[6] = d), (t[7] = f))
    : (f = t[7]);
  let p;
  return (
    t[8] !== i || t[9] !== o || t[10] !== f
      ? ((p = (0, T.jsx)(v.div, {
          initial: !1,
          animate: o,
          variants: c,
          transition: l,
          style: u,
          className: i,
          children: f,
        })),
        (t[8] = i),
        (t[9] = o),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
var L = {
  Root: E,
  Header: D,
  Title: O,
  RowContainer: k,
  Footer: A,
  Row: j,
  KeyValueRow: M,
  IconButton: N,
  FileRow: P,
  FileSection: F,
  Expanded: I,
};
export { C as n, L as t };
//# sourceMappingURL=action-popover-primitives.js.map
