items["hatrack"] = {
  name: "hatrack",
  preload: function(phaser) {
    phaser.load.image('hatrack', 'img/wigrack.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(1880, 280, 'hatrack');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(6, 6);
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["hatrack"] = function(){
  console.log("interact empty hatrack");
};
