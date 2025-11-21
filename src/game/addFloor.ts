import type { KAPLAYCtx } from 'kaplay';

export function addFloor(k: KAPLAYCtx) {
  return k.add([
    k.pos(0, k.height() - 50),
    k.rect(k.width(), 20),
    k.area(),
    k.body({ isStatic: true })
  ]);
}
