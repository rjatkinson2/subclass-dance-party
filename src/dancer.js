var Dancer = function(top, left, timeBetweenSteps) {

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
  this.imageWidth = width || this.width;
  this.imageHeight = height || this.height;
  var props = {
    background-image: this.image,
    display: block,
    width: this.imageWidth,
    height: this.imageHeight
  };
  this.$node.css(props);
};
