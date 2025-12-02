import { type KaboomCtx } from 'kaboom';

function torch(k: KaboomCtx, position: number) {
  k.add([
    k.sprite('torch', { anim: 'run' }),
    k.pos(k.width() + 50, k.height() - position),
    k.scale(0.5),
    k.anchor('center'),
    k.move(k.vec2(-1, 0), 100),
    k.offscreen({ destroy: true }),
    'backgroundProp'
  ]);
}

function gate(k: KaboomCtx) {
  k.add([
    k.sprite('gate'),
    k.pos(k.width() + 200, k.height() - 50),
    k.scale(1.4),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 100),
    k.offscreen({ destroy: true }),
    'backgroundProp'
  ]);
}

function column(k: KaboomCtx) {
  k.add([
    k.sprite('column'),
    k.pos(k.width() + 100, k.height() - 50),
    k.scale(1.68),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 100),
    k.offscreen({ destroy: true }),
    'backgroundProp'
  ]);
}

export function spawnBackgroundProps(k: KaboomCtx) {
  k.wait(k.rand(1, 5), () => {
    const spawn = k.randi(0, 11);
    if (spawn <= 5) torch(k, k.randi(200, 300));
    else if (spawn <= 9) column(k);
    else if (spawn > 9) {
      gate(k);
      k.wait(2, () => {
        spawnBackgroundProps(k);
      });
    } else spawnBackgroundProps(k);
  });
}
