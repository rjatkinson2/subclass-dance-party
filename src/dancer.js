var Dancer = function(top, left, timeBetweenSteps) {
  this.dancerName = "Dancer";
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition();
  if ( this.image ) {
    this.setImage();
  }

};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top || this.top;
  this.left = left || this.left;

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setImage = function(image, width, height) {
  this.image = image || this.image;
  this.imageWidth = width || this.imageWidth;
  this.imageHeight = height || this.imageHeight;
  var props = {
    'background-image': 'url(' + this.image + ')',
    'display': 'block',
    'width': this.imageWidth,
    'height': this.imageHeight
  };
  this.$node.css(props).addClass('gif');
};

Dancer.prototype.lineUp = function(startTop, startLeft, endTop, endLeft) {
  var top = ( endTop - startTop  ) * ( this.index / window.totalDancers[this.dancerName] );
  var left = endLeft || $(window).width()/2;
  this.setPosition(top, left);
  this.resize(50);
};

Dancer.prototype.resize = function(multiplier) {
  var props = {
    'width': this.imageWidth - ( multiplier * ( window.totalDancers[this.dancerName] / this.index ) ),
    'height': this.imageHeight - ( multiplier * ( window.totalDancers[this.dancerName] / this.index ) )
  };
  this.$node.css(props);
}












