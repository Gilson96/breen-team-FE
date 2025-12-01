import type { RefObject } from 'react';
import kaboom from 'kaboom';
// import kaplay from 'kaplay';

export default function initKaboom(gameRef: RefObject<HTMLCanvasElement>) {
  return kaboom({
    width: 1282,
    height: 720,
    letterbox: true,
    global: false,
    debug: true, // TODO: put back to false
    // de: 'f1',
    canvas: gameRef.current,
    pixelDensity: devicePixelRatio,
    crisp: true,
    maxFPS: 60,
    backgroundAudio: true
  });
}
