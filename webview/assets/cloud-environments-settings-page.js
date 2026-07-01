import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ar as n,
  Dl as r,
  Du as i,
  EA as a,
  EB as o,
  Er as s,
  Eu as c,
  GN as l,
  GP as u,
  Gr as d,
  HP as f,
  IP as p,
  LP as m,
  Mj as h,
  Ol as g,
  Pj as _,
  Qj as v,
  RP as y,
  RV as b,
  SV as x,
  TB as S,
  TV as C,
  Tl as w,
  Tr as T,
  U as E,
  Ur as D,
  VP as O,
  W as k,
  WN as A,
  Yj as ee,
  Yr as j,
  aV as M,
  aa as N,
  av as P,
  bB as F,
  eM as te,
  fN as I,
  gi as ne,
  gv as re,
  hN as ie,
  hi as ae,
  ia as oe,
  iu as se,
  jV as L,
  lM as ce,
  lv as le,
  mN as ue,
  mi as de,
  oV as fe,
  pN as pe,
  pi as me,
  qP as R,
  qj as he,
  ru as ge,
  sV as _e,
  uM as ve,
  vv as ye,
  wA as z,
  wB as be,
  wr as xe,
  xV as Se,
  zV as Ce,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
import {
  Cr as we,
  Fh as Te,
  Ih as Ee,
  Jg as De,
  Mr as Oe,
  Nr as ke,
  Sr as B,
  ah as Ae,
  br as je,
  nO as Me,
  oh as Ne,
  qg as Pe,
  tO as Fe,
  xr as V,
} from "./app-initial~app-main~onboarding-page.js";
import { lt as H, ut as Ie } from "./app-initial~app-main~automations-page.js";
import {
  O as Le,
  T as Re,
  k as ze,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n.js";
import {
  A as Be,
  k as Ve,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  r as He,
  t as Ue,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc.js";
import {
  n as We,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import { n as Ge, t as Ke } from "./page-search-input.js";
import { n as qe, t as Je } from "./infinite-scroll-pagination-spinner.js";
import { n as Ye, t as Xe } from "./segmented-toggle.js";
import { n as Ze, t as Qe } from "./settings-empty-state.js";
import { n as $e, t as et } from "./esm-1.js";
import { a as tt, r as nt } from "./cloud-preferences.js";
function rt(e) {
  let t = (0, st.c)(42),
    { environment: n } = e,
    r;
  t[0] === n.setup
    ? (r = t[1])
    : ((r = (
        Array.isArray(n.setup)
          ? n.setup.join(`
`)
          : n.setup
      )?.trim()),
      (t[0] = n.setup),
      (t[1] = r));
  let i = !!r,
    a;
  t[2] === n.maintenance_setup
    ? (a = t[3])
    : ((a = (
        Array.isArray(n.maintenance_setup)
          ? n.maintenance_setup.join(`
`)
          : n.maintenance_setup
      )?.trim()),
      (t[2] = n.maintenance_setup),
      (t[3] = a));
  let o = !!a,
    s;
  t[4] === n.env_vars
    ? (s = t[5])
    : ((s = Object.keys(n.env_vars)), (t[4] = n.env_vars), (t[5] = s));
  let c = s,
    l;
  if (t[6] !== n || t[7] !== c || t[8] !== o || t[9] !== i) {
    let e = ot(n),
      r;
    t[11] === n.repo_map
      ? (r = t[12])
      : ((r = (e) => n.repo_map?.[e]?.repository_full_name ?? e),
        (t[11] = n.repo_map),
        (t[12] = r));
    let a = n.repos.map(r),
      s = i || o || c.length > 0 || e.length > 0,
      d;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.configured`,
          defaultMessage: `Configured`,
          description: `Label for a configured cloud environment setting`,
        })),
        (t[13] = d))
      : (d = t[13]);
    let f = d,
      p;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.repository`,
          defaultMessage: `Repository`,
          description: `Label for the repository in cloud environment details`,
        })),
        (t[14] = p))
      : (p = t[14]);
    let m =
        a.length > 0
          ? a.join(`, `)
          : (0, W.jsx)(u, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            }),
      h;
    t[15] === m
      ? (h = t[16])
      : ((h = (0, W.jsx)(V, { label: p, valueAlignment: `end`, children: m })),
        (t[15] = m),
        (t[16] = h));
    let g;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.machine`,
          defaultMessage: `Machine`,
          description: `Label for the machine in cloud environment details`,
        })),
        (t[17] = g))
      : (g = t[17]);
    let _;
    t[18] === n.machine.label
      ? (_ = t[19])
      : ((_ = (0, W.jsx)(V, { label: g, valueAlignment: `end`, children: n.machine.label })),
        (t[18] = n.machine.label),
        (t[19] = _));
    let v;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.creator`,
          defaultMessage: `Created by`,
          description: `Label for the creator in cloud environment details`,
        })),
        (t[20] = v))
      : (v = t[20]);
    let b = n.creator.name || n.creator.email,
      x;
    t[21] === b
      ? (x = t[22])
      : ((x = (0, W.jsx)(V, { label: v, valueAlignment: `end`, children: b })),
        (t[21] = b),
        (t[22] = x));
    let S;
    t[23] === n.created_at
      ? (S = t[24])
      : ((S =
          n.created_at == null
            ? null
            : (0, W.jsx)(V, {
                label: (0, W.jsx)(u, {
                  id: `settings.cloudEnvironments.details.created`,
                  defaultMessage: `Created`,
                  description: `Label for the creation date in cloud environment details`,
                }),
                valueAlignment: `end`,
                children: (0, W.jsx)(y, {
                  day: `numeric`,
                  month: `short`,
                  value: n.created_at * 1e3,
                  year: `numeric`,
                }),
              })),
        (t[23] = n.created_at),
        (t[24] = S));
    let C;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.network`,
          defaultMessage: `Network access`,
          description: `Label for network access in cloud environment details`,
        })),
        (t[25] = C))
      : (C = t[25]);
    let w = n.agent_network_access?.mode,
      T;
    t[26] === w ? (T = t[27]) : ((T = it(w)), (t[26] = w), (t[27] = T));
    let E;
    t[28] === T
      ? (E = t[29])
      : ((E = (0, W.jsx)(V, { label: C, valueAlignment: `end`, children: T })),
        (t[28] = T),
        (t[29] = E));
    let D;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((D = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.sharing`,
          defaultMessage: `Sharing`,
          description: `Label for cloud environment sharing`,
        })),
        (t[30] = D))
      : (D = t[30]);
    let O;
    t[31] === n.share_settings
      ? (O = t[32])
      : ((O = at(n.share_settings)), (t[31] = n.share_settings), (t[32] = O));
    let k;
    t[33] === O
      ? (k = t[34])
      : ((k = (0, W.jsx)(V, { label: D, valueAlignment: `end`, children: O })),
        (t[33] = O),
        (t[34] = k));
    let A;
    (t[35] !== _ || t[36] !== x || t[37] !== S || t[38] !== E || t[39] !== k || t[40] !== h
      ? ((A = (0, W.jsx)(H, {
          children: (0, W.jsx)(H.Content, {
            children: (0, W.jsxs)(U, { children: [h, _, x, S, E, k] }),
          }),
        })),
        (t[35] = _),
        (t[36] = x),
        (t[37] = S),
        (t[38] = E),
        (t[39] = k),
        (t[40] = h),
        (t[41] = A))
      : (A = t[41]),
      (l = (0, W.jsxs)(W.Fragment, {
        children: [
          A,
          s
            ? (0, W.jsxs)(H, {
                children: [
                  (0, W.jsx)(H.Header, {
                    title: (0, W.jsx)(u, {
                      id: `settings.cloudEnvironments.details.configuration`,
                      defaultMessage: `Configuration`,
                      description: `Heading for cloud environment configuration details`,
                    }),
                  }),
                  (0, W.jsx)(H.Content, {
                    children: (0, W.jsxs)(U, {
                      children: [
                        i
                          ? (0, W.jsx)(V, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for the setup script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        o
                          ? (0, W.jsx)(V, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.maintenance`,
                                defaultMessage: `Maintenance script`,
                                description: `Label for the maintenance script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        c.length > 0
                          ? (0, W.jsx)(V, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.environmentVariables`,
                                defaultMessage: `Environment variables`,
                                description: `Label for environment variables in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: c.join(`, `),
                            })
                          : null,
                        e.length > 0
                          ? (0, W.jsx)(V, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.secrets`,
                                defaultMessage: `Secrets`,
                                description: `Label for secrets in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: e.join(`, `),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              })
            : null,
        ],
      })),
      (t[6] = n),
      (t[7] = c),
      (t[8] = o),
      (t[9] = i),
      (t[10] = l));
  } else l = t[10];
  return l;
}
function it(e) {
  switch (e) {
    case `custom`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.network.custom`,
        defaultMessage: `Custom`,
        description: `Label for custom cloud environment network access`,
      });
    case `on`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.network.on`,
        defaultMessage: `On`,
        description: `Label for enabled cloud environment network access`,
      });
    case `off`:
    case void 0:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.network.off`,
        defaultMessage: `Off`,
        description: `Label for disabled cloud environment network access`,
      });
  }
}
function at(e) {
  switch (e) {
    case `private`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.sharing.private`,
        defaultMessage: `Private`,
        description: `Label for a private cloud environment`,
      });
    case `public`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.sharing.public`,
        defaultMessage: `Public`,
        description: `Label for a public cloud environment`,
      });
    case `workspace`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.sharing.workspace`,
        defaultMessage: `Workspace`,
        description: `Label for a workspace cloud environment`,
      });
  }
}
function ot(e) {
  let t = new Set(Object.keys(e.secrets ?? {}));
  for (let n of e.secrets_with_domains ?? []) n.name != null && t.add(n.name);
  return [...t];
}
var st,
  W,
  ct = e(() => {
    ((st = b()), f(), Ie(), we(), We(), (W = L()));
  });
function lt(e) {
  let t = (0, dt.c)(27),
    { environmentName: n, isPending: r, open: i, onConfirm: a, onOpenChange: o } = e,
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = c));
  let l;
  t[2] === n
    ? (l = t[3])
    : ((l = (0, G.jsx)(ae, {
        children: (0, G.jsx)(u, {
          id: `settings.cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Title for the cloud environment deletion confirmation`,
          values: { environmentName: n },
        }),
      })),
      (t[2] = n),
      (t[3] = l));
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, G.jsx)(de, {
        className: `contents`,
        children: (0, G.jsx)(u, {
          id: `settings.cloudEnvironments.delete.description`,
          defaultMessage: `Existing tasks will remain, but you will not be able to create follow-ups with this environment`,
          description: `Description for the cloud environment deletion confirmation`,
        }),
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === l
    ? (f = t[6])
    : ((f = (0, G.jsx)(s, { title: l, subtitle: d })), (t[5] = l), (t[6] = f));
  let p;
  t[7] === o ? (p = t[8]) : ((p = () => o(!1)), (t[7] = o), (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== r || t[11] !== p
    ? ((h = (0, G.jsx)(I, {
        color: `secondary`,
        disabled: r,
        onClick: p,
        type: `button`,
        children: m,
      })),
      (t[10] = r),
      (t[11] = p),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.delete.confirm`,
        defaultMessage: `Delete environment`,
        description: `Button label for confirming cloud environment deletion`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] === r
    ? (_ = t[15])
    : ((_ = (0, G.jsx)(I, { color: `danger`, loading: r, type: `submit`, children: g })),
      (t[14] = r),
      (t[15] = _));
  let v;
  t[16] !== h || t[17] !== _
    ? ((v = (0, G.jsxs)(T, { children: [h, _] })), (t[16] = h), (t[17] = _), (t[18] = v))
    : (v = t[18]);
  let y;
  t[19] !== c || t[20] !== v || t[21] !== f
    ? ((y = (0, G.jsxs)(xe, { as: `form`, onSubmit: c, children: [f, v] })),
      (t[19] = c),
      (t[20] = v),
      (t[21] = f),
      (t[22] = y))
    : (y = t[22]);
  let b;
  return (
    t[23] !== o || t[24] !== i || t[25] !== y
      ? ((b = (0, G.jsx)(me, { open: i, onOpenChange: o, children: y })),
        (t[23] = o),
        (t[24] = i),
        (t[25] = y),
        (t[26] = b))
      : (b = t[26]),
    b
  );
}
function ut(e) {
  let t = (0, dt.c)(23),
    { isPending: n, open: r, onConfirm: i, onOpenChange: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => {
        (e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = o));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, G.jsx)(ae, {
        children: (0, G.jsx)(u, {
          id: `settings.cloudEnvironments.resetCache.title`,
          defaultMessage: `Reset cached containers?`,
          description: `Title for the cloud environment cache reset confirmation`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, G.jsx)(s, {
        title: c,
        subtitle: (0, G.jsx)(de, {
          className: `contents`,
          children: (0, G.jsx)(u, {
            id: `settings.cloudEnvironments.resetCache.description`,
            defaultMessage: `This invalidates all cached containers for this environment and all users`,
            description: `Description for the cloud environment cache reset confirmation`,
          }),
        }),
      })),
      (t[3] = l))
    : (l = t[3]);
  let d;
  t[4] === a ? (d = t[5]) : ((d = () => a(!1)), (t[4] = a), (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== n || t[8] !== d
    ? ((p = (0, G.jsx)(I, {
        color: `secondary`,
        disabled: n,
        onClick: d,
        type: `button`,
        children: f,
      })),
      (t[7] = n),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.resetCache.confirm`,
        defaultMessage: `Reset cache`,
        description: `Button label for confirming a cloud environment cache reset`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === n
    ? (h = t[12])
    : ((h = (0, G.jsx)(I, { color: `primary`, loading: n, type: `submit`, children: m })),
      (t[11] = n),
      (t[12] = h));
  let g;
  t[13] !== p || t[14] !== h
    ? ((g = (0, G.jsxs)(T, { children: [p, h] })), (t[13] = p), (t[14] = h), (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] !== o || t[17] !== g
    ? ((_ = (0, G.jsxs)(xe, { as: `form`, onSubmit: o, children: [l, g] })),
      (t[16] = o),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== a || t[20] !== r || t[21] !== _
      ? ((v = (0, G.jsx)(me, { open: r, onOpenChange: a, children: _ })),
        (t[19] = a),
        (t[20] = r),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var dt,
  G,
  ft = e(() => {
    ((dt = b()), f(), pe(), ne(), n(), (G = L()));
  });
function K(e) {
  let t = (0, mt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, ht.jsx)(`input`, {
          ...e,
          className: `w-72 max-w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function pt(e) {
  let t = (0, mt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, ht.jsx)(`textarea`, {
          ...e,
          className: `w-72 max-w-full resize-y rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
var mt,
  ht,
  gt = e(() => {
    ((mt = b()), (ht = L()));
  });
function _t(e) {
  let t = (0, wt.c)(16),
    { form: n, isPending: r } = e,
    i = R(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, q.jsx)(H.Header, {
        title: (0, q.jsx)(u, {
          id: `settings.cloudEnvironments.editor.scripts`,
          defaultMessage: `Scripts`,
          description: `Heading for cloud environment scripts`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== r
    ? ((o = (e) =>
        (0, q.jsx)(B, {
          label: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.setup`,
            defaultMessage: `Setup script`,
            description: `Label for a cloud environment setup script`,
          }),
          description: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.setup.description`,
            defaultMessage: `Runs after the repository is cloned; with caching enabled, it runs only for new containers`,
            description: `Explanation for the cloud environment setup script`,
          }),
          control: (0, q.jsx)(pt, {
            "aria-label": i.formatMessage({
              id: `settings.cloudEnvironments.editor.setup.aria`,
              defaultMessage: `Setup script`,
              description: `Accessible label for a cloud environment setup script`,
            }),
            disabled: r,
            rows: 5,
            value: e.state.value,
            onChange: (t) => e.handleChange(t.target.value),
          }),
        })),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n.Field || t[5] !== o
    ? ((s = (0, q.jsx)(n.Field, { name: `setupCommands`, children: o })),
      (t[4] = n.Field),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== i || t[8] !== r
    ? ((c = (e) =>
        (0, q.jsx)(B, {
          label: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.maintenance`,
            defaultMessage: `Maintenance script`,
            description: `Label for a cloud environment maintenance script`,
          }),
          description: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.maintenance.description`,
            defaultMessage: `Runs after branch checkout whenever Codex reuses a cached container`,
            description: `Explanation for the cloud environment maintenance script`,
          }),
          control: (0, q.jsx)(pt, {
            "aria-label": i.formatMessage({
              id: `settings.cloudEnvironments.editor.maintenance.aria`,
              defaultMessage: `Maintenance script`,
              description: `Accessible label for a cloud environment maintenance script`,
            }),
            disabled: r,
            rows: 5,
            value: e.state.value,
            onChange: (t) => e.handleChange(t.target.value),
          }),
        })),
      (t[7] = i),
      (t[8] = r),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n.Field || t[11] !== c
    ? ((l = (0, q.jsx)(n.Field, { name: `maintenanceSetupCommands`, children: c })),
      (t[10] = n.Field),
      (t[11] = c),
      (t[12] = l))
    : (l = t[12]);
  let d;
  return (
    t[13] !== s || t[14] !== l
      ? ((d = (0, q.jsxs)(H, {
          children: [a, (0, q.jsx)(H.Content, { children: (0, q.jsxs)(U, { children: [s, l] }) })],
        })),
        (t[13] = s),
        (t[14] = l),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
function vt(e) {
  let t = (0, wt.c)(7),
    { form: n, isPending: r } = e,
    i = R(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = (e) => {
        let t = e ?? { mode: `off` };
        return (0, q.jsxs)(H, {
          children: [
            (0, q.jsx)(H.Header, {
              title: (0, q.jsx)(u, {
                id: `settings.cloudEnvironments.editor.network`,
                defaultMessage: `Network access`,
                description: `Heading for cloud environment network access`,
              }),
            }),
            (0, q.jsx)(H.Content, {
              children: (0, q.jsxs)(U, {
                children: [
                  (0, q.jsx)(B, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.network.mode`,
                      defaultMessage: `Access`,
                      description: `Label for the cloud environment network access mode`,
                    }),
                    description: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.network.mode.description`,
                      defaultMessage: `Controls internet access after setup completes`,
                      description: `Explanation for cloud environment network access`,
                    }),
                    control: (0, q.jsx)(Xe, {
                      ariaLabel: i.formatMessage({
                        id: `settings.cloudEnvironments.editor.network.aria`,
                        defaultMessage: `Network access`,
                        description: `Accessible label for cloud environment network access`,
                      }),
                      options: [
                        {
                          id: `off`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.network.off`,
                            defaultMessage: `Off`,
                            description: `Label for disabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `custom`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.network.custom`,
                            defaultMessage: `Custom`,
                            description: `Label for custom cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `on`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.network.on`,
                            defaultMessage: `On`,
                            description: `Label for enabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                      ],
                      selectedId: t.mode,
                      onSelect: (e) => n.setFieldValue(`agentNetworkAccess`, { ...t, mode: e }),
                    }),
                  }),
                  t.mode === `custom`
                    ? (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(B, {
                            label: (0, q.jsx)(u, {
                              id: `settings.cloudEnvironments.editor.network.allowedDomains`,
                              defaultMessage: `Allowed domains`,
                              description: `Label for allowed cloud environment network domains`,
                            }),
                            control: (0, q.jsx)(K, {
                              "aria-label": i.formatMessage({
                                id: `settings.cloudEnvironments.editor.network.allowedDomains.aria`,
                                defaultMessage: `Allowed domains`,
                                description: `Accessible label for allowed cloud environment network domains`,
                              }),
                              disabled: r,
                              value: t.allowlist_domains ?? ``,
                              onChange: (e) =>
                                n.setFieldValue(`agentNetworkAccess`, {
                                  ...t,
                                  allowlist_domains: e.target.value,
                                }),
                            }),
                          }),
                          (0, q.jsx)(B, {
                            label: (0, q.jsx)(u, {
                              id: `settings.cloudEnvironments.editor.network.blockedDomains`,
                              defaultMessage: `Blocked domains`,
                              description: `Label for blocked cloud environment network domains`,
                            }),
                            control: (0, q.jsx)(K, {
                              "aria-label": i.formatMessage({
                                id: `settings.cloudEnvironments.editor.network.blockedDomains.aria`,
                                defaultMessage: `Blocked domains`,
                                description: `Accessible label for blocked cloud environment network domains`,
                              }),
                              disabled: r,
                              value: t.denylist_domains ?? ``,
                              onChange: (e) =>
                                n.setFieldValue(`agentNetworkAccess`, {
                                  ...t,
                                  denylist_domains: e.target.value,
                                }),
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          ],
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, q.jsx)(n.Subscribe, { selector: yt, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function yt(e) {
  return e.values.agentNetworkAccess;
}
function bt(e) {
  let t = (0, wt.c)(9),
    { form: n, isPending: r, showAuthtranslator: i, showDockerInDocker: a } = e,
    o = R(),
    s;
  t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== i || t[4] !== a
    ? ((s = (e) =>
        (0, q.jsxs)(H, {
          children: [
            (0, q.jsx)(H.Header, {
              title: (0, q.jsx)(u, {
                id: `settings.cloudEnvironments.editor.runtime`,
                defaultMessage: `Runtime`,
                description: `Heading for cloud environment runtime settings`,
              }),
            }),
            (0, q.jsx)(H.Content, {
              children: (0, q.jsxs)(U, {
                children: [
                  (0, q.jsx)(B, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.runtime.autoSetup`,
                      defaultMessage: `Automatic setup`,
                      description: `Label for automatic cloud environment setup`,
                    }),
                    control: (0, q.jsx)(E, {
                      ariaLabel: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.autoSetup.aria`,
                        defaultMessage: `Automatic setup`,
                        description: `Accessible label for automatic cloud environment setup`,
                      }),
                      checked: e.autoSetupSettings?.use_auto_setup ?? !1,
                      disabled: r,
                      onChange: (e) => n.setFieldValue(`autoSetupSettings`, { use_auto_setup: e }),
                    }),
                  }),
                  (0, q.jsx)(B, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.runtime.cache`,
                      defaultMessage: `Post-setup cache`,
                      description: `Label for cloud environment post-setup caching`,
                    }),
                    description: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.runtime.cache.description`,
                      defaultMessage: `Speeds up task startup by saving the container after setup`,
                      description: `Explanation for cloud environment post-setup caching`,
                    }),
                    control: (0, q.jsx)(E, {
                      ariaLabel: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.cache.aria`,
                        defaultMessage: `Post-setup cache`,
                        description: `Accessible label for cloud environment post-setup caching`,
                      }),
                      checked: e.cacheSettings?.post_setup_cache_enabled ?? !1,
                      disabled: r,
                      onChange: (e) =>
                        n.setFieldValue(`cacheSettings`, { post_setup_cache_enabled: e }),
                    }),
                  }),
                  i
                    ? (0, q.jsx)(B, {
                        label: (0, q.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.runtime.authtranslator`,
                          defaultMessage: `Authentication translation`,
                          description: `Label for cloud environment authentication translation`,
                        }),
                        control: (0, q.jsx)(E, {
                          ariaLabel: o.formatMessage({
                            id: `settings.cloudEnvironments.editor.runtime.authtranslator.aria`,
                            defaultMessage: `Authentication translation`,
                            description: `Accessible label for cloud environment authentication translation`,
                          }),
                          checked: e.enableAuthtranslator,
                          disabled: r,
                          onChange: (e) => n.setFieldValue(`enableAuthtranslator`, e),
                        }),
                      })
                    : null,
                  a
                    ? (0, q.jsx)(B, {
                        label: (0, q.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.runtime.dockerInDocker`,
                          defaultMessage: `Docker in Docker`,
                          description: `Label for Docker in Docker support in a cloud environment`,
                        }),
                        control: (0, q.jsx)(E, {
                          ariaLabel: o.formatMessage({
                            id: `settings.cloudEnvironments.editor.runtime.dockerInDocker.aria`,
                            defaultMessage: `Docker in Docker`,
                            description: `Accessible label for Docker in Docker support in a cloud environment`,
                          }),
                          checked: e.enableDockerInDocker,
                          disabled: r,
                          onChange: (e) => n.setFieldValue(`enableDockerInDocker`, e),
                        }),
                      })
                    : null,
                ],
              }),
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== n.Subscribe || t[7] !== s
      ? ((c = (0, q.jsx)(n.Subscribe, { selector: xt, children: s })),
        (t[6] = n.Subscribe),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function xt(e) {
  return e.values;
}
function St(e) {
  let t = (0, wt.c)(7),
    { form: n, isPending: r } = e,
    i = R(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = (e) =>
        (0, q.jsxs)(H, {
          children: [
            (0, q.jsx)(H.Header, {
              title: (0, q.jsx)(u, {
                id: `settings.cloudEnvironments.editor.sharing`,
                defaultMessage: `Sharing`,
                description: `Heading for cloud environment sharing settings`,
              }),
            }),
            (0, q.jsx)(H.Content, {
              children: (0, q.jsxs)(U, {
                children: [
                  (0, q.jsx)(B, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.sharing.visibility`,
                      defaultMessage: `Visibility`,
                      description: `Label for cloud environment visibility`,
                    }),
                    control: (0, q.jsx)(Xe, {
                      ariaLabel: i.formatMessage({
                        id: `settings.cloudEnvironments.editor.sharing.visibility.aria`,
                        defaultMessage: `Environment visibility`,
                        description: `Accessible label for cloud environment visibility`,
                      }),
                      options: [
                        {
                          id: `private`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.sharing.private`,
                            defaultMessage: `Private`,
                            description: `Label for a private cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `workspace`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.sharing.workspace`,
                            defaultMessage: `Workspace`,
                            description: `Label for a workspace cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `public`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.sharing.public`,
                            defaultMessage: `Public`,
                            description: `Label for a public cloud environment`,
                          }),
                          disabled: r,
                        },
                      ],
                      selectedId: e.shareSettings,
                      onSelect: (e) => n.setFieldValue(`shareSettings`, e),
                    }),
                  }),
                  (0, q.jsx)(B, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.sharing.editors`,
                      defaultMessage: `Additional editors`,
                      description: `Label for additional cloud environment editors`,
                    }),
                    control: (0, q.jsx)(I, {
                      color: `secondary`,
                      disabled: r || e.shareSettings === `private`,
                      onClick: () => n.setFieldValue(`shareTargets`, [...e.shareTargets, ``]),
                      size: `toolbar`,
                      type: `button`,
                      children: (0, q.jsx)(u, {
                        id: `settings.cloudEnvironments.editor.sharing.addEditor`,
                        defaultMessage: `Add editor`,
                        description: `Button label for adding a cloud environment editor`,
                      }),
                    }),
                  }),
                  e.shareTargets.map((t, a) =>
                    (0, q.jsx)(
                      B,
                      {
                        label: null,
                        variant: `nested`,
                        control: (0, q.jsxs)(`div`, {
                          className: `flex w-full items-center gap-2`,
                          children: [
                            (0, q.jsx)(K, {
                              "aria-label": i.formatMessage(
                                {
                                  id: `settings.cloudEnvironments.editor.sharing.editor.aria`,
                                  defaultMessage: `Editor email {number}`,
                                  description: `Accessible label for a cloud environment editor email input`,
                                },
                                { number: a + 1 },
                              ),
                              disabled: r || e.shareSettings === `private`,
                              type: `email`,
                              value: t,
                              onChange: (t) =>
                                n.setFieldValue(
                                  `shareTargets`,
                                  e.shareTargets.map((e, n) => (n === a ? t.target.value : e)),
                                ),
                            }),
                            (0, q.jsx)(I, {
                              color: `secondary`,
                              disabled: r || e.shareSettings === `private`,
                              onClick: () =>
                                n.setFieldValue(
                                  `shareTargets`,
                                  e.shareTargets.filter((e, t) => t !== a),
                                ),
                              size: `toolbar`,
                              type: `button`,
                              children: (0, q.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.sharing.removeEditor`,
                                defaultMessage: `Remove`,
                                description: `Button label for removing a cloud environment editor`,
                              }),
                            }),
                          ],
                        }),
                      },
                      a,
                    ),
                  ),
                ],
              }),
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, q.jsx)(n.Subscribe, { selector: Ct, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Ct(e) {
  return e.values;
}
var wt,
  q,
  Tt = e(() => {
    ((wt = b()), f(), pe(), Ye(), k(), Ie(), we(), We(), gt(), (q = L()));
  });
function Et(e, t) {
  let n = Pt(e);
  return {
    label: e?.label ?? ``,
    description: e?.description ?? ``,
    shareSettings: e?.share_settings ?? `private`,
    shareTargets: e?.share_targets?.map(({ email: e }) => e) ?? [],
    machineId: e?.machine_id ?? Bt,
    repositoryId: e?.repos[0] ?? ``,
    repositoryName: e?.repo_map?.[e.repos[0] ?? ``]?.repository_full_name ?? e?.repos[0] ?? ``,
    githubConnectorId: e?.github_connector_id ?? t ?? null,
    workspaceDirectory: e?.workspace_dir ?? `/workspace`,
    agentNetworkAccess: e?.agent_network_access ?? { mode: `off` },
    setupCommands: Mt(e?.setup),
    maintenanceSetupCommands: Mt(e?.maintenance_setup),
    secrets: n.map(({ name: e, domain: t }) => ({
      key: e,
      value: zt,
      domain: t,
      previousKey: e,
      previousDomain: t,
    })),
    environmentVariables: Object.entries(e?.env_vars ?? {}).map(([e, t]) => ({ key: e, value: t })),
    autoSetupSettings: e?.auto_setup_settings ?? { use_auto_setup: !0 },
    cacheSettings: e?.cache_settings ?? { post_setup_cache_enabled: !0 },
    enableAuthtranslator: e?.enable_authtranslator ?? !1,
    enableDockerInDocker: e?.enable_docker_in_docker ?? !1,
  };
}
function Dt(e) {
  let t = {};
  (e.label.trim() === `` && (t.label = `required`),
    e.machineId === `` && (t.machineId = `required`),
    e.repositoryId === `` && (t.repositoryId = `required`));
  let n = e.secrets.map(({ key: e, domain: t }) => ({
    key: e.trim(),
    identity: It(e.trim(), Lt(t)),
  }));
  n.some(({ key: e }) => e === ``)
    ? (t.secrets = `name-required`)
    : new Set(n.map(({ identity: e }) => e)).size === n.length
      ? e.secrets.some(({ value: e }) => e.trim() === ``)
        ? (t.secrets = `value-required`)
        : e.secrets.some(Rt) && (t.secrets = `global-rename-value-required`)
      : (t.secrets = `duplicate-name`);
  let r = e.environmentVariables.map(({ key: e }) => e.trim());
  return (
    r.some((e) => e === ``)
      ? (t.environmentVariables = `name-required`)
      : new Set(r).size === r.length
        ? e.environmentVariables.some(({ value: e }) => e.trim() === ``) &&
          (t.environmentVariables = `value-required`)
        : (t.environmentVariables = `duplicate-name`),
    t
  );
}
function Ot(e, t, n) {
  return (t || e.machineId === n) && Object.keys(Dt(e)).length === 0;
}
function kt(e) {
  return {
    label: e.label.trim(),
    description: e.description,
    machine_id: e.machineId,
    repos: [e.repositoryId],
    github_connector_id: e.githubConnectorId,
    workspace_dir: e.workspaceDirectory,
    agent_network_access: e.agentNetworkAccess,
    setup: e.setupCommands,
    maintenance_setup: e.maintenanceSetupCommands,
    env_vars: Object.fromEntries(
      e.environmentVariables.map(({ key: e, value: t }) => [e.trim(), t]),
    ),
    secrets_with_domains: e.secrets.map(({ key: e, value: t, domain: n }) => ({
      name: e.trim(),
      domain: Lt(n),
      value: t,
    })),
    share_settings: e.shareSettings,
    share_targets: Nt(e),
    auto_setup_settings: e.autoSetupSettings,
    cache_settings: e.cacheSettings,
    enable_authtranslator: e.enableAuthtranslator,
    enable_docker_in_docker: e.enableDockerInDocker,
  };
}
function At(e) {
  let t = e.indexOf(`:`);
  return t === -1 ? null : e.slice(7, t);
}
function jt(e, t) {
  return {
    etag: t.etag,
    label: e.label.trim(),
    description: e.description,
    machine_id: e.machineId,
    workspace_dir: e.workspaceDirectory,
    agent_network_access: e.agentNetworkAccess,
    setup: e.setupCommands,
    maintenance_setup: e.maintenanceSetupCommands,
    env_vars: Object.fromEntries(
      e.environmentVariables.map(({ key: e, value: t }) => [e.trim(), t]),
    ),
    secrets_with_domains: Ft(e.secrets, Pt(t)),
    share_settings: e.shareSettings,
    share_targets: Nt(e),
    auto_setup_settings: e.autoSetupSettings,
    cache_settings: e.cacheSettings,
    enable_authtranslator: e.enableAuthtranslator,
    enable_docker_in_docker: e.enableDockerInDocker,
  };
}
function Mt(e) {
  return Array.isArray(e)
    ? e.join(`
`)
    : (e ?? ``);
}
function Nt(e) {
  return e.shareSettings === `private`
    ? []
    : e.shareTargets
        .map((e) => e.trim())
        .filter((e) => e !== ``)
        .map((e) => ({ email: e, permission: `editor`, type: `user` }));
}
function Pt(e) {
  return e?.secrets_with_domains == null
    ? Object.keys(e?.secrets ?? {}).map((e) => {
        let [t, ...n] = e.split(`::`);
        return n.length === 0
          ? { name: e, domain: null }
          : { name: n.join(`::`) || e, domain: t || null };
      })
    : e.secrets_with_domains.flatMap((e) =>
        typeof e.name != `string` || e.name === ``
          ? []
          : [{ name: e.name, domain: e.domain ?? null }],
      );
}
function Ft(e, t) {
  let n = new Set(),
    r = [];
  for (let t of e) {
    let e = t.key.trim(),
      i = Lt(t.domain);
    if (t.previousDomain === void 0) {
      t.value !== `` && (n.add(It(e, i)), r.push({ name: e, domain: i, value: t.value }));
      continue;
    }
    let a = t.previousKey ?? t.key,
      o = Lt(t.previousDomain);
    n.add(It(a, o));
    let s = a !== e,
      c = o !== i,
      l = t.value !== zt;
    (!s && !c && !l) ||
      r.push({
        name: e,
        domain: i,
        value: l ? t.value : null,
        previous_domain: o,
        ...(s ? { previous_name: a } : {}),
      });
  }
  for (let { name: e, domain: i } of t) {
    let t = It(e, i);
    n.has(t) || r.push({ name: e, domain: null, value: null, previous_domain: i });
  }
  return r;
}
function It(e, t) {
  return `${e}::${t ?? `__global__`}`;
}
function Lt(e) {
  return e?.trim() || null;
}
function Rt(e) {
  return (
    e.previousDomain !== void 0 &&
    e.previousDomain == null &&
    Lt(e.domain) == null &&
    e.previousKey != null &&
    e.previousKey !== e.key.trim() &&
    e.value === `<REDACTED>`
  );
}
var zt,
  Bt,
  Vt = e(() => {
    ((zt = `<REDACTED>`), (Bt = `wham-public/wham-universal`));
  });
function Ht(e) {
  let t = (0, Kt.c)(7),
    { form: n, isPending: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(H.Header, {
        title: (0, J.jsx)(u, {
          id: `settings.cloudEnvironments.editor.variables`,
          defaultMessage: `Variables and secrets`,
          description: `Heading for cloud environment variables and secrets`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = (e) => {
        let t = Dt(e);
        return (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(Wt, {
              entries: e.environmentVariables,
              error: t.environmentVariables
                ? (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.variables.invalid`,
                    defaultMessage: `Variable names and values are required, and names must be unique`,
                    description: `Validation message for invalid cloud environment variables`,
                  })
                : void 0,
              isPending: r,
              label: (0, J.jsx)(u, {
                id: `settings.cloudEnvironments.editor.environmentVariables`,
                defaultMessage: `Environment variables`,
                description: `Label for cloud environment variables`,
              }),
              onChange: (e) => n.setFieldValue(`environmentVariables`, e),
            }),
            (0, J.jsx)(Gt, {
              entries: e.secrets,
              error: t.secrets
                ? (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.secrets.invalid`,
                    defaultMessage: `Secret names and values are required, and name and domain combinations must be unique. Renaming a global secret requires a new value`,
                    description: `Validation message for invalid cloud environment secrets`,
                  })
                : void 0,
              isPending: r,
              onChange: (e) => n.setFieldValue(`secrets`, e),
            }),
          ],
        });
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, J.jsxs)(H, {
          children: [
            i,
            (0, J.jsx)(H.Content, {
              children: (0, J.jsx)(n.Subscribe, { selector: Ut, children: a }),
            }),
          ],
        })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Ut(e) {
  return e.values;
}
function Wt(e) {
  let t = (0, Kt.c)(19),
    { entries: n, error: r, isPending: i, label: a, onChange: o } = e,
    s = R(),
    c;
  t[0] !== n || t[1] !== o
    ? ((c = () => o([...n, { key: ``, value: `` }])), (t[0] = n), (t[1] = o), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(u, {
        id: `settings.cloudEnvironments.editor.addVariable`,
        defaultMessage: `Add variable`,
        description: `Button label for adding a cloud environment variable`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let d;
  t[4] !== i || t[5] !== c
    ? ((d = (0, J.jsx)(I, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: l,
      })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== r || t[8] !== a || t[9] !== d
    ? ((f = (0, J.jsx)(B, { description: r, label: a, control: d })),
      (t[7] = r),
      (t[8] = a),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== n || t[12] !== s || t[13] !== i || t[14] !== o
    ? ((p = n.map((e, t) =>
        (0, J.jsx)(
          B,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(K, {
                  "aria-label": s.formatMessage({
                    id: `settings.cloudEnvironments.editor.variable.name`,
                    defaultMessage: `Variable name`,
                    description: `Accessible label for a cloud environment variable name`,
                  }),
                  disabled: i,
                  value: e.key,
                  onChange: (e) =>
                    o(n.map((n, r) => (r === t ? { ...n, key: e.target.value } : n))),
                }),
                (0, J.jsx)(K, {
                  "aria-label": s.formatMessage({
                    id: `settings.cloudEnvironments.editor.variable.value`,
                    defaultMessage: `Variable value`,
                    description: `Accessible label for a cloud environment variable value`,
                  }),
                  disabled: i,
                  value: e.value,
                  onChange: (e) =>
                    o(n.map((n, r) => (r === t ? { ...n, value: e.target.value } : n))),
                }),
                (0, J.jsx)(I, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => o(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.removeVariable`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment variable`,
                  }),
                }),
              ],
            }),
          },
          t,
        ),
      )),
      (t[11] = n),
      (t[12] = s),
      (t[13] = i),
      (t[14] = o),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== f || t[17] !== p
      ? ((m = (0, J.jsxs)(U, { children: [f, p] })), (t[16] = f), (t[17] = p), (t[18] = m))
      : (m = t[18]),
    m
  );
}
function Gt(e) {
  let t = (0, Kt.c)(19),
    { entries: n, error: r, isPending: i, onChange: a } = e,
    o = R(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(u, {
        id: `settings.cloudEnvironments.editor.secrets`,
        defaultMessage: `Secrets`,
        description: `Label for cloud environment secrets`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== n || t[2] !== a
    ? ((c = () => a([...n, { key: ``, value: `` }])), (t[1] = n), (t[2] = a), (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(u, {
        id: `settings.cloudEnvironments.editor.addSecret`,
        defaultMessage: `Add secret`,
        description: `Button label for adding a cloud environment secret`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let d;
  t[5] !== i || t[6] !== c
    ? ((d = (0, J.jsx)(I, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: l,
      })),
      (t[5] = i),
      (t[6] = c),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== r || t[9] !== d
    ? ((f = (0, J.jsx)(B, { description: r, label: s, control: d })),
      (t[8] = r),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== n || t[12] !== o || t[13] !== i || t[14] !== a
    ? ((p = n.map((e, t) =>
        (0, J.jsx)(
          B,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(K, {
                  "aria-label": o.formatMessage({
                    id: `settings.cloudEnvironments.editor.secret.name`,
                    defaultMessage: `Secret name`,
                    description: `Accessible label for a cloud environment secret name`,
                  }),
                  disabled: i,
                  value: e.key,
                  onChange: (e) =>
                    a(n.map((n, r) => (r === t ? { ...n, key: e.target.value } : n))),
                }),
                (0, J.jsx)(K, {
                  "aria-label": o.formatMessage({
                    id: `settings.cloudEnvironments.editor.secret.value`,
                    defaultMessage: `Secret value`,
                    description: `Accessible label for a cloud environment secret value`,
                  }),
                  disabled: i,
                  placeholder: e.previousKey
                    ? o.formatMessage({
                        id: `settings.cloudEnvironments.editor.secret.keepPlaceholder`,
                        defaultMessage: `Leave unchanged to keep`,
                        description: `Placeholder for an existing cloud environment secret value`,
                      })
                    : void 0,
                  type: `password`,
                  value: e.value,
                  onChange: (e) =>
                    a(n.map((n, r) => (r === t ? { ...n, value: e.target.value } : n))),
                }),
                (0, J.jsx)(I, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => a(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.removeSecret`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment secret`,
                  }),
                }),
                (0, J.jsx)(`div`, {
                  className: `col-span-2`,
                  children: (0, J.jsx)(K, {
                    "aria-label": o.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.domain`,
                      defaultMessage: `Secret domain`,
                      description: `Accessible label for a cloud environment secret domain`,
                    }),
                    disabled: i,
                    placeholder: o.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.domainPlaceholder`,
                      defaultMessage: `Optional domain`,
                      description: `Placeholder for an optional cloud environment secret domain`,
                    }),
                    value: e.domain ?? ``,
                    onChange: (e) =>
                      a(n.map((n, r) => (r === t ? { ...n, domain: e.target.value } : n))),
                  }),
                }),
              ],
            }),
          },
          `${e.previousKey ?? `new`}-${t}`,
        ),
      )),
      (t[11] = n),
      (t[12] = o),
      (t[13] = i),
      (t[14] = a),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== f || t[17] !== p
      ? ((m = (0, J.jsxs)(U, { children: [f, p] })), (t[16] = f), (t[17] = p), (t[18] = m))
      : (m = t[18]),
    m
  );
}
var Kt,
  J,
  qt = e(() => {
    ((Kt = b()), f(), pe(), Ie(), we(), We(), Vt(), gt(), (J = L()));
  });
function Jt(e, t, n) {
  return z.safeGet(`/wham/environments/search`, {
    parameters: { query: { query: e || void 0, cursor: t ?? void 0, limit: n } },
  });
}
function Yt(e, t) {
  return !!e.is_pinned == !!t.is_pinned
    ? (t.task_count ?? 0) - (e.task_count ?? 0) || e.label.localeCompare(t.label)
    : e.is_pinned
      ? -1
      : 1;
}
function Xt(e) {
  return z.safeGet(`/wham/environments/{environment_id}/with-creator-and-machine`, {
    parameters: { path: { environment_id: e } },
  });
}
function Zt() {
  return z.safeGet(`/wham/machines`);
}
async function Qt() {
  let { connectors: e } = await z.safeGet(`/aip/connectors/product_specific`, {
      parameters: { query: { purpose: `hermes` } },
      additionalHeaders: cn,
    }),
    t = e
      .filter((e) => e.status !== `DISABLED_BY_ADMIN` && (e.id === on || e.template_id === sn))
      .sort((e, t) => (e.id === on ? -1 : t.id === on ? 1 : e.name.localeCompare(t.name))),
    n = await Promise.all(
      t.map((e) =>
        z.safeGet(`/aip/connectors/{connector_id}/link`, {
          parameters: { path: { connector_id: e.id } },
          additionalHeaders: cn,
        }),
      ),
    );
  return t.filter((e, t) => n[t].link != null);
}
function $t(e, t) {
  return z.safeGet(`/wham/github/repositories/search/all-installations`, {
    parameters: { query: { query: e, limit: 20, connector_id: t } },
  });
}
function en(e) {
  return z.safePost(`/wham/environments`, { requestBody: e });
}
function tn({ environmentId: e, requestBody: t }) {
  return z.safePatch(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
    requestBody: t,
  });
}
function nn(e) {
  return z.safeDelete(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
  });
}
function rn(e) {
  return z.safePost(`/wham/environments/{environment_id}/reset-cache`, {
    parameters: { path: { environment_id: e } },
  });
}
function an({ environmentId: e, etag: t, isPinned: n }) {
  return tn({ environmentId: e, requestBody: { etag: t, is_pinned: n } });
}
var on,
  sn,
  cn,
  ln = e(() => {
    (a(),
      (on = `connector_76869538009648d5b282a4bb21c3d157`),
      (sn = `templated_apps_GitHubEnterprise`),
      (cn = { "OAI-Product-Sku": `CODEX` }));
  });
function un(e) {
  return C({
    queryKey: [`cloud-environments`, `search`, e],
    queryFn: ({ pageParam: t }) => Jt(e, t, t == null ? 25 : 100),
    initialPageParam: null,
    getNextPageParam: (e) => e.cursor ?? null,
    refetchOnMount: !0,
    retry: !1,
    staleTime: A.FIVE_MINUTES,
  });
}
async function dn(e) {
  await Promise.all([
    e.queryClient.invalidateQueries({ queryKey: [`cloud-environments`, `search`] }),
    e.queryClient.invalidateQueries({ queryKey: [`environments`] }),
    e.queryClient.invalidateQueries({ queryKey: [`workspace`, `environments-search`] }),
    e.queryClient.invalidateQueries({ queryKey: [`workspace`, `environments-by-repo`] }),
  ]);
}
var fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn = e(() => {
    (Se(),
      F(),
      m(),
      l(),
      ln(),
      (fn = fe(p, (e) => ({
        queryKey: [`cloud-environments`, `details`, e],
        queryFn: () => Xt(e),
        refetchOnMount: !0,
        staleTime: A.FIVE_MINUTES,
      }))),
      (pn = _e(p, () => ({
        queryKey: [`cloud-environments`, `machines`],
        queryFn: Zt,
        refetchOnMount: !0,
        retry: !1,
        staleTime: A.FIVE_MINUTES,
      }))),
      (mn = _e(p, () => ({
        queryKey: [`cloud-environments`, `github-connectors`],
        queryFn: Qt,
        refetchOnMount: !0,
        retry: !1,
        staleTime: A.FIVE_MINUTES,
      }))),
      (hn = fe(p, ({ connectorId: e, query: t }) => ({
        queryKey: [`cloud-environments`, `repositories`, e, t],
        enabled: t !== `` && e != null,
        queryFn: () => {
          if (e == null) throw Error(`A connector ID is required to search repositories`);
          return $t(t, e);
        },
        refetchOnMount: !0,
        retry: !1,
        staleTime: A.FIVE_MINUTES,
      }))),
      (gn = M(p, ({ scope: e }) => ({ mutationFn: en, onSuccess: () => dn(e) }))),
      (_n = M(p, ({ scope: e }) => ({
        mutationFn: (e) => tn(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([dn(e), e.query.invalidate(fn, n, { exact: !0 })]);
        },
      }))),
      (vn = M(p, ({ scope: e }) => ({
        mutationFn: nn,
        onSuccess: async (t, n) => {
          (e.queryClient.removeQueries({ queryKey: e.query.getOptions(fn, n).queryKey }),
            await dn(e));
        },
      }))),
      (yn = M(p, ({ scope: e }) => ({
        mutationFn: (e) => rn(e),
        onSuccess: (t, n) => e.query.invalidate(fn, n, { exact: !0 }),
      }))),
      (bn = M(p, ({ scope: e }) => ({
        mutationFn: (e) => an(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([dn(e), e.query.invalidate(fn, n, { exact: !0 })]);
        },
      }))));
  });
function Sn(e) {
  let t = (0, wn.c)(24),
    { form: n, isPending: r, preferredConnectorId: i } = e,
    a = R(),
    [s, c] = (0, Tn.useState)(``),
    l;
  t[0] === s ? (l = t[1]) : ((l = s.trim()), (t[0] = s), (t[1] = l));
  let f = se(l, 200),
    [p, m] = (0, Tn.useState)(null),
    h = o(mn),
    g;
  t[2] !== h.data || t[3] !== i || t[4] !== p
    ? ((g = h.data?.find((e) => e.id === (p ?? i))?.id ?? h.data?.[0]?.id ?? null),
      (t[2] = h.data),
      (t[3] = i),
      (t[4] = p),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v;
  t[6] !== _ || t[7] !== f
    ? ((v = { connectorId: _, query: f }), (t[6] = _), (t[7] = f), (t[8] = v))
    : (v = t[8]);
  let y = be(hn, v),
    b;
  t[9] === s ? (b = t[10]) : ((b = s.trim()), (t[9] = s), (t[10] = b));
  let x = f !== b,
    S;
  t[11] !== _ ||
  t[12] !== h ||
  t[13] !== f ||
  t[14] !== n ||
  t[15] !== a ||
  t[16] !== x ||
  t[17] !== r ||
  t[18] !== s ||
  t[19] !== y
    ? ((S = (e) => {
        let { repositoryId: t, repositoryName: i } = e;
        return (0, Y.jsxs)(D, {
          contentMaxHeight: `list`,
          contentWidth: `menu`,
          disabled: r || h.isPending,
          triggerButton: (0, Y.jsx)(Re, {
            disabled: r || h.isPending,
            children:
              t === ``
                ? (0, Y.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.repository.select`,
                    defaultMessage: `Select a repository`,
                    description: `Placeholder for the cloud environment repository selector`,
                  })
                : i,
          }),
          children: [
            h.isError
              ? (0, Y.jsx)(d.Item, {
                  onSelect: () => void h.refetch(),
                  children: (0, Y.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.connector.retry`,
                    defaultMessage: `Retry loading GitHub connections`,
                    description: `Button label for retrying GitHub connections in the cloud environment repository selector`,
                  }),
                })
              : h.data?.length === 0
                ? (0, Y.jsx)(d.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.connector.empty`,
                      defaultMessage: `No GitHub connections available`,
                      description: `Empty state when no GitHub connection can be used for a cloud environment`,
                    }),
                  })
                : h.data != null && h.data.length > 1
                  ? (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsxs)(d.Section, {
                          children: [
                            (0, Y.jsx)(d.SectionLabel, {
                              children: (0, Y.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.connector`,
                                defaultMessage: `GitHub connection`,
                                description: `Label for choosing a GitHub connection when creating a cloud environment`,
                              }),
                            }),
                            h.data.map((e) =>
                              (0, Y.jsx)(
                                d.Item,
                                {
                                  RightIcon: e.id === _ ? ce : void 0,
                                  onSelect: () => {
                                    (m(e.id),
                                      n.setFieldValue(`githubConnectorId`, e.id),
                                      n.setFieldValue(`repositoryId`, ``),
                                      n.setFieldValue(`repositoryName`, ``));
                                  },
                                  children: e.name,
                                },
                                e.id,
                              ),
                            ),
                          ],
                        }),
                        (0, Y.jsx)(d.Separator, {}),
                      ],
                    })
                  : null,
            _ == null
              ? null
              : (0, Y.jsxs)(Y.Fragment, {
                  children: [
                    (0, Y.jsx)(d.SearchInput, {
                      "aria-label": a.formatMessage(En.repositorySearch),
                      autoFocus: !0,
                      placeholder: a.formatMessage(En.repositorySearch),
                      trailingContent:
                        y.isFetching || x ? (0, Y.jsx)(ue, { className: `icon-2xs` }) : void 0,
                      value: s,
                      onChange: (e) => c(e.currentTarget.value),
                    }),
                    x
                      ? null
                      : f === ``
                        ? (0, Y.jsx)(d.Message, {
                            centered: !0,
                            children: (0, Y.jsx)(u, {
                              id: `settings.cloudEnvironments.editor.repository.searchPrompt`,
                              defaultMessage: `Search by repository name`,
                              description: `Prompt shown before searching for a cloud environment repository`,
                            }),
                          })
                        : y.isError
                          ? (0, Y.jsx)(d.Message, {
                              centered: !0,
                              children: (0, Y.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.repository.error`,
                                defaultMessage: `Unable to load repositories`,
                                description: `Error shown when repository search fails`,
                              }),
                            })
                          : y.data?.repositories.length === 0
                            ? (0, Y.jsx)(d.Message, {
                                centered: !0,
                                children: (0, Y.jsx)(u, {
                                  id: `settings.cloudEnvironments.editor.repository.empty`,
                                  defaultMessage: `No repositories found`,
                                  description: `Empty state for cloud environment repository search`,
                                }),
                              })
                            : y.data?.repositories.map((e) =>
                                (0, Y.jsx)(
                                  d.Item,
                                  {
                                    onSelect: () => {
                                      (n.setFieldValue(`repositoryId`, e.id),
                                        n.setFieldValue(`repositoryName`, e.repository_full_name),
                                        n.setFieldValue(`githubConnectorId`, At(e.id) ?? _));
                                    },
                                    children: e.repository_full_name,
                                  },
                                  e.id,
                                ),
                              ),
                  ],
                }),
          ],
        });
      }),
      (t[11] = _),
      (t[12] = h),
      (t[13] = f),
      (t[14] = n),
      (t[15] = a),
      (t[16] = x),
      (t[17] = r),
      (t[18] = s),
      (t[19] = y),
      (t[20] = S))
    : (S = t[20]);
  let C;
  return (
    t[21] !== n.Subscribe || t[22] !== S
      ? ((C = (0, Y.jsx)(n.Subscribe, { selector: Cn, children: S })),
        (t[21] = n.Subscribe),
        (t[22] = S),
        (t[23] = C))
      : (C = t[23]),
    C
  );
}
function Cn(e) {
  return { repositoryId: e.values.repositoryId, repositoryName: e.values.repositoryName };
}
var wn,
  Tn,
  Y,
  En,
  Dn = e(() => {
    ((wn = b()),
      F(),
      (Tn = t(Ce(), 1)),
      f(),
      j(),
      ie(),
      ve(),
      ze(),
      ge(),
      Vt(),
      xn(),
      (Y = L()),
      (En = O({
        repositorySearch: {
          id: `settings.cloudEnvironments.editor.repository.search`,
          defaultMessage: `Search repositories`,
          description: `Accessible label and placeholder for searching repositories when creating a cloud environment`,
        },
      })));
  });
function On(e) {
  let t = (0, Mn.c)(7),
    { environment: n, onCancel: r, onSaved: i } = e;
  if (n == null) {
    let e;
    return (
      t[0] !== r || t[1] !== i
        ? ((e = (0, X.jsx)(kn, { onCancel: r, onSaved: i })), (t[0] = r), (t[1] = i), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i
      ? ((a = (0, X.jsx)(An, {
          environment: n,
          onCancel: r,
          onSaved: i,
          preferredConnectorId: null,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function kn(e) {
  let t = (0, Mn.c)(4),
    { onCancel: n, onSaved: r } = e,
    i = tt().data?.preferred_github_connector_id ?? null,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, X.jsx)(An, {
          environment: null,
          onCancel: n,
          onSaved: r,
          preferredConnectorId: i,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function An(e) {
  let t = (0, Mn.c)(35),
    { environment: n, onCancel: a, onSaved: s, preferredConnectorId: c } = e,
    l = S(p),
    f = R(),
    { planAtLogin: m } = i(),
    h = o(pn),
    v = o(gn),
    y = o(_n),
    b = _(`479474474`),
    x = _(`2664309699`),
    C;
  t[0] === m ? (C = t[1]) : ((C = g(m) || r(m)), (t[0] = m), (t[1] = C));
  let w = C,
    T = n ?? void 0,
    E;
  t[2] !== c || t[3] !== T ? ((E = Et(T, c)), (t[2] = c), (t[3] = T), (t[4] = E)) : (E = t[4]);
  let O;
  t[5] !== v ||
  t[6] !== n ||
  t[7] !== f ||
  t[8] !== h.data ||
  t[9] !== s ||
  t[10] !== l ||
  t[11] !== y
    ? ((O = (e) => {
        let { value: t } = e;
        if (Ot(t, h.data?.some((e) => e.id === t.machineId) === !0, n?.machine_id)) {
          if (n == null) {
            v.mutate(kt(t), {
              onSuccess: (e) => {
                (l
                  .get(ee)
                  .success(
                    f.formatMessage({
                      id: `settings.cloudEnvironments.create.success`,
                      defaultMessage: `Created cloud environment`,
                      description: `Toast shown after creating a cloud environment`,
                    }),
                  ),
                  s(e.id));
              },
              onError: () => {
                l.get(ee).danger(
                  f.formatMessage({
                    id: `settings.cloudEnvironments.create.error`,
                    defaultMessage: `Unable to create cloud environment`,
                    description: `Toast shown when creating a cloud environment fails`,
                  }),
                );
              },
            });
            return;
          }
          y.mutate(
            { environmentId: n.id, requestBody: jt(t, n) },
            {
              onSuccess: () => {
                (l
                  .get(ee)
                  .success(
                    f.formatMessage({
                      id: `settings.cloudEnvironments.update.success`,
                      defaultMessage: `Updated cloud environment`,
                      description: `Toast shown after updating a cloud environment`,
                    }),
                  ),
                  s(n.id));
              },
              onError: () => {
                l.get(ee).danger(
                  f.formatMessage({
                    id: `settings.cloudEnvironments.update.error`,
                    defaultMessage: `Unable to update cloud environment. Reload and try again`,
                    description: `Toast shown when updating a cloud environment fails`,
                  }),
                );
              },
            },
          );
        }
      }),
      (t[5] = v),
      (t[6] = n),
      (t[7] = f),
      (t[8] = h.data),
      (t[9] = s),
      (t[10] = l),
      (t[11] = y),
      (t[12] = O))
    : (O = t[12]);
  let k;
  t[13] !== E || t[14] !== O
    ? ((k = { defaultValues: E, onSubmit: O }), (t[13] = E), (t[14] = O), (t[15] = k))
    : (k = t[15]);
  let A = $e(k),
    j = v.isPending || y.isPending,
    M;
  t[16] === A
    ? (M = t[17])
    : ((M = (e) => {
        (e.preventDefault(), A.handleSubmit());
      }),
      (t[16] = A),
      (t[17] = M));
  let N;
  t[18] !== n ||
  t[19] !== A ||
  t[20] !== f ||
  t[21] !== j ||
  t[22] !== h ||
  t[23] !== a ||
  t[24] !== c ||
  t[25] !== b ||
  t[26] !== x ||
  t[27] !== w
    ? ((N = (e) => {
        let t = Dt(e),
          r = h.data?.find((t) => t.id === e.machineId),
          i = n?.machine_id === e.machineId ? n.machine : void 0;
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(H, {
              children: (0, X.jsx)(H.Content, {
                children: (0, X.jsxs)(U, {
                  children: [
                    (0, X.jsx)(A.Field, {
                      name: `label`,
                      children: (e) =>
                        (0, X.jsx)(B, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.name`,
                            defaultMessage: `Name`,
                            description: `Label for a cloud environment name`,
                          }),
                          description: t.label
                            ? (0, X.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.name.required`,
                                defaultMessage: `Name is required`,
                                description: `Validation message for a missing cloud environment name`,
                              })
                            : void 0,
                          control: (0, X.jsx)(K, {
                            "aria-label": f.formatMessage({
                              id: `settings.cloudEnvironments.editor.name.aria`,
                              defaultMessage: `Environment name`,
                              description: `Accessible label for a cloud environment name input`,
                            }),
                            disabled: j,
                            maxLength: 64,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                    (0, X.jsx)(A.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, X.jsx)(B, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.description`,
                            defaultMessage: `Description`,
                            description: `Label for a cloud environment description`,
                          }),
                          control: (0, X.jsx)(K, {
                            "aria-label": f.formatMessage({
                              id: `settings.cloudEnvironments.editor.description.aria`,
                              defaultMessage: `Environment description`,
                              description: `Accessible label for a cloud environment description input`,
                            }),
                            disabled: j,
                            maxLength: 512,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                    (0, X.jsx)(B, {
                      label: (0, X.jsx)(u, {
                        id: `settings.cloudEnvironments.editor.repository`,
                        defaultMessage: `Repository`,
                        description: `Label for a cloud environment repository`,
                      }),
                      description: t.repositoryId
                        ? (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.repository.required`,
                            defaultMessage: `Repository is required`,
                            description: `Validation message for a missing cloud environment repository`,
                          })
                        : void 0,
                      control:
                        n == null
                          ? (0, X.jsx)(Sn, { form: A, isPending: j, preferredConnectorId: c })
                          : (0, X.jsx)(K, {
                              "aria-label": f.formatMessage({
                                id: `settings.cloudEnvironments.editor.repository.aria`,
                                defaultMessage: `Repository`,
                                description: `Accessible label for a cloud environment repository input`,
                              }),
                              disabled: !0,
                              value: e.repositoryName,
                            }),
                    }),
                    (0, X.jsx)(A.Field, {
                      name: `machineId`,
                      children: (e) =>
                        (0, X.jsx)(B, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.machine`,
                            defaultMessage: `Machine`,
                            description: `Label for a cloud environment machine`,
                          }),
                          description: h.isError
                            ? (0, X.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.machine.error`,
                                defaultMessage: `Unable to load machines`,
                                description: `Error shown when cloud environment machines cannot be loaded`,
                              })
                            : t.machineId
                              ? (0, X.jsx)(u, {
                                  id: `settings.cloudEnvironments.editor.machine.required`,
                                  defaultMessage: `Machine is required`,
                                  description: `Validation message for a missing cloud environment machine`,
                                })
                              : void 0,
                          control: h.isError
                            ? (0, X.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  i == null
                                    ? null
                                    : (0, X.jsx)(Re, { disabled: !0, children: i.label }),
                                  (0, X.jsx)(I, {
                                    color: `secondary`,
                                    onClick: () => void h.refetch(),
                                    size: `toolbar`,
                                    type: `button`,
                                    children: (0, X.jsx)(u, {
                                      id: `settings.cloudEnvironments.editor.machine.retry`,
                                      defaultMessage: `Retry`,
                                      description: `Button label for retrying cloud environment machine loading`,
                                    }),
                                  }),
                                ],
                              })
                            : (0, X.jsx)(D, {
                                triggerButton: (0, X.jsx)(Re, {
                                  disabled: h.isPending || j,
                                  children:
                                    r?.label ??
                                    i?.label ??
                                    (0, X.jsx)(u, {
                                      id: `settings.cloudEnvironments.editor.machine.select`,
                                      defaultMessage: `Select a machine`,
                                      description: `Placeholder for a cloud environment machine selector`,
                                    }),
                                }),
                                children: h.data?.map((t) =>
                                  (0, X.jsx)(
                                    d.Item,
                                    { onSelect: () => e.handleChange(t.id), children: t.label },
                                    t.id,
                                  ),
                                ),
                              }),
                        }),
                    }),
                    (0, X.jsx)(A.Field, {
                      name: `workspaceDirectory`,
                      children: (e) =>
                        (0, X.jsx)(B, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory`,
                            defaultMessage: `Workspace directory`,
                            description: `Label for a cloud environment workspace directory`,
                          }),
                          description: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory.description`,
                            defaultMessage: `Directory where the repository is cloned; change this only when setup requires an absolute path`,
                            description: `Explanation for the cloud environment workspace directory`,
                          }),
                          control: (0, X.jsx)(K, {
                            "aria-label": f.formatMessage({
                              id: `settings.cloudEnvironments.editor.workspaceDirectory.aria`,
                              defaultMessage: `Workspace directory`,
                              description: `Accessible label for the cloud environment workspace directory input`,
                            }),
                            disabled: j,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                  ],
                }),
              }),
            }),
            (0, X.jsx)(_t, { form: A, isPending: j }),
            (0, X.jsx)(Ht, { form: A, isPending: j }),
            (0, X.jsx)(vt, { form: A, isPending: j }),
            (0, X.jsx)(bt, { form: A, isPending: j, showAuthtranslator: b, showDockerInDocker: x }),
            w ? (0, X.jsx)(St, { form: A, isPending: j }) : null,
            (0, X.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, X.jsx)(I, {
                  color: `secondary`,
                  disabled: j,
                  onClick: a,
                  type: `button`,
                  children: (0, X.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button label for cancelling cloud environment editing`,
                  }),
                }),
                (0, X.jsx)(I, {
                  color: `primary`,
                  disabled: !Ot(e, r != null, n?.machine_id),
                  loading: j,
                  type: `submit`,
                  children:
                    n == null
                      ? (0, X.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.create`,
                          defaultMessage: `Create environment`,
                          description: `Button label for creating a cloud environment`,
                        })
                      : (0, X.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.save`,
                          defaultMessage: `Save changes`,
                          description: `Button label for saving a cloud environment`,
                        }),
                }),
              ],
            }),
          ],
        });
      }),
      (t[18] = n),
      (t[19] = A),
      (t[20] = f),
      (t[21] = j),
      (t[22] = h),
      (t[23] = a),
      (t[24] = c),
      (t[25] = b),
      (t[26] = x),
      (t[27] = w),
      (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] !== A.Subscribe || t[30] !== N
    ? ((P = (0, X.jsx)(A.Subscribe, { selector: jn, children: N })),
      (t[29] = A.Subscribe),
      (t[30] = N),
      (t[31] = P))
    : (P = t[31]);
  let F;
  return (
    t[32] !== M || t[33] !== P
      ? ((F = (0, X.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: M,
          children: P,
        })),
        (t[32] = M),
        (t[33] = P),
        (t[34] = F))
      : (F = t[34]),
    F
  );
}
function jn(e) {
  return e.values;
}
var Mn,
  X,
  Nn = e(() => {
    ((Mn = b()),
      et(),
      F(),
      f(),
      c(),
      pe(),
      j(),
      he(),
      m(),
      Ie(),
      we(),
      ze(),
      We(),
      h(),
      w(),
      nt(),
      Tt(),
      qt(),
      Vt(),
      gt(),
      xn(),
      Dn(),
      (X = L()));
  });
function Pn(e) {
  let t = (0, Ln.c)(36),
    { onEditEnvironment: n, onSelectEnvironment: r } = e,
    a = S(p),
    s = R(),
    { userId: c } = i(),
    [l, d] = (0, Rn.useState)(``),
    f;
  t[0] === l ? (f = t[1]) : ((f = l.trim()), (t[0] = l), (t[1] = f));
  let m = se(f, 200),
    h;
  t[2] === m ? (h = t[3]) : ((h = un(m)), (t[2] = m), (t[3] = h));
  let {
      data: g,
      fetchNextPage: _,
      hasNextPage: v,
      isFetchNextPageError: y,
      isFetchingNextPage: b,
      isPending: C,
      refetch: w,
    } = x(h),
    T = o(bn);
  if (C && l === ``) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(U, {
            children: (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
              children: [
                (0, Z.jsx)(ue, { className: `icon-xs` }),
                (0, Z.jsx)(u, {
                  id: `settings.cloudEnvironments.list.loading`,
                  defaultMessage: `Loading cloud environments…`,
                  description: `Loading state for the cloud environments list`,
                }),
              ],
            }),
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let E, D, O;
  if (
    t[5] !== m ||
    t[6] !== g ||
    t[7] !== v ||
    t[8] !== s ||
    t[9] !== C ||
    t[10] !== n ||
    t[11] !== r ||
    t[12] !== w ||
    t[13] !== a ||
    t[14] !== l ||
    t[15] !== T ||
    t[16] !== c
  ) {
    let e = g?.pages.flatMap(Fn) ?? [],
      i = e.sort(Yt);
    ((E = `flex flex-col gap-3`),
      (D =
        e.length > 0 || l !== ``
          ? (0, Z.jsx)(Ke, {
              id: `cloud-environments-search`,
              label: s.formatMessage({
                id: `settings.cloudEnvironments.search.label`,
                defaultMessage: `Search cloud environments`,
                description: `Accessible label for cloud environment search`,
              }),
              maxLength: 128,
              onSearchQueryChange: d,
              placeholder: s.formatMessage({
                id: `settings.cloudEnvironments.search.placeholder`,
                defaultMessage: `Search environments`,
                description: `Placeholder for cloud environment search`,
              }),
              searchQuery: l,
            })
          : null),
      (O = C
        ? (0, Z.jsx)(U, {
            children: (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
              children: [
                (0, Z.jsx)(ue, { className: `icon-xs` }),
                (0, Z.jsx)(u, {
                  id: `settings.cloudEnvironments.list.searching`,
                  defaultMessage: `Searching cloud environments…`,
                  description: `Loading state while searching cloud environments`,
                }),
              ],
            }),
          })
        : g == null
          ? (0, Z.jsx)(U, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3`,
                children: [
                  (0, Z.jsx)(u, {
                    id: `settings.cloudEnvironments.list.error`,
                    defaultMessage: `Unable to load cloud environments`,
                    description: `Error state for the cloud environments list`,
                  }),
                  (0, Z.jsx)(I, {
                    color: `secondary`,
                    onClick: () => void w(),
                    size: `toolbar`,
                    children: (0, Z.jsx)(u, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })
          : i.length > 0 || !v
            ? (0, Z.jsx)(U, {
                children:
                  i.length === 0
                    ? (0, Z.jsx)(Qe, {
                        children:
                          m === ``
                            ? (0, Z.jsx)(u, {
                                id: `settings.cloudEnvironments.list.empty`,
                                defaultMessage: `No cloud environments yet`,
                                description: `Empty state for the cloud environments list`,
                              })
                            : (0, Z.jsx)(u, {
                                id: `settings.cloudEnvironments.list.noResults`,
                                defaultMessage: `No matching cloud environments`,
                                description: `Search empty state for the cloud environments list`,
                              }),
                      })
                    : i.map((e) =>
                        (0, Z.jsx)(
                          In,
                          {
                            environment: e,
                            isPinning: T.isPending && T.variables?.environmentId === e.id,
                            onEdit: () => n(e.id),
                            onSelect: () => r(e.id),
                            onTogglePin: () => {
                              T.mutate(
                                { environmentId: e.id, etag: e.etag, isPinned: !e.is_pinned },
                                {
                                  onError: () => {
                                    a.get(ee).danger(
                                      s.formatMessage({
                                        id: `settings.cloudEnvironments.pin.error`,
                                        defaultMessage: `Unable to update pinned environment`,
                                        description: `Toast shown when pinning a cloud environment fails`,
                                      }),
                                    );
                                  },
                                },
                              );
                            },
                            userId: c,
                          },
                          e.id,
                        ),
                      ),
              })
            : null),
      (t[5] = m),
      (t[6] = g),
      (t[7] = v),
      (t[8] = s),
      (t[9] = C),
      (t[10] = n),
      (t[11] = r),
      (t[12] = w),
      (t[13] = a),
      (t[14] = l),
      (t[15] = T),
      (t[16] = c),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O));
  } else ((E = t[17]), (D = t[18]), (O = t[19]));
  let k;
  t[20] !== g || t[21] !== _ || t[22] !== v || t[23] !== y || t[24] !== b
    ? ((k =
        g == null
          ? null
          : (0, Z.jsx)(Je, {
              hasNextPage: v && !y,
              isFetchingNextPage: b,
              onLoadNextPage: () => void _(),
            })),
      (t[20] = g),
      (t[21] = _),
      (t[22] = v),
      (t[23] = y),
      (t[24] = b),
      (t[25] = k))
    : (k = t[25]);
  let A;
  t[26] !== g || t[27] !== _ || t[28] !== y
    ? ((A =
        g != null && y
          ? (0, Z.jsx)(U, {
              children: (0, Z.jsx)(B, {
                control: (0, Z.jsx)(I, {
                  color: `secondary`,
                  onClick: () => void _(),
                  size: `toolbar`,
                  children: (0, Z.jsx)(u, {
                    id: `settings.cloudEnvironments.pagination.retryButton`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry cloud environment pagination`,
                  }),
                }),
                label: (0, Z.jsx)(u, {
                  id: `settings.cloudEnvironments.pagination.error`,
                  defaultMessage: `Unable to load more cloud environments`,
                  description: `Error shown when loading another page of cloud environments fails`,
                }),
              }),
            })
          : null),
      (t[26] = g),
      (t[27] = _),
      (t[28] = y),
      (t[29] = A))
    : (A = t[29]);
  let j;
  return (
    t[30] !== E || t[31] !== D || t[32] !== O || t[33] !== k || t[34] !== A
      ? ((j = (0, Z.jsxs)(`div`, { className: E, children: [D, O, k, A] })),
        (t[30] = E),
        (t[31] = D),
        (t[32] = O),
        (t[33] = k),
        (t[34] = A),
        (t[35] = j))
      : (j = t[35]),
    j
  );
}
function Fn(e) {
  return e.items;
}
function In(e) {
  let t = (0, Ln.c)(44),
    { environment: n, isPinning: r, onEdit: i, onSelect: a, onTogglePin: o, userId: s } = e,
    c = R(),
    l = n.permissions?.can_write === !0,
    f;
  t[0] !== n.creator_id || t[1] !== s
    ? ((f = s != null && n.creator_id.includes(s)), (t[0] = n.creator_id), (t[1] = s), (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = l && p,
    h;
  if (!l) {
    let e;
    (t[3] === c
      ? (e = t[4])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.pin.noPermission`,
          defaultMessage: `You don't have permission to pin this environment`,
          description: `Tooltip explaining why a cloud environment cannot be pinned`,
        })),
        (t[3] = c),
        (t[4] = e)),
      (h = e));
  } else if (!p) {
    let e;
    (t[5] === c
      ? (e = t[6])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.pin.notCreator`,
          defaultMessage: `Only the creator can pin this environment`,
          description: `Tooltip explaining why a cloud environment cannot be pinned`,
        })),
        (t[5] = c),
        (t[6] = e)),
      (h = e));
  } else if (n.is_pinned) {
    let e;
    (t[7] === c
      ? (e = t[8])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.unpin`,
          defaultMessage: `Unpin environment`,
          description: `Tooltip for unpinning a cloud environment`,
        })),
        (t[7] = c),
        (t[8] = e)),
      (h = e));
  } else {
    let e;
    (t[9] === c
      ? (e = t[10])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.pin`,
          defaultMessage: `Pin environment`,
          description: `Tooltip for pinning a cloud environment`,
        })),
        (t[9] = c),
        (t[10] = e)),
      (h = e));
  }
  let g;
  t[11] !== l || t[12] !== c || t[13] !== i
    ? ((g = l
        ? (0, Z.jsx)(`div`, {
            className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
            children: (0, Z.jsx)(D, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, Z.jsx)(Ae, {
                label: c.formatMessage({
                  id: `settings.cloudEnvironments.list.actions`,
                  defaultMessage: `Environment actions`,
                  description: `Accessible label for cloud environment row actions`,
                }),
                size: `icon`,
              }),
              children: (0, Z.jsx)(d.Item, {
                LeftIcon: Pe,
                onSelect: i,
                children: (0, Z.jsx)(u, {
                  id: `settings.cloudEnvironments.list.edit`,
                  defaultMessage: `Edit environment`,
                  description: `Menu item for editing a cloud environment`,
                }),
              }),
            }),
          })
        : null),
      (t[11] = l),
      (t[12] = c),
      (t[13] = i),
      (t[14] = g))
    : (g = t[14]);
  let _ = n.is_pinned
      ? void 0
      : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-within:opacity-100`,
    y = !m,
    b;
  t[15] === n.is_pinned
    ? (b = t[16])
    : ((b = n.is_pinned
        ? (0, Z.jsx)(Ve, { className: `icon-xs` })
        : (0, Z.jsx)(Oe, { className: `icon-xs` })),
      (t[15] = n.is_pinned),
      (t[16] = b));
  let x;
  t[17] !== r || t[18] !== o || t[19] !== h || t[20] !== y || t[21] !== b
    ? ((x = (0, Z.jsx)(I, {
        "aria-label": h,
        color: `ghost`,
        disabled: y,
        loading: r,
        onClick: o,
        size: `icon`,
        uniform: !0,
        children: b,
      })),
      (t[17] = r),
      (t[18] = o),
      (t[19] = h),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== _ || t[24] !== x
    ? ((S = (0, Z.jsx)(`span`, { className: _, children: x })),
      (t[23] = _),
      (t[24] = x),
      (t[25] = S))
    : (S = t[25]);
  let C;
  t[26] !== h || t[27] !== S
    ? ((C = (0, Z.jsx)(v, { tooltipContent: h, children: S })),
      (t[26] = h),
      (t[27] = S),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] !== g || t[30] !== C
    ? ((w = (0, Z.jsxs)(Z.Fragment, { children: [g, C] })), (t[29] = g), (t[30] = C), (t[31] = w))
    : (w = t[31]);
  let T;
  t[32] !== n.label || t[33] !== c
    ? ((T = c.formatMessage(
        {
          id: `settings.cloudEnvironments.list.open`,
          defaultMessage: `Open {environmentName}`,
          description: `Accessible label for opening a cloud environment`,
        },
        { environmentName: n.label },
      )),
      (t[32] = n.label),
      (t[33] = c),
      (t[34] = T))
    : (T = t[34]);
  let E;
  t[35] !== n.repo_map || t[36] !== n.repos
    ? ((E =
        n.repos.length > 0
          ? n.repos.map((e) => n.repo_map?.[e]?.repository_full_name ?? e).join(`, `)
          : (0, Z.jsx)(u, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            })),
      (t[35] = n.repo_map),
      (t[36] = n.repos),
      (t[37] = E))
    : (E = t[37]);
  let O;
  return (
    t[38] !== n.label || t[39] !== a || t[40] !== T || t[41] !== E || t[42] !== w
      ? ((O = (0, Z.jsx)(je, {
          actions: w,
          ariaLabel: T,
          description: E,
          label: n.label,
          onClick: a,
        })),
        (t[38] = n.label),
        (t[39] = a),
        (t[40] = T),
        (t[41] = E),
        (t[42] = w),
        (t[43] = O))
      : (O = t[43]),
    O
  );
}
var Ln,
  Rn,
  Z,
  zn = e(() => {
    ((Ln = b()),
      Se(),
      F(),
      (Rn = t(Ce(), 1)),
      f(),
      c(),
      pe(),
      j(),
      qe(),
      Ne(),
      Ge(),
      ie(),
      he(),
      te(),
      De(),
      Be(),
      ke(),
      m(),
      Ze(),
      we(),
      We(),
      ge(),
      xn(),
      ln(),
      (Z = L()));
  });
function Bn() {
  let e = (0, Gn.c)(41),
    t = re(),
    n = ye(),
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = (e) => {
        n(e);
      }),
      (e[0] = n),
      (e[1] = r));
  let i = r,
    a;
  e[2] === t.pathname
    ? (a = e[3])
    : ((a = t.pathname.slice(28).split(`/`).filter(Vn)), (e[2] = t.pathname), (e[3] = a));
  let o = a,
    s = o.length === 1 && o[0] === `new`,
    c = o.length > 0 && o[0] !== `new` ? o[0] : null,
    l = c != null && o.length === 2 && o[1] === `edit`,
    d = c != null && o.length === 1;
  if (o.length === 0) {
    let t;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Le, { slug: `cloud-environments` })), (e[4] = t))
      : (t = e[4]);
    let n;
    e[5] === i ? (n = e[6]) : ((n = () => i(`${$}/new`)), (e[5] = i), (e[6] = n));
    let r;
    e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(u, {
          id: `settings.cloudEnvironments.create.action`,
          defaultMessage: `Create environment`,
          description: `Button label for creating a cloud environment`,
        })),
        (e[7] = r))
      : (r = e[7]);
    let a;
    e[8] === n
      ? (a = e[9])
      : ((a = (0, Q.jsx)(I, { color: `primary`, onClick: n, children: r })),
        (e[8] = n),
        (e[9] = a));
    let o;
    e[10] === i
      ? (o = e[11])
      : ((o = (0, Q.jsx)(Pn, {
          onEditEnvironment: (e) => i(`${$}/${e}/edit`),
          onSelectEnvironment: (e) => i(`${$}/${e}`),
        })),
        (e[10] = i),
        (e[11] = o));
    let s;
    return (
      e[12] !== a || e[13] !== o
        ? ((s = (0, Q.jsx)(Ue, { title: t, action: a, children: o })),
          (e[12] = a),
          (e[13] = o),
          (e[14] = s))
        : (s = e[14]),
      s
    );
  }
  if (s) {
    let t;
    e[15] === i
      ? (t = e[16])
      : ((t = (0, Q.jsx)(Wn, { onClick: () => i($) })), (e[15] = i), (e[16] = t));
    let n;
    e[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(u, {
          id: `settings.cloudEnvironments.create.title`,
          defaultMessage: `Create cloud environment`,
          description: `Title for creating a cloud environment`,
        })),
        (e[17] = n))
      : (n = e[17]);
    let r;
    e[18] === i
      ? (r = e[19])
      : ((r = (0, Q.jsx)(On, {
          environment: null,
          onCancel: () => i($),
          onSaved: (e) => i(`${$}/${e}`),
        })),
        (e[18] = i),
        (e[19] = r));
    let a;
    return (
      e[20] !== t || e[21] !== r
        ? ((a = (0, Q.jsx)(Ue, { backSlot: t, title: n, children: r })),
          (e[20] = t),
          (e[21] = r),
          (e[22] = a))
        : (a = e[22]),
      a
    );
  }
  if (c != null && l) {
    let t;
    e[23] !== c || e[24] !== i
      ? ((t = () => i(`${$}/${c}`)), (e[23] = c), (e[24] = i), (e[25] = t))
      : (t = e[25]);
    let n;
    return (
      e[26] !== c || e[27] !== t
        ? ((n = (0, Q.jsx)(Un, { environmentId: c, onBack: t })),
          (e[26] = c),
          (e[27] = t),
          (e[28] = n))
        : (n = e[28]),
      n
    );
  }
  if (c != null && d) {
    let t, n;
    e[29] === i
      ? ((t = e[30]), (n = e[31]))
      : ((t = () => i($)), (n = () => i($)), (e[29] = i), (e[30] = t), (e[31] = n));
    let r;
    e[32] !== c || e[33] !== i
      ? ((r = () => i(`${$}/${c}/edit`)), (e[32] = c), (e[33] = i), (e[34] = r))
      : (r = e[34]);
    let a;
    return (
      e[35] !== c || e[36] !== t || e[37] !== n || e[38] !== r
        ? ((a = (0, Q.jsx)(Hn, { environmentId: c, onBack: t, onDeleted: n, onEdit: r })),
          (e[35] = c),
          (e[36] = t),
          (e[37] = n),
          (e[38] = r),
          (e[39] = a))
        : (a = e[39]),
      a
    );
  }
  let f;
  return (
    e[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Q.jsx)(le, { to: $, replace: !0 })), (e[40] = f))
      : (f = e[40]),
    f
  );
}
function Vn(e) {
  return e !== ``;
}
function Hn(e) {
  let t = (0, Gn.c)(64),
    { environmentId: n, onBack: r, onDeleted: a, onEdit: s } = e,
    c = S(p),
    l = R(),
    { userId: f } = i(),
    m = be(fn, n),
    h = o(vn),
    g = o(yn),
    _ = o(bn),
    [y, b] = (0, Kn.useState)(null);
  if (m.isPending || m.isError) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = (0, Q.jsx)(Wn, { onClick: r })), (t[0] = r), (t[1] = e));
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(u, {
          id: `settings.cloudEnvironments.details.title`,
          defaultMessage: `Cloud environment`,
          description: `Title for cloud environment details`,
        })),
        (t[2] = n))
      : (n = t[2]);
    let i;
    t[3] === m
      ? (i = t[4])
      : ((i = (0, Q.jsx)(U, {
          children: (0, Q.jsx)(`div`, {
            className: `flex items-center justify-between gap-3 p-3 text-sm text-token-text-secondary`,
            children: m.isPending
              ? (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, Q.jsx)(ue, { className: `icon-xs` }),
                    (0, Q.jsx)(u, {
                      id: `settings.cloudEnvironments.details.loading`,
                      defaultMessage: `Loading environment…`,
                      description: `Loading state for cloud environment details`,
                    }),
                  ],
                })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(u, {
                      id: `settings.cloudEnvironments.details.error`,
                      defaultMessage: `Unable to load this cloud environment`,
                      description: `Error state for cloud environment details`,
                    }),
                    (0, Q.jsx)(I, {
                      color: `secondary`,
                      onClick: () => void m.refetch(),
                      size: `toolbar`,
                      children: (0, Q.jsx)(u, {
                        id: `settings.cloudEnvironments.retry`,
                        defaultMessage: `Retry`,
                        description: `Button label to retry loading cloud environments`,
                      }),
                    }),
                  ],
                }),
          }),
        })),
        (t[3] = m),
        (t[4] = i));
    let a;
    return (
      t[5] !== e || t[6] !== i
        ? ((a = (0, Q.jsx)(Ue, { backSlot: e, title: n, children: i })),
          (t[5] = e),
          (t[6] = i),
          (t[7] = a))
        : (a = t[7]),
      a
    );
  }
  let x = m.data,
    C = x.permissions?.can_write === !0,
    w = x.permissions?.can_delete === !0,
    T;
  t[8] !== x.creator || t[9] !== f
    ? ((T = f != null && x.creator.id.includes(f)), (t[8] = x.creator), (t[9] = f), (t[10] = T))
    : (T = t[10]);
  let E = C && T,
    O = C && (x.cache_settings?.post_setup_cache_enabled ?? !0),
    k;
  t[11] !== x.is_pinned || t[12] !== l
    ? ((k = x.is_pinned
        ? l.formatMessage({
            id: `settings.cloudEnvironments.details.unpin`,
            defaultMessage: `Unpin environment`,
            description: `Tooltip for unpinning a cloud environment`,
          })
        : l.formatMessage({
            id: `settings.cloudEnvironments.details.pin`,
            defaultMessage: `Pin environment`,
            description: `Tooltip for pinning a cloud environment`,
          })),
      (t[11] = x.is_pinned),
      (t[12] = l),
      (t[13] = k))
    : (k = t[13]);
  let A = k,
    j;
  t[14] === l
    ? (j = t[15])
    : ((j = l.formatMessage({
        id: `settings.cloudEnvironments.details.edit`,
        defaultMessage: `Edit environment`,
        description: `Tooltip for editing a cloud environment`,
      })),
      (t[14] = l),
      (t[15] = j));
  let M = j,
    N;
  t[16] !== w ||
  t[17] !== C ||
  t[18] !== E ||
  t[19] !== O ||
  t[20] !== M ||
  t[21] !== x.etag ||
  t[22] !== x.id ||
  t[23] !== x.is_pinned ||
  t[24] !== l ||
  t[25] !== s ||
  t[26] !== A ||
  t[27] !== c ||
  t[28] !== _
    ? ((N =
        C || w
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                E
                  ? (0, Q.jsx)(v, {
                      tooltipContent: A,
                      children: (0, Q.jsx)(I, {
                        "aria-label": A,
                        color: `ghost`,
                        loading: _.isPending,
                        onClick: () => {
                          _.mutate(
                            { environmentId: x.id, etag: x.etag, isPinned: !x.is_pinned },
                            {
                              onError: () => {
                                c.get(ee).danger(
                                  l.formatMessage({
                                    id: `settings.cloudEnvironments.pin.error`,
                                    defaultMessage: `Unable to update pinned environment`,
                                    description: `Toast shown when pinning a cloud environment fails`,
                                  }),
                                );
                              },
                            },
                          );
                        },
                        size: `toolbar`,
                        uniform: !0,
                        children: x.is_pinned
                          ? (0, Q.jsx)(Ve, { className: `icon-xs` })
                          : (0, Q.jsx)(Oe, { className: `icon-xs` }),
                      }),
                    })
                  : null,
                C
                  ? (0, Q.jsxs)(I, {
                      "aria-label": M,
                      color: `secondary`,
                      onClick: s,
                      size: `toolbar`,
                      children: [
                        (0, Q.jsx)(Pe, { className: `icon-xs` }),
                        (0, Q.jsx)(u, {
                          id: `settings.cloudEnvironments.details.editAction`,
                          defaultMessage: `Edit`,
                          description: `Button label for editing a cloud environment`,
                        }),
                      ],
                    })
                  : null,
                w || O
                  ? (0, Q.jsxs)(D, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(Ae, {
                        label: l.formatMessage({
                          id: `settings.cloudEnvironments.details.actions`,
                          defaultMessage: `Environment actions`,
                          description: `Accessible label for cloud environment actions`,
                        }),
                      }),
                      children: [
                        O
                          ? (0, Q.jsx)(d.Item, {
                              LeftIcon: Fe,
                              onSelect: () => b(`reset-cache`),
                              children: (0, Q.jsx)(u, {
                                id: `settings.cloudEnvironments.details.resetCache`,
                                defaultMessage: `Reset cache`,
                                description: `Menu item for resetting a cloud environment cache`,
                              }),
                            })
                          : null,
                        w
                          ? (0, Q.jsx)(d.Item, {
                              LeftIcon: Te,
                              onSelect: () => b(`delete`),
                              children: (0, Q.jsx)(u, {
                                id: `settings.cloudEnvironments.details.delete`,
                                defaultMessage: `Delete environment`,
                                description: `Menu item for deleting a cloud environment`,
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[16] = w),
      (t[17] = C),
      (t[18] = E),
      (t[19] = O),
      (t[20] = M),
      (t[21] = x.etag),
      (t[22] = x.id),
      (t[23] = x.is_pinned),
      (t[24] = l),
      (t[25] = s),
      (t[26] = A),
      (t[27] = c),
      (t[28] = _),
      (t[29] = N))
    : (N = t[29]);
  let P;
  t[30] === r ? (P = t[31]) : ((P = (0, Q.jsx)(Wn, { onClick: r })), (t[30] = r), (t[31] = P));
  let F = x.description || void 0,
    te;
  t[32] === x
    ? (te = t[33])
    : ((te = (0, Q.jsx)(rt, { environment: x })), (t[32] = x), (t[33] = te));
  let ne = y === `delete`,
    re;
  t[34] !== h || t[35] !== x.id || t[36] !== l || t[37] !== a || t[38] !== c
    ? ((re = () => {
        h.mutate(x.id, {
          onSuccess: () => {
            (c
              .get(ee)
              .success(
                l.formatMessage({
                  id: `settings.cloudEnvironments.delete.success`,
                  defaultMessage: `Deleted cloud environment`,
                  description: `Toast shown after deleting a cloud environment`,
                }),
              ),
              a());
          },
          onError: () => {
            c.get(ee).danger(
              l.formatMessage({
                id: `settings.cloudEnvironments.delete.error`,
                defaultMessage: `Unable to delete cloud environment`,
                description: `Toast shown when cloud environment deletion fails`,
              }),
            );
          },
        });
      }),
      (t[34] = h),
      (t[35] = x.id),
      (t[36] = l),
      (t[37] = a),
      (t[38] = c),
      (t[39] = re))
    : (re = t[39]);
  let ie;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (e) => b(e ? `delete` : null)), (t[40] = ie))
    : (ie = t[40]);
  let ae;
  t[41] !== h.isPending || t[42] !== x.label || t[43] !== ne || t[44] !== re
    ? ((ae = (0, Q.jsx)(lt, {
        environmentName: x.label,
        isPending: h.isPending,
        open: ne,
        onConfirm: re,
        onOpenChange: ie,
      })),
      (t[41] = h.isPending),
      (t[42] = x.label),
      (t[43] = ne),
      (t[44] = re),
      (t[45] = ae))
    : (ae = t[45]);
  let oe = y === `reset-cache`,
    se;
  t[46] !== x.id || t[47] !== l || t[48] !== g || t[49] !== c
    ? ((se = () => {
        g.mutate(x.id, {
          onSuccess: () => {
            (b(null),
              c
                .get(ee)
                .success(
                  l.formatMessage({
                    id: `settings.cloudEnvironments.resetCache.success`,
                    defaultMessage: `Reset cloud environment cache`,
                    description: `Toast shown after resetting a cloud environment cache`,
                  }),
                ));
          },
          onError: () => {
            c.get(ee).danger(
              l.formatMessage({
                id: `settings.cloudEnvironments.resetCache.error`,
                defaultMessage: `Unable to reset cloud environment cache`,
                description: `Toast shown when resetting a cloud environment cache fails`,
              }),
            );
          },
        });
      }),
      (t[46] = x.id),
      (t[47] = l),
      (t[48] = g),
      (t[49] = c),
      (t[50] = se))
    : (se = t[50]);
  let L;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => b(e ? `reset-cache` : null)), (t[51] = L))
    : (L = t[51]);
  let ce;
  t[52] !== g.isPending || t[53] !== oe || t[54] !== se
    ? ((ce = (0, Q.jsx)(ut, { isPending: g.isPending, open: oe, onConfirm: se, onOpenChange: L })),
      (t[52] = g.isPending),
      (t[53] = oe),
      (t[54] = se),
      (t[55] = ce))
    : (ce = t[55]);
  let le;
  return (
    t[56] !== x.label ||
    t[57] !== ae ||
    t[58] !== ce ||
    t[59] !== N ||
    t[60] !== P ||
    t[61] !== F ||
    t[62] !== te
      ? ((le = (0, Q.jsxs)(Ue, {
          action: N,
          backSlot: P,
          subtitle: F,
          title: x.label,
          children: [te, ae, ce],
        })),
        (t[56] = x.label),
        (t[57] = ae),
        (t[58] = ce),
        (t[59] = N),
        (t[60] = P),
        (t[61] = F),
        (t[62] = te),
        (t[63] = le))
      : (le = t[63]),
    le
  );
}
function Un(e) {
  let t = (0, Gn.c)(19),
    { environmentId: n, onBack: r } = e,
    i = be(fn, n);
  if (i.isError) {
    let e = `${$}/${n}`,
      r;
    return (
      t[0] === e
        ? (r = t[1])
        : ((r = (0, Q.jsx)(le, { to: e, replace: !0 })), (t[0] = e), (t[1] = r)),
      r
    );
  }
  if (i.isPending) {
    let e;
    t[2] === r ? (e = t[3]) : ((e = (0, Q.jsx)(Wn, { onClick: r })), (t[2] = r), (t[3] = e));
    let n;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(u, {
          id: `settings.cloudEnvironments.edit.title`,
          defaultMessage: `Edit cloud environment`,
          description: `Title for editing a cloud environment`,
        })),
        (t[4] = n))
      : (n = t[4]);
    let i;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(U, {
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
            children: [
              (0, Q.jsx)(ue, { className: `icon-xs` }),
              (0, Q.jsx)(u, {
                id: `settings.cloudEnvironments.edit.loading`,
                defaultMessage: `Loading environment…`,
                description: `Loading state for the cloud environment editor`,
              }),
            ],
          }),
        })),
        (t[5] = i))
      : (i = t[5]);
    let a;
    return (
      t[6] === e
        ? (a = t[7])
        : ((a = (0, Q.jsx)(Ue, { backSlot: e, title: n, children: i })), (t[6] = e), (t[7] = a)),
      a
    );
  }
  if (i.data.permissions?.can_write !== !0) {
    let e = `${$}/${n}`,
      r;
    return (
      t[8] === e
        ? (r = t[9])
        : ((r = (0, Q.jsx)(le, { to: e, replace: !0 })), (t[8] = e), (t[9] = r)),
      r
    );
  }
  let a;
  t[10] === r ? (a = t[11]) : ((a = (0, Q.jsx)(Wn, { onClick: r })), (t[10] = r), (t[11] = a));
  let o;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(u, {
        id: `settings.cloudEnvironments.edit.title`,
        defaultMessage: `Edit cloud environment`,
        description: `Title for editing a cloud environment`,
      })),
      (t[12] = o))
    : (o = t[12]);
  let s;
  t[13] !== i.data || t[14] !== r
    ? ((s = (0, Q.jsx)(On, { environment: i.data, onCancel: r, onSaved: r }, i.data.id)),
      (t[13] = i.data),
      (t[14] = r),
      (t[15] = s))
    : (s = t[15]);
  let c;
  return (
    t[16] !== a || t[17] !== s
      ? ((c = (0, Q.jsx)(Ue, { backSlot: a, title: o, children: s })),
        (t[16] = a),
        (t[17] = s),
        (t[18] = c))
      : (c = t[18]),
    c
  );
}
function Wn(e) {
  let t = (0, Gn.c)(4),
    { onClick: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(oe, { className: `icon-xs` })),
      (i = (0, Q.jsx)(u, {
        id: `settings.cloudEnvironments.back`,
        defaultMessage: `Back`,
        description: `Button label to return from a cloud environment settings subpage`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Q.jsxs)(I, { color: `ghost`, size: `toolbar`, onClick: n, children: [r, i] })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var Gn, Kn, Q, $;
e(() => {
  ((Gn = b()),
    F(),
    (Kn = t(Ce(), 1)),
    f(),
    P(),
    c(),
    pe(),
    j(),
    Ne(),
    ie(),
    he(),
    te(),
    N(),
    De(),
    Be(),
    ke(),
    Me(),
    Ee(),
    m(),
    He(),
    ze(),
    We(),
    ct(),
    ft(),
    Nn(),
    zn(),
    xn(),
    (Q = L()),
    ($ = `/settings/cloud-environments`));
})();
export { Bn as CloudEnvironmentsSettingsPage };
//# sourceMappingURL=cloud-environments-settings-page.js.map
