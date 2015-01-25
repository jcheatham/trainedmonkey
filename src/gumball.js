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
  game.acquireItem("gumball");
  game.monkey.chewing = true;
  items.gumball.sprite.visible = false;
};

game.interactions["gumball"] = {};
game.interactions["gumball"]["gumballMachine"] = function(){ console.log("there's no putting the genie back in the bottle"); };

game.interactions["gumball"]["boiler"] = function() {
  game.discardItem();
  items.gumball.sprite.y = 10000;
  items.boiler.seal();
  game.monkey.chewing = false;
};
