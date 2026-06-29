import { n as e } from "./rolldown-runtime.js";
import {
  Q as t,
  Wt as n,
  Z as r,
  hi as i,
  nt as a,
  tt as o,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
import {
  Cc as s,
  Cu as c,
  Iv as l,
  Lv as u,
  Su as ee,
  _u as d,
  wc as te,
  yu as f,
} from "./app-initial~app-main~onboarding-page~select-workspace-page.js";
import {
  Cn as ne,
  G as re,
  K as p,
  Sn as ie,
  Tn as m,
  W as h,
  bn as ae,
  et as oe,
  q as se,
  tt as ce,
  wn as le,
  xn as ue,
} from "./app-initial~app-main~onboarding-page.js";
function de({ cwd: e = null, projectlessOutputDirectory: t = null, title: n, turns: r }) {
  let i = [],
    a = H(e);
  i.push(`# ${we(n ?? `Codex conversation`)}`);
  for (let n of r) {
    let r = fe(n, e, a, t);
    r != null && i.push(r);
  }
  return `${i
    .join(`

`)
    .trimEnd()}\n`;
}
function fe(e, t, n, r) {
  let a = [],
    o = e.cwd == null ? n : H(e.cwd),
    s =
      r == null
        ? void 0
        : (n) =>
            te({
              cwd: e.cwd ?? (t == null ? null : i(t)),
              projectlessOutputDirectory: r,
              resourcePath: n,
            }),
    {
      userItems: c,
      assistantItem: l,
      agentItems: u,
      automationUpdateItems: d,
      toolOutputItems: f,
      postAssistantItems: p,
      systemEventItem: m,
      remoteTaskCreatedItems: h,
      personalityChangedItems: ae,
      forkedFromConversationItems: oe,
      modelChangedItems: de,
      modelReroutedItems: fe,
      todoListItem: _,
      proposedPlanItem: v,
      planImplementationItem: b,
      mcpServerElicitationItems: x,
      permissionRequestItems: S,
      approvalItem: C,
      userInputItem: w,
    } = re(
      s == null
        ? e.items
        : e.items.map((e) =>
            e.type === `assistant-message` ? { ...e, content: ee(e.content, s) } : e,
          ),
      e.status,
    );
  for (let e of de) N(a, g(e, o));
  for (let e of c) N(a, pe(e, o));
  for (let e of fe) N(a, g(e, o));
  let T = [],
    { renderableAgentItems: E } = se({
      agentItems: u,
      isTurnInProgress: e.status === `in_progress`,
      isAnyNonAgentItemInProgress: ce(l) || ce(v),
    }),
    D = ne({
      units: ie({
        units: ue({ units: le(E), isActivitySliceClosed: l != null, conversationDetailLevel: Q }),
      }),
      isActivitySliceClosed: l != null,
    });
  for (let e of D) N(T, he(e, o));
  for (let e of d) N(T, g(e, o));
  m != null && N(T, g(m, o));
  for (let e of f) N(T, g(e, o));
  for (let e of p) N(T, g(e, o));
  (_ != null && N(T, g(_, o)), v != null && N(T, g(v, o)), b != null && N(T, g(b, o)));
  for (let e of x) N(T, g(e, o));
  for (let e of S) N(T, g(e, o));
  (C != null && N(T, g(C, o)),
    w != null && N(T, g(w, o)),
    T.length > 0 &&
      a.push(
        Te(
          Pe(T.length),
          T.join(`

`),
        ),
      ),
    l != null && N(a, y(l, { pathContext: o })));
  for (let e of h) N(a, g(e, o));
  for (let e of ae) N(a, g(e, o));
  for (let e of oe) N(a, g(e, o));
  return a.length === 0
    ? null
    : a.join(`

`);
}
function g(e, t) {
  switch (e.type) {
    case `user-message`:
      return _(e, { escapeDetailsTags: !0, pathContext: t });
    case `assistant-message`:
      return y(e, { escapeDetailsTags: !0, pathContext: t });
    case `reasoning`:
      return null;
    case `proposed-plan`:
      return j(`Plan`, e.content);
    case `todo-list`:
      return C(e);
    case `exec`:
      return b(e);
    case `patch`:
      return x(e);
    case `turn-diff`:
      return S(e);
    case `web-search`:
      return `Searched the web for ${G(e.query)}`;
    case `generated-image`:
      return me(e.src, e.status);
    case `userInput`:
      return M(
        e.completed ? `User input request` : `User input requested`,
        e.questions.map((e) => `- ${e.question}`),
      );
    case `user-input-response`:
      return M(
        `User input response`,
        e.questionsAndAnswers.flatMap((e) => [
          `- ${e.question}`,
          ...e.answers.map((e) => `  - ${e}`),
        ]),
      );
    case `mcp-server-elicitation`:
      return M(`MCP server elicitation`, [
        e.completed ? `Status: completed` : `Status: pending`,
        `Action: ${e.action ?? `none`}`,
      ]);
    case `permission-request`:
      return M(`Permission request`, [
        e.completed ? `Status: completed` : `Status: pending`,
        `Reason: ${e.reason ?? `Not provided`}`,
        `Response: ${e.response == null ? `none` : `granted`}`,
      ]);
    case `mcp-tool-call`:
      return w(e);
    case `automation-update`:
      return M(`Scheduled task update`, [
        `Mode: ${e.result?.mode ?? `pending`}`,
        `Automation ID: ${e.result?.automationId ?? `pending`}`,
      ]);
    case `dynamic-tool-call`:
      return M(`Tool call`, [
        `Tool: ${e.tool}`,
        e.completed ? `Status: completed` : `Status: running`,
      ]);
    case `worktree-init`:
      return M(`Worktree initialization`, [
        `Worktree: created`,
        e.setup == null ? null : `Environment setup: ${e.setup.outcome}`,
      ]);
    case `automatic-approval-review`:
      return E(e);
    case `multi-agent-action`:
      return M(`Subagent action`, [
        `Action: ${e.action}`,
        `Status: ${e.status}`,
        `Receiver threads: ${e.receiverThreads.length}`,
        e.prompt == null ? null : `Prompt: ${e.prompt}`,
      ]);
    case `subagent-activity`:
      return null;
    case `plan-implementation`:
      return M(`Plan implementation`, [
        e.isCompleted ? `Status: completed` : `Status: running`,
        e.planContent,
      ]);
    case `remote-task-created`:
      return M(`Remote task created`, [`Task ID: ${e.taskId}`]);
    case `context-compaction`:
      return M(`Context compaction`, [
        `Source: ${e.source}`,
        e.completed ? `Status: completed` : `Status: running`,
      ]);
    case `personality-changed`:
      return M(`Personality changed`, [`Personality: ${e.personality}`]);
    case `forked-from-conversation`:
      return M(`Forked conversation`, [`Source conversation: ${e.sourceConversationId}`]);
    case `model-changed`:
      return M(`Model changed`, [`${e.fromModel} -> ${e.toModel}`]);
    case `model-rerouted`:
      return M(`Model rerouted`, [`${e.fromModel} -> ${e.toModel}`, `Reason: ${e.reason}`]);
    case `auto-review-interruption-warning`:
      return null;
    case `system-error`:
      return j(`System error`, e.content);
    case `stream-error`:
      return M(`Stream error`, [e.content, e.additionalDetails]);
    case `realtime-transcript`:
      return M(
        `Realtime transcript`,
        e.entries.map(({ role: e, text: t }) => `${e}: ${t}`),
      );
    case `steered`:
    case `worked-for`:
      return null;
  }
}
function pe(e, t) {
  let n = _(e, { pathContext: t });
  return n == null ? null : F(n);
}
function _(e, { escapeDetailsTags: t = !1, pathContext: n = $ } = {}) {
  let r = [],
    i = L(e.message, n).trim();
  i.length > 0 && r.push(i);
  let a = v(e, n);
  if ((a.length > 0 && r.push(M(`User context`, a)), r.length === 0)) return null;
  let o = r.join(`

`);
  return t ? W(o) : o;
}
function v(e, t) {
  let n = [];
  if (e.attachments.length > 0) {
    n.push(`Attachments:`);
    for (let r of e.attachments) n.push(`- ${r.label}: ${R(r.path, t)}`);
  }
  if (e.images.length > 0) {
    n.push(`Images:`);
    for (let r of e.images) n.push(`- ${R(r, t)}`);
  }
  if (e.comments != null && e.comments.length > 0) {
    n.push(`Comments:`);
    for (let r of e.comments) {
      let e = r.lineRange == null ? `` : ` ${G(r.lineRange)}`;
      n.push(
        `- ${z(r.path, t)}${e}: ${I(r.body).replaceAll(
          `
`,
          ` `,
        )}`,
      );
    }
  }
  return (
    e.referencesPriorConversation && n.push(`Referenced prior conversation`),
    e.reviewMode && n.push(`Mode: code review`),
    e.pullRequestFixMode && n.push(`Mode: pull request fix`),
    e.autoResolveSync && n.push(`Mode: auto resolve merge`),
    e.pullRequestCheckNames != null &&
      e.pullRequestCheckNames.length > 0 &&
      n.push(`Pull request checks: ${e.pullRequestCheckNames.join(`, `)}`),
    e.pullRequestMergeConflictNumber !== void 0 &&
      n.push(
        e.pullRequestMergeConflictNumber == null
          ? `Pull request merge conflict`
          : `Pull request merge conflict: #${e.pullRequestMergeConflictNumber}`,
      ),
    n
  );
}
function y(e, { escapeDetailsTags: t = !1, pathContext: n = $ } = {}) {
  let r = L(e.content, n).trim();
  return r.length === 0 ? null : t ? W(r) : r;
}
function b(e) {
  let t = [],
    n = u(e.cmd);
  t.push(q(`bash`, `$ ${n}`));
  let r = e.output?.aggregatedOutput;
  if (r != null) {
    let e = I(r);
    e.trim().length > 0 && t.push(q(`text`, e));
  }
  return (
    t.push(Ve(e)),
    N(t, D(e.automaticApprovalReviews)),
    P(
      `Ran ${K(n)}`,
      t.join(`

`),
    )
  );
}
function x(e) {
  let t = Object.entries(e.changes).flatMap(([e, t]) => {
    let n = d(e, t);
    if (n == null || n.trim().length === 0) return [];
    let r = Be(n);
    return [P(`${ze(t.type)} ${K(e)} +${r.additions} -${r.deletions}`, q(`diff`, n))];
  });
  return (
    N(t, D(e.automaticApprovalReviews)),
    t.length === 0
      ? null
      : t.join(`
`)
  );
}
function S(e) {
  return P(`Diff`, q(`diff`, e.unifiedDiff));
}
function C(e) {
  let t = [];
  return (
    e.explanation != null && e.explanation.trim().length > 0 && t.push(U(e.explanation).trim()),
    t.push(
      e.plan.map((e) => `- [${Ce(e.status)}] ${U(e.step)}`).join(`
`),
    ),
    P(
      `Plan`,
      t.join(`

`),
    )
  );
}
function w(e) {
  let t = [];
  if (
    (t.push(`MCP tool call\n\n${U(`${e.invocation.server}.${e.invocation.tool}`)}`),
    t.push(q(`json`, Y(e.invocation.arguments))),
    N(t, D(e.automaticApprovalReviews)),
    e.result == null)
  )
    return (
      t.push(e.completed ? `Result: none` : `Status: running`),
      t.join(`

`)
    );
  if (e.result.type === `error`)
    return (
      t.push(U(`Error: ${e.result.error}`)),
      t.join(`

`)
    );
  let n = e.result.content.map(T).filter((e) => e.length > 0).join(`

`);
  return (
    n.length > 0 && t.push(n),
    e.result.structuredContent != null && t.push(q(`json`, Y(e.result.structuredContent))),
    t.join(`

`)
  );
}
function T(e) {
  switch (e.type) {
    case `text`:
      return q(`text`, e.text);
    case `image`:
      return U(`Image output: ${e.mimeType}`);
    case `audio`:
      return U(`Audio output: ${e.mimeType}`);
    case `resource_link`:
      return U(`Resource: ${e.title ?? e.name ?? e.uri} (${e.uri})`);
    case `embedded_resource`: {
      let t = e.resource.title ?? e.resource.name ?? e.resource.uri;
      return e.resource.text != null && e.resource.text.trim().length > 0
        ? `${U(`Resource: ${t}`)}\n\n${q(`text`, e.resource.text)}`
        : U(`Resource: ${t}`);
    }
    case `unknown`:
      return q(`json`, Y(e.raw));
  }
}
function E(e) {
  return M(`Auto-review`, [
    `Status: ${e.status}`,
    e.riskLevel == null ? null : `Risk: ${e.riskLevel}`,
    e.rationale == null ? null : `Rationale: ${e.rationale}`,
  ]);
}
function D(e) {
  return e == null
    ? null
    : e.map(E).join(`

`);
}
function me(e, t) {
  return e == null
    ? M(`Generated image`, [`Status: ${t}`])
    : `Generated image\n\n![Generated image](${e})`;
}
function he(e, t) {
  if (e.kind === `collapsed-tool-activity`) {
    let n = Ie(e.summary);
    if (!ae(Q, e.units)) {
      let r = e.units.flatMap((e) => O(e, t)).map((e) => `- ${e}`);
      return r.length === 0
        ? n
        : P(
            n,
            r.join(`
`),
          );
    }
    if (e.units.length === 1) {
      let n = e.units[0];
      if (n?.kind === `entry` && n.entry.kind === `exploration`) return A(n, t);
    }
    return P(
      n,
      e.units.map((e) => ge(e, t)).filter((e) => e != null).join(`

`),
    );
  }
  return e.kind === `pending-mcp-tool-calls`
    ? P(
        Re(e.items.length),
        e.items.map((e) => w(e)).join(`

`),
      )
    : e.kind === `dynamic-tool-call-group`
      ? P(
          Re(e.items.length),
          e.items.map((e) => g(e, t)).join(`

`),
        )
      : A(e, t);
}
function ge(e, t) {
  return e.kind === `entry` &&
    e.entry.kind === `item` &&
    (e.entry.item.type === `exec` || e.entry.item.type === `patch`)
    ? _e(e, t)
    : A(e, t);
}
function _e(e, t) {
  let n = O(e, t);
  return n.length === 0
    ? null
    : n.map((e) => `- ${e}`).join(`
`);
}
function O(e, t) {
  return e.kind !== `entry` || e.entry.kind !== `item`
    ? []
    : e.entry.item.type === `exec`
      ? [`Ran ${G(ve(e.entry.item))}`, ...k(e.entry.item.automaticApprovalReviews)]
      : e.entry.item.type === `patch`
        ? [...ye(e.entry.item, t), ...k(e.entry.item.automaticApprovalReviews)]
        : [];
}
function k(e) {
  return e == null
    ? []
    : e.flatMap((e) => [
        `Auto-review: ${e.status}`,
        ...(e.riskLevel == null ? [] : [`Auto-review risk: ${e.riskLevel}`]),
        ...(e.rationale == null ? [] : [`Auto-review rationale: ${U(e.rationale)}`]),
      ]);
}
function ve(e) {
  let t = e.parsedCmd.cmd.trim();
  return t.length === 0 ? u(e.cmd) : t;
}
function ye(e, t) {
  let n = e.grantRoot == null ? t : H(e.grantRoot);
  return Object.entries(e.changes).flatMap(([e, t]) => {
    let r = d(e, t);
    if (r == null || r.trim().length === 0) return [];
    let i = Be(r);
    return [`${be(t.type)} ${Ae(e, n)} (+${i.additions} -${i.deletions})`];
  });
}
function be(e) {
  switch (e) {
    case `add`:
    case `update`:
      return `Wrote`;
    case `delete`:
      return `Deleted`;
  }
}
function A(e, t) {
  if (e.kind === `web-search-group`)
    return P(
      `Searched the web`,
      e.items.map((e) => `- Searched the web for ${G(e.query)}`).join(`
`),
    );
  if (e.kind === `multi-agent-group`) {
    let t = e.items[0];
    return M(`Subagent action`, [
      t == null ? null : `Action: ${t.action}`,
      t == null ? null : `Status: ${t.status}`,
      `Receiver threads: ${e.items.length}`,
    ]);
  }
  return e.entry.kind === `exploration` ? xe(e.entry, t) : g(e.entry.item, t);
}
function xe(e, t) {
  let n = e.items
    .map((e) => Se(e, t))
    .filter((e) => e != null)
    .map((e) => `- ${e}`);
  return n.length === 0
    ? null
    : P(
        Fe(e.items),
        n.join(`
`),
      );
}
function Se(e, t) {
  if (e.type !== `exec`) return null;
  let n = e.parsedCmd,
    r = e.cwd == null ? t : H(e.cwd);
  switch (n.type) {
    case `read`:
      return `Read ${R(n.path ?? n.name, r)}`;
    case `search`:
      return n.query != null && n.path != null
        ? `Searched for ${G(n.query)} in ${R(n.path, r)}`
        : n.query == null
          ? `Searched for files`
          : `Searched for ${G(n.query)}`;
    case `list_files`:
      return n.path == null ? `Listed files` : `Listed files in ${R(n.path, r)}`;
    case `format`:
    case `test`:
    case `lint`:
    case `noop`:
    case `unknown`:
      return G(n.cmd);
  }
}
function j(e, t) {
  let n = U(t).trim();
  return n.length === 0 ? null : `${e}\n\n${n}`;
}
function M(e, t) {
  let n = t.flatMap((e) => {
    if (e == null) return [];
    let t = U(e);
    return t.trim().length === 0 ? [] : [t];
  });
  return n.length === 0
    ? e
    : `${e}\n\n${n.join(`
`)}`;
}
function N(e, t) {
  t != null && t.trim().length > 0 && e.push(t);
}
function Ce(e) {
  switch (e) {
    case `completed`:
      return `x`;
    case `in_progress`:
    case `pending`:
      return ` `;
  }
}
function we(e) {
  let t = e.replaceAll(/\s+/g, ` `).trim();
  return t.length === 0 ? `Codex conversation` : t.replaceAll(`#`, `\\#`);
}
function P(e, t) {
  return `<details><summary>${e}</summary>\n\n${I(t).trim()}\n\n</details>`;
}
function Te(e, t) {
  return `<details><summary>${e}</summary>\n\n${F(t)}\n</details>`;
}
function F(e) {
  return I(e)
    .trim()
    .split(`
`)
    .map((e) => (e.length === 0 ? `>` : `> ${e}`)).join(`
`);
}
function I(e) {
  return e.replaceAll(
    /\r\n?/g,
    `
`,
  );
}
function L(e, t) {
  return De(Ee(I(ee(e))), t);
}
function Ee(e) {
  return e
    .split(`
`)
    .map((e) => {
      let t = e.replaceAll(Ue, ``);
      return t.trim().length === 0 ? `` : t.trimEnd();
    })
    .join(`
`)
    .replaceAll(
      /\n{3,}/g,
      `

`,
    );
}
function De(e, t) {
  return e.replaceAll(We, (e, n, r) => {
    let i = n.startsWith(`<`) && n.endsWith(`>`),
      a = i ? n.slice(1, -1) : n,
      o = Oe(a, t);
    return o === a ? e : `](${ke(o, i)}${r ?? ``})`;
  });
}
function Oe(e, n) {
  let { path: r } = B(e);
  return t(r) ? z(e, n) : e;
}
function ke(e, t) {
  return t || /[\s()]/.test(e) ? `<${e}>` : e;
}
function R(e, t) {
  return G(z(e, t));
}
function Ae(e, t) {
  return G(je(e, t));
}
function je(e, n) {
  let r = z(e, n);
  return r === `.` ||
    r === `~` ||
    r.startsWith(`./`) ||
    r.startsWith(`../`) ||
    r.startsWith(`~/`) ||
    t(r)
    ? r
    : `./${r}`;
}
function z(e, t) {
  let { path: n, lineSuffix: r } = B(e),
    i = a(n),
    o = V(i, t.cwd, `.`);
  if (o != null) return `${o}${r}`;
  let s = V(i, t.homeDir, `~`);
  return s == null ? `${i}${r}` : `${s}${r}`;
}
function B(e) {
  let n = qe.exec(e);
  return n?.[1] == null || n[2] == null || !t(n[1])
    ? { lineSuffix: ``, path: e }
    : { lineSuffix: n[2], path: n[1] };
}
function V(e, t, n) {
  if (t == null || t === `/`) return null;
  let r = o(e),
    i = o(t);
  return r === i ? n : r.startsWith(`${i}/`) ? `${n}/${e.slice(t.length + 1)}` : null;
}
function H(e) {
  if (e == null) return $;
  let t = Me(e);
  return t == null ? $ : { cwd: t, homeDir: Ne(t) };
}
function Me(e) {
  let n = a(e).replace(/\/+$/, ``);
  return t(n) ? n : null;
}
function Ne(e) {
  let t = Ge.exec(e);
  if (t != null) return t[0];
  let n = Ke.exec(e);
  return n == null ? null : n[0];
}
function U(e) {
  return W(I(e));
}
function W(e) {
  return e.replaceAll(/<\/?details(?=[\s>])[^>]*>/gi, (e) => He(e));
}
function G(e) {
  let t = "`".repeat(J(e) + 1);
  return `${t}${e}${t}`;
}
function K(e) {
  return `<code>${He(e)}</code>`;
}
function q(e, t) {
  let n = I(t).trimEnd(),
    r = "`".repeat(Math.max(3, J(n) + 1));
  return `${r}${e}\n${n}\n${r}`;
}
function J(e) {
  let t = 0;
  for (let n of e.matchAll(/`+/g)) t = Math.max(t, n[0].length);
  return t;
}
function Y(e) {
  return JSON.stringify(e, null, 2) ?? `null`;
}
function Pe(e) {
  return `${e} previous ${e === 1 ? `message` : `messages`}`;
}
function Fe(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i of e)
    if (i.type === `exec`)
      switch (i.parsedCmd.type) {
        case `read`:
          t += 1;
          break;
        case `search`:
          n += 1;
          break;
        case `list_files`:
          r += 1;
          break;
        case `format`:
        case `test`:
        case `lint`:
        case `noop`:
        case `unknown`:
          break;
      }
  let i = [Z(t, `file`, `files`), Z(n, `search`, `searches`), Z(r, `list`, `lists`)].filter(
    (e) => e != null,
  );
  return i.length === 0 ? `Explored` : `Explored ${i.join(`, `)}`;
}
function Ie(e) {
  let t = [];
  (X(t, e.createdFileCount, `Created`, `created`, `file`, `files`),
    X(t, e.editedFileCount, `Edited`, `edited`, `file`, `files`),
    X(t, e.deletedFileCount, `Deleted`, `deleted`, `file`, `files`));
  let n = [
    Z(e.exploredFileCount, `file`, `files`),
    Z(e.searchCount, `search`, `searches`),
    Z(e.listCount, `list`, `lists`),
  ].filter((e) => e != null);
  return (
    n.length > 0 && t.push(`${t.length === 0 ? `Explored` : `explored`} ${n.join(`, `)}`),
    X(t, e.deniedRequestCount, `Denied`, `denied`, `request`, `requests`),
    Le(t, e.timedOutRequestCount),
    X(t, e.commandCount, `Ran`, `ran`, `command`, `commands`),
    X(t, e.mcpToolCallCount, `Called`, `called`, `tool`, `tools`),
    e.webSearchCount > 0 && t.push(t.length === 0 ? `Searched the web` : `searched the web`),
    t.length === 0 ? `Tool activity` : t.join(`, `)
  );
}
function X(e, t, n, r, i, a) {
  let o = Z(t, i, a);
  o != null && e.push(`${e.length === 0 ? n : r} ${o}`);
}
function Le(e, t) {
  let n = Z(t, `request`, `requests`);
  n != null && e.push(`${n} timed out`);
}
function Z(e, t, n) {
  return e === 0 ? null : e === 1 ? `a ${t}` : `${e} ${n}`;
}
function Re(e) {
  return e === 1 ? `Called a tool` : `Called ${e} tools`;
}
function ze(e) {
  switch (e) {
    case `add`:
      return `Created`;
    case `delete`:
      return `Deleted`;
    case `update`:
      return `Edited`;
  }
}
function Be(e) {
  let t = 0,
    n = 0;
  for (let r of I(e).split(`
`)) {
    if (r.startsWith(`+`) && !r.startsWith(`+++`)) {
      t += 1;
      continue;
    }
    r.startsWith(`-`) && !r.startsWith(`---`) && (n += 1);
  }
  return { additions: t, deletions: n };
}
function Ve(e) {
  return e.executionStatus === `interrupted`
    ? `Stopped`
    : e.output?.exitCode == null
      ? e.executionStatus === `completed`
        ? `Success`
        : `Running`
      : e.output.exitCode === 0
        ? `Success`
        : `Failed with exit code ${e.output.exitCode}`;
}
function He(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`);
}
var Ue, Q, $, We, Ge, Ke, qe;
e(() => {
  (n(),
    c(),
    r(),
    m(),
    f(),
    oe(),
    l(),
    s(),
    p(),
    h(),
    (Ue = /::git-[a-z-]+\{[^}\n]*\}/g),
    (Q = `STEPS_PROSE`),
    ($ = { cwd: null, homeDir: null }),
    (We = /\]\((<[^>\n]+>|[^)\s\n]+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)/g),
    (Ge = /^\/(?:Users|home)\/[^/]+(?=\/|$)/),
    (Ke = /^[A-Za-z]:\/Users\/[^/]+(?=\/|$)/),
    (qe = /^(.*?)(:\d+(?:-\d+)?)$/));
})();
export { de as renderConversationMarkdown };
//# sourceMappingURL=conversation-markdown.js.map
