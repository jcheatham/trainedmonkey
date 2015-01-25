items["steamValve"] = {
  name: "steamValve",
  preload: function(phaser) {
    phaser.load.image('steam', 'img/steam.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(4580, 290, 'steam');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["steamValve"] = function(){
  console.log("interact empty steamValve");
};

