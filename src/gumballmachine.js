items["gumballMachine"] = {
  name: "gumballMachine",
  preload: function(phaser) {
    phaser.load.image('gumballMachine', 'img/gumball_stand_alone.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(3695, 265, 'gumballMachine');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 90;
    this.sprite.scale = new PIXI.Point(1, 1);
    this.interactRect = new Phaser.Rectangle(-45,-20,90,160);
  },
  purchase: function() {
    game.sounds.gumball.marble.play();
    this.interactRect = null;
    this.collisionRect = null;
    items.gumball.sprite.visible = true;
    items.gumball.falling = true;
    items.gumball.velocityY = 0.0;
    items.gumball.attachedToTrain = false;
  }
};

//game.interactions["empty"]["gumballMachine"] = function(){ };

