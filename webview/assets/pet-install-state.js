import { n as e } from "./rolldown-runtime.js";
import {
  Ht as t,
  Qc as n,
  Ut as r,
  ot as i,
  tc as a,
  ut as o,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~i4yy32ef.js";
async function s(e, t, n = (e) => i(`pet-install-preview`, { params: e })) {
  if (e.get(u)?.status === `installing`) return;
  let r = { ...t, status: `loading` };
  e.set(u, r);
  try {
    let i = await n(t);
    if (e.get(u) !== r) return;
    e.set(u, { ...t, status: `ready`, preview: i });
  } catch {
    if (e.get(u) !== r) return;
    e.set(u, { ...t, status: `previewError` });
  }
}
async function c(e, t, n = (e) => i(`pet-install`, { params: e })) {
  let r = e.get(u);
  if (r?.status !== `ready` && r?.status !== `installError`) return;
  let a = { ...r, status: `installing` };
  e.set(u, a);
  let o;
  try {
    o = await n({ name: r.name, description: r.description, imageUrl: r.imageUrl });
  } catch {
    if (e.get(u) !== a) return;
    e.set(u, { ...r, status: `installError` });
    return;
  }
  e.get(u) === a &&
    (e.set(u, { ...r, status: `installed`, installedAvatarId: o.id }),
    await t().catch(() => void 0));
}
function l(e) {
  e.set(u, null);
}
var u,
  d = e(() => {
    (a(), r(), o(), (u = n(t, null)));
  });
export { s as a, u as i, d as n, c as r, l as t };
//# sourceMappingURL=pet-install-state.js.map
