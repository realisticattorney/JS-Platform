import Phaser from 'phaser';
import Button from '../Objects/Button';
import asyncWeather from './get'

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  
  create() {
    

    const promise = asyncWeather();
    promise.then((result) => {
      result.data.result.sort(function(a, b) {
        return parseFloat(b.score) - parseFloat(a.score);
    });
      let i = 150
      let topTen = [...result.data.result].slice(0,10)
      topTen.forEach(scorePair => {
        this.scoreText = this.add.text(550, i, `Name: ${scorePair.user} Score: ${scorePair.score}`, { fontSize: '16px', fill: '#fff' });
        i +=30
        // const div = document.createElement('div')
        // div.innerText = `Name: ${scorePair.user} Score: ${scorePair.score}`
        // document.body.appendChild(div)
        })
      // console.log([...result.data.result])
      })

      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');

       
}
}