var background = (function(){
  var results = {};

  results.loadAssets = function() {
    phaser.load.image('mountain', 'img/bg_1.png');
  };

  results.init = function() {
    results.mountains = phaser.add.tileSprite(0, 0, 1912, 600, 'mountain');
  };

  results.update = function() {
    results.mountains.tilePosition.x -= 1;
  };

  return results;

})();