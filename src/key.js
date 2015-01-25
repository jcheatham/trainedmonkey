items["key"] = {
  name: "key",
  preload: function(phaser) {
    phaser.load.image('key', 'img/key.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(150, 150, 'key');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(2, 2);
    this.interactRect = new Phaser.Rectangle(-30,-20,60,40);
  },
};

game.interactions["empty"]["key"] = function(){ game.acquireItem("key"); };

game.interactions["key"] = {};
game.interactions["key"]["empty"] = function(){ game.discardItem(); };
game.interactions["key"]["wrench"] = function(){ game.acquireItem("wrench"); };
game.interactions["key"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };
game.interactions["key"]["wig"] = function(){ game.acquireItem("wig"); };
game.interactions["key"]["quarter"] = function(){ game.acquireItem("quarter"); };

game.interactions["key"]["door"] = function() {
  items.door.closed = false;
  items.door.sprite.visible = false;
  game.discardItem();
  items.key.sprite.y = 10000;
};

