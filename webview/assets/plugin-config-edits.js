import { cr as e, ir as t, mt as n, nr as r, or as i, rr as a } from "./src-4.js";
`${e}${a}`;
var o = `${r}@${a}`;
function s(e) {
  let r = n(e);
  if (!(r == null || !i(r))) return t(e.slice(0, e.length - r.length - 1));
}
function c({ pluginId: e, enabled: t }) {
  return [{ keyPath: `plugins.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
export { c as n, s as r, o as t };
//# sourceMappingURL=plugin-config-edits.js.map
