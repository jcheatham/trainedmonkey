items["fishTable"] = {
  name: "fishTable",

  preload: function(phaser) {
    phaser.load.image('cage', 'img/cage.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(800, 370, 'cage');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 94;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-45,-20,90,260);
  },



};



// game.interactions["empty"]["gumballMachine"] = function(){ };

