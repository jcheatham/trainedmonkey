items["birdNest"] = {
  name: "birdNest",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["birdNest"] = function(){
  console.log("interact empty birdNest");
};

