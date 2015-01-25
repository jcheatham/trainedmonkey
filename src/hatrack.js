items["hatrack"] = {
  name: "hatrack",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["hatrack"] = function(){
  console.log("interact empty hatrack");
};

