items["quarter"] = {
  name: "quarter",
  preload: function(phaser) {
    phaser.load.image('quarter', 'img/quarter.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(2700, 250, 'quarter');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 89;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-30,-30,60,60);
  }
};

game.interactions["empty"]["quarter"] = function(){ game.acquireItem("quarter"); };

game.interactions["quarter"] = {};
game.interactions["quarter"]["wrench"] = function(){ game.acquireItem("wrench"); };
game.interactions["quarter"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };
game.interactions["quarter"]["key"] = function(){ game.acquireItem("key"); };
game.interactions["quarter"]["wig"] = function(){ game.acquireItem("wig"); };

game.interactions["quarter"]["gumballMachine"] = function(){
  game.discardItem();
  items.quarter.sprite.y = 10000;
  items.gumballMachine.purchase();
};
