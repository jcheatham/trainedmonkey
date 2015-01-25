items["gumballMachine"] = {
  name: "gumballMachine",
  preload: function(phaser) {
    phaser.load.image('gumballMachine', 'img/gumballmachine.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(3695, 265, 'gumballMachine');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 90;
    this.sprite.scale = new PIXI.Point(8, 8);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["gumballMachine"] = function(){
  console.log("interact empty gumballMachine");
};

