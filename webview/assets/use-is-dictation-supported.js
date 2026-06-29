import { o as e, u as t } from "./statsig.js";
import { n } from "./use-auth.js";
function r(r) {
  let a = n(r),
    o = e(`4100906017`),
    s = t();
  return !i() || !navigator?.mediaDevices?.getUserMedia || typeof MediaRecorder > `u`
    ? !1
    : a == null || a.isLoading || s
      ? null
      : o && a.authMethod === `chatgpt`;
}
function i() {
  switch (`electron`) {
    case `electron`:
    case `chrome-extension`:
    case `browser`:
      return !0;
    case `extension`:
      return !1;
  }
}
export { r as t };
//# sourceMappingURL=use-is-dictation-supported.js.map
