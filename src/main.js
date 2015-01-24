var trainedmonkey = (function() {
  var result = {};



  result.loadAssets = function () {

    // monkey.loadAssets();

    phaser.load.image('monkey', 'img/monkey.png');
    phaser.load.audio('jump', 'audio/train0.wav');
    // loadImage('item', 'img/item.png');
    // loadImage('train', 'img/train.png');

    _.each(items, function(item){
      item.preload(phaser);
    });
  }

  result.init = function() {

    result.monkeySprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'monkey');
    result.monkeySprite.anchor.setTo(0.5, 0.5);

    result.time = 60;
    result.clock = phaser.add.text(phaser.world.centerX, phaser.world.centerY + 200, result.time.toString());

    result.jumpSound = phaser.add.audio('jump');

    _.each(items, function(item){
      item.init(phaser);
    });
  }

  result.update = function() {

    result.time -= 1.0 / 60;
    result.clock.text = result.time.toString();

    if(phaser.input.keyboard.isDown(39)) {
      result.monkeySprite.x -= 1;
    } else {
      result.monkeySprite.x += 1;
    }

    // if(_.random(1000) < 3) {
    //   result.jumpSound.play();
    // }

    if(phaser.input.keyboard.isDown(37)) {
      result.jumpSound.play();
    }

  }

  return result;

})();
