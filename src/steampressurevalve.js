items["steamPressureValve"] = {
  name: "steamPressureValve",
  preload: function(phaser) {
    phaser.load.image('x', 'img/x.png');
  },
  init: function(phaser) {
  }
};

game.interactions["empty"]["steamPressureValve"] = function(){
  console.log("interact empty steamPressureValve");
};

