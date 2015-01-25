var game = (function() {
  var result = {};

  result.loadAssets = function () {

    Monkey.prototype.loadAssets();
    Car.prototype.loadAssets();
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
    result.train = new Car('train.engine.background', 'train.engine.foreground', phaser.world.centerX, phaser.world.centerY);
    background.init();

    // result.trainSpritePlaceholder = 

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
    console.log('SORTING');

    result.currentItem = items.empty;
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

    if (phaser.input.keyboard.isDown(32)) {
      if (result.canUseItem) {
        result.canUseItem = false;

        var monkeyRect = new Phaser.Rectangle(result.monkey.interactRect.x + result.monkey.sprite.x,
            result.monkey.interactRect.y + result.monkey.sprite.y,
            result.monkey.interactRect.width,
            result.monkey.interactRect.height);
        var itemRect = new Phaser.Rectangle();

        if (!_.some(items, function(item) {
          if (!item.sprite || item == result.currentItem) { return false; }
          itemRect.x = item.interactRect.x + item.sprite.x;
          itemRect.y = item.interactRect.y + item.sprite.y;
          itemRect.width = item.interactRect.width;
          itemRect.height = item.interactRect.height;
          if (monkeyRect.intersects(itemRect)) { result.interact(item); return true; }
        })) {
          result.interact(items.empty);
        }
      }
    } else {
      result.canUseItem = true;
    }
  }

  result.interact = function(item) {
    (result.currentItem.interactions[item.name] || result.currentItem.interactions["default"])(item);
  }

  result.dropItem = function() {
    console.log("dropItem");
    result.currentItem = items.empty;
    result.monkey.attachItem(result.currentItem);
  }

  result.removeItem = function(item) {
    console.log("removeItem ",item);
  }

  result.addItem = function(item) {
    console.log("addItem ",item);
  }

  result.acquireItem = function(item) {
    console.log("acquireItem ",item);
    if (result.currentItem != items.empty) { console.log("WARNING: acquiring item while currentItem != empty"); }
    result.currentItem = item;
    result.monkey.attachItem(result.currentItem);
  }

  return result;

})();
