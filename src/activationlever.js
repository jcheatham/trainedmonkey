items["activationLever"] = {
  name: "activationLever",
  preload: function(phaser) {
    phaser.load.image('activationLever', 'img/activation_lever.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(350, 350, 'activationLever');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["activationLever"] = function(){
  console.log("interact empty activationLever");
};


