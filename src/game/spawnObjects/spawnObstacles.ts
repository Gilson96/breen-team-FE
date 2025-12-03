import type { KaboomCtx } from 'kaboom';

function groundObstacles(k: KaboomCtx) {
  k.add([
    k.pos(k.width() + 200, k.height() - 60),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite(k.choose(['bigRockObstacle', 'smallRockObstacle'])),
    k.pos(k.width() + 100, k.height() - 40),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 35, 30)
    }),
    k.body(),
    k.scale(2.5),
    k.move(k.vec2(-1, 0), 400),
    k.anchor('bot'),
    k.offscreen({ destroy: true }),
    'obstacle'
  ]);
}

function barricadeObstacles(k: KaboomCtx) {
  k.add([
    k.pos(k.width() + 200, k.height() - 60),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite('barricade'),
    k.pos(k.width() + 100, k.height() - 40),
    k.area({
      shape: new k.Rect(k.vec2(10, 0), 30, 60)
    }),
    k.body(),
    k.scale(2.5, 2.5),
    k.move(k.vec2(-1, 0), 400),
    k.anchor('bot'),
    k.offscreen({ destroy: true }),
    'obstacle'
  ]);
}

export function topObstacles(k: KaboomCtx) {
  k.add([
    k.pos(k.width() + 200, k.height() - 60),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite('stalactiteObstacle'),
    k.pos(k.width() + 100, k.height() - 300),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 10, 30)
    }),
    k.anchor('bot'),
    k.scale(2, 2.5),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    'obstacle'
  ]);
}

export function slideObstacles(k: KaboomCtx) {
  k.add([
    k.pos(k.width() + 200, k.height() - 60),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite('pendulumBlade'),
    k.pos(k.width() + 100, k.height() - 150),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 35, 20)
    }),
    k.anchor('bot'),
    k.scale(4.3, 5),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    'obstacle'
  ]);
}

export function spawnObstacles(k: KaboomCtx, waitTime = 0.7) {
  const spawn = k.randi(0, 10);
  if (spawn > 7) waitTime = 0.9;
  k.wait(k.rand(waitTime, 2.5), () => {
    if (spawn <= 2) groundObstacles(k);
    else if (spawn <= 5) barricadeObstacles(k);
    else if (spawn <= 7) topObstacles(k);
    else slideObstacles(k);
    spawnObstacles(k, waitTime);
  });
}
