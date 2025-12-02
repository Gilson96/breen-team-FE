import type { KaboomCtx } from 'kaboom';

export function spawnGameOverImage(k: KaboomCtx) {
  k.add([
    k.sprite('gameOverImage'),
    k.pos(k.width() / 2 + 15, k.height() / 2),
    k.scale(2.1),
    k.anchor('center'),
    'gameOverImage'
  ]);
}
