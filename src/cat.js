items["cat"] = {
  name: "cat",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["cat"] = function(){
  console.log("interact empty cat");
};

