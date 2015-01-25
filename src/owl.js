items["owl"] = {
  name: "owl",
  preload: function(phaser) {
    phaser.load.image('owl', 'img/owl_bod.png');
    phaser.load.image('owl.head', 'img/owl_head.png');
    phaser.load.image('owl.wing', 'img/owl_wing.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(2700, 270, 'owl');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 90;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-300,-150,600,500);

    this.headSprite = phaser.add.sprite(2700, 250, 'owl.head');
    this.headSprite.anchor.setTo(0.5, 0.5);
    this.headSprite.z = 91;
    this.headSprite.scale = new PIXI.Point(4, 4);
  },
  update: function() {

    game.followTrain(this.sprite);

    var headTargetX = this.sprite.x + 4;
    var headTargetY = this.sprite.y - 30;

    this.headSprite.x += (headTargetX - this.headSprite.x) / 50.0;
    this.headSprite.y += (headTargetY - this.headSprite.y) / 50.0;

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
  flyAway: function() {
    game.dropItem(items.quarter);

    game.monkey.canMove = false;

    var owlTweenX = phaser.add.tween(items.owl.sprite);
    owlTweenX.onComplete.add(function(){
      game.monkey.canMove = true;
    }, owlTweenX);
    owlTweenX.to({ x: 600}, 1500, Phaser.Easing.Linear.None, true);

    var owlTweenY = phaser.add.tween(items.cat.sprite);
    owlTweenY.to({ y: -500}, 1500, function(k) {
      return k * k * k * k;
    }, true); 

    // game.dropItem(items.cat);
    

  }

};

// game.interactions["empty"]["owl"] = function(){ };

game.collisionHandlers["owl"] = function() {
  if (game.currentItem == items.wig) {
    console.log("BERSERKER BARRAGE");
  }
};

