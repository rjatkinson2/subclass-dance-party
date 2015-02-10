var PopLockDancer = function(top, left, timeBetweenSteps) {
  this.image = 'assets/poplocking.gif';
  this.imageWidth = 100;
  this.imageHeight = 100;
  Dancer.apply(this, arguments);
};

PopLockDancer.prototype = Object.create(Dancer.prototype);
PopLockDancer.prototype.constructor = PopLockDancer;
