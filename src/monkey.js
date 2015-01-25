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
  this.accelerationY = 0.2;

  this.accelerationMag = 2.0;

  this.maxVelocityX = 5.0;
  this.maxVelocityY = 5.0;

  this.mu = 0.2;

  // Animation 

  this.animationIndex = 0.0;
  this.animationSequence = [0, 1, 2, 3];

  this.direction = 1;

  this.hasJump = true;

}

Monkey.prototype.loadAssets = function() {
  phaser.load.image('monkey.walk.0', 'img/monkey_walk_0.png');
  phaser.load.image('monkey.walk.1', 'img/monkey_walk_1.png');
  phaser.load.image('monkey.walk.2', 'img/monkey_walk_2.png');
  phaser.load.image('monkey.walk.3', 'img/monkey_walk_3.png');
  phaser.load.image('monkey.head', 'img/monkey_head.png');
  phaser.load.image('monkey.jump', 'img/monkey_jump.png');
}

Monkey.prototype.onGround = function() {
  if(this.sprite.y > 299.9) {
    return true;
  } else {
    return false;
  }
}

Monkey.prototype.update = function() {

  this.accelerationX = 0;

  if(this.onGround()) {
    if(Math.abs(this.velocityX) > 0.3) {
    
      var unitVelocity = this.velocityX / Math.abs(this.velocityX);
      this.direction = unitVelocity; 
      var friction = -unitVelocity * this.mu;
      this.accelerationX = friction;
    
    } else {

      if(this.velocityX > 0)  {
        this.direction = 1;
      } else {
        this.direction = -1;
      }
    
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


  // Animation

  this.animationIndex += Math.abs(this.velocityX) / 30.0;
  if(this.animationIndex >= this.animationSequence.length) {
    this.animationIndex -= this.animationSequence.length;
  }


  var animationFrame = this.animationSequence[Math.floor(this.animationIndex)];

  var spriteName = "monkey.walk." + animationFrame.toString();
  this.sprite.setTexture( PIXI.TextureCache[spriteName] );


  if(this.direction < 0) {
    if(this.sprite.scale.x > 0) {
      var headTargetX = this.sprite.x + (10 * this.sprite.scale.x);
      var headTargetY = this.sprite.y + 0;
    }
    this.sprite.scale.x = -4;
  } else {
    if(this.sprite.scale.x > 0) {
      var headTargetX = this.sprite.x + (10 * this.sprite.scale.x);
      var headTargetY = this.sprite.y + 0;
    }
    this.sprite.scale.x = 4;
  }

  var headTargetX = this.sprite.x + (10 * this.sprite.scale.x);
  var headTargetY = this.sprite.y + this.animationIndex;

  this.headSprite.x += (headTargetX - this.headSprite.x) / 3.0;
  this.headSprite.y += (headTargetY - this.headSprite.y) / 3.0;

  if(this.itemSprite !== undefined) {
    var itemTargetX = this.sprite.x - (10 * this.sprite.scale.x);
    var itemTargetY = this.sprite.y + 0.5 * this.animationIndex;

    this.itemSprite.x += (itemTargetX - this.itemSprite.x) / 3.0;
    this.itemSprite.y += (itemTargetY - this.itemSprite.y) / 3.0;
  }

  this.simpleGroundCollisionHandler();

  if(!this.onGround()) {
    this.sprite.setTexture(PIXI.TextureCache["monkey.jump"])
  }

}


// game.monkey.attachItem(key);
Monkey.prototype.attachItem = function(item) {
  if(item.sprite !== undefined) {
    this.itemSprite = item.sprite;
  }
}

Monkey.prototype.simpleGroundCollisionHandler = function() {
  if(this.sprite.y > 300) {
    this.sprite.y = 300;
    this.velocityY = 0;
  }
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

  // Jump button - up
  if(phaser.input.keyboard.isDown(38)) {
    if(this.onGround() && this.hasJump) {
      this.jump();  
    }
  } 
  else if(this.onGround()) {
    this.hasJump = true;
  }

  console.log(this.onGround());
  console.log(this.hasJump);
  
}

Monkey.prototype.jump = function() {
  this.velocityY = -10.0 + -10.0 * Math.abs(this.velocityX);
  this.hasJump = false;
}


