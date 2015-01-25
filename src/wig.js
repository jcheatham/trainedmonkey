items["wig"] = {
  name: "wig",
  preload: function(phaser) {
    phaser.load.image('wig', 'img/wig.png');
    phaser.load.image('monkey.wig', 'img/monkey_head_wig.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(4900, 200, 'wig');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
    this.floored = false;
  },
  fall: function() {
    if (this.floored) { return; }
    this.floored = true;
    var tween = phaser.add.tween(items.wig.sprite);
    tween.to({y: game.monkey.groundHeight}, 500, Phaser.Easing.Linear.None, true, 500, 0, false);
  }
};

game.interactions["empty"]["wig"] = function(){
  game.acquireItem("wig");
  items.wig.sprite.visible = false;
  game.monkey.headSprite.setTexture( PIXI.TextureCache['monkey.wig'] );
};

game.interactions["wig"]["activationLever"] = function() {
  items.activationLever.activate();
};
