items["owl"] = {
  name: "owl",
  preload: function(phaser) {
    phaser.load.image('owl', 'img/owl_bod.png');
    phaser.load.image('owl.head', 'img/owl_head.png');
    phaser.load.image('owl.wing', 'img/owl_wing.png');
    phaser.load.image('owl.wig', 'img/owl_head_wig.png');
  },
  init: function(phaser) {
    this.startX = 2700;
    this.startY = 270;
    this.sprite = phaser.add.sprite(this.startX, this.startY, 'owl');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 90;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-300,-150,600,500);

    this.headSprite = phaser.add.sprite(this.startX, this.startY-20, 'owl.head');
    this.headSprite.anchor.setTo(0.5, 0.5);
    this.headSprite.z = 91;
    this.headSprite.scale = new PIXI.Point(4, 4);
    this.flying = false;
  },
  update: function() {

    game.followTrain(this.sprite);

    if (this.flying) {
      this.headSprite.x = this.sprite.x;
      this.headSprite.y = this.sprite.y - 20;
    } else {
      var headTargetX = this.sprite.x + 4;
      var headTargetY = this.sprite.y - 30;
      this.headSprite.x += (headTargetX - this.headSprite.x) / 50.0;
      this.headSprite.y += (headTargetY - this.headSprite.y) / 50.0;
    }

    // var dx = headTargetX - this.headSprite.x;
    // var dy = headTargetY - this.headSprite.y;
    // var distance = Math.sqrt(dx * dx + dy * dy);

    // var maxD = 30;

    // if(distance > maxD) {
    //   var theta = Math.atan2(dx, dy);
    //   this.headSprite.x = headTargetX + maxD * Math.cos(theta);
    //   this.headSprite.y = headTargetY + maxD * Math.sin(theta);
    // }


  },
  flyToWig: function() {
    game.sounds.owl.squawk.play();
    game.monkey.canMove = false;
    items.wig.interactRect = null;
    items.wig.collisionRect = null;
    items.owl.interactRect = null;
    items.owl.collisionRect = null;
    items.owl.flying = true;
    var tween = phaser.add.tween(items.owl.sprite);
    tween.onComplete.add(function(){
      game.discardItem();
      items.wig.sprite.visible = false;
      game.monkey.headSprite.setTexture( PIXI.TextureCache['monkey.head'] );
      items.owl.headSprite.setTexture( PIXI.TextureCache['owl.wig'] );
      items.owl.flyToNest();
    }, tween);
    tween.to({ x: game.monkey.headSprite.x, y: game.monkey.headSprite.y}, 500, Phaser.Easing.Linear.None, true);
  },
  flyToNest: function() {
    items.owl.flying = true;
    var tween = phaser.add.tween(items.owl.sprite);
    tween.onComplete.add(function(){
      game.monkey.canMove = true;
      game.dropItem(items.quarter);
      items.owl.flying = false;
    }, tween);
    tween.to({ x: this.startX, y: this.startY}, 500, Phaser.Easing.Linear.None, true);
  }
};

game.interactions["empty"]["owl"] = function(){ console.log("don't mess with the owl"); };

game.collisionHandlers["owl"] = function() {
  if (game.currentItem == items.wig) {

    // var fishbowlDoneSprite = phaser.add.sprite(items.fishTable.sprite.x, items.fishTable.sprite.y, 'fishbowl');
    // fishbowlDoneSprite.anchor.setTo(0.5, 0.5);
    // fishbowlDoneSprite.z = 94;
    // fishbowlDoneSprite.scale = new PIXI.Point(4, 4);

    // items.fishbowl.sprite.y = 10000;
    items.owl.flyToWig();
  }
};

