items["wrench"] = {
  name: "wrench",
  preload: function(phaser) {
    phaser.load.image('wrench', 'img/wrench.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(1920, 330, 'wrench');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-20,-40,40,80);
  }
};

game.interactions["empty"]["wrench"] = function(){ game.acquireItem("wrench"); };

game.interactions["wrench"] = {};
game.interactions["wrench"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };
game.interactions["wrench"]["key"] = function(){ game.acquireItem("key"); };
game.interactions["wrench"]["wig"] = function(){ game.acquireItem("wig"); };
game.interactions["wrench"]["quarter"] = function(){ game.acquireItem("quarter"); };

game.interactions["wrench"]["steamSwitch"] = function(){
  items.steamSwitch.turn();
  game.discardItem();
  items.wrench.sprite.y = 10000;
};

game.interactions["wrench"]["activationLever"] = function() {
  items.activationLever.activate();
};

