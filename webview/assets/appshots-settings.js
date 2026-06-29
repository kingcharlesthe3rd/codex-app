import { n as e, s as t } from "./rolldown-runtime.js";
import {
  $P as n,
  $t as r,
  AB as i,
  AV as a,
  BS as o,
  BV as s,
  CS as c,
  FB as l,
  GN as u,
  Gi as d,
  Gj as f,
  Hs as p,
  IB as m,
  JV as h,
  MV as ee,
  QP as g,
  Qf as te,
  Qt as _,
  TM as v,
  TS as ne,
  UA as y,
  Us as b,
  VN as x,
  WA as S,
  WN as C,
  Zf as w,
  Zi as re,
  Zj as T,
  _V as E,
  aP as D,
  bF as O,
  iF as k,
  kE as A,
  lF as j,
  oP as M,
  qF as N,
  qV as P,
  qi as F,
  rF as I,
  sF as L,
  wM as R,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
import {
  ga as ie,
  ma as ae,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74.js";
import { J as oe, K as se } from "./app-initial~app-main~automations-page.js";
import { Ur as ce, Wr as le } from "./app-initial~app-main~onboarding-page~profile.js";
import {
  G as ue,
  H as de,
  K as z,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  g as fe,
  h as B,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings.js";
import {
  i as V,
  n as pe,
  r as H,
  t as me,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~oiv69xe5.js";
import {
  n as he,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
var W,
  ge = e(() => {
    W = `` + new URL(`appshot-demo-DcV9m9GT.mp4`, import.meta.url).href;
  });
function _e() {
  let e = (0, G.c)(42),
    t = l(g),
    n = m(V),
    r = te(),
    [i, a] = (0, K.useState)(null),
    { data: s } = m(Y),
    c;
  e[0] !== r || e[1] !== t
    ? ((c = {
        mutationFn: ve,
        onSuccess: (e) => {
          (t.query.setData(Y, e.state), r(J));
        },
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = c))
    : (c = e[2]);
  let u = ee(c);
  if (!n || s?.supported === !1) return null;
  let f;
  e[3] !== t || e[4] !== u
    ? ((f = async function (e, n) {
        a(null);
        try {
          let r = await u.mutateAsync({ hotkey: e });
          if (!r.success) {
            a(r.error);
            return;
          }
          ne(t, o, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          a(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = u),
      (e[5] = f))
    : (f = e[5]);
  let p = f,
    h = s?.configuredHotkey ?? null,
    _;
  e[6] === h ? (_ = e[7]) : ((_ = X.find((e) => e.hotkey === h) ?? null), (e[6] = h), (e[7] = _));
  let v = _,
    y;
  e[8] !== h || e[9] !== v?.label
    ? ((y = v?.label ?? (h == null ? null : ae(h))), (e[8] = h), (e[9] = v?.label), (e[10] = y))
    : (y = e[10]);
  let b = y,
    x = v?.hotkey ?? null,
    S;
  e[11] !== i || e[12] !== x
    ? ((S =
        x == null && i == null
          ? void 0
          : (0, q.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                x == null ? null : (0, q.jsx)(ye, { hotkey: x }),
                i
                  ? (0, q.jsx)(`span`, { className: `text-token-error-foreground`, children: i })
                  : null,
              ],
            })),
      (e[11] = i),
      (e[12] = x),
      (e[13] = S))
    : (S = e[13]);
  let C = S,
    w;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, q.jsx)(L, {
        id: `settings.appshotHotkey.label`,
        defaultMessage: `Hotkey`,
        description: `Label for appshot hotkey setting`,
      })),
      (e[14] = w))
    : (w = e[14]);
  let re = u.isPending,
    T;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { width: 80 }), (e[15] = T))
    : (T = e[15]);
  let E;
  e[16] === b
    ? (E = e[17])
    : ((E =
        b ??
        (0, q.jsx)(L, {
          id: `settings.appshotHotkey.none`,
          defaultMessage: `None`,
          description: `Label for disabling the appshot hotkey`,
        })),
      (e[16] = b),
      (e[17] = E));
  let D;
  e[18] !== u.isPending || e[19] !== E
    ? ((D = (0, q.jsx)(de, { disabled: u.isPending, style: T, children: E })),
      (e[18] = u.isPending),
      (e[19] = E),
      (e[20] = D))
    : (D = e[20]);
  let O;
  e[21] !== p || e[22] !== h || e[23] !== v?.hotkey
    ? ((O = X.map((e) =>
        (0, q.jsx)(
          F.Item,
          {
            RightIcon: e.hotkey === v?.hotkey ? R : void 0,
            onSelect: () => {
              (a(null), e.hotkey !== h && p(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[21] = p),
      (e[22] = h),
      (e[23] = v?.hotkey),
      (e[24] = O))
    : (O = e[24]);
  let k = h == null ? R : void 0,
    A;
  e[25] !== p || e[26] !== h
    ? ((A = () => {
        (a(null), h != null && p(null, `disable`));
      }),
      (e[25] = p),
      (e[26] = h),
      (e[27] = A))
    : (A = e[27]);
  let j;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, q.jsx)(L, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[28] = j))
    : (j = e[28]);
  let M;
  e[29] !== k || e[30] !== A
    ? ((M = (0, q.jsx)(F.Item, { RightIcon: k, onSelect: A, children: j })),
      (e[29] = k),
      (e[30] = A),
      (e[31] = M))
    : (M = e[31]);
  let N;
  e[32] !== O || e[33] !== M
    ? ((N = (0, q.jsxs)(F.Section, { children: [O, M] })), (e[32] = O), (e[33] = M), (e[34] = N))
    : (N = e[34]);
  let P;
  e[35] !== u.isPending || e[36] !== N || e[37] !== D
    ? ((P = (0, q.jsx)(d, {
        align: `end`,
        contentClassName: `min-w-20`,
        disabled: re,
        triggerButton: D,
        children: N,
      })),
      (e[35] = u.isPending),
      (e[36] = N),
      (e[37] = D),
      (e[38] = P))
    : (P = e[38]);
  let I;
  return (
    e[39] !== C || e[40] !== P
      ? ((I = (0, q.jsx)(ce, { label: w, description: C, control: P })),
        (e[39] = C),
        (e[40] = P),
        (e[41] = I))
      : (I = e[41]),
    I
  );
}
async function ve(e) {
  let { hotkey: t } = e,
    n = y.appshotHotkeys;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function ye(e) {
  let t = (0, G.c)(3),
    { hotkey: n } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(L, {
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
          ? ((e = (0, q.jsx)(L, {
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
          ? ((e = (0, q.jsx)(L, {
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
var G,
  K,
  q,
  J,
  Y,
  X,
  be = e(() => {
    ((G = P()),
      A(),
      a(),
      i(),
      (K = t(h(), 1)),
      k(),
      H(),
      re(),
      v(),
      ie(),
      c(),
      w(),
      S(),
      n(),
      le(),
      z(),
      M(),
      (q = s()),
      (J = [`appshot-hotkey-state`]),
      (Y = E(g, () => ({
        queryKey: J,
        queryFn: async () => {
          let e = y.appshotHotkeys;
          return e == null ? { supported: !1, configuredHotkey: null, isActive: !1 } : e.getState();
        },
        staleTime: D.ONE_MINUTE,
      }))),
      (X = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]));
  }),
  Z,
  xe = e(() => {
    (k(),
      (Z = I({
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
    t = j(),
    n = m(V),
    r = T(),
    { isLoading: i } = b();
  if (r || i || !n) return null;
  let a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(ue, { slug: `appshots` })), (e[0] = a))
    : (a = e[0]);
  let o;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`img`, {
        alt: ``,
        "aria-hidden": !0,
        className: `h-[41.4px] w-[47.7px] shrink-0 object-contain`,
        src: me,
      })),
      (e[1] = o))
    : (o = e[1]);
  let s;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`div`, {
        className: `text-base leading-[16pt] font-medium text-token-text-primary`,
        children: (0, $.jsx)(L, { ...Z.capture }),
      })),
      (e[2] = s))
    : (s = e[2]);
  let c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(U, {
        children: (0, $.jsx)(U.Content, {
          children: (0, $.jsx)(B, {
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
                      children: (0, $.jsx)(L, {
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
          (0, $.jsx)(U, {
            children: (0, $.jsx)(U.Content, {
              children: (0, $.jsxs)(B, {
                variant: `secondary`,
                children: [(0, $.jsx)(_e, {}), (0, $.jsx)(Ce, {})],
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
      : ((d = (0, $.jsx)(se, {
          title: a,
          children: (0, $.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              l,
              (0, $.jsx)(U, {
                className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
                children: (0, $.jsx)(U.Content, {
                  children: (0, $.jsx)(B, {
                    className: `divide-y-0 overflow-hidden rounded-none border-0`,
                    children: (0, $.jsx)(`video`, {
                      "aria-label": u,
                      autoPlay: !0,
                      className: `aspect-[901/1095] w-full bg-token-bg-secondary object-cover`,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      preload: `auto`,
                      src: W,
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
    t = l(g),
    n = j(),
    r = u(N.soundEnabled),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(L, { ...Z.soundEffect })), (e[0] = i))
    : (i = e[0]);
  let a;
  e[1] === n
    ? (a = e[2])
    : ((a = n.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = n),
      (e[2] = a));
  let o;
  e[3] === t
    ? (o = e[4])
    : ((o = (e) => {
        C(t, N.soundEnabled, e);
      }),
      (e[3] = t),
      (e[4] = o));
  let s;
  return (
    e[5] !== r || e[6] !== a || e[7] !== o
      ? ((s = (0, $.jsx)(ce, {
          label: i,
          control: (0, $.jsx)(_, { ariaLabel: a, checked: r, onChange: o }),
        })),
        (e[5] = r),
        (e[6] = a),
        (e[7] = o),
        (e[8] = s))
      : (s = e[8]),
    s
  );
}
var Q, $;
e(() => {
  ((Q = P()),
    i(),
    O(),
    k(),
    H(),
    ge(),
    pe(),
    r(),
    p(),
    n(),
    x(),
    oe(),
    he(),
    le(),
    z(),
    fe(),
    f(),
    be(),
    xe(),
    ($ = s()));
})();
export { Se as AppshotsSettings };
//# sourceMappingURL=appshots-settings.js.map
