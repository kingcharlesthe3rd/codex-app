import { s as e, t, z as n } from "./app-scope.js";
import { a as r, u as i } from "./vscode-api.js";
import { _a as a, ha as o, pa as s, wr as c } from "./src-2.js";
import { l, t as u } from "./persisted-signal.js";
import { a as d, o as f } from "./statsig.js";
import { t as p } from "./use-global-state.js";
var m = n(),
  h = `realtime-voice-config-override`,
  g = { enabled: !1, config: `` },
  _ = u(h, g),
  v = s(o(), a()),
  y = r(t, `is-packaged`, { enabled: !1, staleTime: i.FIVE_SECONDS });
function b() {
  let t = (0, m.c)(6),
    { value: n } = d(`1193530394`),
    { data: r } = e(y),
    i = e(_) ?? l(`realtime-voice-config-override`, g),
    a = x(n, { canUseLocalOverride: !1, override: i }),
    o;
  return (
    t[0] !== !1 || t[1] !== i || t[2] !== n || t[3] !== a || t[4] !== !0
      ? ((o = { ...a, canUseLocalOverride: !1, isReady: !0, override: i, statsigValue: n }),
        (t[0] = !1),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a),
        (t[4] = !0),
        (t[5] = o))
      : (o = t[5]),
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
    { data: t } = p(c.REALTIME_VOICE_MODE_DEBUG_DISABLED);
  return e && t !== !0;
}
export { b as i, g as n, _ as r, C as t };
//# sourceMappingURL=use-is-thread-realtime-enabled.js.map
