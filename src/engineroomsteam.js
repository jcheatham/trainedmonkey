items["engineRoomSteam"] = {
  name: "engineRoomSteam",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["engineRoomSteam"] = function(){
  console.log("interact empty engineRoomSteam");
};

