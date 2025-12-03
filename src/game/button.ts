import type { KaboomCtx, Vec2 } from 'kaboom';
import { playbuttonClick } from './audio/playAudio';

export function button(
  k: KaboomCtx,
  txt: string,
  p: Vec2,
  goTo: string,
  state: { isMuted: boolean }
) {
  const btn = k.add([k.sprite('buttonImage'), k.pos(p), k.area(), k.scale(2), k.anchor('center')]);

  btn.add([k.text(txt, { size: 20, font: 'font' }), k.anchor('center'), k.color(255, 153, 70)]);

  btn.onClick(() => {
    if (!state.isMuted) playbuttonClick(k);
    k.go(goTo);
  });
  return btn;
}
