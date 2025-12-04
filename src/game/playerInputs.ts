import type { AudioPlay, KaboomCtx, GameObj } from 'kaboom';
import { grunt, jumpLanding, slide } from './audio/playAudio';

export function playerJump(k: KaboomCtx, player: GameObj, state: { isMuted: boolean }) {
  if (player.isGrounded()) {
    if (!state.isMuted) {
      grunt(k);
      player.area.shape = new k.Rect(k.vec2(0, 0), 100, 270);
      k.wait(0.71, () => {
        jumpLanding(k);
      });
    }

    player.play('jump');
    k.wait(0.71, () => {
      player.play('run');
    });
    player.jump(1500);
  }
}

export function playerSlide(k: KaboomCtx, player: GameObj, state: { isMuted: boolean }) {
  if (player.isGrounded()) {
    if (!state.isMuted) {
      slide(k);
    }
    player.play('slide');
    player.area.shape = new k.Rect(k.vec2(0, 0), 200, 100);
    k.wait(1, () => {
      player.play('run');
      player.area.shape = new k.Rect(k.vec2(0, 0), 100, 270);
    });
  }
}

export function playerInputs(
  k: KaboomCtx,
  player: GameObj,
  running: AudioPlay,
  state: { isMuted: boolean }
) {
  k.onKeyPress('w', () => {
    playerJump(k, player, state);
  });

  k.onKeyPress('s', () => {
    playerSlide(k, player, state);
  });

  k.onUpdate(() => {
    const grounded = player.isGrounded();
    const muted = state.isMuted;

    if (grounded && !muted) {
      if (running.paused) {
        running.paused = false;
      }
    } else {
      if (!running.paused) {
        running.paused = true;
      }
    }
    if (player.pos.y > k.height()) {
      player.pos = k.vec2(150, k.height() - 50);
      player.vel = k.vec2(0, 0);
    }
  });
}
