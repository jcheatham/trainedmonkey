items["fishbowl"] = {
  name: "fishbowl",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["fishbowl"] = function(){
  console.log("interact empty fishbowl");
};


