items["engineRoomLever"] = {
  name: "engineRoomLever",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["engineRoomLever"] = function(){
  console.log("interact empty engineRoomLever");
};


