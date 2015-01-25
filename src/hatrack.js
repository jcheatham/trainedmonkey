items["hatrack"] = {
  name: "hatrack",
  preload: function(phaser) {
    phaser.load.image('hatrack', 'img/wigrack.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(4900, 380, 'hatrack');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.pivot.y = 20;
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(6, 6);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
    this.prone = false;
  },
  jostle: function() {
    if (this.prone) { return; }
    this.prone = true;
    var rackTween = phaser.add.tween(items.hatrack.sprite);
    rackTween.to({rotation: Math.PI*0.5}, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
    this.interactRect = null;
    this.collisionRect = null;
    items.wig.fall();
  }
};

//game.interactions["empty"]["hatrack"] = function(){ };
