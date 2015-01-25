items["wig"] = {
  name: "wig",
  preload: function(phaser) {
    phaser.load.image('wig', 'img/wig.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(750, 350, 'wig');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["wig"] = function(){ game.acquireItem("wig"); };

game.interactions["wig"] = {};
game.interactions["wig"]["empty"] = function(){ game.dropItem(); };
