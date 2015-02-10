var PopLockDancer = function(top, left, timeBetweenSteps) {
  this.image = 'assets/thepoplockdancer.gif';
  this.imageWidth = '100px';
  this.imageHeight = '100px';
  Dancer.apply(this, arguments);
};

PopLockDancer.prototype = Object.create(Dancer.prototype);
PopLockDancer.prototype.constructor = PopLockDancer;
