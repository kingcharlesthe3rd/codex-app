import { n as e } from "./rolldown-runtime.js";
import {
  $P as t,
  AB as n,
  QP as r,
  UA as i,
  WA as a,
  _V as o,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
var s,
  c,
  l = e(() => {
    (n(),
      a(),
      t(),
      (s = [`hotkey-window-hotkey-state`]),
      (c = o(r, () => ({
        queryKey: s,
        queryFn: async () => {
          let e = i.hotkeyWindowHotkeys;
          return e == null
            ? {
                supported: !1,
                configuredHotkey: null,
                isGateEnabled: !1,
                isDevMode: !1,
                isDevOverrideEnabled: !1,
                isActive: !1,
              }
            : e.getState();
        },
      }))));
  });
export { c as n, l as r, s as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu.js.map
