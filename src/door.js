items["door"] = {
  name: "door",
  closed: true,
  preload: function(phaser) {
    phaser.load.image('door', 'img/fish_bowl_room_door.png');
  },
  init: function(phaser) {
    this.sprite = phaser.add.sprite(2040, 305, 'door');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.z = 100;
    this.sprite.scale = new PIXI.Point(1, 1);
    this.interactRect = new Phaser.Rectangle(-20,-20,100,400);
  }
};
