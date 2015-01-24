var trained_monkey = (function() {
  var result = {};

  result.init = function (loadImage) {
    loadImage('monkey', 'img/monkey.png');
    loadImage('item', 'img/item.png');
    loadImage('train', 'img/train.png');
  }

  return result;

})();