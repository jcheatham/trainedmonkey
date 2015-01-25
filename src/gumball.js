items["gumball"] = {
  name: "gumball",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["gumball"] = function(){ game.acquireItem(item); };

