import { n as e } from "./rolldown-runtime.js";
import {
  $P as t,
  AB as n,
  FB as r,
  GN as i,
  QP as a,
  VN as o,
  WN as s,
  bF as c,
  qV as l,
  zF as u,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5.js";
function d(e) {
  return e == null || e.length === 0
    ? f
    : [
        ...f,
        ...e.map((e) => ({
          assetRef: `codex`,
          description: e.description,
          displayName: e.displayName,
          id: e.id,
          spritesheetUrl: e.spritesheetDataUrl,
        })),
      ];
}
var f,
  p = e(() => {
    f = [
      {
        assetRef: `codex`,
        description: `The original Codex companion.`,
        displayName: `Codex`,
        id: `codex`,
      },
      {
        assetRef: `dewey`,
        description: `A tidy duck for calm workspace days.`,
        displayName: `Dewey`,
        id: `dewey`,
      },
      {
        assetRef: `fireball`,
        description: `Hot path energy for fast iteration.`,
        displayName: `Fireball`,
        id: `fireball`,
      },
      {
        assetRef: `hoots`,
        description: `A sharp-eyed owl for polished work in a blink.`,
        displayName: `Hoots`,
        id: `hoots`,
      },
      {
        assetRef: `rocky`,
        description: `A steady rock when the diff gets large.`,
        displayName: `Rocky`,
        id: `rocky`,
      },
      {
        assetRef: `seedy`,
        description: `Small green shoots for new ideas.`,
        displayName: `Seedy`,
        id: `seedy`,
      },
      {
        assetRef: `stacky`,
        description: `A balanced stack for deep work.`,
        displayName: `Stacky`,
        id: `stacky`,
      },
      {
        assetRef: `bsod`,
        description: `A tiny blue-screen gremlin.`,
        displayName: `BSOD`,
        id: `bsod`,
      },
      {
        assetRef: `null-signal`,
        description: `Quiet signal from the void.`,
        displayName: `Null Signal`,
        id: `null-signal`,
      },
    ];
  });
function m(e, t = f) {
  return t.find((t) => t.id === e) ?? t.find((e) => e.id === v) ?? t[0] ?? f[0];
}
function h(e, t) {
  return t?.startsWith(`custom:`) === !0 && e.id !== t;
}
function g(e) {
  let t = (0, _.c)(9),
    n = r(a),
    o = i(u.selectedAvatarId),
    c;
  t[0] !== e || t[1] !== o ? ((c = m(o, e)), (t[0] = e), (t[1] = o), (t[2] = c)) : (c = t[2]);
  let l;
  t[3] === n
    ? (l = t[4])
    : ((l = (e) => {
        s(n, u.selectedAvatarId, e);
      }),
      (t[3] = n),
      (t[4] = l));
  let d;
  return (
    t[5] !== o || t[6] !== c || t[7] !== l
      ? ((d = { selectedAvatar: c, selectedAvatarId: o, setSelectedAvatarId: l }),
        (t[5] = o),
        (t[6] = c),
        (t[7] = l),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var _,
  v,
  y = e(() => {
    ((_ = l()), n(), c(), t(), o(), p(), (v = `codex`));
  });
export { d as a, f as i, h as n, p as o, g as r, y as t };
//# sourceMappingURL=app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g.js.map
