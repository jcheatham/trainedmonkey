var Monkey = function() {
  this.sprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'monkey.walk.0');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.sprite.z = 100;
  this.sprite.scale = new PIXI.Point(4, 4);

  this.headSprite = phaser.add.sprite(phaser.world.centerX + 10, phaser.world.centerY + 10, 'monkey.head');
  this.headSprite.anchor.setTo(0.5, 0.5);
  this.headSprite.z = 101;
  this.headSprite.scale = new PIXI.Point(4, 4);

  this.velocityX = 0;
  this.velocityY = 0;

  this.accelerationX = 0;
  this.accelerationY = 0;

  this.accelerationMag = 2.0

  this.maxVelocityX = 5.0;
  this.maxVelocityY = 5.0;

  this.mu = 0.1;

  // Animation 

  this.animationIndex = 0.0;
  this.animationSequence = [0, 1, 2, 3];


}

Monkey.prototype.loadAssets = function() {
  phaser.load.image('monkey.walk.0', 'img/monkey_walk_0.png');
  phaser.load.image('monkey.walk.1', 'img/monkey_walk_1.png');
  phaser.load.image('monkey.walk.2', 'img/monkey_walk_2.png');
  phaser.load.image('monkey.walk.3', 'img/monkey_walk_3.png');
  phaser.load.image('monkey.head', 'img/monkey_head.png');
}

Monkey.prototype.onGround = function() {
  return true;
}

Monkey.prototype.update = function() {

  this.accelerationX = 0;

  if(this.onGround()) {
    if(Math.abs(this.velocityX) > 1.0) {
      var unitVelocity = this.velocityX / Math.abs(this.velocityX); 
      var friction = -unitVelocity * this.mu;
      this.accelerationX = friction;
    } else {
      this.velocityX = 0;
    }
  }

  this.handleMotionInput();

  this.velocityX += this.accelerationX;
  this.velocityY += this.accelerationY;


  if(this.velocityX > this.maxVelocityX) {
    this.velocityX = this.maxVelocityX;
  }

  if(this.velocityX < -this.maxVelocityX) {
    this.velocityX = -this.maxVelocityX;
  }

  if(this.velocityY > this.maxVelocityY) {
    this.velocityY = this.maxVelocityY;
  }

  if(this.velocityY < -this.maxVelocityY) {
    this.velocityY = -this.maxVelocityY;
  }


  this.sprite.x += this.velocityX;
  this.sprite.y += this.velocityY;

  this.headSprite.x = this.sprite.x + 40;
  this.headSprite.y = this.sprite.y + 0;


  // Animation

  this.animationIndex += Math.abs(this.velocityX) / 30.0;
  if(this.animationIndex >= this.animationSequence.length) {
    this.animationIndex -= this.animationSequence.length;
  }

  console.log(this.animationSequence);
  console.log(this.animationIndex);
  var animationFrame = this.animationSequence[Math.floor(this.animationIndex)];
  console.log(animationFrame);


  var spriteName = "monkey.walk." + animationFrame.toString();
  this.sprite.setTexture( PIXI.TextureCache[spriteName] );

}

Monkey.prototype.handleMotionInput = function() {

  // Left button
  if(phaser.input.keyboard.isDown(39)) {
    this.accelerationX += this.accelerationMag;   
  }
  // Right button
  if(phaser.input.keyboard.isDown(37)) {
    this.accelerationX += -this.accelerationMag;  
  } 
  
}


