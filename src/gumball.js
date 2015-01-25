items["gumball"] = {
  name: "gumball",
  preload: function(phaser) {
    phaser.load.image('gumball', 'img/gumball.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(600, 350, 'gumball');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["gumball"] = function(){ game.acquireItem("gumball"); };

game.interactions["gumball"] = {};
game.interactions["gumball"]["empty"] = function(){ game.dropItem(); };
game.interactions["gumball"]["gumballMachine"] = function(){ console.log("there's no putting the genie back in the bottle"); };
