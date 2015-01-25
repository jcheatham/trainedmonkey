items["portal1"] = {
  name: "portal1",
  preload: function(phaser) {
    //phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
    //this.collisionRect = new Phaser.Rectangle(640, 300, 20, 30);
  }
};

game.collisionHandlers["portal1"] = function() {
  console.log("COLLIDE");
};

