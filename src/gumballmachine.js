items["gumballMachine"] = {
  name: "gumballMachine",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["gumballMachine"] = function(){
  console.log("interact empty gumballMachine");
};

