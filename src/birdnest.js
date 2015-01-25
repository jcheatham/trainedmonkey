items["birdNest"] = {
  name: "birdNest",
  preload: function(phaser) {
    phaser.load.image('birdNest', 'img/owl_nest.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(2720, 310, 'birdNest');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 85;
    this.sprite.scale = new PIXI.Point(4, 4);
  }
};

game.interactions["empty"]["birdNest"] = function(){
  console.log("interact empty birdNest");
};

