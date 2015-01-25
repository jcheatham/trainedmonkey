var background = (function(){

  var results = {};

  results.speed = 0;

  results.loadAssets = function() {
    phaser.load.image('mountain', 'img/bg_1.png');
    phaser.load.image('tree1', 'img/tree_0.png');
    phaser.load.image('tree2', 'img/tree_1.png');
  };

  results.init = function() {

    results.mountains = [];
    for(var i = 0; i < 5; i++){
      results.mountains.push(phaser.add.tileSprite(i*1912, 0, 1912, 600, 'mountain'));
    }

    results.trees = [];
    for(var i = 0; i < 20; i++){
      results.trees.push(phaser.add.sprite(i*Math.floor(Math.random()*600), Math.floor(Math.random()*200), 'tree2'));
      results.trees.push(phaser.add.sprite(i*Math.floor(Math.random()*600), Math.floor(Math.random()*200), 'tree1'));
    }
  };

  results.update = function(breaks) {
    if (results.speed > 900){
      game.lose();
    }

    if (breaks) {
      if (results.speed > 0) results.speed--;
    } else {
      results.speed = phaser.time.totalElapsedSeconds();
    }

    _.each(results.trees, function(tree){
      if (tree.x < -300) {

        tree.x = phaser._width * 8;
      }
      tree.x -= results.speed;

    });
    _.each(results.mountains, function(mountain){
      mountain.tilePosition.x -= Math.floor(results.speed/10);
      if (results.speed/10 < 0) game.win();
    });
  };

  return results;

})();
