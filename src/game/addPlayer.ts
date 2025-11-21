import type { KAPLAYCtx } from 'kaplay';

export function addPlayer(k: KAPLAYCtx) {
  return k.add([
    k.sprite('player', { anim: 'run' }),
    k.pos(150, k.height() - 50),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 44, 60)
    }),
    k.body(),
    k.anchor('bot'),
    k.scale(2),
    'player'
  ]);
}
