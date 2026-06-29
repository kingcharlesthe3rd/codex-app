import { Bt as e } from "./use-host-config.js";
import { Jt as t, Xt as n, Yi as r, v as i, xt as a, zi as o } from "./thread-context-inputs.js";
import { h as s } from "./vscode-api.js";
import { c } from "./config-queries.js";
import { s as l } from "./use-auth.js";
async function u(e, t) {
  return t === `local` &&
    r(e.get, `use-copilot-auth-if-available`) &&
    (await e.query.fetch(l)).available
    ? `copilot`
    : d((await e.get(i, t)?.getAccount())?.account ?? null);
}
function d(e) {
  if (e == null) return null;
  switch (e.type) {
    case `apiKey`:
      return `apikey`;
    case `amazonBedrock`:
      return `amazonBedrock`;
    case `chatgpt`:
      return `chatgpt`;
  }
}
async function f(r, i, c) {
  try {
    let s = await p(r, i),
      l = r.get(a, i);
    if (l.type !== `fromConfig`) return t(null, n(l, null), s);
    let { config: u } = await e(`read-config-for-host`, {
        hostId: i,
        includeLayers: !1,
        cwd: null,
      }),
      d = o(u);
    return d.service_tier == null
      ? t(await m(i, c ?? d.model), d.service_tier, s)
      : t(null, d.service_tier, s);
  } catch (e) {
    return (
      s.error(`Failed to read service tier for request`, { safe: {}, sensitive: { error: e } }),
      null
    );
  }
}
async function p(e, t) {
  let n = await u(e, t);
  return n === `chatgpt`
    ? (await e.query.fetch(c, { authMethod: n, hostId: t })).requirements?.featureRequirements
        ?.fast_mode !== !1
    : !1;
}
async function m(t, n) {
  try {
    let { data: r } = await e(`list-models-for-host`, {
      hostId: t,
      includeHidden: !0,
      cursor: null,
      limit: 100,
    });
    return n == null
      ? (r.find((e) => e.isDefault) ?? null)
      : (r.find((e) => e.model === n || e.id === n) ?? null);
  } catch (e) {
    return (
      s.error(`Failed to read service tier model`, { safe: {}, sensitive: { error: e } }), null
    );
  }
}
export { u as n, f as t };
//# sourceMappingURL=read-service-tier-for-request.js.map
