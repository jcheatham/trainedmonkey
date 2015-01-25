items["key"] = {
  name: "key",
  preload: function(phaser) {
    phaser.load.image('key', 'img/key.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(600, 350, 'key');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(2, 2);
    this.interactRect = new Phaser.Rectangle(-30,-20,60,40);
  },
};

game.interactions["empty"]["key"] = function(){ game.acquireItem("key"); };

game.interactions["key"] = {};
game.interactions["key"]["empty"] = function(){
  game.dropItem();
};
game.interactions["key"]["gumball"] = function(){
  game.acquireItem("gumball");
};
game.interactions["key"]["cat"] = function(){
  game.monkey.confuse();
};

