var trainedmonkey = (function() {
  var result = {};


  result.loadAssets = function () {
    game.load.image('monkey', 'img/monkey.png');
    // loadImage('item', 'img/item.png');
    // loadImage('train', 'img/train.png');
  }

  result.init = function() {

    var monkeySprite = game.add.sprite(game.world.centerX, game.world.centerY, 'monkey');
    monkeySprite.anchor.setTo(0.5, 0.5);

  }

  result.update = function() {
    
  }

  return result;

})();