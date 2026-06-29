const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./browser-profile-import-dialog.js",
      "./chunk.js",
      "./app-scope.js",
      "./isEqual.js",
      "./jsx-runtime.js",
      "./lib.js",
      "./tslib.es6.js",
      "./checkbox.js",
      "./dist-6.js",
      "./react-dom.js",
      "./dist-9.js",
      "./clsx-Cir5-jBH.js",
      "./check-md.js",
      "./minus.js",
      "./dialog-layout-B.js",
      "./Combination.js",
      "./window-zoom-context.js",
      "./button.js",
      "./spinner.js",
      "./use-reduced-motion-2.js",
      "./reduced-motion-preference.js",
      "./src-2.js",
      "./setting-storage.js",
      "./vscode-api.js",
      "./tooltip-dismiss.js",
      "./with-window.js",
      "./x.js",
      "./dialog-layout.css",
      "./dropdown.js",
      "./dist-4.js",
      "./dist-3.js",
      "./floating-ui.react-dom.js",
      "./proxy.js",
      "./single-value.js",
      "./AnimatePresence.js",
      "./tooltip.js",
      "./chevron-right.js",
      "./search.js",
      "./animations.js",
      "./dropdown.css",
      "./statsig.js",
      "./google-chrome.js",
      "./toggle.js",
      "./links-p.js",
      "./check-circle-filled.js",
      "./chevron.js",
      "./browser-profile-import-query.js",
      "./queryOptions.js",
      "./settings-shared.js",
      "./settings-row.js",
      "./settings-surface.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk.js";
import { n as t } from "./jsx-runtime.js";
import { a as n, z as r } from "./app-scope.js";
import { ii as i } from "./app-server-manager-signals.js";
import { B as a, G as o, H as s, W as c } from "./src-2.js";
import { t as l } from "./preload-helper.js";
import { r as u } from "./modal-controller-state.js";
import { i as d } from "./use-in-app-browser-use-availability.js";
var f = (0, e(t(), 1).lazy)(async () => ({
  default: (
    await l(
      async () => {
        let { BrowserProfileImportDialogModal: e } = await import(
          `./browser-profile-import-dialog.js`
        );
        return { BrowserProfileImportDialogModal: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50,
      ]),
      import.meta.url,
    )
  ).BrowserProfileImportDialogModal,
}));
function p(e, t) {
  return t == null ? !1 : (u(e, f, { service: t }), !0);
}
var m = r();
function h(e) {
  let t = (0, m.c)(23),
    { hostId: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = d(r),
    a = g(),
    o;
  t[2] !== i || t[3] !== a.contactInfo.enabled || t[4] !== a.contactInfo.isLoading
    ? ((o = _({
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
  t[6] !== i || t[7] !== a.extensions.enabled || t[8] !== a.extensions.isLoading
    ? ((s = _({
        featureEnabled: a.extensions.enabled,
        isFeatureLoading: a.extensions.isLoading,
        inAppBrowser: i,
      })),
      (t[6] = i),
      (t[7] = a.extensions.enabled),
      (t[8] = a.extensions.isLoading),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] !== i || t[11] !== a.passwordManager.enabled || t[12] !== a.passwordManager.isLoading
    ? ((c = _({
        featureEnabled: a.passwordManager.enabled,
        isFeatureLoading: a.passwordManager.isLoading,
        inAppBrowser: i,
      })),
      (t[10] = i),
      (t[11] = a.passwordManager.enabled),
      (t[12] = a.passwordManager.isLoading),
      (t[13] = c))
    : (c = t[13]);
  let l;
  t[14] !== i || t[15] !== a.siteSettings.enabled || t[16] !== a.siteSettings.isLoading
    ? ((l = _({
        featureEnabled: a.siteSettings.enabled,
        isFeatureLoading: a.siteSettings.isLoading,
        inAppBrowser: i,
      })),
      (t[14] = i),
      (t[15] = a.siteSettings.enabled),
      (t[16] = a.siteSettings.isLoading),
      (t[17] = l))
    : (l = t[17]);
  let u;
  return (
    t[18] !== o || t[19] !== s || t[20] !== c || t[21] !== l
      ? ((u = { contactInfo: o, extensions: s, passwordManager: c, siteSettings: l }),
        (t[18] = o),
        (t[19] = s),
        (t[20] = c),
        (t[21] = l),
        (t[22] = u))
      : (u = t[22]),
    u
  );
}
function g() {
  let e = (0, m.c)(13),
    t = n(i, o),
    r = n(i, s),
    l = n(i, a),
    u = n(i, c),
    d = t.data === !0 && l.data === !0,
    f = t.isLoading || l.isLoading,
    p;
  e[0] !== d || e[1] !== f
    ? ((p = { enabled: d, isLoading: f }), (e[0] = d), (e[1] = f), (e[2] = p))
    : (p = e[2]);
  let h = p,
    g = t.data === !0 && r.data === !0,
    _ = t.isLoading || r.isLoading,
    v;
  e[3] !== g || e[4] !== _
    ? ((v = { enabled: g, isLoading: _ }), (e[3] = g), (e[4] = _), (e[5] = v))
    : (v = e[5]);
  let y = t.data === !0 && u.data === !0,
    b = t.isLoading || u.isLoading,
    x;
  e[6] !== y || e[7] !== b
    ? ((x = { enabled: y, isLoading: b }), (e[6] = y), (e[7] = b), (e[8] = x))
    : (x = e[8]);
  let S;
  return (
    e[9] !== h || e[10] !== v || e[11] !== x
      ? ((S = { contactInfo: h, extensions: v, passwordManager: h, siteSettings: x }),
        (e[9] = h),
        (e[10] = v),
        (e[11] = x),
        (e[12] = S))
      : (S = e[12]),
    S
  );
}
function _({ featureEnabled: e, inAppBrowser: t, isFeatureLoading: n }) {
  return { enabled: t.enabled && !t.isLoading && e, isLoading: t.isLoading || n };
}
export { p as n, h as t };
//# sourceMappingURL=browser-use-settings-visibility.js.map
