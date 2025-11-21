import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';
import { addButton } from './button';

export default function initGame(gameRef: RefObject<HTMLCanvasElement | undefined>): void {
  const k = initKaplay(gameRef);

  k.loadSprite('player', './player.png', {
    sliceX: 2,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 1,
        speed: 4,
        loop: true
      }
    }
  });

  k.loadSprite('mob', './mob.png', {
    sliceX: 1,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 0
        // speed: 4,
        // loop: true
      }
    }
  });

  k.scene('mainMenu', () => {
    k.setBackground(40, 100, 100);
    addButton(k, 'Start', k.vec2(200, 100), 'game');
    addButton(k, 'Top Scores', k.vec2(200, 200), 'topScores');
  });

  k.scene('topScores', () => {
    k.setBackground(200, 30, 52);
    k.add([k.text('topScores'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.scene('game', () => {
    k.setGravity(4000);

    k.setBackground(100, 10, 102);
    k.add([k.text('game'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Game Over', k.vec2(200, 200), 'gameOver');

    const player = k.add([
      k.sprite('player', { anim: 'run' }),
      k.pos(150, k.height() - 50),
      k.area({
        shape: new k.Rect(k.vec2(0, 0), 50, 60)
      }),
      k.body(),
      k.anchor('bot'),
      k.scale(2),
      'player'
    ]);

    const mob = k.add([
      k.sprite('mob', { anim: 'run' }),
      k.pos(300, k.height() - 60),
      k.area({
        shape: new k.Rect(k.vec2(0, 0), 50, 40)
      }),
      k.body(),
      k.anchor('bot'),
      k.scale(2),
      'mob'
    ]);

    const floor = k.add([
      k.pos(0, k.height() - 50),
      k.rect(k.width(), 20),
      k.area(),
      k.body({ isStatic: true })
    ]);

    player.onUpdate(() => {
      k.onKeyPress('space', () => {
        if (player.isGrounded()) {
          player.jump(1300);
        }
      });
    });
  });

  k.scene('gameOver', () => {
    k.setBackground(120, 200, 192);
    k.add([k.text('gameOver'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.go('game', {});
}
