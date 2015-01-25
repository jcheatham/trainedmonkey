items["activationLever"] = {
  name: "activationLever",
  preload: function(phaser) {
    phaser.load.image('activationLever', 'img/activation_lever.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(5720, 315, 'activationLever');
    this.sprite.anchor.setTo(1, 1);
    this.sprite.z = 100;
    this.sprite.rotation = Math.PI * 0.25;
    this.interactRect = new Phaser.Rectangle(-30,-100,60,200);
  },
  activate: function() {
    game.monkey.canMove = false;
    var tween = phaser.add.tween(items.activationLever.sprite);
    tween.onComplete.add(function(){
      items.boiler.boil();
    }, tween);
    tween.to({rotation: -0.1 * Math.PI }, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
  }
};

game.interactions["empty"]["activationLever"] = function(){
  items.activationLever.activate();
};


