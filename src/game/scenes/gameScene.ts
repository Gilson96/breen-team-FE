import type { KaboomCtx } from 'kaboom';

import { gameMusic, playRunningSound } from '../audio/playAudio.ts';

import { spawnPlayer } from '../spawnObjects/spawnPlayer.ts';
import { playerInputs } from '../playerInputs.ts';
import { playerCollision } from '../playerCollision.ts';

import { floorColision } from '../floorCollision.ts';
import { spawnObstacles } from '../spawnObjects/spawnObstacles.ts';
import { spawnKnives } from '../spawnObjects/spawnKnives.ts';
import { floorAnim } from '../floorAnim';
import { backgroundAnim } from '../backgroundAnim.ts';
import { spawnMiddlegroundProps } from '../spawnObjects/spawnMiddlegroundProps.ts';
import { spawnBackgroundProps } from '../spawnObjects/spawnBackgroundProps.ts';
import { muteButton } from '../muteButton.ts';

export function playGame(k: KaboomCtx, state: { isMuted: boolean }) {
  k.scene('game', () => {
    const music = gameMusic(k);
    const running = playRunningSound(k);

    if (state.isMuted) {
      music.paused = true;
      running.paused = true;
    }

    muteButton(k, { music, running }, state);

    const scoreLabel = k.add([
      k.text('SCORE: 0'),
      { font: 'font' },
      k.pos(100, 50),
      k.scale(0.7),
      { value: 0 },
      k.z(10),
      k.color(255, 153, 70)
    ]);

    k.setGravity(4000);
    backgroundAnim(k);

    const player = spawnPlayer(k);

    playerInputs(k, player, running, state);
    playerCollision(k, player, scoreLabel, music, running, state);

    floorColision(k);
    floorAnim(k);
    spawnObstacles(k);
    spawnKnives(k);
    spawnMiddlegroundProps(k);
    spawnBackgroundProps(k);
  });
}
