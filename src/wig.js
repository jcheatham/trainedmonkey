items["wig"] = {
  name: "wig",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["wig"] = function(){
  console.log("interact empty wig");
};

