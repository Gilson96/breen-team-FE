import type { AudioPlay, KaboomCtx, GameObj } from 'kaboom';

export function playerInputs(
  k: KaboomCtx,
  player: GameObj,
  running: AudioPlay,
  state: { isMuted: boolean }
) {
  k.onClick(() => {
    if (player.isGrounded()) {
      player.jump(1500);
    }
  });

  k.onKeyPress('space', () => {
    if (player.isGrounded()) {
      player.jump(1500);
    }
  });

  k.onUpdate(() => {
    const grounded = player.isGrounded();
    const muted = state.isMuted;
    console.log(muted);

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
