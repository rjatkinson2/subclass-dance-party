var WormDancer = function(top, left, timeBetweenSteps) {
  this.image = 'assets/worm.gif';
  this.imageWidth = 200;
  this.imageHeight = 200;
  Dancer.apply(this, arguments);

};

WormDancer.prototype = Object.create(Dancer.prototype);
WormDancer.prototype.constructor = WormDancer;
