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
      let i = 0
      result.data.result.forEach(scorePair => {
        this.scoreText = this.add.text(600, i, `Name: ${scorePair.user} Score: ${scorePair.score}`, { fontSize: '16px', fill: '#fff' });
        i +=30
        // const div = document.createElement('div')
        // div.innerText = `Name: ${scorePair.user} Score: ${scorePair.score}`
        // document.body.appendChild(div)
        })
      // console.log([...result.data.result])
      })
  
}
}