import { t as e } from "./jsx-runtime.js";
import { R as t } from "./app-scope.js";
import "./vscode-api.js";
import "./isEqual.js";
import "./src-4.js";
import { o as n } from "./lib-1.js";
import "./button.js";
import "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./links.js";
import "./chevron.js";
import { i as r } from "./settings-shared.js";
import { t as i } from "./settings-content-layout.js";
var a = t(),
  o = e();
function s() {
  let e = (0, a.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, o.jsx)(i, {
          title: (0, o.jsx)(r, { slug: `environments` }),
          subtitle: (0, o.jsx)(n, {
            id: `settings.section.external`,
            defaultMessage: `Opens in your browser during Alpha`,
            description: `Subtitle for settings sections that open in a browser during the Alpha build`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { s as SettingsExternalSection };
//# sourceMappingURL=settings-external-section.js.map
