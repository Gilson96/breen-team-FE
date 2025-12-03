import type { KaboomCtx } from 'kaboom';

export function loadAudio(k: KaboomCtx) {
  k.loadSound('gameMusic', './sound/gameMusic.mp3');
  k.loadSound('gameOverSound', './sound/gameOverSound.mp3');
  k.loadSound('runningSound', './sound/runningSound.mp3');
  k.loadSound('catchKnifeSound', './sound/catchKnifeSound.mp3');
  k.loadSound('buttonClick', './sound/buttonClick.mp3');
  k.loadSound('grunt', './sound/grunt.mp3');
  k.loadSound('jumpLanding', './sound/jumpLanding.mp3');
  k.loadSound('mainMenuMusic', './sound/mainMenuMusic.mp3');
}
