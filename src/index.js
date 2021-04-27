import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import playGame from './Scenes/PlayGame';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import InputScene from './Scenes/InputScene';
import ScoreScene from './Scenes/ScoreBoard';
import InstructionsScene from './Scenes/InstructionsScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Input', InputScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('PlayGame', playGame);
    this.scene.add('Score', ScoreScene);
    this.scene.add('Instructions', InstructionsScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
