import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  
  create() {
    
    this.add.text(280, 100, "Instructions", {
      color: '#5d1512', fontFamily: 'Arial', fontSize: '32px ', fontWeight: '900',
    });
    
    this.add.text(280, 250, "Collect all the coins you can to improve your score. Avoid fall out the the platforms anf getting burned.", {
      color: '#5d1512', fontFamily: 'Arial', fontSize: '16px ', fontWeight: '900',
    });

      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');

       
}
}