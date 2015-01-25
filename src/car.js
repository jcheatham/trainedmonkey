  var Car = function(background, foreground, x, y) {
    this.backgroundSprite = phaser.add.sprite(x, y, background);
    this.backgroundSprite.anchor.setTo(0.5, 0.5);
    this.backgroundSprite.z = 80;

    this.foregroundSprite = phaser.add.sprite(x, y, foreground);
    this.foregroundSprite.anchor.setTo(0.5, 0.5);
    this.foregroundSprite.z = 110;
  };

Car.prototype.loadAssets = function() {
  phaser.load.image('train.engine.background', 'img/game_rdy_PNGs/engine_room.png');
  phaser.load.image('train.engine.foreground', 'img/game_rdy_PNGs/foreground_layer.png');
};

Car.prototype.cars = [];

Car.prototype.add = function(car){
  this.cars.push(car);
  return this;
};