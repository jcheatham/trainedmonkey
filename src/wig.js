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

game.interactions["wig"] = {};
game.interactions["wig"]["empty"] = function(){ game.discardItem(); };
game.interactions["wig"]["wrench"] = function(){ game.acquireItem("wrench"); };
game.interactions["wig"]["fishbowl"] = function(){ game.acquireItem("fishbowl"); };
game.interactions["wig"]["key"] = function(){ game.acquireItem("key"); };
game.interactions["wig"]["quarter"] = function(){ game.acquireItem("quarter"); };


game.interactions["wig"]["owl"] = function() {
  game.discardItem();
  
  items.wig.sprite.visible = true;
  game.monkey.headSprite.setTexture( PIXI.TextureCache['monkey.head'] );

  
  // var fishbowlDoneSprite = phaser.add.sprite(items.fishTable.sprite.x, items.fishTable.sprite.y, 'fishbowl');
  // fishbowlDoneSprite.anchor.setTo(0.5, 0.5);
  // fishbowlDoneSprite.z = 94;
  // fishbowlDoneSprite.scale = new PIXI.Point(4, 4);

  // items.fishbowl.sprite.y = 10000;
  items.owl.flyAway();
};
