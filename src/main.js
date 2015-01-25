var game = (function() {
  var result = {
    interactions: {},
    collisionHandlers: {}
  };

  result.loadAssets = function () {

    Monkey.prototype.loadAssets();
    Car.prototype.loadAssets();
    // monkey.loadAssets();


    // phaser.load.image('monkey', 'img/monkey.png');
    phaser.load.audio('monkey', 'audio/monkey1.wav');
    phaser.load.audio('music', 'audio/music.mp3');
    // loadImage('item', 'img/item.png');
    // loadImage('train', 'img/train.png');

    _.each(items, function(item){
      if (item.preload) item.preload(phaser);
    });
  }

  result.init = function() {
    result.monkey = new Monkey();

    result.trains = [];

    var trainNames = ['owl-temp', 'fishbowl', 'owl', 'gumball', 'steam', 'engine'];

    _.each(trainNames, function(name) {
      result.trains.push(
        new Car('train.' + name + '.background', 'train.' + name + '.foreground',
                500 + 1100 * trainNames.indexOf(name), phaser.world.centerY)
      );
    });



    result.music = phaser.add.audio('music');
    result.music.play();
    
    result.sounds = {}
    result.sounds.monkey = phaser.add.audio('monkey');


    background.init();

    result.time = 60;
    result.clock = phaser.add.text(phaser.world.centerX, phaser.world.centerY + 200, result.time.toString());

    //phaser.camera.deadzone = new Phaser.Rectangle(200,380,1,1);
    phaser.world.setBounds(0,0,200000,1000);
    // phaser.camera.follow(result.monkeySprite);

    _.each(items, function(item){
      if (item.init) item.init(phaser);
      item.attachedToTrain = true;

    });

    // The locked door 
    items.door.closed = true;



    phaser.world.sort('z', Phaser.Group.SORT_ASCENDING);
    console.log('SORTING');

    result.currentItem = items.empty;
    result.canUseItem = true;
  }

  result.handleDoors = function() {
    _.each(result.trains, function(car) {
      var i = result.trains.indexOf(car);

      start = i * 1100;

      //Right door of car
      if(result.monkey.sprite.x > start + 950 && result.monkey.sprite.x < start + 1000) {
        phaser.camera.x = start + 1100;
        result.monkey.sprite.x = start + 1200;
      }

      //Left door of car
      if(result.monkey.sprite.x > start + 0 && result.monkey.sprite.x < start + 50) {
        phaser.camera.x = start - 1100;
        result.monkey.sprite.x = start - 200;
      }

    })
  }


  result.update = function() {

    // if(phaser.input.keyboard.isDown(81)) {
    //   phaser.camera.x += 10;
    // }

    result.handleDoors();




    result.trainMotionOffsetX = 0.3 * Math.sin(2 * phaser.time.totalElapsedSeconds());
    result.trainMotionOffsetY = 0.1 * Math.sin(3 * phaser.time.totalElapsedSeconds());

    _.each(items, function(item) {
      if(item.attachedToTrain) {
        game.followTrain(item);
      }
    })

    result.monkey.update(result);

    _.each(result.trains, function(car) {
      car.update(result);
    })

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

    var wantInteraction = false;
    if (phaser.input.keyboard.isDown(32)) {
      if (result.canUseItem) {
        result.canUseItem = false;
        wantInteraction = true;
      }
    } else {
      result.canUseItem = true;
    }

    var collides = false;
    _.each(items, function(item) {
      if (item.update) { item.update(phaser); }
      if (item.interactRect) {
        item.collisionRect = new Phaser.Rectangle(item.interactRect.x + item.sprite.x,
          item.interactRect.y + item.sprite.y, item.interactRect.width, item.interactRect.height);
      }
      if (!item.collisionRect) { return; }

      collides = (result.currentItem != item) && result.monkey.collisionRect.intersects(item.collisionRect);

      if (collides && result.collisionHandlers[item.name]) {
        result.collisionHandlers[item.name]();
      }

      if (collides && wantInteraction) {
        wantInteraction = false;
        if (!result.interactions[result.currentItem.name] || !result.interactions[result.currentItem.name][item.name]) {
          console.log("FAILURE", result.currentItem.name, item.name);
          result.monkey.confuse();
          return;
        }
        result.interactions[result.currentItem.name][item.name]();
      }
    });

    if (wantInteraction) {
      result.interactions[result.currentItem.name]["empty"]();
    }
  }

  result.dropItem = function() {
    console.log("dropItem");
    result.currentItem.attachedToTrain = true;
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
    if (!items[item]) { console.log("unknown item: ",item); return; }
    //if (result.currentItem != items.empty) { console.log("WARNING: acquiring item while currentItem != empty"); }
    result.currentItem = items[item];
    result.monkey.attachItem(result.currentItem);
    item.attachedToTrain = false;
  }


  result.followTrain = function(item) {
    if(item.sprite === undefined) return;
    item.sprite.x += game.trainMotionOffsetX;
    item.sprite.y += game.trainMotionOffsetY;
  }


  return result;

})();
