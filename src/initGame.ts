import initKaplay from './kaplayCtx';

export default function initGame(): void {
  const k = initKaplay();

  k.setBackground(100, 10, 102);
}

initGame();
