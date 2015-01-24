var items = {
  key: {
    preload: function(phaser){
      phaser.load.image('key', 'img/key.png');
    },
    init: function(phaser) {
      //this.sprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'key');
      this.sprite = phaser.add.sprite(600, 300, 'key');
      this.sprite.z = -10;
    },
    interactions: {
      gum: {}
    },
  }
};
