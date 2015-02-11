describe("wormDancer", function() {

  var wormDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wormDancer = new WormDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(wormDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should load the correct image file", function() {
    expect('url(file:///Users/student/repo/2015-02-subclass-dance-party/'+ wormDancer.image + ')').to.be.equal(wormDancer.$node.css('background-image'));
  });

  it('should add dancers within the proper window boundaries', function() {
    var top = parseInt(wormDancer.$node.css('top').replace('px', '') ) + wormDancer.$node.outerHeight();
    var left = parseInt(wormDancer.$node.css('left').replace('px', '') ) + wormDancer.$node.outerWidth();
    expect(top).to.be.lessThan( $(window).height() );
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(wormDancer, "step");
      expect(wormDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wormDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wormDancer.step.callCount).to.be.equal(2);
    });
  });
});

