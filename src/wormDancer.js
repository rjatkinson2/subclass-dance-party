var WormDancer = function(top, left, timeBetweenSteps) {
  this.image = 'assets/theworm.gif';
  this.imageWidth = '100px';
  this.imageHeight = '100px';
  Dancer.apply(this, arguments);
};

WormDancer.prototype = Object.create(Dancer.prototype);
WormDancer.prototype.constructor = WormDancer;
