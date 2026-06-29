import { Cr as e, Dr as t, Tr as n, ft as r, kr as i, wr as a } from "./src-2.js";
`${i}${a}`;
var o = `${e}@${a}`;
function s(e) {
  let i = r(e);
  if (!(i == null || !t(i))) return n(e.slice(0, e.length - i.length - 1));
}
function c({ pluginId: e, enabled: t }) {
  return [{ keyPath: `plugins.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
export { c as n, s as r, o as t };
//# sourceMappingURL=plugin-config-edits.js.map
