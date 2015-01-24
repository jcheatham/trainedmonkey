var trainedmonkey = (function() {
  var result = {};


  result.loadAssets = function () {
    game.load.image('monkey', 'img/monkey.png');
    // loadImage('item', 'img/item.png');
    // loadImage('train', 'img/train.png');
  }

  result.init = function() {

    result.monkeySprite = game.add.sprite(game.world.centerX, game.world.centerY, 'monkey');
    result.monkeySprite.anchor.setTo(0.5, 0.5);

  }

  result.update = function() {
    result.monkeySprite.x += 1;
  }

  return result;

})();