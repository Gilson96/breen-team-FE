import type { KaboomCtx } from "kaboom";

export function playMusic(k: KaboomCtx) {
  return k.play('music', {
    loop: true,
    volume: 0.01,
    paused: false
  });
}

export function playgameOver(k: KaboomCtx) {
  return k.play('gameOverSound', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}

export function playRunningSound(k: KaboomCtx) {
  return k.play('runningSound', {
    loop: true,
    volume: 0.1,
    paused: false
  });
}


export function playcatchKnifeSound(k: KaboomCtx) {
  return k.play('catchKnifeSound', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}

export function playbuttonClick(k: KaboomCtx) {
  return k.play('buttonClick', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}