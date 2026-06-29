import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Ol as r,
  Ut as i,
  Wt as a,
  Xc as o,
  _t as s,
  dl as c,
  gt as l,
  kl as u,
  oc as d,
  pl as ee,
  sc as f,
  tc as p,
  xl as m,
  xn as h,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Co as g,
  Sp as _,
  _o as te,
  vn as v,
  xp as y,
  yn as b,
  yo as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  FC as S,
  LC as C,
  MC as w,
  aa as ne,
  am as re,
  aw as T,
  bS as E,
  bm as ie,
  cw as D,
  dv as O,
  fC as k,
  ia as A,
  iw as j,
  oC as M,
  rm as N,
  uw as P,
  yS as F,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { gt as I, vt as L } from "./app-initial~app-main~automations-page.js";
import {
  f as ae,
  p as oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js";
import { Mt as R, jt as z } from "./app-initial~app-main~onboarding-page.js";
import {
  D as se,
  T as ce,
} from "./app-initial~app-main~remote-conversation-page~local-conversation-page.js";
import {
  i as B,
  n as le,
  r as V,
  t as ue,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~oiv69xe5.js";
import {
  a as H,
  i as de,
  t as fe,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as pe,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as me,
  t as W,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
var G,
  he = e(() => {
    G = `` + new URL(`appshot-demo-DcV9m9GT.mp4`, import.meta.url).href;
  });
function ge() {
  let e = (0, K.c)(42),
    t = d(n),
    r = f(B),
    i = ne(),
    [a, o] = (0, ye.useState)(null),
    { data: s } = f(Y),
    c;
  e[0] !== i || e[1] !== t
    ? ((c = {
        mutationFn: _e,
        onSuccess: (e) => {
          (t.query.setData(Y, e.state), i(J));
        },
      }),
      (e[0] = i),
      (e[1] = t),
      (e[2] = c))
    : (c = e[2]);
  let l = ee(c);
  if (!r || s?.supported === !1) return null;
  let u;
  e[3] !== t || e[4] !== l
    ? ((u = async function (e, n) {
        o(null);
        try {
          let r = await l.mutateAsync({ hotkey: e });
          if (!r.success) {
            o(r.error);
            return;
          }
          re(t, ie, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          o(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = l),
      (e[5] = u))
    : (u = e[5]);
  let p = u,
    m = s?.configuredHotkey ?? null,
    h;
  e[6] === m ? (h = e[7]) : ((h = X.find((e) => e.hotkey === m) ?? null), (e[6] = m), (e[7] = h));
  let g = h,
    _;
  e[8] !== m || e[9] !== g?.label
    ? ((_ = g?.label ?? (m == null ? null : ce(m))), (e[8] = m), (e[9] = g?.label), (e[10] = _))
    : (_ = e[10]);
  let v = _,
    b = g?.hotkey ?? null,
    S;
  e[11] !== a || e[12] !== b
    ? ((S =
        b == null && a == null
          ? void 0
          : (0, q.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                b == null ? null : (0, q.jsx)(ve, { hotkey: b }),
                a
                  ? (0, q.jsx)(`span`, { className: `text-token-error-foreground`, children: a })
                  : null,
              ],
            })),
      (e[11] = a),
      (e[12] = b),
      (e[13] = S))
    : (S = e[13]);
  let C = S,
    w;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, q.jsx)(D, {
        id: `settings.appshotHotkey.label`,
        defaultMessage: `Hotkey`,
        description: `Label for appshot hotkey setting`,
      })),
      (e[14] = w))
    : (w = e[14]);
  let T = l.isPending,
    E;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { width: 80 }), (e[15] = E))
    : (E = e[15]);
  let O;
  e[16] === v
    ? (O = e[17])
    : ((O =
        v ??
        (0, q.jsx)(D, {
          id: `settings.appshotHotkey.none`,
          defaultMessage: `None`,
          description: `Label for disabling the appshot hotkey`,
        })),
      (e[16] = v),
      (e[17] = O));
  let k;
  e[18] !== l.isPending || e[19] !== O
    ? ((k = (0, q.jsx)(fe, { disabled: l.isPending, style: E, children: O })),
      (e[18] = l.isPending),
      (e[19] = O),
      (e[20] = k))
    : (k = e[20]);
  let A;
  e[21] !== p || e[22] !== m || e[23] !== g?.hotkey
    ? ((A = X.map((e) =>
        (0, q.jsx)(
          x.Item,
          {
            RightIcon: e.hotkey === g?.hotkey ? y : void 0,
            onSelect: () => {
              (o(null), e.hotkey !== m && p(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[21] = p),
      (e[22] = m),
      (e[23] = g?.hotkey),
      (e[24] = A))
    : (A = e[24]);
  let j = m == null ? y : void 0,
    M;
  e[25] !== p || e[26] !== m
    ? ((M = () => {
        (o(null), m != null && p(null, `disable`));
      }),
      (e[25] = p),
      (e[26] = m),
      (e[27] = M))
    : (M = e[27]);
  let N;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, q.jsx)(D, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[28] = N))
    : (N = e[28]);
  let P;
  e[29] !== j || e[30] !== M
    ? ((P = (0, q.jsx)(x.Item, { RightIcon: j, onSelect: M, children: N })),
      (e[29] = j),
      (e[30] = M),
      (e[31] = P))
    : (P = e[31]);
  let F;
  e[32] !== A || e[33] !== P
    ? ((F = (0, q.jsxs)(x.Section, { children: [A, P] })), (e[32] = A), (e[33] = P), (e[34] = F))
    : (F = e[34]);
  let I;
  e[35] !== l.isPending || e[36] !== F || e[37] !== k
    ? ((I = (0, q.jsx)(te, {
        align: `end`,
        contentClassName: `min-w-20`,
        disabled: T,
        triggerButton: k,
        children: F,
      })),
      (e[35] = l.isPending),
      (e[36] = F),
      (e[37] = k),
      (e[38] = I))
    : (I = e[38]);
  let L;
  return (
    e[39] !== C || e[40] !== I
      ? ((L = (0, q.jsx)(z, { label: w, description: C, control: I })),
        (e[39] = C),
        (e[40] = I),
        (e[41] = L))
      : (L = e[41]),
    L
  );
}
async function _e(e) {
  let { hotkey: t } = e,
    n = F.appshotHotkeys;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function ve(e) {
  let t = (0, K.c)(3),
    { hotkey: n } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `settings.appshotHotkey.description.command`,
              defaultMessage: `Press both ⌘ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Command keys`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `DoubleOption`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `settings.appshotHotkey.description.option`,
              defaultMessage: `Press both ⌥ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Option keys`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `DoubleShift`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `settings.appshotHotkey.description.shift`,
              defaultMessage: `Press both ⇧ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Shift keys`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
var K,
  ye,
  q,
  J,
  Y,
  X,
  be = e(() => {
    ((K = r()),
      O(),
      c(),
      p(),
      (ye = t(u(), 1)),
      T(),
      V(),
      g(),
      _(),
      se(),
      N(),
      A(),
      E(),
      i(),
      R(),
      H(),
      s(),
      (q = m()),
      (J = [`appshot-hotkey-state`]),
      (Y = o(n, () => ({
        queryKey: J,
        queryFn: async () => {
          let e = F.appshotHotkeys;
          return e == null ? { supported: !1, configuredHotkey: null, isActive: !1 } : e.getState();
        },
        staleTime: l.ONE_MINUTE,
      }))),
      (X = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]));
  }),
  Z,
  xe = e(() => {
    (T(),
      (Z = j({
        capture: {
          id: `settings.appshots.hero.title`,
          defaultMessage: `Take an appshot to show Codex your frontmost window`,
          description: `Title for the Appshots settings explainer`,
        },
        soundEffect: {
          id: `settings.appshots.soundEffect.label`,
          defaultMessage: `Play sound effect`,
          description: `Label for the Appshots sound effect setting row`,
        },
      })));
  });
function Se() {
  let e = (0, Q.c)(9),
    t = P(),
    n = f(B),
    r = k(),
    { isLoading: i } = oe();
  if (r || i || !n) return null;
  let a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(de, { slug: `appshots` })), (e[0] = a))
    : (a = e[0]);
  let o;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`img`, {
        alt: ``,
        "aria-hidden": !0,
        className: `h-[41.4px] w-[47.7px] shrink-0 object-contain`,
        src: ue,
      })),
      (e[1] = o))
    : (o = e[1]);
  let s;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`div`, {
        className: `text-base leading-[16pt] font-medium text-token-text-primary`,
        children: (0, $.jsx)(D, { ...Z.capture }),
      })),
      (e[2] = s))
    : (s = e[2]);
  let c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(W, {
        children: (0, $.jsx)(W.Content, {
          children: (0, $.jsx)(U, {
            className: `divide-y-0`,
            children: (0, $.jsxs)(`div`, {
              className: `flex items-start gap-2 p-2`,
              children: [
                o,
                (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 flex-col gap-[2.5pt]`,
                  children: [
                    s,
                    (0, $.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, $.jsx)(D, {
                        id: `settings.appshots.hero.description`,
                        defaultMessage: `Appshots include visual and text content, including text scrolled offscreen.`,
                        description: `Description for the Appshots settings explainer`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })),
      (e[3] = c))
    : (c = e[3]);
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsxs)(`div`, {
        className: `grid gap-4 self-start`,
        children: [
          c,
          (0, $.jsx)(W, {
            children: (0, $.jsx)(W.Content, {
              children: (0, $.jsxs)(U, {
                variant: `secondary`,
                children: [(0, $.jsx)(ge, {}), (0, $.jsx)(Ce, {})],
              }),
            }),
          }),
        ],
      })),
      (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === t
    ? (u = e[6])
    : ((u = t.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[5] = t),
      (e[6] = u));
  let d;
  return (
    e[7] === u
      ? (d = e[8])
      : ((d = (0, $.jsx)(I, {
          title: a,
          children: (0, $.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              l,
              (0, $.jsx)(W, {
                className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
                children: (0, $.jsx)(W.Content, {
                  children: (0, $.jsx)(U, {
                    className: `divide-y-0 overflow-hidden rounded-none border-0`,
                    children: (0, $.jsx)(`video`, {
                      "aria-label": u,
                      autoPlay: !0,
                      className: `aspect-[901/1095] w-full bg-token-bg-secondary object-cover`,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      preload: `auto`,
                      src: G,
                    }),
                  }),
                }),
              }),
            ],
          }),
        })),
        (e[7] = u),
        (e[8] = d)),
    d
  );
}
function Ce() {
  let e = (0, Q.c)(9),
    t = d(n),
    r = P(),
    i = C(h.soundEnabled),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(D, { ...Z.soundEffect })), (e[0] = a))
    : (a = e[0]);
  let o;
  e[1] === r
    ? (o = e[2])
    : ((o = r.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = r),
      (e[2] = o));
  let s;
  e[3] === t
    ? (s = e[4])
    : ((s = (e) => {
        S(t, h.soundEnabled, e);
      }),
      (e[3] = t),
      (e[4] = s));
  let c;
  return (
    e[5] !== i || e[6] !== o || e[7] !== s
      ? ((c = (0, $.jsx)(z, {
          label: a,
          control: (0, $.jsx)(v, { ariaLabel: o, checked: i, onChange: s }),
        })),
        (e[5] = i),
        (e[6] = o),
        (e[7] = s),
        (e[8] = c))
      : (c = e[8]),
    c
  );
}
var Q, $;
e(() => {
  ((Q = r()),
    p(),
    a(),
    T(),
    V(),
    he(),
    le(),
    b(),
    ae(),
    i(),
    w(),
    L(),
    me(),
    R(),
    H(),
    pe(),
    M(),
    be(),
    xe(),
    ($ = m()));
})();
export { Se as AppshotsSettings };
//# sourceMappingURL=appshots-settings.js.map
