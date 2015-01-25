items["quarter"] = {
  name: "quarter",
  preload: function(phaser) {
    phaser.load.image('quarter', 'img/quarter.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(800, 350, 'quarter');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["quarter"] = function(){ game.acquireItem("quarter"); };

game.interactions["quarter"] = {};
game.interactions["quarter"]["empty"] = function(){ game.dropItem(); };
