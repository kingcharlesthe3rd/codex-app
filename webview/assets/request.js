import { Xn as e, Yn as t } from "./src-2.js";
import { l as n } from "./vscode-api.js";
function r(e) {
  return new TextDecoder().decode(a(e));
}
function i(e) {
  return o(new TextEncoder().encode(e));
}
function a(e) {
  let t = atob(e);
  return Uint8Array.from(t, (e) => e.charCodeAt(0));
}
function o(e) {
  if (`toBase64` in e && typeof e.toBase64 == `function`) return e.toBase64();
  let t = ``,
    n = 32768;
  for (let r = 0; r < e.byteLength; r += n) t += String.fromCharCode(...e.subarray(r, r + n));
  return btoa(t);
}
function s(e) {
  return o(e).replaceAll(`+`, `-`).replaceAll(`/`, `_`).replace(/=+$/u, ``);
}
var c = `OAI-Language`,
  l = `en`;
function u() {
  return l;
}
function d(e) {
  l = e;
}
function f(e, t) {
  return e.replace(/\{([^}]+)\}/g, (e, n) => t[n].toString());
}
function p(e) {
  if (!e) return ``;
  let t = new URLSearchParams();
  for (let [n, r] of Object.entries(e))
    if (Array.isArray(r)) for (let e of r) t.append(n, m(e));
    else r != null && t.append(n, m(r));
  let n = t.toString();
  return n.length === 0 ? `` : `?${n}`;
}
function m(e) {
  return typeof e == `string` ||
    typeof e == `number` ||
    typeof e == `boolean` ||
    typeof e == `bigint`
    ? String(e)
    : (JSON.stringify(e) ?? ``);
}
var h = class {
  constructor(e = {}) {
    this.defaults = e;
  }
  getRequestTarget(e, t) {
    let n = t?.parameters && `query` in t.parameters ? t.parameters.query : void 0,
      r = f(
        e,
        t?.parameters && `path` in t.parameters && t.parameters.path ? t.parameters.path : {},
      ),
      i = p(n);
    return {
      headers: { ...this.defaults.getAdditionalHeaders?.(), ...t?.additionalHeaders },
      url: `${r}${i}`,
    };
  }
  getRequestBody(e) {
    return e && `requestBody` in e ? JSON.stringify(e.requestBody) : void 0;
  }
  async makeRequest(e, t, r) {
    let { headers: i, url: a } = this.getRequestTarget(t, r);
    switch (e) {
      case `get`:
        return (await n.getInstance().get(a, i)).body;
      case `post`: {
        let e = this.getRequestBody(r);
        return (await n.getInstance().post(a, e, i)).body;
      }
      case `patch`: {
        let e = this.getRequestBody(r);
        return (await n.getInstance().sendRequest(`PATCH`, a, { body: e, headers: i })).body;
      }
      case `delete`: {
        let e = await n.getInstance().sendRequest(`DELETE`, a, { headers: i });
        return e.status === 204 ? void 0 : e.body;
      }
    }
  }
  async safeGet(e, ...t) {
    return this.makeRequest(`get`, e, t[0]);
  }
  async safePost(e, ...t) {
    return this.makeRequest(`post`, e, t[0]);
  }
  async safePatch(e, ...t) {
    return this.makeRequest(`patch`, e, t[0]);
  }
  async safeDelete(e, ...t) {
    return this.makeRequest(`delete`, e, t[0]);
  }
  streamPost(e, t) {
    let { headers: r, url: i } = this.getRequestTarget(e, t);
    return n
      .getInstance()
      .stream(`POST`, i, {
        body: t.body,
        headers: r,
        onComplete: t.onComplete,
        onError: t.onError,
        onEvent: t.onEvent,
      });
  }
  cancelStream(e) {
    n.getInstance().cancelStream(e);
  }
};
function g(e) {
  d(e);
}
function _() {
  return { [t]: `1`, [e]: `1`, originator: `Codex Desktop` };
}
function v() {
  return { [c]: u(), ..._() };
}
var y = new h({ getAdditionalHeaders: v });
export { o as a, r as c, a as i, _ as n, s as o, g as r, i as s, y as t };
//# sourceMappingURL=request.js.map
