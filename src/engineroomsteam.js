items["engineRoomSteam"] = {
  name: "engineRoomSteam",
  preload: function(phaser) {
    phaser.load.image('engineRoomSteam', 'img/steam.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(5500, 300, 'engineRoomSteam');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
  }
};

game.interactions["empty"]["engineRoomSteam"] = function(){
  console.log("interact empty engineRoomSteam");
};

