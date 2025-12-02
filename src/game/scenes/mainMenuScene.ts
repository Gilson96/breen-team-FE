import type { KaboomCtx } from 'kaboom';
import { spawnMainMenuImage } from '../spawnObjects/spawnMainMenuImage';
import { addButton } from '../button';

export function mainMenu(k: KaboomCtx) {
  k.scene('mainMenu', () => {
    spawnMainMenuImage(k);
    addButton(k, 'Start', k.vec2(k.width() / 2, 500), 'game');
  });
}
