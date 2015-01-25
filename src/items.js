var items = {
  empty: {
    name: "empty",
    interactions: {
      key: game.acquireItem,
      //key: function(item){
      //  game.monkey.canMove = false;
      //  debugger;
      //},
      gum: game.acquireItem,
      empty: function(item){ console.log("doo deeee dooo"); },
      default: function(item){ console.log("unimplemented interaction", "empty", item); },
    }
  },

  bird: {
    name: "bird",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "bird", item); },
    }
  },

  birdNest: {
    name: "birdNest",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "birdNest", item); },
    }
  },

  cat: {
    name: "cat",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "cat", item); },
    }
  },

  engineRoomLever: {
    name: "engineRoomLever",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "engineRoomLever", item); },
    }
  },

  engineRoomSteam: {
    name: "engineRoomSteam",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "engineRoomSteam", item); },
    }
  },

  fishbowl: {
    name: "fishbowl",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "fishbowl", item); },
    }
  },

  gumballMachine: {
    name: "gumballMachine",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "gumballMachine", item); },
    }
  },

  gumball: {
    name: "gumball",
    interactions: {

      key: function(item) {
        console.log("this key has been completely ruined, what were you thinking?!");
      },

      default: function(item){ console.log("unimplemented gum interaction", item); },
    },
  },

  hatrack: {
    name: "hatrack",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "hatrack", item); },
    }
  },

  key: {
    name: "key",
    preload: function(phaser) {
      phaser.load.image('key', 'img/key.png');
    },

    init: function(phaser) {
      //this.sprite = phaser.add.sprite(phaser.world.centerX, phaser.world.centerY, 'key');
      this.sprite = phaser.add.sprite(600, 300, 'key');
      this.sprite.anchor.setTo(0.5, 0.5);
      this.sprite.z = -10;
      this.interactRect = new Phaser.Rectangle(-10,-20,20,40);
    },

    interactions: {

      empty: game.dropItem,

      gum: function(item) {
        console.log("you made a cast of the key");
        game.dropItem();
        game.removeItem("gum");
        game.acquireItem("keycast");
      },

      default: function(item) {
        console.log("unsupported interaction", "key", item);
      },
    },
  },

  quarter: {
    name: "quarter",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "quarter", item); },
    }
  },

  steamPressureValve: {
    name: "steamPressureValve",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "steamPressureValve", item); },
    }
  },

  steamSwitch: {
    name: "steamSwitch",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "steamSwitch", item); },
    }
  },

  wig: {
    name: "wig",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "wig", item); },
    }
  },

  wrench: {
    name: "wrench",
    interactions: {
      default: function(item){ console.log("unimplemented interaction", "wrench", item); },
    }
  },
};
