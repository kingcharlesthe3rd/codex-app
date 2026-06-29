import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ht as n,
  Jc as r,
  Ol as i,
  Ut as a,
  Xc as o,
  Yc as s,
  _t as c,
  ac as l,
  dl as u,
  fl as d,
  gt as f,
  hl as p,
  kl as m,
  oc as h,
  sc as g,
  tc as _,
  xl as v,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Aa as y,
  Co as b,
  Gd as x,
  Go as S,
  Ho as C,
  Ia as w,
  Jp as T,
  Kd as E,
  Ma as D,
  Sp as O,
  Ud as k,
  Uo as A,
  Wo as j,
  Xp as ee,
  Yp as M,
  Zp as N,
  _o as te,
  fp as ne,
  gr as re,
  hr as ie,
  ja as ae,
  mp as oe,
  vn as P,
  xp as se,
  yn as ce,
  yo as F,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  Hn as le,
  Kl as ue,
  Mn as de,
  Nn as fe,
  Un as pe,
  Zl as me,
  aw as he,
  cC as ge,
  cw as I,
  fS as _e,
  iu as ve,
  iw as ye,
  oC as be,
  ou as xe,
  tw as Se,
  uS as L,
  uw as R,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import { gt as Ce, vt as we } from "./app-initial~app-main~automations-page.js";
import {
  h as z,
  p as Te,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings.js";
import {
  Dn as Ee,
  Dt as De,
  Et as Oe,
  On as ke,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~bsekxs5f.js";
import {
  an as Ae,
  in as je,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page.js";
import {
  At as B,
  Mt as Me,
  jt as V,
  kt as Ne,
} from "./app-initial~app-main~onboarding-page.js";
import {
  S as Pe,
  x as Fe,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
import {
  n as Ie,
  t as Le,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~plugin-detail-page~onboarding-pag~f3o4q9dk.js";
import {
  c as Re,
  s as ze,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3.js";
import {
  a as Be,
  i as Ve,
  t as He,
} from "./app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58.js";
import {
  n as Ue,
  t as H,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~grpw3pbw.js";
import {
  n as We,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~open-source-licenses-page~skil~dv11zlwm.js";
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
      u;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, W.jsx)(I, {
          id: `settings.cloudEnvironments.details.configured`,
          defaultMessage: `Configured`,
          description: `Label for a configured cloud environment setting`,
        })),
        (t[13] = u))
      : (u = t[13]);
    let d = u,
      f;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, W.jsx)(I, {
          id: `settings.cloudEnvironments.details.repository`,
          defaultMessage: `Repository`,
          description: `Label for the repository in cloud environment details`,
        })),
        (t[14] = f))
      : (f = t[14]);
    let p =
        a.length > 0
          ? a.join(`, `)
          : (0, W.jsx)(I, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            }),
      m;
    t[15] === p
      ? (m = t[16])
      : ((m = (0, W.jsx)(B, { label: f, valueAlignment: `end`, children: p })),
        (t[15] = p),
        (t[16] = m));
    let h;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, W.jsx)(I, {
          id: `settings.cloudEnvironments.details.machine`,
          defaultMessage: `Machine`,
          description: `Label for the machine in cloud environment details`,
        })),
        (t[17] = h))
      : (h = t[17]);
    let g;
    t[18] === n.machine.label
      ? (g = t[19])
      : ((g = (0, W.jsx)(B, { label: h, valueAlignment: `end`, children: n.machine.label })),
        (t[18] = n.machine.label),
        (t[19] = g));
    let _;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, W.jsx)(I, {
          id: `settings.cloudEnvironments.details.creator`,
          defaultMessage: `Created by`,
          description: `Label for the creator in cloud environment details`,
        })),
        (t[20] = _))
      : (_ = t[20]);
    let v = n.creator.name || n.creator.email,
      y;
    t[21] === v
      ? (y = t[22])
      : ((y = (0, W.jsx)(B, { label: _, valueAlignment: `end`, children: v })),
        (t[21] = v),
        (t[22] = y));
    let b;
    t[23] === n.created_at
      ? (b = t[24])
      : ((b =
          n.created_at == null
            ? null
            : (0, W.jsx)(B, {
                label: (0, W.jsx)(I, {
                  id: `settings.cloudEnvironments.details.created`,
                  defaultMessage: `Created`,
                  description: `Label for the creation date in cloud environment details`,
                }),
                valueAlignment: `end`,
                children: (0, W.jsx)(Se, {
                  day: `numeric`,
                  month: `short`,
                  value: n.created_at * 1e3,
                  year: `numeric`,
                }),
              })),
        (t[23] = n.created_at),
        (t[24] = b));
    let x;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (0, W.jsx)(I, {
          id: `settings.cloudEnvironments.details.network`,
          defaultMessage: `Network access`,
          description: `Label for network access in cloud environment details`,
        })),
        (t[25] = x))
      : (x = t[25]);
    let S = n.agent_network_access?.mode,
      C;
    t[26] === S ? (C = t[27]) : ((C = it(S)), (t[26] = S), (t[27] = C));
    let w;
    t[28] === C
      ? (w = t[29])
      : ((w = (0, W.jsx)(B, { label: x, valueAlignment: `end`, children: C })),
        (t[28] = C),
        (t[29] = w));
    let T;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, W.jsx)(I, {
          id: `settings.cloudEnvironments.details.sharing`,
          defaultMessage: `Sharing`,
          description: `Label for cloud environment sharing`,
        })),
        (t[30] = T))
      : (T = t[30]);
    let E;
    t[31] === n.share_settings
      ? (E = t[32])
      : ((E = at(n.share_settings)), (t[31] = n.share_settings), (t[32] = E));
    let D;
    t[33] === E
      ? (D = t[34])
      : ((D = (0, W.jsx)(B, { label: T, valueAlignment: `end`, children: E })),
        (t[33] = E),
        (t[34] = D));
    let O;
    (t[35] !== g || t[36] !== y || t[37] !== b || t[38] !== w || t[39] !== D || t[40] !== m
      ? ((O = (0, W.jsx)(U, {
          children: (0, W.jsx)(U.Content, {
            children: (0, W.jsxs)(H, { children: [m, g, y, b, w, D] }),
          }),
        })),
        (t[35] = g),
        (t[36] = y),
        (t[37] = b),
        (t[38] = w),
        (t[39] = D),
        (t[40] = m),
        (t[41] = O))
      : (O = t[41]),
      (l = (0, W.jsxs)(W.Fragment, {
        children: [
          O,
          s
            ? (0, W.jsxs)(U, {
                children: [
                  (0, W.jsx)(U.Header, {
                    title: (0, W.jsx)(I, {
                      id: `settings.cloudEnvironments.details.configuration`,
                      defaultMessage: `Configuration`,
                      description: `Heading for cloud environment configuration details`,
                    }),
                  }),
                  (0, W.jsx)(U.Content, {
                    children: (0, W.jsxs)(H, {
                      children: [
                        i
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(I, {
                                id: `settings.cloudEnvironments.details.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for the setup script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: d,
                            })
                          : null,
                        o
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(I, {
                                id: `settings.cloudEnvironments.details.maintenance`,
                                defaultMessage: `Maintenance script`,
                                description: `Label for the maintenance script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: d,
                            })
                          : null,
                        c.length > 0
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(I, {
                                id: `settings.cloudEnvironments.details.environmentVariables`,
                                defaultMessage: `Environment variables`,
                                description: `Label for environment variables in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: c.join(`, `),
                            })
                          : null,
                        e.length > 0
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(I, {
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
      return (0, W.jsx)(I, {
        id: `settings.cloudEnvironments.network.custom`,
        defaultMessage: `Custom`,
        description: `Label for custom cloud environment network access`,
      });
    case `on`:
      return (0, W.jsx)(I, {
        id: `settings.cloudEnvironments.network.on`,
        defaultMessage: `On`,
        description: `Label for enabled cloud environment network access`,
      });
    case `off`:
    case void 0:
      return (0, W.jsx)(I, {
        id: `settings.cloudEnvironments.network.off`,
        defaultMessage: `Off`,
        description: `Label for disabled cloud environment network access`,
      });
  }
}
function at(e) {
  switch (e) {
    case `private`:
      return (0, W.jsx)(I, {
        id: `settings.cloudEnvironments.sharing.private`,
        defaultMessage: `Private`,
        description: `Label for a private cloud environment`,
      });
    case `public`:
      return (0, W.jsx)(I, {
        id: `settings.cloudEnvironments.sharing.public`,
        defaultMessage: `Public`,
        description: `Label for a public cloud environment`,
      });
    case `workspace`:
      return (0, W.jsx)(I, {
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
    ((st = i()), he(), We(), Me(), Ue(), (W = v()));
  });
function lt(e) {
  let t = (0, dt.c)(27),
    { environmentName: n, isPending: r, open: i, onConfirm: a, onOpenChange: o } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, G.jsx)(j, {
        children: (0, G.jsx)(I, {
          id: `settings.cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Title for the cloud environment deletion confirmation`,
          values: { environmentName: n },
        }),
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, G.jsx)(A, {
        className: `contents`,
        children: (0, G.jsx)(I, {
          id: `settings.cloudEnvironments.delete.description`,
          defaultMessage: `Existing tasks will remain, but you will not be able to create follow-ups with this environment`,
          description: `Description for the cloud environment deletion confirmation`,
        }),
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === c
    ? (u = t[6])
    : ((u = (0, G.jsx)(D, { title: c, subtitle: l })), (t[5] = c), (t[6] = u));
  let d;
  t[7] === o ? (d = t[8]) : ((d = () => o(!1)), (t[7] = o), (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(I, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== r || t[11] !== d
    ? ((p = (0, G.jsx)(T, {
        color: `secondary`,
        disabled: r,
        onClick: d,
        type: `button`,
        children: f,
      })),
      (t[10] = r),
      (t[11] = d),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, G.jsx)(I, {
        id: `settings.cloudEnvironments.delete.confirm`,
        defaultMessage: `Delete environment`,
        description: `Button label for confirming cloud environment deletion`,
      })),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === r
    ? (h = t[15])
    : ((h = (0, G.jsx)(T, { color: `danger`, loading: r, type: `submit`, children: m })),
      (t[14] = r),
      (t[15] = h));
  let g;
  t[16] !== p || t[17] !== h
    ? ((g = (0, G.jsxs)(ae, { children: [p, h] })), (t[16] = p), (t[17] = h), (t[18] = g))
    : (g = t[18]);
  let _;
  t[19] !== s || t[20] !== g || t[21] !== u
    ? ((_ = (0, G.jsxs)(y, { as: `form`, onSubmit: s, children: [u, g] })),
      (t[19] = s),
      (t[20] = g),
      (t[21] = u),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  return (
    t[23] !== o || t[24] !== i || t[25] !== _
      ? ((v = (0, G.jsx)(C, { open: i, onOpenChange: o, children: _ })),
        (t[23] = o),
        (t[24] = i),
        (t[25] = _),
        (t[26] = v))
      : (v = t[26]),
    v
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
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, G.jsx)(j, {
        children: (0, G.jsx)(I, {
          id: `settings.cloudEnvironments.resetCache.title`,
          defaultMessage: `Reset cached containers?`,
          description: `Title for the cloud environment cache reset confirmation`,
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, G.jsx)(D, {
        title: s,
        subtitle: (0, G.jsx)(A, {
          className: `contents`,
          children: (0, G.jsx)(I, {
            id: `settings.cloudEnvironments.resetCache.description`,
            defaultMessage: `This invalidates all cached containers for this environment and all users`,
            description: `Description for the cloud environment cache reset confirmation`,
          }),
        }),
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === a ? (l = t[5]) : ((l = () => a(!1)), (t[4] = a), (t[5] = l));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, G.jsx)(I, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== n || t[8] !== l
    ? ((d = (0, G.jsx)(T, {
        color: `secondary`,
        disabled: n,
        onClick: l,
        type: `button`,
        children: u,
      })),
      (t[7] = n),
      (t[8] = l),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(I, {
        id: `settings.cloudEnvironments.resetCache.confirm`,
        defaultMessage: `Reset cache`,
        description: `Button label for confirming a cloud environment cache reset`,
      })),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === n
    ? (p = t[12])
    : ((p = (0, G.jsx)(T, { color: `primary`, loading: n, type: `submit`, children: f })),
      (t[11] = n),
      (t[12] = p));
  let m;
  t[13] !== d || t[14] !== p
    ? ((m = (0, G.jsxs)(ae, { children: [d, p] })), (t[13] = d), (t[14] = p), (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== o || t[17] !== m
    ? ((h = (0, G.jsxs)(y, { as: `form`, onSubmit: o, children: [c, m] })),
      (t[16] = o),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== a || t[20] !== r || t[21] !== h
      ? ((g = (0, G.jsx)(C, { open: r, onOpenChange: a, children: h })),
        (t[19] = a),
        (t[20] = r),
        (t[21] = h),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
var dt,
  G,
  ft = e(() => {
    ((dt = i()), he(), M(), S(), w(), (G = v()));
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
    ((mt = i()), (ht = v()));
  });
function _t(e) {
  let t = (0, wt.c)(16),
    { form: n, isPending: r } = e,
    i = R(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, q.jsx)(U.Header, {
        title: (0, q.jsx)(I, {
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
        (0, q.jsx)(V, {
          label: (0, q.jsx)(I, {
            id: `settings.cloudEnvironments.editor.setup`,
            defaultMessage: `Setup script`,
            description: `Label for a cloud environment setup script`,
          }),
          description: (0, q.jsx)(I, {
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
        (0, q.jsx)(V, {
          label: (0, q.jsx)(I, {
            id: `settings.cloudEnvironments.editor.maintenance`,
            defaultMessage: `Maintenance script`,
            description: `Label for a cloud environment maintenance script`,
          }),
          description: (0, q.jsx)(I, {
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
  let u;
  return (
    t[13] !== s || t[14] !== l
      ? ((u = (0, q.jsxs)(U, {
          children: [a, (0, q.jsx)(U.Content, { children: (0, q.jsxs)(H, { children: [s, l] }) })],
        })),
        (t[13] = s),
        (t[14] = l),
        (t[15] = u))
      : (u = t[15]),
    u
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
        return (0, q.jsxs)(U, {
          children: [
            (0, q.jsx)(U.Header, {
              title: (0, q.jsx)(I, {
                id: `settings.cloudEnvironments.editor.network`,
                defaultMessage: `Network access`,
                description: `Heading for cloud environment network access`,
              }),
            }),
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(H, {
                children: [
                  (0, q.jsx)(V, {
                    label: (0, q.jsx)(I, {
                      id: `settings.cloudEnvironments.editor.network.mode`,
                      defaultMessage: `Access`,
                      description: `Label for the cloud environment network access mode`,
                    }),
                    description: (0, q.jsx)(I, {
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
                          label: (0, q.jsx)(I, {
                            id: `settings.cloudEnvironments.network.off`,
                            defaultMessage: `Off`,
                            description: `Label for disabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `custom`,
                          label: (0, q.jsx)(I, {
                            id: `settings.cloudEnvironments.network.custom`,
                            defaultMessage: `Custom`,
                            description: `Label for custom cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `on`,
                          label: (0, q.jsx)(I, {
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
                          (0, q.jsx)(V, {
                            label: (0, q.jsx)(I, {
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
                          (0, q.jsx)(V, {
                            label: (0, q.jsx)(I, {
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
        (0, q.jsxs)(U, {
          children: [
            (0, q.jsx)(U.Header, {
              title: (0, q.jsx)(I, {
                id: `settings.cloudEnvironments.editor.runtime`,
                defaultMessage: `Runtime`,
                description: `Heading for cloud environment runtime settings`,
              }),
            }),
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(H, {
                children: [
                  (0, q.jsx)(V, {
                    label: (0, q.jsx)(I, {
                      id: `settings.cloudEnvironments.editor.runtime.autoSetup`,
                      defaultMessage: `Automatic setup`,
                      description: `Label for automatic cloud environment setup`,
                    }),
                    control: (0, q.jsx)(P, {
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
                  (0, q.jsx)(V, {
                    label: (0, q.jsx)(I, {
                      id: `settings.cloudEnvironments.editor.runtime.cache`,
                      defaultMessage: `Post-setup cache`,
                      description: `Label for cloud environment post-setup caching`,
                    }),
                    description: (0, q.jsx)(I, {
                      id: `settings.cloudEnvironments.editor.runtime.cache.description`,
                      defaultMessage: `Speeds up task startup by saving the container after setup`,
                      description: `Explanation for cloud environment post-setup caching`,
                    }),
                    control: (0, q.jsx)(P, {
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
                    ? (0, q.jsx)(V, {
                        label: (0, q.jsx)(I, {
                          id: `settings.cloudEnvironments.editor.runtime.authtranslator`,
                          defaultMessage: `Authentication translation`,
                          description: `Label for cloud environment authentication translation`,
                        }),
                        control: (0, q.jsx)(P, {
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
                    ? (0, q.jsx)(V, {
                        label: (0, q.jsx)(I, {
                          id: `settings.cloudEnvironments.editor.runtime.dockerInDocker`,
                          defaultMessage: `Docker in Docker`,
                          description: `Label for Docker in Docker support in a cloud environment`,
                        }),
                        control: (0, q.jsx)(P, {
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
        (0, q.jsxs)(U, {
          children: [
            (0, q.jsx)(U.Header, {
              title: (0, q.jsx)(I, {
                id: `settings.cloudEnvironments.editor.sharing`,
                defaultMessage: `Sharing`,
                description: `Heading for cloud environment sharing settings`,
              }),
            }),
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(H, {
                children: [
                  (0, q.jsx)(V, {
                    label: (0, q.jsx)(I, {
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
                          label: (0, q.jsx)(I, {
                            id: `settings.cloudEnvironments.sharing.private`,
                            defaultMessage: `Private`,
                            description: `Label for a private cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `workspace`,
                          label: (0, q.jsx)(I, {
                            id: `settings.cloudEnvironments.sharing.workspace`,
                            defaultMessage: `Workspace`,
                            description: `Label for a workspace cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `public`,
                          label: (0, q.jsx)(I, {
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
                  (0, q.jsx)(V, {
                    label: (0, q.jsx)(I, {
                      id: `settings.cloudEnvironments.editor.sharing.editors`,
                      defaultMessage: `Additional editors`,
                      description: `Label for additional cloud environment editors`,
                    }),
                    control: (0, q.jsx)(T, {
                      color: `secondary`,
                      disabled: r || e.shareSettings === `private`,
                      onClick: () => n.setFieldValue(`shareTargets`, [...e.shareTargets, ``]),
                      size: `toolbar`,
                      type: `button`,
                      children: (0, q.jsx)(I, {
                        id: `settings.cloudEnvironments.editor.sharing.addEditor`,
                        defaultMessage: `Add editor`,
                        description: `Button label for adding a cloud environment editor`,
                      }),
                    }),
                  }),
                  e.shareTargets.map((t, a) =>
                    (0, q.jsx)(
                      V,
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
                            (0, q.jsx)(T, {
                              color: `secondary`,
                              disabled: r || e.shareSettings === `private`,
                              onClick: () =>
                                n.setFieldValue(
                                  `shareTargets`,
                                  e.shareTargets.filter((e, t) => t !== a),
                                ),
                              size: `toolbar`,
                              type: `button`,
                              children: (0, q.jsx)(I, {
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
    ((wt = i()), he(), M(), Ye(), ce(), We(), Me(), Ue(), gt(), (q = v()));
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
    ? ((i = (0, J.jsx)(U.Header, {
        title: (0, J.jsx)(I, {
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
                ? (0, J.jsx)(I, {
                    id: `settings.cloudEnvironments.editor.variables.invalid`,
                    defaultMessage: `Variable names and values are required, and names must be unique`,
                    description: `Validation message for invalid cloud environment variables`,
                  })
                : void 0,
              isPending: r,
              label: (0, J.jsx)(I, {
                id: `settings.cloudEnvironments.editor.environmentVariables`,
                defaultMessage: `Environment variables`,
                description: `Label for cloud environment variables`,
              }),
              onChange: (e) => n.setFieldValue(`environmentVariables`, e),
            }),
            (0, J.jsx)(Gt, {
              entries: e.secrets,
              error: t.secrets
                ? (0, J.jsx)(I, {
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
      ? ((o = (0, J.jsxs)(U, {
          children: [
            i,
            (0, J.jsx)(U.Content, {
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
    ? ((l = (0, J.jsx)(I, {
        id: `settings.cloudEnvironments.editor.addVariable`,
        defaultMessage: `Add variable`,
        description: `Button label for adding a cloud environment variable`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== i || t[5] !== c
    ? ((u = (0, J.jsx)(T, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: l,
      })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== r || t[8] !== a || t[9] !== u
    ? ((d = (0, J.jsx)(V, { description: r, label: a, control: u })),
      (t[7] = r),
      (t[8] = a),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== n || t[12] !== s || t[13] !== i || t[14] !== o
    ? ((f = n.map((e, t) =>
        (0, J.jsx)(
          V,
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
                (0, J.jsx)(T, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => o(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(I, {
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
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== d || t[17] !== f
      ? ((p = (0, J.jsxs)(H, { children: [d, f] })), (t[16] = d), (t[17] = f), (t[18] = p))
      : (p = t[18]),
    p
  );
}
function Gt(e) {
  let t = (0, Kt.c)(19),
    { entries: n, error: r, isPending: i, onChange: a } = e,
    o = R(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(I, {
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
    ? ((l = (0, J.jsx)(I, {
        id: `settings.cloudEnvironments.editor.addSecret`,
        defaultMessage: `Add secret`,
        description: `Button label for adding a cloud environment secret`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== i || t[6] !== c
    ? ((u = (0, J.jsx)(T, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: l,
      })),
      (t[5] = i),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== r || t[9] !== u
    ? ((d = (0, J.jsx)(V, { description: r, label: s, control: u })),
      (t[8] = r),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== n || t[12] !== o || t[13] !== i || t[14] !== a
    ? ((f = n.map((e, t) =>
        (0, J.jsx)(
          V,
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
                (0, J.jsx)(T, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => a(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(I, {
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
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== d || t[17] !== f
      ? ((p = (0, J.jsxs)(H, { children: [d, f] })), (t[16] = d), (t[17] = f), (t[18] = p))
      : (p = t[18]),
    p
  );
}
var Kt,
  J,
  qt = e(() => {
    ((Kt = i()), he(), M(), We(), Me(), Ue(), Vt(), gt(), (J = v()));
  });
function Jt(e, t, n) {
  return L.safeGet(`/wham/environments/search`, {
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
  return L.safeGet(`/wham/environments/{environment_id}/with-creator-and-machine`, {
    parameters: { path: { environment_id: e } },
  });
}
function Zt() {
  return L.safeGet(`/wham/machines`);
}
async function Qt() {
  let { connectors: e } = await L.safeGet(`/aip/connectors/product_specific`, {
      parameters: { query: { purpose: `hermes` } },
      additionalHeaders: cn,
    }),
    t = e
      .filter((e) => e.status !== `DISABLED_BY_ADMIN` && (e.id === on || e.template_id === sn))
      .sort((e, t) => (e.id === on ? -1 : t.id === on ? 1 : e.name.localeCompare(t.name))),
    n = await Promise.all(
      t.map((e) =>
        L.safeGet(`/aip/connectors/{connector_id}/link`, {
          parameters: { path: { connector_id: e.id } },
          additionalHeaders: cn,
        }),
      ),
    );
  return t.filter((e, t) => n[t].link != null);
}
function $t(e, t) {
  return L.safeGet(`/wham/github/repositories/search/all-installations`, {
    parameters: { query: { query: e, limit: 20, connector_id: t } },
  });
}
function en(e) {
  return L.safePost(`/wham/environments`, { requestBody: e });
}
function tn({ environmentId: e, requestBody: t }) {
  return L.safePatch(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
    requestBody: t,
  });
}
function nn(e) {
  return L.safeDelete(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
  });
}
function rn(e) {
  return L.safePost(`/wham/environments/{environment_id}/reset-cache`, {
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
    (_e(),
      (on = `connector_76869538009648d5b282a4bb21c3d157`),
      (sn = `templated_apps_GitHubEnterprise`),
      (cn = { "OAI-Product-Sku": `CODEX` }));
  });
function un(e) {
  return p({
    queryKey: [`cloud-environments`, `search`, e],
    queryFn: ({ pageParam: t }) => Jt(e, t, t == null ? 25 : 100),
    initialPageParam: null,
    getNextPageParam: (e) => e.cursor ?? null,
    refetchOnMount: !0,
    retry: !1,
    staleTime: f.FIVE_MINUTES,
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
    (u(),
      _(),
      a(),
      c(),
      ln(),
      (fn = s(n, (e) => ({
        queryKey: [`cloud-environments`, `details`, e],
        queryFn: () => Xt(e),
        refetchOnMount: !0,
        staleTime: f.FIVE_MINUTES,
      }))),
      (pn = o(n, () => ({
        queryKey: [`cloud-environments`, `machines`],
        queryFn: Zt,
        refetchOnMount: !0,
        retry: !1,
        staleTime: f.FIVE_MINUTES,
      }))),
      (mn = o(n, () => ({
        queryKey: [`cloud-environments`, `github-connectors`],
        queryFn: Qt,
        refetchOnMount: !0,
        retry: !1,
        staleTime: f.FIVE_MINUTES,
      }))),
      (hn = s(n, ({ connectorId: e, query: t }) => ({
        queryKey: [`cloud-environments`, `repositories`, e, t],
        enabled: t !== `` && e != null,
        queryFn: () => {
          if (e == null) throw Error(`A connector ID is required to search repositories`);
          return $t(t, e);
        },
        refetchOnMount: !0,
        retry: !1,
        staleTime: f.FIVE_MINUTES,
      }))),
      (gn = r(n, ({ scope: e }) => ({ mutationFn: en, onSuccess: () => dn(e) }))),
      (_n = r(n, ({ scope: e }) => ({
        mutationFn: (e) => tn(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([dn(e), e.query.invalidate(fn, n, { exact: !0 })]);
        },
      }))),
      (vn = r(n, ({ scope: e }) => ({
        mutationFn: nn,
        onSuccess: async (t, n) => {
          (e.queryClient.removeQueries({ queryKey: e.query.getOptions(fn, n).queryKey }),
            await dn(e));
        },
      }))),
      (yn = r(n, ({ scope: e }) => ({
        mutationFn: (e) => rn(e),
        onSuccess: (t, n) => e.query.invalidate(fn, n, { exact: !0 }),
      }))),
      (bn = r(n, ({ scope: e }) => ({
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
    [o, s] = (0, Tn.useState)(``),
    c;
  t[0] === o ? (c = t[1]) : ((c = o.trim()), (t[0] = o), (t[1] = c));
  let u = fe(c, 200),
    [d, f] = (0, Tn.useState)(null),
    p = g(mn),
    m;
  t[2] !== p.data || t[3] !== i || t[4] !== d
    ? ((m = p.data?.find((e) => e.id === (d ?? i))?.id ?? p.data?.[0]?.id ?? null),
      (t[2] = p.data),
      (t[3] = i),
      (t[4] = d),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    _;
  t[6] !== h || t[7] !== u
    ? ((_ = { connectorId: h, query: u }), (t[6] = h), (t[7] = u), (t[8] = _))
    : (_ = t[8]);
  let v = l(hn, _),
    y;
  t[9] === o ? (y = t[10]) : ((y = o.trim()), (t[9] = o), (t[10] = y));
  let b = u !== y,
    x;
  t[11] !== h ||
  t[12] !== p ||
  t[13] !== u ||
  t[14] !== n ||
  t[15] !== a ||
  t[16] !== b ||
  t[17] !== r ||
  t[18] !== o ||
  t[19] !== v
    ? ((x = (e) => {
        let { repositoryId: t, repositoryName: i } = e;
        return (0, Y.jsxs)(te, {
          contentMaxHeight: `list`,
          contentWidth: `menu`,
          disabled: r || p.isPending,
          triggerButton: (0, Y.jsx)(He, {
            disabled: r || p.isPending,
            children:
              t === ``
                ? (0, Y.jsx)(I, {
                    id: `settings.cloudEnvironments.editor.repository.select`,
                    defaultMessage: `Select a repository`,
                    description: `Placeholder for the cloud environment repository selector`,
                  })
                : i,
          }),
          children: [
            p.isError
              ? (0, Y.jsx)(F.Item, {
                  onSelect: () => void p.refetch(),
                  children: (0, Y.jsx)(I, {
                    id: `settings.cloudEnvironments.editor.connector.retry`,
                    defaultMessage: `Retry loading GitHub connections`,
                    description: `Button label for retrying GitHub connections in the cloud environment repository selector`,
                  }),
                })
              : p.data?.length === 0
                ? (0, Y.jsx)(F.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(I, {
                      id: `settings.cloudEnvironments.editor.connector.empty`,
                      defaultMessage: `No GitHub connections available`,
                      description: `Empty state when no GitHub connection can be used for a cloud environment`,
                    }),
                  })
                : p.data != null && p.data.length > 1
                  ? (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsxs)(F.Section, {
                          children: [
                            (0, Y.jsx)(F.SectionLabel, {
                              children: (0, Y.jsx)(I, {
                                id: `settings.cloudEnvironments.editor.connector`,
                                defaultMessage: `GitHub connection`,
                                description: `Label for choosing a GitHub connection when creating a cloud environment`,
                              }),
                            }),
                            p.data.map((e) =>
                              (0, Y.jsx)(
                                F.Item,
                                {
                                  RightIcon: e.id === h ? se : void 0,
                                  onSelect: () => {
                                    (f(e.id),
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
                        (0, Y.jsx)(F.Separator, {}),
                      ],
                    })
                  : null,
            h == null
              ? null
              : (0, Y.jsxs)(Y.Fragment, {
                  children: [
                    (0, Y.jsx)(F.SearchInput, {
                      "aria-label": a.formatMessage(En.repositorySearch),
                      autoFocus: !0,
                      placeholder: a.formatMessage(En.repositorySearch),
                      trailingContent:
                        v.isFetching || b ? (0, Y.jsx)(ee, { className: `icon-2xs` }) : void 0,
                      value: o,
                      onChange: (e) => s(e.currentTarget.value),
                    }),
                    b
                      ? null
                      : u === ``
                        ? (0, Y.jsx)(F.Message, {
                            centered: !0,
                            children: (0, Y.jsx)(I, {
                              id: `settings.cloudEnvironments.editor.repository.searchPrompt`,
                              defaultMessage: `Search by repository name`,
                              description: `Prompt shown before searching for a cloud environment repository`,
                            }),
                          })
                        : v.isError
                          ? (0, Y.jsx)(F.Message, {
                              centered: !0,
                              children: (0, Y.jsx)(I, {
                                id: `settings.cloudEnvironments.editor.repository.error`,
                                defaultMessage: `Unable to load repositories`,
                                description: `Error shown when repository search fails`,
                              }),
                            })
                          : v.data?.repositories.length === 0
                            ? (0, Y.jsx)(F.Message, {
                                centered: !0,
                                children: (0, Y.jsx)(I, {
                                  id: `settings.cloudEnvironments.editor.repository.empty`,
                                  defaultMessage: `No repositories found`,
                                  description: `Empty state for cloud environment repository search`,
                                }),
                              })
                            : v.data?.repositories.map((e) =>
                                (0, Y.jsx)(
                                  F.Item,
                                  {
                                    onSelect: () => {
                                      (n.setFieldValue(`repositoryId`, e.id),
                                        n.setFieldValue(`repositoryName`, e.repository_full_name),
                                        n.setFieldValue(`githubConnectorId`, At(e.id) ?? h));
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
      (t[11] = h),
      (t[12] = p),
      (t[13] = u),
      (t[14] = n),
      (t[15] = a),
      (t[16] = b),
      (t[17] = r),
      (t[18] = o),
      (t[19] = v),
      (t[20] = x))
    : (x = t[20]);
  let S;
  return (
    t[21] !== n.Subscribe || t[22] !== x
      ? ((S = (0, Y.jsx)(n.Subscribe, { selector: Cn, children: x })),
        (t[21] = n.Subscribe),
        (t[22] = x),
        (t[23] = S))
      : (S = t[23]),
    S
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
    ((wn = i()),
      _(),
      (Tn = t(m(), 1)),
      he(),
      b(),
      N(),
      O(),
      Be(),
      de(),
      Vt(),
      xn(),
      (Y = v()),
      (En = ye({
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
    { environment: r, onCancel: i, onSaved: a, preferredConnectorId: o } = e,
    s = h(n),
    c = R(),
    { planAtLogin: l } = pe(),
    u = g(pn),
    d = g(gn),
    f = g(_n),
    p = ge(`479474474`),
    m = ge(`2664309699`),
    _;
  t[0] === l ? (_ = t[1]) : ((_ = E(l) || x(l)), (t[0] = l), (t[1] = _));
  let v = _,
    y = r ?? void 0,
    b;
  t[2] !== o || t[3] !== y ? ((b = Et(y, o)), (t[2] = o), (t[3] = y), (t[4] = b)) : (b = t[4]);
  let S;
  t[5] !== d ||
  t[6] !== r ||
  t[7] !== c ||
  t[8] !== u.data ||
  t[9] !== a ||
  t[10] !== s ||
  t[11] !== f
    ? ((S = (e) => {
        let { value: t } = e;
        if (Ot(t, u.data?.some((e) => e.id === t.machineId) === !0, r?.machine_id)) {
          if (r == null) {
            d.mutate(kt(t), {
              onSuccess: (e) => {
                (s
                  .get(z)
                  .success(
                    c.formatMessage({
                      id: `settings.cloudEnvironments.create.success`,
                      defaultMessage: `Created cloud environment`,
                      description: `Toast shown after creating a cloud environment`,
                    }),
                  ),
                  a(e.id));
              },
              onError: () => {
                s.get(z).danger(
                  c.formatMessage({
                    id: `settings.cloudEnvironments.create.error`,
                    defaultMessage: `Unable to create cloud environment`,
                    description: `Toast shown when creating a cloud environment fails`,
                  }),
                );
              },
            });
            return;
          }
          f.mutate(
            { environmentId: r.id, requestBody: jt(t, r) },
            {
              onSuccess: () => {
                (s
                  .get(z)
                  .success(
                    c.formatMessage({
                      id: `settings.cloudEnvironments.update.success`,
                      defaultMessage: `Updated cloud environment`,
                      description: `Toast shown after updating a cloud environment`,
                    }),
                  ),
                  a(r.id));
              },
              onError: () => {
                s.get(z).danger(
                  c.formatMessage({
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
      (t[5] = d),
      (t[6] = r),
      (t[7] = c),
      (t[8] = u.data),
      (t[9] = a),
      (t[10] = s),
      (t[11] = f),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== b || t[14] !== S
    ? ((C = { defaultValues: b, onSubmit: S }), (t[13] = b), (t[14] = S), (t[15] = C))
    : (C = t[15]);
  let w = $e(C),
    D = d.isPending || f.isPending,
    O;
  t[16] === w
    ? (O = t[17])
    : ((O = (e) => {
        (e.preventDefault(), w.handleSubmit());
      }),
      (t[16] = w),
      (t[17] = O));
  let k;
  t[18] !== r ||
  t[19] !== w ||
  t[20] !== c ||
  t[21] !== D ||
  t[22] !== u ||
  t[23] !== i ||
  t[24] !== o ||
  t[25] !== p ||
  t[26] !== m ||
  t[27] !== v
    ? ((k = (e) => {
        let t = Dt(e),
          n = u.data?.find((t) => t.id === e.machineId),
          a = r?.machine_id === e.machineId ? r.machine : void 0;
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(U, {
              children: (0, X.jsx)(U.Content, {
                children: (0, X.jsxs)(H, {
                  children: [
                    (0, X.jsx)(w.Field, {
                      name: `label`,
                      children: (e) =>
                        (0, X.jsx)(V, {
                          label: (0, X.jsx)(I, {
                            id: `settings.cloudEnvironments.editor.name`,
                            defaultMessage: `Name`,
                            description: `Label for a cloud environment name`,
                          }),
                          description: t.label
                            ? (0, X.jsx)(I, {
                                id: `settings.cloudEnvironments.editor.name.required`,
                                defaultMessage: `Name is required`,
                                description: `Validation message for a missing cloud environment name`,
                              })
                            : void 0,
                          control: (0, X.jsx)(K, {
                            "aria-label": c.formatMessage({
                              id: `settings.cloudEnvironments.editor.name.aria`,
                              defaultMessage: `Environment name`,
                              description: `Accessible label for a cloud environment name input`,
                            }),
                            disabled: D,
                            maxLength: 64,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                    (0, X.jsx)(w.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, X.jsx)(V, {
                          label: (0, X.jsx)(I, {
                            id: `settings.cloudEnvironments.editor.description`,
                            defaultMessage: `Description`,
                            description: `Label for a cloud environment description`,
                          }),
                          control: (0, X.jsx)(K, {
                            "aria-label": c.formatMessage({
                              id: `settings.cloudEnvironments.editor.description.aria`,
                              defaultMessage: `Environment description`,
                              description: `Accessible label for a cloud environment description input`,
                            }),
                            disabled: D,
                            maxLength: 512,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                    (0, X.jsx)(V, {
                      label: (0, X.jsx)(I, {
                        id: `settings.cloudEnvironments.editor.repository`,
                        defaultMessage: `Repository`,
                        description: `Label for a cloud environment repository`,
                      }),
                      description: t.repositoryId
                        ? (0, X.jsx)(I, {
                            id: `settings.cloudEnvironments.editor.repository.required`,
                            defaultMessage: `Repository is required`,
                            description: `Validation message for a missing cloud environment repository`,
                          })
                        : void 0,
                      control:
                        r == null
                          ? (0, X.jsx)(Sn, { form: w, isPending: D, preferredConnectorId: o })
                          : (0, X.jsx)(K, {
                              "aria-label": c.formatMessage({
                                id: `settings.cloudEnvironments.editor.repository.aria`,
                                defaultMessage: `Repository`,
                                description: `Accessible label for a cloud environment repository input`,
                              }),
                              disabled: !0,
                              value: e.repositoryName,
                            }),
                    }),
                    (0, X.jsx)(w.Field, {
                      name: `machineId`,
                      children: (e) =>
                        (0, X.jsx)(V, {
                          label: (0, X.jsx)(I, {
                            id: `settings.cloudEnvironments.editor.machine`,
                            defaultMessage: `Machine`,
                            description: `Label for a cloud environment machine`,
                          }),
                          description: u.isError
                            ? (0, X.jsx)(I, {
                                id: `settings.cloudEnvironments.editor.machine.error`,
                                defaultMessage: `Unable to load machines`,
                                description: `Error shown when cloud environment machines cannot be loaded`,
                              })
                            : t.machineId
                              ? (0, X.jsx)(I, {
                                  id: `settings.cloudEnvironments.editor.machine.required`,
                                  defaultMessage: `Machine is required`,
                                  description: `Validation message for a missing cloud environment machine`,
                                })
                              : void 0,
                          control: u.isError
                            ? (0, X.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  a == null
                                    ? null
                                    : (0, X.jsx)(He, { disabled: !0, children: a.label }),
                                  (0, X.jsx)(T, {
                                    color: `secondary`,
                                    onClick: () => void u.refetch(),
                                    size: `toolbar`,
                                    type: `button`,
                                    children: (0, X.jsx)(I, {
                                      id: `settings.cloudEnvironments.editor.machine.retry`,
                                      defaultMessage: `Retry`,
                                      description: `Button label for retrying cloud environment machine loading`,
                                    }),
                                  }),
                                ],
                              })
                            : (0, X.jsx)(te, {
                                triggerButton: (0, X.jsx)(He, {
                                  disabled: u.isPending || D,
                                  children:
                                    n?.label ??
                                    a?.label ??
                                    (0, X.jsx)(I, {
                                      id: `settings.cloudEnvironments.editor.machine.select`,
                                      defaultMessage: `Select a machine`,
                                      description: `Placeholder for a cloud environment machine selector`,
                                    }),
                                }),
                                children: u.data?.map((t) =>
                                  (0, X.jsx)(
                                    F.Item,
                                    { onSelect: () => e.handleChange(t.id), children: t.label },
                                    t.id,
                                  ),
                                ),
                              }),
                        }),
                    }),
                    (0, X.jsx)(w.Field, {
                      name: `workspaceDirectory`,
                      children: (e) =>
                        (0, X.jsx)(V, {
                          label: (0, X.jsx)(I, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory`,
                            defaultMessage: `Workspace directory`,
                            description: `Label for a cloud environment workspace directory`,
                          }),
                          description: (0, X.jsx)(I, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory.description`,
                            defaultMessage: `Directory where the repository is cloned; change this only when setup requires an absolute path`,
                            description: `Explanation for the cloud environment workspace directory`,
                          }),
                          control: (0, X.jsx)(K, {
                            "aria-label": c.formatMessage({
                              id: `settings.cloudEnvironments.editor.workspaceDirectory.aria`,
                              defaultMessage: `Workspace directory`,
                              description: `Accessible label for the cloud environment workspace directory input`,
                            }),
                            disabled: D,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                  ],
                }),
              }),
            }),
            (0, X.jsx)(_t, { form: w, isPending: D }),
            (0, X.jsx)(Ht, { form: w, isPending: D }),
            (0, X.jsx)(vt, { form: w, isPending: D }),
            (0, X.jsx)(bt, { form: w, isPending: D, showAuthtranslator: p, showDockerInDocker: m }),
            v ? (0, X.jsx)(St, { form: w, isPending: D }) : null,
            (0, X.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, X.jsx)(T, {
                  color: `secondary`,
                  disabled: D,
                  onClick: i,
                  type: `button`,
                  children: (0, X.jsx)(I, {
                    id: `settings.cloudEnvironments.editor.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button label for cancelling cloud environment editing`,
                  }),
                }),
                (0, X.jsx)(T, {
                  color: `primary`,
                  disabled: !Ot(e, n != null, r?.machine_id),
                  loading: D,
                  type: `submit`,
                  children:
                    r == null
                      ? (0, X.jsx)(I, {
                          id: `settings.cloudEnvironments.editor.create`,
                          defaultMessage: `Create environment`,
                          description: `Button label for creating a cloud environment`,
                        })
                      : (0, X.jsx)(I, {
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
      (t[18] = r),
      (t[19] = w),
      (t[20] = c),
      (t[21] = D),
      (t[22] = u),
      (t[23] = i),
      (t[24] = o),
      (t[25] = p),
      (t[26] = m),
      (t[27] = v),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== w.Subscribe || t[30] !== k
    ? ((A = (0, X.jsx)(w.Subscribe, { selector: jn, children: k })),
      (t[29] = w.Subscribe),
      (t[30] = k),
      (t[31] = A))
    : (A = t[31]);
  let j;
  return (
    t[32] !== O || t[33] !== A
      ? ((j = (0, X.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: O,
          children: A,
        })),
        (t[32] = O),
        (t[33] = A),
        (t[34] = j))
      : (j = t[34]),
    j
  );
}
function jn(e) {
  return e.values;
}
var Mn,
  X,
  Nn = e(() => {
    ((Mn = i()),
      et(),
      _(),
      he(),
      le(),
      M(),
      b(),
      Te(),
      a(),
      We(),
      Me(),
      Be(),
      Ue(),
      be(),
      k(),
      nt(),
      Tt(),
      qt(),
      Vt(),
      gt(),
      xn(),
      Dn(),
      (X = v()));
  });
function Pn(e) {
  let t = (0, Ln.c)(36),
    { onEditEnvironment: r, onSelectEnvironment: i } = e,
    a = h(n),
    o = R(),
    { userId: s } = pe(),
    [c, l] = (0, Rn.useState)(``),
    u;
  t[0] === c ? (u = t[1]) : ((u = c.trim()), (t[0] = c), (t[1] = u));
  let f = fe(u, 200),
    p;
  t[2] === f ? (p = t[3]) : ((p = un(f)), (t[2] = f), (t[3] = p));
  let {
      data: m,
      fetchNextPage: _,
      hasNextPage: v,
      isFetchNextPageError: y,
      isFetchingNextPage: b,
      isPending: x,
      refetch: S,
    } = d(p),
    C = g(bn);
  if (x && c === ``) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(H, {
            children: (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
              children: [
                (0, Z.jsx)(ee, { className: `icon-xs` }),
                (0, Z.jsx)(I, {
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
  let w, E, D;
  if (
    t[5] !== f ||
    t[6] !== m ||
    t[7] !== v ||
    t[8] !== o ||
    t[9] !== x ||
    t[10] !== r ||
    t[11] !== i ||
    t[12] !== S ||
    t[13] !== a ||
    t[14] !== c ||
    t[15] !== C ||
    t[16] !== s
  ) {
    let e = m?.pages.flatMap(Fn) ?? [],
      n = e.sort(Yt);
    ((w = `flex flex-col gap-3`),
      (E =
        e.length > 0 || c !== ``
          ? (0, Z.jsx)(Ke, {
              id: `cloud-environments-search`,
              label: o.formatMessage({
                id: `settings.cloudEnvironments.search.label`,
                defaultMessage: `Search cloud environments`,
                description: `Accessible label for cloud environment search`,
              }),
              maxLength: 128,
              onSearchQueryChange: l,
              placeholder: o.formatMessage({
                id: `settings.cloudEnvironments.search.placeholder`,
                defaultMessage: `Search environments`,
                description: `Placeholder for cloud environment search`,
              }),
              searchQuery: c,
            })
          : null),
      (D = x
        ? (0, Z.jsx)(H, {
            children: (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
              children: [
                (0, Z.jsx)(ee, { className: `icon-xs` }),
                (0, Z.jsx)(I, {
                  id: `settings.cloudEnvironments.list.searching`,
                  defaultMessage: `Searching cloud environments…`,
                  description: `Loading state while searching cloud environments`,
                }),
              ],
            }),
          })
        : m == null
          ? (0, Z.jsx)(H, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3`,
                children: [
                  (0, Z.jsx)(I, {
                    id: `settings.cloudEnvironments.list.error`,
                    defaultMessage: `Unable to load cloud environments`,
                    description: `Error state for the cloud environments list`,
                  }),
                  (0, Z.jsx)(T, {
                    color: `secondary`,
                    onClick: () => void S(),
                    size: `toolbar`,
                    children: (0, Z.jsx)(I, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })
          : n.length > 0 || !v
            ? (0, Z.jsx)(H, {
                children:
                  n.length === 0
                    ? (0, Z.jsx)(Qe, {
                        children:
                          f === ``
                            ? (0, Z.jsx)(I, {
                                id: `settings.cloudEnvironments.list.empty`,
                                defaultMessage: `No cloud environments yet`,
                                description: `Empty state for the cloud environments list`,
                              })
                            : (0, Z.jsx)(I, {
                                id: `settings.cloudEnvironments.list.noResults`,
                                defaultMessage: `No matching cloud environments`,
                                description: `Search empty state for the cloud environments list`,
                              }),
                      })
                    : n.map((e) =>
                        (0, Z.jsx)(
                          In,
                          {
                            environment: e,
                            isPinning: C.isPending && C.variables?.environmentId === e.id,
                            onEdit: () => r(e.id),
                            onSelect: () => i(e.id),
                            onTogglePin: () => {
                              C.mutate(
                                { environmentId: e.id, etag: e.etag, isPinned: !e.is_pinned },
                                {
                                  onError: () => {
                                    a.get(z).danger(
                                      o.formatMessage({
                                        id: `settings.cloudEnvironments.pin.error`,
                                        defaultMessage: `Unable to update pinned environment`,
                                        description: `Toast shown when pinning a cloud environment fails`,
                                      }),
                                    );
                                  },
                                },
                              );
                            },
                            userId: s,
                          },
                          e.id,
                        ),
                      ),
              })
            : null),
      (t[5] = f),
      (t[6] = m),
      (t[7] = v),
      (t[8] = o),
      (t[9] = x),
      (t[10] = r),
      (t[11] = i),
      (t[12] = S),
      (t[13] = a),
      (t[14] = c),
      (t[15] = C),
      (t[16] = s),
      (t[17] = w),
      (t[18] = E),
      (t[19] = D));
  } else ((w = t[17]), (E = t[18]), (D = t[19]));
  let O;
  t[20] !== m || t[21] !== _ || t[22] !== v || t[23] !== y || t[24] !== b
    ? ((O =
        m == null
          ? null
          : (0, Z.jsx)(Je, {
              hasNextPage: v && !y,
              isFetchingNextPage: b,
              onLoadNextPage: () => void _(),
            })),
      (t[20] = m),
      (t[21] = _),
      (t[22] = v),
      (t[23] = y),
      (t[24] = b),
      (t[25] = O))
    : (O = t[25]);
  let k;
  t[26] !== m || t[27] !== _ || t[28] !== y
    ? ((k =
        m != null && y
          ? (0, Z.jsx)(H, {
              children: (0, Z.jsx)(V, {
                control: (0, Z.jsx)(T, {
                  color: `secondary`,
                  onClick: () => void _(),
                  size: `toolbar`,
                  children: (0, Z.jsx)(I, {
                    id: `settings.cloudEnvironments.pagination.retryButton`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry cloud environment pagination`,
                  }),
                }),
                label: (0, Z.jsx)(I, {
                  id: `settings.cloudEnvironments.pagination.error`,
                  defaultMessage: `Unable to load more cloud environments`,
                  description: `Error shown when loading another page of cloud environments fails`,
                }),
              }),
            })
          : null),
      (t[26] = m),
      (t[27] = _),
      (t[28] = y),
      (t[29] = k))
    : (k = t[29]);
  let A;
  return (
    t[30] !== w || t[31] !== E || t[32] !== D || t[33] !== O || t[34] !== k
      ? ((A = (0, Z.jsxs)(`div`, { className: w, children: [E, D, O, k] })),
        (t[30] = w),
        (t[31] = E),
        (t[32] = D),
        (t[33] = O),
        (t[34] = k),
        (t[35] = A))
      : (A = t[35]),
    A
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
    u;
  t[0] !== n.creator_id || t[1] !== s
    ? ((u = s != null && n.creator_id.includes(s)), (t[0] = n.creator_id), (t[1] = s), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = l && d,
    p;
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
      (p = e));
  } else if (!d) {
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
      (p = e));
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
      (p = e));
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
      (p = e));
  }
  let m;
  t[11] !== l || t[12] !== c || t[13] !== i
    ? ((m = l
        ? (0, Z.jsx)(`div`, {
            className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
            children: (0, Z.jsx)(te, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, Z.jsx)(Le, {
                label: c.formatMessage({
                  id: `settings.cloudEnvironments.list.actions`,
                  defaultMessage: `Environment actions`,
                  description: `Accessible label for cloud environment row actions`,
                }),
                size: `icon`,
              }),
              children: (0, Z.jsx)(F.Item, {
                LeftIcon: ie,
                onSelect: i,
                children: (0, Z.jsx)(I, {
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
      (t[14] = m))
    : (m = t[14]);
  let h = n.is_pinned
      ? void 0
      : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-within:opacity-100`,
    g = !f,
    _;
  t[15] === n.is_pinned
    ? (_ = t[16])
    : ((_ = n.is_pinned
        ? (0, Z.jsx)(ze, { className: `icon-xs` })
        : (0, Z.jsx)(je, { className: `icon-xs` })),
      (t[15] = n.is_pinned),
      (t[16] = _));
  let v;
  t[17] !== r || t[18] !== o || t[19] !== p || t[20] !== g || t[21] !== _
    ? ((v = (0, Z.jsx)(T, {
        "aria-label": p,
        color: `ghost`,
        disabled: g,
        loading: r,
        onClick: o,
        size: `icon`,
        uniform: !0,
        children: _,
      })),
      (t[17] = r),
      (t[18] = o),
      (t[19] = p),
      (t[20] = g),
      (t[21] = _),
      (t[22] = v))
    : (v = t[22]);
  let y;
  t[23] !== h || t[24] !== v
    ? ((y = (0, Z.jsx)(`span`, { className: h, children: v })),
      (t[23] = h),
      (t[24] = v),
      (t[25] = y))
    : (y = t[25]);
  let b;
  t[26] !== p || t[27] !== y
    ? ((b = (0, Z.jsx)(ne, { tooltipContent: p, children: y })),
      (t[26] = p),
      (t[27] = y),
      (t[28] = b))
    : (b = t[28]);
  let x;
  t[29] !== m || t[30] !== b
    ? ((x = (0, Z.jsxs)(Z.Fragment, { children: [m, b] })), (t[29] = m), (t[30] = b), (t[31] = x))
    : (x = t[31]);
  let S;
  t[32] !== n.label || t[33] !== c
    ? ((S = c.formatMessage(
        {
          id: `settings.cloudEnvironments.list.open`,
          defaultMessage: `Open {environmentName}`,
          description: `Accessible label for opening a cloud environment`,
        },
        { environmentName: n.label },
      )),
      (t[32] = n.label),
      (t[33] = c),
      (t[34] = S))
    : (S = t[34]);
  let C;
  t[35] !== n.repo_map || t[36] !== n.repos
    ? ((C =
        n.repos.length > 0
          ? n.repos.map((e) => n.repo_map?.[e]?.repository_full_name ?? e).join(`, `)
          : (0, Z.jsx)(I, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            })),
      (t[35] = n.repo_map),
      (t[36] = n.repos),
      (t[37] = C))
    : (C = t[37]);
  let w;
  return (
    t[38] !== n.label || t[39] !== a || t[40] !== S || t[41] !== C || t[42] !== x
      ? ((w = (0, Z.jsx)(Ne, {
          actions: x,
          ariaLabel: S,
          description: C,
          label: n.label,
          onClick: a,
        })),
        (t[38] = n.label),
        (t[39] = a),
        (t[40] = S),
        (t[41] = C),
        (t[42] = x),
        (t[43] = w))
      : (w = t[43]),
    w
  );
}
var Ln,
  Rn,
  Z,
  zn = e(() => {
    ((Ln = i()),
      u(),
      _(),
      (Rn = t(m(), 1)),
      he(),
      le(),
      M(),
      b(),
      qe(),
      Ie(),
      Ge(),
      N(),
      Te(),
      oe(),
      re(),
      Re(),
      Ae(),
      a(),
      Ze(),
      Me(),
      Ue(),
      de(),
      xn(),
      ln(),
      (Z = v()));
  });
function Bn() {
  let e = (0, Gn.c)(41),
    t = ve(),
    n = xe(),
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
    u = c != null && o.length === 1;
  if (o.length === 0) {
    let t;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Ve, { slug: `cloud-environments` })), (e[4] = t))
      : (t = e[4]);
    let n;
    e[5] === i ? (n = e[6]) : ((n = () => i(`${$}/new`)), (e[5] = i), (e[6] = n));
    let r;
    e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(I, {
          id: `settings.cloudEnvironments.create.action`,
          defaultMessage: `Create environment`,
          description: `Button label for creating a cloud environment`,
        })),
        (e[7] = r))
      : (r = e[7]);
    let a;
    e[8] === n
      ? (a = e[9])
      : ((a = (0, Q.jsx)(T, { color: `primary`, onClick: n, children: r })),
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
        ? ((s = (0, Q.jsx)(Ce, { title: t, action: a, children: o })),
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
      ? ((n = (0, Q.jsx)(I, {
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
        ? ((a = (0, Q.jsx)(Ce, { backSlot: t, title: n, children: r })),
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
  if (c != null && u) {
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
  let d;
  return (
    e[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Q.jsx)(me, { to: $, replace: !0 })), (e[40] = d))
      : (d = e[40]),
    d
  );
}
function Vn(e) {
  return e !== ``;
}
function Hn(e) {
  let t = (0, Gn.c)(64),
    { environmentId: r, onBack: i, onDeleted: a, onEdit: o } = e,
    s = h(n),
    c = R(),
    { userId: u } = pe(),
    d = l(fn, r),
    f = g(vn),
    p = g(yn),
    m = g(bn),
    [_, v] = (0, Kn.useState)(null);
  if (d.isPending || d.isError) {
    let e;
    t[0] === i ? (e = t[1]) : ((e = (0, Q.jsx)(Wn, { onClick: i })), (t[0] = i), (t[1] = e));
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(I, {
          id: `settings.cloudEnvironments.details.title`,
          defaultMessage: `Cloud environment`,
          description: `Title for cloud environment details`,
        })),
        (t[2] = n))
      : (n = t[2]);
    let r;
    t[3] === d
      ? (r = t[4])
      : ((r = (0, Q.jsx)(H, {
          children: (0, Q.jsx)(`div`, {
            className: `flex items-center justify-between gap-3 p-3 text-sm text-token-text-secondary`,
            children: d.isPending
              ? (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, Q.jsx)(ee, { className: `icon-xs` }),
                    (0, Q.jsx)(I, {
                      id: `settings.cloudEnvironments.details.loading`,
                      defaultMessage: `Loading environment…`,
                      description: `Loading state for cloud environment details`,
                    }),
                  ],
                })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(I, {
                      id: `settings.cloudEnvironments.details.error`,
                      defaultMessage: `Unable to load this cloud environment`,
                      description: `Error state for cloud environment details`,
                    }),
                    (0, Q.jsx)(T, {
                      color: `secondary`,
                      onClick: () => void d.refetch(),
                      size: `toolbar`,
                      children: (0, Q.jsx)(I, {
                        id: `settings.cloudEnvironments.retry`,
                        defaultMessage: `Retry`,
                        description: `Button label to retry loading cloud environments`,
                      }),
                    }),
                  ],
                }),
          }),
        })),
        (t[3] = d),
        (t[4] = r));
    let a;
    return (
      t[5] !== e || t[6] !== r
        ? ((a = (0, Q.jsx)(Ce, { backSlot: e, title: n, children: r })),
          (t[5] = e),
          (t[6] = r),
          (t[7] = a))
        : (a = t[7]),
      a
    );
  }
  let y = d.data,
    b = y.permissions?.can_write === !0,
    x = y.permissions?.can_delete === !0,
    S;
  t[8] !== y.creator || t[9] !== u
    ? ((S = u != null && y.creator.id.includes(u)), (t[8] = y.creator), (t[9] = u), (t[10] = S))
    : (S = t[10]);
  let C = b && S,
    w = b && (y.cache_settings?.post_setup_cache_enabled ?? !0),
    E;
  t[11] !== y.is_pinned || t[12] !== c
    ? ((E = y.is_pinned
        ? c.formatMessage({
            id: `settings.cloudEnvironments.details.unpin`,
            defaultMessage: `Unpin environment`,
            description: `Tooltip for unpinning a cloud environment`,
          })
        : c.formatMessage({
            id: `settings.cloudEnvironments.details.pin`,
            defaultMessage: `Pin environment`,
            description: `Tooltip for pinning a cloud environment`,
          })),
      (t[11] = y.is_pinned),
      (t[12] = c),
      (t[13] = E))
    : (E = t[13]);
  let D = E,
    O;
  t[14] === c
    ? (O = t[15])
    : ((O = c.formatMessage({
        id: `settings.cloudEnvironments.details.edit`,
        defaultMessage: `Edit environment`,
        description: `Tooltip for editing a cloud environment`,
      })),
      (t[14] = c),
      (t[15] = O));
  let k = O,
    A;
  t[16] !== x ||
  t[17] !== b ||
  t[18] !== C ||
  t[19] !== w ||
  t[20] !== k ||
  t[21] !== y.etag ||
  t[22] !== y.id ||
  t[23] !== y.is_pinned ||
  t[24] !== c ||
  t[25] !== o ||
  t[26] !== D ||
  t[27] !== s ||
  t[28] !== m
    ? ((A =
        b || x
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                C
                  ? (0, Q.jsx)(ne, {
                      tooltipContent: D,
                      children: (0, Q.jsx)(T, {
                        "aria-label": D,
                        color: `ghost`,
                        loading: m.isPending,
                        onClick: () => {
                          m.mutate(
                            { environmentId: y.id, etag: y.etag, isPinned: !y.is_pinned },
                            {
                              onError: () => {
                                s.get(z).danger(
                                  c.formatMessage({
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
                        children: y.is_pinned
                          ? (0, Q.jsx)(ze, { className: `icon-xs` })
                          : (0, Q.jsx)(je, { className: `icon-xs` }),
                      }),
                    })
                  : null,
                b
                  ? (0, Q.jsxs)(T, {
                      "aria-label": k,
                      color: `secondary`,
                      onClick: o,
                      size: `toolbar`,
                      children: [
                        (0, Q.jsx)(ie, { className: `icon-xs` }),
                        (0, Q.jsx)(I, {
                          id: `settings.cloudEnvironments.details.editAction`,
                          defaultMessage: `Edit`,
                          description: `Button label for editing a cloud environment`,
                        }),
                      ],
                    })
                  : null,
                x || w
                  ? (0, Q.jsxs)(te, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(Le, {
                        label: c.formatMessage({
                          id: `settings.cloudEnvironments.details.actions`,
                          defaultMessage: `Environment actions`,
                          description: `Accessible label for cloud environment actions`,
                        }),
                      }),
                      children: [
                        w
                          ? (0, Q.jsx)(F.Item, {
                              LeftIcon: Ee,
                              onSelect: () => v(`reset-cache`),
                              children: (0, Q.jsx)(I, {
                                id: `settings.cloudEnvironments.details.resetCache`,
                                defaultMessage: `Reset cache`,
                                description: `Menu item for resetting a cloud environment cache`,
                              }),
                            })
                          : null,
                        x
                          ? (0, Q.jsx)(F.Item, {
                              LeftIcon: Oe,
                              onSelect: () => v(`delete`),
                              children: (0, Q.jsx)(I, {
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
      (t[16] = x),
      (t[17] = b),
      (t[18] = C),
      (t[19] = w),
      (t[20] = k),
      (t[21] = y.etag),
      (t[22] = y.id),
      (t[23] = y.is_pinned),
      (t[24] = c),
      (t[25] = o),
      (t[26] = D),
      (t[27] = s),
      (t[28] = m),
      (t[29] = A))
    : (A = t[29]);
  let j;
  t[30] === i ? (j = t[31]) : ((j = (0, Q.jsx)(Wn, { onClick: i })), (t[30] = i), (t[31] = j));
  let M = y.description || void 0,
    N;
  t[32] === y ? (N = t[33]) : ((N = (0, Q.jsx)(rt, { environment: y })), (t[32] = y), (t[33] = N));
  let re = _ === `delete`,
    ae;
  t[34] !== f || t[35] !== y.id || t[36] !== c || t[37] !== a || t[38] !== s
    ? ((ae = () => {
        f.mutate(y.id, {
          onSuccess: () => {
            (s
              .get(z)
              .success(
                c.formatMessage({
                  id: `settings.cloudEnvironments.delete.success`,
                  defaultMessage: `Deleted cloud environment`,
                  description: `Toast shown after deleting a cloud environment`,
                }),
              ),
              a());
          },
          onError: () => {
            s.get(z).danger(
              c.formatMessage({
                id: `settings.cloudEnvironments.delete.error`,
                defaultMessage: `Unable to delete cloud environment`,
                description: `Toast shown when cloud environment deletion fails`,
              }),
            );
          },
        });
      }),
      (t[34] = f),
      (t[35] = y.id),
      (t[36] = c),
      (t[37] = a),
      (t[38] = s),
      (t[39] = ae))
    : (ae = t[39]);
  let oe;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e) => v(e ? `delete` : null)), (t[40] = oe))
    : (oe = t[40]);
  let P;
  t[41] !== f.isPending || t[42] !== y.label || t[43] !== re || t[44] !== ae
    ? ((P = (0, Q.jsx)(lt, {
        environmentName: y.label,
        isPending: f.isPending,
        open: re,
        onConfirm: ae,
        onOpenChange: oe,
      })),
      (t[41] = f.isPending),
      (t[42] = y.label),
      (t[43] = re),
      (t[44] = ae),
      (t[45] = P))
    : (P = t[45]);
  let se = _ === `reset-cache`,
    ce;
  t[46] !== y.id || t[47] !== c || t[48] !== p || t[49] !== s
    ? ((ce = () => {
        p.mutate(y.id, {
          onSuccess: () => {
            (v(null),
              s
                .get(z)
                .success(
                  c.formatMessage({
                    id: `settings.cloudEnvironments.resetCache.success`,
                    defaultMessage: `Reset cloud environment cache`,
                    description: `Toast shown after resetting a cloud environment cache`,
                  }),
                ));
          },
          onError: () => {
            s.get(z).danger(
              c.formatMessage({
                id: `settings.cloudEnvironments.resetCache.error`,
                defaultMessage: `Unable to reset cloud environment cache`,
                description: `Toast shown when resetting a cloud environment cache fails`,
              }),
            );
          },
        });
      }),
      (t[46] = y.id),
      (t[47] = c),
      (t[48] = p),
      (t[49] = s),
      (t[50] = ce))
    : (ce = t[50]);
  let le;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (e) => v(e ? `reset-cache` : null)), (t[51] = le))
    : (le = t[51]);
  let ue;
  t[52] !== p.isPending || t[53] !== se || t[54] !== ce
    ? ((ue = (0, Q.jsx)(ut, { isPending: p.isPending, open: se, onConfirm: ce, onOpenChange: le })),
      (t[52] = p.isPending),
      (t[53] = se),
      (t[54] = ce),
      (t[55] = ue))
    : (ue = t[55]);
  let de;
  return (
    t[56] !== y.label ||
    t[57] !== P ||
    t[58] !== ue ||
    t[59] !== A ||
    t[60] !== j ||
    t[61] !== M ||
    t[62] !== N
      ? ((de = (0, Q.jsxs)(Ce, {
          action: A,
          backSlot: j,
          subtitle: M,
          title: y.label,
          children: [N, P, ue],
        })),
        (t[56] = y.label),
        (t[57] = P),
        (t[58] = ue),
        (t[59] = A),
        (t[60] = j),
        (t[61] = M),
        (t[62] = N),
        (t[63] = de))
      : (de = t[63]),
    de
  );
}
function Un(e) {
  let t = (0, Gn.c)(19),
    { environmentId: n, onBack: r } = e,
    i = l(fn, n);
  if (i.isError) {
    let e = `${$}/${n}`,
      r;
    return (
      t[0] === e
        ? (r = t[1])
        : ((r = (0, Q.jsx)(me, { to: e, replace: !0 })), (t[0] = e), (t[1] = r)),
      r
    );
  }
  if (i.isPending) {
    let e;
    t[2] === r ? (e = t[3]) : ((e = (0, Q.jsx)(Wn, { onClick: r })), (t[2] = r), (t[3] = e));
    let n;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(I, {
          id: `settings.cloudEnvironments.edit.title`,
          defaultMessage: `Edit cloud environment`,
          description: `Title for editing a cloud environment`,
        })),
        (t[4] = n))
      : (n = t[4]);
    let i;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(H, {
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
            children: [
              (0, Q.jsx)(ee, { className: `icon-xs` }),
              (0, Q.jsx)(I, {
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
        : ((a = (0, Q.jsx)(Ce, { backSlot: e, title: n, children: i })), (t[6] = e), (t[7] = a)),
      a
    );
  }
  if (i.data.permissions?.can_write !== !0) {
    let e = `${$}/${n}`,
      r;
    return (
      t[8] === e
        ? (r = t[9])
        : ((r = (0, Q.jsx)(me, { to: e, replace: !0 })), (t[8] = e), (t[9] = r)),
      r
    );
  }
  let a;
  t[10] === r ? (a = t[11]) : ((a = (0, Q.jsx)(Wn, { onClick: r })), (t[10] = r), (t[11] = a));
  let o;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(I, {
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
      ? ((c = (0, Q.jsx)(Ce, { backSlot: a, title: o, children: s })),
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
    ? ((r = (0, Q.jsx)(Fe, { className: `icon-xs` })),
      (i = (0, Q.jsx)(I, {
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
      : ((a = (0, Q.jsxs)(T, { color: `ghost`, size: `toolbar`, onClick: n, children: [r, i] })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var Gn, Kn, Q, $;
e(() => {
  ((Gn = i()),
    _(),
    (Kn = t(m(), 1)),
    he(),
    ue(),
    le(),
    M(),
    b(),
    Ie(),
    N(),
    Te(),
    oe(),
    Pe(),
    re(),
    Re(),
    Ae(),
    ke(),
    De(),
    a(),
    we(),
    Be(),
    Ue(),
    ct(),
    ft(),
    Nn(),
    zn(),
    xn(),
    (Q = v()),
    ($ = `/settings/cloud-environments`));
})();
export { Bn as CloudEnvironmentsSettingsPage };
//# sourceMappingURL=cloud-environments-settings-page.js.map
