import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { Z as r, a as i, o as a, s as o, t as s } from "./app-scope-CWE-zIhQ.js";
import { Bt as c, T as l, k as u } from "./use-host-config.js";
import { B as d, ot as f, qi as p } from "./thread-context-inputs.js";
import { f as m, p as h } from "./vscode-api.js";
import "./isEqual.js";
import { w as g } from "./src-3.js";
import "./react-dom.js";
import { i as _, l as v, r as y } from "./lib-1.js";
import { a as b, l as x } from "./persisted-atom-store.js";
import { t as S } from "./clsx.js";
import { t as C } from "./proxy.js";
import { t as ee } from "./AnimatePresence.js";
import { t as te } from "./use-reduced-motion-2.js";
import "./codex-avatar-BvRO-FvR.js";
import { t as w } from "./avatar-mascot-button.js";
import { t as ne } from "./bullet-separator.js";
import { t as T } from "./button.js";
import { a as re } from "./setting-storage.js";
import "./reduced-motion-preference.js";
import "./use-reduced-motion-1.js";
import { t as E } from "./spinner.js";
import "./Combination.js";
import "./window-zoom-context.js";
import "./check-md.js";
import { t as D } from "./chevron-right.js";
import "./use-stable-callback.js";
import { t as ie } from "./tooltip-B.js";
import { t as ae } from "./context-menu.js";
import "./toast-signal.js";
import "./speaker.js";
import "./use-recording-waveform-Cfd-Ecbb.js";
import "./x.js";
import "./rpc-1.js";
import { o as oe } from "./statsig.js";
import "./microphone-input.js";
import "./request.js";
import { t as se } from "./chevron.js";
import { t as O } from "./clock-Cid-cc8u.js";
import { t as ce } from "./question-mark-circle.js";
import { t as k } from "./warning.js";
import "./waveform.js";
import {
  c as le,
  i as A,
  n as j,
  o as M,
  r as N,
  s as ue,
  t as de,
} from "./avatar-overlay-realtime-voice-button.js";
import "./markdown-to-search-text.js";
import "./marked.esm.js";
import { G as P, K as F, Y as I, n as fe, r as L } from "./product-logger.js";
import "./parse-directives.js";
import "./platform.js";
import "./persisted-signal.js";
import { c as pe } from "./app-server-manager-hooks.js";
import "./invalidate-queries-and-broadcast.js";
import "./config-queries.js";
import "./selectable-remote-connections-signal.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./use-global-state.js";
import "./model-queries.js";
import "./use-model-settings.js";
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
import "./use-service-tier-settings.js";
import "./_baseEach.js";
import "./_baseOrderBy.js";
import { D as R } from "./codex-api-C.js";
import "./use-debounced-value.js";
import { t as z } from "./use-collaboration-mode.js";
import "./collaboration-mode-queries.js";
import "./use-permissions-mode.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./uniq.js";
import { t as me } from "./check-circle-filled.js";
import "./git-availability-query.js";
import "./app-intl-signal.js";
import "./with-window.js";
import "./sidebar-thread-keys.js";
import "./folder.js";
import "./command-menu-state.js";
import "./modal-controller-state.js";
import "./dialog-layout.js";
import "./open-project-setup-dialog.js";
import "./local-projects.js";
import "./select-project.js";
import "./sidebar-project-group-signals.js";
import "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./run-command.js";
import "./use-register-command.js";
import "./use-skills.js";
import { t as B } from "./read-service-tier-for-request.js";
import "./realtime-controller.js";
import "./realtime-conversation-config.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./plugins-page-selectors-Cgs-kWA_.js";
import "./profile-queries.js";
import "./use-realtime-waveform.js";
import "./use-is-thread-realtime-enabled.js";
import { t as he } from "./avatar-overlay-analytics.js";
import { i as V } from "./custom-avatars-query.js";
import { t as ge } from "./use-floating-window-pointer-interactivity.js";
import {
  a as _e,
  c as ve,
  i as ye,
  l as be,
  n as xe,
  o as Se,
  r as Ce,
  s as H,
  t as U,
  u as we,
} from "./use-avatar-overlay-selection-C8f4-Bz8.js";
import "./use-avatar-options.js";
var W = r(),
  G = e(t(), 1),
  Te = 1600,
  K = 100,
  Ee = 320;
function De(e) {
  return { screenX: e.screenX, screenY: e.screenY, timeMs: e.timeStamp };
}
function Oe(e, t) {
  return e.hasMoved ? Ae(ke([...e.samples, t])) : null;
}
function ke(e) {
  let t = e.at(-1);
  return t == null ? e : e.filter((e) => t.timeMs - e.timeMs <= K);
}
function Ae(e) {
  let t = e.at(-1);
  if (t == null) return null;
  let n = e.find((e) => t.timeMs - e.timeMs > 16);
  if (n == null) return null;
  let r = (t.timeMs - n.timeMs) / 1e3;
  if (r <= 0) return null;
  let i = { x: (t.screenX - n.screenX) / r, y: (t.screenY - n.screenY) / r },
    a = Math.hypot(i.x, i.y);
  if (a < Ee) return null;
  if (a <= 1600) return i;
  let o = Te / a;
  return { x: i.x * o, y: i.y * o };
}
var q = n(),
  je = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,
  Me = `
precision highp float;

varying vec2 v_uv;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_micLevel;
uniform float u_stateListen;
uniform float u_stateThink;
uniform float u_stateSpeak;
uniform vec4 u_audio;
uniform vec4 u_cumulativeAudio;

#define PI 3.141592653589793
#define NUM_OCTAVES 5

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; i++) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
  vec3 burned = max(base + blend - vec3(1.0), vec3(0.0));
  return burned * opacity + base * (1.0 - opacity);
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
  vec3 low = 2.0 * base * blend;
  vec3 high = 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
  vec3 overlay = mix(low, high, step(vec3(0.5), base));
  return overlay * opacity + base * (1.0 - opacity);
}

void main() {
  vec2 st = v_uv - 0.5;
  st.x *= u_resolution.x / u_resolution.y;

  float sound = max(max(u_audio.x, u_audio.y), max(u_audio.z, u_audio.w));
  float stateAmount = max(u_stateListen, max(u_stateThink, u_stateSpeak));
  float speaking = u_stateSpeak;
  float thinking = u_stateThink;
  float listening = u_stateListen;
  float breath = sin(u_time * PI * 0.5) * 0.5 + 0.5;
  float entry = smoothstep(0.0, 0.9, stateAmount);
  float maxDrawableRadius = min(0.425, min(0.5, 0.5 * u_resolution.x / u_resolution.y) - 0.082);
  float baseRadius = mix(maxDrawableRadius * 0.84, maxDrawableRadius * 0.96, max(speaking, thinking));
  float radius = baseRadius * mix(0.82, 1.0, entry);
  radius = min(maxDrawableRadius, radius + u_micLevel * maxDrawableRadius * 0.1 + breath * maxDrawableRadius * 0.028 * listening);

  vec2 lifted = st - vec2(0.0, sin(u_time * PI * 0.5) * 0.01);
  float dist = length(lifted) - radius;
  float edge = smoothstep(0.012, -0.012, dist);
  float outerGlow = smoothstep(0.055, -0.03, dist) * 0.32;

  vec2 uv = lifted / (2.0 * radius) + 0.5;
  float overallSoundScale = 1.0 + sound * 0.35;
  float time = u_time * 0.72;
  vec2 warp = vec2(
    fbm(uv * 1.2 + vec2(0.0, 74.8572) + (time + u_cumulativeAudio.x * 0.05) * 0.09),
    fbm(uv * 1.2 + vec2(203.91282, 10.0) + (time + u_cumulativeAudio.z * 0.05) * 0.09)
  ) - 0.5;
  uv += warp * 0.13;
  uv += (fbm(uv * 18.0 + vec2(344.91282, time * 0.3)) - 0.5) * 0.006;
  uv.y -= 0.09;

  vec2 centeredUv = uv - 0.5;
  float radialLength = max(length(centeredUv), 0.001);
  vec2 radialFlow = centeredUv / radialLength;
  vec2 tangentFlow = vec2(-radialFlow.y, radialFlow.x);
  float flowPulse = sin(time * 1.6 + radialLength * 7.0 + u_cumulativeAudio.y * 0.1);
  uv += mix(radialFlow, normalize(radialFlow + tangentFlow * 0.72), speaking) * flowPulse * 0.01;

  vec2 stNoise = uv * 1.25;
  vec2 q = vec2(fbm(stNoise * 0.5 + 0.075 * (time + u_cumulativeAudio.w * 0.136)));
  vec2 r = vec2(
    fbm(stNoise + q + vec2(0.3, 9.2) + 0.15 * (time + u_cumulativeAudio.y * 0.234)),
    fbm(stNoise + q + vec2(8.3, 0.8) + 0.126 * (time + u_cumulativeAudio.z * 0.165))
  );
  float f = fbm(stNoise + r - q);
  float fullFbm = sqrt(((f + 0.6 * f * f + 0.7 * f) + 0.5) * 0.5);

  vec3 mainColor = mix(vec3(0.8627, 0.9686, 1.0), vec3(0.9255, 0.9843, 1.0), u_micLevel);
  vec3 lowColor = vec3(0.0039, 0.5059, 0.9961);
  vec3 midColor = mix(vec3(0.6431, 0.9373, 1.0), vec3(1.0, 0.9922, 0.9373), u_micLevel);
  vec3 highColor = vec3(1.0, 0.9922, 0.9373);

  vec3 sinOffsets = vec3(
    u_cumulativeAudio.x * 0.08 * overallSoundScale,
    -u_cumulativeAudio.y * 0.22 * overallSoundScale,
    u_cumulativeAudio.z * 0.65 * overallSoundScale
  );

  vec2 snUv = uv + vec2((fullFbm - 0.5) * 1.2, 0.025);
  float sn = noise(snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)) * 2.0;
  float sn2 = smoothstep(
    sn - 1.62,
    sn + 1.62,
    ((snUv.y - 0.5) * (5.0 - u_audio.x * 0.05 * overallSoundScale)) + 0.5
  );

  vec2 snUvBis = uv + vec2((fullFbm - 0.5) * 0.85, 0.025);
  float snBis = noise(snUvBis * 4.0 + vec2(sin(sinOffsets.y * 0.15) * 2.4 + 293.0, time + sinOffsets.y * 0.5)) * 2.0;
  float sn2Bis = smoothstep(
    snBis - ((0.9 + u_audio.y * 0.4) * 1.35),
    snBis + ((0.9 + u_audio.y * 0.8) * 1.35),
    ((snUvBis.y - 0.6) * (5.0 - u_audio.y * 0.75)) + 0.5
  );

  vec2 snUvThird = uv + vec2((fullFbm - 0.5) * 1.1);
  float snThird = noise(snUvThird * 6.0 + vec2(sin(sinOffsets.z * 0.1) * 2.4 + 153.0, time * 1.2 + sinOffsets.z * 0.8)) * 2.0;
  float sn2Third = smoothstep(
    snThird - 0.95,
    snThird + 0.95,
    ((snUvThird.y - 0.9) * 6.0) + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  vec3 color = blendLinearBurn(mainColor, lowColor, 1.0 - sn2);
  color = blendLinearBurn(color, mix(mainColor, midColor, 1.0 - sn2Bis), sn2);
  color = mix(color, mix(mainColor, highColor, 1.0 - sn2Third), sn2 * sn2Bis);

  float whiteOverlay = pow(smoothstep(0.55 * thinking, 0.0, length(uv - 0.5)), 2.0) * thinking;
  color = blendOverlay(color, vec3(1.0, 0.992, 0.937), whiteOverlay);
  float radial = length(uv - 0.5);
  float veilNoise = fbm(uv * 6.0 + r * 0.55 + vec2(time * 0.13, -time * 0.08));
  float innerVeil = smoothstep(0.54, 0.86, veilNoise) * (1.0 - smoothstep(0.34, 0.57, radial));
  float softEdgeLight = smoothstep(0.2, 0.5, radial) * (1.0 - smoothstep(0.46, 0.62, radial));
  color = mix(color, highColor, innerVeil * 0.24);
  color = mix(color, midColor, softEdgeLight * 0.12);
  color += highColor * pow(max(0.0, 1.0 - length(uv - 0.47) * 2.4), 3.0) * 0.05;
  color = mix(color, color * 1.04 + highColor * 0.06, speaking);

  float glowNoise = fbm(st * 3.6 + vec2(time * 0.24, -time * 0.15));
  float glowBreath = 0.82 + 0.18 * sin(time * 2.2 + glowNoise * 2.8);
  float halo = smoothstep(0.12, -0.018, dist) * (1.0 - edge);
  float softAura = smoothstep(0.2, -0.04, dist) * (1.0 - edge);
  float glowStrength = stateAmount * (0.22 + speaking * 0.34 + thinking * 0.14 + u_micLevel * 0.14);
  float glowAlpha =
    (halo * (0.74 + glowNoise * 0.28) + softAura * 0.34) *
    glowStrength *
    glowBreath;
  vec3 haloColor = mix(vec3(0.42, 0.88, 1.0), vec3(1.0, 0.88, 0.48), speaking * 0.58 + u_micLevel * 0.22);

  float orbAlpha = min(1.0, edge + outerGlow) * smoothstep(0.0, 0.18, stateAmount + 0.3);
  float alpha = min(1.0, orbAlpha + glowAlpha);
  vec3 finalColor = ((color * orbAlpha) + (haloColor * glowAlpha)) / max(alpha, 0.001);
  gl_FragColor = vec4(finalColor, alpha);
}
`,
  Ne = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
function Pe(e) {
  let t = (0, W.c)(14),
    {
      audioStream: n,
      className: r,
      phase: i,
      previewAudioLevel: a,
      previewTimeMs: o,
      voiceActivity: s,
    } = e,
    c = n === void 0 ? null : n,
    l = a === void 0 ? 0 : a,
    u = (0, G.useRef)(null),
    d = (0, G.useRef)(null),
    f = o ?? void 0,
    p,
    m;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => {
        let e = u.current;
        if (e == null) return;
        let t = new Fe(e);
        return (
          (d.current = t),
          t.start(),
          () => {
            (t.dispose(), (d.current = null));
          }
        );
      }),
      (m = []),
      (t[0] = p),
      (t[1] = m))
    : ((p = t[0]), (m = t[1])),
    (0, G.useEffect)(p, m));
  let h, g;
  (t[2] !== c || t[3] !== i || t[4] !== l || t[5] !== f || t[6] !== s
    ? ((h = () => {
        d.current?.setInputs({
          audioStream: c,
          phase: i,
          previewAudioLevel: l,
          previewTimeMs: f,
          voiceActivity: s,
        });
      }),
      (g = [c, i, l, f, s]),
      (t[2] = c),
      (t[3] = i),
      (t[4] = l),
      (t[5] = f),
      (t[6] = s),
      (t[7] = h),
      (t[8] = g))
    : ((h = t[7]), (g = t[8])),
    (0, G.useEffect)(h, g));
  let _;
  t[9] === r
    ? (_ = t[10])
    : ((_ = S(`codex-avatar-root relative flex h-full w-full items-center justify-center`, r)),
      (t[9] = r),
      (t[10] = _));
  let v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, q.jsx)(`canvas`, { ref: u, className: `block h-full w-full` })), (t[11] = v))
    : (v = t[11]);
  let y;
  return (
    t[12] === _
      ? (y = t[13])
      : ((y = (0, q.jsx)(`div`, {
          "aria-hidden": `true`,
          className: _,
          "data-avatar-mascot": `true`,
          "data-testid": `avatar-overlay-voice-orb`,
          children: v,
        })),
        (t[12] = _),
        (t[13] = y)),
    y
  );
}
var Fe = class {
  animationFrameId = null;
  audioContext = null;
  audioData = new Float32Array(4);
  audioSource = null;
  audioStream = null;
  analyser = null;
  canvasContext = null;
  cumulativeAudioData = new Float32Array(4);
  frequencyData = new Uint8Array();
  gl = null;
  inputs = {
    audioStream: null,
    phase: `inactive`,
    previewAudioLevel: 0,
    previewTimeMs: void 0,
    voiceActivity: `idle`,
  };
  lastFrameTime = 0;
  micLevel = 0;
  program = null;
  stateListen = 0;
  stateSpeak = 0;
  stateThink = 0;
  uniforms = null;
  constructor(e) {
    if (
      ((this.canvas = e),
      (this.gl = e.getContext(`webgl`, { alpha: !0, antialias: !0, premultipliedAlpha: !1 })),
      this.gl == null)
    ) {
      this.canvasContext = e.getContext(`2d`);
      return;
    }
    this.createProgram(this.gl);
  }
  start() {
    if (this.inputs.previewTimeMs != null) {
      this.render(this.inputs.previewTimeMs / 1e3);
      return;
    }
    ((this.lastFrameTime = performance.now() / 1e3),
      (this.animationFrameId = window.requestAnimationFrame(this.renderFrame)));
  }
  setInputs(e) {
    if (((this.inputs = e), this.setAudioStream(e.audioStream), e.previewTimeMs != null)) {
      this.render(e.previewTimeMs / 1e3);
      return;
    }
    this.animationFrameId ??=
      ((this.lastFrameTime = performance.now() / 1e3),
      window.requestAnimationFrame(this.renderFrame));
  }
  dispose() {
    (this.animationFrameId != null &&
      (window.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = null)),
      this.setAudioStream(null));
  }
  renderFrame = (e) => {
    ((this.animationFrameId = null),
      this.render(e / 1e3),
      this.inputs.previewTimeMs ??
        (this.animationFrameId = window.requestAnimationFrame(this.renderFrame)));
  };
  createProgram(e) {
    let t = e.createProgram();
    if (t == null) {
      ((this.gl = null), (this.canvasContext = this.canvas.getContext(`2d`)));
      return;
    }
    let n = Ie(e, e.VERTEX_SHADER, je),
      r = Ie(e, e.FRAGMENT_SHADER, Me);
    if (
      (e.attachShader(t, n),
      e.attachShader(t, r),
      e.linkProgram(t),
      !e.getProgramParameter(t, e.LINK_STATUS))
    ) {
      ((this.gl = null), (this.canvasContext = this.canvas.getContext(`2d`)));
      return;
    }
    let i = e.getAttribLocation(t, `a_position`),
      a = e.createBuffer();
    (e.bindBuffer(e.ARRAY_BUFFER, a),
      e.bufferData(e.ARRAY_BUFFER, Ne, e.STATIC_DRAW),
      e.viewport(0, 0, this.canvas.width, this.canvas.height),
      e.useProgram(t),
      e.enableVertexAttribArray(i),
      e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0),
      e.enable(e.BLEND),
      e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA),
      (this.program = t),
      (this.uniforms = {
        audio: Le(e, t, `u_audio`),
        cumulativeAudio: Le(e, t, `u_cumulativeAudio`),
        micLevel: Le(e, t, `u_micLevel`),
        resolution: Le(e, t, `u_resolution`),
        stateListen: Le(e, t, `u_stateListen`),
        stateSpeak: Le(e, t, `u_stateSpeak`),
        stateThink: Le(e, t, `u_stateThink`),
        time: Le(e, t, `u_time`),
      }));
  }
  render(e) {
    let t = this.lastFrameTime === 0 ? 0.016 : Math.min(0.05, e - this.lastFrameTime);
    if (
      ((this.lastFrameTime = e),
      this.updateState(t, e),
      this.updateAudio(t, e),
      this.resizeCanvas(),
      this.gl == null || this.program == null || this.uniforms == null)
    ) {
      this.renderCanvasFallback(e);
      return;
    }
    (this.gl.clearColor(0, 0, 0, 0),
      this.gl.clear(this.gl.COLOR_BUFFER_BIT),
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height),
      this.gl.useProgram(this.program),
      this.gl.uniform1f(this.uniforms.time, e),
      this.gl.uniform1f(this.uniforms.micLevel, this.micLevel),
      this.gl.uniform1f(this.uniforms.stateListen, this.stateListen),
      this.gl.uniform1f(this.uniforms.stateThink, this.stateThink),
      this.gl.uniform1f(this.uniforms.stateSpeak, this.stateSpeak),
      this.gl.uniform2f(this.uniforms.resolution, this.canvas.width, this.canvas.height),
      this.gl.uniform4fv(this.uniforms.audio, this.audioData),
      this.gl.uniform4fv(this.uniforms.cumulativeAudio, this.cumulativeAudioData),
      this.gl.drawArrays(this.gl.TRIANGLES, 0, 6));
  }
  resizeCanvas() {
    let e = Math.min(window.devicePixelRatio || 1, 2),
      t = Math.max(1, Math.round(this.canvas.clientWidth * e)),
      n = Math.max(1, Math.round(this.canvas.clientHeight * e));
    (this.canvas.width !== t && (this.canvas.width = t),
      this.canvas.height !== n && (this.canvas.height = n));
  }
  updateState(e, t) {
    let n = Re(this.inputs.phase, this.inputs.voiceActivity),
      r = this.inputs.previewTimeMs == null ? 1 - 0.001 ** e : 1;
    ((this.stateListen += (n.listen - this.stateListen) * r),
      (this.stateThink += (n.think - this.stateThink) * r),
      (this.stateSpeak += (n.speak - this.stateSpeak) * r),
      this.inputs.phase === `starting` &&
        (this.stateThink = Math.max(this.stateThink, 0.6 + Math.sin(t * 2) * 0.04)));
  }
  updateAudio(e, t) {
    if (this.analyser != null && this.frequencyData.length > 0) {
      this.analyser.getByteFrequencyData(this.frequencyData);
      let t = ze(this.frequencyData),
        n = this.inputs.voiceActivity === `speaking` ? 0.08 : 0.12,
        r = this.inputs.voiceActivity === `speaking` ? 3.5 : 4.5;
      for (let i = 0; i < this.audioData.length; i += 1)
        ((this.audioData[i] += (t[i] - this.audioData[i]) * n),
          (this.cumulativeAudioData[i] += this.audioData[i] * e * r));
      this.micLevel += (Math.max(t[0], t[1], t[2], t[3]) - this.micLevel) * 0.08;
      return;
    }
    let n = Be(this.inputs.voiceActivity, this.inputs.previewAudioLevel, t),
      r = this.inputs.voiceActivity === `speaking` ? 0.08 : 0.1;
    for (let t = 0; t < this.audioData.length; t += 1)
      ((this.audioData[t] += (n[t] - this.audioData[t]) * r),
        (this.cumulativeAudioData[t] += this.audioData[t] * e * 4));
    this.micLevel += (n[3] - this.micLevel) * 0.08;
  }
  setAudioStream(e) {
    if (
      this.audioStream === e ||
      (this.audioSource?.disconnect(),
      this.audioContext?.close().catch(() => {}),
      (this.audioContext = null),
      (this.audioSource = null),
      (this.analyser = null),
      (this.frequencyData = new Uint8Array()),
      (this.audioStream = e),
      e == null || typeof AudioContext > `u`)
    )
      return;
    let t = new AudioContext(),
      n = t.createAnalyser();
    ((n.fftSize = 128), (n.smoothingTimeConstant = 0.72));
    let r = t.createMediaStreamSource(e);
    (r.connect(n),
      (this.audioContext = t),
      (this.audioSource = r),
      (this.analyser = n),
      (this.frequencyData = new Uint8Array(n.frequencyBinCount)));
  }
  renderCanvasFallback(e) {
    if (this.canvasContext == null) return;
    let t = this.canvasContext,
      n = Math.min(this.canvas.width, this.canvas.height) * 0.42,
      r = this.canvas.width / 2,
      i = this.canvas.height / 2 + Math.sin(e * 1.5) * 2;
    t.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let a = t.createRadialGradient(r - n * 0.22, i - n * 0.28, n * 0.08, r, i, n);
    (a.addColorStop(0, `rgba(255, 253, 239, 0.98)`),
      a.addColorStop(0.42, `rgba(164, 239, 255, 0.9)`),
      a.addColorStop(0.78, `rgba(1, 129, 254, 0.82)`),
      a.addColorStop(1, `rgba(1, 129, 254, 0)`),
      (t.fillStyle = a),
      t.beginPath(),
      t.arc(r, i, n * (1 + this.micLevel * 0.08), 0, Math.PI * 2),
      t.fill());
  }
};
function Ie(e, t, n) {
  let r = e.createShader(t);
  if (r == null) throw Error(`Unable to create voice orb shader`);
  if ((e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)))
    throw Error(`Unable to compile voice orb shader`);
  return r;
}
function Le(e, t, n) {
  let r = e.getUniformLocation(t, n);
  if (r == null) throw Error(`Voice orb shader is missing ${n}`);
  return r;
}
function Re(e, t) {
  switch (e) {
    case `inactive`:
      return { listen: 0, speak: 0, think: 0 };
    case `starting`:
      return { listen: 0, speak: 0, think: 1 };
    case `stopping`:
      return { listen: 0.35, speak: 0, think: 0 };
    case `active`:
      break;
  }
  switch (t) {
    case `idle`:
    case `listening`:
      return { listen: 1, speak: 0, think: 0 };
    case `thinking`:
      return { listen: 0.65, speak: 0, think: 1 };
    case `speaking`:
      return { listen: 0.2, speak: 1, think: 0 };
  }
}
function ze(e) {
  let t = new Float32Array(4),
    n = Math.max(1, Math.floor(e.length / t.length));
  for (let r = 0; r < t.length; r += 1) {
    let i = 0;
    for (let t = 0; t < n; t += 1) i += e[r * n + t] ?? 0;
    t[r] = Math.min(1, (i / n / 255) ** 0.72 * 1.5);
  }
  return t;
}
function Be(e, t, n) {
  let r = Math.max(0, Math.min(1, t)),
    i = e === `speaking` ? 0.28 + (Math.sin(n * 10.7) * 0.5 + 0.5) * 0.36 : 0,
    a = e === `thinking` ? 0.12 + (Math.sin(n * 2.1) * 0.5 + 0.5) * 0.08 : 0,
    o = Math.max(r, i, a);
  return new Float32Array([
    o * (0.8 + Math.sin(n * 1.7) * 0.2),
    o * (0.72 + Math.sin(n * 2.3 + 1.2) * 0.24),
    o * (0.62 + Math.sin(n * 3.1 + 2.1) * 0.28),
    Math.min(1, o * 1.05),
  ]);
}
var J = _({
    mascotLabel: {
      id: `petOverlay.mascotLabel`,
      defaultMessage: `{petName} pet`,
      description: `Accessible label for the floating Codex pet`,
    },
    openNotification: {
      id: `avatarOverlay.openNotification`,
      defaultMessage: `Open notification`,
      description: `Accessible label for an actionable row in the floating avatar notification tray`,
    },
    dismissNotification: {
      id: `avatarOverlay.dismissNotification`,
      defaultMessage: `Dismiss {title}`,
      description: `Accessible label for dismissing a notification in the floating avatar notification tray`,
    },
    dismissNotificationTooltip: {
      id: `avatarOverlay.dismissNotificationTooltip`,
      defaultMessage: `Dismiss`,
      description: `Tooltip for the icon button that dismisses a floating avatar notification`,
    },
    replyNotification: {
      id: `avatarOverlay.replyNotification`,
      defaultMessage: `Reply to {title}`,
      description: `Accessible label for replying to a floating avatar notification`,
    },
    replyNotificationButton: {
      id: `avatarOverlay.replyNotificationButton`,
      defaultMessage: `Reply`,
      description: `Compact button label for replying to a floating avatar notification`,
    },
    sendNotificationReply: {
      id: `avatarOverlay.sendNotificationReply`,
      defaultMessage: `Send reply to {title}`,
      description: `Accessible label for submitting a floating avatar notification reply`,
    },
    notificationReplyPlaceholder: {
      id: `avatarOverlay.notificationReplyPlaceholder`,
      defaultMessage: `Reply`,
      description: `Placeholder for the one-line floating avatar notification reply input`,
    },
    notificationReplyError: {
      id: `avatarOverlay.notificationReplyError`,
      defaultMessage: `Unable to send reply`,
      description: `Compact error shown when a floating avatar notification reply fails`,
    },
    expandNotification: {
      id: `avatarOverlay.expandNotification`,
      defaultMessage: `Expand {title}`,
      description: `Accessible label for expanding a floating avatar notification row`,
    },
    collapseNotification: {
      id: `avatarOverlay.collapseNotification`,
      defaultMessage: `Collapse {title}`,
      description: `Accessible label for collapsing a floating avatar notification row`,
    },
    expandNotificationTooltip: {
      id: `avatarOverlay.expandNotificationTooltip`,
      defaultMessage: `Expand`,
      description: `Tooltip for the icon button that expands a floating avatar notification`,
    },
    collapseNotificationTooltip: {
      id: `avatarOverlay.collapseNotificationTooltip`,
      defaultMessage: `Collapse`,
      description: `Tooltip for the icon button that collapses a floating avatar notification`,
    },
    collapseNotificationTray: {
      id: `avatarOverlay.collapseNotificationTray`,
      defaultMessage: `Collapse activity`,
      description: `Accessible label and tooltip for the button that collapses the floating avatar activity tray`,
    },
    resizeMascot: {
      id: `avatarOverlay.resizeMascot`,
      defaultMessage: `Resize pet`,
      description: `Accessible label for the handle that resizes the floating Codex pet`,
    },
    notificationList: {
      id: `avatarOverlay.notificationList`,
      defaultMessage: `Activity notifications`,
      description: `Accessible label for the list of floating avatar activity notifications`,
    },
    latestNotifications: {
      id: `avatarOverlay.latestNotifications`,
      defaultMessage: `Latest`,
      description: `Label for the button that scrolls the floating avatar activity list back to the newest notifications`,
    },
    showLatestNotifications: {
      id: `avatarOverlay.showLatestNotifications`,
      defaultMessage: `Show latest activity`,
      description: `Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications`,
    },
    showOlderNotifications: {
      id: `avatarOverlay.showOlderNotifications`,
      defaultMessage: `Show {count, plural, one {# older activity item} other {# older activity items}}`,
      description: `Accessible label for the button that scrolls the floating avatar activity list toward older notifications`,
    },
    olderNotificationCount: {
      id: `avatarOverlay.olderNotificationCount`,
      defaultMessage: `{count, plural, one {# more} other {# more}}`,
      description: `Label for the button that shows there are more floating avatar activity notifications below`,
    },
    compactOlderNotificationCount: {
      id: `avatarOverlay.compactOlderNotificationCount`,
      defaultMessage: `+{count}`,
      description: `Compact label for the edge button that shows hidden floating avatar activity notifications`,
    },
    questionStatusIcon: {
      id: `avatarOverlay.questionStatusIcon`,
      defaultMessage: `Question`,
      description: `Accessible label for a floating avatar notification waiting on a question answer`,
    },
    compactPatchFileCount: {
      id: `avatarOverlay.compactPatchFileCount`,
      defaultMessage: `{count, plural, one {# file} other {# files}}`,
      description: `Compact file count for a patch request in the floating avatar notification tray`,
    },
    compactPatchAdditions: {
      id: `avatarOverlay.compactPatchAdditions`,
      defaultMessage: `+{count}`,
      description: `Compact additions count for a patch request in the floating avatar notification tray`,
    },
    compactPatchDeletions: {
      id: `avatarOverlay.compactPatchDeletions`,
      defaultMessage: `-{count}`,
      description: `Compact deletions count for a patch request in the floating avatar notification tray`,
    },
  }),
  Y = 2,
  Ve = 2,
  He = 0.035,
  Ue = 32,
  We = 84,
  Ge = 512,
  Ke = 1,
  qe = `group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]`,
  Je = `!bg-token-main-surface-primary enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_94%,var(--color-token-foreground))]`;
function Ye({
  avatar: e,
  avatarMenuItems: t,
  canStartRealtimeVoice: n = !1,
  interactiveRegionRef: r,
  isDragging: i = !1,
  isRealtimeVoiceControlAreaHovered: a = !1,
  isNotificationTrayOpen: o = !0,
  realtimeVoiceActivity: s = `idle`,
  realtimeVoiceAudioStream: c = null,
  realtimeVoiceWaveformCanvasRef: l,
  usePetForRealtimeVoice: u = !1,
  realtimeVoiceCaption: d,
  realtimeVoiceIsMicrophoneMuted: f = !1,
  realtimeVoiceIsMuted: p = !1,
  realtimeVoicePhase: m = `inactive`,
  layout: h,
  mascotLayout: g = h.mascot,
  mascotStyle: _,
  mascotDragState: y,
  mascotResizeHandle: b,
  notifications: x,
  onLostPointerCapture: ee,
  onCloseNotificationTray: ne,
  onPointerCancel: T,
  onPointerDown: re,
  onPointerMove: E,
  onPointerUp: D,
  onDismissNotification: ie,
  onRunNotificationAction: oe,
  onSubmitQuestionOption: O,
  onNotificationReplyEditorActiveChange: ce,
  onOpenNotificationReply: k,
  onSubmitNotificationReply: le,
  onOpenNotificationTray: A,
  onStartRealtimeVoice: j,
  onStopRealtimeVoice: M,
  onToggleRealtimeVoiceMicrophoneMute: N,
  onToggleRealtimeVoiceMute: P,
}) {
  let F = v(),
    I = te(),
    fe = ue(x[0]),
    L = x.length > 0,
    pe = m !== `inactive` && !u,
    R = pe ? { ...g, height: 121, width: 112 } : g,
    z = L && o,
    me = a && !i,
    B = z || d != null,
    he = L || B,
    V = h.placement.startsWith(`top`),
    ge = h.placement.endsWith(`end`),
    _e = x.length > Y,
    ve = h.tray == null ? void 0 : Math.max(0, h.tray.height),
    ye = `${V ? `bottom` : `top`} ${ge ? `right` : `left`}`,
    be;
  return (
    z
      ? (be = {
          ariaLabel: F.formatMessage(J.collapseNotificationTray),
          backgroundColor: `var(--color-token-bg-primary)`,
          content: (0, q.jsx)(se, { className: `icon-xs opacity-80` }),
          foregroundColor: `var(--color-token-text-secondary)`,
          isIconOnly: !0,
          onClick: ne,
        })
      : L &&
        (be = {
          ariaLabel: F.formatMessage(
            {
              id: `avatarOverlay.toggleNotificationTray`,
              defaultMessage: `Open activity tray, {count, plural, one {# item} other {# items}}`,
              description: `Accessible label for the floating avatar activity count button`,
            },
            { count: x.length },
          ),
          backgroundColor: fe.badgeBackgroundColor,
          content: x.length,
          foregroundColor: fe.badgeForegroundColor,
          onClick: A,
        }),
    (0, q.jsx)(`main`, {
      className: `relative h-screen w-screen overflow-hidden bg-transparent`,
      children: (0, q.jsxs)(`section`, {
        ref: r,
        "data-avatar-overlay-content-frame": `true`,
        className: `relative h-full w-full cursor-grab active:cursor-grabbing`,
        onLostPointerCapture: ee,
        onPointerCancel: T,
        onPointerDown: re,
        onPointerMove: E,
        onPointerUp: D,
        children: [
          he
            ? (0, q.jsx)(`div`, {
                "aria-hidden": B ? void 0 : !0,
                "data-avatar-overlay-hit-region": `notification-tray`,
                inert: !B,
                className: S(
                  `absolute flex cursor-interaction text-sm text-token-foreground`,
                  V ? `items-end` : `items-start`,
                ),
                style: {
                  height: h.tray?.height,
                  left: h.tray?.left,
                  pointerEvents: B ? void 0 : `none`,
                  top: h.tray?.top,
                  visibility: h.tray == null ? `hidden` : void 0,
                  width: h.tray?.width,
                },
                children: (0, q.jsxs)(C.div, {
                  animate: { opacity: B ? 1 : 0, scale: B || I ? 1 : 0.97, y: B || I ? 0 : 8 },
                  className: `relative w-full overflow-hidden [corner-shape:superellipse(1.5)]`,
                  "data-avatar-overlay-size": `notification-tray`,
                  initial: !1,
                  style: _e ? { maxHeight: ve, transformOrigin: ye } : { transformOrigin: ye },
                  transition: I
                    ? { duration: 0 }
                    : { damping: 26, mass: 0.8, stiffness: 360, type: `spring` },
                  children: [
                    (0, q.jsx)(`div`, {
                      className: `h-0 overflow-hidden`,
                      "data-avatar-overlay-size": `notification-tray-header`,
                    }),
                    (0, q.jsx)(`div`, {
                      children: (0, q.jsx)(Xe, {
                        areNotificationsVisible: z,
                        isTrayAboveMascot: V,
                        isNotificationTrayVisible: B,
                        notifications: x,
                        prefersReducedMotion: !!I,
                        realtimeVoiceCaption: d,
                        trayMaxHeight: ve,
                        onDismissNotification: ie,
                        onRunNotificationAction: oe,
                        onSubmitQuestionOption: O,
                        onNotificationReplyEditorActiveChange: ce,
                        onOpenNotificationReply: k,
                        onSubmitNotificationReply: le,
                      }),
                    }),
                  ],
                }),
              })
            : null,
          (0, q.jsx)(ae, {
            items: t,
            children: (0, q.jsxs)(`div`, {
              "data-avatar-overlay-hit-region": `mascot`,
              className: S(
                `group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none`,
                i && !pe ? `scale-95 transition-transform` : `transition-none`,
              ),
              style: { height: R.height, left: R.left, top: R.top, width: R.width },
              children: [
                pe
                  ? (0, q.jsx)(Pe, { audioStream: c, phase: m, voiceActivity: s })
                  : (0, q.jsx)(w, {
                      ariaLabel: F.formatMessage(J.mascotLabel, { petName: e.displayName }),
                      assetRef: e.assetRef,
                      spritesheetUrl: e.spritesheetUrl,
                      notificationBadge: be,
                      resizeHandle:
                        b == null ? void 0 : { ariaLabel: F.formatMessage(J.resizeMascot), ...b },
                      state: fe.mascotState,
                      style: _,
                      transientState: y,
                    }),
                (0, q.jsx)(de, {
                  areControlsVisible: me,
                  canRevealControls: !i,
                  canStart: n,
                  isRealtimeVoiceSurfaceVisible: pe,
                  isMicrophoneMuted: f,
                  isMuted: p,
                  phase: m,
                  waveformCanvasRef: l,
                  onStart: j,
                  onStop: M,
                  onToggleMicrophoneMute: N,
                  onToggleMute: P,
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function Xe(e) {
  let t = (0, W.c)(67),
    {
      areNotificationsVisible: n,
      isTrayAboveMascot: r,
      isNotificationTrayVisible: i,
      notifications: a,
      onDismissNotification: o,
      onNotificationReplyEditorActiveChange: s,
      onOpenNotificationReply: c,
      onRunNotificationAction: l,
      onSubmitQuestionOption: u,
      onSubmitNotificationReply: d,
      prefersReducedMotion: f,
      realtimeVoiceCaption: p,
      trayMaxHeight: m,
    } = e,
    g = v(),
    _ = (0, G.useRef)(null),
    y;
  t[0] !== g || t[1] !== a ? ((y = we(a, g)), (t[0] = g), (t[1] = a), (t[2] = y)) : (y = t[2]);
  let b = y,
    x = p == null ? `` : `caption`,
    te = r ? `tray-above` : `tray-below`,
    w;
  t[3] !== b || t[4] !== x || t[5] !== te
    ? ((w = [b, x, te]), (t[3] = b), (t[4] = x), (t[5] = te), (t[6] = w))
    : (w = t[6]);
  let ne = w.join(`\0`),
    T = a.length > Y,
    re = Math.max(0, a.length - Y),
    E;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = {
        hasScrollableContent: !1,
        hasLatestNotificationsAbove: !1,
        hiddenOlderNotificationCount: 0,
      }),
      (t[7] = E))
    : (E = t[7]);
  let [D, ie] = (0, G.useState)(E),
    [ae, oe] = (0, G.useState)(null),
    se = (0, G.useRef)(null),
    O;
  t[8] !== a || t[9] !== ae
    ? ((O = a.some((e) => e.id === ae) ? ae : null), (t[8] = a), (t[9] = ae), (t[10] = O))
    : (O = t[10]);
  let ce = O,
    k = ce != null && n,
    le,
    A;
  (t[11] !== k || t[12] !== s
    ? ((le = () => {
        if (k)
          return (
            s?.(!0),
            () => {
              s?.(!1);
            }
          );
      }),
      (A = [k, s]),
      (t[11] = k),
      (t[12] = s),
      (t[13] = le),
      (t[14] = A))
    : ((le = t[13]), (A = t[14])),
    (0, G.useEffect)(le, A));
  let j, M;
  (t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        se.current?.focus();
      }),
      (j = []),
      (t[15] = j),
      (t[16] = M))
    : ((j = t[15]), (M = t[16])),
    h(`avatar-overlay-keyboard-interaction-ready`, M, j));
  let N = Math.min(D.hiddenOlderNotificationCount, re),
    ue = D.hasScrollableContent,
    de = n && ue && T && D.hasLatestNotificationsAbove,
    P = n && ue && T && N > 0,
    F = n && ue && T,
    I = n && ue,
    fe = a.length > 0,
    L = fe && T,
    pe;
  t[17] === f
    ? (pe = t[18])
    : ((pe = f ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[17] = f),
      (t[18] = pe));
  let R = pe,
    z;
  t[19] !== f || t[20] !== p || t[21] !== I
    ? ((z =
        p == null
          ? null
          : (0, q.jsx)(
              Ze,
              { prefersReducedMotion: f, shouldInsetForScrollbar: I, text: p },
              `realtime-caption`,
            )),
      (t[19] = f),
      (t[20] = p),
      (t[21] = I),
      (t[22] = z))
    : (z = t[22]);
  let me = z,
    B;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        ie((t) => {
          let n = lt(e);
          return ut(t, n) ? t : n;
        });
      }),
      (t[23] = B))
    : (B = t[23]);
  let he = B,
    V;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        ((_.current = e), e != null && he(e));
      }),
      (t[24] = V))
    : (V = t[24]);
  let ge = V,
    _e;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => {
        let e = _.current;
        if (e == null) return;
        he(e);
        let t = window.requestAnimationFrame(() => {
            he(e);
          }),
          n = new ResizeObserver(() => {
            he(e);
          });
        return (
          n.observe(e),
          () => {
            (window.cancelAnimationFrame(t), n.disconnect());
          }
        );
      }),
      (t[25] = _e))
    : (_e = t[25]);
  let ve;
  (t[26] !== ne || t[27] !== m
    ? ((ve = [ne, m, he]), (t[26] = ne), (t[27] = m), (t[28] = ve))
    : (ve = t[28]),
    (0, G.useLayoutEffect)(_e, ve));
  let ye;
  t[29] === f
    ? (ye = t[30])
    : ((ye = () => {
        let e = _.current;
        e != null && (e.scrollTo({ behavior: f ? `auto` : `smooth`, top: 0 }), ie(lt(e, 0)));
      }),
      (t[29] = f),
      (t[30] = ye));
  let be = ye,
    xe;
  t[31] !== N || t[32] !== f
    ? ((xe = () => {
        let e = _.current;
        if (e == null) return;
        let t = $e(e, N);
        (e.scrollTo({ behavior: f ? `auto` : `smooth`, top: t }), ie(lt(e, t)));
      }),
      (t[31] = N),
      (t[32] = f),
      (t[33] = xe))
    : (xe = t[33]);
  let Se = xe,
    Ce = me != null && `gap-1.5`,
    H;
  t[34] === Ce
    ? (H = t[35])
    : ((H = S(`relative flex w-full min-w-0 flex-col overflow-hidden`, Ce)),
      (t[34] = Ce),
      (t[35] = H));
  let U;
  t[36] !== L || t[37] !== m
    ? ((U = L ? { height: m, maxHeight: m } : void 0), (t[36] = L), (t[37] = m), (t[38] = U))
    : (U = t[38]);
  let Te = r ? null : me,
    K;
  t[39] !== ce ||
  t[40] !== de ||
  t[41] !== P ||
  t[42] !== N ||
  t[43] !== g ||
  t[44] !== i ||
  t[45] !== a ||
  t[46] !== o ||
  t[47] !== c ||
  t[48] !== l ||
  t[49] !== d ||
  t[50] !== u ||
  t[51] !== f ||
  t[52] !== be ||
  t[53] !== Se ||
  t[54] !== F ||
  t[55] !== fe ||
  t[56] !== L ||
  t[57] !== R
    ? ((K = fe
        ? (0, q.jsxs)(C.div, {
            layout: L,
            className: `relative min-h-0 min-w-0 flex-1`,
            transition: R,
            children: [
              (0, q.jsx)(ee, {
                children: de
                  ? (0, q.jsx)(X, { prefersReducedMotion: f, onClick: be }, `latest`)
                  : null,
              }),
              (0, q.jsx)(C.div, {
                ref: ge,
                animate: { opacity: i ? 1 : 0, y: i || f ? 0 : 3 },
                "aria-label": g.formatMessage(J.notificationList),
                className: S(
                  `scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]`,
                  F && `vertical-scroll-fade-mask snap-y snap-mandatory`,
                ),
                "data-avatar-overlay-size": `notification-tray-list`,
                role: `list`,
                initial: !1,
                transition: f ? { duration: 0 } : { duration: 0.16, ease: `easeOut` },
                onScroll: (e) => {
                  let t = lt(e.currentTarget);
                  ie((e) => (ut(e, t) ? e : t));
                },
                children: a.map((e, t) =>
                  (0, q.jsx)(
                    et,
                    {
                      isReplying: ce === e.id,
                      notification: e,
                      notificationIndex: t,
                      onCloseReply: () => {
                        oe((t) => (t === e.id ? null : t));
                      },
                      onDismissNotification: o,
                      onOpenReply: () => {
                        (c?.(e), oe(e.id));
                      },
                      onRunNotificationAction: l,
                      onSubmitQuestionOption: u,
                      onSubmitNotificationReply: d,
                      prefersReducedMotion: f,
                      replyInputRef: se,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, q.jsx)(ee, {
                children: P
                  ? (0, q.jsx)(Qe, { count: N, prefersReducedMotion: f, onClick: Se }, `older`)
                  : null,
              }),
            ],
          })
        : null),
      (t[39] = ce),
      (t[40] = de),
      (t[41] = P),
      (t[42] = N),
      (t[43] = g),
      (t[44] = i),
      (t[45] = a),
      (t[46] = o),
      (t[47] = c),
      (t[48] = l),
      (t[49] = d),
      (t[50] = u),
      (t[51] = f),
      (t[52] = be),
      (t[53] = Se),
      (t[54] = F),
      (t[55] = fe),
      (t[56] = L),
      (t[57] = R),
      (t[58] = K))
    : (K = t[58]);
  let Ee = r ? me : null,
    De;
  return (
    t[59] !== L ||
    t[60] !== H ||
    t[61] !== U ||
    t[62] !== Te ||
    t[63] !== K ||
    t[64] !== Ee ||
    t[65] !== R
      ? ((De = (0, q.jsxs)(C.div, {
          layout: L,
          className: H,
          "data-avatar-overlay-size": `notification-tray-content`,
          style: U,
          transition: R,
          children: [Te, K, Ee],
        })),
        (t[59] = L),
        (t[60] = H),
        (t[61] = U),
        (t[62] = Te),
        (t[63] = K),
        (t[64] = Ee),
        (t[65] = R),
        (t[66] = De))
      : (De = t[66]),
    De
  );
}
function Ze(e) {
  let t = (0, W.c)(17),
    { prefersReducedMotion: n, shouldInsetForScrollbar: r, text: i } = e,
    a = (0, G.useRef)(null),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = () => {
        let e = a.current;
        e != null && (e.scrollTop = e.scrollHeight);
      }),
      (t[0] = o))
    : (o = t[0]);
  let s;
  (t[1] === i ? (s = t[2]) : ((s = [i]), (t[1] = i), (t[2] = s)), (0, G.useLayoutEffect)(o, s));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { height: `auto`, opacity: 1 }), (t[3] = c))
    : (c = t[3]);
  let l = r && `[scrollbar-gutter:stable]`,
    u;
  t[4] === l
    ? (u = t[5])
    : ((u = S(`no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left`, l)),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] === n ? (d = t[7]) : ((d = n ? !1 : { height: 0, opacity: 0 }), (t[6] = n), (t[7] = d));
  let f;
  t[8] === n
    ? (f = t[9])
    : ((f = n ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[8] = n),
      (t[9] = f));
  let p;
  t[10] === i
    ? (p = t[11])
    : ((p = (0, q.jsx)(`div`, {
        className: `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
        children: (0, q.jsx)(`div`, {
          ref: a,
          className: `text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground`,
          children: i,
        }),
      })),
      (t[10] = i),
      (t[11] = p));
  let m;
  return (
    t[12] !== u || t[13] !== d || t[14] !== f || t[15] !== p
      ? ((m = (0, q.jsx)(C.div, {
          "aria-live": `polite`,
          animate: c,
          className: u,
          "data-avatar-overlay-size": `notification-tray-caption`,
          initial: d,
          role: `status`,
          transition: f,
          children: p,
        })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function X(e) {
  let t = (0, W.c)(28),
    { onClick: n, prefersReducedMotion: r } = e,
    i = v(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage(J.showLatestNotifications)), (t[0] = i), (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { opacity: 1, scale: 1, x: `-50%` }), (t[2] = o))
    : (o = t[2]);
  let s = r ? 1 : 0.96,
    c;
  t[3] === s ? (c = t[4]) : ((c = { opacity: 0, scale: s, x: `-50%` }), (t[3] = s), (t[4] = c));
  let l = r ? 1 : 0.96,
    u;
  t[5] === l ? (u = t[6]) : ((u = { opacity: 0, scale: l, x: `-50%` }), (t[5] = l), (t[6] = u));
  let d;
  t[7] === r
    ? (d = t[8])
    : ((d = r ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }), (t[7] = r), (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = S(qe, `top-1 min-w-12`)), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === r ? (p = t[11]) : ((p = r ? void 0 : { scale: 1.03 }), (t[10] = r), (t[11] = p));
  let m;
  t[12] === r ? (m = t[13]) : ((m = r ? void 0 : { scale: 0.96 }), (t[12] = r), (t[13] = m));
  let h;
  t[14] === i
    ? (h = t[15])
    : ((h = i.formatMessage(J.latestNotifications)), (t[14] = i), (t[15] = h));
  let g;
  t[16] === h ? (g = t[17]) : ((g = (0, q.jsx)(`span`, { children: h })), (t[16] = h), (t[17] = g));
  let _;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(D, {
        className: `icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[18] = _))
    : (_ = t[18]);
  let y;
  return (
    t[19] !== n ||
    t[20] !== a ||
    t[21] !== m ||
    t[22] !== g ||
    t[23] !== c ||
    t[24] !== u ||
    t[25] !== d ||
    t[26] !== p
      ? ((y = (0, q.jsxs)(C.button, {
          type: `button`,
          "aria-label": a,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: o,
          exit: c,
          initial: u,
          transition: d,
          className: f,
          whileHover: p,
          whileTap: m,
          onClick: n,
          children: [g, _],
        })),
        (t[19] = n),
        (t[20] = a),
        (t[21] = m),
        (t[22] = g),
        (t[23] = c),
        (t[24] = u),
        (t[25] = d),
        (t[26] = p),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function Qe(e) {
  let t = (0, W.c)(36),
    { count: n, onClick: r, prefersReducedMotion: i } = e,
    a = v(),
    o;
  t[0] !== n || t[1] !== a
    ? ((o = a.formatMessage(J.showOlderNotifications, { count: n })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { opacity: 1, scale: 1, x: `-50%` }), (t[3] = s))
    : (s = t[3]);
  let c = i ? 1 : 0.96,
    l;
  t[4] === c ? (l = t[5]) : ((l = { opacity: 0, scale: c, x: `-50%` }), (t[4] = c), (t[5] = l));
  let u = i ? 1 : 0.96,
    d;
  t[6] === u ? (d = t[7]) : ((d = { opacity: 0, scale: u, x: `-50%` }), (t[6] = u), (t[7] = d));
  let f;
  t[8] === i
    ? (f = t[9])
    : ((f = i ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }), (t[8] = i), (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = S(qe, `bottom-1 min-w-9`)), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === i ? (m = t[12]) : ((m = i ? void 0 : { scale: 1.03 }), (t[11] = i), (t[12] = m));
  let h;
  t[13] === i ? (h = t[14]) : ((h = i ? void 0 : { scale: 0.96 }), (t[13] = i), (t[14] = h));
  let g;
  t[15] !== n || t[16] !== a
    ? ((g = a.formatMessage(J.compactOlderNotificationCount, { count: n })),
      (t[15] = n),
      (t[16] = a),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] === g
    ? (_ = t[19])
    : ((_ = (0, q.jsx)(`span`, {
        className: `group-hover:hidden group-focus:hidden`,
        children: g,
      })),
      (t[18] = g),
      (t[19] = _));
  let y;
  t[20] !== n || t[21] !== a
    ? ((y = a.formatMessage(J.olderNotificationCount, { count: n })),
      (t[20] = n),
      (t[21] = a),
      (t[22] = y))
    : (y = t[22]);
  let b;
  t[23] === y
    ? (b = t[24])
    : ((b = (0, q.jsx)(`span`, {
        className: `hidden group-hover:inline group-focus:inline`,
        children: y,
      })),
      (t[23] = y),
      (t[24] = b));
  let x;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, q.jsx)(D, {
        className: `icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[25] = x))
    : (x = t[25]);
  let ee;
  return (
    t[26] !== r ||
    t[27] !== o ||
    t[28] !== h ||
    t[29] !== _ ||
    t[30] !== b ||
    t[31] !== l ||
    t[32] !== d ||
    t[33] !== f ||
    t[34] !== m
      ? ((ee = (0, q.jsxs)(C.button, {
          type: `button`,
          "aria-label": o,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: s,
          exit: l,
          initial: d,
          transition: f,
          className: p,
          whileHover: m,
          whileTap: h,
          onClick: r,
          children: [_, b, x],
        })),
        (t[26] = r),
        (t[27] = o),
        (t[28] = h),
        (t[29] = _),
        (t[30] = b),
        (t[31] = l),
        (t[32] = d),
        (t[33] = f),
        (t[34] = m),
        (t[35] = ee))
      : (ee = t[35]),
    ee
  );
}
function $e(e, t) {
  if (t <= Y) return e.scrollHeight;
  let n = ht(e);
  return n[Q(n, gt(e, n)) + Y]?.offsetTop ?? e.scrollHeight;
}
function et({
  isReplying: e,
  notification: t,
  notificationIndex: n,
  onDismissNotification: r,
  onCloseReply: a,
  onOpenReply: o,
  onRunNotificationAction: s,
  onSubmitQuestionOption: c,
  onSubmitNotificationReply: l,
  prefersReducedMotion: u,
  replyInputRef: d,
}) {
  let p = v(),
    m = t.source === `local` && !t.id.startsWith(`realtime-`) ? t.localConversationId : null,
    h = i(f, m),
    g = h == null ? null : A(h.items, p),
    _ = ue(t),
    y = p.formatMessage(_.labelMessage),
    b = g ?? t.body ?? p.formatMessage(_.fallbackBodyMessage),
    x = t.waitingRequest,
    ee = x == null ? b : M(x, p),
    te = ee.replace(/[.?!]+$/, ``),
    w = ee === y ? y : `${y}. ${te}`,
    ne =
      t.action == null
        ? `${t.title}. ${w}`
        : `${t.title}. ${w}. ${p.formatMessage(J.openNotification)}`,
    re = t.action != null,
    [E, ae] = (0, G.useState)(!1),
    [oe, se] = (0, G.useState)(!1),
    [O, k] = (0, G.useState)(``),
    [N, de] = (0, G.useState)(null),
    [P, F] = (0, G.useState)(!1),
    [I, fe] = (0, G.useState)(0),
    [L, pe] = (0, G.useState)(!1),
    R = (0, G.useRef)(E),
    z = (0, G.useRef)(void 0),
    me = x == null ? Ue : We,
    B = (0, G.useCallback)((e) => {
      if ((z.current?.(), (z.current = void 0), e == null)) return;
      let t = () => {
        let t = e.scrollHeight;
        fe((e) => (e === t ? e : t));
        let n = pt(e);
        pe((e) => {
          let t = (R.current && e) || n;
          return e === t ? e : t;
        });
      };
      (t(), (z.current = le({ axis: `both`, target: e, onChange: t })));
    }, []);
  (0, G.useLayoutEffect)(() => {
    R.current = E;
  }, [E]);
  let he = I > me + Ke || L,
    V = he && E && !e,
    ge = t.controlTarget?.type === `app-server-conversation` && l != null,
    _e = O.trim(),
    ve = u ? { duration: 0 } : { duration: P ? 0.2 : 0.28, ease: [0.16, 1, 0.3, 1] },
    ye = async (e) => {
      if ((e.preventDefault(), e.stopPropagation(), !(!ge || _e.length === 0 || oe))) {
        (se(!0), de(null));
        try {
          (await l(t, _e), k(``), a());
        } catch {
          de(p.formatMessage(J.notificationReplyError));
        } finally {
          se(!1);
        }
      }
    };
  return (0, q.jsxs)(C.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: u ? 0 : 4 },
    role: `listitem`,
    className: `group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left`,
    "data-avatar-overlay-measure": `notification-tray-row`,
    transition: u
      ? { duration: 0 }
      : { delay: Math.min(n, 3) * He, duration: 0.18, ease: `easeOut` },
    onBlurCapture: (e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || F(!1);
    },
    onFocusCapture: () => {
      F(!0);
    },
    onPointerEnter: () => {
      F(!0);
    },
    onPointerLeave: () => {
      F(!1);
    },
    children: [
      (0, q.jsxs)(`div`, {
        className: S(
          `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
          re &&
            `transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none`,
        ),
        children: [
          (0, q.jsxs)(C.div, {
            role: re ? `button` : void 0,
            className: S(
              `block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]`,
              r ? `pl-5` : `pl-3`,
              re ? `cursor-interaction` : `cursor-default`,
            ),
            tabIndex: re ? 0 : void 0,
            transition: u ? { duration: 0 } : { duration: 0.12, ease: `easeOut` },
            whileTap: re && !u ? { scale: 0.995 } : void 0,
            "aria-label": re ? ne : void 0,
            onClick: () => {
              re && s?.(t);
            },
            onKeyDown: (e) => {
              !re || (e.key !== `Enter` && e.key !== ` `) || (e.preventDefault(), s?.(t));
            },
            children: [
              (0, q.jsx)(`span`, {
                className: `flex min-w-0 items-center pr-7`,
                children: (0, q.jsx)(`span`, {
                  className: `text-size-chat min-w-0 truncate leading-[17px] font-semibold text-token-foreground`,
                  children: t.title,
                }),
              }),
              (0, q.jsx)(C.div, {
                ref: B,
                animate: { maxHeight: V ? Ge : me },
                className: S(
                  `text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground`,
                  V ? `whitespace-pre-wrap` : x == null ? `line-clamp-2` : void 0,
                ),
                "data-avatar-overlay-measure-body": `true`,
                initial: !1,
                transition: u ? { duration: 0 } : { duration: 0.18, ease: `easeOut` },
                children:
                  x == null
                    ? b
                    : (0, q.jsx)(tt, {
                        isExpanded: V,
                        localConversationId: m,
                        request: x,
                        onRunNotificationAction: (e) => {
                          s?.(t, e);
                        },
                        onSubmitQuestionOption: (e) => {
                          c?.(t, e);
                        },
                      }),
              }),
            ],
          }),
          (0, q.jsx)(`span`, {
            role: `img`,
            "aria-label": x?.kind === `question` ? p.formatMessage(J.questionStatusIcon) : y,
            className: S(
              `pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100`,
              he && P && `opacity-0 transition-opacity duration-150 motion-reduce:transition-none`,
            ),
            children:
              x?.kind === `question` ? (0, q.jsx)(ce, { className: _.iconClassName }) : _t(_),
          }),
          he
            ? (0, q.jsx)(C.div, {
                animate: { opacity: P ? 1 : 0, x: P ? 0 : 6 },
                className: S(
                  `absolute top-1 right-1 z-10`,
                  P ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `expand`,
                initial: !1,
                transition: ve,
                children: (0, q.jsx)(ie, {
                  align: `end`,
                  side: `top`,
                  tooltipContent: p.formatMessage(
                    E ? J.collapseNotificationTooltip : J.expandNotificationTooltip,
                  ),
                  children: (0, q.jsx)(T, {
                    className: S(`size-6`, Je),
                    color: `ghost`,
                    size: `icon`,
                    "aria-expanded": E,
                    "aria-label": p.formatMessage(
                      E ? J.collapseNotification : J.expandNotification,
                      { title: t.title },
                    ),
                    onClick: () => {
                      ae((e) => !e);
                    },
                    children: (0, q.jsx)(C.span, {
                      animate: { rotate: E ? 90 : 0 },
                      transition: u ? { duration: 0 } : { duration: 0.12, ease: `easeOut` },
                      children: (0, q.jsx)(D, { className: `icon-xs` }),
                    }),
                  }),
                }),
              })
            : null,
          ge && !e
            ? (0, q.jsx)(C.div, {
                animate: { opacity: P ? 1 : 0, x: P ? 0 : 6 },
                className: S(
                  `no-drag absolute right-2 bottom-1 z-10`,
                  P ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `reply`,
                initial: !1,
                transition: ve,
                children: (0, q.jsx)(`div`, {
                  className: `flex justify-end pb-1`,
                  children: (0, q.jsx)(T, {
                    className: S(
                      `h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]`,
                      Je,
                    ),
                    color: `outline`,
                    size: `default`,
                    "aria-label": p.formatMessage(J.replyNotification, { title: t.title }),
                    onClick: (e) => {
                      (e.stopPropagation(), de(null), k(``), o(), F(!0));
                    },
                    onPointerDown: (e) => {
                      e.stopPropagation();
                    },
                    children: p.formatMessage(J.replyNotificationButton),
                  }),
                }),
              })
            : null,
          e
            ? (0, q.jsxs)(C.form, {
                className: `no-drag mx-3 mb-2 border-t border-token-border/60 pt-2`,
                animate: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: u ? 0 : -2 },
                transition: u ? { duration: 0 } : { duration: 0.16, ease: `easeOut` },
                onClick: (e) => {
                  e.stopPropagation();
                },
                onPointerDown: (e) => {
                  e.stopPropagation();
                },
                onSubmit: (e) => {
                  ye(e);
                },
                children: [
                  (0, q.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-1.5`,
                    children: [
                      (0, q.jsx)(`input`, {
                        ref: d,
                        className: `text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border`,
                        "aria-label": p.formatMessage(J.replyNotification, { title: t.title }),
                        autoFocus: !0,
                        placeholder: p.formatMessage(J.notificationReplyPlaceholder),
                        value: O,
                        onChange: (e) => {
                          (k(e.currentTarget.value), de(null));
                        },
                        onKeyDown: (e) => {
                          e.key !== `Escape` || oe || (e.stopPropagation(), a(), de(null));
                        },
                      }),
                      (0, q.jsx)(T, {
                        className: `h-6 px-2 text-xs`,
                        color: `primary`,
                        size: `default`,
                        type: `submit`,
                        "aria-label": p.formatMessage(J.sendNotificationReply, { title: t.title }),
                        disabled: _e.length === 0 || oe,
                        loading: oe,
                        children: p.formatMessage(J.replyNotificationButton),
                      }),
                    ],
                  }),
                  N == null
                    ? null
                    : (0, q.jsx)(`div`, {
                        className: `mt-1 text-[11px] leading-4 text-token-error-foreground`,
                        role: `alert`,
                        children: N,
                      }),
                ],
              })
            : null,
        ],
      }),
      r && !e
        ? (0, q.jsx)(`div`, {
            className: S(
              `absolute -top-1 -left-1 z-20`,
              P ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`,
            ),
            "data-avatar-overlay-control": `dismiss`,
            children: (0, q.jsx)(ie, {
              align: `start`,
              side: `top`,
              tooltipContent: p.formatMessage(J.dismissNotificationTooltip),
              children: (0, q.jsx)(j, {
                ariaLabel: p.formatMessage(J.dismissNotification, { title: t.title }),
                onClick: () => {
                  r(t);
                },
              }),
            }),
          })
        : null,
    ],
  });
}
function tt(e) {
  let t = (0, W.c)(72),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      onSubmitQuestionOption: a,
      request: o,
    } = e,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (e) => {
        `questionOption` in e || i(e);
      }),
      (t[0] = i),
      (t[1] = s));
  let c = s;
  switch (o.kind) {
    case `question`: {
      let e = n ? `break-words whitespace-pre-wrap` : `truncate`,
        r;
      t[2] === e ? (r = t[3]) : ((r = S(`min-w-0`, e)), (t[2] = e), (t[3] = r));
      let s;
      t[4] !== o.prompt || t[5] !== r
        ? ((s = (0, q.jsx)(`div`, { className: r, children: o.prompt })),
          (t[4] = o.prompt),
          (t[5] = r),
          (t[6] = s))
        : (s = t[6]);
      let c;
      t[7] === o.options ? (c = t[8]) : ((c = o.options.map(nt)), (t[7] = o.options), (t[8] = c));
      let l;
      t[9] !== i || t[10] !== a
        ? ((l = (e) => {
            if (`questionOption` in e) {
              a?.(e.questionOption);
              return;
            }
            i(e);
          }),
          (t[9] = i),
          (t[10] = a),
          (t[11] = l))
        : (l = t[11]);
      let u;
      t[12] !== c || t[13] !== l
        ? ((u = (0, q.jsx)(ot, { actions: c, onRunNotificationAction: l })),
          (t[12] = c),
          (t[13] = l),
          (t[14] = u))
        : (u = t[14]);
      let d;
      return (
        t[15] !== s || t[16] !== u
          ? ((d = (0, q.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `question`,
              children: [s, u],
            })),
            (t[15] = s),
            (t[16] = u),
            (t[17] = d))
          : (d = t[17]),
        d
      );
    }
    case `patch`: {
      let e;
      t[18] !== n ||
      t[19] !== o.additions ||
      t[20] !== o.deletions ||
      t[21] !== o.fileCount ||
      t[22] !== o.files ||
      t[23] !== o.summary
        ? ((e = (0, q.jsx)(it, {
            additions: o.additions,
            deletions: o.deletions,
            fileCount: o.fileCount,
            files: o.files,
            isExpanded: n,
            summary: o.summary,
          })),
          (t[18] = n),
          (t[19] = o.additions),
          (t[20] = o.deletions),
          (t[21] = o.fileCount),
          (t[22] = o.files),
          (t[23] = o.summary),
          (t[24] = e))
        : (e = t[24]);
      let r;
      t[25] !== o.actions || t[26] !== c
        ? ((r = (0, q.jsx)(ot, { actions: o.actions, onRunNotificationAction: c })),
          (t[25] = o.actions),
          (t[26] = c),
          (t[27] = r))
        : (r = t[27]);
      let i;
      return (
        t[28] !== e || t[29] !== r
          ? ((i = (0, q.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `patch`,
              children: [e, r],
            })),
            (t[28] = e),
            (t[29] = r),
            (t[30] = i))
          : (i = t[30]),
        i
      );
    }
    case `plan`: {
      let e;
      return (
        t[31] !== n || t[32] !== r || t[33] !== o || t[34] !== c
          ? ((e = (0, q.jsx)(rt, {
              isExpanded: n,
              localConversationId: r,
              onRunNotificationAction: c,
              request: o,
            })),
            (t[31] = n),
            (t[32] = r),
            (t[33] = o),
            (t[34] = c),
            (t[35] = e))
          : (e = t[35]),
        e
      );
    }
    case `exec`: {
      let e;
      t[36] !== n || t[37] !== o.summary
        ? ((e = (0, q.jsx)(Z, { isExpanded: n, text: o.summary })),
          (t[36] = n),
          (t[37] = o.summary),
          (t[38] = e))
        : (e = t[38]);
      let r;
      t[39] !== o.actions || t[40] !== c
        ? ((r = (0, q.jsx)(ot, { actions: o.actions, onRunNotificationAction: c })),
          (t[39] = o.actions),
          (t[40] = c),
          (t[41] = r))
        : (r = t[41]);
      let i;
      return (
        t[42] !== e || t[43] !== r
          ? ((i = (0, q.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `exec`,
              children: [e, r],
            })),
            (t[42] = e),
            (t[43] = r),
            (t[44] = i))
          : (i = t[44]),
        i
      );
    }
    case `network`: {
      let e;
      t[45] !== n || t[46] !== o.target
        ? ((e = (0, q.jsx)(Z, { isExpanded: n, text: o.target })),
          (t[45] = n),
          (t[46] = o.target),
          (t[47] = e))
        : (e = t[47]);
      let r;
      t[48] !== o.actions || t[49] !== c
        ? ((r = (0, q.jsx)(ot, { actions: o.actions, onRunNotificationAction: c })),
          (t[48] = o.actions),
          (t[49] = c),
          (t[50] = r))
        : (r = t[50]);
      let i;
      return (
        t[51] !== e || t[52] !== r
          ? ((i = (0, q.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `network`,
              children: [e, r],
            })),
            (t[51] = e),
            (t[52] = r),
            (t[53] = i))
          : (i = t[53]),
        i
      );
    }
    case `permission`: {
      let e;
      t[54] !== n || t[55] !== o.target
        ? ((e = (0, q.jsx)(Z, { isExpanded: n, text: o.target })),
          (t[54] = n),
          (t[55] = o.target),
          (t[56] = e))
        : (e = t[56]);
      let r;
      t[57] !== o.actions || t[58] !== c
        ? ((r = (0, q.jsx)(ot, { actions: o.actions, onRunNotificationAction: c })),
          (t[57] = o.actions),
          (t[58] = c),
          (t[59] = r))
        : (r = t[59]);
      let i;
      return (
        t[60] !== e || t[61] !== r
          ? ((i = (0, q.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `permission`,
              children: [e, r],
            })),
            (t[60] = e),
            (t[61] = r),
            (t[62] = i))
          : (i = t[62]),
        i
      );
    }
    case `tool`: {
      let e = o.summary ?? o.target,
        r;
      t[63] !== n || t[64] !== e
        ? ((r = (0, q.jsx)(Z, { isExpanded: n, text: e })), (t[63] = n), (t[64] = e), (t[65] = r))
        : (r = t[65]);
      let i;
      t[66] !== o.actions || t[67] !== c
        ? ((i = (0, q.jsx)(ot, { actions: o.actions, onRunNotificationAction: c })),
          (t[66] = o.actions),
          (t[67] = c),
          (t[68] = i))
        : (i = t[68]);
      let a;
      return (
        t[69] !== r || t[70] !== i
          ? ((a = (0, q.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `tool`,
              children: [r, i],
            })),
            (t[69] = r),
            (t[70] = i),
            (t[71] = a))
          : (a = t[71]),
        a
      );
    }
  }
}
function nt(e, t) {
  return { label: e.label, tone: t === 0 ? `primary` : `secondary`, questionOption: e };
}
function rt(e) {
  let t = (0, W.c)(20),
    { isExpanded: n, localConversationId: r, onRunNotificationAction: i, request: a } = e,
    { getModeForSelection: o } = z(r),
    s,
    c,
    l,
    u;
  if (t[0] !== o || t[1] !== n || t[2] !== a.actions || t[3] !== a.kind || t[4] !== a.summary) {
    let e = o(`default`);
    ((l = a.kind),
      t[9] !== n || t[10] !== a.summary
        ? ((u = (0, q.jsx)(Z, { isExpanded: n, text: a.summary })),
          (t[9] = n),
          (t[10] = a.summary),
          (t[11] = u))
        : (u = t[11]),
      (s = ot),
      (c = a.actions.map((t) =>
        t.intent === `plan-start` ? { ...t, planStartCollaborationMode: e } : t,
      )),
      (t[0] = o),
      (t[1] = n),
      (t[2] = a.actions),
      (t[3] = a.kind),
      (t[4] = a.summary),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[12] !== s || t[13] !== i || t[14] !== c
    ? ((d = (0, q.jsx)(s, { actions: c, onRunNotificationAction: i })),
      (t[12] = s),
      (t[13] = i),
      (t[14] = c),
      (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== l || t[17] !== u || t[18] !== d
      ? ((f = (0, q.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-request": l,
          children: [u, d],
        })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function Z(e) {
  let t = (0, W.c)(5),
    { isExpanded: n, text: r } = e,
    i = n ? `break-words whitespace-pre-wrap` : `truncate whitespace-nowrap`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = S(`min-w-0 text-token-text-secondary`, i)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== a || t[3] !== r
      ? ((o = (0, q.jsx)(`div`, {
          className: a,
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: r,
        })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function it(e) {
  let t = (0, W.c)(40),
    { additions: n, deletions: r, fileCount: i, files: a, isExpanded: o, summary: s } = e,
    c = v(),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = c.formatMessage(J.compactPatchFileCount, { count: i })),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== n || t[4] !== c
    ? ((d = n > 0 ? c.formatMessage(J.compactPatchAdditions, { count: n }) : null),
      (t[3] = n),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== r || t[7] !== c
    ? ((p = r > 0 ? c.formatMessage(J.compactPatchDeletions, { count: r }) : null),
      (t[6] = r),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m = p;
  if (!o) {
    let e;
    t[9] === u ? (e = t[10]) : ((e = (0, q.jsx)(`span`, { children: u })), (t[9] = u), (t[10] = e));
    let n;
    t[11] === f
      ? (n = t[12])
      : ((n =
          f == null
            ? null
            : (0, q.jsx)(`span`, { className: `ml-1.5 text-token-charts-green`, children: f })),
        (t[11] = f),
        (t[12] = n));
    let r;
    t[13] === m
      ? (r = t[14])
      : ((r =
          m == null
            ? null
            : (0, q.jsx)(`span`, { className: `ml-1.5 text-token-error-foreground`, children: m })),
        (t[13] = m),
        (t[14] = r));
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, q.jsx)(ne, { className: `mx-1.5 text-token-text-tertiary` })), (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === s
      ? (a = t[17])
      : ((a = (0, q.jsx)(`span`, { children: s })), (t[16] = s), (t[17] = a));
    let o;
    return (
      t[18] !== e || t[19] !== n || t[20] !== r || t[21] !== a
        ? ((o = (0, q.jsxs)(`div`, {
            className: `min-w-0 truncate whitespace-nowrap text-token-text-secondary`,
            "data-avatar-overlay-compact-waiting-summary-text": `true`,
            children: [e, n, r, i, a],
          })),
          (t[18] = e),
          (t[19] = n),
          (t[20] = r),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
      o
    );
  }
  let h;
  t[23] === u
    ? (h = t[24])
    : ((h = (0, q.jsx)(`span`, {
        className: `text-[11px] leading-4 text-token-text-secondary`,
        children: u,
      })),
      (t[23] = u),
      (t[24] = h));
  let g;
  t[25] === f
    ? (g = t[26])
    : ((g =
        f == null
          ? null
          : (0, q.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-charts-green`,
              children: f,
            })),
      (t[25] = f),
      (t[26] = g));
  let _;
  t[27] === m
    ? (_ = t[28])
    : ((_ =
        m == null
          ? null
          : (0, q.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-error-foreground`,
              children: m,
            })),
      (t[27] = m),
      (t[28] = _));
  let y;
  t[29] !== h || t[30] !== g || t[31] !== _
    ? ((y = (0, q.jsxs)(`div`, {
        className: `mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5`,
        children: [h, g, _],
      })),
      (t[29] = h),
      (t[30] = g),
      (t[31] = _),
      (t[32] = y))
    : (y = t[32]);
  let b;
  t[33] === a ? (b = t[34]) : ((b = a.map(at)), (t[33] = a), (t[34] = b));
  let x;
  t[35] === b
    ? (x = t[36])
    : ((x = (0, q.jsx)(`div`, {
        className: `mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary`,
        children: b,
      })),
      (t[35] = b),
      (t[36] = x));
  let S;
  return (
    t[37] !== y || t[38] !== x
      ? ((S = (0, q.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: [y, x],
        })),
        (t[37] = y),
        (t[38] = x),
        (t[39] = S))
      : (S = t[39]),
    S
  );
}
function at(e) {
  return (0, q.jsx)(`div`, { className: `leading-4 break-words`, children: e }, e);
}
function ot(e) {
  let t = (0, W.c)(7),
    { actions: n, onRunNotificationAction: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, q.jsx)(
            T,
            {
              className: `max-w-full min-w-0`,
              color: ct(e.tone),
              size: `toolbar`,
              "aria-label": e.ariaLabel ?? e.label,
              title: e.ariaLabel ?? e.label,
              onClick: (t) => {
                (t.stopPropagation(), r(e));
              },
              onPointerDown: st,
              children: (0, q.jsx)(`span`, { className: `truncate`, children: e.label }),
            },
            e.ariaLabel ?? e.label,
          )),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, q.jsx)(`div`, {
          className: `no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px`,
          children: i,
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function st(e) {
  e.stopPropagation();
}
function ct(e) {
  switch (e) {
    case `primary`:
      return `secondary`;
    case `danger`:
      return `danger`;
    case `secondary`:
      return `secondary`;
  }
}
function lt(e, t = e.scrollTop) {
  if (!ft(e))
    return {
      hasScrollableContent: !1,
      hasLatestNotificationsAbove: !1,
      hiddenOlderNotificationCount: 0,
    };
  if (dt(e, t))
    return {
      hasScrollableContent: !0,
      hasLatestNotificationsAbove: !0,
      hiddenOlderNotificationCount: 0,
    };
  let n = ht(e),
    r = gt(e, n, t);
  return {
    hasScrollableContent: !0,
    hasLatestNotificationsAbove: t > Ve,
    hiddenOlderNotificationCount: mt(e, n, r),
  };
}
function ut(e, t) {
  return (
    e.hasScrollableContent === t.hasScrollableContent &&
    e.hasLatestNotificationsAbove === t.hasLatestNotificationsAbove &&
    e.hiddenOlderNotificationCount === t.hiddenOlderNotificationCount
  );
}
function dt(e, t = e.scrollTop) {
  let n = Math.max(0, e.scrollHeight - e.clientHeight);
  return ft(e) && t >= n - Ve;
}
function ft(e) {
  return e.scrollHeight > e.clientHeight + Ve;
}
function pt(e) {
  return [e, ...Array.from(e.querySelectorAll(`*`))].some(
    (e) => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + Ke,
  );
}
function mt(e, t, n) {
  let r = n + e.clientHeight - Ve;
  return t.filter((e) => e.offsetTop + e.offsetHeight > r).length;
}
function ht(e) {
  return Array.from(e.children).filter((e) => e instanceof HTMLElement);
}
function gt(e, t, n = e.scrollTop) {
  return n + (t[0]?.offsetTop ?? 0) + Ve;
}
function Q(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1) e[r].offsetTop <= t && (n = r);
  return n;
}
function _t(e) {
  switch (e.iconType) {
    case `check-circle`:
      return (0, q.jsx)(me, { className: e.iconClassName });
    case `clock`:
      return (0, q.jsx)(O, { className: e.iconClassName });
    case `spinner`:
      return (0, q.jsx)(E, { className: e.iconClassName });
    case `warning`:
      return (0, q.jsx)(k, { className: e.iconClassName });
  }
}
var vt = 15e3,
  yt = `first-awake-pet-notification-avatar-ids`,
  bt = 4,
  xt = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`],
  St = `.codex-avatar-root`,
  $ = `[data-avatar-overlay-size='notification-tray']`,
  Ct = `[data-avatar-overlay-size='notification-tray-header']`,
  wt = `[data-avatar-overlay-size='notification-tray-content']`,
  Tt = `[data-avatar-overlay-size='notification-tray-list']`,
  Et = `[data-avatar-overlay-size='notification-tray-caption']`,
  Dt = `[data-avatar-overlay-measure='notification-tray-row']`,
  Ot = `codex-avatar-overlay-force-resize-cursor`,
  kt = [St, $, Ct, wt, Tt, Et, Dt],
  At = {
    mascot: { left: 244, top: 191, width: 112, height: 121 },
    placement: `top-end`,
    tray: { left: 80, top: 56, width: 276, height: 131 },
    viewport: { width: 356, height: 320 },
  };
function jt() {
  let e = (0, W.c)(10),
    { selectedAvatar: t, selectedAvatarId: n } = U(),
    r = t == null,
    i,
    a;
  if (
    (e[0] === r
      ? ((i = e[1]), (a = e[2]))
      : ((i = () => {
          r &&
            m.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: !1 });
        }),
        (a = [r]),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a)),
    (0, G.useEffect)(i, a),
    t == null)
  )
    return null;
  let o;
  e[3] !== t || e[4] !== n ? ((o = Gt(t, n)), (e[3] = t), (e[4] = n), (e[5] = o)) : (o = e[5]);
  let s;
  return (
    e[6] !== t || e[7] !== n || e[8] !== o
      ? ((s = (0, q.jsx)(Mt, { selectedAvatar: t, selectedAvatarId: n }, o)),
        (e[6] = t),
        (e[7] = n),
        (e[8] = o),
        (e[9] = s))
      : (s = e[9]),
    s
  );
}
function Mt(e) {
  let t = (0, W.c)(158),
    { selectedAvatar: n, selectedAvatarId: r } = e,
    i = a(s),
    f = v(),
    _ = oe(`451951815`),
    S = o(L),
    C = xe(),
    ee = o(p),
    te = re(g.realtimeVoiceAvatarMode) === `pet`,
    [w, ne] = (0, G.useState)(At),
    [T, E] = (0, G.useState)(null),
    [D, ie] = (0, G.useState)(!0),
    [ae, se] = (0, G.useState)(!1),
    [O, ce] = (0, G.useState)(!1),
    [k, le] = (0, G.useState)(!1),
    [A, j] = (0, G.useState)(null),
    { mascotWidthPx: M, setMascotWidthPx: ue } = be(),
    [de, z] = (0, G.useState)(Ht),
    [me, V] = (0, G.useState)(Vt),
    H;
  t[0] !== n || t[1] !== r
    ? ((H = () => Wt(n, r)), (t[0] = n), (t[1] = r), (t[2] = H))
    : (H = t[2]);
  let [U] = (0, G.useState)(H),
    { data: Te, refetch: K } = pe(),
    Ee = Te === void 0 ? [] : Te,
    Ae;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = { taskFilter: `current`, limit: 20 }), (t[3] = Ae))
    : (Ae = t[3]);
  let { data: je, refetch: Me } = R(Ae),
    Ne = je === void 0 ? [] : je,
    Pe = N({
      includeCompactWaitingRequests: _,
      intl: f,
      localConversations: Ee,
      realtimeConversationId: C.conversationId,
      remoteTasks: Ne,
    }),
    Fe = U == null ? null : Ce({ intl: f, petName: U.petName, startedAtMs: U.startedAtMs }),
    Ie = C.phase !== `inactive`,
    Le = _e({ events: ee, intl: f, nowMs: me, realtimeThreadId: C.conversationId }),
    { nextNotificationExpiresAtMs: Re, notifications: ze } = ye({
      dismissedNotificationTurnKeys: de,
      extraNotifications: Ie ? Le : Fe == null ? [] : [Fe],
      nowMs: me,
      sessions: Ie ? [] : Pe,
    }),
    Be = we(ze, f),
    J = Pe.some(Bt),
    Y = Pe.some(zt),
    Ve = (0, G.useRef)(null),
    He = (0, G.useRef)(null),
    Ue = (0, G.useRef)(null),
    We = (0, G.useRef)(null),
    Ge = (0, G.useRef)(null),
    Ke = (0, G.useRef)(null),
    qe = (0, G.useRef)(null),
    Je = (0, G.useRef)(null),
    Xe = (0, G.useRef)(!1),
    Ze;
  t[4] !== J || t[5] !== Y || t[6] !== D || t[7] !== ze.length || t[8] !== S || t[9] !== n
    ? ((Ze = (e, t, r, i) => {
        let a = i === void 0 ? D : i;
        S.logProductEvent(
          F,
          he({
            action: e,
            hasRunningCloudSession: Y,
            hasRunningLocalSession: J,
            isNotificationTrayOpen: a,
            notification: r,
            notificationCount: ze.length,
            selectedAvatar: n,
            source: t,
          }),
        );
      }),
      (t[4] = J),
      (t[5] = Y),
      (t[6] = D),
      (t[7] = ze.length),
      (t[8] = S),
      (t[9] = n),
      (t[10] = Ze))
    : (Ze = t[10]);
  let X = Ze,
    Qe,
    $e;
  (t[11] === U
    ? ((Qe = t[12]), ($e = t[13]))
    : ((Qe = () => {
        if (U == null) return;
        let e = b(yt, []);
        e.includes(U.avatarId) || x(yt, [...e, U.avatarId]);
      }),
      ($e = [U]),
      (t[11] = U),
      (t[12] = Qe),
      (t[13] = $e)),
    (0, G.useEffect)(Qe, $e));
  let et, tt;
  (t[14] !== S || t[15] !== X
    ? ((et = () => {
        Xe.current ||
          (S !== fe &&
            ((Xe.current = !0),
            X(P.CODEX_AVATAR_OVERLAY_ACTION_OPENED, I.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)));
      }),
      (tt = [S, X]),
      (t[14] = S),
      (t[15] = X),
      (t[16] = et),
      (t[17] = tt))
    : ((et = t[16]), (tt = t[17])),
    (0, G.useEffect)(et, tt));
  let nt;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = {
        interactiveRegionRef: qe,
        isPaused: () => Ve.current != null || He.current != null,
        onInteractiveChange: Rt,
        regionElementSelectors: xt,
      }),
      (t[18] = nt))
    : (nt = t[18]),
    ge(nt));
  let rt;
  t[19] !== D || t[20] !== ze.length || t[21] !== C.caption
    ? ((rt = () => {
        if (He.current != null || Ge.current != null) return;
        let e = qt(qe.current);
        if (e == null) return;
        let t = { ...e, isTrayVisible: (D && ze.length > 0) || C.caption != null };
        Qt(Je.current, t) ||
          ((Je.current = t),
          m.dispatchMessage(`avatar-overlay-element-size-changed`, {
            isTrayVisible: t.isTrayVisible,
            mascot: t.mascot,
            tray: t.tray,
          }));
      }),
      (t[19] = D),
      (t[20] = ze.length),
      (t[21] = C.caption),
      (t[22] = rt))
    : (rt = t[22]);
  let Z = rt,
    it;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = () => {
        Ke.current != null && (window.clearTimeout(Ke.current), (Ke.current = null));
      }),
      (t[23] = it))
    : (it = t[23]);
  let at = it,
    ot;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = () => {
        (Ue.current != null && (window.cancelAnimationFrame(Ue.current), (Ue.current = null)),
          (We.current = null));
      }),
      (t[24] = ot))
    : (ot = t[24]);
  let st = ot,
    ct;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (e) => {
        ((We.current = e),
          (Ue.current ??= window.requestAnimationFrame(() => {
            Ue.current = null;
            let e = We.current;
            ((We.current = null),
              !(e == null || He.current == null) &&
                m.dispatchMessage(`avatar-overlay-mascot-resize-move`, { width: e }));
          })));
      }),
      (t[25] = ct))
    : (ct = t[25]);
  let lt = ct,
    ut;
  t[26] === Z
    ? (ut = t[27])
    : ((ut = (e) => {
        ((Ge.current = e),
          at(),
          (Ke.current = window.setTimeout(() => {
            ((Ke.current = null), (Ge.current = null), j(null), Z());
          }, 100)));
      }),
      (t[26] = Z),
      (t[27] = ut));
  let dt = ut,
    ft;
  t[28] === M
    ? (ft = t[29])
    : ((ft = () => Yt(qe.current?.querySelector(St) ?? null)?.width ?? M ?? 112),
      (t[28] = M),
      (t[29] = ft));
  let pt = ft,
    mt;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (e, t) => {
        let n = He.current;
        n == null ||
          n.pointerId !== e ||
          ((He.current = null), ce(!1), t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
      }),
      (t[30] = mt))
    : (mt = t[30]);
  let ht = mt,
    gt;
  t[31] !== ue || t[32] !== dt
    ? ((gt = (e, t) => {
        let n = He.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : Ut(n, t);
        ((n.currentWidthPx = r),
          st(),
          j(r),
          ue(r),
          dt(r),
          m.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      }),
      (t[31] = ue),
      (t[32] = dt),
      (t[33] = gt))
    : (gt = t[33]);
  let Q = gt,
    _t;
  t[34] === X
    ? (_t = t[35])
    : ((_t = (e, t) => {
        let { releaseSample: n, shouldOpenMainWindow: r } = t,
          i = Ve.current;
        if (i == null || i.pointerId !== e) return;
        ((Ve.current = null), se(!1), E(null));
        let a = n == null ? null : Oe(i, n);
        (qe.current?.hasPointerCapture?.(e) && qe.current.releasePointerCapture?.(e),
          r &&
            i.startedOnMascot &&
            !i.hasMoved &&
            (X(P.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED, I.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT),
            m.dispatchMessage(`open-current-main-window`, {})),
          m.dispatchMessage(`avatar-overlay-drag-end`, {
            pointerScreenX: n?.screenX ?? i.screenX,
            pointerScreenY: n?.screenY ?? i.screenY,
          }),
          i.hasMoved &&
            X(P.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED, I.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT),
          a != null &&
            m.dispatchMessage(`avatar-overlay-drag-release`, { velocityX: a.x, velocityY: a.y }));
      }),
      (t[34] = X),
      (t[35] = _t));
  let $ = _t,
    Ct;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (e) => {
        e.button !== 0 ||
          !(e.target instanceof Element) ||
          e.target.closest(`.no-drag`) != null ||
          (e.preventDefault(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (Ve.current = {
            startedOnMascot: e.target.closest(`[data-avatar-mascot="true"]`) != null,
            hasMoved: !1,
            pointerId: e.pointerId,
            samples: [De(e)],
            screenX: e.screenX,
            screenY: e.screenY,
          }),
          m.dispatchMessage(`avatar-overlay-drag-start`, {
            pointerScreenX: e.screenX,
            pointerScreenY: e.screenY,
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }),
          se(!0),
          E(null));
      }),
      (t[36] = Ct))
    : (Ct = t[36]);
  let wt = Ct,
    Tt;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (e) => {
        let t = Ve.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let n = De(e);
        t.samples = ke([...t.samples, n]);
        let r = n.screenX - t.screenX,
          i = n.screenY - t.screenY;
        (Math.abs(r) < bt && Math.abs(i) < bt) ||
          ((t.hasMoved = !0),
          (t.screenX = n.screenX),
          (t.screenY = n.screenY),
          E((e) => Kt({ currentDragState: e, deltaX: r })),
          m.dispatchMessage(`avatar-overlay-drag-move`, {
            pointerScreenX: n.screenX,
            pointerScreenY: n.screenY,
          }));
      }),
      (t[37] = Tt))
    : (Tt = t[37]);
  let Et = Tt,
    Dt;
  t[38] === $
    ? (Dt = t[39])
    : ((Dt = (e) => {
        $(e.pointerId, { releaseSample: De(e), shouldOpenMainWindow: !0 });
      }),
      (t[38] = $),
      (t[39] = Dt));
  let kt = Dt,
    jt;
  t[40] === $
    ? (jt = t[41])
    : ((jt = (e) => {
        $(e.pointerId, { shouldOpenMainWindow: !1 });
      }),
      (t[40] = $),
      (t[41] = jt));
  let Mt = jt,
    Gt;
  t[42] === $
    ? (Gt = t[43])
    : ((Gt = (e) => {
        $(e.pointerId, { shouldOpenMainWindow: !1 });
      }),
      (t[42] = $),
      (t[43] = Gt));
  let Xt = Gt,
    Zt;
  t[44] === pt
    ? (Zt = t[45])
    : ((Zt = (e) => {
        if (e.button !== 0) return;
        (e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture?.(e.pointerId));
        let t = pt();
        (at(),
          st(),
          (Ge.current = null),
          (He.current = {
            currentWidthPx: t,
            pointerId: e.pointerId,
            startScreenX: e.screenX,
            startWidthPx: t,
          }),
          j(t),
          ce(!0),
          m.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
      }),
      (t[44] = pt),
      (t[45] = Zt));
  let $t = Zt,
    en;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((en = (e) => {
        let t = He.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        (e.preventDefault(), e.stopPropagation());
        let n = Ut(t, e.screenX);
        ((t.currentWidthPx = n), j(n), lt(n));
      }),
      (t[46] = en))
    : (en = t[46]);
  let tn = en,
    nn;
  t[47] === Q
    ? (nn = t[48])
    : ((nn = (e) => {
        (Q(e.pointerId, e.screenX), ht(e.pointerId, e.currentTarget));
      }),
      (t[47] = Q),
      (t[48] = nn));
  let rn = nn,
    an;
  t[49] === Q
    ? (an = t[50])
    : ((an = (e) => {
        (e.stopPropagation(), Q(e.pointerId), ht(e.pointerId, e.currentTarget));
      }),
      (t[49] = Q),
      (t[50] = an));
  let on = an,
    sn;
  t[51] === Q
    ? (sn = t[52])
    : ((sn = (e) => {
        (Q(e.pointerId), ht(e.pointerId));
      }),
      (t[51] = Q),
      (t[52] = sn));
  let cn = sn,
    ln;
  t[53] !== K || t[54] !== i || t[55] !== X
    ? ((ln = (e, t) => {
        let n = e.waitingRequest;
        if (e.localConversationId != null && t != null) {
          let r = e.localConversationId;
          bb283: switch (t.intent) {
            case `command-approval`:
              if (t.commandDecision != null && (n?.kind === `exec` || n?.kind === `network`)) {
                c(`reply-with-command-execution-approval-decision`, {
                  conversationId: r,
                  requestId: n.requestId,
                  decision: t.commandDecision,
                }).then(() => {
                  K();
                });
                return;
              }
              break bb283;
            case `file-approval`:
              if (t.fileDecision != null && n?.kind === `patch`) {
                c(`reply-with-file-change-approval-decision`, {
                  conversationId: r,
                  requestId: n.requestId,
                  decision: t.fileDecision,
                }).then(() => {
                  K();
                });
                return;
              }
              break bb283;
            case `permission-response`:
              if (t.permissionResponse != null && n?.kind === `permission`) {
                c(`reply-with-permissions-request-approval-response`, {
                  conversationId: r,
                  requestId: n.requestId,
                  response: t.permissionResponse,
                }).then(() => {
                  K();
                });
                return;
              }
              break bb283;
            case `mcp-elicitation`:
              if (t.mcpElicitationAction != null && n?.kind === `tool`) {
                c(`reply-with-mcp-server-elicitation-response`, {
                  conversationId: r,
                  requestId: n.requestId,
                  response: u(t.mcpElicitationAction),
                }).then(() => {
                  K();
                });
                return;
              }
              break bb283;
            case `plan-start`:
              if (n?.kind === `plan` && t.planStartCollaborationMode != null) {
                c(`update-thread-settings-for-next-turn`, {
                  conversationId: r,
                  threadSettings: { collaborationMode: t.planStartCollaborationMode },
                })
                  .then(() =>
                    c(`remove-plan-implementation-request`, {
                      conversationId: r,
                      turnId: n.turnId,
                    }),
                  )
                  .then(async () =>
                    c(`send-follow-up-message`, {
                      conversationId: r,
                      prompt: `${l}\n${n.planContent}`,
                      serviceTier: await B(
                        i,
                        i.get(d, r) ?? `local`,
                        t.planStartCollaborationMode?.settings.model ?? null,
                      ),
                    }),
                  )
                  .then(() => {
                    K();
                  });
                return;
              }
              break bb283;
            case `open`:
          }
        }
        (t != null && t.intent !== `open`) ||
          (e.action != null &&
            (X(
              P.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
              I.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
              e,
            ),
            m.dispatchMessage(`open-in-main-window`, { path: e.action.path })));
      }),
      (t[53] = K),
      (t[54] = i),
      (t[55] = X),
      (t[56] = ln))
    : (ln = t[56]);
  let un = ln,
    dn;
  t[57] === K
    ? (dn = t[58])
    : ((dn = (e, t) => {
        let n = e.waitingRequest;
        e.localConversationId == null ||
          n?.kind !== `question` ||
          c(`reply-with-user-input-response`, {
            conversationId: e.localConversationId,
            requestId: n.requestId,
            response: { answers: { [t.questionId]: { answers: [t.label] } } },
          }).then(() => {
            K();
          });
      }),
      (t[57] = K),
      (t[58] = dn));
  let fn = dn,
    pn;
  t[59] === X
    ? (pn = t[60])
    : ((pn = (e) => {
        (X(
          P.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
          I.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          e,
        ),
          z((t) => {
            if (t.get(e.id) === e.turnKey) return t;
            let n = new Map(t);
            return (n.set(e.id, e.turnKey), n);
          }));
      }),
      (t[59] = X),
      (t[60] = pn));
  let mn = pn,
    hn;
  t[61] !== i || t[62] !== X
    ? ((hn = async (e, t) => {
        if (e.controlTarget?.type !== `app-server-conversation`) return;
        let n = t.trim();
        n.length !== 0 &&
          (X(
            P.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
            I.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
            e,
          ),
          await c(`send-follow-up-message`, {
            conversationId: e.controlTarget.conversationId,
            prompt: n,
            serviceTier: await B(i, i.get(d, e.controlTarget.conversationId) ?? `local`, null),
          }));
      }),
      (t[61] = i),
      (t[62] = X),
      (t[63] = hn))
    : (hn = t[63]);
  let gn = hn,
    _n = Lt,
    vn,
    yn;
  (t[64] === Z
    ? ((vn = t[65]), (yn = t[66]))
    : ((vn = (e) => {
        let { layout: t } = e;
        (ne(t),
          Ge.current === t.mascot.width &&
            ((Ge.current = null), at(), j(null), window.requestAnimationFrame(Z)));
      }),
      (yn = [at, Z]),
      (t[64] = Z),
      (t[65] = vn),
      (t[66] = yn)),
    h(`avatar-overlay-layout-changed`, vn, yn));
  let bn, xn;
  (t[67] !== k || t[68] !== O
    ? ((bn = () => {
        let e = k || O;
        return (
          document.documentElement.classList.toggle(Ot, e),
          document.body.classList.toggle(Ot, e),
          It
        );
      }),
      (xn = [k, O]),
      (t[67] = k),
      (t[68] = O),
      (t[69] = bn),
      (t[70] = xn))
    : ((bn = t[69]), (xn = t[70])),
    (0, G.useLayoutEffect)(bn, xn));
  let Sn, Cn;
  (t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Sn = () => () => {
        (at(), st());
      }),
      (Cn = [st, at]),
      (t[71] = Sn),
      (t[72] = Cn))
    : ((Sn = t[71]), (Cn = t[72])),
    (0, G.useEffect)(Sn, Cn));
  let wn, Tn;
  (t[73] !== Q || t[74] !== $
    ? ((wn = () => {
        let e = (e) => {
            ($(e.pointerId, { releaseSample: De(e), shouldOpenMainWindow: !0 }),
              Q(e.pointerId, e.screenX),
              ht(e.pointerId));
          },
          t = (e) => {
            ($(e.pointerId, { shouldOpenMainWindow: !1 }), Q(e.pointerId), ht(e.pointerId));
          };
        return (
          window.addEventListener(`pointerup`, e),
          window.addEventListener(`pointercancel`, t),
          () => {
            (window.removeEventListener(`pointerup`, e),
              window.removeEventListener(`pointercancel`, t));
          }
        );
      }),
      (Tn = [Q, $, ht]),
      (t[73] = Q),
      (t[74] = $),
      (t[75] = wn),
      (t[76] = Tn))
    : ((wn = t[75]), (Tn = t[76])),
    (0, G.useEffect)(wn, Tn));
  let En;
  t[77] === Z
    ? (En = t[78])
    : ((En = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), Z());
            });
          },
          n = new ResizeObserver(t),
          r = qe.current;
        if (r != null) {
          n.observe(r);
          for (let e of Jt(r)) n.observe(e);
        }
        return (
          window.addEventListener(`resize`, t),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e),
              n.disconnect(),
              window.removeEventListener(`resize`, t));
          }
        );
      }),
      (t[77] = Z),
      (t[78] = En));
  let Dn;
  (t[79] !== Be || t[80] !== Z || t[81] !== n.id
    ? ((Dn = [Z, n.id, Be]), (t[79] = Be), (t[80] = Z), (t[81] = n.id), (t[82] = Dn))
    : (Dn = t[82]),
    (0, G.useLayoutEffect)(En, Dn));
  let On;
  t[83] === Z
    ? (On = t[84])
    : ((On = () => {
        Z();
      }),
      (t[83] = Z),
      (t[84] = On));
  let kn;
  (t[85] !== D ||
  t[86] !== M ||
  t[87] !== Be ||
  t[88] !== Z ||
  t[89] !== C.caption ||
  t[90] !== n.id
    ? ((kn = [D, Z, n.id, Be, C.caption, M]),
      (t[85] = D),
      (t[86] = M),
      (t[87] = Be),
      (t[88] = Z),
      (t[89] = C.caption),
      (t[90] = n.id),
      (t[91] = kn))
    : (kn = t[91]),
    (0, G.useLayoutEffect)(On, kn));
  let An, jn;
  (t[92] === Re
    ? ((An = t[93]), (jn = t[94]))
    : ((An = () => {
        if (Re == null) return;
        let e = Math.max(0, Re - Date.now()),
          t = window.setTimeout(() => {
            V(Ft);
          }, e);
        return () => {
          window.clearTimeout(t);
        };
      }),
      (jn = [Re]),
      (t[92] = Re),
      (t[93] = An),
      (t[94] = jn)),
    (0, G.useEffect)(An, jn));
  let Mn, Nn;
  (t[95] !== J || t[96] !== Y || t[97] !== K || t[98] !== Me
    ? ((Mn = () => {
        if (!J && !Y) return;
        let e = window.setTimeout(() => {
          (V(Pt), J && K(), Y && Me());
        }, vt);
        return () => {
          window.clearTimeout(e);
        };
      }),
      (Nn = [J, Y, K, Me]),
      (t[95] = J),
      (t[96] = Y),
      (t[97] = K),
      (t[98] = Me),
      (t[99] = Mn),
      (t[100] = Nn))
    : ((Mn = t[99]), (Nn = t[100])),
    (0, G.useEffect)(Mn, Nn));
  let Pn;
  t[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pn = y({
        id: `petOverlay.closePet`,
        defaultMessage: `Close pet`,
        description: `Context menu item that closes the floating Codex pet`,
      })),
      (t[101] = Pn))
    : (Pn = t[101]);
  let Fn;
  t[102] !== C || t[103] !== X
    ? ((Fn = [
        {
          id: `close-avatar`,
          message: Pn,
          onSelect: () => {
            (X(
              P.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              I.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              C.stop().catch(Nt),
              m.dispatchMessage(`avatar-overlay-close`, {}));
          },
        },
      ]),
      (t[102] = C),
      (t[103] = X),
      (t[104] = Fn))
    : (Fn = t[104]);
  let In = C.canStart,
    Ln = C.voiceActivity,
    Rn = C.audioStream,
    zn = C.caption,
    Bn = C.isMicrophoneMuted,
    Vn = C.isMuted,
    Hn = C.waveformCanvasRef,
    Un = C.phase,
    Wn;
  t[105] !== O || t[106] !== w.mascot || t[107] !== A
    ? ((Wn = O && A != null ? { ...w.mascot, height: Math.ceil(A / Se), width: A } : w.mascot),
      (t[105] = O),
      (t[106] = w.mascot),
      (t[107] = A),
      (t[108] = Wn))
    : (Wn = t[108]);
  let Gn, Kn;
  t[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gn = () => {
        le(!0);
      }),
      (Kn = () => {
        le(!1);
      }),
      (t[109] = Gn),
      (t[110] = Kn))
    : ((Gn = t[109]), (Kn = t[110]));
  let qn;
  t[111] !== cn || t[112] !== on || t[113] !== $t || t[114] !== rn
    ? ((qn = {
        onLostPointerCapture: cn,
        onPointerCancel: on,
        onPointerDown: $t,
        onPointerEnter: Gn,
        onPointerLeave: Kn,
        onPointerMove: tn,
        onPointerUp: rn,
      }),
      (t[111] = cn),
      (t[112] = on),
      (t[113] = $t),
      (t[114] = rn),
      (t[115] = qn))
    : (qn = t[115]);
  let Jn = A ?? M,
    Yn;
  t[116] === Jn ? (Yn = t[117]) : ((Yn = ve(Jn)), (t[116] = Jn), (t[117] = Yn));
  let Xn;
  t[118] === X
    ? (Xn = t[119])
    : ((Xn = () => {
        (X(
          P.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          I.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !1,
        ),
          ie(!1));
      }),
      (t[118] = X),
      (t[119] = Xn));
  let Zn;
  t[120] === X
    ? (Zn = t[121])
    : ((Zn = (e) => {
        X(
          P.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
          I.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        );
      }),
      (t[120] = X),
      (t[121] = Zn));
  let Qn;
  t[122] === X
    ? (Qn = t[123])
    : ((Qn = () => {
        (X(
          P.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
          I.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !0,
        ),
          ie(!0));
      }),
      (t[122] = X),
      (t[123] = Qn));
  let $n;
  return (
    t[124] !== mn ||
    t[125] !== Xt ||
    t[126] !== Mt ||
    t[127] !== kt ||
    t[128] !== un ||
    t[129] !== gn ||
    t[130] !== fn ||
    t[131] !== ae ||
    t[132] !== D ||
    t[133] !== w ||
    t[134] !== T ||
    t[135] !== ze ||
    t[136] !== C.audioStream ||
    t[137] !== C.canStart ||
    t[138] !== C.caption ||
    t[139] !== C.isMicrophoneMuted ||
    t[140] !== C.isMuted ||
    t[141] !== C.phase ||
    t[142] !== C.start ||
    t[143] !== C.stop ||
    t[144] !== C.toggleMicrophoneMute ||
    t[145] !== C.toggleMute ||
    t[146] !== C.voiceActivity ||
    t[147] !== C.waveformCanvasRef ||
    t[148] !== n ||
    t[149] !== Fn ||
    t[150] !== Wn ||
    t[151] !== qn ||
    t[152] !== Yn ||
    t[153] !== Xn ||
    t[154] !== Zn ||
    t[155] !== Qn ||
    t[156] !== te
      ? (($n = (0, q.jsx)(Ye, {
          avatar: n,
          avatarMenuItems: Fn,
          canStartRealtimeVoice: In,
          interactiveRegionRef: qe,
          realtimeVoiceActivity: Ln,
          realtimeVoiceAudioStream: Rn,
          realtimeVoiceCaption: zn,
          realtimeVoiceIsMicrophoneMuted: Bn,
          realtimeVoiceIsMuted: Vn,
          realtimeVoiceWaveformCanvasRef: Hn,
          usePetForRealtimeVoice: te,
          isDragging: ae,
          isNotificationTrayOpen: D,
          realtimeVoicePhase: Un,
          layout: w,
          mascotDragState: T,
          mascotLayout: Wn,
          mascotResizeHandle: qn,
          mascotStyle: Yn,
          notifications: ze,
          onCloseNotificationTray: Xn,
          onLostPointerCapture: Xt,
          onPointerCancel: Mt,
          onPointerDown: wt,
          onPointerMove: Et,
          onPointerUp: kt,
          onDismissNotification: mn,
          onNotificationReplyEditorActiveChange: _n,
          onOpenNotificationReply: Zn,
          onRunNotificationAction: un,
          onStartRealtimeVoice: C.start,
          onStopRealtimeVoice: C.stop,
          onToggleRealtimeVoiceMicrophoneMute: C.toggleMicrophoneMute,
          onToggleRealtimeVoiceMute: C.toggleMute,
          onSubmitQuestionOption: fn,
          onSubmitNotificationReply: gn,
          onOpenNotificationTray: Qn,
        })),
        (t[124] = mn),
        (t[125] = Xt),
        (t[126] = Mt),
        (t[127] = kt),
        (t[128] = un),
        (t[129] = gn),
        (t[130] = fn),
        (t[131] = ae),
        (t[132] = D),
        (t[133] = w),
        (t[134] = T),
        (t[135] = ze),
        (t[136] = C.audioStream),
        (t[137] = C.canStart),
        (t[138] = C.caption),
        (t[139] = C.isMicrophoneMuted),
        (t[140] = C.isMuted),
        (t[141] = C.phase),
        (t[142] = C.start),
        (t[143] = C.stop),
        (t[144] = C.toggleMicrophoneMute),
        (t[145] = C.toggleMute),
        (t[146] = C.voiceActivity),
        (t[147] = C.waveformCanvasRef),
        (t[148] = n),
        (t[149] = Fn),
        (t[150] = Wn),
        (t[151] = qn),
        (t[152] = Yn),
        (t[153] = Xn),
        (t[154] = Zn),
        (t[155] = Qn),
        (t[156] = te),
        (t[157] = $n))
      : ($n = t[157]),
    $n
  );
}
function Nt() {}
function Pt(e) {
  return Math.max(Date.now(), e + 1);
}
function Ft(e) {
  return Math.max(Date.now(), e + 1);
}
function It() {
  (document.documentElement.classList.remove(Ot), document.body.classList.remove(Ot));
}
function Lt(e) {
  m.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, { isInteractive: e });
}
function Rt(e) {
  m.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, { isInteractive: e });
}
function zt(e) {
  return e.source === `cloud` && e.status === `running`;
}
function Bt(e) {
  return e.source !== `cloud` && e.status === `running`;
}
function Vt() {
  return Date.now();
}
function Ht() {
  return new Map();
}
function Ut(e, t) {
  return H(e.startWidthPx + t - e.startScreenX);
}
function Wt(e, t) {
  return V(e, t) || b(yt, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function Gt(e, t) {
  return V(e, t) ? `pending-custom-avatar` : `ready`;
}
function Kt({ currentDragState: e, deltaX: t }) {
  return t >= bt ? `running-right` : t <= -bt ? `running-left` : e;
}
function qt(e) {
  if (e == null) return null;
  let t = Yt(e.querySelector(St)),
    n = Xt(e.querySelector($));
  return t == null ? null : { mascot: t, tray: n };
}
function Jt(e) {
  return Array.from(e.querySelectorAll(kt.join(`, `)));
}
function Yt(e) {
  if (e == null || en(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function Xt(e) {
  if (e == null || en(e)) return null;
  let t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return null;
  let n = Math.ceil(e.offsetWidth > 0 ? e.offsetWidth : t.width),
    r = e.querySelector(Ct),
    i = e.querySelector(wt),
    a = e.querySelector(Tt),
    o = e.querySelector(Et);
  if (r == null || (i == null && a == null)) return { width: n, height: Math.ceil(t.height) };
  let s = i != null && (a == null ? 0 : 1) + (o == null ? 0 : 1) > 1 ? Zt(i) : 0;
  return {
    width: n,
    height: Math.ceil(
      r.getBoundingClientRect().height +
        (a?.scrollHeight ?? 0) +
        (o == null ? 0 : o.getBoundingClientRect().height) +
        s,
    ),
  };
}
function Zt(e) {
  let t = Number.parseFloat(window.getComputedStyle(e).rowGap);
  return Number.isFinite(t) ? t : 0;
}
function Qt(e, t) {
  return (
    e != null &&
    e.isTrayVisible === t.isTrayVisible &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    $t(e.tray, t.tray)
  );
}
function $t(e, t) {
  return e === t || (e != null && t != null && e.width === t.width && e.height === t.height);
}
function en(e) {
  return window.getComputedStyle(e).display === `none`;
}
export { jt as AvatarOverlayPage };
//# sourceMappingURL=avatar-overlay-page.js.map
