items["cage"] = {
  name: "cage",

  preload: function(phaser) {
    phaser.load.image('cage', 'img/cage.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(500, 370, 'cage');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 94;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-100,-75,150,150);
  },



};



// game.interactions["empty"]["gumballMachine"] = function(){ };

