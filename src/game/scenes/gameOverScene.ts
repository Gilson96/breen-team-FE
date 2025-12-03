import type { KaboomCtx } from 'kaboom';
import { playgameOver } from '../audio/playAudio.ts';
import { button } from '../button.ts';
import { spawnGameOverImage } from '../spawnObjects/spawnGameOverImage.ts';

export function gameOver(
  k: KaboomCtx,
  setScore: (score: number) => void,
  state: { isMuted: boolean }
) {
  k.scene('gameOver', (music, running, score) => {
    music.paused = true;
    running.paused = true;

    if (!state.isMuted) playgameOver(k);

    k.add([k.pos(0, 0), k.rect(1282, 720), k.color(0, 0, 0)]);
    spawnGameOverImage(k);

    const scoreFrame = k.add([
      k.sprite('labelImage'),
      k.pos(k.width() / 2, 200),
      k.area(),
      k.scale(2),
      k.anchor('center'),
      k.outline(4),
      k.color(255, 255, 255)
    ]);

    scoreFrame.add([
      k.text(`FINAL SCORE: ${score}`, { font: 'font', size: 20 }),
      k.scale(1),
      k.anchor('center'),
      k.color(255, 153, 70)
    ]);

    button(k, 'Main Menu', k.vec2(k.width() / 2, 400), 'mainMenu', state);

    setScore(score);
  });
}
