items["birdNest"] = {
  name: "birdNest",
  preload: function(phaser) {
    phaser.load.image('birdNest', 'img/owl_nest.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(400, 350, 'birdNest');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["birdNest"] = function(){
  console.log("interact empty birdNest");
};

