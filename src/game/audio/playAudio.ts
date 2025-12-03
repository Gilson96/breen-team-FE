import type { KaboomCtx } from 'kaboom';

export function gameMusic(k: KaboomCtx) {
  return k.play('gameMusic', {
    loop: true,
    volume: 0.09,
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
    volume: 0.15,
    paused: false
  });
}

export function playbuttonClick(k: KaboomCtx) {
  return k.play('buttonClick', {
    loop: false,
    volume: 0.15,
    paused: false
  });
}

export function grunt(k: KaboomCtx) {
  return k.play('grunt', {
    loop: false,
    volume: 0.15,
    paused: false
  });
}
export function jumpLanding(k: KaboomCtx) {
  return k.play('jumpLanding', {
    loop: false,
    volume: 0.5,
    paused: false
  });
}
export function mainMenuMusic(k: KaboomCtx) {
  return k.play('mainMenuMusic', {
    loop: false,
    volume: 0.3,
    paused: false
  });
}
export function slide(k: KaboomCtx) {
  return k.play('slide', {
    loop: false,
    volume: 0.2,
    paused: false,
    speed: 1.5,
    detune: -500,
    
  });
}
