items["gumball"] = {
  name: "gumball",
  preload: function(phaser) {
    phaser.load.image('gumball', 'img/gumball.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(3700, 200, 'gumball');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(4, 4);
    this.interactRect = new Phaser.Rectangle(-30,-30,60,60);
    this.sprite.visible = false;
  }
};

game.interactions["empty"]["gumball"] = function(){
  console.log("consume gum");
  game.monkey.chewingGum = true;
  items.gumball.sprite.y = 10000;
};

game.interactions["gumball"] = {};
game.interactions["gumball"]["empty"] = function(){ game.discardItem(); };
game.interactions["gumball"]["gumballMachine"] = function(){ console.log("there's no putting the genie back in the bottle"); };
