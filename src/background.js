'use strict';

var background = (function(){

  //class for background tracks that contain a list of sprites
  //each sprite to be iterated through on each game loop
  //updating the sprites position and resetting it if it passes off the screen
  var SpriteTrack = function(speed){
    this.speed = speed;
    this.feed = [];
    this.pixelLength = 0;
    return this;
  };

  SpriteTrack.prototype.add = function(sprite){
    this.feed.push(sprite);
    this.pixelLength += sprite._width;
    return this;
  };

  SpriteTrack.prototype.iterate = function(){
    var _this = this;
    console.log(_this);
    this.feed.forEach(function(sprite){
      if (sprite.x === phaser._width) {
        sprite.x = (sprite._width - _this.pixelLength);
      }
      sprite.x += _this.speed;
    });
  };

  var results = {};

  results.loadAssets = function () {
    phaser.load.image('bg1', 'img/bg1.png');
    phaser.load.image('bg2', 'img/bg2.png');

  };

  results.init = function() {

    //initialize mountainclouds
    var bg11 = phaser.add.tileSprite(0, 300, 800, 300, 'bg1'),
        bg12 = phaser.add.tileSprite(-phaser._width, 300, 800, 300, 'bg1');
    results.mountainTrack = new SpriteTrack(1);
    results.mountainTrack.add(bg11).add(bg12);

    //initialize cloudclouds
    var bg21 = phaser.add.tileSprite(0, 0, 800, 300, 'bg2'),
        bg22 = phaser.add.tileSprite(-phaser._width, 0, 800, 300, 'bg2');
    results.cloudTrack = new SpriteTrack(5);
    results.cloudTrack.add(bg21).add(bg22);
  };

  results.update = function() {
    results.mountainTrack.iterate();
    results.cloudTrack.iterate();
  };

  return results;
})();
