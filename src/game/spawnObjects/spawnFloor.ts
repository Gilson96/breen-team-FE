import type { KaboomCtx } from 'kaboom';

export function spawnFloor(k: KaboomCtx) {
  const firstTile = k.add([
    k.sprite('floorSprite'),
    k.pos(0, k.height() - 66),
    k.scale(2.01, 2),
    k.z(9),
    'floorSpriteOne'
  ]);

  const secondTile = k.add([
    k.sprite('floorSprite'),
    k.pos(k.width(), k.height() - 66),
    k.scale(2.01, 2),
    k.z(9),
    'floorSpriteTwo'
  ]);

  return [firstTile, secondTile];
}
