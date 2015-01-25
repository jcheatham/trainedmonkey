var game = (function() {
  var result = {};

  result.loadAssets = function () {

    Monkey.prototype.loadAssets();
    // monkey.loadAssets();

    // phaser.load.image('monkey', 'img/monkey.png');
    phaser.load.audio('jump', 'audio/train0.wav');
    // loadImage('item', 'img/item.png');
    // loadImage('train', 'img/train.png');

    _.each(items, function(item){
      if (item.preload) item.preload(phaser);
    });
  }

  result.init = function() {
    result.monkey = new Monkey();

    result.time = 60;
    result.clock = phaser.add.text(phaser.world.centerX, phaser.world.centerY + 200, result.time.toString());

    result.jumpSound = phaser.add.audio('jump');

    //phaser.camera.deadzone = new Phaser.Rectangle(200,380,1,1);
    phaser.world.setBounds(0,0,2000,1000);
    phaser.camera.follow(result.monkeySprite);

    _.each(items, function(item){
      if (item.init) item.init(phaser);
    });

    phaser.world.sort('z', Phaser.Group.SORT_ASCENDING);

    result.currentItem = "key";
    result.canUseItem = true;
  }

  result.update = function() {

    result.monkey.update();

    result.time -= 1.0 / 60;
    result.clock.text = result.time.toString();

    // if(phaser.input.keyboard.isDown(39)) {
    //   result.monkeySprite.x -= 1;
    // } else {
    //   result.monkeySprite.x += 1;
    // }

    // if(_.random(1000) < 3) {
    //   result.jumpSound.play();
    // }

    if(phaser.input.keyboard.isDown(37)) {
      result.jumpSound.play();
    }

    if (phaser.input.keyboard.isDown(32)) {
      if (result.canUseItem) {
        result.canUseItem = false;
        result.interact("gum");
      }
    } else {
      result.canUseItem = true;
    }
  }

  result.interact = function(item) {
    if (!items[result.currentItem]) { console.log("Unhandled currentItem "+result.currentItem); return; }
    (items[result.currentItem].interactions[item] || items[result.currentItem].interactions["default"])(item);
  }

  result.dropItem = function(item) {
    console.log("dropItem "+item);
    // if currentItem == empty, return
  }

  result.removeItem = function(item) {
    console.log("removeItem "+item);
  }

  result.addItem = function(item) {
    console.log("addItem "+item);
  }

  result.acquireItem = function(item) {
    console.log("acquireItem "+item);
    if (!result.currentItem == "empty") { console.log("WARNING: acquiring item while currentItem != empty"); }
    result.currentItem = item;
    // set held item to item
  }

  return result;

})();
