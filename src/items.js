function unsupportedInteraction(item) {
  console.log("unsupportedInteraction "+item);
}

var items = {

  empty: {
    interactions: {
      key: game.acquireItem,
      default: unsupportedInteraction,
    }
  },

  key: {
    preload: function(phaser) {
      phaser.load.image('key', 'img/key.png');
    },

    init: function(phaser) {
      //this.sprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'key');
      this.sprite = phaser.add.sprite(600, 300, 'key');
      this.sprite.z = -10;
    },

    interactions: {

      gum: function(item) {
        console.log("you made a cast of the key");
        game.dropItem("key");
        game.removeItem("gum");
        game.acquireItem("keycast");
      },

      default: function(item) {
        console.log("unsupported key interaction");
        unsupportedInteraction();
      },
    },
  },
};
