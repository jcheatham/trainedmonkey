items["owl"] = {
  name: "owl",
  preload: function(phaser) {
    phaser.load.image('owl', 'img/owl_bod.png');
    phaser.load.image('owl.head', 'img/owl_head.png');
    phaser.load.image('owl.wing', 'img/owl_wing.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(750, 300, 'owl');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["owl"] = function(){
  console.log("interact empty owl");
};

