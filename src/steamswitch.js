items["steamSwitch"] = {
  name: "steamSwitch",
  preload: function(phaser) {
    phaser.load.image('steamSwitch', 'img/steam_switch_room_lever.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(4580, 290, 'steamSwitch');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.interactRect = new Phaser.Rectangle(-50,-50,100,100);
    this.steamOn = false;
  },
  turn: function() {
    if (this.steamOn) return;
    game.monkey.canMove = false;
    var valveTween = phaser.add.tween(items["steamSwitch"].sprite);
    valveTween.onComplete.add(function(){
      this.steamOn = false;
      items.steamValve.steam(true);
      items.hatrack.jostle();
      game.monkey.canMove = true;
    }, valveTween);
    valveTween.to({rotation: 360}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
  }
};

game.interactions["empty"]["steamSwitch"] = function(){
  console.log("interact empty steamSwitch");
};

