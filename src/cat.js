items["cat"] = {
  name: "cat",
  preload: function(phaser) {
    phaser.load.image('cat', 'img/cat_bod.png');
    phaser.load.image('cat.head', 'img/cat_head.png');
    phaser.load.image('cat.tail', 'img/cat_tail.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(700, 300, 'cat');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["cat"] = function(){
  console.log("interact empty cat");
};
