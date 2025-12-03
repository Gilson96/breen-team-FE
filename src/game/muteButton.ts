import type { KaboomCtx, AudioPlay } from 'kaboom';

export function muteButton(
  k: KaboomCtx,
  audio: Record<string, AudioPlay>,
  state: { isMuted: boolean }
) {
  k.onKeyPress('m', () => {
    for (const sound of Object.values(audio)) {
      sound.paused = !sound.paused;
    }
    state.isMuted = !state.isMuted;
  });
}
