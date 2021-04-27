import BootScene from '../src/Scenes/BootScene';
import 'jest-expect-subclass';

test('Bootscene should be a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});