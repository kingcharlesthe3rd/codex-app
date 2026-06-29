import { a as e } from "./chunk-Bj-mKKzh.js";
import {
  $i as t,
  Bi as n,
  Hi as r,
  Ji as i,
  Ki as a,
  Qi as o,
  Ui as s,
  Wi as c,
  Xi as ee,
  aa as l,
  ca as u,
  ea as te,
  fa as ne,
  ia as re,
  la as d,
  na as f,
  qi as ie,
  ra as p,
  sa as m,
  ta as h,
} from "./src-2.js";
import { Wo as g, fs as ae } from "./app-server-manager-signals.js";
import { L as _, R as oe, V as se, h as v } from "./vscode-api.js";
import { p as y } from "./statsig.js";
import { o as ce } from "./config-queries.js";
var le = `io.modelcontextprotocol/related-task`,
  b = ie((e) => e !== null && (typeof e == `object` || typeof e == `function`)),
  x = u([m(), h().int()]),
  S = m();
t({ ttl: h().optional(), pollInterval: h().optional() });
var ue = f({ ttl: h().optional() }),
  de = f({ taskId: m() }),
  C = t({ progressToken: x.optional(), [le]: de.optional() }),
  w = f({ _meta: C.optional() }),
  T = w.extend({ task: ue.optional() }),
  E = f({ method: m(), params: w.loose().optional() }),
  D = f({ _meta: C.optional() }),
  O = f({ method: m(), params: D.loose().optional() }),
  k = t({ _meta: C.optional() }),
  A = u([m(), h().int()]),
  fe = f({ jsonrpc: o(`2.0`), id: A, ...E.shape }).strict(),
  pe = f({ jsonrpc: o(`2.0`), ...O.shape }).strict(),
  me = f({ jsonrpc: o(`2.0`), id: A, result: k }).strict(),
  he;
(function (e) {
  ((e[(e.ConnectionClosed = -32e3)] = `ConnectionClosed`),
    (e[(e.RequestTimeout = -32001)] = `RequestTimeout`),
    (e[(e.ParseError = -32700)] = `ParseError`),
    (e[(e.InvalidRequest = -32600)] = `InvalidRequest`),
    (e[(e.MethodNotFound = -32601)] = `MethodNotFound`),
    (e[(e.InvalidParams = -32602)] = `InvalidParams`),
    (e[(e.InternalError = -32603)] = `InternalError`),
    (e[(e.UrlElicitationRequired = -32042)] = `UrlElicitationRequired`));
})((he ||= {}));
var ge = f({
  jsonrpc: o(`2.0`),
  id: A.optional(),
  error: f({ code: h().int(), message: m(), data: d().optional() }),
}).strict();
(u([fe, pe, me, ge]), u([me, ge]));
var _e = k.strict(),
  ve = D.extend({ requestId: A.optional(), reason: m().optional() }),
  ye = O.extend({ method: o(`notifications/cancelled`), params: ve }),
  j = f({
    icons: c(
      f({
        src: m(),
        mimeType: m().optional(),
        sizes: c(m()).optional(),
        theme: n([`light`, `dark`]).optional(),
      }),
    ).optional(),
  }),
  M = f({ name: m(), title: m().optional() }),
  N = M.extend({
    ...M.shape,
    ...j.shape,
    version: m(),
    websiteUrl: m().optional(),
    description: m().optional(),
  }),
  be = re(
    (e) =>
      e && typeof e == `object` && !Array.isArray(e) && Object.keys(e).length === 0
        ? { form: {} }
        : e,
    ee(
      f({
        form: ee(f({ applyDefaults: a().optional() }), l(m(), d())).optional(),
        url: b.optional(),
      }),
      l(m(), d()).optional(),
    ),
  ),
  xe = t({
    list: b.optional(),
    cancel: b.optional(),
    requests: t({
      sampling: t({ createMessage: b.optional() }).optional(),
      elicitation: t({ create: b.optional() }).optional(),
    }).optional(),
  }),
  Se = t({
    list: b.optional(),
    cancel: b.optional(),
    requests: t({ tools: t({ call: b.optional() }).optional() }).optional(),
  }),
  Ce = f({
    experimental: l(m(), b).optional(),
    sampling: f({ context: b.optional(), tools: b.optional() }).optional(),
    elicitation: be.optional(),
    roots: f({ listChanged: a().optional() }).optional(),
    tasks: xe.optional(),
    extensions: l(m(), b).optional(),
  }),
  we = w.extend({ protocolVersion: m(), capabilities: Ce, clientInfo: N }),
  Te = E.extend({ method: o(`initialize`), params: we }),
  Ee = f({
    experimental: l(m(), b).optional(),
    logging: b.optional(),
    completions: b.optional(),
    prompts: f({ listChanged: a().optional() }).optional(),
    resources: f({ subscribe: a().optional(), listChanged: a().optional() }).optional(),
    tools: f({ listChanged: a().optional() }).optional(),
    tasks: Se.optional(),
    extensions: l(m(), b).optional(),
  }),
  De = k.extend({
    protocolVersion: m(),
    capabilities: Ee,
    serverInfo: N,
    instructions: m().optional(),
  }),
  Oe = O.extend({ method: o(`notifications/initialized`), params: D.optional() }),
  P = E.extend({ method: o(`ping`), params: w.optional() }),
  ke = f({ progress: h(), total: p(h()), message: p(m()) }),
  Ae = f({ ...D.shape, ...ke.shape, progressToken: x }),
  je = O.extend({ method: o(`notifications/progress`), params: Ae }),
  Me = w.extend({ cursor: S.optional() }),
  F = E.extend({ params: Me.optional() }),
  I = k.extend({ nextCursor: S.optional() }),
  Ne = n([`working`, `input_required`, `completed`, `failed`, `cancelled`]),
  L = f({
    taskId: m(),
    status: Ne,
    ttl: u([h(), r()]),
    createdAt: m(),
    lastUpdatedAt: m(),
    pollInterval: p(h()),
    statusMessage: p(m()),
  }),
  Pe = k.extend({ task: L }),
  Fe = D.merge(L),
  Ie = O.extend({ method: o(`notifications/tasks/status`), params: Fe }),
  Le = E.extend({ method: o(`tasks/get`), params: w.extend({ taskId: m() }) }),
  Re = k.merge(L),
  ze = E.extend({ method: o(`tasks/result`), params: w.extend({ taskId: m() }) });
k.loose();
var Be = F.extend({ method: o(`tasks/list`) }),
  Ve = I.extend({ tasks: c(L) }),
  He = E.extend({ method: o(`tasks/cancel`), params: w.extend({ taskId: m() }) });
k.merge(L);
var Ue = f({ uri: m(), mimeType: p(m()), _meta: l(m(), d()).optional() }),
  We = Ue.extend({ text: m() }),
  R = m().refine(
    (e) => {
      try {
        return (atob(e), !0);
      } catch {
        return !1;
      }
    },
    { message: `Invalid Base64 string` },
  ),
  Ge = Ue.extend({ blob: R }),
  z = n([`user`, `assistant`]),
  B = f({
    audience: c(z).optional(),
    priority: h().min(0).max(1).optional(),
    lastModified: ne({ offset: !0 }).optional(),
  }),
  Ke = f({
    ...M.shape,
    ...j.shape,
    uri: m(),
    description: p(m()),
    mimeType: p(m()),
    size: p(h()),
    annotations: B.optional(),
    _meta: p(t({})),
  }),
  qe = f({
    ...M.shape,
    ...j.shape,
    uriTemplate: m(),
    description: p(m()),
    mimeType: p(m()),
    annotations: B.optional(),
    _meta: p(t({})),
  }),
  Je = F.extend({ method: o(`resources/list`) }),
  Ye = I.extend({ resources: c(Ke) }),
  Xe = F.extend({ method: o(`resources/templates/list`) }),
  Ze = I.extend({ resourceTemplates: c(qe) }),
  V = w.extend({ uri: m() }),
  Qe = V,
  $e = E.extend({ method: o(`resources/read`), params: Qe }),
  et = k.extend({ contents: c(u([We, Ge])) }),
  tt = O.extend({ method: o(`notifications/resources/list_changed`), params: D.optional() }),
  nt = V,
  rt = E.extend({ method: o(`resources/subscribe`), params: nt }),
  it = V,
  at = E.extend({ method: o(`resources/unsubscribe`), params: it }),
  ot = D.extend({ uri: m() }),
  st = O.extend({ method: o(`notifications/resources/updated`), params: ot }),
  ct = f({ name: m(), description: p(m()), required: p(a()) }),
  lt = f({ ...M.shape, ...j.shape, description: p(m()), arguments: p(c(ct)), _meta: p(t({})) }),
  ut = F.extend({ method: o(`prompts/list`) }),
  dt = I.extend({ prompts: c(lt) }),
  ft = w.extend({ name: m(), arguments: l(m(), m()).optional() }),
  pt = E.extend({ method: o(`prompts/get`), params: ft }),
  H = f({ type: o(`text`), text: m(), annotations: B.optional(), _meta: l(m(), d()).optional() }),
  U = f({
    type: o(`image`),
    data: R,
    mimeType: m(),
    annotations: B.optional(),
    _meta: l(m(), d()).optional(),
  }),
  W = f({
    type: o(`audio`),
    data: R,
    mimeType: m(),
    annotations: B.optional(),
    _meta: l(m(), d()).optional(),
  }),
  mt = f({
    type: o(`tool_use`),
    name: m(),
    id: m(),
    input: l(m(), d()),
    _meta: l(m(), d()).optional(),
  }),
  ht = f({
    type: o(`resource`),
    resource: u([We, Ge]),
    annotations: B.optional(),
    _meta: l(m(), d()).optional(),
  }),
  gt = Ke.extend({ type: o(`resource_link`) }),
  G = u([H, U, W, gt, ht]),
  _t = f({ role: z, content: G }),
  vt = k.extend({ description: m().optional(), messages: c(_t) }),
  yt = O.extend({ method: o(`notifications/prompts/list_changed`), params: D.optional() }),
  bt = f({
    title: m().optional(),
    readOnlyHint: a().optional(),
    destructiveHint: a().optional(),
    idempotentHint: a().optional(),
    openWorldHint: a().optional(),
  }),
  xt = f({ taskSupport: n([`required`, `optional`, `forbidden`]).optional() }),
  K = f({
    ...M.shape,
    ...j.shape,
    description: m().optional(),
    inputSchema: f({
      type: o(`object`),
      properties: l(m(), b).optional(),
      required: c(m()).optional(),
    }).catchall(d()),
    outputSchema: f({
      type: o(`object`),
      properties: l(m(), b).optional(),
      required: c(m()).optional(),
    })
      .catchall(d())
      .optional(),
    annotations: bt.optional(),
    execution: xt.optional(),
    _meta: l(m(), d()).optional(),
  }),
  St = F.extend({ method: o(`tools/list`) }),
  q = I.extend({ tools: c(K) }),
  J = k.extend({
    content: c(G).default([]),
    structuredContent: l(m(), d()).optional(),
    isError: a().optional(),
  });
J.or(k.extend({ toolResult: d() }));
var Ct = T.extend({ name: m(), arguments: l(m(), d()).optional() }),
  wt = E.extend({ method: o(`tools/call`), params: Ct }),
  Tt = O.extend({ method: o(`notifications/tools/list_changed`), params: D.optional() });
f({ autoRefresh: a().default(!0), debounceMs: h().int().nonnegative().default(300) });
var Et = n([`debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`]),
  Dt = w.extend({ level: Et }),
  Ot = E.extend({ method: o(`logging/setLevel`), params: Dt }),
  kt = D.extend({ level: Et, logger: m().optional(), data: d() }),
  At = O.extend({ method: o(`notifications/message`), params: kt }),
  jt = f({
    hints: c(f({ name: m().optional() })).optional(),
    costPriority: h().min(0).max(1).optional(),
    speedPriority: h().min(0).max(1).optional(),
    intelligencePriority: h().min(0).max(1).optional(),
  }),
  Mt = f({ mode: n([`auto`, `required`, `none`]).optional() }),
  Nt = f({
    type: o(`tool_result`),
    toolUseId: m().describe(`The unique identifier for the corresponding tool call.`),
    content: c(G).default([]),
    structuredContent: f({}).loose().optional(),
    isError: a().optional(),
    _meta: l(m(), d()).optional(),
  }),
  Pt = i(`type`, [H, U, W]),
  Y = i(`type`, [H, U, W, mt, Nt]),
  Ft = f({ role: z, content: u([Y, c(Y)]), _meta: l(m(), d()).optional() }),
  It = T.extend({
    messages: c(Ft),
    modelPreferences: jt.optional(),
    systemPrompt: m().optional(),
    includeContext: n([`none`, `thisServer`, `allServers`]).optional(),
    temperature: h().optional(),
    maxTokens: h().int(),
    stopSequences: c(m()).optional(),
    metadata: b.optional(),
    tools: c(K).optional(),
    toolChoice: Mt.optional(),
  }),
  Lt = E.extend({ method: o(`sampling/createMessage`), params: It }),
  Rt = k.extend({
    model: m(),
    stopReason: p(n([`endTurn`, `stopSequence`, `maxTokens`]).or(m())),
    role: z,
    content: Pt,
  }),
  zt = k.extend({
    model: m(),
    stopReason: p(n([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(m())),
    role: z,
    content: u([Y, c(Y)]),
  }),
  Bt = f({
    type: o(`boolean`),
    title: m().optional(),
    description: m().optional(),
    default: a().optional(),
  }),
  Vt = f({
    type: o(`string`),
    title: m().optional(),
    description: m().optional(),
    minLength: h().optional(),
    maxLength: h().optional(),
    format: n([`email`, `uri`, `date`, `date-time`]).optional(),
    default: m().optional(),
  }),
  Ht = f({
    type: n([`number`, `integer`]),
    title: m().optional(),
    description: m().optional(),
    minimum: h().optional(),
    maximum: h().optional(),
    default: h().optional(),
  }),
  Ut = f({
    type: o(`string`),
    title: m().optional(),
    description: m().optional(),
    enum: c(m()),
    default: m().optional(),
  }),
  Wt = f({
    type: o(`string`),
    title: m().optional(),
    description: m().optional(),
    oneOf: c(f({ const: m(), title: m() })),
    default: m().optional(),
  }),
  Gt = u([
    u([
      f({
        type: o(`string`),
        title: m().optional(),
        description: m().optional(),
        enum: c(m()),
        enumNames: c(m()).optional(),
        default: m().optional(),
      }),
      u([Ut, Wt]),
      u([
        f({
          type: o(`array`),
          title: m().optional(),
          description: m().optional(),
          minItems: h().optional(),
          maxItems: h().optional(),
          items: f({ type: o(`string`), enum: c(m()) }),
          default: c(m()).optional(),
        }),
        f({
          type: o(`array`),
          title: m().optional(),
          description: m().optional(),
          minItems: h().optional(),
          maxItems: h().optional(),
          items: f({ anyOf: c(f({ const: m(), title: m() })) }),
          default: c(m()).optional(),
        }),
      ]),
    ]),
    Bt,
    Vt,
    Ht,
  ]),
  Kt = u([
    T.extend({
      mode: o(`form`).optional(),
      message: m(),
      requestedSchema: f({
        type: o(`object`),
        properties: l(m(), Gt),
        required: c(m()).optional(),
      }),
    }),
    T.extend({ mode: o(`url`), message: m(), elicitationId: m(), url: m().url() }),
  ]),
  qt = E.extend({ method: o(`elicitation/create`), params: Kt }),
  Jt = D.extend({ elicitationId: m() }),
  Yt = O.extend({ method: o(`notifications/elicitation/complete`), params: Jt }),
  Xt = k.extend({
    action: n([`accept`, `decline`, `cancel`]),
    content: re((e) => (e === null ? void 0 : e), l(m(), u([m(), h(), a(), c(m())])).optional()),
  }),
  Zt = f({ type: o(`ref/resource`), uri: m() }),
  Qt = f({ type: o(`ref/prompt`), name: m() }),
  $t = w.extend({
    ref: u([Qt, Zt]),
    argument: f({ name: m(), value: m() }),
    context: f({ arguments: l(m(), m()).optional() }).optional(),
  }),
  en = E.extend({ method: o(`completion/complete`), params: $t }),
  tn = k.extend({
    completion: t({ values: c(m()).max(100), total: p(h().int()), hasMore: p(a()) }),
  }),
  nn = f({ uri: m().startsWith(`file://`), name: m().optional(), _meta: l(m(), d()).optional() }),
  rn = E.extend({ method: o(`roots/list`), params: w.optional() }),
  an = k.extend({ roots: c(nn) }),
  on = O.extend({ method: o(`notifications/roots/list_changed`), params: D.optional() });
(u([P, Te, en, Ot, pt, ut, Je, Xe, $e, rt, at, wt, St, Le, ze, Be, He]),
  u([ye, je, Oe, on, Ie]),
  u([_e, Rt, zt, Xt, an, Re, Ve, Pe]),
  u([P, Lt, qt, rn, Le, ze, Be, He]),
  u([ye, je, At, st, tt, Tt, yt, Ie, Yt]),
  u([_e, De, tn, vt, dt, Ye, Ze, et, J, q, Re, Ve, Pe]),
  ((t) =>
    typeof e < `u`
      ? e
      : typeof Proxy < `u`
        ? new Proxy(t, { get: (t, n) => (typeof e < `u` ? e : t)[n] })
        : t)(function (t) {
    if (typeof e < `u`) return e.apply(this, arguments);
    throw Error(`Dynamic require of "` + t + `" is not supported`);
  }));
var sn = u([o(`light`), o(`dark`)]).describe(`Color theme preference for the host environment.`),
  X = u([o(`inline`), o(`fullscreen`), o(`pip`)]).describe(`Display mode for UI presentation.`),
  cn = l(
    u([
      o(`--color-background-primary`),
      o(`--color-background-secondary`),
      o(`--color-background-tertiary`),
      o(`--color-background-inverse`),
      o(`--color-background-ghost`),
      o(`--color-background-info`),
      o(`--color-background-danger`),
      o(`--color-background-success`),
      o(`--color-background-warning`),
      o(`--color-background-disabled`),
      o(`--color-text-primary`),
      o(`--color-text-secondary`),
      o(`--color-text-tertiary`),
      o(`--color-text-inverse`),
      o(`--color-text-ghost`),
      o(`--color-text-info`),
      o(`--color-text-danger`),
      o(`--color-text-success`),
      o(`--color-text-warning`),
      o(`--color-text-disabled`),
      o(`--color-border-primary`),
      o(`--color-border-secondary`),
      o(`--color-border-tertiary`),
      o(`--color-border-inverse`),
      o(`--color-border-ghost`),
      o(`--color-border-info`),
      o(`--color-border-danger`),
      o(`--color-border-success`),
      o(`--color-border-warning`),
      o(`--color-border-disabled`),
      o(`--color-ring-primary`),
      o(`--color-ring-secondary`),
      o(`--color-ring-inverse`),
      o(`--color-ring-info`),
      o(`--color-ring-danger`),
      o(`--color-ring-success`),
      o(`--color-ring-warning`),
      o(`--font-sans`),
      o(`--font-mono`),
      o(`--font-weight-normal`),
      o(`--font-weight-medium`),
      o(`--font-weight-semibold`),
      o(`--font-weight-bold`),
      o(`--font-text-xs-size`),
      o(`--font-text-sm-size`),
      o(`--font-text-md-size`),
      o(`--font-text-lg-size`),
      o(`--font-heading-xs-size`),
      o(`--font-heading-sm-size`),
      o(`--font-heading-md-size`),
      o(`--font-heading-lg-size`),
      o(`--font-heading-xl-size`),
      o(`--font-heading-2xl-size`),
      o(`--font-heading-3xl-size`),
      o(`--font-text-xs-line-height`),
      o(`--font-text-sm-line-height`),
      o(`--font-text-md-line-height`),
      o(`--font-text-lg-line-height`),
      o(`--font-heading-xs-line-height`),
      o(`--font-heading-sm-line-height`),
      o(`--font-heading-md-line-height`),
      o(`--font-heading-lg-line-height`),
      o(`--font-heading-xl-line-height`),
      o(`--font-heading-2xl-line-height`),
      o(`--font-heading-3xl-line-height`),
      o(`--border-radius-xs`),
      o(`--border-radius-sm`),
      o(`--border-radius-md`),
      o(`--border-radius-lg`),
      o(`--border-radius-xl`),
      o(`--border-radius-full`),
      o(`--border-width-regular`),
      o(`--shadow-hairline`),
      o(`--shadow-sm`),
      o(`--shadow-md`),
      o(`--shadow-lg`),
    ]).describe(`CSS variable keys available to MCP apps for theming.`)
      .describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
    u([m(), s()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
  ).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`);
(f({
  method: o(`ui/open-link`),
  params: f({ url: m().describe(`URL to open in the host's browser`) }),
}),
  f({
    isError: a()
      .optional()
      .describe(`True if the host failed to open the URL (e.g., due to security policy).`),
  }).passthrough(),
  f({
    isError: a()
      .optional()
      .describe(`True if the download failed (e.g., user cancelled or host denied).`),
  }).passthrough(),
  f({
    isError: a().optional().describe(`True if the host rejected or failed to deliver the message.`),
  }).passthrough(),
  f({ method: o(`ui/notifications/sandbox-proxy-ready`), params: f({}) }));
var Z = f({
    connectDomains: c(m()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
    resourceDomains: c(m())
      .optional()
      .describe(
        "Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)",
      ),
    frameDomains: c(m())
      .optional()
      .describe(
        "Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)",
      ),
    baseUriDomains: c(m())
      .optional()
      .describe(
        "Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)",
      ),
  }),
  Q = f({
    camera: f({}).optional().describe(`Request camera access.

Maps to Permission Policy \`camera\` feature.`),
    microphone: f({}).optional().describe(`Request microphone access.

Maps to Permission Policy \`microphone\` feature.`),
    geolocation: f({}).optional().describe(`Request geolocation access.

Maps to Permission Policy \`geolocation\` feature.`),
    clipboardWrite: f({}).optional().describe(`Request clipboard write access.

Maps to Permission Policy \`clipboard-write\` feature.`),
  });
(f({
  method: o(`ui/notifications/size-changed`),
  params: f({
    width: h().optional().describe(`New width in pixels.`),
    height: h().optional().describe(`New height in pixels.`),
  }),
}),
  f({
    method: o(`ui/notifications/tool-input`),
    params: f({
      arguments: l(m(), d().describe(`Complete tool call arguments as key-value pairs.`))
        .optional()
        .describe(`Complete tool call arguments as key-value pairs.`),
    }),
  }),
  f({
    method: o(`ui/notifications/tool-input-partial`),
    params: f({
      arguments: l(m(), d().describe(`Partial tool call arguments (incomplete, may change).`))
        .optional()
        .describe(`Partial tool call arguments (incomplete, may change).`),
    }),
  }),
  f({
    method: o(`ui/notifications/tool-cancelled`),
    params: f({
      reason: m()
        .optional()
        .describe(`Optional reason for the cancellation (e.g., "user action", "timeout").`),
    }),
  }));
var ln = f({ fonts: m().optional() }),
  un = f({
    variables: cn.optional().describe(`CSS variables for theming the app.`),
    css: ln.optional().describe(`CSS blocks that apps can inject.`),
  });
(f({ method: o(`ui/resource-teardown`), params: f({}) }), l(m(), d()));
var dn = f({
  text: f({}).optional().describe(`Host supports text content blocks.`),
  image: f({}).optional().describe(`Host supports image content blocks.`),
  audio: f({}).optional().describe(`Host supports audio content blocks.`),
  resource: f({}).optional().describe(`Host supports resource content blocks.`),
  resourceLink: f({}).optional().describe(`Host supports resource link content blocks.`),
  structuredContent: f({}).optional().describe(`Host supports structured content.`),
});
f({ method: o(`ui/notifications/request-teardown`), params: f({}).optional() });
var fn = f({
    experimental: f({}).optional().describe(`Experimental features (structure TBD).`),
    openLinks: f({}).optional().describe(`Host supports opening external URLs.`),
    downloadFile: f({}).optional().describe(`Host supports file downloads via ui/download-file.`),
    serverTools: f({
      listChanged: a().optional().describe(`Host supports tools/list_changed notifications.`),
    })
      .optional()
      .describe(`Host can proxy tool calls to the MCP server.`),
    serverResources: f({
      listChanged: a().optional().describe(`Host supports resources/list_changed notifications.`),
    })
      .optional()
      .describe(`Host can proxy resource reads to the MCP server.`),
    logging: f({}).optional().describe(`Host accepts log messages.`),
    sandbox: f({
      permissions: Q.optional().describe(
        `Permissions granted by the host (camera, microphone, geolocation).`,
      ),
      csp: Z.optional().describe(`CSP domains approved by the host.`),
    })
      .optional()
      .describe(`Sandbox configuration applied by the host.`),
    updateModelContext: dn
      .optional()
      .describe(
        `Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns.`,
      ),
    message: dn
      .optional()
      .describe(`Host supports receiving content messages (ui/message) from the view.`),
    sampling: f({
      tools: f({})
        .optional()
        .describe("Host supports tool use via `tools` and `toolChoice` parameters."),
    })
      .optional()
      .describe(
        "Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.",
      ),
  }),
  pn = f({
    experimental: f({}).optional().describe(`Experimental features (structure TBD).`),
    tools: f({
      listChanged: a().optional().describe(`App supports tools/list_changed notifications.`),
    })
      .optional()
      .describe(`App exposes MCP-style tools that the host can call.`),
    availableDisplayModes: c(X).optional().describe(`Display modes the app supports.`),
  });
(f({ method: o(`ui/notifications/initialized`), params: f({}).optional() }),
  f({
    csp: Z.optional().describe(`Content Security Policy configuration for UI resources.`),
    permissions: Q.optional().describe(`Sandbox permissions requested by the UI resource.`),
    domain: m().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
    prefersBorder: a().optional()
      .describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`),
  }),
  f({
    method: o(`ui/request-display-mode`),
    params: f({ mode: X.describe(`The display mode being requested.`) }),
  }),
  f({
    mode: X.describe(
      `The display mode that was actually set. May differ from requested if not supported.`,
    ),
  }).passthrough());
var mn = u([o(`model`), o(`app`)]).describe(`Tool visibility scope - who can access the tool.`);
(f({
  resourceUri: m().optional(),
  visibility: c(mn).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
  csp: te().optional(),
  permissions: te().optional(),
}),
  f({
    mimeTypes: c(m())
      .optional()
      .describe(
        'Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.',
      ),
  }),
  f({
    method: o(`ui/download-file`),
    params: f({
      contents: c(u([ht, gt])).describe(
        `Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.`,
      ),
    }),
  }),
  f({
    method: o(`ui/message`),
    params: f({
      role: o(`user`).describe(`Message role, currently only "user" is supported.`),
      content: c(G).describe(`Message content blocks (text, image, etc.).`),
    }),
  }),
  f({
    method: o(`ui/notifications/sandbox-resource-ready`),
    params: f({
      html: m().describe(`HTML content to load into the inner iframe.`),
      sandbox: m()
        .optional()
        .describe(`Optional override for the inner iframe's sandbox attribute.`),
      csp: Z.optional().describe(`CSP configuration from resource metadata.`),
      permissions: Q.optional().describe(`Sandbox permissions from resource metadata.`),
    }),
  }),
  f({
    method: o(`ui/notifications/tool-result`),
    params: J.describe(`Standard MCP tool execution result.`),
  }));
var hn = f({
  toolInfo: f({
    id: A.optional().describe(`JSON-RPC id of the tools/call request.`),
    tool: K.describe(`Tool definition including name, inputSchema, etc.`),
  })
    .optional()
    .describe(`Metadata of the tool call that instantiated this App.`),
  theme: sn.optional().describe(`Current color theme preference.`),
  styles: un.optional().describe(`Style configuration for theming the app.`),
  displayMode: X.optional().describe(`How the UI is currently displayed.`),
  availableDisplayModes: c(X).optional().describe(`Display modes the host supports.`),
  containerDimensions: u([
    f({ height: h().describe(`Fixed container height in pixels.`) }),
    f({ maxHeight: u([h(), s()]).optional().describe(`Maximum container height in pixels.`) }),
  ])
    .and(
      u([
        f({ width: h().describe(`Fixed container width in pixels.`) }),
        f({ maxWidth: u([h(), s()]).optional().describe(`Maximum container width in pixels.`) }),
      ]),
    )
    .optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
  locale: m().optional().describe(`User's language and region preference in BCP 47 format.`),
  timeZone: m().optional().describe(`User's timezone in IANA format.`),
  userAgent: m().optional().describe(`Host application identifier.`),
  platform: u([o(`web`), o(`desktop`), o(`mobile`)])
    .optional()
    .describe(`Platform type for responsive design decisions.`),
  deviceCapabilities: f({
    touch: a().optional().describe(`Whether the device supports touch input.`),
    hover: a().optional().describe(`Whether the device supports hover interactions.`),
  })
    .optional()
    .describe(`Device input capabilities.`),
  safeAreaInsets: f({
    top: h().describe(`Top safe area inset in pixels.`),
    right: h().describe(`Right safe area inset in pixels.`),
    bottom: h().describe(`Bottom safe area inset in pixels.`),
    left: h().describe(`Left safe area inset in pixels.`),
  })
    .optional()
    .describe(`Mobile safe area boundaries in pixels.`),
}).passthrough();
(f({
  method: o(`ui/notifications/host-context-changed`),
  params: hn.describe(`Partial context update containing only changed fields.`),
}),
  f({
    method: o(`ui/update-model-context`),
    params: f({
      content: c(G).optional().describe(`Context content blocks (text, image, etc.).`),
      structuredContent: l(
        m(),
        d().describe(`Structured content for machine-readable context data.`),
      )
        .optional()
        .describe(`Structured content for machine-readable context data.`),
    }),
  }),
  f({
    method: o(`ui/initialize`),
    params: f({
      appInfo: N.describe(`App identification (name and version).`),
      appCapabilities: pn.describe(`Features and capabilities this app provides.`),
      protocolVersion: m().describe(`Protocol version this app supports.`),
    }),
  }),
  f({
    protocolVersion: m().describe(`Negotiated protocol version string (e.g., "2025-11-21").`),
    hostInfo: N.describe(`Host application identification and version.`),
    hostCapabilities: fn.describe(`Features and capabilities provided by the host.`),
    hostContext: hn.describe(`Rich context about the host environment.`),
  }).passthrough());
var gn = `ui/resourceUri`;
function _n(e) {
  let t = e._meta?.ui?.resourceUri;
  if ((t === void 0 && (t = e._meta?.[gn]), typeof t == `string` && t.startsWith(`ui://`)))
    return t;
  if (t !== void 0) throw Error(`Invalid UI resource URI: ${JSON.stringify(t)}`);
}
var vn = 100,
  yn = f({
    entrypoints: c(
      u([
        f({ type: o(`global`) }),
        f({ type: o(`thread`) }),
        f({ extensions: c(m().trim().min(1)), type: o(`file`) }),
      ]),
    ).optional(),
  }).optional(),
  bn = f({ "mentions/search": f({}).optional() }).optional(),
  xn = f({ connector_name: m().trim().min(1).optional() })
    .passthrough()
    .optional();
async function Sn(e) {
  return (await $(e)).flatMap(({ name: e, serverInfo: t, tools: n }) =>
    q.shape.tools
      .parse(Object.values(n))
      .filter(An)
      .map((n) => ({ mentionSearchTool: n.name, server: e, title: jn(n, t, e) })),
  );
}
async function Cn(e) {
  return (await $(e)).map(({ name: t, tools: n }) => ({
    hostId: e,
    server: t,
    tools: q.shape.tools.parse(Object.values(n)),
  }));
}
function wn(e) {
  return e.flatMap(({ hostId: e, server: t, tools: n }) => n.flatMap((r) => En(e, t, r, n)));
}
function Tn(e) {
  return e.flatMap(({ hostId: e, server: t, tools: n }) =>
    n.flatMap((r) => {
      let i = Dn(r).flatMap((e) => (e.type === `file` ? e.extensions : [])),
        a = kn(r);
      return i.length === 0 || a == null || !Mn(r)
        ? []
        : [
            {
              extensions: i,
              hostId: e,
              resourceUri: a,
              server: t,
              serverTools: n,
              title: On(r),
              tool: r,
            },
          ];
    }),
  );
}
function En(e, t, n, r) {
  let i = kn(n);
  if (i == null || !Mn(n)) return [];
  let a = On(n);
  return Dn(n).flatMap((o) => {
    switch (o.type) {
      case `global`:
      case `thread`:
        return [
          {
            entrypoint: o.type,
            hostId: e,
            resourceUri: i,
            server: t,
            serverTools: r,
            title: a,
            tool: n,
          },
        ];
      case `file`:
        return [];
    }
  });
}
function Dn(e) {
  let t = yn.safeParse(e._meta?.[`openai/ui`]);
  return t.success ? (t.data?.entrypoints ?? []) : [];
}
function On(e) {
  return e.title ?? e.annotations?.title ?? e.name;
}
function kn(e) {
  try {
    return _n(e);
  } catch {
    return;
  }
}
function An(e) {
  let t = bn.safeParse(e._meta?.[`openai/capabilities`]);
  return t.success && t.data?.[`mentions/search`] != null;
}
function jn(e, t, n) {
  let r = xn.safeParse(e._meta);
  return (r.success ? r.data?.connector_name : void 0) ?? t?.title ?? t?.name ?? n;
}
function Mn(e) {
  let t = f({ visibility: c(n([`app`, `model`])).optional() }).safeParse(e._meta?.ui);
  return t.success && t.data.visibility?.includes(`app`) === !0;
}
async function $(e, t = null) {
  let n = await ae(`list-mcp-server-status`, {
    cursor: t,
    detail: `toolsAndAuthOnly`,
    hostId: e,
    limit: vn,
  });
  return n.nextCursor == null ? n.data : [...n.data, ...(await $(e, n.nextCursor))];
}
var Nn = se(v, (e) => ({
    queryFn: () => Cn(e),
    queryKey: [...ce, e, `capability-catalog`],
    staleTime: 0,
  })),
  Pn = _(v, ({ get: e }) => (e(y, `3669474837`) ? (e(Nn, `local`).data ?? []) : [])),
  Fn = se(v, (e) => ({
    queryFn: () => Sn(e),
    queryKey: [...ce, e, `capability-mention-servers`],
    staleTime: 0,
  })),
  In = oe(v, (e, { get: t }) => (t(y, `3669474837`) ? (t(Fn, e).data ?? []) : [])),
  Ln = _(v, ({ get: e }) => e(In, g)),
  Rn = oe(v, (e, { get: t }) => (t(y, `3669474837`) ? Tn(t(Nn, e).data ?? []) : [])),
  zn = _(v, ({ get: e }) => e(Rn, g)),
  Bn = _(v, ({ get: e }) => wn(e(Pn))),
  Vn = _(v, ({ get: e }) => e(Bn).filter((e) => e.entrypoint === `global`));
export {
  Ln as a,
  wt as c,
  le as d,
  $e as f,
  E as h,
  Vn as i,
  J as l,
  de as m,
  zn as n,
  In as o,
  et as p,
  Rn as r,
  Bn as s,
  Pn as t,
  x as u,
};
//# sourceMappingURL=mcp-capability-signals.js.map
