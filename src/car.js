var Car = function(background, foreground, x, y) {
  this.backgroundSprite = phaser.add.sprite(x, y, background);
  this.backgroundSprite.anchor.setTo(0.5, 0.5);
  this.backgroundSprite.z = 80;

  this.targetX = phaser.world.centerX;
  this.targetY = phaser.world.centerY;

  this.x = this.targetX;
  this.y = this.targetY;

  this.foregroundSprite = phaser.add.sprite(x, y, foreground);
  this.foregroundSprite.anchor.setTo(0.5, 0.5);
  this.foregroundSprite.z = 110;
};

Car.prototype.update = function(game) {

  this.backgroundSprite.x += game.trainMotionOffsetX;
  this.backgroundSprite.y += game.trainMotionOffsetY;

  this.foregroundSprite.x += 2.0 * game.trainMotionOffsetX;
  this.foregroundSprite.y += 1.0 * game.trainMotionOffsetY;

}

Car.prototype.loadAssets = function() {
  phaser.load.image('train.engine.background', 'img/engine_room.png');
  phaser.load.image('train.engine.foreground', 'img/foreground_layer.png');
  phaser.load.image('train.steam.background', 'img/steam_switch_room_bg.png');
  phaser.load.image('train.steam.foreground', 'img/steam_switch_room_foreground.png');
  phaser.load.image('train.gumball.background', 'img/gumball_room_bg.png');
  phaser.load.image('train.gumball.foreground', 'img/gumball_room_foreground.png');
  phaser.load.image('train.owl.background', 'img/owl_room_bg.png');
  phaser.load.image('train.owl.foreground', 'img/owl_room_foreground.png');

  phaser.load.image('train.gumball-temp.background', 'img/gumball_room_bg.png');
  phaser.load.image('train.gumball-temp.foreground', 'img/gumball_room_foreground.png');

  phaser.load.image('train.owl-temp.background', 'img/owl_room_bg.png');
  phaser.load.image('train.owl-temp.foreground', 'img/owl_room_foreground.png');

  phaser.load.image('train.fishbowl.background', 'img/fishbowl_room_bg.png');
  phaser.load.image('train.fishbowl.foreground', 'img/fishbowl_room_foreground.png');
};


