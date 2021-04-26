import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class InputScene extends Phaser.Scene {
  constructor () {
    super('Input');
  }

  create () {
    const element = document.getElementById('form');
    element.style.display = 'flex';
    element.style.position = 'absolute';
    element.style.top = '200px';
    element.style.left = '300px';
    element.addEventListener('click', (event) => {
      if (event.target.name === 'Enter') {
        const user = document.getElementById('fname');
        if (user.value !== '') {
          element.style.display = 'none';
          this.scene.start('Title');
        }}})
  }
}