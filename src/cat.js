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
    this.sprite.z = 93;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-50,-50,100,200);

    this.headSprite = phaser.add.sprite(700, 250, 'cat.head');
    this.headSprite.anchor.setTo(0.5, 0.5);
    this.headSprite.z = 95;
    this.headSprite.scale = new PIXI.Point(4, 4);

    this.tailSprite = phaser.add.sprite(730, 280, 'cat.tail');
    this.tailSprite.anchor.setTo(0.1, 0.7);
    this.tailSprite.z = 89;
    this.tailSprite.scale = new PIXI.Point(4, 4);

  },
  update: function() {

    this.tailSprite.rotation = 0.5 * Math.sin(5 * phaser.time.totalElapsedSeconds())

    game.followTrain(this.sprite);
    game.followTrain(this.tailSprite);

    var headTargetX = this.sprite.x + 0;
    var headTargetY = this.sprite.y - 30;

    this.headSprite.x += (headTargetX - this.headSprite.x) / 10.0;
    this.headSprite.y += (headTargetY - this.headSprite.y) / 50.0;



  }
};

//game.interactions["empty"]["cat"] = function(){ };
