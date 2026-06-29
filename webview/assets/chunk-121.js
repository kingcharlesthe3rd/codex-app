import { n as e } from "./rolldown-runtime.js";
import { n as t, r as n } from "./chunk-2.js";
var r,
  i = e(() => {
    (n(),
      (r = class {
        constructor(e) {
          ((this.init = e), (this.records = this.init()));
        }
        static {
          t(this, `ImperativeState`);
        }
        reset() {
          this.records = this.init();
        }
      }));
  });
export { i as n, r as t };
//# sourceMappingURL=chunk-121.js.map
