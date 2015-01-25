items["wig"] = {
  name: "wig",
  preload: function(phaser) {
    phaser.load.image('wig', 'img/wig.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(4900, 200, 'wig');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
    this.floored = false;
  },
  fall: function() {
    if (this.floored) { return; }
    this.floored = true;
    var tween = phaser.add.tween(items.wig.sprite);
    tween.to({y: game.monkey.groundHeight}, 500, Phaser.Easing.Linear.None, true, 500, 0, false);
  }
};

game.interactions["empty"]["wig"] = function(){ game.acquireItem("wig"); };

game.interactions["wig"] = {};
game.interactions["wig"]["empty"] = function(){ game.dropItem(); };
game.interactions["wig"]["wrench"] = function(){ game.acquireItem("wrench"); };
game.interactions["wig"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };
game.interactions["wig"]["key"] = function(){ game.acquireItem("key"); };
game.interactions["wig"]["quarter"] = function(){ game.acquireItem("quarter"); };

