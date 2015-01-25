items["fishbowl"] = {
  name: "fishbowl",
  preload: function(phaser) {
    phaser.load.image('fishbowl', 'img/fish_bowl.png');
    phaser.load.image('fish', 'img/fish_fish.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(1450, 275, 'fishbowl');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 94;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-50,-40,100,200);

    this.fishSprite = phaser.add.sprite(1400, 250, 'fish');
    this.fishSprite.anchor.setTo(0.5, 0.5);
    this.fishSprite.z = 95;
    this.fishSprite.scale = new PIXI.Point(4, 4);
  },
  update: function(phaser) {
    this.fishSprite.rotation = 0.5 * Math.sin(5 * phaser.time.totalElapsedSeconds());
    var d = new Phaser.Point(this.fishSprite.x - this.sprite.x, this.fishSprite.y - this.sprite.y);
    if (d.getMagnitude() > 20.0) {
      d.normalize().multiply(20.0, 20.0);
    }
    this.fishSprite.x = this.sprite.x + d.x;
    this.fishSprite.y = this.sprite.y + d.y;
  }
};

game.interactions["empty"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };

game.interactions["fishbowl"] = {};
game.interactions["fishbowl"]["wrench"] = function(){ game.acquireItem("wrench"); };
game.interactions["fishbowl"]["key"] = function(){ game.acquireItem("key"); };
game.interactions["fishbowl"]["wig"] = function(){ game.acquireItem("wig"); };
game.interactions["fishbowl"]["quarter"] = function(){ game.acquireItem("quarter"); };


game.interactions["fishbowl"]["cage"] = function() {
  game.discardItem();

  items.fishbowl.falling = false;
  items.fishbowl.attachedToTrain = true;
  items.fishbowl.interactRect = null;
  items.fishbowl.collisionRect = null;

  var tween = phaser.add.tween(items.fishbowl.sprite);
  tween.onComplete.add(function(){
    items.cat.jumpDown();
  }, tween);
  tween.to({x: 465, y: 270}, 100, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);

  // var fishbowlDoneSprite = phaser.add.sprite(items.fishTable.sprite.x, items.fishTable.sprite.y, 'fishbowl');
  // fishbowlDoneSprite.anchor.setTo(0.5, 0.5);
  // fishbowlDoneSprite.z = 94;
  // fishbowlDoneSprite.scale = new PIXI.Point(4, 4);

  // items.fishbowl.sprite.y = 10000;
  items.cat.jumpDown();
};

game.interactions["fishbowl"]["activationLever"] = function() {
  items.activationLever.activate();
};

