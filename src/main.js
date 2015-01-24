var trainedmonkey = (function() {
  var result = {};



  result.loadAssets = function () {

    // monkey.loadAssets();

    game.load.image('monkey', 'img/monkey.png');
    game.load.audio('jump', 'audio/train0.wav');  
    // loadImage('item', 'img/item.png');
    // loadImage('train', 'img/train.png');
  }
// 
  result.init = function() {

    result.monkeySprite = game.add.sprite(game.world.centerX, game.world.centerY, 'monkey');
    result.monkeySprite.anchor.setTo(0.5, 0.5);

    result.time = 60;
    result.clock = game.add.text(game.world.centerX, game.world.centerY + 200, result.time.toString());

    result.jumpSound = game.add.audio('jump');  


  }

  result.update = function() {

    result.time -= 1.0 / 60;
    result.clock.text = result.time.toString();

    if(game.input.keyboard.isDown(39)) {  
      result.monkeySprite.x -= 1;
    } else {
      result.monkeySprite.x += 1;
    }

    // if(_.random(1000) < 3) {
    //   result.jumpSound.play();
    // }

    if(game.input.keyboard.isDown(37)) {
      result.jumpSound.play();
    }
  
  }

  return result;

})();