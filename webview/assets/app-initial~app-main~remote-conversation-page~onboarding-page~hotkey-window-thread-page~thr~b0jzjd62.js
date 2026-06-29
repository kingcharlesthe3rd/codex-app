import { n as e, s as t } from "./rolldown-runtime.js";
import {
  F as n,
  H as r,
  Ht as i,
  I as a,
  Ol as o,
  U as s,
  Ut as c,
  V as l,
  Wt as u,
  bl as d,
  dl as f,
  hi as p,
  kl as m,
  oc as ee,
  pl as te,
  st as h,
  tc as g,
  ut as _,
  xl as v,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as y,
  Es as b,
  Ia as x,
  Jp as S,
  Ts as C,
  Xp as w,
  Yp as T,
  Zp as E,
  am as D,
  im as O,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  BC as k,
  Db as A,
  Eb as j,
  JC as M,
  aw as N,
  uw as P,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  h as F,
  p as I,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  B as L,
  z as R,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4.js";
function z(e) {
  let t = (0, B.c)(31),
    { cwd: r, hostConfig: a, onErrorMessage: o, showErrorToast: c } = e,
    l = c === void 0 ? !1 : c,
    u = ee(i),
    f = d(),
    m = P(),
    g;
  t[0] === a ? (g = t[1]) : ((g = n(a)), (t[0] = a), (t[1] = g));
  let _ = g,
    v = r ?? ``,
    y;
  t[2] !== _ || t[3] !== v
    ? ((y = [`git`, `init-repo`, _, v]), (t[2] = _), (t[3] = v), (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== r || t[6] !== a
    ? ((b = async () => {
        if (r == null) throw Error(`Missing git context`);
        await s(`git`).request({
          method: `git-init-repo`,
          params: { cwd: p(r), hostConfig: a, operationSource: `review_model` },
        });
      }),
      (t[5] = r),
      (t[6] = a),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== r || t[9] !== _ || t[10] !== m || t[11] !== f || t[12] !== u
    ? ((x = async () => {
        u.get(F).success(
          m.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [f.invalidateQueries({ queryKey: h(`git-origins`) })];
        (r != null && e.push(f.invalidateQueries({ queryKey: [`git`, `metadata`, _, r] })),
          await Promise.all(e));
      }),
      (t[8] = r),
      (t[9] = _),
      (t[10] = m),
      (t[11] = f),
      (t[12] = u),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] !== m || t[15] !== o || t[16] !== u || t[17] !== l
    ? ((S = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (l &&
          u
            .get(F)
            .danger(
              m.formatMessage(
                {
                  id: `codex.review.noDiff.gitInit.error`,
                  defaultMessage: `Git init failed: {message}`,
                  description: `Error text shown when git initialization fails from the diff empty state`,
                },
                { message: t },
              ),
            ),
          o?.(t));
      }),
      (t[14] = m),
      (t[15] = o),
      (t[16] = u),
      (t[17] = l),
      (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] !== y || t[20] !== b || t[21] !== x || t[22] !== S
    ? ((C = { mutationKey: y, mutationFn: b, onSuccess: x, onError: S }),
      (t[19] = y),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S),
      (t[23] = C))
    : (C = t[23]);
  let w = te(C),
    T;
  t[24] !== r || t[25] !== w
    ? ((T = async () => {
        if (!(r == null || w.isPending))
          try {
            await w.mutateAsync();
          } catch {
            return;
          }
      }),
      (t[24] = r),
      (t[25] = w),
      (t[26] = T))
    : (T = t[26]);
  let E = T,
    D = r != null,
    O;
  return (
    t[27] !== E || t[28] !== w.isPending || t[29] !== D
      ? ((O = {
          canCreateGitRepository: D,
          createGitRepository: E,
          isCreatingGitRepository: w.isPending,
        }),
        (t[27] = E),
        (t[28] = w.isPending),
        (t[29] = D),
        (t[30] = O))
      : (O = t[30]),
    O
  );
}
var B,
  V = e(() => {
    ((B = o()), f(), g(), u(), N(), I(), l(), a(), c(), _(), r());
  });
function H(e) {
  let t = (0, X.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r ? (a = t[5]) : ((a = O(`gap-3`, r)), (t[4] = r), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, Q.jsx)(y, { ...i, className: a, children: n })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function U(e) {
  let t = (0, X.c)(13),
    { icon: n, isRefreshing: r, iconBackgroundTone: i, className: a } = e,
    o = r === void 0 ? !1 : r,
    s = i === void 0 ? `neutral` : i,
    c = `bg-token-editor-background`;
  (s === `success` && (c = `bg-token-charts-green/20`),
    s === `failure` && (c = `bg-token-charts-red/10`));
  let l;
  t[0] === a
    ? (l = t[1])
    : ((l = O(`flex items-start justify-between`, a)), (t[0] = a), (t[1] = l));
  let u;
  t[2] === c
    ? (u = t[3])
    : ((u = O(`flex h-9 w-9 items-center justify-center rounded-xl`, c)), (t[2] = c), (t[3] = u));
  let d;
  t[4] !== n || t[5] !== u
    ? ((d = (0, Q.jsx)(`span`, { className: u, children: n })), (t[4] = n), (t[5] = u), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === o
    ? (f = t[8])
    : ((f = o
        ? (0, Q.jsx)(w, { className: `icon-xs mt-0.5 text-token-description-foreground` })
        : null),
      (t[7] = o),
      (t[8] = f));
  let p;
  return (
    t[9] !== l || t[10] !== d || t[11] !== f
      ? ((p = (0, Q.jsxs)(`div`, { className: l, children: [d, f] })),
        (t[9] = l),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function W(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = O(`text-token-foreground heading-dialog font-semibold`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Q.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function G(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = O(`text-token-description-foreground flex flex-col gap-3`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Q.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function K(e) {
  let t = (0, X.c)(18),
    { left: n, right: r, className: i } = e,
    a,
    o,
    s,
    c,
    l;
  if (t[0] !== i || t[1] !== n || t[2] !== r) {
    let e = (t, n) => {
        if (!Z.isValidElement(t)) return t;
        if (t.type === S) {
          let e = t;
          return e.props.size == null ? Z.cloneElement(e, { size: n }) : e;
        }
        if (t.props.children == null) return t;
        let r = !1,
          i = Z.Children.map(t.props.children, (t) => {
            let i = e(t, n);
            return (i !== t && (r = !0), i);
          });
        if (!r) return t;
        let a = i;
        return (i != null && i.length === 1 && ([a] = i), Z.cloneElement(t, { children: a }));
      },
      u = (t) => {
        let i = e(n, t),
          a = e(r, t);
        return (0, Q.jsxs)(Q.Fragment, { children: [i ?? null, a] });
      };
    (t[8] === i
      ? (c = t[9])
      : ((c = O(`flex flex-1 items-center justify-between gap-2`, i)), (t[8] = i), (t[9] = c)),
      (l = (0, Q.jsx)(C, { electron: !0, children: u(`medium`) })),
      (a = C),
      (o = !0),
      (s = u(`toolbar`)),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  } else ((a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let u;
  t[10] !== a || t[11] !== o || t[12] !== s
    ? ((u = (0, Q.jsx)(a, { extension: o, children: s })),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== c || t[15] !== l || t[16] !== u
      ? ((d = (0, Q.jsxs)(`div`, { className: c, children: [l, u] })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function q(e) {
  let t = (0, X.c)(15),
    { left: n, label: r, right: i, className: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = O(`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`, a)),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = (0, Q.jsx)(`span`, { className: `min-w-0`, children: r })), (t[4] = r), (t[5] = c));
  let l;
  t[6] !== s || t[7] !== c
    ? ((l = (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [s, c] })),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === i ? (u = t[10]) : ((u = i ?? (0, Q.jsx)(`span`, {})), (t[9] = i), (t[10] = u));
  let d;
  return (
    t[11] !== o || t[12] !== l || t[13] !== u
      ? ((d = (0, Q.jsxs)(`div`, { className: o, children: [l, u] })),
        (t[11] = o),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function J(e) {
  let t = (0, X.c)(16),
    { left: n, label: r, value: i, valueClassName: a, className: o } = e,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = O(`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6`, o)),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, Q.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] !== r || t[5] !== c
    ? ((l = (0, Q.jsxs)(`span`, {
        className: `flex items-center gap-2 whitespace-nowrap`,
        children: [c, r],
      })),
      (t[4] = r),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === a ? (u = t[8]) : ((u = O(`min-w-0 truncate text-right`, a)), (t[7] = a), (t[8] = u));
  let d;
  t[9] !== u || t[10] !== i
    ? ((d = (0, Q.jsx)(`div`, { className: u, children: i })), (t[9] = u), (t[10] = i), (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== s || t[13] !== l || t[14] !== d
      ? ((f = (0, Q.jsxs)(`div`, { className: s, children: [l, d] })),
        (t[12] = s),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function ne(e) {
  let t = (0, X.c)(8),
    { children: n, ariaLabel: r, onClick: i, disabled: a, className: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = O(`rounded-lg p-2`, o)), (t[0] = o), (t[1] = s));
  let c;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== s
      ? ((c = (0, Q.jsx)(S, {
          color: `secondary`,
          size: `icon`,
          "aria-label": r,
          disabled: a,
          className: s,
          onClick: i,
          children: n,
        })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = i),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Y(e) {
  let t = (0, X.c)(19),
    { file: n, workspaceRoot: r } = e,
    i,
    a;
  if (t[0] !== n.path || t[1] !== r) {
    let e = j(n.path, r),
      o = e.split(`/`);
    ((i = o.pop() ?? e), (a = o.join(`/`)), (t[0] = n.path), (t[1] = r), (t[2] = i), (t[3] = a));
  } else ((i = t[2]), (a = t[3]));
  let o = a,
    s = n.additions ?? 0,
    c = n.deletions ?? 0,
    l = n.additions != null || n.deletions != null,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = (0, Q.jsx)(`span`, {
        className: `flex-shrink-0 font-medium text-token-foreground`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = u));
  let d;
  t[6] === o
    ? (d = t[7])
    : ((d =
        o.length > 0
          ? (0, Q.jsx)(`span`, {
              className: `min-w-0 truncate text-token-description-foreground`,
              children: o,
            })
          : null),
      (t[6] = o),
      (t[7] = d));
  let f;
  t[8] !== u || t[9] !== d
    ? ((f = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-baseline gap-2 whitespace-nowrap`,
        children: [u, d],
      })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== s || t[12] !== c || t[13] !== l
    ? ((p = l
        ? (0, Q.jsx)(R, { variant: `color`, linesAdded: s, linesRemoved: c })
        : (0, Q.jsx)(`span`, {})),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== n.path || t[16] !== f || t[17] !== p
      ? ((m = (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`,
          title: n.path,
          children: [f, p],
        })),
        (t[15] = n.path),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
function re(e) {
  let t = (0, X.c)(15),
    { title: n, files: r, workspaceRoot: i, className: a } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = O(`flex flex-col gap-2`, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`div`, { className: `text-token-description-foreground`, children: n })),
      (t[2] = n),
      (t[3] = s));
  let c;
  if (t[4] !== r || t[5] !== i) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e) => (0, Q.jsx)(Y, { file: e, workspaceRoot: i }, e.path)), (t[7] = i), (t[8] = e)),
      (c = r.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c));
  } else c = t[6];
  let l;
  t[9] === c
    ? (l = t[10])
    : ((l = (0, Q.jsx)(`div`, { className: `flex flex-col gap-2`, children: c })),
      (t[9] = c),
      (t[10] = l));
  let u;
  return (
    t[11] !== o || t[12] !== s || t[13] !== l
      ? ((u = (0, Q.jsxs)(`div`, { className: o, children: [s, l] })),
        (t[11] = o),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function ie(e) {
  let t = (0, X.c)(12),
    { expanded: n, children: r, className: i, scrollClassName: a } = e,
    o = n ? `open` : `collapsed`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { open: { height: `auto`, opacity: 1 }, collapsed: { height: 0, opacity: 0 } }),
      (t[0] = s))
    : (s = t[0]);
  let c, l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { duration: 0.25, ease: [0.16, 1, 0.3, 1] }),
      (l = { overflow: `hidden` }),
      (t[1] = c),
      (t[2] = l))
    : ((c = t[1]), (l = t[2]));
  let u;
  t[3] === a
    ? (u = t[4])
    : ((u = O(`vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]`, a)),
      (t[3] = a),
      (t[4] = u));
  let d;
  t[5] !== r || t[6] !== u
    ? ((d = (0, Q.jsx)(`div`, { className: u, children: r })), (t[5] = r), (t[6] = u), (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== i || t[9] !== o || t[10] !== d
      ? ((f = (0, Q.jsx)(M.div, {
          initial: !1,
          animate: o,
          variants: s,
          transition: c,
          style: l,
          className: i,
          children: d,
        })),
        (t[8] = i),
        (t[9] = o),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var X,
  Z,
  Q,
  $,
  ae = e(() => {
    ((X = o()),
      D(),
      k(),
      (Z = t(m(), 1)),
      T(),
      x(),
      E(),
      b(),
      L(),
      A(),
      (Q = v()),
      ($ = {
        Root: H,
        Header: U,
        Title: W,
        RowContainer: G,
        Footer: K,
        Row: q,
        KeyValueRow: J,
        IconButton: ne,
        FileRow: Y,
        FileSection: re,
        Expanded: ie,
      }));
  });
export { z as i, ae as n, V as r, $ as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62.js.map
