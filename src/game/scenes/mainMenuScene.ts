import type { KaboomCtx } from 'kaboom';
import { spawnMainMenuImage } from '../spawnObjects/spawnMainMenuImage';
import { button } from '../button';
import { muteButton } from '../muteButton';
import { mainMenuMusic } from '../audio/playAudio';

export function mainMenu(k: KaboomCtx, state: { isMuted: boolean }) {
  k.scene('mainMenu', () => {
    spawnMainMenuImage(k);
    const music = mainMenuMusic(k)

    k.add([
      k.text('Press "M" to mute.'),
      { font: 'font' },
      k.pos(k.vec2(k.width() / 2, 600)),
      k.anchor('center'),
      k.scale(0.6),
      k.color(255, 153, 70),
      k.opacity(0.5)
    ])
    muteButton(k, {music}, state);

    button(k, 'Start', k.vec2(k.width() / 2, 500), 'game', state, music);
  });
}
