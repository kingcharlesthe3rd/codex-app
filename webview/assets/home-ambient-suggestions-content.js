import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, a as i, o as a, s as o, t as s } from "./app-scope-CWE-zIhQ.js";
import { Bt as c, o as l } from "./use-host-config.js";
import { Hi as u } from "./thread-context-inputs.js";
import { s as d } from "./vscode-api.js";
import { n as f, r as p } from "./react.js";
import "./isEqual.js";
import { A as m } from "./src.js";
import "./react-dom.js";
import { l as h, s as g } from "./lib-1.js";
import { t as _ } from "./clsx.js";
import "./app-shell-state.js";
import "./button-oF-qgtAS.js";
import { a as v } from "./setting-storage.js";
import "./reduced-motion-preference-BFM-v_UB.js";
import "./use-reduced-motion-1.js";
import "./spinner.js";
import "./window-zoom-context.js";
import { t as y } from "./chevron-right.js";
import { n as b, t as x } from "./tooltip-B.js";
import { r as S } from "./toast-signal.js";
import { t as C } from "./x.js";
import "./composer-footer.js";
import "./rpc.js";
import { l as w, o as T } from "./statsig.js";
import "./request.js";
import { t as E } from "./clock-Cid-cc8u.js";
import "./markdown-to-search-text.js";
import "./marked.esm.js";
import {
  $t as D,
  Qt as O,
  a as ee,
  i as k,
  nn as A,
  o as j,
  rn as te,
  s as ne,
  t as M,
} from "./product-logger.js";
import { m as re } from "./chunk-13.js";
import "./parse-directives.js";
import "./platform.js";
import "./persisted-signal.js";
import "./app-server-manager-hooks-D4-J16ZL.js";
import "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as ie } from "./use-auth.js";
import "./use-global-state.js";
import { n as ae } from "./model-queries.js";
import { n as oe } from "./use-model-settings.js";
import "./config.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./mcp-capability-signals.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import { t as se } from "./use-service-tier-settings.js";
import { i as ce, n as N } from "./new-chat-page-suggestion-data.js";
import "./announcement-atoms.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import { p as P } from "./codex-api.js";
import "./use-debounced-value.js";
import { t as F } from "./build-start-conversation-params.js";
import "./prompt-text.js";
import "./use-environment.js";
import { g as I, y as L } from "./composer-view-state.js";
import "./mention-item.js";
import { n as R, t as z } from "./skill-utils.js";
import { t as le } from "./use-collaboration-mode.js";
import "./collaboration-mode-queries.js";
import { c as ue } from "./use-permissions-mode.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import { d as de, n as fe, o as pe } from "./onboarding-state.js";
import { n as me, r as he, t as ge } from "./onboarding-plugin-suggestions.js";
import { t as _e } from "./apps.js";
import { n as ve, r as ye } from "./projectless-thread.js";
import { n as be, t as xe } from "./onboarding-mail-provider.js";
import { t as Se } from "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled-Dn_J-WZf.js";
import "./browser-sidebar-availability.js";
import { m as Ce, o as B } from "./use-plugins.js";
import { l as we } from "./apps-queries.js";
import "./uniq.js";
import { t as Te } from "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import { a as Ee, i as De, n as Oe, t as ke } from "./ambient-suggestion-apps.js";
import { n as Ae } from "./ambient-suggestions-connected-apps-consent.js";
import "./use-is-dark.js";
import { t as je } from "./connector-logo.js";
import { n as Me, r as Ne, t as Pe } from "./home-row-layout.js";
import { t as Fe } from "./chats.js";
import { t as Ie } from "./info.js";
import {
  a as Le,
  c as Re,
  d as ze,
  i as Be,
  l as Ve,
  o as He,
  r as Ue,
  t as We,
  u as Ge,
} from "./home-onboarding-assistant-tutorial-card.js";
import "./setup-codex-wizard-step-view.js";
import { t as Ke } from "./check-circle-filled.js";
import "./recommended-skill-statsig-overrides.js";
import { t as qe } from "./arrow-left.js";
import { t as Je } from "./document-search.js";
import { t as Ye } from "./file.js";
var V = e(t(), 1),
  H = r();
function Xe({ sourceId: e, prompts: t }) {
  return t
    .slice(0, 3)
    .map(({ appIds: t, prompt: n, title: r }, i) => ({
      id: `welcome-v2-role-${e}-${i + 1}`,
      title: r,
      description: r,
      prompt: n,
      appIds: t ?? [],
      status: `pending`,
      createdAtMs: 0,
      updatedAtMs: 0,
      analyticsType: `onboarding_starter`,
      homeAction: { type: `fill-composer` },
      showTooltip: !1,
      source: `default`,
    }));
}
function Ze(e) {
  let t = (0, H.c)(10),
    { enabled: n } = e,
    r = h(),
    i = p(de),
    a = i.roles.length > 0 || i.workMode != null;
  if (!n || !a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { connectAppsRowLabel: null, suggestions: [] }), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o, s;
  if (t[1] !== r || t[2] !== i.roles) {
    let e = he({ roles: i.roles });
    o = r.formatMessage(e.connectAppsRowMessage);
    let n;
    (t[5] === r
      ? (n = t[6])
      : ((n = (e) => ({
          appIds: e.appIds,
          prompt: r.formatMessage(e.promptMessage),
          title: r.formatMessage(e.titleMessage),
        })),
        (t[5] = r),
        (t[6] = n)),
      (s = Xe({ sourceId: e.role, prompts: e.suggestionPrompts.map(n) })),
      (t[1] = r),
      (t[2] = i.roles),
      (t[3] = o),
      (t[4] = s));
  } else ((o = t[3]), (s = t[4]));
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = { connectAppsRowLabel: o, suggestions: s }), (t[7] = o), (t[8] = s), (t[9] = c))
      : (c = t[9]),
    c
  );
}
var U = 0,
  W = `life-science-research`,
  Qe = `ncbi-blast-skill`,
  $e = new Set([`gpt-rosalind-preview`, `gpt-rosalind-5-5`, `heisenberg`]),
  et = `BLAST this protein sequence and return the top hits MQIFVKTLTGKTITLEVEPSDTIENVKAKIQDKEGIPPDQQRLIFAGKQLEDGRTLSDYNIQKESTLHLVLRLRGG`,
  tt = [
    `Evaluate whether LRRK2 is a credible therapeutic target for Parkinson's disease.`,
    ``,
    `Spawn parallel subagents and treat each as an independent evidence lane. At minimum, create subagents for:`,
    `1. Human genetics - causal evidence, GWAS, rare variants, locus-to-gene`,
    `2. Disease biology - mechanism fit and pathway relevance`,
    `3. Expression context - tissue, cell type, disease-relevant expression`,
    `4. Direction of effect - whether inhibition or activation is supported`,
    `5. Safety / tolerability| - constraint, essentiality, on-target risk`,
    `6. Tractability - modality fit, structure, druggability`,
    `7. Clinical landscape - prior programs, competition, biomarker strategy`,
    ``,
    `Return:`,
    `- a short executive verdict: Prioritize / Conditional / Deprioritize`,
    `- a pillar-by-pillar scorecard with confidence and key caveats`,
    `- an overall target validation score`,
    `- the top risks / contradictions`,
    `- the most important next experiment or analysis`,
    ``,
    `Be skeptical, concise, and explicit about uncertainty. Separate causal evidence, mechanistic plausibility, and therapeutic actionability.`,
  ].join(`
`),
  G = [
    `You are a translational assay scientist optimizing a drug-discovery assay that is giving mixed or unstable results.`,
    ``,
    `The assay is a 96-well Ba/F3-EGFR cellular phospho-ERK luminescence inhibition assay with CMPD-327. Your job is to separate likely technical noise from real biology, recommend the smallest protocol changes that materially improve signal and reproducibility, and generate a compact, presentation-ready output.`,
    ``,
    `Generate local artifacts in the current working directory, including at minimum:`,
    ``,
    "1. `plate_qc_overview.png`",
    "   - a plate QC overview with clear `accept`, `salvage`, or `reject` labeling",
    `   - thresholds or annotations explaining why each plate was classified that way`,
    ``,
    "2. `dose_response_curves.png`",
    `   - dose-response curves for each variant`,
    `   - per-well or per-replicate points shown`,
    `   - included vs excluded wells clearly distinguished`,
    `   - control-normalized fitting`,
    `   - if a curve is not bracketed, label it clearly instead of forcing a precise IC50`,
    ``,
    `Also generate:`,
    `- a short optimization memo`,
    `- a small summary table of plate decisions`,
    `- a compact explanation of which wells were excluded and why`,
    `- any code needed to reproduce the figures`,
    ``,
    `Analysis Rules`,
    ``,
    `- Reconstruct well-level sample positions from the embedded payload.`,
    "- `layout.doses_nM` gives the dose order.",
    "- `layout.replicate_1_columns` and `layout.replicate_2_columns` map the two technical replicates to plate columns.",
    "- `layout.row_to_variant` maps plate rows to variants.",
    "- Edge wells are columns `1` and `12`.",
    "- For each plate and variant, `samples[variant]` contains:",
    "  - first array = replicate 1 net RLU values ordered by `doses_nM`",
    "  - second array = replicate 2 net RLU values ordered by `doses_nM`",
    "- `issue_tags` are hints about likely technical artifacts, not the final answer.",
    `- Use the provided plate QC table for overview and cross-checks, but derive the dose-response analysis from the reconstructed plate data and controls.`,
    `- Prefer the smallest protocol changes that address the dominant failure modes.`,
    ``,
    `Embedded Data`,
    ``,
    "```json",
    JSON.stringify(
      {
        assay: `96-well Ba/F3-EGFR cellular phospho-ERK luminescence inhibition assay with CMPD-327`,
        minimal_metadata: {
          incubation_hours: 20,
          plate_seal: `none`,
          dispense_method: `manual multichannel`,
          edge_wells_used: !0,
        },
        layout: {
          doses_nM: [3, 10, 30, 100, 300, 1e3],
          replicate_1_columns: [1, 2, 3, 4, 5, 6],
          replicate_2_columns: [7, 8, 9, 10, 11, 12],
          row_to_variant: {
            B: `EGFR_WT`,
            C: `EGFR_L858R`,
            D: `EGFR_T790M`,
            E: `EGFR_C797S`,
            F: `EGFR_T790M_C797S`,
            G: `EGFR_G796D`,
          },
          edge_columns: [1, 12],
        },
        plate_qc: [
          {
            plate_id: `P1`,
            z_prime: 0.717,
            dmso_cv_pct: 7.2,
            high_ctrl_cv_pct: 7.2,
            blank_mean_net_rlu: 695,
            matched_edge_bias_pct: 3.6,
            matched_column12_bias_pct: -0.6,
            mean_replicate_cv_pct: 4.7,
          },
          {
            plate_id: `P2`,
            z_prime: 0.165,
            dmso_cv_pct: 18.7,
            high_ctrl_cv_pct: 24.9,
            blank_mean_net_rlu: 688.2,
            matched_edge_bias_pct: 22.9,
            matched_column12_bias_pct: 25.2,
            mean_replicate_cv_pct: 9.6,
          },
          {
            plate_id: `P3`,
            z_prime: 0.537,
            dmso_cv_pct: 11.8,
            high_ctrl_cv_pct: 11.2,
            blank_mean_net_rlu: 1247.2,
            matched_edge_bias_pct: 18,
            matched_column12_bias_pct: 24.5,
            mean_replicate_cv_pct: 6.9,
          },
        ],
        operator_notes: [
          `Plate P2 sat on the bench slightly longer than intended before incubation.`,
          `Controls were concentrated on the plate edges for convenience.`,
          `A few wells on the far-right side of Plate P3 looked bubbly after dispense.`,
          `No adhesive seal was used during incubation.`,
          `The team reported that the assay worked overall, but plate-to-plate potency estimates felt unstable.`,
        ],
        plates: {
          P1: {
            controls: {
              dmso: [41017.09, 43330.81, 41105.2, 41429.35, 35220.52, 44887.32, 39000.94, 39128.58],
              high: [4623.54, 5664.08, 5496.58, 5204.96, 5267.91, 5603.54, 5214.81, 5881.64],
              blank: [737.12, 661.46, 721.15, 631.41, 664.53, 747.34, 654.22, 742.77],
            },
            samples: {
              EGFR_C797S: [
                [41590.79, 40553.03, 41739.13, 34010.45, 31512.27, 21531.92],
                [41614.15, 40901.71, 41567.31, 40977.12, 29653.66, 19688.35],
              ],
              EGFR_G796D: [
                [53857.13, 41733.49, 39495.48, 34260.84, 29643.7, 20607.23],
                [40493.83, 40806.44, 42736.9, 32553.45, 27329.13, 20182.03],
              ],
              EGFR_L858R: [
                [43988.38, 38715.75, 27797.69, 15901.74, 8418.65, 6667.54],
                [42580.36, 41604.11, 34354.3, 13803.6, 9051.5, 6790.57],
              ],
              EGFR_T790M: [
                [37463.25, 38803.2, 38067.8, 32387.95, 22040.1, 12656.06],
                [39782.46, 40883.04, 37980.98, 31754.39, 21218.54, 12974.49],
              ],
              EGFR_T790M_C797S: [
                [48038.04, 41774.41, 41114.25, 40758.59, 38480.96, 31834.89],
                [45281.86, 41967.02, 48258.96, 39564.83, 36502.14, 35022.91],
              ],
              EGFR_WT: [
                [42876.82, 34480.13, 28111.53, 16843.69, 9983.17, 6811.41],
                [38874.4, 33162.82, 31014.36, 16394.41, 10115.28, 6307.75],
              ],
            },
          },
          P2: {
            controls: {
              dmso: [
                48418.99, 64590.46, 35278.71, 41390.47, 46064.47, 47572.78, 55895.87, 55889.24,
              ],
              high: [10716.22, 10788.41, 7053.48, 7972.23, 5389.3, 11330.28, 8318.82, 7152.18],
              blank: [721.5, 771.13, 659.86, 686.36, 669.08, 511.26, 639.52, 846.98],
            },
            samples: {
              EGFR_C797S: [
                [38574.72, 43461.38, 39128.36, 36761.35, 27852.97, 23431.67],
                [40963.35, 42436.03, 42424.25, 37080.9, 31891.8, 26102.99],
              ],
              EGFR_G796D: [
                [50231.25, 49434.18, 36723.57, 34020, 29802.1, 17980.09],
                [43053.39, 44667.21, 41914.99, 40825.26, 31838.43, 25216.01],
              ],
              EGFR_L858R: [
                [60021.09, 37634.69, 28504.02, 18910.43, 9740.18, 6760.41],
                [44291.58, 33634.08, 36257.87, 17437.72, 9742.21, 11826.52],
              ],
              EGFR_T790M: [
                [68314.34, 41230.19, 40462.34, 30385.04, 24452.28, 14006.37],
                [43268.41, 46219.03, 47079.98, 33016.57, 24660.81, 13155.44],
              ],
              EGFR_T790M_C797S: [
                [41757.58, 43150.48, 46354.72, 44522.97, 38118.19, 30115.76],
                [45284.3, 43650.54, 50205.14, 35024.61, 40422.36, 32616.33],
              ],
              EGFR_WT: [
                [48204.59, 37119, 34611.38, 17924.73, 10830.35, 7632.01],
                [38039.09, 46344.75, 31294.07, 17051.06, 10693, 9335.5],
              ],
            },
            issue_tags: {
              A1: `edge_evaporation`,
              A2: `edge_evaporation`,
              A3: `edge_evaporation`,
              A4: `edge_evaporation`,
              A5: `poor_high_control_separation`,
              A6: `poor_high_control_separation`,
              A7: `poor_high_control_separation`,
              A8: `poor_high_control_separation`,
              B1: `edge_evaporation`,
              B12: `edge_evaporation`,
              C1: `edge_evaporation`,
              C12: `edge_evaporation`,
              D1: `edge_evaporation`,
              D12: `edge_evaporation`,
              E1: `edge_evaporation`,
              E12: `edge_evaporation`,
              F1: `edge_evaporation`,
              F12: `edge_evaporation`,
              G1: `edge_evaporation`,
              G12: `edge_evaporation`,
              H1: `edge_evaporation`,
              H2: `edge_evaporation`,
              H3: `edge_evaporation`,
              H4: `edge_evaporation`,
              H5: `poor_high_control_separation`,
              H6: `poor_high_control_separation`,
              H7: `poor_high_control_separation`,
              H8: `poor_high_control_separation`,
            },
          },
          P3: {
            controls: {
              dmso: [33858.4, 38195.88, 38303.09, 42099.59, 46993.51, 37565.92, 44793.34, 46928.69],
              high: [5301.89, 5462.17, 5424.84, 5482.29, 5952.36, 6482.39, 4480.46, 6261.95],
              blank: [754.17, 748.12, 714.92, 4891.26, 791.64, 619.76, 775.49, 682.55],
            },
            samples: {
              EGFR_C797S: [
                [41957.31, 39366.72, 37922.81, 39415.34, 29183.75, 18740.25],
                [38538.26, 43838.55, 41072.36, 35808.42, 31697.34, 21736.73],
              ],
              EGFR_G796D: [
                [45479.5, 35037.2, 37989.65, 36674.59, 26748.64, 18770.23],
                [40290.5, 37767.67, 39988.87, 37050.26, 31412.13, 27192.71],
              ],
              EGFR_L858R: [
                [47788.96, 35644.59, 31172.32, 15737.21, 9075.43, 7044.8],
                [43062.55, 39469.7, 29809.57, 15233.11, 9705.58, 7115.11],
              ],
              EGFR_T790M: [
                [50168.28, 37410.08, 37818.79, 31637.46, 22773.14, 13412.42],
                [44648.59, 33479.66, 41036.7, 30558.01, 20378.58, 12105.33],
              ],
              EGFR_T790M_C797S: [
                [45229.87, 39646.31, 41546.66, 38687.5, 37753.54, 25545.69],
                [40799.43, 39841.43, 41583.87, 38148.46, 39858.74, 41118.53],
              ],
              EGFR_WT: [
                [43777.65, 36741.76, 27198.58, 15750.43, 11024.56, 6691.11],
                [38627.31, 37238.9, 26932.74, 16015.78, 9686.14, 8952.54],
              ],
            },
            issue_tags: {
              A12: `blank_contamination`,
              B12: `column12_dispense_issue;bubble_or_low_volume`,
              C12: `column12_dispense_issue`,
              D12: `column12_dispense_issue`,
              E12: `column12_dispense_issue`,
              F12: `column12_dispense_issue`,
              G12: `column12_dispense_issue`,
            },
          },
        },
      },
      null,
      2,
    ),
    "```",
  ].join(`
`);
function nt(e, t) {
  return [e, t].some((e) => {
    let t = it(e);
    return $e.has(t);
  });
}
function K({ intl: e }) {
  return [
    rt({
      id: `default-life-sciences-blast`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.blast.title`,
        defaultMessage: `BLAST a sample protein sequence and return the top hits using the NCBI BLAST skill`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: et,
      skillNameToMention: Qe,
    }),
    rt({
      id: `default-life-sciences-lrrk2`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.lrrk2.title`,
        defaultMessage: `Assess LRRK2 as a Parkinson's target via parallel evidence lanes with subagents`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: tt,
    }),
    rt({
      id: `default-life-sciences-assay`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.assay.title`,
        defaultMessage: `Optimize a sample 96-well luminescence inhibition assay with CMPD-327`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: G,
    }),
  ];
}
function rt({ id: e, prompt: t, skillNameToMention: n, title: r }) {
  return {
    id: e,
    title: r,
    description: ``,
    prompt: t,
    appIds: [],
    status: `pending`,
    createdAtMs: U,
    updatedAtMs: U,
    homeAction: {
      type: `start-thread`,
      pluginNameToInstall: W,
      ...(n == null ? {} : { skillNameToMention: n }),
    },
    showTooltip: !1,
    source: `default`,
  };
}
function it(e) {
  return (e ?? ``)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`)
    .replace(/^-|-$/g, ``);
}
var at = 3;
function ot({
  dismissedDefaultSuggestionIds: e,
  generatedSuggestions: t,
  intl: n,
  onboardingSuggestions: r = [],
  selectedModel: i,
  selectedModelDisplayName: a = null,
}) {
  let o = t.map((e) => ({
    ...e,
    analyticsType: `generated`,
    homeAction: { type: `fill-composer` },
    source: `generated`,
  }));
  return r.some((e) => e.homeAction.type === `connect-plugin-onboarding`)
    ? r.slice(0, at)
    : (o.push(...r.filter((t) => !e.includes(t.id))),
      nt(i, a) && o.push(...K({ intl: n }).filter((t) => !e.includes(t.id))),
      o.slice(0, at));
}
function st(e) {
  return { source: e.source, action: e.homeAction.type, threadAction: `new-thread` };
}
var q = n(),
  J = 750,
  ct = new Set([
    `figma`,
    `file-csv`,
    `file-pdf`,
    `file-presentation`,
    `file-spreadsheet`,
    `file-word-document`,
    `gmail`,
    `google-calendar`,
    `google-drive`,
    `slack`,
  ]),
  Y = `opacity-85`;
function lt(e) {
  let t = (0, H.c)(25),
    {
      suggestions: n,
      apps: r,
      activeSuggestionId: i,
      disabled: a,
      headline: o,
      trailingAction: s,
      onStartSuggestion: c,
      onDismissSuggestion: l,
      onShowSuggestionTooltip: u,
      showDismissActions: d,
    } = e,
    f = a === void 0 ? !1 : a,
    p = d === void 0 ? !0 : d,
    m = h(),
    g,
    _,
    v,
    y;
  if (
    t[0] !== i ||
    t[1] !== r ||
    t[2] !== f ||
    t[3] !== o ||
    t[4] !== m ||
    t[5] !== l ||
    t[6] !== u ||
    t[7] !== c ||
    t[8] !== p ||
    t[9] !== n ||
    t[10] !== s
  ) {
    let e = r == null ? void 0 : Oe(r);
    ((g = s != null && (o != null || n.length > 0)),
      (_ = `mx-auto -my-1.5 flex w-full min-w-0 flex-col divide-y divide-token-border/70 select-none`),
      t[15] === o
        ? (v = t[16])
        : ((v =
            o == null
              ? null
              : (0, q.jsx)(X, {
                  icon: (0, q.jsx)(Ie, { className: `icon-xs shrink-0` }),
                  label: o,
                  labelClassName: `!overflow-visible !text-clip !whitespace-normal break-words`,
                })),
          (t[15] = o),
          (t[16] = v)),
      (y = n.map((t) => {
        let n = t.id === i,
          r = t.title.charAt(0).toLocaleUpperCase() + t.title.slice(1),
          a;
        for (let n of new Set(t.appIds)) {
          let t = Te(n);
          if (t != null) {
            a = { appId: n, Icon: t };
            break;
          }
          let r = e?.get(n);
          if (r?.logoUrl != null || r?.logoUrlDark != null) {
            a = { appId: n, app: r };
            break;
          }
        }
        return (0, q.jsx)(
          X,
          {
            dismissAction:
              p && l != null
                ? {
                    ariaLabel: m.formatMessage(
                      {
                        id: `home.ambientSuggestions.dismissSuggestion`,
                        defaultMessage: `Dismiss {title}`,
                        description: `Accessible label for dismissing an ambient suggestion row`,
                      },
                      { title: r },
                    ),
                    disabled: n,
                    onClick: () => {
                      l(t);
                    },
                  }
                : void 0,
            disabled: f || n,
            icon: ut(a),
            label: r,
            onClick: () => {
              c(t);
            },
            onTooltipShown: () => {
              u?.(t);
            },
            tooltipContent:
              t.showTooltip === !1 ? void 0 : (0, q.jsx)(dt, { description: t.description }),
          },
          t.id,
        );
      })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = f),
      (t[3] = o),
      (t[4] = m),
      (t[5] = l),
      (t[6] = u),
      (t[7] = c),
      (t[8] = p),
      (t[9] = n),
      (t[10] = s),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y));
  } else ((g = t[11]), (_ = t[12]), (v = t[13]), (y = t[14]));
  let b;
  t[17] !== g || t[18] !== s
    ? ((b = g
        ? (0, q.jsx)(X, {
            dismissAction: s.dismissAction,
            icon: s.icon,
            label: s.label,
            onClick: s.onClick,
          })
        : null),
      (t[17] = g),
      (t[18] = s),
      (t[19] = b))
    : (b = t[19]);
  let x;
  return (
    t[20] !== _ || t[21] !== v || t[22] !== y || t[23] !== b
      ? ((x = (0, q.jsxs)(`div`, { className: _, children: [v, y, b] })),
        (t[20] = _),
        (t[21] = v),
        (t[22] = y),
        (t[23] = b),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
function X(e) {
  let t = (0, H.c)(21),
    {
      dismissAction: n,
      disabled: r,
      icon: i,
      label: a,
      labelClassName: o,
      onClick: s,
      onTooltipShown: c,
      tooltipContent: l,
    } = e,
    u = r === void 0 ? !1 : r,
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = (0, q.jsx)(Me, { "aria-hidden": `true`, children: i })), (t[0] = i), (t[1] = d));
  let f;
  t[2] !== a || t[3] !== o
    ? ((f = (0, q.jsx)(Ne, { className: o, children: a })), (t[2] = a), (t[3] = o), (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== d || t[6] !== f
    ? ((p = (0, q.jsxs)(Pe, { children: [d, f] })), (t[5] = d), (t[6] = f), (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] !== m || t[9] !== u || t[10] !== s
    ? ((h =
        s == null
          ? (0, q.jsx)(`div`, {
              className: `flex min-w-0 flex-1 py-row-y pr-1 pl-3.5 text-left text-token-description-foreground`,
              children: m,
            })
          : (0, q.jsx)(`button`, {
              type: `button`,
              className: `flex min-w-0 flex-1 cursor-interaction py-row-y pr-1 pl-3.5 text-left text-token-description-foreground outline-hidden enabled:group-focus-within/ambient-suggestion-row:text-token-foreground enabled:group-hover/ambient-suggestion-row:text-token-foreground disabled:cursor-default disabled:opacity-70`,
              disabled: u,
              onClick: s,
              children: m,
            })),
      (t[8] = m),
      (t[9] = u),
      (t[10] = s),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    v;
  t[12] !== c || t[13] !== g || t[14] !== l
    ? ((v =
        l == null
          ? g
          : (0, q.jsx)(b, {
              children: (0, q.jsx)(x, {
                delayDuration: J,
                side: `top`,
                align: `center`,
                onOpenChange: (e) => {
                  e && c?.();
                },
                tooltipBodyClassName: `text-token-text-primary leading-5`,
                tooltipMaxWidth: `min(420px, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
                tooltipContent: l,
                children: g,
              }),
            })),
      (t[12] = c),
      (t[13] = g),
      (t[14] = l),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] === n
    ? (y = t[17])
    : ((y =
        n == null
          ? null
          : (0, q.jsx)(`button`, {
              type: `button`,
              className: _(
                `no-drag mr-0.5 flex size-4 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground opacity-0 select-none group-hover/ambient-suggestion-row:opacity-100 hover:bg-token-list-hover-background hover:opacity-100 focus:opacity-100 focus:outline-none`,
                n.disabled === !0 && `!opacity-40`,
              ),
              "aria-label": n.ariaLabel,
              disabled: n.disabled,
              onClick: n.onClick,
              children: (0, q.jsx)(C, { className: `icon-2xs` }),
            })),
      (t[16] = n),
      (t[17] = y));
  let S;
  return (
    t[18] !== v || t[19] !== y
      ? ((S = (0, q.jsxs)(`div`, {
          className: `group/ambient-suggestion-row flex min-w-0 items-center py-1.5`,
          children: [v, y],
        })),
        (t[18] = v),
        (t[19] = y),
        (t[20] = S))
      : (S = t[20]),
    S
  );
}
function ut(e) {
  return e == null
    ? (0, q.jsx)(Fe, { className: `icon-xs shrink-0` })
    : e.Icon == null
      ? (0, q.jsx)(je, {
          alt: ``,
          className: _(`icon-xs shrink-0 object-contain`, Y),
          logoUrl: e.app?.logoUrl,
          logoDarkUrl: e.app?.logoUrlDark,
          fallback: (0, q.jsx)(Fe, { className: `icon-xs shrink-0` }),
        })
      : (0, q.jsx)(e.Icon, {
          className: _(`icon-xs shrink-0 object-contain`, ct.has(e.appId) && Y),
        });
}
function dt({ description: e }) {
  let t = e.split(/(`[^`]+`)/g);
  return t.length === 1
    ? e
    : t.map((e, t) =>
        e.startsWith("`") && e.endsWith("`")
          ? (0, q.jsx)(
              `code`,
              {
                className: `inline rounded-sm border border-token-border bg-token-foreground/5 px-1 font-mono text-[10px] leading-[14px] text-token-text-secondary`,
                children: e.slice(1, -1),
              },
              t,
            )
          : e,
      );
}
function ft(e) {
  let t = (0, H.c)(31),
    {
      suggestions: n,
      leadingCard: r,
      appByAmbientSuggestionAppId: i,
      disabled: c,
      dismissAction: l,
      hostId: u,
    } = e,
    d = c === void 0 ? !1 : c,
    f = a(s),
    p = o(I),
    { openPluginInstall: m } = Se(),
    h = n.length + (r == null ? 0 : 1),
    g = h >= 2 && `[@container_(min-width:212px)]:grid-cols-2`,
    v = h === 3 && `[@container_(min-width:324px)]:grid-cols-3`,
    y = h >= 4 && `[@container_(min-width:436px)]:grid-cols-4`,
    b;
  t[0] !== g || t[1] !== v || t[2] !== y
    ? ((b = _(`grid grid-cols-1 items-stretch gap-3`, g, v, y)),
      (t[0] = g),
      (t[1] = v),
      (t[2] = y),
      (t[3] = b))
    : (b = t[3]);
  let x;
  if (
    t[4] !== i ||
    t[5] !== p ||
    t[6] !== d ||
    t[7] !== u ||
    t[8] !== m ||
    t[9] !== f ||
    t[10] !== n
  ) {
    let e;
    (t[12] !== i || t[13] !== p || t[14] !== d || t[15] !== u || t[16] !== m || t[17] !== f
      ? ((e = (e, t) => {
          let n = e.homeAction.plugin.plugin.installed && e.homeAction.plugin.plugin.enabled;
          return (0, q.jsxs)(
            `button`,
            {
              type: `button`,
              className: _(
                `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
                n || d
                  ? `cursor-default`
                  : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
                d && !n && `opacity-70`,
                !n && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
              ),
              disabled: d || n,
              onClick: () => {
                (M(f, A, {
                  promptId: e.id,
                  promptIndex: t,
                  promptType: e.analyticsType ?? e.source,
                  mode: p,
                }),
                  M(f, k, st(e)),
                  m(u, e.homeAction.plugin, { postInstallComposerPrefill: e.prompt }));
              },
              children: [
                (0, q.jsx)(`span`, {
                  className: _(`flex h-5 shrink-0 items-center`, n && `opacity-30`),
                  children: pt(e, i),
                }),
                (0, q.jsxs)(`span`, {
                  className: _(`flex w-full min-w-0 flex-col gap-1 text-base`, n && `opacity-30`),
                  children: [
                    (0, q.jsx)(`span`, {
                      className: `line-clamp-1 leading-[18px] text-token-text-primary`,
                      children: e.title,
                    }),
                    (0, q.jsx)(`span`, {
                      className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
                      children: e.description,
                    }),
                  ],
                }),
                n
                  ? (0, q.jsx)(Ke, {
                      "aria-hidden": `true`,
                      className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
                    })
                  : null,
              ],
            },
            e.id,
          );
        }),
        (t[12] = i),
        (t[13] = p),
        (t[14] = d),
        (t[15] = u),
        (t[16] = m),
        (t[17] = f),
        (t[18] = e))
      : (e = t[18]),
      (x = n.map(e)),
      (t[4] = i),
      (t[5] = p),
      (t[6] = d),
      (t[7] = u),
      (t[8] = m),
      (t[9] = f),
      (t[10] = n),
      (t[11] = x));
  } else x = t[11];
  let S;
  t[19] !== r || t[20] !== b || t[21] !== x
    ? ((S = (0, q.jsxs)(`div`, { className: b, children: [r, x] })),
      (t[19] = r),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let w;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, q.jsx)(C, { className: `icon-2xs` })), (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] !== l.ariaLabel || t[25] !== l.disabled || t[26] !== l.onClick
    ? ((T = (0, q.jsx)(`button`, {
        type: `button`,
        "aria-label": l.ariaLabel,
        className: `absolute top-4 right-0 cursor-interaction rounded-xl p-1 text-token-text-tertiary opacity-0 group-hover:opacity-100 hover:bg-token-foreground/5 hover:text-token-text-primary hover:opacity-100 focus-visible:opacity-100`,
        disabled: l.disabled,
        onClick: l.onClick,
        children: w,
      })),
      (t[24] = l.ariaLabel),
      (t[25] = l.disabled),
      (t[26] = l.onClick),
      (t[27] = T))
    : (T = t[27]);
  let E;
  return (
    t[28] !== S || t[29] !== T
      ? ((E = (0, q.jsxs)(`div`, {
          className: `group @container relative mx-auto w-full max-w-3xl min-w-0 px-8 pt-4`,
          children: [S, T],
        })),
        (t[28] = S),
        (t[29] = T),
        (t[30] = E))
      : (E = t[30]),
    E
  );
}
function pt(e, t) {
  let n = e.homeAction.plugin.plugin.name,
    r = Te(n);
  if (r != null)
    return (0, q.jsx)(r, { "aria-hidden": !0, className: `size-5 shrink-0 object-contain` });
  let i = e.homeAction.plugin.logoPath;
  if (i)
    return (0, q.jsx)(je, {
      alt: ``,
      className: `size-5 shrink-0 object-contain`,
      logoUrl: i,
      fallback: (0, q.jsx)(`span`, { className: `size-5 shrink-0 object-contain` }),
    });
  let a = t?.get(ke(n));
  return (0, q.jsx)(je, {
    alt: ``,
    appInfo: a,
    className: `size-5 shrink-0 object-contain`,
    fallback: (0, q.jsx)(`span`, { className: `block size-5 rounded bg-token-foreground/15` }),
  });
}
function mt(e) {
  let t = (0, H.c)(62),
    {
      activeSuggestionId: n,
      apps: r,
      categories: i,
      composerPrompt: o,
      disabled: c,
      initialCategoryId: l,
      onDismiss: u,
      onBackToCategories: d,
      onSelectCategory: f,
      onStartSuggestion: p,
    } = e,
    m = c === void 0 ? !1 : c,
    _ = l === void 0 ? null : l,
    v = a(s),
    b = h(),
    [x, S] = (0, V.useState)(_),
    [C, w] = (0, V.useState)(null),
    T,
    E;
  t[0] !== i || t[1] !== o || t[2] !== x
    ? ((T = i.find((e) => e.id === x) ?? null),
      (E = T != null && vt(o, T.starterPrompt)),
      (t[0] = i),
      (t[1] = o),
      (t[2] = x),
      (t[3] = T),
      (t[4] = E))
    : ((T = t[3]), (E = t[4]));
  let D = E,
    ee = T != null && C?.id === T.id && C.previousPrompt === o;
  T != null && (D ? C != null && w(null) : ee || (S(null), C != null && w(null)));
  let k = T != null && (D || ee) ? T : null,
    A;
  t[5] === b
    ? (A = t[6])
    : ((A = b.formatMessage({
        id: `home.newChatPageSuggestions.dismiss`,
        defaultMessage: `Dismiss new chat suggestions`,
        description: `Accessible label for dismissing the new chat suggestion surface`,
      })),
      (t[5] = b),
      (t[6] = A));
  let j = A,
    ne = (0, V.useRef)(!1),
    re;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((re = new Set()), (t[7] = re)) : (re = t[7]);
  let ie = (0, V.useRef)(re),
    ae,
    oe;
  (t[8] === v
    ? ((ae = t[9]), (oe = t[10]))
    : ((ae = () => {
        ne.current ||
          ((ne.current = !0), Q(v, { action: O.CODEX_NEW_CHAT_SUGGESTION_ACTION_DISPLAYED }));
      }),
      (oe = [v]),
      (t[8] = v),
      (t[9] = ae),
      (t[10] = oe)),
    (0, V.useEffect)(ae, oe));
  let se, ce;
  (t[11] !== v || t[12] !== k
    ? ((se = () => {
        k == null ||
          ie.current.has(k.id) ||
          (ie.current.add(k.id),
          M(v, te, {
            promptIds: k.suggestions.map(ht).join(`,`),
            promptTypes: k.suggestions.map(Z).join(`,`),
            promptCount: k.suggestions.length,
          }),
          Q(v, {
            action: O.CODEX_NEW_CHAT_SUGGESTION_ACTION_FOLLOW_UPS_DISPLAYED,
            categoryId: k.id,
            suggestionCount: k.suggestions.length,
          }));
      }),
      (ce = [v, k]),
      (t[11] = v),
      (t[12] = k),
      (t[13] = se),
      (t[14] = ce))
    : ((se = t[13]), (ce = t[14])),
    (0, V.useEffect)(se, ce));
  let N;
  t[15] !== u || t[16] !== v || t[17] !== x
    ? ((N = () => {
        (Q(v, { action: O.CODEX_NEW_CHAT_SUGGESTION_ACTION_DISMISSED, categoryId: x ?? void 0 }),
          u());
      }),
      (t[15] = u),
      (t[16] = v),
      (t[17] = x),
      (t[18] = N))
    : (N = t[18]);
  let P = N,
    F;
  t[19] !== o || t[20] !== f || t[21] !== v
    ? ((F = (e) => {
        (Q(v, { action: O.CODEX_NEW_CHAT_SUGGESTION_ACTION_CATEGORY_SELECTED, categoryId: e.id }),
          f(e),
          w({ id: e.id, previousPrompt: o }),
          S(e.id));
      }),
      (t[19] = o),
      (t[20] = f),
      (t[21] = v),
      (t[22] = F))
    : (F = t[22]);
  let I = F;
  if (k != null) {
    let e;
    t[23] !== m || t[24] !== P || t[25] !== j
      ? ((e = { ariaLabel: j, disabled: m, onClick: P }),
        (t[23] = m),
        (t[24] = P),
        (t[25] = j),
        (t[26] = e))
      : (e = t[26]);
    let i, a;
    t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, q.jsx)(qe, { className: `icon-xs shrink-0` })),
        (a = (0, q.jsx)(g, {
          id: `home.newChatPageSuggestions.back`,
          defaultMessage: `Back`,
          description: `Row label for returning from new chat follow-up suggestions`,
        })),
        (t[27] = i),
        (t[28] = a))
      : ((i = t[27]), (a = t[28]));
    let o;
    t[29] === d
      ? (o = t[30])
      : ((o = () => {
          (d(), w(null), S(null));
        }),
        (t[29] = d),
        (t[30] = o));
    let s;
    t[31] !== e || t[32] !== o
      ? ((s = { dismissAction: e, icon: i, label: a, onClick: o }),
        (t[31] = e),
        (t[32] = o),
        (t[33] = s))
      : (s = t[33]);
    let c;
    t[34] !== p || t[35] !== v || t[36] !== k.id || t[37] !== k.suggestions
      ? ((c = (e) => {
          let t = k.suggestions.findIndex((t) => t.id === e.id);
          (Q(v, {
            action: O.CODEX_NEW_CHAT_SUGGESTION_ACTION_FOLLOW_UP_SELECTED,
            categoryId: k.id,
            suggestionId: e.id,
            suggestionIndex: t,
          }),
            p(e, t));
        }),
        (t[34] = p),
        (t[35] = v),
        (t[36] = k.id),
        (t[37] = k.suggestions),
        (t[38] = c))
      : (c = t[38]);
    let l;
    return (
      t[39] !== n ||
      t[40] !== r ||
      t[41] !== m ||
      t[42] !== k.suggestions ||
      t[43] !== s ||
      t[44] !== c
        ? ((l = (0, q.jsx)(`div`, {
            className: `group/new-chat-page-suggestions flex flex-col`,
            children: (0, q.jsx)(lt, {
              activeSuggestionId: n,
              apps: r,
              disabled: m,
              suggestions: k.suggestions,
              trailingAction: s,
              onStartSuggestion: c,
              showDismissActions: !1,
            }),
          })),
          (t[39] = n),
          (t[40] = r),
          (t[41] = m),
          (t[42] = k.suggestions),
          (t[43] = s),
          (t[44] = c),
          (t[45] = l))
        : (l = t[45]),
      l
    );
  }
  let L;
  if (t[46] !== i || t[47] !== m || t[48] !== I) {
    let e;
    (t[50] !== m || t[51] !== I
      ? ((e = (e) =>
          (0, q.jsx)(
            gt,
            {
              disabled: m,
              icon: yt(e.id),
              label: e.title,
              onClick: () => {
                I(e);
              },
              trailingIcon: (0, q.jsx)(y, { className: `icon-2xs shrink-0` }),
            },
            e.id,
          )),
        (t[50] = m),
        (t[51] = I),
        (t[52] = e))
      : (e = t[52]),
      (L = i.map(e)),
      (t[46] = i),
      (t[47] = m),
      (t[48] = I),
      (t[49] = L));
  } else L = t[49];
  let R;
  t[53] === L
    ? (R = t[54])
    : ((R = (0, q.jsx)(`div`, {
        className: `mx-auto -my-1.5 flex w-full min-w-0 flex-col divide-y divide-token-border/70 select-none`,
        children: L,
      })),
      (t[53] = L),
      (t[54] = R));
  let z;
  t[55] !== m || t[56] !== P || t[57] !== j
    ? ((z = (0, q.jsx)(_t, { ariaLabel: j, disabled: m, onClick: P })),
      (t[55] = m),
      (t[56] = P),
      (t[57] = j),
      (t[58] = z))
    : (z = t[58]);
  let le;
  return (
    t[59] !== R || t[60] !== z
      ? ((le = (0, q.jsxs)(`div`, {
          className: `group/new-chat-page-suggestions flex flex-col`,
          children: [R, z],
        })),
        (t[59] = R),
        (t[60] = z),
        (t[61] = le))
      : (le = t[61]),
    le
  );
}
function Z(e) {
  return e.analyticsType ?? e.source;
}
function ht(e) {
  return e.id;
}
function gt(e) {
  let t = (0, H.c)(14),
    { disabled: n, icon: r, label: i, onClick: a, trailingIcon: o } = e,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = (0, q.jsx)(Me, { "aria-hidden": `true`, children: r })), (t[0] = r), (t[1] = s));
  let c;
  t[2] === i ? (c = t[3]) : ((c = (0, q.jsx)(Ne, { children: i })), (t[2] = i), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, q.jsxs)(Pe, { children: [s, c] })), (t[4] = s), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === o
    ? (u = t[8])
    : ((u =
        o == null
          ? null
          : (0, q.jsx)(`span`, {
              className: `ml-auto text-token-description-foreground`,
              children: o,
            })),
      (t[7] = o),
      (t[8] = u));
  let d;
  return (
    t[9] !== n || t[10] !== a || t[11] !== l || t[12] !== u
      ? ((d = (0, q.jsx)(`div`, {
          className: `flex min-w-0 items-center py-1.5`,
          children: (0, q.jsxs)(`button`, {
            type: `button`,
            className: `flex min-w-0 flex-1 cursor-interaction items-center py-row-y pr-1 pl-3.5 text-left text-token-description-foreground outline-hidden enabled:hover:text-token-foreground enabled:focus:text-token-foreground disabled:cursor-default disabled:opacity-70`,
            disabled: n,
            onClick: a,
            children: [l, u],
          }),
        })),
        (t[9] = n),
        (t[10] = a),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function _t(e) {
  let t = (0, H.c)(8),
    { ariaLabel: n, disabled: r, onClick: i } = e,
    a = r && `!opacity-40`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = _(
        `flex size-4 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground opacity-0 select-none group-hover/new-chat-page-suggestions:opacity-100 hover:bg-token-list-hover-background hover:opacity-100 focus:opacity-100 focus:outline-none`,
        a,
      )),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, q.jsx)(C, { className: `icon-2xs` })), (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== o
      ? ((c = (0, q.jsx)(`div`, {
          className: `mt-2 flex justify-end pr-0.5`,
          children: (0, q.jsx)(`button`, {
            type: `button`,
            className: o,
            "aria-label": n,
            disabled: r,
            onClick: i,
            children: s,
          }),
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function vt(e, t) {
  return e == null || e.startsWith(t);
}
function yt(e) {
  switch (e) {
    case `create`:
      return (0, q.jsx)(Ye, { className: `icon-xs shrink-0` });
    case `research`:
      return (0, q.jsx)(Je, { className: `icon-xs shrink-0` });
    case `briefing`:
      return (0, q.jsx)(Fe, { className: `icon-xs shrink-0` });
    case `automate`:
      return (0, q.jsx)(E, { className: `icon-xs shrink-0` });
  }
}
function Q(e, t) {
  M(e, D, t);
}
var bt = `new-chat-page-suggestions`,
  xt = `452956359`;
function $({
  generatedSuggestionsEnabled: e,
  hostId: t,
  onLocalConversationCreated: n,
  projectRoot: r,
}) {
  let c = a(s),
    u = h(),
    _ = re(),
    y = i(Ue, { hostId: t, projectRoot: r }),
    b = i(ze, { hostId: t, projectRoot: r }),
    x = i(Le, { hostId: t, projectRoot: r }),
    C = i(Re, { hostId: t, projectRoot: r }),
    { openPluginInstall: E } = Se(),
    [, D] = l(`composer_prefill`),
    {
      agentMode: O,
      isAgentModePending: F,
      permissionProfileId: R,
      shouldSendPermissionOverrides: z,
    } = ue({ conversationId: null, cwdOverride: r, hostId: t }),
    me = o(I),
    he = o(L),
    { activeMode: _e } = le(null),
    { modelSettings: ve } = oe(null),
    { serviceTierSettings: ye } = se(null),
    B = ie(),
    { headline: Te } = ce(),
    { data: ke } = P(),
    je = T(`4285716042`),
    Me = v(m.enabled) === !0,
    Ne = p(de),
    Pe = p(fe),
    [Fe, Ie] = f(pe),
    He = T(`4132970629`),
    Ke = T(`4214671466`),
    qe = w(xt),
    Je = r === `~`,
    { connectAppsRowLabel: Ye, suggestions: H } = Ze({ enabled: Je }),
    Xe =
      o(Ae) === !1
        ? St({
            dismissAction: {
              ariaLabel: u.formatMessage({
                id: `home.connectAppsRow.dismiss`,
                defaultMessage: `Dismiss connect apps row`,
                description: `Accessible label for dismissing the home page row that opens the plugins and apps browser`,
              }),
              onClick: () => {
                c.set(Ae, !0);
              },
            },
            label: Ye,
            navigate: _,
          })
        : void 0,
    U = e ? !Me || x : !0,
    W = (Fe && He && U) || Pe,
    Qe = C?.includes(bt) ?? !1,
    $e = U && Je && Ne.workMode === `non_coding` && !W && !Qe && qe.get(`enabled`, !1),
    et = be(B.email),
    tt = i(xe, et, { enabled: W || $e }),
    G = tt.data?.provider ?? (et == null || tt.isError ? `other` : null),
    K = $e && G != null,
    { data: rt } = ae({ hostId: t }),
    it = rt?.models.find((e) => e.model === ve.model)?.displayName ?? null,
    at = U && nt(ve.model, it),
    J = Ce(t, [], { enabled: W || at || K }),
    { availablePlugins: ct } = J,
    Y =
      W && G != null && !J.isLoading
        ? ge({
            intl: u,
            mailProvider: G,
            plan: ke?.plan_type ?? B.planAtLogin,
            plugins: ct,
            roles: Ne.roles,
          })
        : [],
    X = W && (Ke || Pe),
    ut = C?.includes(`onboarding-assistant`) ?? !1,
    dt =
      (Y.length > 0 || X) &&
      Y.every((e) =>
        e.homeAction.type === `connect-plugin-onboarding`
          ? e.homeAction.plugin.plugin.installed && e.homeAction.plugin.plugin.enabled
          : !1,
      ) &&
      (!X || ut);
  (0, V.useEffect)(() => {
    W && dt && Ie(!1);
  }, [dt, Ie, W]);
  let pt = Y.length > 0,
    Z = ot({
      dismissedDefaultSuggestionIds: C ?? [],
      generatedSuggestions: e && Me ? b : [],
      intl: u,
      onboardingSuggestions: pt ? Y : H,
      selectedModel: ve.model,
      selectedModelDisplayName: it,
    }),
    ht = !je || Te == null ? void 0 : Te.message_body,
    gt = K ? N({ intl: u, mailProvider: G ?? `other`, plugins: ct }) : [],
    _t = gt.flatMap((e) => e.suggestions),
    vt = r != null && U && (!$e || G != null),
    yt = Z.length > 0 && Z.every((e) => e.homeAction.type === `connect-plugin-onboarding`),
    Q = vt ? Z : [],
    $ = K ? [] : Q,
    wt = vt && (yt || [...Q, ..._t].some(({ appIds: e }) => De(e))),
    kt = Ee({ appIds: [...Q, ..._t].flatMap(({ appIds: e }) => e), enabled: wt, hostId: t }),
    At = we({ apps: kt, enabled: wt && kt != null }),
    jt = $.map((e) => e.id).join(`,`),
    Mt = $.map(Ot).join(`,`),
    Nt = $.filter((e) => e.source === `generated`)
      .map((e) => e.id)
      .join(`,`),
    Pt = (0, V.useRef)(null),
    Ft = (0, V.useRef)(new Set()),
    It = d(`ambient-suggestion-set-status`, {
      onMutate: (e) => {
        Ve(c, { hostId: t, projectRoot: e.projectRoot }, e.suggestionId, e.status);
      },
      onSuccess: (e, n) => {
        c.query.setData(Be, { hostId: t, projectRoot: n.projectRoot }, e);
      },
    }),
    Lt = (e, n) => {
      if (e.source === `default`) {
        Ge(c, { hostId: t, projectRoot: r }, e.id, n);
        return;
      }
      r != null && It.mutate({ hostId: t, projectRoot: r, suggestionId: e.id, status: n });
    };
  if (
    ((0, V.useEffect)(() => {
      if (!($.length === 0 || Pt.current === jt)) {
        if (((Pt.current = jt), Nt.length > 0))
          for (let e of Nt.split(`,`))
            Ft.current.has(e) ||
              (Ft.current.add(e),
              M(c, j, {
                source: `generated`,
                action: `fill-composer`,
                threadAction: `new-thread`,
              }));
        M(c, te, { promptIds: jt, promptTypes: Mt, promptCount: $.length });
      }
    }, [B.accountId, B.userId, c, Nt, $.length, jt, Mt]),
    !vt || (!K && ht == null && Q.length === 0))
  )
    return null;
  let Rt = async (e, i, a) => {
      if (F) return;
      c.set(Ue, { hostId: t, projectRoot: r }, e.id);
      let o = i ?? Q.findIndex((t) => t.id === e.id);
      (M(c, A, { promptId: e.id, promptIndex: o, promptType: Ot(e), mode: me }), M(c, k, st(e)));
      try {
        switch (e.homeAction.type) {
          case `fill-composer`:
            (Lt(e, `accepted`), D({ text: e.prompt }));
            break;
          case `connect-plugin-onboarding`:
            E(t, e.homeAction.plugin, { postInstallComposerPrefill: e.prompt, telemetry: a });
            break;
          case `start-thread`: {
            if (r == null) break;
            let i = await Ct({
                pluginName: e.homeAction.pluginNameToInstall,
                plugins: ct,
                refetchPlugins: J.refetch,
              }),
              a = await Tt({
                forceReloadPlugins: J.forceReload,
                hostId: t,
                invalidateSkills: () => {
                  c.queryClient.invalidateQueries({ queryKey: [`skills`] });
                },
                plugin: i,
              }),
              o = await Et({
                hostId: t,
                prompt: e.prompt,
                skillName: e.homeAction.skillNameToMention,
                skillsResponse: a,
              });
            (await Dt({
              agentMode: O,
              collaborationMode: _e,
              hostId: t,
              onLocalConversationCreated: n,
              permissionProfileId: R,
              projectRoot: r,
              serviceTier: ye.serviceTierForRequest,
              shouldSendPermissionOverrides: z,
              prompt: o,
            }),
              Lt(e, `accepted`));
            break;
          }
        }
      } catch {
        c.get(S).danger(
          (0, q.jsx)(g, {
            id: `home.ambientSuggestions.startError`,
            defaultMessage: `Unable to start this suggestion`,
            description: `Toast shown when launching an ambient suggestion fails`,
          }),
          { id: `ambient-suggestion-start-error` },
        );
      } finally {
        c.set(Ue, { hostId: t, projectRoot: r }, null);
      }
    },
    zt = (e) => {
      (c.set(Ue, { hostId: t, projectRoot: r }, e.id), M(c, ee, st(e)));
      try {
        Lt(e, `dismissed`);
      } finally {
        c.set(Ue, { hostId: t, projectRoot: r }, null);
      }
    };
  return K
    ? (0, q.jsx)(mt, {
        activeSuggestionId: y,
        apps: At,
        categories: gt,
        composerPrompt: he,
        disabled: F || J.isLoading,
        onDismiss: () => {
          Ge(c, { hostId: t, projectRoot: r }, bt, `dismissed`);
        },
        onBackToCategories: () => {
          D({ text: ``, clearText: !0 });
        },
        onSelectCategory: (e) => {
          D({ text: e.starterPrompt });
        },
        onStartSuggestion: (e, t) => {
          Rt(e, t, { source: `new_chat_page_suggestions`, suggestionId: e.id });
        },
      })
    : Z.every((e) => e.homeAction.type === `connect-plugin-onboarding`)
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            ht == null
              ? null
              : (0, q.jsx)(lt, {
                  suggestions: [],
                  apps: void 0,
                  activeSuggestionId: null,
                  headline: ht,
                  onStartSuggestion: (e) => {
                    Rt(e);
                  },
                  onDismissSuggestion: zt,
                }),
            (0, q.jsx)(ft, {
              hostId: t,
              suggestions: Z,
              leadingCard: X
                ? (0, q.jsx)(We, {
                    completed: ut,
                    hostId: t,
                    onLocalConversationCreated: n,
                    projectRoot: r,
                  })
                : void 0,
              appByAmbientSuggestionAppId: At == null ? void 0 : Oe(At),
              disabled: F,
              dismissAction: {
                ariaLabel: u.formatMessage({
                  id: `home.ambientSuggestions.dismissOnboardingPluginSuggestions`,
                  defaultMessage: `Dismiss onboarding plugin suggestions`,
                  description: `Accessible label for permanently dismissing the onboarding plugin suggestion cards`,
                }),
                disabled: F,
                onClick: () => {
                  Ie(!1);
                },
              },
            }),
          ],
        })
      : (0, q.jsx)(lt, {
          suggestions: Z,
          apps: At,
          activeSuggestionId: y,
          disabled: F,
          headline: ht,
          trailingAction: Xe,
          onStartSuggestion: (e) => {
            Rt(e);
          },
          onDismissSuggestion: zt,
          onShowSuggestionTooltip: (e) => {
            M(c, ne, st(e));
          },
        });
}
function St({ dismissAction: e, label: t, navigate: n }) {
  return {
    dismissAction: e,
    icon: (0, q.jsx)(_e, { className: `icon-xs shrink-0` }),
    label: t ?? (0, q.jsx)(g, { ...me }),
    onClick: () => {
      n(`/skills`);
    },
  };
}
async function Ct({ pluginName: e, plugins: t, refetchPlugins: n }) {
  return e == null ? null : (wt(t, e) ?? wt((await n()).availablePlugins, e));
}
function wt(e, t) {
  let n = e.filter(
    (e) =>
      !(e.plugin.installed && e.plugin.enabled) &&
      [e.plugin.id, e.plugin.name, e.displayName, e.marketplaceDisplayName].some((e) => {
        let n = ke(e ?? ``);
        return n === t || n.startsWith(t + `-`);
      }),
  );
  return n.find((e) => ke(e.marketplaceName).startsWith(`openai`)) ?? n[0] ?? null;
}
async function Tt({ forceReloadPlugins: e, hostId: t, invalidateSkills: n, plugin: r }) {
  if (r == null) return null;
  await c(`install-plugin`, { hostId: t, ...B(r) });
  let [, i] = await Promise.all([e(), c(`list-skills-for-host`, { forceReload: !0, hostId: t })]);
  return (n(), i);
}
async function Et({ hostId: e, prompt: t, skillName: n, skillsResponse: r }) {
  if (n == null) return t;
  let i = z(r ?? (await c(`list-skills-for-host`, { forceReload: !0, hostId: e })), n);
  return i == null ? t : `${t} ${R({ name: n, path: i.path })}`;
}
async function Dt({
  agentMode: e,
  collaborationMode: t,
  hostId: n,
  onLocalConversationCreated: r,
  permissionProfileId: i,
  projectRoot: a,
  serviceTier: o,
  shouldSendPermissionOverrides: s,
  prompt: l,
}) {
  let d = [a],
    f = ye(d),
    p = [{ type: `text`, text: l, text_elements: [] }],
    m = await ve(d, { prompt: l }),
    h = m.cwd ?? a;
  if (f && m.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: g } = await c(`read-config-for-host`, { hostId: n, includeLayers: !1, cwd: h });
  await r(
    await c(`start-conversation`, {
      hostId: n,
      ...F({
        input: p,
        workspaceRoots: m.workspaceRoots,
        cwd: h,
        fileAttachments: [],
        addedFiles: [],
        agentMode: e,
        permissionProfileId: i,
        shouldSendPermissionOverrides: s,
        model: null,
        serviceTier: o,
        reasoningEffort: null,
        collaborationMode: t,
        config: u(g),
        ...(f
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: m.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
function Ot(e) {
  return e.analyticsType ?? e.source;
}
function kt(e) {
  let t = (0, H.c)(11),
    { enabled: n, hostId: r, projectRoot: i, routeEntryKey: o } = e,
    c = a(s),
    l;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== c
    ? ((l = () => {
        n && i != null && c.query.fetch(Be, { hostId: r, projectRoot: i }).catch(At);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u;
  (t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== o || t[9] !== c
    ? ((u = [n, r, i, o, c]),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = o),
      (t[9] = c),
      (t[10] = u))
    : (u = t[10]),
    (0, V.useEffect)(l, u));
}
function At() {}
function jt(e) {
  let t = (0, H.c)(9),
    { enabled: n, hostId: r, plan: i, projectRoot: o } = e,
    c = a(s),
    l;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== c
    ? ((l = () => {
        n && o != null && c.query.fetch(He, { hostId: r, plan: i, projectRoot: o }).catch(Mt);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u = (0, V.useEffectEvent)(l),
    d;
  t[6] === u
    ? (d = t[7])
    : ((d = () => {
        if (window.electronBridge?.sendMessageFromView != null)
          return () => {
            globalThis.setTimeout(u, 0);
          };
      }),
      (t[6] = u),
      (t[7] = d));
  let f;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = []), (t[8] = f)) : (f = t[8]),
    (0, V.useEffect)(d, f));
}
function Mt() {}
function Nt(e) {
  let t = (0, H.c)(15),
    {
      generatedSuggestionsEnabled: n,
      hostId: r,
      onLocalConversationCreated: i,
      plan: a,
      projectRoot: o,
      routeEntryKey: s,
    } = e,
    c;
  (t[0] !== n || t[1] !== r || t[2] !== o || t[3] !== s
    ? ((c = { enabled: n, hostId: r, projectRoot: o, routeEntryKey: s }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]),
    kt(c));
  let l;
  (t[5] !== n || t[6] !== r || t[7] !== a || t[8] !== o
    ? ((l = { enabled: n, hostId: r, plan: a, projectRoot: o }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = l))
    : (l = t[9]),
    jt(l));
  let u;
  return (
    t[10] !== n || t[11] !== r || t[12] !== i || t[13] !== o
      ? ((u = (0, q.jsx)($, {
          generatedSuggestionsEnabled: n,
          hostId: r,
          onLocalConversationCreated: i,
          projectRoot: o,
        })),
        (t[10] = n),
        (t[11] = r),
        (t[12] = i),
        (t[13] = o),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
export { Nt as HomeAmbientSuggestionsContent };
//# sourceMappingURL=home-ambient-suggestions-content.js.map
