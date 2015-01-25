items["steamSwitch"] = {
  name: "steamSwitch",
  preload: function(phaser) {
    phaser.load.image('steamSwitch', 'img/steam_switch_room_lever.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(450, 350, 'steamSwitch');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["steamSwitch"] = function(){
  console.log("interact empty steamSwitch");
};

