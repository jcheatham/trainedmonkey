items["wrench"] = {
  name: "wrench",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["wrench"] = function(){
  console.log("interact empty wrench");
};

