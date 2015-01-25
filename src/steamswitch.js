items["steamSwitch"] = {
  name: "steamSwitch",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["steamSwitch"] = function(){
  console.log("interact empty steamSwitch");
};

