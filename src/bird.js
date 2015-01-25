items["bird"] = {
  name: "bird",
  preload: function(phaser) {
    phaser.load.image('owl', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["bird"] = function(){
  console.log("interact empty bird");
};

