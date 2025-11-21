import kaplay from 'kaplay';

export default function initKaplay() {
  return kaplay({
    width: 1282,
    height: 720,
    letterbox: true,
    global: false,
    debug: true, // TODO: put back to false in prod
    debugKey: 'f1',
    canvas: document.getElementById('game') as HTMLCanvasElement,
    pixelDensity: devicePixelRatio,
    crisp: true,
    maxFPS: 60
  });
}
