items["steamValve"] = {
  name: "steamValve",
  preload: function(phaser) {
    phaser.load.image('steam', 'img/steam.png');
  },
  init: function(phaser) {
    var e = phaser.add.emitter(4900, -10);
    e.z = 100;
    e.width = 50;
    e.makeParticles('steam');
    e.minParticleSpeed.set(0, 400);
    e.maxParticleSpeed.set(0, 500);
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
  steam: function(on) {
    this.emitter.on = on;
  }
};

//game.interactions["empty"]["steamValve"] = function(){ };

