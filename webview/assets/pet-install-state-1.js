import { n as e } from "./rolldown-runtime.js";
import {
  IP as t,
  LP as n,
  PN as r,
  RN as i,
  bB as a,
  lV as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf.js";
async function s(e, t, n = (e) => r(`pet-install-preview`, { params: e })) {
  if (e.get(u)?.status === `installing`) return;
  let i = { ...t, status: `loading` };
  e.set(u, i);
  try {
    let r = await n(t);
    if (e.get(u) !== i) return;
    e.set(u, { ...t, status: `ready`, preview: r });
  } catch {
    if (e.get(u) !== i) return;
    e.set(u, { ...t, status: `previewError` });
  }
}
async function c(e, t, n = (e) => r(`pet-install`, { params: e })) {
  let i = e.get(u);
  if (i?.status !== `ready` && i?.status !== `installError`) return;
  let a = { ...i, status: `installing` };
  e.set(u, a);
  let o;
  try {
    o = await n({ name: i.name, description: i.description, imageUrl: i.imageUrl });
  } catch {
    if (e.get(u) !== a) return;
    e.set(u, { ...i, status: `installError` });
    return;
  }
  e.get(u) === a &&
    (e.set(u, { ...i, status: `installed`, installedAvatarId: o.id }),
    await t().catch(() => void 0));
}
function l(e) {
  e.set(u, null);
}
var u,
  d = e(() => {
    (a(), n(), i(), (u = o(t, null)));
  });
export { s as a, u as i, d as n, c as r, l as t };
//# sourceMappingURL=pet-install-state-1.js.map
