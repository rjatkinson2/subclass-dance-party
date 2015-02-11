var WormDancer = function(top, left, timeBetweenSteps) {
  this.danceOffOffset = -100;
  this.image = 'assets/worm.gif';
  this.imageWidth = 250;
  this.imageHeight = 250;
  Dancer.apply(this, arguments);
  this.dancerName = "WormDancer";
  this.$node.addClass('worm');
  this.$node.click(function(){
    $(this).addClass('popUp');
    var $context = $(this);
    setTimeout(function(){
      $context.addClass('popDown');
    }, 1000);
    setTimeout(function() {
      $context.removeClass('popUp');
      $context.removeClass('popDown');
    }, 1000);
  });
};

WormDancer.prototype = Object.create(Dancer.prototype);
WormDancer.prototype.constructor = WormDancer;
WormDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('bigger');
};

WormDancer.prototype.lineUp = function(startTop, startLeft, endTop, endLeft) {
  startLeft = startLeft + $(window).width() / 4;
  endLeft = startLeft - this.imageWidth * ( Math.abs(this.index - window.totalDancers[this.dancerName]) / window.totalDancers[this.dancerName]);
  Dancer.prototype.lineUp.call(this, startTop, startLeft, endTop, endLeft);
};
