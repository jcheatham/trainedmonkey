items["fishbowl"] = {
  name: "fishbowl",
  preload: function(phaser) {
    phaser.load.image('fishbowl', 'img/fish_bowl.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(1400, 250, 'fishbowl');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };

game.interactions["fishbowl"] = {};
game.interactions["fishbowl"]["empty"] = function(){ game.dropItem(); };

