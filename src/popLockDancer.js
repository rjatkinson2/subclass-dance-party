var PopLockDancer = function(top, left, timeBetweenSteps) {
  this.image = 'assets/poplocking.gif';
  this.imageWidth = 250;
  this.imageHeight = 250;
  Dancer.apply(this, arguments);
  this.dancerName = "PopLockDancer";
  this.$node.addClass('popLock');
  this.$node.hover(function(){
    $(this).addClass('flipped');
    var $context = $(this);
    setTimeout(function(){
      $context.removeClass('flipped');
    }, 500);
  });
};

PopLockDancer.prototype = Object.create(Dancer.prototype);
PopLockDancer.prototype.constructor = PopLockDancer;

PopLockDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('bigger');
};

PopLockDancer.prototype.lineUp = function(startTop, startLeft, endTop, endLeft) {
  startLeft = startLeft - $(window).width() / 4 - this.imageWidth;
  endLeft = startLeft + this.imageWidth * 1.25 * ( Math.abs(this.index - window.totalDancers[this.dancerName]) / window.totalDancers[this.dancerName]);
  Dancer.prototype.lineUp.call(this, startTop, startLeft, endTop, endLeft);
};
