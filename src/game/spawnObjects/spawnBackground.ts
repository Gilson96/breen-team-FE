import type { KaboomCtx } from 'kaboom';

export function spawnBackground(k: KaboomCtx) {
  const firstTile = k.add([
    k.sprite('background'),
    k.pos(0, k.height()),
    k.anchor('botleft'),
    k.scale(2.01, 2),
    'background'
  ]);

  const secondTile = k.add([
    k.sprite('background'),
    k.pos(k.width(), k.height()),
    k.anchor('botleft'),
    k.scale(2.01, 2),
    'background'
  ]);

  return [firstTile, secondTile];
}
