import { n as e } from "./rolldown-runtime.js";
import {
  Ft as t,
  Pt as n,
  Rt as r,
  Tl as i,
  W as a,
  Xs as o,
  _l as s,
  cl as c,
  ec as l,
  tc as u,
  ul as d,
  zt as f,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import {
  _n as p,
  an as m,
  en as h,
  fv as g,
  pv as _,
  vn as v,
  vx as y,
  wx as b,
  yn as x,
  yx as S,
} from "./app-initial~app-main~new-thread-panel-page.js";
import {
  Qa as C,
  to as w,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
import {
  L as T,
  z as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~djgpfzje.js";
function D(e) {
  let n = (0, k.c)(28),
    i = e?.hostId ?? `local`,
    a = u(r),
    { data: o } = l(p, i),
    c = s(),
    f = x(),
    m = b(),
    g;
  n[0] === i ? (g = n[1]) : ((g = C(i)), (n[0] = i), (n[1] = g));
  let v = g,
    y;
  n[2] !== v || n[3] !== f
    ? ((y = async () => {
        await Promise.all([f(v), f(h), f([`user-saved-config`])]);
      }),
      (n[2] = v),
      (n[3] = f),
      (n[4] = y))
    : (y = n[4]);
  let S = y,
    w;
  n[5] !== i ||
  n[6] !== o?.configWriteTarget?.expectedVersion ||
  n[7] !== o?.configWriteTarget?.filePath
    ? ((w = async (e) => {
        let { appId: t, enabled: n } = e;
        await _(`batch-write-config-value`, {
          hostId: i,
          edits: O({ appId: t, enabled: n }),
          filePath: o?.configWriteTarget?.filePath ?? null,
          expectedVersion: o?.configWriteTarget?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (n[5] = i),
      (n[6] = o?.configWriteTarget?.expectedVersion),
      (n[7] = o?.configWriteTarget?.filePath),
      (n[8] = w))
    : (w = n[8]);
  let T;
  n[9] !== v || n[10] !== c
    ? ((T = async (e) => {
        let { appId: t, enabled: n } = e;
        await c.cancelQueries({ queryKey: v });
        let r = c.getQueryData(v);
        return (
          r &&
            c.setQueryData(
              v,
              r.map((e) => (e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n })),
            ),
          { previousApps: r }
        );
      }),
      (n[9] = v),
      (n[10] = c),
      (n[11] = T))
    : (T = n[11]);
  let D, A;
  n[12] !== v || n[13] !== m || n[14] !== c || n[15] !== a
    ? ((D = (e, t) => {
        let { appId: n, appName: r, enabled: i } = t,
          o = r ?? c.getQueryData(v)?.find((e) => e.id === n)?.name ?? n;
        a.get(E).success(m.formatMessage(i ? j.enableSuccess : j.disableSuccess, { appName: o }));
      }),
      (A = (e, n, r) => {
        (t.error(`Failed to update app enablement`, { safe: {}, sensitive: { error: e } }),
          a.get(E).danger(m.formatMessage(j.updateError)),
          r?.previousApps && c.setQueryData(v, r.previousApps));
      }),
      (n[12] = v),
      (n[13] = m),
      (n[14] = c),
      (n[15] = a),
      (n[16] = D),
      (n[17] = A))
    : ((D = n[16]), (A = n[17]));
  let M;
  n[18] !== S || n[19] !== w || n[20] !== T || n[21] !== D || n[22] !== A
    ? ((M = { mutationFn: w, onMutate: T, onSuccess: D, onError: A, onSettled: S }),
      (n[18] = S),
      (n[19] = w),
      (n[20] = T),
      (n[21] = D),
      (n[22] = A),
      (n[23] = M))
    : (M = n[23]);
  let N = d(M),
    P = N.isPending ? (N.variables?.appId ?? null) : null,
    F;
  return (
    n[24] !== N.isPending || n[25] !== N.mutateAsync || n[26] !== P
      ? ((F = { setAppEnabled: N.mutateAsync, isUpdating: N.isPending, updatingAppId: P }),
        (n[24] = N.isPending),
        (n[25] = N.mutateAsync),
        (n[26] = P),
        (n[27] = F))
      : (F = n[27]),
    F
  );
}
function O({ appId: e, enabled: t }) {
  return [{ keyPath: `${A}.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
var k,
  A,
  j,
  M = e(() => {
    ((k = i()),
      c(),
      o(),
      S(),
      g(),
      T(),
      w(),
      m(),
      v(),
      f(),
      a(),
      n(),
      (A = `apps`),
      (j = y({
        enableSuccess: {
          id: `apps.enable.success`,
          defaultMessage: `{appName} app enabled`,
          description: `Toast shown after successfully enabling an app`,
        },
        disableSuccess: {
          id: `apps.disable.success`,
          defaultMessage: `{appName} app disabled`,
          description: `Toast shown after successfully disabling an app`,
        },
        updateError: {
          id: `apps.update.error`,
          defaultMessage: `Failed to update app`,
          description: `Toast shown when enabling or disabling an app fails`,
        },
      })));
  });
export { D as n, M as t };
//# sourceMappingURL=apps-availability.js.map
