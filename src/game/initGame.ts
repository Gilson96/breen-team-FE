import type { RefObject } from 'react';
import initKaboom from './KaboomCtx.ts';

import { loadSprites } from './loadGameSprites';
import { loadAudio } from './audio/loadAudio.ts';
import { mainMenu } from './scenes/mainMenuScene.ts';
import { playGame } from './scenes/gameScene.ts';
import { gameOver } from './scenes/gameOverScene.ts';

export default function initGame(
  gameRef: RefObject<HTMLCanvasElement>,
  setScore: (score: number) => void
): () => void {
  const k = initKaboom(gameRef);

  const state = { isMuted: false };
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  loadSprites(k);
  loadAudio(k);
  mainMenu(k, state, isMobile);
  playGame(k, state, isMobile);
  gameOver(k, setScore, state);

  k.go('mainMenu');

  return () => {
    k.go('gameOver');
    k.quit();
  };
}
