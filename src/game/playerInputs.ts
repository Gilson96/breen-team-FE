import type { AudioPlay, KaboomCtx, GameObj } from 'kaboom';
import { playbuttonClick } from './audio/playAudio';

export function playerInputs(k: KaboomCtx, player: GameObj, running: AudioPlay) {
  k.onClick(() => {
    if (player.isGrounded()) {
      running.paused = true;
      player.jump(1500);
      playbuttonClick(k);
    }
  });

  k.onKeyPress('space', () => {
    if (player.isGrounded()) {
      running.paused = true;
      player.jump(1500);
    }
  });

  k.onUpdate(() => {
    if (running.paused === true) {
      k.wait(0.6, () => {
        running.paused = false;
      });
    }
    if (player.pos.y > k.height()) {
      player.pos = k.vec2(150, k.height() - 50);
      player.vel = k.vec2(0, 0);
    }
  });
}
