const gameOptions = {

    // platform speed range, in pixels per second
    platformSpeedRange: [600, 600],

    // mountain speed, in pixels per second
    mountainSpeed: 40,

    // spawn range, how far should be the rightmost platform from the right edge
    // before next platform spawns, in pixels
    spawnRange: [50, 500],

    // platform width range, in pixels
    platformSizeRange: [300, 900],

    // a height range between rightmost platform and next platform to be spawned
    platformHeightRange: [-5, 5],

    // a scale to be multiplied by platformHeightRange
    platformHeighScale: 600,

    // platform max and min height, as screen height ratio
    platformVerticalLimit: [0.4, 0.8],

    // player gravity
    playerGravity: 3800,

    // player jump force
    jumpForce: 1500,

    // player starting X position
    playerStartPosition: 250,

    // consecutive jumps allowed
    jumps: 2,

    // % of probability a coin appears on the platform
    coinPercent: 60,

    // % of probability a fire appears on the platform
    firePercent: 95
}
export default gameOptions;