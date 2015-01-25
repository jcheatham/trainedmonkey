items["wrench"] = {
  name: "wrench",
  preload: function(phaser) {
    phaser.load.image('wrench', 'img/wrench.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(1880, 350, 'wrench');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-20,-40,40,80);
  }
};

game.interactions["empty"]["wrench"] = function(){ game.acquireItem("wrench"); };

game.interactions["wrench"] = {};
game.interactions["wrench"]["empty"] = function(){ game.dropItem(); };
