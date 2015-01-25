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
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);

    this.headSprite = phaser.add.sprite(2700, 250, 'owl.head');
    this.headSprite.anchor.setTo(0.5, 0.5);
    this.headSprite.z = 91;
    this.headSprite.scale = new PIXI.Point(4, 4);
  },
  update: function() {

    this.sprite.x += game.trainMotionOffsetX;
    this.sprite.y += game.trainMotionOffsetY;

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


  }

};

game.interactions["empty"]["owl"] = function(){
  console.log("interact empty owl");
};

