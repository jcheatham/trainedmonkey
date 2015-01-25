items["quarter"] = {
  name: "quarter",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["quarter"] = function(){
  console.log("interact empty quarter");
};

