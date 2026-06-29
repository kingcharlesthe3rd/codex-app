const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./browser-profile-import-dialog.js",
      "./chunk.js",
      "./app-scope-CWE-zIhQ.js",
      "./isEqual.js",
      "./jsx-runtime.js",
      "./lib-1.js",
      "./tslib.es6.js",
      "./checkbox.js",
      "./dist-12.js",
      "./react-dom.js",
      "./dist-1.js",
      "./clsx.js",
      "./check-md.js",
      "./minus.js",
      "./dialog-layout.js",
      "./Combination.js",
      "./window-zoom-context.js",
      "./button-oF-qgtAS.js",
      "./spinner.js",
      "./use-reduced-motion-1.js",
      "./reduced-motion-preference-BFM-v_UB.js",
      "./src.js",
      "./setting-storage.js",
      "./vscode-api.js",
      "./tooltip-dismiss.js",
      "./with-window.js",
      "./x.js",
      "./dialog-layout.css",
      "./dropdown.js",
      "./dist-9.js",
      "./dist-8.js",
      "./floating-ui.react-dom.js",
      "./proxy.js",
      "./single-value.js",
      "./reduced-motion.js",
      "./AnimatePresence.js",
      "./tooltip-B.js",
      "./chevron-right.js",
      "./animations.js",
      "./dropdown.css",
      "./statsig.js",
      "./google-chrome.js",
      "./toggle.js",
      "./links.js",
      "./check-circle-filled.js",
      "./chevron.js",
      "./x-circle-filled-Do-SvWo6.js",
      "./browser-profile-import-query.js",
      "./queryOptions.js",
      "./settings-shared.js",
      "./settings-row.js",
      "./settings-surface.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { Z as n, a as r } from "./app-scope-CWE-zIhQ.js";
import { Or as i } from "./thread-context-inputs.js";
import { B as a, G as o, U as s, V as c, z as l } from "./src.js";
import { t as u } from "./preload-helper.js";
import { a as d } from "./use-is-plugins-enabled-Dn_J-WZf.js";
import { r as f } from "./modal-controller-state.js";
var p = (0, e(t(), 1).lazy)(async () => ({
  default: (
    await u(
      async () => {
        let { BrowserProfileImportDialogModal: e } = await import(
          `./browser-profile-import-dialog.js`
        );
        return { BrowserProfileImportDialogModal: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51,
      ]),
      import.meta.url,
    )
  ).BrowserProfileImportDialogModal,
}));
function m(e, t) {
  return t == null ? !1 : (f(e, p, { service: t }), !0);
}
var h = n();
function g(e) {
  let t = (0, h.c)(28),
    { hostId: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = d(r),
    a = _(),
    o;
  t[2] !== i || t[3] !== a.contactInfo.enabled || t[4] !== a.contactInfo.isLoading
    ? ((o = v({
        featureEnabled: a.contactInfo.enabled,
        isFeatureLoading: a.contactInfo.isLoading,
        inAppBrowser: i,
      })),
      (t[2] = i),
      (t[3] = a.contactInfo.enabled),
      (t[4] = a.contactInfo.isLoading),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== i || t[7] !== a.downloads.enabled || t[8] !== a.downloads.isLoading
    ? ((s = v({
        featureEnabled: a.downloads.enabled,
        isFeatureLoading: a.downloads.isLoading,
        inAppBrowser: i,
      })),
      (t[6] = i),
      (t[7] = a.downloads.enabled),
      (t[8] = a.downloads.isLoading),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] !== i || t[11] !== a.extensions.enabled || t[12] !== a.extensions.isLoading
    ? ((c = v({
        featureEnabled: a.extensions.enabled,
        isFeatureLoading: a.extensions.isLoading,
        inAppBrowser: i,
      })),
      (t[10] = i),
      (t[11] = a.extensions.enabled),
      (t[12] = a.extensions.isLoading),
      (t[13] = c))
    : (c = t[13]);
  let l;
  t[14] !== i || t[15] !== a.passwordManager.enabled || t[16] !== a.passwordManager.isLoading
    ? ((l = v({
        featureEnabled: a.passwordManager.enabled,
        isFeatureLoading: a.passwordManager.isLoading,
        inAppBrowser: i,
      })),
      (t[14] = i),
      (t[15] = a.passwordManager.enabled),
      (t[16] = a.passwordManager.isLoading),
      (t[17] = l))
    : (l = t[17]);
  let u;
  t[18] !== i || t[19] !== a.siteSettings.enabled || t[20] !== a.siteSettings.isLoading
    ? ((u = v({
        featureEnabled: a.siteSettings.enabled,
        isFeatureLoading: a.siteSettings.isLoading,
        inAppBrowser: i,
      })),
      (t[18] = i),
      (t[19] = a.siteSettings.enabled),
      (t[20] = a.siteSettings.isLoading),
      (t[21] = u))
    : (u = t[21]);
  let f;
  return (
    t[22] !== o || t[23] !== s || t[24] !== c || t[25] !== l || t[26] !== u
      ? ((f = { contactInfo: o, downloads: s, extensions: c, passwordManager: l, siteSettings: u }),
        (t[22] = o),
        (t[23] = s),
        (t[24] = c),
        (t[25] = l),
        (t[26] = u),
        (t[27] = f))
      : (f = t[27]),
    f
  );
}
function _() {
  let e = (0, h.c)(17),
    t = r(i, o),
    n = r(i, c),
    u = r(i, a),
    d = r(i, l),
    f = r(i, s),
    p = t.data === !0 && d.data === !0,
    m = t.isLoading || d.isLoading,
    g;
  e[0] !== p || e[1] !== m
    ? ((g = { enabled: p, isLoading: m }), (e[0] = p), (e[1] = m), (e[2] = g))
    : (g = e[2]);
  let _ = g,
    v = u.data === !0,
    y;
  e[3] !== u.isLoading || e[4] !== v
    ? ((y = { enabled: v, isLoading: u.isLoading }), (e[3] = u.isLoading), (e[4] = v), (e[5] = y))
    : (y = e[5]);
  let b = t.data === !0 && n.data === !0,
    x = t.isLoading || n.isLoading,
    S;
  e[6] !== b || e[7] !== x
    ? ((S = { enabled: b, isLoading: x }), (e[6] = b), (e[7] = x), (e[8] = S))
    : (S = e[8]);
  let C = t.data === !0 && f.data === !0,
    w = t.isLoading || f.isLoading,
    T;
  e[9] !== C || e[10] !== w
    ? ((T = { enabled: C, isLoading: w }), (e[9] = C), (e[10] = w), (e[11] = T))
    : (T = e[11]);
  let E;
  return (
    e[12] !== _ || e[13] !== T || e[14] !== y || e[15] !== S
      ? ((E = { contactInfo: _, downloads: y, extensions: S, passwordManager: _, siteSettings: T }),
        (e[12] = _),
        (e[13] = T),
        (e[14] = y),
        (e[15] = S),
        (e[16] = E))
      : (E = e[16]),
    E
  );
}
function v({ featureEnabled: e, inAppBrowser: t, isFeatureLoading: n }) {
  return { enabled: t.enabled && !t.isLoading && e, isLoading: t.isLoading || n };
}
export { m as n, g as t };
//# sourceMappingURL=browser-use-settings-visibility.js.map
