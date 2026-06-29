import { n as e } from "./rolldown-runtime.js";
import {
  CS as t,
  GS as n,
  HS as r,
  JS as i,
  KS as a,
  TS as o,
  US as s,
  VS as c,
  WS as l,
  kE as u,
  qS as d,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function f(e, t, { annotationModeEnabled: n, startSource: r }) {
  o(e, s, { ...g(t), annotationModeEnabled: n, startSource: v(r) });
}
function p(e, t) {
  o(e, i, { ...g(t) });
}
function m(e, t) {
  o(e, c, { ...g(t) });
}
function h(
  e,
  t,
  { annotationModeEnabled: n, annotationTargetKind: r, submitMode: i, submitSource: s },
) {
  o(e, a, {
    ...g(t),
    annotationModeEnabled: n,
    annotationTargetKind: r,
    submitMode: y(i),
    submitSource: b(s),
  });
}
function g({ artifactTabId: e, artifactType: t, importKind: n, threadId: r }) {
  return {
    artifactKind: _(t),
    artifactImportKind: n,
    artifactTabId: e ?? void 0,
    threadId: r ?? void 0,
  };
}
function _(e) {
  switch (e) {
    case `document`:
      return d.CODEX_ARTIFACT_KIND_DOCUMENT;
    case `notebook`:
      return d.CODEX_ARTIFACT_KIND_NOTEBOOK;
    case `pdf`:
      return d.CODEX_ARTIFACT_KIND_PDF;
    case `slides`:
      return d.CODEX_ARTIFACT_KIND_PRESENTATION;
    case `spreadsheet`:
      return d.CODEX_ARTIFACT_KIND_SPREADSHEET;
  }
}
function v(e) {
  switch (e) {
    case `annotation_mode_pointer`:
      return r.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER;
    case `ask_codex_button`:
      return r.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON;
    case `ask_codex_shortcut`:
      return r.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT;
  }
}
function y(e) {
  switch (e) {
    case `direct`:
      return l.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT;
    case `saved`:
      return l.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED;
  }
}
function b(e) {
  switch (e) {
    case `button`:
      return n.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON;
    case `dictation`:
      return n.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION;
    case `keyboard`:
      return n.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD;
  }
}
var x = e(() => {
  (u(), t());
});
export { p as a, h as i, m as n, f as r, x as t };
//# sourceMappingURL=artifact-analytics.js.map
