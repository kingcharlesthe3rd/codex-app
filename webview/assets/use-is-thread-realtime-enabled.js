import { R as e, s as t, t as n } from "./app-scope.js";
import { a as r, u as i } from "./vscode-api.js";
import { ea as a, ia as o, mr as s, na as c } from "./src-1.js";
import { Br as l, t as u } from "./persisted-signal.js";
import { a as d, o as f } from "./statsig.js";
import { t as p } from "./use-global-state.js";
var m = e(),
  h = `realtime-voice-config-override`,
  g = { enabled: !1, config: `` },
  _ = u(h, g),
  v = a(c(), o()),
  y = r(n, `is-packaged`, { enabled: !1, staleTime: i.FIVE_SECONDS });
function b() {
  let e = (0, m.c)(6),
    { value: n } = d(`1193530394`),
    { data: r } = t(y),
    i = t(_) ?? l(`realtime-voice-config-override`, g),
    a = x(n, { canUseLocalOverride: !1, override: i }),
    o;
  return (
    e[0] !== !1 || e[1] !== i || e[2] !== n || e[3] !== a || e[4] !== !0
      ? ((o = { ...a, canUseLocalOverride: !1, isReady: !0, override: i, statsigValue: n }),
        (e[0] = !1),
        (e[1] = i),
        (e[2] = n),
        (e[3] = a),
        (e[4] = !0),
        (e[5] = o))
      : (o = e[5]),
    o
  );
}
function x(e, { canUseLocalOverride: t, override: n }) {
  if (!t || !n.enabled) return { error: null, source: `statsig`, value: e };
  let r = S(n.config);
  return r == null
    ? {
        error: `Local realtime config override must be a valid JSON object.`,
        source: `statsig`,
        value: e,
      }
    : { error: null, source: `local-override`, value: { ...e, ...r } };
}
function S(e) {
  try {
    let t = v.safeParse(JSON.parse(e));
    return t.success ? t.data : null;
  } catch {
    return null;
  }
}
function C() {
  let e = f(`2380644311`),
    { data: t } = p(s.REALTIME_VOICE_MODE_DEBUG_DISABLED);
  return e && t !== !0;
}
export { b as i, g as n, _ as r, C as t };
//# sourceMappingURL=use-is-thread-realtime-enabled.js.map
