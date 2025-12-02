import type { KaboomCtx } from 'kaboom';

function spawnCages(k: KaboomCtx, position: number) {
  k.add([
    k.sprite('cage'),
    k.pos(k.width() + 100, k.height() - position),
    k.anchor('bot'),
    k.scale(4),
    k.move(k.vec2(-1, 0), 250),
    k.offscreen({ destroy: true }),
    'middlegroundProp'
  ]);
}

function spawnStalactite(k: KaboomCtx, position: number, spacing: number) {
  k.add([
    k.sprite('middlegroundsStalactite'),
    k.pos(k.width() + 100 + spacing, k.height() - position),
    k.anchor('bot'),
    k.scale(2,2.5),
    k.move(k.vec2(-1, 0), 250),
    k.offscreen({ destroy: true }),
    'middlegroundProp'
  ]);
}

export function spawnMiddlegroundProps(k: KaboomCtx) {
  k.wait(k.rand(1, 3), () => {
    const spawn = k.randi(0, 10);
    const amount = k.randi(0, 3);

    if (spawn <= 2) {
      spawnCages(k, k.randi(300, 500));
    } else {
      spawnStalactite(k, k.randi(400, 700), k.randi(0, 50));

      if (amount > 1) {
        spawnStalactite(k, k.randi(400, 700), k.randi(50, 100));
      }
      if (amount > 2) {
        spawnStalactite(k, k.randi(400, 700), k.randi(100, 150));
      }
    }
    spawnMiddlegroundProps(k);
  });
}
