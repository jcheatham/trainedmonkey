items["fishTable"] = {
  name: "fishTable",

  preload: function(phaser) {
    phaser.load.image('gumballMachine', 'img/gumballmachine.png');
  },
  init: function(phaser) {
    this.sprite = new PIXI.Point(800, 200);
    this.interactRect = new Phaser.Rectangle(-45,-20,90,160);
  },



};



// game.interactions["empty"]["gumballMachine"] = function(){ };

