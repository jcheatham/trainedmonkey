var background = (function(){
  var results = {};

  results.loadAssets = function() {
    phaser.load.image('mountain', 'img/bg_1.png');
  };

  results.init = function() {
    results.mountains = [];
    for(var i = 0; i < 5; i++){
      results.mountains.push(phaser.add.tileSprite(i*1912, 0, 1912, 600, 'mountain'));
    }
  };

  results.update = function() {
    _.each(results.mountains, function(mountain){
      mountain.tilePosition.x -= 1;
    });
  };

  return results;

})();