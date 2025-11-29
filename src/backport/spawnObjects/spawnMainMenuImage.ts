import type { KaboomCtx } from 'kaboom';

export function spawnMainMenuImage(k: KaboomCtx) {
  k.add([
    k.sprite('mainMenuImage'),
    k.pos(k.width() / 2 + 15, k.height() / 2),
    k.scale(2.1),
    k.anchor('center'),
    'mainMenuImage'
  ]);
}
