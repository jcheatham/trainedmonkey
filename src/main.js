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

    result.jumpSound = game.add.audio('jump');  



  }

  result.update = function() {
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