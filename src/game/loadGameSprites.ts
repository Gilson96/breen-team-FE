import type { KaboomCtx } from 'kaboom';

export function loadSprites(k: KaboomCtx) {
  k.loadFont('font', './PixelifySans.ttf');

  k.loadSprite('floorSprite', './floor.png');
  k.loadSprite('background', './background.png');
  k.loadSprite('cage', './cage.png');
  k.loadSprite('bigRockObstacle', './bigRock.png');
  k.loadSprite('smallRockObstacle', './smallRock.png');
  k.loadSprite('stalactiteObstacle', './stalactite.png');
  k.loadSprite('mainMenuImage', './mainMenuImage.png');
  k.loadSprite('buttonImage', './buttonImage.png');
  k.loadSprite('labelImage', './labelImage.png');
  k.loadSprite('gameOverImage', './gameOverImage.png');
  k.loadSprite('column', './column.png');
  k.loadSprite('gate', './gate.png');
  k.loadSprite('barricade', './barricade.png');
  k.loadSprite('middlegroundsStalactite', './middlegroundsStalactite.png');
  k.loadSprite('pendulumBlade', './pendulumBlade.png');

  k.loadSprite('torch', './torch.png', {
    sliceX: 4,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 3,
        speed: 4,
        loop: true
      }
    }
  });

  k.loadSprite('player', './orc.png', {
    sliceX: 4,
    sliceY: 2,
    anims: {
      run: {
        from: 0,
        to: 3,
        speed: 10,
        loop: true
      },
      jump:{
        from: 4,
        to:4
      },
      slide:{
        from: 5,
        to:5
      }
    }
  });

  k.loadSprite('knife', './knives.png', {
    sliceX: 2,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 1,
        speed: 4,
        loop: true
      }
    }
  });
}
