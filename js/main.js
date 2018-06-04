// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {

};

// load assets
gameScene.preload = function(){

  // load images
  this.load.image('block', 'assets/images/block.png');

};

// executed once, after assets were loaded
gameScene.create = function() {

  let blocks = this.physics.add.group();

  blocks.create(100, 100, 'block').setScale(2).refreshBody();

  // this works fine without the need of calling refreshBody():
  //let block = this.physics.add.sprite(100, 200, 'block').setScale(2);
};


// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  scene: gameScene,
  title: 'Monster Kong',
  pixelArt: true,
  physics: {
    default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: true
        }
  }
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);
