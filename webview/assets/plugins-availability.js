import { fs as e } from "./app-server-manager-signals.js";
import { A as t, F as n, _ as r, g as i, h as a, lt as o } from "./vscode-api.js";
import { c as s, r as c } from "./lib-2.js";
import { t as l } from "./invalidate-queries-and-broadcast.js";
import { d as u, s as d } from "./config-queries.js";
import { r as f } from "./toast-signal.js";
import { t as p } from "./use-plugins.js";
import { t as m } from "./use-skills.js";
import { n as h, r as g } from "./plugin-config-edits.js";
import { a as _, t as v } from "./bundled-plugin-auto-install-preference.js";
import { n as y } from "./plugin-detail-queries.js";
import { t as b } from "./hooks-settings-queries-B.js";
var x = o(),
  S = [`user-saved-config`],
  C = c({
    enabledSuccess: {
      id: `plugins.card.enableSuccess`,
      defaultMessage: `{pluginName} plugin enabled`,
      description: `Toast shown after successfully enabling a plugin`,
    },
    disabledSuccess: {
      id: `plugins.card.disableSuccess`,
      defaultMessage: `{pluginName} plugin disabled`,
      description: `Toast shown after successfully disabling a plugin`,
    },
    toggleError: {
      id: `plugins.card.toggleError`,
      defaultMessage: `Failed to update plugin`,
      description: `Toast message shown when enabling or disabling a plugin fails`,
    },
    uninstallSuccess: {
      id: `plugins.card.uninstallSuccess`,
      defaultMessage: `{pluginName} plugin uninstalled`,
      description: `Toast shown after successfully uninstalling a plugin`,
    },
    uninstallError: {
      id: `plugins.card.uninstallError`,
      defaultMessage: `Failed to uninstall plugin`,
      description: `Toast message shown when uninstalling a plugin fails`,
    },
    marketplacesUpgradeSuccess: {
      id: `plugins.marketplace.upgradeAllSuccess`,
      defaultMessage: `Marketplaces upgraded`,
      description: `Toast shown after successfully upgrading marketplaces`,
    },
    marketplaceUpgradeSuccess: {
      id: `plugins.marketplace.upgradeSuccess`,
      defaultMessage: `{marketplaceName} marketplace upgraded`,
      description: `Toast shown after successfully upgrading one marketplace`,
    },
    marketplacesUpgradeError: {
      id: `plugins.marketplace.upgradeAllError`,
      defaultMessage: `Some marketplaces failed to upgrade`,
      description: `Toast message shown when upgrading marketplaces partially fails`,
    },
    marketplaceUpgradeError: {
      id: `plugins.marketplace.upgradeError`,
      defaultMessage: `Failed to upgrade marketplace`,
      description: `Toast message shown when upgrading one marketplace fails`,
    },
    marketplacesUpgradeRequestError: {
      id: `plugins.marketplace.upgradeAllRequestError`,
      defaultMessage: `Failed to upgrade marketplaces`,
      description: `Toast message shown when upgrading marketplaces fails`,
    },
  });
function w(o) {
  let c = (0, x.c)(23),
    m = o?.hostId ?? `local`,
    g = n(a),
    _ = t(),
    v = l(),
    y = s(),
    b;
  c[0] !== m || c[1] !== _
    ? ((b = async (t) => {
        let { pluginId: n, enabled: r } = t,
          i = await u(_, m);
        return e(`batch-write-config-value`, {
          hostId: m,
          edits: h({ pluginId: n, enabled: r }),
          filePath: i?.filePath ?? null,
          expectedVersion: i?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (c[0] = m),
      (c[1] = _),
      (c[2] = b))
    : (b = c[2]);
  let S;
  c[3] === _
    ? (S = c[4])
    : ((S = async (e) => {
        let { pluginId: t, enabled: n } = e;
        await Promise.all([_.cancelQueries({ queryKey: p }), _.cancelQueries({ queryKey: d })]);
        let r = _.getQueryData(d),
          i = _.getQueriesData({ queryKey: p }).flatMap(T);
        for (let [e, r] of i) _.setQueryData(e, A(r, t, n));
        if (r) {
          let e = { ...r.config };
          ((e.plugins = k(r.config.plugins, t, n)), _.setQueryData(d, { ...r, config: e }));
        }
        return { previousPluginLists: i, previousUserConfig: r };
      }),
      (c[3] = _),
      (c[4] = S));
  let w;
  c[5] !== y || c[6] !== g
    ? ((w = (e, t) => {
        let { enabled: n, pluginDisplayName: r } = t;
        g.get(f).success(
          y.formatMessage(n ? C.enabledSuccess : C.disabledSuccess, { pluginName: r }),
        );
      }),
      (c[5] = y),
      (c[6] = g),
      (c[7] = w))
    : (w = c[7]);
  let E;
  c[8] !== y || c[9] !== _ || c[10] !== g
    ? ((E = (e, t, n) => {
        (i.error(`Failed to update plugin enabled state`, { safe: {}, sensitive: { error: e } }),
          n?.previousUserConfig && _.setQueryData(d, n.previousUserConfig));
        for (let [e, t] of n?.previousPluginLists ?? []) _.setQueryData(e, t);
        g.get(f).danger(y.formatMessage(C.toggleError));
      }),
      (c[8] = y),
      (c[9] = _),
      (c[10] = g),
      (c[11] = E))
    : (E = c[11]);
  let D;
  c[12] === v
    ? (D = c[13])
    : ((D = async () => {
        await M(v);
      }),
      (c[12] = v),
      (c[13] = D));
  let O;
  c[14] !== b || c[15] !== S || c[16] !== w || c[17] !== E || c[18] !== D
    ? ((O = { mutationFn: b, onMutate: S, onSuccess: w, onError: E, onSettled: D }),
      (c[14] = b),
      (c[15] = S),
      (c[16] = w),
      (c[17] = E),
      (c[18] = D),
      (c[19] = O))
    : (O = c[19]);
  let j = r(O),
    N = j.isPending ? j.variables?.pluginId : null,
    P;
  return (
    c[20] !== j.mutateAsync || c[21] !== N
      ? ((P = { pendingPluginId: N, setPluginEnabled: j.mutateAsync }),
        (c[20] = j.mutateAsync),
        (c[21] = N),
        (c[22] = P))
      : (P = c[22]),
    P
  );
}
function T(e) {
  let [t, n] = e;
  return n == null || y(t) || !j(n) ? [] : [[t, n]];
}
function E(t) {
  let o = (0, x.c)(17),
    c = t?.hostId ?? `local`,
    u = n(a),
    d = l(),
    p = s(),
    m;
  o[0] !== c || o[1] !== u
    ? ((m = async (t) => {
        let { marketplaceName: n, pluginId: r, pluginName: i, requestPluginId: a } = t,
          o = g(r);
        (o != null && (await v(u, o, !0)),
          await e(`uninstall-plugin`, { hostId: c, pluginId: a ?? r }),
          await _({ hostId: c, marketplaceName: n, pluginName: i }));
      }),
      (o[0] = c),
      (o[1] = u),
      (o[2] = m))
    : (m = o[2]);
  let h, y;
  o[3] !== p || o[4] !== u
    ? ((h = (e, t) => {
        let { pluginDisplayName: n } = t;
        u.get(f).success(p.formatMessage(C.uninstallSuccess, { pluginName: n }));
      }),
      (y = (e) => {
        (i.error(`Failed to uninstall plugin`, { safe: {}, sensitive: { error: e } }),
          u.get(f).danger(p.formatMessage(C.uninstallError)));
      }),
      (o[3] = p),
      (o[4] = u),
      (o[5] = h),
      (o[6] = y))
    : ((h = o[5]), (y = o[6]));
  let b;
  o[7] === d
    ? (b = o[8])
    : ((b = () => {
        M(d);
      }),
      (o[7] = d),
      (o[8] = b));
  let S;
  o[9] !== m || o[10] !== h || o[11] !== y || o[12] !== b
    ? ((S = { mutationFn: m, onSuccess: h, onError: y, onSettled: b }),
      (o[9] = m),
      (o[10] = h),
      (o[11] = y),
      (o[12] = b),
      (o[13] = S))
    : (S = o[13]);
  let w = r(S),
    T = w.isPending ? (w.variables?.pluginId ?? null) : null,
    E;
  return (
    o[14] !== w.mutateAsync || o[15] !== T
      ? ((E = { pendingUninstallPluginId: T, uninstallPlugin: w.mutateAsync }),
        (o[14] = w.mutateAsync),
        (o[15] = T),
        (o[16] = E))
      : (E = o[16]),
    E
  );
}
function D(t) {
  let o = (0, x.c)(16),
    c = t?.hostId ?? `local`,
    u = n(a),
    d = l(),
    p = s(),
    m;
  o[0] === c
    ? (m = o[1])
    : ((m = async (t) => {
        let { marketplaceName: n } = t;
        await e(`remove-marketplace`, { hostId: c, marketplaceName: n });
      }),
      (o[0] = c),
      (o[1] = m));
  let h, g;
  o[2] !== p || o[3] !== u
    ? ((h = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        u.get(f).success(
          p.formatMessage(
            {
              id: `plugins.marketplace.removeSuccess`,
              defaultMessage: `{marketplaceName} marketplace removed`,
              description: `Toast shown after successfully removing a plugin marketplace`,
            },
            { marketplaceName: n },
          ),
        );
      }),
      (g = (e) => {
        (i.error(`Failed to remove marketplace`, { safe: {}, sensitive: { error: e } }),
          u
            .get(f)
            .danger(
              p.formatMessage({
                id: `plugins.marketplace.removeError`,
                defaultMessage: `Failed to remove marketplace`,
                description: `Toast message shown when removing a marketplace fails`,
              }),
            ));
      }),
      (o[2] = p),
      (o[3] = u),
      (o[4] = h),
      (o[5] = g))
    : ((h = o[4]), (g = o[5]));
  let _;
  o[6] === d
    ? (_ = o[7])
    : ((_ = async () => {
        await M(d);
      }),
      (o[6] = d),
      (o[7] = _));
  let v;
  o[8] !== m || o[9] !== h || o[10] !== g || o[11] !== _
    ? ((v = { mutationFn: m, onSuccess: h, onError: g, onSettled: _ }),
      (o[8] = m),
      (o[9] = h),
      (o[10] = g),
      (o[11] = _),
      (o[12] = v))
    : (v = o[12]);
  let y = r(v),
    b = y.isPending ? (y.variables?.marketplaceName ?? null) : null,
    S;
  return (
    o[13] !== y.mutateAsync || o[14] !== b
      ? ((S = { pendingRemoveMarketplaceName: b, removeMarketplace: y.mutateAsync }),
        (o[13] = y.mutateAsync),
        (o[14] = b),
        (o[15] = S))
      : (S = o[15]),
    S
  );
}
function O(t) {
  let o = (0, x.c)(19),
    c = t?.hostId ?? `local`,
    u = n(a),
    d = l(),
    p = s(),
    m;
  o[0] === c
    ? (m = o[1])
    : ((m = async (t) => {
        let { marketplaceName: n } = t;
        return e(`upgrade-marketplaces`, { hostId: c, marketplaceName: n ?? null });
      }),
      (o[0] = c),
      (o[1] = m));
  let h, g;
  o[2] !== p || o[3] !== u
    ? ((h = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        if (e.errors.length > 0) {
          (i.error(`Failed to upgrade marketplaces`, {
            safe: { errorCount: e.errors.length },
            sensitive: { errors: e.errors },
          }),
            u
              .get(f)
              .danger(
                p.formatMessage(n == null ? C.marketplacesUpgradeError : C.marketplaceUpgradeError),
              ));
          return;
        }
        if (n != null) {
          u.get(f).success(p.formatMessage(C.marketplaceUpgradeSuccess, { marketplaceName: n }));
          return;
        }
        u.get(f).success(p.formatMessage(C.marketplacesUpgradeSuccess));
      }),
      (g = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        (i.error(`Failed to upgrade marketplaces`, { safe: {}, sensitive: { error: e } }),
          u
            .get(f)
            .danger(
              p.formatMessage(
                n == null ? C.marketplacesUpgradeRequestError : C.marketplaceUpgradeError,
              ),
            ));
      }),
      (o[2] = p),
      (o[3] = u),
      (o[4] = h),
      (o[5] = g))
    : ((h = o[4]), (g = o[5]));
  let _;
  o[6] === d
    ? (_ = o[7])
    : ((_ = async () => {
        await M(d);
      }),
      (o[6] = d),
      (o[7] = _));
  let v;
  o[8] !== m || o[9] !== h || o[10] !== g || o[11] !== _
    ? ((v = { mutationFn: m, onSuccess: h, onError: g, onSettled: _ }),
      (o[8] = m),
      (o[9] = h),
      (o[10] = g),
      (o[11] = _),
      (o[12] = v))
    : (v = o[12]);
  let y = r(v),
    b = y.isPending && y.variables.marketplaceName == null,
    S = y.isPending && y.variables.marketplaceName != null ? y.variables.marketplaceName : null,
    w;
  o[13] === y
    ? (w = o[14])
    : ((w = async (e) => {
        let t = e === void 0 ? {} : e;
        await y.mutateAsync(t);
      }),
      (o[13] = y),
      (o[14] = w));
  let T;
  return (
    o[15] !== b || o[16] !== S || o[17] !== w
      ? ((T = {
          isUpgradingMarketplaces: b,
          pendingUpgradeMarketplaceName: S,
          upgradeMarketplaces: w,
        }),
        (o[15] = b),
        (o[16] = S),
        (o[17] = w),
        (o[18] = T))
      : (T = o[18]),
    T
  );
}
function k(e, t, n) {
  let r = typeof e == `object` && e && !Array.isArray(e) ? e : {},
    i = r[t];
  return {
    ...r,
    [t]: typeof i == `object` && i && !Array.isArray(i) ? { ...i, enabled: n } : { enabled: n },
  };
}
function A(e, t, n) {
  return {
    ...e,
    plugins: e.plugins.map((e) =>
      e.plugin.id !== t || e.plugin.enabled === n
        ? e
        : { ...e, plugin: { ...e.plugin, enabled: n } },
    ),
  };
}
function j(e) {
  return typeof e == `object` && !!e && `plugins` in e && Array.isArray(e.plugins);
}
async function M(e) {
  await Promise.all([e(p), e(m), e(b), e(d), e(S)]);
}
export { O as i, E as n, w as r, D as t };
//# sourceMappingURL=plugins-availability.js.map
