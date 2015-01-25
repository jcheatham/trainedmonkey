items["cat"] = {
  name: "cat",
  active: true,
  preload: function(phaser) {
    phaser.load.image('cat', 'img/cat_bod.png');
    phaser.load.image('cat.head', 'img/cat_head.png');
    phaser.load.image('cat.tail', 'img/cat_tail.png');
  },
  init: function(phaser) {




    var posX = 150;
    var posY = 110;

    this.sprite = phaser.add.sprite(posX, posY, 'cat');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 93;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-50,-50,100,200);

    this.headSprite = phaser.add.sprite(posX, posY - 50, 'cat.head');
    this.headSprite.anchor.setTo(0.5, 0.5);
    this.headSprite.z = 95;
    this.headSprite.scale = new PIXI.Point(4, 4);

    this.tailSprite = phaser.add.sprite(posX + 25, posY - 20, 'cat.tail');
    this.tailSprite.anchor.setTo(0.1, 0.7);
    this.tailSprite.z = 89;
    this.tailSprite.scale = new PIXI.Point(4, 4);

  },
  update: function() {

    this.tailSprite.rotation = 0.5 * Math.sin(5 * phaser.time.totalElapsedSeconds())

    game.followTrain(this.sprite);
    game.followTrain(this.tailSprite);

    if(this.active) {

      var headTargetX = this.sprite.x + 0;
      var headTargetY = this.sprite.y - 30;

      this.headSprite.x += (headTargetX - this.headSprite.x) / 10.0;
      this.headSprite.y += (headTargetY - this.headSprite.y) / 50.0;

    } else {

      this.headSprite.x = this.sprite.x + 0;
      this.headSprite.y = this.sprite.y - 30;

      this.tailSprite.x = this.sprite.x + 25;
      this.tailSprite.y = this.sprite.y - 20;

    }

  },
  jumpDown: function() {
    this.active = false;
    this.interactRect = null;
    this.collisionRect = null;

    game.dropItem(items.key);

    game.monkey.canMove = false;

    var catTweenX = phaser.add.tween(items.cat.sprite);
    catTweenX.onComplete.add(function(){
      game.monkey.canMove = true;
      items.fishbowl.fishSprite.visible = false;
    }, catTweenX);
    catTweenX.to({ x: 490}, 1000, Phaser.Easing.Linear.None, true);

    var catTweenY = phaser.add.tween(items.cat.sprite);
    catTweenY.to({ y: 235}, 1000, function(k) {
      return k * k * k * k;

    }, true);

    // game.dropItem(items.cat);


  }
};

//game.interactions["empty"]["cat"] = function(){ };
