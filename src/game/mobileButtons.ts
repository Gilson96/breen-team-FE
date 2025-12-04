import type { KaboomCtx, GameObj, AudioPlay } from 'kaboom';
import { playerJump, playerSlide } from './playerInputs';
import { playbuttonClick } from './audio/playAudio';

export function mobileJumpButtons(k: KaboomCtx, player: GameObj, state: { isMuted: boolean }) {
  const btn = k.add([
    k.sprite('buttonImage'),
    k.pos(k.vec2(k.width() - 140, k.height() - 450)),
    k.area(),
    k.scale(2),
    k.anchor('center'),
    k.z(10)
  ]);

  btn.add([k.text('Jump', { size: 20, font: 'font' }), k.anchor('center'), k.color(255, 153, 70)]);

  btn.onClick(() => {
    playerJump(k, player, state);
  });
}

export function mobileSlideButtons(k: KaboomCtx, player: GameObj, state: { isMuted: boolean }) {
  const btn = k.add([
    k.sprite('buttonImage'),
    k.pos(k.vec2(k.width() - 140, k.height() - 250)),
    k.area(),
    k.scale(2),
    k.anchor('center'),
    k.z(10)
  ]);

  btn.add([k.text('Slide', { size: 20, font: 'font' }), k.anchor('center'), k.color(255, 153, 70)]);

  btn.onClick(() => {
    playerSlide(k, player, state);
  });
}

export function mobileMuteButton(
  k: KaboomCtx,
  audio: Record<string, AudioPlay>,
  state: { isMuted: boolean }
) {
  const btn = k.add([
    k.sprite('buttonImage'),
    k.pos(k.vec2(k.width() - 85, k.height() - 670)),
    k.area(),
    k.scale(1),
    k.anchor('center'),
    k.z(10)
  ]);

  btn.add([k.text('Mute', { size: 20, font: 'font' }), k.anchor('center'), k.color(255, 153, 70)]);

  btn.onClick(() => {
    playbuttonClick(k);
    for (const sound of Object.values(audio)) {
      sound.paused = !sound.paused;
    }
    state.isMuted = !state.isMuted;
  });
}
