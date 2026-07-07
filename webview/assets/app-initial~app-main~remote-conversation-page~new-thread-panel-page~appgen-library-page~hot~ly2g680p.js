import { n as e, s as t } from "./rolldown-runtime.js";
import {
  El as n,
  vl as r,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~fzo5ij6p.js";
import { Lm as i, Rm as a } from "./app-initial~app-main~onboarding-page.js";
import {
  mc as o,
  xc as s,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva.js";
function c(e) {
  let t = null;
  return (
    e.descendants((e) => {
      if (t != null || (e.type.name !== `skillMention` && e.type.name !== `pluginMention`))
        return !0;
      let n = l(typeof e.attrs.path == `string` ? e.attrs.path : ``);
      return (n != null && (t = n), !0);
    }),
    t
  );
}
function l(e) {
  let t = e.toLowerCase().replaceAll(`\\`, `/`);
  if (t.startsWith(d)) return u(t.slice(9).split(`@`)[0]);
  let n = t.match(/(?:^|\/)skills\/([^/]+)\/skill\.md$/)?.[1];
  return n == null ? null : u(n);
}
function u(e) {
  return e === `documents`
    ? `document`
    : e === `presentations`
      ? `presentation`
      : e === `spreadsheets`
        ? `spreadsheet`
        : null;
}
var d,
  f = e(() => {
    d = `plugin://`;
  });
function p(e, t) {
  if (t || c(e) != null) return null;
  let n = e.textContent;
  if (!_.test(n)) return null;
  let r = null;
  for (let { kind: e, pattern: t } of v)
    if (t.test(n)) {
      if (r != null) return null;
      r = e;
    }
  return r;
}
function m(e, t) {
  let { state: n, dispatch: r } = e.view,
    a = i.atEnd(n.doc),
    o = n.doc.resolve(a.from).nodeBefore,
    s = n.tr.setSelection(a);
  (o != null && (!o.isText || !/\s$/.test(o.text ?? ``)) && (s = s.insertText(` `)),
    r(s.setSelection(i.atEnd(s.doc))),
    e.insertMentionAtSelection(g(t)));
}
function h(e) {
  return `keyword-artifact-${e}`;
}
function g(e) {
  switch (e) {
    case `document`:
      return {
        kind: `plugin`,
        name: `documents`,
        displayName: `Documents`,
        path: o(`documents@openai-primary-runtime`),
        description: ``,
        iconSmall: ``,
      };
    case `presentation`:
      return {
        kind: `plugin`,
        name: `presentations`,
        displayName: `Presentations`,
        path: o(`presentations@openai-primary-runtime`),
        description: ``,
        iconSmall: ``,
      };
    case `spreadsheet`:
      return {
        kind: `plugin`,
        name: `spreadsheets`,
        displayName: `Spreadsheets`,
        path: o(`spreadsheets@openai-primary-runtime`),
        description: ``,
        iconSmall: ``,
      };
  }
}
var _,
  v,
  y = e(() => {
    (a(),
      s(),
      f(),
      (_ = /\b(?:build|create|design|draft|generate|make|prepare|produce|write)\b/i),
      (v = [
        { kind: `document`, pattern: /\b(?:doc|docs|document|documents)\b/i },
        { kind: `presentation`, pattern: /\b(?:presentation|presentations|slide|slides|deck)\b/i },
        { kind: `spreadsheet`, pattern: /\b(?:sheet|sheets|spreadsheet|spreadsheets|excel)\b/i },
      ]));
  }),
  b,
  x,
  S = e(() => {
    (t(n()),
      (b = r()),
      (x = (e) =>
        (0, b.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, b.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M5.69336 11.0557C7.05891 11.1944 8.12484 12.3479 8.125 13.75L8.11035 14.0273C7.97144 15.3928 6.81814 16.459 5.41602 16.459L5.13965 16.4443C3.86514 16.3149 2.85128 15.3018 2.72168 14.0273L2.70801 13.75C2.70818 12.2546 3.92061 11.0423 5.41602 11.042L5.69336 11.0557ZM5.41602 12.3721C4.65515 12.3724 4.03826 12.9891 4.03809 13.75C4.03826 14.5109 4.65515 15.1286 5.41602 15.1289C6.17714 15.1289 6.79475 14.5111 6.79492 13.75C6.79475 12.9889 6.17714 12.3721 5.41602 12.3721Z`,
              fill: `currentColor`,
            }),
            (0, b.jsx)(`path`, {
              d: `M16.8008 13.0986C17.1036 13.1608 17.3311 13.4288 17.3311 13.75C17.3311 14.0712 17.1036 14.3392 16.8008 14.4014L16.666 14.415H10.833C10.4659 14.4149 10.168 14.1172 10.168 13.75C10.168 13.3828 10.4659 13.0851 10.833 13.085H16.666L16.8008 13.0986Z`,
              fill: `currentColor`,
            }),
            (0, b.jsx)(`path`, {
              d: `M16.8008 5.59863C17.1036 5.66081 17.3311 5.92879 17.3311 6.25C17.3311 6.57121 17.1036 6.83919 16.8008 6.90137L16.666 6.91504H10.833C10.4659 6.91491 10.168 6.61719 10.168 6.25C10.168 5.88281 10.4659 5.58509 10.833 5.58496H16.666L16.8008 5.59863Z`,
              fill: `currentColor`,
            }),
            (0, b.jsx)(`path`, {
              d: `M7.13311 3.76578C7.35346 3.47216 7.771 3.4128 8.06475 3.63297C8.35843 3.85336 8.41789 4.27084 8.19757 4.56461L5.19757 8.56461C5.0819 8.71866 4.90439 8.81462 4.71221 8.82828C4.5201 8.84178 4.33083 8.77209 4.19464 8.6359L2.69464 7.1359C2.43512 6.87623 2.43512 6.45415 2.69464 6.19449C2.95429 5.93484 3.37633 5.93493 3.63604 6.19449L4.59307 7.15152L7.13311 3.76578Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
export { p as a, f as c, h as i, S as n, y as o, m as r, c as s, x as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~ly2g680p.js.map
