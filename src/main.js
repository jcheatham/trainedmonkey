var game = (function() {
  var result = {
    interactions: {},
    collisionHandlers: {}
  };

  result.countDown = false;

  //lose function
  result.lose = function(){

    setTimeout(function(){
      result.loseImg.y = 0;

      setTimeout(function(){
        window.open("/", "_self");
      }, 2000);
    }, 5000);

  };

  //win function
  result.win = function(){
    countDown = 5;
    var slowTrain = setInterval(function(){
      result.countDown--;
    }, 1000);
    setTimeout(function(){
      clearInterval(slowTrain);
      result.win.Img.y = 0;
      setTimeout(function(){
        window.open("/", "_self");
      }, 2000);
    }, 5000);

  };

  result.loadAssets = function () {

    Monkey.prototype.loadAssets();
    Car.prototype.loadAssets();
    // monkey.loadAssets();
    phaser.load.image('lose', 'img/monkeywrench_lose.png');
    phaser.load.image('win', 'img/monkeywrench_win.png');


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

    result.loseImg = phaser.add.sprite(0, -1000, 'lose');
    result.winImg = phaser.add.sprite(0, -1000, 'win');
    result.loseImg.z = 1000;
    result.winImg.z = 1000;


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
      item.falling = false;


    });

    // The locked door
    items.door.closed = true;

    phaser.world.sort('z', Phaser.Group.SORT_ASCENDING);

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
    background.update(result.countDown);

    // if(phaser.input.keyboard.isDown(81)) {
    //   phaser.camera.x += 10;
    // }

    result.handleDoors();




    result.trainMotionOffsetX = 0.3 * Math.sin(2 * phaser.time.totalElapsedSeconds());
    result.trainMotionOffsetY = 0.1 * Math.sin(3 * phaser.time.totalElapsedSeconds());

    _.each(items, function(item) {
      if(item.attachedToTrain) {
        game.followTrain(item);
      } else if(item.falling){
        game.applyGravity(item);
      }
    })

    result.monkey.update(result);

    _.each(result.trains, function(car) {
      car.update(result);
    })

    result.time -= 1.0 / 60;
    result.clock.text = result.time.toString();

    if (result.time < 0) {
      result.lose();
    }
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
        if (!result.interactions[result.currentItem.name] || !result.interactions[result.currentItem.name][item.name]) {
          console.log("FAILURE", result.currentItem.name, item.name);
          result.monkey.confuse();
          return;
        }
        wantInteraction = false;
        result.interactions[result.currentItem.name][item.name]();
      }
    });

    if (wantInteraction) {
      result.interactions[result.currentItem.name]["empty"]();
    }
  }

  result.discardItem = function() {
    if (result.currentItem == items.empty) { return; }
    result.dropItem(result.currentItem);
    result.currentItem = items.empty;
    result.monkey.attachItem(result.currentItem);
  }

  result.dropItem = function(item) {
    item.falling = true;
    item.velocityY = 0.0;
    item.attachedToTrain = false;
  }

  result.acquireItem = function(item) {
    console.log("acquireItem ",item);
    if (!items[item]) { console.log("unknown item: ",item); return; }
    result.discardItem();
    result.currentItem = items[item];
    result.monkey.attachItem(result.currentItem);
    item.attachedToTrain = false;
  }


  result.applyGravity = function(item) {
    var gravity = 0.1;

    if(item.sprite === undefined) return;
    if(item.velocityY === undefined) item.velocityY = 0;

    item.velocityY += gravity;
    item.sprite.y += item.velocityY;

    if(item.sprite.y > game.monkey.groundHeight) {
      item.falling = false;
      item.attachedToTrain = true;
    }

    item.sprite.x += game.trainMotionOffsetX;
    item.sprite.y += game.trainMotionOffsetY;
  }

  result.followTrain = function(item) {
    if(item.sprite === undefined) return;
    item.sprite.x += game.trainMotionOffsetX;
    item.sprite.y += game.trainMotionOffsetY;
  }


  return result;

})();
