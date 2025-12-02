import type { AudioPlay, KaboomCtx, GameObj } from 'kaboom';
import { playcatchKnifeSound } from './audio/playAudio';

export function playerCollision(
  k: KaboomCtx,
  player: GameObj,
  scoreLabel: GameObj,
  music: AudioPlay,
  running: AudioPlay
) {
  player.onCollide('scorePoint', () => {
    scoreLabel.value += 1;
    scoreLabel.text = `SCORE: ${scoreLabel.value}`;
    scoreLabel.font = 'font';
  });
  player.onCollide('knife', (knife: GameObj) => {
    playcatchKnifeSound(k);
    k.destroy(knife);
    scoreLabel.value += 10;
    scoreLabel.text = `SCORE: ${scoreLabel.value}`;
    scoreLabel.font = 'font';
  });

  player.onCollide('obstacle', () => {
    k.go('gameOver', music, running, scoreLabel.value);
  });
}
