var Car = function() {
  this.backgroundSprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'train.engine.background');
  this.backgroundSprite.anchor.setTo(0.5, 0.5);
  this.backgroundSprite.z = 80;

  this.foregroundSprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'train.engine.foreground');
  this.foregroundSprite.anchor.setTo(0.5, 0.5);
  this.foregroundSprite.z = 110;
}


Car.prototype.loadAssets = function() {
  phaser.load.image('train.engine.background', 'img/game_rdy_PNGs/engine_room.png');
  phaser.load.image('train.engine.foreground', 'img/game_rdy_PNGs/foreground_layer.png');
}

