import Phaser from 'phaser';
import GameScene from '../src/Scenes/PlayGame';
import gameOptions from '../src/Objects/gameOptions';
import 'jest-expect-subclass';

test('GameScene should be a subclass of Phaser.Scene', () => {
  expect(GameScene).toBeSubclassOf(Phaser.Scene);
});

describe('Game Options', () => {
  test('it should return playerGravity is 3800', () => {
    expect(gameOptions.playerGravity).toEqual(3800);
  });

  test('it should return jumpForce is 1500', () => {
    expect(gameOptions.jumpForce).toEqual(1500);
  });

  test('it should return playerStartPosition is 250', () => {
    expect(gameOptions.playerStartPosition).toEqual(250);
  });
});