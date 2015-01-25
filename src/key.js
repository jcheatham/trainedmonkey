items["key"] = {
  name: "key",
  preload: function(phaser) {
    phaser.load.image('key', 'img/key.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(600, 300, 'key');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(2, 2);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  },
};

game.interactions["empty"]["key"] = function(){
  game.monkey.canMove = false;
  var itemTween = phaser.add.tween(items["key"].sprite);
  itemTween.onComplete.add(function(){
    game.monkey.canMove = true;
    game.acquireItem("key");
  }, itemTween);
  itemTween.to({x: 100, y: 100}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
};

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

