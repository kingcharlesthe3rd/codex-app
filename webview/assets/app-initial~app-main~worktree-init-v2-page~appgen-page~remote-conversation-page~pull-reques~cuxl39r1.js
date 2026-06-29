import { n as e, s as t } from "./rolldown-runtime.js";
import {
  Ol as n,
  Wt as r,
  _n as i,
  ot as a,
  qa as o,
  ut as s,
  xl as c,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Jp as l,
  Mf as u,
  Nf as d,
  Yp as f,
  nf as p,
  tf as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~fjtgnfyk.js";
import {
  LC as h,
  MC as g,
  aw as _,
  cw as v,
  iw as y,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  h as b,
  m as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk.js";
import {
  F as S,
  P as C,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~dfrs7ujs-rL-9I_AY.js";
var w,
  T = e(() => {
    (_(),
      (w = y({
        openConfigToml: {
          id: `codex.profileDropdown.openConfigToml`,
          defaultMessage: `Open config.toml`,
          description: `Action to open the MCP configuration file`,
        },
        openConfigTomlWsl: {
          id: `codex.profileDropdown.openConfigToml.wsl`,
          defaultMessage: `Open config.toml in WSL environment`,
          description: `Action to open the MCP configuration file inside Windows Subsystem for Linux`,
        },
      })));
  });
async function E(e) {
  p({
    path: e.path,
    cwd: null,
    hostId: e.hostId,
    target: await D(e.hostId),
    line: e.range?.start.line,
    column: e.range?.start.column,
  });
}
async function D(e) {
  try {
    return (await a(`open-in-targets`, { params: { cwd: null, hostId: e } })).preferredTarget;
  } catch {
    return;
  }
}
var O = e(() => {
  (m(), s());
});
function k(e) {
  let t = (0, M.c)(7),
    { hostId: n } = e,
    { configPath: r, label: i } = j(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && E({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  return (
    t[3] !== i || t[4] !== a || t[5] !== o
      ? ((s = (0, P.jsx)(l, {
          color: `secondary`,
          size: `toolbar`,
          className: `inline-flex w-fit`,
          onClick: a,
          disabled: o,
          children: i,
        })),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function A(e) {
  let t = (0, M.c)(8),
    { hostId: n } = e,
    { configPath: r, label: i } = j(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && E({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, P.jsx)(C, { className: `icon-xxs shrink-0`, "aria-hidden": !0 })), (t[3] = s))
    : (s = t[3]);
  let c;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((c = (0, P.jsxs)(`button`, {
          type: `button`,
          className: `inline-flex cursor-interaction items-center gap-1 text-start font-medium text-token-text-secondary hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-50`,
          onClick: a,
          disabled: o,
          children: [i, s],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function j(e) {
  let t = (0, M.c)(7),
    { data: n } = b(),
    r = h(i.runCodexInWsl),
    a = d(e),
    o = n?.platform === `win32` && n?.hasWsl && r,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a == null ? null : N.default.join(a, `config.toml`)), (t[0] = a), (t[1] = s));
  let c = s,
    l;
  t[2] === o
    ? (l = t[3])
    : ((l = o ? (0, P.jsx)(v, { ...w.openConfigTomlWsl }) : (0, P.jsx)(v, { ...w.openConfigToml })),
      (t[2] = o),
      (t[3] = l));
  let u = l,
    f;
  return (
    t[4] !== c || t[5] !== u
      ? ((f = { configPath: c, label: u }), (t[4] = c), (t[5] = u), (t[6] = f))
      : (f = t[6]),
    f
  );
}
var M,
  N,
  P,
  F = e(() => {
    ((M = n()), (N = t(o(), 1)), r(), _(), f(), u(), x(), S(), g(), T(), O(), (P = c()));
  });
export { E as a, O as i, A as n, F as r, k as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~cuxl39r1.js.map
