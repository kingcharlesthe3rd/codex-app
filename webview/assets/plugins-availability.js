import { fs as e } from "./app-server-manager-signals.js";
import { A as t, F as n, P as r, _ as i, g as a, h as o, lt as s } from "./vscode-api.js";
import { c, r as l } from "./lib-2.js";
import { t as u } from "./invalidate-queries-and-broadcast.js";
import { C as d, s as f } from "./config-queries.js";
import { r as p } from "./toast-signal.js";
import { t as m } from "./use-plugins.js";
import { t as h } from "./use-skills.js";
import { n as g, r as _ } from "./plugin-config-edits.js";
import { a as v, t as y } from "./bundled-plugin-auto-install-preference.js";
import { n as b } from "./plugin-detail-queries.js";
import { t as x } from "./hooks-settings-queries.js";
var S = s(),
  C = [`user-saved-config`],
  w = l({
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
function T(s) {
  let l = (0, S.c)(24),
    h = s?.hostId ?? `local`,
    _ = n(o),
    { data: v } = r(d, h),
    y = t(),
    b = u(),
    x = c(),
    C;
  l[0] !== h ||
  l[1] !== v?.configWriteTarget?.expectedVersion ||
  l[2] !== v?.configWriteTarget?.filePath
    ? ((C = async (t) => {
        let { pluginId: n, enabled: r } = t;
        return e(`batch-write-config-value`, {
          hostId: h,
          edits: g({ pluginId: n, enabled: r }),
          filePath: v?.configWriteTarget?.filePath ?? null,
          expectedVersion: v?.configWriteTarget?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (l[0] = h),
      (l[1] = v?.configWriteTarget?.expectedVersion),
      (l[2] = v?.configWriteTarget?.filePath),
      (l[3] = C))
    : (C = l[3]);
  let T;
  l[4] === y
    ? (T = l[5])
    : ((T = async (e) => {
        let { pluginId: t, enabled: n } = e;
        await Promise.all([y.cancelQueries({ queryKey: m }), y.cancelQueries({ queryKey: f })]);
        let r = y.getQueryData(f),
          i = y.getQueriesData({ queryKey: m }).flatMap(E);
        for (let [e, r] of i) y.setQueryData(e, j(r, t, n));
        if (r) {
          let e = { ...r.config };
          ((e.plugins = A(r.config.plugins, t, n)), y.setQueryData(f, { ...r, config: e }));
        }
        return { previousPluginLists: i, previousUserConfig: r };
      }),
      (l[4] = y),
      (l[5] = T));
  let D;
  l[6] !== x || l[7] !== _
    ? ((D = (e, t) => {
        let { enabled: n, pluginDisplayName: r } = t;
        _.get(p).success(
          x.formatMessage(n ? w.enabledSuccess : w.disabledSuccess, { pluginName: r }),
        );
      }),
      (l[6] = x),
      (l[7] = _),
      (l[8] = D))
    : (D = l[8]);
  let O;
  l[9] !== x || l[10] !== y || l[11] !== _
    ? ((O = (e, t, n) => {
        (a.error(`Failed to update plugin enabled state`, { safe: {}, sensitive: { error: e } }),
          n?.previousUserConfig && y.setQueryData(f, n.previousUserConfig));
        for (let [e, t] of n?.previousPluginLists ?? []) y.setQueryData(e, t);
        _.get(p).danger(x.formatMessage(w.toggleError));
      }),
      (l[9] = x),
      (l[10] = y),
      (l[11] = _),
      (l[12] = O))
    : (O = l[12]);
  let k;
  l[13] === b
    ? (k = l[14])
    : ((k = async () => {
        await N(b);
      }),
      (l[13] = b),
      (l[14] = k));
  let M;
  l[15] !== C || l[16] !== T || l[17] !== D || l[18] !== O || l[19] !== k
    ? ((M = { mutationFn: C, onMutate: T, onSuccess: D, onError: O, onSettled: k }),
      (l[15] = C),
      (l[16] = T),
      (l[17] = D),
      (l[18] = O),
      (l[19] = k),
      (l[20] = M))
    : (M = l[20]);
  let P = i(M),
    F = P.isPending ? P.variables?.pluginId : null,
    I;
  return (
    l[21] !== P.mutateAsync || l[22] !== F
      ? ((I = { pendingPluginId: F, setPluginEnabled: P.mutateAsync }),
        (l[21] = P.mutateAsync),
        (l[22] = F),
        (l[23] = I))
      : (I = l[23]),
    I
  );
}
function E(e) {
  let [t, n] = e;
  return n == null || b(t) || !M(n) ? [] : [[t, n]];
}
function D(t) {
  let r = (0, S.c)(17),
    s = t?.hostId ?? `local`,
    l = n(o),
    d = u(),
    f = c(),
    m;
  r[0] !== s || r[1] !== l
    ? ((m = async (t) => {
        let { marketplaceName: n, pluginId: r, pluginName: i, requestPluginId: a } = t,
          o = _(r);
        (o != null && (await y(l, o, !0)),
          await e(`uninstall-plugin`, { hostId: s, pluginId: a ?? r }),
          await v({ hostId: s, marketplaceName: n, pluginName: i }));
      }),
      (r[0] = s),
      (r[1] = l),
      (r[2] = m))
    : (m = r[2]);
  let h, g;
  r[3] !== f || r[4] !== l
    ? ((h = (e, t) => {
        let { pluginDisplayName: n } = t;
        l.get(p).success(f.formatMessage(w.uninstallSuccess, { pluginName: n }));
      }),
      (g = (e) => {
        (a.error(`Failed to uninstall plugin`, { safe: {}, sensitive: { error: e } }),
          l.get(p).danger(f.formatMessage(w.uninstallError)));
      }),
      (r[3] = f),
      (r[4] = l),
      (r[5] = h),
      (r[6] = g))
    : ((h = r[5]), (g = r[6]));
  let b;
  r[7] === d
    ? (b = r[8])
    : ((b = () => {
        N(d);
      }),
      (r[7] = d),
      (r[8] = b));
  let x;
  r[9] !== m || r[10] !== h || r[11] !== g || r[12] !== b
    ? ((x = { mutationFn: m, onSuccess: h, onError: g, onSettled: b }),
      (r[9] = m),
      (r[10] = h),
      (r[11] = g),
      (r[12] = b),
      (r[13] = x))
    : (x = r[13]);
  let C = i(x),
    T = C.isPending ? (C.variables?.pluginId ?? null) : null,
    E;
  return (
    r[14] !== C.mutateAsync || r[15] !== T
      ? ((E = { pendingUninstallPluginId: T, uninstallPlugin: C.mutateAsync }),
        (r[14] = C.mutateAsync),
        (r[15] = T),
        (r[16] = E))
      : (E = r[16]),
    E
  );
}
function O(t) {
  let r = (0, S.c)(16),
    s = t?.hostId ?? `local`,
    l = n(o),
    d = u(),
    f = c(),
    m;
  r[0] === s
    ? (m = r[1])
    : ((m = async (t) => {
        let { marketplaceName: n } = t;
        await e(`remove-marketplace`, { hostId: s, marketplaceName: n });
      }),
      (r[0] = s),
      (r[1] = m));
  let h, g;
  r[2] !== f || r[3] !== l
    ? ((h = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        l.get(p).success(
          f.formatMessage(
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
        (a.error(`Failed to remove marketplace`, { safe: {}, sensitive: { error: e } }),
          l
            .get(p)
            .danger(
              f.formatMessage({
                id: `plugins.marketplace.removeError`,
                defaultMessage: `Failed to remove marketplace`,
                description: `Toast message shown when removing a marketplace fails`,
              }),
            ));
      }),
      (r[2] = f),
      (r[3] = l),
      (r[4] = h),
      (r[5] = g))
    : ((h = r[4]), (g = r[5]));
  let _;
  r[6] === d
    ? (_ = r[7])
    : ((_ = async () => {
        await N(d);
      }),
      (r[6] = d),
      (r[7] = _));
  let v;
  r[8] !== m || r[9] !== h || r[10] !== g || r[11] !== _
    ? ((v = { mutationFn: m, onSuccess: h, onError: g, onSettled: _ }),
      (r[8] = m),
      (r[9] = h),
      (r[10] = g),
      (r[11] = _),
      (r[12] = v))
    : (v = r[12]);
  let y = i(v),
    b = y.isPending ? (y.variables?.marketplaceName ?? null) : null,
    x;
  return (
    r[13] !== y.mutateAsync || r[14] !== b
      ? ((x = { pendingRemoveMarketplaceName: b, removeMarketplace: y.mutateAsync }),
        (r[13] = y.mutateAsync),
        (r[14] = b),
        (r[15] = x))
      : (x = r[15]),
    x
  );
}
function k(t) {
  let r = (0, S.c)(19),
    s = t?.hostId ?? `local`,
    l = n(o),
    d = u(),
    f = c(),
    m;
  r[0] === s
    ? (m = r[1])
    : ((m = async (t) => {
        let { marketplaceName: n } = t;
        return e(`upgrade-marketplaces`, { hostId: s, marketplaceName: n ?? null });
      }),
      (r[0] = s),
      (r[1] = m));
  let h, g;
  r[2] !== f || r[3] !== l
    ? ((h = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        if (e.errors.length > 0) {
          (a.error(`Failed to upgrade marketplaces`, {
            safe: { errorCount: e.errors.length },
            sensitive: { errors: e.errors },
          }),
            l
              .get(p)
              .danger(
                f.formatMessage(n == null ? w.marketplacesUpgradeError : w.marketplaceUpgradeError),
              ));
          return;
        }
        if (n != null) {
          l.get(p).success(f.formatMessage(w.marketplaceUpgradeSuccess, { marketplaceName: n }));
          return;
        }
        l.get(p).success(f.formatMessage(w.marketplacesUpgradeSuccess));
      }),
      (g = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        (a.error(`Failed to upgrade marketplaces`, { safe: {}, sensitive: { error: e } }),
          l
            .get(p)
            .danger(
              f.formatMessage(
                n == null ? w.marketplacesUpgradeRequestError : w.marketplaceUpgradeError,
              ),
            ));
      }),
      (r[2] = f),
      (r[3] = l),
      (r[4] = h),
      (r[5] = g))
    : ((h = r[4]), (g = r[5]));
  let _;
  r[6] === d
    ? (_ = r[7])
    : ((_ = async () => {
        await N(d);
      }),
      (r[6] = d),
      (r[7] = _));
  let v;
  r[8] !== m || r[9] !== h || r[10] !== g || r[11] !== _
    ? ((v = { mutationFn: m, onSuccess: h, onError: g, onSettled: _ }),
      (r[8] = m),
      (r[9] = h),
      (r[10] = g),
      (r[11] = _),
      (r[12] = v))
    : (v = r[12]);
  let y = i(v),
    b = y.isPending && y.variables.marketplaceName == null,
    x = y.isPending && y.variables.marketplaceName != null ? y.variables.marketplaceName : null,
    C;
  r[13] === y
    ? (C = r[14])
    : ((C = async (e) => {
        let t = e === void 0 ? {} : e;
        await y.mutateAsync(t);
      }),
      (r[13] = y),
      (r[14] = C));
  let T;
  return (
    r[15] !== b || r[16] !== x || r[17] !== C
      ? ((T = {
          isUpgradingMarketplaces: b,
          pendingUpgradeMarketplaceName: x,
          upgradeMarketplaces: C,
        }),
        (r[15] = b),
        (r[16] = x),
        (r[17] = C),
        (r[18] = T))
      : (T = r[18]),
    T
  );
}
function A(e, t, n) {
  let r = typeof e == `object` && e && !Array.isArray(e) ? e : {},
    i = r[t];
  return {
    ...r,
    [t]: typeof i == `object` && i && !Array.isArray(i) ? { ...i, enabled: n } : { enabled: n },
  };
}
function j(e, t, n) {
  return {
    ...e,
    plugins: e.plugins.map((e) =>
      e.plugin.id !== t || e.plugin.enabled === n
        ? e
        : { ...e, plugin: { ...e.plugin, enabled: n } },
    ),
  };
}
function M(e) {
  return typeof e == `object` && !!e && `plugins` in e && Array.isArray(e.plugins);
}
async function N(e) {
  await Promise.all([e(m), e(h), e(x), e(f), e(C)]);
}
export { k as i, D as n, T as r, O as t };
//# sourceMappingURL=plugins-availability.js.map
