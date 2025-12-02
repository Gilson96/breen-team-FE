import type { KaboomCtx } from 'kaboom'
export function floorColision(k: KaboomCtx) {
  return k.add([
    k.pos(-100, k.height() - 50),
    k.rect(k.width() + 200, 50),
    k.area(),
    k.body({ isStatic: true }),
    k.opacity(0),
    'floor'
  ]);
}
