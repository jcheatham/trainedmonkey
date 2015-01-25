items["boiler"] = {
  name: "boiler",
  preload: function(phaser) {
    phaser.load.image('gumsplat', 'img/bubblegum_splat.png');
  },
  init: function(phaser) {
    this.sprite = new PIXI.Point(6170, 325);
    this.interactRect = new Phaser.Rectangle(-50,-200,300,400);
    this.boiled = false;
    this.gumSplat = null;
    this.nop = 0;

    var e = phaser.add.emitter(this.sprite.x-10, this.sprite.y-30);
    e.z = 100;
    e.width = 30;
    e.makeParticles('steam');
    e.minParticleSpeed.set(0, -400);
    e.maxParticleSpeed.set(0, -500);
    e.setRotation(-60, 60);
    //e.setAlpha(0, 1, 0.5);
    e.setScale(0.2, 0.2, 0.5, 0.5);
    //e.gravity = 1000;
    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    e.start(false, 400, 20);
    e.on = false;
    this.emitter = e;

  },
  update: function() {
    if (!this.gumSplat) { return; }
    this.gumSplat.x += game.trainMotionOffsetX;
    this.gumSplat.y += game.trainMotionOffsetY;
  },
  boil: function() {
    if (this.boiled) { return; }
    this.boiled = true;

    if (this.gumSplat) {

      var tween = phaser.add.tween(items.boiler.sprite);
      tween.onComplete.add(function(){
        game.win();
      }, tween);
      tween.to({z: 101}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);

    } else {

      this.emitter.on = true;
      var tween = phaser.add.tween(items.boiler.sprite);
      tween.onComplete.add(function(){
        game.lose();
      }, tween);
      tween.to({z: 101}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);

    }
  },
  seal: function() {
    this.gumSplat = phaser.add.sprite(this.sprite.x, this.sprite.y, 'gumsplat');
    this.gumSplat.anchor.setTo(0.5, 0.5);
    this.gumSplat.z = 100;
  },
};
