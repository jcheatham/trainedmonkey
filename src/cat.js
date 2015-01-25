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
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  },
  // update: function() {

  //   this.sprite.x += game.trainMotionOffsetX;
  //   this.sprite.y += game.trainMotionOffsetY;

  //   var headTargetX = this.sprite.x + 8;
  //   var headTargetY = this.sprite.y - 30;

  //   this.headSprite.x += (headTargetX - this.headSprite.x) / 50.0;
  //   this.headSprite.y += (headTargetY - this.headSprite.y) / 50.0;
  // }
};

game.interactions["empty"]["cat"] = function(){
  console.log("interact empty cat");
};
