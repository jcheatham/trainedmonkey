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

  this.interactRect = new Phaser.Rectangle(-50,-20,90,60);
  this.canMove = true;
  this.flying = false;

  this.baseGroundHeight = 400;
  this.groundHeight = this.baseGroundHeight;

  this.chewing = false;
}

Monkey.prototype.loadAssets = function() {
  phaser.load.image('monkey.walk.0', 'img/monkey_walk_0.png');
  phaser.load.image('monkey.walk.1', 'img/monkey_walk_1.png');
  phaser.load.image('monkey.walk.2', 'img/monkey_walk_2.png');
  phaser.load.image('monkey.walk.3', 'img/monkey_walk_3.png');
  phaser.load.image('monkey.head', 'img/monkey_head.png');
  phaser.load.image('monkey.head.chew', 'img/monkey_head_chew.png');
  phaser.load.image('monkey.jump', 'img/monkey_jump.png');
  phaser.load.image('question_mark', 'img/question_mark.png');
}

Monkey.prototype.onGround = function() {
  if(this.sprite.y > this.groundHeight - 0.1) {
    return true;
  } else {
    return false;
  }
}

Monkey.prototype.update = function(game) {


  this.sprite.x += game.trainMotionOffsetX
  this.sprite.y += game.trainMotionOffsetY

  this.groundHeight += game.trainMotionOffsetY;


  this.accelerationX = 0;

  if(this.onGround()) {


    if(Math.abs(this.velocityX) > 0.01) {

      var unitVelocity = this.velocityX / Math.abs(this.velocityX);
      this.direction = unitVelocity;
      var friction = -unitVelocity * this.mu;
      this.accelerationX = friction;

    } else {


      if(this.velocityX > 0)  {
        this.direction = -1;
      } else {
        this.direction = 1;
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
  if (this.flying) {
    if (this.sprite.x != 7100) { phaser.camera.x = 6600; }
    this.sprite.setTexture(PIXI.TextureCache["monkey.jump"])
    this.sprite.x = 7100;
    this.sprite.y = 300 + 100 * Math.sin(phaser.time.totalElapsedSeconds());
  } else {
    if (this.sprite.x < 100) this.sprite.x = 100;
    if (this.sprite.x > 6200) this.sprite.x = 6200;
  }

  if(this.chewing) {
    if(Math.floor(3.0 * phaser.time.totalElapsedSeconds()) % 2) {
      this.headSprite.setTexture( PIXI.TextureCache['monkey.head'] );
    } else {
      this.headSprite.setTexture( PIXI.TextureCache['monkey.head.chew'] );
    }
  } else if(game.currentItem.name != 'wig')  {
    this.headSprite.setTexture( PIXI.TextureCache['monkey.head'] );
  }

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
    var itemTargetY = this.sprite.y + 0.5 * this.animationIndex - 40;

    this.itemSprite.x += (itemTargetX - this.itemSprite.x) / 3.0;
    this.itemSprite.y += (itemTargetY - this.itemSprite.y) / 3.0;
  }

  this.simpleGroundCollisionHandler();

  if(!this.onGround()) {
    this.sprite.setTexture(PIXI.TextureCache["monkey.jump"])
  }

  if (this.confusionEmitter) {
    this.confusionEmitter.x = this.headSprite.x;
    this.confusionEmitter.y = this.headSprite.y;
  }

  this.collisionRect = new Phaser.Rectangle(this.interactRect.x + this.sprite.x,
      this.interactRect.y + this.sprite.y,
      this.interactRect.width,
      this.interactRect.height);

  if(items.door.closed && this.sprite.x > 2000 && this.sprite.x < 2030) {
    this.sprite.x = 2000;
  }
}


// game.monkey.attachItem(key);
Monkey.prototype.attachItem = function(item) {
  this.itemSprite = item.sprite;
}

Monkey.prototype.simpleGroundCollisionHandler = function() {
  if(this.sprite.y > this.groundHeight) {
    this.sprite.y = this.groundHeight;
    this.velocityY = 0;
  }
}

Monkey.prototype.handleMotionInput = function() {

  if (!this.canMove) return;

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
    this.jump();
  } else if(this.onGround()) {
    this.hasJump = true;
  }

}

Monkey.prototype.jump = function() {
  if (!this.hasJump) { return; }
  this.hasJump = false;
  this.velocityY = -10.0 + -10.0 * Math.abs(this.velocityX);
}

Monkey.prototype.confuse = function() {
  game.sounds.monkey.play();
  var e = phaser.add.emitter(this.headSprite.x, this.headSprite.y, 10);
  e.width = 75;
  e.makeParticles('question_mark');
  e.minParticleSpeed.set(0, -400);
  e.maxParticleSpeed.set(0, -500);
  e.setRotation(-60, 60);
  //e.setAlpha(0, 1, 0.5);
  e.setScale(0.5, 0.5, 1, 1);
  e.gravity = 1000;
  //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
  //	The 5000 value is the lifespan of each particle before it's killed
  e.start(false, 600, 20, 10);

  this.confusionEmitter = e;
}

